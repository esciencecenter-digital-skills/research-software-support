var Jt=Object.defineProperty;var Vt=(x,n,t)=>n in x?Jt(x,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):x[n]=t;var wt=(x,n,t)=>Vt(x,typeof n!="symbol"?n+"":n,t);import{y as Ft,f as Wt,J as Kt,K as Et,o as ft,c as yt,a as vt,t as Xt,_ as Yt,A as Gt,w as te,b as Lt}from"./DcgnBMkC.js";import{c as ee,g as ne}from"./Cpj98o6Y.js";import se from"./DZKhpJ39.js";import ie from"./Cy9ZZzHV.js";import"./Ba-tVm8B.js";import"./Dnd51l0P.js";import"./qSvidI2m.js";import"./BkGda_5D.js";function re(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let rt={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Dt=/[&<>"']/,le=new RegExp(Dt.source,"g"),Ut=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ae=new RegExp(Ut.source,"g"),oe={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},It=x=>oe[x];function J(x,n){if(n){if(Dt.test(x))return x.replace(le,It)}else if(Ut.test(x))return x.replace(ae,It);return x}const ce=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function Zt(x){return x.replace(ce,(n,t)=>(t=t.toLowerCase())==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}const pe=/(^|[^\[])\^/g;function H(x,n){x=typeof x=="string"?x:x.source,n=n||"";const t={replace:(e,l)=>(l=(l=l.source||l).replace(pe,"$1"),x=x.replace(e,l),t),getRegex:()=>new RegExp(x,n)};return t}const he=/[^\w:]/g,ue=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ct(x,n,t){if(x){let e;try{e=decodeURIComponent(Zt(t)).replace(he,"").toLowerCase()}catch{return null}if(e.indexOf("javascript:")===0||e.indexOf("vbscript:")===0||e.indexOf("data:")===0)return null}n&&!ue.test(t)&&(t=function(e,l){dt[" "+e]||(de.test(e)?dt[" "+e]=e+"/":dt[" "+e]=mt(e,"/",!0)),e=dt[" "+e];const p=e.indexOf(":")===-1;return l.substring(0,2)==="//"?p?l:e.replace(ge,"$1")+l:l.charAt(0)==="/"?p?l:e.replace(fe,"$1")+l:e+l}(n,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const dt={},de=/^[^:]+:\/*[^/]*$/,ge=/^([^:]+:)[\s\S]*$/,fe=/^([^:]+:\/*[^/]*)[\s\S]*$/,xt={exec:function(){}};function Mt(x,n){const t=x.replace(/\|/g,(l,p,c)=>{let h=!1,b=p;for(;--b>=0&&c[b]==="\\";)h=!h;return h?"|":" |"}).split(/ \|/);let e=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;e<t.length;e++)t[e]=t[e].trim().replace(/\\\|/g,"|");return t}function mt(x,n,t){const e=x.length;if(e===0)return"";let l=0;for(;l<e;){const p=x.charAt(e-l-1);if(p!==n||t){if(p===n||!t)break;l++}else l++}return x.slice(0,e-l)}function Nt(x,n){if(n<1)return"";let t="";for(;n>1;)1&n&&(t+=x),n>>=1,x+=x;return t+x}function qt(x,n,t,e){const l=n.href,p=n.title?J(n.title):null,c=x[1].replace(/\\([\[\]])/g,"$1");if(x[0].charAt(0)!=="!"){e.state.inLink=!0;const h={type:"link",raw:t,href:l,title:p,text:c,tokens:e.inlineTokens(c)};return e.state.inLink=!1,h}return{type:"image",raw:t,href:l,title:p,text:J(c)}}class _t{constructor(n){this.options=n||rt}space(n){const t=this.rules.block.newline.exec(n);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(n){const t=this.rules.block.code.exec(n);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:mt(e,`
`)}}}fences(n){const t=this.rules.block.fences.exec(n);if(t){const e=t[0],l=function(p,c){const h=p.match(/^(\s+)(?:```)/);if(h===null)return c;const b=h[1];return c.split(`
`).map(S=>{const g=S.match(/^\s+/);if(g===null)return S;const[o]=g;return o.length>=b.length?S.slice(b.length):S}).join(`
`)}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:l}}}heading(n){const t=this.rules.block.heading.exec(n);if(t){let e=t[2].trim();if(/#$/.test(e)){const l=mt(e,"#");this.options.pedantic?e=l.trim():l&&!/ $/.test(l)||(e=l.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(n){const t=this.rules.block.hr.exec(n);if(t)return{type:"hr",raw:t[0]}}blockquote(n){const t=this.rules.block.blockquote.exec(n);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,""),l=this.lexer.state.top;this.lexer.state.top=!0;const p=this.lexer.blockTokens(e);return this.lexer.state.top=l,{type:"blockquote",raw:t[0],tokens:p,text:e}}}list(n){let t=this.rules.block.list.exec(n);if(t){let e,l,p,c,h,b,S,g,o,m,z,R,C=t[1].trim();const O=C.length>1,$={type:"list",raw:"",ordered:O,start:O?+C.slice(0,-1):"",loose:!1,items:[]};C=O?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=O?C:"[*+-]");const U=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;n&&(R=!1,t=U.exec(n))&&!this.rules.block.hr.test(n);){if(e=t[0],n=n.substring(e.length),g=t[2].split(`
`,1)[0].replace(/^\t+/,B=>" ".repeat(3*B.length)),o=n.split(`
`,1)[0],this.options.pedantic?(c=2,z=g.trimLeft()):(c=t[2].search(/[^ ]/),c=c>4?1:c,z=g.slice(c),c+=t[1].length),b=!1,!g&&/^ *$/.test(o)&&(e+=o+`
`,n=n.substring(o.length+1),R=!0),!R){const B=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),q=new RegExp(`^ {0,${Math.min(3,c-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),P=new RegExp(`^ {0,${Math.min(3,c-1)}}(?:\`\`\`|~~~)`),F=new RegExp(`^ {0,${Math.min(3,c-1)}}#`);for(;n&&(m=n.split(`
`,1)[0],o=m,this.options.pedantic&&(o=o.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!P.test(o))&&!F.test(o)&&!B.test(o)&&!q.test(n);){if(o.search(/[^ ]/)>=c||!o.trim())z+=`
`+o.slice(c);else{if(b||g.search(/[^ ]/)>=4||P.test(g)||F.test(g)||q.test(g))break;z+=`
`+o}b||o.trim()||(b=!0),e+=m+`
`,n=n.substring(m.length+1),g=o.slice(c)}}$.loose||(S?$.loose=!0:/\n *\n *$/.test(e)&&(S=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(z),l&&(p=l[0]!=="[ ] ",z=z.replace(/^\[[ xX]\] +/,""))),$.items.push({type:"list_item",raw:e,task:!!l,checked:p,loose:!1,text:z}),$.raw+=e}$.items[$.items.length-1].raw=e.trimRight(),$.items[$.items.length-1].text=z.trimRight(),$.raw=$.raw.trimRight();const Z=$.items.length;for(h=0;h<Z;h++)if(this.lexer.state.top=!1,$.items[h].tokens=this.lexer.blockTokens($.items[h].text,[]),!$.loose){const B=$.items[h].tokens.filter(P=>P.type==="space"),q=B.length>0&&B.some(P=>/\n.*\n/.test(P.raw));$.loose=q}if($.loose)for(h=0;h<Z;h++)$.items[h].loose=!0;return $}}html(n){const t=this.rules.block.html.exec(n);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};if(this.options.sanitize){const l=this.options.sanitizer?this.options.sanitizer(t[0]):J(t[0]);e.type="paragraph",e.text=l,e.tokens=this.lexer.inline(l)}return e}}def(n){const t=this.rules.block.def.exec(n);if(t){const e=t[1].toLowerCase().replace(/\s+/g," "),l=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",p=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:l,title:p}}}table(n){const t=this.rules.block.table.exec(n);if(t){const e={type:"table",header:Mt(t[1]).map(l=>({text:l})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(e.header.length===e.align.length){e.raw=t[0];let l,p,c,h,b=e.align.length;for(l=0;l<b;l++)/^ *-+: *$/.test(e.align[l])?e.align[l]="right":/^ *:-+: *$/.test(e.align[l])?e.align[l]="center":/^ *:-+ *$/.test(e.align[l])?e.align[l]="left":e.align[l]=null;for(b=e.rows.length,l=0;l<b;l++)e.rows[l]=Mt(e.rows[l],e.header.length).map(S=>({text:S}));for(b=e.header.length,p=0;p<b;p++)e.header[p].tokens=this.lexer.inline(e.header[p].text);for(b=e.rows.length,p=0;p<b;p++)for(h=e.rows[p],c=0;c<h.length;c++)h[c].tokens=this.lexer.inline(h[c].text);return e}}}lheading(n){const t=this.rules.block.lheading.exec(n);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(n){const t=this.rules.block.paragraph.exec(n);if(t){const e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(n){const t=this.rules.block.text.exec(n);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(n){const t=this.rules.inline.escape.exec(n);if(t)return{type:"escape",raw:t[0],text:J(t[1])}}tag(n){const t=this.rules.inline.tag.exec(n);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):J(t[0]):t[0]}}link(n){const t=this.rules.inline.link.exec(n);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const c=mt(e.slice(0,-1),"\\");if((e.length-c.length)%2==0)return}else{const c=function(h,b){if(h.indexOf(b[1])===-1)return-1;const S=h.length;let g=0,o=0;for(;o<S;o++)if(h[o]==="\\")o++;else if(h[o]===b[0])g++;else if(h[o]===b[1]&&(g--,g<0))return o;return-1}(t[2],"()");if(c>-1){const h=(t[0].indexOf("!")===0?5:4)+t[1].length+c;t[2]=t[2].substring(0,c),t[0]=t[0].substring(0,h).trim(),t[3]=""}}let l=t[2],p="";if(this.options.pedantic){const c=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);c&&(l=c[1],p=c[3])}else p=t[3]?t[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(l=this.options.pedantic&&!/>$/.test(e)?l.slice(1):l.slice(1,-1)),qt(t,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:p&&p.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(n,t){let e;if((e=this.rules.inline.reflink.exec(n))||(e=this.rules.inline.nolink.exec(n))){let l=(e[2]||e[1]).replace(/\s+/g," ");if(l=t[l.toLowerCase()],!l){const p=e[0].charAt(0);return{type:"text",raw:p,text:p}}return qt(e,l,e[0],this.lexer)}}emStrong(n,t,e=""){let l=this.rules.inline.emStrong.lDelim.exec(n);if(!l||l[3]&&e.match(/[\p{L}\p{N}]/u))return;const p=l[1]||l[2]||"";if(!p||p&&(e===""||this.rules.inline.punctuation.exec(e))){const c=l[0].length-1;let h,b,S=c,g=0;const o=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(o.lastIndex=0,t=t.slice(-1*n.length+c);(l=o.exec(t))!=null;){if(h=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!h)continue;if(b=h.length,l[3]||l[4]){S+=b;continue}if((l[5]||l[6])&&c%3&&!((c+b)%3)){g+=b;continue}if(S-=b,S>0)continue;b=Math.min(b,b+S+g);const m=n.slice(0,c+l.index+(l[0].length-h.length)+b);if(Math.min(c,b)%2){const R=m.slice(1,-1);return{type:"em",raw:m,text:R,tokens:this.lexer.inlineTokens(R)}}const z=m.slice(2,-2);return{type:"strong",raw:m,text:z,tokens:this.lexer.inlineTokens(z)}}}}codespan(n){const t=this.rules.inline.code.exec(n);if(t){let e=t[2].replace(/\n/g," ");const l=/[^ ]/.test(e),p=/^ /.test(e)&&/ $/.test(e);return l&&p&&(e=e.substring(1,e.length-1)),e=J(e,!0),{type:"codespan",raw:t[0],text:e}}}br(n){const t=this.rules.inline.br.exec(n);if(t)return{type:"br",raw:t[0]}}del(n){const t=this.rules.inline.del.exec(n);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(n,t){const e=this.rules.inline.autolink.exec(n);if(e){let l,p;return e[2]==="@"?(l=J(this.options.mangle?t(e[1]):e[1]),p="mailto:"+l):(l=J(e[1]),p=l),{type:"link",raw:e[0],text:l,href:p,tokens:[{type:"text",raw:l,text:l}]}}}url(n,t){let e;if(e=this.rules.inline.url.exec(n)){let l,p;if(e[2]==="@")l=J(this.options.mangle?t(e[0]):e[0]),p="mailto:"+l;else{let c;do c=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(c!==e[0]);l=J(e[0]),p=e[1]==="www."?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:l,href:p,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(n,t){const e=this.rules.inline.text.exec(n);if(e){let l;return l=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):J(e[0]):e[0]:J(this.options.smartypants?t(e[0]):e[0]),{type:"text",raw:e[0],text:l}}}}const N={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:xt,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};N.def=H(N.def).replace("label",N._label).replace("title",N._title).getRegex(),N.bullet=/(?:[*+-]|\d{1,9}[.)])/,N.listItemStart=H(/^( *)(bull) */).replace("bull",N.bullet).getRegex(),N.list=H(N.list).replace(/bull/g,N.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+N.def.source+")").getRegex(),N._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",N._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,N.html=H(N.html,"i").replace("comment",N._comment).replace("tag",N._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),N.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.blockquote=H(N.blockquote).replace("paragraph",N.paragraph).getRegex(),N.normal={...N},N.gfm={...N.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},N.gfm.table=H(N.gfm.table).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.gfm.paragraph=H(N._paragraph).replace("hr",N.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",N.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",N._tag).getRegex(),N.pedantic={...N.normal,html:H(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",N._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:xt,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:H(N.normal._paragraph).replace("hr",N.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",N.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const T={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:xt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:xt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function me(x){return x.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Pt(x){let n,t,e="";const l=x.length;for(n=0;n<l;n++)t=x.charCodeAt(n),Math.random()>.5&&(t="x"+t.toString(16)),e+="&#"+t+";";return e}T._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",T.punctuation=H(T.punctuation).replace(/punctuation/g,T._punctuation).getRegex(),T.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,T.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,T._comment=H(N._comment).replace("(?:-->|$)","-->").getRegex(),T.emStrong.lDelim=H(T.emStrong.lDelim).replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimAst=H(T.emStrong.rDelimAst,"g").replace(/punct/g,T._punctuation).getRegex(),T.emStrong.rDelimUnd=H(T.emStrong.rDelimUnd,"g").replace(/punct/g,T._punctuation).getRegex(),T._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,T._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,T._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,T.autolink=H(T.autolink).replace("scheme",T._scheme).replace("email",T._email).getRegex(),T._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,T.tag=H(T.tag).replace("comment",T._comment).replace("attribute",T._attribute).getRegex(),T._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,T._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,T._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,T.link=H(T.link).replace("label",T._label).replace("href",T._href).replace("title",T._title).getRegex(),T.reflink=H(T.reflink).replace("label",T._label).replace("ref",N._label).getRegex(),T.nolink=H(T.nolink).replace("ref",N._label).getRegex(),T.reflinkSearch=H(T.reflinkSearch,"g").replace("reflink",T.reflink).replace("nolink",T.nolink).getRegex(),T.normal={...T},T.pedantic={...T.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:H(/^!?\[(label)\]\((.*?)\)/).replace("label",T._label).getRegex(),reflink:H(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",T._label).getRegex()},T.gfm={...T.normal,escape:H(T.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},T.gfm.url=H(T.gfm.url,"i").replace("email",T.gfm._extended_email).getRegex(),T.breaks={...T.gfm,br:H(T.br).replace("{2,}","*").getRegex(),text:H(T.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class st{constructor(n){this.tokens=[],this.tokens.links=Object.create(null),this.options=n||rt,this.options.tokenizer=this.options.tokenizer||new _t,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:N.normal,inline:T.normal};this.options.pedantic?(t.block=N.pedantic,t.inline=T.pedantic):this.options.gfm&&(t.block=N.gfm,this.options.breaks?t.inline=T.breaks:t.inline=T.gfm),this.tokenizer.rules=t}static get rules(){return{block:N,inline:T}}static lex(n,t){return new st(t).lex(n)}static lexInline(n,t){return new st(t).inlineTokens(n)}lex(n){let t;for(n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(n,t=[]){let e,l,p,c;for(n=this.options.pedantic?n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n.replace(/^( *)(\t+)/gm,(h,b,S)=>b+"    ".repeat(S.length));n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(h=>!!(e=h.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.space(n))n=n.substring(e.raw.length),e.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(e);else if(e=this.tokenizer.code(n))n=n.substring(e.raw.length),l=t[t.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?t.push(e):(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(e=this.tokenizer.fences(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.heading(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.hr(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.blockquote(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.list(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.html(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.def(n))n=n.substring(e.raw.length),l=t[t.length-1],!l||l.type!=="paragraph"&&l.type!=="text"?this.tokens.links[e.tag]||(this.tokens.links[e.tag]={href:e.href,title:e.title}):(l.raw+=`
`+e.raw,l.text+=`
`+e.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text);else if(e=this.tokenizer.table(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.lheading(n))n=n.substring(e.raw.length),t.push(e);else{if(p=n,this.options.extensions&&this.options.extensions.startBlock){let h=1/0;const b=n.slice(1);let S;this.options.extensions.startBlock.forEach(function(g){S=g.call({lexer:this},b),typeof S=="number"&&S>=0&&(h=Math.min(h,S))}),h<1/0&&h>=0&&(p=n.substring(0,h+1))}if(this.state.top&&(e=this.tokenizer.paragraph(p)))l=t[t.length-1],c&&l.type==="paragraph"?(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(e),c=p.length!==n.length,n=n.substring(e.raw.length);else if(e=this.tokenizer.text(n))n=n.substring(e.raw.length),l=t[t.length-1],l&&l.type==="text"?(l.raw+=`
`+e.raw,l.text+=`
`+e.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):t.push(e);else if(n){const h="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}return this.state.top=!0,t}inline(n,t=[]){return this.inlineQueue.push({src:n,tokens:t}),t}inlineTokens(n,t=[]){let e,l,p,c,h,b,S=n;if(this.tokens.links){const g=Object.keys(this.tokens.links);if(g.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(S))!=null;)g.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(S=S.slice(0,c.index)+"["+Nt("a",c[0].length-2)+"]"+S.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(S))!=null;)S=S.slice(0,c.index)+"["+Nt("a",c[0].length-2)+"]"+S.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.escapedEmSt.exec(S))!=null;)S=S.slice(0,c.index+c[0].length-2)+"++"+S.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;n;)if(h||(b=""),h=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(g=>!!(e=g.call({lexer:this},n,t))&&(n=n.substring(e.raw.length),t.push(e),!0))))if(e=this.tokenizer.escape(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.tag(n))n=n.substring(e.raw.length),l=t[t.length-1],l&&e.type==="text"&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(e=this.tokenizer.link(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.reflink(n,this.tokens.links))n=n.substring(e.raw.length),l=t[t.length-1],l&&e.type==="text"&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(e=this.tokenizer.emStrong(n,S,b))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.codespan(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.br(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.del(n))n=n.substring(e.raw.length),t.push(e);else if(e=this.tokenizer.autolink(n,Pt))n=n.substring(e.raw.length),t.push(e);else if(this.state.inLink||!(e=this.tokenizer.url(n,Pt))){if(p=n,this.options.extensions&&this.options.extensions.startInline){let g=1/0;const o=n.slice(1);let m;this.options.extensions.startInline.forEach(function(z){m=z.call({lexer:this},o),typeof m=="number"&&m>=0&&(g=Math.min(g,m))}),g<1/0&&g>=0&&(p=n.substring(0,g+1))}if(e=this.tokenizer.inlineText(p,me))n=n.substring(e.raw.length),e.raw.slice(-1)!=="_"&&(b=e.raw.slice(-1)),h=!0,l=t[t.length-1],l&&l.type==="text"?(l.raw+=e.raw,l.text+=e.text):t.push(e);else if(n){const g="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(g);break}throw new Error(g)}}else n=n.substring(e.raw.length),t.push(e);return t}}class St{constructor(n){this.options=n||rt}code(n,t,e){const l=(t||"").match(/\S*/)[0];if(this.options.highlight){const p=this.options.highlight(n,l);p!=null&&p!==n&&(e=!0,n=p)}return n=n.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+J(l)+'">'+(e?n:J(n,!0))+`</code></pre>
`:"<pre><code>"+(e?n:J(n,!0))+`</code></pre>
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
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(n){return`<del>${n}</del>`}link(n,t,e){if((n=Ct(this.options.sanitize,this.options.baseUrl,n))===null)return e;let l='<a href="'+n+'"';return t&&(l+=' title="'+t+'"'),l+=">"+e+"</a>",l}image(n,t,e){if((n=Ct(this.options.sanitize,this.options.baseUrl,n))===null)return e;let l=`<img src="${n}" alt="${e}"`;return t&&(l+=` title="${t}"`),l+=this.options.xhtml?"/>":">",l}text(n){return n}}class Bt{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,t,e){return""+e}image(n,t,e){return""+e}br(){return""}}class Ht{constructor(){this.seen={}}serialize(n){return n.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(n,t){let e=n,l=0;if(this.seen.hasOwnProperty(e)){l=this.seen[n];do l++,e=n+"-"+l;while(this.seen.hasOwnProperty(e))}return t||(this.seen[n]=l,this.seen[e]=0),e}slug(n,t={}){const e=this.serialize(n);return this.getNextSafeSlug(e,t.dryrun)}}class it{constructor(n){this.options=n||rt,this.options.renderer=this.options.renderer||new St,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Bt,this.slugger=new Ht}static parse(n,t){return new it(t).parse(n)}static parseInline(n,t){return new it(t).parseInline(n)}parse(n,t=!0){let e,l,p,c,h,b,S,g,o,m,z,R,C,O,$,U,Z,B,q,P="";const F=n.length;for(e=0;e<F;e++)if(m=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[m.type]&&(q=this.options.extensions.renderers[m.type].call({parser:this},m),q!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(m.type)))P+=q||"";else switch(m.type){case"space":continue;case"hr":P+=this.renderer.hr();continue;case"heading":P+=this.renderer.heading(this.parseInline(m.tokens),m.depth,Zt(this.parseInline(m.tokens,this.textRenderer)),this.slugger);continue;case"code":P+=this.renderer.code(m.text,m.lang,m.escaped);continue;case"table":for(g="",S="",c=m.header.length,l=0;l<c;l++)S+=this.renderer.tablecell(this.parseInline(m.header[l].tokens),{header:!0,align:m.align[l]});for(g+=this.renderer.tablerow(S),o="",c=m.rows.length,l=0;l<c;l++){for(b=m.rows[l],S="",h=b.length,p=0;p<h;p++)S+=this.renderer.tablecell(this.parseInline(b[p].tokens),{header:!1,align:m.align[p]});o+=this.renderer.tablerow(S)}P+=this.renderer.table(g,o);continue;case"blockquote":o=this.parse(m.tokens),P+=this.renderer.blockquote(o);continue;case"list":for(z=m.ordered,R=m.start,C=m.loose,c=m.items.length,o="",l=0;l<c;l++)$=m.items[l],U=$.checked,Z=$.task,O="",$.task&&(B=this.renderer.checkbox(U),C?$.tokens.length>0&&$.tokens[0].type==="paragraph"?($.tokens[0].text=B+" "+$.tokens[0].text,$.tokens[0].tokens&&$.tokens[0].tokens.length>0&&$.tokens[0].tokens[0].type==="text"&&($.tokens[0].tokens[0].text=B+" "+$.tokens[0].tokens[0].text)):$.tokens.unshift({type:"text",text:B}):O+=B),O+=this.parse($.tokens,C),o+=this.renderer.listitem(O,Z,U);P+=this.renderer.list(o,z,R);continue;case"html":P+=this.renderer.html(m.text);continue;case"paragraph":P+=this.renderer.paragraph(this.parseInline(m.tokens));continue;case"text":for(o=m.tokens?this.parseInline(m.tokens):m.text;e+1<F&&n[e+1].type==="text";)m=n[++e],o+=`
`+(m.tokens?this.parseInline(m.tokens):m.text);P+=t?this.renderer.paragraph(o):o;continue;default:{const V='Token with "'+m.type+'" type was not found.';if(this.options.silent)return void console.error(V);throw new Error(V)}}return P}parseInline(n,t){t=t||this.renderer;let e,l,p,c="";const h=n.length;for(e=0;e<h;e++)if(l=n[e],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[l.type]&&(p=this.options.extensions.renderers[l.type].call({parser:this},l),p!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)))c+=p||"";else switch(l.type){case"escape":case"text":c+=t.text(l.text);break;case"html":c+=t.html(l.text);break;case"link":c+=t.link(l.href,l.title,this.parseInline(l.tokens,t));break;case"image":c+=t.image(l.href,l.title,l.text);break;case"strong":c+=t.strong(this.parseInline(l.tokens,t));break;case"em":c+=t.em(this.parseInline(l.tokens,t));break;case"codespan":c+=t.codespan(l.text);break;case"br":c+=t.br();break;case"del":c+=t.del(this.parseInline(l.tokens,t));break;default:{const b='Token with "'+l.type+'" type was not found.';if(this.options.silent)return void console.error(b);throw new Error(b)}}return c}}class kt{constructor(n){this.options=n||rt}preprocess(n){return n}postprocess(n){return n}}wt(kt,"passThroughHooks",new Set(["preprocess","postprocess"]));function jt(x,n){return(t,e,l)=>{typeof e=="function"&&(l=e,e=null);const p={...e},c=function(h,b,S){return g=>{if(g.message+=`
Please report this to https://github.com/markedjs/marked.`,h){const o="<p>An error occurred:</p><pre>"+J(g.message+"",!0)+"</pre>";return b?Promise.resolve(o):S?void S(null,o):o}if(b)return Promise.reject(g);if(!S)throw g;S(g)}}((e={...L.defaults,...p}).silent,e.async,l);if(t==null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(function(h){h&&h.sanitize&&!h.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(e),e.hooks&&(e.hooks.options=e),l){const h=e.highlight;let b;try{e.hooks&&(t=e.hooks.preprocess(t)),b=x(t,e)}catch(o){return c(o)}const S=function(o){let m;if(!o)try{e.walkTokens&&L.walkTokens(b,e.walkTokens),m=n(b,e),e.hooks&&(m=e.hooks.postprocess(m))}catch(z){o=z}return e.highlight=h,o?c(o):l(null,m)};if(!h||h.length<3||(delete e.highlight,!b.length))return S();let g=0;return L.walkTokens(b,function(o){o.type==="code"&&(g++,setTimeout(()=>{h(o.text,o.lang,function(m,z){if(m)return S(m);z!=null&&z!==o.text&&(o.text=z,o.escaped=!0),g--,g===0&&S()})},0))}),void(g===0&&S())}if(e.async)return Promise.resolve(e.hooks?e.hooks.preprocess(t):t).then(h=>x(h,e)).then(h=>e.walkTokens?Promise.all(L.walkTokens(h,e.walkTokens)).then(()=>h):h).then(h=>n(h,e)).then(h=>e.hooks?e.hooks.postprocess(h):h).catch(c);try{e.hooks&&(t=e.hooks.preprocess(t));const h=x(t,e);e.walkTokens&&L.walkTokens(h,e.walkTokens);let b=n(h,e);return e.hooks&&(b=e.hooks.postprocess(b)),b}catch(h){return c(h)}}}function L(x,n,t){return jt(st.lex,it.parse)(x,n,t)}L.options=L.setOptions=function(x){var n;return L.defaults={...L.defaults,...x},n=L.defaults,rt=n,L},L.getDefaults=re,L.defaults=rt,L.use=function(...x){const n=L.defaults.extensions||{renderers:{},childTokens:{}};x.forEach(t=>{const e={...t};if(e.async=L.defaults.async||e.async||!1,t.extensions&&(t.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if(l.renderer){const p=n.renderers[l.name];n.renderers[l.name]=p?function(...c){let h=l.renderer.apply(this,c);return h===!1&&(h=p.apply(this,c)),h}:l.renderer}if(l.tokenizer){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");n[l.level]?n[l.level].unshift(l.tokenizer):n[l.level]=[l.tokenizer],l.start&&(l.level==="block"?n.startBlock?n.startBlock.push(l.start):n.startBlock=[l.start]:l.level==="inline"&&(n.startInline?n.startInline.push(l.start):n.startInline=[l.start]))}l.childTokens&&(n.childTokens[l.name]=l.childTokens)}),e.extensions=n),t.renderer){const l=L.defaults.renderer||new St;for(const p in t.renderer){const c=l[p];l[p]=(...h)=>{let b=t.renderer[p].apply(l,h);return b===!1&&(b=c.apply(l,h)),b}}e.renderer=l}if(t.tokenizer){const l=L.defaults.tokenizer||new _t;for(const p in t.tokenizer){const c=l[p];l[p]=(...h)=>{let b=t.tokenizer[p].apply(l,h);return b===!1&&(b=c.apply(l,h)),b}}e.tokenizer=l}if(t.hooks){const l=L.defaults.hooks||new kt;for(const p in t.hooks){const c=l[p];kt.passThroughHooks.has(p)?l[p]=h=>{if(L.defaults.async)return Promise.resolve(t.hooks[p].call(l,h)).then(S=>c.call(l,S));const b=t.hooks[p].call(l,h);return c.call(l,b)}:l[p]=(...h)=>{let b=t.hooks[p].apply(l,h);return b===!1&&(b=c.apply(l,h)),b}}e.hooks=l}if(t.walkTokens){const l=L.defaults.walkTokens;e.walkTokens=function(p){let c=[];return c.push(t.walkTokens.call(this,p)),l&&(c=c.concat(l.call(this,p))),c}}L.setOptions(e)})},L.walkTokens=function(x,n){let t=[];for(const e of x)switch(t=t.concat(n.call(L,e)),e.type){case"table":for(const l of e.header)t=t.concat(L.walkTokens(l.tokens,n));for(const l of e.rows)for(const p of l)t=t.concat(L.walkTokens(p.tokens,n));break;case"list":t=t.concat(L.walkTokens(e.items,n));break;default:L.defaults.extensions&&L.defaults.extensions.childTokens&&L.defaults.extensions.childTokens[e.type]?L.defaults.extensions.childTokens[e.type].forEach(function(l){t=t.concat(L.walkTokens(e[l],n))}):e.tokens&&(t=t.concat(L.walkTokens(e.tokens,n)))}return t},L.parseInline=jt(st.lexInline,it.parseInline),L.Parser=it,L.parser=it.parse,L.Renderer=St,L.TextRenderer=Bt,L.Lexer=st,L.lexer=st.lex,L.Tokenizer=_t,L.Slugger=Ht,L.Hooks=kt,L.parse=L,L.options,L.setOptions,L.use,L.walkTokens,L.parseInline,it.parse,st.lex;/*!
 * The reveal.js markdown plugin. Handles parsing of
 * markdown inside of presentations as well as loading
 * of external markdown documents.
 */const Ot="__SCRIPT_END__",gt=/\[\s*((\d*):)?\s*([\s\d,|-]*)\]/,ke={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xe=()=>{let x;function n(g){let o=(g.querySelector("[data-template]")||g.querySelector("script")||g).textContent;o=o.replace(new RegExp(Ot,"g"),"<\/script>");const m=o.match(/^\n?(\s*)/)[1].length,z=o.match(/^\n?(\t*)/)[1].length;return z>0?o=o.replace(new RegExp("\\n?\\t{"+z+"}(.*)","g"),function(R,C){return`
`+C}):m>1&&(o=o.replace(new RegExp("\\n? {"+m+"}(.*)","g"),function(R,C){return`
`+C})),o}function t(g){const o=g.attributes,m=[];for(let z=0,R=o.length;z<R;z++){const C=o[z].name,O=o[z].value;/data\-(markdown|separator|vertical|notes)/gi.test(C)||(O?m.push(C+'="'+O+'"'):m.push(C))}return m.join(" ")}function e(g){var m;const o=(m=x==null?void 0:x.getConfig)==null?void 0:m.call(x).markdown;return(g=g||{}).separator=g.separator||(o==null?void 0:o.separator)||`\r?
---\r?
`,g.verticalSeparator=g.verticalSeparator||(o==null?void 0:o.verticalSeparator)||null,g.notesSeparator=g.notesSeparator||(o==null?void 0:o.notesSeparator)||"^s*notes?:",g.attributes=g.attributes||"",g}function l(g,o){o=e(o);const m=g.split(new RegExp(o.notesSeparator,"mgi"));return m.length===2&&(g=m[0]+'<aside class="notes">'+L(m[1].trim())+"</aside>"),'<script type="text/template">'+(g=g.replace(/<\/script>/g,Ot))+"<\/script>"}function p(g,o){o=e(o);const m=new RegExp(o.separator+(o.verticalSeparator?"|"+o.verticalSeparator:""),"mg"),z=new RegExp(o.separator);let R,C,O,$=0,U=!0,Z=[];for(;R=m.exec(g);)C=z.test(R[0]),!C&&U&&Z.push([]),O=g.substring($,R.index),C&&U?Z.push(O):Z[Z.length-1].push(O),$=m.lastIndex,U=C;(U?Z:Z[Z.length-1]).push(g.substring($));let B="";for(let q=0,P=Z.length;q<P;q++)Z[q]instanceof Array?(B+="<section "+o.attributes+">",Z[q].forEach(function(F){B+="<section data-markdown>"+l(F,o)+"</section>"}),B+="</section>"):B+="<section "+o.attributes+" data-markdown>"+l(Z[q],o)+"</section>";return B}function c(g){return new Promise(function(o){const m=[];[].slice.call(g.querySelectorAll("section[data-markdown]:not([data-markdown-parsed])")).forEach(function(z,R){z.getAttribute("data-markdown").length?m.push(function(C){return new Promise(function(O,$){const U=new XMLHttpRequest,Z=C.getAttribute("data-markdown"),B=C.getAttribute("data-charset");B!==null&&B!==""&&U.overrideMimeType("text/html; charset="+B),U.onreadystatechange=(function(q,P){P.readyState===4&&(P.status>=200&&P.status<300||P.status===0?O(P,Z):$(P,Z))}).bind(this,C,U),U.open("GET",Z,!0);try{U.send()}catch(q){console.warn("Failed to get the Markdown file "+Z+". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. "+q),O(U,Z)}})}(z).then(function(C,O){z.outerHTML=p(C.responseText,{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:t(z)})},function(C,O){z.outerHTML='<section data-state="alert">ERROR: The attempt to fetch '+O+" failed with HTTP status "+C.status+".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>"})):z.outerHTML=p(n(z),{separator:z.getAttribute("data-separator"),verticalSeparator:z.getAttribute("data-separator-vertical"),notesSeparator:z.getAttribute("data-separator-notes"),attributes:t(z)})}),Promise.all(m).then(o)})}function h(g,o,m){const z=new RegExp(m,"mg"),R=new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])',"mg");let C,O,$=g.nodeValue;if(C=z.exec($)){const U=C[1];for($=$.substring(0,C.index)+$.substring(z.lastIndex),g.nodeValue=$;O=R.exec(U);)O[2]?o.setAttribute(O[1],O[2]):o.setAttribute(O[3],"");return!0}return!1}function b(g,o,m,z,R){if(o!==null&&o.childNodes!==void 0&&o.childNodes.length>0){let C=o;for(let O=0;O<o.childNodes.length;O++){const $=o.childNodes[O];if(O>0){let Z=O-1;for(;Z>=0;){const B=o.childNodes[Z];if(typeof B.setAttribute=="function"&&B.tagName!=="BR"){C=B;break}Z-=1}}let U=g;$.nodeName==="section"&&(U=$,C=$),typeof $.setAttribute!="function"&&$.nodeType!==Node.COMMENT_NODE||b(U,$,C,z,R)}}o.nodeType===Node.COMMENT_NODE&&h(o,m,z)===!1&&h(o,g,R)}function S(){const g=x.getRevealElement().querySelectorAll("[data-markdown]:not([data-markdown-parsed])");return[].slice.call(g).forEach(function(o){o.setAttribute("data-markdown-parsed",!0);const m=o.querySelector("aside.notes"),z=n(o);o.innerHTML=L(z),b(o,o,null,o.getAttribute("data-element-attributes")||o.parentNode.getAttribute("data-element-attributes")||"\\.element\\s*?(.+?)$",o.getAttribute("data-attributes")||o.parentNode.getAttribute("data-attributes")||"\\.slide:\\s*?(\\S.+?)$"),m&&o.appendChild(m)}),Promise.resolve()}return{id:"markdown",init:function(g){x=g;let{renderer:o,animateLists:m,...z}=x.getConfig().markdown||{};return o||(o=new L.Renderer,o.code=(R,C)=>{let O="",$="";if(gt.test(C)){let U=C.match(gt)[2];U&&(O=`data-ln-start-from="${U.trim()}"`),$=C.match(gt)[3].trim(),$=`data-line-numbers="${$}"`,C=C.replace(gt,"").trim()}return`<pre><code ${$} ${O} class="${C}">${R=R.replace(/([&<>'"])/g,U=>ke[U])}</code></pre>`}),m===!0&&(o.listitem=R=>`<li class="fragment">${R}</li>`),L.setOptions({renderer:o,...z}),c(x.getRevealElement()).then(S)},processSlides:c,convertSlides:S,slidify:p,marked:L}};var Qt={exports:{}};(function(x,n){(function(t,e){x.exports=e()})(ee,function(){function t(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let e={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const l=/[&<>"']/,p=new RegExp(l.source,"g"),c=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,h=new RegExp(c.source,"g"),b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},S=E=>b[E];function g(E,r){if(r){if(l.test(E))return E.replace(p,S)}else if(c.test(E))return E.replace(h,S);return E}const o=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function m(E){return E.replace(o,(r,s)=>(s=s.toLowerCase())==="colon"?":":s.charAt(0)==="#"?s.charAt(1)==="x"?String.fromCharCode(parseInt(s.substring(2),16)):String.fromCharCode(+s.substring(1)):"")}const z=/(^|[^\[])\^/g;function R(E,r){E=typeof E=="string"?E:E.source,r=r||"";const s={replace:(i,a)=>(a=(a=a.source||a).replace(z,"$1"),E=E.replace(i,a),s),getRegex:()=>new RegExp(E,r)};return s}const C=/[^\w:]/g,O=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function $(E,r,s){if(E){let i;try{i=decodeURIComponent(m(s)).replace(C,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}r&&!O.test(s)&&(s=function(i,a){U[" "+i]||(Z.test(i)?U[" "+i]=i+"/":U[" "+i]=V(i,"/",!0)),i=U[" "+i];const f=i.indexOf(":")===-1;return a.substring(0,2)==="//"?f?a:i.replace(B,"$1")+a:a.charAt(0)==="/"?f?a:i.replace(q,"$1")+a:i+a}(r,s));try{s=encodeURI(s).replace(/%25/g,"%")}catch{return null}return s}const U={},Z=/^[^:]+:\/*[^/]*$/,B=/^([^:]+:)[\s\S]*$/,q=/^([^:]+:\/*[^/]*)[\s\S]*$/,P={exec:function(){}};function F(E,r){const s=E.replace(/\|/g,(a,f,d)=>{let u=!1,k=f;for(;--k>=0&&d[k]==="\\";)u=!u;return u?"|":" |"}).split(/ \|/);let i=0;if(s[0].trim()||s.shift(),s.length>0&&!s[s.length-1].trim()&&s.pop(),s.length>r)s.splice(r);else for(;s.length<r;)s.push("");for(;i<s.length;i++)s[i]=s[i].trim().replace(/\\\|/g,"|");return s}function V(E,r,s){const i=E.length;if(i===0)return"";let a=0;for(;a<i;){const f=E.charAt(i-a-1);if(f!==r||s){if(f===r||!s)break;a++}else a++}return E.slice(0,i-a)}function G(E,r){if(r<1)return"";let s="";for(;r>1;)1&r&&(s+=E),r>>=1,E+=E;return s+E}function lt(E,r,s,i){const a=r.href,f=r.title?g(r.title):null,d=E[1].replace(/\\([\[\]])/g,"$1");if(E[0].charAt(0)!=="!"){i.state.inLink=!0;const u={type:"link",raw:s,href:a,title:f,text:d,tokens:i.inlineTokens(d)};return i.state.inLink=!1,u}return{type:"image",raw:s,href:a,title:f,text:g(d)}}class at{constructor(r){this.options=r||e}space(r){const s=this.rules.block.newline.exec(r);if(s&&s[0].length>0)return{type:"space",raw:s[0]}}code(r){const s=this.rules.block.code.exec(r);if(s){const i=s[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:s[0],codeBlockStyle:"indented",text:this.options.pedantic?i:V(i,`
`)}}}fences(r){const s=this.rules.block.fences.exec(r);if(s){const i=s[0],a=function(f,d){const u=f.match(/^(\s+)(?:```)/);if(u===null)return d;const k=u[1];return d.split(`
`).map(y=>{const A=y.match(/^\s+/);if(A===null)return y;const[w]=A;return w.length>=k.length?y.slice(k.length):y}).join(`
`)}(i,s[3]||"");return{type:"code",raw:i,lang:s[2]?s[2].trim().replace(this.rules.inline._escapes,"$1"):s[2],text:a}}}heading(r){const s=this.rules.block.heading.exec(r);if(s){let i=s[2].trim();if(/#$/.test(i)){const a=V(i,"#");this.options.pedantic?i=a.trim():a&&!/ $/.test(a)||(i=a.trim())}return{type:"heading",raw:s[0],depth:s[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(r){const s=this.rules.block.hr.exec(r);if(s)return{type:"hr",raw:s[0]}}blockquote(r){const s=this.rules.block.blockquote.exec(r);if(s){const i=s[0].replace(/^ *>[ \t]?/gm,""),a=this.lexer.state.top;this.lexer.state.top=!0;const f=this.lexer.blockTokens(i);return this.lexer.state.top=a,{type:"blockquote",raw:s[0],tokens:f,text:i}}}list(r){let s=this.rules.block.list.exec(r);if(s){let i,a,f,d,u,k,y,A,w,_,j,X,W=s[1].trim();const Y=W.length>1,D={type:"list",raw:"",ordered:Y,start:Y?+W.slice(0,-1):"",loose:!1,items:[]};W=Y?`\\d{1,9}\\${W.slice(-1)}`:`\\${W}`,this.options.pedantic&&(W=Y?W:"[*+-]");const ct=new RegExp(`^( {0,3}${W})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;r&&(X=!1,s=ct.exec(r))&&!this.rules.block.hr.test(r);){if(i=s[0],r=r.substring(i.length),A=s[2].split(`
`,1)[0].replace(/^\t+/,K=>" ".repeat(3*K.length)),w=r.split(`
`,1)[0],this.options.pedantic?(d=2,j=A.trimLeft()):(d=s[2].search(/[^ ]/),d=d>4?1:d,j=A.slice(d),d+=s[1].length),k=!1,!A&&/^ *$/.test(w)&&(i+=w+`
`,r=r.substring(w.length+1),X=!0),!X){const K=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),nt=new RegExp(`^ {0,${Math.min(3,d-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),Q=new RegExp(`^ {0,${Math.min(3,d-1)}}(?:\`\`\`|~~~)`),ht=new RegExp(`^ {0,${Math.min(3,d-1)}}#`);for(;r&&(_=r.split(`
`,1)[0],w=_,this.options.pedantic&&(w=w.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!Q.test(w))&&!ht.test(w)&&!K.test(w)&&!nt.test(r);){if(w.search(/[^ ]/)>=d||!w.trim())j+=`
`+w.slice(d);else{if(k||A.search(/[^ ]/)>=4||Q.test(A)||ht.test(A)||nt.test(A))break;j+=`
`+w}k||w.trim()||(k=!0),i+=_+`
`,r=r.substring(_.length+1),A=w.slice(d)}}D.loose||(y?D.loose=!0:/\n *\n *$/.test(i)&&(y=!0)),this.options.gfm&&(a=/^\[[ xX]\] /.exec(j),a&&(f=a[0]!=="[ ] ",j=j.replace(/^\[[ xX]\] +/,""))),D.items.push({type:"list_item",raw:i,task:!!a,checked:f,loose:!1,text:j}),D.raw+=i}D.items[D.items.length-1].raw=i.trimRight(),D.items[D.items.length-1].text=j.trimRight(),D.raw=D.raw.trimRight();const pt=D.items.length;for(u=0;u<pt;u++)if(this.lexer.state.top=!1,D.items[u].tokens=this.lexer.blockTokens(D.items[u].text,[]),!D.loose){const K=D.items[u].tokens.filter(Q=>Q.type==="space"),nt=K.length>0&&K.some(Q=>/\n.*\n/.test(Q.raw));D.loose=nt}if(D.loose)for(u=0;u<pt;u++)D.items[u].loose=!0;return D}}html(r){const s=this.rules.block.html.exec(r);if(s){const i={type:"html",raw:s[0],pre:!this.options.sanitizer&&(s[1]==="pre"||s[1]==="script"||s[1]==="style"),text:s[0]};if(this.options.sanitize){const a=this.options.sanitizer?this.options.sanitizer(s[0]):g(s[0]);i.type="paragraph",i.text=a,i.tokens=this.lexer.inline(a)}return i}}def(r){const s=this.rules.block.def.exec(r);if(s){const i=s[1].toLowerCase().replace(/\s+/g," "),a=s[2]?s[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",f=s[3]?s[3].substring(1,s[3].length-1).replace(this.rules.inline._escapes,"$1"):s[3];return{type:"def",tag:i,raw:s[0],href:a,title:f}}}table(r){const s=this.rules.block.table.exec(r);if(s){const i={type:"table",header:F(s[1]).map(a=>({text:a})),align:s[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:s[3]&&s[3].trim()?s[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=s[0];let a,f,d,u,k=i.align.length;for(a=0;a<k;a++)/^ *-+: *$/.test(i.align[a])?i.align[a]="right":/^ *:-+: *$/.test(i.align[a])?i.align[a]="center":/^ *:-+ *$/.test(i.align[a])?i.align[a]="left":i.align[a]=null;for(k=i.rows.length,a=0;a<k;a++)i.rows[a]=F(i.rows[a],i.header.length).map(y=>({text:y}));for(k=i.header.length,f=0;f<k;f++)i.header[f].tokens=this.lexer.inline(i.header[f].text);for(k=i.rows.length,f=0;f<k;f++)for(u=i.rows[f],d=0;d<u.length;d++)u[d].tokens=this.lexer.inline(u[d].text);return i}}}lheading(r){const s=this.rules.block.lheading.exec(r);if(s)return{type:"heading",raw:s[0],depth:s[2].charAt(0)==="="?1:2,text:s[1],tokens:this.lexer.inline(s[1])}}paragraph(r){const s=this.rules.block.paragraph.exec(r);if(s){const i=s[1].charAt(s[1].length-1)===`
`?s[1].slice(0,-1):s[1];return{type:"paragraph",raw:s[0],text:i,tokens:this.lexer.inline(i)}}}text(r){const s=this.rules.block.text.exec(r);if(s)return{type:"text",raw:s[0],text:s[0],tokens:this.lexer.inline(s[0])}}escape(r){const s=this.rules.inline.escape.exec(r);if(s)return{type:"escape",raw:s[0],text:g(s[1])}}tag(r){const s=this.rules.inline.tag.exec(r);if(s)return!this.lexer.state.inLink&&/^<a /i.test(s[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(s[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(s[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(s[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:s[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):g(s[0]):s[0]}}link(r){const s=this.rules.inline.link.exec(r);if(s){const i=s[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const d=V(i.slice(0,-1),"\\");if((i.length-d.length)%2==0)return}else{const d=function(u,k){if(u.indexOf(k[1])===-1)return-1;const y=u.length;let A=0,w=0;for(;w<y;w++)if(u[w]==="\\")w++;else if(u[w]===k[0])A++;else if(u[w]===k[1]&&(A--,A<0))return w;return-1}(s[2],"()");if(d>-1){const u=(s[0].indexOf("!")===0?5:4)+s[1].length+d;s[2]=s[2].substring(0,d),s[0]=s[0].substring(0,u).trim(),s[3]=""}}let a=s[2],f="";if(this.options.pedantic){const d=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);d&&(a=d[1],f=d[3])}else f=s[3]?s[3].slice(1,-1):"";return a=a.trim(),/^</.test(a)&&(a=this.options.pedantic&&!/>$/.test(i)?a.slice(1):a.slice(1,-1)),lt(s,{href:a&&a.replace(this.rules.inline._escapes,"$1"),title:f&&f.replace(this.rules.inline._escapes,"$1")},s[0],this.lexer)}}reflink(r,s){let i;if((i=this.rules.inline.reflink.exec(r))||(i=this.rules.inline.nolink.exec(r))){let a=(i[2]||i[1]).replace(/\s+/g," ");if(a=s[a.toLowerCase()],!a){const f=i[0].charAt(0);return{type:"text",raw:f,text:f}}return lt(i,a,i[0],this.lexer)}}emStrong(r,s,i=""){let a=this.rules.inline.emStrong.lDelim.exec(r);if(!a||a[3]&&i.match(/[\p{L}\p{N}]/u))return;const f=a[1]||a[2]||"";if(!f||f&&(i===""||this.rules.inline.punctuation.exec(i))){const d=a[0].length-1;let u,k,y=d,A=0;const w=a[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(w.lastIndex=0,s=s.slice(-1*r.length+d);(a=w.exec(s))!=null;){if(u=a[1]||a[2]||a[3]||a[4]||a[5]||a[6],!u)continue;if(k=u.length,a[3]||a[4]){y+=k;continue}if((a[5]||a[6])&&d%3&&!((d+k)%3)){A+=k;continue}if(y-=k,y>0)continue;k=Math.min(k,k+y+A);const _=r.slice(0,d+a.index+(a[0].length-u.length)+k);if(Math.min(d,k)%2){const X=_.slice(1,-1);return{type:"em",raw:_,text:X,tokens:this.lexer.inlineTokens(X)}}const j=_.slice(2,-2);return{type:"strong",raw:_,text:j,tokens:this.lexer.inlineTokens(j)}}}}codespan(r){const s=this.rules.inline.code.exec(r);if(s){let i=s[2].replace(/\n/g," ");const a=/[^ ]/.test(i),f=/^ /.test(i)&&/ $/.test(i);return a&&f&&(i=i.substring(1,i.length-1)),i=g(i,!0),{type:"codespan",raw:s[0],text:i}}}br(r){const s=this.rules.inline.br.exec(r);if(s)return{type:"br",raw:s[0]}}del(r){const s=this.rules.inline.del.exec(r);if(s)return{type:"del",raw:s[0],text:s[2],tokens:this.lexer.inlineTokens(s[2])}}autolink(r,s){const i=this.rules.inline.autolink.exec(r);if(i){let a,f;return i[2]==="@"?(a=g(this.options.mangle?s(i[1]):i[1]),f="mailto:"+a):(a=g(i[1]),f=a),{type:"link",raw:i[0],text:a,href:f,tokens:[{type:"text",raw:a,text:a}]}}}url(r,s){let i;if(i=this.rules.inline.url.exec(r)){let a,f;if(i[2]==="@")a=g(this.options.mangle?s(i[0]):i[0]),f="mailto:"+a;else{let d;do d=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(d!==i[0]);a=g(i[0]),f=i[1]==="www."?"http://"+i[0]:i[0]}return{type:"link",raw:i[0],text:a,href:f,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(r,s){const i=this.rules.inline.text.exec(r);if(i){let a;return a=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):g(i[0]):i[0]:g(this.options.smartypants?s(i[0]):i[0]),{type:"text",raw:i[0],text:a}}}}const I={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:P,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};I.def=R(I.def).replace("label",I._label).replace("title",I._title).getRegex(),I.bullet=/(?:[*+-]|\d{1,9}[.)])/,I.listItemStart=R(/^( *)(bull) */).replace("bull",I.bullet).getRegex(),I.list=R(I.list).replace(/bull/g,I.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+I.def.source+")").getRegex(),I._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",I._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,I.html=R(I.html,"i").replace("comment",I._comment).replace("tag",I._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),I.paragraph=R(I._paragraph).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.blockquote=R(I.blockquote).replace("paragraph",I.paragraph).getRegex(),I.normal={...I},I.gfm={...I.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},I.gfm.table=R(I.gfm.table).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.gfm.paragraph=R(I._paragraph).replace("hr",I.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",I.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",I._tag).getRegex(),I.pedantic={...I.normal,html:R(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",I._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:P,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:R(I.normal._paragraph).replace("hr",I.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",I.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const v={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:P,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:P,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ot(E){return E.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function $t(E){let r,s,i="";const a=E.length;for(r=0;r<a;r++)s=E.charCodeAt(r),Math.random()>.5&&(s="x"+s.toString(16)),i+="&#"+s+";";return i}v._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",v.punctuation=R(v.punctuation).replace(/punctuation/g,v._punctuation).getRegex(),v.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,v.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,v._comment=R(I._comment).replace("(?:-->|$)","-->").getRegex(),v.emStrong.lDelim=R(v.emStrong.lDelim).replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimAst=R(v.emStrong.rDelimAst,"g").replace(/punct/g,v._punctuation).getRegex(),v.emStrong.rDelimUnd=R(v.emStrong.rDelimUnd,"g").replace(/punct/g,v._punctuation).getRegex(),v._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,v._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,v._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,v.autolink=R(v.autolink).replace("scheme",v._scheme).replace("email",v._email).getRegex(),v._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,v.tag=R(v.tag).replace("comment",v._comment).replace("attribute",v._attribute).getRegex(),v._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,v._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,v._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,v.link=R(v.link).replace("label",v._label).replace("href",v._href).replace("title",v._title).getRegex(),v.reflink=R(v.reflink).replace("label",v._label).replace("ref",I._label).getRegex(),v.nolink=R(v.nolink).replace("ref",I._label).getRegex(),v.reflinkSearch=R(v.reflinkSearch,"g").replace("reflink",v.reflink).replace("nolink",v.nolink).getRegex(),v.normal={...v},v.pedantic={...v.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R(/^!?\[(label)\]\((.*?)\)/).replace("label",v._label).getRegex(),reflink:R(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",v._label).getRegex()},v.gfm={...v.normal,escape:R(v.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},v.gfm.url=R(v.gfm.url,"i").replace("email",v.gfm._extended_email).getRegex(),v.breaks={...v.gfm,br:R(v.br).replace("{2,}","*").getRegex(),text:R(v.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class tt{constructor(r){this.tokens=[],this.tokens.links=Object.create(null),this.options=r||e,this.options.tokenizer=this.options.tokenizer||new at,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const s={block:I.normal,inline:v.normal};this.options.pedantic?(s.block=I.pedantic,s.inline=v.pedantic):this.options.gfm&&(s.block=I.gfm,this.options.breaks?s.inline=v.breaks:s.inline=v.gfm),this.tokenizer.rules=s}static get rules(){return{block:I,inline:v}}static lex(r,s){return new tt(s).lex(r)}static lexInline(r,s){return new tt(s).inlineTokens(r)}lex(r){let s;for(r=r.replace(/\r\n|\r/g,`
`),this.blockTokens(r,this.tokens);s=this.inlineQueue.shift();)this.inlineTokens(s.src,s.tokens);return this.tokens}blockTokens(r,s=[]){let i,a,f,d;for(r=this.options.pedantic?r.replace(/\t/g,"    ").replace(/^ +$/gm,""):r.replace(/^( *)(\t+)/gm,(u,k,y)=>k+"    ".repeat(y.length));r;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(u=>!!(i=u.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.space(r))r=r.substring(i.raw.length),i.raw.length===1&&s.length>0?s[s.length-1].raw+=`
`:s.push(i);else if(i=this.tokenizer.code(r))r=r.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?s.push(i):(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.fences(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.heading(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.hr(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.blockquote(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.list(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.html(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.def(r))r=r.substring(i.raw.length),a=s[s.length-1],!a||a.type!=="paragraph"&&a.type!=="text"?this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}):(a.raw+=`
`+i.raw,a.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=a.text);else if(i=this.tokenizer.table(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.lheading(r))r=r.substring(i.raw.length),s.push(i);else{if(f=r,this.options.extensions&&this.options.extensions.startBlock){let u=1/0;const k=r.slice(1);let y;this.options.extensions.startBlock.forEach(function(A){y=A.call({lexer:this},k),typeof y=="number"&&y>=0&&(u=Math.min(u,y))}),u<1/0&&u>=0&&(f=r.substring(0,u+1))}if(this.state.top&&(i=this.tokenizer.paragraph(f)))a=s[s.length-1],d&&a.type==="paragraph"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i),d=f.length!==r.length,r=r.substring(i.raw.length);else if(i=this.tokenizer.text(r))r=r.substring(i.raw.length),a=s[s.length-1],a&&a.type==="text"?(a.raw+=`
`+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=a.text):s.push(i);else if(r){const u="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}return this.state.top=!0,s}inline(r,s=[]){return this.inlineQueue.push({src:r,tokens:s}),s}inlineTokens(r,s=[]){let i,a,f,d,u,k,y=r;if(this.tokens.links){const A=Object.keys(this.tokens.links);if(A.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(y))!=null;)A.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(y=y.slice(0,d.index)+"["+G("a",d[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(y))!=null;)y=y.slice(0,d.index)+"["+G("a",d[0].length-2)+"]"+y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.escapedEmSt.exec(y))!=null;)y=y.slice(0,d.index+d[0].length-2)+"++"+y.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;r;)if(u||(k=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(A=>!!(i=A.call({lexer:this},r,s))&&(r=r.substring(i.raw.length),s.push(i),!0))))if(i=this.tokenizer.escape(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.tag(r))r=r.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.link(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.reflink(r,this.tokens.links))r=r.substring(i.raw.length),a=s[s.length-1],a&&i.type==="text"&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(i=this.tokenizer.emStrong(r,y,k))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.codespan(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.br(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.del(r))r=r.substring(i.raw.length),s.push(i);else if(i=this.tokenizer.autolink(r,$t))r=r.substring(i.raw.length),s.push(i);else if(this.state.inLink||!(i=this.tokenizer.url(r,$t))){if(f=r,this.options.extensions&&this.options.extensions.startInline){let A=1/0;const w=r.slice(1);let _;this.options.extensions.startInline.forEach(function(j){_=j.call({lexer:this},w),typeof _=="number"&&_>=0&&(A=Math.min(A,_))}),A<1/0&&A>=0&&(f=r.substring(0,A+1))}if(i=this.tokenizer.inlineText(f,ot))r=r.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(k=i.raw.slice(-1)),u=!0,a=s[s.length-1],a&&a.type==="text"?(a.raw+=i.raw,a.text+=i.text):s.push(i);else if(r){const A="Infinite loop on byte: "+r.charCodeAt(0);if(this.options.silent){console.error(A);break}throw new Error(A)}}else r=r.substring(i.raw.length),s.push(i);return s}}class bt{constructor(r){this.options=r||e}code(r,s,i){const a=(s||"").match(/\S*/)[0];if(this.options.highlight){const f=this.options.highlight(r,a);f!=null&&f!==r&&(i=!0,r=f)}return r=r.replace(/\n$/,"")+`
`,a?'<pre><code class="'+this.options.langPrefix+g(a)+'">'+(i?r:g(r,!0))+`</code></pre>
`:"<pre><code>"+(i?r:g(r,!0))+`</code></pre>
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
`}strong(r){return`<strong>${r}</strong>`}em(r){return`<em>${r}</em>`}codespan(r){return`<code>${r}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(r){return`<del>${r}</del>`}link(r,s,i){if((r=$(this.options.sanitize,this.options.baseUrl,r))===null)return i;let a='<a href="'+r+'"';return s&&(a+=' title="'+s+'"'),a+=">"+i+"</a>",a}image(r,s,i){if((r=$(this.options.sanitize,this.options.baseUrl,r))===null)return i;let a=`<img src="${r}" alt="${i}"`;return s&&(a+=` title="${s}"`),a+=this.options.xhtml?"/>":">",a}text(r){return r}}class Tt{strong(r){return r}em(r){return r}codespan(r){return r}del(r){return r}html(r){return r}text(r){return r}link(r,s,i){return""+i}image(r,s,i){return""+i}br(){return""}}class zt{constructor(){this.seen={}}serialize(r){return r.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(r,s){let i=r,a=0;if(this.seen.hasOwnProperty(i)){a=this.seen[r];do a++,i=r+"-"+a;while(this.seen.hasOwnProperty(i))}return s||(this.seen[r]=a,this.seen[i]=0),i}slug(r,s={}){const i=this.serialize(r);return this.getNextSafeSlug(i,s.dryrun)}}class et{constructor(r){this.options=r||e,this.options.renderer=this.options.renderer||new bt,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Tt,this.slugger=new zt}static parse(r,s){return new et(s).parse(r)}static parseInline(r,s){return new et(s).parseInline(r)}parse(r,s=!0){let i,a,f,d,u,k,y,A,w,_,j,X,W,Y,D,ct,pt,K,nt,Q="";const ht=r.length;for(i=0;i<ht;i++)if(_=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[_.type]&&(nt=this.options.extensions.renderers[_.type].call({parser:this},_),nt!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(_.type)))Q+=nt||"";else switch(_.type){case"space":continue;case"hr":Q+=this.renderer.hr();continue;case"heading":Q+=this.renderer.heading(this.parseInline(_.tokens),_.depth,m(this.parseInline(_.tokens,this.textRenderer)),this.slugger);continue;case"code":Q+=this.renderer.code(_.text,_.lang,_.escaped);continue;case"table":for(A="",y="",d=_.header.length,a=0;a<d;a++)y+=this.renderer.tablecell(this.parseInline(_.header[a].tokens),{header:!0,align:_.align[a]});for(A+=this.renderer.tablerow(y),w="",d=_.rows.length,a=0;a<d;a++){for(k=_.rows[a],y="",u=k.length,f=0;f<u;f++)y+=this.renderer.tablecell(this.parseInline(k[f].tokens),{header:!1,align:_.align[f]});w+=this.renderer.tablerow(y)}Q+=this.renderer.table(A,w);continue;case"blockquote":w=this.parse(_.tokens),Q+=this.renderer.blockquote(w);continue;case"list":for(j=_.ordered,X=_.start,W=_.loose,d=_.items.length,w="",a=0;a<d;a++)D=_.items[a],ct=D.checked,pt=D.task,Y="",D.task&&(K=this.renderer.checkbox(ct),W?D.tokens.length>0&&D.tokens[0].type==="paragraph"?(D.tokens[0].text=K+" "+D.tokens[0].text,D.tokens[0].tokens&&D.tokens[0].tokens.length>0&&D.tokens[0].tokens[0].type==="text"&&(D.tokens[0].tokens[0].text=K+" "+D.tokens[0].tokens[0].text)):D.tokens.unshift({type:"text",text:K}):Y+=K),Y+=this.parse(D.tokens,W),w+=this.renderer.listitem(Y,pt,ct);Q+=this.renderer.list(w,j,X);continue;case"html":Q+=this.renderer.html(_.text);continue;case"paragraph":Q+=this.renderer.paragraph(this.parseInline(_.tokens));continue;case"text":for(w=_.tokens?this.parseInline(_.tokens):_.text;i+1<ht&&r[i+1].type==="text";)_=r[++i],w+=`
`+(_.tokens?this.parseInline(_.tokens):_.text);Q+=s?this.renderer.paragraph(w):w;continue;default:{const Rt='Token with "'+_.type+'" type was not found.';if(this.options.silent)return void console.error(Rt);throw new Error(Rt)}}return Q}parseInline(r,s){s=s||this.renderer;let i,a,f,d="";const u=r.length;for(i=0;i<u;i++)if(a=r[i],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[a.type]&&(f=this.options.extensions.renderers[a.type].call({parser:this},a),f!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)))d+=f||"";else switch(a.type){case"escape":case"text":d+=s.text(a.text);break;case"html":d+=s.html(a.text);break;case"link":d+=s.link(a.href,a.title,this.parseInline(a.tokens,s));break;case"image":d+=s.image(a.href,a.title,a.text);break;case"strong":d+=s.strong(this.parseInline(a.tokens,s));break;case"em":d+=s.em(this.parseInline(a.tokens,s));break;case"codespan":d+=s.codespan(a.text);break;case"br":d+=s.br();break;case"del":d+=s.del(this.parseInline(a.tokens,s));break;default:{const k='Token with "'+a.type+'" type was not found.';if(this.options.silent)return void console.error(k);throw new Error(k)}}return d}}class ut{constructor(r){this.options=r||e}preprocess(r){return r}postprocess(r){return r}}wt(ut,"passThroughHooks",new Set(["preprocess","postprocess"]));function At(E,r){return(s,i,a)=>{typeof i=="function"&&(a=i,i=null);const f={...i},d=function(u,k,y){return A=>{if(A.message+=`
Please report this to https://github.com/markedjs/marked.`,u){const w="<p>An error occurred:</p><pre>"+g(A.message+"",!0)+"</pre>";return k?Promise.resolve(w):y?void y(null,w):w}if(k)return Promise.reject(A);if(!y)throw A;y(A)}}((i={...M.defaults,...f}).silent,i.async,a);if(s==null)return d(new Error("marked(): input parameter is undefined or null"));if(typeof s!="string")return d(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(s)+", string expected"));if(function(u){u&&u.sanitize&&!u.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}(i),i.hooks&&(i.hooks.options=i),a){const u=i.highlight;let k;try{i.hooks&&(s=i.hooks.preprocess(s)),k=E(s,i)}catch(w){return d(w)}const y=function(w){let _;if(!w)try{i.walkTokens&&M.walkTokens(k,i.walkTokens),_=r(k,i),i.hooks&&(_=i.hooks.postprocess(_))}catch(j){w=j}return i.highlight=u,w?d(w):a(null,_)};if(!u||u.length<3||(delete i.highlight,!k.length))return y();let A=0;return M.walkTokens(k,function(w){w.type==="code"&&(A++,setTimeout(()=>{u(w.text,w.lang,function(_,j){if(_)return y(_);j!=null&&j!==w.text&&(w.text=j,w.escaped=!0),A--,A===0&&y()})},0))}),void(A===0&&y())}if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(s):s).then(u=>E(u,i)).then(u=>i.walkTokens?Promise.all(M.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>r(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(d);try{i.hooks&&(s=i.hooks.preprocess(s));const u=E(s,i);i.walkTokens&&M.walkTokens(u,i.walkTokens);let k=r(u,i);return i.hooks&&(k=i.hooks.postprocess(k)),k}catch(u){return d(u)}}}function M(E,r,s){return At(tt.lex,et.parse)(E,r,s)}return M.options=M.setOptions=function(E){var r;return M.defaults={...M.defaults,...E},r=M.defaults,e=r,M},M.getDefaults=t,M.defaults=e,M.use=function(...E){const r=M.defaults.extensions||{renderers:{},childTokens:{}};E.forEach(s=>{const i={...s};if(i.async=M.defaults.async||i.async||!1,s.extensions&&(s.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if(a.renderer){const f=r.renderers[a.name];r.renderers[a.name]=f?function(...d){let u=a.renderer.apply(this,d);return u===!1&&(u=f.apply(this,d)),u}:a.renderer}if(a.tokenizer){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");r[a.level]?r[a.level].unshift(a.tokenizer):r[a.level]=[a.tokenizer],a.start&&(a.level==="block"?r.startBlock?r.startBlock.push(a.start):r.startBlock=[a.start]:a.level==="inline"&&(r.startInline?r.startInline.push(a.start):r.startInline=[a.start]))}a.childTokens&&(r.childTokens[a.name]=a.childTokens)}),i.extensions=r),s.renderer){const a=M.defaults.renderer||new bt;for(const f in s.renderer){const d=a[f];a[f]=(...u)=>{let k=s.renderer[f].apply(a,u);return k===!1&&(k=d.apply(a,u)),k}}i.renderer=a}if(s.tokenizer){const a=M.defaults.tokenizer||new at;for(const f in s.tokenizer){const d=a[f];a[f]=(...u)=>{let k=s.tokenizer[f].apply(a,u);return k===!1&&(k=d.apply(a,u)),k}}i.tokenizer=a}if(s.hooks){const a=M.defaults.hooks||new ut;for(const f in s.hooks){const d=a[f];ut.passThroughHooks.has(f)?a[f]=u=>{if(M.defaults.async)return Promise.resolve(s.hooks[f].call(a,u)).then(y=>d.call(a,y));const k=s.hooks[f].call(a,u);return d.call(a,k)}:a[f]=(...u)=>{let k=s.hooks[f].apply(a,u);return k===!1&&(k=d.apply(a,u)),k}}i.hooks=a}if(s.walkTokens){const a=M.defaults.walkTokens;i.walkTokens=function(f){let d=[];return d.push(s.walkTokens.call(this,f)),a&&(d=d.concat(a.call(this,f))),d}}M.setOptions(i)})},M.walkTokens=function(E,r){let s=[];for(const i of E)switch(s=s.concat(r.call(M,i)),i.type){case"table":for(const a of i.header)s=s.concat(M.walkTokens(a.tokens,r));for(const a of i.rows)for(const f of a)s=s.concat(M.walkTokens(f.tokens,r));break;case"list":s=s.concat(M.walkTokens(i.items,r));break;default:M.defaults.extensions&&M.defaults.extensions.childTokens&&M.defaults.extensions.childTokens[i.type]?M.defaults.extensions.childTokens[i.type].forEach(function(a){s=s.concat(M.walkTokens(i[a],r))}):i.tokens&&(s=s.concat(M.walkTokens(i.tokens,r)))}return s},M.parseInline=At(tt.lexInline,et.parseInline),M.Parser=et,M.parser=et.parse,M.Renderer=bt,M.TextRenderer=Tt,M.Lexer=tt,M.lexer=tt.lex,M.Tokenizer=at,M.Slugger=zt,M.Hooks=ut,M.parse=M,M.options,M.setOptions,M.use,M.walkTokens,M.parseInline,et.parse,tt.lex,()=>{let E,r,s=null;function i(){if(s&&!s.closed)s.focus();else{if(s=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),s.marked=M,s.document.write(`<!--
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
</html>`),!s)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const u=r.getConfig().url,k=typeof u=="string"?u:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;E=setInterval(function(){s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:r.getState(),url:k}),"*")},500),window.addEventListener("message",f)})()}}function a(u){let k=r.getCurrentSlide(),y=k.querySelectorAll("aside.notes"),A=k.querySelector(".current-fragment"),w={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:r.getState()};if(k.hasAttribute("data-notes")&&(w.notes=k.getAttribute("data-notes"),w.whitespace="pre-wrap"),A){let _=A.querySelector("aside.notes");_?(w.notes=_.innerHTML,w.markdown=typeof _.getAttribute("data-markdown")=="string",y=null):A.hasAttribute("data-notes")&&(w.notes=A.getAttribute("data-notes"),w.whitespace="pre-wrap",y=null)}y&&y.length&&(y=Array.from(y).filter(_=>_.closest(".fragment")===null),w.notes=y.map(_=>_.innerHTML).join(`
`),w.markdown=y[0]&&typeof y[0].getAttribute("data-markdown")=="string"),s.postMessage(JSON.stringify(w),"*")}function f(u){if(function(k){try{return window.location.origin===k.source.location.origin}catch{return!1}}(u))try{let k=JSON.parse(u.data);k&&k.namespace==="reveal-notes"&&k.type==="connected"?(clearInterval(E),d()):k&&k.namespace==="reveal-notes"&&k.type==="call"&&function(y,A,w){let _=r[y].apply(r,A);s.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:_,callId:w}),"*")}(k.methodName,k.arguments,k.callId)}catch{}}function d(){r.on("slidechanged",a),r.on("fragmentshown",a),r.on("fragmenthidden",a),r.on("overviewhidden",a),r.on("overviewshown",a),r.on("paused",a),r.on("resumed",a),a()}return{id:"notes",init:function(u){r=u,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?i():window.addEventListener("message",k=>{if(!s&&typeof k.data=="string"){let A;try{A=JSON.parse(k.data)}catch{}A&&A.namespace==="reveal-notes"&&A.type==="heartbeat"&&(y=k.source,s&&!s.closed?s.focus():(s=y,window.addEventListener("message",f),d()))}var y}),r.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},function(){i()}))},open:i}}})})(Qt);var be=Qt.exports;const we=ne(be);/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const ye=()=>{let x,n,t,e,l,p,c;function h(){n=document.createElement("div"),n.classList.add("searchbox"),n.style.position="absolute",n.style.top="10px",n.style.right="10px",n.style.zIndex=10,n.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,t=n.querySelector(".searchinput"),t.style.width="240px",t.style.fontSize="14px",t.style.padding="4px 6px",t.style.color="#000",t.style.background="#fff",t.style.borderRadius="2px",t.style.border="0",t.style.outline="0",t.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",t.style["-webkit-appearance"]="none",x.getRevealElement().appendChild(n),t.addEventListener("keyup",function(o){o.keyCode===13?(o.preventDefault(),function(){if(p){var m=t.value;m===""?(c&&c.remove(),e=null):(c=new g("slidecontent"),e=c.apply(m),l=0)}e&&(e.length&&e.length<=l&&(l=0),e.length>l&&(x.slide(e[l].h,e[l].v),l++))}(),p=!1):p=!0},!1),S()}function b(){n||h(),n.style.display="inline",t.focus(),t.select()}function S(){n||h(),n.style.display="none",c&&c.remove()}function g(o,m){var z=document.getElementById(o)||document.body,R=m||"EM",C=new RegExp("^(?:"+R+"|SCRIPT|FORM)$"),O=["#ff6","#a0ffff","#9f9","#f99","#f6f"],$=[],U=0,Z="",B=[];this.setRegex=function(q){q=q.trim(),Z=new RegExp("("+q+")","i")},this.getRegex=function(){return Z.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(q){if(q!=null&&q&&Z&&!C.test(q.nodeName)){if(q.hasChildNodes())for(var P=0;P<q.childNodes.length;P++)this.hiliteWords(q.childNodes[P]);var F,V;if(q.nodeType==3&&(F=q.nodeValue)&&(V=Z.exec(F))){for(var G=q;G!=null&&G.nodeName!="SECTION";)G=G.parentNode;var lt=x.getIndices(G),at=B.length,I=!1;for(P=0;P<at;P++)B[P].h===lt.h&&B[P].v===lt.v&&(I=!0);I||B.push(lt),$[V[0].toLowerCase()]||($[V[0].toLowerCase()]=O[U++%O.length]);var v=document.createElement(R);v.appendChild(document.createTextNode(V[0])),v.style.backgroundColor=$[V[0].toLowerCase()],v.style.fontStyle="inherit",v.style.color="#000";var ot=q.splitText(V.index);ot.nodeValue=ot.nodeValue.substring(V[0].length),q.parentNode.insertBefore(v,ot)}}},this.remove=function(){for(var q,P=document.getElementsByTagName(R);P.length&&(q=P[0]);)q.parentNode.replaceChild(q.firstChild,q)},this.apply=function(q){if(q!=null&&q)return this.remove(),this.setRegex(q),this.hiliteWords(z),B}}return{id:"search",init:o=>{x=o,x.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(m){m.key=="F"&&(m.ctrlKey||m.metaKey)&&(m.preventDefault(),n||h(),n.style.display!=="inline"?b():S())},!1)},open:b}},ve={id:"decorations",init:x=>{_e(x)}};function _e(x){const n=x.getRevealElement(),t=Ft().public,e=document.createElement("div");e.setAttribute("id","decorations"),e.innerHTML=`
  <div id="overlay"></div>
  <div id="blue-pane"></div>
  <div id="purple-half-circle-top"></div>
  <div id="purple-half-circle-bottom"></div>
  <div id="yellow-strip"></div>
  <div id="yellow-half-strip"></div>
  <div id="touch-pane"><h3> </h3></div>
  <div id="empowering"><h3>“Empowering researchers across all disciplines through innovative research software”</h3></div>
  <div id="logo-color"><img src="/${t.baseURL}/styles/${t.style}/logo-fc.svg"></div>
  <div id="logo-part-white"><img src="/${t.baseURL}/styles/${t.style}/logo-fc-part-white.svg"></div>
  <div id="logo-white"><img src="/${t.baseURL}/styles/${t.style}/logo-fc-white.svg"></div>
  <div id="yellow-flag"><img class="left-e" src="/${t.baseURL}/styles/${t.style}/e-logo.svg"></img></div>
  <div id="purple-half-circle-logo"><img class="logo" src="/${t.baseURL}/styles/${t.style}/logo-fc-part-white.svg"></img></div>
  <div id="blue-strip"><div id="footer"></div></div>
  <img id="right-e" src="/${t.baseURL}/styles/${t.style}/letter-e.svg"></img>
  <img id="left-e" src="/${t.baseURL}/styles/${t.style}/e-logo.svg"></img>
  <div id="purple-blob">
    <div class="blob1"></div>
    <div class="blob2"></div>
    <div class="box"></div>
  </div>
  <div id="globe"><img src="/${t.baseURL}/styles/${t.style}/globe.png"></img></div>
  <div id="mail"><img src="/${t.baseURL}/styles/${t.style}/mail.png"></img></div>
  <div id="phone"><img src="/${t.baseURL}/styles/${t.style}/phone.png"></img></div>
  `,n.prepend(e)}const Se={class:"flex relative box-border h-full reveal bg-eScienceWhite z-10"},$e={class:"slides flex h-full w-full"},Te={"data-markdown":"","data-separator":"^\\r?\\n===\\r?\\n$","data-separator-vertical":"^\\r?\\n==\\r?\\n$","data-separator-notes":"^Note:"},ze={props:{slidescontent:{type:String,default:"Missing Document"}},methods:{stripFrontmatter(x){return x.replace(/^---$.*?^---$/ms,"")}}},Ae=Wt({...ze,__name:"Slides",setup(x){return Kt(()=>{console.log("Slides Mounted"),Et(()=>import("./B3O8JSaZ.js"),[],import.meta.url).then(n=>{Et(()=>import("./DN7Rh_EM.js"),[],import.meta.url).then(t=>{new n.default().initialize({controls:!0,progress:!0,center:!0,hash:!0,transition:"none",embedded:!0,showNotes:!0,plugins:[xe,t.default,we,ve,ye]})})})}),(n,t)=>(ft(),yt("div",Se,[vt("div",$e,[vt("section",Te,Xt(n.stripFrontmatter(x.slidescontent)),1)])]))}}),Re={},Ee={key:0,class:"overflow-hidden h-full border-8 rounded-xl border-eScienceWhite z-10"},Le={key:1,class:"flex justify-center items-center"},Ie={class:"flex m-4 my-10 w-2/3 bg-eScienceWhite justify-center py-8 px-12"};function Ce(x,n){const t=Ae,e=se,l=ie;return ft(),Gt(l,null,{default:te(({doc:p})=>[p.type==="slides"?(ft(),yt("div",Ee,[Lt(t,{slidescontent:p.plainText},null,8,["slidescontent"])])):(ft(),yt("div",Le,[vt("div",Ie,[Lt(e,{value:p,class:"font-body prose-lg max-w-4xl"},null,8,["value"])])]))]),_:1})}const He=Yt(Re,[["render",Ce]]);export{He as default};
