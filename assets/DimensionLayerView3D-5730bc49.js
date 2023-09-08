import{aD as a,aE as t,aF as y,b4 as h,ay as w,bm as u,bu as d,aB as V,aw as c,aV as p,aC as _,dM as m,az as v}from"./index-cdda5707.js";import{n as A}from"./LayerView3D-b22e015d.js";import{d as D}from"./LayerView-200784d6.js";const f=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return this.analysisView!=null&&this.analysisView.interactive}set interactive(e){this.analysisView!=null&&(this.analysisView.interactive=e)}get results(){return this.analysisView!=null?this.analysisView.results:new h}get selectedDimension(){return this.analysisView!=null?this.analysisView.selectedDimension:null}set selectedDimension(e){this.analysisView!=null&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(this.analysisView==null)throw w();await this.analysisView.createLengthDimensions(e)}};return a([t()],s.prototype,"layer",void 0),a([t()],s.prototype,"interactive",null),a([t({readOnly:!0})],s.prototype,"results",null),a([t()],s.prototype,"selectedDimension",null),a([t()],s.prototype,"analysisView",void 0),s=a([y("esri.views.layers.DimensionLayerView")],s),s},o="analysis-view-handles";let n=class extends A(f(D)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(u(()=>this.layer.source,i=>{this._destroyAnalysisView(),i!=null&&this._createAnalysisView(i)},d),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new V("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=c(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=p(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(e==null){const r=await this._loadAnalysisModule();this._analysisModule=r,e=r}const l=new e.default({analysis:i,view:this.view,parent:this});if(await l.when(),m(s))throw l.destroy(),w();return l}_loadAnalysisModule(){return v(()=>import("./DimensionAnalysisView3D-7ce84e69.js"),["./DimensionAnalysisView3D-7ce84e69.js","./index-cdda5707.js","./index-7772480e.css","./AnalysisView3D-cfac887c.js","./LengthDimension-43edc737.js","./getDefaultUnitForView-399249e8.js","./Segment-71ac8f09.js","./LineVisualElement-b4960232.js","./TextOverlayItem-7000102f.js","./euclideanLengthMeasurementUtils-37e24abd.js","./measurementUtils-6d7e5fc6.js","./analysisThemeUtils-8c8dee01.js","./colorUtils-c9a97827.js","./manipulatorUtils-adaad8cc.js","./ImageMaterial-0a3c66dc.js","./Factory-1fcb5e33.js","./dragEventPipeline-4a965366.js","./drawUtils-3b7b83b9.js","./VerticesVisualElement-39765817.js","./RightAngleQuadVisualElement-54788f2a.js","./VisualElementResources-b7d29b2e.js","./PointVisualElement-d90294de.js","./SnappingContext-c96cf417.js","./PointSnappingHint-512a7cc6.js","./EditGeometryOperations-36bcef90.js","./SnappingOperation-3825d76a.js","./dehydratedFeatureComparison-860c6b48.js","./analysisViewUtils-fe82c30d.js"],import.meta.url)}};a([t()],n.prototype,"type",void 0),a([t()],n.prototype,"analysisView",void 0),a([t()],n.prototype,"_createAnalysisViewTask",void 0),n=a([y("esri.views.3d.layers.DimensionLayerView3D")],n);const g=n;export{g as default};
