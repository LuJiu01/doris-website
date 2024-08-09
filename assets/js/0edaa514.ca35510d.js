"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[37618],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>w});var i=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,w=d["".concat(s,".").concat(f)]||d[f]||p[f]||r;return t?i.createElement(w,a(a({ref:n},u),{},{components:t})):i.createElement(w,a({ref:n},u))}));function w(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},315700:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(58168),o=(t(296540),t(15680));const r={title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-window-funnel",id:"version-3.0/sql-manual/sql-functions/window-functions/window-function-window-funnel",title:"WINDOW_FUNCTION_WINDOW_FUNNEL",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/window-functions/window-function-window-funnel.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-window-funnel",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-window-funnel",draft:!1,tags:[],version:"3.0",frontMatter:{title:"WINDOW_FUNCTION_WINDOW_FUNNEL",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_NTILE",permalink:"/docs/sql-manual/sql-functions/window-functions/window-function-ntile"},next:{title:"IPV4_NUM_TO_STRING",permalink:"/docs/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"}},s={},c=[{value:"WINDOW FUNCTION WINDOW_FUNNEL",id:"window-function-window_funnel",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.yg)(d,(0,i.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-window_funnel"},"WINDOW FUNCTION WINDOW_FUNNEL"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"Searches the longest event chain happened in order (event1, event2, ... , eventN) along the timestamp_column with length of window."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"window is the length of time window in seconds."),(0,o.yg)("li",{parentName:"ul"},"mode can be one of the followings:",(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},'"default": Defualt mode.'),(0,o.yg)("li",{parentName:"ul"},'"deduplication": If the same event holds for the sequence of events, then such repeating event interrupts further processing. E.g. the array parameter is ',"[event1='A', event2='B', event3='C', event4='D']",', and the original event chain is "A-B-C-B-D". Since event B repeats, the filtered event chain can only be "A-B-C" and the max event level is 3.'),(0,o.yg)("li",{parentName:"ul"},'"fixed": Don\'t allow interventions of other events. E.g. the array parameter is ',"[event1='A', event2='B', event3='C', event4='D']",", and the original event chain is A->B->D->C, it stops finding A->B->C at the D and the max event level is 2."),(0,o.yg)("li",{parentName:"ul"},'"increase": Apply conditions only to events with strictly increasing timestamps.'))),(0,o.yg)("li",{parentName:"ul"},"timestamp_column specifies column of DATETIME type, sliding time window works on it."),(0,o.yg)("li",{parentName:"ul"},"evnetN is boolean expression like eventID = 1004.")),(0,o.yg)("p",null,"The function works according to the algorithm:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The function searches for data that triggers the first condition in the chain and sets the event counter to 1. This is the moment when the sliding window starts."),(0,o.yg)("li",{parentName:"ul"},"If events from the chain occur sequentially within the window, the counter is incremented. If the sequence of events is disrupted, the counter is not incremented."),(0,o.yg)("li",{parentName:"ul"},"If the data has multiple event chains at varying points of completion, the function will only output the size of the longest chain.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"window_funnel(window, mode, timestamp_column, event1, event2, ... , eventN)\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE windowfunnel_test (\n                `xwho` varchar(50) NULL COMMENT 'xwho',\n                `xwhen` datetime COMMENT 'xwhen',\n                `xwhat` int NULL COMMENT 'xwhat'\n                )\nDUPLICATE KEY(xwho)\nDISTRIBUTED BY HASH(xwho) BUCKETS 3\nPROPERTIES (\n    \"replication_num\" = \"1\"\n);\n\nINSERT into windowfunnel_test (xwho, xwhen, xwhat) values ('1', '2022-03-12 10:41:00', 1),\n                                                   ('1', '2022-03-12 13:28:02', 2),\n                                                   ('1', '2022-03-12 16:15:01', 3),\n                                                   ('1', '2022-03-12 19:05:04', 4);\n\nselect window_funnel(3600 * 3, 'default', t.xwhen, t.xwhat = 1, t.xwhat = 2 ) AS level from windowfunnel_test t;\n\n| level |\n|---|\n| 2 |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,WINDOW_FUNNEL\n")))}p.isMDXComponent=!0}}]);