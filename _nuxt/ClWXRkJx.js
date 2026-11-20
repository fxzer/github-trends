import M from"./DYybaSmo.js";import z from"./C0Nvaarn.js";import H from"./DJYQiH6s.js";import F from"./DZu472gV.js";import B from"./BqP0xVpm.js";import O from"./BFRR-_Dm.js";import P from"./C9te5pky.js";import{d as j}from"./KQwPfV-1.js";import{s as R,a as _,b as q,u as L,i as G,c as I}from"./D85WPgJT.js";import{i as x,p as K,a5 as D,D as h,f as C,w as A,S as W,h as b,a6 as S,T as E,q as T,U as c,d as k,a as Y,H as V}from"./C3VpIL1G.js";import"./DtADV24R.js";import"./p2-M2djV.js";import"./B7Q6FlxJ.js";import"./pidBEajq.js";import"./dW50xFaG.js";const $=x({__name:"Chart",setup(f){const r=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(R),s=_("趋势仓库总指标排行榜",o);function i(u){const a=j(u);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,v]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=v,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=q(s,L);D(r,()=>{i(r.value)},{deep:!0,immediate:!0});const d=`${100+r.value.length*40}px`;return(u,a)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:A({height:d})},null,4))}}),Q=Object.assign($,{__name:"TrendChart"}),U=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=W(r),i=_("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=q(i,L);function d(a){const n=j(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],v=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:G(g[e%g.length])}));i.value.series[0].data=v,i.value.yAxis.data=m}D(o,()=>{d(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:A({height:u})},null,4))}}),N=Object.assign(U,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:307809,forks:45316,starup:639},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:89833,forks:6185,starup:105},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/70798?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"JavaScript",stars:10378,forks:1302,starup:10},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:34613,forks:3011,starup:68},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:4618,forks:429,starup:49},{title:`micromatch /

      picomatch`,owner:"micromatch",name:"picomatch",avatar:"https://avatars.githubusercontent.com/u/383994?s=40&v=4",path:"/micromatch/picomatch",ourl:"https://github.com/micromatch",url:"https://github.com/micromatch/picomatch",description:"",language:"JavaScript",stars:1331,forks:212,starup:0},{title:`babygoton /

      WorkDaddy`,owner:"babygoton",name:"WorkDaddy",avatar:"https://avatars.githubusercontent.com/u/29622572?s=40&v=4",path:"/babygoton/WorkDaddy",ourl:"https://github.com/babygoton",url:"https://github.com/babygoton/WorkDaddy",description:"",language:"JavaScript",stars:3305,forks:360,starup:30},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:195568,forks:11023,starup:750},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:35311,forks:2454,starup:20},{title:`HaD0Yun /

      CozyClay`,owner:"HaD0Yun",name:"CozyClay",avatar:"https://avatars.githubusercontent.com/u/102889891?s=40&v=4",path:"/HaD0Yun/CozyClay",ourl:"https://github.com/HaD0Yun",url:"https://github.com/HaD0Yun/CozyClay",description:"",language:"JavaScript",stars:2020,forks:203,starup:6},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:60107,forks:20697,starup:14}],"JavaScript-weekly":[{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:35539,forks:6824,starup:1168},{title:`DeanChensj /

      jiangshan-map`,owner:"DeanChensj",name:"jiangshan-map",avatar:"https://avatars.githubusercontent.com/u/9414763?s=40&v=4",path:"/DeanChensj/jiangshan-map",ourl:"https://github.com/DeanChensj",url:"https://github.com/DeanChensj/jiangshan-map",description:"",language:"JavaScript",stars:8583,forks:1059,starup:2960},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:61716,forks:9e3,starup:1572},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:60107,forks:20697,starup:523},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:307809,forks:45316,starup:5598},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:89833,forks:6185,starup:1669},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:94712,forks:8881,starup:1146},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:119385,forks:12425,starup:2765},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:34613,forks:3011,starup:613},{title:`saadeghi /

      daisyui`,owner:"saadeghi",name:"daisyui",avatar:"https://avatars.githubusercontent.com/u/7342023?s=40&v=4",path:"/saadeghi/daisyui",ourl:"https://github.com/saadeghi",url:"https://github.com/saadeghi/daisyui",description:"",language:"JavaScript",stars:42916,forks:1726,starup:107},{title:`GoogleChrome /

      lighthouse`,owner:"GoogleChrome",name:"lighthouse",avatar:"https://avatars.githubusercontent.com/u/4071474?s=40&v=4",path:"/GoogleChrome/lighthouse",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/lighthouse",description:"",language:"JavaScript",stars:31173,forks:9800,starup:115}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:76255,forks:5133,starup:44608},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:119305,forks:7986,starup:20167},{title:`rorygallagher2024 /

      glasshouse`,owner:"rorygallagher2024",name:"glasshouse",avatar:"https://avatars.githubusercontent.com/u/167408991?s=40&v=4",path:"/rorygallagher2024/glasshouse",ourl:"https://github.com/rorygallagher2024",url:"https://github.com/rorygallagher2024/glasshouse",description:"",language:"JavaScript",stars:2288,forks:147,starup:1521},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:23027,forks:3071,starup:9175},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:23883,forks:1344,starup:6115},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:61716,forks:9e3,starup:6171},{title:`ConardLi /

      garden-skills`,owner:"ConardLi",name:"garden-skills",avatar:"https://avatars.githubusercontent.com/u/30708545?s=40&v=4",path:"/ConardLi/garden-skills",ourl:"https://github.com/ConardLi",url:"https://github.com/ConardLi/garden-skills",description:"",language:"JavaScript",stars:15556,forks:1762,starup:2556},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:119028,forks:37042,starup:2456},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:40691,forks:2933,starup:14974},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:60107,forks:20697,starup:743},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:41396,forks:5398,starup:1337},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:34613,forks:3011,starup:1998},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:119385,forks:12425,starup:11088}],"TypeScript-daily":[{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:17817,forks:1956,starup:292},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:205181,forks:10745,starup:1226},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10994,forks:1403,starup:315},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/25152247?s=40&v=4",path:"/toeverything/AFFiNE",ourl:"https://github.com/toeverything",url:"https://github.com/toeverything/AFFiNE",description:"",language:"TypeScript",stars:75748,forks:5586,starup:686},{title:`bendlang /

      bend`,owner:"bendlang",name:"bend",avatar:"https://avatars.githubusercontent.com/u/13090166?s=40&v=4",path:"/bendlang/bend",ourl:"https://github.com/bendlang",url:"https://github.com/bendlang/bend",description:"",language:"TypeScript",stars:25693,forks:820,starup:95},{title:`appwrite /

      appwrite`,owner:"appwrite",name:"appwrite",avatar:"https://avatars.githubusercontent.com/u/1297371?s=40&v=4",path:"/appwrite/appwrite",ourl:"https://github.com/appwrite",url:"https://github.com/appwrite/appwrite",description:"",language:"TypeScript",stars:58441,forks:5909,starup:52},{title:`mastra-ai /

      mastra`,owner:"mastra-ai",name:"mastra",avatar:"https://avatars.githubusercontent.com/u/2359375?s=40&v=4",path:"/mastra-ai/mastra",ourl:"https://github.com/mastra-ai",url:"https://github.com/mastra-ai/mastra",description:"",language:"TypeScript",stars:29701,forks:3123,starup:44},{title:`tianma-if /

      edgeever`,owner:"tianma-if",name:"edgeever",avatar:"https://avatars.githubusercontent.com/u/5895871?s=40&v=4",path:"/tianma-if/edgeever",ourl:"https://github.com/tianma-if",url:"https://github.com/tianma-if/edgeever",description:"",language:"TypeScript",stars:3460,forks:1797,starup:26},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:61260,forks:10149,starup:53},{title:`hieunc229 /

      mailflare`,owner:"hieunc229",name:"mailflare",avatar:"https://avatars.githubusercontent.com/u/8464869?s=40&v=4",path:"/hieunc229/mailflare",ourl:"https://github.com/hieunc229",url:"https://github.com/hieunc229/mailflare",description:"",language:"TypeScript",stars:7366,forks:1285,starup:103},{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:78241,forks:5216,starup:127},{title:`visgl /

      deck.gl`,owner:"visgl",name:"deck.gl",avatar:"https://avatars.githubusercontent.com/u/2059298?s=40&v=4",path:"/visgl/deck.gl",ourl:"https://github.com/visgl",url:"https://github.com/visgl/deck.gl",description:"",language:"TypeScript",stars:14784,forks:2307,starup:9},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:75345,forks:5159,starup:87},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36879,forks:1203,starup:108},{title:`croffasia /

      itsaplan`,owner:"croffasia",name:"itsaplan",avatar:"https://avatars.githubusercontent.com/u/696180?s=40&v=4",path:"/croffasia/itsaplan",ourl:"https://github.com/croffasia",url:"https://github.com/croffasia/itsaplan",description:"",language:"TypeScript",stars:2438,forks:321,starup:20},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/63023139?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:228249,forks:31001,starup:244},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:123065,forks:15875,starup:160}],"TypeScript-weekly":[{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:13870,forks:1397,starup:3468},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10994,forks:1403,starup:1829},{title:`GoogleChrome /

      modern-web-guidance-src`,owner:"GoogleChrome",name:"modern-web-guidance-src",avatar:"https://avatars.githubusercontent.com/u/39191?s=40&v=4",path:"/GoogleChrome/modern-web-guidance-src",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/modern-web-guidance-src",description:"",language:"TypeScript",stars:9507,forks:773,starup:6858},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:58522,forks:4886,starup:3229},{title:`ag-ui-protocol /

      ag-ui`,owner:"ag-ui-protocol",name:"ag-ui",avatar:"https://avatars.githubusercontent.com/u/11162004?s=40&v=4",path:"/ag-ui-protocol/ag-ui",ourl:"https://github.com/ag-ui-protocol",url:"https://github.com/ag-ui-protocol/ag-ui",description:"",language:"TypeScript",stars:20798,forks:2130,starup:3455},{title:`meta /

      astryx`,owner:"meta",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/meta/astryx",ourl:"https://github.com/meta",url:"https://github.com/meta/astryx",description:"",language:"TypeScript",stars:31322,forks:2459,starup:4977},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:30929,forks:2825,starup:7248},{title:`a2ui-project /

      a2ui`,owner:"a2ui-project",name:"a2ui",avatar:"https://avatars.githubusercontent.com/u/8867023?s=40&v=4",path:"/a2ui-project/a2ui",ourl:"https://github.com/a2ui-project",url:"https://github.com/a2ui-project/a2ui",description:"",language:"TypeScript",stars:17694,forks:1432,starup:480},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/1166785?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:30815,forks:3567,starup:1190},{title:`openai /

      codex-security`,owner:"openai",name:"codex-security",avatar:"https://avatars.githubusercontent.com/u/269034524?s=40&v=4",path:"/openai/codex-security",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-security",description:"",language:"TypeScript",stars:14221,forks:1119,starup:2150},{title:`hieunc229 /

      mailflare`,owner:"hieunc229",name:"mailflare",avatar:"https://avatars.githubusercontent.com/u/8464869?s=40&v=4",path:"/hieunc229/mailflare",ourl:"https://github.com/hieunc229",url:"https://github.com/hieunc229/mailflare",description:"",language:"TypeScript",stars:7366,forks:1285,starup:1159},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:26181,forks:3730,starup:4228},{title:`Viren070 /

      AIOStreams`,owner:"Viren070",name:"AIOStreams",avatar:"https://avatars.githubusercontent.com/u/71220264?s=40&v=4",path:"/Viren070/AIOStreams",ourl:"https://github.com/Viren070",url:"https://github.com/Viren070/AIOStreams",description:"",language:"TypeScript",stars:3287,forks:955,starup:140},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:85921,forks:16351,starup:751},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:13060,forks:1631,starup:1624},{title:`google-labs-code /

      design.md`,owner:"google-labs-code",name:"design.md",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/design.md",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/design.md",description:"",language:"TypeScript",stars:28985,forks:2323,starup:145},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:31300,forks:1975,starup:185}],"TypeScript-monthly":[{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:26181,forks:3730,starup:20640},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:67736,forks:11707,starup:37642},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:118628,forks:10318,starup:17313},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:13870,forks:1397,starup:4143},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:10994,forks:1403,starup:2107},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:87440,forks:8137,starup:20032},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:21807,forks:2012,starup:9209},{title:`JetBrains /

      thinkrail`,owner:"JetBrains",name:"thinkrail",avatar:"https://avatars.githubusercontent.com/u/3789877?s=40&v=4",path:"/JetBrains/thinkrail",ourl:"https://github.com/JetBrains",url:"https://github.com/JetBrains/thinkrail",description:"",language:"TypeScript",stars:8375,forks:533,starup:7537},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:13060,forks:1631,starup:6364},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:40219,forks:3558,starup:4587},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:74569,forks:6335,starup:9293},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:55686,forks:7929,starup:18018},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:42059,forks:8034,starup:4732},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/1166785?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:30815,forks:3567,starup:2371},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:25452,forks:31537,starup:5711},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:8027,forks:647,starup:6034},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:85921,forks:16351,starup:2774},{title:`ag-ui-protocol /

      ag-ui`,owner:"ag-ui-protocol",name:"ag-ui",avatar:"https://avatars.githubusercontent.com/u/11162004?s=40&v=4",path:"/ag-ui-protocol/ag-ui",ourl:"https://github.com/ag-ui-protocol",url:"https://github.com/ag-ui-protocol/ag-ui",description:"",language:"TypeScript",stars:20798,forks:2130,starup:3955},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:21524,forks:69680,starup:788},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:7202,forks:655,starup:1617},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108959,forks:14972,starup:2042},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:9320,forks:1679,starup:4569}],"Vue-daily":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12190,forks:1476,starup:49},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4406,forks:905,starup:3},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7877,forks:1077,starup:5},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25141,forks:3057,starup:14},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3507,forks:1025,starup:1},{title:`mainsail-crew /

      mainsail`,owner:"mainsail-crew",name:"mainsail",avatar:"https://avatars.githubusercontent.com/u/8167632?s=40&v=4",path:"/mainsail-crew/mainsail",ourl:"https://github.com/mainsail-crew",url:"https://github.com/mainsail-crew/mainsail",description:"",language:"Vue",stars:2250,forks:624,starup:1},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6027,forks:1131,starup:2},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3886,forks:192,starup:3},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:4016,forks:1628,starup:3},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:27035,forks:1968,starup:8},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1010,forks:99,starup:0},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/43211581?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:193,forks:391,starup:2},{title:`ljxi /

      Cloudflare-R2-oss`,owner:"ljxi",name:"Cloudflare-R2-oss",avatar:"https://avatars.githubusercontent.com/u/153080750?s=40&v=4",path:"/ljxi/Cloudflare-R2-oss",ourl:"https://github.com/ljxi",url:"https://github.com/ljxi/Cloudflare-R2-oss",description:"",language:"Vue",stars:528,forks:1723,starup:0},{title:`DependencyTrack /

      frontend`,owner:"DependencyTrack",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/5693141?s=40&v=4",path:"/DependencyTrack/frontend",ourl:"https://github.com/DependencyTrack",url:"https://github.com/DependencyTrack/frontend",description:"",language:"Vue",stars:185,forks:276,starup:0},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9508,forks:1787,starup:1},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2161,forks:541,starup:5},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:7230,forks:457,starup:10},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11797,forks:1874,starup:2}],"Vue-weekly":[{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:4016,forks:1628,starup:43},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12190,forks:1476,starup:356},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4280,forks:472,starup:137},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:480,forks:76371,starup:1},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41318,forks:5587,starup:98},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7877,forks:1077,starup:38},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6027,forks:1131,starup:28},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2161,forks:541,starup:29},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25141,forks:3057,starup:119},{title:`YuehaiTeam /

      cocogoat`,owner:"YuehaiTeam",name:"cocogoat",avatar:"https://avatars.githubusercontent.com/u/7547189?s=40&v=4",path:"/YuehaiTeam/cocogoat",ourl:"https://github.com/YuehaiTeam",url:"https://github.com/YuehaiTeam/cocogoat",description:"",language:"Vue",stars:1179,forks:81,starup:12},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22514,forks:1598,starup:94},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1010,forks:99,starup:8},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2575,forks:306,starup:31},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3372,forks:126,starup:19},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3507,forks:1025,starup:10}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:12190,forks:1476,starup:1696},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33650,forks:4674,starup:377},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22514,forks:1598,starup:477},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3229,forks:236,starup:472},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3935,forks:296,starup:799},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25141,forks:3057,starup:650},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41318,forks:5587,starup:485},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1010,forks:99,starup:1213},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:480,forks:76371,starup:14},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3507,forks:1025,starup:81},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90089,forks:30170,starup:75},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9508,forks:1787,starup:121},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7055,forks:359,starup:79},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:6027,forks:1131,starup:111},{title:`freqtrade /

      frequi`,owner:"freqtrade",name:"frequi",avatar:"https://avatars.githubusercontent.com/u/5024695?s=40&v=4",path:"/freqtrade/frequi",ourl:"https://github.com/freqtrade",url:"https://github.com/freqtrade/frequi",description:"",language:"Vue",stars:1127,forks:497,starup:32},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3886,forks:192,starup:44},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14449,forks:1788,starup:27},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7877,forks:1077,starup:122},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2161,forks:541,starup:139},{title:`build-admin /

      buildadmin`,owner:"build-admin",name:"buildadmin",avatar:"https://avatars.githubusercontent.com/u/106626227?s=40&v=4",path:"/build-admin/buildadmin",ourl:"https://github.com/build-admin",url:"https://github.com/build-admin/buildadmin",description:"",language:"Vue",stars:2415,forks:292,starup:21},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4280,forks:472,starup:486},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:4016,forks:1628,starup:200}]},mt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=I(),l=Y(()=>d(X[`${s.value}-${o.value}`]));V("color",i),V("data",l);function d(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=M,g=z,m=H,v=F,t=B,e=O,y=P,w=Q,J=N;return h(),C("div",null,[b(v,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(E,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(y,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(w,{key:2})):(h(),k(J,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
