import{iK as Ve,b3 as Me,aD as n,aE as r,aF as $,au as q,aT as x,bq as Q,bm as _,nP as c,nQ as be,d4 as De,nn as Ee,kh as Te,bn as Se,bu as U,eY as W,aV as w,lt as V,nR as u,nm as E,nS as F,nh as M,nT as Z,gN as J,kQ as p,lW as G,iN as X,nU as Y,nj as K,ng as k,ci as Ce,nV as ke,nW as b,cJ as ee,cB as xe,ek as L,nX as $e,ha as te,nc as Re,hf as ie,nf as He,ne as Ge,cc as re,nY as oe,i6 as he,bd as D,nZ as ue,hj as Le,bQ as N,n_ as ze}from"./index-cdda5707.js";import{s as Ie}from"./AnalysisView3D-cfac887c.js";import{A as Oe,l as Ae,d as Be,r as pe,h as ce,m as Ue,a as d,J as Fe,O as Ke,K as ae,e as Ne,b as de,Q as ye,M as _e,c as z,f as I,H as se,p as ne,y as je,g as qe,S as Qe,i as T,v as We,j as f,k as ve,B as Ze,X as Je,D as Xe,F as Ye,G as et,n as tt,o as it,q as at}from"./sliceToolUtils-b07a6204.js";import{C as st}from"./BuildingComponentSublayer-cc905911.js";import{a as nt}from"./LineVisualElement-b4960232.js";import{n as lt,l as rt,H as S}from"./Factory-1fcb5e33.js";import{D as ot}from"./manipulatorUtils-adaad8cc.js";import{a as ht,b as ut,v as pt}from"./analysisViewUtils-fe82c30d.js";import{d as C}from"./dragEventPipeline-4a965366.js";import"./analysisThemeUtils-8c8dee01.js";import"./colorUtils-c9a97827.js";import"./ImageMaterial-0a3c66dc.js";import"./drawUtils-3b7b83b9.js";function ct(e){switch(e.type){case"building-scene":case"csv":case"dimension":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-notes":case"ogc-feature":case"oriented-imagery":case"point-cloud":case"route":case"scene":case"stream":case"voxel":case"subtype-group":case"unknown":case"unsupported":case"wfs":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"imagery-tile":case"map-image":case"media":case"open-street-map":case"tile":case"vector-tile":case"video":case"wcs":case"web-tile":case"wms":case"wmts":return!0;default:return Ve(e.type),!1}}const we="esri.views.3d.analysis.Slice.SliceController",O=Me.getLogger(we);let P=class extends q{constructor(e){super(e),this._handles=new x,this._internalChange=!1,this._currentSlicePlane=null}initialize(){this._handles.add(this.analysis.excludedLayers.on("before-add",e=>{const t=e.item;t!=null&&(t instanceof Q||t instanceof st)?t instanceof Q&&ct(t)?(O.error("excludedLayers",`Layer '${t.title}, id:${t.id}' of type '${t.type}' can not be individually excluded from slicing. Use 'excludeGroundSurface' instead.`),e.preventDefault()):this.analysis.excludedLayers.includes(t)&&e.preventDefault():(O.error("excludedLayers","Invalid layer type, layer must derive from Layer or BuildingComponentSublayer"),e.preventDefault())})),yt(this.view,this),this._handles.add([_(()=>this.analysisViewData.plane,()=>{this._internalChange||this._updateSlicePlaneFromBoundedPlane(),this._updateLayerViews()},{sync:!0}),_(()=>this.analysis.excludeGroundSurface,()=>this._updateLayerViews(),{sync:!0}),this.analysis.excludedLayers.on("change",()=>this._updateLayerViews()),_(()=>[this.analysisViewData.active,this.analysisViewData.visible],()=>{this._updateActiveController(),this._updateViewSlicePlane()},{sync:!0}),_(()=>this._allLayerAndSubLayerViews,()=>this._updateLayerViews())]),this._handles.add([_(()=>this.analysis.shape,()=>{this._internalChange||(this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane())},{sync:!0})],"analysis"),this._updateActiveController(),this._updateBoundedPlaneFromSlicePlane(),this._updateViewSlicePlane()}destroy(){this.analysisViewData.active&&(this.analysisViewData.active=!1,this.view.slicePlane=null),_t(this.view,this),this._handles.destroy(),this.set("view",null)}get _allLayerAndSubLayerViews(){const e=this.view.allLayerViews.items;return e.concat(e.filter(Oe).flatMap(({sublayerViews:t})=>t.items))}_updateBoundedPlaneFromSlicePlane(){const e=this.analysis.shape,t=this._currentSlicePlane;if(t==null&&e==null||t!=null&&e!=null&&e.equals(t))return;let i=null,a=null;if(e!=null&&e.position!=null){const s=e.position.spatialReference,l=Ae(e,this.view);l==null&&nt(this.analysis,s,O),i=Be(l,this.view,{tiltEnabled:this.analysis.tiltEnabled},c()),i!=null&&(a={heading:e.heading,tilt:e.tilt,position:e.position,width:e.width,height:e.height})}this._currentSlicePlane=a,this._internalChange=!0,this.analysisViewData.plane=i,this._internalChange=!1}_updateSlicePlaneFromBoundedPlane(){const e=this.analysisViewData.plane,t=pe(e,this.view,this.view.spatialReference,new ce);let i=null;t!=null&&(i={heading:t.heading,tilt:t.tilt,position:t.position,width:t.width,height:t.height}),this._currentSlicePlane=i,this._internalChange=!0,this.analysis.shape=t,this._internalChange=!1,this._updateViewSlicePlane()}_updateActiveController(){if(A)return;const e=ge(this.view);if(e)if(this.analysisViewData.active)e.activeController!=null&&e.activeController!==this?(A=!0,e.activeController.analysisViewData.active=!1,A=!1):e.activeController!=null&&e.activeController,this._updateLayerViews(),e.activeController=this;else{if(e.activeController!=null&&e.activeController!==this)return;e.activeController!=null&&e.activeController===this&&(e.activeController=null,this._updateLayerViews())}}_updateViewSlicePlane(){dt(this.view)}_updateLayerViews(){const e=this.analysisViewData.plane!=null&&this.analysisViewData.visible&&this.analysisViewData.active,t=[],i=a=>{"layers"in a?a.layers.forEach(i):t.push(a)};this.analysis.excludedLayers.forEach(i),this.view.allLayerViews.forEach(a=>{a.destroyed||("slicePlaneEnabled"in a&&(a.slicePlaneEnabled=e&&!t.includes(a.layer)),"sublayerViews"in a&&a.sublayerViews.forEach(s=>{s.slicePlaneEnabled=e&&!t.includes(s.sublayer)}))}),this.view.basemapTerrain!=null&&(this.view.basemapTerrain.slicePlaneEnabled=e&&!this.analysis.excludeGroundSurface)}};n([r()],P.prototype,"view",void 0),n([r()],P.prototype,"analysis",void 0),n([r()],P.prototype,"analysisViewData",void 0),n([r()],P.prototype,"_allLayerAndSubLayerViews",null),P=n([$(we)],P);const m=new Map;let A=!1;function dt(e){const t=ge(e),i=t?.activeController;i!=null&&i.analysisViewData.plane!=null&&i.analysisViewData.visible?e.slicePlane=i.analysisViewData.plane:e.slicePlane=null}function yt(e,t){m.has(e)||m.set(e,{all:[],activeController:null}),m.get(e)?.all.push(t)}function ge(e){return m.get(e)}function _t(e,t){if(!m.has(e))throw new Error("view expected in global slice register");const i=m.get(e),a=i?.all.lastIndexOf(t)??-1;if(!i||a===-1)throw new Error("controller expected in global slice register");i.all.splice(a,1),i.all.length===0&&m.delete(e)}var j;let h=j=class extends ht{constructor(e){super(e),this._clock=be,this._previewPlaneOpacity=1,this.removeIncompleteOnCancel=!1,this.layersMode="none",this.shiftManipulator=null,this.rotateHeadingManipulator=null,this.rotateTiltManipulator=null,this.resizeManipulators=null,this._handles=new x,this._viewHandles=new x,this._frameTask=null,this._pointerMoveTimerMs=Ue,this._prevPointerMoveTimeout=null,this._previewPlaneGridVisualElement=null,this._previewPlaneOutlineVisualElement=null,this._startPlane=c(),this._previewPlane=null,this._activeKeyModifiers={},this._lastCursorPosition=De(),this._resizeHandles=[{direction:[1,0]},{direction:[1,1]},{direction:[0,1]},{direction:[-1,1]},{direction:[-1,0]},{direction:[-1,-1]},{direction:[0,-1]},{direction:[1,-1]}],this._intersector=Ee(e.view.state.viewingMode),this._intersector.options.store=Te.MIN}initialize(){if(this.analysis==null)throw new Error("SliceTool requires valid analysis, but null was provided.");const e=!this.view._stage?.renderView.renderingContext.driverTest.svgPremultipliesAlpha.result,t={accentColor:d.rotateManipulators.color,contrastColor:d.rotateManipulators.contrastColor,preMultiplyAlpha:e};this._rotateHeadingImage=lt(this.view.toolViewManager.textures,t),this._rotateTiltImage=rt(this.view.toolViewManager.textures,t);const i=s=>{this._updateManipulatorsInteractive(s),s.grabbing||(this.analysisViewData.plane!=null&&u(this.analysisViewData.plane,this._startPlane),this.inputState=null)};this.shiftManipulator=Fe(this.view,{offsetMode:Ke.CENTER_ON_ARROW,calloutColor:d.callouts.color,color:d.shiftManipulator.color,outlineColor:d.shiftManipulator.outlineColor}),this.manipulators.add(this.shiftManipulator),this.shiftManipulator.events.on("grab-changed",s=>{this._onShiftGrab(s),i(this.shiftManipulator)}),this._handles.add(this._createShiftDragPipeline(this.shiftManipulator)),this.rotateHeadingManipulator=ae(this.view,this._rotateHeadingImage.texture),this.manipulators.add(this.rotateHeadingManipulator),this.rotateHeadingManipulator.events.on("grab-changed",s=>{this._onRotateHeadingGrab(s),i(this.rotateHeadingManipulator)}),this._handles.add(this._createRotateHeadingDragPipeline(this.rotateHeadingManipulator)),this.rotateTiltManipulator=ae(this.view,this._rotateTiltImage.texture),this.manipulators.add(this.rotateTiltManipulator),this.rotateTiltManipulator.events.on("grab-changed",s=>{this._onRotateTiltGrab(s),i(this.rotateTiltManipulator)}),this._handles.add(this._createRotateTiltDragPipeline(this.rotateTiltManipulator)),this.resizeManipulators=this._resizeHandles.map((s,l)=>{const o=Ne(this.view,s,{color:d.resizeManipulators.color});return o.events.on("grab-changed",g=>{this._onResizeGrab(g,l),i(o)}),this._handles.add(this._createResizeDragPipeline(o)),o}),this.manipulators.addMany(this.resizeManipulators),this._previewPlaneGridVisualElement=de(this.view),this._previewPlaneOutlineVisualElement=ye(this.view),this._previewPlaneOutlineVisualElement.width=_e,this._handles.add(_(()=>[this.analysisViewData.plane,this.analysis.tiltEnabled],()=>this._updateManipulators(),Se));const a=_(()=>this.state,s=>{s==="sliced"&&this.finishToolCreation()},U);this._handles.add([a,_(()=>this.view.state.camera,()=>this._onCameraChange())])}destroy(){this._rotateHeadingImage=W(this._rotateHeadingImage),this._rotateTiltImage=W(this._rotateTiltImage),this._handles=w(this._handles),this._viewHandles=w(this._viewHandles),this._removeFrameTask(),this._clearPointerMoveTimeout(),this._previewPlaneOutlineVisualElement=w(this._previewPlaneOutlineVisualElement),this._previewPlaneGridVisualElement=w(this._previewPlaneGridVisualElement)}get state(){const e=!!this.analysisViewData.plane,t=!!this.inputState;return e?e&&t?"slicing":e&&!t?"sliced":"ready":"ready"}get cursor(){return this._isPlacingSlicePlane||this.layersMode==="exclude"?"crosshair":this._creatingPointerId!=null?"grabbing":null}set analysis(e){if(e==null)throw new Error("SliceTool requires valid analysis, but null was provided.");this._handles.remove("analysis"),this._set("analysis",e)}get inputState(){return this._get("inputState")}set inputState(e){this._set("inputState",e),this.analysisViewData.showGrid=e!=null&&e.type==="resize",this._updateMaterials()}get _isPlacingSlicePlane(){return!this.inputState&&!this.analysisViewData.plane&&this.active}get _creatingPointerId(){return this.inputState!=null&&this.inputState.type==="shift"?this.inputState.creatingPointerId:null}enterExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._set("layersMode","exclude"),this.active||(this.view.activeTool=this))}exitExcludeLayerMode(){this.analysisViewData.plane!=null&&(this._set("layersMode","none"),this.active&&(this.view.activeTool=null))}onDeactivate(){this._set("layersMode","none"),this._updatePreviewPlane(null)}onShow(){this._updateVisibility(!0)}onHide(){this._updateVisibility(!1)}_updateVisibility(e){this._updateManipulators(),e||this._clearPointerMoveTimeout()}onInputEvent(e){switch(e.type){case"pointer-drag":if(!B(e))return;this._isPlacingSlicePlane?this._onClickPlacePlane(e)&&e.stopPropagation():this._onPointerDrag(e)&&e.stopPropagation();break;case"pointer-move":this._onPointerMove(e);break;case"pointer-up":this._onPointerUp(e)&&e.stopPropagation();break;case"immediate-click":if(!B(e))return;this._onClickPlacePlane(e)&&e.stopPropagation();break;case"click":if(!B(e))return;this._onClickExcludeLayer(e)&&e.stopPropagation();break;case"drag":this.inputState&&e.stopPropagation();break;case"key-down":this._onKeyDown(e)&&e.stopPropagation();break;case"key-up":this._onKeyUp(e)&&e.stopPropagation()}}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}_onPointerDrag(e){const t=this.inputState;if(e.pointerId===this._creatingPointerId&&t!=null&&t.type==="shift"){const i=V(e);return this.shiftManipulator.events.emit("drag",{action:t.hasBeenDragged?"update":"start",pointerType:e.pointerType,start:i,screenPoint:i}),t.hasBeenDragged=!0,!0}return!1}_onPointerMove(e){this._lastCursorPosition.x=e.x,this._lastCursorPosition.y=e.y,this._resetPointerMoveTimeout(),e.pointerType!=="touch"&&this._updatePreviewPlane(V(e),this._activeKeyModifiers)}_onCameraChange(){this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),this._updateManipulators()}_onPointerUp(e){if(e.pointerId===this._creatingPointerId&&this.analysisViewData.plane!=null){const t=V(e);return this.shiftManipulator.events.emit("drag",{action:"end",start:t,screenPoint:t}),u(this.analysisViewData.plane,this._startPlane),this.inputState=null,!0}return!1}_onClickPlacePlane(e){if(this.layersMode==="exclude")return!1;if(this._isPlacingSlicePlane){const t=V(e),i=c();if(this._pickPlane(t,!1,this._activeKeyModifiers,i)){if(e.type==="pointer-drag"){const a=this._calculatePickRay(t);this.inputState=le(a,e.pointerId,i.origin,i)}return u(i,this._startPlane),this.analysis.shape=pe(i,this.view,this.view.spatialReference,new ce),!0}}return!1}_onClickExcludeLayer(e){return!(this.layersMode!=="exclude"||!this.created)&&(this.view.hitTest(V(e)).then(t=>{if(t.results.length){const i=t.results[0],a=i?.type==="graphic"&&i.graphic;if(a){const s=a.sourceLayer||a.layer;s&&this.analysis.excludedLayers.push(s)}}else t.ground.layer?this.analysis.excludedLayers.push(t.ground.layer):this.analysis.excludeGroundSurface=!0}),this._set("layersMode","none"),this.active&&(this.view.activeTool=null),!0)}_onKeyDown(e){return(e.key===z||e.key===I)&&(this._activeKeyModifiers[e.key]=!0,this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onKeyUp(e){return!(e.key!==z&&e.key!==I||!this._activeKeyModifiers[e.key])&&(delete this._activeKeyModifiers[e.key],this._previewPlane!=null&&this._updatePreviewPlane(this._lastCursorPosition,this._activeKeyModifiers),!0)}_onShiftGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=this._calculatePickRay(e.screenPoint);u(this.analysisViewData.plane,this._startPlane),this.inputState=le(t,null,this.shiftManipulator.renderLocation,this.analysisViewData.plane)}_createShiftDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="shift")return;const l=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,c()):null;i.next(S(this.view,s.shiftPlane)).next(this._shiftDragAdjustSensitivity(s)).next(this._shiftDragUpdatePlane(s)),a.next(()=>{l!=null&&this._updateBoundedPlane(l)})})}_shiftDragAdjustSensitivity(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=.001,a=Math.min((1-Math.abs(E(F(this.analysisViewData.plane),t.ray.direction)/M(t.ray.direction)))/i,1),s=-Z(this._startPlane.plane,t.renderEnd),l=-Z(this._startPlane.plane,e.startPoint);return e.depth=e.depth*(1-a)+s*a-l,t}}_shiftDragUpdatePlane(e){return()=>{if(this.analysisViewData.plane==null)return;const t=J(p.get(),this._startPlane.origin),i=J(p.get(),F(this._startPlane));G(i,i,-e.depth),X(i,i,t);const a=Y(i,this.analysisViewData.plane.basis1,this.analysisViewData.plane.basis2,c());this._updateBoundedPlane(a)}}_onRotateHeadingGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=se(this.analysisViewData.plane,this.view.renderCoordsHelper,ne.HEADING,K()),i=this._calculatePickRay(e.screenPoint),a=N();k(t,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateHeadingDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const l=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,c()):null;i.next(S(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{l!=null&&this._updateBoundedPlane(l)})})}_onRotateTiltGrab(e){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const t=se(this.analysisViewData.plane,this.view.renderCoordsHelper,ne.TILT,K()),i=this._calculatePickRay(e.screenPoint),a=N();k(t,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"rotate",rotatePlane:t,startPoint:a})}_createRotateTiltDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="rotate")return;const l=this.analysisViewData.plane!=null?u(this.analysisViewData.plane,c()):null;i.next(S(this.view,s.rotatePlane)).next(this._rotateDragRenderPlaneToRotate(s)).next(this._rotateDragUpdatePlaneFromRotate()),a.next(()=>{l!=null&&this._updateBoundedPlane(l)})})}_rotateDragRenderPlaneToRotate(e){return t=>{if(this.analysisViewData.plane==null)return null;const i=Ce(e.rotatePlane),a=ot(e.startPoint,t.renderEnd,this.analysisViewData.plane.origin,i);return{...t,rotateAxis:i,rotateAngle:a}}}_rotateDragUpdatePlaneFromRotate(){return e=>{if(this.analysisViewData.plane==null)return;const t=ke(b.get(),e.rotateAngle,e.rotateAxis);if(t==null)return;const i=ee(p.get(),this._startPlane.basis1,t),a=ee(p.get(),this._startPlane.basis2,t),s=Y(this.analysisViewData.plane.origin,i,a,c());this._updateBoundedPlane(s)}}_onResizeGrab(e,t){if(e.action!=="start"||this.analysisViewData.plane==null||!e.screenPoint)return;const i=this._calculatePickRay(e.screenPoint),a=p.get();k(this.analysisViewData.plane.plane,i,a)&&(u(this.analysisViewData.plane,this._startPlane),this.inputState={type:"resize",activeHandleIdx:t,startPoint:xe(a)})}_createResizeDragPipeline(e){return C(e,(t,i,a)=>{const s=this.inputState;if(s==null||s.type!=="resize"||this.analysisViewData.plane==null)return;const l=u(this.analysisViewData.plane,c());i.next(S(this.view,this.analysisViewData.plane.plane)).next(this._resizeDragUpdatePlane(s)),a.next(()=>{this._updateBoundedPlane(l)})})}_resizeDragUpdatePlane(e){return t=>{if(this.analysisViewData.plane==null)return;const i=this._resizeHandles[e.activeHandleIdx],a=je(i,e.startPoint,t.renderEnd,this.view.state.camera,this._startPlane,u(this.analysisViewData.plane));this._updateBoundedPlane(a)}}_updateBoundedPlane(e){const t=this.analysisViewData;if(t==null)throw new Error("valid internal object expected");t.plane=e}_updatePreviewPlane(e,t={}){let i=this._previewPlane;if(this._previewPlane=null,e==null)return this._removeFrameTask(),void this._updateManipulators();if(!this.analysisViewData.plane&&this.active){const a=i??c();if(i=i!=null?u(i,vt):null,this._pickPlane(e,!0,t,a)){const s=tt;let l=!1;i!=null&&(l=E(i.plane,a.plane)<s||E(L(p.get(),i.basis1),L(p.get(),a.basis1))<s),l&&(this._previewPlaneOpacity=0),this._previewPlane=a}}this._previewPlane!=null&&this._frameTask==null&&this._previewPlaneOpacity===0?this._frameTask=$e({update:({deltaTime:a})=>{this._previewPlaneOpacity=Math.min(this._previewPlaneOpacity+a/(1e3*qe),1),this._updateManipulators(),this._previewPlaneOpacity===1&&this._removeFrameTask()}}):this._previewPlane==null&&this._frameTask!=null?this._removeFrameTask():this._previewPlane!=null&&this._updateManipulators()}_removeFrameTask(){this._frameTask=te(this._frameTask)}_calculatePickRay(e){const t=Re(),i=ie(e,wt);return He(this.view.state.camera,i,t),L(t.direction,t.direction),t}_pickMinResult(e){const t=ie(e,Ge.get());return this.view.sceneIntersectionHelper.intersectToolIntersectorScreen(t,this._intersector),this._intersector.results.min}_pickPlane(e,t,i,a){const s=this._pickMinResult(e),l=p.get();if(!s.getIntersectionPoint(l))return!1;const o=s.getTransformedNormal(p.get()),g=this.view.state.camera;E(o,g.viewForward)>0&&G(o,o,-1);const R=Qe(l,g),Pe=(t?1:-1)*R*it,H=G(p.get(),o,Pe);X(H,H,l);const me=this.analysis.tiltEnabled?T.TILTED:T.HORIZONTAL_OR_VERTICAL,fe=i[z]?T.VERTICAL:i[I]?T.HORIZONTAL:me;return We(H,o,R,R,g,fe,this.view.renderCoordsHelper,a),!0}_clearPointerMoveTimeout(){this._prevPointerMoveTimeout=te(this._prevPointerMoveTimeout)}_resetPointerMoveTimeout(){this._clearPointerMoveTimeout(),this.shiftManipulator.state|=f,this.rotateHeadingManipulator.state|=f,this.rotateTiltManipulator.state|=f,this._prevPointerMoveTimeout=this._clock.setTimeout(()=>{this.shiftManipulator.state&=~f,this.rotateHeadingManipulator.state&=~f,this.rotateTiltManipulator.state&=~f},this._pointerMoveTimerMs)}_updateManipulators(){if(j.disableEngineLayers)return;let e,t=!1;if(this.analysisViewData.plane!=null)e=this.analysisViewData.plane,t=!1;else{if(this._previewPlane==null)return this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(o=>o.available=!1),this._previewPlaneOutlineVisualElement.visible=!1,void(this._previewPlaneGridVisualElement.visible=!1);e=this._previewPlane,t=!0}const i=ve(e,b.get());t?(this.shiftManipulator.available=!1,this.rotateHeadingManipulator.available=!1,this.rotateTiltManipulator.available=!1,this.resizeManipulators.forEach(o=>o.available=!1),this._previewPlaneOutlineVisualElement.attached=!0,this._previewPlaneGridVisualElement.attached=!0,this._previewPlaneOutlineVisualElement.visible=!0,this._previewPlaneGridVisualElement.visible=!0):(this.shiftManipulator.available=!0,this.rotateHeadingManipulator.available=!0,this.rotateTiltManipulator.available=this.analysis.tiltEnabled,this.resizeManipulators.forEach(o=>o.available=!0),Ze(this.shiftManipulator,i,e,this.view.state.camera),Je(this.rotateHeadingManipulator,i,e,this.view.renderCoordsHelper),Xe(this.rotateTiltManipulator,i,e),this.resizeManipulators.forEach((o,g)=>Ye(o,this._resizeHandles[g],i,e)),this._previewPlaneOutlineVisualElement.visible=!1,this._previewPlaneGridVisualElement.visible=!1);const a=re(p.get(),M(e.basis1),M(e.basis2),1),s=oe(b.get(),a),l=he(s,i,s);this._previewPlaneOutlineVisualElement.transform=l,this._previewPlaneGridVisualElement.transform=l,this._updateMaterials()}_updateMaterials(){const e=D.toUnitRGBA(d.plane.outlineColor);e[3]*=this._previewPlaneOpacity;const t=D.toUnitRGBA(d.plane.color);t[3]*=this._previewPlaneOpacity,this._previewPlaneOutlineVisualElement.color=e,this._previewPlaneGridVisualElement.backgroundColor=t,this._previewPlaneGridVisualElement.gridColor=ue}_updateManipulatorsInteractive(e){if(!e.grabbing)return this.shiftManipulator.interactive=!0,this.rotateHeadingManipulator.interactive=!0,this.rotateTiltManipulator.interactive=!0,void this.resizeManipulators.forEach(t=>{t.interactive=!0});this.shiftManipulator.interactive=this.shiftManipulator===e,this.rotateHeadingManipulator.interactive=this.rotateHeadingManipulator===e,this.rotateTiltManipulator.interactive=this.rotateTiltManipulator===e,this.resizeManipulators.forEach(t=>{t.interactive=t===e})}testData(){return{plane:this.analysisViewData.plane,setPointerMoveTimerMs:e=>{this._pointerMoveTimerMs=e}}}};function le(e,t,i,a){const s=et(i,F(a),e.direction,K()),l=N();return k(s,e,l)?{type:"shift",creatingPointerId:t,hasBeenDragged:!1,shiftPlane:s,depth:0,startPoint:l}:null}function B(e){return e.pointerType!=="mouse"||e.button===0}h.disableEngineLayers=!1,n([r()],h.prototype,"_clock",void 0),n([r({constructOnly:!0})],h.prototype,"view",void 0),n([r()],h.prototype,"analysisViewData",void 0),n([r({readOnly:!0})],h.prototype,"state",null),n([r({readOnly:!0})],h.prototype,"cursor",null),n([r()],h.prototype,"analysis",null),n([r()],h.prototype,"removeIncompleteOnCancel",void 0),n([r({readOnly:!0})],h.prototype,"layersMode",void 0),n([r({value:null})],h.prototype,"inputState",null),n([r()],h.prototype,"_isPlacingSlicePlane",null),n([r()],h.prototype,"_creatingPointerId",null),h=j=n([$("esri.views.3d.analysis.Slice.SliceTool")],h);const vt=c(),wt=Le(),gt=h;let v=class extends q{constructor(e){super(e),this._handles=new x,this._gridVisualElement=null,this._outlineVisualElement=null,this.showGrid=!1,this.preview=!0}initialize(){const e=this.analysisViewData;if(e==null)throw new Error("expected internal object to be valid");this._gridVisualElement=de(this.view),this._outlineVisualElement=ye(this.view),this._handles.add([_(()=>({visible:e.plane!=null&&this.analysisViewData.visible,active:this.analysisViewData.active,preview:this.preview,showGrid:this.showGrid}),t=>this._updateMaterials(t),U),_(()=>e.plane,t=>this._updatePlane(t),U)],"internal")}destroy(){this._handles.destroy(),this._gridVisualElement=w(this._gridVisualElement),this._outlineVisualElement=w(this._outlineVisualElement),this.set("view",null)}_updatePlane(e){if(e==null)return;this._gridVisualElement.attached=!0,this._outlineVisualElement.attached=!0;const t=re(p.get(),M(e.basis1),M(e.basis2),1),i=oe(b.get(),t),a=ve(e,b.get()),s=he(i,a,i);this._outlineVisualElement.transform=s,this._gridVisualElement.transform=s}_updateMaterials({visible:e,active:t,preview:i,showGrid:a}){this._outlineVisualElement.color=D.toUnitRGBA(d.plane.outlineColor),this._outlineVisualElement.width=i?_e:at,this._outlineVisualElement.stipplePattern=t?null:ze(5),this._gridVisualElement.backgroundColor=D.toUnitRGBA(d.plane.color),this._gridVisualElement.gridColor=a?D.toUnitRGBA(d.plane.gridColor):ue,this._gridVisualElement.visible=e,this._outlineVisualElement.visible=e}};n([r()],v.prototype,"view",void 0),n([r()],v.prototype,"analysis",void 0),n([r()],v.prototype,"analysisViewData",void 0),n([r()],v.prototype,"showGrid",void 0),n([r()],v.prototype,"preview",void 0),v=n([$("esri.views.3d.analysis.Slice.SliceVisualization")],v);let y=class extends Ie(q){constructor(e){super(e),this.type="slice-view-3d",this.analysis=null,this.tool=null,this.analysisVisualization=null,this.analysisController=null,this.plane=null,this.active=!0}initialize(){this.analysisVisualization=new v({view:this.view,analysis:this.analysis,analysisViewData:this}),this.analysisController=new P({view:this.view,analysis:this.analysis,analysisViewData:this}),this.addHandles(ut(this,gt))}destroy(){pt(this),this.analysisVisualization=w(this.analysisVisualization),this.analysisController=w(this.analysisController)}get showGrid(){return this.analysisVisualization?.showGrid??!1}set showGrid(e){this.analysisVisualization&&(this.analysisVisualization.showGrid=e)}get editable(){return!this.analysisVisualization.preview}set editable(e){this.analysisVisualization.preview=!e}get testData(){return{visualization:this.analysisVisualization,controller:this.analysisController,tool:this.tool}}};n([r({readOnly:!0})],y.prototype,"type",void 0),n([r({constructOnly:!0,nonNullable:!0})],y.prototype,"analysis",void 0),n([r()],y.prototype,"tool",void 0),n([r()],y.prototype,"plane",void 0),n([r()],y.prototype,"active",void 0),n([r()],y.prototype,"showGrid",null),n([r()],y.prototype,"editable",null),y=n([$("esri.views.3d.analysis.SliceAnalysisView3D")],y);const $t=y;export{$t as default};
