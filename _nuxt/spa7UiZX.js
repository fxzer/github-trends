import M from"./Bmh303uo.js";import Y from"./DO3fsEXx.js";import B from"./ChtNz5X-.js";import D from"./cFWMKpdy.js";import I from"./CrwicRMl.js";import q from"./6otIs9ou.js";import F from"./CtZpyGwc.js";import{d as C}from"./B_9KuB4R.js";import{s as H,u as V,a as J,b as z,i as W,c as $}from"./TVWxfZnt.js";import{g as x,i as L,j as A,o as l,c as _,n as P,A as E,b as v,w as S,T as G,k as T,l as c,m as k,r as X,s as j}from"./B5VtzRQU.js";import"./B9RtofUE.js";import"./p2-M2djV.js";import"./B_dVQIaW.js";import"./DfDt5FM2.js";import"./CtCdNEqC.js";const U=x({__name:"Chart",setup(f){const s=L("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),r=V("趋势仓库总指标排行榜",o);function n(i){const a=C(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[u,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=u,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:h}=J(r,z);A(s,()=>{n(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(i,a)=>(l(),_("div",{ref_key:"chartRef",ref:h,style:P({height:b})},null,4))}}),K=Object.assign(U,{__name:"TrendChart"}),N=x({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=E(s),n=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:h}=J(n,z);function b(a){const u=C(a);u.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=u.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(m[e%m.length])}));n.value.series[0].data=d,n.value.yAxis.data=g}A(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(l(),_("div",{ref_key:"chartRef",ref:h,style:P({height:i})},null,4))}}),Q=Object.assign(N,{__name:"TrendStarupChart"}),O={"JavaScript-daily":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:109807,forks:14326,starup:2712},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:16711,forks:2502,starup:315},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",ourl:"https://github.com/WhiskeySockets",url:"https://github.com/WhiskeySockets/Baileys",description:"",language:"JavaScript",stars:8738,forks:2839,starup:21},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:494,forks:53,starup:10},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:4465,forks:415,starup:79},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:111577,forks:36316,starup:22},{title:`Yuyz0112 /

      claude-code-reverse`,owner:"Yuyz0112",name:"claude-code-reverse",avatar:"https://avatars.githubusercontent.com/u/13651389?s=40&v=4",path:"/Yuyz0112/claude-code-reverse",ourl:"https://github.com/Yuyz0112",url:"https://github.com/Yuyz0112/claude-code-reverse",description:"",language:"JavaScript",stars:2275,forks:377,starup:21},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:11723,forks:1211,starup:13},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:86140,forks:4831,starup:5},{title:`tiagozip /

      cap`,owner:"tiagozip",name:"cap",avatar:"https://avatars.githubusercontent.com/u/70700766?s=40&v=4",path:"/tiagozip/cap",ourl:"https://github.com/tiagozip",url:"https://github.com/tiagozip/cap",description:"",language:"JavaScript",stars:5133,forks:343,starup:7},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",ourl:"https://github.com/mozilla",url:"https://github.com/mozilla/pdf.js",description:"",language:"JavaScript",stars:53036,forks:10605,starup:6},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/kit",description:"",language:"JavaScript",stars:20389,forks:2229,starup:5}],"JavaScript-weekly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:109807,forks:14326,starup:22442},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:13669,forks:564,starup:6816},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:13756,forks:574,starup:3130},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:42428,forks:3435,starup:7220},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:3289,forks:570,starup:1182},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:16711,forks:2502,starup:1888},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:13783,forks:1251,starup:467},{title:`simple-icons /

      simple-icons`,owner:"simple-icons",name:"simple-icons",avatar:"https://avatars.githubusercontent.com/u/15157491?s=40&v=4",path:"/simple-icons/simple-icons",ourl:"https://github.com/simple-icons",url:"https://github.com/simple-icons/simple-icons",description:"",language:"JavaScript",stars:24747,forks:3084,starup:91},{title:`ComposioHQ /

      awesome-claude-plugins`,owner:"ComposioHQ",name:"awesome-claude-plugins",avatar:"https://avatars.githubusercontent.com/u/67639393?s=40&v=4",path:"/ComposioHQ/awesome-claude-plugins",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/awesome-claude-plugins",description:"",language:"JavaScript",stars:1197,forks:240,starup:52},{title:`microsoft /

      skills-for-copilot-studio`,owner:"microsoft",name:"skills-for-copilot-studio",avatar:"https://avatars.githubusercontent.com/u/23707134?s=40&v=4",path:"/microsoft/skills-for-copilot-studio",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/skills-for-copilot-studio",description:"",language:"JavaScript",stars:79,forks:27,starup:20}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:109807,forks:14326,starup:55418},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:13669,forks:564,starup:9419},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:42428,forks:3435,starup:21708},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:16711,forks:2502,starup:7156},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1274,forks:350,starup:730},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4382,forks:739,starup:647},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:10146,forks:1538,starup:1783},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:31026,forks:5902,starup:1276},{title:`levnikolaevich /

      claude-code-skills`,owner:"levnikolaevich",name:"claude-code-skills",avatar:"https://avatars.githubusercontent.com/u/66056575?s=40&v=4",path:"/levnikolaevich/claude-code-skills",ourl:"https://github.com/levnikolaevich",url:"https://github.com/levnikolaevich/claude-code-skills",description:"",language:"JavaScript",stars:265,forks:45,starup:150},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20476,forks:1373,starup:366},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:21920,forks:1209,starup:1056},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:494,forks:53,starup:139},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:3289,forks:570,starup:3037},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:24860,forks:4990,starup:1378}],"TypeScript-daily":[{title:`Yeachan-Heo /

      oh-my-claudecode`,owner:"Yeachan-Heo",name:"oh-my-claudecode",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-claudecode",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-claudecode",description:"",language:"TypeScript",stars:12276,forks:825,starup:576},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:18801,forks:2319,starup:269},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:41110,forks:5488,starup:198},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:7238,forks:949,starup:779},{title:`letta-ai /

      claude-subconscious`,owner:"letta-ai",name:"claude-subconscious",avatar:"https://avatars.githubusercontent.com/u/422990?s=40&v=4",path:"/letta-ai/claude-subconscious",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/claude-subconscious",description:"",language:"TypeScript",stars:1727,forks:126,starup:446},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:26769,forks:2899,starup:1106},{title:`playcanvas /

      supersplat`,owner:"playcanvas",name:"supersplat",avatar:"https://avatars.githubusercontent.com/u/11276292?s=40&v=4",path:"/playcanvas/supersplat",ourl:"https://github.com/playcanvas",url:"https://github.com/playcanvas/supersplat",description:"",language:"TypeScript",stars:3990,forks:474,starup:24},{title:`Dokploy /

      dokploy`,owner:"Dokploy",name:"dokploy",avatar:"https://avatars.githubusercontent.com/u/47042324?s=40&v=4",path:"/Dokploy/dokploy",ourl:"https://github.com/Dokploy",url:"https://github.com/Dokploy/dokploy",description:"",language:"TypeScript",stars:32138,forks:2238,starup:139},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:98651,forks:6632,starup:547},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:19501,forks:1824,starup:524},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",ourl:"https://github.com/cypress-io",url:"https://github.com/cypress-io/cypress",description:"",language:"TypeScript",stars:49615,forks:3399,starup:4},{title:`modelcontextprotocol /

      servers`,owner:"modelcontextprotocol",name:"servers",avatar:"https://avatars.githubusercontent.com/u/16480113?s=40&v=4",path:"/modelcontextprotocol/servers",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/servers",description:"",language:"TypeScript",stars:82187,forks:10084,starup:149}],"TypeScript-weekly":[{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:17227,forks:1645,starup:13848},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:19501,forks:1824,starup:2064},{title:`letta-ai /

      claude-subconscious`,owner:"letta-ai",name:"claude-subconscious",avatar:"https://avatars.githubusercontent.com/u/422990?s=40&v=4",path:"/letta-ai/claude-subconscious",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/claude-subconscious",description:"",language:"TypeScript",stars:1727,forks:126,starup:366},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:24916,forks:2616,starup:1647},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:3303,forks:364,starup:722},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:39616,forks:6189,starup:6849},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:26769,forks:2899,starup:4942},{title:`vas3k /

      TaxHacker`,owner:"vas3k",name:"TaxHacker",avatar:"https://avatars.githubusercontent.com/u/176344?s=40&v=4",path:"/vas3k/TaxHacker",ourl:"https://github.com/vas3k",url:"https://github.com/vas3k/TaxHacker",description:"",language:"TypeScript",stars:2411,forks:344,starup:924},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:31708,forks:1875,starup:1495}],"TypeScript-monthly":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:35690,forks:3545,starup:18188},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:19847,forks:2294,starup:16463},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:39616,forks:6189,starup:21005},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:44265,forks:7173,starup:29481},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:18560,forks:1589,starup:7867},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:26769,forks:2899,starup:11453},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:7998,forks:601,starup:6011},{title:`FlorianBruniaux /

      claude-code-ultimate-guide`,owner:"FlorianBruniaux",name:"claude-code-ultimate-guide",avatar:"https://avatars.githubusercontent.com/u/3902606?s=40&v=4",path:"/FlorianBruniaux/claude-code-ultimate-guide",ourl:"https://github.com/FlorianBruniaux",url:"https://github.com/FlorianBruniaux/claude-code-ultimate-guide",description:"",language:"TypeScript",stars:2286,forks:335,starup:1862},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:6958,forks:1089,starup:4077},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:28183,forks:2985,starup:11555},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:33429,forks:3625,starup:4472},{title:`letta-ai /

      claude-subconscious`,owner:"letta-ai",name:"claude-subconscious",avatar:"https://avatars.githubusercontent.com/u/422990?s=40&v=4",path:"/letta-ai/claude-subconscious",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/claude-subconscious",description:"",language:"TypeScript",stars:1727,forks:126,starup:1249},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1286,forks:145,starup:656},{title:`blackboardsh /

      electrobun`,owner:"blackboardsh",name:"electrobun",avatar:"https://avatars.githubusercontent.com/u/75102186?s=40&v=4",path:"/blackboardsh/electrobun",ourl:"https://github.com/blackboardsh",url:"https://github.com/blackboardsh/electrobun",description:"",language:"TypeScript",stars:10767,forks:254,starup:3727},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:16945,forks:1010,starup:6403}],"Vue-daily":[{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",ourl:"https://github.com/YunYouJun",url:"https://github.com/YunYouJun/cook",description:"",language:"Vue",stars:6356,forks:427,starup:13},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31900,forks:8678,starup:11},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6414,forks:1038,starup:6},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2760,forks:1203,starup:4},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3050,forks:738,starup:3},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11237,forks:905,starup:1},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2469,forks:956,starup:5},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37819,forks:4709,starup:28},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14613,forks:1198,starup:20},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14200,forks:1660,starup:8},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2888,forks:168,starup:12},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8350,forks:1903,starup:3},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1095,forks:54,starup:7},{title:`nuxt /

      devtools`,owner:"nuxt",name:"devtools",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/nuxt/devtools",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/devtools",description:"",language:"Vue",stars:3262,forks:202,starup:0}],"Vue-weekly":[{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5049,forks:982,starup:49},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14613,forks:1198,starup:101},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90306,forks:30565,starup:41},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2888,forks:168,starup:61},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31900,forks:8678,starup:92},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8727,forks:1707,starup:24},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6477,forks:2427,starup:26},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24343,forks:1784,starup:89},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:333,forks:38065,starup:4},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1205,forks:333,starup:18},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32694,forks:4713,starup:52},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18753,forks:3929,starup:22}],"Vue-monthly":[{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3305,forks:433,starup:192},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21188,forks:2306,starup:172},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:160,forks:359,starup:15},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2888,forks:168,starup:122},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8727,forks:1707,starup:119},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3067,forks:451,starup:144},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90306,forks:30565,starup:126},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8350,forks:1903,starup:100},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31900,forks:8678,starup:350},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:943,forks:278,starup:36},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1119,forks:81,starup:193},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3202,forks:5005,starup:20}]},gt=x({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:n}=$(),h=X(()=>b(O[`${r.value}-${o.value}`]));j("color",n),j("data",h);function b(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=M,m=Y,g=B,d=D,t=I,e=q,y=F,w=K,R=Q;return l(),_("div",null,[v(d,null,{default:S(()=>[v(u,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>T(r)?r.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>T(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(G,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(s)==="list"?(l(),k(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(l(),k(y,{key:1,"has-starup":""})):c(s)==="chart"?(l(),k(w,{key:2})):(l(),k(R,{key:3,data:c(h)},null,8,["data"]))]),_:1})])}}});export{gt as default};
