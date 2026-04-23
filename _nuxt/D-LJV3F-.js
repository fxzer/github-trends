import L from"./2HwTpQRo.js";import R from"./BSFmLSQe.js";import D from"./Bn5p8wTf.js";import I from"./BWFYtErb.js";import O from"./CoC2OClW.js";import G from"./CsMwYBMf.js";import X from"./CoMyiwSX.js";import{d as z}from"./B_9KuB4R.js";import{s as q,u as M,a as j,b as C,i as H,c as Y}from"./BOTVSjso.js";import{g as T,i as E,j as A,o as h,c as _,n as P,A as Q,b as v,w as x,T as $,k as S,l as c,m as f,r as B,s as V}from"./Be-cOIVR.js";import"./DiTFkbYB.js";import"./p2-M2djV.js";import"./C7hpz2W9.js";import"./M1Zkse5D.js";import"./BeTkF9Zg.js";const K=T({__name:"Chart",setup(k){const s=E("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),r=M("趋势仓库总指标排行榜",o);function u(i){const a=z(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=j(r,C);A(s,()=>{u(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:P({height:b})},null,4))}}),W=Object.assign(K,{__name:"TrendChart"}),F=T({__name:"StarupChart",props:{data:{}},setup(k){const s=k,{data:o}=Q(s),u=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=j(u,C);function b(a){const n=z(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:H(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}A(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:P({height:i})},null,4))}}),U=Object.assign(F,{__name:"TrendStarupChart"}),N={"JavaScript-daily":[{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:6673,forks:1312,starup:384},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:23521,forks:3773,starup:491},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:165088,forks:25633,starup:1173},{title:`Mathieu2301 /

      TradingView-API`,owner:"Mathieu2301",name:"TradingView-API",avatar:"https://avatars.githubusercontent.com/u/21021423?s=40&v=4",path:"/Mathieu2301/TradingView-API",ourl:"https://github.com/Mathieu2301",url:"https://github.com/Mathieu2301/TradingView-API",description:"",language:"JavaScript",stars:3180,forks:637,starup:134},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:26776,forks:2504,starup:66},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:58837,forks:6356,starup:85},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:6201,forks:622,starup:74},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2966,forks:714,starup:72},{title:`xifangczy /

      cat-catch`,owner:"xifangczy",name:"cat-catch",avatar:"https://avatars.githubusercontent.com/u/1239904?s=40&v=4",path:"/xifangczy/cat-catch",ourl:"https://github.com/xifangczy",url:"https://github.com/xifangczy/cat-catch",description:"",language:"JavaScript",stars:19147,forks:1684,starup:32},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:52628,forks:11504,starup:13},{title:`XCQ0607 /

      lxserver`,owner:"XCQ0607",name:"lxserver",avatar:"https://avatars.githubusercontent.com/u/125746521?s=40&v=4",path:"/XCQ0607/lxserver",ourl:"https://github.com/XCQ0607",url:"https://github.com/XCQ0607/lxserver",description:"",language:"JavaScript",stars:324,forks:74,starup:12},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:201,forks:34,starup:7}],"JavaScript-weekly":[{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:6656,forks:655,starup:4364},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:6673,forks:1312,starup:1472},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:23521,forks:3773,starup:1735},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:40609,forks:3666,starup:294},{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:9389,forks:828,starup:291},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:201,forks:34,starup:42},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:112139,forks:36336,starup:216},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:67318,forks:4508,starup:193},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2966,forks:714,starup:404},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2948,forks:293,starup:372},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:21518,forks:1034,starup:1967},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:11897,forks:1251,starup:67},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1336,forks:142,starup:104}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:165088,forks:25633,starup:69085},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2966,forks:714,starup:1794},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2948,forks:293,starup:2054},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109014,forks:11651,starup:768},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:23521,forks:3773,starup:7742},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:21518,forks:1034,starup:9216},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32430,forks:6181,starup:1696},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:6673,forks:1312,starup:3750},{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:6656,forks:655,starup:4896},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:58837,forks:6356,starup:2402},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23871,forks:1366,starup:2141},{title:`vava-nessa /

      free-coding-models`,owner:"vava-nessa",name:"free-coding-models",avatar:"https://avatars.githubusercontent.com/u/5466264?s=40&v=4",path:"/vava-nessa/free-coding-models",ourl:"https://github.com/vava-nessa",url:"https://github.com/vava-nessa/free-coding-models",description:"",language:"JavaScript",stars:1475,forks:168,starup:794},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1396,forks:428,starup:513}],"TypeScript-daily":[{title:`zilliztech /

      claude-context`,owner:"zilliztech",name:"claude-context",avatar:"https://avatars.githubusercontent.com/u/17022025?s=40&v=4",path:"/zilliztech/claude-context",ourl:"https://github.com/zilliztech",url:"https://github.com/zilliztech/claude-context",description:"",language:"TypeScript",stars:8248,forks:654,starup:1023},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:12802,forks:2012,starup:771},{title:`cline /

      cline`,owner:"cline",name:"cline",avatar:"https://avatars.githubusercontent.com/u/7799382?s=40&v=4",path:"/cline/cline",ourl:"https://github.com/cline",url:"https://github.com/cline/cline",description:"",language:"TypeScript",stars:60734,forks:6243,starup:103},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:9222,forks:650,starup:302},{title:`calcom /

      cal.diy`,owner:"calcom",name:"cal.diy",avatar:"https://avatars.githubusercontent.com/u/3504472?s=40&v=4",path:"/calcom/cal.diy",ourl:"https://github.com/calcom",url:"https://github.com/calcom/cal.diy",description:"",language:"TypeScript",stars:42031,forks:12981,starup:138},{title:`Stirling-Tools /

      Stirling-PDF`,owner:"Stirling-Tools",name:"Stirling-PDF",avatar:"https://avatars.githubusercontent.com/u/77850077?s=40&v=4",path:"/Stirling-Tools/Stirling-PDF",ourl:"https://github.com/Stirling-Tools",url:"https://github.com/Stirling-Tools/Stirling-PDF",description:"",language:"TypeScript",stars:77686,forks:6770,starup:115},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:39997,forks:4416,starup:698},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:148226,forks:16960,starup:655},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:15803,forks:1291,starup:559},{title:`phodal /

      routa`,owner:"phodal",name:"routa",avatar:"https://avatars.githubusercontent.com/u/472311?s=40&v=4",path:"/phodal/routa",ourl:"https://github.com/phodal",url:"https://github.com/phodal/routa",description:"",language:"TypeScript",stars:767,forks:135,starup:19},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:39054,forks:4560,starup:457},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:22605,forks:2617,starup:107},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/vscode",description:"",language:"TypeScript",stars:184183,forks:39372,starup:71}],"TypeScript-weekly":[{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:22723,forks:2653,starup:4495},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:66305,forks:5612,starup:8739},{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:20052,forks:2433,starup:6015},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:9222,forks:650,starup:1704},{title:`zilliztech /

      claude-context`,owner:"zilliztech",name:"claude-context",avatar:"https://avatars.githubusercontent.com/u/17022025?s=40&v=4",path:"/zilliztech/claude-context",ourl:"https://github.com/zilliztech",url:"https://github.com/zilliztech/claude-context",description:"",language:"TypeScript",stars:8248,forks:654,starup:1381},{title:`vercel-labs /

      open-agents`,owner:"vercel-labs",name:"open-agents",avatar:"https://avatars.githubusercontent.com/u/49612682?s=40&v=4",path:"/vercel-labs/open-agents",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/open-agents",description:"",language:"TypeScript",stars:4072,forks:450,starup:1684},{title:`mnfst /

      manifest`,owner:"mnfst",name:"manifest",avatar:"https://avatars.githubusercontent.com/u/6626184?s=40&v=4",path:"/mnfst/manifest",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/manifest",description:"",language:"TypeScript",stars:5582,forks:319,starup:1189},{title:`firecrawl /

      open-lovable`,owner:"firecrawl",name:"open-lovable",avatar:"https://avatars.githubusercontent.com/u/124798203?s=40&v=4",path:"/firecrawl/open-lovable",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/open-lovable",description:"",language:"TypeScript",stars:25787,forks:4949,starup:485},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:10365,forks:1930,starup:1391},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2729,forks:271,starup:426},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",ourl:"https://github.com/langfuse",url:"https://github.com/langfuse/langfuse",description:"",language:"TypeScript",stars:25907,forks:2625,starup:890},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:4484,forks:665,starup:630},{title:`calcom /

      cal.diy`,owner:"calcom",name:"cal.diy",avatar:"https://avatars.githubusercontent.com/u/3504472?s=40&v=4",path:"/calcom/cal.diy",ourl:"https://github.com/calcom",url:"https://github.com/calcom/cal.diy",description:"",language:"TypeScript",stars:42031,forks:12981,starup:755},{title:`onlook-dev /

      onlook`,owner:"onlook-dev",name:"onlook",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/onlook-dev/onlook",ourl:"https://github.com/onlook-dev",url:"https://github.com/onlook-dev/onlook",description:"",language:"TypeScript",stars:25596,forks:1963,starup:498},{title:`siyuan-note /

      siyuan`,owner:"siyuan-note",name:"siyuan",avatar:"https://avatars.githubusercontent.com/u/970828?s=40&v=4",path:"/siyuan-note/siyuan",ourl:"https://github.com/siyuan-note",url:"https://github.com/siyuan-note/siyuan",description:"",language:"TypeScript",stars:42928,forks:2720,starup:308}],"TypeScript-monthly":[{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:32356,forks:2191,starup:23580},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:19462,forks:3012,starup:5672},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:66305,forks:5612,starup:26778},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:55951,forks:9212,starup:20303},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:3327,forks:533,starup:2207},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:14229,forks:1789,starup:13391},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:45076,forks:6174,starup:4565},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:8446,forks:2101,starup:2997},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:23765,forks:2270,starup:3049},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:36894,forks:2274,starup:6133},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:8982,forks:533,starup:4128},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:8618,forks:5324,starup:1523},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2729,forks:271,starup:741},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:112851,forks:8244,starup:8519},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:111772,forks:7122,starup:15801}],"Vue-daily":[{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2831,forks:1243,starup:12},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2579,forks:1010,starup:7},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14967,forks:1223,starup:29},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:518,forks:20,starup:32},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6531,forks:2452,starup:5},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38231,forks:4787,starup:14},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12724,forks:631,starup:4},{title:`formulahendry /

      acp-ui`,owner:"formulahendry",name:"acp-ui",avatar:"https://avatars.githubusercontent.com/u/1050213?s=40&v=4",path:"/formulahendry/acp-ui",ourl:"https://github.com/formulahendry",url:"https://github.com/formulahendry/acp-ui",description:"",language:"Vue",stars:188,forks:21,starup:2},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6549,forks:4477,starup:3},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14283,forks:1671,starup:5},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3463,forks:446,starup:11},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11513,forks:1875,starup:4},{title:`ikuaitu /

      vue-fabric-editor`,owner:"ikuaitu",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/ikuaitu/vue-fabric-editor",ourl:"https://github.com/ikuaitu",url:"https://github.com/ikuaitu/vue-fabric-editor",description:"",language:"Vue",stars:7837,forks:1389,starup:0},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24767,forks:1809,starup:33},{title:`Kong /

      kongponents`,owner:"Kong",name:"kongponents",avatar:"https://avatars.githubusercontent.com/u/32174276?s=40&v=4",path:"/Kong/kongponents",ourl:"https://github.com/Kong",url:"https://github.com/Kong/kongponents",description:"",language:"Vue",stars:162,forks:27,starup:0},{title:`mizhexiaoxiao /

      vue-fastapi-admin`,owner:"mizhexiaoxiao",name:"vue-fastapi-admin",avatar:"https://avatars.githubusercontent.com/u/54677442?s=40&v=4",path:"/mizhexiaoxiao/vue-fastapi-admin",ourl:"https://github.com/mizhexiaoxiao",url:"https://github.com/mizhexiaoxiao/vue-fastapi-admin",description:"",language:"Vue",stars:2102,forks:399,starup:3},{title:`stark81 /

      VutronMusic`,owner:"stark81",name:"VutronMusic",avatar:"https://avatars.githubusercontent.com/u/48707376?s=40&v=4",path:"/stark81/VutronMusic",ourl:"https://github.com/stark81",url:"https://github.com/stark81/VutronMusic",description:"",language:"Vue",stars:1396,forks:78,starup:3}],"Vue-weekly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24767,forks:1809,starup:166},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2579,forks:1010,starup:29},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32196,forks:8734,starup:100},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1454,forks:68,starup:156},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14967,forks:1223,starup:139},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8848,forks:1722,starup:38},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2831,forks:1243,starup:34},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:518,forks:20,starup:158},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1427,forks:363,starup:51},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5205,forks:1012,starup:57},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38231,forks:4787,starup:103},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6505,forks:1055,starup:29},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1311,forks:358,starup:27},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3463,forks:446,starup:43},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28217,forks:3205,starup:49},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18808,forks:3931,starup:30},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6531,forks:2452,starup:22},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7096,forks:945,starup:22},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:9916,forks:836,starup:18},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6549,forks:4477,starup:27}],"Vue-monthly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24767,forks:1809,starup:546},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3463,forks:446,starup:192},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12355,forks:2102,starup:327},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14967,forks:1223,starup:494},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8848,forks:1722,starup:146},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1311,forks:358,starup:116},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2579,forks:1010,starup:128},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5205,forks:1012,starup:204},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6531,forks:2452,starup:85},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:518,forks:20,starup:291},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8455,forks:1930,starup:144},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32196,forks:8734,starup:409},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:1786,forks:267,starup:233},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18808,forks:3931,starup:97}]},gt=T({__name:"index",setup(k){const{view:s,dateRange:o,language:r,color:u}=Y(),l=B(()=>b(N[`${r.value}-${o.value}`]));V("color",u),V("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=L,m=R,g=D,d=I,t=O,e=G,y=X,w=W,J=U;return h(),_("div",null,[v(d,null,{default:x(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v($,{name:"fade-top",mode:"out-in"},{default:x(()=>[c(s)==="list"?(h(),f(e,{key:0},{icons:x(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),f(y,{key:1,"has-starup":""})):c(s)==="chart"?(h(),f(w,{key:2})):(h(),f(J,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
