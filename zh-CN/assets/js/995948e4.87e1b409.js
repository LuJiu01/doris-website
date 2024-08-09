"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[969200],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var a=r(296540);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,l=function(e,n){if(null==e)return{};var r,a,l={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=a.createContext({}),i=function(e){var n=a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var r=e.components,l=e.mdxType,t=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=i(r),f=l,m=y["".concat(c,".").concat(f)]||y[f]||p[f]||t;return r?a.createElement(m,s(s({ref:n},u),{},{components:r})):a.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=r.length,s=new Array(t);s[0]=f;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[y]="string"==typeof e?e:l,s[1]=o;for(var i=2;i<t;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},248895:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>i});var a=r(58168),l=(r(296540),r(15680));const t={title:"ARRAY_SLICE",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-slice",id:"version-3.0/sql-manual/sql-functions/array-functions/array-slice",title:"ARRAY_SLICE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-slice.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-slice",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-slice",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_SLICE",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_REMOVE",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-remove"},next:{title:"ARRAY_SORT",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-sort"}},c={},i=[{value:"array_slice",id:"array_slice",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:i},y="wrapper";function p(e){let{components:n,...r}=e;return(0,l.yg)(y,(0,a.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"array_slice"},"array_slice"),(0,l.yg)("p",null,"array_slice"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_slice(ARRAY<T> arr, BIGINT off, BIGINT len)")),(0,l.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b50\u6570\u7ec4\uff0c\u5305\u542b\u6240\u6709\u4ece\u6307\u5b9a\u4f4d\u7f6e\u5f00\u59cb\u7684\u6307\u5b9a\u957f\u5ea6\u7684\u5143\u7d20\uff0c\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"\u5982\u679coff\u662f\u6b63\u6570\uff0c\u5219\u8868\u793a\u4ece\u5de6\u4fa7\u5f00\u59cb\u7684\u504f\u79fb\u91cf\n\u5982\u679coff\u662f\u8d1f\u6570\uff0c\u5219\u8868\u793a\u4ece\u53f3\u4fa7\u5f00\u59cb\u7684\u504f\u79fb\u91cf\n\u5f53\u6307\u5b9a\u7684off\u4e0d\u5728\u6570\u7ec4\u7684\u5b9e\u9645\u8303\u56f4\u5185\uff0c\u8fd4\u56de\u7a7a\u6570\u7ec4\n\u5982\u679clen\u662f\u8d1f\u6570\uff0c\u5219\u8868\u793a\u957f\u5ea6\u4e3a0\n")),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select k2, k2[2:2] from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, k2[2:2] from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n")),(0,l.yg)("p",null,"\u5f53\u6307\u5b9aoff\u4e3a\u8d1f\u6570:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select k2, k2[-2:1] from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 1) from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, k2[-2:2] from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 2) from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select k2, array_slice(k2, 0) from array_type_table;\n+-----------+-------------------------+\n| k2        | array_slice(`k2`, 0) |\n+-----------+-------------------------+\n| [1, 2, 3] | []                      |\n+-----------+-------------------------+\n\nmysql> select k2, array_slice(k2, -5) from array_type_table;\n+-----------+----------------------+\n| k2        | array_slice(`k2`, -5) |\n+-----------+----------------------+\n| [1, 2, 3] | []                   |\n+-----------+----------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"ARRAY,SLICE,ARRAY_SLICE"))}p.isMDXComponent=!0}}]);