import{a as f,n as w,N as u,r as h,cZ as F,c_ as P}from"./vendor.fd144a9e.js";import{s as l,d as m}from"./popupUtils.980e3560.js";const b=y=>{let r=class extends y{_validateFetchPopupFeatures(p){const{layer:e}=this,{popupEnabled:s}=e;return s?l(e,p)?void 0:new u("scenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{layer:e}):new u("scenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:e})}async prepareFetchPopupFeatures(p){}async fetchPopupFeatures(p,e){const s=this._validateFetchPopupFeatures(e);if(s)throw s;const n=h(e)?e.clientGraphics:null;if(!n||n.length===0)return[];const d=this.layer.type==="scene"&&h(this.layer.associatedLayer)?this.layer.associatedLayer:this.layer,i=F(this.layer.fieldsIndex,await m(d,l(this.layer,e)));await this.prepareFetchPopupFeatures(i);const o=new Set,c=[],a=[];for(const t of n)P(i,t,o)?a.push(t):c.push(t);return a.length===0?c:this.whenGraphicAttributes(a,[...o]).catch(()=>a).then(t=>c.concat(t))}};return r=f([w("esri.views.3d.layers.support.PopupSceneLayerView")],r),r};export{b as c};
