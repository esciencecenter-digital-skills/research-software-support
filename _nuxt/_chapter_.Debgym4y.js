var Jt=Object.defineProperty;var Vt=(b,n,e)=>n in b?Jt(b,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):b[n]=e;var _t=(b,n,e)=>(Vt(b,typeof n!="symbol"?n+"":n,e),e);import{f as Ot,m as Ft,n as Wt,o as mt,c as kt,a as ut,b as St,w as Kt,g as Xt}from"./entry.C19Bivfv.js";import{g as Yt,c as Gt}from"./_commonjsHelpers.Cpj98o6Y.js";import te from"./nlesc-decorations.fio-yYFF.js";import ee from"./ContentRenderer.C9RbeKTp.js";import ne from"./ContentDoc.CkTPSGJg.js";import"./ContentRendererMarkdown.vue.D-WHB3dP.js";import"./head.CKwIhOqK.js";import"./vue.f36acd1f.DlctnXPL.js";import"./ContentQuery.DoXW6EX7.js";function se(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let it={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Dt=/[&<>"']/,re=new RegExp(Dt.source,"g"),Zt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ie=new RegExp(Zt.source,"g"),ae={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},It=b=>ae[b];function J(b,n){if(n){if(Dt.test(b))return b.replace(re,It)}else if(Zt.test(b))return b.replace(ie,It);return b}const oe=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Ut(b){return b.replace(oe,(n,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):"")}const le=/(^|[^\[])\^/g;function H(b,n){b=typeof b=="string"?b:b.source,n=n||"";const e={replace:(t,a)=>(a=(a=a.source||a).replace(le,"$1"),b=b.replace(t,a),e),getRegex:()=>new RegExp(b,n)};return e}const ce=/[^\w:]/g,pe=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Lt(b,n,e){if(b){let t;try{t=decodeURIComponent(Ut(e)).replace(ce,"").toLowerCase()}catch{return null}if(t.indexOf("javascript:")===0||t.indexOf("vbscript:")===0||t.indexOf("data:")===0)return null}n&&!pe.test(e)&&(e=function(t,a){gt[" "+t]||(he.test(t)?gt[" "+t]=t+"/":gt[" "+t]=xt(t,"/",!0)),t=gt[" "+t];const p=t.indexOf(":")===-1;return a.substring(0,2)==="//"?p?a:t.replace(ue,"$1")+a:a.charAt(0)==="/"?p?a:t.replace(de,"$1")+a:t+a}(n,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const gt={},he=/^[^:]+:\/*[^/]*$/,ue=/^([^:]+:)[\s\S]*$/,de=/^([^:]+:\/*[^/]*)[\s\S]*$/,wt={exec:function(){}};function Ct(b,n){const e=b.replace(/\|/g,(a,p,c)=>{let h=!1,x=p;for(;--x>=0&&c[x]==="\\";)h=!h;return h?"|":" |"}).split(/ \|/);let t=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>n)e.splice(n);else for(;e.length<n;)e.push("");for(;t<e.length;t++)e[t]=e[t].trim().replace(/\\\|/g,"|");return e}function xt(b,n,e){const t=b.length;if(t===0)return"";let a=0;for(;a<t;){const p=b.charAt(t-a-1);if(p!==n||e){if(p===n||!e)break;a++}else a++}return b.slice(0,t-a)}function Mt(b,n){if(n<1)return"";let e="";for(;n>1;)1&n&&(e+=b),n>>=1,b+=b;return e+b}function Nt(b,n,e,t){const a=n.href,p=n.title?J(n.title):null,c=b[1].replace(/\\([\[\]])/g,"$1");if(b[0].charAt(0)!=="!"){t.state.inLink=!0;const h={type:"link",raw:e,href:a,title:p,text:c,tokens:t.inlineTokens(c)};return t.state.inLink=!1,h}return{type:"image",raw:e,href:a,title:p,text:J(c)}}class vt{constructor(n){this.options=n||it}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:xt(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],a=function(p,c){const h=p.match(/^(\s+)(?:```)/);if(h===null)return c;const x=h[1];return c.split(`
`).map(v=>{const g=v.match(/^\s+/);if(g===null)return v;const[l]=g;return l.length>=x.length?v.slice(x.length):v}).join(`
`)}(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:a}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const a=xt(t,"#");this.options.pedantic?t=a.trim():a&&!/ $/.test(a)||(t=a.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const t=e[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const p=this.lexer.blockTokens(t);return this.lexer.state.top=a,{type:"blockquote",raw:e[0],tokens:p,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t,a,p,c,h,x,v,g,l,m,z,E,C=e[1].trim();const O=C.length>1,$={type:"list",raw:"",ordered:O,start:O?+C.slice(0,-1):"",loose:!1,items:[]};C=O?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=O?C:"[*+-]");const Z=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(E=!1,e=Z.exec(n))&&!this.rules.block.hr.test(n);){if(t=e[0],n=n.substring(t.length),g=e[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),l=n.split(`
`,1)[0],this.options.pedantic?(c=2,z=g.trimLeft()):(c=e[2].search(/[^ ]/),c=c>4?1:c,z=g.slice(c),c+=e[1].length),x=!1,!g&&/^ *$/.test(l)&&(t+=l+`
`,n=n.substring(l.length+1),E=!0),!E){const B=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),q=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),F=new RegExp(`^ {0,${Math.min(3,c-1)}}#`);for(;n&&(m=n.split(`
`,1)[0],l=m,this.options.pedantic&&(l=l.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!P.test(l))&&!F.test(l)&&!B.test(l)&&!q.test(n);){if(l.search(/[^ ]/)>=c||!l.trim())z+=`
`+l.slice(c);else{if(x||g.search(/[^ ]/)>=4||P.test(g)||F.test(g)||q.test(g))break;z+=`
`+l}x||l.trim()||(x=!0),t+=m+`
`,n=n.substring(m.length+1),g=l.slice(c)}}$.loose||(v?$.loose=!0:/\n *\n *$/.test(t)&&(v=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(z),a&&(p=a[0]!=="[ ] ",z=z.replace(/^\[[ xX]\] +/,""))),$.items.push({type:"list_item",raw:t,task:!!a,checked:p,loose:!1,text:z}),$.raw+=t}$.items[$.items.length-1].raw=t.trimRight(),$.items[$.items.length-1].text=z.trimRight(),$.raw=$.raw.trimRight();const U=$.items.length;for(h=0;h<U;h++)if(this.lexer.state.top=!1,$.items[h].tokens=this.lexer.blockTokens($.items[h].text,[]),!$.loose){const B=$.items[h].tokens.filter(P=>P.type==="space"),q=B.length>0&&B.some(P=>/\n.*\n/.test(P.raw));$.loose=q}if($.loose)for(h=0;h<U;h++)$.items[h].loose=!0;return $}}html(n){const e=this.rules.block.html.exec(n);if(e){const t={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(e[0]):J(e[0]);t.type="paragraph",t.text=a,t.tokens=this.lexer.inline(a)}return t}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),a=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",p=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:a,title:p}}}table(n){const e=this.rules.block.table.exec(n);if(e){const t={type:"table",header:Ct(e[1]).map(a=>({text:a})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){t.raw=e[0];let a,p,c,h,x=t.align.length;for(a=0;a<x;a++)/^ *-+: *$/.test(t.align[a])?t.align[a]="right":/^ *:-+: *$/.test(t.align[a])?t.align[a]="center":/^ *:-+ *$/.test(t.align[a])?t.align[a]="left":t.align[a]=null;for(x=t.rows.length,a=0;a<x;a++)t.rows[a]=Ct(t.rows[a],t.header.length).map(v=>({text:v}));for(x=t.header.length,p=0;p<x;p++)t.header[p].tokens=this.lexer.inline(t.header[p].text);for(x=t.rows.length,p=0;p<x;p++)for(h=t.rows[p],c=0;c<h.length;c++)h[c].tokens=this.lexer.inline(h[c].text);return t}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:J(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):J(e[0]):e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const c=xt(t.slice(0,-1),"\\");if((t.length-c.length)%2==0)return}else{const c=function(h,x){if(h.indexOf(x[1])===-1)return-1;const v=h.length;let g=0,l=0;for(;l<v;l++)if(h[l]==="\\")l++;else if(h[l]===x[0])g++;else if(h[l]===x[1]&&(g--,g<0))return l;return-1}(e[2],"()");if(c>-1){const h=(e[0].indexOf("!")===0?5:4)+e[1].length+c;e[2]=e[2].substring(0,c),e[0]=e[0].substring(0,h).trim(),e[3]=""}}let a=e[2],p="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);c&&(a=c[1],p=c[3])}else p=e[3]?e[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(t)?a.slice(1):a.slice(1,-1)),Nt(e,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:p&&p.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let a=(t[2]||t[1]).replace(/\s+/g," ");if(a=e[a.toLowerCase()],!a){const p=t[0].charAt(0);return{type:"text",raw:p,text:p}}return Nt(t,a,t[0],this.lexer)}}emStrong(n,e,t=""){let a=this.rules.inline.emStrong.lDelim.exec(n);if(!a||a[3]&&t.match(/[\p{L}\p{N}]/u))return;const p=a[1]||a[2]||"";if(!p||p&&(t===""||this.rules.inline.punctuation.exec(t))){const c=a[0].length-1;let h,x,v=c,g=0;const l=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,e=e.slice(-1*n.length+c);(a=l.exec(e))!=null;){if(h=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!h)continue;if(x=h.length,a[3]||a[4]){v+=x;continue}if((a[5]||a[6])&&c%3&&!((c+x)%3)){g+=x;continue}if(v-=x,v>0)continue;x=Math.min(x,x+v+g);const m=n.slice(0,c+a.index+(a[0].length-h.length)+x);if(Math.min(c,x)%2){const E=m.slice(1,-1);return{type:"em",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}const z=m.slice(2,-2);return{type:"strong",raw:m,text:z,tokens:this.lexer.inlineTokens(z)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const a=/[^ ]/.test(t),p=/^ /.test(t)&&/ $/.test(t);return a&&p&&(t=t.substring(1,t.length-1)),t=J(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n,e){const t=this.rules.inline.autolink.exec(n);if(t){let a,p;return t[2]==="@"?(a=J(this.options.mangle?e(t[1]):t[1]),p="mailto:"+a):(a=J(t[1]),p=a),{type:"link",raw:t[0],text:a,href:p,tokens:[{type:"text",raw:a,text:a}]}}}url(n,e){let t;if(t=this.rules.inline.url.exec(n)){let a,p;if(t[2]==="@")a=J(this.options.mangle?e(t[0]):t[0]),p="mailto:"+a;else{let c;do c=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])[0];while(c!==t[0]);a=J(t[0]),p=t[1]==="www."?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:a,href:p,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(n,e){const t=this.rules.inline.text.exec(n);if(t){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):J(t[0]):t[0]:J(this.options.smartypants?e(t[0]):t[0]),{type:"text",raw:t[0],text:a}}}}const N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:wt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};N.def=H(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.listItemStart=H(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=H(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=H(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.blockquote=H(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal={...N},N.gfm={...N.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},N.gfm.table=H(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.gfm.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",N.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.pedantic={...N.normal,html:H(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:wt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:H(N.normal._paragraph).replace("hr",N.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:wt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:wt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ge(b){return b.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function qt(b){let n,e,t="";const a=b.length;for(n=0;n<a;n++)e=b.charCodeAt(n),Math.random()>.5&&(e="x"+e.toString(16)),t+="&#"+e+";";return t}T._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",T.punctuation=H(T.punctuation).replace(/punctuation/g,T._punctuation).getRegex(),T.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,T.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,T._comment=H(N._comment).replace("(?:-->|$)","-->").getRegex(),T.emStrong.lDelim=H(T.emStrong.lDelim).replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimAst=H(T.emStrong.rDelimAst,"g").replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimUnd=H(T.emStrong.rDelimUnd,"g").replace(/punct/g,T._punctuation).getRegex(),T._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,T.autolink=H(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex(),T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,T.tag=H(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex(),T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,T.link=H(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex(),T.reflink=H(T.reflink).replace("label",T._label).replace("ref",N._label).getRegex(),T.nolink=H(T.nolink).replace("ref",N._label).getRegex(),T.reflinkSearch=H(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex(),T.normal={...T},T.pedantic={...T.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()},T.gfm={...T.normal,escape:H(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},T.gfm.url=H(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex(),T.breaks={...T.gfm,br:H(T.br).replace("{2,}","*").getRegex(),text:H(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class st{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||it,this.options.tokenizer=this.options.tokenizer||new vt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:N.normal,inline:T.normal};this.options.pedantic?(e.block=N.pedantic,e.inline=T.pedantic):this.options.gfm&&(e.block=N.gfm,this.options.breaks?e.inline=T.breaks:e.inline=T.gfm),this.tokenizer.rules=e}static get rules(){return{block:N,inline:T}}static lex(n,e){return new st(e).lex(n)}static lexInline(n,e){return new st(e).inlineTokens(n)}lex(n){let e;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){let t,a,p,c;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,(h,x,v)=>x+"    ".repeat(v.length));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>!!(t=h.call({lexer:this},n,e))&&(n=n.substring(t.raw.length),e.push(t),!0))))if(t=this.tokenizer.space(n))n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);else if(t=this.tokenizer.code(n))n=n.substring(t.raw.length),a=e[e.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?e.push(t):(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(t=this.tokenizer.fences(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.heading(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.hr(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.blockquote(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.list(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.html(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.def(n))n=n.substring(t.raw.length),a=e[e.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title}):(a.raw+=`
`+t.raw,a.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(t=this.tokenizer.table(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.lheading(n))n=n.substring(t.raw.length),e.push(t);else{if(p=n,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const x=n.slice(1);let v;this.options.extensions.startBlock.forEach(function(g){v=g.call({lexer:this},x),typeof v=="number"&&v>=0&&(h=Math.min(h,v))}),h<1/0&&h>=0&&(p=n.substring(0,h+1))}if(this.state.top&&(t=this.tokenizer.paragraph(p)))a=e[e.length-1],c&&a.type==="paragraph"?(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(t),c=p.length!==n.length,n=n.substring(t.raw.length);else if(t=this.tokenizer.text(n))n=n.substring(t.raw.length),a=e[e.length-1],a&&a.type==="text"?(a.raw+=`
`+t.raw,a.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):e.push(t);else if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,a,p,c,h,x,v=n;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(v))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(v=v.slice(0,c.index)+"["+Mt("a",c[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(v))!=null;)v=v.slice(0,c.index)+"["+Mt("a",c[0].length-2)+"]"+v.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.escapedEmSt.exec(v))!=null;)v=v.slice(0,c.index+c[0].length-2)+"++"+v.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(h||(x=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>!!(t=g.call({lexer:this},n,e))&&(n=n.substring(t.raw.length),e.push(t),!0))))if(t=this.tokenizer.escape(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.tag(n))n=n.substring(t.raw.length),a=e[e.length-1],a&&t.type==="text"&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(t=this.tokenizer.link(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(t.raw.length),a=e[e.length-1],a&&t.type==="text"&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(t=this.tokenizer.emStrong(n,v,x))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.codespan(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.br(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.del(n))n=n.substring(t.raw.length),e.push(t);else if(t=this.tokenizer.autolink(n,qt))n=n.substring(t.raw.length),e.push(t);else if(this.state.inLink||!(t=this.tokenizer.url(n,qt))){if(p=n,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const l=n.slice(1);let m;this.options.extensions.startInline.forEach(function(z){m=z.call({lexer:this},l),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(p=n.substring(0,g+1))}if(t=this.tokenizer.inlineText(p,ge))n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(x=t.raw.slice(-1)),h=!0,a=e[e.length-1],a&&a.type==="text"?(a.raw+=t.raw,a.text+=t.text):e.push(t);else if(n){const g="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(g);break}throw new Error(g)}}else n=n.substring(t.raw.length),e.push(t);return e}}class $t{constructor(n){this.options=n||it}code(n,e,t){const a=(e||"").match(/\S*/)[0];if(this.options.highlight){const p=this.options.highlight(n,a);p!=null&&p!==n&&(t=!0,n=p)}return n=n.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+J(a)+'">'+(t?n:J(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:J(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n){return n}heading(n,e,t,a){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+a.slug(t)}">${n}</h${e}>
`:`<h${e}>${n}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(n,e,t){const a=e?"ol":"ul";return"<"+a+(e&&t!==1?' start="'+t+'"':"")+`>
`+n+"</"+a+`>
`}listitem(n){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){if((n=Lt(this.options.sanitize,this.options.baseUrl,n))===null)return t;let a='<a href="'+n+'"';return e&&(a+=' title="'+e+'"'),a+=">"+t+"</a>",a}image(n,e,t){if((n=Lt(this.options.sanitize,this.options.baseUrl,n))===null)return t;let a=`<img src="${n}" alt="${t}"`;return e&&(a+=` title="${e}"`),a+=this.options.xhtml?"/>":">",a}text(n){return n}}class Bt{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class Ht{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,e){let t=n,a=0;if(this.seen.hasOwnProperty(t)){a=this.seen[n];do a++,t=n+"-"+a;while(this.seen.hasOwnProperty(t))}return e||(this.seen[n]=a,this.seen[t]=0),t}slug(n,e={}){const t=this.serialize(n);return this.getNextSafeSlug(t,e.dryrun)}}class rt{constructor(n){this.options=n||it,this.options.renderer=this.options.renderer||new $t,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Bt,this.slugger=new Ht}static parse(n,e){return new rt(e).parse(n)}static parseInline(n,e){return new rt(e).parseInline(n)}parse(n,e=!0){let t,a,p,c,h,x,v,g,l,m,z,E,C,O,$,Z,U,B,q,P="";const F=n.length;for(t=0;t<F;t++)if(m=n[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(q=this.options.extensions.renderers[m.type].call({parser:this},m),q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)))P+=q||"";else switch(m.type){case"space":continue;case"hr":P+=this.renderer.hr();continue;case"heading":P+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Ut(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue;case"code":P+=this.renderer.code(m.text,m.lang,m.escaped);continue;case"table":for(g="",v="",c=m.header.length,a=0;a<c;a++)v+=this.renderer.tablecell(this.parseInline(m.header[a].tokens),{header:!0,align:m.align[a]});for(g+=this.renderer.tablerow(v),l="",c=m.rows.length,a=0;a<c;a++){for(x=m.rows[a],v="",h=x.length,p=0;p<h;p++)v+=this.renderer.tablecell(this.parseInline(x[p].tokens),{header:!1,align:m.align[p]});l+=this.renderer.tablerow(v)}P+=this.renderer.table(g,l);continue;case"blockquote":l=this.parse(m.tokens),P+=this.renderer.blockquote(l);continue;case"list":for(z=m.ordered,E=m.start,C=m.loose,c=m.items.length,l="",a=0;a<c;a++)$=m.items[a],Z=$.checked,U=$.task,O="",$.task&&(B=this.renderer.checkbox(Z),C?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=B+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=B+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:B}):O+=B),O+=this.parse($.tokens,C),l+=this.renderer.listitem(O,U,Z);P+=this.renderer.list(l,z,E);continue;case"html":P+=this.renderer.html(m.text);continue;case"paragraph":P+=this.renderer.paragraph(this.parseInline(m.tokens));continue;case"text":for(l=m.tokens?this.parseInline(m.tokens):m.text;t+1<F&&n[t+1].type==="text";)m=n[++t],l+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);P+=e?this.renderer.paragraph(l):l;continue;default:{const V='Token with "'+m.type+'" type was not found.';if(this.options.silent)return void console.error(V);throw new Error(V)}}return P}parseInline(n,e){e=e||this.renderer;let t,a,p,c="";const h=n.length;for(t=0;t<h;t++)if(a=n[t],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(p=this.options.extensions.renderers[a.type].call({parser:this},a),p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))c+=p||"";else switch(a.type){case"escape":case"text":c+=e.text(a.text);break;case"html":c+=e.html(a.text);break;case"link":c+=e.link(a.href,a.title,this.parseInline(a.tokens,e));break;case"image":c+=e.image(a.href,a.title,a.text);break;case"strong":c+=e.strong(this.parseInline(a.tokens,e));break;case"em":c+=e.em(this.parseInline(a.tokens,e));break;case"codespan":c+=e.codespan(a.text);break;case"br":c+=e.br();break;case"del":c+=e.del(this.parseInline(a.tokens,e));break;default:{const x='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(x);throw new Error(x)}}return c}}class bt{constructor(n){this.options=n||it}preprocess(n){return n}postprocess(n){return n}}_t(bt,"passThroughHooks",new Set(["preprocess","postprocess"]));function jt(b,n){return(e,t,a)=>{typeof t=="function"&&(a=t,t=null);const p={...t},c=function(h,x,v){return g=>{if(g.message+=`
Please report this to https://github.com/markedjs/marked.`,h){const l="<p>An error occurred:</p><pre>"+J(g.message+"",!0)+"</pre>";return x?Promise.resolve(l):v?void v(null,l):l}if(x)return Promise.reject(g);if(!v)throw g;v(g)}}((t={...I.defaults,...p}).silent,t.async,a);if(e==null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(function(h){h&&h.sanitize&&!h.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(t),t.hooks&&(t.hooks.options=t),a){const h=t.highlight;let x;try{t.hooks&&(e=t.hooks.preprocess(e)),x=b(e,t)}catch(l){return c(l)}const v=function(l){let m;if(!l)try{t.walkTokens&&I.walkTokens(x,t.walkTokens),m=n(x,t),t.hooks&&(m=t.hooks.postprocess(m))}catch(z){l=z}return t.highlight=h,l?c(l):a(null,m)};if(!h||h.length<3||(delete t.highlight,!x.length))return v();let g=0;return I.walkTokens(x,function(l){l.type==="code"&&(g++,setTimeout(()=>{h(l.text,l.lang,function(m,z){if(m)return v(m);z!=null&&z!==l.text&&(l.text=z,l.escaped=!0),g--,g===0&&v()})},0))}),void(g===0&&v())}if(t.async)return Promise.resolve(t.hooks?t.hooks.preprocess(e):e).then(h=>b(h,t)).then(h=>t.walkTokens?Promise.all(I.walkTokens(h,t.walkTokens)).then(()=>h):h).then(h=>n(h,t)).then(h=>t.hooks?t.hooks.postprocess(h):h).catch(c);try{t.hooks&&(e=t.hooks.preprocess(e));const h=b(e,t);t.walkTokens&&I.walkTokens(h,t.walkTokens);let x=n(h,t);return t.hooks&&(x=t.hooks.postprocess(x)),x}catch(h){return c(h)}}}function I(b,n,e){return jt(st.lex,rt.parse)(b,n,e)}I.options=I.setOptions=function(b){var n;return I.defaults={...I.defaults,...b},n=I.defaults,it=n,I},I.getDefaults=se,I.defaults=it,I.use=function(...b){const n=I.defaults.extensions||{renderers:{},childTokens:{}};b.forEach(e=>{const t={...e};if(t.async=I.defaults.async||t.async||!1,e.extensions&&(e.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const p=n.renderers[a.name];n.renderers[a.name]=p?function(...c){let h=a.renderer.apply(this,c);return h===!1&&(h=p.apply(this,c)),h}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[a.level]?n[a.level].unshift(a.tokenizer):n[a.level]=[a.tokenizer],a.start&&(a.level==="block"?n.startBlock?n.startBlock.push(a.start):n.startBlock=[a.start]:a.level==="inline"&&(n.startInline?n.startInline.push(a.start):n.startInline=[a.start]))}a.childTokens&&(n.childTokens[a.name]=a.childTokens)}),t.extensions=n),e.renderer){const a=I.defaults.renderer||new $t;for(const p in e.renderer){const c=a[p];a[p]=(...h)=>{let x=e.renderer[p].apply(a,h);return x===!1&&(x=c.apply(a,h)),x}}t.renderer=a}if(e.tokenizer){const a=I.defaults.tokenizer||new vt;for(const p in e.tokenizer){const c=a[p];a[p]=(...h)=>{let x=e.tokenizer[p].apply(a,h);return x===!1&&(x=c.apply(a,h)),x}}t.tokenizer=a}if(e.hooks){const a=I.defaults.hooks||new bt;for(const p in e.hooks){const c=a[p];bt.passThroughHooks.has(p)?a[p]=h=>{if(I.defaults.async)return Promise.resolve(e.hooks[p].call(a,h)).then(v=>c.call(a,v));const x=e.hooks[p].call(a,h);return c.call(a,x)}:a[p]=(...h)=>{let x=e.hooks[p].apply(a,h);return x===!1&&(x=c.apply(a,h)),x}}t.hooks=a}if(e.walkTokens){const a=I.defaults.walkTokens;t.walkTokens=function(p){let c=[];return c.push(e.walkTokens.call(this,p)),a&&(c=c.concat(a.call(this,p))),c}}I.setOptions(t)})},I.walkTokens=function(b,n){let e=[];for(const t of b)switch(e=e.concat(n.call(I,t)),t.type){case"table":for(const a of t.header)e=e.concat(I.walkTokens(a.tokens,n));for(const a of t.rows)for(const p of a)e=e.concat(I.walkTokens(p.tokens,n));break;case"list":e=e.concat(I.walkTokens(t.items,n));break;default:I.defaults.extensions&&I.defaults.extensions.childTokens&&I.defaults.extensions.childTokens[t.type]?I.defaults.extensions.childTokens[t.type].forEach(function(a){e=e.concat(I.walkTokens(t[a],n))}):t.tokens&&(e=e.concat(I.walkTokens(t.tokens,n)))}return e},I.parseInline=jt(st.lexInline,rt.parseInline),I.Parser=rt,I.parser=rt.parse,I.Renderer=$t,I.TextRenderer=Bt,I.Lexer=st,I.lexer=st.lex,I.Tokenizer=vt,I.Slugger=Ht,I.Hooks=bt,I.parse=I,I.options,I.setOptions,I.use,I.walkTokens,I.parseInline,rt.parse,st.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Pt="__SCRIPT_END__",ft=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,fe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},me=()=>{let b;function n(g){let l=(g.querySelector("[data-template]")||g.querySelector("script")||g).textContent;l=l.replace(new RegExp(Pt,"g"),"<\/script>");const m=l.match(/^\n?(\s*)/)[1].length,z=l.match(/^\n?(\t*)/)[1].length;return z>0?l=l.replace(new RegExp("\\n?\\t{"+z+"}(.*)","g"),function(E,C){return`
`+C}):m>1&&(l=l.replace(new RegExp("\\n? {"+m+"}(.*)","g"),function(E,C){return`
`+C})),l}function e(g){const l=g.attributes,m=[];for(let z=0,E=l.length;z<E;z++){const C=l[z].name,O=l[z].value;/data\-(markdown|separator|vertical|notes)/gi.test(C)||(O?m.push(C+'="'+O+'"'):m.push(C))}return m.join(" ")}function t(g){var m;const l=(m=b==null?void 0:b.getConfig)==null?void 0:m.call(b).markdown;return(g=g||{}).separator=g.separator||(l==null?void 0:l.separator)||`\r?
---\r?
`,g.verticalSeparator=g.verticalSeparator||(l==null?void 0:l.verticalSeparator)||null,g.notesSeparator=g.notesSeparator||(l==null?void 0:l.notesSeparator)||"^s*notes?:",g.attributes=g.attributes||"",g}function a(g,l){l=t(l);const m=g.split(new RegExp(l.notesSeparator,"mgi"));return m.length===2&&(g=m[0]+'<aside class="notes">'+I(m[1].trim())+"</aside>"),'<script type="text/template">'+(g=g.replace(/<\/script>/g,Pt))+"<\/script>"}function p(g,l){l=t(l);const m=new RegExp(l.separator+(l.verticalSeparator?"|"+l.verticalSeparator:""),"mg"),z=new RegExp(l.separator);let E,C,O,$=0,Z=!0,U=[];for(;E=m.exec(g);)C=z.test(E[0]),!C&&Z&&U.push([]),O=g.substring($,E.index),C&&Z?U.push(O):U[U.length-1].push(O),$=m.lastIndex,Z=C;(Z?U:U[U.length-1]).push(g.substring($));let B="";for(let q=0,P=U.length;q<P;q++)U[q]instanceof Array?(B+="<section "+l.attributes+">",U[q].forEach(function(F){B+="<section data-markdown>"+a(F,l)+"</section>"}),B+="</section>"):B+="<section "+l.attributes+" data-markdown>"+a(U[q],l)+"</section>";return B}function c(g){return new Promise(function(l){const m=[];[].slice.call(g.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(z,E){z.getAttribute("data-markdown").length?m.push(function(C){return new Promise(function(O,$){const Z=new XMLHttpRequest,U=C.getAttribute("data-markdown"),B=C.getAttribute("data-charset");B!==null&&B!==""&&Z.overrideMimeType("text/html; charset="+B),Z.onreadystatechange=(function(q,P){P.readyState===4&&(P.status>=200&&P.status<300||P.status===0?O(P,U):$(P,U))}).bind(this,C,Z),Z.open("GET",U,!0);try{Z.send()}catch(q){console.warn("Failed to get the Markdown file "+U+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+q),O(Z,U)}})}(z).then(function(C,O){z.outerHTML=p(C.responseText,{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:e(z)})},function(C,O){z.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+O+" failed with HTTP status "+C.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):z.outerHTML=p(n(z),{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:e(z)})}),Promise.all(m).then(l)})}function h(g,l,m){const z=new RegExp(m,"mg"),E=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let C,O,$=g.nodeValue;if(C=z.exec($)){const Z=C[1];for($=$.substring(0,C.index)+$.substring(z.lastIndex),g.nodeValue=$;O=E.exec(Z);)O[2]?l.setAttribute(O[1],O[2]):l.setAttribute(O[3],"");return!0}return!1}function x(g,l,m,z,E){if(l!==null&&l.childNodes!==void 0&&l.childNodes.length>0){let C=l;for(let O=0;O<l.childNodes.length;O++){const $=l.childNodes[O];if(O>0){let U=O-1;for(;U>=0;){const B=l.childNodes[U];if(typeof B.setAttribute=="function"&&B.tagName!=="BR"){C=B;break}U-=1}}let Z=g;$.nodeName==="section"&&(Z=$,C=$),typeof $.setAttribute!="function"&&$.nodeType!==Node.COMMENT_NODE||x(Z,$,C,z,E)}}l.nodeType===Node.COMMENT_NODE&&h(l,m,z)===!1&&h(l,g,E)}function v(){const g=b.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(g).forEach(function(l){l.setAttribute("data-markdown-parsed",!0);const m=l.querySelector("aside.notes"),z=n(l);l.innerHTML=I(z),x(l,l,null,l.getAttribute("data-element-attributes")||l.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",l.getAttribute("data-attributes")||l.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),m&&l.appendChild(m)}),Promise.resolve()}return{id:"markdown",init:function(g){b=g;let{renderer:l,animateLists:m,...z}=b.getConfig().markdown||{};return l||(l=new I.Renderer,l.code=(E,C)=>{let O="",$="";if(ft.test(C)){let Z=C.match(ft)[2];Z&&(O=`data-ln-start-from="${Z.trim()}"`),$=C.match(ft)[3].trim(),$=`data-line-numbers="${$}"`,C=C.replace(ft,"").trim()}return`<pre><code ${$} ${O} class="${C}">${E=E.replace(/([&<>'"])/g,Z=>fe[Z])}</code></pre>`}),m===!0&&(l.listitem=E=>`<li class="fragment">${E}</li>`),I.setOptions({renderer:l,...z}),c(b.getRevealElement()).then(v)},processSlides:c,convertSlides:v,slidify:p,marked:I}};var Qt={exports:{}};(function(b,n){(function(e,t){b.exports=t()})(Gt,function(){function e(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let t={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const a=/[&<>"']/,p=new RegExp(a.source,"g"),c=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,h=new RegExp(c.source,"g"),x={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},v=R=>x[R];function g(R,i){if(i){if(a.test(R))return R.replace(p,v)}else if(c.test(R))return R.replace(h,v);return R}const l=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(R){return R.replace(l,(i,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const z=/(^|[^\[])\^/g;function E(R,i){R=typeof R=="string"?R:R.source,i=i||"";const s={replace:(r,o)=>(o=(o=o.source||o).replace(z,"$1"),R=R.replace(r,o),s),getRegex:()=>new RegExp(R,i)};return s}const C=/[^\w:]/g,O=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $(R,i,s){if(R){let r;try{r=decodeURIComponent(m(s)).replace(C,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}i&&!O.test(s)&&(s=function(r,o){Z[" "+r]||(U.test(r)?Z[" "+r]=r+"/":Z[" "+r]=V(r,"/",!0)),r=Z[" "+r];const f=r.indexOf(":")===-1;return o.substring(0,2)==="//"?f?o:r.replace(B,"$1")+o:o.charAt(0)==="/"?f?o:r.replace(q,"$1")+o:r+o}(i,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const Z={},U=/^[^:]+:\/*[^/]*$/,B=/^([^:]+:)[\s\S]*$/,q=/^([^:]+:\/*[^/]*)[\s\S]*$/,P={exec:function(){}};function F(R,i){const s=R.replace(/\|/g,(o,f,d)=>{let u=!1,k=f;for(;--k>=0&&d[k]==="\\";)u=!u;return u?"|":" |"}).split(/ \|/);let r=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>i)s.splice(i);else for(;s.length<i;)s.push("");for(;r<s.length;r++)s[r]=s[r].trim().replace(/\\\|/g,"|");return s}function V(R,i,s){const r=R.length;if(r===0)return"";let o=0;for(;o<r;){const f=R.charAt(r-o-1);if(f!==i||s){if(f===i||!s)break;o++}else o++}return R.slice(0,r-o)}function G(R,i){if(i<1)return"";let s="";for(;i>1;)1&i&&(s+=R),i>>=1,R+=R;return s+R}function at(R,i,s,r){const o=i.href,f=i.title?g(i.title):null,d=R[1].replace(/\\([\[\]])/g,"$1");if(R[0].charAt(0)!=="!"){r.state.inLink=!0;const u={type:"link",raw:s,href:o,title:f,text:d,tokens:r.inlineTokens(d)};return r.state.inLink=!1,u}return{type:"image",raw:s,href:o,title:f,text:g(d)}}class ot{constructor(i){this.options=i||t}space(i){const s=this.rules.block.newline.exec(i);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(i){const s=this.rules.block.code.exec(i);if(s){const r=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?r:V(r,`
`)}}}fences(i){const s=this.rules.block.fences.exec(i);if(s){const r=s[0],o=function(f,d){const u=f.match(/^(\s+)(?:```)/);if(u===null)return d;const k=u[1];return d.split(`
`).map(y=>{const A=y.match(/^\s+/);if(A===null)return y;const[w]=A;return w.length>=k.length?y.slice(k.length):y}).join(`
`)}(r,s[3]||"");return{type:"code",raw:r,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:o}}}heading(i){const s=this.rules.block.heading.exec(i);if(s){let r=s[2].trim();if(/#$/.test(r)){const o=V(r,"#");this.options.pedantic?r=o.trim():o&&!/ $/.test(o)||(r=o.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:r,tokens:this.lexer.inline(r)}}}hr(i){const s=this.rules.block.hr.exec(i);if(s)return{type:"hr",raw:s[0]}}blockquote(i){const s=this.rules.block.blockquote.exec(i);if(s){const r=s[0].replace(/^ *>[ \t]?/gm,""),o=this.lexer.state.top;this.lexer.state.top=!0;const f=this.lexer.blockTokens(r);return this.lexer.state.top=o,{type:"blockquote",raw:s[0],tokens:f,text:r}}}list(i){let s=this.rules.block.list.exec(i);if(s){let r,o,f,d,u,k,y,A,w,S,j,X,W=s[1].trim();const Y=W.length>1,D={type:"list",raw:"",ordered:Y,start:Y?+W.slice(0,-1):"",loose:!1,items:[]};W=Y?`\\d{1,9}\\${W.slice(-1)}`:`\\${W}`,this.options.pedantic&&(W=Y?W:"[*+-]");const ct=new RegExp(`^( {0,3}${W})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;i&&(X=!1,s=ct.exec(i))&&!this.rules.block.hr.test(i);){if(r=s[0],i=i.substring(r.length),A=s[2].split(`
`,1)[0].replace(/^\t+/,K=>" ".repeat(3*K.length)),w=i.split(`
`,1)[0],this.options.pedantic?(d=2,j=A.trimLeft()):(d=s[2].search(/[^ ]/),d=d>4?1:d,j=A.slice(d),d+=s[1].length),k=!1,!A&&/^ *$/.test(w)&&(r+=w+`
`,i=i.substring(w.length+1),X=!0),!X){const K=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),nt=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),ht=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;i&&(S=i.split(`
`,1)[0],w=S,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!Q.test(w))&&!ht.test(w)&&!K.test(w)&&!nt.test(i);){if(w.search(/[^ ]/)>=d||!w.trim())j+=`
`+w.slice(d);else{if(k||A.search(/[^ ]/)>=4||Q.test(A)||ht.test(A)||nt.test(A))break;j+=`
`+w}k||w.trim()||(k=!0),r+=S+`
`,i=i.substring(S.length+1),A=w.slice(d)}}D.loose||(y?D.loose=!0:/\n *\n *$/.test(r)&&(y=!0)),this.options.gfm&&(o=/^\[[ xX]\] /.exec(j),o&&(f=o[0]!=="[ ] ",j=j.replace(/^\[[ xX]\] +/,""))),D.items.push({type:"list_item",raw:r,task:!!o,checked:f,loose:!1,text:j}),D.raw+=r}D.items[D.items.length-1].raw=r.trimRight(),D.items[D.items.length-1].text=j.trimRight(),D.raw=D.raw.trimRight();const pt=D.items.length;for(u=0;u<pt;u++)if(this.lexer.state.top=!1,D.items[u].tokens=this.lexer.blockTokens(D.items[u].text,[]),!D.loose){const K=D.items[u].tokens.filter(Q=>Q.type==="space"),nt=K.length>0&&K.some(Q=>/\n.*\n/.test(Q.raw));D.loose=nt}if(D.loose)for(u=0;u<pt;u++)D.items[u].loose=!0;return D}}html(i){const s=this.rules.block.html.exec(i);if(s){const r={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const o=this.options.sanitizer?this.options.sanitizer(s[0]):g(s[0]);r.type="paragraph",r.text=o,r.tokens=this.lexer.inline(o)}return r}}def(i){const s=this.rules.block.def.exec(i);if(s){const r=s[1].toLowerCase().replace(/\s+/g," "),o=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:r,raw:s[0],href:o,title:f}}}table(i){const s=this.rules.block.table.exec(i);if(s){const r={type:"table",header:F(s[1]).map(o=>({text:o})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=s[0];let o,f,d,u,k=r.align.length;for(o=0;o<k;o++)/^ *-+: *$/.test(r.align[o])?r.align[o]="right":/^ *:-+: *$/.test(r.align[o])?r.align[o]="center":/^ *:-+ *$/.test(r.align[o])?r.align[o]="left":r.align[o]=null;for(k=r.rows.length,o=0;o<k;o++)r.rows[o]=F(r.rows[o],r.header.length).map(y=>({text:y}));for(k=r.header.length,f=0;f<k;f++)r.header[f].tokens=this.lexer.inline(r.header[f].text);for(k=r.rows.length,f=0;f<k;f++)for(u=r.rows[f],d=0;d<u.length;d++)u[d].tokens=this.lexer.inline(u[d].text);return r}}}lheading(i){const s=this.rules.block.lheading.exec(i);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(i){const s=this.rules.block.paragraph.exec(i);if(s){const r=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:r,tokens:this.lexer.inline(r)}}}text(i){const s=this.rules.block.text.exec(i);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(i){const s=this.rules.inline.escape.exec(i);if(s)return{type:"escape",raw:s[0],text:g(s[1])}}tag(i){const s=this.rules.inline.tag.exec(i);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):g(s[0]):s[0]}}link(i){const s=this.rules.inline.link.exec(i);if(s){const r=s[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const d=V(r.slice(0,-1),"\\");if((r.length-d.length)%2==0)return}else{const d=function(u,k){if(u.indexOf(k[1])===-1)return-1;const y=u.length;let A=0,w=0;for(;w<y;w++)if(u[w]==="\\")w++;else if(u[w]===k[0])A++;else if(u[w]===k[1]&&(A--,A<0))return w;return-1}(s[2],"()");if(d>-1){const u=(s[0].indexOf("!")===0?5:4)+s[1].length+d;s[2]=s[2].substring(0,d),s[0]=s[0].substring(0,u).trim(),s[3]=""}}let o=s[2],f="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);d&&(o=d[1],f=d[3])}else f=s[3]?s[3].slice(1,-1):"";return o=o.trim(),/^</.test(o)&&(o=this.options.pedantic&&!/>$/.test(r)?o.slice(1):o.slice(1,-1)),at(s,{href:o&&o.replace(this.rules.inline._escapes,"$1"),title:f&&f.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(i,s){let r;if((r=this.rules.inline.reflink.exec(i))||(r=this.rules.inline.nolink.exec(i))){let o=(r[2]||r[1]).replace(/\s+/g," ");if(o=s[o.toLowerCase()],!o){const f=r[0].charAt(0);return{type:"text",raw:f,text:f}}return at(r,o,r[0],this.lexer)}}emStrong(i,s,r=""){let o=this.rules.inline.emStrong.lDelim.exec(i);if(!o||o[3]&&r.match(/[\p{L}\p{N}]/u))return;const f=o[1]||o[2]||"";if(!f||f&&(r===""||this.rules.inline.punctuation.exec(r))){const d=o[0].length-1;let u,k,y=d,A=0;const w=o[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,s=s.slice(-1*i.length+d);(o=w.exec(s))!=null;){if(u=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!u)continue;if(k=u.length,o[3]||o[4]){y+=k;continue}if((o[5]||o[6])&&d%3&&!((d+k)%3)){A+=k;continue}if(y-=k,y>0)continue;k=Math.min(k,k+y+A);const S=i.slice(0,d+o.index+(o[0].length-u.length)+k);if(Math.min(d,k)%2){const X=S.slice(1,-1);return{type:"em",raw:S,text:X,tokens:this.lexer.inlineTokens(X)}}const j=S.slice(2,-2);return{type:"strong",raw:S,text:j,tokens:this.lexer.inlineTokens(j)}}}}codespan(i){const s=this.rules.inline.code.exec(i);if(s){let r=s[2].replace(/\n/g," ");const o=/[^ ]/.test(r),f=/^ /.test(r)&&/ $/.test(r);return o&&f&&(r=r.substring(1,r.length-1)),r=g(r,!0),{type:"codespan",raw:s[0],text:r}}}br(i){const s=this.rules.inline.br.exec(i);if(s)return{type:"br",raw:s[0]}}del(i){const s=this.rules.inline.del.exec(i);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(i,s){const r=this.rules.inline.autolink.exec(i);if(r){let o,f;return r[2]==="@"?(o=g(this.options.mangle?s(r[1]):r[1]),f="mailto:"+o):(o=g(r[1]),f=o),{type:"link",raw:r[0],text:o,href:f,tokens:[{type:"text",raw:o,text:o}]}}}url(i,s){let r;if(r=this.rules.inline.url.exec(i)){let o,f;if(r[2]==="@")o=g(this.options.mangle?s(r[0]):r[0]),f="mailto:"+o;else{let d;do d=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(d!==r[0]);o=g(r[0]),f=r[1]==="www."?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:o,href:f,tokens:[{type:"text",raw:o,text:o}]}}}inlineText(i,s){const r=this.rules.inline.text.exec(i);if(r){let o;return o=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):g(r[0]):r[0]:g(this.options.smartypants?s(r[0]):r[0]),{type:"text",raw:r[0],text:o}}}}const L={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:P,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};L.def=E(L.def).replace("label",L._label).replace("title",L._title).getRegex(),L.bullet=/(?:[*+-]|\d{1,9}[.)])/,L.listItemStart=E(/^( *)(bull) */).replace("bull",L.bullet).getRegex(),L.list=E(L.list).replace(/bull/g,L.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+L.def.source+")").getRegex(),L._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",L._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,L.html=E(L.html,"i").replace("comment",L._comment).replace("tag",L._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),L.paragraph=E(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.blockquote=E(L.blockquote).replace("paragraph",L.paragraph).getRegex(),L.normal={...L},L.gfm={...L.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},L.gfm.table=E(L.gfm.table).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.gfm.paragraph=E(L._paragraph).replace("hr",L.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",L.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",L._tag).getRegex(),L.pedantic={...L.normal,html:E(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",L._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:E(L.normal._paragraph).replace("hr",L.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",L.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const _={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:P,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:P,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function lt(R){return R.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Tt(R){let i,s,r="";const o=R.length;for(i=0;i<o;i++)s=R.charCodeAt(i),Math.random()>.5&&(s="x"+s.toString(16)),r+="&#"+s+";";return r}_._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",_.punctuation=E(_.punctuation).replace(/punctuation/g,_._punctuation).getRegex(),_.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,_.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,_._comment=E(L._comment).replace("(?:-->|$)","-->").getRegex(),_.emStrong.lDelim=E(_.emStrong.lDelim).replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimAst=E(_.emStrong.rDelimAst,"g").replace(/punct/g,_._punctuation).getRegex(),_.emStrong.rDelimUnd=E(_.emStrong.rDelimUnd,"g").replace(/punct/g,_._punctuation).getRegex(),_._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,_._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,_._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,_.autolink=E(_.autolink).replace("scheme",_._scheme).replace("email",_._email).getRegex(),_._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,_.tag=E(_.tag).replace("comment",_._comment).replace("attribute",_._attribute).getRegex(),_._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,_._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,_.link=E(_.link).replace("label",_._label).replace("href",_._href).replace("title",_._title).getRegex(),_.reflink=E(_.reflink).replace("label",_._label).replace("ref",L._label).getRegex(),_.nolink=E(_.nolink).replace("ref",L._label).getRegex(),_.reflinkSearch=E(_.reflinkSearch,"g").replace("reflink",_.reflink).replace("nolink",_.nolink).getRegex(),_.normal={..._},_.pedantic={..._.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:E(/^!?\[(label)\]\((.*?)\)/).replace("label",_._label).getRegex(),reflink:E(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",_._label).getRegex()},_.gfm={..._.normal,escape:E(_.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},_.gfm.url=E(_.gfm.url,"i").replace("email",_.gfm._extended_email).getRegex(),_.breaks={..._.gfm,br:E(_.br).replace("{2,}","*").getRegex(),text:E(_.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class tt{constructor(i){this.tokens=[],this.tokens.links=Object.create(null),this.options=i||t,this.options.tokenizer=this.options.tokenizer||new ot,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:L.normal,inline:_.normal};this.options.pedantic?(s.block=L.pedantic,s.inline=_.pedantic):this.options.gfm&&(s.block=L.gfm,this.options.breaks?s.inline=_.breaks:s.inline=_.gfm),this.tokenizer.rules=s}static get rules(){return{block:L,inline:_}}static lex(i,s){return new tt(s).lex(i)}static lexInline(i,s){return new tt(s).inlineTokens(i)}lex(i){let s;for(i=i.replace(/\r\n|\r/g,`
`),this.blockTokens(i,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(i,s=[]){let r,o,f,d;for(i=this.options.pedantic?i.replace(/\t/g,"    ").replace(/^ +$/gm,""):i.replace(/^( *)(\t+)/gm,(u,k,y)=>k+"    ".repeat(y.length));i;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(u=>!!(r=u.call({lexer:this},i,s))&&(i=i.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.space(i))i=i.substring(r.raw.length),r.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(r);else if(r=this.tokenizer.code(i))i=i.substring(r.raw.length),o=s[s.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?s.push(r):(o.raw+=`
`+r.raw,o.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(r=this.tokenizer.fences(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.heading(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.hr(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.blockquote(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.list(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.html(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.def(i))i=i.substring(r.raw.length),o=s[s.length-1],!o||o.type!=="paragraph"&&o.type!=="text"?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(o.raw+=`
`+r.raw,o.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=o.text);else if(r=this.tokenizer.table(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.lheading(i))i=i.substring(r.raw.length),s.push(r);else{if(f=i,this.options.extensions&&this.options.extensions.startBlock){let u=1/0;const k=i.slice(1);let y;this.options.extensions.startBlock.forEach(function(A){y=A.call({lexer:this},k),typeof y=="number"&&y>=0&&(u=Math.min(u,y))}),u<1/0&&u>=0&&(f=i.substring(0,u+1))}if(this.state.top&&(r=this.tokenizer.paragraph(f)))o=s[s.length-1],d&&o.type==="paragraph"?(o.raw+=`
`+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):s.push(r),d=f.length!==i.length,i=i.substring(r.raw.length);else if(r=this.tokenizer.text(i))i=i.substring(r.raw.length),o=s[s.length-1],o&&o.type==="text"?(o.raw+=`
`+r.raw,o.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=o.text):s.push(r);else if(i){const u="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}return this.state.top=!0,s}inline(i,s=[]){return this.inlineQueue.push({src:i,tokens:s}),s}inlineTokens(i,s=[]){let r,o,f,d,u,k,y=i;if(this.tokens.links){const A=Object.keys(this.tokens.links);if(A.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(y))!=null;)A.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(y=y.slice(0,d.index)+"["+G("a",d[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(y))!=null;)y=y.slice(0,d.index)+"["+G("a",d[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.escapedEmSt.exec(y))!=null;)y=y.slice(0,d.index+d[0].length-2)+"++"+y.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;i;)if(u||(k=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(A=>!!(r=A.call({lexer:this},i,s))&&(i=i.substring(r.raw.length),s.push(r),!0))))if(r=this.tokenizer.escape(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.tag(i))i=i.substring(r.raw.length),o=s[s.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):s.push(r);else if(r=this.tokenizer.link(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.reflink(i,this.tokens.links))i=i.substring(r.raw.length),o=s[s.length-1],o&&r.type==="text"&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):s.push(r);else if(r=this.tokenizer.emStrong(i,y,k))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.codespan(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.br(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.del(i))i=i.substring(r.raw.length),s.push(r);else if(r=this.tokenizer.autolink(i,Tt))i=i.substring(r.raw.length),s.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(i,Tt))){if(f=i,this.options.extensions&&this.options.extensions.startInline){let A=1/0;const w=i.slice(1);let S;this.options.extensions.startInline.forEach(function(j){S=j.call({lexer:this},w),typeof S=="number"&&S>=0&&(A=Math.min(A,S))}),A<1/0&&A>=0&&(f=i.substring(0,A+1))}if(r=this.tokenizer.inlineText(f,lt))i=i.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(k=r.raw.slice(-1)),u=!0,o=s[s.length-1],o&&o.type==="text"?(o.raw+=r.raw,o.text+=r.text):s.push(r);else if(i){const A="Infinite loop on byte: "+i.charCodeAt(0);if(this.options.silent){console.error(A);break}throw new Error(A)}}else i=i.substring(r.raw.length),s.push(r);return s}}class yt{constructor(i){this.options=i||t}code(i,s,r){const o=(s||"").match(/\S*/)[0];if(this.options.highlight){const f=this.options.highlight(i,o);f!=null&&f!==i&&(r=!0,i=f)}return i=i.replace(/\n$/,"")+`
`,o?'<pre><code class="'+this.options.langPrefix+g(o)+'">'+(r?i:g(i,!0))+`</code></pre>
`:"<pre><code>"+(r?i:g(i,!0))+`</code></pre>
`}blockquote(i){return`<blockquote>
${i}</blockquote>
`}html(i){return i}heading(i,s,r,o){return this.options.headerIds?`<h${s} id="${this.options.headerPrefix+o.slug(r)}">${i}</h${s}>
`:`<h${s}>${i}</h${s}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(i,s,r){const o=s?"ol":"ul";return"<"+o+(s&&r!==1?' start="'+r+'"':"")+`>
`+i+"</"+o+`>
`}listitem(i){return`<li>${i}</li>
`}checkbox(i){return"<input "+(i?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(i){return`<p>${i}</p>
`}table(i,s){return s&&(s=`<tbody>${s}</tbody>`),`<table>
<thead>
`+i+`</thead>
`+s+`</table>
`}tablerow(i){return`<tr>
${i}</tr>
`}tablecell(i,s){const r=s.header?"th":"td";return(s.align?`<${r} align="${s.align}">`:`<${r}>`)+i+`</${r}>
`}strong(i){return`<strong>${i}</strong>`}em(i){return`<em>${i}</em>`}codespan(i){return`<code>${i}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(i){return`<del>${i}</del>`}link(i,s,r){if((i=$(this.options.sanitize,this.options.baseUrl,i))===null)return r;let o='<a href="'+i+'"';return s&&(o+=' title="'+s+'"'),o+=">"+r+"</a>",o}image(i,s,r){if((i=$(this.options.sanitize,this.options.baseUrl,i))===null)return r;let o=`<img src="${i}" alt="${r}"`;return s&&(o+=` title="${s}"`),o+=this.options.xhtml?"/>":">",o}text(i){return i}}class zt{strong(i){return i}em(i){return i}codespan(i){return i}del(i){return i}html(i){return i}text(i){return i}link(i,s,r){return""+r}image(i,s,r){return""+r}br(){return""}}class At{constructor(){this.seen={}}serialize(i){return i.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(i,s){let r=i,o=0;if(this.seen.hasOwnProperty(r)){o=this.seen[i];do o++,r=i+"-"+o;while(this.seen.hasOwnProperty(r))}return s||(this.seen[i]=o,this.seen[r]=0),r}slug(i,s={}){const r=this.serialize(i);return this.getNextSafeSlug(r,s.dryrun)}}class et{constructor(i){this.options=i||t,this.options.renderer=this.options.renderer||new yt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new zt,this.slugger=new At}static parse(i,s){return new et(s).parse(i)}static parseInline(i,s){return new et(s).parseInline(i)}parse(i,s=!0){let r,o,f,d,u,k,y,A,w,S,j,X,W,Y,D,ct,pt,K,nt,Q="";const ht=i.length;for(r=0;r<ht;r++)if(S=i[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[S.type]&&(nt=this.options.extensions.renderers[S.type].call({parser:this},S),nt!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(S.type)))Q+=nt||"";else switch(S.type){case"space":continue;case"hr":Q+=this.renderer.hr();continue;case"heading":Q+=this.renderer.heading(this.parseInline(S.tokens),S.depth,m(this.parseInline(S.tokens,this.textRenderer)),this.slugger);continue;case"code":Q+=this.renderer.code(S.text,S.lang,S.escaped);continue;case"table":for(A="",y="",d=S.header.length,o=0;o<d;o++)y+=this.renderer.tablecell(this.parseInline(S.header[o].tokens),{header:!0,align:S.align[o]});for(A+=this.renderer.tablerow(y),w="",d=S.rows.length,o=0;o<d;o++){for(k=S.rows[o],y="",u=k.length,f=0;f<u;f++)y+=this.renderer.tablecell(this.parseInline(k[f].tokens),{header:!1,align:S.align[f]});w+=this.renderer.tablerow(y)}Q+=this.renderer.table(A,w);continue;case"blockquote":w=this.parse(S.tokens),Q+=this.renderer.blockquote(w);continue;case"list":for(j=S.ordered,X=S.start,W=S.loose,d=S.items.length,w="",o=0;o<d;o++)D=S.items[o],ct=D.checked,pt=D.task,Y="",D.task&&(K=this.renderer.checkbox(ct),W?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=K+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=K+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:K}):Y+=K),Y+=this.parse(D.tokens,W),w+=this.renderer.listitem(Y,pt,ct);Q+=this.renderer.list(w,j,X);continue;case"html":Q+=this.renderer.html(S.text);continue;case"paragraph":Q+=this.renderer.paragraph(this.parseInline(S.tokens));continue;case"text":for(w=S.tokens?this.parseInline(S.tokens):S.text;r+1<ht&&i[r+1].type==="text";)S=i[++r],w+=`
`+(S.tokens?this.parseInline(S.tokens):S.text);Q+=s?this.renderer.paragraph(w):w;continue;default:{const Rt='Token with "'+S.type+'" type was not found.';if(this.options.silent)return void console.error(Rt);throw new Error(Rt)}}return Q}parseInline(i,s){s=s||this.renderer;let r,o,f,d="";const u=i.length;for(r=0;r<u;r++)if(o=i[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]&&(f=this.options.extensions.renderers[o.type].call({parser:this},o),f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)))d+=f||"";else switch(o.type){case"escape":case"text":d+=s.text(o.text);break;case"html":d+=s.html(o.text);break;case"link":d+=s.link(o.href,o.title,this.parseInline(o.tokens,s));break;case"image":d+=s.image(o.href,o.title,o.text);break;case"strong":d+=s.strong(this.parseInline(o.tokens,s));break;case"em":d+=s.em(this.parseInline(o.tokens,s));break;case"codespan":d+=s.codespan(o.text);break;case"br":d+=s.br();break;case"del":d+=s.del(this.parseInline(o.tokens,s));break;default:{const k='Token with "'+o.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return d}}class dt{constructor(i){this.options=i||t}preprocess(i){return i}postprocess(i){return i}}_t(dt,"passThroughHooks",new Set(["preprocess","postprocess"]));function Et(R,i){return(s,r,o)=>{typeof r=="function"&&(o=r,r=null);const f={...r},d=function(u,k,y){return A=>{if(A.message+=`
Please report this to https://github.com/markedjs/marked.`,u){const w="<p>An error occurred:</p><pre>"+g(A.message+"",!0)+"</pre>";return k?Promise.resolve(w):y?void y(null,w):w}if(k)return Promise.reject(A);if(!y)throw A;y(A)}}((r={...M.defaults,...f}).silent,r.async,o);if(s==null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(u){u&&u.sanitize&&!u.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(r),r.hooks&&(r.hooks.options=r),o){const u=r.highlight;let k;try{r.hooks&&(s=r.hooks.preprocess(s)),k=R(s,r)}catch(w){return d(w)}const y=function(w){let S;if(!w)try{r.walkTokens&&M.walkTokens(k,r.walkTokens),S=i(k,r),r.hooks&&(S=r.hooks.postprocess(S))}catch(j){w=j}return r.highlight=u,w?d(w):o(null,S)};if(!u||u.length<3||(delete r.highlight,!k.length))return y();let A=0;return M.walkTokens(k,function(w){w.type==="code"&&(A++,setTimeout(()=>{u(w.text,w.lang,function(S,j){if(S)return y(S);j!=null&&j!==w.text&&(w.text=j,w.escaped=!0),A--,A===0&&y()})},0))}),void(A===0&&y())}if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(s):s).then(u=>R(u,r)).then(u=>r.walkTokens?Promise.all(M.walkTokens(u,r.walkTokens)).then(()=>u):u).then(u=>i(u,r)).then(u=>r.hooks?r.hooks.postprocess(u):u).catch(d);try{r.hooks&&(s=r.hooks.preprocess(s));const u=R(s,r);r.walkTokens&&M.walkTokens(u,r.walkTokens);let k=i(u,r);return r.hooks&&(k=r.hooks.postprocess(k)),k}catch(u){return d(u)}}}function M(R,i,s){return Et(tt.lex,et.parse)(R,i,s)}return M.options=M.setOptions=function(R){var i;return M.defaults={...M.defaults,...R},i=M.defaults,t=i,M},M.getDefaults=e,M.defaults=t,M.use=function(...R){const i=M.defaults.extensions||{renderers:{},childTokens:{}};R.forEach(s=>{const r={...s};if(r.async=M.defaults.async||r.async||!1,s.extensions&&(s.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if(o.renderer){const f=i.renderers[o.name];i.renderers[o.name]=f?function(...d){let u=o.renderer.apply(this,d);return u===!1&&(u=f.apply(this,d)),u}:o.renderer}if(o.tokenizer){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");i[o.level]?i[o.level].unshift(o.tokenizer):i[o.level]=[o.tokenizer],o.start&&(o.level==="block"?i.startBlock?i.startBlock.push(o.start):i.startBlock=[o.start]:o.level==="inline"&&(i.startInline?i.startInline.push(o.start):i.startInline=[o.start]))}o.childTokens&&(i.childTokens[o.name]=o.childTokens)}),r.extensions=i),s.renderer){const o=M.defaults.renderer||new yt;for(const f in s.renderer){const d=o[f];o[f]=(...u)=>{let k=s.renderer[f].apply(o,u);return k===!1&&(k=d.apply(o,u)),k}}r.renderer=o}if(s.tokenizer){const o=M.defaults.tokenizer||new ot;for(const f in s.tokenizer){const d=o[f];o[f]=(...u)=>{let k=s.tokenizer[f].apply(o,u);return k===!1&&(k=d.apply(o,u)),k}}r.tokenizer=o}if(s.hooks){const o=M.defaults.hooks||new dt;for(const f in s.hooks){const d=o[f];dt.passThroughHooks.has(f)?o[f]=u=>{if(M.defaults.async)return Promise.resolve(s.hooks[f].call(o,u)).then(y=>d.call(o,y));const k=s.hooks[f].call(o,u);return d.call(o,k)}:o[f]=(...u)=>{let k=s.hooks[f].apply(o,u);return k===!1&&(k=d.apply(o,u)),k}}r.hooks=o}if(s.walkTokens){const o=M.defaults.walkTokens;r.walkTokens=function(f){let d=[];return d.push(s.walkTokens.call(this,f)),o&&(d=d.concat(o.call(this,f))),d}}M.setOptions(r)})},M.walkTokens=function(R,i){let s=[];for(const r of R)switch(s=s.concat(i.call(M,r)),r.type){case"table":for(const o of r.header)s=s.concat(M.walkTokens(o.tokens,i));for(const o of r.rows)for(const f of o)s=s.concat(M.walkTokens(f.tokens,i));break;case"list":s=s.concat(M.walkTokens(r.items,i));break;default:M.defaults.extensions&&M.defaults.extensions.childTokens&&M.defaults.extensions.childTokens[r.type]?M.defaults.extensions.childTokens[r.type].forEach(function(o){s=s.concat(M.walkTokens(r[o],i))}):r.tokens&&(s=s.concat(M.walkTokens(r.tokens,i)))}return s},M.parseInline=Et(tt.lexInline,et.parseInline),M.Parser=et,M.parser=et.parse,M.Renderer=yt,M.TextRenderer=zt,M.Lexer=tt,M.lexer=tt.lex,M.Tokenizer=ot,M.Slugger=At,M.Hooks=dt,M.parse=M,M.options,M.setOptions,M.use,M.walkTokens,M.parseInline,et.parse,tt.lex,()=>{let R,i,s=null;function r(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=M,s.document.write(`<!--
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
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const u=i.getConfig().url,k=typeof u=="string"?u:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;R=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:i.getState(),url:k}),"*")},500),window.addEventListener("message",f)})()}}function o(u){let k=i.getCurrentSlide(),y=k.querySelectorAll("aside.notes"),A=k.querySelector(".current-fragment"),w={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:i.getState()};if(k.hasAttribute("data-notes")&&(w.notes=k.getAttribute("data-notes"),w.whitespace="pre-wrap"),A){let S=A.querySelector("aside.notes");S?(w.notes=S.innerHTML,w.markdown=typeof S.getAttribute("data-markdown")=="string",y=null):A.hasAttribute("data-notes")&&(w.notes=A.getAttribute("data-notes"),w.whitespace="pre-wrap",y=null)}y&&y.length&&(y=Array.from(y).filter(S=>S.closest(".fragment")===null),w.notes=y.map(S=>S.innerHTML).join(`
`),w.markdown=y[0]&&typeof y[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(w),"*")}function f(u){if(function(k){try{return window.location.origin===k.source.location.origin}catch{return!1}}(u)){let k=JSON.parse(u.data);k&&k.namespace==="reveal-notes"&&k.type==="connected"?(clearInterval(R),d()):k&&k.namespace==="reveal-notes"&&k.type==="call"&&function(y,A,w){let S=i[y].apply(i,A);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:S,callId:w}),"*")}(k.methodName,k.arguments,k.callId)}}function d(){i.on("slidechanged",o),i.on("fragmentshown",o),i.on("fragmenthidden",o),i.on("overviewhidden",o),i.on("overviewshown",o),i.on("paused",o),i.on("resumed",o),o()}return{id:"notes",init:function(u){i=u,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?r():window.addEventListener("message",k=>{if(!s&&typeof k.data=="string"){let A;try{A=JSON.parse(k.data)}catch{}A&&A.namespace==="reveal-notes"&&A.type==="heartbeat"&&(y=k.source,s&&!s.closed?s.focus():(s=y,window.addEventListener("message",f),d()))}var y}),i.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){r()}))},open:r}}})})(Qt);var ke=Qt.exports;const xe=Yt(ke);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const be=()=>{let b,n,e,t,a,p,c;function h(){n=document.createElement("div"),n.classList.add("searchbox"),n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.zIndex=10,n.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,e=n.querySelector(".searchinput"),e.style.width="240px",e.style.fontSize="14px",e.style.padding="4px 6px",e.style.color="#000",e.style.background="#fff",e.style.borderRadius="2px",e.style.border="0",e.style.outline="0",e.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",e.style["-webkit-appearance"]="none",b.getRevealElement().appendChild(n),e.addEventListener("keyup",function(l){l.keyCode===13?(l.preventDefault(),function(){if(p){var m=e.value;m===""?(c&&c.remove(),t=null):(c=new g("slidecontent"),t=c.apply(m),a=0)}t&&(t.length&&t.length<=a&&(a=0),t.length>a&&(b.slide(t[a].h,t[a].v),a++))}(),p=!1):p=!0},!1),v()}function x(){n||h(),n.style.display="inline",e.focus(),e.select()}function v(){n||h(),n.style.display="none",c&&c.remove()}function g(l,m){var z=document.getElementById(l)||document.body,E=m||"EM",C=new RegExp("^(?:"+E+"|SCRIPT|FORM)$"),O=["#ff6","#a0ffff","#9f9","#f99","#f6f"],$=[],Z=0,U="",B=[];this.setRegex=function(q){q=q.trim(),U=new RegExp("("+q+")","i")},this.getRegex=function(){return U.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(q){if(q!=null&&q&&U&&!C.test(q.nodeName)){if(q.hasChildNodes())for(var P=0;P<q.childNodes.length;P++)this.hiliteWords(q.childNodes[P]);var F,V;if(q.nodeType==3&&(F=q.nodeValue)&&(V=U.exec(F))){for(var G=q;G!=null&&G.nodeName!="SECTION";)G=G.parentNode;var at=b.getIndices(G),ot=B.length,L=!1;for(P=0;P<ot;P++)B[P].h===at.h&&B[P].v===at.v&&(L=!0);L||B.push(at),$[V[0].toLowerCase()]||($[V[0].toLowerCase()]=O[Z++%O.length]);var _=document.createElement(E);_.appendChild(document.createTextNode(V[0])),_.style.backgroundColor=$[V[0].toLowerCase()],_.style.fontStyle="inherit",_.style.color="#000";var lt=q.splitText(V.index);lt.nodeValue=lt.nodeValue.substring(V[0].length),q.parentNode.insertBefore(_,lt)}}},this.remove=function(){for(var q,P=document.getElementsByTagName(E);P.length&&(q=P[0]);)q.parentNode.replaceChild(q.firstChild,q)},this.apply=function(q){if(q!=null&&q)return this.remove(),this.setRegex(q),this.hiliteWords(z),B}}return{id:"search",init:l=>{b=l,b.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(m){m.key=="F"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),n||h(),n.style.display!=="inline"?x():v())},!1)},open:x}},we={class:"w-full box-border h-screen"},ye={class:"reveal"},_e={class:"slides"},Se=["data-markdown"],ve={props:{slidescontent:{type:String,default:"Missing Document"}}},$e=Ot({...ve,__name:"Slides",setup(b){return Ft(()=>{console.log("Slides Mounted"),Wt(()=>import("./reveal.esm.ssIfNQ0c.js"),__vite__mapDeps([]),import.meta.url).then(n=>{console.log("Check",n);const e=new n.default;e.initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[me,xe,te,be]}),console.log("Check",e)})}),(n,e)=>(mt(),kt("div",we,[ut("div",ye,[ut("div",_e,[ut("section",{"data-markdown":b.slidescontent,"data-separator":"^\\r?\\n---\\r?\\n$","data-separator-notes":"^Note:"},null,8,Se)])])]))}}),Te={class:"flex flex-auto justify-end overflow-auto p-4 bg-gentleBlue font-body h-full w-full"},ze={class:"flex-auto w-full overflow-auto"},Ae={key:0},Ee={key:1},Ze=Ot({__name:"[chapter]",setup(b){const n=Xt();console.log(n.public.repoName);const e="/"+n.public.repoName+"/";return(t,a)=>{const p=$e,c=ee,h=ne;return mt(),kt("main",null,[ut("div",Te,[ut("div",ze,[St(h,null,{default:Kt(({doc:x})=>[x._extension==="pmd"?(mt(),kt("div",Ae,[St(p,{slidescontent:e+x._file},null,8,["slidescontent"])])):(mt(),kt("div",Ee,[St(c,{value:x,class:"prose mb-6"},null,8,["value"])]))]),_:1})])])])}}});export{Ze as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
