import{f as E,m as y,c as C,u as b,E as k}from"./base-ad0068b1.js";/* empty css                  */import{E as w,a as z,b as I}from"./el-main-3b59cf7c.js";/* empty css                */import{_ as M,r as B,u as D,a as F,o as P,b as V,c as s,d as i,w as a,e as o,T as N,f as l,g as R,h as T,i as r,t as U,n as q,F as L}from"./index-35cb0dd4.js";const O=["onClick"],S={style:{"font-size":"10px"}},Z={__name:"MainPage",setup($){const c=[{id:"0",icon:E,text:"电影",path:"/films"},{id:"1",icon:y,text:"影院",path:"/cinemas"},{id:"2",icon:C,text:"资讯",path:"https://m.maizuo.com/mz-act/active/ElzMZU125260"},{id:"3",icon:b,text:"我的",path:"/center"}],n=B(c[0].id),d=D(),u=F();function m(e){n.value!==e.id&&(n.value=e.id,e.id==="2"?document.location.href=e.path:d.push({path:e.path}))}return P(()=>{const e=c.find(_=>u.path.includes(_.path));n.value=e.id}),(e,_)=>{const p=V("router-view"),f=z,h=k,v=I,x=w;return s(),i(x,{class:"main-container"},{default:a(()=>[o(f,{class:"mainBox"},{default:a(()=>[o(p,null,{default:a(({Component:t})=>[o(N,{mode:"out-in","enter-active-class":"animate__animated animate__fadeInUp","leave-active-class":"animate__animated animate__fadeOutDown"},{default:a(()=>[(s(),i(l(t)))]),_:2},1024)]),_:1})]),_:1}),o(v,{class:"bottom-bar"},{default:a(()=>[(s(),R(L,null,T(c,(t,g)=>r("div",{key:g,class:q(["bottom-item",{active:n.value===t.id}]),onClick:j=>m(t)},[o(h,{style:{"font-size":"24px"}},{default:a(()=>[(s(),i(l(t.icon)))]),_:2},1024),r("span",S,U(t.text),1)],10,O)),64))]),_:1})]),_:1})}}},Q=M(Z,[["__scopeId","data-v-d35229c9"]]);export{Q as default};
