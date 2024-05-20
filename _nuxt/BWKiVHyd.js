import{_ as O}from"./CTeDUfGu.js";import{_ as R}from"./BoQUo7L7.js";import{_ as F}from"./cE8hOERf.js";import E from"./DIk5KjG_.js";import{_ as N,a as G}from"./ChXnBxlG.js";import{_ as q}from"./CCCRSDv2.js";import{s as U,u as z,a as W,b as B,i as H,c as K}from"./CiYrzCy3.js";import{d as L,s as n}from"./CYcXzR8Z.js";import{n as P,q as I,h as J,o as l,c as S,s as _,r as T,u as $,b as c,w as y,T as Y,v as u,x as j,F as X,y as Q,z as V,a as Z}from"./BvcNHeKZ.js";import{l as tt}from"./p2-M2djV.js";import"./Cw8OXGkC.js";import"./Ci_L-_yb.js";import"./BQkc-AXV.js";import"./BMQdrn0-.js";const at=P({__name:"Chart",props:{data:{}},setup(x){const p=x,{data:e}=I(p),h=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(U),t=z("仓库飙升榜",h);function f(s){const r=L(s);r.sort((a,o)=>{const A=n(a.starup)+n(a.stars)+n(a.forks),C=n(o.starup)+n(o.stars)+n(o.forks);return A-C});const[d,v,w,i]=r.reduce((a,o)=>(a[0].push(n(o.stars)),a[1].push(n(o.forks)),a[2].push(n(o.starup)),a[3].push(`${o.owner}/${o.name}`),a),[[],[],[],[]]);t.value.yAxis.data=i,t.value.series[0].data=d,t.value.series[1].data=v,t.value.series[2].data=w}const{domRef:k}=W(t,B);J(e,()=>{f(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,r)=>(l(),S("div",{ref_key:"chartRef",ref:k,style:_({height:g})},null,4))}}),et=P({__name:"StarupChart",props:{data:{}},setup(x){const p=x,{data:e}=I(p),t=z("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:f}=W(t,B);function k(s){const r=L(s);r.sort((i,a)=>n(i.starup)-n(a.starup));const d=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],v=[],w=r.map((i,a)=>(v.push(`${i.owner}/${i.name}`),{value:n(i.starup),name:`${i.owner}/${i.name}`,itemStyle:H(d[a%d.length])}));t.value.series[0].data=w,t.value.yAxis.data=v}J(e,()=>{k(e.value)},{deep:!0,immediate:!0});const g=`${100+e.value.length*40}px`;return(s,r)=>(l(),S("div",{ref_key:"chartRef",ref:f,style:_({height:g})},null,4))}}),st={"JavaScript-daily":[{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,388",forks:"2,887",starup:"316"},{title:`brave /

      brave-browser`,owner:"brave",name:"brave-browser",avatar:"https://avatars.githubusercontent.com/u/39539223?s=40&v=4",path:"/brave/brave-browser",link:"https://github.com/brave/brave-browser",description:"Brave browser for Android, iOS, Linux, macOS, Windows.",language:"JavaScript",stars:"16,763",forks:"2,168",starup:"4"},{title:`jonasschmedtmann /

      ultimate-react-course`,owner:"jonasschmedtmann",name:"ultimate-react-course",avatar:"https://avatars.githubusercontent.com/u/18718850?s=40&v=4",path:"/jonasschmedtmann/ultimate-react-course",link:"https://github.com/jonasschmedtmann/ultimate-react-course",description:"Starter files, final projects, and FAQ for my Ultimate React course",language:"JavaScript",stars:"2,530",forks:"1,497",starup:"6"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,592",forks:"2,351",starup:"147"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,336",forks:"15,110",starup:"44"},{title:`hiteshchoudhary /

      chai-backend`,owner:"hiteshchoudhary",name:"chai-backend",avatar:"https://avatars.githubusercontent.com/u/11613311?s=40&v=4",path:"/hiteshchoudhary/chai-backend",link:"https://github.com/hiteshchoudhary/chai-backend",description:"A video series on chai aur code youtube channel",language:"JavaScript",stars:"3,348",forks:"510",starup:"15"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,409",forks:"303",starup:"142"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"548",forks:"94",starup:"20"},{title:`sindresorhus /

      create-dmg`,owner:"sindresorhus",name:"create-dmg",avatar:"https://avatars.githubusercontent.com/u/170270?s=40&v=4",path:"/sindresorhus/create-dmg",link:"https://github.com/sindresorhus/create-dmg",description:"Create a good-looking DMG for your macOS app in seconds",language:"JavaScript",stars:"4,544",forks:"189",starup:"107"},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",link:"https://github.com/SillyTavern/SillyTavern",description:"LLM Frontend for Power Users.",language:"JavaScript",stars:"6,215",forks:"1,887",starup:"49"},{title:`cmliu /

      WorkerVless2sub`,owner:"cmliu",name:"WorkerVless2sub",avatar:"https://avatars.githubusercontent.com/u/24787744?s=40&v=4",path:"/cmliu/WorkerVless2sub",link:"https://github.com/cmliu/WorkerVless2sub",description:"这个是一个将 Cloudflare Workers - VLESS 搭配 自建优选域名 的 订阅生成器",language:"JavaScript",stars:"1,850",forks:"2,559",starup:"17"},{title:`100xdevs-cohort-2 /

      assignments`,owner:"100xdevs-cohort-2",name:"assignments",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/100xdevs-cohort-2/assignments",link:"https://github.com/100xdevs-cohort-2/assignments",description:"",language:"JavaScript",stars:"2,143",forks:"3,438",starup:"12"},{title:`SuhailTechInfo /

      Suhail-Md`,owner:"SuhailTechInfo",name:"Suhail-Md",avatar:"https://avatars.githubusercontent.com/u/104565822?s=40&v=4",path:"/SuhailTechInfo/Suhail-Md",link:"https://github.com/SuhailTechInfo/Suhail-Md",description:"meet Suhail-Md, Your All-in-One WhatsApp Excitement Buddy! Enjoy a thrilling messaging experience like never before. Suhail-Md brings a world of excitement and joy to your chats ✨🤖",language:"JavaScript",stars:"2,573",forks:"10,198",starup:"17"},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",link:"https://github.com/MHSanaei/3x-ui",description:"Xray panel supporting multi-protocol multi-user expire day & traffic & ip limit (Vmess & Vless & Trojan & ShadowSocks & Wireguard)",language:"JavaScript",stars:"8,248",forks:"1,761",starup:"22"},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",link:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"Source Code for Sigma Web Development Course",language:"JavaScript",stars:"4,418",forks:"1,364",starup:"17"},{title:`laravel /

      breeze-next`,owner:"laravel",name:"breeze-next",avatar:"https://avatars.githubusercontent.com/u/463230?s=40&v=4",path:"/laravel/breeze-next",link:"https://github.com/laravel/breeze-next",description:"An application / authentication starter kit frontend in Next.js for Laravel Breeze.",language:"JavaScript",stars:"1,286",forks:"335",starup:"5"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,642",forks:"78,420",starup:"15"},{title:`pixeltris /

      TwitchAdSolutions`,owner:"pixeltris",name:"TwitchAdSolutions",avatar:"https://avatars.githubusercontent.com/u/6952411?s=40&v=4",path:"/pixeltris/TwitchAdSolutions",link:"https://github.com/pixeltris/TwitchAdSolutions",description:"",language:"JavaScript",stars:"6,674",forks:"414",starup:"8"},{title:`adrianhajdin /

      brainwave`,owner:"adrianhajdin",name:"brainwave",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/brainwave",link:"https://github.com/adrianhajdin/brainwave",description:"Learn to create modern websites with sleek parallax effects and bento box layouts. This course covers everything from stylish UI design to mobile-first principles while strengthening your React.js and Tailwind CSS skills.",language:"JavaScript",stars:"958",forks:"262",starup:"5"},{title:`prabathLK /

      PRABATH-MD`,owner:"prabathLK",name:"PRABATH-MD",avatar:"https://avatars.githubusercontent.com/u/106251140?s=40&v=4",path:"/prabathLK/PRABATH-MD",link:"https://github.com/prabathLK/PRABATH-MD",description:"🇱🇰 Multi-device whatsapp bot 🎉",language:"JavaScript",stars:"762",forks:"3,054",starup:"5"},{title:`catvod /

      CatVodOpen`,owner:"catvod",name:"CatVodOpen",avatar:"https://avatars.githubusercontent.com/u/88956744?s=40&v=4",path:"/catvod/CatVodOpen",link:"https://github.com/catvod/CatVodOpen",description:"Open version of catvod.",language:"JavaScript",stars:"2,584",forks:"679",starup:"6"},{title:`schlagmichdoch /

      PairDrop`,owner:"schlagmichdoch",name:"PairDrop",avatar:"https://avatars.githubusercontent.com/u/52242352?s=40&v=4",path:"/schlagmichdoch/PairDrop",link:"https://github.com/schlagmichdoch/PairDrop",description:"PairDrop: Local file sharing in your browser. Inspired by Apple's AirDrop. Fork of Snapdrop.",language:"JavaScript",stars:"3,354",forks:"180",starup:"32"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,348",forks:"35,129",starup:"26"},{title:`TheOdinProject /

      curriculum`,owner:"TheOdinProject",name:"curriculum",avatar:"https://avatars.githubusercontent.com/u/19835799?s=40&v=4",path:"/TheOdinProject/curriculum",link:"https://github.com/TheOdinProject/curriculum",description:"The open curriculum for learning web development",language:"JavaScript",stars:"8,878",forks:"12,314",starup:"3"},{title:`end-4 /

      dots-hyprland`,owner:"end-4",name:"dots-hyprland",avatar:"https://avatars.githubusercontent.com/u/97237370?s=40&v=4",path:"/end-4/dots-hyprland",link:"https://github.com/end-4/dots-hyprland",description:"Modern, feature-rich and accessible desktop configuration.",language:"JavaScript",stars:"2,653",forks:"167",starup:"8"}],"JavaScript-weekly":[{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,409",forks:"303",starup:"548"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,935",forks:"3,355",starup:"287"},{title:`bgstaal /

      multipleWindow3dScene`,owner:"bgstaal",name:"multipleWindow3dScene",avatar:"https://avatars.githubusercontent.com/u/165258?s=40&v=4",path:"/bgstaal/multipleWindow3dScene",link:"https://github.com/bgstaal/multipleWindow3dScene",description:'A quick example of how one can "synchronize" a 3d scene across multiple windows using three.js and localStorage',language:"JavaScript",stars:"16,176",forks:"2,547",starup:"156"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,235",forks:"45,481",starup:"738"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,104",starup:"220"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,496",forks:"1,500",starup:"912"},{title:`alyssaxuu /

      screenity`,owner:"alyssaxuu",name:"screenity",avatar:"https://avatars.githubusercontent.com/u/7581348?s=40&v=4",path:"/alyssaxuu/screenity",link:"https://github.com/alyssaxuu/screenity",description:"The free and privacy-friendly screen recorder with no limits 🎥",language:"JavaScript",stars:"10,820",forks:"824",starup:"214"},{title:`Lunakepio /

      Mario-Kart-3.js`,owner:"Lunakepio",name:"Mario-Kart-3.js",avatar:"https://avatars.githubusercontent.com/u/42719638?s=40&v=4",path:"/Lunakepio/Mario-Kart-3.js",link:"https://github.com/Lunakepio/Mario-Kart-3.js",description:"",language:"JavaScript",stars:"4,207",forks:"939",starup:"191"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,367",forks:"25,969",starup:"276"},{title:`Dooy /

      chatgpt-web-midjourney-proxy`,owner:"Dooy",name:"chatgpt-web-midjourney-proxy",avatar:"https://avatars.githubusercontent.com/u/3765401?s=40&v=4",path:"/Dooy/chatgpt-web-midjourney-proxy",link:"https://github.com/Dooy/chatgpt-web-midjourney-proxy",description:"chatgpt web, midjourney, gpts,tts, whisper,suno-v3 一套ui全搞定；同时支持 Web / PWA / Linux / Win / MacOS 平台",language:"JavaScript",stars:"3,551",forks:"923",starup:"120"},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",link:"https://github.com/mrdoob/three.js",description:"JavaScript 3D Library.",language:"JavaScript",stars:"99,348",forks:"35,129",starup:"188"},{title:`twbs /

      bootstrap`,owner:"twbs",name:"bootstrap",avatar:"https://avatars.githubusercontent.com/u/98681?s=40&v=4",path:"/twbs/bootstrap",link:"https://github.com/twbs/bootstrap",description:"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",language:"JavaScript",stars:"167,642",forks:"78,420",starup:"108"},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",link:"https://github.com/mozilla/pdf.js",description:"PDF Reader in JavaScript",language:"JavaScript",stars:"46,545",forks:"9,736",starup:"101"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,386",forks:"1,120",starup:"45"},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",link:"https://github.com/usebruno/bruno",description:"Opensource IDE For Exploring and Testing Api's (lightweight alternative to postman/insomnia)",language:"JavaScript",stars:"20,243",forks:"946",starup:"381"},{title:`jhu-ep-coursera /

      fullstack-course4`,owner:"jhu-ep-coursera",name:"fullstack-course4",avatar:"https://avatars.githubusercontent.com/u/4999744?s=40&v=4",path:"/jhu-ep-coursera/fullstack-course4",link:"https://github.com/jhu-ep-coursera/fullstack-course4",description:"Example code for HTML, CSS, and Javascript for Web Developers Coursera Course",language:"JavaScript",stars:"10,497",forks:"11,752",starup:"32"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"204",forks:"308",starup:"40"},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",link:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"24 Lessons, 12 Weeks, Get Started as a Web Developer",language:"JavaScript",stars:"81,689",forks:"12,205",starup:"134"},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",link:"https://github.com/songquanpeng/one-api",description:"OpenAI 接口管理 & 分发系统，支持 Azure、Anthropic Claude、Google PaLM 2 & Gemini、智谱 ChatGLM、百度文心一言、讯飞星火认知、阿里通义千问、360 智脑以及腾讯混元，可用于二次分发管理 key，仅单可执行文件，已打包好 Docker 镜像，一键部署，开箱即用. OpenAI key management & redistribution system, using a single API for all LLMs, and features an English UI.",language:"JavaScript",stars:"14,625",forks:"3,395",starup:"341"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,009",forks:"213",starup:"326"},{title:`zizifn /

      edgetunnel`,owner:"zizifn",name:"edgetunnel",avatar:"https://avatars.githubusercontent.com/u/1803942?s=40&v=4",path:"/zizifn/edgetunnel",link:"https://github.com/zizifn/edgetunnel",description:"Running V2ray inside edge/serverless runtime",language:"JavaScript",stars:"5,336",forks:"15,110",starup:"114"},{title:`swapnilsparsh /

      30DaysOfJavaScript`,owner:"swapnilsparsh",name:"30DaysOfJavaScript",avatar:"https://avatars.githubusercontent.com/u/69387608?s=40&v=4",path:"/swapnilsparsh/30DaysOfJavaScript",link:"https://github.com/swapnilsparsh/30DaysOfJavaScript",description:"Projects made during the 30 days of the JavaScript challenge",language:"JavaScript",stars:"804",forks:"578",starup:"29"},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",link:"https://github.com/plankanban/planka",description:"The realtime kanban board for workgroups built with React and Redux.",language:"JavaScript",stars:"6,742",forks:"648",starup:"164"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,601",forks:"5,865",starup:"210"},{title:`timqian /

      chinese-independent-blogs`,owner:"timqian",name:"chinese-independent-blogs",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/timqian/chinese-independent-blogs",link:"https://github.com/timqian/chinese-independent-blogs",description:"中文独立博客列表",language:"JavaScript",stars:"18,592",forks:"2,351",starup:"110"}],"JavaScript-monthly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",link:"https://github.com/drawdb-io/drawdb",description:"Free, simple, and intuitive online database design tool and SQL generator.",language:"JavaScript",stars:"11,080",forks:"716",starup:"5,075"},{title:`NaiboWang /

      EasySpider`,owner:"NaiboWang",name:"EasySpider",avatar:"https://avatars.githubusercontent.com/u/30287768?s=40&v=4",path:"/NaiboWang/EasySpider",link:"https://github.com/NaiboWang/EasySpider",description:"A visual no-code/code-free web crawler/spider易采集：一个可视化浏览器自动化测试/数据采集/爬虫软件，可以无代码图形化的设计和执行爬虫任务。别名：ServiceWrapper面向Web应用的智能化服务封装系统。",language:"JavaScript",stars:"24,388",forks:"2,887",starup:"2,921"},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",link:"https://github.com/WhiskeySockets/Baileys",description:"Lightweight full-featured typescript/javascript WhatsApp Web API",language:"JavaScript",stars:"2,712",forks:"971",starup:"369"},{title:`adrianhajdin /

      aora`,owner:"adrianhajdin",name:"aora",avatar:"https://avatars.githubusercontent.com/u/24898559?s=40&v=4",path:"/adrianhajdin/aora",link:"https://github.com/adrianhajdin/aora",description:"Build your first mobile application",language:"JavaScript",stars:"548",forks:"94",starup:"334"},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",link:"https://github.com/Mintplex-Labs/anything-llm",description:"The all-in-one Desktop & Docker AI application with full RAG and AI Agent capabilities.",language:"JavaScript",stars:"14,496",forks:"1,500",starup:"2,934"},{title:`bia-pain-bache /

      BPB-Worker-Panel`,owner:"bia-pain-bache",name:"BPB-Worker-Panel",avatar:"https://avatars.githubusercontent.com/u/155004885?s=40&v=4",path:"/bia-pain-bache/BPB-Worker-Panel",link:"https://github.com/bia-pain-bache/BPB-Worker-Panel",description:"A GUI Panel providing Worker subscriptions and Fragment settings and configs, providing configs for cross-platform clients using (singbox-core and xray-core)",language:"JavaScript",stars:"1,150",forks:"6,204",starup:"932"},{title:`txstc55 /

      ugly-avatar`,owner:"txstc55",name:"ugly-avatar",avatar:"https://avatars.githubusercontent.com/u/13168188?s=40&v=4",path:"/txstc55/ugly-avatar",link:"https://github.com/txstc55/ugly-avatar",description:"",language:"JavaScript",stars:"2,009",forks:"213",starup:"990"},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/8445?s=40&v=4",path:"/facebook/react",link:"https://github.com/facebook/react",description:"The library for web and native user interfaces.",language:"JavaScript",stars:"223,235",forks:"45,481",starup:"2,058"},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",link:"https://github.com/vercel/next.js",description:"The React Framework",language:"JavaScript",stars:"121,367",forks:"25,969",starup:"1,189"},{title:`lencx /

      Noi`,owner:"lencx",name:"Noi",avatar:"https://avatars.githubusercontent.com/u/16164244?s=40&v=4",path:"/lencx/Noi",link:"https://github.com/lencx/Noi",description:"🚀 Power Your World with AI - Explore, Extend, Empower.",language:"JavaScript",stars:"4,409",forks:"303",starup:"909"},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",link:"https://github.com/evershopcommerce/evershop",description:"🛍️ NodeJS E-commerce Platform",language:"JavaScript",stars:"3,608",forks:"951",starup:"396"},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",link:"https://github.com/poteto/hiring-without-whiteboards",description:"⭐️ Companies that don't have a broken hiring process",language:"JavaScript",stars:"41,935",forks:"3,355",starup:"468"},{title:`mermaid-js /

      mermaid`,owner:"mermaid-js",name:"mermaid",avatar:"https://avatars.githubusercontent.com/u/5837277?s=40&v=4",path:"/mermaid-js/mermaid",link:"https://github.com/mermaid-js/mermaid",description:"Generation of diagrams like flowcharts or sequence diagrams from text in a similar manner as markdown",language:"JavaScript",stars:"67,601",forks:"5,865",starup:"845"},{title:`jellyfin /

      jellyfin-web`,owner:"jellyfin",name:"jellyfin-web",avatar:"https://avatars.githubusercontent.com/u/3450688?s=40&v=4",path:"/jellyfin/jellyfin-web",link:"https://github.com/jellyfin/jellyfin-web",description:"Web Client for Jellyfin",language:"JavaScript",stars:"2,062",forks:"1,104",starup:"258"},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",link:"https://github.com/GitSquared/edex-ui",description:"A cross-platform, customizable science fiction terminal emulator with advanced monitoring & touchscreen support.",language:"JavaScript",stars:"40,013",forks:"2,504",starup:"274"},{title:`kkevsekk1 /

      AutoX`,owner:"kkevsekk1",name:"AutoX",avatar:"https://avatars.githubusercontent.com/u/16631944?s=40&v=4",path:"/kkevsekk1/AutoX",link:"https://github.com/kkevsekk1/AutoX",description:"A UiAutomator on android, does not need root access(安卓平台上的JavaScript自动化工具)",language:"JavaScript",stars:"6,272",forks:"1,562",starup:"317"},{title:`academind /

      react-complete-guide-course-resources`,owner:"academind",name:"react-complete-guide-course-resources",avatar:"https://avatars.githubusercontent.com/u/28806196?s=40&v=4",path:"/academind/react-complete-guide-course-resources",link:"https://github.com/academind/react-complete-guide-course-resources",description:"React - The Complete Guide Course Resources (Code, Attachments, Slides)",language:"JavaScript",stars:"1,386",forks:"1,120",starup:"190"},{title:`spicetify /

      spicetify-cli`,owner:"spicetify",name:"spicetify-cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/spicetify-cli",link:"https://github.com/spicetify/spicetify-cli",description:"Command-line tool to customize Spotify client. Supports Windows, MacOS, and Linux.",language:"JavaScript",stars:"17,069",forks:"698",starup:"528"},{title:`gaotianliuyun /

      gao`,owner:"gaotianliuyun",name:"gao",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/gaotianliuyun/gao",link:"https://github.com/gaotianliuyun/gao",description:"FongMi影视和tvbox配置文件，如果喜欢，请Fork自用。使用前请仔细阅读仓库说明，一旦使用将被视为你已了解。",language:"JavaScript",stars:"4,442",forks:"1,820",starup:"374"},{title:`lucide-icons /

      lucide`,owner:"lucide-icons",name:"lucide",avatar:"https://avatars.githubusercontent.com/u/11825403?s=40&v=4",path:"/lucide-icons/lucide",link:"https://github.com/lucide-icons/lucide",description:"Beautiful & consistent icon toolkit made by the community. Open-source project and a fork of Feather Icons.",language:"JavaScript",stars:"8,946",forks:"380",starup:"442"},{title:`chartjs /

      Chart.js`,owner:"chartjs",name:"Chart.js",avatar:"https://avatars.githubusercontent.com/u/6757853?s=40&v=4",path:"/chartjs/Chart.js",link:"https://github.com/chartjs/Chart.js",description:"Simple HTML5 Charts using the <canvas> tag",language:"JavaScript",stars:"63,620",forks:"11,866",starup:"313"},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",link:"https://github.com/louislam/uptime-kuma",description:"A fancy self-hosted monitoring tool",language:"JavaScript",stars:"50,498",forks:"4,523",starup:"1,519"},{title:`safak /

      react-firebase-chat`,owner:"safak",name:"react-firebase-chat",avatar:"https://avatars.githubusercontent.com/u/1486366?s=40&v=4",path:"/safak/react-firebase-chat",link:"https://github.com/safak/react-firebase-chat",description:"",language:"JavaScript",stars:"204",forks:"308",starup:"138"},{title:`alyssaxuu /

      screenity`,owner:"alyssaxuu",name:"screenity",avatar:"https://avatars.githubusercontent.com/u/7581348?s=40&v=4",path:"/alyssaxuu/screenity",link:"https://github.com/alyssaxuu/screenity",description:"The free and privacy-friendly screen recorder with no limits 🎥",language:"JavaScript",stars:"10,820",forks:"824",starup:"603"},{title:`imputnet /

      cobalt`,owner:"imputnet",name:"cobalt",avatar:"https://avatars.githubusercontent.com/u/71202418?s=40&v=4",path:"/imputnet/cobalt",link:"https://github.com/imputnet/cobalt",description:"save what you love",language:"JavaScript",stars:"4,446",forks:"326",starup:"1,216"}],"TypeScript-daily":[{title:`adrianhajdin /

      portfolio`,owner:"adrianhajdin",name:"portfolio",avatar:"https://avatars.githubusercontent.com/u/151519281?s=40&v=4",path:"/adrianhajdin/portfolio",link:"https://github.com/adrianhajdin/portfolio",description:"Modern & Minimal JS Mastery Portfolio",language:"TypeScript",stars:"475",forks:"92",starup:"179"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,605",forks:"287",starup:"263"},{title:`rashadphz /

      farfalle`,owner:"rashadphz",name:"farfalle",avatar:"https://avatars.githubusercontent.com/u/20783686?s=40&v=4",path:"/rashadphz/farfalle",link:"https://github.com/rashadphz/farfalle",description:"🔍 ai search engine - self-host with local or cloud LLMs",language:"TypeScript",stars:"554",forks:"47",starup:"294"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,884",forks:"227",starup:"332"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,135",forks:"909",starup:"93"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,358",forks:"1,598",starup:"81"},{title:`solidSpoon /

      DashPlayer`,owner:"solidSpoon",name:"DashPlayer",avatar:"https://avatars.githubusercontent.com/u/39454841?s=40&v=4",path:"/solidSpoon/DashPlayer",link:"https://github.com/solidSpoon/DashPlayer",description:"为英语学习者量身打造的视频播放器，助你通过观看视频、沉浸真实语境，轻松提升英语水平。#美剧 #播放器 #听力",language:"TypeScript",stars:"765",forks:"31",starup:"106"},{title:`webprodigies /

      plura-production`,owner:"webprodigies",name:"plura-production",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/plura-production",link:"https://github.com/webprodigies/plura-production",description:"",language:"TypeScript",stars:"1,247",forks:"588",starup:"3"},{title:`webprodigies /

      fuzzie-production`,owner:"webprodigies",name:"fuzzie-production",avatar:"https://avatars.githubusercontent.com/u/145509080?s=40&v=4",path:"/webprodigies/fuzzie-production",link:"https://github.com/webprodigies/fuzzie-production",description:"",language:"TypeScript",stars:"402",forks:"235",starup:"2"},{title:`upscayl /

      upscayl`,owner:"upscayl",name:"upscayl",avatar:"https://avatars.githubusercontent.com/u/25067102?s=40&v=4",path:"/upscayl/upscayl",link:"https://github.com/upscayl/upscayl",description:"🆙 Upscayl - #1 Free and Open Source AI Image Upscaler for Linux, MacOS and Windows.",language:"TypeScript",stars:"27,006",forks:"1,194",starup:"26"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,353",forks:"7,355",starup:"65"},{title:`Hiram-Wong /

      ZyPlayer`,owner:"Hiram-Wong",name:"ZyPlayer",avatar:"https://avatars.githubusercontent.com/u/30908279?s=40&v=4",path:"/Hiram-Wong/ZyPlayer",link:"https://github.com/Hiram-Wong/ZyPlayer",description:"跨平台桌面端视频资源播放器,免费高颜值.",language:"TypeScript",stars:"3,745",forks:"514",starup:"9"},{title:`honojs /

      hono`,owner:"honojs",name:"hono",avatar:"https://avatars.githubusercontent.com/u/10682?s=40&v=4",path:"/honojs/hono",link:"https://github.com/honojs/hono",description:"Web Framework built on Web Standards",language:"TypeScript",stars:"15,923",forks:"419",starup:"41"},{title:`Unleash /

      unleash`,owner:"Unleash",name:"unleash",avatar:"https://avatars.githubusercontent.com/u/158948?s=40&v=4",path:"/Unleash/unleash",link:"https://github.com/Unleash/unleash",description:"Open-source feature management solution built for developers.",language:"TypeScript",stars:"10,385",forks:"649",starup:"24"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,384",forks:"116",starup:"50"},{title:`joschan21 /

      quill`,owner:"joschan21",name:"quill",avatar:"https://avatars.githubusercontent.com/u/101584158?s=40&v=4",path:"/joschan21/quill",link:"https://github.com/joschan21/quill",description:"Quill - A Modern SaaS-Platform Built With Next.js 13",language:"TypeScript",stars:"1,716",forks:"448",starup:"4"},{title:`expo /

      react-conf-app`,owner:"expo",name:"react-conf-app",avatar:"https://avatars.githubusercontent.com/u/6534400?s=40&v=4",path:"/expo/react-conf-app",link:"https://github.com/expo/react-conf-app",description:"",language:"TypeScript",stars:"525",forks:"76",starup:"58"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,259",forks:"35,743",starup:"57"},{title:`joschan21 /

      digitalhippo`,owner:"joschan21",name:"digitalhippo",avatar:"https://avatars.githubusercontent.com/u/101584158?s=40&v=4",path:"/joschan21/digitalhippo",link:"https://github.com/joschan21/digitalhippo",description:"A Modern Fullstack E-Commerce Marketplace for Digital Products",language:"TypeScript",stars:"2,075",forks:"405",starup:"3"},{title:`vercel /

      nextjs-subscription-payments`,owner:"vercel",name:"nextjs-subscription-payments",avatar:"https://avatars.githubusercontent.com/u/5748289?s=40&v=4",path:"/vercel/nextjs-subscription-payments",link:"https://github.com/vercel/nextjs-subscription-payments",description:"Clone, deploy, and fully customize a SaaS subscription application with Next.js.",language:"TypeScript",stars:"5,464",forks:"1,123",starup:"8"},{title:`mifi /

      lossless-cut`,owner:"mifi",name:"lossless-cut",avatar:"https://avatars.githubusercontent.com/u/402547?s=40&v=4",path:"/mifi/lossless-cut",link:"https://github.com/mifi/lossless-cut",description:"The swiss army knife of lossless video/audio editing",language:"TypeScript",stars:"22,642",forks:"1,163",starup:"73"},{title:`joaokristani /

      Discord-Server-Cloner-2x`,owner:"joaokristani",name:"Discord-Server-Cloner-2x",avatar:"https://avatars.githubusercontent.com/u/136858930?s=40&v=4",path:"/joaokristani/Discord-Server-Cloner-2x",link:"https://github.com/joaokristani/Discord-Server-Cloner-2x",description:"A discord server cloner made for the infinite community",language:"TypeScript",stars:"777",forks:"4,816",starup:"4"},{title:`lyswhut /

      lx-music-mobile`,owner:"lyswhut",name:"lx-music-mobile",avatar:"https://avatars.githubusercontent.com/u/20365169?s=40&v=4",path:"/lyswhut/lx-music-mobile",link:"https://github.com/lyswhut/lx-music-mobile",description:"一个基于 React native 开发的音乐软件",language:"TypeScript",stars:"9,261",forks:"1,271",starup:"15"},{title:`MCSManager /

      MCSManager`,owner:"MCSManager",name:"MCSManager",avatar:"https://avatars.githubusercontent.com/u/18360009?s=40&v=4",path:"/MCSManager/MCSManager",link:"https://github.com/MCSManager/MCSManager",description:"Free, Secure, Distributed, Modern Control Panel for Minecraft and Steam Game Servers.",language:"TypeScript",stars:"2,877",forks:"333",starup:"7"},{title:`Lissy93 /

      web-check`,owner:"Lissy93",name:"web-check",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/web-check",link:"https://github.com/Lissy93/web-check",description:"🕵️‍♂️ All-in-one OSINT tool for analysing any website",language:"TypeScript",stars:"19,173",forks:"1,433",starup:"16"}],"TypeScript-weekly":[{title:`alan2207 /

      bulletproof-react`,owner:"alan2207",name:"bulletproof-react",avatar:"https://avatars.githubusercontent.com/u/12713315?s=40&v=4",path:"/alan2207/bulletproof-react",link:"https://github.com/alan2207/bulletproof-react",description:"🛡️ ⚛️ A simple, scalable, and powerful architecture for building production ready React applications.",language:"TypeScript",stars:"24,313",forks:"2,269",starup:"1,251"},{title:`SOS-RS /

      frontend`,owner:"SOS-RS",name:"frontend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/frontend",link:"https://github.com/SOS-RS/frontend",description:"",language:"TypeScript",stars:"555",forks:"325",starup:"348"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,135",forks:"909",starup:"514"},{title:`ChatGPTNextWeb /

      ChatGPT-Next-Web`,owner:"ChatGPTNextWeb",name:"ChatGPT-Next-Web",avatar:"https://avatars.githubusercontent.com/u/16968934?s=40&v=4",path:"/ChatGPTNextWeb/ChatGPT-Next-Web",link:"https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web",description:"A cross-platform ChatGPT/Gemini UI (Web / PWA / Linux / Win / MacOS). 一键拥有你自己的跨平台 ChatGPT/Gemini 应用。",language:"TypeScript",stars:"70,156",forks:"56,238",starup:"1,022"},{title:`bepass-org /

      oblivion-desktop`,owner:"bepass-org",name:"oblivion-desktop",avatar:"https://avatars.githubusercontent.com/u/128790947?s=40&v=4",path:"/bepass-org/oblivion-desktop",link:"https://github.com/bepass-org/oblivion-desktop",description:"Oblivion Desktop - Unofficial Warp Client for Windows/Mac/Linux",language:"TypeScript",stars:"1,884",forks:"227",starup:"998"},{title:`CapSoftware /

      Cap`,owner:"CapSoftware",name:"Cap",avatar:"https://avatars.githubusercontent.com/u/33632126?s=40&v=4",path:"/CapSoftware/Cap",link:"https://github.com/CapSoftware/Cap",description:"Open source Loom alternative. Effortless, instant screen sharing.",language:"TypeScript",stars:"3,076",forks:"122",starup:"1,294"},{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,836",forks:"1,020",starup:"3,089"},{title:`SOS-RS /

      backend`,owner:"SOS-RS",name:"backend",avatar:"https://avatars.githubusercontent.com/u/29789354?s=40&v=4",path:"/SOS-RS/backend",link:"https://github.com/SOS-RS/backend",description:"Auxílio RS: Projetos de Resposta a Emergências por Chuvas e Alagamentos",language:"TypeScript",stars:"668",forks:"289",starup:"298"},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/65252264?s=40&v=4",path:"/makeplane/plane",link:"https://github.com/makeplane/plane",description:"🔥 🔥 🔥 Open Source JIRA, Linear and Asana Alternative. Plane helps you track your issues, epics, and product roadmaps in the simplest way possible.",language:"TypeScript",stars:"24,602",forks:"1,319",starup:"311"},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",link:"https://github.com/apache/superset",description:"Apache Superset is a Data Visualization and Data Exploration Platform",language:"TypeScript",stars:"59,503",forks:"12,719",starup:"439"},{title:`actions /

      attest-build-provenance`,owner:"actions",name:"attest-build-provenance",avatar:"https://avatars.githubusercontent.com/u/398027?s=40&v=4",path:"/actions/attest-build-provenance",link:"https://github.com/actions/attest-build-provenance",description:"Action for generating build provenance attestations for workflow artifacts",language:"TypeScript",stars:"76",forks:"33",starup:"26"},{title:`baptisteArno /

      typebot.io`,owner:"baptisteArno",name:"typebot.io",avatar:"https://avatars.githubusercontent.com/u/16015833?s=40&v=4",path:"/baptisteArno/typebot.io",link:"https://github.com/baptisteArno/typebot.io",description:"💬 Typebot is a powerful chatbot builder that you can self-host.",language:"TypeScript",stars:"5,116",forks:"1,371",starup:"141"},{title:`mifi /

      lossless-cut`,owner:"mifi",name:"lossless-cut",avatar:"https://avatars.githubusercontent.com/u/402547?s=40&v=4",path:"/mifi/lossless-cut",link:"https://github.com/mifi/lossless-cut",description:"The swiss army knife of lossless video/audio editing",language:"TypeScript",stars:"22,642",forks:"1,163",starup:"137"},{title:`taskforcesh /

      bullmq`,owner:"taskforcesh",name:"bullmq",avatar:"https://avatars.githubusercontent.com/u/14021523?s=40&v=4",path:"/taskforcesh/bullmq",link:"https://github.com/taskforcesh/bullmq",description:"BullMQ - Message Queue and Batch processing for NodeJS and Python based on Redis",language:"TypeScript",stars:"5,383",forks:"348",starup:"117"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,906",forks:"2,188",starup:"878"},{title:`mckaywrigley /

      chatbot-ui`,owner:"mckaywrigley",name:"chatbot-ui",avatar:"https://avatars.githubusercontent.com/u/29221284?s=40&v=4",path:"/mckaywrigley/chatbot-ui",link:"https://github.com/mckaywrigley/chatbot-ui",description:"AI chat for every model.",language:"TypeScript",stars:"26,659",forks:"7,355",starup:"185"},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",link:"https://github.com/expo/expo",description:"An open-source framework for making universal native apps with React. Expo runs on Android, iOS, and the web.",language:"TypeScript",stars:"29,654",forks:"4,703",starup:"242"},{title:`withastro /

      starlight`,owner:"withastro",name:"starlight",avatar:"https://avatars.githubusercontent.com/u/357379?s=40&v=4",path:"/withastro/starlight",link:"https://github.com/withastro/starlight",description:"🌟 Build beautiful, accessible, high-performance documentation websites with Astro",language:"TypeScript",stars:"3,802",forks:"415",starup:"127"},{title:`scalar /

      scalar`,owner:"scalar",name:"scalar",avatar:"https://avatars.githubusercontent.com/u/1577992?s=40&v=4",path:"/scalar/scalar",link:"https://github.com/scalar/scalar",description:"Beautiful API references from OpenAPI/Swagger files ✨",language:"TypeScript",stars:"4,384",forks:"116",starup:"496"},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",link:"https://github.com/hydralauncher/hydra",description:"Hydra is a game launcher with its own embedded bittorrent client and a self-managed repack scraper.",language:"TypeScript",stars:"7,971",forks:"1,098",starup:"1,684"},{title:`strapi /

      strapi`,owner:"strapi",name:"strapi",avatar:"https://avatars.githubusercontent.com/u/13311463?s=40&v=4",path:"/strapi/strapi",link:"https://github.com/strapi/strapi",description:"🚀 Strapi is the leading open-source headless CMS. It’s 100% JavaScript/TypeScript, fully customizable and developer-first.",language:"TypeScript",stars:"60,829",forks:"7,589",starup:"271"},{title:`lobehub /

      lobe-chat`,owner:"lobehub",name:"lobe-chat",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobe-chat",link:"https://github.com/lobehub/lobe-chat",description:"🤯 Lobe Chat - an open-source, modern-design LLMs/AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Bedrock / Azure / Mistral / Perplexity ), Multi-Modals (Vision/TTS) and plugin system. One-click FREE deployment of your private ChatGPT chat application.",language:"TypeScript",stars:"31,353",forks:"7,355",starup:"885"},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",link:"https://github.com/microsoft/playwright",description:"Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API.",language:"TypeScript",stars:"62,303",forks:"3,352",starup:"192"},{title:`ztjhz /

      BetterChatGPT`,owner:"ztjhz",name:"BetterChatGPT",avatar:"https://avatars.githubusercontent.com/u/59118459?s=40&v=4",path:"/ztjhz/BetterChatGPT",link:"https://github.com/ztjhz/BetterChatGPT",description:"An amazing UI for OpenAI's ChatGPT (Website + Windows + MacOS + Linux)",language:"TypeScript",stars:"7,627",forks:"2,586",starup:"60"},{title:`remix-run /

      react-router`,owner:"remix-run",name:"react-router",avatar:"https://avatars.githubusercontent.com/u/92839?s=40&v=4",path:"/remix-run/react-router",link:"https://github.com/remix-run/react-router",description:"Declarative routing for React",language:"TypeScript",stars:"52,088",forks:"10,148",starup:"138"}],"TypeScript-monthly":[{title:`nocobase /

      nocobase`,owner:"nocobase",name:"nocobase",avatar:"https://avatars.githubusercontent.com/u/2993310?s=40&v=4",path:"/nocobase/nocobase",link:"https://github.com/nocobase/nocobase",description:"NocoBase is a scalability-first, open-source no-code/low-code platform for building business applications and enterprise solutions.",language:"TypeScript",stars:"8,836",forks:"1,020",starup:"3,225"},{title:`langgenius /

      dify`,owner:"langgenius",name:"dify",avatar:"https://avatars.githubusercontent.com/u/5485478?s=40&v=4",path:"/langgenius/dify",link:"https://github.com/langgenius/dify",description:"Dify is an open-source LLM app development platform. Dify's intuitive interface combines AI workflow, RAG pipeline, agent capabilities, model management, observability features and more, letting you quickly go from prototype to production.",language:"TypeScript",stars:"30,107",forks:"3,918",starup:"7,529"},{title:`pagefaultgames /

      pokerogue`,owner:"pagefaultgames",name:"pokerogue",avatar:"https://avatars.githubusercontent.com/u/3542488?s=40&v=4",path:"/pagefaultgames/pokerogue",link:"https://github.com/pagefaultgames/pokerogue",description:"A browser based Pokémon fangame heavily inspired by the roguelite genre.",language:"TypeScript",stars:"2,135",forks:"909",starup:"1,453"},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",link:"https://github.com/twentyhq/twenty",description:"Building a modern alternative to Salesforce, powered by the community.",language:"TypeScript",stars:"13,534",forks:"1,294",starup:"4,389"},{title:`reorproject /

      reor`,owner:"reorproject",name:"reor",avatar:"https://avatars.githubusercontent.com/u/17236551?s=40&v=4",path:"/reorproject/reor",link:"https://github.com/reorproject/reor",description:"Private & local AI personal knowledge management app.",language:"TypeScript",stars:"6,101",forks:"353",starup:"1,991"},{title:`immich-app /

      immich`,owner:"immich-app",name:"immich",avatar:"https://avatars.githubusercontent.com/u/27055614?s=40&v=4",path:"/immich-app/immich",link:"https://github.com/immich-app/immich",description:"High performance self-hosted photo and video management solution.",language:"TypeScript",stars:"33,358",forks:"1,598",starup:"3,179"},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",link:"https://github.com/toeverything/AFFiNE",description:"There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use.",language:"TypeScript",stars:"33,906",forks:"2,188",starup:"3,727"},{title:`PawanOsman /

      ChatGPT`,owner:"PawanOsman",name:"ChatGPT",avatar:"https://avatars.githubusercontent.com/u/8727627?s=40&v=4",path:"/PawanOsman/ChatGPT",link:"https://github.com/PawanOsman/ChatGPT",description:"OpenAI API Free Reverse Proxy",language:"TypeScript",stars:"4,975",forks:"900",starup:"1,389"},{title:`jina-ai /

      reader`,owner:"jina-ai",name:"reader",avatar:"https://avatars.githubusercontent.com/u/565869?s=40&v=4",path:"/jina-ai/reader",link:"https://github.com/jina-ai/reader",description:"Convert any URL to an LLM-friendly input with a simple prefix https://r.jina.ai/",language:"TypeScript",stars:"4,454",forks:"326",starup:"1,583"},{title:`code100x /

      chess`,owner:"code100x",name:"chess",avatar:"https://avatars.githubusercontent.com/u/8079861?s=40&v=4",path:"/code100x/chess",link:"https://github.com/code100x/chess",description:"A multiplayer chess platform",language:"TypeScript",stars:"1,534",forks:"526",starup:"1,534"},{title:`lxfater /

      inpaint-web`,owner:"lxfater",name:"inpaint-web",avatar:"https://avatars.githubusercontent.com/u/22794120?s=40&v=4",path:"/lxfater/inpaint-web",link:"https://github.com/lxfater/inpaint-web",description:"A free and open-source inpainting & image-upscaling tool powered by webgpu and wasm on the browser。| 基于 Webgpu 技术和 wasm 技术的免费开源 inpainting & image-upscaling 工具, 纯浏览器端实现。",language:"TypeScript",stars:"4,529",forks:"501",starup:"817"},{title:`sadmann7 /

      shadcn-table`,owner:"sadmann7",name:"shadcn-table",avatar:"https://avatars.githubusercontent.com/u/68962712?s=40&v=4",path:"/sadmann7/shadcn-table",link:"https://github.com/sadmann7/shadcn-table",description:"A shadcn table component with server-side sorting, filtering, and pagination.",language:"TypeScript",stars:"1,787",forks:"155",starup:"1,092"},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",link:"https://github.com/langfuse/langfuse",description:"🪢 Open source LLM engineering platform: Observability, metrics, evals, prompt management, playground, datasets. Integrates with LlamaIndex, Langchain, OpenAI SDK, LiteLLM, and more. 🍊YC W23",language:"TypeScript",stars:"3,769",forks:"352",starup:"850"},{title:`mendableai /

      firecrawl`,owner:"mendableai",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/mendableai/firecrawl",link:"https://github.com/mendableai/firecrawl",description:"🔥 Turn entire websites into LLM-ready markdown or structured data. Scrape, crawl, search and extract with a single API.",language:"TypeScript",stars:"3,605",forks:"287",starup:"2,691"},{title:`balena-io /

      etcher`,owner:"balena-io",name:"etcher",avatar:"https://avatars.githubusercontent.com/u/2192773?s=40&v=4",path:"/balena-io/etcher",link:"https://github.com/balena-io/etcher",description:"Flash OS images to SD cards & USB drives, safely and easily.",language:"TypeScript",stars:"28,026",forks:"2,005",starup:"458"},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",link:"https://github.com/yangshun/tech-interview-handbook",description:"💯 Curated coding interview preparation materials for busy software engineers",language:"TypeScript",stars:"111,483",forks:"14,047",starup:"1,938"},{title:`mlc-ai /

      web-llm`,owner:"mlc-ai",name:"web-llm",avatar:"https://avatars.githubusercontent.com/u/53290280?s=40&v=4",path:"/mlc-ai/web-llm",link:"https://github.com/mlc-ai/web-llm",description:"Bringing large-language models and chat to web browsers. Everything runs inside the browser with no server support.",language:"TypeScript",stars:"9,875",forks:"600",starup:"850"},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/746397?s=40&v=4",path:"/CopilotKit/CopilotKit",link:"https://github.com/CopilotKit/CopilotKit",description:"A framework for building custom AI Copilots 🤖 in-app AI chatbots, in-app AI Agents, & AI-powered Textareas.",language:"TypeScript",stars:"5,973",forks:"641",starup:"1,476"},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",link:"https://github.com/FlowiseAI/Flowise",description:"Drag & drop UI to build your customized LLM flow",language:"TypeScript",stars:"25,367",forks:"13,035",starup:"1,683"},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/1884376?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",link:"https://github.com/freeCodeCamp/freeCodeCamp",description:"freeCodeCamp.org's open-source codebase and curriculum. Learn to code for free.",language:"TypeScript",stars:"390,259",forks:"35,743",starup:"3,331"},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",link:"https://github.com/novuhq/novu",description:"Open-Source Notification Platform. Embeddable Notification Center, E-mail, Push and Slack Integrations.",language:"TypeScript",stars:"33,285",forks:"3,430",starup:"909"},{title:`measuredco /

      puck`,owner:"measuredco",name:"puck",avatar:"https://avatars.githubusercontent.com/u/985961?s=40&v=4",path:"/measuredco/puck",link:"https://github.com/measuredco/puck",description:"The visual editor for React",language:"TypeScript",stars:"4,579",forks:"219",starup:"423"},{title:`anyproto /

      anytype-ts`,owner:"anyproto",name:"anytype-ts",avatar:"https://avatars.githubusercontent.com/u/1450818?s=40&v=4",path:"/anyproto/anytype-ts",link:"https://github.com/anyproto/anytype-ts",description:"Official Anytype client for MacOS, Linux, and Windows",language:"TypeScript",stars:"3,308",forks:"197",starup:"611"},{title:`Eugeny /

      tabby`,owner:"Eugeny",name:"tabby",avatar:"https://avatars.githubusercontent.com/u/161476?s=40&v=4",path:"/Eugeny/tabby",link:"https://github.com/Eugeny/tabby",description:"A terminal for a more modern age",language:"TypeScript",stars:"55,826",forks:"3,248",starup:"867"},{title:`cruip /

      tailwind-landing-page-template`,owner:"cruip",name:"tailwind-landing-page-template",avatar:"https://avatars.githubusercontent.com/u/2683512?s=40&v=4",path:"/cruip/tailwind-landing-page-template",link:"https://github.com/cruip/tailwind-landing-page-template",description:"Simple Light is a free landing page template built on top of TailwindCSS and fully coded in React / Next.js. Made by",language:"TypeScript",stars:"3,160",forks:"1,375",starup:"411"}],"Vue-daily":[{title:`unilei /

      aipan-netdisk-search`,owner:"unilei",name:"aipan-netdisk-search",avatar:"https://avatars.githubusercontent.com/u/135422197?s=40&v=4",path:"/unilei/aipan-netdisk-search",link:"https://github.com/unilei/aipan-netdisk-search",description:"本项目是一个基于vue、nuxt.js的网盘搜索项目，且持续开源和维护；目的实现人人都可以拥有自己的网盘搜索网站；建议自己部署，salute to all",language:"Vue",stars:"306",forks:"94",starup:"81"},{title:`wizarrrr /

      wizarr`,owner:"wizarrrr",name:"wizarr",avatar:"https://avatars.githubusercontent.com/u/16636012?s=40&v=4",path:"/wizarrrr/wizarr",link:"https://github.com/wizarrrr/wizarr",description:"Wizarr is an advanced user invitation and management system for Jellyfin, Plex, Emby etc.",language:"Vue",stars:"1,089",forks:"81",starup:"14"},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",link:"https://github.com/qier222/YesPlayMusic",description:"高颜值的第三方网易云播放器，支持 Windows / macOS / Linux",language:"Vue",stars:"27,282",forks:"4,025",starup:"14"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,595",forks:"213",starup:"16"},{title:`bufferhead-code /

      onthisday`,owner:"bufferhead-code",name:"onthisday",avatar:"https://avatars.githubusercontent.com/u/6266887?s=40&v=4",path:"/bufferhead-code/onthisday",link:"https://github.com/bufferhead-code/onthisday",description:"History Weather Data for the current day powered by SQLite",language:"Vue",stars:"43",forks:"6",starup:"9"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,465",forks:"1,398",starup:"8"},{title:`jeecgboot /

      jeecgboot-vue3`,owner:"jeecgboot",name:"jeecgboot-vue3",avatar:"https://avatars.githubusercontent.com/u/3162115?s=40&v=4",path:"/jeecgboot/jeecgboot-vue3",link:"https://github.com/jeecgboot/jeecgboot-vue3",description:"🔥JeecgBoot—Vue3版前端源码，采用 Vue3.0+TypeScript+Vite+Ant-Design-Vue等新技术方案，包括二次封装组件、utils、hooks、动态菜单、权限校验、按钮级别权限控制等功能。 是JeecgBoot低代码平台的vue3技术栈的全新UI版本，功能强于vue2版。",language:"Vue",stars:"2,391",forks:"1,402",starup:"2"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"2"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,111",forks:"96",starup:"10"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,699",forks:"1,213",starup:"17"},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/25707052?s=40&v=4",path:"/VueTorrent/VueTorrent",link:"https://github.com/VueTorrent/VueTorrent",description:"The sleekest looking WEBUI for qBittorrent made with Vuejs!",language:"Vue",stars:"4,228",forks:"224",starup:"6"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"772",forks:"181",starup:"5"},{title:`wangyuan389 /

      mall-cook`,owner:"wangyuan389",name:"mall-cook",avatar:"https://avatars.githubusercontent.com/u/44593297?s=40&v=4",path:"/wangyuan389/mall-cook",link:"https://github.com/wangyuan389/mall-cook",description:"商城低代码平台，可视化搭建H5、小程序多端商城",language:"Vue",stars:"4,722",forks:"1,090",starup:"5"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,607",forks:"11,165",starup:"10"},{title:`pages-cms /

      pages-cms`,owner:"pages-cms",name:"pages-cms",avatar:"https://avatars.githubusercontent.com/u/306868?s=40&v=4",path:"/pages-cms/pages-cms",link:"https://github.com/pages-cms/pages-cms",description:"A user-friendly CMS for static site generators.",language:"Vue",stars:"1,136",forks:"104",starup:"3"},{title:`colinlienard /

      githundred`,owner:"colinlienard",name:"githundred",avatar:"https://avatars.githubusercontent.com/u/64312634?s=40&v=4",path:"/colinlienard/githundred",link:"https://github.com/colinlienard/githundred",description:"⭐️ Top 100 most starred GitHub repositories",language:"Vue",stars:"40",forks:"4",starup:"9"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"201",forks:"31",starup:"8"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,191",forks:"1,662",starup:"2"},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",link:"https://github.com/pulsejet/memories",description:"Fast, modern and advanced photo management suite. Runs as a Nextcloud app.",language:"Vue",stars:"2,829",forks:"76",starup:"0"},{title:`inoutcode /

      ethereum_book`,owner:"inoutcode",name:"ethereum_book",avatar:"https://avatars.githubusercontent.com/u/17592586?s=40&v=4",path:"/inoutcode/ethereum_book",link:"https://github.com/inoutcode/ethereum_book",description:"精通以太坊 （中文版）",language:"Vue",stars:"3,439",forks:"911",starup:"2"},{title:`oliver225 /

      thingsboard-ui-vue3`,owner:"oliver225",name:"thingsboard-ui-vue3",avatar:"https://avatars.githubusercontent.com/u/16226897?s=40&v=4",path:"/oliver225/thingsboard-ui-vue3",link:"https://github.com/oliver225/thingsboard-ui-vue3",description:"本项目为基于Vue3开发的 ThingsBoard 前台 ,AntDesginVue、VbenVueAdmin、AntV X6、规则链代码已全部开放、ThingsBoard3.x持续更新中",language:"Vue",stars:"81",forks:"12",starup:"31"},{title:`jellyfin /

      jellyfin-vue`,owner:"jellyfin",name:"jellyfin-vue",avatar:"https://avatars.githubusercontent.com/u/10274099?s=40&v=4",path:"/jellyfin/jellyfin-vue",link:"https://github.com/jellyfin/jellyfin-vue",description:"A modern web client for Jellyfin based on Vue",language:"Vue",stars:"1,031",forks:"202",starup:"3"},{title:`Cc-Edit /

      CcClip`,owner:"Cc-Edit",name:"CcClip",avatar:"https://avatars.githubusercontent.com/u/12524696?s=40&v=4",path:"/Cc-Edit/CcClip",link:"https://github.com/Cc-Edit/CcClip",description:"vue and ffmpeg based tool for video clips. 使用vue(vue3) + ffmpeg + wasm 实现纯前端音视频编辑，功能包括：视频剪辑、音频剪辑、音频合成裁剪、音波展示、视频抽帧、gif抽帧、帧播放器、字幕、贴图、时间轴、素材轨道",language:"Vue",stars:"902",forks:"176",starup:"2"},{title:`jsbenchmark /

      jsbenchmark`,owner:"jsbenchmark",name:"jsbenchmark",avatar:"https://avatars.githubusercontent.com/u/25956751?s=40&v=4",path:"/jsbenchmark/jsbenchmark",link:"https://github.com/jsbenchmark/jsbenchmark",description:"A straightforward JavaScript benchmarking tool and REPL with support for ES modules and libraries.",language:"Vue",stars:"105",forks:"1",starup:"12"},{title:`apache /

      skywalking-booster-ui`,owner:"apache",name:"skywalking-booster-ui",avatar:"https://avatars.githubusercontent.com/u/20871783?s=40&v=4",path:"/apache/skywalking-booster-ui",link:"https://github.com/apache/skywalking-booster-ui",description:"Apache SkyWalking 3rd generation UI",language:"Vue",stars:"168",forks:"123",starup:"0"}],"Vue-weekly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,238",forks:"1,875",starup:"2,009"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,226",forks:"1,025",starup:"169"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,243",forks:"200",starup:"156"},{title:`alireza0 /

      s-ui`,owner:"alireza0",name:"s-ui",avatar:"https://avatars.githubusercontent.com/u/12573084?s=40&v=4",path:"/alireza0/s-ui",link:"https://github.com/alireza0/s-ui",description:"An advanced Web Panel • Built for SagerNet/Sing-Box",language:"Vue",stars:"1,816",forks:"248",starup:"49"},{title:`wanglin2 /

      mind-map`,owner:"wanglin2",name:"mind-map",avatar:"https://avatars.githubusercontent.com/u/17272433?s=40&v=4",path:"/wanglin2/mind-map",link:"https://github.com/wanglin2/mind-map",description:"一个还算强大的Web思维导图。A relatively powerful web mind map.",language:"Vue",stars:"4,115",forks:"552",starup:"187"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,754",forks:"760",starup:"90"},{title:`Chanzhaoyu /

      chatgpt-web`,owner:"Chanzhaoyu",name:"chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/24789441?s=40&v=4",path:"/Chanzhaoyu/chatgpt-web",link:"https://github.com/Chanzhaoyu/chatgpt-web",description:"用 Express 和 Vue3 搭建的 ChatGPT 演示网页",language:"Vue",stars:"30,607",forks:"11,165",starup:"98"},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",link:"https://github.com/pure-admin/vue-pure-admin",description:"🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）",language:"Vue",stars:"14,383",forks:"2,762",starup:"93"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,161",forks:"730",starup:"69"},{title:`epicmaxco /

      vuestic-admin`,owner:"epicmaxco",name:"vuestic-admin",avatar:"https://avatars.githubusercontent.com/u/3674348?s=40&v=4",path:"/epicmaxco/vuestic-admin",link:"https://github.com/epicmaxco/vuestic-admin",description:"Free and Beautiful Vue 3 Admin Template",language:"Vue",stars:"10,191",forks:"1,662",starup:"28"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"2"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,124",forks:"172",starup:"83"},{title:`1024-lab /

      smart-admin`,owner:"1024-lab",name:"smart-admin",avatar:"https://avatars.githubusercontent.com/u/52805581?s=40&v=4",path:"/1024-lab/smart-admin",link:"https://github.com/1024-lab/smart-admin",description:"SmartAdmin国内首个以「高质量代码」为核心，「简洁、高效、安全」快速开发平台；基于SpringBoot + Sa-Token + Mybatis-Plus 和 Vue3 + Vite5 + Ant Design Vue 4.x (同时支持JavaScript和TypeScript双版本)；满足国家三级等保要求、支持登录限制、接口数据国产加解密、高防SQL注入等一系列安全体系。",language:"Vue",stars:"2,283",forks:"697",starup:"65"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"772",forks:"181",starup:"33"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,812",forks:"4,103",starup:"11"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,631",forks:"633",starup:"55"},{title:`zclzone /

      vue-naive-admin`,owner:"zclzone",name:"vue-naive-admin",avatar:"https://avatars.githubusercontent.com/u/49337591?s=40&v=4",path:"/zclzone/vue-naive-admin",link:"https://github.com/zclzone/vue-naive-admin",description:"⚡️基于 Vue3 + Vite + Pinia + Unocss + Naive UI 的轻量级后台管理模板。",language:"Vue",stars:"2,687",forks:"399",starup:"35"},{title:`DeepSourceCorp /

      good-first-issue`,owner:"DeepSourceCorp",name:"good-first-issue",avatar:"https://avatars.githubusercontent.com/u/68370940?s=40&v=4",path:"/DeepSourceCorp/good-first-issue",link:"https://github.com/DeepSourceCorp/good-first-issue",description:"Make your first open-source contribution.",language:"Vue",stars:"2,169",forks:"653",starup:"15"},{title:`nihaojob /

      vue-fabric-editor`,owner:"nihaojob",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/nihaojob/vue-fabric-editor",link:"https://github.com/nihaojob/vue-fabric-editor",description:"快图-基于fabric.js和Vue的开源图片编辑器，可自定义字体、素材、设计模板。fabric.js and Vue based image editor, can customize fonts, materials, design templates.",language:"Vue",stars:"4,019",forks:"720",starup:"36"},{title:`xiaomaogame /

      catctor`,owner:"xiaomaogame",name:"catctor",avatar:"https://avatars.githubusercontent.com/u/27407422?s=40&v=4",path:"/xiaomaogame/catctor",link:"https://github.com/xiaomaogame/catctor",description:"",language:"Vue",stars:"201",forks:"31",starup:"44"},{title:`umicro /

      uView2.0`,owner:"umicro",name:"uView2.0",avatar:"https://avatars.githubusercontent.com/u/40595755?s=40&v=4",path:"/umicro/uView2.0",link:"https://github.com/umicro/uView2.0",description:"uView UI，是全面兼容nvue的uni-app生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水",language:"Vue",stars:"1,447",forks:"437",starup:"16"},{title:`radix-vue /

      radix-vue`,owner:"radix-vue",name:"radix-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/radix-vue",link:"https://github.com/radix-vue/radix-vue",description:"Vue port of Radix UI Primitives. An open-source UI component library for building high-quality, accessible design systems and web apps.",language:"Vue",stars:"2,703",forks:"145",starup:"44"},{title:`Adamant-im /

      adamant-wallets`,owner:"Adamant-im",name:"adamant-wallets",avatar:"https://avatars.githubusercontent.com/u/24720671?s=40&v=4",path:"/Adamant-im/adamant-wallets",link:"https://github.com/Adamant-im/adamant-wallets",description:"Unified coin/token specification for wallets in ADAMANT apps",language:"Vue",stars:"247",forks:"3",starup:"19"},{title:`chatpire /

      chatgpt-web-share`,owner:"chatpire",name:"chatgpt-web-share",avatar:"https://avatars.githubusercontent.com/u/80299225?s=40&v=4",path:"/chatpire/chatgpt-web-share",link:"https://github.com/chatpire/chatgpt-web-share",description:"ChatGPT Plus 共享方案。ChatGPT Plus / OpenAI API sharing solution.",language:"Vue",stars:"4,091",forks:"645",starup:"27"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,683",forks:"3,705",starup:"26"}],"Vue-monthly":[{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",link:"https://github.com/zyronon/douyin",description:"Vue3 + Pinia 仿抖音，Vue 在移动端的最佳实践 . Imitate TikTok ，Vue Best practices on Mobile",language:"Vue",stars:"7,798",forks:"1,898",starup:"4,854"},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",link:"https://github.com/CorentinTh/it-tools",description:"Collection of handy online tools for developers, with great UX.",language:"Vue",stars:"16,238",forks:"1,875",starup:"5,710"},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",link:"https://github.com/AutomaApp/automa",description:"A browser extension for automating your browser by connecting blocks",language:"Vue",stars:"10,226",forks:"1,025",starup:"646"},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",link:"https://github.com/Lissy93/dashy",description:"🚀 A self-hostable personal dashboard built for you. Includes status-checking, widgets, themes, icon packs, a UI editor and tons more!",language:"Vue",stars:"15,699",forks:"1,213",starup:"544"},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",link:"https://github.com/tiny-craft/tiny-rdm",description:"A Modern Redis GUI Client",language:"Vue",stars:"6,629",forks:"313",starup:"626"},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",link:"https://github.com/BewlyBewly/BewlyBewly",description:"Improve your Bilibili homepage by redesigning it, adding more features, and personalizing it to match your preferences. (English | 简体中文 | 正體中文 | 廣東話)",language:"Vue",stars:"3,111",forks:"96",starup:"733"},{title:`chansee97 /

      nova-admin`,owner:"chansee97",name:"nova-admin",avatar:"https://avatars.githubusercontent.com/u/90271994?s=40&v=4",path:"/chansee97/nova-admin",link:"https://github.com/chansee97/nova-admin",description:"A simple and flexible admin template based on Vue3, Vite, TypeScript, NaiveUI",language:"Vue",stars:"427",forks:"76",starup:"160"},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",link:"https://github.com/vuejs/docs",description:"📄 Documentation for Vue 3",language:"Vue",stars:"2,812",forks:"4,103",starup:"42"},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",link:"https://github.com/imsyy/home",description:"个人主页，我的个人主页，个人主页源码，主页模板，homepage",language:"Vue",stars:"2,465",forks:"1,398",starup:"150"},{title:`nuxt-ui-pro /

      dashboard`,owner:"nuxt-ui-pro",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-pro/dashboard",link:"https://github.com/nuxt-ui-pro/dashboard",description:"A dashboard template made with Vue and Nuxt UI Pro.",language:"Vue",stars:"264",forks:"39",starup:"111"},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",link:"https://github.com/bastienwirtz/homer",description:"A very simple static homepage for your server.",language:"Vue",stars:"8,754",forks:"760",starup:"174"},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",link:"https://github.com/vueComponent/ant-design-vue",description:"🌈 An enterprise-class UI components based on Ant Design and Vue. 🐜",language:"Vue",stars:"19,683",forks:"3,705",starup:"145"},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",link:"https://github.com/RikkaApps/websites",description:"Websites for Rikka apps.",language:"Vue",stars:"117",forks:"1,199",starup:"5"},{title:`shiyutim /

      tickets`,owner:"shiyutim",name:"tickets",avatar:"https://avatars.githubusercontent.com/u/49300850?s=40&v=4",path:"/shiyutim/tickets",link:"https://github.com/shiyutim/tickets",description:"大麦、大麦网 演唱会抢票软件，一个基于 tauri + rust + vue 调用接口的抢票软件。",language:"Vue",stars:"1,243",forks:"200",starup:"249"},{title:`kingwrcy /

      moments`,owner:"kingwrcy",name:"moments",avatar:"https://avatars.githubusercontent.com/u/1247324?s=40&v=4",path:"/kingwrcy/moments",link:"https://github.com/kingwrcy/moments",description:"极简朋友圈",language:"Vue",stars:"973",forks:"104",starup:"830"},{title:`zyronon /

      typing-word`,owner:"zyronon",name:"typing-word",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/typing-word",link:"https://github.com/zyronon/typing-word",description:"在网页上背单词",language:"Vue",stars:"764",forks:"67",starup:"159"},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",link:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"CloudFlare free temp domain email 免费收发 临时域名邮箱 支持附件 IMAP SMTP",language:"Vue",stars:"772",forks:"181",starup:"103"},{title:`JhumanJ /

      OpnForm`,owner:"JhumanJ",name:"OpnForm",avatar:"https://avatars.githubusercontent.com/u/11312432?s=40&v=4",path:"/JhumanJ/OpnForm",link:"https://github.com/JhumanJ/OpnForm",description:"Beautiful Open-Source Form Builder",language:"Vue",stars:"1,595",forks:"213",starup:"112"},{title:`xunlu129 /

      teriteri-client`,owner:"xunlu129",name:"teriteri-client",avatar:"https://avatars.githubusercontent.com/u/122542082?s=40&v=4",path:"/xunlu129/teriteri-client",link:"https://github.com/xunlu129/teriteri-client",description:"一个基于 vue3 搭建的视频网站平台客户端",language:"Vue",stars:"225",forks:"37",starup:"120"},{title:`Alfred-Skyblue /

      vue-draggable-plus`,owner:"Alfred-Skyblue",name:"vue-draggable-plus",avatar:"https://avatars.githubusercontent.com/u/55641773?s=40&v=4",path:"/Alfred-Skyblue/vue-draggable-plus",link:"https://github.com/Alfred-Skyblue/vue-draggable-plus",description:"Universal Drag-and-Drop Component Supporting both Vue 3 and Vue 2",language:"Vue",stars:"2,521",forks:"96",starup:"214"},{title:`radix-vue /

      shadcn-vue`,owner:"radix-vue",name:"shadcn-vue",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/radix-vue/shadcn-vue",link:"https://github.com/radix-vue/shadcn-vue",description:"Vue port of shadcn-ui",language:"Vue",stars:"3,124",forks:"172",starup:"313"},{title:`ParisNeo /

      lollms-webui`,owner:"ParisNeo",name:"lollms-webui",avatar:"https://avatars.githubusercontent.com/u/827993?s=40&v=4",path:"/ParisNeo/lollms-webui",link:"https://github.com/ParisNeo/lollms-webui",description:"Lord of Large Language Models Web User Interface",language:"Vue",stars:"3,900",forks:"493",starup:"154"},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",link:"https://github.com/TeamPiped/Piped",description:"An alternative privacy-friendly YouTube frontend which is efficient by design.",language:"Vue",stars:"7,631",forks:"633",starup:"176"},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",link:"https://github.com/pipipi-pikachu/PPTist",description:"An online presentation application that replicates most of the commonly used features of Microsoft Office PowerPoint, allowing for the editing and presentation of PPT online. It also supports the export of PPT files.",language:"Vue",stars:"5,449",forks:"1,049",starup:"107"},{title:`un-pany /

      v3-admin-vite`,owner:"un-pany",name:"v3-admin-vite",avatar:"https://avatars.githubusercontent.com/u/49087880?s=40&v=4",path:"/un-pany/v3-admin-vite",link:"https://github.com/un-pany/v3-admin-vite",description:"☀️ A vue3 admin template | vue3 admin/element plus admin/vite admin/vue3 template/vue3 后台/vue3 模板/vue3 后台管理系统",language:"Vue",stars:"4,161",forks:"730",starup:"268"}]},nt={key:0,grid:"~ lg:cols-2 gap-2",class:"relative"},rt=Z("div",{class:"pointer absolute left-0 top-0 border-2 op0 transition-all duration-300"},null,-1),wt=P({__name:"index",setup(x){const p=T("daily"),e=T("JavaScript"),h=T([]),t=T("list");function f(g){return g.sort((s,r)=>n(r.starup)-n(s.starup))}J([p,e],()=>{h.value=f(st[`${e.value}-${p.value}`])},{immediate:!0});const{onMouseEnter:k}=K();return(g,s)=>{const r=O,d=R,v=F,w=E,i=$("LazyImage"),a=N,o=q,A=G,C=at,D=et;return l(),S("div",null,[c(w,null,{default:y(()=>[c(r,{modelValue:u(p),"onUpdate:modelValue":s[0]||(s[0]=m=>j(p)?p.value=m:null)},null,8,["modelValue"]),c(d,{modelValue:u(e),"onUpdate:modelValue":s[1]||(s[1]=m=>j(e)?e.value=m:null)},null,8,["modelValue"]),c(v,{modelValue:u(t),"onUpdate:modelValue":s[2]||(s[2]=m=>j(t)?t.value=m:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),c(Y,{name:"fade-top",mode:"out-in"},{default:y(()=>[u(t)==="list"?(l(),S("div",nt,[rt,(l(!0),S(X,null,Q(u(h),(m,M)=>(l(),V(A,{key:M,index:M,repo:m,onMouseenter:u(k)},{avatar:y(({repo:b})=>[c(i,{src:b.avatar},null,8,["src"])]),title:y(({repo:b})=>[c(a,{color:u(tt)[u(e)],owner:b.owner,name:b.name},null,8,["color","owner","name"])]),icons:y(({repo:b})=>[c(o,{title:"starup","icon-name":"ph:star-half-bold",text:b.starup,"text-red-500":""},null,8,["text"])]),_:2},1032,["index","repo","onMouseenter"]))),128))])):u(t)==="chart"?(l(),V(C,{key:1,data:u(h)},null,8,["data"])):(l(),V(D,{key:2,data:u(h)},null,8,["data"]))]),_:1})])}}});export{wt as default};
