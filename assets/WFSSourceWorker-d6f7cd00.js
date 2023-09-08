import{ax as p,c0 as l,fp as o,fs as g,ft as _,bH as d,aB as u,aw as f,av as w,b3 as E}from"./index-cdda5707.js";import{m as q}from"./FeatureStore-b0a4d6f3.js";import{g as F,e as x,f as S}from"./QueryEngine-27d6735e.js";import{T,I as b}from"./geojson-aee614d4.js";import{d as I}from"./sourceUtils-88ca9e4a.js";import{H as j}from"./wfsUtils-62a669a8.js";import"./BoundsStore-a4d619df.js";import"./PooledRBush-31030974.js";import"./quickselect-7692f5ca.js";import"./optimizedFeatureQueryEngineAdapter-59eeddb7.js";import"./centroid-3dcadaf5.js";import"./normalizeUtils-a5d2b0fe.js";import"./normalizeUtilsCommon-24f79564.js";import"./WhereClause-dc16111f.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-044ce772.js";import"./generateRendererUtils-6b5398d1.js";import"./xmlUtils-444cb4c0.js";class J{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async t=>{const{objectIdField:e}=this._queryEngine,i=await j(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:t});await T(i),p(t);const s=b(i,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:e});if(!l(this._queryEngine.spatialReference,o))for(const r of s)r.geometry!=null&&(r.geometry=g(F(_(r.geometry,this._queryEngine.geometryType,!1,!1),o,this._queryEngine.spatialReference)));let n=1;for(const r of s){const a={};I(this._fieldsIndex,a,r.attributes,!0),r.attributes=a,r.attributes[e]==null&&(r.objectId=r.attributes[e]=n++)}return s}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(t,e){const{getFeatureUrl:i,getFeatureOutputFormat:s,spatialReference:n,fields:r,geometryType:a,featureType:h,objectIdField:y,customParameters:m}=t;this._featureType=h,this._customParameters=m,this._getFeatureUrl=i,this._getFeatureOutputFormat=s,this._fieldsIndex=new d(r),await this._checkProjection(n),p(e),this._queryEngine=new x({fields:r,geometryType:a,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new q({geometryType:a,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(e.signal);return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new u("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){return this._customParameters=t,this._snapshotTask?.abort(),this._snapshotTask=f(this._snapshotFeatures),this._snapshotTask.promise.then(e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)},e=>{this._queryEngine.featureStore.clear(),w(e)||E.getLogger("esri.layers.WFSLayer").error(new u("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(t){try{await S(o,t)}catch{throw new u("unsupported-projection","Projection not supported",{spatialReference:t})}}}export{J as default};
