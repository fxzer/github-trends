import{_}from"./Bn7x9OgR.js";import{_ as N}from"./1vLfHdJ6.js";import{_ as D}from"./D7Bd7NMA.js";import F from"./BBGLEcVR.js";import{_ as G,a as q}from"./D3SfCRR_.js";import{_ as O}from"./Bzw01jUM.js";import{s as U,u as z,a as I,b as L,i as H,c as Y}from"./DWZlmvQ2.js";import{d as M,s as r}from"./CYcXzR8Z.js";import{n as J,q as R,h as j,o as l,c as S,s as B,r as T,u as $,b as c,w as y,T as K,v as u,x as P,F as Q,y as X,z as V,a as Z}from"./CefSwbTi.js";import{l as tt}from"./p2-M2djV.js";import"./BYaj9Fef.js";import"./BWqTTzU9.js";import"./BQkc-AXV.js";import"./DA6tu7hY.js";const at=J({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=R(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=z("仓库飙升榜",h);function k(n){const s=M(n);s.sort((a,o)=>{const A=r(a.starup)+r(a.stars)+r(a.forks),C=r(o.starup)+r(o.stars)+r(o.forks);return A-C});const[d,v,w,i]=s.reduce((a,o)=>(a[0].push(r(o.stars)),a[1].push(r(o.forks)),a[2].push(r(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:f}=I(t,L);j(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:B({height:g})},null,4))}}),et=J({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=R(p),t=z("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:k}=I(t,L);function f(n){const s=M(n);s.sort((i,a)=>r(i.starup)-r(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=s.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:r(i.starup),name:`${i.owner}/${i.name}`,itemStyle:H(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}j(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(n,s)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:B({height:g})},null,4))}}),nt={"JavaScript-daily":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,749",forks:"2,934",starup:"357"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,998",forks:"3,361",starup:"134"},{title:`langflow-ai /

      langflow`,owner:"langflow-ai",name:"langflow",avatar:"https://avatars.githubusercontent.com/u/24829397?s=40&v=4",path:"/langflow-ai/langflow",link:"https://github.com/langflow-ai/langflow",description:"⛓️ Langflow is a dynamic graph where each node is an executable unit. Its modular and interactive design fosters rapid experimentation and prototyping, pushing hard on the limits of creativity.",language:"JavaScript",stars:"18,047",forks:"2,702",starup:"77"},{title:`joye61 /

      pic-smaller`,owner:"joye61",name:"pic-smaller",avatar:"https://avatars.githubusercontent.com/u/5045186?s=40&v=4",path:"/joye61/pic-smaller",link:"https://github.com/joye61/pic-smaller",description:"Pic Smaller – Compress JPEG, PNG, WEBP, AVIF, SVG and GIF images intelligently",language:"JavaScript",stars:"1,073",forks:"161",starup:"68"},{title:`metaskills /

      experts`,owner:"metaskills",name:"experts",avatar:"https://avatars.githubusercontent.com/u/2381?s=40&v=4",path:"/metaskills/experts",link:"https://github.com/metaskills/experts",description:"Experts.js is the easiest way to create and deploy OpenAI's Assistants and link them together as Tools to create advanced Multi AI Agent Systems with expanded memory and attention to detail.",language:"JavaScript",stars:"586",forks:"29",starup:"102"},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",link:"https://github.com/ToolJet/ToolJet",description:"Low-code platform for building business applications. Connect to databases, cloud storages, GraphQL, API endpoints, Airtable, Google sheets, OpenAI, etc and build apps using drag and drop application builder. Built using JavaScript/TypeScript. 🚀",language:"JavaScript",stars:"26,860",forks:"3,302",starup:"16"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,658",forks:"2,356",starup:"68"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,390",forks:"1,128",starup:"6"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,358",forks:"515",starup:"11"},{title:`songquanpeng /

      message-pusher`,owner:"songquanpeng",name:"message-pusher",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/message-pusher",link:"https://github.com/songquanpeng/message-pusher",description:"搭建专属于你的消息推送服务，支持多种消息推送方式，支持 Markdown，基于 Golang 仅单可执行文件，开箱即用",language:"JavaScript",stars:"2,265",forks:"350",starup:"93"},{title:`brunosimon /

      my-room-in-3d`,owner:"brunosimon",name:"my-room-in-3d",avatar:"https://avatars.githubusercontent.com/u/5439991?s=40&v=4",path:"/brunosimon/my-room-in-3d",link:"https://github.com/brunosimon/my-room-in-3d",description:"",language:"JavaScript",stars:"2,770",forks:"390",starup:"14"},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",link:"https://github.com/trekhleb/javascript-algorithms",description:"📝 Algorithms and data structures implemented in JavaScript with explanations and links to further readings",language:"JavaScript",stars:"183,565",forks:"29,661",starup:"52"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,234",forks:"1,893",starup:"18"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,379",forks:"15,158",starup:"43"},{title:`V2RaySSR /

      Free-VLESS`,owner:"V2RaySSR",name:"Free-VLESS",avatar:"https://avatars.githubusercontent.com/u/59167743?s=40&v=4",path:"/V2RaySSR/Free-VLESS",link:"https://github.com/V2RaySSR/Free-VLESS",description:"通过 Cloudflare，免费部署 VLESS节点",language:"JavaScript",stars:"42",forks:"20",starup:"7"},{title:`ascoders /

      weekly`,owner:"ascoders",name:"weekly",avatar:"https://avatars.githubusercontent.com/u/7970947?s=40&v=4",path:"/ascoders/weekly",link:"https://github.com/ascoders/weekly",description:"前端精读周刊。帮你理解最前沿、实用的技术。",language:"JavaScript",stars:"27,814",forks:"3,180",starup:"13"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,515",forks:"4,520",starup:"56"},{title:`SortableJS /

      Sortable`,owner:"SortableJS",name:"Sortable",avatar:"https://avatars.githubusercontent.com/u/1109562?s=40&v=4",path:"/SortableJS/Sortable",link:"https://github.com/SortableJS/Sortable",description:"Reorderable drag-and-drop lists for modern browsers and touch devices. No jQuery or framework required.",language:"JavaScript",stars:"28,855",forks:"3,671",starup:"4"},{title:`gethomepage /

      homepage`,owner:"gethomepage",name:"homepage",avatar:"https://avatars.githubusercontent.com/u/1607653?s=40&v=4",path:"/gethomepage/homepage",link:"https://github.com/gethomepage/homepage",description:"A highly customizable homepage (or startpage / application dashboard) with Docker and service API integrations.",language:"JavaScript",stars:"16,529",forks:"944",starup:"29"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,270",forks:"1,767",starup:"25"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,866",forks:"2,582",starup:"16"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,464",forks:"309",starup:"56"},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",link:"https://github.com/meshery/meshery",description:"Meshery, the cloud native manager",language:"JavaScript",stars:"4,925",forks:"1,519",starup:"17"},{title:`egonSchiele /

      grokking_algorithms`,owner:"egonSchiele",name:"grokking_algorithms",avatar:"https://avatars.githubusercontent.com/u/97219?s=40&v=4",path:"/egonSchiele/grokking_algorithms",link:"https://github.com/egonSchiele/grokking_algorithms",description:"Code for the book Grokking Algorithms (https://amzn.to/29rVyHf)",language:"JavaScript",stars:"10,811",forks:"3,673",starup:"8"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,427",forks:"1,373",starup:"11"}],"JavaScript-weekly":[{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,464",forks:"309",starup:"659"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,998",forks:"3,361",starup:"411"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,284",forks:"45,485",starup:"736"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,211",forks:"937",starup:"196"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,065",forks:"1,106",starup:"197"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,749",forks:"2,934",starup:"941"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,368",forks:"35,134",starup:"194"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,788",forks:"650",starup:"174"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,379",forks:"15,158",starup:"139"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,390",forks:"1,128",starup:"50"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,560",forks:"9,736",starup:"109"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,501",forks:"11,750",starup:"31"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,358",forks:"515",starup:"90"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,653",forks:"78,427",starup:"103"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,658",forks:"2,356",starup:"216"},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",link:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"24 Lessons, 12 Weeks, Get Started as a Web Developer",language:"JavaScript",stars:"81,714",forks:"12,206",starup:"145"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,186",forks:"2,543",starup:"152"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,607",forks:"1,503",starup:"795"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,680",forks:"3,411",starup:"341"},{title:`Dooy /

      chatgpt-web-midjourney-proxy`,owner:"Dooy",name:"chatgpt-web-midjourney-proxy",avatar:"https://avatars.githubusercontent.com/u/3765401?s=40&v=4",path:"/Dooy/chatgpt-web-midjourney-proxy",link:"https://github.com/Dooy/chatgpt-web-midjourney-proxy",description:"chatgpt web, midjourney, gpts,tts, whisper,suno-v3 一套ui全搞定；同时支持 Web / PWA / Linux / Win / MacOS 平台",language:"JavaScript",stars:"3,567",forks:"929",starup:"122"},{title:`swapnilsparsh /

      30DaysOfJavaScript`,owner:"swapnilsparsh",name:"30DaysOfJavaScript",avatar:"https://avatars.githubusercontent.com/u/69387608?s=40&v=4",path:"/swapnilsparsh/30DaysOfJavaScript",link:"https://github.com/swapnilsparsh/30DaysOfJavaScript",description:"Projects made during the 30 days of the JavaScript challenge",language:"JavaScript",stars:"808",forks:"580",starup:"29"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,398",forks:"25,974",starup:"267"},{title:`responsively-org /

      responsively-app`,owner:"responsively-org",name:"responsively-app",avatar:"https://avatars.githubusercontent.com/u/1283424?s=40&v=4",path:"/responsively-org/responsively-app",link:"https://github.com/responsively-org/responsively-app",description:"A modified web browser that helps in responsive web development. A web developer's must have dev-tool.",language:"JavaScript",stars:"21,830",forks:"1,087",starup:"73"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,427",forks:"1,373",starup:"81"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,234",forks:"1,893",starup:"122"}],"JavaScript-monthly":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,749",forks:"2,934",starup:"3,181"},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,143",forks:"716",starup:"5,017"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,729",forks:"978",starup:"374"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,607",forks:"1,503",starup:"2,927"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"555",forks:"96",starup:"334"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,053",forks:"214",starup:"1,005"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,284",forks:"45,485",starup:"2,085"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,160",forks:"6,288",starup:"920"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,464",forks:"309",starup:"919"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,998",forks:"3,361",starup:"594"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,398",forks:"25,974",starup:"1,185"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,018",forks:"2,503",starup:"276"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,515",forks:"4,520",starup:"1,504"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,885",forks:"12,317",starup:"157"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,620",forks:"955",starup:"400"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,065",forks:"1,106",starup:"257"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,390",forks:"1,128",starup:"195"},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",link:"https://github.com/qist/tvbox",description:"FongMi影视、tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"1,326",forks:"488",starup:"225"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,626",forks:"5,874",starup:"862"},{title:`chartjs /

      Chart.js`,owner:"chartjs",name:"Chart.js",avatar:"https://avatars.githubusercontent.com/u/6757853?s=40&v=4",path:"/chartjs/Chart.js",link:"https://github.com/chartjs/Chart.js",description:"Simple HTML5 Charts using the <canvas> tag",language:"JavaScript",stars:"63,630",forks:"11,867",starup:"317"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,453",forks:"1,822",starup:"370"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"8,964",forks:"380",starup:"444"},{title:`NginxProxyManager /

      nginx-proxy-manager`,owner:"NginxProxyManager",name:"nginx-proxy-manager",avatar:"https://avatars.githubusercontent.com/u/1518257?s=40&v=4",path:"/NginxProxyManager/nginx-proxy-manager",link:"https://github.com/NginxProxyManager/nginx-proxy-manager",description:"Docker container for managing Nginx proxy hosts with a simple, powerful interface",language:"JavaScript",stars:"20,126",forks:"2,337",starup:"617"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"211",forks:"315",starup:"140"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"4,461",forks:"325",starup:"1,225"}],"TypeScript-daily":[{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 AI search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"824",forks:"67",starup:"264"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"2,141",forks:"246",starup:"286"},{title:`gorhom /

      react-native-bottom-sheet`,owner:"gorhom",name:"react-native-bottom-sheet",avatar:"https://avatars.githubusercontent.com/u/4061838?s=40&v=4",path:"/gorhom/react-native-bottom-sheet",link:"https://github.com/gorhom/react-native-bottom-sheet",description:"A performant interactive bottom sheet with fully configurable options 🚀",language:"TypeScript",stars:"6,163",forks:"709",starup:"7"},{title:`Worklenz /

      worklenz`,owner:"Worklenz",name:"worklenz",avatar:"https://avatars.githubusercontent.com/u/75464293?s=40&v=4",path:"/Worklenz/worklenz",link:"https://github.com/Worklenz/worklenz",description:"All in one project management tool for efficient teams",language:"TypeScript",stars:"612",forks:"22",starup:"94"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,931",forks:"295",starup:"360"},{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"648",forks:"115",starup:"205"},{title:`solidSpoon /

      DashPlayer`,owner:"solidSpoon",name:"DashPlayer",avatar:"https://avatars.githubusercontent.com/u/39454841?s=40&v=4",path:"/solidSpoon/DashPlayer",link:"https://github.com/solidSpoon/DashPlayer",description:"为英语学习者量身打造的视频播放器，助你通过观看视频、沉浸真实语境，轻松提升英语水平。#美剧 #播放器 #听力",language:"TypeScript",stars:"894",forks:"41",starup:"130"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,309",forks:"3,950",starup:"188"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"10,127",forks:"618",starup:"222"},{title:`gothinkster /

      realworld`,owner:"gothinkster",name:"realworld",avatar:"https://avatars.githubusercontent.com/u/556934?s=40&v=4",path:"/gothinkster/realworld",link:"https://github.com/gothinkster/realworld",description:'"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more',language:"TypeScript",stars:"78,772",forks:"7,198",starup:"139"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,857",forks:"14,070",starup:"346"},{title:`hudy9x /

      namviek`,owner:"hudy9x",name:"namviek",avatar:"https://avatars.githubusercontent.com/u/95471659?s=40&v=4",path:"/hudy9x/namviek",link:"https://github.com/hudy9x/namviek",description:"The open-source project manager for tiny teams",language:"TypeScript",stars:"411",forks:"48",starup:"303"},{title:`activepieces /

      activepieces`,owner:"activepieces",name:"activepieces",avatar:"https://avatars.githubusercontent.com/u/1812998?s=40&v=4",path:"/activepieces/activepieces",link:"https://github.com/activepieces/activepieces",description:"Your friendliest open source all-in-one automation tool ✨ Workflow automation tool 100+ integration / Enterprise automation tool / Zapier Alternative",language:"TypeScript",stars:"7,668",forks:"839",starup:"197"},{title:`tradingview /

      lightweight-charts`,owner:"tradingview",name:"lightweight-charts",avatar:"https://avatars.githubusercontent.com/u/3112183?s=40&v=4",path:"/tradingview/lightweight-charts",link:"https://github.com/tradingview/lightweight-charts",description:"Performant financial charts built with HTML5 canvas",language:"TypeScript",stars:"8,442",forks:"1,499",starup:"59"},{title:`Canner /

      WrenAI`,owner:"Canner",name:"WrenAI",avatar:"https://avatars.githubusercontent.com/u/1208829?s=40&v=4",path:"/Canner/WrenAI",link:"https://github.com/Canner/WrenAI",description:"WrenAI makes your database RAG-ready. Implement Text-to-SQL more accurately and securely.",language:"TypeScript",stars:"376",forks:"30",starup:"19"},{title:`webstudio-is /

      webstudio`,owner:"webstudio-is",name:"webstudio",avatar:"https://avatars.githubusercontent.com/u/52824?s=40&v=4",path:"/webstudio-is/webstudio",link:"https://github.com/webstudio-is/webstudio",description:"Open Source alternative to Webflow, check out our CMS launch https://webstudio.is/cms",language:"TypeScript",stars:"3,856",forks:"372",starup:"23"},{title:`SawyerHood /

      draw-a-ui`,owner:"SawyerHood",name:"draw-a-ui",avatar:"https://avatars.githubusercontent.com/u/2380669?s=40&v=4",path:"/SawyerHood/draw-a-ui",link:"https://github.com/SawyerHood/draw-a-ui",description:"Draw a mockup and generate html for it",language:"TypeScript",stars:"12,908",forks:"1,543",starup:"11"},{title:`mattermost /

      focalboard`,owner:"mattermost",name:"focalboard",avatar:"https://avatars.githubusercontent.com/u/46905241?s=40&v=4",path:"/mattermost/focalboard",link:"https://github.com/mattermost/focalboard",description:"Focalboard is an open source, self-hosted alternative to Trello, Notion, and Asana.",language:"TypeScript",stars:"20,321",forks:"1,750",starup:"10"},{title:`rubickCenter /

      rubick`,owner:"rubickCenter",name:"rubick",avatar:"https://avatars.githubusercontent.com/u/21073039?s=40&v=4",path:"/rubickCenter/rubick",link:"https://github.com/rubickCenter/rubick",description:"🔧 Electron based open source toolbox, free integration of rich plug-ins. 基于 electron 的开源工具箱，自由集成丰富插件。",language:"TypeScript",stars:"7,402",forks:"749",starup:"9"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,579",forks:"1,301",starup:"49"},{title:`joschan21 /

      quill`,owner:"joschan21",name:"quill",avatar:"https://avatars.githubusercontent.com/u/101584158?s=40&v=4",path:"/joschan21/quill",link:"https://github.com/joschan21/quill",description:"Quill - A Modern SaaS-Platform Built With Next.js 13",language:"TypeScript",stars:"1,720",forks:"449",starup:"5"},{title:`NervJS /

      taro`,owner:"NervJS",name:"taro",avatar:"https://avatars.githubusercontent.com/u/11807297?s=40&v=4",path:"/NervJS/taro",link:"https://github.com/NervJS/taro",description:"开放式跨端跨框架解决方案，支持使用 React/Vue/Nerv 等框架来开发微信/京东/百度/支付宝/字节跳动/ QQ 小程序/H5/React Native 等应用。 https://taro.zone/",language:"TypeScript",stars:"34,846",forks:"4,725",starup:"5"},{title:`ixartz /

      SaaS-Boilerplate`,owner:"ixartz",name:"SaaS-Boilerplate",avatar:"https://avatars.githubusercontent.com/u/5209935?s=40&v=4",path:"/ixartz/SaaS-Boilerplate",link:"https://github.com/ixartz/SaaS-Boilerplate",description:"🚀🎉📚 SaaS Boilerplate built with Next.js + Tailwind CSS + Shadcn UI + TypeScript. ⚡️ Full-stack React application with Auth, Multi-tenancy, Roles & Permissions, i18n, Landing Page, DB, Logging, Testing",language:"TypeScript",stars:"2,344",forks:"304",starup:"23"},{title:`adrianhajdin /

      zoom-clone`,owner:"adrianhajdin",name:"zoom-clone",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/zoom-clone",link:"https://github.com/adrianhajdin/zoom-clone",description:"Learn to develop a professional enterprise-ready video conferencing app in hours using Next.js 14, Stream, and Tailwind CSS.",language:"TypeScript",stars:"678",forks:"215",starup:"3"},{title:`apify /

      crawlee`,owner:"apify",name:"crawlee",avatar:"https://avatars.githubusercontent.com/u/23726914?s=40&v=4",path:"/apify/crawlee",link:"https://github.com/apify/crawlee",description:"Crawlee—A web scraping and browser automation library for Node.js to build reliable crawlers. In JavaScript and TypeScript. Extract data for AI, LLMs, RAG, or GPTs. Download HTML, PDF, JPG, PNG, and other files from websites. Works with Puppeteer, Playwright, Cheerio, JSDOM, and raw HTTP. Both headful and headless mode. With proxy rotation.",language:"TypeScript",stars:"12,406",forks:"538",starup:"5"}],"TypeScript-weekly":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,379",forks:"2,278",starup:"1,436"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"2,141",forks:"246",starup:"1,257"},{title:`SOS-RS /

      frontend`,owner:"SOS-RS",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/frontend",link:"https://github.com/SOS-RS/frontend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"559",forks:"332",starup:"305"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,235",forks:"56,274",starup:"1,048"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,970",forks:"1,028",starup:"3,063"},{title:`SOS-RS /

      backend`,owner:"SOS-RS",name:"backend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/backend",link:"https://github.com/SOS-RS/backend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"674",forks:"291",starup:"246"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,095",forks:"122",starup:"953"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,209",forks:"933",starup:"542"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,931",forks:"295",starup:"1,099"},{title:`openai /

      openai-node`,owner:"openai",name:"openai-node",avatar:"https://avatars.githubusercontent.com/u/107565488?s=40&v=4",path:"/openai/openai-node",link:"https://github.com/openai/openai-node",description:"The official Node.js / Typescript library for the OpenAI API",language:"TypeScript",stars:"7,027",forks:"731",starup:"68"},{title:`weaigc /

      bingo`,owner:"weaigc",name:"bingo",avatar:"https://avatars.githubusercontent.com/u/39235693?s=40&v=4",path:"/weaigc/bingo",link:"https://github.com/weaigc/bingo",description:"Bingo，一个让你呼吸顺畅 New Bing。",language:"TypeScript",stars:"2,594",forks:"1,058",starup:"207"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,522",forks:"12,725",starup:"443"},{title:`Bin-Huang /

      chatbox`,owner:"Bin-Huang",name:"chatbox",avatar:"https://avatars.githubusercontent.com/u/20723142?s=40&v=4",path:"/Bin-Huang/chatbox",link:"https://github.com/Bin-Huang/chatbox",description:"User-friendly Desktop Client App for AI Models/LLMs (GPT, Claude, Gemini, Ollama...)",language:"TypeScript",stars:"18,971",forks:"1,942",starup:"197"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,126",forks:"1,384",starup:"140"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"78",forks:"35",starup:"25"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,295",forks:"3,429",starup:"273"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,635",forks:"1,321",starup:"292"},{title:`remix-run /

      react-router`,owner:"remix-run",name:"react-router",avatar:"https://avatars.githubusercontent.com/u/92839?s=40&v=4",path:"/remix-run/react-router",link:"https://github.com/remix-run/react-router",description:"Declarative routing for React",language:"TypeScript",stars:"52,095",forks:"10,148",starup:"143"},{title:`mckaywrigley /

      chatbot-ui`,owner:"mckaywrigley",name:"chatbot-ui",avatar:"https://avatars.githubusercontent.com/u/29221284?s=40&v=4",path:"/mckaywrigley/chatbot-ui",link:"https://github.com/mckaywrigley/chatbot-ui",description:"AI chat for every model.",language:"TypeScript",stars:"26,684",forks:"7,360",starup:"197"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,426",forks:"117",starup:"538"},{title:`mifi /

      lossless-cut`,owner:"mifi",name:"lossless-cut",avatar:"https://avatars.githubusercontent.com/u/402547?s=40&v=4",path:"/mifi/lossless-cut",link:"https://github.com/mifi/lossless-cut",description:"The swiss army knife of lossless video/audio editing",language:"TypeScript",stars:"22,670",forks:"1,164",starup:"202"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,713",forks:"4,705",starup:"240"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,416",forks:"7,365",starup:"887"},{title:`aws /

      aws-cdk`,owner:"aws",name:"aws-cdk",avatar:"https://avatars.githubusercontent.com/u/524162?s=40&v=4",path:"/aws/aws-cdk",link:"https://github.com/aws/aws-cdk",description:"The AWS Cloud Development Kit is a framework for defining cloud infrastructure in code",language:"TypeScript",stars:"11,221",forks:"3,719",starup:"23"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,392",forks:"349",starup:"123"}],"TypeScript-monthly":[{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,309",forks:"3,950",starup:"7,591"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,209",forks:"933",starup:"1,537"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,579",forks:"1,301",starup:"4,293"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,437",forks:"1,597",starup:"3,164"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"4,987",forks:"902",starup:"1,386"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,951",forks:"2,197",starup:"3,757"},{title:`jina-ai /

      reader`,owner:"jina-ai",name:"reader",avatar:"https://avatars.githubusercontent.com/u/565869?s=40&v=4",path:"/jina-ai/reader",link:"https://github.com/jina-ai/reader",description:"Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/",language:"TypeScript",stars:"4,538",forks:"331",starup:"1,591"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"5,992",forks:"642",starup:"1,476"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,970",forks:"1,028",starup:"3,339"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,539",forks:"501",starup:"816"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,125",forks:"351",starup:"2,003"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,813",forks:"354",starup:"848"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,857",forks:"14,070",starup:"1,936"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,931",forks:"295",starup:"2,639"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"10,127",forks:"618",starup:"856"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,410",forks:"13,055",starup:"1,685"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,040",forks:"2,005",starup:"461"},{title:`measuredco /

      puck`,owner:"measuredco",name:"puck",avatar:"https://avatars.githubusercontent.com/u/985961?s=40&v=4",path:"/measuredco/puck",link:"https://github.com/measuredco/puck",description:"The visual editor for React",language:"TypeScript",stars:"4,584",forks:"220",starup:"428"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,295",forks:"3,429",starup:"924"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,302",forks:"35,746",starup:"3,249"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,172",forks:"1,379",starup:"413"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,319",forks:"197",starup:"615"},{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,379",forks:"2,278",starup:"1,746"},{title:`visgl /

      react-google-maps`,owner:"visgl",name:"react-google-maps",avatar:"https://avatars.githubusercontent.com/u/158792?s=40&v=4",path:"/visgl/react-google-maps",link:"https://github.com/visgl/react-google-maps",description:"React components and hooks for the Google Maps JavaScript API",language:"TypeScript",stars:"830",forks:"54",starup:"264"},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",link:"https://github.com/Effect-TS/effect",description:"An ecosystem of tools to build robust applications in TypeScript.",language:"TypeScript",stars:"5,497",forks:"176",starup:"1,102"}],"Vue-daily":[{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"366",forks:"109",starup:"172"},{title:`lin-xin /

      vue-manage-system`,owner:"lin-xin",name:"vue-manage-system",avatar:"https://avatars.githubusercontent.com/u/13494930?s=40&v=4",path:"/lin-xin/vue-manage-system",link:"https://github.com/lin-xin/vue-manage-system",description:"Vue3、Element Plus、typescript后台管理系统",language:"Vue",stars:"18,367",forks:"5,929",starup:"6"},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",link:"https://github.com/PanJiaChen/vue-element-admin",description:"🎉 A magical vue admin https://panjiachen.github.io/vue-element-admin",language:"Vue",stars:"86,633",forks:"30,336",starup:"11"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,274",forks:"206",starup:"40"},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",link:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"🎉 (RuoYi)官方仓库 基于SpringBoot，Spring Security，JWT，Vue3 & Vite、Element Plus 的前后端分离权限管理系统",language:"Vue",stars:"3,916",forks:"1,590",starup:"8"},{title:`chuzhixin /

      vue-admin-better`,owner:"chuzhixin",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/chuzhixin/vue-admin-better",link:"https://github.com/chuzhixin/vue-admin-better",description:"🚀🚀🚀vue admin,vue3 admin,vue3.0 admin,vue后台管理,vue-admin,vue3.0-admin,admin,vue-admin,vue-element-admin,ant-design,vue-admin-beautiful-pro,vab admin pro,vab admin plus,vue admin plus,vue admin pro",language:"Vue",stars:"16,206",forks:"3,608",starup:"8"},{title:`github-copilot-resources /

      copilot-metrics-viewer`,owner:"github-copilot-resources",name:"copilot-metrics-viewer",avatar:"https://avatars.githubusercontent.com/u/3329307?s=40&v=4",path:"/github-copilot-resources/copilot-metrics-viewer",link:"https://github.com/github-copilot-resources/copilot-metrics-viewer",description:"Tool to visualize the Copilot metrics provided via the Copilot Business Metrics API (current in public beta)",language:"Vue",stars:"168",forks:"58",starup:"3"},{title:`HalseySpicy /

      Geeker-Admin`,owner:"HalseySpicy",name:"Geeker-Admin",avatar:"https://avatars.githubusercontent.com/u/62537573?s=40&v=4",path:"/HalseySpicy/Geeker-Admin",link:"https://github.com/HalseySpicy/Geeker-Admin",description:"✨✨✨ Geeker Admin，基于 Vue3.4、TypeScript、Vite5、Pinia、Element-Plus 开源的一套后台管理框架。",language:"Vue",stars:"6,528",forks:"1,362",starup:"7"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,120",forks:"875",starup:"3"},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",link:"https://github.com/ElemeFE/element",description:"A Vue.js 2.0 UI Toolkit for Web",language:"Vue",stars:"53,981",forks:"14,622",starup:"3"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,601",forks:"216",starup:"17"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,394",forks:"1,404",starup:"2"},{title:`wilfredinni /

      python-cheatsheet`,owner:"wilfredinni",name:"python-cheatsheet",avatar:"https://avatars.githubusercontent.com/u/23016174?s=40&v=4",path:"/wilfredinni/python-cheatsheet",link:"https://github.com/wilfredinni/python-cheatsheet",description:"All-inclusive Python cheatsheet",language:"Vue",stars:"4,064",forks:"1,247",starup:"4"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,691",forks:"3,706",starup:"6"},{title:`dcloudio /

      hello-uniapp`,owner:"dcloudio",name:"hello-uniapp",avatar:"https://avatars.githubusercontent.com/u/23413974?s=40&v=4",path:"/dcloudio/hello-uniapp",link:"https://github.com/dcloudio/hello-uniapp",description:"uni-app框架演示示例",language:"Vue",stars:"2,647",forks:"1,621",starup:"1"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,656",forks:"315",starup:"25"},{title:`macrozheng /

      mall-app-web`,owner:"macrozheng",name:"mall-app-web",avatar:"https://avatars.githubusercontent.com/u/15903809?s=40&v=4",path:"/macrozheng/mall-app-web",link:"https://github.com/macrozheng/mall-app-web",description:"mall-app-web是一个电商系统的移动端项目，基于uni-app实现。主要包括首页门户、商品推荐、商品搜索、商品展示、购物车、订单流程、会员中心、客户服务、帮助中心等功能。",language:"Vue",stars:"603",forks:"410",starup:"1"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,394",forks:"2,765",starup:"8"},{title:`weilanwl /

      coloruicss`,owner:"weilanwl",name:"coloruicss",avatar:"https://avatars.githubusercontent.com/u/24801605?s=40&v=4",path:"/weilanwl/coloruicss",link:"https://github.com/weilanwl/coloruicss",description:"鲜亮的高饱和色彩，专注视觉的小程序组件库",language:"Vue",stars:"12,069",forks:"2,206",starup:"2"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,454",forks:"1,051",starup:"4"},{title:`woai3c /

      visual-drag-demo`,owner:"woai3c",name:"visual-drag-demo",avatar:"https://avatars.githubusercontent.com/u/22117876?s=40&v=4",path:"/woai3c/visual-drag-demo",link:"https://github.com/woai3c/visual-drag-demo",description:"一个低代码（可视化拖拽）教学项目",language:"Vue",stars:"4,955",forks:"1,462",starup:"5"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,903",forks:"494",starup:"6"},{title:`lyt-Top /

      vue-next-admin`,owner:"lyt-Top",name:"vue-next-admin",avatar:"https://avatars.githubusercontent.com/u/35559414?s=40&v=4",path:"/lyt-Top/vue-next-admin",link:"https://github.com/lyt-Top/vue-next-admin",description:"🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc 的后台开源免费模板库（vue2.x请切换vue-prev-admin分支）",language:"Vue",stars:"1,880",forks:"316",starup:"2"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,483",forks:"1,407",starup:"2"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,710",forks:"145",starup:"6"}],"Vue-weekly":[{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,274",forks:"206",starup:"173"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,822",forks:"248",starup:"50"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,123",forks:"555",starup:"188"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,291",forks:"698",starup:"57"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,756",forks:"761",starup:"60"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,237",forks:"1,025",starup:"138"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,621",forks:"11,167",starup:"91"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,169",forks:"731",starup:"65"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,691",forks:"399",starup:"37"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"118",forks:"1,208",starup:"2"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,128",forks:"173",starup:"77"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,634",forks:"633",starup:"52"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"777",forks:"189",starup:"33"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,710",forks:"145",starup:"45"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,092",forks:"646",starup:"28"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,394",forks:"2,765",starup:"81"},{title:`umicro /

      uView2.0`,owner:"umicro",name:"uView2.0",avatar:"https://avatars.githubusercontent.com/u/40595755?s=40&v=4",path:"/umicro/uView2.0",link:"https://github.com/umicro/uView2.0",description:"uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",language:"Vue",stars:"1,447",forks:"436",starup:"15"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,173",forks:"478",starup:"32"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"248",forks:"3",starup:"19"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"210",forks:"33",starup:"46"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,357",forks:"1,894",starup:"1,081"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,394",forks:"1,404",starup:"26"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,169",forks:"653",starup:"17"},{title:`Akryum /

      vue-virtual-scroller`,owner:"Akryum",name:"vue-virtual-scroller",avatar:"https://avatars.githubusercontent.com/u/2798204?s=40&v=4",path:"/Akryum/vue-virtual-scroller",link:"https://github.com/Akryum/vue-virtual-scroller",description:"⚡️ Blazing fast scrolling for any amount of data",language:"Vue",stars:"9,120",forks:"875",starup:"22"},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",link:"https://github.com/nuxt/ui",description:"A UI Library for Modern Web Apps, powered by Vue & Tailwind CSS.",language:"Vue",stars:"3,410",forks:"375",starup:"25"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,837",forks:"1,907",starup:"4,885"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,357",forks:"1,894",starup:"5,730"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,237",forks:"1,025",starup:"649"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,716",forks:"1,212",starup:"529"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,814",forks:"4,108",starup:"42"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,656",forks:"315",starup:"650"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"429",forks:"77",starup:"158"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"266",forks:"40",starup:"115"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,483",forks:"1,407",starup:"151"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"118",forks:"1,208",starup:"5"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,274",forks:"206",starup:"283"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,756",forks:"761",starup:"175"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"777",forks:"189",starup:"104"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"768",forks:"67",starup:"162"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"981",forks:"103",starup:"596"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,691",forks:"3,706",starup:"147"},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",link:"https://github.com/requarks/wiki",description:"Wiki.js | A modern and powerful wiki app built on Node.js",language:"Vue",stars:"23,647",forks:"2,582",starup:"245"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,124",forks:"96",starup:"705"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,454",forks:"1,051",starup:"106"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,128",forks:"173",starup:"312"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,528",forks:"96",starup:"216"},{title:`YunYouJun /

      cook`,owner:"YunYouJun",name:"cook",avatar:"https://avatars.githubusercontent.com/u/25154432?s=40&v=4",path:"/YunYouJun/cook",link:"https://github.com/YunYouJun/cook",description:"🍲 好的，今天我们来做菜！OK, Let's Cook!",language:"Vue",stars:"4,694",forks:"285",starup:"258"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,634",forks:"633",starup:"175"},{title:`xunlu129 /

      teriteri-client`,owner:"xunlu129",name:"teriteri-client",avatar:"https://avatars.githubusercontent.com/u/122542082?s=40&v=4",path:"/xunlu129/teriteri-client",link:"https://github.com/xunlu129/teriteri-client",description:"一个基于 vue3 搭建的视频网站平台客户端",language:"Vue",stars:"227",forks:"38",starup:"109"},{title:`yudaocode /

      yudao-ui-admin-vue3`,owner:"yudaocode",name:"yudao-ui-admin-vue3",avatar:"https://avatars.githubusercontent.com/u/2015545?s=40&v=4",path:"/yudaocode/yudao-ui-admin-vue3",link:"https://github.com/yudaocode/yudao-ui-admin-vue3",description:"芋道管理后台，基于 Vue3 + Element Plus 实现，支持 RBAC 动态权限、数据权限、SaaS 多租户、Flowable 工作流、三方登录、支付、短信、商城、CRM、ERP 等功能。",language:"Vue",stars:"1,173",forks:"478",starup:"130"}]},rt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},st=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=J({__name:"index",setup(x){const p=T("daily"),e=T("JavaScript"),h=T([]),t=T("list");function k(g){return g.sort((n,s)=>r(s.starup)-r(n.starup))}j([p,e],()=>{h.value=k(nt[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:f}=Y();return(g,n)=>{const s=_,d=N,v=D,w=F,i=$("LazyImage"),a=G,o=O,A=q,C=at,E=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(s,{modelValue:u(p),"onUpdate:modelValue":n[0]||(n[0]=m=>P(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":n[1]||(n[1]=m=>P(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":n[2]||(n[2]=m=>P(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(K,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",rt,[st,(l(!0),S(Q,null,X(u(h),(m,W)=>(l(),V(A,{key:W,index:W,repo:m,onMouseenter:u(f)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(C,{key:1,data:u(h)},null,8,["data"])):(l(),V(E,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
