import D from"./CQkP1L43.js";import P from"./nn9qm51_.js";import R from"./BzJcQdl4.js";import Y from"./ByROcTam.js";import E from"./DDyZJV8L.js";import B from"./CQY3kzIx.js";import L from"./Cqxk1EHx.js";import{d as _}from"./B_9KuB4R.js";import{s as I,u as V,a as C,b as J,i as F,c as O}from"./BohuUocf.js";import{g as T,i as $,j as M,o as c,c as j,n as z,A as H,b as v,w as x,T as Z,k as S,l as h,m as k,r as G,s as A}from"./DfptUU6X.js";import"./BnhW_E-W.js";import"./p2-M2djV.js";import"./CWVkv1fB.js";import"./CvDp55FO.js";import"./C5899O4F.js";const N=T({__name:"Chart",setup(f){const s=$("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(I),r=V("趋势仓库总指标排行榜",o);function u(i){const a=_(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=C(r,J);M(s,()=>{u(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(i,a)=>(c(),j("div",{ref_key:"chartRef",ref:l,style:z({height:b})},null,4))}}),Q=Object.assign(N,{__name:"TrendChart"}),U=T({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=H(s),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(u,J);function b(a){const n=_(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:F(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}M(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),j("div",{ref_key:"chartRef",ref:l,style:z({height:i})},null,4))}}),W=Object.assign(U,{__name:"TrendStarupChart"}),K={"JavaScript-daily":[{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:3029,forks:326,starup:866},{title:`hotheadhacker /

      no-as-a-service`,owner:"hotheadhacker",name:"no-as-a-service",avatar:"https://avatars.githubusercontent.com/u/18418340?s=40&v=4",path:"/hotheadhacker/no-as-a-service",ourl:"https://github.com/hotheadhacker",url:"https://github.com/hotheadhacker/no-as-a-service",description:"",language:"JavaScript",stars:6950,forks:429,starup:83},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109038,forks:11645,starup:20},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2622,forks:253,starup:73},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:53964,forks:4527,starup:563},{title:`antvis /

      chart-visualization-skills`,owner:"antvis",name:"chart-visualization-skills",avatar:"https://avatars.githubusercontent.com/in/1143301?s=40&v=4",path:"/antvis/chart-visualization-skills",ourl:"https://github.com/antvis",url:"https://github.com/antvis/chart-visualization-skills",description:"",language:"JavaScript",stars:191,forks:12,starup:18},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:37744,forks:5008,starup:6},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:244570,forks:50951,starup:54},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:19866,forks:915,starup:385},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:19611,forks:874,starup:248},{title:`0xsdeo /

      AntiDebug_Breaker`,owner:"0xsdeo",name:"AntiDebug_Breaker",avatar:"https://avatars.githubusercontent.com/u/174475975?s=40&v=4",path:"/0xsdeo/AntiDebug_Breaker",ourl:"https://github.com/0xsdeo",url:"https://github.com/0xsdeo/AntiDebug_Breaker",description:"",language:"JavaScript",stars:1621,forks:245,starup:17}],"JavaScript-weekly":[{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2622,forks:253,starup:1278},{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:3029,forks:326,starup:993},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2562,forks:633,starup:511},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:4984,forks:919,starup:1410},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:138969,forks:30915,starup:272},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23418,forks:1333,starup:655},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1236,forks:134,starup:113},{title:`robinebers /

      openusage`,owner:"robinebers",name:"openusage",avatar:"https://avatars.githubusercontent.com/u/16515780?s=40&v=4",path:"/robinebers/openusage",ourl:"https://github.com/robinebers",url:"https://github.com/robinebers/openusage",description:"",language:"JavaScript",stars:1938,forks:171,starup:176},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5082,forks:949,starup:88},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:21568,forks:3446,starup:1736},{title:`facebook /

      hermes`,owner:"facebook",name:"hermes",avatar:"https://avatars.githubusercontent.com/u/2388586?s=40&v=4",path:"/facebook/hermes",ourl:"https://github.com/facebook",url:"https://github.com/facebook/hermes",description:"",language:"JavaScript",stars:10960,forks:757,starup:60},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",ourl:"https://github.com/koodo-reader",url:"https://github.com/koodo-reader/koodo-reader",description:"",language:"JavaScript",stars:26601,forks:1969,starup:121},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32082,forks:6116,starup:419},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98186,forks:32684,starup:156},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:51797,forks:4702,starup:91},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:41496,forks:1449,starup:289},{title:`hotheadhacker /

      no-as-a-service`,owner:"hotheadhacker",name:"no-as-a-service",avatar:"https://avatars.githubusercontent.com/u/18418340?s=40&v=4",path:"/hotheadhacker/no-as-a-service",ourl:"https://github.com/hotheadhacker",url:"https://github.com/hotheadhacker/no-as-a-service",description:"",language:"JavaScript",stars:6950,forks:429,starup:615},{title:`hexgrad /

      kokoro`,owner:"hexgrad",name:"kokoro",avatar:"https://avatars.githubusercontent.com/u/166769057?s=40&v=4",path:"/hexgrad/kokoro",ourl:"https://github.com/hexgrad",url:"https://github.com/hexgrad/kokoro",description:"",language:"JavaScript",stars:6606,forks:727,starup:164}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:158369,forks:24622,starup:81757},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:19611,forks:874,starup:14960},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2562,forks:633,starup:1594},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:19866,forks:915,starup:10942},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:53964,forks:4527,starup:23426},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2622,forks:253,starup:1736},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:21568,forks:3446,starup:7910},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109038,forks:11645,starup:721},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32082,forks:6116,starup:1644},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:4984,forks:919,starup:2321},{title:`levnikolaevich /

      claude-code-skills`,owner:"levnikolaevich",name:"claude-code-skills",avatar:"https://avatars.githubusercontent.com/u/66056575?s=40&v=4",path:"/levnikolaevich/claude-code-skills",ourl:"https://github.com/levnikolaevich",url:"https://github.com/levnikolaevich/claude-code-skills",description:"",language:"JavaScript",stars:404,forks:59,starup:198},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23418,forks:1333,starup:1869},{title:`jgraph /

      drawio-desktop`,owner:"jgraph",name:"drawio-desktop",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio-desktop",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio-desktop",description:"",language:"JavaScript",stars:60476,forks:5650,starup:766},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1293,forks:385,starup:473},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4830,forks:797,starup:683},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:4076,forks:701,starup:3482},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:58440,forks:6323,starup:2321}],"TypeScript-daily":[{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:59180,forks:4837,starup:1907},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:18904,forks:2183,starup:887},{title:`vercel-labs /

      open-agents`,owner:"vercel-labs",name:"open-agents",avatar:"https://avatars.githubusercontent.com/u/49612682?s=40&v=4",path:"/vercel-labs/open-agents",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/open-agents",description:"",language:"TypeScript",stars:3064,forks:333,starup:735},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:13092,forks:1591,starup:848},{title:`calcom /

      cal.diy`,owner:"calcom",name:"cal.diy",avatar:"https://avatars.githubusercontent.com/u/3504472?s=40&v=4",path:"/calcom/cal.diy",ourl:"https://github.com/calcom",url:"https://github.com/calcom/cal.diy",description:"",language:"TypeScript",stars:41306,forks:12777,starup:125},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:28793,forks:5138,starup:192},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2481,forks:232,starup:218},{title:`ourongxing /

      newsnow`,owner:"ourongxing",name:"newsnow",avatar:"https://avatars.githubusercontent.com/u/48356807?s=40&v=4",path:"/ourongxing/newsnow",ourl:"https://github.com/ourongxing",url:"https://github.com/ourongxing/newsnow",description:"",language:"TypeScript",stars:19491,forks:5531,starup:25},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:35443,forks:2160,starup:281},{title:`strapi /

      strapi`,owner:"strapi",name:"strapi",avatar:"https://avatars.githubusercontent.com/u/13311463?s=40&v=4",path:"/strapi/strapi",ourl:"https://github.com/strapi",url:"https://github.com/strapi/strapi",description:"",language:"TypeScript",stars:71907,forks:9655,starup:29},{title:`quemsah /

      awesome-claude-plugins`,owner:"quemsah",name:"awesome-claude-plugins",avatar:"https://avatars.githubusercontent.com/u/22087148?s=40&v=4",path:"/quemsah/awesome-claude-plugins",ourl:"https://github.com/quemsah",url:"https://github.com/quemsah/awesome-claude-plugins",description:"",language:"TypeScript",stars:468,forks:60,starup:42},{title:`archestra-ai /

      archestra`,owner:"archestra-ai",name:"archestra",avatar:"https://avatars.githubusercontent.com/u/9406895?s=40&v=4",path:"/archestra-ai/archestra",ourl:"https://github.com/archestra-ai",url:"https://github.com/archestra-ai/archestra",description:"",language:"TypeScript",stars:3577,forks:442,starup:8},{title:`RocketChat /

      Rocket.Chat`,owner:"RocketChat",name:"Rocket.Chat",avatar:"https://avatars.githubusercontent.com/u/1000217?s=40&v=4",path:"/RocketChat/Rocket.Chat",ourl:"https://github.com/RocketChat",url:"https://github.com/RocketChat/Rocket.Chat",description:"",language:"TypeScript",stars:45151,forks:13525,starup:14},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/vscode",description:"",language:"TypeScript",stars:183936,forks:39236,starup:72},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:14488,forks:1087,starup:128},{title:`bluesky-social /

      atproto`,owner:"bluesky-social",name:"atproto",avatar:"https://avatars.githubusercontent.com/u/4898225?s=40&v=4",path:"/bluesky-social/atproto",ourl:"https://github.com/bluesky-social",url:"https://github.com/bluesky-social/atproto",description:"",language:"TypeScript",stars:9307,forks:849,starup:10}],"TypeScript-weekly":[{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:14436,forks:1775,starup:10864},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:18367,forks:2871,starup:4263},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:59180,forks:4837,starup:10779},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:12512,forks:1185,starup:2569},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:18904,forks:2183,starup:3391},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2481,forks:232,starup:404},{title:`tradingview /

      lightweight-charts`,owner:"tradingview",name:"lightweight-charts",avatar:"https://avatars.githubusercontent.com/u/3112183?s=40&v=4",path:"/tradingview/lightweight-charts",ourl:"https://github.com/tradingview",url:"https://github.com/tradingview/lightweight-charts",description:"",language:"TypeScript",stars:15191,forks:2347,starup:912},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:8204,forks:490,starup:1709},{title:`fosrl /

      pangolin`,owner:"fosrl",name:"pangolin",avatar:"https://avatars.githubusercontent.com/u/4999704?s=40&v=4",path:"/fosrl/pangolin",ourl:"https://github.com/fosrl",url:"https://github.com/fosrl/pangolin",description:"",language:"TypeScript",stars:20275,forks:646,starup:328},{title:`letta-ai /

      letta-code`,owner:"letta-ai",name:"letta-code",avatar:"https://avatars.githubusercontent.com/u/5475622?s=40&v=4",path:"/letta-ai/letta-code",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/letta-code",description:"",language:"TypeScript",stars:2309,forks:232,starup:174},{title:`snarktank /

      ralph`,owner:"snarktank",name:"ralph",avatar:"https://avatars.githubusercontent.com/u/128247?s=40&v=4",path:"/snarktank/ralph",ourl:"https://github.com/snarktank",url:"https://github.com/snarktank/ralph",description:"",language:"TypeScript",stars:17036,forks:1693,starup:2315},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:28793,forks:5138,starup:831},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:23379,forks:2203,starup:1231}],"TypeScript-monthly":[{title:`Yeachan-Heo /

      oh-my-codex`,owner:"Yeachan-Heo",name:"oh-my-codex",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-codex",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-codex",description:"",language:"TypeScript",stars:23540,forks:2015,starup:21352},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:23971,forks:2333,starup:23152},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:30407,forks:2075,starup:21995},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:18367,forks:2871,starup:4533},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:54069,forks:8900,starup:26529},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:2981,forks:460,starup:2083},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:59180,forks:4837,starup:22530},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:21869,forks:2005,starup:4989},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:32062,forks:3598,starup:11089},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:35443,forks:2160,starup:6255},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:8204,forks:490,starup:4308},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:111156,forks:8080,starup:8427}],"Vue-daily":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32101,forks:8718,starup:13},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1741,forks:221,starup:4},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38154,forks:4770,starup:18},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:490,forks:18,starup:7},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5157,forks:1006,starup:17},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21226,forks:2308,starup:5},{title:`aleksey-hoffman /

      sigma-file-manager`,owner:"aleksey-hoffman",name:"sigma-file-manager",avatar:"https://avatars.githubusercontent.com/u/61761672?s=40&v=4",path:"/aleksey-hoffman/sigma-file-manager",ourl:"https://github.com/aleksey-hoffman",url:"https://github.com/aleksey-hoffman/sigma-file-manager",description:"",language:"Vue",stars:5411,forks:220,starup:41},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6389,forks:499,starup:3},{title:`AceDataCloud /

      Nexior`,owner:"AceDataCloud",name:"Nexior",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/AceDataCloud/Nexior",ourl:"https://github.com/AceDataCloud",url:"https://github.com/AceDataCloud/Nexior",description:"",language:"Vue",stars:356,forks:475,starup:0},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:2692,forks:458,starup:21},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",ourl:"https://github.com/Yin-Hongwei",url:"https://github.com/Yin-Hongwei/music-website",description:"",language:"Vue",stars:6667,forks:1631,starup:2}],"Vue-weekly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24622,forks:1794,starup:128},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2562,forks:281,starup:80},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2550,forks:996,starup:31},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8811,forks:1716,starup:41},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5157,forks:1006,starup:46},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38154,forks:4770,starup:118},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2797,forks:1230,starup:17},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:490,forks:18,starup:30},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14849,forks:1212,starup:107},{title:`thelastoutpostworkshop /

      ESPConnect`,owner:"thelastoutpostworkshop",name:"ESPConnect",avatar:"https://avatars.githubusercontent.com/u/127604345?s=40&v=4",path:"/thelastoutpostworkshop/ESPConnect",ourl:"https://github.com/thelastoutpostworkshop",url:"https://github.com/thelastoutpostworkshop/ESPConnect",description:"",language:"Vue",stars:1751,forks:246,starup:23},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14262,forks:1666,starup:34},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28177,forks:3197,starup:50},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12297,forks:2098,starup:76},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1741,forks:221,starup:42},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32769,forks:4711,starup:59}],"Vue-monthly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24622,forks:1794,starup:459},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2562,forks:281,starup:248},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12297,forks:2098,starup:340},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1290,forks:349,starup:108},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8811,forks:1716,starup:138},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14849,forks:1212,starup:438},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:346,forks:17,starup:157},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2957,forks:181,starup:161},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8432,forks:1923,starup:136},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3144,forks:1060,starup:60},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21454,forks:3918,starup:102},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32101,forks:8718,starup:403},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6511,forks:2441,starup:84},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20612,forks:1382,starup:323},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5157,forks:1006,starup:194}]},mt=T({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=O(),l=G(()=>b(K[`${r.value}-${o.value}`]));A("color",u),A("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=D,g=P,m=R,d=Y,t=E,e=B,w=L,y=Q,q=W;return c(),j("div",null,[v(d,null,{default:x(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(Z,{name:"fade-top",mode:"out-in"},{default:x(()=>[h(s)==="list"?(c(),k(e,{key:0},{icons:x(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),k(w,{key:1,"has-starup":""})):h(s)==="chart"?(c(),k(y,{key:2})):(c(),k(q,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
