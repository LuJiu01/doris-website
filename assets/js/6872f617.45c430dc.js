"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[590386],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,u=c["".concat(p,".").concat(m)]||c[m]||g[m]||o;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},533370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const o={title:"Deploying with Docker",language:"en"},l=void 0,i={unversionedId:"install/cluster-deployment/run-docker-cluster",id:"install/cluster-deployment/run-docker-cluster",title:"Deploying with Docker",description:"\x3c!--",source:"@site/docs/install/cluster-deployment/run-docker-cluster.md",sourceDirName:"install/cluster-deployment",slug:"/install/cluster-deployment/run-docker-cluster",permalink:"/docs/dev/install/cluster-deployment/run-docker-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"Deploying with Docker",language:"en"},sidebar:"docs",previous:{title:"Manual Deployment",permalink:"/docs/dev/install/cluster-deployment/standard-deployment"},next:{title:"Cluster Environment Requirements",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/install-env"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Build image",id:"build-image",level:2},{value:"Preparation",id:"preparation",level:3},{value:"<strong>Build</strong> <strong>FE</strong> <strong>Image</strong>",id:"build-fe-image",level:3},{value:"Build BE image",id:"build-be-image",level:3},{value:"Push the image to DockerHub or a private repository",id:"push-the-image-to-dockerhub-or-a-private-repository",level:3},{value:"Deploy Docker cluster",id:"deploy-docker-cluster",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Docker Run command",id:"docker-run-command",level:4},{value:"Docker Compose scripte",id:"docker-compose-scripte",level:4},{value:"Deploy Doris Docker",id:"deploy-doris-docker",level:3}],d={toc:s},c="wrapper";function g(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This guide is about how to create a running image of Apache Doris using a Dockerfile. It allows for the quick pulling of an Apache Doris image to create and run a cluster, either with container orchestration tools or for a quick test."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Overview")),(0,r.yg)("p",null,"Prepare the build machine before creating the Docker image. The platform architecture of this machine determines the platform architecture for which the Docker image will be applicable. For example, if you use an X86_64 machine, you should download the X86_64 Doris binary program, because the resulting image will only run on X86_64 platforms. The same applies to ARM64 platforms."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hardware")),(0,r.yg)("p",null,"Recommended configuration: 4 cores, 16GB memory."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Software")),(0,r.yg)("p",null,"Docker version: 20.10 or later."),(0,r.yg)("h2",{id:"build-image"},"Build image"),(0,r.yg)("h3",{id:"preparation"},"Preparation"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Dockerfile script writing")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Choose a Docker Hub-certified OpenJDK official image as the base parent image. The recommended base parent image is: openjdk:8u342-jdk (JDK 1.8 version)."),(0,r.yg)("li",{parentName:"ul"},"Use embed scripts for FE startup, multi-FE registration, FE status checks, BE startup, BE registration in FE, and BE status checks."),(0,r.yg)("li",{parentName:"ul"},"Avoid using the ",(0,r.yg)("inlineCode",{parentName:"li"},"--daemon")," option to start the application within Docker, as it may cause issues during deployment with orchestration tools like Kubernetes (K8s).")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Methods to build")),(0,r.yg)("p",null,"About the Dockerfile script used for compiling the Docker image, there are two ways to load the Apache Doris binary package:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Use ",(0,r.yg)("inlineCode",{parentName:"li"},"wget")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"curl")," commands to download the package during compilation and then complete the Docker Build process."),(0,r.yg)("li",{parentName:"ul"},"Pre-download the binary package to the build directory and load it into the Docker Build process using the ",(0,r.yg)("inlineCode",{parentName:"li"},"ADD")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"COPY")," command.")),(0,r.yg)("p",null,"The former method produces a Docker image of smaller size, but if the build fails, the download operation may be repeated, leading to longer build times. The latter method is suitable for environments with unstable network conditions. Here, we will provide an example using the second method."),(0,r.yg)("h3",{id:"build-fe-image"},(0,r.yg)("strong",{parentName:"h3"},"Build")," ",(0,r.yg)("strong",{parentName:"h3"},"FE")," ",(0,r.yg)("strong",{parentName:"h3"},"Image")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Environment directory for building the FE image:")),(0,r.yg)("p",null,"The build environment directory is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"\u2514\u2500\u2500 docker-build                                    // Root directory \n    \u2514\u2500\u2500 fe                                          // FE directory\n        \u251c\u2500\u2500 dockerfile                              // Dockerfile script\n        \u2514\u2500\u2500 resource                                // Resource directory\n            \u251c\u2500\u2500 init_fe.sh                          // Startup and registration script\n            \u2514\u2500\u2500 apache-doris-2.0.3-bin.tar.gz       // Binary package\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Download binary package")),(0,r.yg)("p",null,"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/zh-CN/download/"},"official binary package")," or the compiled binary package, and replace the apache-doris package in ",(0,r.yg)("inlineCode",{parentName:"p"},"./docker-build/fe/resource")," with it."),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Write Dockerfile")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},'# Choose a base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/"\nENV PATH="/opt/apache-doris/fe/bin:$PATH"\n\n# Download the software into the Docker image\nADD ./resource/apache-doris-2.0.3-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-2.0.3-bin/fe /opt/apache-doris/\n\nADD ./resource/init_fe.sh /opt/apache-doris/fe/bin\nRUN chmod 755 /opt/apache-doris/fe/bin/init_fe.sh\n\nENTRYPOINT ["/opt/apache-doris/fe/bin/init_fe.sh"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Rename the file as ",(0,r.yg)("inlineCode",{parentName:"li"},"Dockerfile")," and save it to the ",(0,r.yg)("inlineCode",{parentName:"li"},"./docker-build/fe")," directory."),(0,r.yg)("li",{parentName:"ul"},"For the FE execution script init_fe.sh, refer to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/tree/master/docker/runtime/fe/resource/init_fe.sh"},"init_fe.sh")," in the Doris source code library.")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Perform build")),(0,r.yg)("p",null,"Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"${tagName}")," should be replaced with the tag you need, such as: ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-doris:2.0.3-fe"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"cd ./docker-build/fe\ndocker build . -t ${fe-tagName}\n")),(0,r.yg)("h3",{id:"build-be-image"},"Build BE image"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Environment directory for building the BE image:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-SQL"},"\u2514\u2500\u2500 docker-build                                     // Root directory \n    \u2514\u2500\u2500 be                                           // BE directory\n        \u251c\u2500\u2500 dockerfile                               // Dockerfile script\n        \u2514\u2500\u2500 resource                                 // Resource directory\n            \u251c\u2500\u2500 init_be.sh                           // Startup and registration script\n            \u2514\u2500\u2500 apache-doris-2.0.3-bin.tar.gz        // Binary package\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Write Dockerfile")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-PowerShell"},'# Choose a base image\nFROM openjdk:8u342-jdk\n\n# Set environment variables\nENV JAVA_HOME="/usr/local/openjdk-8/" \nENV PATH="/opt/apache-doris/be/bin:$PATH"\n\n# \u4e0bDownload the software into the Docker image\nADD ./resource/apache-doris-2.0.3-bin.tar.gz /opt/\n\nRUN apt-get update && \\\n    apt-get install -y default-mysql-client && \\\n    apt-get clean && \\\n    mkdir /opt/apache-doris && \\\n    cd /opt && \\\n    mv apache-doris-2.0.3-bin/be /opt/apache-doris/\n\nADD ./resource/init_be.sh /opt/apache-doris/be/bin\nRUN chmod 755 /opt/apache-doris/be/bin/init_be.sh\n\nENTRYPOINT ["/opt/apache-doris/be/bin/init_be.sh"]\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Rename the file as ",(0,r.yg)("inlineCode",{parentName:"li"},"Dockerfile")," and save it to the ",(0,r.yg)("inlineCode",{parentName:"li"},"./docker-build/be")," directory."),(0,r.yg)("li",{parentName:"ul"},"For the BE execution script init_be.sh, refer to ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/tree/master/docker/runtime/be/resource/init_be.sh"},"init_be.sh"),".")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Perform build")),(0,r.yg)("p",null,"Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"${tagName}")," should be replaced with the tag you need, such as: ",(0,r.yg)("inlineCode",{parentName:"p"},"apache-doris:2.0.3-be"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"cd ./docker-build/be\ndocker build . -t ${be-tagName}\n")),(0,r.yg)("h3",{id:"push-the-image-to-dockerhub-or-a-private-repository"},"Push the image to DockerHub or a private repository"),(0,r.yg)("p",null,"Log in to DockerHub"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"docker login\n")),(0,r.yg)("p",null,'Upon successful login, a "Success" prompt will be displayed. After that, you can push the image.'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"docker push ${tagName}\n")),(0,r.yg)("h2",{id:"deploy-docker-cluster"},"Deploy Docker cluster"),(0,r.yg)("p",null,"The following is a brief overview of how to quickly create a complete Doris testing cluster using the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker run")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose up")," commands."),(0,r.yg)("p",null,"It is advisable to avoid containerized solutions for Doris deployment in production environments. Instead, when deploying Doris on Kubernetes (K8s), it is recommended to utilize the Doris Operator for deployment."),(0,r.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Software")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Software"),(0,r.yg)("th",{parentName:"tr",align:null},"Version"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Docker"),(0,r.yg)("td",{parentName:"tr",align:null},"20.0 and later")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"docker-compose"),(0,r.yg)("td",{parentName:"tr",align:null},"20.1 and later")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Hardware")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Hardware"),(0,r.yg)("th",{parentName:"tr",align:null},"Maximum Running Cluster Size"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Minimum"),(0,r.yg)("td",{parentName:"tr",align:null},"2C 4G"),(0,r.yg)("td",{parentName:"tr",align:null},"1FE 1BE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Recommended"),(0,r.yg)("td",{parentName:"tr",align:null},"4C 16G"),(0,r.yg)("td",{parentName:"tr",align:null},"3FE 3BE")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Execute the following command in the host machine:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},"sysctl -w vm.max_map_count=2000000\n")),(0,r.yg)("h3",{id:"docker-compose"},"Docker Compose"),(0,r.yg)("p",null,"The required image varies depending on the platform. The following takes the ",(0,r.yg)("inlineCode",{parentName:"p"},"X86_64")," platform as an example."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Network mode")),(0,r.yg)("p",null,"Doris Docker supports two network modes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The HOST mode is suitable for deploying across multiple nodes, with one FE and one BE per node."),(0,r.yg)("li",{parentName:"ul"},"The subnet bridge mode is suitable for deploying multiple Doris processes on a single node (recommended). If you want to deploy across multiple nodes, additional component deployments are required (not recommended).")),(0,r.yg)("p",null,"For demonstration purposes, this section will only show scripts written for the subnet bridge mode."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Interface description")),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache Doris 2.0.3 Docker Image"),", the interface list for each process image is as follows:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Process"),(0,r.yg)("th",{parentName:"tr",align:null},"Interface"),(0,r.yg)("th",{parentName:"tr",align:null},"Interface Definition"),(0,r.yg)("th",{parentName:"tr",align:null},"Interface Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BROKER"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_SERVERS")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FE"),(0,r.yg)("td",{parentName:"tr",align:null},"FE_ID"),(0,r.yg)("td",{parentName:"tr",align:null},"FE node ID"),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE_ADDR"),(0,r.yg)("td",{parentName:"tr",align:null},"BE node informatioin"),(0,r.yg)("td",{parentName:"tr",align:null},"172.20.80.5:9050")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BE"),(0,r.yg)("td",{parentName:"tr",align:null},"NODE_ROLE"),(0,r.yg)("td",{parentName:"tr",align:null},"BE node type"),(0,r.yg)("td",{parentName:"tr",align:null},"computation")))),(0,r.yg)("p",null,"Note that the above interfaces must be specified with relevant information; otherwise, the process will not start."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The FE_SERVERS interface follows the rule: ",(0,r.yg)("inlineCode",{parentName:"p"},"FE_NAME:FE_HOST:FE_EDIT_LOG_PORT[,FE_NAME:FE_HOST:FE_EDIT_LOG_PORT]")),(0,r.yg)("p",{parentName:"blockquote"},"The FE_ID interface should be an integer from ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"9"),", where ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," represents the Master node."),(0,r.yg)("p",{parentName:"blockquote"},"The BE_ADDR interface follows the rule: ",(0,r.yg)("inlineCode",{parentName:"p"},"BE_HOST:BE_HEARTBEAT_SERVICE_PORT")),(0,r.yg)("p",{parentName:"blockquote"},"The NODE_ROLE interface should be ",(0,r.yg)("inlineCode",{parentName:"p"},"computation")," or empty. When it is empty or any other value, it indicates a ",(0,r.yg)("inlineCode",{parentName:"p"},"mix")," node."),(0,r.yg)("p",{parentName:"blockquote"},"The BROKER_ADDR interface follows the rule: ",(0,r.yg)("inlineCode",{parentName:"p"},"BROKER_HOST:BROKER_IPC_PORT"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Script template")),(0,r.yg)("h4",{id:"docker-run-command"},"Docker Run command"),(0,r.yg)("p",null,"1 FE & 1 BE command template"),(0,r.yg)("p",null,"Note that you should replace ",(0,r.yg)("inlineCode",{parentName:"p"},"${INTERNAL_IP_OF_CURRENT_MACHINE}")," with the internal IP of your current machine."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Shell"},'docker run -itd \\\n--name=fe \\\n--env FE_SERVERS="fe1:${INTERNAL_IP_OF_CURRENT_MACHINE}:9010" \\\n--env FE_ID=1 \\\n-p 8030:8030 \\\n-p 9030:9030 \\\n-v /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta \\\n-v /data/fe/log:/opt/apache-doris/fe/log \\\n--net=host \\\napache/doris:2.0.3-fe-x86_64\n\ndocker run -itd \\\n--name=be \\\n--env FE_SERVERS="fe1:${INTERNAL_IP_OF_CURRENT_MACHINE}:9010" \\\n--env BE_ADDR="${INTERNAL_IP_OF_CURRENT_MACHINE}:9050" \\\n-p 8040:8040 \\\n-v /data/be/storage:/opt/apache-doris/be/storage \\\n-v /data/be/log:/opt/apache-doris/be/log \\\n--net=host \\\napache/doris:2.0.3-be-x86_64\n')),(0,r.yg)("p",null,"Download the Docker Run command template for 3 FE & 3 BE from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/docker/runtime/docker-compose-demo/build-cluster/rum-command/3fe_3be.sh"},"here")," if needed."),(0,r.yg)("h4",{id:"docker-compose-scripte"},"Docker Compose scripte"),(0,r.yg)("p",null,"1 FE & 1 BE template"),(0,r.yg)("p",null,"Note that you should replace ",(0,r.yg)("inlineCode",{parentName:"p"},"${INTERNAL_IP_OF_CURRENT_MACHINE}")," with the internal IP of your current machine."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-YAML"},'version: "3"\nservices:\n  fe:\n    image: apache/doris:2.0.3-fe-x86_64\n    hostname: fe\n    environment:\n     - FE_SERVERS=fe1:${INTERNAL_IP_OF_CURRENT_MACHINE}:9010\n     - FE_ID=1\n    volumes:\n     - /data/fe/doris-meta/:/opt/apache-doris/fe/doris-meta/\n     - /data/fe/log/:/opt/apache-doris/fe/log/\n    network_mode: host\n  be:\n    image: apache/doris:2.0.3-be-x86_64\n    hostname: be\n    environment:\n     - FE_SERVERS=fe1:${INTERNAL_IP_OF_CURRENT_MACHINE}:9010\n     - BE_ADDR=${INTERNAL_IP_OF_CURRENT_MACHINE}:9050\n    volumes:\n     - /data/be/storage/:/opt/apache-doris/be/storage/\n     - /data/be/script/:/docker-entrypoint-initdb.d/\n    depends_on:\n      - fe\n    network_mode: host\n')),(0,r.yg)("p",null,"Download the Docker Compose command template for 3 FE & 3 BE from ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/docker/runtime/docker-compose-demo/build-cluster/docker-compose/3fe_3be/docker-compose.yaml"},"here")," if needed."),(0,r.yg)("h3",{id:"deploy-doris-docker"},"Deploy Doris Docker"),(0,r.yg)("p",null,"Choose one of the following deployment methods:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Execute the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker run")," command to create the cluster."),(0,r.yg)("li",{parentName:"ol"},"Save the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose.yaml")," script and execute the ",(0,r.yg)("inlineCode",{parentName:"li"},"docker-compose up -d"),"command in the same directory to create the cluster.")))}g.isMDXComponent=!0}}]);