import{_ as C,o as e,C as _,w as p,a as n,t as d,e as $,g as S,B as k,c as l,F as r,D as u,z as c,b as B,A as N}from"./entry.ClpJ6PZn.js";import L from"./ContentList.CUYwVbi_.js";import"./ContentQuery.DSjcZMBf.js";const A={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./nlesc-logo.svg"},url:{type:String,default:"/"}}},D={class:"relative"},F={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},V={class:"prose font-display m-4 mr-10"},q=["src"];function z(m,s,o,f,h,x){const i=$;return e(),_(i,{to:o.url},{default:p(()=>[n("div",D,[n("div",F,[n("div",V,[n("h3",null,d(o.title),1)]),n("img",{src:o.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,q)])])]),_:1},8,["to"])}const E=C(A,[["render",z]]),M={class:"flex flex-col pt-4 pb-6 pl-6"},P={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"},X=S({__name:"index",setup(m){const s=N(),{globals:o,navigation:f,surround:h,page:x,excerpt:i,toc:Q,type:R,layout:T,next:W,prev:G}=k();console.log(o);const g={path:"/modules",where:[{visibility:"visible"}]};return(H,I)=>{const y=E,v=L;return e(),l("div",M,[(e(!0),l(r,null,u(c(s).public.categoryOrder,a=>(e(),l("div",{key:a,class:"flex flex-wrap gap-4 mb-8"},[n("h2",P,d(a),1),B(v,{path:"/modules",query:g},{default:p(({list:b})=>[(e(!0),l(r,null,u(b.filter(t=>t.category===a&&t.visibility==="visible").sort((t,w)=>t.id-w.id),t=>(e(),_(y,{key:t.id,title:t.title,author:t.author,thumbnail:`/${c(s).public.repoName}/${t._path}/media/${t.thumbnail}`,url:t._path},null,8,["title","author","thumbnail","url"]))),128))]),_:2},1024)]))),128))])}}});export{X as default};
