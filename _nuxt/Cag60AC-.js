import F from"./DT2OR_dx.js";import I from"./BMSbUFkG.js";import P from"./MgZlV15A.js";import M from"./DVKDGcl_.js";import E from"./BRa6kx-6.js";import O from"./DohJ_8XZ.js";import B from"./DjUWDNfe.js";import{d as C}from"./B_9KuB4R.js";import{s as D,u as J,a as j,b as z,i as H,c as Q}from"./BCzGg2bF.js";import{g as _,i as R,j as A,o as c,c as T,n as q,A as G,b,w as x,T as $,k as S,l as h,m as f,r as W,s as V}from"./BYB9ZcJD.js";import"./B9f_9xPe.js";import"./p2-M2djV.js";import"./CribFXbD.js";import"./x219pmBF.js";import"./BUvomPtD.js";const K=_({__name:"Chart",setup(w){const s=R("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(D),r=J("趋势仓库总指标排行榜",o);function i(u){const a=C(u);a.sort((t,e)=>{const k=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return k-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=j(r,z);A(s,()=>{i(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(u,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:v})},null,4))}}),X=Object.assign(K,{__name:"TrendChart"}),U=_({__name:"StarupChart",props:{data:{}},setup(w){const s=w,{data:o}=G(s),i=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=j(i,z);function v(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:H(m[e%m.length])}));i.value.series[0].data=d,i.value.yAxis.data=g}A(o,()=>{v(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:u})},null,4))}}),N=Object.assign(U,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:19636,forks:1732,starup:763},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:600,forks:64,starup:27},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"JavaScript",stars:6824,forks:872,starup:295},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:11978,forks:3373,starup:4},{title:`carbon-design-system /

      carbon`,owner:"carbon-design-system",name:"carbon",avatar:"https://avatars.githubusercontent.com/u/3901764?s=40&v=4",path:"/carbon-design-system/carbon",ourl:"https://github.com/carbon-design-system",url:"https://github.com/carbon-design-system/carbon",description:"",language:"JavaScript",stars:8916,forks:2116,starup:15},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:66049,forks:9278,starup:5},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:20886,forks:1155,starup:29},{title:`liyupi /

      ai-guide`,owner:"liyupi",name:"ai-guide",avatar:"https://avatars.githubusercontent.com/u/26037703?s=40&v=4",path:"/liyupi/ai-guide",ourl:"https://github.com/liyupi",url:"https://github.com/liyupi/ai-guide",description:"",language:"JavaScript",stars:7451,forks:808,starup:244},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:54980,forks:5926,starup:64},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",ourl:"https://github.com/mozilla",url:"https://github.com/mozilla/pdf.js",description:"",language:"JavaScript",stars:52879,forks:10584,starup:5},{title:`journey-ad /

      gemini-watermark-remover`,owner:"journey-ad",name:"gemini-watermark-remover",avatar:"https://avatars.githubusercontent.com/u/16256221?s=40&v=4",path:"/journey-ad/gemini-watermark-remover",ourl:"https://github.com/journey-ad",url:"https://github.com/journey-ad/gemini-watermark-remover",description:"",language:"JavaScript",stars:2914,forks:345,starup:39}],"JavaScript-weekly":[{title:`SynkraAI /

      aios-core`,owner:"SynkraAI",name:"aios-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aios-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aios-core",description:"",language:"JavaScript",stars:1794,forks:623,starup:707},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1175,forks:107,starup:219},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27109,forks:4929,starup:218},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:20928,forks:2434,starup:2043},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10089,forks:1089,starup:1087},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:83235,forks:7439,starup:338},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:19636,forks:1732,starup:4027},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:3712,forks:661,starup:121},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:23501,forks:4784,starup:331},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",ourl:"https://github.com/anuraghazra",url:"https://github.com/anuraghazra/github-readme-stats",description:"",language:"JavaScript",stars:78517,forks:30912,starup:124},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22226,forks:838,starup:75},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:108626,forks:11535,starup:51}],"JavaScript-monthly":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:19636,forks:1732,starup:12063},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10089,forks:1089,starup:1205},{title:`Coding-Solo /

      godot-mcp`,owner:"Coding-Solo",name:"godot-mcp",avatar:"https://avatars.githubusercontent.com/u/60202842?s=40&v=4",path:"/Coding-Solo/godot-mcp",ourl:"https://github.com/Coding-Solo",url:"https://github.com/Coding-Solo/godot-mcp",description:"",language:"JavaScript",stars:1942,forks:224,starup:435},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:22428,forks:2574,starup:3658},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27109,forks:4929,starup:338},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1157,forks:46,starup:488},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41091,forks:2142,starup:957},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",ourl:"https://github.com/GitSquared",url:"https://github.com/GitSquared/edex-ui",description:"",language:"JavaScript",stars:44307,forks:3014,starup:436},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"JavaScript",stars:6824,forks:872,starup:1159},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:4648,forks:833,starup:288},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:66049,forks:9278,starup:199},{title:`pedroslopez /

      whatsapp-web.js`,owner:"pedroslopez",name:"whatsapp-web.js",avatar:"https://avatars.githubusercontent.com/u/4368928?s=40&v=4",path:"/pedroslopez/whatsapp-web.js",ourl:"https://github.com/pedroslopez",url:"https://github.com/pedroslopez/whatsapp-web.js",description:"",language:"JavaScript",stars:21248,forks:4858,starup:653},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:8570,forks:608,starup:1071},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:85922,forks:4782,starup:522},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:8252,forks:3050,starup:609},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"JavaScript",stars:54029,forks:3999,starup:689},{title:`axios /

      axios`,owner:"axios",name:"axios",avatar:"https://avatars.githubusercontent.com/u/4814473?s=40&v=4",path:"/axios/axios",ourl:"https://github.com/axios",url:"https://github.com/axios/axios",description:"",language:"JavaScript",stars:108626,forks:11535,starup:232},{title:`simple-icons /

      simple-icons`,owner:"simple-icons",name:"simple-icons",avatar:"https://avatars.githubusercontent.com/u/15157491?s=40&v=4",path:"/simple-icons/simple-icons",ourl:"https://github.com/simple-icons",url:"https://github.com/simple-icons/simple-icons",description:"",language:"JavaScript",stars:24536,forks:3052,starup:332}],"TypeScript-daily":[{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:2967,forks:229,starup:626},{title:`ghostfolio /

      ghostfolio`,owner:"ghostfolio",name:"ghostfolio",avatar:"https://avatars.githubusercontent.com/u/4159106?s=40&v=4",path:"/ghostfolio/ghostfolio",ourl:"https://github.com/ghostfolio",url:"https://github.com/ghostfolio/ghostfolio",description:"",language:"TypeScript",stars:7796,forks:996,starup:23},{title:`dyad-sh /

      dyad`,owner:"dyad-sh",name:"dyad",avatar:"https://avatars.githubusercontent.com/u/7344640?s=40&v=4",path:"/dyad-sh/dyad",ourl:"https://github.com/dyad-sh",url:"https://github.com/dyad-sh/dyad",description:"",language:"TypeScript",stars:19700,forks:2241,starup:18},{title:`refly-ai /

      refly`,owner:"refly-ai",name:"refly",avatar:"https://avatars.githubusercontent.com/u/23410977?s=40&v=4",path:"/refly-ai/refly",ourl:"https://github.com/refly-ai",url:"https://github.com/refly-ai/refly",description:"",language:"TypeScript",stars:6776,forks:675,starup:61},{title:`DayuanJiang /

      next-ai-draw-io`,owner:"DayuanJiang",name:"next-ai-draw-io",avatar:"https://avatars.githubusercontent.com/u/34411969?s=40&v=4",path:"/DayuanJiang/next-ai-draw-io",ourl:"https://github.com/DayuanJiang",url:"https://github.com/DayuanJiang/next-ai-draw-io",description:"",language:"TypeScript",stars:21737,forks:2303,starup:107},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:98608,forks:7201,starup:375},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:16016,forks:1681,starup:726},{title:`simstudioai /

      sim`,owner:"simstudioai",name:"sim",avatar:"https://avatars.githubusercontent.com/u/40672544?s=40&v=4",path:"/simstudioai/sim",ourl:"https://github.com/simstudioai",url:"https://github.com/simstudioai/sim",description:"",language:"TypeScript",stars:26585,forks:3337,starup:56},{title:`tiann /

      hapi`,owner:"tiann",name:"hapi",avatar:"https://avatars.githubusercontent.com/u/4233744?s=40&v=4",path:"/tiann/hapi",ourl:"https://github.com/tiann",url:"https://github.com/tiann/hapi",description:"",language:"TypeScript",stars:1658,forks:173,starup:34},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:16354,forks:1981,starup:157},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4197,forks:425,starup:253}],"TypeScript-weekly":[{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4197,forks:425,starup:940},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:9799,forks:645,starup:586},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:8660,forks:745,starup:1096},{title:`ComposioHQ /

      composio`,owner:"ComposioHQ",name:"composio",avatar:"https://avatars.githubusercontent.com/u/19796925?s=40&v=4",path:"/ComposioHQ/composio",ourl:"https://github.com/ComposioHQ",url:"https://github.com/ComposioHQ/composio",description:"",language:"TypeScript",stars:27173,forks:4454,starup:578},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",ourl:"https://github.com/evershopcommerce",url:"https://github.com/evershopcommerce/evershop",description:"",language:"TypeScript",stars:9634,forks:2186,starup:487},{title:`OpenCTI-Platform /

      opencti`,owner:"OpenCTI-Platform",name:"opencti",avatar:"https://avatars.githubusercontent.com/u/1334279?s=40&v=4",path:"/OpenCTI-Platform/opencti",ourl:"https://github.com/OpenCTI-Platform",url:"https://github.com/OpenCTI-Platform/opencti",description:"",language:"TypeScript",stars:8877,forks:1268,starup:564},{title:`stan-smith /

      FossFLOW`,owner:"stan-smith",name:"FossFLOW",avatar:"https://avatars.githubusercontent.com/u/1769678?s=40&v=4",path:"/stan-smith/FossFLOW",ourl:"https://github.com/stan-smith",url:"https://github.com/stan-smith/FossFLOW",description:"",language:"TypeScript",stars:18719,forks:1211,starup:1312},{title:`ryoppippi /

      ccusage`,owner:"ryoppippi",name:"ccusage",avatar:"https://avatars.githubusercontent.com/u/1560508?s=40&v=4",path:"/ryoppippi/ccusage",ourl:"https://github.com/ryoppippi",url:"https://github.com/ryoppippi/ccusage",description:"",language:"TypeScript",stars:10992,forks:386,starup:218},{title:`microsoft /

      data-formulator`,owner:"microsoft",name:"data-formulator",avatar:"https://avatars.githubusercontent.com/u/93549116?s=40&v=4",path:"/microsoft/data-formulator",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/data-formulator",description:"",language:"TypeScript",stars:15062,forks:1370,starup:175},{title:`open-mercato /

      open-mercato`,owner:"open-mercato",name:"open-mercato",avatar:"https://avatars.githubusercontent.com/u/211899?s=40&v=4",path:"/open-mercato/open-mercato",ourl:"https://github.com/open-mercato",url:"https://github.com/open-mercato/open-mercato",description:"",language:"TypeScript",stars:940,forks:154,starup:509},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:19370,forks:1689,starup:846},{title:`CodeWithCJ /

      SparkyFitness`,owner:"CodeWithCJ",name:"SparkyFitness",avatar:"https://avatars.githubusercontent.com/u/151883488?s=40&v=4",path:"/CodeWithCJ/SparkyFitness",ourl:"https://github.com/CodeWithCJ",url:"https://github.com/CodeWithCJ/SparkyFitness",description:"",language:"TypeScript",stars:2751,forks:121,starup:406}],"TypeScript-monthly":[{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:226056,forks:43269,starup:217363},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:16016,forks:1681,starup:13479},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:24881,forks:2471,starup:20878},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:10432,forks:589,starup:7758},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:30778,forks:2091,starup:15930},{title:`modelcontextprotocol /

      ext-apps`,owner:"modelcontextprotocol",name:"ext-apps",avatar:"https://avatars.githubusercontent.com/u/273860?s=40&v=4",path:"/modelcontextprotocol/ext-apps",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/ext-apps",description:"",language:"TypeScript",stars:1664,forks:188,starup:1251},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:4412,forks:269,starup:3400},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:16354,forks:1981,starup:7492},{title:`tambo-ai /

      tambo`,owner:"tambo-ai",name:"tambo",avatar:"https://avatars.githubusercontent.com/u/135340?s=40&v=4",path:"/tambo-ai/tambo",ourl:"https://github.com/tambo-ai",url:"https://github.com/tambo-ai/tambo",description:"",language:"TypeScript",stars:10945,forks:534,starup:6192},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:21992,forks:2658,starup:3234},{title:`amantus-ai /

      vibetunnel`,owner:"amantus-ai",name:"vibetunnel",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/amantus-ai/vibetunnel",ourl:"https://github.com/amantus-ai",url:"https://github.com/amantus-ai/vibetunnel",description:"",language:"TypeScript",stars:4130,forks:290,starup:1015},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/54054995?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:17023,forks:1291,starup:7156},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:1942,forks:163,starup:1112},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:37850,forks:2327,starup:8792},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:26614,forks:1556,starup:4559},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/209089?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:9517,forks:752,starup:3324},{title:`open-mercato /

      open-mercato`,owner:"open-mercato",name:"open-mercato",avatar:"https://avatars.githubusercontent.com/u/211899?s=40&v=4",path:"/open-mercato/open-mercato",ourl:"https://github.com/open-mercato",url:"https://github.com/open-mercato/open-mercato",description:"",language:"TypeScript",stars:940,forks:154,starup:622},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:9799,forks:645,starup:1510}],"Vue-daily":[{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14106,forks:1644,starup:6},{title:`aleksey-hoffman /

      sigma-file-manager`,owner:"aleksey-hoffman",name:"sigma-file-manager",avatar:"https://avatars.githubusercontent.com/u/61761672?s=40&v=4",path:"/aleksey-hoffman/sigma-file-manager",ourl:"https://github.com/aleksey-hoffman",url:"https://github.com/aleksey-hoffman/sigma-file-manager",description:"",language:"Vue",stars:5229,forks:213,starup:9},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31585,forks:8601,starup:6},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90285,forks:30621,starup:6},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11820,forks:2012,starup:9},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14325,forks:1183,starup:13},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:27924,forks:3151,starup:7},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6153,forks:3108,starup:5},{title:`elk-zone /

      elk`,owner:"elk-zone",name:"elk",avatar:"https://avatars.githubusercontent.com/u/6481596?s=40&v=4",path:"/elk-zone/elk",ourl:"https://github.com/elk-zone",url:"https://github.com/elk-zone/elk",description:"",language:"Vue",stars:5970,forks:615,starup:0},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2373,forks:905,starup:5},{title:`giuseppe99barchetta /

      SuggestArr`,owner:"giuseppe99barchetta",name:"SuggestArr",avatar:"https://avatars.githubusercontent.com/u/55151669?s=40&v=4",path:"/giuseppe99barchetta/SuggestArr",ourl:"https://github.com/giuseppe99barchetta",url:"https://github.com/giuseppe99barchetta/SuggestArr",description:"",language:"Vue",stars:1026,forks:15,starup:10},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2352,forks:81,starup:3},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:2926,forks:432,starup:4},{title:`nextcloud-libraries /

      nextcloud-vue`,owner:"nextcloud-libraries",name:"nextcloud-vue",avatar:"https://avatars.githubusercontent.com/u/1855448?s=40&v=4",path:"/nextcloud-libraries/nextcloud-vue",ourl:"https://github.com/nextcloud-libraries",url:"https://github.com/nextcloud-libraries/nextcloud-vue",description:"",language:"Vue",stars:240,forks:95,starup:0},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",ourl:"https://github.com/hslr-s",url:"https://github.com/hslr-s/sun-panel",description:"",language:"Vue",stars:4971,forks:586,starup:3},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:202,forks:670,starup:0},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:2982,forks:703,starup:3},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:2538,forks:453,starup:3},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6356,forks:4285,starup:4}],"Vue-weekly":[{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:912,forks:253,starup:8},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1140,forks:307,starup:22},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2332,forks:316,starup:13},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37227,forks:4635,starup:117},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2708,forks:1168,starup:11},{title:`giuseppe99barchetta /

      SuggestArr`,owner:"giuseppe99barchetta",name:"SuggestArr",avatar:"https://avatars.githubusercontent.com/u/55151669?s=40&v=4",path:"/giuseppe99barchetta/SuggestArr",ourl:"https://github.com/giuseppe99barchetta",url:"https://github.com/giuseppe99barchetta/SuggestArr",description:"",language:"Vue",stars:1026,forks:15,starup:103},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1192,forks:233,starup:7},{title:`vrcx-team /

      VRCX`,owner:"vrcx-team",name:"VRCX",avatar:"https://avatars.githubusercontent.com/u/11171153?s=40&v=4",path:"/vrcx-team/VRCX",ourl:"https://github.com/vrcx-team",url:"https://github.com/vrcx-team/VRCX",description:"",language:"Vue",stars:1627,forks:328,starup:11},{title:`pterodactyl /

      documentation`,owner:"pterodactyl",name:"documentation",avatar:"https://avatars.githubusercontent.com/u/418376?s=40&v=4",path:"/pterodactyl/documentation",ourl:"https://github.com/pterodactyl",url:"https://github.com/pterodactyl/documentation",description:"",language:"Vue",stars:182,forks:1933,starup:0},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6356,forks:4285,starup:34},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2352,forks:81,starup:21},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11151,forks:898,starup:25},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24078,forks:1769,starup:62},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:343,forks:15,starup:3},{title:`creazy231 /

      tools-for-autodarts`,owner:"creazy231",name:"tools-for-autodarts",avatar:"https://avatars.githubusercontent.com/u/13473174?s=40&v=4",path:"/creazy231/tools-for-autodarts",ourl:"https://github.com/creazy231",url:"https://github.com/creazy231/tools-for-autodarts",description:"",language:"Vue",stars:102,forks:22,starup:2}],"Vue-monthly":[{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3124,forks:419,starup:181},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6153,forks:3108,starup:461},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6356,forks:4285,starup:206},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:1281,forks:77,starup:249},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24078,forks:1769,starup:330},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:27924,forks:3151,starup:236},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4501,forks:3020,starup:58},{title:`Kuingsmile /

      word-GPT-Plus`,owner:"Kuingsmile",name:"word-GPT-Plus",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/Kuingsmile/word-GPT-Plus",ourl:"https://github.com/Kuingsmile",url:"https://github.com/Kuingsmile/word-GPT-Plus",description:"",language:"Vue",stars:1085,forks:190,starup:36},{title:`nextcloud-libraries /

      nextcloud-vue`,owner:"nextcloud-libraries",name:"nextcloud-vue",avatar:"https://avatars.githubusercontent.com/u/1855448?s=40&v=4",path:"/nextcloud-libraries/nextcloud-vue",ourl:"https://github.com/nextcloud-libraries",url:"https://github.com/nextcloud-libraries/nextcloud-vue",description:"",language:"Vue",stars:240,forks:95,starup:0},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:912,forks:253,starup:43},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31585,forks:8601,starup:276},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:2982,forks:703,starup:70},{title:`giuseppe99barchetta /

      SuggestArr`,owner:"giuseppe99barchetta",name:"SuggestArr",avatar:"https://avatars.githubusercontent.com/u/55151669?s=40&v=4",path:"/giuseppe99barchetta/SuggestArr",ourl:"https://github.com/giuseppe99barchetta",url:"https://github.com/giuseppe99barchetta/SuggestArr",description:"",language:"Vue",stars:1026,forks:15,starup:133},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",ourl:"https://github.com/Yin-Hongwei",url:"https://github.com/Yin-Hongwei/music-website",description:"",language:"Vue",stars:6604,forks:1629,starup:36},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54203,forks:14562,starup:26},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2332,forks:316,starup:76},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:202,forks:670,starup:2}]},gt=_({__name:"index",setup(w){const{view:s,dateRange:o,language:r,color:i}=Q(),l=W(()=>v(Y[`${r.value}-${o.value}`]));V("color",i),V("data",l);function v(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=F,m=I,g=P,d=M,t=E,e=O,k=B,y=X,L=N;return c(),T("div",null,[b(d,null,{default:x(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:x(()=>[h(s)==="list"?(c(),f(e,{key:0},{icons:x(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),f(k,{key:1,"has-starup":""})):h(s)==="chart"?(c(),f(y,{key:2})):(c(),f(L,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
