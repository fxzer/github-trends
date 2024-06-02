import{_ as L}from"./DoH3oWYp.js";import{_ as z}from"./UQ38bndo.js";import{_ as E}from"./7zKE7Ch6.js";import F from"./oYYaVDv6.js";import{_ as O,a as N}from"./BW3OAR92.js";import{_ as H}from"./CXYpNj5A.js";import{s as Y,u as I,a as G,b as R,i as U,c as K}from"./01BD1qID.js";import{d as _,s as r}from"./CYcXzR8Z.js";import{n as C,q as B,h as J,o as l,c as S,s as W,r as j,u as q,b as c,w,T as $,v as u,x as V,F as Q,y as Z,z as M,a as X}from"./DkpeRd0j.js";import{l as tt}from"./p2-M2djV.js";import"./DulKN-L3.js";import"./Crj_zNiY.js";import"./BQkc-AXV.js";import"./D_5CPAp3.js";const at=C({__name:"Chart",props:{data:{}},setup(T){const p=T,{data:e}=B(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(Y),t=I("仓库飙升榜",h);function k(n){const s=_(n);s.sort((a,o)=>{const A=r(a.starup)+r(a.stars)+r(a.forks),x=r(o.starup)+r(o.stars)+r(o.forks);return A-x});const[d,v,y,i]=s.reduce((a,o)=>(a[0].push(r(o.stars)),a[1].push(r(o.forks)),a[2].push(r(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:f}=G(t,R);J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:W({height:g})},null,4))}}),et=C({__name:"StarupChart",props:{data:{}},setup(T){const p=T,{data:e}=B(p),t=I("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=G(t,R);function f(n){const s=_(n);s.sort((i,a)=>r(i.starup)-r(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=s.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:r(i.starup),name:`${i.owner}/${i.name}`,itemStyle:U(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:W({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,885",forks:"11,203",starup:"64"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,230",forks:"1,869",starup:"36"},{title:`3Kmfi6HP /

      EDtunnel`,owner:"3Kmfi6HP",name:"EDtunnel",avatar:"https://avatars.githubusercontent.com/u/58669916?s=40&v=4",path:"/3Kmfi6HP/EDtunnel",link:"https://github.com/3Kmfi6HP/EDtunnel",description:"Use Cloudflare pages and worker serverless to implement VLESS protocol",language:"JavaScript",stars:"5,773",forks:"5,563",starup:"14"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"684",forks:"117",starup:"15"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,974",forks:"1,544",starup:"3"},{title:`pmndrs /

      drei`,owner:"pmndrs",name:"drei",avatar:"https://avatars.githubusercontent.com/u/2223602?s=40&v=4",path:"/pmndrs/drei",link:"https://github.com/pmndrs/drei",description:"🥉 useful helpers for react-three-fiber",language:"JavaScript",stars:"7,590",forks:"623",starup:"8"},{title:`jonasschmedtmann /

      complete-node-bootcamp`,owner:"jonasschmedtmann",name:"complete-node-bootcamp",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-node-bootcamp",link:"https://github.com/jonasschmedtmann/complete-node-bootcamp",description:"Starter files, final projects and FAQ for my Complete Node.js Bootcamp",language:"JavaScript",stars:"2,938",forks:"3,477",starup:"2"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"345",forks:"1,689",starup:"19"},{title:`Kingjux /

      Venocyber-md`,owner:"Kingjux",name:"Venocyber-md",avatar:"https://avatars.githubusercontent.com/u/154667110?s=40&v=4",path:"/Kingjux/Venocyber-md",link:"https://github.com/Kingjux/Venocyber-md",description:"Introducing Venocyber md bot your personal chuddybuddy md you were looking for this is most powerful Whatsapp chat bot created to ensure your WhatsApp personal requirements you are all in one ✍️👋👋",language:"JavaScript",stars:"194",forks:"712",starup:"9"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"223",forks:"836",starup:"12"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,312",forks:"3,404",starup:"27"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,611",forks:"2,487",starup:"22"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,115",forks:"1,121",starup:"10"},{title:`soumyajit4419 /

      Portfolio`,owner:"soumyajit4419",name:"Portfolio",avatar:"https://avatars.githubusercontent.com/u/46092576?s=40&v=4",path:"/soumyajit4419/Portfolio",link:"https://github.com/soumyajit4419/Portfolio",description:"My self coded personal website build with React.js",language:"JavaScript",stars:"3,823",forks:"2,072",starup:"5"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,574",forks:"1,420",starup:"14"},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",link:"https://github.com/MagicMirrorOrg/MagicMirror",description:"MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.",language:"JavaScript",stars:"19,327",forks:"4,149",starup:"6"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,259",forks:"1,605",starup:"5"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,539",forks:"11,758",starup:"5"},{title:`TheRealJoelmatic /

      RemoveAdblockThing`,owner:"TheRealJoelmatic",name:"RemoveAdblockThing",avatar:"https://avatars.githubusercontent.com/u/78729990?s=40&v=4",path:"/TheRealJoelmatic/RemoveAdblockThing",link:"https://github.com/TheRealJoelmatic/RemoveAdblockThing",description:`The intrusive "Ad blocker are not allowed on YouTube" message is annoying. This open-source project aims to address this issue by providing a solution to bypass YouTube's ad blocker detection`,language:"JavaScript",stars:"5,123",forks:"281",starup:"20"},{title:`Muskansahuincredible /

      StudyNotion-An-Online-Education-Platform`,owner:"Muskansahuincredible",name:"StudyNotion-An-Online-Education-Platform",avatar:"https://avatars.githubusercontent.com/u/125847751?s=40&v=4",path:"/Muskansahuincredible/StudyNotion-An-Online-Education-Platform",link:"https://github.com/Muskansahuincredible/StudyNotion-An-Online-Education-Platform",description:"",language:"JavaScript",stars:"46",forks:"78",starup:"9"},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",link:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",language:"JavaScript",stars:"76,979",forks:"3,998",starup:"20"},{title:`gethomepage /

      homepage`,owner:"gethomepage",name:"homepage",avatar:"https://avatars.githubusercontent.com/u/1607653?s=40&v=4",path:"/gethomepage/homepage",link:"https://github.com/gethomepage/homepage",description:"A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.",language:"JavaScript",stars:"16,723",forks:"956",starup:"13"},{title:`SyedImtiyaz-1 /

      GetTechProjects`,owner:"SyedImtiyaz-1",name:"GetTechProjects",avatar:"https://avatars.githubusercontent.com/u/121503426?s=40&v=4",path:"/SyedImtiyaz-1/GetTechProjects",link:"https://github.com/SyedImtiyaz-1/GetTechProjects",description:"Make your first Pull Request on this Repo. Don't forget to spread love and give us a ⭐️",language:"JavaScript",stars:"153",forks:"166",starup:"7"},{title:`kunjgit /

      GameZone`,owner:"kunjgit",name:"GameZone",avatar:"https://avatars.githubusercontent.com/u/103763618?s=40&v=4",path:"/kunjgit/GameZone",link:"https://github.com/kunjgit/GameZone",description:"This open source repository contains collection of games build on basic tech stacks in web development . Use your creativity and build your own game and contribute to the repository by making PR 🎮",language:"JavaScript",stars:"449",forks:"705",starup:"6"},{title:`fanmingming /

      live`,owner:"fanmingming",name:"live",avatar:"https://avatars.githubusercontent.com/u/4993993?s=40&v=4",path:"/fanmingming/live",link:"https://github.com/fanmingming/live",description:"✯ 一个可直连访问的电视/广播图标库与相关工具项目 ✯ 🔕 永久免费 直连访问 完整开源 不断完善的台标 支持IPv4/IPv6双栈访问 🔕",language:"JavaScript",stars:"19,195",forks:"2,816",starup:"13"}],"JavaScript-weekly":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,773",forks:"3,377",starup:"822"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,885",forks:"11,203",starup:"231"},{title:`nerfies /

      nerfies.github.io`,owner:"nerfies",name:"nerfies.github.io",avatar:"https://avatars.githubusercontent.com/u/297680?s=40&v=4",path:"/nerfies/nerfies.github.io",link:"https://github.com/nerfies/nerfies.github.io",description:"",language:"JavaScript",stars:"1,954",forks:"595",starup:"36"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,307",forks:"2,966",starup:"92"},{title:`Chalarangelo /

      30-seconds-of-code`,owner:"Chalarangelo",name:"30-seconds-of-code",avatar:"https://avatars.githubusercontent.com/u/8281875?s=40&v=4",path:"/Chalarangelo/30-seconds-of-code",link:"https://github.com/Chalarangelo/30-seconds-of-code",description:"Short code snippets for all your development needs",language:"JavaScript",stars:"119,810",forks:"11,893",starup:"198"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,312",forks:"3,404",starup:"283"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,461",forks:"1,261",starup:"243"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"5,205",forks:"366",starup:"527"},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",link:"https://github.com/pedroslopez/whatsapp-web.js",description:"A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",language:"JavaScript",stars:"13,950",forks:"3,348",starup:"71"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"589",forks:"2,700",starup:"79"},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",link:"https://github.com/jaywcjlove/awesome-mac",description:" Now we have become very big, Different from the original idea. Collect premium software in various categories.",language:"JavaScript",stars:"72,232",forks:"6,138",starup:"175"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,831",forks:"8,837",starup:"169"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"868",forks:"3,445",starup:"72"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"223",forks:"836",starup:"53"},{title:`leafTheFish /

      DeathNote`,owner:"leafTheFish",name:"DeathNote",avatar:"https://avatars.githubusercontent.com/u/103831852?s=40&v=4",path:"/leafTheFish/DeathNote",link:"https://github.com/leafTheFish/DeathNote",description:"",language:"JavaScript",stars:"2,689",forks:"865",starup:"52"},{title:`V2RaySSR /

      Free-VLESS`,owner:"V2RaySSR",name:"Free-VLESS",avatar:"https://avatars.githubusercontent.com/u/59167743?s=40&v=4",path:"/V2RaySSR/Free-VLESS",link:"https://github.com/V2RaySSR/Free-VLESS",description:"通过 Cloudflare，免费部署 VLESS节点",language:"JavaScript",stars:"114",forks:"45",starup:"34"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,821",forks:"26,058",starup:"312"},{title:`TheRealJoelmatic /

      RemoveAdblockThing`,owner:"TheRealJoelmatic",name:"RemoveAdblockThing",avatar:"https://avatars.githubusercontent.com/u/78729990?s=40&v=4",path:"/TheRealJoelmatic/RemoveAdblockThing",link:"https://github.com/TheRealJoelmatic/RemoveAdblockThing",description:`The intrusive "Ad blocker are not allowed on YouTube" message is annoying. This open-source project aims to address this issue by providing a solution to bypass YouTube's ad blocker detection`,language:"JavaScript",stars:"5,123",forks:"281",starup:"69"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"345",forks:"1,689",starup:"71"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,303",forks:"11,653",starup:"53"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, LLM and vector store agnostic.",language:"JavaScript",stars:"18,487",forks:"2,776",starup:"273"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,886",forks:"1,796",starup:"54"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,915",forks:"346",starup:"270"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,633",forks:"35,154",starup:"190"},{title:`VincentGarreau /

      particles.js`,owner:"VincentGarreau",name:"particles.js",avatar:"https://avatars.githubusercontent.com/u/961898?s=40&v=4",path:"/VincentGarreau/particles.js",link:"https://github.com/VincentGarreau/particles.js",description:"A lightweight JavaScript library for creating particles",language:"JavaScript",stars:"28,538",forks:"4,806",starup:"82"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,905",forks:"3,151",starup:"4,534"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,368",forks:"1,603",starup:"2,958"},{title:`IvanGlinkin /

      CCTV`,owner:"IvanGlinkin",name:"CCTV",avatar:"https://avatars.githubusercontent.com/u/64857726?s=40&v=4",path:"/IvanGlinkin/CCTV",link:"https://github.com/IvanGlinkin/CCTV",description:"Close-Circuit Telegram Vision revolutionizes location tracking with its open-source design and Telegram API integration. Offering precise tracking within 50-100 meters, users can monitor others in real-time for logistics or safety, redefining how we navigate our surroundings",language:"JavaScript",stars:"2,176",forks:"304",starup:"2,144"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,173",forks:"222",starup:"1,128"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"684",forks:"117",starup:"327"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,915",forks:"346",starup:"1,322"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,782",forks:"45,568",starup:"2,056"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,233",forks:"3,367",starup:"830"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,916",forks:"1,009",starup:"413"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,230",forks:"1,869",starup:"1,050"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,950",forks:"5,936",starup:"908"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,821",forks:"26,058",starup:"1,253"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,616",forks:"1,556",starup:"172"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,692",forks:"983",starup:"424"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,115",forks:"1,121",starup:"285"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,467",forks:"1,189",starup:"205"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,265",forks:"7,330",starup:"516"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,706",forks:"3,494",starup:"455"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,312",forks:"3,404",starup:"714"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,039",forks:"16,387",starup:"213"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,773",forks:"3,377",starup:"1,208"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,886",forks:"1,796",starup:"207"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,952",forks:"12,391",starup:"171"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,560",forks:"1,869",starup:"395"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,633",forks:"35,154",starup:"738"}],"TypeScript-daily":[{title:`ishaan1013 /

      sandbox`,owner:"ishaan1013",name:"sandbox",avatar:"https://avatars.githubusercontent.com/u/69771365?s=40&v=4",path:"/ishaan1013/sandbox",link:"https://github.com/ishaan1013/sandbox",description:"A cloud-based code editing environment with an AI copilot and real-time collaboration.",language:"TypeScript",stars:"817",forks:"65",starup:"113"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"34,508",forks:"1,637",starup:"57"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,114",forks:"1,472",starup:"98"},{title:`Nutlope /

      turboseek`,owner:"Nutlope",name:"turboseek",avatar:"https://avatars.githubusercontent.com/u/63742054?s=40&v=4",path:"/Nutlope/turboseek",link:"https://github.com/Nutlope/turboseek",description:"An AI search engine inspired by Perplexity",language:"TypeScript",stars:"279",forks:"38",starup:"116"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"760",forks:"959",starup:"12"},{title:`lyswhut /

      lx-music-desktop`,owner:"lyswhut",name:"lx-music-desktop",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-desktop",link:"https://github.com/lyswhut/lx-music-desktop",description:"一个基于 electron 的音乐软件",language:"TypeScript",stars:"37,386",forks:"5,669",starup:"37"},{title:`rjmacarthy /

      twinny`,owner:"rjmacarthy",name:"twinny",avatar:"https://avatars.githubusercontent.com/u/5537428?s=40&v=4",path:"/rjmacarthy/twinny",link:"https://github.com/rjmacarthy/twinny",description:"The most no-nonsense, locally or API-hosted AI code completion plugin for Visual Studio Code - like GitHub Copilot but completely free and 100% private.",language:"TypeScript",stars:"1,947",forks:"107",starup:"37"},{title:`xiaolai /

      everyone-can-use-english`,owner:"xiaolai",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/xiaolai/everyone-can-use-english",link:"https://github.com/xiaolai/everyone-can-use-english",description:"人人都能用英语",language:"TypeScript",stars:"19,904",forks:"3,250",starup:"33"},{title:`udecode /

      plate`,owner:"udecode",name:"plate",avatar:"https://avatars.githubusercontent.com/u/19695832?s=40&v=4",path:"/udecode/plate",link:"https://github.com/udecode/plate",description:"The rich-text editor for React.",language:"TypeScript",stars:"8,342",forks:"595",starup:"52"},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",link:"https://github.com/supabase/supabase",description:"The open source Firebase alternative.",language:"TypeScript",stars:"67,289",forks:"6,328",starup:"19"},{title:`OcularEngineering /

      ocular`,owner:"OcularEngineering",name:"ocular",avatar:"https://avatars.githubusercontent.com/u/35416595?s=40&v=4",path:"/OcularEngineering/ocular",link:"https://github.com/OcularEngineering/ocular",description:"AI Powered Search and Chat for Orgs - Think ChatGpt meets Google Search but powered by your data.",language:"TypeScript",stars:"359",forks:"21",starup:"16"},{title:`adrianhajdin /

      ecommerce`,owner:"adrianhajdin",name:"ecommerce",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/ecommerce",link:"https://github.com/adrianhajdin/ecommerce",description:"Learn how to build an incredible e-commerce webshop with an admin dashboard and CMS using Next 14, Stripe, TypeScript, and Payload CMS.",language:"TypeScript",stars:"879",forks:"262",starup:"4"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,559",forks:"161",starup:"92"},{title:`AtotheY /

      saas-landingpage`,owner:"AtotheY",name:"saas-landingpage",avatar:"https://avatars.githubusercontent.com/u/10644934?s=40&v=4",path:"/AtotheY/saas-landingpage",link:"https://github.com/AtotheY/saas-landingpage",description:"https://map.sistilli.dev/public/coding/SaaS+Boilerplate",language:"TypeScript",stars:"860",forks:"111",starup:"16"},{title:`Aylur /

      dotfiles`,owner:"Aylur",name:"dotfiles",avatar:"https://avatars.githubusercontent.com/u/104676705?s=40&v=4",path:"/Aylur/dotfiles",link:"https://github.com/Aylur/dotfiles",description:"My personal config files",language:"TypeScript",stars:"2,032",forks:"114",starup:"18"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,567",forks:"1,268",starup:"48"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,774",forks:"1,165",starup:"46"},{title:`yamada-ui /

      yamada-ui`,owner:"yamada-ui",name:"yamada-ui",avatar:"https://avatars.githubusercontent.com/u/84060430?s=40&v=4",path:"/yamada-ui/yamada-ui",link:"https://github.com/yamada-ui/yamada-ui",description:"React UI components of the Yamada, by the Yamada, for the Yamada built with React and Emotion.",language:"TypeScript",stars:"525",forks:"133",starup:"4"},{title:`darkreader /

      darkreader`,owner:"darkreader",name:"darkreader",avatar:"https://avatars.githubusercontent.com/u/25481501?s=40&v=4",path:"/darkreader/darkreader",link:"https://github.com/darkreader/darkreader",description:"Dark Reader Chrome and Firefox extension",language:"TypeScript",stars:"18,897",forks:"2,292",starup:"4"},{title:`Koenkk /

      zigbee-herdsman-converters`,owner:"Koenkk",name:"zigbee-herdsman-converters",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee-herdsman-converters",link:"https://github.com/Koenkk/zigbee-herdsman-converters",description:"Collection of device converters to be used with zigbee-herdsman",language:"TypeScript",stars:"842",forks:"2,797",starup:"0"},{title:`DIYgod /

      RSSHub`,owner:"DIYgod",name:"RSSHub",avatar:"https://avatars.githubusercontent.com/u/8266075?s=40&v=4",path:"/DIYgod/RSSHub",link:"https://github.com/DIYgod/RSSHub",description:"🧡 Everything is RSSible",language:"TypeScript",stars:"30,298",forks:"6,819",starup:"21"},{title:`appwrite /

      appwrite`,owner:"appwrite",name:"appwrite",avatar:"https://avatars.githubusercontent.com/u/1297371?s=40&v=4",path:"/appwrite/appwrite",link:"https://github.com/appwrite/appwrite",description:"Your backend, minus the hassle.",language:"TypeScript",stars:"41,594",forks:"3,765",starup:"18"},{title:`gaozhangmin /

      aliyunpan`,owner:"gaozhangmin",name:"aliyunpan",avatar:"https://avatars.githubusercontent.com/u/9278488?s=40&v=4",path:"/gaozhangmin/aliyunpan",link:"https://github.com/gaozhangmin/aliyunpan",description:"小白羊网盘 - Powered by 阿里云盘。",language:"TypeScript",stars:"5,494",forks:"281",starup:"26"},{title:`denoland /

      deno_std`,owner:"denoland",name:"deno_std",avatar:"https://avatars.githubusercontent.com/u/29347852?s=40&v=4",path:"/denoland/deno_std",link:"https://github.com/denoland/deno_std",description:"The Deno Standard Library",language:"TypeScript",stars:"2,801",forks:"574",starup:"0"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"932",forks:"162",starup:"10"}],"TypeScript-weekly":[{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"2,132",forks:"178",starup:"1,783"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,074",forks:"715",starup:"933"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,810",forks:"134",starup:"499"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,081",forks:"416",starup:"1,505"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,511",forks:"1,130",starup:"683"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,236",forks:"780",starup:"506"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,621",forks:"448",starup:"871"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"891",forks:"65",starup:"339"},{title:`slab /

      quill`,owner:"slab",name:"quill",avatar:"https://avatars.githubusercontent.com/u/192974?s=40&v=4",path:"/slab/quill",link:"https://github.com/slab/quill",description:"Quill is a modern WYSIWYG editor built for compatibility and extensibility",language:"TypeScript",stars:"41,854",forks:"3,283",starup:"156"},{title:`magicuidesign /

      magicui`,owner:"magicuidesign",name:"magicui",avatar:"https://avatars.githubusercontent.com/u/16860528?s=40&v=4",path:"/magicuidesign/magicui",link:"https://github.com/magicuidesign/magicui",description:"UI Library for Design Engineers. Animated components and effects you can copy and paste into your apps. Free. Open Source.",language:"TypeScript",stars:"3,296",forks:"103",starup:"1,294"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,406",forks:"1,615",starup:"774"},{title:`labring /

      FastGPT`,owner:"labring",name:"FastGPT",avatar:"https://avatars.githubusercontent.com/u/50446880?s=40&v=4",path:"/labring/FastGPT",link:"https://github.com/labring/FastGPT",description:"FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.",language:"TypeScript",stars:"14,058",forks:"3,609",starup:"292"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"30,104",forks:"4,725",starup:"246"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,434",forks:"380",starup:"833"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,529",forks:"497",starup:"415"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,173",forks:"2,013",starup:"110"},{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,578",forks:"183",starup:"1,019"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"760",forks:"959",starup:"58"},{title:`brocoders /

      nestjs-boilerplate`,owner:"brocoders",name:"nestjs-boilerplate",avatar:"https://avatars.githubusercontent.com/u/25180681?s=40&v=4",path:"/brocoders/nestjs-boilerplate",link:"https://github.com/brocoders/nestjs-boilerplate",description:"NestJS boilerplate. Auth, TypeORM, Mongoose, Postgres, MongoDB, Mailing, I18N, Docker.",language:"TypeScript",stars:"2,554",forks:"508",starup:"116"},{title:`AIsouler /

      GKD_subscription`,owner:"AIsouler",name:"GKD_subscription",avatar:"https://avatars.githubusercontent.com/u/57941037?s=40&v=4",path:"/AIsouler/GKD_subscription",link:"https://github.com/AIsouler/GKD_subscription",description:"GKD 第三方订阅规则",language:"TypeScript",stars:"902",forks:"42",starup:"185"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,114",forks:"1,472",starup:"160"},{title:`linkwarden /

      linkwarden`,owner:"linkwarden",name:"linkwarden",avatar:"https://avatars.githubusercontent.com/u/93432314?s=40&v=4",path:"/linkwarden/linkwarden",link:"https://github.com/linkwarden/linkwarden",description:"⚡️⚡️⚡️Self-hosted collaborative bookmark manager to collect, organize, and preserve webpages and articles.",language:"TypeScript",stars:"6,385",forks:"228",starup:"129"},{title:`M-cheng-web /

      web-tracing`,owner:"M-cheng-web",name:"web-tracing",avatar:"https://avatars.githubusercontent.com/u/58416262?s=40&v=4",path:"/M-cheng-web/web-tracing",link:"https://github.com/M-cheng-web/web-tracing",description:"为前端项目提供【 埋点、行为、性能、异常、请求、资源、路由、曝光、录屏 】监控手段",language:"TypeScript",stars:"1,926",forks:"227",starup:"184"},{title:`midday-ai /

      midday`,owner:"midday-ai",name:"midday",avatar:"https://avatars.githubusercontent.com/u/655158?s=40&v=4",path:"/midday-ai/midday",link:"https://github.com/midday-ai/midday",description:"Run your business smarter 🪄",language:"TypeScript",stars:"2,541",forks:"239",starup:"139"},{title:`bluesky-social /

      atproto`,owner:"bluesky-social",name:"atproto",avatar:"https://avatars.githubusercontent.com/u/4898225?s=40&v=4",path:"/bluesky-social/atproto",link:"https://github.com/bluesky-social/atproto",description:"Social networking technology created by Bluesky",language:"TypeScript",stars:"5,750",forks:"396",starup:"24"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"10,021",forks:"1,109",starup:"4,421"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,567",forks:"1,268",starup:"6,196"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,953",forks:"573",starup:"5,038"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,165",forks:"4,246",starup:"6,228"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,774",forks:"1,165",starup:"1,980"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,434",forks:"380",starup:"3,056"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,544",forks:"2,251",starup:"4,060"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,232",forks:"128",starup:"1,604"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,275",forks:"363",starup:"2,076"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,377",forks:"6,920",starup:"340"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,117",forks:"1,346",starup:"1,070"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,081",forks:"416",starup:"1,921"},{title:`abi /

      secret-llama`,owner:"abi",name:"secret-llama",avatar:"https://avatars.githubusercontent.com/u/23818?s=40&v=4",path:"/abi/secret-llama",link:"https://github.com/abi/secret-llama",description:"Fully private LLM chatbot that runs entirely with a browser with no server needed. Supports Mistral and LLama 3.",language:"TypeScript",stars:"2,239",forks:"115",starup:"2,249"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,803",forks:"2,312",starup:"2,087"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,925",forks:"4,420",starup:"873"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,421",forks:"7,253",starup:"1,201"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,910",forks:"685",starup:"1,811"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"65,987",forks:"5,413",starup:"719"},{title:`bitwarden /

      clients`,owner:"bitwarden",name:"clients",avatar:"https://avatars.githubusercontent.com/u/1190944?s=40&v=4",path:"/bitwarden/clients",link:"https://github.com/bitwarden/clients",description:"Bitwarden client applications (web, browser extension, desktop, and cli)",language:"TypeScript",stars:"8,514",forks:"1,121",starup:"216"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,559",forks:"161",starup:"748"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,913",forks:"56,781",starup:"2,840"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,529",forks:"497",starup:"737"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,173",forks:"2,013",starup:"489"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,258",forks:"1,397",starup:"307"},{title:`cs-lazy-tools /

      ChatGPT-On-CS`,owner:"cs-lazy-tools",name:"ChatGPT-On-CS",avatar:"https://avatars.githubusercontent.com/u/63803169?s=40&v=4",path:"/cs-lazy-tools/ChatGPT-On-CS",link:"https://github.com/cs-lazy-tools/ChatGPT-On-CS",description:"基于大模型的智能对话客服工具，支持微信、千牛、哔哩哔哩、抖音企业号、抖音、抖店、微博聊天、小红书专业号运营、小红书、知乎等平台接入，可选择 GPT3.5/GPT4.0/ 懒人百宝箱 （后续会支持更多平台），能处理文本、语音和图片，通过插件访问操作系统和互联网等外部资源，支持基于自有知识库定制企业 AI 应用。",language:"TypeScript",stars:"1,446",forks:"144",starup:"709"}],"Vue-daily":[{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,110",forks:"277",starup:"35"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,548",forks:"1,456",starup:"6"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,439",forks:"4,047",starup:"12"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,283",forks:"102",starup:"31"},{title:`kingwrcy /

      discussion`,owner:"kingwrcy",name:"discussion",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/discussion",link:"https://github.com/kingwrcy/discussion",description:"极简论坛",language:"Vue",stars:"96",forks:"8",starup:"37"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,255",forks:"185",starup:"10"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"126",forks:"1,327",starup:"3"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,276",forks:"226",starup:"6"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"628",forks:"1,179",starup:"2"},{title:`Gouryella /

      ChatTTS-webui`,owner:"Gouryella",name:"ChatTTS-webui",avatar:"https://avatars.githubusercontent.com/u/41225091?s=40&v=4",path:"/Gouryella/ChatTTS-webui",link:"https://github.com/Gouryella/ChatTTS-webui",description:"A Web UI developed based on ChatTTS, implemented using Nuxt 3 and Ant Design.",language:"Vue",stars:"23",forks:"6",starup:"7"},{title:`eslint /

      config-inspector`,owner:"eslint",name:"config-inspector",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/eslint/config-inspector",link:"https://github.com/eslint/config-inspector",description:"A visual tool for inspecting and understanding your ESLint flat configs.",language:"Vue",stars:"466",forks:"12",starup:"4"},{title:`openmynet /

      tvboxsp`,owner:"openmynet",name:"tvboxsp",avatar:"https://avatars.githubusercontent.com/u/2252493?s=40&v=4",path:"/openmynet/tvboxsp",link:"https://github.com/openmynet/tvboxsp",description:"tvbox media source processing",language:"Vue",stars:"63",forks:"20",starup:"7"},{title:`helloqyg /

      MettShort`,owner:"helloqyg",name:"MettShort",avatar:"https://avatars.githubusercontent.com/u/22368614?s=40&v=4",path:"/helloqyg/MettShort",link:"https://github.com/helloqyg/MettShort",description:"2023热门短剧微短剧可运营版本，包含微信小程序、抖音小程序、APP、公众号多个版本。也支持微信小程序媒资管理、虚拟支付、微短剧等各模块功能。包含批量导入、各种视频格式的支持、saas多开、分销商分销、卡密兑换、分享海报、自动切换、小程序流量主等众多功能。",language:"Vue",stars:"168",forks:"38",starup:"2"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,223",forks:"2,022",starup:"61"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,886",forks:"262",starup:"7"},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",link:"https://github.com/Yin-Hongwei/music-website",description:"🎧 Vue + SpringBoot + MyBatis 音乐网站",language:"Vue",stars:"5,044",forks:"1,408",starup:"2"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,261",forks:"749",starup:"4"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,453",forks:"384",starup:"6"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,644",forks:"222",starup:"4"},{title:`wwwAngHua /

      KingStudy`,owner:"wwwAngHua",name:"KingStudy",avatar:"",path:"/wwwAngHua/KingStudy",link:"https://github.com/wwwAngHua/KingStudy",description:"A personal homepage website that includes blog, portfolio, courses, and photo wall display functions.",language:"Vue",stars:"69",forks:"8",starup:"14"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"376",forks:"90",starup:"4"},{title:`bsoc-bitbyte /

      GetIt`,owner:"bsoc-bitbyte",name:"GetIt",avatar:"https://avatars.githubusercontent.com/u/96513964?s=40&v=4",path:"/bsoc-bitbyte/GetIt",link:"https://github.com/bsoc-bitbyte/GetIt",description:"Streamlined college e-commerce: Simplifying merch buying and selling for students.",language:"Vue",stars:"17",forks:"48",starup:"1"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"1,052",forks:"112",starup:"10"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,016",forks:"136",starup:"1"},{title:`GradientSurfer /

      Draw2Img`,owner:"GradientSurfer",name:"Draw2Img",avatar:"https://avatars.githubusercontent.com/u/154718150?s=40&v=4",path:"/GradientSurfer/Draw2Img",link:"https://github.com/GradientSurfer/Draw2Img",description:"A simple web UI for interactive text-guided image to image generation, intended for any age and skill level.",language:"Vue",stars:"264",forks:"18",starup:"8"}],"Vue-weekly":[{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,432",forks:"221",starup:"96"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,439",forks:"4,047",starup:"121"},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",link:"https://github.com/viarotel-org/escrcpy",description:"📱 Graphical Scrcpy to display and control Android, devices powered by Electron. | 使用图形化的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。",language:"Vue",stars:"1,563",forks:"104",starup:"48"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,991",forks:"1,624",starup:"55"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,583",forks:"1,379",starup:"42"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,556",forks:"2,787",starup:"98"},{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"1,026",forks:"275",starup:"659"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,110",forks:"277",starup:"250"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"652",forks:"52",starup:"150"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,970",forks:"776",starup:"66"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,278",forks:"3,613",starup:"45"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,149",forks:"1,212",starup:"41"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,759",forks:"1,101",starup:"31"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,184",forks:"737",starup:"60"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"510",forks:"77",starup:"30"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,255",forks:"185",starup:"77"},{title:`kevin2li /

      PDF-Guru`,owner:"kevin2li",name:"PDF-Guru",avatar:"https://avatars.githubusercontent.com/u/45037121?s=40&v=4",path:"/kevin2li/PDF-Guru",link:"https://github.com/kevin2li/PDF-Guru",description:"A Multi-purpose PDF file processing tool with a nice UI that supports merge, split, rotate, reorder, delete, scale, crop, watermark, encrypt/decrypt, bookmark, extract, compress, etc.",language:"Vue",stars:"1,503",forks:"132",starup:"19"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"494",forks:"88",starup:"48"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"628",forks:"1,179",starup:"11"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,876",forks:"78",starup:"32"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,261",forks:"749",starup:"57"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,854",forks:"1,227",starup:"94"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,963",forks:"813",starup:"22"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,384",forks:"720",starup:"62"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,882",forks:"1,300",starup:"17"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,223",forks:"2,022",starup:"5,862"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,799",forks:"761",starup:"180"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,419",forks:"1,045",starup:"617"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,854",forks:"1,227",starup:"443"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,991",forks:"1,624",starup:"185"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,184",forks:"737",starup:"226"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,220",forks:"496",starup:"124"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,255",forks:"185",starup:"346"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,194",forks:"848",starup:"408"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,839",forks:"323",starup:"607"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,110",forks:"277",starup:"339"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,432",forks:"221",starup:"443"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"126",forks:"1,327",starup:"10"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"278",forks:"43",starup:"103"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,786",forks:"1,772",starup:"112"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"185",forks:"68",starup:"44"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,838",forks:"12,468",starup:"113"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,721",forks:"2,596",starup:"237"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,261",forks:"749",starup:"278"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,644",forks:"222",starup:"152"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,767",forks:"150",starup:"169"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,995",forks:"14,625",starup:"90"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"510",forks:"77",starup:"107"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,482",forks:"396",starup:"85"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,970",forks:"776",starup:"141"}]},rt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},st=X("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=C({__name:"index",setup(T){const p=j("daily"),e=j("JavaScript"),h=j([]),t=j("list");function k(g){return g.sort((n,s)=>r(s.starup)-r(n.starup))}J([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=K();return(g,n)=>{const s=L,d=z,v=E,y=F,i=q("LazyImage"),a=O,o=H,A=N,x=at,D=et;return l(),S("div",null,[c(y,null,{default:w(()=>[c(s,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>V(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>V(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>V(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c($,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(l(),S("div",rt,[st,(l(!0),S(Q,null,Z(u(h),(m,P)=>(l(),M(A,{key:P,index:P,repo:m,onMouseenter:u(f)},{avatar:w(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),M(x,{key:1,data:u(h)},null,8,["data"])):(l(),M(D,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
