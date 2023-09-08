import{ae as p,af as u,ag as a,ai as c,aj as s,ah as t,ak as f,al as g,am as x,an as v}from"./index-cdda5707.js";import{c as y,d as I}from"./conditionalSlot-e5b503f9.js";import{d as b}from"./icon-6c56dd6f.js";import"./observers-333b9ff3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.4.2
 */const o={actionsStart:"actions-start",actionsEnd:"actions-end"},e={icon:"icon",header:"header",headerContent:"header-content",actionsStart:"actions-start",actionsEnd:"actions-end",headerText:"header-text",heading:"heading",description:"description",expandIcon:"expand-icon",content:"content",iconStart:"icon--start",iconEnd:"icon--end",headerContainer:"header-container"},k=`@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-right{0%{opacity:0;transform:translate3D(-5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-left{0%{opacity:0;transform:translate3D(5px, 0, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-right{animation-name:in-right}.calcite-animate__in-left{animation-name:in-left}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown)}:host([hidden]){display:none}.icon-position--end,.icon-position--start{--calcite-accordion-item-icon-rotation:calc(90deg * -1);--calcite-accordion-item-active-icon-rotation:0deg;--calcite-accordion-item-icon-rotation-rtl:90deg;--calcite-accordion-item-active-icon-rotation-rtl:0deg}.icon-position--start{--calcite-accordion-item-flex-direction:row-reverse;--calcite-accordion-item-icon-spacing-start:0;--calcite-accordion-item-icon-spacing-end:var(--calcite-accordion-icon-margin)}.icon-position--end{--calcite-accordion-item-flex-direction:row;--calcite-accordion-item-icon-spacing-start:var(--calcite-accordion-icon-margin);--calcite-accordion-item-icon-spacing-end:0}.icon-position--end:not(.icon-type--plus-minus){--calcite-accordion-item-icon-rotation:0deg;--calcite-accordion-item-active-icon-rotation:180deg;--calcite-accordion-item-icon-rotation-rtl:0deg;--calcite-accordion-item-active-icon-rotation-rtl:calc(180deg * -1)}:host{position:relative;display:flex;flex-direction:column;color:var(--calcite-ui-text-3);text-decoration-line:none;background-color:var(--calcite-accordion-item-background, var(--calcite-ui-foreground-1))}:host .header-content{outline-color:transparent}:host(:focus) .header-content{outline:2px solid transparent;outline-offset:2px;outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}:host([expanded]){color:var(--calcite-ui-text-1)}:host([expanded]) .content{display:block;color:var(--calcite-ui-text-1)}:host([expanded]) .header{border-block-end-color:transparent}:host .header{display:flex;align-items:stretch}:host .icon{position:relative;margin:0px;display:inline-flex;color:var(--calcite-ui-text-3);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:var(--calcite-accordion-item-icon-spacing-start);margin-inline-start:var(--calcite-accordion-item-icon-spacing-end)}.icon--start{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin)}.icon--end{display:flex;align-items:center;margin-inline-end:var(--calcite-accordion-icon-margin);margin-inline-start:var(--calcite-accordion-icon-margin)}.header-container{inline-size:100%}.content{padding:var(--calcite-accordion-item-padding)}:host .content,:host .header{border-block-end:1px solid var(--calcite-accordion-item-border, var(--calcite-ui-border-2))}:host .header *{display:inline-flex;align-items:center;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}:host .content{display:none;padding-block-start:0px;color:var(--calcite-ui-text-3);text-align:initial}:host .expand-icon{color:var(--calcite-ui-text-3);margin-inline-start:var(--calcite-accordion-item-icon-spacing-start);margin-inline-end:var(--calcite-accordion-item-icon-spacing-end);transform:rotate(var(--calcite-accordion-item-icon-rotation))}.calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-icon-rotation-rtl))}:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1);transform:rotate(var(--calcite-accordion-item-active-icon-rotation))}:host([expanded]) .calcite--rtl .expand-icon{transform:rotate(var(--calcite-accordion-item-active-icon-rotation-rtl))}:host .header-text{margin-block:0px;flex-grow:1;flex-direction:column;padding-block:0px;text-align:initial;margin-inline-end:auto}:host .heading,:host .description{display:flex;inline-size:100%}:host .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}:host .description{margin-block-start:0.25rem;color:var(--calcite-ui-text-3)}:host(:focus) .heading,:host(:hover) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:hover) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:hover) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:hover) .description{color:var(--calcite-ui-text-2)}:host(:focus) .heading,:host(:active) .heading,:host([expanded]) .heading{color:var(--calcite-ui-text-1)}:host(:focus) .icon,:host(:active) .icon,:host([expanded]) .icon{color:var(--calcite-ui-text-1)}:host(:focus) .expand-icon,:host(:active) .expand-icon,:host([expanded]) .expand-icon{color:var(--calcite-ui-text-1)}:host(:focus) .description,:host(:active) .description,:host([expanded]) .description{color:var(--calcite-ui-text-2)}.header-content{flex-grow:1;cursor:pointer;padding:var(--calcite-accordion-item-padding);flex-direction:var(--calcite-accordion-item-flex-direction)}.actions-start,.actions-end{display:flex;align-items:center}@media (forced-colors: active){:host([expanded]) .header{border-block-end:none}:host([expanded]) .heading{font-weight:bolder}:host(:hover) .heading,:host(:focus) .heading{text-decoration:underline}}`,l=p(class extends u{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionItemSelect=a(this,"calciteInternalAccordionItemSelect",6),this.calciteInternalAccordionItemClose=a(this,"calciteInternalAccordionItemClose",6),this.calciteInternalAccordionItemRegister=a(this,"calciteInternalAccordionItemRegister",6),this.iconPosition="end",this.itemHeaderClickHandler=()=>this.emitRequestedItem(),this.scale="m",this.expanded=!1,this.heading=void 0,this.description=void 0,this.iconStart=void 0,this.iconEnd=void 0,this.iconFlipRtl=void 0}connectedCallback(){this.parent=this.el.parentElement,this.iconType=c(this.el,"icon-type","chevron"),this.iconPosition=c(this.el,"icon-position",this.iconPosition),this.scale=c(this.el,"scale",this.scale),y(this)}componentDidLoad(){this.itemPosition=this.getItemPosition(),this.calciteInternalAccordionItemRegister.emit({parent:this.parent,position:this.itemPosition})}disconnectedCallback(){I(this)}renderActionsStart(){const{el:i}=this;return s(i,o.actionsStart)?t("div",{class:e.actionsStart},t("slot",{name:o.actionsStart})):null}renderActionsEnd(){const{el:i}=this;return s(i,o.actionsEnd)?t("div",{class:e.actionsEnd},t("slot",{name:o.actionsEnd})):null}render(){const{iconFlipRtl:i}=this,n=f(this.el),m=this.iconStart?t("calcite-icon",{class:e.iconStart,flipRtl:i==="both"||i==="start",icon:this.iconStart,key:"icon-start",scale:this.scale==="l"?"m":"s"}):null,h=this.iconEnd?t("calcite-icon",{class:e.iconEnd,flipRtl:i==="both"||i==="end",icon:this.iconEnd,key:"icon-end",scale:this.scale==="l"?"m":"s"}):null,{description:r}=this;return t(v,null,t("div",{class:{[`icon-position--${this.iconPosition}`]:!0,[`icon-type--${this.iconType}`]:!0}},t("div",{class:{[e.header]:!0,[g.rtl]:n==="rtl"}},this.renderActionsStart(),t("div",{"aria-expanded":x(this.expanded),class:e.headerContent,onClick:this.itemHeaderClickHandler,role:"button",tabindex:"0"},t("div",{class:e.headerContainer},m,t("div",{class:e.headerText},t("span",{class:e.heading},this.heading),r?t("span",{class:e.description},r):null),h),t("calcite-icon",{class:e.expandIcon,icon:this.iconType==="chevron"?"chevronDown":this.iconType==="caret"?"caretDown":this.expanded?"minus":"plus",scale:this.scale==="l"?"m":"s"})),this.renderActionsEnd()),t("div",{class:e.content},t("slot",null))))}keyDownHandler(i){if(i.target===this.el)switch(i.key){case" ":case"Enter":this.emitRequestedItem(),i.preventDefault();break}}updateActiveItemOnChange(i){this.requestedAccordionItem=i.detail.requestedAccordionItem,this.el.parentNode===this.requestedAccordionItem.parentNode&&(this.determineActiveItem(),i.stopPropagation())}determineActiveItem(){switch(this.selectionMode=c(this.el,"selection-mode","multiple"),this.selectionMode){case"multiple":this.el===this.requestedAccordionItem&&(this.expanded=!this.expanded);break;case"single":this.expanded=this.el===this.requestedAccordionItem?!this.expanded:!1;break;case"single-persist":this.expanded=this.el===this.requestedAccordionItem;break}}emitRequestedItem(){this.calciteInternalAccordionItemSelect.emit({requestedAccordionItem:this.el})}getItemPosition(){return Array.prototype.indexOf.call(this.parent.querySelectorAll("calcite-accordion-item"),this.el)}get el(){return this}static get style(){return k}},[1,"calcite-accordion-item",{expanded:[1540],heading:[1],description:[1],iconStart:[513,"icon-start"],iconEnd:[513,"icon-end"],iconFlipRtl:[513,"icon-flip-rtl"]},[[0,"keydown","keyDownHandler"],[16,"calciteInternalAccordionChange","updateActiveItemOnChange"]]]);function d(){if(typeof customElements>"u")return;["calcite-accordion-item","calcite-icon"].forEach(n=>{switch(n){case"calcite-accordion-item":customElements.get(n)||customElements.define(n,l);break;case"calcite-icon":customElements.get(n)||b();break}})}d();const C=l,D=d;export{C as CalciteAccordionItem,D as defineCustomElement};
