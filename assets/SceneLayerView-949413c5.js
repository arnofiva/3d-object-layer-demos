import{ca as B,nz as S,eI as K,aD as c,aF as U,aE as p,cd as L,nH as H,au as Y,nI as Q,nA as X,nC as Z,cn as J,eZ as W,cD as ee,dm as te,dw as M,fm as C,az as ne,aH as T,eX as re,eY as se,aC as ie}from"./main-79e5ed80.js";import{n as A}from"./FeatureLikeLayerView3D-0a06e10d.js";import{a as oe,n as ae,u as le}from"./DefinitionExpressionSceneLayerView-e46f6be9.js";import{d as ue}from"./LayerView-535107ac.js";const de={setAttribute(){},setGeometry(e){},rollback(){},commit(){}};var _;function _e(e,n){const t=n.attributes[e.objectIdField],r=e.sessions.get(t);if(r)return r;const s=B(n.attributes),o=new Set;if(t==null)return de;const u=e.i3sOverrides.createInteractiveEditSession(t),i=new Map,y=(m,f)=>{const l=i.get(m);if(l==null){const d=f.indexOf(t);return i.set(m,d),d}return l};let a=_.EDITING;const g={setAttribute(m,f){if(a!==_.EDITING)return;const l=e.fieldsIndex.get(m);if(!l)return;const d=e.attributeStorageInfo.findIndex(I=>I.name===l.name);if(d<0)return;u.setAttribute(d,f);const h=e.attributeStorageInfo[d];let w=!1;o.add(m),e.forEachNode((I,E)=>{const O=y(I,E);if(O===-1)return;const v=e.getAttributeData(I.index);if(v){const N=v[h.name];N&&(N[O]=f,e.setAttributeData(I.index,v,n),w=!0)}}),w&&e.clearMemCache()},setGeometry(m){a===_.EDITING&&u.setGeometry(m)},rollback(){if(a===_.EDITING){for(const m of o)this.setAttribute(m,s[m]);u.rollback(),a=_.ROLLED_BACK,e.sessions.delete(t)}},commit(){a===_.EDITING&&(u.commit(),a=_.COMMITTED,e.sessions.delete(t))}};return e.sessions.set(t,g),g}function Ee(e,n){const t=e.fieldsIndex,r=e.objectIdField,s=e.globalIdField;if(s==null)return;const o=new Map,u=P(n.addedFeatures),i=n.edits.addFeatures,y=D(n.updatedFeatures),a=n.edits.updateFeatures,g=ge(t,r,s,n.edits?.deleteFeatures),m=D(n.deletedFeatures,g),f=n.edits.deleteFeatures;if(i!=null&&i.length>0)for(const l of i){const d=A(t,l.attributes,s),h=u.get(d);l.geometry!=null&&l.geometry.type==="mesh"&&h!=null&&o.set(h,l.geometry)}if(a!=null&&a.length>0)for(const l of a){const d=A(t,l.attributes,r);l.geometry!=null&&l.geometry.type==="mesh"&&y.has(d)&&o.set(d,l.geometry)}if(f!=null&&f.length>0)for(const l of f){let d=null;d="attributes"in l?A(t,l.attributes,r):l.objectId,d!=null&&m.has(d)&&o.set(d,null)}for(const[l,d]of o)e.i3sOverrides.updateGeometry(l,d)}function xe(e,n){const t=fe(e,n),r=ce(e,n);if(t.size===0&&r.size===0)return;const s=new Map;for(let f=0;f<e.attributeStorageInfo.length;f++)s.set(e.attributeStorageInfo[f].name,f);let o=!1;t.forEach((f,l)=>{const d=e.getAttributeData(l);let h=!1;f.forEach((w,I)=>{const E=d!=null?d[I]:null,O=s.get(I);for(const{featureIndex:v,value:N,featureId:z}of w)E&&(E[v]=N,h=!0,o=!0),e.i3sOverrides.updateAttributeValue(z,O,N)}),h&&e.setAttributeData(l,d,null)}),o&&e.clearMemCache();const{fieldsIndex:u,i3sOverrides:i,objectIdField:y,globalIdField:a}=e,g=i.layer.associatedLayer?.infoFor3D,m=new Set(g?[...Object.values(g.assetMapFieldRoles),...Object.values(g.transformFieldRoles)]:[]);for(const[f,l]of r){i.featureAdded(f);const{attributes:d}=l;for(const h in d){if(h!==y&&h!==a&&m.has(h))continue;const w=u.normalizeFieldName(h),I=w!=null?s.get(w):null;if(I==null)continue;const E=d[h];i.updateAttributeValue(f,I,E)}}}function ce(e,{edits:n,addedFeatures:t}){const r=new Map,s=n.addAssetFeatures,{fieldsIndex:o,globalIdField:u}=e;if(!s||s.length===0||u==null)return r;const i=P(t);for(const y of s){const a=A(o,y.attributes,u),g=i.get(a);y.geometry!=null&&y.geometry.type==="mesh"&&g!=null&&r.set(g,y)}return r}function fe(e,n){const t=n.edits.updateFeatures;if(!t||t.length===0)return new R;const r=D(n.updatedFeatures),s=new R,o=new Map;for(let a=0;a<e.attributeStorageInfo.length;a++)o.set(e.attributeStorageInfo[a].name,a);const u=e.fieldsIndex,i=e.objectIdField,y=t.filter(a=>{const g=A(u,a.attributes,i);return r.has(g)});return e.forEachNode((a,g)=>{const m=new Set(g);for(const f of y){const l=A(u,f.attributes,i);if(!m.has(l))continue;const d=g.indexOf(l);for(const h in f.attributes){const w=e.fieldsIndex.normalizeFieldName(h),I=pe(s,a.index,w),E=f.attributes[h];I.push({featureIndex:d,featureId:l,value:E})}}}),s}function pe(e,n,t){const r=ye(e,n),s=t!=null&&r.get(t);if(s)return s;const o=new Array;return r.set(t,o),o}function ye(e,n){const t=e.get(n);if(t)return t;const r=new me;return e.set(n,r),r}function ge(e,n,t,r){const s=new Map;if(!r)return s;for(const o of r){let u=null,i=null;"attributes"in o?(u=A(e,o.attributes,n),i=A(e,o.attributes,t)):(u=o.objectId,i=o.globalId),i!=null&&u!=null&&s.set(i,u)}return s}function P(e){const n=new Map;if(!e)return n;for(const t of e)t.globalId!=null&&t.objectId!=null&&t.error==null&&n.set(t.globalId,t.objectId);return n}function D(e,n=null){const t=new Set;if(!e)return t;for(const r of e)if(r.error==null){if(r.objectId!=null&&r.objectId!==-1)t.add(r.objectId);else if(r.globalId!=null&&n!=null){const s=n.get(r.globalId);s!=null&&t.add(s)}}return t}(function(e){e[e.EDITING=0]="EDITING",e[e.ROLLED_BACK=1]="ROLLED_BACK",e[e.COMMITTED=2]="COMMITTED"})(_||(_={}));const me=Map,R=Map;function Ae(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,get:function(){const{layer:e,layer:{fieldsIndex:n},requiredFields:t}=this;return e.outFields?S(n,[...K(n,e.outFields),...t]):S(n,t)}}}}const G=e=>{let n=class extends e{constructor(){super(...arguments),this._numUpdating=0,this._asyncUpdateState=new Map}get updating(){return this._numUpdating>0}autoUpdateAsync(t,r){return he(s=>this._updateAsync(t,s),r)}async _updateAsync(t,r){if(!this._startAsyncUpdate(t)){try{const s=await r();this._set(t,s)}catch{L.getLogger(this).warn(`Async update of "${String(t)}" failed. Async update functions should not throw exceptions.`)}this._endAsyncUpdate(t)&&this._updateAsync(t,r)}}_startAsyncUpdate(t){const r=this._asyncUpdateState.get(t)??F.None;return r&F.Updating?(this._asyncUpdateState.set(t,r|F.Invalidated),!0):(++this._numUpdating,this._asyncUpdateState.set(t,r|F.Updating),!1)}_endAsyncUpdate(t){--this._numUpdating;const r=(this._asyncUpdateState.get(t)??F.None)&~F.Updating;return r&F.Invalidated?(this._asyncUpdateState.set(t,r&~F.Invalidated),!0):(this._asyncUpdateState.set(t,r),!1)}};return c([p({readOnly:!0})],n.prototype,"updating",null),c([p()],n.prototype,"_numUpdating",void 0),n=c([U("esri.core.AsyncUpdate")],n),n};var F;function he(e,n){const t=()=>{o&&!u&&e(r)},r=()=>{if(!o||u)return n();o.clear(),u=!0;const i=Q(o,n);return u=!1,i},s=()=>{o&&(o.destroy(),o=null)};let o=new H(t),u=!1;return e(r),{remove:s}}(function(e){e[e.None=0]="None",e[e.Updating=1]="Updating",e[e.Invalidated=2]="Invalidated"})(F||(F={}));let q=class extends G(Y){};q=c([U("esri.core.AsyncUpdate")],q);const V="esri.views.3d.layers.support.SceneLayerViewRequiredFields";let x=class extends G(J){get layer(){return this.layerView.layer}get requiredFields(){const{layerView:{layer:{fieldsIndex:e},definitionExpressionFields:n},rendererFields:t,labelingFields:r,viewFilterFields:s}=this;return S(e,[...n??[],...t??[],...r??[],...s??[]])}constructor(e){super(e)}initialize(){this.handles.add([this.autoUpdateAsync("rendererFields",async()=>{const{fieldsIndex:e,renderer:n}=this.layer;return n?j(t=>n.collectRequiredFields(t,e)):null}),this.autoUpdateAsync("labelingFields",async()=>{const{layer:e}=this;return e.labelsVisible?j(n=>X(n,e)):null}),this.autoUpdateAsync("viewFilterFields",()=>{const{layer:e,filter:n}=this.layerView;return j(t=>Z(t,e,n))})])}};async function j(e){const n=new Set;try{return await e(n),Array.from(n).sort()}catch(t){return L.getLogger(V).error(t),null}}c([p()],x.prototype,"layerView",void 0),c([p()],x.prototype,"layer",null),c([p()],x.prototype,"requiredFields",null),c([p()],x.prototype,"rendererFields",void 0),c([p()],x.prototype,"labelingFields",void 0),c([p()],x.prototype,"viewFilterFields",void 0),x=c([U(V)],x);const k="esri.views.layers.SceneLayerView",$=L.getLogger(k);let b=class extends ue{constructor(){super(...arguments),this.layer=null,this.filter=null,this._geometryEngine=null,this._projectionEngineLoaded=!1,this._abortController=new AbortController}get availableFields(){return[]}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){throw new Error("Not implemented")}get maximumNumberOfFeaturesExceeded(){return!1}get layerFilter(){return oe(this._layerFilter)}get _layerFilter(){const e=this.layer.filter;if(e==null||e.geometries.length<1)return null;const n=this._geometryEngine;if(n==null||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine)return ae;const t=e.geometries.at(0).spatialReference,r=e.geometries.toArray().map(i=>{try{i=n.simplify(i)}catch{return $.warnOncePerTick("Failed to simplify scene filter mask polygon. Polygon will be ignored."),null}if(i==null)return null;if(i.spatialReference.equals(t))return i;try{return W(i,t)}catch{return $.warnOncePerTick("Failed to project scene filter mask polygon. Polygon will be ignored."),null}}).filter(ee).sort((i,y)=>i.extent.xmin-y.extent.xmin),s=new Set,o=new Array,u=new Array;for(let i of r){const y=i.extent.xmin;if(o.length=0,s.forEach(a=>{if(y>=a.extent.xmax)return u.push(a),void s.delete(a);i.extent.ymin<=a.extent.ymax&&i.extent.ymax>=a.extent.ymin&&n.intersects(i,a)&&o.push(a)}),o.length>0){o.push(i);try{i=n.union(o)}catch{$.warnOncePerTick("Failed to unify filter mask polygons. Polygon will be ignored.");continue}o.pop(),o.forEach(a=>s.delete(a))}s.add(i)}return s.forEach(i=>u.push(i)),u.length>0?{spatialRelationship:e.spatialRelationship,geometries:u}:null}get _filterNeedsProjectionEngine(){const e=this.layer.filter;if(e==null||e.geometries.length<=1)return!1;const n=e.geometries.at(0).spatialReference;return e.geometries.some(({spatialReference:t})=>!t.equals(n)&&!te(t,n))}get layerFilterUpdating(){return le(this._layerFilter)}initialize(){const{signal:e}=this._abortController;M(()=>this.destroyed||!this._geometryEngine&&this.layer?.filter?.geometries?.length,e).then(async()=>{C(e),this._geometryEngine=await ne(()=>import("./geometryEngine-547e4a01.js"),["./geometryEngine-547e4a01.js","./geometryEngineBase-d69ff1ad.js","./main-79e5ed80.js","./main-7772480e.css","./hydrated-e6cbef23.js"],import.meta.url)}).catch(T),this._projectionEngineLoaded=re(),M(()=>this.destroyed||!this._projectionEngineLoaded&&this._filterNeedsProjectionEngine,e).then(async()=>{C(e),await se(),this._projectionEngineLoaded=!0}).catch(T)}destroy(){this._abortController=ie(this._abortController)}highlight(e){throw new Error("Not implemented")}queryFeatures(e,n){throw new Error("Not implemented")}queryObjectIds(e,n){throw new Error("Not implemented")}queryFeatureCount(e,n){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(e,n){throw new Error("Not implemented")}};c([p()],b.prototype,"layer",void 0),c([p()],b.prototype,"availableFields",null),c([p()],b.prototype,"maximumNumberOfFeatures",null),c([p({readOnly:!0})],b.prototype,"maximumNumberOfFeaturesExceeded",null),c([p()],b.prototype,"filter",void 0),c([p({readOnly:!0})],b.prototype,"layerFilter",null),c([p({readOnly:!0})],b.prototype,"_layerFilter",null),c([p()],b.prototype,"_geometryEngine",void 0),c([p()],b.prototype,"_projectionEngineLoaded",void 0),c([p()],b.prototype,"_filterNeedsProjectionEngine",null),c([p()],b.prototype,"layerFilterUpdating",null),b=c([U(k)],b);const Ne=b;export{Ae as i,Ne as j,xe as l,x as p,_e as r,Ee as s};