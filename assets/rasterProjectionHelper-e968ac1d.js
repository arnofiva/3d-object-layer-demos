import{eX as H,eY as Mn,dk as j,eZ as v,bf as W,cD as Rn,aW as un,aA as N,dm as bn,aB as Pn,e_ as G,e$ as E,f0 as tn,f1 as Sn,f2 as Nn,bA as En,f3 as en}from"./main-79e5ed80.js";var D;function xn(n,e,i){return!bn(n,e,i)}function $(n,e,i){const s=xn(n,e,i);if(s&&!H())throw new Pn("rasterprojectionhelper-project","projection engine is not loaded");return s}(function(n){n[n.None=0]="None",n[n.North=1]="North",n[n.South=2]="South",n[n.Both=3]="Both"})(D||(D={}));const on=(n,e,i,s=0)=>{if(i[0]===1)return[0,0];let r=1,t=-1,o=1,c=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(r=r>n[u]?n[u]:r,t=t>n[u]?t:n[u],o=o>n[u+1]?n[u+1]:o,c=c>n[u+1]?c:n[u+1]);const{cols:f,rows:a}=e,l=(t-r)/f/i[0],w=(c-o)/a/i[1],y=2*s;let x=0,m=!1,h=[0,0];for(let u=0;u<f-3;u++){for(let M=0;M<a-3;M++){const p=u*a*2+2*M,g=(n[p]+n[p+4]+n[p+4*a]+n[p+4*a+4])/4,d=(n[p+1]+n[p+5]+n[p+4*a+1]+n[p+4*a+5])/4,R=Math.abs((g-n[p+2*a+2])/l),b=Math.abs((d-n[p+2*a+3])/w);if(R+b>x&&(x=R+b,h=[R,b]),y&&x>y){m=!0;break}}if(m)break}return h},Gn={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},L=32,A=4,q=A,J=new Map,X=new Map,B=500;async function Ln(){H()||await Mn()}function An(n,e,i){return $(n.spatialReference,e),i?en(e,n.spatialReference,n):en(n.spatialReference,e,n)}function Bn(n,e,i,s=null){const r=n.spatialReference;if(r.equals(e))return n;$(r,e,s);const t=i.center,o=new j({xmin:t.x-n.x/2,xmax:t.x+n.x/2,ymin:t.y-n.y/2,ymax:t.y+n.y/2,spatialReference:r}),c=v(o,e,s),f=k(e);let a;if(c==null||f!=null&&c.width>=f){const l=W(r)/W(e);a={x:n.x*l,y:n.y*l}}else a={x:c.width,y:c.height};return a}function S(n,e=.01){return W(n)?e/W(n):0}function sn(n,e,i=null,s=!0){const r=n.spatialReference;if(r.equals(e))return n;$(r,e,i);const t=v(n,e,i);return s&&t&&mn([n],[t],r,e),t}function mn(n,e,i,s){const r=I(i,!0),t=I(s,!0),o=S(i,B),c=S(s,B);if(o&&r!=null&&t!=null)for(let f=0;f<n.length;f++){const a=e[f];if(!a)continue;const{x:l}=n[f],{x:w}=a;w>=t[1]-c&&Math.abs(l-r[0])<o?a.x-=t[1]-t[0]:w<=t[0]+c&&Math.abs(l-r[1])<o&&(a.x+=t[1]-t[0])}}function kn(n){const{inSR:e,outSR:i,datumTransformation:s,preferPE:r}=n;if(e.equals(i)){const{points:t}=U(n,null);return t}return e.isWebMercator&&i.isWGS84||e.isWGS84&&i.isWebMercator?Tn(n):$(e,i,s)&&r&&(e.isGeographic||_(e)!=null)?rn(n):Cn(n)}function Cn(n){const{points:e}=U(n,null),{inSR:i,outSR:s,datumTransformation:r}=n,t=e.map(c=>new N(c[0],c[1],i)),o=v(t,s,r);return r&&mn(t,o,i,s),o.map(c=>c?[c.x,c.y]:[NaN,NaN])}function rn(n){const{inSR:e,outSR:i,datumTransformation:s}=n,r=_(e),{points:t,mask:o}=U(n,r);if(!e.isGeographic){const f=e.wkid?G.coordsys(e.wkid):G.fromString(e.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,e.wkt);tn.projToGeog(f,t.length,t)}if(s!=null&&s.steps.length){let f;if(i.isGeographic&&(f=t.map(([l])=>l>179.9955?1:l<-179.9955?-1:0)),s.steps.forEach(l=>{const w=l.wkid?G.geogtran(l.wkid):G.fromString(E.PE_TYPE_GEOGTRAN,l.wkt);Sn.geogToGeog(w,t.length,t,null,l.isInverse?E.PE_TRANSFORM_2_TO_1:E.PE_TRANSFORM_1_TO_2)}),f)for(let l=0;l<t.length;l++){const w=f[l],y=t[l][0],x=y>179.9955?1:y<-179.9955?-1:0;w&&x&&w!==x&&(t[l][0]=w>0?y+360:y-360)}}if(!i.isGeographic){const f=_(i,!0),a=f!=null&&f.isEnvelope?[f.bbox[1],f.bbox[3]]:[-90,90];_n(t,a);const l=i.wkid?G.coordsys(i.wkid):G.fromString(i.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,i.wkt);tn.geogToProj(l,t.length,t)}let c=t;if(o&&t.length!==o.length){c=[];for(let f=0,a=0;f<o.length;f++)o[f]?c.push(t[a++]):c.push([NaN,NaN])}return c}function Tn(n){const{cols:e,rows:i,xres:s,yres:r,usePixelCenter:t,inSR:o,outSR:c}=n;let{xmin:f,ymax:a}=n;t&&(f+=s/2,a-=r/2);const l=[],w=[],y=Math.max(e,i);for(let m=0;m<y;m++){const h=f+s*Math.min(e,m),u=a-r*Math.min(i,m),M=v(new N({x:h,y:u,spatialReference:o}),c);m<=e&&l.push(M.x),m<=i&&w.push(M.y)}const x=[];for(let m=0;m<e;m++)for(let h=0;h<i;h++)x.push([l[m],w[h]]);return x}function _(n,e=!1){let i=n.wkid||n.wkt;if(!i||n.isGeographic)return null;if(i=String(i),J.has(i)){const o=J.get(i);return e?o?.gcs:o?.pcs}const s=n.wkid?G.coordsys(n.wkid):G.fromString(n.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,n.wkt),r=an(s,S(n,1e-4)),t=an(s,0,!0);return J.set(i,{pcs:r,gcs:t}),e?t:r}function an(n,e=0,i=!1){const s=Nn.generate(n),r=i?n.horizonGcsGenerate():n.horizonPcsGenerate();if(!s||!r?.length)return null;let t=!1,o=r.find(u=>u.getInclusive()===1&&u.getKind()===1);if(!o){if(o=r.find(u=>u.getInclusive()===1&&u.getKind()===0),!o)return null;t=!0}const c=i?0:(s.getNorthPoleLocation()===2?1:0)|(s.getSouthPoleLocation()===2?2:0),f=s.isPannableRectangle(),a=o.getCoord();if(t)return{isEnvelope:t,isPannable:f,vertices:a,coef:null,bbox:[a[0][0]-e,a[0][1]-e,a[1][0]+e,a[1][1]+e],poleLocation:c};let l=0;const w=[];let[y,x]=a[0],[m,h]=a[0];for(let u=0,M=a.length;u<M;u++){l++,l===M&&(l=0);const[p,g]=a[u],[d,R]=a[l];if(R===g)w.push([p,d,g,R,2]);else{const b=(d-p)/(R-g||1e-4),C=p-b*g;g<R?w.push([b,C,g,R,0]):w.push([b,C,R,g,1])}y=y<p?y:p,x=x<g?x:g,m=m>p?m:p,h=h>g?h:g}return{isEnvelope:!1,isPannable:f,vertices:a,coef:w,bbox:[y,x,m,h],poleLocation:c}}function U(n,e){const i=[],{cols:s,rows:r,xres:t,yres:o,usePixelCenter:c}=n;let{xmin:f,ymax:a}=n;if(c&&(f+=t/2,a-=o/2),e==null){for(let x=0;x<s;x++)for(let m=0;m<r;m++)i.push([f+t*x,a-o*m]);return{points:i}}const l=new Uint8Array(s*r);if(e.isEnvelope){const{bbox:[x,m,h,u]}=e;for(let M=0,p=0;M<s;M++){const g=f+t*M,d=e.isPannable||g>=x&&g<=h;for(let R=0;R<r;R++,p++){const b=a-o*R;d&&b>=m&&b<=u&&(i.push([g,b]),l[p]=1)}}return{points:i,mask:l}}const w=e.coef,y=[];for(let x=0;x<r;x++){const m=a-o*x,h=[],u=[];for(let p=0;p<w.length;p++){const[g,d,R,b,C]=w[p];if(m===R&&R===b)h.push(g),h.push(d),u.push(2),u.push(2);else if(m>=R&&m<=b){const z=g*m+d;h.push(z),u.push(C)}}let M=h;if(h.length>2){let p=u[0]===2?0:u[0],g=h[0];M=[];for(let d=1;d<u.length;d++)u[d]===2&&d!==u.length-1||(u[d]!==p&&(M.push(p===0?Math.min(g,h[d-1]):Math.max(g,h[d-1])),p=u[d],g=h[d]),d===u.length-1&&M.push(u[d]===0?Math.min(g,h[d]):Math.max(g,h[d])));M.sort((d,R)=>d-R)}else h[0]>h[1]&&(M=[h[1],h[0]]);y.push(M)}for(let x=0,m=0;x<s;x++){const h=f+t*x;for(let u=0;u<r;u++,m++){const M=a-o*u,p=y[u];if(p.length===2)h>=p[0]&&h<=p[1]&&(i.push([h,M]),l[m]=1);else if(p.length>2){let g=!1;for(let d=0;d<p.length;d+=2)if(h>=p[d]&&h<=p[d+1]){g=!0;break}g&&(i.push([h,M]),l[m]=1)}}}return{points:i,mask:l}}function _n(n,e){const[i,s]=e;for(let r=0;r<n.length;r++){const t=n[r][1];(t<i||t>s)&&(n[r]=[NaN,NaN])}}function hn(n){const e=k(n[0].spatialReference);if(n.length<2||e==null)return n[0];const i=S(n[0].spatialReference);if((n=n.filter(c=>c.width>i)).length===1)return n[0];let{xmin:s,xmax:r,ymin:t,ymax:o}=n[0];for(let c=1;c<n.length;c++){const f=n[c];r=f.xmax+e*c,t=Math.min(t,f.ymin),o=Math.max(o,f.ymax)}return new j({xmin:s,xmax:r,ymin:t,ymax:o,spatialReference:n[0].spatialReference})}function vn(n,e,i=null,s=!0){const r=n.spatialReference;if(r.equals(e))return n;const t=On(n),o=k(r,!0),c=k(e);if(t===0||o==null||c==null){const a=ln(n,e,i,s);if(o==null&&c!=null&&Math.abs(a.width-c)<S(e)&&H()){const l=_(r);if(l!=null&&l.poleLocation===D.None&&n.width<(l.bbox[2]-l.bbox[0])/2)return $n(n,e)||a}return a}const f=n.clone().normalize();if(f.length===1&&n.xmax<o&&n.xmax-o/2>S(r)){const{xmin:a,xmax:l}=n;for(let w=0;w<=t;w++){const y=w===0?a:-o/2,x=w===t?l-o*w:o/2;f[w]=new j({xmin:y,xmax:x,ymin:n.ymin,ymax:n.ymax,spatialReference:r})}}return hn(f.map(a=>ln(a,e,i,s)).filter(Rn))}function In(n,e,i){if(n.type==="extent"){const{xmin:s,ymin:r,xmax:t,ymax:o,spatialReference:c}=n;n=new un({rings:[[[s,o],[t,o],[t,r],[s,r],[s,o]]],spatialReference:c})}return n.spatialReference.equals(e)?n:($(n.spatialReference,e,i),v(n,e,i))}function $n(n,e){const i=k(e);if(i==null)return null;let{xmin:s,ymin:r,xmax:t,ymax:o}=n;const c=n.spatialReference,f=new un({spatialReference:c,rings:[[[s,r],[t,r],[t,o],[s,o],[s,r]]]}),a=v(f,e);if(a.rings.length!==2||!a.rings[0].length||!a.rings[1].length)return null;const{rings:l}=a,w=S(c),y=new j({spatialReference:e});for(let x=0;x<2;x++){s=t=l[x][0][0],r=o=l[x][0][1];for(let m=0;m<l[x].length;m++)s=s>l[x][m][0]?l[x][m][0]:s,t=t<l[x][m][0]?l[x][m][0]:t,r=r>l[x][m][1]?l[x][m][1]:r,o=o<l[x][m][1]?l[x][m][1]:o;if(x===0)y.ymin=r,y.ymax=o,y.xmin=s,y.xmax=t;else if(y.ymin=Math.min(y.ymin,r),y.ymax=Math.max(y.ymax,o),Math.abs(t-i/2)<w)y.xmin=s,y.xmax=y.xmax+i;else{if(!(Math.abs(s+i/2)<w))return null;y.xmax=t+i}}return y}function ln(n,e,i=null,s=!0,r=!0){const t=n.spatialReference;if(t.equals(e)||!e)return n;$(t,e,i);const o=v(n,e,i);if(r&&e.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!s||!o)return o;const c=I(t,!0),f=I(e,!0);if(c==null||f==null)return o;const a=S(t,.001),l=S(t,B),w=S(e,.001);if(Math.abs(o.xmin-f[0])<w&&Math.abs(o.xmax-f[1])<w){const y=Math.abs(n.xmin-c[0]),x=Math.abs(c[1]-n.xmax);if(y<a&&x>l){o.xmin=f[0];const m=[];m.push(new N(n.xmax,n.ymin,t)),m.push(new N(n.xmax,(n.ymin+n.ymax)/2,t)),m.push(new N(n.xmax,n.ymax,t));const h=m.map(u=>sn(u,e,i)).filter(u=>!isNaN(u?.x)).map(u=>u.x);o.xmax=Math.max.apply(null,h)}if(x<a&&y>l){o.xmax=f[1];const m=[];m.push(new N(n.xmin,n.ymin,t)),m.push(new N(n.xmin,(n.ymin+n.ymax)/2,t)),m.push(new N(n.xmin,n.ymax,t));const h=m.map(u=>sn(u,e,i)).filter(u=>!isNaN(u?.x)).map(u=>u.x);o.xmin=Math.min.apply(null,h)}}else{const y=S(e,.001);Math.abs(o.xmin-f[0])<y&&(o.xmin=f[0]),Math.abs(o.xmax-f[1])<y&&(o.xmax=f[1])}return o}function k(n,e=!1){if(!n)return null;const i=e?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*i:n.wkid&&n.isGeographic?360:2*Gn[n.wkid]||null}function I(n,e=!1){if(n.isGeographic)return[-180,180];const i=k(n,e);return i!=null?[-i/2,i/2]:null}function fn(n,e,i,s){let r=(n-e)/i;return r-Math.floor(r)!=0?r=Math.floor(r):s&&(r-=1),r}function On(n,e=!1){const i=k(n.spatialReference);if(i==null)return 0;const s=e?0:-(i/2),r=S(n.spatialReference),t=!e&&Math.abs(n.xmax-i/2)<r?i/2:n.xmax,o=!e&&Math.abs(n.xmin+i/2)<r?-i/2:n.xmin;return fn(t,s,i,!0)-fn(o,s,i,!1)}function jn(n){const e=n.storageInfo.origin.x,i=k(n.spatialReference,!0);if(i==null)return{originX:e,halfWorldWidth:null,pyramidsInfo:null};const s=i/2,{nativePixelSize:r,storageInfo:t,extent:o}=n,{maximumPyramidLevel:c,blockWidth:f,pyramidScalingFactor:a}=t;let l=r.x;const w=[],y=n.transform!=null&&n.transform.type==="gcs-shift",x=e+(y?0:s),m=y?i-e:s-e;for(let h=0;h<=c;h++){const u=(o.xmax-e)/l/f,M=u-Math.floor(u)==0?u:Math.ceil(u),p=m/l/f,g=p-Math.floor(p)==0?p:Math.ceil(p),d=Math.floor(x/l/f),R=Math.round(x/l)%f,b=(f-Math.round(m/l)%f)%f;w.push({resolutionX:l,blockWidth:f,datsetColumnCount:M,worldColumnCountFromOrigin:g,leftMargin:R,rightPadding:b,originColumnOffset:d}),l*=a}return{originX:e,halfWorldWidth:s,pyramidsInfo:w,hasGCSSShiftTransform:y}}function Wn(n){if(!n||n.isGeographic)return n;const e=String(n.wkid||n.wkt);let i;return X.has(e)?i=X.get(e):(i=(n.wkid?G.coordsys(n.wkid):G.fromString(E.PE_TYPE_PROJCS,n.wkt)).getGeogcs().getCode(),X.set(e,i)),new En({wkid:i})}function Yn(n){const e=n.isAdaptive&&n.spacing==null;let i=n.spacing||[L,L],s=K(n),r={cols:s.size[0]+1,rows:s.size[1]+1};const t=s.outofBoundPointCount>0&&s.outofBoundPointCount<s.offsets.length/2;let o=s.outofBoundPointCount===s.offsets.length/2||e&&t?[0,0]:on(s.offsets,r,i,q);const c=(o[0]+o[1])/2,f=n.projectedExtent.spatialReference,a=n.srcBufferExtent.spatialReference;if(e&&(t||c>q)&&(xn(f,a,n.datumTransformation)&&(f.isGeographic||_(f)),i=[A,A],s=K({...n,spacing:i}),r={cols:s.size[0]+1,rows:s.size[1]+1},o=on(s.offsets,r,i,q)),s.error=o,i[0]>1&&(s.coefficients=cn(s.offsets,r,t)),n.includeGCSGrid&&!f.isGeographic&&!f.isWebMercator)if(a.isGeographic)s.gcsGrid={offsets:s.offsets,coefficients:s.coefficients,spacing:i};else{const l=_(f);if(l!=null&&!l.isEnvelope){const w=Wn(f),y=vn(n.projectedExtent,w),{offsets:x}=K({...n,srcBufferExtent:y,spacing:i}),m=cn(x,r,t);s.gcsGrid={offsets:x,coefficients:m,spacing:i}}}return s}function K(n){const{projectedExtent:e,srcBufferExtent:i,pixelSize:s,datumTransformation:r,rasterTransform:t}=n,o=e.spatialReference,c=i.spatialReference,f=$(o,c),{xmin:a,ymin:l,xmax:w,ymax:y}=e,x=k(c),m=x!=null&&(n.hasWrapAround||t?.type==="gcs-shift"),h=n.spacing||[L,L],u=h[0]*s.x,M=h[1]*s.y,p=h[0]===1,g=Math.ceil((w-a)/u-.1/h[0])+(p?0:1),d=Math.ceil((y-l)/M-.1/h[1])+(p?0:1),R=kn({cols:g,rows:d,xmin:a,ymax:y,xres:u,yres:M,inSR:o,outSR:c,datumTransformation:r,preferPE:h[0]<=A,usePixelCenter:p}),b=[];let C,z=0;const Z=p?-1:NaN,{xmin:Q,xmax:Y,ymax:pn,width:gn,height:yn}=i,dn=S(c,B),wn=x!=null&&Q>0&&Y>x/2;let V=!1;if(f){const T=_(o);V=T!=null&&T.poleLocation>0}for(let T=0;T<g;T++){const F=[];for(let O=0;O<d;O++){let P=R[T*d+O];if(m&&P[0]>Y&&P[0]>x/2-dn?P[0]-=x:m&&T===0&&P[0]<0&&wn&&!t&&(P[0]+=x),!P||isNaN(P[0])||isNaN(P[1]))b.push(Z),b.push(Z),F.push(null),z++;else{if(t){const nn=t.inverseTransform(new N({x:P[0],y:P[1],spatialReference:c}));P=[nn.x,nn.y]}F.push(P),T>0&&m&&C[O]&&P[0]<C[O][0]&&(P[0]+=x,V&&P[0]>Y&&P[0]>x&&(P[0]-=x)),b.push((P[0]-Q)/gn),b.push((pn-P[1])/yn)}}C=F}return{offsets:b,error:null,coefficients:null,outofBoundPointCount:z,spacing:h,size:p?[g,d]:[g-1,d-1]}}function cn(n,e,i){const{cols:s,rows:r}=e,t=new Float32Array((s-1)*(r-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let f=0;f<s-1;f++){for(let a=0;a<r-1;a++){let l=f*r*2+2*a;const w=n[l],y=n[l+1],x=n[l+2],m=n[l+3];l+=2*r;const h=n[l],u=n[l+1],M=n[l+2],p=n[l+3];let g=0,d=12*(a*(s-1)+f);for(let R=0;R<3;R++)t[d++]=o[g++]*w+o[g++]*x+o[g++]*M;g=0;for(let R=0;R<3;R++)t[d++]=o[g++]*y+o[g++]*m+o[g++]*p;g=0;for(let R=0;R<3;R++)t[d++]=c[g++]*w+c[g++]*h+c[g++]*M;g=0;for(let R=0;R<3;R++)t[d++]=c[g++]*y+c[g++]*u+c[g++]*p}if(i)for(let a=0;a<t.length;a++)isNaN(t[a])&&(t[a]=-1)}return t}function Fn(n){const e=n.clone().normalize();return e.length===1?e[0]:hn(e)}function qn(n,e,i){const{storageInfo:s,pixelSize:r}=e;let t=0,o=!1;const{pyramidResolutions:c}=s,f=s.tileInfo.format?.toLowerCase()==="mixed"?Math.max(1,Math.min(3,s.tileInfo.dpi/96)):1,a=(n.x+n.y)/2/f;if(c!=null&&c.length){const m=c[c.length-1],h=(m.x+m.y)/2,u=(r.x+r.y)/2;if(a<=u)t=0;else if(a>=h)t=c.length,o=a/h>8;else{let p,g=u;for(let d=1;d<=c.length;d++){if(p=(c[d-1].x+c[d-1].y)/2,a<=p){a===p?t=d:i==="down"?(t=d-1,o=a/g>8):t=i==="up"||a-g>p-a||a/g>2?d:d-1;break}g=p}}const M=t===0?r:c[t-1];return o&&Math.min(M.x,M.y)*W(e.spatialReference)>19567&&(o=!1),{pyramidLevel:t,pyramidResolution:new N({x:M.x,y:M.y,spatialReference:e.spatialReference}),excessiveReading:o}}const l=Math.log(n.x/r.x)/Math.LN2,w=Math.log(n.y/r.y)/Math.LN2,y=e.storageInfo.maximumPyramidLevel||0;t=i==="down"?Math.floor(Math.min(l,w)):i==="up"?Math.ceil(Math.max(l,w)):Math.round((l+w)/2),t<0?t=0:t>y&&(o=t>y+3,t=y);const x=2**t;return{pyramidLevel:t,pyramidResolution:new N({x:x*e.nativePixelSize.x,y:x*e.nativePixelSize.y,spatialReference:e.spatialReference}),excessiveReading:o}}export{Yn as $,Bn as C,In as J,k as K,On as Q,An as T,jn as V,sn as _,xn as d,qn as i,Ln as k,Fn as n,vn as q};
