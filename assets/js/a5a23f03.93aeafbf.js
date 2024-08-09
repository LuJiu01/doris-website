"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[308104],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||l;return a?n.createElement(d,o(o({ref:t},p),{},{components:a})):n.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},593731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(58168),r=(a(296540),a(15680));const l={title:"File Cache",language:"en"},o=void 0,i={unversionedId:"compute-storage-decoupled/file-cache",id:"compute-storage-decoupled/file-cache",title:"File Cache",description:"\x3c!--",source:"@site/docs/compute-storage-decoupled/file-cache.md",sourceDirName:"compute-storage-decoupled",slug:"/compute-storage-decoupled/file-cache",permalink:"/docs/dev/compute-storage-decoupled/file-cache",draft:!1,tags:[],version:"current",frontMatter:{title:"File Cache",language:"en"},sidebar:"docs",previous:{title:"Managing Compute Cluster",permalink:"/docs/dev/compute-storage-decoupled/managing-compute-cluster"},next:{title:"Meta Service API",permalink:"/docs/dev/compute-storage-decoupled/meta-service-api"}},s={},c=[{value:"Cache space management",id:"cache-space-management",level:2},{value:"Data cache",id:"data-cache",level:3},{value:"Cache eviction",id:"cache-eviction",level:3},{value:"Cache warmup",id:"cache-warmup",level:3},{value:"Usage",id:"usage",level:2},{value:"Set TTL strategy",id:"set-ttl-strategy",level:3},{value:"Cache warmup",id:"cache-warmup-1",level:3},{value:"Best practice",id:"best-practice",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In the compute-storage decoupled mode, data is stored on remote storage. To accelerate data access, Doris implements a cache mechanism based on local disks and provides two efficient cache management strategies: the LRU (Least Recently Used) strategy and the TTL (Time-to-Live) strategy. It optimizes the index-related data, aiming to cache the data most commonly used by users as much as possible."),(0,r.yg)("p",null,"In use cases involving multiple compute clusters, Doris provides cache warmup. When a new compute cluster is established, users can choose to warm up specific data (such as tables or partitions) to improve query efficiency."),(0,r.yg)("h2",{id:"cache-space-management"},"Cache space management"),(0,r.yg)("h3",{id:"data-cache"},"Data cache"),(0,r.yg)("p",null,"Data enters the cache in the following three ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Import"),": Newly imported data will be asynchronously written to the cache to accelerate first-time access."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Query"),": If the data requested by a query is not in the cache, the system will read the data from the remote storage into memory and write it to the cache simultaneously to speed up subsequent queries."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Warmup"),": Although the data in the remote storage can be shared across multiple compute clusters, the cached data is not shared. When a new compute cluster is created, the cache for it is empty. In this case, users can manually warm up the cache, which means pulling the required data from the remote storage to the local cache.")),(0,r.yg)("h3",{id:"cache-eviction"},"Cache eviction"),(0,r.yg)("p",null,"Doris supports two cache management strategies: LRU and TTL."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"LRU (Least Recently Used)"),": As the default strategy, LRU manages data by maintaining a queue. If certain data in the queue is accessed, that piece of data will be moved to the front of the queue. New data written to the cache will also be placed at the front of the queue to avoid being evicted too early. If the cache space is full, the data at the tail of the queue will be prioritized for eviction.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"TTL (Time-to-Live)"),": The TTL strategy is to ensure that newly imported data is retained in the cache for a certain period of time. The time when such data is evicted from the cache depends on its import time and the TTL value set by the user. Data under TTL has the highest priority in the cache and is treated equally. When the cache is full, the system will evict data from the LRU queue to ensure that new TTL data can be written to the cache. Additionally, all data set with TTL will be treated equally despite differences in eviction time. When TTL data occupies the entire cache space, neither newly imported data (whether set with TTL or not) nor cold data pulled from the remote storage will be written to the cache."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The TTL strategy can be applied to small data tables that are supposed to be persisted locally. It is recommended to set a relatively large TTL value for such tables to ensure that their data in the cache will not be evicted prematurely due to query operations on other large data tables.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"For tables using a dynamic partitioning strategy, it is recommended to set a TTL value based on how long their hot partitions remain active. This can ensure the retention of hot partition data in the cache and avoid it being affected by queries on cold partitions.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Currently, the system does not support directly viewing the proportion of TTL data in the cache."))))),(0,r.yg)("h3",{id:"cache-warmup"},"Cache warmup"),(0,r.yg)("p",null,"In the compute-storage decoupled mode, Doris supports multiple compute clusters, with the stored data shared across the clusters but not the cache. When a new compute cluster is created, its cache is initially empty, which may impact query performance. To address this, Doris provides cache warmup that allows users to actively pull data from the remote storage to the local cache. Currently, it supports cache warmup from:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Compute cluster"),": Warm up the cache of compute cluster B with the cached data from compute cluster A. Doris periodically collects information of the hot tables/partitions accessed by each compute cluster over a period of time and stores it as an internal table. Based on such information, it selectively pulls data from certain tables/partitions to the cache during cache warmup."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Table"),": Warm up the cache of a new compute cluster with data from table A."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Partition"),": Warm up the cache of a new compute cluster with data from partition ",(0,r.yg)("inlineCode",{parentName:"li"},"p1")," of table A.")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("h3",{id:"set-ttl-strategy"},"Set TTL strategy"),(0,r.yg)("p",null,"To apply the TTL strategy for a table, set the TTL strategy in the PROPERTIES of the table creation statement. "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"file_cache_ttl_seconds"),": The expected time (measured in seconds) for newly imported data to be retained in the cache.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},'CREATE TABLE IF NOT EXISTS customer (\n  C_CUSTKEY     INTEGER NOT NULL,\n  C_NAME        VARCHAR(25) NOT NULL,\n  C_ADDRESS     VARCHAR(40) NOT NULL,\n  C_NATIONKEY   INTEGER NOT NULL,\n  C_PHONE       CHAR(15) NOT NULL,\n  C_ACCTBAL     DECIMAL(15,2)   NOT NULL,\n  C_MKTSEGMENT  CHAR(10) NOT NULL,\n  C_COMMENT     VARCHAR(117) NOT NULL\n)\nDUPLICATE KEY(C_CUSTKEY, C_NAME)\nDISTRIBUTED BY HASH(C_CUSTKEY) BUCKETS 32\nPROPERTIES(\n    "file_cache_ttl_seconds"="300"\n)\n')),(0,r.yg)("p",null,"All newly imported data into this table will be retained in the cache for 300 seconds. Users can modify the TTL time of a table based on their needs. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},'ALTER TABLE customer set ("file_cache_ttl_seconds"="3000");\n')),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"There is a certain delay before the modified TTL value takes effect."),(0,r.yg)("p",{parentName:"admonition"},"For tables that are not set with a TTL strategy upon creation, users can still modify their TTL properties by executing the ALTER statement.")),(0,r.yg)("h3",{id:"cache-warmup-1"},"Cache warmup"),(0,r.yg)("p",null,"The system currently supports three types of cache warmup:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Warm up the cache of compute cluster ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_name1")," with the cached data from compute cluster ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_name0"),".")),(0,r.yg)("p",null,"When the following SQL is executed, ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_name1")," will retrieve the access information from ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_name0")," to recreate a cache as consistent as possible with ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_name0"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"warm up cluster cluster_name1 with cluster cluster_name0\n")),(0,r.yg)("p",null,"View the most frequently accessed tables across all compute clusters."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"show cache hotspot '/';\n+------------------------+-----------------------+----------------------------------------+\n| cluster_name           | total_file_cache_size | top_table_name                         |\n+------------------------+-----------------------+----------------------------------------+\n| cluster_name0          |          751620511367 | regression_test.doris_cache_hotspot    |\n+------------------------+-----------------------+----------------------------------------+\n")),(0,r.yg)("p",null,"View the most frequently accessed partitions within the compute cluster ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_name0"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> show cache hotspot '/cluster_name0';\n+-----------------------------------------------------------+---------------------+--------------------+\n| table_name                                                | last_access_time    | top_partition_name |\n+-----------------------------------------------------------+---------------------+--------------------+\n| regression_test.doris_cache_hotspot                       | 2023-05-29 12:38:02 | p20230529          |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.customer | 2023-06-06 10:56:12 | customer           |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.nation   | 2023-06-06 10:56:12 | nation             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.orders   | 2023-06-06 10:56:12 | orders             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.part     | 2023-06-06 10:56:12 | part               |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.partsupp | 2023-06-06 10:56:12 | partsupp           |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.region   | 2023-06-06 10:56:12 | region             |\n| regression_test_cloud_load_copy_into_tpch_sf1_p1.supplier | 2023-06-06 10:56:12 | supplier           |\n+-----------------------------------------------------------+---------------------+--------------------+\n")),(0,r.yg)("p",null,"View the access information of table ",(0,r.yg)("inlineCode",{parentName:"p"},"regression_test_cloud_load_copy_into_tpch_sf1_p1.customer"),") in ",(0,r.yg)("inlineCode",{parentName:"p"},"cluster_name0"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"show cache hotspot '/cluster_name0/regression_test_cloud_load_copy_into_tpch_sf1_p1.customer';\n+----------------+---------------------+\n| partition_name | last_access_time    |\n+----------------+---------------------+\n| supplier       | 2023-06-06 10:56:12 |\n+----------------+---------------------+\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Warm up the cache of ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_name1")," with data from table ",(0,r.yg)("inlineCode",{parentName:"li"},"customer"),". Execute the following SQL statement to pull all the data of this table from the remote storage to the local cache:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"warm up cluster cluster_name1 with table customer\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Warm up the cache of ",(0,r.yg)("inlineCode",{parentName:"li"},"cluster_name1")," with data from partition ",(0,r.yg)("inlineCode",{parentName:"li"},"p1")," of table ",(0,r.yg)("inlineCode",{parentName:"li"},"customer"),". Execute the following SQL statement to pull all the data of this partition from the remote storage to the local cache:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"warm up cluster cluster_name1 with table customer partition p1\n")),(0,r.yg)("p",null,"All three of the above cache warmup SQL statements will return a ",(0,r.yg)("inlineCode",{parentName:"p"},"JobID")," result. For example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> warm up cluster cloud_warm_up with table test_warm_up;\n+-------+\n| JobId |\n+-------+\n| 13418 |\n+-------+\n1 row in set (0.01 sec)\n")),(0,r.yg)("p",null,"Check the progress of the cache warmup using the following SQL:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"SHOW WARM UP JOB;\nSHOW WARM UP JOB WHERE ID = 13418;\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n| JobId | ClusterName       | Status  | Type  | CreateTime              | FinishBatch | AllBatch | FinishTime |\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n| 13418 | cloud_warm_up     | RUNNING | TABLE | 2023-05-30 20:19:34.059 | 0           | 1        | NULL       |\n+-------+-------------------+---------+-------+-------------------------+-------------+----------+------------+\n1 row in set (0.02 sec)\n")),(0,r.yg)("p",null,"The cache warmup progress can be shown by ",(0,r.yg)("inlineCode",{parentName:"p"},"FinishBatch")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"AllBatch"),". Each batch of data is approximately 10GB in size. Currently, within a single compute cluster, only one cache warmup job can be executed at a time. Users can stop an ongoing cache warmup job if needed."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"mysql> cancel warm up job where id = 13418;\nQuery OK, 0 rows affected (0.02 sec)\n\nmysql> show warm up job where id = 13418;\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n| JobId | ClusterName       | Status    | Type  | CreateTime              | FinishBatch | AllBatch | FinishTime              |\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n| 13418 | cloud_warm_up     | CANCELLED | TABLE | 2023-05-30 20:19:34.059 | 0           | 1        | 2023-05-30 20:27:14.186 |\n+-------+-------------------+-----------+-------+-------------------------+-------------+----------+-------------------------+\n1 row in set (0.00 sec)\n")),(0,r.yg)("h2",{id:"best-practice"},"Best practice"),(0,r.yg)("p",null,"A user has a total data volume of over 3TB, but the available cache capacity is only 1.2TB. Two of the tables are frequently accessed: one is a 200MB dimension table, the other is a 100GB fact table. The latter has new data imported every day and is queried on a daily basis. Additionally, the user has other large tables that are queried from time to time."),(0,r.yg)("p",null,"Under the LRU strategy, if a large table is queried and accessed, its data will replace that of the small table in the cache, causing performance fluctuations. To solve this, the user adopts a TTL strategy, setting the TTL time of the dimension table and fact table to 1 year and 1 day, respectively. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},'ALTER TABLE dimension_table set ("file_cache_ttl_seconds"="31536000");\n\nALTER TABLE fact_table set ("file_cache_ttl_seconds"="86400");\n')),(0,r.yg)("p",null,"For the dimension table, due to its small data volume and infrequent data changes, the user sets a TTL time of up to 1 year to ensure that its data can be accessed quickly within a long time. For the fact table, the user needs to perform a daily table backup and then a full import, so its TTL time is set to 1 day."))}m.isMDXComponent=!0}}]);