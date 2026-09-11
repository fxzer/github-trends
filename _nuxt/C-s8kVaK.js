import D from"./3MJNGccI.js";import B from"./97DTucfT.js";import I from"./gqQlT_9k.js";import z from"./IMXZ5jHS.js";import F from"./DbruOUHh.js";import L from"./Ctw5csIs.js";import R from"./CYtxDAAd.js";import{d as C}from"./KQwPfV-1.js";import{s as H,a as J,b as V,u as j,i as W,c as G}from"./BIjI_J7h.js";import{i as x,p as q,a5 as O,D as l,f as _,w as M,S as E,h as v,a6 as S,T as U,q as T,U as h,d as f,a as $,H as A}from"./VCDSbTLX.js";import"./Bt7n8g_8.js";import"./p2-M2djV.js";import"./Bz03COJF.js";import"./Csc0OPPK.js";import"./60FUX_Ra.js";const N=x({__name:"Chart",setup(k){const s=q("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),r=J("趋势仓库总指标排行榜",o);function i(u){const a=C(u);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:c}=V(r,j);O(s,()=>{i(s.value)},{deep:!0,immediate:!0});const b=`${100+s.value.length*40}px`;return(u,a)=>(l(),_("div",{ref_key:"chartRef",ref:c,style:M({height:b})},null,4))}}),Y=Object.assign(N,{__name:"TrendChart"}),K=x({__name:"StarupChart",props:{data:{}},setup(k){const s=k,{data:o}=E(s),i=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:c}=V(i,j);function b(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(m[e%m.length])}));i.value.series[0].data=d,i.value.yAxis.data=g}O(o,()=>{b(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(l(),_("div",{ref_key:"chartRef",ref:c,style:M({height:u})},null,4))}}),Q=Object.assign(K,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/106619546?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:26589,forks:5432,starup:3642},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:31320,forks:3032,starup:654},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:64847,forks:10655,starup:188},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:38906,forks:4928,starup:53},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:6434,forks:847,starup:66},{title:`0xranx /

      OpenContext`,owner:"0xranx",name:"OpenContext",avatar:"https://avatars.githubusercontent.com/u/201130212?s=40&v=4",path:"/0xranx/OpenContext",ourl:"https://github.com/0xranx",url:"https://github.com/0xranx/OpenContext",description:"",language:"JavaScript",stars:1074,forks:67,starup:115},{title:`pdone /

      lx-music-source`,owner:"pdone",name:"lx-music-source",avatar:"https://avatars.githubusercontent.com/u/34151215?s=40&v=4",path:"/pdone/lx-music-source",ourl:"https://github.com/pdone",url:"https://github.com/pdone/lx-music-source",description:"",language:"JavaScript",stars:8667,forks:723,starup:29},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:250043,forks:51328,starup:403},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:2087,forks:200,starup:21},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:1033,forks:128,starup:5},{title:`h5bp /

      html5-boilerplate`,owner:"h5bp",name:"html5-boilerplate",avatar:"https://avatars.githubusercontent.com/u/39191?s=40&v=4",path:"/h5bp/html5-boilerplate",ourl:"https://github.com/h5bp",url:"https://github.com/h5bp/html5-boilerplate",description:"",language:"JavaScript",stars:57618,forks:12259,starup:6},{title:`Asabeneh /

      30-Days-Of-JavaScript`,owner:"Asabeneh",name:"30-Days-Of-JavaScript",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-JavaScript",ourl:"https://github.com/Asabeneh",url:"https://github.com/Asabeneh/30-Days-Of-JavaScript",description:"",language:"JavaScript",stars:46787,forks:10460,starup:7}],"JavaScript-weekly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:256391,forks:38369,starup:9257},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:135683,forks:7272,starup:11638},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:6434,forks:847,starup:1018},{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:58367,forks:3809,starup:11958},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/106619546?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:26589,forks:5432,starup:6051},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:49588,forks:7544,starup:2711},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:10929,forks:1080,starup:1850},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13781,forks:1561,starup:770},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:2812,forks:435,starup:773},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8052,forks:990,starup:1607},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:28433,forks:5160,starup:1336},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2904,forks:750,starup:268},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:64847,forks:10655,starup:585},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11247,forks:29246,starup:107},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:250043,forks:51328,starup:745},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:38906,forks:4928,starup:287},{title:`fmhy /

      edit`,owner:"fmhy",name:"edit",avatar:"https://avatars.githubusercontent.com/u/44333466?s=40&v=4",path:"/fmhy/edit",ourl:"https://github.com/fmhy",url:"https://github.com/fmhy/edit",description:"",language:"JavaScript",stars:11732,forks:3056,starup:196},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:28298,forks:5027,starup:608},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:65931,forks:7309,starup:351}],"JavaScript-monthly":[{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:58367,forks:3809,starup:46339},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:31320,forks:3032,starup:21157},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:8052,forks:990,starup:2706},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:10929,forks:1080,starup:2463},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:2812,forks:435,starup:1638},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:62648,forks:6344,starup:4594},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:13781,forks:1561,starup:1121},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:15726,forks:823,starup:6258},{title:`OpenSenseNova /

      SenseNova-Skills`,owner:"OpenSenseNova",name:"SenseNova-Skills",avatar:"https://avatars.githubusercontent.com/u/28984159?s=40&v=4",path:"/OpenSenseNova/SenseNova-Skills",ourl:"https://github.com/OpenSenseNova",url:"https://github.com/OpenSenseNova/SenseNova-Skills",description:"",language:"JavaScript",stars:5562,forks:387,starup:710},{title:`electerm /

      electerm`,owner:"electerm",name:"electerm",avatar:"https://avatars.githubusercontent.com/u/1641949?s=40&v=4",path:"/electerm/electerm",ourl:"https://github.com/electerm",url:"https://github.com/electerm/electerm",description:"",language:"JavaScript",stars:15086,forks:1216,starup:418},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:91273,forks:8395,starup:1332},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",ourl:"https://github.com/MagicMirrorOrg",url:"https://github.com/MagicMirrorOrg/MagicMirror",description:"",language:"JavaScript",stars:23858,forks:4563,starup:154},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:49420,forks:1659,starup:563},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:3332,forks:964,starup:1558},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:40886,forks:5446,starup:2658},{title:`fmhy /

      edit`,owner:"fmhy",name:"edit",avatar:"https://avatars.githubusercontent.com/u/44333466?s=40&v=4",path:"/fmhy/edit",ourl:"https://github.com/fmhy",url:"https://github.com/fmhy/edit",description:"",language:"JavaScript",stars:11732,forks:3056,starup:650},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:52091,forks:3936,starup:813},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:67755,forks:4344,starup:1005},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:256391,forks:38369,starup:18090},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:4304,forks:364,starup:1418},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:2087,forks:200,starup:809},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:24476,forks:930,starup:516}],"TypeScript-daily":[{title:`nab138 /

      iloader`,owner:"nab138",name:"iloader",avatar:"https://avatars.githubusercontent.com/u/56705177?s=40&v=4",path:"/nab138/iloader",ourl:"https://github.com/nab138",url:"https://github.com/nab138/iloader",description:"",language:"TypeScript",stars:2860,forks:199,starup:36},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:1239,forks:478,starup:126},{title:`vastsa /

      PI-Desktop`,owner:"vastsa",name:"PI-Desktop",avatar:"https://avatars.githubusercontent.com/u/48862574?s=40&v=4",path:"/vastsa/PI-Desktop",ourl:"https://github.com/vastsa",url:"https://github.com/vastsa/PI-Desktop",description:"",language:"TypeScript",stars:2722,forks:213,starup:545},{title:`alsk1992 /

      CloddsBot`,owner:"alsk1992",name:"CloddsBot",avatar:"https://avatars.githubusercontent.com/u/193760801?s=40&v=4",path:"/alsk1992/CloddsBot",ourl:"https://github.com/alsk1992",url:"https://github.com/alsk1992/CloddsBot",description:"",language:"TypeScript",stars:2066,forks:277,starup:627},{title:`nashsu /

      llm_wiki`,owner:"nashsu",name:"llm_wiki",avatar:"https://avatars.githubusercontent.com/u/2127280?s=40&v=4",path:"/nashsu/llm_wiki",ourl:"https://github.com/nashsu",url:"https://github.com/nashsu/llm_wiki",description:"",language:"TypeScript",stars:18633,forks:2129,starup:640},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:23483,forks:2932,starup:83},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:64788,forks:9058,starup:835},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:22163,forks:1596,starup:224},{title:`Tencent /

      teamai-cli`,owner:"Tencent",name:"teamai-cli",avatar:"https://avatars.githubusercontent.com/u/279665174?s=40&v=4",path:"/Tencent/teamai-cli",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/teamai-cli",description:"",language:"TypeScript",stars:4153,forks:267,starup:597},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:31408,forks:2679,starup:484},{title:`microsoft /

      Ontology-Playground`,owner:"microsoft",name:"Ontology-Playground",avatar:"https://avatars.githubusercontent.com/u/30834?s=40&v=4",path:"/microsoft/Ontology-Playground",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Ontology-Playground",description:"",language:"TypeScript",stars:2659,forks:342,starup:25},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:7450,forks:651,starup:108},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",ourl:"https://github.com/expo",url:"https://github.com/expo/expo",description:"",language:"TypeScript",stars:52171,forks:13918,starup:33},{title:`tailwindlabs /

      tailwindcss`,owner:"tailwindlabs",name:"tailwindcss",avatar:"https://avatars.githubusercontent.com/u/4323180?s=40&v=4",path:"/tailwindlabs/tailwindcss",ourl:"https://github.com/tailwindlabs",url:"https://github.com/tailwindlabs/tailwindcss",description:"",language:"TypeScript",stars:97500,forks:5607,starup:18},{title:`chthollyphile /

      folia-major`,owner:"chthollyphile",name:"folia-major",avatar:"https://avatars.githubusercontent.com/u/30263107?s=40&v=4",path:"/chthollyphile/folia-major",ourl:"https://github.com/chthollyphile",url:"https://github.com/chthollyphile/folia-major",description:"",language:"TypeScript",stars:2338,forks:185,starup:68},{title:`awslabs /

      aidlc-workflows`,owner:"awslabs",name:"aidlc-workflows",avatar:"https://avatars.githubusercontent.com/u/2102737?s=40&v=4",path:"/awslabs/aidlc-workflows",ourl:"https://github.com/awslabs",url:"https://github.com/awslabs/aidlc-workflows",description:"",language:"TypeScript",stars:4555,forks:820,starup:45}],"TypeScript-weekly":[{title:`humanlayer /

      skills`,owner:"humanlayer",name:"skills",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/skills",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/skills",description:"",language:"TypeScript",stars:3753,forks:110,starup:2609},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:22163,forks:1596,starup:1619},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:48981,forks:4483,starup:4896},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:51663,forks:3631,starup:791},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:72107,forks:8530,starup:1694},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:35841,forks:5692,starup:4174},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:18394,forks:2324,starup:1679},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:206722,forks:27042,starup:3139},{title:`awslabs /

      aidlc-workflows`,owner:"awslabs",name:"aidlc-workflows",avatar:"https://avatars.githubusercontent.com/u/2102737?s=40&v=4",path:"/awslabs/aidlc-workflows",ourl:"https://github.com/awslabs",url:"https://github.com/awslabs/aidlc-workflows",description:"",language:"TypeScript",stars:4555,forks:820,starup:204},{title:`OpenHands /

      OpenHands`,owner:"OpenHands",name:"OpenHands",avatar:"https://avatars.githubusercontent.com/u/175740463?s=40&v=4",path:"/OpenHands/OpenHands",ourl:"https://github.com/OpenHands",url:"https://github.com/OpenHands/OpenHands",description:"",language:"TypeScript",stars:87490,forks:11462,starup:1215},{title:`alsk1992 /

      CloddsBot`,owner:"alsk1992",name:"CloddsBot",avatar:"https://avatars.githubusercontent.com/u/193760801?s=40&v=4",path:"/alsk1992/CloddsBot",ourl:"https://github.com/alsk1992",url:"https://github.com/alsk1992/CloddsBot",description:"",language:"TypeScript",stars:2066,forks:277,starup:594},{title:`advaitpaliwal /

      feynman`,owner:"advaitpaliwal",name:"feynman",avatar:"https://avatars.githubusercontent.com/u/66044327?s=40&v=4",path:"/advaitpaliwal/feynman",ourl:"https://github.com/advaitpaliwal",url:"https://github.com/advaitpaliwal/feynman",description:"",language:"TypeScript",stars:9444,forks:1066,starup:574},{title:`MoonTechLab /

      LunaTV`,owner:"MoonTechLab",name:"LunaTV",avatar:"https://avatars.githubusercontent.com/u/155552943?s=40&v=4",path:"/MoonTechLab/LunaTV",ourl:"https://github.com/MoonTechLab",url:"https://github.com/MoonTechLab/LunaTV",description:"",language:"TypeScript",stars:10410,forks:9085,starup:1041},{title:`BraveOPotato /

      FckSignups`,owner:"BraveOPotato",name:"FckSignups",avatar:"https://avatars.githubusercontent.com/u/57965732?s=40&v=4",path:"/BraveOPotato/FckSignups",ourl:"https://github.com/BraveOPotato",url:"https://github.com/BraveOPotato/FckSignups",description:"",language:"TypeScript",stars:4186,forks:243,starup:1637},{title:`magnitudedev /

      magnitude`,owner:"magnitudedev",name:"magnitude",avatar:"https://avatars.githubusercontent.com/u/28166244?s=40&v=4",path:"/magnitudedev/magnitude",ourl:"https://github.com/magnitudedev",url:"https://github.com/magnitudedev/magnitude",description:"",language:"TypeScript",stars:4323,forks:322,starup:2446},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:23483,forks:2932,starup:1402},{title:`AdventDevInc /

      kudu`,owner:"AdventDevInc",name:"kudu",avatar:"https://avatars.githubusercontent.com/u/182394?s=40&v=4",path:"/AdventDevInc/kudu",ourl:"https://github.com/AdventDevInc",url:"https://github.com/AdventDevInc/kudu",description:"",language:"TypeScript",stars:3411,forks:274,starup:979},{title:`adminsyspro /

      proxcenter-ui`,owner:"adminsyspro",name:"proxcenter-ui",avatar:"https://avatars.githubusercontent.com/u/51157323?s=40&v=4",path:"/adminsyspro/proxcenter-ui",ourl:"https://github.com/adminsyspro",url:"https://github.com/adminsyspro/proxcenter-ui",description:"",language:"TypeScript",stars:1599,forks:97,starup:306},{title:`aipoch /

      open-science`,owner:"aipoch",name:"open-science",avatar:"https://avatars.githubusercontent.com/u/301582936?s=40&v=4",path:"/aipoch/open-science",ourl:"https://github.com/aipoch",url:"https://github.com/aipoch/open-science",description:"",language:"TypeScript",stars:4070,forks:264,starup:779}],"TypeScript-monthly":[{title:`cordiverse /

      cordis`,owner:"cordiverse",name:"cordis",avatar:"https://avatars.githubusercontent.com/u/33423008?s=40&v=4",path:"/cordiverse/cordis",ourl:"https://github.com/cordiverse",url:"https://github.com/cordiverse/cordis",description:"",language:"TypeScript",stars:8369,forks:521,starup:8270},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:7450,forks:651,starup:4798},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:35841,forks:5692,starup:14604},{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:5236,forks:486,starup:3941},{title:`titanwings /

      distilly`,owner:"titanwings",name:"distilly",avatar:"https://avatars.githubusercontent.com/u/85022018?s=40&v=4",path:"/titanwings/distilly",ourl:"https://github.com/titanwings",url:"https://github.com/titanwings/distilly",description:"",language:"TypeScript",stars:24623,forks:2139,starup:3896},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:18394,forks:2324,starup:7159},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:25524,forks:3488,starup:7298},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:11951,forks:1279,starup:3187},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:33157,forks:9080,starup:2681},{title:`bookorbit /

      bookorbit`,owner:"bookorbit",name:"bookorbit",avatar:"https://avatars.githubusercontent.com/u/18559658?s=40&v=4",path:"/bookorbit/bookorbit",ourl:"https://github.com/bookorbit",url:"https://github.com/bookorbit/bookorbit",description:"",language:"TypeScript",stars:4227,forks:263,starup:2111},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",ourl:"https://github.com/solidjs",url:"https://github.com/solidjs/solid",description:"",language:"TypeScript",stars:36021,forks:1110,starup:256},{title:`maotoumao /

      MusicFree`,owner:"maotoumao",name:"MusicFree",avatar:"https://avatars.githubusercontent.com/u/31655147?s=40&v=4",path:"/maotoumao/MusicFree",ourl:"https://github.com/maotoumao",url:"https://github.com/maotoumao/MusicFree",description:"",language:"TypeScript",stars:26792,forks:1924,starup:874},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",ourl:"https://github.com/mlc-ai",url:"https://github.com/mlc-ai/web-llm",description:"",language:"TypeScript",stars:19086,forks:1377,starup:571},{title:`advaitpaliwal /

      feynman`,owner:"advaitpaliwal",name:"feynman",avatar:"https://avatars.githubusercontent.com/u/66044327?s=40&v=4",path:"/advaitpaliwal/feynman",ourl:"https://github.com/advaitpaliwal",url:"https://github.com/advaitpaliwal/feynman",description:"",language:"TypeScript",stars:9444,forks:1066,starup:906},{title:`vercel-labs /

      portless`,owner:"vercel-labs",name:"portless",avatar:"https://avatars.githubusercontent.com/u/366502?s=40&v=4",path:"/vercel-labs/portless",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/portless",description:"",language:"TypeScript",stars:12403,forks:412,starup:2080},{title:`apify /

      apify-mcp-server`,owner:"apify",name:"apify-mcp-server",avatar:"https://avatars.githubusercontent.com/u/19406805?s=40&v=4",path:"/apify/apify-mcp-server",ourl:"https://github.com/apify",url:"https://github.com/apify/apify-mcp-server",description:"",language:"TypeScript",stars:6780,forks:261,starup:3552},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/1715019?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"TypeScript",stars:43509,forks:4046,starup:567},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect",description:"",language:"TypeScript",stars:15971,forks:736,starup:770}],"Vue-daily":[{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:465,forks:84,starup:47},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:338,forks:40,starup:10},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40554,forks:5400,starup:16},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33426,forks:8957,starup:14},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:440,forks:63589,starup:1},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10233,forks:884,starup:1},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28898,forks:3316,starup:18},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2247,forks:264,starup:6},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1603,forks:128,starup:3},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Go",stars:460,forks:67,starup:12},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2724,forks:187,starup:6},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"TypeScript",stars:3211,forks:1483,starup:3},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1239,forks:246,starup:0},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5868,forks:1108,starup:6},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9322,forks:1769,starup:4},{title:`bruhnn /

      BD2ModManager`,owner:"bruhnn",name:"BD2ModManager",avatar:"https://avatars.githubusercontent.com/u/71610574?s=40&v=4",path:"/bruhnn/BD2ModManager",ourl:"https://github.com/bruhnn",url:"https://github.com/bruhnn/BD2ModManager",description:"",language:"Vue",stars:359,forks:20,starup:0},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1659,forks:636,starup:2},{title:`ljxi /

      Cloudflare-R2-oss`,owner:"ljxi",name:"Cloudflare-R2-oss",avatar:"https://avatars.githubusercontent.com/u/153080750?s=40&v=4",path:"/ljxi/Cloudflare-R2-oss",ourl:"https://github.com/ljxi",url:"https://github.com/ljxi/Cloudflare-R2-oss",description:"",language:"Vue",stars:518,forks:1702,starup:0},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3686,forks:556,starup:4}],"Vue-weekly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:9907,forks:1180,starup:314},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28898,forks:3316,starup:63},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9322,forks:1769,starup:28},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:338,forks:40,starup:42},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:465,forks:84,starup:74},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Go",stars:460,forks:67,starup:83},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3237,forks:397,starup:101},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:440,forks:63589,starup:5},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2691,forks:437,starup:18},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2259,forks:145,starup:175},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16680,forks:1356,starup:81},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"TypeScript",stars:3211,forks:1483,starup:23},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33426,forks:8957,starup:72},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11740,forks:1873,starup:12},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10233,forks:884,starup:15},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2247,forks:264,starup:39},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40554,forks:5400,starup:103},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90193,forks:30314,starup:15},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21613,forks:2341,starup:25},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:6962,forks:339,starup:14},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:7110,forks:5215,starup:28}],"Vue-monthly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:9907,forks:1180,starup:1017},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21899,forks:1510,starup:339},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28898,forks:3316,starup:200},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33274,forks:4675,starup:212},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2724,forks:187,starup:423},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33426,forks:8957,starup:398},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:440,forks:63589,starup:15},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:1005,forks:120,starup:185},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:2259,forks:145,starup:452},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2691,forks:437,starup:67},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:338,forks:40,starup:145},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5868,forks:1108,starup:163},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3237,forks:397,starup:427},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3686,forks:556,starup:188},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90193,forks:30314,starup:84},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Go",stars:460,forks:67,starup:187},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:864,forks:82,starup:77},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7712,forks:1041,starup:168},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3371,forks:934,starup:71},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:23090,forks:1123,starup:644},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21613,forks:2341,starup:95}]},gt=x({__name:"index",setup(k){const{view:s,dateRange:o,language:r,color:i}=G(),c=$(()=>b(X[`${r.value}-${o.value}`]));A("color",i),A("data",c);function b(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=D,m=B,g=I,d=z,t=F,e=L,y=R,w=Y,P=Q;return l(),_("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>T(r)?r.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>T(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(U,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(s)==="list"?(l(),f(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(l(),f(y,{key:1,"has-starup":""})):h(s)==="chart"?(l(),f(w,{key:2})):(l(),f(P,{key:3,data:h(c)},null,8,["data"]))]),_:1})])}}});export{gt as default};
