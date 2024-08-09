"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[580308],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(t),y=a,d=s["".concat(u,".").concat(y)]||s[y]||m[y]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},496909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const o={title:"Row to Column",language:"en"},i=void 0,l={unversionedId:"query/query-data/lateral-view",id:"version-3.0/query/query-data/lateral-view",title:"Row to Column",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/query-data/lateral-view.md",sourceDirName:"query/query-data",slug:"/query/query-data/lateral-view",permalink:"/docs/query/query-data/lateral-view",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Row to Column",language:"en"},sidebar:"docs",previous:{title:"Common Table Expression",permalink:"/docs/query/query-data/cte"},next:{title:"Window Function",permalink:"/docs/query/query-data/window-function"}},u={},c=[{value:"Grammar",id:"grammar",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:c},s="wrapper";function m(e){let{components:n,...t}=e;return(0,a.yg)(s,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"row-to-column"},"Row to Column"),(0,a.yg)("p",null,"Used in conjunction with generator functions such as ",(0,a.yg)("inlineCode",{parentName:"p"},"EXPLODE"),", will generate a virtual table containing one or more rows. ",(0,a.yg)("inlineCode",{parentName:"p"},"LATERAL VIEW")," applies rows to each raw output row."),(0,a.yg)("h2",{id:"grammar"},"Grammar"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"LATERAL VIEW  generator_function ( expression [, ...] ) table_identifier AS column_identifier [, ...]\n")),(0,a.yg)("h2",{id:"parameters"},"Parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"generator_function"),(0,a.yg)("p",{parentName:"li"}," Generator functions (EXPLODE, EXPLODE_SPLIT, etc.).")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"table_identifier"),(0,a.yg)("p",{parentName:"li"}," Alias for ",(0,a.yg)("inlineCode",{parentName:"p"},"generator_function"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"column_identifier"),(0,a.yg)("p",{parentName:"li"}," List column alias ",(0,a.yg)("inlineCode",{parentName:"p"},"generator_function"),", which can be used to output rows. The number of column identifiers must match the number of columns returned by the generator function."))),(0,a.yg)("h2",{id:"example"},"Example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `person` (\n  `id` int(11) NULL,\n  `name` text NULL,\n  `age` int(11) NULL,\n  `class` int(11) NULL,\n  `address` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nCOMMENT 'OLAP'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\",\n\"disable_auto_compaction\" = \"false\"\n);\n\nINSERT INTO person VALUES\n    (100, 'John', 30, 1, 'Street 1'),\n    (200, 'Mary', NULL, 1, 'Street 2'),\n    (300, 'Mike', 80, 3, 'Street 3'),\n    (400, 'Dan', 50, 4, 'Street 4');\n\nmysql> SELECT * FROM person\n    ->     LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;\n+------+------+------+-------+----------+-------+\n| id   | name | age  | class | address  | c_age |\n+------+------+------+-------+----------+-------+\n|  100 | John |   30 |     1 | Street 1 |    30 |\n|  100 | John |   30 |     1 | Street 1 |    60 |\n|  200 | Mary | NULL |     1 | Street 2 |    30 |\n|  200 | Mary | NULL |     1 | Street 2 |    60 |\n|  300 | Mike |   80 |     3 | Street 3 |    30 |\n|  300 | Mike |   80 |     3 | Street 3 |    60 |\n|  400 | Dan  |   50 |     4 | Street 4 |    30 |\n|  400 | Dan  |   50 |     4 | Street 4 |    60 |\n+------+------+------+-------+----------+-------+\n8 rows in set (0.12 sec)\n\n")))}m.isMDXComponent=!0}}]);