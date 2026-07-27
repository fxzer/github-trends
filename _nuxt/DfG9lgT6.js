import O from"./CyOyT-gV.js";import R from"./BYYSJx2h.js";import D from"./D1oqCciI.js";import I from"./Dkmlu6nd.js";import q from"./BAgPHpRO.js";import W from"./C-bPicCC.js";import P from"./6FEQhsQX.js";import{d as j}from"./KQwPfV-1.js";import{s as L,a as V,b as B,u as J,i as E,c as F}from"./Cudo_aFi.js";import{i as C,p as H,a5 as M,D as h,f as T,w as A,S as Y,h as b,a6 as x,T as $,q as S,U as c,d as k,a as Z,H as _}from"./BHbFezAV.js";import"./CCIj3hfb.js";import"./p2-M2djV.js";import"./CVcK4Vp2.js";import"./BQafdkk9.js";import"./C1E08r3g.js";const N=C({__name:"Chart",setup(w){const s=H("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(L),r=V("趋势仓库总指标排行榜",o);function u(i){const a=j(i);a.sort((t,e)=>{const f=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return f-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=B(r,J);M(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:A({height:v})},null,4))}}),G=Object.assign(N,{__name:"TrendChart"}),K=C({__name:"StarupChart",props:{data:{}},setup(w){const s=w,{data:o}=Y(s),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=B(u,J);function v(a){const n=j(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}M(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:A({height:i})},null,4))}}),Q=Object.assign(K,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:5e3,forks:239,starup:900},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:118520,forks:36182,starup:36},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:50911,forks:2998,starup:413},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52140,forks:4884,starup:9},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:61738,forks:12159,starup:170},{title:`webtorrent /

      webtorrent`,owner:"webtorrent",name:"webtorrent",avatar:"https://avatars.githubusercontent.com/u/121766?s=40&v=4",path:"/webtorrent/webtorrent",ourl:"https://github.com/webtorrent",url:"https://github.com/webtorrent/webtorrent",description:"",language:"JavaScript",stars:31296,forks:2910,starup:5},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27428,forks:5142,starup:8},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:68024,forks:4705,starup:329},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36820,forks:2882,starup:13},{title:`mochajs /

      mocha`,owner:"mochajs",name:"mocha",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/mochajs/mocha",ourl:"https://github.com/mochajs",url:"https://github.com/mochajs/mocha",description:"",language:"JavaScript",stars:22908,forks:3159,starup:3},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:233758,forks:35631,starup:424},{title:`TechyCSR /

      OpenCluely`,owner:"TechyCSR",name:"OpenCluely",avatar:"https://avatars.githubusercontent.com/u/90786270?s=40&v=4",path:"/TechyCSR/OpenCluely",ourl:"https://github.com/TechyCSR",url:"https://github.com/TechyCSR/OpenCluely",description:"",language:"JavaScript",stars:505,forks:137,starup:20},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65867,forks:9438,starup:4},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:56326,forks:5775,starup:103},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69260,forks:24354,starup:10},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:23691,forks:4025,starup:115},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109162,forks:11783,starup:9},{title:`openwrt /

      luci`,owner:"openwrt",name:"luci",avatar:"https://avatars.githubusercontent.com/u/2528802?s=40&v=4",path:"/openwrt/luci",ourl:"https://github.com/openwrt",url:"https://github.com/openwrt/luci",description:"",language:"JavaScript",stars:7751,forks:2901,starup:3},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:141150,forks:31543,starup:21}],"JavaScript-weekly":[{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:10654,forks:1158,starup:2169},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5272,forks:2290,starup:794},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:566,forks:116,starup:77},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:5e3,forks:239,starup:3666},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12561,forks:1429,starup:172},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:29532,forks:1738,starup:619},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",ourl:"https://github.com/bigskysoftware",url:"https://github.com/bigskysoftware/htmx",description:"",language:"JavaScript",stars:48753,forks:1626,starup:198},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",ourl:"https://github.com/swagger-api",url:"https://github.com/swagger-api/swagger-ui",description:"",language:"JavaScript",stars:28938,forks:9266,starup:36},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:50911,forks:2998,starup:2446},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:35447,forks:4062,starup:82},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:13721,forks:1076,starup:122},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:45910,forks:2724,starup:195},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10829,forks:25447,starup:104},{title:`xifangczy /

      cat-catch`,owner:"xifangczy",name:"cat-catch",avatar:"https://avatars.githubusercontent.com/u/1239904?s=40&v=4",path:"/xifangczy/cat-catch",ourl:"https://github.com/xifangczy",url:"https://github.com/xifangczy/cat-catch",description:"",language:"JavaScript",stars:20943,forks:1827,starup:217},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:4897,forks:702,starup:239},{title:`MarSeventh /

      CloudFlare-ImgBed`,owner:"MarSeventh",name:"CloudFlare-ImgBed",avatar:"https://avatars.githubusercontent.com/u/108160987?s=40&v=4",path:"/MarSeventh/CloudFlare-ImgBed",ourl:"https://github.com/MarSeventh",url:"https://github.com/MarSeventh/CloudFlare-ImgBed",description:"",language:"JavaScript",stars:5927,forks:7440,starup:205},{title:`cockpit-project /

      cockpit`,owner:"cockpit-project",name:"cockpit",avatar:"https://avatars.githubusercontent.com/u/200109?s=40&v=4",path:"/cockpit-project/cockpit",ourl:"https://github.com/cockpit-project",url:"https://github.com/cockpit-project/cockpit",description:"",language:"JavaScript",stars:14697,forks:1314,starup:90},{title:`hzm0321 /

      real-time-fund`,owner:"hzm0321",name:"real-time-fund",avatar:"https://avatars.githubusercontent.com/u/35420713?s=40&v=4",path:"/hzm0321/real-time-fund",ourl:"https://github.com/hzm0321",url:"https://github.com/hzm0321/real-time-fund",description:"",language:"JavaScript",stars:1592,forks:491,starup:70},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:2629,forks:240,starup:160}],"JavaScript-monthly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:60786,forks:9930,starup:14718},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:30027,forks:1959,starup:8532},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:2188,forks:191,starup:1260},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:93288,forks:5318,starup:16561},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:50911,forks:2998,starup:9127},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:68024,forks:4705,starup:16858},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36820,forks:2882,starup:585},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52140,forks:4884,starup:354},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:4897,forks:702,starup:884},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"JavaScript",stars:10654,forks:1158,starup:3538},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:3029,forks:386,starup:1150},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38192,forks:3099,starup:794},{title:`worldwonderer /

      oh-story-claudecode`,owner:"worldwonderer",name:"oh-story-claudecode",avatar:"https://avatars.githubusercontent.com/u/49583093?s=40&v=4",path:"/worldwonderer/oh-story-claudecode",ourl:"https://github.com/worldwonderer",url:"https://github.com/worldwonderer/oh-story-claudecode",description:"",language:"JavaScript",stars:4651,forks:714,starup:1522},{title:`webtorrent /

      webtorrent`,owner:"webtorrent",name:"webtorrent",avatar:"https://avatars.githubusercontent.com/u/121766?s=40&v=4",path:"/webtorrent/webtorrent",ourl:"https://github.com/webtorrent",url:"https://github.com/webtorrent/webtorrent",description:"",language:"JavaScript",stars:31296,forks:2910,starup:503},{title:`ryanmcdermott /

      clean-code-javascript`,owner:"ryanmcdermott",name:"clean-code-javascript",avatar:"https://avatars.githubusercontent.com/u/5114666?s=40&v=4",path:"/ryanmcdermott/clean-code-javascript",ourl:"https://github.com/ryanmcdermott",url:"https://github.com/ryanmcdermott/clean-code-javascript",description:"",language:"JavaScript",stars:94749,forks:12541,starup:488},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:141150,forks:31543,starup:1944},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65867,forks:9438,starup:294}],"TypeScript-daily":[{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:15145,forks:3315,starup:149},{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:5860,forks:525,starup:888},{title:`EvanZhouDev /

      openai-oauth`,owner:"EvanZhouDev",name:"openai-oauth",avatar:"https://avatars.githubusercontent.com/u/62189478?s=40&v=4",path:"/EvanZhouDev/openai-oauth",ourl:"https://github.com/EvanZhouDev",url:"https://github.com/EvanZhouDev/openai-oauth",description:"",language:"TypeScript",stars:975,forks:169,starup:79},{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:4070,forks:385,starup:89},{title:`apollographql /

      apollo-client`,owner:"apollographql",name:"apollo-client",avatar:"https://avatars.githubusercontent.com/u/5750?s=40&v=4",path:"/apollographql/apollo-client",ourl:"https://github.com/apollographql",url:"https://github.com/apollographql/apollo-client",description:"",language:"TypeScript",stars:19808,forks:2781,starup:5},{title:`browseros-ai /

      BrowserOS`,owner:"browseros-ai",name:"BrowserOS",avatar:"https://avatars.githubusercontent.com/u/1223275?s=40&v=4",path:"/browseros-ai/BrowserOS",ourl:"https://github.com/browseros-ai",url:"https://github.com/browseros-ai/BrowserOS",description:"",language:"TypeScript",stars:12763,forks:1345,starup:70},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:17119,forks:2473,starup:116},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:34857,forks:3494,starup:85},{title:`nestjs /

      nest`,owner:"nestjs",name:"nest",avatar:"https://avatars.githubusercontent.com/u/23244943?s=40&v=4",path:"/nestjs/nest",ourl:"https://github.com/nestjs",url:"https://github.com/nestjs/nest",description:"",language:"TypeScript",stars:76216,forks:8404,starup:20},{title:`777genius /

      agent-teams-ai`,owner:"777genius",name:"agent-teams-ai",avatar:"https://avatars.githubusercontent.com/u/13103045?s=40&v=4",path:"/777genius/agent-teams-ai",ourl:"https://github.com/777genius",url:"https://github.com/777genius/agent-teams-ai",description:"",language:"TypeScript",stars:1705,forks:300,starup:25},{title:`microsoft /

      inshellisense`,owner:"microsoft",name:"inshellisense",avatar:"https://avatars.githubusercontent.com/u/35637443?s=40&v=4",path:"/microsoft/inshellisense",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/inshellisense",description:"",language:"TypeScript",stars:10553,forks:245,starup:36},{title:`kepano /

      defuddle`,owner:"kepano",name:"defuddle",avatar:"https://avatars.githubusercontent.com/u/10565871?s=40&v=4",path:"/kepano/defuddle",ourl:"https://github.com/kepano",url:"https://github.com/kepano/defuddle",description:"",language:"TypeScript",stars:8612,forks:374,starup:28},{title:`davepoon /

      buildwithclaude`,owner:"davepoon",name:"buildwithclaude",avatar:"https://avatars.githubusercontent.com/u/138992?s=40&v=4",path:"/davepoon/buildwithclaude",ourl:"https://github.com/davepoon",url:"https://github.com/davepoon/buildwithclaude",description:"",language:"TypeScript",stars:3222,forks:442,starup:6},{title:`prisma /

      prisma`,owner:"prisma",name:"prisma",avatar:"https://avatars.githubusercontent.com/u/1094804?s=40&v=4",path:"/prisma/prisma",ourl:"https://github.com/prisma",url:"https://github.com/prisma/prisma",description:"",language:"TypeScript",stars:47408,forks:2435,starup:8},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/8104246?s=40&v=4",path:"/nrwl/nx",ourl:"https://github.com/nrwl",url:"https://github.com/nrwl/nx",description:"",language:"TypeScript",stars:29145,forks:2867,starup:9},{title:`freemocap /

      freemocap`,owner:"freemocap",name:"freemocap",avatar:"https://avatars.githubusercontent.com/u/15314521?s=40&v=4",path:"/freemocap/freemocap",ourl:"https://github.com/freemocap",url:"https://github.com/freemocap/freemocap",description:"",language:"TypeScript",stars:9827,forks:907,starup:18},{title:`puppeteer /

      puppeteer`,owner:"puppeteer",name:"puppeteer",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/puppeteer/puppeteer",ourl:"https://github.com/puppeteer",url:"https://github.com/puppeteer/puppeteer",description:"",language:"TypeScript",stars:95364,forks:9561,starup:14}],"TypeScript-weekly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:74969,forks:11256,starup:12615},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:31356,forks:4056,starup:10912},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:2928,forks:389,starup:1551},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:78430,forks:9652,starup:5389},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5245,forks:771,starup:1380},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8314,forks:903,starup:3639},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:30083,forks:2124,starup:7392},{title:`CoreBunch /

      Instatic`,owner:"CoreBunch",name:"Instatic",avatar:"https://avatars.githubusercontent.com/u/49069339?s=40&v=4",path:"/CoreBunch/Instatic",ourl:"https://github.com/CoreBunch",url:"https://github.com/CoreBunch/Instatic",description:"",language:"TypeScript",stars:5860,forks:525,starup:1893},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:15145,forks:3315,starup:793},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:46957,forks:5761,starup:3773},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:6573,forks:288,starup:1167},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:11048,forks:7443,starup:501},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:6396,forks:376,starup:592},{title:`mattpocock /

      dictionary-of-ai-coding`,owner:"mattpocock",name:"dictionary-of-ai-coding",avatar:"https://avatars.githubusercontent.com/u/28293365?s=40&v=4",path:"/mattpocock/dictionary-of-ai-coding",ourl:"https://github.com/mattpocock",url:"https://github.com/mattpocock/dictionary-of-ai-coding",description:"",language:"TypeScript",stars:3195,forks:381,starup:235},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",ourl:"https://github.com/tldraw",url:"https://github.com/tldraw/tldraw",description:"",language:"TypeScript",stars:49333,forks:3417,starup:317},{title:`oblien /

      openship`,owner:"oblien",name:"openship",avatar:"https://avatars.githubusercontent.com/u/162022179?s=40&v=4",path:"/oblien/openship",ourl:"https://github.com/oblien",url:"https://github.com/oblien/openship",description:"",language:"TypeScript",stars:8777,forks:710,starup:5844},{title:`KnockOutEZ /

      wigolo`,owner:"KnockOutEZ",name:"wigolo",avatar:"https://avatars.githubusercontent.com/u/70368615?s=40&v=4",path:"/KnockOutEZ/wigolo",ourl:"https://github.com/KnockOutEZ",url:"https://github.com/KnockOutEZ/wigolo",description:"",language:"TypeScript",stars:3660,forks:247,starup:1971},{title:`C4illin /

      ConvertX`,owner:"C4illin",name:"ConvertX",avatar:"https://avatars.githubusercontent.com/u/20753603?s=40&v=4",path:"/C4illin/ConvertX",ourl:"https://github.com/C4illin",url:"https://github.com/C4illin/ConvertX",description:"",language:"TypeScript",stars:18080,forks:1012,starup:832},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5177,forks:346,starup:1291},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:24811,forks:1883,starup:296},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:26353,forks:2723,starup:266}],"TypeScript-monthly":[{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:31356,forks:4056,starup:23805},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:30083,forks:2124,starup:21857},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:74969,forks:11256,starup:14798},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:27934,forks:2462,starup:7959},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:79126,forks:7901,starup:19272},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:8314,forks:903,starup:5191},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:46957,forks:5761,starup:12680},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:6573,forks:288,starup:3168},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:5245,forks:771,starup:2376},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",ourl:"https://github.com/immich-app",url:"https://github.com/immich-app/immich",description:"",language:"TypeScript",stars:108914,forks:6358,starup:4606},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:30304,forks:4366,starup:9389},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:14234,forks:1065,starup:2122},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:7828,forks:953,starup:1739},{title:`Yeachan-Heo /

      gajae-code`,owner:"Yeachan-Heo",name:"gajae-code",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/gajae-code",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/gajae-code",description:"",language:"TypeScript",stars:2241,forks:316,starup:1059},{title:`kunchenguid /

      gnhf`,owner:"kunchenguid",name:"gnhf",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/gnhf",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/gnhf",description:"",language:"TypeScript",stars:3420,forks:247,starup:992},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:119901,forks:9553,starup:2964},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8874,forks:997,starup:2796},{title:`HenryNdubuaku /

      maths-cs-ai-compendium`,owner:"HenryNdubuaku",name:"maths-cs-ai-compendium",avatar:"https://avatars.githubusercontent.com/u/26547576?s=40&v=4",path:"/HenryNdubuaku/maths-cs-ai-compendium",ourl:"https://github.com/HenryNdubuaku",url:"https://github.com/HenryNdubuaku/maths-cs-ai-compendium",description:"",language:"TypeScript",stars:7156,forks:869,starup:2593},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5177,forks:346,starup:1478},{title:`Chocobozzz /

      PeerTube`,owner:"Chocobozzz",name:"PeerTube",avatar:"https://avatars.githubusercontent.com/u/5180488?s=40&v=4",path:"/Chocobozzz/PeerTube",ourl:"https://github.com/Chocobozzz",url:"https://github.com/Chocobozzz/PeerTube",description:"",language:"TypeScript",stars:15216,forks:1839,starup:517},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:2928,forks:389,starup:1939},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:3970,forks:1015,starup:1640}],"Vue-daily":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32991,forks:8883,starup:7},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3088,forks:1421,starup:3},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39956,forks:5259,starup:15},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:207,forks:18,starup:5},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1484,forks:118,starup:2},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",ourl:"https://github.com/BewlyBewly",url:"https://github.com/BewlyBewly/BewlyBewly",description:"",language:"Vue",stars:8854,forks:394,starup:5},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3751,forks:102,starup:6},{title:`unovue /

      inspira-ui`,owner:"unovue",name:"inspira-ui",avatar:"https://avatars.githubusercontent.com/u/25490173?s=40&v=4",path:"/unovue/inspira-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/inspira-ui",description:"",language:"Vue",stars:4808,forks:320,starup:23},{title:`schej-it /

      timeful.app`,owner:"schej-it",name:"timeful.app",avatar:"https://avatars.githubusercontent.com/u/16812809?s=40&v=4",path:"/schej-it/timeful.app",ourl:"https://github.com/schej-it",url:"https://github.com/schej-it/timeful.app",description:"",language:"Vue",stars:1659,forks:137,starup:6},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3262,forks:892,starup:0},{title:`nuxt /

      nuxters`,owner:"nuxt",name:"nuxters",avatar:"https://avatars.githubusercontent.com/u/904724?s=40&v=4",path:"/nuxt/nuxters",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxters",description:"",language:"Vue",stars:185,forks:32,starup:1},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:421,forks:54234,starup:1},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:1055,forks:352,starup:0},{title:`DavidHDev /

      vue-bits`,owner:"DavidHDev",name:"vue-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/vue-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/vue-bits",description:"",language:"Vue",stars:4277,forks:161,starup:2},{title:`ActivityWatch /

      aw-webui`,owner:"ActivityWatch",name:"aw-webui",avatar:"https://avatars.githubusercontent.com/u/1405370?s=40&v=4",path:"/ActivityWatch/aw-webui",ourl:"https://github.com/ActivityWatch",url:"https://github.com/ActivityWatch/aw-webui",description:"",language:"Vue",stars:143,forks:168,starup:1},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33087,forks:4679,starup:8},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5642,forks:1075,starup:2}],"Vue-weekly":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21534,forks:1456,starup:77},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22179,forks:1059,starup:254},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26002,forks:1914,starup:113},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9161,forks:2076,starup:66},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32991,forks:8883,starup:63},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2613,forks:336,starup:113},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2957,forks:796,starup:86},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:421,forks:54234,starup:6},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39956,forks:5259,starup:101},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2028,forks:126,starup:98},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1664,forks:450,starup:66},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11671,forks:1878,starup:15},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3019,forks:1266,starup:35},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3262,forks:892,starup:18},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33087,forks:4679,starup:46},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3456,forks:515,starup:29},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9214,forks:1763,starup:35},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3088,forks:1421,starup:24},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2942,forks:110,starup:42},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21523,forks:2330,starup:42},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:747,forks:194,starup:5}],"Vue-monthly":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26002,forks:1914,starup:516},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2028,forks:126,starup:282},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2613,forks:336,starup:447},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39956,forks:5259,starup:476},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2957,forks:796,starup:146},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3865,forks:784,starup:263},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1664,forks:450,starup:127},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6967,forks:5002,starup:149},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:421,forks:54234,starup:23},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3019,forks:1266,starup:147},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22179,forks:1059,starup:629},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1674,forks:438,starup:173},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14478,forks:1761,starup:38},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2610,forks:396,starup:59},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3262,forks:892,starup:64},{title:`beercss /

      beercss`,owner:"beercss",name:"beercss",avatar:"https://avatars.githubusercontent.com/u/12979016?s=40&v=4",path:"/beercss/beercss",ourl:"https://github.com/beercss",url:"https://github.com/beercss/beercss",description:"",language:"Vue",stars:2556,forks:95,starup:211},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11503,forks:3095,starup:48},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2193,forks:490,starup:137},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:750,forks:95,starup:123},{title:`x2rr /

      funds`,owner:"x2rr",name:"funds",avatar:"https://avatars.githubusercontent.com/u/23189213?s=40&v=4",path:"/x2rr/funds",ourl:"https://github.com/x2rr",url:"https://github.com/x2rr/funds",description:"",language:"Vue",stars:3190,forks:405,starup:99},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:747,forks:194,starup:16},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:3006,forks:479,starup:124}]},mt=C({__name:"index",setup(w){const{view:s,dateRange:o,language:r,color:u}=F(),l=Z(()=>v(U[`${r.value}-${o.value}`]));_("color",u),_("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=O,g=R,m=D,d=I,t=q,e=W,f=P,y=G,z=Q;return h(),T("div",null,[b(d,null,{default:x(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:x(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:x(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(f,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(y,{key:2})):(h(),k(z,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
