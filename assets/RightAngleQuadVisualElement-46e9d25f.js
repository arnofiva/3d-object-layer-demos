import{aX as q,co as F,cp as k,kh as z,aD as n,aE as _,aF as A,au as C,ej as R,bh as p,ki as y,kj as G,kk as O,di as g,eO as D,kl as b,bs as h,km as v,kn as M,d5 as f,h7 as w,ep as V,cr as E,ko as I,iE as N,kp as l,ij as S,hk as j,er as Q,kq as U,em as H,en as P,eo as B,b_ as L,bq as X}from"./main-79e5ed80.js";import{t as Y}from"./LineVisualElement-edcd3279.js";import{a as Z}from"./VisualElementResources-345e70b2.js";class J{constructor(e){this._resourceFactory=e,this._resources=null,this._visible=!0,this._attached=!1,this._renderGroup=z.Outline}destroy(){this._destroyResources()}get resources(){return this._resources!=null?this._resources.external:null}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this._syncGeometriesToRenderer())}get attached(){return this._attached}set attached(e){e!==this._attached&&(this._attached=e,this._createOrDestroyResources())}get renderGroup(){return this._renderGroup}set renderGroup(e){this._renderGroup=e;const r=this._resources?.layerView;r&&(r.renderGroup=e)}recreate(){this.attached&&this._createResources()}recreateGeometry(){this._resourceFactory.recreateGeometry?this._resources!=null&&(this._ensureRenderGeometriesRemoved(),this._resourceFactory.recreateGeometry(this._resources.external),this._syncGeometriesToRenderer()):this.recreate()}_createOrDestroyResources(){this._attached?this._resources==null&&this._createResources():this._destroyResources()}_createResources(){this._destroyResources();const e=this._resourceFactory.createResources(),r=new o({view:this._resourceFactory.view,renderGroup:this._renderGroup}),t=this._resourceFactory.view.basemapTerrain?.overlayManager;this._resources={layerView:new o({view:this._resourceFactory.view,renderGroup:this._renderGroup}),external:e,geometriesAdded:!1},t&&(this._resources.drapeSourceRenderer=t.registerGeometryDrapeSource(r)),this._syncGeometriesToRenderer()}_destroyResources(){if(this._resources==null)return;this._ensureRenderGeometriesRemoved();const e=this._resourceFactory.view.basemapTerrain?.overlayManager;e&&e.unregisterDrapeSource(this._resources.layerView),this._resourceFactory.destroyResources(this._resources.external),this._resources=null}_syncGeometriesToRenderer(){this._visible?this._ensureRenderGeometriesAdded():this._ensureRenderGeometriesRemoved()}_ensureRenderGeometriesRemoved(){this._resources==null||this._resources.drapeSourceRenderer==null||this._resources.geometriesAdded&&(this._resources.drapeSourceRenderer.removeGeometries(this._resources.external.geometries,R.UPDATE),this._resources.geometriesAdded=!1)}_ensureRenderGeometriesAdded(){this._resources==null||this._resources.drapeSourceRenderer==null||this._resources.geometriesAdded||(this._resources.drapeSourceRenderer.addGeometries(this._resources.external.geometries,R.UPDATE),this._resources.geometriesAdded=!0)}}let o=class extends q(C){constructor(u){super(u),this.drapeSourceType=F.Features,this.updatePolicy=k.SYNC,this.renderGroup=z.Outline}};n([_({constructOnly:!0})],o.prototype,"view",void 0),n([_({readOnly:!0})],o.prototype,"drapeSourceType",void 0),n([_()],o.prototype,"renderGroup",void 0),o=n([A("DrapedVisualElementLayerView")],o);class K extends Y{constructor({view:e,isDraped:r}){super(e),this._isDraped=!1,this.object3dResources=new Z(this.createObject3DResourceFactory(e)),this.drapedResources=new J(this.createDrapedResourceFactory(e)),this.isDraped=r??!1}get isDraped(){return this._isDraped}set isDraped(e){e!==this._isDraped&&(this._isDraped=e,this.object3dResources.attached=this.attached&&!e,this.drapedResources.attached=this.attached&&e)}get renderGroup(){return this.drapedResources.renderGroup}set renderGroup(e){this.drapedResources.renderGroup=e}createResources(){this.object3dResources.attached=!this._isDraped,this.drapedResources.attached=this._isDraped}destroyResources(){this.object3dResources.attached=!1,this.drapedResources.attached=!1}recreate(){this.object3dResources.recreate(),this.drapedResources.recreate()}recreateGeometry(){this.object3dResources.recreateGeometry(),this.drapedResources.recreateGeometry()}destroy(){this.object3dResources.destroy(),this.drapedResources.destroy(),super.destroy()}updateVisibility(e){this.object3dResources.visible=e,this.drapedResources.visible=e}}class se extends K{constructor(e){super(e),this._maxSize=0,this._position=p(),this._up=p(),this._right=p(),this._renderOccluded=y.OccludeAndTransparent,this._color=G(1,0,0,1),this._outlineColor=G(0,0,0,1),this._outlineSize=0,this._size=32,this._outlineRenderOccluded=y.Opaque,this.applyProps(e)}createObject3DResourceFactory(e){return{view:e,createResources:r=>this._createObject3DResources(r),destroyResources:r=>this._destroyObject3DResources(r),cameraChanged:()=>this._updateTransformObject3D()}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:r=>this._destroyDrapedResources(r)}}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateQuadMaterial())}get color(){return this._color}set color(e){O(this._color,e),this._updateQuadMaterial()}get outlineColor(){return this._outlineColor}set outlineColor(e){O(this._outlineColor,e),this._updateOutlineMaterial()}get outlineSize(){return this._outlineSize}set outlineSize(e){const r=this._outlineSize===0!=(e===0);this._outlineSize=e,r?this.recreateGeometry():this._updateOutlineMaterial()}get size(){return this._size}set size(e){e!==this._size&&(this._size=e,this._updateTransform())}get outlineRenderOccluded(){return this._outlineRenderOccluded}set outlineRenderOccluded(e){this._outlineRenderOccluded=e,this._updateOutlineMaterial()}set geometry({previous:e,center:r,next:t}){this._maxSize=Math.min(g(r,e),g(r,t))/3,D(this._up,b(this._up,e,r)),D(this._right,b(this._right,t,r)),h(this._position,r),this.recreateGeometry()}_createObject3DResources(e){const r=new v(this._quadMaterialParameters),t=this._outlineSize===0?void 0:new M(this._outlineMaterialParameters);return this._createObject3DGeometries(e,r,t),{quadMaterial:r,outlineMaterial:t,forEach:s=>{s(r),t&&s(t)}}}_destroyObject3DResources(e){e.quadMaterial.dispose(),e.outlineMaterial?.dispose()}_createObject3DGeometries(e,r,t){if(f(this._up,w)&&f(this._right,w))return;const s=this._createGeometries(r,t);for(const c of s)e.addGeometry(c);this._updateTransformObject3D(e)}_createDrapedResources(){const e=new v(this._quadMaterialParameters),r=this._outlineSize===0?void 0:new M(this._outlineMaterialParameters),t=this._createGeometries(e,r).map(s=>new V(s));return this._setTransformDraped(t),{quadMaterial:e,outlineMaterial:r,geometries:t,pixelRatioHandle:E(()=>this.view.state.contentPixelRatio,()=>{this.drapedResources.recreateGeometry()})}}_destroyDrapedResources(e){e.pixelRatioHandle.remove(),e.geometries=[],e.outlineMaterial?.dispose(),e.quadMaterial.dispose()}_createGeometries(e,r){const{up:t,right:s,corner:c}=this._getVertices(),a=this._quadGeometryData(t,s,c,e);return r?[a,I(r,[t,c,s])]:[a]}_getVertices(){let e=this._up,r=this._right;const t=N(l.get(),e,r);return this.isDraped&&(e=h(l.get(),e),r=h(l.get(),r),e[2]=0,r[2]=0,t[2]=0),{up:e,right:r,corner:t}}_updateTransform(){this.isDraped?this.drapedResources.recreateGeometry():this._updateTransformObject3D()}_updateTransformObject3D(e=this.object3dResources.object){if(!e)return;const r=this.view.state.camera,t=this._size*r.computeScreenPixelSizeAt(this._position),s=Math.min(this._maxSize,t);S(i,this._position),j(i,i,[s,s,s]),e.transformation=i}_setTransformDraped(e){if(e.length===0)return;const{view:{basemapTerrain:{overlayManager:r},state:{contentPixelRatio:t}}}=this,{_position:s,_size:c}=this,a=h(l.get(),s);a[2]=Q;const d=W;d.spatialReference=r.renderer.spatialReference,d.x=a[0],d.y=a[1];const x=c*(r.overlayPixelSizeInMapUnits(d)*t),m=Math.min(this._maxSize,x);S(i,a),j(i,i,[m,m,1]);for(const T of e)T.updateTransformation($=>{U($,i)})}_quadGeometryData(e,r,t,s){return new H(s,[[P.POSITION,new B([0,0,0,...r,...e,...t],3,!0)]],[[P.POSITION,[0,1,2,1,2,3]]])}get _quadMaterialParameters(){return{color:this._color,transparent:!0,writeDepth:!1,polygonOffset:!0,renderOccluded:this._renderOccluded}}_updateQuadMaterial(){this.object3dResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters),this.drapedResources.resources?.quadMaterial.setParameters(this._quadMaterialParameters)}get _outlineMaterialParameters(){return{color:this._outlineColor,width:this._outlineSize,renderOccluded:this._outlineRenderOccluded}}_updateOutlineMaterial(){this.object3dResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters),this.drapedResources.resources?.outlineMaterial?.setParameters(this._outlineMaterialParameters)}}const i=L(),W=X(0,0,void 0,null);export{se as P,K as t};
