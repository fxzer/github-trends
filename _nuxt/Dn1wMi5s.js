import{_ as L}from"./BLg9Jyeb.js";import{_ as B}from"./DzXhZTCF.js";import{_ as D}from"./yaqHRSFV.js";import E from"./BUHpF7BF.js";import{_ as N,a as O}from"./7FmblRuR.js";import{_ as H}from"./ZsEQkJoW.js";import{s as K,u as M,a as z,b as W,i as U,c as q}from"./-LMibqLE.js";import{d as G,s}from"./CYcXzR8Z.js";import{n as P,q as R,h as J,o as l,c as S,s as _,r as j,u as $,b as c,w,T as Y,v as u,x as C,F as Q,y as X,z as V,a as Z}from"./-JY4Vzvb.js";import{l as tt}from"./p2-M2djV.js";import"./6cxFqZQG.js";import"./BDCvEiEm.js";import"./BQkc-AXV.js";import"./D96WsQGi.js";const at=P({__name:"Chart",props:{data:{}},setup(A){const p=A,{data:e}=R(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(K),t=M("仓库飙升榜",h);function k(n){const r=G(n);r.sort((a,o)=>{const T=s(a.starup)+s(a.stars)+s(a.forks),x=s(o.starup)+s(o.stars)+s(o.forks);return T-x});const[d,v,y,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=y}const{domRef:f}=z(t,W);J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(A){const p=A,{data:e}=R(p),t=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=z(t,W);function f(n){const r=G(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],y=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:U(d[a%d.length])}));t.value.series[0].data=y,t.value.yAxis.data=v}J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`brunosimon /

      my-room-in-3d`,owner:"brunosimon",name:"my-room-in-3d",avatar:"https://avatars.githubusercontent.com/u/5439991?s=40&v=4",path:"/brunosimon/my-room-in-3d",link:"https://github.com/brunosimon/my-room-in-3d",description:"",language:"JavaScript",stars:"3,165",forks:"426",starup:"136"},{title:`LeCoupa /

      awesome-cheatsheets`,owner:"LeCoupa",name:"awesome-cheatsheets",avatar:"https://avatars.githubusercontent.com/u/1658644?s=40&v=4",path:"/LeCoupa/awesome-cheatsheets",link:"https://github.com/LeCoupa/awesome-cheatsheets",description:"👩‍💻👨‍💻 Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single file.",language:"JavaScript",stars:"37,859",forks:"5,944",starup:"17"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently",language:"JavaScript",stars:"1,374",forks:"200",starup:"120"},{title:`leafTheFish /

      DeathNote`,owner:"leafTheFish",name:"DeathNote",avatar:"https://avatars.githubusercontent.com/u/103831852?s=40&v=4",path:"/leafTheFish/DeathNote",link:"https://github.com/leafTheFish/DeathNote",description:"",language:"JavaScript",stars:"2,660",forks:"862",starup:"6"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,256",forks:"2,960",starup:"9"},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",link:"https://github.com/eslint/eslint",description:"Find and fix problems in your JavaScript code.",language:"JavaScript",stars:"24,422",forks:"4,411",starup:"9"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,753",forks:"10,856",starup:"30"},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",link:"https://github.com/HeyPuter/puter",description:"🌐 The Web OS! Free, Open-Source, and Self-Hostable.",language:"JavaScript",stars:"18,939",forks:"1,158",starup:"43"},{title:`ltdrdata /

      ComfyUI-Manager`,owner:"ltdrdata",name:"ComfyUI-Manager",avatar:"https://avatars.githubusercontent.com/u/128333288?s=40&v=4",path:"/ltdrdata/ComfyUI-Manager",link:"https://github.com/ltdrdata/ComfyUI-Manager",description:"",language:"JavaScript",stars:"3,989",forks:"478",starup:"19"},{title:`WasperAI /

      Wasper`,owner:"WasperAI",name:"Wasper",avatar:"https://avatars.githubusercontent.com/u/170032943?s=40&v=4",path:"/WasperAI/Wasper",link:"https://github.com/WasperAI/Wasper",description:"",language:"JavaScript",stars:"1,013",forks:"250",starup:"61"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,176",forks:"2,361",starup:"4"},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",link:"https://github.com/pedroslopez/whatsapp-web.js",description:"A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",language:"JavaScript",stars:"13,914",forks:"3,344",starup:"13"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,861",forks:"1,791",starup:"5"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"833",forks:"3,297",starup:"5"},{title:`frappe /

      gantt`,owner:"frappe",name:"gantt",avatar:"https://avatars.githubusercontent.com/u/9355208?s=40&v=4",path:"/frappe/gantt",link:"https://github.com/frappe/gantt",description:"Open Source Javascript Gantt",language:"JavaScript",stars:"4,385",forks:"976",starup:"6"},{title:`VincentGarreau /

      particles.js`,owner:"VincentGarreau",name:"particles.js",avatar:"https://avatars.githubusercontent.com/u/961898?s=40&v=4",path:"/VincentGarreau/particles.js",link:"https://github.com/VincentGarreau/particles.js",description:"A lightweight JavaScript library for creating particles",language:"JavaScript",stars:"28,490",forks:"4,803",starup:"6"},{title:`ibrahimaitech /

      BLACK-PANTHER-XMD`,owner:"ibrahimaitech",name:"BLACK-PANTHER-XMD",avatar:"https://avatars.githubusercontent.com/u/162009674?s=40&v=4",path:"/ibrahimaitech/BLACK-PANTHER-XMD",link:"https://github.com/ibrahimaitech/BLACK-PANTHER-XMD",description:"Black panther md is the fastest wabot that helps WhatsApp users to enjoy smooth life",language:"JavaScript",stars:"347",forks:"1,043",starup:"14"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,676",forks:"26,022",starup:"55"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,093",forks:"1,114",starup:"5"},{title:`Leaflet /

      Leaflet`,owner:"Leaflet",name:"Leaflet",avatar:"https://avatars.githubusercontent.com/u/25395?s=40&v=4",path:"/Leaflet/Leaflet",link:"https://github.com/Leaflet/Leaflet",description:"🍃 JavaScript library for mobile-friendly interactive maps 🇺🇦",language:"JavaScript",stars:"40,237",forks:"5,757",starup:"7"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,710",forks:"78,457",starup:"19"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"532",forks:"2,426",starup:"6"},{title:`stylelint /

      stylelint`,owner:"stylelint",name:"stylelint",avatar:"https://avatars.githubusercontent.com/u/808227?s=40&v=4",path:"/stylelint/stylelint",link:"https://github.com/stylelint/stylelint",description:"A mighty CSS linter that helps you avoid errors and enforce conventions.",language:"JavaScript",stars:"10,860",forks:"928",starup:"3"},{title:`Kingjux /

      Venocyber-md`,owner:"Kingjux",name:"Venocyber-md",avatar:"https://avatars.githubusercontent.com/u/154667110?s=40&v=4",path:"/Kingjux/Venocyber-md",link:"https://github.com/Kingjux/Venocyber-md",description:"Introducing Venocyber md bot your personal chuddybuddy md you were looking for this is most powerful Whatsapp chat bot created to ensure your WhatsApp personal requirements you are all in one ✍️👋👋",language:"JavaScript",stars:"163",forks:"584",starup:"7"},{title:`Chalarangelo /

      30-seconds-of-code`,owner:"Chalarangelo",name:"30-seconds-of-code",avatar:"https://avatars.githubusercontent.com/u/8281875?s=40&v=4",path:"/Chalarangelo/30-seconds-of-code",link:"https://github.com/Chalarangelo/30-seconds-of-code",description:"Short code snippets for all your development needs",language:"JavaScript",stars:"119,731",forks:"11,887",starup:"39"}],"JavaScript-weekly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,503",forks:"3,100",starup:"1,809"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"184,106",forks:"29,713",starup:"625"},{title:`Admiral-Billy /

      Pokerogue-App`,owner:"Admiral-Billy",name:"Pokerogue-App",avatar:"https://avatars.githubusercontent.com/u/72857839?s=40&v=4",path:"/Admiral-Billy/Pokerogue-App",link:"https://github.com/Admiral-Billy/Pokerogue-App",description:"An app to play Pokerogue.net in an app window. Wow!",language:"JavaScript",stars:"215",forks:"29",starup:"86"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,891",forks:"1,001",starup:"166"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a dynamic graph where each node is an executable unit. Its modular and interactive design fosters rapid experimentation and prototyping, pushing hard on the limits of creativity.",language:"JavaScript",stars:"18,328",forks:"2,749",starup:"281"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,429",forks:"3,334",starup:"589"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,676",forks:"26,022",starup:"322"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,528",forks:"1,402",starup:"104"},{title:`bigskysoftware /

      htmx`,owner:"bigskysoftware",name:"htmx",avatar:"https://avatars.githubusercontent.com/u/469183?s=40&v=4",path:"/bigskysoftware/htmx",link:"https://github.com/bigskysoftware/htmx",description:"</> htmx - high power tools for HTML",language:"JavaScript",stars:"33,623",forks:"1,114",starup:"250"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,563",forks:"15,477",starup:"188"},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",link:"https://github.com/maboloshi/github-chinese",description:"GitHub 汉化插件，GitHub 中文化界面。 (GitHub Translation To Chinese)",language:"JavaScript",stars:"3,351",forks:"206",starup:"318"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently",language:"JavaScript",stars:"1,374",forks:"200",starup:"281"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,660",forks:"9,748",starup:"105"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,858",forks:"650",starup:"74"},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",link:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"24 Lessons, 12 Weeks, Get Started as a Web Developer",language:"JavaScript",stars:"81,823",forks:"12,223",starup:"139"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,442",forks:"1,167",starup:"49"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"833",forks:"3,297",starup:"71"},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",link:"https://github.com/axios/axios",description:"Promise based HTTP client for the browser and node.js",language:"JavaScript",stars:"104,284",forks:"10,735",starup:"110"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,753",forks:"329",starup:"273"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,014",forks:"16,373",starup:"48"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,597",forks:"1,541",starup:"55"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,753",forks:"10,856",starup:"183"},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/9736046?s=40&v=4",path:"/FreeTubeApp/FreeTube",link:"https://github.com/FreeTubeApp/FreeTube",description:"An Open Source YouTube app for privacy",language:"JavaScript",stars:"12,069",forks:"733",starup:"207"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,754",forks:"4,558",starup:"369"},{title:`franceking1 /

      Flash-Md`,owner:"franceking1",name:"Flash-Md",avatar:"https://avatars.githubusercontent.com/u/151246926?s=40&v=4",path:"/franceking1/Flash-Md",link:"https://github.com/franceking1/Flash-Md",description:"Feel Free To Use FLASH-MD, Remember To STAR🌟 The Repo After Forking",language:"JavaScript",stars:"532",forks:"2,426",starup:"63"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"26,503",forks:"3,100",starup:"4,714"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,101",forks:"1,563",starup:"2,861"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,140",forks:"219",starup:"1,108"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"621",forks:"108",starup:"313"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,891",forks:"1,001",starup:"508"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,615",forks:"45,537",starup:"2,029"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,229",forks:"6,880",starup:"637"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,442",forks:"1,167",starup:"204"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,753",forks:"329",starup:"1,179"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,199",forks:"3,364",starup:"812"},{title:`0xsongsu /

      dailytask`,owner:"0xsongsu",name:"dailytask",avatar:"https://avatars.githubusercontent.com/u/66813860?s=40&v=4",path:"/0xsongsu/dailytask",link:"https://github.com/0xsongsu/dailytask",description:"每日签到任务",language:"JavaScript",stars:"624",forks:"355",starup:"125"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,597",forks:"1,541",starup:"165"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,833",forks:"5,911",starup:"886"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,676",forks:"26,022",starup:"1,193"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,063",forks:"2,506",starup:"293"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,861",forks:"1,791",starup:"202"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,754",forks:"4,558",starup:"1,463"},{title:`yonggekkk /

      Cloudflare_vless_trojan`,owner:"yonggekkk",name:"Cloudflare_vless_trojan",avatar:"https://avatars.githubusercontent.com/u/121604513?s=40&v=4",path:"/yonggekkk/Cloudflare_vless_trojan",link:"https://github.com/yonggekkk/Cloudflare_vless_trojan",description:"Cloudflare代理脚本，支持workers与pages两种形式部署，实现Vless与Trojan两种协议。CF优选域名、优选官方IP反代IP多平台一键脚本",language:"JavaScript",stars:"2,790",forks:"1,855",starup:"432"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,563",forks:"15,477",starup:"579"},{title:`jonasschmedtmann /

      complete-javascript-course`,owner:"jonasschmedtmann",name:"complete-javascript-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-javascript-course",link:"https://github.com/jonasschmedtmann/complete-javascript-course",description:"Starter files, final projects, and FAQ for my Complete JavaScript course",language:"JavaScript",stars:"15,014",forks:"16,373",starup:"206"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,524",forks:"1,849",starup:"393"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,093",forks:"1,114",starup:"278"},{title:`WordPress /

      gutenberg`,owner:"WordPress",name:"gutenberg",avatar:"https://avatars.githubusercontent.com/u/272444?s=40&v=4",path:"/WordPress/gutenberg",link:"https://github.com/WordPress/gutenberg",description:"The Block Editor project for WordPress and beyond. Plugin is available from the official repository.",language:"JavaScript",stars:"9,905",forks:"3,958",starup:"69"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"246",forks:"369",starup:"138"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,665",forks:"977",starup:"412"}],"TypeScript-daily":[{title:`ragapp /

      ragapp`,owner:"ragapp",name:"ragapp",avatar:"https://avatars.githubusercontent.com/u/17126?s=40&v=4",path:"/ragapp/ragapp",link:"https://github.com/ragapp/ragapp",description:"The easiest way to use Agentic RAG in any enterprise",language:"TypeScript",stars:"1,536",forks:"133",starup:"291"},{title:`didi /

      xiaoju-survey`,owner:"didi",name:"xiaoju-survey",avatar:"https://avatars.githubusercontent.com/u/16012672?s=40&v=4",path:"/didi/xiaoju-survey",link:"https://github.com/didi/xiaoju-survey",description:"「快速」打造「专属」问卷系统, 让调研「更轻松」",language:"TypeScript",stars:"961",forks:"118",starup:"128"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,088",forks:"1,107",starup:"96"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"6,696",forks:"697",starup:"209"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,743",forks:"399",starup:"132"},{title:`BuilderIO /

      gpt-crawler`,owner:"BuilderIO",name:"gpt-crawler",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/gpt-crawler",link:"https://github.com/BuilderIO/gpt-crawler",description:"Crawl a site to generate knowledge files to create your own custom GPT from a URL",language:"TypeScript",stars:"17,913",forks:"1,846",starup:"20"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,765",forks:"1,085",starup:"147"},{title:`labring /

      FastGPT`,owner:"labring",name:"FastGPT",avatar:"https://avatars.githubusercontent.com/u/50446880?s=40&v=4",path:"/labring/FastGPT",link:"https://github.com/labring/FastGPT",description:"FastGPT is a knowledge-based platform built on the LLMs, offers a comprehensive suite of out-of-the-box capabilities such as data processing, RAG retrieval, and visual AI workflow orchestration, letting you easily develop and deploy complex question-answering systems without the need for extensive setup or configuration.",language:"TypeScript",stars:"13,893",forks:"3,570",starup:"54"},{title:`strapi /

      strapi`,owner:"strapi",name:"strapi",avatar:"https://avatars.githubusercontent.com/u/13311463?s=40&v=4",path:"/strapi/strapi",link:"https://github.com/strapi/strapi",description:"🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript/TypeScript, fully customizable and developer-first.",language:"TypeScript",stars:"61,022",forks:"7,614",starup:"36"},{title:`brocoders /

      nestjs-boilerplate`,owner:"brocoders",name:"nestjs-boilerplate",avatar:"https://avatars.githubusercontent.com/u/25180681?s=40&v=4",path:"/brocoders/nestjs-boilerplate",link:"https://github.com/brocoders/nestjs-boilerplate",description:"NestJS boilerplate. Auth, TypeORM, Mongoose, Postgres, MongoDB, Mailing, I18N, Docker.",language:"TypeScript",stars:"2,462",forks:"503",starup:"10"},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",link:"https://github.com/clash-verge-rev/clash-verge-rev",description:"Continuation of Clash Verge - A Clash Meta GUI based on Tauri (Windows, MacOS, Linux)",language:"TypeScript",stars:"20,956",forks:"1,580",starup:"137"},{title:`kamranahmedse /

      developer-roadmap`,owner:"kamranahmedse",name:"developer-roadmap",avatar:"https://avatars.githubusercontent.com/u/4921183?s=40&v=4",path:"/kamranahmedse/developer-roadmap",link:"https://github.com/kamranahmedse/developer-roadmap",description:"Interactive roadmaps, guides and other educational content to help developers grow in their careers.",language:"TypeScript",stars:"278,092",forks:"37,264",starup:"127"},{title:`Amery2010 /

      TalkWithGemini`,owner:"Amery2010",name:"TalkWithGemini",avatar:"https://avatars.githubusercontent.com/u/5876036?s=40&v=4",path:"/Amery2010/TalkWithGemini",link:"https://github.com/Amery2010/TalkWithGemini",description:"Deploy your private Gemini application for free with one click, supporting Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Pro and Gemini Pro Vision models. 一键免费部署您的私人 Gemini 应用, 支持 Gemini 1.5 Pro、Gemini 1.5 Flash、Gemini Pro 和 Gemini Pro Vision 模型。",language:"TypeScript",stars:"456",forks:"120",starup:"35"},{title:`M-cheng-web /

      web-tracing`,owner:"M-cheng-web",name:"web-tracing",avatar:"https://avatars.githubusercontent.com/u/58416262?s=40&v=4",path:"/M-cheng-web/web-tracing",link:"https://github.com/M-cheng-web/web-tracing",description:"为前端项目提供【 埋点、行为、性能、异常、请求、资源、路由、曝光、录屏 】监控手段",language:"TypeScript",stars:"1,842",forks:"221",starup:"35"},{title:`SigNoz /

      signoz`,owner:"SigNoz",name:"signoz",avatar:"https://avatars.githubusercontent.com/u/88981777?s=40&v=4",path:"/SigNoz/signoz",link:"https://github.com/SigNoz/signoz",description:"SigNoz is an open-source observability platform native to OpenTelemetry with logs, traces and metrics in a single application. An open-source alternative to DataDog, NewRelic, etc. 🔥 🖥. 👉 Open source Application Performance Monitoring (APM) & Observability tool",language:"TypeScript",stars:"17,277",forks:"1,058",starup:"16"},{title:`langchain-ai /

      langchain-nextjs-template`,owner:"langchain-ai",name:"langchain-nextjs-template",avatar:"https://avatars.githubusercontent.com/u/6952323?s=40&v=4",path:"/langchain-ai/langchain-nextjs-template",link:"https://github.com/langchain-ai/langchain-nextjs-template",description:"LangChain + Next.js starter template",language:"TypeScript",stars:"1,107",forks:"221",starup:"23"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"31,323",forks:"4,136",starup:"168"},{title:`langchain-ai /

      langchainjs`,owner:"langchain-ai",name:"langchainjs",avatar:"https://avatars.githubusercontent.com/u/6952323?s=40&v=4",path:"/langchain-ai/langchainjs",link:"https://github.com/langchain-ai/langchainjs",description:"🦜🔗 Build context-aware reasoning applications 🦜🔗",language:"TypeScript",stars:"11,333",forks:"1,883",starup:"28"},{title:`markmap /

      markmap`,owner:"markmap",name:"markmap",avatar:"https://avatars.githubusercontent.com/u/3139113?s=40&v=4",path:"/markmap/markmap",link:"https://github.com/markmap/markmap",description:"Build mindmaps with plain text",language:"TypeScript",stars:"7,184",forks:"496",starup:"25"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,520",forks:"537",starup:"245"},{title:`AykutSarac /

      jsoncrack.com`,owner:"AykutSarac",name:"jsoncrack.com",avatar:"https://avatars.githubusercontent.com/u/47941171?s=40&v=4",path:"/AykutSarac/jsoncrack.com",link:"https://github.com/AykutSarac/jsoncrack.com",description:"✨ Innovative and open-source visualization application that transforms various data formats, such as JSON, YAML, XML, CSV and more, into interactive graphs.",language:"TypeScript",stars:"28,736",forks:"1,683",starup:"18"},{title:`emilkowalski /

      sonner`,owner:"emilkowalski",name:"sonner",avatar:"https://avatars.githubusercontent.com/u/36730035?s=40&v=4",path:"/emilkowalski/sonner",link:"https://github.com/emilkowalski/sonner",description:"An opinionated toast component for React.",language:"TypeScript",stars:"7,382",forks:"225",starup:"27"},{title:`withastro /

      astro`,owner:"withastro",name:"astro",avatar:"https://avatars.githubusercontent.com/u/361671?s=40&v=4",path:"/withastro/astro",link:"https://github.com/withastro/astro",description:"The web framework for content-driven websites. ⭐️ Star to support our work!",language:"TypeScript",stars:"43,131",forks:"2,251",starup:"22"},{title:`t3-oss /

      create-t3-app`,owner:"t3-oss",name:"create-t3-app",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/t3-oss/create-t3-app",link:"https://github.com/t3-oss/create-t3-app",description:"The best way to start a full-stack, typesafe Next.js app",language:"TypeScript",stars:"23,708",forks:"1,083",starup:"19"},{title:`cooderl /

      wewe-rss`,owner:"cooderl",name:"wewe-rss",avatar:"https://avatars.githubusercontent.com/u/152949883?s=40&v=4",path:"/cooderl/wewe-rss",link:"https://github.com/cooderl/wewe-rss",description:"🤗更优雅的微信公众号订阅方式，支持私有化部署、微信公众号RSS生成（基于微信读书）v2.x",language:"TypeScript",stars:"3,280",forks:"615",starup:"16"}],"TypeScript-weekly":[{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"1,427",forks:"109",starup:"607"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,520",forks:"537",starup:"2,778"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,030",forks:"365",starup:"1,048"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,826",forks:"677",starup:"717"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,743",forks:"399",starup:"1,067"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"866",forks:"147",starup:"204"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,360",forks:"7,245",starup:"609"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"718",forks:"51",starup:"323"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"3,244",forks:"403",starup:"1,106"},{title:`activepieces /

      activepieces`,owner:"activepieces",name:"activepieces",avatar:"https://avatars.githubusercontent.com/u/1812998?s=40&v=4",path:"/activepieces/activepieces",link:"https://github.com/activepieces/activepieces",description:"Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative",language:"TypeScript",stars:"8,188",forks:"872",starup:"535"},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",link:"https://github.com/angular/angular",description:"Deliver web apps with confidence 🚀",language:"TypeScript",stars:"94,863",forks:"24,743",starup:"189"},{title:`webstudio-is /

      webstudio`,owner:"webstudio-is",name:"webstudio",avatar:"https://avatars.githubusercontent.com/u/52824?s=40&v=4",path:"/webstudio-is/webstudio",link:"https://github.com/webstudio-is/webstudio",description:"Open Source alternative to Webflow, check out our CMS launch https://webstudio.is/cms",language:"TypeScript",stars:"3,934",forks:"378",starup:"85"},{title:`angular /

      angular-cli`,owner:"angular",name:"angular-cli",avatar:"https://avatars.githubusercontent.com/u/17563226?s=40&v=4",path:"/angular/angular-cli",link:"https://github.com/angular/angular-cli",description:"CLI tool for Angular",language:"TypeScript",stars:"26,629",forks:"11,981",starup:"22"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,613",forks:"14,161",starup:"796"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,330",forks:"6,913",starup:"114"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,577",forks:"3,378",starup:"264"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,586",forks:"1,109",starup:"374"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,228",forks:"498",starup:"201"},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",link:"https://github.com/mui/material-ui",description:"Material UI: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.",language:"TypeScript",stars:"91,991",forks:"31,633",starup:"117"},{title:`angular /

      components`,owner:"angular",name:"components",avatar:"https://avatars.githubusercontent.com/u/4450522?s=40&v=4",path:"/angular/components",link:"https://github.com/angular/components",description:"Component infrastructure and Material Design components for Angular",language:"TypeScript",stars:"24,131",forks:"6,669",starup:"34"},{title:`continuedev /

      continue`,owner:"continuedev",name:"continue",avatar:"https://avatars.githubusercontent.com/u/33237525?s=40&v=4",path:"/continuedev/continue",link:"https://github.com/continuedev/continue",description:"⏩ Open-source VS Code and JetBrains extensions that enable you to easily create your own modular AI software development system",language:"TypeScript",stars:"12,060",forks:"756",starup:"403"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"1,271",forks:"135",starup:"875"},{title:`solidSpoon /

      DashPlayer`,owner:"solidSpoon",name:"DashPlayer",avatar:"https://avatars.githubusercontent.com/u/39454841?s=40&v=4",path:"/solidSpoon/DashPlayer",link:"https://github.com/solidSpoon/DashPlayer",description:"为英语学习者量身打造的视频播放器，助你通过观看视频、沉浸真实语境，轻松提升英语水平。#美剧 #播放器 #听力",language:"TypeScript",stars:"1,501",forks:"74",starup:"602"},{title:`vercel /

      ai-chatbot`,owner:"vercel",name:"ai-chatbot",avatar:"https://avatars.githubusercontent.com/u/4060187?s=40&v=4",path:"/vercel/ai-chatbot",link:"https://github.com/vercel/ai-chatbot",description:"A full-featured, hackable Next.js AI chatbot built by Vercel",language:"TypeScript",stars:"5,216",forks:"1,504",starup:"77"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"1,146",forks:"89",starup:"302"}],"TypeScript-monthly":[{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"8,362",forks:"1,226",starup:"7,775"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"9,765",forks:"1,085",starup:"4,200"},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",link:"https://github.com/ItzCrazyKns/Perplexica",description:"Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI",language:"TypeScript",stars:"6,520",forks:"537",starup:"5,799"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,586",forks:"1,109",starup:"1,892"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl and extract with a single API.",language:"TypeScript",stars:"5,030",forks:"365",starup:"2,984"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"31,323",forks:"4,136",starup:"6,035"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,322",forks:"2,235",starup:"3,927"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,955",forks:"1,333",starup:"953"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"High-performance In-browser LLM Inference Engine",language:"TypeScript",stars:"10,826",forks:"677",starup:"1,734"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,674",forks:"2,303",starup:"1,970"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,360",forks:"7,245",starup:"1,141"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"112,613",forks:"14,161",starup:"2,738"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,330",forks:"6,913",starup:"309"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"56,075",forks:"3,265",starup:"986"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,232",forks:"361",starup:"2,061"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,333",forks:"157",starup:"950"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"4,743",forks:"399",starup:"1,607"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,236",forks:"1,391",starup:"371"},{title:`cs-lazy-tools /

      ChatGPT-On-CS`,owner:"cs-lazy-tools",name:"ChatGPT-On-CS",avatar:"https://avatars.githubusercontent.com/u/63803169?s=40&v=4",path:"/cs-lazy-tools/ChatGPT-On-CS",link:"https://github.com/cs-lazy-tools/ChatGPT-On-CS",description:"基于大模型的智能对话客服工具，支持微信、千牛、哔哩哔哩、抖音企业号、抖音、抖店、微博聊天、小红书专业号运营、小红书、知乎等平台接入，可选择 GPT3.5/GPT4.0/ 懒人百宝箱 （后续会支持更多平台），能处理文本、语音和图片，通过插件访问操作系统和互联网等外部资源，支持基于自有知识库定制企业 AI 应用。",language:"TypeScript",stars:"1,413",forks:"141",starup:"789"},{title:`bitwarden /

      clients`,owner:"bitwarden",name:"clients",avatar:"https://avatars.githubusercontent.com/u/1190944?s=40&v=4",path:"/bitwarden/clients",link:"https://github.com/bitwarden/clients",description:"Bitwarden client applications (web, browser extension, desktop, and cli)",language:"TypeScript",stars:"8,476",forks:"1,118",starup:"196"},{title:`marmelab /

      react-admin`,owner:"marmelab",name:"react-admin",avatar:"https://avatars.githubusercontent.com/u/99944?s=40&v=4",path:"/marmelab/react-admin",link:"https://github.com/marmelab/react-admin",description:"A frontend Framework for building data-driven applications running on top of REST/GraphQL APIs, using TypeScript, React and Material Design",language:"TypeScript",stars:"24,231",forks:"5,176",starup:"238"},{title:`Openpanel-dev /

      openpanel`,owner:"Openpanel-dev",name:"openpanel",avatar:"https://avatars.githubusercontent.com/u/1987198?s=40&v=4",path:"/Openpanel-dev/openpanel",link:"https://github.com/Openpanel-dev/openpanel",description:"All the goodies from both Mixpanel and Plausible combined into one tool.",language:"TypeScript",stars:"2,284",forks:"64",starup:"1,261"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"926",forks:"57",starup:"365"},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/35996?s=40&v=4",path:"/nrwl/nx",link:"https://github.com/nrwl/nx",description:"Smart Monorepos · Fast CI",language:"TypeScript",stars:"22,355",forks:"2,224",starup:"438"},{title:`solidjs /

      solid-start`,owner:"solidjs",name:"solid-start",avatar:"https://avatars.githubusercontent.com/u/2768267?s=40&v=4",path:"/solidjs/solid-start",link:"https://github.com/solidjs/solid-start",description:"SolidStart, the Solid app framework",language:"TypeScript",stars:"4,835",forks:"371",starup:"362"}],"Vue-daily":[{title:`ccbikai /

      Sink`,owner:"ccbikai",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/ccbikai/Sink",link:"https://github.com/ccbikai/Sink",description:"⚡ A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.",language:"Vue",stars:"735",forks:"180",starup:"219"},{title:`OpenCSGs /

      CSGHub`,owner:"OpenCSGs",name:"CSGHub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/CSGHub",link:"https://github.com/OpenCSGs/CSGHub",description:"CSGHub is an opensource large model assets platform just like on-premise huggingface which helps to manage datasets, model files, codes and more.　CSGHub是一个开源、可信的大模型资产管理平台，可帮助用户治理LLM和LLM应用生命周期中涉及到的资产（数据集、模型文件、代码等）。CSGHub提供类似私有化的Huggingface功能，以类似OpenStack Glance管理虚拟机镜像、Harbor管理容器镜像以及Sonatype Nexus管理制品的方式，实现对LLM资产的管理。欢迎关注反馈和Star⭐️",language:"Vue",stars:"572",forks:"42",starup:"18"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,961",forks:"1,611",starup:"10"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,426",forks:"1,414",starup:"5"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,169",forks:"840",starup:"9"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,557",forks:"1,367",starup:"6"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,437",forks:"382",starup:"3"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"463",forks:"83",starup:"10"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,215",forks:"1,664",starup:"3"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,389",forks:"4,041",starup:"17"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,775",forks:"320",starup:"11"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,213",forks:"180",starup:"8"},{title:`woai3c /

      visual-drag-demo`,owner:"woai3c",name:"visual-drag-demo",avatar:"https://avatars.githubusercontent.com/u/22117876?s=40&v=4",path:"/woai3c/visual-drag-demo",link:"https://github.com/woai3c/visual-drag-demo",description:"一个低代码（可视化拖拽）教学项目",language:"Vue",stars:"4,981",forks:"1,469",starup:"3"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,387",forks:"5,934",starup:"4"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,227",forks:"739",starup:"7"},{title:`Thecosy /

      IceCMS`,owner:"Thecosy",name:"IceCMS",avatar:"https://avatars.githubusercontent.com/u/87817554?s=40&v=4",path:"/Thecosy/IceCMS",link:"https://github.com/Thecosy/IceCMS",description:"🌈冰激凌内容管理系统🍦,实现MacWK资源站，社区图片视频圈子CMS，支持网页端移动端小程序🌟适合做 资讯商城，社区论坛，聊天交友 社区，博客，圈子，论坛，图片，视频，社交。",language:"Vue",stars:"1,425",forks:"198",starup:"2"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,718",forks:"30,341",starup:"18"},{title:`ccfddl /

      ccf-deadlines`,owner:"ccfddl",name:"ccf-deadlines",avatar:"https://avatars.githubusercontent.com/u/20631913?s=40&v=4",path:"/ccfddl/ccf-deadlines",link:"https://github.com/ccfddl/ccf-deadlines",description:"⏰ Collaboratively track deadlines of conferences recommended by CCF (Website, Python Cli, Wechat Applet) / If you find it useful, please star this project, thanks~",language:"Vue",stars:"5,112",forks:"362",starup:"4"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,207",forks:"491",starup:"5"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,183",forks:"572",starup:"10"},{title:`vuejs /

      create-vue`,owner:"vuejs",name:"create-vue",avatar:"https://avatars.githubusercontent.com/u/3277634?s=40&v=4",path:"/vuejs/create-vue",link:"https://github.com/vuejs/create-vue",description:"🛠️ The recommended way to start a Vite-powered Vue project",language:"Vue",stars:"3,474",forks:"394",starup:"4"},{title:`jdf2e /

      nutui`,owner:"jdf2e",name:"nutui",avatar:"https://avatars.githubusercontent.com/u/13060263?s=40&v=4",path:"/jdf2e/nutui",link:"https://github.com/jdf2e/nutui",description:"京东风格的移动端 Vue 组件库，支持多端小程序(A Vue.js UI Toolkit for Mobile Web)",language:"Vue",stars:"5,952",forks:"813",starup:"3"},{title:`kevin2li /

      PDF-Guru`,owner:"kevin2li",name:"PDF-Guru",avatar:"https://avatars.githubusercontent.com/u/45037121?s=40&v=4",path:"/kevin2li/PDF-Guru",link:"https://github.com/kevin2li/PDF-Guru",description:"A Multi-purpose PDF file processing tool with a nice UI that supports merge, split, rotate, reorder, delete, scale, crop, watermark, encrypt/decrypt, bookmark, extract, compress, etc.",language:"Vue",stars:"1,492",forks:"131",starup:"3"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,349",forks:"1,039",starup:"23"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"176",forks:"63",starup:"1"}],"Vue-weekly":[{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,361",forks:"716",starup:"68"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,142",forks:"730",starup:"118"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,866",forks:"258",starup:"46"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,381",forks:"217",starup:"98"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,213",forks:"180",starup:"85"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,690",forks:"2,590",starup:"52"},{title:`gcpaas /

      DataRoom`,owner:"gcpaas",name:"DataRoom",avatar:"https://avatars.githubusercontent.com/u/49868110?s=40&v=4",path:"/gcpaas/DataRoom",link:"https://github.com/gcpaas/DataRoom",description:"🔥基于SpringBoot、MyBatisPlus、ElementUI、G2Plot、Echarts等技术栈的大屏设计器，具备目录管理、DashBoard设计、预览能力，支持MySQL、Oracle、PostgreSQL、JSON等数据集接入，对于复杂数据处理还可以使用Groovy脚本数据集，使用简单，完全免费，代码开源。",language:"Vue",stars:"360",forks:"87",starup:"68"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,288",starup:"4"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,013",forks:"135",starup:"15"},{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"415",forks:"146",starup:"55"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,530",forks:"1,436",starup:"46"},{title:`wilfredinni /

      python-cheatsheet`,owner:"wilfredinni",name:"python-cheatsheet",avatar:"https://avatars.githubusercontent.com/u/23016174?s=40&v=4",path:"/wilfredinni/python-cheatsheet",link:"https://github.com/wilfredinni/python-cheatsheet",description:"All-inclusive Python cheatsheet",language:"Vue",stars:"4,083",forks:"1,251",starup:"18"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"277",forks:"51",starup:"65"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,116",forks:"1,211",starup:"32"},{title:`oliver225 /

      thingsboard-ui-vue3`,owner:"oliver225",name:"thingsboard-ui-vue3",avatar:"https://avatars.githubusercontent.com/u/16226897?s=40&v=4",path:"/oliver225/thingsboard-ui-vue3",link:"https://github.com/oliver225/thingsboard-ui-vue3",description:"本项目为基于Vue3开发的 ThingsBoard 前台 ,AntDesginVue、VbenVueAdmin、AntV X6、规则链代码已全部开放、ThingsBoard3.x持续更新中",language:"Vue",stars:"134",forks:"19",starup:"34"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,207",forks:"491",starup:"33"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,119",forks:"648",starup:"30"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,497",forks:"2,778",starup:"107"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,426",forks:"1,414",starup:"31"},{title:`woai3c /

      visual-drag-demo`,owner:"woai3c",name:"visual-drag-demo",avatar:"https://avatars.githubusercontent.com/u/22117876?s=40&v=4",path:"/woai3c/visual-drag-demo",link:"https://github.com/woai3c/visual-drag-demo",description:"一个低代码（可视化拖拽）教学项目",language:"Vue",stars:"4,981",forks:"1,469",starup:"23"},{title:`vueComponent /

      ant-design-vue-pro`,owner:"vueComponent",name:"ant-design-vue-pro",avatar:"https://avatars.githubusercontent.com/u/5404542?s=40&v=4",path:"/vueComponent/ant-design-vue-pro",link:"https://github.com/vueComponent/ant-design-vue-pro",description:"👨🏻‍💻👩🏻‍💻 Use Ant Design Vue like a Pro! (vue2)",language:"Vue",stars:"10,595",forks:"3,093",starup:"13"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"919",forks:"230",starup:"122"},{title:`youshandefeiyang /

      sub-web-modify`,owner:"youshandefeiyang",name:"sub-web-modify",avatar:"https://avatars.githubusercontent.com/u/63959400?s=40&v=4",path:"/youshandefeiyang/sub-web-modify",link:"https://github.com/youshandefeiyang/sub-web-modify",description:"Subconverter订阅转换前端增强版，增加近百条远程配置及更多自定义功能！",language:"Vue",stars:"1,495",forks:"345",starup:"27"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,762",forks:"1,770",starup:"31"},{title:`opentiny /

      tiny-engine`,owner:"opentiny",name:"tiny-engine",avatar:"https://avatars.githubusercontent.com/u/26962197?s=40&v=4",path:"/opentiny/tiny-engine",link:"https://github.com/opentiny/tiny-engine",description:"TinyEngine is a low-code engine based on which you can build or develop low-code platforms in different domains/TinyEngine是一个低代码引擎，基于这个引擎可以构建或者开发出不同领域的低代码平台",language:"Vue",stars:"1,647",forks:"243",starup:"55"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,896",forks:"1,982",starup:"5,728"},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,993",forks:"1,945",starup:"4,172"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,349",forks:"1,039",starup:"626"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,775",forks:"320",starup:"710"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,169",forks:"840",starup:"499"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,632",forks:"220",starup:"149"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,805",forks:"1,220",starup:"443"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,213",forks:"180",starup:"343"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"122",forks:"1,288",starup:"9"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,381",forks:"217",starup:"396"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"919",forks:"230",starup:"217"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"275",forks:"40",starup:"113"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"176",forks:"63",starup:"42"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,786",forks:"760",starup:"184"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,207",forks:"491",starup:"123"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,530",forks:"1,436",starup:"175"},{title:`wudengyao /

      admin_vue3_vite`,owner:"wudengyao",name:"admin_vue3_vite",avatar:"https://avatars.githubusercontent.com/u/9073383?s=40&v=4",path:"/wudengyao/admin_vue3_vite",link:"https://github.com/wudengyao/admin_vue3_vite",description:"项目技术栈：Vue3 + JavaScript + Vite4",language:"Vue",stars:"320",forks:"86",starup:"70"},{title:`Zhouqluo /

      bilidown-web`,owner:"Zhouqluo",name:"bilidown-web",avatar:"https://avatars.githubusercontent.com/u/86307617?s=40&v=4",path:"/Zhouqluo/bilidown-web",link:"https://github.com/Zhouqluo/bilidown-web",description:"在线下载b站视频",language:"Vue",stars:"262",forks:"46",starup:"120"},{title:`yudaocode /

      yudao-mall-uniapp`,owner:"yudaocode",name:"yudao-mall-uniapp",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-mall-uniapp",link:"https://github.com/yudaocode/yudao-mall-uniapp",description:"芋道商城，基于 Vue2 + Uniapp 实现，支持分销、拼团、砍价、秒杀、优惠券、积分、会员等级、小程序直播、页面 DIY 等功能，100% 开源",language:"Vue",stars:"236",forks:"123",starup:"38"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,817",forks:"4,127",starup:"36"},{title:`justboil /

      admin-one-vue-tailwind`,owner:"justboil",name:"admin-one-vue-tailwind",avatar:"https://avatars.githubusercontent.com/u/1877513?s=40&v=4",path:"/justboil/admin-one-vue-tailwind",link:"https://github.com/justboil/admin-one-vue-tailwind",description:"Free Vue.js 3.x Tailwind 3.x admin dashboard template with dark mode. Vite builds. Pinia state. Laravel integration available",language:"Vue",stars:"2,013",forks:"371",starup:"46"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,690",forks:"2,590",starup:"232"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,586",forks:"99",starup:"225"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"784",forks:"68",starup:"139"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,142",forks:"730",starup:"217"}]},st={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),yt=P({__name:"index",setup(A){const p=j("daily"),e=j("JavaScript"),h=j([]),t=j("list");function k(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}J([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=q();return(g,n)=>{const r=L,d=B,v=D,y=E,i=$("LazyImage"),a=N,o=H,T=O,x=at,F=et;return l(),S("div",null,[c(y,null,{default:w(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>C(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>C(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>C(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(Y,{name:"fade-top",mode:"out-in"},{default:w(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Q,null,X(u(h),(m,I)=>(l(),V(T,{key:I,index:I,repo:m,onMouseenter:u(f)},{avatar:w(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:w(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:w(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(x,{key:1,data:u(h)},null,8,["data"])):(l(),V(F,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{yt as default};
