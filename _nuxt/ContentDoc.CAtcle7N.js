import{u as h,g as a,h as d,n as C,i as w,j as v,k as D,l as x,m as r}from"./entry.8jvblbwv.js";import{u as S}from"./vue.f36acd1f.BdNTN0i7.js";import _ from"./ContentRenderer.DjspA7q4.js";import k from"./ContentQuery.TczNeWun.js";import"./ContentRendererMarkdown.B_Q7HnYH.js";import"./index.BphKXUyx.js";import"./preview.D_-0seLJ.js";import"./query.DY213B7b.js";import"./utils.COvuwKRj.js";const y=(u,e=d())=>{const s=h(u),p=w();a(()=>h(u),(t=s)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const c=n.title||(t==null?void 0:t.title);c&&(n.title=c),p.public.content.host;const m=(n==null?void 0:n.description)||(t==null?void 0:t.description);m&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:m}),n!=null&&n.image||(t==null||t.image),C(()=>S(n))},{immediate:!0})},q=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=D(),{tag:s,excerpt:p,path:f,query:t,head:n}=u,c={...t||{},path:f||(t==null?void 0:t.path)||x(d().path),find:"one"},m=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(k,c,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:g})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:g,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(_,{value:o,excerpt:p,tag:s,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):m("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),$=q;export{$ as default};
