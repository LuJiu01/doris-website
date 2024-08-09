"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[847733],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var a=r(296540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?a.createElement(y,i(i({ref:t},c),{},{components:r})):a.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},734827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=r(58168),n=(r(296540),r(15680));const s={title:"Overview",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-data-types/semi-structured/semi-structured-overview",id:"sql-manual/sql-data-types/semi-structured/semi-structured-overview",title:"Overview",description:"\x3c!--",source:"@site/docs/sql-manual/sql-data-types/semi-structured/semi-structured-overview.md",sourceDirName:"sql-manual/sql-data-types/semi-structured",slug:"/sql-manual/sql-data-types/semi-structured/semi-structured-overview",permalink:"/docs/dev/sql-manual/sql-data-types/semi-structured/semi-structured-overview",draft:!1,tags:[],version:"current",frontMatter:{title:"Overview",language:"en"},sidebar:"docs",previous:{title:"STRING",permalink:"/docs/dev/sql-manual/sql-data-types/string/"},next:{title:"ARRAY",permalink:"/docs/dev/sql-manual/sql-data-types/semi-structured/ARRAY"}},l={},u=[],c={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Doris supports different semi-structured data types for JSON data processing, each tailored to different use cases. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/semi-structured/ARRAY"},"ARRAY"))," / ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/semi-structured/MAP"},"MAP"))," / ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/semi-structured/STRUCT"},"STRUCT")),": They support nested data and fixed schema, making them well-suited for analytical workloads such as user behavior and profile analysis, as well as querying data lake formats like Parquet. Due to the fixed schema, there is no overhead for dynamic schema inference, resulting in high write and analysis performance.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/semi-structured/VARIANT"},"VARIANT")),": It supports nested data and flexible schema. It is well-suited for analytical workloads such as log, trace, and IoT data analysis. It can accommodate any legal JSON data, which will be automatically expanded into sub-columns in a columnar storage format. This approach enables high compression rate in storage and high performance in data aggregation, filtering, and sorting.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"/docs/dev/sql-manual/sql-data-types/semi-structured/JSON"},"JSON")),": It supports nested data and flexible schema. It is optimized for high-concurrency point query use cases. The flexible schema allows for ingesting any legal JSON data, which will be stored in a binary format. Extracting fields from this binary JSON format is more than 2X faster than using regular JSON strings."))))}p.isMDXComponent=!0}}]);