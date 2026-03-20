import F from"./mJ8DmQst.js";import R from"./Czj-p3QA.js";import H from"./JVJA496-.js";import W from"./BCCYfmqs.js";import L from"./8QOAdNJJ.js";import q from"./Bba5tikg.js";import D from"./BGgwDoSV.js";import{d as A}from"./B_9KuB4R.js";import{s as B,u as C,a as V,b as I,i as M,c as O}from"./DCRLv7QR.js";import{g as _,i as X,j as J,o as h,c as T,n as z,A as $,b,w as S,T as U,k as x,l as c,m as k,r as K,s as j}from"./Cfth3xAb.js";import"./CtCukmSA.js";import"./p2-M2djV.js";import"./BdN93L95.js";import"./Cv03JGfv.js";import"./DdaNJMpo.js";const G=_({__name:"Chart",setup(f){const s=X("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(B),r=C("趋势仓库总指标排行榜",o);function u(i){const a=A(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=V(r,I);J(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:z({height:v})},null,4))}}),E=Object.assign(G,{__name:"TrendChart"}),N=_({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=$(s),u=C("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,I);function v(a){const n=A(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:M(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:z({height:i})},null,4))}}),Q=Object.assign(N,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:9297,forks:392,starup:1074},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:89898,forks:11779,starup:2545},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6099,forks:896,starup:206},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:13685,forks:1245,starup:303},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:36965,forks:3001,starup:1487},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9889,forks:1512,starup:66},{title:`xnx3 /

      translate`,owner:"xnx3",name:"translate",avatar:"https://avatars.githubusercontent.com/u/8872471?s=40&v=4",path:"/xnx3/translate",ourl:"https://github.com/xnx3",url:"https://github.com/xnx3/translate",description:"",language:"JavaScript",stars:2747,forks:424,starup:36},{title:`cv-cat /

      Spider_XHS`,owner:"cv-cat",name:"Spider_XHS",avatar:"https://avatars.githubusercontent.com/u/94289429?s=40&v=4",path:"/cv-cat/Spider_XHS",ourl:"https://github.com/cv-cat",url:"https://github.com/cv-cat/Spider_XHS",description:"",language:"JavaScript",stars:4664,forks:831,starup:17},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:42014,forks:2221,starup:40},{title:`leaningtech /

      webvm`,owner:"leaningtech",name:"webvm",avatar:"https://avatars.githubusercontent.com/u/191061?s=40&v=4",path:"/leaningtech/webvm",ourl:"https://github.com/leaningtech",url:"https://github.com/leaningtech/webvm",description:"",language:"JavaScript",stars:16567,forks:3065,starup:15},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"JavaScript",stars:54595,forks:4040,starup:56}],"JavaScript-weekly":[{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:9297,forks:392,starup:3674},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:11208,forks:431,starup:6432},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:89898,forks:11779,starup:14298},{title:`andrewyng /

      context-hub`,owner:"andrewyng",name:"context-hub",avatar:"https://avatars.githubusercontent.com/u/1796239?s=40&v=4",path:"/andrewyng/context-hub",ourl:"https://github.com/andrewyng",url:"https://github.com/andrewyng/context-hub",description:"",language:"JavaScript",stars:10881,forks:960,starup:5237},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20418,forks:1364,starup:142},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:36965,forks:3001,starup:7165},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:13483,forks:786,starup:583},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:38679,forks:2803,starup:4200},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9889,forks:1512,starup:448},{title:`ComposioHQ /

      awesome-claude-plugins`,owner:"ComposioHQ",name:"awesome-claude-plugins",avatar:"https://avatars.githubusercontent.com/u/67639393?s=40&v=4",path:"/ComposioHQ/awesome-claude-plugins",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/awesome-claude-plugins",description:"",language:"JavaScript",stars:1201,forks:223,starup:57},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6099,forks:896,starup:760},{title:`tabler /

      tabler-icons`,owner:"tabler",name:"tabler-icons",avatar:"https://avatars.githubusercontent.com/u/1282324?s=40&v=4",path:"/tabler/tabler-icons",ourl:"https://github.com/tabler",url:"https://github.com/tabler/tabler-icons",description:"",language:"JavaScript",stars:20417,forks:1099,starup:114},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:14971,forks:2231,starup:1813},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30803,forks:5880,starup:354}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:89898,forks:11779,starup:39351},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:36965,forks:3001,starup:19752},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:14971,forks:2231,starup:6475},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:9297,forks:392,starup:4730},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1117,forks:308,starup:659},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10505,forks:1126,starup:1541},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4261,forks:724,starup:667},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30803,forks:5880,starup:1130},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9889,forks:1512,starup:1706},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1492,forks:140,starup:486},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6099,forks:896,starup:1991},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:869,forks:94,starup:338},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:56515,forks:6106,starup:1878},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22474,forks:846,starup:333},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:42014,forks:2221,starup:1073},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1512,forks:71,starup:455}],"TypeScript-daily":[{title:`vas3k /

      TaxHacker`,owner:"vas3k",name:"TaxHacker",avatar:"https://avatars.githubusercontent.com/u/176344?s=40&v=4",path:"/vas3k/TaxHacker",ourl:"https://github.com/vas3k",url:"https://github.com/vas3k/TaxHacker",description:"",language:"TypeScript",stars:1757,forks:247,starup:136},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:126176,forks:13326,starup:825},{title:`code-yeongyu /

      oh-my-openagent`,owner:"code-yeongyu",name:"oh-my-openagent",avatar:"https://avatars.githubusercontent.com/u/11153873?s=40&v=4",path:"/code-yeongyu/oh-my-openagent",ourl:"https://github.com/code-yeongyu",url:"https://github.com/code-yeongyu/oh-my-openagent",description:"",language:"TypeScript",stars:41870,forks:3122,starup:368},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1154,forks:127,starup:37},{title:`nexmoe /

      VidBee`,owner:"nexmoe",name:"VidBee",avatar:"https://avatars.githubusercontent.com/u/16796652?s=40&v=4",path:"/nexmoe/VidBee",ourl:"https://github.com/nexmoe",url:"https://github.com/nexmoe/VidBee",description:"",language:"TypeScript",stars:7448,forks:515,starup:109},{title:`yarnpkg /

      berry`,owner:"yarnpkg",name:"berry",avatar:"https://avatars.githubusercontent.com/u/1037931?s=40&v=4",path:"/yarnpkg/berry",ourl:"https://github.com/yarnpkg",url:"https://github.com/yarnpkg/berry",description:"",language:"TypeScript",stars:8082,forks:1270,starup:19},{title:`storybookjs /

      storybook`,owner:"storybookjs",name:"storybook",avatar:"https://avatars.githubusercontent.com/u/3070389?s=40&v=4",path:"/storybookjs/storybook",ourl:"https://github.com/storybookjs",url:"https://github.com/storybookjs/storybook",description:"",language:"TypeScript",stars:89500,forks:9944,starup:16},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:9707,forks:1269,starup:203}],"TypeScript-weekly":[{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:12122,forks:921,starup:6243},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:34577,forks:5577,starup:7836},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:17782,forks:1531,starup:4755},{title:`InsForge /

      InsForge`,owner:"InsForge",name:"InsForge",avatar:"https://avatars.githubusercontent.com/u/26497075?s=40&v=4",path:"/InsForge/InsForge",ourl:"https://github.com/InsForge",url:"https://github.com/InsForge/InsForge",description:"",language:"TypeScript",stars:4959,forks:517,starup:2270},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:18264,forks:2104,starup:5793},{title:`zhukunpenglinyutong /

      idea-claude-code-gui`,owner:"zhukunpenglinyutong",name:"idea-claude-code-gui",avatar:"https://avatars.githubusercontent.com/u/31264015?s=40&v=4",path:"/zhukunpenglinyutong/idea-claude-code-gui",ourl:"https://github.com/zhukunpenglinyutong",url:"https://github.com/zhukunpenglinyutong/idea-claude-code-gui",description:"",language:"TypeScript",stars:2048,forks:228,starup:404},{title:`DaKheera47 /

      job-ops`,owner:"DaKheera47",name:"job-ops",avatar:"https://avatars.githubusercontent.com/u/53654735?s=40&v=4",path:"/DaKheera47/job-ops",ourl:"https://github.com/DaKheera47",url:"https://github.com/DaKheera47/job-ops",description:"",language:"TypeScript",stars:2043,forks:197,starup:855},{title:`7836246 /

      cursor2api`,owner:"7836246",name:"cursor2api",avatar:"https://avatars.githubusercontent.com/u/65436665?s=40&v=4",path:"/7836246/cursor2api",ourl:"https://github.com/7836246",url:"https://github.com/7836246/cursor2api",description:"",language:"TypeScript",stars:1006,forks:307,starup:348},{title:`Stirling-Tools /

      Stirling-PDF`,owner:"Stirling-Tools",name:"Stirling-PDF",avatar:"https://avatars.githubusercontent.com/u/77850077?s=40&v=4",path:"/Stirling-Tools/Stirling-PDF",ourl:"https://github.com/Stirling-Tools",url:"https://github.com/Stirling-Tools/Stirling-PDF",description:"",language:"TypeScript",stars:75600,forks:6437,starup:400},{title:`sirmalloc /

      ccstatusline`,owner:"sirmalloc",name:"ccstatusline",avatar:"https://avatars.githubusercontent.com/u/2913994?s=40&v=4",path:"/sirmalloc/ccstatusline",ourl:"https://github.com/sirmalloc",url:"https://github.com/sirmalloc/ccstatusline",description:"",language:"TypeScript",stars:5586,forks:233,starup:644}],"TypeScript-monthly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:41597,forks:6803,starup:33111},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:34870,forks:3458,starup:17300},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:34577,forks:5577,starup:16125},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:17782,forks:1531,starup:7122},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:7510,forks:540,starup:5670},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:26258,forks:2775,starup:12189},{title:`blackboardsh /

      electrobun`,owner:"blackboardsh",name:"electrobun",avatar:"https://avatars.githubusercontent.com/u/75102186?s=40&v=4",path:"/blackboardsh/electrobun",ourl:"https://github.com/blackboardsh",url:"https://github.com/blackboardsh/electrobun",description:"",language:"TypeScript",stars:10346,forks:239,starup:4927},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:33168,forks:3573,starup:4295},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:8707,forks:1106,starup:2354},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:16277,forks:967,starup:6777},{title:`JimLiu /

      baoyu-skills`,owner:"JimLiu",name:"baoyu-skills",avatar:"https://avatars.githubusercontent.com/u/648674?s=40&v=4",path:"/JimLiu/baoyu-skills",ourl:"https://github.com/JimLiu",url:"https://github.com/JimLiu/baoyu-skills",description:"",language:"TypeScript",stars:9774,forks:1109,starup:4893},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:6477,forks:1013,starup:4093},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:326727,forks:63201,starup:117458},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:7036,forks:379,starup:3240},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1154,forks:127,starup:647},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4583,forks:457,starup:1364},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:11067,forks:893,starup:4672},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:22093,forks:2407,starup:7701},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:32657,forks:2155,starup:7949}],"Vue-daily":[{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90297,forks:30570,starup:11},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31840,forks:8663,starup:18},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37708,forks:4707,starup:22},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12051,forks:2045,starup:12},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14165,forks:1660,starup:3},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28049,forks:3168,starup:6},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3056,forks:453,starup:4},{title:`zs1083339604 /

      FaceWinUnlock-Tauri`,owner:"zs1083339604",name:"FaceWinUnlock-Tauri",avatar:"https://avatars.githubusercontent.com/u/41194731?s=40&v=4",path:"/zs1083339604/FaceWinUnlock-Tauri",ourl:"https://github.com/zs1083339604",url:"https://github.com/zs1083339604/FaceWinUnlock-Tauri",description:"",language:"Vue",stars:1577,forks:89,starup:10},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11411,forks:3088,starup:2},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21416,forks:3913,starup:28},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6467,forks:2428,starup:6}],"Vue-weekly":[{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3273,forks:434,starup:52},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31840,forks:8663,starup:104},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90297,forks:30570,starup:36},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12051,forks:2045,starup:93},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8710,forks:1701,starup:31},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14165,forks:1660,starup:23},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18746,forks:3934,starup:24},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8334,forks:1904,starup:23},{title:`laoshuikaixue /

      VoiceHub`,owner:"laoshuikaixue",name:"VoiceHub",avatar:"https://avatars.githubusercontent.com/u/79132480?s=40&v=4",path:"/laoshuikaixue/VoiceHub",ourl:"https://github.com/laoshuikaixue",url:"https://github.com/laoshuikaixue/VoiceHub",description:"",language:"Vue",stars:114,forks:44,starup:15},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3197,forks:5008,starup:6},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12634,forks:623,starup:30}],"Vue-monthly":[{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3056,forks:453,starup:144},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:938,forks:274,starup:34},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:159,forks:353,starup:19},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21172,forks:2306,starup:162},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:753,forks:76,starup:20},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8710,forks:1701,starup:112},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1089,forks:82,starup:180},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3384,forks:276,starup:175},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3197,forks:5008,starup:19},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:329,forks:37365,starup:16},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6305,forks:492,starup:126}]},gt=_({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=O(),l=K(()=>v(Y[`${r.value}-${o.value}`]));j("color",u),j("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=F,m=R,g=H,d=W,t=L,e=q,w=D,y=E,P=Q;return h(),T("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>x(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>x(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(U,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(y,{key:2})):(h(),k(P,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
