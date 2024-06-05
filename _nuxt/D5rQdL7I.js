import{_ as W}from"./C-KNKYeG.js";import{_ as O}from"./DuAas2NW.js";import{_ as B}from"./Ct94Go7v.js";import D from"./CuYuhAP3.js";import{_ as F,a as E}from"./BU6Ed9PX.js";import{_ as H}from"./Unl5Wswa.js";import{s as U,u as _,a as z,b as I,i as q,c as K}from"./CNQ467p_.js";import{d as R,s as n}from"./CYcXzR8Z.js";import{n as M,q as L,h as J,o as l,c as S,s as N,r as x,u as Q,b as c,w,T as Y,v as u,x as V,F as $,y as X,z as j,a as Z}from"./6cHVukbe.js";import{l as tt}from"./p2-M2djV.js";import"./3gr6ZTD1.js";import"./BLxhcaa5.js";import"./BQkc-AXV.js";import"./Dqc-S9Kp.js";const at=M({__name:"Chart",props:{data:{}},setup(T){const p=T,{data:e}=L(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=_("仓库飙升榜",h);function k(s){const i=R(s);i.sort((a,o)=>{const C=n(a.starup)+n(a.stars)+n(a.forks),A=n(o.starup)+n(o.stars)+n(o.forks);return C-A});const[d,v,y,r]=i.reduce((a,o)=>(a[0].push(n(o.stars)),a[1].push(n(o.forks)),a[2].push(n(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=r,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:f}=z(t,I);J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,i)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:N({height:g})},null,4))}}),et=M({__name:"StarupChart",props:{data:{}},setup(T){const p=T,{data:e}=L(p),t=_("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=z(t,I);function f(s){const i=R(s);i.sort((r,a)=>n(r.starup)-n(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=i.map((r,a)=>(v.push(`${r.owner}/${r.name}`),{value:n(r.starup),name:`${r.owner}/${r.name}`,itemStyle:q(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,i)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:N({height:g})},null,4))}}),st={"JavaScript-daily":[{title:`TheRealJoelmatic /

      RemoveAdblockThing`,owner:"TheRealJoelmatic",name:"RemoveAdblockThing",avatar:"https://avatars.githubusercontent.com/u/78729990?s=40&v=4",path:"/TheRealJoelmatic/RemoveAdblockThing",link:"https://github.com/TheRealJoelmatic/RemoveAdblockThing",description:`The intrusive "Ad blocker are not allowed on YouTube" message is annoying. This open-source project aims to address this issue by providing a solution to bypass YouTube's ad blocker detection`,language:"JavaScript",stars:"5,223",forks:"287",starup:"31"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,515",forks:"540",starup:"12"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,760",forks:"2,526",starup:"46"},{title:`alexpinel /

      Dot`,owner:"alexpinel",name:"Dot",avatar:"https://avatars.githubusercontent.com/u/93524949?s=40&v=4",path:"/alexpinel/Dot",link:"https://github.com/alexpinel/Dot",description:"Text-To-Speech, RAG, and LLMs. All local!",language:"JavaScript",stars:"1,102",forks:"51",starup:"37"},{title:`ForrestKnight /

      3d-portfolio`,owner:"ForrestKnight",name:"3d-portfolio",avatar:"https://avatars.githubusercontent.com/u/15620553?s=40&v=4",path:"/ForrestKnight/3d-portfolio",link:"https://github.com/ForrestKnight/3d-portfolio",description:"",language:"JavaScript",stars:"56",forks:"11",starup:"8"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,264",forks:"2,373",starup:"50"},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",link:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",language:"JavaScript",stars:"77,014",forks:"4,006",starup:"21"},{title:`DataDog /

      documentation`,owner:"DataDog",name:"documentation",avatar:"https://avatars.githubusercontent.com/u/26976876?s=40&v=4",path:"/DataDog/documentation",link:"https://github.com/DataDog/documentation",description:"The source for Datadog's documentation site.",language:"JavaScript",stars:"412",forks:"996",starup:"1"},{title:`ckeditor /

      ckeditor5`,owner:"ckeditor",name:"ckeditor5",avatar:"https://avatars.githubusercontent.com/u/247363?s=40&v=4",path:"/ckeditor/ckeditor5",link:"https://github.com/ckeditor/ckeditor5",description:"Powerful rich text editor framework with a modular architecture, modern integrations, and features like collaborative editing.",language:"JavaScript",stars:"8,344",forks:"3,594",starup:"6"},{title:`gulpjs /

      gulp`,owner:"gulpjs",name:"gulp",avatar:"https://avatars.githubusercontent.com/u/425716?s=40&v=4",path:"/gulpjs/gulp",link:"https://github.com/gulpjs/gulp",description:"A toolkit to automate & enhance your workflow",language:"JavaScript",stars:"32,925",forks:"4,238",starup:"7"},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",link:"https://github.com/lodash/lodash",description:"A modern JavaScript utility library delivering modularity, performance, & extras.",language:"JavaScript",stars:"59,070",forks:"6,963",starup:"8"},{title:`prebid /

      Prebid.js`,owner:"prebid",name:"Prebid.js",avatar:"https://avatars.githubusercontent.com/u/31102355?s=40&v=4",path:"/prebid/Prebid.js",link:"https://github.com/prebid/Prebid.js",description:"Setup and manage header bidding advertising partners without writing code or confusing line items. Prebid.js is open source and free.",language:"JavaScript",stars:"1,250",forks:"2,003",starup:"0"},{title:`Asabeneh /

      30-Days-Of-JavaScript`,owner:"Asabeneh",name:"30-Days-Of-JavaScript",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-JavaScript",link:"https://github.com/Asabeneh/30-Days-Of-JavaScript",description:"30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",language:"JavaScript",stars:"41,331",forks:"9,595",starup:"24"},{title:`PanJiaChen /

      vue-admin-template`,owner:"PanJiaChen",name:"vue-admin-template",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-admin-template",link:"https://github.com/PanJiaChen/vue-admin-template",description:"a vue2.0 minimal admin template",language:"JavaScript",stars:"19,680",forks:"7,350",starup:"3"},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",link:"https://github.com/fastify/fastify",description:"Fast and low overhead web framework, for Node.js",language:"JavaScript",stars:"30,985",forks:"2,207",starup:"26"},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",link:"https://github.com/anuraghazra/github-readme-stats",description:"⚡ Dynamically generated stats for your github readmes",language:"JavaScript",stars:"65,761",forks:"21,213",starup:"42"},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",link:"https://github.com/nodejs/node",description:"Node.js JavaScript runtime ✨🐢🚀✨",language:"JavaScript",stars:"104,580",forks:"28,228",starup:"25"},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",link:"https://github.com/cypress-io/cypress",description:"Fast, easy and reliable testing for anything that runs in a browser.",language:"JavaScript",stars:"46,291",forks:"3,127",starup:"8"},{title:`limbopro /

      Profiles4limbo`,owner:"limbopro",name:"Profiles4limbo",avatar:"https://avatars.githubusercontent.com/u/53378607?s=40&v=4",path:"/limbopro/Profiles4limbo",link:"https://github.com/limbopro/Profiles4limbo",description:"毒奶自用，懒人配置文件（Quantumult X）：去广告分流规则、Tiktok解锁重写、VSCO解锁、神机分流、blackmatrix7分流规则。",language:"JavaScript",stars:"2,136",forks:"178",starup:"8"},{title:`Kong /

      insomnia`,owner:"Kong",name:"insomnia",avatar:"https://avatars.githubusercontent.com/u/587576?s=40&v=4",path:"/Kong/insomnia",link:"https://github.com/Kong/insomnia",description:"The open-source, cross-platform API client for GraphQL, REST, WebSockets, SSE and gRPC. With Cloud, Local and Git storage.",language:"JavaScript",stars:"33,414",forks:"1,869",starup:"17"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,587",forks:"4,739",starup:"9"},{title:`metaskills /

      experts`,owner:"metaskills",name:"experts",avatar:"https://avatars.githubusercontent.com/u/2381?s=40&v=4",path:"/metaskills/experts",link:"https://github.com/metaskills/experts",description:"Experts.js is the easiest way to create and deploy OpenAI's Assistants and link them together as Tools to create advanced Multi AI Agent Systems with expanded memory and attention to detail.",language:"JavaScript",stars:"743",forks:"38",starup:"22"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, model and vector store agnostic.",language:"JavaScript",stars:"18,598",forks:"2,803",starup:"33"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"51,052",forks:"4,585",starup:"58"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"9,154",forks:"389",starup:"15"}],"JavaScript-weekly":[{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"5,883",forks:"421",starup:"628"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,851",forks:"3,387",starup:"432"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,963",forks:"11,401",starup:"225"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,264",forks:"2,373",starup:"60"},{title:`layui /

      layui`,owner:"layui",name:"layui",avatar:"https://avatars.githubusercontent.com/u/3277200?s=40&v=4",path:"/layui/layui",link:"https://github.com/layui/layui",description:"一套遵循原生态开发模式的 Web UI 组件库，采用自身轻量级模块化规范，易上手，可以更简单快速地构建网页界面。",language:"JavaScript",stars:"29,100",forks:"7,309",starup:"107"},{title:`Asabeneh /

      30-Days-Of-JavaScript`,owner:"Asabeneh",name:"30-Days-Of-JavaScript",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-JavaScript",link:"https://github.com/Asabeneh/30-Days-Of-JavaScript",description:"30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",language:"JavaScript",stars:"41,331",forks:"9,595",starup:"119"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,760",forks:"2,526",starup:"200"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,587",forks:"4,739",starup:"33"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"622",forks:"2,821",starup:"82"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"369",forks:"1,849",starup:"82"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,994",forks:"1,547",starup:"37"},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",link:"https://github.com/webpack/webpack",description:'A bundler for javascript and friends. Packs many modules into a few bundled assets. Code Splitting allows for loading parts of the application on demand. Through "loaders", modules can be CommonJs, AMD, ES6 modules, CSS, Images, JSON, Coffeescript, LESS, ... and your custom stuff.',language:"JavaScript",stars:"64,265",forks:"8,730",starup:"35"},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",link:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",language:"JavaScript",stars:"77,014",forks:"4,006",starup:"136"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,515",forks:"540",starup:"79"},{title:`sve1r /

      Rules-For-Quantumult-X`,owner:"sve1r",name:"Rules-For-Quantumult-X",avatar:"https://avatars.githubusercontent.com/u/20367813?s=40&v=4",path:"/sve1r/Rules-For-Quantumult-X",link:"https://github.com/sve1r/Rules-For-Quantumult-X",description:"适用于 Quantumult X 规则整理集合. 所有内容源自 互联网,仅作为收集和整理",language:"JavaScript",stars:"2,892",forks:"308",starup:"37"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"236",forks:"890",starup:"49"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,325",forks:"2,973",starup:"75"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"894",forks:"3,555",starup:"68"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,362",forks:"3,411",starup:"299"},{title:`nerfies /

      nerfies.github.io`,owner:"nerfies",name:"nerfies.github.io",avatar:"https://avatars.githubusercontent.com/u/297680?s=40&v=4",path:"/nerfies/nerfies.github.io",link:"https://github.com/nerfies/nerfies.github.io",description:"",language:"JavaScript",stars:"1,970",forks:"600",starup:"35"},{title:`sudheerj /

      javascript-interview-questions`,owner:"sudheerj",name:"javascript-interview-questions",avatar:"https://avatars.githubusercontent.com/u/3127317?s=40&v=4",path:"/sudheerj/javascript-interview-questions",link:"https://github.com/sudheerj/javascript-interview-questions",description:"List of 1000 JavaScript Interview Questions",language:"JavaScript",stars:"22,341",forks:"6,402",starup:"113"},{title:`UnblockNeteaseMusic /

      server`,owner:"UnblockNeteaseMusic",name:"server",avatar:"https://avatars.githubusercontent.com/u/26399680?s=40&v=4",path:"/UnblockNeteaseMusic/server",link:"https://github.com/UnblockNeteaseMusic/server",description:"Revive unavailable songs for Netease Cloud Music (Refactored & Enhanced version)",language:"JavaScript",stars:"5,500",forks:"570",starup:"43"},{title:`mediacms-io /

      mediacms`,owner:"mediacms-io",name:"mediacms",avatar:"https://avatars.githubusercontent.com/u/1027116?s=40&v=4",path:"/mediacms-io/mediacms",link:"https://github.com/mediacms-io/mediacms",description:"MediaCMS is a modern, fully featured open source video and media CMS, written in Python/Django and React, featuring a REST API.",language:"JavaScript",stars:"2,421",forks:"441",starup:"47"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,696",forks:"35,154",starup:"199"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,849",forks:"8,838",starup:"167"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"27,194",forks:"3,175",starup:"4,463"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,545",forks:"1,626",starup:"3,036"},{title:`IvanGlinkin /

      CCTV`,owner:"IvanGlinkin",name:"CCTV",avatar:"https://avatars.githubusercontent.com/u/64857726?s=40&v=4",path:"/IvanGlinkin/CCTV",link:"https://github.com/IvanGlinkin/CCTV",description:"Close-Circuit Telegram Vision revolutionizes location tracking with its open-source design and Telegram API integration. Offering precise tracking within 50-100 meters, users can monitor others in real-time for logistics or safety, redefining how we navigate our surroundings",language:"JavaScript",stars:"2,198",forks:"307",starup:"1,697"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,204",forks:"223",starup:"1,153"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,994",forks:"351",starup:"1,382"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"716",forks:"122",starup:"319"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,863",forks:"45,595",starup:"2,043"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,115",forks:"1,124",starup:"290"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,266",forks:"3,370",starup:"847"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,264",forks:"2,373",starup:"181"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,637",forks:"1,568",starup:"178"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,851",forks:"3,387",starup:"1,204"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,931",forks:"1,011",starup:"385"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,305",forks:"1,889",starup:"1,070"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,909",forks:"26,076",starup:"1,262"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"68,052",forks:"5,949",starup:"935"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,481",forks:"1,202",starup:"199"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,362",forks:"3,411",starup:"730"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,760",forks:"2,526",starup:"594"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,710",forks:"987",starup:"416"},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",link:"https://github.com/axios/axios",description:"Promise based HTTP client for the browser and node.js",language:"JavaScript",stars:"104,325",forks:"10,747",starup:"406"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"51,052",forks:"4,585",starup:"1,479"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,696",forks:"35,154",starup:"758"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,512",forks:"1,267",starup:"885"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,671",forks:"15,764",starup:"587"}],"TypeScript-daily":[{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"26,098",forks:"13,386",starup:"60"},{title:`renovatebot /

      renovate`,owner:"renovatebot",name:"renovate",avatar:"https://avatars.githubusercontent.com/u/6311784?s=40&v=4",path:"/renovatebot/renovate",link:"https://github.com/renovatebot/renovate",description:"Home of the Renovate CLI: Cross-platform Dependency Automation by Mend.io",language:"TypeScript",stars:"16,264",forks:"2,083",starup:"72"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,791",forks:"12,824",starup:"31"},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",link:"https://github.com/vbenjs/vue-vben-admin",description:"A modern vue admin. It is based on Vue3, vite and TypeScript. It's fast！",language:"TypeScript",stars:"22,566",forks:"6,188",starup:"23"},{title:`dubinc /

      dub`,owner:"dubinc",name:"dub",avatar:"https://avatars.githubusercontent.com/u/28986134?s=40&v=4",path:"/dubinc/dub",link:"https://github.com/dubinc/dub",description:"Open-source link management infrastructure.",language:"TypeScript",stars:"16,563",forks:"1,674",starup:"20"},{title:`SawyerHood /

      tlbrowse`,owner:"SawyerHood",name:"tlbrowse",avatar:"https://avatars.githubusercontent.com/u/2380669?s=40&v=4",path:"/SawyerHood/tlbrowse",link:"https://github.com/SawyerHood/tlbrowse",description:"Generate imagined websites on an infinite canvas",language:"TypeScript",stars:"371",forks:"77",starup:"77"},{title:`open-telemetry /

      opentelemetry-demo`,owner:"open-telemetry",name:"opentelemetry-demo",avatar:"https://avatars.githubusercontent.com/u/1296118?s=40&v=4",path:"/open-telemetry/opentelemetry-demo",link:"https://github.com/open-telemetry/opentelemetry-demo",description:"This repository contains the OpenTelemetry Astronomy Shop, a microservice-based distributed system intended to illustrate the implementation of OpenTelemetry in a near real-world environment.",language:"TypeScript",stars:"1,492",forks:"824",starup:"4"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,512",forks:"1,508",starup:"47"},{title:`FuelLabs /

      sway-farm`,owner:"FuelLabs",name:"sway-farm",avatar:"https://avatars.githubusercontent.com/u/58856580?s=40&v=4",path:"/FuelLabs/sway-farm",link:"https://github.com/FuelLabs/sway-farm",description:"Farm 🍅 on the Fuel network.",language:"TypeScript",stars:"1,275",forks:"248",starup:"9"},{title:`yamada-ui /

      yamada-ui`,owner:"yamada-ui",name:"yamada-ui",avatar:"https://avatars.githubusercontent.com/u/84060430?s=40&v=4",path:"/yamada-ui/yamada-ui",link:"https://github.com/yamada-ui/yamada-ui",description:"React UI components of the Yamada, by the Yamada, for the Yamada built with React and Emotion.",language:"TypeScript",stars:"619",forks:"144",starup:"45"},{title:`idootop /

      mi-gpt`,owner:"idootop",name:"mi-gpt",avatar:"https://avatars.githubusercontent.com/u/35302658?s=40&v=4",path:"/idootop/mi-gpt",link:"https://github.com/idootop/mi-gpt",description:"🏠 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。",language:"TypeScript",stars:"504",forks:"32",starup:"148"},{title:`facebook /

      lexical`,owner:"facebook",name:"lexical",avatar:"https://avatars.githubusercontent.com/u/1519870?s=40&v=4",path:"/facebook/lexical",link:"https://github.com/facebook/lexical",description:"Lexical is an extensible text editor framework that provides excellent reliability, accessibility and performance.",language:"TypeScript",stars:"17,695",forks:"1,481",starup:"31"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,968",forks:"1,230",starup:"62"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"35,136",forks:"1,651",starup:"94"},{title:`xjh22222228 /

      nav`,owner:"xjh22222228",name:"nav",avatar:"https://avatars.githubusercontent.com/u/15535177?s=40&v=4",path:"/xjh22222228/nav",link:"https://github.com/xjh22222228/nav",description:"🔍 发现导航 , 最强静态导航网站",language:"TypeScript",stars:"1,903",forks:"1,027",starup:"7"},{title:`backstage /

      backstage`,owner:"backstage",name:"backstage",avatar:"https://avatars.githubusercontent.com/u/4984472?s=40&v=4",path:"/backstage/backstage",link:"https://github.com/backstage/backstage",description:"Backstage is an open framework for building developer portals",language:"TypeScript",stars:"26,775",forks:"5,536",starup:"9"},{title:`NapNeko /

      NapCatQQ`,owner:"NapNeko",name:"NapCatQQ",avatar:"https://avatars.githubusercontent.com/u/61873808?s=40&v=4",path:"/NapNeko/NapCatQQ",link:"https://github.com/NapNeko/NapCatQQ",description:"基于NTQQ的无头Bot框架",language:"TypeScript",stars:"708",forks:"42",starup:"17"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,772",forks:"1,638",starup:"142"},{title:`vuejs /

      devtools`,owner:"vuejs",name:"devtools",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/vuejs/devtools",link:"https://github.com/vuejs/devtools",description:"⚙️ Browser devtools extension for debugging Vue.js applications.",language:"TypeScript",stars:"24,437",forks:"4,122",starup:"5"},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",link:"https://github.com/open-metadata/OpenMetadata",description:"OpenMetadata is a unified platform for discovery, observability, and governance powered by a central metadata repository, in-depth lineage, and seamless team collaboration.",language:"TypeScript",stars:"4,368",forks:"876",starup:"16"},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",link:"https://github.com/shadcn-ui/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",language:"TypeScript",stars:"60,217",forks:"3,354",starup:"81"},{title:`TypeCellOS /

      BlockNote`,owner:"TypeCellOS",name:"BlockNote",avatar:"https://avatars.githubusercontent.com/u/368857?s=40&v=4",path:"/TypeCellOS/BlockNote",link:"https://github.com/TypeCellOS/BlockNote",description:"A React Rich Text Editor that's block-based (Notion style) and extensible. Built on top of Prosemirror and Tiptap.",language:"TypeScript",stars:"5,495",forks:"346",starup:"21"},{title:`appsmithorg /

      appsmith`,owner:"appsmithorg",name:"appsmith",avatar:"https://avatars.githubusercontent.com/u/3897254?s=40&v=4",path:"/appsmithorg/appsmith",link:"https://github.com/appsmithorg/appsmith",description:"Platform to build admin panels, internal tools, and dashboards. Integrates with 25+ databases and any API.",language:"TypeScript",stars:"32,036",forks:"3,460",starup:"32"},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",link:"https://github.com/tldraw/tldraw",description:"SDK for creating whiteboards and canvas experiences on the web.",language:"TypeScript",stars:"33,516",forks:"2,008",starup:"33"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"71,089",forks:"56,889",starup:"82"}],"TypeScript-weekly":[{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,655",forks:"192",starup:"833"},{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"2,313",forks:"193",starup:"1,018"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,921",forks:"140",starup:"512"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,208",forks:"723",starup:"626"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,291",forks:"427",starup:"704"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,669",forks:"1,137",starup:"670"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,512",forks:"1,508",starup:"588"},{title:`microsoft /

      fluentui`,owner:"microsoft",name:"fluentui",avatar:"https://avatars.githubusercontent.com/u/1110944?s=40&v=4",path:"/microsoft/fluentui",link:"https://github.com/microsoft/fluentui",description:"Fluent UI web represents a collection of utilities, React components, and web components for building web applications.",language:"TypeScript",stars:"17,878",forks:"2,664",starup:"90"},{title:`vercel /

      ai`,owner:"vercel",name:"ai",avatar:"https://avatars.githubusercontent.com/u/205036?s=40&v=4",path:"/vercel/ai",link:"https://github.com/vercel/ai",description:"Build AI-powered applications with React, Svelte, Vue, and Solid",language:"TypeScript",stars:"8,209",forks:"1,123",starup:"96"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,331",forks:"794",starup:"293"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,586",forks:"500",starup:"464"},{title:`midday-ai /

      midday`,owner:"midday-ai",name:"midday",avatar:"https://avatars.githubusercontent.com/u/655158?s=40&v=4",path:"/midday-ai/midday",link:"https://github.com/midday-ai/midday",description:"Run your business smarter 🪄",language:"TypeScript",stars:"2,561",forks:"242",starup:"133"},{title:`drizzle-team /

      drizzle-orm`,owner:"drizzle-team",name:"drizzle-orm",avatar:"https://avatars.githubusercontent.com/u/33990502?s=40&v=4",path:"/drizzle-team/drizzle-orm",link:"https://github.com/drizzle-team/drizzle-orm",description:"Headless TypeScript ORM with a head. Runs on Node, Bun and Deno. Lives on the Edge and yes, it's a JavaScript ORM too 😅",language:"TypeScript",stars:"20,866",forks:"473",starup:"347"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"35,136",forks:"1,651",starup:"922"},{title:`vercel /

      swr`,owner:"vercel",name:"swr",avatar:"https://avatars.githubusercontent.com/u/3676859?s=40&v=4",path:"/vercel/swr",link:"https://github.com/vercel/swr",description:"React Hooks for Data Fetching",language:"TypeScript",stars:"29,710",forks:"1,190",starup:"71"},{title:`lyswhut /

      lx-music-desktop`,owner:"lyswhut",name:"lx-music-desktop",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-desktop",link:"https://github.com/lyswhut/lx-music-desktop",description:"一个基于 electron 的音乐软件",language:"TypeScript",stars:"37,483",forks:"5,684",starup:"221"},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",link:"https://github.com/shadcn-ui/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",language:"TypeScript",stars:"60,217",forks:"3,354",starup:"567"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,772",forks:"1,638",starup:"760"},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",link:"https://github.com/nuxt/nuxt",description:"The Intuitive Vue Framework.",language:"TypeScript",stars:"52,614",forks:"4,817",starup:"164"},{title:`webprodigies /

      corinna-ai`,owner:"webprodigies",name:"corinna-ai",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/corinna-ai",link:"https://github.com/webprodigies/corinna-ai",description:"Ai Chatbot that acts like a sales rep",language:"TypeScript",stars:"306",forks:"90",starup:"221"},{title:`chaitin /

      SafeLine`,owner:"chaitin",name:"SafeLine",avatar:"https://avatars.githubusercontent.com/u/780596?s=40&v=4",path:"/chaitin/SafeLine",link:"https://github.com/chaitin/SafeLine",description:"A simple, lightweight, and secure WAF. Developed based on Nginx and connected as a reverse proxy. Protect your web applications from common attacks and exploits.",language:"TypeScript",stars:"10,242",forks:"600",starup:"958"},{title:`tiangolo /

      full-stack-fastapi-template`,owner:"tiangolo",name:"full-stack-fastapi-template",avatar:"https://avatars.githubusercontent.com/u/1326112?s=40&v=4",path:"/tiangolo/full-stack-fastapi-template",link:"https://github.com/tiangolo/full-stack-fastapi-template",description:"Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more.",language:"TypeScript",stars:"23,848",forks:"3,983",starup:"184"},{title:`lyswhut /

      lx-music-mobile`,owner:"lyswhut",name:"lx-music-mobile",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-mobile",link:"https://github.com/lyswhut/lx-music-mobile",description:"一个基于 React native 开发的音乐软件",language:"TypeScript",stars:"9,465",forks:"1,297",starup:"116"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"777",forks:"990",starup:"69"},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",link:"https://github.com/n8n-io/n8n",description:"Free and source-available fair-code licensed workflow automation tool. Easily automate tasks across different services.",language:"TypeScript",stars:"41,685",forks:"5,292",starup:"203"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"10,180",forks:"1,116",starup:"4,543"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,728",forks:"1,314",starup:"5,249"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"7,132",forks:"590",starup:"4,483"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,720",forks:"396",starup:"3,121"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,968",forks:"1,230",starup:"1,981"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,658",forks:"4,329",starup:"6,395"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,669",forks:"2,257",starup:"4,120"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,251",forks:"129",starup:"1,610"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,979",forks:"4,427",starup:"903"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,471",forks:"7,256",starup:"1,223"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,803",forks:"462",starup:"3,719"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,192",forks:"1,352",starup:"1,098"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,395",forks:"6,927",starup:"349"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,855",forks:"2,320",starup:"2,095"},{title:`adrianhajdin /

      banking`,owner:"adrianhajdin",name:"banking",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/banking",link:"https://github.com/adrianhajdin/banking",description:"Horizon is a modern banking platform for everyone.",language:"TypeScript",stars:"939",forks:"256",starup:"746"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,291",forks:"427",starup:"2,049"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"66,033",forks:"5,414",starup:"741"},{title:`lmstudio-ai /

      lms`,owner:"lmstudio-ai",name:"lms",avatar:"https://avatars.githubusercontent.com/u/157742211?s=40&v=4",path:"/lmstudio-ai/lms",link:"https://github.com/lmstudio-ai/lms",description:"LM Studio CLI. Written in TypeScript/Node",language:"TypeScript",stars:"850",forks:"66",starup:"690"},{title:`bitwarden /

      clients`,owner:"bitwarden",name:"clients",avatar:"https://avatars.githubusercontent.com/u/1190944?s=40&v=4",path:"/bitwarden/clients",link:"https://github.com/bitwarden/clients",description:"Bitwarden client applications (web, browser extension, desktop, and cli)",language:"TypeScript",stars:"8,535",forks:"1,121",starup:"219"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"71,089",forks:"56,889",starup:"2,910"},{title:`wojtekmaj /

      react-pdf`,owner:"wojtekmaj",name:"react-pdf",avatar:"https://avatars.githubusercontent.com/u/5426427?s=40&v=4",path:"/wojtekmaj/react-pdf",link:"https://github.com/wojtekmaj/react-pdf",description:"Display PDFs in your React app as easily as if they were images.",language:"TypeScript",stars:"8,768",forks:"846",starup:"191"},{title:`Openpanel-dev /

      openpanel`,owner:"Openpanel-dev",name:"openpanel",avatar:"https://avatars.githubusercontent.com/u/1987198?s=40&v=4",path:"/Openpanel-dev/openpanel",link:"https://github.com/Openpanel-dev/openpanel",description:"All the goodies from both Mixpanel and Plausible combined into one tool.",language:"TypeScript",stars:"2,426",forks:"69",starup:"1,398"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,279",forks:"1,401",starup:"310"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,613",forks:"161",starup:"741"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,512",forks:"1,508",starup:"836"}],"Vue-daily":[{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,225",forks:"747",starup:"15"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,962",forks:"503",starup:"7"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,791",forks:"30,359",starup:"16"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,598",forks:"2,795",starup:"18"},{title:`WuKongOpenSource /

      Wukong_ProjectManagement`,owner:"WuKongOpenSource",name:"Wukong_ProjectManagement",avatar:"https://avatars.githubusercontent.com/u/82026017?s=40&v=4",path:"/WuKongOpenSource/Wukong_ProjectManagement",link:"https://github.com/WuKongOpenSource/Wukong_ProjectManagement",description:"悟空项目管理-基于Spring Cloud Alibaba微服务架构 +vue ElementUI的前后端分离项目管理系统",language:"Vue",stars:"798",forks:"102",starup:"6"},{title:`viandwi24 /

      nuxt3-awesome-starter`,owner:"viandwi24",name:"nuxt3-awesome-starter",avatar:"https://avatars.githubusercontent.com/u/41994283?s=40&v=4",path:"/viandwi24/nuxt3-awesome-starter",link:"https://github.com/viandwi24/nuxt3-awesome-starter",description:"a Nuxt 3 template and boilerplate with a lot of useful features. Nuxt 3 + Tailwindcss + Nuxt Layer",language:"Vue",stars:"1,568",forks:"334",starup:"2"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,393",forks:"568",starup:"4"},{title:`macrozheng /

      mall-admin-web`,owner:"macrozheng",name:"mall-admin-web",avatar:"https://avatars.githubusercontent.com/u/15903809?s=40&v=4",path:"/macrozheng/mall-admin-web",link:"https://github.com/macrozheng/mall-admin-web",description:"mall-admin-web是一个电商后台管理系统的前端项目，基于Vue+Element实现。 主要包括商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、设置等功能。",language:"Vue",stars:"11,630",forks:"7,083",starup:"3"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,746",forks:"3,714",starup:"6"},{title:`CareyWang /

      sub-web`,owner:"CareyWang",name:"sub-web",avatar:"https://avatars.githubusercontent.com/u/33325726?s=40&v=4",path:"/CareyWang/sub-web",link:"https://github.com/CareyWang/sub-web",description:"",language:"Vue",stars:"4,738",forks:"1,773",starup:"6"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,046",forks:"294",starup:"8"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,165",forks:"1,215",starup:"11"},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",link:"https://github.com/hslr-s/sun-panel",description:"A server, NAS navigation panel, Homepage, browser homepage. | 一个服务器、NAS导航面板、Homepage、浏览器首页。",language:"Vue",stars:"2,116",forks:"210",starup:"16"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,415",forks:"5,940",starup:"7"},{title:`helloqyg /

      MettShort`,owner:"helloqyg",name:"MettShort",avatar:"https://avatars.githubusercontent.com/u/22368614?s=40&v=4",path:"/helloqyg/MettShort",link:"https://github.com/helloqyg/MettShort",description:"2023热门短剧微短剧可运营版本，包含微信小程序、抖音小程序、APP、公众号多个版本。也支持微信小程序媒资管理、虚拟支付、微短剧等各模块功能。包含批量导入、各种视频格式的支持、saas多开、分销商分销、卡密兑换、分享海报、自动切换、小程序流量主等众多功能。",language:"Vue",stars:"197",forks:"43",starup:"7"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,464",forks:"387",starup:"3"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,744",forks:"2,599",starup:"11"},{title:`bailicangdu /

      vue2-manage`,owner:"bailicangdu",name:"vue2-manage",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-manage",link:"https://github.com/bailicangdu/vue2-manage",description:"A admin template based on vue + element-ui. 基于vue + element-ui的后台管理系统基于 vue + element-ui 的后台管理系统",language:"Vue",stars:"13,349",forks:"4,321",starup:"2"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"738",forks:"66",starup:"24"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,896",forks:"1,229",starup:"18"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,453",forks:"1,420",starup:"4"},{title:`weilanwl /

      coloruicss`,owner:"weilanwl",name:"coloruicss",avatar:"https://avatars.githubusercontent.com/u/24801605?s=40&v=4",path:"/weilanwl/coloruicss",link:"https://github.com/weilanwl/coloruicss",description:"鲜亮的高饱和色彩，专注视觉的小程序组件库",language:"Vue",stars:"12,086",forks:"2,209",starup:"4"},{title:`oliver225 /

      thingsboard-ui-vue3`,owner:"oliver225",name:"thingsboard-ui-vue3",avatar:"https://avatars.githubusercontent.com/u/16226897?s=40&v=4",path:"/oliver225/thingsboard-ui-vue3",link:"https://github.com/oliver225/thingsboard-ui-vue3",description:"本项目为基于Vue3开发的 ThingsBoard 前台 ,AntDesginVue、VbenVueAdmin、AntV X6、规则链代码已全部开放、ThingsBoard3.x持续更新中",language:"Vue",stars:"156",forks:"22",starup:"3"},{title:`helloqyg /

      MettShortOverseas`,owner:"helloqyg",name:"MettShortOverseas",avatar:"",path:"/helloqyg/MettShortOverseas",link:"https://github.com/helloqyg/MettShortOverseas",description:"迈特短剧系统是一款功能强大的海外短剧平台，包含H5、安卓APP、苹果APPP多种展示形式，支持PayPal支付、stripe支付，Facebook登录、游客登录、Google登录、多语言选择，提供多开的开源系统。该系统提供了丰富的短剧资源，支持用户免费观看热门短剧、影视作品，同时也支持多种付费观看方式，如单人、全款和会员等，满足不同用户的需求。",language:"Vue",stars:"226",forks:"40",starup:"6"},{title:`macrozheng /

      mall-app-web`,owner:"macrozheng",name:"mall-app-web",avatar:"https://avatars.githubusercontent.com/u/15903809?s=40&v=4",path:"/macrozheng/mall-app-web",link:"https://github.com/macrozheng/mall-app-web",description:"mall-app-web是一个电商系统的移动端项目，基于uni-app实现。主要包括首页门户、商品推荐、商品搜索、商品展示、购物车、订单流程、会员中心、客户服务、帮助中心等功能。",language:"Vue",stars:"615",forks:"424",starup:"0"}],"Vue-weekly":[{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"1,127",forks:"313",starup:"386"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"738",forks:"66",starup:"147"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"518",forks:"94",starup:"51"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,598",forks:"2,795",starup:"106"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,606",forks:"1,379",starup:"49"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,225",forks:"747",starup:"76"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,165",forks:"1,215",starup:"52"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,288",forks:"3,613",starup:"41"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,225",forks:"315",starup:"303"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"4,008",forks:"1,632",starup:"47"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,393",forks:"568",starup:"24"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,771",forks:"1,103",starup:"35"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,290",forks:"749",starup:"63"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,981",forks:"779",starup:"46"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,502",forks:"4,054",starup:"110"},{title:`Cc-Edit /

      CcClip`,owner:"Cc-Edit",name:"CcClip",avatar:"https://avatars.githubusercontent.com/u/12524696?s=40&v=4",path:"/Cc-Edit/CcClip",link:"https://github.com/Cc-Edit/CcClip",description:"vue and ffmpeg based tool for video clips. 使用vue(vue3) + ffmpeg + wasm 实现纯前端音视频编辑，功能包括：视频剪辑、音频剪辑、音频合成裁剪、音波展示、视频抽帧、gif抽帧、帧播放器、字幕、贴图、时间轴、素材轨道",language:"Vue",stars:"936",forks:"182",starup:"24"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,889",forks:"1,301",starup:"20"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,800",forks:"1,771",starup:"34"},{title:`elk-zone /

      elk`,owner:"elk-zone",name:"elk",avatar:"https://avatars.githubusercontent.com/u/6481596?s=40&v=4",path:"/elk-zone/elk",link:"https://github.com/elk-zone/elk",description:"A nimble Mastodon web client",language:"Vue",stars:"5,158",forks:"529",starup:"16"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"634",forks:"1,198",starup:"12"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"193",forks:"72",starup:"17"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"523",forks:"77",starup:"27"},{title:`imsyy /

      SPlayer`,owner:"imsyy",name:"SPlayer",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/SPlayer",link:"https://github.com/imsyy/SPlayer",description:"🎉 一个简约的音乐播放器，支持逐字歌词，下载歌曲，展示评论区，音乐云盘及歌单管理，音乐频谱，移动端基础适配 | A minimalist music player",language:"Vue",stars:"687",forks:"296",starup:"18"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,291",forks:"228",starup:"34"},{title:`oliver225 /

      thingsboard-ui-vue3`,owner:"oliver225",name:"thingsboard-ui-vue3",avatar:"https://avatars.githubusercontent.com/u/16226897?s=40&v=4",path:"/oliver225/thingsboard-ui-vue3",link:"https://github.com/oliver225/thingsboard-ui-vue3",description:"本项目为基于Vue3开发的 ThingsBoard 前台 ,AntDesginVue、VbenVueAdmin、AntV X6、规则链代码已全部开放、ThingsBoard3.x持续更新中",language:"Vue",stars:"156",forks:"22",starup:"22"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,407",forks:"2,044",starup:"5,937"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,225",forks:"747",starup:"271"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,462",forks:"1,051",starup:"623"},{title:`taozhi1010 /

      nest-admin`,owner:"taozhi1010",name:"nest-admin",avatar:"https://avatars.githubusercontent.com/u/38208435?s=40&v=4",path:"/taozhi1010/nest-admin",link:"https://github.com/taozhi1010/nest-admin",description:"nest全栈快速开发平台",language:"Vue",stars:"305",forks:"64",starup:"301"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"4,008",forks:"1,632",starup:"197"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,811",forks:"762",starup:"185"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,896",forks:"1,229",starup:"454"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,867",forks:"324",starup:"590"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,235",forks:"500",starup:"136"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,285",forks:"186",starup:"347"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,800",forks:"1,771",starup:"116"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,225",forks:"315",starup:"491"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,463",forks:"231",starup:"467"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"126",forks:"1,359",starup:"13"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,400",forks:"724",starup:"233"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,290",forks:"749",starup:"284"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,895",forks:"264",starup:"174"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,844",forks:"12,467",starup:"118"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,647",forks:"223",starup:"150"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"286",forks:"44",starup:"95"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,791",forks:"30,359",starup:"454"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,744",forks:"2,599",starup:"236"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"193",forks:"72",starup:"46"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,981",forks:"779",starup:"142"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"523",forks:"77",starup:"116"}]},nt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},it=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=M({__name:"index",setup(T){const p=x("daily"),e=x("JavaScript"),h=x([]),t=x("list");function k(g){return g.sort((s,i)=>n(i.starup)-n(s.starup))}J([p,e],()=>{h.value=k(st[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=K();return(g,s)=>{const i=W,d=O,v=B,y=D,r=Q("LazyImage"),a=F,o=H,C=E,A=at,G=et;return l(),S("div",null,[c(y,null,{default:w(()=>[c(i,{modelValue:u(p),"onUpdate:modelValue":s[0]||(s[0]=m=>V(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":s[1]||(s[1]=m=>V(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":s[2]||(s[2]=m=>V(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(Y,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(l(),S("div",nt,[it,(l(!0),S($,null,X(u(h),(m,P)=>(l(),j(C,{key:P,index:P,repo:m,onMouseenter:u(f)},{avatar:w(({repo:b})=>[c(r,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),j(A,{key:1,data:u(h)},null,8,["data"])):(l(),j(G,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
