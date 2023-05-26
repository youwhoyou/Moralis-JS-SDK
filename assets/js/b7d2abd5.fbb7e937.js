"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,f=d["".concat(c,".").concat(u)]||d[u]||l[u]||o;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85748:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={slug:"/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",title:"Interface: GetNFTContractMetadataResponseAdapter",sidebar_label:"GetNFTContractMetadataResponseAdapter"},s=void 0,i={unversionedId:"api/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",id:"api/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",title:"Interface: GetNFTContractMetadataResponseAdapter",description:"moralis-monorepo / @moralisweb3/common-evm-utils / GetNFTContractMetadataResponseAdapter",source:"@site/docs/api/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/getnftcontractmetadataresponseadapter",title:"Interface: GetNFTContractMetadataResponseAdapter",sidebar_label:"GetNFTContractMetadataResponseAdapter"},sidebar:"sidebar",previous:{title:"GetNFTContractMetadataRequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getnftcontractmetadatarequest"},next:{title:"GetNFTContractTransfersRequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/getnftcontracttransfersrequest"}},c={},m=[{value:"Hierarchy",id:"hierarchy",level:2}],p={toc:m};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / GetNFTContractMetadataResponseAdapter"),(0,n.kt)("h1",{id:"interface-getnftcontractmetadataresponseadapter"},"Interface: GetNFTContractMetadataResponseAdapter"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".GetNFTContractMetadataResponseAdapter"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#getnftcontractmetadataresponse"},(0,n.kt)("inlineCode",{parentName:"a"},"GetNFTContractMetadataResponse")),", ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#getnftcontractmetadatajsonresponse"},(0,n.kt)("inlineCode",{parentName:"a"},"GetNFTContractMetadataJSONResponse")),">"),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"GetNFTContractMetadataResponseAdapter"))))))}l.isMDXComponent=!0}}]);