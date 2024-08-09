"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[575241],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>E});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,E=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return a?n.createElement(E,i(i({ref:t},p),{},{components:a})):n.createElement(E,i({ref:t},p))}));function E(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},637286:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"CREATE-DATABASE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-DATABASE",id:"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-DATABASE",title:"CREATE-DATABASE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Create",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-DATABASE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-DATABASE",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-CATALOG",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-CATALOG"},next:{title:"CREATE-TABLE",permalink:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"}},s={},c=[{value:"CREATE-DATABASE",id:"create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"create-database"},"CREATE-DATABASE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CREATE DATABASE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u65b0\u5efa\u6570\u636e\u5e93\uff08database\uff09"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"PROPERTIES")," \u8be5\u6570\u636e\u5e93\u7684\u9644\u52a0\u4fe1\u606f\uff0c\u53ef\u4ee5\u7f3a\u7701\u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u8981\u4e3adb\u4e0b\u7684table\u6307\u5b9a\u9ed8\u8ba4\u7684\u526f\u672c\u5206\u5e03\u7b56\u7565\uff0c\u9700\u8981\u6307\u5b9a",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),"\uff08table\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),"\u5c5e\u6027\u4f18\u5148\u7ea7\u4f1a\u9ad8\u4e8edb\uff09"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n  "replication_allocation" = "tag.location.default:3"\n)\n')))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u5e93 db_test"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_test;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u65b0\u5efa\u6570\u636e\u5e93\u5e76\u8bbe\u7f6e\u9ed8\u8ba4\u7684\u526f\u672c\u5206\u5e03\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE `db_test`\nPROPERTIES (\n    "replication_allocation" = "tag.location.group_1:3"\n);\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"CREATE, DATABASE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);