"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[331941],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>g});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=o(t),f=a,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return t?r.createElement(g,c(c({ref:n},p),{},{components:t})):r.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var o=2;o<i;o++)c[o]=t[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},742146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=t(58168),a=(t(296540),t(15680));const i={title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"en"},c=void 0,s={unversionedId:"sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",id:"version-2.1/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",title:"APPEND_TRAILING_CHAR_IF_ABSENT",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/append-trailing-char-if-absent",draft:!1,tags:[],version:"2.1",frontMatter:{title:"APPEND_TRAILING_CHAR_IF_ABSENT",language:"en"},sidebar:"docs",previous:{title:"SUB_REPLACE",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/sub-replace"},next:{title:"ENDS_WITH",permalink:"/docs/2.1/sql-manual/sql-functions/string-functions/ends-with"}},l={},o=[{value:"append_trailing_char_if_absent",id:"append_trailing_char_if_absent",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:o},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"append_trailing_char_if_absent"},"append_trailing_char_if_absent"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR append_trailing_char_if_absent(VARCHAR str, VARCHAR trailing_char)")),(0,a.yg)("p",null,"If the @str string is non-empty and does not contain the @trailing_char character at the end, it appends the @trailing_char character to the end.\n@trailing_char contains only one character, and it will return NULL if contains more than one character"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"MySQL [test]> select append_trailing_char_if_absent('a','c');\n+------------------------------------------+\n| append_trailing_char_if_absent('a', 'c') |\n+------------------------------------------+\n| ac                                       |\n+------------------------------------------+\n1 row in set (0.02 sec)\n\nMySQL [test]> select append_trailing_char_if_absent('ac','c');\n+-------------------------------------------+\n| append_trailing_char_if_absent('ac', 'c') |\n+-------------------------------------------+\n| ac                                        |\n+-------------------------------------------+\n1 row in set (0.00 sec)\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"APPEND_TRAILING_CHAR_IF_ABSENT\n")))}d.isMDXComponent=!0}}]);