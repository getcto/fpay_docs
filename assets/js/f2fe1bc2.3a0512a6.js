"use strict";(self.webpackChunkfpay_docs_docusaurus=self.webpackChunkfpay_docs_docusaurus||[]).push([[908],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return m},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"2022-jan-11",title:"2022 Jan 11",authors:["kklim"],tags:["fpay core","fpay click","fallback"]},c=void 0,p={permalink:"/fpay_docs/blog/2022-jan-11",editUrl:"https://github.com/getcto/fpay_docs/blob/main/blog/2022-jan-11.md",source:"@site/blog/2022-jan-11.md",title:"2022 Jan 11",description:"FPay Click",date:"2022-01-14T01:45:32.502Z",formattedDate:"January 14, 2022",tags:[{label:"fpay core",permalink:"/fpay_docs/blog/tags/fpay-core"},{label:"fpay click",permalink:"/fpay_docs/blog/tags/fpay-click"},{label:"fallback",permalink:"/fpay_docs/blog/tags/fallback"}],readingTime:.47,truncated:!1,authors:[{name:"KK Lim",title:"Project Manager",url:"https://github.com/kengkeelim",imageURL:"https://avatars.githubusercontent.com/u/39734121?v=4",key:"kklim"}],nextItem:{title:"2021 Nov 12",permalink:"/fpay_docs/blog/2021-nov-12"}},s={authorsImageUrls:[void 0]},m=[{value:"FPay Click",id:"fpay-click",children:[],level:2},{value:"FPay Core",id:"fpay-core",children:[],level:2},{value:"Fallback",id:"fallback",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fpay-click"},"FPay Click"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Files"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"TransferOTPStrategy.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AppApprovalStrategy.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"LoginStrategy.js"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MerchantService.js")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"store transaction id for under ",(0,i.kt)("inlineCode",{parentName:"li"},"bank.transactions")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"core.transactions")),(0,i.kt)("li",{parentName:"ul"},"added callback - store response from merchant. ")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"1")," - success"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"others")," - fail and will trigger the call back in FPay Core"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"added ",(0,i.kt)("inlineCode",{parentName:"li"},"transactions_username")," during user login")),(0,i.kt)("h2",{id:"fpay-core"},"FPay Core"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Files"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"job.controller.ts"),", (new) ",(0,i.kt)("inlineCode",{parentName:"p"},"transactions.service.ts")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prisma"),": added new columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New ","[GET]"," /jobs/request-callback")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New ","[POST]"," /jobs/request-submit/","[request id]"," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"package.json: added scripts for prisma db push."))),(0,i.kt)("h2",{id:"fallback"},"Fallback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/jobs/request-callback\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stuck in callback when link is not valid.")))}u.isMDXComponent=!0}}]);