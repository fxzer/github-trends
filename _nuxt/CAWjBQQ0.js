import R from"./BdJr0AFH.js";import O from"./DIa4KKev.js";import I from"./CigSXggp.js";import P from"./kQHXnnM9.js";import L from"./VgKgNfAn.js";import D from"./i5Ba9HZD.js";import q from"./BWGaRs6-.js";import{d as V}from"./KQwPfV-1.js";import{s as G,a as J,b as A,u as j,i as E,c as W}from"./B5un-hvf.js";import{i as T,p as N,a5 as z,D as h,f as C,w as B,S as F,h as b,a6 as S,T as $,q as x,U as c,d as k,a as Z,H as _}from"./BvNJNr8f.js";import"./CPZEfZlg.js";import"./p2-M2djV.js";import"./CjPfD-sF.js";import"./CdxT4tvV.js";import"./BQH3dlMp.js";const Y=T({__name:"Chart",setup(f){const r=N("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(G),s=J("趋势仓库总指标排行榜",o);function i(u){const a=V(u);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=A(s,j);z(r,()=>{i(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(u,a)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:B({height:v})},null,4))}}),H=Object.assign(Y,{__name:"TrendChart"}),K=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=F(r),i=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=A(i,j);function v(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));i.value.series[0].data=d,i.value.yAxis.data=m}z(o,()=>{v(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:B({height:u})},null,4))}}),Q=Object.assign(K,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:51786,forks:3047,starup:847},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:5530,forks:272,starup:1195},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:25008,forks:4366,starup:141},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:234306,forks:35704,starup:458},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36834,forks:2891,starup:16},{title:`faroukbmiled /

      RyukGram`,owner:"faroukbmiled",name:"RyukGram",avatar:"https://avatars.githubusercontent.com/u/51106560?s=40&v=4",path:"/faroukbmiled/RyukGram",ourl:"https://github.com/faroukbmiled",url:"https://github.com/faroukbmiled/RyukGram",description:"",language:"JavaScript",stars:371,forks:149,starup:7},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:118544,forks:36199,starup:147},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:61895,forks:12183,starup:185},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10843,forks:25510,starup:13},{title:`zarazhangrui /

      follow-builders`,owner:"zarazhangrui",name:"follow-builders",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/zarazhangrui/follow-builders",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/follow-builders",description:"",language:"JavaScript",stars:5996,forks:771,starup:10},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"JavaScript",stars:13804,forks:27438,starup:8},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:43618,forks:1659,starup:29},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:42003,forks:6618,starup:162},{title:`Neet-Nestor /

      Telegram-Media-Downloader`,owner:"Neet-Nestor",name:"Telegram-Media-Downloader",avatar:"https://avatars.githubusercontent.com/u/23090573?s=40&v=4",path:"/Neet-Nestor/Telegram-Media-Downloader",ourl:"https://github.com/Neet-Nestor",url:"https://github.com/Neet-Nestor/Telegram-Media-Downloader",description:"",language:"JavaScript",stars:5069,forks:498,starup:15},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:31236,forks:5900,starup:52},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:4484,forks:688,starup:13},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:56360,forks:5776,starup:41}],"JavaScript-weekly":[{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:11037,forks:1193,starup:2262},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5296,forks:2297,starup:793},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:572,forks:116,starup:72},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:5530,forks:272,starup:4812},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:29600,forks:1739,starup:619},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:10818,forks:1712,starup:280},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12575,forks:1433,starup:180},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:51786,forks:3047,starup:3140},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:35460,forks:4064,starup:86},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:13737,forks:1078,starup:120},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",ourl:"https://github.com/swagger-api",url:"https://github.com/swagger-api/swagger-ui",description:"",language:"JavaScript",stars:28938,forks:9266,starup:36},{title:`musistudio /

      claude-code-router`,owner:"musistudio",name:"claude-code-router",avatar:"https://avatars.githubusercontent.com/u/21162426?s=40&v=4",path:"/musistudio/claude-code-router",ourl:"https://github.com/musistudio",url:"https://github.com/musistudio/claude-code-router",description:"",language:"JavaScript",stars:36233,forks:3025,starup:307},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:48795,forks:1630,starup:227},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:45932,forks:2726,starup:196},{title:`hzm0321 /

      real-time-fund`,owner:"hzm0321",name:"real-time-fund",avatar:"https://avatars.githubusercontent.com/u/35420713?s=40&v=4",path:"/hzm0321/real-time-fund",ourl:"https://github.com/hzm0321",url:"https://github.com/hzm0321/real-time-fund",description:"",language:"JavaScript",stars:1595,forks:492,starup:74},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:2647,forks:243,starup:153},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109167,forks:11784,starup:68},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:8831,forks:1108,starup:292},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:14706,forks:1314,starup:82}],"JavaScript-monthly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:61013,forks:9966,starup:14761},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:30153,forks:1978,starup:8576},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:2249,forks:194,starup:1245},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:93624,forks:5345,starup:16713},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:51786,forks:3047,starup:9830},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:68369,forks:4724,starup:16696},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:11037,forks:1193,starup:3769},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52141,forks:4896,starup:358},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:4919,forks:706,starup:891},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36834,forks:2891,starup:593},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:52917,forks:10661,starup:896},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:572,forks:116,starup:184},{title:`webtorrent /

      webtorrent`,owner:"webtorrent",name:"webtorrent",avatar:"https://avatars.githubusercontent.com/u/121766?s=40&v=4",path:"/webtorrent/webtorrent",ourl:"https://github.com/webtorrent",url:"https://github.com/webtorrent/webtorrent",description:"",language:"JavaScript",stars:31292,forks:2909,starup:506},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:3067,forks:386,starup:1175},{title:`ryanmcdermott /

      clean-code-javascript`,owner:"ryanmcdermott",name:"clean-code-javascript",avatar:"https://avatars.githubusercontent.com/u/5114666?s=40&v=4",path:"/ryanmcdermott/clean-code-javascript",ourl:"https://github.com/ryanmcdermott",url:"https://github.com/ryanmcdermott/clean-code-javascript",description:"",language:"JavaScript",stars:94751,forks:12540,starup:492},{title:`fbsamples /

      whatsapp-business-jaspers-market`,owner:"fbsamples",name:"whatsapp-business-jaspers-market",avatar:"https://avatars.githubusercontent.com/u/6422482?s=40&v=4",path:"/fbsamples/whatsapp-business-jaspers-market",ourl:"https://github.com/fbsamples",url:"https://github.com/fbsamples/whatsapp-business-jaspers-market",description:"",language:"JavaScript",stars:579,forks:475,starup:175},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:141167,forks:31552,starup:1947}],"TypeScript-daily":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:44251,forks:4413,starup:572},{title:`opengeos /

      GeoLibre`,owner:"opengeos",name:"GeoLibre",avatar:"https://avatars.githubusercontent.com/u/5016453?s=40&v=4",path:"/opengeos/GeoLibre",ourl:"https://github.com/opengeos",url:"https://github.com/opengeos/GeoLibre",description:"",language:"TypeScript",stars:2887,forks:365,starup:420},{title:`vudovn /

      ag-kit`,owner:"vudovn",name:"ag-kit",avatar:"https://avatars.githubusercontent.com/u/116963762?s=40&v=4",path:"/vudovn/ag-kit",ourl:"https://github.com/vudovn",url:"https://github.com/vudovn/ag-kit",description:"",language:"TypeScript",stars:8019,forks:1512,starup:14},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:18142,forks:2487,starup:412},{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:4171,forks:393,starup:70},{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:6290,forks:551,starup:674},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:66308,forks:7899,starup:172},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:17327,forks:1815,starup:88},{title:`777genius /

      agent-teams-ai`,owner:"777genius",name:"agent-teams-ai",avatar:"https://avatars.githubusercontent.com/u/13103045?s=40&v=4",path:"/777genius/agent-teams-ai",ourl:"https://github.com/777genius",url:"https://github.com/777genius/agent-teams-ai",description:"",language:"TypeScript",stars:1745,forks:303,starup:46},{title:`Augani /

      openreel-video`,owner:"Augani",name:"openreel-video",avatar:"https://avatars.githubusercontent.com/u/13237525?s=40&v=4",path:"/Augani/openreel-video",ourl:"https://github.com/Augani",url:"https://github.com/Augani/openreel-video",description:"",language:"TypeScript",stars:4576,forks:629,starup:23},{title:`elie222 /

      inbox-zero`,owner:"elie222",name:"inbox-zero",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/inbox-zero",ourl:"https://github.com/elie222",url:"https://github.com/elie222/inbox-zero",description:"",language:"TypeScript",stars:11729,forks:1450,starup:11},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",ourl:"https://github.com/immich-app",url:"https://github.com/immich-app/immich",description:"",language:"TypeScript",stars:109010,forks:6364,starup:111},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:34995,forks:3509,starup:88},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",ourl:"https://github.com/hydralauncher",url:"https://github.com/hydralauncher/hydra",description:"",language:"TypeScript",stars:16474,forks:3949,starup:11},{title:`google-labs-code /

      design.md`,owner:"google-labs-code",name:"design.md",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/design.md",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/design.md",description:"",language:"TypeScript",stars:26508,forks:2136,starup:42},{title:`EvanZhouDev /

      openai-oauth`,owner:"EvanZhouDev",name:"openai-oauth",avatar:"https://avatars.githubusercontent.com/u/62189478?s=40&v=4",path:"/EvanZhouDev/openai-oauth",ourl:"https://github.com/EvanZhouDev",url:"https://github.com/EvanZhouDev/openai-oauth",description:"",language:"TypeScript",stars:1011,forks:178,starup:43},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:384379,forks:80753,starup:188},{title:`lightningpixel /

      modly`,owner:"lightningpixel",name:"modly",avatar:"https://avatars.githubusercontent.com/u/63157773?s=40&v=4",path:"/lightningpixel/modly",ourl:"https://github.com/lightningpixel",url:"https://github.com/lightningpixel/modly",description:"",language:"TypeScript",stars:4734,forks:515,starup:102},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/234213?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:12026,forks:942,starup:14},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:17186,forks:2482,starup:88}],"TypeScript-weekly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:75497,forks:11314,starup:13231},{title:`oblien /

      openship`,owner:"oblien",name:"openship",avatar:"https://avatars.githubusercontent.com/u/162022179?s=40&v=4",path:"/oblien/openship",ourl:"https://github.com/oblien",url:"https://github.com/oblien/openship",description:"",language:"TypeScript",stars:9040,forks:735,starup:4911},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:3038,forks:400,starup:1676},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:32372,forks:4196,starup:11057},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:79218,forks:9731,starup:5751},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5426,forks:798,starup:1263},{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:6290,forks:551,starup:2523},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:15325,forks:3348,starup:1050},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8776,forks:976,starup:3015},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:31085,forks:2201,starup:7546},{title:`KnockOutEZ /

      wigolo`,owner:"KnockOutEZ",name:"wigolo",avatar:"https://avatars.githubusercontent.com/u/70368615?s=40&v=4",path:"/KnockOutEZ/wigolo",ourl:"https://github.com/KnockOutEZ",url:"https://github.com/KnockOutEZ/wigolo",description:"",language:"TypeScript",stars:3769,forks:249,starup:1478},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:11074,forks:7469,starup:507},{title:`microsoft /

      Ontology-Playground`,owner:"microsoft",name:"Ontology-Playground",avatar:"https://avatars.githubusercontent.com/u/30834?s=40&v=4",path:"/microsoft/Ontology-Playground",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Ontology-Playground",description:"",language:"TypeScript",stars:2263,forks:280,starup:603},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:47094,forks:5778,starup:3059},{title:`mattpocock /

      dictionary-of-ai-coding`,owner:"mattpocock",name:"dictionary-of-ai-coding",avatar:"https://avatars.githubusercontent.com/u/28293365?s=40&v=4",path:"/mattpocock/dictionary-of-ai-coding",ourl:"https://github.com/mattpocock",url:"https://github.com/mattpocock/dictionary-of-ai-coding",description:"",language:"TypeScript",stars:3216,forks:383,starup:216},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:26382,forks:2727,starup:250},{title:`C4illin /

      ConvertX`,owner:"C4illin",name:"ConvertX",avatar:"https://avatars.githubusercontent.com/u/20753603?s=40&v=4",path:"/C4illin/ConvertX",ourl:"https://github.com/C4illin",url:"https://github.com/C4illin/ConvertX",description:"",language:"TypeScript",stars:18129,forks:1016,starup:877},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect",description:"",language:"TypeScript",stars:15028,forks:637,starup:76},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5195,forks:346,starup:1256},{title:`AdventDevInc /

      kudu`,owner:"AdventDevInc",name:"kudu",avatar:"https://avatars.githubusercontent.com/u/182394?s=40&v=4",path:"/AdventDevInc/kudu",ourl:"https://github.com/AdventDevInc",url:"https://github.com/AdventDevInc/kudu",description:"",language:"TypeScript",stars:1759,forks:141,starup:1096}],"TypeScript-monthly":[{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:32372,forks:4196,starup:24936},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:31085,forks:2201,starup:22573},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:75497,forks:11314,starup:15236},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8902,forks:1011,starup:2807},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:28023,forks:2465,starup:7926},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:79329,forks:7913,starup:19436},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8776,forks:976,starup:5270},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:47094,forks:5778,starup:12510},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:6629,forks:291,starup:3233},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5426,forks:798,starup:2533},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",ourl:"https://github.com/immich-app",url:"https://github.com/immich-app/immich",description:"",language:"TypeScript",stars:109010,forks:6364,starup:4670},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:15325,forks:3348,starup:2364},{title:`facebook /

      astryx`,owner:"facebook",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/facebook/astryx",ourl:"https://github.com/facebook",url:"https://github.com/facebook/astryx",description:"",language:"TypeScript",stars:10949,forks:862,starup:10532},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:7831,forks:959,starup:1728},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:30399,forks:4373,starup:8782},{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:6290,forks:551,starup:5819},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:119973,forks:9575,starup:2964},{title:`kunchenguid /

      gnhf`,owner:"kunchenguid",name:"gnhf",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/gnhf",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/gnhf",description:"",language:"TypeScript",stars:3433,forks:247,starup:984},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:4062,forks:1031,starup:1727},{title:`HenryNdubuaku /

      maths-cs-ai-compendium`,owner:"HenryNdubuaku",name:"maths-cs-ai-compendium",avatar:"https://avatars.githubusercontent.com/u/26547576?s=40&v=4",path:"/HenryNdubuaku/maths-cs-ai-compendium",ourl:"https://github.com/HenryNdubuaku",url:"https://github.com/HenryNdubuaku/maths-cs-ai-compendium",description:"",language:"TypeScript",stars:7164,forks:873,starup:2598},{title:`Chocobozzz /

      PeerTube`,owner:"Chocobozzz",name:"PeerTube",avatar:"https://avatars.githubusercontent.com/u/5180488?s=40&v=4",path:"/Chocobozzz/PeerTube",ourl:"https://github.com/Chocobozzz",url:"https://github.com/Chocobozzz/PeerTube",description:"",language:"TypeScript",stars:15216,forks:1839,starup:517},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:3038,forks:400,starup:2074}],"Vue-daily":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26016,forks:1912,starup:19},{title:`unovue /

      inspira-ui`,owner:"unovue",name:"inspira-ui",avatar:"https://avatars.githubusercontent.com/u/25490173?s=40&v=4",path:"/unovue/inspira-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/inspira-ui",description:"",language:"Vue",stars:4823,forks:323,starup:17},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:423,forks:54400,starup:1},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3758,forks:102,starup:7},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3871,forks:784,starup:12},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33085,forks:4678,starup:8},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",ourl:"https://github.com/BewlyBewly",url:"https://github.com/BewlyBewly/BewlyBewly",description:"",language:"Vue",stars:8858,forks:394,starup:3},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1680,forks:441,starup:8},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6681,forks:531,starup:5},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90244,forks:30388,starup:3},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39976,forks:5263,starup:19},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2035,forks:127,starup:10},{title:`WGDashboard /

      WGDashboard`,owner:"WGDashboard",name:"WGDashboard",avatar:"https://avatars.githubusercontent.com/u/25237201?s=40&v=4",path:"/WGDashboard/WGDashboard",ourl:"https://github.com/WGDashboard",url:"https://github.com/WGDashboard/WGDashboard",description:"",language:"Vue",stars:3671,forks:443,starup:2},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18887,forks:3921,starup:3},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:241,forks:28,starup:0},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1487,forks:119,starup:4},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28673,forks:3276,starup:4}],"Vue-weekly":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26016,forks:1912,starup:108},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22207,forks:1062,starup:254},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21537,forks:1457,starup:74},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9166,forks:2076,starup:62},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2651,forks:343,starup:118},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2965,forks:796,starup:76},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:423,forks:54400,starup:5},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33085,forks:4678,starup:43},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2035,forks:127,starup:87},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3022,forks:1272,starup:35},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39976,forks:5263,starup:113},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11673,forks:1878,starup:16},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:746,forks:194,starup:4},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1666,forks:451,starup:66},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3262,forks:894,starup:16},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28673,forks:3276,starup:41},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9215,forks:1764,starup:34},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3462,forks:515,starup:31},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21524,forks:2330,starup:45},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2945,forks:111,starup:38},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21598,forks:3898,starup:17}],"Vue-monthly":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26016,forks:1912,starup:525},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2035,forks:127,starup:292},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2651,forks:343,starup:468},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39976,forks:5263,starup:482},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2965,forks:796,starup:153},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3871,forks:784,starup:264},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:423,forks:54400,starup:22},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1666,forks:451,starup:107},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6976,forks:5008,starup:154},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3022,forks:1272,starup:141},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22207,forks:1062,starup:643},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14479,forks:1763,starup:35},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2198,forks:491,starup:141},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2613,forks:398,starup:60},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3088,forks:1421,starup:80},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1680,forks:441,starup:179},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90244,forks:30388,starup:96},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:753,forks:95,starup:126},{title:`x2rr /

      funds`,owner:"x2rr",name:"funds",avatar:"https://avatars.githubusercontent.com/u/23189213?s=40&v=4",path:"/x2rr/funds",ourl:"https://github.com/x2rr",url:"https://github.com/x2rr/funds",description:"",language:"Vue",stars:3191,forks:405,starup:97},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11505,forks:3097,starup:47},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:746,forks:194,starup:16},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3462,forks:515,starup:99}]},mt=T({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=W(),l=Z(()=>v(U[`${s.value}-${o.value}`]));_("color",i),_("data",l);function v(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=R,g=O,m=I,d=P,t=L,e=D,w=q,y=H,M=Q;return h(),C("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(y,{key:2})):(h(),k(M,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
