import{c as ge}from"./ArcadeDate-5405c860.js";import{Q as x,V as L,A as R,L as P,c as A,M as we,P as Ie,B as oe,v as S,I as j,z as N,E as B,K as Fe,q as z,O as Ee,b as H,h as De,S as be,U as q,X as K,_ as X}from"./arcadeUtils-e351a840.js";import{t as m,e as p}from"./executionError-e8d36121.js";import{e as le,j as Ae,q as fe,f as xe,c as ce,a as Ne,b as Te,d as Se,g as Y,k as Le,F as ve,T as Pe,y as k,x as Re,E as V,D as v,A as _}from"./featureSetUtils-c1e05f92.js";import{t as Me}from"./ImmutableArray-ee1d0ce7.js";import{t as Ce}from"./portalUtils-557c2ff0.js";import{u as Oe,N as ue}from"./SpatialFilter-f0d6ad31.js";import{dL as de,el as ke,fA as $,go as W}from"./main-79e5ed80.js";import{f as D}from"./WhereClause-ae8c5a06.js";import"./number-2aff8d5a.js";import"./arcadeTimeUtils-34a08cd2.js";import"./centroid-b0bb7e76.js";import"./hash-6f442295.js";import"./executeQueryJSON-3a003e36.js";import"./query-2b60d096.js";import"./normalizeUtils-996b11fe.js";import"./normalizeUtilsCommon-4aa2ad72.js";import"./pbfQueryUtils-93c2b136.js";import"./pbf-725ddaf6.js";import"./executeQueryPBF-a010945f.js";import"./AttachmentInfo-03d5deea.js";import"./executeForIds-78f0bfd3.js";import"./SubtypeGroupLayer-70169304.js";import"./Subtype-44c0ca14.js";import"./geometryEngineAsync-38c137ff.js";function ze(s,n,r,d){if(d.length===1){if(N(d[0]))return X(s,d[0],-1);if(z(d[0]))return X(s,d[0].toArray(),-1)}return X(s,d,-1)}async function ee(s,n,r){const d=s.getVariables();if(d.length>0){const I=[];for(let a=0;a<d.length;a++){const t={name:d[a]};I.push(await n.evaluateIdentifier(r,t))}const e={};for(let a=0;a<d.length;a++)e[d[a]]=I[a];return s.parameters=e,s}return s}function u(s,n,r=null){for(const d in s)if(d.toLowerCase()===n.toLowerCase())return s[d];return r}function me(s){if(s===null)return null;const n={type:u(s,"type",""),name:u(s,"name","")};if(n.type==="range")n.range=u(s,"range",[]);else{n.codedValues=[];for(const r of u(s,"codedValues",[]))n.codedValues.push({name:u(r,"name",""),code:u(r,"code",null)})}return n}function ne(s){if(s===null)return null;const n={},r=u(s,"wkt",null);r!==null&&(n.wkt=r);const d=u(s,"wkid",null);return d!==null&&(n.wkid=d),n}function pe(s){if(s===null)return null;const n={hasZ:u(s,"hasz",!1),hasM:u(s,"hasm",!1)},r=u(s,"spatialreference",null);r&&(n.spatialReference=ne(r));const d=u(s,"x",null);if(d!==null)return n.x=d,n.y=u(s,"y",null),n;const I=u(s,"rings",null);if(I!==null)return n.rings=I,n;const e=u(s,"paths",null);if(e!==null)return n.paths=e,n;const a=u(s,"points",null);if(a!==null)return n.points=a,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const c=u(s,t,null);c!==null&&(n[t]=c)}return n}function je(s,n){for(const r of n)if(r===s)return!0;return!1}function He(s){return!!s.layerDefinition&&!!s.featureSet&&je(s.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&N(s.layerDefinition.fields)!==!1&&N(s.featureSet.features)!==!1}function dn(s){s.mode==="async"&&(s.functions.timezone=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,1,2,n,r),L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(e[1]instanceof R)||e[1].hasField("type")===!1)throw new m(n,p.InvalidParameter,r);const c=e[1].field("type");if(P(c)===!1)throw new m(n,p.InvalidParameter,r);switch(A(c).toLowerCase()){case"preferredtimezone":return e[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return e[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return e[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(e[1].hasField("fieldname")&&P(e[1].field("fieldname")))return e[0].dateTimeReferenceFieldIndex.fieldTimeZone(A(e[1].field("fieldname")))}throw new m(n,p.InvalidParameter,r)}const a=we(e[0],Ie(n));if(a===null)return null;const t=a.timeZone;return t==="system"?ge.systemTimeZoneCanonicalName:t})},s.functions.sqltimestamp=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{x(e,1,3,n,r);const a=e[0];if(oe(a)){if(e.length===1)return a.toSQLString();if(e.length===2)return a.changeTimeZone(A(e[1])).toSQLString();throw new m(n,p.InvalidParameter,r)}if(L(a)){if(e.length!==3)throw new m(n,p.InvalidParameter,r);await a.load();const t=A(e[1]);if(oe(e[2])===!1)throw new m(n,p.InvalidParameter,r);const c=a.fieldTimeZone(t);return c===null?e[2].toSQLString():e[2].changeTimeZone(c).toSQLString()}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"sqltimestamp",min:2,max:4}),s.functions.featuresetbyid=function(n,r){return s.standardFunctionAsync(n,r,(d,I,e)=>{if(x(e,2,4,n,r),e[0]instanceof le){const a=A(e[1]);let t=S(e[2],null);const c=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetById(a,c,t)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyid",min:2,max:4}),s.functions.getfeatureset=function(n,r){return s.standardFunctionAsync(n,r,(d,I,e)=>{if(x(e,1,2,n,r),B(e[0])){let a=S(e[1],"datasource");return a===null&&(a="datasource"),a=A(a).toLowerCase(),Ae(e[0].fullSchema(),a,n.lrucache,n.interceptor,n.spatialReference)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"getfeatureset",min:1,max:2}),s.functions.featuresetbyportalitem=function(n,r){return s.standardFunctionAsync(n,r,(d,I,e)=>{if(x(e,2,5,n,r),e[0]===null)throw new m(n,p.PortalRequired,r);if(e[0]instanceof Fe){const l=A(e[1]),i=A(e[2]);let o=S(e[3],null);const f=j(S(e[4],!0));if(o===null&&(o=["*"]),N(o)===!1)throw new m(n,p.InvalidParameter,r);let w=null;return w=n.services&&n.services.portal?n.services.portal:de.getDefault(),w=Ce(e[0],w),fe(l,i,n.spatialReference,o,f,w,n.lrucache,n.interceptor)}if(P(e[0])===!1)throw new m(n,p.PortalRequired,r);const a=A(e[0]),t=A(e[1]);let c=S(e[2],null);const y=j(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,p.InvalidParameter,r);return fe(a,t,n.spatialReference,c,y,n.services?.portal??de.getDefault(),n.lrucache,n.interceptor)})},s.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),s.functions.featuresetbyname=function(n,r){return s.standardFunctionAsync(n,r,(d,I,e)=>{if(x(e,2,4,n,r),e[0]instanceof le){const a=A(e[1]);let t=S(e[2],null);const c=j(S(e[3],!0));if(t===null&&(t=["*"]),N(t)===!1)throw new m(n,p.InvalidParameter,r);return e[0].featureSetByName(a,c,t)}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"featuresetbyname",min:2,max:4}),s.functions.featureset=function(n,r){return s.standardFunction(n,r,(d,I,e)=>{x(e,1,1,n,r);let a=e[0];const t={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(P(a))a=JSON.parse(a),a.layerDefinition!==void 0?(t.layerDefinition=a.layerDefinition,t.featureSet=a.featureSet,a.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=a.layerDefinition.spatialReference)):(t.featureSet.features=a.features,t.featureSet.geometryType=a.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=a.objectIdFieldName??"",t.layerDefinition.typeIdField=a.typeIdFieldName,t.layerDefinition.globalIdField=a.globalIdFieldName,t.layerDefinition.fields=a.fields,a.spatialReference&&(t.layerDefinition.spatialReference=a.spatialReference));else{if(!(e[0]instanceof R))throw new m(n,p.InvalidParameter,r);{a=JSON.parse(e[0].castToText(!0));const c=u(a,"layerdefinition");if(c!==null){t.layerDefinition.geometryType=u(c,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=u(c,"globalidfield",""),t.layerDefinition.objectIdField=u(c,"objectidfield",""),t.layerDefinition.typeIdField=u(c,"typeidfield",""),t.layerDefinition.hasZ=u(c,"hasz",!1)===!0,t.layerDefinition.hasM=u(c,"hasm",!1)===!0;const y=u(c,"spatialreference",null);y&&(t.layerDefinition.spatialReference=ne(y));for(const i of u(c,"fields",[])){const o={name:u(i,"name",""),alias:u(i,"alias",""),type:u(i,"type",""),nullable:u(i,"nullable",!0),editable:u(i,"editable",!0),length:u(i,"length",null),domain:me(u(i,"domain"))};t.layerDefinition.fields.push(o)}const l=u(a,"featureset",null);if(l){const i={};for(const o of t.layerDefinition.fields)i[o.name.toLowerCase()]=o.name;for(const o of u(l,"features",[])){const f={},w=u(o,"attributes",{});for(const E in w)f[i[E.toLowerCase()]]=w[E];t.featureSet.features.push({attributes:f,geometry:pe(u(o,"geometry",null))})}}}else{t.layerDefinition.hasZ=u(a,"hasz",!1)===!0,t.layerDefinition.hasM=u(a,"hasm",!1)===!0,t.layerDefinition.geometryType=u(a,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=u(a,"objectidfieldname",""),t.layerDefinition.typeIdField=u(a,"typeidfieldname","");const y=u(a,"spatialreference",null);y&&(t.layerDefinition.spatialReference=ne(y));let l=u(a,"fields",null);if(N(l))for(const f of l){const w={name:u(f,"name",""),alias:u(f,"alias",""),type:u(f,"type",""),nullable:u(f,"nullable",!0),editable:u(f,"editable",!0),length:u(f,"length",null),domain:me(u(f,"domain"))};t.layerDefinition.fields.push(w)}else l=null,t.layerDefinition.fields=l;const i={};for(const f of t.layerDefinition.fields)i[f.name.toLowerCase()]=f.name;let o=u(a,"features",null);if(N(o))for(const f of o){const w={},E=u(f,"attributes",{});for(const F in E)w[i[F.toLowerCase()]]=E[F];t.featureSet.features.push({attributes:w,geometry:pe(u(f,"geometry",null))})}else o=null,t.featureSet.features=o}}}if(He(t)===!1)throw new m(n,p.InvalidParameter,r);return(t?.layerDefinition?.geometryType||"")===""&&(t.layerDefinition.geometryType="esriGeometryNull"),xe.create(t,n.spatialReference)})},s.signatures.push({name:"featureset",min:1,max:1}),s.functions.filter=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,2,2,n,r),N(e[0])||z(e[0])){const a=[];let t=e[0];t instanceof Me&&(t=t.toArray());let c=null;if(!Ee(e[1]))throw new m(n,p.InvalidParameter,r);c=e[1].createFunction(n);for(const y of t){const l=c(y);ke(l)?await l===!0&&a.push(y):l===!0&&a.push(y)}return a}if(L(e[0])){const a=await e[0].load(),t=D.create(e[1],a.getFieldsIndex()),c=t.getVariables();if(c.length>0){const y=[];for(let i=0;i<c.length;i++){const o={name:c[i]};y.push(await s.evaluateIdentifier(n,o))}const l={};for(let i=0;i<c.length;i++)l[c[i]]=y[i];return t.parameters=l,new ce({parentfeatureset:e[0],whereclause:t})}return new ce({parentfeatureset:e[0],whereclause:t})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"filter",min:2,max:2}),s.functions.orderby=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,2,2,n,r),L(e[0])){const a=new Ne(e[1]);return new Te({parentfeatureset:e[0],orderbyclause:a})}throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"orderby",min:2,max:2}),s.functions.top=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,2,2,n,r),L(e[0]))return new Se({parentfeatureset:e[0],topnum:e[1]});if(N(e[0]))return H(e[1])>=e[0].length?e[0].slice(0):e[0].slice(0,H(e[1]));if(z(e[0]))return H(e[1])>=e[0].length()?e[0].slice(0):e[0].slice(0,H(e[1]));throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"top",min:2,max:2}),s.functions.first=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,1,1,n,r),L(e[0])){const a=await e[0].first(d.abortSignal);if(a!==null){const t=De.createFromGraphicLikeObject(a.geometry,a.attributes,e[0],n.timeReference);return t._underlyingGraphic=a,t}return a}return N(e[0])?e[0].length===0?null:e[0][0]:z(e[0])?e[0].length()===0?null:e[0].get(0):null})},s.signatures.push({name:"first",min:1,max:1}),s.functions.attachments=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{x(e,1,2,n,r);const a={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof R){if(e[1].hasField("minsize")&&(a.minsize=H(e[1].field("minsize"))),e[1].hasField("metadata")&&(a.returnMetadata=j(e[1].field("metadata"))),e[1].hasField("maxsize")&&(a.maxsize=H(e[1].field("maxsize"))),e[1].hasField("types")){const t=be(e[1].field("types"),!1);t.length>0&&(a.types=t)}}else if(e[1]!==null)throw new m(n,p.InvalidParameter,r)}if(B(e[0])){let t=e[0]._layer;return t instanceof $&&(t=Y(t,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),t===null?[]:L(t)===!1?[]:(await t.load(),t.queryAttachments(e[0].field(t.objectIdField),a.minsize,a.maxsize,a.types,a.returnMetadata))}if(e[0]===null)return[];throw new m(n,p.InvalidParameter,r)})},s.signatures.push({name:"attachments",min:1,max:2}),s.functions.featuresetbyrelationshipname=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{x(e,2,4,n,r);const a=e[0],t=A(e[1]);let c=S(e[2],null);const y=j(S(e[3],!0));if(c===null&&(c=["*"]),N(c)===!1)throw new m(n,p.InvalidParameter,r);if(e[0]===null)return null;if(!B(e[0]))throw new m(n,p.InvalidParameter,r);let l=a._layer;if(l instanceof $&&(l=Y(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const i=l.relationshipMetaData().filter(F=>F.name===t);if(i.length===0)return null;if(i[0].relationshipTableId!==void 0&&i[0].relationshipTableId!==null&&i[0].relationshipTableId>-1)return Le(l,i[0],a.field(l.objectIdField),l.spatialReference,c,y,n.lrucache,n.interceptor);let o=l.serviceUrl();if(!o)return null;o=o.charAt(o.length-1)==="/"?o+i[0].relatedTableId.toString():o+"/"+i[0].relatedTableId.toString();const f=await ve(o,l.spatialReference,c,y,n.lrucache,n.interceptor);await f.load();let w=f.relationshipMetaData();if(w=w.filter(F=>F.id===i[0].id),a.hasField(i[0].keyField)===!1||a.field(i[0].keyField)===null){const F=await l.getFeatureByObjectId(a.field(l.objectIdField),[i[0].keyField]);if(F){const b=D.create(w[0].keyField+"= @id",f.getFieldsIndex());return b.parameters={id:F.attributes[i[0].keyField]},f.filter(b)}return new Oe({parentfeatureset:f})}const E=D.create(w[0].keyField+"= @id",f.getFieldsIndex());return E.parameters={id:a.field(i[0].keyField)},f.filter(E)})},s.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),s.functions.featuresetbyassociation=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{x(e,2,3,n,r);const a=e[0],t=A(S(e[1],"")).toLowerCase(),c=P(e[2])?A(e[2]):null;if(e[0]===null)return null;if(!B(e[0]))throw new m(n,p.InvalidParameter,r);let y=a._layer;if(y instanceof $&&(y=Y(y,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),y===null||L(y)===!1)return null;await y.load();const l=y.serviceUrl(),i=await Pe(l,n.spatialReference);let o=null,f=null,w=!1;if(c!==null&&c!==""&&c!==void 0){for(const g of i.terminals)g.terminalName===c&&(f=g.terminalId);f===null&&(w=!0)}const E=i.associations.getFieldsIndex(),F=E.get("TOGLOBALID").name,b=E.get("FROMGLOBALID").name,Q=E.get("TOTERMINALID").name,U=E.get("FROMTERMINALID").name,Z=E.get("FROMNETWORKSOURCEID").name,G=E.get("TONETWORKSOURCEID").name,O=E.get("ASSOCIATIONTYPE").name,ye=E.get("ISCONTENTVISIBLE").name,he=E.get("OBJECTID").name;for(const g of y.fields)if(g.type==="global-id"){o=a.field(g.name);break}let M=null,te=new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",i.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create("''",i.associations.getFieldsIndex()));const T="globalid",ae="globalId",re={};for(const g in i.lkp)re[g]=i.lkp[g].sourceId;const C=new Re(new W({name:"classname",alias:"classname",type:"string"}),null,re);let h="";switch(t){case"midspan":{h=`((${F}='${o}') OR ( ${b}='${o}')) AND (${O} IN (5))`,C.codefield=D.create(`CASE WHEN (${F}='${o}') THEN ${Z} ELSE ${G} END`,i.associations.getFieldsIndex());const g=K(v.findField(i.associations.fields,b));g.name=T,g.alias=T,M=new k(g,D.create(`CASE WHEN (${b}='${o}') THEN ${F} ELSE ${b} END`,i.associations.getFieldsIndex())),te=i.unVersion>=4?new _(v.findField(i.associations.fields,E.get("PERCENTALONG").name)):new k(new W({name:"percentalong",alias:"percentalong",type:"double"}),D.create("0",i.associations.getFieldsIndex()));break}case"junctionedge":{h=`((${F}='${o}') OR ( ${b}='${o}')) AND (${O} IN (4,6))`,C.codefield=D.create(`CASE WHEN (${F}='${o}') THEN ${Z} ELSE ${G} END`,i.associations.getFieldsIndex());const g=K(v.findField(i.associations.fields,b));g.name=T,g.alias=T,M=new k(g,D.create(`CASE WHEN (${b}='${o}') THEN ${F} ELSE ${b} END`,i.associations.getFieldsIndex())),ie=new k(new W({name:"side",alias:"side",type:"string"}),D.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,i.associations.getFieldsIndex()));break}case"connected":{let g=`${F}='@T'`,se=`${b}='@T'`;f!==null&&(g+=` AND ${Q}=@A`,se+=` AND ${U}=@A`),h="(("+g+") OR ("+se+"))",h=q(h,"@T",o??""),g=q(g,"@T",o??""),f!==null&&(g=q(g,"@A",f.toString()),h=q(h,"@A",f.toString())),C.codefield=D.create("CASE WHEN "+g+` THEN ${Z} ELSE ${G} END`,i.associations.getFieldsIndex());const J=K(v.findField(i.associations.fields,b));J.name=T,J.alias=T,M=new k(J,D.create("CASE WHEN "+g+` THEN ${b} ELSE ${F} END`,i.associations.getFieldsIndex()));break}case"container":h=`${F}='${o}' AND ${O} = 2`,f!==null&&(h+=` AND ${Q} = `+f.toString()),C.codefield=Z,h="( "+h+" )",M=new V(v.findField(i.associations.fields,b),T,T);break;case"content":h=`(${b}='${o}' AND ${O} = 2)`,f!==null&&(h+=` AND ${U} = `+f.toString()),C.codefield=G,h="( "+h+" )",M=new V(v.findField(i.associations.fields,F),T,T);break;case"structure":h=`(${F}='${o}' AND ${O} = 3)`,f!==null&&(h+=` AND ${Q} = `+f.toString()),C.codefield=Z,h="( "+h+" )",M=new V(v.findField(i.associations.fields,b),T,ae);break;case"attached":h=`(${b}='${o}' AND ${O} = 3)`,f!==null&&(h+=` AND ${U} = `+f.toString()),C.codefield=G,h="( "+h+" )",M=new V(v.findField(i.associations.fields,F),T,ae);break;default:throw new m(n,p.InvalidParameter,r)}return w&&(h="1 <> 1"),new v({parentfeatureset:i.associations,adaptedFields:[new _(v.findField(i.associations.fields,he)),new _(v.findField(i.associations.fields,ye)),M,ie,C,te],extraFilter:h?D.create(h,i.associations.getFieldsIndex()):null})})},s.signatures.push({name:"featuresetbyassociation",min:2,max:6}),s.functions.groupby=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(x(e,3,3,n,r),!L(e[0]))throw new m(n,p.InvalidParameter,r);const a=await e[0].load(),t=[],c=[];let y=!1,l=[];if(P(e[1]))l.push(e[1]);else if(e[1]instanceof R)l.push(e[1]);else if(N(e[1]))l=e[1];else{if(!z(e[1]))throw new m(n,p.InvalidParameter,r);l=e[1].toArray()}for(const i of l)if(P(i)){const o=D.create(A(i),a.getFieldsIndex()),f=ue(o)===!0?A(i):"%%%%FIELDNAME";t.push({name:f,expression:o}),f==="%%%%FIELDNAME"&&(y=!0)}else{if(!(i instanceof R))throw new m(n,p.InvalidParameter,r);{const o=i.hasField("name")?i.field("name"):"%%%%FIELDNAME",f=i.hasField("expression")?i.field("expression"):"";if(o==="%%%%FIELDNAME"&&(y=!0),!o)throw new m(n,p.InvalidParameter,r);t.push({name:o,expression:D.create(f||o,a.getFieldsIndex())})}}if(l=[],P(e[2]))l.push(e[2]);else if(N(e[2]))l=e[2];else if(z(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof R))throw new m(n,p.InvalidParameter,r);l.push(e[2])}for(const i of l){if(!(i instanceof R))throw new m(n,p.InvalidParameter,r);{const o=i.hasField("name")?i.field("name"):"",f=i.hasField("statistic")?i.field("statistic"):"",w=i.hasField("expression")?i.field("expression"):"";if(!o||!f||!w)throw new m(n,p.InvalidParameter,r);c.push({name:o,statistic:f.toLowerCase(),expression:D.create(w,a.getFieldsIndex())})}}if(y){const i={};for(const f of a.fields)i[f.name.toLowerCase()]=1;for(const f of t)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);for(const f of c)f.name!=="%%%%FIELDNAME"&&(i[f.name.toLowerCase()]=1);let o=0;for(const f of t)if(f.name==="%%%%FIELDNAME"){for(;i["field_"+o.toString()]===1;)o++;i["field_"+o.toString()]=1,f.name="FIELD_"+o.toString()}}for(const i of t)await ee(i.expression,s,n);for(const i of c)await ee(i.expression,s,n);return e[0].groupby(t,c)})},s.signatures.push({name:"groupby",min:3,max:3}),s.functions.distinct=function(n,r){return s.standardFunctionAsync(n,r,async(d,I,e)=>{if(L(e[0])){x(e,2,2,n,r);const a=await e[0].load(),t=[];let c=[];if(P(e[1]))c.push(e[1]);else if(e[1]instanceof R)c.push(e[1]);else if(N(e[1]))c=e[1];else{if(!z(e[1]))throw new m(n,p.InvalidParameter,r);c=e[1].toArray()}let y=!1;for(const l of c)if(P(l)){const i=D.create(A(l),a.getFieldsIndex()),o=ue(i)===!0?A(l):"%%%%FIELDNAME";t.push({name:o,expression:i}),o==="%%%%FIELDNAME"&&(y=!0)}else{if(!(l instanceof R))throw new m(n,p.InvalidParameter,r);{const i=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",o=l.hasField("expression")?l.field("expression"):"";if(i==="%%%%FIELDNAME"&&(y=!0),!i)throw new m(n,p.InvalidParameter,r);t.push({name:i,expression:D.create(o||i,a.getFieldsIndex())})}}if(y){const l={};for(const o of a.fields)l[o.name.toLowerCase()]=1;for(const o of t)o.name!=="%%%%FIELDNAME"&&(l[o.name.toLowerCase()]=1);let i=0;for(const o of t)if(o.name==="%%%%FIELDNAME"){for(;l["field_"+i.toString()]===1;)i++;l["field_"+i.toString()]=1,o.name="FIELD_"+i.toString()}}for(const l of t)await ee(l.expression,s,n);return e[0].groupby(t,[])}return ze("distinct",d,I,e)})})}export{dn as registerFunctions};
