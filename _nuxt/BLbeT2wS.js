import{_ as F}from"./BkGmg8Rp.js";import{_ as W}from"./DwLh8r_x.js";import{_ as D}from"./zq3qZpxz.js";import E from"./kUhc6XLT.js";import{_ as O,a as N}from"./D8i_4s2Y.js";import{_ as H}from"./HEJGgZ-C.js";import{s as U,u as I,a as R,b as z,i as q,c as K}from"./BY16R0Wf.js";import{d as L,s}from"./CYcXzR8Z.js";import{n as M,q as G,h as J,o as l,c as S,s as _,r as x,u as Y,b as c,w,T as $,v as u,x as C,F as Q,y as Z,z as j,a as X}from"./B3GK9c9H.js";import{l as tt}from"./p2-M2djV.js";import"./BR1SF5wV.js";import"./DcE9gT5k.js";import"./BQkc-AXV.js";import"./D_rAVbU_.js";const at=M({__name:"Chart",props:{data:{}},setup(T){const p=T,{data:e}=G(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=I("仓库飙升榜",h);function k(n){const r=L(n);r.sort((a,o)=>{const A=s(a.starup)+s(a.stars)+s(a.forks),V=s(o.starup)+s(o.stars)+s(o.forks);return A-V});const[d,v,y,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:f}=R(t,z);J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),et=M({__name:"StarupChart",props:{data:{}},setup(T){const p=T,{data:e}=G(p),t=I("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=R(t,z);function f(n){const r=L(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:q(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,652",forks:"2,504",starup:"49"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,253",forks:"1,877",starup:"27"},{title:`TheRealJoelmatic /

      RemoveAdblockThing`,owner:"TheRealJoelmatic",name:"RemoveAdblockThing",avatar:"https://avatars.githubusercontent.com/u/78729990?s=40&v=4",path:"/TheRealJoelmatic/RemoveAdblockThing",link:"https://github.com/TheRealJoelmatic/RemoveAdblockThing",description:`The intrusive "Ad blocker are not allowed on YouTube" message is annoying. This open-source project aims to address this issue by providing a solution to bypass YouTube's ad blocker detection`,language:"JavaScript",stars:"5,146",forks:"280",starup:"26"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,263",forks:"1,605",starup:"8"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"266",forks:"412",starup:"3"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"354",forks:"1,750",starup:"9"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,115",forks:"1,123",starup:"0"},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",link:"https://github.com/gorhill/uBlock",description:"uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.",language:"JavaScript",stars:"43,893",forks:"2,948",starup:"24"},{title:`kunjgit /

      GameZone`,owner:"kunjgit",name:"GameZone",avatar:"https://avatars.githubusercontent.com/u/103763618?s=40&v=4",path:"/kunjgit/GameZone",link:"https://github.com/kunjgit/GameZone",description:"This open source repository contains collection of games build on basic tech stacks in web development . Use your creativity and build your own game and contribute to the repository by making PR 🎮",language:"JavaScript",stars:"459",forks:"713",starup:"9"},{title:`hiteshchoudhary /

      chai-aur-react`,owner:"hiteshchoudhary",name:"chai-aur-react",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-aur-react",link:"https://github.com/hiteshchoudhary/chai-aur-react",description:"chai aur react series on youtube",language:"JavaScript",stars:"5,449",forks:"728",starup:"24"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,580",forks:"1,422",starup:"9"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,986",forks:"1,546",starup:"13"},{title:`SyedImtiyaz-1 /

      GetTechProjects`,owner:"SyedImtiyaz-1",name:"GetTechProjects",avatar:"https://avatars.githubusercontent.com/u/121503426?s=40&v=4",path:"/SyedImtiyaz-1/GetTechProjects",link:"https://github.com/SyedImtiyaz-1/GetTechProjects",description:"Make your first Pull Request on this Repo. Don't forget to spread love and give us a ⭐️",language:"JavaScript",stars:"160",forks:"170",starup:"7"},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",link:"https://github.com/marktext/marktext",description:"📝A simple and elegant markdown editor, available for Linux, macOS and Windows.",language:"JavaScript",stars:"45,128",forks:"3,373",starup:"22"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,903",forks:"11,262",starup:"23"},{title:`VajiraTech /

      VAJIRA-MD`,owner:"VajiraTech",name:"VAJIRA-MD",avatar:"https://avatars.githubusercontent.com/u/158836060?s=40&v=4",path:"/VajiraTech/VAJIRA-MD",link:"https://github.com/VajiraTech/VAJIRA-MD",description:"🇱🇰King vajira md v4 update released🇱🇰",language:"JavaScript",stars:"246",forks:"910",starup:"8"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"878",forks:"3,483",starup:"13"},{title:`3Kmfi6HP /

      EDtunnel`,owner:"3Kmfi6HP",name:"EDtunnel",avatar:"https://avatars.githubusercontent.com/u/58669916?s=40&v=4",path:"/3Kmfi6HP/EDtunnel",link:"https://github.com/3Kmfi6HP/EDtunnel",description:"Use Cloudflare pages and worker serverless to implement VLESS protocol",language:"JavaScript",stars:"5,780",forks:"5,573",starup:"9"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,105",forks:"2,512",starup:"15"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,226",forks:"3,521",starup:"3"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,541",forks:"11,761",starup:"2"},{title:`IvanGlinkin /

      CCTV`,owner:"IvanGlinkin",name:"CCTV",avatar:"https://avatars.githubusercontent.com/u/64857726?s=40&v=4",path:"/IvanGlinkin/CCTV",link:"https://github.com/IvanGlinkin/CCTV",description:"Close-Circuit Telegram Vision revolutionizes location tracking with its open-source design and Telegram API integration. Offering precise tracking within 50-100 meters, users can monitor others in real-time for logistics or safety, redefining how we navigate our surroundings",language:"JavaScript",stars:"2,185",forks:"307",starup:"11"},{title:`Asabeneh /

      30-Days-Of-React`,owner:"Asabeneh",name:"30-Days-Of-React",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-React",link:"https://github.com/Asabeneh/30-Days-Of-React",description:"30 Days of React challenge is a step by step guide to learn React in 30 days. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",language:"JavaScript",stars:"24,438",forks:"6,955",starup:"9"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"599",forks:"2,731",starup:"11"},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",link:"https://github.com/axios/axios",description:"Promise based HTTP client for the browser and node.js",language:"JavaScript",stars:"104,312",forks:"10,747",starup:"11"}],"JavaScript-weekly":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,790",forks:"3,378",starup:"625"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,903",forks:"11,262",starup:"228"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"5,274",forks:"370",starup:"545"},{title:`nerfies /

      nerfies.github.io`,owner:"nerfies",name:"nerfies.github.io",avatar:"https://avatars.githubusercontent.com/u/297680?s=40&v=4",path:"/nerfies/nerfies.github.io",link:"https://github.com/nerfies/nerfies.github.io",description:"",language:"JavaScript",stars:"1,957",forks:"598",starup:"36"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,851",forks:"26,068",starup:"305"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"599",forks:"2,731",starup:"81"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,314",forks:"2,970",starup:"90"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,478",forks:"1,261",starup:"235"},{title:`Chalarangelo /

      30-seconds-of-code`,owner:"Chalarangelo",name:"30-seconds-of-code",avatar:"https://avatars.githubusercontent.com/u/8281875?s=40&v=4",path:"/Chalarangelo/30-seconds-of-code",link:"https://github.com/Chalarangelo/30-seconds-of-code",description:"Short code snippets for all your development needs",language:"JavaScript",stars:"119,815",forks:"11,893",starup:"175"},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",link:"https://github.com/jaywcjlove/awesome-mac",description:" Now we have become very big, Different from the original idea. Collect premium software in various categories.",language:"JavaScript",stars:"72,256",forks:"6,139",starup:"188"},{title:`brunosimon /

      my-room-in-3d`,owner:"brunosimon",name:"my-room-in-3d",avatar:"https://avatars.githubusercontent.com/u/5439991?s=40&v=4",path:"/brunosimon/my-room-in-3d",link:"https://github.com/brunosimon/my-room-in-3d",description:"",language:"JavaScript",stars:"3,220",forks:"431",starup:"231"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,986",forks:"1,546",starup:"36"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,715",forks:"3,494",starup:"96"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,304",forks:"11,651",starup:"49"},{title:`swagger-api /

      swagger-ui`,owner:"swagger-api",name:"swagger-ui",avatar:"https://avatars.githubusercontent.com/u/680248?s=40&v=4",path:"/swagger-api/swagger-ui",link:"https://github.com/swagger-api/swagger-ui",description:"Swagger UI is a collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.",language:"JavaScript",stars:"25,838",forks:"8,838",starup:"167"},{title:`mouricedevs /

      Gifted-Md`,owner:"mouricedevs",name:"Gifted-Md",avatar:"https://avatars.githubusercontent.com/u/166598671?s=40&v=4",path:"/mouricedevs/Gifted-Md",link:"https://github.com/mouricedevs/Gifted-Md",description:"Gifted Md is a Cool Multi-Device WhatsApp bot which offers a wide range of extraordinary features, making it an advanced and user-friendly bot for various purposes.",language:"JavaScript",stars:"354",forks:"1,750",starup:"74"},{title:`leafTheFish /

      DeathNote`,owner:"leafTheFish",name:"DeathNote",avatar:"https://avatars.githubusercontent.com/u/103831852?s=40&v=4",path:"/leafTheFish/DeathNote",link:"https://github.com/leafTheFish/DeathNote",description:"",language:"JavaScript",stars:"2,699",forks:"868",starup:"55"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"227",forks:"855",starup:"51"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,759",forks:"78,477",starup:"111"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,330",forks:"3,406",starup:"291"},{title:`V2RaySSR /

      Free-VLESS`,owner:"V2RaySSR",name:"Free-VLESS",avatar:"https://avatars.githubusercontent.com/u/59167743?s=40&v=4",path:"/V2RaySSR/Free-VLESS",link:"https://github.com/V2RaySSR/Free-VLESS",description:"通过 Cloudflare，免费部署 VLESS节点",language:"JavaScript",stars:"116",forks:"48",starup:"37"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"878",forks:"3,483",starup:"68"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,652",forks:"35,154",starup:"192"},{title:`mediacms-io /

      mediacms`,owner:"mediacms-io",name:"mediacms",avatar:"https://avatars.githubusercontent.com/u/1027116?s=40&v=4",path:"/mediacms-io/mediacms",link:"https://github.com/mediacms-io/mediacms",description:"MediaCMS is a modern, fully featured open source video and media CMS, written in Python/Django and React, featuring a REST API.",language:"JavaScript",stars:"2,415",forks:"439",starup:"46"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,573",forks:"4,730",starup:"30"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"27,029",forks:"3,162",starup:"4,434"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,425",forks:"1,612",starup:"2,971"},{title:`IvanGlinkin /

      CCTV`,owner:"IvanGlinkin",name:"CCTV",avatar:"https://avatars.githubusercontent.com/u/64857726?s=40&v=4",path:"/IvanGlinkin/CCTV",link:"https://github.com/IvanGlinkin/CCTV",description:"Close-Circuit Telegram Vision revolutionizes location tracking with its open-source design and Telegram API integration. Offering precise tracking within 50-100 meters, users can monitor others in real-time for logistics or safety, redefining how we navigate our surroundings",language:"JavaScript",stars:"2,185",forks:"307",starup:"2,113"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,187",forks:"222",starup:"1,133"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,989",forks:"5,942",starup:"897"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,941",forks:"346",starup:"1,336"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"694",forks:"118",starup:"330"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,803",forks:"45,578",starup:"2,047"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,253",forks:"1,877",starup:"1,068"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,247",forks:"3,367",starup:"834"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,923",forks:"1,010",starup:"396"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,623",forks:"1,560",starup:"170"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,851",forks:"26,068",starup:"1,245"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,115",forks:"1,123",starup:"295"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,469",forks:"1,192",starup:"202"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,697",forks:"984",starup:"420"},{title:`microsoft /

      monaco-editor`,owner:"microsoft",name:"monaco-editor",avatar:"https://avatars.githubusercontent.com/u/5047891?s=40&v=4",path:"/microsoft/monaco-editor",link:"https://github.com/microsoft/monaco-editor",description:"A browser based code editor",language:"JavaScript",stars:"38,715",forks:"3,494",starup:"462"},{title:`iamadamdev /

      bypass-paywalls-chrome`,owner:"iamadamdev",name:"bypass-paywalls-chrome",avatar:"https://avatars.githubusercontent.com/u/36013816?s=40&v=4",path:"/iamadamdev/bypass-paywalls-chrome",link:"https://github.com/iamadamdev/bypass-paywalls-chrome",description:"Bypass Paywalls web browser extension for Chrome and Firefox.",language:"JavaScript",stars:"47,330",forks:"3,406",starup:"723"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,790",forks:"3,378",starup:"1,196"},{title:`koodo-reader /

      koodo-reader`,owner:"koodo-reader",name:"koodo-reader",avatar:"https://avatars.githubusercontent.com/u/13820674?s=40&v=4",path:"/koodo-reader/koodo-reader",link:"https://github.com/koodo-reader/koodo-reader",description:"A modern ebook manager and reader with sync and backup capacities for Windows, macOS, Linux and Web",language:"JavaScript",stars:"16,478",forks:"1,261",starup:"865"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,947",forks:"4,579",starup:"1,435"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,042",forks:"16,386",starup:"208"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,571",forks:"1,871",starup:"391"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,893",forks:"1,794",starup:"207"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,652",forks:"35,154",starup:"737"}],"TypeScript-daily":[{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"34,790",forks:"1,645",starup:"264"},{title:`adrianhajdin /

      podcastr`,owner:"adrianhajdin",name:"podcastr",avatar:"https://avatars.githubusercontent.com/u/168656753?s=40&v=4",path:"/adrianhajdin/podcastr",link:"https://github.com/adrianhajdin/podcastr",description:"",language:"TypeScript",stars:"184",forks:"52",starup:"37"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,293",forks:"1,485",starup:"170"},{title:`drizzle-team /

      drizzle-orm`,owner:"drizzle-team",name:"drizzle-orm",avatar:"https://avatars.githubusercontent.com/u/33990502?s=40&v=4",path:"/drizzle-team/drizzle-orm",link:"https://github.com/drizzle-team/drizzle-orm",description:"Headless TypeScript ORM with a head. Runs on Node, Bun and Deno. Lives on the Edge and yes, it's a JavaScript ORM too 😅",language:"TypeScript",stars:"20,787",forks:"468",starup:"67"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,507",forks:"1,622",starup:"110"},{title:`ishaan1013 /

      sandbox`,owner:"ishaan1013",name:"sandbox",avatar:"https://avatars.githubusercontent.com/u/69771365?s=40&v=4",path:"/ishaan1013/sandbox",link:"https://github.com/ishaan1013/sandbox",description:"A cloud-based code editing environment with an AI copilot and real-time collaboration.",language:"TypeScript",stars:"1,055",forks:"75",starup:"270"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,633",forks:"1,280",starup:"72"},{title:`calcom /

      cal.com`,owner:"calcom",name:"cal.com",avatar:"https://avatars.githubusercontent.com/u/3504472?s=40&v=4",path:"/calcom/cal.com",link:"https://github.com/calcom/cal.com",description:"Scheduling infrastructure for absolutely everyone.",language:"TypeScript",stars:"29,226",forks:"6,741",starup:"18"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"1,476",forks:"146",starup:"53"},{title:`FuelLabs /

      sway-farm`,owner:"FuelLabs",name:"sway-farm",avatar:"https://avatars.githubusercontent.com/u/58856580?s=40&v=4",path:"/FuelLabs/sway-farm",link:"https://github.com/FuelLabs/sway-farm",description:"Farm 🍅 on the Fuel network.",language:"TypeScript",stars:"1,246",forks:"233",starup:"24"},{title:`Nutlope /

      turboseek`,owner:"Nutlope",name:"turboseek",avatar:"https://avatars.githubusercontent.com/u/63742054?s=40&v=4",path:"/Nutlope/turboseek",link:"https://github.com/Nutlope/turboseek",description:"An AI search engine inspired by Perplexity",language:"TypeScript",stars:"347",forks:"43",starup:"64"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,574",forks:"1,136",starup:"103"},{title:`rough-stuff /

      wired-elements`,owner:"rough-stuff",name:"wired-elements",avatar:"https://avatars.githubusercontent.com/u/833927?s=40&v=4",path:"/rough-stuff/wired-elements",link:"https://github.com/rough-stuff/wired-elements",description:"Collection of custom elements that appear hand drawn. Great for wireframes or a fun look.",language:"TypeScript",stars:"10,238",forks:"324",starup:"93"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,840",forks:"1,188",starup:"69"},{title:`lyswhut /

      lx-music-desktop`,owner:"lyswhut",name:"lx-music-desktop",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-desktop",link:"https://github.com/lyswhut/lx-music-desktop",description:"一个基于 electron 的音乐软件",language:"TypeScript",stars:"37,422",forks:"5,674",starup:"39"},{title:`th-ch /

      youtube-music`,owner:"th-ch",name:"youtube-music",avatar:"https://avatars.githubusercontent.com/u/8024624?s=40&v=4",path:"/th-ch/youtube-music",link:"https://github.com/th-ch/youtube-music",description:"YouTube Music Desktop App bundled with custom plugins (and built-in ad blocker / downloader)",language:"TypeScript",stars:"6,680",forks:"411",starup:"21"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"767",forks:"974",starup:"13"},{title:`trpc /

      trpc`,owner:"trpc",name:"trpc",avatar:"https://avatars.githubusercontent.com/u/459267?s=40&v=4",path:"/trpc/trpc",link:"https://github.com/trpc/trpc",description:"🧙‍♀️ Move Fast and Break Nothing. End-to-end typesafe APIs made easy.",language:"TypeScript",stars:"33,159",forks:"1,177",starup:"29"},{title:`lyswhut /

      lx-music-mobile`,owner:"lyswhut",name:"lx-music-mobile",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-mobile",link:"https://github.com/lyswhut/lx-music-mobile",description:"一个基于 React native 开发的音乐软件",language:"TypeScript",stars:"9,424",forks:"1,291",starup:"19"},{title:`gaozhangmin /

      aliyunpan`,owner:"gaozhangmin",name:"aliyunpan",avatar:"https://avatars.githubusercontent.com/u/9278488?s=40&v=4",path:"/gaozhangmin/aliyunpan",link:"https://github.com/gaozhangmin/aliyunpan",description:"小白羊网盘 - Powered by 阿里云盘。",language:"TypeScript",stars:"5,524",forks:"283",starup:"27"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,893",forks:"35,856",starup:"62"},{title:`AtotheY /

      saas-landingpage`,owner:"AtotheY",name:"saas-landingpage",avatar:"https://avatars.githubusercontent.com/u/10644934?s=40&v=4",path:"/AtotheY/saas-landingpage",link:"https://github.com/AtotheY/saas-landingpage",description:"https://map.sistilli.dev/public/coding/SaaS+Boilerplate",language:"TypeScript",stars:"878",forks:"112",starup:"17"},{title:`xiaolai /

      everyone-can-use-english`,owner:"xiaolai",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/xiaolai/everyone-can-use-english",link:"https://github.com/xiaolai/everyone-can-use-english",description:"人人都能用英语",language:"TypeScript",stars:"19,915",forks:"3,252",starup:"15"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,587",forks:"161",starup:"27"},{title:`FuelLabs /

      fuels-ts`,owner:"FuelLabs",name:"fuels-ts",avatar:"https://avatars.githubusercontent.com/u/26660?s=40&v=4",path:"/FuelLabs/fuels-ts",link:"https://github.com/FuelLabs/fuels-ts",description:"Fuel Network Typescript SDK",language:"TypeScript",stars:"44,405",forks:"1,280",starup:"9"}],"TypeScript-weekly":[{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"2,186",forks:"184",starup:"1,589"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,125",forks:"716",starup:"870"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,855",forks:"137",starup:"510"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,132",forks:"419",starup:"1,202"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"21,507",forks:"1,622",starup:"797"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,574",forks:"1,136",starup:"720"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"30,124",forks:"4,729",starup:"248"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Continue enables you to create your own AI code assistant inside your IDE. Keep your developers in flow with open-source VS Code and JetBrains extensions",language:"TypeScript",stars:"12,282",forks:"784",starup:"467"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,552",forks:"499",starup:"433"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,180",forks:"2,014",starup:"113"},{title:`slab /

      quill`,owner:"slab",name:"quill",avatar:"https://avatars.githubusercontent.com/u/192974?s=40&v=4",path:"/slab/quill",link:"https://github.com/slab/quill",description:"Quill is a modern WYSIWYG editor built for compatibility and extensibility",language:"TypeScript",stars:"41,871",forks:"3,285",starup:"156"},{title:`soybeanjs /

      soybean-admin`,owner:"soybeanjs",name:"soybean-admin",avatar:"https://avatars.githubusercontent.com/u/49704545?s=40&v=4",path:"/soybeanjs/soybean-admin",link:"https://github.com/soybeanjs/soybean-admin",description:"A clean, elegant, beautiful and powerful admin template, based on Vue3, Vite5, TypeScript, Pinia, NaiveUI and UnoCSS. 一个清新优雅、高颜值且功能强大的后台管理模板，基于最新的前端技术栈，包括 Vue3, Vite5, TypeScript, Pinia, NaiveUI 和 UnoCSS。",language:"TypeScript",stars:"8,293",forks:"1,485",starup:"234"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"923",forks:"69",starup:"333"},{title:`vercel /

      swr`,owner:"vercel",name:"swr",avatar:"https://avatars.githubusercontent.com/u/3676859?s=40&v=4",path:"/vercel/swr",link:"https://github.com/vercel/swr",description:"React Hooks for Data Fetching",language:"TypeScript",stars:"29,697",forks:"1,190",starup:"86"},{title:`midday-ai /

      midday`,owner:"midday-ai",name:"midday",avatar:"https://avatars.githubusercontent.com/u/655158?s=40&v=4",path:"/midday-ai/midday",link:"https://github.com/midday-ai/midday",description:"Run your business smarter 🪄",language:"TypeScript",stars:"2,551",forks:"240",starup:"137"},{title:`labring /

      FastGPT`,owner:"labring",name:"FastGPT",avatar:"https://avatars.githubusercontent.com/u/50446880?s=40&v=4",path:"/labring/FastGPT",link:"https://github.com/labring/FastGPT",description:"FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.",language:"TypeScript",stars:"14,117",forks:"3,622",starup:"297"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,672",forks:"450",starup:"751"},{title:`angular /

      components`,owner:"angular",name:"components",avatar:"https://avatars.githubusercontent.com/u/4450522?s=40&v=4",path:"/angular/components",link:"https://github.com/angular/components",description:"Component infrastructure and Material Design components for Angular",language:"TypeScript",stars:"24,139",forks:"6,676",starup:"26"},{title:`BuilderIO /

      gpt-crawler`,owner:"BuilderIO",name:"gpt-crawler",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/gpt-crawler",link:"https://github.com/BuilderIO/gpt-crawler",description:"Crawl a site to generate knowledge files to create your own custom GPT from a URL",language:"TypeScript",stars:"17,968",forks:"1,854",starup:"99"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,328",forks:"4,273",starup:"1,293"},{title:`hoarder-app /

      hoarder`,owner:"hoarder-app",name:"hoarder",avatar:"https://avatars.githubusercontent.com/u/2418637?s=40&v=4",path:"/hoarder-app/hoarder",link:"https://github.com/hoarder-app/hoarder",description:"A self-hostable bookmark-everything app (links, notes and images) with AI-based automatic tagging and full text search",language:"TypeScript",stars:"1,721",forks:"51",starup:"230"},{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"1,616",forks:"185",starup:"1,063"},{title:`vfarid /

      v2ray-worker`,owner:"vfarid",name:"v2ray-worker",avatar:"https://avatars.githubusercontent.com/u/23278340?s=40&v=4",path:"/vfarid/v2ray-worker",link:"https://github.com/vfarid/v2ray-worker",description:"Total solution for V2Ray over Cloudflare's worker",language:"TypeScript",stars:"767",forks:"974",starup:"58"},{title:`tiangolo /

      full-stack-fastapi-template`,owner:"tiangolo",name:"full-stack-fastapi-template",avatar:"https://avatars.githubusercontent.com/u/1326112?s=40&v=4",path:"/tiangolo/full-stack-fastapi-template",link:"https://github.com/tiangolo/full-stack-fastapi-template",description:"Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more.",language:"TypeScript",stars:"23,794",forks:"3,971",starup:"197"},{title:`magicuidesign /

      magicui`,owner:"magicuidesign",name:"magicui",avatar:"https://avatars.githubusercontent.com/u/16860528?s=40&v=4",path:"/magicuidesign/magicui",link:"https://github.com/magicuidesign/magicui",description:"UI Library for Design Engineers. Animated components and effects you can copy and paste into your apps. Free. Open Source.",language:"TypeScript",stars:"3,387",forks:"108",starup:"1,068"}],"TypeScript-monthly":[{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,633",forks:"1,280",starup:"5,448"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,840",forks:"1,188",starup:"2,003"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"7,032",forks:"580",starup:"4,738"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,499",forks:"384",starup:"3,041"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"32,328",forks:"4,273",starup:"6,316"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,587",forks:"2,254",starup:"4,064"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,237",forks:"128",starup:"1,607"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,141",forks:"1,347",starup:"1,085"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,381",forks:"6,922",starup:"347"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"10,080",forks:"1,110",starup:"4,449"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,672",forks:"450",starup:"3,703"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,132",forks:"419",starup:"1,960"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,943",forks:"4,423",starup:"891"},{title:`adrianhajdin /

      banking`,owner:"adrianhajdin",name:"banking",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/banking",link:"https://github.com/adrianhajdin/banking",description:"Horizon is a modern banking platform for everyone.",language:"TypeScript",stars:"921",forks:"249",starup:"818"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,820",forks:"2,312",starup:"2,085"},{title:`abi /

      secret-llama`,owner:"abi",name:"secret-llama",avatar:"https://avatars.githubusercontent.com/u/23818?s=40&v=4",path:"/abi/secret-llama",link:"https://github.com/abi/secret-llama",description:"Fully private LLM chatbot that runs entirely with a browser with no server needed. Supports Mistral and LLama 3.",language:"TypeScript",stars:"2,241",forks:"116",starup:"2,249"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,430",forks:"7,255",starup:"1,206"},{title:`bitwarden /

      clients`,owner:"bitwarden",name:"clients",avatar:"https://avatars.githubusercontent.com/u/1190944?s=40&v=4",path:"/bitwarden/clients",link:"https://github.com/bitwarden/clients",description:"Bitwarden client applications (web, browser extension, desktop, and cli)",language:"TypeScript",stars:"8,520",forks:"1,122",starup:"220"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,293",forks:"365",starup:"2,070"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"66,001",forks:"5,414",starup:"733"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,926",forks:"685",starup:"1,814"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,968",forks:"56,813",starup:"2,847"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,587",forks:"161",starup:"746"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,180",forks:"2,014",starup:"492"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,265",forks:"1,398",starup:"305"}],"Vue-daily":[{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,169",forks:"295",starup:"70"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,296",forks:"103",starup:"32"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,201",forks:"741",starup:"18"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,283",forks:"227",starup:"9"},{title:`Gouryella /

      ChatTTS-webui`,owner:"Gouryella",name:"ChatTTS-webui",avatar:"https://avatars.githubusercontent.com/u/41225091?s=40&v=4",path:"/Gouryella/ChatTTS-webui",link:"https://github.com/Gouryella/ChatTTS-webui",description:"A Web UI developed based on ChatTTS, implemented using Nuxt 3 and Ant Design.",language:"Python",stars:"27",forks:"6",starup:"6"},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",link:"https://github.com/hslr-s/sun-panel",description:"A server, NAS navigation panel, Homepage, browser homepage. | 一个服务器、NAS导航面板、Homepage、浏览器首页。",language:"Vue",stars:"2,092",forks:"207",starup:"2"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,803",forks:"762",starup:"5"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,453",forks:"385",starup:"6"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"1,057",forks:"112",starup:"11"},{title:`openmynet /

      tvboxsp`,owner:"openmynet",name:"tvboxsp",avatar:"https://avatars.githubusercontent.com/u/2252493?s=40&v=4",path:"/openmynet/tvboxsp",link:"https://github.com/openmynet/tvboxsp",description:"tvbox media source processing",language:"Vue",stars:"65",forks:"23",starup:"6"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,682",forks:"637",starup:"4"},{title:`helloqyg /

      MettShortOverseas`,owner:"helloqyg",name:"MettShortOverseas",avatar:"",path:"/helloqyg/MettShortOverseas",link:"https://github.com/helloqyg/MettShortOverseas",description:"迈特短剧系统是一款功能强大的海外短剧平台，包含H5、安卓APP、苹果APPP多种展示形式，支持PayPal支付、stripe支付，Facebook登录、游客登录、Google登录、多语言选择，提供多开的开源系统。该系统提供了丰富的短剧资源，支持用户免费观看热门短剧、影视作品，同时也支持多种付费观看方式，如单人、全款和会员等，满足不同用户的需求。",language:"Vue",stars:"206",forks:"38",starup:"6"},{title:`helloqyg /

      MettShort`,owner:"helloqyg",name:"MettShort",avatar:"https://avatars.githubusercontent.com/u/22368614?s=40&v=4",path:"/helloqyg/MettShort",link:"https://github.com/helloqyg/MettShort",description:"2023热门短剧微短剧可运营版本，包含微信小程序、抖音小程序、APP、公众号多个版本。也支持微信小程序媒资管理、虚拟支付、微短剧等各模块功能。包含批量导入、各种视频格式的支持、saas多开、分销商分销、卡密兑换、分享海报、自动切换、小程序流量主等众多功能。",language:"Vue",stars:"183",forks:"38",starup:"3"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"424",forks:"150",starup:"3"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,554",forks:"1,459",starup:"6"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,283",forks:"2,031",starup:"56"},{title:`elk-zone /

      elk`,owner:"elk-zone",name:"elk",avatar:"https://avatars.githubusercontent.com/u/6481596?s=40&v=4",path:"/elk-zone/elk",link:"https://github.com/elk-zone/elk",description:"A nimble Mastodon web client",language:"Vue",stars:"5,154",forks:"528",starup:"4"},{title:`oliver225 /

      thingsboard-ui-vue3`,owner:"oliver225",name:"thingsboard-ui-vue3",avatar:"https://avatars.githubusercontent.com/u/16226897?s=40&v=4",path:"/oliver225/thingsboard-ui-vue3",link:"https://github.com/oliver225/thingsboard-ui-vue3",description:"本项目为基于Vue3开发的 ThingsBoard 前台 ,AntDesginVue、VbenVueAdmin、AntV X6、规则链代码已全部开放、ThingsBoard3.x持续更新中",language:"Vue",stars:"148",forks:"21",starup:"1"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"126",forks:"1,337",starup:"3"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"631",forks:"1,190",starup:"0"},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"8,081",forks:"1,967",starup:"21"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,567",forks:"2,788",starup:"12"},{title:`woai3c /

      visual-drag-demo`,owner:"woai3c",name:"visual-drag-demo",avatar:"https://avatars.githubusercontent.com/u/22117876?s=40&v=4",path:"/woai3c/visual-drag-demo",link:"https://github.com/woai3c/visual-drag-demo",description:"一个低代码（可视化拖拽）教学项目",language:"Vue",stars:"4,990",forks:"1,470",starup:"3"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,879",forks:"78",starup:"3"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"509",forks:"91",starup:"15"}],"Vue-weekly":[{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",link:"https://github.com/viarotel-org/escrcpy",description:"📱 Graphical Scrcpy to display and control Android, devices powered by Electron. | 使用图形化的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。",language:"Vue",stars:"1,570",forks:"105",starup:"54"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,997",forks:"1,625",starup:"54"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,449",forks:"4,049",starup:"116"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,567",forks:"2,788",starup:"99"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,201",forks:"741",starup:"77"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,596",forks:"1,378",starup:"42"},{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"1,082",forks:"291",starup:"653"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,169",forks:"295",starup:"325"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"676",forks:"54",starup:"145"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,440",forks:"224",starup:"93"},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",link:"https://github.com/doocs/md",description:"✍ WeChat Markdown Editor | 一款高度简洁的微信 Markdown 编辑器：支持 Markdown 语法、色盘取色、多图上传、一键下载文档、自定义 CSS 样式、一键重置等特性",language:"Vue",stars:"4,975",forks:"778",starup:"67"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,154",forks:"1,213",starup:"44"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,283",forks:"3,614",starup:"46"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,762",forks:"1,102",starup:"31"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"509",forks:"91",starup:"57"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,387",forks:"565",starup:"24"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,447",forks:"1,417",starup:"29"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"631",forks:"1,190",starup:"12"},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",link:"https://github.com/crmeb/CRMEB",description:"🔥CRMEB开源商城免费开源多语言商城系统，Tp6框架商城，系统可商用；包含小程序商城、H5商城、公众号商城、PC商城、App，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面DIY，前后端分离，方便二开，更有详细使用文档、接口文档、数据字典、二开文档/视频教程，欢迎大家提出宝贵意见和建议",language:"Vue",stars:"4,885",forks:"1,300",starup:"18"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,967",forks:"813",starup:"23"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,789",forks:"1,771",starup:"33"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,273",forks:"749",starup:"54"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"515",forks:"77",starup:"27"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,879",forks:"78",starup:"31"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,743",forks:"406",starup:"33"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,283",forks:"2,031",starup:"5,864"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,435",forks:"1,046",starup:"617"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,866",forks:"1,229",starup:"447"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,997",forks:"1,625",starup:"187"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,201",forks:"741",starup:"244"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,199",forks:"848",starup:"401"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,227",forks:"497",starup:"129"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,803",forks:"762",starup:"179"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,268",forks:"186",starup:"345"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,842",forks:"12,467",starup:"113"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,169",forks:"295",starup:"415"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,440",forks:"224",starup:"446"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"126",forks:"1,337",starup:"13"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,392",forks:"721",starup:"237"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,789",forks:"1,771",starup:"114"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"282",forks:"44",starup:"97"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,273",forks:"749",starup:"274"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"186",forks:"68",starup:"40"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,848",forks:"323",starup:"596"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,728",forks:"2,600",starup:"237"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,645",forks:"223",starup:"151"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,998",forks:"14,624",starup:"93"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,773",forks:"150",starup:"171"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供70+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"515",forks:"77",starup:"107"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,892",forks:"263",starup:"177"}]},st={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=X("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=M({__name:"index",setup(T){const p=x("daily"),e=x("JavaScript"),h=x([]),t=x("list");function k(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}J([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=K();return(g,n)=>{const r=F,d=W,v=D,y=E,i=Y("LazyImage"),a=O,o=H,A=N,V=at,B=et;return l(),S("div",null,[c(y,null,{default:w(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>C(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>C(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>C(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c($,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Q,null,Z(u(h),(m,P)=>(l(),j(A,{key:P,index:P,repo:m,onMouseenter:u(f)},{avatar:w(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),j(V,{key:1,data:u(h)},null,8,["data"])):(l(),j(B,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
