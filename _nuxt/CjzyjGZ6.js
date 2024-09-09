var Jt=Object.defineProperty;var Vt=(x,n,t)=>n in x?Jt(x,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[n]=t;var wt=(x,n,t)=>Vt(x,typeof n!="symbol"?n+"":n,t);import{y as Ot,f as Dt,K as Wt,M as Kt,o as ft,c as yt,a as vt,t as Xt,g as Yt,E as Gt,A as te,w as ee,G as ne,b as Rt}from"./BUbN9v5z.js";import{g as se,c as ie}from"./Cpj98o6Y.js";import re from"./BBHWa24O.js";import le from"./C5TBDK1v.js";import"./CXkyfiQL.js";import"./BhjzyCBk.js";import"./CaA6sha2.js";function ae(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let rt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Zt=/[&<>"']/,oe=new RegExp(Zt.source,"g"),Ut=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ce=new RegExp(Ut.source,"g"),pe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},It=x=>pe[x];function F(x,n){if(n){if(Zt.test(x))return x.replace(oe,It)}else if(Ut.test(x))return x.replace(ce,It);return x}const he=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Bt(x){return x.replace(he,(n,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const ue=/(^|[^\[])\^/g;function H(x,n){x=typeof x=="string"?x:x.source,n=n||"";const t={replace:(e,l)=>(l=(l=l.source||l).replace(ue,"$1"),x=x.replace(e,l),t),getRegex:()=>new RegExp(x,n)};return t}const de=/[^\w:]/g,ge=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Lt(x,n,t){if(x){let e;try{e=decodeURIComponent(Bt(t)).replace(de,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}n&&!ge.test(t)&&(t=function(e,l){dt[" "+e]||(fe.test(e)?dt[" "+e]=e+"/":dt[" "+e]=mt(e,"/",!0)),e=dt[" "+e];const h=e.indexOf(":")===-1;return l.substring(0,2)==="//"?h?l:e.replace(me,"$1")+l:l.charAt(0)==="/"?h?l:e.replace(ke,"$1")+l:e+l}(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const dt={},fe=/^[^:]+:\/*[^/]*$/,me=/^([^:]+:)[\s\S]*$/,ke=/^([^:]+:\/*[^/]*)[\s\S]*$/,xt={exec:function(){}};function Ct(x,n){const t=x.replace(/\|/g,(l,h,c)=>{let p=!1,b=h;for(;--b>=0&&c[b]==="\\";)p=!p;return p?"|":" |"}).split(/ \|/);let e=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;e<t.length;e++)t[e]=t[e].trim().replace(/\\\|/g,"|");return t}function mt(x,n,t){const e=x.length;if(e===0)return"";let l=0;for(;l<e;){const h=x.charAt(e-l-1);if(h!==n||t){if(h===n||!t)break;l++}else l++}return x.slice(0,e-l)}function Mt(x,n){if(n<1)return"";let t="";for(;n>1;)1&n&&(t+=x),n>>=1,x+=x;return t+x}function Nt(x,n,t,e){const l=n.href,h=n.title?F(n.title):null,c=x[1].replace(/\\([\[\]])/g,"$1");if(x[0].charAt(0)!=="!"){e.state.inLink=!0;const p={type:"link",raw:t,href:l,title:h,text:c,tokens:e.inlineTokens(c)};return e.state.inLink=!1,p}return{type:"image",raw:t,href:l,title:h,text:F(c)}}class _t{constructor(n){this.options=n||rt}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:mt(e,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const e=t[0],l=function(h,c){const p=h.match(/^(\s+)(?:```)/);if(p===null)return c;const b=p[1];return c.split(`
`).map(_=>{const u=_.match(/^\s+/);if(u===null)return _;const[o]=u;return o.length>=b.length?_.slice(b.length):_}).join(`
`)}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:l}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){const l=mt(e,"#");this.options.pedantic?e=l.trim():l&&!/ $/.test(l)||(e=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),l=this.lexer.state.top;this.lexer.state.top=!0;const h=this.lexer.blockTokens(e);return this.lexer.state.top=l,{type:"blockquote",raw:t[0],tokens:h,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,l,h,c,p,b,_,u,o,m,z,E,C=t[1].trim();const O=C.length>1,$={type:"list",raw:"",ordered:O,start:O?+C.slice(0,-1):"",loose:!1,items:[]};C=O?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=O?C:"[*+-]");const Z=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(E=!1,t=Z.exec(n))&&!this.rules.block.hr.test(n);){if(e=t[0],n=n.substring(e.length),u=t[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),o=n.split(`
`,1)[0],this.options.pedantic?(c=2,z=u.trimLeft()):(c=t[2].search(/[^ ]/),c=c>4?1:c,z=u.slice(c),c+=t[1].length),b=!1,!u&&/^ *$/.test(o)&&(e+=o+`
`,n=n.substring(o.length+1),E=!0),!E){const B=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),q=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),V=new RegExp(`^ {0,${Math.min(3,c-1)}}#`);for(;n&&(m=n.split(`
`,1)[0],o=m,this.options.pedantic&&(o=o.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!P.test(o))&&!V.test(o)&&!B.test(o)&&!q.test(n);){if(o.search(/[^ ]/)>=c||!o.trim())z+=`
`+o.slice(c);else{if(b||u.search(/[^ ]/)>=4||P.test(u)||V.test(u)||q.test(u))break;z+=`
`+o}b||o.trim()||(b=!0),e+=m+`
`,n=n.substring(m.length+1),u=o.slice(c)}}$.loose||(_?$.loose=!0:/\n *\n *$/.test(e)&&(_=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(z),l&&(h=l[0]!=="[ ] ",z=z.replace(/^\[[ xX]\] +/,""))),$.items.push({type:"list_item",raw:e,task:!!l,checked:h,loose:!1,text:z}),$.raw+=e}$.items[$.items.length-1].raw=e.trimRight(),$.items[$.items.length-1].text=z.trimRight(),$.raw=$.raw.trimRight();const U=$.items.length;for(p=0;p<U;p++)if(this.lexer.state.top=!1,$.items[p].tokens=this.lexer.blockTokens($.items[p].text,[]),!$.loose){const B=$.items[p].tokens.filter(P=>P.type==="space"),q=B.length>0&&B.some(P=>/\n.*\n/.test(P.raw));$.loose=q}if($.loose)for(p=0;p<U;p++)$.items[p].loose=!0;return $}}html(n){const t=this.rules.block.html.exec(n);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const l=this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]);e.type="paragraph",e.text=l,e.tokens=this.lexer.inline(l)}return e}}def(n){const t=this.rules.block.def.exec(n);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",h=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:l,title:h}}}table(n){const t=this.rules.block.table.exec(n);if(t){const e={type:"table",header:Ct(t[1]).map(l=>({text:l})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let l,h,c,p,b=e.align.length;for(l=0;l<b;l++)/^ *-+: *$/.test(e.align[l])?e.align[l]="right":/^ *:-+: *$/.test(e.align[l])?e.align[l]="center":/^ *:-+ *$/.test(e.align[l])?e.align[l]="left":e.align[l]=null;for(b=e.rows.length,l=0;l<b;l++)e.rows[l]=Ct(e.rows[l],e.header.length).map(_=>({text:_}));for(b=e.header.length,h=0;h<b;h++)e.header[h].tokens=this.lexer.inline(e.header[h].text);for(b=e.rows.length,h=0;h<b;h++)for(p=e.rows[h],c=0;c<p.length;c++)p[c].tokens=this.lexer.inline(p[c].text);return e}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:F(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):F(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const c=mt(e.slice(0,-1),"\\");if((e.length-c.length)%2==0)return}else{const c=function(p,b){if(p.indexOf(b[1])===-1)return-1;const _=p.length;let u=0,o=0;for(;o<_;o++)if(p[o]==="\\")o++;else if(p[o]===b[0])u++;else if(p[o]===b[1]&&(u--,u<0))return o;return-1}(t[2],"()");if(c>-1){const p=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,p).trim(),t[3]=""}}let l=t[2],h="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);c&&(l=c[1],h=c[3])}else h=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(l=this.options.pedantic&&!/>$/.test(e)?l.slice(1):l.slice(1,-1)),Nt(t,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:h&&h.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let l=(e[2]||e[1]).replace(/\s+/g," ");if(l=t[l.toLowerCase()],!l){const h=e[0].charAt(0);return{type:"text",raw:h,text:h}}return Nt(e,l,e[0],this.lexer)}}emStrong(n,t,e=""){let l=this.rules.inline.emStrong.lDelim.exec(n);if(!l||l[3]&&e.match(/[\p{L}\p{N}]/u))return;const h=l[1]||l[2]||"";if(!h||h&&(e===""||this.rules.inline.punctuation.exec(e))){const c=l[0].length-1;let p,b,_=c,u=0;const o=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*n.length+c);(l=o.exec(t))!=null;){if(p=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!p)continue;if(b=p.length,l[3]||l[4]){_+=b;continue}if((l[5]||l[6])&&c%3&&!((c+b)%3)){u+=b;continue}if(_-=b,_>0)continue;b=Math.min(b,b+_+u);const m=n.slice(0,c+l.index+(l[0].length-p.length)+b);if(Math.min(c,b)%2){const E=m.slice(1,-1);return{type:"em",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}const z=m.slice(2,-2);return{type:"strong",raw:m,text:z,tokens:this.lexer.inlineTokens(z)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," ");const l=/[^ ]/.test(e),h=/^ /.test(e)&&/ $/.test(e);return l&&h&&(e=e.substring(1,e.length-1)),e=F(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const e=this.rules.inline.autolink.exec(n);if(e){let l,h;return e[2]==="@"?(l=F(this.options.mangle?t(e[1]):e[1]),h="mailto:"+l):(l=F(e[1]),h=l),{type:"link",raw:e[0],text:l,href:h,tokens:[{type:"text",raw:l,text:l}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let l,h;if(e[2]==="@")l=F(this.options.mangle?t(e[0]):e[0]),h="mailto:"+l;else{let c;do c=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(c!==e[0]);l=F(e[0]),h=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:l,href:h,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n,t){const e=this.rules.inline.text.exec(n);if(e){let l;return l=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):F(e[0]):e[0]:F(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:l}}}}const N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};N.def=H(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.listItemStart=H(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=H(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=H(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.blockquote=H(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal={...N},N.gfm={...N.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},N.gfm.table=H(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.gfm.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",N.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.pedantic={...N.normal,html:H(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:H(N.normal._paragraph).replace("hr",N.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function xe(x){return x.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function qt(x){let n,t,e="";const l=x.length;for(n=0;n<l;n++)t=x.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}T._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",T.punctuation=H(T.punctuation).replace(/punctuation/g,T._punctuation).getRegex(),T.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,T.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,T._comment=H(N._comment).replace("(?:-->|$)","-->").getRegex(),T.emStrong.lDelim=H(T.emStrong.lDelim).replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimAst=H(T.emStrong.rDelimAst,"g").replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimUnd=H(T.emStrong.rDelimUnd,"g").replace(/punct/g,T._punctuation).getRegex(),T._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,T.autolink=H(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex(),T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,T.tag=H(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex(),T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,T.link=H(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex(),T.reflink=H(T.reflink).replace("label",T._label).replace("ref",N._label).getRegex(),T.nolink=H(T.nolink).replace("ref",N._label).getRegex(),T.reflinkSearch=H(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex(),T.normal={...T},T.pedantic={...T.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()},T.gfm={...T.normal,escape:H(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},T.gfm.url=H(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex(),T.breaks={...T.gfm,br:H(T.br).replace("{2,}","*").getRegex(),text:H(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class st{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||rt,this.options.tokenizer=this.options.tokenizer||new _t,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:N.normal,inline:T.normal};this.options.pedantic?(t.block=N.pedantic,t.inline=T.pedantic):this.options.gfm&&(t.block=N.gfm,this.options.breaks?t.inline=T.breaks:t.inline=T.gfm),this.tokenizer.rules=t}static get rules(){return{block:N,inline:T}}static lex(n,t){return new st(t).lex(n)}static lexInline(n,t){return new st(t).inlineTokens(n)}lex(n){let t;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){let e,l,h,c;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,(p,b,_)=>b+"    ".repeat(_.length));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(p=>!!(e=p.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.space(n))n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);else if(e=this.tokenizer.code(n))n=n.substring(e.raw.length),l=t[t.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?t.push(e):(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(e=this.tokenizer.fences(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.heading(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.hr(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.blockquote(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.list(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.html(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.def(n))n=n.substring(e.raw.length),l=t[t.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title}):(l.raw+=`
`+e.raw,l.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(e=this.tokenizer.table(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.lheading(n))n=n.substring(e.raw.length),t.push(e);else{if(h=n,this.options.extensions&&this.options.extensions.startBlock){let p=1/0;const b=n.slice(1);let _;this.options.extensions.startBlock.forEach(function(u){_=u.call({lexer:this},b),typeof _=="number"&&_>=0&&(p=Math.min(p,_))}),p<1/0&&p>=0&&(h=n.substring(0,p+1))}if(this.state.top&&(e=this.tokenizer.paragraph(h)))l=t[t.length-1],c&&l.type==="paragraph"?(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(e),c=h.length!==n.length,n=n.substring(e.raw.length);else if(e=this.tokenizer.text(n))n=n.substring(e.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(e);else if(n){const p="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(p);break}throw new Error(p)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,l,h,c,p,b,_=n;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(_))!=null;)u.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(_=_.slice(0,c.index)+"["+Mt("a",c[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(_))!=null;)_=_.slice(0,c.index)+"["+Mt("a",c[0].length-2)+"]"+_.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.escapedEmSt.exec(_))!=null;)_=_.slice(0,c.index+c[0].length-2)+"++"+_.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(p||(b=""),p=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>!!(e=u.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.escape(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.tag(n))n=n.substring(e.raw.length),l=t[t.length-1],l&&e.type==="text"&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(e=this.tokenizer.link(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(e.raw.length),l=t[t.length-1],l&&e.type==="text"&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(e=this.tokenizer.emStrong(n,_,b))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.codespan(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.br(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.del(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.autolink(n,qt))n=n.substring(e.raw.length),t.push(e);else if(this.state.inLink||!(e=this.tokenizer.url(n,qt))){if(h=n,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const o=n.slice(1);let m;this.options.extensions.startInline.forEach(function(z){m=z.call({lexer:this},o),typeof m=="number"&&m>=0&&(u=Math.min(u,m))}),u<1/0&&u>=0&&(h=n.substring(0,u+1))}if(e=this.tokenizer.inlineText(h,xe))n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(b=e.raw.slice(-1)),p=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(n){const u="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else n=n.substring(e.raw.length),t.push(e);return t}}class St{constructor(n){this.options=n||rt}code(n,t,e){const l=(t||"").match(/\S*/)[0];if(this.options.highlight){const h=this.options.highlight(n,l);h!=null&&h!==n&&(e=!0,n=h)}return n=n.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+F(l)+'">'+(e?n:F(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:F(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,t,e,l){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+l.slug(e)}">${n}</h${t}>
`:`<h${t}>${n}</h${t}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,t,e){const l=t?"ol":"ul";return"<"+l+(t&&e!==1?' start="'+e+'"':"")+`>
`+n+"</"+l+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+t+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,t){const e=t.header?"th":"td";return(t.align?`<${e} align="${t.align}">`:`<${e}>`)+n+`</${e}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if((n=Lt(this.options.sanitize,this.options.baseUrl,n))===null)return e;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+e+"</a>",l}image(n,t,e){if((n=Lt(this.options.sanitize,this.options.baseUrl,n))===null)return e;let l=`<img src="${n}" alt="${e}"`;return t&&(l+=` title="${t}"`),l+=this.options.xhtml?"/>":">",l}text(n){return n}}class Ht{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class jt{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,l=0;if(this.seen.hasOwnProperty(e)){l=this.seen[n];do l++,e=n+"-"+l;while(this.seen.hasOwnProperty(e))}return t||(this.seen[n]=l,this.seen[e]=0),e}slug(n,t={}){const e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class it{constructor(n){this.options=n||rt,this.options.renderer=this.options.renderer||new St,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Ht,this.slugger=new jt}static parse(n,t){return new it(t).parse(n)}static parseInline(n,t){return new it(t).parseInline(n)}parse(n,t=!0){let e,l,h,c,p,b,_,u,o,m,z,E,C,O,$,Z,U,B,q,P="";const V=n.length;for(e=0;e<V;e++)if(m=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(q=this.options.extensions.renderers[m.type].call({parser:this},m),q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)))P+=q||"";else switch(m.type){case"space":continue;case"hr":P+=this.renderer.hr();continue;case"heading":P+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Bt(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue;case"code":P+=this.renderer.code(m.text,m.lang,m.escaped);continue;case"table":for(u="",_="",c=m.header.length,l=0;l<c;l++)_+=this.renderer.tablecell(this.parseInline(m.header[l].tokens),{header:!0,align:m.align[l]});for(u+=this.renderer.tablerow(_),o="",c=m.rows.length,l=0;l<c;l++){for(b=m.rows[l],_="",p=b.length,h=0;h<p;h++)_+=this.renderer.tablecell(this.parseInline(b[h].tokens),{header:!1,align:m.align[h]});o+=this.renderer.tablerow(_)}P+=this.renderer.table(u,o);continue;case"blockquote":o=this.parse(m.tokens),P+=this.renderer.blockquote(o);continue;case"list":for(z=m.ordered,E=m.start,C=m.loose,c=m.items.length,o="",l=0;l<c;l++)$=m.items[l],Z=$.checked,U=$.task,O="",$.task&&(B=this.renderer.checkbox(Z),C?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=B+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=B+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:B}):O+=B),O+=this.parse($.tokens,C),o+=this.renderer.listitem(O,U,Z);P+=this.renderer.list(o,z,E);continue;case"html":P+=this.renderer.html(m.text);continue;case"paragraph":P+=this.renderer.paragraph(this.parseInline(m.tokens));continue;case"text":for(o=m.tokens?this.parseInline(m.tokens):m.text;e+1<V&&n[e+1].type==="text";)m=n[++e],o+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);P+=t?this.renderer.paragraph(o):o;continue;default:{const J='Token with "'+m.type+'" type was not found.';if(this.options.silent)return void console.error(J);throw new Error(J)}}return P}parseInline(n,t){t=t||this.renderer;let e,l,h,c="";const p=n.length;for(e=0;e<p;e++)if(l=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(h=this.options.extensions.renderers[l.type].call({parser:this},l),h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)))c+=h||"";else switch(l.type){case"escape":case"text":c+=t.text(l.text);break;case"html":c+=t.html(l.text);break;case"link":c+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break;case"image":c+=t.image(l.href,l.title,l.text);break;case"strong":c+=t.strong(this.parseInline(l.tokens,t));break;case"em":c+=t.em(this.parseInline(l.tokens,t));break;case"codespan":c+=t.codespan(l.text);break;case"br":c+=t.br();break;case"del":c+=t.del(this.parseInline(l.tokens,t));break;default:{const b='Token with "'+l.type+'" type was not found.';if(this.options.silent)return void console.error(b);throw new Error(b)}}return c}}class kt{constructor(n){this.options=n||rt}preprocess(n){return n}postprocess(n){return n}}wt(kt,"passThroughHooks",new Set(["preprocess","postprocess"]));function Qt(x,n){return(t,e,l)=>{typeof e=="function"&&(l=e,e=null);const h={...e},c=function(p,b,_){return u=>{if(u.message+=`
Please report this to https://github.com/markedjs/marked.`,p){const o="<p>An error occurred:</p><pre>"+F(u.message+"",!0)+"</pre>";return b?Promise.resolve(o):_?void _(null,o):o}if(b)return Promise.reject(u);if(!_)throw u;_(u)}}((e={...I.defaults,...h}).silent,e.async,l);if(t==null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(function(p){p&&p.sanitize&&!p.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(e),e.hooks&&(e.hooks.options=e),l){const p=e.highlight;let b;try{e.hooks&&(t=e.hooks.preprocess(t)),b=x(t,e)}catch(o){return c(o)}const _=function(o){let m;if(!o)try{e.walkTokens&&I.walkTokens(b,e.walkTokens),m=n(b,e),e.hooks&&(m=e.hooks.postprocess(m))}catch(z){o=z}return e.highlight=p,o?c(o):l(null,m)};if(!p||p.length<3||(delete e.highlight,!b.length))return _();let u=0;return I.walkTokens(b,function(o){o.type==="code"&&(u++,setTimeout(()=>{p(o.text,o.lang,function(m,z){if(m)return _(m);z!=null&&z!==o.text&&(o.text=z,o.escaped=!0),u--,u===0&&_()})},0))}),void(u===0&&_())}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then(p=>x(p,e)).then(p=>e.walkTokens?Promise.all(I.walkTokens(p,e.walkTokens)).then(()=>p):p).then(p=>n(p,e)).then(p=>e.hooks?e.hooks.postprocess(p):p).catch(c);try{e.hooks&&(t=e.hooks.preprocess(t));const p=x(t,e);e.walkTokens&&I.walkTokens(p,e.walkTokens);let b=n(p,e);return e.hooks&&(b=e.hooks.postprocess(b)),b}catch(p){return c(p)}}}function I(x,n,t){return Qt(st.lex,it.parse)(x,n,t)}I.options=I.setOptions=function(x){var n;return I.defaults={...I.defaults,...x},n=I.defaults,rt=n,I},I.getDefaults=ae,I.defaults=rt,I.use=function(...x){const n=I.defaults.extensions||{renderers:{},childTokens:{}};x.forEach(t=>{const e={...t};if(e.async=I.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if(l.renderer){const h=n.renderers[l.name];n.renderers[l.name]=h?function(...c){let p=l.renderer.apply(this,c);return p===!1&&(p=h.apply(this,c)),p}:l.renderer}if(l.tokenizer){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[l.level]?n[l.level].unshift(l.tokenizer):n[l.level]=[l.tokenizer],l.start&&(l.level==="block"?n.startBlock?n.startBlock.push(l.start):n.startBlock=[l.start]:l.level==="inline"&&(n.startInline?n.startInline.push(l.start):n.startInline=[l.start]))}l.childTokens&&(n.childTokens[l.name]=l.childTokens)}),e.extensions=n),t.renderer){const l=I.defaults.renderer||new St;for(const h in t.renderer){const c=l[h];l[h]=(...p)=>{let b=t.renderer[h].apply(l,p);return b===!1&&(b=c.apply(l,p)),b}}e.renderer=l}if(t.tokenizer){const l=I.defaults.tokenizer||new _t;for(const h in t.tokenizer){const c=l[h];l[h]=(...p)=>{let b=t.tokenizer[h].apply(l,p);return b===!1&&(b=c.apply(l,p)),b}}e.tokenizer=l}if(t.hooks){const l=I.defaults.hooks||new kt;for(const h in t.hooks){const c=l[h];kt.passThroughHooks.has(h)?l[h]=p=>{if(I.defaults.async)return Promise.resolve(t.hooks[h].call(l,p)).then(_=>c.call(l,_));const b=t.hooks[h].call(l,p);return c.call(l,b)}:l[h]=(...p)=>{let b=t.hooks[h].apply(l,p);return b===!1&&(b=c.apply(l,p)),b}}e.hooks=l}if(t.walkTokens){const l=I.defaults.walkTokens;e.walkTokens=function(h){let c=[];return c.push(t.walkTokens.call(this,h)),l&&(c=c.concat(l.call(this,h))),c}}I.setOptions(e)})},I.walkTokens=function(x,n){let t=[];for(const e of x)switch(t=t.concat(n.call(I,e)),e.type){case"table":for(const l of e.header)t=t.concat(I.walkTokens(l.tokens,n));for(const l of e.rows)for(const h of l)t=t.concat(I.walkTokens(h.tokens,n));break;case"list":t=t.concat(I.walkTokens(e.items,n));break;default:I.defaults.extensions&&I.defaults.extensions.childTokens&&I.defaults.extensions.childTokens[e.type]?I.defaults.extensions.childTokens[e.type].forEach(function(l){t=t.concat(I.walkTokens(e[l],n))}):e.tokens&&(t=t.concat(I.walkTokens(e.tokens,n)))}return t},I.parseInline=Qt(st.lexInline,it.parseInline),I.Parser=it,I.parser=it.parse,I.Renderer=St,I.TextRenderer=Ht,I.Lexer=st,I.lexer=st.lex,I.Tokenizer=_t,I.Slugger=jt,I.Hooks=kt,I.parse=I,I.options,I.setOptions,I.use,I.walkTokens,I.parseInline,it.parse,st.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Pt="__SCRIPT_END__",gt=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},we=()=>{let x;function n(u){let o=(u.querySelector("[data-template]")||u.querySelector("script")||u).textContent;o=o.replace(new RegExp(Pt,"g"),"<\/script>");const m=o.match(/^\n?(\s*)/)[1].length,z=o.match(/^\n?(\t*)/)[1].length;return z>0?o=o.replace(new RegExp("\\n?\\t{"+z+"}(.*)","g"),function(E,C){return`
`+C}):m>1&&(o=o.replace(new RegExp("\\n? {"+m+"}(.*)","g"),function(E,C){return`
`+C})),o}function t(u){const o=u.attributes,m=[];for(let z=0,E=o.length;z<E;z++){const C=o[z].name,O=o[z].value;/data\-(markdown|separator|vertical|notes)/gi.test(C)||(O?m.push(C+'="'+O+'"'):m.push(C))}return m.join(" ")}function e(u){var m;const o=(m=x==null?void 0:x.getConfig)==null?void 0:m.call(x).markdown;return(u=u||{}).separator=u.separator||(o==null?void 0:o.separator)||`\r?
---\r?
`,u.verticalSeparator=u.verticalSeparator||(o==null?void 0:o.verticalSeparator)||null,u.notesSeparator=u.notesSeparator||(o==null?void 0:o.notesSeparator)||"^s*notes?:",u.attributes=u.attributes||"",u}function l(u,o){o=e(o);const m=u.split(new RegExp(o.notesSeparator,"mgi"));return m.length===2&&(u=m[0]+'<aside class="notes">'+I(m[1].trim())+"</aside>"),'<script type="text/template">'+(u=u.replace(/<\/script>/g,Pt))+"<\/script>"}function h(u,o){o=e(o);const m=new RegExp(o.separator+(o.verticalSeparator?"|"+o.verticalSeparator:""),"mg"),z=new RegExp(o.separator);let E,C,O,$=0,Z=!0,U=[];for(;E=m.exec(u);)C=z.test(E[0]),!C&&Z&&U.push([]),O=u.substring($,E.index),C&&Z?U.push(O):U[U.length-1].push(O),$=m.lastIndex,Z=C;(Z?U:U[U.length-1]).push(u.substring($));let B="";for(let q=0,P=U.length;q<P;q++)U[q]instanceof Array?(B+="<section "+o.attributes+">",U[q].forEach(function(V){B+="<section data-markdown>"+l(V,o)+"</section>"}),B+="</section>"):B+="<section "+o.attributes+" data-markdown>"+l(U[q],o)+"</section>";return B}function c(u){return new Promise(function(o){const m=[];[].slice.call(u.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(z,E){z.getAttribute("data-markdown").length?m.push(function(C){return new Promise(function(O,$){const Z=new XMLHttpRequest,U=C.getAttribute("data-markdown"),B=C.getAttribute("data-charset");B!==null&&B!==""&&Z.overrideMimeType("text/html; charset="+B),Z.onreadystatechange=(function(q,P){P.readyState===4&&(P.status>=200&&P.status<300||P.status===0?O(P,U):$(P,U))}).bind(this,C,Z),Z.open("GET",U,!0);try{Z.send()}catch(q){console.warn("Failed to get the Markdown file "+U+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+q),O(Z,U)}})}(z).then(function(C,O){z.outerHTML=h(C.responseText,{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:t(z)})},function(C,O){z.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+O+" failed with HTTP status "+C.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):z.outerHTML=h(n(z),{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:t(z)})}),Promise.all(m).then(o)})}function p(u,o,m){const z=new RegExp(m,"mg"),E=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let C,O,$=u.nodeValue;if(C=z.exec($)){const Z=C[1];for($=$.substring(0,C.index)+$.substring(z.lastIndex),u.nodeValue=$;O=E.exec(Z);)O[2]?o.setAttribute(O[1],O[2]):o.setAttribute(O[3],"");return!0}return!1}function b(u,o,m,z,E){if(o!==null&&o.childNodes!==void 0&&o.childNodes.length>0){let C=o;for(let O=0;O<o.childNodes.length;O++){const $=o.childNodes[O];if(O>0){let U=O-1;for(;U>=0;){const B=o.childNodes[U];if(typeof B.setAttribute=="function"&&B.tagName!=="BR"){C=B;break}U-=1}}let Z=u;$.nodeName==="section"&&(Z=$,C=$),typeof $.setAttribute!="function"&&$.nodeType!==Node.COMMENT_NODE||b(Z,$,C,z,E)}}o.nodeType===Node.COMMENT_NODE&&p(o,m,z)===!1&&p(o,u,E)}function _(){const u=x.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(u).forEach(function(o){o.setAttribute("data-markdown-parsed",!0);const m=o.querySelector("aside.notes"),z=n(o);o.innerHTML=I(z),b(o,o,null,o.getAttribute("data-element-attributes")||o.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",o.getAttribute("data-attributes")||o.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),m&&o.appendChild(m)}),Promise.resolve()}return{id:"markdown",init:function(u){x=u;let{renderer:o,animateLists:m,...z}=x.getConfig().markdown||{};return o||(o=new I.Renderer,o.code=(E,C)=>{let O="",$="";if(gt.test(C)){let Z=C.match(gt)[2];Z&&(O=`data-ln-start-from="${Z.trim()}"`),$=C.match(gt)[3].trim(),$=`data-line-numbers="${$}"`,C=C.replace(gt,"").trim()}return`<pre><code ${$} ${O} class="${C}">${E=E.replace(/([&<>'"])/g,Z=>be[Z])}</code></pre>`}),m===!0&&(o.listitem=E=>`<li class="fragment">${E}</li>`),I.setOptions({renderer:o,...z}),c(x.getRevealElement()).then(_)},processSlides:c,convertSlides:_,slidify:h,marked:I}};var Ft={exports:{}};(function(x,n){(function(t,e){x.exports=e()})(ie,function(){function t(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let e={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const l=/[&<>"']/,h=new RegExp(l.source,"g"),c=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,p=new RegExp(c.source,"g"),b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},_=R=>b[R];function u(R,r){if(r){if(l.test(R))return R.replace(h,_)}else if(c.test(R))return R.replace(p,_);return R}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(R){return R.replace(o,(r,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const z=/(^|[^\[])\^/g;function E(R,r){R=typeof R=="string"?R:R.source,r=r||"";const s={replace:(i,a)=>(a=(a=a.source||a).replace(z,"$1"),R=R.replace(i,a),s),getRegex:()=>new RegExp(R,r)};return s}const C=/[^\w:]/g,O=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $(R,r,s){if(R){let i;try{i=decodeURIComponent(m(s)).replace(C,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}r&&!O.test(s)&&(s=function(i,a){Z[" "+i]||(U.test(i)?Z[" "+i]=i+"/":Z[" "+i]=J(i,"/",!0)),i=Z[" "+i];const f=i.indexOf(":")===-1;return a.substring(0,2)==="//"?f?a:i.replace(B,"$1")+a:a.charAt(0)==="/"?f?a:i.replace(q,"$1")+a:i+a}(r,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const Z={},U=/^[^:]+:\/*[^/]*$/,B=/^([^:]+:)[\s\S]*$/,q=/^([^:]+:\/*[^/]*)[\s\S]*$/,P={exec:function(){}};function V(R,r){const s=R.replace(/\|/g,(a,f,g)=>{let d=!1,k=f;for(;--k>=0&&g[k]==="\\";)d=!d;return d?"|":" |"}).split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>r)s.splice(r);else for(;s.length<r;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function J(R,r,s){const i=R.length;if(i===0)return"";let a=0;for(;a<i;){const f=R.charAt(i-a-1);if(f!==r||s){if(f===r||!s)break;a++}else a++}return R.slice(0,i-a)}function G(R,r){if(r<1)return"";let s="";for(;r>1;)1&r&&(s+=R),r>>=1,R+=R;return s+R}function lt(R,r,s,i){const a=r.href,f=r.title?u(r.title):null,g=R[1].replace(/\\([\[\]])/g,"$1");if(R[0].charAt(0)!=="!"){i.state.inLink=!0;const d={type:"link",raw:s,href:a,title:f,text:g,tokens:i.inlineTokens(g)};return i.state.inLink=!1,d}return{type:"image",raw:s,href:a,title:f,text:u(g)}}class at{constructor(r){this.options=r||e}space(r){const s=this.rules.block.newline.exec(r);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(r){const s=this.rules.block.code.exec(r);if(s){const i=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:J(i,`
`)}}}fences(r){const s=this.rules.block.fences.exec(r);if(s){const i=s[0],a=function(f,g){const d=f.match(/^(\s+)(?:```)/);if(d===null)return g;const k=d[1];return g.split(`
`).map(y=>{const A=y.match(/^\s+/);if(A===null)return y;const[w]=A;return w.length>=k.length?y.slice(k.length):y}).join(`
`)}(i,s[3]||"");return{type:"code",raw:i,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:a}}}heading(r){const s=this.rules.block.heading.exec(r);if(s){let i=s[2].trim();if(/#$/.test(i)){const a=J(i,"#");this.options.pedantic?i=a.trim():a&&!/ $/.test(a)||(i=a.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(r){const s=this.rules.block.hr.exec(r);if(s)return{type:"hr",raw:s[0]}}blockquote(r){const s=this.rules.block.blockquote.exec(r);if(s){const i=s[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const f=this.lexer.blockTokens(i);return this.lexer.state.top=a,{type:"blockquote",raw:s[0],tokens:f,text:i}}}list(r){let s=this.rules.block.list.exec(r);if(s){let i,a,f,g,d,k,y,A,w,S,j,X,W=s[1].trim();const Y=W.length>1,D={type:"list",raw:"",ordered:Y,start:Y?+W.slice(0,-1):"",loose:!1,items:[]};W=Y?`\\d{1,9}\\${W.slice(-1)}`:`\\${W}`,this.options.pedantic&&(W=Y?W:"[*+-]");const ct=new RegExp(`^( {0,3}${W})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;r&&(X=!1,s=ct.exec(r))&&!this.rules.block.hr.test(r);){if(i=s[0],r=r.substring(i.length),A=s[2].split(`
`,1)[0].replace(/^\t+/,K=>" ".repeat(3*K.length)),w=r.split(`
`,1)[0],this.options.pedantic?(g=2,j=A.trimLeft()):(g=s[2].search(/[^ ]/),g=g>4?1:g,j=A.slice(g),g+=s[1].length),k=!1,!A&&/^ *$/.test(w)&&(i+=w+`
`,r=r.substring(w.length+1),X=!0),!X){const K=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),nt=new RegExp(`^ {0,${Math.min(3,g-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,g-1)}}(?:\`\`\`|~~~)`),ht=new RegExp(`^ {0,${Math.min(3,g-1)}}#`);for(;r&&(S=r.split(`
`,1)[0],w=S,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!Q.test(w))&&!ht.test(w)&&!K.test(w)&&!nt.test(r);){if(w.search(/[^ ]/)>=g||!w.trim())j+=`
`+w.slice(g);else{if(k||A.search(/[^ ]/)>=4||Q.test(A)||ht.test(A)||nt.test(A))break;j+=`
`+w}k||w.trim()||(k=!0),i+=S+`
`,r=r.substring(S.length+1),A=w.slice(g)}}D.loose||(y?D.loose=!0:/\n *\n *$/.test(i)&&(y=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(j),a&&(f=a[0]!=="[ ] ",j=j.replace(/^\[[ xX]\] +/,""))),D.items.push({type:"list_item",raw:i,task:!!a,checked:f,loose:!1,text:j}),D.raw+=i}D.items[D.items.length-1].raw=i.trimRight(),D.items[D.items.length-1].text=j.trimRight(),D.raw=D.raw.trimRight();const pt=D.items.length;for(d=0;d<pt;d++)if(this.lexer.state.top=!1,D.items[d].tokens=this.lexer.blockTokens(D.items[d].text,[]),!D.loose){const K=D.items[d].tokens.filter(Q=>Q.type==="space"),nt=K.length>0&&K.some(Q=>/\n.*\n/.test(Q.raw));D.loose=nt}if(D.loose)for(d=0;d<pt;d++)D.items[d].loose=!0;return D}}html(r){const s=this.rules.block.html.exec(r);if(s){const i={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]);i.type="paragraph",i.text=a,i.tokens=this.lexer.inline(a)}return i}}def(r){const s=this.rules.block.def.exec(r);if(s){const i=s[1].toLowerCase().replace(/\s+/g," "),a=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:i,raw:s[0],href:a,title:f}}}table(r){const s=this.rules.block.table.exec(r);if(s){const i={type:"table",header:V(s[1]).map(a=>({text:a})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=s[0];let a,f,g,d,k=i.align.length;for(a=0;a<k;a++)/^ *-+: *$/.test(i.align[a])?i.align[a]="right":/^ *:-+: *$/.test(i.align[a])?i.align[a]="center":/^ *:-+ *$/.test(i.align[a])?i.align[a]="left":i.align[a]=null;for(k=i.rows.length,a=0;a<k;a++)i.rows[a]=V(i.rows[a],i.header.length).map(y=>({text:y}));for(k=i.header.length,f=0;f<k;f++)i.header[f].tokens=this.lexer.inline(i.header[f].text);for(k=i.rows.length,f=0;f<k;f++)for(d=i.rows[f],g=0;g<d.length;g++)d[g].tokens=this.lexer.inline(d[g].text);return i}}}lheading(r){const s=this.rules.block.lheading.exec(r);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(r){const s=this.rules.block.paragraph.exec(r);if(s){const i=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:i,tokens:this.lexer.inline(i)}}}text(r){const s=this.rules.block.text.exec(r);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(r){const s=this.rules.inline.escape.exec(r);if(s)return{type:"escape",raw:s[0],text:u(s[1])}}tag(r){const s=this.rules.inline.tag.exec(r);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):u(s[0]):s[0]}}link(r){const s=this.rules.inline.link.exec(r);if(s){const i=s[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const g=J(i.slice(0,-1),"\\");if((i.length-g.length)%2==0)return}else{const g=function(d,k){if(d.indexOf(k[1])===-1)return-1;const y=d.length;let A=0,w=0;for(;w<y;w++)if(d[w]==="\\")w++;else if(d[w]===k[0])A++;else if(d[w]===k[1]&&(A--,A<0))return w;return-1}(s[2],"()");if(g>-1){const d=(s[0].indexOf("!")===0?5:4)+s[1].length+g;s[2]=s[2].substring(0,g),s[0]=s[0].substring(0,d).trim(),s[3]=""}}let a=s[2],f="";if(this.options.pedantic){const g=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);g&&(a=g[1],f=g[3])}else f=s[3]?s[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(i)?a.slice(1):a.slice(1,-1)),lt(s,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:f&&f.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(r,s){let i;if((i=this.rules.inline.reflink.exec(r))||(i=this.rules.inline.nolink.exec(r))){let a=(i[2]||i[1]).replace(/\s+/g," ");if(a=s[a.toLowerCase()],!a){const f=i[0].charAt(0);return{type:"text",raw:f,text:f}}return lt(i,a,i[0],this.lexer)}}emStrong(r,s,i=""){let a=this.rules.inline.emStrong.lDelim.exec(r);if(!a||a[3]&&i.match(/[\p{L}\p{N}]/u))return;const f=a[1]||a[2]||"";if(!f||f&&(i===""||this.rules.inline.punctuation.exec(i))){const g=a[0].length-1;let d,k,y=g,A=0;const w=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,s=s.slice(-1*r.length+g);(a=w.exec(s))!=null;){if(d=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!d)continue;if(k=d.length,a[3]||a[4]){y+=k;continue}if((a[5]||a[6])&&g%3&&!((g+k)%3)){A+=k;continue}if(y-=k,y>0)continue;k=Math.min(k,k+y+A);const S=r.slice(0,g+a.index+(a[0].length-d.length)+k);if(Math.min(g,k)%2){const X=S.slice(1,-1);return{type:"em",raw:S,text:X,tokens:this.lexer.inlineTokens(X)}}const j=S.slice(2,-2);return{type:"strong",raw:S,text:j,tokens:this.lexer.inlineTokens(j)}}}}codespan(r){const s=this.rules.inline.code.exec(r);if(s){let i=s[2].replace(/\n/g," ");const a=/[^ ]/.test(i),f=/^ /.test(i)&&/ $/.test(i);return a&&f&&(i=i.substring(1,i.length-1)),i=u(i,!0),{type:"codespan",raw:s[0],text:i}}}br(r){const s=this.rules.inline.br.exec(r);if(s)return{type:"br",raw:s[0]}}del(r){const s=this.rules.inline.del.exec(r);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(r,s){const i=this.rules.inline.autolink.exec(r);if(i){let a,f;return i[2]==="@"?(a=u(this.options.mangle?s(i[1]):i[1]),f="mailto:"+a):(a=u(i[1]),f=a),{type:"link",raw:i[0],text:a,href:f,tokens:[{type:"text",raw:a,text:a}]}}}url(r,s){let i;if(i=this.rules.inline.url.exec(r)){let a,f;if(i[2]==="@")a=u(this.options.mangle?s(i[0]):i[0]),f="mailto:"+a;else{let g;do g=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(g!==i[0]);a=u(i[0]),f=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:a,href:f,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(r,s){const i=this.rules.inline.text.exec(r);if(i){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):u(i[0]):i[0]:u(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:a}}}}const L={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:P,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};L.def=E(L.def).replace("label",L._label).replace("title",L._title).getRegex(),L.bullet=/(?:[*+-]|\d{1,9}[.)])/,L.listItemStart=E(/^( *)(bull) */).replace("bull",L.bullet).getRegex(),L.list=E(L.list).replace(/bull/g,L.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+L.def.source+")").getRegex(),L._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",L._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,L.html=E(L.html,"i").replace("comment",L._comment).replace("tag",L._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),L.paragraph=E(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.blockquote=E(L.blockquote).replace("paragraph",L.paragraph).getRegex(),L.normal={...L},L.gfm={...L.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},L.gfm.table=E(L.gfm.table).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.gfm.paragraph=E(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",L.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.pedantic={...L.normal,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",L._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(L.normal._paragraph).replace("hr",L.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",L.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const v={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:P,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:P,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ot(R){return R.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function $t(R){let r,s,i="";const a=R.length;for(r=0;r<a;r++)s=R.charCodeAt(r),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}v._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",v.punctuation=E(v.punctuation).replace(/punctuation/g,v._punctuation).getRegex(),v.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,v.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,v._comment=E(L._comment).replace("(?:-->|$)","-->").getRegex(),v.emStrong.lDelim=E(v.emStrong.lDelim).replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimAst=E(v.emStrong.rDelimAst,"g").replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimUnd=E(v.emStrong.rDelimUnd,"g").replace(/punct/g,v._punctuation).getRegex(),v._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,v._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,v._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,v.autolink=E(v.autolink).replace("scheme",v._scheme).replace("email",v._email).getRegex(),v._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,v.tag=E(v.tag).replace("comment",v._comment).replace("attribute",v._attribute).getRegex(),v._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,v._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,v._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,v.link=E(v.link).replace("label",v._label).replace("href",v._href).replace("title",v._title).getRegex(),v.reflink=E(v.reflink).replace("label",v._label).replace("ref",L._label).getRegex(),v.nolink=E(v.nolink).replace("ref",L._label).getRegex(),v.reflinkSearch=E(v.reflinkSearch,"g").replace("reflink",v.reflink).replace("nolink",v.nolink).getRegex(),v.normal={...v},v.pedantic={...v.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",v._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v._label).getRegex()},v.gfm={...v.normal,escape:E(v.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},v.gfm.url=E(v.gfm.url,"i").replace("email",v.gfm._extended_email).getRegex(),v.breaks={...v.gfm,br:E(v.br).replace("{2,}","*").getRegex(),text:E(v.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class tt{constructor(r){this.tokens=[],this.tokens.links=Object.create(null),this.options=r||e,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:L.normal,inline:v.normal};this.options.pedantic?(s.block=L.pedantic,s.inline=v.pedantic):this.options.gfm&&(s.block=L.gfm,this.options.breaks?s.inline=v.breaks:s.inline=v.gfm),this.tokenizer.rules=s}static get rules(){return{block:L,inline:v}}static lex(r,s){return new tt(s).lex(r)}static lexInline(r,s){return new tt(s).inlineTokens(r)}lex(r){let s;for(r=r.replace(/\r\n|\r/g,`
`),this.blockTokens(r,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(r,s=[]){let i,a,f,g;for(r=this.options.pedantic?r.replace(/\t/g,"    ").replace(/^ +$/gm,""):r.replace(/^( *)(\t+)/gm,(d,k,y)=>k+"    ".repeat(y.length));r;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>!!(i=d.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.space(r))r=r.substring(i.raw.length),i.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(i);else if(i=this.tokenizer.code(r))r=r.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?s.push(i):(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.fences(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.heading(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.hr(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.blockquote(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.list(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.html(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.def(r))r=r.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.table(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.lheading(r))r=r.substring(i.raw.length),s.push(i);else{if(f=r,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const k=r.slice(1);let y;this.options.extensions.startBlock.forEach(function(A){y=A.call({lexer:this},k),typeof y=="number"&&y>=0&&(d=Math.min(d,y))}),d<1/0&&d>=0&&(f=r.substring(0,d+1))}if(this.state.top&&(i=this.tokenizer.paragraph(f)))a=s[s.length-1],g&&a.type==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i),g=f.length!==r.length,r=r.substring(i.raw.length);else if(i=this.tokenizer.text(r))r=r.substring(i.raw.length),a=s[s.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i);else if(r){const d="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(d);break}throw new Error(d)}}return this.state.top=!0,s}inline(r,s=[]){return this.inlineQueue.push({src:r,tokens:s}),s}inlineTokens(r,s=[]){let i,a,f,g,d,k,y=r;if(this.tokens.links){const A=Object.keys(this.tokens.links);if(A.length>0)for(;(g=this.tokenizer.rules.inline.reflinkSearch.exec(y))!=null;)A.includes(g[0].slice(g[0].lastIndexOf("[")+1,-1))&&(y=y.slice(0,g.index)+"["+G("a",g[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(g=this.tokenizer.rules.inline.blockSkip.exec(y))!=null;)y=y.slice(0,g.index)+"["+G("a",g[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(g=this.tokenizer.rules.inline.escapedEmSt.exec(y))!=null;)y=y.slice(0,g.index+g[0].length-2)+"++"+y.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;r;)if(d||(k=""),d=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(A=>!!(i=A.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.escape(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.tag(r))r=r.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.link(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.reflink(r,this.tokens.links))r=r.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.emStrong(r,y,k))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.codespan(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.br(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.del(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.autolink(r,$t))r=r.substring(i.raw.length),s.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(r,$t))){if(f=r,this.options.extensions&&this.options.extensions.startInline){let A=1/0;const w=r.slice(1);let S;this.options.extensions.startInline.forEach(function(j){S=j.call({lexer:this},w),typeof S=="number"&&S>=0&&(A=Math.min(A,S))}),A<1/0&&A>=0&&(f=r.substring(0,A+1))}if(i=this.tokenizer.inlineText(f,ot))r=r.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(k=i.raw.slice(-1)),d=!0,a=s[s.length-1],a&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(r){const A="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(A);break}throw new Error(A)}}else r=r.substring(i.raw.length),s.push(i);return s}}class bt{constructor(r){this.options=r||e}code(r,s,i){const a=(s||"").match(/\S*/)[0];if(this.options.highlight){const f=this.options.highlight(r,a);f!=null&&f!==r&&(i=!0,r=f)}return r=r.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+u(a)+'">'+(i?r:u(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:u(r,!0))+`</code></pre>
`}blockquote(r){return`<blockquote>
${r}</blockquote>
`}html(r){return r}heading(r,s,i,a){return this.options.headerIds?`<h${s} id="${this.options.headerPrefix+a.slug(i)}">${r}</h${s}>
`:`<h${s}>${r}</h${s}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(r,s,i){const a=s?"ol":"ul";return"<"+a+(s&&i!==1?' start="'+i+'"':"")+`>
`+r+"</"+a+`>
`}listitem(r){return`<li>${r}</li>
`}checkbox(r){return"<input "+(r?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(r){return`<p>${r}</p>
`}table(r,s){return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+r+`</thead>
`+s+`</table>
`}tablerow(r){return`<tr>
${r}</tr>
`}tablecell(r,s){const i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+r+`</${i}>
`}strong(r){return`<strong>${r}</strong>`}em(r){return`<em>${r}</em>`}codespan(r){return`<code>${r}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(r){return`<del>${r}</del>`}link(r,s,i){if((r=$(this.options.sanitize,this.options.baseUrl,r))===null)return i;let a='<a href="'+r+'"';return s&&(a+=' title="'+s+'"'),a+=">"+i+"</a>",a}image(r,s,i){if((r=$(this.options.sanitize,this.options.baseUrl,r))===null)return i;let a=`<img src="${r}" alt="${i}"`;return s&&(a+=` title="${s}"`),a+=this.options.xhtml?"/>":">",a}text(r){return r}}class Tt{strong(r){return r}em(r){return r}codespan(r){return r}del(r){return r}html(r){return r}text(r){return r}link(r,s,i){return""+i}image(r,s,i){return""+i}br(){return""}}class zt{constructor(){this.seen={}}serialize(r){return r.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(r,s){let i=r,a=0;if(this.seen.hasOwnProperty(i)){a=this.seen[r];do a++,i=r+"-"+a;while(this.seen.hasOwnProperty(i))}return s||(this.seen[r]=a,this.seen[i]=0),i}slug(r,s={}){const i=this.serialize(r);return this.getNextSafeSlug(i,s.dryrun)}}class et{constructor(r){this.options=r||e,this.options.renderer=this.options.renderer||new bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Tt,this.slugger=new zt}static parse(r,s){return new et(s).parse(r)}static parseInline(r,s){return new et(s).parseInline(r)}parse(r,s=!0){let i,a,f,g,d,k,y,A,w,S,j,X,W,Y,D,ct,pt,K,nt,Q="";const ht=r.length;for(i=0;i<ht;i++)if(S=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(nt=this.options.extensions.renderers[S.type].call({parser:this},S),nt!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)))Q+=nt||"";else switch(S.type){case"space":continue;case"hr":Q+=this.renderer.hr();continue;case"heading":Q+=this.renderer.heading(this.parseInline(S.tokens),S.depth,m(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue;case"code":Q+=this.renderer.code(S.text,S.lang,S.escaped);continue;case"table":for(A="",y="",g=S.header.length,a=0;a<g;a++)y+=this.renderer.tablecell(this.parseInline(S.header[a].tokens),{header:!0,align:S.align[a]});for(A+=this.renderer.tablerow(y),w="",g=S.rows.length,a=0;a<g;a++){for(k=S.rows[a],y="",d=k.length,f=0;f<d;f++)y+=this.renderer.tablecell(this.parseInline(k[f].tokens),{header:!1,align:S.align[f]});w+=this.renderer.tablerow(y)}Q+=this.renderer.table(A,w);continue;case"blockquote":w=this.parse(S.tokens),Q+=this.renderer.blockquote(w);continue;case"list":for(j=S.ordered,X=S.start,W=S.loose,g=S.items.length,w="",a=0;a<g;a++)D=S.items[a],ct=D.checked,pt=D.task,Y="",D.task&&(K=this.renderer.checkbox(ct),W?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=K+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=K+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:K}):Y+=K),Y+=this.parse(D.tokens,W),w+=this.renderer.listitem(Y,pt,ct);Q+=this.renderer.list(w,j,X);continue;case"html":Q+=this.renderer.html(S.text);continue;case"paragraph":Q+=this.renderer.paragraph(this.parseInline(S.tokens));continue;case"text":for(w=S.tokens?this.parseInline(S.tokens):S.text;i+1<ht&&r[i+1].type==="text";)S=r[++i],w+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);Q+=s?this.renderer.paragraph(w):w;continue;default:{const Et='Token with "'+S.type+'" type was not found.';if(this.options.silent)return void console.error(Et);throw new Error(Et)}}return Q}parseInline(r,s){s=s||this.renderer;let i,a,f,g="";const d=r.length;for(i=0;i<d;i++)if(a=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(f=this.options.extensions.renderers[a.type].call({parser:this},a),f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))g+=f||"";else switch(a.type){case"escape":case"text":g+=s.text(a.text);break;case"html":g+=s.html(a.text);break;case"link":g+=s.link(a.href,a.title,this.parseInline(a.tokens,s));break;case"image":g+=s.image(a.href,a.title,a.text);break;case"strong":g+=s.strong(this.parseInline(a.tokens,s));break;case"em":g+=s.em(this.parseInline(a.tokens,s));break;case"codespan":g+=s.codespan(a.text);break;case"br":g+=s.br();break;case"del":g+=s.del(this.parseInline(a.tokens,s));break;default:{const k='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return g}}class ut{constructor(r){this.options=r||e}preprocess(r){return r}postprocess(r){return r}}wt(ut,"passThroughHooks",new Set(["preprocess","postprocess"]));function At(R,r){return(s,i,a)=>{typeof i=="function"&&(a=i,i=null);const f={...i},g=function(d,k,y){return A=>{if(A.message+=`
Please report this to https://github.com/markedjs/marked.`,d){const w="<p>An error occurred:</p><pre>"+u(A.message+"",!0)+"</pre>";return k?Promise.resolve(w):y?void y(null,w):w}if(k)return Promise.reject(A);if(!y)throw A;y(A)}}((i={...M.defaults,...f}).silent,i.async,a);if(s==null)return g(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return g(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(d){d&&d.sanitize&&!d.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(i),i.hooks&&(i.hooks.options=i),a){const d=i.highlight;let k;try{i.hooks&&(s=i.hooks.preprocess(s)),k=R(s,i)}catch(w){return g(w)}const y=function(w){let S;if(!w)try{i.walkTokens&&M.walkTokens(k,i.walkTokens),S=r(k,i),i.hooks&&(S=i.hooks.postprocess(S))}catch(j){w=j}return i.highlight=d,w?g(w):a(null,S)};if(!d||d.length<3||(delete i.highlight,!k.length))return y();let A=0;return M.walkTokens(k,function(w){w.type==="code"&&(A++,setTimeout(()=>{d(w.text,w.lang,function(S,j){if(S)return y(S);j!=null&&j!==w.text&&(w.text=j,w.escaped=!0),A--,A===0&&y()})},0))}),void(A===0&&y())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(s):s).then(d=>R(d,i)).then(d=>i.walkTokens?Promise.all(M.walkTokens(d,i.walkTokens)).then(()=>d):d).then(d=>r(d,i)).then(d=>i.hooks?i.hooks.postprocess(d):d).catch(g);try{i.hooks&&(s=i.hooks.preprocess(s));const d=R(s,i);i.walkTokens&&M.walkTokens(d,i.walkTokens);let k=r(d,i);return i.hooks&&(k=i.hooks.postprocess(k)),k}catch(d){return g(d)}}}function M(R,r,s){return At(tt.lex,et.parse)(R,r,s)}return M.options=M.setOptions=function(R){var r;return M.defaults={...M.defaults,...R},r=M.defaults,e=r,M},M.getDefaults=t,M.defaults=e,M.use=function(...R){const r=M.defaults.extensions||{renderers:{},childTokens:{}};R.forEach(s=>{const i={...s};if(i.async=M.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const f=r.renderers[a.name];r.renderers[a.name]=f?function(...g){let d=a.renderer.apply(this,g);return d===!1&&(d=f.apply(this,g)),d}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[a.level]?r[a.level].unshift(a.tokenizer):r[a.level]=[a.tokenizer],a.start&&(a.level==="block"?r.startBlock?r.startBlock.push(a.start):r.startBlock=[a.start]:a.level==="inline"&&(r.startInline?r.startInline.push(a.start):r.startInline=[a.start]))}a.childTokens&&(r.childTokens[a.name]=a.childTokens)}),i.extensions=r),s.renderer){const a=M.defaults.renderer||new bt;for(const f in s.renderer){const g=a[f];a[f]=(...d)=>{let k=s.renderer[f].apply(a,d);return k===!1&&(k=g.apply(a,d)),k}}i.renderer=a}if(s.tokenizer){const a=M.defaults.tokenizer||new at;for(const f in s.tokenizer){const g=a[f];a[f]=(...d)=>{let k=s.tokenizer[f].apply(a,d);return k===!1&&(k=g.apply(a,d)),k}}i.tokenizer=a}if(s.hooks){const a=M.defaults.hooks||new ut;for(const f in s.hooks){const g=a[f];ut.passThroughHooks.has(f)?a[f]=d=>{if(M.defaults.async)return Promise.resolve(s.hooks[f].call(a,d)).then(y=>g.call(a,y));const k=s.hooks[f].call(a,d);return g.call(a,k)}:a[f]=(...d)=>{let k=s.hooks[f].apply(a,d);return k===!1&&(k=g.apply(a,d)),k}}i.hooks=a}if(s.walkTokens){const a=M.defaults.walkTokens;i.walkTokens=function(f){let g=[];return g.push(s.walkTokens.call(this,f)),a&&(g=g.concat(a.call(this,f))),g}}M.setOptions(i)})},M.walkTokens=function(R,r){let s=[];for(const i of R)switch(s=s.concat(r.call(M,i)),i.type){case"table":for(const a of i.header)s=s.concat(M.walkTokens(a.tokens,r));for(const a of i.rows)for(const f of a)s=s.concat(M.walkTokens(f.tokens,r));break;case"list":s=s.concat(M.walkTokens(i.items,r));break;default:M.defaults.extensions&&M.defaults.extensions.childTokens&&M.defaults.extensions.childTokens[i.type]?M.defaults.extensions.childTokens[i.type].forEach(function(a){s=s.concat(M.walkTokens(i[a],r))}):i.tokens&&(s=s.concat(M.walkTokens(i.tokens,r)))}return s},M.parseInline=At(tt.lexInline,et.parseInline),M.Parser=et,M.parser=et.parse,M.Renderer=bt,M.TextRenderer=Tt,M.Lexer=tt,M.lexer=tt.lex,M.Tokenizer=at,M.Slugger=zt,M.Hooks=ut,M.parse=M,M.options,M.setOptions,M.use,M.walkTokens,M.parseInline,et.parse,tt.lex,()=>{let R,r,s=null;function i(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=M,s.document.write(`<!--
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
						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {

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

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
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
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const d=r.getConfig().url,k=typeof d=="string"?d:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;R=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:r.getState(),url:k}),"*")},500),window.addEventListener("message",f)})()}}function a(d){let k=r.getCurrentSlide(),y=k.querySelectorAll("aside.notes"),A=k.querySelector(".current-fragment"),w={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:r.getState()};if(k.hasAttribute("data-notes")&&(w.notes=k.getAttribute("data-notes"),w.whitespace="pre-wrap"),A){let S=A.querySelector("aside.notes");S?(w.notes=S.innerHTML,w.markdown=typeof S.getAttribute("data-markdown")=="string",y=null):A.hasAttribute("data-notes")&&(w.notes=A.getAttribute("data-notes"),w.whitespace="pre-wrap",y=null)}y&&y.length&&(y=Array.from(y).filter(S=>S.closest(".fragment")===null),w.notes=y.map(S=>S.innerHTML).join(`
`),w.markdown=y[0]&&typeof y[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(w),"*")}function f(d){if(function(k){try{return window.location.origin===k.source.location.origin}catch{return!1}}(d)){let k=JSON.parse(d.data);k&&k.namespace==="reveal-notes"&&k.type==="connected"?(clearInterval(R),g()):k&&k.namespace==="reveal-notes"&&k.type==="call"&&function(y,A,w){let S=r[y].apply(r,A);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:S,callId:w}),"*")}(k.methodName,k.arguments,k.callId)}}function g(){r.on("slidechanged",a),r.on("fragmentshown",a),r.on("fragmenthidden",a),r.on("overviewhidden",a),r.on("overviewshown",a),r.on("paused",a),r.on("resumed",a),a()}return{id:"notes",init:function(d){r=d,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",k=>{if(!s&&typeof k.data=="string"){let A;try{A=JSON.parse(k.data)}catch{}A&&A.namespace==="reveal-notes"&&A.type==="heartbeat"&&(y=k.source,s&&!s.closed?s.focus():(s=y,window.addEventListener("message",f),g()))}var y}),r.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){i()}))},open:i}}})})(Ft);var ye=Ft.exports;const ve=se(ye);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const _e=()=>{let x,n,t,e,l,h,c;function p(){n=document.createElement("div"),n.classList.add("searchbox"),n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.zIndex=10,n.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,t=n.querySelector(".searchinput"),t.style.width="240px",t.style.fontSize="14px",t.style.padding="4px 6px",t.style.color="#000",t.style.background="#fff",t.style.borderRadius="2px",t.style.border="0",t.style.outline="0",t.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",t.style["-webkit-appearance"]="none",x.getRevealElement().appendChild(n),t.addEventListener("keyup",function(o){o.keyCode===13?(o.preventDefault(),function(){if(h){var m=t.value;m===""?(c&&c.remove(),e=null):(c=new u("slidecontent"),e=c.apply(m),l=0)}e&&(e.length&&e.length<=l&&(l=0),e.length>l&&(x.slide(e[l].h,e[l].v),l++))}(),h=!1):h=!0},!1),_()}function b(){n||p(),n.style.display="inline",t.focus(),t.select()}function _(){n||p(),n.style.display="none",c&&c.remove()}function u(o,m){var z=document.getElementById(o)||document.body,E=m||"EM",C=new RegExp("^(?:"+E+"|SCRIPT|FORM)$"),O=["#ff6","#a0ffff","#9f9","#f99","#f6f"],$=[],Z=0,U="",B=[];this.setRegex=function(q){q=q.trim(),U=new RegExp("("+q+")","i")},this.getRegex=function(){return U.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(q){if(q!=null&&q&&U&&!C.test(q.nodeName)){if(q.hasChildNodes())for(var P=0;P<q.childNodes.length;P++)this.hiliteWords(q.childNodes[P]);var V,J;if(q.nodeType==3&&(V=q.nodeValue)&&(J=U.exec(V))){for(var G=q;G!=null&&G.nodeName!="SECTION";)G=G.parentNode;var lt=x.getIndices(G),at=B.length,L=!1;for(P=0;P<at;P++)B[P].h===lt.h&&B[P].v===lt.v&&(L=!0);L||B.push(lt),$[J[0].toLowerCase()]||($[J[0].toLowerCase()]=O[Z++%O.length]);var v=document.createElement(E);v.appendChild(document.createTextNode(J[0])),v.style.backgroundColor=$[J[0].toLowerCase()],v.style.fontStyle="inherit",v.style.color="#000";var ot=q.splitText(J.index);ot.nodeValue=ot.nodeValue.substring(J[0].length),q.parentNode.insertBefore(v,ot)}}},this.remove=function(){for(var q,P=document.getElementsByTagName(E);P.length&&(q=P[0]);)q.parentNode.replaceChild(q.firstChild,q)},this.apply=function(q){if(q!=null&&q)return this.remove(),this.setRegex(q),this.hiliteWords(z),B}}return{id:"search",init:o=>{x=o,x.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(m){m.key=="F"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),n||p(),n.style.display!=="inline"?b():_())},!1)},open:b}},Se={id:"decorations",init:x=>{$e(x)}};function $e(x){const n=x.getRevealElement(),t=Ot().public.repoName,e=document.createElement("div");e.setAttribute("id","decorations"),e.innerHTML=`
  <div id="overlay"></div>
  <div id="blue-pane"></div>
  <div id="purple-half-circle-top"></div>
  <div id="purple-half-circle-bottom"></div>
  <div id="yellow-strip"></div>
  <div id="yellow-half-strip"></div>
  <div id="touch-pane"><h3>Let's stay<br>in touch</h3></div>
  <div id="empowering"><h3>“Empowering researchers across all disciplines through innovative research software”</h3></div>
  <div id="logo-color"><img src="/${t}/nlesc_style_files/logo-fc.svg"></div>
  <div id="logo-part-white"><img src="/${t}/nlesc_style_files/logo-fc-part-white.svg"></div>
  <div id="logo-white"><img src="/${t}/nlesc_style_files/logo-fc-white.svg"></div>
  <div id="yellow-flag"><img class="left-e" src="/${t}/nlesc_style_files/e-logo.svg"></img></div>
  <div id="purple-half-circle-logo"><img class="logo" src="/${t}/nlesc_style_files/logo-fc-part-white.svg"></img></div>
  <div id="blue-strip"><div id="footer"></div></div>
  <img id="right-e" src="/${t}/nlesc_style_files/letter-e.svg"></img>
  <img id="left-e" src="/${t}/nlesc_style_files/e-logo.svg"></img>
  <div id="purple-blob">
    <div class="blob1"></div>
    <div class="blob2"></div>
    <div class="box"></div>
  </div>
  <div id="globe"><img src="/${t}/nlesc_style_files/globe.png"></img></div>
  <div id="mail"><img src="/${t}/nlesc_style_files/mail.png"></img></div>
  <div id="phone"><img src="/${t}/nlesc_style_files/phone.png"></img></div>
  `,n.prepend(e)}const Te={class:"flex relative box-border h-full reveal bg-eScienceWhite z-10"},ze={class:"slides flex h-full w-full"},Ae={"data-markdown":"","data-separator":"^\\r?\\n===\\r?\\n$","data-separator-vertical":"^\\r?\\n==\\r?\\n$","data-separator-notes":"^Note:"},Ee={props:{slidescontent:{type:String,default:"Missing Document"}},methods:{stripFrontmatter(x){return x.replace(/^---$.*?^---$/ms,"")}}},Re=Dt({...Ee,__name:"Slides",setup(x){return Wt(()=>{console.log("Slides Mounted"),Kt(()=>import("./CHC31Jbh.js"),[],import.meta.url).then(n=>{new n.default().initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[we,ve,Se,_e]})})}),(n,t)=>(ft(),yt("div",Te,[vt("div",ze,[vt("section",Ae,Xt(n.stripFrontmatter(x.slidescontent)),1)])]))}}),Ie={key:0,class:"overflow-hidden h-full border-8 rounded-xl border-eScienceWhite z-10"},Le={key:1,class:"flex justify-center items-center"},Ce={class:"flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12"},Be=Dt({__name:"[chapter]",async setup(x){let n,t;const e=Ot(),l=Yt();return[n,t]=Gt(()=>ne("/modules/"+l.params.module+"/").sort({order:1,$numeric:!0}).find()),n=await n,t(),""+e.public.baseURL,(h,c)=>{const p=Re,b=re,_=le;return ft(),te(_,null,{default:ee(({doc:u})=>[u.type==="slides"?(ft(),yt("div",Ie,[Rt(p,{slidescontent:u.plainText},null,8,["slidescontent"])])):(ft(),yt("div",Le,[vt("div",Ce,[Rt(b,{value:u,class:"font-body prose-lg max-w-4xl"},null,8,["value"])])]))]),_:1})}}});export{Be as default};
