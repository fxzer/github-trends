import{_ as P}from"./BFOIiOqf.js";import{_ as S}from"./DUE63FEF.js";import E from"./BXwgOjBx.js";import{_ as q}from"./COIJIm3u.js";import{_ as B}from"./Rh9HGYdn.js";import{_ as W}from"./BdsPoJBM.js";import{s as D,u as H,a as M,b as j,c as Y}from"./BVilVzSl.js";import{n as L,q as F,h as C,o as m,c as b,s as G,r as _,v as K,x as A,B as J,b as c,w as k,C as z,D as R,y as s,T as Q,a as X,E as V,z as $,A as x}from"./B-hTl36b.js";import Z from"./DOg3HTZf.js";import{f as ee}from"./C9QiLSHs.js";import"./Y8nkRdB1.js";import"./p2-M2djV.js";import"./Zd5sUULV.js";import"./BFC2DkeJ.js";import"./Bq_8x_Yj.js";const ae=L({__name:"Chart",setup(N){const a=F("data"),r=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"}].map(D),u=H("仓库人气榜",r),{domRef:l}=M(u,j);function p(n){const[d,h,g]=n.reduce((e,t)=>(e[0].unshift(t.stars),e[1].unshift(t.forks),e[2].unshift(t.full_name),e),[[],[],[],[]]);u.value.yAxis.data=g,u.value.series[0].data=d,u.value.series[1].data=h}C(a,()=>{p(a.value)},{deep:!0,immediate:!0});const y=`${100+a.value.length*40}px`;return(n,d)=>(m(),b("div",{ref_key:"chartRef",ref:l,style:G({height:y})},null,4))}}),te={"flex-center":"",class:"h-[calc(100vh-150px)]"},ve=L({__name:"repo",setup(N){const{view:a,language:r,color:u}=Y(),l=_([]),p=_({endCursor:"",hasNextPage:!1}),y=K(()=>`query {
  search(query: "stars:>1000 language:${r.value}", type: REPOSITORY, first: 20, after: "${p.value.endCursor}") {
    repositoryCount
    edges {
      node {
        ... on Repository {
          id
          name
          url
          createdAt
          homepageUrl
          nameWithOwner
          stargazerCount
          forkCount
          diskUsage
          issues(states: OPEN) {
            totalCount
          }
          owner {
            id
            login
            url
            avatarUrl
          }
          stargazerCount
          primaryLanguage {
            name
          }
          description
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`),n=_(!1);async function d(){const e="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";console.log("[ accessToken ]-52",e);const t={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36",Accept:"application/json",Authorization:`bearer ${e}`},w="https://api.github.com/graphql";try{const i=await fetch(w,{method:"POST",headers:t,body:JSON.stringify({query:y.value})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const{data:v}=await i.json();return p.value=v.search.pageInfo,v.search.edges.map(o=>({...o.node,avatar:o.node.owner.avatarUrl,forks:o.node.forkCount,stars:o.node.stargazerCount,owner:o.node.owner.login,name:o.node.name,size:o.node.diskUsage,full_name:o.node.nameWithOwner}))}catch(i){console.error("Error fetching data:",i)}return[]}const h=_(!1);C(r,async()=>{n.value=!0,l.value=await d(),n.value=!1},{immediate:!0}),C(h,async e=>{!e||n.value||!p.value.hasNextPage||(l.value=l.value.concat(await d()))}),A("data",l),A("color",u);const g=_(null);return J(g,async([{isIntersecting:e}])=>{h.value=e}),(e,t)=>{const w=P,i=S,v=E,o=q,O=B,U=W,I=ae,T=Z;return m(),b("div",null,[c(v,null,{default:k(()=>[c(w,{modelValue:s(r),"onUpdate:modelValue":t[0]||(t[0]=f=>$(r)?r.value=f:null)},null,8,["modelValue"]),c(i,{modelValue:s(a),"onUpdate:modelValue":t[1]||(t[1]=f=>$(a)?a.value=f:null)},null,8,["modelValue"])]),_:1}),z(c(Q,{name:"fade-top",mode:"out-in"},{default:k(()=>[s(a)==="list"?(m(),x(O,{key:0},{icons:k(({repo:f})=>[c(o,{title:"size","icon-name":"fluent:table-resize-column-24-regular",text:("formatSize"in e?e.formatSize:s(ee))(f.size)},null,8,["text"])]),_:1})):s(a)==="table"?(m(),x(U,{key:1})):s(a)==="chart"&&s(l).length?(m(),x(I,{key:2})):V("",!0)]),_:1},512),[[R,!s(n)]]),z(X("div",te,[c(T,{name:"svg-spinners:6-dots-scale","wh-8":"",class:"text-gray"})],512),[[R,s(n)]]),s(a).includes("chart")?V("",!0):(m(),b("div",{key:0,ref_key:"loadMoreRef",ref:g,"text-center":""},[c(T,{name:"svg-spinners:3-dots-scale","wh-8":"",class:"text-gray"})],512))])}}});export{ve as default};
