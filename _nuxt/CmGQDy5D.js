import{_ as f}from"./DMGxbn9c.js";import{G as b,W as k,K as _,V as w,M as v,o as p,c as u,a as e,F as y,E as D,b as A,w as T,d as V,t as d,z as M,v as l}from"./BgOG_KB7.js";const c=b(),m=k(c),$=document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches;function g(r){if(!$||!r){m();return}const n=r.clientX,s=r.clientY,i=Math.hypot(Math.max(n,innerWidth-n),Math.max(s,innerHeight-s));(document==null?void 0:document.startViewTransition(async()=>{m(),await _()})).ready.then(()=>{const t=[`circle(0px at ${n}px ${s}px)`,`circle(${i}px at ${n}px ${s}px)`];document==null||document.documentElement.animate({clipPath:c.value?[...t].reverse():t},{duration:400,easing:"ease-in",pseudoElement:c.value?"::view-transition-old(root)":"::view-transition-new(root)"})})}const z=w("/favicon.svg"),E="2024-09-22 11:58:26",N={"flex-between-center":"","py-4":"",text:"center dark:white",border:"b gray/40"},B={class:"relative"},C={"flex-between-center":"","gap-5":"","font-bold":"","md:gap-10":"",text:"xl sm:2xl"},G={absolute:"","left-0":"","right-0":"","mx-auto":"","whitespace-nowrap":"",text:"xs gray/80"},H={flex:"","text-xl":"","space-x-4":""},F={__name:"Header",setup(r){const n=v();function s(a){return n.path===a?"text-primary":""}const i=[{path:"/",text:"趋势"},{path:"/repo",text:"仓库"},{path:"/user",text:"用户"}];return(a,t)=>{const x=f;return p(),u("header",N,[t[3]||(t[3]=e("img",{src:z,alt:"logo",wh:"8 md:10"},null,-1)),e("div",B,[e("nav",C,[(p(),u(y,null,D(i,(o,h)=>A(x,{key:h,to:o.path,class:M(s(o.path))},{default:T(()=>[V(d(o.text),1)]),_:2},1032,["to","class"])),64))]),e("p",G," 最近更新： "+d(l(E)),1)]),e("div",H,[e("button",{class:"i-material-symbols:light-mode dark:i-solar:moon-sleep-bold text-amber",onClick:t[0]||(t[0]=(...o)=>("toggleDarkAnimate"in a?a.toggleDarkAnimate:l(g))&&("toggleDarkAnimate"in a?a.toggleDarkAnimate:l(g))(...o))}),t[1]||(t[1]=e("a",{rel:"noreferrer",href:"https://github.com/fxzer/github-trends",target:"_blank",title:"GitHub",class:"i-simple-icons:github"},null,-1)),t[2]||(t[2]=e("a",{rel:"noreferrer",href:"https://gitee.com/fxzer/github-trends",target:"_blank",title:"Gitee",class:"i-simple-icons:gitee text-#D90713"},null,-1))])])}}};export{F as default};
