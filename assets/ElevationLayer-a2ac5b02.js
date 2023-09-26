import{fg as m,fh as f,fi as g,fj as w,fk as T,fl as b,aB as S,fm as _,c3 as p,fn as $,fo as I,az as c,ax as d,aD as o,aE as s,bj as h,fp as O,fq as E,aF as j,be as D}from"./main-79e5ed80.js";import{p as L}from"./ArcGISCachedService-ca4b2177.js";import"./TileInfoTilemapCache-cb2cb64a.js";import"./TilemapCache-92e9a460.js";let i=class extends L(m(f(g(w(D))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=T()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=b(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map(a=>a.toLowerCase().trim());return t?{operations:{supportsTileMap:t.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let a=0;a<t.typeKeywords.length;a++)if(t.typeKeywords[a].toLowerCase()==="elevation 3d layer")return!0;throw new S("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(_).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,a){const l=(a=a||{signal:null}).signal!=null?a.signal:a.signal=new AbortController().signal,u={responseType:"array-buffer",signal:l},v={noDataValue:a.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,a)).then(()=>p(this.getTileUrl(e,r,t),u)).then(n=>this._lercDecoder.decode(n.data,v,l)).then(n=>new $(n))}getTileUrl(e,r,t){const a=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,l=I({...this.parsedUrl.query,blankTile:!a&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${l?"?"+l:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery-09f7f5d1.js"),["./ElevationQuery-09f7f5d1.js","./main-79e5ed80.js","./main-7772480e.css"],import.meta.url);return d(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery-09f7f5d1.js"),["./ElevationQuery-09f7f5d1.js","./main-79e5ed80.js","./main-7772480e.css"],import.meta.url);return d(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,a){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,a):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await p(this.parsedUrl.path,r);t.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[y]}};o([s({readOnly:!0})],i.prototype,"capabilities",void 0),o([h("service","capabilities",["capabilities"])],i.prototype,"readCapabilities",null),o([s({json:{read:{source:"copyrightText"}}})],i.prototype,"copyright",void 0),o([s({readOnly:!0,type:O})],i.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),o([s({type:["show","hide"]})],i.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],i.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],i.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],i.prototype,"operationalLayerType",void 0),o([s()],i.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],i.prototype,"type",void 0),o([s(E)],i.prototype,"url",void 0),o([s()],i.prototype,"version",void 0),o([h("version",["currentVersion"])],i.prototype,"readVersion",null),i=o([j("esri.layers.ElevationLayer")],i);const y=Symbol("default-fetch-tile");i.prototype.fetchTile[y]=!0;const M=i;export{M as default};
