import z from"./81vlkI3A.js";import D from"./XXXYFgAN.js";import O from"./Bsmy8er7.js";import G from"./D2bB-d1T.js";import P from"./DItbGDPo.js";import B from"./CMPWwTb0.js";import F from"./DwJflJzz.js";import{d as C}from"./KQwPfV-1.js";import{s as R,a as _,b as q,u as L,i as E,c as H}from"./DlpzfCX3.js";import{i as T,p as K,a5 as A,D as c,f as j,w as J,S as I,h as b,a6 as S,T as W,q as x,U as h,d as k,a as Y,H as V}from"./C3IyzVJe.js";import"./VdC5vJNR.js";import"./p2-M2djV.js";import"./DUu1-KIf.js";import"./OTtmENAV.js";import"./C6di0NgN.js";const $=T({__name:"Chart",setup(f){const r=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(R),s=_("趋势仓库总指标排行榜",o);function i(u){const a=C(u);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=q(s,L);A(r,()=>{i(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(u,a)=>(c(),j("div",{ref_key:"chartRef",ref:l,style:J({height:v})},null,4))}}),Q=Object.assign($,{__name:"TrendChart"}),U=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=I(r),i=_("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=q(i,L);function v(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));i.value.series[0].data=d,i.value.yAxis.data=m}A(o,()=>{v(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(c(),j("div",{ref_key:"chartRef",ref:l,style:J({height:u})},null,4))}}),N=Object.assign(U,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:89639,forks:6199,starup:694},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:59975,forks:20696,starup:268},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:306040,forks:45043,starup:1109},{title:`DeanChensj /

      jiangshan-map`,owner:"DeanChensj",name:"jiangshan-map",avatar:"https://avatars.githubusercontent.com/u/9414763?s=40&v=4",path:"/DeanChensj/jiangshan-map",ourl:"https://github.com/DeanChensj",url:"https://github.com/DeanChensj/jiangshan-map",description:"",language:"JavaScript",stars:7779,forks:940,starup:991},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:22651,forks:3009,starup:487},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:143721,forks:32815,starup:68},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109386,forks:12116,starup:202},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:118109,forks:7904,starup:822},{title:`qwdwqfwq /

      topconf-paper-figure-gallery`,owner:"qwdwqfwq",name:"topconf-paper-figure-gallery",avatar:"https://avatars.githubusercontent.com/u/166132677?s=40&v=4",path:"/qwdwqfwq/topconf-paper-figure-gallery",ourl:"https://github.com/qwdwqfwq",url:"https://github.com/qwdwqfwq/topconf-paper-figure-gallery",description:"",language:"JavaScript",stars:1884,forks:93,starup:84},{title:`pugarte7 /

      spanish-top-tech-companies`,owner:"pugarte7",name:"spanish-top-tech-companies",avatar:"https://avatars.githubusercontent.com/u/99680272?s=40&v=4",path:"/pugarte7/spanish-top-tech-companies",ourl:"https://github.com/pugarte7",url:"https://github.com/pugarte7/spanish-top-tech-companies",description:"",language:"JavaScript",stars:599,forks:21,starup:66},{title:`Minglink /

      dsh-infinite-gen-5`,owner:"Minglink",name:"dsh-infinite-gen-5",avatar:"https://avatars.githubusercontent.com/u/108618469?s=40&v=4",path:"/Minglink/dsh-infinite-gen-5",ourl:"https://github.com/Minglink",url:"https://github.com/Minglink/dsh-infinite-gen-5",description:"",language:"JavaScript",stars:4509,forks:626,starup:108},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:41301,forks:5381,starup:61}],"JavaScript-weekly":[{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:35248,forks:6770,starup:1340},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:61144,forks:8920,starup:1476},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:118815,forks:12383,starup:3884},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:59975,forks:20696,starup:384},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:94590,forks:8869,starup:1144},{title:`DeanChensj /

      jiangshan-map`,owner:"DeanChensj",name:"jiangshan-map",avatar:"https://avatars.githubusercontent.com/u/9414763?s=40&v=4",path:"/DeanChensj/jiangshan-map",ourl:"https://github.com/DeanChensj",url:"https://github.com/DeanChensj/jiangshan-map",description:"",language:"JavaScript",stars:7779,forks:940,starup:2397},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109386,forks:12116,starup:368},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:118109,forks:7904,starup:4805},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:89639,forks:6199,starup:1220},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:306041,forks:45043,starup:5311},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:252783,forks:52814,starup:764},{title:`GoogleChrome /

      lighthouse`,owner:"GoogleChrome",name:"lighthouse",avatar:"https://avatars.githubusercontent.com/u/4071474?s=40&v=4",path:"/GoogleChrome/lighthouse",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/lighthouse",description:"",language:"JavaScript",stars:31153,forks:9794,starup:116},{title:`saadeghi /

      daisyui`,owner:"saadeghi",name:"daisyui",avatar:"https://avatars.githubusercontent.com/u/7342023?s=40&v=4",path:"/saadeghi/daisyui",ourl:"https://github.com/saadeghi",url:"https://github.com/saadeghi/daisyui",description:"",language:"JavaScript",stars:42892,forks:1723,starup:101}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:75097,forks:5041,starup:44314},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:118109,forks:7904,starup:19688},{title:`rorygallagher2024 /

      glasshouse`,owner:"rorygallagher2024",name:"glasshouse",avatar:"https://avatars.githubusercontent.com/u/167408991?s=40&v=4",path:"/rorygallagher2024/glasshouse",ourl:"https://github.com/rorygallagher2024",url:"https://github.com/rorygallagher2024/glasshouse",description:"",language:"JavaScript",stars:2230,forks:144,starup:1529},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:22651,forks:3009,starup:9515},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:23511,forks:1331,starup:5906},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:118813,forks:37026,starup:2339},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:61144,forks:8920,starup:5960},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69682,forks:25636,starup:515},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:40417,forks:2911,starup:16399},{title:`ConardLi /

      garden-skills`,owner:"ConardLi",name:"garden-skills",avatar:"https://avatars.githubusercontent.com/u/30708545?s=40&v=4",path:"/ConardLi/garden-skills",ourl:"https://github.com/ConardLi",url:"https://github.com/ConardLi/garden-skills",description:"",language:"JavaScript",stars:15433,forks:1748,starup:2473},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:59975,forks:20696,starup:659},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:41301,forks:5381,starup:1323},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:35248,forks:6770,starup:4620}],"TypeScript-daily":[{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:17048,forks:1859,starup:315},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10280,forks:1346,starup:369},{title:`appwrite /

      appwrite`,owner:"appwrite",name:"appwrite",avatar:"https://avatars.githubusercontent.com/u/1297371?s=40&v=4",path:"/appwrite/appwrite",ourl:"https://github.com/appwrite",url:"https://github.com/appwrite/appwrite",description:"",language:"TypeScript",stars:58125,forks:5875,starup:239},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",ourl:"https://github.com/n8n-io",url:"https://github.com/n8n-io/n8n",description:"",language:"TypeScript",stars:210848,forks:61544,starup:315},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36337,forks:1153,starup:37},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:13260,forks:1336,starup:396},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",ourl:"https://github.com/angular",url:"https://github.com/angular/angular",description:"",language:"TypeScript",stars:101464,forks:28208,starup:212},{title:`ag-ui-protocol /

      ag-ui`,owner:"ag-ui-protocol",name:"ag-ui",avatar:"https://avatars.githubusercontent.com/u/11162004?s=40&v=4",path:"/ag-ui-protocol/ag-ui",ourl:"https://github.com/ag-ui-protocol",url:"https://github.com/ag-ui-protocol/ag-ui",description:"",language:"TypeScript",stars:20274,forks:2086,starup:535},{title:`nestjs /

      nest`,owner:"nestjs",name:"nest",avatar:"https://avatars.githubusercontent.com/u/23244943?s=40&v=4",path:"/nestjs/nest",ourl:"https://github.com/nestjs",url:"https://github.com/nestjs/nest",description:"",language:"TypeScript",stars:77131,forks:8736,starup:171},{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:77940,forks:5204,starup:129},{title:`storybookjs /

      storybook`,owner:"storybookjs",name:"storybook",avatar:"https://avatars.githubusercontent.com/u/3070389?s=40&v=4",path:"/storybookjs/storybook",ourl:"https://github.com/storybookjs",url:"https://github.com/storybookjs/storybook",description:"",language:"TypeScript",stars:91625,forks:10596,starup:25},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:39428,forks:5879,starup:95},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:21126,forks:1947,starup:225},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:29771,forks:2663,starup:1162},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:64733,forks:11363,starup:1264},{title:`vercel /

      eve`,owner:"vercel",name:"eve",avatar:"https://avatars.githubusercontent.com/u/1316152?s=40&v=4",path:"/vercel/eve",ourl:"https://github.com/vercel",url:"https://github.com/vercel/eve",description:"",language:"TypeScript",stars:5960,forks:665,starup:38}],"TypeScript-weekly":[{title:`GoogleChrome /

      modern-web-guidance-src`,owner:"GoogleChrome",name:"modern-web-guidance-src",avatar:"https://avatars.githubusercontent.com/u/39191?s=40&v=4",path:"/GoogleChrome/modern-web-guidance-src",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/modern-web-guidance-src",description:"",language:"TypeScript",stars:8661,forks:731,starup:7015},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:13260,forks:1336,starup:2926},{title:`meta /

      astryx`,owner:"meta",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/meta/astryx",ourl:"https://github.com/meta",url:"https://github.com/meta/astryx",description:"",language:"TypeScript",stars:30407,forks:2374,starup:8700},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10280,forks:1346,starup:1197},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:58145,forks:4874,starup:2948},{title:`ag-ui-protocol /

      ag-ui`,owner:"ag-ui-protocol",name:"ag-ui",avatar:"https://avatars.githubusercontent.com/u/11162004?s=40&v=4",path:"/ag-ui-protocol/ag-ui",ourl:"https://github.com/ag-ui-protocol",url:"https://github.com/ag-ui-protocol/ag-ui",description:"",language:"TypeScript",stars:20274,forks:2086,starup:2773},{title:`openai /

      codex-security`,owner:"openai",name:"codex-security",avatar:"https://avatars.githubusercontent.com/u/269034524?s=40&v=4",path:"/openai/codex-security",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-security",description:"",language:"TypeScript",stars:14036,forks:1096,starup:2531},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:29771,forks:2663,starup:5845},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/1166785?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:30746,forks:3554,starup:1603},{title:`a2ui-project /

      a2ui`,owner:"a2ui-project",name:"a2ui",avatar:"https://avatars.githubusercontent.com/u/8867023?s=40&v=4",path:"/a2ui-project/a2ui",ourl:"https://github.com/a2ui-project",url:"https://github.com/a2ui-project/a2ui",description:"",language:"TypeScript",stars:17598,forks:1426,starup:516},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:12808,forks:1590,starup:2110},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:25152,forks:3552,starup:4284},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:85759,forks:16345,starup:961},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:9089,forks:1636,starup:1228},{title:`Viren070 /

      AIOStreams`,owner:"Viren070",name:"AIOStreams",avatar:"https://avatars.githubusercontent.com/u/71220264?s=40&v=4",path:"/Viren070/AIOStreams",ourl:"https://github.com/Viren070",url:"https://github.com/Viren070/AIOStreams",description:"",language:"TypeScript",stars:3268,forks:956,starup:137},{title:`hieunc229 /

      mailflare`,owner:"hieunc229",name:"mailflare",avatar:"https://avatars.githubusercontent.com/u/8464869?s=40&v=4",path:"/hieunc229/mailflare",ourl:"https://github.com/hieunc229",url:"https://github.com/hieunc229/mailflare",description:"",language:"TypeScript",stars:7007,forks:1215,starup:963}],"TypeScript-monthly":[{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:64734,forks:11363,starup:35748},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:25152,forks:3552,starup:20211},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:118126,forks:10265,starup:17236},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:13260,forks:1336,starup:3475},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:86264,forks:7996,starup:20425},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:21126,forks:1947,starup:8794},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10280,forks:1346,starup:1521},{title:`JetBrains /

      thinkrail`,owner:"JetBrains",name:"thinkrail",avatar:"https://avatars.githubusercontent.com/u/3789877?s=40&v=4",path:"/JetBrains/thinkrail",ourl:"https://github.com/JetBrains",url:"https://github.com/JetBrains/thinkrail",description:"",language:"TypeScript",stars:8345,forks:532,starup:7748},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:12808,forks:1590,starup:6205},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:39919,forks:3516,starup:4609},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:74033,forks:6249,starup:9349},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:54319,forks:7629,starup:17831},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:41876,forks:7999,starup:4640},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:25285,forks:31459,starup:6235},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:7170,forks:650,starup:1612},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:7832,forks:629,starup:6175},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:21485,forks:69639,starup:769},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/1166785?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:30746,forks:3554,starup:2348},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108914,forks:14959,starup:2044},{title:`ag-ui-protocol /

      ag-ui`,owner:"ag-ui-protocol",name:"ag-ui",avatar:"https://avatars.githubusercontent.com/u/11162004?s=40&v=4",path:"/ag-ui-protocol/ag-ui",ourl:"https://github.com/ag-ui-protocol",url:"https://github.com/ag-ui-protocol/ag-ui",description:"",language:"TypeScript",stars:20274,forks:2086,starup:3647},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:85759,forks:16345,starup:2697},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:9089,forks:1636,starup:4623}],"Vue-daily":[{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4251,forks:469,starup:55},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12084,forks:1459,starup:67},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6018,forks:1129,starup:7},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3506,forks:1023,starup:0},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25121,forks:3053,starup:22},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:27019,forks:1968,starup:7},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:242,forks:1253,starup:0},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7868,forks:1076,starup:5},{title:`fluidd-core /

      fluidd`,owner:"fluidd-core",name:"fluidd",avatar:"https://avatars.githubusercontent.com/u/85504?s=40&v=4",path:"/fluidd-core/fluidd",ourl:"https://github.com/fluidd-core",url:"https://github.com/fluidd-core/fluidd",description:"",language:"Vue",stars:1845,forks:622,starup:0},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33644,forks:4676,starup:14},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21723,forks:2341,starup:3},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:4005,forks:1617,starup:6},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4400,forks:904,starup:5},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1827,forks:741,starup:7},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1580,forks:77,starup:4},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:53971,forks:14341,starup:1},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11795,forks:1873,starup:4},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:13171,forks:667,starup:4}],"Vue-weekly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41303,forks:5586,starup:121},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:4005,forks:1617,starup:58},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:479,forks:75984,starup:2},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1801,forks:99,starup:843},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4251,forks:469,starup:126},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7868,forks:1076,starup:39},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25121,forks:3053,starup:111},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12084,forks:1459,starup:311},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3216,forks:236,starup:93},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6018,forks:1129,starup:29},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22485,forks:1594,starup:87},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2149,forks:541,starup:27},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3369,forks:127,starup:27},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1924,forks:149,starup:36},{title:`YuehaiTeam /

      cocogoat`,owner:"YuehaiTeam",name:"cocogoat",avatar:"https://avatars.githubusercontent.com/u/7547189?s=40&v=4",path:"/YuehaiTeam/cocogoat",ourl:"https://github.com/YuehaiTeam",url:"https://github.com/YuehaiTeam/cocogoat",description:"",language:"Vue",stars:1175,forks:81,starup:9},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3506,forks:1023,starup:13},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2563,forks:303,starup:28},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:13171,forks:667,starup:21}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12084,forks:1459,starup:1596},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22485,forks:1594,starup:469},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33644,forks:4676,starup:382},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3216,forks:236,starup:493},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3927,forks:295,starup:1090},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25121,forks:3053,starup:648},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41303,forks:5586,starup:494},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1924,forks:149,starup:163},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1801,forks:99,starup:1221},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3506,forks:1023,starup:85},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:479,forks:75984,starup:15},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90090,forks:30184,starup:76},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:7205,forks:455,starup:494},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9507,forks:1785,starup:119},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10330,forks:904,starup:76},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7055,forks:358,starup:81},{title:`build-admin /

      buildadmin`,owner:"build-admin",name:"buildadmin",avatar:"https://avatars.githubusercontent.com/u/106626227?s=40&v=4",path:"/build-admin/buildadmin",ourl:"https://github.com/build-admin",url:"https://github.com/build-admin/buildadmin",description:"",language:"Vue",stars:2414,forks:292,starup:21},{title:`freqtrade /

      frequi`,owner:"freqtrade",name:"frequi",avatar:"https://avatars.githubusercontent.com/u/5024695?s=40&v=4",path:"/freqtrade/frequi",ourl:"https://github.com/freqtrade",url:"https://github.com/freqtrade/frequi",description:"",language:"Vue",stars:1124,forks:497,starup:33},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6018,forks:1129,starup:108},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14449,forks:1788,starup:27},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4251,forks:469,starup:481}]},mt=T({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=H(),l=Y(()=>v(X[`${s.value}-${o.value}`]));V("color",i),V("data",l);function v(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=z,g=D,m=O,d=G,t=P,e=B,y=F,w=Q,M=N;return c(),j("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(W,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),k(w,{key:2})):(c(),k(M,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
