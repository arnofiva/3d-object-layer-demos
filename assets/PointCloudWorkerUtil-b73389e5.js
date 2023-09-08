import{e9 as k,ea as C,eb as A,ec as I}from"./index-cdda5707.js";import{a as x,b as O,d as R}from"./PointCloudUniqueValueRenderer-c626c65c.js";function M(n,o,f,c){const{rendererJSON:d,isRGBRenderer:p}=n;let t=null,a=null;if(o&&p)t=o;else if(o&&d?.type==="pointCloudUniqueValueRenderer"){a=x.fromJSON(d);const e=a.colorUniqueValueInfos;t=new Uint8Array(3*c);const s=m(a.fieldTransformType);for(let r=0;r<c;r++){const i=(s?s(o[r]):o[r])+"";for(let l=0;l<e.length;l++)if(e[l].values.includes(i)){t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;break}}}else if(o&&d?.type==="pointCloudStretchRenderer"){a=O.fromJSON(d);const e=a.stops;t=new Uint8Array(3*c);const s=m(a.fieldTransformType);for(let r=0;r<c;r++){const i=s?s(o[r]):o[r],l=e.length-1;if(i<e[0].value)t[3*r]=e[0].color.r,t[3*r+1]=e[0].color.g,t[3*r+2]=e[0].color.b;else if(i>=e[l].value)t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;else for(let u=1;u<e.length;u++)if(i<e[u].value){const b=(i-e[u-1].value)/(e[u].value-e[u-1].value);t[3*r]=e[u].color.r*b+e[u-1].color.r*(1-b),t[3*r+1]=e[u].color.g*b+e[u-1].color.g*(1-b),t[3*r+2]=e[u].color.b*b+e[u-1].color.b*(1-b);break}}}else if(o&&d?.type==="pointCloudClassBreaksRenderer"){a=R.fromJSON(d);const e=a.colorClassBreakInfos;t=new Uint8Array(3*c);const s=m(a.fieldTransformType);for(let r=0;r<c;r++){const i=s?s(o[r]):o[r];for(let l=0;l<e.length;l++)if(i>=e[l].minValue&&i<=e[l].maxValue){t[3*r]=e[l].color.r,t[3*r+1]=e[l].color.g,t[3*r+2]=e[l].color.b;break}}}else t=new Uint8Array(3*c).fill(255);if(f&&a&&a.colorModulation){const e=a.colorModulation.minValue,s=a.colorModulation.maxValue,r=.3;for(let i=0;i<c;i++){const l=f[i],u=l>=s?1:l<=e?r:r+(1-r)*(l-e)/(s-e);t[3*i]=u*t[3*i],t[3*i+1]=u*t[3*i+1],t[3*i+2]=u*t[3*i+2]}}return t}function T(n,o){if(n.encoding==null||n.encoding===""){const f=k(o,n);if(f.vertexAttributes.position==null)return;const c=C(o,f.vertexAttributes.position),d=f.header.fields,p=[d.offsetX,d.offsetY,d.offsetZ],t=[d.scaleX,d.scaleY,d.scaleZ],a=c.length/3,e=new Float64Array(3*a);for(let s=0;s<a;s++)e[3*s]=c[3*s]*t[0]+p[0],e[3*s+1]=c[3*s+1]*t[1]+p[1],e[3*s+2]=c[3*s+2]*t[2]+p[2];return e}if(n.encoding==="lepcc-xyz")return A(o).result}function U(n,o,f){return n!=null&&n.attributeInfo.useElevation?o?S(o,f):null:n!=null&&n.attributeInfo.storageInfo?I(n.attributeInfo.storageInfo,n.buffer,f):null}function S(n,o){const f=new Float64Array(o);for(let c=0;c<o;c++)f[c]=n[3*c+2];return f}function F(n,o,f,c,d){const p=n.length/3;let t=0;for(let a=0;a<p;a++){let e=!0;for(let s=0;s<c.length&&e;s++){const{filterJSON:r}=c[s],i=d[s].values[a];switch(r.type){case"pointCloudValueFilter":{const l=r.mode==="exclude";r.values.includes(i)===l&&(e=!1);break}case"pointCloudBitfieldFilter":{const l=v(r.requiredSetBits),u=v(r.requiredClearBits);(i&l)===l&&!(i&u)||(e=!1);break}case"pointCloudReturnFilter":{const l=15&i,u=i>>>4&15,b=u>1,w=l===1,y=l===u;let h=!1;for(const g of r.includedReturns)if(g==="last"&&y||g==="firstOfMany"&&w&&b||g==="lastOfMany"&&y&&b||g==="single"&&!b){h=!0;break}h||(e=!1);break}}}e&&(f[t]=a,n[3*t]=n[3*a],n[3*t+1]=n[3*a+1],n[3*t+2]=n[3*a+2],o[3*t]=o[3*a],o[3*t+1]=o[3*a+1],o[3*t+2]=o[3*a+2],t++)}return t}function m(n){switch(n){default:case null:case"none":return o=>o;case"low-four-bit":return o=>15&o;case"high-four-bit":return o=>(240&o)>>4;case"absolute-value":return o=>Math.abs(o);case"modulo-ten":return o=>o%10}}function v(n){let o=0;for(const f of n||[])o|=1<<f;return o}export{S as a,U as c,F as f,M as i,T as u};
