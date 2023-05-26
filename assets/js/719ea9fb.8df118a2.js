"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53964],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=m(a),u=r,c=k["".concat(s,".").concat(u)]||k[u]||d[u]||l;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},35235:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={slug:"/moralisweb3/common-evm-utils/erc20transaction",title:"Class: Erc20Transaction",sidebar_label:"Erc20Transaction"},i=void 0,o={unversionedId:"api/moralisweb3/common-evm-utils/erc20transaction",id:"api/moralisweb3/common-evm-utils/erc20transaction",title:"Class: Erc20Transaction",description:"moralis-monorepo / @moralisweb3/common-evm-utils / Erc20Transaction",source:"@site/docs/api/moralisweb3/common-evm-utils/erc20transaction.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/erc20transaction",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/erc20transaction",title:"Class: Erc20Transaction",sidebar_label:"Erc20Transaction"},sidebar:"sidebar",previous:{title:"Erc20Token",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20token"},next:{title:"Erc20TransactionData",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactiondata"}},s={},m=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"address",id:"address",level:3},{value:"Returns",id:"returns-6",level:4},{value:"blockHash",id:"blockhash",level:3},{value:"Returns",id:"returns-7",level:4},{value:"blockNumber",id:"blocknumber",level:3},{value:"Returns",id:"returns-8",level:4},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"Returns",id:"returns-9",level:4},{value:"chain",id:"chain",level:3},{value:"Returns",id:"returns-10",level:4},{value:"contractAddress",id:"contractaddress",level:3},{value:"Returns",id:"returns-11",level:4},{value:"fromAddress",id:"fromaddress",level:3},{value:"Returns",id:"returns-12",level:4},{value:"fromWallet",id:"fromwallet",level:3},{value:"Returns",id:"returns-13",level:4},{value:"logIndex",id:"logindex",level:3},{value:"Returns",id:"returns-14",level:4},{value:"possibleSpam",id:"possiblespam",level:3},{value:"Returns",id:"returns-15",level:4},{value:"result",id:"result",level:3},{value:"Returns",id:"returns-16",level:4},{value:"toAddress",id:"toaddress",level:3},{value:"Returns",id:"returns-17",level:4},{value:"toWallet",id:"towallet",level:3},{value:"Returns",id:"returns-18",level:4},{value:"transactionHash",id:"transactionhash",level:3},{value:"Returns",id:"returns-19",level:4},{value:"transactionIndex",id:"transactionindex",level:3},{value:"Returns",id:"returns-20",level:4},{value:"value",id:"value",level:3},{value:"Returns",id:"returns-21",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-4",level:4}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / Erc20Transaction"),(0,r.kt)("h1",{id:"class-erc20transaction"},"Class: Erc20Transaction"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".Erc20Transaction"),(0,r.kt)("p",null,"The Erc20Transaction is a representation of an Erc20 token transaction."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MoralisDataObject"))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#equals"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#parse"},"parse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#equals-1"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#format"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#tojson"},"toJSON"))),(0,r.kt)("h3",{id:"accessors"},"Accessors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#address"},"address")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#blockhash"},"blockHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#blocknumber"},"blockNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#blocktimestamp"},"blockTimestamp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#chain"},"chain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#contractaddress"},"contractAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#fromaddress"},"fromAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#fromwallet"},"fromWallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#logindex"},"logIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#possiblespam"},"possibleSpam")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#result"},"result")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#toaddress"},"toAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#towallet"},"toWallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#transactionhash"},"transactionHash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#transactionindex"},"transactionIndex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#value"},"value"))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction#constructor"},"constructor"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transaction"))),(0,r.kt)("p",null,"Create a new instance of Erc20Transaction from any valid input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const transfer = Erc20Transaction.create(data);\n")),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20transactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the Erc20Transactionish type")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transaction"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transaction"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"dataA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dataB"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Check the equality between two Erc20 transfers"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Erc20Transaction.equals(dataA, dataB)\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20transactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The first transfer to compare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dataB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20transactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The second transfer to compare")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"true if the transfers are equal, false otherwise"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parse"},"parse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"parse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactiondata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionData"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactioninput"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionInput")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactiondata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionData"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals-1"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Checks the equality of the current trnasfer with another erc20 trnasfer"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.equals(data)\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20transactionish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Transactionish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the transfer to compare with")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"true if the transfers are equal, false otherwise"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.equals"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"format"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Deprecated"))),(0,r.kt)("p",null,"This method will be removed soon. To format the value, use one of the properties."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockTimestamp")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chain")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fromAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"possibleSpam")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"toAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.format"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.toJSON()\n")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",null,"a JSON represention of the transfer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockNumber")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"blockTimestamp")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chain")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fromAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"logIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"possibleSpam")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"toAddress")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionHash")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"transactionIndex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,r.kt)("p",null,"MoralisDataObject.toJSON"),(0,r.kt)("h2",{id:"accessors-1"},"Accessors"),(0,r.kt)("h3",{id:"address"},"address"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"address"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.address // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the contract address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blockhash"},"blockHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"blockHash"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'transfer.blockHash // "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"\n')),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the block hash of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"blockNumber"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.blockNumber // BigNumber\n")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"the block number of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"blockTimestamp"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.blockTimestamp // Date\n")),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Date")),(0,r.kt)("p",null,"the block timestamp of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"chain"},"chain"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"chain"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmchain"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmChain"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.chain // EvmChain\n")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmchain"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmChain"))),(0,r.kt)("p",null,"the chain of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"contractaddress"},"contractAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"contractAddress"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.contractAddress // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the contract address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"fromAddress"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.fromAddress // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the from address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromwallet"},"fromWallet"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"fromWallet"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.fromWallet // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the from address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logindex"},"logIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"logIndex"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.logIndex // 2\n")),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"the logIndex of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"possiblespam"},"possibleSpam"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"possibleSpam"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.possibleSpam // true\n")),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"possibility of the token being a spam token"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"result"},"result"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"result"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactiondata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionData"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.result\n")),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactiondata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionData"))),(0,r.kt)("p",null,"all the data without casting it to JSON."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toaddress"},"toAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"toAddress"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.toAddress // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-17"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the to address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"towallet"},"toWallet"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"toWallet"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.toWallet // EvmAddress\n")),(0,r.kt)("h4",{id:"returns-18"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"},(0,r.kt)("inlineCode",{parentName:"a"},"EvmAddress"))),(0,r.kt)("p",null,"the to address of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"transactionHash"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'transfer.transactionHash // "0x0372c302e3c52e8f2e15d155e2c545e6d802e479236564af052759253b20fd86"\n')),(0,r.kt)("h4",{id:"returns-19"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the transaction hash of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"transactionIndex"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.transactionIndex // 3\n")),(0,r.kt)("h4",{id:"returns-20"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"the transactionIndex of the transfer"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"value"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"transfer.value // BigNumber\n")),(0,r.kt)("h4",{id:"returns-21"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"the value of the transfer"),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Erc20Transaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),")"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transactioninput"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20TransactionInput")))))))}d.isMDXComponent=!0}}]);