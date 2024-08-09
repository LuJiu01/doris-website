"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[95420],{15680:(e,n,t)=>{t.d(n,{xA:()=>f,yg:()=>m});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},489420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=t(58168),o=(t(296540),t(15680));const l={title:"date_floor",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/date_floor",id:"version-3.0/sql-manual/sql-functions/date-time-functions/date_floor",title:"date_floor",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/date_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date_floor",permalink:"/docs/sql-manual/sql-functions/date-time-functions/date_floor",draft:!1,tags:[],version:"3.0",frontMatter:{title:"date_floor",language:"en"},sidebar:"docs",previous:{title:"DATEDIFF",permalink:"/docs/sql-manual/sql-functions/date-time-functions/datediff"},next:{title:"second_floor",permalink:"/docs/sql-manual/sql-functions/date-time-functions/second_floor"}},s={},c=[{value:"date_floor",id:"date_floor",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}],f={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(u,(0,r.A)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"date_floor"},"date_floor"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Syntax")," "),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_FLOOR(DATETIME datetime, INTERVAL period type)")),(0,o.yg)("p",null,"Converts a date to the nearest rounding down time of a specified time interval period."),(0,o.yg)("p",null,"The datetime parameter is a valid date expression."),(0,o.yg)("p",null,"The period parameter specifies how many units each cycle consists of, starting from 0001-01-01T00:00:00"),(0,o.yg)("p",null,"Type: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND."),(0,o.yg)("h3",{id:"example"},"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql>select date_floor(\"0001-01-01 00:00:16\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:16', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"0001-01-01 00:00:18\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 minute);\n+---------------------------------------------------------------+\n| minute_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 hour);\n+-------------------------------------------------------------+\n| hour_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-07-13 18:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 day);\n+------------------------------------------------------------+\n| day_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-10 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 month);\n+--------------------------------------------------------------+\n| month_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-01 00:00:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 year);\n+-------------------------------------------------------------+\n| year_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2021-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n\n")),(0,o.yg)("h3",{id:"keywords"},"Keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"DATE_FLOOR,DATE,FLOOR\n")),(0,o.yg)("h3",{id:"best-practices"},"Best Practices"),(0,o.yg)("p",null,"See also"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./second_floor"},"second_floor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./minute_floor"},"minute_floor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./hour_floor"},"hour_floor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./day_floor"},"day_floor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./month_floor"},"month_floor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"./year_floor"},"year_floor"))))}p.isMDXComponent=!0}}]);