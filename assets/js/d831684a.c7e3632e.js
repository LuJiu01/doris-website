"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[418324],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(t),d=o,f=g["".concat(s,".").concat(d)]||g[d]||p[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[g]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},408010:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(58168),o=(t(296540),t(15680));const a={title:"HLL_UNION_AGG",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/aggregate-functions/hll-union-agg",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/hll-union-agg",title:"HLL_UNION_AGG",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/hll-union-agg.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/hll-union-agg",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/hll-union-agg",draft:!1,tags:[],version:"3.0",frontMatter:{title:"HLL_UNION_AGG",language:"en"},sidebar:"docs",previous:{title:"BITMAP_UNION",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/bitmap-union"},next:{title:"GROUPING",permalink:"/docs/sql-manual/sql-functions/aggregate-functions/grouping"}},s={},u=[{value:"HLL_UNION_AGG",id:"hll_union_agg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:u},g="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"hll_union_agg"},"HLL_UNION_AGG"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"HLL_UNION_AGG(hll)")),(0,o.yg)("p",null,"HLL is an engineering implementation based on HyperLog algorithm, which is used to save the intermediate results of HyperLog calculation process."),(0,o.yg)("p",null,"It can only be used as the value column type of the table and reduce the amount of data through aggregation to achieve the purpose of speeding up the query."),(0,o.yg)("p",null,"Based on this, we get an estimate with an error of about 1%. The HLL column is generated by other columns or data imported into the data."),(0,o.yg)("p",null,"When importing, hll_hash function is used to specify which column in data is used to generate HLL column. It is often used to replace count distinct, and to calculate UV quickly in business by combining rollup."),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"MySQL > select HLL_UNION_AGG(uv_set) from test_uv;;\n+-------------------------+\nTHE COURT OF JUSTICE OF THE EUROPEAN COMMUNITIES,\n+-------------------------+\n| 17721                   |\n+-------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"HLL_UNION_AGG,HLL,UNION,AGG"))}p.isMDXComponent=!0}}]);