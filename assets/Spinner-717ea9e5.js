import{ce as P,aD as n,gN as ie,aE as r,cg as se,aF as q,au as ae,cr as M,aU as H,aB as f,lM as U,iR as ue,ok as G,ol as ne,dY as W,om as me,az as pe,m9 as o,on as X,oo as Y,op as J,bN as ye,aX as ge,dA as fe,hw as T,eh as j,jT as K,cD as be,bi as ve,aT as _e,du as we,aV as Ae,gW as Fe,il as Ie}from"./main-79e5ed80.js";import{v as Ce}from"./unitFormatUtils-b50d8ff8.js";import{l as $e}from"./AttachmentInfo-03d5deea.js";import{C as Me,U as qe,F as Be,L as ke,w as Le,B as Pe}from"./vmEvent-27fa49b3.js";const Z={editing:!1,operations:{add:!0,update:!0,delete:!0}},re=P.ofType($e);let v=class extends ae{constructor(t){super(t),this._getAttachmentsPromise=null,this._attachmentLayer=null,this.capabilities={...Z},this.activeAttachmentInfo=null,this.activeFileInfo=null,this.attachmentInfos=new re,this.fileInfos=new P,this.graphic=null,this.mode="view",this.filesEnabled=!1,this.addHandles(M(()=>this.graphic,()=>this._graphicChanged(),H))}destroy(){this._attachmentLayer=null,this.graphic=null}castCapabilities(t){return{...Z,...t}}get state(){return this._getAttachmentsPromise?"loading":this.graphic?"ready":"disabled"}get supportsResizeAttachments(){const{graphic:t}=this;if(!t)return!1;const e=t.layer||t.sourceLayer;return e?.loaded&&"capabilities"in e&&e.capabilities&&"operations"in e.capabilities&&"supportsResizeAttachments"in e.capabilities.operations&&e.capabilities.operations.supportsResizeAttachments||!1}async getAttachments(){const{_attachmentLayer:t,attachmentInfos:e}=this;if(!t||typeof t.queryAttachments!="function")throw new f("invalid-layer","getAttachments(): A valid layer is required.");const i=this._getObjectId(),a=new U({objectIds:[i],returnMetadata:!0}),l=[],d=t.queryAttachments(a).then(m=>m[i]||l).catch(()=>l);this._getAttachmentsPromise=d,this.notifyChange("state");const c=await d;return e.removeAll(),c.length&&e.addMany(c),this._getAttachmentsPromise=null,this.notifyChange("state"),c}async addAttachment(t,e=this.graphic){const{_attachmentLayer:i,attachmentInfos:a,capabilities:l}=this;if(!e)throw new f("invalid-graphic","addAttachment(): A valid graphic is required.",{graphic:e});if(!t)throw new f("invalid-attachment","addAttachment(): An attachment is required.",{attachment:t});if(!l.operations?.add)throw new f("invalid-capabilities","addAttachment(): add capabilities are required.");if(!i||typeof i.addAttachment!="function")throw new f("invalid-layer","addAttachment(): A valid layer is required.");const d=i.addAttachment(e,t).then(m=>this._queryAttachment(m.objectId,e)),c=await d;return a.add(c),c}async deleteAttachment(t){const{_attachmentLayer:e,attachmentInfos:i,graphic:a,capabilities:l}=this;if(!t)throw new f("invalid-attachment-info","deleteAttachment(): An attachmentInfo is required.",{attachmentInfo:t});if(!l.operations?.delete)throw new f("invalid-capabilities","deleteAttachment(): delete capabilities are required.");if(!e||typeof e.deleteAttachments!="function")throw new f("invalid-layer","deleteAttachment(): A valid layer is required.");if(!a)throw new f("invalid-graphic","deleteAttachment(): A graphic is required.");const d=e.deleteAttachments(a,[t.id]).then(()=>t),c=await d;return i.remove(c),c}async updateAttachment(t,e=this.activeAttachmentInfo){const{_attachmentLayer:i,attachmentInfos:a,graphic:l,capabilities:d}=this;if(!t)throw new f("invalid-attachment","updateAttachment(): An attachment is required.",{attachment:t});if(!e)throw new f("invalid-attachment-info","updateAttachment(): An attachmentInfo is required.",{attachmentInfo:e});if(!d.operations?.update)throw new f("invalid-capabilities","updateAttachment(): Update capabilities are required.");const c=a.findIndex(p=>p===e);if(!i||typeof i.updateAttachment!="function")throw new f("invalid-layer","updateAttachment(): A valid layer is required.");if(!l)throw new f("invalid-graphic","updateAttachment(): A graphic is required.");const m=i.updateAttachment(l,e.id,t).then(p=>this._queryAttachment(p.objectId)),y=await m;return a.splice(c,1,y),y}async commitFiles(){return await Promise.all(this.fileInfos.items.map(t=>this.addAttachment(t.form))),this.fileInfos.removeAll(),this.getAttachments()}addFile(t,e){if(!t||!e)return null;const i={file:t,form:e};return this.fileInfos.add(i),i}updateFile(t,e,i=this.activeFileInfo){if(!t||!e||!i)return null;const a=this.fileInfos.findIndex(l=>i===l);return a>-1&&this.fileInfos.splice(a,1,{file:t,form:e}),this.fileInfos.items[a]}deleteFile(t){const e=this.fileInfos.find(i=>i.file===t);return e?(this.fileInfos.remove(e),e):null}async _queryAttachment(t,e){const{_attachmentLayer:i}=this;if(!t||!i?.queryAttachments)throw new f("invalid-attachment-id","Could not query attachment.");const a=this._getObjectId(e),l=new U({objectIds:[a],attachmentsWhere:`AttachmentId=${t}`,returnMetadata:!0});return i.queryAttachments(l).then(d=>d[a][0])}_getObjectId(t=this.graphic){return t?.getObjectId()??null}_graphicChanged(){this.graphic&&(this._setAttachmentLayer(),this.getAttachments().catch(()=>{}))}_setAttachmentLayer(){const{graphic:t}=this,e=Me(t);this._attachmentLayer=e?e.type==="scene"&&e.associatedLayer!=null?e.associatedLayer:e:null}};n([r()],v.prototype,"capabilities",void 0),n([ie("capabilities")],v.prototype,"castCapabilities",null),n([r()],v.prototype,"activeAttachmentInfo",void 0),n([r()],v.prototype,"activeFileInfo",void 0),n([r({readOnly:!0,type:re})],v.prototype,"attachmentInfos",void 0),n([r()],v.prototype,"fileInfos",void 0),n([r({type:se})],v.prototype,"graphic",void 0),n([r()],v.prototype,"mode",void 0),n([r({readOnly:!0})],v.prototype,"state",null),n([r()],v.prototype,"filesEnabled",void 0),n([r({readOnly:!0})],v.prototype,"supportsResizeAttachments",null),v=n([q("esri.widgets.Attachments.AttachmentsViewModel")],v);const oe=v;function ee(t){const e=t.toLowerCase();return e==="image/bmp"||e==="image/emf"||e==="image/exif"||e==="image/gif"||e==="image/x-icon"||e==="image/jpeg"||e==="image/png"||e==="image/tiff"||e==="image/x-wmf"}function Ee(t){const e=ue("esri/themes/base/images/files/");return t?t==="text/plain"?`${e}text-32.svg`:t==="application/pdf"?`${e}pdf-32.svg`:t==="text/csv"?`${e}csv-32.svg`:t==="application/gpx+xml"?`${e}gpx-32.svg`:t==="application/x-dwf"?`${e}cad-32.svg`:t==="application/postscript"||t==="application/json"||t==="text/xml"||t==="model/vrml"?`${e}code-32.svg`:t==="application/x-zip-compressed"||t==="application/x-7z-compressed"||t==="application/x-gzip"||t==="application/x-tar"||t==="application/x-gtar"||t==="application/x-bzip2"||t==="application/gzip"||t==="application/x-compress"||t==="application/x-apple-diskimage"||t==="application/x-rar-compressed"||t==="application/zip"?`${e}zip-32.svg`:t.includes("image/")?`${e}image-32.svg`:t.includes("audio/")?`${e}sound-32.svg`:t.includes("video/")?`${e}video-32.svg`:t.includes("msexcel")||t.includes("ms-excel")||t.includes("spreadsheetml")?`${e}excel-32.svg`:t.includes("msword")||t.includes("ms-word")||t.includes("wordprocessingml")?`${e}word-32.svg`:t.includes("powerpoint")||t.includes("presentationml")?`${e}report-32.svg`:`${e}generic-32.svg`:`${e}generic-32.svg`}const te={addButton:!0,addSubmitButton:!0,cancelAddButton:!0,cancelUpdateButton:!0,deleteButton:!0,errorMessage:!0,progressBar:!0,updateButton:!0},h="esri-attachments",I="esri-button",s={base:h,loaderContainer:`${h}__loader-container`,loader:`${h}__loader`,fadeIn:`${h}--fade-in`,container:`${h}__container`,containerList:`${h}__container--list`,containerPreview:`${h}__container--preview`,actions:`${h}__actions`,deleteButton:`${h}__delete-button`,addAttachmentButton:`${h}__add-attachment-button`,errorMessage:`${h}__error-message`,items:`${h}__items`,item:`${h}__item`,itemButton:`${h}__item-button`,itemMask:`${h}__item-mask`,itemMaskIcon:`${h}__item-mask--icon`,itemImage:`${h}__image`,itemImageResizable:`${h}__image--resizable`,itemLabel:`${h}__label`,itemFilename:`${h}__filename`,itemChevronIcon:`${h}__item-chevron-icon`,itemLink:`${h}__item-link`,itemLinkOverlay:`${h}__item-link-overlay`,itemLinkOverlayIcon:`${h}__item-link-overlay-icon`,itemEditIcon:`${h}__item-edit-icon`,itemAddIcon:`${h}__item-add-icon`,itemAddButton:`${h}__item-add-button`,formNode:`${h}__form-node`,fileFieldset:`${h}__file-fieldset`,fileLabel:`${h}__file-label`,fileName:`${h}__file-name`,fileInput:`${h}__file-input`,metadata:`${h}__metadata`,metadataFieldset:`${h}__metadata-fieldset`,progressBar:`${h}__progress-bar`,esriWidget:"esri-widget",esriButton:I,buttonDisabled:`${I}--disabled`,esriButtonSecondary:`${I}--secondary`,esriButtonTertiary:`${I}--tertiary`,esriButtonThird:`${I}--third`,esriButtonSmall:`${I}--small`,esriButtonHalf:`${I}--half`,empty:"esri-widget__content--empty",iconExternalLink:"esri-icon-link-external",iconEdit:"esri-icon-edit",iconRight:"esri-icon-right",iconLeft:"esri-icon-left",iconPlus:"esri-icon-plus"},z=window.CSS;let b=class extends ne{constructor(t,e){super(t,e),this.displayType="auto",this.messages=null,this.messagesUnits=null,this.selectedFile=null,this.submitting=!1,this.viewModel=null,this.visibleElements={...te},this._supportsImageOrientation=z&&z.supports&&z.supports("image-orientation","from-image"),this._addAttachmentForm=null,this._updateAttachmentForm=null}initialize(){this.viewModel||(this.viewModel=new oe),this.addHandles([W(()=>this.viewModel?.attachmentInfos,"change",()=>this.scheduleRender()),W(()=>this.viewModel?.fileInfos,"change",()=>this.scheduleRender()),M(()=>this.viewModel?.mode,()=>this._modeChanged(),H)])}loadDependencies(){return me({icon:()=>pe(()=>import("./calcite-icon-b3dbf1c9.js"),["./calcite-icon-b3dbf1c9.js","./icon-3b706e0b.js","./main-79e5ed80.js","./main-7772480e.css","./observers-7949b362.js"],import.meta.url)})}get capabilities(){return this.viewModel.capabilities}set capabilities(t){this.viewModel.capabilities=t}get effectiveDisplayType(){const{displayType:t}=this;return t&&t!=="auto"?t:this.viewModel.supportsResizeAttachments?"preview":"list"}get graphic(){return this.viewModel.graphic}set graphic(t){this.viewModel.graphic=t}get label(){return this.messages?.widgetLabel??""}set label(t){this._overrideIfSome("label",t)}castVisibleElements(t){return{...te,...t}}addAttachment(){const{_addAttachmentForm:t,viewModel:e}=this;return this._set("submitting",!0),this._set("error",null),e.addAttachment(t).then(i=>(this._set("submitting",!1),this._set("error",null),e.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new f("attachments:add-attachment",this.messages.addErrorMessage,i)),i})}deleteAttachment(t){const{viewModel:e}=this;return this._set("submitting",!0),this._set("error",null),e.deleteAttachment(t).then(i=>(this._set("submitting",!1),this._set("error",null),e.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new f("attachments:delete-attachment",this.messages.deleteErrorMessage,i)),i})}updateAttachment(){const{viewModel:t}=this,{_updateAttachmentForm:e}=this;return this._set("submitting",!0),this._set("error",null),t.updateAttachment(e).then(i=>(this._set("submitting",!1),this._set("error",null),t.mode="view",i)).catch(i=>{throw this._set("submitting",!1),this._set("error",new f("attachments:update-attachment",this.messages.updateErrorMessage,i)),i})}addFile(){const t=this.viewModel.addFile(this.selectedFile,this._addAttachmentForm);return this.viewModel.mode="view",t}updateFile(){const{viewModel:t}=this,e=t.updateFile(this.selectedFile,this._updateAttachmentForm,t.activeFileInfo);return t.mode="view",e}deleteFile(t){const e=this.viewModel.deleteFile(t||this.viewModel.activeFileInfo?.file);return this.viewModel.mode="view",e}render(){const{submitting:t,viewModel:e}=this,{state:i}=e;return o("div",{class:this.classes(s.base,s.esriWidget)},t?this.renderProgressBar():null,i==="loading"?this.renderLoading():this.renderAttachments(),this.renderErrorMessage())}renderErrorMessage(){const{error:t,visibleElements:e}=this;return t&&e.errorMessage?o("div",{key:"error-message",class:s.errorMessage},t.message):null}renderAttachments(){const{activeFileInfo:t,mode:e,activeAttachmentInfo:i}=this.viewModel;return e==="add"?this.renderAddForm():e==="edit"?this.renderDetailsForm(i||t):this.renderAttachmentContainer()}renderLoading(){return o("div",{class:s.loaderContainer,key:"loader"},o("div",{class:s.loader}))}renderProgressBar(){return this.visibleElements.progressBar?o("div",{class:s.progressBar,key:"progress-bar"}):null}renderAddForm(){const{submitting:t,selectedFile:e}=this,i=t||!e,a=this.visibleElements.cancelAddButton?o("button",{type:"button",bind:this,disabled:t,onclick:this._cancelForm,class:this.classes(s.esriButton,s.esriButtonTertiary,s.esriButtonSmall,s.esriButtonHalf,t&&s.buttonDisabled)},this.messages.cancel):null,l=this.visibleElements.addSubmitButton?o("button",{type:"submit",disabled:i,class:this.classes(s.esriButton,s.esriButtonSecondary,s.esriButtonSmall,s.esriButtonHalf,{[s.buttonDisabled]:i})},this.messages.add):null,d=e?o("span",{key:"file-name",class:s.fileName},e.name):null,c=o("form",{bind:this,afterCreate:X,afterRemoved:Y,"data-node-ref":"_addAttachmentForm",onsubmit:this._submitAddAttachment},o("fieldset",{class:s.fileFieldset},d,o("label",{class:this.classes(s.fileLabel,s.esriButton,s.esriButtonSecondary)},e?this.messages.changeFile:this.messages.selectFile,o("input",{class:s.fileInput,type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))),l,a);return o("div",{key:"add-form-container",class:s.formNode},c)}renderDetailsForm(t){const{visibleElements:e,viewModel:i,selectedFile:a,submitting:l}=this,{capabilities:d}=i,c=l||!a;let m,y,p,g;a?(m=a.type,y=a.name,p=a.size):t&&"file"in t?(m=t.file.type,y=t.file.name,p=t.file.size):t&&"contentType"in t&&(m=t.contentType,y=t.name,p=t.size,g=t.url);const _=d.editing&&d.operations?.delete&&e.deleteButton?o("button",{key:"delete-button",type:"button",disabled:l,bind:this,onclick:B=>this._submitDeleteAttachment(B,t),class:this.classes(s.esriButton,s.esriButtonSmall,s.esriButtonTertiary,s.deleteButton,{[s.buttonDisabled]:l})},this.messages.delete):void 0,A=d.editing&&d.operations?.update&&e.updateButton?o("button",{disabled:c,key:"update-button",type:"submit",class:this.classes(s.esriButton,s.esriButtonSmall,s.esriButtonThird,{[s.buttonDisabled]:c})},this.messages.update):void 0,w=this.visibleElements.cancelUpdateButton?o("button",{disabled:l,key:"cancel-button",type:"button",bind:this,onclick:this._cancelForm,class:this.classes(s.esriButton,s.esriButtonSmall,s.esriButtonTertiary,s.esriButtonThird,{[s.buttonDisabled]:l})},this.messages.cancel):void 0,E=d.editing&&d.operations?.update?o("fieldset",{key:"file",class:s.fileFieldset},o("span",{key:"file-name",class:s.fileName},y),o("label",{class:this.classes(s.fileLabel,s.esriButton,s.esriButtonSecondary)},this.messages.changeFile,o("input",{class:s.fileInput,type:"file",name:"attachment",bind:this,onchange:this._handleFileInputChange}))):void 0,x=o("fieldset",{key:"size",class:s.metadataFieldset},o("label",null,Ce(this.messagesUnits,p??0))),D=o("fieldset",{key:"content-type",class:s.metadataFieldset},o("label",null,m)),R=g!=null?o("a",{class:s.itemLink,href:g,rel:"noreferrer",target:"_blank"},this.renderImageMask(t,400),o("div",{class:s.itemLinkOverlay},o("span",{class:s.itemLinkOverlayIcon},o("calcite-icon",{icon:"launch"})))):this.renderImageMask(t,400),O=o("form",{bind:this,afterCreate:X,afterRemoved:Y,"data-node-ref":"_updateAttachmentForm",onsubmit:B=>this._submitUpdateAttachment(B,t)},o("div",{class:s.metadata},x,D),E,o("div",{class:s.actions},_,w,A));return o("div",{key:"edit-form-container",class:s.formNode},R,O)}renderImageMask(t,e){return t?"file"in t?this.renderGenericImageMask(t.file.name,t.file.type):this.renderImageMaskForAttachment(t,e):null}renderGenericImageMask(t,e){const{supportsResizeAttachments:i}=this.viewModel,a=Ee(e),l={[s.itemImageResizable]:i};return o("div",{class:this.classes(s.itemMaskIcon,s.itemMask)},o("img",{title:t,alt:t,src:a,class:this.classes(l,s.itemImage)}))}renderImageMaskForAttachment(t,e){const{supportsResizeAttachments:i}=this.viewModel;if(!t)return null;const{contentType:a,name:l,url:d}=t;if(!i||!ee(a))return this.renderGenericImageMask(l,a);const c=this._getCSSTransform(t),m=c?{transform:c,"image-orientation":"none"}:{},y=`${d}${d?.includes("?")?"&":"?"}w=${e}`,p={[s.itemImageResizable]:i};return o("div",{class:this.classes(s.itemMask)},o("img",{styles:m,alt:l,title:l,src:y,class:this.classes(p,s.itemImage)}))}renderFile(t){const{file:e}=t;return o("li",{class:s.item,key:e},o("button",{key:"details-button",bind:this,class:s.itemButton,title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,onclick:()=>this._startEditFile(t),type:"button"},this.renderImageMask(t),o("label",{class:s.itemLabel},o("span",{class:s.itemFilename},e.name||this.messages.noTitle),o("span",{"aria-hidden":"true",class:this.classes(s.itemChevronIcon,J(this.container)?s.iconLeft:s.iconRight)}))))}renderAttachmentInfo({attachmentInfo:t,displayType:e}){const{viewModel:i,effectiveDisplayType:a}=this,{capabilities:l,supportsResizeAttachments:d}=i,{contentType:c,name:m,url:y}=t,p=this.renderImageMask(t,e==="list"?48:400),g=l.editing?o("span",{"aria-hidden":"true",class:this.classes(s.itemChevronIcon,J(this.container)?s.iconLeft:s.iconRight)}):null,_=[p,a==="preview"&&d&&ee(c)?null:o("label",{class:s.itemLabel},o("span",{class:s.itemFilename},m||this.messages.noTitle),g)],A=l.editing?o("button",{key:"details-button",bind:this,class:s.itemButton,title:this.messages.attachmentDetails,"aria-label":this.messages.attachmentDetails,"data-attachment-info-id":t.id,onclick:()=>this._startEditAttachment(t),type:"button"},_):o("a",{key:"details-link",class:s.itemButton,href:y??void 0,target:"_blank"},_);return o("li",{class:s.item,key:t},A)}renderAttachmentContainer(){const{effectiveDisplayType:t,viewModel:e,visibleElements:i}=this,{attachmentInfos:a,capabilities:l,fileInfos:d}=e,c=!!a?.length,m=!!d?.length,y={[s.containerList]:t!=="preview",[s.containerPreview]:t==="preview"},p=l.editing&&l.operations?.add&&i.addButton?o("button",{bind:this,onclick:()=>this._startAddAttachment(),class:this.classes(s.esriButton,s.esriButtonTertiary,s.addAttachmentButton),type:"button"},o("span",{"aria-hidden":"true",class:this.classes(s.itemAddIcon,s.iconPlus)}),this.messages.add):void 0,g=c?o("ul",{key:"attachments-list",class:s.items},a.toArray().map(w=>this.renderAttachmentInfo({attachmentInfo:w,displayType:t}))):void 0,_=m?o("ul",{key:"file-list",class:s.items},d.toArray().map(w=>this.renderFile(w))):void 0,A=m||c?void 0:o("div",{class:s.empty},this.messages.noAttachments);return o("div",{key:"attachments-container",class:this.classes(s.container,y)},g,_,A,p)}_modeChanged(){this._set("error",null),this._set("selectedFile",null)}_handleFileInputChange(t){const e=t.target,i=e&&e.files&&e.files.item(0);this._set("selectedFile",i)}_submitDeleteAttachment(t,e){t.preventDefault(),e&&("file"in e?this.deleteFile(e.file):e&&this.deleteAttachment(e))}_submitAddAttachment(t){t.preventDefault(),this.viewModel.filesEnabled?this.addFile():this.addAttachment()}_submitUpdateAttachment(t,e){t.preventDefault(),e&&"file"in e?this.updateFile():this.updateAttachment()}_startEditAttachment(t){const{viewModel:e}=this;e.activeFileInfo=null,e.activeAttachmentInfo=t,e.mode="edit"}_startEditFile(t){const{viewModel:e}=this;e.activeAttachmentInfo=null,e.activeFileInfo=t,e.mode="edit"}_startAddAttachment(){this.viewModel.mode="add"}_cancelForm(t){t.preventDefault(),this.viewModel.mode="view"}_getCSSTransform(t){const{orientationInfo:e}=t;return!this._supportsImageOrientation&&e?[e.rotation?`rotate(${e.rotation}deg)`:"",e.mirrored?"scaleX(-1)":""].join(" "):""}};n([r()],b.prototype,"capabilities",null),n([r()],b.prototype,"displayType",void 0),n([r({readOnly:!0})],b.prototype,"effectiveDisplayType",null),n([r()],b.prototype,"graphic",null),n([r()],b.prototype,"label",null),n([r(),G("esri/widgets/Attachments/t9n/Attachments")],b.prototype,"messages",void 0),n([r(),G("esri/core/t9n/Units")],b.prototype,"messagesUnits",void 0),n([r({readOnly:!0})],b.prototype,"selectedFile",void 0),n([r({readOnly:!0})],b.prototype,"submitting",void 0),n([r({readOnly:!0})],b.prototype,"error",void 0),n([r({type:oe})],b.prototype,"viewModel",void 0),n([r()],b.prototype,"visibleElements",void 0),n([ie("visibleElements")],b.prototype,"castVisibleElements",null),b=n([q("esri.widgets.Attachments")],b);const ze=b,S=100;let u=class extends ye(ge(fe(ae))){constructor(e){super(e),this._loaded=!1,this._queryAbortController=null,this._queryPageAbortController=null,this._queryFeatureCountAbortController=null,this.featuresPerPage=10,this.description=null,this.graphic=null,this.layer=null,this.map=null,this.orderByFields=null,this.featureCount=0,this.relationshipId=null,this.showAllEnabled=!1,this.title=null,this._cancelQuery=()=>{const{_queryAbortController:i}=this;i&&i.abort(),this._queryAbortController=null},this._cancelQueryFeatureCount=()=>{const{_queryFeatureCountAbortController:i}=this;i&&i.abort(),this._queryFeatureCountAbortController=null},this._cancelQueryPage=()=>{const{_queryPageAbortController:i}=this;i&&i.abort(),this._queryPageAbortController=null},this._queryController=async()=>{this._cancelQuery();const i=new AbortController;this._queryAbortController=i,await T(this._query()),this._queryAbortController===i&&(this._queryAbortController=null)},this._queryFeatureCountController=async()=>{this._loaded=!1,this._cancelQueryFeatureCount();const i=new AbortController;this._queryFeatureCountAbortController=i,await T(this._queryFeatureCount()),this._queryFeatureCountAbortController===i&&(this._queryFeatureCountAbortController=null),this._loaded=!0},this._queryPageController=async()=>{const i=new AbortController;this._queryPageAbortController=i,await T(this._queryPage()),this._queryPageAbortController===i&&(this._queryPageAbortController=null)},this._queryDebounced=j(this._queryController,S),this._queryFeatureCountDebounced=j(this._queryFeatureCountController,S),this._queryPageDebounced=j(this._queryPageController,S),this._query=async()=>{const{_queryAbortController:i,relatedFeatures:a}=this;this.featureCount&&(this._destroyRelatedFeatureViewModels(),this.featurePage=1,a.removeAll(),this.destroyed||a.addMany(this._sliceFeatures(await this._queryRelatedFeatures({signal:i?.signal}))))},this.handles.add([M(()=>[this.displayCount,this.graphic,this.layer,this.layer?.loaded,this.map,this.orderByFields,this.relationshipId,this.featuresPerPage,this.showAllEnabled,this.canQuery,this.featureCount],()=>this._queryDebounced(),H),M(()=>[this.featurePage,this.showAllEnabled],()=>this._queryPageDebounced()),M(()=>[this.layer,this.relationshipId,this.objectId,this.canQuery],()=>this._queryFeatureCountDebounced())])}destroy(){this._destroyRelatedFeatureViewModels(),this.relatedFeatures.removeAll(),this._cancelQuery(),this._cancelQueryFeatureCount(),this._cancelQueryPage()}set featurePage(e){const{featuresPerPage:i,featureCount:a}=this,l=1,d=Math.ceil(a/i)||1;this._set("featurePage",Math.min(Math.max(e,l),d))}get featurePage(){return this._get("featurePage")}get orderByFieldsFixedCasing(){const{orderByFields:e,relatedLayer:i}=this;return e&&i?.loaded?e.map(a=>{const l=a.clone();return l.field=qe(a.field,i),l}):e??[]}get supportsCacheHint(){return!!this.layer?.capabilities?.queryRelated?.supportsCacheHint}get canLoad(){return!!this.map&&typeof this.relationshipId=="number"&&typeof this.objectId=="number"}get canQuery(){const e=this.layer?.capabilities?.queryRelated;return!!(this.relatedLayer&&this.relationship&&typeof this.relationshipId=="number"&&typeof this.objectId=="number"&&e?.supportsCount&&e?.supportsPagination)}get itemDescriptionFieldName(){return this.orderByFieldsFixedCasing[0]?.field||null}set displayCount(e){this._set("displayCount",Math.min(Math.max(e,0),10))}get displayCount(){return this._get("displayCount")}get objectId(){return(this.objectIdField&&this.graphic?.attributes?.[this.objectIdField])??null}get objectIdField(){return this.layer?.objectIdField||null}get relatedFeatures(){return this._get("relatedFeatures")||new P}get relatedFeatureInfos(){const{itemDescriptionFieldName:e,relatedFeatures:i,relatedLayer:a}=this;if(!i.length||!a)return[];const l=a&&"formTemplate"in a&&a.formTemplate,d=l&&l?.title||void 0;return i.map(c=>{let m;if(e){const y=c.getAttribute(e),p=a.fieldsIndex.get(e);if(p){const g=Be([y],[p])[e];g!=null&&(m=g.toString())}}return{feature:c,description:m,title:d?ke(d,c.attributes,a.fieldsIndex):void 0}}).toArray()}get relatedLayer(){const{layer:e,map:i,relationship:a}=this;return e?.loaded&&i&&a?Le(i,e,a)??null:null}get relationship(){const{relationshipId:e,layer:i}=this;return typeof e=="number"?i?.relationships?.find(({id:a})=>a===e)??null:null}get relatedFeatureViewModels(){return this._get("relatedFeatureViewModels")||new P}get state(){const{_queryAbortController:e,_queryFeatureCountAbortController:i,_queryPageAbortController:a,canQuery:l,_loaded:d,canLoad:c}=this;return i||c&&!d?"loading":e||a?"querying":l?"ready":"disabled"}getRelatedFeatureByObjectId(e){return this.relatedFeatures.find(i=>i.getObjectId()===e)}_destroyRelatedFeatureViewModels(){this.relatedFeatureViewModels?.forEach(e=>!e.destroyed&&e.destroy()),this.relatedFeatureViewModels.removeAll()}async _queryFeatureCount(){const{layer:e,relatedLayer:i,relationshipId:a,objectId:l,_queryFeatureCountAbortController:d,canQuery:c,supportsCacheHint:m}=this;if(await e?.load(),await i?.load(),!c||!e||!i)return void this._set("featureCount",0);const y=i.createQuery(),p=new K({cacheHint:m,relationshipId:a,returnGeometry:!1,objectIds:[l],where:y.where??void 0}),g=await e.queryRelatedFeaturesCount(p,{signal:d?.signal});this._set("featureCount",g[l]||0)}_sliceFeatures(e){const{showAllEnabled:i,displayCount:a}=this;return i?e:a?e.slice(0,a):[]}async _queryPage(){const{relatedFeatures:e,featurePage:i,showAllEnabled:a,_queryPageAbortController:l,featureCount:d}=this;!a||i<2||!d||e.addMany(await this._queryRelatedFeatures({signal:l?.signal}))}async _queryRelatedFeatures(e){const{orderByFieldsFixedCasing:i,showAllEnabled:a,featuresPerPage:l,displayCount:d,layer:c,relationshipId:m,featurePage:y,featureCount:p,relatedLayer:g,supportsCacheHint:_}=this,{canQuery:A,objectId:w}=this;if(!A||!c||!g)return[];const E=a?((y-1)*l+p)%p:0,x=a?l:d,D=g.objectIdField,R=[...i.map(F=>F.field),...Pe(g),D].filter(be),O=i.map(F=>`${F.field} ${F.order}`),B=g.createQuery(),ce=new K({orderByFields:O,start:E,num:x,outFields:R,cacheHint:_,relationshipId:m,returnGeometry:!1,objectIds:[w],where:B.where??void 0}),he=await c.queryRelatedFeatures(ce,{signal:e?.signal}),N=he[w]?.features||[];return N.forEach(F=>{F.sourceLayer=g,F.layer=g}),N}};n([r()],u.prototype,"_loaded",void 0),n([r()],u.prototype,"_queryAbortController",void 0),n([r()],u.prototype,"_queryPageAbortController",void 0),n([r()],u.prototype,"_queryFeatureCountAbortController",void 0),n([r({value:1})],u.prototype,"featurePage",null),n([r()],u.prototype,"featuresPerPage",void 0),n([r({readOnly:!0})],u.prototype,"orderByFieldsFixedCasing",null),n([r({readOnly:!0})],u.prototype,"supportsCacheHint",null),n([r({readOnly:!0})],u.prototype,"canLoad",null),n([r({readOnly:!0})],u.prototype,"canQuery",null),n([r()],u.prototype,"description",void 0),n([r({readOnly:!0})],u.prototype,"itemDescriptionFieldName",null),n([r({value:3})],u.prototype,"displayCount",null),n([r({type:se})],u.prototype,"graphic",void 0),n([r()],u.prototype,"layer",void 0),n([r()],u.prototype,"map",void 0),n([r({readOnly:!0})],u.prototype,"objectId",null),n([r({readOnly:!0})],u.prototype,"objectIdField",null),n([r()],u.prototype,"orderByFields",void 0),n([r({readOnly:!0})],u.prototype,"relatedFeatures",null),n([r({readOnly:!0})],u.prototype,"relatedFeatureInfos",null),n([r({readOnly:!0})],u.prototype,"relatedLayer",null),n([r({readOnly:!0})],u.prototype,"relationship",null),n([r()],u.prototype,"featureCount",void 0),n([r({readOnly:!0})],u.prototype,"relatedFeatureViewModels",null),n([r()],u.prototype,"relationshipId",void 0),n([r()],u.prototype,"showAllEnabled",void 0),n([r()],u.prototype,"state",null),n([r()],u.prototype,"title",void 0),n([r()],u.prototype,"getRelatedFeatureByObjectId",null),u=n([q("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")],u);const Qe=u;var le;const k=Symbol("anchorHandles");let C=class extends ve.EventedAccessor{constructor(t){super(t),this[le]=new _e,this.location=null,this.screenLocationEnabled=!1,this.view=null,this[k].add([we(()=>Fe(this.screenLocationEnabled?this.view:null,e=>[e.size,e.type==="3d"?e.camera:e.viewpoint]),()=>this.notifyChange("screenLocation")),M(()=>this.screenLocation,(e,i)=>{e!=null&&i!=null&&this.emit("view-change")})])}destroy(){this.view=null,this[k]=Ae(this[k])}get screenLocation(){const{location:t,view:e,screenLocationEnabled:i}=this;return i&&t!=null&&e!=null&&e.ready?e.toScreen?.(t):null}};le=k,n([r()],C.prototype,"location",void 0),n([r()],C.prototype,"screenLocation",null),n([r()],C.prototype,"screenLocationEnabled",void 0),n([r()],C.prototype,"view",void 0),C=n([q("esri.widgets.support.AnchorElementViewModel")],C);const xe=C,De="esri.widgets.CompassViewModel";let L=class extends xe{constructor(e){super(e),this.visible=!1}};n([r()],L.prototype,"visible",void 0),L=n([q(De)],L);const de=L,Q="esri-spinner",V={base:Q,spinnerStart:`${Q}--start`,spinnerFinish:`${Q}--finish`};let $=class extends ne{constructor(t,e){super(t,e),this._animationDelay=500,this._animationPromise=null,this.viewModel=new de}initialize(){this.addHandles(M(()=>this.visible,t=>this._visibleChange(t)))}destroy(){this._animationPromise=null}get location(){return this.viewModel.location}set location(t){this.viewModel.location=t}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}show(t){const{location:e,promise:i}=t??{};e&&(this.viewModel.location=e),this.visible=!0;const a=()=>this.hide();i&&i.catch(()=>{}).then(a)}hide(){this.visible=!1}render(){const{visible:t}=this,{screenLocation:e}=this.viewModel,i=!!e,a=t&&i,l=!t&&i,d={[V.spinnerStart]:a,[V.spinnerFinish]:l},c=this._getPositionStyles();return o("div",{class:this.classes(V.base,d),styles:c})}_visibleChange(t){if(t)return void(this.viewModel.screenLocationEnabled=!0);const e=Ie(this._animationDelay);this._animationPromise=e,e.catch(()=>{}).then(()=>{this._animationPromise===e&&(this.viewModel.screenLocationEnabled=!1,this._animationPromise=null)})}_getPositionStyles(){const{screenLocation:t,view:e}=this.viewModel;if(e==null||t==null)return{};const{padding:i}=e;return{left:t.x-i.left+"px",top:t.y-i.top+"px"}}};n([r()],$.prototype,"location",null),n([r()],$.prototype,"view",null),n([r({type:de})],$.prototype,"viewModel",void 0),n([r()],$.prototype,"visible",null),$=n([q("esri.widgets.Spinner")],$);const He=$;export{ze as B,de as c,He as h,xe as m,Qe as q,oe as y};