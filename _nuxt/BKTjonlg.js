import{_ as R}from"./D841XWVQ.js";import{_ as G}from"./BQNNb7MB.js";import{_ as D}from"./Bj6DqHTI.js";import E from"./CDbzgRpE.js";import{_ as O,a as N}from"./Cm0iEIp0.js";import{_ as q}from"./G-uDQYv9.js";import{s as H,u as I,a as M,b as _,i as K,c as U}from"./Q6KbChY7.js";import{d as B,s as n}from"./CYcXzR8Z.js";import{n as J,q as W,h as V,o as c,c as S,s as L,r as A,u as Y,b as l,w,T as $,v as u,x as P,F as Q,y as X,z as j,a as Z}from"./BzD-TByw.js";import{l as tt}from"./p2-M2djV.js";import"./i9DXyC4_.js";import"./DAbW16PW.js";import"./BQkc-AXV.js";import"./CDIMRLBz.js";const at=J({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=W(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),t=I("仓库飙升榜",h);function k(s){const r=B(s);r.sort((a,o)=>{const T=n(a.starup)+n(a.stars)+n(a.forks),C=n(o.starup)+n(o.stars)+n(o.forks);return T-C});const[d,v,y,i]=r.reduce((a,o)=>(a[0].push(n(o.stars)),a[1].push(n(o.forks)),a[2].push(n(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:f}=M(t,_);V(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,r)=>(c(),S("div",{ref_key:"chartRef",ref:f,style:L({height:g})},null,4))}}),et=J({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=W(p),t=I("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=M(t,_);function f(s){const r=B(s);r.sort((i,a)=>n(i.starup)-n(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:n(i.starup),name:`${i.owner}/${i.name}`,itemStyle:K(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}V(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,r)=>(c(),S("div",{ref_key:"chartRef",ref:k,style:L({height:g})},null,4))}}),st={"JavaScript-daily":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,385",forks:"3,329",starup:"53"},{title:`brunosimon /

      my-room-in-3d`,owner:"brunosimon",name:"my-room-in-3d",avatar:"https://avatars.githubusercontent.com/u/5439991?s=40&v=4",path:"/brunosimon/my-room-in-3d",link:"https://github.com/brunosimon/my-room-in-3d",description:"",language:"JavaScript",stars:"3,112",forks:"419",starup:"183"},{title:`academicpages /

      academicpages.github.io`,owner:"academicpages",name:"academicpages.github.io",avatar:"https://avatars.githubusercontent.com/u/4693439?s=40&v=4",path:"/academicpages/academicpages.github.io",link:"https://github.com/academicpages/academicpages.github.io",description:"Github Pages template for academic personal websites, forked from mmistakes/minimal-mistakes",language:"JavaScript",stars:"10,632",forks:"38,928",starup:"6"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,736",forks:"10,787",starup:"45"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"529",forks:"2,402",starup:"14"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"827",forks:"3,285",starup:"13"},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",link:"https://github.com/github/docs",description:"The open-source repo for docs.github.com",language:"JavaScript",stars:"15,638",forks:"58,194",starup:"7"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,536",forks:"2,464",starup:"12"},{title:`jonasschmedtmann /

      complete-node-bootcamp`,owner:"jonasschmedtmann",name:"complete-node-bootcamp",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-node-bootcamp",link:"https://github.com/jonasschmedtmann/complete-node-bootcamp",description:"Starter files, final projects and FAQ for my Complete Node.js Bootcamp",language:"JavaScript",stars:"2,934",forks:"3,472",starup:"5"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,997",forks:"2,798",starup:"22"},{title:`libccy /

      noname`,owner:"libccy",name:"noname",avatar:"https://avatars.githubusercontent.com/u/29366371?s=40&v=4",path:"/libccy/noname",link:"https://github.com/libccy/noname",description:"",language:"JavaScript",stars:"2,096",forks:"535",starup:"6"},{title:`Koenkk /

      zigbee2mqtt`,owner:"Koenkk",name:"zigbee2mqtt",avatar:"https://avatars.githubusercontent.com/u/2892853?s=40&v=4",path:"/Koenkk/zigbee2mqtt",link:"https://github.com/Koenkk/zigbee2mqtt",description:"Zigbee 🐝 to MQTT bridge 🌉, get rid of your proprietary Zigbee bridges 🔨",language:"JavaScript",stars:"11,231",forks:"1,602",starup:"3"},{title:`openlayers /

      openlayers`,owner:"openlayers",name:"openlayers",avatar:"https://avatars.githubusercontent.com/u/211514?s=40&v=4",path:"/openlayers/openlayers",link:"https://github.com/openlayers/openlayers",description:"OpenLayers",language:"JavaScript",stars:"10,988",forks:"2,990",starup:"5"},{title:`ibrahimaitech /

      BLACK-PANTHER-XMD`,owner:"ibrahimaitech",name:"BLACK-PANTHER-XMD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BLACK-PANTHER-XMD",link:"https://github.com/ibrahimaitech/BLACK-PANTHER-XMD",description:"Black panther md is the fastest wabot that helps WhatsApp users to enjoy smooth life",language:"JavaScript",stars:"340",forks:"1,029",starup:"8"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,399",forks:"1,798",starup:"21"},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",link:"https://github.com/gorhill/uBlock",description:"uBlock Origin - An efficient blocker for Chromium and Firefox. Fast and lean.",language:"JavaScript",stars:"43,774",forks:"2,937",starup:"32"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,519",forks:"11,754",starup:"6"},{title:`ibrahimaitech /

      BMW-MD`,owner:"ibrahimaitech",name:"BMW-MD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BMW-MD",link:"https://github.com/ibrahimaitech/BMW-MD",description:"BMW MD the faster bot that can do any thing in seconds,Trending Wabot",language:"JavaScript",stars:"184",forks:"685",starup:"7"},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/9736046?s=40&v=4",path:"/FreeTubeApp/FreeTube",link:"https://github.com/FreeTubeApp/FreeTube",description:"An Open Source YouTube app for privacy",language:"JavaScript",stars:"12,060",forks:"733",starup:"25"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,198",forks:"3,482",starup:"3"},{title:`SuperSimpleDev /

      javascript-course`,owner:"SuperSimpleDev",name:"javascript-course",avatar:"https://avatars.githubusercontent.com/u/70604577?s=40&v=4",path:"/SuperSimpleDev/javascript-course",link:"https://github.com/SuperSimpleDev/javascript-course",description:"",language:"JavaScript",stars:"525",forks:"418",starup:"3"},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",link:"https://github.com/HeyPuter/puter",description:"🌐 The Web OS! Free, Open-Source, and Self-Hostable.",language:"JavaScript",stars:"18,922",forks:"1,158",starup:"51"},{title:`easydiffusion /

      easydiffusion`,owner:"easydiffusion",name:"easydiffusion",avatar:"https://avatars.githubusercontent.com/u/844287?s=40&v=4",path:"/easydiffusion/easydiffusion",link:"https://github.com/easydiffusion/easydiffusion",description:"Easiest 1-click way to create beautiful artwork on your PC using AI, with no tech knowledge. Provides a browser UI for generating images from text prompts and images. Just enter your text prompt, and see the generated image.",language:"JavaScript",stars:"9,191",forks:"764",starup:"3"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,173",forks:"2,361",starup:"10"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,091",forks:"1,112",starup:"4"}],"JavaScript-weekly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,418",forks:"3,095",starup:"1,973"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"184,058",forks:"29,699",starup:"658"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently",language:"JavaScript",stars:"1,324",forks:"197",starup:"229"},{title:`metaskills /

      experts`,owner:"metaskills",name:"experts",avatar:"https://avatars.githubusercontent.com/u/2381?s=40&v=4",path:"/metaskills/experts",link:"https://github.com/metaskills/experts",description:"Experts.js is the easiest way to create and deploy OpenAI's Assistants and link them together as Tools to create advanced Multi AI Agent Systems with expanded memory and attention to detail.",language:"JavaScript",stars:"682",forks:"34",starup:"181"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"208",forks:"28",starup:"88"},{title:`google-ai-edge /

      model-explorer`,owner:"google-ai-edge",name:"model-explorer",avatar:"https://avatars.githubusercontent.com/u/8752427?s=40&v=4",path:"/google-ai-edge/model-explorer",link:"https://github.com/google-ai-edge/model-explorer",description:"A modern model graph visualizer and debugger",language:"JavaScript",stars:"740",forks:"36",starup:"160"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,884",forks:"1,000",starup:"173"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a dynamic graph where each node is an executable unit. Its modular and interactive design fosters rapid experimentation and prototyping, pushing hard on the limits of creativity.",language:"JavaScript",stars:"18,304",forks:"2,747",starup:"307"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,385",forks:"3,329",starup:"430"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,722",forks:"328",starup:"297"},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",link:"https://github.com/bigskysoftware/htmx",description:"</> htmx - high power tools for HTML",language:"JavaScript",stars:"33,581",forks:"1,114",starup:"244"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,513",forks:"1,401",starup:"97"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,183",forks:"3,363",starup:"262"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,643",forks:"26,020",starup:"308"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,433",forks:"523",starup:"83"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,648",forks:"9,747",starup:"107"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,439",forks:"1,164",starup:"50"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,552",forks:"15,458",starup:"207"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,855",forks:"650",starup:"118"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,325",forks:"1,913",starup:"104"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,807",forks:"5,901",starup:"208"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,711",forks:"961",starup:"470"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,767",forks:"2,360",starup:"173"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,198",forks:"3,482",starup:"46"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,728",forks:"4,556",starup:"373"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,418",forks:"3,095",starup:"4,718"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"614",forks:"106",starup:"315"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,133",forks:"219",starup:"1,102"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,040",forks:"1,560",starup:"2,834"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,565",forks:"45,530",starup:"2,018"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,439",forks:"1,164",starup:"204"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,183",forks:"3,363",starup:"799"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,221",forks:"6,823",starup:"639"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,722",forks:"328",starup:"1,155"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,884",forks:"1,000",starup:"506"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,060",forks:"2,506",starup:"294"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,643",forks:"26,020",starup:"1,179"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,583",forks:"1,536",starup:"156"},{title:`yonggekkk /

      Cloudflare_vless_trojan`,owner:"yonggekkk",name:"Cloudflare_vless_trojan",avatar:"https://avatars.githubusercontent.com/u/121604513?s=40&v=4",path:"/yonggekkk/Cloudflare_vless_trojan",link:"https://github.com/yonggekkk/Cloudflare_vless_trojan",description:"Cloudflare代理脚本，支持workers与pages两种形式部署，实现Vless与Trojan两种协议。CF优选域名、优选官方IP反代IP多平台一键脚本",language:"JavaScript",stars:"2,783",forks:"1,853",starup:"428"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,807",forks:"5,901",starup:"883"},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",link:"https://github.com/qist/tvbox",description:"FongMi影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"1,365",forks:"506",starup:"225"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,552",forks:"15,458",starup:"568"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,070",forks:"1,852",starup:"1,039"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,009",forks:"16,373",starup:"208"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,512",forks:"1,847",starup:"394"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,728",forks:"4,556",starup:"1,470"},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",link:"https://github.com/MagicMirrorOrg/MagicMirror",description:"MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant.",language:"JavaScript",stars:"19,318",forks:"4,149",starup:"345"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,091",forks:"1,112",starup:"275"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"243",forks:"368",starup:"137"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,663",forks:"976",starup:"412"}],"TypeScript-daily":[{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"1,047",forks:"96",starup:"306"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"6,483",forks:"683",starup:"111"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,393",forks:"523",starup:"415"},{title:`Vendicated /

      Vencord`,owner:"Vendicated",name:"Vencord",avatar:"https://avatars.githubusercontent.com/u/45497981?s=40&v=4",path:"/Vendicated/Vencord",link:"https://github.com/Vendicated/Vencord",description:"The cutest Discord client mod",language:"TypeScript",stars:"7,209",forks:"1,017",starup:"38"},{title:`software-mansion /

      react-native-ide`,owner:"software-mansion",name:"react-native-ide",avatar:"https://avatars.githubusercontent.com/u/726445?s=40&v=4",path:"/software-mansion/react-native-ide",link:"https://github.com/software-mansion/react-native-ide",description:"",language:"TypeScript",stars:"584",forks:"12",starup:"19"},{title:`Aylur /

      dotfiles`,owner:"Aylur",name:"dotfiles",avatar:"https://avatars.githubusercontent.com/u/104676705?s=40&v=4",path:"/Aylur/dotfiles",link:"https://github.com/Aylur/dotfiles",description:"My personal config files",language:"TypeScript",stars:"1,995",forks:"115",starup:"6"},{title:`kamranahmedse /

      developer-roadmap`,owner:"kamranahmedse",name:"developer-roadmap",avatar:"https://avatars.githubusercontent.com/u/4921183?s=40&v=4",path:"/kamranahmedse/developer-roadmap",link:"https://github.com/kamranahmedse/developer-roadmap",description:"Interactive roadmaps, guides and other educational content to help developers grow in their careers.",language:"TypeScript",stars:"277,999",forks:"37,247",starup:"187"},{title:`vercel /

      next-learn`,owner:"vercel",name:"next-learn",avatar:"https://avatars.githubusercontent.com/u/32464864?s=40&v=4",path:"/vercel/next-learn",link:"https://github.com/vercel/next-learn",description:"Learn Next.js Starter Code",language:"TypeScript",stars:"3,287",forks:"1,714",starup:"8"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,458",forks:"396",starup:"491"},{title:`obsidianmd /

      obsidian-sample-plugin`,owner:"obsidianmd",name:"obsidian-sample-plugin",avatar:"https://avatars.githubusercontent.com/u/609710?s=40&v=4",path:"/obsidianmd/obsidian-sample-plugin",link:"https://github.com/obsidianmd/obsidian-sample-plugin",description:"",language:"TypeScript",stars:"2,291",forks:"774",starup:"6"},{title:`Amery2010 /

      TalkWithGemini`,owner:"Amery2010",name:"TalkWithGemini",avatar:"https://avatars.githubusercontent.com/u/5876036?s=40&v=4",path:"/Amery2010/TalkWithGemini",link:"https://github.com/Amery2010/TalkWithGemini",description:"Deploy your private Gemini application for free with one click, supporting Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Pro and Gemini Pro Vision models. 一键免费部署您的私人 Gemini 应用, 支持 Gemini 1.5 Pro、Gemini 1.5 Flash、Gemini Pro 和 Gemini Pro Vision 模型。",language:"TypeScript",stars:"437",forks:"113",starup:"52"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,681",forks:"1,080",starup:"203"},{title:`webprodigies /

      fuzzie-production`,owner:"webprodigies",name:"fuzzie-production",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/fuzzie-production",link:"https://github.com/webprodigies/fuzzie-production",description:"",language:"TypeScript",stars:"416",forks:"251",starup:"1"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"20,872",forks:"1,574",starup:"139"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"5,055",forks:"904",starup:"14"},{title:`chakra-ui /

      ark`,owner:"chakra-ui",name:"ark",avatar:"https://avatars.githubusercontent.com/u/1846056?s=40&v=4",path:"/chakra-ui/ark",link:"https://github.com/chakra-ui/ark",description:"A headless library for building reusable, scalable design systems that works for a wide range of JS frameworks.",language:"TypeScript",stars:"3,129",forks:"82",starup:"13"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Open-source VS Code and JetBrains extensions that enable you to easily create your own modular AI software development system",language:"TypeScript",stars:"12,027",forks:"753",starup:"201"},{title:`warp-id /

      solana-trading-bot`,owner:"warp-id",name:"solana-trading-bot",avatar:"https://avatars.githubusercontent.com/u/17405319?s=40&v=4",path:"/warp-id/solana-trading-bot",link:"https://github.com/warp-id/solana-trading-bot",description:"Solana Trading Bot - Beta",language:"TypeScript",stars:"1,126",forks:"511",starup:"10"},{title:`adrianhajdin /

      ai_saas_app`,owner:"adrianhajdin",name:"ai_saas_app",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/ai_saas_app",link:"https://github.com/adrianhajdin/ai_saas_app",description:"Build a REAL Software-as-a-Service app with AI features and payments & credits system that you might even turn into a side income or business idea using Next.js 14, Clerk, MongoDB, Cloudinary AI, and Stripe.",language:"TypeScript",stars:"844",forks:"236",starup:"10"},{title:`drizzle-team /

      drizzle-orm`,owner:"drizzle-team",name:"drizzle-orm",avatar:"https://avatars.githubusercontent.com/u/33990502?s=40&v=4",path:"/drizzle-team/drizzle-orm",link:"https://github.com/drizzle-team/drizzle-orm",description:"Headless TypeScript ORM with a head. Runs on Node, Bun and Deno. Lives on the Edge and yes, it's a JavaScript ORM too 😅",language:"TypeScript",stars:"20,501",forks:"460",starup:"38"},{title:`n4ze3m /

      page-assist`,owner:"n4ze3m",name:"page-assist",avatar:"https://avatars.githubusercontent.com/u/39720973?s=40&v=4",path:"/n4ze3m/page-assist",link:"https://github.com/n4ze3m/page-assist",description:"Use your locally running AI models to assist you in your web browsing",language:"TypeScript",stars:"665",forks:"79",starup:"24"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,318",forks:"1,215",starup:"37"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"676",forks:"48",starup:"64"},{title:`Fallenbagel /

      jellyseerr`,owner:"Fallenbagel",name:"jellyseerr",avatar:"https://avatars.githubusercontent.com/u/234213?s=40&v=4",path:"/Fallenbagel/jellyseerr",link:"https://github.com/Fallenbagel/jellyseerr",description:"Fork of overseerr for jellyfin support",language:"TypeScript",stars:"2,979",forks:"182",starup:"3"},{title:`t3-oss /

      create-t3-app`,owner:"t3-oss",name:"create-t3-app",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/t3-oss/create-t3-app",link:"https://github.com/t3-oss/create-t3-app",description:"The best way to start a full-stack, typesafe Next.js app",language:"TypeScript",stars:"23,698",forks:"1,083",starup:"15"}],"TypeScript-weekly":[{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,933",forks:"359",starup:"1,252"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,800",forks:"676",starup:"951"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,393",forks:"523",starup:"2,561"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"837",forks:"144",starup:"362"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,166",forks:"385",starup:"1,227"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"676",forks:"48",starup:"274"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,458",forks:"396",starup:"921"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,387",forks:"108",starup:"821"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,651",forks:"2,302",starup:"335"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"652",forks:"120",starup:"119"},{title:`webstudio-is /

      webstudio`,owner:"webstudio-is",name:"webstudio",avatar:"https://avatars.githubusercontent.com/u/52824?s=40&v=4",path:"/webstudio-is/webstudio",link:"https://github.com/webstudio-is/webstudio",description:"Open Source alternative to Webflow, check out our CMS launch https://webstudio.is/cms",language:"TypeScript",stars:"3,934",forks:"377",starup:"94"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,559",forks:"1,096",starup:"405"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,576",forks:"14,154",starup:"1,125"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,208",forks:"494",starup:"190"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,855",forks:"24,736",starup:"181"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,312",forks:"6,908",starup:"108"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,546",forks:"3,371",starup:"255"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,323",forks:"7,245",starup:"800"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"97",forks:"56",starup:"23"},{title:`activepieces /

      activepieces`,owner:"activepieces",name:"activepieces",avatar:"https://avatars.githubusercontent.com/u/1812998?s=40&v=4",path:"/activepieces/activepieces",link:"https://github.com/activepieces/activepieces",description:"Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative",language:"TypeScript",stars:"8,177",forks:"871",starup:"740"},{title:`angular /

      angular-cli`,owner:"angular",name:"angular-cli",avatar:"https://avatars.githubusercontent.com/u/17563226?s=40&v=4",path:"/angular/angular-cli",link:"https://github.com/angular/angular-cli",description:"CLI tool for Angular",language:"TypeScript",stars:"26,627",forks:"11,983",starup:"18"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,565",forks:"125",starup:"170"},{title:`solidSpoon /

      DashPlayer`,owner:"solidSpoon",name:"DashPlayer",avatar:"https://avatars.githubusercontent.com/u/39454841?s=40&v=4",path:"/solidSpoon/DashPlayer",link:"https://github.com/solidSpoon/DashPlayer",description:"为英语学习者量身打造的视频播放器，助你通过观看视频、沉浸真实语境，轻松提升英语水平。#美剧 #播放器 #听力",language:"TypeScript",stars:"1,474",forks:"73",starup:"702"},{title:`Worklenz /

      worklenz`,owner:"Worklenz",name:"worklenz",avatar:"https://avatars.githubusercontent.com/u/75464293?s=40&v=4",path:"/Worklenz/worklenz",link:"https://github.com/Worklenz/worklenz",description:"All in one project management tool for efficient teams",language:"TypeScript",stars:"776",forks:"36",starup:"286"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"1,119",forks:"85",starup:"332"}],"TypeScript-monthly":[{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,393",forks:"523",starup:"6,183"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,681",forks:"1,080",starup:"4,047"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,559",forks:"1,096",starup:"1,860"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"31,204",forks:"4,111",starup:"6,060"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"4,933",forks:"359",starup:"3,041"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,294",forks:"2,234",starup:"3,933"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,323",forks:"7,245",starup:"1,124"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,318",forks:"1,215",starup:"7,812"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,913",forks:"1,333",starup:"844"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,800",forks:"676",starup:"1,713"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,375",forks:"200",starup:"524"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,576",forks:"14,154",starup:"2,749"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,651",forks:"2,302",starup:"1,946"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,228",forks:"361",starup:"2,064"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,312",forks:"6,908",starup:"301"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"56,059",forks:"3,265",starup:"986"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,327",forks:"157",starup:"947"},{title:`cs-lazy-tools /

      ChatGPT-On-CS`,owner:"cs-lazy-tools",name:"ChatGPT-On-CS",avatar:"https://avatars.githubusercontent.com/u/63803169?s=40&v=4",path:"/cs-lazy-tools/ChatGPT-On-CS",link:"https://github.com/cs-lazy-tools/ChatGPT-On-CS",description:"基于大模型的智能对话客服工具，支持微信、千牛、哔哩哔哩、抖音企业号、抖音、抖店、微博聊天、小红书专业号运营、小红书、知乎等平台接入，可选择 GPT3.5/GPT4.0/ 懒人百宝箱 （后续会支持更多平台），能处理文本、语音和图片，通过插件访问操作系统和互联网等外部资源，支持基于自有知识库定制企业 AI 应用。",language:"TypeScript",stars:"1,405",forks:"141",starup:"845"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,233",forks:"1,392",starup:"469"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,750",forks:"13,183",starup:"1,721"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,458",forks:"396",starup:"1,530"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"923",forks:"56",starup:"363"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,527",forks:"35,792",starup:"2,811"},{title:`bluesky-social /

      social-app`,owner:"bluesky-social",name:"social-app",avatar:"https://avatars.githubusercontent.com/u/1270099?s=40&v=4",path:"/bluesky-social/social-app",link:"https://github.com/bluesky-social/social-app",description:"The Bluesky Social application for Web, iOS, and Android",language:"TypeScript",stars:"6,790",forks:"881",starup:"333"},{title:`Openpanel-dev /

      openpanel`,owner:"Openpanel-dev",name:"openpanel",avatar:"https://avatars.githubusercontent.com/u/1987198?s=40&v=4",path:"/Openpanel-dev/openpanel",link:"https://github.com/Openpanel-dev/openpanel",description:"All the goodies from both Mixpanel and Plausible combined into one tool.",language:"TypeScript",stars:"2,246",forks:"59",starup:"1,185"}],"Vue-daily":[{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"688",forks:"175",starup:"89"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,355",forks:"715",starup:"14"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,863",forks:"258",starup:"5"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"553",forks:"37",starup:"32"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,795",forks:"1,219",starup:"11"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,749",forks:"148",starup:"4"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,191",forks:"98",starup:"15"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,526",forks:"1,434",starup:"3"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,218",forks:"738",starup:"8"},{title:`macrozheng /

      mall-admin-web`,owner:"macrozheng",name:"mall-admin-web",avatar:"https://avatars.githubusercontent.com/u/15903809?s=40&v=4",path:"/macrozheng/mall-admin-web",link:"https://github.com/macrozheng/mall-admin-web",description:"mall-admin-web是一个电商后台管理系统的前端项目，基于Vue+Element实现。 主要包括商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、设置等功能。",language:"Vue",stars:"11,618",forks:"7,076",starup:"3"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"274",forks:"51",starup:"15"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,713",forks:"30,341",starup:"18"},{title:`nuxt /

      nuxt.com`,owner:"nuxt",name:"nuxt.com",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/nuxt.com",link:"https://github.com/nuxt/nuxt.com",description:"The Nuxt website, made with Nuxt.",language:"Vue",stars:"250",forks:"99",starup:"2"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,384",forks:"5,934",starup:"5"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,938",forks:"498",starup:"7"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,829",forks:"12,469",starup:"3"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,366",forks:"4,035",starup:"18"},{title:`ping-pub /

      explorer`,owner:"ping-pub",name:"explorer",avatar:"https://avatars.githubusercontent.com/u/2882920?s=40&v=4",path:"/ping-pub/explorer",link:"https://github.com/ping-pub/explorer",description:"A light explorer for Cosmos-based Blockchains.",language:"Vue",stars:"300",forks:"892",starup:"0"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,114",forks:"1,211",starup:"4"},{title:`EvolutionAPI /

      evolution-manager`,owner:"EvolutionAPI",name:"evolution-manager",avatar:"https://avatars.githubusercontent.com/u/58153955?s=40&v=4",path:"/EvolutionAPI/evolution-manager",link:"https://github.com/EvolutionAPI/evolution-manager",description:"Evolution Manager é uma interface open-source para gerenciar a Evolution API, simplificando a criação e administração de instâncias API com recursos avançados e integrações diversas.",language:"Vue",stars:"55",forks:"111",starup:"0"},{title:`varletjs /

      varlet`,owner:"varletjs",name:"varlet",avatar:"https://avatars.githubusercontent.com/u/24223652?s=40&v=4",path:"/varletjs/varlet",link:"https://github.com/varletjs/varlet",description:"A mobile component library based on Vue3, Material Design 2, Material Design 3, and supports desktop development.",language:"Vue",stars:"4,748",forks:"596",starup:"3"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,207",forks:"180",starup:"15"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,022",forks:"285",starup:"5"},{title:`Libertai /

      libertai-website`,owner:"Libertai",name:"libertai-website",avatar:"https://avatars.githubusercontent.com/u/49811529?s=40&v=4",path:"/Libertai/libertai-website",link:"https://github.com/Libertai/libertai-website",description:"Libertai main website",language:"Vue",stars:"3",forks:"",starup:"0"},{title:`alcorexchange /

      alcor-ui`,owner:"alcorexchange",name:"alcor-ui",avatar:"https://avatars.githubusercontent.com/u/10092436?s=40&v=4",path:"/alcorexchange/alcor-ui",link:"https://github.com/alcorexchange/alcor-ui",description:"Alcor Exchange | First self-listing onchain DEX for eosio tokens;",language:"Vue",stars:"136",forks:"367",starup:"0"}],"Vue-weekly":[{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,355",forks:"715",starup:"65"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,137",forks:"729",starup:"106"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,373",forks:"216",starup:"109"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,863",forks:"258",starup:"49"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,631",forks:"219",starup:"29"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,686",forks:"2,592",starup:"60"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,484",forks:"2,777",starup:"106"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"414",forks:"142",starup:"107"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,207",forks:"180",starup:"83"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,526",forks:"1,434",starup:"59"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"355",forks:"86",starup:"65"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,275",starup:"5"},{title:`wilfredinni /

      python-cheatsheet`,owner:"wilfredinni",name:"python-cheatsheet",avatar:"https://avatars.githubusercontent.com/u/23016174?s=40&v=4",path:"/wilfredinni/python-cheatsheet",link:"https://github.com/wilfredinni/python-cheatsheet",description:"All-inclusive Python cheatsheet",language:"Vue",stars:"4,082",forks:"1,250",starup:"25"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,116",forks:"648",starup:"29"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,114",forks:"1,211",starup:"29"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"274",forks:"51",starup:"68"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,245",forks:"3,612",starup:"46"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"886",forks:"227",starup:"30"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,749",forks:"148",starup:"39"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,713",forks:"30,341",starup:"105"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,759",forks:"1,770",starup:"29"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"235",forks:"122",starup:"9"},{title:`woai3c /

      visual-drag-demo`,owner:"woai3c",name:"visual-drag-demo",avatar:"https://avatars.githubusercontent.com/u/22117876?s=40&v=4",path:"/woai3c/visual-drag-demo",link:"https://github.com/woai3c/visual-drag-demo",description:"一个低代码（可视化拖拽）教学项目",language:"Vue",stars:"4,976",forks:"1,468",starup:"24"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,141",forks:"877",starup:"22"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,203",forks:"490",starup:"31"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,868",forks:"1,979",starup:"5,744"},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,975",forks:"1,941",starup:"4,661"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,334",forks:"1,037",starup:"664"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,762",forks:"320",starup:"714"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,795",forks:"1,219",starup:"443"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,631",forks:"219",starup:"145"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,163",forks:"839",starup:"498"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,782",forks:"760",starup:"183"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,207",forks:"180",starup:"343"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"235",forks:"122",starup:"35"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,275",starup:"9"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,373",forks:"216",starup:"375"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"886",forks:"227",starup:"120"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"275",forks:"39",starup:"113"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"175",forks:"64",starup:"43"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,686",forks:"2,592",starup:"236"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,526",forks:"1,434",starup:"173"},{title:`Zhouqluo /

      bilidown-web`,owner:"Zhouqluo",name:"bilidown-web",avatar:"https://avatars.githubusercontent.com/u/86307617?s=40&v=4",path:"/Zhouqluo/bilidown-web",link:"https://github.com/Zhouqluo/bilidown-web",description:"在线下载b站视频",language:"Vue",stars:"257",forks:"46",starup:"140"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,816",forks:"4,125",starup:"35"},{title:`wudengyao /

      admin_vue3_vite`,owner:"wudengyao",name:"admin_vue3_vite",avatar:"https://avatars.githubusercontent.com/u/9073383?s=40&v=4",path:"/wudengyao/admin_vue3_vite",link:"https://github.com/wudengyao/admin_vue3_vite",description:"项目技术栈：Vue3 + JavaScript + Vite4",language:"Vue",stars:"317",forks:"86",starup:"77"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"783",forks:"68",starup:"149"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,203",forks:"490",starup:"123"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,707",forks:"286",starup:"258"},{title:`mainsail-crew /

      mainsail`,owner:"mainsail-crew",name:"mainsail",avatar:"https://avatars.githubusercontent.com/u/8167632?s=40&v=4",path:"/mainsail-crew/mainsail",link:"https://github.com/mainsail-crew/mainsail",description:"Mainsail is the popular web interface for managing and controlling 3D printers with Klipper.",language:"Vue",stars:"1,590",forks:"336",starup:"72"},{title:`justboil /

      admin-one-vue-tailwind`,owner:"justboil",name:"admin-one-vue-tailwind",avatar:"https://avatars.githubusercontent.com/u/1877513?s=40&v=4",path:"/justboil/admin-one-vue-tailwind",link:"https://github.com/justboil/admin-one-vue-tailwind",description:"Free Vue.js 3.x Tailwind 3.x admin dashboard template with dark mode. Vite builds. Pinia state. Laravel integration available",language:"Vue",stars:"2,013",forks:"370",starup:"44"}]},nt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=J({__name:"index",setup(x){const p=A("daily"),e=A("JavaScript"),h=A([]),t=A("list");function k(g){return g.sort((s,r)=>n(r.starup)-n(s.starup))}V([p,e],()=>{h.value=k(st[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=U();return(g,s)=>{const r=R,d=G,v=D,y=E,i=Y("LazyImage"),a=O,o=q,T=N,C=at,F=et;return c(),S("div",null,[l(y,null,{default:w(()=>[l(r,{modelValue:u(p),"onUpdate:modelValue":s[0]||(s[0]=m=>P(p)?p.value=m:null)},null,8,["modelValue"]),l(d,{modelValue:u(e),"onUpdate:modelValue":s[1]||(s[1]=m=>P(e)?e.value=m:null)},null,8,["modelValue"]),l(v,{modelValue:u(t),"onUpdate:modelValue":s[2]||(s[2]=m=>P(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),l($,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(c(),S("div",nt,[rt,(c(!0),S(Q,null,X(u(h),(m,z)=>(c(),j(T,{key:z,index:z,repo:m,onMouseenter:u(f)},{avatar:w(({repo:b})=>[l(i,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[l(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[l(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(c(),j(C,{key:1,data:u(h)},null,8,["data"])):(c(),j(F,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
