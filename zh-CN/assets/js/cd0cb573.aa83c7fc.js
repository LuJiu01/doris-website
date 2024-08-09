"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[151936],{15680:(e,n,r)=>{r.d(n,{xA:()=>s,yg:()=>m});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?t.createElement(m,i(i({ref:n},s),{},{components:r})):t.createElement(m,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5318:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var t=r(58168),a=(r(296540),r(15680));const o={title:"Hardware Info Action",language:"zh-CN"},i=void 0,c={unversionedId:"admin-manual/fe/hardware-info-action",id:"admin-manual/fe/hardware-info-action",title:"Hardware Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/fe/hardware-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/hardware-info-action",permalink:"/zh-CN/docs/dev/admin-manual/fe/hardware-info-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Hardware Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"HA Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/ha-action"},next:{title:"Help Action",permalink:"/zh-CN/docs/dev/admin-manual/fe/help-action"}},l={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}],s={toc:u},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(p,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"hardware-info-action"},"Hardware Info Action"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"GET /rest/v1/hardware_info/fe/\n")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Hardware Info Action \u7528\u4e8e\u83b7\u53d6\u5f53\u524dFE\u7684\u786c\u4ef6\u4fe1\u606f\u3002"),(0,a.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"\u65e0"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "VersionInfo": {\n            "Git": "git://host/core@5bc28f4c36c20c7b424792df662fc988436e679e",\n            "Version": "trunk",\n            "BuildInfo": "cmy@192.168.1",\n            "BuildTime": "\u4e8c, 05 9\u6708 2019 11:07:42 CST"\n        },\n        "HardwareInfo": {\n            "NetworkParameter": "...",\n            "Processor": "...",\n            "OS": "...",\n            "Memory": "...",\n            "FileSystem": "...",\n            "NetworkInterface": "...",\n            "Processes": "...",\n            "Disk": "..."\n        }\n    },\n    "count": 0\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5176\u4e2d ",(0,a.yg)("inlineCode",{parentName:"li"},"HardwareInfo")," \u5b57\u6bb5\u4e2d\u7684\u5404\u4e2a\u503c\u7684\u5185\u5bb9\uff0c\u90fd\u662f\u4ee5html\u683c\u5f0f\u5c55\u73b0\u7684\u786c\u4ef6\u4fe1\u606f\u6587\u672c\u3002")))}d.isMDXComponent=!0}}]);