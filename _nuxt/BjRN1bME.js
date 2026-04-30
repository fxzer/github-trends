import R from"./CCjJerFI.js";import I from"./DOhksqDi.js";import L from"./ZYf-JuWJ.js";import q from"./CW-4zwPI.js";import O from"./DD_Ugsad.js";import W from"./anZ-Zgzl.js";import B from"./BFwNksHA.js";import{d as M}from"./B_9KuB4R.js";import{s as E,u as V,a as C,b as T,i as Q,c as D}from"./DgpisvLJ.js";import{g as _,i as G,j as J,o as h,c as A,n as z,A as H,b,w as x,T as F,k as S,l as c,m as k,r as $,s as j}from"./BxSbeEZl.js";import"./CpTt3kZK.js";import"./p2-M2djV.js";import"./xDtcPnji.js";import"./CbE8ZCIi.js";import"./DTjdWWsS.js";const U=_({__name:"Chart",setup(f){const s=G("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(E),r=V("趋势仓库总指标排行榜",o);function u(i){const a=M(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=C(r,T);J(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(h(),A("div",{ref_key:"chartRef",ref:l,style:z({height:v})},null,4))}}),X=Object.assign(U,{__name:"TrendChart"}),Z=_({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=H(s),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(u,T);function v(a){const n=M(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:Q(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),A("div",{ref_key:"chartRef",ref:l,style:z({height:i})},null,4))}}),N=Object.assign(Z,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`browserbase /

      skills`,owner:"browserbase",name:"skills",avatar:"https://avatars.githubusercontent.com/u/3813908?s=40&v=4",path:"/browserbase/skills",ourl:"https://github.com/browserbase",url:"https://github.com/browserbase/skills",description:"",language:"JavaScript",stars:746,forks:61,starup:54},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:2184,forks:309,starup:126},{title:`vava-nessa /

      free-coding-models`,owner:"vava-nessa",name:"free-coding-models",avatar:"https://avatars.githubusercontent.com/u/5466264?s=40&v=4",path:"/vava-nessa/free-coding-models",ourl:"https://github.com/vava-nessa",url:"https://github.com/vava-nessa/free-coding-models",description:"",language:"JavaScript",stars:1603,forks:182,starup:44},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:23702,forks:1214,starup:478},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:9592,forks:676,starup:172},{title:`gchq /

      CyberChef`,owner:"gchq",name:"CyberChef",avatar:"https://avatars.githubusercontent.com/u/22770796?s=40&v=4",path:"/gchq/CyberChef",ourl:"https://github.com/gchq",url:"https://github.com/gchq/CyberChef",description:"",language:"JavaScript",stars:34724,forks:3927,starup:10},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:640,forks:76,starup:5},{title:`wwebjs /

      whatsapp-web.js`,owner:"wwebjs",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/wwebjs/whatsapp-web.js",ourl:"https://github.com/wwebjs",url:"https://github.com/wwebjs/whatsapp-web.js",description:"",language:"JavaScript",stars:21727,forks:4946,starup:17},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:3402,forks:807,starup:51},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:59299,forks:6404,starup:74},{title:`WordPress /

      agent-skills`,owner:"WordPress",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/36246732?s=40&v=4",path:"/WordPress/agent-skills",ourl:"https://github.com/WordPress",url:"https://github.com/WordPress/agent-skills",description:"",language:"JavaScript",stars:1369,forks:191,starup:15},{title:`robinebers /

      openusage`,owner:"robinebers",name:"openusage",avatar:"https://avatars.githubusercontent.com/u/16515780?s=40&v=4",path:"/robinebers/openusage",ourl:"https://github.com/robinebers",url:"https://github.com/robinebers/openusage",description:"",language:"JavaScript",stars:2157,forks:195,starup:46},{title:`firecrawl /

      firecrawl-mcp-server`,owner:"firecrawl",name:"firecrawl-mcp-server",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl-mcp-server",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl-mcp-server",description:"",language:"JavaScript",stars:6178,forks:699,starup:15},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"JavaScript",stars:266,forks:47,starup:12},{title:`marcelscruz /

      public-apis`,owner:"marcelscruz",name:"public-apis",avatar:"https://avatars.githubusercontent.com/u/50463866?s=40&v=4",path:"/marcelscruz/public-apis",ourl:"https://github.com/marcelscruz",url:"https://github.com/marcelscruz/public-apis",description:"",language:"JavaScript",stars:8852,forks:874,starup:23},{title:`QuiteAFancyEmerald /

      InvisiProxy`,owner:"QuiteAFancyEmerald",name:"InvisiProxy",avatar:"https://avatars.githubusercontent.com/u/46467239?s=40&v=4",path:"/QuiteAFancyEmerald/InvisiProxy",ourl:"https://github.com/QuiteAFancyEmerald",url:"https://github.com/QuiteAFancyEmerald/InvisiProxy",description:"",language:"JavaScript",stars:1374,forks:4982,starup:6},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12267,forks:3456,starup:12},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:116990,forks:35487,starup:25}],"JavaScript-weekly":[{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:10353,forks:1812,starup:3823},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:64178,forks:4080,starup:1115},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:2184,forks:309,starup:1132},{title:`tiagozip /

      cap`,owner:"tiagozip",name:"cap",avatar:"https://avatars.githubusercontent.com/u/70700766?s=40&v=4",path:"/tiagozip/cap",ourl:"https://github.com/tiagozip",url:"https://github.com/tiagozip/cap",description:"",language:"JavaScript",stars:6167,forks:424,starup:921},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"JavaScript",stars:13458,forks:27191,starup:119},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:25799,forks:4093,starup:2578},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:40787,forks:3701,starup:201},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:7360,forks:759,starup:1162},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:23702,forks:1214,starup:2044},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:86067,forks:7748,starup:485},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:3543,forks:370,starup:595},{title:`copy /

      v86`,owner:"copy",name:"v86",avatar:"https://avatars.githubusercontent.com/u/1816456?s=40&v=4",path:"/copy/v86",ourl:"https://github.com/copy",url:"https://github.com/copy/v86",description:"",language:"JavaScript",stars:22736,forks:1776,starup:125},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:701,forks:44,starup:90},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:14587,forks:850,starup:345},{title:`ltaoo /

      wx_channels_download`,owner:"ltaoo",name:"wx_channels_download",avatar:"https://avatars.githubusercontent.com/u/15319872?s=40&v=4",path:"/ltaoo/wx_channels_download",ourl:"https://github.com/ltaoo",url:"https://github.com/ltaoo/wx_channels_download",description:"",language:"JavaScript",stars:5583,forks:814,starup:160},{title:`jesse-ai /

      jesse`,owner:"jesse-ai",name:"jesse",avatar:"https://avatars.githubusercontent.com/u/69156720?s=40&v=4",path:"/jesse-ai/jesse",ourl:"https://github.com/jesse-ai",url:"https://github.com/jesse-ai/jesse",description:"",language:"JavaScript",stars:7822,forks:1103,starup:104},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:26948,forks:2516,starup:225}],"JavaScript-monthly":[{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:3543,forks:370,starup:2510},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:3402,forks:807,starup:2021},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:25799,forks:4093,starup:8430},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:109037,forks:11658,starup:780},{title:`EvoMap /

      evolver`,owner:"EvoMap",name:"evolver",avatar:"https://avatars.githubusercontent.com/u/166480271?s=40&v=4",path:"/EvoMap/evolver",ourl:"https://github.com/EvoMap",url:"https://github.com/EvoMap/evolver",description:"",language:"JavaScript",stars:7125,forks:718,starup:5377},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32752,forks:6233,starup:1745},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:10353,forks:1812,starup:7435},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1485,forks:153,starup:498},{title:`phaserjs /

      phaser`,owner:"phaserjs",name:"phaser",avatar:"https://avatars.githubusercontent.com/u/164476?s=40&v=4",path:"/phaserjs/phaser",ourl:"https://github.com/phaserjs",url:"https://github.com/phaserjs/phaser",description:"",language:"JavaScript",stars:39535,forks:7135,starup:326},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:24362,forks:1392,starup:2390},{title:`ComposioHQ /

      open-claude-cowork`,owner:"ComposioHQ",name:"open-claude-cowork",avatar:"https://avatars.githubusercontent.com/u/84703335?s=40&v=4",path:"/ComposioHQ/open-claude-cowork",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/open-claude-cowork",description:"",language:"JavaScript",stars:4035,forks:683,starup:892},{title:`hotheadhacker /

      no-as-a-service`,owner:"hotheadhacker",name:"no-as-a-service",avatar:"https://avatars.githubusercontent.com/u/18418340?s=40&v=4",path:"/hotheadhacker/no-as-a-service",ourl:"https://github.com/hotheadhacker",url:"https://github.com/hotheadhacker/no-as-a-service",description:"",language:"JavaScript",stars:7441,forks:461,starup:1167},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61261,forks:7154,starup:89},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:23702,forks:1214,starup:8905},{title:`vava-nessa /

      free-coding-models`,owner:"vava-nessa",name:"free-coding-models",avatar:"https://avatars.githubusercontent.com/u/5466264?s=40&v=4",path:"/vava-nessa/free-coding-models",ourl:"https://github.com/vava-nessa",url:"https://github.com/vava-nessa/free-coding-models",description:"",language:"JavaScript",stars:1603,forks:182,starup:799}],"TypeScript-daily":[{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:5514,forks:735,starup:314},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxt",description:"",language:"TypeScript",stars:60143,forks:5589,starup:15},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/54054995?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:23135,forks:1992,starup:241},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:152482,forks:17591,starup:654},{title:`codexu /

      note-gen`,owner:"codexu",name:"note-gen",avatar:"https://avatars.githubusercontent.com/u/15899990?s=40&v=4",path:"/codexu/note-gen",ourl:"https://github.com/codexu",url:"https://github.com/codexu/note-gen",description:"",language:"TypeScript",stars:11644,forks:864,starup:263},{title:`plait-board /

      drawnix`,owner:"plait-board",name:"drawnix",avatar:"https://avatars.githubusercontent.com/u/18631804?s=40&v=4",path:"/plait-board/drawnix",ourl:"https://github.com/plait-board",url:"https://github.com/plait-board/drawnix",description:"",language:"TypeScript",stars:13754,forks:1167,starup:47},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:28282,forks:2981,starup:125},{title:`chaitin /

      MonkeyCode`,owner:"chaitin",name:"MonkeyCode",avatar:"https://avatars.githubusercontent.com/u/140062425?s=40&v=4",path:"/chaitin/MonkeyCode",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/MonkeyCode",description:"",language:"TypeScript",stars:2648,forks:313,starup:25}],"TypeScript-weekly":[{title:`zilliztech /

      claude-context`,owner:"zilliztech",name:"claude-context",avatar:"https://avatars.githubusercontent.com/u/17022025?s=40&v=4",path:"/zilliztech/claude-context",ourl:"https://github.com/zilliztech",url:"https://github.com/zilliztech/claude-context",description:"",language:"TypeScript",stars:10401,forks:767,starup:3151},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:11440,forks:782,starup:2215},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:33699,forks:3829,starup:4847},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:13732,forks:2069,starup:1755},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:43126,forks:5054,starup:4055},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:5514,forks:735,starup:1011},{title:`RooCodeInc /

      Roo-Code`,owner:"RooCodeInc",name:"Roo-Code",avatar:"https://avatars.githubusercontent.com/u/2600?s=40&v=4",path:"/RooCodeInc/Roo-Code",ourl:"https://github.com/RooCodeInc",url:"https://github.com/RooCodeInc/Roo-Code",description:"",language:"TypeScript",stars:23789,forks:3171,starup:533},{title:`ThinkInAIXYZ /

      deepchat`,owner:"ThinkInAIXYZ",name:"deepchat",avatar:"https://avatars.githubusercontent.com/u/339229?s=40&v=4",path:"/ThinkInAIXYZ/deepchat",ourl:"https://github.com/ThinkInAIXYZ",url:"https://github.com/ThinkInAIXYZ/deepchat",description:"",language:"TypeScript",stars:5758,forks:662,starup:70},{title:`nilbuild /

      developer-roadmap`,owner:"nilbuild",name:"developer-roadmap",avatar:"https://avatars.githubusercontent.com/u/4921183?s=40&v=4",path:"/nilbuild/developer-roadmap",ourl:"https://github.com/nilbuild",url:"https://github.com/nilbuild/developer-roadmap",description:"",language:"TypeScript",stars:353930,forks:43982,starup:635},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:44819,forks:4259,starup:731}],"TypeScript-monthly":[{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:20313,forks:3110,starup:6446},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:33811,forks:2267,starup:24784},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:70176,forks:5998,starup:27905},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:11440,forks:782,starup:5028},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:13732,forks:2069,starup:4717},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:33699,forks:3829,starup:13182},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:8957,forks:2199,starup:3071},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:24051,forks:2313,starup:3068},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:3713,forks:604,starup:2225},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:114935,forks:8399,starup:8987}],"Vue-daily":[{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12411,forks:2114,starup:9},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38334,forks:4804,starup:20},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28243,forks:3210,starup:6},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8479,forks:1931,starup:7},{title:`hanshuaikang /

      AI-Media2Doc`,owner:"hanshuaikang",name:"AI-Media2Doc",avatar:"https://avatars.githubusercontent.com/u/33194175?s=40&v=4",path:"/hanshuaikang/AI-Media2Doc",ourl:"https://github.com/hanshuaikang",url:"https://github.com/hanshuaikang/AI-Media2Doc",description:"",language:"Vue",stars:3727,forks:503,starup:2},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3169,forks:473,starup:14},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14302,forks:1674,starup:5},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21481,forks:3922,starup:3},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6536,forks:1057,starup:8},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32255,forks:8743,starup:12},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12756,forks:636,starup:6},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:209,forks:860,starup:0},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15116,forks:1230,starup:19},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3216,forks:5018,starup:1},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2452,forks:350,starup:0}],"Vue-weekly":[{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2866,forks:1267,starup:40},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24894,forks:1822,starup:145},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3110,forks:775,starup:34},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15116,forks:1230,starup:177},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28243,forks:3210,starup:45},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:9940,forks:840,starup:26},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12756,forks:636,starup:40},{title:`gaozhangmin /

      aliyunpan`,owner:"gaozhangmin",name:"aliyunpan",avatar:"https://avatars.githubusercontent.com/u/9278488?s=40&v=4",path:"/gaozhangmin/aliyunpan",ourl:"https://github.com/gaozhangmin",url:"https://github.com/gaozhangmin/aliyunpan",description:"",language:"Vue",stars:6024,forks:317,starup:51},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1482,forks:381,starup:56},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6536,forks:1057,starup:41},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:353,forks:41592,starup:5},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3169,forks:473,starup:42},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21256,forks:2308,starup:34},{title:`zs1083339604 /

      FaceWinUnlock-Tauri`,owner:"zs1083339604",name:"FaceWinUnlock-Tauri",avatar:"https://avatars.githubusercontent.com/u/41194731?s=40&v=4",path:"/zs1083339604/FaceWinUnlock-Tauri",ourl:"https://github.com/zs1083339604",url:"https://github.com/zs1083339604/FaceWinUnlock-Tauri",description:"",language:"Vue",stars:1709,forks:98,starup:29},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2002,forks:447,starup:33},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2600,forks:93,starup:36},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1831,forks:231,starup:48}],"Vue-monthly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24894,forks:1822,starup:592},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1329,forks:367,starup:108},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8888,forks:1731,starup:171},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15116,forks:1230,starup:556},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28243,forks:3210,starup:214},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5238,forks:1018,starup:203},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3513,forks:449,starup:213},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2665,forks:286,starup:280},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6543,forks:2455,starup:84},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8479,forks:1931,starup:138},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1831,forks:231,starup:194},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2002,forks:447,starup:56},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:581,forks:24,starup:271},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2602,forks:1028,starup:136},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1482,forks:381,starup:140},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2866,forks:1267,starup:109},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12411,forks:2114,starup:303},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:20580,forks:958,starup:853}]},mt=_({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=D(),l=$(()=>v(Y[`${r.value}-${o.value}`]));j("color",u),j("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=R,g=I,m=L,d=q,t=O,e=W,w=B,y=X,P=N;return h(),A("div",null,[b(d,null,{default:x(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(F,{name:"fade-top",mode:"out-in"},{default:x(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:x(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(y,{key:2})):(h(),k(P,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
