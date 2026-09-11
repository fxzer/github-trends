import z from"./DeBTgNQm.js";import B from"./hRvIbTMC.js";import q from"./Ca9vbAxV.js";import P from"./3XI-4ick.js";import D from"./DU2syBdw.js";import F from"./Binft3pg.js";import W from"./Cyf4bNEE.js";import{d as C}from"./KQwPfV-1.js";import{s as H,a as V,b as J,u as O,i as G,c as L}from"./CYag9V9b.js";import{i as x,p as R,a5 as M,D as l,f as A,w as j,S as U,h as v,a6 as S,T as $,q as T,U as h,d as y,a as E,H as _}from"./D68DdSvd.js";import"./DE25jhd3.js";import"./p2-M2djV.js";import"./BgHZHRyr.js";import"./DRlgjKeP.js";import"./BAEwp3E3.js";const N=x({__name:"Chart",setup(k){const r=R("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),s=V("趋势仓库总指标排行榜",o);function u(i){const a=C(i);a.sort((t,e)=>{const f=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return f-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:c}=J(s,O);M(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(l(),A("div",{ref_key:"chartRef",ref:c,style:j({height:b})},null,4))}}),Y=Object.assign(N,{__name:"TrendChart"}),K=x({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=U(r),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:c}=J(u,O);function b(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:G(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}M(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(l(),A("div",{ref_key:"chartRef",ref:c,style:j({height:i})},null,4))}}),Q=Object.assign(K,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/106619546?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:25340,forks:5208,starup:1762},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:31145,forks:3013,starup:962},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:6405,forks:843,starup:245},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:11650,forks:809,starup:28},{title:`Anil-matcha /

      awesome-generative-ai-apps`,owner:"Anil-matcha",name:"awesome-generative-ai-apps",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/awesome-generative-ai-apps",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/awesome-generative-ai-apps",description:"",language:"JavaScript",stars:3203,forks:460,starup:13},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:4773,forks:833,starup:10},{title:`qeeqbox /

      social-analyzer`,owner:"qeeqbox",name:"social-analyzer",avatar:"https://avatars.githubusercontent.com/u/52905881?s=40&v=4",path:"/qeeqbox/social-analyzer",ourl:"https://github.com/qeeqbox",url:"https://github.com/qeeqbox/social-analyzer",description:"",language:"JavaScript",stars:24002,forks:2313,starup:17},{title:`Eigenwise /

      eigenwise-toolshed`,owner:"Eigenwise",name:"eigenwise-toolshed",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Eigenwise/eigenwise-toolshed",ourl:"https://github.com/Eigenwise",url:"https://github.com/Eigenwise/eigenwise-toolshed",description:"",language:"TypeScript",stars:129,forks:17,starup:15},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:28382,forks:5139,starup:168},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:15681,forks:820,starup:144},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:10915,forks:1079,starup:68},{title:`Anarios /

      return-youtube-dislike`,owner:"Anarios",name:"return-youtube-dislike",avatar:"https://avatars.githubusercontent.com/u/3018711?s=40&v=4",path:"/Anarios/return-youtube-dislike",ourl:"https://github.com/Anarios",url:"https://github.com/Anarios/return-youtube-dislike",description:"",language:"JavaScript",stars:13769,forks:632,starup:12},{title:`sudheerj /

      reactjs-interview-questions`,owner:"sudheerj",name:"reactjs-interview-questions",avatar:"https://avatars.githubusercontent.com/u/3127317?s=40&v=4",path:"/sudheerj/reactjs-interview-questions",ourl:"https://github.com/sudheerj",url:"https://github.com/sudheerj/reactjs-interview-questions",description:"",language:"JavaScript",stars:44803,forks:10385,starup:8}],"JavaScript-weekly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:256082,forks:38329,starup:9257},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:135187,forks:7249,starup:11638},{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:57867,forks:3778,starup:11958},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:6405,forks:843,starup:1018},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:49506,forks:7535,starup:2711},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/106619546?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:25340,forks:5208,starup:6051},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13721,forks:1555,starup:770},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8026,forks:986,starup:1607},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:10915,forks:1079,starup:1850},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:2792,forks:430,starup:773},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:28382,forks:5139,starup:1336},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2894,forks:749,starup:268},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11242,forks:29204,starup:107},{title:`facebook /

      stylex`,owner:"facebook",name:"stylex",avatar:"https://avatars.githubusercontent.com/u/3582514?s=40&v=4",path:"/facebook/stylex",ourl:"https://github.com/facebook",url:"https://github.com/facebook/stylex",description:"",language:"JavaScript",stars:10272,forks:480,starup:170},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:64768,forks:10632,starup:585},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:28281,forks:5022,starup:608},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:250033,forks:51326,starup:745},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",ourl:"https://github.com/koodo-reader",url:"https://github.com/koodo-reader/koodo-reader",description:"",language:"JavaScript",stars:28151,forks:2104,starup:102}],"JavaScript-monthly":[{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:57867,forks:3778,starup:46339},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:31145,forks:3013,starup:21157},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8026,forks:986,starup:2706},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:10915,forks:1079,starup:2463},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:2792,forks:430,starup:1638},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11242,forks:29204,starup:342},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:15681,forks:820,starup:6258},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:62636,forks:6343,starup:4594},{title:`electerm /

      electerm`,owner:"electerm",name:"electerm",avatar:"https://avatars.githubusercontent.com/u/1641949?s=40&v=4",path:"/electerm/electerm",ourl:"https://github.com/electerm",url:"https://github.com/electerm/electerm",description:"",language:"JavaScript",stars:15084,forks:1216,starup:418},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13721,forks:1555,starup:1121},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:91246,forks:8397,starup:1332},{title:`OpenSenseNova /

      SenseNova-Skills`,owner:"OpenSenseNova",name:"SenseNova-Skills",avatar:"https://avatars.githubusercontent.com/u/28984159?s=40&v=4",path:"/OpenSenseNova/SenseNova-Skills",ourl:"https://github.com/OpenSenseNova",url:"https://github.com/OpenSenseNova/SenseNova-Skills",description:"",language:"JavaScript",stars:5543,forks:387,starup:710},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",ourl:"https://github.com/MagicMirrorOrg",url:"https://github.com/MagicMirrorOrg/MagicMirror",description:"",language:"JavaScript",stars:23858,forks:4563,starup:154},{title:`JoeanAmier /

      TikTokDownloader`,owner:"JoeanAmier",name:"TikTokDownloader",avatar:"https://avatars.githubusercontent.com/u/49263334?s=40&v=4",path:"/JoeanAmier/TikTokDownloader",ourl:"https://github.com/JoeanAmier",url:"https://github.com/JoeanAmier/TikTokDownloader",description:"",language:"JavaScript",stars:15878,forks:2718,starup:533},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:3320,forks:961,starup:1558},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:4300,forks:361,starup:1418},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:40885,forks:5445,starup:2658},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:49418,forks:1660,starup:563},{title:`fmhy /

      edit`,owner:"fmhy",name:"edit",avatar:"https://avatars.githubusercontent.com/u/44333466?s=40&v=4",path:"/fmhy/edit",ourl:"https://github.com/fmhy",url:"https://github.com/fmhy/edit",description:"",language:"JavaScript",stars:11722,forks:3056,starup:650},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:67741,forks:4342,starup:1005},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:52084,forks:3936,starup:813}],"TypeScript-daily":[{title:`alsk1992 /

      CloddsBot`,owner:"alsk1992",name:"CloddsBot",avatar:"https://avatars.githubusercontent.com/u/193760801?s=40&v=4",path:"/alsk1992/CloddsBot",ourl:"https://github.com/alsk1992",url:"https://github.com/alsk1992/CloddsBot",description:"",language:"TypeScript",stars:1860,forks:268,starup:277},{title:`Tencent /

      teamai-cli`,owner:"Tencent",name:"teamai-cli",avatar:"https://avatars.githubusercontent.com/u/279665174?s=40&v=4",path:"/Tencent/teamai-cli",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/teamai-cli",description:"",language:"TypeScript",stars:4032,forks:257,starup:841},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:64497,forks:9021,starup:626},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:35623,forks:5664,starup:837},{title:`nashsu /

      llm_wiki`,owner:"nashsu",name:"llm_wiki",avatar:"https://avatars.githubusercontent.com/u/2127280?s=40&v=4",path:"/nashsu/llm_wiki",ourl:"https://github.com/nashsu",url:"https://github.com/nashsu/llm_wiki",description:"",language:"TypeScript",stars:18349,forks:2112,starup:142},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:31315,forks:2671,starup:122},{title:`vastsa /

      PI-Desktop`,owner:"vastsa",name:"PI-Desktop",avatar:"https://avatars.githubusercontent.com/u/48862574?s=40&v=4",path:"/vastsa/PI-Desktop",ourl:"https://github.com/vastsa",url:"https://github.com/vastsa/PI-Desktop",description:"",language:"TypeScript",stars:2509,forks:202,starup:624},{title:`microsoft /

      Ontology-Playground`,owner:"microsoft",name:"Ontology-Playground",avatar:"https://avatars.githubusercontent.com/u/30834?s=40&v=4",path:"/microsoft/Ontology-Playground",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Ontology-Playground",description:"",language:"TypeScript",stars:2651,forks:339,starup:30},{title:`traycerai /

      traycer`,owner:"traycerai",name:"traycer",avatar:"https://avatars.githubusercontent.com/u/34568645?s=40&v=4",path:"/traycerai/traycer",ourl:"https://github.com/traycerai",url:"https://github.com/traycerai/traycer",description:"",language:"TypeScript",stars:1463,forks:194,starup:25},{title:`letta-ai /

      letta-code`,owner:"letta-ai",name:"letta-code",avatar:"https://avatars.githubusercontent.com/u/248085862?s=40&v=4",path:"/letta-ai/letta-code",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/letta-code",description:"",language:"TypeScript",stars:3270,forks:396,starup:16},{title:`ahmadrosid /

      nakama`,owner:"ahmadrosid",name:"nakama",avatar:"https://avatars.githubusercontent.com/u/29406408?s=40&v=4",path:"/ahmadrosid/nakama",ourl:"https://github.com/ahmadrosid",url:"https://github.com/ahmadrosid/nakama",description:"",language:"TypeScript",stars:364,forks:64,starup:8},{title:`MoonTechLab /

      LunaTV`,owner:"MoonTechLab",name:"LunaTV",avatar:"https://avatars.githubusercontent.com/u/155552943?s=40&v=4",path:"/MoonTechLab/LunaTV",ourl:"https://github.com/MoonTechLab",url:"https://github.com/MoonTechLab/LunaTV",description:"",language:"TypeScript",stars:10404,forks:9084,starup:17},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:7415,forks:647,starup:127},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:22064,forks:1590,starup:297},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:48881,forks:4470,starup:373},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:52964,forks:6611,starup:139},{title:`yilewang /

      llm-for-zotero`,owner:"yilewang",name:"llm-for-zotero",avatar:"https://avatars.githubusercontent.com/u/37648360?s=40&v=4",path:"/yilewang/llm-for-zotero",ourl:"https://github.com/yilewang",url:"https://github.com/yilewang/llm-for-zotero",description:"",language:"TypeScript",stars:2955,forks:170,starup:24},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:29621,forks:2592,starup:56}],"TypeScript-weekly":[{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:22064,forks:1590,starup:1619},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:48881,forks:4470,starup:4896},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:51615,forks:3627,starup:791},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:72033,forks:8520,starup:1694},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:35623,forks:5664,starup:4174},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:18328,forks:2316,starup:1679},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:206587,forks:27011,starup:3139},{title:`awslabs /

      aidlc-workflows`,owner:"awslabs",name:"aidlc-workflows",avatar:"https://avatars.githubusercontent.com/u/2102737?s=40&v=4",path:"/awslabs/aidlc-workflows",ourl:"https://github.com/awslabs",url:"https://github.com/awslabs/aidlc-workflows",description:"",language:"TypeScript",stars:4543,forks:816,starup:204},{title:`humanlayer /

      skills`,owner:"humanlayer",name:"skills",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/skills",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/skills",description:"",language:"TypeScript",stars:3721,forks:110,starup:2609},{title:`magnitudedev /

      magnitude`,owner:"magnitudedev",name:"magnitude",avatar:"https://avatars.githubusercontent.com/u/28166244?s=40&v=4",path:"/magnitudedev/magnitude",ourl:"https://github.com/magnitudedev",url:"https://github.com/magnitudedev/magnitude",description:"",language:"TypeScript",stars:4288,forks:317,starup:2446},{title:`MoonTechLab /

      LunaTV`,owner:"MoonTechLab",name:"LunaTV",avatar:"https://avatars.githubusercontent.com/u/155552943?s=40&v=4",path:"/MoonTechLab/LunaTV",ourl:"https://github.com/MoonTechLab",url:"https://github.com/MoonTechLab/LunaTV",description:"",language:"TypeScript",stars:10404,forks:9084,starup:1041},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:33135,forks:9080,starup:899},{title:`BraveOPotato /

      FckSignups`,owner:"BraveOPotato",name:"FckSignups",avatar:"https://avatars.githubusercontent.com/u/57965732?s=40&v=4",path:"/BraveOPotato/FckSignups",ourl:"https://github.com/BraveOPotato",url:"https://github.com/BraveOPotato/FckSignups",description:"",language:"TypeScript",stars:4174,forks:242,starup:1637},{title:`alsk1992 /

      CloddsBot`,owner:"alsk1992",name:"CloddsBot",avatar:"https://avatars.githubusercontent.com/u/193760801?s=40&v=4",path:"/alsk1992/CloddsBot",ourl:"https://github.com/alsk1992",url:"https://github.com/alsk1992/CloddsBot",description:"",language:"TypeScript",stars:1860,forks:268,starup:594},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:23278,forks:2916,starup:1402},{title:`OpenHands /

      OpenHands`,owner:"OpenHands",name:"OpenHands",avatar:"https://avatars.githubusercontent.com/u/175740463?s=40&v=4",path:"/OpenHands/OpenHands",ourl:"https://github.com/OpenHands",url:"https://github.com/OpenHands/OpenHands",description:"",language:"TypeScript",stars:87326,forks:11453,starup:1215},{title:`AdventDevInc /

      kudu`,owner:"AdventDevInc",name:"kudu",avatar:"https://avatars.githubusercontent.com/u/182394?s=40&v=4",path:"/AdventDevInc/kudu",ourl:"https://github.com/AdventDevInc",url:"https://github.com/AdventDevInc/kudu",description:"",language:"TypeScript",stars:3405,forks:274,starup:979},{title:`aipoch /

      open-science`,owner:"aipoch",name:"open-science",avatar:"https://avatars.githubusercontent.com/u/301582936?s=40&v=4",path:"/aipoch/open-science",ourl:"https://github.com/aipoch",url:"https://github.com/aipoch/open-science",description:"",language:"TypeScript",stars:4050,forks:264,starup:779}],"TypeScript-monthly":[{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:7415,forks:647,starup:4798},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:35623,forks:5664,starup:14604},{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:5215,forks:486,starup:3941},{title:`titanwings /

      distilly`,owner:"titanwings",name:"distilly",avatar:"https://avatars.githubusercontent.com/u/85022018?s=40&v=4",path:"/titanwings/distilly",ourl:"https://github.com/titanwings",url:"https://github.com/titanwings/distilly",description:"",language:"TypeScript",stars:24613,forks:2138,starup:3896},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:18328,forks:2316,starup:7159},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:25436,forks:3479,starup:7298},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:11933,forks:1276,starup:3187},{title:`bookorbit /

      bookorbit`,owner:"bookorbit",name:"bookorbit",avatar:"https://avatars.githubusercontent.com/u/18559658?s=40&v=4",path:"/bookorbit/bookorbit",ourl:"https://github.com/bookorbit",url:"https://github.com/bookorbit/bookorbit",description:"",language:"TypeScript",stars:4190,forks:261,starup:2111},{title:`1weiho /

      open-slide`,owner:"1weiho",name:"open-slide",avatar:"https://avatars.githubusercontent.com/u/75478661?s=40&v=4",path:"/1weiho/open-slide",ourl:"https://github.com/1weiho",url:"https://github.com/1weiho/open-slide",description:"",language:"TypeScript",stars:7546,forks:535,starup:1446},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:33135,forks:9080,starup:2681},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36013,forks:1109,starup:256},{title:`maotoumao /

      MusicFree`,owner:"maotoumao",name:"MusicFree",avatar:"https://avatars.githubusercontent.com/u/31655147?s=40&v=4",path:"/maotoumao/MusicFree",ourl:"https://github.com/maotoumao",url:"https://github.com/maotoumao/MusicFree",description:"",language:"TypeScript",stars:26785,forks:1923,starup:874},{title:`advaitpaliwal /

      feynman`,owner:"advaitpaliwal",name:"feynman",avatar:"https://avatars.githubusercontent.com/u/66044327?s=40&v=4",path:"/advaitpaliwal/feynman",ourl:"https://github.com/advaitpaliwal",url:"https://github.com/advaitpaliwal/feynman",description:"",language:"TypeScript",stars:9390,forks:1059,starup:906},{title:`lightningpixel /

      modly`,owner:"lightningpixel",name:"modly",avatar:"https://avatars.githubusercontent.com/u/63157773?s=40&v=4",path:"/lightningpixel/modly",ourl:"https://github.com/lightningpixel",url:"https://github.com/lightningpixel/modly",description:"",language:"TypeScript",stars:7498,forks:707,starup:2619},{title:`apify /

      apify-mcp-server`,owner:"apify",name:"apify-mcp-server",avatar:"https://avatars.githubusercontent.com/u/19406805?s=40&v=4",path:"/apify/apify-mcp-server",ourl:"https://github.com/apify",url:"https://github.com/apify/apify-mcp-server",description:"",language:"TypeScript",stars:6723,forks:259,starup:3552},{title:`vercel-labs /

      portless`,owner:"vercel-labs",name:"portless",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/portless",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/portless",description:"",language:"TypeScript",stars:12402,forks:411,starup:2080},{title:`elizaOS /

      eliza`,owner:"elizaOS",name:"eliza",avatar:"https://avatars.githubusercontent.com/u/18633264?s=40&v=4",path:"/elizaOS/eliza",ourl:"https://github.com/elizaOS",url:"https://github.com/elizaOS/eliza",description:"",language:"TypeScript",stars:19324,forks:5713,starup:385},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:30605,forks:3151,starup:7210},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/1715019?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"TypeScript",stars:43506,forks:4045,starup:567}],"Vue-daily":[{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28896,forks:3315,starup:16},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:7110,forks:5215,starup:3},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23076,forks:1122,starup:11},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:456,forks:65,starup:12},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33424,forks:8956,starup:14},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4103,forks:835,starup:6},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"TypeScript",stars:3209,forks:1482,starup:3},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:9890,forks:1178,starup:49},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1601,forks:128,starup:3},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3511,forks:1416,starup:4},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2692,forks:437,starup:2},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3683,forks:555,starup:4},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3371,forks:934,starup:3},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:440,forks:63445,starup:1},{title:`Abdulqudus001 /

      vue-skeleton-loader`,owner:"Abdulqudus001",name:"vue-skeleton-loader",avatar:"https://avatars.githubusercontent.com/u/36643967?s=40&v=4",path:"/Abdulqudus001/vue-skeleton-loader",ourl:"https://github.com/Abdulqudus001",url:"https://github.com/Abdulqudus001/vue-skeleton-loader",description:"",language:"Vue",stars:115,forks:7,starup:4},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2392,forks:189,starup:5},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:457,forks:82,starup:47}],"Vue-weekly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:9890,forks:1178,starup:314},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28896,forks:3315,starup:63},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:335,forks:40,starup:42},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9320,forks:1769,starup:28},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3235,forks:397,starup:101},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:456,forks:65,starup:83},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16680,forks:1356,starup:81},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26419,forks:1933,starup:59},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4103,forks:835,starup:34},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11740,forks:1873,starup:12},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"TypeScript",stars:3209,forks:1482,starup:23},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2253,forks:145,starup:175},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3371,forks:934,starup:17},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23076,forks:1122,starup:120},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2692,forks:437,starup:18},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:13097,forks:657,starup:23},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40551,forks:5399,starup:103},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33424,forks:8956,starup:72}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:9890,forks:1178,starup:1017},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21893,forks:1510,starup:339},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28896,forks:3315,starup:200},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33272,forks:4675,starup:212},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2725,forks:188,starup:423},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33424,forks:8956,starup:398},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:1005,forks:120,starup:185},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16680,forks:1356,starup:386},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:440,forks:63445,starup:15},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2253,forks:145,starup:452},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:863,forks:82,starup:77},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2692,forks:437,starup:67},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5866,forks:1108,starup:163},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:335,forks:40,starup:145},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3371,forks:934,starup:71},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21611,forks:2340,starup:95},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23076,forks:1122,starup:644},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3235,forks:397,starup:427},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21645,forks:3894,starup:47},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3683,forks:555,starup:188},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:456,forks:65,starup:187},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90192,forks:30314,starup:84}]},mt=x({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:u}=L(),c=E(()=>b(X[`${s.value}-${o.value}`]));_("color",u),_("data",c);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=z,g=B,m=q,d=P,t=D,e=F,f=W,w=Y,I=Q;return l(),A("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v($,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(l(),y(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(l(),y(f,{key:1,"has-starup":""})):h(r)==="chart"?(l(),y(w,{key:2})):(l(),y(I,{key:3,data:h(c)},null,8,["data"]))]),_:1})])}}});export{mt as default};
