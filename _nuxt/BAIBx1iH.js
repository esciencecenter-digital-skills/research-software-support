import g from"./C5TBDK1v.js";import{D as c,f as p,g as y,E as w,G as v,o as e,c as t,F as b,B as k,b as n,w as u,a as _,H as B,t as x,x as f,e as C,I as S}from"./BUbN9v5z.js";import{u as $}from"./BGvMBqbm.js";import"./BhjzyCBk.js";import"./CaA6sha2.js";import"./BBHWa24O.js";import"./CXkyfiQL.js";const N=c("/icons/info.svg"),D=c("/icons/exercise.svg"),L=c("/icons/reading.svg"),P=c("/icons/presentation.svg"),V={class:"flex no-wrap text-left ml-20 z-10"},A={class:"text-2xl px-1.5 py-3 content-center flex-none rounded-bl-xl bg-eScienceYellow"},E={key:0,src:N,width:"25"},F={key:1,src:D,width:"25"},R={key:2,src:L,width:"25"},q={key:3,src:P,width:"25"},z={class:"p-4 flex-initial text-lg font-display font-semibold rounded-tr-xl shadow-xl bg-gentleBlue text-eSciencePurple hover:bg-eScienceWhite hover:text-eScienceBlue"},G=p({__name:"ChapterBar",async setup(h){let s,i;const l=y(),r=([s,i]=w(()=>v("/modules/"+l.params.module+"/").sort({order:1,$numeric:!0}).find()),s=await s,i(),s);return(a,d)=>{const m=C;return e(),t("div",V,[(e(!0),t(b,null,k(f(r),o=>(e(),t("div",{key:o._path},[n(m,{to:o._path,role:"button",class:"flex max-h-20 m-4 rounded-bl-xl rounded-tr-xl active:border-2"},{default:u(()=>[_("div",A,[o.type==="info"?(e(),t("img",E)):o.type==="exercise"?(e(),t("img",F)):o.type==="reading"?(e(),t("img",R)):o.type==="slides"?(e(),t("img",q)):B("",!0)]),_("div",z,x(o.title),1)]),_:2},1032,["to"])]))),128))])}}}),H={class:"flex flex-col h-full w-full p-5"},I={class:"prose-2xl font-display mx-16 font-bold text-eSciencePurple w-full pl-2"},K=p({__name:"[module]",setup(h){const s=$();return(i,l)=>{const r=g,a=G,d=S;return e(),t("div",H,[n(r,null,{default:u(({doc:m})=>[_("h2",I,x(f(s).modTitle),1)]),_:1}),n(a),n(d)])}}});export{K as default};
