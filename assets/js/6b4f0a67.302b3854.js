"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[41757],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,g=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},609341:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-PROPERTY",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",title:"SHOW-PROPERTY",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-PROPERTY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"SHOW-RESTORE",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-RESTORE"},next:{title:"SHOW-TRIGGERS",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TRIGGERS"}},s={},p=[{value:"SHOW-PROPERTY",id:"show-property",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-property"},"SHOW-PROPERTY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to view the attributes of the user"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW PROPERTY [FOR user] [LIKE key]\nSHOW ALL PROPERTIES [LIKE key]\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"user")),(0,a.yg)("p",{parentName:"li"},"  View the attributes of the specified user. If not specified, check the current user's.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"LIKE")),(0,a.yg)("p",{parentName:"li"},"  Fuzzy matching can be done by attribute name.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"ALL")),(0,a.yg)("p",{parentName:"li"},"View the properties of all users (supported since version 2.0.3)"))),(0,a.yg)("p",null,"Return result description:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show property like'%connection%';\n+----------------------+-------+\n| Key                  | Value |\n+----------------------+-------+\n| max_user_connections | 100   |\n+----------------------+-------+\n1 row in set (0.01 sec)\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Key")),(0,a.yg)("p",{parentName:"li"},"  Property name.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Value")),(0,a.yg)("p",{parentName:"li"},"  Attribute value."))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'mysql> show all properties like "%connection%";\n+-------------------+--------------------------------------+\n| User              | Properties                           |\n+-------------------+--------------------------------------+\n| root              | {"max_user_connections": "100"}      |\n| admin             | {"max_user_connections": "100"}      |\n| default_cluster:a | {"max_user_connections": "1000"}     |\n+-------------------+--------------------------------------+\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"User")),(0,a.yg)("p",{parentName:"li"},"username.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"Properties")),(0,a.yg)("p",{parentName:"li"},"Key: value corresponding to each property of the user."))),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the attributes of the jack user"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR'jack';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View the attribute of jack user connection limit"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW PROPERTY FOR'jack' LIKE'%connection%';\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"View all users importing cluster related properties"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW ALL PROPERTIES LIKE '%load_cluster%'\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, PROPERTY, ALL\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);