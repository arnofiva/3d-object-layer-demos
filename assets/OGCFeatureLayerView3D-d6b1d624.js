import{aD as r,aE as i,aF as o,aB as s}from"./main-79e5ed80.js";import{_ as m}from"./FeatureLayerViewBase3D-680cfbad.js";import"./FeatureLikeLayerView3D-0a06e10d.js";import"./dehydratedFeatureComparison-d30367d4.js";import"./queryForSymbologySnapping-be0451bb.js";import"./elevationInfoUtils-287337e4.js";import"./hash-6f442295.js";import"./Graphics3DScaleVisibility-eaf5a046.js";import"./rendererConversion-22515807.js";import"./optimizedFeatureQueryEngineAdapter-f5f88773.js";import"./centroid-3dcadaf5.js";import"./PooledRBush-506b9510.js";import"./quickselect-d16016af.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-360bd3bb.js";import"./normalizeUtils-996b11fe.js";import"./normalizeUtilsCommon-4aa2ad72.js";import"./WhereClause-ae8c5a06.js";import"./executionError-e8d36121.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-a3586684.js";import"./generateRendererUtils-0f364d1e.js";import"./FeatureStore-48143fe8.js";import"./BoundsStore-d475102f.js";import"./projectExtentUtils-d31b5a37.js";import"./LayerView3D-af974166.js";import"./query-2b60d096.js";import"./pbfQueryUtils-93c2b136.js";import"./pbf-725ddaf6.js";import"./EventedSet-9f3fb8de.js";import"./LayerView-535107ac.js";import"./RefreshableLayerView-10c78a74.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const H=t;export{H as default};
