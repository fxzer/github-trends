import{_ as F}from"./SE1O3u_J.js";import{_ as E}from"./6xVWwc00.js";import{_ as L}from"./ijFZuWat.js";import G from"./iWAmqFwJ.js";import{_ as O,a as N}from"./BffLClhk.js";import{_ as q}from"./CsKe-ikc.js";import{s as U,u as W,a as M,b as I,i as H,c as Y}from"./BBDxyKm7.js";import{d as B,s as r}from"./CYcXzR8Z.js";import{n as C,q as _,h as P,o as l,c as S,s as D,r as A,u as $,b as c,w as y,T as Z,v as u,x as j,F as Q,y as K,z as J,a as X}from"./CB7HoyEv.js";import{l as tt}from"./p2-M2djV.js";import"./CzN_8Gxm.js";import"./C-OGCejy.js";import"./BQkc-AXV.js";import"./Dno8ragp.js";const at=C({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=_(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=W("仓库飙升榜",h);function k(n){const s=B(n);s.sort((a,o)=>{const T=r(a.starup)+r(a.stars)+r(a.forks),V=r(o.starup)+r(o.stars)+r(o.forks);return T-V});const[d,v,w,i]=s.reduce((a,o)=>(a[0].push(r(o.stars)),a[1].push(r(o.forks)),a[2].push(r(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:f}=M(t,I);P(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:D({height:g})},null,4))}}),et=C({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=_(p),t=W("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=M(t,I);function f(n){const s=B(n);s.sort((i,a)=>r(i.starup)-r(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=s.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:r(i.starup),name:`${i.owner}/${i.name}`,itemStyle:H(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}P(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:D({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`foolstack-omg /

      block-tech-sharing`,owner:"foolstack-omg",name:"block-tech-sharing",avatar:"https://avatars.githubusercontent.com/u/102364951?s=40&v=4",path:"/foolstack-omg/block-tech-sharing",link:"https://github.com/foolstack-omg/block-tech-sharing",description:"Sharing Valuable Technology & Arbitrage Skill of The Blockchain I have learned.",language:"JavaScript",stars:"207",forks:"110",starup:"19"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,856",forks:"991",starup:"14"},{title:`github /

      relative-time-element`,owner:"github",name:"relative-time-element",avatar:"https://avatars.githubusercontent.com/u/118266?s=40&v=4",path:"/github/relative-time-element",link:"https://github.com/github/relative-time-element",description:"Web component extensions to the standard <time> element.",language:"JavaScript",stars:"3,192",forks:"165",starup:"29"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,585",forks:"4,540",starup:"58"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,885",forks:"29,682",starup:"66"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"4,585",forks:"333",starup:"50"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,176",forks:"1,245",starup:"39"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,542",forks:"4,711",starup:"9"},{title:`PavelDoGreat /

      WebGL-Fluid-Simulation`,owner:"PavelDoGreat",name:"WebGL-Fluid-Simulation",avatar:"https://avatars.githubusercontent.com/u/24439787?s=40&v=4",path:"/PavelDoGreat/WebGL-Fluid-Simulation",link:"https://github.com/PavelDoGreat/WebGL-Fluid-Simulation",description:"Play with fluids in your browser (works even on mobile)",language:"JavaScript",stars:"14,318",forks:"1,644",starup:"21"},{title:`hiteshchoudhary /

      js-hindi-youtube`,owner:"hiteshchoudhary",name:"js-hindi-youtube",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/js-hindi-youtube",link:"https://github.com/hiteshchoudhary/js-hindi-youtube",description:"A code repo for javascript series at Chai aur code youtube channel",language:"JavaScript",stars:"2,206",forks:"1,285",starup:"7"},{title:`aframevr /

      aframe`,owner:"aframevr",name:"aframe",avatar:"https://avatars.githubusercontent.com/u/674727?s=40&v=4",path:"/aframevr/aframe",link:"https://github.com/aframevr/aframe",description:"🅰️ Web framework for building virtual reality experiences.",language:"JavaScript",stars:"16,270",forks:"3,865",starup:"19"},{title:`Asabeneh /

      30-Days-Of-JavaScript`,owner:"Asabeneh",name:"30-Days-Of-JavaScript",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-JavaScript",link:"https://github.com/Asabeneh/30-Days-Of-JavaScript",description:"30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",language:"JavaScript",stars:"41,186",forks:"9,583",starup:"21"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,620",forks:"959",starup:"219"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"161",forks:"26",starup:"22"},{title:`denysdovhan /

      wtfjs`,owner:"denysdovhan",name:"wtfjs",avatar:"https://avatars.githubusercontent.com/u/3459374?s=40&v=4",path:"/denysdovhan/wtfjs",link:"https://github.com/denysdovhan/wtfjs",description:"🤪 A list of funny and tricky JavaScript examples",language:"JavaScript",stars:"34,142",forks:"2,521",starup:"7"},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",link:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",language:"JavaScript",stars:"76,866",forks:"3,986",starup:"24"},{title:`leonardomso /

      33-js-concepts`,owner:"leonardomso",name:"33-js-concepts",avatar:"https://avatars.githubusercontent.com/u/8030067?s=40&v=4",path:"/leonardomso/33-js-concepts",link:"https://github.com/leonardomso/33-js-concepts",description:"📜 33 JavaScript concepts every developer should know.",language:"JavaScript",stars:"62,284",forks:"8,696",starup:"37"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,188",forks:"2,950",starup:"7"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,668",forks:"8,825",starup:"7"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,945",forks:"1,529",starup:"6"},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",link:"https://github.com/cypress-io/cypress",description:"Fast, easy and reliable testing for anything that runs in a browser.",language:"JavaScript",stars:"46,249",forks:"3,123",starup:"7"},{title:`sudheerj /

      javascript-interview-questions`,owner:"sudheerj",name:"javascript-interview-questions",avatar:"https://avatars.githubusercontent.com/u/3127317?s=40&v=4",path:"/sudheerj/javascript-interview-questions",link:"https://github.com/sudheerj/javascript-interview-questions",description:"List of 1000 JavaScript Interview Questions",language:"JavaScript",stars:"22,176",forks:"6,343",starup:"19"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"14,998",forks:"16,349",starup:"8"},{title:`mailcow /

      mailcow-dockerized`,owner:"mailcow",name:"mailcow-dockerized",avatar:"https://avatars.githubusercontent.com/u/2972950?s=40&v=4",path:"/mailcow/mailcow-dockerized",link:"https://github.com/mailcow/mailcow-dockerized",description:"mailcow: dockerized - 🐮 + 🐋 = 💕",language:"JavaScript",stars:"8,056",forks:"1,100",starup:"5"},{title:`langchain-ai /

      langserve`,owner:"langchain-ai",name:"langserve",avatar:"https://avatars.githubusercontent.com/u/3205522?s=40&v=4",path:"/langchain-ai/langserve",link:"https://github.com/langchain-ai/langserve",description:"LangServe 🦜️🏓",language:"JavaScript",stars:"1,653",forks:"164",starup:"7"}],"JavaScript-weekly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"25,978",forks:"3,041",starup:"2,061"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,885",forks:"29,682",starup:"645"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,149",forks:"3,362",starup:"579"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,590",forks:"313",starup:"668"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,856",forks:"991",starup:"168"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,827",forks:"649",starup:"232"},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",link:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"24 Lessons, 12 Weeks, Get Started as a Web Developer",language:"JavaScript",stars:"81,768",forks:"12,216",starup:"165"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,435",forks:"35,143",starup:"179"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,392",forks:"518",starup:"93"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"161",forks:"26",starup:"57"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,421",forks:"45,506",starup:"610"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"78,957",forks:"1,837",starup:"234"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,338",forks:"1,788",starup:"148"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,462",forks:"15,307",starup:"214"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,910",forks:"12,330",starup:"45"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a dynamic graph where each node is an executable unit. Its modular and interactive design fosters rapid experimentation and prototyping, pushing hard on the limits of creativity.",language:"JavaScript",stars:"18,178",forks:"2,721",starup:"356"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,620",forks:"959",starup:"363"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,286",forks:"1,901",starup:"146"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,512",forks:"26,009",starup:"281"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,723",forks:"2,357",starup:"300"},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",link:"https://github.com/bigskysoftware/htmx",description:"</> htmx - high power tools for HTML",language:"JavaScript",stars:"33,465",forks:"1,110",starup:"252"},{title:`fishjar /

      kiss-translator`,owner:"fishjar",name:"kiss-translator",avatar:"https://avatars.githubusercontent.com/u/1157624?s=40&v=4",path:"/fishjar/kiss-translator",link:"https://github.com/fishjar/kiss-translator",description:"A simple, open source bilingual translation extension & Greasemonkey script (一个简约、开源的 双语对照翻译扩展 & 油猴脚本)",language:"JavaScript",stars:"2,124",forks:"81",starup:"375"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,250",forks:"11,644",starup:"47"},{title:`google-ai-edge /

      model-explorer`,owner:"google-ai-edge",name:"model-explorer",avatar:"https://avatars.githubusercontent.com/u/8752427?s=40&v=4",path:"/google-ai-edge/model-explorer",link:"https://github.com/google-ai-edge/model-explorer",description:"A modern model graph visualizer and debugger",language:"JavaScript",stars:"707",forks:"33",starup:"403"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,610",forks:"9,743",starup:"118"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"25,978",forks:"3,041",starup:"4,435"},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,335",forks:"732",starup:"4,637"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,856",forks:"991",starup:"497"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"586",forks:"102",starup:"323"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,830",forks:"1,533",starup:"2,893"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,108",forks:"218",starup:"1,090"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,421",forks:"45,506",starup:"2,094"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,189",forks:"6,517",starup:"689"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,149",forks:"3,362",starup:"778"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,590",forks:"313",starup:"1,042"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,036",forks:"2,504",starup:"284"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,512",forks:"26,009",starup:"1,205"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,726",forks:"5,891",starup:"878"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,566",forks:"1,524",starup:"144"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,416",forks:"1,149",starup:"191"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,074",forks:"1,106",starup:"261"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,462",forks:"15,307",starup:"524"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"9,016",forks:"381",starup:"466"},{title:`Chalarangelo /

      30-seconds-of-code`,owner:"Chalarangelo",name:"30-seconds-of-code",avatar:"https://avatars.githubusercontent.com/u/8281875?s=40&v=4",path:"/Chalarangelo/30-seconds-of-code",link:"https://github.com/Chalarangelo/30-seconds-of-code",description:"Short code snippets for all your development needs",language:"JavaScript",stars:"119,618",forks:"11,881",starup:"643"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,478",forks:"1,830",starup:"376"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,585",forks:"4,540",starup:"1,500"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,616",forks:"3,482",starup:"460"},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",link:"https://github.com/MagicMirrorOrg/MagicMirror",description:"MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.",language:"JavaScript",stars:"19,299",forks:"4,149",starup:"333"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"227",forks:"345",starup:"144"},{title:`pinokiocomputer /

      pinokio`,owner:"pinokiocomputer",name:"pinokio",avatar:"https://avatars.githubusercontent.com/u/121128867?s=40&v=4",path:"/pinokiocomputer/pinokio",link:"https://github.com/pinokiocomputer/pinokio",description:"AI Browser",language:"JavaScript",stars:"2,550",forks:"212",starup:"281"}],"TypeScript-daily":[{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,154",forks:"7,236",starup:"87"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,796",forks:"24,705",starup:"30"},{title:`nucleuscloud /

      neosync`,owner:"nucleuscloud",name:"neosync",avatar:"https://avatars.githubusercontent.com/u/2420177?s=40&v=4",path:"/nucleuscloud/neosync",link:"https://github.com/nucleuscloud/neosync",description:"Open source data anonymization and synthetic data orchestration for developers. Create high fidelity synthetic data and sync it across your environments.",language:"TypeScript",stars:"1,568",forks:"51",starup:"370"},{title:`6677-ai /

      tap4-ai-webui`,owner:"6677-ai",name:"tap4-ai-webui",avatar:"https://avatars.githubusercontent.com/u/143493133?s=40&v=4",path:"/6677-ai/tap4-ai-webui",link:"https://github.com/6677-ai/tap4-ai-webui",description:"One-click to deploy your own ai tools directory with the open source web-ui",language:"TypeScript",stars:"226",forks:"67",starup:"39"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,332",forks:"14,122",starup:"113"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"10,648",forks:"658",starup:"221"},{title:`gitbutlerapp /

      gitbutler`,owner:"gitbutlerapp",name:"gitbutler",avatar:"https://avatars.githubusercontent.com/u/15010292?s=40&v=4",path:"/gitbutlerapp/gitbutler",link:"https://github.com/gitbutlerapp/gitbutler",description:"The GitButler version control client, backed by Git, powered by Tauri/Rust/Svelte",language:"TypeScript",stars:"10,853",forks:"450",starup:"155"},{title:`ag-grid /

      ag-grid`,owner:"ag-grid",name:"ag-grid",avatar:"https://avatars.githubusercontent.com/u/1329081?s=40&v=4",path:"/ag-grid/ag-grid",link:"https://github.com/ag-grid/ag-grid",description:"The best JavaScript Data Table for building Enterprise Applications. Supports React / Angular / Vue / Plain JavaScript.",language:"TypeScript",stars:"11,889",forks:"1,799",starup:"7"},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/35996?s=40&v=4",path:"/nrwl/nx",link:"https://github.com/nrwl/nx",description:"Smart Monorepos · Fast CI",language:"TypeScript",stars:"22,310",forks:"2,219",starup:"13"},{title:`farcasterxyz /

      hub-monorepo`,owner:"farcasterxyz",name:"hub-monorepo",avatar:"https://avatars.githubusercontent.com/u/31996805?s=40&v=4",path:"/farcasterxyz/hub-monorepo",link:"https://github.com/farcasterxyz/hub-monorepo",description:"Implementation of the Farcaster Hub specification and supporting libraries for building applications on Farcaster",language:"TypeScript",stars:"577",forks:"294",starup:"6"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,407",forks:"1,030",starup:"92"},{title:`activepieces /

      activepieces`,owner:"activepieces",name:"activepieces",avatar:"https://avatars.githubusercontent.com/u/1812998?s=40&v=4",path:"/activepieces/activepieces",link:"https://github.com/activepieces/activepieces",description:"Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative",language:"TypeScript",stars:"8,112",forks:"858",starup:"49"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"4,763",forks:"438",starup:"693"},{title:`solidjs /

      solid-start`,owner:"solidjs",name:"solid-start",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid-start",link:"https://github.com/solidjs/solid-start",description:"SolidStart, the Solid app framework",language:"TypeScript",stars:"4,692",forks:"364",starup:"100"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"1,096",forks:"120",starup:"262"},{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"108",forks:"15",starup:"24"},{title:`langchain-ai /

      langchain-nextjs-template`,owner:"langchain-ai",name:"langchain-nextjs-template",avatar:"https://avatars.githubusercontent.com/u/6952323?s=40&v=4",path:"/langchain-ai/langchain-nextjs-template",link:"https://github.com/langchain-ai/langchain-nextjs-template",description:"LangChain + Next.js starter template",language:"TypeScript",stars:"988",forks:"209",starup:"19"},{title:`mui /

      mui-x`,owner:"mui",name:"mui-x",avatar:"https://avatars.githubusercontent.com/u/3309670?s=40&v=4",path:"/mui/mui-x",link:"https://github.com/mui/mui-x",description:"MUI X: Build complex and data-rich applications using a growing list of advanced React components, like the Data Grid, Date and Time Pickers, Charts, and more!",language:"TypeScript",stars:"3,832",forks:"1,138",starup:"5"},{title:`bluesky-social /

      atproto`,owner:"bluesky-social",name:"atproto",avatar:"https://avatars.githubusercontent.com/u/4898225?s=40&v=4",path:"/bluesky-social/atproto",link:"https://github.com/bluesky-social/atproto",description:"Social networking technology created by Bluesky",language:"TypeScript",stars:"5,728",forks:"390",starup:"5"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"485",forks:"38",starup:"25"},{title:`szimek /

      signature_pad`,owner:"szimek",name:"signature_pad",avatar:"https://avatars.githubusercontent.com/u/9873?s=40&v=4",path:"/szimek/signature_pad",link:"https://github.com/szimek/signature_pad",description:"HTML5 canvas based smooth signature drawing",language:"TypeScript",stars:"10,243",forks:"2,070",starup:"56"},{title:`adobe /

      react-spectrum`,owner:"adobe",name:"react-spectrum",avatar:"https://avatars.githubusercontent.com/u/19409?s=40&v=4",path:"/adobe/react-spectrum",link:"https://github.com/adobe/react-spectrum",description:"A collection of libraries and tools that help you build adaptive, accessible, and robust user experiences.",language:"TypeScript",stars:"11,919",forks:"1,039",starup:"11"},{title:`excalidraw /

      excalidraw`,owner:"excalidraw",name:"excalidraw",avatar:"https://avatars.githubusercontent.com/u/5153846?s=40&v=4",path:"/excalidraw/excalidraw",link:"https://github.com/excalidraw/excalidraw",description:"Virtual whiteboard for sketching hand-drawn like diagrams",language:"TypeScript",stars:"74,480",forks:"6,712",starup:"96"},{title:`grafana /

      grafana`,owner:"grafana",name:"grafana",avatar:"https://avatars.githubusercontent.com/u/10999?s=40&v=4",path:"/grafana/grafana",link:"https://github.com/grafana/grafana",description:"The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.",language:"TypeScript",stars:"60,831",forks:"11,621",starup:"15"},{title:`vercel /

      ai`,owner:"vercel",name:"ai",avatar:"https://avatars.githubusercontent.com/u/205036?s=40&v=4",path:"/vercel/ai",link:"https://github.com/vercel/ai",description:"Build AI-powered applications with React, Svelte, Vue, and Solid",language:"TypeScript",stars:"8,056",forks:"1,082",starup:"22"}],"TypeScript-weekly":[{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,417",forks:"325",starup:"1,430"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,218",forks:"1,043",starup:"2,134"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,541",forks:"2,287",starup:"1,168"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"2,607",forks:"322",starup:"1,666"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,407",forks:"1,030",starup:"473"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"485",forks:"38",starup:"159"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"10,648",forks:"658",starup:"620"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"959",forks:"67",starup:"347"},{title:`outline /

      outline`,owner:"outline",name:"outline",avatar:"https://avatars.githubusercontent.com/u/380914?s=40&v=4",path:"/outline/outline",link:"https://github.com/outline/outline",description:"The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",language:"TypeScript",stars:"25,271",forks:"2,028",starup:"423"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,466",forks:"56,423",starup:"721"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,154",forks:"7,236",starup:"636"},{title:`GrapesJS /

      grapesjs`,owner:"GrapesJS",name:"grapesjs",avatar:"https://avatars.githubusercontent.com/u/11614725?s=40&v=4",path:"/GrapesJS/grapesjs",link:"https://github.com/GrapesJS/grapesjs",description:"Free and Open source Web Builder Framework. Next generation tool for building templates without coding",language:"TypeScript",stars:"20,275",forks:"3,829",starup:"82"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"907",forks:"56",starup:"154"},{title:`webstudio-is /

      webstudio`,owner:"webstudio-is",name:"webstudio",avatar:"https://avatars.githubusercontent.com/u/52824?s=40&v=4",path:"/webstudio-is/webstudio",link:"https://github.com/webstudio-is/webstudio",description:"Open Source alternative to Webflow, check out our CMS launch https://webstudio.is/cms",language:"TypeScript",stars:"3,904",forks:"375",starup:"86"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,514",forks:"122",starup:"533"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,817",forks:"4,711",starup:"296"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"65,816",forks:"5,386",starup:"153"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,796",forks:"24,705",starup:"131"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"88",forks:"44",starup:"22"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,277",forks:"6,907",starup:"94"},{title:`weaigc /

      bingo`,owner:"weaigc",name:"bingo",avatar:"https://avatars.githubusercontent.com/u/39235693?s=40&v=4",path:"/weaigc/bingo",link:"https://github.com/weaigc/bingo",description:"Bingo，一个让你呼吸顺畅 New Bing。",language:"TypeScript",stars:"2,621",forks:"1,075",starup:"79"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,426",forks:"350",starup:"81"},{title:`Hiram-Wong /

      ZyPlayer`,owner:"Hiram-Wong",name:"ZyPlayer",avatar:"https://avatars.githubusercontent.com/u/30908279?s=40&v=4",path:"/Hiram-Wong/ZyPlayer",link:"https://github.com/Hiram-Wong/ZyPlayer",description:"跨平台桌面端视频资源播放器,免费高颜值.",language:"TypeScript",stars:"3,893",forks:"522",starup:"179"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,332",forks:"14,122",starup:"979"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,595",forks:"7,445",starup:"611"}],"TypeScript-monthly":[{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,407",forks:"1,030",starup:"1,684"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,417",forks:"325",starup:"2,721"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,788",forks:"4,033",starup:"6,979"},{title:`cohere-ai /

      cohere-toolkit`,owner:"cohere-ai",name:"cohere-toolkit",avatar:"https://avatars.githubusercontent.com/u/39441856?s=40&v=4",path:"/cohere-ai/cohere-toolkit",link:"https://github.com/cohere-ai/cohere-toolkit",description:"Cohere Toolkit is a collection of prebuilt components enabling users to quickly build and deploy RAG applications.",language:"TypeScript",stars:"2,202",forks:"235",starup:"2,209"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,541",forks:"2,287",starup:"1,849"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,097",forks:"2,215",starup:"3,804"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,154",forks:"7,236",starup:"905"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"3,500",forks:"333",starup:"941"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,879",forks:"359",starup:"877"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,342",forks:"198",starup:"565"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,218",forks:"1,043",starup:"3,641"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,332",forks:"14,122",starup:"2,642"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"10,648",forks:"658",starup:"1,434"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,552",forks:"502",starup:"822"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,188",forks:"358",starup:"2,043"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,208",forks:"1,385",starup:"443"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,277",forks:"6,907",starup:"284"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"55,963",forks:"3,258",starup:"944"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"907",forks:"56",starup:"346"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,583",forks:"13,112",starup:"1,737"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,386",forks:"35,771",starup:"2,894"},{title:`measuredco /

      puck`,owner:"measuredco",name:"puck",avatar:"https://avatars.githubusercontent.com/u/985961?s=40&v=4",path:"/measuredco/puck",link:"https://github.com/measuredco/puck",description:"The visual editor for React",language:"TypeScript",stars:"4,608",forks:"223",starup:"444"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,832",forks:"1,612",starup:"2,887"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,749",forks:"1,329",starup:"843"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,541",forks:"178",starup:"1,032"}],"Vue-daily":[{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,108",forks:"728",starup:"57"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,443",forks:"2,770",starup:"19"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,541",forks:"1,363",starup:"6"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,102",forks:"1,210",starup:"6"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,408",forks:"1,410",starup:"6"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,655",forks:"11,169",starup:"21"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"335",forks:"82",starup:"17"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,135",forks:"876",starup:"3"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,671",forks:"2,589",starup:"9"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,013",forks:"284",starup:"1"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,116",forks:"830",starup:"9"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,199",forks:"731",starup:"8"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,503",forks:"1,421",starup:"8"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,158",forks:"177",starup:"11"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,771",forks:"760",starup:"8"},{title:`vueComponent /

      ant-design-vue-pro`,owner:"vueComponent",name:"ant-design-vue-pro",avatar:"https://avatars.githubusercontent.com/u/5404542?s=40&v=4",path:"/vueComponent/ant-design-vue-pro",link:"https://github.com/vueComponent/ant-design-vue-pro",description:"👨🏻‍💻👩🏻‍💻 Use Ant Design Vue like a Pro! (vue2)",language:"Vue",stars:"10,591",forks:"3,092",starup:"2"},{title:`aehyok /

      video2blog`,owner:"aehyok",name:"video2blog",avatar:"https://avatars.githubusercontent.com/u/5900140?s=40&v=4",path:"/aehyok/video2blog",link:"https://github.com/aehyok/video2blog",description:"视频转图文 AI 跨平台客户端（win mac linux） electron vite vue3 sqlite3 naive-ui",language:"Vue",stars:"89",forks:"11",starup:"5"},{title:`kevin2li /

      PDF-Guru`,owner:"kevin2li",name:"PDF-Guru",avatar:"https://avatars.githubusercontent.com/u/45037121?s=40&v=4",path:"/kevin2li/PDF-Guru",link:"https://github.com/kevin2li/PDF-Guru",description:"A Multi-purpose PDF file processing tool with a nice UI that supports merge, split, rotate, reorder, delete, scale, crop, watermark, encrypt/decrypt, bookmark, extract, compress, etc.",language:"Vue",stars:"1,481",forks:"128",starup:"1"},{title:`vant-ui /

      vant-demo`,owner:"vant-ui",name:"vant-demo",avatar:"https://avatars.githubusercontent.com/u/7237365?s=40&v=4",path:"/vant-ui/vant-demo",link:"https://github.com/vant-ui/vant-demo",description:"Collection of vant demos.",language:"Vue",stars:"1,928",forks:"1,166",starup:"0"},{title:`DataV-Team /

      DataV`,owner:"DataV-Team",name:"DataV",avatar:"https://avatars.githubusercontent.com/u/32119686?s=40&v=4",path:"/DataV-Team/DataV",link:"https://github.com/DataV-Team/DataV",description:"Vue数据可视化组件库（类似阿里DataV，大屏数据展示），提供SVG的边框及装饰、图表、水位图、飞线图等组件，简单易用，长期更新(React版已发布)",language:"Vue",stars:"8,758",forks:"1,748",starup:"1"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,425",forks:"378",starup:"6"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,706",forks:"401",starup:"6"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,820",forks:"12,466",starup:"8"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,905",forks:"764",starup:"4"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"230",forks:"120",starup:"2"}],"Vue-weekly":[{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,321",forks:"209",starup:"143"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,843",forks:"251",starup:"47"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,108",forks:"728",starup:"91"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,671",forks:"2,589",starup:"71"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,313",forks:"706",starup:"48"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,614",forks:"218",starup:"94"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"118",forks:"1,246",starup:"3"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,199",forks:"731",starup:"68"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"796",forks:"204",starup:"40"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"335",forks:"82",starup:"37"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,655",forks:"11,169",starup:"93"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,408",forks:"1,410",starup:"27"},{title:`wilfredinni /

      python-cheatsheet`,owner:"wilfredinni",name:"python-cheatsheet",avatar:"https://avatars.githubusercontent.com/u/23016174?s=40&v=4",path:"/wilfredinni/python-cheatsheet",link:"https://github.com/wilfredinni/python-cheatsheet",description:"All-inclusive Python cheatsheet",language:"Vue",stars:"4,076",forks:"1,249",starup:"22"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,563",forks:"98",starup:"59"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,443",forks:"2,770",starup:"97"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,231",forks:"3,610",starup:"40"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,503",forks:"1,421",starup:"51"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"238",forks:"42",starup:"48"},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",link:"https://github.com/Yin-Hongwei/music-website",description:"🎧 Vue + SpringBoot + MyBatis 音乐网站",language:"Vue",stars:"5,014",forks:"1,403",starup:"28"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,191",forks:"486",starup:"33"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,752",forks:"1,769",starup:"28"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,158",forks:"177",starup:"65"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,726",forks:"146",starup:"39"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,729",forks:"1,094",starup:"16"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,984",forks:"14,626",starup:"16"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,915",forks:"1,931",starup:"4,930"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,623",forks:"1,939",starup:"5,790"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,270",forks:"1,030",starup:"659"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,752",forks:"1,215",starup:"464"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,722",forks:"317",starup:"696"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,614",forks:"218",starup:"137"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,671",forks:"2,589",starup:"257"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,771",forks:"760",starup:"184"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"435",forks:"79",starup:"156"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"118",forks:"1,246",starup:"5"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,321",forks:"209",starup:"341"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,503",forks:"1,421",starup:"168"},{title:`Zhouqluo /

      bilidown-web`,owner:"Zhouqluo",name:"bilidown-web",avatar:"https://avatars.githubusercontent.com/u/86307617?s=40&v=4",path:"/Zhouqluo/bilidown-web",link:"https://github.com/Zhouqluo/bilidown-web",description:"在线下载b站视频",language:"Vue",stars:"245",forks:"44",starup:"183"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"796",forks:"204",starup:"124"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"269",forks:"39",starup:"113"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,158",forks:"177",starup:"316"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"774",forks:"67",starup:"160"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,814",forks:"4,119",starup:"42"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,707",forks:"3,708",starup:"152"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,701",forks:"286",starup:"263"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,191",forks:"486",starup:"128"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"230",forks:"120",starup:"36"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"993",forks:"106",starup:"351"},{title:`justboil /

      admin-one-vue-tailwind`,owner:"justboil",name:"admin-one-vue-tailwind",avatar:"https://avatars.githubusercontent.com/u/1877513?s=40&v=4",path:"/justboil/admin-one-vue-tailwind",link:"https://github.com/justboil/admin-one-vue-tailwind",description:"Free Vue.js 3.x Tailwind 3.x admin dashboard template with dark mode. Vite builds. Pinia state. Laravel integration available",language:"Vue",stars:"2,008",forks:"369",starup:"46"},{title:`xunlu129 /

      teriteri-client`,owner:"xunlu129",name:"teriteri-client",avatar:"https://avatars.githubusercontent.com/u/122542082?s=40&v=4",path:"/xunlu129/teriteri-client",link:"https://github.com/xunlu129/teriteri-client",description:"一个基于 vue3 搭建的视频网站平台客户端",language:"Vue",stars:"234",forks:"38",starup:"90"}]},rt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},st=X("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=C({__name:"index",setup(x){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function k(g){return g.sort((n,s)=>r(s.starup)-r(n.starup))}P([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=Y();return(g,n)=>{const s=F,d=E,v=L,w=G,i=$("LazyImage"),a=O,o=q,T=N,V=at,R=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(s,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>j(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>j(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>j(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(Z,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",rt,[st,(l(!0),S(Q,null,K(u(h),(m,z)=>(l(),J(T,{key:z,index:z,repo:m,onMouseenter:u(f)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),J(V,{key:1,data:u(h)},null,8,["data"])):(l(),J(R,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
