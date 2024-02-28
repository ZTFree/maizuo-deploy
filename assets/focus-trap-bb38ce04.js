import{K as R,ac as $,o as D,q as U,r as L,y as oe,x as re,l as O,p as m,z as ue,X as q,V as ce}from"./index-35cb0dd4.js";import{i as X,_ as ae}from"./base-ad0068b1.js";import{E as te}from"./index-e90ec287.js";import{i as ie}from"./error-f1912ce6.js";const de='a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])',fe=e=>getComputedStyle(e).position==="fixed"?!1:e.offsetParent!==null,Ue=e=>Array.from(e.querySelectorAll(de)).filter(t=>Ee(t)&&fe(t)),Ee=e=>{if(e.tabIndex>0||e.tabIndex===0&&e.getAttribute("tabIndex")!==null)return!0;if(e.disabled)return!1;switch(e.nodeName){case"A":return!!e.href&&e.rel!=="ignore";case"INPUT":return!(e.type==="hidden"||e.type==="file");case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}},ke=function(e,t,...o){let s;t.includes("mouse")||t.includes("click")?s="MouseEvents":t.includes("key")?s="KeyboardEvent":s="HTMLEvents";const u=document.createEvent(s);return u.initEvent(t,...o),e.dispatchEvent(u),e};var le=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(le||{});const F=e=>{const t=R(e)?e:[e],o=[];return t.forEach(s=>{var u;R(s)?o.push(...F(s)):$(s)&&R(s.children)?o.push(...F(s.children)):(o.push(s),$(s)&&((u=s.component)!=null&&u.subTree)&&o.push(...F(s.component.subTree)))}),o};let v=[];const g=e=>{const t=e;t.key===te.esc&&v.forEach(o=>o(t))},ve=e=>{D(()=>{v.length===0&&document.addEventListener("keydown",g),X&&v.push(e)}),U(()=>{v=v.filter(t=>t!==e),v.length===0&&X&&document.removeEventListener("keydown",g)})},w="focus-trap.focus-after-trapped",I="focus-trap.focus-after-released",pe="focus-trap.focusout-prevented",j={cancelable:!0,bubbles:!1},Te={cancelable:!0,bubbles:!1},W="focusAfterTrapped",z="focusAfterReleased",me=Symbol("elFocusTrap"),k=L(),y=L(0),K=L(0);let S=0;const ne=e=>{const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const u=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||u?NodeFilter.FILTER_SKIP:s.tabIndex>=0||s===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t},J=(e,t)=>{for(const o of e)if(!Se(o,t))return o},Se=(e,t)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},be=e=>{const t=ne(e),o=J(t,e),s=J(t.reverse(),e);return[o,s]},_e=e=>e instanceof HTMLInputElement&&"select"in e,E=(e,t)=>{if(e&&e.focus){const o=document.activeElement;e.focus({preventScroll:!0}),K.value=window.performance.now(),e!==o&&_e(e)&&t&&e.select()}};function Q(e,t){const o=[...e],s=e.indexOf(t);return s!==-1&&o.splice(s,1),o}const Le=()=>{let e=[];return{push:s=>{const u=e[0];u&&s!==u&&u.pause(),e=Q(e,s),e.unshift(s)},remove:s=>{var u,d;e=Q(e,s),(d=(u=e[0])==null?void 0:u.resume)==null||d.call(u)}}},ye=(e,t=!1)=>{const o=document.activeElement;for(const s of e)if(E(s,t),document.activeElement!==o)return},Z=Le(),Ae=()=>y.value>K.value,b=()=>{k.value="pointer",y.value=window.performance.now()},ee=()=>{k.value="keyboard",y.value=window.performance.now()},Ne=()=>(D(()=>{S===0&&(document.addEventListener("mousedown",b),document.addEventListener("touchstart",b),document.addEventListener("keydown",ee)),S++}),U(()=>{S--,S<=0&&(document.removeEventListener("mousedown",b),document.removeEventListener("touchstart",b),document.removeEventListener("keydown",ee))}),{focusReason:k,lastUserFocusTimestamp:y,lastAutomatedFocusTimestamp:K}),_=e=>new CustomEvent(pe,{...Te,detail:e}),Ce=oe({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[W,z,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:t}){const o=L();let s,u;const{focusReason:d}=Ne();ve(n=>{e.trapped&&!l.paused&&t("release-requested",n)});const l={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},p=n=>{if(!e.loop&&!e.trapped||l.paused)return;const{key:r,altKey:c,ctrlKey:a,metaKey:i,currentTarget:Y,shiftKey:h}=n,{loop:G}=e,se=r===te.tab&&!c&&!a&&!i,T=document.activeElement;if(se&&T){const A=Y,[N,C]=be(A);if(N&&C){if(!h&&T===C){const f=_({focusReason:d.value});t("focusout-prevented",f),f.defaultPrevented||(n.preventDefault(),G&&E(N,!0))}else if(h&&[N,A].includes(T)){const f=_({focusReason:d.value});t("focusout-prevented",f),f.defaultPrevented||(n.preventDefault(),G&&E(C,!0))}}else if(T===A){const f=_({focusReason:d.value});t("focusout-prevented",f),f.defaultPrevented||n.preventDefault()}}};re(me,{focusTrapRef:o,onKeydown:p}),O(()=>e.focusTrapEl,n=>{n&&(o.value=n)},{immediate:!0}),O([o],([n],[r])=>{n&&(n.addEventListener("keydown",p),n.addEventListener("focusin",x),n.addEventListener("focusout",H)),r&&(r.removeEventListener("keydown",p),r.removeEventListener("focusin",x),r.removeEventListener("focusout",H))});const P=n=>{t(W,n)},M=n=>t(z,n),x=n=>{const r=m(o);if(!r)return;const c=n.target,a=n.relatedTarget,i=c&&r.contains(c);e.trapped||a&&r.contains(a)||(s=a),i&&t("focusin",n),!l.paused&&e.trapped&&(i?u=c:E(u,!0))},H=n=>{const r=m(o);if(!(l.paused||!r))if(e.trapped){const c=n.relatedTarget;!ie(c)&&!r.contains(c)&&setTimeout(()=>{if(!l.paused&&e.trapped){const a=_({focusReason:d.value});t("focusout-prevented",a),a.defaultPrevented||E(u,!0)}},0)}else{const c=n.target;c&&r.contains(c)||t("focusout",n)}};async function B(){await q();const n=m(o);if(n){Z.push(l);const r=n.contains(document.activeElement)?s:document.activeElement;if(s=r,!n.contains(r)){const a=new Event(w,j);n.addEventListener(w,P),n.dispatchEvent(a),a.defaultPrevented||q(()=>{let i=e.focusStartEl;ce(i)||(E(i),document.activeElement!==i&&(i="first")),i==="first"&&ye(ne(n),!0),(document.activeElement===r||i==="container")&&E(n)})}}}function V(){const n=m(o);if(n){n.removeEventListener(w,P);const r=new CustomEvent(I,{...j,detail:{focusReason:d.value}});n.addEventListener(I,M),n.dispatchEvent(r),!r.defaultPrevented&&(d.value=="keyboard"||!Ae()||n.contains(document.activeElement))&&E(s??document.body),n.removeEventListener(I,M),Z.remove(l)}}return D(()=>{e.trapped&&B(),O(()=>e.trapped,n=>{n?B():V()})}),U(()=>{e.trapped&&V()}),{onKeydown:p}}});function Re(e,t,o,s,u,d){return ue(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ke=ae(Ce,[["render",Re],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{Ke as E,le as P,F as f,Ue as o,ke as t};
