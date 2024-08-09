"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[654035],{15680:(e,t,n)=>{n.d(t,{xA:()=>i,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||f[p]||s;return n?r.createElement(m,l(l({ref:t},i),{},{components:n})):r.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},891202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(58168),a=(n(296540),n(15680));const s={title:"NAMED_STRUCT",language:"en"},l=void 0,c={unversionedId:"sql-manual/sql-functions/struct-functions/named-struct",id:"sql-manual/sql-functions/struct-functions/named-struct",title:"NAMED_STRUCT",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/struct-functions/named-struct.md",sourceDirName:"sql-manual/sql-functions/struct-functions",slug:"/sql-manual/sql-functions/struct-functions/named-struct",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/named-struct",draft:!1,tags:[],version:"current",frontMatter:{title:"NAMED_STRUCT",language:"en"},sidebar:"docs",previous:{title:"STRUCT",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct"},next:{title:"STRUCT_ELEMENT",permalink:"/docs/dev/sql-manual/sql-functions/struct-functions/struct-element"}},o={},u=[{value:"named_struct",id:"named_struct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],i={toc:u},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"named_struct"},"named_struct"),(0,a.yg)("p",null,"named_struct"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"STRUCT<T1, T2, T3, ...> named_struct({VARCHAR, T1}, {VARCHAR, T2}, ...)")),(0,a.yg)("p",null,"Construct a struct with the given field names and values. "),(0,a.yg)("p",null,"The number of parameters must be non zero and even. With odd digits being the name of the field and could be string literal, with even digits being the value of the field and could be column or literal."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select named_struct('f1', 1, 'f2', 'a', 'f3', \"abc\");\n+-----------------------------------------------+\n| named_struct('f1', 1, 'f2', 'a', 'f3', 'abc') |\n+-----------------------------------------------+\n| {1, 'a', 'abc'}                               |\n+-----------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('a', null, 'b', \"v\");\n+-----------------------------------+\n| named_struct('a', NULL, 'b', 'v') |\n+-----------------------------------+\n| {NULL, 'v'}                       |\n+-----------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select named_struct('f1', k1, 'f2', k2, 'f3', null) from test_tb;\n+--------------------------------------------------+\n| named_struct('f1', `k1`, 'f2', `k2`, 'f3', NULL) |\n+--------------------------------------------------+\n| {1, 'a', NULL}                                   |\n+--------------------------------------------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"NAMED, STRUCT, NAMED_STRUCT"))}f.isMDXComponent=!0}}]);