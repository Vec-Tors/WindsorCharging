import{d as $,o as u,c as b,u as s,R as M,s as N,a as B,b as D,e as S,f as P,L,g as h,h as p,w as m,r as _,F as k,i as O,j as g,t as d,k as y,l as a,m as v,v as E,n as V,p as j,q as z,x as I,y as F,z as H}from"./vendor.8e5b77f9.js";const U=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function t(n){if(n.ep)return;n.ep=!0;const e=l(n);fetch(n.href,e)}};U();const J=$({setup(c){return(r,l)=>(u(),b(s(M)))}});var x=(c,r)=>{const l=c.__vccOpts||c;for(const[t,n]of r)l[t]=n;return l};const q={components:{LMap:N,LTileLayer:B,LMarker:D,LPopup:S,LControlLayers:P},props:{OldPoints:Array,NewPoints:Array},data(){return{zoom:11,center:[42.141739,-82.784338],OldiconLink:"./lighting.png",icon:L.icon({iconUrl:"https://img.icons8.com/ios-filled/500/000000/lightning-bolt--v1.png",iconSize:[32,37],iconAnchor:[16,37]}),iconB:L.icon({iconUrl:"https://img.icons8.com/nolan/96/lightning-bolt.png",iconSize:[32,37],iconAnchor:[16,37]})}},computed:{},mounted(){}},R={style:{height:"100%",width:"100%"}};function W(c,r,l,t,n,e){const o=_("l-tile-layer"),f=_("l-popup"),A=_("l-marker"),C=_("l-control-layers"),T=_("l-map");return u(),h("div",R,[p(T,{zoom:"11",center:[42.141739,-82.784338]},{default:m(()=>[p(o,{url:"https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"}),(u(!0),h(k,null,O(this.OldPoints,i=>(u(),b(A,{class:"mark","lat-lng":[i.geometry.coordinates[1],i.geometry.coordinates[0]],key:i[0],icon:this.icon},{default:m(()=>[p(f,null,{default:m(()=>[g(" Address: "+d(i.properties.street_address)+" Lat: "+d(i.geometry.coordinates[1])+" Long: "+d(i.geometry.coordinates[0]),1)]),_:2},1024)]),_:2},1032,["lat-lng","icon"]))),128)),(u(!0),h(k,null,O(this.NewPoints,i=>(u(),b(A,{class:"mark","lat-lng":[i.geometry.coordinates[1],i.geometry.coordinates[0]],key:i[0],icon:this.iconB},{default:m(()=>[p(f,null,{default:m(()=>[g(" Address: "+d(i.properties.address)+"\\n Lat: "+d(i.geometry.coordinates[1])+" Long: "+d(i.geometry.coordinates[0]),1)]),_:2},1024)]),_:2},1032,["lat-lng","icon"]))),128)),p(C)]),_:1},8,["center"])])}var K=x(q,[["render",W]]);const w=c=>(j("data-v-76ebe728"),c=c(),z(),c),Q=["checked"],X=g(" Show Existing/Built "),Y=["checked"],Z=g(" Show Temporarily Disabled "),ee=g(" Show Operational "),oe=w(()=>a("br",null,null,-1)),te=g(" Show Generated "),ne=w(()=>a("br",null,null,-1)),se=w(()=>a("p",null,"Amount To Generate",-1)),re=w(()=>a("p",null,"Charger Types:",-1)),ae=$({props:{showExisting:{type:Boolean},showDisabled:{type:Boolean},showGenerated:{type:Boolean},showOperational:{type:Boolean},amountToGenerate:null,chargers:null},emits:["data"],setup(c){const r=c;let l=["NEMA1450","NEMA515","NEMA520","J1772","J1772COMBO","CHADEMO","TESLA"],t=y({showExisting:r.showExisting,showDisabled:r.showDisabled,showGenerated:r.showGenerated,showOperational:r.showOperational,amountToGenerate:r.amountToGenerate,chargers:r.chargers});return(n,e)=>(u(),h("main",null,[a("p",null,[a("input",{type:"checkbox",value:"Existing",onChange:e[0]||(e[0]=o=>n.$emit("data",s(t))),checked:s(t).showExisting},null,40,Q),X]),a("p",null,[a("input",{type:"checkbox",value:"Disabled",onChange:e[1]||(e[1]=o=>n.$emit("data",s(t))),checked:s(t).showDisabled},null,40,Y),Z]),a("p",null,[v(a("input",{type:"checkbox",value:"Operational",onChange:e[2]||(e[2]=o=>n.$emit("data",s(t))),"onUpdate:modelValue":e[3]||(e[3]=o=>s(t).showOperational=o)},null,544),[[E,s(t).showOperational]]),ee]),oe,a("p",null,[v(a("input",{type:"checkbox",value:"Generated",onChange:e[4]||(e[4]=o=>n.$emit("data",s(t))),"onUpdate:modelValue":e[5]||(e[5]=o=>s(t).showGenerated=o)},null,544),[[E,s(t).showGenerated]]),te]),ne,v(a("input",{type:"number",class:"inpField",onChange:e[6]||(e[6]=o=>n.$emit("data",s(t))),"onUpdate:modelValue":e[7]||(e[7]=o=>s(t).amountToGenerate=o)},null,544),[[V,s(t).amountToGenerate,void 0,{number:!0}]]),se,re,(u(!0),h(k,null,O(s(l),o=>(u(),h("p",{key:o},[g(d(o),1),a("input",{type:"checkbox",class:"inpField",onChange:e[8]||(e[8]=f=>{n.$emit("data",s(t)),n.console.log(f)})},null,32)]))),128))]))}});var le=x(ae,[["__scopeId","data-v-76ebe728"]]);const ie={class:"cont"},ce=$({setup(c){let r=y([]),l=y([]),t=y({showExisting:!0,showDisabled:!0,showGenerated:!1,showOperational:!0,amountToGenerate:10,chargers:["NEMA1450","NEMA515","NEMA520","J1772","J1772COMBO","CHADEMO","TESLA"]});n(t.value);function n(e){console.log(t.value),console.log(e),fetch("https://96d2-68-196-246-133.ngrok.io/existing-chargers").then(o=>(console.log(o),o.json())).then(o=>{console.log(o,"gst"),r.value=o.features,console.log(r.value)}),e.showGenerated?fetch("https://96d2-68-196-246-133.ngrok.io/recommended-chargers?quantity="+e.amountToGenerate).then(o=>(console.log(o),o.json())).then(o=>{console.log(o,"ok"),l.value=o,console.log(r.value)}):l.value=[]}return fetch("https://96d2-68-196-246-133.ngrok.io/existing-chargers").then(e=>(console.log(e),e.json())).then(e=>{console.log(e,"idk")}),console.log(l.value),(e,o)=>(u(),h("main",null,[p(K,{OldPoints:s(r),NewPoints:s(l),class:"map"},null,8,["OldPoints","NewPoints"]),a("div",ie,[p(le,{"amount-to-generate":s(t).amountToGenerate,"show-disabled":s(t).showDisabled,chargers:s(t).chargers,onData:n,"show-operational":s(t).showOperational,"show-existing":s(t).showExisting,"show-generated":s(t).showGenerated,class:"obj"},null,8,["amount-to-generate","show-disabled","chargers","show-operational","show-existing","show-generated"])])]))}});var ue=x(ce,[["__scopeId","data-v-a780f366"]]);const de=I({history:F("/WindsorCharging/"),routes:[{path:"/",name:"home",component:ue}]}),G=H(J);G.use(de);G.mount("#app");