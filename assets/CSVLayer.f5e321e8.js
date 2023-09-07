var F=Object.defineProperty,I=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var p=(e,t,i)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,l=(e,t)=>{for(var i in t||(t={}))N.call(t,i)&&p(e,i,t[i]);if(h)for(var i of h(t))_.call(t,i)&&p(e,i,t[i]);return e},m=(e,t)=>I(e,q(t));import{a as r,d as o,n as g,d9 as j,bZ as x,r as w,er as J,ap as C,iV as k,a9 as D,d6 as L,fD as P,rm as V,db as T,bF as E,bI as R,H as u,N as v}from"./vendor.fd144a9e.js";import{c as $}from"./clientSideDefaults.a3ca70e0.js";import"./QueryEngineCapabilities.c2e9875c.js";let a=class extends j{constructor(e){super(e),this.type="csv",this.refresh=x(async t=>{await this.load();const{extent:i,timeExtent:n}=await this._connection.invoke("refresh",t);return this.sourceJSON.extent=i,n&&(this.sourceJSON.timeInfo.timeExtent=[n.start,n.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=w(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){await this.load(t);const i=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return J.fromJSON(i)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e,t={}){return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e,t={}){await this.load(t);const i=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:i.count,extent:C.fromJSON(i.extent)}}async querySnapping(e,t={}){return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _startWorker(e){this._connection=await k("CSVSourceWorker",{strategy:D("feature-layers-workers")?"dedicated":"local",signal:e});const{url:t,delimiter:i,fields:n,latitudeField:S,longitudeField:O,spatialReference:d,timeInfo:c}=this.loadOptions,y=await this._connection.invoke("load",{url:t,customParameters:this.customParameters,parsingOptions:{delimiter:i,fields:n==null?void 0:n.map(b=>b.toJSON()),latitudeField:S,longitudeField:O,spatialReference:d==null?void 0:d.toJSON(),timeInfo:c==null?void 0:c.toJSON()}},{signal:e});this.locationInfo=y.locationInfo,this.sourceJSON=y.layerDefinition,this.delimiter=y.delimiter}};r([o()],a.prototype,"type",void 0),r([o()],a.prototype,"loadOptions",void 0),r([o()],a.prototype,"customParameters",void 0),r([o()],a.prototype,"locationInfo",void 0),r([o()],a.prototype,"sourceJSON",void 0),r([o()],a.prototype,"delimiter",void 0),a=r([g("esri.layers.graphics.sources.CSVSource")],a);function f(e,t){throw new v(t,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let s=class extends T{constructor(...e){super(...e),this.capabilities=$(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=E.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return typeof e=="string"?l({url:e},t):e}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(e,t){return t.showLabels!=null?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){if(!e)return void this._set("url",e);const t=R(e);this._set("url",t.path),t.query&&(this.customParameters=l(l({},this.customParameters),t.query))}async createGraphicsSource(e){const t=new a({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url},customParameters:this.customParameters});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(u.from(e)||this.createQuery())).then(i=>{if(i==null?void 0:i.features)for(const n of i.features)n.layer=n.sourceLayer=this;return i})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(u.from(e)||this.createQuery()))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(u.from(e)||this.createQuery()))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(u.from(e)||this.createQuery()))}write(e,t){return super.write(e,m(l({},t),{writeLayerSchema:!0}))}clone(){throw new v("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return f(this,"csv-layer:save")}async saveAs(e,t){return f(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return w(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};r([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),r([o({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),r([o({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),r([o({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),r([o({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),r([L("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),r([o({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),r([o({type:["show","hide"]})],s.prototype,"listMode",void 0),r([o({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),r([o({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),r([o({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),r([o()],s.prototype,"outFields",void 0),r([o({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),r([o({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",void 0),r([o({json:{read:!1},cast:null,type:a,readOnly:!0})],s.prototype,"source",void 0),r([o({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),r([o({json:{read:P,write:{isRequired:!0,ignoreOrigin:!0,writer:V}}})],s.prototype,"url",null),s=r([g("esri.layers.CSVLayer")],s);const B=s;export{B as default};
