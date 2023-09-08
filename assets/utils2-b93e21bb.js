import{ao as s}from"./index-cdda5707.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const c="CALCITE-COMBOBOX-ITEM",a="CALCITE-COMBOBOX-ITEM-GROUP",n=`${c}, ${a}`,i={listContainer:"list-container"};function m(t){const e=t.parentElement?.closest(n),o=e?.parentElement?.closest(n);return[e,o].filter(r=>r)}function u(t){return t.ancestors?.filter(e=>e.nodeName==="CALCITE-COMBOBOX-ITEM")||[]}function C(t){return s(t.querySelectorAll("calcite-combobox-item"))}function b(t){return s(t.querySelectorAll("calcite-combobox-item")).filter(o=>o.selected).length>0}function O(t){return document.evaluate("ancestor::calcite-combobox-item | ancestor::calcite-combobox-item-group",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{n as C,O as a,u as b,C as c,c as d,a as e,i as f,m as g,b as h};
