"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[906551],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(y,o(o({ref:t},c),{},{components:n})):a.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},920752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(58168),i=(n(296540),n(15680));const r={title:"DELETE",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",id:"version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",title:"DELETE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE",draft:!1,tags:[],version:"2.0",frontMatter:{title:"DELETE",language:"en"},sidebar:"docs",previous:{title:"SELECT",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT"},next:{title:"UPDATE",permalink:"/docs/2.0/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"}},s={},p=[{value:"DELETE",id:"delete",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"delete"},"DELETE"),(0,i.yg)("h3",{id:"name"},"Name"),(0,i.yg)("p",null,"DELETE"),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("p",null,"This statement is used to conditionally delete data in the specified table (base index) partition."),(0,i.yg)("p",null,"This operation will also delete the data of the rollup index related to this base index."),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,"Syntax 1: This syntax can only specify filter predicates"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-SQL"},"DELETE FROM table_name [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\nWHERE\ncolumn_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n")),(0,i.yg)("version",{since:"dev"},(0,i.yg)("p",null,"Syntax 2\uff1aThis syntax can only used on UNIQUE KEY model"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM table_name\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"))),(0,i.yg)("h4",{id:"required-parameters"},"Required Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"table_name: Specifies the table from which rows are removed."),(0,i.yg)("li",{parentName:"ul"},"column_name: column belong to table_name"),(0,i.yg)("li",{parentName:"ul"},"op: Logical comparison operator, The optional types of op include: =, >, <, >=, <=, !=, in, not in"),(0,i.yg)("li",{parentName:"ul"},"value | value_list: value or value list used for logial comparison")),(0,i.yg)("version",{since:"dev"},(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"WHERE condition: Specifies a condition to use to select rows for removal"))),(0,i.yg)("h4",{id:"optional-parameters"},"Optional Parameters"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"PARTITION partition_name | PARTITIONS (partition_name ","[, partition_name]","): Specifies the partition or partitions to select rows for removal")),(0,i.yg)("version",{since:"dev"},(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"table_alias: alias of table"),(0,i.yg)("li",{parentName:"ul"},"USING additional_tables: If you need to refer to additional tables in the WHERE clause to help identify the rows to be removed, then specify those table names in the USING clause. You can also use the USING clause to specify subqueries that identify the rows to be removed."))),(0,i.yg)("h4",{id:"note"},"Note"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Only conditions on the key column can be specified when using AGGREGATE (UNIQUE) model."),(0,i.yg)("li",{parentName:"ol"},"When the selected key column does not exist in a rollup, delete cannot be performed."),(0,i.yg)("li",{parentName:"ol"},'Wheny you use syntax 1, conditions can only have an "and" relationship. If you want to achieve an "or" relationship, you need to write the conditions in two DELETE statements.'),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("version",{since:"1.2",type:"inline"}," In syntax 1, if it is a partitioned table, you can specify a partition. If not specified, Doris will infer partition from the given conditions. In two cases, Doris cannot infer the partition from conditions: 1) the conditions do not contain partition columns; 2) The operator of the partition column is not in. When a partition table does not specify the partition, or the partition cannot be inferred from the conditions, the session variable delete_without_partition needs to be true to make delete statement be applied to all partitions.")),(0,i.yg)("li",{parentName:"ol"},"This statement may reduce query efficiency for a period of time after execution. The degree of impact depends on the number of delete conditions specified in the statement. The more conditions you specify, the greater the impact.")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Delete the data row whose k1 column value is 3 in my_table partition p1"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM my_table PARTITION p1\n    WHERE k1 = 3;\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITION p1\nWHERE k1 >= 3 AND k2 = "abc";\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},'Delete the data rows where the value of column k1 is greater than or equal to 3 and the value of column k2 is "abc" in my_table partition p1, p2'),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},'DELETE FROM my_table PARTITIONS (p1, p2)\nWHERE k1 >= 3 AND k2 = "abc";\n')))),(0,i.yg)("version",{since:"dev"},(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"use the result of ",(0,i.yg)("inlineCode",{parentName:"p"},"t2")," join ",(0,i.yg)("inlineCode",{parentName:"p"},"t3")," to romve rows from ",(0,i.yg)("inlineCode",{parentName:"p"},"t1"),",delete table only support unique key model"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"-- create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- remove rows from t1\nDELETE FROM t1\n  USING t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,i.yg)("p",{parentName:"li"},"the expect result is only remove the row where id = 1 in table t1"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n"))))),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"DELETE\n")),(0,i.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);