import P from"./xDmG-wKq.js";import R from"./Mm4pUPhi.js";import F from"./Bw3FqAYw.js";import L from"./CcAW9H4j.js";import H from"./3zGYIr1C.js";import O from"./IWbvQP3P.js";import E from"./BJ3h_AXl.js";import{d as _}from"./KQwPfV-1.js";import{s as I,a as V,b as j,u as J,i as U,c as W}from"./DOGDt1eM.js";import{i as x,p as B,a5 as z,D as c,f as C,w as M,S as q,h as b,a6 as S,T as G,q as T,U as h,d as y,a as $,H as A}from"./hS_rAcxB.js";import"./u70rk88u.js";import"./p2-M2djV.js";import"./D5vFjV5f.js";import"./xJO4Ve6Z.js";import"./ClyJ64-L.js";const X=x({__name:"Chart",setup(f){const r=B("data"),n=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(I),s=V("趋势仓库总指标排行榜",n);function u(i){const a=_(i);a.sort((t,e)=>{const k=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return k-w});const[o,l,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=o,s.value.series[1].data=l,s.value.series[2].data=g}const{domRef:m}=j(s,J);z(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),C("div",{ref_key:"chartRef",ref:m,style:M({height:v})},null,4))}}),N=Object.assign(X,{__name:"TrendChart"}),K=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:n}=q(r),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:m}=j(u,J);function v(a){const o=_(a);o.sort((t,e)=>t.starup-e.starup);const l=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=o.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:U(l[e%l.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}z(n,()=>{v(n.value)},{deep:!0,immediate:!0});const i=`${100+n.value.length*40}px`;return(a,o)=>(c(),C("div",{ref_key:"chartRef",ref:m,style:M({height:i})},null,4))}}),Q=Object.assign(K,{__name:"TrendStarupChart"}),Z={"JavaScript-daily":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:197788,forks:30405,starup:1385},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:50784,forks:3896,starup:48},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:19519,forks:1607,starup:186},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6302,forks:315,starup:566},{title:`nasa-gibs /

      worldview`,owner:"nasa-gibs",name:"worldview",avatar:"https://avatars.githubusercontent.com/u/3263862?s=40&v=4",path:"/nasa-gibs/worldview",ourl:"https://github.com/nasa-gibs",url:"https://github.com/nasa-gibs/worldview",description:"",language:"JavaScript",stars:1105,forks:260,starup:16},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:9667,forks:3298,starup:7},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:41953,forks:3824,starup:111},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:95825,forks:15548,starup:16},{title:`chartjs /

      Chart.js`,owner:"chartjs",name:"Chart.js",avatar:"https://avatars.githubusercontent.com/u/6757853?s=40&v=4",path:"/chartjs/Chart.js",ourl:"https://github.com/chartjs",url:"https://github.com/chartjs/Chart.js",description:"",language:"JavaScript",stars:67462,forks:11949,starup:6},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:31137,forks:1704,starup:270},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:738,forks:88,starup:2},{title:`bugbasesecurity /

      pentest-copilot`,owner:"bugbasesecurity",name:"pentest-copilot",avatar:"https://avatars.githubusercontent.com/u/20267705?s=40&v=4",path:"/bugbasesecurity/pentest-copilot",ourl:"https://github.com/bugbasesecurity",url:"https://github.com/bugbasesecurity/pentest-copilot",description:"",language:"JavaScript",stars:848,forks:182,starup:15}],"JavaScript-weekly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:197788,forks:30405,starup:9363},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6302,forks:315,starup:2371},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:11889,forks:1316,starup:603},{title:`truelockmc /

      streambert`,owner:"truelockmc",name:"streambert",avatar:"https://avatars.githubusercontent.com/u/168660625?s=40&v=4",path:"/truelockmc/streambert",ourl:"https://github.com/truelockmc",url:"https://github.com/truelockmc/streambert",description:"",language:"JavaScript",stars:4866,forks:400,starup:1219},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",ourl:"https://github.com/jellyfin",url:"https://github.com/jellyfin/jellyfin-web",description:"",language:"JavaScript",stars:3610,forks:2017,starup:35},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117407,forks:35686,starup:152},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",ourl:"https://github.com/zizifn",url:"https://github.com/zizifn/edgetunnel",description:"",language:"JavaScript",stars:8618,forks:45768,starup:77},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:19519,forks:1607,starup:1040},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:28531,forks:5415,starup:498},{title:`andrewyng /

      context-hub`,owner:"andrewyng",name:"context-hub",avatar:"https://avatars.githubusercontent.com/u/1796239?s=40&v=4",path:"/andrewyng/context-hub",ourl:"https://github.com/andrewyng",url:"https://github.com/andrewyng/context-hub",description:"",language:"JavaScript",stars:13433,forks:1176,starup:128},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1865,forks:591,starup:100},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:50784,forks:3896,starup:161}],"JavaScript-monthly":[{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:14955,forks:2238,starup:11689},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:15122,forks:1450,starup:7955},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:17332,forks:2926,starup:7754},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:3991,forks:591,starup:2554},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:11889,forks:1316,starup:1257},{title:`outsourc-e /

      hermes-workspace`,owner:"outsourc-e",name:"hermes-workspace",avatar:"https://avatars.githubusercontent.com/u/201563152?s=40&v=4",path:"/outsourc-e/hermes-workspace",ourl:"https://github.com/outsourc-e",url:"https://github.com/outsourc-e/hermes-workspace",description:"",language:"JavaScript",stars:5017,forks:740,starup:2590},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:1139,forks:175,starup:722},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:5946,forks:590,starup:2600},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:41953,forks:3824,starup:1298},{title:`playcanvas /

      engine`,owner:"playcanvas",name:"engine",avatar:"https://avatars.githubusercontent.com/u/697563?s=40&v=4",path:"/playcanvas/engine",ourl:"https://github.com/playcanvas",url:"https://github.com/playcanvas/engine",description:"",language:"JavaScript",stars:15908,forks:1906,starup:1096},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:28531,forks:5415,starup:2046},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6302,forks:315,starup:2550},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117407,forks:35686,starup:653}],"TypeScript-daily":[{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:48044,forks:6816,starup:493},{title:`Lum1104 /

      Understand-Anything`,owner:"Lum1104",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Lum1104/Understand-Anything",ourl:"https://github.com/Lum1104",url:"https://github.com/Lum1104/Understand-Anything",description:"",language:"TypeScript",stars:43494,forks:3473,starup:3776},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:17887,forks:1366,starup:184},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:14708,forks:1499,starup:81},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:12765,forks:1690,starup:247},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:57163,forks:6818,starup:627},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/10683426?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:27096,forks:2579,starup:176},{title:`NangoHQ /

      nango`,owner:"NangoHQ",name:"nango",avatar:"https://avatars.githubusercontent.com/u/1724137?s=40&v=4",path:"/NangoHQ/nango",ourl:"https://github.com/NangoHQ",url:"https://github.com/NangoHQ/nango",description:"",language:"TypeScript",stars:9419,forks:949,starup:269},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:79480,forks:6831,starup:298},{title:`Sync-in /

      server`,owner:"Sync-in",name:"server",avatar:"https://avatars.githubusercontent.com/u/5459596?s=40&v=4",path:"/Sync-in/server",ourl:"https://github.com/Sync-in",url:"https://github.com/Sync-in/server",description:"",language:"TypeScript",stars:1368,forks:86,starup:45},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:125878,forks:7559,starup:504},{title:`mastra-ai /

      mastra`,owner:"mastra-ai",name:"mastra",avatar:"https://avatars.githubusercontent.com/u/2359375?s=40&v=4",path:"/mastra-ai/mastra",ourl:"https://github.com/mastra-ai",url:"https://github.com/mastra-ai/mastra",description:"",language:"TypeScript",stars:24510,forks:2149,starup:65},{title:`CodeWithCJ /

      SparkyFitness`,owner:"CodeWithCJ",name:"SparkyFitness",avatar:"https://avatars.githubusercontent.com/u/151883488?s=40&v=4",path:"/CodeWithCJ/SparkyFitness",ourl:"https://github.com/CodeWithCJ",url:"https://github.com/CodeWithCJ/SparkyFitness",description:"",language:"TypeScript",stars:4018,forks:189,starup:45},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:12148,forks:2379,starup:86}],"TypeScript-weekly":[{title:`Lum1104 /

      Understand-Anything`,owner:"Lum1104",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Lum1104/Understand-Anything",ourl:"https://github.com/Lum1104",url:"https://github.com/Lum1104/Understand-Anything",description:"",language:"TypeScript",stars:43494,forks:3473,starup:26212},{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:32373,forks:1934,starup:19128},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:7357,forks:1186,starup:1740},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:1137,forks:104,starup:629},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:8327,forks:672,starup:2496},{title:`rmyndharis /

      OpenWA`,owner:"rmyndharis",name:"OpenWA",avatar:"https://avatars.githubusercontent.com/u/2390382?s=40&v=4",path:"/rmyndharis/OpenWA",ourl:"https://github.com/rmyndharis",url:"https://github.com/rmyndharis/OpenWA",description:"",language:"TypeScript",stars:6918,forks:1426,starup:1605},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:19423,forks:1588,starup:3624},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:22734,forks:1726,starup:1156},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:40476,forks:4067,starup:1079},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:42194,forks:2696,starup:1804},{title:`blakeblackshear /

      frigate`,owner:"blakeblackshear",name:"frigate",avatar:"https://avatars.githubusercontent.com/u/14866235?s=40&v=4",path:"/blakeblackshear/frigate",ourl:"https://github.com/blakeblackshear",url:"https://github.com/blakeblackshear/frigate",description:"",language:"TypeScript",stars:33351,forks:3223,starup:1308},{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:34023,forks:4097,starup:3437},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/6427696?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:3662,forks:245,starup:595},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:48044,forks:6816,starup:1796},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:12765,forks:1690,starup:1228},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:57163,forks:6818,starup:4476},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:35005,forks:3863,starup:482}],"TypeScript-monthly":[{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:32373,forks:1934,starup:30718},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:19423,forks:1588,starup:17217},{title:`Lum1104 /

      Understand-Anything`,owner:"Lum1104",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Lum1104/Understand-Anything",ourl:"https://github.com/Lum1104",url:"https://github.com/Lum1104/Understand-Anything",description:"",language:"TypeScript",stars:43494,forks:3473,starup:33147},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:56225,forks:6397,starup:22670},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:16930,forks:2700,starup:7963},{title:`bytedance /

      UI-TARS-desktop`,owner:"bytedance",name:"UI-TARS-desktop",avatar:"https://avatars.githubusercontent.com/u/23133919?s=40&v=4",path:"/bytedance/UI-TARS-desktop",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/UI-TARS-desktop",description:"",language:"TypeScript",stars:35634,forks:3582,starup:6182},{title:`mattpocock /

      sandcastle`,owner:"mattpocock",name:"sandcastle",avatar:"https://avatars.githubusercontent.com/u/28293365?s=40&v=4",path:"/mattpocock/sandcastle",ourl:"https://github.com/mattpocock",url:"https://github.com/mattpocock/sandcastle",description:"",language:"TypeScript",stars:5301,forks:544,starup:4240},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:8327,forks:672,starup:4692},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:22095,forks:2065,starup:9663},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:22734,forks:1726,starup:3207},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:57163,forks:6818,starup:15064},{title:`wechat-article /

      wechat-article-exporter`,owner:"wechat-article",name:"wechat-article-exporter",avatar:"https://avatars.githubusercontent.com/u/156505552?s=40&v=4",path:"/wechat-article/wechat-article-exporter",ourl:"https://github.com/wechat-article",url:"https://github.com/wechat-article/wechat-article-exporter",description:"",language:"TypeScript",stars:10985,forks:1917,starup:2209},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:7357,forks:1186,starup:2484},{title:`playcanvas /

      supersplat`,owner:"playcanvas",name:"supersplat",avatar:"https://avatars.githubusercontent.com/u/11276292?s=40&v=4",path:"/playcanvas/supersplat",ourl:"https://github.com/playcanvas",url:"https://github.com/playcanvas/supersplat",description:"",language:"TypeScript",stars:8752,forks:953,starup:3768},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:26629,forks:3303,starup:5213},{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:34023,forks:4097,starup:11818}],"Vue-daily":[{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12676,forks:2144,starup:6},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90267,forks:30473,starup:2},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7386,forks:986,starup:10},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21522,forks:3918,starup:4},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8827,forks:2019,starup:15},{title:`imdap /

      ruoyi-plus-vben5`,owner:"imdap",name:"ruoyi-plus-vben5",avatar:"https://avatars.githubusercontent.com/u/28396334?s=40&v=4",path:"/imdap/ruoyi-plus-vben5",ourl:"https://github.com/imdap",url:"https://github.com/imdap/ruoyi-plus-vben5",description:"",language:"Vue",stars:263,forks:100,starup:5},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2501,forks:367,starup:0},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:1969,forks:291,starup:11},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6509,forks:513,starup:5},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15542,forks:1258,starup:21},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2820,forks:300,starup:6},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32487,forks:8800,starup:8},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:1017,forks:316,starup:3},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21068,forks:1423,starup:52},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14399,forks:1687,starup:6}],"Vue-weekly":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21068,forks:1423,starup:153},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1022,forks:40,starup:113},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39026,forks:4971,starup:155},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32487,forks:8800,starup:83},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20247,forks:3740,starup:52},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5386,forks:1044,starup:50},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3665,forks:467,starup:45},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8827,forks:2019,starup:102},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:376,forks:44992,starup:4},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6617,forks:1068,starup:30},{title:`WGDashboard /

      WGDashboard`,owner:"WGDashboard",name:"WGDashboard",avatar:"https://avatars.githubusercontent.com/u/25237201?s=40&v=4",path:"/WGDashboard/WGDashboard",ourl:"https://github.com/WGDashboard",url:"https://github.com/WGDashboard/WGDashboard",description:"",language:"Vue",stars:3591,forks:424,starup:30},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21361,forks:2327,starup:55},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6729,forks:4671,starup:45},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21522,forks:3918,starup:32},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12820,forks:641,starup:28},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3159,forks:815,starup:9},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90267,forks:30473,starup:32},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1809,forks:83,starup:59},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:601,forks:21,starup:6}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39026,forks:4971,starup:796},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2780,forks:1095,starup:185},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8827,forks:2019,starup:380},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2949,forks:1312,starup:96},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1022,forks:40,starup:451},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21068,forks:1423,starup:423},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:376,forks:44992,starup:24},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15542,forks:1258,starup:530},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3159,forks:815,starup:61},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7386,forks:986,starup:293},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10009,forks:858,starup:103},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25281,forks:1851,starup:500},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1809,forks:83,starup:321},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28377,forks:3234,starup:189},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12676,forks:2144,starup:316},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6729,forks:4671,starup:174},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2777,forks:754,starup:99},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3665,forks:467,starup:180},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3287,forks:493,starup:133}]},gt=x({__name:"index",setup(f){const{view:r,dateRange:n,language:s,color:u}=W(),m=$(()=>v(Z[`${s.value}-${n.value}`]));A("color",u),A("data",m);function v(i){return i.sort((a,o)=>o.starup-a.starup)}return(i,a)=>{const o=P,l=R,g=F,d=L,t=H,e=O,k=E,w=N,D=Q;return c(),C("div",null,[b(d,null,{default:S(()=>[b(o,{modelValue:h(n),"onUpdate:modelValue":a[0]||(a[0]=p=>T(n)?n.value=p:null)},null,8,["modelValue"]),b(l,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(G,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),y(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),y(k,{key:1,"has-starup":""})):h(r)==="chart"?(c(),y(w,{key:2})):(c(),y(D,{key:3,data:h(m)},null,8,["data"]))]),_:1})])}}});export{gt as default};
