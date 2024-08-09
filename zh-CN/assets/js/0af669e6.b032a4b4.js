"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[376508],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,d=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},417201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"SHOW-TRANSACTION",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",title:"SHOW-TRANSACTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TRANSACTION",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-TRANSACTION",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-VIEW",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-VIEW"},next:{title:"SHOW-STREAM-LOAD",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-STREAM-LOAD"}},s={},p=[{value:"SHOW-TRANSACTION",id:"show-transaction",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"show-transaction"},"SHOW-TRANSACTION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"SHOW TRANSACTION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u6cd5\u7528\u4e8e\u67e5\u770b\u6307\u5b9a transaction id \u6216 label \u7684\u4e8b\u52a1\u8be6\u60c5\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n")),(0,r.yg)("p",null,"\u8fd4\u56de\u7ed3\u679c\u793a\u4f8b\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"TransactionId\uff1a\u4e8b\u52a1id"),(0,r.yg)("li",{parentName:"ul"},"Label\uff1a\u5bfc\u5165\u4efb\u52a1\u5bf9\u5e94\u7684 label"),(0,r.yg)("li",{parentName:"ul"},"Coordinator\uff1a\u8d1f\u8d23\u4e8b\u52a1\u534f\u8c03\u7684\u8282\u70b9"),(0,r.yg)("li",{parentName:"ul"},"TransactionStatus\uff1a\u4e8b\u52a1\u72b6\u6001",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"PREPARE\uff1a\u51c6\u5907\u9636\u6bb5"),(0,r.yg)("li",{parentName:"ul"},"COMMITTED\uff1a\u4e8b\u52a1\u6210\u529f\uff0c\u4f46\u6570\u636e\u4e0d\u53ef\u89c1"),(0,r.yg)("li",{parentName:"ul"},"VISIBLE\uff1a\u4e8b\u52a1\u6210\u529f\u4e14\u6570\u636e\u53ef\u89c1"),(0,r.yg)("li",{parentName:"ul"},"ABORTED\uff1a\u4e8b\u52a1\u5931\u8d25"))),(0,r.yg)("li",{parentName:"ul"},"LoadJobSourceType\uff1a\u5bfc\u5165\u4efb\u52a1\u7684\u7c7b\u578b\u3002"),(0,r.yg)("li",{parentName:"ul"},"PrepareTime\uff1a\u4e8b\u52a1\u5f00\u59cb\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ul"},"CommitTime\uff1a\u4e8b\u52a1\u63d0\u4ea4\u6210\u529f\u7684\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ul"},"FinishTime\uff1a\u6570\u636e\u53ef\u89c1\u7684\u65f6\u95f4"),(0,r.yg)("li",{parentName:"ul"},"Reason\uff1a\u9519\u8bef\u4fe1\u606f"),(0,r.yg)("li",{parentName:"ul"},"ErrorReplicasCount\uff1a\u6709\u9519\u8bef\u7684\u526f\u672c\u6570"),(0,r.yg)("li",{parentName:"ul"},"ListenerId\uff1a\u76f8\u5173\u7684\u5bfc\u5165\u4f5c\u4e1a\u7684id"),(0,r.yg)("li",{parentName:"ul"},"TimeoutMs\uff1a\u4e8b\u52a1\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6307\u5b9a db \u4e2d\uff0c\u67e5\u770b id \u4e3a 4005 \u7684\u4e8b\u52a1\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION FROM db WHERE ID=4005;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b label \u4e3a label_name\u7684\u4e8b\u52a1\uff1a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW TRANSACTION WHERE LABEL = 'label_name';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SHOW, TRANSACTION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);