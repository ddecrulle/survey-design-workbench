"use strict";(self.webpackChunksurvey_design_workbench=self.webpackChunksurvey_design_workbench||[]).push([[555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(n),d=c,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:c,o[1]=a;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),c=n(6010),i=n(2802),o=n(9960),a=n(3919),l=n(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,c.Z)("card padding--lg",s)},n)}function d(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",u),title:i},n," ",i),o&&r.createElement("p",{className:(0,c.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:c?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},7242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),c=(n(7294),n(3905)),i=n(2991);const o={},a="Queen",l={unversionedId:"applications/queen/queen",id:"applications/queen/queen",title:"Queen",description:"Introduction",source:"@site/docs/applications/queen/queen.mdx",sourceDirName:"applications/queen",slug:"/applications/queen/",permalink:"/survey-design-workbench/docs/applications/queen/",draft:!1,editUrl:"https://github.com/ddecrulle/survey-design-workbench/tree/main/docs/applications/queen/queen.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lunatic Workers",permalink:"/survey-design-workbench/docs/applications/stromae-v2/lunatic-worker"},next:{title:"Getting Started",permalink:"/survey-design-workbench/docs/applications/queen/getting-started"}},s={},u=[],p={toc:u};function m(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"queen"},"Queen"),(0,c.kt)("p",null,"Introduction"),(0,c.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);