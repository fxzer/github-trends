import{n as p,o as t,c as s,a as r,t as i,s as u,z as n,b as a,A as l}from"./entry.cf869030.js";import{_ as h}from"./IconText.vue.495ad367.js";function U(o){return Number(o.replace(",",""))}function V(o){return JSON.parse(JSON.stringify(o))}function F(o){return o<1024?`${o}KB`:o<1024*1024?`${(o/1024).toFixed(2)}MB`:`${(o/1024/1024).toFixed(2)}GB`}const f=["href"],g=["href"],c="https://github.com/",I=p({__name:"Title",props:{color:{},owner:{},name:{}},setup(o){return(e,d)=>(t(),s("div",{style:u({color:e.color}),"break-words":"",text:"lg md:2xl"},[r("a",{href:`${c}${e.owner}`,target:"_blank","hover:text-purple":""},i(e.owner)+"/",9,f),r("a",{href:`${c}${e.owner}/${e.name}`,target:"_blank","hover:text-purple":""},i(e.name),9,g)],4))}}),$=""+globalThis.__publicAssetsURL("rank/1.svg"),b=""+globalThis.__publicAssetsURL("rank/2.svg"),k=""+globalThis.__publicAssetsURL("rank/3.svg"),x={"overflow-hidden":"",flex:"center shrink-0",w:"10 sm:15 lg:20"},v={key:0,src:$,alt:"1","wh-full":""},w={key:1,src:b,alt:"2","wh-full":""},y={key:2,src:k,alt:"3","wh-full":""},N={key:3,class:"text-slate","font-bold":"",text:"xl md:3xl"},B=p({__name:"Num",props:{index:{}},setup(o){return(e,d)=>(t(),s("div",x,[e.index===0?(t(),s("img",v)):n("",!0),e.index===1?(t(),s("img",w)):n("",!0),e.index===2?(t(),s("img",y)):n("",!0),e.index>2?(t(),s("span",N,i(e.index+1),1)):n("",!0)]))}}),S={flex:"","overflow-hidden":"","rounded-md":"","p-1":"","space-x":"2 md:4",border:"~ gray/40 hover:blue"},T={"min-w-0":"","flex-1":""},A={"my-1":"",text:"xs zinc",clamp:"3 md:2"},R={flex:"","transform-origin-lc":"","gap-6":"","text-zinc":"","lt-md:scale-80":""},J=p({__name:"Item",props:{index:{},repo:{}},setup(o){return(e,d)=>{const _=B,m=h;return t(),s("div",S,[a(_,{index:e.index},null,8,["index"]),r("div",T,[r("div",null,[l(e.$slots,"title",{repo:e.repo}),r("p",A,i(e.repo.description),1)]),r("div",R,[a(m,{title:"star","icon-name":"material-symbols:kid-star-outline-sharp",text:e.repo.stars},null,8,["text"]),a(m,{title:"fork","icon-name":"charm:git-fork",text:e.repo.forks},null,8,["text"]),l(e.$slots,"icons",{repo:e.repo})])]),l(e.$slots,"trendsvg",{repo:e.repo})])}}});export{I as _,J as a,V as d,F as f,U as s};
