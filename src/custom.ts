import Graphic from "@arcgis/core/Graphic";
import Mesh from "@arcgis/core/geometry/Mesh";
import Point from "@arcgis/core/geometry/Point";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { FillSymbol3DLayer, MeshSymbol3D } from "@arcgis/core/symbols";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { sceneLayer, view } from "./main";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-button";

function generateUUID() {
  return (<any>[1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}


// Screen message
const getMsg = () => document.getElementById("msg")!;
const msg = (text: string | number) => (getMsg().textContent = String(text));
const msgShow = () => (getMsg().style.opacity = "1");
const msgHide = () => (getMsg().style.opacity = "0");
const msgHideMs = (delayMs = 3000) => {
  setTimeout(msgHide, delayMs);
};



const graphicsLayer = new GraphicsLayer({
  elevationInfo: { mode: "absolute-height" }
});
view.map.add(graphicsLayer);

const svm = new SketchViewModel({
  layer: graphicsLayer,
  view: view
});

view.when().then(async () => {
  dropLocation = view.center;

  const block = document.getElementById("block")!;
  view.ui.add(block, "top-right");

  const uploadModelButton = document.getElementById("upload-model-button")!;
  uploadModelButton.addEventListener("click", handleUploadModelButtonClick);

  view.container.addEventListener("drop", (e) => handleDrop(e));
  view.container.addEventListener("dragover", (e) => handleDragOver(e));
});


async function placeModel(location: Point, file: File) {
  // create mesh from model files and location
  const mesh = await Mesh.createFromFiles(location, [file], {
    layer: sceneLayer
  });
  await mesh.load();

  // create GlobalID attributes
  const attributes = {} as any;
  const globalIdFieldName = sceneLayer.fields.filter((result) => {
    return result.type === "global-id";
  })[0].name;
  attributes[globalIdFieldName] = `{${generateUUID()}}`;

  // create the graphic
  const graphic = new Graphic({
    geometry: mesh,
    attributes: attributes,
    symbol: new MeshSymbol3D({
      symbolLayers: [
        new FillSymbol3DLayer({ material: { color: [255, 255, 255, 1] } })
      ]
    })
  });

  graphicsLayer.add(graphic);
  svm.update(graphic);

  const handle = svm.on("update", async (event) => {
    if (event.state === "complete") {
      console.log(graphic);
      handle.remove();
      await sceneLayer.applyEdits({
        addFeatures: [graphic]
      });
      graphicsLayer.remove(graphic);
    }
  });
}

async function handleUploadModelButtonClick() {

  let input = document.createElement("input");
  input.type = "file";
  input.onchange = async () => {
    const fileList = input.files;
    if (fileList) {
      let files = Array.from(fileList);
      const url = URL.createObjectURL(files[0]);
      placeModel(view.center, files[0]);
    }
  };

  input.click();
}

let dropLocation: Point;

async function handleDrop(event: DragEvent) {
  event.preventDefault();

  const transferItems = event.dataTransfer && event.dataTransfer.items;
  const transferFiles = event.dataTransfer && event.dataTransfer.files;

  if (transferItems && transferItems.length) {
    // Use DataTransferItemList interface to access the file(s)
    
    const item = transferItems[0];

    if (item.kind === "file") {
      const file = item.getAsFile()!;
      msg("Uploading and placing the model ...");
      await placeModel(dropLocation, file);
      msg("Model placed");
      msgHideMs();
    }

    
  } else if (transferFiles && transferFiles.length) {
    // Use DataTransfer interface to access the file(s)
    placeModel(dropLocation, transferFiles[0]);
  }
}

function handleDragOver(event: DragEvent) {
  msgShow();
  msg("Place model anywhere in the view ...");
  dropLocation = view.toMap(event);
  event.preventDefault();
}