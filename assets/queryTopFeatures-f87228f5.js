import{gU as p,dN as c,c3 as m,gV as f,fS as F}from"./main-79e5ed80.js";import{b as g}from"./normalizeUtils-996b11fe.js";import{t as E}from"./query-2b60d096.js";const d="Layer does not support extent calculation.";function j(o,r){const n=o.geometry,t=o.toJSON(),e=t;if(n!=null&&(e.geometry=JSON.stringify(n),e.geometryType=F(n),e.inSR=n.spatialReference.wkid||JSON.stringify(n.spatialReference)),t.topFilter?.groupByFields&&(e.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),t.topFilter?.orderByFields&&(e.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(e.topFilter=JSON.stringify(e.topFilter)),t.objectIds&&(e.objectIds=t.objectIds.join(",")),t.orderByFields&&(e.orderByFields=t.orderByFields.join(",")),t.outFields&&!(r?.returnCountOnly||r?.returnExtentOnly||r?.returnIdsOnly)?t.outFields.includes("*")?e.outFields="*":e.outFields=t.outFields.join(","):delete e.outFields,t.outSR?e.outSR=t.outSR.wkid||JSON.stringify(t.outSR):n&&t.returnGeometry&&(e.outSR=e.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const l=t.timeExtent,{start:i,end:u}=l;i==null&&u==null||(e.time=i===u?i:`${i??"null"},${u??"null"}`),delete t.timeExtent}return e}async function w(o,r,n,t){const e=await s(o,r,"json",t);return p(r,n,e.data),e}async function B(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:s(o,r,"json",n,{returnIdsOnly:!0})}async function R(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:s(o,r,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(d);if(e.hasOwnProperty("count"))throw new Error(d);return t})}function b(o,r,n){return r.timeExtent!=null&&r.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(o,r,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function s(o,r,n,t={},e={}){const l=typeof o=="string"?c(o):o,i=r.geometry?[r.geometry]:[];return t.responseType=n==="pbf"?"array-buffer":"json",g(i,null,t).then(u=>{const y=u&&u[0];y!=null&&((r=r.clone()).geometry=y);const a=E({...l.query,f:n,...e,...j(r,e)});return m(f(l.path,"queryTopFeatures"),{...t,query:{...a,...t.query}})})}export{B as d,b as m,R as p,w as y};