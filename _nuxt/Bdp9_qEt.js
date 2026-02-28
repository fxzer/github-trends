import R from"./zU0b63bb.js";import M from"./BpvuiJ5L.js";import L from"./Bn8MW11p.js";import W from"./DPnRAw2I.js";import D from"./CP9CygMp.js";import H from"./B6utLX-G.js";import G from"./B4_7O7WK.js";import{d as V}from"./B_9KuB4R.js";import{s as B,u as A,a as J,b as z,i as X,c as $}from"./HM3LZhM4.js";import{g as _,i as U,j as C,o as c,c as T,n as q,A as F,b,w as S,T as I,k as x,l as h,m as y,r as K,s as j}from"./By3RRala.js";import"./Dg6McICq.js";import"./p2-M2djV.js";import"./C8B3iNW9.js";import"./CTfdjs7g.js";import"./BzcwMNzc.js";const N=_({__name:"Chart",setup(f){const s=U("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(B),r=A("趋势仓库总指标排行榜",o);function u(n){const a=V(n);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,k=e.starup+e.stars+e.forks;return w-k});const[i,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=i,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=J(r,z);C(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(n,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:v})},null,4))}}),Y=Object.assign(N,{__name:"TrendChart"}),Q=_({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=F(s),u=A("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=J(u,z);function v(a){const i=V(a);i.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=i.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:X(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}C(o,()=>{v(o.value)},{deep:!0,immediate:!0});const n=`${100+o.value.length*40}px`;return(a,i)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:n})},null,4))}}),O=Object.assign(Q,{__name:"TrendStarupChart"}),E={"JavaScript-daily":[{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:8664,forks:1383,starup:171},{title:`liyupi /

      ai-guide`,owner:"liyupi",name:"ai-guide",avatar:"https://avatars.githubusercontent.com/u/26037703?s=40&v=4",path:"/liyupi/ai-guide",ourl:"https://github.com/liyupi",url:"https://github.com/liyupi/ai-guide",description:"",language:"JavaScript",stars:8401,forks:899,starup:188},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:39730,forks:3522,starup:49},{title:`mozilla-firefox /

      firefox`,owner:"mozilla-firefox",name:"firefox",avatar:"https://avatars.githubusercontent.com/u/32546304?s=40&v=4",path:"/mozilla-firefox/firefox",ourl:"https://github.com/mozilla-firefox",url:"https://github.com/mozilla-firefox/firefox",description:"",language:"JavaScript",stars:11374,forks:919,starup:12},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1236,forks:49,starup:30},{title:`parse-community /

      parse-server`,owner:"parse-community",name:"parse-server",avatar:"https://avatars.githubusercontent.com/u/364568?s=40&v=4",path:"/parse-community/parse-server",ourl:"https://github.com/parse-community",url:"https://github.com/parse-community/parse-server",description:"",language:"JavaScript",stars:21376,forks:4823,starup:8},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:8710,forks:2971,starup:18},{title:`gildas-lormeau /

      SingleFile`,owner:"gildas-lormeau",name:"SingleFile",avatar:"https://avatars.githubusercontent.com/u/396787?s=40&v=4",path:"/gildas-lormeau/SingleFile",ourl:"https://github.com/gildas-lormeau",url:"https://github.com/gildas-lormeau/SingleFile",description:"",language:"JavaScript",stars:20436,forks:1289,starup:26},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:36782,forks:2876,starup:20},{title:`7Sageer /

      sublink-worker`,owner:"7Sageer",name:"sublink-worker",avatar:"https://avatars.githubusercontent.com/u/125936732?s=40&v=4",path:"/7Sageer/sublink-worker",ourl:"https://github.com/7Sageer",url:"https://github.com/7Sageer/sublink-worker",description:"",language:"JavaScript",stars:4249,forks:7976,starup:10},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/13172299?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:21558,forks:1969,starup:115},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:359,forks:41,starup:7}],"JavaScript-weekly":[{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10281,forks:1097,starup:1227},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:22108,forks:1913,starup:5031},{title:`liyupi /

      ai-guide`,owner:"liyupi",name:"ai-guide",avatar:"https://avatars.githubusercontent.com/u/26037703?s=40&v=4",path:"/liyupi/ai-guide",ourl:"https://github.com/liyupi",url:"https://github.com/liyupi/ai-guide",description:"",language:"JavaScript",stars:8401,forks:899,starup:1209},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:3786,forks:669,starup:168},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:22948,forks:2639,starup:1013},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:359,forks:41,starup:27},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:667,forks:67,starup:111},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:55183,forks:5964,starup:371},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:8664,forks:1383,starup:387},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",ourl:"https://github.com/gaotianliuyun",url:"https://github.com/gaotianliuyun/gao",description:"",language:"JavaScript",stars:7212,forks:2585,starup:66},{title:`jasonjmcghee /

      WebMCP`,owner:"jasonjmcghee",name:"WebMCP",avatar:"https://avatars.githubusercontent.com/u/1522149?s=40&v=4",path:"/jasonjmcghee/WebMCP",ourl:"https://github.com/jasonjmcghee",url:"https://github.com/jasonjmcghee/WebMCP",description:"",language:"JavaScript",stars:532,forks:41,starup:47},{title:`mozilla-firefox /

      firefox`,owner:"mozilla-firefox",name:"firefox",avatar:"https://avatars.githubusercontent.com/u/32546304?s=40&v=4",path:"/mozilla-firefox/firefox",ourl:"https://github.com/mozilla-firefox",url:"https://github.com/mozilla-firefox/firefox",description:"",language:"JavaScript",stars:11374,forks:919,starup:73},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:21014,forks:1160,starup:246},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:23678,forks:4810,starup:333}],"JavaScript-monthly":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:22108,forks:1913,starup:13055},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:22948,forks:2639,starup:3753},{title:`Coding-Solo /

      godot-mcp`,owner:"Coding-Solo",name:"godot-mcp",avatar:"https://avatars.githubusercontent.com/u/60202842?s=40&v=4",path:"/Coding-Solo/godot-mcp",ourl:"https://github.com/Coding-Solo",url:"https://github.com/Coding-Solo/godot-mcp",description:"",language:"JavaScript",stars:1998,forks:234,starup:449},{title:`qeeqbox /

      social-analyzer`,owner:"qeeqbox",name:"social-analyzer",avatar:"https://avatars.githubusercontent.com/u/52905881?s=40&v=4",path:"/qeeqbox/social-analyzer",ourl:"https://github.com/qeeqbox",url:"https://github.com/qeeqbox/social-analyzer",description:"",language:"JavaScript",stars:21680,forks:2025,starup:1063},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27132,forks:4930,starup:357},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41186,forks:2148,starup:985},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10281,forks:1097,starup:1351},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",ourl:"https://github.com/GitSquared",url:"https://github.com/GitSquared/edex-ui",description:"",language:"JavaScript",stars:44338,forks:3018,starup:444},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:36782,forks:2876,starup:1131},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:667,forks:67,starup:432},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1236,forks:49,starup:492},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:4676,forks:837,starup:306},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:359,forks:41,starup:119},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:66009,forks:9284,starup:204},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:8299,forks:3061,starup:624},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:8669,forks:613,starup:1126},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",ourl:"https://github.com/WhiskeySockets",url:"https://github.com/WhiskeySockets/Baileys",description:"",language:"JavaScript",stars:8405,forks:2755,starup:571}],"TypeScript-daily":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:19135,forks:1832,starup:1088},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:16284,forks:1857,starup:938},{title:`bytedance /

      deer-flow`,owner:"bytedance",name:"deer-flow",avatar:"https://avatars.githubusercontent.com/u/1003147?s=40&v=4",path:"/bytedance/deer-flow",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/deer-flow",description:"",language:"Python",stars:22500,forks:2714,starup:891},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:2309,forks:176,starup:156},{title:`microsoft /

      playwright-cli`,owner:"microsoft",name:"playwright-cli",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright-cli",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright-cli",description:"",language:"TypeScript",stars:4417,forks:165,starup:133},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:6641,forks:605,starup:645},{title:`dontriskit /

      awesome-ai-system-prompts`,owner:"dontriskit",name:"awesome-ai-system-prompts",avatar:"https://avatars.githubusercontent.com/u/34084110?s=40&v=4",path:"/dontriskit/awesome-ai-system-prompts",ourl:"https://github.com/dontriskit",url:"https://github.com/dontriskit/awesome-ai-system-prompts",description:"",language:"TypeScript",stars:5356,forks:821,starup:32},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:26875,forks:4682,starup:29},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/100913391?s=40&v=4",path:"/langgenius/dify",ourl:"https://github.com/langgenius",url:"https://github.com/langgenius/dify",description:"",language:"TypeScript",stars:130704,forks:20357,starup:136},{title:`AndyMik90 /

      Auto-Claude`,owner:"AndyMik90",name:"Auto-Claude",avatar:"https://avatars.githubusercontent.com/u/119136210?s=40&v=4",path:"/AndyMik90/Auto-Claude",ourl:"https://github.com/AndyMik90",url:"https://github.com/AndyMik90/Auto-Claude",description:"",language:"TypeScript",stars:12782,forks:1764,starup:77},{title:`bytedance /

      UI-TARS-desktop`,owner:"bytedance",name:"UI-TARS-desktop",avatar:"https://avatars.githubusercontent.com/u/23133919?s=40&v=4",path:"/bytedance/UI-TARS-desktop",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/UI-TARS-desktop",description:"",language:"TypeScript",stars:28404,forks:2777,starup:41},{title:`bytebot-ai /

      bytebot`,owner:"bytebot-ai",name:"bytebot",avatar:"https://avatars.githubusercontent.com/u/868976?s=40&v=4",path:"/bytebot-ai/bytebot",ourl:"https://github.com/bytebot-ai",url:"https://github.com/bytebot-ai/bytebot",description:"",language:"TypeScript",stars:10498,forks:1366,starup:14},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:19015,forks:66176,starup:10},{title:`ailyProject /

      aily-blockly`,owner:"ailyProject",name:"aily-blockly",avatar:"https://avatars.githubusercontent.com/u/2948591?s=40&v=4",path:"/ailyProject/aily-blockly",ourl:"https://github.com/ailyProject",url:"https://github.com/ailyProject/aily-blockly",description:"",language:"TypeScript",stars:1135,forks:78,starup:97},{title:`Anionex /

      banana-slides`,owner:"Anionex",name:"banana-slides",avatar:"https://avatars.githubusercontent.com/u/123177548?s=40&v=4",path:"/Anionex/banana-slides",ourl:"https://github.com/Anionex",url:"https://github.com/Anionex/banana-slides",description:"",language:"TypeScript",stars:12431,forks:1452,starup:51},{title:`fastrepl /

      char`,owner:"fastrepl",name:"char",avatar:"https://avatars.githubusercontent.com/u/61503739?s=40&v=4",path:"/fastrepl/char",ourl:"https://github.com/fastrepl",url:"https://github.com/fastrepl/char",description:"",language:"TypeScript",stars:7823,forks:543,starup:22},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",ourl:"https://github.com/tldraw",url:"https://github.com/tldraw/tldraw",description:"",language:"TypeScript",stars:45533,forks:3040,starup:36},{title:`code-yeongyu /

      oh-my-opencode`,owner:"code-yeongyu",name:"oh-my-opencode",avatar:"https://avatars.githubusercontent.com/u/11153873?s=40&v=4",path:"/code-yeongyu/oh-my-opencode",ourl:"https://github.com/code-yeongyu",url:"https://github.com/code-yeongyu/oh-my-opencode",description:"",language:"TypeScript",stars:35502,forks:2680,starup:400},{title:`web-infra-dev /

      midscene`,owner:"web-infra-dev",name:"midscene",avatar:"https://avatars.githubusercontent.com/u/11739753?s=40&v=4",path:"/web-infra-dev/midscene",ourl:"https://github.com/web-infra-dev",url:"https://github.com/web-infra-dev/midscene",description:"",language:"TypeScript",stars:11847,forks:858,starup:19},{title:`mnfst /

      manifest`,owner:"mnfst",name:"manifest",avatar:"https://avatars.githubusercontent.com/u/6626184?s=40&v=4",path:"/mnfst/manifest",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/manifest",description:"",language:"TypeScript",stars:3401,forks:159,starup:21},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:239803,forks:46250,starup:3885}],"TypeScript-weekly":[{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:6641,forks:605,starup:5349},{title:`bytedance /

      deer-flow`,owner:"bytedance",name:"deer-flow",avatar:"https://avatars.githubusercontent.com/u/1003147?s=40&v=4",path:"/bytedance/deer-flow",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/deer-flow",description:"",language:"Python",stars:22500,forks:2714,starup:1607},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4373,forks:438,starup:1104},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:18072,forks:1877,starup:3449},{title:`semperai /

      amica`,owner:"semperai",name:"amica",avatar:"https://avatars.githubusercontent.com/u/90275229?s=40&v=4",path:"/semperai/amica",ourl:"https://github.com/semperai",url:"https://github.com/semperai/amica",description:"",language:"TypeScript",stars:1433,forks:241,starup:99},{title:`juice-shop /

      juice-shop`,owner:"juice-shop",name:"juice-shop",avatar:"https://avatars.githubusercontent.com/u/3531020?s=40&v=4",path:"/juice-shop/juice-shop",ourl:"https://github.com/juice-shop",url:"https://github.com/juice-shop/juice-shop",description:"",language:"TypeScript",stars:12591,forks:16613,starup:65},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",ourl:"https://github.com/evershopcommerce",url:"https://github.com/evershopcommerce/evershop",description:"",language:"TypeScript",stars:9687,forks:2192,starup:544},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:19135,forks:1832,starup:1342},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:7382,forks:932,starup:936},{title:`jupyterlab /

      jupyterlab`,owner:"jupyterlab",name:"jupyterlab",avatar:"https://avatars.githubusercontent.com/u/2096628?s=40&v=4",path:"/jupyterlab/jupyterlab",ourl:"https://github.com/jupyterlab",url:"https://github.com/jupyterlab/jupyterlab",description:"",language:"TypeScript",stars:15029,forks:3916,starup:20},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:19015,forks:66176,starup:75},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:16284,forks:1857,starup:1813}],"TypeScript-monthly":[{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:239803,forks:46250,starup:174758},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:18072,forks:1877,starup:15070},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:25723,forks:2541,starup:21598},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:11088,forks:614,starup:7429},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:31752,forks:2169,starup:16442},{title:`microsoft /

      playwright-cli`,owner:"microsoft",name:"playwright-cli",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright-cli",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright-cli",description:"",language:"TypeScript",stars:4417,forks:165,starup:2828},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:16701,forks:2035,starup:7625},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:4599,forks:277,starup:3515},{title:`bytedance /

      deer-flow`,owner:"bytedance",name:"deer-flow",avatar:"https://avatars.githubusercontent.com/u/1003147?s=40&v=4",path:"/bytedance/deer-flow",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/deer-flow",description:"",language:"Python",stars:22500,forks:2714,starup:2982},{title:`tambo-ai /

      tambo`,owner:"tambo-ai",name:"tambo",avatar:"https://avatars.githubusercontent.com/u/135340?s=40&v=4",path:"/tambo-ai/tambo",ourl:"https://github.com/tambo-ai",url:"https://github.com/tambo-ai/tambo",description:"",language:"TypeScript",stars:10982,forks:542,starup:5463},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:22375,forks:2700,starup:3526},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:9915,forks:650,starup:1595},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:2309,forks:176,starup:1121},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4373,forks:438,starup:1297},{title:`amantus-ai /

      vibetunnel`,owner:"amantus-ai",name:"vibetunnel",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/amantus-ai/vibetunnel",ourl:"https://github.com/amantus-ai",url:"https://github.com/amantus-ai/vibetunnel",description:"",language:"TypeScript",stars:4171,forks:292,starup:990},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:27008,forks:1576,starup:4589}],"Vue-daily":[{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6235,forks:3162,starup:44},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:19814,forks:3688,starup:4},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31622,forks:8605,starup:8},{title:`x2rr /

      funds`,owner:"x2rr",name:"funds",avatar:"https://avatars.githubusercontent.com/u/23189213?s=40&v=4",path:"/x2rr/funds",ourl:"https://github.com/x2rr",url:"https://github.com/x2rr/funds",description:"",language:"Vue",stars:2920,forks:380,starup:5},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4907,forks:947,starup:8},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:149,forks:298,starup:1},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11847,forks:2018,starup:10},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12559,forks:617,starup:5},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3184,forks:4996,starup:1},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2384,forks:910,starup:5},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:2991,forks:705,starup:3},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24110,forks:1771,starup:14},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6422,forks:2426,starup:3},{title:`ury-erp /

      pos`,owner:"ury-erp",name:"pos",avatar:"https://avatars.githubusercontent.com/u/99325168?s=40&v=4",path:"/ury-erp/pos",ourl:"https://github.com/ury-erp",url:"https://github.com/ury-erp/pos",description:"",language:"Vue",stars:90,forks:47,starup:0},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14351,forks:1187,starup:9},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90284,forks:30615,starup:2}],"Vue-weekly":[{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:911,forks:257,starup:4},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4907,forks:947,starup:46},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6235,forks:3162,starup:121},{title:`giuseppe99barchetta /

      SuggestArr`,owner:"giuseppe99barchetta",name:"SuggestArr",avatar:"https://avatars.githubusercontent.com/u/55151669?s=40&v=4",path:"/giuseppe99barchetta/SuggestArr",ourl:"https://github.com/giuseppe99barchetta",url:"https://github.com/giuseppe99barchetta/SuggestArr",description:"",language:"Vue",stars:1035,forks:14,starup:113},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2340,forks:321,starup:15},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:2941,forks:433,starup:21},{title:`qianye60 /

      XianTu`,owner:"qianye60",name:"XianTu",avatar:"https://avatars.githubusercontent.com/u/187193649?s=40&v=4",path:"/qianye60/XianTu",ourl:"https://github.com/qianye60",url:"https://github.com/qianye60/XianTu",description:"",language:"Vue",stars:246,forks:50,starup:11},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4510,forks:3026,starup:15},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3259,forks:272,starup:39},{title:`zhimaAi /

      chatwiki`,owner:"zhimaAi",name:"chatwiki",avatar:"https://avatars.githubusercontent.com/u/74887349?s=40&v=4",path:"/zhimaAi/chatwiki",ourl:"https://github.com/zhimaAi",url:"https://github.com/zhimaAi/chatwiki",description:"",language:"Vue",stars:1771,forks:280,starup:19},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",ourl:"https://github.com/hslr-s",url:"https://github.com/hslr-s/sun-panel",description:"",language:"Vue",stars:4982,forks:583,starup:28},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31622,forks:8605,starup:64},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:249,forks:337,starup:1}],"Vue-monthly":[{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3140,forks:422,starup:182},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6235,forks:3162,starup:504},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4510,forks:3026,starup:58},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:911,forks:257,starup:41},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24110,forks:1771,starup:321},{title:`Kuingsmile /

      word-GPT-Plus`,owner:"Kuingsmile",name:"word-GPT-Plus",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/Kuingsmile/word-GPT-Plus",ourl:"https://github.com/Kuingsmile",url:"https://github.com/Kuingsmile/word-GPT-Plus",description:"",language:"Vue",stars:1093,forks:191,starup:37},{title:`giuseppe99barchetta /

      SuggestArr`,owner:"giuseppe99barchetta",name:"SuggestArr",avatar:"https://avatars.githubusercontent.com/u/55151669?s=40&v=4",path:"/giuseppe99barchetta/SuggestArr",ourl:"https://github.com/giuseppe99barchetta",url:"https://github.com/giuseppe99barchetta/SuggestArr",description:"",language:"Vue",stars:1035,forks:14,starup:136},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:27946,forks:3152,starup:219},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:321,forks:35108,starup:25},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2340,forks:321,starup:75},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",ourl:"https://github.com/Yin-Hongwei",url:"https://github.com/Yin-Hongwei/music-website",description:"",language:"Vue",stars:6609,forks:1630,starup:35},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:349,forks:15,starup:20},{title:`nextcloud-libraries /

      nextcloud-vue`,owner:"nextcloud-libraries",name:"nextcloud-vue",avatar:"https://avatars.githubusercontent.com/u/1855448?s=40&v=4",path:"/nextcloud-libraries/nextcloud-vue",ourl:"https://github.com/nextcloud-libraries",url:"https://github.com/nextcloud-libraries/nextcloud-vue",description:"",language:"Vue",stars:240,forks:95,starup:0},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31622,forks:8605,starup:270}]},gt=_({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=$(),l=K(()=>v(E[`${r.value}-${o.value}`]));j("color",u),j("data",l);function v(n){return n.sort((a,i)=>i.starup-a.starup)}return(n,a)=>{const i=R,m=M,g=L,d=W,t=D,e=H,w=G,k=Y,P=O;return c(),T("div",null,[b(d,null,{default:S(()=>[b(i,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>x(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>x(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(I,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(s)==="list"?(c(),y(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),y(w,{key:1,"has-starup":""})):h(s)==="chart"?(c(),y(k,{key:2})):(c(),y(P,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
