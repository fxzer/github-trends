import J from"./DTXL8o2b.js";import G from"./DukXPbYI.js";import M from"./2a2U7A0g.js";import R from"./2FdJJK7V.js";import I from"./B266vymV.js";import O from"./CCl6G4VS.js";import F from"./D8tP_pk8.js";import{d as z}from"./KQwPfV-1.js";import{s as H,a as A,b as P,u as C,i as D,c as B}from"./BNixg90p.js";import{i as x,p as E,a5 as j,D as l,f as V,w as L,S as N,h as v,a6 as T,T as W,q as S,U as h,d as k,a as Y,H as _}from"./CF64OsUs.js";import"./DbWwwxLT.js";import"./p2-M2djV.js";import"./r5gjMzPo.js";import"./BzHzI3oS.js";import"./CNKjp3qR.js";const $=x({__name:"Chart",setup(f){const r=E("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),s=A("趋势仓库总指标排行榜",o);function u(i){const a=z(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:c}=P(s,C);j(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(l(),V("div",{ref_key:"chartRef",ref:c,style:L({height:b})},null,4))}}),Q=Object.assign($,{__name:"TrendChart"}),U=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=N(r),u=A("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:c}=P(u,C);function b(a){const n=z(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:D(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}j(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(l(),V("div",{ref_key:"chartRef",ref:c,style:L({height:i})},null,4))}}),K=Object.assign(U,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:115532,forks:12118,starup:788},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:4532,forks:418,starup:50},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:1132,forks:227,starup:5},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:54284,forks:10945,starup:53},{title:`tiagozip /

      cap`,owner:"tiagozip",name:"cap",avatar:"https://avatars.githubusercontent.com/u/70700766?s=40&v=4",path:"/tiagozip/cap",ourl:"https://github.com/tiagozip",url:"https://github.com/tiagozip/cap",description:"",language:"JavaScript",stars:8332,forks:650,starup:32},{title:`PenglongHuang /

      chinese-novelist-skill`,owner:"PenglongHuang",name:"chinese-novelist-skill",avatar:"https://avatars.githubusercontent.com/u/26277039?s=40&v=4",path:"/PenglongHuang/chinese-novelist-skill",ourl:"https://github.com/PenglongHuang",url:"https://github.com/PenglongHuang/chinese-novelist-skill",description:"",language:"JavaScript",stars:4785,forks:649,starup:67},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:5136,forks:1642,starup:29},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:34014,forks:6473,starup:263},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:37402,forks:6892,starup:21},{title:`chuspeeism /

      dashi-ppt-skill`,owner:"chuspeeism",name:"dashi-ppt-skill",avatar:"https://avatars.githubusercontent.com/u/22310591?s=40&v=4",path:"/chuspeeism/dashi-ppt-skill",ourl:"https://github.com/chuspeeism",url:"https://github.com/chuspeeism/dashi-ppt-skill",description:"",language:"JavaScript",stars:10600,forks:901,starup:47},{title:`fishjar /

      kiss-translator`,owner:"fishjar",name:"kiss-translator",avatar:"https://avatars.githubusercontent.com/u/1157624?s=40&v=4",path:"/fishjar/kiss-translator",ourl:"https://github.com/fishjar",url:"https://github.com/fishjar/kiss-translator",description:"",language:"JavaScript",stars:13286,forks:678,starup:19}],"JavaScript-weekly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:69820,forks:4623,starup:10967},{title:`ConardLi /

      garden-skills`,owner:"ConardLi",name:"garden-skills",avatar:"https://avatars.githubusercontent.com/u/30708545?s=40&v=4",path:"/ConardLi/garden-skills",ourl:"https://github.com/ConardLi",url:"https://github.com/ConardLi/garden-skills",description:"",language:"JavaScript",stars:14929,forks:1719,starup:1261},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:34014,forks:6473,starup:1789},{title:`DeanChensj /

      jiangshan-map`,owner:"DeanChensj",name:"jiangshan-map",avatar:"https://avatars.githubusercontent.com/u/9414763?s=40&v=4",path:"/DeanChensj/jiangshan-map",ourl:"https://github.com/DeanChensj",url:"https://github.com/DeanChensj/jiangshan-map",description:"",language:"JavaScript",stars:5376,forks:630,starup:1416},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:59669,forks:8712,starup:1322},{title:`Leaflet /

      Leaflet`,owner:"Leaflet",name:"Leaflet",avatar:"https://avatars.githubusercontent.com/u/25395?s=40&v=4",path:"/Leaflet/Leaflet",ourl:"https://github.com/Leaflet",url:"https://github.com/Leaflet/Leaflet",description:"",language:"JavaScript",stars:45908,forks:6217,starup:93},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:188737,forks:10489,starup:4859},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:252560,forks:52287,starup:1084},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:12883,forks:1535,starup:763},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:113228,forks:7623,starup:3588},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:41037,forks:5339,starup:289}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:69820,forks:4623,starup:41811},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:113228,forks:7623,starup:19249},{title:`rorygallagher2024 /

      glasshouse`,owner:"rorygallagher2024",name:"glasshouse",avatar:"https://avatars.githubusercontent.com/u/167408991?s=40&v=4",path:"/rorygallagher2024/glasshouse",ourl:"https://github.com/rorygallagher2024",url:"https://github.com/rorygallagher2024/glasshouse",description:"",language:"JavaScript",stars:2056,forks:125,starup:1486},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:22517,forks:1275,starup:5474},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:4227,forks:387,starup:2469},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:118131,forks:36945,starup:1997},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:39348,forks:2833,starup:18213},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:20888,forks:2808,starup:11693},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:12883,forks:1535,starup:3164},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"JavaScript",stars:33856,forks:2323,starup:7742},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:301025,forks:44414,starup:25762},{title:`algorithm-visualizer /

      algorithm-visualizer`,owner:"algorithm-visualizer",name:"algorithm-visualizer",avatar:"https://avatars.githubusercontent.com/u/1618732?s=40&v=4",path:"/algorithm-visualizer/algorithm-visualizer",ourl:"https://github.com/algorithm-visualizer",url:"https://github.com/algorithm-visualizer/algorithm-visualizer",description:"",language:"JavaScript",stars:49477,forks:7658,starup:659},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:252560,forks:52287,starup:3363}],"TypeScript-daily":[{title:`meta /

      astryx`,owner:"meta",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/meta/astryx",ourl:"https://github.com/meta",url:"https://github.com/meta/astryx",description:"",language:"TypeScript",stars:24104,forks:1882,starup:2842},{title:`GoogleChrome /

      modern-web-guidance-src`,owner:"GoogleChrome",name:"modern-web-guidance-src",avatar:"https://avatars.githubusercontent.com/u/39191?s=40&v=4",path:"/GoogleChrome/modern-web-guidance-src",ourl:"https://github.com/GoogleChrome",url:"https://github.com/GoogleChrome/modern-web-guidance-src",description:"",language:"TypeScript",stars:1400,forks:126,starup:133},{title:`openai /

      codex-security`,owner:"openai",name:"codex-security",avatar:"https://avatars.githubusercontent.com/u/269034524?s=40&v=4",path:"/openai/codex-security",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-security",description:"",language:"TypeScript",stars:11388,forks:914,starup:20},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:6680,forks:544,starup:756},{title:`backnotprop /

      plannotator`,owner:"backnotprop",name:"plannotator",avatar:"https://avatars.githubusercontent.com/u/7244317?s=40&v=4",path:"/backnotprop/plannotator",ourl:"https://github.com/backnotprop",url:"https://github.com/backnotprop/plannotator",description:"",language:"TypeScript",stars:10028,forks:758,starup:51},{title:`WhiteTowerAI /

      ohmygame`,owner:"WhiteTowerAI",name:"ohmygame",avatar:"https://avatars.githubusercontent.com/u/57213566?s=40&v=4",path:"/WhiteTowerAI/ohmygame",ourl:"https://github.com/WhiteTowerAI",url:"https://github.com/WhiteTowerAI/ohmygame",description:"",language:"TypeScript",stars:2074,forks:261,starup:170},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:8734,forks:1054,starup:12},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/118497?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:8769,forks:1335,starup:30},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:32614,forks:4853,starup:462},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:24382,forks:31098,starup:204},{title:`nab138 /

      iloader`,owner:"nab138",name:"iloader",avatar:"https://avatars.githubusercontent.com/u/56705177?s=40&v=4",path:"/nab138/iloader",ourl:"https://github.com/nab138",url:"https://github.com/nab138/iloader",description:"",language:"TypeScript",stars:4765,forks:365,starup:76},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:23168,forks:1959,starup:128},{title:`NapNeko /

      NapCatQQ`,owner:"NapNeko",name:"NapCatQQ",avatar:"https://avatars.githubusercontent.com/u/61873808?s=40&v=4",path:"/NapNeko/NapCatQQ",ourl:"https://github.com/NapNeko",url:"https://github.com/NapNeko/NapCatQQ",description:"",language:"TypeScript",stars:12661,forks:1671,starup:141},{title:`OpenCTI-Platform /

      opencti`,owner:"OpenCTI-Platform",name:"opencti",avatar:"https://avatars.githubusercontent.com/u/1334279?s=40&v=4",path:"/OpenCTI-Platform/opencti",ourl:"https://github.com/OpenCTI-Platform",url:"https://github.com/OpenCTI-Platform/opencti",description:"",language:"TypeScript",stars:10329,forks:1507,starup:40}],"TypeScript-weekly":[{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:20977,forks:2918,starup:8951},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:56324,forks:10411,starup:11979},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:141171,forks:20835,starup:2411},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:84970,forks:16231,starup:1139},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:38651,forks:4400,starup:932},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:116027,forks:10063,starup:4473},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:32614,forks:4853,starup:1126},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",ourl:"https://github.com/tldraw",url:"https://github.com/tldraw/tldraw",description:"",language:"TypeScript",stars:51461,forks:3620,starup:360},{title:`ParadevAI /

      Paradev`,owner:"ParadevAI",name:"Paradev",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/ParadevAI/Paradev",ourl:"https://github.com/ParadevAI",url:"https://github.com/ParadevAI/Paradev",description:"",language:"TypeScript",stars:16211,forks:1453,starup:340},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83935,forks:9744,starup:405},{title:`meta /

      astryx`,owner:"meta",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/meta/astryx",ourl:"https://github.com/meta",url:"https://github.com/meta/astryx",description:"",language:"TypeScript",stars:24104,forks:1882,starup:8384},{title:`getpaseo /

      paseo`,owner:"getpaseo",name:"paseo",avatar:"https://avatars.githubusercontent.com/u/711886?s=40&v=4",path:"/getpaseo/paseo",ourl:"https://github.com/getpaseo",url:"https://github.com/getpaseo/paseo",description:"",language:"TypeScript",stars:23783,forks:2917,starup:815},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:6680,forks:544,starup:2290},{title:`liguobao /

      ds-harness-remote`,owner:"liguobao",name:"ds-harness-remote",avatar:"https://avatars.githubusercontent.com/u/10910802?s=40&v=4",path:"/liguobao/ds-harness-remote",ourl:"https://github.com/liguobao",url:"https://github.com/liguobao/ds-harness-remote",description:"",language:"TypeScript",stars:2596,forks:194,starup:968}],"TypeScript-monthly":[{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:451363,forks:111057,starup:389832},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:116027,forks:10063,starup:17223},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:56324,forks:10411,starup:28609},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:82528,forks:7630,starup:22380},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:6680,forks:544,starup:5300},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:72385,forks:6038,starup:9413},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:50497,forks:7011,starup:17591},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:38930,forks:3401,starup:5347},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:226027,forks:30538,starup:14930},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:121923,forks:7735,starup:32943},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:7079,forks:634,starup:1594},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:41337,forks:7879,starup:4441},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:81466,forks:9594,starup:7574},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:7892,forks:1431,starup:4232},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright",description:"",language:"TypeScript",stars:99840,forks:6845,starup:2528},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:16005,forks:1680,starup:5344},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83935,forks:9744,starup:1092},{title:`chthollyphile /

      folia-major`,owner:"chthollyphile",name:"folia-major",avatar:"https://avatars.githubusercontent.com/u/30263107?s=40&v=4",path:"/chthollyphile/folia-major",ourl:"https://github.com/chthollyphile",url:"https://github.com/chthollyphile/folia-major",description:"",language:"TypeScript",stars:12339,forks:1360,starup:8053},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108772,forks:14930,starup:2039},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:17549,forks:3416,starup:13195},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:21419,forks:69491,starup:752}],"Vue-daily":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17523,forks:1448,starup:70},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41208,forks:5577,starup:28},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3137,forks:232,starup:43},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6949,forks:583,starup:5},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7836,forks:1065,starup:11},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21719,forks:2344,starup:3},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1276,forks:96,starup:301},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9484,forks:1785,starup:6},{title:`freqtrade /

      frequi`,owner:"freqtrade",name:"frequi",avatar:"https://avatars.githubusercontent.com/u/5024695?s=40&v=4",path:"/freqtrade/frequi",ourl:"https://github.com/freqtrade",url:"https://github.com/freqtrade/frequi",description:"",language:"Vue",stars:1117,forks:492,starup:1},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1253,forks:255,starup:0},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3950,forks:1597,starup:5},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2538,forks:302,starup:2},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3926,forks:590,starup:4},{title:`build-admin /

      buildadmin`,owner:"build-admin",name:"buildadmin",avatar:"https://avatars.githubusercontent.com/u/106626227?s=40&v=4",path:"/build-admin/buildadmin",ourl:"https://github.com/build-admin",url:"https://github.com/build-admin/buildadmin",description:"",language:"Vue",stars:2409,forks:291,starup:0},{title:`YuehaiTeam /

      cocogoat`,owner:"YuehaiTeam",name:"cocogoat",avatar:"https://avatars.githubusercontent.com/u/7547189?s=40&v=4",path:"/YuehaiTeam/cocogoat",ourl:"https://github.com/YuehaiTeam",url:"https://github.com/YuehaiTeam/cocogoat",description:"",language:"Vue",stars:1165,forks:80,starup:3},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3876,forks:190,starup:0},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:3270,forks:524,starup:6}],"Vue-weekly":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17523,forks:1448,starup:327},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:11762,forks:1419,starup:579},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33621,forks:4675,starup:128},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:478,forks:74804,starup:2},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22412,forks:1585,starup:111},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3876,forks:190,starup:8},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1276,forks:96,starup:317},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3950,forks:1597,starup:48},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1890,forks:144,starup:36},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6949,forks:583,starup:28},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3495,forks:1011,starup:21},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:688,forks:357,starup:1},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26971,forks:1966,starup:79},{title:`freqtrade /

      frequi`,owner:"freqtrade",name:"frequi",avatar:"https://avatars.githubusercontent.com/u/5024695?s=40&v=4",path:"/freqtrade/frequi",ourl:"https://github.com/freqtrade",url:"https://github.com/freqtrade/frequi",description:"",language:"Vue",stars:1117,forks:492,starup:7},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10324,forks:902,starup:18},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7836,forks:1065,starup:38},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90105,forks:30205,starup:22},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41208,forks:5577,starup:111},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3137,forks:232,starup:99}],"Vue-monthly":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17523,forks:1448,starup:651},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3893,forks:293,starup:1118},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:11762,forks:1419,starup:1354},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33621,forks:4675,starup:383},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3137,forks:232,starup:443},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22412,forks:1585,starup:446},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1890,forks:144,starup:158},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:25027,forks:3041,starup:696},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90105,forks:30205,starup:87},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9484,forks:1785,starup:122},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:1276,forks:96,starup:388},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7046,forks:356,starup:83},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:478,forks:74804,starup:22},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6949,forks:583,starup:104},{title:`mainsail-crew /

      mainsail`,owner:"mainsail-crew",name:"mainsail",avatar:"https://avatars.githubusercontent.com/u/8167632?s=40&v=4",path:"/mainsail-crew/mainsail",ourl:"https://github.com/mainsail-crew",url:"https://github.com/mainsail-crew/mainsail",description:"",language:"Vue",stars:2246,forks:618,starup:26},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41208,forks:5577,starup:478},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14452,forks:1785,starup:31},{title:`build-admin /

      buildadmin`,owner:"build-admin",name:"buildadmin",avatar:"https://avatars.githubusercontent.com/u/106626227?s=40&v=4",path:"/build-admin/buildadmin",ourl:"https://github.com/build-admin",url:"https://github.com/build-admin/buildadmin",description:"",language:"Vue",stars:2409,forks:291,starup:23},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:53976,forks:14354,starup:28}]},mt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=B(),c=Y(()=>b(X[`${s.value}-${o.value}`]));_("color",u),_("data",c);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=J,g=G,m=M,d=R,t=I,e=O,y=F,w=Q,q=K;return l(),V("div",null,[v(d,null,{default:T(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>S(s)?s.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>S(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(W,{name:"fade-top",mode:"out-in"},{default:T(()=>[h(r)==="list"?(l(),k(e,{key:0},{icons:T(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(l(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(l(),k(w,{key:2})):(l(),k(q,{key:3,data:h(c)},null,8,["data"]))]),_:1})])}}});export{mt as default};
