import{S as s,i as e,s as a,D as l,e as t,k as o,t as c,c as n,a as r,d as u,n as i,g as d,b as f,f as h,H as m,L as p,E as v,F as $,G as x,x as y,u as k,M as E,N as b,O as g,P as D}from"./vendor-93a82312.js";const w=s=>({}),z=s=>({});function A(s){let e,a,b,g,D,A,H,I,O,T,C,K,N,R;const S=s[4].header,V=l(S,s,s[3],z),j=s[4].default,q=l(j,s,s[3],null);return{c(){e=t("div"),a=o(),b=t("div"),V&&V.c(),g=o(),D=t("hr"),A=o(),q&&q.c(),H=o(),I=t("hr"),O=o(),T=t("button"),C=c("Close"),this.h()},l(s){e=n(s,"DIV",{class:!0}),r(e).forEach(u),a=i(s),b=n(s,"DIV",{class:!0,role:!0,"aria-modal":!0});var l=r(b);V&&V.l(l),g=i(l),D=n(l,"HR",{}),A=i(l),q&&q.l(l),H=i(l),I=n(l,"HR",{}),O=i(l),T=n(l,"BUTTON",{class:!0});var t=r(T);C=d(t,"Close"),t.forEach(u),l.forEach(u),this.h()},h(){f(e,"class","modal-background svelte-1or4xcz"),T.autofocus=!0,f(T,"class","svelte-1or4xcz"),f(b,"class","modal svelte-1or4xcz"),f(b,"role","dialog"),f(b,"aria-modal","true")},m(l,t){h(l,e,t),h(l,a,t),h(l,b,t),V&&V.m(b,null),m(b,g),m(b,D),m(b,A),q&&q.m(b,null),m(b,H),m(b,I),m(b,O),m(b,T),m(T,C),s[5](b),K=!0,T.focus(),N||(R=[p(window,"keydown",s[2]),p(e,"click",s[1]),p(T,"click",s[1])],N=!0)},p(s,[e]){V&&V.p&&(!K||8&e)&&v(V,S,s,s[3],K?x(S,s[3],e,w):$(s[3]),z),q&&q.p&&(!K||8&e)&&v(q,j,s,s[3],K?x(j,s[3],e,null):$(s[3]),null)},i(s){K||(y(V,s),y(q,s),K=!0)},o(s){k(V,s),k(q,s),K=!1},d(l){l&&u(e),l&&u(a),l&&u(b),V&&V.d(l),q&&q.d(l),s[5](null),N=!1,E(R)}}}function H(s,e,a){let{$$slots:l={},$$scope:t}=e;const o=b(),c=()=>o("close");let n;const r="undefined"!=typeof document&&document.activeElement;return r&&g((()=>{r.focus()})),s.$$set=s=>{"$$scope"in s&&a(3,t=s.$$scope)},[n,c,s=>{if("Escape"!==s.key){if("Tab"===s.key){const e=n.querySelectorAll("*"),a=Array.from(e).filter((s=>s.tabIndex>=0));let l=a.indexOf(document.activeElement);-1===l&&s.shiftKey&&(l=0),l+=a.length+(s.shiftKey?-1:1),l%=a.length,a[l].focus(),s.preventDefault()}}else c()},t,l,function(s){D[s?"unshift":"push"]((()=>{n=s,a(0,n)}))}]}class I extends s{constructor(s){super(),e(this,s,H,A,a,{})}}export{I as A};
