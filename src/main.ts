import Map from "@arcgis/core/Map";
import { SpatialReference } from "@arcgis/core/geometry";
import IdentityManager from "@arcgis/core/identity/IdentityManager";
import OAuthInfo from "@arcgis/core/identity/OAuthInfo";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import SceneView from "@arcgis/core/views/SceneView";
import "@esri/calcite-components/dist/calcite/calcite.css";

// setAssetPath("https://js.arcgis.com/calcite-components/1.0.0-beta.77/assets");

// const params = new URLSearchParams(document.location.search.slice(1));
// const someParam = params.has("someParam");

const pathname = document.location.pathname;
const directory = pathname.substring(0, pathname.lastIndexOf('/'));
const popupCallbackUrl = `${document.location.origin}${directory}/oauth-callback-api.html`;

IdentityManager.registerOAuthInfos([
  new OAuthInfo({
    appId: "KojZjH6glligLidj",
    popup: true,
    popupCallbackUrl,
  }),
]);

(window as any).setOAuthResponseHash = (responseHash: string) => {
  IdentityManager.setOAuthResponseHash(responseHash);
};

const defaultUrl =
  "https://services2.arcgis.com/cFEFS0EWrhfDeVw9/arcgis/rest/services/SO__3857__CH_Zurich__Buildings_InnerCity/SceneServer";

const params = new URLSearchParams(window.location.search);

export const sceneLayer = new SceneLayer({
  outFields: ["*"],
  title: "Sample 3D Object Layer",
  url: params.get("url") || defaultUrl
});

export const map = new Map({
  basemap: "topo-vector",
  ground: "world-elevation",
  layers: [
    sceneLayer
  ]
});

export const view = new SceneView({
  spatialReference: SpatialReference.WebMercator,
  viewingMode: "local",
  container: "viewDiv",
  map,
  qualityProfile: "high",
  camera: {
    position: {
      spatialReference: SpatialReference.WebMercator,
      x: 950536.3463579026,
      y: 6002448.1828584075,
      z: 2058.876304641366
    },
    heading: 8.074740948860455,
    tilt: 34.11767720840555
  },
  environment: {
    lighting: {
      directShadowsEnabled: true
    }
  }
});

(window as any)["view"] = view;
