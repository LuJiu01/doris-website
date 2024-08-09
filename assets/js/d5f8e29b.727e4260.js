"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[950580],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var r=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,y=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},202880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(58168),o=(n(296540),n(15680));const a={title:"SQL Mode",language:"en"},s=void 0,l={unversionedId:"query/query-variables/sql-mode",id:"query/query-variables/sql-mode",title:"SQL Mode",description:"\x3c!--",source:"@site/docs/query/query-variables/sql-mode.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/sql-mode",permalink:"/docs/dev/query/query-variables/sql-mode",draft:!1,tags:[],version:"current",frontMatter:{title:"SQL Mode",language:"en"},sidebar:"docs",previous:{title:"Variable",permalink:"/docs/dev/query/query-variables/variables"},next:{title:"User Defined Variables",permalink:"/docs/dev/query/query-variables/user-defined-variables"}},i={},d=[{value:"sql mode introduce",id:"sql-mode-introduce",level:2},{value:"principle",id:"principle",level:2},{value:"Operation method",id:"operation-method",level:2},{value:"mode is supported",id:"mode-is-supported",level:2},{value:"composite mode",id:"composite-mode",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"sql-mode"},"SQL Mode"),(0,o.yg)("p",null,"The sql mode newly supported by Doris refers to the sql mode management mechanism of Mysql. Each client can set its own sql mode, and database administrators with Admin privileges can set the global sql mode."),(0,o.yg)("h2",{id:"sql-mode-introduce"},"sql mode introduce"),(0,o.yg)("p",null,"sql mode enables users to switch between different styles of sql syntax and data validation strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string concatenator, but in Doris it is equivalent to 'or', then users only need to use sql mode to switch to the style they want. Each client can set the sql mode, which is valid in the current session. Only users with Admin privileges can set the global sql mode."),(0,o.yg)("h2",{id:"principle"},"principle"),(0,o.yg)("p",null,"The sql mode is stored in SessionVariables with a 64-bit Long type. Each bit of this address represents the enable/disable (1 means open, 0 means disable) state of a mode, as long as you know where each mode is. Bit, we can easily and quickly perform checksum operations on sql mode through bit operations."),(0,o.yg)("p",null,"Every time you query the sql mode, the Long type will be parsed and turned into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a string that can be stored in SessionVariables. Long type."),(0,o.yg)("p",null,"The global sql mode that has been set will be persisted, so the operation on the global sql mode always only needs to be performed once, and the last global sql mode can be restored even after the program is restarted."),(0,o.yg)("h2",{id:"operation-method"},"Operation method"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Set sql mode")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Currently Doris's default sql mode is DEFAULT (but this will be changed in subsequent revisions soon).\nSetting global sql mode requires Admin privileges and will affect all clients connecting thereafter.\nSetting session sql mode will only affect the current dialog client, the default is session mode.")),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},"Query sql mode")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"select @@global.sql_mode\nselect @@session.sql_mode\n")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"In addition to this way, you can also check the current sql mode by returning all session variables in the following way"),(0,o.yg)("pre",{parentName:"blockquote"},(0,o.yg)("code",{parentName:"pre"},"show global variables\nshow session variables\n"))),(0,o.yg)("h2",{id:"mode-is-supported"},"mode is supported"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"PIPES_AS_CONCAT"))),(0,o.yg)("p",null,"In this mode, the '||' symbol is a string concatenation symbol (same as the CONCAT() function), not a synonym for the 'OR' symbol. (e.g., ",(0,o.yg)("inlineCode",{parentName:"p"},"'a'||'b' = 'ab'"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"1||0 = '10'"),")"),(0,o.yg)("ol",{start:2},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("inlineCode",{parentName:"li"},"NO_BACKSLASH_ESCAPES"))),(0,o.yg)("p",null,"Enabling this mode disables the backslash character (","\\",") from functioning as an escape character within strings and identifiers. When this mode is enabled, the backslash is treated as a regular character without any special meaning"),(0,o.yg)("h2",{id:"composite-mode"},"composite mode"),(0,o.yg)("p",null,"(subsequent additions)"))}p.isMDXComponent=!0}}]);