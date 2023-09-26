import{aA as l,gk as f,gm as d}from"./main-79e5ed80.js";function i(t){return Array.isArray(t)?t[0]?.spatialReference:t?.spatialReference}function w(t){return t&&(Array.isArray(t)?t.map(w):t.toJSON?t.toJSON():t)}function c(t){return Array.isArray(t)?t.map(r=>f(r)):f(t)}function m(t,r){let n;return Array.isArray(t)?n=t:(n=[],n.push(t),r!=null&&n.push(r)),n}let s;async function g(){return s||(s=d("geometryEngineWorker",{strategy:"distributed"})),s}async function e(t,r){return(await g()).invoke("executeGEOperation",{operation:t,parameters:w(r)})}async function h(t,r){return c(await e("clip",[i(t),t,r]))}async function O(t,r){return c(await e("cut",[i(t),t,r]))}function S(t,r){return e("contains",[i(t),t,r])}function J(t,r){return e("crosses",[i(t),t,r])}function N(t,r,n){return e("distance",[i(t),t,r,n])}function E(t,r){return e("equals",[i(t),t,r])}function R(t,r){return e("intersects",[i(t),t,r])}function k(t,r){return e("touches",[i(t),t,r])}function v(t,r){return e("within",[i(t),t,r])}function b(t,r){return e("disjoint",[i(t),t,r])}function D(t,r){return e("overlaps",[i(t),t,r])}function L(t,r,n){return e("relate",[i(t),t,r,n])}function j(t){return e("isSimple",[i(t),t])}async function B(t){return c(await e("simplify",[i(t),t]))}async function C(t,r=!1){return c(await e("convexHull",[i(t),t,r]))}async function G(t,r){return c(await e("difference",[i(t),t,r]))}async function H(t,r){return c(await e("symmetricDifference",[i(t),t,r]))}async function V(t,r){return c(await e("intersect",[i(t),t,r]))}async function W(t,r=null){const n=m(t,r);return c(await e("union",[i(n),n]))}async function $(t,r,n,a,u,o){return c(await e("offset",[i(t),t,r,n,a,u,o]))}async function q(t,r,n,a=!1){const u=[i(t),t,r,n,a];return c(await e("buffer",u))}async function z(t,r,n,a,u,o){const p=[i(t),t,r,n,a,u,o];return c(await e("geodesicBuffer",p))}async function F(t,r,n=!0){const a=await e("nearestCoordinate",[i(t),t,r,n]);return{...a,coordinate:l.fromJSON(a.coordinate)}}async function I(t,r){const n=await e("nearestVertex",[i(t),t,r]);return{...n,coordinate:l.fromJSON(n.coordinate)}}function A(t){return"xmin"in t?t.center:"x"in t?t:t.extent?.center}async function K(t,r,n){if(t==null)throw new y;const a=t.spatialReference;if((n=n??A(t))==null)throw new y;const u=t.constructor.fromJSON(await e("rotate",[a,t,r,n]));return u.spatialReference=a,u}async function M(t,r,n,a){return c(await e("generalize",[i(t),t,r,n,a]))}async function P(t,r,n){return c(await e("densify",[i(t),t,r,n]))}async function T(t,r,n,a=0){return c(await e("geodesicDensify",[i(t),t,r,n,a]))}function U(t,r){return e("planarArea",[i(t),t,r])}function Z(t,r){return e("planarLength",[i(t),t,r])}function Q(t,r,n){return e("geodesicArea",[i(t),t,r,n])}function X(t,r,n){return e("geodesicLength",[i(t),t,r,n])}class y extends Error{constructor(){super("Illegal Argument Exception")}}export{b as A,M as B,P as C,V as D,G as E,Z as F,K as H,j as J,Q as K,q as L,X as M,B as N,D as O,z as P,L as R,k as S,F as T,T as U,I as V,U as W,W as b,N as d,E as g,R as h,C as j,H as k,J as m,S as p,$ as v,O as w,v as x,h as y};
