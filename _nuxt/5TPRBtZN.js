import{_ as B}from"./Cf_IYnp7.js";import{_ as E}from"./ZIsHYs2X.js";import{_ as L}from"./DrLumN34.js";import D from"./ChsV3SZ6.js";import{_ as N,a as O}from"./Dwi8gPH-.js";import{_ as U}from"./BaCfDVf4.js";import{s as K,u as J,a as z,b as _,i as q,c as H}from"./lOKKcdlv.js";import{d as R,s}from"./CYcXzR8Z.js";import{n as P,q as F,h as I,o as l,c as S,s as G,r as A,u as Y,b as c,w as y,T as $,v as u,x as V,F as Z,y as Q,z as C,a as X}from"./Bu6s-nuZ.js";import{l as tt}from"./p2-M2djV.js";import"./Cefq0h7B.js";import"./UCXE8nMZ.js";import"./BQkc-AXV.js";import"./eub2WGAo.js";const at=P({__name:"Chart",props:{data:{}},setup(T){const p=T,{data:e}=F(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(K),t=J("仓库飙升榜",h);function k(n){const r=R(n);r.sort((a,o)=>{const x=s(a.starup)+s(a.stars)+s(a.forks),j=s(o.starup)+s(o.stars)+s(o.forks);return x-j});const[d,v,w,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:f}=z(t,_);I(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:G({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(T){const p=T,{data:e}=F(p),t=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=z(t,_);function f(n){const r=R(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:q(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}I(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:G({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,874",forks:"11,168",starup:"64"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"5,176",forks:"365",starup:"94"},{title:`xcanwin /

      KeepChatGPT`,owner:"xcanwin",name:"KeepChatGPT",avatar:"https://avatars.githubusercontent.com/u/14187349?s=40&v=4",path:"/xcanwin/KeepChatGPT",link:"https://github.com/xcanwin/KeepChatGPT",description:"这是一款提高ChatGPT的数据安全能力和效率的插件。并且免费共享大量创新功能，如：自动刷新、保持活跃、数据安全、取消审计、克隆对话、言无不尽、净化页面、展示大屏、拦截跟踪、日新月异、明察秋毫等。让我们的AI体验无比安全、顺畅、丝滑、高效、简洁。",language:"JavaScript",stars:"13,919",forks:"709",starup:"20"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"337",forks:"1,664",starup:"19"},{title:`dropzone /

      dropzone`,owner:"dropzone",name:"dropzone",avatar:"https://avatars.githubusercontent.com/u/133277?s=40&v=4",path:"/dropzone/dropzone",link:"https://github.com/dropzone/dropzone",description:"Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.",language:"JavaScript",stars:"17,898",forks:"3,290",starup:"3"},{title:`kunjgit /

      GameZone`,owner:"kunjgit",name:"GameZone",avatar:"https://avatars.githubusercontent.com/u/103763618?s=40&v=4",path:"/kunjgit/GameZone",link:"https://github.com/kunjgit/GameZone",description:"This open source repository contains collection of games build on basic tech stacks in web development . Use your creativity and build your own game and contribute to the repository by making PR 🎮",language:"JavaScript",stars:"449",forks:"692",starup:"6"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"584",forks:"2,679",starup:"7"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"219",forks:"825",starup:"12"},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",link:"https://github.com/cypress-io/cypress",description:"Fast, easy and reliable testing for anything that runs in a browser.",language:"JavaScript",stars:"46,290",forks:"3,124",starup:"5"},{title:`WordPress /

      gutenberg`,owner:"WordPress",name:"gutenberg",avatar:"https://avatars.githubusercontent.com/u/272444?s=40&v=4",path:"/WordPress/gutenberg",link:"https://github.com/WordPress/gutenberg",description:"The Block Editor project for WordPress and beyond. Plugin is available from the official repository.",language:"JavaScript",stars:"9,918",forks:"3,964",starup:"1"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,255",forks:"1,604",starup:"5"},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",link:"https://github.com/webpack/webpack",description:'A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.',language:"JavaScript",stars:"64,256",forks:"8,729",starup:"6"},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",link:"https://github.com/nodejs/node",description:"Node.js JavaScript runtime ✨🐢🚀✨",language:"JavaScript",stars:"104,521",forks:"28,192",starup:"13"},{title:`airbnb /

      javascript`,owner:"airbnb",name:"javascript",avatar:"https://avatars.githubusercontent.com/u/45469?s=40&v=4",path:"/airbnb/javascript",link:"https://github.com/airbnb/javascript",description:"JavaScript Style Guide",language:"JavaScript",stars:"142,526",forks:"26,235",starup:"16"},{title:`feiyun0112 /

      Gradio.Net`,owner:"feiyun0112",name:"Gradio.Net",avatar:"https://avatars.githubusercontent.com/u/10190938?s=40&v=4",path:"/feiyun0112/Gradio.Net",link:"https://github.com/feiyun0112/Gradio.Net",description:"Gradio for .NET – a port of Gradio, an open-source Python package that allows you to quickly build a demo or web application for your machine learning model, API, or any arbitrary Python function. Gradio for .NET – 基于 Gradio 的 .NET 移植，Gradio 是一个开源 Python 包，允许你为机器学习模型、API 或任何任意 Python 函数快速构建演示或 Web 应用程序。",language:"JavaScript",stars:"111",forks:"7",starup:"8"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,700",forks:"3,493",starup:"10"},{title:`jadehh /

      TVSpider`,owner:"jadehh",name:"TVSpider",avatar:"https://avatars.githubusercontent.com/u/20532462?s=40&v=4",path:"/jadehh/TVSpider",link:"https://github.com/jadehh/TVSpider",description:"影视和猫影视爬虫仓库",language:"JavaScript",stars:"232",forks:"186",starup:"2"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,262",forks:"7,274",starup:"10"},{title:`VincentGarreau /

      particles.js`,owner:"VincentGarreau",name:"particles.js",avatar:"https://avatars.githubusercontent.com/u/961898?s=40&v=4",path:"/VincentGarreau/particles.js",link:"https://github.com/VincentGarreau/particles.js",description:"A lightweight JavaScript library for creating particles",language:"JavaScript",stars:"28,530",forks:"4,806",starup:"8"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,502",forks:"1,822",starup:"20"},{title:`mediacms-io /

      mediacms`,owner:"mediacms-io",name:"mediacms",avatar:"https://avatars.githubusercontent.com/u/1027116?s=40&v=4",path:"/mediacms-io/mediacms",link:"https://github.com/mediacms-io/mediacms",description:"MediaCMS is a modern, fully featured open source video and media CMS, written in Python/Django and React, featuring a REST API.",language:"JavaScript",stars:"2,408",forks:"437",starup:"9"},{title:`hiteshchoudhary /

      chai-aur-react`,owner:"hiteshchoudhary",name:"chai-aur-react",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-aur-react",link:"https://github.com/hiteshchoudhary/chai-aur-react",description:"chai aur react series on youtube",language:"JavaScript",stars:"5,413",forks:"720",starup:"16"},{title:`adrianhajdin /

      3D_portfolio`,owner:"adrianhajdin",name:"3D_portfolio",avatar:"https://avatars.githubusercontent.com/u/67959015?s=40&v=4",path:"/adrianhajdin/3D_portfolio",link:"https://github.com/adrianhajdin/3D_portfolio",description:"Let's build a cool 3D website together! You'll learn how to make a portfolio with fun interactive parts, like a floating island and a fox that moves when you type. It'll allow you to show off your skills and get a job!",language:"JavaScript",stars:"855",forks:"183",starup:"4"},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",link:"https://github.com/anuraghazra/github-readme-stats",description:"⚡ Dynamically generated stats for your github readmes",language:"JavaScript",stars:"65,666",forks:"21,164",starup:"33"},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",link:"https://github.com/github/docs",description:"The open-source repo for docs.github.com",language:"JavaScript",stars:"15,647",forks:"58,250",starup:"3"}],"JavaScript-weekly":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,765",forks:"3,375",starup:"822"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,874",forks:"11,168",starup:"231"},{title:`FortAwesome /

      Font-Awesome`,owner:"FortAwesome",name:"Font-Awesome",avatar:"https://avatars.githubusercontent.com/u/132895?s=40&v=4",path:"/FortAwesome/Font-Awesome",link:"https://github.com/FortAwesome/Font-Awesome",description:"The iconic SVG, font, and CSS toolkit",language:"JavaScript",stars:"73,173",forks:"12,180",starup:"51"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,450",forks:"1,261",starup:"243"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,222",forks:"3,509",starup:"49"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,302",forks:"2,965",starup:"92"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,304",forks:"3,404",starup:"283"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,905",forks:"343",starup:"270"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, LLM and vector store agnostic.",language:"JavaScript",stars:"18,478",forks:"2,774",starup:"273"},{title:`Chalarangelo /

      30-seconds-of-code`,owner:"Chalarangelo",name:"30-seconds-of-code",avatar:"https://avatars.githubusercontent.com/u/8281875?s=40&v=4",path:"/Chalarangelo/30-seconds-of-code",link:"https://github.com/Chalarangelo/30-seconds-of-code",description:"Short code snippets for all your development needs",language:"JavaScript",stars:"119,802",forks:"11,892",starup:"198"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,622",forks:"35,154",starup:"190"},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/9736046?s=40&v=4",path:"/FreeTubeApp/FreeTube",link:"https://github.com/FreeTubeApp/FreeTube",description:"An Open Source YouTube app for privacy",language:"JavaScript",stars:"12,100",forks:"734",starup:"106"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"5,176",forks:"365",starup:"527"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"584",forks:"2,679",starup:"79"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"861",forks:"3,427",starup:"72"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,882",forks:"1,796",starup:"54"},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",link:"https://github.com/maboloshi/github-chinese",description:"GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",language:"JavaScript",stars:"3,435",forks:"207",starup:"211"},{title:`leafTheFish /

      DeathNote`,owner:"leafTheFish",name:"DeathNote",avatar:"https://avatars.githubusercontent.com/u/103831852?s=40&v=4",path:"/leafTheFish/DeathNote",link:"https://github.com/leafTheFish/DeathNote",description:"",language:"JavaScript",stars:"2,686",forks:"865",starup:"52"},{title:`V2RaySSR /

      Free-VLESS`,owner:"V2RaySSR",name:"Free-VLESS",avatar:"https://avatars.githubusercontent.com/u/59167743?s=40&v=4",path:"/V2RaySSR/Free-VLESS",link:"https://github.com/V2RaySSR/Free-VLESS",description:"通过 Cloudflare，免费部署 VLESS节点",language:"JavaScript",stars:"110",forks:"44",starup:"34"},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",link:"https://github.com/github/docs",description:"The open-source repo for docs.github.com",language:"JavaScript",stars:"15,647",forks:"58,250",starup:"36"},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",link:"https://github.com/jaywcjlove/awesome-mac",description:" Now we have become very big, Different from the original idea. Collect premium software in various categories.",language:"JavaScript",stars:"72,224",forks:"6,137",starup:"175"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,302",forks:"11,651",starup:"53"},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",link:"https://github.com/gorhill/uBlock",description:"uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.",language:"JavaScript",stars:"43,868",forks:"2,944",starup:"172"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"219",forks:"825",starup:"53"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,829",forks:"8,837",starup:"169"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,842",forks:"3,147",starup:"4,534"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,344",forks:"1,599",starup:"2,958"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,172",forks:"222",starup:"1,128"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"675",forks:"117",starup:"327"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,905",forks:"343",starup:"1,322"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,764",forks:"45,561",starup:"2,056"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,227",forks:"3,366",starup:"830"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,464",forks:"1,182",starup:"205"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,915",forks:"1,009",starup:"413"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,262",forks:"7,274",starup:"516"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,820",forks:"26,046",starup:"1,253"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,206",forks:"1,868",starup:"1,050"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,943",forks:"5,931",starup:"908"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,612",forks:"1,554",starup:"172"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,765",forks:"3,375",starup:"1,208"},{title:`yonggekkk /

      Cloudflare_vless_trojan`,owner:"yonggekkk",name:"Cloudflare_vless_trojan",avatar:"https://avatars.githubusercontent.com/u/121604513?s=40&v=4",path:"/yonggekkk/Cloudflare_vless_trojan",link:"https://github.com/yonggekkk/Cloudflare_vless_trojan",description:"Cloudflare代理脚本，支持workers与pages两种形式部署，实现Vless与Trojan两种协议。CF优选域名、优选官方IP反代IP多平台一键脚本",language:"JavaScript",stars:"2,819",forks:"1,873",starup:"437"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,035",forks:"16,382",starup:"213"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,110",forks:"1,121",starup:"285"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,700",forks:"3,493",starup:"455"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,553",forks:"1,866",starup:"395"},{title:`IvanGlinkin /

      CCTV`,owner:"IvanGlinkin",name:"CCTV",avatar:"https://avatars.githubusercontent.com/u/64857726?s=40&v=4",path:"/IvanGlinkin/CCTV",link:"https://github.com/IvanGlinkin/CCTV",description:"Close-Circuit Telegram Vision revolutionizes location tracking with its open-source design and Telegram API integration. Offering precise tracking within 50-100 meters, users can monitor others in real-time for logistics or safety, redefining how we navigate our surroundings",language:"JavaScript",stars:"2,167",forks:"302",starup:"2,144"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,304",forks:"3,404",starup:"714"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,622",forks:"35,154",starup:"738"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,624",forks:"15,597",starup:"588"},{title:`kkevsekk1 /

      AutoX`,owner:"kkevsekk1",name:"AutoX",avatar:"https://avatars.githubusercontent.com/u/16631944?s=40&v=4",path:"/kkevsekk1/AutoX",link:"https://github.com/kkevsekk1/AutoX",description:"A UiAutomator on android, does not need root access(安卓平台上的JavaScript自动化工具)",language:"JavaScript",stars:"6,391",forks:"1,599",starup:"334"}],"TypeScript-daily":[{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,551",forks:"177",starup:"41"},{title:`digital-go-jp /

      design-system-example-components`,owner:"digital-go-jp",name:"design-system-example-components",avatar:"https://avatars.githubusercontent.com/u/108916341?s=40&v=4",path:"/digital-go-jp/design-system-example-components",link:"https://github.com/digital-go-jp/design-system-example-components",description:"デジタル庁デザインシステムのサンプルコンポーネント",language:"TypeScript",stars:"297",forks:"9",starup:"39"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,074",forks:"4,233",starup:"128"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,070",forks:"1,466",starup:"39"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,531",forks:"161",starup:"35"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,783",forks:"133",starup:"81"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,518",forks:"496",starup:"49"},{title:`cooderl /

      wewe-rss`,owner:"cooderl",name:"wewe-rss",avatar:"https://avatars.githubusercontent.com/u/152949883?s=40&v=4",path:"/cooderl/wewe-rss",link:"https://github.com/cooderl/wewe-rss",description:"🤗更优雅的微信公众号订阅方式，支持私有化部署、微信公众号RSS生成（基于微信读书）v2.x",language:"TypeScript",stars:"3,508",forks:"635",starup:"56"},{title:`element-plus /

      element-plus`,owner:"element-plus",name:"element-plus",avatar:"https://avatars.githubusercontent.com/u/15975785?s=40&v=4",path:"/element-plus/element-plus",link:"https://github.com/element-plus/element-plus",description:"🎉 A Vue.js 3 UI Library made by Element team",language:"TypeScript",stars:"23,452",forks:"14,460",starup:"5"},{title:`vuejs /

      devtools`,owner:"vuejs",name:"devtools",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/vuejs/devtools",link:"https://github.com/vuejs/devtools",description:"⚙️ Browser devtools extension for debugging Vue.js applications.",language:"TypeScript",stars:"24,421",forks:"4,122",starup:"1"},{title:`outline /

      outline`,owner:"outline",name:"outline",avatar:"https://avatars.githubusercontent.com/u/380914?s=40&v=4",path:"/outline/outline",link:"https://github.com/outline/outline",description:"The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",language:"TypeScript",stars:"25,547",forks:"2,056",starup:"45"},{title:`MiningCattiva /

      x-spider`,owner:"MiningCattiva",name:"x-spider",avatar:"https://avatars.githubusercontent.com/u/45550579?s=40&v=4",path:"/MiningCattiva/x-spider",link:"https://github.com/MiningCattiva/x-spider",description:"A spider for X (Twitter)",language:"TypeScript",stars:"682",forks:"50",starup:"20"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"754",forks:"948",starup:"20"},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",link:"https://github.com/nuxt/nuxt",description:"The Intuitive Vue Framework.",language:"TypeScript",stars:"52,541",forks:"4,809",starup:"19"},{title:`udecode /

      plate`,owner:"udecode",name:"plate",avatar:"https://avatars.githubusercontent.com/u/19695832?s=40&v=4",path:"/udecode/plate",link:"https://github.com/udecode/plate",description:"The rich-text editor for React.",language:"TypeScript",stars:"8,316",forks:"594",starup:"87"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,795",forks:"2,310",starup:"41"},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",link:"https://github.com/logto-io/logto",description:"🧑‍🚀 The better identity infrastructure for developers and the open-source alternative to Auth0.",language:"TypeScript",stars:"7,438",forks:"364",starup:"9"},{title:`nolly-studio /

      cult-ui`,owner:"nolly-studio",name:"cult-ui",avatar:"https://avatars.githubusercontent.com/u/25993686?s=40&v=4",path:"/nolly-studio/cult-ui",link:"https://github.com/nolly-studio/cult-ui",description:"Components crafted for Design Engineers. Styled using Tailwind CSS, fully compatible with Shadcn, and easy to integrate—just copy and paste. Open source and TypeScript ready.",language:"TypeScript",stars:"356",forks:"15",starup:"45"},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",link:"https://github.com/tldraw/tldraw",description:"SDK for creating whiteboards and canvas experiences on the web.",language:"TypeScript",stars:"33,401",forks:"1,991",starup:"28"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,460",forks:"1,127",starup:"45"},{title:`webprodigies /

      corinna-ai`,owner:"webprodigies",name:"corinna-ai",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/corinna-ai",link:"https://github.com/webprodigies/corinna-ai",description:"Ai Chatbot that acts like a sales rep",language:"TypeScript",stars:"287",forks:"80",starup:"56"},{title:`adrianhajdin /

      event_platform`,owner:"adrianhajdin",name:"event_platform",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/event_platform",link:"https://github.com/adrianhajdin/event_platform",description:"Build an event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout, and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk, and Stripe.",language:"TypeScript",stars:"727",forks:"173",starup:"5"},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",link:"https://github.com/n8n-io/n8n",description:"Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services.",language:"TypeScript",stars:"41,608",forks:"5,268",starup:"30"},{title:`didi /

      LogicFlow`,owner:"didi",name:"LogicFlow",avatar:"https://avatars.githubusercontent.com/u/4093984?s=40&v=4",path:"/didi/LogicFlow",link:"https://github.com/didi/LogicFlow",description:"A flow chart editing framework focusing on business customization. 专注于业务自定义的流程图编辑框架，支持实现脑图、ER图、UML、工作流等各种图编辑场景。",language:"TypeScript",stars:"7,020",forks:"986",starup:"4"},{title:`microsoft /

      TypeScript`,owner:"microsoft",name:"TypeScript",avatar:"https://avatars.githubusercontent.com/u/4226954?s=40&v=4",path:"/microsoft/TypeScript",link:"https://github.com/microsoft/TypeScript",description:"TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",language:"TypeScript",stars:"98,512",forks:"12,233",starup:"20"}],"TypeScript-weekly":[{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,054",forks:"711",starup:"933"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,783",forks:"133",starup:"499"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,049",forks:"413",starup:"1,505"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,342",forks:"1,605",starup:"774"},{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"2,116",forks:"178",starup:"1,783"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,460",forks:"1,127",starup:"683"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"880",forks:"63",starup:"339"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,227",forks:"777",starup:"506"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,908",forks:"568",starup:"1,479"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,593",forks:"444",starup:"871"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,518",forks:"496",starup:"415"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,883",forks:"24,762",starup:"101"},{title:`hoarder-app /

      hoarder`,owner:"hoarder-app",name:"hoarder",avatar:"https://avatars.githubusercontent.com/u/2418637?s=40&v=4",path:"/hoarder-app/hoarder",link:"https://github.com/hoarder-app/hoarder",description:"A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search",language:"TypeScript",stars:"1,690",forks:"49",starup:"297"},{title:`labring /

      FastGPT`,owner:"labring",name:"FastGPT",avatar:"https://avatars.githubusercontent.com/u/50446880?s=40&v=4",path:"/labring/FastGPT",link:"https://github.com/labring/FastGPT",description:"FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.",language:"TypeScript",stars:"14,041",forks:"3,608",starup:"292"},{title:`angular /

      components`,owner:"angular",name:"components",avatar:"https://avatars.githubusercontent.com/u/4450522?s=40&v=4",path:"/angular/components",link:"https://github.com/angular/components",description:"Component infrastructure and Material Design components for Angular",language:"TypeScript",stars:"24,138",forks:"6,670",starup:"25"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,403",forks:"377",starup:"833"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,311",forks:"501",starup:"192"},{title:`EvolutionAPI /

      evolution-api`,owner:"EvolutionAPI",name:"evolution-api",avatar:"https://avatars.githubusercontent.com/u/24706726?s=40&v=4",path:"/EvolutionAPI/evolution-api",link:"https://github.com/EvolutionAPI/evolution-api",description:"Evolution API is an open-source WhatsApp integration API",language:"TypeScript",stars:"756",forks:"418",starup:"30"},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vitejs/vite",link:"https://github.com/vitejs/vite",description:"Next generation frontend tooling. It's fast!",language:"TypeScript",stars:"65,390",forks:"5,809",starup:"154"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"30,093",forks:"4,722",starup:"246"},{title:`bluesky-social /

      atproto`,owner:"bluesky-social",name:"atproto",avatar:"https://avatars.githubusercontent.com/u/4898225?s=40&v=4",path:"/bluesky-social/atproto",link:"https://github.com/bluesky-social/atproto",description:"Social networking technology created by Bluesky",language:"TypeScript",stars:"5,748",forks:"395",starup:"24"},{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,551",forks:"177",starup:"1,019"},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",link:"https://github.com/shadcn-ui/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",language:"TypeScript",stars:"59,951",forks:"3,327",starup:"564"},{title:`magicuidesign /

      magicui`,owner:"magicuidesign",name:"magicui",avatar:"https://avatars.githubusercontent.com/u/16860528?s=40&v=4",path:"/magicuidesign/magicui",link:"https://github.com/magicuidesign/magicui",description:"UI Library for Design Engineers. Animated components and effects you can copy and paste into your apps. Free. Open Source.",language:"TypeScript",stars:"3,264",forks:"101",starup:"1,294"},{title:`AIsouler /

      GKD_subscription`,owner:"AIsouler",name:"GKD_subscription",avatar:"https://avatars.githubusercontent.com/u/57941037?s=40&v=4",path:"/AIsouler/GKD_subscription",link:"https://github.com/AIsouler/GKD_subscription",description:"GKD 第三方订阅规则",language:"TypeScript",stars:"894",forks:"40",starup:"185"}],"TypeScript-monthly":[{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,550",forks:"1,265",starup:"6,196"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,908",forks:"568",starup:"5,038"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,074",forks:"4,233",starup:"6,228"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,738",forks:"1,160",starup:"1,980"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,403",forks:"377",starup:"3,056"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,532",forks:"2,252",starup:"4,060"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,227",forks:"127",starup:"1,604"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,368",forks:"6,921",starup:"340"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,998",forks:"1,106",starup:"4,421"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,049",forks:"413",starup:"1,921"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,105",forks:"1,344",starup:"1,070"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,912",forks:"4,421",starup:"873"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,795",forks:"2,310",starup:"2,087"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,905",forks:"685",starup:"1,811"},{title:`bitwarden /

      clients`,owner:"bitwarden",name:"clients",avatar:"https://avatars.githubusercontent.com/u/1190944?s=40&v=4",path:"/bitwarden/clients",link:"https://github.com/bitwarden/clients",description:"Bitwarden client applications (web, browser extension, desktop, and cli)",language:"TypeScript",stars:"8,506",forks:"1,120",starup:"216"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"56,176",forks:"3,266",starup:"1,040"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"65,981",forks:"5,413",starup:"719"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,417",forks:"7,252",starup:"1,201"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,272",forks:"363",starup:"2,076"},{title:`Dokploy /

      dokploy`,owner:"Dokploy",name:"dokploy",avatar:"https://avatars.githubusercontent.com/u/47042324?s=40&v=4",path:"/Dokploy/dokploy",link:"https://github.com/Dokploy/dokploy",description:"Open Source Alternative to Vercel, Netlify and Heroku.",language:"TypeScript",stars:"3,615",forks:"178",starup:"2,685"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,518",forks:"496",starup:"737"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,531",forks:"161",starup:"748"},{title:`openai /

      openai-assistants-quickstart`,owner:"openai",name:"openai-assistants-quickstart",avatar:"https://avatars.githubusercontent.com/u/25421602?s=40&v=4",path:"/openai/openai-assistants-quickstart",link:"https://github.com/openai/openai-assistants-quickstart",description:"OpenAI Assistants API quickstart with Next.js.",language:"TypeScript",stars:"971",forks:"146",starup:"970"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,255",forks:"1,396",starup:"307"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,897",forks:"56,763",starup:"2,840"}],"Vue-daily":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,181",forks:"2,016",starup:"61"},{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"992",forks:"268",starup:"64"},{title:`wwwAngHua /

      KingStudy`,owner:"wwwAngHua",name:"KingStudy",avatar:"",path:"/wwwAngHua/KingStudy",link:"https://github.com/wwwAngHua/KingStudy",description:"A personal homepage website that includes blog, portfolio, courses, and photo wall display functions.",language:"Vue",stars:"66",forks:"8",starup:"14"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,486",forks:"1,058",starup:"0"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,275",forks:"3,613",starup:"5"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,550",forks:"2,787",starup:"6"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,848",forks:"1,227",starup:"13"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,718",forks:"2,595",starup:"2"},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",link:"https://github.com/hslr-s/sun-panel",description:"A server, NAS navigation panel, Homepage, browser homepage. | 一个服务器、NAS导航面板、Homepage、浏览器首页。",language:"Vue",stars:"2,085",forks:"206",starup:"3"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,759",forks:"1,101",starup:"4"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,617",forks:"100",starup:"3"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,738",forks:"406",starup:"2"},{title:`CareyWang /

      sub-web`,owner:"CareyWang",name:"sub-web",avatar:"https://avatars.githubusercontent.com/u/33325726?s=40&v=4",path:"/CareyWang/sub-web",link:"https://github.com/CareyWang/sub-web",description:"",language:"Vue",stars:"4,726",forks:"1,773",starup:"3"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,238",forks:"580",starup:"6"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"488",forks:"88",starup:"4"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,732",forks:"3,708",starup:"2"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,582",forks:"1,378",starup:"2"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,053",forks:"260",starup:"35"},{title:`ifzc /

      Shkjem`,owner:"ifzc",name:"Shkjem",avatar:"https://avatars.githubusercontent.com/u/30067329?s=40&v=4",path:"/ifzc/Shkjem",link:"https://github.com/ifzc/Shkjem",description:"基于Vue&ElementUI的企业官网",language:"Vue",stars:"916",forks:"322",starup:"2"},{title:`antfu-collective /

      icones`,owner:"antfu-collective",name:"icones",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/antfu-collective/icones",link:"https://github.com/antfu-collective/icones",description:"⚡️ Icon Explorer with Instant searching, powered by Iconify",language:"Vue",stars:"4,875",forks:"236",starup:"2"},{title:`kingwrcy /

      discussion`,owner:"kingwrcy",name:"discussion",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/discussion",link:"https://github.com/kingwrcy/discussion",description:"极简论坛",language:"Vue",stars:"87",forks:"8",starup:"37"},{title:`fre123-com /

      fre123-nav`,owner:"fre123-com",name:"fre123-nav",avatar:"https://avatars.githubusercontent.com/u/132316076?s=40&v=4",path:"/fre123-com/fre123-nav",link:"https://github.com/fre123-com/fre123-nav",description:"FRE123 免费资源共享平台导航，一键搭建你的导航网站！",language:"Vue",stars:"195",forks:"100",starup:"2"},{title:`vueComponent /

      ant-design-vue-pro`,owner:"vueComponent",name:"ant-design-vue-pro",avatar:"https://avatars.githubusercontent.com/u/5404542?s=40&v=4",path:"/vueComponent/ant-design-vue-pro",link:"https://github.com/vueComponent/ant-design-vue-pro",description:"👨🏻‍💻👩🏻‍💻 Use Ant Design Vue like a Pro! (vue2)",language:"Vue",stars:"10,605",forks:"3,092",starup:"2"},{title:`KlausSchaefers /

      quant-ux`,owner:"KlausSchaefers",name:"quant-ux",avatar:"https://avatars.githubusercontent.com/u/7108416?s=40&v=4",path:"/KlausSchaefers/quant-ux",link:"https://github.com/KlausSchaefers/quant-ux",description:"Quant-UX - Prototype, Test and Learn",language:"Vue",stars:"1,780",forks:"186",starup:"3"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,429",forks:"221",starup:"9"}],"Vue-weekly":[{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,550",forks:"2,787",starup:"98"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,429",forks:"221",starup:"96"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,250",forks:"185",starup:"77"},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",link:"https://github.com/viarotel-org/escrcpy",description:"📱 Graphical Scrcpy to display and control Android, devices powered by Electron. | 使用图形化的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。",language:"Vue",stars:"1,557",forks:"104",starup:"48"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,989",forks:"1,621",starup:"55"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,434",forks:"4,046",starup:"121"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"488",forks:"88",starup:"48"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,582",forks:"1,378",starup:"42"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,382",forks:"720",starup:"62"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,053",forks:"260",starup:"250"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,968",forks:"776",starup:"66"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,759",forks:"1,101",starup:"31"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,148",forks:"1,211",starup:"41"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,176",forks:"735",starup:"60"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"510",forks:"77",starup:"30"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,275",forks:"3,613",starup:"45"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,961",forks:"813",starup:"22"},{title:`bobvinch /

      comfyui-webdemo`,owner:"bobvinch",name:"comfyui-webdemo",avatar:"https://avatars.githubusercontent.com/u/156988167?s=40&v=4",path:"/bobvinch/comfyui-webdemo",link:"https://github.com/bobvinch/comfyui-webdemo",description:"A very beautiful and simple front-end AI drawing demo using ComfyUI as the background, using Nuxt3 and Vuetify",language:"Vue",stars:"64",forks:"14",starup:"13"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,875",forks:"78",starup:"32"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"125",forks:"1,324",starup:"3"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,755",forks:"30,344",starup:"101"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,259",forks:"749",starup:"57"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,881",forks:"1,300",starup:"17"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"312",forks:"57",starup:"67"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,738",forks:"406",starup:"30"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,181",forks:"2,016",starup:"5,862"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,412",forks:"1,042",starup:"617"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,989",forks:"1,621",starup:"185"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,176",forks:"735",starup:"226"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,219",forks:"496",starup:"124"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,250",forks:"185",starup:"346"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,848",forks:"1,227",starup:"443"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,796",forks:"761",starup:"180"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,192",forks:"847",starup:"408"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,834",forks:"323",starup:"607"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"278",forks:"43",starup:"103"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,053",forks:"260",starup:"339"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,429",forks:"221",starup:"443"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"125",forks:"1,324",starup:"10"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"185",forks:"67",starup:"44"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,486",forks:"1,058",starup:"103"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,784",forks:"1,772",starup:"112"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,259",forks:"749",starup:"278"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,718",forks:"2,595",starup:"237"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,836",forks:"12,468",starup:"113"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,995",forks:"14,625",starup:"90"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,644",forks:"222",starup:"152"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,766",forks:"149",starup:"169"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,732",forks:"3,708",starup:"141"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,481",forks:"396",starup:"85"}]},st={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=X("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=P({__name:"index",setup(T){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function k(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}I([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=H();return(g,n)=>{const r=B,d=E,v=L,w=D,i=Y("LazyImage"),a=N,o=U,x=O,j=at,W=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>V(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>V(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>V(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c($,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Z,null,Q(u(h),(m,M)=>(l(),C(x,{key:M,index:M,repo:m,onMouseenter:u(f)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),C(j,{key:1,data:u(h)},null,8,["data"])):(l(),C(W,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
