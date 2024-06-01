import{_ as L}from"./BJ-vU1JG.js";import{_ as D}from"./Dfw7PdsB.js";import{_ as W}from"./BpCUb2Uz.js";import G from"./M8H6iLLH.js";import{_ as O,a as H}from"./DGwmkjUk.js";import{_ as N}from"./Fb-JdiA5.js";import{s as U,u as P,a as R,b as B,i as q,c as K}from"./7NtqBrHh.js";import{d as z,s}from"./CYcXzR8Z.js";import{n as J,q as E,h as M,o as c,c as S,s as F,r as A,u as Y,b as l,w,T as Q,v as u,x as j,F as $,y as Z,z as C,a as X}from"./7Z61cFv0.js";import{l as tt}from"./p2-M2djV.js";import"./OqIc5r-O.js";import"./DtAh-ZB6.js";import"./BQkc-AXV.js";import"./B6_InTK4.js";const at=J({__name:"Chart",props:{data:{}},setup(T){const p=T,{data:e}=E(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=P("仓库飙升榜",h);function f(n){const r=z(n);r.sort((a,o)=>{const V=s(a.starup)+s(a.stars)+s(a.forks),x=s(o.starup)+s(o.stars)+s(o.forks);return V-x});const[d,v,y,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:k}=R(t,B);M(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(c(),S("div",{ref_key:"chartRef",ref:k,style:F({height:g})},null,4))}}),et=J({__name:"StarupChart",props:{data:{}},setup(T){const p=T,{data:e}=E(p),t=P("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:f}=R(t,B);function k(n){const r=z(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:q(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}M(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(c(),S("div",{ref_key:"chartRef",ref:f,style:F({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,753",forks:"3,372",starup:"54"},{title:`adysec /

      cf-mirror`,owner:"adysec",name:"cf-mirror",avatar:"https://avatars.githubusercontent.com/u/133128400?s=40&v=4",path:"/adysec/cf-mirror",link:"https://github.com/adysec/cf-mirror",description:"AdySec CF拉平镜像站 | 官方源可信度和稳定性最高，但国内访问速度较慢，通过众生平等Cloudflare，利用全球的边缘节点，将用户请求转发到离用户距离最近的节点，同时缓存静态内容加速，减少网络延迟和下载速度，使用Cloudflare Workers配置反代实现",language:"JavaScript",stars:"88",forks:"59",starup:"1"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"324",forks:"1,595",starup:"17"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"575",forks:"2,626",starup:"20"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"15,058",forks:"3,491",starup:"37"},{title:`ibrahimaitech /

      BLACK-PANTHER-XMD`,owner:"ibrahimaitech",name:"BLACK-PANTHER-XMD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BLACK-PANTHER-XMD",link:"https://github.com/ibrahimaitech/BLACK-PANTHER-XMD",description:"Black panther md is the fastest wabot that helps WhatsApp users to enjoy smooth life",language:"JavaScript",stars:"372",forks:"1,128",starup:"6"},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",link:"https://github.com/HeyPuter/puter",description:"🌐 The Web OS! Free, Open-Source, and Self-Hostable.",language:"JavaScript",stars:"19,088",forks:"1,176",starup:"35"},{title:`kunjgit /

      GameZone`,owner:"kunjgit",name:"GameZone",avatar:"https://avatars.githubusercontent.com/u/103763618?s=40&v=4",path:"/kunjgit/GameZone",link:"https://github.com/kunjgit/GameZone",description:"This open source repository contains collection of games build on basic tech stacks in web development . Use your creativity and build your own game and contribute to the repository by making PR 🎮",language:"JavaScript",stars:"445",forks:"685",starup:"5"},{title:`layui /

      layui`,owner:"layui",name:"layui",avatar:"https://avatars.githubusercontent.com/u/3277200?s=40&v=4",path:"/layui/layui",link:"https://github.com/layui/layui",description:"一套遵循原生态开发模式的 Web UI 组件库，采用自身轻量级模块化规范，易上手，可以更简单快速地构建网页界面。",language:"JavaScript",stars:"29,030",forks:"7,298",starup:"18"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,833",forks:"11,092",starup:"30"},{title:`Misaka-blog /

      cf-wkrs-pages-vless`,owner:"Misaka-blog",name:"cf-wkrs-pages-vless",avatar:"https://avatars.githubusercontent.com/u/122191366?s=40&v=4",path:"/Misaka-blog/cf-wkrs-pages-vless",link:"https://github.com/Misaka-blog/cf-wkrs-pages-vless",description:"在 CloudFlare Workers 或 Pages 部署 vless 节点，支持 Base64、Clash 及 Sing-box 配置文件订阅文件生成",language:"JavaScript",stars:"563",forks:"413",starup:"4"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,192",forks:"2,365",starup:"3"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,704",forks:"9,753",starup:"9"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"212",forks:"786",starup:"8"},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",link:"https://github.com/cypress-io/cypress",description:"Fast, easy and reliable testing for anything that runs in a browser.",language:"JavaScript",stars:"46,287",forks:"3,124",starup:"6"},{title:`HumanSignal /

      label-studio`,owner:"HumanSignal",name:"label-studio",avatar:"https://avatars.githubusercontent.com/u/87703623?s=40&v=4",path:"/HumanSignal/label-studio",link:"https://github.com/HumanSignal/label-studio",description:"Label Studio is a multi-type data labeling and annotation tool with standardized output format",language:"JavaScript",stars:"16,920",forks:"2,101",starup:"12"},{title:`chartjs /

      Chart.js`,owner:"chartjs",name:"Chart.js",avatar:"https://avatars.githubusercontent.com/u/6757853?s=40&v=4",path:"/chartjs/Chart.js",link:"https://github.com/chartjs/Chart.js",description:"Simple HTML5 Charts using the <canvas> tag",language:"JavaScript",stars:"63,717",forks:"11,874",starup:"9"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,297",forks:"11,651",starup:"5"},{title:`CesiumGS /

      cesium`,owner:"CesiumGS",name:"cesium",avatar:"https://avatars.githubusercontent.com/u/1494815?s=40&v=4",path:"/CesiumGS/cesium",link:"https://github.com/CesiumGS/cesium",description:"An open-source JavaScript library for world-class 3D globes and maps 🌎",language:"JavaScript",stars:"12,190",forks:"3,354",starup:"4"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,824",forks:"8,836",starup:"8"},{title:`facebook /

      create-react-app`,owner:"facebook",name:"create-react-app",avatar:"https://avatars.githubusercontent.com/u/810438?s=40&v=4",path:"/facebook/create-react-app",link:"https://github.com/facebook/create-react-app",description:"Set up a modern web app by running one command.",language:"JavaScript",stars:"102,021",forks:"26,621",starup:"9"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,785",forks:"26,044",starup:"43"},{title:`QiuChenlyOpenSource /

      91QiuChen`,owner:"QiuChenlyOpenSource",name:"91QiuChen",avatar:"https://avatars.githubusercontent.com/u/24793281?s=40&v=4",path:"/QiuChenlyOpenSource/91QiuChen",link:"https://github.com/QiuChenlyOpenSource/91QiuChen",description:"91 Sex asm code asian cosplay hexinhex porn big dick 花Q",language:"JavaScript",stars:"828",forks:"168",starup:"5"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, LLM and vector store agnostic.",language:"JavaScript",stars:"18,441",forks:"2,771",starup:"41"},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",link:"https://github.com/prettier/prettier",description:"Prettier is an opinionated code formatter.",language:"JavaScript",stars:"48,493",forks:"4,161",starup:"4"}],"JavaScript-weekly":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,753",forks:"3,372",starup:"873"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,833",forks:"11,092",starup:"193"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,605",forks:"35,154",starup:"180"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, LLM and vector store agnostic.",language:"JavaScript",stars:"18,441",forks:"2,771",starup:"263"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,276",forks:"3,401",starup:"264"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,436",forks:"1,260",starup:"260"},{title:`ascoders /

      weekly`,owner:"ascoders",name:"weekly",avatar:"https://avatars.githubusercontent.com/u/7970947?s=40&v=4",path:"/ascoders/weekly",link:"https://github.com/ascoders/weekly",description:"前端精读周刊。帮你理解最前沿、实用的技术。",language:"JavaScript",stars:"27,907",forks:"3,186",starup:"59"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,785",forks:"26,044",starup:"315"},{title:`nerfies /

      nerfies.github.io`,owner:"nerfies",name:"nerfies.github.io",avatar:"https://avatars.githubusercontent.com/u/297680?s=40&v=4",path:"/nerfies/nerfies.github.io",link:"https://github.com/nerfies/nerfies.github.io",description:"",language:"JavaScript",stars:"1,950",forks:"592",starup:"35"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,883",forks:"341",starup:"287"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"856",forks:"3,398",starup:"76"},{title:`V2RaySSR /

      Free-VLESS`,owner:"V2RaySSR",name:"Free-VLESS",avatar:"https://avatars.githubusercontent.com/u/59167743?s=40&v=4",path:"/V2RaySSR/Free-VLESS",link:"https://github.com/V2RaySSR/Free-VLESS",description:"通过 Cloudflare，免费部署 VLESS节点",language:"JavaScript",stars:"103",forks:"43",starup:"39"},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/9736046?s=40&v=4",path:"/FreeTubeApp/FreeTube",link:"https://github.com/FreeTubeApp/FreeTube",description:"An Open Source YouTube app for privacy",language:"JavaScript",stars:"12,093",forks:"734",starup:"209"},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",link:"https://github.com/maboloshi/github-chinese",description:"GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",language:"JavaScript",stars:"3,419",forks:"207",starup:"345"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,295",forks:"2,964",starup:"109"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,563",forks:"4,725",starup:"28"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,926",forks:"5,925",starup:"207"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"184,175",forks:"29,729",starup:"373"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"575",forks:"2,626",starup:"85"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"228",forks:"31",starup:"65"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,607",forks:"15,557",starup:"140"},{title:`aframevr /

      aframe`,owner:"aframevr",name:"aframe",avatar:"https://avatars.githubusercontent.com/u/674727?s=40&v=4",path:"/aframevr/aframe",link:"https://github.com/aframevr/aframe",description:"🅰️ Web framework for building virtual reality experiences.",language:"JavaScript",stars:"16,309",forks:"3,886",starup:"42"},{title:`leafTheFish /

      DeathNote`,owner:"leafTheFish",name:"DeathNote",avatar:"https://avatars.githubusercontent.com/u/103831852?s=40&v=4",path:"/leafTheFish/DeathNote",link:"https://github.com/leafTheFish/DeathNote",description:"",language:"JavaScript",stars:"2,677",forks:"865",starup:"45"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"2,055",forks:"2,908",starup:"143"},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",link:"https://github.com/gorhill/uBlock",description:"uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.",language:"JavaScript",stars:"43,850",forks:"2,941",starup:"184"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,750",forks:"3,137",starup:"4,643"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,288",forks:"1,590",starup:"2,940"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,926",forks:"5,925",starup:"916"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,163",forks:"222",starup:"1,124"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"660",forks:"114",starup:"327"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,460",forks:"1,180",starup:"213"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,727",forks:"45,551",starup:"2,086"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,883",forks:"341",starup:"1,311"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,214",forks:"3,365",starup:"823"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,254",forks:"7,191",starup:"543"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,910",forks:"1,009",starup:"414"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,174",forks:"1,865",starup:"1,046"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,785",forks:"26,044",starup:"1,255"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,753",forks:"3,372",starup:"1,186"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,611",forks:"1,553",starup:"177"},{title:`yonggekkk /

      Cloudflare_vless_trojan`,owner:"yonggekkk",name:"Cloudflare_vless_trojan",avatar:"https://avatars.githubusercontent.com/u/121604513?s=40&v=4",path:"/yonggekkk/Cloudflare_vless_trojan",link:"https://github.com/yonggekkk/Cloudflare_vless_trojan",description:"Cloudflare代理脚本，支持workers与pages两种形式部署，实现Vless与Trojan两种协议。CF优选域名、优选官方IP反代IP多平台一键脚本",language:"JavaScript",stars:"2,808",forks:"1,869",starup:"431"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,031",forks:"16,378",starup:"210"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,543",forks:"1,865",starup:"400"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,690",forks:"3,492",starup:"453"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,879",forks:"1,794",starup:"212"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,102",forks:"1,119",starup:"284"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,605",forks:"35,154",starup:"734"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,276",forks:"3,401",starup:"698"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,607",forks:"15,557",starup:"588"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"259",forks:"391",starup:"149"}],"TypeScript-daily":[{title:`webprodigies /

      corinna-ai`,owner:"webprodigies",name:"corinna-ai",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/corinna-ai",link:"https://github.com/webprodigies/corinna-ai",description:"Ai Chatbot that acts like a sales rep",language:"TypeScript",stars:"253",forks:"74",starup:"100"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"31,911",forks:"4,218",starup:"254"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,159",forks:"2,012",starup:"19"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,197",forks:"775",starup:"51"},{title:`huggingface /

      chat-ui`,owner:"huggingface",name:"chat-ui",avatar:"https://avatars.githubusercontent.com/u/25119303?s=40&v=4",path:"/huggingface/chat-ui",link:"https://github.com/huggingface/chat-ui",description:"Open source codebase powering the HuggingChat app",language:"TypeScript",stars:"6,510",forks:"908",starup:"16"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"7,978",forks:"1,460",starup:"20"},{title:`AIsouler /

      GKD_subscription`,owner:"AIsouler",name:"GKD_subscription",avatar:"https://avatars.githubusercontent.com/u/57941037?s=40&v=4",path:"/AIsouler/GKD_subscription",link:"https://github.com/AIsouler/GKD_subscription",description:"GKD 第三方订阅规则",language:"TypeScript",stars:"876",forks:"38",starup:"34"},{title:`outline /

      outline`,owner:"outline",name:"outline",avatar:"https://avatars.githubusercontent.com/u/380914?s=40&v=4",path:"/outline/outline",link:"https://github.com/outline/outline",description:"The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",language:"TypeScript",stars:"25,521",forks:"2,055",starup:"106"},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",link:"https://github.com/microsoft/vscode",description:"Visual Studio Code",language:"TypeScript",stars:"159,296",forks:"27,865",starup:"41"},{title:`microsoft /

      fluentui`,owner:"microsoft",name:"fluentui",avatar:"https://avatars.githubusercontent.com/u/1110944?s=40&v=4",path:"/microsoft/fluentui",link:"https://github.com/microsoft/fluentui",description:"Fluent UI web represents a collection of utilities, React components, and web components for building web applications.",language:"TypeScript",stars:"17,859",forks:"2,659",starup:"22"},{title:`software-mansion /

      react-native-reanimated`,owner:"software-mansion",name:"react-native-reanimated",avatar:"https://avatars.githubusercontent.com/u/36106620?s=40&v=4",path:"/software-mansion/react-native-reanimated",link:"https://github.com/software-mansion/react-native-reanimated",description:"React Native's Animated library reimplemented",language:"TypeScript",stars:"8,503",forks:"1,253",starup:"7"},{title:`vitest-dev /

      vitest`,owner:"vitest-dev",name:"vitest",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/vitest-dev/vitest",link:"https://github.com/vitest-dev/vitest",description:"Next generation testing framework powered by Vite.",language:"TypeScript",stars:"12,013",forks:"1,048",starup:"8"},{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,486",forks:"171",starup:"196"},{title:`tiangolo /

      full-stack-fastapi-template`,owner:"tiangolo",name:"full-stack-fastapi-template",avatar:"https://avatars.githubusercontent.com/u/1326112?s=40&v=4",path:"/tiangolo/full-stack-fastapi-template",link:"https://github.com/tiangolo/full-stack-fastapi-template",description:"Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more.",language:"TypeScript",stars:"23,751",forks:"3,956",starup:"38"},{title:`microsoft /

      TypeScript`,owner:"microsoft",name:"TypeScript",avatar:"https://avatars.githubusercontent.com/u/4226954?s=40&v=4",path:"/microsoft/TypeScript",link:"https://github.com/microsoft/TypeScript",description:"TypeScript is a superset of JavaScript that compiles to clean JavaScript output.",language:"TypeScript",stars:"98,501",forks:"12,234",starup:"20"},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",link:"https://github.com/shadcn-ui/ui",description:"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",language:"TypeScript",stars:"59,899",forks:"3,326",starup:"97"},{title:`vueuse /

      vueuse`,owner:"vueuse",name:"vueuse",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/vueuse/vueuse",link:"https://github.com/vueuse/vueuse",description:"Collection of essential Vue Composition Utilities for Vue 2 and 3",language:"TypeScript",stars:"18,985",forks:"2,390",starup:"8"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,450",forks:"161",starup:"78"},{title:`wevm /

      wagmi`,owner:"wevm",name:"wagmi",avatar:"https://avatars.githubusercontent.com/u/6759464?s=40&v=4",path:"/wevm/wagmi",link:"https://github.com/wevm/wagmi",description:"React Hooks for Ethereum",language:"TypeScript",stars:"5,757",forks:"928",starup:"12"},{title:`sugarforever /

      chat-ollama`,owner:"sugarforever",name:"chat-ollama",avatar:"https://avatars.githubusercontent.com/u/404421?s=40&v=4",path:"/sugarforever/chat-ollama",link:"https://github.com/sugarforever/chat-ollama",description:"ChatOllama is an open source chatbot based on LLMs. It supports a wide range of language models, and knowledge base management.",language:"TypeScript",stars:"2,162",forks:"331",starup:"8"},{title:`desktop /

      desktop`,owner:"desktop",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/634063?s=40&v=4",path:"/desktop/desktop",link:"https://github.com/desktop/desktop",description:"Focus on what matters instead of fighting with Git.",language:"TypeScript",stars:"19,306",forks:"9,245",starup:"7"},{title:`nolly-studio /

      cult-ui`,owner:"nolly-studio",name:"cult-ui",avatar:"https://avatars.githubusercontent.com/u/25993686?s=40&v=4",path:"/nolly-studio/cult-ui",link:"https://github.com/nolly-studio/cult-ui",description:"Components crafted for Design Engineers. Styled using Tailwind CSS, fully compatible with Shadcn, and easy to integrate—just copy and paste. Open source and TypeScript ready.",language:"TypeScript",stars:"318",forks:"15",starup:"64"},{title:`slab /

      quill`,owner:"slab",name:"quill",avatar:"https://avatars.githubusercontent.com/u/192974?s=40&v=4",path:"/slab/quill",link:"https://github.com/slab/quill",description:"Quill is a modern WYSIWYG editor built for compatibility and extensibility",language:"TypeScript",stars:"41,841",forks:"3,280",starup:"20"},{title:`signalapp /

      Signal-Desktop`,owner:"signalapp",name:"Signal-Desktop",avatar:"https://avatars.githubusercontent.com/u/1039940?s=40&v=4",path:"/signalapp/Signal-Desktop",link:"https://github.com/signalapp/Signal-Desktop",description:"A private messenger for Windows, macOS, and Linux.",language:"TypeScript",stars:"14,105",forks:"2,564",starup:"3"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,481",forks:"496",starup:"49"}],"TypeScript-weekly":[{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,814",forks:"567",starup:"2,113"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"1,378",forks:"139",starup:"280"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,024",forks:"710",starup:"934"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,992",forks:"413",starup:"1,496"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,733",forks:"128",starup:"468"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"863",forks:"59",starup:"369"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,435",forks:"1,125",starup:"673"},{title:`magicuidesign /

      magicui`,owner:"magicuidesign",name:"magicui",avatar:"https://avatars.githubusercontent.com/u/16860528?s=40&v=4",path:"/magicuidesign/magicui",link:"https://github.com/magicuidesign/magicui",description:"UI Library for Design Engineers. Animated components and effects you can copy and paste into your apps. Free. Open Source.",language:"TypeScript",stars:"3,197",forks:"99",starup:"1,490"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,877",forks:"24,759",starup:"144"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,544",forks:"434",starup:"950"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,197",forks:"775",starup:"492"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,254",forks:"1,599",starup:"777"},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",link:"https://github.com/promptfoo/promptfoo",description:"Test your prompts, models, and RAGs. Catch regressions and improve prompt quality. LLM evals for OpenAI, Azure, Anthropic, Gemini, Mistral, Llama, Bedrock, Ollama, and other local & private models with CI/CD integration.",language:"TypeScript",stars:"3,139",forks:"206",starup:"130"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,481",forks:"496",starup:"373"},{title:`microsoft /

      fluentui`,owner:"microsoft",name:"fluentui",avatar:"https://avatars.githubusercontent.com/u/1110944?s=40&v=4",path:"/microsoft/fluentui",link:"https://github.com/microsoft/fluentui",description:"Fluent UI web represents a collection of utilities, React components, and web components for building web applications.",language:"TypeScript",stars:"17,859",forks:"2,659",starup:"79"},{title:`angular /

      components`,owner:"angular",name:"components",avatar:"https://avatars.githubusercontent.com/u/4450522?s=40&v=4",path:"/angular/components",link:"https://github.com/angular/components",description:"Component infrastructure and Material Design components for Angular",language:"TypeScript",stars:"24,133",forks:"6,671",starup:"28"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,346",forks:"372",starup:"891"},{title:`solidjs /

      solid-start`,owner:"solidjs",name:"solid-start",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid-start",link:"https://github.com/solidjs/solid-start",description:"SolidStart, the Solid app framework",language:"TypeScript",stars:"4,862",forks:"371",starup:"169"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"30,067",forks:"4,722",starup:"247"},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",link:"https://github.com/mui/material-ui",description:"Material UI: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.",language:"TypeScript",stars:"92,025",forks:"31,641",starup:"132"},{title:`angular /

      angular-cli`,owner:"angular",name:"angular-cli",avatar:"https://avatars.githubusercontent.com/u/17563226?s=40&v=4",path:"/angular/angular-cli",link:"https://github.com/angular/angular-cli",description:"CLI tool for Angular",language:"TypeScript",stars:"26,630",forks:"11,981",starup:"22"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,297",forks:"502",starup:"228"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,688",forks:"3,382",starup:"279"},{title:`labring /

      FastGPT`,owner:"labring",name:"FastGPT",avatar:"https://avatars.githubusercontent.com/u/50446880?s=40&v=4",path:"/labring/FastGPT",link:"https://github.com/labring/FastGPT",description:"FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.",language:"TypeScript",stars:"14,008",forks:"3,605",starup:"292"},{title:`langchain-ai /

      langchain-nextjs-template`,owner:"langchain-ai",name:"langchain-nextjs-template",avatar:"https://avatars.githubusercontent.com/u/6952323?s=40&v=4",path:"/langchain-ai/langchain-nextjs-template",link:"https://github.com/langchain-ai/langchain-nextjs-template",description:"LangChain + Next.js starter template",language:"TypeScript",stars:"1,129",forks:"223",starup:"140"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,969",forks:"1,101",starup:"4,406"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,505",forks:"1,253",starup:"6,986"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,814",forks:"567",starup:"5,420"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,701",forks:"1,144",starup:"1,977"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"31,911",forks:"4,218",starup:"6,219"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,346",forks:"372",starup:"3,021"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,504",forks:"2,249",starup:"4,051"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,215",forks:"127",starup:"1,609"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,362",forks:"6,920",starup:"343"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,890",forks:"681",starup:"1,800"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"56,160",forks:"3,266",starup:"1,032"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,781",forks:"2,309",starup:"2,064"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,078",forks:"1,344",starup:"1,055"},{title:`openai /

      openai-assistants-quickstart`,owner:"openai",name:"openai-assistants-quickstart",avatar:"https://avatars.githubusercontent.com/u/25421602?s=40&v=4",path:"/openai/openai-assistants-quickstart",link:"https://github.com/openai/openai-assistants-quickstart",description:"OpenAI Assistants API quickstart with Next.js.",language:"TypeScript",stars:"964",forks:"144",starup:"966"},{title:`Dokploy /

      dokploy`,owner:"Dokploy",name:"dokploy",avatar:"https://avatars.githubusercontent.com/u/47042324?s=40&v=4",path:"/Dokploy/dokploy",link:"https://github.com/Dokploy/dokploy",description:"Open Source Alternative to Vercel, Netlify and Heroku.",language:"TypeScript",stars:"3,603",forks:"177",starup:"2,881"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,259",forks:"362",starup:"2,067"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,992",forks:"413",starup:"1,890"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,408",forks:"7,250",starup:"1,202"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,889",forks:"4,419",starup:"864"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"65,944",forks:"5,412",starup:"704"},{title:`marmelab /

      react-admin`,owner:"marmelab",name:"react-admin",avatar:"https://avatars.githubusercontent.com/u/99944?s=40&v=4",path:"/marmelab/react-admin",link:"https://github.com/marmelab/react-admin",description:"A frontend Framework for building data-driven applications running on top of REST/GraphQL APIs, using TypeScript, React and Material Design",language:"TypeScript",stars:"24,254",forks:"5,179",starup:"256"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,481",forks:"496",starup:"698"},{title:`solidjs /

      solid-start`,owner:"solidjs",name:"solid-start",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid-start",link:"https://github.com/solidjs/solid-start",description:"SolidStart, the Solid app framework",language:"TypeScript",stars:"4,862",forks:"371",starup:"387"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,730",forks:"14,181",starup:"2,605"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,251",forks:"1,395",starup:"315"}],"Vue-daily":[{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",link:"https://github.com/viarotel-org/escrcpy",description:"📱 Graphical Scrcpy to display and control Android, devices powered by Electron. | 使用图形化的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。",language:"Vue",stars:"1,553",forks:"104",starup:"8"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,579",forks:"1,375",starup:"5"},{title:`jason5ng32 /

      EasyHomePage`,owner:"jason5ng32",name:"EasyHomePage",avatar:"https://avatars.githubusercontent.com/u/1546290?s=40&v=4",path:"/jason5ng32/EasyHomePage",link:"https://github.com/jason5ng32/EasyHomePage",description:"一个使用 Markdown 就可以生成的个人/产品主页",language:"Vue",stars:"90",forks:"10",starup:"15"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,253",forks:"747",starup:"6"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,749",forks:"30,342",starup:"12"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,728",forks:"3,708",starup:"4"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,541",forks:"2,787",starup:"20"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,380",forks:"562",starup:"1"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"185",forks:"67",starup:"2"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,878",forks:"1,299",starup:"2"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,137",forks:"1,210",starup:"9"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,993",forks:"14,625",starup:"2"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"480",forks:"86",starup:"3"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,961",forks:"813",starup:"3"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,985",forks:"1,619",starup:"10"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,031",forks:"289",starup:"1"},{title:`macrozheng /

      mall-admin-web`,owner:"macrozheng",name:"mall-admin-web",avatar:"https://avatars.githubusercontent.com/u/15903809?s=40&v=4",path:"/macrozheng/mall-admin-web",link:"https://github.com/macrozheng/mall-admin-web",description:"mall-admin-web是一个电商后台管理系统的前端项目，基于Vue+Element实现。 主要包括商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、设置等功能。",language:"Vue",stars:"11,619",forks:"7,080",starup:"0"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,438",forks:"1,415",starup:"2"},{title:`baiy /

      Ctool`,owner:"baiy",name:"Ctool",avatar:"https://avatars.githubusercontent.com/u/2341581?s=40&v=4",path:"/baiy/Ctool",link:"https://github.com/baiy/Ctool",description:"程序开发常用工具 chrome / edge / firefox / utools / windows / linux / mac",language:"Vue",stars:"1,388",forks:"199",starup:"1"},{title:`JakHuang /

      form-generator`,owner:"JakHuang",name:"form-generator",avatar:"https://avatars.githubusercontent.com/u/14212588?s=40&v=4",path:"/JakHuang/form-generator",link:"https://github.com/JakHuang/form-generator",description:"✨Element UI表单设计及代码生成器",language:"Vue",stars:"8,853",forks:"2,147",starup:"5"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,399",forks:"5,935",starup:"3"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,232",forks:"578",starup:"19"},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",link:"https://github.com/Virtual-Browser/VirtualBrowser",description:"Free anti fingerprint browser, 指纹浏览器, 隐私浏览器, 免费的web3空投专用指纹浏览器",language:"Vue",stars:"485",forks:"112",starup:"3"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,878",forks:"261",starup:"2"},{title:`weilanwl /

      coloruicss`,owner:"weilanwl",name:"coloruicss",avatar:"https://avatars.githubusercontent.com/u/24801605?s=40&v=4",path:"/weilanwl/coloruicss",link:"https://github.com/weilanwl/coloruicss",description:"鲜亮的高饱和色彩，专注视觉的小程序组件库",language:"Vue",stars:"12,077",forks:"2,209",starup:"1"}],"Vue-weekly":[{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,239",forks:"184",starup:"80"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,379",forks:"719",starup:"66"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,164",forks:"733",starup:"59"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,985",forks:"1,619",starup:"53"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,417",forks:"4,045",starup:"116"},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",link:"https://github.com/viarotel-org/escrcpy",description:"📱 Graphical Scrcpy to display and control Android, devices powered by Electron. | 使用图形化的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。",language:"Vue",stars:"1,553",forks:"104",starup:"48"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,541",forks:"2,787",starup:"105"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,012",forks:"255",starup:"214"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,422",forks:"221",starup:"100"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,965",forks:"775",starup:"64"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"371",forks:"88",starup:"36"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,878",forks:"261",starup:"40"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,016",forks:"135",starup:"12"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,579",forks:"1,375",starup:"40"},{title:`bobvinch /

      comfyui-webdemo`,owner:"bobvinch",name:"comfyui-webdemo",avatar:"https://avatars.githubusercontent.com/u/156988167?s=40&v=4",path:"/bobvinch/comfyui-webdemo",link:"https://github.com/bobvinch/comfyui-webdemo",description:"A very beautiful and simple front-end AI drawing demo using ComfyUI as the background, using Nuxt3 and Vuetify",language:"Vue",stars:"61",forks:"14",starup:"16"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"504",forks:"77",starup:"29"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"123",forks:"1,313",starup:"4"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"480",forks:"86",starup:"45"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,764",forks:"148",starup:"40"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,137",forks:"1,210",starup:"31"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"303",forks:"56",starup:"60"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,961",forks:"813",starup:"21"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,873",forks:"78",starup:"30"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,878",forks:"1,299",starup:"15"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,271",forks:"3,613",starup:"47"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,143",forks:"2,011",starup:"5,831"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,401",forks:"1,041",starup:"622"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,239",forks:"184",starup:"341"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,213",forks:"495",starup:"124"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,164",forks:"733",starup:"225"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,187",forks:"847",starup:"426"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,829",forks:"322",starup:"634"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,985",forks:"1,619",starup:"182"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"278",forks:"42",starup:"108"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,796",forks:"760",starup:"189"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,012",forks:"255",starup:"307"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,422",forks:"221",starup:"434"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"123",forks:"1,313",starup:"9"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"185",forks:"67",starup:"47"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,840",forks:"1,226",starup:"455"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,479",forks:"396",starup:"85"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,640",forks:"222",starup:"151"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,253",forks:"747",starup:"275"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"240",forks:"125",starup:"39"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,832",forks:"12,469",starup:"111"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,764",forks:"148",starup:"169"},{title:`Zhouqluo /

      bilidown-web`,owner:"Zhouqluo",name:"bilidown-web",avatar:"https://avatars.githubusercontent.com/u/86307617?s=40&v=4",path:"/Zhouqluo/bilidown-web",link:"https://github.com/Zhouqluo/bilidown-web",description:"在线下载b站视频",language:"Vue",stars:"268",forks:"46",starup:"108"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,993",forks:"14,625",starup:"89"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,780",forks:"1,772",starup:"109"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"504",forks:"77",starup:"102"}]},st={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=X("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=J({__name:"index",setup(T){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function f(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}M([p,e],()=>{h.value=f(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:k}=K();return(g,n)=>{const r=L,d=D,v=W,y=G,i=Y("LazyImage"),a=O,o=N,V=H,x=at,_=et;return c(),S("div",null,[l(y,null,{default:w(()=>[l(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>j(p)?p.value=m:null)},null,8,["modelValue"]),l(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>j(e)?e.value=m:null)},null,8,["modelValue"]),l(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>j(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),l(Q,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(c(),S("div",st,[rt,(c(!0),S($,null,Z(u(h),(m,I)=>(c(),C(V,{key:I,index:I,repo:m,onMouseenter:u(k)},{avatar:w(({repo:b})=>[l(i,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[l(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[l(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(c(),C(x,{key:1,data:u(h)},null,8,["data"])):(c(),C(_,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
