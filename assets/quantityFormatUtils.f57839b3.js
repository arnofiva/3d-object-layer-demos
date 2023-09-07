import{jU as J,fZ as K,jV as L,jW as Q,N as E,jO as tt,jX as g,bF as et,aM as at,aO as nt,aP as st,jY as it,jZ as rt,j_ as G,bS as F,j$ as ot,k0 as ct,k1 as ut,k2 as ht,k3 as lt}from"./vendor.fd144a9e.js";import{b as ft}from"./Segment.115ca660.js";const jt={readOnly:!0,get(){return J(this.view)}};var x;(function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"})(x||(x={}));function O(t){if(!t)return null;if(K(t)&&t.wkid){const e=L[t.wkid];if(e)return e}if(t.wkt){const e=Mt(t.wkt);if(e)return e}return null}function Mt(t){const e=Q.exec(t);if(!e||e.length!==2)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const n=parseFloat(a[1]),s=parseFloat(a[2]);return isNaN(n)||isNaN(s)?null:{a:n,f:s===0?0:1/s}}function pt(t){const e=O(t||et.WGS84);if(dt(e))return e;const a=e.a*(1-e.f);return Object.assign(e,{b:a,eSq:1-(a/e.a)**2,radius:(2*e.a+a)/3,densificationRatio:1e4/((2*e.a+a)/3)})}function dt(t){return"b"in t&&"eSq"in t&&"radius"in t}function mt(t){return O(t)!==null}function zt(t,e="meters"){if(!t)throw new E("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(n=>!mt(n.spatialReference)))throw new E("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const a=[];for(let n=0;n<t.length;n++){const s=t[n],{spatialReference:m}=s,v=s.type==="polyline"?s.paths:s.rings;let r=0;for(let b=0;b<v.length;b++){const o=v[b];let f=0;for(let M=1;M<o.length;M++){const _=o[M-1][0],j=o[M][0],z=o[M-1][1],u=o[M][1];if(z!==u||_!==j){const c={distance:null};gt(c,[_,z],[j,u],m),f+=c.distance}}r+=f}r=tt(r,"meters",e),a.push(r)}return a}function gt(t,e,a,n){const s=e[0]*g,m=e[1]*g,v=a[0]*g,r=a[1]*g,{a:b,b:o,f,radius:M}=pt(n),_=v-s,j=Math.atan((1-f)*Math.tan(m)),z=Math.atan((1-f)*Math.tan(r)),u=Math.sin(j),c=Math.cos(j),$=Math.sin(z),h=Math.cos(z);let q,R,p,i,w,y,N,k,P,U,S=1e3,l=_;do{if(N=Math.sin(l),k=Math.cos(l),p=Math.sqrt(h*N*(h*N)+(c*$-u*h*k)*(c*$-u*h*k)),p===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;w=u*$+c*h*k,y=Math.atan2(p,w),P=c*h*N/p,R=1-P*P,i=w-2*u*$/R,isNaN(i)&&(i=0),U=f/16*R*(4+f*(4-3*R)),q=l,l=_+(1-U)*f*P*(y+U*p*(i+U*w*(2*i*i-1)))}while(Math.abs(l-q)>1e-12&&--S>0);if(S===0){const V=M,X=Math.acos(Math.sin(m)*Math.sin(r)+Math.cos(m)*Math.cos(r)*Math.cos(v-s))*V,D=v-s,Y=Math.sin(D)*Math.cos(r),B=Math.cos(m)*Math.sin(r)-Math.sin(m)*Math.cos(r)*Math.cos(D),H=Math.atan2(Y,B);return t.azimuth=H/g,t.distance=X,t.reverseAzimuth=void 0,t}const d=R*(b*b-o*o)/(o*o),A=d/1024*(256+d*(d*(74-47*d)-128)),Z=o*(1+d/16384*(4096+d*(d*(320-175*d)-768)))*(y-A*p*(i+A/4*(w*(2*i*i-1)-A/6*i*(4*p*p-3)*(4*i*i-3)))),C=Math.atan2(h*Math.sin(l),c*$-u*h*Math.cos(l)),I=Math.atan2(c*Math.sin(l),c*$*Math.cos(l)-u*h);return t.azimuth=C/g,t.distance=Z,t.reverseAzimuth=I/g,t}function Rt(t,e){if(at(e,0,0,0),t.length>0){for(let a=0;a<t.length;++a)nt(e,e,t[a]);st(e,e,1/t.length)}}function wt(t,e,a,n){n.projectToRenderScreen(t,T),n.projectToRenderScreen(e,W),it(a,bt,vt),rt(a,a)}const T=G(),vt=T,W=G(),bt=W;class Nt{constructor(e=null){this.spatialReference=e}get spatialReference(){return this._spatialReference}set spatialReference(e){e!==this._spatialReference&&(this._spatialReference=e,this._updateNormalizationFactors())}normalizeDistance(e){return e*this._metersPerDistanceUnit}normalizeElevation(e){return e*this._metersPerElevationUnit}normalizeArea(e){return e*this._squareMetersPerAreaUnit}_updateNormalizationFactors(){this._metersPerDistanceUnit=F(this._spatialReference,1),this._metersPerElevationUnit=F(this._spatialReference,1),this._squareMetersPerAreaUnit=this._metersPerDistanceUnit*this._metersPerDistanceUnit}}function kt(t,e,a,n=2,s="abbr"){return ot(t,ft(e,a).value,a,n,s)}function Pt(t,e,a=2,n="abbr"){return ht(t,e.value,e.unit,a,n)}function Ut(t,e,a=2,n="abbr"){return lt(t,e.value,e.unit,a,n)}function yt(t,e,a=2,n="abbr"){return ct(t,e.value,e.unit,a,n)}function At(t,e,a=2,n="abbr"){return ut(t,e.value,e.unit,a,n)}export{mt as M,yt as a,Pt as b,Rt as c,x as e,kt as g,wt as i,At as j,jt as r,Nt as t,Ut as w,zt as y,gt as z};