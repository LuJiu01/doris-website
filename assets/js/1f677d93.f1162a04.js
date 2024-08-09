"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[475734],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},494395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const o={title:"nvl",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/conditional-functions/nvl",id:"version-1.2/sql-manual/sql-functions/conditional-functions/nvl",title:"nvl",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-functions/conditional-functions/nvl.md",sourceDirName:"sql-manual/sql-functions/conditional-functions",slug:"/sql-manual/sql-functions/conditional-functions/nvl",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/nvl",draft:!1,tags:[],version:"1.2",frontMatter:{title:"nvl",language:"en"},sidebar:"docs",previous:{title:"ifnull",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/ifnull"},next:{title:"nullif",permalink:"/docs/1.2/sql-manual/sql-functions/conditional-functions/nullif"}},s={},c=[{value:"nvl",id:"nvl",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},p="wrapper";function f(e){let{components:n,...t}=e;return(0,l.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"nvl"},"nvl"),(0,l.yg)("p",null,"nvl"),(0,l.yg)("h3",{id:"description"},"description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"nvl(expr1, expr2)")),(0,l.yg)("p",null,"If the value of expr1 is not null, expr1 is returned, otherwise expr2 is returned"),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select nvl(1,0);\n+--------------+\n| nvl(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select nvl(null,10);\n+------------------+\n| nvl(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("p",null,"NVL"))}f.isMDXComponent=!0}}]);