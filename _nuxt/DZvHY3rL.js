import{_ as R}from"./BCK1x7Zp.js";import{_ as N}from"./haLaH57u.js";import{_ as F}from"./BNjzQWIs.js";import O from"./CrBigHXS.js";import{_ as D,a as G}from"./Big96ZHK.js";import{_ as q}from"./CxwIzggS.js";import{s as U,u as M,a as B,b as W,i as K,c as H}from"./DzW4ucOY.js";import{d as L,s}from"./CYcXzR8Z.js";import{n as P,q as z,h as J,o as l,c as S,s as _,r as A,u as Y,b as c,w as y,T as $,v as u,x as C,F as Q,y as X,z as V,a as Z}from"./bZ5HePpE.js";import{l as tt}from"./p2-M2djV.js";import"./BwmLL15g.js";import"./CGMtuXER.js";import"./BQkc-AXV.js";import"./BmGlRmd8.js";const at=P({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=z(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=M("仓库飙升榜",h);function f(n){const r=L(n);r.sort((a,o)=>{const T=s(a.starup)+s(a.stars)+s(a.forks),j=s(o.starup)+s(o.stars)+s(o.forks);return T-j});const[d,v,w,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:k}=B(t,W);J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=z(p),t=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:f}=B(t,W);function k(n){const r=L(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:K(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,108",forks:"2,854",starup:"114"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,284",forks:"300",starup:"163"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,799",forks:"3,351",starup:"50"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WebP and GIF images intelligently",language:"JavaScript",stars:"799",forks:"133",starup:"80"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,206",forks:"1,597",starup:"4"},{title:`MetaMask /

      metamask-extension`,owner:"MetaMask",name:"metamask-extension",avatar:"https://avatars.githubusercontent.com/u/542863?s=40&v=4",path:"/MetaMask/metamask-extension",link:"https://github.com/MetaMask/metamask-extension",description:"🌐 🔌 The MetaMask browser extension enables browsing Ethereum blockchain enabled websites",language:"JavaScript",stars:"11,517",forks:"4,698",starup:"3"},{title:`end-4 /

      dots-hyprland`,owner:"end-4",name:"dots-hyprland",avatar:"https://avatars.githubusercontent.com/u/97237370?s=40&v=4",path:"/end-4/dots-hyprland",link:"https://github.com/end-4/dots-hyprland",description:"Modern, feature-rich and accessible desktop configuration.",language:"JavaScript",stars:"2,637",forks:"164",starup:"7"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,523",forks:"1,493",starup:"4"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,306",forks:"15,049",starup:"49"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"535",forks:"90",starup:"20"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,635",forks:"78,426",starup:"11"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,730",forks:"647",starup:"84"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,828",forks:"2,534",starup:"20"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,144",forks:"6,107",starup:"14"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,201",forks:"939",starup:"10"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"14,968",forks:"16,322",starup:"6"},{title:`hiteshchoudhary /

      js-hindi-youtube`,owner:"hiteshchoudhary",name:"js-hindi-youtube",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/js-hindi-youtube",link:"https://github.com/hiteshchoudhary/js-hindi-youtube",description:"A code repo for javascript series at Chai aur code youtube channel",language:"JavaScript",stars:"2,171",forks:"1,263",starup:"5"},{title:`dimdenGD /

      OldTweetDeck`,owner:"dimdenGD",name:"OldTweetDeck",avatar:"https://avatars.githubusercontent.com/u/26517362?s=40&v=4",path:"/dimdenGD/OldTweetDeck",link:"https://github.com/dimdenGD/OldTweetDeck",description:"Returns old TweetDeck, for free!",language:"JavaScript",stars:"1,617",forks:"105",starup:"14"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,870",forks:"12,306",starup:"5"},{title:`bchiang7 /

      v4`,owner:"bchiang7",name:"v4",avatar:"https://avatars.githubusercontent.com/u/6599979?s=40&v=4",path:"/bchiang7/v4",link:"https://github.com/bchiang7/v4",description:"Fourth iteration of my personal website built with Gatsby",language:"JavaScript",stars:"7,226",forks:"3,526",starup:"6"},{title:`gethomepage /

      homepage`,owner:"gethomepage",name:"homepage",avatar:"https://avatars.githubusercontent.com/u/1607653?s=40&v=4",path:"/gethomepage/homepage",link:"https://github.com/gethomepage/homepage",description:"A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.",language:"JavaScript",stars:"16,492",forks:"937",starup:"29"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,556",forks:"10,120",starup:"18"},{title:`3Kmfi6HP /

      EDtunnel`,owner:"3Kmfi6HP",name:"EDtunnel",avatar:"https://avatars.githubusercontent.com/u/58669916?s=40&v=4",path:"/3Kmfi6HP/EDtunnel",link:"https://github.com/3Kmfi6HP/EDtunnel",description:"Use Cloudflare pages and worker serverless to implement VLESS protocol",language:"JavaScript",stars:"5,634",forks:"5,379",starup:"18"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,438",forks:"29,639",starup:"58"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"8,938",forks:"380",starup:"13"}],"JavaScript-weekly":[{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,415",forks:"1,493",starup:"1,139"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,165",forks:"2,546",starup:"253"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,284",forks:"300",starup:"382"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,799",forks:"3,351",starup:"232"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,104",starup:"219"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,179",forks:"45,474",starup:"725"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,334",forks:"25,963",starup:"281"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,229",forks:"944",starup:"389"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,378",forks:"1,113",starup:"42"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"198",forks:"303",starup:"36"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,989",forks:"212",starup:"399"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,201",forks:"939",starup:"177"},{title:`wg-easy /

      wg-easy`,owner:"wg-easy",name:"wg-easy",avatar:"https://avatars.githubusercontent.com/u/47042125?s=40&v=4",path:"/wg-easy/wg-easy",link:"https://github.com/wg-easy/wg-easy",description:"The easiest way to run WireGuard VPN + Web-based Admin UI.",language:"JavaScript",stars:"11,988",forks:"1,181",starup:"122"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,526",forks:"9,736",starup:"101"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,328",forks:"35,125",starup:"173"},{title:`Dooy /

      chatgpt-web-midjourney-proxy`,owner:"Dooy",name:"chatgpt-web-midjourney-proxy",avatar:"https://avatars.githubusercontent.com/u/3765401?s=40&v=4",path:"/Dooy/chatgpt-web-midjourney-proxy",link:"https://github.com/Dooy/chatgpt-web-midjourney-proxy",description:"chatgpt web, midjourney, gpts,tts, whisper,suno-v3 一套ui全搞定；同时支持 Web / PWA / Linux / Win / MacOS 平台",language:"JavaScript",stars:"3,540",forks:"921",starup:"122"},{title:`heyseth /

      worm-sim`,owner:"heyseth",name:"worm-sim",avatar:"https://avatars.githubusercontent.com/u/8293842?s=40&v=4",path:"/heyseth/worm-sim",link:"https://github.com/heyseth/worm-sim",description:"Simulate the C. Elegans worm brain in your browser and interact with the worm as it moves around",language:"JavaScript",stars:"250",forks:"26",starup:"57"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,135",forks:"3,431",starup:"48"},{title:`openlayers /

      openlayers`,owner:"openlayers",name:"openlayers",avatar:"https://avatars.githubusercontent.com/u/211514?s=40&v=4",path:"/openlayers/openlayers",link:"https://github.com/openlayers/openlayers",description:"OpenLayers",language:"JavaScript",stars:"10,956",forks:"2,981",starup:"39"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,730",forks:"647",starup:"90"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,567",forks:"5,864",starup:"207"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,575",forks:"3,388",starup:"327"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,496",forks:"11,749",starup:"33"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"14,968",forks:"16,322",starup:"53"},{title:`alyssaxuu /

      screenity`,owner:"alyssaxuu",name:"screenity",avatar:"https://avatars.githubusercontent.com/u/7581348?s=40&v=4",path:"/alyssaxuu/screenity",link:"https://github.com/alyssaxuu/screenity",description:"The free and privacy-friendly screen recorder with no limits 🎥",language:"JavaScript",stars:"10,805",forks:"824",starup:"222"}],"JavaScript-monthly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,016",forks:"715",starup:"5,280"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,108",forks:"2,854",starup:"2,833"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,704",forks:"967",starup:"366"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"535",forks:"90",starup:"330"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,989",forks:"212",starup:"987"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,179",forks:"45,474",starup:"2,051"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,415",forks:"1,493",starup:"3,137"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,334",forks:"25,963",starup:"1,213"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,434",forks:"1,816",starup:"373"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,600",forks:"948",starup:"399"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,567",forks:"5,864",starup:"840"},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",link:"https://github.com/anuraghazra/github-readme-stats",description:"⚡ Dynamically generated stats for your github readmes",language:"JavaScript",stars:"65,337",forks:"21,006",starup:"901"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,008",forks:"2,504",starup:"273"},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",link:"https://github.com/qist/tvbox",description:"FongMi影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"1,306",forks:"481",starup:"210"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,104",starup:"261"},{title:`spicetify /

      spicetify-cli`,owner:"spicetify",name:"spicetify-cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/spicetify-cli",link:"https://github.com/spicetify/spicetify-cli",description:"Command-line tool to customize Spotify client. Supports Windows, MacOS, and Linux.",language:"JavaScript",stars:"17,056",forks:"698",starup:"519"},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",link:"https://github.com/pedroslopez/whatsapp-web.js",description:"A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",language:"JavaScript",stars:"13,825",forks:"3,316",starup:"358"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,799",forks:"3,351",starup:"416"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,144",forks:"6,107",starup:"935"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,378",forks:"1,113",starup:"187"},{title:`NginxProxyManager /

      nginx-proxy-manager`,owner:"NginxProxyManager",name:"nginx-proxy-manager",avatar:"https://avatars.githubusercontent.com/u/1518257?s=40&v=4",path:"/NginxProxyManager/nginx-proxy-manager",link:"https://github.com/NginxProxyManager/nginx-proxy-manager",description:"Docker container for managing Nginx proxy hosts with a simple, powerful interface",language:"JavaScript",stars:"20,095",forks:"2,336",starup:"620"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"198",forks:"303",starup:"137"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"4,429",forks:"324",starup:"1,224"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,520",forks:"4,516",starup:"1,642"},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",link:"https://github.com/chinese-poetry/chinese-poetry",description:"The most comprehensive database of Chinese poetry 🧶最全中华古诗词数据库, 唐宋两朝近一万四千古诗人, 接近5.5万首唐诗加26万宋诗. 两宋时期1564位词人，21050首词。",language:"JavaScript",stars:"47,020",forks:"9,440",starup:"461"}],"TypeScript-daily":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,118",forks:"2,258",starup:"453"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"295",forks:"66",starup:"64"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"open-source answer engine - run local or cloud models",language:"TypeScript",stars:"259",forks:"23",starup:"16"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,338",forks:"273",starup:"229"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"479",forks:"60",starup:"96"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,581",forks:"191",starup:"260"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,040",forks:"891",starup:"55"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,337",forks:"113",starup:"223"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,225",forks:"35,750",starup:"51"},{title:`steven-tey /

      novel`,owner:"steven-tey",name:"novel",avatar:"https://avatars.githubusercontent.com/u/28986134?s=40&v=4",path:"/steven-tey/novel",link:"https://github.com/steven-tey/novel",description:"Notion-style WYSIWYG editor with AI-powered autocompletion.",language:"TypeScript",stars:"11,181",forks:"922",starup:"5"},{title:`remix-run /

      remix`,owner:"remix-run",name:"remix",avatar:"https://avatars.githubusercontent.com/u/1609022?s=40&v=4",path:"/remix-run/remix",link:"https://github.com/remix-run/remix",description:"Build Better Websites. Create modern, resilient user experiences with web fundamentals.",language:"TypeScript",stars:"28,023",forks:"2,361",starup:"116"},{title:`Vendicated /

      Vencord`,owner:"Vendicated",name:"Vencord",avatar:"https://avatars.githubusercontent.com/u/45497981?s=40&v=4",path:"/Vendicated/Vencord",link:"https://github.com/Vendicated/Vencord",description:"The cutest Discord client mod",language:"TypeScript",stars:"7,058",forks:"997",starup:"13"},{title:`Portkey-AI /

      gateway`,owner:"Portkey-AI",name:"gateway",avatar:"https://avatars.githubusercontent.com/u/48576703?s=40&v=4",path:"/Portkey-AI/gateway",link:"https://github.com/Portkey-AI/gateway",description:"A Blazing Fast AI Gateway. Route to 100+ LLMs with 1 fast & friendly API.",language:"TypeScript",stars:"4,755",forks:"316",starup:"11"},{title:`tradingview /

      lightweight-charts`,owner:"tradingview",name:"lightweight-charts",avatar:"https://avatars.githubusercontent.com/u/3112183?s=40&v=4",path:"/tradingview/lightweight-charts",link:"https://github.com/tradingview/lightweight-charts",description:"Performant financial charts built with HTML5 canvas",language:"TypeScript",stars:"8,371",forks:"1,495",starup:"6"},{title:`bluesky-social /

      social-app`,owner:"bluesky-social",name:"social-app",avatar:"https://avatars.githubusercontent.com/u/1270099?s=40&v=4",path:"/bluesky-social/social-app",link:"https://github.com/bluesky-social/social-app",description:"The Bluesky Social application for Web, iOS, and Android",language:"TypeScript",stars:"6,677",forks:"871",starup:"14"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,626",forks:"4,701",starup:"34"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,283",forks:"1,601",starup:"57"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,463",forks:"176",starup:"32"},{title:`initia-labs /

      initia-registry`,owner:"initia-labs",name:"initia-registry",avatar:"https://avatars.githubusercontent.com/u/81249838?s=40&v=4",path:"/initia-labs/initia-registry",link:"https://github.com/initia-labs/initia-registry",description:"",language:"TypeScript",stars:"60",forks:"44",starup:"8"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"20,041",forks:"1,503",starup:"80"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,639",forks:"4,376",starup:"29"},{title:`cruip /

      open-react-template`,owner:"cruip",name:"open-react-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/open-react-template",link:"https://github.com/cruip/open-react-template",description:"A free React / Next.js landing page template designed to showcase open source projects, SaaS products, online services, and more. Made by",language:"TypeScript",stars:"3,496",forks:"1,656",starup:"2"},{title:`apify /

      crawlee`,owner:"apify",name:"crawlee",avatar:"https://avatars.githubusercontent.com/u/23726914?s=40&v=4",path:"/apify/crawlee",link:"https://github.com/apify/crawlee",description:"Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScript. Extract data for AI, LLMs, RAG, or GPTs. Download HTML, PDF, JPG, PNG, and other files from websites. Works with Puppeteer, Playwright, Cheerio, JSDOM, and raw HTTP. Both headful and headless mode. With proxy rotation.",language:"TypeScript",stars:"12,377",forks:"535",starup:"15"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,309",forks:"7,332",starup:"200"},{title:`warp-id /

      solana-trading-bot`,owner:"warp-id",name:"solana-trading-bot",avatar:"https://avatars.githubusercontent.com/u/17405319?s=40&v=4",path:"/warp-id/solana-trading-bot",link:"https://github.com/warp-id/solana-trading-bot",description:"Solana Trading Bot - Beta",language:"TypeScript",stars:"1,077",forks:"490",starup:"5"}],"TypeScript-weekly":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,118",forks:"2,258",starup:"1,165"},{title:`SOS-RS /

      frontend`,owner:"SOS-RS",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/frontend",link:"https://github.com/SOS-RS/frontend",description:"",language:"TypeScript",stars:"541",forks:"313",starup:"396"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,040",forks:"891",starup:"494"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,073",forks:"56,178",starup:"999"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,021",forks:"121",starup:"1,280"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"7,919",forks:"1,082",starup:"2,586"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,719",forks:"997",starup:"2,932"},{title:`SOS-RS /

      backend`,owner:"SOS-RS",name:"backend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/backend",link:"https://github.com/SOS-RS/backend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"653",forks:"276",starup:"469"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,581",forks:"191",starup:"762"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,852",forks:"2,179",starup:"1,122"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,480",forks:"12,709",starup:"445"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"73",forks:"27",starup:"26"},{title:`HerbertHe /

      iptv-sources`,owner:"HerbertHe",name:"iptv-sources",avatar:"https://avatars.githubusercontent.com/u/30955264?s=40&v=4",path:"/HerbertHe/iptv-sources",link:"https://github.com/HerbertHe/iptv-sources",description:"Autoupdate iptv sources",language:"TypeScript",stars:"4,739",forks:"601",starup:"330"},{title:`mifi /

      lossless-cut`,owner:"mifi",name:"lossless-cut",avatar:"https://avatars.githubusercontent.com/u/402547?s=40&v=4",path:"/mifi/lossless-cut",link:"https://github.com/mifi/lossless-cut",description:"The swiss army knife of lossless video/audio editing",language:"TypeScript",stars:"22,563",forks:"1,163",starup:"142"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,103",forks:"1,367",starup:"158"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,581",forks:"1,316",starup:"309"},{title:`invoke-ai /

      InvokeAI`,owner:"invoke-ai",name:"InvokeAI",avatar:"https://avatars.githubusercontent.com/u/4822129?s=40&v=4",path:"/invoke-ai/InvokeAI",link:"https://github.com/invoke-ai/InvokeAI",description:"InvokeAI is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to generate and create visual media using the latest AI-driven technologies. The solution offers an industry leading WebUI, supports terminal use through a CLI, and serves as the foundation for multiple commercial products.",language:"TypeScript",stars:"21,871",forks:"2,272",starup:"410"},{title:`mckaywrigley /

      chatbot-ui`,owner:"mckaywrigley",name:"chatbot-ui",avatar:"https://avatars.githubusercontent.com/u/29221284?s=40&v=4",path:"/mckaywrigley/chatbot-ui",link:"https://github.com/mckaywrigley/chatbot-ui",description:"AI chat for every model.",language:"TypeScript",stars:"26,632",forks:"7,350",starup:"186"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,626",forks:"4,701",starup:"235"},{title:`withastro /

      starlight`,owner:"withastro",name:"starlight",avatar:"https://avatars.githubusercontent.com/u/357379?s=40&v=4",path:"/withastro/starlight",link:"https://github.com/withastro/starlight",description:"🌟 Build beautiful, accessible, high-performance documentation websites with Astro",language:"TypeScript",stars:"3,793",forks:"414",starup:"125"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,267",forks:"3,429",starup:"239"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,370",forks:"347",starup:"110"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,337",forks:"113",starup:"480"},{title:`lightdash /

      lightdash`,owner:"lightdash",name:"lightdash",avatar:"https://avatars.githubusercontent.com/u/32174276?s=40&v=4",path:"/lightdash/lightdash",link:"https://github.com/lightdash/lightdash",description:"Self-serve BI to 10x your data team ⚡️",language:"TypeScript",stars:"3,484",forks:"364",starup:"49"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,289",forks:"3,348",starup:"199"}],"TypeScript-monthly":[{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"29,926",forks:"3,882",starup:"7,616"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,719",forks:"997",starup:"3,056"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,040",forks:"891",starup:"1,386"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,491",forks:"1,299",starup:"4,367"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,283",forks:"1,601",starup:"3,168"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"4,978",forks:"907",starup:"1,401"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,852",forks:"2,179",starup:"3,658"},{title:`jina-ai /

      reader`,owner:"jina-ai",name:"reader",avatar:"https://avatars.githubusercontent.com/u/565869?s=40&v=4",path:"/jina-ai/reader",link:"https://github.com/jina-ai/reader",description:"Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/",language:"TypeScript",stars:"4,417",forks:"324",starup:"1,672"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"5,960",forks:"642",starup:"1,508"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,752",forks:"352",starup:"864"},{title:`code100x /

      chess`,owner:"code100x",name:"chess",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/code100x/chess",link:"https://github.com/code100x/chess",description:"A multiplayer chess platform",language:"TypeScript",stars:"1,535",forks:"524",starup:"1,539"},{title:`sadmann7 /

      shadcn-table`,owner:"sadmann7",name:"shadcn-table",avatar:"https://avatars.githubusercontent.com/u/68962712?s=40&v=4",path:"/sadmann7/shadcn-table",link:"https://github.com/sadmann7/shadcn-table",description:"A shadcn table component with server-side sorting, filtering, and pagination.",language:"TypeScript",stars:"1,783",forks:"155",starup:"1,094"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,528",forks:"500",starup:"823"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,338",forks:"273",starup:"2,711"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,087",forks:"353",starup:"1,979"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,406",forks:"14,043",starup:"1,935"},{title:`bluesky-social /

      social-app`,owner:"bluesky-social",name:"social-app",avatar:"https://avatars.githubusercontent.com/u/1270099?s=40&v=4",path:"/bluesky-social/social-app",link:"https://github.com/bluesky-social/social-app",description:"The Bluesky Social application for Web, iOS, and Android",language:"TypeScript",stars:"6,677",forks:"871",starup:"387"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,225",forks:"35,750",starup:"3,381"},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",link:"https://github.com/danny-avila/LibreChat",description:"Enhanced ChatGPT Clone: Features OpenAI, Assistants API, Azure, Groq, GPT-4 Vision, Mistral, Bing, Anthropic, OpenRouter, Vertex AI, Gemini, AI model switching, message search, langchain, DALL-E-3, ChatGPT Plugins, OpenAI Functions, Secure Multi-User System, Presets, completely open-source for self-hosting. More features in development",language:"TypeScript",stars:"11,791",forks:"2,106",starup:"1,406"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"9,829",forks:"595",starup:"855"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,332",forks:"13,016",starup:"1,705"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,018",forks:"2,005",starup:"451"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,267",forks:"3,429",starup:"890"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,296",forks:"197",starup:"608"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,463",forks:"176",starup:"1,137"}],"Vue-daily":[{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,578",forks:"212",starup:"17"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"133",forks:"50",starup:"24"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,194",starup:"2"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"247",forks:"3",starup:"5"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,400",forks:"375",starup:"4"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,227",forks:"224",starup:"3"},{title:`jamebal /

      jmal-cloud-view`,owner:"jamebal",name:"jmal-cloud-view",avatar:"https://avatars.githubusercontent.com/u/49510841?s=40&v=4",path:"/jamebal/jmal-cloud-view",link:"https://github.com/jamebal/jmal-cloud-view",description:"JmalCloud 是一款私有云存储网盘项目，能够简单安全管理您的云端文件",language:"Vue",stars:"512",forks:"114",starup:"4"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,463",forks:"1,396",starup:"7"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,154",forks:"729",starup:"9"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,815",forks:"247",starup:"4"},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",link:"https://github.com/Adamant-im/adamant-im",description:"ADAMANT Decentralized Messenger. Progressive Web Application (PWA)",language:"Vue",stars:"540",forks:"56",starup:"3"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"769",forks:"179",starup:"5"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,450",forks:"390",starup:"2"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,274",forks:"4,023",starup:"15"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,276",forks:"696",starup:"8"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,356",forks:"5,928",starup:"3"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,017",forks:"719",starup:"0"},{title:`colinlienard /

      githundred`,owner:"colinlienard",name:"githundred",avatar:"https://avatars.githubusercontent.com/u/64312634?s=40&v=4",path:"/colinlienard/githundred",link:"https://github.com/colinlienard/githundred",description:"⭐️ Top 100 most starred GitHub repositories",language:"Vue",stars:"32",forks:"3",starup:"14"},{title:`jsbenchmark /

      jsbenchmark`,owner:"jsbenchmark",name:"jsbenchmark",avatar:"https://avatars.githubusercontent.com/u/25956751?s=40&v=4",path:"/jsbenchmark/jsbenchmark",link:"https://github.com/jsbenchmark/jsbenchmark",description:"A straightforward JavaScript benchmarking tool and REPL with support for ES modules and libraries.",language:"Vue",stars:"95",forks:"1",starup:"17"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,103",forks:"96",starup:"14"},{title:`bufferhead-code /

      onthisday`,owner:"bufferhead-code",name:"onthisday",avatar:"https://avatars.githubusercontent.com/u/6266887?s=40&v=4",path:"/bufferhead-code/onthisday",link:"https://github.com/bufferhead-code/onthisday",description:"History Weather Data for the current day powered by SQLite",language:"Vue",stars:"39",forks:"6",starup:"10"},{title:`wizarrrr /

      wizarr`,owner:"wizarrrr",name:"wizarr",avatar:"https://avatars.githubusercontent.com/u/16636012?s=40&v=4",path:"/wizarrrr/wizarr",link:"https://github.com/wizarrrr/wizarr",description:"Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc.",language:"Vue",stars:"1,083",forks:"80",starup:"14"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,631",forks:"2,582",starup:"4"},{title:`EsunR /

      Blog-Index`,owner:"EsunR",name:"Blog-Index",avatar:"https://avatars.githubusercontent.com/u/30311024?s=40&v=4",path:"/EsunR/Blog-Index",link:"https://github.com/EsunR/Blog-Index",description:"一个通用的个人网站的引导页、导航页模板",language:"Vue",stars:"498",forks:"202",starup:"0"},{title:`SpartnerNL /

      laravel-excel-docs`,owner:"SpartnerNL",name:"laravel-excel-docs",avatar:"https://avatars.githubusercontent.com/u/7728097?s=40&v=4",path:"/SpartnerNL/laravel-excel-docs",link:"https://github.com/SpartnerNL/laravel-excel-docs",description:"Laravel Excel Docs",language:"Vue",stars:"122",forks:"1,024",starup:"0"}],"Vue-weekly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,127",forks:"1,867",starup:"2,311"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,213",forks:"1,025",starup:"267"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,211",forks:"199",starup:"154"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,815",forks:"247",starup:"55"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,752",forks:"760",starup:"93"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,104",forks:"551",starup:"182"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,117",forks:"171",starup:"84"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,194",starup:"0"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,276",forks:"696",starup:"60"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,682",forks:"398",starup:"40"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,154",forks:"729",starup:"65"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,604",forks:"11,164",starup:"101"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,626",forks:"632",starup:"53"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,017",forks:"719",starup:"36"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"769",forks:"179",starup:"35"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,164",forks:"653",starup:"15"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,188",forks:"1,662",starup:"26"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,380",forks:"2,756",starup:"92"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,701",forks:"143",starup:"45"},{title:`jamebal /

      jmal-cloud-view`,owner:"jamebal",name:"jmal-cloud-view",avatar:"https://avatars.githubusercontent.com/u/49510841?s=40&v=4",path:"/jamebal/jmal-cloud-view",link:"https://github.com/jamebal/jmal-cloud-view",description:"JmalCloud 是一款私有云存储网盘项目，能够简单安全管理您的云端文件",language:"Vue",stars:"512",forks:"114",starup:"30"},{title:`umicro /

      uView2.0`,owner:"umicro",name:"uView2.0",avatar:"https://avatars.githubusercontent.com/u/40595755?s=40&v=4",path:"/umicro/uView2.0",link:"https://github.com/umicro/uView2.0",description:"uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",language:"Vue",stars:"1,445",forks:"437",starup:"15"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"194",forks:"30",starup:"46"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,400",forks:"375",starup:"26"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,090",forks:"644",starup:"27"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"247",forks:"3",starup:"17"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,763",forks:"1,894",starup:"4,851"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,127",forks:"1,867",starup:"5,706"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,685",forks:"1,212",starup:"569"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,213",forks:"1,025",starup:"645"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,103",forks:"96",starup:"753"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,600",forks:"313",starup:"635"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"427",forks:"76",starup:"164"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,678",forks:"3,707",starup:"154"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,752",forks:"760",starup:"172"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,812",forks:"4,102",starup:"41"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"262",forks:"39",starup:"112"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,463",forks:"1,396",starup:"147"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"968",forks:"103",starup:"845"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,194",starup:"3"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,211",forks:"199",starup:"241"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"761",forks:"67",starup:"161"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"769",forks:"179",starup:"101"},{title:`xunlu129 /

      teriteri-client`,owner:"xunlu129",name:"teriteri-client",avatar:"https://avatars.githubusercontent.com/u/122542082?s=40&v=4",path:"/xunlu129/teriteri-client",link:"https://github.com/xunlu129/teriteri-client",description:"一个基于 vue3 搭建的视频网站平台客户端",language:"Vue",stars:"224",forks:"37",starup:"126"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,578",forks:"212",starup:"102"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,897",forks:"493",starup:"158"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,166",forks:"475",starup:"126"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,515",forks:"95",starup:"215"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,117",forks:"171",starup:"320"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,687",forks:"283",starup:"254"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,154",forks:"729",starup:"266"}]},st={key:0,grid:"~ lg:cols-2 gap-2"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=P({__name:"index",setup(x){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function f(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}J([p,e],()=>{h.value=f(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:k}=H();return(g,n)=>{const r=R,d=N,v=F,w=O,i=Y("LazyImage"),a=D,o=q,T=G,j=at,E=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>C(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>C(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>C(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c($,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Q,null,X(u(h),(m,I)=>(l(),V(T,{key:I,index:I,repo:m,onMouseenter:u(k)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(j,{key:1,data:u(h)},null,8,["data"])):(l(),V(E,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
