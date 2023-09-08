import Graphic from "@arcgis/core/Graphic";
import Collection from "@arcgis/core/core/Collection";
import { whenOnce } from "@arcgis/core/core/reactiveUtils";
import { Extent, Mesh, Polygon } from "@arcgis/core/geometry";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LabelClass from "@arcgis/core/layers/support/LabelClass";
import { UniqueValueRenderer } from "@arcgis/core/rasterRenderers";
import UniqueValueInfo from "@arcgis/core/renderers/support/UniqueValueInfo";
import request from "@arcgis/core/request";
import { ExtrudeSymbol3DLayer, LabelSymbol3D, PolygonSymbol3D, TextSymbol3DLayer } from "@arcgis/core/symbols";
import LineCallout3D from "@arcgis/core/symbols/callouts/LineCallout3D";
import FeatureTable from "@arcgis/core/widgets/FeatureTable";
import ButtonMenuItem from "@arcgis/core/widgets/FeatureTable/Grid/support/ButtonMenuItem";
import LayerList from "@arcgis/core/widgets/LayerList";
import { sceneLayer, view } from "./main";

import * as utils from "@arcgis/core/core/urlUtils";
import JSZip from "jszip";

const labelSymbol = new LabelSymbol3D({
  verticalOffset: { screenLength: "30px" },
  callout: new LineCallout3D({
    color: "black",
    size: "1px"
  }),
  symbolLayers: [
    new TextSymbol3DLayer({
      material: { color: "black" },
      halo: { color: "white", size: "1px" },
      size: "13px"
    })
  ]
});

const layerList = new LayerList({ view });
view.ui.add(layerList, "top-right");

view.when(async () => {
 const associatedLayer = await whenOnce(() => (sceneLayer as any).associatedLayer as FeatureLayer);

  // view.goTo(sceneLayer.fullExtent ?? sceneLayer.associatedLayer.fullExtent, {
  //   animate: false
  // });

  const table = new FeatureTable({
    view,
    layer: sceneLayer,
    editingEnabled: true,
    // layer: sceneLayer.associatedLayer ?? layer,
    container: "tableDiv",
    menuConfig: {
      items: [
        new ButtonMenuItem({
          label: "Add as graphic",
          clickFunction: () => addAsGraphic(table.highlightIds),
          autoCloseMenu: true
        }),
        new ButtonMenuItem({
          label: "Download source",
          clickFunction: () => downloadSource(associatedLayer, table.highlightIds),
          autoCloseMenu: true
        }),
        new ButtonMenuItem({
          label: "Download glb",
          clickFunction: () => downloadGlb(associatedLayer, table.highlightIds),
          autoCloseMenu: true
        }),
        new ButtonMenuItem({
          label: "Delete",
          clickFunction: async () => {
            await deleteFeatures(table.highlightIds);
            table.refresh();
          },
          autoCloseMenu: true
        })
      ]
    },
    visibleElements: {
      menuItems: {
        clearSelection: true,
        refreshData: true,
        toggleColumns: true,
        selectedRecordsShowAllToggle: true,
        zoomToSelection: true
      }
    }
  }) as FeatureTable;

  await addModelExtentsLayer(associatedLayer);
});

/**
 * Adds a layer that visualizes the feature extents.
 */
async function addModelExtentsLayer(associatedLayer: FeatureLayer): Promise<void> {

  if (!associatedLayer) {
    return;
  }

  const ret = await request(`${associatedLayer.url}/${associatedLayer.layerId}/query3d`, {
    query: { where: "1=1", returnGeometry: true, f: "json" }
  });
  const { features } = ret.data;

  const graphics: Graphic[] = [];
  const uniqueValueInfos: UniqueValueInfo[] = [];

  for (const { geometry, attributes } of features) {
    if (!geometry) {
      continue;
    }

    const extent = Extent.fromJSON(geometry);
    extent.spatialReference = associatedLayer.spatialReference;
    const polygon = Polygon.fromExtent(extent);

    // change Z values to be at zmin, not in the center
    for (const ring of polygon.rings) {
      for (const coord of ring) {
        coord[2] = extent.zmin;
      }
    }

    const symbol = new PolygonSymbol3D({
      symbolLayers: [
        new ExtrudeSymbol3DLayer({
          material: {
            color: [255, 0, 255, 0.5]
          },
          size: extent.zmax - extent.zmin
        })
      ]
    });

    const graphic = new Graphic({
      geometry: polygon,
      attributes: { OBJECTID: attributes.OBJECTID }
    });
    graphics.push(graphic);

    uniqueValueInfos.push(
      new UniqueValueInfo({
        symbol,
        value: attributes.OBJECTID
      })
    );
  }

  const extentsFl = new FeatureLayer({
    title: "Model extents",
    visible: false,
    source: graphics,
    objectIdField: "OBJECTID",
    spatialReference: associatedLayer.spatialReference,
    renderer: new UniqueValueRenderer({
      uniqueValueInfos,
      field: "OBJECTID"
    }),
    labelingInfo: [
      new LabelClass({
        symbol: labelSymbol,
        labelExpressionInfo: {
          expression: "$feature.OBJECTID"
        }
      })
    ]
  });

  view.map.add(extentsFl);
}

async function downloadGlb(associatedLayer: FeatureLayer, objectIds: Collection<number>): Promise<void> {
  return downloadFormat(associatedLayer, objectIds, "glb");
}

async function downloadSource(associatedLayer: FeatureLayer, objectIds: Collection<number>): Promise<void> {
  return downloadFormat(associatedLayer, objectIds, "source");
}

async function downloadFormat(
  associatedLayer: FeatureLayer,
  objectIds: Collection<number>,
  format: "source" | "glb"
): Promise<void> {
  
  const assetTypeField = (associatedLayer as any).infoFor3D.assetTypeField;

  const { features } = (
    await request(`${associatedLayer.url}/${associatedLayer.layerId}/query`, {
      query: {
        objectIds: objectIds.toArray(),
        outFields: [associatedLayer.objectIdField, assetTypeField],
        f: "json"
      }
    })
  ).data;

  for (const feature of features) {
    const ret = await request(`${associatedLayer.url}/${associatedLayer.layerId}/query3d`, {
      query: {
        formatOf3DObjects:
          format === "source" ? feature.attributes[assetTypeField] : "3D_glb",
        objectIds: [feature.attributes[associatedLayer.objectIdField]],
        f: "json"
      }
    });
    const assetMaps = ret.data.assetMaps as AssetMap[];
    const files = await collectAssets(assetMaps);

    if (files.length === 1) {
      (utils as any).downloadBlobAsFile(files[0], files[0].name);
    } else {
      const zip = new JSZip();

      for (const file of files) {
        zip.file(file.name, await file.arrayBuffer());
      }

      const mainName =
        assetMaps.find(({ assetType }) =>
          (associatedLayer as any).infoFor3D.editFormats.includes(assetType)
        )?.assetName ?? assetMaps[0].assetName;
      const content = await zip.generateAsync({ type: "blob" });

      (utils as any).downloadBlobAsFile(content, mainName.replace(/\//g, "-") + ".zip");
    }
  }
}

async function addAsGraphic(objectIds: Collection<number>): Promise<void> {
  //const fl = layer.associatedLayer as FeatureLayer;
  const { features } = await sceneLayer.queryFeatures({
    objectIds: objectIds.toArray(),
    returnGeometry: true
  });
  view.graphics.addMany(features);

  await Promise.all(
    features.map(async ({ geometry }) => {
      if (geometry.type === "mesh") {
        console.log();
        await (geometry as Mesh).load();
      }
    })
  );

  await view.goTo(features);
}

interface AssetMap {
  globalId: string;
  parentGlobalId: string;
  assetName: string;
  assetHash: string;
  assetType: string;
  flags: string[];
  conversionStatus: string;
  size: number;
  complexity: number;
  sourceHash: string;
  assetURL: string;
  seqNo: number;
}

async function collectAssets(assetMaps: AssetMap[]): Promise<File[]> {
  const fileParts = new Map<string, AssetMap[]>();

  for (const assetMap of assetMaps) {
    let parts = fileParts.get(assetMap.assetName);

    if (!parts) {
      parts = [];
      fileParts.set(assetMap.assetName, parts);
    }

    parts.push(assetMap);
  }

  return Promise.all(
    Array.from(fileParts.keys()).map((key) => {
      const parts = fileParts.get(key)!;
      parts.sort((a, b) => a.seqNo - b.seqNo);
      return downloadAsset(
        parts[0].assetName,
        parts.map(({ assetURL }) => assetURL)
      );
    })
  );
}

async function downloadAsset(
  filename: string,
  partUrls: string[]
): Promise<File> {
  const blobs = await Promise.all(
    partUrls.map(
      async (url) => (await request(url, { responseType: "blob" })).data as Blob
    )
  );
  return new File(blobs, filename);
}

async function deleteFeatures(objectIds: Collection<number>): Promise<void> {
  const query = sceneLayer.createQuery();
  query.returnGeometry = false;
  query.objectIds = objectIds.toArray();
  query.outFields = ["*"];
  const result = await sceneLayer.queryFeatures(query);

  await sceneLayer.applyEdits({
    deleteFeatures: result.features
  });
}