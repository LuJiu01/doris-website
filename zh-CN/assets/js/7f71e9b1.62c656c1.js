"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[101653],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>A});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,A=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(A,i(i({ref:t},c),{},{components:n})):a.createElement(A,i({ref:t},c))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},351522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-REPAIR-TABLE",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",title:"ADMIN-REPAIR-TABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-REPAIR-TABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/SHOW-REPLICA-STATUS"},next:{title:"ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR"}},o={},p=[{value:"ADMIN-REPAIR-TABLE",id:"admin-repair-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-repair-table"},"ADMIN-REPAIR-TABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN REPAIR TABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8bed\u53e5\u7528\u4e8e\u5c1d\u8bd5\u4f18\u5148\u4fee\u590d\u6307\u5b9a\u7684\u8868\u6216\u5206\u533a"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN REPAIR TABLE table_name[ PARTITION (p1,...)]\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u8ba9\u7cfb\u7edf\u5c1d\u8bd5\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\uff0c\u5e76\u4e0d\u4fdd\u8bc1\u80fd\u591f\u4fee\u590d\u6210\u529f\u3002\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"li"},"SHOW REPLICA STATUS")," \u547d\u4ee4\u67e5\u770b\u4fee\u590d\u60c5\u51b5\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u9ed8\u8ba4\u7684 timeout \u662f 14400 \u79d2(4\u5c0f\u65f6)\u3002\u8d85\u65f6\u610f\u5473\u7740\u7cfb\u7edf\u5c06\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u9700\u8981\u91cd\u65b0\u4f7f\u7528\u8be5\u547d\u4ee4\u8bbe\u7f6e")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u8868"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5c1d\u8bd5\u4fee\u590d\u6307\u5b9a\u5206\u533a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"ADMIN REPAIR TABLE tbl1 PARTITION (p1, p2);\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, REPAIR, TABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);