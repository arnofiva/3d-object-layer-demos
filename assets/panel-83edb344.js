import{ae as u,af as g,ag as d,aO as p,aP as b,ah as n,am as C,aQ as v}from"./main-79e5ed80.js";import{u as y}from"./interactive-1607c36d.js";import{s as x,a as S,c as k}from"./loadable-7d140904.js";import{c as A}from"./observers-7949b362.js";import{d as E,S as H}from"./action-menu-adc47a20.js";import{H as z}from"./focusTrapComponent-2107ee6f.js";import{c as w,a as F,s as M,d as L,b as B,u as D}from"./t9n-460cb030.js";import{d as _}from"./action-9e20b9c8.js";import{d as O}from"./icon-3b706e0b.js";import{d as P}from"./loader-142f20e1.js";import{d as I}from"./popover-a38f0fbf.js";import{d as R}from"./scrim-13194b98.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const i={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",contentContainer:"content-container",contentHeight:"content-height",fabContainer:"fab-container",footer:"footer"},h={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right"},r={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},$="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-footer-padding:0.5rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.action-bar-container{border-block-end:1px solid;z-index:var(--calcite-app-z-index-header);inline-size:100%;border-block-end-color:var(--calcite-ui-border-3)}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;padding:var(--calcite-panel-footer-padding)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}",T=u(class extends g{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=d(this,"calcitePanelClose",6),this.calcitePanelScroll=d(this,"calcitePanelScroll",6),this.resizeObserver=A("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setCloseRef=e=>{this.closeButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasStartActions=!!t.length},this.handleHeaderActionsEndSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasEndActions=!!t.length},this.handleHeaderMenuActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasMenuItems=!!t.length},this.handleActionBarSlotChange=e=>{const t=p(e).filter(a=>a?.matches("calcite-action-bar"));t.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasHeaderContent=!!t.length},this.handleFooterSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterContent=!!t.length},this.handleFooterActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterActions=!!t.length},this.handleFabSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFab=!!t.length},this.setPanelScrollEl=e=>{this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){w(this),F(this)}async componentWillLoad(){x(this),await M(this)}componentDidLoad(){S(this)}componentDidRender(){y(this)}disconnectedCallback(){L(this),B(this),this.resizeObserver?.disconnect()}effectiveLocaleChange(){D(this,this.effectiveLocale)}async setFocus(){await k(this),b(this.containerEl)}async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:c}=this,o=e?n(z,{class:i.heading,level:t},e):null,s=a?n("span",{class:i.description},a):null;return!c&&(o||s)?n("div",{class:i.headerContent,key:"header-content"},o,s):null}renderActionBar(){return n("div",{class:i.actionBarContainer,hidden:!this.hasActionBar},n("slot",{name:r.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return n("div",{class:i.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:r.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{[i.headerActionsStart]:!0,[i.headerActions]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:r.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:e,hasEndActions:t,messages:a,closable:c,hasMenuItems:o}=this,s=a.close,l=c?n("calcite-action",{"aria-label":s,"data-test":"close",icon:h.close,onClick:e,text:s,ref:this.setCloseRef}):null,m=n("slot",{name:r.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),f=t||l||o;return n("div",{class:{[i.headerActionsEnd]:!0,[i.headerActions]:!0},hidden:!f,key:"header-actions-end"},m,this.renderMenu(),l)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,placement:"bottom-end"},n("calcite-action",{icon:h.menu,slot:H.trigger,text:t.options}),n("slot",{name:r.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:c,hasMenuItems:o}=this,s=this.renderHeaderContent(),l=e||s||t||a||c||o;return n("header",{class:i.header,hidden:!l},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),s,this.renderHeaderActionsEnd())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return n("footer",{class:i.footer,hidden:!a},n("slot",{key:"footer-slot",name:r.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:r.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const{hasFab:e}=this,t=n("slot",{key:"default-slot"}),a=e?n("section",{class:i.contentContainer},t):t;return n("div",{class:{[i.contentWrapper]:!0,[i.contentContainer]:!e,[i.contentHeight]:e},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a,this.renderFab())}renderFab(){return n("div",{class:i.fabContainer,hidden:!this.hasFab},n("slot",{name:r.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:a,closable:c}=this,o=n("article",{"aria-busy":C(e),class:i.container,hidden:a,onKeyDown:t,tabIndex:c?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderActionBar(),this.renderContent(),this.renderFooterNode());return n(v,null,e?n("calcite-scrim",{loading:e}):null,o)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return $}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function N(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-panel":customElements.get(t)||customElements.define(t,T);break;case"calcite-action":customElements.get(t)||_();break;case"calcite-action-menu":customElements.get(t)||E();break;case"calcite-icon":customElements.get(t)||O();break;case"calcite-loader":customElements.get(t)||P();break;case"calcite-popover":customElements.get(t)||I();break;case"calcite-scrim":customElements.get(t)||R();break}})}N();export{T as P,r as S,N as d};