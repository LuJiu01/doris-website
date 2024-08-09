"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[619343],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var s=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),d=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return s.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=d(t),u=r,y=f["".concat(l,".").concat(u)]||f[u]||p[u]||o;return t?s.createElement(y,i(i({ref:n},c),{},{components:t})):s.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[f]="string"==typeof e?e:r,i[1]=a;for(var d=2;d<o;d++)i[d]=t[d];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},207002:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(58168),r=(t(296540),t(15680));const o={title:"frontends_disks",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/table-functions/frontends_disks",id:"sql-manual/sql-functions/table-functions/frontends_disks",title:"frontends_disks",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/table-functions/frontends_disks.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/frontends_disks",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/frontends_disks",draft:!1,tags:[],version:"current",frontMatter:{title:"frontends_disks",language:"en"},sidebar:"docs",previous:{title:"CATALOGS",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/catalogs"},next:{title:"ACTIVE_QUERIES",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/active_queries"}},l={},d=[{value:"<code>frontends</code>",id:"frontends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},f="wrapper";function p(e){let{components:n,...t}=e;return(0,r.yg)(f,(0,s.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"frontends"},(0,r.yg)("inlineCode",{parentName:"h2"},"frontends")),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"frontends"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"Table-Value-Function, generate a temporary table named ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks"),". This tvf is used to view the information of FE nodes 's disks in the doris cluster."),(0,r.yg)("p",null,"This function is used in ",(0,r.yg)("inlineCode",{parentName:"p"},"FROM")," clauses."),(0,r.yg)("h4",{id:"syntax"},"syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")),(0,r.yg)("p",null,"The table schema of ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks()")," tvf\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> desc function frontends_disks();\n+-------------+------+------+-------+---------+-------+\n| Field       | Type | Null | Key   | Default | Extra |\n+-------------+------+------+-------+---------+-------+\n| Name        | TEXT | No   | false | NULL    | NONE  |\n| Host        | TEXT | No   | false | NULL    | NONE  |\n| DirType     | TEXT | No   | false | NULL    | NONE  |\n| Dir         | TEXT | No   | false | NULL    | NONE  |\n| Filesystem  | TEXT | No   | false | NULL    | NONE  |\n| Capacity    | TEXT | No   | false | NULL    | NONE  |\n| Used        | TEXT | No   | false | NULL    | NONE  |\n| Available   | TEXT | No   | false | NULL    | NONE  |\n| UseRate     | TEXT | No   | false | NULL    | NONE  |\n| MountOn     | TEXT | No   | false | NULL    | NONE  |\n+-------------+------+------+-------+---------+-------+\n11 rows in set (0.14 sec)\n")),(0,r.yg)("p",null,"The information displayed by the ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks")," tvf is basically consistent with the information displayed by the ",(0,r.yg)("inlineCode",{parentName:"p"},"show frontends disks")," statement. However, the types of each field in the ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks")," tvf are more specific, and you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks")," tvf to perform operations such as filtering and joining."),(0,r.yg)("p",null,"The information displayed by the ",(0,r.yg)("inlineCode",{parentName:"p"},"frontends_disks")," tvf is authenticated, which is consistent with the behavior of ",(0,r.yg)("inlineCode",{parentName:"p"},"show frontends disks"),", user must have ADMIN/OPERATOR privelege."),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select * from frontends_disk()\\G\n*************************** 1. row ***************************\n       Name: fe_fe1d5bd9_d1e5_4ccc_9b03_ca79b95c9941\n       Host: 172.XX.XX.1\n    DirType: log\n        Dir: /data/doris/fe-github/log\n Filesystem: /dev/sdc5\n   Capacity: 366G\n       Used: 119G\n  Available: 228G\n    UseRate: 35%\n    MountOn: /data\n......    \n12 row in set (0.03 sec)\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"frontends_disks\n")))}p.isMDXComponent=!0}}]);