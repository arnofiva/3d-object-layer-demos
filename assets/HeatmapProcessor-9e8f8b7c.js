import{aD as _,aF as F,bl as S,gU as f,gV as U}from"./index-cdda5707.js";import{c as g}from"./definitions-4b766362.js";import{p as v,o as n}from"./tileUtils-ed24d7ab.js";class o{constructor(t,i){this.offset=t,this.extent=i}}function E(s){const t=s.key,i=new Map,a=256,e=g,r=s.tileInfoView.tileInfo.isWrappable;return i.set(n(t,-1,-1,r).id,new o([-e,-e],[e-a,e-a,e,e])),i.set(n(t,0,-1,r).id,new o([0,-e],[0,e-a,e,e])),i.set(n(t,1,-1,r).id,new o([e,-e],[0,e-a,a,e])),i.set(n(t,-1,0,r).id,new o([-e,0],[e-a,0,e,e])),i.set(n(t,1,0,r).id,new o([e,0],[0,0,a,e])),i.set(n(t,-1,1,r).id,new o([-e,e],[e-a,0,e,a])),i.set(n(t,0,1,r).id,new o([0,e],[0,0,e,a])),i.set(n(t,1,1,r).id,new o([e,e],[0,0,a,a])),i}let c=class extends v{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(s,t){const i=t.schema.processors[0];i.type==="heatmap"&&S(this._schema,i)&&(s.mesh=!0,this._schema=i)}onTileUpdate(s){for(const t of s.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(s){const t={clear:!0};return this._tileKeyToFeatureSets.delete(s.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:s.id,data:t})}async onTileMessage(s,t,i){this._tileKeyToFeatureSets.has(s.key.id)||this._tileKeyToFeatureSets.set(s.key.id,new Map);const a=this._tileKeyToFeatureSets.get(s.key.id);if(a&&t.addOrUpdate!=null&&t.addOrUpdate.hasFeatures&&a.set(t.addOrUpdate.instance,t),t.end){const e=[],r=E(s);this._tileKeyToFeatureSets.forEach((u,d)=>{if(d===s.key.id)u.forEach(l=>f(l.addOrUpdate,h=>e.push(h)));else if(r.has(d)){const l=r.get(d),[h,T]=l.offset;u.forEach(w=>f(w.addOrUpdate,k=>{const K=k.transform(h,T,1,1);e.push(K)}))}});const p=U(e,this._schema.mesh,512,512),y={tileKey:s.key.id,intensityInfo:p},m=[p.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",y,{...i,transferList:m})}}onTileError(s,t,i){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:s.id,error:t},i)}};c=_([F("esri.views.2d.layers.features.processors.HeatmapProcessor")],c);const M=c;export{M as default};
