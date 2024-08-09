"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[953895],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},g=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(y,s(s({ref:t},g),{},{components:r})):n.createElement(y,s({ref:t},g))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const i={title:"Overview",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-data-types/string/string-overview",id:"version-2.1/sql-manual/sql-data-types/string/string-overview",title:"Overview",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-data-types/string/string-overview.md",sourceDirName:"sql-manual/sql-data-types/string",slug:"/sql-manual/sql-data-types/string/string-overview",permalink:"/docs/2.1/sql-manual/sql-data-types/string/string-overview",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"DATETIME",permalink:"/docs/2.1/sql-manual/sql-data-types/datetime/"},next:{title:"CHAR",permalink:"/docs/2.1/sql-manual/sql-data-types/string/CHAR"}},o={},p=[],g={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris supports both fixed-length and variable-length strings, including:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/2.1/sql-manual/sql-data-types/string/CHAR"},"CHAR(M)")),": A fixed-length string, where M is the byte length. The range for M is ","[1, 255]",".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/2.1/sql-manual/sql-data-types/string/VARCHAR"},"VARCHAR(M)")),": A variable-length string, where M is the maximum length. The range for M is ","[1, 65533]",".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"/docs/2.1/sql-manual/sql-data-types/string/"},"STRING")),": A variable-length string with a default maximum length of 1,048,576 bytes (1 MB). This maximum length can be increased up to 2,147,483,643 bytes (2 GB) by configuring the ",(0,a.yg)("inlineCode",{parentName:"p"},"string_type_length_soft_limit_bytes"),"setting."))))}u.isMDXComponent=!0}}]);