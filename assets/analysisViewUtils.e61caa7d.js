import{kQ as qe,kR as Be,i4 as Ve,aQ as U,l6 as Ue,dz as H,am as A,l7 as k,$ as Ge,kF as Me,j_ as He,l8 as Qe,k4 as Ye,l1 as de,r as O,aO as G,l9 as Je,hl as Ze,la as ee,t as m,d$ as ue,dq as pe,ku as _e,lb as ge,dw as D,lc as Ke,kT as ve,kI as $,aP as ne,ld as fe,aj as me,k6 as Xe,eY as et,le as tt,h1 as it,aD as st,x as at,aY as nt,a1 as rt,lf as ot,ag as W,jC as te,lg as j,aZ as ie,k5 as lt,aM as re,f0 as Pe,lh as ct,dZ as be,bh as ht,li as dt,lj as ut,jB as ye,lk as pt,ll as _t,lm as gt,cm as we,ci as S,cd as vt,cn as y,cf as ft,cj as mt,cp as bt,ce as yt,jH as Se,bY as p,hW as wt,ck as St,ln as Et,lo as Tt,cq as I,es as $t,a as l,ct as T,cu as N,cv as At,cw as Ot,cx as Lt,cy as Rt,cA as jt,gI as Ft,cB as Ct,cC as Mt,bp as se,cE as Pt,cF as Dt,cG as xt,lp as zt,cL as It,cN as Ee,cO as Nt,bn as x,h2 as kt,cS as Wt,e2 as Q,jq as oe,g_ as qt,lq as Bt,lr as Vt,ls as Ut,h3 as Gt,aL as Ht,lt as Qt,bV as Yt,lu as Jt,jJ as Zt,lv as Kt,jr as De,lw as Xt,eJ as ei,I as ti,ab as ii,d as f,n as xe,y as si,lx as F,e4 as ai,ly as ni,B as ze,J as Ie,hr as ri,j as oi,aC as li,c1 as ci}from"./vendor.fd144a9e.js";class hi{constructor(e){this.camera=new Ue,this._elevation={offset:0,override:null},this.collisionType={type:"point"},this.collisionPriority=0,this._renderObjects=[],this.autoScaleRenderObjects=!0,this._available=!0,this._noDisplayCount=0,this._radius=10,this._worldSized=!1,this.focusMultiplier=2,this.touchMultiplier=2.5,this.worldOriented=!1,this._modelTransform=H(),this._worldFrame=null,this._renderLocation=A(),this._renderLocationDirty=!0,this._location=new U({x:0,y:0,z:0}),this._elevationAlignedLocation=new U,this._elevationAlignedLocationDirty=!0,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.cursor=null,this._grabbing=!1,this.dragging=!1,this._hovering=!1,this._selected=!1,this._state=k.None,this._focused=!1,this.events=new Ge.EventEmitter,this._screenLocation={screenPointArray:Me(),renderScreenPointArray:He(),pixelSize:0},this._screenLocationDirty=!0,this._applyObjectTransform=null,this._engineResourcesAddedToStage=!1,this._engineResources=null,this._attached=!1,this._engineLayer=null,this._materialIdReferences=null,this._location.spatialReference=e.view.spatialReference;for(const t in e)this[t]=e[t];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}destroy(){this._removeResourcesFromStage(),this._engineResources=null,this.view=null,this.camera=null}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this._elevationAlignedLocationDirty=!0,this._renderLocationDirty=!0,this._updateEngineObject()}get renderObjects(){return this._renderObjects}set renderObjects(e){this._removeResourcesFromStage(),this._engineResources=null,this._renderObjects=e.slice(),this._updateEngineObject()}set available(e){e!==this._available&&(this._available=e,this._updateEngineObject())}get available(){return this._available}disableDisplay(){return this._noDisplayCount++,this._noDisplayCount===1&&this._updateEngineObject(),{remove:Qe(()=>{this._noDisplayCount--,this._noDisplayCount===0&&this._updateEngineObject()})}}set radius(e){e!==this._radius&&(this._radius=e,this._updateEngineObject())}get radius(){return this._radius}set worldSized(e){e!==this._worldSized&&(this._worldSized=e,this._updateEngineObject())}get worldSized(){return this._worldSized}get modelTransform(){return this._modelTransform}set modelTransform(e){Te(e)&&(this._screenLocationDirty=!0),Ye(this._modelTransform,e),this._updateEngineObject()}get renderLocation(){return this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=H()),di(this.view,this._renderLocation,this._worldFrame)):this._worldFrame&&(this._worldFrame=null)),this._renderLocation}set renderLocation(e){this.view.renderCoordsHelper.fromRenderCoords(e,this._location),this.elevationAlignedLocation=this._location}get location(){return this._location}set location(e){de(e,this._location),this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!0,this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}get elevationAlignedLocation(){return this._elevationAlignedLocationDirty?(this._evaluateElevationAlignment(),this._updateElevationAlignedLocation(),this._elevationAlignedLocation):this._elevationAlignedLocation}set elevationAlignedLocation(e){de(e,this._location),this._evaluateElevationAlignment(),this._location.z-=this._elevation.offset,this._updateElevationAlignedLocation(),this._updateEngineObject(),this.events.emit("location-update",{location:this._location})}_updateElevationAlignedLocation(){this._elevationAlignedLocation.x=this.location.x,this._elevationAlignedLocation.y=this.location.y;const e=O(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=e+this._elevation.offset,this._elevationAlignedLocation.spatialReference=this.location.spatialReference,this._renderLocationDirty=!0,this._screenLocationDirty=!0,this._elevationAlignedLocationDirty=!1}grabbableForEvent(){return!0}get grabbing(){return this._grabbing}set grabbing(e){e!==this._grabbing&&(this._grabbing=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get hovering(){return this._hovering}set hovering(e){e!==this._hovering&&(this._hovering=e,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())}get selected(){return this._selected}set selected(e){e!==this._selected&&(this._selected=e,this._updateEngineObject(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get state(){return this._state}set state(e){e!==this._state&&(this._state=e,this._updateEngineObject())}updateStateEnabled(e,t){t?this.state|=e:this.state&=~e}_setFocused(e){e!==this._focused&&(this._focused=e,this.events.emit("focus-changed",{action:e===!0?"focus":"unfocus"}))}get focused(){return this._focused}get screenLocation(){return this._ensureScreenLocation(),this._screenLocation}_ensureScreenLocation(){if(!this._screenLocationDirty)return;this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation),this._screenLocationDirty=!1;let e;if(Te(this._modelTransform)){const t=this._calculateModelTransformOffset(_i);e=G(t,t,this.renderLocation)}else e=this.renderLocation;this.camera.projectToRenderScreen(e,this._screenLocation.renderScreenPointArray),this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,this._screenLocation.screenPointArray)}get applyObjectTransform(){return this._applyObjectTransform}set applyObjectTransform(e){this._applyObjectTransform=e,this._screenLocationDirty=!0,this._updateEngineObject()}intersectionDistance(e,t){var r;if(!this.available)return null;const i=Je(e,ui),a=this._getCollisionRadius(t),n=-1*this.collisionPriority;switch(this.collisionType.type){case"point":if(it(this.screenLocation.screenPointArray,i)<a*a)return this.screenLocation.renderScreenPointArray[2]+n;break;case"line":{const o=this.collisionType.paths,c=this._getWorldToScreenObjectScale(),_=this._calculateObjectTransform(c,q),h=a*this.screenLocation.pixelSize,u=ee(this.camera,i,ae);if(m(u))return null;for(const d of o){if(d.length===0)continue;const w=D(z,d[0],_);for(let b=1;b<d.length;b++){const v=D(Oe,d[b],_),L=tt(ve(w,v,$e),u);if(L!=null&&L<h*h){const R=G($.get(),w,v);ne(R,R,.5);const P=fe($.get());return this.camera.projectToRenderScreen(R,P),P[2]+n}me(w,v)}}break}case"disc":{const o=this.collisionType.direction,c=(r=this.collisionType.offset)!=null?r:Xe,_=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(_,q),u=a*this.screenLocation.pixelSize,d=ee(this.camera,i,ae);if(m(d))return null;const w=ue(Ae,h),b=pe(Re,o,w),v=D(je,c,h);_e(v,b,B);const L=Le;if(ge(B,d,L)&&et(L,v)<u*u)return this.screenLocation.renderScreenPointArray[2]+n;break}case"ribbon":{const{paths:o,direction:c}=this.collisionType,_=this._getWorldToScreenObjectScale(),h=this._calculateObjectTransform(_,q),u=a*this.camera.computeScreenPixelSizeAt(this.renderLocation),d=ee(this.camera,i,ae);if(m(d))return null;const w=ue(Ae,h),b=pe(Re,c,w),v=this._calculateModelTransformPosition(je);_e(v,b,B);const L=Le;if(!ge(B,d,L))break;for(const R of o){if(R.length===0)continue;const P=D(z,R[0],h);for(let Z=1;Z<R.length;Z++){const K=D(Oe,R[Z],h),ce=Ke(ve(P,K,$e),L);if(ce!=null&&ce<u*u){const X=G($.get(),P,K);ne(X,X,.5);const he=fe($.get());return this.camera.projectToRenderScreen(X,he),he[2]+n}me(P,K)}}break}default:Ze(this.collisionType)}return null}attach(e={manipulator3D:{}}){var i;if(!this.view._stage)return;const t=e.manipulator3D;if(m(t.engineLayerId)){const a=new st({isPickable:!1,updatePolicy:at.SYNC});this.view._stage.add(a),t.engineLayerId=a.id,this._engineLayer=a}else((i=this.view._stage)==null?void 0:i.getObject)&&(this._engineLayer=this.view._stage.getObject(t.engineLayerId));t.engineLayerReferences=(t.engineLayerReferences||0)+1,this._materialIdReferences=t.materialIdReferences,m(this._materialIdReferences)&&(this._materialIdReferences=new Map,t.materialIdReferences=this._materialIdReferences),this.camera.copyFrom(this.view.state.camera),this._attached=!0,this._updateEngineObject(),nt(this._location.spatialReference,this.view.spatialReference)||(this.location=new U({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}detach(e={manipulator3D:{}}){const t=e.manipulator3D;t.engineLayerReferences--;const i=t.engineLayerReferences===0;i&&(t.engineLayerId=null),this._removeResourcesFromStage(i),this._engineResources=null,this._engineLayer=null,this._materialIdReferences=null,this._attached=!1}onViewChange(){this.camera.copyFrom(this.view.state.camera),this._screenLocationDirty=!0,this._updateEngineObject()}onElevationChange(e){rt(this.location,Fe,e.spatialReference),ot(e.extent,Fe)&&(this.location=this._location)}_evaluateElevationAlignment(e=this.location){if(m(this.elevationInfo))return!1;let t=null,i=0;const a=W(this.elevationInfo.offset,0);switch(this.elevationInfo.mode){case"on-the-ground":t=W(te(this.view.elevationProvider,e,"ground"),0);break;case"relative-to-ground":i=W(te(this.view.elevationProvider,e,"ground"),0)+a;break;case"relative-to-scene":i=W(te(this.view.elevationProvider,e,"scene"),0)+a;break;case"absolute-height":i=a}return(i!==this._elevation.offset||t!==this._elevation.override)&&(this._elevation.offset=i,this._elevation.override=t,!0)}_updateEngineObject(){if(!this._attached)return;if(!this.available)return void this._removeResourcesFromStage();const e=this._getWorldToScreenObjectScale(),t=q;if(this.autoScaleRenderObjects===!0){const r=this._getFocusedSize(this._radius,this.focused)*e;this._calculateObjectTransform(r,t)}else this._calculateObjectTransform(e,t);const{objectsByState:i}=this._ensureEngineResources(),a=(this.focused?j.Focused:j.Unfocused)|(this.selected?j.Selected:j.Unselected),n=this._noDisplayCount>0;for(const{stateMask:r,objects:o}of i){if(n){for(const d of o)d.setVisible(!1);continue}const c=(r&j.All)!==j.None,_=(r&k.All)!==k.None,h=!c||(a&r)==(r&j.All),u=!_||(this.state&r)==(r&k.All);if(h&&u)for(const d of o)d.setVisible(!0),d.transformation=t;else for(const d of o)d.setVisible(!1)}}_ensureEngineResources(){if(m(this._engineResources)){const e=ie(this._engineLayer),t=[],i=new Set;this.renderObjects.forEach(({material:o})=>{i.has(o)||(t.push(o),i.add(o))});const a=(o,c)=>{const{geometry:_,material:h,transform:u}=c;Array.isArray(_)?_.forEach(d=>o.addGeometry(d,h,u)):o.addGeometry(_,h,u)},n=new Map;this._renderObjects.forEach(o=>{const c=new lt({castShadow:!1});a(c,o);const _=o.stateMask||0,h=n.get(_)||[];h.push(c),n.set(_,h)});const r=[];n.forEach((o,c)=>r.push({stateMask:c,objects:o})),this._engineResources={objectsByState:r,layer:e,materials:t}}return this._addResourcesToStage(),this._engineResources}_addResourcesToStage(){if(this._engineResourcesAddedToStage||m(this._engineResources))return;const{objectsByState:e,layer:t,materials:i}=this._engineResources;i.forEach(a=>{const n=ie(this._materialIdReferences),r=n.get(a.id)||0;r===0&&this.view._stage.add(a),n.set(a.id,r+1)}),e.forEach(({objects:a})=>{t.addMany(a),this.view._stage.addMany(a)}),this._engineResourcesAddedToStage=!0}_removeResourcesFromStage(e=!1){if(!this._engineResourcesAddedToStage||m(this._engineResources)||!this.view._stage)return;const{objectsByState:t,layer:i,materials:a}=this._engineResources;t.forEach(({objects:n})=>{i.removeMany(n),this.view._stage.removeMany(n)}),a.forEach(n=>{const r=ie(this._materialIdReferences),o=r.get(n.id);o===1?(this.view._stage.remove(n),r.delete(n.id)):r.set(n.id,o-1)}),e&&this.view._stage.remove(i),this._engineResourcesAddedToStage=!1}_getCollisionRadius(e){return this._getFocusedSize(this.radius,!0)*(e==="touch"?this.touchMultiplier:1)}_getFocusedSize(e,t){return e*(t?this.focusMultiplier:1)}_getWorldToScreenObjectScale(){return this._worldSized?1:this.screenLocation.pixelSize}_calculateModelTransformPosition(e){const t=this._getWorldToScreenObjectScale(),i=this._calculateObjectTransform(t,pi);return re(e,i[12],i[13],i[14])}_calculateModelTransformOffset(e){const t=this._calculateModelTransformPosition(e);return Pe(e,t,this.renderLocation)}_calculateObjectTransform(e,t){return ct(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1),this._worldFrame&&be(t,t,this._worldFrame),be(t,t,this._modelTransform),t[12]+=this.renderLocation[0],t[13]+=this.renderLocation[1],t[14]+=this.renderLocation[2],t[15]=1,O(this._applyObjectTransform)&&this._applyObjectTransform(t),t}get test(){let e=!1;if(O(this._engineResources))for(const t in this._engineResources.objectsByState){const i=this._engineResources.objectsByState[t];for(const a of i.objects)if(a.isVisible){e=!0;break}if(e)break}return{areAnyResourcesVisible:e}}}function Te(s){return s[12]!==0||s[13]!==0||s[14]!==0}function di(s,e,t){switch(s.viewingMode){case"local":return pt(t),!0;case"global":{const i=ht(s.renderCoordsHelper.spatialReference);return dt(e,0,z,0,i.radius),ut(ye(z[0]),ye(z[1]),t),!0}}}const ui=Me(),$e=qe(),ae=Be(),Ae=_t(),pi=H(),q=H(),B=Ve(),z=A(),Oe=A(),Le=A(),Re=A(),je=A(),_i=A(),Fe=new U({x:0,y:0,z:0,spatialReference:null});function gi(s,e){if(!e.screenSizeEnabled)return;const t=s.vertex;gt(t,e),t.uniforms.add(new we("perScreenPixelRatio",(i,a)=>a.camera.perScreenPixelRatio)),t.uniforms.add(new we("screenSizeScale",i=>i.screenSizeScale)),t.code.add(S`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function vi(s){const e=new vt,t=s.hasMultipassTerrain&&(s.output===y.Color||s.output===y.Alpha);e.include(ft),e.include(gi,s),e.include(mt,s);const{vertex:i,fragment:a}=e;return a.include(bt),yt(e,s),a.uniforms.add(new Se("uColor",n=>n.color)),e.attributes.add(p.POSITION,"vec3"),e.varyings.add("vWorldPosition","vec3"),t&&e.varyings.add("depth","float"),s.screenSizeEnabled&&e.attributes.add(p.OFFSET,"vec3"),s.shadingEnabled&&(i.uniforms.add(new wt("viewNormal",(n,r)=>r.camera.viewInverseTransposeMatrix)),e.attributes.add(p.NORMAL,"vec3"),e.varyings.add("vViewNormal","vec3")),i.code.add(S`
    void main(void) {
      vWorldPosition = ${s.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),s.shadingEnabled&&i.code.add(S`vec3 worldNormal = normal;
vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`),i.code.add(S`
    ${t?"depth = (view * vec4(vWorldPosition, 1.0)).z;":""}
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),t&&e.include(St,s),a.code.add(S`
    void main() {
      discardBySlice(vWorldPosition);
      ${t?"terrainDepthTest(gl_FragCoord, depth);":""}
    `),s.shadingEnabled?(a.uniforms.add(new Et("shadingDirection",n=>n.shadingDirection)),a.uniforms.add(new Se("shadedColor",n=>fi(n.shadingTint,n.color))),a.code.add(S`vec3 viewNormalNorm = normalize(vViewNormal);
float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`)):a.code.add(S`vec4 finalColor = uColor;`),a.code.add(S`
      if (finalColor.a < ${S.float(Tt)}) {
        discard;
      }
      ${s.output===y.Alpha?S`gl_FragColor = vec4(finalColor.a);`:""}

      ${s.output===y.Color?S`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${s.transparencyPassType===I.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),e}function fi(s,e){const t=1-s[3],i=s[3]+e[3]*t;return i===0?(C[3]=i,C):(C[0]=(s[0]*s[3]+e[0]*e[3]*t)/i,C[1]=(s[1]*s[3]+e[1]*e[3]*t)/i,C[2]=(s[2]*s[3]+e[2]*e[3]*t)/i,C[3]=e[3],C)}const C=$t(),mi=Object.freeze(Object.defineProperty({__proto__:null,build:vi},Symbol.toStringTag,{value:"Module"}));class J extends Lt{initializeProgram(e){const t=J.shader.get().build(this.configuration);return new Rt(e.rctx,t,Ne)}_setPipelineState(e){const t=this.configuration,i=e===I.NONE,a=e===I.FrontFace;return jt({blending:t.output!==y.Color&&t.output!==y.Alpha||!t.transparent?null:i?Ft:Ct(e),culling:Mt(t.cullFace),depthTest:{func:a?se.LESS:t.shadingEnabled?se.LEQUAL:se.LESS},depthWrite:i?t.writeDepth&&Pt:Dt(e),colorWrite:xt,polygonOffset:i||a?null:zt})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}}J.shader=new At(mi,()=>import("./ShadedColorMaterial.glsl.ead196cb.js"));class E extends Ot{constructor(){super(...arguments),this.output=y.Color,this.cullFace=N.None,this.transparencyPassType=I.NONE,this.hasSlicePlane=!1,this.transparent=!1,this.writeDepth=!0,this.screenSizeEnabled=!0,this.shadingEnabled=!0,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}l([T({count:y.COUNT})],E.prototype,"output",void 0),l([T({count:N.COUNT})],E.prototype,"cullFace",void 0),l([T({count:I.COUNT})],E.prototype,"transparencyPassType",void 0),l([T()],E.prototype,"hasSlicePlane",void 0),l([T()],E.prototype,"transparent",void 0),l([T()],E.prototype,"writeDepth",void 0),l([T()],E.prototype,"screenSizeEnabled",void 0),l([T()],E.prototype,"shadingEnabled",void 0),l([T()],E.prototype,"hasMultipassTerrain",void 0),l([T()],E.prototype,"cullAboveGround",void 0);const Ne=new Map([[p.POSITION,0],[p.NORMAL,1],[p.OFFSET,2]]);class bi extends It{constructor(e){super(e,new wi),this.supportsEdges=!0,this.techniqueConfig=new E,this._vertexAttributeLocations=Ne}getConfiguration(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.cullFace=this.parameters.cullFace,this.techniqueConfig.hasSlicePlane=this.parameters.hasSlicePlane,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,this.techniqueConfig.screenSizeEnabled=this.parameters.screenSizeEnabled,this.techniqueConfig.shadingEnabled=this.parameters.shadingEnabled,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.hasMultipassTerrain=t.multipassTerrain.enabled,this.techniqueConfig.cullAboveGround=t.multipassTerrain.cullAboveGround,this.techniqueConfig}intersect(e,t,i,a,n,r,o){if(this.parameters.screenSizeEnabled){const c=e.vertexAttributes.get(p.OFFSET);Ee(e,t,a,n,r,{applyToVertex:(h,u,d,w)=>{const b=re(Ce,c.data[3*w+0],c.data[3*w+1],c.data[3*w+2]),v=re(Ei,h,u,d);return ne(b,b,this.parameters.screenSizeScale*a.camera.computeRenderPixelSizeAt(b)),G(v,v,b),[v[0],v[1],v[2]]},applyToAabb:h=>{const u=Ht(h,Ce);return Qt(h,this.parameters.screenSizeScale*a.camera.computeRenderPixelSizeAt(u))}},o)}else Ee(e,t,a,n,r,void 0,o)}requiresSlot(e,t){if(Nt(t)===y.Highlight)return e===x.OPAQUE_MATERIAL;let i=x.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?x.TRANSPARENT_MATERIAL:x.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i||e===x.DRAPED_MATERIAL}createGLMaterial(e){return e.output===y.Color||e.output===y.Alpha||e.output===y.Highlight?new yi(e):null}createBufferWriter(){return new Si(this.parameters.screenSizeEnabled)}}class yi extends kt{beginSlot(e){return this.ensureTechnique(J,e)}}class wi extends Wt{constructor(){super(...arguments),this.color=Q(1,1,1,1),this.shadingTint=Q(0,0,0,.25),this.shadingDirection=oe(A(),[.5,-.5,-.5]),this.screenSizeScale=14,this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=N.None,this.screenSizeEnabled=!1,this.shadingEnabled=!0}}class Si{constructor(e){this.screenSizeEnabled=e;const t=qt().vec3f(p.POSITION).vec3f(p.NORMAL);this.screenSizeEnabled&&t.vec3f(p.OFFSET),this.vertexBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(p.POSITION).length}write(e,t,i,a){if(Bt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,a),this.screenSizeEnabled){if(!t.vertexAttributes.has(p.OFFSET))throw new Error(`${p.OFFSET} vertex attribute required for screenSizeEnabled ShadedColorMaterial`);{const n=t.vertexAttributes.get(p.OFFSET),r=t.indices.get(p.OFFSET);Vt(n.size===3);const o=i.getField(p.OFFSET,Ut);if(!o)throw new Error("unable to acquire view for "+p.OFFSET);Gt(r,n.data,e.invTranspTransformation,o,a)}}}}const Ce=A(),Ei=A();function Ti(s,e=Zt.OccludeAndTransparent,t=!0){const i=Q(s[0],s[1],s[2],s.length>3?s[3]:1),a=s[3]<1;return t?new bi({color:i,transparent:a,writeDepth:!0,cullFace:N.Back,renderOccluded:e}):new Jt({color:i,transparent:a,writeDepth:!0,cullFace:N.Back,renderOccluded:e})}function ji(s,e,t){return new hi({view:s,renderObjects:[{geometry:Yt.createSphereGeometry(1,32,32),material:Ti(Q(e[0],e[1],e[2],t!=null?t:1))}]})}function Fi(s,e,t,i){const a=Pe($.get(),s,t),n=$i(a,De($.get(),i,a),t,Kt.get());Xt(n,n);const r=D($.get(),e,n);return Math.atan2(r[1],r[0])}function $i(s,e,t,i){const a=oe($.get(),s),n=oe($.get(),e),r=De($.get(),a,n);return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=0,i[4]=n[0],i[5]=n[1],i[6]=n[2],i[7]=0,i[8]=r[0],i[9]=r[1],i[10]=r[2],i[11]=0,i[12]=t[0],i[13]=t[1],i[14]=t[2],i[15]=1,i}function Ai(s,e){let t=null,i=null;return a=>{if(a.action==="cancel")return void(O(i)&&(i.execute({action:"cancel"}),t=null,i=null));const n={action:a.action,screenStart:a.start,screenEnd:a.screenPoint};a.action==="start"&&m(t)&&(t=new Y,i=new Y,e(s,t,i,a.pointerType,n)),O(t)&&t.execute(n),a.action==="end"&&O(t)&&(t=null,i=null)}}function Ci(s,e){return s.events.on("drag",Ai(s,e))}function Mi(s,e){const t=new Map;for(const i of e)t.set(i,ei(s[i]));return i=>(t.forEach((a,n)=>{s[n]=a}),i)}class Y{constructor(){this.execute=()=>{}}next(e,t=new Y){return O(e)&&(this.execute=i=>{const a=e(i);O(a)&&t.execute(a)}),t}}var M;(function(s){s[s.WhenToolEditable=0]="WhenToolEditable",s[s.WhenToolNotEditable=1]="WhenToolNotEditable",s[s.Always=2]="Always"})(M||(M={}));class Oi{constructor(){this._isToolEditable=!0,this._manipulators=new ti,this._nextManipulatorId=0,this._resourceContexts={manipulator3D:{}},this._attached=!1}set isToolEditable(e){this._isToolEditable=e}get length(){return this._manipulators.length}add(e,t=M.WhenToolEditable){return this.addMany([e],t)[0]}addMany(e,t=M.WhenToolEditable){return e.map(i=>{const a=this._nextManipulatorId++,n={id:a,manipulator:i,visibilityPredicate:t,attached:!1};return this._manipulators.add(n),this._attached&&this._updateManipulatorAttachment(n),a})}remove(e){if(typeof e=="number"){const i=e;for(let a=0;a<this._manipulators.length;a++)if(this._manipulators.getItemAt(a).id===i){const n=this._manipulators.splice(a,1)[0];return this._detachManipulator(n),n.id}return null}const t=e;for(let i=0;i<this._manipulators.length;i++)if(this._manipulators.getItemAt(i).manipulator===t){const a=this._manipulators.splice(i,1)[0];return this._detachManipulator(a),a.id}return null}removeAll(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._manipulators.removeAll()}attach(){this._manipulators.forEach(e=>{this._updateManipulatorAttachment(e)}),this._attached=!0}detach(){this._manipulators.forEach(e=>{this._detachManipulator(e)}),this._attached=!1}destroy(){this._manipulators.forEach(({manipulator:e})=>{e.destroy&&e.destroy()}),this._manipulators.destroy(),this._resourceContexts=null}on(e,t){return this._manipulators.on(e,i=>{t(i)})}forEach(e){for(const t of this._manipulators.items)e(t)}some(e){return this._manipulators.items.some(e)}toArray(){const e=[];return this.forEach(t=>e.push(t.manipulator)),e}intersect(e,t){let i=null,a=Number.MAX_VALUE;return this._manipulators.forEach(({id:n,manipulator:r,attached:o})=>{if(!o||!r.interactive)return;const c=r.intersectionDistance(e,t);O(c)&&c<a&&(a=c,i={id:n,manipulator:r})}),i}findById(e){if(m(e))return null;for(const t of this._manipulators.items)if(e===t.id)return t.manipulator;return null}_updateManipulatorAttachment(e){this._isManipulatorItemVisible(e)?this._attachManipulator(e):this._detachManipulator(e)}_attachManipulator(e){e.attached||(e.manipulator.attach&&e.manipulator.attach(this._resourceContexts),e.attached=!0)}_detachManipulator(e){if(!e.attached)return;const t=e.manipulator;t.grabbing=!1,t.dragging=!1,t.hovering=!1,t.selected=!1,t.detach&&t.detach(this._resourceContexts),e.attached=!1}_isManipulatorItemVisible(e){return e.visibilityPredicate===M.Always||(this._isToolEditable?e.visibilityPredicate===M.WhenToolEditable:e.visibilityPredicate===M.WhenToolNotEditable)}}const Li=ii.getLogger("esri.views.interactive.InteractiveToolBase");let g=class extends si{constructor(s){super(s),this.manipulators=new Oi,this.preferManipulatorCursor=!1,this.automaticManipulatorSelection=!0,this.hasFocusedManipulators=!1,this.created=!1,this.removeIncompleteOnCancel=!0,this._editableFlags=new Map([[F.MANAGER,!0],[F.USER,!0]]),this._creationFinishedResolver=ai()}get active(){return this.view!=null&&this.view.activeTool===this}set visible(s){this._get("visible")!==s&&(this._set("visible",s),this._syncVisible())}get editable(){return this.getEditableFlag(F.USER)}set editable(s){this.setEditableFlag(F.USER,s)}get updating(){return!1}get cursor(){return null}destroy(){this.manipulators.destroy(),this._set("view",null)}onAdd(){this._syncVisible()}activate(){m(this.view)?Li.error("Can't activate tool if view is not defined."):(ni(this.view)&&this.view.focus(),this.onActivate())}deactivate(){this.onDeactivate()}handleInputEvent(s){this.onInputEvent(s)}handleInputEventAfter(s){this.onInputEventAfter(s)}setEditableFlag(s,e){this._editableFlags.set(s,e),this.manipulators.isToolEditable=this.internallyEditable,this._updateManipulatorAttachment(),s===F.USER&&this.notifyChange("editable"),this.onEditableChange()}getEditableFlag(s){return this._editableFlags.get(s)}whenCreated(){return this._creationFinishedResolver.promise}onActivate(){}onDeactivate(){}onShow(){}onHide(){}onEditableChange(){}onInputEvent(s){}onInputEventAfter(s){}get internallyEditable(){return this.getEditableFlag(F.USER)&&this.getEditableFlag(F.MANAGER)}finishToolCreation(){this.created||this._creationFinishedResolver.resolve(this),this._set("created",!0)}_syncVisible(){if(this.constructed){if(this.visible)this._show();else if(this._hide(),this.active)return void(this.view.activeTool=null)}}_show(){this._updateManipulatorAttachment(),this.onShow()}_hide(){this._updateManipulatorAttachment(),this.onHide()}_updateManipulatorAttachment(){this.visible?this.manipulators.attach():this.manipulators.detach()}};l([f({constructOnly:!0})],g.prototype,"view",void 0),l([f({readOnly:!0})],g.prototype,"active",null),l([f({value:!0})],g.prototype,"visible",null),l([f({value:!0})],g.prototype,"editable",null),l([f({readOnly:!0})],g.prototype,"manipulators",void 0),l([f({readOnly:!0})],g.prototype,"updating",null),l([f()],g.prototype,"cursor",null),l([f({readOnly:!0})],g.prototype,"preferManipulatorCursor",void 0),l([f({readOnly:!0})],g.prototype,"automaticManipulatorSelection",void 0),l([f()],g.prototype,"hasFocusedManipulators",void 0),l([f({readOnly:!0})],g.prototype,"created",void 0),l([f({readOnly:!0})],g.prototype,"removeIncompleteOnCancel",void 0),g=l([xe("esri.views.interactive.InteractiveToolBase")],g);let V=class extends g{constructor(s){super(s)}initialize(){this.own(ze(()=>this.analysisViewData.visible,s=>this.visible=s,Ie))}deactivate(){this.onDeactivate(),this.created||this.analysis.clear()}resetCreated(){this._set("created",!1)}};l([f({constructOnly:!0})],V.prototype,"analysis",void 0),l([f()],V.prototype,"analysisViewData",void 0),V=l([xe("esri.views.interactive.AnalysisToolBase")],V);function Pi(s,e,t){const i=ke(s,e);s.view.activeTool=i;let a=ci(t,()=>le(s,e));return ri(async n=>{await oi(()=>!i.active,n),a=li(a),le(s,e)},t)}function Di(s,e){return ze(()=>s.interactive,()=>le(s,e),Ie)}function le(s,e){s.interactive?ke(s,e):We(s)}function ke(s,e){We(s);const{view:t,analysis:i}=s,a=new e({view:t,analysis:i,analysisViewData:s});return s.tool=a,t.tools.add(a),a}function We(s){const{view:e,tool:t}=s;m(t)||(e.tools.remove(t),s.tool=null)}export{Y as G,Fi as O,V as a,Di as c,vi as f,$i as k,We as m,Ci as p,Pi as s,hi as t,Ti as w,ji as y,Mi as z};
