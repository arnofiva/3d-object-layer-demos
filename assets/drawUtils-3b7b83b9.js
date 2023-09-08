import{c5 as j,c6 as A,c7 as B,c8 as H}from"./index-cdda5707.js";function b(n,a,e,o){if(o==null||n.hasZ||(o=void 0),n.type==="point")return n.x+=a,n.y+=e,n.hasZ&&o!=null&&(n.z+=o),n;if(n.type==="multipoint"){const x=n.points;for(let i=0;i<x.length;i++)x[i]=C(x[i],a,e,o);return n}if(n.type==="extent")return n.xmin+=a,n.xmax+=a,n.ymin+=e,n.ymax+=e,o!=null&&(n.zmin??(n.zmin=0),n.zmin+=o,n.zmax??(n.zmax=0),n.zmax+=o),n;const m=j(n),t=n.type==="polyline"?n.paths:n.rings;for(let x=0;x<m.length;x++){const i=m[x];for(let s=0;s<i.length;s++)i[s]=C(i[s],a,e,o)}return"paths"in n?n.paths=t:n.rings=t,n}function J(n,a,e,o,m){const t=n.clone(),x=o.resolution;if(t.type==="point"){if(m)b(t,a*x,-e*x);else{const i=o.state.transform,s=o.state.inverseTransform,l=i[0]*t.x+i[2]*t.y+i[4],y=i[1]*t.x+i[3]*t.y+i[5];t.x=s[0]*(l+a)+s[2]*(y+e)+s[4],t.y=s[1]*(l+a)+s[3]*(y+e)+s[5]}return t}if(t.type==="multipoint"){if(m)b(t,a*x,-e*x);else{const i=t.points,s=o.state.transform,l=o.state.inverseTransform;for(let y=0;y<i.length;y++){const p=i[y],f=s[0]*p[0]+s[2]*p[1]+s[4],M=s[1]*p[0]+s[3]*p[1]+s[5],c=l[0]*(f+a)+l[2]*(M+e)+l[4],u=l[1]*(f+a)+l[3]*(M+e)+l[5];i[y]=q(p,c,u,void 0)}}return t}if(t.type==="extent"){if(m)b(t,a*x,-e*x);else{const i=o.state.transform,s=o.state.inverseTransform,l=i[0]*t.xmin+i[2]*t.ymin+i[4],y=i[1]*t.xmin+i[3]*t.ymin+i[5],p=i[0]*t.xmax+i[2]*t.ymax+i[4],f=i[1]*t.xmax+i[3]*t.ymax+i[5];t.xmin=s[0]*(l+a)+s[2]*(y+e)+s[4],t.ymin=s[1]*(l+a)+s[3]*(y+e)+s[5],t.xmax=s[0]*(p+a)+s[2]*(f+e)+s[4],t.ymax=s[1]*(p+a)+s[3]*(f+e)+s[5]}return t}if(m)b(t,a*x,-e*x);else{const i=j(t),s=t.type==="polyline"?t.paths:t.rings,l=o.state.transform,y=o.state.inverseTransform;for(let p=0;p<i.length;p++){const f=i[p];for(let M=0;M<f.length;M++){const c=f[M],u=l[0]*c[0]+l[2]*c[1]+l[4],h=l[1]*c[0]+l[3]*c[1]+l[5],v=y[0]*(u+a)+y[2]*(h+e)+y[4],g=y[1]*(u+a)+y[3]*(h+e)+y[5];f[M]=q(c,v,g,void 0)}}"paths"in t?t.paths=s:t.rings=s}return t}function K(n,a,e,o){if(n.type==="point"){const{x:c,y:u}=n,h=o?o[0]:c,v=o?o[1]:u,g=n.clone(),d=(c-h)*a+h,r=(u-v)*e+v;return g.x=d,g.y=r,g}if(n.type==="multipoint"){const c=j(n),u=A(),[h,v,g,d]=B(u,[c]),r=o?o[0]:(h+g)/2,z=o?o[1]:(d+v)/2,T=n.clone(),k=T.points;for(let Z=0;Z<k.length;Z++){const w=k[Z],[D,E]=w,F=(D-r)*a+r,G=(E-z)*e+z;k[Z]=q(w,F,G,void 0)}return T}if(n.type==="extent"){const{xmin:c,xmax:u,ymin:h,ymax:v}=n,g=o?o[0]:(c+u)/2,d=o?o[1]:(v+h)/2,r=n.clone();if(r.xmin=(c-g)*a+g,r.ymax=(v-d)*e+d,r.xmax=(u-g)*a+g,r.ymin=(h-d)*e+d,r.xmin>r.xmax){const z=r.xmin,T=r.xmax;r.xmin=T,r.xmax=z}if(r.ymin>r.ymax){const z=r.ymin,T=r.ymax;r.ymin=T,r.ymax=z}return r}const m=j(n),t=A(),[x,i,s,l]=B(t,m),y=o?o[0]:(x+s)/2,p=o?o[1]:(l+i)/2,f=n.clone(),M=f.type==="polyline"?f.paths:f.rings;for(let c=0;c<m.length;c++){const u=m[c];for(let h=0;h<u.length;h++){const v=u[h],[g,d]=v,r=(g-y)*a+y,z=(d-p)*e+p;M[c][h]=q(v,r,z,void 0)}}return"paths"in f?f.paths=M:f.rings=M,f}function L(n,a,e,o,m,t){const x=Math.sqrt((e-n)*(e-n)+(o-a)*(o-a));return Math.sqrt((m-n)*(m-n)+(t-a)*(t-a))/x}function N(n,a,e,o=!1){const m=Math.atan2(a.y-e.y,a.x-e.x)-Math.atan2(n.y-e.y,n.x-e.x),t=Math.atan2(Math.sin(m),Math.cos(m));return o?t:H(t)}function C(n,a,e,o){return q(n,n[0]+a,n[1]+e,n[2]!=null&&o!=null?n[2]+o:void 0)}function q(n,a,e,o){const m=[a,e];return n.length>2&&m.push(o??n[2]),n.length>3&&m.push(n[3]),m}export{L as a,J as i,N as m,b as r,K as s};
