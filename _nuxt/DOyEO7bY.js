import{_ as y}from"./3qefEb0j.js";import D from"./BtwW2rUH.js";import{E as k,a6 as A,J as T,a3 as C,a7 as E,o as u,c as h,a as e,F as V,y as $,b as s,w as B,d as M,t as _,Y as N,v as r,C as g,a8 as x}from"./BsRjMrBZ.js";import"./CvPl5tTm.js";const m=k(),f=A(m),z=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function w(i){if(!z||!i){f();return}const a=i.clientX,n=i.clientY,l=Math.hypot(Math.max(a,innerWidth-a),Math.max(n,innerHeight-n));(document==null?void 0:document.startViewTransition(async()=>{f(),await T()})).ready.then(()=>{const t=[`circle(0px at ${a}px ${n}px)`,`circle(${l}px at ${a}px ${n}px)`];document==null||document.documentElement.animate({clipPath:m.value?[...t].reverse():t},{duration:400,easing:"ease-in",pseudoElement:m.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}const F=C("/favicon.svg"),H="2024-04-24 15:12:55",L={"flex-between-center":"","py-4":"",text:"center dark:white",border:"b gray/40"},R=e("img",{src:F,alt:"logo",wh:"8 md:10"},null,-1),G={class:"relative"},P={"flex-between-center":"","gap-5":"","font-bold":"","md:gap-10":"",text:"xl sm:2xl"},S={absolute:"","left-0":"","right-0":"","mx-auto":"","whitespace-nowrap":"",text:"xs gray/80"},Y={flex:"","space-x-4":""},I={rel:"noreferrer",href:"https://github.com/fxzer/github-trends",target:"_blank",title:"GitHub"},J={rel:"noreferrer",href:"https://gitee.com/fxzer/github-trends",target:"_blank",title:"Gitee"},q={__name:"Header",setup(i){const a=k(),n=E();function l(t){return n.path===t?"text-primary":""}const p=[{path:"/",text:"趋势"},{path:"/repo",text:"仓库"},{path:"/user",text:"用户"}];return(t,d)=>{const b=y,c=D;return u(),h("header",L,[R,e("div",G,[e("nav",P,[(u(),h(V,null,$(p,(o,v)=>s(b,{key:v,to:o.path,class:N(l(o.path))},{default:B(()=>[M(_(o.text),1)]),_:2},1032,["to","class"])),64))]),e("p",S," 最近更新： "+_(r(H)),1)]),e("div",Y,[e("span",{"cursor-pointer":"",onClick:d[0]||(d[0]=(...o)=>("toggleDarkAnimate"in t?t.toggleDarkAnimate:r(w))&&("toggleDarkAnimate"in t?t.toggleDarkAnimate:r(w))(...o))},[g(s(c,{name:"material-symbols:light-mode",color:"#FCBE34","md:wh-6":"","scale-120":""},null,512),[[x,!r(a)]]),g(s(c,{name:"solar:moon-sleep-bold","md:wh-6":""},null,512),[[x,r(a)]])]),e("a",I,[s(c,{name:"simple-icons:github","md:wh-6":""})]),e("a",J,[s(c,{name:"simple-icons:gitee",color:"#D90713","md:wh-6":"","scale-110":""})])])])}}};export{q as default};
