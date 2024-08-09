"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[498254],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>u});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},g=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||y[d]||l;return n?t.createElement(u,o(o({ref:a},g),{},{components:n})):t.createElement(u,o({ref:a},g))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},276641:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(58168),r=(n(296540),n(15680));const l={title:"Paimon Catalog",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/datalake-analytics/paimon",id:"version-3.0/lakehouse/datalake-analytics/paimon",title:"Paimon Catalog",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/lakehouse/datalake-analytics/paimon.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/paimon",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/paimon",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Paimon Catalog",language:"zh-CN"},sidebar:"docs",previous:{title:"Iceberg Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/iceberg"},next:{title:"LakeSoul Catalog",permalink:"/zh-CN/docs/lakehouse/datalake-analytics/lakesoul"}},p={},s=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u521b\u5efa Catalog",id:"\u521b\u5efa-catalog",level:2},{value:"\u57fa\u4e8e FileSystem \u521b\u5efa Catalog",id:"\u57fa\u4e8e-filesystem-\u521b\u5efa-catalog",level:3},{value:"HDFS",id:"hdfs",level:4},{value:"MINIO",id:"minio",level:4},{value:"OBS",id:"obs",level:4},{value:"COS",id:"cos",level:4},{value:"OSS",id:"oss",level:4},{value:"\u57fa\u4e8e Hive Metastore \u521b\u5efa Catalog",id:"\u57fa\u4e8e-hive-metastore-\u521b\u5efa-catalog",level:3},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],g={toc:s},m="wrapper";function y(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u5feb\u901f\u4f53\u9a8c ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/gettingStarted/tutorials/doris-paimon"},"Apache Doris & Paimon")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u6570\u636e\u653e\u5728 hdfs \u65f6\uff0c\u9700\u8981\u5c06 core-site.xml\uff0chdfs-site.xml \u548c hive-site.xml  \u653e\u5230 FE \u548c BE \u7684 conf \u76ee\u5f55\u4e0b\u3002\u4f18\u5148\u8bfb\u53d6 conf \u76ee\u5f55\u4e0b\u7684 hadoop \u914d\u7f6e\u6587\u4ef6\uff0c\u518d\u8bfb\u53d6\u73af\u5883\u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"li"},"HADOOP_CONF_DIR")," \u7684\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u524d\u9002\u914d\u7684 Paimon \u7248\u672c\u4e3a 0.8\u3002")),(0,r.yg)("h2",{id:"\u521b\u5efa-catalog"},"\u521b\u5efa Catalog"),(0,r.yg)("p",null,"Paimon Catalog \u5f53\u524d\u652f\u6301\u4e24\u79cd\u7c7b\u578b\u7684 Metastore \u521b\u5efa Catalog:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"filesystem\uff08\u9ed8\u8ba4\uff09\uff0c\u540c\u65f6\u5b58\u50a8\u5143\u6570\u636e\u548c\u6570\u636e\u5728 filesystem\u3002"),(0,r.yg)("li",{parentName:"ul"},"hive metastore\uff0c\u5b83\u8fd8\u5c06\u5143\u6570\u636e\u5b58\u50a8\u5728 Hive metastore \u4e2d\u3002\u7528\u6237\u53ef\u4ee5\u76f4\u63a5\u4ece Hive \u8bbf\u95ee\u8fd9\u4e9b\u8868\u3002")),(0,r.yg)("h3",{id:"\u57fa\u4e8e-filesystem-\u521b\u5efa-catalog"},"\u57fa\u4e8e FileSystem \u521b\u5efa Catalog"),(0,r.yg)("h4",{id:"hdfs"},"HDFS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hdfs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    \'type\'=\'paimon\',\n    "warehouse" = "hdfs://HDFS8000871/user/paimon",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    \'hadoop.security.authentication\' = \'kerberos\',\n    \'hadoop.kerberos.keytab\' = \'/doris/hdfs.keytab\',   \n    \'hadoop.kerberos.principal\' = \'hdfs@HADOOP.COM\'\n);\n')),(0,r.yg)("h4",{id:"minio"},"MINIO"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://bucket_name/paimons3",\n    "s3.endpoint" = "http://<ip>:<port>",\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk"\n);\n')),(0,r.yg)("h4",{id:"obs"},"OBS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_obs` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "obs://bucket_name/paimon",\n    "obs.endpoint"="obs.cn-north-4.myhuaweicloud.com",\n    "obs.access_key"="ak",\n    "obs.secret_key"="sk"\n);\n')),(0,r.yg)("h4",{id:"cos"},"COS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_s3` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "cosn://paimon-1308700295/paimoncos",\n    "cos.endpoint" = "cos.ap-beijing.myqcloud.com",\n    "cos.access_key" = "ak",\n    "cos.secret_key" = "sk"\n);\n')),(0,r.yg)("h4",{id:"oss"},"OSS"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_oss` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "oss://paimon-zd/paimonoss",\n    "oss.endpoint" = "oss-cn-beijing.aliyuncs.com",\n    "oss.access_key" = "ak",\n    "oss.secret_key" = "sk"\n);\n\n')),(0,r.yg)("h3",{id:"\u57fa\u4e8e-hive-metastore-\u521b\u5efa-catalog"},"\u57fa\u4e8e Hive Metastore \u521b\u5efa Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG `paimon_hms` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.username" = "hadoop"\n);\n\nCREATE CATALOG `paimon_kerberos` PROPERTIES (\n    "type" = "paimon",\n    "paimon.catalog.type" = "hms",\n    "warehouse" = "hdfs://HDFS8000871/user/zhangdong/paimon2",\n    "hive.metastore.uris" = "thrift://172.21.0.44:7004",\n    "hive.metastore.sasl.enabled" = "true",\n    "hive.metastore.kerberos.principal" = "hive/xxx@HADOOP.COM",\n    "dfs.nameservices" = "HDFS8000871",\n    "dfs.ha.namenodes.HDFS8000871" = "nn1,nn2",\n    "dfs.namenode.rpc-address.HDFS8000871.nn1" = "172.21.0.1:4007",\n    "dfs.namenode.rpc-address.HDFS8000871.nn2" = "172.21.0.2:4007",\n    "dfs.client.failover.proxy.provider.HDFS8000871" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",\n    "hadoop.security.authentication" = "kerberos",\n    "hadoop.kerberos.principal" = "hdfs@HADOOP.COM",\n    "hadoop.kerberos.keytab" = "/doris/hdfs.keytab"\n);\n')),(0,r.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Paimon Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris Data Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BooleanType"),(0,r.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TinyIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"TinyInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SmallIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"SmallInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"IntType"),(0,r.yg)("td",{parentName:"tr",align:null},"Int"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FloatType"),(0,r.yg)("td",{parentName:"tr",align:null},"Float"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BigIntType"),(0,r.yg)("td",{parentName:"tr",align:null},"BigInt"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DoubleType"),(0,r.yg)("td",{parentName:"tr",align:null},"Double"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarCharType"),(0,r.yg)("td",{parentName:"tr",align:null},"VarChar"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CharType"),(0,r.yg)("td",{parentName:"tr",align:null},"Char"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"VarBinaryType, BinaryType"),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DecimalType(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null},"Decimal(precision, scale)"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TimestampType,LocalZonedTimestampType"),(0,r.yg)("td",{parentName:"tr",align:null},"DateTime"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DateType"),(0,r.yg)("td",{parentName:"tr",align:null},"Date"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ArrayType"),(0,r.yg)("td",{parentName:"tr",align:null},"Array"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301Array\u5d4c\u5957")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MapType"),(0,r.yg)("td",{parentName:"tr",align:null},"Map"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301Map\u5d4c\u5957")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RowType"),(0,r.yg)("td",{parentName:"tr",align:null},"Struct"),(0,r.yg)("td",{parentName:"tr",align:null},"\u652f\u6301Struct\u5d4c\u5957\uff082.0.10 \u548c 2.1.3 \u7248\u672c\u5f00\u59cb\u652f\u6301\uff09")))),(0,r.yg)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Kerberos \u95ee\u9898"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u786e\u4fdd principal \u548c keytab \u914d\u7f6e\u6b63\u786e\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u9700\u5728 BE \u8282\u70b9\u542f\u52a8\u5b9a\u65f6\u4efb\u52a1\uff08\u5982 crontab\uff09\uff0c\u6bcf\u9694\u4e00\u5b9a\u65f6\u95f4\uff08\u5982 12 \u5c0f\u65f6\uff09\uff0c\u6267\u884c\u4e00\u6b21 ",(0,r.yg)("inlineCode",{parentName:"li"},"kinit -kt your_principal your_keytab")," \u547d\u4ee4\u3002"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Unknown type value: UNSUPPORTED"),(0,r.yg)("p",{parentName:"li"},"\u8fd9\u662f Doris 2.0.2 \u7248\u672c\u548c Paimon 0.5 \u7248\u672c\u7684\u4e00\u4e2a\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u9700\u8981\u5347\u7ea7\u5230 2.0.3 \u6216\u66f4\u9ad8\u7248\u672c\u89e3\u51b3\uff0c\u6216\u81ea\u884c ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/pull/24985"},"patch"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\uff08OSS\u3001S3 \u7b49\uff09\u62a5\u9519\u6587\u4ef6\u7cfb\u7edf\u4e0d\u652f\u6301"),(0,r.yg)("p",{parentName:"li"},"\u5728 2.0.5\uff08\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\uff0c\u7528\u6237\u9700\u624b\u52a8\u4e0b\u8f7d\u4ee5\u4e0b jar \u5305\u5e76\u653e\u7f6e\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/be/lib/java_extensions/preload-extensions")," \u76ee\u5f55\u4e0b\uff0c\u91cd\u542f BE\u3002"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u8bbf\u95ee OSS\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-oss/0.6.0-incubating/paimon-oss-0.6.0-incubating.jar"},"paimon-oss-0.6.0-incubating.jar")),(0,r.yg)("li",{parentName:"ul"},"\u8bbf\u95ee\u5176\u4ed6\u5bf9\u8c61\u5b58\u50a8\uff1a",(0,r.yg)("a",{parentName:"li",href:"https://repo.maven.apache.org/maven2/org/apache/paimon/paimon-s3/0.6.0-incubating/paimon-s3-0.6.0-incubating.jar"},"paimon-s3-0.6.0-incubating.jar"))),(0,r.yg)("p",{parentName:"li"},"2.0.6 \u4e4b\u540e\u7684\u7248\u672c\u4e0d\u518d\u9700\u8981\u7528\u6237\u624b\u52a8\u653e\u7f6e\u3002"))))}y.isMDXComponent=!0}}]);