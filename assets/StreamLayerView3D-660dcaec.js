import{aD as s,aE as i,aF as d,dA as P,dB as M,au as R,aV as y,gg as U,cr as _,cg as k,eW as $,cp as T,aB as x,cx as C}from"./main-79e5ed80.js";import{o as E}from"./StreamFeatureManager-696fe8d3.js";import{createConnection as G}from"./createConnection-c5247714.js";import{r as V}from"./EventedSet-9f3fb8de.js";import{E as j}from"./FeatureLikeLayerView3D-0a06e10d.js";import{n as F}from"./LayerView3D-af974166.js";import{d as L}from"./LayerView-535107ac.js";import"./query-2b60d096.js";import"./normalizeUtils-996b11fe.js";import"./normalizeUtilsCommon-4aa2ad72.js";import"./pbfQueryUtils-93c2b136.js";import"./pbf-725ddaf6.js";import"./dehydratedFeatureComparison-d30367d4.js";import"./queryForSymbologySnapping-be0451bb.js";import"./elevationInfoUtils-287337e4.js";import"./hash-6f442295.js";import"./Graphics3DScaleVisibility-eaf5a046.js";import"./rendererConversion-22515807.js";import"./optimizedFeatureQueryEngineAdapter-f5f88773.js";import"./centroid-3dcadaf5.js";import"./PooledRBush-506b9510.js";import"./quickselect-d16016af.js";import"./floorFilterUtils-73949d2d.js";import"./QueryEngine-360bd3bb.js";import"./WhereClause-ae8c5a06.js";import"./executionError-e8d36121.js";import"./json-48e3ea08.js";import"./QueryEngineCapabilities-42e44ded.js";import"./utils-a3586684.js";import"./generateRendererUtils-0f364d1e.js";import"./FeatureStore-48143fe8.js";import"./BoundsStore-d475102f.js";import"./projectExtentUtils-d31b5a37.js";const B=2500;let l=class extends k{getObjectId(){return this.objectId}};s([i({type:Number,json:{read:!0}})],l.prototype,"objectId",void 0),l=s([d("esri.layers.graphics.controllers.StreamGraphic")],l);let N=class{constructor(t){this.onUpdate=t,this._idToGraphic=new Map}destroy(){this._idToGraphic.clear()}add(t){this._idToGraphic.set(t.objectId,t)}get(t){return this._idToGraphic.get(t)}forEach(t){this._idToGraphic.forEach(t)}removeById(t){const r=this._idToGraphic.get(t);return r?(r.sourceLayer=r.layer=null,this._idToGraphic.delete(t),r):null}update(t,r){this.onUpdate(t,r)}get size(){return this._idToGraphic.size}},a=class extends P(M(R)){constructor(){super(...arguments),this.isPaused=!1,this.graphics=new V,this._updateInfo={websocket:0,client:0},this._updateIntervalId=null,this._outSpatialReference=null}initialize(){this.addResolvingPromise(this.layer.when(()=>this._startup()))}destroy(){this.clear()}_clearInterval(){this._updateIntervalId!==null&&(clearInterval(this._updateIntervalId),this._updateIntervalId=null)}clear(){this._clearInterval(),this.connection=y(this.connection),this.store=y(this.store),this.graphics.clear(),this.handles.removeAll()}get updating(){return!this.connection||this.connection.connectionStatus==="connected"}_startup(){const{layer:e,layerView:t}=this,{spatialReference:r,definitionExpression:c,geometryDefinition:p,objectIdField:h,timeInfo:g,purgeOptions:f,maxReconnectionAttempts:v,maxReconnectionInterval:I,customParameters:S}=e,w=e.geometryType?U.toJSON(e.geometryType):null,b=r,u=t.view.spatialReference,O={geometry:p,where:c};this.clear(),this._set("connection",G(e.parsedUrl,b,u,w,O,v,I,S??void 0)),this._outSpatialReference=u.toJSON(),this.store=new N(this._onUpdate.bind(this)),this.featuresManager=new E(this.store,h,g.toJSON(),f);const m="startup-watches";this.handles.remove(m),this.handles.add([e.on("send-message-to-socket",n=>this.connection.sendMessageToSocket(n)),e.on("send-message-to-client",n=>this.connection.sendMessageToClient(n)),this.connection.on("data-received",n=>this._onFeature(n)),this.connection.on("message-received",n=>this._onWebSocketMessage(n)),_(()=>[e.definitionExpression,e.geometryDefinition,e.purgeOptions],()=>this._startup())],m),this.isPaused||this._initUpdateInterval()}_onWebSocketMessage(e){if(this.layerView.emit("message-received",e),"type"in e)switch(e.type){case"delete":if(e.objectIds)for(const t of e.objectIds)this.featuresManager.removeById(t);if(e.trackIds)for(const t of e.trackIds)this.featuresManager.removeByTrackId(t);break;case"clear":this.store.forEach(t=>this.featuresManager.removeById(t.objectId))}}_onFeature(e){this._updateInfo.websocket++,this.layerView.hasEventListener("data-received")&&this.layerView.emit("data-received",{attributes:e.attributes,centroid:e.centroid,geometry:e.geometry});try{e.geometry==null||e.geometry.spatialReference||(e.geometry.spatialReference=this._outSpatialReference);const t=l.fromJSON(e);t.sourceLayer=t.layer=this.layer,this.featuresManager.add(t)}catch{}}_onUpdate(e,t){t!=null&&this.graphics.removeMany(t),e!=null&&(this._updateInfo.client+=e.length,this.graphics.addMany(e))}_initUpdateInterval(){this._clearInterval();const{updateInterval:e}=this.layer;let t=performance.now();this._updateIntervalId=setInterval(()=>{const r=performance.now(),c=r-t;if(c>B){t=r;const p=Math.round(this._updateInfo.client/(c/1e3)),h=Math.round(this._updateInfo.websocket/(c/1e3));this._updateInfo.client=0,this._updateInfo.websocket=0,this.layerView.emit("update-rate",{client:p,websocket:h})}this.featuresManager.checkForUpdates()},e)}pauseStream(){this.isPaused=!0,this._clearInterval()}resumeStream(){this.isPaused=!1,this._initUpdateInterval()}};s([i()],a.prototype,"isPaused",void 0),s([i({constructOnly:!0})],a.prototype,"layer",void 0),s([i({constructOnly:!0})],a.prototype,"layerView",void 0),s([i()],a.prototype,"connection",void 0),s([i({readOnly:!0})],a.prototype,"updating",null),a=s([d("esri.layers.graphics.controllers.StreamController")],a);const z=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...r){super(...r),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(r){r?this._doPause():this._isUserPaused||this._doResume()}};return s([i()],t.prototype,"_isUserPaused",void 0),s([i({readOnly:!0})],t.prototype,"connectionStatus",null),s([i({type:$})],t.prototype,"filter",void 0),t=s([d("esri.layers.mixins.StreamLayerView")],t),t};let o=class extends z(j(F(L))){constructor(){super(...arguments),this.type="stream-3d",this.updatePolicy=T.ASYNC,this.hasZ=!0,this.hasM=!1}initialize(){this.handles.add(_(()=>this.suspended,e=>{this.controller&&this._onSuspendedChange(e)}))}get connectionError(){const e=this.get("controller.connection.errorString");return e?new x("stream-controller",e):null}createQuery(){return new C({outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference})}queryLatestObservations(e,t){return this.queryEngine.executeQueryForLatestObservations(this._ensureQuery(e),t?.signal)}get _streamConnectionStatus(){return this.controller?.connection?.connectionStatus??"disconnected"}createController(){return new a({layer:this.layer,layerView:this})}beforeSetController(){}_doPause(){this.controller?.pauseStream()}_doResume(){this.controller?.resumeStream()}};s([i({readOnly:!0})],o.prototype,"updatePolicy",void 0),s([i({readOnly:!0})],o.prototype,"connectionError",null),s([i()],o.prototype,"controller",void 0),s([i({readOnly:!0})],o.prototype,"hasZ",void 0),s([i({readOnly:!0})],o.prototype,"hasM",void 0),s([i({readOnly:!0})],o.prototype,"_streamConnectionStatus",null),o=s([d("esri.views.3d.layers.StreamLayerView3D")],o);const Oe=o;export{Oe as default};