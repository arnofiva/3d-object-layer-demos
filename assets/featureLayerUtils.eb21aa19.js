import{ab as L,bZ as m,qY as w,bD as q,N as n,qZ as F,q_ as D,db as R,aE as _,t as Y,q$ as z,bC as B,pP as C,r as $}from"./vendor.fd144a9e.js";import{fetchFeatureService as M}from"./arcgisLayers.7b58f6cd.js";import{o as b}from"./jsonContext.121263b5.js";import{i as f,a as U,c as g,f as d}from"./portalItemUtils.9f9da5a3.js";import"./lazyLayerLoader.a407b7a5.js";const j=L.getLogger("esri.layers.FeatureLayer"),y="Feature Service";function c(a,e){return`Layer (title: ${a.title}, id: ${a.id}) of type '${a.declaredClass}' ${e}`}function E(a,e){if(e.type!==y)throw new n("feature-layer:portal-item-wrong-type",c(a,`should have portal item of type "${y}"`))}async function J(a){if(await a.load(),F(a))throw new n("feature-layer:save",c(a,"using an in-memory source cannot be saved to a portal item"))}function G(a,e){let t=a.messages.filter(({type:r})=>r==="error").map(({name:r,message:s,details:o})=>new n(r,s,o));if((e==null?void 0:e.ignoreUnsupported)&&(t=t.filter(({name:r})=>r!=="layer:unsupported"&&r!=="symbol:unsupported"&&r!=="symbol-layer:unsupported"&&r!=="property:unsupported"&&r!=="url:unsupported")),t.length>0)throw new n("feature-layer:save","Failed to save feature layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:t})}async function v(a,e,t){"beforeSave"in a&&typeof a.beforeSave=="function"&&await a.beforeSave();const r=a.write({},e);return G(e,t),r}function O(a){const{layer:e,layerJSON:t}=a;return e.isTable?{layers:[],tables:[t]}:{layers:[t],tables:[]}}function h(a){f(a,d.JSAPI),a.typeKeywords&&(a.typeKeywords=a.typeKeywords.filter((e,t,r)=>r.indexOf(e)===t))}function Z(a){const e=a.portalItem;if(!e)throw j.error("save: requires the portalItem property to be set"),new n("feature-layer:portal-item-not-set",c(a,"requires the portalItem property to be set"));if(!e.loaded)throw new n("feature-layer:portal-item-not-loaded",c(a,"cannot be saved to a portal item that does not exist or is inaccessible"));E(a,e)}async function P(a,e){return/\/\d+\/?$/.test(a.url)?O(e[0]):k(a,e)}async function k(a,e){const{layer:{url:t,customParameters:r,apiKey:s}}=e[0];let o=await a.fetchData("json");o&&o.layers!=null&&o.tables!=null||(o=await H(o,{url:t,customParameters:r,apiKey:s},e.map(l=>l.layer.layerId)));for(const l of e)T(l.layer,l.layerJSON,o);return o}async function H(a,e,t){var r,s;a||(a={}),(r=a).layers||(r.layers=[]),(s=a).tables||(s.tables=[]);const{url:o,customParameters:l,apiKey:i}=e,{serviceJSON:u,layersJSON:p}=await M(o,{customParameters:l,apiKey:i}),S=N(a.layers,u.layers,t),I=N(a.tables,u.tables,t);a.layers=S.itemResources,a.tables=I.itemResources;const x=[...S.added,...I.added],K=p?[...p.layers,...p.tables]:[];return await Q(a,x,o,K),a}function N(a,e,t){const r=D(a,e,(o,l)=>o.id===l.id);a=a.filter(o=>!r.removed.some(l=>l.id===o.id));const s=r.added.map(({id:o})=>({id:o}));return s.forEach(({id:o})=>{a.push({id:o})}),{itemResources:a,added:s.filter(({id:o})=>!t.includes(o))}}async function Q(a,e,t,r){const s=e.map(({id:o})=>new R({url:t,layerId:o,sourceJSON:r.find(({id:l})=>l===o)}));await _(s.map(o=>o.load())),s.forEach(o=>{const{layerId:l,loaded:i,defaultPopupTemplate:u}=o;!i||Y(u)||T(o,{id:l,popupInfo:u.toJSON()},a)})}function T(a,e,t){a.isTable?A(t.tables,e):A(t.layers,e)}function A(a,e){const t=a.findIndex(({id:r})=>r===e.id);t===-1?a.push(e):a[t]=e}function V(a){const{portalItem:e}=a;return z(a)&&!a.dynamicDataSource&&!!(e==null?void 0:e.loaded)&&e.type===y}async function W(a){if(!(a==null?void 0:a.length))throw new n("feature-layer-utils-saveall:missing-parameters","'layers' array should contain at least one feature layer");await Promise.all(a.map(r=>r.load()));for(const r of a)if(!V(r))throw new n("feature-layer-utils-saveall:invalid-parameters",`'layers' array should only contain layers or tables in a feature service loaded from 'Feature Service' item. ${c(r,"does not conform")}`,{layer:r});const e=a.map(r=>r.portalItem.id);if(new Set(e).size>1)throw new n("feature-layer-utils-saveall:invalid-parameters","All layers in the 'layers' array should be loaded from the same portal item");const t=a.map(r=>r.layerId);if(new Set(t).size!==t.length)throw new n("feature-layer-utils-saveall:invalid-parameters","'layers' array should contain only one instance each of layer or table in a feature service")}function X(a,e){var o,l;var t,r;let s=B.from(e);return s.id&&(s=s.clone(),s.id=null),(o=(t=s).type)!=null||(t.type=y),(l=(r=s).portal)!=null||(r.portal=q.getDefault()),E(a,s),s}async function aa(a,e){const{url:t,layerId:r,title:s,fullExtent:o,isTable:l}=a,i=C(t),u=$(i)&&i.serverType==="FeatureServer";e.url=u?t:`${t}/${r}`,e.title||(e.title=s),e.extent=null,!l&&$(o)&&(e.extent=await U(o)),g(e,d.METADATA),g(e,d.MULTI_LAYER),f(e,d.SINGLE_LAYER),l&&f(e,d.TABLE),h(e)}async function ea(a,e,t){const r=a.portal;await r._signIn(),await r.user.addItem({item:a,data:e,folder:t==null?void 0:t.folder})}const ua=m(ta);async function ta(a,e){await J(a),Z(a);const t=a.portalItem,r=b(t),s=await v(a,r,e),o=await P(t,[{layer:a,layerJSON:s}]);return h(t),await t.update({data:o}),w(r),t}const da=m(async(a,e)=>{await W(a);const t=a[0].portalItem,r=b(t),s=await Promise.all(a.map(l=>v(l,r,e))),o=await P(t,a.map((l,i)=>({layer:l,layerJSON:s[i]})));return h(t),await t.update({data:o}),await Promise.all(a.slice(1).map(l=>l.portalItem.reload())),w(r),t.clone()}),ca=m(ra);async function ra(a,e,t){await J(a);const r=X(a,e),s=b(r),o=O({layer:a,layerJSON:await v(a,s,t)});return await aa(a,r),await ea(r,o,t),a.portalItem=r,w(s),r}export{ua as save,da as saveAll,ca as saveAs};
