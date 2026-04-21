import P from"./Blz43rUZ.js";import D from"./DuWj69Kj.js";import q from"./BBOQlYSa.js";import H from"./B3HUaldE.js";import I from"./CAhk9Tjg.js";import O from"./2ulRfrHJ.js";import R from"./CldElQBf.js";import{d as V}from"./B_9KuB4R.js";import{s as W,u as A,a as C,b as z,i as E,c as B}from"./Dun6-6fM.js";import{g as j,i as F,j as M,o as c,c as _,n as J,A as Y,b as v,w as S,T as G,k as x,l as h,m as k,r as $,s as T}from"./Ws4Gqp7L.js";import"./DEr-mBky.js";import"./p2-M2djV.js";import"./CrcLIBhI.js";import"./CgEonjRc.js";import"./C6L9XaxA.js";const X=j({__name:"Chart",setup(f){const s=F("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(W),r=A("趋势仓库总指标排行榜",o);function i(u){const a=V(u);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=C(r,z);M(s,()=>{i(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(u,a)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:J({height:b})},null,4))}}),Q=Object.assign(X,{__name:"TrendChart"}),Z=j({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=Y(s),i=A("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(i,z);function b(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(m[e%m.length])}));i.value.series[0].data=d,i.value.yAxis.data=g}M(o,()=>{b(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:J({height:u})},null,4))}}),U=Object.assign(Z,{__name:"TrendStarupChart"}),N={"JavaScript-daily":[{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:9340,forks:3179,starup:11},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:86377,forks:4895,starup:36},{title:`carbon-design-system /

      carbon`,owner:"carbon-design-system",name:"carbon",avatar:"https://avatars.githubusercontent.com/u/3901764?s=40&v=4",path:"/carbon-design-system/carbon",ourl:"https://github.com/carbon-design-system",url:"https://github.com/carbon-design-system/carbon",description:"",language:"JavaScript",stars:9052,forks:2143,starup:9},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/kit",description:"",language:"JavaScript",stars:20447,forks:2244,starup:6},{title:`nagix /

      mini-tokyo-3d`,owner:"nagix",name:"mini-tokyo-3d",avatar:"https://avatars.githubusercontent.com/u/723188?s=40&v=4",path:"/nagix/mini-tokyo-3d",ourl:"https://github.com/nagix",url:"https://github.com/nagix/mini-tokyo-3d",description:"",language:"JavaScript",stars:4e3,forks:358,starup:58},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:5617,forks:1096,starup:125},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:85559,forks:7669,starup:54},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:22734,forks:3666,starup:354},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:67255,forks:4503,starup:53}],"JavaScript-weekly":[{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:6253,forks:597,starup:4032},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2876,forks:288,starup:750},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:5617,forks:1096,starup:765},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:112104,forks:36328,starup:219},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:22734,forks:3666,starup:1658},{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:9351,forks:826,starup:287},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:187,forks:31,starup:36},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:67255,forks:4503,starup:160},{title:`foxhui /

      WebAI2API`,owner:"foxhui",name:"WebAI2API",avatar:"https://avatars.githubusercontent.com/u/31238038?s=40&v=4",path:"/foxhui/WebAI2API",ourl:"https://github.com/foxhui",url:"https://github.com/foxhui/WebAI2API",description:"",language:"JavaScript",stars:618,forks:189,starup:133},{title:`DavidHDev /

      react-bits`,owner:"DavidHDev",name:"react-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/react-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/react-bits",description:"",language:"JavaScript",stars:38573,forks:1723,starup:584},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:95638,forks:15380,starup:85},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:11887,forks:1246,starup:67},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1307,forks:140,starup:104},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23742,forks:1352,starup:524},{title:`hotheadhacker /

      no-as-a-service`,owner:"hotheadhacker",name:"no-as-a-service",avatar:"https://avatars.githubusercontent.com/u/18418340?s=40&v=4",path:"/hotheadhacker/no-as-a-service",ourl:"https://github.com/hotheadhacker",url:"https://github.com/hotheadhacker/no-as-a-service",description:"",language:"JavaScript",stars:7189,forks:445,starup:660}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:162939,forks:25307,starup:73574},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2828,forks:678,starup:1669},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:21102,forks:1007,starup:9761},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2876,forks:288,starup:1976},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:20236,forks:901,starup:10857},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109037,forks:11646,starup:751},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:22734,forks:3666,starup:7613},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32329,forks:6159,starup:1637},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:5617,forks:1096,starup:2798},{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:6253,forks:597,starup:4358},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23742,forks:1352,starup:2052},{title:`jgraph /

      drawio-desktop`,owner:"jgraph",name:"drawio-desktop",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio-desktop",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio-desktop",description:"",language:"JavaScript",stars:60593,forks:5654,starup:772},{title:`vava-nessa /

      free-coding-models`,owner:"vava-nessa",name:"free-coding-models",avatar:"https://avatars.githubusercontent.com/u/5466264?s=40&v=4",path:"/vava-nessa/free-coding-models",ourl:"https://github.com/vava-nessa",url:"https://github.com/vava-nessa/free-coding-models",description:"",language:"JavaScript",stars:1439,forks:166,starup:790},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:58696,forks:6348,starup:2343},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:55706,forks:4706,starup:18766},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1372,forks:418,starup:500},{title:`hotheadhacker /

      no-as-a-service`,owner:"hotheadhacker",name:"no-as-a-service",avatar:"https://avatars.githubusercontent.com/u/18418340?s=40&v=4",path:"/hotheadhacker/no-as-a-service",ourl:"https://github.com/hotheadhacker",url:"https://github.com/hotheadhacker/no-as-a-service",description:"",language:"JavaScript",stars:7189,forks:445,starup:871}],"TypeScript-daily":[{title:`thunderbird /

      thunderbolt`,owner:"thunderbird",name:"thunderbolt",avatar:"https://avatars.githubusercontent.com/u/582130?s=40&v=4",path:"/thunderbird/thunderbolt",ourl:"https://github.com/thunderbird",url:"https://github.com/thunderbird/thunderbolt",description:"",language:"TypeScript",stars:3315,forks:198,starup:591},{title:`zilliztech /

      claude-context`,owner:"zilliztech",name:"claude-context",avatar:"https://avatars.githubusercontent.com/u/17022025?s=40&v=4",path:"/zilliztech/claude-context",ourl:"https://github.com/zilliztech",url:"https://github.com/zilliztech/claude-context",description:"",language:"TypeScript",stars:6381,forks:553,starup:259},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",ourl:"https://github.com/langfuse",url:"https://github.com/langfuse/langfuse",description:"",language:"TypeScript",stars:25280,forks:2569,starup:59},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:80056,forks:8077,starup:47},{title:`tailwindlabs /

      tailwindcss`,owner:"tailwindlabs",name:"tailwindcss",avatar:"https://avatars.githubusercontent.com/u/4323180?s=40&v=4",path:"/tailwindlabs/tailwindcss",ourl:"https://github.com/tailwindlabs",url:"https://github.com/tailwindlabs/tailwindcss",description:"",language:"TypeScript",stars:94668,forks:5205,starup:44},{title:`siyuan-note /

      siyuan`,owner:"siyuan-note",name:"siyuan",avatar:"https://avatars.githubusercontent.com/u/970828?s=40&v=4",path:"/siyuan-note/siyuan",ourl:"https://github.com/siyuan-note",url:"https://github.com/siyuan-note/siyuan",description:"",language:"TypeScript",stars:42837,forks:2711,starup:37},{title:`Helicone /

      helicone`,owner:"Helicone",name:"helicone",avatar:"https://avatars.githubusercontent.com/u/26822232?s=40&v=4",path:"/Helicone/helicone",ourl:"https://github.com/Helicone",url:"https://github.com/Helicone/helicone",description:"",language:"TypeScript",stars:5526,forks:542,starup:6},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:50802,forks:8213,starup:1276},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/10354610?s=40&v=4",path:"/janhq/jan",ourl:"https://github.com/janhq",url:"https://github.com/janhq/jan",description:"",language:"TypeScript",stars:42045,forks:2795,starup:75},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:43980,forks:4150,starup:90},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:10219,forks:1894,starup:107},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:41845,forks:2884,starup:377},{title:`feremabraz /

      bloomberg-terminal`,owner:"feremabraz",name:"bloomberg-terminal",avatar:"https://avatars.githubusercontent.com/u/71205864?s=40&v=4",path:"/feremabraz/bloomberg-terminal",ourl:"https://github.com/feremabraz",url:"https://github.com/feremabraz/bloomberg-terminal",description:"",language:"TypeScript",stars:1156,forks:201,starup:34}],"TypeScript-weekly":[{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:64987,forks:5474,starup:12472},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:22071,forks:2550,starup:5936},{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:18309,forks:2245,starup:7009},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:19192,forks:2969,starup:1572},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:4447,forks:659,starup:697},{title:`resend /

      react-email`,owner:"resend",name:"react-email",avatar:"https://avatars.githubusercontent.com/u/88866334?s=40&v=4",path:"/resend/react-email",ourl:"https://github.com/resend",url:"https://github.com/resend/react-email",description:"",language:"TypeScript",stars:18843,forks:1010,starup:417},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:10219,forks:1894,starup:1334},{title:`onlook-dev /

      onlook`,owner:"onlook-dev",name:"onlook",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/onlook-dev/onlook",ourl:"https://github.com/onlook-dev",url:"https://github.com/onlook-dev/onlook",description:"",language:"TypeScript",stars:25556,forks:1959,starup:480},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2680,forks:257,starup:568},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:29194,forks:5241,starup:1035},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:11617,forks:1960,starup:613},{title:`microsoft /

      Ontology-Playground`,owner:"microsoft",name:"Ontology-Playground",avatar:"https://avatars.githubusercontent.com/u/30834?s=40&v=4",path:"/microsoft/Ontology-Playground",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Ontology-Playground",description:"",language:"TypeScript",stars:430,forks:79,starup:105}],"TypeScript-monthly":[{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:31834,forks:2153,starup:23107},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:19192,forks:2969,starup:5389},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:13978,forks:1744,starup:13494},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:64987,forks:5474,starup:25866},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:55412,forks:9128,starup:21017},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:3244,forks:506,starup:2175},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:24659,forks:2385,starup:20873},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:44892,forks:6128,starup:4357},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:36564,forks:2256,starup:6111},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:8783,forks:525,starup:4039},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:22058,forks:2023,starup:5075},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:8559,forks:5280,starup:1574},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:112346,forks:8203,starup:8440},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:8294,forks:2073,starup:2956},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:111299,forks:7107,starup:15979}],"Vue-daily":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32166,forks:8733,starup:12},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28215,forks:3203,starup:12},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3445,forks:446,starup:9},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1413,forks:67,starup:30},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3212,forks:5011,starup:0},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24723,forks:1809,starup:23},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8832,forks:1722,starup:5},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1417,forks:359,starup:8},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6497,forks:1053,starup:7},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2569,forks:1004,starup:4},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7091,forks:944,starup:1},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14917,forks:1218,starup:19},{title:`aleksey-hoffman /

      sigma-file-manager`,owner:"aleksey-hoffman",name:"sigma-file-manager",avatar:"https://avatars.githubusercontent.com/u/61761672?s=40&v=4",path:"/aleksey-hoffman/sigma-file-manager",ourl:"https://github.com/aleksey-hoffman",url:"https://github.com/aleksey-hoffman/sigma-file-manager",description:"",language:"Vue",stars:5537,forks:228,starup:34},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2557,forks:92,starup:9},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6522,forks:2448,starup:1}],"Vue-weekly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24723,forks:1809,starup:139},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2569,forks:1004,starup:30},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1417,forks:359,starup:41},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5195,forks:1010,starup:61},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1413,forks:67,starup:123},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2811,forks:1236,starup:21},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32166,forks:8733,starup:102},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:521,forks:19,starup:48},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8832,forks:1722,starup:34},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3149,forks:1063,starup:6},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6497,forks:1053,starup:32},{title:`ikuaitu /

      vue-fabric-editor`,owner:"ikuaitu",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/ikuaitu/vue-fabric-editor",ourl:"https://github.com/ikuaitu",url:"https://github.com/ikuaitu/vue-fabric-editor",description:"",language:"Vue",stars:7834,forks:1387,starup:17},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28215,forks:3203,starup:63},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38197,forks:4782,starup:106},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7091,forks:944,starup:21}],"Vue-monthly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24723,forks:1809,starup:507},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2603,forks:279,starup:272},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3445,forks:446,starup:191},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5195,forks:1010,starup:201},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12338,forks:2101,starup:319},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14917,forks:1218,starup:446},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8832,forks:1722,starup:140},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6522,forks:2448,starup:81},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1304,forks:356,starup:115},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2569,forks:1004,starup:124},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:1778,forks:267,starup:235},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8449,forks:1927,starup:137},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32166,forks:8733,starup:394},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28215,forks:3203,starup:210}]},gt=j({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:i}=B(),l=$(()=>b(N[`${r.value}-${o.value}`]));T("color",i),T("data",l);function b(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=P,m=D,g=q,d=H,t=I,e=O,y=R,w=Q,L=U;return c(),_("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>x(r)?r.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>x(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(G,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(s)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),k(y,{key:1,"has-starup":""})):h(s)==="chart"?(c(),k(w,{key:2})):(c(),k(L,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
