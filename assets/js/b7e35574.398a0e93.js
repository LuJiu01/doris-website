"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[413149],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return t?r.createElement(d,o(o({ref:n},c),{},{components:t})):r.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},89430:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const i={title:"Config of BE",language:"en"},o=void 0,l={unversionedId:"admin-manual/be/config",id:"version-2.1/admin-manual/be/config",title:"Config of BE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/be/config.md",sourceDirName:"admin-manual/be",slug:"/admin-manual/be/config",permalink:"/docs/2.1/admin-manual/be/config",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Config of BE",language:"en"},sidebar:"docs",previous:{title:"Check All Tablet Segment Lost",permalink:"/docs/2.1/admin-manual/be/check-tablet-segment"},next:{title:"Metrics",permalink:"/docs/2.1/admin-manual/be/metrics"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Query",id:"query",level:3},{value:"Update",id:"update",level:3},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function g(e){let{components:n,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"config-of-be"},"Config of BE"),(0,a.yg)("h2",{id:"request"},"Request"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GET /api/show_config"),"\n",(0,a.yg)("inlineCode",{parentName:"p"},"POST /api/update_config?{key}={val}")),(0,a.yg)("h2",{id:"description"},"Description"),(0,a.yg)("p",null,"Query and update the config of BE"),(0,a.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"persist"),"\nWhether to persist. Optional with default ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),".")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"key"),"\nConfig item name")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("inlineCode",{parentName:"p"},"val"),"\nConfig item value        "))),(0,a.yg)("h2",{id:"request-body"},"Request body"),(0,a.yg)("p",null,"None"),(0,a.yg)("h2",{id:"response"},"Response"),(0,a.yg)("h3",{id:"query"},"Query"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'[["agent_task_trace_threshold_sec","int32_t","2","true"], ...]\n')),(0,a.yg)("h3",{id:"update"},"Update"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    }\n]\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'[\n    {\n        "config_name": "agent_task_trace_threshold_sec",\n        "status": "OK",\n        "msg": ""\n    },\n    {\n        "config_name": "enable_segcompaction",\n        "status": "BAD",\n        "msg": "set enable_segcompaction=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_segcompaction\' is not support to modify."\n    },\n    {\n        "config_name": "enable_time_lut",\n        "status": "BAD",\n        "msg": "set enable_time_lut=false failed, reason: [NOT_IMPLEMENTED_ERROR]\'enable_time_lut\' is not support to modify."\n    }\n]\n')),(0,a.yg)("h2",{id:"examples"},"Examples"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl "http://127.0.0.1:8040/api/show_config"\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&persist=true"\n\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'curl -X POST "http://127.0.0.1:8040/api/update_config?agent_task_trace_threshold_sec=2&enable_merge_on_write_correctness_check=true&persist=true"\n')))}g.isMDXComponent=!0}}]);