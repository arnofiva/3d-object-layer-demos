import{cq as Re,hi as S,b3 as m,kM as N,iN as Y,bQ as y,fY as Fe,az as ne,ax as se,aA as L,q0 as Ge,q1 as Ze,aB as C,fZ as He,dM as Je,ay as Ke,aD as d,aE as x,aF as Me,is as Qe,b4 as Xe,i5 as Pe,cr as ae,oP as Le,mD as J,id as le,ie as ce,ig as ue,i8 as pe,ia as fe,ib as he,cI as je,ij as me,mN as T,mI as K,ek as Ye,q2 as ge,cc as _e,q3 as et,cC as re,nV as tt,cF as nt,cJ as rt,i0 as ke,lW as Ee,cW as ot,hN as it,cX as st,g7 as at,bm as lt,q4 as ct,aW as ut,q5 as pt}from"./index-cdda5707.js";import{m as ft}from"./MeshGeoreferencedRelativeVertexSpace-78553062.js";import{p as oe,m as ie}from"./MeshLocalVertexSpace-7526bf91.js";import{N as q}from"./MeshTransform-24e5f7d8.js";import{I as Oe,o as ee,r as te,D as ht,O as mt,q as gt}from"./georeference-f88d775a.js";import{o as de,h as dt,m as xt}from"./External-c5063428.js";function yt({xmin:e,xmax:t,ymin:n,ymax:r,zmin:o,zmax:i},s,l,c){o??(o=0),i??(i=0),xe??(xe=new Float64Array(24));const a=xe;return a[0]=e,a[1]=n,a[2]=o,a[3]=e,a[4]=r,a[5]=o,a[6]=t,a[7]=r,a[8]=o,a[9]=t,a[10]=n,a[11]=o,a[12]=e,a[13]=n,a[14]=i,a[15]=e,a[16]=r,a[17]=i,a[18]=t,a[19]=r,a[20]=i,a[21]=t,a[22]=n,a[23]=i,Oe({positions:a,transform:s,vertexSpace:l,inSpatialReference:c,outSpatialReference:c,outPositions:a,local:!1}),H(a,c)}let xe=null;function H(e,t){let n=1/0,r=1/0,o=1/0,i=-1/0,s=-1/0,l=-1/0;const c=e.length;let a=0;for(;a<c;){const u=e[a++],p=e[a++],f=e[a++];n=Math.min(n,u),r=Math.min(r,p),o=Math.min(o,f),i=Math.max(i,u),s=Math.max(s,p),l=Math.max(l,f)}return new Re({xmin:n,ymin:r,zmin:o,xmax:i,ymax:s,zmax:l,spatialReference:t})}const W="esri.geometry.support.meshUtils.centerAt";function vt(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{vertexSpace:r}=e,o=n?.origin??e.origin;r.isRelative?(ee(r,W,n),wt(e,t,o)):te(e.spatialReference,n)?bt(e,t,o):$t(e,t,o)}function wt(e,t,n){const{vertexSpace:r}=e;if(!r.isRelative)return;const o=Ce,i=ze;if(!S(t,i,e.spatialReference))return void m.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!S(n,o,e.spatialReference)){const c=e.origin;o[0]=c.x,o[1]=c.y,o[2]=c.z,m.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const s=N(St,i,o),l=r.origin;r.origin=Y(y(),l,s)}function bt(e,t,n){const r=ht(e.vertexAttributes,n,{geographic:!0}),{position:o,normal:i,tangent:s}=mt(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}function $t(e,t,n){const r=Ce,o=ze;if(S(t,o,e.spatialReference)){if(!S(n,r,e.spatialReference)){const i=e.origin;r[0]=i.x,r[1]=i.y,r[2]=i.z,m.getLogger(W).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}At(e.vertexAttributes.position,o,r),e.vertexAttributesChanged()}else m.getLogger(W).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function At(e,t,n){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-n[o]}const ze=y(),Ce=y(),St=y();async function Rt(e,t,n){const{source:r}=t,{loadGLTFMesh:o}=await Fe(ne(()=>import("./loadGLTFMesh-a4954a2d.js"),["./loadGLTFMesh-a4954a2d.js","./index-cdda5707.js","./index-7772480e.css","./georeference-f88d775a.js","./MeshGeoreferencedRelativeVertexSpace-78553062.js","./MeshLocalVertexSpace-7526bf91.js","./MeshTransform-24e5f7d8.js"],import.meta.url),n),i=await Mt(r,n);se(n);const s=o(new L({x:0,y:0,z:0,spatialReference:e.spatialReference}),i.url,{resolveFile:Ft(i),useTransform:!0,signal:n?.signal});s.then(()=>i.dispose(),()=>i.dispose());const{vertexAttributes:l,components:c}=await s;e.vertexAttributes=l,e.components=c}function Ft(e){const t=Ge(e.url);return n=>{const r=Ze(n,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??n}}async function Mt(e,t){if(Array.isArray(e)){if(!e.length)throw new C("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?Lt(e):jt(e,t)}return De(e)}async function Pt(e,t){const{parts:n}=e;if(n.length===1)return new Q(n[0].partUrl);const r=await e.toBlob(t);return se(t),Q.fromBlob(r)}function De(e){return Q.fromBlob(e)}function Lt(e){return Ie(e.map(t=>({name:t.name,mimeType:t.type,source:De(t)})))}async function jt(e,t){const n=await He(e.map(async r=>{const o=await Pt(r);return se(t),{name:r.assetName,mimeType:r.assetMimeType,source:o}}));if(Je(t))throw n.forEach(r=>r.source.dispose()),Ke();return Ie(n)}const _t=/^(model\/gltf\+json)|(model\/gltf-binary)$/,kt=/\.(gltf|glb)/i;function Ie(e){const t=new Map;let n=null;for(const{name:r,mimeType:o,source:i}of e)(n==null||_t.test(o)||kt.test(r))&&(n=i.url),t.set(r,i.url),i.files.forEach((s,l)=>t.set(l,s));if(n==null)throw new C("mesh-load-external:missing-files","Missing files to load external mesh source");return new Q(n,()=>e.forEach(({source:r})=>r.dispose()),t)}let Q=class Ue{constructor(t,n=()=>{},r=new Map){this.url=t,this.dispose=n,this.files=r}static fromBlob(t){const n=URL.createObjectURL(t);return new Ue(n,()=>URL.revokeObjectURL(n))}},j=class extends Qe{constructor(){super(),this.externalSources=new Xe,this._explicitDisplaySource=null}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(t){if(t!=null&&!de(t))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=t,t&&this.externalSources.every(n=>!dt(n,t))&&this.externalSources.add(t)}clearSources(){this.displaySource=null,this.externalSources.removeAll()}getExternalSourcesOnService(t){return this.externalSources.items.filter(n=>xt(n,t))}get _implicitDisplaySource(){return this.externalSources.find(de)}};d([x()],j.prototype,"externalSources",void 0),d([x()],j.prototype,"displaySource",null),d([x()],j.prototype,"_implicitDisplaySource",null),d([x()],j.prototype,"_explicitDisplaySource",void 0),j=d([Me("esri.geometry.support.meshUtils.Metadata")],j);const Et="esri.geometry.support.meshUtils.offset";function Ot(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{vertexSpace:r}=e;r.isRelative?(ee(r,Et,n),zt(r,t)):te(e.spatialReference,n)?Ct(e,t):Dt(e,t)}function zt(e,t){const n=e.origin;e.origin=Y(y(),n,t)}function Ct(e,t){const n=e.spatialReference,r=e.vertexAttributes.position,o=e.vertexAttributes.normal,i=e.vertexAttributes.tangent,s=new Float64Array(r.length),l=o!=null?new Float32Array(o.length):null,c=i!=null?new Float32Array(i.length):null,a=e.extent.center,u=It;Pe(n,[a.x,a.y,a.z],ye,ae(n)),Le(ve,ye),J(u,t,ve),le(r,n,s),o!=null&&l!=null&&ce(o,r,s,n,l),i!=null&&c!=null&&ue(i,r,s,n,c),Te(s,u),pe(s,r,n),o!=null&&l!=null&&fe(l,r,s,n,o),i!=null&&c!=null&&he(c,r,s,n,i),e.vertexAttributesChanged()}function Dt(e,t){Te(e.vertexAttributes.position,t),e.vertexAttributesChanged()}function Te(e,t){if(e)for(let n=0;n<e.length;n+=3)for(let r=0;r<3;r++)e[n+r]+=t[r]}const It=y(),ye=je(),ve=me();function Ut(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:n}=Zt,r=4*e.length,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),l=new Uint32Array(2*e.length*3);let c=0,a=0,u=0,p=0;for(let f=0;f<e.length;f++){const h=e[f],F=c/3;for(const $ of t)l[p++]=F+$;const B=h.corners;for(let $=0;$<4;$++){const _=B[$];let w=0;s[u++]=.25*n[$][0]+h.uvOrigin[0],s[u++]=h.uvOrigin[1]-.25*n[$][1];for(let A=0;A<3;A++)h.axis[A]!==0?(o[c++]=.5*h.axis[A],i[a++]=h.axis[A]):(o[c++]=.5*_[w++],i[a++]=0)}}return{position:o,normal:i,uv:s,faces:l}}function Tt(e,t){const n=e.components[0],r=n.faces,o=Ht[t],i=6*o,s=new Array(6),l=new Array(r.length-6);let c=0,a=0;for(let u=0;u<r.length;u++)u>=i&&u<i+6?s[c++]=r[u]:l[a++]=r[u];if(e.vertexAttributes.uv!=null){const u=new Float32Array(e.vertexAttributes.uv),p=4*o*2,f=[0,1,1,1,1,0,0,0];for(let h=0;h<f.length;h++)u[p+h]=f[h];e.vertexAttributes.uv=u}return e.components=[new T({faces:s,material:n.material}),new T({faces:l})],e}function Bt(e=0){const t=Math.round(8*2**e),n=2*t,r=(t-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),l=new Uint32Array(3*((t-1)*n*2));let c=0,a=0,u=0,p=0;for(let f=0;f<=t;f++){const h=f/t*Math.PI+.5*Math.PI,F=Math.cos(h),B=Math.sin(h);g[2]=B;const $=f===0||f===t,_=$?n-1:n;for(let w=0;w<=_;w++){const A=w/_*2*Math.PI;g[0]=-Math.sin(A)*F,g[1]=Math.cos(A)*F;for(let M=0;M<3;M++)o[c]=.5*g[M],i[c]=g[M],++c;s[a++]=(w+($?.5:0))/n,s[a++]=f/t,f!==0&&w!==n&&(f!==t&&(l[u++]=p,l[u++]=p+1,l[u++]=p-n),f!==1&&(l[u++]=p,l[u++]=p-n,l[u++]=p-n-1)),p++}}return{position:o,normal:i,uv:s,faces:l}}function Vt(e=0){const n=Math.round(16*2**e),r=(5-1)*(n+1)+2*n,o=new Float64Array(3*r),i=new Float32Array(3*r),s=new Float32Array(2*r),l=new Uint32Array(3*(4*n));let c=0,a=0,u=0,p=0,f=0;for(let h=0;h<=5;h++){const F=h===0||h===5,B=h<=1||h>=5-1,$=h===2||h===4,_=F?n-1:n;for(let w=0;w<=_;w++){const A=w/_*2*Math.PI,M=F?0:.5;g[0]=M*Math.sin(A),g[1]=M*-Math.cos(A),g[2]=h<=2?.5:-.5;for(let k=0;k<3;k++)o[c++]=g[k],i[a++]=B?k===2?h<=1?1:-1:0:k===2?0:g[k]/M;s[u++]=(w+(F?.5:0))/n,s[u++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,$||h===0||w===n||(h!==5&&(l[p++]=f,l[p++]=f+1,l[p++]=f-n),h!==1&&(l[p++]=f,l[p++]=f-n,l[p++]=f-n-1)),f++}}return{position:o,normal:i,uv:s,faces:l}}function Nt(e,t){const n=typeof t=="number"?t:t!=null?t.width:1,r=typeof t=="number"?t:t!=null?t.height:1;switch(e){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function qt(e){const t=V.facingAxisOrderSwap[e],n=V.position,r=V.normal,o=new Float64Array(n.length),i=new Float32Array(r.length);let s=0;for(let l=0;l<4;l++){const c=s;for(let a=0;a<3;a++){const u=t[a],p=Math.abs(u)-1,f=u>=0?1:-1;o[s]=n[c+p]*f,i[s]=r[c+p]*f,s++}}return{position:o,normal:i,uv:new Float32Array(V.uv),faces:new Uint32Array(V.faces),isPlane:!0}}const E=1,O=2,z=3,V={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[z,E,O],west:[-z,-E,O],north:[-E,z,O],south:[E,-z,O],up:[E,O,z],down:[E,-O,-z]}};function G(e,t,n){e.isPlane||Wt(e),Gt(e,n?.size);const{vertexAttributes:r,vertexSpace:o,transform:i}=gt(e,t,n);return{vertexAttributes:new K({...r,uv:e.uv}),vertexSpace:o,transform:i,components:[new T({faces:e.faces,material:n&&n.material||null})],spatialReference:t.spatialReference}}function Wt(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}function Gt(e,t){if(t==null)return;const n=typeof t=="number"?[t,t,t]:[t.width!=null?t.width:1,t.depth!=null?t.depth:1,t.height!=null?t.height:1];P[0]=n[0],P[4]=n[1],P[8]=n[2];for(let r=0;r<e.position.length;r+=3){for(let o=0;o<3;o++)g[o]=e.position[r+o];J(g,g,P);for(let o=0;o<3;o++)e.position[r+o]=g[o]}if(n[0]!==n[1]||n[1]!==n[2]){P[0]=1/n[0],P[4]=1/n[1],P[8]=1/n[2];for(let r=0;r<e.normal.length;r+=3){for(let o=0;o<3;o++)g[o]=e.normal[r+o];J(g,g,P),Ye(g,g);for(let o=0;o<3;o++)e.normal[r+o]=g[o]}}}const Zt={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},Ht={south:0,east:1,north:2,west:3,up:4,down:5},g=y(),P=me(),Be="esri.geometry.support.meshUtils.rotate";function Jt(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position||t[3]===0)return;const{spatialReference:r,vertexSpace:o}=e;if(o.isRelative){ee(o,Be,n);const i=n?.origin??e.origin;e.transform??(e.transform=new q),Kt(e.transform,o,t,i)}else{const i=n?.origin??e.origin;te(r,n)?Qt(e,t,i):Xt(e,t,i)}}function Kt(e,t,n,r){const o=t.origin,i=_e(D,r.x,r.y,r.z??0),s=N(D,i,o);e.applyLocalInverse(s,we),e.rotation=et(e.rotation,n,ge()),e.applyLocalInverse(s,s),N(s,s,we),e.translation=Y(y(),e.translation,s)}function Qt(e,t,n){const r=e.spatialReference,o=ae(r),i=Ve;S(n,i,o)||S(e.origin,i,o);const s=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(s.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;Pe(o,i,X,o),Le($e,X);const f=be;J(re(be),re(t),$e),f[3]=t[3],le(s,r,a),l!=null&&u!=null&&ce(l,s,a,r,u),c!=null&&p!=null&&ue(c,s,a,r,p),U(a,f,3,i),pe(a,s,r),l!=null&&u!=null&&(U(u,f,3),fe(u,s,a,r,l)),c!=null&&p!=null&&(U(p,f,4),he(p,s,a,r,c)),e.vertexAttributesChanged()}function Xt(e,t,n){const r=Ve;if(!S(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,m.getLogger(Be).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}U(e.vertexAttributes.position,t,3,r),U(e.vertexAttributes.normal,t,3),U(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}function U(e,t,n,r=ke){if(e!=null){tt(X,nt(t),re(t));for(let o=0;o<e.length;o+=n){for(let i=0;i<3;i++)D[i]=e[o+i]-r[i];rt(D,D,X);for(let i=0;i<3;i++)e[o+i]=D[i]+r[i]}}}const D=y(),we=y(),be=ge(),X=je(),$e=me(),Ve=y(),Ne="esri.geometry.support.meshUtils.scale";function Yt(e,t,n){if(!e.vertexAttributes||!e.vertexAttributes.position)return;const{spatialReference:r,vertexSpace:o}=e;if(o.isRelative){ee(o,Ne,n);const i=n?.origin??e.origin;e.transform??(e.transform=new q),en(e.transform,o,t,i)}else{const i=te(r,n),s=n?.origin??e.origin;i?tn(e,t,s):nn(e,t,s)}}function en(e,t,n,r){const o=t.origin,i=_e(I,r.x,r.y,r.z),s=N(I,i,o);e.applyLocalInverse(s,Ae);const l=Ee(y(),e.scale,n);e.scale=l,e.applyLocalInverse(s,s),N(s,s,Ae),e.translation=Y(y(),e.translation,s)}function tn(e,t,n){const r=e.spatialReference,o=ae(r),i=We;S(n,i,o)||S(e.origin,i,o);const s=e.vertexAttributes.position,l=e.vertexAttributes.normal,c=e.vertexAttributes.tangent,a=new Float64Array(s.length),u=l!=null?new Float32Array(l.length):null,p=c!=null?new Float32Array(c.length):null;le(s,r,a),l!=null&&u!=null&&ce(l,s,a,r,u),c!=null&&p!=null&&ue(c,s,a,r,p),qe(a,t,i),pe(a,s,r),l!=null&&u!=null&&fe(u,s,a,r,l),c!=null&&p!=null&&he(p,s,a,r,c),e.vertexAttributesChanged()}function nn(e,t,n){const r=We;if(!S(n,r,e.spatialReference)){const o=e.origin;r[0]=o.x,r[1]=o.y,r[2]=o.z,m.getLogger(Ne).error(`Failed to project specified origin (wkid:${n.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}qe(e.vertexAttributes.position,t,r),e.vertexAttributesChanged()}function qe(e,t,n=ke){if(e)for(let r=0;r<e.length;r+=3){for(let o=0;o<3;o++)I[o]=e[r+o]-n[o];Ee(I,I,t);for(let o=0;o<3;o++)e[r+o]=I[o]+n[o]}}const I=y(),Ae=y(),We=y();var b;const R="esri.geometry.Mesh",rn={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:oe,"georeferenced-relative":ft,local:ie}};let v=b=class extends ot(it.LoadableMixin(st(at))){constructor(e){super(e),this.components=null,this.vertexSpace=new oe,this.transform=null,this.metadata=new j,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new K,this.type="mesh"}initialize(){(this.metadata.externalSources.length===0||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when(()=>{this.handles.add(lt(()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map(e=>e.clone())}),()=>this._clearSources(),{once:!0,sync:!0}))})}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):this.metadata.displaySource?.extent!=null}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:n,vertexSpace:r}=this,o=n.position;if(o.length===0||e&&e.length===0)return new Re({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(r.type==="local"){const{_untransformedExtent:i,transform:s}=this;return yt(i,s,r,t)}if(r.type==="georeferenced-relative"){const{transform:i}=this,s=Oe({positions:o,transform:i,vertexSpace:r,inSpatialReference:t,outSpatialReference:t,local:!1});return H(s,t)}return H(o,t)}get _untransformedExtent(){return H(this.vertexAttributes.position,this.spatialReference)}get anchor(){const{vertexSpace:e}=this;if(e.isRelative)return e.getOriginPoint(this.spatialReference);const{center:t,zmin:n}=this._transformedExtent;return new L({x:t.x,y:t.y,z:n,spatialReference:this.spatialReference})}get origin(){const{vertexSpace:e}=this;return e.isRelative?e.getOriginPoint(this.spatialReference):this._transformedExtent.center}get extent(){return this.loaded||this.metadata?.displaySource?.extent==null?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this.loaded?(this.components||(this.components=[]),this.components.push(T.from(e)),this.notifyChange("components")):m.getLogger(this).error("addComponent()","Mesh must be loaded before applying operations")}removeComponent(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(t!==-1)return this.components.splice(t,1),void this.notifyChange("components")}m.getLogger(this).error("removeComponent()","Provided component is not part of the list of components")}else m.getLogger(this).error("removeComponent()","Mesh must be loaded before applying operations")}rotate(e,t,n,r){return ct(e,t,n,Se),Jt(this,Se,r),this}offset(e,t,n,r){return this.loaded?(Z[0]=e,Z[1]=t,Z[2]=n,Ot(this,Z,r),this):(m.getLogger(this).error("offset()","Mesh must be loaded before applying operations"),this)}scale(e,t){return this.loaded?(Yt(this,e,t),this):(m.getLogger(this).error("scale()","Mesh must be loaded before applying operations"),this)}centerAt(e,t){return this.loaded?(vt(this,e,t),this):(m.getLogger(this).error("centerAt()","Mesh must be loaded before applying operations"),this)}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Rt(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){let t=null;if(this.components){const r=new Map,o=new Map;t=this.components.map(i=>i.cloneWithDeduplication(r,o))}const n={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new b(n)}cloneShallow(){return new b({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=ne(()=>import("./gltfexport-97e0b18e.js"),["./gltfexport-97e0b18e.js","./index-cdda5707.js","./index-7772480e.css","./MeshGeoreferencedRelativeVertexSpace-78553062.js","./MeshLocalVertexSpace-7526bf91.js","./georeference-f88d775a.js","./MeshTransform-24e5f7d8.js","./imageutils-ec034daf.js"],import.meta.url),n=this.load(),r=await Promise.all([t,n]),{toBinaryGLTF:o}=r[0];return o(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,this.components!=null)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof L))return m.getLogger(R).error(".createBox()","expected location to be a Point instance"),null;const n=new b(G(Ut(),e,t));return t&&t.imageFace&&t.imageFace!=="all"?Tt(n,t.imageFace):n}static createSphere(e,t){return e instanceof L?new b(G(Bt(t&&t.densificationFactor||0),e,t)):(m.getLogger(R).error(".createSphere()","expected location to be a Point instance"),null)}static createCylinder(e,t){return e instanceof L?new b(G(Vt(t&&t.densificationFactor||0),e,t)):(m.getLogger(R).error(".createCylinder()","expected location to be a Point instance"),null)}static createPlane(e,t){if(!(e instanceof L))return m.getLogger(R).error(".createPlane()","expected location to be a Point instance"),null;const n=t?.facing??"up",r=Nt(n,t?.size);return new b(G(qt(n),e,{...t,size:r}))}static createFromPolygon(e,t){if(!(e instanceof ut))return m.getLogger(R).error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=pt(e);return new b({vertexAttributes:new K({position:n.position}),components:[new T({faces:n.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new oe})}static async createFromGLTF(e,t,n){if(!(e instanceof L))throw m.getLogger(R).error(".createfromGLTF()","expected location to be a Point instance"),new C("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:r}=await Fe(ne(()=>import("./loadGLTFMesh-a4954a2d.js"),["./loadGLTFMesh-a4954a2d.js","./index-cdda5707.js","./index-7772480e.css","./georeference-f88d775a.js","./MeshGeoreferencedRelativeVertexSpace-78553062.js","./MeshLocalVertexSpace-7526bf91.js","./MeshTransform-24e5f7d8.js"],import.meta.url),n);return new b(await r(e,t,n))}static async createFromFiles(e,t,n){if(!(e instanceof L)){const s="Expected location to be a Point instance";throw m.getLogger(R).error(".createFromFiles()",s),new C("invalid-input",s)}const r=b.createWithExternalSource(e,t),o=n?.layer;if(!o){const s="A layer is needed to convert the files";throw m.getLogger(R).error(".createFromFiles()",s),new C("invalid-input",s)}const[i]=await o.uploadAssets([r],n);return i}static createWithExternalSource(e,t,n){const r=n?.extent??null,{x:o,y:i,z:s,spatialReference:l}=e,c=n?.transform?.clone()??new q,a=n?.vertexSpace??new ie({origin:[o,i,s??0]}),u={source:t,extent:r},p=new j;return p.externalSources.push(u),new b({metadata:p,transform:c,vertexSpace:a,spatialReference:l})}static createIncomplete(e,t){const{x:n,y:r,z:o,spatialReference:i}=e,s=t?.transform?.clone()??new q,l=t?.vertexSpace??new ie({origin:[n,r,o??0]}),c=new b({transform:s,vertexSpace:l,spatialReference:i});return c.addResolvingPromise(Promise.reject(new C("mesh-incomplete","Mesh resources are not complete"))),c}};d([x({type:[T],json:{write:!0}})],v.prototype,"components",void 0),d([x({nonNullable:!0,types:rn,constructOnly:!0,json:{write:!0}})],v.prototype,"vertexSpace",void 0),d([x({type:q,json:{write:!0}})],v.prototype,"transform",void 0),d([x({constructOnly:!0})],v.prototype,"metadata",void 0),d([x()],v.prototype,"hasExtent",null),d([x()],v.prototype,"_transformedExtent",null),d([x()],v.prototype,"_untransformedExtent",null),d([x()],v.prototype,"anchor",null),d([x()],v.prototype,"origin",null),d([x({readOnly:!0,json:{read:!1}})],v.prototype,"extent",null),d([x({readOnly:!0,json:{read:!1,write:!0,default:!0}})],v.prototype,"hasZ",void 0),d([x({readOnly:!0,json:{read:!1,write:!0,default:!1}})],v.prototype,"hasM",void 0),d([x({type:K,nonNullable:!0,json:{write:!0}})],v.prototype,"vertexAttributes",void 0),v=b=d([Me(R)],v);const Z=y(),Se=ge(),fn=v;export{fn as default};
