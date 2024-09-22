import{_ as U}from"./aXmjcqu8.js";import{_ as B}from"./DI4cwR1l.js";import P from"./DVUqlKip.js";import{_ as q}from"./DlPU9I-3.js";import{_ as L}from"./CzvHX36j.js";import{_ as W}from"./MZViiPIK.js";import{s as M,u as H,a as j,b as G,c as K}from"./BzGqWq7z.js";import{m as N,n as D,g as x,o as m,c as T,p as F,r as _,s as J,u as z,z as Q,b as c,w as k,A as V,B as R,v as s,T as Y,a as X,C as S,x as $,y as C,D as Z}from"./CDB1SjQB.js";import ee from"./mUgE3HSv.js";import{f as ae}from"./C9QiLSHs.js";import"./BP73QPO3.js";import"./p2-M2djV.js";import"./B8QxxG2b.js";import"./C2qm4H3e.js";import"./Ds64Udle.js";const te=N({__name:"Chart",setup(O){const a=D("data"),r=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"}].map(M),u=H("仓库人气榜",r),{domRef:l}=j(u,G);function p(n){const[d,h,g]=n.reduce((e,t)=>(e[0].unshift(t.stars),e[1].unshift(t.forks),e[2].unshift(t.full_name),e),[[],[],[],[]]);u.value.yAxis.data=g,u.value.series[0].data=d,u.value.series[1].data=h}x(a,()=>{p(a.value)},{deep:!0,immediate:!0});const y=`${100+a.value.length*40}px`;return(n,d)=>(m(),T("div",{ref_key:"chartRef",ref:l,style:F({height:y})},null,4))}}),oe={"flex-center":"",class:"h-[calc(100vh-150px)]"},ye=N({__name:"repo",setup(O){const{view:a,language:r,color:u}=K(),l=_([]),p=_({endCursor:"",hasNextPage:!1}),y=J(()=>`query {
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
}`),n=_(!1);async function d(){const t={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36",Accept:"application/json",Authorization:`bearer ${Z().public.VITE_GITHUB_ACCESS_TOKEN}`},w="https://api.github.com/graphql";try{const i=await fetch(w,{method:"POST",headers:t,body:JSON.stringify({query:y.value})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const{data:v}=await i.json();return p.value=v.search.pageInfo,v.search.edges.map(o=>({...o.node,avatar:o.node.owner.avatarUrl,forks:o.node.forkCount,stars:o.node.stargazerCount,owner:o.node.owner.login,name:o.node.name,size:o.node.diskUsage,full_name:o.node.nameWithOwner}))}catch(i){console.error("Error fetching data:",i)}return[]}const h=_(!1);x(r,async()=>{n.value=!0,l.value=await d(),n.value=!1},{immediate:!0}),x(h,async e=>{!e||n.value||!p.value.hasNextPage||(l.value=l.value.concat(await d()))}),z("data",l),z("color",u);const g=_(null);return Q(g,async([{isIntersecting:e}])=>{h.value=e}),(e,t)=>{const w=U,i=B,v=P,o=q,A=L,E=W,I=te,b=ee;return m(),T("div",null,[c(v,null,{default:k(()=>[c(w,{modelValue:s(r),"onUpdate:modelValue":t[0]||(t[0]=f=>$(r)?r.value=f:null)},null,8,["modelValue"]),c(i,{modelValue:s(a),"onUpdate:modelValue":t[1]||(t[1]=f=>$(a)?a.value=f:null)},null,8,["modelValue"])]),_:1}),V(c(Y,{name:"fade-top",mode:"out-in"},{default:k(()=>[s(a)==="list"?(m(),C(A,{key:0},{icons:k(({repo:f})=>[c(o,{title:"size","icon-name":"fluent:table-resize-column-24-regular",text:("formatSize"in e?e.formatSize:s(ae))(f.size)},null,8,["text"])]),_:1})):s(a)==="table"?(m(),C(E,{key:1})):s(a)==="chart"&&s(l).length?(m(),C(I,{key:2})):S("",!0)]),_:1},512),[[R,!s(n)]]),V(X("div",oe,[c(b,{name:"svg-spinners:6-dots-scale","wh-8":"",class:"text-gray"})],512),[[R,s(n)]]),s(a).includes("chart")?S("",!0):(m(),T("div",{key:0,ref_key:"loadMoreRef",ref:g,"text-center":""},[c(b,{name:"svg-spinners:3-dots-scale","wh-8":"",class:"text-gray"})],512))])}}});export{ye as default};
