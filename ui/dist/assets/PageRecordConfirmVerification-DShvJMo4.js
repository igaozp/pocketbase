import{S as M,i as P,s as R,F as I,d as N,t as S,a as V,m as q,c as F,M as w,g as y,N as E,h as r,l as a,L as g,p as j,H as k,u,w as d,o as m,v,k as C,n as z}from"./index-B86TTYBH.js";function A(o){let e,l,n;function t(i,f){return i[4]?K:J}let s=t(o),c=s(o);return{c(){e=u("div"),e.innerHTML='<div class="icon"><i class="ri-error-warning-line"></i></div> <div class="content txt-bold"><p>Invalid or expired verification token.</p></div>',l=v(),c.c(),n=g(),d(e,"class","alert alert-danger")},m(i,f){a(i,e,f),a(i,l,f),c.m(i,f),a(i,n,f)},p(i,f){s===(s=t(i))&&c?c.p(i,f):(c.d(1),c=s(i),c&&(c.c(),c.m(n.parentNode,n)))},d(i){i&&(r(e),r(l),r(n)),c.d(i)}}}function B(o){let e,l,n,t,s;return{c(){e=u("div"),e.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Please check your email for the new verification link.</p></div>',l=v(),n=u("button"),n.textContent="Close",d(e,"class","alert alert-success"),d(n,"type","button"),d(n,"class","btn btn-transparent btn-block")},m(c,i){a(c,e,i),a(c,l,i),a(c,n,i),t||(s=m(n,"click",o[8]),t=!0)},p:k,d(c){c&&(r(e),r(l),r(n)),t=!1,s()}}}function D(o){let e,l,n,t,s;return{c(){e=u("div"),e.innerHTML='<div class="icon"><i class="ri-checkbox-circle-line"></i></div> <div class="content txt-bold"><p>Successfully verified email address.</p></div>',l=v(),n=u("button"),n.textContent="Close",d(e,"class","alert alert-success"),d(n,"type","button"),d(n,"class","btn btn-transparent btn-block")},m(c,i){a(c,e,i),a(c,l,i),a(c,n,i),t||(s=m(n,"click",o[7]),t=!0)},p:k,d(c){c&&(r(e),r(l),r(n)),t=!1,s()}}}function G(o){let e;return{c(){e=u("div"),e.innerHTML='<div class="loader loader-lg"><em>Please wait...</em></div>',d(e,"class","txt-center")},m(l,n){a(l,e,n)},p:k,d(l){l&&r(e)}}}function J(o){let e,l,n;return{c(){e=u("button"),e.textContent="Close",d(e,"type","button"),d(e,"class","btn btn-transparent btn-block")},m(t,s){a(t,e,s),l||(n=m(e,"click",o[9]),l=!0)},p:k,d(t){t&&r(e),l=!1,n()}}}function K(o){let e,l,n,t;return{c(){e=u("button"),l=u("span"),l.textContent="Resend",d(l,"class","txt"),d(e,"type","button"),d(e,"class","btn btn-transparent btn-block"),e.disabled=o[3],C(e,"btn-loading",o[3])},m(s,c){a(s,e,c),z(e,l),n||(t=m(e,"click",o[5]),n=!0)},p(s,c){c&8&&(e.disabled=s[3]),c&8&&C(e,"btn-loading",s[3])},d(s){s&&r(e),n=!1,t()}}}function O(o){let e;function l(s,c){return s[1]?G:s[0]?D:s[2]?B:A}let n=l(o),t=n(o);return{c(){t.c(),e=g()},m(s,c){t.m(s,c),a(s,e,c)},p(s,c){n===(n=l(s))&&t?t.p(s,c):(t.d(1),t=n(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){s&&r(e),t.d(s)}}}function Q(o){let e,l;return e=new I({props:{nobranding:!0,$$slots:{default:[O]},$$scope:{ctx:o}}}),{c(){F(e.$$.fragment)},m(n,t){q(e,n,t),l=!0},p(n,[t]){const s={};t&2079&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){l||(V(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){N(e,n)}}}function U(o,e,l){let n,{params:t}=e,s=!1,c=!1,i=!1,f=!1;x();async function x(){if(c)return;l(1,c=!0);const p=new w("../");try{const b=y(t==null?void 0:t.token);await p.collection(b.collectionId).confirmVerification(t==null?void 0:t.token),l(0,s=!0)}catch{l(0,s=!1)}l(1,c=!1)}async function T(){const p=y(t==null?void 0:t.token);if(f||!p.collectionId||!p.email)return;l(3,f=!0);const b=new w("../");try{const _=y(t==null?void 0:t.token);await b.collection(_.collectionId).requestVerification(_.email),l(2,i=!0)}catch(_){j.error(_),l(2,i=!1)}l(3,f=!1)}const h=()=>window.close(),H=()=>window.close(),L=()=>window.close();return o.$$set=p=>{"params"in p&&l(6,t=p.params)},o.$$.update=()=>{o.$$.dirty&64&&l(4,n=(t==null?void 0:t.token)&&E(t.token))},[s,c,i,f,n,T,t,h,H,L]}class X extends M{constructor(e){super(),P(this,e,U,Q,R,{params:6})}}export{X as default};
