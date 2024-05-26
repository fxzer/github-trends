import{_ as B}from"./CBYm3uIf.js";import{_ as R}from"./Cb9EgTu_.js";import{_ as D}from"./C3EyvMNR.js";import G from"./CeD7jIFT.js";import{_ as N,a as O}from"./RwjdND1d.js";import{_ as H}from"./8GkdLCiZ.js";import{s as U,u as P,a as z,b as L,i as q,c as K}from"./BgW6TpjA.js";import{d as W,s as n}from"./CYcXzR8Z.js";import{n as J,q as F,h as I,o as l,c as S,s as _,r as T,u as $,b as c,w as y,T as Y,v as u,x as V,F as Q,y as X,z as j,a as Z}from"./C-MpkkD2.js";import{l as tt}from"./p2-M2djV.js";import"./BepMZnva.js";import"./jc7-Y0v6.js";import"./BQkc-AXV.js";import"./C6DScGN1.js";const at=J({__name:"Chart",props:{data:{}},setup(A){const p=A,{data:e}=F(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=P("仓库飙升榜",h);function k(r){const s=W(r);s.sort((a,i)=>{const x=n(a.starup)+n(a.stars)+n(a.forks),C=n(i.starup)+n(i.stars)+n(i.forks);return x-C});const[d,v,w,o]=s.reduce((a,i)=>(a[0].push(n(i.stars)),a[1].push(n(i.forks)),a[2].push(n(i.starup)),a[3].push(`${i.owner}/${i.name}`),a),[[],[],[],[]]);t.value.yAxis.data=o,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:f}=z(t,L);I(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(r,s)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),et=J({__name:"StarupChart",props:{data:{}},setup(A){const p=A,{data:e}=F(p),t=P("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=z(t,L);function f(r){const s=W(r);s.sort((o,a)=>n(o.starup)-n(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=s.map((o,a)=>(v.push(`${o.owner}/${o.name}`),{value:n(o.starup),name:`${o.owner}/${o.name}`,itemStyle:q(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}I(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(r,s)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),rt={"JavaScript-daily":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,187",forks:"3,325",starup:"229"},{title:`badges /

      shields`,owner:"badges",name:"shields",avatar:"https://avatars.githubusercontent.com/u/6025893?s=40&v=4",path:"/badges/shields",link:"https://github.com/badges/shields",description:"Concise, consistent, and legible badges in SVG and raster format",language:"JavaScript",stars:"22,730",forks:"5,455",starup:"8"},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/9736046?s=40&v=4",path:"/FreeTubeApp/FreeTube",link:"https://github.com/FreeTubeApp/FreeTube",description:"An Open Source YouTube app for privacy",language:"JavaScript",stars:"12,027",forks:"732",starup:"41"},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",link:"https://github.com/maboloshi/github-chinese",description:"GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",language:"JavaScript",stars:"3,276",forks:"204",starup:"73"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"814",forks:"3,221",starup:"15"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,667",forks:"4,547",starup:"44"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"511",forks:"2,340",starup:"10"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,684",forks:"10,651",starup:"27"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"176",forks:"666",starup:"10"},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",link:"https://github.com/gorhill/uBlock",description:"uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.",language:"JavaScript",stars:"43,729",forks:"2,935",starup:"22"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,429",forks:"1,162",starup:"5"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,960",forks:"2,741",starup:"29"},{title:`ninjas-code-official /

      food-delivery-multivendor`,owner:"ninjas-code-official",name:"food-delivery-multivendor",avatar:"https://avatars.githubusercontent.com/u/87254179?s=40&v=4",path:"/ninjas-code-official/food-delivery-multivendor",link:"https://github.com/ninjas-code-official/food-delivery-multivendor",description:"Enatega is a fully realized and customizable food delivery application that can be used to set up your own order/delivery management system. For more information, visit the Enatega product page: 🚀🛒📦🌐",language:"JavaScript",stars:"684",forks:"208",starup:"2"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,003",forks:"16,361",starup:"5"},{title:`max32002 /

      tixcraft_bot`,owner:"max32002",name:"tixcraft_bot",avatar:"https://avatars.githubusercontent.com/u/4498233?s=40&v=4",path:"/max32002/tixcraft_bot",link:"https://github.com/max32002/tixcraft_bot",description:"MaxBot open source code bot",language:"JavaScript",stars:"2,233",forks:"593",starup:"3"},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",link:"https://github.com/HeyPuter/puter",description:"🌐 The Web OS! Free, Open-Source, and Self-Hostable.",language:"JavaScript",stars:"18,851",forks:"1,148",starup:"37"},{title:`adrianhajdin /

      project_3D_developer_portfolio`,owner:"adrianhajdin",name:"project_3D_developer_portfolio",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/project_3D_developer_portfolio",link:"https://github.com/adrianhajdin/project_3D_developer_portfolio",description:"The most impressive websites in the world use 3D graphics and animations to bring their content to life. Learn how to build your own ThreeJS 3D Developer Portfolio today!",language:"JavaScript",stars:"5,294",forks:"1,175",starup:"6"},{title:`lyfe00011 /

      whatsapp-bot-md`,owner:"lyfe00011",name:"whatsapp-bot-md",avatar:"https://avatars.githubusercontent.com/u/76509367?s=40&v=4",path:"/lyfe00011/whatsapp-bot-md",link:"https://github.com/lyfe00011/whatsapp-bot-md",description:"A whatsapp Multi Device bot based on baileys",language:"JavaScript",stars:"1,554",forks:"17,942",starup:"2"},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",link:"https://github.com/github/docs",description:"The open-source repo for docs.github.com",language:"JavaScript",stars:"15,629",forks:"58,177",starup:"7"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,496",forks:"1,838",starup:"11"},{title:`tailwindlabs /

      heroicons`,owner:"tailwindlabs",name:"heroicons",avatar:"https://avatars.githubusercontent.com/u/1834413?s=40&v=4",path:"/tailwindlabs/heroicons",link:"https://github.com/tailwindlabs/heroicons",description:"A set of free MIT-licensed high-quality SVG icons for UI development.",language:"JavaScript",stars:"20,846",forks:"1,259",starup:"5"},{title:`ibrahimaitech /

      BLACK-PANTHER-XMD`,owner:"ibrahimaitech",name:"BLACK-PANTHER-XMD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BLACK-PANTHER-XMD",link:"https://github.com/ibrahimaitech/BLACK-PANTHER-XMD",description:"Black panther md is the fastest wabot that helps WhatsApp users to enjoy smooth life",language:"JavaScript",stars:"326",forks:"978",starup:"6"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,183",forks:"3,475",starup:"10"},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",link:"https://github.com/betaflight/betaflight-configurator",description:"Cross platform configuration tool for the Betaflight firmware",language:"JavaScript",stars:"2,377",forks:"858",starup:"3"},{title:`openwrt /

      luci`,owner:"openwrt",name:"luci",avatar:"https://avatars.githubusercontent.com/u/2528802?s=40&v=4",path:"/openwrt/luci",link:"https://github.com/openwrt/luci",description:"LuCI - OpenWrt Configuration Interface",language:"JavaScript",stars:"5,988",forks:"2,442",starup:"1"}],"JavaScript-weekly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,174",forks:"3,064",starup:"2,130"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,974",forks:"29,688",starup:"641"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently",language:"JavaScript",stars:"1,172",forks:"177",starup:"420"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"199",forks:"27",starup:"60"},{title:`google-ai-edge /

      model-explorer`,owner:"google-ai-edge",name:"model-explorer",avatar:"https://avatars.githubusercontent.com/u/8752427?s=40&v=4",path:"/google-ai-edge/model-explorer",link:"https://github.com/google-ai-edge/model-explorer",description:"A modern model graph visualizer and debugger",language:"JavaScript",stars:"725",forks:"34",starup:"267"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,870",forks:"996",starup:"167"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a dynamic graph where each node is an executable unit. Its modular and interactive design fosters rapid experimentation and prototyping, pushing hard on the limits of creativity.",language:"JavaScript",stars:"18,234",forks:"2,729",starup:"356"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,158",forks:"3,361",starup:"430"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,187",forks:"3,325",starup:"380"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,307",forks:"1,912",starup:"157"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,665",forks:"320",starup:"515"},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",link:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"24 Lessons, 12 Weeks, Get Started as a Web Developer",language:"JavaScript",stars:"81,803",forks:"12,221",starup:"155"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,629",forks:"9,747",starup:"116"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,573",forks:"26,013",starup:"291"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,412",forks:"522",starup:"86"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,464",forks:"35,142",starup:"165"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,485",forks:"1,395",starup:"92"},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",link:"https://github.com/bigskysoftware/htmx",description:"</> htmx - high power tools for HTML",language:"JavaScript",stars:"33,521",forks:"1,112",starup:"260"},{title:`laravel /

      breeze-next`,owner:"laravel",name:"breeze-next",avatar:"https://avatars.githubusercontent.com/u/463230?s=40&v=4",path:"/laravel/breeze-next",link:"https://github.com/laravel/breeze-next",description:"An application / authentication starter kit frontend in Next.js for Laravel Breeze.",language:"JavaScript",stars:"1,321",forks:"338",starup:"41"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,429",forks:"1,162",starup:"52"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,865",forks:"3,458",starup:"305"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,742",forks:"2,359",starup:"318"},{title:`metaskills /

      experts`,owner:"metaskills",name:"experts",avatar:"https://avatars.githubusercontent.com/u/2381?s=40&v=4",path:"/metaskills/experts",link:"https://github.com/metaskills/experts",description:"Experts.js is the easiest way to create and deploy OpenAI's Assistants and link them together as Tools to create advanced Multi AI Agent Systems with expanded memory and attention to detail.",language:"JavaScript",stars:"665",forks:"33",starup:"238"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,515",forks:"15,390",starup:"237"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,664",forks:"960",starup:"465"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,174",forks:"3,064",starup:"4,676"},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,405",forks:"742",starup:"4,582"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,935",forks:"1,550",starup:"2,854"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,870",forks:"996",starup:"502"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"600",forks:"104",starup:"313"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,115",forks:"218",starup:"1,092"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,487",forks:"45,509",starup:"2,065"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,204",forks:"6,688",starup:"647"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,158",forks:"3,361",starup:"792"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,665",forks:"320",starup:"1,106"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,053",forks:"2,505",starup:"284"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,573",forks:"26,013",starup:"1,195"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,764",forks:"5,898",starup:"873"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,651",forks:"968",starup:"412"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,574",forks:"1,531",starup:"151"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,429",forks:"1,162",starup:"203"},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",link:"https://github.com/MagicMirrorOrg/MagicMirror",description:"MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.",language:"JavaScript",stars:"19,311",forks:"4,148",starup:"338"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,496",forks:"1,838",starup:"384"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"511",forks:"2,340",starup:"219"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,003",forks:"16,361",starup:"205"},{title:`kkevsekk1 /

      AutoX`,owner:"kkevsekk1",name:"AutoX",avatar:"https://avatars.githubusercontent.com/u/16631944?s=40&v=4",path:"/kkevsekk1/AutoX",link:"https://github.com/kkevsekk1/AutoX",description:"A UiAutomator on android, does not need root access(安卓平台上的JavaScript自动化工具)",language:"JavaScript",stars:"6,329",forks:"1,582",starup:"313"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,230",forks:"1,247",starup:"701"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,629",forks:"3,482",starup:"442"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,515",forks:"15,390",starup:"553"},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",link:"https://github.com/spicetify/cli",description:"Command-line tool to customize Spotify client. Supports Windows, MacOS, and Linux.",language:"JavaScript",stars:"17,141",forks:"697",starup:"544"}],"TypeScript-daily":[{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"3,913",forks:"382",starup:"327"},{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"582",forks:"57",starup:"200"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"5,806",forks:"487",starup:"407"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Open-source VS Code and JetBrains extensions that enable you to easily create your own modular AI software development system",language:"TypeScript",stars:"11,794",forks:"746",starup:"36"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"6,226",forks:"667",starup:"105"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,267",forks:"1,189",starup:"45"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,451",forks:"35,781",starup:"49"},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/35996?s=40&v=4",path:"/nrwl/nx",link:"https://github.com/nrwl/nx",description:"Smart Monorepos · Fast CI",language:"TypeScript",stars:"22,328",forks:"2,223",starup:"11"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"20,653",forks:"1,550",starup:"71"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,152",forks:"489",starup:"50"},{title:`hoarder-app /

      hoarder`,owner:"hoarder-app",name:"hoarder",avatar:"https://avatars.githubusercontent.com/u/2418637?s=40&v=4",path:"/hoarder-app/hoarder",link:"https://github.com/hoarder-app/hoarder",description:"A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search",language:"TypeScript",stars:"1,436",forks:"45",starup:"46"},{title:`DIYgod /

      RSSHub`,owner:"DIYgod",name:"RSSHub",avatar:"https://avatars.githubusercontent.com/u/8266075?s=40&v=4",path:"/DIYgod/RSSHub",link:"https://github.com/DIYgod/RSSHub",description:"🧡 Everything is RSSible",language:"TypeScript",stars:"30,172",forks:"6,794",starup:"14"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"2,920",forks:"356",starup:"184"},{title:`normal-computing /

      fuji-web`,owner:"normal-computing",name:"fuji-web",avatar:"https://avatars.githubusercontent.com/u/1001890?s=40&v=4",path:"/normal-computing/fuji-web",link:"https://github.com/normal-computing/fuji-web",description:"Fuji is an AI agent that lives in your browser's sidepanel. You can now get tasks done online with a single command!",language:"TypeScript",stars:"140",forks:"8",starup:"18"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"1,066",forks:"78",starup:"31"},{title:`langchain-ai /

      langchain-nextjs-template`,owner:"langchain-ai",name:"langchain-nextjs-template",avatar:"https://avatars.githubusercontent.com/u/6952323?s=40&v=4",path:"/langchain-ai/langchain-nextjs-template",link:"https://github.com/langchain-ai/langchain-nextjs-template",description:"LangChain + Next.js starter template",language:"TypeScript",stars:"1,029",forks:"213",starup:"20"},{title:`midudev /

      aprendiendo-react`,owner:"midudev",name:"aprendiendo-react",avatar:"https://avatars.githubusercontent.com/u/1561955?s=40&v=4",path:"/midudev/aprendiendo-react",link:"https://github.com/midudev/aprendiendo-react",description:"Curso para aprender React desde cero",language:"TypeScript",stars:"6,724",forks:"1,007",starup:"23"},{title:`solidjs /

      solid-start`,owner:"solidjs",name:"solid-start",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid-start",link:"https://github.com/solidjs/solid-start",description:"SolidStart, the Solid app framework",language:"TypeScript",stars:"4,790",forks:"371",starup:"75"},{title:`sugarforever /

      chat-ollama`,owner:"sugarforever",name:"chat-ollama",avatar:"https://avatars.githubusercontent.com/u/404421?s=40&v=4",path:"/sugarforever/chat-ollama",link:"https://github.com/sugarforever/chat-ollama",description:"ChatOllama is an open source chatbot based on LLMs. It supports a wide range of language models, and knowledge base management.",language:"TypeScript",stars:"2,079",forks:"326",starup:"3"},{title:`vercel /

      next-learn`,owner:"vercel",name:"next-learn",avatar:"https://avatars.githubusercontent.com/u/32464864?s=40&v=4",path:"/vercel/next-learn",link:"https://github.com/vercel/next-learn",description:"Learn Next.js Starter Code",language:"TypeScript",stars:"3,276",forks:"1,711",starup:"3"},{title:`unjs /

      nitro`,owner:"unjs",name:"nitro",avatar:"https://avatars.githubusercontent.com/u/5158436?s=40&v=4",path:"/unjs/nitro",link:"https://github.com/unjs/nitro",description:"Next Generation Server Toolkit. Create web servers with everything you need and deploy them wherever you prefer.",language:"TypeScript",stars:"5,225",forks:"454",starup:"19"},{title:`payloadcms /

      payload`,owner:"payloadcms",name:"payload",avatar:"https://avatars.githubusercontent.com/u/6651896?s=40&v=4",path:"/payloadcms/payload",link:"https://github.com/payloadcms/payload",description:"The best way to build a modern backend + admin UI. No black magic, all TypeScript, and fully open-source, Payload is both an app framework and a headless CMS.",language:"TypeScript",stars:"20,210",forks:"1,199",starup:"21"},{title:`solidjs /

      solid`,owner:"solidjs",name:"solid",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid",link:"https://github.com/solidjs/solid",description:"A declarative, efficient, and flexible JavaScript library for building user interfaces.",language:"TypeScript",stars:"31,347",forks:"875",starup:"25"},{title:`recharts /

      recharts`,owner:"recharts",name:"recharts",avatar:"https://avatars.githubusercontent.com/u/6111424?s=40&v=4",path:"/recharts/recharts",link:"https://github.com/recharts/recharts",description:"Redefined chart library built with React and D3",language:"TypeScript",stars:"22,873",forks:"1,665",starup:"7"},{title:`chakra-ui /

      ark`,owner:"chakra-ui",name:"ark",avatar:"https://avatars.githubusercontent.com/u/1846056?s=40&v=4",path:"/chakra-ui/ark",link:"https://github.com/chakra-ui/ark",description:"A headless library for building reusable, scalable design systems that works for a wide range of JS frameworks.",language:"TypeScript",stars:"3,105",forks:"81",starup:"18"}],"TypeScript-weekly":[{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,699",forks:"340",starup:"1,483"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"2,920",forks:"356",starup:"1,432"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,737",forks:"670",starup:"892"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"559",forks:"41",starup:"223"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,598",forks:"2,292",starup:"563"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"779",forks:"133",starup:"557"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"640",forks:"117",starup:"249"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"5,806",forks:"487",starup:"2,117"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,482",forks:"1,069",starup:"487"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"1,066",forks:"78",starup:"360"},{title:`webstudio-is /

      webstudio`,owner:"webstudio-is",name:"webstudio",avatar:"https://avatars.githubusercontent.com/u/52824?s=40&v=4",path:"/webstudio-is/webstudio",link:"https://github.com/webstudio-is/webstudio",description:"Open Source alternative to Webflow, check out our CMS launch https://webstudio.is/cms",language:"TypeScript",stars:"3,919",forks:"376",starup:"93"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,283",forks:"7,244",starup:"772"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,300",forks:"6,907",starup:"108"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,152",forks:"489",starup:"159"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,533",forks:"124",starup:"388"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,840",forks:"24,721",starup:"190"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"3,913",forks:"382",starup:"395"},{title:`activepieces /

      activepieces`,owner:"activepieces",name:"activepieces",avatar:"https://avatars.githubusercontent.com/u/1812998?s=40&v=4",path:"/activepieces/activepieces",link:"https://github.com/activepieces/activepieces",description:"Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative",language:"TypeScript",stars:"8,152",forks:"868",starup:"733"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,483",forks:"14,139",starup:"1,096"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"93",forks:"47",starup:"23"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,495",forks:"3,368",starup:"223"},{title:`Lissy93 /

      web-check`,owner:"Lissy93",name:"web-check",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/web-check",link:"https://github.com/Lissy93/web-check",description:"🕵️‍♂️ All-in-one OSINT tool for analysing any website",language:"TypeScript",stars:"19,279",forks:"1,439",starup:"146"},{title:`angular /

      angular-cli`,owner:"angular",name:"angular-cli",avatar:"https://avatars.githubusercontent.com/u/17563226?s=40&v=4",path:"/angular/angular-cli",link:"https://github.com/angular/angular-cli",description:"CLI tool for Angular",language:"TypeScript",stars:"26,626",forks:"11,980",starup:"17"},{title:`Hiram-Wong /

      ZyPlayer`,owner:"Hiram-Wong",name:"ZyPlayer",avatar:"https://avatars.githubusercontent.com/u/30908279?s=40&v=4",path:"/Hiram-Wong/ZyPlayer",link:"https://github.com/Hiram-Wong/ZyPlayer",description:"跨平台桌面端视频资源播放器,免费高颜值.",language:"TypeScript",stars:"3,904",forks:"528",starup:"176"},{title:`EvolutionAPI /

      evolution-api`,owner:"EvolutionAPI",name:"evolution-api",avatar:"https://avatars.githubusercontent.com/u/24706726?s=40&v=4",path:"/EvolutionAPI/evolution-api",link:"https://github.com/EvolutionAPI/evolution-api",description:"Evolution API is an open-source WhatsApp integration API",language:"TypeScript",stars:"728",forks:"410",starup:"32"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,375",forks:"1,057",starup:"3,753"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,482",forks:"1,069",starup:"1,803"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,699",forks:"340",starup:"2,879"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,933",forks:"4,069",starup:"6,231"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,165",forks:"2,227",starup:"3,849"},{title:`cohere-ai /

      cohere-toolkit`,owner:"cohere-ai",name:"cohere-toolkit",avatar:"https://avatars.githubusercontent.com/u/39441856?s=40&v=4",path:"/cohere-ai/cohere-toolkit",link:"https://github.com/cohere-ai/cohere-toolkit",description:"Cohere Toolkit is a collection of prebuilt components enabling users to quickly build and deploy RAG applications.",language:"TypeScript",stars:"2,237",forks:"238",starup:"1,673"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,283",forks:"7,244",starup:"1,057"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"3,913",forks:"382",starup:"1,005"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,896",forks:"361",starup:"876"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,267",forks:"1,189",starup:"7,908"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"56,012",forks:"3,261",starup:"958"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,737",forks:"670",starup:"1,659"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,483",forks:"14,139",starup:"2,782"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,786",forks:"1,332",starup:"838"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,300",forks:"6,907",starup:"298"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,212",forks:"361",starup:"2,056"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,598",forks:"2,292",starup:"1,901"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,219",forks:"1,388",starup:"460"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,302",forks:"157",starup:"939"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,357",forks:"3,436",starup:"941"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"915",forks:"56",starup:"356"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,451",forks:"35,781",starup:"2,845"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,679",forks:"13,146",starup:"1,735"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,358",forks:"199",starup:"549"},{title:`Innei /

      Shiro`,owner:"Innei",name:"Shiro",avatar:"https://avatars.githubusercontent.com/u/41265413?s=40&v=4",path:"/Innei/Shiro",link:"https://github.com/Innei/Shiro",description:"📜 A minimalist personal website embodying the purity of paper and freshness of snow.",language:"TypeScript",stars:"2,850",forks:"563",starup:"745"}],"Vue-daily":[{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,858",forks:"256",starup:"9"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,009",forks:"134",starup:"2"},{title:`chatgpt-web-dev /

      chatgpt-web`,owner:"chatgpt-web-dev",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/chatgpt-web-dev/chatgpt-web",link:"https://github.com/chatgpt-web-dev/chatgpt-web",description:"A third-party ChatGPT Web UI page built with Express and Vue3, through the official OpenAI completion API. / 用 Express 和 Vue3 搭建的第三方 ChatGPT 前端页面, 基于 OpenAI 官方 completion API.",language:"Vue",stars:"1,468",forks:"429",starup:"5"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,334",forks:"712",starup:"12"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,188",forks:"180",starup:"15"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"511",forks:"31",starup:"8"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,250",forks:"226",starup:"5"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,744",forks:"1,960",starup:"59"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,144",forks:"831",starup:"23"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,335",forks:"4,030",starup:"12"},{title:`bobvinch /

      comfyui-webdemo`,owner:"bobvinch",name:"comfyui-webdemo",avatar:"https://avatars.githubusercontent.com/u/156988167?s=40&v=4",path:"/bobvinch/comfyui-webdemo",link:"https://github.com/bobvinch/comfyui-webdemo",description:"A very beautiful and simple front-end AI drawing demo using ComfyUI as the background, using Nuxt3 and Vuetify",language:"Vue",stars:"50",forks:"12",starup:"4"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,931",forks:"496",starup:"9"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"233",forks:"121",starup:"1"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,774",forks:"1,217",starup:"14"},{title:`AkiChase /

      scrcpy-mask`,owner:"AkiChase",name:"scrcpy-mask",avatar:"https://avatars.githubusercontent.com/u/59353056?s=40&v=4",path:"/AkiChase/scrcpy-mask",link:"https://github.com/AkiChase/scrcpy-mask",description:"A Scrcpy client in Rust & Tarui aimed at providing mouse and key mapping to control Android device, similar to a game emulator",language:"Vue",stars:"347",forks:"17",starup:"7"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,988",forks:"14,625",starup:"1"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,297",forks:"1,034",starup:"15"},{title:`eslint /

      config-inspector`,owner:"eslint",name:"config-inspector",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/eslint/config-inspector",link:"https://github.com/eslint/config-inspector",description:"A visual tool for inspecting and understanding your ESLint flat configs.",language:"Vue",stars:"449",forks:"12",starup:"2"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,683",forks:"30,345",starup:"10"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,520",forks:"1,429",starup:"13"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,846",forks:"77",starup:"3"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,465",forks:"2,772",starup:"14"},{title:`epicmaxco /

      vuestic-ui`,owner:"epicmaxco",name:"vuestic-ui",avatar:"https://avatars.githubusercontent.com/u/23530004?s=40&v=4",path:"/epicmaxco/vuestic-ui",link:"https://github.com/epicmaxco/vuestic-ui",description:"Free and Open Source UI Library for Vue 3 🤘",language:"Vue",stars:"3,324",forks:"322",starup:"1"},{title:`JustArchiNET /

      ASF-ui`,owner:"JustArchiNET",name:"ASF-ui",avatar:"https://avatars.githubusercontent.com/u/31552675?s=40&v=4",path:"/JustArchiNET/ASF-ui",link:"https://github.com/JustArchiNET/ASF-ui",description:"The official web interface for ASF",language:"Vue",stars:"249",forks:"34",starup:"0"},{title:`ifzc /

      Shkjem`,owner:"ifzc",name:"Shkjem",avatar:"https://avatars.githubusercontent.com/u/30067329?s=40&v=4",path:"/ifzc/Shkjem",link:"https://github.com/ifzc/Shkjem",description:"基于Vue&ElementUI的企业官网",language:"Vue",stars:"902",forks:"320",starup:"0"}],"Vue-weekly":[{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,113",forks:"729",starup:"98"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,334",forks:"712",starup:"47"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,624",forks:"219",starup:"53"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,340",forks:"210",starup:"134"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,465",forks:"2,772",starup:"103"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,676",forks:"2,591",starup:"57"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,858",forks:"256",starup:"41"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"407",forks:"137",starup:"326"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,412",forks:"1,411",starup:"24"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"346",forks:"84",starup:"57"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,264",starup:"4"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,520",forks:"1,429",starup:"58"},{title:`wilfredinni /

      python-cheatsheet`,owner:"wilfredinni",name:"python-cheatsheet",avatar:"https://avatars.githubusercontent.com/u/23016174?s=40&v=4",path:"/wilfredinni/python-cheatsheet",link:"https://github.com/wilfredinni/python-cheatsheet",description:"All-inclusive Python cheatsheet",language:"Vue",stars:"4,078",forks:"1,249",starup:"21"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"800",forks:"205",starup:"33"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,665",forks:"11,168",starup:"86"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"254",forks:"46",starup:"56"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,195",forks:"488",starup:"31"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,756",forks:"1,770",starup:"31"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,188",forks:"180",starup:"63"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,238",forks:"3,611",starup:"43"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,136",forks:"877",starup:"24"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,571",forks:"98",starup:"51"},{title:`wizarrrr /

      wizarr`,owner:"wizarrrr",name:"wizarr",avatar:"https://avatars.githubusercontent.com/u/16636012?s=40&v=4",path:"/wizarrrr/wizarr",link:"https://github.com/wizarrrr/wizarr",description:"Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc.",language:"Vue",stars:"1,101",forks:"81",starup:"21"},{title:`chatgpt-web-dev /

      chatgpt-web`,owner:"chatgpt-web-dev",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/chatgpt-web-dev/chatgpt-web",link:"https://github.com/chatgpt-web-dev/chatgpt-web",description:"A third-party ChatGPT Web UI page built with Express and Vue3, through the official OpenAI completion API. / 用 Express 和 Vue3 搭建的第三方 ChatGPT 前端页面, 基于 OpenAI 官方 completion API.",language:"Vue",stars:"1,468",forks:"429",starup:"24"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,732",forks:"1,095",starup:"15"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,938",forks:"1,937",starup:"4,871"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,744",forks:"1,960",starup:"5,744"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,297",forks:"1,034",starup:"665"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,774",forks:"1,217",starup:"457"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,739",forks:"317",starup:"705"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,624",forks:"219",starup:"141"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,676",forks:"2,591",starup:"251"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,188",forks:"180",starup:"326"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,776",forks:"760",starup:"188"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,264",starup:"6"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,340",forks:"210",starup:"356"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,334",forks:"712",starup:"183"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"273",forks:"39",starup:"111"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"800",forks:"205",starup:"120"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"173",forks:"60",starup:"125"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"233",forks:"121",starup:"34"},{title:`Zhouqluo /

      bilidown-web`,owner:"Zhouqluo",name:"bilidown-web",avatar:"https://avatars.githubusercontent.com/u/86307617?s=40&v=4",path:"/Zhouqluo/bilidown-web",link:"https://github.com/Zhouqluo/bilidown-web",description:"在线下载b站视频",language:"Vue",stars:"248",forks:"45",starup:"165"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"779",forks:"68",starup:"156"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,195",forks:"488",starup:"125"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,144",forks:"831",starup:"489"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,815",forks:"4,121",starup:"36"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,712",forks:"3,708",starup:"148"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,520",forks:"1,429",starup:"175"},{title:`justboil /

      admin-one-vue-tailwind`,owner:"justboil",name:"admin-one-vue-tailwind",avatar:"https://avatars.githubusercontent.com/u/1877513?s=40&v=4",path:"/justboil/admin-one-vue-tailwind",link:"https://github.com/justboil/admin-one-vue-tailwind",description:"Free Vue.js 3.x Tailwind 3.x admin dashboard template with dark mode. Vite builds. Pinia state. Laravel integration available",language:"Vue",stars:"2,011",forks:"369",starup:"43"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,571",forks:"98",starup:"226"}]},nt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},st=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=J({__name:"index",setup(A){const p=T("daily"),e=T("JavaScript"),h=T([]),t=T("list");function k(g){return g.sort((r,s)=>n(s.starup)-n(r.starup))}I([p,e],()=>{h.value=k(rt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=K();return(g,r)=>{const s=B,d=R,v=D,w=G,o=$("LazyImage"),a=N,i=H,x=O,C=at,E=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(s,{modelValue:u(p),"onUpdate:modelValue":r[0]||(r[0]=m=>V(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":r[1]||(r[1]=m=>V(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":r[2]||(r[2]=m=>V(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(Y,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",nt,[st,(l(!0),S(Q,null,X(u(h),(m,M)=>(l(),j(x,{key:M,index:M,repo:m,onMouseenter:u(f)},{avatar:y(({repo:b})=>[c(o,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(i,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),j(C,{key:1,data:u(h)},null,8,["data"])):(l(),j(E,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
