import{A as E,B as y,C as N,n as p,D as w,E as d,o as a,c as f,G as i,H as T,u as c,I as z,J as x,r as F,g as O,s as h,x as b,w as D,K as J,L,a as l,t as v,b as _}from"./entry.08de56b3.js";import{i as g,a as V,b as j,_ as B}from"./constants.2bedef21.js";import{_ as G}from"./OrderNum.vue.4e5d244d.js";import{_ as K}from"./IconText.vue.09285abe.js";function C(e,r="px"){if(!e)return"";if(g(e)||V(e))return`${e}${r}`;if(E(e))return e}const U=y([String,Object,Function]),q=N({size:{type:y([Number,String])},color:{type:String}}),H=p({name:"ElIcon",inheritAttrs:!1}),M=p({...H,props:q,setup(e){const r=e,n=w("icon"),o=d(()=>{const{size:s,color:u}=r;return!s&&!u?{}:{fontSize:j(s)?void 0:C(s),"--color":u}});return(s,u)=>(a(),f("i",T({class:c(n).b(),style:c(o)},s.$attrs),[i(s.$slots,"default")],16))}});var Q=B(M,[["__file","icon.vue"]]);const R=z(Q),W=N({size:{type:[Number,String],values:x,default:"",validator:e=>g(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:U},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:y(String),default:"cover"}}),X={error:e=>e instanceof Event},Y=["src","alt","srcset"],Z=p({name:"ElAvatar"}),ee=p({...Z,props:W,emits:X,setup(e,{emit:r}){const n=e,o=w("avatar"),s=F(!1),u=d(()=>{const{size:t,icon:$,shape:S}=n,m=[o.b()];return E(t)&&m.push(o.m(t)),$&&m.push(o.m("icon")),S&&m.push(o.m(S)),m}),I=d(()=>{const{size:t}=n;return g(t)?o.cssVarBlock({size:C(t)||""}):void 0}),A=d(()=>({objectFit:n.fit}));O(()=>n.src,()=>s.value=!1);function P(t){s.value=!0,r("error",t)}return(t,$)=>(a(),f("span",{class:L(c(u)),style:h(c(I))},[(t.src||t.srcSet)&&!s.value?(a(),f("img",{key:0,src:t.src,alt:t.alt,srcset:t.srcSet,style:h(c(A)),onError:P},null,44,Y)):t.icon?(a(),b(c(R),{key:1},{default:D(()=>[(a(),b(J(t.icon)))]),_:1})):i(t.$slots,"default",{key:2})],6))}});var re=B(ee,[["__file","avatar.vue"]]);const fe=z(re);function me(e){return Number(e.replace(",",""))}function de(e){return JSON.parse(JSON.stringify(e))}function _e(e){return e<1024?`${e}KB`:e<1024*1024?`${(e/1024).toFixed(2)}MB`:`${(e/1024/1024).toFixed(2)}GB`}const te=["href"],se=["href"],k="https://github.com/",he=p({__name:"Title",props:{color:{},owner:{},name:{}},setup(e){return(r,n)=>(a(),f("div",{style:h({color:r.color}),"break-words":"",text:"lg md:2xl"},[l("a",{href:`${k}${r.owner}`,target:"_blank","hover:text-purple":""},v(r.owner)+"/",9,te),l("a",{href:`${k}${r.owner}/${r.name}`,target:"_blank","hover:text-purple":""},v(r.name),9,se)],4))}}),oe={relative:"",flex:"","overflow-hidden":"","rounded-md":"",p:"x-2 y-1","space-x":"2 md:4",border:"~ gray/40 hover:blue"},ne={"min-w-0":"","flex-1":""},ae={"my-1":"",text:"xs zinc",clamp:"3 md:2"},ie={flex:"","transform-origin-lc":"","gap-6":"","text-zinc":"","lt-md:scale-80":""},ve=p({__name:"Item",props:{index:{},repo:{}},setup(e){return(r,n)=>{const o=G,s=K;return a(),f("div",oe,[_(o,{index:r.index},null,8,["index"]),i(r.$slots,"avatar",{repo:r.repo}),l("div",ne,[l("div",null,[i(r.$slots,"title",{repo:r.repo}),l("p",ae,v(r.repo.description),1)]),l("div",ie,[_(s,{title:"star","icon-name":"material-symbols:kid-star-outline-sharp",text:r.repo.stars},null,8,["text"]),_(s,{title:"fork","icon-name":"charm:git-fork",text:r.repo.forks},null,8,["text"]),i(r.$slots,"icons",{repo:r.repo})])]),i(r.$slots,"trendsvg",{repo:r.repo})])}}});export{fe as E,he as _,ve as a,de as d,_e as f,me as s};
