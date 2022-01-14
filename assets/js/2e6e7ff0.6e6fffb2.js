"use strict";(self.webpackChunkfpay_docs_docusaurus=self.webpackChunkfpay_docs_docusaurus||[]).push([[617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={slug:"2021-nov-12",title:"2021 Nov 12",authors:["kklim"],tags:["fpay core","fpay click"]},c=void 0,u={permalink:"/fpay_docs/blog/2021-nov-12",editUrl:"https://github.com/getcto/fpay_docs/blob/main/blog/2021-nov-12.md",source:"@site/blog/2021-nov-12.md",title:"2021 Nov 12",description:"Fpay Core",date:"2022-01-06T02:28:36.090Z",formattedDate:"January 6, 2022",tags:[{label:"fpay core",permalink:"/fpay_docs/blog/tags/fpay-core"},{label:"fpay click",permalink:"/fpay_docs/blog/tags/fpay-click"}],readingTime:.545,truncated:!1,authors:[{name:"KK Lim",title:"Project Manager",url:"https://github.com/kengkeelim",imageURL:"https://avatars.githubusercontent.com/u/39734121?v=4",key:"kklim"}],prevItem:{title:"2022 Jan 11",permalink:"/fpay_docs/blog/2022-jan-11"}},p={authorsImageUrls:[void 0]},s=[{value:"Fpay Core",id:"fpay-core",children:[{value:"Merchant create",id:"merchant-create",children:[],level:3},{value:"Merchant request",id:"merchant-request",children:[],level:3},{value:"Generate signature test",id:"generate-signature-test",children:[],level:3}],level:2},{value:"Fpay Click",id:"fpay-click",children:[{value:"Merchant service",id:"merchant-service",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"fpay-core"},"Fpay Core"),(0,i.kt)("h3",{id:"merchant-create"},"Merchant create"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Added fees field."),(0,i.kt)("li",{parentName:"ol"},"After successful ",(0,i.kt)("inlineCode",{parentName:"li"},"post"),", it will return merchant code and secret.")),(0,i.kt)("h3",{id:"merchant-request"},"Merchant request"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Input field : ",(0,i.kt)("inlineCode",{parentName:"li"},"callback_url"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"response_url")," changed to ",(0,i.kt)("inlineCode",{parentName:"li"},"optional"),"."),(0,i.kt)("li",{parentName:"ol"},"Input field : Added ",(0,i.kt)("inlineCode",{parentName:"li"},"signature")," field (mandatory)."),(0,i.kt)("li",{parentName:"ol"},"Added signature checking base on ",(0,i.kt)("inlineCode",{parentName:"li"},"sha256"),".")),(0,i.kt)("h3",{id:"generate-signature-test"},"Generate signature test"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"/merchant-requests/signature/test/create"),(0,i.kt)("li",{parentName:"ul"},"/merchant-requests/signature/test/response")),(0,i.kt)("h2",{id:"fpay-click"},"Fpay Click"),(0,i.kt)("h3",{id:"merchant-service"},"Merchant service"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Added ",(0,i.kt)("inlineCode",{parentName:"li"},"saveTransactions")," & ",(0,i.kt)("inlineCode",{parentName:"li"},"TransferOTPStrategy"),"."),(0,i.kt)("li",{parentName:"ol"},"Extra save transaction record to ",(0,i.kt)("inlineCode",{parentName:"li"},"core.transactions")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"signature")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"response data")," added."),(0,i.kt)("li",{parentName:"ol"},"Generate ",(0,i.kt)("inlineCode",{parentName:"li"},"signature")," for merchant validation."),(0,i.kt)("li",{parentName:"ol"},"Only return ",(0,i.kt)("inlineCode",{parentName:"li"},"response_url")," to frontend after ",(0,i.kt)("inlineCode",{parentName:"li"},"OTP"),"."),(0,i.kt)("li",{parentName:"ol"},"Corrected callback data sent."),(0,i.kt)("li",{parentName:"ol"},"Added check for ",(0,i.kt)("inlineCode",{parentName:"li"},"callback_url"),", only execute if url exists.")))}m.isMDXComponent=!0}}]);