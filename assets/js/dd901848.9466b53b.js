"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[712763],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var n=t(296540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,u=m["".concat(o,".").concat(d)]||m[d]||g[d]||s;return t?n.createElement(u,l(l({ref:a},c),{},{components:t})):n.createElement(u,l({ref:a},c))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},140730:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(296540),t(15680));const s={title:"GRANT",language:"en"},l=void 0,i={unversionedId:"sql-manual/sql-statements/Account-Management-Statements/GRANT",id:"version-3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-statements/Account-Management-Statements",slug:"/sql-manual/sql-statements/Account-Management-Statements/GRANT",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"3.0",frontMatter:{title:"GRANT",language:"en"},sidebar:"docs",previous:{title:"LDAP",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/LDAP"},next:{title:"REVOKE",permalink:"/docs/sql-manual/sql-statements/Account-Management-Statements/REVOKE"}},o={},p=[{value:"GRANT",id:"grant",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"grant"},"GRANT"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"GRANT"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"The GRANT command has the following functions:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Grant the specified permissions to a user or role."),(0,r.yg)("li",{parentName:"ol"},"Grant the specified role to a user.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Note that."),(0,r.yg)("p",{parentName:"blockquote"},'"Grant specified roles to user" is supported in versions 2.0 and later')),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n\nGRANT role_list TO user_identity\n")),(0,r.yg)("p",null,"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity ","[ROLE role_name]"),(0,r.yg)("p",null,"privilege_list is a list of privileges to be granted, separated by commas. Currently Doris supports the following permissions:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"NODE_PRIV: Cluster node operation permissions, including node online and offline operations. User who has NODE_PRIV and GRANT_PRIV permission, can grant NODE_PRIV to other users.\nADMIN_PRIV: All privileges except NODE_PRIV.\nGRANT_PRIV: Privilege for operation privileges. Including creating and deleting users, roles, authorization and revocation, setting passwords, etc.\nSELECT_PRIV: read permission on the specified database or table\nLOAD_PRIV: Import privileges on the specified database or table\nALTER_PRIV: Schema change permission for the specified database or table\nCREATE_PRIV: Create permission on the specified database or table\nDROP_PRIV: drop privilege on the specified database or table\nUSAGE_PRIV: access to the specified resource\nSHOW_VIEW_PRIV: View permission to `view` creation statements (starting from version 2.0.3, 'SELECT_PRIV' and 'LOAD_PRIV' permissions cannot be 'SHOW CREATE TABLE view_name', has one of `CREATE_PRIV`\uff0c`ALTER_PRIV`\uff0c`DROP_PRIV`\uff0c`SHOW_VIEW_PRIV` can `SHOW CREATE TABLE view_name`) \n\nALL and READ_WRITE in legacy permissions will be converted to: SELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV;\nREAD_ONLY is converted to SELECT_PRIV.\n")),(0,r.yg)("p",null,"Permission classification:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"1. Node Privilege: NODE_PRIV\n2. database table permissions: SELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV\n3. Resource  and workload groups Privilege: USAGE_PRIV\n")),(0,r.yg)("p",null,"Priv_level supports the following four forms:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"1. *.*.* permissions can be applied to all catalogs, all databases and all tables in them\n2. catalog_name.*.* permissions can be applied to all databases and all tables in them\n3. catalog_name.db.* permissions can be applied to all tables under the specified database\n4. catalog_name.db.tbl permission can be applied to the specified table under the specified database\n\nThe catalog or database, table specified here may be not exist.\n")),(0,r.yg)("p",null,"resource_name supports the following two forms:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"1. * Permissions apply to all resources\n2. The resource permission applies to the specified resource\n\nThe resource specified here can be a non-existing resource. In addition, please distinguish the resources here from external tables, and use catalog as an alternative if you use external tables.\n")),(0,r.yg)("p",null,"workload",(0,r.yg)("em",{parentName:"p"},"group_name specifies the workload group name and supports ",(0,r.yg)("inlineCode",{parentName:"em"},"%")," and `"),(0,r.yg)("inlineCode",{parentName:"p"},"match characters,"),"%",(0,r.yg)("inlineCode",{parentName:"p"},"can match any string and"),"_` matches any single character."),(0,r.yg)("p",null,"user_identity:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"The user_identity syntax here is the same as CREATE USER. And must be a user_identity created with CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the effective time of the authority may be delayed by about 1 minute.\n\nYou can also assign permissions to the specified ROLE, if the specified ROLE does not exist, it will be created automatically.\n")),(0,r.yg)("p",null,"role_list is the list of roles to be assigned, separated by commas,the specified role must exist."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant permissions to all catalog and databases and tables to the user"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant permissions to the specified database table to the user"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant permissions to the specified database table to the role"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant access to all resources to users"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant the user permission to use the specified resource"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant access to specified resources to roles"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant the specified role to a user"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT 'role1','role2' TO 'jack'@'%';\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Grant the specified workload group 'g1' to user jack"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%'.\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"match all workload groups granted to user jack"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%'.\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"grant the workload group 'g1' to the role my_role"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role'.\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Allow jack to view the creation statement of view1 under db1"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"GRANT\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}g.isMDXComponent=!0}}]);