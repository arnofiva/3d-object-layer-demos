import{aW as L,bB as W,aA as m,dj as nt,cT as k,ch as P,cU as ct,bi as lt,d2 as R,d1 as X,d3 as D,du as pt,cr as S,aV as V,cg as M,aD as u,aE as g,cy as _t,aF as dt}from"./main-79e5ed80.js";import{m as ut}from"./getDefaultUnitForView-33179f7a.js";import{i as x,s as H,a as gt,m as vt}from"./drawUtils-f091ac1a.js";import{h as mt,P as yt}from"./GraphicMover-8a00d1d0.js";import{p as J,r as ft}from"./SketchViewModel-0c15215b.js";import{h as Gt}from"./settings-e9a73c67.js";import{i as xt,p as wt}from"./ExtentTooltipInfos-92f53513.js";import{d as U,m as $}from"./automaticLengthMeasurementUtils-dacc4f51.js";import{r as bt}from"./TranslateTooltipInfos-b9e3d07e.js";import"./unitFormatUtils-b50d8ff8.js";import"./GraphicsLayer-6532b5a8.js";import"./GraphicManipulator-f9349a2c.js";import"./elevationInfoUtils-287337e4.js";import"./drapedUtils-2204a7de.js";import"./geodesicUtils-04ddd9a4.js";import"./SnappingManager-e561e372.js";import"./geometry2dUtils-9d16f4f8.js";import"./viewUtils-ca2c33e3.js";import"./euclideanLengthMeasurementUtils-8f8f7aa9.js";import"./measurementUtils-c24c5920.js";import"./geometryEngine-547e4a01.js";import"./geometryEngineBase-d69ff1ad.js";import"./hydrated-e6cbef23.js";function F(t){let e=0,i=0;const s=t.length;let r,a=t[i];for(i=0;i<s-1;i++)r=t[i+1],e+=(r[0]-a[0])*(r[1]+a[1]),a=r;return e>=0}function B(t,e,i,s){const r=[];for(const a of t){const h=a.slice(0);r.push(h);const c=e*(a[0]-s.x)-i*(a[1]-s.y)+s.x,o=i*(a[0]-s.x)+e*(a[1]-s.y)+s.y;h[0]=c,h[1]=o}return r}function T(t,e,i){const{hasM:s,hasZ:r,spatialReference:a}=t,h=e*Math.PI/180,c=Math.cos(h),o=Math.sin(h);if("xmin"in t&&(i=i??t.center,t=new L({spatialReference:a,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){i=i??t.extent.center;const l=[];for(const n of t.paths)l.push(B(n,c,o,i));return new W({hasM:s,hasZ:r,spatialReference:a,paths:l})}if("rings"in t){i=i??t.extent.center;const l=[];for(const n of t.rings){const p=F(n),v=B(n,c,o,i);F(v)!==p&&v.reverse(),l.push(v)}return new L({hasM:s,hasZ:r,spatialReference:a,rings:l})}if("x"in t){i=i??t;const l=new m({x:c*(t.x-i.x)-o*(t.y-i.y)+i.x,y:o*(t.x-i.x)+c*(t.y-i.y)+i.y,spatialReference:a});return t.z!=null&&(l.z=t.z),t.m!=null&&(l.m=t.m),l}return"points"in t?(i=i??t.extent.center,new nt({hasM:s,hasZ:r,points:B(t.points,c,o,i),spatialReference:a})):null}class St{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move-start"}}class kt{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move"}}class j{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move-stop"}}class Rt{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-start"}}class Mt{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate"}}class Z{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-stop"}}class It{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale-start"}}class Ot{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale"}}class q{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale-stop"}}const _=Gt.transformGraphics,w={centerIndicator:new k({style:"cross",size:_.center.size,color:_.center.color}),fill:{default:new P({color:_.fill.color,outline:{color:_.fill.outlineColor,join:"round",width:1}}),active:new P({color:_.fill.stagedColor,outline:{color:_.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new k({style:"square",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new k({style:"square",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotator:{default:new k({style:"circle",size:_.vertex.size,color:_.vertex.color,outline:{color:_.vertex.outlineColor,width:1}}),hover:new k({style:"circle",size:_.vertex.hoverSize,color:_.vertex.hoverColor,outline:{color:_.vertex.hoverOutlineColor,width:1}})},rotatorLine:new ct({color:_.line.color,width:1})};let d=class extends lt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._mover=null,this._centerGraphic=null,this._backgroundGraphic=null,this._vertexGraphics=[],this._rotateHandleGraphic=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._tooltip=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.highlightsEnabled=!0,this.layer=null,this.preserveAspectRatio=!1,this.showCenterGraphic=!0,this.symbols=w,this.tooltipOptions=new J,this.view=null,this._getBounds=(()=>{const e=R();return(i,s)=>{i[0]=Number.POSITIVE_INFINITY,i[1]=Number.POSITIVE_INFINITY,i[2]=Number.NEGATIVE_INFINITY,i[3]=Number.NEGATIVE_INFINITY;for(const r of s){if(!r)continue;let a,h,c,o;if(r.type==="point")a=c=r.x,h=o=r.y;else if(r.type==="multipoint"){const l=X(r);[a,h,c,o]=D(e,[l])}else if(r.type==="extent")[a,h,c,o]=[r.xmin,r.ymin,r.xmax,r.ymax];else{const l=X(r);[a,h,c,o]=D(e,l)}i[0]=Math.min(a,i[0]),i[1]=Math.min(h,i[1]),i[2]=Math.max(c,i[2]),i[3]=Math.max(o,i[3])}return i}})()}initialize(){const t=this.view;this._highlightHelper=new mt({view:t}),this._tooltip=new U({view:t}),this._setup(),this.addHandles([pt(()=>t?.ready,()=>{const{layer:e,view:i}=this;ft(i,e)},{once:!0,initial:!0}),S(()=>this.preserveAspectRatio,()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics(),this._updateTooltip(this._activeHandleGraphic))}),S(()=>t?.scale,()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),S(()=>this.graphics,()=>this.refresh()),S(()=>this.layer,(e,i)=>{i&&this._resetGraphics(i),this.refresh()}),S(()=>this.highlightsEnabled,()=>{this._highlightHelper?.removeAll(),this._setUpHighlights()}),S(()=>this.tooltipOptions.enabled,e=>{this._tooltip=e?new U({view:this.view}):V(this._tooltip)},_t),this.on("move-start",e=>this.callbacks?.onMoveStart?.(e)),this.on("move",e=>this.callbacks?.onMove?.(e)),this.on("move-stop",e=>this.callbacks?.onMoveStop?.(e)),this.on("rotate-start",e=>this.callbacks?.onRotateStart?.(e)),this.on("rotate",e=>this.callbacks?.onRotate?.(e)),this.on("rotate-stop",e=>this.callbacks?.onRotateStop?.(e)),this.on("scale-start",e=>this.callbacks?.onScaleStart?.(e)),this.on("scale",e=>this.callbacks?.onScale?.(e)),this.on("scale-stop",e=>this.callbacks?.onScaleStop?.(e))])}destroy(){this._reset(),this._tooltip=V(this._tooltip)}get state(){const t=this.view?.ready??!1,e=this.graphics.length&&this.layer;return t&&e?"active":t?"ready":"disabled"}isUIGraphic(t){return this._vertexGraphics.includes(t)||t===this._backgroundGraphic||t===this._centerGraphic||t===this._rotateHandleGraphic||t===this._rotateLineGraphic}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=x(s,t,e,this.view);i.geometry=r}this.refresh(),this.emit("move-stop",new j(this.graphics,null,t,e))}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=H(s,t,e);i.geometry=r}this.refresh(),this.emit("scale-stop",new q(this.graphics,null,t,e))}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const i=this._vertexGraphics[1].geometry.x,s=this._vertexGraphics[3].geometry.y;e=new m(i,s,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,r=T(s,t,e);i.geometry=r}this.refresh(),this.emit("rotate-stop",new Z(this.graphics,null,t))}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setUpHighlights(),this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._highlightHelper?.removeAll(),this._resetGraphicStateVars(),this._resetGraphics(),this._updateTooltip(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){(t=t||this.layer)&&(t.removeMany(this._vertexGraphics),t.remove(this._backgroundGraphic),t.remove(this._centerGraphic),t.remove(this._rotateHandleGraphic),t.remove(this._rotateLineGraphic)),this._vertexGraphics=[],this._backgroundGraphic=null,this._centerGraphic=null,this._rotateHandleGraphic=null,this._rotateLineGraphic=null}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this._vertexGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this._backgroundGraphic)),this.enableRotation&&t.push(this._rotateHandleGraphic),this.showCenterGraphic&&t.push(this._centerGraphic),this._mover=new yt({enableMoveAllGraphics:!1,highlightsEnabled:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds(R()),a=Math.abs(s-e),h=Math.abs(r-i),c=(s+e)/2,o=(r+i)/2,{x:l,y:n}=t.geometry;return{width:a,height:h,centerX:c,centerY:o,startX:l,startY:n,graphicInfos:this._getGraphicInfos(),box:this._backgroundGraphic.geometry,rotate:this._rotateHandleGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,a]=this._getBounds(R(),[e]);return{width:Math.abs(r-i),height:Math.abs(a-s),centerX:(r+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,_backgroundGraphic:r,_vertexGraphics:a,_rotateHandleGraphic:h,symbols:c}=this,o=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=c.fill.active,this._startInfo=this._getStartInfo(o),this._updateTooltip(o,t.viewEvent),o===h?(this.view.cursor="grabbing",this.emit("rotate-start",new Rt(this.graphics,o,e))):a.includes(o)?(this._activeHandleGraphic=o,this.emit("scale-start",new It(this.graphics,o,i,s))):this.emit("move-start",new St(this.graphics,o,t.dx,t.dy))}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this._vertexGraphics.includes(e))this._scaleGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("scale",new Ot(this.graphics,e,this._xScale,this._yScale));else if(e===this._rotateHandleGraphic)this._rotateGraphic(e),this._updateTooltip(e,t.viewEvent),this.emit("rotate",new Mt(this.graphics,e,this._angleOfRotation));else{const{dx:i,dy:s}=t;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._updateTooltip(e,t.viewEvent),this.emit("move",new kt(this.graphics,e,i,s))}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:a,_yScale:h,_vertexGraphics:c,_rotateHandleGraphic:o}=this;this.refresh(),e===o?(this.view.cursor="pointer",this.emit("rotate-stop",new Z(this.graphics,e,i))):c.includes(e)?this.emit("scale-stop",new q(this.graphics,e,a,h)):this.emit("move-stop",new j(this.graphics,e,s,r))}_onGraphicPointerOverCallback(t){const{_backgroundGraphic:e,_vertexGraphics:i,graphics:s,_rotateHandleGraphic:r,symbols:a,view:h}=this,c=t.graphic;if(c===r)return r.symbol=a.rotator.hover,h.cursor="pointer",void this._updateTooltip(c);if(s.includes(c)||c===e)return void(h.cursor="move");if(!i.includes(c))return void(h.cursor="pointer");this._updateTooltip(c),t.graphic.symbol=a.handles.hover;const o=h.rotation;let l,n=t.index;switch(n<8&&(o>=0&&o<45?n%=8:n=o>=45&&o<90?(n+1)%8:o>=90&&o<135?(n+2)%8:o>=135&&o<180?(n+3)%8:o>=180&&o<225?(n+4)%8:o>=225&&o<270?(n+5)%8:o>=270&&o<315?(n+6)%8:(n+7)%8),n){case 0:case 4:l="nwse-resize";break;case 1:case 5:l="ns-resize";break;case 2:case 6:l="nesw-resize";break;case 3:case 7:l="ew-resize";break;default:l="pointer"}h.cursor=l}_onGraphicPointerOutCallback(t){const{_vertexGraphics:e,_rotateHandleGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default",this._updateTooltip()}_scaleGraphic(t){const{_startInfo:e,_vertexGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:h,startX:c,startY:o}=e,{resolution:l,transform:n}=r.state,p=i.indexOf(t);p!==1&&p!==5||this._updateX(t,a),p!==3&&p!==7||this._updateY(t,h);const{x:v,y}=t.geometry,E=n[0]*v+n[2]*y+n[4],K=n[1]*v+n[3]*y+n[5],I=e.graphicInfos?.map(b=>b.geometry)??[];if(s){const b=n[0]*a+n[2]*h+n[4],O=n[1]*a+n[3]*h+n[5],f=n[0]*c+n[2]*o+n[4],G=n[1]*c+n[3]*o+n[5];this._xScale=this._yScale=gt(b,O,f,G,E,K);for(const C of I){const z=I.indexOf(C);this.graphics[z].geometry=H(C,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{const{width:b,height:O}=e;let f=v-c,G=o-y;if(p===1||p===5?f=0:p!==3&&p!==7||(G=0),f===0&&G===0)return;const C=b+(c>a?f:-1*f),z=O+(o<h?G:-1*G),Q=a+f/2,tt=h+G/2;this._xScale=C/b||1,this._yScale=z/O||1,p===1||p===5?this._xScale=1:p!==3&&p!==7||(this._yScale=1);const et=(Q-a)/l,it=(tt-h)/l,st=H(e.box,this._xScale,this._yScale);this._backgroundGraphic.geometry=x(st,et,it,r,!0);const{centerX:Y,centerY:N}=this._getGraphicInfo(this._backgroundGraphic),rt=(Y-a)/l,at=-1*(N-h)/l;for(const A of I){const ot=I.indexOf(A),ht=H(A,this._xScale,this._yScale,[a,h]);this.graphics[ot].geometry=x(ht,rt,at,r,!0)}this._centerGraphic.geometry=new m(Y,N,r.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:r,box:a,rotate:h}=this._startInfo,c=this.view.spatialReference,o=new m(s,r,c),l=new m(e,i,c),n=t.geometry;this._angleOfRotation=vt(o,n,l);const p=this._startInfo.graphicInfos?.map(v=>v.geometry)??[];for(const v of p){const y=p.indexOf(v),E=T(v,this._angleOfRotation,l);this.graphics[y].geometry=E}this._backgroundGraphic.geometry=T(a,this._angleOfRotation,l),this._rotateHandleGraphic.geometry=T(h,this._angleOfRotation,l)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,e,i,this.view);for(const r of this.graphics)r!==t&&(r.geometry=x(r.geometry,e,i,this.view))}else if(t===this._centerGraphic){const s=this._backgroundGraphic.geometry;this._backgroundGraphic.geometry=x(s,e,i,this.view)}if(t===this._backgroundGraphic||t===this._centerGraphic)for(const s of this.graphics)s.geometry=x(s.geometry,e,i,this.view)}_setUpHighlights(){this.highlightsEnabled&&this.graphics.length&&this._highlightHelper?.add(this.graphics)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._centerGraphic=new M(null,e.centerIndicator,t),this.showCenterGraphic&&this.layer.add(this._centerGraphic),this._backgroundGraphic=new M(null,e.fill.default,t),this.layer.add(this._backgroundGraphic),this._rotateLineGraphic=new M(null,e.rotatorLine,t),this._rotateHandleGraphic=new M(null,e.rotator.default,t),this.enableRotation&&!this._hasExtentGraphic()&&this.layer.addMany([this._rotateLineGraphic,this._rotateHandleGraphic]);for(let i=0;i<8;i++)this._vertexGraphics.push(new M(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this._vertexGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this._centerGraphic.visible=!1,this._rotateHandleGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this._vertexGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this._vertexGraphics.forEach((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this._backgroundGraphic.geometry=new L({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(R()),r=(i+t)/2,a=(s+e)/2;this._centerGraphic.geometry=new m(r,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this._vertexGraphics.length)return;const{x:t,y:e}=this._vertexGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this._rotateHandleGraphic.geometry=new m(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this._vertexGraphics.length||!this._rotateHandleGraphic||!this._rotateHandleGraphic.geometry)return;const t=this._vertexGraphics[1].geometry,e=this._rotateHandleGraphic.geometry;this._rotateLineGraphic.geometry=new W({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new m(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new m(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new m(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&t.geometry!=null&&t.geometry.type==="extent")}_getBoxBounds(t){const e=this.graphics.map(i=>i.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds(R());if(t){const a=(e+s)/2,h=(r+i)/2;return[[e,r],[a,r],[s,r],[s,h],[s,i],[a,i],[e,i],[e,h]]}return[[e,r],[s,r],[s,i],[e,i]]}_updateTooltip(t,e){if(this._tooltip==null)return;if(!t)return void this._tooltip.clear();const{_backgroundGraphic:i,graphics:s,_vertexGraphics:r,_rotateHandleGraphic:a}=this;t===a?this._updateRotateTooltip():r.includes(t)?this._updateScaleTooltip():(s.includes(t)||t===i)&&this._updateMoveTooltip(e)}_updateRotateTooltip(){this._tooltip!=null&&(this._tooltip.info=new xt({tooltipOptions:this.tooltipOptions,angle:-this._angleOfRotation}))}_updateScaleTooltip(){const{_tooltip:t,_xScale:e,_yScale:i,tooltipOptions:s,view:r}=this;if(t==null)return;const a=r.spatialReference,h=this._getCoordinates(),c=new m(h[0][0],h[0][1],a),o=new m(h[1][0],h[1][1],a),l=new m(h[2][0],h[2][1],a),n=$(c,o),p=$(o,l);if(n==null||p==null)return;const v=Math.abs(e),y=Math.abs(i);t.info=new wt({tooltipOptions:s,xScale:v,yScale:y,xSize:n,ySize:p})}_updateMoveTooltip(t){const{_tooltip:e,tooltipOptions:i,view:s}=this;if(e==null)return;const r=new bt({tooltipOptions:i});if(t){const{x:a,y:h}=t.origin,c=s.toMap(t),o=s.toMap({x:a,y:h}),l=$(o,c);r.distance=l??ut}e.info=r}};u([g()],d.prototype,"_tooltip",void 0),u([g({readOnly:!0})],d.prototype,"type",void 0),u([g()],d.prototype,"callbacks",void 0),u([g()],d.prototype,"enableMovement",void 0),u([g()],d.prototype,"enableRotation",void 0),u([g()],d.prototype,"enableScaling",void 0),u([g()],d.prototype,"graphics",void 0),u([g()],d.prototype,"highlightsEnabled",void 0),u([g()],d.prototype,"layer",void 0),u([g()],d.prototype,"preserveAspectRatio",void 0),u([g()],d.prototype,"showCenterGraphic",void 0),u([g({readOnly:!0})],d.prototype,"state",null),u([g({value:w,cast(t){const{centerIndicator:e=w.centerIndicator,fill:i=w.fill,handles:s=w.handles,rotator:r=w.rotator,rotatorLine:a=w.rotatorLine}=t||{};return{centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:a}}})],d.prototype,"symbols",void 0),u([g({type:J})],d.prototype,"tooltipOptions",void 0),u([g({constructOnly:!0})],d.prototype,"view",void 0),d=u([dt("esri.views.draw.support.Box")],d);const Qt=d;export{Qt as default};