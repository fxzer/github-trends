import{_ as W}from"./DWOxDpmZ.js";import{_ as D}from"./Bd1uconA.js";import{_ as L}from"./j0-kL2Yv.js";import B from"./DW0dPtLz.js";import{_ as I}from"./CPQmctCb.js";import{_ as N}from"./XKEH0Gqn.js";import{_ as O}from"./CC0j2dEW.js";import{s as q,u as J,a as z,b as C,i as H,c as E}from"./Ci0wB4c-.js";import{d as _,s}from"./CFFG5h1g.js";import{n as A,q as F,h as M,o as h,c as x,s as R,u as G,v as U,x as V,b as v,w as T,T as Y,y as c,z as j,A as f}from"./DEsirNAd.js";import"./C-G6ci2N.js";import"./p2-M2djV.js";import"./KiKY-llk.js";import"./BoX8Akku.js";import"./BJ_SAPxD.js";import"./Di_P2EvT.js";const K=A({__name:"Chart",setup(y){const n=F("data"),i=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),r=J("仓库飙升榜",i);function u(p){const a=_(p);a.sort((t,e)=>{const w=s(t.starup)+s(t.stars)+s(t.forks),S=s(e.starup)+s(e.stars)+s(e.forks);return w-S});const[o,g,d,k]=a.reduce((t,e)=>(t[0].push(s(e.stars)),t[1].push(s(e.forks)),t[2].push(s(e.starup)),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=k,r.value.series[0].data=o,r.value.series[1].data=g,r.value.series[2].data=d}const{domRef:m}=z(r,C);M(n,()=>{u(n.value)},{deep:!0,immediate:!0});const b=`${100+n.value.length*40}px`;return(p,a)=>(h(),x("div",{ref_key:"chartRef",ref:m,style:R({height:b})},null,4))}}),$=A({__name:"StarupChart",props:{data:{}},setup(y){const n=y,{data:i}=G(n),u=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:m}=z(u,C);function b(a){const o=_(a);o.sort((t,e)=>s(t.starup)-s(e.starup));const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],d=[],k=o.map((t,e)=>(d.push(`${t.owner}/${t.name}`),{value:s(t.starup),name:`${t.owner}/${t.name}`,itemStyle:H(g[e%g.length])}));u.value.series[0].data=k,u.value.yAxis.data=d}M(i,()=>{b(i.value)},{deep:!0,immediate:!0});const p=`${100+i.value.length*40}px`;return(a,o)=>(h(),x("div",{ref_key:"chartRef",ref:m,style:R({height:p})},null,4))}}),Q={"JavaScript-daily":[{title:`xenova /

      transformers.js`,owner:"xenova",name:"transformers.js",avatar:"https://avatars.githubusercontent.com/u/26504141?s=40&v=4",path:"/xenova/transformers.js",link:"https://github.com/xenova/transformers.js",description:"State-of-the-art Machine Learning for the web. Run 🤗 Transformers directly in your browser, with no need for a server!",language:"JavaScript",stars:"8,303",forks:"459",starup:"151"},{title:`TheRealJoelmatic /

      RemoveAdblockThing`,owner:"TheRealJoelmatic",name:"RemoveAdblockThing",avatar:"https://avatars.githubusercontent.com/u/78729990?s=40&v=4",path:"/TheRealJoelmatic/RemoveAdblockThing",link:"https://github.com/TheRealJoelmatic/RemoveAdblockThing",description:`The intrusive "Ad blocker are not allowed on YouTube" message is annoying. This open-source project aims to address this issue by providing a solution to bypass YouTube's ad blocker detection`,language:"JavaScript",stars:"5,703",forks:"307",starup:"39"},{title:`OpenZeppelin /

      openzeppelin-contracts`,owner:"OpenZeppelin",name:"openzeppelin-contracts",avatar:"https://avatars.githubusercontent.com/u/481465?s=40&v=4",path:"/OpenZeppelin/openzeppelin-contracts",link:"https://github.com/OpenZeppelin/openzeppelin-contracts",description:"OpenZeppelin Contracts is a library for secure smart contract development.",language:"JavaScript",stars:"24,340",forks:"11,653",starup:"8"},{title:`keshavgbpecdelhi /

      Web-Development`,owner:"keshavgbpecdelhi",name:"Web-Development",avatar:"https://avatars.githubusercontent.com/u/56075233?s=40&v=4",path:"/keshavgbpecdelhi/Web-Development",link:"https://github.com/keshavgbpecdelhi/Web-Development",description:"Here you will find different web development mini projects which are made up of HTML, CSS & little bit of JavaScript. Do you have any such small project which is not already in the List!? 😄",language:"JavaScript",stars:"1,050",forks:"351",starup:"10"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,632",forks:"1,854",starup:"22"},{title:`olifolkerd /

      tabulator`,owner:"olifolkerd",name:"tabulator",avatar:"https://avatars.githubusercontent.com/u/6840524?s=40&v=4",path:"/olifolkerd/tabulator",link:"https://github.com/olifolkerd/tabulator",description:"Interactive Tables and Data Grids for JavaScript",language:"JavaScript",stars:"6,349",forks:"785",starup:"10"},{title:`ryanmcdermott /

      clean-code-javascript`,owner:"ryanmcdermott",name:"clean-code-javascript",avatar:"https://avatars.githubusercontent.com/u/5114666?s=40&v=4",path:"/ryanmcdermott/clean-code-javascript",link:"https://github.com/ryanmcdermott/clean-code-javascript",description:"🛁 Clean Code concepts adapted for JavaScript",language:"JavaScript",stars:"90,312",forks:"12,115",starup:"16"},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",link:"https://github.com/jgraph/drawio",description:"draw.io is a JavaScript, client-side editor for general diagramming.",language:"JavaScript",stars:"39,206",forks:"7,361",starup:"11"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"938",forks:"3,634",starup:"17"},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",link:"https://github.com/handsontable/handsontable",description:"JavaScript data grid with a spreadsheet look & feel. Works with React, Angular, and Vue. Supported by the Handsontable team ⚡",language:"JavaScript",stars:"19,372",forks:"2,978",starup:"8"},{title:`canove /

      whaticket-community`,owner:"canove",name:"whaticket-community",avatar:"https://avatars.githubusercontent.com/u/24817866?s=40&v=4",path:"/canove/whaticket-community",link:"https://github.com/canove/whaticket-community",description:"A very simple Ticket System based on WhatsApp messages, that allow multi-users in same WhatsApp account.",language:"JavaScript",stars:"1,468",forks:"768",starup:"3"},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",link:"https://github.com/is-a-dev/register",description:"Grab your own sweet-looking '.is-a.dev' subdomain.",language:"JavaScript",stars:"2,820",forks:"7,051",starup:"6"},{title:`quasarframework /

      quasar`,owner:"quasarframework",name:"quasar",avatar:"https://avatars.githubusercontent.com/u/4665641?s=40&v=4",path:"/quasarframework/quasar",link:"https://github.com/quasarframework/quasar",description:"Quasar Framework - Build high-performance VueJS user interfaces in record time",language:"JavaScript",stars:"25,401",forks:"3,437",starup:"2"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"2,204",forks:"3,130",starup:"18"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,958",forks:"1,018",starup:"12"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,771",forks:"9,758",starup:"9"},{title:`jagenjo /

      litegraph.js`,owner:"jagenjo",name:"litegraph.js",avatar:"https://avatars.githubusercontent.com/u/393515?s=40&v=4",path:"/jagenjo/litegraph.js",link:"https://github.com/jagenjo/litegraph.js",description:"A graph node engine and editor written in Javascript similar to PD or UDK Blueprints, comes with its own editor in HTML5 Canvas2D. The engine can run client side or server side using Node. It allows to export graphs as JSONs to be included in applications independently.",language:"JavaScript",stars:"5,471",forks:"616",starup:"5"},{title:`rollup /

      rollup`,owner:"rollup",name:"rollup",avatar:"https://avatars.githubusercontent.com/u/12949268?s=40&v=4",path:"/rollup/rollup",link:"https://github.com/rollup/rollup",description:"Next-generation ES module bundler",language:"JavaScript",stars:"24,929",forks:"1,452",starup:"7"},{title:`UnblockNeteaseMusic /

      server`,owner:"UnblockNeteaseMusic",name:"server",avatar:"https://avatars.githubusercontent.com/u/26399680?s=40&v=4",path:"/UnblockNeteaseMusic/server",link:"https://github.com/UnblockNeteaseMusic/server",description:"Revive unavailable songs for Netease Cloud Music (Refactored & Enhanced version)",language:"JavaScript",stars:"5,704",forks:"577",starup:"99"},{title:`darkroomengineering /

      lenis`,owner:"darkroomengineering",name:"lenis",avatar:"https://avatars.githubusercontent.com/u/28361254?s=40&v=4",path:"/darkroomengineering/lenis",link:"https://github.com/darkroomengineering/lenis",description:"How smooth scroll should be",language:"JavaScript",stars:"7,086",forks:"307",starup:"10"},{title:`dropzone /

      dropzone`,owner:"dropzone",name:"dropzone",avatar:"https://avatars.githubusercontent.com/u/133277?s=40&v=4",path:"/dropzone/dropzone",link:"https://github.com/dropzone/dropzone",description:"Dropzone is an easy to use drag'n'drop library. It supports image previews and shows nice progress bars.",language:"JavaScript",stars:"17,917",forks:"3,290",starup:"9"},{title:`zed-industries /

      extensions`,owner:"zed-industries",name:"extensions",avatar:"https://avatars.githubusercontent.com/u/1486634?s=40&v=4",path:"/zed-industries/extensions",link:"https://github.com/zed-industries/extensions",description:"Extensions for the Zed editor",language:"JavaScript",stars:"529",forks:"211",starup:"0"}],"JavaScript-weekly":[{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"3,051",forks:"11,660",starup:"200"},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",link:"https://github.com/HeyPuter/puter",description:"🌐 The Web OS! Free, Open-Source, and Self-Hostable.",language:"JavaScript",stars:"19,984",forks:"1,223",starup:"876"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,621",forks:"1,445",starup:"73"},{title:`layui /

      layui`,owner:"layui",name:"layui",avatar:"https://avatars.githubusercontent.com/u/3277200?s=40&v=4",path:"/layui/layui",link:"https://github.com/layui/layui",description:"一套遵循原生态开发模式的 Web UI 组件库，采用自身轻量级模块化规范，易上手，可以更简单快速地构建网页界面。",language:"JavaScript",stars:"29,127",forks:"7,312",starup:"99"},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",link:"https://github.com/sveltejs/svelte",description:"Cybernetically enhanced web apps",language:"JavaScript",stars:"77,061",forks:"4,013",starup:"134"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,841",forks:"2,543",starup:"275"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,298",forks:"2,376",starup:"110"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a visual framework for building multi-agent and RAG applications. It's open-source, Python-powered, fully customizable, model and vector store agnostic.",language:"JavaScript",stars:"18,718",forks:"2,833",starup:"256"},{title:`UnblockNeteaseMusic /

      server`,owner:"UnblockNeteaseMusic",name:"server",avatar:"https://avatars.githubusercontent.com/u/26399680?s=40&v=4",path:"/UnblockNeteaseMusic/server",link:"https://github.com/UnblockNeteaseMusic/server",description:"Revive unavailable songs for Netease Cloud Music (Refactored & Enhanced version)",language:"JavaScript",stars:"5,704",forks:"577",starup:"197"},{title:`LeCoupa /

      awesome-cheatsheets`,owner:"LeCoupa",name:"awesome-cheatsheets",avatar:"https://avatars.githubusercontent.com/u/1658644?s=40&v=4",path:"/LeCoupa/awesome-cheatsheets",link:"https://github.com/LeCoupa/awesome-cheatsheets",description:"👩‍💻👨‍💻 Awesome cheatsheets for popular programming languages, frameworks and development tools. They include everything you should know in one single file.",language:"JavaScript",stars:"38,098",forks:"5,975",starup:"202"},{title:`quasarframework /

      quasar`,owner:"quasarframework",name:"quasar",avatar:"https://avatars.githubusercontent.com/u/4665641?s=40&v=4",path:"/quasarframework/quasar",link:"https://github.com/quasarframework/quasar",description:"Quasar Framework - Build high-performance VueJS user interfaces in record time",language:"JavaScript",stars:"25,401",forks:"3,437",starup:"45"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"938",forks:"3,634",starup:"81"},{title:`plotly /

      plotly.js`,owner:"plotly",name:"plotly.js",avatar:"https://avatars.githubusercontent.com/u/6675409?s=40&v=4",path:"/plotly/plotly.js",link:"https://github.com/plotly/plotly.js",description:"Open-source JavaScript charting library behind Plotly and Dash",language:"JavaScript",stars:"16,653",forks:"1,825",starup:"33"},{title:`jagenjo /

      litegraph.js`,owner:"jagenjo",name:"litegraph.js",avatar:"https://avatars.githubusercontent.com/u/393515?s=40&v=4",path:"/jagenjo/litegraph.js",link:"https://github.com/jagenjo/litegraph.js",description:"A graph node engine and editor written in Javascript similar to PD or UDK Blueprints, comes with its own editor in HTML5 Canvas2D. The engine can run client side or server side using Node. It allows to export graphs as JSONs to be included in applications independently.",language:"JavaScript",stars:"5,471",forks:"616",starup:"63"},{title:`Asabeneh /

      30-Days-Of-JavaScript`,owner:"Asabeneh",name:"30-Days-Of-JavaScript",avatar:"https://avatars.githubusercontent.com/u/9008063?s=40&v=4",path:"/Asabeneh/30-Days-Of-JavaScript",link:"https://github.com/Asabeneh/30-Days-Of-JavaScript",description:"30 days of JavaScript programming challenge is a step-by-step guide to learn JavaScript programming language in 30 days. This challenge may take more than 100 days, please just follow your own pace. These videos may help too: https://www.youtube.com/channel/UC7PNRuno1rzYPb1xLa4yktw",language:"JavaScript",stars:"41,363",forks:"9,605",starup:"146"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"5,003",forks:"1,549",starup:"39"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"2,204",forks:"3,130",starup:"144"},{title:`SortableJS /

      Sortable`,owner:"SortableJS",name:"Sortable",avatar:"https://avatars.githubusercontent.com/u/1109562?s=40&v=4",path:"/SortableJS/Sortable",link:"https://github.com/SortableJS/Sortable",description:"Reorderable drag-and-drop lists for modern browsers and touch devices. No jQuery or framework required.",language:"JavaScript",stars:"28,960",forks:"3,673",starup:"51"},{title:`xenova /

      transformers.js`,owner:"xenova",name:"transformers.js",avatar:"https://avatars.githubusercontent.com/u/26504141?s=40&v=4",path:"/xenova/transformers.js",link:"https://github.com/xenova/transformers.js",description:"State-of-the-art Machine Learning for the web. Run 🤗 Transformers directly in your browser, with no need for a server!",language:"JavaScript",stars:"8,303",forks:"459",starup:"283"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"27,403",forks:"3,195",starup:"4,357"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"15,707",forks:"1,652",starup:"2,922"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,122",forks:"1,128",starup:"294"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"5,063",forks:"359",starup:"1,383"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"42,308",forks:"3,372",starup:"857"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,998",forks:"45,626",starup:"2,019"},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",link:"https://github.com/projectdiscovery/nuclei-templates",description:"Community curated list of templates for the nuclei engine to find security vulnerabilities.",language:"JavaScript",stars:"8,298",forks:"2,376",starup:"238"},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",link:"https://github.com/iptv-org/iptv",description:"Collection of publicly available IPTV channels from all over the world",language:"JavaScript",stars:"79,399",forks:"1,895",starup:"1,051"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"27,884",forks:"3,390",starup:"1,257"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,958",forks:"1,018",starup:"365"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"122,011",forks:"26,102",starup:"1,250"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,771",forks:"9,758",starup:"435"},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",link:"https://github.com/blackmatrix7/ios_rule_script",description:"分流规则、重写写规则及脚本。",language:"JavaScript",stars:"15,841",forks:"2,543",starup:"645"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"51,200",forks:"4,598",starup:"1,445"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,753",forks:"35,161",starup:"743"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,253",forks:"2,552",starup:"428"},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",link:"https://github.com/sveltejs/kit",description:"web development, streamlined",language:"JavaScript",stars:"17,936",forks:"1,802",starup:"215"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,719",forks:"15,906",starup:"583"}],"TypeScript-daily":[{title:`idootop /

      mi-gpt`,owner:"idootop",name:"mi-gpt",avatar:"https://avatars.githubusercontent.com/u/35302658?s=40&v=4",path:"/idootop/mi-gpt",link:"https://github.com/idootop/mi-gpt",description:"🏠 将小爱音箱接入 ChatGPT 和豆包，改造成你的专属语音助手。",language:"TypeScript",stars:"2,460",forks:"174",starup:"189"},{title:`directus /

      directus`,owner:"directus",name:"directus",avatar:"https://avatars.githubusercontent.com/u/9141017?s=40&v=4",path:"/directus/directus",link:"https://github.com/directus/directus",description:"The Modern Data Stack 🐰 — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.",language:"TypeScript",stars:"26,150",forks:"3,617",starup:"116"},{title:`nextui-org /

      nextui`,owner:"nextui-org",name:"nextui",avatar:"https://avatars.githubusercontent.com/u/30373425?s=40&v=4",path:"/nextui-org/nextui",link:"https://github.com/nextui-org/nextui",description:"🚀 Beautiful, fast and modern React UI library.",language:"TypeScript",stars:"19,975",forks:"1,152",starup:"23"},{title:`discordjs /

      discord.js`,owner:"discordjs",name:"discord.js",avatar:"https://avatars.githubusercontent.com/u/10330923?s=40&v=4",path:"/discordjs/discord.js",link:"https://github.com/discordjs/discord.js",description:"A powerful JavaScript library for interacting with the Discord API",language:"TypeScript",stars:"24,942",forks:"3,935",starup:"7"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"1,611",forks:"172",starup:"22"},{title:`RhysSullivan /

      shiptalkers`,owner:"RhysSullivan",name:"shiptalkers",avatar:"https://avatars.githubusercontent.com/u/39114868?s=40&v=4",path:"/RhysSullivan/shiptalkers",link:"https://github.com/RhysSullivan/shiptalkers",description:"",language:"TypeScript",stars:"584",forks:"26",starup:"76"},{title:`discord /

      discord-api-docs`,owner:"discord",name:"discord-api-docs",avatar:"https://avatars.githubusercontent.com/u/4193854?s=40&v=4",path:"/discord/discord-api-docs",link:"https://github.com/discord/discord-api-docs",description:"Official Discord API Documentation",language:"TypeScript",stars:"5,782",forks:"1,233",starup:"4"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,554",forks:"525",starup:"42"},{title:`felixmosh /

      bull-board`,owner:"felixmosh",name:"bull-board",avatar:"https://avatars.githubusercontent.com/u/9304194?s=40&v=4",path:"/felixmosh/bull-board",link:"https://github.com/felixmosh/bull-board",description:"🎯 Queue background jobs inspector",language:"TypeScript",stars:"2,083",forks:"336",starup:"7"},{title:`aws-samples /

      bedrock-claude-chat`,owner:"aws-samples",name:"bedrock-claude-chat",avatar:"https://avatars.githubusercontent.com/u/23316627?s=40&v=4",path:"/aws-samples/bedrock-claude-chat",link:"https://github.com/aws-samples/bedrock-claude-chat",description:"AWS-native chatbot using Bedrock + Claude",language:"TypeScript",stars:"629",forks:"208",starup:"1"},{title:`aws /

      aws-cdk`,owner:"aws",name:"aws-cdk",avatar:"https://avatars.githubusercontent.com/u/524162?s=40&v=4",path:"/aws/aws-cdk",link:"https://github.com/aws/aws-cdk",description:"The AWS Cloud Development Kit is a framework for defining cloud infrastructure in code",language:"TypeScript",stars:"11,273",forks:"3,746",starup:"6"},{title:`documenso /

      documenso`,owner:"documenso",name:"documenso",avatar:"https://avatars.githubusercontent.com/u/1309312?s=40&v=4",path:"/documenso/documenso",link:"https://github.com/documenso/documenso",description:"The Open Source DocuSign Alternative.",language:"TypeScript",stars:"6,344",forks:"817",starup:"32"},{title:`elastic /

      kibana`,owner:"elastic",name:"kibana",avatar:"https://avatars.githubusercontent.com/u/42973632?s=40&v=4",path:"/elastic/kibana",link:"https://github.com/elastic/kibana",description:"Your window into the Elastic Stack",language:"TypeScript",stars:"19,408",forks:"8,009",starup:"5"},{title:`vuetifyjs /

      vuetify`,owner:"vuetifyjs",name:"vuetify",avatar:"https://avatars.githubusercontent.com/u/9064066?s=40&v=4",path:"/vuetifyjs/vuetify",link:"https://github.com/vuetifyjs/vuetify",description:"🐉 Vue Component Framework",language:"TypeScript",stars:"39,210",forks:"6,934",starup:"7"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"32,301",forks:"7,714",starup:"39"},{title:`pixijs /

      pixijs`,owner:"pixijs",name:"pixijs",avatar:"https://avatars.githubusercontent.com/u/3112434?s=40&v=4",path:"/pixijs/pixijs",link:"https://github.com/pixijs/pixijs",description:"The HTML5 Creation Engine: Create beautiful digital content with the fastest, most flexible 2D WebGL renderer.",language:"TypeScript",stars:"42,875",forks:"4,745",starup:"8"},{title:`sst /

      sst`,owner:"sst",name:"sst",avatar:"https://avatars.githubusercontent.com/u/83515?s=40&v=4",path:"/sst/sst",link:"https://github.com/sst/sst",description:"Build modern full-stack applications on AWS",language:"TypeScript",stars:"20,714",forks:"1,604",starup:"77"}],"TypeScript-weekly":[{title:`udecode /

      plate`,owner:"udecode",name:"plate",avatar:"https://avatars.githubusercontent.com/u/19695832?s=40&v=4",path:"/udecode/plate",link:"https://github.com/udecode/plate",description:"The rich-text editor for React.",language:"TypeScript",stars:"8,546",forks:"602",starup:"251"},{title:`drizzle-team /

      drizzle-orm`,owner:"drizzle-team",name:"drizzle-orm",avatar:"https://avatars.githubusercontent.com/u/33990502?s=40&v=4",path:"/drizzle-team/drizzle-orm",link:"https://github.com/drizzle-team/drizzle-orm",description:"Headless TypeScript ORM with a head. Runs on Node, Bun and Deno. Lives on the Edge and yes, it's a JavaScript ORM too 😅",language:"TypeScript",stars:"20,967",forks:"476",starup:"275"},{title:`lyswhut /

      lx-music-desktop`,owner:"lyswhut",name:"lx-music-desktop",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-desktop",link:"https://github.com/lyswhut/lx-music-desktop",description:"一个基于 electron 的音乐软件",language:"TypeScript",stars:"37,582",forks:"5,699",starup:"241"},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",link:"https://github.com/microsoft/vscode",description:"Visual Studio Code",language:"TypeScript",stars:"159,588",forks:"27,917",starup:"381"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"35,301",forks:"1,666",starup:"883"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"26,374",forks:"13,464",starup:"467"},{title:`lyswhut /

      lx-music-mobile`,owner:"lyswhut",name:"lx-music-mobile",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-mobile",link:"https://github.com/lyswhut/lx-music-mobile",description:"一个基于 React native 开发的音乐软件",language:"TypeScript",stars:"9,506",forks:"1,297",starup:"121"},{title:`wasp-lang /

      open-saas`,owner:"wasp-lang",name:"open-saas",avatar:"https://avatars.githubusercontent.com/u/70215737?s=40&v=4",path:"/wasp-lang/open-saas",link:"https://github.com/wasp-lang/open-saas",description:"A free, open-source SaaS app starter for React & Node.js with superpowers. Production-ready. Community-driven.",language:"TypeScript",stars:"5,554",forks:"525",starup:"234"},{title:`renovatebot /

      renovate`,owner:"renovatebot",name:"renovate",avatar:"https://avatars.githubusercontent.com/u/6311784?s=40&v=4",path:"/renovatebot/renovate",link:"https://github.com/renovatebot/renovate",description:"Home of the Renovate CLI: Cross-platform Dependency Automation by Mend.io",language:"TypeScript",stars:"16,302",forks:"2,089",starup:"151"},{title:`janhq /

      jan`,owner:"janhq",name:"jan",avatar:"https://avatars.githubusercontent.com/u/150573299?s=40&v=4",path:"/janhq/jan",link:"https://github.com/janhq/jan",description:"Jan is an open source alternative to ChatGPT that runs 100% offline on your computer. Multiple engine support (llama.cpp, TensorRT-LLM)",language:"TypeScript",stars:"19,832",forks:"1,148",starup:"398"},{title:`grafana /

      grafana`,owner:"grafana",name:"grafana",avatar:"https://avatars.githubusercontent.com/u/10999?s=40&v=4",path:"/grafana/grafana",link:"https://github.com/grafana/grafana",description:"The open and composable observability and data visualization platform. Visualize metrics, logs, and traces from multiple sources like Prometheus, Loki, Elasticsearch, InfluxDB, Postgres and many more.",language:"TypeScript",stars:"61,053",forks:"11,649",starup:"141"},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",link:"https://github.com/mui/material-ui",description:"Material UI: Ready-to-use foundational React components, free forever. It includes Material UI, which implements Google's Material Design.",language:"TypeScript",stars:"92,128",forks:"31,687",starup:"134"},{title:`nestjs /

      nest`,owner:"nestjs",name:"nest",avatar:"https://avatars.githubusercontent.com/u/23244943?s=40&v=4",path:"/nestjs/nest",link:"https://github.com/nestjs/nest",description:"A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications with TypeScript/JavaScript 🚀",language:"TypeScript",stars:"65,093",forks:"7,436",starup:"159"},{title:`nukeop /

      nuclear`,owner:"nukeop",name:"nuclear",avatar:"https://avatars.githubusercontent.com/u/12746779?s=40&v=4",path:"/nukeop/nuclear",link:"https://github.com/nukeop/nuclear",description:"Streaming music player that finds free music for you",language:"TypeScript",stars:"11,638",forks:"1,018",starup:"79"},{title:`TypeCellOS /

      BlockNote`,owner:"TypeCellOS",name:"BlockNote",avatar:"https://avatars.githubusercontent.com/u/368857?s=40&v=4",path:"/TypeCellOS/BlockNote",link:"https://github.com/TypeCellOS/BlockNote",description:"A React Rich Text Editor that's block-based (Notion style) and extensible. Built on top of Prosemirror and Tiptap.",language:"TypeScript",stars:"5,639",forks:"350",starup:"186"},{title:`rjmacarthy /

      twinny`,owner:"rjmacarthy",name:"twinny",avatar:"https://avatars.githubusercontent.com/u/5537428?s=40&v=4",path:"/rjmacarthy/twinny",link:"https://github.com/rjmacarthy/twinny",description:"The most no-nonsense, locally or API-hosted AI code completion plugin for Visual Studio Code - like GitHub Copilot but completely free and 100% private.",language:"TypeScript",stars:"2,126",forks:"117",starup:"199"},{title:`directus /

      directus`,owner:"directus",name:"directus",avatar:"https://avatars.githubusercontent.com/u/9141017?s=40&v=4",path:"/directus/directus",link:"https://github.com/directus/directus",description:"The Modern Data Stack 🐰 — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.",language:"TypeScript",stars:"26,150",forks:"3,617",starup:"388"},{title:`sequelize /

      sequelize`,owner:"sequelize",name:"sequelize",avatar:"https://avatars.githubusercontent.com/u/79163?s=40&v=4",path:"/sequelize/sequelize",link:"https://github.com/sequelize/sequelize",description:"Feature-rich ORM for modern Node.js and TypeScript, it supports PostgreSQL (with JSON and JSONB support), MySQL, MariaDB, SQLite, MS SQL Server, Snowflake, Oracle DB (v6), DB2 and DB2 for IBM i.",language:"TypeScript",stars:"29,164",forks:"4,250",starup:"34"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"10,314",forks:"1,126",starup:"4,699"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,946",forks:"2,330",starup:"2,158"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"33,053",forks:"4,389",starup:"5,576"},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/26371161?s=40&v=4",path:"/dream-num/univer",link:"https://github.com/dream-num/univer",description:"Univer is an open-source alternative to Google Sheets, Slides, and Docs",language:"TypeScript",stars:"5,364",forks:"433",starup:"2,111"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"34,765",forks:"2,265",starup:"3,939"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"79,524",forks:"7,257",starup:"1,263"},{title:`type-challenges /

      type-challenges`,owner:"type-challenges",name:"type-challenges",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/type-challenges/type-challenges",link:"https://github.com/type-challenges/type-challenges",description:"Collection of TypeScript type challenges with online judge",language:"TypeScript",stars:"41,056",forks:"4,437",starup:"917"},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",link:"https://github.com/mattermost/mattermost",description:"Mattermost is an open source platform for secure collaboration across the entire software development lifecycle..",language:"TypeScript",stars:"28,423",forks:"6,932",starup:"362"},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",link:"https://github.com/coder/code-server",description:"VS Code in the browser",language:"TypeScript",stars:"66,090",forks:"5,418",starup:"672"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"25,269",forks:"1,358",starup:"1,118"},{title:`microsoft /

      typespec`,owner:"microsoft",name:"typespec",avatar:"https://avatars.githubusercontent.com/u/1031227?s=40&v=4",path:"/microsoft/typespec",link:"https://github.com/microsoft/typespec",description:"",language:"TypeScript",stars:"3,644",forks:"165",starup:"649"},{title:`BuilderIO /

      mitosis`,owner:"BuilderIO",name:"mitosis",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/mitosis",link:"https://github.com/BuilderIO/mitosis",description:"Write components once, run everywhere. Compiles to React, Vue, Qwik, Solid, Angular, Svelte, and more.",language:"TypeScript",stars:"11,695",forks:"504",starup:"802"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"7,258",forks:"728",starup:"1,489"}],"Vue-daily":[{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,577",forks:"1,481",starup:"3"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,404",forks:"572",starup:"3"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,327",forks:"3,619",starup:"5"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,700",forks:"645",starup:"5"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,320",forks:"753",starup:"8"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,166",forks:"878",starup:"0"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,060",forks:"297",starup:"3"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,246",forks:"1,669",starup:"5"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,459",forks:"1,426",starup:"0"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,478",forks:"391",starup:"5"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,757",forks:"3,715",starup:"2"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,300",forks:"597",starup:"9"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,031",forks:"141",starup:"3"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,982",forks:"505",starup:"4"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,619",forks:"1,386",starup:"3"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"4,022",forks:"1,639",starup:"3"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,655",forks:"222",starup:"2"},{title:`yangjian102621 /

      geekai`,owner:"yangjian102621",name:"geekai",avatar:"https://avatars.githubusercontent.com/u/4746061?s=40&v=4",path:"/yangjian102621/geekai",link:"https://github.com/yangjian102621/geekai",description:"AI 助手全套开源解决方案，自带运营管理后台，开箱即用。集成了 ChatGPT, Azure, ChatGLM,讯飞星火，文心一言等多个平台的大语言模型。支持 MJ AI 绘画，Stable Diffusion AI 绘画，微博热搜等插件工具。采用 Go + Vue3 + element-plus 实现。",language:"Vue",stars:"3,230",forks:"857",starup:"3"}],"Vue-weekly":[{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,544",forks:"4,059",starup:"124"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,252",forks:"758",starup:"88"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,327",forks:"3,619",starup:"61"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,478",forks:"391",starup:"33"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,619",forks:"1,386",starup:"40"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,273",forks:"329",starup:"228"},{title:`xaboy /

      form-create-designer`,owner:"xaboy",name:"form-create-designer",avatar:"https://avatars.githubusercontent.com/u/21242408?s=40&v=4",path:"/xaboy/form-create-designer",link:"https://github.com/xaboy/form-create-designer",description:"好用的Vue可视化表单设计器，可以通过拖拽的方式快速创建表单，提高开发者对表单的开发效率。",language:"Vue",stars:"1,366",forks:"324",starup:"34"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,798",forks:"1,105",starup:"43"},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",link:"https://github.com/kailong321200875/vue-element-plus-admin",description:"A backend management system based on vue3, typescript, element-plus, and vite",language:"Vue",stars:"2,404",forks:"572",starup:"25"},{title:`tachiyomiorg /

      website`,owner:"tachiyomiorg",name:"website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/tachiyomiorg/website",link:"https://github.com/tachiyomiorg/website",description:"Official website for the Tachiyomi app.",language:"Vue",stars:"642",forks:"1,204",starup:"16"},{title:`youlaitech /

      vue3-element-admin`,owner:"youlaitech",name:"vue3-element-admin",avatar:"https://avatars.githubusercontent.com/u/12759477?s=40&v=4",path:"/youlaitech/vue3-element-admin",link:"https://github.com/youlaitech/vue3-element-admin",description:"🔥基于 vue3 + vite5 + typescript + element-plus 构建的后台管理前端模板（配套后端源码），vue-element-admin 的 vue3 版本。",language:"Vue",stars:"1,060",forks:"297",starup:"28"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,814",forks:"1,775",starup:"32"},{title:`snapshot-labs /

      snapshot`,owner:"snapshot-labs",name:"snapshot",avatar:"https://avatars.githubusercontent.com/u/51686767?s=40&v=4",path:"/snapshot-labs/snapshot",link:"https://github.com/snapshot-labs/snapshot",description:"Interface for Snapshot. Join us on Discord http://discord.snapshot.org",language:"Vue",stars:"9,180",forks:"1,216",starup:"46"},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",link:"https://github.com/hslr-s/sun-panel",description:"A server, NAS navigation panel, Homepage, browser homepage. | 一个服务器、NAS导航面板、Homepage、浏览器首页。",language:"Vue",stars:"2,140",forks:"211",starup:"62"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,426",forks:"5,944",starup:"36"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,031",forks:"141",starup:"15"},{title:`elk-zone /

      elk`,owner:"elk-zone",name:"elk",avatar:"https://avatars.githubusercontent.com/u/6481596?s=40&v=4",path:"/elk-zone/elk",link:"https://github.com/elk-zone/elk",description:"A nimble Mastodon web client",language:"Vue",stars:"5,160",forks:"528",starup:"14"}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"17,567",forks:"2,069",starup:"5,857"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,503",forks:"1,056",starup:"621"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图设计-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,252",forks:"758",starup:"292"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,820",forks:"762",starup:"186"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,910",forks:"265",starup:"179"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,320",forks:"753",starup:"275"},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",link:"https://github.com/chaitin/xray",description:"一款完善的安全评估工具，支持常见 web 安全问题扫描和自定义 poc | 使用之前务必先阅读文档",language:"Vue",stars:"9,814",forks:"1,775",starup:"127"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,770",forks:"2,597",starup:"246"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP TelegramBot",language:"Vue",stars:"1,273",forks:"329",starup:"544"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"127",forks:"1,394",starup:"12"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,409",forks:"726",starup:"209"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"4,022",forks:"1,639",starup:"188"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,246",forks:"503",starup:"132"},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",link:"https://github.com/advplyr/audiobookshelf-app",description:"Mobile application for Audiobookshelf",language:"Vue",stars:"1,031",forks:"141",starup:"54"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,798",forks:"1,105",starup:"109"},{title:`bailicangdu /

      vue2-elm`,owner:"bailicangdu",name:"vue2-elm",avatar:"https://avatars.githubusercontent.com/u/20297227?s=40&v=4",path:"/bailicangdu/vue2-elm",link:"https://github.com/bailicangdu/vue2-elm",description:"Large single page application with 45 pages built on vue2 + vuex. 基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用",language:"Vue",stars:"40,847",forks:"12,466",starup:"116"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,544",forks:"4,059",starup:"431"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,147",forks:"652",starup:"109"}]},gt=A({__name:"index",setup(y){const{view:n,dateRange:i,language:r,color:u}=E(),m=U(()=>b(Q[`${r.value}-${i.value}`]));V("color",u),V("data",m);function b(p){return p.sort((a,o)=>s(o.starup)-s(a.starup))}return(p,a)=>{const o=W,g=D,d=L,k=B,t=I,e=N,w=O,S=K,P=$;return h(),x("div",null,[v(k,null,{default:T(()=>[v(o,{modelValue:c(i),"onUpdate:modelValue":a[0]||(a[0]=l=>j(i)?i.value=l:null)},null,8,["modelValue"]),v(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=l=>j(r)?r.value=l:null)},null,8,["modelValue"]),v(d,{modelValue:c(n),"onUpdate:modelValue":a[2]||(a[2]=l=>j(n)?n.value=l:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(Y,{name:"fade-top",mode:"out-in"},{default:T(()=>[c(n)==="list"?(h(),f(e,{key:0},{icons:T(({repo:l})=>[v(t,{title:"starup","icon-name":"ph:star-half-bold",text:l.starup,"text-red":""},null,8,["text"])]),_:1})):c(n)==="table"?(h(),f(w,{key:1,"has-starup":""})):c(n)==="chart"?(h(),f(S,{key:2})):(h(),f(P,{key:3,data:c(m)},null,8,["data"]))]),_:1})])}}});export{gt as default};
