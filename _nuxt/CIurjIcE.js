import O from"./ptAIBKdZ.js";import R from"./he_-fZ3y.js";import L from"./C2Co1Hv7.js";import F from"./CQ6gdgbZ.js";import P from"./CRgVbLwe.js";import W from"./8e7YmQ-0.js";import I from"./DsakbOvM.js";import{d as j}from"./KQwPfV-1.js";import{s as q,a as V,b as M,u as z,i as E,c as Y}from"./D2hD9Rqb.js";import{i as C,p as $,a5 as J,D as h,f as T,w as B,S as D,h as b,a6 as S,T as K,q as x,U as c,d as k,a as Q,H as _}from"./U0ZXoG_g.js";import"./D-u9oq6D.js";import"./p2-M2djV.js";import"./nN3tZqlm.js";import"./C05U-UwB.js";import"./DITusaNz.js";const H=C({__name:"Chart",setup(f){const r=$("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),s=V("趋势仓库总指标排行榜",o);function i(u){const a=j(u);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=M(s,z);J(r,()=>{i(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(u,a)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:B({height:v})},null,4))}}),N=Object.assign(H,{__name:"TrendChart"}),Z=C({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=D(r),i=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=M(i,z);function v(a){const n=j(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));i.value.series[0].data=d,i.value.yAxis.data=m}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:B({height:u})},null,4))}}),G=Object.assign(Z,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:3771,forks:188,starup:986},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:233406,forks:35590,starup:377},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12548,forks:1427,starup:14},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:45890,forks:2720,starup:24},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:10401,forks:1137,starup:68},{title:`truelockmc /

      streambert`,owner:"truelockmc",name:"streambert",avatar:"https://avatars.githubusercontent.com/u/168660625?s=40&v=4",path:"/truelockmc/streambert",ourl:"https://github.com/truelockmc",url:"https://github.com/truelockmc/streambert",description:"",language:"JavaScript",stars:5862,forks:522,starup:12},{title:`BazedFrog /

      SongGeneration-Studio`,owner:"BazedFrog",name:"SongGeneration-Studio",avatar:"https://avatars.githubusercontent.com/u/168938748?s=40&v=4",path:"/BazedFrog/SongGeneration-Studio",ourl:"https://github.com/BazedFrog",url:"https://github.com/BazedFrog/SongGeneration-Studio",description:"",language:"JavaScript",stars:560,forks:88,starup:25},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:50196,forks:2960,starup:471},{title:`TechyCSR /

      OpenCluely`,owner:"TechyCSR",name:"OpenCluely",avatar:"https://avatars.githubusercontent.com/u/90786270?s=40&v=4",path:"/TechyCSR/OpenCluely",ourl:"https://github.com/TechyCSR",url:"https://github.com/TechyCSR/OpenCluely",description:"",language:"JavaScript",stars:486,forks:134,starup:57},{title:`MarSeventh /

      CloudFlare-ImgBed`,owner:"MarSeventh",name:"CloudFlare-ImgBed",avatar:"https://avatars.githubusercontent.com/u/108160987?s=40&v=4",path:"/MarSeventh/CloudFlare-ImgBed",ourl:"https://github.com/MarSeventh",url:"https://github.com/MarSeventh/CloudFlare-ImgBed",description:"",language:"JavaScript",stars:5897,forks:7423,starup:28},{title:`prateek-chaubey /

      YTPro`,owner:"prateek-chaubey",name:"YTPro",avatar:"https://avatars.githubusercontent.com/u/41151614?s=40&v=4",path:"/prateek-chaubey/YTPro",ourl:"https://github.com/prateek-chaubey",url:"https://github.com/prateek-chaubey/YTPro",description:"",language:"JavaScript",stars:2536,forks:201,starup:34},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:35439,forks:4061,starup:12},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:10136,forks:3438,starup:2},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:8704,forks:1101,starup:20},{title:`alam00000 /

      bentopdf`,owner:"alam00000",name:"bentopdf",avatar:"https://avatars.githubusercontent.com/u/50314772?s=40&v=4",path:"/alam00000/bentopdf",ourl:"https://github.com/alam00000",url:"https://github.com/alam00000/bentopdf",description:"",language:"JavaScript",stars:14393,forks:1191,starup:15},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:71493,forks:4807,starup:40},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:905,forks:115,starup:3},{title:`dataease /

      SQLBot`,owner:"dataease",name:"SQLBot",avatar:"https://avatars.githubusercontent.com/u/106045316?s=40&v=4",path:"/dataease/SQLBot",ourl:"https://github.com/dataease",url:"https://github.com/dataease/SQLBot",description:"",language:"JavaScript",stars:6487,forks:803,starup:4}],"JavaScript-weekly":[{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5233,forks:2271,starup:766},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:10401,forks:1137,starup:2125},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:564,forks:114,starup:79},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:3771,forks:188,starup:2810},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",ourl:"https://github.com/swagger-api",url:"https://github.com/swagger-api/swagger-ui",description:"",language:"JavaScript",stars:28938,forks:9266,starup:38},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12548,forks:1427,starup:174},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10817,forks:25359,starup:98},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:29445,forks:1731,starup:594},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:48710,forks:1626,starup:185},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2096,forks:565,starup:241},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:13705,forks:1074,starup:106},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:35439,forks:4061,starup:77},{title:`processing /

      p5.js`,owner:"processing",name:"p5.js",avatar:"https://avatars.githubusercontent.com/u/5315059?s=40&v=4",path:"/processing/p5.js",ourl:"https://github.com/processing",url:"https://github.com/processing/p5.js",description:"",language:"JavaScript",stars:23815,forks:3793,starup:21},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:4872,forks:697,starup:245},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:14689,forks:1314,starup:91},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:45890,forks:2720,starup:196},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:905,forks:115,starup:36},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2995,forks:382,starup:266}],"JavaScript-monthly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:60531,forks:9878,starup:14812},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:29946,forks:1937,starup:8517},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:2165,forks:188,starup:1285},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:93021,forks:5300,starup:16655},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:50196,forks:2960,starup:8911},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:67685,forks:4687,starup:17100},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36808,forks:2878,starup:608},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:4872,forks:697,starup:886},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:10401,forks:1137,starup:3491},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52137,forks:4880,starup:353},{title:`worldwonderer /

      oh-story-claudecode`,owner:"worldwonderer",name:"oh-story-claudecode",avatar:"https://avatars.githubusercontent.com/u/49583093?s=40&v=4",path:"/worldwonderer/oh-story-claudecode",ourl:"https://github.com/worldwonderer",url:"https://github.com/worldwonderer/oh-story-claudecode",description:"",language:"JavaScript",stars:4602,forks:710,starup:1580},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38192,forks:3099,starup:799},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:63846,forks:6998,starup:1872},{title:`webtorrent /

      webtorrent`,owner:"webtorrent",name:"webtorrent",avatar:"https://avatars.githubusercontent.com/u/121766?s=40&v=4",path:"/webtorrent/webtorrent",ourl:"https://github.com/webtorrent",url:"https://github.com/webtorrent/webtorrent",description:"",language:"JavaScript",stars:31293,forks:2908,starup:502},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87686,forks:5067,starup:1096},{title:`ryanmcdermott /

      clean-code-javascript`,owner:"ryanmcdermott",name:"clean-code-javascript",avatar:"https://avatars.githubusercontent.com/u/5114666?s=40&v=4",path:"/ryanmcdermott/clean-code-javascript",ourl:"https://github.com/ryanmcdermott",url:"https://github.com/ryanmcdermott/clean-code-javascript",description:"",language:"JavaScript",stars:94746,forks:12542,starup:485},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2995,forks:382,starup:1146}],"TypeScript-daily":[{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:5205,forks:492,starup:426},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:19329,forks:1363,starup:49},{title:`Anionex /

      banana-slides`,owner:"Anionex",name:"banana-slides",avatar:"https://avatars.githubusercontent.com/u/123177548?s=40&v=4",path:"/Anionex/banana-slides",ourl:"https://github.com/Anionex",url:"https://github.com/Anionex/banana-slides",description:"",language:"TypeScript",stars:15319,forks:1768,starup:44},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:30224,forks:3943,starup:1381},{title:`microsoft /

      inshellisense`,owner:"microsoft",name:"inshellisense",avatar:"https://avatars.githubusercontent.com/u/35637443?s=40&v=4",path:"/microsoft/inshellisense",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/inshellisense",description:"",language:"TypeScript",stars:10548,forks:245,starup:108},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",ourl:"https://github.com/n8n-io",url:"https://github.com/n8n-io/n8n",description:"",language:"TypeScript",stars:198028,forks:59632,starup:170},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:77667,forks:9562,starup:523},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:74290,forks:11153,starup:1041},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:14893,forks:3279,starup:202},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:2772,forks:374,starup:132},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:17189,forks:1792,starup:49},{title:`genkit-ai /

      genkit`,owner:"genkit-ai",name:"genkit",avatar:"https://avatars.githubusercontent.com/u/774654?s=40&v=4",path:"/genkit-ai/genkit",ourl:"https://github.com/genkit-ai",url:"https://github.com/genkit-ai/genkit",description:"",language:"TypeScript",stars:6287,forks:807,starup:6},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5157,forks:342,starup:222},{title:`MadsLorentzen /

      ai-job-search`,owner:"MadsLorentzen",name:"ai-job-search",avatar:"https://avatars.githubusercontent.com/u/50207393?s=40&v=4",path:"/MadsLorentzen/ai-job-search",ourl:"https://github.com/MadsLorentzen",url:"https://github.com/MadsLorentzen/ai-job-search",description:"",language:"TypeScript",stars:26925,forks:8796,starup:464},{title:`chaitin /

      MonkeyCode`,owner:"chaitin",name:"MonkeyCode",avatar:"https://avatars.githubusercontent.com/u/140062425?s=40&v=4",path:"/chaitin/MonkeyCode",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/MonkeyCode",description:"",language:"TypeScript",stars:3845,forks:506,starup:10},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:14567,forks:2253,starup:14},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:37682,forks:3555,starup:183}],"TypeScript-weekly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:74290,forks:11153,starup:12085},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:2772,forks:374,starup:1450},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:30224,forks:3943,starup:11147},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5089,forks:746,starup:1534},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:77667,forks:9562,starup:5167},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:29161,forks:2069,starup:7327},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8004,forks:878,starup:3439},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:46789,forks:5732,starup:4237},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:6460,forks:283,starup:1647},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:11025,forks:7421,starup:502},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:14893,forks:3279,starup:711},{title:`upstash /

      context7`,owner:"upstash",name:"context7",avatar:"https://avatars.githubusercontent.com/u/101020733?s=40&v=4",path:"/upstash/context7",ourl:"https://github.com/upstash",url:"https://github.com/upstash/context7",description:"",language:"TypeScript",stars:59755,forks:2863,starup:432},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:6355,forks:375,starup:1082},{title:`mattpocock /

      dictionary-of-ai-coding`,owner:"mattpocock",name:"dictionary-of-ai-coding",avatar:"https://avatars.githubusercontent.com/u/28293365?s=40&v=4",path:"/mattpocock/dictionary-of-ai-coding",ourl:"https://github.com/mattpocock",url:"https://github.com/mattpocock/dictionary-of-ai-coding",description:"",language:"TypeScript",stars:3165,forks:381,starup:250},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:24780,forks:1878,starup:398},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:26323,forks:2719,starup:263},{title:`KnockOutEZ /

      wigolo`,owner:"KnockOutEZ",name:"wigolo",avatar:"https://avatars.githubusercontent.com/u/70368615?s=40&v=4",path:"/KnockOutEZ/wigolo",ourl:"https://github.com/KnockOutEZ",url:"https://github.com/KnockOutEZ/wigolo",description:"",language:"TypeScript",stars:3625,forks:240,starup:2529},{title:`C4illin /

      ConvertX`,owner:"C4illin",name:"ConvertX",avatar:"https://avatars.githubusercontent.com/u/20753603?s=40&v=4",path:"/C4illin/ConvertX",ourl:"https://github.com/C4illin",url:"https://github.com/C4illin/ConvertX",description:"",language:"TypeScript",stars:18036,forks:1007,starup:786},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",ourl:"https://github.com/tldraw",url:"https://github.com/tldraw/tldraw",description:"",language:"TypeScript",stars:49298,forks:3417,starup:354},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5157,forks:342,starup:1341}],"TypeScript-monthly":[{title:`MadsLorentzen /

      ai-job-search`,owner:"MadsLorentzen",name:"ai-job-search",avatar:"https://avatars.githubusercontent.com/u/50207393?s=40&v=4",path:"/MadsLorentzen/ai-job-search",ourl:"https://github.com/MadsLorentzen",url:"https://github.com/MadsLorentzen/ai-job-search",description:"",language:"TypeScript",stars:26925,forks:8796,starup:23212},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:30224,forks:3943,starup:23016},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:29161,forks:2069,starup:21817},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:74290,forks:11153,starup:14554},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:27839,forks:2453,starup:8372},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8851,forks:992,starup:2755},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8004,forks:878,starup:5500},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:78777,forks:7864,starup:19309},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:46789,forks:5732,starup:12777},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:6460,forks:283,starup:3045},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:30215,forks:4344,starup:10333},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5089,forks:746,starup:2277},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",ourl:"https://github.com/immich-app",url:"https://github.com/immich-app/immich",description:"",language:"TypeScript",stars:108784,forks:6340,starup:4540},{title:`facebook /

      astryx`,owner:"facebook",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/facebook/astryx",ourl:"https://github.com/facebook",url:"https://github.com/facebook/astryx",description:"",language:"TypeScript",stars:10739,forks:819,starup:10696},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:7816,forks:945,starup:1750},{title:`kunchenguid /

      gnhf`,owner:"kunchenguid",name:"gnhf",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/gnhf",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/gnhf",description:"",language:"TypeScript",stars:3399,forks:247,starup:1018},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5157,forks:342,starup:1457},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:119828,forks:9542,starup:2960},{title:`HenryNdubuaku /

      maths-cs-ai-compendium`,owner:"HenryNdubuaku",name:"maths-cs-ai-compendium",avatar:"https://avatars.githubusercontent.com/u/26547576?s=40&v=4",path:"/HenryNdubuaku/maths-cs-ai-compendium",ourl:"https://github.com/HenryNdubuaku",url:"https://github.com/HenryNdubuaku/maths-cs-ai-compendium",description:"",language:"TypeScript",stars:7145,forks:866,starup:2586},{title:`Chocobozzz /

      PeerTube`,owner:"Chocobozzz",name:"PeerTube",avatar:"https://avatars.githubusercontent.com/u/5180488?s=40&v=4",path:"/Chocobozzz/PeerTube",ourl:"https://github.com/Chocobozzz",url:"https://github.com/Chocobozzz/PeerTube",description:"",language:"TypeScript",stars:15212,forks:1840,starup:516},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:3854,forks:991,starup:1611},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:2772,forks:374,starup:1809}],"Vue-daily":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22153,forks:1056,starup:35},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1662,forks:450,starup:3},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9211,forks:1763,starup:4},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39943,forks:5257,starup:21},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3747,forks:102,starup:5},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11670,forks:1878,starup:1},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32982,forks:8883,starup:10},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6684,forks:2487,starup:1},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:1055,forks:352,starup:1},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3261,forks:891,starup:2},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:420,forks:54052,starup:0},{title:`chenjigang4167 /

      testhub_platform`,owner:"chenjigang4167",name:"testhub_platform",avatar:"https://avatars.githubusercontent.com/u/39072129?s=40&v=4",path:"/chenjigang4167/testhub_platform",ourl:"https://github.com/chenjigang4167",url:"https://github.com/chenjigang4167/testhub_platform",description:"",language:"Vue",stars:700,forks:318,starup:1},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11502,forks:3096,starup:0},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:221,forks:1025,starup:0},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3457,forks:514,starup:4},{title:`fastapiadmin /

      FastapiAdmin`,owner:"fastapiadmin",name:"FastapiAdmin",avatar:"https://avatars.githubusercontent.com/u/73034508?s=40&v=4",path:"/fastapiadmin/FastapiAdmin",ourl:"https://github.com/fastapiadmin",url:"https://github.com/fastapiadmin/FastapiAdmin",description:"",language:"Vue",stars:971,forks:270,starup:1},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90245,forks:30394,starup:4}],"Vue-weekly":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21527,forks:1456,starup:87},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25984,forks:1913,starup:102},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22153,forks:1056,starup:246},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2601,forks:337,starup:113},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:420,forks:54052,starup:6},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9161,forks:2074,starup:73},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2950,forks:795,starup:92},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32982,forks:8883,starup:59},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3017,forks:1262,starup:34},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2016,forks:125,starup:105},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1662,forks:450,starup:64},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3457,forks:514,starup:34},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11670,forks:1878,starup:15},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39943,forks:5257,starup:99},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2938,forks:110,starup:44},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:746,forks:95,starup:34},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3084,forks:1421,starup:22},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21519,forks:2330,starup:42},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:747,forks:193,starup:3}],"Vue-monthly":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25984,forks:1913,starup:496},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2016,forks:125,starup:278},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2601,forks:337,starup:450},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3854,forks:780,starup:262},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2950,forks:795,starup:142},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39943,forks:5257,starup:475},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:420,forks:54052,starup:22},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3017,forks:1262,starup:149},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6965,forks:4996,starup:151},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22153,forks:1056,starup:623},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1668,forks:438,starup:171},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14479,forks:1761,starup:40},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11502,forks:3096,starup:48},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2608,forks:396,starup:57},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1662,forks:450,starup:125},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:746,forks:95,starup:123},{title:`x2rr /

      funds`,owner:"x2rr",name:"funds",avatar:"https://avatars.githubusercontent.com/u/23189213?s=40&v=4",path:"/x2rr/funds",ourl:"https://github.com/x2rr",url:"https://github.com/x2rr/funds",description:"",language:"Vue",stars:3189,forks:404,starup:97},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2190,forks:489,starup:137},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:747,forks:193,starup:15},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:3003,forks:479,starup:126},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:6888,forks:333,starup:47},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11502,forks:922,starup:86}]},mt=C({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=Y(),l=Q(()=>v(U[`${s.value}-${o.value}`]));_("color",i),_("data",l);function v(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=O,g=R,m=L,d=F,t=P,e=W,w=I,y=N,A=G;return h(),T("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(K,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(y,{key:2})):(h(),k(A,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
