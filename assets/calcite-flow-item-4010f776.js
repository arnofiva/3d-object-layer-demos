import{ae as k,af as C,ag as d,ak as v,ah as a,an as w}from"./index-cdda5707.js";import{u as E}from"./interactive-1607c36d.js";import{s as y,a as B,c as L}from"./loadable-7d140904.js";import{c as x,a as S,s as _,d as F,b as D,u as I}from"./t9n-2d2f005c.js";import{d as A,S as i}from"./panel-297a3a38.js";import{d as O}from"./action-e3f08495.js";import{d as M}from"./action-menu-556ccc16.js";import{d as $}from"./icon-6c56dd6f.js";import{d as z}from"./loader-cabefae3.js";import{d as P}from"./popover-1095e00b.js";import{d as R}from"./scrim-2cacfa4b.js";import{d as T}from"./tooltip-68b9372f.js";import"./key-89f6acdc.js";import"./observers-333b9ff3.js";import"./focusTrapComponent-08ab2cd6.js";import"./guid-4f97587b.js";import"./openCloseComponent-6668f48b.js";import"./debounce-c198f28b.js";import"./FloatingArrow-b345edcc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const H={backButton:"back-button"},u={backLeft:"chevron-left",backRight:"chevron-right"},o={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},U="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-flow-item-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding)}",p=k(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=d(this,"calciteFlowItemBack",6),this.calciteFlowItemScroll=d(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=d(this,"calciteFlowItemClose",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.backButtonEl=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){x(this),S(this)}async componentWillLoad(){await _(this),y(this)}componentDidRender(){E(this)}disconnectedCallback(){F(this),D(this)}componentDidLoad(){B(this)}effectiveLocaleChange(){I(this,this.effectiveLocale)}async setFocus(){await L(this);const{backButtonEl:e,containerEl:t}=this;if(e){e.setFocus();return}t?.setFocus()}async scrollContentTo(e){await this.containerEl?.scrollContentTo(e)}renderBackButton(){const{el:e}=this,t=v(e)==="rtl",{showBackButton:s,backButtonClick:c,messages:l}=this,n=l.back,r=t?u.backRight:u.backLeft;return s?a("calcite-action",{"aria-label":n,class:H.backButton,icon:r,key:"flow-back-button",onClick:c,scale:"s",slot:"header-actions-start",text:n,ref:this.setBackRef}):null}render(){const{closable:e,closed:t,description:s,disabled:c,heading:l,headingLevel:n,loading:r,menuOpen:g,messages:m,backButtonEl:f}=this,h=m.back;return a(w,null,a("calcite-panel",{closable:e,closed:t,description:s,disabled:c,heading:l,headingLevel:n,loading:r,menuOpen:g,messageOverrides:m,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),a("slot",{name:o.actionBar,slot:i.actionBar}),a("slot",{name:o.headerActionsStart,slot:i.headerActionsStart}),a("slot",{name:o.headerActionsEnd,slot:i.headerActionsEnd}),a("slot",{name:o.headerContent,slot:i.headerContent}),a("slot",{name:o.headerMenuActions,slot:i.headerMenuActions}),a("slot",{name:o.fab,slot:i.fab}),a("slot",{name:o.footerActions,slot:i.footerActions}),a("slot",{name:o.footer,slot:i.footer}),a("slot",null)),f?a("calcite-tooltip",{closeOnClick:!0,label:h,overlayPositioning:"fixed",placement:"top",referenceElement:f},h):null)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return U}},[1,"calcite-flow-item",{closable:[516],closed:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],backButtonEl:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function b(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim","calcite-tooltip"].forEach(t=>{switch(t){case"calcite-flow-item":customElements.get(t)||customElements.define(t,p);break;case"calcite-action":customElements.get(t)||O();break;case"calcite-action-menu":customElements.get(t)||M();break;case"calcite-icon":customElements.get(t)||$();break;case"calcite-loader":customElements.get(t)||z();break;case"calcite-panel":customElements.get(t)||A();break;case"calcite-popover":customElements.get(t)||P();break;case"calcite-scrim":customElements.get(t)||R();break;case"calcite-tooltip":customElements.get(t)||T();break}})}b();const ce=p,le=b;export{ce as CalciteFlowItem,le as defineCustomElement};
