"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[19301],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>O});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},S="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),S=c(n),u=a,O=S["".concat(i,".").concat(u)]||S[u]||m[u]||l;return n?r.createElement(O,s(s({ref:t},p),{},{components:n})):r.createElement(O,s({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[S]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},814876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-COLLATION",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-COLLATION"},next:{title:"SHOW-DATABASES",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-DATABASES"}},i={},c=[{value:"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS",id:"show-convert-light-schema-change-process",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},S="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(S,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-convert-light-schema-change-process"},"SHOW-CONVERT-LIGHT-SCHEMA-CHANGE-PROCESS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW CONVERT LIGHT SCHEMA CHANGE PROCESS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u7528\u6765\u67e5\u770b\u5c06\u975elight schema change\u7684olpa\u8868\u8f6c\u6362\u4e3alight schema change\u8868\u7684\u60c5\u51b5\uff0c \u9700\u8981\u5f00\u542f\u914d\u7f6e",(0,a.yg)("inlineCode",{parentName:"p"},"enable_convert_light_weight_schema_change")),(0,a.yg)("p",null,"\u8bed\u6cd5:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS [FROM db]\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5728database test\u4e0a\u7684\u8f6c\u6362\u60c5\u51b5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS FROM test;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770b\u5168\u5c40\u7684\u8f6c\u6362\u60c5\u51b5"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS;\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, CONVERT_LIGHT_SCHEMA_CHANGE_PROCESS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);