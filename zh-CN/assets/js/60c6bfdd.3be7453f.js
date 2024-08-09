"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[646734],{15680:(e,n,i)=>{i.d(n,{xA:()=>s,yg:()=>m});var t=i(296540);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function p(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=t.createContext({}),u=function(e){var n=t.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=u(e.components);return t.createElement(o.Provider,{value:n},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),g=u(i),y=r,m=g["".concat(o,".").concat(y)]||g[y]||c[y]||l;return i?t.createElement(m,a(a({ref:n},s),{},{components:i})):t.createElement(m,a({ref:n},s))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=y;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[g]="string"==typeof e?e:r,a[1]=p;for(var u=2;u<l;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}y.displayName="MDXCreateElement"},990356:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=i(58168),r=(i(296540),i(15680));const l={title:"Pipeline \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},a=void 0,p={unversionedId:"query/pipeline/pipeline-execution-engine",id:"version-2.1/query/pipeline/pipeline-execution-engine",title:"Pipeline \u6267\u884c\u5f15\u64ce",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query/pipeline/pipeline-execution-engine.md",sourceDirName:"query/pipeline",slug:"/query/pipeline/pipeline-execution-engine",permalink:"/zh-CN/docs/2.1/query/pipeline/pipeline-execution-engine",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Pipeline \u6267\u884c\u5f15\u64ce",language:"zh-CN",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"\u7edf\u8ba1\u4fe1\u606f",permalink:"/zh-CN/docs/2.1/query/nereids/statistics"},next:{title:"PipelineX \u6267\u884c\u5f15\u64ce",permalink:"/zh-CN/docs/2.1/query/pipeline/pipeline-x-execution-engine"}},o={},u=[{value:"\u539f\u7406",id:"\u539f\u7406",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:3},{value:"\u5bfc\u5165",id:"\u5bfc\u5165",level:3}],s={toc:u},g="wrapper";function c(e){let{components:n,...l}=e;return(0,r.yg)(g,(0,t.A)({},s,l,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"pipeline-\u6267\u884c\u5f15\u64ce"},"Pipeline \u6267\u884c\u5f15\u64ce"),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Pipeline \u6267\u884c\u5f15\u64ce \u662f Doris \u5728 2.0 \u7248\u672c\u52a0\u5165\u7684\u5b9e\u9a8c\u6027\u529f\u80fd\u3002")),(0,r.yg)("p",null,"Pipeline \u6267\u884c\u5f15\u64ce\u7684\u4e3b\u8981\u76ee\u6807\u662f\u4e3a\u4e86\u66ff\u6362\u5f53\u524d Doris \u7684\u706b\u5c71\u6a21\u578b\u7684\u6267\u884c\u5f15\u64ce\uff0c\u5145\u5206\u91ca\u653e\u591a\u6838 CPU \u7684\u8ba1\u7b97\u80fd\u529b\uff0c\u5e76\u5bf9 Doris \u7684\u67e5\u8be2\u7ebf\u7a0b\u7684\u6570\u76ee\u8fdb\u884c\u9650\u5236\uff0c\u89e3\u51b3 Doris \u7684\u6267\u884c\u7ebf\u7a0b\u81a8\u80c0\u7684\u95ee\u9898\u3002"),(0,r.yg)("p",null,"\u5b83\u7684\u5177\u4f53\u8bbe\u8ba1\u3001\u5b9e\u73b0\u548c\u6548\u679c\u53ef\u4ee5\u53c2\u9605 ","[DSIP-027]","(",(0,r.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),")\u3002"),(0,r.yg)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),(0,r.yg)("p",null,"\u5f53\u524d\u7684 Doris \u7684 SQL \u6267\u884c\u5f15\u64ce\u662f\u57fa\u4e8e\u4f20\u7edf\u7684\u706b\u5c71\u6a21\u578b\u8fdb\u884c\u8bbe\u8ba1\uff0c\u5728\u5355\u673a\u591a\u6838\u7684\u573a\u666f\u4e0b\u5b58\u5728\u4e0b\u9762\u7684\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u65e0\u6cd5\u5145\u5206\u5229\u7528\u591a\u6838\u8ba1\u7b97\u80fd\u529b\uff0c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u591a\u6570\u573a\u666f\u4e0b\u8fdb\u884c\u6027\u80fd\u8c03\u4f18\u65f6\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u5e76\u884c\u5ea6"),"\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u51e0\u4e4e\u5f88\u96be\u8fdb\u884c\u8bbe\u5b9a\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5355\u673a\u67e5\u8be2\u7684\u6bcf\u4e2a Instance \u5bf9\u5e94\u7ebf\u7a0b\u6c60\u7684\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fd9\u4f1a\u5e26\u6765\u989d\u5916\u7684\u4e24\u4e2a\u95ee\u9898\u3002"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u7ebf\u7a0b\u6c60\u4e00\u65e6\u6253\u6ee1\u3002",(0,r.yg)("strong",{parentName:"li"},"Doris \u7684\u67e5\u8be2\u5f15\u64ce\u4f1a\u8fdb\u5165\u5047\u6027\u6b7b\u9501"),"\uff0c\u5bf9\u540e\u7eed\u7684\u67e5\u8be2\u65e0\u6cd5\u54cd\u5e94\u3002",(0,r.yg)("strong",{parentName:"li"},"\u540c\u65f6\u6709\u4e00\u5b9a\u6982\u7387\u8fdb\u5165\u903b\u8f91\u6b7b\u9501"),"\u7684\u60c5\u51b5\uff1a\u6bd4\u5982\u6240\u6709\u7684\u7ebf\u7a0b\u90fd\u5728\u6267\u884c\u4e00\u4e2a Instance \u7684 Probe \u4efb\u52a1\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u963b\u585e\u7684\u7b97\u5b50\u4f1a\u5360\u7528\u7ebf\u7a0b\u8d44\u6e90\uff0c",(0,r.yg)("strong",{parentName:"li"},"\u800c\u963b\u585e\u7684\u7ebf\u7a0b\u8d44\u6e90\u65e0\u6cd5\u8ba9\u6e21\u7ed9\u80fd\u591f\u8c03\u5ea6\u7684 Instance"),"\uff0c\u6574\u4f53\u8d44\u6e90\u5229\u7528\u7387\u4e0a\u4e0d\u53bb\u3002"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u963b\u585e\u7b97\u5b50\u4f9d\u8d56\u64cd\u4f5c\u7cfb\u7edf\u7684\u7ebf\u7a0b\u8c03\u5ea6\u673a\u5236\uff0c",(0,r.yg)("strong",{parentName:"p"},"\u7ebf\u7a0b\u5207\u6362\u5f00\u9500\u8f83\u5927\uff08\u5c24\u5176\u5728\u7cfb\u7edf\u6df7\u5e03\u7684\u573a\u666f\u4e2d\uff09")))),(0,r.yg)("p",null,"\u7531\u6b64\u5e26\u6765\u7684\u4e00\u7cfb\u5217\u95ee\u9898\u9a71\u52a8 Doris \u9700\u8981\u5b9e\u73b0\u9002\u5e94\u73b0\u4ee3\u591a\u6838 CPU \u7684\u4f53\u7cfb\u7ed3\u6784\u7684\u6267\u884c\u5f15\u64ce\u3002"),(0,r.yg)("p",null,"\u800c\u5982\u4e0b\u56fe\u6240\u793a\uff08\u5f15\u7528\u81ea","[Push versus pull-based loop fusion in query engines]","(",(0,r.yg)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cPipeline \u6267\u884c\u5f15\u64ce\u57fa\u4e8e\u591a\u6838 CPU \u7684\u7279\u70b9\uff0c\u91cd\u65b0\u8bbe\u8ba1\u7531\u6570\u636e\u9a71\u52a8\u7684\u6267\u884c\u5f15\u64ce\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"image.png",src:i(340524).A,width:"2560",height:"1060"})),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5c06\u4f20\u7edf Pull \u62c9\u53d6\u7684\u903b\u8f91\u9a71\u52a8\u7684\u6267\u884c\u6d41\u7a0b\u6539\u9020\u4e3a Push \u6a21\u578b\u7684\u6570\u636e\u9a71\u52a8\u7684\u6267\u884c\u5f15\u64ce"),(0,r.yg)("li",{parentName:"ol"},"\u963b\u585e\u64cd\u4f5c\u5f02\u6b65\u5316\uff0c\u51cf\u5c11\u4e86\u7ebf\u7a0b\u5207\u6362\uff0c\u7ebf\u7a0b\u963b\u585e\u5bfc\u81f4\u7684\u6267\u884c\u5f00\u9500\uff0c\u5bf9\u4e8e CPU \u7684\u5229\u7528\u66f4\u4e3a\u9ad8\u6548"),(0,r.yg)("li",{parentName:"ol"},"\u63a7\u5236\u4e86\u6267\u884c\u7ebf\u7a0b\u7684\u6570\u76ee\uff0c\u901a\u8fc7\u65f6\u95f4\u7247\u7684\u5207\u6362\u7684\u63a7\u5236\uff0c\u5728\u6df7\u5408\u8d1f\u8f7d\u7684\u573a\u666f\u4e2d\uff0c\u51cf\u5c11\u5927\u67e5\u8be2\u5bf9\u4e8e\u5c0f\u67e5\u8be2\u7684\u8d44\u6e90\u6324\u5360\u95ee\u9898")),(0,r.yg)("p",null,"\u4ece\u800c\u63d0\u9ad8\u4e86 CPU \u5728\u6df7\u5408\u8d1f\u8f7d SQL \u4e0a\u6267\u884c\u65f6\u7684\u6548\u7387\uff0c\u63d0\u5347\u4e86 SQL \u67e5\u8be2\u7684\u6027\u80fd\u3002"),(0,r.yg)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.yg)("h3",{id:"\u67e5\u8be2"},"\u67e5\u8be2"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"enable_pipeline_engine")),(0,r.yg)("p",null,"\u5c06 session \u53d8\u91cf ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine")," \u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219 BE \u5728\u8fdb\u884c\u67e5\u8be2\u6267\u884c\u65f6\u5c06\u4f1a\u4f7f\u7528 Pipeline \u6267\u884c\u5f15\u64ce\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_pipeline_engine = true;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"parallel_pipeline_task_num")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," \u4ee3\u8868\u4e86 SQL \u67e5\u8be2\u8fdb\u884c\u67e5\u8be2\u5e76\u53d1\u7684 Pipeline Task \u6570\u76ee\u3002Doris \u9ed8\u8ba4\u7684\u914d\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),"\uff0c\u6b64\u65f6 Pipeline Task \u6570\u76ee\u5c06\u81ea\u52a8\u8bbe\u7f6e\u4e3a\u5f53\u524d\u96c6\u7fa4\u673a\u5668\u4e2d\u6700\u5c11\u7684 CPU \u6570\u91cf\u7684\u4e00\u534a\u3002\u7528\u6237\u4e5f\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u60c5\u51b5\u8fdb\u884c\u8c03\u6574\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"set parallel_pipeline_task_num = 0;\n")),(0,r.yg)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,r.yg)("inlineCode",{parentName:"p"},"max_instance_num")," \u6765\u9650\u5236\u81ea\u52a8\u8bbe\u7f6e\u7684\u5e76\u53d1\u6570 (\u9ed8\u8ba4\u4e3a 64)"),(0,r.yg)("h3",{id:"\u5bfc\u5165"},"\u5bfc\u5165"),(0,r.yg)("p",null,"\u5bfc\u5165\u7684\u5f15\u64ce\u9009\u62e9\u8bbe\u7f6e\uff0c\u8be6\u89c1",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/import/load-manual"},"\u5bfc\u5165"),"\u6587\u6863\u3002"))}c.isMDXComponent=!0},340524:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pipeline-execution-engine-85f911b7c7e47dc429f39213654957d5.png"}}]);