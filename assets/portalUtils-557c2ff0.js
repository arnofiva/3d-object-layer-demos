import{dL as a,gn as l,c3 as o}from"./main-79e5ed80.js";function c(r,e){return r===null?e:new a({url:r.field("url")})}async function d(r,e,t){if(!l?.findCredential(r.restUrl))return null;if(r.loadStatus==="loaded"&&e===""&&r.user&&r.user.sourceJSON&&t===!1)return r.user.sourceJSON;if(e===""){const n=await o(r.restUrl+"/community/self",{responseType:"json",query:{f:"json",...t===!1?{}:{returnUserLicenseTypeExtensions:!0}}});if(n.data){const s=n.data;if(s&&s.username)return s}return null}const u=await o(r.restUrl+"/community/users/"+e,{responseType:"json",query:{f:"json"}});if(u.data){const n=u.data;return n.error?null:n}return null}export{d as s,c as t};
