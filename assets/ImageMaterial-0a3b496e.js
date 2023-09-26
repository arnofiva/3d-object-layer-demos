import{kr as m,ks as P,kt as v,en as f,ku as u,kv as y,kw as k,kx as O,ky as A,jY as i,kz as _,kA as $,kB as c,kC as S,kD as g,aD as o,kE as n,kF as d,kG as C,az as E,kH as x,kI as w,kJ as b,kK as N,kL as D,kM as M,kN as R,kO as I,kP as F,kQ as L,kR as U,kS as W,kT as z,kU as B,kV as G,kW as j,kX as H,jZ as p,kY as Q,kZ as V,k_ as q,k$ as Y}from"./main-79e5ed80.js";function Z(a){const e=new m,{vertex:t,fragment:s}=e;return P(t,a),e.include(v,a),e.attributes.add(f.POSITION,"vec3"),e.attributes.add(f.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(y,a),e.include(k,a),s.uniforms.add(new O("tex",l=>l.texture),new A("opacity",l=>l.opacity)),e.varyings.add("vTexCoord","vec2"),a.output===i.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(_)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(s.include($),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${u.float(_)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${a.transparencyPassType===c.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),e}const J=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:"Module"}));class h extends w{initializeProgram(e){return new b(e.rctx,h.shader.get().build(this.configuration),N)}_setPipelineState(e,t){const s=this.configuration,l=e===c.NONE,T=e===c.FrontFace;return D({blending:s.output!==i.Color&&s.output!==i.Alpha||!s.transparent?null:l?K:M(e),culling:R(s.cullFace),depthTest:{func:I(e)},depthWrite:l?s.writeDepth?F:null:L(e),colorWrite:U,stencilWrite:s.hasOccludees?W:null,stencilTest:s.hasOccludees?t?z:B:null,polygonOffset:l||T?null:G(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new C(J,()=>E(()=>import("./ImageMaterial.glsl-d76ea3aa.js"),["./ImageMaterial.glsl-d76ea3aa.js","./main-79e5ed80.js","./main-7772480e.css"],import.meta.url));const K=S(g.ONE,g.ONE_MINUS_SRC_ALPHA);class r extends x{constructor(){super(...arguments),this.output=i.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=c.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}o([n({count:i.COUNT})],r.prototype,"output",void 0),o([n({count:d.COUNT})],r.prototype,"cullFace",void 0),o([n()],r.prototype,"hasSlicePlane",void 0),o([n()],r.prototype,"transparent",void 0),o([n()],r.prototype,"enableOffset",void 0),o([n()],r.prototype,"writeDepth",void 0),o([n()],r.prototype,"hasOccludees",void 0),o([n({count:c.COUNT})],r.prototype,"transparencyPassType",void 0),o([n()],r.prototype,"hasMultipassTerrain",void 0),o([n()],r.prototype,"cullAboveGround",void 0);class ae extends j{constructor(e){super(e,new ee),this.supportsEdges=!0,this._configuration=new r}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<H,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===i.Color||t===i.Alpha||t===i.Highlight?e===p.DRAPED_MATERIAL?!0:t===i.Highlight?e===p.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?p.TRANSPARENT_MATERIAL:p.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:p.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new X(e)}createBufferWriter(){return new Q(V)}}class X extends q{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==i.Color&&this._output!==i.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class ee extends Y{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ae as c,Z as v};
