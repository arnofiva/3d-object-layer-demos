import{aD as r,aE as p,aW as c,du as l,dv as y,aF as m,cw as f,cs as d,ds as u,dw as g,b0 as w}from"./index-cdda5707.js";var o;let t=o=class extends f{constructor(a){super(a),this.geometry=null,this.type="clip"}writeGeometry(a,s,i,e){if(e.layer&&e.layer.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!d(a.spatialReference,e.layer.spatialReference))return void(e&&e.messages&&e.messages.push(new u("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));const n=new c;g(a,n,e.layer.spatialReference),s[i]=n.toJSON(e)}else s[i]=a.toJSON(e);delete s[i].spatialReference}clone(){return new o({geometry:w(this.geometry),type:this.type})}};r([p({type:c}),l()],t.prototype,"geometry",void 0),r([y(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r([p({type:["clip","mask","replace"],nonNullable:!0}),l()],t.prototype,"type",void 0),t=o=r([m("esri.layers.support.SceneModification")],t);const h=t;export{h as f};
