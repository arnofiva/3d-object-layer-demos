import{bm as y,cI as f,kR as g,cN as C,bk as v,cO as b,mr as w,ms as P,kO as R,kK as O,kJ as E,cc as u,it as p,i0 as G,cJ as x,bQ as n,mt as m,mu as $,mv as j}from"./index-cdda5707.js";let M=class{constructor(e){this._attached=!1,this._resourcesCreated=!1,this._visible=!0,this.view=e,this._handle=y(()=>this.view.ready,t=>{this._resourcesCreated&&(t?this._createResources():this._destroyResources())})}applyProps(e){let t=!1;for(const s in e)s in this?s==="attached"?t=e[s]:this[s]=e[s]:console.error("Cannot set unknown property",s);this.attached=t}destroy(){this.attached=!1,this._handle.remove()}get attached(){return this._attached}set attached(e){e!==this._attached&&this.view._stage&&(this._attached=e,this._attached&&!this._resourcesCreated?this._createResources():!this._attached&&this._resourcesCreated&&this._destroyResources(),this.onAttachedChange(e))}onAttachedChange(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.attached&&this.updateVisibility(e))}_createResources(){this.createResources(),this._resourcesCreated=!0,this.updateVisibility(this.visible)}_destroyResources(){this.destroyResources(),this._resourcesCreated=!1}};class k extends M{constructor(e){super(e.view),this._resources=null,this._transform=f()}get object(){return this._resources!=null?this._resources.object:null}get transform(){return this._transform}set transform(e){g(this._transform,e),this._resources!=null&&(this._resources.object.transformation=this._transform)}recreate(){this.attached&&this.createResources()}recreateGeometry(){if(this._resources==null)return;const e=this._resources.object,t=this.view._stage;t.removeMany(e.geometries),e.removeAllGeometries(),this.createGeometries(e),e.visible=this.visible,t.addMany(e.geometries)}createResources(){this.destroyResources();const e=this.view._stage;if(!e)return;const t=new C(e,{pickable:!1,updatePolicy:v.SYNC}),s=new b({castShadow:!1});s.transformation=this._transform,this.createExternalResources(),this.createGeometries(s),e.addMany(s.geometries),this.forEachExternalMaterial(r=>e.add(r)),e.add(s),t.add(s),s.visible=this.visible,this._resources={layer:t,object:s}}destroyResources(){const e=this.view._stage;this._resources!=null&&e&&(e.remove(this._resources.object),this._resources.layer.destroy(),this.forEachExternalMaterial(t=>{e.remove(t),t.dispose()}),e.removeMany(this._resources.object.geometries),this._resources.object.dispose(),this.destroyExternalResources(),this._resources=null)}updateVisibility(e){this._resources!=null&&(this._resources.object.visible=e)}}function S(l,e,t,s=!1){const r=w(l,e);return r==null?null:(r.hasZ&&!s||t==null||(r.z=P(t,r)??0),r)}function W(l,e,t){t.warnOnce(`Failed to project analysis geometry (id: '${l.id}'), projection from spatial reference (wkid: '${e.wkid}') to view spatial reference is not supported. Projection may be possible after calling projection.load().`)}class A extends k{constructor(e,t){super(e),this._hasExternalMaterial=!1,this._hasExternalMaterial=t!=null,this._material=t??new R({width:1,color:O(1,0,1,1),stippleOffColor:null,stipplePattern:null,stipplePreferContinuous:!0,isClosed:!1,falloff:0,innerColor:null,innerWidth:1,hasPolygonOffset:!1,renderOccluded:E.OccludeAndTransparent,writeDepth:!0}),this.applyProps(e)}setGeometryFromRenderSpacePoint(e,t=1e3){this.geometry=[[[e[0]-t,e[1],e[2]],[e[0]+t,e[1],e[2]]],[[e[0],e[1]-t,e[2]],[e[0],e[1]+t,e[2]]],[[e[0],e[1],e[2]-t],[e[0],e[1],e[2]+t]]]}setGeometryFromExtent(e){const t=this.view.spatialReference,s=n(),r=n(),o=100,i=[];u(s,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),u(s,e[2],e[1],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),u(s,e[2],e[3],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),u(s,e[0],e[3],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),u(s,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),u(s,e[0],e[1],o),this.view.renderCoordsHelper.toRenderCoords(s,t,r),i.push([r[0],r[1],r[2]]),this.geometry=[i]}setGeometryFromFrustum(e){const t=[];e.lines.forEach(s=>{t.push([s.origin[0],s.origin[1],s.origin[2]]),t.push([s.endpoint[0],s.endpoint[1],s.endpoint[2]])}),this.geometry=[t]}setGeometryFromBoundedPlane(e){const t=[],s=e.origin,r=e.basis1,o=e.basis2,i=.5,a=n(),h=n(),c=n(),d=n();a[0]=s[0]-r[0]*i-o[0]*i,a[1]=s[1]-r[1]*i-o[1]*i,a[2]=s[2]-r[2]*i-o[2]*i,h[0]=s[0]-r[0]*i+o[0]*i,h[1]=s[1]-r[1]*i+o[1]*i,h[2]=s[2]-r[2]*i+o[2]*i,c[0]=s[0]+r[0]*i+o[0]*i,c[1]=s[1]+r[1]*i+o[1]*i,c[2]=s[2]+r[2]*i+o[2]*i,d[0]=s[0]+r[0]*i-o[0]*i,d[1]=s[1]+r[1]*i-o[1]*i,d[2]=s[2]+r[2]*i-o[2]*i,t.push([a[0],a[1],a[2]]),t.push([h[0],h[1],h[2]]),t.push([c[0],c[1],c[2]]),t.push([d[0],d[1],d[2]]),t.push([a[0],a[1],a[2]]),this.geometry=[t]}setGeometryFromSegment(e){const t=e.endRenderSpace;this.transform=p(_,t);const{points:s}=e.createRenderGeometry(t,this.view.renderCoordsHelper);this.geometry=[s]}setGeometryFromSegments(e,t=G){this.transform=p(_,t),this.geometry=e.map(s=>s.createRenderGeometry(t,this.view.renderCoordsHelper).points)}getTransformedGeometry(){return this._geometry==null?null:this._geometry.map(e=>e.map(t=>x(n(),t,this.transform)))}get renderOccluded(){return this._material.parameters.renderOccluded}set renderOccluded(e){this._material.setParameters({renderOccluded:e})}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._material.parameters.width}set width(e){this._material.setParameters({width:e})}get color(){return this._material.parameters.color}set color(e){const t=e[3]===1;this._material.setParameters({color:m(e),writeDepth:t})}get innerWidth(){return this._material.parameters.innerWidth}set innerWidth(e){this._material.setParameters({innerWidth:e})}get innerColor(){return this._material.parameters.innerColor}set innerColor(e){this._material.setParameters({innerColor:e!=null?m(e):null})}get stipplePattern(){return this._material.parameters.stipplePattern}set stipplePattern(e){this._material!=null&&this._material.setParameters({stipplePattern:e})}get stippleOffColor(){return this._material.parameters.stippleOffColor}set stippleOffColor(e){this._material.setParameters({stippleOffColor:e!=null?m(e):null})}get stipplePreferContinuous(){return this._material.parameters.stipplePreferContinuous}set stipplePreferContinuous(e){this._material.setParameters({stipplePreferContinuous:e})}get falloff(){return this._material.parameters.falloff}set falloff(e){this._material.setParameters({falloff:e})}get polygonOffset(){return this._material.parameters.hasPolygonOffset}set polygonOffset(e){this._material.setParameters({hasPolygonOffset:e})}createExternalResources(){}destroyExternalResources(){}createGeometries(e){for(const t of $(this.geometry)){const s=j(this._material,t);e.addGeometry(s)}}forEachExternalMaterial(e){this._hasExternalMaterial||e(this._material)}}const _=f();export{W as a,k as b,S as r,M as t,A as u};
