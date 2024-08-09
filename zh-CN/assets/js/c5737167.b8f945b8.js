"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[369824],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),y=a,m=p["".concat(i,".").concat(y)]||p[y]||d[y]||o;return t?r.createElement(m,s(s({ref:n},u),{},{components:t})):r.createElement(m,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=y;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},3222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"random_bytes",language:"zh-CN"},s=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/random_bytes",id:"version-2.1/sql-manual/sql-functions/string-functions/random_bytes",title:"random_bytes",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/random_bytes.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/random_bytes",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/random_bytes",draft:!1,tags:[],version:"2.1",frontMatter:{title:"random_bytes",language:"zh-CN"},sidebar:"docs",previous:{title:"ESQUERY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/esquery"},next:{title:"MULTI_SEARCH_ALL_POSITIONS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/search/multi-search-all-positions"}},i={},c=[{value:"random_bytes",id:"random_bytes",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"random_bytes"},"random_bytes"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"random_bytes\u51fd\u6570\u7528\u4e8e\u751f\u6210\u968f\u673a\u5b57\u8282\u5e8f\u5217\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"VARCHAR random_bytes(INT len)\n")),(0,a.yg)("h3",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"len: \u8be5\u53c2\u6570\u6307\u5b9a\u751f\u6210\u7684\u968f\u673a\u5b57\u8282\u5e8f\u5217\u7684\u957f\u5ea6\u3002")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select random_bytes(7);\n+------------------------------------------------+\n| random_bytes(7) |\n+------------------------------------------------+\n| 0x53edd97401fb6d                               |\n+------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"RANDOM BYTES\n")))}d.isMDXComponent=!0}}]);