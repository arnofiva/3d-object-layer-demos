import{k as p,a as e,d as s,n as i,y as a,o as c,r as n,p as h}from"./vendor.fd144a9e.js";import{_ as l}from"./GraphicsProcessor.a80e31dc.js";import"./Graphics3DScaleVisibility.f998c732.js";import"./optimizedFeatureQueryEngineAdapter.1fe0efec.js";import"./centroid.c5b18aa1.js";import"./PooledRBush.791e352c.js";import"./quickselect.03306040.js";import"./Graphics3DObjectStates.1c4d8ad6.js";const d=r=>{let t=class extends p(r){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return e([s()],t.prototype,"graphics",void 0),e([s()],t.prototype,"renderer",void 0),e([s()],t.prototype,"updating",void 0),e([s()],t.prototype,"view",void 0),t=e([i("esri.views.layers.GraphicsView")],t),t};let o=class extends d(a){constructor(r){super(r),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new u}initialize(){this._set("processor",new l({owner:this})),this.processor.setup()}destroy(){this._set("processor",c(this.processor))}get graphics(){return this.view.graphics}get loadedGraphics(){return this.graphics}get updating(){var r;return!!((r=this.processor)==null?void 0:r.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(r){return this.processor.getHit(r)}whenGraphicBounds(r,t){return this.processor.whenGraphicBounds(r,t)}graphicChanged(r){this.processor.graphicsCore.graphicUpdateHandler(r)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(r,t){return n(t)?t.clientGraphics:null}highlight(r){return this.processor.highlight(r)}maskOccludee(r){return this.processor.maskOccludee(r)}};e([s({readOnly:!0})],o.prototype,"graphics",null),e([s()],o.prototype,"loadedGraphics",null),e([s({readOnly:!0})],o.prototype,"updating",null),e([s({constructOnly:!0})],o.prototype,"view",void 0),e([s()],o.prototype,"processor",void 0),e([s({type:Boolean})],o.prototype,"slicePlaneEnabled",void 0),e([s()],o.prototype,"layer",void 0),o=e([i("esri.views.3d.layers.GraphicsView3D")],o);class u extends h{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const P=o;export{P as default};
