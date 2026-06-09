import D from"./CWoSf0y0.js";import E from"./Dnzn98l-.js";import I from"./CEXvpQYb.js";import G from"./BB9YCy6R.js";import H from"./6dic-UZX.js";import R from"./CHM8LxxD.js";import B from"./Df1y6wkC.js";import{d as A}from"./KQwPfV-1.js";import{s as q,a as j,b as V,u as M,i as W,c as K}from"./BSnEASa9.js";import{i as T,p as F,a5 as J,D as c,f as _,w as P,S as O,h as b,a6 as S,T as U,q as x,U as h,d as k,a as $,H as C}from"./Dy3qbHMI.js";import"./CkUTAjCV.js";import"./p2-M2djV.js";import"./B6ZeEgS0.js";import"./ETQ8o5Ad.js";import"./BKZqBnm3.js";const X=T({__name:"Chart",setup(f){const r=F("data"),n=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),s=j("趋势仓库总指标排行榜",n);function u(i){const a=A(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[o,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=o,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=V(s,M);J(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:P({height:v})},null,4))}}),Z=Object.assign(X,{__name:"TrendChart"}),L=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:n}=O(r),u=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,M);function v(a){const o=A(a);o.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=o.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}J(n,()=>{v(n.value)},{deep:!0,immediate:!0});const i=`${100+n.value.length*40}px`;return(a,o)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:P({height:i})},null,4))}}),N=Object.assign(L,{__name:"TrendStarupChart"}),Q={"JavaScript-daily":[{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:51364,forks:10394,starup:1114},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:2536,forks:302,starup:284},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:36695,forks:1999,starup:611},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",ourl:"https://github.com/blackmatrix7",url:"https://github.com/blackmatrix7/ios_rule_script",description:"",language:"JavaScript",stars:26578,forks:3975,starup:109},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:32626,forks:5359,starup:185},{title:`robinebers /

      openusage`,owner:"robinebers",name:"openusage",avatar:"https://avatars.githubusercontent.com/u/16515780?s=40&v=4",path:"/robinebers/openusage",ourl:"https://github.com/robinebers",url:"https://github.com/robinebers/openusage",description:"",language:"JavaScript",stars:2812,forks:274,starup:17},{title:`dataease /

      SQLBot`,owner:"dataease",name:"SQLBot",avatar:"https://avatars.githubusercontent.com/u/106045316?s=40&v=4",path:"/dataease/SQLBot",ourl:"https://github.com/dataease",url:"https://github.com/dataease/SQLBot",description:"",language:"JavaScript",stars:6231,forks:744,starup:10},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:18635,forks:3168,starup:131},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11454,forks:3062,starup:17},{title:`rabbitmq /

      rabbitmq-server`,owner:"rabbitmq",name:"rabbitmq-server",avatar:"https://avatars.githubusercontent.com/u/1090?s=40&v=4",path:"/rabbitmq/rabbitmq-server",ourl:"https://github.com/rabbitmq",url:"https://github.com/rabbitmq/rabbitmq-server",description:"",language:"JavaScript",stars:13695,forks:4009,starup:3}],"JavaScript-weekly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:2536,forks:302,starup:899},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:211709,forks:32496,starup:9301},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:36695,forks:1999,starup:3736},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87162,forks:4940,starup:515},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:51364,forks:10394,starup:2839},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:51961,forks:4736,starup:87},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/6626184?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:4925,forks:468,starup:220},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69126,forks:23634,starup:86},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11454,forks:3062,starup:84},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:245699,forks:51032,starup:547},{title:`greensock /

      GSAP`,owner:"greensock",name:"GSAP",avatar:"https://avatars.githubusercontent.com/u/2389714?s=40&v=4",path:"/greensock/GSAP",ourl:"https://github.com/greensock",url:"https://github.com/greensock/GSAP",description:"",language:"JavaScript",stars:25728,forks:2031,starup:397},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:1445,forks:201,starup:184},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:112912,forks:36379,starup:154},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117703,forks:35659,starup:415},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:771,forks:244,starup:236}],"JavaScript-monthly":[{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:17031,forks:2580,starup:11758},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:16629,forks:1566,starup:8720},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12054,forks:1350,starup:1377},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:2536,forks:302,starup:1213},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:1445,forks:201,starup:795},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:1294,forks:74,starup:527},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/34203076?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:10947,forks:14848,starup:2222},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:29121,forks:5499,starup:1957},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:18635,forks:3168,starup:6546},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117703,forks:35659,starup:950},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:42199,forks:3871,starup:1344},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:6524,forks:659,starup:2265},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:53840,forks:11696,starup:1182},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:36695,forks:1999,starup:10241},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69126,forks:23634,starup:241},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:69624,forks:4700,starup:1822},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:245699,forks:51032,starup:1330}],"TypeScript-daily":[{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:14198,forks:985,starup:821},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:19816,forks:3014,starup:423},{title:`danielmiessler /

      Personal_AI_Infrastructure`,owner:"danielmiessler",name:"Personal_AI_Infrastructure",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/Personal_AI_Infrastructure",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/Personal_AI_Infrastructure",description:"",language:"TypeScript",stars:15653,forks:2173,starup:430},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:2366,forks:88,starup:242},{title:`ZuodaoTech /

      everyone-can-use-english`,owner:"ZuodaoTech",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/ZuodaoTech/everyone-can-use-english",ourl:"https://github.com/ZuodaoTech",url:"https://github.com/ZuodaoTech/everyone-can-use-english",description:"",language:"TypeScript",stars:34553,forks:4834,starup:106},{title:`actions /

      checkout`,owner:"actions",name:"checkout",avatar:"https://avatars.githubusercontent.com/u/12102068?s=40&v=4",path:"/actions/checkout",ourl:"https://github.com/actions",url:"https://github.com/actions/checkout",description:"",language:"TypeScript",stars:7979,forks:2504,starup:9},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:81457,forks:7013,starup:220},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:6319,forks:759,starup:208},{title:`mantinedev /

      mantine`,owner:"mantinedev",name:"mantine",avatar:"https://avatars.githubusercontent.com/u/10353856?s=40&v=4",path:"/mantinedev/mantine",ourl:"https://github.com/mantinedev",url:"https://github.com/mantinedev/mantine",description:"",language:"TypeScript",stars:31233,forks:2314,starup:7},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:34432,forks:4319,starup:509},{title:`microsoft /

      playwright-cli`,owner:"microsoft",name:"playwright-cli",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright-cli",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright-cli",description:"",language:"TypeScript",stars:11190,forks:587,starup:42},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:6133,forks:724,starup:3},{title:`777genius /

      agent-teams-ai`,owner:"777genius",name:"agent-teams-ai",avatar:"https://avatars.githubusercontent.com/u/13103045?s=40&v=4",path:"/777genius/agent-teams-ai",ourl:"https://github.com/777genius",url:"https://github.com/777genius/agent-teams-ai",description:"",language:"TypeScript",stars:1239,forks:237,starup:69},{title:`luongnv89 /

      asm`,owner:"luongnv89",name:"asm",avatar:"https://avatars.githubusercontent.com/u/3288457?s=40&v=4",path:"/luongnv89/asm",ourl:"https://github.com/luongnv89",url:"https://github.com/luongnv89/asm",description:"",language:"TypeScript",stars:492,forks:36,starup:30},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:28431,forks:3222,starup:517}],"TypeScript-weekly":[{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:28431,forks:3222,starup:3891},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:26311,forks:2293,starup:2434},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:34432,forks:4319,starup:2173},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:11490,forks:966,starup:1952},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:20713,forks:1531,starup:1568},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:31705,forks:3310,starup:1046},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:30230,forks:3004,starup:2091},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:6319,forks:759,starup:2023},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",ourl:"https://github.com/angular",url:"https://github.com/angular/angular",description:"",language:"TypeScript",stars:100300,forks:27174,starup:367},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",ourl:"https://github.com/MHSanaei",url:"https://github.com/MHSanaei/3x-ui",description:"",language:"TypeScript",stars:40135,forks:7518,starup:1030},{title:`NginxProxyManager /

      nginx-proxy-manager`,owner:"NginxProxyManager",name:"nginx-proxy-manager",avatar:"https://avatars.githubusercontent.com/u/1518257?s=40&v=4",path:"/NginxProxyManager/nginx-proxy-manager",ourl:"https://github.com/NginxProxyManager",url:"https://github.com/NginxProxyManager/nginx-proxy-manager",description:"",language:"TypeScript",stars:33194,forks:3776,starup:197},{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:14198,forks:985,starup:2328},{title:`vitest-dev /

      vitest`,owner:"vitest-dev",name:"vitest",avatar:"https://avatars.githubusercontent.com/u/16173870?s=40&v=4",path:"/vitest-dev/vitest",ourl:"https://github.com/vitest-dev",url:"https://github.com/vitest-dev/vitest",description:"",language:"TypeScript",stars:16665,forks:1819,starup:59},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:81353,forks:8287,starup:451}],"TypeScript-monthly":[{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:45788,forks:2806,starup:43749},{title:`Egonex-AI /

      Understand-Anything`,owner:"Egonex-AI",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Egonex-AI/Understand-Anything",ourl:"https://github.com/Egonex-AI",url:"https://github.com/Egonex-AI/Understand-Anything",description:"",language:"TypeScript",stars:55824,forks:4623,starup:41974},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:22083,forks:1812,starup:19359},{title:`fathah /

      hermes-desktop`,owner:"fathah",name:"hermes-desktop",avatar:"https://avatars.githubusercontent.com/u/48355244?s=40&v=4",path:"/fathah/hermes-desktop",ourl:"https://github.com/fathah",url:"https://github.com/fathah/hermes-desktop",description:"",language:"TypeScript",stars:11506,forks:1308,starup:9936},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:11490,forks:966,starup:7167},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:19816,forks:3014,starup:10222},{title:`millionco /

      react-doctor`,owner:"millionco",name:"react-doctor",avatar:"https://avatars.githubusercontent.com/u/38025074?s=40&v=4",path:"/millionco/react-doctor",ourl:"https://github.com/millionco",url:"https://github.com/millionco/react-doctor",description:"",language:"TypeScript",stars:12506,forks:395,starup:6102},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:1912,forks:151,starup:1544},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:23161,forks:1776,starup:3476},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:8038,forks:1265,starup:3151},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:21847,forks:3125,starup:7970},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:4483,forks:294,starup:2385},{title:`bytedance /

      UI-TARS-desktop`,owner:"bytedance",name:"UI-TARS-desktop",avatar:"https://avatars.githubusercontent.com/u/23133919?s=40&v=4",path:"/bytedance/UI-TARS-desktop",ourl:"https://github.com/bytedance",url:"https://github.com/bytedance/UI-TARS-desktop",description:"",language:"TypeScript",stars:36264,forks:3649,starup:5701},{title:`nashsu /

      llm_wiki`,owner:"nashsu",name:"llm_wiki",avatar:"https://avatars.githubusercontent.com/u/2127280?s=40&v=4",path:"/nashsu/llm_wiki",ourl:"https://github.com/nashsu",url:"https://github.com/nashsu/llm_wiki",description:"",language:"TypeScript",stars:10936,forks:1341,starup:4436},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:26026,forks:2444,starup:9718},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:61214,forks:7378,starup:14642},{title:`nicobailon /

      pi-subagents`,owner:"nicobailon",name:"pi-subagents",avatar:"https://avatars.githubusercontent.com/u/2958133?s=40&v=4",path:"/nicobailon/pi-subagents",ourl:"https://github.com/nicobailon",url:"https://github.com/nicobailon/pi-subagents",description:"",language:"TypeScript",stars:2129,forks:283,starup:867},{title:`tech-leads-club /

      agent-skills`,owner:"tech-leads-club",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/99354371?s=40&v=4",path:"/tech-leads-club/agent-skills",ourl:"https://github.com/tech-leads-club",url:"https://github.com/tech-leads-club/agent-skills",description:"",language:"TypeScript",stars:4557,forks:403,starup:2266},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:6870,forks:513,starup:2393},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"TypeScript",stars:57107,forks:4280,starup:1418}],"Vue-daily":[{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12782,forks:2164,starup:22},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32585,forks:8826,starup:14},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20285,forks:3744,starup:10},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2053,forks:301,starup:11},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15721,forks:1273,starup:23},{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1194,forks:113,starup:67},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5455,forks:1048,starup:6},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1535,forks:419,starup:3},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6784,forks:4724,starup:8},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11597,forks:1871,starup:4},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21386,forks:2329,starup:6},{title:`HoshinoSuzumi /

      chronoframe`,owner:"HoshinoSuzumi",name:"chronoframe",avatar:"https://avatars.githubusercontent.com/u/26276464?s=40&v=4",path:"/HoshinoSuzumi/chronoframe",ourl:"https://github.com/HoshinoSuzumi",url:"https://github.com/HoshinoSuzumi/chronoframe",description:"",language:"Vue",stars:1837,forks:131,starup:1},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2978,forks:1329,starup:3},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21546,forks:3913,starup:4},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8897,forks:2031,starup:8},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39224,forks:5016,starup:21}],"Vue-weekly":[{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1194,forks:113,starup:395},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3752,forks:477,starup:68},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15721,forks:1273,starup:145},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2882,forks:316,starup:43},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6637,forks:1075,starup:15},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3184,forks:836,starup:20},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32585,forks:8826,starup:76},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1359,forks:109,starup:27},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28422,forks:3241,starup:47},{title:`HoshinoSuzumi /

      chronoframe`,owner:"HoshinoSuzumi",name:"chronoframe",avatar:"https://avatars.githubusercontent.com/u/26276464?s=40&v=4",path:"/HoshinoSuzumi/chronoframe",ourl:"https://github.com/HoshinoSuzumi",url:"https://github.com/HoshinoSuzumi/chronoframe",description:"",language:"Vue",stars:1837,forks:131,starup:16},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6784,forks:4724,starup:38},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21546,forks:3913,starup:24},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2053,forks:301,starup:53}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39224,forks:5016,starup:844},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21184,forks:1433,starup:476},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1125,forks:42,starup:466},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:383,forks:46387,starup:29},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8897,forks:2031,starup:410},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3184,forks:836,starup:67},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21386,forks:2329,starup:171},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3752,forks:477,starup:210},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15721,forks:1273,starup:552},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2978,forks:1329,starup:95},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32585,forks:8826,starup:347},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2145,forks:470,starup:94},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6784,forks:4724,starup:193},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2818,forks:1122,starup:181},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1359,forks:109,starup:113},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1882,forks:86,starup:309},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6637,forks:1075,starup:94},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5455,forks:1048,starup:204},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2791,forks:757,starup:95}]},gt=T({__name:"index",setup(f){const{view:r,dateRange:n,language:s,color:u}=K(),l=$(()=>v(Q[`${s.value}-${n.value}`]));C("color",u),C("data",l);function v(i){return i.sort((a,o)=>o.starup-a.starup)}return(i,a)=>{const o=D,m=E,g=I,d=G,t=H,e=R,y=B,w=Z,z=N;return c(),_("div",null,[b(d,null,{default:S(()=>[b(o,{modelValue:h(n),"onUpdate:modelValue":a[0]||(a[0]=p=>x(n)?n.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(U,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),k(w,{key:2})):(c(),k(z,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
