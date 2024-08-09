"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[588304],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>s});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=p(n),d=r,s=y["".concat(g,".").concat(d)]||y[d]||c[d]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[y]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},773181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"BigQuery Catalog",language:"zh-CN"},i=void 0,o={unversionedId:"lakehouse/datalake-analytics/bigquery",id:"lakehouse/datalake-analytics/bigquery",title:"BigQuery Catalog",description:"\x3c!--",source:"@site/docs/lakehouse/datalake-analytics/bigquery.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/bigquery",permalink:"/docs/dev/lakehouse/datalake-analytics/bigquery",draft:!1,tags:[],version:"current",frontMatter:{title:"BigQuery Catalog",language:"zh-CN"},sidebar:"docs",previous:{title:"LakeSoul Catalog",permalink:"/docs/dev/lakehouse/datalake-analytics/lakesoul"},next:{title:"Delta Lake Catalog",permalink:"/docs/dev/lakehouse/datalake-analytics/deltalake"}},g={},p=[{value:"Instructions for Use",id:"instructions-for-use",level:2},{value:"Compiling the BigQuery Connector Plugin",id:"compiling-the-bigquery-connector-plugin",level:2},{value:"Deploying the BigQuery Connector",id:"deploying-the-bigquery-connector",level:2},{value:"Preparing Google Cloud ADC Authentication",id:"preparing-google-cloud-adc-authentication",level:2},{value:"Create BigQuery Catalog",id:"create-bigquery-catalog",level:2},{value:"Column Type Mapping",id:"column-type-mapping",level:2}],u={toc:p},y="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(y,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"bigquery-catalog"},"BigQuery Catalog"),(0,r.yg)("p",null,"BigQuery Catalog is compatible with the ",(0,r.yg)("a",{parentName:"p",href:"../../../../docusaurus-plugin-content-docs-community/current/how-to-contribute/trino-connector-developer-guide.md"},"Trino Connector")," framework, using the BigQuery Connector to access BigQuery tables."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"This feature is supported starting from Doris version 3.0.1.")),(0,r.yg)("admonition",{title:"Note",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"This is an experimental feature.")),(0,r.yg)("h2",{id:"instructions-for-use"},"Instructions for Use"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Before accessing BigQuery tables using the Trino Catalog, you must first compile the Trino BigQuery plugin and place it in the specified directory. Refer to the following steps for detailed instructions."),(0,r.yg)("li",{parentName:"ol"},"The current Doris is compatible with the Trino 435 version plugin. If you use a Trino plugin lower or higher than version 435, compatibility issues may arise.")),(0,r.yg)("h2",{id:"compiling-the-bigquery-connector-plugin"},"Compiling the BigQuery Connector Plugin"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"JDK version 17 is required.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"$ git clone https://github.com/apache/Doris-thirdparty.git\n$ cd Doris-thirdparty\n$ git checkout trino-435\n$ cd plugin/trino-bigquery\n$ mvn clean install -DskipTest\n")),(0,r.yg)("p",null,"After compilation, you will find the ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-bigquery-435/")," directory under ",(0,r.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-bigquery/target/"),"."),(0,r.yg)("p",null,"You can also directly download our precompiled ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/Doris-thirdparty/releases/download/trino-435-20240724/trino-bigquery-435-20240724.tar.gz"},"trino-bigquery-435-20240724.tar.gz")," and extract it."),(0,r.yg)("h2",{id:"deploying-the-bigquery-connector"},"Deploying the BigQuery Connector"),(0,r.yg)("p",null,"Place the ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-bigquery-435/")," directory in the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/")," directory of all FE and BE deployment paths (create manually if not present)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502   \u251c\u2500\u2500 trino-bigquery-435\n...\n")),(0,r.yg)("p",null,"After deployment, it is recommended to restart the FE and BE nodes to ensure the Connector is correctly loaded."),(0,r.yg)("h2",{id:"preparing-google-cloud-adc-authentication"},"Preparing Google Cloud ADC Authentication"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install gcloud CLI: ",(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"https://cloud.google.com/sdk/docs/install")),(0,r.yg)("li",{parentName:"ol"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud init --console-only --skip-diagnostics")),(0,r.yg)("li",{parentName:"ol"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud auth login")),(0,r.yg)("li",{parentName:"ol"},"Run ",(0,r.yg)("inlineCode",{parentName:"li"},"gcloud auth application-default login"))),(0,r.yg)("p",null,"This step generates the ADC authentication file, and the generated JSON file is by default placed in ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.config/gcloud/application_default_credentials.json"),"."),(0,r.yg)("h2",{id:"create-bigquery-catalog"},"Create BigQuery Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create catalog bigquery_catalog properties (\n    "type"="trino-connector",\n    "trino.connector.name"="bigquery",\n    "trino.bigquery.project-id"="your-bigquery-project-id",\n    "trino.bigquery.credentials-file"="/path/to/application_default_credentials.json",\n);\n')),(0,r.yg)("p",null,"Where: Properties prefixed with ",(0,r.yg)("inlineCode",{parentName:"p"},"trino.")," are native Trino properties. For more information about BigQuery properties, refer to the ",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/bigquery.html"},"Trino documentation"),"."),(0,r.yg)("h2",{id:"column-type-mapping"},"Column Type Mapping"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"BigQuery"),(0,r.yg)("th",{parentName:"tr",align:null},"Trino"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INT64"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT64"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"NUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BIGNUMERIC"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(P,S)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTES"),(0,r.yg)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(6)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIME"),(0,r.yg)("td",{parentName:"tr",align:null},"TIME(6)"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(6) WITH TIME ZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"GEOGRAPHY"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"RECORD"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))))}c.isMDXComponent=!0}}]);