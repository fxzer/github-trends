import z from"./sMExNZPY.js";import D from"./Xwp2e5LB.js";import j from"./C2VFe7n7.js";import R from"./sL1PYG_q.js";import F from"./CiNiws7n.js";import P from"./UxueWNB5.js";import G from"./DqnBxYch.js";import{d as V}from"./KQwPfV-1.js";import{s as q,a as M,b as A,u as J,i as W,c as E}from"./CaNeQmh7.js";import{i as C,p as K,a5 as O,D as h,f as x,w as I,S as L,h as v,a6 as S,T as $,q as T,U as c,d as f,a as H,H as _}from"./C98vTVgG.js";import"./BRI2LY-x.js";import"./p2-M2djV.js";import"./C00jVozw.js";import"./zQ5WwQwI.js";import"./Cmaz-Eiv.js";const Z=C({__name:"Chart",setup(k){const s=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),r=M("趋势仓库总指标排行榜",o);function u(i){const a=V(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=A(r,J);O(s,()=>{u(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(i,a)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:I({height:b})},null,4))}}),U=Object.assign(Z,{__name:"TrendChart"}),Y=C({__name:"StarupChart",props:{data:{}},setup(k){const s=k,{data:o}=L(s),u=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=A(u,J);function b(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}O(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:I({height:i})},null,4))}}),N=Object.assign(Y,{__name:"TrendStarupChart"}),Q={"JavaScript-daily":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:264204,forks:39500,starup:826},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:18483,forks:1034,starup:2428},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:97928,forks:10308,starup:736},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:7969,forks:762,starup:151},{title:`BuilderIO /

      skills`,owner:"BuilderIO",name:"skills",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/skills",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/skills",description:"",language:"JavaScript",stars:4340,forks:215,starup:8},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:63403,forks:6415,starup:107},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:3389,forks:527,starup:75},{title:`akiralereal /

      iptv`,owner:"akiralereal",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/12994702?s=40&v=4",path:"/akiralereal/iptv",ourl:"https://github.com/akiralereal",url:"https://github.com/akiralereal/iptv",description:"",language:"JavaScript",stars:810,forks:257,starup:27},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:4949,forks:757,starup:11},{title:`Clooos /

      Bubble-Card`,owner:"Clooos",name:"Bubble-Card",avatar:"https://avatars.githubusercontent.com/u/36499953?s=40&v=4",path:"/Clooos/Bubble-Card",ourl:"https://github.com/Clooos",url:"https://github.com/Clooos/Bubble-Card",description:"",language:"JavaScript",stars:4587,forks:186,starup:4}],"JavaScript-weekly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:264204,forks:39500,starup:6453},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:97928,forks:10308,starup:3986},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/845989?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:40022,forks:8103,starup:8111},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:18483,forks:1034,starup:14864},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:67924,forks:11035,starup:2110},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:7087,forks:917,starup:488},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:29502,forks:5507,starup:865},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:6592,forks:2732,starup:492},{title:`duolahypercho /

      codex-router`,owner:"duolahypercho",name:"codex-router",avatar:"https://avatars.githubusercontent.com/u/108492647?s=40&v=4",path:"/duolahypercho/codex-router",ourl:"https://github.com/duolahypercho",url:"https://github.com/duolahypercho/codex-router",description:"",language:"JavaScript",stars:3768,forks:318,starup:449},{title:`JoeanAmier /

      TikTokDownloader`,owner:"JoeanAmier",name:"TikTokDownloader",avatar:"https://avatars.githubusercontent.com/u/49263334?s=40&v=4",path:"/JoeanAmier/TikTokDownloader",ourl:"https://github.com/JoeanAmier",url:"https://github.com/JoeanAmier/TikTokDownloader",description:"",language:"JavaScript",stars:16202,forks:2762,starup:380},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:3389,forks:527,starup:477},{title:`xuanyustudio /

      LocalMiniDrama`,owner:"xuanyustudio",name:"LocalMiniDrama",avatar:"https://avatars.githubusercontent.com/u/208556008?s=40&v=4",path:"/xuanyustudio/LocalMiniDrama",ourl:"https://github.com/xuanyustudio",url:"https://github.com/xuanyustudio/LocalMiniDrama",description:"",language:"JavaScript",stars:1783,forks:438,starup:427},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:3773,forks:340,starup:505},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:11397,forks:4080,starup:165},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:250615,forks:51388,starup:282},{title:`fleetbase /

      fleetbase`,owner:"fleetbase",name:"fleetbase",avatar:"https://avatars.githubusercontent.com/u/816371?s=40&v=4",path:"/fleetbase/fleetbase",ourl:"https://github.com/fleetbase",url:"https://github.com/fleetbase/fleetbase",description:"",language:"JavaScript",stars:3822,forks:1026,starup:1424},{title:`Mathieu2301 /

      TradingView-API`,owner:"Mathieu2301",name:"TradingView-API",avatar:"https://avatars.githubusercontent.com/u/21021423?s=40&v=4",path:"/Mathieu2301/TradingView-API",ourl:"https://github.com/Mathieu2301",url:"https://github.com/Mathieu2301/TradingView-API",description:"",language:"JavaScript",stars:5103,forks:905,starup:706},{title:`mekos2772 /

      ios-location-spoofer`,owner:"mekos2772",name:"ios-location-spoofer",avatar:"https://avatars.githubusercontent.com/u/119464194?s=40&v=4",path:"/mekos2772/ios-location-spoofer",ourl:"https://github.com/mekos2772",url:"https://github.com/mekos2772/ios-location-spoofer",description:"",language:"JavaScript",stars:4231,forks:850,starup:217}],"JavaScript-monthly":[{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:68663,forks:4605,starup:53904},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:33085,forks:3188,starup:22015},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:18483,forks:1034,starup:14879},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8416,forks:1034,starup:2846},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:3389,forks:527,starup:1934},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:11127,forks:1101,starup:2435},{title:`fleetbase /

      fleetbase`,owner:"fleetbase",name:"fleetbase",avatar:"https://avatars.githubusercontent.com/u/816371?s=40&v=4",path:"/fleetbase/fleetbase",ourl:"https://github.com/fleetbase",url:"https://github.com/fleetbase/fleetbase",description:"",language:"JavaScript",stars:3822,forks:1026,starup:1549},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13931,forks:1589,starup:1306},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11343,forks:30061,starup:354},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:49491,forks:1662,starup:584},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:91628,forks:8450,starup:1378},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:264204,forks:39500,starup:23581},{title:`playcanvas /

      engine`,owner:"playcanvas",name:"engine",avatar:"https://avatars.githubusercontent.com/u/697563?s=40&v=4",path:"/playcanvas/engine",ourl:"https://github.com/playcanvas",url:"https://github.com/playcanvas/engine",description:"",language:"JavaScript",stars:16834,forks:1992,starup:361},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:24579,forks:941,starup:520},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:143373,forks:7683,starup:37161},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:4610,forks:400,starup:1439},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:3602,forks:1070,starup:1494},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:35900,forks:4152,starup:313}],"TypeScript-daily":[{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:5505,forks:508,starup:98},{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:147344,forks:24096,starup:419},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:17156,forks:2152,starup:755},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:17695,forks:929,starup:291},{title:`cloudflare /

      mcp-server-cloudflare`,owner:"cloudflare",name:"mcp-server-cloudflare",avatar:"https://avatars.githubusercontent.com/u/62088388?s=40&v=4",path:"/cloudflare/mcp-server-cloudflare",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/mcp-server-cloudflare",description:"",language:"TypeScript",stars:4262,forks:529,starup:46},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:30703,forks:2677,starup:169},{title:`ZuodaoTech /

      everyone-can-use-english`,owner:"ZuodaoTech",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/ZuodaoTech/everyone-can-use-english",ourl:"https://github.com/ZuodaoTech",url:"https://github.com/ZuodaoTech/everyone-can-use-english",description:"",language:"TypeScript",stars:38136,forks:5224,starup:398},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:6195,forks:443,starup:324},{title:`browserbase /

      stagehand`,owner:"browserbase",name:"stagehand",avatar:"https://avatars.githubusercontent.com/u/75873287?s=40&v=4",path:"/browserbase/stagehand",ourl:"https://github.com/browserbase",url:"https://github.com/browserbase/stagehand",description:"",language:"TypeScript",stars:24705,forks:1703,starup:126},{title:`krillinai /

      OpenCreator`,owner:"krillinai",name:"OpenCreator",avatar:"https://avatars.githubusercontent.com/u/114557800?s=40&v=4",path:"/krillinai/OpenCreator",ourl:"https://github.com/krillinai",url:"https://github.com/krillinai/OpenCreator",description:"",language:"TypeScript",stars:12001,forks:1200,starup:263},{title:`ahmedkhaleel2004 /

      gitdiagram`,owner:"ahmedkhaleel2004",name:"gitdiagram",avatar:"https://avatars.githubusercontent.com/u/111161052?s=40&v=4",path:"/ahmedkhaleel2004/gitdiagram",ourl:"https://github.com/ahmedkhaleel2004",url:"https://github.com/ahmedkhaleel2004/gitdiagram",description:"",language:"TypeScript",stars:16810,forks:1278,starup:118},{title:`diffusionstudio /

      editor`,owner:"diffusionstudio",name:"editor",avatar:"https://avatars.githubusercontent.com/u/42798093?s=40&v=4",path:"/diffusionstudio/editor",ourl:"https://github.com/diffusionstudio",url:"https://github.com/diffusionstudio/editor",description:"",language:"TypeScript",stars:3001,forks:272,starup:63},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:90202,forks:8908,starup:129},{title:`KnockOutEZ /

      wigolo`,owner:"KnockOutEZ",name:"wigolo",avatar:"https://avatars.githubusercontent.com/u/70368615?s=40&v=4",path:"/KnockOutEZ/wigolo",ourl:"https://github.com/KnockOutEZ",url:"https://github.com/KnockOutEZ/wigolo",description:"",language:"TypeScript",stars:5359,forks:434,starup:25}],"TypeScript-weekly":[{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:147344,forks:24096,starup:2342},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:23824,forks:1719,starup:1242},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:74087,forks:4855,starup:5841},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:52053,forks:4742,starup:2546},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",ourl:"https://github.com/danny-avila",url:"https://github.com/danny-avila/LibreChat",description:"",language:"TypeScript",stars:44531,forks:9142,starup:1600},{title:`cline /

      cline`,owner:"cline",name:"cline",avatar:"https://avatars.githubusercontent.com/u/7799382?s=40&v=4",path:"/cline/cline",ourl:"https://github.com/cline",url:"https://github.com/cline/cline",description:"",language:"TypeScript",stars:68917,forks:7468,starup:1167},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:110469,forks:14507,starup:1484},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/41804588?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:7817,forks:1161,starup:3262},{title:`tech-leads-club /

      agent-skills`,owner:"tech-leads-club",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/99354371?s=40&v=4",path:"/tech-leads-club/agent-skills",ourl:"https://github.com/tech-leads-club",url:"https://github.com/tech-leads-club/agent-skills",description:"",language:"TypeScript",stars:6569,forks:538,starup:1161},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:6195,forks:443,starup:4077},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:17156,forks:2152,starup:2391},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:8854,forks:1082,starup:1131},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:69719,forks:4774,starup:1593},{title:`vastsa /

      PI-Desktop`,owner:"vastsa",name:"PI-Desktop",avatar:"https://avatars.githubusercontent.com/u/48862574?s=40&v=4",path:"/vastsa/PI-Desktop",ourl:"https://github.com/vastsa",url:"https://github.com/vastsa/PI-Desktop",description:"",language:"TypeScript",stars:4851,forks:410,starup:1457},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:3387,forks:823,starup:1417},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:55323,forks:6905,starup:2346},{title:`microsoft /

      AI-Engineering-Coach`,owner:"microsoft",name:"AI-Engineering-Coach",avatar:"https://avatars.githubusercontent.com/u/20464460?s=40&v=4",path:"/microsoft/AI-Engineering-Coach",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/AI-Engineering-Coach",description:"",language:"TypeScript",stars:4266,forks:590,starup:367},{title:`pacifio /

      atlas`,owner:"pacifio",name:"atlas",avatar:"https://avatars.githubusercontent.com/u/32670628?s=40&v=4",path:"/pacifio/atlas",ourl:"https://github.com/pacifio",url:"https://github.com/pacifio/atlas",description:"",language:"TypeScript",stars:4733,forks:283,starup:1556},{title:`NangoHQ /

      nango`,owner:"NangoHQ",name:"nango",avatar:"https://avatars.githubusercontent.com/u/1724137?s=40&v=4",path:"/NangoHQ/nango",ourl:"https://github.com/NangoHQ",url:"https://github.com/NangoHQ/nango",description:"",language:"TypeScript",stars:12273,forks:1361,starup:445}],"TypeScript-monthly":[{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:38331,forks:6007,starup:17511},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:8260,forks:760,starup:4521},{title:`tech-leads-club /

      agent-skills`,owner:"tech-leads-club",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/99354371?s=40&v=4",path:"/tech-leads-club/agent-skills",ourl:"https://github.com/tech-leads-club",url:"https://github.com/tech-leads-club/agent-skills",description:"",language:"TypeScript",stars:6569,forks:538,starup:1604},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:6195,forks:443,starup:4797},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:19771,forks:2540,starup:6976},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:27728,forks:3795,starup:8781},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:3387,forks:823,starup:2923},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/41804588?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:7817,forks:1161,starup:3708},{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:5608,forks:517,starup:3827},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:33461,forks:9097,starup:2858},{title:`Companion-Inc /

      feynman`,owner:"Companion-Inc",name:"feynman",avatar:"https://avatars.githubusercontent.com/u/66044327?s=40&v=4",path:"/Companion-Inc/feynman",ourl:"https://github.com/Companion-Inc",url:"https://github.com/Companion-Inc/feynman",description:"",language:"TypeScript",stars:9723,forks:1085,starup:1233},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:35278,forks:4116,starup:2113},{title:`chaitanyagiri /

      munder-difflin`,owner:"chaitanyagiri",name:"munder-difflin",avatar:"https://avatars.githubusercontent.com/u/26071627?s=40&v=4",path:"/chaitanyagiri/munder-difflin",ourl:"https://github.com/chaitanyagiri",url:"https://github.com/chaitanyagiri/munder-difflin",description:"",language:"TypeScript",stars:7760,forks:1020,starup:4739},{title:`maotoumao /

      MusicFree`,owner:"maotoumao",name:"MusicFree",avatar:"https://avatars.githubusercontent.com/u/31655147?s=40&v=4",path:"/maotoumao/MusicFree",ourl:"https://github.com/maotoumao",url:"https://github.com/maotoumao/MusicFree",description:"",language:"TypeScript",stars:27022,forks:1936,starup:911},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36061,forks:1116,starup:237},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:17695,forks:929,starup:1182},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:52053,forks:4742,starup:10271}],"Vue-daily":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23461,forks:1144,starup:93},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33304,forks:4667,starup:4},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1652,forks:131,starup:6},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:882,forks:90,starup:1},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6343,forks:398,starup:8},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4272,forks:138,starup:12},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3387,forks:946,starup:1},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2284,forks:275,starup:3},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:443,forks:65706,starup:0},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3170,forks:117,starup:5},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40653,forks:5433,starup:15},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2551,forks:197,starup:97},{title:`pterodactyl /

      documentation`,owner:"pterodactyl",name:"documentation",avatar:"https://avatars.githubusercontent.com/u/418376?s=40&v=4",path:"/pterodactyl/documentation",ourl:"https://github.com/pterodactyl",url:"https://github.com/pterodactyl/documentation",description:"",language:"Vue",stars:198,forks:2162,starup:0},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:255,forks:31,starup:0},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21960,forks:1521,starup:12},{title:`unovue /

      inspira-ui`,owner:"unovue",name:"inspira-ui",avatar:"https://avatars.githubusercontent.com/u/25490173?s=40&v=4",path:"/unovue/inspira-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/inspira-ui",description:"",language:"Vue",stars:5001,forks:335,starup:2},{title:`henryzt /

      Rhythm-Plus-Music-Game`,owner:"henryzt",name:"Rhythm-Plus-Music-Game",avatar:"https://avatars.githubusercontent.com/u/20445029?s=40&v=4",path:"/henryzt/Rhythm-Plus-Music-Game",ourl:"https://github.com/henryzt",url:"https://github.com/henryzt/Rhythm-Plus-Music-Game",description:"",language:"Vue",stars:285,forks:59,starup:0},{title:`hanshuaikang /

      AI-Media2Doc`,owner:"hanshuaikang",name:"AI-Media2Doc",avatar:"https://avatars.githubusercontent.com/u/33194175?s=40&v=4",path:"/hanshuaikang/AI-Media2Doc",ourl:"https://github.com/hanshuaikang",url:"https://github.com/hanshuaikang/AI-Media2Doc",description:"",language:"Vue",stars:4025,forks:545,starup:3},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:300,forks:361,starup:0},{title:`Rule-34 /

      App`,owner:"Rule-34",name:"App",avatar:"https://avatars.githubusercontent.com/u/37181533?s=40&v=4",path:"/Rule-34/App",ourl:"https://github.com/Rule-34",url:"https://github.com/Rule-34/App",description:"",language:"Vue",stars:376,forks:47,starup:0},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:685,forks:359,starup:0}],"Vue-weekly":[{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:443,forks:65706,starup:2},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26536,forks:1937,starup:87},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2482,forks:153,starup:193},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1652,forks:131,starup:41},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3387,forks:946,starup:16},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4161,forks:845,starup:55},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23461,forks:1144,starup:261},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4272,forks:138,starup:66},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90181,forks:30303,starup:22},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6824,forks:553,starup:34},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2284,forks:275,starup:30},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40653,forks:5433,starup:95},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6343,forks:398,starup:59},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9348,forks:1773,starup:25},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2720,forks:442,starup:15},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33495,forks:8972,starup:61},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1902,forks:494,starup:33},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:7148,forks:5263,starup:33},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14458,forks:1781,starup:5},{title:`Tencent /

      tdesign-miniprogram`,owner:"Tencent",name:"tdesign-miniprogram",avatar:"https://avatars.githubusercontent.com/u/7017290?s=40&v=4",path:"/Tencent/tdesign-miniprogram",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign-miniprogram",description:"",language:"Vue",stars:1764,forks:337,starup:10},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:509,forks:89,starup:24}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10148,forks:1220,starup:1186},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28947,forks:3313,starup:215},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21960,forks:1521,starup:322},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33495,forks:8972,starup:398},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2762,forks:196,starup:435},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2720,forks:442,starup:76},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:443,forks:65706,starup:14},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33304,forks:4667,starup:203},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23461,forks:1144,starup:795},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2482,forks:153,starup:557},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3387,forks:946,starup:60},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6824,forks:553,starup:96},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26536,forks:1937,starup:344},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3730,forks:568,starup:211},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90181,forks:30303,starup:81},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14458,forks:1781,starup:26},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16766,forks:1361,starup:363},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3354,forks:402,starup:433},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4272,forks:138,starup:276},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:6968,forks:342,starup:56},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40653,forks:5433,starup:431},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1652,forks:131,starup:116}]},mt=C({__name:"index",setup(k){const{view:s,dateRange:o,language:r,color:u}=E(),l=H(()=>b(Q[`${r.value}-${o.value}`]));_("color",u),_("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=z,g=D,m=j,d=R,t=F,e=P,y=G,w=U,B=N;return h(),x("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>T(r)?r.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>T(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v($,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(s)==="list"?(h(),f(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),f(y,{key:1,"has-starup":""})):c(s)==="chart"?(h(),f(w,{key:2})):(h(),f(B,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
