"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[293400],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>v});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),y=a,v=u["".concat(p,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(v,l(l({ref:t},c),{},{components:n})):r.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},51834:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(296540),n(15680));const i={title:"IPV4",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-data-types/ip/IPV4",id:"version-3.0/sql-manual/sql-data-types/ip/IPV4",title:"IPV4",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/ip/IPV4.md",sourceDirName:"sql-manual/sql-data-types/ip",slug:"/sql-manual/sql-data-types/ip/IPV4",permalink:"/docs/sql-manual/sql-data-types/ip/IPV4",draft:!1,tags:[],version:"3.0",frontMatter:{title:"IPV4",language:"en"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/sql-manual/sql-data-types/ip/ip-overview"},next:{title:"IPV6",permalink:"/docs/sql-manual/sql-data-types/ip/IPV6"}},p={},s=[{value:"IPV4",id:"ipv4",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"ipv4"},"IPV4"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"IPv4 type, stored in the form of UInt32 in 4 bytes, used to represent IPv4 addresses.\nThe range of values is ","['0.0.0.0', '255.255.255.255']","."),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Inputs that exceed the value range or have invalid format will return NULL")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Create table example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE TABLE ipv4_test (\n  `id` int,\n  `ip_v4` ipv4\n) ENGINE=OLAP\nDISTRIBUTED BY HASH(`id`) BUCKETS 4\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n);\n')),(0,a.yg)("p",null,"Insert data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"insert into ipv4_test values(1, '0.0.0.0');\ninsert into ipv4_test values(2, '127.0.0.1');\ninsert into ipv4_test values(3, '59.50.185.152');\ninsert into ipv4_test values(4, '255.255.255.255');\ninsert into ipv4_test values(5, '255.255.255.256'); // invalid data\n")),(0,a.yg)("p",null,"Select data example:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select * from ipv4_test order by id;\n+------+-----------------+\n| id   | ip_v4           |\n+------+-----------------+\n|    1 | 0.0.0.0         |\n|    2 | 127.0.0.1       |\n|    3 | 59.50.185.152   |\n|    4 | 255.255.255.255 |\n|    5 | NULL            |\n+------+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"IPV4"))}d.isMDXComponent=!0}}]);