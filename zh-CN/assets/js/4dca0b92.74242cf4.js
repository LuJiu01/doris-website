"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[564868],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>u});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=t.createContext({}),s=function(e){var a=t.useContext(g),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=s(e.components);return t.createElement(g.Provider,{value:a},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,u=c["".concat(g,".").concat(d)]||c[d]||y[d]||l;return n?t.createElement(u,o(o({ref:a},p),{},{components:n})):t.createElement(u,o({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var g in a)hasOwnProperty.call(a,g)&&(i[g]=a[g]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},571488:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>g,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),r=(n(296540),n(15680));const l={title:"Iceberg Catalog",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/datalake-analytics/iceberg",id:"version-3.0/lakehouse/datalake-analytics/iceberg",title:"Iceberg Catalog",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/iceberg.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/iceberg",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/iceberg",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Iceberg Catalog",language:"zh-CN"},sidebar:"docs",previous:{title:"Hudi Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/hudi"},next:{title:"Paimon Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/paimon"}},g={},s=[{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u57fa\u4e8e Hive Metastore \u521b\u5efa Catalog",id:"\u57fa\u4e8e-hive-metastore-\u521b\u5efa-catalog",level:3},{value:"\u57fa\u4e8e Iceberg API \u521b\u5efa Catalog",id:"\u57fa\u4e8e-iceberg-api-\u521b\u5efa-catalog",level:3},{value:"Hadoop Catalog",id:"hadoop-catalog",level:4},{value:"Hive Metastore",id:"hive-metastore",level:4},{value:"AWS Glue",id:"aws-glue",level:4},{value:"\u963f\u91cc\u4e91 DLF",id:"\u963f\u91cc\u4e91-dlf",level:4},{value:"REST Catalog",id:"rest-catalog",level:4},{value:"Google Dataproc Metastore",id:"google-dataproc-metastore",level:4},{value:"Iceberg On Object Storage",id:"iceberg-on-object-storage",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"Time Travel",id:"time-travel",level:2}],p={toc:s},c="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(c,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5feb\u901f\u4f53\u9a8c ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-iceberg"},"Apache Doris & Iceberg")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 Iceberg V1/V2 \u8868\u683c\u5f0f\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 Position Delete\u3002"),(0,r.yg)("li",{parentName:"ol"},"2.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301 Equality Delete\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u652f\u6301 Parquet \u6587\u4ef6\u683c\u5f0f"),(0,r.yg)("li",{parentName:"ol"},"2.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301 ORC \u6587\u4ef6\u683c\u5f0f\u3002")),(0,r.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,r.yg)("h3",{id:"\u57fa\u4e8e-hive-metastore-\u521b\u5efa-catalog"},"\u57fa\u4e8e Hive Metastore \u521b\u5efa Catalog"),(0,r.yg)("p",null,"\u548c Hive Catalog \u57fa\u672c\u4e00\u81f4\uff0c\u8fd9\u91cc\u4ec5\u7ed9\u51fa\u7b80\u5355\u793a\u4f8b\u3002\u5176\u4ed6\u793a\u4f8b\u53ef\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/datalake-analytics/hive"},"Hive Catalog"),"\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h3",{id:"\u57fa\u4e8e-iceberg-api-\u521b\u5efa-catalog"},"\u57fa\u4e8e Iceberg API \u521b\u5efa Catalog"),(0,r.yg)("p",null,"\u4f7f\u7528 Iceberg API \u8bbf\u95ee\u5143\u6570\u636e\u7684\u65b9\u5f0f\uff0c\u652f\u6301 Hadoop File System\u3001Hive\u3001REST\u3001Glue\u3001DLF \u7b49\u670d\u52a1\u4f5c\u4e3a Iceberg \u7684 Catalog\u3002"),(0,r.yg)("h4",{id:"hadoop-catalog"},"Hadoop Catalog"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," \u7684\u8def\u5f84\u5fc5\u987b\u6307\u5411 ",(0,r.yg)("inlineCode",{parentName:"p"},"Database")," \u8def\u5f84\u7684\u4e0a\u4e00\u7ea7\u3002"),(0,r.yg)("p",{parentName:"blockquote"},"\u793a\u4f8b\uff1a\u5982\u679c\u4f60\u7684\u8868\u8def\u5f84\u662f\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/db1/table1"),"\uff0c\u90a3\u4e48 ",(0,r.yg)("inlineCode",{parentName:"p"},"warehouse")," \u5e94\u8be5\u662f\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"s3://bucket/path/to/"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-host:8020/dir/key'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_hadoop_ha PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 'hdfs://your-nameservice/dir/key',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg_s3 PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type' = 'hadoop',\n    'warehouse' = 's3://bucket/dir/key',\n    's3.endpoint' = 's3.us-east-1.amazonaws.com',\n    's3.access_key' = 'ak',\n    's3.secret_key' = 'sk'\n);\n")),(0,r.yg)("h4",{id:"hive-metastore"},"Hive Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='hms',\n    'hive.metastore.uris' = 'thrift://172.21.0.1:7004',\n    'hadoop.username' = 'hive',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.2:4007',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.3:4007',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"aws-glue"},"AWS Glue"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8fde\u63a5 Glue \u65f6\uff0c\u5982\u679c\u662f\u5728\u975e EC2 \u73af\u5883\uff0c\u9700\u8981\u5c06 EC2 \u73af\u5883\u91cc\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws")," \u76ee\u5f55\u62f7\u8d1d\u5230\u5f53\u524d\u73af\u5883\u91cc\u3002\u4e5f\u53ef\u4ee5\u4e0b\u8f7d",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"AWS Cli"),"\u5de5\u5177\u8fdb\u884c\u914d\u7f6e\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4e5f\u4f1a\u5728\u5f53\u524d\u7528\u6237\u76ee\u5f55\u4e0b\u521b\u5efa",(0,r.yg)("inlineCode",{parentName:"p"},".aws"),"\u76ee\u5f55\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG glue PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type" = "glue",\n    "glue.endpoint" = "https://glue.us-east-1.amazonaws.com",\n    "glue.access_key" = "ak",\n    "glue.secret_key" = "sk"\n);\n')),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Iceberg \u5c5e\u6027\u8be6\u60c5\u53c2\u89c1 ",(0,r.yg)("a",{parentName:"p",href:"https://iceberg.apache.org/docs/latest/aws/#glue-catalog"},"Iceberg Glue Catalog"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c\u5728 AWS \u670d\u52a1\uff08\u5982 EC2\uff09\u4e2d\uff0c\u4e0d\u586b\u5199 Credentials \u76f8\u5173\u4fe1\u606f\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"glue.access_key"),"\u548c",(0,r.yg)("inlineCode",{parentName:"p"},"glue.secret_key"),"\uff09\uff0cDoris \u5c31\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684 DefaultAWSCredentialsProviderChain\uff0c\u5b83\u4f1a\u8bfb\u53d6\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u6216\u8005 InstanceProfile \u4e2d\u914d\u7f6e\u7684\u5c5e\u6027\u3002"))),(0,r.yg)("h4",{id:"\u963f\u91cc\u4e91-dlf"},"\u963f\u91cc\u4e91 DLF"),(0,r.yg)("p",null,"\u53c2\u89c1",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/lakehouse/datalake-analytics/dlf"},"\u963f\u91cc\u4e91 DLF Catalog \u914d\u7f6e")),(0,r.yg)("h4",{id:"rest-catalog"},"REST Catalog"),(0,r.yg)("p",null,"\u8be5\u65b9\u5f0f\u9700\u8981\u9884\u5148\u63d0\u4f9b REST \u670d\u52a1\uff0c\u7528\u6237\u9700\u5b9e\u73b0\u83b7\u53d6 Iceberg \u5143\u6570\u636e\u7684 REST \u63a5\u53e3\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181'\n);\n")),(0,r.yg)("p",null,"\u5982\u679c\u4f7f\u7528 HDFS \u5b58\u50a8\u6570\u636e\uff0c\u5e76\u5f00\u542f\u4e86\u9ad8\u53ef\u7528\u6a21\u5f0f\uff0c\u8fd8\u9700\u5728 Catalog \u4e2d\u589e\u52a0 HDFS \u9ad8\u53ef\u7528\u914d\u7f6e\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE CATALOG iceberg PROPERTIES (\n    'type'='iceberg',\n    'iceberg.catalog.type'='rest',\n    'uri' = 'http://172.21.0.1:8181',\n    'dfs.nameservices'='your-nameservice',\n    'dfs.ha.namenodes.your-nameservice'='nn1,nn2',\n    'dfs.namenode.rpc-address.your-nameservice.nn1'='172.21.0.1:8020',\n    'dfs.namenode.rpc-address.your-nameservice.nn2'='172.21.0.2:8020',\n    'dfs.client.failover.proxy.provider.your-nameservice'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider'\n);\n")),(0,r.yg)("h4",{id:"google-dataproc-metastore"},"Google Dataproc Metastore"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG iceberg PROPERTIES (\n    "type"="iceberg",\n    "iceberg.catalog.type"="hms",\n    "hive.metastore.uris" = "thrift://172.21.0.1:9083",\n    "gs.endpoint" = "https://storage.googleapis.com",\n    "gs.region" = "us-east-1",\n    "gs.access_key" = "ak",\n    "gs.secret_key" = "sk",\n    "use_path_style" = "true"\n);\n')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"hive.metastore.uris"),": Dataproc Metastore \u670d\u52a1\u5f00\u653e\u7684\u63a5\u53e3\uff0c\u5728 Metastore \u7ba1\u7406\u9875\u9762\u83b7\u53d6\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://console.cloud.google.com/dataproc/metastore"},"Dataproc Metastore Services"),"."),(0,r.yg)("h3",{id:"iceberg-on-object-storage"},"Iceberg On Object Storage"),(0,r.yg)("p",null,"\u82e5\u6570\u636e\u5b58\u653e\u5728 S3 \u4e0a\uff0cproperties \u4e2d\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"s3.access_key" = "ak"\n"s3.secret_key" = "sk"\n"s3.endpoint" = "s3.us-east-1.amazonaws.com"\n"s3.region" = "us-east-1"\n')),(0,r.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u963f\u91cc\u4e91 OSS \u4e0a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"oss.access_key" = "ak"\n"oss.secret_key" = "sk"\n"oss.endpoint" = "oss-cn-beijing-internal.aliyuncs.com"\n"oss.region" = "oss-cn-beijing"\n')),(0,r.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u817e\u8baf\u4e91 COS \u4e0a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"cos.access_key" = "ak"\n"cos.secret_key" = "sk"\n"cos.endpoint" = "cos.ap-beijing.myqcloud.com"\n"cos.region" = "ap-beijing"\n')),(0,r.yg)("p",null,"\u6570\u636e\u5b58\u653e\u5728\u534e\u4e3a\u4e91 OBS \u4e0a\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"obs.access_key" = "ak"\n"obs.secret_key" = "sk"\n"obs.endpoint" = "obs.cn-north-4.myhuaweicloud.com"\n"obs.region" = "cn-north-4"\n')),(0,r.yg)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'-- MinIO & Rest Catalog\nCREATE CATALOG `iceberg` PROPERTIES (\n    "type" = "iceberg",\n    "iceberg.catalog.type" = "rest",\n    "uri" = "http://10.0.0.1:8181",\n    "warehouse" = "s3://bucket",\n    "token" = "token123456",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://10.0.0.1:9000",\n    "s3.region" = "us-east-1"\n);\n')),(0,r.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Iceberg Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"long"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"date")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"uuid"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamp (Timestamp without timezone)"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime(6)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"timestamptz (Timestamp with timezone)"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime(6)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fixed(L)"),(0,r.yg)("td",{parentName:"tr",align:null},"char(L)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"binary"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct\uff082.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map\uff082.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"list"),(0,r.yg)("td",{parentName:"tr",align:null},"array")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time"),(0,r.yg)("td",{parentName:"tr",align:null},"\u4e0d\u652f\u6301")))),(0,r.yg)("h2",{id:"time-travel"},"Time Travel"),(0,r.yg)("p",null,"\u652f\u6301\u8bfb\u53d6 Iceberg \u8868\u6307\u5b9a\u7684 Snapshot\u3002"),(0,r.yg)("p",null,"\u6bcf\u4e00\u6b21\u5bf9 iceberg \u8868\u7684\u5199\u64cd\u4f5c\u90fd\u4f1a\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u5feb\u7167\u3002"),(0,r.yg)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8bfb\u53d6\u8bf7\u6c42\u53ea\u4f1a\u8bfb\u53d6\u6700\u65b0\u7248\u672c\u7684\u5feb\u7167\u3002"),(0,r.yg)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR TIME AS OF")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"FOR VERSION AS OF")," \u8bed\u53e5\uff0c\u6839\u636e\u5feb\u7167 ID \u6216\u8005\u5feb\u7167\u4ea7\u751f\u7684\u65f6\u95f4\u8bfb\u53d6\u5386\u53f2\u7248\u672c\u7684\u6570\u636e\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},'SELECT * FROM iceberg_tbl FOR TIME AS OF "2022-10-07 17:20:37";')),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"SELECT * FROM iceberg_tbl FOR VERSION AS OF 868895038966572;")),(0,r.yg)("p",null,"\u53e6\u5916\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.yg)("a",{parentName:"p",href:"/zh-CN/docs/sql-manual/sql-functions/table-functions/iceberg-meta"},"iceberg_meta")," \u8868\u51fd\u6570\u67e5\u8be2\u6307\u5b9a\u8868\u7684 snapshot \u4fe1\u606f\u3002"))}y.isMDXComponent=!0}}]);