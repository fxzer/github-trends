import M from"./BdsLPGZo.js";import E from"./B_QaflYf.js";import O from"./BLYFbUcq.js";import B from"./DgN_Rt-2.js";import I from"./Dopqfd4I.js";import F from"./ZmtjnygO.js";import W from"./BlFwrF8Z.js";import{d as A}from"./KQwPfV-1.js";import{s as P,a as _,b as V,u as R,i as U,c as $}from"./u2iKxLAX.js";import{i as T,p as q,a5 as J,D as c,f as C,w as D,S as N,h as b,a6 as S,T as L,q as x,U as h,d as k,a as Z,H as j}from"./xD43M63N.js";import"./C5-ZnRwf.js";import"./p2-M2djV.js";import"./_ecednKp.js";import"./DxJ34PYy.js";import"./DBSAYHBk.js";const G=T({__name:"Chart",setup(f){const r=q("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(P),s=_("趋势仓库总指标排行榜",o);function u(p){const a=A(p);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,l,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=l,s.value.series[2].data=g}const{domRef:m}=V(s,R);J(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(p,a)=>(c(),C("div",{ref_key:"chartRef",ref:m,style:D({height:v})},null,4))}}),K=Object.assign(G,{__name:"TrendChart"}),X=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=N(r),u=_("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:m}=V(u,R);function v(a){const n=A(a);n.sort((t,e)=>t.starup-e.starup);const l=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:U(l[e%l.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const p=`${100+o.value.length*40}px`;return(a,n)=>(c(),C("div",{ref_key:"chartRef",ref:m,style:D({height:p})},null,4))}}),H=Object.assign(X,{__name:"TrendStarupChart"}),Q={"JavaScript-daily":[{title:`jackwener /

      OpenCLI`,owner:"jackwener",name:"OpenCLI",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/jackwener/OpenCLI",ourl:"https://github.com/jackwener",url:"https://github.com/jackwener/OpenCLI",description:"",language:"JavaScript",stars:24642,forks:2459,starup:95},{title:`Mathieu2301 /

      TradingView-API`,owner:"Mathieu2301",name:"TradingView-API",avatar:"https://avatars.githubusercontent.com/u/21021423?s=40&v=4",path:"/Mathieu2301/TradingView-API",ourl:"https://github.com/Mathieu2301",url:"https://github.com/Mathieu2301/TradingView-API",description:"",language:"JavaScript",stars:3782,forks:738,starup:112},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:82958,forks:7183,starup:247},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:43051,forks:7135,starup:339},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:73968,forks:4170,starup:504},{title:`google /

      zx`,owner:"google",name:"zx",avatar:"https://avatars.githubusercontent.com/u/5288046?s=40&v=4",path:"/google/zx",ourl:"https://github.com/google",url:"https://github.com/google/zx",description:"",language:"JavaScript",stars:45543,forks:1268,starup:9},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6607,forks:343,starup:18},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:33764,forks:5540,starup:170},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12525,forks:3531,starup:6},{title:`zotero /

      zotero`,owner:"zotero",name:"zotero",avatar:"https://avatars.githubusercontent.com/u/783082?s=40&v=4",path:"/zotero/zotero",ourl:"https://github.com/zotero",url:"https://github.com/zotero/zotero",description:"",language:"JavaScript",stars:14499,forks:1046,starup:14},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117825,forks:35709,starup:41},{title:`4ian /

      GDevelop`,owner:"4ian",name:"GDevelop",avatar:"https://avatars.githubusercontent.com/u/1280130?s=40&v=4",path:"/4ian/GDevelop",ourl:"https://github.com/4ian",url:"https://github.com/4ian/GDevelop",description:"",language:"JavaScript",stars:23885,forks:1408,starup:43}],"JavaScript-weekly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:43051,forks:7135,starup:1220},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:3145,forks:376,starup:562},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52046,forks:4746,starup:95},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36529,forks:2734,starup:82},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42906,forks:1577,starup:251},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69198,forks:23743,starup:92},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:54382,forks:10794,starup:2761},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65843,forks:9353,starup:65},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:5711,forks:643,starup:230},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27355,forks:5026,starup:63},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",ourl:"https://github.com/NaiboWang",url:"https://github.com/NaiboWang/EasySpider",description:"",language:"JavaScript",stars:44107,forks:5378,starup:157},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:16632,forks:979,starup:816},{title:`iptv-org /

      database`,owner:"iptv-org",name:"database",avatar:"https://avatars.githubusercontent.com/u/5572928?s=40&v=4",path:"/iptv-org/database",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/database",description:"",language:"JavaScript",stars:1456,forks:567,starup:57},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:113117,forks:36380,starup:204},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5646,forks:1154,starup:106},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:27590,forks:2592,starup:232},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:39151,forks:2159,starup:2157}],"JavaScript-monthly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:3145,forks:376,starup:2009},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:1350,forks:79,starup:574},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/34203076?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:11301,forks:15649,starup:2212},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52046,forks:4746,starup:269},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69198,forks:23743,starup:298},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42906,forks:1577,starup:1025},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6607,forks:343,starup:2757},{title:`truelockmc /

      streambert`,owner:"truelockmc",name:"streambert",avatar:"https://avatars.githubusercontent.com/u/168660625?s=40&v=4",path:"/truelockmc/streambert",ourl:"https://github.com/truelockmc",url:"https://github.com/truelockmc/streambert",description:"",language:"JavaScript",stars:5250,forks:459,starup:4835},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12143,forks:1358,starup:1431},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:39151,forks:2159,starup:10844},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:29513,forks:5579,starup:1870},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87294,forks:4946,starup:921},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117825,forks:35709,starup:978},{title:`GoogleChrome /

      lighthouse`,owner:"GoogleChrome",name:"lighthouse",avatar:"https://avatars.githubusercontent.com/u/39191?s=40&v=4",path:"/GoogleChrome/lighthouse",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/lighthouse",description:"",language:"JavaScript",stars:30361,forks:9723,starup:214}],"TypeScript-daily":[{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",ourl:"https://github.com/meshery",url:"https://github.com/meshery/meshery",description:"",language:"TypeScript",stars:10969,forks:3457,starup:199},{title:`RocketChat /

      Rocket.Chat`,owner:"RocketChat",name:"Rocket.Chat",avatar:"https://avatars.githubusercontent.com/u/1000217?s=40&v=4",path:"/RocketChat/Rocket.Chat",ourl:"https://github.com/RocketChat",url:"https://github.com/RocketChat/Rocket.Chat",description:"",language:"TypeScript",stars:45525,forks:13656,starup:15},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",ourl:"https://github.com/continuedev",url:"https://github.com/continuedev/continue",description:"",language:"TypeScript",stars:33825,forks:4686,starup:38},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:449035,forks:45081,starup:764},{title:`bytedance /

      UI-TARS-desktop`,owner:"bytedance",name:"UI-TARS-desktop",avatar:"https://avatars.githubusercontent.com/u/23133919?s=40&v=4",path:"/bytedance/UI-TARS-desktop",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/UI-TARS-desktop",description:"",language:"TypeScript",stars:36636,forks:3697,starup:148},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/121005188?s=40&v=4",path:"/makeplane/plane",ourl:"https://github.com/makeplane",url:"https://github.com/makeplane/plane",description:"",language:"TypeScript",stars:51131,forks:4551,starup:68},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:9128,forks:540,starup:43},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:63546,forks:7724,starup:347},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",ourl:"https://github.com/nocobase",url:"https://github.com/nocobase/nocobase",description:"",language:"TypeScript",stars:22984,forks:2683,starup:36},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",ourl:"https://github.com/langfuse",url:"https://github.com/langfuse/langfuse",description:"",language:"TypeScript",stars:29270,forks:3038,starup:84},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:3617,forks:242,starup:67},{title:`web-infra-dev /

      midscene`,owner:"web-infra-dev",name:"midscene",avatar:"https://avatars.githubusercontent.com/u/11739753?s=40&v=4",path:"/web-infra-dev/midscene",ourl:"https://github.com/web-infra-dev",url:"https://github.com/web-infra-dev/midscene",description:"",language:"TypeScript",stars:13761,forks:1050,starup:29},{title:`rmyndharis /

      OpenWA`,owner:"rmyndharis",name:"OpenWA",avatar:"https://avatars.githubusercontent.com/u/2390382?s=40&v=4",path:"/rmyndharis/OpenWA",ourl:"https://github.com/rmyndharis",url:"https://github.com/rmyndharis/OpenWA",description:"",language:"TypeScript",stars:9284,forks:2027,starup:371},{title:`jitsi /

      jitsi-meet`,owner:"jitsi",name:"jitsi-meet",avatar:"https://avatars.githubusercontent.com/u/317464?s=40&v=4",path:"/jitsi/jitsi-meet",ourl:"https://github.com/jitsi",url:"https://github.com/jitsi/jitsi-meet",description:"",language:"TypeScript",stars:29447,forks:7926,starup:26},{title:`openobserve /

      openobserve`,owner:"openobserve",name:"openobserve",avatar:"https://avatars.githubusercontent.com/u/1628250?s=40&v=4",path:"/openobserve/openobserve",ourl:"https://github.com/openobserve",url:"https://github.com/openobserve/openobserve",description:"",language:"TypeScript",stars:19339,forks:860,starup:27},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",ourl:"https://github.com/pagefaultgames",url:"https://github.com/pagefaultgames/pokerogue",description:"",language:"TypeScript",stars:5736,forks:2285,starup:19},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/7235481?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:22313,forks:1994,starup:46},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:43860,forks:2822,starup:102},{title:`kubernetes-sigs /

      headlamp`,owner:"kubernetes-sigs",name:"headlamp",avatar:"https://avatars.githubusercontent.com/u/1029635?s=40&v=4",path:"/kubernetes-sigs/headlamp",ourl:"https://github.com/kubernetes-sigs",url:"https://github.com/kubernetes-sigs/headlamp",description:"",language:"TypeScript",stars:6682,forks:868,starup:20},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:59944,forks:6943,starup:200},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:15438,forks:829,starup:127},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:6425,forks:1116,starup:73}],"TypeScript-weekly":[{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:124889,forks:6783,starup:6246},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",ourl:"https://github.com/meshery",url:"https://github.com/meshery/meshery",description:"",language:"TypeScript",stars:10969,forks:3457,starup:488},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37992,forks:8748,starup:918},{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:16614,forks:1152,starup:2537},{title:`puppeteer /

      puppeteer`,owner:"puppeteer",name:"puppeteer",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/puppeteer/puppeteer",ourl:"https://github.com/puppeteer",url:"https://github.com/puppeteer/puppeteer",description:"",language:"TypeScript",stars:95029,forks:9453,starup:353},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:31301,forks:3547,starup:2873},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:449035,forks:45081,starup:2003},{title:`activeloopai /

      hivemind`,owner:"activeloopai",name:"hivemind",avatar:"https://avatars.githubusercontent.com/u/32709108?s=40&v=4",path:"/activeloopai/hivemind",ourl:"https://github.com/activeloopai",url:"https://github.com/activeloopai/hivemind",description:"",language:"TypeScript",stars:1262,forks:75,starup:657},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxt",description:"",language:"TypeScript",stars:60475,forks:5669,starup:102},{title:`babel /

      babel`,owner:"babel",name:"babel",avatar:"https://avatars.githubusercontent.com/u/853712?s=40&v=4",path:"/babel/babel",ourl:"https://github.com/babel",url:"https://github.com/babel/babel",description:"",language:"TypeScript",stars:43999,forks:5827,starup:50},{title:`withastro /

      astro`,owner:"withastro",name:"astro",avatar:"https://avatars.githubusercontent.com/u/361671?s=40&v=4",path:"/withastro/astro",ourl:"https://github.com/withastro",url:"https://github.com/withastro/astro",description:"",language:"TypeScript",stars:60244,forks:3548,starup:278},{title:`RocketChat /

      Rocket.Chat`,owner:"RocketChat",name:"Rocket.Chat",avatar:"https://avatars.githubusercontent.com/u/1000217?s=40&v=4",path:"/RocketChat/Rocket.Chat",ourl:"https://github.com/RocketChat",url:"https://github.com/RocketChat/Rocket.Chat",description:"",language:"TypeScript",stars:45525,forks:13656,starup:65},{title:`ghostfolio /

      ghostfolio`,owner:"ghostfolio",name:"ghostfolio",avatar:"https://avatars.githubusercontent.com/u/4159106?s=40&v=4",path:"/ghostfolio/ghostfolio",ourl:"https://github.com/ghostfolio",url:"https://github.com/ghostfolio/ghostfolio",description:"",language:"TypeScript",stars:8751,forks:1190,starup:120},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",ourl:"https://github.com/lucide-icons",url:"https://github.com/lucide-icons/lucide",description:"",language:"TypeScript",stars:23067,forks:1420,starup:107},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",ourl:"https://github.com/cypress-io",url:"https://github.com/cypress-io/cypress",description:"",language:"TypeScript",stars:50317,forks:3428,starup:456},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:9128,forks:540,starup:350},{title:`microsoft /

      TypeScript`,owner:"microsoft",name:"TypeScript",avatar:"https://avatars.githubusercontent.com/u/4226954?s=40&v=4",path:"/microsoft/TypeScript",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/TypeScript",description:"",language:"TypeScript",stars:109289,forks:13437,starup:140},{title:`lissy93 /

      web-check`,owner:"lissy93",name:"web-check",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/web-check",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/web-check",description:"",language:"TypeScript",stars:33747,forks:2757,starup:359},{title:`storybookjs /

      storybook`,owner:"storybookjs",name:"storybook",avatar:"https://avatars.githubusercontent.com/u/3070389?s=40&v=4",path:"/storybookjs/storybook",ourl:"https://github.com/storybookjs",url:"https://github.com/storybookjs/storybook",description:"",language:"TypeScript",stars:90368,forks:10130,starup:134},{title:`openobserve /

      openobserve`,owner:"openobserve",name:"openobserve",avatar:"https://avatars.githubusercontent.com/u/1628250?s=40&v=4",path:"/openobserve/openobserve",ourl:"https://github.com/openobserve",url:"https://github.com/openobserve/openobserve",description:"",language:"TypeScript",stars:19339,forks:860,starup:124}],"TypeScript-monthly":[{title:`Egonex-AI /

      Understand-Anything`,owner:"Egonex-AI",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Egonex-AI/Understand-Anything",ourl:"https://github.com/Egonex-AI",url:"https://github.com/Egonex-AI/Understand-Anything",description:"",language:"TypeScript",stars:62600,forks:5159,starup:46671},{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:50933,forks:3097,starup:48177},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:13075,forks:1110,starup:8324},{title:`rmyndharis /

      OpenWA`,owner:"rmyndharis",name:"OpenWA",avatar:"https://avatars.githubusercontent.com/u/2390382?s=40&v=4",path:"/rmyndharis/OpenWA",ourl:"https://github.com/rmyndharis",url:"https://github.com/rmyndharis/OpenWA",description:"",language:"TypeScript",stars:9284,forks:2027,starup:8915},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:124889,forks:6783,starup:7908},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:2009,forks:152,starup:1589},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:8381,forks:1303,starup:3385},{title:`fathah /

      hermes-desktop`,owner:"fathah",name:"hermes-desktop",avatar:"https://avatars.githubusercontent.com/u/48355244?s=40&v=4",path:"/fathah/hermes-desktop",ourl:"https://github.com/fathah",url:"https://github.com/fathah/hermes-desktop",description:"",language:"TypeScript",stars:12353,forks:1400,starup:7151},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:23244,forks:1913,starup:13257},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:21374,forks:3200,starup:7279},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:31301,forks:3547,starup:7724},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:27149,forks:2360,starup:4625},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:35247,forks:4378,starup:3885},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:5157,forks:360,starup:2470},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:5868,forks:506,starup:3627},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:13265,forks:1757,starup:1957},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:23361,forks:1789,starup:3603},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:3617,forks:242,starup:434},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:28363,forks:2683,starup:9663},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",ourl:"https://github.com/meshery",url:"https://github.com/meshery/meshery",description:"",language:"TypeScript",stars:10969,forks:3457,starup:588},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37992,forks:8748,starup:1306},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:21627,forks:1594,starup:4862},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"TypeScript",stars:57486,forks:4299,starup:1546}],"Vue-daily":[{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3196,forks:844,starup:3},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2846,forks:1143,starup:9},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2170,forks:503,starup:6},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32683,forks:8836,starup:7},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1183,forks:45,starup:13},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2102,forks:305,starup:14},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8937,forks:2038,starup:4},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6561,forks:517,starup:5},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2932,forks:323,starup:8},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3565,forks:727,starup:6},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2999,forks:1351,starup:7},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14461,forks:1689,starup:6},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5521,forks:1058,starup:6},{title:`cloudforet-io /

      console`,owner:"cloudforet-io",name:"console",avatar:"https://avatars.githubusercontent.com/u/26986739?s=40&v=4",path:"/cloudforet-io/console",ourl:"https://github.com/cloudforet-io",url:"https://github.com/cloudforet-io/console",description:"",language:"Vue",stars:52,forks:40,starup:1},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:389,forks:47508,starup:0},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12871,forks:646,starup:4},{title:`bluerobotics /

      cockpit`,owner:"bluerobotics",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/6551040?s=40&v=4",path:"/bluerobotics/cockpit",ourl:"https://github.com/bluerobotics",url:"https://github.com/bluerobotics/cockpit",description:"",language:"Vue",stars:181,forks:55,starup:0},{title:`slntopp /

      nocloud`,owner:"slntopp",name:"nocloud",avatar:"https://avatars.githubusercontent.com/u/97695224?s=40&v=4",path:"/slntopp/nocloud",ourl:"https://github.com/slntopp",url:"https://github.com/slntopp/nocloud",description:"",language:"Vue",stars:32,forks:8,starup:1}],"Vue-weekly":[{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2170,forks:503,starup:26},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25439,forks:1858,starup:81},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21447,forks:1011,starup:160},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32683,forks:8836,starup:93},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14461,forks:1689,starup:29},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2846,forks:1143,starup:26},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2932,forks:323,starup:43},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2999,forks:1351,starup:24},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12850,forks:2169,starup:67},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5521,forks:1058,starup:59},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15819,forks:1284,starup:105},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2102,forks:305,starup:47},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28458,forks:3254,starup:37},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:389,forks:47508,starup:5},{title:`fastapiadmin /

      FastapiAdmin`,owner:"fastapiadmin",name:"FastapiAdmin",avatar:"https://avatars.githubusercontent.com/u/73034508?s=40&v=4",path:"/fastapiadmin/FastapiAdmin",ourl:"https://github.com/fastapiadmin",url:"https://github.com/fastapiadmin/FastapiAdmin",description:"",language:"Vue",stars:872,forks:243,starup:26}],"Vue-monthly":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21250,forks:1439,starup:437},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39360,forks:5037,starup:865},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1183,forks:45,starup:482},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3793,forks:484,starup:218},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32683,forks:8836,starup:364},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2170,forks:503,starup:103},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:389,forks:47508,starup:24},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21417,forks:2332,starup:192},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15819,forks:1284,starup:559},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5521,forks:1058,starup:213},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6655,forks:1079,starup:94},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6814,forks:4759,starup:193},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",ourl:"https://github.com/yudaocode",url:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"",language:"Vue",stars:3612,forks:1548,starup:104},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3196,forks:844,starup:61},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14461,forks:1689,starup:142},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12850,forks:2169,starup:274},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2999,forks:1351,starup:90},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8937,forks:2038,starup:272},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3565,forks:727,starup:168}]},gt=T({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=$(),m=Z(()=>v(Q[`${s.value}-${o.value}`]));j("color",u),j("data",m);function v(p){return p.sort((a,n)=>n.starup-a.starup)}return(p,a)=>{const n=M,l=E,g=O,d=B,t=I,e=F,y=W,w=K,z=H;return c(),C("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=i=>x(o)?o.value=i:null)},null,8,["modelValue"]),b(l,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=i=>x(s)?s.value=i:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=i=>x(r)?r.value=i:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(L,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),k(e,{key:0},{icons:S(({repo:i})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:i.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),k(w,{key:2})):(c(),k(z,{key:3,data:h(m)},null,8,["data"]))]),_:1})])}}});export{gt as default};
