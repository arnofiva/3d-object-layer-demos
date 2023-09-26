import{aD as p,aE as u,aF as B,au as K,aT as N,ci as C,bI as f,lk as j,bM as I,ll as k,bu as E,bJ as Q,cr as Z,iE as L,bt as tt,bh as _,lm as X,bv as Y,br as G,ln as D,kl as w,eO as R,kp as et,lo as st,bT as z,d7 as S,bs as it,dl as ot,dm as rt,lp as at,lq as ht}from"./main-79e5ed80.js";import{t as nt}from"./LineVisualElement-edcd3279.js";import{p as lt}from"./viewUtils-ca2c33e3.js";import{t as P,x as ct}from"./TextOverlayItem-ebd9edd4.js";let d=class extends K{get startPosition(){return[this.startX,this.startY]}set startPosition(i){this._set("startX",i[0]),this._set("startY",i[1])}get endPosition(){return[this.endX,this.endY]}set endPosition(i){this._set("endX",i[0]),this._set("endY",i[1])}constructor(i){super(i),this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.width=1,this.color=[0,0,0,.5],this.visible=!0}get _strokeStyle(){const i=this.color;return`rgba(${i[0]}, ${i[1]}, ${i[2]}, ${i[3]})`}get _lineCap(){return"round"}render(){const{height:i,left:t,top:e,width:s,x1:a,x2:r,y1:m,y2:l}=this._calculateCoordinates(F),n=`stroke: ${this._strokeStyle}; stroke-width: ${this.width}; stroke-linecap: ${this._lineCap};`;return P("div",{classes:{"esri-line-overlay-item":!0},styles:{left:t+"px",top:e+"px",width:s+"px",height:i+"px",visibility:this.visible?"visible":"hidden"}},[P("svg",{width:s,height:i},[P("line",{x1:a,y1:m,x2:r,y2:l,style:n})])])}renderCanvas(i){if(!this.visible)return;i.strokeStyle=this._strokeStyle,i.lineWidth=this.width,i.lineCap=this._lineCap;const t=this._calculateCoordinates(F);i.beginPath(),i.moveTo(t.left+t.x1,t.top+t.y1),i.lineTo(t.left+t.x2,t.top+t.y2),i.stroke()}_calculateCoordinates(i){const t=Math.min(this.startX,this.endX),e=Math.max(this.startX,this.endX),s=Math.min(this.startY,this.endY),a=Math.max(this.startY,this.endY),r=this.width;return i.left=t-r,i.top=s-r,i.width=e-t+2*r,i.height=Math.max(20,a-s+2*r),i.x1=this.startX-t+r,i.y1=this.startY-s+r,i.x2=this.endX-t+r,i.y2=this.endY-s+r,i}};p([u()],d.prototype,"startX",void 0),p([u()],d.prototype,"startY",void 0),p([u()],d.prototype,"endX",void 0),p([u()],d.prototype,"endY",void 0),p([u()],d.prototype,"startPosition",null),p([u()],d.prototype,"endPosition",null),p([u()],d.prototype,"width",void 0),p([u()],d.prototype,"color",void 0),p([u()],d.prototype,"visible",void 0),p([u({readOnly:!0})],d.prototype,"_strokeStyle",null),d=p([B("esri.views.overlay.LineOverlayItem")],d);const F={left:0,top:0,width:0,height:0,x1:0,y1:0,x2:0,y2:0},dt=d;class yt extends nt{constructor(t){super(t.view),this._handles=new N,this._textItem=null,this._calloutItem=null,this._showCallout=!0,this._showText=!0,this._geometry=null,this._text="-",this._fontSize=14,this._backgroundColor=new C([0,0,0,.6]),this._calloutColor=new C([0,0,0,.5]),this._textColor=new C([255,255,255]),this._distance=25,this._anchor="right",this.updatePositionOnCameraMove=!0,this.applyProps(t)}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this.updateLabelPosition()}get textItem(){return this._textItem}get text(){return this._text}set text(t){this._text=t,this.attached&&(this._textItem.text=this._text)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize=t,this.attached&&(this._textItem.fontSize=this._fontSize)}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){this._backgroundColor=t,this.attached&&(this._textItem.backgroundColor=this._backgroundColor)}get calloutColor(){return this._calloutColor}set calloutColor(t){this._calloutColor=t,this.attached&&(this._calloutItem.color=this._calloutColor.toRgba())}get textColor(){return this._textColor}set textColor(t){this._textColor=t,this.attached&&(this._textItem.textColor=this._textColor)}get distance(){return this._distance}set distance(t){this._distance!==t&&(this._distance=t,this.updateLabelPosition())}get anchor(){return this._anchor}set anchor(t){this._anchor!==t&&(this._anchor=t,this.updateLabelPosition())}get _camera(){return this.view.state.cssCamera}overlaps(t){return!!this.attached&&this.textItem.visible&&t.textItem.visible&&!!this.view.overlay?.overlaps(this._textItem,t.textItem)}updateLabelPosition(){if(!this.attached)return;this._showText=!1,this._showCallout=!1;const{geometry:t,view:e,visible:s}=this;if(t!=null&&e._stage)switch(t.type){case"point":if(!this._computeLabelPositionFromPoint(t.point,b))break;if(t.callout){const a=this._camera,r=t.callout.distance;f(h,h,[0,t.callout.offset]),a.renderToScreen(h,b),j(o,0,1),I(o,o,r),f(o,o,h),a.renderToScreen(o,v),this._showCallout=this._updatePosition(b,v)}else this._textItem.position=[b[0],b[1]],this._textItem.anchor="center";this._showText=!0;break;case"corner":if(!this._computeLabelPositionFromCorner(t,this._distance,b,v))break;this._showCallout=this._updatePosition(b,v),this._showText=!0;break;case"segment":{if(!this._computeLabelPositionFromSegment(t,this._distance,this._anchor,b,v))break;this._showText=!0;const a=this._updatePosition(b,v);this._showCallout=t.callout!==!1&&a,this._showCallout||(this._textItem.anchor="center")}}this.updateVisibility(s)}_computeLabelPositionFromPoint(t,e){const s=this._camera;return s.projectToRenderScreen(t,h),!(h[2]<0||h[2]>1)&&(s.renderToScreen(h,e),!0)}_computeLabelPositionFromCorner(t,e,s,a){if(!t)return!1;const r=this._camera;return O(t.left,1,r,x),k(x,x),O(t.right,0,r,V),f(o,x,V),k(o,o),E(o,o),r.projectToRenderScreen(t.left.endRenderSpace,h),!(h[2]<0||h[2]>1)&&(r.renderToScreen(h,s),I(o,o,e),f(o,o,h),r.renderToScreen(o,a),!0)}_computeLabelPositionFromSegment(t,e,s,a,r){if(!t)return!1;const m=t.segment,l=this._camera;lt(m.startRenderSpace,m.endRenderSpace,l,x),j(o,-x[1],x[0]);let n=!1;switch(s){case"top":n=o[1]<0;break;case"bottom":n=o[1]>0;break;case"left":n=o[0]>0;break;case"right":n=o[0]<0}if(n&&k(o,o),Q(o)===0)switch(s){case"top":o[1]=1;break;case"bottom":o[1]=-1;break;case"left":o[0]=-1;break;case"right":o[0]=1}return m.eval(ut[t.sampleLocation],q),l.projectToRenderScreen(q,h),!(h[2]<0||h[2]>1)&&(l.renderToScreen(h,a),I(o,o,e),f(o,o,h),l.renderToScreen(o,r),!0)}_updatePosition(t,e){if(e){const s=e[0]-t[0],a=e[1]-t[1];return this._textItem.position=[e[0],e[1]],this._textItem.anchor=Math.abs(s)>Math.abs(a)?s>0?"left":"right":a>0?"top":"bottom",this._calloutItem.startPosition=[t[0],t[1]],this._calloutItem.endPosition=[e[0],e[1]],!0}return this._textItem.position=[t[0],t[1]],this._textItem.anchor="center",!1}createResources(){this._textItem=new ct({visible:!0,text:this._text,fontSize:this._fontSize,backgroundColor:this._backgroundColor,textColor:this._textColor}),this._calloutItem=new dt({color:this._calloutColor.toRgba(),visible:!0,width:2}),this.updateLabelPosition(),this.view.overlay?.items.addMany([this._textItem,this._calloutItem]),this.updatePositionOnCameraMove&&this._handles.add(Z(()=>this.view.state.camera,()=>this.updateLabelPosition()))}destroyResources(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]),this._handles.removeAll()}updateVisibility(t){this._textItem.visible=this._showText&&t,this._calloutItem.visible=this._showCallout&&t}}function O(i,t,e,s){i.eval(t,$,U),L(A,$,U),e.projectToRenderScreen($,H),e.projectToRenderScreen(A,J),tt(s,_t,pt),E(s,s)}function ft(i){switch(i){case"top":return"bottom";case"right":return"left";case"bottom":return"top";case"left":return"right"}}const $=_(),A=_(),U=_(),x=X(),V=X(),o=X(),q=_(),h=Y(),b=G(),v=G(),H=Y(),pt=H,J=Y(),_t=J,ut={start:0,center:.5,end:1};class W{constructor(t=_(),e=_()){this.startRenderSpace=t,this.endRenderSpace=e,this.type="euclidean"}eval(t,e,s){return D(e,this.startRenderSpace,this.endRenderSpace,t),s&&(w(s,this.endRenderSpace,this.startRenderSpace),R(s,s)),e}createRenderGeometry(t,e){const s=[],a=[],r=(l,n)=>{const c=T;w(c,l,t),s.push([c[0],c[1],c[2]]),a.push([n[0],n[1],n[2]])},m=e.worldUpAtPosition(this.eval(.5,y),et.get());return r(this.startRenderSpace,m),r(this.endRenderSpace,m),{points:s,normals:a}}static fromPositionAndVector(t,e,s=1){return st(y,e,s),L(y,t,y),new W(z(t),z(y))}}class gt{_projectIn(t,e){this._project?S(t,this.renderSpatialReference,e,this._pcpf):it(e,t)}constructor(t,e,s){this.startRenderSpace=t,this.endRenderSpace=e,this.renderSpatialReference=s,this.type="geodesic",this._start=_(),this._end=_(),this._pcpf=ot(s),this._project=rt(s,this._pcpf),this._projectIn(t,this._start),this._projectIn(e,this._end)}eval(t,e,s){if(this._project)if(s){const a=T;at(this._start,this._end,t,e,a),L(g,e,a),S(e,this._pcpf,e,this.renderSpatialReference),S(g,this._pcpf,g,this.renderSpatialReference),w(s,g,e),R(s,s)}else ht(this._start,this._end,t,e),S(e,this._pcpf,e,this.renderSpatialReference);else D(e,this._start,this._end,t),s&&(w(s,this._end,this._start),R(s,s));return e}createRenderGeometry(t,e){const s=[],a=[],r=(l,n)=>{const c=g;w(c,l,t),s.push([c[0],c[1],c[2]]),a.push([n[0],n[1],n[2]])};for(let l=0;l<128;++l){const n=l/127,c=y,M=T;this.eval(n,c),e.worldUpAtPosition(c,M),r(c,M)}return{points:s,normals:a}}}const y=_(),T=_(),g=_();export{ft as C,W as f,yt as g,gt as m};
