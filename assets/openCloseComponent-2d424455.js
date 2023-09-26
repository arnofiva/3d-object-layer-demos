import{az as Nt,ak as Bt}from"./main-79e5ed80.js";import{d as Vt}from"./debounce-c198f28b.js";function D(t){return t.split("-")[1]}function st(t){return t==="y"?"height":"width"}function M(t){return t.split("-")[0]}function Y(t){return["top","bottom"].includes(M(t))?"x":"y"}function lt(t,e,n){let{reference:o,floating:i}=t;const s=o.x+o.width/2-i.width/2,r=o.y+o.height/2-i.height/2,c=Y(e),l=st(c),a=o[l]/2-i[l]/2,g=M(e),f=c==="x";let d;switch(g){case"top":d={x:s,y:o.y-i.height};break;case"bottom":d={x:s,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:r};break;case"left":d={x:o.x-i.width,y:r};break;default:d={x:o.x,y:o.y}}switch(D(e)){case"start":d[c]-=a*(n&&f?-1:1);break;case"end":d[c]+=a*(n&&f?-1:1);break}return d}const Wt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:g,y:f}=lt(a,o,l),d=o,u={},m=0;for(let h=0;h<c.length;h++){const{name:w,fn:p}=c[h],{x,y:b,data:O,reset:y}=await p({x:g,y:f,initialPlacement:o,placement:d,strategy:i,middlewareData:u,rects:a,platform:r,elements:{reference:t,floating:e}});if(g=x??g,f=b??f,u={...u,[w]:{...u[w],...O}},y&&m<=50){m++,typeof y=="object"&&(y.placement&&(d=y.placement),y.rects&&(a=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:g,y:f}=lt(a,d,l)),h=-1;continue}}return{x:g,y:f,placement:d,strategy:i,middlewareData:u}};function _t(t){return{top:0,right:0,bottom:0,left:0,...t}}function At(t){return typeof t!="number"?_t(t):{top:t,right:t,bottom:t,left:t}}function K(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function X(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:g="viewport",elementContext:f="floating",altBoundary:d=!1,padding:u=0}=e,m=At(u),w=c[d?f==="floating"?"reference":"floating":f],p=K(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(w)))==null||n?w:w.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:g,strategy:l})),x=f==="floating"?{...r.floating,x:o,y:i}:r.reference,b=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),O=await(s.isElement==null?void 0:s.isElement(b))?await(s.getScale==null?void 0:s.getScale(b))||{x:1,y:1}:{x:1,y:1},y=K(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:x,offsetParent:b,strategy:l}):x);return{top:(p.top-y.top+m.top)/O.y,bottom:(y.bottom-p.bottom+m.bottom)/O.y,left:(p.left-y.left+m.left)/O.x,right:(y.right-p.right+m.right)/O.x}}const Ht=Math.min,$t=Math.max;function nt(t,e,n){return $t(t,Ht(e,n))}const It=t=>({name:"arrow",options:t,async fn(e){const{element:n,padding:o=0}=t||{},{x:i,y:s,placement:r,rects:c,platform:l,elements:a}=e;if(n==null)return{};const g=At(o),f={x:i,y:s},d=Y(r),u=st(d),m=await l.getDimensions(n),h=d==="y",w=h?"top":"left",p=h?"bottom":"right",x=h?"clientHeight":"clientWidth",b=c.reference[u]+c.reference[d]-f[d]-c.floating[u],O=f[d]-c.reference[d],y=await(l.getOffsetParent==null?void 0:l.getOffsetParent(n));let A=y?y[x]:0;(!A||!await(l.isElement==null?void 0:l.isElement(y)))&&(A=a.floating[x]||c.floating[u]);const C=b/2-O/2,E=g[w],N=A-m[u]-g[p],P=A/2-m[u]/2+C,v=nt(E,P,N),k=D(r)!=null&&P!=v&&c.reference[u]/2-(P<E?g[w]:g[p])-m[u]/2<0?P<E?E-P:N-P:0;return{[d]:f[d]-k,data:{[d]:v,centerOffset:P-v}}}}),Ot=["top","right","bottom","left"],at=Ot.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),Ut={left:"right",right:"left",bottom:"top",top:"bottom"};function J(t){return t.replace(/left|right|bottom|top/g,e=>Ut[e])}function Ct(t,e,n){n===void 0&&(n=!1);const o=D(t),i=Y(t),s=st(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=J(r)),{main:r,cross:J(r)}}const jt={start:"end",end:"start"};function Q(t){return t.replace(/start|end/g,e=>jt[e])}function zt(t,e,n){return(t?[...n.filter(i=>D(i)===t),...n.filter(i=>D(i)!==t)]:n.filter(i=>M(i)===i)).filter(i=>t?D(i)===t||(e?Q(i)!==i:!1):!0)}const Xt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:g=!1,alignment:f,allowedPlacements:d=at,autoAlignment:u=!0,...m}=t,h=f!==void 0||d===at?zt(f||null,u,d):d,w=await X(e,m),p=((n=r.autoPlacement)==null?void 0:n.index)||0,x=h[p];if(x==null)return{};const{main:b,cross:O}=Ct(x,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==x)return{reset:{placement:h[0]}};const y=[w[M(x)],w[b],w[O]],A=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:y}],C=h[p+1];if(C)return{data:{index:p+1,overflows:A},reset:{placement:C}};const E=A.map(v=>{const T=D(v.placement);return[v.placement,T&&g?v.overflows.slice(0,2).reduce((k,B)=>k+B,0):v.overflows[0],v.overflows]}).sort((v,T)=>v[1]-T[1]),P=((i=E.filter(v=>v[2].slice(0,D(v[0])?2:3).every(T=>T<=0))[0])==null?void 0:i[0])||E[0][0];return P!==c?{data:{index:p+1,overflows:A},reset:{placement:P}}:{}}}};function Yt(t){const e=J(t);return[Q(t),e,Q(e)]}function Gt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function qt(t,e,n,o){const i=D(t);let s=Gt(M(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(Q)))),s}const ft=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n;const{placement:o,middlewareData:i,rects:s,initialPlacement:r,platform:c,elements:l}=e,{mainAxis:a=!0,crossAxis:g=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:u="none",flipAlignment:m=!0,...h}=t,w=M(o),p=M(r)===r,x=await(c.isRTL==null?void 0:c.isRTL(l.floating)),b=f||(p||!m?[J(r)]:Yt(r));!f&&u!=="none"&&b.push(...qt(r,m,u,x));const O=[r,...b],y=await X(e,h),A=[];let C=((n=i.flip)==null?void 0:n.overflows)||[];if(a&&A.push(y[w]),g){const{main:v,cross:T}=Ct(o,s,x);A.push(y[v],y[T])}if(C=[...C,{placement:o,overflows:A}],!A.every(v=>v<=0)){var E,N;const v=(((E=i.flip)==null?void 0:E.index)||0)+1,T=O[v];if(T)return{data:{index:v,overflows:C},reset:{placement:T}};let k=(N=C.filter(B=>B.overflows[0]<=0).sort((B,H)=>B.overflows[1]-H.overflows[1])[0])==null?void 0:N.placement;if(!k)switch(d){case"bestFit":{var P;const B=(P=C.map(H=>[H.placement,H.overflows.filter(U=>U>0).reduce((U,Mt)=>U+Mt,0)]).sort((H,U)=>H[1]-U[1])[0])==null?void 0:P[0];B&&(k=B);break}case"initialPlacement":k=r;break}if(o!==k)return{reset:{placement:k}}}return{}}}};function ut(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function dt(t){return Ot.some(e=>t[e]>=0)}const Kt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:n="referenceHidden",...o}=t,{rects:i}=e;switch(n){case"referenceHidden":{const s=await X(e,{...o,elementContext:"reference"}),r=ut(s,i.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:dt(r)}}}case"escaped":{const s=await X(e,{...o,altBoundary:!0}),r=ut(s,i.floating);return{data:{escapedOffsets:r,escaped:dt(r)}}}default:return{}}}}};async function Jt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=M(n),c=D(n),l=Y(n)==="x",a=["left","top"].includes(r)?-1:1,g=s&&l?-1:1,f=typeof e=="function"?e(t):e;let{mainAxis:d,crossAxis:u,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return c&&typeof m=="number"&&(u=c==="end"?m*-1:m),l?{x:u*g,y:d*a}:{x:d*a,y:u*g}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Jt(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function Zt(t){return t==="x"?"y":"x"}const te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=t,a={x:n,y:o},g=await X(e,l),f=Y(M(i)),d=Zt(f);let u=a[f],m=a[d];if(s){const w=f==="y"?"top":"left",p=f==="y"?"bottom":"right",x=u+g[w],b=u-g[p];u=nt(x,u,b)}if(r){const w=d==="y"?"top":"left",p=d==="y"?"bottom":"right",x=m+g[w],b=m-g[p];m=nt(x,m,b)}const h=c.fn({...e,[f]:u,[d]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function S(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){return S(t).getComputedStyle(t)}function Pt(t){return t instanceof S(t).Node}function V(t){return Pt(t)?(t.nodeName||"").toLowerCase():""}function F(t){return t instanceof S(t).HTMLElement}function R(t){return t instanceof S(t).Element}function mt(t){if(typeof ShadowRoot>"u")return!1;const e=S(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function G(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ee(t){return["table","td","th"].includes(V(t))}function rt(t){const e=ct(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ct(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function tt(t){return["html","body","#document"].includes(V(t))}const gt=Math.min,j=Math.max,Z=Math.round;function Rt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=F(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=Z(n)!==s||Z(o)!==r;return c&&(n=s,o=r),{width:n,height:o,fallback:c}}function Et(t){return R(t)?t:t.contextElement}const St={x:1,y:1};function $(t){const e=Et(t);if(!F(e))return St;const n=e.getBoundingClientRect(),{width:o,height:i,fallback:s}=Rt(e);let r=(s?Z(n.width):n.width)/o,c=(s?Z(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ht={x:0,y:0};function Tt(t,e,n){var o,i;if(e===void 0&&(e=!0),!ct())return ht;const s=t?S(t):window;return!n||e&&n!==s?ht:{x:((o=s.visualViewport)==null?void 0:o.offsetLeft)||0,y:((i=s.visualViewport)==null?void 0:i.offsetTop)||0}}function _(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=Et(t);let r=St;e&&(o?R(o)&&(r=$(o)):r=$(t));const c=Tt(s,n,o);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,g=i.width/r.x,f=i.height/r.y;if(s){const d=S(s),u=o&&R(o)?S(o):o;let m=d.frameElement;for(;m&&o&&u!==d;){const h=$(m),w=m.getBoundingClientRect(),p=getComputedStyle(m);w.x+=(m.clientLeft+parseFloat(p.paddingLeft))*h.x,w.y+=(m.clientTop+parseFloat(p.paddingTop))*h.y,l*=h.x,a*=h.y,g*=h.x,f*=h.y,l+=w.x,a+=w.y,m=S(m).frameElement}}return K({width:g,height:f,x:l,y:a})}function W(t){return((Pt(t)?t.ownerDocument:t.document)||window.document).documentElement}function et(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ne(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=F(n),s=W(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},c={x:1,y:1};const l={x:0,y:0};if((i||!i&&o!=="fixed")&&((V(n)!=="body"||G(s))&&(r=et(n)),F(n))){const a=_(n);c=$(n),l.x=a.x+n.clientLeft,l.y=a.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function Lt(t){return _(W(t)).left+et(t).scrollLeft}function oe(t){const e=W(t),n=et(t),o=t.ownerDocument.body,i=j(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=j(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Lt(t);const c=-n.scrollTop;return L(o).direction==="rtl"&&(r+=j(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function I(t){if(V(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mt(t)&&t.host||W(t);return mt(e)?e.host:e}function Ft(t){const e=I(t);return tt(e)?e.ownerDocument.body:F(e)&&G(e)?e:Ft(e)}function z(t,e){var n;e===void 0&&(e=[]);const o=Ft(t),i=o===((n=t.ownerDocument)==null?void 0:n.body),s=S(o);return i?e.concat(s,s.visualViewport||[],G(o)?o:[]):e.concat(o,z(o))}function ie(t,e){const n=S(t),o=W(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=ct();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function se(t,e){const n=_(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=F(t)?$(t):{x:1,y:1},r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function pt(t,e,n){let o;if(e==="viewport")o=ie(t,n);else if(e==="document")o=oe(W(t));else if(R(e))o=se(e,n);else{const i=Tt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return K(o)}function Dt(t,e){const n=I(t);return n===e||!R(n)||tt(n)?!1:L(n).position==="fixed"||Dt(n,e)}function re(t,e){const n=e.get(t);if(n)return n;let o=z(t).filter(c=>R(c)&&V(c)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?I(t):t;for(;R(r)&&!tt(r);){const c=L(r),l=rt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(r)&&!l&&Dt(t,r))?o=o.filter(g=>g!==r):i=c,r=I(r)}return e.set(t,o),o}function ce(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?re(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,g)=>{const f=pt(e,g,i);return a.top=j(f.top,a.top),a.right=gt(f.right,a.right),a.bottom=gt(f.bottom,a.bottom),a.left=j(f.left,a.left),a},pt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function le(t){return Rt(t)}function wt(t,e){return!F(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function ae(t){let e=I(t);for(;F(e)&&!tt(e);){if(rt(e))return e;e=I(e)}return null}function xt(t,e){const n=S(t);if(!F(t))return n;let o=wt(t,e);for(;o&&ee(o)&&L(o).position==="static";)o=wt(o,e);return o&&(V(o)==="html"||V(o)==="body"&&L(o).position==="static"&&!rt(o))?n:o||ae(t)||n}function fe(t,e,n){const o=F(e),i=W(e),s=n==="fixed",r=_(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(o||!o&&!s)if((V(e)!=="body"||G(i))&&(c=et(e)),F(e)){const a=_(e,!0,s,e);l.x=a.x+e.clientLeft,l.y=a.y+e.clientTop}else i&&(l.x=Lt(i));return{x:r.left+c.scrollLeft-l.x,y:r.top+c.scrollTop-l.y,width:r.width,height:r.height}}const ot={getClippingRect:ce,convertOffsetParentRelativeRectToViewportRelativeRect:ne,isElement:R,getDimensions:le,getOffsetParent:xt,getDocumentElement:W,getScale:$,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||xt,s=this.getDimensions;return{reference:fe(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>L(t).direction==="rtl"};function ue(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:c=!1}=o,l=i||s?[...R(t)?z(t):t.contextElement?z(t.contextElement):[],...z(e)]:[];l.forEach(u=>{const m=!R(u)&&u.toString().includes("V");i&&(!c||m)&&u.addEventListener("scroll",n,{passive:!0}),s&&u.addEventListener("resize",n)});let a=null;r&&(a=new ResizeObserver(()=>{n()}),R(t)&&!c&&a.observe(t),!R(t)&&t.contextElement&&!c&&a.observe(t.contextElement),a.observe(e));let g,f=c?_(t):null;c&&d();function d(){const u=_(t);f&&(u.x!==f.x||u.y!==f.y||u.width!==f.width||u.height!==f.height)&&n(),f=u,g=requestAnimationFrame(d)}return n(),()=>{var u;l.forEach(m=>{i&&m.removeEventListener("scroll",n),s&&m.removeEventListener("resize",n)}),(u=a)==null||u.disconnect(),a=null,c&&cancelAnimationFrame(g)}}const de=(t,e,n)=>{const o=new Map,i={platform:ot,...n},s={...i.platform,_c:o};return Wt(t,e,{...i,platform:s})},me=globalThis.calciteComponentsConfig,ge={floatingUINonChromiumPositioningFix:!0,...me},he=pe();async function pe(){function t(){return navigator.userAgentData}function e(){const o=t();return o?.brands?o.brands.map(({brand:i,version:s})=>`${i}/${s}`).join(" "):navigator.userAgent}function n(){const o=t();return o?.brands?!!o.brands.find(({brand:i,version:s})=>(i==="Google Chrome"||i==="Chromium")&&Number(s)>=109):!!navigator.userAgent.split(" ").find(i=>{const[s,r]=i.split("/");return s==="Chrome"&&parseInt(r)>=109})}if(ge.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(e())||n())){const{offsetParent:o}=await Nt(()=>import("./composed-offset-position.esm-67e480f6.js"),[],import.meta.url),i=ot.getOffsetParent;ot.getOffsetParent=s=>i(s,o)}}const we="data-placement",yt=100,vt=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Se="bottom-start",Te={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function xe({placement:t,flipDisabled:e,flipPlacements:n,offsetDistance:o,offsetSkidding:i,arrowEl:s,type:r}){const c=[te(),Kt()];if(r==="menu")return[...c,ft({fallbackPlacements:n||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,Qt({mainAxis:typeof o=="number"?o:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Xt({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(ft(n?{fallbackPlacements:n}:{})),s&&l.push(It({element:s})),l}return[]}function Le(t,e){const n=t.filter(o=>vt.includes(o));return n.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${vt.map(o=>`"${o}"`).join(", ").trim()}`,{el:e}),n}function ye(t,e){const n=["left","right"];return Bt(t)==="rtl"&&n.reverse(),e.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}async function Fe(t,e,n=!1){if(t.open)return n?ve(t,e):kt(t,e)}const ve=Vt(kt,yt,{leading:!0,maxWait:yt}),be={top:"",left:"rotate(-90deg)",bottom:"rotate(180deg)",right:"rotate(90deg)"};async function kt(t,{referenceEl:e,floatingEl:n,overlayPositioning:o="absolute",placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:g}){if(!e||!n)return null;await he;const{x:f,y:d,placement:u,strategy:m,middlewareData:h}=await de(e,n,{strategy:o,placement:i==="auto"||i==="auto-start"||i==="auto-end"?void 0:ye(n,i),middleware:xe({placement:i,flipDisabled:s,flipPlacements:r,offsetDistance:c,offsetSkidding:l,arrowEl:a,type:g})});if(a&&h.arrow){const{x:O,y}=h.arrow,A=u.split("-")[0],C=O!=null?"left":"top",E=be[A],N={left:"",top:"",bottom:"",right:""};"floatingLayout"in t&&(t.floatingLayout=A==="left"||A==="right"?"horizontal":"vertical"),Object.assign(a.style,{...N,[C]:`${C=="left"?O:y}px`,[A]:"100%",transform:E})}const p=h.hide?.referenceHidden?"hidden":null,x=p?"none":null;n.setAttribute(we,u);const b=`translate(${Math.round(f)}px,${Math.round(d)}px)`;Object.assign(n.style,{visibility:p,pointerEvents:x,position:m,top:"0",left:"0",transform:b})}const it=new WeakMap;function De(t,e,n){if(!n||!e)return;Ae(t,e,n),Object.assign(n.style,{visibility:"hidden",pointerEvents:"none",position:t.overlayPositioning,top:"0",left:"0"});const o=ue;it.set(t,o(e,n,()=>t.reposition()))}function Ae(t,e,n){if(!n||!e)return;const o=it.get(t);o&&o(),it.delete(t)}const bt=4,ke=Math.ceil(Math.hypot(bt,bt));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const q=new WeakMap;function Oe(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function Ce(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function Me(t){if(Pe(t),t.transitionEl){const e=Oe.bind(t),n=Ce.bind(t);q.set(t,[t.transitionEl,e,n]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",n)}}function Pe(t){if(!q.has(t))return;const[e,n,o]=q.get(t);e.removeEventListener("transitionstart",n),e.removeEventListener("transitionend",o),q.delete(t)}export{Te as F,De as a,Ae as b,Me as c,ke as d,Pe as e,Le as f,Se as g,Fe as r};
