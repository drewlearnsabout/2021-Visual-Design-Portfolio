import{S as s,i as e,s as a,D as l,e as t,k as o,t as c,c as n,a as u,d as r,n as i,g as d,b as f,f as h,H as m,L as p,E as v,F as $,G as g,x as y,u as k,M as E,N as b,O as x,P as D}from"./vendor-eb7ae625.js";const w=s=>({}),A=s=>({});function I(s){let e,a,b,x,D,I,O,T,C,K;const N=s[4].header,S=l(N,s,s[3],A),V=s[4].default,j=l(V,s,s[3],null);return{c(){e=t("div"),a=o(),b=t("div"),S&&S.c(),x=o(),j&&j.c(),D=o(),I=t("button"),O=c("Close"),this.h()},l(s){e=n(s,"DIV",{class:!0}),u(e).forEach(r),a=i(s),b=n(s,"DIV",{class:!0,role:!0,"aria-modal":!0});var l=u(b);S&&S.l(l),x=i(l),j&&j.l(l),D=i(l),I=n(l,"BUTTON",{class:!0});var t=u(I);O=d(t,"Close"),t.forEach(r),l.forEach(r),this.h()},h(){f(e,"class","modal-background svelte-caslog"),I.autofocus=!0,f(I,"class","svelte-caslog"),f(b,"class","modal svelte-caslog"),f(b,"role","dialog"),f(b,"aria-modal","true")},m(l,t){h(l,e,t),h(l,a,t),h(l,b,t),S&&S.m(b,null),m(b,x),j&&j.m(b,null),m(b,D),m(b,I),m(I,O),s[5](b),T=!0,I.focus(),C||(K=[p(window,"keydown",s[2]),p(e,"click",s[1]),p(I,"click",s[1])],C=!0)},p(s,[e]){S&&S.p&&(!T||8&e)&&v(S,N,s,s[3],T?g(N,s[3],e,w):$(s[3]),A),j&&j.p&&(!T||8&e)&&v(j,V,s,s[3],T?g(V,s[3],e,null):$(s[3]),null)},i(s){T||(y(S,s),y(j,s),T=!0)},o(s){k(S,s),k(j,s),T=!1},d(l){l&&r(e),l&&r(a),l&&r(b),S&&S.d(l),j&&j.d(l),s[5](null),C=!1,E(K)}}}function O(s,e,a){let{$$slots:l={},$$scope:t}=e;const o=b(),c=()=>o("close");let n;const u="undefined"!=typeof document&&document.activeElement;return u&&x((()=>{u.focus()})),s.$$set=s=>{"$$scope"in s&&a(3,t=s.$$scope)},[n,c,s=>{if("Escape"!==s.key){if("Tab"===s.key){const e=n.querySelectorAll("*"),a=Array.from(e).filter((s=>s.tabIndex>=0));let l=a.indexOf(document.activeElement);-1===l&&s.shiftKey&&(l=0),l+=a.length+(s.shiftKey?-1:1),l%=a.length,a[l].focus(),s.preventDefault()}}else c()},t,l,function(s){D[s?"unshift":"push"]((()=>{n=s,a(0,n)}))}]}class T extends s{constructor(s){super(),e(this,s,O,I,a,{})}}export{T as A};
