"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54811],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68940:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,l={unversionedId:"demos/client-umd",id:"demos/client-umd",title:"client-umd",description:"Download",source:"@site/docs/demos/client-umd.md",sourceDirName:"demos",slug:"/demos/client-umd",permalink:"/Moralis-JS-SDK/demos/client-umd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"cli",permalink:"/Moralis-JS-SDK/demos/cli"},next:{title:"client-webpack",permalink:"/Moralis-JS-SDK/demos/client-webpack"}},c={},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://moralisweb3.github.io/Moralis-JS-SDK/downloads/client-umd.zip"},"Download")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/client-umd"},"View code")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This is a simple client-side implementation using the UMD build of the library, which is imported via a ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," tag."),(0,o.kt)("p",null,"To get started:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Replace the value of ",(0,o.kt)("inlineCode",{parentName:"li"},"MORALIS_API_KEY")," to your own API key"),(0,o.kt)("li",{parentName:"ul"},"Run index.html in your browser using localhost (Live Server extension for VSCode, or any alternative, is recommended)")),(0,o.kt)("p",null,"Notes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"When you go to production, make sure to fix the imported script from moralis to a specific version (via ",(0,o.kt)("inlineCode",{parentName:"strong"},"@2.1.0")," for example). This prevents unexpected updates when Moralis releases a new version"))))}u.isMDXComponent=!0}}]);