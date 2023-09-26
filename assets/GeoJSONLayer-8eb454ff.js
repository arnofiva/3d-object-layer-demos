import{cd as x,aD as s,aE as r,aF as b,h$ as w,eh as $,dR as N,dk as O,aB as f,aW as J,gm as R,dT as q,gg as I,ju as P,gy as T,jv as k,jw as D,b9 as L,gw as z,ba as G,gq as Z,fh as C,fi as Q,fj as V,bA as E,fm as A,iV as m,jp as B,dN as g,az as W,i1 as M,cx as c,jx as U,go as H,gs as K,iZ as X,i_ as Y,i$ as ee,gt as te,jy as se,i9 as re,ia as ie,jz as oe,i8 as ne,jA as ae,j2 as le,jB as ue,fq as de,ic as pe,be as he}from"./main-79e5ed80.js";import{c as ce}from"./clientSideDefaults-8aeb911a.js";import"./QueryEngineCapabilities-42e44ded.js";const F="esri.layers.graphics.sources.GeoJSONSource",v=x.getLogger(F);let p=class extends w{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:i}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,i&&(this.sourceJSON.timeInfo.timeExtent=[i.start,i.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(i=>N.fromJSON(i))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(i=>({count:i.count,extent:O.fromJSON(i.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new f("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,i=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)i.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:i,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new f("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,i=this._geometryForSerialization(e);return i?{geometry:i.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?J.fromExtent(t.extent):t}async _startWorker(e){this._connection=await R("GeoJSONSourceWorker",{strategy:q("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:i,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:S}=this.layer,_=this.layer.originOf("spatialReference")==="defaults",j={url:l,customParameters:S,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:_?null:i&&i.toJSON()},h=await this._connection.invoke("load",j,{signal:e});for(const y of h.warnings)v.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&v.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=ce(this.sourceJSON.hasZ,!0)}};s([r()],p.prototype,"capabilities",void 0),s([r()],p.prototype,"type",void 0),s([r({constructOnly:!0})],p.prototype,"layer",void 0),s([r()],p.prototype,"sourceJSON",void 0),p=s([b(F)],p);const ye=pe();let o=class extends P(T(k(D(L(z(G(Z(C(Q(V(he))))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new p({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(A).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),m(this.renderer,this.fieldsIndex),B(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?g(this.url):null}set renderer(e){m(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=g(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:i}=await W(()=>import("./editingSupport-9c55cbd4.js"),["./editingSupport-9c55cbd4.js","./main-79e5ed80.js","./main-7772480e.css","./normalizeUtils-996b11fe.js","./normalizeUtilsCommon-4aa2ad72.js"],import.meta.url);await this.load();const n=await i(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return M(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:i,timeExtent:n}=this;return e.timeExtent=i!=null&&n!=null?n.offset(-i.value,i.unit):n||null,e}getFieldDomain(e,t){let i,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(i=u.domains&&u.domains[e],i&&i.type==="inherited"&&(i=this._getLayerDomain(e)),!0))),n||i||(i=this._getLayerDomain(e)),i}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(i=>{if(i?.features)for(const n of i.features)n.layer=n.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(i=>(i.name===e&&(t=i.domain),!!t)),t}};s([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),s([r({type:String})],o.prototype,"copyright",void 0),s([r({readOnly:!0})],o.prototype,"createQueryVersion",null),s([r({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),s([r({type:String})],o.prototype,"displayField",void 0),s([r({type:Boolean})],o.prototype,"editingEnabled",void 0),s([r(U)],o.prototype,"elevationInfo",void 0),s([r({type:[H],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),s([r(ye.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([r({type:O,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),s([r({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],o.prototype,"geometryType",void 0),s([r({type:Boolean})],o.prototype,"hasZ",void 0),s([r(K)],o.prototype,"id",void 0),s([r({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([r(X)],o.prototype,"labelsVisible",void 0),s([r({type:[Y],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],o.prototype,"labelingInfo",void 0),s([r(te)],o.prototype,"legendEnabled",void 0),s([r({type:["show","hide"]})],o.prototype,"listMode",void 0),s([r({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([r(se)],o.prototype,"opacity",void 0),s([r({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),s([r({readOnly:!0})],o.prototype,"parsedUrl",null),s([r(re)],o.prototype,"popupEnabled",void 0),s([r({type:ie,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([r({types:oe,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:ne}}}})],o.prototype,"renderer",null),s([r(ae)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([r({readOnly:!0})],o.prototype,"source",void 0),s([r({type:E})],o.prototype,"spatialReference",void 0),s([r({type:[le]})],o.prototype,"templates",void 0),s([r()],o.prototype,"title",void 0),s([r({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([r({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([r({type:[ue]})],o.prototype,"types",void 0),s([r(de)],o.prototype,"url",null),o=s([b("esri.layers.GeoJSONLayer")],o);const ve=o;export{ve as default};