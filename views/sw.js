if(!self.define){let e,t={};const n=(n,i)=>(n=new URL(n+".js",i).href,t[n]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=t,document.head.appendChild(e)}else e=n,importScripts(n),t()})).then((()=>{let e=t[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>n(e,o),l={module:{uri:o},exports:r,require:c};t[o]=Promise.all(i.map((e=>l[e]||c(e)))).then((e=>(s(...e),r)))}}define(["./workbox-904f8752"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"favicon.ico",revision:"b45ea4ba121d4a57fc06b5191dd6d8b8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.registerRoute("/",new e.CacheFirst({cacheName:"last-cache",plugins:[new e.ExpirationPlugin({maxEntries:5,maxAgeSeconds:86400})]}),"GET")}));