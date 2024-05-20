import{_ as R}from"./BXmoNYcM.js";import{_ as N}from"./CMkxKvbZ.js";import{_ as F}from"./h0CDY1E0.js";import O from"./Dbag_jFk.js";import{_ as D,a as G}from"./DyzXAMJW.js";import{_ as q}from"./D0-YBaCZ.js";import{s as U,u as M,a as B,b as W,i as K,c as H}from"./D2koq7Av.js";import{d as L,s}from"./CYcXzR8Z.js";import{n as P,q as z,h as J,o as l,c as S,s as _,r as A,u as Y,b as c,w as y,T as $,v as u,x as C,F as Q,y as X,z as V,a as Z}from"./cg4v13OS.js";import{l as tt}from"./p2-M2djV.js";import"./C8TplDib.js";import"./DU0r1RnA.js";import"./BQkc-AXV.js";import"./CHE8jo2i.js";const at=P({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=z(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=M("仓库飙升榜",h);function f(n){const r=L(n);r.sort((a,o)=>{const T=s(a.starup)+s(a.stars)+s(a.forks),j=s(o.starup)+s(o.stars)+s(o.forks);return T-j});const[d,v,w,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:k}=B(t,W);J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=z(p),t=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:f}=B(t,W);function k(n){const r=L(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:K(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,246",forks:"2,869",starup:"102"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,341",forks:"303",starup:"162"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,871",forks:"3,353",starup:"33"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF and GIF images intelligently",language:"JavaScript",stars:"910",forks:"143",starup:"92"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,208",forks:"1,597",starup:"4"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,518",forks:"4,697",starup:"3"},{title:`end-4 /

      dots-hyprland`,owner:"end-4",name:"dots-hyprland",avatar:"https://avatars.githubusercontent.com/u/97237370?s=40&v=4",path:"/end-4/dots-hyprland",link:"https://github.com/end-4/dots-hyprland",description:"Modern, feature-rich and accessible desktop configuration.",language:"JavaScript",stars:"2,644",forks:"165",starup:"8"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,527",forks:"1,495",starup:"6"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,317",forks:"15,072",starup:"44"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"539",forks:"92",starup:"20"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,643",forks:"78,426",starup:"15"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,735",forks:"647",starup:"77"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,833",forks:"2,540",starup:"17"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,146",forks:"6,144",starup:"9"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,206",forks:"939",starup:"11"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"14,968",forks:"16,324",starup:"5"},{title:`hiteshchoudhary /

      js-hindi-youtube`,owner:"hiteshchoudhary",name:"js-hindi-youtube",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/js-hindi-youtube",link:"https://github.com/hiteshchoudhary/js-hindi-youtube",description:"A code repo for javascript series at Chai aur code youtube channel",language:"JavaScript",stars:"2,172",forks:"1,264",starup:"4"},{title:`dimdenGD /

      OldTweetDeck`,owner:"dimdenGD",name:"OldTweetDeck",avatar:"https://avatars.githubusercontent.com/u/26517362?s=40&v=4",path:"/dimdenGD/OldTweetDeck",link:"https://github.com/dimdenGD/OldTweetDeck",description:"Returns old TweetDeck, for free!",language:"JavaScript",stars:"1,621",forks:"105",starup:"12"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,873",forks:"12,310",starup:"3"},{title:`bchiang7 /

      v4`,owner:"bchiang7",name:"v4",avatar:"https://avatars.githubusercontent.com/u/6599979?s=40&v=4",path:"/bchiang7/v4",link:"https://github.com/bchiang7/v4",description:"Fourth iteration of my personal website built with Gatsby",language:"JavaScript",stars:"7,228",forks:"3,528",starup:"5"},{title:`gethomepage /

      homepage`,owner:"gethomepage",name:"homepage",avatar:"https://avatars.githubusercontent.com/u/1607653?s=40&v=4",path:"/gethomepage/homepage",link:"https://github.com/gethomepage/homepage",description:"A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.",language:"JavaScript",stars:"16,495",forks:"938",starup:"25"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,564",forks:"10,149",starup:"17"},{title:`3Kmfi6HP /

      EDtunnel`,owner:"3Kmfi6HP",name:"EDtunnel",avatar:"https://avatars.githubusercontent.com/u/58669916?s=40&v=4",path:"/3Kmfi6HP/EDtunnel",link:"https://github.com/3Kmfi6HP/EDtunnel",description:"Use Cloudflare pages and worker serverless to implement VLESS protocol",language:"JavaScript",stars:"5,637",forks:"5,383",starup:"15"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,441",forks:"29,644",starup:"54"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"8,941",forks:"380",starup:"11"}],"JavaScript-weekly":[{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,453",forks:"1,496",starup:"912"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,172",forks:"2,546",starup:"156"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,341",forks:"303",starup:"548"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,871",forks:"3,353",starup:"287"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,103",starup:"220"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,207",forks:"45,480",starup:"738"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,350",forks:"25,966",starup:"276"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,240",forks:"944",starup:"381"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,379",forks:"1,113",starup:"45"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"199",forks:"304",starup:"40"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,996",forks:"212",starup:"326"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,206",forks:"939",starup:"191"},{title:`wg-easy /

      wg-easy`,owner:"wg-easy",name:"wg-easy",avatar:"https://avatars.githubusercontent.com/u/47042125?s=40&v=4",path:"/wg-easy/wg-easy",link:"https://github.com/wg-easy/wg-easy",description:"The easiest way to run WireGuard VPN + Web-based Admin UI.",language:"JavaScript",stars:"11,993",forks:"1,184",starup:"120"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,534",forks:"9,737",starup:"101"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,336",forks:"35,126",starup:"188"},{title:`Dooy /

      chatgpt-web-midjourney-proxy`,owner:"Dooy",name:"chatgpt-web-midjourney-proxy",avatar:"https://avatars.githubusercontent.com/u/3765401?s=40&v=4",path:"/Dooy/chatgpt-web-midjourney-proxy",link:"https://github.com/Dooy/chatgpt-web-midjourney-proxy",description:"chatgpt web, midjourney, gpts,tts, whisper,suno-v3 一套ui全搞定；同时支持 Web / PWA / Linux / Win / MacOS 平台",language:"JavaScript",stars:"3,541",forks:"921",starup:"120"},{title:`heyseth /

      worm-sim`,owner:"heyseth",name:"worm-sim",avatar:"https://avatars.githubusercontent.com/u/8293842?s=40&v=4",path:"/heyseth/worm-sim",link:"https://github.com/heyseth/worm-sim",description:"Simulate the C. Elegans worm brain in your browser and interact with the worm as it moves around",language:"JavaScript",stars:"257",forks:"27",starup:"59"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,141",forks:"3,432",starup:"50"},{title:`openlayers /

      openlayers`,owner:"openlayers",name:"openlayers",avatar:"https://avatars.githubusercontent.com/u/211514?s=40&v=4",path:"/openlayers/openlayers",link:"https://github.com/openlayers/openlayers",description:"OpenLayers",language:"JavaScript",stars:"10,955",forks:"2,981",starup:"38"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,735",forks:"647",starup:"164"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,577",forks:"5,864",starup:"210"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,591",forks:"3,389",starup:"341"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,496",forks:"11,749",starup:"32"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"14,968",forks:"16,324",starup:"52"},{title:`alyssaxuu /

      screenity`,owner:"alyssaxuu",name:"screenity",avatar:"https://avatars.githubusercontent.com/u/7581348?s=40&v=4",path:"/alyssaxuu/screenity",link:"https://github.com/alyssaxuu/screenity",description:"The free and privacy-friendly screen recorder with no limits 🎥",language:"JavaScript",stars:"10,808",forks:"824",starup:"214"}],"JavaScript-monthly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,046",forks:"716",starup:"5,075"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,246",forks:"2,869",starup:"2,921"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,708",forks:"968",starup:"369"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"539",forks:"92",starup:"334"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,996",forks:"212",starup:"990"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,207",forks:"45,480",starup:"2,058"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,453",forks:"1,496",starup:"2,934"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,350",forks:"25,966",starup:"1,189"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,438",forks:"1,817",starup:"374"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,605",forks:"948",starup:"396"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,577",forks:"5,864",starup:"845"},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",link:"https://github.com/anuraghazra/github-readme-stats",description:"⚡ Dynamically generated stats for your github readmes",language:"JavaScript",stars:"65,340",forks:"21,008",starup:"896"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,007",forks:"2,504",starup:"274"},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",link:"https://github.com/qist/tvbox",description:"FongMi影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"1,306",forks:"481",starup:"213"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,103",starup:"258"},{title:`spicetify /

      spicetify-cli`,owner:"spicetify",name:"spicetify-cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/spicetify-cli",link:"https://github.com/spicetify/spicetify-cli",description:"Command-line tool to customize Spotify client. Supports Windows, MacOS, and Linux.",language:"JavaScript",stars:"17,062",forks:"698",starup:"528"},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",link:"https://github.com/pedroslopez/whatsapp-web.js",description:"A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",language:"JavaScript",stars:"13,829",forks:"3,318",starup:"346"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,871",forks:"3,353",starup:"468"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,146",forks:"6,144",starup:"932"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,379",forks:"1,113",starup:"190"},{title:`NginxProxyManager /

      nginx-proxy-manager`,owner:"NginxProxyManager",name:"nginx-proxy-manager",avatar:"https://avatars.githubusercontent.com/u/1518257?s=40&v=4",path:"/NginxProxyManager/nginx-proxy-manager",link:"https://github.com/NginxProxyManager/nginx-proxy-manager",description:"Docker container for managing Nginx proxy hosts with a simple, powerful interface",language:"JavaScript",stars:"20,100",forks:"2,336",starup:"615"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"199",forks:"304",starup:"138"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"4,435",forks:"325",starup:"1,216"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,509",forks:"4,515",starup:"1,519"},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",link:"https://github.com/chinese-poetry/chinese-poetry",description:"The most comprehensive database of Chinese poetry 🧶最全中华古诗词数据库, 唐宋两朝近一万四千古诗人, 接近5.5万首唐诗加26万宋诗. 两宋时期1564位词人，21050首词。",language:"JavaScript",stars:"47,019",forks:"9,441",starup:"457"}],"TypeScript-daily":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,219",forks:"2,264",starup:"74"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"374",forks:"76",starup:"65"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 ai search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"384",forks:"28",starup:"30"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,458",forks:"279",starup:"229"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"499",forks:"65",starup:"96"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,720",forks:"206",starup:"195"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,076",forks:"898",starup:"66"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,355",forks:"115",starup:"216"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,240",forks:"35,748",starup:"54"},{title:`steven-tey /

      novel`,owner:"steven-tey",name:"novel",avatar:"https://avatars.githubusercontent.com/u/28986134?s=40&v=4",path:"/steven-tey/novel",link:"https://github.com/steven-tey/novel",description:"Notion-style WYSIWYG editor with AI-powered autocompletion.",language:"TypeScript",stars:"11,187",forks:"921",starup:"9"},{title:`remix-run /

      remix`,owner:"remix-run",name:"remix",avatar:"https://avatars.githubusercontent.com/u/1609022?s=40&v=4",path:"/remix-run/remix",link:"https://github.com/remix-run/remix",description:"Build Better Websites. Create modern, resilient user experiences with web fundamentals.",language:"TypeScript",stars:"28,026",forks:"2,361",starup:"11"},{title:`Vendicated /

      Vencord`,owner:"Vendicated",name:"Vencord",avatar:"https://avatars.githubusercontent.com/u/45497981?s=40&v=4",path:"/Vendicated/Vencord",link:"https://github.com/Vendicated/Vencord",description:"The cutest Discord client mod",language:"TypeScript",stars:"7,068",forks:"1,000",starup:"13"},{title:`Portkey-AI /

      gateway`,owner:"Portkey-AI",name:"gateway",avatar:"https://avatars.githubusercontent.com/u/48576703?s=40&v=4",path:"/Portkey-AI/gateway",link:"https://github.com/Portkey-AI/gateway",description:"A Blazing Fast AI Gateway. Route to 100+ LLMs with 1 fast & friendly API.",language:"TypeScript",stars:"4,760",forks:"316",starup:"10"},{title:`tradingview /

      lightweight-charts`,owner:"tradingview",name:"lightweight-charts",avatar:"https://avatars.githubusercontent.com/u/3112183?s=40&v=4",path:"/tradingview/lightweight-charts",link:"https://github.com/tradingview/lightweight-charts",description:"Performant financial charts built with HTML5 canvas",language:"TypeScript",stars:"8,375",forks:"1,495",starup:"9"},{title:`bluesky-social /

      social-app`,owner:"bluesky-social",name:"social-app",avatar:"https://avatars.githubusercontent.com/u/1270099?s=40&v=4",path:"/bluesky-social/social-app",link:"https://github.com/bluesky-social/social-app",description:"The Bluesky Social application for Web, iOS, and Android",language:"TypeScript",stars:"6,678",forks:"873",starup:"7"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,639",forks:"4,700",starup:"32"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,320",forks:"1,602",starup:"58"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,470",forks:"176",starup:"35"},{title:`initia-labs /

      initia-registry`,owner:"initia-labs",name:"initia-registry",avatar:"https://avatars.githubusercontent.com/u/81249838?s=40&v=4",path:"/initia-labs/initia-registry",link:"https://github.com/initia-labs/initia-registry",description:"",language:"TypeScript",stars:"64",forks:"45",starup:"6"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"20,069",forks:"1,505",starup:"79"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,657",forks:"4,377",starup:"27"},{title:`cruip /

      open-react-template`,owner:"cruip",name:"open-react-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/open-react-template",link:"https://github.com/cruip/open-react-template",description:"A free React / Next.js landing page template designed to showcase open source projects, SaaS products, online services, and more. Made by",language:"TypeScript",stars:"3,500",forks:"1,656",starup:"4"},{title:`apify /

      crawlee`,owner:"apify",name:"crawlee",avatar:"https://avatars.githubusercontent.com/u/23726914?s=40&v=4",path:"/apify/crawlee",link:"https://github.com/apify/crawlee",description:"Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScript. Extract data for AI, LLMs, RAG, or GPTs. Download HTML, PDF, JPG, PNG, and other files from websites. Works with Puppeteer, Playwright, Cheerio, JSDOM, and raw HTTP. Both headful and headless mode. With proxy rotation.",language:"TypeScript",stars:"12,388",forks:"537",starup:"16"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,334",forks:"7,343",starup:"197"},{title:`warp-id /

      solana-trading-bot`,owner:"warp-id",name:"solana-trading-bot",avatar:"https://avatars.githubusercontent.com/u/17405319?s=40&v=4",path:"/warp-id/solana-trading-bot",link:"https://github.com/warp-id/solana-trading-bot",description:"Solana Trading Bot - Beta",language:"TypeScript",stars:"1,080",forks:"491",starup:"6"}],"TypeScript-weekly":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,219",forks:"2,264",starup:"1,251"},{title:`SOS-RS /

      frontend`,owner:"SOS-RS",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/frontend",link:"https://github.com/SOS-RS/frontend",description:"",language:"TypeScript",stars:"548",forks:"320",starup:"348"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,076",forks:"898",starup:"514"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,098",forks:"56,192",starup:"1,022"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,053",forks:"121",starup:"1,294"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"7,951",forks:"1,095",starup:"1,684"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,765",forks:"1,006",starup:"3,089"},{title:`SOS-RS /

      backend`,owner:"SOS-RS",name:"backend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/backend",link:"https://github.com/SOS-RS/backend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"659",forks:"283",starup:"298"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,720",forks:"206",starup:"998"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,877",forks:"2,183",starup:"878"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,494",forks:"12,710",starup:"439"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"73",forks:"29",starup:"26"},{title:`HerbertHe /

      iptv-sources`,owner:"HerbertHe",name:"iptv-sources",avatar:"https://avatars.githubusercontent.com/u/30955264?s=40&v=4",path:"/HerbertHe/iptv-sources",link:"https://github.com/HerbertHe/iptv-sources",description:"Autoupdate iptv sources",language:"TypeScript",stars:"4,737",forks:"602",starup:"256"},{title:`mifi /

      lossless-cut`,owner:"mifi",name:"lossless-cut",avatar:"https://avatars.githubusercontent.com/u/402547?s=40&v=4",path:"/mifi/lossless-cut",link:"https://github.com/mifi/lossless-cut",description:"The swiss army knife of lossless video/audio editing",language:"TypeScript",stars:"22,617",forks:"1,163",starup:"137"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,111",forks:"1,369",starup:"141"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,592",forks:"1,318",starup:"311"},{title:`invoke-ai /

      InvokeAI`,owner:"invoke-ai",name:"InvokeAI",avatar:"https://avatars.githubusercontent.com/u/4822129?s=40&v=4",path:"/invoke-ai/InvokeAI",link:"https://github.com/invoke-ai/InvokeAI",description:"InvokeAI is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to generate and create visual media using the latest AI-driven technologies. The solution offers an industry leading WebUI, supports terminal use through a CLI, and serves as the foundation for multiple commercial products.",language:"TypeScript",stars:"21,876",forks:"2,272",starup:"395"},{title:`mckaywrigley /

      chatbot-ui`,owner:"mckaywrigley",name:"chatbot-ui",avatar:"https://avatars.githubusercontent.com/u/29221284?s=40&v=4",path:"/mckaywrigley/chatbot-ui",link:"https://github.com/mckaywrigley/chatbot-ui",description:"AI chat for every model.",language:"TypeScript",stars:"26,643",forks:"7,350",starup:"185"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,639",forks:"4,700",starup:"242"},{title:`withastro /

      starlight`,owner:"withastro",name:"starlight",avatar:"https://avatars.githubusercontent.com/u/357379?s=40&v=4",path:"/withastro/starlight",link:"https://github.com/withastro/starlight",description:"🌟 Build beautiful, accessible, high-performance documentation websites with Astro",language:"TypeScript",stars:"3,797",forks:"414",starup:"127"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,275",forks:"3,430",starup:"263"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,375",forks:"348",starup:"117"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,355",forks:"115",starup:"496"},{title:`lightdash /

      lightdash`,owner:"lightdash",name:"lightdash",avatar:"https://avatars.githubusercontent.com/u/32174276?s=40&v=4",path:"/lightdash/lightdash",link:"https://github.com/lightdash/lightdash",description:"Self-serve BI to 10x your data team ⚡️",language:"TypeScript",stars:"3,487",forks:"366",starup:"48"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,294",forks:"3,351",starup:"192"}],"TypeScript-monthly":[{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,013",forks:"3,896",starup:"7,529"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,765",forks:"1,006",starup:"3,225"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,076",forks:"898",starup:"1,453"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,512",forks:"1,300",starup:"4,389"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,320",forks:"1,602",starup:"3,179"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"4,979",forks:"907",starup:"1,389"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,877",forks:"2,183",starup:"3,727"},{title:`jina-ai /

      reader`,owner:"jina-ai",name:"reader",avatar:"https://avatars.githubusercontent.com/u/565869?s=40&v=4",path:"/jina-ai/reader",link:"https://github.com/jina-ai/reader",description:"Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/",language:"TypeScript",stars:"4,436",forks:"326",starup:"1,583"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"5,966",forks:"641",starup:"1,476"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,757",forks:"352",starup:"850"},{title:`code100x /

      chess`,owner:"code100x",name:"chess",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/code100x/chess",link:"https://github.com/code100x/chess",description:"A multiplayer chess platform",language:"TypeScript",stars:"1,535",forks:"524",starup:"1,534"},{title:`sadmann7 /

      shadcn-table`,owner:"sadmann7",name:"shadcn-table",avatar:"https://avatars.githubusercontent.com/u/68962712?s=40&v=4",path:"/sadmann7/shadcn-table",link:"https://github.com/sadmann7/shadcn-table",description:"A shadcn table component with server-side sorting, filtering, and pagination.",language:"TypeScript",stars:"1,785",forks:"155",starup:"1,092"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,529",forks:"500",starup:"817"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,458",forks:"279",starup:"2,691"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,093",forks:"353",starup:"1,991"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,416",forks:"14,046",starup:"1,938"},{title:`bluesky-social /

      social-app`,owner:"bluesky-social",name:"social-app",avatar:"https://avatars.githubusercontent.com/u/1270099?s=40&v=4",path:"/bluesky-social/social-app",link:"https://github.com/bluesky-social/social-app",description:"The Bluesky Social application for Web, iOS, and Android",language:"TypeScript",stars:"6,678",forks:"873",starup:"384"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,240",forks:"35,748",starup:"3,331"},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",link:"https://github.com/danny-avila/LibreChat",description:"Enhanced ChatGPT Clone: Features OpenAI, Assistants API, Azure, Groq, GPT-4 Vision, Mistral, Bing, Anthropic, OpenRouter, Vertex AI, Gemini, AI model switching, message search, langchain, DALL-E-3, ChatGPT Plugins, OpenAI Functions, Secure Multi-User System, Presets, completely open-source for self-hosting. More features in development",language:"TypeScript",stars:"11,803",forks:"2,108",starup:"1,386"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"9,833",forks:"596",starup:"850"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,341",forks:"13,020",starup:"1,683"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,023",forks:"2,005",starup:"458"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,275",forks:"3,430",starup:"909"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,300",forks:"197",starup:"611"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,470",forks:"176",starup:"1,115"}],"Vue-daily":[{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,583",forks:"212",starup:"17"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"219",forks:"75",starup:"81"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"2"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"247",forks:"3",starup:"3"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,401",forks:"375",starup:"1"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,227",forks:"224",starup:"2"},{title:`jamebal /

      jmal-cloud-view`,owner:"jamebal",name:"jmal-cloud-view",avatar:"https://avatars.githubusercontent.com/u/49510841?s=40&v=4",path:"/jamebal/jmal-cloud-view",link:"https://github.com/jamebal/jmal-cloud-view",description:"JmalCloud 是一款私有云存储网盘项目，能够简单安全管理您的云端文件",language:"Vue",stars:"513",forks:"115",starup:"2"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,465",forks:"1,398",starup:"8"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,155",forks:"729",starup:"9"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,817",forks:"247",starup:"4"},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",link:"https://github.com/Adamant-im/adamant-im",description:"ADAMANT Decentralized Messenger. Progressive Web Application (PWA)",language:"Vue",stars:"541",forks:"56",starup:"1"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"770",forks:"180",starup:"5"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,451",forks:"390",starup:"2"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,275",forks:"4,024",starup:"14"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,280",forks:"696",starup:"6"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,357",forks:"5,928",starup:"4"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,017",forks:"719",starup:"1"},{title:`colinlienard /

      githundred`,owner:"colinlienard",name:"githundred",avatar:"https://avatars.githubusercontent.com/u/64312634?s=40&v=4",path:"/colinlienard/githundred",link:"https://github.com/colinlienard/githundred",description:"⭐️ Top 100 most starred GitHub repositories",language:"Vue",stars:"36",forks:"4",starup:"9"},{title:`jsbenchmark /

      jsbenchmark`,owner:"jsbenchmark",name:"jsbenchmark",avatar:"https://avatars.githubusercontent.com/u/25956751?s=40&v=4",path:"/jsbenchmark/jsbenchmark",link:"https://github.com/jsbenchmark/jsbenchmark",description:"A straightforward JavaScript benchmarking tool and REPL with support for ES modules and libraries.",language:"Vue",stars:"98",forks:"1",starup:"12"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,104",forks:"96",starup:"10"},{title:`bufferhead-code /

      onthisday`,owner:"bufferhead-code",name:"onthisday",avatar:"https://avatars.githubusercontent.com/u/6266887?s=40&v=4",path:"/bufferhead-code/onthisday",link:"https://github.com/bufferhead-code/onthisday",description:"History Weather Data for the current day powered by SQLite",language:"Vue",stars:"42",forks:"6",starup:"9"},{title:`wizarrrr /

      wizarr`,owner:"wizarrrr",name:"wizarr",avatar:"https://avatars.githubusercontent.com/u/16636012?s=40&v=4",path:"/wizarrrr/wizarr",link:"https://github.com/wizarrrr/wizarr",description:"Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc.",language:"Vue",stars:"1,088",forks:"81",starup:"14"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,631",forks:"2,582",starup:"4"},{title:`EsunR /

      Blog-Index`,owner:"EsunR",name:"Blog-Index",avatar:"https://avatars.githubusercontent.com/u/30311024?s=40&v=4",path:"/EsunR/Blog-Index",link:"https://github.com/EsunR/Blog-Index",description:"一个通用的个人网站的引导页、导航页模板",language:"Vue",stars:"498",forks:"201",starup:"0"},{title:`SpartnerNL /

      laravel-excel-docs`,owner:"SpartnerNL",name:"laravel-excel-docs",avatar:"https://avatars.githubusercontent.com/u/7728097?s=40&v=4",path:"/SpartnerNL/laravel-excel-docs",link:"https://github.com/SpartnerNL/laravel-excel-docs",description:"Laravel Excel Docs",language:"Vue",stars:"122",forks:"1,024",starup:"0"}],"Vue-weekly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,179",forks:"1,872",starup:"2,009"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,218",forks:"1,025",starup:"169"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,221",forks:"200",starup:"156"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,817",forks:"247",starup:"49"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,752",forks:"760",starup:"90"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,106",forks:"552",starup:"187"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,119",forks:"171",starup:"83"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"2"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,280",forks:"696",starup:"65"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,685",forks:"398",starup:"35"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,155",forks:"729",starup:"69"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,604",forks:"11,165",starup:"98"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,630",forks:"632",starup:"55"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,017",forks:"719",starup:"36"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"770",forks:"180",starup:"33"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,167",forks:"653",starup:"15"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,189",forks:"1,662",starup:"28"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,381",forks:"2,758",starup:"93"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,702",forks:"144",starup:"44"},{title:`jamebal /

      jmal-cloud-view`,owner:"jamebal",name:"jmal-cloud-view",avatar:"https://avatars.githubusercontent.com/u/49510841?s=40&v=4",path:"/jamebal/jmal-cloud-view",link:"https://github.com/jamebal/jmal-cloud-view",description:"JmalCloud 是一款私有云存储网盘项目，能够简单安全管理您的云端文件",language:"Vue",stars:"513",forks:"115",starup:"30"},{title:`umicro /

      uView2.0`,owner:"umicro",name:"uView2.0",avatar:"https://avatars.githubusercontent.com/u/40595755?s=40&v=4",path:"/umicro/uView2.0",link:"https://github.com/umicro/uView2.0",description:"uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",language:"Vue",stars:"1,446",forks:"437",starup:"16"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"196",forks:"31",starup:"44"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,401",forks:"375",starup:"25"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,090",forks:"644",starup:"27"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"247",forks:"3",starup:"19"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,778",forks:"1,896",starup:"4,854"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,179",forks:"1,872",starup:"5,710"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,689",forks:"1,212",starup:"544"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,218",forks:"1,025",starup:"646"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,104",forks:"96",starup:"733"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,615",forks:"313",starup:"626"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"427",forks:"76",starup:"160"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,678",forks:"3,705",starup:"145"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,752",forks:"760",starup:"174"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,812",forks:"4,103",starup:"42"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"262",forks:"39",starup:"111"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,465",forks:"1,398",starup:"150"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"970",forks:"103",starup:"830"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"5"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,221",forks:"200",starup:"249"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"762",forks:"67",starup:"159"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"770",forks:"180",starup:"103"},{title:`xunlu129 /

      teriteri-client`,owner:"xunlu129",name:"teriteri-client",avatar:"https://avatars.githubusercontent.com/u/122542082?s=40&v=4",path:"/xunlu129/teriteri-client",link:"https://github.com/xunlu129/teriteri-client",description:"一个基于 vue3 搭建的视频网站平台客户端",language:"Vue",stars:"224",forks:"37",starup:"120"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,583",forks:"212",starup:"112"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,898",forks:"493",starup:"154"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,168",forks:"476",starup:"127"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,515",forks:"95",starup:"214"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,119",forks:"171",starup:"313"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,690",forks:"283",starup:"257"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,155",forks:"729",starup:"268"}]},st={key:0,grid:"~ lg:cols-2 gap-2"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=P({__name:"index",setup(x){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function f(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}J([p,e],()=>{h.value=f(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:k}=H();return(g,n)=>{const r=R,d=N,v=F,w=O,i=Y("LazyImage"),a=D,o=q,T=G,j=at,E=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>C(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>C(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>C(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c($,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Q,null,X(u(h),(m,I)=>(l(),V(T,{key:I,index:I,repo:m,onMouseenter:u(k)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(j,{key:1,data:u(h)},null,8,["data"])):(l(),V(E,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
