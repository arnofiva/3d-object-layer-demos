import{b9 as o,ba as p,bb as i,aD as r,aE as s,bc as h,bd as n,aF as d,be as c}from"./main-79e5ed80.js";let t=class extends o(p(c)){constructor(e){super(e),this.elevationInfo=null,this.graphics=new i,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,a){return super.on(e,a)}graphicChanged(e){this.emit("graphic-update",e)}};r([s({type:h})],t.prototype,"elevationInfo",void 0),r([s(n(i,"graphics"))],t.prototype,"graphics",void 0),r([s({type:["show","hide"]})],t.prototype,"listMode",void 0),r([s()],t.prototype,"screenSizePerspectiveEnabled",void 0),r([s({readOnly:!0})],t.prototype,"type",void 0),r([s({constructOnly:!0})],t.prototype,"internal",void 0),t=r([d("esri.layers.GraphicsLayer")],t);const l=t;export{l as h};