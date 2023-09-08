import{nc as z,hf as p,nd as j,ne as y,nf as f,ng as S,bQ as u,kp as H,cv as $,nh as D,gN as L,hj as N,ni as Z,nj as E,ej as b,kM as M,nk as R,nl as Y,nm as v,lW as h,iN as P,nn as G,kh as U,no as x,k6 as O,cP as A}from"./index-cdda5707.js";import{U as W}from"./dragEventPipeline-4a965366.js";function X(n,t){return C(n,()=>t)}function sn(n){return C(n,t=>t.plane)}function C(n,t){const e=u(),r=u();let a=!1;return l=>{const c=t(l);if(l.action==="start"){const i=p(l.screenStart,j(y.get())),s=f(n.state.camera,i,w);s!=null&&(a=S(c,s,e))}if(!a)return null;const o=p(l.screenEnd,j(y.get())),d=f(n.state.camera,o,w);return d==null?null:S(c,d,r)?{...l,renderStart:e,renderEnd:r,plane:c,ray:d}:null}}function k(n,t,e=0,r=null,a=null){let l=null;return c=>{if(c.action==="start"&&(l=n.sceneIntersectionHelper.intersectElevationFromScreen(N(c.screenStart.x,c.screenStart.y),t,e,a),l!=null&&r!=null&&!Z(l,l,r))||l==null)return null;const o=n.sceneIntersectionHelper.intersectElevationFromScreen(N(c.screenEnd.x,c.screenEnd.y),t,e,a);return o!=null&&(r==null||Z(o,o,r))?{...c,mapStart:l,mapEnd:o}:null}}function Q(n,t,e,r=null,a=null){return k(n,e,H(t,n,e),r,a)}function J(n,t,e,r=null,a=null){return Q(n,e,$(t),r,a)}function un(n,t,e,r){const a=t.toMap(n.screenStart,{include:[e]});return a!=null?J(t,e,a,r):null}function B(n,t){const e=q,r=_,a=E();n.renderCoordsHelper.worldUpAtPosition(t,e);const l=b(a,e,M(r,t,n.state.camera.eye));return b(l,l,e),R(t,l,a)}function dn(n,t,e){let r=null;const a=new W;return a.next(X(n,B(n,t))).next(F(n,t)).next(V(n,e)).next(l=>{l.mapEnd.x=l.mapStart.x,l.mapEnd.y=l.mapStart.y,r=l}),l=>(r=null,a.execute(l),r)}function F(n,t){const e=u(),r=D(t);n.renderCoordsHelper.worldUpAtPosition(t,e);const a=u(),l=u(),c=o=>(M(o,o,t),Y(e,o,o),n.viewingMode==="global"&&D(o)*Math.sign(v(e,o))<.001-r&&M(o,h(o,e,.001),t),P(o,o,t),o);return o=>(o.renderStart=c(L(a,o.renderStart)),o.renderEnd=c(L(l,o.renderEnd)),o)}function V(n,t){const e=n.renderCoordsHelper;return r=>{const a=e.fromRenderCoords(r.renderStart,t),l=e.fromRenderCoords(r.renderEnd,t);return a!=null&&l!=null?{...r,mapStart:a,mapEnd:l}:null}}var I;function mn(n){let t=null;return e=>{switch(e.action){case"start":t=n.disableDisplay();break;case"end":case"cancel":t!=null&&(t.remove(),t=null)}return e}}function In(n,t=null){const e=G(n.state.viewingMode);e.options.selectionMode=!0,e.options.store=U.MIN,e.options.hud=!1;const r=N(),a={requiresGroundFeedback:!0,enableDraped:!0,exclude:new Set},l=u(),c=t??n.spatialReference,o=i=>{n.map.ground&&n.map.ground.opacity<1?a.exclude.add(x):a.exclude.delete(x),n.sceneIntersectionHelper.intersectIntersectorScreen(p(i,r),e,a);const s=e.results.min;let m;if(s.getIntersectionPoint(l))m=s.intersector===O.TERRAIN?I.GROUND:I.OTHER;else{if(!e.results.ground.getIntersectionPoint(l))return null;m=I.GROUND}return{location:n.renderCoordsHelper.fromRenderCoords(l,c),surfaceType:m}};let d;return i=>{if(i.action==="start"){const m=o(i.screenStart);d=m!=null?m.location:null}if(d==null)return null;const s=o(i.screenEnd);return s!=null&&s.location!=null?{...i,mapStart:d,mapEnd:s.location,surfaceType:s.surfaceType}:null}}(function(n){n[n.GROUND=0]="GROUND",n[n.OTHER=1]="OTHER"})(I||(I={}));const q=u(),_=u(),w=z(),K="theme-style";function T(n,t){return rn(en(nn(tn(n),t)),t.size)}function nn(n,{accentColor:t,contrastColor:e}){const r=t.toHex(),a=t.a,l=e.toHex(),c=e.a,o=n.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(K);return o&&(o.innerHTML=`
      .contrast-fill { fill: ${l}; fill-opacity: ${c}; }
      .contrast-stroke { stroke: ${l}; stroke-opacity: ${c};  }
      .accent-fill { fill: ${r}; fill-opacity: ${a}; }
      .accent-stroke { stroke: ${r}; stroke-opacity:  ${a}; }`),n}function tn(n){const t=n.split(",")[1],e=atob(t);return new DOMParser().parseFromString(e,"image/svg+xml")}function en(n){const t=new XMLSerializer().serializeToString(n);return`data:image/svg+xml;base64,${btoa(t)}`}function rn(n,t){const e=new Image(t,t);return e.src=n,e}const ln="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NnoiIGNsYXNzPSJhY2NlbnQtZmlsbCIvPjxwYXRoIHN0cm9rZS13aWR0aD0iNC45OSIgZD0iTTIwLjA1IDQwLjg2YTE1LjA1IDE1LjA1IDAgMCAwIDE3LjE0LTEuNSAxNS4wNSAxNS4wNSAwIDAgMCA0LjQ3LTE2LjY1IDE1LjA1IDE1LjA1IDAgMCAwLTIyLjcyLTcuMTUgMTUuMDUgMTUuMDUgMCAwIDAtNS41IDcuMTUiIGNsYXNzPSJjb250cmFzdC1zdHJva2UiLz48cGF0aCBkPSJtMTAuOTcgMzUuNTcgNS4zOCAxMi4wNyA3Ljc5LTEzLjQ3LTEzLjE3IDEuNHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+",an="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTgyIDExLjk4MiAwIDAgMC05LjggNy41MDciIGNsYXNzPSJjb250cmFzdC1zdHJva2UgY29udHJhc3QtZmlsbCIvPjxwYXRoIGQ9Im0yOS44MTggMjIuODA4LTYuMTg0IDQuNi0uNTQxLTguMzY0eiIgY2xhc3M9ImNvbnRyYXN0LWZpbGwiLz48L3N2Zz4=",g=64;function gn(n,t){const{accentColor:e,contrastColor:r,preMultiplyAlpha:a}=t;return n.fromData(`heading-rotate:[accent:${e},contrast:${r},size:${g}]`,()=>new A(T(ln,{accentColor:e,contrastColor:r,size:g}),{mipmap:!0,preMultiplyAlpha:a}))}function pn(n,t){const{accentColor:e,contrastColor:r,preMultiplyAlpha:a}=t;return n.fromData(`tilt-rotate:[accent:${e},contrast:${r},size:${g}]`,()=>new A(T(an,{accentColor:e,contrastColor:r,size:g}),{mipmap:!0,preMultiplyAlpha:a}))}export{mn as A,J as D,In as F,X as H,un as M,dn as P,Q as T,sn as U,V as k,pn as l,gn as n};
