import{cr as h,cy as w,aB as y,aw as d,aV as V,aC as _,ee as c,az as u,aD as e,aE as n,aF as p}from"./main-79e5ed80.js";import{n as A}from"./LayerView3D-af974166.js";import{d as f}from"./LayerView-535107ac.js";const o="analysis-view-handles";let i=class extends A(f){constructor(s){super(s),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.handles.add(h(()=>this.layer.analysis,s=>{this._destroyAnalysisView(),s!=null&&this._createAnalysisView(s)},w),o)}destroy(){this.handles.remove(o),this._destroyAnalysisView()}async whenAnalysisView(){if(this.analysisView!=null)return this.analysisView;if(this._createAnalysisViewTask!=null)return this._createAnalysisViewTask.promise;throw new y("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return this._createAnalysisViewTask!=null||this.analysisView!=null&&this.analysisView.updating}_createAnalysisView(s){const t=d(async a=>(this.analysisView=await this._createAnalysisViewPromise(s,a),this._createAnalysisViewTask===t&&(this._createAnalysisViewTask=null),this.analysisView));this._createAnalysisViewTask=t}_destroyAnalysisView(){this.analysisView=V(this.analysisView),this._createAnalysisViewTask=_(this._createAnalysisViewTask)}async _createAnalysisViewPromise(s,t){let a=this._analysisModule;if(a==null){const r=await this._loadAnalysisModule();this._analysisModule=r,a=r}const l=new a.default({analysis:s,view:this.view,parent:this});if(await l.when(),c(t))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:s});return l}_loadAnalysisModule(){return u(()=>import("./LineOfSightAnalysisView3D-ed57f0e3.js"),["./LineOfSightAnalysisView3D-ed57f0e3.js","./main-79e5ed80.js","./main-7772480e.css","./AnalysisView3D-797ede55.js","./LineOfSightAnalysisTarget-97c1d998.js","./elevationInfoUtils-287337e4.js","./LineVisualElement-edcd3279.js","./analysisThemeUtils-558736fc.js","./colorUtils-fa6b524d.js","./colorUtils-c0f43caf.js","./manipulatorUtils-1c1ed0c0.js","./ImageMaterial-0a3b496e.js","./manipulatorUtils-cf589e3d.js","./PointVisualElement-62697d84.js","./VisualElementResources-345e70b2.js","./analysisViewUtils-58c58951.js","./dragEventPipeline-491faa8f.js","./drawUtils-f091ac1a.js"],import.meta.url)}};e([n()],i.prototype,"type",void 0),e([n()],i.prototype,"layer",void 0),e([n()],i.prototype,"analysisView",void 0),e([n()],i.prototype,"_createAnalysisViewTask",void 0),i=e([p("esri.views.3d.layers.LineOfSightLayerView3D")],i);const k=i;export{k as default};