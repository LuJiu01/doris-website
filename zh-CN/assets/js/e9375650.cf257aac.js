"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[419445],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>g});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=p(n),d=r,g=y["".concat(s,".").concat(d)]||y[d]||u[d]||l;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},154883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-TABLE-STATS",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",title:"SHOW-TABLE-STATS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-TABLE-STATS",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-PROC",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROC"},next:{title:"SHOW-TABLE-STATUS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLE-STATUS"}},s={},p=[{value:"SHOW-TABLE-STATS",id:"show-table-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:p},y="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-table-stats"},"SHOW-TABLE-STATS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TABLE STATS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"SHOW TABLE STATS")," \u67e5\u770b\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u6536\u96c6\u6982\u51b5\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\u5982\u4e0b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"SHOW TABLE STATS table_name;\n")),(0,r.yg)("p",null,"\u5176\u4e2d\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"table_name: \u76ee\u6807\u8868\u8868\u540d\u3002\u53ef\u4ee5\u662f \xa0",(0,r.yg)("inlineCode",{parentName:"li"},"db_name.table_name"),"\xa0 \u5f62\u5f0f\u3002")),(0,r.yg)("p",null,"\u8f93\u51fa\uff1a"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u5217\u540d"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"updated_rows")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u81ea\u4e0a\u6b21 ANALYZE \u4ee5\u6765\u8be5\u8868\u7684\u66f4\u65b0\u884c\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"query_times")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4fdd\u7559\u5217\uff0c\u540e\u7eed\u7248\u672c\u7528\u4ee5\u8bb0\u5f55\u8be5\u8868\u67e5\u8be2\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"row_count")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u884c\u6570\uff08\u4e0d\u53cd\u6620\u547d\u4ee4\u6267\u884c\u65f6\u7684\u51c6\u786e\u884c\u6570\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"updated_time")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u4e0a\u6b21\u66f4\u65b0\u65f6\u95f4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"columns")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6536\u96c6\u8fc7\u7edf\u8ba1\u4fe1\u606f\u7684\u5217")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"trigger")),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u89e6\u53d1\u65b9\u5f0f")))),(0,r.yg)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show table stats lineitem \\G;\n*************************** 1. row ***************************\nupdated_rows: 0\n query_times: 0\n   row_count: 6001215\nupdated_time: 2023-11-07\n     columns: [l_returnflag, l_receiptdate, l_tax, l_shipmode, l_suppkey, l_shipdate, l_commitdate, l_partkey, l_orderkey, l_quantity, l_linestatus, l_comment, l_extendedprice, l_linenumber, l_discount, l_shipinstruct]\n     trigger: MANUAL\n")),(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("p",null,"SHOW, TABLE, STATS"))}u.isMDXComponent=!0}}]);