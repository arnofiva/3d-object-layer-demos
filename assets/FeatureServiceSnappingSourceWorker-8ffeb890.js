import{aD as o,aE as l,aF as v,au as B,c6 as j,aw as b,op as A,d$ as w,hB as O,bi as L,dD as G,bn as q,gH as Q,bt as F,cq as Z,eZ as W,b3 as X,aM as Y,oq as K,or as ee,dQ as te,m0 as ie,dH as se,f3 as C,os as re,ot as R,ou as k,hv as ne,cY as ae,aI as x,aT as oe,aS as H,ax as _,ba as P,hd as le,bm as D,cS as ue}from"./index-cdda5707.js";import{m as he}from"./FeatureStore-b0a4d6f3.js";import{e as ce}from"./QueryEngine-27d6735e.js";import{i as N,r as $,n as U}from"./symbologySnappingCandidates-5232552d.js";import{a as de}from"./pbfQueryUtils-0dd7c50f.js";import{S as pe,c as fe,m as _e,p as ge}from"./query-2f8589ea.js";import{o as ye}from"./BoundsStore-a4d619df.js";import"./optimizedFeatureQueryEngineAdapter-59eeddb7.js";import"./centroid-3dcadaf5.js";import"./normalizeUtils-a5d2b0fe.js";import"./normalizeUtilsCommon-24f79564.js";import"./WhereClause-dc16111f.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-044ce772.js";import"./generateRendererUtils-6b5398d1.js";import"./pbf-10aa4b25.js";import"./PooledRBush-31030974.js";import"./quickselect-7692f5ca.js";let T=class extends B{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,i){this._pending.push({promise:e,callback:i}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(i=>e.callback(i)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};o([l()],T.prototype,"updating",void 0),T=o([v("esri.core.AsyncSequence")],T);class me{constructor(e,i){this.data=e,this.resolution=i,this.state={type:a.CREATED},this.alive=!0}process(e){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(e,i){return{type:a.FETCH_COUNT,previous:e,task:b(async s=>{const r=await A(i.fetchCount(this,s));this.state.type===a.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(e,i){return{type:a.FETCHED_COUNT,featureCount:i,previous:e}}_gotoFetchFeatures(e,i){return{type:a.FETCH_FEATURES,previous:e,task:b(async s=>{const r=await A(i.fetchFeatures(this,e.featureCount,s));this.state.type===a.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(e,i){return{type:a.FETCHED_FEATURES,previous:e,features:i}}_goToDone(e,i){return i.finish(this,e.features),{type:a.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:a.CREATED},e.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:e.task.abort()}}intersects(e){return e==null||!this.data.extent||(w(e,M),O(this.data.extent,M))}}var a;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(a||(a={}));const M=j();let h=class extends L{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const i=this._get("filter"),s=this._filterProperties(e);JSON.stringify(i)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const i=this._get("customParameters");JSON.stringify(i)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const i=this._get("tileInfo");i!==e&&(e!=null&&i!=null&&JSON.stringify(e)===JSON.stringify(i)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new T,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,i)=>{G(e,i,({id:s},{id:r})=>s===r)||this._process()},q)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async i=>{if(i.addedFeatures.length===0&&i.updatedFeatures.length===0&&i.deletedFeatures.length===0)return;for(const[,r]of this._pendingTiles)r.reset();const s={...i,deletedFeatures:i.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))};await this.updatingHandles.addPromise(this.store.processEdits(s,(r,n)=>this._queryFeaturesById(r,n),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!Q(this.url))return;const e=b(async i=>{try{const s=await pe(this.url,new F({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:i});this.store.extent=Z.fromJSON(s.data?.extent)}catch(s){W(s),X.getLogger(this).warn("Failed to fetch data extent",s)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(Y(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(e==null?1:e.coveredArea/e.fullArea),e!=null)for(const{data:i,resolution:s}of e.missingTiles){const r=this._pendingTiles.get(i.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(i,s)}}_collectMissingTilesInfo(){let e=null;for(let i=this.tilesOfInterest.length-1;i>=0;i--){const s=this.tilesOfInterest[i],r=this.store.process(s,(n,u)=>this._verifyTileComplexity(n,u));e==null?e=r:e.prepend(r)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(i,s)=>this._fetchCount(i,s),fetchFeatures:(i,s,r)=>this._fetchFeatures(i,s,r),finish:(i,s)=>this._finishPendingTile(i,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,i]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this.updatingHandles.addPromise(i.process(e))}_verifyTileComplexity(e,i){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,i)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<Fe}_verifyFeatureDensity(e,i){if(this.tileInfo==null)return!1;const s=this.tileSize*i;return e*(Te/(s*s))<Ce}_ensureFetchAllCounts(e){let i=!0;for(const[,s]of this._pendingTiles)s.state.type<a.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(i=!1);return i}_finishPendingTile(e,i){this.store.add(e.data,i),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(e==null?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,i){const s=new me(e,i);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,i){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:S,signal:i})}async _fetchFeatures(e,i,s){let r=0;const n=[];let u=0,p=i;for(;;){const c=this._createFeaturesQuery(e),d=this._setPagingParameters(c,r,p),{features:f,exceededTransferLimit:V}=await this._queryFeatures(c,s);d&&(r+=c.num),u+=f.length;for(const J of f)n.push(J);if(p=i-u,!d||!V||p<=0)return n}}_filterProperties(e){return e==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const i=this.globalIdField,s=this.objectIdField;if(i==null)throw new Error("Expected globalIdField to be defined");let r=null;if(this.store.featureStore.forEach(n=>{e===n.attributes[i]&&(r=n.objectId??n.attributes[s])}),r==null)throw new Error(`Expected to find a feature with globalId ${e}`);return r}_queryFeaturesById(e,i){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,i)}_queryFeatures(e,i){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,i):this._queryFeaturesJSON(e,i)}async _queryFeaturesPBF(e,i){const{sourceSpatialReference:s}=this,{data:r}=await fe(this.url,e,new de({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:S,signal:i});return K(r)}async _queryFeaturesJSON(e,i){const{sourceSpatialReference:s}=this,{data:r}=await _e(this.url,e,s,{query:this._configuration.customParameters,timeout:S,signal:i});return ee(r,this.objectIdField)}_createCountQuery(e){const i=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0),i}_createFeaturesQuery(e=null){const i=this._createBaseQuery(e);return i.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],i.returnGeometry=!0,e!=null&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(e){const i=new F({returnZ:this.hasZ,returnM:!1,geometry:this.tileInfo!=null&&e!=null?te(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}_setPagingParameters(e,i,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:u,maxRecordCount:p,supportsResultType:c}=this.capabilities.query,d=r?F.MAX_MAX_RECORD_COUNT_FACTOR:1,f=d*((c||n)&&u?u:p||Ee);return e.start=i,r?(e.maxRecordCountFactor=Math.min(d,Math.ceil(s/f)),e.num=Math.min(s,e.maxRecordCountFactor*f)):e.num=Math.min(s,f),!0}};o([l({constructOnly:!0})],h.prototype,"url",void 0),o([l({constructOnly:!0})],h.prototype,"objectIdField",void 0),o([l({constructOnly:!0})],h.prototype,"globalIdField",void 0),o([l({constructOnly:!0})],h.prototype,"capabilities",void 0),o([l({constructOnly:!0})],h.prototype,"sourceSpatialReference",void 0),o([l({constructOnly:!0})],h.prototype,"spatialReference",void 0),o([l({constructOnly:!0})],h.prototype,"store",void 0),o([l({readOnly:!0})],h.prototype,"_minimumVerticesPerFeature",null),o([l()],h.prototype,"filter",null),o([l()],h.prototype,"customParameters",null),o([l({readOnly:!0})],h.prototype,"_configuration",null),o([l()],h.prototype,"tileInfo",null),o([l()],h.prototype,"tileSize",null),o([l()],h.prototype,"tilesOfInterest",void 0),o([l({readOnly:!0})],h.prototype,"updating",null),o([l({readOnly:!0})],h.prototype,"updatingExcludingEdits",null),o([l({readOnly:!0})],h.prototype,"availability",void 0),o([l()],h.prototype,"hasZ",null),h=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],h);const Ee=2e3,S=6e5,Fe=1e6,Te=25,Ce=1;class ve{constructor(){this._store=new Map,this._byteSize=0}set(e,i){this.delete(e),this._store.set(e,i),this._byteSize+=i.byteSize}delete(e){const i=this._store.get(e);return!!this._store.delete(e)&&(i!=null&&(this._byteSize-=i.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,i){for(const[s,r]of this._store){if(this._byteSize<=e)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const i=this._store.get(e);i&&(this._store.delete(e),this._store.set(e,i))}}let m=class extends B{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*ie.MEGABYTES,this._tileBounds=new ye,this._tiles=new ve,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=j()}add(t,e){const i=[];for(const s of e)this._referenceFeature(s.objectId)===y.ADDED&&i.push(s);this._addTileStorage(t,new Set(e.map(s=>s.objectId)),Se(e)),this.featureStore.addMany(i),this._tiles.applyByteSizeLimit(this.maximumByteSize,s=>this._removeTileStorage(s))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,i){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,i)}_addTileStorage(t,e,i){const s=t.id;this._tiles.set(s,new we(t,e,i)),this._tileBounds.set(s,t.extent),this._tileFeatureCounts.set(s,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const s of t.objectIds)this._unreferenceFeature(s)===y.REMOVED&&e.push(s);this.featureStore.removeManyById(e);const i=t.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,e]of this._tiles){for(const i of t)e.objectIds.delete(i);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,i){const s=(await e(t,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const u of s){const p=se(this._tmpBoundingRect,u.geometry,r,n);p!=null&&this._tileBounds.forEachInBounds(p,c=>{const d=this._tiles.get(c);this.featureStore.add(u);const f=u.objectId;d.objectIds.has(f)||(d.objectIds.add(f),this._referenceFeature(f),this._tileFeatureCounts.set(d.data.id,d.objectIds.size))})}}process(t,e=()=>!0){if(this.tileInfo==null||!t.extent||this.extent!=null&&!O(w(this.extent,this._tmpBoundingRect),t.extent))return new I(t);if(this._tiles.has(t.id))return new I(t);const i=this._createTileTree(t,this.tileInfo);return this._simplify(i,e,null,0,1),this._collectMissingTiles(t,i,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,i,s){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await ge(e,i,s);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const i=new z(t.level,t.row,t.col);return e.updateTileInfo(i,C.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,s=>{const r=this._tiles.get(s)?.data;r&&this._tilesAreRelated(t,r)&&this._populateChildren(i,r,e,this._tileFeatureCounts.get(r.id)||0)}),i}_tilesAreRelated(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const i=t.level<e.level,s=i?t:e,r=i?e:t,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}_populateChildren(t,e,i,s){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,u=e.col>>r,p=t.row<<1,c=u-(t.col<<1)+(n-p<<1),d=t.children[c];if(d!=null)this._populateChildren(d,e,i,s);else{const f=new z(t.level+1,n,u);i.updateTileInfo(f,C.ExtrapolateOptions.POWER_OF_TWO),t.children[c]=f,this._populateChildren(f,e,i,s)}}_simplify(t,e,i,s,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),i!=null&&(i.children[s]=null),n);const u=r/2,p=u*u;let c=0;for(let d=0;d<t.children.length;d++){const f=t.children[d];c+=f!=null?this._simplify(f,e,t,d,u):p}return c===0?this._mergeChildren(t):1-c/n<Ae&&(this._purge(t),i!=null&&(i.children[s]=null),c=n),c}_mergeChildren(t){const e=new Set;let i=0;this._forEachLeaf(t,s=>{const r=this._tiles.get(s.id);if(r){i+=r.byteSize;for(const n of r.objectIds)e.has(n)||(e.add(n),this._referenceFeature(n));this._remove(s)}}),this._addTileStorage(t,e,i),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const i of t.children)i!=null&&(i.isLeaf?e(i):this._forEachLeaf(i,e))}_purge(t){if(t!=null)if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const i=t.children[e];this._purge(i),t.children[e]=null}}_collectMissingTiles(t,e,i){const s=new Oe(i,t,this.extent);return this._collectMissingTilesRecurse(e,s,1),s.info}_collectMissingTilesRecurse(t,e,i){if(t.isLeaf)return;if(!t.hasChildren)return void e.addMissing(t.level,t.row,t.col,i);const s=i/2;for(let r=0;r<t.children.length;r++){const n=t.children[r];n==null?e.addMissing(t.level+1,(t.row<<1)+((2&r)>>1),(t.col<<1)+(1&r),s):this._collectMissingTilesRecurse(n,e,s)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?y.ADDED:y.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),y.REMOVED):(e>0&&this._refCounts.set(t,e),y.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(t=>`${t.data.id}:[${Array.from(t.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(t=>`${t}:${this._refCounts.get(t)}`)}}};function Se(t){return t.reduce((e,i)=>e+be(i),0)}function be(t){return 32+Ie(t.geometry)+re(t.attributes)}function Ie(t){if(t==null)return 0;const e=R(t.lengths,4);return 32+R(t.coords,8)+e}o([l({constructOnly:!0})],m.prototype,"featureStore",void 0),o([l()],m.prototype,"tileInfo",void 0),o([l()],m.prototype,"extent",void 0),o([l()],m.prototype,"maximumByteSize",void 0),m=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],m);let we=class{constructor(e,i,s){this.data=e,this.objectIds=i,this.byteSize=s}};class z{constructor(e,i,s){this.level=e,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}}class I{constructor(e,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=k(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}class Oe{constructor(e,i,s){this._tileInfo=e,this._extent=null,this.info=new I(i),s!=null&&(this._extent=w(s))}addMissing(e,i,s,r){const n=new ne(null,e,i,s);this._tileInfo.updateTileInfo(n,C.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!O(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=k(n.extent))}}const Ae=.18751;var y;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(y||(y={}));let E=class extends ae.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=x(),this._elevationAligner=N(),this._elevationFilter=$(),this._symbologyCandidatesFetcher=U(),this._handles=new oe,this._updatingHandles=new H,this._editsUpdatingHandles=new H,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,e)=>{const i={points:t},s=await this.remoteClient.invoke("alignElevation",i,{signal:e});return _(e),s},this._getSymbologyCandidates=async(t,e)=>{const i={candidates:t,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:e});return _(e),s}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear(),this._handles?.destroy()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:i,timeInfo:s,fields:r}=t.serviceInfo,{hasZ:n}=t,u=P.fromJSON(t.spatialReference);this._spatialReference=u,this._featureStore=new he({...t.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new ce({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fields:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new h({store:new m({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:u,sourceSpatialReference:P.fromJSON(t.serviceInfo.spatialReference)});const p=t.configuration.viewType==="3d";return this._elevationAligner=N(p,{elevationInfo:t.elevationInfo!=null?le.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:u}),this._elevationFilter=$(p),this._handles.add([D(()=>this._featureFetcher.availability,c=>this.emit("notify-availability",{availability:c}),q),D(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),{result:{}}}async fetchCandidates(t,e){await this._whenSetup.promise,_(e);const i=Re(t),s=e!=null?e.signal:null,r=await this._queryEngine.executeQueryForSnapping(i,s);_(s);const n=await this._elevationAligner.alignCandidates(r.candidates,s);_(s);const u=await this._symbologyCandidatesFetcher.fetch(n,s);_(s);const p=u.length===0?n:n.concat(u);return{result:{candidates:this._elevationFilter.filter(i,p)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=t.tileInfo!=null?C.fromJSON(t.tileInfo):null,g}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),this._featureFetcher.refresh(),g}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),_(e),await ue(()=>!this.updatingExcludingEdits,e),_(e),g}async getDebugInfo(t,e){return _(e),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,e){this._updatingHandles.addPromise(this._whenSetup.promise),_(e);const i=x();return this._pendingApplyEdits.set(t.id,i),this._featureFetcher.applyEdits(i.promise),this._editsUpdatingHandles.addPromise(i.promise),g}async endApplyEdits(t,e){const i=this._pendingApplyEdits.get(t.id);return i&&i.resolve(t.edits),_(e),g}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),g}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),g}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=U(t,this._getSymbologyCandidates),g}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=t.filter!=null?F.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};o([l({readOnly:!0})],E.prototype,"updating",null),o([l({readOnly:!0})],E.prototype,"updatingExcludingEdits",null),o([l()],E.prototype,"_isInitializing",void 0),E=o([v("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],E);const Ke=E;function Re(t){return{point:t.point,mode:t.mode,distance:t.distance,returnEdge:t.returnEdge,returnVertex:t.returnVertex,query:t.filter!=null?t.filter:{where:"1=1"}}}const g={result:{}};export{Ke as default};
