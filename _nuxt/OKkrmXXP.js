import I from"./Bp2v2Awf.js";import E from"./B4L6yOnL.js";import L from"./DWpLhkBa.js";import z from"./BZ1_R9WS.js";import D from"./Cv6ClMYS.js";import q from"./DuoozFSl.js";import F from"./CqbYxt33.js";import{d as V}from"./B_9KuB4R.js";import{s as R,u as j,a as M,b as A,i as O,c as Y}from"./BgS-VsF8.js";import{g as C,i as B,j as J,o as c,c as T,n as H,A as $,b,w as x,T as Q,k as S,l as p,m as f,r as W,s as _}from"./D3CUJmRJ.js";import"./BKn7C0_Q.js";import"./p2-M2djV.js";import"./ByJtQ8kf.js";import"./fC2WXGxx.js";import"./Cjd5o12y.js";const X=C({__name:"Chart",setup(k){const s=B("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(R),r=j("趋势仓库总指标排行榜",o);function u(i){const a=V(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=M(r,A);J(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:H({height:v})},null,4))}}),Z=Object.assign(X,{__name:"TrendChart"}),N=C({__name:"StarupChart",props:{data:{}},setup(k){const s=k,{data:o}=$(s),u=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=M(u,A);function v(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:O(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:H({height:i})},null,4))}}),G=Object.assign(N,{__name:"TrendStarupChart"}),K={"JavaScript-daily":[{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:138759,forks:30834,starup:51},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98079,forks:32687,starup:27},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:19764,forks:3077,starup:275},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:17449,forks:779,starup:572},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:49603,forks:4121,starup:560},{title:`Anil-matcha /

      Open-Higgsfield-AI`,owner:"Anil-matcha",name:"Open-Higgsfield-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Higgsfield-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Higgsfield-AI",description:"",language:"JavaScript",stars:3620,forks:635,starup:619},{title:`stephengpope /

      thepopebot`,owner:"stephengpope",name:"thepopebot",avatar:"https://avatars.githubusercontent.com/u/1420454?s=40&v=4",path:"/stephengpope/thepopebot",ourl:"https://github.com/stephengpope",url:"https://github.com/stephengpope/thepopebot",description:"",language:"JavaScript",stars:1609,forks:619,starup:56},{title:`apify /

      agent-skills`,owner:"apify",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/apify/agent-skills",ourl:"https://github.com/apify",url:"https://github.com/apify/agent-skills",description:"",language:"JavaScript",stars:1874,forks:199,starup:16},{title:`foxhui /

      WebAI2API`,owner:"foxhui",name:"WebAI2API",avatar:"https://avatars.githubusercontent.com/u/31238038?s=40&v=4",path:"/foxhui/WebAI2API",ourl:"https://github.com/foxhui",url:"https://github.com/foxhui/WebAI2API",description:"",language:"JavaScript",stars:384,forks:118,starup:33},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:244501,forks:50918,starup:66},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:9185,forks:3124,starup:15},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:31665,forks:6030,starup:80},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:552,forks:63,starup:9},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:86233,forks:4880,starup:34},{title:`IsmaelMartinez /

      teams-for-linux`,owner:"IsmaelMartinez",name:"teams-for-linux",avatar:"https://avatars.githubusercontent.com/u/430992?s=40&v=4",path:"/IsmaelMartinez/teams-for-linux",ourl:"https://github.com/IsmaelMartinez",url:"https://github.com/IsmaelMartinez/teams-for-linux",description:"",language:"JavaScript",stars:4568,forks:325,starup:4},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:47773,forks:1582,starup:11}],"JavaScript-weekly":[{title:`ComposioHQ /

      open-claude-cowork`,owner:"ComposioHQ",name:"open-claude-cowork",avatar:"https://avatars.githubusercontent.com/u/84703335?s=40&v=4",path:"/ComposioHQ/open-claude-cowork",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/open-claude-cowork",description:"",language:"JavaScript",stars:3719,forks:599,starup:522},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109053,forks:11600,starup:323},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:147317,forks:22746,starup:16667},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:22747,forks:1276,starup:554},{title:`Anil-matcha /

      Open-Higgsfield-AI`,owner:"Anil-matcha",name:"Open-Higgsfield-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Higgsfield-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Higgsfield-AI",description:"",language:"JavaScript",stars:3620,forks:635,starup:676},{title:`phaserjs /

      phaser`,owner:"phaserjs",name:"phaser",avatar:"https://avatars.githubusercontent.com/u/164476?s=40&v=4",path:"/phaserjs/phaser",ourl:"https://github.com/phaserjs",url:"https://github.com/phaserjs/phaser",description:"",language:"JavaScript",stars:39326,forks:7131,starup:67},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61524,forks:7128,starup:22}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:147317,forks:22746,starup:81042},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:17814,forks:768,starup:13603},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:17449,forks:779,starup:15975},{title:`andrewyng /

      context-hub`,owner:"andrewyng",name:"context-hub",avatar:"https://avatars.githubusercontent.com/u/1796239?s=40&v=4",path:"/andrewyng/context-hub",ourl:"https://github.com/andrewyng",url:"https://github.com/andrewyng/context-hub",description:"",language:"JavaScript",stars:12743,forks:1116,starup:12334},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:49603,forks:4121,starup:23440},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2064,forks:524,starup:1318},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1148,forks:323,starup:493},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:19764,forks:3077,starup:7921},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:31665,forks:6030,starup:1591},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:3690,forks:643,starup:3116},{title:`levnikolaevich /

      claude-code-skills`,owner:"levnikolaevich",name:"claude-code-skills",avatar:"https://avatars.githubusercontent.com/u/66056575?s=40&v=4",path:"/levnikolaevich/claude-code-skills",ourl:"https://github.com/levnikolaevich",url:"https://github.com/levnikolaevich/claude-code-skills",description:"",language:"JavaScript",stars:359,forks:53,starup:186},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4678,forks:776,starup:716},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:22747,forks:1276,starup:1509},{title:`jgraph /

      drawio-desktop`,owner:"jgraph",name:"drawio-desktop",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio-desktop",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio-desktop",description:"",language:"JavaScript",stars:60316,forks:5647,starup:745},{title:`hakimel /

      reveal.js`,owner:"hakimel",name:"reveal.js",avatar:"https://avatars.githubusercontent.com/u/629429?s=40&v=4",path:"/hakimel/reveal.js",ourl:"https://github.com/hakimel",url:"https://github.com/hakimel/reveal.js",description:"",language:"JavaScript",stars:70958,forks:16816,starup:335},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:57930,forks:6264,starup:2220}],"TypeScript-daily":[{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:25458,forks:2833,starup:980},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:20155,forks:1221,starup:666},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",ourl:"https://github.com/immich-app",url:"https://github.com/immich-app/immich",description:"",language:"TypeScript",stars:97350,forks:5325,starup:139},{title:`VoltAgent /

      voltagent`,owner:"VoltAgent",name:"voltagent",avatar:"https://avatars.githubusercontent.com/u/1110414?s=40&v=4",path:"/VoltAgent/voltagent",ourl:"https://github.com/VoltAgent",url:"https://github.com/VoltAgent/voltagent",description:"",language:"TypeScript",stars:7636,forks:754,starup:106},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:37506,forks:3736,starup:236},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:3658,forks:572,starup:41},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:37703,forks:4014,starup:452},{title:`vercel-labs /

      just-bash`,owner:"vercel-labs",name:"just-bash",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/just-bash",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/just-bash",description:"",language:"TypeScript",stars:2869,forks:162,starup:122},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:26538,forks:2802,starup:118},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:16460,forks:1328,starup:218},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:79727,forks:8034,starup:49},{title:`lyswhut /

      lx-music-desktop`,owner:"lyswhut",name:"lx-music-desktop",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-desktop",ourl:"https://github.com/lyswhut",url:"https://github.com/lyswhut/lx-music-desktop",description:"",language:"TypeScript",stars:50122,forks:6724,starup:54},{title:`ant-design /

      ant-design`,owner:"ant-design",name:"ant-design",avatar:"https://avatars.githubusercontent.com/u/507615?s=40&v=4",path:"/ant-design/ant-design",ourl:"https://github.com/ant-design",url:"https://github.com/ant-design/ant-design",description:"",language:"TypeScript",stars:97796,forks:54587,starup:20},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",ourl:"https://github.com/n8n-io",url:"https://github.com/n8n-io/n8n",description:"",language:"TypeScript",stars:183106,forks:56604,starup:214},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:6702,forks:1732,starup:123},{title:`siyuan-note /

      siyuan`,owner:"siyuan-note",name:"siyuan",avatar:"https://avatars.githubusercontent.com/u/970828?s=40&v=4",path:"/siyuan-note/siyuan",ourl:"https://github.com/siyuan-note",url:"https://github.com/siyuan-note/siyuan",description:"",language:"TypeScript",stars:42470,forks:2653,starup:48},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:9115,forks:701,starup:211},{title:`EtienneLescot /

      n8n-as-code`,owner:"EtienneLescot",name:"n8n-as-code",avatar:"https://avatars.githubusercontent.com/u/215859519?s=40&v=4",path:"/EtienneLescot/n8n-as-code",ourl:"https://github.com/EtienneLescot",url:"https://github.com/EtienneLescot/n8n-as-code",description:"",language:"TypeScript",stars:738,forks:91,starup:49}],"TypeScript-weekly":[{title:`Yeachan-Heo /

      oh-my-codex`,owner:"Yeachan-Heo",name:"oh-my-codex",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-codex",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-codex",description:"",language:"TypeScript",stars:19331,forks:1774,starup:11503},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:26374,forks:1760,starup:13938},{title:`Yeachan-Heo /

      oh-my-claudecode`,owner:"Yeachan-Heo",name:"oh-my-claudecode",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-claudecode",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-claudecode",description:"",language:"TypeScript",stars:26457,forks:2438,starup:5935},{title:`vadimdemedes /

      ink`,owner:"vadimdemedes",name:"ink",avatar:"https://avatars.githubusercontent.com/u/170270?s=40&v=4",path:"/vadimdemedes/ink",ourl:"https://github.com/vadimdemedes",url:"https://github.com/vadimdemedes/ink",description:"",language:"TypeScript",stars:37416,forks:942,starup:794},{title:`accomplish-ai /

      accomplish`,owner:"accomplish-ai",name:"accomplish",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/accomplish-ai/accomplish",ourl:"https://github.com/accomplish-ai",url:"https://github.com/accomplish-ai/accomplish",description:"",language:"TypeScript",stars:10573,forks:1256,starup:414},{title:`yamadashy /

      repomix`,owner:"yamadashy",name:"repomix",avatar:"https://avatars.githubusercontent.com/u/5019072?s=40&v=4",path:"/yamadashy/repomix",ourl:"https://github.com/yamadashy",url:"https://github.com/yamadashy/repomix",description:"",language:"TypeScript",stars:23280,forks:1117,starup:476},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:442265,forks:44196,starup:2027}],"TypeScript-monthly":[{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:26374,forks:1760,starup:18075},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:16460,forks:1328,starup:14729},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:50448,forks:8208,starup:27003},{title:`Yeachan-Heo /

      oh-my-claudecode`,owner:"Yeachan-Heo",name:"oh-my-claudecode",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-claudecode",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-claudecode",description:"",language:"TypeScript",stars:26457,forks:2438,starup:17526},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:19780,forks:1690,starup:8955},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:25458,forks:2833,starup:14304},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:21552,forks:1972,starup:4797},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:30824,forks:3430,starup:11038},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:8184,forks:4914,starup:1810},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:33747,forks:2013,starup:5818},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:38455,forks:2602,starup:10026},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:108906,forks:7924,starup:8052},{title:`sirmalloc /

      ccstatusline`,owner:"sirmalloc",name:"ccstatusline",avatar:"https://avatars.githubusercontent.com/u/2913994?s=40&v=4",path:"/sirmalloc/ccstatusline",ourl:"https://github.com/sirmalloc",url:"https://github.com/sirmalloc/ccstatusline",description:"",language:"TypeScript",stars:6940,forks:298,starup:2365},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:4162,forks:469,starup:1888},{title:`zhukunpenglinyutong /

      jetbrains-cc-gui`,owner:"zhukunpenglinyutong",name:"jetbrains-cc-gui",avatar:"https://avatars.githubusercontent.com/u/31264015?s=40&v=4",path:"/zhukunpenglinyutong/jetbrains-cc-gui",ourl:"https://github.com/zhukunpenglinyutong",url:"https://github.com/zhukunpenglinyutong/jetbrains-cc-gui",description:"",language:"TypeScript",stars:2436,forks:300,starup:889}],"Vue-daily":[{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6452,forks:1045,starup:4},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38032,forks:4747,starup:24},{title:`thelastoutpostworkshop /

      ESPConnect`,owner:"thelastoutpostworkshop",name:"ESPConnect",avatar:"https://avatars.githubusercontent.com/u/127604345?s=40&v=4",path:"/thelastoutpostworkshop/ESPConnect",ourl:"https://github.com/thelastoutpostworkshop",url:"https://github.com/thelastoutpostworkshop/ESPConnect",description:"",language:"Vue",stars:1728,forks:238,starup:2},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2944,forks:180,starup:5},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8768,forks:1709,starup:4},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5107,forks:992,starup:6},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6362,forks:495,starup:4},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32026,forks:8710,starup:22},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11261,forks:904,starup:3},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1697,forks:217,starup:9},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90301,forks:30537,starup:9},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3062,forks:751,starup:4},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28140,forks:3187,starup:11},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1238,forks:65,starup:9},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7065,forks:935,starup:4},{title:`Tencent /

      tdesign-miniprogram`,owner:"Tencent",name:"tdesign-miniprogram",avatar:"https://avatars.githubusercontent.com/u/7017290?s=40&v=4",path:"/Tencent/tdesign-miniprogram",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign-miniprogram",description:"",language:"Vue",stars:1615,forks:325,starup:1},{title:`frappe /

      insights`,owner:"frappe",name:"insights",avatar:"https://avatars.githubusercontent.com/u/25369014?s=40&v=4",path:"/frappe/insights",ourl:"https://github.com/frappe",url:"https://github.com/frappe/insights",description:"",language:"Vue",stars:888,forks:437,starup:2}],"Vue-weekly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24507,forks:1785,starup:121},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3391,forks:442,starup:56},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8406,forks:1917,starup:37},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2518,forks:978,starup:35},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2485,forks:277,starup:57},{title:`thelastoutpostworkshop /

      ESPConnect`,owner:"thelastoutpostworkshop",name:"ESPConnect",avatar:"https://avatars.githubusercontent.com/u/127604345?s=40&v=4",path:"/thelastoutpostworkshop/ESPConnect",ourl:"https://github.com/thelastoutpostworkshop",url:"https://github.com/thelastoutpostworkshop/ESPConnect",description:"",language:"Vue",stars:1728,forks:238,starup:38},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1238,forks:65,starup:119},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1261,forks:342,starup:26},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1697,forks:217,starup:36},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:1709,forks:258,starup:101},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12229,forks:2076,starup:79},{title:`Tencent /

      tdesign-miniprogram`,owner:"Tencent",name:"tdesign-miniprogram",avatar:"https://avatars.githubusercontent.com/u/7017290?s=40&v=4",path:"/Tencent/tdesign-miniprogram",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign-miniprogram",description:"",language:"Vue",stars:1615,forks:325,starup:3},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6452,forks:1045,starup:24},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:455,forks:18,starup:59},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:1952,forks:435,starup:5},{title:`hoowhoami /

      EchoMusic`,owner:"hoowhoami",name:"EchoMusic",avatar:"https://avatars.githubusercontent.com/u/84499551?s=40&v=4",path:"/hoowhoami/EchoMusic",ourl:"https://github.com/hoowhoami",url:"https://github.com/hoowhoami/EchoMusic",description:"",language:"Vue",stars:1048,forks:60,starup:143},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14761,forks:1206,starup:99},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2944,forks:180,starup:28}],"Vue-monthly":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20562,forks:1374,starup:391},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24507,forks:1785,starup:409},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2485,forks:277,starup:205},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3391,forks:442,starup:222},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1261,forks:342,starup:101},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12229,forks:2076,starup:348},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32026,forks:8710,starup:417},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2944,forks:180,starup:164},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8406,forks:1917,starup:137},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90301,forks:30537,starup:158},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5107,forks:992,starup:173},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:1709,forks:258,starup:217},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11497,forks:1875,starup:67},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8768,forks:1709,starup:126},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3131,forks:1053,starup:57},{title:`hoowhoami /

      EchoMusic`,owner:"hoowhoami",name:"EchoMusic",avatar:"https://avatars.githubusercontent.com/u/84499551?s=40&v=4",path:"/hoowhoami/EchoMusic",ourl:"https://github.com/hoowhoami",url:"https://github.com/hoowhoami/EchoMusic",description:"",language:"Vue",stars:1048,forks:60,starup:825}]},mt=C({__name:"index",setup(k){const{view:s,dateRange:o,language:r,color:u}=Y(),l=W(()=>v(K[`${r.value}-${o.value}`]));_("color",u),_("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=I,g=E,m=L,d=z,t=D,e=q,y=F,w=Z,P=G;return c(),T("div",null,[b(d,null,{default:x(()=>[b(n,{modelValue:p(o),"onUpdate:modelValue":a[0]||(a[0]=h=>S(o)?o.value=h:null)},null,8,["modelValue"]),b(g,{modelValue:p(r),"onUpdate:modelValue":a[1]||(a[1]=h=>S(r)?r.value=h:null)},null,8,["modelValue"]),b(m,{modelValue:p(s),"onUpdate:modelValue":a[2]||(a[2]=h=>S(s)?s.value=h:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(Q,{name:"fade-top",mode:"out-in"},{default:x(()=>[p(s)==="list"?(c(),f(e,{key:0},{icons:x(({repo:h})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:h.starup,"text-red":""},null,8,["text"])]),_:1})):p(s)==="table"?(c(),f(y,{key:1,"has-starup":""})):p(s)==="chart"?(c(),f(w,{key:2})):(c(),f(P,{key:3,data:p(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
