"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12348],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>c});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},y=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(t),y=r,c=s["".concat(o,".").concat(y)]||s[y]||m[y]||l;return t?n.createElement(c,i(i({ref:a},u),{},{components:t})):n.createElement(c,i({ref:a},u))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[s]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},935480:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=t(58168),r=(t(296540),t(15680));const l={title:"Upload Action",language:"en"},i=void 0,p={unversionedId:"admin-manual/fe/upload-action",id:"version-2.1/admin-manual/fe/upload-action",title:"Upload Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/upload-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/upload-action",permalink:"/docs/2.1/admin-manual/fe/upload-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Upload Action",language:"en"},sidebar:"docs",previous:{title:"Table Schema Action",permalink:"/docs/2.1/admin-manual/fe/table-schema-action"},next:{title:"Import Action",permalink:"/docs/2.1/admin-manual/fe/import-action"}},o={},d=[{value:"Upload load file",id:"upload-load-file",level:2},{value:"Request",id:"request",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"Load the uploaded file",id:"load-the-uploaded-file",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Header",id:"header",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Example",id:"example",level:3}],u={toc:d},s="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"upload-action"},"Upload Action"),(0,r.yg)("p",null,"Upload Action currently mainly serves the front-end page of FE, and is used for users to load small test files."),(0,r.yg)("h2",{id:"upload-load-file"},"Upload load file"),(0,r.yg)("p",null,"Used to upload a file to the FE node, which can be used to load the file later. Currently only supports uploading files up to 100MB."),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"POST /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.yg)("p",{parentName:"li"},"  Namespace, currently only supports ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify database\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.yg)("p",{parentName:"li"},"  Specify table"))),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_separator")),(0,r.yg)("p",{parentName:"li"},"  Optional, specify the column separator of the file. Default is ",(0,r.yg)("inlineCode",{parentName:"p"},"\\t"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"preview")),(0,r.yg)("p",{parentName:"li"},"  Optional, if set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", up to 10 rows of data rows split according to ",(0,r.yg)("inlineCode",{parentName:"p"},"column_separator")," will be displayed in the returned result."))),(0,r.yg)("h3",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"The content of the file to be uploaded, the Content-type is ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n    },\n    "count": 1\n}\n')),(0,r.yg)("h2",{id:"load-the-uploaded-file"},"Load the uploaded file"),(0,r.yg)("h3",{id:"request-1"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PUT /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.yg)("p",{parentName:"li"},"  Namespace, currently only supports ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  Specify database\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.yg)("p",{parentName:"li"},"  Specify table"))),(0,r.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file_id")),(0,r.yg)("p",{parentName:"li"},"  Specify the load file id, which is returned by the API that uploads the file.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file_uuid")),(0,r.yg)("p",{parentName:"li"},"  Specify the file uuid, which is returned by the API that uploads the file.\n"))),(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("p",null,"The options in the header are the same as those in the header in the Stream Load request."),(0,r.yg)("h3",{id:"request-body-1"},"Request body"),(0,r.yg)("p",null,"None"),(0,r.yg)("h3",{id:"response-1"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "TxnId": 7009,\n        "Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n        "Status": "Success",\n        "Message": "OK",\n        "NumberTotalRows": 3,\n        "NumberLoadedRows": 3,\n        "NumberFilteredRows": 0,\n        "NumberUnselectedRows": 0,\n        "LoadBytes": 12,\n        "LoadTimeMs": 71,\n        "BeginTxnTimeMs": 0,\n        "StreamLoadPutTimeMs": 1,\n        "ReadDataTimeMs": 0,\n        "WriteDataTimeMs": 13,\n        "CommitAndPublishTimeMs": 53\n    },\n    "count": 1\n}\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")))}m.isMDXComponent=!0}}]);