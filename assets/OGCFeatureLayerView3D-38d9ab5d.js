import{aD as r,aE as i,aF as o,aB as s}from"./index-cdda5707.js";import{_ as m}from"./FeatureLayerViewBase3D-f187104a.js";import"./FeatureLikeLayerView3D-5042cb26.js";import"./dehydratedFeatureComparison-860c6b48.js";import"./queryForSymbologySnapping-fd994e68.js";import"./hash-6f442295.js";import"./Graphics3DScaleVisibility-18b9f7c2.js";import"./rendererConversion-fa3e158c.js";import"./optimizedFeatureQueryEngineAdapter-59eeddb7.js";import"./centroid-3dcadaf5.js";import"./PooledRBush-31030974.js";import"./quickselect-7692f5ca.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-27d6735e.js";import"./normalizeUtils-a5d2b0fe.js";import"./normalizeUtilsCommon-24f79564.js";import"./WhereClause-dc16111f.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-044ce772.js";import"./generateRendererUtils-6b5398d1.js";import"./FeatureStore-b0a4d6f3.js";import"./BoundsStore-a4d619df.js";import"./projectExtentUtils-2b7f21f8.js";import"./LayerView3D-b22e015d.js";import"./query-2f8589ea.js";import"./pbfQueryUtils-0dd7c50f.js";import"./pbf-10aa4b25.js";import"./EventedSet-a956fe62.js";import"./LayerView-200784d6.js";import"./RefreshableLayerView-eb18be25.js";const l=a=>{let e=class extends a{get availableFields(){return this.layer.fieldsIndex.fields.map(p=>p.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const q=t;export{q as default};
