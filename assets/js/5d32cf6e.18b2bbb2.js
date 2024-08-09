"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[809195],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,y=p["".concat(i,".").concat(m)]||p[m]||f[m]||s;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<s;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},733524:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const s={title:"ABS",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/numeric-functions/abs",id:"version-2.1/sql-manual/sql-functions/numeric-functions/abs",title:"ABS",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/numeric-functions/abs.md",sourceDirName:"sql-manual/sql-functions/numeric-functions",slug:"/sql-manual/sql-functions/numeric-functions/abs",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/abs",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ABS",language:"en"},sidebar:"docs",previous:{title:"TRUNCATE",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/truncate"},next:{title:"SQRT",permalink:"/docs/2.1/sql-manual/sql-functions/numeric-functions/sqrt"}},i={},c=[{value:"abs",id:"abs",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"abs"},"abs"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SMALLINT abs(TINYINT x)\nINT abs(SMALLINT x)\nBIGINT abs(INT x)\nLARGEINT abs(BIGINT x)\nLARGEINT abs(LARGEINT x)\nDOUBLE abs(DOUBLE x)\nFLOAT abs(FLOAT x)\nDECIMAL abs(DECIMAL x)` \n")),(0,a.yg)("p",null,"Returns the absolute value of ",(0,a.yg)("inlineCode",{parentName:"p"},"x"),"."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select abs(-2);\n+---------+\n| abs(-2) |\n+---------+\n|       2 |\n+---------+\nmysql> select abs(3.254655654);\n+------------------+\n| abs(3.254655654) |\n+------------------+\n|      3.254655654 |\n+------------------+\nmysql> select abs(-3254654236547654354654767);\n+---------------------------------+\n| abs(-3254654236547654354654767) |\n+---------------------------------+\n| 3254654236547654354654767       |\n+---------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"ABS\n")))}f.isMDXComponent=!0}}]);