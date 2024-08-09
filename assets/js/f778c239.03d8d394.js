"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[518248],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(y,o(o({ref:t},p),{},{components:n})):a.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},465637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const i={title:"ADMIN-SET-PARTITION-VERSION",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",title:"ADMIN-SET-PARTITION-VERSION",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-PARTITION-VERSION",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-SET-PARTITION-VERSION",language:"en"},sidebar:"docs",previous:{title:"ADMIN-SET-REPLICA-VERSION",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-REPLICA-VERSION"},next:{title:"ADMIN-SET-TABLE-STATUS",permalink:"/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-SET-TABLE-STATUS"}},l={},c=[{value:"ADMIN-SET-PARTITION-VERSION",id:"admin-set-partition-version",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-set-partition-version"},"ADMIN-SET-PARTITION-VERSION"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN SET PARTITION VERSION"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to set the version of the specified partition."),(0,r.yg)("p",null,"In certain cases, the version of the partition in the metadata may not be consistent with the version of the actual replica. This command can manually set the version of the partition in the metadata."),(0,r.yg)("p",null,"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE table_name PARTITION VERSION\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.yg)("p",null,"The following properties are currently supported:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},'"partition_id": Required. Specify a Partition Id.'),(0,r.yg)("li",{parentName:"ol"},'"visible_version": Required. Specify Version.')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note:"),(0,r.yg)("p",{parentName:"blockquote"},"It is necessary to first confirm the version of the actual replica on the Be before set the version of the partition. This command is generally only used for emergency troubleshooting, please proceed with caution.")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set the version of partition 1769152 to 100.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET TABLE tbl1 PARTITION VERSION PROPERTIES("partition_id" = "1769152", "visible_version" = "100");\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, SET, PARTITION, VERSION\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);