"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[450221],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},595148:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"ACTIVE_QUERIES",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/table-functions/active_queries",id:"sql-manual/sql-functions/table-functions/active_queries",title:"ACTIVE_QUERIES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-functions/active_queries.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/active_queries",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/active_queries",draft:!1,tags:[],version:"current",frontMatter:{title:"ACTIVE_QUERIES",language:"zh-CN"},sidebar:"docs",previous:{title:"frontends_disks",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/frontends_disks"},next:{title:"JOBS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/table-functions/jobs"}},s={},c=[{value:"<code>active_queries</code>",id:"active_queries",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"active_queries"},(0,a.yg)("inlineCode",{parentName:"h2"},"active_queries")),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"active_queries"),(0,a.yg)("admonition",{type:"caution"},(0,a.yg)("p",{parentName:"admonition"},"\u81ea 2.1.1 \u8d77\uff0c\u6b64\u8868\u51fd\u6570\u79fb\u5230 information_schema.active_queries \u8868\u3002")),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u8868\u51fd\u6570\uff0c\u751f\u6210active_queries\u4e34\u65f6\u8868\uff0c\u53ef\u4ee5\u67e5\u770b\u5f53\u524ddoris\u96c6\u7fa4\u4e2d\u6b63\u5728\u8fd0\u884c\u7684 query \u4fe1\u606f\u3002"),(0,a.yg)("p",null,"\u8be5\u51fd\u6570\u7528\u4e8efrom\u5b50\u53e5\u4e2d\u3002"),(0,a.yg)("h4",{id:"syntax"},"syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"active_queries()")),(0,a.yg)("p",null,"active_queries()\u8868\u7ed3\u6784\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [(none)]>desc function active_queries();\n+------------------+--------+------+-------+---------+-------+\n| Field            | Type   | Null | Key   | Default | Extra |\n+------------------+--------+------+-------+---------+-------+\n| QueryId          | TEXT   | No   | false | NULL    | NONE  |\n| StartTime        | TEXT   | No   | false | NULL    | NONE  |\n| QueryTimeMs      | BIGINT | No   | false | NULL    | NONE  |\n| WorkloadGroupId  | BIGINT | No   | false | NULL    | NONE  |\n| Database         | TEXT   | No   | false | NULL    | NONE  |\n| FrontendInstance | TEXT   | No   | false | NULL    | NONE  |\n| Sql              | TEXT   | No   | false | NULL    | NONE  |\n+------------------+--------+------+-------+---------+-------+\n7 rows in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [(none)]>select * from active_queries();\n+-----------------------------------+---------------------+-------------+-----------------+----------+------------------+--------------------------------+\n| QueryId                           | StartTime           | QueryTimeMs | WorkloadGroupId | Database | FrontendInstance | Sql                            |\n+-----------------------------------+---------------------+-------------+-----------------+----------+------------------+--------------------------------+\n| a84bf9f3ea6348e1-ac542839f8f2af5d | 2024-03-04 17:33:09 |           9 |           10002 |          | localhost        | select * from active_queries() |\n+-----------------------------------+---------------------+-------------+-----------------+----------+------------------+--------------------------------+\n1 row in set (0.03 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"active_queries\n")))}d.isMDXComponent=!0}}]);