import{_ as T}from"./DiIWB7u6.js";import D from"./QuKFH3nI.js";import{n as A,r as C,L as B,W as M,c as h,G as w,X as V,K as $,O as z,Y as E,o as m,a as n,F as L,v as N,b as d,w as g,d as O,t as f,R,z as u,y as x}from"./DY1MQy9F.js";import"./BQkc-AXV.js";const S=Symbol.for("nuxt:client-only"),F=A({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(i,{slots:e,attrs:a}){const s=C(!1);return B(()=>{s.value=!0}),M(S,!0),o=>{var r;if(s.value)return(r=e.default)==null?void 0:r.call(e);const t=e.fallback||e.placeholder;if(t)return t();const c=o.fallback||o.placeholder||"",p=o.fallbackTag||o.placeholderTag||"span";return h(p,a,c)}}}),_=w(),k=V(_),G=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function b(i){if(!G||!i){k();return}const e=i.clientX,a=i.clientY,s=Math.hypot(Math.max(e,innerWidth-e),Math.max(a,innerHeight-a));(document==null?void 0:document.startViewTransition(async()=>{k(),await $()})).ready.then(()=>{const t=[`circle(0px at ${e}px ${a}px)`,`circle(${s}px at ${e}px ${a}px)`];document==null||document.documentElement.animate({clipPath:_.value?[...t].reverse():t},{duration:400,easing:"ease-in",pseudoElement:_.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}const H=z("/favicon.svg"),P="2024-06-08 18:41:21",W={"flex-between-center":"","py-4":"",text:"center dark:white",border:"b gray/40"},X=n("img",{src:H,alt:"logo",wh:"8 md:10"},null,-1),Y={class:"relative"},I={"flex-between-center":"","gap-5":"","font-bold":"","md:gap-10":"",text:"xl sm:2xl"},K={absolute:"","left-0":"","right-0":"","mx-auto":"","whitespace-nowrap":"",text:"xs gray/80"},U={flex:"","space-x-4":""},j={rel:"noreferrer",href:"https://github.com/fxzer/github-trends",target:"_blank",title:"GitHub"},q={rel:"noreferrer",href:"https://gitee.com/fxzer/github-trends",target:"_blank",title:"Gitee"},te={__name:"Header",setup(i){const e=w(),a=E();function s(t){return a.path===t?"text-primary":""}const o=[{path:"/",text:"趋势"},{path:"/repo",text:"仓库"},{path:"/user",text:"用户"}];return(t,c)=>{const p=T,r=D,y=F;return m(),h("header",W,[X,n("div",Y,[n("nav",I,[(m(),h(L,null,N(o,(l,v)=>d(p,{key:v,to:l.path,class:R(s(l.path))},{default:g(()=>[O(f(l.text),1)]),_:2},1032,["to","class"])),64))]),n("p",K," 最近更新： "+f(u(P)),1)]),n("div",U,[n("span",{"cursor-pointer":"",onClick:c[0]||(c[0]=(...l)=>("toggleDarkAnimate"in t?t.toggleDarkAnimate:u(b))&&("toggleDarkAnimate"in t?t.toggleDarkAnimate:u(b))(...l))},[d(y,null,{default:g(()=>[u(e)?(m(),x(r,{key:1,name:"solar:moon-sleep-bold","md:wh-6":""})):(m(),x(r,{key:0,name:"material-symbols:light-mode",color:"#FCBE34","md:wh-6":"","scale-120":""}))]),_:1})]),n("a",j,[d(r,{name:"simple-icons:github","md:wh-6":""})]),n("a",q,[d(r,{name:"simple-icons:gitee",color:"#D90713","md:wh-6":"","scale-110":""})])])])}}};export{te as default};
