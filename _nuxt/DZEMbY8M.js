import F from"./DlsMq-Wv.js";import M from"./C7SBYzwe.js";import D from"./iSxVnRPn.js";import R from"./BQ6nbg2t.js";import O from"./nd9YyxtW.js";import W from"./Czq3saZA.js";import H from"./CzPbxhcI.js";import{d as T}from"./B_9KuB4R.js";import{s as L,u as C,a as I,b as J,i as B,c as X}from"./kxawK3oV.js";import{g as A,i as q,j as z,o as h,c as _,n as V,A as $,b,w as S,T as U,k as j,l as c,m as k,r as E,s as x}from"./DBdCTHrG.js";import"./COsNbUp3.js";import"./p2-M2djV.js";import"./BxsaEWwX.js";import"./DKeVw4z4.js";import"./DPQ-h2-Z.js";const K=A({__name:"Chart",setup(f){const s=q("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(L),r=C("趋势仓库总指标排行榜",o);function u(i){const a=T(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=I(r,J);z(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:V({height:v})},null,4))}}),N=Object.assign(K,{__name:"TrendChart"}),G=A({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=$(s),u=C("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=I(u,J);function v(a){const n=T(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:B(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}z(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:V({height:i})},null,4))}}),Q=Object.assign(G,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:10202,forks:441,starup:957},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:93128,forks:12196,starup:2548},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6160,forks:905,starup:194},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:13726,forks:1248,starup:365},{title:`zhw2590582 /

      ArtPlayer`,owner:"zhw2590582",name:"ArtPlayer",avatar:"https://avatars.githubusercontent.com/u/5907357?s=40&v=4",path:"/zhw2590582/ArtPlayer",ourl:"https://github.com/zhw2590582",url:"https://github.com/zhw2590582/ArtPlayer",description:"",language:"JavaScript",stars:3621,forks:345,starup:23},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:40003,forks:3554,starup:25},{title:`aleixrodriala /

      wa-tunnel`,owner:"aleixrodriala",name:"wa-tunnel",avatar:"https://avatars.githubusercontent.com/u/11310358?s=40&v=4",path:"/aleixrodriala/wa-tunnel",ourl:"https://github.com/aleixrodriala",url:"https://github.com/aleixrodriala/wa-tunnel",description:"",language:"JavaScript",stars:3329,forks:159,starup:22},{title:`MobSF /

      Mobile-Security-Framework-MobSF`,owner:"MobSF",name:"Mobile-Security-Framework-MobSF",avatar:"https://avatars.githubusercontent.com/u/4301109?s=40&v=4",path:"/MobSF/Mobile-Security-Framework-MobSF",ourl:"https://github.com/MobSF",url:"https://github.com/MobSF/Mobile-Security-Framework-MobSF",description:"",language:"JavaScript",stars:20656,forks:3620,starup:48},{title:`sudheerj /

      javascript-interview-questions`,owner:"sudheerj",name:"javascript-interview-questions",avatar:"https://avatars.githubusercontent.com/u/3127317?s=40&v=4",path:"/sudheerj/javascript-interview-questions",ourl:"https://github.com/sudheerj",url:"https://github.com/sudheerj/javascript-interview-questions",description:"",language:"JavaScript",stars:27206,forks:7615,starup:8},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:37745,forks:3062,starup:1328},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",ourl:"https://github.com/NaiboWang",url:"https://github.com/NaiboWang/EasySpider",description:"",language:"JavaScript",stars:44121,forks:5387,starup:9},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:40785,forks:1387,starup:24},{title:`highlightjs /

      highlight.js`,owner:"highlightjs",name:"highlight.js",avatar:"https://avatars.githubusercontent.com/u/99931?s=40&v=4",path:"/highlightjs/highlight.js",ourl:"https://github.com/highlightjs",url:"https://github.com/highlightjs/highlight.js",description:"",language:"JavaScript",stars:24874,forks:3733,starup:4},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:469,forks:47,starup:1}],"JavaScript-weekly":[{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:10202,forks:441,starup:4693},{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:93128,forks:12196,starup:15436},{title:`andrewyng /

      context-hub`,owner:"andrewyng",name:"context-hub",avatar:"https://avatars.githubusercontent.com/u/1796239?s=40&v=4",path:"/andrewyng/context-hub",ourl:"https://github.com/andrewyng",url:"https://github.com/andrewyng/context-hub",description:"",language:"JavaScript",stars:11202,forks:985,starup:5170},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:11761,forks:464,starup:4529},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:38962,forks:2834,starup:4204},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6160,forks:905,starup:766},{title:`ComposioHQ /

      awesome-claude-plugins`,owner:"ComposioHQ",name:"awesome-claude-plugins",avatar:"https://avatars.githubusercontent.com/u/67639393?s=40&v=4",path:"/ComposioHQ/awesome-claude-plugins",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/awesome-claude-plugins",description:"",language:"JavaScript",stars:1208,forks:229,starup:64},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:3058,forks:534,starup:2449},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:37745,forks:3062,starup:7756},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20425,forks:1365,starup:129},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:13498,forks:786,starup:578},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:15199,forks:2270,starup:1812},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9924,forks:1514,starup:460},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:13726,forks:1248,starup:450}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:93128,forks:12196,starup:41459},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:37745,forks:3062,starup:20646},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:10202,forks:441,starup:5729},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:15199,forks:2270,starup:6532},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1133,forks:316,starup:674},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4273,forks:727,starup:667},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10506,forks:1127,starup:1455},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30819,forks:5879,starup:1179},{title:`justlovemaki /

      AIClient-2-API`,owner:"justlovemaki",name:"AIClient-2-API",avatar:"https://avatars.githubusercontent.com/u/12859173?s=40&v=4",path:"/justlovemaki/AIClient-2-API",ourl:"https://github.com/justlovemaki",url:"https://github.com/justlovemaki/AIClient-2-API",description:"",language:"JavaScript",stars:6160,forks:905,starup:1999},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9924,forks:1514,starup:1714},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1503,forks:142,starup:465},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:879,forks:94,starup:330},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:56556,forks:6112,starup:1883},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22489,forks:846,starup:338},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:11761,forks:464,starup:11438},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:24644,forks:4966,starup:1372}],"TypeScript-daily":[{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:5850,forks:550,starup:2054},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:2870,forks:320,starup:113},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:127129,forks:13425,starup:968},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:23807,forks:2522,starup:189},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:9806,forks:1282,starup:126},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/54054995?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:19604,forks:1555,starup:167},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:40248,forks:2565,starup:124},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:7069,forks:3756,starup:45},{title:`daytonaio /

      daytona`,owner:"daytonaio",name:"daytona",avatar:"https://avatars.githubusercontent.com/u/26512078?s=40&v=4",path:"/daytonaio/daytona",ourl:"https://github.com/daytonaio",url:"https://github.com/daytonaio/daytona",description:"",language:"TypeScript",stars:68774,forks:5287,starup:770}],"TypeScript-weekly":[{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:35165,forks:5648,starup:8733},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:12888,forks:979,starup:5194},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:18527,forks:2138,starup:5917},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:17980,forks:1540,starup:2950},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:3419,forks:204,starup:396},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:30641,forks:1814,starup:1750},{title:`InsForge /

      InsForge`,owner:"InsForge",name:"InsForge",avatar:"https://avatars.githubusercontent.com/u/26497075?s=40&v=4",path:"/InsForge/InsForge",ourl:"https://github.com/InsForge",url:"https://github.com/InsForge/InsForge",description:"",language:"TypeScript",stars:4972,forks:519,starup:1487},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:5850,forks:550,starup:4873},{title:`DaKheera47 /

      job-ops`,owner:"DaKheera47",name:"job-ops",avatar:"https://avatars.githubusercontent.com/u/53654735?s=40&v=4",path:"/DaKheera47/job-ops",ourl:"https://github.com/DaKheera47",url:"https://github.com/DaKheera47/job-ops",description:"",language:"TypeScript",stars:2086,forks:199,starup:918},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:2870,forks:320,starup:476}],"TypeScript-monthly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:42042,forks:6862,starup:33076},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:35012,forks:3472,starup:17554},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:35165,forks:5648,starup:17374},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:17980,forks:1540,starup:7270},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:7608,forks:547,starup:5702},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:26572,forks:2805,starup:12244},{title:`blackboardsh /

      electrobun`,owner:"blackboardsh",name:"electrobun",avatar:"https://avatars.githubusercontent.com/u/75102186?s=40&v=4",path:"/blackboardsh/electrobun",ourl:"https://github.com/blackboardsh",url:"https://github.com/blackboardsh/electrobun",description:"",language:"TypeScript",stars:10402,forks:243,starup:4574},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:33242,forks:3591,starup:4307},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:8738,forks:1112,starup:2399},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:16368,forks:978,starup:6756},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:6529,forks:1025,starup:4083},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:22231,forks:2421,starup:7932},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1173,forks:132,starup:663},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:11180,forks:900,starup:4738},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:7077,forks:379,starup:2932},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:32862,forks:2174,starup:7989},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4590,forks:459,starup:1363}],"Vue-daily":[{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21419,forks:3913,starup:17},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11220,forks:902,starup:5},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",ourl:"https://github.com/hslr-s",url:"https://github.com/hslr-s/sun-panel",description:"",language:"Vue",stars:5019,forks:590,starup:5},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3727,forks:143,starup:3},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18745,forks:3934,starup:5},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",ourl:"https://github.com/un-pany",url:"https://github.com/un-pany/v3-admin-vite",description:"",language:"Vue",stars:6895,forks:1189,starup:1},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21171,forks:2307,starup:4},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14169,forks:1661,starup:5},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2456,forks:944,starup:6},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1192,forks:327,starup:3},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11412,forks:3088,starup:2}],"Vue-weekly":[{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90297,forks:30569,starup:40},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3280,forks:433,starup:51},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31849,forks:8664,starup:97},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12058,forks:2049,starup:85},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8713,forks:1702,starup:31},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18745,forks:3934,starup:28},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2826,forks:167,starup:27},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8334,forks:1904,starup:26},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37728,forks:4705,starup:178}],"Vue-monthly":[{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3057,forks:453,starup:147},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:159,forks:355,starup:19},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21171,forks:2307,starup:165},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:940,forks:273,starup:35},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:754,forks:76,starup:21},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8713,forks:1702,starup:112},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3392,forks:276,starup:180},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1094,forks:82,starup:180},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:329,forks:37455,starup:16},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3280,forks:433,starup:188},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3199,forks:5008,starup:20},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3727,forks:143,starup:38},{title:`Tresjs /

      tres`,owner:"Tresjs",name:"tres",avatar:"https://avatars.githubusercontent.com/u/4699008?s=40&v=4",path:"/Tresjs/tres",ourl:"https://github.com/Tresjs",url:"https://github.com/Tresjs/tres",description:"",language:"Vue",stars:3523,forks:179,starup:41}]},gt=A({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=X(),l=E(()=>v(Y[`${r.value}-${o.value}`]));x("color",u),x("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=F,m=M,g=D,d=R,t=O,e=W,w=H,y=N,P=Q;return h(),_("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>j(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>j(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>j(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(U,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(y,{key:2})):(h(),k(P,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
