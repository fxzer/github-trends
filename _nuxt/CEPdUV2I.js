import F from"./DzIF-ncy.js";import z from"./B6pQrjWX.js";import q from"./-5hyBo8-.js";import L from"./CMHaj2ym.js";import O from"./D8SGhTxN.js";import E from"./CD15WVA0.js";import G from"./BKn0ajg7.js";import{d as j}from"./B_9KuB4R.js";import{s as I,u as C,a as M,b as V,i as B,c as D}from"./CaHvFZs6.js";import{g as A,i as Y,j as P,o as c,c as _,n as J,A as $,b,w as S,T as W,k as T,l as p,m as k,r as Z,s as x}from"./CLXRVZYk.js";import"./CGZ9SNxz.js";import"./p2-M2djV.js";import"./Bl0TWqgZ.js";import"./9zUrEgcb.js";import"./Bh2W6BBr.js";const H=A({__name:"Chart",setup(w){const s=Y("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(I),r=C("趋势仓库总指标排行榜",o);function n(i){const a=j(i);a.sort((t,e)=>{const f=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return f-y});const[u,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=u,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=M(r,V);P(s,()=>{n(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:J({height:v})},null,4))}}),X=Object.assign(H,{__name:"TrendChart"}),N=A({__name:"StarupChart",props:{data:{}},setup(w){const s=w,{data:o}=$(s),n=C("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=M(n,V);function v(a){const u=j(a);u.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=u.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:B(m[e%m.length])}));n.value.series[0].data=d,n.value.yAxis.data=g}P(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:J({height:i})},null,4))}}),Q=Object.assign(N,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:51883,forks:4352,starup:630},{title:`cv-cat /

      Spider_XHS`,owner:"cv-cat",name:"Spider_XHS",avatar:"https://avatars.githubusercontent.com/u/94289429?s=40&v=4",path:"/cv-cat/Spider_XHS",ourl:"https://github.com/cv-cat",url:"https://github.com/cv-cat/Spider_XHS",description:"",language:"JavaScript",stars:5142,forks:920,starup:66},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:4004,forks:691,starup:195},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:20788,forks:3300,starup:208},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5045,forks:939,starup:16},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:5580,forks:537,starup:137},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",ourl:"https://github.com/GitSquared",url:"https://github.com/GitSquared/edex-ui",description:"",language:"JavaScript",stars:44627,forks:3081,starup:7},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:41435,forks:1447,starup:82},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23170,forks:1317,starup:83},{title:`ComposioHQ /

      awesome-claude-plugins`,owner:"ComposioHQ",name:"awesome-claude-plugins",avatar:"https://avatars.githubusercontent.com/u/67639393?s=40&v=4",path:"/ComposioHQ/awesome-claude-plugins",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/awesome-claude-plugins",description:"",language:"JavaScript",stars:1294,forks:281,starup:41},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1198,forks:129,starup:14},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:25617,forks:5083,starup:43},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2083,forks:197,starup:85},{title:`codebymitch /

      TitanBot`,owner:"codebymitch",name:"TitanBot",avatar:"https://avatars.githubusercontent.com/u/244658227?s=40&v=4",path:"/codebymitch/TitanBot",ourl:"https://github.com/codebymitch",url:"https://github.com/codebymitch/TitanBot",description:"",language:"JavaScript",stars:283,forks:422,starup:17}],"JavaScript-weekly":[{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2083,forks:197,starup:753},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2387,forks:596,starup:572},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1198,forks:129,starup:120},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:4651,forks:848,starup:1801},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23170,forks:1317,starup:644},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:138888,forks:30878,starup:308},{title:`stephengpope /

      thepopebot`,owner:"stephengpope",name:"thepopebot",avatar:"https://avatars.githubusercontent.com/u/1420454?s=40&v=4",path:"/stephengpope/thepopebot",ourl:"https://github.com/stephengpope",url:"https://github.com/stephengpope/thepopebot",description:"",language:"JavaScript",stars:1670,forks:634,starup:240},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98141,forks:32689,starup:165},{title:`greensock /

      GSAP`,owner:"greensock",name:"GSAP",avatar:"https://avatars.githubusercontent.com/u/2389714?s=40&v=4",path:"/greensock/GSAP",ourl:"https://github.com/greensock",url:"https://github.com/greensock/GSAP",description:"",language:"JavaScript",stars:24376,forks:1957,starup:149},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:86292,forks:4888,starup:182},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:41435,forks:1447,starup:273},{title:`sub-store-org /

      Sub-Store`,owner:"sub-store-org",name:"Sub-Store",avatar:"https://avatars.githubusercontent.com/u/1210282?s=40&v=4",path:"/sub-store-org/Sub-Store",ourl:"https://github.com/sub-store-org",url:"https://github.com/sub-store-org/Sub-Store",description:"",language:"JavaScript",stars:9241,forks:1079,starup:113},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:116700,forks:35334,starup:197},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5045,forks:939,starup:71},{title:`robinebers /

      openusage`,owner:"robinebers",name:"openusage",avatar:"https://avatars.githubusercontent.com/u/16515780?s=40&v=4",path:"/robinebers/openusage",ourl:"https://github.com/robinebers",url:"https://github.com/robinebers/openusage",description:"",language:"JavaScript",stars:1882,forks:163,starup:162},{title:`facebook /

      hermes`,owner:"facebook",name:"hermes",avatar:"https://avatars.githubusercontent.com/u/2388586?s=40&v=4",path:"/facebook/hermes",ourl:"https://github.com/facebook",url:"https://github.com/facebook/hermes",description:"",language:"JavaScript",stars:10942,forks:756,starup:67}],"JavaScript-monthly":[{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:18827,forks:830,starup:14293},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:154076,forks:23909,starup:80400},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:18922,forks:842,starup:14316},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:51883,forks:4352,starup:22967},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:2387,forks:596,starup:1502},{title:`andrewyng /

      context-hub`,owner:"andrewyng",name:"context-hub",avatar:"https://avatars.githubusercontent.com/u/1796239?s=40&v=4",path:"/andrewyng/context-hub",ourl:"https://github.com/andrewyng",url:"https://github.com/andrewyng/context-hub",description:"",language:"JavaScript",stars:12880,forks:1132,starup:7590},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:31907,forks:6081,starup:1584},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:4004,forks:691,starup:3387},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:2083,forks:197,starup:1192},{title:`levnikolaevich /

      claude-code-skills`,owner:"levnikolaevich",name:"claude-code-skills",avatar:"https://avatars.githubusercontent.com/u/66056575?s=40&v=4",path:"/levnikolaevich/claude-code-skills",ourl:"https://github.com/levnikolaevich",url:"https://github.com/levnikolaevich/claude-code-skills",description:"",language:"JavaScript",stars:388,forks:58,starup:187},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:4651,forks:848,starup:2018},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:23170,forks:1317,starup:1713},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:1227,forks:357,starup:532},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4762,forks:784,starup:680},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:20788,forks:3300,starup:7641},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:108999,forks:11625,starup:701},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:58238,forks:6296,starup:2279}],"TypeScript-daily":[{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:52489,forks:4173,starup:3185},{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:10739,forks:1337,starup:1724},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:17504,forks:2756,starup:679},{title:`snarktank /

      ralph`,owner:"snarktank",name:"ralph",avatar:"https://avatars.githubusercontent.com/u/128247?s=40&v=4",path:"/snarktank/ralph",ourl:"https://github.com/snarktank",url:"https://github.com/snarktank/ralph",description:"",language:"TypeScript",stars:16419,forks:1623,starup:683},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:15926,forks:1896,starup:652},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:2753,forks:421,starup:155},{title:`microsoft /

      playwright-cli`,owner:"microsoft",name:"playwright-cli",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright-cli",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright-cli",description:"",language:"TypeScript",stars:8047,forks:374,starup:291},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:43914,forks:5931,starup:61},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:23406,forks:2287,starup:295},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:43083,forks:2845,starup:192},{title:`CyberTimon /

      RapidRAW`,owner:"CyberTimon",name:"RapidRAW",avatar:"https://avatars.githubusercontent.com/u/78795905?s=40&v=4",path:"/CyberTimon/RapidRAW",ourl:"https://github.com/CyberTimon",url:"https://github.com/CyberTimon/RapidRAW",description:"",language:"TypeScript",stars:6379,forks:235,starup:20},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",ourl:"https://github.com/FlowiseAI",url:"https://github.com/FlowiseAI/Flowise",description:"",language:"TypeScript",stars:51856,forks:24127,starup:51},{title:`codeforreal1 /

      compressO`,owner:"codeforreal1",name:"compressO",avatar:"https://avatars.githubusercontent.com/u/51436631?s=40&v=4",path:"/codeforreal1/compressO",ourl:"https://github.com/codeforreal1",url:"https://github.com/codeforreal1/compressO",description:"",language:"TypeScript",stars:3211,forks:275,starup:71}],"TypeScript-weekly":[{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:10739,forks:1337,starup:6846},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:17504,forks:2756,starup:2962},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:52489,forks:4173,starup:3534},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:29255,forks:1987,starup:6776},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:7714,forks:464,starup:1647},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:21355,forks:1327,starup:3146},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:10501,forks:1839,starup:611},{title:`campfirein /

      byterover-cli`,owner:"campfirein",name:"byterover-cli",avatar:"https://avatars.githubusercontent.com/u/244459964?s=40&v=4",path:"/campfirein/byterover-cli",ourl:"https://github.com/campfirein",url:"https://github.com/campfirein/byterover-cli",description:"",language:"TypeScript",stars:4459,forks:432,starup:296},{title:`RhysSullivan /

      executor`,owner:"RhysSullivan",name:"executor",avatar:"https://avatars.githubusercontent.com/u/39114868?s=40&v=4",path:"/RhysSullivan/executor",ourl:"https://github.com/RhysSullivan",url:"https://github.com/RhysSullivan/executor",description:"",language:"TypeScript",stars:1068,forks:57,starup:290},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:7513,forks:1885,starup:1082},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:12277,forks:1148,starup:2864}],"TypeScript-monthly":[{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:23406,forks:2287,starup:23218},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:29255,forks:1987,starup:20857},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:52721,forks:8637,starup:27066},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:17504,forks:2756,starup:3223},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:2753,forks:421,starup:1912},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:16914,forks:1372,starup:11294},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:27093,forks:3073,starup:14902},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:21743,forks:1992,starup:4909},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:8334,forks:5048,starup:1799},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:34755,forks:2112,starup:5923},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:110315,forks:8020,starup:8266},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:7714,forks:464,starup:3901},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:31550,forks:3527,starup:10968}],"Vue-daily":[{title:`hoowhoami /

      EchoMusic`,owner:"hoowhoami",name:"EchoMusic",avatar:"https://avatars.githubusercontent.com/u/84499551?s=40&v=4",path:"/hoowhoami/EchoMusic",ourl:"https://github.com/hoowhoami",url:"https://github.com/hoowhoami/EchoMusic",description:"",language:"Vue",stars:1170,forks:66,starup:34},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:343,forks:39940,starup:0},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24587,forks:1793,starup:21},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3139,forks:1057,starup:3},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38095,forks:4761,starup:23},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:9890,forks:835,starup:3},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20592,forks:1379,starup:11},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8801,forks:1713,starup:8},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12268,forks:2093,starup:11},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6511,forks:4445,starup:4},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6378,forks:497,starup:4},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32761,forks:4712,starup:6},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14821,forks:1212,starup:17},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:20210,forks:927,starup:28},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3208,forks:5004,starup:0},{title:`antfu-collective /

      icones`,owner:"antfu-collective",name:"icones",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/antfu-collective/icones",ourl:"https://github.com/antfu-collective",url:"https://github.com/antfu-collective/icones",description:"",language:"Vue",stars:7289,forks:342,starup:43},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:194,forks:28,starup:3}],"Vue-weekly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24587,forks:1793,starup:126},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2535,forks:279,starup:64},{title:`hoowhoami /

      EchoMusic`,owner:"hoowhoami",name:"EchoMusic",avatar:"https://avatars.githubusercontent.com/u/84499551?s=40&v=4",path:"/hoowhoami/EchoMusic",ourl:"https://github.com/hoowhoami",url:"https://github.com/hoowhoami/EchoMusic",description:"",language:"Vue",stars:1170,forks:66,starup:208},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2539,forks:988,starup:33},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1277,forks:66,starup:90},{title:`thelastoutpostworkshop /

      ESPConnect`,owner:"thelastoutpostworkshop",name:"ESPConnect",avatar:"https://avatars.githubusercontent.com/u/127604345?s=40&v=4",path:"/thelastoutpostworkshop/ESPConnect",ourl:"https://github.com/thelastoutpostworkshop",url:"https://github.com/thelastoutpostworkshop/ESPConnect",description:"",language:"Vue",stars:1745,forks:244,starup:41},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11273,forks:905,starup:26},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14252,forks:1664,starup:31},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8801,forks:1713,starup:46},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5131,forks:1001,starup:44},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12268,forks:2093,starup:81},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14821,forks:1212,starup:103},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28159,forks:3194,starup:50},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1723,forks:218,starup:46},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3750,forks:146,starup:9},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6378,forks:497,starup:27},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:1958,forks:438,starup:7},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38095,forks:4761,starup:141}],"Vue-monthly":[{title:`hoowhoami /

      EchoMusic`,owner:"hoowhoami",name:"EchoMusic",avatar:"https://avatars.githubusercontent.com/u/84499551?s=40&v=4",path:"/hoowhoami/EchoMusic",ourl:"https://github.com/hoowhoami",url:"https://github.com/hoowhoami/EchoMusic",description:"",language:"Vue",stars:1170,forks:66,starup:806},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24587,forks:1793,starup:444},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2535,forks:279,starup:224},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12268,forks:2093,starup:337},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20592,forks:1379,starup:368},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8801,forks:1713,starup:127},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32064,forks:8714,starup:388},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90301,forks:30521,starup:157},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2951,forks:181,starup:164},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8417,forks:1917,starup:131},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3416,forks:441,starup:209},{title:`yudaocode /

      yudao-ui-admin-vben`,owner:"yudaocode",name:"yudao-ui-admin-vben",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vben",ourl:"https://github.com/yudaocode",url:"https://github.com/yudaocode/yudao-ui-admin-vben",description:"",language:"Vue",stars:696,forks:282,starup:36},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14821,forks:1212,starup:426},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3139,forks:1057,starup:58},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11501,forks:1875,starup:67}]},gt=A({__name:"index",setup(w){const{view:s,dateRange:o,language:r,color:n}=D(),l=Z(()=>v(U[`${r.value}-${o.value}`]));x("color",n),x("data",l);function v(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=F,m=z,g=q,d=L,t=O,e=E,f=G,y=X,R=Q;return c(),_("div",null,[b(d,null,{default:S(()=>[b(u,{modelValue:p(o),"onUpdate:modelValue":a[0]||(a[0]=h=>T(o)?o.value=h:null)},null,8,["modelValue"]),b(m,{modelValue:p(r),"onUpdate:modelValue":a[1]||(a[1]=h=>T(r)?r.value=h:null)},null,8,["modelValue"]),b(g,{modelValue:p(s),"onUpdate:modelValue":a[2]||(a[2]=h=>T(s)?s.value=h:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(W,{name:"fade-top",mode:"out-in"},{default:S(()=>[p(s)==="list"?(c(),k(e,{key:0},{icons:S(({repo:h})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:h.starup,"text-red":""},null,8,["text"])]),_:1})):p(s)==="table"?(c(),k(f,{key:1,"has-starup":""})):p(s)==="chart"?(c(),k(y,{key:2})):(c(),k(R,{key:3,data:p(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
