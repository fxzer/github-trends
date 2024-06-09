import{_ as I}from"./D_XwQrbY.js";import{_ as B}from"./BTU5hv3H.js";import P from"./bWQQP_s4.js";import{_ as q}from"./BQsLXCdi.js";import{_ as L}from"./CD9QaK01.js";import{_ as M}from"./HdIMqzHh.js";import{s as W,u as D,a as H,b as j,c as G}from"./DiFTYIW4.js";import{n as O,q as K,h as x,o as m,c as T,s as F,r as _,v as J,x as R,B as Q,b as c,w as k,C as S,D as V,y as s,T as Y,a as X,E as b,z as E,A as C}from"./CrmNvZfK.js";import Z from"./BKmiUL6_.js";import{f as ee}from"./C9QiLSHs.js";import"./BPbBE93T.js";import"./p2-M2djV.js";import"./D5a-Ti7Q.js";import"./pi7aweyS.js";import"./BVyS9--q.js";const ae=O({__name:"Chart",setup($){const a=K("data"),r=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"}].map(W),u=D("仓库人气榜",r),{domRef:l}=H(u,j);function d(n){const[f,h,g]=n.reduce((e,t)=>(e[0].unshift(t.stars),e[1].unshift(t.forks),e[2].unshift(t.full_name),e),[[],[],[],[]]);u.value.yAxis.data=g,u.value.series[0].data=f,u.value.series[1].data=h}x(a,()=>{d(a.value)},{deep:!0,immediate:!0});const y=`${100+a.value.length*40}px`;return(n,f)=>(m(),T("div",{ref_key:"chartRef",ref:l,style:F({height:y})},null,4))}});var te={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const oe={"flex-center":"",class:"h-[calc(100vh-150px)]"},ye=O({__name:"repo",setup($){const{view:a,language:r,color:u}=G(),l=_([]),d=_({endCursor:"",hasNextPage:!1}),y=J(()=>`query {
  search(query: "stars:>1000 language:${r.value}", type: REPOSITORY, first: 20, after: "${d.value.endCursor}") {
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
}`),n=_(!1);async function f(){const t={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36",Accept:"application/json",Authorization:`bearer ${te.VITE_GITHUB_ACCESS_TOKEN}`},w="https://api.github.com/graphql";try{const i=await fetch(w,{method:"POST",headers:t,body:JSON.stringify({query:y.value})});if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const{data:v}=await i.json();return d.value=v.search.pageInfo,v.search.edges.map(o=>({...o.node,avatar:o.node.owner.avatarUrl,forks:o.node.forkCount,stars:o.node.stargazerCount,owner:o.node.owner.login,name:o.node.name,size:o.node.diskUsage,full_name:o.node.nameWithOwner}))}catch(i){console.error("Error fetching data:",i)}return[]}const h=_(!1);x(r,async()=>{n.value=!0,l.value=await f(),n.value=!1},{immediate:!0}),x(h,async e=>{!e||n.value||!d.value.hasNextPage||(l.value=l.value.concat(await f()))}),R("data",l),R("color",u);const g=_(null);return Q(g,async([{isIntersecting:e}])=>{h.value=e}),(e,t)=>{const w=I,i=B,v=P,o=q,A=L,N=M,U=ae,z=Z;return m(),T("div",null,[c(v,null,{default:k(()=>[c(w,{modelValue:s(r),"onUpdate:modelValue":t[0]||(t[0]=p=>E(r)?r.value=p:null)},null,8,["modelValue"]),c(i,{modelValue:s(a),"onUpdate:modelValue":t[1]||(t[1]=p=>E(a)?a.value=p:null)},null,8,["modelValue"])]),_:1}),S(c(Y,{name:"fade-top",mode:"out-in"},{default:k(()=>[s(a)==="list"?(m(),C(A,{key:0},{icons:k(({repo:p})=>[c(o,{title:"size","icon-name":"fluent:table-resize-column-24-regular",text:("formatSize"in e?e.formatSize:s(ee))(p.size)},null,8,["text"])]),_:1})):s(a)==="table"?(m(),C(N,{key:1})):s(a)==="chart"&&s(l).length?(m(),C(U,{key:2})):b("",!0)]),_:1},512),[[V,!s(n)]]),S(X("div",oe,[c(z,{name:"svg-spinners:6-dots-scale","wh-8":"",class:"text-gray"})],512),[[V,s(n)]]),s(a).includes("chart")?b("",!0):(m(),T("div",{key:0,ref_key:"loadMoreRef",ref:g,"text-center":""},[c(z,{name:"svg-spinners:3-dots-scale","wh-8":"",class:"text-gray"})],512))])}}});export{ye as default};
