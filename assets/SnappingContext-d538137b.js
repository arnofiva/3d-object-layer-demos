import{aK as a}from"./main-79e5ed80.js";import{o as l,c as u,d as h,f as p}from"./SnappingManager-e561e372.js";import{n as c}from"./PointSnappingHint-b8c54ed3.js";class g{draw(e,i){const n=this._getUniqueHints(e),r=this.sortUniqueHints(n),s=[];for(const t of r)t instanceof l&&s.push(this.visualizeIntersectionPoint(t,i)),t instanceof u&&s.push(this.visualizeLine(t,i)),t instanceof h&&s.push(this.visualizeParallelSign(t,i)),t instanceof p&&s.push(this.visualizeRightAngleQuad(t,i)),t instanceof c&&s.push(this.visualizePoint(t,i));return a(s)}sortUniqueHints(e){return e}_getUniqueHints(e){const i=[];for(const n of e){let r=!0;for(const s of i)if(n.equals(s)){r=!1;break}r&&i.push(n)}return i}}class H{constructor(e){this.vertexHandle=null,this.excludeFeature=null,this.visualizer=null,this.selfSnappingZ=null,this.editGeometryOperations=e.editGeometryOperations,this.elevationInfo=e.elevationInfo,this.pointer=e.pointer,this.vertexHandle=e.vertexHandle,this.excludeFeature=e.excludeFeature,this.visualizer=e.visualizer,this.selfSnappingZ=e.selfSnappingZ}get coordinateHelper(){return this.editGeometryOperations.data.coordinateHelper}get spatialReference(){return this.coordinateHelper.spatialReference}}export{H as e,g as r};
