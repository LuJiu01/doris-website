"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[78789],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},O=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,d=u["".concat(s,".").concat(O)]||u[O]||m[O]||l;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},844239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"STOP-ROUTINE-LOAD",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",id:"version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",title:"STOP-ROUTINE-LOAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD",draft:!1,tags:[],version:"3.0",frontMatter:{title:"STOP-ROUTINE-LOAD",language:"zh-CN"},sidebar:"docs",previous:{title:"RESUME-ROUTINE-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD"},next:{title:"CREATE-SYNC-JOB",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"}},s={},p=[{value:"STOP-ROUTINE-LOAD",id:"stop-routine-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"stop-routine-load"},"STOP-ROUTINE-LOAD"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"STOP ROUTINE LOAD"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u6237\u505c\u6b62\u4e00\u4e2a Routine Load \u4f5c\u4e1a\u3002\u88ab\u505c\u6b62\u7684\u4f5c\u4e1a\u65e0\u6cd5\u518d\u91cd\u65b0\u8fd0\u884c\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"STOP ROUTINE LOAD FOR job_name;\n")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u505c\u6b62\u540d\u79f0\u4e3a test1 \u7684\u4f8b\u884c\u5bfc\u5165\u4f5c\u4e1a\u3002"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"STOP ROUTINE LOAD FOR test1;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"STOP, ROUTINE, LOAD\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);