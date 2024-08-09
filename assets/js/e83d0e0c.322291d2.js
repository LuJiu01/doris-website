"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[96051],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),f=l,d=p["".concat(s,".").concat(f)]||p[f]||y[f]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},820135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const o={title:"HLL_EMPTY",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/hll-functions/hll-empty",id:"version-3.0/sql-manual/sql-functions/hll-functions/hll-empty",title:"HLL_EMPTY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/hll-functions/hll-empty.md",sourceDirName:"sql-manual/sql-functions/hll-functions",slug:"/sql-manual/sql-functions/hll-functions/hll-empty",permalink:"/docs/sql-manual/sql-functions/hll-functions/hll-empty",draft:!1,tags:[],version:"3.0",frontMatter:{title:"HLL_EMPTY",language:"en"},sidebar:"docs",previous:{title:"HLL_CARDINALITY",permalink:"/docs/sql-manual/sql-functions/hll-functions/hll-cardinality"},next:{title:"HLL_FROM_BASE64",permalink:"/docs/sql-manual/sql-functions/hll-functions/hll-from-base64"}},s={},c=[{value:"HLL_EMPTY",id:"hll_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function y(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"hll_empty"},"HLL_EMPTY"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"HLL_EMPTY(value)")),(0,l.yg)("p",null,"HLL_EMPTY returns a null value of type hll."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MySQL > select hll_cardinality(hll_empty());\n+------------------------------+\n| hll_cardinality(hll_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"HLL,HLL_EMPTY"))}y.isMDXComponent=!0}}]);