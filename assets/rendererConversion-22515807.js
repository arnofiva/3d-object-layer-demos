import{aB as i,cB as u,cC as p,cD as c}from"./main-79e5ed80.js";function d(e){return e==null||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function h(e,r){if(e==null)return null;if(!d(e))return new i("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return y(e);case"unique-value":return f(e,r);case"class-breaks":return m(e);case"dictionary":case"heatmap":return null}return null}function l(e,r){if(!r)return null;let n;if(n=Array.isArray(r)?r:[r],n.length>0){const s=n.map(t=>t.details.symbol.type||t.details.symbol.declaredClass).filter(t=>!!t);s.sort();const o=[];return s.forEach((t,a)=>{a!==0&&t===s[a-1]||o.push(t)}),new i("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${o.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:n})}return null}function y(e){return l(e,u(e.symbol).error)}function f(e,r){const n={...p,...r},s=e.uniqueValueInfos?.map(t=>u(t.symbol,n).error).filter(c),o=u(e.defaultSymbol,n);return o.error&&s?.unshift(o.error),l(e,s)}function m(e){const r=e.classBreakInfos.map(s=>u(s.symbol).error).filter(c),n=u(e.defaultSymbol);return n.error&&r.unshift(n.error),l(e,r)}export{h as s,d as t};
