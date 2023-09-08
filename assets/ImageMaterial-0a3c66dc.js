import{kS as m,kT as P,kU as v,dV as f,kV as u,kW as y,kX as O,kY as A,kZ as $,k4 as i,k_ as g,k$ as S,l0 as c,l1 as C,l2 as _,aD as o,l3 as n,l4 as d,l5 as E,az as x,l6 as b,l7 as w,l8 as N,l9 as D,la as M,lb as R,lc as k,ld as I,le as F,lf as L,lg as U,lh as W,li as z,lj as B,lk as G,ll as j,lm as H,k5 as p,ln as V,lo as q,lp as Q,lq as X}from"./index-cdda5707.js";function Y(a){const e=new m,{vertex:t,fragment:s}=e;return P(t,a),e.include(v,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(O,a),s.uniforms.add(new A("tex",l=>l.texture),new $("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(g)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include(S),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(g)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const Z=Object.freeze(Object.defineProperty({__proto__:null,build:Y},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new N(e.rctx,h.shader.get().build(this.configuration),D)}_setPipelineState(e,t){const s=this.configuration,l=e===c.NONE,T=e===c.FrontFace;return M({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?J:R(e),culling:k(s.cullFace),depthTest:{func:I(e)},depthWrite:l?s.writeDepth?F:null:L(e),colorWrite:U,stencilWrite:s.hasOccludees?W:null,stencilTest:s.hasOccludees?t?z:B:null,polygonOffset:l||T?null:G(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new E(Z,()=>x(()=>import("./ImageMaterial.glsl-352c8cb1.js"),["./ImageMaterial.glsl-352c8cb1.js","./index-cdda5707.js","./index-7772480e.css"],import.meta.url));const J=C(_.ONE,_.ONE_MINUS_SRC_ALPHA);class r extends b{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends j{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<H,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===p.DRAPED_MATERIAL?!0:t===i.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new K(e)}createBufferWriter(){return new V(q)}}class K extends Q{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends X{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,Y as v};
