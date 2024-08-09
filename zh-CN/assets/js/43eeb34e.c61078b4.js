"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[988454],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(o,".").concat(g)]||u[g]||m[g]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},952839:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ICEBERG_META",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-functions/table-functions/iceberg-meta",id:"version-3.0/sql-manual/sql-functions/table-functions/iceberg-meta",title:"ICEBERG_META",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/table-functions/iceberg-meta.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/iceberg-meta",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/iceberg-meta",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ICEBERG_META",language:"zh-CN"},sidebar:"docs",previous:{title:"local",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/local"},next:{title:"BACKENDS",permalink:"/zh-CN/docs/sql-manual/sql-functions/table-functions/backends"}},o={},c=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"iceberg_meta"},"iceberg_meta"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"iceberg_meta"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"iceberg_meta \u8868\u51fd\u6570\uff08table-valued-function,tvf\uff09\uff0c\u53ef\u4ee5\u7528\u4e8e\u8bfb\u53d6 iceberg \u8868\u7684\u5404\u7c7b\u5143\u6570\u636e\u4fe1\u606f\uff0c\u5982\u64cd\u4f5c\u5386\u53f2\u3001\u751f\u6210\u7684\u5feb\u7167\u3001\u6587\u4ef6\u5143\u6570\u636e\u7b49\u3002"),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n')),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u53c2\u6570\u8bf4\u660e")),(0,a.yg)("p",null,"iceberg_meta \u8868\u51fd\u6570 tvf \u4e2d\u7684\u6bcf\u4e00\u4e2a\u53c2\u6570\u90fd\u662f\u4e00\u4e2a ",(0,a.yg)("inlineCode",{parentName:"p"},'"key"="value"')," \u5bf9\u3002\n\u76f8\u5173\u53c2\u6570\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"table"),"\uff1a (\u5fc5\u586b) \u5b8c\u6574\u7684\u8868\u540d\uff0c\u9700\u8981\u6309\u7167\u76ee\u5f55\u540d\u3002\u5e93\u540d\u3002\u8868\u540d\u7684\u683c\u5f0f\uff0c\u586b\u5199\u9700\u8981\u67e5\u770b\u7684 iceberg \u8868\u540d\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"query_type"),"\uff1a (\u5fc5\u586b) \u60f3\u8981\u67e5\u770b\u7684\u5143\u6570\u636e\u7c7b\u578b\uff0c\u76ee\u524d\u4ec5\u652f\u6301 snapshots\u3002")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"\u8bfb\u53d6\u5e76\u8bbf\u95ee iceberg \u8868\u683c\u5f0f\u7684 snapshots \u5143\u6570\u636e\u3002"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n')),(0,a.yg)("p",null,"\u53ef\u4ee5\u914d\u5408",(0,a.yg)("inlineCode",{parentName:"p"},"desc function"),"\u4f7f\u7528"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"iceberg_meta, table-valued-function, tvf\n")),(0,a.yg)("h3",{id:"best-prac"},"Best Prac"),(0,a.yg)("p",null,"\u67e5\u770b iceberg \u8868\u7684 snapshots"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  | {"flink.job-id":"xxm1", ...} |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  | {"flink.job-id":"xxm3", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n')),(0,a.yg)("p",null,"\u6839\u636e snapshot_id \u5b57\u6bb5\u7b5b\u9009"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |            summary           |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  | {"flink.job-id":"xxm2", ...} |\n+------------------------+----------------+---------------+-----------+-------------------+------------------------------+\n')))}m.isMDXComponent=!0}}]);