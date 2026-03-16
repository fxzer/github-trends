import R from"./DEF7kavS.js";import F from"./FdSpc-uv.js";import B from"./DtBsmHU5.js";import L from"./CyuoJbd1.js";import q from"./wlbxIBKc.js";import X from"./q6ZII9Y9.js";import D from"./C2KX1h9l.js";import{d as V}from"./B_9KuB4R.js";import{s as H,u as C,a as j,b as z,i as P,c as K}from"./Ceg3IkG_.js";import{g as _,i as G,j as I,o as c,c as T,n as J,A as $,b,w as S,T as E,k as x,l as h,m as k,r as U,s as A}from"./BqTURFjl.js";import"./DaI1qYon.js";import"./p2-M2djV.js";import"./WP1E1FUQ.js";import"./DRkkEtQR.js";import"./H6v8rtYX.js";const W=_({__name:"Chart",setup(f){const s=G("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),r=C("趋势仓库总指标排行榜",o);function u(i){const a=V(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=j(r,z);I(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:J({height:v})},null,4))}}),N=Object.assign(W,{__name:"TrendChart"}),Q=_({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=$(s),u=C("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=j(u,z);function v(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:P(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}I(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:J({height:i})},null,4))}}),Y=Object.assign(Q,{__name:"TrendStarupChart"}),O={"JavaScript-daily":[{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:13315,forks:764,starup:124},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20361,forks:1355,starup:16},{title:`SynkraAI /

      aiox-core`,owner:"SynkraAI",name:"aiox-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aiox-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aiox-core",description:"",language:"JavaScript",stars:2311,forks:758,starup:26},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22739,forks:2710,starup:100},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30686,forks:2575,starup:498},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:8845,forks:354,starup:636},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:966,forks:273,starup:26},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11098,forks:3069,starup:6},{title:`tiagozip /

      cap`,owner:"tiagozip",name:"cap",avatar:"https://avatars.githubusercontent.com/u/70700766?s=40&v=4",path:"/tiagozip/cap",ourl:"https://github.com/tiagozip",url:"https://github.com/tiagozip/cap",description:"",language:"JavaScript",stars:5090,forks:334,starup:10},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:3450,forks:172,starup:5},{title:`tabler /

      tabler-icons`,owner:"tabler",name:"tabler-icons",avatar:"https://avatars.githubusercontent.com/u/1282324?s=40&v=4",path:"/tabler/tabler-icons",ourl:"https://github.com/tabler",url:"https://github.com/tabler/tabler-icons",description:"",language:"JavaScript",stars:20330,forks:1092,starup:9}],"JavaScript-weekly":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:8845,forks:354,starup:7077},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30686,forks:2575,starup:4214},{title:`apify /

      agent-skills`,owner:"apify",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/apify/agent-skills",ourl:"https://github.com/apify",url:"https://github.com/apify/agent-skills",description:"",language:"JavaScript",stars:1636,forks:176,starup:352},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:13717,forks:2008,starup:1746},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",ourl:"https://github.com/jaywcjlove",url:"https://github.com/jaywcjlove/awesome-mac",description:"",language:"JavaScript",stars:100252,forks:7498,starup:579},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:3913,forks:356,starup:440},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4157,forks:718,starup:188},{title:`libaxuan /

      cursor2api-go`,owner:"libaxuan",name:"cursor2api-go",avatar:"https://avatars.githubusercontent.com/u/33255877?s=40&v=4",path:"/libaxuan/cursor2api-go",ourl:"https://github.com/libaxuan",url:"https://github.com/libaxuan/cursor2api-go",description:"",language:"JavaScript",stars:856,forks:267,starup:296},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:9982,forks:19160,starup:245},{title:`fishjar /

      kiss-translator`,owner:"fishjar",name:"kiss-translator",avatar:"https://avatars.githubusercontent.com/u/1157624?s=40&v=4",path:"/fishjar/kiss-translator",ourl:"https://github.com/fishjar",url:"https://github.com/fishjar/kiss-translator",description:"",language:"JavaScript",stars:9049,forks:379,starup:101},{title:`zhaoolee /

      ChromeAppHeroes`,owner:"zhaoolee",name:"ChromeAppHeroes",avatar:"https://avatars.githubusercontent.com/u/15868458?s=40&v=4",path:"/zhaoolee/ChromeAppHeroes",ourl:"https://github.com/zhaoolee",url:"https://github.com/zhaoolee/ChromeAppHeroes",description:"",language:"JavaScript",stars:25339,forks:2614,starup:781},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20361,forks:1355,starup:137},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30581,forks:5837,starup:364}],"JavaScript-monthly":[{title:`SynkraAI /

      aiox-core`,owner:"SynkraAI",name:"aiox-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aiox-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aiox-core",description:"",language:"JavaScript",stars:2311,forks:758,starup:1590},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30686,forks:2575,starup:16270},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:13717,forks:2008,starup:5842},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10475,forks:1122,starup:1520},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1443,forks:133,starup:539},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4157,forks:718,starup:586},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41822,forks:2200,starup:1026},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30581,forks:5837,starup:968},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27202,forks:4940,starup:456},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22424,forks:843,starup:323},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1463,forks:66,starup:447},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:24392,forks:4922,starup:1335},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22739,forks:2710,starup:4640},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:56285,forks:6080,starup:1794},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:438,forks:45,starup:119},{title:`firecrawl /

      firecrawl-mcp-server`,owner:"firecrawl",name:"firecrawl-mcp-server",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl-mcp-server",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl-mcp-server",description:"",language:"JavaScript",stars:5779,forks:645,starup:288}],"TypeScript-daily":[{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:1266,forks:130,starup:205},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:28364,forks:4921,starup:872},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:14653,forks:1701,starup:451},{title:`InsForge /

      InsForge`,owner:"InsForge",name:"InsForge",avatar:"https://avatars.githubusercontent.com/u/26497075?s=40&v=4",path:"/InsForge/InsForge",ourl:"https://github.com/InsForge",url:"https://github.com/InsForge/InsForge",description:"",language:"TypeScript",stars:4668,forks:480,starup:515},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:9025,forks:716,starup:554},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:29281,forks:1725,starup:185},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:8278,forks:598,starup:224},{title:`awslabs /

      fullstack-solution-template-for-agentcore`,owner:"awslabs",name:"fullstack-solution-template-for-agentcore",avatar:"https://avatars.githubusercontent.com/u/5712203?s=40&v=4",path:"/awslabs/fullstack-solution-template-for-agentcore",ourl:"https://github.com/awslabs",url:"https://github.com/awslabs/fullstack-solution-template-for-agentcore",description:"",language:"TypeScript",stars:363,forks:87,starup:3},{title:`vudovn /

      antigravity-kit`,owner:"vudovn",name:"antigravity-kit",avatar:"https://avatars.githubusercontent.com/u/116963762?s=40&v=4",path:"/vudovn/antigravity-kit",ourl:"https://github.com/vudovn",url:"https://github.com/vudovn/antigravity-kit",description:"",language:"TypeScript",stars:6173,forks:1219,starup:140},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:79025,forks:7917,starup:54},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:24316,forks:2563,starup:439},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:24686,forks:2934,starup:151},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:3155,forks:183,starup:71}],"TypeScript-weekly":[{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:16509,forks:1445,starup:5337},{title:`FlorianBruniaux /

      claude-code-ultimate-guide`,owner:"FlorianBruniaux",name:"claude-code-ultimate-guide",avatar:"https://avatars.githubusercontent.com/u/3902606?s=40&v=4",path:"/FlorianBruniaux/claude-code-ultimate-guide",ourl:"https://github.com/FlorianBruniaux",url:"https://github.com/FlorianBruniaux/claude-code-ultimate-guide",description:"",language:"TypeScript",stars:1566,forks:256,starup:866},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:28364,forks:4921,starup:4067},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:6030,forks:944,starup:1296},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:109664,forks:8197,starup:1237},{title:`sirmalloc /

      ccstatusline`,owner:"sirmalloc",name:"ccstatusline",avatar:"https://avatars.githubusercontent.com/u/2913994?s=40&v=4",path:"/sirmalloc/ccstatusline",ourl:"https://github.com/sirmalloc",url:"https://github.com/sirmalloc/ccstatusline",description:"",language:"TypeScript",stars:5113,forks:205,starup:484},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"TypeScript",stars:25296,forks:2904,starup:1145},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:15531,forks:907,starup:2117},{title:`web-infra-dev /

      midscene`,owner:"web-infra-dev",name:"midscene",avatar:"https://avatars.githubusercontent.com/u/11739753?s=40&v=4",path:"/web-infra-dev/midscene",ourl:"https://github.com/web-infra-dev",url:"https://github.com/web-infra-dev/midscene",description:"",language:"TypeScript",stars:12175,forks:895,starup:171},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:9025,forks:716,starup:6971}],"TypeScript-monthly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:38793,forks:6434,starup:32908},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:33900,forks:3370,starup:16483},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:315601,forks:60391,starup:121912},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:28364,forks:4921,starup:10552},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:24316,forks:2563,starup:11873},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:7111,forks:491,starup:5429},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:16509,forks:1445,starup:5808},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:15531,forks:907,starup:6975},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:6030,forks:944,starup:3995},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1027,forks:106,starup:678},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:33025,forks:3552,starup:4210},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:10289,forks:693,starup:1580},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:8479,forks:1090,starup:2236},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:1999,forks:174,starup:1215},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:9265,forks:790,starup:2808},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:5051,forks:322,starup:2731},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:10374,forks:843,starup:4377},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4521,forks:452,starup:1337},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:33692,forks:3386,starup:11531},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"TypeScript",stars:25296,forks:2904,starup:4054}],"Vue-daily":[{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3248,forks:431,starup:12},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:329,forks:36861,starup:1},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:933,forks:274,starup:3},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3193,forks:5006,starup:2},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2809,forks:166,starup:4},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32657,forks:4720,starup:12},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1179,forks:321,starup:2},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",ourl:"https://github.com/hslr-s",url:"https://github.com/hslr-s/sun-panel",description:"",language:"Vue",stars:5011,forks:588,starup:1},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:2969,forks:60,starup:18},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31785,forks:8645,starup:5},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1614,forks:200,starup:2},{title:`NyaomiDEV /

      Ampersand`,owner:"NyaomiDEV",name:"Ampersand",avatar:"https://avatars.githubusercontent.com/u/13177694?s=40&v=4",path:"/NyaomiDEV/Ampersand",ourl:"https://github.com/NyaomiDEV",url:"https://github.com/NyaomiDEV/Ampersand",description:"",language:"Vue",stars:53,forks:11,starup:1},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:175,forks:23,starup:0},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:6675,forks:315,starup:2},{title:`Rule-34 /

      App`,owner:"Rule-34",name:"App",avatar:"https://avatars.githubusercontent.com/u/37181533?s=40&v=4",path:"/Rule-34/App",ourl:"https://github.com/Rule-34",url:"https://github.com/Rule-34/App",description:"",language:"Vue",stars:321,forks:42,starup:0},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6441,forks:4358,starup:5}],"Vue-weekly":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31785,forks:8645,starup:105},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8689,forks:1697,starup:32},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8320,forks:1898,starup:27},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11994,forks:2034,starup:85},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12621,forks:622,starup:34},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3248,forks:431,starup:66},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:158,forks:344,starup:4},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1034,forks:51,starup:33},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:2595,forks:456,starup:29},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18731,forks:3932,starup:19},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6296,forks:491,starup:30},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90288,forks:30577,starup:27},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1067,forks:80,starup:37},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21147,forks:2302,starup:37},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:748,forks:75,starup:11}],"Vue-monthly":[{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:933,forks:274,starup:37},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3044,forks:447,starup:137},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:158,forks:344,starup:19},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:748,forks:75,starup:16},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6296,forks:491,starup:130},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3350,forks:275,starup:148},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",ourl:"https://github.com/kailong321200875",url:"https://github.com/kailong321200875/vue-element-plus-admin",description:"",language:"Vue",stars:3561,forks:852,starup:27},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1067,forks:80,starup:167},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2373,forks:326,starup:60},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:205,forks:737,starup:3},{title:`Tencent /

      tdesign`,owner:"Tencent",name:"tdesign",avatar:"https://avatars.githubusercontent.com/u/26377630?s=40&v=4",path:"/Tencent/tdesign",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign",description:"",language:"Vue",stars:3779,forks:312,starup:32},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3193,forks:5006,starup:17},{title:`Colin-XKL /

      FeedCraft`,owner:"Colin-XKL",name:"FeedCraft",avatar:"https://avatars.githubusercontent.com/u/49122401?s=40&v=4",path:"/Colin-XKL/FeedCraft",ourl:"https://github.com/Colin-XKL",url:"https://github.com/Colin-XKL/FeedCraft",description:"",language:"Vue",stars:252,forks:6,starup:72},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1179,forks:321,starup:65}]},gt=_({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=K(),l=U(()=>v(O[`${r.value}-${o.value}`]));A("color",u),A("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=R,m=F,g=B,d=L,t=q,e=X,w=D,y=N,M=Y;return c(),T("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>x(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>x(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(E,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(s)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),k(w,{key:1,"has-starup":""})):h(s)==="chart"?(c(),k(y,{key:2})):(c(),k(M,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
