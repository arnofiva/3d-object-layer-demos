import{h0 as z,at as I,aR as R}from"./index-cdda5707.js";import{n as N}from"./key-89f6acdc.js";import{c as x}from"./observers-333b9ff3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const D=new RegExp("\\.(0+)?$"),j=new RegExp("0+$");class a{constructor(t){if(t instanceof a)return t;const[s,n]=U(t).split(".").concat("");this.value=BigInt(s+n.padEnd(a.DECIMALS,"0").slice(0,a.DECIMALS))+BigInt(a.ROUNDED&&n[a.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace("-","").padStart(a.DECIMALS+1,"0"),s=t.slice(0,-a.DECIMALS),n=t.slice(-a.DECIMALS).replace(j,"");return{integers:s,decimals:n}}toString(){const{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&r.unshift({type:"minusSign",value:t.minusSign}),n.length&&(r.push({type:"decimal",value:t.decimal}),n.split("").forEach(i=>r.push({type:"fraction",value:i}))),r}format(t){const{integers:s,decimals:n}=this.getIntegersAndDecimals(),r=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,i=n.length?`${t.decimal}${n.split("").map(l=>t.numberFormatter.format(Number(l))).join("")}`:"";return`${r}${i}`}add(t){return a.fromBigInt(this.value+new a(t).value)}subtract(t){return a.fromBigInt(this.value-new a(t).value)}multiply(t){return a._divRound(this.value*new a(t).value,a.SHIFT)}divide(t){return a._divRound(this.value*a.SHIFT,new a(t).value)}}a.DECIMALS=100;a.ROUNDED=!0;a.SHIFT=BigInt("1"+"0".repeat(a.DECIMALS));a._divRound=(e,t)=>a.fromBigInt(e/t+(a.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));a.fromBigInt=e=>Object.assign(Object.create(a.prototype),{value:e,isNegative:e<BigInt(0)});function $(e){return!(!e||isNaN(Number(e)))}function re(e){return!e||!G(e)?"":f(e,t=>{let s=!1;const n=t.split("").filter((r,i)=>r.match(/\./g)&&!s?(s=!0,!0):r.match(/\-/g)&&i===0?!0:N.includes(r)).reduce((r,i)=>r+i);return $(n)?new a(n).toString():""})}const O=/^([-0])0+(?=\d)/,k=/(?!^\.)\.$/,P=/(?!^-)-/g,H=/^-\b0\b\.?0*$/,ae=e=>f(e,t=>{const s=t.replace(P,"").replace(k,"").replace(O,"$1");return $(s)?H.test(s)?s:new a(s).toString():t});function f(e,t){if(!e)return e;const s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((n,r)=>t(r===1?n.replace(/\./g,""):n)).join("e").replace(/^e/,"1e"):t(e)}function U(e){const t=e.split(/[eE]/);if(t.length===1)return e;const s=+e;if(Number.isSafeInteger(s))return`${s}`;const n=e.charAt(0)==="-",r=+t[1],i=t[0].split("."),l=(n?i[0].substring(1):i[0])||"",y=i[1]||"",_=(o,c)=>{const g=Math.abs(c)-o.length,p=g>0?`${"0".repeat(g)}${o}`:o;return`${p.slice(0,c)}.${p.slice(c)}`},T=(o,c)=>{const g=c>o.length?`${o}${"0".repeat(c-o.length)}`:o;return`${g.slice(0,c)}.${g.slice(c)}`},S=r>0?`${l}${T(y,r)}`:`${_(l,r)}${y}`;return`${n?"-":""}${S.charAt(0)==="."?"0":""}${S.replace(D,"").replace(O,"")}`}function G(e){return N.some(t=>e.includes(t))}const u="en",Z=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],B=["ar","bg","bs","ca","cs","da","de","de-AT","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],K=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],C=e=>K.includes(e),b=new Intl.NumberFormat().resolvedOptions().numberingSystem,L=b==="arab"||!C(b)?"latn":b,J=e=>C(e)?e:L;function v(e,t="cldr"){const s=t==="cldr"?B:Z;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(n,r,i)=>`${r}-${i.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),u))):u}const h=new Set;function ie(e){W(e),h.size===0&&M?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),h.add(e)}function W(e){e.effectiveLocale=V(e)}function oe(e){h.delete(e),h.size===0&&M.disconnect()}const M=x("mutation",e=>{e.forEach(t=>{const s=t.target;h.forEach(n=>{if(!z(s,n.el))return;const i=I(n.el,"[lang]");if(!i){n.effectiveLocale=u;return}const l=i.lang;n.effectiveLocale=i.hasAttribute("lang")&&l===""?u:l})})});function V(e){return e.el.lang||I(e.el,"[lang]")?.lang||document.documentElement.lang||u}class X{constructor(){this.delocalize=t=>this._numberFormatOptions?f(t,s=>s.replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?f(t,s=>$(s.trim())?new a(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=v(t?.locale),t.numberingSystem=J(t?.numberingSystem),!this._numberFormatOptions&&t.locale===u&&t.numberingSystem===L&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const s=new Map(this._digits.map((r,i)=>[r,i])),n=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-123456789e-1);this._actualGroup=n.find(r=>r.type==="group").value,this._group=this._actualGroup.trim().length===0?" ":this._actualGroup,this._decimal=n.find(r=>r.type==="decimal").value,this._minusSign=n.find(r=>r.type==="minusSign").value,this._getDigitIndex=r=>s.get(r)}}const ce=new X;let m,F;function q(e={}){return Object.entries(e).sort(([t],[s])=>t.localeCompare(s)).map(t=>`${t[0]}-${t[1]}`).flat().join(":")}function ue(e,t){e=v(e),m||(m=new Map),F!==e&&(m.clear(),F=e);const s=q(t),n=m.get(s);if(n)return n;const r=new Intl.DateTimeFormat(e,t);return m.set(s,r),r}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const d={};async function Q(e,t){const s=`${t}_${e}`;return d[s]||(d[s]=fetch(R(`./assets/${t}/t9n/messages_${e}.json`)).then(n=>(n.ok||E(),n.json())).catch(()=>E())),d[s]}function E(){throw new Error("could not fetch component message bundle")}function w(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function le(e){e.defaultMessages=await A(e,e.effectiveLocale),w(e)}async function A(e,t){const{el:s}=e,r=s.tagName.toLowerCase().replace("calcite-","");return Q(v(t,"t9n"),r)}async function ge(e,t){e.defaultMessages=await A(e,t),w(e)}function me(e){e.onMessagesChange=Y}function he(e){e.onMessagesChange=void 0}function Y(){w(this)}export{a as B,me as a,he as b,ie as c,oe as d,ae as e,L as f,ue as g,J as h,$ as i,v as j,ce as n,re as p,le as s,ge as u};
