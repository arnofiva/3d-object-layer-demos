import{l as j}from"./getDefaultUnitForView-399249e8.js";import{cb as v,bQ as a,cc as d,cd as C,ce as R,cf as b,cg as y,ch as A,ci as Z,cj as q,ck as w,cl as x}from"./index-cdda5707.js";import{i as E}from"./measurementUtils-6d7e5fc6.js";function z(t,e=$()){return m(t,e)}function B(t,e=$()){return m(t,e,!1)}function m(t,e,s=t.hasZ){const c=E(t.spatialReference),i=v(c);if(i==null)return null;const k=(l,r)=>!(r.length<2)&&(d(l,r[0],r[1],s&&r[2]||0),!0);let h=0;for(const l of t.rings){const r=l.length;if(r<3)continue;const{positionsWorldCoords:o}=e;for(;o.length<r;)o.push(a());const g=F,f=d(H,0,0,0),W=1/r;for(let n=0;n<r;n++){if(!k(g,l[n])||!C(g,t.spatialReference,o[n],c))return null;R(f,f,o[n],W)}const p=b(o[0],o[1],f,y());if(A(Z(p))===0)continue;for(let n=0;n<r;n++)q(p,f,o[n],o[n]);const u=J(o);for(let n=0;n<u.length;n+=3)h+=w(o[u[n]],o[u[n+1]],o[u[n+2]])}return j(h,i)}const F=a(),H=a();function $(){return{positionsWorldCoords:[]}}function J(t){return x(Q(t),[],2)}function Q(t){const e=new Float64Array(2*t.length);for(let s=0;s<t.length;++s){const c=t[s],i=2*s;e[i]=c[0],e[i+1]=c[1]}return e}export{J as U,z as g,B as h,$ as k};
