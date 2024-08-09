"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[380254],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>g});var n=t(296540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||r;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},617499:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(58168),o=(t(296540),t(15680));const r={title:"Alibaba Cloud Max Compute",language:"en"},i=void 0,l={unversionedId:"lakehouse/database/max-compute",id:"version-3.0/lakehouse/database/max-compute",title:"Alibaba Cloud Max Compute",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/lakehouse/database/max-compute.md",sourceDirName:"lakehouse/database",slug:"/lakehouse/database/max-compute",permalink:"/docs/lakehouse/database/max-compute",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Alibaba Cloud Max Compute",language:"en"},sidebar:"docs",previous:{title:"Elasticsearch",permalink:"/docs/lakehouse/database/es"},next:{title:"Querying Files on S3/HDFS",permalink:"/docs/lakehouse/file"}},c={},p=[{value:"Instructions",id:"instructions",level:2},{value:"Connect to MaxCompute",id:"connect-to-maxcompute",level:2},{value:"Quotas",id:"quotas",level:2},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"User-defined service address",id:"user-defined-service-address",level:2}],u={toc:p},s="wrapper";function m(e){let{components:a,...t}=e;return(0,o.yg)(s,(0,n.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"alibaba-cloud-maxcompute"},"Alibaba Cloud MaxCompute"),(0,o.yg)("p",null,"MaxCompute (previously known as ODPS) is a data warehousing solution that can process terabytes or petabytes of data."),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/product-overview/what-is-maxcompute"},"What is MaxCompute"))),(0,o.yg)("h2",{id:"instructions"},"Instructions"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Max Compute Catalog is developed based on ",(0,o.yg)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/overview-28?spm=a2c63.p38356.0.0.7d951a91knT73F"},"Max Compute Tunnel SDK"),", and Query performance is limited."),(0,o.yg)("li",{parentName:"ol"},"During a query, Max Compute DownloadSession objects are created for each Scan. Therefore, performance will degrade when Max Compute is accessed in parallel. It is recommended that minimize the number of partitions and the size of the queried data when using the Max Compute Catalog.")),(0,o.yg)("h2",{id:"connect-to-maxcompute"},"Connect to MaxCompute"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n);\n')),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.region"),": MaxCompute Region. Can Get the Region From ",(0,o.yg)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints"},"Endpoints"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.default.project"),": MaxCompute Project. See Your ",(0,o.yg)("a",{parentName:"li",href:"https://maxcompute.console.aliyun.com/cn-beijing/project-list"},"MaxCompute Projects"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.access_key"),": AccessKey, which you can create and manage on the ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.secret_key"),": SecretKey, which you can create and manage on the ",(0,o.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"Alibaba Cloud console"),"."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.public_access"),": You can enable public network access for test, when set ",(0,o.yg)("inlineCode",{parentName:"li"},'"mc.public_access"="true"'),".")),(0,o.yg)("h2",{id:"quotas"},"Quotas"),(0,o.yg)("p",null,"Pay-as-you-go quota has limited concurrency and usage. For additional resources, please refer to the documentation. See ",(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/manage-quotas-in-the-new-maxcompute-console"},"Manage quotas"),"."),(0,o.yg)("h2",{id:"column-type-mapping"},"Column type mapping"),(0,o.yg)("p",null,"Consistent with Hive Catalog, please refer to the ",(0,o.yg)("strong",{parentName:"p"},"column type mapping")," section in ",(0,o.yg)("a",{parentName:"p",href:"/docs/lakehouse/datalake-analytics/hive"},"Hive Catalog"),"."),(0,o.yg)("h2",{id:"user-defined-service-address"},"User-defined service address"),(0,o.yg)("p",null,"The region property is specified to generate a default endpoint of public network."),(0,o.yg)("p",null,"In addition to default endpoint addresses, Max Compute Catalog also supports custom service addresses in properties."),(0,o.yg)("p",null,"Use the following properties:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.odps_endpoint"),"\uff1aMax Compute Endpoint\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"mc.tunnel_endpoint"),": Tunnel Endpoint\uff0cMax Compute Catalog uses the Tunnel SDK to obtain data.")),(0,o.yg)("p",null,"For more information about Max Compute Endpoint and Tunnel Endpoint that are used in different regions and network connection modes, see ",(0,o.yg)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints"},"Endpoint")),(0,o.yg)("p",null,"For example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.region" = "cn-beijing",\n  "mc.default.project" = "your-project",\n  "mc.access_key" = "ak",\n  "mc.secret_key" = "sk"\n  "mc.odps_endpoint" = "http://service.cn-beijing.maxcompute.aliyun-inc.com/api",\n  "mc.tunnel_endpoint" = "http://dt.cn-beijing.maxcompute.aliyun-inc.com"\n);\n')))}m.isMDXComponent=!0}}]);