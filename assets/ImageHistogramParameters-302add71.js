import{aD as s,aE as c,sA as J,aF as j,bl as D,ca as k,rX as z,gF as A,ib as Ee,bj as P,bk as he,bP as ze,gN as Ye,aA as fe,sB as X,cd as Q,gk as Te,gj as We,dk as oe,aW as Ge,gm as qe,aB as v,cD as He,sC as je,or as Ke,sD as ge,ci as G,j4 as Xe,go as Qe,dS as Ze,nt as et,nu as tt,c3 as _,bA as nt,dR as it,ns as rt,gB as at,fS as ot}from"./main-79e5ed80.js";import{u as F,C as st,w as be}from"./vectorFieldUtils-d080e5ba.js";import{y as lt,l as ut,h as ct}from"./rasterRenderers-5247beb2.js";import{o as ye,u as De,t as Me,r as mt,e as pt,i as dt,a as $e}from"./dataUtils-f5232864.js";import"./generateRendererUtils-0f364d1e.js";var se;let O=se=class extends D{constructor(e){super(e),this.variableName=null,this.dimensionName=null,this.values=[],this.isSlice=!1}clone(){return new se({variableName:this.variableName,dimensionName:this.dimensionName,values:k(this.values),isSlice:this.isSlice})}};s([c({type:String,json:{write:!0}})],O.prototype,"variableName",void 0),s([c({type:String,json:{write:!0}})],O.prototype,"dimensionName",void 0),s([c({type:J.array(J.oneOf([J.native(Number),J.array(J.native(Number))])),json:{write:!0}})],O.prototype,"values",void 0),s([c({type:Boolean,json:{write:!0}})],O.prototype,"isSlice",void 0),O=se=s([j("esri.layers.support.DimensionalDefinition")],O);const E=O,zt=z()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),Yt=z()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"}),ie=z()({U1:"u1",U2:"u2",U4:"u4",U8:"u8",S8:"s8",U16:"u16",S16:"s16",U32:"u32",S32:"s32",F32:"f32",F64:"f64",C64:"c64",C128:"c128",UNKNOWN:"unknown"});let $=class extends D{constructor(){super(...arguments),this.pixelType="unknown"}};s([c({type:String,json:{write:!0}})],$.prototype,"name",void 0),s([c({type:String,json:{write:!0}})],$.prototype,"description",void 0),s([c({type:A,json:{type:A,write:!0,name:"_object_id"}})],$.prototype,"id",void 0),s([c({type:String,json:{type:ie.jsonValues,read:ie.read,write:ie.write}})],$.prototype,"pixelType",void 0),s([c({type:String,json:{write:!0}})],$.prototype,"type",void 0),$=s([j("esri.layers.support.RasterFunctionInfo")],$);const ht=$;let T=class extends D{constructor(){super(...arguments),this.isDataset=!1,this.isPublic=!1,this.type="RasterFunctionVariable"}};s([c({type:String,json:{write:!0}})],T.prototype,"name",void 0),s([c({type:Number,json:{type:A,write:!0,name:"_object_id"}})],T.prototype,"id",void 0),s([c({type:Boolean,json:{write:!0}})],T.prototype,"isDataset",void 0),s([c({type:Boolean,json:{write:!0}})],T.prototype,"isPublic",void 0),s([c({json:{write:!0}})],T.prototype,"value",void 0),s([c({type:String,json:{write:!0}})],T.prototype,"type",void 0),T=s([j("esri.layers.support.RasterFunctionVariable")],T);const ft=T,q={key:"type",base:null,typeMap:{RasterFunctionVariable:ft}};let R=class extends D{};s([c({types:q,json:{types:q,name:"MatchVariable"}})],R.prototype,"matchVariable",void 0),s([c({types:q,json:{types:q,name:"UnionDimension"}})],R.prototype,"unionDimension",void 0),s([c({type:Number,json:{type:A,write:!0,name:"_object_id"}})],R.prototype,"id",void 0),s([c({type:String,json:{write:!0}})],R.prototype,"type",void 0),R=s([j("esri.layers.support.RasterFunctionProperties")],R);const yt=R,re=new Ee({0:"mosaic",1:"item",2:"item-group"},{useNumericKeys:!0});let w=class extends D{constructor(){super(...arguments),this.functionType="mosaic",this.type="RasterFunctionTemplate"}};s([c({type:[String],json:{write:!0}})],w.prototype,"aliases",void 0),s([c({type:Object,json:{write:!0}})],w.prototype,"arguments",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"description",void 0),s([c({type:ht,json:{write:!0,name:"function"}})],w.prototype,"functionInfo",void 0),s([c({type:re.apiValues,json:{type:[0,1,2],read:re.read,write:re.write}})],w.prototype,"functionType",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"group",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"help",void 0),s([c({type:Number,json:{type:A,write:!0,name:"_object_id"}})],w.prototype,"id",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"name",void 0),s([c({type:String,json:{write:!0,name:"definition"}})],w.prototype,"queryDefinition",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"tag",void 0),s([c({type:yt,json:{write:!0}})],w.prototype,"properties",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"thumbnail",void 0),s([c({type:String,json:{write:!0}})],w.prototype,"thumbnailEx",void 0),s([c({json:{type:["RasterFunctionTemplate"],write:!0}})],w.prototype,"type",void 0),w=s([j("esri.layers.support.RasterFunctionTemplate")],w);const Fe=w;var le;const H=new Set(["raster","raster2","dem","fillraster"]),K=new Set(["rasters"]),ve=e=>e&&e.rasterFunction?g.fromJSON(e):e,ae=e=>e&&e instanceof g?e.toJSON():e,ue=e=>e?.functionName&&!e.declaredClass,Se=e=>ue(e)?new g(e):e,wt=e=>{if(e==null)return null;e=k(e);const t={};for(const n of Object.keys(e))H.has(n.toLowerCase())?t[n]=ve(e[n]):K.has(n.toLowerCase())&&Array.isArray(e[n])?t[n]=e[n].map(ve):t[n]=e[n];return t},gt={types:{key:"type",base:null,typeMap:{RasterFunctionTemplate:Fe}},json:{write:!0,name:"rasterFunctionDefinition"}};let g=le=class extends D{constructor(e){super(e),this.functionName=null,this.outputPixelType="unknown",this.variableName=null,this.functionDefinition=null}set functionArguments(e){if(e){const t=Object.keys(e);if(t.some(n=>H.has(n.toLowerCase())&&ue(e[n]))||t.some(n=>K.has(n.toLowerCase())&&Array.isArray(e[n])&&e[n].some(i=>ue(i)))){e=k(e);for(const n of t)H.has(n.toLowerCase())?e[n]=Se(e[n]):K.has(n.toLowerCase())&&Array.isArray(e[n])&&(e[n]=e[n].map(i=>Se(i)))}}this._set("functionArguments",e)}readFunctionArguments(e){return wt(e)}writeFunctionArguments(e,t,n){const i={};for(const r of Object.keys(e))H.has(r.toLowerCase())?i[r]=ae(e[r]):K.has(r.toLowerCase())&&Array.isArray(e[r])?i[r]=e[r].map(ae):i[r]=ae(e[r]);t[n]=i}readFunctionName(e,t){const n=t.rasterFunctionInfos;return t.name||(n&&n.length&&n[0].name!=="None"?n[0].name:t.rasterFunctionDefinition?t.rasterFunctionDefinition.name:t.rasterFunction)}get rasterFunctionDefinition(){return this.functionDefinition?.toJSON()}set rasterFunctionDefinition(e){this.functionDefinition=e?Fe.fromJSON(e):null}clone(){return new le({functionName:this.functionName,functionArguments:k(this.functionArguments),outputPixelType:this.outputPixelType,variableName:this.variableName,rasterFunctionDefinition:k(this.rasterFunctionDefinition)})}};s([c({json:{type:Object,name:"rasterFunctionArguments"}})],g.prototype,"functionArguments",null),s([P("functionArguments")],g.prototype,"readFunctionArguments",null),s([he("functionArguments")],g.prototype,"writeFunctionArguments",null),s([c({json:{type:String,write:{target:"rasterFunction"}}})],g.prototype,"functionName",void 0),s([P("functionName",["rasterFunction","rasterFunctionInfos","rasterFunctionDefinition"])],g.prototype,"readFunctionName",null),s([ze({C128:"c128",C64:"c64",F32:"f32",F64:"f64",S16:"s16",S32:"s32",S8:"s8",U1:"u1",U16:"u16",U2:"u2",U32:"u32",U4:"u4",U8:"u8",UNKNOWN:"unknown"},{ignoreUnknown:!1}),c({json:{default:"unknown"}})],g.prototype,"outputPixelType",void 0),s([c({type:String,json:{read:!0,write:!0}})],g.prototype,"variableName",void 0),s([c()],g.prototype,"rasterFunctionDefinition",null),s([c(gt)],g.prototype,"functionDefinition",void 0),g=le=s([j("esri.layers.support.RasterFunction")],g);const Z=g;var ce;const U=z()({MT_FIRST:"first",MT_LAST:"last",MT_MIN:"min",MT_MAX:"max",MT_MEAN:"mean",MT_BLEND:"blend",MT_SUM:"sum"}),me=z()({esriMosaicNone:"none",esriMosaicCenter:"center",esriMosaicNadir:"nadir",esriMosaicViewpoint:"viewpoint",esriMosaicAttribute:"attribute",esriMosaicLockRaster:"lock-raster",esriMosaicNorthwest:"northwest",esriMosaicSeamline:"seamline"});function bt(e){let t;switch(e?e.toLowerCase().replace("esrimosaic",""):""){case"byattribute":case"attribute":t="esriMosaicAttribute";break;case"lockraster":t="esriMosaicLockRaster";break;case"center":t="esriMosaicCenter";break;case"northwest":t="esriMosaicNorthwest";break;case"nadir":t="esriMosaicNadir";break;case"viewpoint":t="esriMosaicViewpoint";break;case"seamline":t="esriMosaicSeamline";break;default:t="esriMosaicNone"}return me.fromJSON(t)}let y=ce=class extends D{constructor(e){super(e),this.ascending=!0,this.itemRasterFunction=null,this.lockRasterIds=null,this.method=null,this.multidimensionalDefinition=null,this.objectIds=null,this.operation=null,this.sortField=null,this.sortValue=null,this.viewpoint=null,this.where=null}readAscending(e,t){return t.ascending!=null?t.ascending:t.sortAscending==null||t.sortAscending}get itemRenderingRule(){return X(Q.getLogger(this),"itemRenderingRule",{replacement:"itemRasterFunction",version:"4.27",warnOnce:!0}),this._get("itemRasterFunction")}set itemRenderingRule(e){X(Q.getLogger(this),"itemRenderingRule",{replacement:"itemRasterFunction",version:"4.27",warnOnce:!0}),this._set("itemRasterFunction",e)}readMethod(e,t){return bt(t.mosaicMethod||t.defaultMosaicMethod)}writeMultidimensionalDefinition(e,t,n){e!=null&&(e=e.filter(({variableName:i,dimensionName:r})=>i&&i!=="*"||r)).length&&(t[n]=e.map(i=>i.toJSON()))}readOperation(e,t){const n=t.mosaicOperation,i=t.mosaicOperator&&t.mosaicOperator.toLowerCase(),r=n||(i?U.toJSON(i):null);return U.fromJSON(r)||"first"}castSortValue(e){return e==null||typeof e=="string"||typeof e=="number"?e:`${e}`}clone(){return new ce({ascending:this.ascending,itemRasterFunction:k(this.itemRasterFunction),lockRasterIds:k(this.lockRasterIds),method:this.method,multidimensionalDefinition:k(this.multidimensionalDefinition),objectIds:k(this.objectIds),operation:this.operation,sortField:this.sortField,sortValue:this.sortValue,viewpoint:k(this.viewpoint),where:this.where})}};s([c({type:Boolean,json:{write:!0}})],y.prototype,"ascending",void 0),s([P("ascending",["ascending","sortAscending"])],y.prototype,"readAscending",null),s([c({type:Z,json:{name:"itemRenderingRule",write:!0}})],y.prototype,"itemRasterFunction",void 0),s([c({type:Z})],y.prototype,"itemRenderingRule",null),s([c({type:[A],json:{write:{overridePolicy(){return{enabled:this.method==="lock-raster"}}}}})],y.prototype,"lockRasterIds",void 0),s([c({type:String,json:{type:me.jsonValues,write:{target:"mosaicMethod",writer:me.write}}})],y.prototype,"method",void 0),s([P("method",["mosaicMethod","defaultMosaicMethod"])],y.prototype,"readMethod",null),s([c({type:[E],json:{write:!0}})],y.prototype,"multidimensionalDefinition",void 0),s([he("multidimensionalDefinition")],y.prototype,"writeMultidimensionalDefinition",null),s([c({type:[A],json:{name:"fids",write:!0}})],y.prototype,"objectIds",void 0),s([c({json:{type:U.jsonValues,read:{reader:U.read},write:{target:"mosaicOperation",writer:U.write}}})],y.prototype,"operation",void 0),s([P("operation",["mosaicOperation","mosaicOperator"])],y.prototype,"readOperation",null),s([c({type:String,json:{write:{overridePolicy(){return{enabled:this.method==="attribute"}}}}})],y.prototype,"sortField",void 0),s([c({type:[String,Number],json:{write:{allowNull:!0,overridePolicy(){return{enabled:this.method==="attribute",allowNull:!0}}}}})],y.prototype,"sortValue",void 0),s([Ye("sortValue")],y.prototype,"castSortValue",null),s([c({type:fe,json:{write:!0}})],y.prototype,"viewpoint",void 0),s([c({type:String,json:{write:!0}})],y.prototype,"where",void 0),y=ce=s([j("esri.layers.support.MosaicRule")],y);const vt=y;var pe;const St={base:We,key:"type",typeMap:{extent:oe,polygon:Ge}};let C=pe=class extends D{constructor(e){super(e),this.areaOfInterest=null,this.subsetDefinitions=null}get dimensions(){const{subsetDefinitions:e}=this;if(e==null||e.length===0)return[];const t=new Map;e.forEach(i=>{if(!i.dimensionName)return;let r,a;if(Array.isArray(i.values[0])){const o=i.values;r=o[0][0],a=o[i.values.length-1][1]}else{const o=i.values;r=o[0],a=o[i.values.length-1]}if(t.has(i.dimensionName)){const o=t.get(i.dimensionName);o[0]=Math.min(r,o[0]),o[1]=Math.max(a,o[1])}else t.set(i.dimensionName,[r,a])});const n=[];for(const i of t)n.push({name:i[0],extent:i[1]});return n}get variables(){const{subsetDefinitions:e}=this;if(e==null||e.length===0)return[];const t=new Set;return e.forEach(n=>{n.variableName&&t.add(n.variableName)}),[...t]}clone(){const e=this.subsetDefinitions?.map(n=>n.clone()),t=this.areaOfInterest?this.areaOfInterest.clone():this.areaOfInterest;return new pe({areaOfInterest:t,subsetDefinitions:e})}};s([c({types:St,json:{read:Te,write:!0}})],C.prototype,"areaOfInterest",void 0),s([c({readOnly:!0})],C.prototype,"dimensions",null),s([c({readOnly:!0})],C.prototype,"variables",null),s([c({type:[E],json:{write:!0}})],C.prototype,"subsetDefinitions",void 0),C=pe=s([j("esri.layers.support.MultidimensionalSubset")],C);const Kt=C;let Xt=class{constructor(){this._workerThread=null,this._destroyed=!1}async initialize(){const t=await qe("RasterWorker");this._destroyed?t.close():this._workerThread=t}destroy(){this._destroyed=!0,this._workerThread&&(this._workerThread.close(),this._workerThread=null)}async convertVectorFieldData(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i=await this._workerThread.invoke("convertVectorFieldData",{pixelBlock:t.pixelBlock.toJSON(),type:t.dataType},n);return i?new F(i):null}computeStatisticsHistograms(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");return this._workerThread.invoke("computeStatisticsHistograms",{pixelBlock:t.pixelBlock.toJSON()},n)}async decode(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i=await this._workerThread.invoke("decode",t,n);return i?new F(i):null}async symbolize(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i={extent:t.extent&&t.extent.toJSON(),pixelBlock:t.pixelBlock!=null&&t.pixelBlock.toJSON(),simpleStretchParams:t.simpleStretchParams,bandIds:t.bandIds},r=await this._workerThread.invoke("symbolize",i,n);return r?new F(r):null}async updateSymbolizer(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i=t?.rendererJSON?.histograms;await Promise.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:t.toJSON(),histograms:i},n))}async updateRasterFunction(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");await Promise.all(this._workerThread.broadcast("updateRasterFunction",{rasterFunctionJSON:t.toJSON()},n))}async process(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i=await this._workerThread.invoke("process",{extent:t.extent?.toJSON(),primaryPixelSizes:t.primaryPixelSizes?.map(r=>r!=null?r.toJSON():null),primaryPixelBlocks:t.primaryPixelBlocks.map(r=>r!=null?r.toJSON():null),primaryRasterIds:t.primaryRasterIds},n);return i?new F(i):null}async stretch(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");if(!t?.pixelBlock)return null;const i={srcPixelBlock:t.pixelBlock.toJSON(),stretchParams:t.stretchParams},r=await this._workerThread.invoke("stretch",i,n);return r?new F(r):null}async split(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");if(!t?.pixelBlock)return null;const i={srcPixelBlock:t.pixelBlock.toJSON(),tileSize:t.tileSize,maximumPyramidLevel:t.maximumPyramidLevel},r=await this._workerThread.invoke("split",i,n);return r&&r.forEach((a,o)=>{r.set(o,a?F.fromJSON(a):null)}),r}async estimateStatisticsHistograms(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");if(!t?.pixelBlock)return null;const i={srcPixelBlock:t.pixelBlock.toJSON()};return await this._workerThread.invoke("estimateStatisticsHistograms",i,n)}async mosaicAndTransform(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");if(!t?.srcPixelBlocks?.length)return{pixelBlock:null};const i={...t,srcPixelBlocks:t.srcPixelBlocks.map(a=>a!=null?a.toJSON():null)},r=await this._workerThread.invoke("mosaicAndTransform",i,n);return{pixelBlock:r.pixelBlock?new F(r.pixelBlock):null,localNorthDirections:r.localNorthDirections}}async createFlowMesh(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i={buffer:t.flowData.data.buffer,maskBuffer:t.flowData.mask.buffer,width:t.flowData.width,height:t.flowData.height},{meshType:r,simulationSettings:a}=t,o=await this._workerThread.invoke("createFlowMesh",{meshType:r,flowData:i,simulationSettings:a},{...n,transferList:[i.buffer,i.maskBuffer]});return{vertexData:new Float32Array(o.vertexBuffer),indexData:new Uint32Array(o.indexBuffer)}}getProjectionOffsetGrid(t,n){if(!this._workerThread)throw new v("raster-jobhandler:no-connection","no available worker connection");const i=t.datumTransformation!=null?t.datumTransformation.steps.map(o=>({wkid:o.wkid,wkt:o.wkt,isInverse:o.isInverse})):null,r=t.rasterTransform!=null?t.rasterTransform.toJSON():null,a={projectedExtent:t.projectedExtent.toJSON(),srcBufferExtent:t.srcBufferExtent.toJSON(),pixelSize:t.pixelSize,hasWrapAround:t.hasWrapAround,spacing:t.spacing,datumTransformationSteps:i,rasterTransform:r,isAdaptive:t.isAdaptive,includeGCSGrid:t.includeGCSGrid};return this._workerThread.invoke("getProjectionOffsetGrid",a,n)}};function Oe(e,t,n){const i=t.shift();if(n.length===0){const a=[];n.push({sliceId:-1,multidimensionalDefinition:a})}const r=n.length;for(let a=0;a<r;a++){const o=n.shift().multidimensionalDefinition;i.values?.forEach(l=>{n.push({sliceId:-1,multidimensionalDefinition:[...o,{variableName:e,dimensionName:i.name,values:[l]}]})})}t.length&&Oe(e,t,n)}function Zt(e,t){const n=[];let i=0;return(t?e.variables.filter(r=>r.name.toLowerCase()===t.toLowerCase()):[...e.variables].sort((r,a)=>r.name>a.name?1:-1)).forEach(r=>{const a=[],o=[...r.dimensions].sort((l,p)=>l.name>p.name?-1:1);Oe(r.name,o,a),a.forEach(l=>{n.push({...l,sliceId:i++})})}),n}function en(e,t,n){let i=e;if(t&&(t=[...t].sort((r,a)=>r.dimensionName<a.dimensionName?-1:1)).forEach(({dimensionName:r,values:a,isSlice:o})=>{a.length&&(i=i.filter(l=>{const p=l.multidimensionalDefinition.find(m=>m.dimensionName===r);if(p==null)return!1;const u=p.values[0];return typeof u=="number"?typeof a[0]=="number"?a.includes(u):a.some(m=>m[0]<=u&&m[1]>=u):typeof a[0]=="number"?a.some(m=>u[0]<=m&&u[1]>=m):o?a.some(m=>m[0]===u[0]&&m[0]===u[1]):a.some(m=>m[0]>=u[0]&&m[0]<=u[1]||m[1]>=u[0]&&m[1]<=u[1]||m[0]<u[0]&&m[1]>u[1])}))}),i.length&&n&&n.start!=null&&n.end!=null){const r=n.start.getTime(),a=n.end.getTime(),o=i[0].multidimensionalDefinition.findIndex(l=>l.dimensionName==="StdTime");o>-1&&(i=i.filter(l=>{const p=l.multidimensionalDefinition[o].values[0];return r<=p&&a>=p}))}return i.map(r=>r.sliceId)}function Re(e,t){return Array.isArray(e)?t[0]===t[1]?e[0]===t[0]||e[1]===t[0]:e[0]>=t[0]&&e[0]<=t[1]&&e[1]>=t[0]&&e[1]<=t[1]:e>=t[0]&&e<=t[1]}function kt(e,t){return e[0]<=t[0]&&e[1]>=t[0]||e[0]<=t[1]&&e[1]>=t[1]||e[0]>=t[0]&&e[1]<=t[1]}function Ce(e){return e.length===1?[e[0],e[0]]:[e[0],e[e.length-1]]}function Ae(e,t,n){if(!t?.subsetDefinitions?.length)return e;let i;if(n){const{variables:o}=t;if(o.length&&!o.includes(n))return null;const l=t.subsetDefinitions.find(p=>p.dimensionName===e.name&&p.variableName===n);if(!l?.values?.length)return e;i=Ce(l.values)}else i=t.dimensions.find(({name:l})=>l===e.name)?.extent;const r=i;if(!r||!r?.length)return e;const a=e.values.filter(o=>Re(o,r));return{...e,extent:[...r],values:a}}function Ie(e,t,n){if(!t?.subsetDefinitions?.length)return!1;const{variables:i}=t;if(i.length&&e.some(({variableName:r})=>r&&!i.includes(r)))return!0;for(let r=0;r<e.length;r++){const a=e[r],o=t.subsetDefinitions.find(l=>(a.variableName===""||l.variableName===a.variableName)&&l.dimensionName===a.dimensionName);if(o?.values.length){const l=Ce(o.values);if(!a.isSlice&&a.values.length===2&&!Array.isArray(a.values[0])&&a.values[0]!==a.values[1]&&n){if(!kt(a.values,l))return!0}else if(a.values.some(p=>!Re(p,l)))return!0}}return!1}function tn(e,t){if(e==null)return{isOutside:!1};const{geometry:n,timeExtent:i,multidimensionalDefinition:r}=t;let a=null;if(i!=null&&(a=Nt(e,i),a==null))return{isOutside:!0};const{areaOfInterest:o}=e;if(o&&n){const l=n.type==="point"?n:n.type==="extent"?n.center:n.type==="polygon"?n.centroid:null;if(l&&!o.contains(l))return{isOutside:!0}}return r!=null&&r.length&&Ie(r,e,!0)?{isOutside:!0}:{isOutside:!1,intersection:{geometry:n,timeExtent:a,multidimensionalDefinition:r}}}function Nt(e,t){const n=e.dimensions.find(({name:o})=>o==="StdTime");if(n==null||t.start==null&&t.end==null)return t;t=t.clone();const{start:i,end:r}=t.toJSON(),a=i===r?[i]:i!=null&&r!=null?[i,r]:[i??r];return a.length===2&&n?.extent.length&&(a[0]=Math.max(a[0],n.extent[0]),a[1]=Math.min(a[1],n.extent[1]??n.extent[0]),a[1]<a[0])||Ie([new E({variableName:"",dimensionName:"StdTime",isSlice:a.length===1,values:a})],e,!0)?null:(t.start=new Date(a[0]),t.end=new Date(a[1]??a[0]),t)}function xt(e,t={}){const{multidimensionalInfo:n,keyProperties:i}=e;if(n==null)return null;const{variableName:r,multidimensionalSubset:a,multidimensionalDefinition:o}=t,l=o!=null?o[0]?.variableName:null,p=r||l||i?.DefaultVariable;let{variables:u}=n;return a?.variables?.length&&(u=u.filter(({name:m})=>a.variables.includes(m))),p?u.find(({name:m})=>m===p)??u[0]:u[0]}function nn(e,t={}){const n=xt(e,t);if(!n)return null;const i=[],{dimensions:r,name:a}=n;if(r.length===0)return[new E({variableName:a,dimensionName:"",values:[],isSlice:!0})];for(let o=0;o<r.length;o++){const l=Ae(r[o],t.multidimensionalSubset,a);if(!l)return null;const{values:p,extent:u}=l;let m=p?.[0]??u[0];l.name.toLowerCase()==="stdz"&&!l.hasRanges&&Math.abs(u[1])<=Math.abs(u[0])&&(m=p?.length?p[p.length-1]:u[1]),i.push(new E({variableName:a,dimensionName:l.name,values:[m],isSlice:!t.useRangeForRangedDimensionInfo||!!l.hasRanges}))}return i}function rn(e){return!(e==null||!e.length)&&e.some(t=>{if(t.values==null)return!0;const n=t.values.length;return n===0||n>1||!t.isSlice&&Array.isArray(t.values[0])})}function an(e,t){if(t==null||e==null)return null;let n=t.variables.map(i=>({...i}));return e?.variables?.length&&(n=n.filter(({name:i})=>e.variables.includes(i)),n.forEach(i=>{i.dimensions=i.dimensions.map(r=>Ae(r,e,i.name)).filter(He)})),n}function Tt(e,t){const{values:n}=t;if(n?.length){const l=Array.isArray(n[0]),p=Array.isArray(e);return l!==p?-1:l&&p?n.findIndex(u=>u[0]===e[0]&&u[1]===e[1]):n.indexOf(e)}const{extent:i}=t;if(Array.isArray(e)||e<i[0]||e>i[1])return-1;const r=t.interval||1;if(t.unit!=="ISO8601")return Math.round((e-i[0])/r);const a=i[0];let o=-1;switch(t.intervalUnit?.toLowerCase()||"seconds"){case"seconds":o=Math.round((e-a)/1e3/r);break;case"minutes":o=Math.round((e-a)/6e4/r);break;case"hours":o=Math.round((e-a)/36e5/r);break;case"days":o=Math.round((e-a)/864e5/r);break;case"months":{const l=new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear(),p=new Date(a).getUTCMonth(),u=new Date(e).getUTCMonth();o=l===0?u-p:u+11-p+12*(l-1)}break;case"years":o=Math.round((new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear())/r);break;case"decades":o=Math.round((new Date(e).getUTCFullYear()-new Date(a).getUTCFullYear())/10/r)}return o}function ke(e){let t=e.values?.length;if(t)return t;const{extent:n,unit:i}=e,r=e.interval||1,a=n?n[1]-n[0]:0;if(i!=="ISO8601")return Math.round(a/r);switch(e.intervalUnit?.toLowerCase()??"seconds"){case"seconds":t=Math.round(a/1e3/r);break;case"minutes":t=Math.round(a/6e4/r);break;case"hours":t=Math.round(a/36e5/r);break;case"days":t=Math.round(a/864e5/r);break;case"months":{const o=new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear(),l=new Date(n[0]).getUTCMonth(),p=new Date(n[1]).getUTCMonth();t=o===0?p-l+1:p+11-l+12*(o-1)+1}break;case"years":t=Math.round((new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear())/r);break;case"decades":t=Math.round((new Date(n[1]).getUTCFullYear()-new Date(n[0]).getUTCFullYear())/10/r);break;default:t=0}return t}function on(e,t){let n=0;const i=e[0].variableName,r=[...t.variables].sort((a,o)=>a.name>o.name?1:-1);for(let a=0;a<r.length;a++){const o=r[a],l=[...o.dimensions].sort((m,h)=>m.name>h.name?-1:1);if(o.name!==i){n+=l.map(m=>ke(m)).reduce((m,h)=>m*h);continue}const p=l.map(m=>ke(m)),u=l.length;for(let m=0;m<u;m++){const h=e.find(N=>N.dimensionName===l[m].name);if(h==null)return null;const M=Tt(h.values[0],l[m]);if(M===-1)return null;p.shift(),n+=m===u-1?M:M*p.reduce((N,d)=>N*d)}break}return n}const jt=.25,Dt=je.fromJSON({type:"multipart",colorRamps:[{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]}),Ne=je.fromJSON(st[0]),_e=new Set(["scientific","standard-time","vector-uv","vector-magdir","vector-u","vector-v","vector-magnitude","vector-direction"]);function sn(e,t){const{attributeTable:n,colormap:i}=e;if(ye(e)){const r=Vt(e);if(r!=null)return r}if(i!=null){const r=It(e);if(r!=null)return r}if(n!=null){const r=Ct(e);if(r!=null)return r}return Mt(e,t)}function ln(e,t=!1){const n=["raster-stretch"];return De(e,t)&&n.push("raster-colormap"),Me(e)&&n.push("unique-value"),mt(e,t)&&n.push("class-breaks"),pt(e)&&n.push("raster-shaded-relief"),ye(e)&&n.push("vector-field"),dt(e)&&n.push("flow"),n}function un(e,t,n){const i=["nearest","bilinear","cubic","majority"].find(r=>r===n?.toLowerCase());return t==="Map"?i??"bilinear":e.dataType==="standard-time"?i??"nearest":e.dataType==="thematic"||e.attributeTable||e.colormap?i==="nearest"||i==="majority"?i:"nearest":i??"bilinear"}function Mt(e,t){e=$t(e,t?.variableName);const{bandCount:n}=e;let{bandIds:i,stretchType:r}=t||{};i?.some(h=>h>=n)&&(i=null);let a=e.statistics,o=e.histograms;n>1?(i=i?.length?i:Ft(e),a=a==null?null:i?.map(h=>a[h]),o=o==null?null:i?.map(h=>o[h])):i=[0],r==null&&(r=Rt(e));let l=!1;switch(r){case"none":l=!1;break;case"percent-clip":l=!o?.length;break;default:l=!a?.length}const{dataType:p}=e,u=i?.length===1&&_e.has(p)?Dt:null,m=new lt({stretchType:r,dynamicRangeAdjustment:l,colorRamp:u,outputMin:0,outputMax:255,gamma:i?.length===1?[1]:[1,1,1],useGamma:!1});return r==="percent-clip"?m.maxPercent=m.minPercent=jt:r==="standard-deviation"&&(m.numberOfStandardDeviations=2),l||e.multidimensionalInfo==null&&!t?.includeStatisticsInStretch||(r==="percent-clip"?m.histograms=o:r!=="min-max"&&r!=="standard-deviation"||(m.statistics=a)),m}function $t(e,t){if(!t)return e;let n=e.statistics,i=e.histograms;const{multidimensionalInfo:r}=e;if(t&&r!=null){const a=r.variables.find(o=>o.name===t);if(a){const{statistics:o,histograms:l}=a;o?.length&&(n=o),l?.length&&(i=l)}}return $e.fromJSON({...e.toJSON(),statistics:n,histograms:i})}function Ft(e){const t=e.bandCount;if(t===1)return null;if(t===2)return[0];const{bandInfos:n}=e;let i;if(n.length===t){const{red:r,green:a,blue:o,nir:l}=Ot(n);r!=null&&a!=null&&o!=null?i=[r,a,o]:l!=null&&r!=null&&a!=null&&(i=[l,r,a])}return!i&&t>=3&&(i=[0,1,2]),i}function Ot(e){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=i.name.toLowerCase();if(r==="red")t.red=n;else if(r==="green")t.green=n;else if(r==="blue")t.blue=n;else if(r==="nearinfrared"||r==="nearinfrared_1"||r==="nir")t.nir=n;else if(i.maxWavelength&&i.minWavelength){const a=i.minWavelength,o=i.maxWavelength;t.blue==null&&a>=410&&a<=480&&o>=480&&o<=540?t.blue=n:t.green==null&&a>=490&&a<=560&&o>=560&&o<=610?t.green=n:t.red==null&&a>=595&&a<=670&&o>=660&&o<=730?t.red=n:t.nir==null&&a>=700&&a<=860&&o>=800&&o<=950&&(t.nir=n)}}return t}function Rt(e){let t="percent-clip";const{pixelType:n,dataType:i,histograms:r,statistics:a,multidimensionalInfo:o}=e,l=_e.has(i)||i==="generic"&&o!=null;return n!=="u8"||i!=="processed"&&r!=null&&a!=null?n==="u8"||i==="elevation"||l?t="min-max":r!=null?t="percent-clip":a!=null&&(t="min-max"):t="none",t}function Ct(e,t,n,i){if(!Me(e,t))return null;const{attributeTable:r,statistics:a}=e,o=Ve(r,t),l=L(r,"red"),p=L(r,"green"),u=L(r,"blue"),m=new Ke,h=[],M=new Set,N=!!(l&&p&&u);if(r!=null)r.features.forEach(d=>{const f=d.attributes[o.name];if(!M.has(d.attributes[o.name])&&f!=null){M.add(f);const x=N&&(l.type==="single"||l.type==="double")&&(p.type==="single"||p.type==="double")&&(u.type==="single"||u.type==="double")&&!r.features.some(V=>V.attributes[l.name]>1||V.attributes[p.name]>1||V.attributes[u.name]>1),I=x?255:1;h.push(new ge({value:d.attributes[o.name],label:d.attributes[o.name]+"",symbol:{type:"simple-fill",style:"solid",outline:null,color:new G(N?[d.attributes[l.name]*I,d.attributes[p.name]*I,d.attributes[u.name]*I,1]:[0,0,0,0])}}))}});else if(a?.[0])for(let d=a[0].min;d<=a[0].max;d++)h.push(new ge({value:d,label:d.toString(),symbol:{type:"simple-fill",style:"solid",outline:null,color:new G([0,0,0,0])}}));if(h.sort((d,f)=>d.value&&typeof d.value.valueOf()=="string"?0:d.value>f.value?1:-1),!N){const d=be(Ne,{numColors:h.length});h.forEach((f,x)=>f.symbol.color=new G(d[x].slice(1,4))),m.colorRamp=Ne}if(n||i){const d=n||be(i,{numColors:h.length}).map(f=>f.slice(1));h.forEach((f,x)=>f.symbol.color=new G(d[x])),m.colorRamp=i}return new Xe({field:o.name,uniqueValueInfos:h,authoringInfo:m})}function Ve(e,t,n){let i;return e!=null?(i=t?e.fields.find(r=>t.toLowerCase()===r.name.toLowerCase()):At(e.fields),i||(n||(i=e.fields.find(r=>r.type==="string")),i||(i=L(e,"value")))):i=new Qe({name:"value"}),i}function At(e){let t;for(let n=0;n<e.length;n++){const i=e[n].name.toLowerCase();if(e[n].type==="string"){if(i.startsWith("class")){t=e[n];break}t==null&&(i.endsWith("name")||i.endsWith("type"))&&(t=e[n])}}return t}function L(e,t){return e==null?null:e.fields.find(n=>n.name.toLowerCase()===t)}function It(e){if(!De(e))return null;let t;const{attributeTable:n,colormap:i}=e;if(n!=null){const r=L(n,"value"),a=Ve(n,null,!0);a.type==="string"&&(t={},n.features.forEach(o=>{const l=o.attributes;t[l[r.name]]=a?l[a.name]:l[r.name]}))}return ut.createFromColormap(i,t)}const _t=new Map([["m/s","meter-per-second"],["km/h","kilometer-per-hour"],["knots","knots"],["ft/s","feet-per-second"],["mph","mile-per-hour"]]);function Vt(e){if(!ye(e))return null;let t;if(e.statistics!=null&&e.statistics.length&&(e.dataType==="vector-magdir"||e.dataType==="vector-uv")){const{minMagnitude:r,maxMagnitude:a}=Bt(e.dataType,e.statistics);t=[{type:"size",field:"Magnitude",minSize:10,maxSize:40,minDataValue:r,maxDataValue:a}]}const n=e.multidimensionalInfo!=null?_t.get(e.multidimensionalInfo.variables[0].unit):null,i=new ct({visualVariables:t,inputUnit:n,rotationType:"geographic"});return i.visualVariables=[...i.sizeVariables,...i.rotationVariables],i}function xe(e){return{color:e.symbolLayers[0].material?.color,type:"esriSFS",style:"esriSFSSolid"}}function cn(e){if(e.type==="uniqueValue"){const t=e.uniqueValueInfos;return t?.[0].symbol?.symbolLayers?.length&&(e.uniqueValueInfos=t?.map(i=>({value:i.value,label:i.label,symbol:i.symbol?xe(i.symbol):null}))),e}if(e.type==="classBreaks"){const t=e.classBreakInfos;return t[0].symbol?.symbolLayers?.length&&(e.classBreakInfos=t.map(i=>({classMinValue:i.classMinValue,classMaxValue:i.classMaxValue,label:i.label,symbol:i.symbol?xe(i.symbol):null}))),e}return e}function Bt(e,t){let n,i;if(e==="vector-magdir")n=t[0].min,i=t[0].max;else{const r=t[0].min,a=t[0].max,o=t[1].min,l=t[1].max;n=0,i=Math.max(Math.abs(r),Math.abs(o),Math.abs(a),Math.abs(l))}return{minMagnitude:n,maxMagnitude:i}}async function Be(e,t,n){const i=Ze(e),{rasterFunction:r,sourceJSON:a}=t||{},o=r?JSON.stringify(r.rasterFunctionDefinition||r):null,l=et({...i.query,renderingRule:o,f:"json"}),p=tt(l,n);e=i.path;const u=a||await _(e,p).then(b=>b.data),m=u.hasRasterAttributeTable?_(`${e}/rasterAttributeTable`,p):null,h=u.hasColormap?_(`${e}/colormap`,p):null,M=u.hasHistograms?_(`${e}/histograms`,p):null,N=u.currentVersion>=10.3?_(`${e}/keyProperties`,p):null,d=u.hasMultidimensions?_(`${e}/multidimensionalInfo`,p):null,f=await Promise.allSettled([m,h,M,N,d]);let x=null;if(u.minValues&&u.minValues.length===u.bandCount){x=[];for(let b=0;b<u.minValues.length;b++)x.push({min:u.minValues[b],max:u.maxValues[b],avg:u.meanValues[b],stddev:u.stdvValues[b]})}const I=oe.fromJSON(u.extent),V=Math.ceil(I.width/u.pixelSizeX-.1),Je=Math.ceil(I.height/u.pixelSizeY-.1),we=nt.fromJSON(u.spatialReference||u.extent.spatialReference),Pe=f[0].status==="fulfilled"&&f[0].value?it.fromJSON(f[0].value.data):null,Ue=f[1].status==="fulfilled"?f[1].value?.data.colormap:null,Le=f[2].status==="fulfilled"?f[2].value?.data.histograms:null,B=f[3].status==="fulfilled"?f[3].value?.data??{}:{},ee=f[4].status==="fulfilled"?f[4].value?.data.multidimensionalInfo:null;ee?.variables?.length&&ee.variables.forEach(b=>{b.statistics?.length&&b.statistics.forEach(W=>{W.avg=W.mean,W.stddev=W.standardDeviation})});const{defaultVariable:te,serviceDataType:Y}=u;te&&te!==B.DefaultVariable&&(B.DefaultVariable=te),Y&&Y.includes("esriImageServiceDataTypeVector")&&!Y.includes(B.DataType)&&(B.DataType=Y.replace("esriImageServiceDataType",""));let ne=u.noDataValue;return u.noDataValues?.length&&u.noDataValues.some(b=>b!==ne)&&(ne=u.noDataValues),new $e({width:V,height:Je,bandCount:u.bandCount,extent:oe.fromJSON(u.extent),spatialReference:we,pixelSize:new fe({x:u.pixelSizeX,y:u.pixelSizeY,spatialReference:we}),pixelType:u.pixelType.toLowerCase(),statistics:x,attributeTable:Pe,colormap:Ue,histograms:Le,keyProperties:B,noDataValue:ne,multidimensionalInfo:ee})}function mn(e,t,n){return Be(e,{sourceJSON:t},n)}function pn(e,t,n){return Be(e,{rasterFunction:t},n)}var de;let S=de=class extends D{constructor(){super(...arguments),this.geometry=null,this.mosaicRule=null,this.rasterFunction=null,this.pixelSize=null,this.raster=void 0,this.timeExtent=null}writeGeometry(e,t,n){e!=null&&(t.geometryType=ot(e),t[n]=e.toJSON())}get renderingRule(){return X(Q.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._get("rasterFunction")}set renderingRule(e){X(Q.getLogger(this),"renderingRule",{replacement:"rasterFunction",version:"4.27",warnOnce:!0}),this._set("rasterFunction",e)}clone(){return new de(k({geometry:this.geometry,mosaicRule:this.mosaicRule,rasterFunction:this.rasterFunction,pixelSize:this.pixelSize,raster:this.raster,timeExtent:this.timeExtent}))}};s([c({types:rt,json:{read:Te}})],S.prototype,"geometry",void 0),s([he("geometry")],S.prototype,"writeGeometry",null),s([c({type:vt,json:{write:!0}})],S.prototype,"mosaicRule",void 0),s([c({type:Z})],S.prototype,"renderingRule",null),s([c({type:Z,json:{write:!0,name:"renderingRule"}})],S.prototype,"rasterFunction",void 0),s([c({type:fe,json:{write:!0}})],S.prototype,"pixelSize",void 0),s([c({json:{write:!0}})],S.prototype,"raster",void 0),s([c({type:at,json:{read:{source:"time"},write:{target:"time"}}})],S.prototype,"timeExtent",void 0),S=de=s([j("esri.rest.support.ImageHistogramParameters")],S);const dn=S;export{on as D,$t as E,un as L,Z as N,cn as Q,ln as S,en as a,dn as b,Kt as c,nn as d,zt as e,xt as f,an as g,rn as h,Zt as i,Yt as j,sn as k,vt as l,mn as m,ie as n,Ie as o,E as p,Ft as q,pn as r,tn as s,Xt as t};