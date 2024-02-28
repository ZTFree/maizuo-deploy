import{r as x,i as N,K as g,n as h}from"./base-ad0068b1.js";import{r as B,S as P,ah as O,a7 as j,y as z,U as b,w as R,C as y,e as M,M as F,T as K,X as I,V as S,E as T,a8 as q,ai as D,j as G,c as k,g as L}from"./index-35cb0dd4.js";import{u as H}from"./request-8cf98847.js";function U(t){let e;const l=B(!1),n=P({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(o){n.text=o}function s(){const o=n.parent,r=d.ns;if(!o.vLoadingAddClassList){let c=o.getAttribute("loading-number");c=Number.parseInt(c)-1,c?o.setAttribute("loading-number",c.toString()):(x(o,r.bm("parent","relative")),o.removeAttribute("loading-number")),x(o,r.bm("parent","hidden"))}i(),m.unmount()}function i(){var o,r;(r=(o=d.$el)==null?void 0:o.parentNode)==null||r.removeChild(d.$el)}function v(){var o;t.beforeClose&&!t.beforeClose()||(l.value=!0,clearTimeout(e),e=window.setTimeout(f,400),n.visible=!1,(o=t.closed)==null||o.call(t))}function f(){if(!l.value)return;const o=n.parent;l.value=!1,o.vLoadingAddClassList=void 0,s()}const u=z({name:"ElLoading",setup(o,{expose:r}){const{ns:c,zIndex:V}=H("loading");return r({ns:c,zIndex:V}),()=>{const _=n.spinner||n.svg,$=b("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",..._?{innerHTML:_}:{}},[b("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),E=n.text?b("p",{class:c.b("text")},[n.text]):void 0;return b(K,{name:c.b("fade"),onAfterLeave:f},{default:R(()=>[y(M("div",{style:{backgroundColor:n.background||""},class:[c.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[b("div",{class:c.b("spinner")},[$,E])]),[[F,n.visible]])])})}}}),m=O(u),d=m.mount(document.createElement("div"));return{...j(n),setText:a,removeElLoadingChild:i,close:v,handleAfterLeave:f,vm:d,get $el(){return d.$el}}}let p;const X=function(t={}){if(!N)return;const e=Y(t);if(e.fullscreen&&p)return p;const l=U({...e,closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}});Z(e,e.parent,l),w(e,e.parent,l),e.parent.vLoadingAddClassList=()=>w(e,e.parent,l);let n=e.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",e.parent.setAttribute("loading-number",n),e.parent.appendChild(l.$el),I(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},Y=t=>{var e,l,n,a;let s;return S(t.target)?s=(e=document.querySelector(t.target))!=null?e:document.body:s=t.target||document.body,{parent:s===document.body||t.body?document.body:s,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:s===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(n=t.lock)!=null?n:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:s}},Z=async(t,e,l)=>{const{nextZIndex:n}=l.vm.zIndex||l.vm._.exposed.zIndex,a={};if(t.fullscreen)l.originalPosition.value=g(document.body,"position"),l.originalOverflow.value=g(document.body,"overflow"),a.zIndex=n();else if(t.parent===document.body){l.originalPosition.value=g(document.body,"position"),await I();for(const s of["top","left"]){const i=s==="top"?"scrollTop":"scrollLeft";a[s]=`${t.target.getBoundingClientRect()[s]+document.body[i]+document.documentElement[i]-Number.parseInt(g(document.body,`margin-${s}`),10)}px`}for(const s of["height","width"])a[s]=`${t.target.getBoundingClientRect()[s]}px`}else l.originalPosition.value=g(e,"position");for(const[s,i]of Object.entries(a))l.$el.style[s]=i},w=(t,e,l)=>{const n=l.vm.ns||l.vm._.exposed.ns;["absolute","fixed","sticky"].includes(l.originalPosition.value)?x(e,n.bm("parent","relative")):h(e,n.bm("parent","relative")),t.fullscreen&&t.lock?h(e,n.bm("parent","hidden")):x(e,n.bm("parent","hidden"))},C=Symbol("ElLoading"),A=(t,e)=>{var l,n,a,s;const i=e.instance,v=o=>T(e.value)?e.value[o]:void 0,f=o=>{const r=S(o)&&(i==null?void 0:i[o])||o;return r&&B(r)},u=o=>f(v(o)||t.getAttribute(`element-loading-${D(o)}`)),m=(l=v("fullscreen"))!=null?l:e.modifiers.fullscreen,d={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:m,target:(n=v("target"))!=null?n:m?void 0:t,body:(a=v("body"))!=null?a:e.modifiers.body,lock:(s=v("lock"))!=null?s:e.modifiers.lock};t[C]={options:d,instance:X(d)}},J=(t,e)=>{for(const l of Object.keys(e))q(e[l])&&(e[l].value=t[l])},Q={mounted(t,e){e.value&&A(t,e)},updated(t,e){const l=t[C];e.oldValue!==e.value&&(e.value&&!e.oldValue?A(t,e):e.value&&e.oldValue?T(e.value)&&J(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[C])==null||e.instance.close()}};const W={key:0,"element-loading-text":"加载中...",style:{height:"100px","background-color":"#ededed"}},ee={key:1,"element-loading-text":"加载中...",style:{height:"100px","background-color":"#ededed"}},oe={__name:"LoadingMod",props:["flag","full"],setup(t){const{full:e}=t,l=G(()=>e!==void 0);return(n,a)=>{const s=Q;return l.value?y((k(),L("div",W,null,512)),[[s,t.flag,void 0,{fullscreen:!0,lock:!0}]]):y((k(),L("div",ee,null,512)),[[s,t.flag]])}}};export{oe as _};
