import{aD as o,aE as r,aF as u,cn as y}from"./main-79e5ed80.js";let t=class extends y{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const l=this.get("tileStore.tileScheme.spatialReference");return l&&l.toJSON()||null}};o([r({readOnly:!0})],t.prototype,"supportsTileUpdates",null),o([r({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([r({constructOnly:!0})],t.prototype,"service",void 0),o([r()],t.prototype,"spatialReference",null),o([r({constructOnly:!0})],t.prototype,"tileInfo",void 0),o([r({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([u("esri.views.2d.layers.features.processors.BaseProcessor")],t);const f=t;function v(l,c,p,i){const e=l.clone(),n=1<<e.level,s=e.col+c,a=e.row+p;return i&&s<0?(e.col=s+n,e.world-=1):s>=n?(e.col=s-n,e.world+=1):e.col=s,e.row=a,e}export{v as o,f as p};
