import{d0 as c,ci as u}from"./main-79e5ed80.js";import{z as i,p as a,y as s}from"./colorUtils-c0f43caf.js";function f(o){let{r:t,g:r,b:e,a:n}=o;return n<1&&(t=Math.round(n*t+255*(1-n)),r=Math.round(n*r+255*(1-n)),e=Math.round(n*e+255*(1-n))),new u({r:t,g:r,b:e})}function d(o,t){const{r,g:e,b:n}=t?.ignoreAlpha?o:f(o);return .2126*r+.7152*e+.0722*n}function p(o,t){const r=i(o);r.l*=1-t;const e=a(r),n=o.clone();return n.setColor(e),n.a=o.a,n}function g(o,t){const r=o.clone();return r.a*=t,r}function m(o,t){const r=s(o);r.s*=t;const e=a(r),n=o.clone();return n.setColor(e),n.a=o.a,n}function b(o){return c(u.toUnitRGBA(o))}export{b as d,g as f,m as h,p as i,d as s};