"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[774818],{15680:(e,n,t)=>{t.d(n,{xA:()=>m,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},463057:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const i={title:"FROM_SECOND",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from-second",id:"version-3.0/sql-manual/sql-functions/date-time-functions/from-second",title:"FROM_SECOND",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/from-second.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from-second",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/from-second",draft:!1,tags:[],version:"3.0",frontMatter:{title:"FROM_SECOND",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_MONDAY",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/to-monday"},next:{title:"FROM_UNIXTIME",permalink:"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/from-unixtime"}},s={},c=[{value:"from_second",id:"from_second",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],m={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"from_second"},"from_second"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_SECOND(BIGINT unix_timestamp)"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_MILLISECOND(BIGINT unix_timestamp)"),"\n",(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_MICROSECOND(BIGINT unix_timestamp)")),(0,o.yg)("p",null,"\u5c06\u65f6\u95f4\u6233\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684 DATETIME\uff0c\u4f20\u5165\u7684\u662f\u6574\u578b\uff0c\u8fd4\u56de\u7684\u662fDATETIME\u7c7b\u578b\u3002\u82e5",(0,o.yg)("inlineCode",{parentName:"p"},"unix_timestamp < 0")," \u6216\u51fd\u6570\u7ed3\u679c\u5927\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"9999-12-31 23:59:59.999999"),"\uff0c\u5219\u8fd4\u56de",(0,o.yg)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> set time_zone='Asia/Shanghai';\n\nmysql> select from_second(-1);\n+---------------------------+\n| from_second(-1)           |\n+---------------------------+\n| NULL                      |\n+---------------------------+\n\nmysql> select from_millisecond(12345678);\n+----------------------------+\n| from_millisecond(12345678) |\n+----------------------------+\n| 1970-01-01 11:25:45.678    |\n+----------------------------+\n\nmysql> select from_microsecond(253402271999999999);\n+--------------------------------------+\n| from_microsecond(253402271999999999) |\n+--------------------------------------+\n| 9999-12-31 23:59:59.999999           |\n+--------------------------------------+\n\nmysql> select from_microsecond(253402272000000000);\n+--------------------------------------+\n| from_microsecond(253402272000000000) |\n+--------------------------------------+\n| NULL                                 |\n+--------------------------------------+\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"FROM_SECOND,FROM,SECOND,MILLISECOND,MICROSECOND\n")))}p.isMDXComponent=!0}}]);