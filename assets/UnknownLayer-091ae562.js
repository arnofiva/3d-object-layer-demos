import{fi as i,fj as y,gO as l,aD as s,aE as a,aF as p,be as u,aB as d}from"./main-79e5ed80.js";let e=class extends i(y(u)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{l(()=>{const n=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let t="Unknown layer type";n&&(t+=" "+n),o(new d("layer:unknown-layer-type",t,{layerType:n}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};s([a({readOnly:!0})],e.prototype,"resourceInfo",void 0),s([a({type:["show","hide"]})],e.prototype,"listMode",void 0),s([a({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=s([p("esri.layers.UnknownLayer")],e);const f=e;export{f as default};