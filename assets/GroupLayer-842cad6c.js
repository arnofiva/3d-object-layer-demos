import{gk as p,gm as b,eU as v,eV as u,jM as c,jN as f,eW as g,el as m,jO as L,bm as d,jP as _,gy as O,jQ as w,aD as t,aE as r,dv as M,bu as $,dq as j,bn as h,aF as V,bq as x,b3 as C}from"./index-cdda5707.js";import{a as T}from"./lazyLayerLoader-8431db42.js";const E=Symbol("WebScene");let s=class extends p(b(v(u(c(f(g(x))))))){constructor(e){super(e),this.allLayers=new m({getCollections:()=>[this.layers],getChildrenFunction:i=>"layers"in i?i.layers:null}),this.allTables=L(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([d(()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&E in e},e=>{const i="prevent-adding-tables";this.removeHandles(i),e&&(this.tables.removeAll(),this.addHandles(j(()=>this.tables,"before-add",a=>{a.preventDefault(),C.getLogger(this).errorOnce("tables","Tables are not yet supported in a WebScene so they can't be added.")}),i))},$),d(()=>this.visible,this._onVisibilityChange.bind(this),h)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}_writeLayers(e,i,a,l){const o=[];if(!e)return o;e.forEach(y=>{const n=_(y,l.webmap?l.webmap.getLayerJSONFromResourceInfo(y):null,l);n!=null&&n.layerType&&o.push(n)}),i.layers=o}set portalItem(e){this._set("portalItem",e)}set visibilityMode(e){const i=this._get("visibilityMode")!==e;this._set("visibilityMode",e),i&&this._enforceVisibility(e,this.visible)}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"],layerModuleTypeMap:T},e)),Promise.resolve(this)}async loadAll(){return O(this,e=>{e(this.layers,this.tables)})}layerAdded(e){e.visible&&this.visibilityMode==="exclusive"?this._turnOffOtherLayers(e):this.visibilityMode==="inherited"&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles(d(()=>e.visible,i=>this._onChildVisibilityChange(e,i),h),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach(i=>{i!==e&&(i.visible=!1)})}_enforceVisibility(e,i){if(!w(this).initialized)return;const a=this.layers;let l=a.find(o=>o.visible);switch(e){case"exclusive":a.length&&!l&&(l=a.at(0),l.visible=!0),this._turnOffOtherLayers(l);break;case"inherited":a.forEach(o=>{o.visible=i})}}_onVisibilityChange(e){this.visibilityMode==="inherited"&&this.layers.forEach(i=>{i.visible=e})}_onChildVisibilityChange(e,i){switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(e=>e.visible)}};t([r({readOnly:!0,dependsOn:[]})],s.prototype,"allLayers",void 0),t([r({readOnly:!0})],s.prototype,"allTables",void 0),t([r()],s.prototype,"fullExtent",void 0),t([r({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),t([r({json:{read:!1,write:{ignoreOrigin:!0}}})],s.prototype,"layers",void 0),t([M("layers")],s.prototype,"_writeLayers",null),t([r({type:["GroupLayer"]})],s.prototype,"operationalLayerType",void 0),t([r({json:{origins:{"web-document":{read:!1,write:!1}}}})],s.prototype,"portalItem",null),t([r()],s.prototype,"spatialReference",void 0),t([r({json:{read:!1},readOnly:!0,value:"group"})],s.prototype,"type",void 0),t([r({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,i,a)=>{e!=="inherited"&&(i[a]=e)}}}}})],s.prototype,"visibilityMode",null),s=t([V("esri.layers.GroupLayer")],s);const H=s;export{H as default};
