import O from"./CC7299I-.js";import D from"./DuT6dlho.js";import I from"./__GYZ_qV.js";import B from"./Cw13-UTI.js";import R from"./CPETqv28.js";import W from"./irCj-0wf.js";import F from"./CF5qsm3a.js";import{d as M}from"./KQwPfV-1.js";import{s as G,a as j,b as V,u as z,i as E,c as q}from"./CQ9099ry.js";import{i as C,p as K,a5 as A,D as h,f as x,w as J,S as $,h as v,a6 as S,T as L,q as T,U as c,d as k,a as U,H as _}from"./p-7TfyQD.js";import"./D8Vqwizp.js";import"./p2-M2djV.js";import"./ChMPyUVE.js";import"./BnfQUIfH.js";import"./oUX70nxC.js";const H=C({__name:"Chart",setup(f){const s=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(G),r=j("趋势仓库总指标排行榜",o);function u(i){const a=M(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=V(r,z);A(s,()=>{u(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(i,a)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:J({height:b})},null,4))}}),Y=Object.assign(H,{__name:"TrendChart"}),N=C({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=$(s),u=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,z);function b(a){const n=M(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}A(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:J({height:i})},null,4))}}),Q=Object.assign(N,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:39675,forks:3262,starup:36},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:8094,forks:783,starup:82},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:265282,forks:39632,starup:805},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:9727,forks:633,starup:407},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11927,forks:1850,starup:102},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:33477,forks:2326,starup:61},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:1209,forks:290,starup:111},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:4961,forks:763,starup:9},{title:`mailcow /

      mailcow-dockerized`,owner:"mailcow",name:"mailcow-dockerized",avatar:"https://avatars.githubusercontent.com/u/2972950?s=40&v=4",path:"/mailcow/mailcow-dockerized",ourl:"https://github.com/mailcow",url:"https://github.com/mailcow/mailcow-dockerized",description:"",language:"JavaScript",stars:13474,forks:1804,starup:16}],"JavaScript-weekly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:265282,forks:39632,starup:6865},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:98413,forks:10340,starup:4197},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:19999,forks:1134,starup:15675},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:8094,forks:783,starup:408},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:68068,forks:11052,starup:1484},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:9727,forks:633,starup:1137},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:3468,forks:543,starup:502},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:6619,forks:2738,starup:474},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:29606,forks:5550,starup:844},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:33477,forks:2326,starup:320},{title:`JoeanAmier /

      TikTokDownloader`,owner:"JoeanAmier",name:"TikTokDownloader",avatar:"https://avatars.githubusercontent.com/u/49263334?s=40&v=4",path:"/JoeanAmier/TikTokDownloader",ourl:"https://github.com/JoeanAmier",url:"https://github.com/JoeanAmier/TikTokDownloader",description:"",language:"JavaScript",stars:16247,forks:2769,starup:405},{title:`Mathieu2301 /

      TradingView-API`,owner:"Mathieu2301",name:"TradingView-API",avatar:"https://avatars.githubusercontent.com/u/21021423?s=40&v=4",path:"/Mathieu2301/TradingView-API",ourl:"https://github.com/Mathieu2301",url:"https://github.com/Mathieu2301/TradingView-API",description:"",language:"JavaScript",stars:5121,forks:910,starup:532},{title:`fleetbase /

      fleetbase`,owner:"fleetbase",name:"fleetbase",avatar:"https://avatars.githubusercontent.com/u/816371?s=40&v=4",path:"/fleetbase/fleetbase",ourl:"https://github.com/fleetbase",url:"https://github.com/fleetbase/fleetbase",description:"",language:"JavaScript",stars:3864,forks:1031,starup:1236},{title:`mekos2772 /

      ios-location-spoofer`,owner:"mekos2772",name:"ios-location-spoofer",avatar:"https://avatars.githubusercontent.com/u/119464194?s=40&v=4",path:"/mekos2772/ios-location-spoofer",ourl:"https://github.com/mekos2772",url:"https://github.com/mekos2772/ios-location-spoofer",description:"",language:"JavaScript",stars:4277,forks:868,starup:190},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52296,forks:5015,starup:164}],"JavaScript-monthly":[{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:69789,forks:4681,starup:54494},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:19999,forks:1134,starup:15924},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:33266,forks:3207,starup:22108},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:144317,forks:7729,starup:37126},{title:`fleetbase /

      fleetbase`,owner:"fleetbase",name:"fleetbase",avatar:"https://avatars.githubusercontent.com/u/816371?s=40&v=4",path:"/fleetbase/fleetbase",ourl:"https://github.com/fleetbase",url:"https://github.com/fleetbase/fleetbase",description:"",language:"JavaScript",stars:3864,forks:1031,starup:1580},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:3468,forks:543,starup:1915},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8456,forks:1041,starup:2860},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:11152,forks:1107,starup:2432},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13944,forks:1593,starup:1312},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11362,forks:30199,starup:344},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:49495,forks:1662,starup:586},{title:`playcanvas /

      engine`,owner:"playcanvas",name:"engine",avatar:"https://avatars.githubusercontent.com/u/697563?s=40&v=4",path:"/playcanvas/engine",ourl:"https://github.com/playcanvas",url:"https://github.com/playcanvas/engine",description:"",language:"JavaScript",stars:16885,forks:1999,starup:360},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:4669,forks:404,starup:1476},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/845989?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:41191,forks:8373,starup:40454},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:265282,forks:39632,starup:24341},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:91683,forks:8454,starup:1381},{title:`Mathieu2301 /

      TradingView-API`,owner:"Mathieu2301",name:"TradingView-API",avatar:"https://avatars.githubusercontent.com/u/21021423?s=40&v=4",path:"/Mathieu2301/TradingView-API",ourl:"https://github.com/Mathieu2301",url:"https://github.com/Mathieu2301/TradingView-API",description:"",language:"JavaScript",stars:5121,forks:910,starup:1067}],"TypeScript-daily":[{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:15231,forks:1363,starup:202},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:18082,forks:944,starup:206},{title:`upscayl /

      upscayl`,owner:"upscayl",name:"upscayl",avatar:"https://avatars.githubusercontent.com/u/25067102?s=40&v=4",path:"/upscayl/upscayl",ourl:"https://github.com/upscayl",url:"https://github.com/upscayl/upscayl",description:"",language:"TypeScript",stars:49775,forks:2517,starup:177},{title:`krillinai /

      OpenCreator`,owner:"krillinai",name:"OpenCreator",avatar:"https://avatars.githubusercontent.com/u/114557800?s=40&v=4",path:"/krillinai/OpenCreator",ourl:"https://github.com/krillinai",url:"https://github.com/krillinai/OpenCreator",description:"",language:"TypeScript",stars:12200,forks:1242,starup:161},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:18309,forks:2248,starup:945},{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:6308,forks:568,starup:712},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:75451,forks:4939,starup:985},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:38122,forks:3782,starup:543},{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:147633,forks:24129,starup:193},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:90429,forks:8936,starup:144},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:26324,forks:4261,starup:68},{title:`Jakubantalik /

      thinking-orbs`,owner:"Jakubantalik",name:"thinking-orbs",avatar:"https://avatars.githubusercontent.com/u/14873517?s=40&v=4",path:"/Jakubantalik/thinking-orbs",ourl:"https://github.com/Jakubantalik",url:"https://github.com/Jakubantalik/thinking-orbs",description:"",language:"TypeScript",stars:3170,forks:255,starup:84},{title:`code-yeongyu /

      lazycodex`,owner:"code-yeongyu",name:"lazycodex",avatar:"https://avatars.githubusercontent.com/u/11153873?s=40&v=4",path:"/code-yeongyu/lazycodex",ourl:"https://github.com/code-yeongyu",url:"https://github.com/code-yeongyu/lazycodex",description:"",language:"TypeScript",stars:3585,forks:225,starup:63}],"TypeScript-weekly":[{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:147633,forks:24129,starup:2731},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:75451,forks:4939,starup:6125},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",ourl:"https://github.com/danny-avila",url:"https://github.com/danny-avila/LibreChat",description:"",language:"TypeScript",stars:44654,forks:9171,starup:1401},{title:`cline /

      cline`,owner:"cline",name:"cline",avatar:"https://avatars.githubusercontent.com/u/7799382?s=40&v=4",path:"/cline/cline",ourl:"https://github.com/cline",url:"https://github.com/cline/cline",description:"",language:"TypeScript",stars:69062,forks:7485,starup:1204},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:110616,forks:14516,starup:1518},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:18309,forks:2248,starup:3261},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:6578,forks:487,starup:4535},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/41804588?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:7840,forks:1171,starup:2278},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:69854,forks:4784,starup:1586},{title:`vastsa /

      PI-Desktop`,owner:"vastsa",name:"PI-Desktop",avatar:"https://avatars.githubusercontent.com/u/48862574?s=40&v=4",path:"/vastsa/PI-Desktop",ourl:"https://github.com/vastsa",url:"https://github.com/vastsa/PI-Desktop",description:"",language:"TypeScript",stars:5191,forks:432,starup:1370},{title:`krillinai /

      OpenCreator`,owner:"krillinai",name:"OpenCreator",avatar:"https://avatars.githubusercontent.com/u/114557800?s=40&v=4",path:"/krillinai/OpenCreator",ourl:"https://github.com/krillinai",url:"https://github.com/krillinai/OpenCreator",description:"",language:"TypeScript",stars:12200,forks:1242,starup:666},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:55453,forks:6918,starup:2340},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:38122,forks:3782,starup:1086},{title:`ahmedkhaleel2004 /

      gitdiagram`,owner:"ahmedkhaleel2004",name:"gitdiagram",avatar:"https://avatars.githubusercontent.com/u/111161052?s=40&v=4",path:"/ahmedkhaleel2004/gitdiagram",ourl:"https://github.com/ahmedkhaleel2004",url:"https://github.com/ahmedkhaleel2004/gitdiagram",description:"",language:"TypeScript",stars:16926,forks:1288,starup:937},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:3481,forks:856,starup:1107},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:8880,forks:1084,starup:842},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",ourl:"https://github.com/n8n-io",url:"https://github.com/n8n-io/n8n",description:"",language:"TypeScript",stars:205701,forks:60844,starup:1605},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:9707,forks:1218,starup:156},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:18082,forks:944,starup:1880},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:15231,forks:1363,starup:479}],"TypeScript-monthly":[{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:38587,forks:6038,starup:17721},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:8401,forks:782,starup:4224},{title:`magnitudedev /

      magnitude`,owner:"magnitudedev",name:"magnitude",avatar:"https://avatars.githubusercontent.com/u/28166244?s=40&v=4",path:"/magnitudedev/magnitude",ourl:"https://github.com/magnitudedev",url:"https://github.com/magnitudedev/magnitude",description:"",language:"TypeScript",stars:4829,forks:369,starup:3303},{title:`tech-leads-club /

      agent-skills`,owner:"tech-leads-club",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/99354371?s=40&v=4",path:"/tech-leads-club/agent-skills",ourl:"https://github.com/tech-leads-club",url:"https://github.com/tech-leads-club/agent-skills",description:"",language:"TypeScript",stars:6652,forks:548,starup:1658},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:6578,forks:487,starup:5066},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:20004,forks:2578,starup:6955},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:28043,forks:3844,starup:8746},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:3481,forks:856,starup:2968},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/41804588?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:7840,forks:1171,starup:3727},{title:`vercel-labs /

      json-render`,owner:"vercel-labs",name:"json-render",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/json-render",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/json-render",description:"",language:"TypeScript",stars:18082,forks:944,starup:1906},{title:`Companion-Inc /

      feynman`,owner:"Companion-Inc",name:"feynman",avatar:"https://avatars.githubusercontent.com/u/66044327?s=40&v=4",path:"/Companion-Inc/feynman",ourl:"https://github.com/Companion-Inc",url:"https://github.com/Companion-Inc/feynman",description:"",language:"TypeScript",stars:9744,forks:1084,starup:1232},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:35450,forks:4130,starup:2204},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:33487,forks:9099,starup:2864},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:52333,forks:4776,starup:10417},{title:`chaitanyagiri /

      munder-difflin`,owner:"chaitanyagiri",name:"munder-difflin",avatar:"https://avatars.githubusercontent.com/u/26071627?s=40&v=4",path:"/chaitanyagiri/munder-difflin",ourl:"https://github.com/chaitanyagiri",url:"https://github.com/chaitanyagiri/munder-difflin",description:"",language:"TypeScript",stars:7828,forks:1030,starup:4502},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36067,forks:1117,starup:231}],"Vue-daily":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10239,forks:1229,starup:76},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2535,forks:159,starup:39},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23524,forks:1151,starup:46},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3388,forks:951,starup:1},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6826,forks:553,starup:1},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9364,forks:2117,starup:7},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1756,forks:472,starup:36},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26548,forks:1936,starup:10},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:13119,forks:658,starup:4},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11613,forks:925,starup:0},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28950,forks:3317,starup:4},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1685,forks:648,starup:4},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2725,forks:441,starup:2},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1904,forks:496,starup:2},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16783,forks:1360,starup:14}],"Vue-weekly":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23524,forks:1151,starup:294},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4282,forks:142,starup:68},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2535,forks:159,starup:167},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3388,forks:951,starup:17},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1659,forks:131,starup:42},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26548,forks:1936,starup:86},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:509,forks:91,starup:23},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4171,forks:848,starup:50},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:884,forks:90,starup:17},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2725,forks:441,starup:20},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:444,forks:65986,starup:2},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2290,forks:275,starup:33},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9350,forks:1773,starup:25},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33505,forks:8974,starup:61},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10239,forks:1229,starup:214},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40665,forks:5437,starup:84},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6826,forks:553,starup:22},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6349,forks:398,starup:54},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2561,forks:198,starup:143},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14457,forks:1783,starup:5}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10239,forks:1229,starup:1265},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28950,forks:3317,starup:217},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21966,forks:1522,starup:318},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33505,forks:8974,starup:388},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:444,forks:65986,starup:14},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2763,forks:196,starup:426},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2535,forks:159,starup:571},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2725,forks:441,starup:81},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33312,forks:4668,starup:200},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23524,forks:1151,starup:833},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3388,forks:951,starup:60},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26548,forks:1936,starup:343},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3734,forks:567,starup:215},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6826,forks:553,starup:95},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16783,forks:1360,starup:359},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90180,forks:30304,starup:80},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1659,forks:131,starup:114},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6349,forks:398,starup:226},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3176,forks:117,starup:138},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10258,forks:882,starup:84},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9350,forks:1773,starup:94},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4282,forks:142,starup:277}]},mt=C({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=q(),l=U(()=>b(X[`${r.value}-${o.value}`]));_("color",u),_("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=O,g=D,m=I,d=B,t=R,e=W,y=F,w=Y,P=Q;return h(),x("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>T(r)?r.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>T(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(L,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(y,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(w,{key:2})):(h(),k(P,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
