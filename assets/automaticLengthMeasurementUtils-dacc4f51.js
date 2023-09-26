import{aD as a,aE as v,aF as u,au as lt,ok as tt,ol as I,a_ as x,m9 as i,ma as dt,cr as z,cy as k,aV as et,op as ft,bD as $t,ew as _t,r$ as st,bh as M,c$ as bt,vN as yt}from"./main-79e5ed80.js";import{e as wt,q as nt,x as Tt,F as Lt,S as Mt,k as xt,T as rt,a as zt,r as $}from"./getDefaultUnitForView-33179f7a.js";import{f as ct,s as pt,m as L,Z as O,x as kt}from"./euclideanLengthMeasurementUtils-8f8f7aa9.js";import{geodesicLength as ht}from"./geometryEngine-547e4a01.js";import{M as Ct,b as J,y as Et,R as Ot}from"./geodesicUtils-04ddd9a4.js";let y=class extends lt{constructor(t){super(t),this.helpMessage=void 0}};a([v()],y.prototype,"tooltipOptions",void 0),a([v()],y.prototype,"helpMessage",void 0),y=a([u("esri.views.interactive.tooltip.SketchTooltipInfo")],y);const _="esri-tooltip",r=`${_}-content`,Nt=`${_}-table`,Rt=`${_}-help-message`;let h=class extends I{get _units(){const t=wt(this.tooltip.view);return{length:t,verticalLength:t,area:t}}_getHelpMessage(t){const{info:e}=this,{tooltipOptions:n,helpMessage:o,viewType:c}=e,p=n?.visibleElements?.helpMessage,m=t??o,mt=c==="3d"?"helpMessages3d":"helpMessages2d";return p&&m?this._messagesTooltip?.sketch?.[mt]?.[m]:void 0}_formatScale(t){return x(t,{style:"percent",maximumFractionDigits:0})}_formatRelativeOrientation(t){return x(t,{maximumFractionDigits:2,minimumFractionDigits:2,signDisplay:"exceptZero"})}_formatLength(t,e,n){return nt(this._messagesUnits,t,e??this._units.length,n)}_formatRelativeLength(t){return Tt(this._messagesUnits,t,this._units.length)}_formatVerticalLength(t){return Lt(this._messagesUnits,t,this._units.verticalLength)}_formatRelativeVerticalLength(t){return Mt(this._messagesUnits,t,this._units.verticalLength)}_formatTotalLength(t){return nt(this._messagesUnits,t,this._units.length)}_formatArea(t){return xt(this._messagesUnits,t,this._units.area)}_formatPercentage(t){return x(t.value,{style:"percent"})}};a([v()],h.prototype,"info",void 0),a([v()],h.prototype,"tooltip",void 0),a([v()],h.prototype,"_units",null),a([tt("esri/core/t9n/Units"),v()],h.prototype,"_messagesUnits",void 0),a([tt("esri/views/interactive/tooltip/t9n/Tooltip"),v()],h.prototype,"_messagesTooltip",void 0),h=a([u("esri.views.interactive.tooltip.content.TooltipContent")],h);function g({className:s,helpMessage:t},...e){const n=e.filter(o=>!!o);return i("div",{class:dt(s,r)},n.length>0?i("div",{class:Nt},...n):null,t?i("div",{key:"help-message",class:Rt},t):null)}const C=`${_}-field`,E={base:C,title:`${C}__title`,value:`${C}__value`};let l=class extends I{render(){return i("div",{class:E.base},i("div",{class:E.title},this.title),i("div",{class:E.value},this.value))}};a([v()],l.prototype,"title",void 0),a([v()],l.prototype,"value",void 0),l=a([u("esri.views.interactive.tooltip.support.TooltipField")],l);const Ht={base:`${_}-value-by-value`};let d=class extends I{constructor(){super(...arguments),this.divider="×"}render(){return i("div",{class:Ht.base},i("span",null,this.left),i("span",null,this.divider),i("span",null,this.right))}};a([v()],d.prototype,"left",void 0),a([v()],d.prototype,"divider",void 0),a([v()],d.prototype,"right",void 0),d=a([u("esri.views.interactive.tooltip.support.ValueByValue")],d);const Vt={base:`${r} ${`${r}--draw-rectangle`}`};let N=class extends h{render(){const{area:t,radius:e,xSize:n,ySize:o,tooltipOptions:c}=this.info,{visibleElements:p}=c,m=this._messagesTooltip.sketch;return i(g,{className:Vt.base,helpMessage:this._getHelpMessage()},p.radius&&e!=null&&i(l,{title:m.radius,value:this._formatLength(e)}),p.size&&n!=null&&o!=null&&i(l,{title:m.size,value:i(d,{left:this._formatLength(n),right:this._formatLength(o)})}),p.area&&i(l,{title:m.area,value:this._formatArea(t)}))}};N=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawCircle")],N);const Pt={base:`${r}--draw-mesh`};let R=class extends h{render(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:n}=e,o=this._messagesTooltip.sketch;return i(g,{className:Pt.base,helpMessage:this._getHelpMessage()},n.elevation&&i(l,{title:o.elevation,value:this._formatVerticalLength(t)}))}};R=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawMesh")],R);const St={base:`${r}--draw-point`};let H=class extends h{render(){const{elevation:t,tooltipOptions:e}=this.info,{visibleElements:n}=e,o=this._messagesTooltip.sketch;return i(g,{className:St.base,helpMessage:this._getHelpMessage()},n.elevation&&i(l,{title:o.elevation,value:this._formatVerticalLength(t)}))}};H=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawPoint")],H);const Wt={base:`${r} ${`${r}--draw-polygon`}`};let V=class extends h{render(){const{area:t,elevation:e,tooltipOptions:n,viewType:o}=this.info,{visibleElements:c}=n,p=this._messagesTooltip.sketch;return i(g,{className:Wt.base,helpMessage:this._getHelpMessage()},c.elevation&&o!=="2d"&&i(l,{title:p.elevation,value:this._formatVerticalLength(e)}),c.area&&i(l,{title:p.area,value:this._formatArea(t)}))}};V=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawPolygon")],V);const Dt={base:`${r} ${`${r}--draw-polyline`}`};let P=class extends h{render(){const{elevation:t,totalLength:e,tooltipOptions:n,viewType:o}=this.info,{visibleElements:c}=n,p=this._messagesTooltip.sketch;return i(g,{className:Dt.base,helpMessage:this._getHelpMessage()},c.elevation&&o!=="2d"&&i(l,{title:p.elevation,value:this._formatVerticalLength(t)}),c.totalLength&&i(l,{title:p.totalLength,value:this._formatLength(e)}))}};P=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawPolyline")],P);const Ut={base:`${r} ${`${r}--draw-rectangle`}`};let S=class extends h{render(){const{area:t,xSize:e,ySize:n,tooltipOptions:o}=this.info,{visibleElements:c}=o,p=this._messagesTooltip.sketch;return i(g,{className:Ut.base,helpMessage:this._getHelpMessage()},c.size&&e!=null&&n!=null&&i(l,{title:p.size,value:i(d,{left:this._formatLength(e),right:this._formatLength(n)})}),c.area&&i(l,{title:p.area,value:this._formatArea(t)}))}};S=a([u("esri.views.interactive.tooltip.content.TooltipContentDrawRectangle")],S);const At={base:`${r} ${`${r}--extent-rotate`}`};let W=class extends h{render(){const{angle:s,tooltipOptions:t}=this.info,{visibleElements:e}=t,n=this._messagesTooltip.sketch;return i(g,{className:At.base,helpMessage:this._getHelpMessage()},e.rotation&&i(l,{title:n.rotation,value:this._formatRelativeOrientation(s)}))}};W=a([u("esri.views.interactive.tooltip.content.TooltipContentExtentRotate")],W);const Zt={base:`${r} ${`${r}--extent-scale`}`};let D=class extends h{render(){const t=this.info,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:Zt.base,helpMessage:this._getHelpMessage()},e.size&&i(l,{title:n.size,value:i(d,{left:this._formatLength(t.xSize),right:this._formatLength(t.ySize)})}),e.scale&&i(l,{title:n.scale,value:i(d,{left:this._formatScale(t.xScale),right:this._formatScale(t.yScale)})}))}};D=a([u("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],D);const Ft={base:`${r} ${`${r}--reshape-edge-offset`}`};let U=class extends h{render(){const{area:t,distance:e,totalLength:n,tooltipOptions:o}=this.info,{visibleElements:c}=o,p=this._messagesTooltip.sketch;return i(g,{className:Ft.base,helpMessage:this._getHelpMessage()},c.distance&&i(l,{title:p.distance,value:this._formatRelativeLength(e)}),c.area&&t!=null&&i(l,{title:p.area,value:this._formatArea(t)}),c.totalLength&&n!=null&&i(l,{title:p.totalLength,value:this._formatLength(n)}))}};U=a([u("esri.views.interactive.tooltip.content.TooltipContentReshapeEdgeOffset")],U);const Gt={base:`${r} ${`${r}--transform-absolute`}`};let A=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:Gt.base,helpMessage:this._getHelpMessage()},e.orientation&&t.orientation!=null&&i(l,{key:"orientation",title:n.orientation,value:rt(t.orientation,t.rotationType,t.orientationPrecision)}),e.size&&t.size!=null&&i(l,{key:"size",title:n.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}};A=a([u("esri.views.interactive.tooltip.content.TooltipContentTransformAbsolute")],A);const qt={base:`${r} ${`${r}--transform-rotate`}`};let Z=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:qt.base,helpMessage:this._getHelpMessage()},e.rotation&&t.rotation!=null&&i(l,{key:"rotation",title:n.rotation,value:zt(t.rotation,t.rotationType,t.rotationPrecision)}),e.orientation&&t.orientation!=null&&i(l,{key:"orientation",title:n.orientation,value:rt(t.orientation,t.rotationType,t.orientationPrecision)}))}};Z=a([u("esri.views.interactive.tooltip.content.TooltipContentTransformRotate")],Z);const Bt={base:`${r} ${`${r}--transform-scale`}`};let F=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:Bt.base,helpMessage:this._getHelpMessage()},e.scale&&t.scale!=null&&i(l,{key:"scale",title:n.scale,value:this._formatPercentage(t.scale)}),e.size&&t.size!=null&&i(l,{key:"size",title:n.size,value:this._formatLength(t.size,t.sizeUnit,t.sizePrecision)}))}};F=a([u("esri.views.interactive.tooltip.content.TooltipContentTransformScale")],F);const Xt={base:`${r} ${`${r}--translate-graphic`}`};let G=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:Xt.base,helpMessage:this._getHelpMessage()},e.distance&&i(l,{title:n.distance,value:this._formatLength(t.distance)}))}};G=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphic")],G);const Yt={base:`${r} ${`${r}--translate-graphic-xy`}`};let q=class extends h{render(){const{info:t}=this,{visibleElements:e}=t.tooltipOptions,n=this._messagesTooltip.sketch;return i(g,{className:Yt.base,helpMessage:this._getHelpMessage()},e.distance&&i(l,{title:n.distance,value:this._formatRelativeLength(t.distance)}))}};q=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicXY")],q);const jt={base:`${r} ${`${r}--translate-graphic-z`}`};let B=class extends h{render(){const{info:s}=this,{visibleElements:t}=s.tooltipOptions,e=this._messagesTooltip.sketch;return i(g,{className:jt.base,helpMessage:this._getHelpMessage()},t.distance&&i(l,{title:e.distance,value:this._formatRelativeVerticalLength(s.distance)}))}};B=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateGraphicZ")],B);const It={base:`${r} ${`${r}--translate-vertex`}`};let X=class extends h{render(){const{distance:t,elevation:e,area:n,totalLength:o,tooltipOptions:c}=this.info,{visibleElements:p}=c,m=this._messagesTooltip.sketch;return i(g,{className:It.base,helpMessage:this._getHelpMessage()},p.distance&&i(l,{title:m.distance,value:this._formatLength(t)}),p.elevation&&e!=null&&i(l,{title:m.elevation,value:this._formatVerticalLength(e)}),p.area&&n!=null&&i(l,{title:m.area,value:this._formatArea(n)}),p.totalLength&&o!=null&&i(l,{title:m.totalLength,value:this._formatLength(o)}))}};X=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateVertex")],X);const Jt={base:`${r} ${`${r}--translate-vertex`}`};let Y=class extends h{render(){const{area:t,distance:e,elevation:n,totalLength:o,tooltipOptions:c}=this.info,{visibleElements:p}=c,m=this._messagesTooltip.sketch;return i(g,{className:Jt.base,helpMessage:this._getHelpMessage()},p.distance&&i(l,{title:m.distance,value:this._formatRelativeLength(e)}),p.elevation&&n!=null&&i(l,{title:m.elevation,value:this._formatVerticalLength(n)}),p.area&&t!=null&&i(l,{title:m.area,value:this._formatArea(t)}),p.totalLength&&o!=null&&i(l,{title:m.totalLength,value:this._formatLength(o)}))}};Y=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexXY")],Y);const Kt={base:`${r} ${`${r}--translate-vertex`}`};let j=class extends h{render(){const{distance:t,elevation:e,tooltipOptions:n}=this.info,{visibleElements:o}=n,c=this._messagesTooltip.sketch;return i(g,{className:Kt.base,helpMessage:this._getHelpMessage()},o.distance&&i(l,{title:c.distance,value:this._formatRelativeVerticalLength(t)}),o.elevation&&e!=null&&i(l,{title:c.elevation,value:this._formatVerticalLength(e)}))}};j=a([u("esri.views.interactive.tooltip.content.TooltipContentTranslateVertexZ")],j);function Qt(s,t){if(t==null)return null;const e=document.createElement("div");switch(t.type){case"draw-point":return new H({tooltip:s,info:t,container:e});case"draw-polygon":return new V({tooltip:s,info:t,container:e});case"draw-polyline":return new P({tooltip:s,info:t,container:e});case"draw-mesh":return new R({tooltip:s,info:t,container:e});case"draw-rectangle":return new S({tooltip:s,info:t,container:e});case"draw-circle":return new N({tooltip:s,info:t,container:e});case"extent-rotate":return new W({tooltip:s,info:t,container:e});case"extent-scale":return new D({tooltip:s,info:t,container:e});case"transform-absolute":return new A({tooltip:s,info:t,container:e});case"transform-rotate":return new Z({tooltip:s,info:t,container:e});case"transform-scale":return new F({tooltip:s,info:t,container:e});case"translate-graphic":return new G({tooltip:s,info:t,container:e});case"translate-graphic-z":return new B({tooltip:s,info:t,container:e});case"translate-graphic-xy":return new q({tooltip:s,info:t,container:e});case"translate-vertex":return new X({tooltip:s,info:t,container:e});case"translate-vertex-z":return new j({tooltip:s,info:t,container:e});case"translate-vertex-xy":return new Y({tooltip:s,info:t,container:e});case"reshape-edge-offset":return new U({tooltip:s,info:t,container:e})}}const te={base:`${_}`};let f=class extends lt{constructor(t){super(t),this.info=null,this._contentContainer=(()=>{const e=document.createElement("div");return e.classList.add(te.base),e})(),this._contentWidget=null}initialize(){const t=this._contentContainer;this.addHandles([z(()=>this.view.overlay?.surface,e=>{t.remove(),e?.appendChild(t)},k),z(()=>this.info,(e,n)=>{if(this._contentWidget!=null&&e!=null&&n!=null&&e.type===n.type)this._contentWidget.info=e;else{this._contentWidget=et(this._contentWidget);const o=Qt(this,e);o&&(this._contentWidget=o,o.container&&t.appendChild(o.container))}},k),z(()=>({container:this._contentContainer,contentWidget:this._contentWidget,screenPoint:this._screenPoint}),ee,k)])}destroy(){this._contentWidget=et(this._contentWidget),this._contentContainer.remove()}clear(){this.info=null}get _screenPoint(){const t=this.view.inputManager;return t?.multiTouchActive?null:t?.latestPointerLocation}get test(){return{contentContainer:this._contentContainer,visible:this._contentContainer?.style.display!=="none"}}};function ee({container:s,contentWidget:t,screenPoint:e}){const{style:n}=s;if(e!=null&&t!=null){n.display="block";const o=ft(s),c=`translate(${Math.round(e.x)+it[0]*(o?-1:1)}px, ${Math.round(e.y)+it[1]}px)`;n.transform=o?`translate(-100%, 0) ${c}`:c}else n.display="none"}a([v({nonNullable:!0})],f.prototype,"view",void 0),a([v()],f.prototype,"info",void 0),a([v()],f.prototype,"_contentContainer",void 0),a([v()],f.prototype,"_contentWidget",void 0),a([v()],f.prototype,"_screenPoint",null),f=a([u("esri.views.interactive.tooltip.Tooltip")],f);const it=[20,20];function ut(s,t,e,n,...o){return $t(s)&&Ct(s)?t.apply(void 0,o):_t(s)?e.apply(void 0,o):n.apply(void 0,o)}function gt(s){const{spatialReference:t}=s;return ut(t,oe,ae,le,s)}function vt(s,t){if(!bt(s.spatialReference,t.spatialReference))return null;const{spatialReference:e}=s;return w[0]=s.x,w[1]=s.y,w[2]=s.hasZ?s.z:0,T[0]=t.x,T[1]=t.y,T[2]=t.hasZ?t.z:0,K(w,T,e)}function K(s,t,e){return ut(e,se,ne,ie,s,t,e)}function se(s,t,e){return $(J(Q,s,t,e).distance,"meters")}function ne(s,t,e){return $(ht(re(s,t,e),"meters"),"meters")}function ie(s,t,e){return st(s,e,ot)&&st(t,e,at)?$(J(Q,ot,at).distance,"meters"):null}function oe(s){return $(Et([s],"meters")[0],"meters")}function ae(s){return $(ht(s,"meters"),"meters")}function le(s){const t=[];if(!yt(s,t))return null;let e=0;for(const n of t){let o=0;for(let c=1;c<n.length;++c)o+=J(Q,n[c-1],n[c]).distance;e+=o}return $(e,"meters")}function re(s,t,e){return{type:"polyline",spatialReference:e,paths:[[[...s],[...t]]]}}const Q=new Ot,w=M(),T=M(),ot=M(),at=M();function Ve(s,t){return b(pt,gt,ct,t,s)}function Pe(s,t,e,n){return b(kt,K,O,n,s,t,e)}function Se(s,t,e){return b(L,vt,L,e,s,t)}function We(s,t,e,n){return b(O,K,O,n,s,t,e)}function De(s){return b(pt,gt,ct,"on-the-ground",s)}function Ue(s,t){return b(L,vt,L,"on-the-ground",s,t)}function b(s,t,e,n,...o){if(n==="on-the-ground"){const c=t.apply(void 0,o);return c??e.apply(void 0,o)}return s.apply(void 0,o)}export{We as a,K as b,f as d,De as g,Pe as l,Ue as m,Ve as p,ut as r,Se as s,y as t};