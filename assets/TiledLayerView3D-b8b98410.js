import{aD as l,aE as r,dm as u,dn as g,aF as d,aB as o,cS as f,dp as y}from"./index-cdda5707.js";const w=p=>{let i=class extends p{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,a=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:n,effectiveMaxLOD:s}=this.layer.tilemapCache;t=this.tileInfo.lodAt(n).scale,a=this.tileInfo.lodAt(s).scale}return{minScale:t,maxScale:a}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,a=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&a.maxLevel++,a}getTileUrl(e,t,a){return this.layer.getTileUrl(e,t,a)}_addTilingSchemeMatchPromise(){if(this.fullExtent==null)return this.addResolvingPromise(Promise.reject(new o("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(e!=null)return this.addResolvingPromise(Promise.reject(e));const t=f(()=>this.view?.basemapTerrain?.tilingSchemeLocked).then(()=>{const a=this.view.basemapTerrain.tilingScheme,n=this._getTileInfoCompatibilityError(this.tileInfo,a);if(n)throw n});this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const a=y(e,t,this.view.spatialReference,this.view.state.viewingMode);if(a){const n={layer:this.layer,error:a};let s;switch(a.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":s=new o("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",n);break;default:s=new o("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",n)}return s}return null}_getTileInfoCompatibilityError(e,t){return e!=null&&t.compatibleWith(e)?null:new o("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const a={minLevel:0,maxLevel:1/0},n=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!n)return a;const s=n.levels[0],h=m=>{const c=Math.log(s.scale/m)/Math.LN2;return .5-Math.abs(.5-c%1)<1e-9?Math.round(c):Math.ceil(c)};return e!=null&&e>0&&(a.minLevel=Math.max(0,h(e))),t!=null&&t>0&&(a.maxLevel=Math.max(0,h(t))),a}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return l([r({readOnly:!0})],i.prototype,"imageFormatIsOpaque",null),l([r({readOnly:!0})],i.prototype,"updating",void 0),l([r(u)],i.prototype,"updatingProgress",void 0),l([r(g)],i.prototype,"updatingProgressValue",void 0),l([r()],i.prototype,"fullExtent",null),l([r({readOnly:!0})],i.prototype,"isOpaque",null),l([r()],i.prototype,"dataScaleRange",null),l([r({readOnly:!0})],i.prototype,"dataLevelRange",null),l([r({readOnly:!0})],i.prototype,"displayLevelRange",null),l([r()],i.prototype,"layer",void 0),l([r()],i.prototype,"tileInfo",void 0),i=l([d("esri.views.3d.layers.TiledLayerView3D")],i),i};export{w as o};
