"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[268875],{15680:(r,e,n)=>{n.d(e,{xA:()=>u,yg:()=>d});var t=n(296540);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function l(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function s(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var o=t.createContext({}),c=function(r){var e=t.useContext(o),n=e;return r&&(n="function"==typeof r?r(e):l(l({},e),r)),n},u=function(r){var e=c(r.components);return t.createElement(o.Provider,{value:e},r.children)},y="mdxType",f={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},p=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,i=r.originalType,o=r.parentName,u=s(r,["components","mdxType","originalType","parentName"]),y=c(n),p=a,d=y["".concat(o,".").concat(p)]||y[p]||f[p]||i;return n?t.createElement(d,l(l({ref:e},u),{},{components:n})):t.createElement(d,l({ref:e},u))}));function d(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=r,s[y]="string"==typeof r?r:a,l[1]=s;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},872435:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const i={title:"ARRAY_FIRST",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-functions/array-functions/array-first",id:"version-3.0/sql-manual/sql-functions/array-functions/array-first",title:"ARRAY_FIRST",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/array-first.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-first",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-first",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ARRAY_FIRST",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_LAST_INDEX",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-last-index"},next:{title:"ARRAY_LAST",permalink:"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-last"}},o={},c=[{value:"array_first",id:"array_first",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function f(r){let{components:e,...n}=r;return(0,a.yg)(y,(0,t.A)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_first"},"array_first"),(0,a.yg)("p",null,"array_first"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"\u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u7b2c\u4e00\u4e2a func(arr1","[i]",") \u503c\u4e0d\u4e3a 0 \u7684\u5143\u7d20\u3002\u5f53\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u8fdb\u884c func(arr1","[i]",") \u90fd\u4e3a 0 \u65f6\uff0c\u7ed3\u679c\u8fd4\u56de",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"T array_first(lambda, ARRAY<T>)\n")),(0,a.yg)("p",null,"\u4f7f\u7528\u4e00\u4e2a lambda \u8868\u8fbe\u5f0f\u548c\u4e00\u4e2a ARRAY \u4f5c\u4e3a\u8f93\u5165\u53c2\u6570\uff0clambda \u8868\u8fbe\u5f0f\u4e3a\u5e03\u5c14\u578b\uff0c\u7528\u4e8e\u5bf9 ARRAY \u4e2d\u7684\u6bcf\u4e2a\u5143\u7d20\u8fdb\u884c\u5224\u65ad\u8fd4\u56de\u503c\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select array_first(x->x>2, [1,2,3,0]) ;\n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 2, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                              3 |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>4, [1,2,3,0]) ; \n+------------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x(0) > 4, ARRAY(1, 2, 3, 0))), -1) |\n+------------------------------------------------------------------------------------------------+\n|                                                                                           NULL |\n+------------------------------------------------------------------------------------------------+\n\n\nmysql> select array_first(x->x>1, [1,2,3,0]) ;\n+---------------------------------------------------------------------------------------------+\n| array_first(array_filter(ARRAY(1, 2, 3, 0), array_map([x] -> x > 1, ARRAY(1, 2, 3, 0))), 1) |\n+---------------------------------------------------------------------------------------------+\n|                                                                                           2 |\n+---------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY, LAST, array_first"))}f.isMDXComponent=!0}}]);