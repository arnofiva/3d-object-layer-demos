import{cd as ye,aD as c,aE as d,eW as he,aF as W,cR as G,au as q,dw as ge,az as fe,lc as me,eV as Ee,mg as A,mh as we,dy as U,bA as Z,eY as Se,eZ as z,mi as _e,mj as be,gG as Fe,cI as Re,mk as ve,ml as Ie,e2 as ie,gr as xe,ew as Oe,b2 as $e,mm as je,cJ as Qe,mn as T,iE as k,d7 as D,bg as B,cx as Me,aT as Ce,aV as H,dk as Te,aB as X,dR as ke,lh as De,lj as Y,cF as L,d2 as Ne,bi as Ae,hQ as Ge,mo as Je}from"./main-79e5ed80.js";import{a as Q,n as ee,u as te}from"./DefinitionExpressionSceneLayerView-e46f6be9.js";import{f as Ve}from"./WhereClause-ae8c5a06.js";import{e as Pe}from"./QueryEngine-360bd3bb.js";import{t as Be}from"./centroid-3dcadaf5.js";import{I as C}from"./I3SMeshView3D-1d7d8215.js";const ae="esri.views.3d.layers.i3s.I3SMeshViewFilter",$=ye.getLogger(ae);let g=class extends q{constructor(t){super(t),this._projectionEngineLoaded=!1}initialize(){ge(()=>this.viewFilter?.geometry||this.layerFilter!=null).then(()=>this.loadAsyncModule(fe(()=>import("./geometryEngine-547e4a01.js"),["./geometryEngine-547e4a01.js","./geometryEngineBase-d69ff1ad.js","./main-79e5ed80.js","./main-7772480e.css","./hydrated-e6cbef23.js"],import.meta.url).then(t=>{this.destroyed||(this._geometryEngine=t)})))}get sortedObjectIds(){if(this.viewFilter==null||this.viewFilter.objectIds==null)return null;const t=me(this.viewFilter.objectIds);return t.sort(),t}get parsedWhereClause(){const t=this.viewFilter!=null?this.viewFilter.where:null;if(t==null||!t)return null;try{return Ve.create(t,this.layerFieldsIndex)}catch(e){$.error(`Failed to parse filter where clause: ${e}`)}return null}addFilters(t,e,r,s){const n=this.sortedObjectIds;n!=null&&t.push(o=>Ee(n,!0,o)),this.addSqlFilter(t,this.parsedWhereClause);const i=Q(this._layerMaskGeometries),a=this._geometryEngine;if(i!=null&&this.layerFilter!=null&&a!=null){const o=this.layerFilter.spatialRelationship;t.push((u,h)=>ne(a,u,h,s,e,r,i,o))}const l=Q(this._viewMaskGeometries);if(l!=null&&this.viewFilter!=null&&a!=null){const o=this.viewFilter.spatialRelationship;t.push((u,h)=>ne(a,u,h,s,e,r,l,o))}}isMBSGeometryVisible(t,e,r){const s=Q(this._layerMaskGeometries),n=this._geometryEngine;if(s!=null&&this.layerFilter!=null&&n!=null){const a=this.layerFilter.spatialRelationship,l=s[0].spatialReference||e;return A(t,r,M,l)?re(n,M,s,l,a):($.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const i=Q(this._viewMaskGeometries);if(i!=null&&this.viewFilter!=null&&n!=null){const a=this.viewFilter.spatialRelationship,l=i[0].spatialReference||e;return A(t,r,M,l)?re(n,M,i,l,a):($.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const t=Q(this._viewMaskGeometries),e=Q(this._layerMaskGeometries);return t==null||e==null?t||e:e.concat(t)}get _layerMaskGeometries(){const t=this.layerFilter;return t==null?null:this._geometryEngine==null?ee:t.spatialRelationship==="disjoint"?t.geometries.map(e=>({type:"polygon",rings:e.rings,spatialReference:e.spatialReference,cache:{}})):[t.geometries.reduce((e,r)=>(e.rings=[...e.rings,...r.rings],e),{type:"polygon",rings:[],spatialReference:t.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(this.viewFilter==null)return null;const{geometry:t}=this.viewFilter;if(t==null)return null;if(this.viewFilter==null||this._geometryEngine==null)return ee;const{distance:e,units:r}=this.viewFilter,s=this.viewFilter.spatialRelationship,n=t.type==="mesh"?t.extent:t;if(e==null||e===0)return N(this._geometryEngine,n,s);const i=r||we(n.spatialReference);if(n.spatialReference.isWGS84){const o=this._geometryEngine.geodesicBuffer(n,e,i);return N(this._geometryEngine,o,s)}const a=U(n,Z.WGS84);if(a!=null){const o=U(this._geometryEngine.geodesicBuffer(a,e,i),n.spatialReference);return N(this._geometryEngine,o,s)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(Se().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let l=null;try{l=z(n,Z.WGS84)}catch{}if(l)try{l=z(this._geometryEngine.geodesicBuffer(l,e,i),n.spatialReference)}catch{l=null}return l||$.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),N(this._geometryEngine,l,s)}get updating(){return te(this._layerMaskGeometries)||te(this._viewMaskGeometries)}static checkSupport(t){return t!=null&&(t.timeExtent?($.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!Le(t.spatialRelationship)||($.warn(`Filters with spatialRelationship other than ${oe.join(", ")} are not supported for mesh scene layers`),!1))}};c([d()],g.prototype,"layerFilter",void 0),c([d({type:he})],g.prototype,"viewFilter",void 0),c([d()],g.prototype,"layerFieldsIndex",void 0),c([d()],g.prototype,"loadAsyncModule",void 0),c([d()],g.prototype,"addSqlFilter",void 0),c([d({readOnly:!0})],g.prototype,"sortedObjectIds",null),c([d({readOnly:!0})],g.prototype,"parsedWhereClause",null),c([d({readOnly:!0})],g.prototype,"parsedGeometry",null),c([d({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),c([d({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),c([d()],g.prototype,"updating",null),c([d()],g.prototype,"_projectionEngineLoaded",void 0),c([d()],g.prototype,"_geometryEngine",void 0),g=c([W(ae)],g);const oe=(t=>t)(["contains","intersects","disjoint"]);function Le(t){return t!=null&&oe.includes(t)}var y;function N(t,e,r){if(e==null)return null;if(r==="disjoint"&&e.type==="polygon"){const s=e.rings.length,n=e.spatialReference,i=new Array(s);for(let o=0;o<s;++o){const u=_e(1/0,1/0,-1/0,-1/0);be(u,e.rings[o]),i[o]={type:"polygon",rings:[e.rings[o]],spatialReference:n,cache:{},aabr:u}}i.sort((o,u)=>o.aabr[0]-u.aabr[0]);const a=new Set,l=new Qe;for(let o=0;o<i.length;++o){const u=i[o],h=u.aabr[0];a.forEach(p=>{if(h>=p.aabr[2])return void a.delete(p);if(u.aabr[1]>p.aabr[3]||u.aabr[3]<p.aabr[1]||!t.intersects(u,p))return;u.rings=u.rings.concat(p.rings),Fe(u.aabr,p.aabr,u.aabr),u.cache={},a.delete(p);const m=Re(i,p,i.length,l);i.splice(m,1)}),a.add(u)}for(const o of i)o.aabr=void 0;return i}return[e]}function re(t,e,r,s,n){if(e[3]>=.5*(e[2]+ve(s).radius))return!0;const i=le(t,e,s);return r.every(a=>ue(t,a,i,n)!==y.DISCARD)}function ne(t,e,r,s,n,i,a,l){const o=a[0].spatialReference||n.spatialReference;if(!A(r.node.mbs,i,M,o))return void $.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const u=le(t,M,o),h=Ke(l,n,o,s,r.objectHandle);for(const p of a){if(e.length===0)return;switch(ue(t,p,u,l)){case y.DISCARD:return void(e.length=0);case y.KEEP:continue}Ie(e,r.featureIds,m=>We(t,p,m,h))}}(function(t){t[t.KEEP=0]="KEEP",t[t.DISCARD=1]="DISCARD",t[t.TEST=2]="TEST"})(y||(y={}));const M=ie(0,0,0,0);function Ke(t,e,r,s,n){const i=e.renderSpatialReference,a=new Map,l={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};l.rings[0][3]=l.rings[0][0];const o={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let u,h;switch(t){case"intersects":u=(p,m,b)=>p.intersects(m,b)?y.KEEP:y.TEST,h=K;break;case"contains":u=(p,m,b)=>p.contains(m,b)?y.TEST:y.DISCARD,h=K;break;default:u=(p,m,b)=>p.disjoint(m,b)?y.TEST:y.DISCARD,h=ce}return{collection:s,object:n,type:t,maskSR:r,renderSR:i,aabbCache:a,triangle:l,positions:o,triangleTest:u,geometryTest:h}}function le(t,e,r){const s={type:"point",x:e[0],y:e[1],hasZ:!1,hasM:!1,spatialReference:r},n=!xe(r)&&!Oe(r),i=Number.isNaN(e[3])?0:$e(e[3],0,2*je.radius),a=n?t.buffer(s,i,1):t.geodesicBuffer(s,i,1);return a.type="polygon",a}function ue(t,e,r,s){switch(s){case"intersects":case"contains":return K(t,e,r);case"disjoint":return ce(t,e,r)}}function K(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.KEEP:y.TEST:y.DISCARD}function ce(t,e,r){return t.intersects(e,r)?t.contains(e,r)?y.DISCARD:y.TEST:y.KEEP}function We(t,e,r,s){const{collection:n,object:i,renderSR:a,maskSR:l,geometryTest:o,aabbCache:u}=s;let h=u.get(r);if(!h){const F=n.getObjectTransform(i);n.getComponentAabb(i,r,_);const E=[[_[0],_[1],0],[_[0],_[4],0],[_[3],_[4],0],[_[3],_[1],0]];for(let f=0;f<4;++f)T(E[f],E[f],F.rotationScale),k(E[f],E[f],F.position),D(E[f],a,E[f],l);h={type:"polygon",rings:[E],spatialReference:l,cache:{}},h.rings[0][4]=h.rings[0][0],u.set(r,h)}switch(o(t,e,h)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:p,triangleTest:m,positions:b}=s,v=p.rings[0][0],I=p.rings[0][1],x=p.rings[0][2],j=n.getObjectTransform(i);n.getComponentPositions(i,r,b);const{indices:J,data:S,stride:V,startIndex:de,endIndex:pe}=b;for(let F=de;F<pe;F+=3){const E=V*J[F],f=V*J[F+1],P=V*J[F+2];switch(B(v,S[E],S[E+1],S[E+2]),B(I,S[f],S[f+1],S[f+2]),B(x,S[P],S[P+1],S[P+2]),T(v,v,j.rotationScale),T(I,I,j.rotationScale),T(x,x,j.rotationScale),k(v,v,j.position),k(I,I,j.position),k(x,x,j.position),D(v,a,v,l),D(I,a,I,l),D(x,a,x,l),m(t,e,p)){case y.DISCARD:return!1;case y.KEEP:return!0}}return s.type!=="intersects"}const _=G(),qe=Pe;let R=class extends q{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new Me({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._handles=new Ce}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=H(this._dataQueryEngineInstance),this._handles=H(this._handles),this._set("layerView",null)}async executeQueryForCount(e,r){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),r)}async executeQueryForExtent(e,r){const{count:s,extent:n}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),r);return{count:s,extent:Te.fromJSON(n)}}async executeQueryForIds(e,r){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),r)}async executeQuery(e,r){const s=this._ensureQueryJSON(e);if(s.returnGeometry)throw new X("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(s.returnCentroid)throw new X("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const n=await this._dataQueryEngine.executeQuery(s,r),i=ke.fromJSON(n);return i.features.forEach(a=>{a.geometry=null}),i}_ensureQueryJSON(e){return e==null?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||De,r="esriGeometryPolygon",s=this.layer.fields?.map(o=>o.toJSON())??[],n=this.layerView.view.resourceController.scheduler,i=this.spatialReference.toJSON(),a=this.priority,l=this.spatialIndex;return this._dataQueryEngineInstance=new qe({hasZ:!0,hasM:!1,geometryType:r,fields:s,timeInfo:null,spatialReference:i,objectIdField:e,featureStore:l,scheduler:n,priority:a}),this._dataQueryEngineInstance}};c([d({constructOnly:!0})],R.prototype,"layerView",void 0),c([d({constructOnly:!0})],R.prototype,"priority",void 0),c([d({constructOnly:!0})],R.prototype,"spatialIndex",void 0),c([d()],R.prototype,"spatialReference",null),c([d()],R.prototype,"layer",null),c([d()],R.prototype,"defaultQueryJSON",null),R=c([W("esri.views.3d.layers.i3s.I3SQueryEngine")],R);class st{constructor(e){this._objectIdField=e.objectIdField,this._getFeatureExtent=e.getFeatureExtent}getObjectId(e){return e.id}getAttributes(e){const{meta:r,index:s}=e,n={};this._objectIdField&&(n[this._objectIdField]=e.id);const i=r.attributeInfo?.attributeData;if(i!=null)for(const a of Object.keys(i))n[a]=Y(i[a],s);return n}getAttribute(e,r){if(r===this._objectIdField)return e.id;const{meta:s,index:n}=e,i=s.attributeInfo?.attributeData;return i!=null?Y(i[r],n):null}getGeometry(e){if(e.geometry)return e.geometry;const[r,s,n,i,a]=this._getFeatureExtent(e,se);return new L([5],[r,s,n,i,s,n,i,a,n,r,a,n,r,s,n])}getCentroid(e,r){if(e.geometry)return Be(new L,e.geometry,r.hasZ,r.hasM);const[s,n,i,a,l,o]=this._getFeatureExtent(e,se);return new L([0],[(s+a)/2,(n+l)/2,(i+o)/2])}cloneWithGeometry(e,r){const{id:s,index:n,meta:i}=e;return{id:s,index:n,meta:i,geometry:r}}}const se=G(),Ue=G();let O=class extends q{constructor(t){super(t),this.events=new Ae}forEach(t){this.forAllFeatures(e=>(t(e),C.CONTINUE))}forEachBounds(t,e){const r=this.getFeatureExtent;for(const s of t)e(r(s,Ue))}forEachInBounds(t,e){this.forAllFeatures(r=>{const s=this.getFeatureExtent(r,Ze);return Ge(t,Je(s,ze))&&e(r),C.CONTINUE},r=>{if(A(r.node.mbs,this.sourceSpatialReference,w,this.viewSpatialReference),w[0]>=t[0]&&w[2]<=t[2]&&w[1]>=t[1]&&w[3]<=t[3])return C.CONTINUE;const s=Math.max(t[0],Math.min(w[0],t[2])),n=Math.max(t[1],Math.min(w[1],t[3])),i=w[0]-s,a=w[1]-n;return i*i+a*a<=w[3]*w[3]?C.CONTINUE:C.SKIP})}};c([d({constructOnly:!0})],O.prototype,"featureAdapter",void 0),c([d({constructOnly:!0})],O.prototype,"forAllFeatures",void 0),c([d({constructOnly:!0})],O.prototype,"getFeatureExtent",void 0),c([d({constructOnly:!0})],O.prototype,"sourceSpatialReference",void 0),c([d({constructOnly:!0})],O.prototype,"viewSpatialReference",void 0),O=c([W("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],O);const w=ie(0,0,0,0),Ze=G(),ze=Ne();export{g as L,R as d,O as l,st as o};