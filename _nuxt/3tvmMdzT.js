import{_ as T}from"./B9rcTEhu.js";import D from"./AT4OF_b2.js";import{n as A,r as C,V as M,x as V,c as h,I as w,Y as B,M as $,X as E,O as H,o as m,a as n,F as N,G as O,b as d,w as g,d as S,t as f,H as z,y as u,A as x}from"./CSNMmE51.js";const F=Symbol.for("nuxt:client-only"),G=A({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(i,{slots:e,attrs:a}){const s=C(!1);return M(()=>{s.value=!0}),V(F,!0),o=>{var r;if(s.value)return(r=e.default)==null?void 0:r.call(e);const t=e.fallback||e.placeholder;if(t)return t();const c=o.fallback||o.placeholder||"",p=o.fallbackTag||o.placeholderTag||"span";return h(p,a,c)}}}),_=w(),k=B(_),L=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function b(i){if(!L||!i){k();return}const e=i.clientX,a=i.clientY,s=Math.hypot(Math.max(e,innerWidth-e),Math.max(a,innerHeight-a));(document==null?void 0:document.startViewTransition(async()=>{k(),await $()})).ready.then(()=>{const t=[`circle(0px at ${e}px ${a}px)`,`circle(${s}px at ${e}px ${a}px)`];document==null||document.documentElement.animate({clipPath:_.value?[...t].reverse():t},{duration:400,easing:"ease-in",pseudoElement:_.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}const R=E("/favicon.svg"),I="2024-06-09 16:23:07",P={"flex-between-center":"","py-4":"",text:"center dark:white",border:"b gray/40"},X=n("img",{src:R,alt:"logo",wh:"8 md:10"},null,-1),Y={class:"relative"},U={"flex-between-center":"","gap-5":"","font-bold":"","md:gap-10":"",text:"xl sm:2xl"},W={absolute:"","left-0":"","right-0":"","mx-auto":"","whitespace-nowrap":"",text:"xs gray/80"},j={flex:"","space-x-4":""},q={rel:"noreferrer",href:"https://github.com/fxzer/github-trends",target:"_blank",title:"GitHub"},J={rel:"noreferrer",href:"https://gitee.com/fxzer/github-trends",target:"_blank",title:"Gitee"},ee={__name:"Header",setup(i){const e=w(),a=H();function s(t){return a.path===t?"text-primary":""}const o=[{path:"/",text:"趋势"},{path:"/repo",text:"仓库"},{path:"/user",text:"用户"}];return(t,c)=>{const p=T,r=D,y=G;return m(),h("header",P,[X,n("div",Y,[n("nav",U,[(m(),h(N,null,O(o,(l,v)=>d(p,{key:v,to:l.path,class:z(s(l.path))},{default:g(()=>[S(f(l.text),1)]),_:2},1032,["to","class"])),64))]),n("p",W," 最近更新： "+f(u(I)),1)]),n("div",j,[n("span",{"cursor-pointer":"",onClick:c[0]||(c[0]=(...l)=>("toggleDarkAnimate"in t?t.toggleDarkAnimate:u(b))&&("toggleDarkAnimate"in t?t.toggleDarkAnimate:u(b))(...l))},[d(y,null,{default:g(()=>[u(e)?(m(),x(r,{key:1,name:"solar:moon-sleep-bold","md:wh-6":""})):(m(),x(r,{key:0,name:"material-symbols:light-mode",color:"#FCBE34","md:wh-6":"","scale-120":""}))]),_:1})]),n("a",q,[d(r,{name:"simple-icons:github","md:wh-6":""})]),n("a",J,[d(r,{name:"simple-icons:gitee",color:"#D90713","md:wh-6":"","scale-110":""})])])])}}};export{ee as default};