import{C as D,E as F,y as M}from"./base-ad0068b1.js";import{E as N}from"./el-input-5051ef1b.js";import{_ as w,a6 as x,$ as P,c as a,g as n,p as l,i as t,F as h,h as k,e as y,w as R,t as $,J as C,a1 as B,a2 as E,a0 as T,r as v,j,l as z,o as J,u as U,C as I,M as S,d as W}from"./index-35cb0dd4.js";import{E as q,C as A,c as G}from"./el-overlay-b0c9ec09.js";/* empty css                */import"./el-button-7195a193.js";import"./request-8cf98847.js";import{a as K,g as O}from"./cinimas-19f5ddcc.js";import"./index-e90ec287.js";import"./icon-56d47907.js";import"./error-f1912ce6.js";import"./focus-trap-bb38ce04.js";import"./size-a5a08e6d.js";import"./index-06758cc8.js";const Q=s=>(B("data-v-b2e88dc6"),s=s(),E(),s),X={key:0,class:"cinimas-history"},Y=Q(()=>t("div",{class:"history-title"},"最近搜索",-1)),Z={class:"history-list"},ee=["onClick"],te={__name:"HistoryList",setup(s){const r=x(),{cleanHistory:m}=r,{searcHistory:d}=P(r);function o(){q.confirm("确认清空历史记录?","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>m()).catch(()=>{})}return(p,u)=>{const f=F;return a(),n(h,null,[l(d).length?(a(),n("div",X,[Y,t("div",Z,[(a(!0),n(h,null,k(l(d),_=>(a(),n("div",{class:"history-item",key:_,onClick:g=>p.kw=_},[y(f,{size:15,color:"gray"},{default:R(()=>[y(l(D))]),_:1}),t("span",null,$(_),1)],8,ee))),128))])])):C("",!0),l(d).length?(a(),n("div",{key:1,class:"clean-history",onClick:o}," 清空历史记录 ")):C("",!0)],64)}}},ae=w(te,[["__scopeId","data-v-b2e88dc6"]]);const se=s=>(B("data-v-8d003a44"),s=s(),E(),s),oe={class:"search-container"},ne={class:"cinimas-search-input"},ce={class:"no-kw"},ie={class:"cinimas-nearby"},le=se(()=>t("div",{class:"cinimas-title"},"离你最近",-1)),re={class:"cinimas-list"},de=["onClick"],ue={class:"search-result"},_e={__name:"SearchPage",setup(s){const{curCityId:r,coords:m}=T(),{addHistory:d}=x(),o=v(""),p=v([]),u=v([]),f=v(0),_=j(()=>u.value.filter(e=>e.name.includes(o.value)||e.address.includes(o.value)));z(u,()=>{m.length&&u.value.forEach(e=>{e.__distance=G(...m,e.latitude,e.longitude)})}),J(async()=>{const e=await K(r);p.value=e.data.data.cinemas.slice(0,5);const i=await O({cityId:r,tiketFlag:f});u.value=i.data.data.cinemas});const g=U();function b(){g.back()}function H(e){console.log(e),g.push({name:"cinimas-film",params:{cid:e}})}return(e,i)=>{const L=N;return a(),n("div",oe,[t("div",ne,[y(L,{class:"input-tag",modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=c=>o.value=c),placeholder:"输入影城名称","prefix-icon":l(M),clearable:""},null,8,["modelValue","prefix-icon"]),t("div",{onClick:b,class:"clean-btn"},"取消")]),I(t("div",ce,[t("div",ie,[le,t("div",re,[(a(!0),n(h,null,k(p.value,c=>(a(),n("div",{class:"cinimas-item",key:c.cinemaId,onClick:V=>H(c.cinemaId)},$(c.name),9,de))),128))])]),y(ae)],512),[[S,!o.value]]),I(t("div",ue,[(a(!0),n(h,null,k(_.value,c=>(a(),W(A,{onClick:i[1]||(i[1]=V=>l(d)(o.value)),key:c.cinemaId,data:c},null,8,["data"]))),128))],512),[[S,o.value]])])}}},Be=w(_e,[["__scopeId","data-v-8d003a44"]]);export{Be as default};
