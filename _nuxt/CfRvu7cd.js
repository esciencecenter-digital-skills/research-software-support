import{f as Ft,K as Qt,M as Wt,N as It,O as Yt,c as xt,o as gt,a as _t,t as Gt,_ as Kt,B as Jt,w as Xt,b as Rt}from"#entry";import te from"./lpz0ZMmA.js";import ee from"./cqCD3cty.js";import"./Cdh5L8LM.js";import"./B8IaAclc.js";import"./D03iVWAz.js";import"./CAgwrBSm.js";function ne(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ot={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Ot=/[&<>"']/,se=new RegExp(Ot.source,"g"),Pt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ie=new RegExp(Pt.source,"g"),le={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Lt=b=>le[b];function Q(b,i){if(i){if(Ot.test(b))return b.replace(se,Lt)}else if(Pt.test(b))return b.replace(ie,Lt);return b}const re=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Dt(b){return b.replace(re,((i,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ae=/(^|[^\[])\^/g;function D(b,i){b=typeof b=="string"?b:b.source,i=i||"";const t={replace:(e,r)=>(r=(r=r.source||r).replace(ae,"$1"),b=b.replace(e,r),t),getRegex:()=>new RegExp(b,i)};return t}const oe=/[^\w:]/g,ce=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Bt(b,i,t){if(b){let e;try{e=decodeURIComponent(Dt(t)).replace(oe,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}i&&!ce.test(t)&&(t=(function(e,r){ut[" "+e]||(pe.test(e)?ut[" "+e]=e+"/":ut[" "+e]=mt(e,"/",!0)),e=ut[" "+e];const h=e.indexOf(":")===-1;return r.substring(0,2)==="//"?h?r:e.replace(he,"$1")+r:r.charAt(0)==="/"?h?r:e.replace(de,"$1")+r:e+r})(i,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const ut={},pe=/^[^:]+:\/*[^/]*$/,he=/^([^:]+:)[\s\S]*$/,de=/^([^:]+:\/*[^/]*)[\s\S]*$/,kt={exec:function(){}};function Mt(b,i){const t=b.replace(/\|/g,((r,h,p)=>{let d=!1,w=h;for(;--w>=0&&p[w]==="\\";)d=!d;return d?"|":" |"})).split(/ \|/);let e=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>i)t.splice(i);else for(;t.length<i;)t.push("");for(;e<t.length;e++)t[e]=t[e].trim().replace(/\\\|/g,"|");return t}function mt(b,i,t){const e=b.length;if(e===0)return"";let r=0;for(;r<e;){const h=b.charAt(e-r-1);if(h!==i||t){if(h===i||!t)break;r++}else r++}return b.slice(0,e-r)}function Ht(b,i){if(i<1)return"";let t="";for(;i>1;)1&i&&(t+=b),i>>=1,b+=b;return t+b}function Ct(b,i,t,e){const r=i.href,h=i.title?Q(i.title):null,p=b[1].replace(/\\([\[\]])/g,"$1");if(b[0].charAt(0)!=="!"){e.state.inLink=!0;const d={type:"link",raw:t,href:r,title:h,text:p,tokens:e.inlineTokens(p)};return e.state.inLink=!1,d}return{type:"image",raw:t,href:r,title:h,text:Q(p)}}class zt{constructor(i){this.options=i||ot}space(i){const t=this.rules.block.newline.exec(i);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(i){const t=this.rules.block.code.exec(i);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:mt(e,`
`)}}}fences(i){const t=this.rules.block.fences.exec(i);if(t){const e=t[0],r=(function(h,p){const d=h.match(/^(\s+)(?:```)/);if(d===null)return p;const w=d[1];return p.split(`
`).map((_=>{const u=_.match(/^\s+/);if(u===null)return _;const[o]=u;return o.length>=w.length?_.slice(w.length):_})).join(`
`)})(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(i){const t=this.rules.block.heading.exec(i);if(t){let e=t[2].trim();if(/#$/.test(e)){const r=mt(e,"#");this.options.pedantic?e=r.trim():r&&!/ $/.test(r)||(e=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(i){const t=this.rules.block.hr.exec(i);if(t)return{type:"hr",raw:t[0]}}blockquote(i){const t=this.rules.block.blockquote.exec(i);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;const h=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:h,text:e}}}list(i){let t=this.rules.block.list.exec(i);if(t){let e,r,h,p,d,w,_,u,o,c,m,T,B=t[1].trim();const q=B.length>1,A={type:"list",raw:"",ordered:q,start:q?+B.slice(0,-1):"",loose:!1,items:[]};B=q?`\\d{1,9}\\${B.slice(-1)}`:`\\${B}`,this.options.pedantic&&(B=q?B:"[*+-]");const V=new RegExp(`^( {0,3}${B})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;i&&(T=!1,t=V.exec(i))&&!this.rules.block.hr.test(i);){if(e=t[0],i=i.substring(e.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,(O=>" ".repeat(3*O.length))),o=i.split(`
`,1)[0],this.options.pedantic?(p=2,m=u.trimLeft()):(p=t[2].search(/[^ ]/),p=p>4?1:p,m=u.slice(p),p+=t[1].length),w=!1,!u&&/^ *$/.test(o)&&(e+=o+`
`,i=i.substring(o.length+1),T=!0),!T){const O=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),j=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),R=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),U=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;i&&(c=i.split(`
`,1)[0],o=c,this.options.pedantic&&(o=o.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!R.test(o))&&!U.test(o)&&!O.test(o)&&!j.test(i);){if(o.search(/[^ ]/)>=p||!o.trim())m+=`
`+o.slice(p);else{if(w||u.search(/[^ ]/)>=4||R.test(u)||U.test(u)||j.test(u))break;m+=`
`+o}w||o.trim()||(w=!0),e+=c+`
`,i=i.substring(c.length+1),u=o.slice(p)}}A.loose||(_?A.loose=!0:/\n *\n *$/.test(e)&&(_=!0)),this.options.gfm&&(r=/^\[[ xX]\] /.exec(m),r&&(h=r[0]!=="[ ] ",m=m.replace(/^\[[ xX]\] +/,""))),A.items.push({type:"list_item",raw:e,task:!!r,checked:h,loose:!1,text:m}),A.raw+=e}A.items[A.items.length-1].raw=e.trimRight(),A.items[A.items.length-1].text=m.trimRight(),A.raw=A.raw.trimRight();const P=A.items.length;for(d=0;d<P;d++)if(this.lexer.state.top=!1,A.items[d].tokens=this.lexer.blockTokens(A.items[d].text,[]),!A.loose){const O=A.items[d].tokens.filter((R=>R.type==="space")),j=O.length>0&&O.some((R=>/\n.*\n/.test(R.raw)));A.loose=j}if(A.loose)for(d=0;d<P;d++)A.items[d].loose=!0;return A}}html(i){const t=this.rules.block.html.exec(i);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const r=this.options.sanitizer?this.options.sanitizer(t[0]):Q(t[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(i){const t=this.rules.block.def.exec(i);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",h=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:h}}}table(i){const t=this.rules.block.table.exec(i);if(t){const e={type:"table",header:Mt(t[1]).map((r=>({text:r}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,h,p,d,w=e.align.length;for(r=0;r<w;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(w=e.rows.length,r=0;r<w;r++)e.rows[r]=Mt(e.rows[r],e.header.length).map((_=>({text:_})));for(w=e.header.length,h=0;h<w;h++)e.header[h].tokens=this.lexer.inline(e.header[h].text);for(w=e.rows.length,h=0;h<w;h++)for(d=e.rows[h],p=0;p<d.length;p++)d[p].tokens=this.lexer.inline(d[p].text);return e}}}lheading(i){const t=this.rules.block.lheading.exec(i);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(i){const t=this.rules.block.paragraph.exec(i);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(i){const t=this.rules.block.text.exec(i);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(i){const t=this.rules.inline.escape.exec(i);if(t)return{type:"escape",raw:t[0],text:Q(t[1])}}tag(i){const t=this.rules.inline.tag.exec(i);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):Q(t[0]):t[0]}}link(i){const t=this.rules.inline.link.exec(i);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const p=mt(e.slice(0,-1),"\\");if((e.length-p.length)%2==0)return}else{const p=(function(d,w){if(d.indexOf(w[1])===-1)return-1;const _=d.length;let u=0,o=0;for(;o<_;o++)if(d[o]==="\\")o++;else if(d[o]===w[0])u++;else if(d[o]===w[1]&&(u--,u<0))return o;return-1})(t[2],"()");if(p>-1){const d=(t[0].indexOf("!")===0?5:4)+t[1].length+p;t[2]=t[2].substring(0,p),t[0]=t[0].substring(0,d).trim(),t[3]=""}}let r=t[2],h="";if(this.options.pedantic){const p=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);p&&(r=p[1],h=p[3])}else h=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),Ct(t,{href:r&&r.replace(this.rules.inline._escapes,"$1"),title:h&&h.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(i,t){let e;if((e=this.rules.inline.reflink.exec(i))||(e=this.rules.inline.nolink.exec(i))){let r=(e[2]||e[1]).replace(/\s+/g," ");if(r=t[r.toLowerCase()],!r){const h=e[0].charAt(0);return{type:"text",raw:h,text:h}}return Ct(e,r,e[0],this.lexer)}}emStrong(i,t,e=""){let r=this.rules.inline.emStrong.lDelim.exec(i);if(!r||r[3]&&e.match(/[\p{L}\p{N}]/u))return;const h=r[1]||r[2]||"";if(!h||h&&(e===""||this.rules.inline.punctuation.exec(e))){const p=r[0].length-1;let d,w,_=p,u=0;const o=r[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*i.length+p);(r=o.exec(t))!=null;){if(d=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!d)continue;if(w=d.length,r[3]||r[4]){_+=w;continue}if((r[5]||r[6])&&p%3&&!((p+w)%3)){u+=w;continue}if(_-=w,_>0)continue;w=Math.min(w,w+_+u);const c=i.slice(0,p+r.index+(r[0].length-d.length)+w);if(Math.min(p,w)%2){const T=c.slice(1,-1);return{type:"em",raw:c,text:T,tokens:this.lexer.inlineTokens(T)}}const m=c.slice(2,-2);return{type:"strong",raw:c,text:m,tokens:this.lexer.inlineTokens(m)}}}}codespan(i){const t=this.rules.inline.code.exec(i);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),h=/^ /.test(e)&&/ $/.test(e);return r&&h&&(e=e.substring(1,e.length-1)),e=Q(e,!0),{type:"codespan",raw:t[0],text:e}}}br(i){const t=this.rules.inline.br.exec(i);if(t)return{type:"br",raw:t[0]}}del(i){const t=this.rules.inline.del.exec(i);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(i,t){const e=this.rules.inline.autolink.exec(i);if(e){let r,h;return e[2]==="@"?(r=Q(this.options.mangle?t(e[1]):e[1]),h="mailto:"+r):(r=Q(e[1]),h=r),{type:"link",raw:e[0],text:r,href:h,tokens:[{type:"text",raw:r,text:r}]}}}url(i,t){let e;if(e=this.rules.inline.url.exec(i)){let r,h;if(e[2]==="@")r=Q(this.options.mangle?t(e[0]):e[0]),h="mailto:"+r;else{let p;do p=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(p!==e[0]);r=Q(e[0]),h=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:r,href:h,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(i,t){const e=this.rules.inline.text.exec(i);if(e){let r;return r=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):Q(e[0]):e[0]:Q(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:r}}}}const C={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:kt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};C.def=D(C.def).replace("label",C._label).replace("title",C._title).getRegex(),C.bullet=/(?:[*+-]|\d{1,9}[.)])/,C.listItemStart=D(/^( *)(bull) */).replace("bull",C.bullet).getRegex(),C.list=D(C.list).replace(/bull/g,C.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+C.def.source+")").getRegex(),C._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",C._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,C.html=D(C.html,"i").replace("comment",C._comment).replace("tag",C._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),C.paragraph=D(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.blockquote=D(C.blockquote).replace("paragraph",C.paragraph).getRegex(),C.normal={...C},C.gfm={...C.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},C.gfm.table=D(C.gfm.table).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.gfm.paragraph=D(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",C.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.pedantic={...C.normal,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",C._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:kt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(C.normal._paragraph).replace("hr",C.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",C.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:kt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:kt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ue(b){return b.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function qt(b){let i,t,e="";const r=b.length;for(i=0;i<r;i++)t=b.charCodeAt(i),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",E.punctuation=D(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex(),E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,E.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,E._comment=D(C._comment).replace("(?:-->|$)","-->").getRegex(),E.emStrong.lDelim=D(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimAst=D(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex(),E.emStrong.rDelimUnd=D(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex(),E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,E.autolink=D(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex(),E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,E.tag=D(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex(),E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,E.link=D(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex(),E.reflink=D(E.reflink).replace("label",E._label).replace("ref",C._label).getRegex(),E.nolink=D(E.nolink).replace("ref",C._label).getRegex(),E.reflinkSearch=D(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex(),E.normal={...E},E.pedantic={...E.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()},E.gfm={...E.normal,escape:D(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},E.gfm.url=D(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex(),E.breaks={...E.gfm,br:D(E.br).replace("{2,}","*").getRegex(),text:D(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class it{constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||ot,this.options.tokenizer=this.options.tokenizer||new zt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:C.normal,inline:E.normal};this.options.pedantic?(t.block=C.pedantic,t.inline=E.pedantic):this.options.gfm&&(t.block=C.gfm,this.options.breaks?t.inline=E.breaks:t.inline=E.gfm),this.tokenizer.rules=t}static get rules(){return{block:C,inline:E}}static lex(i,t){return new it(t).lex(i)}static lexInline(i,t){return new it(t).inlineTokens(i)}lex(i){let t;for(i=i.replace(/\r\n|\r/g,`
`),this.blockTokens(i,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(i,t=[]){let e,r,h,p;for(i=this.options.pedantic?i.replace(/\t/g,"    ").replace(/^ +$/gm,""):i.replace(/^( *)(\t+)/gm,((d,w,_)=>w+"    ".repeat(_.length)));i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((d=>!!(e=d.call({lexer:this},i,t))&&(i=i.substring(e.raw.length),t.push(e),!0)))))if(e=this.tokenizer.space(i))i=i.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);else if(e=this.tokenizer.code(i))i=i.substring(e.raw.length),r=t[t.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?t.push(e):(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(e=this.tokenizer.fences(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.heading(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.hr(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.blockquote(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.list(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.html(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.def(i))i=i.substring(e.raw.length),r=t[t.length-1],!r||r.type!=="paragraph"&&r.type!=="text"?this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title}):(r.raw+=`
`+e.raw,r.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text);else if(e=this.tokenizer.table(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.lheading(i))i=i.substring(e.raw.length),t.push(e);else{if(h=i,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const w=i.slice(1);let _;this.options.extensions.startBlock.forEach((function(u){_=u.call({lexer:this},w),typeof _=="number"&&_>=0&&(d=Math.min(d,_))})),d<1/0&&d>=0&&(h=i.substring(0,d+1))}if(this.state.top&&(e=this.tokenizer.paragraph(h)))r=t[t.length-1],p&&r.type==="paragraph"?(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(e),p=h.length!==i.length,i=i.substring(e.raw.length);else if(e=this.tokenizer.text(i))i=i.substring(e.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+e.raw,r.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(e);else if(i){const d="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}return this.state.top=!0,t}inline(i,t=[]){return this.inlineQueue.push({src:i,tokens:t}),t}inlineTokens(i,t=[]){let e,r,h,p,d,w,_=i;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(p=this.tokenizer.rules.inline.reflinkSearch.exec(_))!=null;)u.includes(p[0].slice(p[0].lastIndexOf("[")+1,-1))&&(_=_.slice(0,p.index)+"["+Ht("a",p[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(p=this.tokenizer.rules.inline.blockSkip.exec(_))!=null;)_=_.slice(0,p.index)+"["+Ht("a",p[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(p=this.tokenizer.rules.inline.escapedEmSt.exec(_))!=null;)_=_.slice(0,p.index+p[0].length-2)+"++"+_.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;i;)if(d||(w=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((u=>!!(e=u.call({lexer:this},i,t))&&(i=i.substring(e.raw.length),t.push(e),!0)))))if(e=this.tokenizer.escape(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.tag(i))i=i.substring(e.raw.length),r=t[t.length-1],r&&e.type==="text"&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(e=this.tokenizer.link(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.reflink(i,this.tokens.links))i=i.substring(e.raw.length),r=t[t.length-1],r&&e.type==="text"&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(e=this.tokenizer.emStrong(i,_,w))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.codespan(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.br(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.del(i))i=i.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.autolink(i,qt))i=i.substring(e.raw.length),t.push(e);else if(this.state.inLink||!(e=this.tokenizer.url(i,qt))){if(h=i,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const o=i.slice(1);let c;this.options.extensions.startInline.forEach((function(m){c=m.call({lexer:this},o),typeof c=="number"&&c>=0&&(u=Math.min(u,c))})),u<1/0&&u>=0&&(h=i.substring(0,u+1))}if(e=this.tokenizer.inlineText(h,ue))i=i.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(w=e.raw.slice(-1)),d=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=e.raw,r.text+=e.text):t.push(e);else if(i){const u="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else i=i.substring(e.raw.length),t.push(e);return t}}class St{constructor(i){this.options=i||ot}code(i,t,e){const r=(t||"").match(/\S*/)[0];if(this.options.highlight){const h=this.options.highlight(i,r);h!=null&&h!==i&&(e=!0,i=h)}return i=i.replace(/\n$/,"")+`
`,r?'<pre><code class="'+this.options.langPrefix+Q(r)+'">'+(e?i:Q(i,!0))+`</code></pre>
`:"<pre><code>"+(e?i:Q(i,!0))+`</code></pre>
`}blockquote(i){return`<blockquote>
${i}</blockquote>
`}html(i){return i}heading(i,t,e,r){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+r.slug(e)}">${i}</h${t}>
`:`<h${t}>${i}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(i,t,e){const r=t?"ol":"ul";return"<"+r+(t&&e!==1?' start="'+e+'"':"")+`>
`+i+"</"+r+`>
`}listitem(i){return`<li>${i}</li>
`}checkbox(i){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(i){return`<p>${i}</p>
`}table(i,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+t+`</table>
`}tablerow(i){return`<tr>
${i}</tr>
`}tablecell(i,t){const e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+i+`</${e}>
`}strong(i){return`<strong>${i}</strong>`}em(i){return`<em>${i}</em>`}codespan(i){return`<code>${i}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(i){return`<del>${i}</del>`}link(i,t,e){if((i=Bt(this.options.sanitize,this.options.baseUrl,i))===null)return e;let r='<a href="'+i+'"';return t&&(r+=' title="'+t+'"'),r+=">"+e+"</a>",r}image(i,t,e){if((i=Bt(this.options.sanitize,this.options.baseUrl,i))===null)return e;let r=`<img src="${i}" alt="${e}"`;return t&&(r+=` title="${t}"`),r+=this.options.xhtml?"/>":">",r}text(i){return i}}class jt{strong(i){return i}em(i){return i}codespan(i){return i}del(i){return i}html(i){return i}text(i){return i}link(i,t,e){return""+e}image(i,t,e){return""+e}br(){return""}}class Zt{constructor(){this.seen={}}serialize(i){return i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(i,t){let e=i,r=0;if(this.seen.hasOwnProperty(e)){r=this.seen[i];do r++,e=i+"-"+r;while(this.seen.hasOwnProperty(e))}return t||(this.seen[i]=r,this.seen[e]=0),e}slug(i,t={}){const e=this.serialize(i);return this.getNextSafeSlug(e,t.dryrun)}}class lt{constructor(i){this.options=i||ot,this.options.renderer=this.options.renderer||new St,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new jt,this.slugger=new Zt}static parse(i,t){return new lt(t).parse(i)}static parseInline(i,t){return new lt(t).parseInline(i)}parse(i,t=!0){let e,r,h,p,d,w,_,u,o,c,m,T,B,q,A,V,P,O,j,R="";const U=i.length;for(e=0;e<U;e++)if(c=i[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[c.type]&&(j=this.options.extensions.renderers[c.type].call({parser:this},c),j!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(c.type)))R+=j||"";else switch(c.type){case"space":continue;case"hr":R+=this.renderer.hr();continue;case"heading":R+=this.renderer.heading(this.parseInline(c.tokens),c.depth,Dt(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":R+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(u="",_="",p=c.header.length,r=0;r<p;r++)_+=this.renderer.tablecell(this.parseInline(c.header[r].tokens),{header:!0,align:c.align[r]});for(u+=this.renderer.tablerow(_),o="",p=c.rows.length,r=0;r<p;r++){for(w=c.rows[r],_="",d=w.length,h=0;h<d;h++)_+=this.renderer.tablecell(this.parseInline(w[h].tokens),{header:!1,align:c.align[h]});o+=this.renderer.tablerow(_)}R+=this.renderer.table(u,o);continue;case"blockquote":o=this.parse(c.tokens),R+=this.renderer.blockquote(o);continue;case"list":for(m=c.ordered,T=c.start,B=c.loose,p=c.items.length,o="",r=0;r<p;r++)A=c.items[r],V=A.checked,P=A.task,q="",A.task&&(O=this.renderer.checkbox(V),B?A.tokens.length>0&&A.tokens[0].type==="paragraph"?(A.tokens[0].text=O+" "+A.tokens[0].text,A.tokens[0].tokens&&A.tokens[0].tokens.length>0&&A.tokens[0].tokens[0].type==="text"&&(A.tokens[0].tokens[0].text=O+" "+A.tokens[0].tokens[0].text)):A.tokens.unshift({type:"text",text:O}):q+=O),q+=this.parse(A.tokens,B),o+=this.renderer.listitem(q,P,V);R+=this.renderer.list(o,m,T);continue;case"html":R+=this.renderer.html(c.text);continue;case"paragraph":R+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(o=c.tokens?this.parseInline(c.tokens):c.text;e+1<U&&i[e+1].type==="text";)c=i[++e],o+=`
`+(c.tokens?this.parseInline(c.tokens):c.text);R+=t?this.renderer.paragraph(o):o;continue;default:{const G='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(G);throw new Error(G)}}return R}parseInline(i,t){t=t||this.renderer;let e,r,h,p="";const d=i.length;for(e=0;e<d;e++)if(r=i[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(h=this.options.extensions.renderers[r.type].call({parser:this},r),h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)))p+=h||"";else switch(r.type){case"escape":case"text":p+=t.text(r.text);break;case"html":p+=t.html(r.text);break;case"link":p+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break;case"image":p+=t.image(r.href,r.title,r.text);break;case"strong":p+=t.strong(this.parseInline(r.tokens,t));break;case"em":p+=t.em(this.parseInline(r.tokens,t));break;case"codespan":p+=t.codespan(r.text);break;case"br":p+=t.br();break;case"del":p+=t.del(this.parseInline(r.tokens,t));break;default:{const w='Token with "'+r.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}}return p}}class vt{constructor(i){this.options=i||ot}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(i){return i}postprocess(i){return i}}function Ut(b,i){return(t,e,r)=>{typeof e=="function"&&(r=e,e=null);const h={...e},p=(function(d,w,_){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,d){const o="<p>An error occurred:</p><pre>"+Q(u.message+"",!0)+"</pre>";return w?Promise.resolve(o):_?void _(null,o):o}if(w)return Promise.reject(u);if(!_)throw u;_(u)}})((e={...L.defaults,...h}).silent,e.async,r);if(t==null)return p(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return p(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if((function(d){d&&d.sanitize&&!d.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(e),e.hooks&&(e.hooks.options=e),r){const d=e.highlight;let w;try{e.hooks&&(t=e.hooks.preprocess(t)),w=b(t,e)}catch(o){return p(o)}const _=function(o){let c;if(!o)try{e.walkTokens&&L.walkTokens(w,e.walkTokens),c=i(w,e),e.hooks&&(c=e.hooks.postprocess(c))}catch(m){o=m}return e.highlight=d,o?p(o):r(null,c)};if(!d||d.length<3||(delete e.highlight,!w.length))return _();let u=0;return L.walkTokens(w,(function(o){o.type==="code"&&(u++,setTimeout((()=>{d(o.text,o.lang,(function(c,m){if(c)return _(c);m!=null&&m!==o.text&&(o.text=m,o.escaped=!0),u--,u===0&&_()}))}),0))})),void(u===0&&_())}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then((d=>b(d,e))).then((d=>e.walkTokens?Promise.all(L.walkTokens(d,e.walkTokens)).then((()=>d)):d)).then((d=>i(d,e))).then((d=>e.hooks?e.hooks.postprocess(d):d)).catch(p);try{e.hooks&&(t=e.hooks.preprocess(t));const d=b(t,e);e.walkTokens&&L.walkTokens(d,e.walkTokens);let w=i(d,e);return e.hooks&&(w=e.hooks.postprocess(w)),w}catch(d){return p(d)}}}function L(b,i,t){return Ut(it.lex,lt.parse)(b,i,t)}L.options=L.setOptions=function(b){var i;return L.defaults={...L.defaults,...b},i=L.defaults,ot=i,L},L.getDefaults=ne,L.defaults=ot,L.use=function(...b){const i=L.defaults.extensions||{renderers:{},childTokens:{}};b.forEach((t=>{const e={...t};if(e.async=L.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach((r=>{if(!r.name)throw new Error("extension name required");if(r.renderer){const h=i.renderers[r.name];i.renderers[r.name]=h?function(...p){let d=r.renderer.apply(this,p);return d===!1&&(d=h.apply(this,p)),d}:r.renderer}if(r.tokenizer){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");i[r.level]?i[r.level].unshift(r.tokenizer):i[r.level]=[r.tokenizer],r.start&&(r.level==="block"?i.startBlock?i.startBlock.push(r.start):i.startBlock=[r.start]:r.level==="inline"&&(i.startInline?i.startInline.push(r.start):i.startInline=[r.start]))}r.childTokens&&(i.childTokens[r.name]=r.childTokens)})),e.extensions=i),t.renderer){const r=L.defaults.renderer||new St;for(const h in t.renderer){const p=r[h];r[h]=(...d)=>{let w=t.renderer[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.renderer=r}if(t.tokenizer){const r=L.defaults.tokenizer||new zt;for(const h in t.tokenizer){const p=r[h];r[h]=(...d)=>{let w=t.tokenizer[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.tokenizer=r}if(t.hooks){const r=L.defaults.hooks||new vt;for(const h in t.hooks){const p=r[h];vt.passThroughHooks.has(h)?r[h]=d=>{if(L.defaults.async)return Promise.resolve(t.hooks[h].call(r,d)).then((_=>p.call(r,_)));const w=t.hooks[h].call(r,d);return p.call(r,w)}:r[h]=(...d)=>{let w=t.hooks[h].apply(r,d);return w===!1&&(w=p.apply(r,d)),w}}e.hooks=r}if(t.walkTokens){const r=L.defaults.walkTokens;e.walkTokens=function(h){let p=[];return p.push(t.walkTokens.call(this,h)),r&&(p=p.concat(r.call(this,h))),p}}L.setOptions(e)}))},L.walkTokens=function(b,i){let t=[];for(const e of b)switch(t=t.concat(i.call(L,e)),e.type){case"table":for(const r of e.header)t=t.concat(L.walkTokens(r.tokens,i));for(const r of e.rows)for(const h of r)t=t.concat(L.walkTokens(h.tokens,i));break;case"list":t=t.concat(L.walkTokens(e.items,i));break;default:L.defaults.extensions&&L.defaults.extensions.childTokens&&L.defaults.extensions.childTokens[e.type]?L.defaults.extensions.childTokens[e.type].forEach((function(r){t=t.concat(L.walkTokens(e[r],i))})):e.tokens&&(t=t.concat(L.walkTokens(e.tokens,i)))}return t},L.parseInline=Ut(it.lexInline,lt.parseInline),L.Parser=lt,L.parser=lt.parse,L.Renderer=St,L.TextRenderer=jt,L.Lexer=it,L.lexer=it.lex,L.Tokenizer=zt,L.Slugger=Zt,L.Hooks=vt,L.parse=L,L.options,L.setOptions,L.use,L.walkTokens,L.parseInline,lt.parse,it.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Vt="__SCRIPT_END__",ft=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ge=()=>{let b;function i(u){let o=(u.querySelector("[data-template]")||u.querySelector("script")||u).textContent;o=o.replace(new RegExp(Vt,"g"),"<\/script>");const c=o.match(/^\n?(\s*)/)[1].length,m=o.match(/^\n?(\t*)/)[1].length;return m>0?o=o.replace(new RegExp("\\n?\\t{"+m+"}(.*)","g"),(function(T,B){return`
`+B})):c>1&&(o=o.replace(new RegExp("\\n? {"+c+"}(.*)","g"),(function(T,B){return`
`+B}))),o}function t(u){const o=u.attributes,c=[];for(let m=0,T=o.length;m<T;m++){const B=o[m].name,q=o[m].value;/data\-(markdown|separator|vertical|notes)/gi.test(B)||(q?c.push(B+'="'+q+'"'):c.push(B))}return c.join(" ")}function e(u){const o=b?.getConfig?.().markdown;return(u=u||{}).separator=u.separator||o?.separator||`\r?
---\r?
`,u.verticalSeparator=u.verticalSeparator||o?.verticalSeparator||null,u.notesSeparator=u.notesSeparator||o?.notesSeparator||"^s*notes?:",u.attributes=u.attributes||"",u}function r(u,o){o=e(o);const c=u.split(new RegExp(o.notesSeparator,"mgi"));return c.length===2&&(u=c[0]+'<aside class="notes">'+L(c[1].trim())+"</aside>"),'<script type="text/template">'+(u=u.replace(/<\/script>/g,Vt))+"<\/script>"}function h(u,o){o=e(o);const c=new RegExp(o.separator+(o.verticalSeparator?"|"+o.verticalSeparator:""),"mg"),m=new RegExp(o.separator);let T,B,q,A=0,V=!0,P=[];for(;T=c.exec(u);)B=m.test(T[0]),!B&&V&&P.push([]),q=u.substring(A,T.index),B&&V?P.push(q):P[P.length-1].push(q),A=c.lastIndex,V=B;(V?P:P[P.length-1]).push(u.substring(A));let O="";for(let j=0,R=P.length;j<R;j++)P[j]instanceof Array?(O+="<section "+o.attributes+">",P[j].forEach((function(U){O+="<section data-markdown>"+r(U,o)+"</section>"})),O+="</section>"):O+="<section "+o.attributes+" data-markdown>"+r(P[j],o)+"</section>";return O}function p(u){return new Promise((function(o){const c=[];[].slice.call(u.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach((function(m,T){m.getAttribute("data-markdown").length?c.push((function(B){return new Promise((function(q,A){const V=new XMLHttpRequest,P=B.getAttribute("data-markdown"),O=B.getAttribute("data-charset");O!==null&&O!==""&&V.overrideMimeType("text/html; charset="+O),V.onreadystatechange=(function(j,R){R.readyState===4&&(R.status>=200&&R.status<300||R.status===0?q(R,P):A(R,P))}).bind(this,B,V),V.open("GET",P,!0);try{V.send()}catch(j){console.warn("Failed to get the Markdown file "+P+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+j),q(V,P)}}))})(m).then((function(B,q){m.outerHTML=h(B.responseText,{separator:m.getAttribute("data-separator"),verticalSeparator:m.getAttribute("data-separator-vertical"),notesSeparator:m.getAttribute("data-separator-notes"),attributes:t(m)})}),(function(B,q){m.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+q+" failed with HTTP status "+B.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"}))):m.outerHTML=h(i(m),{separator:m.getAttribute("data-separator"),verticalSeparator:m.getAttribute("data-separator-vertical"),notesSeparator:m.getAttribute("data-separator-notes"),attributes:t(m)})})),Promise.all(c).then(o)}))}function d(u,o,c){const m=new RegExp(c,"mg"),T=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let B,q,A=u.nodeValue;if(B=m.exec(A)){const V=B[1];for(A=A.substring(0,B.index)+A.substring(m.lastIndex),u.nodeValue=A;q=T.exec(V);)q[2]?o.setAttribute(q[1],q[2]):o.setAttribute(q[3],"");return!0}return!1}function w(u,o,c,m,T){if(o!==null&&o.childNodes!==void 0&&o.childNodes.length>0){let B=o;for(let q=0;q<o.childNodes.length;q++){const A=o.childNodes[q];if(q>0){let P=q-1;for(;P>=0;){const O=o.childNodes[P];if(typeof O.setAttribute=="function"&&O.tagName!=="BR"){B=O;break}P-=1}}let V=u;A.nodeName==="section"&&(V=A,B=A),typeof A.setAttribute!="function"&&A.nodeType!==Node.COMMENT_NODE||w(V,A,B,m,T)}}o.nodeType===Node.COMMENT_NODE&&d(o,c,m)===!1&&d(o,u,T)}function _(){const u=b.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(u).forEach((function(o){o.setAttribute("data-markdown-parsed",!0);const c=o.querySelector("aside.notes"),m=i(o);o.innerHTML=L(m),w(o,o,null,o.getAttribute("data-element-attributes")||o.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",o.getAttribute("data-attributes")||o.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),c&&o.appendChild(c)})),Promise.resolve()}return{id:"markdown",init:function(u){b=u;let{renderer:o,animateLists:c,...m}=b.getConfig().markdown||{};return o||(o=new L.Renderer,o.code=(T,B)=>{let q="",A="";if(ft.test(B)){let V=B.match(ft)[2];V&&(q=`data-ln-start-from="${V.trim()}"`),A=B.match(ft)[3].trim(),A=`data-line-numbers="${A}"`,B=B.replace(ft,"").trim()}return`<pre><code ${A} ${q} class="${B}">${T=T.replace(/([&<>'"])/g,(V=>fe[V]))}</code></pre>`}),c===!0&&(o.listitem=T=>`<li class="fragment">${T}</li>`),L.setOptions({renderer:o,...m}),p(b.getRevealElement()).then(_)},processSlides:p,convertSlides:_,slidify:h,marked:L}};function me(b){return b&&b.__esModule&&Object.prototype.hasOwnProperty.call(b,"default")?b.default:b}var yt={exports:{}},ye=yt.exports,Nt;function ke(){return Nt||(Nt=1,(function(b,i){(function(t,e){b.exports=e()})(ye,(function(){function t(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let e={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const r=/[&<>"']/,h=new RegExp(r.source,"g"),p=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,d=new RegExp(p.source,"g"),w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_=I=>w[I];function u(I,l){if(l){if(r.test(I))return I.replace(h,_)}else if(p.test(I))return I.replace(d,_);return I}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function c(I){return I.replace(o,((l,n)=>(n=n.toLowerCase())==="colon"?":":n.charAt(0)==="#"?n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1)):""))}const m=/(^|[^\[])\^/g;function T(I,l){I=typeof I=="string"?I:I.source,l=l||"";const n={replace:(s,a)=>(a=(a=a.source||a).replace(m,"$1"),I=I.replace(s,a),n),getRegex:()=>new RegExp(I,l)};return n}const B=/[^\w:]/g,q=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function A(I,l,n){if(I){let s;try{s=decodeURIComponent(c(n)).replace(B,"").toLowerCase()}catch{return null}if(s.indexOf("javascript:")===0||s.indexOf("vbscript:")===0||s.indexOf("data:")===0)return null}l&&!q.test(n)&&(n=(function(s,a){V[" "+s]||(P.test(s)?V[" "+s]=s+"/":V[" "+s]=G(s,"/",!0)),s=V[" "+s];const y=s.indexOf(":")===-1;return a.substring(0,2)==="//"?y?a:s.replace(O,"$1")+a:a.charAt(0)==="/"?y?a:s.replace(j,"$1")+a:s+a})(l,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const V={},P=/^[^:]+:\/*[^/]*$/,O=/^([^:]+:)[\s\S]*$/,j=/^([^:]+:\/*[^/]*)[\s\S]*$/,R={exec:function(){}};function U(I,l){const n=I.replace(/\|/g,((a,y,g)=>{let f=!1,k=y;for(;--k>=0&&g[k]==="\\";)f=!f;return f?"|":" |"})).split(/ \|/);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),n.length>l)n.splice(l);else for(;n.length<l;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function G(I,l,n){const s=I.length;if(s===0)return"";let a=0;for(;a<s;){const y=I.charAt(s-a-1);if(y!==l||n){if(y===l||!n)break;a++}else a++}return I.slice(0,s-a)}function K(I,l){if(l<1)return"";let n="";for(;l>1;)1&l&&(n+=I),l>>=1,I+=I;return n+I}function tt(I,l,n,s){const a=l.href,y=l.title?u(l.title):null,g=I[1].replace(/\\([\[\]])/g,"$1");if(I[0].charAt(0)!=="!"){s.state.inLink=!0;const f={type:"link",raw:n,href:a,title:y,text:g,tokens:s.inlineTokens(g)};return s.state.inLink=!1,f}return{type:"image",raw:n,href:a,title:y,text:u(g)}}class rt{constructor(l){this.options=l||e}space(l){const n=this.rules.block.newline.exec(l);if(n&&n[0].length>0)return{type:"space",raw:n[0]}}code(l){const n=this.rules.block.code.exec(l);if(n){const s=n[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:n[0],codeBlockStyle:"indented",text:this.options.pedantic?s:G(s,`
`)}}}fences(l){const n=this.rules.block.fences.exec(l);if(n){const s=n[0],a=(function(y,g){const f=y.match(/^(\s+)(?:```)/);if(f===null)return g;const k=f[1];return g.split(`
`).map((x=>{const $=x.match(/^\s+/);if($===null)return x;const[v]=$;return v.length>=k.length?x.slice(k.length):x})).join(`
`)})(s,n[3]||"");return{type:"code",raw:s,lang:n[2]?n[2].trim().replace(this.rules.inline._escapes,"$1"):n[2],text:a}}}heading(l){const n=this.rules.block.heading.exec(l);if(n){let s=n[2].trim();if(/#$/.test(s)){const a=G(s,"#");this.options.pedantic?s=a.trim():a&&!/ $/.test(a)||(s=a.trim())}return{type:"heading",raw:n[0],depth:n[1].length,text:s,tokens:this.lexer.inline(s)}}}hr(l){const n=this.rules.block.hr.exec(l);if(n)return{type:"hr",raw:n[0]}}blockquote(l){const n=this.rules.block.blockquote.exec(l);if(n){const s=n[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const y=this.lexer.blockTokens(s);return this.lexer.state.top=a,{type:"blockquote",raw:n[0],tokens:y,text:s}}}list(l){let n=this.rules.block.list.exec(l);if(n){let s,a,y,g,f,k,x,$,v,S,Z,J,W=n[1].trim();const X=W.length>1,N={type:"list",raw:"",ordered:X,start:X?+W.slice(0,-1):"",loose:!1,items:[]};W=X?`\\d{1,9}\\${W.slice(-1)}`:`\\${W}`,this.options.pedantic&&(W=X?W:"[*+-]");const pt=new RegExp(`^( {0,3}${W})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;l&&(J=!1,n=pt.exec(l))&&!this.rules.block.hr.test(l);){if(s=n[0],l=l.substring(s.length),$=n[2].split(`
`,1)[0].replace(/^\t+/,(Y=>" ".repeat(3*Y.length))),v=l.split(`
`,1)[0],this.options.pedantic?(g=2,Z=$.trimLeft()):(g=n[2].search(/[^ ]/),g=g>4?1:g,Z=$.slice(g),g+=n[1].length),k=!1,!$&&/^ *$/.test(v)&&(s+=v+`
`,l=l.substring(v.length+1),J=!0),!J){const Y=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),st=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),F=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),dt=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;l&&(S=l.split(`
`,1)[0],v=S,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!F.test(v))&&!dt.test(v)&&!Y.test(v)&&!st.test(l);){if(v.search(/[^ ]/)>=g||!v.trim())Z+=`
`+v.slice(g);else{if(k||$.search(/[^ ]/)>=4||F.test($)||dt.test($)||st.test($))break;Z+=`
`+v}k||v.trim()||(k=!0),s+=S+`
`,l=l.substring(S.length+1),$=v.slice(g)}}N.loose||(x?N.loose=!0:/\n *\n *$/.test(s)&&(x=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(Z),a&&(y=a[0]!=="[ ] ",Z=Z.replace(/^\[[ xX]\] +/,""))),N.items.push({type:"list_item",raw:s,task:!!a,checked:y,loose:!1,text:Z}),N.raw+=s}N.items[N.items.length-1].raw=s.trimRight(),N.items[N.items.length-1].text=Z.trimRight(),N.raw=N.raw.trimRight();const ht=N.items.length;for(f=0;f<ht;f++)if(this.lexer.state.top=!1,N.items[f].tokens=this.lexer.blockTokens(N.items[f].text,[]),!N.loose){const Y=N.items[f].tokens.filter((F=>F.type==="space")),st=Y.length>0&&Y.some((F=>/\n.*\n/.test(F.raw)));N.loose=st}if(N.loose)for(f=0;f<ht;f++)N.items[f].loose=!0;return N}}html(l){const n=this.rules.block.html.exec(l);if(n){const s={type:"html",raw:n[0],pre:!this.options.sanitizer&&(n[1]==="pre"||n[1]==="script"||n[1]==="style"),text:n[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(n[0]):u(n[0]);s.type="paragraph",s.text=a,s.tokens=this.lexer.inline(a)}return s}}def(l){const n=this.rules.block.def.exec(l);if(n){const s=n[1].toLowerCase().replace(/\s+/g," "),a=n[2]?n[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",y=n[3]?n[3].substring(1,n[3].length-1).replace(this.rules.inline._escapes,"$1"):n[3];return{type:"def",tag:s,raw:n[0],href:a,title:y}}}table(l){const n=this.rules.block.table.exec(l);if(n){const s={type:"table",header:U(n[1]).map((a=>({text:a}))),align:n[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:n[3]&&n[3].trim()?n[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(s.header.length===s.align.length){s.raw=n[0];let a,y,g,f,k=s.align.length;for(a=0;a<k;a++)/^ *-+: *$/.test(s.align[a])?s.align[a]="right":/^ *:-+: *$/.test(s.align[a])?s.align[a]="center":/^ *:-+ *$/.test(s.align[a])?s.align[a]="left":s.align[a]=null;for(k=s.rows.length,a=0;a<k;a++)s.rows[a]=U(s.rows[a],s.header.length).map((x=>({text:x})));for(k=s.header.length,y=0;y<k;y++)s.header[y].tokens=this.lexer.inline(s.header[y].text);for(k=s.rows.length,y=0;y<k;y++)for(f=s.rows[y],g=0;g<f.length;g++)f[g].tokens=this.lexer.inline(f[g].text);return s}}}lheading(l){const n=this.rules.block.lheading.exec(l);if(n)return{type:"heading",raw:n[0],depth:n[2].charAt(0)==="="?1:2,text:n[1],tokens:this.lexer.inline(n[1])}}paragraph(l){const n=this.rules.block.paragraph.exec(l);if(n){const s=n[1].charAt(n[1].length-1)===`
`?n[1].slice(0,-1):n[1];return{type:"paragraph",raw:n[0],text:s,tokens:this.lexer.inline(s)}}}text(l){const n=this.rules.block.text.exec(l);if(n)return{type:"text",raw:n[0],text:n[0],tokens:this.lexer.inline(n[0])}}escape(l){const n=this.rules.inline.escape.exec(l);if(n)return{type:"escape",raw:n[0],text:u(n[1])}}tag(l){const n=this.rules.inline.tag.exec(l);if(n)return!this.lexer.state.inLink&&/^<a /i.test(n[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(n[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(n[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(n[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:n[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):u(n[0]):n[0]}}link(l){const n=this.rules.inline.link.exec(l);if(n){const s=n[2].trim();if(!this.options.pedantic&&/^</.test(s)){if(!/>$/.test(s))return;const g=G(s.slice(0,-1),"\\");if((s.length-g.length)%2==0)return}else{const g=(function(f,k){if(f.indexOf(k[1])===-1)return-1;const x=f.length;let $=0,v=0;for(;v<x;v++)if(f[v]==="\\")v++;else if(f[v]===k[0])$++;else if(f[v]===k[1]&&($--,$<0))return v;return-1})(n[2],"()");if(g>-1){const f=(n[0].indexOf("!")===0?5:4)+n[1].length+g;n[2]=n[2].substring(0,g),n[0]=n[0].substring(0,f).trim(),n[3]=""}}let a=n[2],y="";if(this.options.pedantic){const g=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);g&&(a=g[1],y=g[3])}else y=n[3]?n[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(s)?a.slice(1):a.slice(1,-1)),tt(n,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:y&&y.replace(this.rules.inline._escapes,"$1")},n[0],this.lexer)}}reflink(l,n){let s;if((s=this.rules.inline.reflink.exec(l))||(s=this.rules.inline.nolink.exec(l))){let a=(s[2]||s[1]).replace(/\s+/g," ");if(a=n[a.toLowerCase()],!a){const y=s[0].charAt(0);return{type:"text",raw:y,text:y}}return tt(s,a,s[0],this.lexer)}}emStrong(l,n,s=""){let a=this.rules.inline.emStrong.lDelim.exec(l);if(!a||a[3]&&s.match(/[\p{L}\p{N}]/u))return;const y=a[1]||a[2]||"";if(!y||y&&(s===""||this.rules.inline.punctuation.exec(s))){const g=a[0].length-1;let f,k,x=g,$=0;const v=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(v.lastIndex=0,n=n.slice(-1*l.length+g);(a=v.exec(n))!=null;){if(f=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!f)continue;if(k=f.length,a[3]||a[4]){x+=k;continue}if((a[5]||a[6])&&g%3&&!((g+k)%3)){$+=k;continue}if(x-=k,x>0)continue;k=Math.min(k,k+x+$);const S=l.slice(0,g+a.index+(a[0].length-f.length)+k);if(Math.min(g,k)%2){const J=S.slice(1,-1);return{type:"em",raw:S,text:J,tokens:this.lexer.inlineTokens(J)}}const Z=S.slice(2,-2);return{type:"strong",raw:S,text:Z,tokens:this.lexer.inlineTokens(Z)}}}}codespan(l){const n=this.rules.inline.code.exec(l);if(n){let s=n[2].replace(/\n/g," ");const a=/[^ ]/.test(s),y=/^ /.test(s)&&/ $/.test(s);return a&&y&&(s=s.substring(1,s.length-1)),s=u(s,!0),{type:"codespan",raw:n[0],text:s}}}br(l){const n=this.rules.inline.br.exec(l);if(n)return{type:"br",raw:n[0]}}del(l){const n=this.rules.inline.del.exec(l);if(n)return{type:"del",raw:n[0],text:n[2],tokens:this.lexer.inlineTokens(n[2])}}autolink(l,n){const s=this.rules.inline.autolink.exec(l);if(s){let a,y;return s[2]==="@"?(a=u(this.options.mangle?n(s[1]):s[1]),y="mailto:"+a):(a=u(s[1]),y=a),{type:"link",raw:s[0],text:a,href:y,tokens:[{type:"text",raw:a,text:a}]}}}url(l,n){let s;if(s=this.rules.inline.url.exec(l)){let a,y;if(s[2]==="@")a=u(this.options.mangle?n(s[0]):s[0]),y="mailto:"+a;else{let g;do g=s[0],s[0]=this.rules.inline._backpedal.exec(s[0])[0];while(g!==s[0]);a=u(s[0]),y=s[1]==="www."?"http://"+s[0]:s[0]}return{type:"link",raw:s[0],text:a,href:y,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(l,n){const s=this.rules.inline.text.exec(l);if(s){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]):s[0]:u(this.options.smartypants?n(s[0]):s[0]),{type:"text",raw:s[0],text:a}}}}const M={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:R,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};M.def=T(M.def).replace("label",M._label).replace("title",M._title).getRegex(),M.bullet=/(?:[*+-]|\d{1,9}[.)])/,M.listItemStart=T(/^( *)(bull) */).replace("bull",M.bullet).getRegex(),M.list=T(M.list).replace(/bull/g,M.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+M.def.source+")").getRegex(),M._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",M._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,M.html=T(M.html,"i").replace("comment",M._comment).replace("tag",M._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),M.paragraph=T(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.blockquote=T(M.blockquote).replace("paragraph",M.paragraph).getRegex(),M.normal={...M},M.gfm={...M.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},M.gfm.table=T(M.gfm.table).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.gfm.paragraph=T(M._paragraph).replace("hr",M.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",M.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",M._tag).getRegex(),M.pedantic={...M.normal,html:T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",M._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:T(M.normal._paragraph).replace("hr",M.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",M.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const z={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:R,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:R,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function at(I){return I.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ct(I){let l,n,s="";const a=I.length;for(l=0;l<a;l++)n=I.charCodeAt(l),Math.random()>.5&&(n="x"+n.toString(16)),s+="&#"+n+";";return s}z._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",z.punctuation=T(z.punctuation).replace(/punctuation/g,z._punctuation).getRegex(),z.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,z.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,z._comment=T(M._comment).replace("(?:-->|$)","-->").getRegex(),z.emStrong.lDelim=T(z.emStrong.lDelim).replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimAst=T(z.emStrong.rDelimAst,"g").replace(/punct/g,z._punctuation).getRegex(),z.emStrong.rDelimUnd=T(z.emStrong.rDelimUnd,"g").replace(/punct/g,z._punctuation).getRegex(),z._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,z._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,z._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,z.autolink=T(z.autolink).replace("scheme",z._scheme).replace("email",z._email).getRegex(),z._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,z.tag=T(z.tag).replace("comment",z._comment).replace("attribute",z._attribute).getRegex(),z._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,z._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,z._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,z.link=T(z.link).replace("label",z._label).replace("href",z._href).replace("title",z._title).getRegex(),z.reflink=T(z.reflink).replace("label",z._label).replace("ref",M._label).getRegex(),z.nolink=T(z.nolink).replace("ref",M._label).getRegex(),z.reflinkSearch=T(z.reflinkSearch,"g").replace("reflink",z.reflink).replace("nolink",z.nolink).getRegex(),z.normal={...z},z.pedantic={...z.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",z._label).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",z._label).getRegex()},z.gfm={...z.normal,escape:T(z.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},z.gfm.url=T(z.gfm.url,"i").replace("email",z.gfm._extended_email).getRegex(),z.breaks={...z.gfm,br:T(z.br).replace("{2,}","*").getRegex(),text:T(z.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class et{constructor(l){this.tokens=[],this.tokens.links=Object.create(null),this.options=l||e,this.options.tokenizer=this.options.tokenizer||new rt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={block:M.normal,inline:z.normal};this.options.pedantic?(n.block=M.pedantic,n.inline=z.pedantic):this.options.gfm&&(n.block=M.gfm,this.options.breaks?n.inline=z.breaks:n.inline=z.gfm),this.tokenizer.rules=n}static get rules(){return{block:M,inline:z}}static lex(l,n){return new et(n).lex(l)}static lexInline(l,n){return new et(n).inlineTokens(l)}lex(l){let n;for(l=l.replace(/\r\n|\r/g,`
`),this.blockTokens(l,this.tokens);n=this.inlineQueue.shift();)this.inlineTokens(n.src,n.tokens);return this.tokens}blockTokens(l,n=[]){let s,a,y,g;for(l=this.options.pedantic?l.replace(/\t/g,"    ").replace(/^ +$/gm,""):l.replace(/^( *)(\t+)/gm,((f,k,x)=>k+"    ".repeat(x.length)));l;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((f=>!!(s=f.call({lexer:this},l,n))&&(l=l.substring(s.raw.length),n.push(s),!0)))))if(s=this.tokenizer.space(l))l=l.substring(s.raw.length),s.raw.length===1&&n.length>0?n[n.length-1].raw+=`
`:n.push(s);else if(s=this.tokenizer.code(l))l=l.substring(s.raw.length),a=n[n.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?n.push(s):(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(s=this.tokenizer.fences(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.heading(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.hr(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.blockquote(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.list(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.html(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.def(l))l=l.substring(s.raw.length),a=n[n.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title}):(a.raw+=`
`+s.raw,a.text+=`
`+s.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(s=this.tokenizer.table(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.lheading(l))l=l.substring(s.raw.length),n.push(s);else{if(y=l,this.options.extensions&&this.options.extensions.startBlock){let f=1/0;const k=l.slice(1);let x;this.options.extensions.startBlock.forEach((function($){x=$.call({lexer:this},k),typeof x=="number"&&x>=0&&(f=Math.min(f,x))})),f<1/0&&f>=0&&(y=l.substring(0,f+1))}if(this.state.top&&(s=this.tokenizer.paragraph(y)))a=n[n.length-1],g&&a.type==="paragraph"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(s),g=y.length!==l.length,l=l.substring(s.raw.length);else if(s=this.tokenizer.text(l))l=l.substring(s.raw.length),a=n[n.length-1],a&&a.type==="text"?(a.raw+=`
`+s.raw,a.text+=`
`+s.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):n.push(s);else if(l){const f="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error(f);break}throw new Error(f)}}return this.state.top=!0,n}inline(l,n=[]){return this.inlineQueue.push({src:l,tokens:n}),n}inlineTokens(l,n=[]){let s,a,y,g,f,k,x=l;if(this.tokens.links){const $=Object.keys(this.tokens.links);if($.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(x))!=null;)$.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(x=x.slice(0,g.index)+"["+K("a",g[0].length-2)+"]"+x.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.blockSkip.exec(x))!=null;)x=x.slice(0,g.index)+"["+K("a",g[0].length-2)+"]"+x.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(g=this.tokenizer.rules.inline.escapedEmSt.exec(x))!=null;)x=x.slice(0,g.index+g[0].length-2)+"++"+x.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;l;)if(f||(k=""),f=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(($=>!!(s=$.call({lexer:this},l,n))&&(l=l.substring(s.raw.length),n.push(s),!0)))))if(s=this.tokenizer.escape(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.tag(l))l=l.substring(s.raw.length),a=n[n.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):n.push(s);else if(s=this.tokenizer.link(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.reflink(l,this.tokens.links))l=l.substring(s.raw.length),a=n[n.length-1],a&&s.type==="text"&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):n.push(s);else if(s=this.tokenizer.emStrong(l,x,k))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.codespan(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.br(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.del(l))l=l.substring(s.raw.length),n.push(s);else if(s=this.tokenizer.autolink(l,ct))l=l.substring(s.raw.length),n.push(s);else if(this.state.inLink||!(s=this.tokenizer.url(l,ct))){if(y=l,this.options.extensions&&this.options.extensions.startInline){let $=1/0;const v=l.slice(1);let S;this.options.extensions.startInline.forEach((function(Z){S=Z.call({lexer:this},v),typeof S=="number"&&S>=0&&($=Math.min($,S))})),$<1/0&&$>=0&&(y=l.substring(0,$+1))}if(s=this.tokenizer.inlineText(y,at))l=l.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(k=s.raw.slice(-1)),f=!0,a=n[n.length-1],a&&a.type==="text"?(a.raw+=s.raw,a.text+=s.text):n.push(s);else if(l){const $="Infinite loop on byte: "+l.charCodeAt(0);if(this.options.silent){console.error($);break}throw new Error($)}}else l=l.substring(s.raw.length),n.push(s);return n}}class bt{constructor(l){this.options=l||e}code(l,n,s){const a=(n||"").match(/\S*/)[0];if(this.options.highlight){const y=this.options.highlight(l,a);y!=null&&y!==l&&(s=!0,l=y)}return l=l.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+u(a)+'">'+(s?l:u(l,!0))+`</code></pre>
`:"<pre><code>"+(s?l:u(l,!0))+`</code></pre>
`}blockquote(l){return`<blockquote>
${l}</blockquote>
`}html(l){return l}heading(l,n,s,a){return this.options.headerIds?`<h${n} id="${this.options.headerPrefix+a.slug(s)}">${l}</h${n}>
`:`<h${n}>${l}</h${n}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(l,n,s){const a=n?"ol":"ul";return"<"+a+(n&&s!==1?' start="'+s+'"':"")+`>
`+l+"</"+a+`>
`}listitem(l){return`<li>${l}</li>
`}checkbox(l){return"<input "+(l?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(l){return`<p>${l}</p>
`}table(l,n){return n&&(n=`<tbody>${n}</tbody>`),`<table>
<thead>
`+l+`</thead>
`+n+`</table>
`}tablerow(l){return`<tr>
${l}</tr>
`}tablecell(l,n){const s=n.header?"th":"td";return(n.align?`<${s} align="${n.align}">`:`<${s}>`)+l+`</${s}>
`}strong(l){return`<strong>${l}</strong>`}em(l){return`<em>${l}</em>`}codespan(l){return`<code>${l}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(l){return`<del>${l}</del>`}link(l,n,s){if((l=A(this.options.sanitize,this.options.baseUrl,l))===null)return s;let a='<a href="'+l+'"';return n&&(a+=' title="'+n+'"'),a+=">"+s+"</a>",a}image(l,n,s){if((l=A(this.options.sanitize,this.options.baseUrl,l))===null)return s;let a=`<img src="${l}" alt="${s}"`;return n&&(a+=` title="${n}"`),a+=this.options.xhtml?"/>":">",a}text(l){return l}}class Et{strong(l){return l}em(l){return l}codespan(l){return l}del(l){return l}html(l){return l}text(l){return l}link(l,n,s){return""+s}image(l,n,s){return""+s}br(){return""}}class At{constructor(){this.seen={}}serialize(l){return l.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(l,n){let s=l,a=0;if(this.seen.hasOwnProperty(s)){a=this.seen[l];do a++,s=l+"-"+a;while(this.seen.hasOwnProperty(s))}return n||(this.seen[l]=a,this.seen[s]=0),s}slug(l,n={}){const s=this.serialize(l);return this.getNextSafeSlug(s,n.dryrun)}}class nt{constructor(l){this.options=l||e,this.options.renderer=this.options.renderer||new bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Et,this.slugger=new At}static parse(l,n){return new nt(n).parse(l)}static parseInline(l,n){return new nt(n).parseInline(l)}parse(l,n=!0){let s,a,y,g,f,k,x,$,v,S,Z,J,W,X,N,pt,ht,Y,st,F="";const dt=l.length;for(s=0;s<dt;s++)if(S=l[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(st=this.options.extensions.renderers[S.type].call({parser:this},S),st!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)))F+=st||"";else switch(S.type){case"space":continue;case"hr":F+=this.renderer.hr();continue;case"heading":F+=this.renderer.heading(this.parseInline(S.tokens),S.depth,c(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue;case"code":F+=this.renderer.code(S.text,S.lang,S.escaped);continue;case"table":for($="",x="",g=S.header.length,a=0;a<g;a++)x+=this.renderer.tablecell(this.parseInline(S.header[a].tokens),{header:!0,align:S.align[a]});for($+=this.renderer.tablerow(x),v="",g=S.rows.length,a=0;a<g;a++){for(k=S.rows[a],x="",f=k.length,y=0;y<f;y++)x+=this.renderer.tablecell(this.parseInline(k[y].tokens),{header:!1,align:S.align[y]});v+=this.renderer.tablerow(x)}F+=this.renderer.table($,v);continue;case"blockquote":v=this.parse(S.tokens),F+=this.renderer.blockquote(v);continue;case"list":for(Z=S.ordered,J=S.start,W=S.loose,g=S.items.length,v="",a=0;a<g;a++)N=S.items[a],pt=N.checked,ht=N.task,X="",N.task&&(Y=this.renderer.checkbox(pt),W?N.tokens.length>0&&N.tokens[0].type==="paragraph"?(N.tokens[0].text=Y+" "+N.tokens[0].text,N.tokens[0].tokens&&N.tokens[0].tokens.length>0&&N.tokens[0].tokens[0].type==="text"&&(N.tokens[0].tokens[0].text=Y+" "+N.tokens[0].tokens[0].text)):N.tokens.unshift({type:"text",text:Y}):X+=Y),X+=this.parse(N.tokens,W),v+=this.renderer.listitem(X,ht,pt);F+=this.renderer.list(v,Z,J);continue;case"html":F+=this.renderer.html(S.text);continue;case"paragraph":F+=this.renderer.paragraph(this.parseInline(S.tokens));continue;case"text":for(v=S.tokens?this.parseInline(S.tokens):S.text;s+1<dt&&l[s+1].type==="text";)S=l[++s],v+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);F+=n?this.renderer.paragraph(v):v;continue;default:{const $t='Token with "'+S.type+'" type was not found.';if(this.options.silent)return void console.error($t);throw new Error($t)}}return F}parseInline(l,n){n=n||this.renderer;let s,a,y,g="";const f=l.length;for(s=0;s<f;s++)if(a=l[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(y=this.options.extensions.renderers[a.type].call({parser:this},a),y!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))g+=y||"";else switch(a.type){case"escape":case"text":g+=n.text(a.text);break;case"html":g+=n.html(a.text);break;case"link":g+=n.link(a.href,a.title,this.parseInline(a.tokens,n));break;case"image":g+=n.image(a.href,a.title,a.text);break;case"strong":g+=n.strong(this.parseInline(a.tokens,n));break;case"em":g+=n.em(this.parseInline(a.tokens,n));break;case"codespan":g+=n.codespan(a.text);break;case"br":g+=n.br();break;case"del":g+=n.del(this.parseInline(a.tokens,n));break;default:{const k='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return g}}class wt{constructor(l){this.options=l||e}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(l){return l}postprocess(l){return l}}function Tt(I,l){return(n,s,a)=>{typeof s=="function"&&(a=s,s=null);const y={...s},g=(function(f,k,x){return $=>{if($.message+=`
Please report this to https://github.com/markedjs/marked.`,f){const v="<p>An error occurred:</p><pre>"+u($.message+"",!0)+"</pre>";return k?Promise.resolve(v):x?void x(null,v):v}if(k)return Promise.reject($);if(!x)throw $;x($)}})((s={...H.defaults,...y}).silent,s.async,a);if(n==null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if((function(f){f&&f.sanitize&&!f.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(s),s.hooks&&(s.hooks.options=s),a){const f=s.highlight;let k;try{s.hooks&&(n=s.hooks.preprocess(n)),k=I(n,s)}catch(v){return g(v)}const x=function(v){let S;if(!v)try{s.walkTokens&&H.walkTokens(k,s.walkTokens),S=l(k,s),s.hooks&&(S=s.hooks.postprocess(S))}catch(Z){v=Z}return s.highlight=f,v?g(v):a(null,S)};if(!f||f.length<3||(delete s.highlight,!k.length))return x();let $=0;return H.walkTokens(k,(function(v){v.type==="code"&&($++,setTimeout((()=>{f(v.text,v.lang,(function(S,Z){if(S)return x(S);Z!=null&&Z!==v.text&&(v.text=Z,v.escaped=!0),$--,$===0&&x()}))}),0))})),void($===0&&x())}if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(n):n).then((f=>I(f,s))).then((f=>s.walkTokens?Promise.all(H.walkTokens(f,s.walkTokens)).then((()=>f)):f)).then((f=>l(f,s))).then((f=>s.hooks?s.hooks.postprocess(f):f)).catch(g);try{s.hooks&&(n=s.hooks.preprocess(n));const f=I(n,s);s.walkTokens&&H.walkTokens(f,s.walkTokens);let k=l(f,s);return s.hooks&&(k=s.hooks.postprocess(k)),k}catch(f){return g(f)}}}function H(I,l,n){return Tt(et.lex,nt.parse)(I,l,n)}return H.options=H.setOptions=function(I){var l;return H.defaults={...H.defaults,...I},l=H.defaults,e=l,H},H.getDefaults=t,H.defaults=e,H.use=function(...I){const l=H.defaults.extensions||{renderers:{},childTokens:{}};I.forEach((n=>{const s={...n};if(s.async=H.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach((a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const y=l.renderers[a.name];l.renderers[a.name]=y?function(...g){let f=a.renderer.apply(this,g);return f===!1&&(f=y.apply(this,g)),f}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");l[a.level]?l[a.level].unshift(a.tokenizer):l[a.level]=[a.tokenizer],a.start&&(a.level==="block"?l.startBlock?l.startBlock.push(a.start):l.startBlock=[a.start]:a.level==="inline"&&(l.startInline?l.startInline.push(a.start):l.startInline=[a.start]))}a.childTokens&&(l.childTokens[a.name]=a.childTokens)})),s.extensions=l),n.renderer){const a=H.defaults.renderer||new bt;for(const y in n.renderer){const g=a[y];a[y]=(...f)=>{let k=n.renderer[y].apply(a,f);return k===!1&&(k=g.apply(a,f)),k}}s.renderer=a}if(n.tokenizer){const a=H.defaults.tokenizer||new rt;for(const y in n.tokenizer){const g=a[y];a[y]=(...f)=>{let k=n.tokenizer[y].apply(a,f);return k===!1&&(k=g.apply(a,f)),k}}s.tokenizer=a}if(n.hooks){const a=H.defaults.hooks||new wt;for(const y in n.hooks){const g=a[y];wt.passThroughHooks.has(y)?a[y]=f=>{if(H.defaults.async)return Promise.resolve(n.hooks[y].call(a,f)).then((x=>g.call(a,x)));const k=n.hooks[y].call(a,f);return g.call(a,k)}:a[y]=(...f)=>{let k=n.hooks[y].apply(a,f);return k===!1&&(k=g.apply(a,f)),k}}s.hooks=a}if(n.walkTokens){const a=H.defaults.walkTokens;s.walkTokens=function(y){let g=[];return g.push(n.walkTokens.call(this,y)),a&&(g=g.concat(a.call(this,y))),g}}H.setOptions(s)}))},H.walkTokens=function(I,l){let n=[];for(const s of I)switch(n=n.concat(l.call(H,s)),s.type){case"table":for(const a of s.header)n=n.concat(H.walkTokens(a.tokens,l));for(const a of s.rows)for(const y of a)n=n.concat(H.walkTokens(y.tokens,l));break;case"list":n=n.concat(H.walkTokens(s.items,l));break;default:H.defaults.extensions&&H.defaults.extensions.childTokens&&H.defaults.extensions.childTokens[s.type]?H.defaults.extensions.childTokens[s.type].forEach((function(a){n=n.concat(H.walkTokens(s[a],l))})):s.tokens&&(n=n.concat(H.walkTokens(s.tokens,l)))}return n},H.parseInline=Tt(et.lexInline,nt.parseInline),H.Parser=nt,H.parser=nt.parse,H.Renderer=bt,H.TextRenderer=Et,H.Lexer=et,H.lexer=et.lex,H.Tokenizer=rt,H.Slugger=At,H.Hooks=wt,H.parse=H,H.options,H.setOptions,H.use,H.walkTokens,H.parseInline,nt.parse,et.lex,()=>{let I,l,n=null;function s(){if(n&&!n.closed)n.focus();else{if(n=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),n.marked=H,n.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!n)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const f=l.getConfig().url,k=typeof f=="string"?f:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;I=setInterval((function(){n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:l.getState(),url:k}),"*")}),500),window.addEventListener("message",y)})()}}function a(f){let k=l.getCurrentSlide(),x=k.querySelectorAll("aside.notes"),$=k.querySelector(".current-fragment"),v={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:l.getState()};if(k.hasAttribute("data-notes")&&(v.notes=k.getAttribute("data-notes"),v.whitespace="pre-wrap"),$){let S=$.querySelector("aside.notes");S?(v.notes=S.innerHTML,v.markdown=typeof S.getAttribute("data-markdown")=="string",x=null):$.hasAttribute("data-notes")&&(v.notes=$.getAttribute("data-notes"),v.whitespace="pre-wrap",x=null)}x&&x.length&&(x=Array.from(x).filter((S=>S.closest(".fragment")===null)),v.notes=x.map((S=>S.innerHTML)).join(`
`),v.markdown=x[0]&&typeof x[0].getAttribute("data-markdown")=="string"),n.postMessage(JSON.stringify(v),"*")}function y(f){if((function(k){try{return window.location.origin===k.source.location.origin}catch{return!1}})(f))try{let k=JSON.parse(f.data);k&&k.namespace==="reveal-notes"&&k.type==="connected"?(clearInterval(I),g()):k&&k.namespace==="reveal-notes"&&k.type==="call"&&(function(x,$,v){let S=l[x].apply(l,$);n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:S,callId:v}),"*")})(k.methodName,k.arguments,k.callId)}catch{}}function g(){l.on("slidechanged",a),l.on("fragmentshown",a),l.on("fragmenthidden",a),l.on("overviewhidden",a),l.on("overviewshown",a),l.on("paused",a),l.on("resumed",a),l.on("previewiframe",a),l.on("previewimage",a),l.on("previewvideo",a),l.on("closeoverlay",a),a()}return{id:"notes",init:function(f){l=f,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?s():window.addEventListener("message",(k=>{if(!n&&typeof k.data=="string"){let $;try{$=JSON.parse(k.data)}catch{}$&&$.namespace==="reveal-notes"&&$.type==="heartbeat"&&(x=k.source,n&&!n.closed?n.focus():(n=x,window.addEventListener("message",y),g()))}var x})),l.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){s()})))},open:s}}}))})(yt)),yt.exports}var be=ke();const we=me(be);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const ve=()=>{let b,i,t,e,r,h,p;function d(){i=document.createElement("div"),i.classList.add("searchbox"),i.style.position="absolute",i.style.top="10px",i.style.right="10px",i.style.zIndex=10,i.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,t=i.querySelector(".searchinput"),t.style.width="240px",t.style.fontSize="14px",t.style.padding="4px 6px",t.style.color="#000",t.style.background="#fff",t.style.borderRadius="2px",t.style.border="0",t.style.outline="0",t.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",t.style["-webkit-appearance"]="none",b.getRevealElement().appendChild(i),t.addEventListener("keyup",(function(c){c.keyCode===13?(c.preventDefault(),(function(){if(h){var m=t.value;m===""?(p&&p.remove(),e=null):(p=new o("slidecontent"),e=p.apply(m),r=0)}e&&(e.length&&e.length<=r&&(r=0),e.length>r&&(b.slide(e[r].h,e[r].v),r++))})(),h=!1):h=!0}),!1),_()}function w(){i||d(),i.style.display="inline",t.focus(),t.select()}function _(){i||d(),i.style.display="none",p&&p.remove()}function u(){i||d(),i.style.display!=="inline"?w():_()}function o(c,m){var T=document.getElementById(c)||document.body,B=m||"EM",q=new RegExp("^(?:"+B+"|SCRIPT|FORM)$"),A=["#ff6","#a0ffff","#9f9","#f99","#f6f"],V=[],P=0,O="",j=[];this.setRegex=function(R){R=R.trim(),O=new RegExp("("+R+")","i")},this.getRegex=function(){return O.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(R){if(R!=null&&R&&O&&!q.test(R.nodeName)){if(R.hasChildNodes())for(var U=0;U<R.childNodes.length;U++)this.hiliteWords(R.childNodes[U]);var G,K;if(R.nodeType==3&&(G=R.nodeValue)&&(K=O.exec(G))){for(var tt=R;tt!=null&&tt.nodeName!="SECTION";)tt=tt.parentNode;var rt=b.getIndices(tt),M=j.length,z=!1;for(U=0;U<M;U++)j[U].h===rt.h&&j[U].v===rt.v&&(z=!0);z||j.push(rt),V[K[0].toLowerCase()]||(V[K[0].toLowerCase()]=A[P++%A.length]);var at=document.createElement(B);at.appendChild(document.createTextNode(K[0])),at.style.backgroundColor=V[K[0].toLowerCase()],at.style.fontStyle="inherit",at.style.color="#000";var ct=R.splitText(K.index);ct.nodeValue=ct.nodeValue.substring(K[0].length),R.parentNode.insertBefore(at,ct)}}},this.remove=function(){for(var R,U=document.getElementsByTagName(B);U.length&&(R=U[0]);)R.parentNode.replaceChild(R.firstChild,R)},this.apply=function(R){if(R!=null&&R)return this.remove(),this.setRegex(R),this.hiliteWords(T),j}}return{id:"search",init:c=>{b=c,b.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(m){m.key=="F"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),u())}),!1)},open:w,close:_,toggle:u}};let xe={id:"Escience",init:b=>{Ee(b)}};const _e=`
/**
 * Black theme for reveal.js. This is the opposite of the 'white' theme.
 *
 * By Hakim El Hattab, http://hakim.se
 */

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-regular.eot');
    src: url('./source-sans-pro-regular.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-regular.woff') format('woff'),
         url('./source-sans-pro-regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-italic.eot');
    src: url('./source-sans-pro-italic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-italic.woff') format('woff'),
         url('./source-sans-pro-italic.ttf') format('truetype');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibold.eot');
    src: url('./source-sans-pro-semibold.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibold.woff') format('woff'),
         url('./source-sans-pro-semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: url('./source-sans-pro-semibolditalic.eot');
    src: url('./source-sans-pro-semibolditalic.eot?#iefix') format('embedded-opentype'),
         url('./source-sans-pro-semibolditalic.woff') format('woff'),
         url('./source-sans-pro-semibolditalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
}

section.has-light-background, section.has-light-background h1, section.has-light-background h2, section.has-light-background h3, section.has-light-background h4, section.has-light-background h5, section.has-light-background h6 {
  color: #222;
}

/*********************************************
 * GLOBAL STYLES
 *********************************************/
:root {
  --r-background-color: #191919;
  --r-main-font: Source Sans Pro, Helvetica, sans-serif;
  --r-main-font-size: 42px;
  --r-main-color: #fff;
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;
  --r-heading-font: Source Sans Pro, Helvetica, sans-serif;
  --r-heading-color: #fff;
  --r-heading-line-height: 1.2;
  --r-heading-letter-spacing: normal;
  --r-heading-text-transform: uppercase;
  --r-heading-text-shadow: none;
  --r-heading-font-weight: 600;
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1em;
  --r-code-font: monospace;
  --r-link-color: #42affa;
  --r-link-color-dark: #068de9;
  --r-link-color-hover: #8dcffc;
  --r-selection-background-color: rgba(66, 175, 250, 0.75);
  --r-selection-color: #fff;
  --r-overlay-element-bg-color: 240, 240, 240;
  --r-overlay-element-fg-color: 0, 0, 0;
}

.reveal-viewport {
  background: #191919;
  background-color: var(--r-background-color);
}

.reveal {
  font-family: var(--r-main-font);
  font-size: var(--r-main-font-size);
  font-weight: normal;
  color: var(--r-main-color);
}

.reveal ::selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal ::-moz-selection {
  color: var(--r-selection-color);
  background: var(--r-selection-background-color);
  text-shadow: none;
}

.reveal .slides section,
.reveal .slides section > section {
  line-height: 1.3;
  font-weight: inherit;
}

/*********************************************
 * HEADERS
 *********************************************/
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  margin: var(--r-heading-margin);
  color: var(--r-heading-color);
  font-family: var(--r-heading-font);
  font-weight: var(--r-heading-font-weight);
  line-height: var(--r-heading-line-height);
  letter-spacing: var(--r-heading-letter-spacing);
  text-transform: var(--r-heading-text-transform);
  text-shadow: var(--r-heading-text-shadow);
  word-wrap: break-word;
}

.reveal h1 {
  font-size: var(--r-heading1-size);
}

.reveal h2 {
  font-size: var(--r-heading2-size);
}

.reveal h3 {
  font-size: var(--r-heading3-size);
}

.reveal h4 {
  font-size: var(--r-heading4-size);
}

.reveal h1 {
  text-shadow: var(--r-heading1-text-shadow);
}

/*********************************************
 * OTHER
 *********************************************/
.reveal p {
  margin: var(--r-block-margin) 0;
  line-height: 1.3;
}

/* Remove trailing margins after titles */
.reveal h1:last-child,
.reveal h2:last-child,
.reveal h3:last-child,
.reveal h4:last-child,
.reveal h5:last-child,
.reveal h6:last-child {
  margin-bottom: 0;
}

/* Ensure certain elements are never larger than the slide itself */
.reveal img,
.reveal video,
.reveal iframe {
  max-width: 95%;
  max-height: 95%;
}

.reveal strong,
.reveal b {
  font-weight: bold;
}

.reveal em {
  font-style: italic;
}

.reveal ol,
.reveal dl,
.reveal ul {
  display: inline-block;
  text-align: left;
  margin: 0 0 0 1em;
}

.reveal ol {
  list-style-type: decimal;
}

.reveal ul {
  list-style-type: disc;
}

.reveal ul ul {
  list-style-type: square;
}

.reveal ul ul ul {
  list-style-type: circle;
}

.reveal ul ul,
.reveal ul ol,
.reveal ol ol,
.reveal ol ul {
  display: block;
  margin-left: 40px;
}

.reveal dt {
  font-weight: bold;
}

.reveal dd {
  margin-left: 40px;
}

.reveal blockquote {
  display: block;
  position: relative;
  width: 70%;
  margin: var(--r-block-margin) auto;
  padding: 5px;
  font-style: italic;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.reveal blockquote p:first-child,
.reveal blockquote p:last-child {
  display: inline-block;
}

.reveal q {
  font-style: italic;
}

.reveal pre {
  display: block;
  position: relative;
  width: 90%;
  margin: var(--r-block-margin) auto;
  text-align: left;
  font-size: 0.55em;
  font-family: var(--r-code-font);
  line-height: 1.2em;
  word-wrap: break-word;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
}

.reveal code {
  font-family: var(--r-code-font);
  text-transform: none;
  tab-size: 2;
}

.reveal pre code {
  display: block;
  padding: 5px;
  overflow: auto;
  max-height: 400px;
  word-wrap: normal;
}

.reveal .code-wrapper {
  white-space: normal;
}

.reveal .code-wrapper code {
  white-space: pre;
}

.reveal table {
  margin: auto;
  border-collapse: collapse;
  border-spacing: 0;
}

.reveal table th {
  font-weight: bold;
}

.reveal table th,
.reveal table td {
  text-align: left;
  padding: 0.2em 0.5em 0.2em 0.5em;
  border-bottom: 1px solid;
}

.reveal table th[align=center],
.reveal table td[align=center] {
  text-align: center;
}

.reveal table th[align=right],
.reveal table td[align=right] {
  text-align: right;
}

.reveal table tbody tr:last-child th,
.reveal table tbody tr:last-child td {
  border-bottom: none;
}

.reveal sup {
  vertical-align: super;
  font-size: smaller;
}

.reveal sub {
  vertical-align: sub;
  font-size: smaller;
}

.reveal small {
  display: inline-block;
  font-size: 0.6em;
  line-height: 1.2em;
  vertical-align: top;
}

.reveal small * {
  vertical-align: top;
}

.reveal img {
  margin: var(--r-block-margin) 0;
}

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--r-link-color);
  text-decoration: none;
  transition: color 0.15s ease;
}

.reveal a:hover {
  color: var(--r-link-color-hover);
  text-shadow: none;
  border: none;
}

.reveal .roll span:after {
  color: #fff;
  background: var(--r-link-color-dark);
}

/*********************************************
 * Frame helper
 *********************************************/
.reveal .r-frame {
  border: 4px solid var(--r-main-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

.reveal a .r-frame {
  transition: all 0.15s linear;
}

.reveal a:hover .r-frame {
  border-color: var(--r-link-color);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);
}

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--r-link-color);
}

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--r-link-color);
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--r-background-color);
  }
}
`,ze=`
/*
Monokai style - ported by Luigi Maselli - http://grigio.org
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #272822;
  color: #ddd;
}

.hljs-tag,
.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-strong,
.hljs-name {
  color: #f92672;
}

.hljs-code {
  color: #66d9ef;
}

.hljs-class .hljs-title {
  color: white;
}

.hljs-attribute,
.hljs-symbol,
.hljs-regexp,
.hljs-link {
  color: #bf79db;
}

.hljs-string,
.hljs-bullet,
.hljs-subst,
.hljs-title,
.hljs-section,
.hljs-emphasis,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-tag,
.hljs-template-variable {
  color: #a6e22e;
}

.hljs-comment,
.hljs-quote,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-doctag,
.hljs-title,
.hljs-section,
.hljs-type,
.hljs-selector-id {
  font-weight: bold;
}
`,Se=`
/*********************************************
 * COLORS
 *********************************************/

:root {
  --nlesc-blue: #009DDD;
  --nlesc-purple: #380339;
  --nlesc-yellow: #FFB213;
  --light-gray: #D8D8D8;
  --dark-gray: #2b2b2b;
  --gray-transparent: rgba(128, 128, 128, .5);

  --link-color: var(--nlesc-purple);
  --link-color-hover: var(--nlesc-yellow);

}

/*********************************************
 * GLOBAL STYLES
 *********************************************/

p, div, ul {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 400 !important;
  font-style: normal;
}

h1, h2, h3 {
  font-family: "Nunito" !important;
  font-weight: 700 !important;
}

h4, h5 {
  font-family: "Assistant", sans-serif !important;
  font-optical-sizing: auto;
  font-weight: 700 !important;
  font-style: normal;
}

code {
  font-family: "Fira Code", monospace !important;
  font-optical-sizing: auto !important;
  font-weight: 500;
  font-style: normal;
  background-color: var(--gray-transparent);
}

.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  text-transform: none;
}

.reveal {
  font-size: 36px; }  /* make stuff smaller */

::selection {
  color: #0f0;
  background: var(--nlesc-purple);
  text-shadow: none; }

::-moz-selection {
  color: #fff;
  background: var(--nlesc-purple);
  text-shadow: none; }


/*********************************************
 * CUSTOM COLORS
 *********************************************/
.primary { color: var(--nlesc-blue) !important; }
.secondary { color: var(--nlesc-purple) !important; }
.tertiary { color: var(--light-gray) !important; }

/*********************************************
 * LINKS
 *********************************************/
.reveal a {
  color: var(--link-color); }

.reveal a:hover {
  color: var(--link-color-hover); }

.reveal .roll span:after {
  color: #fff;
  background: var(--nlesc-blue); }

/*********************************************
 * IMAGES
 *********************************************/
.reveal section img { /* undo stupid img frames */
  background: none;
  border: none;
  box-shadow: none;
}

.reveal a:hover img {
  border-color: var(--nlesc-blue); }

/*********************************************
 * HIGHLIGHT COLORS
 *********************************************/

.reveal .slides section .fragment.highlight-blue.visible {
  color: var(--nlesc-blue); }

/*********************************************
 * NAVIGATION CONTROLS
 *********************************************/
.reveal .controls {
  color: var(--nlesc-yellow); }

/*********************************************
 * PROGRESS BAR
 *********************************************/
.reveal .progress {
  background: rgba(0, 0, 0, 0.2);
  color: var(--nlesc-yellow); }

.reveal .progress span {
  background: var(--nlesc-yellow);
  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);
  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985); }

/*********************************************
 * FOOTER
 *********************************************/

.slides .footer {
  font-size: x-small !important;
  width: 100%;
  clear: both;
/*  padding: 50px 0 0 0;*/
}

/*********************************************
 * PRINT BACKGROUND
 *********************************************/
@media print {
  .backgrounds {
    background-color: var(--dark-gray); } }

/*********************************************
 * DIM BACKGROUND PICTURES
 *********************************************/
.dim .backgrounds {
	-webkit-filter: brightness(.4) !important;
	-moz-filter: brightness(.4) !important;
	-o-filter: brightness(.4) !important;
	-ms-filter: brightness(.4) !important;
	filter: brightness(.4) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_3 .backgrounds {
	-webkit-filter: brightness(.3) !important;
	-moz-filter: brightness(.3) !important;
	-o-filter: brightness(.3) !important;
	-ms-filter: brightness(.3) !important;
	filter: brightness(.3) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.dim_8 .backgrounds {
	-webkit-filter: brightness(.8) !important;
	-moz-filter: brightness(.8) !important;
	-o-filter: brightness(.8) !important;
	-ms-filter: brightness(.8) !important;
	filter: brightness(.8) !important;
  -webkit-transition: -webkit-filter 100ms linear;
  transition: filter 100ms linear;
}

.backgrounds {
	-webkit-filter: brightness(1) !important;
	-moz-filter: brightness(1) !important;
	-o-filter: brightness(1) !important;
	-ms-filter: brightness(1) !important;
	filter: brightness(1) !important;
  -webkit-transition: -webkit-filter 1s linear;
  transition: filter 1s linear;
}

/*********************************************
 * ALLOW FOR DECORATIONS
 *********************************************/
.slides {
	/* puts the slide content above overlays and decorations*/
	z-index: 10 !important;
}

.speaker-notes {
	/* puts the slide content above overlays and decorations*/
	z-index: 3 !important;
}

footer {
	display: none !important;
}
`,Ee=function(b){if(!document.getElementById("fonts")){var i=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id="fonts",t.rel="stylesheet",t.type="text/css",t.href="https://fonts.googleapis.com/css2?family=Assistant:wght@200..800&family=Fira+Code:wght@300..700&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",t.media="all",i.appendChild(t)}if(!document.getElementById("icons")){var i=document.getElementsByTagName("head")[0],t=document.createElement("link");t.id="icons",t.rel="stylesheet",t.type="text/css",t.href="https://fonts.googleapis.com/icon?family=Material+Icons",t.media="all",i.appendChild(t)}const e=`
<div id="blue_pane_left" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 0; right: 50%; bottom: 0; top: 0; z-index: 2;"></div>
<div id="blue_pane_right" style="transition: opacity 1s; background-color: var(--nlesc-blue); opacity: 0; position: absolute; left: 50%; right: 0; bottom: 0; top: 0; z-index: 2;"></div>
<div id="touch_pane" style="background-color: white; transition: opacity 1s; opacity: 0; position: absolute; left: 0; right: 66.6%; bottom: 0; top: 0; display: flex; align-items: center; justify-content: center; z-index: 2;">
  <h1 style="color: black; text-align: left;">Let's stay<br>in touch</h1>
</div>
<div id="purple_half_circle_top" style="transition: top 1s; opacity: 1; position: absolute; background-color: var(--nlesc-purple); left: 0; top: -17vw; width: 34vw; height: 17vw; border-radius: 0 0 20vw 20vw; z-index: 2;"></div>
<div id="yellow_half_strip" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-yellow); right: 50%; bottom: -25vw; width: 17vw; height: 25vw; border-radius: 20vw 0 0 0; z-index: 2;"></div>
<div id="purple_strip_bottom" style="opacity: 1; transition: bottom 1s; position: absolute; background-color: var(--nlesc-purple); right: calc(50% + 17vw); bottom: -10vw; width: 16vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2;"></div>
<div id="logo_color" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132" />
</svg>
</div>
<div id="logo_part_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   inkscape:version="1.0.2 (1.0.2+r75+1)"
    style="width: 12vw;">
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div id="logo_white" style="transition: opacity 1s, left 1s; opacity: 0; position: absolute; left: -12vw; top: 1.5vh; z-index: 2;">
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="width: 12vw;"
>
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="72.270471"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>
</div>
<div id="purple_overlay" style="background-color: var(--nlesc-purple); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="blue_overlay" style="background-color: var(--nlesc-blue); opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="white_overlay" style="background-color: white; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="black_overlay" style="background-color: black; opacity: 0; transition: opacity 1s; position: absolute; left: 0; right: 0; bottom: 0; top: 0; z-index: 1;">
</div>
<div id="yellow_strip" style="background-color: var(--nlesc-yellow); transition: left 1s; width: 10vw; height: 70vh; border-radius: 10vw 10vw 0 0; z-index: 2; position: absolute; left: -10vw; bottom: 0;">
</div>
<div id="yellow_flag" style="background-color: var(--nlesc-yellow); transition: left 1s, bottom 1s; width: 10vh; height: 12vh; border-radius: 0 6vh 6vh 0; z-index: 3; position: absolute; left: -10vh; bottom: 5vh; margin: 0; padding: 0;">
  <svg id="left_e" style="position: absolute; height: 10vh; margin: 1vh 0; padding: 0;" viewBox="0 0 27 59" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <polygon id="path-1" points="0 0.132265672 26.8359 0.132265672 26.8359 33.3422209 0 33.3422209"></polygon>
        <polygon id="path-3" points="0 0.662473134 25.2148 0.662473134 25.2148 18.629294 0 18.629294"></polygon>
    </defs>
    <g id="Partners" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(0.000000, -50.000000)" id="Group-9">
            <g>
                <g id="Group-8" transform="translate(0.000000, 50.000000)">
                    <g id="Group-4">
                        <mask id="mask-2" fill="white">
                            <use xlink:href="#path-1"></use>
                        </mask>
                        <g id="Clip-3"></g>
                        <path d="M25.8379,19.6216388 C25.1719,16.4541313 23.6349,13.3403403 21.2269,10.2776239 C18.5659,6.7913403 15.1599,4.20854925 11.0009,2.53365373 C7.5639,1.15375821 3.8919,0.372668657 -0.0001,0.132265672 L-0.0001,10.882594 C1.1639,11.0155642 2.2549,11.2233851 3.2109,11.5571313 C4.8269,12.1295194 6.1779,12.9123701 7.2589,13.9109672 C9.8369,16.3308478 11.1659,19.5696836 11.2539,23.6230716 L-0.0001,23.6230716 L-0.0001,33.3422209 L26.7129,33.3422209 L26.8359,33.3422209 L26.8359,29.6058478 C26.8359,26.1195642 26.5019,22.7917881 25.8379,19.6216388" id="Fill-2" fill="#FFFFFF" mask="url(#mask-2)"></path>
                    </g>
                    <g id="Group-7" transform="translate(0.000000, 39.626866)">
                        <mask id="mask-4" fill="white">
                            <use xlink:href="#path-3"></use>
                        </mask>
                        <g id="Clip-6"></g>
                        <path d="M7.1368,5.35693582 C5.9718,6.35729403 4.6648,7.05032388 3.2108,7.44042836 C2.3088,7.68259254 1.2008,7.82260746 -0.0002,7.91683134 L-0.0002,18.629294 C3.4078,18.4611 6.7038,17.8948761 9.8788,16.8918761 C13.6988,15.683697 16.9898,13.6882642 19.7308,10.9099806 C20.9788,9.63223433 22.1618,8.01017463 23.2818,6.05172687 C24.4028,4.0932791 25.0488,2.29774179 25.2148,0.662473134 L10.2548,0.662473134 C9.6728,2.50996567 8.6328,4.07566716 7.1368,5.35693582" id="Fill-5" fill="#FFFFFF" mask="url(#mask-4)"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
</div>
<div id="purple_half_circle_bottom" style="transition: bottom 1s; background-color: var(--nlesc-purple); width: 20vw; height: 10vw; border-radius: 20vw 20vw 0 0; z-index: 2; position: absolute; left: 0; bottom: -10vw;">
<svg id="left_e"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 182.94 50.27"
   version="1.1"
   style="position: absolute; bottom: 2vw; left: 6vw; width: 8vw;">
  <metadata
     id="metadata1137">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2560"
     inkscape:window-height="1385"
     id="namedview1135"
     showgrid="false"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     inkscape:zoom="10.314136"
     inkscape:cx="94.5"
     inkscape:cy="25.31"
     inkscape:window-x="0"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     inkscape:current-layer="Laag_1" />
  <defs
     id="defs1088">
    <style
       id="style1086">.cls-1{fill:#1d1d1b;}.cls-2{fill:#009fe1;}</style>
  </defs>
  <path
     class="cls-1"
     d="M 5.79,12.99 V 7.21 A 2.56,2.56 0 0 0 5.34,5.61 1.87,1.87 0 0 0 3.8,5.04 1.83,1.83 0 0 0 2.63,5.43 2.63,2.63 0 0 0 1.82,6.43 3.19,3.19 0 0 0 1.54,7.58 c 0,0.43 0,0.82 0,1.17 v 4.23 H 0 V 3.89 H 1.3 L 1.42,5.25 A 2.41,2.41 0 0 1 1.91,4.56 2.74,2.74 0 0 1 2.59,4.07 3.81,3.81 0 0 1 3.38,3.81 3.27,3.27 0 0 1 4.18,3.7 3,3 0 0 1 6.53,4.59 3.52,3.52 0 0 1 7.32,7.05 v 6 z"
     id="path1090"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 17.83,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 h 1.5 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.73,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.84,3.84 0 0 1 2.06,-0.54 3.78,3.78 0 0 1 1.58,0.32 3.64,3.64 0 0 1 1.19,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.31,1.73 z M 16.26,7.63 A 3.79,3.79 0 0 0 16.12,6.63 2.76,2.76 0 0 0 15.7,5.81 2,2 0 0 0 15,5.17 2.38,2.38 0 0 0 13.93,4.95 2.42,2.42 0 0 0 12.85,5.18 2.49,2.49 0 0 0 12,5.81 a 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1092"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 25,12.86 A 6.14,6.14 0 0 1 24.25,13.03 5.49,5.49 0 0 1 23.18,13.11 3.07,3.07 0 0 1 22,12.9 2,2 0 0 1 21.24,12.34 2.07,2.07 0 0 1 20.84,11.56 3.5,3.5 0 0 1 20.72,10.65 V 5.2 H 18.94 V 3.89 H 20.7 V 1.57 l 1.53,-0.36 v 2.68 h 2.7 V 5.2 h -2.7 v 5.27 a 1.27,1.27 0 0 0 0.3,0.95 1.26,1.26 0 0 0 0.92,0.29 4.78,4.78 0 0 0 0.53,0 l 0.5,-0.05 0.54,-0.09 z"
     id="path1094"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 33.06,12.99 V 7.21 a 2.5,2.5 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.27,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 27.23 V 0 h 1.53 v 5.09 a 2.83,2.83 0 0 1 1.15,-1.07 3.43,3.43 0 0 1 1.51,-0.37 3,3 0 0 1 2.37,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1096"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 45.13,7.95 v 0.5 c 0,0.16 0,0.32 0,0.49 h -6.46 a 3.63,3.63 0 0 0 0.23,1.25 2.88,2.88 0 0 0 0.65,1 2.26,2.26 0 0 0 1.67,0.64 2.22,2.22 0 0 0 1.69,-0.59 2,2 0 0 0 0.33,-0.41 2.55,2.55 0 0 0 0.21,-0.58 H 45 a 3.15,3.15 0 0 1 -0.47,1.28 3.35,3.35 0 0 1 -0.94,1 4.12,4.12 0 0 1 -1.08,0.5 4.23,4.23 0 0 1 -1.24,0.18 3.89,3.89 0 0 1 -1.78,-0.4 3.74,3.74 0 0 1 -1.29,-1 4.25,4.25 0 0 1 -0.85,-1.53 5.92,5.92 0 0 1 -0.28,-1.85 7,7 0 0 1 0.16,-1.55 4.61,4.61 0 0 1 0.54,-1.36 3.91,3.91 0 0 1 1.37,-1.37 3.85,3.85 0 0 1 2.07,-0.54 3.76,3.76 0 0 1 1.57,0.32 3.64,3.64 0 0 1 1.22,0.88 4.35,4.35 0 0 1 0.85,1.41 4.9,4.9 0 0 1 0.28,1.73 z M 43.56,7.63 A 3.79,3.79 0 0 0 43.42,6.63 2.76,2.76 0 0 0 43,5.81 2,2 0 0 0 42.27,5.2 2.36,2.36 0 0 0 41.21,4.98 a 2.44,2.44 0 0 0 -1.09,0.23 2.49,2.49 0 0 0 -0.78,0.61 2.55,2.55 0 0 0 -0.46,0.86 3.25,3.25 0 0 0 -0.17,1 z"
     id="path1098"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 52.61,5.38 52.18,5.33 a 3.1,3.1 0 0 0 -0.42,0 2.27,2.27 0 0 0 -1,0.21 2.32,2.32 0 0 0 -0.74,0.51 2.12,2.12 0 0 0 -0.44,0.62 3.09,3.09 0 0 0 -0.26,0.74 5.47,5.47 0 0 0 -0.1,0.8 q 0,0.39 0,0.75 v 4 H 47.7 V 3.89 h 1.35 l 0.12,1.6 a 2.44,2.44 0 0 1 1.11,-1.25 3.32,3.32 0 0 1 1.61,-0.43 4.37,4.37 0 0 1 0.72,0.06 z"
     id="path1100"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 57.53,12.99 -0.26,0.05 A 4,4 0 0 1 56.46,13.1 1.74,1.74 0 0 1 55,12.52 2.62,2.62 0 0 1 54.55,10.87 V 0 h 1.53 v 10.81 a 1.15,1.15 0 0 0 0.18,0.7 0.78,0.78 0 0 0 0.65,0.23 h 0.5 a 0.22,0.22 0 0 0 0.12,0 z"
     id="path1102"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 67.46,12.9 a 2.14,2.14 0 0 1 -0.48,0.17 2.82,2.82 0 0 1 -0.52,0 1.22,1.22 0 0 1 -1,-0.4 1.47,1.47 0 0 1 -0.35,-1 v 0 a 2.9,2.9 0 0 1 -1.18,1.14 3.77,3.77 0 0 1 -1.76,0.4 3.61,3.61 0 0 1 -1.37,-0.24 2.93,2.93 0 0 1 -1,-0.64 2.7,2.7 0 0 1 -0.59,-0.9 2.79,2.79 0 0 1 -0.19,-1 3.1,3.1 0 0 1 0.15,-0.92 2.34,2.34 0 0 1 0.53,-0.89 3.05,3.05 0 0 1 1,-0.69 4.17,4.17 0 0 1 1.55,-0.35 L 65.02,7.42 V 6.75 A 3.05,3.05 0 0 0 65,6.03 1.22,1.22 0 0 0 64.61,5.36 1.65,1.65 0 0 0 64,5.02 2.83,2.83 0 0 0 63.09,4.89 2.87,2.87 0 0 0 62.09,5.05 1.73,1.73 0 0 0 61.46,5.43 1.5,1.5 0 0 0 61,6.53 h -1.5 a 2.78,2.78 0 0 1 0.22,-1.09 2.83,2.83 0 0 1 0.57,-0.81 2.77,2.77 0 0 1 1.21,-0.73 4.9,4.9 0 0 1 1.59,-0.25 3.9,3.9 0 0 1 2.11,0.5 2.72,2.72 0 0 1 1.09,1.25 3.53,3.53 0 0 1 0.27,1.41 v 4.4 a 0.64,0.64 0 0 0 0.14,0.48 0.49,0.49 0 0 0 0.37,0.13 h 0.12 0.13 0.14 z M 65.05,8.6 62.61,8.74 a 3.64,3.64 0 0 0 -0.71,0.12 2.2,2.2 0 0 0 -0.64,0.29 1.47,1.47 0 0 0 -0.47,0.49 1.45,1.45 0 0 0 -0.18,0.74 1.64,1.64 0 0 0 0.39,1.09 1.76,1.76 0 0 0 1.39,0.47 2.9,2.9 0 0 0 1,-0.17 2.25,2.25 0 0 0 0.86,-0.56 2.53,2.53 0 0 0 0.59,-1 3.49,3.49 0 0 0 0.18,-1.11 z"
     id="path1104"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="M 75.72,12.99 V 7.21 a 2.56,2.56 0 0 0 -0.46,-1.6 2.17,2.17 0 0 0 -2.71,-0.18 2.83,2.83 0 0 0 -0.81,1 3.41,3.41 0 0 0 -0.28,1.15 c 0,0.43 0,0.82 0,1.17 v 4.23 H 69.89 V 3.89 h 1.33 l 0.13,1.36 a 2.38,2.38 0 0 1 0.48,-0.69 2.79,2.79 0 0 1 0.69,-0.49 3.61,3.61 0 0 1 0.79,-0.26 3.2,3.2 0 0 1 0.79,-0.11 3,3 0 0 1 2.35,0.89 3.52,3.52 0 0 1 0.8,2.46 v 6 z"
     id="path1106"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 86.42,12.99 -0.11,-1.18 a 2.5,2.5 0 0 1 -1.17,1 3.52,3.52 0 0 1 -1.55,0.37 4,4 0 0 1 -1.48,-0.26 3.08,3.08 0 0 1 -1.11,-0.69 4.24,4.24 0 0 1 -1,-1.65 6.68,6.68 0 0 1 -0.33,-2.12 6.83,6.83 0 0 1 0.35,-2.21 4.33,4.33 0 0 1 1,-1.68 3.51,3.51 0 0 1 1.07,-0.66 3.76,3.76 0 0 1 1.43,-0.26 3.37,3.37 0 0 1 0.77,0.09 3.82,3.82 0 0 1 0.74,0.26 2.77,2.77 0 0 1 0.66,0.4 2.07,2.07 0 0 1 0.48,0.55 V 0 H 87.7 V 13 Z M 86.33,8.44 A 5.73,5.73 0 0 0 86.11,6.81 2.59,2.59 0 0 0 85.32,5.54 2.42,2.42 0 0 0 84.7,5.12 2,2 0 0 0 83.85,4.95 a 2.4,2.4 0 0 0 -1.26,0.3 2.27,2.27 0 0 0 -0.79,0.81 3.46,3.46 0 0 0 -0.41,1.13 6.54,6.54 0 0 0 -0.12,1.25 6.62,6.62 0 0 0 0.12,1.25 3.41,3.41 0 0 0 0.41,1.12 2.12,2.12 0 0 0 0.79,0.81 2.31,2.31 0 0 0 1.26,0.31 2,2 0 0 0 0.85,-0.12 2.74,2.74 0 0 0 0.62,-0.43 2.52,2.52 0 0 0 0.79,-1.26 5.78,5.78 0 0 0 0.22,-1.68 z"
     id="path1108"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 97.86,10.34 a 2.71,2.71 0 0 1 -0.2,1.06 2.9,2.9 0 0 1 -0.52,0.8 3,3 0 0 1 -1.3,0.78 6,6 0 0 1 -3.29,0 3.15,3.15 0 0 1 -1.33,-0.8 3.06,3.06 0 0 1 -0.65,-1 2.91,2.91 0 0 1 -0.23,-1.12 h 1.53 a 1.81,1.81 0 0 0 0.21,0.82 2.13,2.13 0 0 0 0.52,0.6 1.69,1.69 0 0 0 0.76,0.32 3.81,3.81 0 0 0 0.88,0.09 4.26,4.26 0 0 0 0.89,-0.09 1.84,1.84 0 0 0 0.78,-0.41 1.07,1.07 0 0 0 0.33,-0.41 A 1.4,1.4 0 0 0 96.36,10.4 1.13,1.13 0 0 0 96,9.59 1.82,1.82 0 0 0 94.94,9.16 L 94.55,9.1 94,9.03 93.41,8.96 92.88,8.89 a 2.88,2.88 0 0 1 -1.63,-0.78 2.31,2.31 0 0 1 -0.6,-1.67 2.32,2.32 0 0 1 0.23,-1 2.82,2.82 0 0 1 0.53,-0.78 3.13,3.13 0 0 1 1.13,-0.74 4.2,4.2 0 0 1 1.55,-0.27 4.68,4.68 0 0 1 1.67,0.29 2.79,2.79 0 0 1 1.24,0.87 2.83,2.83 0 0 1 0.48,0.77 2.59,2.59 0 0 1 0.17,1 H 96.11 A 1.61,1.61 0 0 0 95.94,5.92 1.75,1.75 0 0 0 95.59,5.45 2.13,2.13 0 0 0 94.1,4.96 H 93.59 A 1.81,1.81 0 0 0 93,5.11 1.55,1.55 0 0 0 92.32,5.62 1.21,1.21 0 0 0 92.08,6.33 1,1 0 0 0 92.4,7.17 2,2 0 0 0 93.3,7.52 l 0.92,0.12 c 0.36,0 0.78,0.1 1.28,0.19 a 3,3 0 0 1 1.64,0.82 2.29,2.29 0 0 1 0.72,1.69 z"
     id="path1110"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 117.05,38.89 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.5,6.5 0 0 1 0.34,1.69 h -3.45 a 3.37,3.37 0 0 0 -0.14,-0.73 3.78,3.78 0 0 0 -0.28,-0.61 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.8,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2 3.24,3.24 0 0 0 0.81,1.67 3.1,3.1 0 0 0 0.89,0.65 2.64,2.64 0 0 0 1.24,0.27 2.79,2.79 0 0 0 1.38,-0.31 2.36,2.36 0 0 0 0.87,-0.78 3.89,3.89 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 z"
     id="path1112"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 143,44.05 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.16,2.16 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 h -3.5 V 29.47 H 137 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.45,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.68,4.68 0 0 1 1,1.65 6.45,6.45 0 0 1 0.34,2.09 v 9.73 z"
     id="path1114"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 158,43.81 a 11.46,11.46 0 0 1 -3,0.4 4.27,4.27 0 0 1 -3.3,-1.19 4.71,4.71 0 0 1 -1.1,-3.3 v -7.4 h -2.66 v -2.85 h 2.66 v -3.66 l 3.51,-0.87 v 4.57 h 3.67 v 2.89 h -3.67 v 7.09 a 1.64,1.64 0 0 0 0.39,1.22 1.72,1.72 0 0 0 1.23,0.38 q 0.57,0 1,0 c 0.33,0 0.74,-0.05 1.22,-0.11 z"
     id="path1116"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 182.94,32.72 a 6,6 0 0 0 -1.21,-0.14 3.4,3.4 0 0 0 -2.8,1.18 4.52,4.52 0 0 0 -1,2.94 v 7.35 H 174.4 V 29.47 h 3 l 0.31,2.19 a 3.29,3.29 0 0 1 1.68,-1.85 5.51,5.51 0 0 1 2.45,-0.57 7,7 0 0 1 1.1,0.09 z"
     id="path1118"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-2"
     d="M 2.24,32.75 A 2.58,2.58 0 0 0 1.33,32.13 3.66,3.66 0 0 0 0,31.91 v 0 3.39 h 3.14 a 3.76,3.76 0 0 0 -0.9,-2.55 z"
     id="path1120" />
  <path
     class="cls-2"
     d="m 54.86,32.13 a 3.66,3.66 0 0 0 -1.31,-0.22 3.1,3.1 0 0 0 -1.43,0.31 3,3 0 0 0 -1,0.81 3.27,3.27 0 0 0 -0.56,1 5.06,5.06 0 0 0 -0.19,1.26 h 6.31 a 3.76,3.76 0 0 0 -0.9,-2.55 2.58,2.58 0 0 0 -0.92,-0.61 z"
     id="path1122" />
  <path
     class="cls-2"
     d="m 95.47,33.03 a 3.08,3.08 0 0 0 -0.56,1 4.64,4.64 0 0 0 -0.19,1.26 h 3.14 v -3.38 a 3.18,3.18 0 0 0 -1.38,0.31 2.9,2.9 0 0 0 -1.01,0.81 z"
     id="path1124" />
  <path
     class="cls-2"
     d="m 95,39.45 a 3,3 0 0 0 0.8,1.26 3.8,3.8 0 0 0 0.91,0.64 2.82,2.82 0 0 0 1.14,0.26 v -3.8 H 94.74 A 4.67,4.67 0 0 0 95,39.45 Z"
     id="path1126" />
  <path
     class="cls-2"
     d="m 95.4,43.92 a 6.75,6.75 0 0 1 -2,-1.3 7,7 0 0 1 -1.67,-2.55 8.86,8.86 0 0 1 -0.55,-3.26 10.1,10.1 0 0 1 0.52,-3.27 6.56,6.56 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.62,6.62 0 0 1 2.6,-0.5 v -3.15 a 6,6 0 0 0 -6,-6 H 0 v 9.13 h 0.08 a 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.14 H 0 v 3.8 h 0.11 a 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 H 6.28 A 4.13,4.13 0 0 1 5.84,41.09 6.28,6.28 0 0 1 5,42.37 5.2,5.2 0 0 1 2.79,43.94 7.66,7.66 0 0 1 0.1,44.42 H 0 a 6,6 0 0 0 6,5.85 H 97.86 V 44.41 A 6.37,6.37 0 0 1 95.4,43.92 Z M 23.54,40.55 a 6,6 0 0 1 -1.19,1.73 6.45,6.45 0 0 1 -2.79,1.64 12.07,12.07 0 0 1 -3.49,0.5 11,11 0 0 1 -3.16,-0.47 7.07,7.07 0 0 1 -2.79,-1.58 6.48,6.48 0 0 1 -1.48,-2 5.7,5.7 0 0 1 -0.59,-2.62 h 3.7 a 3.25,3.25 0 0 0 0.25,1.35 3.85,3.85 0 0 0 0.75,1.08 3.14,3.14 0 0 0 1.55,0.86 7.93,7.93 0 0 0 3.75,0 3.07,3.07 0 0 0 1.48,-0.83 3.68,3.68 0 0 0 0.56,-0.77 2.35,2.35 0 0 0 0.23,-1.13 A 2,2 0 0 0 19.6,36.66 3.74,3.74 0 0 0 18,35.92 19.27,19.27 0 0 0 15.79,35.64 C 14.98,35.58 14.25,35.5 13.6,35.39 A 7.48,7.48 0 0 1 11.65,34.81 5.46,5.46 0 0 1 10.05,33.7 5.1,5.1 0 0 1 9,32.04 5.68,5.68 0 0 1 8.55,29.81 4.82,4.82 0 0 1 9,27.68 a 6.49,6.49 0 0 1 1.26,-1.77 6.8,6.8 0 0 1 2.52,-1.54 10,10 0 0 1 6.38,-0.07 6.68,6.68 0 0 1 2.48,1.44 7,7 0 0 1 1.45,1.91 5.34,5.34 0 0 1 0.57,2.33 H 20 a 3.11,3.11 0 0 0 -0.26,-1.06 3.54,3.54 0 0 0 -0.61,-0.91 3.21,3.21 0 0 0 -1.34,-0.78 5.39,5.39 0 0 0 -1.69,-0.28 6.94,6.94 0 0 0 -1.72,0.22 3.08,3.08 0 0 0 -1.5,0.87 2.83,2.83 0 0 0 -0.49,0.73 2.27,2.27 0 0 0 -0.18,0.95 1.9,1.9 0 0 0 0.56,1.5 2.64,2.64 0 0 0 1.46,0.66 c 0.63,0.1 1.35,0.18 2.14,0.25 0.79,0.07 1.52,0.16 2.17,0.26 a 8.22,8.22 0 0 1 2.12,0.6 5.92,5.92 0 0 1 1.74,1.15 5.37,5.37 0 0 1 1.18,1.72 5.71,5.71 0 0 1 0.42,2.27 5.77,5.77 0 0 1 -0.46,2.42 z m 5.9,-1.81 a 3.24,3.24 0 0 0 0.81,1.67 3.33,3.33 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 h 3.45 a 6.58,6.58 0 0 1 -0.34,1.7 5.16,5.16 0 0 1 -0.78,1.47 6.36,6.36 0 0 1 -2,1.63 6.21,6.21 0 0 1 -3,0.67 6.38,6.38 0 0 1 -3,-0.69 6.53,6.53 0 0 1 -2.07,-1.61 7.23,7.23 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7.14,7.14 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.21,6.21 0 0 1 3,0.67 6.36,6.36 0 0 1 2,1.63 5.16,5.16 0 0 1 0.78,1.47 6.59,6.59 0 0 1 0.34,1.69 h -3.45 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 3.07,3.07 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,1.98 z m 14.92,5.31 H 40.8 V 29.47 h 3.56 z m 0.08,-16.6 h -3.76 v -3.64 h 3.76 z m 15.73,10.36 h -9.78 a 4.67,4.67 0 0 0 0.26,1.6 3.14,3.14 0 0 0 0.8,1.26 4,4 0 0 0 0.91,0.64 2.81,2.81 0 0 0 1.25,0.26 4.4,4.4 0 0 0 1.25,-0.15 2.17,2.17 0 0 0 0.88,-0.55 2.7,2.7 0 0 0 0.7,-1.23 h 3.37 a 4.13,4.13 0 0 1 -0.44,1.41 6.28,6.28 0 0 1 -0.8,1.28 5.2,5.2 0 0 1 -2.21,1.57 7.66,7.66 0 0 1 -2.69,0.48 6.43,6.43 0 0 1 -2.63,-0.5 6.68,6.68 0 0 1 -3.64,-3.85 9.07,9.07 0 0 1 -0.58,-3.22 10.1,10.1 0 0 1 0.52,-3.27 6.68,6.68 0 0 1 1.59,-2.56 6.16,6.16 0 0 1 2,-1.35 6.64,6.64 0 0 1 2.68,-0.5 7,7 0 0 1 3,0.66 5.46,5.46 0 0 1 2.3,2 6.43,6.43 0 0 1 1,2.45 14.88,14.88 0 0 1 0.22,2.45 v 1.12 z M 75,44.05 h -3.53 v -8.94 a 3.55,3.55 0 0 0 -0.5,-2 2.18,2.18 0 0 0 -1.91,-0.73 2.28,2.28 0 0 0 -1.54,0.52 3.61,3.61 0 0 0 -1,1.33 5,5 0 0 0 -0.42,1.89 q -0.06,1.08 -0.06,2 v 5.94 H 62.55 V 29.47 h 3 l 0.25,1.88 a 3.94,3.94 0 0 1 1.84,-1.7 5.86,5.86 0 0 1 2.36,-0.54 5.26,5.26 0 0 1 2.09,0.39 4.37,4.37 0 0 1 1.54,1.08 4.83,4.83 0 0 1 1,1.65 6.45,6.45 0 0 1 0.37,2.09 z m 5.94,-5.31 a 3.24,3.24 0 0 0 0.81,1.67 3.18,3.18 0 0 0 0.89,0.66 3.16,3.16 0 0 0 2.62,0 2.36,2.36 0 0 0 0.87,-0.78 3.53,3.53 0 0 0 0.28,-0.62 3.26,3.26 0 0 0 0.14,-0.73 H 90 a 6.58,6.58 0 0 1 -0.34,1.7 5,5 0 0 1 -0.79,1.47 6.27,6.27 0 0 1 -5,2.3 6.61,6.61 0 0 1 -5.07,-2.3 7,7 0 0 1 -1.21,-2.38 11.31,11.31 0 0 1 0,-5.89 7,7 0 0 1 1.21,-2.38 6.52,6.52 0 0 1 5.07,-2.3 6.27,6.27 0 0 1 5,2.3 5,5 0 0 1 0.79,1.47 6.59,6.59 0 0 1 0.34,1.64 h -3.47 a 3.17,3.17 0 0 0 -0.14,-0.72 3.53,3.53 0 0 0 -0.28,-0.62 2.47,2.47 0 0 0 -0.87,-0.79 2.9,2.9 0 0 0 -1.38,-0.31 2.77,2.77 0 0 0 -1.24,0.26 2.94,2.94 0 0 0 -0.89,0.64 3.23,3.23 0 0 0 -0.81,1.68 12.24,12.24 0 0 0 -0.17,2 12,12 0 0 0 0.17,2.03 z"
     id="path1128" />
  <path
     class="cls-1"
     d="m 131.69,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.41,6.41 0 0 0 -1,-2.45 5.46,5.46 0 0 0 -2.3,-2 7.06,7.06 0 0 0 -3,-0.66 6.64,6.64 0 0 0 -2.68,0.5 6.2,6.2 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 8.86,8.86 0 0 0 0.58,3.28 6.6,6.6 0 0 0 3.64,3.85 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.28,6.28 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 H 128 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.28,4.28 0 0 1 -1.24,0.15 2.78,2.78 0 0 1 -1.25,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 3,3 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1130"
     style="fill:#ffffff;fill-opacity:1" />
  <path
     class="cls-1"
     d="m 172.08,36.7 a 14.88,14.88 0 0 0 -0.22,-2.45 6.28,6.28 0 0 0 -1,-2.45 5.35,5.35 0 0 0 -2.3,-2 7,7 0 0 0 -3,-0.66 6.61,6.61 0 0 0 -2.68,0.5 6.1,6.1 0 0 0 -2,1.35 6.54,6.54 0 0 0 -1.58,2.56 9.84,9.84 0 0 0 -0.52,3.27 9.07,9.07 0 0 0 0.57,3.28 7.15,7.15 0 0 0 1.65,2.52 6.93,6.93 0 0 0 2,1.3 6.38,6.38 0 0 0 2.62,0.5 7.62,7.62 0 0 0 2.69,-0.48 5.29,5.29 0 0 0 2.22,-1.57 6.75,6.75 0 0 0 0.8,-1.28 4.09,4.09 0 0 0 0.43,-1.41 h -3.36 a 2.79,2.79 0 0 1 -0.7,1.23 2.21,2.21 0 0 1 -0.89,0.55 4.31,4.31 0 0 1 -1.25,0.15 2.77,2.77 0 0 1 -1.24,-0.26 3.8,3.8 0 0 1 -0.91,-0.64 2.94,2.94 0 0 1 -0.8,-1.26 4.67,4.67 0 0 1 -0.27,-1.6 h 9.79 z m -9.81,-1.4 a 5,5 0 0 1 0.2,-1.26 3.08,3.08 0 0 1 0.56,-1 2.9,2.9 0 0 1 1,-0.81 3.1,3.1 0 0 1 1.43,-0.31 3.61,3.61 0 0 1 1.3,0.22 2.49,2.49 0 0 1 0.91,0.62 3.76,3.76 0 0 1 0.9,2.55 z"
     id="path1132"
     style="fill:#ffffff;fill-opacity:1" />
</svg>

</div>
<div id="purple_blob" style="transition: top 1s; position: absolute; display: flex; right: 0; top: -50vh; z-index: 2;">
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 25vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div style="background-color: var(--nlesc-purple); width: 10vw; height: 50vh; border-radius: 0 0 10vw 10vw;">
  </div>
  <div class="box" style="background: var(--nlesc-purple); position: absolute; right: 10vw; top: 0; width: 5vw; height: calc(25vh + 5vw); border-corner-shape: scoop; background: yellow; background: linear-gradient(45deg,  transparent 10vw, var(--nlesc-purple) 0) bottom left; background-image: radial-gradient(circle at 0 100%, rgba(204,0,0,0) 5vw, var(--nlesc-purple) 15px)">
  </div>
</div>
<div id="blue_strip" style="background-color: var(--nlesc-blue); transition: left 1s, right 1s; margin: 0; padding: 0; border-radius: 20vw 0 0 0; z-index: 2; position: absolute; right: -100vw; bottom: 0;">
  <div id="footer" style="text-align: right; line-height: 130%; padding: 0; margin: 1vw 1vw 1vw 3vw; bottom: 0; right: 0;">
  </div>
</div>
<svg id="right_e" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.549 662.141"  style="transition: right 1s, top 1s; position: absolute; top: 10vh; right: -4vw; width: 4vw; z-index: 3;">
  <path id="Path_88" data-name="Path 88" d="M342.892,527.031q17.52-21.911,45.055-35.264a133.418,133.418,0,0,1,36-11.063V357.814c-33.264,2.515-63.486,9.336-90.408,20.725q-52.012,21.874-88.269,58.407-47.551,46.277-70.694,111.421-23.2,65.132-23.177,141.8,0,77.95,25.652,142.459Q202.723,897.2,251.563,943.4a314.339,314.339,0,0,0,88.213,56.587q37.073,15.944,84.176,19.965V896.642a104.455,104.455,0,0,1-25.345-8.657,178.837,178.837,0,0,1-40.683-27.369Q334.157,838.7,322.27,805.822a202.364,202.364,0,0,1-11.888-69.4h113.57V625.625H309.123q1.256-31.6,8.759-54.767Q325.384,547.762,342.892,527.031Z" transform="translate(-151.403 -357.814)" fill="#fff"/>
</svg>
`;function r(o){const c=document.createElement("style");c.type="text/css",c.innerHTML=o,document.head.appendChild(c)}function h(){if(window.location.search.match(/print-pdf/gi)){const o=document.getElementsByClassName("slide-background");for(let c=0;c<o.length;c++)o[c].insertAdjacentHTML("afterbegin",e)}else{const o=document.querySelectorAll("div.reveal");for(let c=0;c<o.length;c++)o[c].insertAdjacentHTML("afterbegin",e)}_()}b.on("ready",o=>{r(_e),r(ze),r(Se),h(),b.on("slidechanged",c=>{d==!1&&(console.log("slide changed"),_())}),b.on("overviewshown",c=>{d=!0,u()}),b.on("overviewhidden",c=>{d=!1,_()})});function p(o){document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=0,document.getElementById(o).style.opacity=1}var d=!1;function w(o){var c=.8;for(let m=0;m<11;m++)o.includes(m)&&(c=m/10,console.log("opacity set to "+c));return c}function _(){console.log("set decorations");let o=document.documentElement;var c=b.getCurrentSlide();if(c.contains(c.querySelector("footer"))?(document.getElementById("footer").innerHTML=c.querySelector("footer").innerHTML,document.getElementById("blue_strip").style.right=0,console.log("footer (and blue_strip)")):(document.getElementById("blue_strip").style.right="-"+document.getElementById("blue_strip").offsetWidth+"px",console.log("no footer")),c.getAttribute("data-state")){var m=c.getAttribute("data-state"),T=w(m);console.log("DS"+m),m.includes("standard")&&(m+=" logo yellow_flag white_overlay"),m.includes("two_pane")&&(m+=" logo yellow_flag white_overlay blue_pane_right"),m.includes("about")&&(m+=" logo white_overlay blue_pane_left purple_half_circle_top purple_strip_bottom yellow_half_strip"),m.includes("touch")&&(m+=" logo blue_overlay touch_pane purple_blob right_e_bottom"),m.includes("title")&&(m+="  blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top"),m.includes("purple_overlay")?(document.getElementById("purple_overlay").style.opacity=T,document.getElementById("purple_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=1,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-blue)"),console.log("purple overlay")):(document.getElementById("purple_overlay").style.opacity=0,console.log("no purple overlay")),m.includes("white_overlay")?(document.getElementById("white_overlay").style.opacity=T,document.getElementById("white_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=1,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=0,c.classList.add("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-blue)"),o.style.setProperty("--link-color-hover","var(--nlesc-yellow)"),console.log("white overlay")):(document.getElementById("white_overlay").style.opacity=0,console.log("no white overlay")),m.includes("black_overlay")?(document.getElementById("black_overlay").style.opacity=T,document.getElementById("black_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=0,document.getElementById("logo_part_white").style.opacity=1,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-blue)"),console.log("black overlay")):(document.getElementById("black_overlay").style.opacity=0,console.log("no black overlay")),m.includes("blue_overlay")?(document.getElementById("blue_overlay").style.opacity=T,document.getElementById("blue_overlay").style.transform="translateY(0)",document.getElementById("logo_color").style.opacity=0,document.getElementById("logo_white").style.opacity=1,document.getElementById("logo_part_white").style.opacity=0,c.classList.remove("has-light-background"),o.style.setProperty("--link-color","var(--nlesc-yellow)"),o.style.setProperty("--link-color-hover","var(--nlesc-purple)"),console.log("blue overlay")):(document.getElementById("blue_overlay").style.opacity=0,console.log("no blue overlay")),m.includes("blue_pane_right")?(document.getElementById("blue_pane_right").style.opacity=1,document.getElementById("blue_pane_right").style.transform="translateY(0)",c.classList.remove("has-dark-background"),c.classList.add("has-light-background"),console.log("blue_pane_right")):(document.getElementById("blue_pane_right").style.opacity=0,console.log("no blue_pane_right")),m.includes("blue_pane_left")?(document.getElementById("blue_pane_left").style.opacity=1,document.getElementById("blue_pane_left").style.transform="translateY(0)",p("logo_white"),c.classList.remove("has-dark-background"),c.classList.add("has-light-background"),console.log("blue_pane_left")):(document.getElementById("blue_pane_left").style.opacity=0,console.log("no blue_pane_left")),m.includes("touch_pane")?(document.getElementById("touch_pane").style.opacity=1,document.getElementById("touch_pane").style.transform="translateY(0)",p("logo_color"),c.classList.remove("has-light-background"),c.classList.add("has-dark-background"),console.log("touch_pane")):(document.getElementById("touch_pane").style.opacity=0,console.log("no touch_pane")),m.includes("logo")?(document.getElementById("logo_color").style.left="3vw",document.getElementById("logo_part_white").style.left="3vw",document.getElementById("logo_white").style.left="3vw",console.log("logo")):(document.getElementById("logo_color").style.left="-12vw",document.getElementById("logo_part_white").style.left="-12vw",document.getElementById("logo_white").style.left="-12vw",console.log("no logo")),m.includes("yellow_strip")?(document.getElementById("yellow_strip").style.left=0,console.log("yellow_strip")):(document.getElementById("yellow_strip").style.left="-10vw",console.log("no yellow_strip")),m.includes("yellow_flag")?(document.getElementById("yellow_flag").style.left=0,console.log("yellow_flag")):(document.getElementById("yellow_flag").style.left="-10vh",console.log("no yellow_flag")),m.includes("purple_half_circle_top")?(document.getElementById("purple_half_circle_top").style.top=0,p("logo_part_white"),console.log("purple_half_circle_top")):(document.getElementById("purple_half_circle_top").style.top="-17vw",console.log("no purple_half_circle_top")),m.includes("purple_half_circle_bottom")?(document.getElementById("purple_half_circle_bottom").style.bottom=0,document.getElementById("yellow_flag").style.bottom="20vh",console.log("purple_half_circle_bottom")):(document.getElementById("purple_half_circle_bottom").style.bottom="-10vw",document.getElementById("yellow_flag").style.bottom="5vh",console.log("no purple_half_circle_bottom")),m.includes("purple_strip_bottom")?(document.getElementById("purple_strip_bottom").style.bottom=0,console.log("purple_strip_bottom")):(document.getElementById("purple_strip_bottom").style.bottom="-10vw",console.log("no purple_strip_bottom")),m.includes("yellow_half_strip")?(document.getElementById("yellow_half_strip").style.bottom=0,console.log("yellow_half_strip")):(document.getElementById("yellow_half_strip").style.bottom="-25vw",console.log("no yellow_half_strip")),m.includes("purple_blob")?(document.getElementById("purple_blob").style.top=0,console.log("purple_blob")):(document.getElementById("purple_blob").style.top="-50vh",console.log("no purple_blob")),m.includes("right_e_top")?(document.getElementById("right_e").style.top="10vh",document.getElementById("right_e").style.right=0,console.log("right_e_top")):m.includes("right_e_bottom")?(document.getElementById("right_e").style.top="60vh",document.getElementById("right_e").style.right=0,console.log("right_e_bottom")):(document.getElementById("right_e").style.right="-4vw",console.log("no right_e")),m.includes("clear_background")&&(document.getElementById("purple_overlay").style.transform="translateY(100vh)",document.getElementById("white_overlay").style.transform="translateY(100vh)",document.getElementById("black_overlay").style.transform="translateY(100vh)",document.getElementById("blue_overlay").style.transform="translateY(100vh)",document.getElementById("blue_pane_right").style.transform="translateY(100vh)",document.getElementById("blue_pane_left").style.transform="translateY(100vh)",document.getElementById("touch_pane").style.transform="translateY(100vh)")}else console.log("nothing special")}function u(){console.log("removeDecorations"),document.getElementById("purple_overlay").style.opacity=0,document.getElementById("white_overlay").style.opacity=0,document.getElementById("black_overlay").style.opacity=0,document.getElementById("blue_overlay").style.opacity=0,document.getElementById("blue_pane_right").style.opacity=0,document.getElementById("blue_pane_left").style.opacity=0,document.getElementById("touch_pane").style.opacity=0,document.getElementById("logo_color").style.left="-12vw",document.getElementById("logo_part_white").style.left="-12vw",document.getElementById("logo_white").style.left="-12vw",document.getElementById("yellow_strip").style.left="-10vw",document.getElementById("yellow_flag").style.left="-10vh",document.getElementById("purple_half_circle_top").style.top="-17vw",document.getElementById("purple_half_circle_bottom").style.bottom="-10vw",document.getElementById("purple_strip_bottom").style.bottom="-10vw",document.getElementById("yellow_half_strip").style.bottom="-25vw",document.getElementById("purple_blob").style.top="-50vh",document.getElementById("right_e").style.right="-4vw",document.getElementById("blue_strip").style.right="-"+document.getElementById("blue_strip").offsetWidth+"px"}},Ae={class:"flex relative box-border h-full reveal bg-eScienceWhite z-10"},Te={class:"slides flex h-full w-full"},$e={"data-markdown":"","data-separator":"^\\r?\\n===\\r?\\n$","data-separator-vertical":"^\\r?\\n==\\r?\\n$","data-separator-notes":"^Note:"},Ie={props:{slidescontent:{type:String,default:"Missing Document"}},methods:{stripFrontmatter(b){return b.replace(/^---$.*?^---$/ms,"")}}},Re=Ft({...Ie,__name:"Slides",setup(b){const i=Qt(null);return Wt(()=>{console.log("Slides Mounted"),It(()=>import("./IL6PhzrQ.js"),[],import.meta.url).then(t=>{It(()=>import("./BmZXia10.js"),[],import.meta.url).then(e=>{const r=new t.default;i.value=r,r.initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[ge,e.default,we,ve,xe]})})})}),Yt(()=>{i.value&&i.value.destroy&&i.value.destroy()}),(t,e)=>(gt(),xt("div",Ae,[_t("div",Te,[_t("section",$e,Gt(t.stripFrontmatter(b.slidescontent)),1)])]))}}),Le={},Be={key:0,class:"overflow-hidden h-full border-8 rounded-xl border-eScienceWhite z-10"},Me={key:1,class:"flex justify-center items-center"},He={class:"flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12"};function Ce(b,i){const t=Re,e=te,r=ee;return gt(),Jt(r,null,{default:Xt(({doc:h})=>[h.type==="slides"?(gt(),xt("div",Be,[Rt(t,{slidescontent:h.plainText},null,8,["slidescontent"])])):(gt(),xt("div",Me,[_t("div",He,[Rt(e,{value:h,class:"font-body prose-lg max-w-4xl"},null,8,["value"])])]))]),_:1})}const Ze=Kt(Le,[["render",Ce]]);export{Ze as default};
