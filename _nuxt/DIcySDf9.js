import{_ as F}from"./CPxKUbyy.js";import{_ as B}from"./CRXxyyJO.js";import{_ as N}from"./2VNEWedd.js";import q from"./CAtowYkL.js";import{_ as D,a as O}from"./DZIJKMlp.js";import{_ as G}from"./B6e_RcYc.js";import{s as U,u as z,a as M,b as L,i as Y,c as K}from"./CG_R80NU.js";import{d as R,s}from"./CYcXzR8Z.js";import{n as P,q as W,h as I,o as l,c as S,s as E,r as x,u as $,b as c,w as y,T as H,v as u,x as C,F as Q,y as X,z as V,a as Z}from"./DyRasTm2.js";import{l as tt}from"./p2-M2djV.js";import"./BJlaRlYt.js";import"./DSm8SFNh.js";import"./BQkc-AXV.js";import"./K9ySqCJp.js";const at=P({__name:"Chart",props:{data:{}},setup(A){const p=A,{data:e}=W(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=z("仓库飙升榜",h);function k(n){const r=R(n);r.sort((a,o)=>{const T=s(a.starup)+s(a.stars)+s(a.forks),j=s(o.starup)+s(o.stars)+s(o.forks);return T-j});const[v,d,w,i]=r.reduce((a,o)=>(a[0].push(s(o.stars)),a[1].push(s(o.forks)),a[2].push(s(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=v,t.value.series[1].data=d,t.value.series[2].data=w}const{domRef:f}=M(t,L);I(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:E({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(A){const p=A,{data:e}=W(p),t=z("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=M(t,L);function f(n){const r=R(n);r.sort((i,a)=>s(i.starup)-s(a.starup));const v=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],d=[],w=r.map((i,a)=>(d.push(`${i.owner}/${i.name}`),{value:s(i.starup),name:`${i.owner}/${i.name}`,itemStyle:Y(v[a%v.length])}));t.value.series[0].data=w,t.value.yAxis.data=d}I(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:E({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,674",forks:"647",starup:"29"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,166",forks:"292",starup:"100"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,750",forks:"3,349",starup:"128"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,192",forks:"937",starup:"73"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,399",forks:"29,635",starup:"61"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,206",forks:"943",starup:"27"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,013",forks:"2,839",starup:"164"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,304",forks:"35,123",starup:"18"},{title:`bradtraversy /

      vanillawebprojects`,owner:"bradtraversy",name:"vanillawebprojects",avatar:"https://avatars.githubusercontent.com/u/5550850?s=40&v=4",path:"/bradtraversy/vanillawebprojects",link:"https://github.com/bradtraversy/vanillawebprojects",description:"Mini projects built with HTML5, CSS & JavaScript. No frameworks or libraries",language:"JavaScript",stars:"15,423",forks:"4,344",starup:"10"},{title:`0xsongsu /

      dailytask`,owner:"0xsongsu",name:"dailytask",avatar:"https://avatars.githubusercontent.com/u/66813860?s=40&v=4",path:"/0xsongsu/dailytask",link:"https://github.com/0xsongsu/dailytask",description:"每日签到任务",language:"JavaScript",stars:"603",forks:"340",starup:"22"},{title:`schlagmichdoch /

      PairDrop`,owner:"schlagmichdoch",name:"PairDrop",avatar:"https://avatars.githubusercontent.com/u/52242352?s=40&v=4",path:"/schlagmichdoch/PairDrop",link:"https://github.com/schlagmichdoch/PairDrop",description:"PairDrop: Local file sharing in your browser. Inspired by Apple's AirDrop. Fork of Snapdrop.",language:"JavaScript",stars:"3,298",forks:"179",starup:"99"},{title:`npm /

      cli`,owner:"npm",name:"cli",avatar:"https://avatars.githubusercontent.com/u/9287?s=40&v=4",path:"/npm/cli",link:"https://github.com/npm/cli",description:"the package manager for JavaScript",language:"JavaScript",stars:"8,061",forks:"2,899",starup:"6"},{title:`FortAwesome /

      Font-Awesome`,owner:"FortAwesome",name:"Font-Awesome",avatar:"https://avatars.githubusercontent.com/u/132895?s=40&v=4",path:"/FortAwesome/Font-Awesome",link:"https://github.com/FortAwesome/Font-Awesome",description:"The iconic SVG, font, and CSS toolkit",language:"JavaScript",stars:"73,103",forks:"12,175",starup:"8"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"78,786",forks:"1,814",starup:"51"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,134",forks:"45,463",starup:"113"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,701",forks:"965",starup:"8"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"518",forks:"88",starup:"7"},{title:`sudheerj /

      javascript-interview-questions`,owner:"sudheerj",name:"javascript-interview-questions",avatar:"https://avatars.githubusercontent.com/u/3127317?s=40&v=4",path:"/sudheerj/javascript-interview-questions",link:"https://github.com/sudheerj/javascript-interview-questions",description:"List of 1000 JavaScript Interview Questions",language:"JavaScript",stars:"22,101",forks:"6,321",starup:"10"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,808",forks:"1,778",starup:"5"},{title:`UseInterstellar /

      Interstellar`,owner:"UseInterstellar",name:"Interstellar",avatar:"https://avatars.githubusercontent.com/u/85169821?s=40&v=4",path:"/UseInterstellar/Interstellar",link:"https://github.com/UseInterstellar/Interstellar",description:"One of the most popular modern web proxies with blazing fast speeds and a variety of games.",language:"JavaScript",stars:"734",forks:"8,622",starup:"3"},{title:`ascoders /

      weekly`,owner:"ascoders",name:"weekly",avatar:"https://avatars.githubusercontent.com/u/7970947?s=40&v=4",path:"/ascoders/weekly",link:"https://github.com/ascoders/weekly",description:"前端精读周刊。帮你理解最前沿、实用的技术。",language:"JavaScript",stars:"27,784",forks:"3,176",starup:"12"},{title:`responsively-org /

      responsively-app`,owner:"responsively-org",name:"responsively-app",avatar:"https://avatars.githubusercontent.com/u/1283424?s=40&v=4",path:"/responsively-org/responsively-app",link:"https://github.com/responsively-org/responsively-app",description:"A modified web browser that helps in responsive web development. A web developer's must have dev-tool.",language:"JavaScript",stars:"21,819",forks:"1,082",starup:"20"},{title:`jonasschmedtmann /

      complete-node-bootcamp`,owner:"jonasschmedtmann",name:"complete-node-bootcamp",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/complete-node-bootcamp",link:"https://github.com/jonasschmedtmann/complete-node-bootcamp",description:"Starter files, final projects and FAQ for my Complete Node.js Bootcamp",language:"JavaScript",stars:"2,912",forks:"3,459",starup:"2"},{title:`john-smilga /

      react-course-v3`,owner:"john-smilga",name:"react-course-v3",avatar:"https://avatars.githubusercontent.com/u/42133389?s=40&v=4",path:"/john-smilga/react-course-v3",link:"https://github.com/john-smilga/react-course-v3",description:"",language:"JavaScript",stars:"1,413",forks:"811",starup:"2"},{title:`jayofelony /

      pwnagotchi`,owner:"jayofelony",name:"pwnagotchi",avatar:"https://avatars.githubusercontent.com/u/50277312?s=40&v=4",path:"/jayofelony/pwnagotchi",link:"https://github.com/jayofelony/pwnagotchi",description:"(⌐■_■) - Deep Reinforcement Learning instrumenting bettercap for WiFi pwning.",language:"JavaScript",stars:"497",forks:"63",starup:"6"}],"JavaScript-weekly":[{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,360",forks:"1,487",starup:"1,253"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,984",forks:"211",starup:"785"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,156",forks:"2,544",starup:"264"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,166",forks:"292",starup:"306"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,134",forks:"45,463",starup:"686"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3607463?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,056",forks:"1,103",starup:"216"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,206",forks:"943",starup:"400"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,314",forks:"25,962",starup:"290"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,548",forks:"3,380",starup:"343"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,595",forks:"946",starup:"152"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,375",forks:"1,108",starup:"46"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"191",forks:"293",starup:"35"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,220",forks:"1,748",starup:"159"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,518",forks:"9,734",starup:"102"},{title:`Dooy /

      chatgpt-web-midjourney-proxy`,owner:"Dooy",name:"chatgpt-web-midjourney-proxy",avatar:"https://avatars.githubusercontent.com/u/3765401?s=40&v=4",path:"/Dooy/chatgpt-web-midjourney-proxy",link:"https://github.com/Dooy/chatgpt-web-midjourney-proxy",description:"chatgpt web, midjourney, gpts,tts, whisper,suno-v3 一套ui全搞定；同时支持 Web / PWA / Linux / Win / MacOS 平台",language:"JavaScript",stars:"3,533",forks:"917",starup:"120"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,192",forks:"937",starup:"177"},{title:`openlayers /

      openlayers`,owner:"openlayers",name:"openlayers",avatar:"https://avatars.githubusercontent.com/u/211514?s=40&v=4",path:"/openlayers/openlayers",link:"https://github.com/openlayers/openlayers",description:"OpenLayers",language:"JavaScript",stars:"10,958",forks:"2,981",starup:"38"},{title:`yonggekkk /

      Cloudflare_vless_trojan`,owner:"yonggekkk",name:"Cloudflare_vless_trojan",avatar:"https://avatars.githubusercontent.com/u/121604513?s=40&v=4",path:"/yonggekkk/Cloudflare_vless_trojan",link:"https://github.com/yonggekkk/Cloudflare_vless_trojan",description:"Cloudflare代理脚本，支持workers与pages两种形式部署，实现Vless与Trojan两种协议。CF优选域名、优选官方IP反代IP多平台一键脚本",language:"JavaScript",stars:"2,711",forks:"1,793",starup:"171"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,674",forks:"647",starup:"73"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,546",forks:"5,861",starup:"217"},{title:`huanghanzhilian /

      c-shopping`,owner:"huanghanzhilian",name:"c-shopping",avatar:"https://avatars.githubusercontent.com/u/22462288?s=40&v=4",path:"/huanghanzhilian/c-shopping",link:"https://github.com/huanghanzhilian/c-shopping",description:"A beautiful shopping platform developed with Next.js, tailored for various devices including Desktop, Tablet, and Phone. 基于Nextjs开发同时适配Desktop、Tablet、Phone多种设备的精美购物平台",language:"JavaScript",stars:"1,631",forks:"213",starup:"119"},{title:`CesiumGS /

      cesium`,owner:"CesiumGS",name:"cesium",avatar:"https://avatars.githubusercontent.com/u/1494815?s=40&v=4",path:"/CesiumGS/cesium",link:"https://github.com/CesiumGS/cesium",description:"An open-source JavaScript library for world-class 3D globes and maps 🌎",language:"JavaScript",stars:"12,122",forks:"3,348",starup:"193"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,750",forks:"3,349",starup:"179"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"8,927",forks:"379",starup:"111"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,304",forks:"35,123",starup:"170"}],"JavaScript-monthly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"10,973",forks:"709",starup:"5,515"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,013",forks:"2,839",starup:"2,733"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,701",forks:"965",starup:"364"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"1,984",forks:"211",starup:"982"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,360",forks:"1,487",starup:"3,226"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,134",forks:"45,463",starup:"1,995"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,314",forks:"25,962",starup:"1,230"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,595",forks:"946",starup:"392"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,424",forks:"1,814",starup:"389"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,546",forks:"5,861",starup:"850"},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",link:"https://github.com/anuraghazra/github-readme-stats",description:"⚡ Dynamically generated stats for your github readmes",language:"JavaScript",stars:"65,320",forks:"20,999",starup:"905"},{title:`alyssaxuu /

      screenity`,owner:"alyssaxuu",name:"screenity",avatar:"https://avatars.githubusercontent.com/u/7581348?s=40&v=4",path:"/alyssaxuu/screenity",link:"https://github.com/alyssaxuu/screenity",description:"The free and privacy-friendly screen recorder with no limits 🎥",language:"JavaScript",stars:"10,795",forks:"823",starup:"615"},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",link:"https://github.com/pedroslopez/whatsapp-web.js",description:"A WhatsApp client library for NodeJS that connects through the WhatsApp Web browser app",language:"JavaScript",stars:"13,820",forks:"3,316",starup:"376"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,490",forks:"4,515",starup:"1,670"},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",link:"https://github.com/chinese-poetry/chinese-poetry",description:"The most comprehensive database of Chinese poetry 🧶最全中华古诗词数据库, 唐宋两朝近一万四千古诗人, 接近5.5万首唐诗加26万宋诗. 两宋时期1564位词人，21050首词。",language:"JavaScript",stars:"47,017",forks:"9,438",starup:"465"},{title:`UseInterstellar /

      Interstellar`,owner:"UseInterstellar",name:"Interstellar",avatar:"https://avatars.githubusercontent.com/u/85169821?s=40&v=4",path:"/UseInterstellar/Interstellar",link:"https://github.com/UseInterstellar/Interstellar",description:"One of the most popular modern web proxies with blazing fast speeds and a variety of games.",language:"JavaScript",stars:"734",forks:"8,622",starup:"130"},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",link:"https://github.com/qist/tvbox",description:"FongMi影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"1,299",forks:"480",starup:"206"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,868",forks:"12,301",starup:"146"},{title:`spicetify /

      spicetify-cli`,owner:"spicetify",name:"spicetify-cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/spicetify-cli",link:"https://github.com/spicetify/spicetify-cli",description:"Command-line tool to customize Spotify client. Supports Windows, MacOS, and Linux.",language:"JavaScript",stars:"17,048",forks:"698",starup:"508"},{title:`quasarframework /

      quasar`,owner:"quasarframework",name:"quasar",avatar:"https://avatars.githubusercontent.com/u/4665641?s=40&v=4",path:"/quasarframework/quasar",link:"https://github.com/quasarframework/quasar",description:"Quasar Framework - Build high-performance VueJS user interfaces in record time",language:"JavaScript",stars:"25,311",forks:"3,427",starup:"187"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,004",forks:"2,503",starup:"269"},{title:`chartjs /

      Chart.js`,owner:"chartjs",name:"Chart.js",avatar:"https://avatars.githubusercontent.com/u/6757853?s=40&v=4",path:"/chartjs/Chart.js",link:"https://github.com/chartjs/Chart.js",description:"Simple HTML5 Charts using the <canvas> tag",language:"JavaScript",stars:"63,608",forks:"11,868",starup:"313"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,375",forks:"1,108",starup:"187"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"518",forks:"88",starup:"336"},{title:`soumyajit4419 /

      Portfolio`,owner:"soumyajit4419",name:"Portfolio",avatar:"https://avatars.githubusercontent.com/u/46092576?s=40&v=4",path:"/soumyajit4419/Portfolio",link:"https://github.com/soumyajit4419/Portfolio",description:"My self coded personal website build with React.js",language:"JavaScript",stars:"3,731",forks:"2,055",starup:"168"}],"TypeScript-daily":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,584",forks:"982",starup:"267"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"405",forks:"57",starup:"86"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown",language:"TypeScript",stars:"3,148",forks:"265",starup:"133"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,178",forks:"7,301",starup:"87"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,179",forks:"112",starup:"79"},{title:`remix-run /

      remix`,owner:"remix-run",name:"remix",avatar:"https://avatars.githubusercontent.com/u/1609022?s=40&v=4",path:"/remix-run/remix",link:"https://github.com/remix-run/remix",description:"Build Better Websites. Create modern, resilient user experiences with web fundamentals.",language:"TypeScript",stars:"28,017",forks:"2,359",starup:"147"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"1,981",forks:"868",starup:"60"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,347",forks:"167",starup:"311"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,037",forks:"2,249",starup:"599"},{title:`outline /

      outline`,owner:"outline",name:"outline",avatar:"https://avatars.githubusercontent.com/u/380914?s=40&v=4",path:"/outline/outline",link:"https://github.com/outline/outline",description:"The fastest knowledge base for growing teams. Beautiful, realtime collaborative, feature packed, and markdown compatible.",language:"TypeScript",stars:"25,050",forks:"2,017",starup:"51"},{title:`nkzw-tech /

      athena-crisis`,owner:"nkzw-tech",name:"athena-crisis",avatar:"https://avatars.githubusercontent.com/u/13352?s=40&v=4",path:"/nkzw-tech/athena-crisis",link:"https://github.com/nkzw-tech/athena-crisis",description:"Athena Crisis is a modern-retro turn-based tactical strategy game. Athena Crisis is open core technology.",language:"TypeScript",stars:"683",forks:"40",starup:"47"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"40,615",forks:"4,369",starup:"141"},{title:`withastro /

      astro`,owner:"withastro",name:"astro",avatar:"https://avatars.githubusercontent.com/u/361671?s=40&v=4",path:"/withastro/astro",link:"https://github.com/withastro/astro",description:"The web framework for content-driven websites. ⭐️ Star to support our work!",language:"TypeScript",stars:"42,889",forks:"2,235",starup:"22"},{title:`remix-run /

      react-router`,owner:"remix-run",name:"react-router",avatar:"https://avatars.githubusercontent.com/u/92839?s=40&v=4",path:"/remix-run/react-router",link:"https://github.com/remix-run/react-router",description:"Declarative routing for React",language:"TypeScript",stars:"52,072",forks:"10,148",starup:"52"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,241",forks:"3,427",starup:"151"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"780",forks:"53",starup:"26"},{title:`GrapesJS /

      grapesjs`,owner:"GrapesJS",name:"grapesjs",avatar:"https://avatars.githubusercontent.com/u/11614725?s=40&v=4",path:"/GrapesJS/grapesjs",link:"https://github.com/GrapesJS/grapesjs",description:"Free and Open source Web Builder Framework. Next generation tool for building templates without coding",language:"TypeScript",stars:"20,217",forks:"3,819",starup:"16"},{title:`jitsi /

      jitsi-meet`,owner:"jitsi",name:"jitsi-meet",avatar:"https://avatars.githubusercontent.com/u/317464?s=40&v=4",path:"/jitsi/jitsi-meet",link:"https://github.com/jitsi/jitsi-meet",description:"Jitsi Meet - Secure, Simple and Scalable Video Conferences that you use as a standalone app or embed in your web application.",language:"TypeScript",stars:"21,813",forks:"6,524",starup:"7"},{title:`developersdigest /

      llm-answer-engine`,owner:"developersdigest",name:"llm-answer-engine",avatar:"https://avatars.githubusercontent.com/u/124798203?s=40&v=4",path:"/developersdigest/llm-answer-engine",link:"https://github.com/developersdigest/llm-answer-engine",description:"Build a Perplexity-Inspired Answer Engine Using Next.js, Groq, Mixtral, Langchain, OpenAI, Brave & Serper",language:"TypeScript",stars:"3,994",forks:"633",starup:"20"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,744",forks:"351",starup:"10"},{title:`nhn /

      tui.calendar`,owner:"nhn",name:"tui.calendar",avatar:"https://avatars.githubusercontent.com/u/12269564?s=40&v=4",path:"/nhn/tui.calendar",link:"https://github.com/nhn/tui.calendar",description:"🍞📅A JavaScript calendar that has everything you need.",language:"TypeScript",stars:"11,508",forks:"1,250",starup:"6"},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",link:"https://github.com/mui/material-ui",description:"Material UI: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.",language:"TypeScript",stars:"91,862",forks:"31,568",starup:"17"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,096",forks:"1,364",starup:"16"},{title:`sqlchat /

      sqlchat`,owner:"sqlchat",name:"sqlchat",avatar:"https://avatars.githubusercontent.com/u/24653555?s=40&v=4",path:"/sqlchat/sqlchat",link:"https://github.com/sqlchat/sqlchat",description:"Chat-based SQL Client and Editor for the next decade",language:"TypeScript",stars:"3,845",forks:"338",starup:"12"},{title:`nextauthjs /

      next-auth`,owner:"nextauthjs",name:"next-auth",avatar:"https://avatars.githubusercontent.com/u/18369201?s=40&v=4",path:"/nextauthjs/next-auth",link:"https://github.com/nextauthjs/next-auth",description:"Authentication for the Web.",language:"TypeScript",stars:"22,507",forks:"2,983",starup:"12"}],"TypeScript-weekly":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,037",forks:"2,249",starup:"705"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"7,854",forks:"1,066",starup:"3,319"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,023",forks:"56,150",starup:"1,001"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"2,998",forks:"121",starup:"1,209"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,558",forks:"1,316",starup:"248"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,760",forks:"2,172",starup:"1,554"},{title:`invoke-ai /

      InvokeAI`,owner:"invoke-ai",name:"InvokeAI",avatar:"https://avatars.githubusercontent.com/u/4822129?s=40&v=4",path:"/invoke-ai/InvokeAI",link:"https://github.com/invoke-ai/InvokeAI",description:"InvokeAI is a leading creative engine for Stable Diffusion models, empowering professionals, artists, and enthusiasts to generate and create visual media using the latest AI-driven technologies. The solution offers an industry leading WebUI, supports terminal use through a CLI, and serves as the foundation for multiple commercial products.",language:"TypeScript",stars:"21,859",forks:"2,270",starup:"442"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,584",forks:"982",starup:"2,685"},{title:`SOS-RS /

      backend`,owner:"SOS-RS",name:"backend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/backend",link:"https://github.com/SOS-RS/backend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"641",forks:"270",starup:"552"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,347",forks:"167",starup:"525"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"1,981",forks:"868",starup:"476"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,471",forks:"12,708",starup:"435"},{title:`tegonhq /

      tegon`,owner:"tegonhq",name:"tegon",avatar:"https://avatars.githubusercontent.com/u/17528887?s=40&v=4",path:"/tegonhq/tegon",link:"https://github.com/tegonhq/tegon",description:"Tegon is an open-source, AI-first alternative to Jira, Linear",language:"TypeScript",stars:"719",forks:"23",starup:"190"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"71",forks:"27",starup:"29"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,096",forks:"1,364",starup:"144"},{title:`mckaywrigley /

      chatbot-ui`,owner:"mckaywrigley",name:"chatbot-ui",avatar:"https://avatars.githubusercontent.com/u/29221284?s=40&v=4",path:"/mckaywrigley/chatbot-ui",link:"https://github.com/mckaywrigley/chatbot-ui",description:"AI chat for every model.",language:"TypeScript",stars:"26,619",forks:"7,338",starup:"183"},{title:`ant-design /

      ant-design`,owner:"ant-design",name:"ant-design",avatar:"https://avatars.githubusercontent.com/u/507615?s=40&v=4",path:"/ant-design/ant-design",link:"https://github.com/ant-design/ant-design",description:"An enterprise-class UI design language and React UI library",language:"TypeScript",stars:"90,438",forks:"46,439",starup:"109"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,359",forks:"346",starup:"106"},{title:`joschan21 /

      casecobra`,owner:"joschan21",name:"casecobra",avatar:"https://avatars.githubusercontent.com/u/101584158?s=40&v=4",path:"/joschan21/casecobra",link:"https://github.com/joschan21/casecobra",description:"A Modern E-Commerce-Store for Custom Phone Cases",language:"TypeScript",stars:"322",forks:"113",starup:"69"},{title:`getsentry /

      sentry-javascript`,owner:"getsentry",name:"sentry-javascript",avatar:"https://avatars.githubusercontent.com/u/2411343?s=40&v=4",path:"/getsentry/sentry-javascript",link:"https://github.com/getsentry/sentry-javascript",description:"Official Sentry SDKs for JavaScript",language:"TypeScript",stars:"7,677",forks:"1,492",starup:"32"},{title:`withastro /

      starlight`,owner:"withastro",name:"starlight",avatar:"https://avatars.githubusercontent.com/u/357379?s=40&v=4",path:"/withastro/starlight",link:"https://github.com/withastro/starlight",description:"🌟 Build beautiful, accessible, high-performance documentation websites with Astro",language:"TypeScript",stars:"3,784",forks:"413",starup:"122"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,282",forks:"3,348",starup:"203"},{title:`SOS-RS /

      frontend`,owner:"SOS-RS",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/frontend",link:"https://github.com/SOS-RS/frontend",description:"",language:"TypeScript",stars:"534",forks:"303",starup:"418"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,196",forks:"6,883",starup:"80"},{title:`weaigc /

      bingo`,owner:"weaigc",name:"bingo",avatar:"https://avatars.githubusercontent.com/u/39235693?s=40&v=4",path:"/weaigc/bingo",link:"https://github.com/weaigc/bingo",description:"Bingo，一个让你呼吸顺畅 New Bing。",language:"TypeScript",stars:"2,566",forks:"1,040",starup:"216"}],"TypeScript-monthly":[{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"29,823",forks:"3,874",starup:"7,711"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,465",forks:"1,297",starup:"4,356"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"1,981",forks:"868",starup:"1,341"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"4,971",forks:"906",starup:"1,411"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,236",forks:"1,597",starup:"3,173"},{title:`jina-ai /

      reader`,owner:"jina-ai",name:"reader",avatar:"https://avatars.githubusercontent.com/u/565869?s=40&v=4",path:"/jina-ai/reader",link:"https://github.com/jina-ai/reader",description:"Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/",language:"TypeScript",stars:"4,391",forks:"319",starup:"2,112"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,760",forks:"2,172",starup:"3,623"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,744",forks:"351",starup:"878"},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",link:"https://github.com/danny-avila/LibreChat",description:"Enhanced ChatGPT Clone: Features OpenAI, Assistants API, Azure, Groq, GPT-4 Vision, Mistral, Bing, Anthropic, OpenRouter, Vertex AI, Gemini, AI model switching, message search, langchain, DALL-E-3, ChatGPT Plugins, OpenAI Functions, Secure Multi-User System, Presets, completely open-source for self-hosting. More features in development",language:"TypeScript",stars:"11,773",forks:"2,099",starup:"1,500"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,584",forks:"982",starup:"2,795"},{title:`sadmann7 /

      shadcn-table`,owner:"sadmann7",name:"shadcn-table",avatar:"https://avatars.githubusercontent.com/u/68962712?s=40&v=4",path:"/sadmann7/shadcn-table",link:"https://github.com/sadmann7/shadcn-table",description:"A shadcn table component with server-side sorting, filtering, and pagination.",language:"TypeScript",stars:"1,781",forks:"154",starup:"1,098"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,523",forks:"500",starup:"834"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,074",forks:"352",starup:"1,952"},{title:`Vencord /

      Vesktop`,owner:"Vencord",name:"Vesktop",avatar:"https://avatars.githubusercontent.com/u/45497981?s=40&v=4",path:"/Vencord/Vesktop",link:"https://github.com/Vencord/Vesktop",description:"Vesktop is a custom Discord App aiming to give you better performance and improve linux support",language:"TypeScript",stars:"2,225",forks:"118",starup:"458"},{title:`element-plus /

      element-plus`,owner:"element-plus",name:"element-plus",avatar:"https://avatars.githubusercontent.com/u/15975785?s=40&v=4",path:"/element-plus/element-plus",link:"https://github.com/element-plus/element-plus",description:"🎉 A Vue.js 3 UI Library made by Element team",language:"TypeScript",stars:"23,338",forks:"14,233",starup:"329"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,382",forks:"14,039",starup:"1,954"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,009",forks:"2,005",starup:"449"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,184",forks:"35,734",starup:"3,373"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,311",forks:"13,010",starup:"1,722"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"5,955",forks:"642",starup:"1,568"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,289",forks:"196",starup:"608"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,443",forks:"176",starup:"1,166"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"9,822",forks:"595",starup:"854"},{title:`measuredco /

      puck`,owner:"measuredco",name:"puck",avatar:"https://avatars.githubusercontent.com/u/985961?s=40&v=4",path:"/measuredco/puck",link:"https://github.com/measuredco/puck",description:"The visual editor for React",language:"TypeScript",stars:"4,570",forks:"219",starup:"425"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,148",forks:"1,374",starup:"400"}],"Vue-daily":[{title:`jason5ng32 /

      MyIP`,owner:"jason5ng32",name:"MyIP",avatar:"https://avatars.githubusercontent.com/u/1546290?s=40&v=4",path:"/jason5ng32/MyIP",link:"https://github.com/jason5ng32/MyIP",description:"The best IP Toolbox. Easy to check what's your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability, whois search and more! || 🇨🇳 可能是最好用的IP工具箱。轻松检查你的 IP，IP 地理位置，检查DNS泄漏，检查 WebRTC 连接，速度测试，ping 测试，MTR测试，检查网站可用性，查询 Whois 信息等等。",language:"Vue",stars:"4,947",forks:"579",starup:"18"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,371",forks:"2,755",starup:"19"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,145",forks:"728",starup:"8"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"115",forks:"1,185",starup:"0"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,629",forks:"2,583",starup:"15"},{title:`taozhi1010 /

      nest-admin`,owner:"taozhi1010",name:"nest-admin",avatar:"https://avatars.githubusercontent.com/u/38208435?s=40&v=4",path:"/taozhi1010/nest-admin",link:"https://github.com/taozhi1010/nest-admin",description:"nest全栈快速开发平台",language:"Vue",stars:"253",forks:"51",starup:"2"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,516",forks:"1,356",starup:"3"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,263",forks:"4,021",starup:"10"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,112",forks:"875",starup:"1"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,164",forks:"653",starup:"3"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,112",forks:"171",starup:"11"},{title:`Moonofweisheng /

      wot-design-uni`,owner:"Moonofweisheng",name:"wot-design-uni",avatar:"https://avatars.githubusercontent.com/u/26426873?s=40&v=4",path:"/Moonofweisheng/wot-design-uni",link:"https://github.com/Moonofweisheng/wot-design-uni",description:"一个基于Vue3+TS开发的uni-app组件库，提供60+高质量组件，支持暗黑模式、国际化和自定义主题。",language:"Vue",stars:"448",forks:"69",starup:"2"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,623",forks:"632",starup:"5"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,195",forks:"3,603",starup:"6"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,695",forks:"143",starup:"8"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"427",forks:"76",starup:"0"},{title:`JakHuang /

      form-generator`,owner:"JakHuang",name:"form-generator",avatar:"https://avatars.githubusercontent.com/u/14212588?s=40&v=4",path:"/JakHuang/form-generator",link:"https://github.com/JakHuang/form-generator",description:"✨Element UI表单设计及代码生成器",language:"Vue",stars:"8,820",forks:"2,146",starup:"2"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,598",forks:"30,328",starup:"10"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,812",forks:"247",starup:"7"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,977",forks:"14,620",starup:"1"},{title:`arco-design /

      arco-design-pro-vue`,owner:"arco-design",name:"arco-design-pro-vue",avatar:"https://avatars.githubusercontent.com/u/15161021?s=40&v=4",path:"/arco-design/arco-design-pro-vue",link:"https://github.com/arco-design/arco-design-pro-vue",description:"An out-of-the-box solution to quickly build enterprise-level applications based on Arco Design.",language:"Vue",stars:"1,179",forks:"256",starup:"0"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,088",forks:"643",starup:"2"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,387",forks:"1,399",starup:"4"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,567",forks:"210",starup:"35"},{title:`bufferhead-code /

      onthisday`,owner:"bufferhead-code",name:"onthisday",avatar:"https://avatars.githubusercontent.com/u/6266887?s=40&v=4",path:"/bufferhead-code/onthisday",link:"https://github.com/bufferhead-code/onthisday",description:"History Weather Data for the current day powered by SQLite",language:"Vue",stars:"32",forks:"4",starup:"9"}],"Vue-weekly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,015",forks:"1,850",starup:"3,648"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,207",forks:"1,025",starup:"279"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,201",forks:"198",starup:"157"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,097",forks:"551",starup:"195"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,812",forks:"247",starup:"51"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,598",forks:"30,328",starup:"103"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,601",forks:"11,163",starup:"110"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,681",forks:"398",starup:"37"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,623",forks:"632",starup:"56"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,145",forks:"728",starup:"61"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"115",forks:"1,185",starup:"0"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,750",forks:"760",starup:"93"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,112",forks:"171",starup:"85"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,272",forks:"695",starup:"56"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"262",forks:"39",starup:"35"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,899",forks:"1,585",starup:"41"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,977",forks:"14,620",starup:"21"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,184",forks:"1,661",starup:"26"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,164",forks:"653",starup:"15"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"186",forks:"28",starup:"59"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,371",forks:"2,755",starup:"103"},{title:`umicro /

      uView2.0`,owner:"umicro",name:"uView2.0",avatar:"https://avatars.githubusercontent.com/u/40595755?s=40&v=4",path:"/umicro/uView2.0",link:"https://github.com/umicro/uView2.0",description:"uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",language:"Vue",stars:"1,444",forks:"437",starup:"15"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,347",forks:"554",starup:"25"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,677",forks:"3,707",starup:"27"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,695",forks:"143",starup:"47"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,751",forks:"1,887",starup:"4,852"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,015",forks:"1,850",starup:"5,721"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,683",forks:"1,212",starup:"584"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,207",forks:"1,025",starup:"644"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,093",forks:"96",starup:"800"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,594",forks:"313",starup:"639"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"427",forks:"76",starup:"170"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,677",forks:"3,707",starup:"157"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,750",forks:"760",starup:"171"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,455",forks:"1,393",starup:"156"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"115",forks:"1,185",starup:"3"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"262",forks:"39",starup:"112"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,201",forks:"198",starup:"239"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,810",forks:"4,102",starup:"38"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"760",forks:"67",starup:"165"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"764",forks:"175",starup:"101"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,513",forks:"94",starup:"213"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,894",forks:"492",starup:"158"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,684",forks:"283",starup:"254"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,163",forks:"474",starup:"129"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,145",forks:"728",starup:"267"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,899",forks:"1,585",starup:"173"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,443",forks:"1,046",starup:"109"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,112",forks:"171",starup:"318"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,629",forks:"2,583",starup:"249"}]},st={key:0,grid:"~ lg:cols-2 gap-2"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=P({__name:"index",setup(A){const p=x("daily"),e=x("JavaScript"),h=x([]),t=x("list");function k(g){return g.sort((n,r)=>s(r.starup)-s(n.starup))}I([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=K();return(g,n)=>{const r=F,v=B,d=N,w=q,i=$("LazyImage"),a=D,o=G,T=O,j=at,_=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>C(p)?p.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>C(e)?e.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>C(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(H,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",st,[rt,(l(!0),S(Q,null,X(u(h),(m,J)=>(l(),V(T,{key:J,index:J,repo:m,onMouseenter:u(f)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(j,{key:1,data:u(h)},null,8,["data"])):(l(),V(_,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
