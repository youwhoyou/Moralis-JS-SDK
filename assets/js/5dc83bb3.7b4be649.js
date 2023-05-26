"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34237],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77953:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={},i=void 0,l={unversionedId:"demos/firebase-auth-ext",id:"demos/firebase-auth-ext",title:"firebase-auth-ext",description:"Download",source:"@site/docs/demos/firebase-auth-ext.md",sourceDirName:"demos",slug:"/demos/firebase-auth-ext",permalink:"/Moralis-JS-SDK/demos/firebase-auth-ext",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"express-proxy",permalink:"/Moralis-JS-SDK/demos/express-proxy"},next:{title:"firebase-nextjs",permalink:"/Moralis-JS-SDK/demos/firebase-nextjs"}},s={},p=[{value:"\ud83d\ude80 How to Start",id:"-how-to-start",level:2},{value:"\ud83d\udd0c Run Locally",id:"-run-locally",level:3},{value:"\ud83d\udd25 Deploy to Production",id:"-deploy-to-production",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://moralisweb3.github.io/Moralis-JS-SDK/downloads/firebase-auth-ext.zip"},"Download")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MoralisWeb3/Moralis-JS-SDK/tree/main/demos/firebase-auth-ext"},"View code")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This project contains a simple authentication demo for the Firebase by a Web3 wallet. It uses the Authenticate with Moralis Auth extension for the Firebase."),(0,r.kt)("p",null,"Required Google Cloud services:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/hosting"},"Firebase Hosting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/auth"},"Firebase Authentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/functions"},"Firebase Cloud Functions")," (only in the Blaze plan, check the ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/pricing"},"pricing"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/secret-manager/"},"Secret Manager")," (check the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/secret-manager/pricing"},"pricing"),")")),(0,r.kt)("h2",{id:"-how-to-start"},"\ud83d\ude80 How to Start"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clone this repo."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"Install Firebase CLI")," globally: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g firebase-tools")),(0,r.kt)("li",{parentName:"ol"},"Login to your account: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase login")),(0,r.kt)("li",{parentName:"ol"},"Get list of your projects: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase projects:list"),". If this list is empty you should add a new project. You can do it by the Firebase Console."),(0,r.kt)("li",{parentName:"ol"},"Set your project ID: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase use <PROJECT_ID>")),(0,r.kt)("li",{parentName:"ol"},"Generate a certificate for the ",(0,r.kt)("a",{parentName:"li",href:"https://firebase.google.com/support/guides/service-accounts"},"Service Account"),". You will need it in the next step."),(0,r.kt)("li",{parentName:"ol"},"Convert the certificate to extension variables by ",(0,r.kt)("a",{parentName:"li",href:"https://moralisweb3.github.io/firebase-extensions/service-account-converter/"},"this online converter"),". You will use these variables in the next step."),(0,r.kt)("li",{parentName:"ol"},"Install the Authenticate with Moralis Web3 extension: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase ext:install moralis/moralis-auth"),"."),(0,r.kt)("li",{parentName:"ol"},"Copy ",(0,r.kt)("inlineCode",{parentName:"li"},"hosting/.env.example")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"hosting/.env")," and set all variables."),(0,r.kt)("li",{parentName:"ol"},"Build the functions project:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn run build"))),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Build the hosting project:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cd hosting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn install")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn run build"))),(0,r.kt)("ol",{start:12},(0,r.kt)("li",{parentName:"ol"},"Activate the ",(0,r.kt)("inlineCode",{parentName:"li"},"Authentication")," feature in the Firebase Console. Go to the Firebase Console > Your Project > Build > Authentication and click the Get Started button.")),(0,r.kt)("h3",{id:"-run-locally"},"\ud83d\udd0c Run Locally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html"},"Install Java")," on your computer. Functions Emulator requires Java."),(0,r.kt)("li",{parentName:"ol"},"Run emulators: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase emulators:start")),(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:5555/")," in your browser.")),(0,r.kt)("h3",{id:"-deploy-to-production"},"\ud83d\udd25 Deploy to Production"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy: ",(0,r.kt)("inlineCode",{parentName:"li"},"firebase deploy")),(0,r.kt)("li",{parentName:"ol"},"If you have any problem with the CORS on the production, probably you should allow unauthenticated HTTP function invocation. To allow unauthenticated invocation you must specify this at or after deployment. ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/functions/docs/securing/managing-access-iam#allowing_unauthenticated_http_function_invocation"},"Here")," you can read more about it.")))}u.isMDXComponent=!0}}]);