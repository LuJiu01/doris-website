"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[10339],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>h});var o=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},y=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,h=d["".concat(l,".").concat(y)]||d[y]||p[y]||i;return t?o.createElement(h,r(r({ref:n},u),{},{components:t})):o.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=y;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}y.displayName="MDXCreateElement"},618922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(58168),a=(t(296540),t(15680));const i={title:"Window Functions Overview",language:"en"},r=void 0,s={unversionedId:"sql-manual/sql-functions/window-functions/window-function",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function",title:"Window Functions Overview",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Window Functions Overview",language:"en"},sidebar:"docs",previous:{title:"QUERY",permalink:"/docs/2.1/sql-manual/sql-functions/table-functions/query"},next:{title:"WINDOW_FUNCTION_SUM",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-sum"}},l={},c=[{value:"WINDOW FUNCTION",id:"window-function",level:2},{value:"description",id:"description",level:3},{value:"Function",id:"function",level:4},{value:"PARTITION BY clause",id:"partition-by-clause",level:4},{value:"ORDER BY clause",id:"order-by-clause",level:4},{value:"Window clause",id:"window-clause",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"window-function"},"WINDOW FUNCTION"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("p",null,"Analytical functions(windown function) are a special class of built-in functions. Similar to aggregate functions, analytic functions also perform calculations on multiple input rows to obtain a data value. The difference is that the analytic function processes the input data within a specific window, rather than grouping calculations by group by. The data within each window can be sorted and grouped using the over() clause. The analytic function computes a single value for each row of the result set, rather than one value per group by grouping. This flexible approach allows the user to add additional columns to the select clause, giving the user more opportunities to reorganize and filter the result set. Analytic functions can only appear in select lists and in the outermost order by clause. During the query process, the analytical function will take effect at the end, that is, after the join, where and group by operations are performed. Analytical functions are often used in financial and scientific computing to analyze trends, calculate outliers, and perform bucket analysis on large amounts of data."),(0,a.yg)("p",null,"The syntax of the analytic function:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"function(args) OVER(partition_by_clause order_by_clause [window_clause])    \npartition_by_clause ::= PARTITION BY expr [, expr ...]    \norder_by_clause ::= ORDER BY expr [ASC | DESC] [, expr [ASC | DESC] ...]\n")),(0,a.yg)("h4",{id:"function"},"Function"),(0,a.yg)("p",null,"Support Functions: AVG(), COUNT(), DENSE_RANK(), FIRST_VALUE(), LAG(), LAST_VALUE(), LEAD(), MAX(), MIN(), RANK(), ROW_NUMBER(), SUM()"),(0,a.yg)("h4",{id:"partition-by-clause"},"PARTITION BY clause"),(0,a.yg)("p",null,"The Partition By clause is similar to Group By. It groups the input rows according to the specified column or columns, and rows with the same value will be grouped together."),(0,a.yg)("h4",{id:"order-by-clause"},"ORDER BY clause"),(0,a.yg)("p",null,"The Order By clause is basically the same as the outer Order By. It defines the order in which the input rows are sorted, and if Partition By is specified, Order By defines the order within each Partition grouping. The only difference from the outer Order By is that the Order By n (n is a positive integer) in the OVER clause is equivalent to doing nothing, while the outer Order By n means sorting according to the nth column."),(0,a.yg)("p",null,"Example:"),(0,a.yg)("p",null,"This example shows adding an id column to the select list with values 1, 2, 3, etc., sorted by the date_and_time column in the events table."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT   \nrow_number() OVER (ORDER BY date_and_time) AS id,   \nc1, c2, c3, c4   \nFROM events;\n")),(0,a.yg)("h4",{id:"window-clause"},"Window clause"),(0,a.yg)("p",null,"The Window clause is used to specify an operation range for the analytical function, the current row is the criterion, and several rows before and after are used as the object of the analytical function operation. The methods supported by the Window clause are: AVG(), COUNT(), FIRST_VALUE(), LAST_VALUE() and SUM(). For MAX() and MIN(), the window clause can specify the starting range UNBOUNDED PRECEDING"),(0,a.yg)("p",null,"syntax:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ROWS BETWEEN [ { m | UNBOUNDED } PRECEDING | CURRENT ROW] [ AND [CURRENT ROW | { UNBOUNDED | n } FOLLOWING] ]\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("p",null,"Suppose we have the following stock data, the stock symbol is JDR, and the closing price is the closing price of each day."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"create table stock_ticker (stock_symbol string, closing_price decimal(8,2), closing_date timestamp);    \n...load some data...    \nselect * from stock_ticker order by stock_symbol, closing_date\n | stock_symbol | closing_price | closing_date        |\n |--------------|---------------|---------------------|\n | JDR          | 12.86         | 2014-10-02 00:00:00 |\n | JDR          | 12.89         | 2014-10-03 00:00:00 |\n | JDR          | 12.94         | 2014-10-04 00:00:00 |\n | JDR          | 12.55         | 2014-10-05 00:00:00 |\n | JDR          | 14.03         | 2014-10-06 00:00:00 |\n | JDR          | 14.75         | 2014-10-07 00:00:00 |\n | JDR          | 13.98         | 2014-10-08 00:00:00 |\n")),(0,a.yg)("p",null,"This query uses the analytic function to generate the column moving_average, whose value is the 3-day average price of the stock, that is, the three-day average price of the previous day, the current day, and the next day. The first day has no value for the previous day, and the last day does not have the value for the next day, so these two lines only calculate the average of the two days. Partition By does not play a role here, because all the data are JDR data, but if there is other stock information, Partition By will ensure that the analysis function value acts within this Partition."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select stock_symbol, closing_date, closing_price,    \navg(closing_price) over (partition by stock_symbol order by closing_date    \nrows between 1 preceding and 1 following) as moving_average    \nfrom stock_ticker;\n | stock_symbol | closing_date        | closing_price | moving_average |\n |--------------|---------------------|---------------|----------------|\n | JDR          | 2014-10-02 00:00:00 | 12.86         | 12.87          |\n | JDR          | 2014-10-03 00:00:00 | 12.89         | 12.89          |\n | JDR          | 2014-10-04 00:00:00 | 12.94         | 12.79          |\n | JDR          | 2014-10-05 00:00:00 | 12.55         | 13.17          |\n | JDR          | 2014-10-06 00:00:00 | 14.03         | 13.77          |\n | JDR          | 2014-10-07 00:00:00 | 14.75         | 14.25          |\n | JDR          | 2014-10-08 00:00:00 | 13.98         | 14.36          |\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION\n")))}p.isMDXComponent=!0}}]);