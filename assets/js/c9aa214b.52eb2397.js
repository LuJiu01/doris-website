"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[905876],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>g});var n=a(296540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),y=i,g=d["".concat(p,".").concat(y)]||d[y]||c[y]||r;return a?n.createElement(g,l(l({ref:t},m),{},{components:a})):n.createElement(g,l({ref:t},m))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},486626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(58168),i=(a(296540),a(15680));const r={title:"MYSQL-LOAD",language:"en"},l=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",id:"version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",title:"MYSQL-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/MYSQL-LOAD",draft:!1,tags:[],version:"1.2",frontMatter:{title:"MYSQL-LOAD",language:"en"},sidebar:"docs",previous:{title:"STREAM-LOAD",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STREAM-LOAD"},next:{title:"INSERT",permalink:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/INSERT"}},p={},s=[{value:"MYSQL-LOAD",id:"mysql-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"PROPERTIES",id:"properties",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],m={toc:s},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"mysql-load"},"MYSQL-LOAD"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("version",{since:"dev"},"MYSQL LOAD"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"mysql-load: Import local data using the MySql client"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"LOAD DATA\n[LOCAL]\nINFILE 'file_name'\nINTO TABLE tbl_name\n[PARTITION (partition_name [, partition_name] ...)]\n[COLUMNS TERMINATED BY 'string']\n[LINES TERMINATED BY 'string']\n[IGNORE number {LINES | ROWS}]\n[(col_name_or_user_var [, col_name_or_user_var] ...)]\n[SET (col_name={expr | DEFAULT} [, col_name={expr | DEFAULT}] ...)]\n[PROPERTIES (key1 = value1 [, key2=value2]) ]\n")),(0,i.yg)("p",null,"This statement is used to import data to the specified table. Unlike normal Load, this import method is a synchronous import."),(0,i.yg)("p",null,"This import method can still guarantee the atomicity of a batch of import tasks, either all data imports are successful or all fail."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"MySQL Load starts with the syntax ",(0,i.yg)("inlineCode",{parentName:"li"},"LOAD DATA"),", without specifying ",(0,i.yg)("inlineCode",{parentName:"li"},"LABEL")),(0,i.yg)("li",{parentName:"ol"},"Specify  ",(0,i.yg)("inlineCode",{parentName:"li"},"LOCAL")," to read client side files. Not specified to read FE server side local files. Server side load was disabled by default. It can be enabled by setting a secure path in FE configuration ",(0,i.yg)("inlineCode",{parentName:"li"},"mysql_load_server_secure_path")),(0,i.yg)("li",{parentName:"ol"},"The local fill path will be filled after ",(0,i.yg)("inlineCode",{parentName:"li"},"INFILE"),", which can be a relative path or an absolute path. Currently only a single file is supported, and multiple files are not supported"),(0,i.yg)("li",{parentName:"ol"},"The table name after ",(0,i.yg)("inlineCode",{parentName:"li"},"INTO TABLE")," can specify the database name, as shown in the case. It can also be omitted, and the database where the current user is located will be used."),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"PARTITION")," syntax supports specified partition to import"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"COLUMNS TERMINATED BY")," specifies the column separator"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"LINES TERMINATED BY")," specifies the line separator"),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"IGNORE num LINES")," The user skips the header of the CSV and can skip any number of lines. This syntax can also be replaced by'IGNORE num ROWS '"),(0,i.yg)("li",{parentName:"ol"},"Column mapping syntax, please refer to the column mapping chapter of ",(0,i.yg)("a",{parentName:"li",href:"../../../../data-operate/import/import-way/mysql-load-manual.md"},"Imported Data Transformation")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("inlineCode",{parentName:"li"},"PROPERTIES")," parameter configuration, see below for details")),(0,i.yg)("h3",{id:"properties"},"PROPERTIES"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"max_filter_ratio\uff1aThe maximum tolerable data ratio that can be filtered (for reasons such as data irregularity). Zero tolerance by default. Data irregularities do not include rows filtered out by where conditions.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"timeout: Specify the import timeout. in seconds. The default is 600 seconds. The setting range is from 1 second to 259200 seconds.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"strict_mode: The user specifies whether to enable strict mode for this import. The default is off.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"timezone: Specify the time zone used for this import. The default is Dongba District. This parameter affects the results of all time zone-related functions involved in the import.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"exec_mem_limit: Import memory limit. Default is 2GB. The unit is bytes.")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"trim_double_quotes: Boolean type, The default value is false. True means that the outermost double quotes of each field in the load file are trimmed."))),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data from the client side local file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," into the table ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),". Specify a timeout of 100 seconds"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data from the server side local file ",(0,i.yg)("inlineCode",{parentName:"p"},"/root/testData")," (set FE config ",(0,i.yg)("inlineCode",{parentName:"p"},"mysql_load_server_secure_path")," to be ",(0,i.yg)("inlineCode",{parentName:"p"},"root")," already) into the table ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),". Specify a timeout of 100 seconds"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA\nINFILE \'/root/testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("timeout"="100")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data from client side local file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," into table ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),", allowing 20% error rate"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data from the client side local file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," into the table ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),", allowing a 20% error rate and specifying the column names of the file"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\n(k2, k1, v1)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data in the local file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," into the p1, p2 partitions in the table of ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),", allowing a 20% error rate."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nPROPERTIES ("max_filter_ratio"="0.2")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data in the CSV file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," with a local row delimiter of ",(0,i.yg)("inlineCode",{parentName:"p"},"0102")," and a column delimiter of ",(0,i.yg)("inlineCode",{parentName:"p"},"0304")," into the table ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nCOLUMNS TERMINATED BY '0304'\nLINES TERMINATED BY '0102'\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import the data from the local file ",(0,i.yg)("inlineCode",{parentName:"p"},"testData")," into the p1, p2 partitions in the table of ",(0,i.yg)("inlineCode",{parentName:"p"},"testTbl")," in the database ",(0,i.yg)("inlineCode",{parentName:"p"},"testDb")," and skip the first 3 lines."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"LOAD DATA LOCAL\nINFILE 'testData'\nINTO TABLE testDb.testTbl\nPARTITION (p1, p2)\nIGNORE 1 LINES\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data for strict schema filtering and set the time zone to Africa/Abidjan"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("strict_mode"="true", "timezone"="Africa/Abidjan")\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Import data is limited to 10GB of import memory and timed out in 10 minutes"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD DATA LOCAL\nINFILE \'testData\'\nINTO TABLE testDb.testTbl\nPROPERTIES ("exec_mem_limit"="10737418240", "timeout"="600")\n')))),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MYSQL, LOAD\n")))}c.isMDXComponent=!0}}]);