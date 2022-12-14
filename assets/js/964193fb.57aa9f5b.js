"use strict";(self.webpackChunksurvey_design_workbench=self.webpackChunksurvey_design_workbench||[]).push([[635],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),h=o,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9587:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,id:"deploy",slug:"/deploy"},l="Deploy the product",i={unversionedId:"deploy",id:"deploy",title:"Deploy the product",description:"On a kubernetes cluster",source:"@site/docs/how-to-deploy.md",sourceDirName:".",slug:"/deploy",permalink:"/survey-design-workbench/docs/deploy",draft:!1,editUrl:"https://github.com/ddecrulle/survey-design-workbench/tree/main/docs/how-to-deploy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"deploy",slug:"/deploy"},sidebar:"tutorialSidebar",previous:{title:"Product",permalink:"/survey-design-workbench/docs/intro"},next:{title:"Applications",permalink:"/survey-design-workbench/docs/apps"}},s={},p=[{value:"On a kubernetes cluster",id:"on-a-kubernetes-cluster",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Docker Repository",id:"docker-repository",level:2},{value:"Helm repository",id:"helm-repository",level:3},{value:"Other installations",id:"other-installations",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-the-product"},"Deploy the product"),(0,o.kt)("h2",{id:"on-a-kubernetes-cluster"},"On a kubernetes cluster"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Kubernetes")," : see getting started ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/setup/"},"here")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Helm")," : to install Helm, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/helm/helm#install"},"Helm install guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"kubectl")," : to install kubectl, refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubernetes kubectl install guide"))),(0,o.kt)("h2",{id:"docker-repository"},"Docker Repository"),(0,o.kt)("p",null,"The official docker images required to deploy an instance of Survey Design product are available on the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/u/inseefr"},"inseefr docker repositories")," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/pogues/tags"},"Pogues")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/pogues-back-office"},"Pogues-Back-Office")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/eno-ws/tags"},"Eno-WS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/ddi-access-services/tags"},"DDI-Access-Services")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/stromae/tags"},"Stromae V1 (1.X.X) et V2 (2.X.X)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/stromae-db/tags"},"Stromae-db")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/inseefr/queen"},"Queen"))),(0,o.kt)("admonition",{title:"Warning",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},'Don\'t use the "latest" tag (not always updated).')),(0,o.kt)("p",null,"To know the content of a tag, please refer to the corresponding release note in the github repository."),(0,o.kt)("h3",{id:"helm-repository"},"Helm repository"),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/inseefr/Helm-charts"},"repo InseeFr")," contains the helm-charts of the product."),(0,o.kt)("p",null,"The following command allow you to download and install all the helm charts of this repository on Helm :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add inseefr https://inseefr.github.io/Helm-Charts\n")),(0,o.kt)("p",null,"If you have already added the repository, you can update it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo update inseefr\n")),(0,o.kt)("p",null,"You can see the list of charts with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm search repo inseefr\n")),(0,o.kt)("p",null,"Once you did that you just have to install the Charts with the appropriate values."),(0,o.kt)("p",null,"You can found examples for each app here :"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"//TODO Add links"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/survey-design-workbench/docs/applications/stromae-v2/deploiement"},"Stromae")),(0,o.kt)("li",{parentName:"ul"},"Queen"))),(0,o.kt)("h2",{id:"other-installations"},"Other installations"),(0,o.kt)("p",null,"We do not provide yet install scripts for other environment than kubernetes."))}c.isMDXComponent=!0}}]);