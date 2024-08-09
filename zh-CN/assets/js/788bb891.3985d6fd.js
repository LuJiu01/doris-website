"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[782988],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,d=p["".concat(c,".").concat(f)]||p[f]||y[f]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},375280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const i={title:"CHAR",language:"zh-CN"},o=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/char",id:"version-2.0/sql-manual/sql-functions/string-functions/char",title:"CHAR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/string-functions/char.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/char",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/char",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CHAR",language:"zh-CN"},sidebar:"docs",previous:{title:"REVERSE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/reverse"},next:{title:"CONCAT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/string-functions/concat"}},c={},s=[{value:"function char",id:"function-char",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function y(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("version",{since:"1.2"},(0,a.yg)("h2",{id:"function-char"},"function char"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR char(INT,..., [USING charset_name])")),(0,a.yg)("p",null,"\u5c06\u6bcf\u4e2a\u53c2\u6570\u89e3\u91ca\u4e3a\u6574\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u8be5\u5b57\u7b26\u4e32\u7531\u8fd9\u4e9b\u6574\u6570\u7684\u4ee3\u7801\u503c\u7ed9\u51fa\u7684\u5b57\u7b26\u7ec4\u6210\u3002\u5ffd\u7565",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("p",null,"\u5982\u679c\u7ed3\u679c\u5b57\u7b26\u4e32\u5bf9\u4e8e\u7ed9\u5b9a\u5b57\u7b26\u96c6\u662f\u975e\u6cd5\u7684\uff0c\u76f8\u5e94\u7684\u8f6c\u6362\u7ed3\u679c\u4e3a",(0,a.yg)("inlineCode",{parentName:"p"},"NULL"),"\u503c\u3002"),(0,a.yg)("p",null,"\u5927\u4e8e ",(0,a.yg)("inlineCode",{parentName:"p"},"255")," \u7684\u53c2\u6570\u5c06\u8f6c\u6362\u4e3a\u591a\u4e2a\u7ed3\u679c\u5b57\u8282\u3002\u4f8b\u5982\uff0c",(0,a.yg)("inlineCode",{parentName:"p"},"char(15049882)"),"\u7b49\u4ef7\u4e8e",(0,a.yg)("inlineCode",{parentName:"p"},"char(229, 164, 154)"),"\u3002"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"charset_name"),"\u76ee\u524d\u53ea\u652f\u6301",(0,a.yg)("inlineCode",{parentName:"p"},"utf8"),"\u3002")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select char(68, 111, 114, 105, 115);\n+--------------------------------------+\n| char('utf8', 68, 111, 114, 105, 115) |\n+--------------------------------------+\n| Doris                                |\n+--------------------------------------+\n\nmysql> select char(15049882, 15179199, 14989469);\n+--------------------------------------------+\n| char('utf8', 15049882, 15179199, 14989469) |\n+--------------------------------------------+\n| \u591a\u777f\u4e1d                                     |\n+--------------------------------------------+\n\nmysql> select char(255);\n+-------------------+\n| char('utf8', 255) |\n+-------------------+\n| NULL              |\n+-------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CHAR\n")))}y.isMDXComponent=!0}}]);