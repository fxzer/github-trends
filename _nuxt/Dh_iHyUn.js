import P from"./C7mkB9IA.js";import G from"./CBeoACti.js";import K from"./D-BBXy2b.js";import H from"./Dzef-5N3.js";import W from"./DJfDTd6A.js";import F from"./DKPzWDzA.js";import M from"./awtUrHga.js";import{d as C}from"./B_9KuB4R.js";import{s as D,u as V,a as A,b as j,i as $,c as R}from"./BpHgMJmt.js";import{g as _,i as B,j as J,o as c,c as T,n as q,A as Q,b,w as x,T as X,k as S,l as h,m as f,r as O,s as z}from"./B8tWBiO4.js";import"./DxqDTC59.js";import"./p2-M2djV.js";import"./eU_kpqd7.js";import"./D78XSLA-.js";import"./DYeGqmJI.js";const L=_({__name:"Chart",setup(w){const s=B("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(D),r=V("趋势仓库总指标排行榜",o);function n(i){const a=C(i);a.sort((t,e)=>{const k=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return k-y});const[u,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=u,r.value.series[1].data=m,r.value.series[2].data=g}const{domRef:l}=A(r,j);J(s,()=>{n(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:v})},null,4))}}),U=Object.assign(L,{__name:"TrendChart"}),N=_({__name:"StarupChart",props:{data:{}},setup(w){const s=w,{data:o}=Q(s),n=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=A(n,j);function v(a){const u=C(a);u.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=u.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:$(m[e%m.length])}));n.value.series[0].data=d,n.value.yAxis.data=g}J(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:q({height:i})},null,4))}}),Y=Object.assign(N,{__name:"TrendStarupChart"}),E={"JavaScript-daily":[{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22255,forks:2642,starup:622},{title:`SynkraAI /

      aiox-core`,owner:"SynkraAI",name:"aiox-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aiox-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aiox-core",description:"",language:"JavaScript",stars:2162,forks:709,starup:77},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:243643,forks:50653,starup:66},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:51731,forks:4663,starup:26},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:394,forks:42,starup:13},{title:`chalk /

      chalk`,owner:"chalk",name:"chalk",avatar:"https://avatars.githubusercontent.com/u/170270?s=40&v=4",path:"/chalk/chalk",ourl:"https://github.com/chalk",url:"https://github.com/chalk/chalk",description:"",language:"JavaScript",stars:23018,forks:919,starup:8},{title:`jgraph /

      drawio-desktop`,owner:"jgraph",name:"drawio-desktop",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio-desktop",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio-desktop",description:"",language:"JavaScript",stars:59681,forks:5595,starup:19},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20210,forks:1335,starup:25},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41431,forks:2171,starup:56},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:66021,forks:9305,starup:21},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:55673,forks:6021,starup:266},{title:`jquery /

      jquery`,owner:"jquery",name:"jquery",avatar:"https://avatars.githubusercontent.com/u/1615?s=40&v=4",path:"/jquery/jquery",ourl:"https://github.com/jquery",url:"https://github.com/jquery/jquery",description:"",language:"JavaScript",stars:59851,forks:20473,starup:5},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:3918,forks:692,starup:32}],"JavaScript-weekly":[{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1349,forks:59,starup:150},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:9e3,forks:1422,starup:564},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:24999,forks:2134,starup:4129},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:3341,forks:293,starup:511},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30137,forks:5765,starup:300},{title:`WebKit /

      WebKit`,owner:"WebKit",name:"WebKit",avatar:"https://avatars.githubusercontent.com/u/995975?s=40&v=4",path:"/WebKit/WebKit",ourl:"https://github.com/WebKit",url:"https://github.com/WebKit/WebKit",description:"",language:"JavaScript",stars:9653,forks:1866,starup:29},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:23948,forks:4852,starup:374},{title:`pixeltris /

      TwitchAdSolutions`,owner:"pixeltris",name:"TwitchAdSolutions",avatar:"https://avatars.githubusercontent.com/u/6952411?s=40&v=4",path:"/pixeltris/TwitchAdSolutions",ourl:"https://github.com/pixeltris",url:"https://github.com/pixeltris/TwitchAdSolutions",description:"",language:"JavaScript",stars:11247,forks:579,starup:247},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:8770,forks:2986,starup:90}],"JavaScript-monthly":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:24999,forks:2134,starup:13346},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41431,forks:2171,starup:936},{title:`Coding-Solo /

      godot-mcp`,owner:"Coding-Solo",name:"godot-mcp",avatar:"https://avatars.githubusercontent.com/u/60202842?s=40&v=4",path:"/Coding-Solo/godot-mcp",ourl:"https://github.com/Coding-Solo",url:"https://github.com/Coding-Solo/godot-mcp",description:"",language:"JavaScript",stars:2109,forks:244,starup:433},{title:`qeeqbox /

      social-analyzer`,owner:"qeeqbox",name:"social-analyzer",avatar:"https://avatars.githubusercontent.com/u/52905881?s=40&v=4",path:"/qeeqbox/social-analyzer",ourl:"https://github.com/qeeqbox",url:"https://github.com/qeeqbox/social-analyzer",description:"",language:"JavaScript",stars:21912,forks:2056,starup:1172},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1349,forks:59,starup:464},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27164,forks:4931,starup:371},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10343,forks:1105,starup:1449},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:728,forks:74,starup:388},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:36825,forks:2936,starup:1059},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:8746,forks:615,starup:1147},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:66021,forks:9305,starup:225},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:8361,forks:3084,starup:579},{title:`GitSquared /

      edex-ui`,owner:"GitSquared",name:"edex-ui",avatar:"https://avatars.githubusercontent.com/u/24496417?s=40&v=4",path:"/GitSquared/edex-ui",ourl:"https://github.com/GitSquared",url:"https://github.com/GitSquared/edex-ui",description:"",language:"JavaScript",stars:44381,forks:3031,starup:368},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:394,forks:42,starup:106},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22325,forks:838,starup:303},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:51972,forks:11354,starup:301}],"TypeScript-daily":[{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:31928,forks:3179,starup:2930},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:27974,forks:2633,starup:3006},{title:`CodebuffAI /

      codebuff`,owner:"CodebuffAI",name:"codebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/codebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/codebuff",description:"",language:"TypeScript",stars:3910,forks:459,starup:275},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Perplexica",description:"",language:"TypeScript",stars:31345,forks:3328,starup:648},{title:`lgazo /

      drawio-mcp-server`,owner:"lgazo",name:"drawio-mcp-server",avatar:"https://avatars.githubusercontent.com/u/783655?s=40&v=4",path:"/lgazo/drawio-mcp-server",ourl:"https://github.com/lgazo",url:"https://github.com/lgazo/drawio-mcp-server",description:"",language:"TypeScript",stars:880,forks:78,starup:34},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",ourl:"https://github.com/FlowiseAI",url:"https://github.com/FlowiseAI/Flowise",description:"",language:"TypeScript",stars:50410,forks:23874,starup:533},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:5100,forks:314,starup:268},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:266630,forks:51015,starup:5423},{title:`hoppscotch /

      hoppscotch`,owner:"hoppscotch",name:"hoppscotch",avatar:"https://avatars.githubusercontent.com/u/10395817?s=40&v=4",path:"/hoppscotch/hoppscotch",ourl:"https://github.com/hoppscotch",url:"https://github.com/hoppscotch/hoppscotch",description:"",language:"TypeScript",stars:78169,forks:5620,starup:65},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/vscode",description:"",language:"TypeScript",stars:182330,forks:38310,starup:78},{title:`docmost /

      docmost`,owner:"docmost",name:"docmost",avatar:"https://avatars.githubusercontent.com/u/16838612?s=40&v=4",path:"/docmost/docmost",ourl:"https://github.com/docmost",url:"https://github.com/docmost/docmost",description:"",language:"TypeScript",stars:19294,forks:1148,starup:81},{title:`linshenkx /

      prompt-optimizer`,owner:"linshenkx",name:"prompt-optimizer",avatar:"https://avatars.githubusercontent.com/u/32978552?s=40&v=4",path:"/linshenkx/prompt-optimizer",ourl:"https://github.com/linshenkx",url:"https://github.com/linshenkx/prompt-optimizer",description:"",language:"TypeScript",stars:23199,forks:2786,starup:177},{title:`evershopcommerce /

      evershop`,owner:"evershopcommerce",name:"evershop",avatar:"https://avatars.githubusercontent.com/u/6950941?s=40&v=4",path:"/evershopcommerce/evershop",ourl:"https://github.com/evershopcommerce",url:"https://github.com/evershopcommerce/evershop",description:"",language:"TypeScript",stars:9818,forks:2229,starup:30}],"TypeScript-weekly":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:27975,forks:2633,starup:8822},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:10191,forks:1247,starup:5308},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:21898,forks:4220,starup:3049},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:19259,forks:2146,starup:4330},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:5100,forks:314,starup:2930},{title:`CodebuffAI /

      codebuff`,owner:"CodebuffAI",name:"codebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/codebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/codebuff",description:"",language:"TypeScript",stars:3910,forks:459,starup:864},{title:`ItzCrazyKns /

      Perplexica`,owner:"ItzCrazyKns",name:"Perplexica",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Perplexica",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Perplexica",description:"",language:"TypeScript",stars:31345,forks:3328,starup:2162},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:7884,forks:996,starup:649},{title:`farion1231 /

      cc-switch`,owner:"farion1231",name:"cc-switch",avatar:"https://avatars.githubusercontent.com/u/44939412?s=40&v=4",path:"/farion1231/cc-switch",ourl:"https://github.com/farion1231",url:"https://github.com/farion1231/cc-switch",description:"",language:"TypeScript",stars:24332,forks:1493,starup:3648},{title:`vercel /

      chat`,owner:"vercel",name:"chat",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel/chat",ourl:"https://github.com/vercel",url:"https://github.com/vercel/chat",description:"",language:"TypeScript",stars:1105,forks:77,starup:289}],"TypeScript-monthly":[{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:31928,forks:3179,starup:27330},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:266630,forks:51015,starup:100739},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:20397,forks:2123,starup:13318},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:27975,forks:2633,starup:9213},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:12821,forks:716,starup:6258},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:5100,forks:314,starup:3681},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:4307,forks:734,starup:2967},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:17173,forks:2095,starup:6663},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:21898,forks:4220,starup:5237},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:4720,forks:290,starup:3182},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:10036,forks:666,starup:1629},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:33075,forks:2253,starup:9826},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4450,forks:447,starup:1359},{title:`steipete /

      mcporter`,owner:"steipete",name:"mcporter",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/mcporter",ourl:"https://github.com/steipete",url:"https://github.com/steipete/mcporter",description:"",language:"TypeScript",stars:2487,forks:166,starup:1068},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:27648,forks:1614,starup:4374},{title:`farion1231 /

      cc-switch`,owner:"farion1231",name:"cc-switch",avatar:"https://avatars.githubusercontent.com/u/44939412?s=40&v=4",path:"/farion1231/cc-switch",ourl:"https://github.com/farion1231",url:"https://github.com/farion1231/cc-switch",description:"",language:"TypeScript",stars:24332,forks:1493,starup:7964},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/54054995?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:17941,forks:1388,starup:5732},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:7884,forks:996,starup:1876}],"Vue-daily":[{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8650,forks:1695,starup:4},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:19858,forks:3692,starup:9},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3171,forks:423,starup:10},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14124,forks:1651,starup:3},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6256,forks:487,starup:11},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31666,forks:8618,starup:10},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37369,forks:4667,starup:16},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12580,forks:618,starup:7},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:915,forks:261,starup:1},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90290,forks:30602,starup:6},{title:`kimmknight /

      raweb`,owner:"kimmknight",name:"raweb",avatar:"https://avatars.githubusercontent.com/u/16235094?s=40&v=4",path:"/kimmknight/raweb",ourl:"https://github.com/kimmknight",url:"https://github.com/kimmknight/raweb",description:"",language:"Vue",stars:736,forks:95,starup:4},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1003,forks:78,starup:14},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1195,forks:232,starup:1},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11892,forks:2028,starup:11},{title:`ikuaitu /

      vue-fabric-editor`,owner:"ikuaitu",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/ikuaitu/vue-fabric-editor",ourl:"https://github.com/ikuaitu",url:"https://github.com/ikuaitu/vue-fabric-editor",description:"",language:"Vue",stars:7762,forks:1358,starup:4},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:27976,forks:3156,starup:11}],"Vue-weekly":[{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:19858,forks:3692,starup:59},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6343,forks:3231,starup:174},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21101,forks:2297,starup:53},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3012,forks:713,starup:28},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31666,forks:8618,starup:69},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1003,forks:78,starup:75},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3028,forks:443,starup:94},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90290,forks:30602,starup:32},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:2829,forks:52,starup:150},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1298,forks:329,starup:20},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6256,forks:487,starup:52},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8650,forks:1695,starup:29},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4943,forks:953,starup:55},{title:`chenjigang4167 /

      testhub_platform`,owner:"chenjigang4167",name:"testhub_platform",avatar:"https://avatars.githubusercontent.com/u/39072129?s=40&v=4",path:"/chenjigang4167/testhub_platform",ourl:"https://github.com/chenjigang4167",url:"https://github.com/chenjigang4167/testhub_platform",description:"",language:"Vue",stars:353,forks:185,starup:22},{title:`zyronon /

      douyin`,owner:"zyronon",name:"douyin",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/douyin",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/douyin",description:"",language:"Vue",stars:11393,forks:3090,starup:17},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11892,forks:2028,starup:65},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12580,forks:618,starup:32},{title:`Tresjs /

      tres`,owner:"Tresjs",name:"tres",avatar:"https://avatars.githubusercontent.com/u/4699008?s=40&v=4",path:"/Tresjs/tres",ourl:"https://github.com/Tresjs",url:"https://github.com/Tresjs/tres",description:"",language:"Vue",stars:3514,forks:177,starup:22},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6327,forks:1031,starup:33}],"Vue-monthly":[{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3028,forks:443,starup:137},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3171,forks:423,starup:159},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:915,forks:261,starup:34},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2349,forks:323,starup:63},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1159,forks:314,starup:61},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4519,forks:3028,starup:54},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:27976,forks:3156,starup:188},{title:`Kuingsmile /

      word-GPT-Plus`,owner:"Kuingsmile",name:"word-GPT-Plus",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/Kuingsmile/word-GPT-Plus",ourl:"https://github.com/Kuingsmile",url:"https://github.com/Kuingsmile/word-GPT-Plus",description:"",language:"Vue",stars:1099,forks:192,starup:32},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3708,forks:140,starup:33},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:351,forks:15,starup:20},{title:`Yin-Hongwei /

      music-website`,owner:"Yin-Hongwei",name:"music-website",avatar:"https://avatars.githubusercontent.com/u/37996435?s=40&v=4",path:"/Yin-Hongwei/music-website",ourl:"https://github.com/Yin-Hongwei",url:"https://github.com/Yin-Hongwei/music-website",description:"",language:"Vue",stars:6613,forks:1630,starup:24},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1003,forks:78,starup:124},{title:`x2rr /

      funds`,owner:"x2rr",name:"funds",avatar:"https://avatars.githubusercontent.com/u/23189213?s=40&v=4",path:"/x2rr/funds",ourl:"https://github.com/x2rr",url:"https://github.com/x2rr/funds",description:"",language:"Vue",stars:2946,forks:380,starup:166},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3283,forks:273,starup:93}]},gt=_({__name:"index",setup(w){const{view:s,dateRange:o,language:r,color:n}=R(),l=O(()=>v(E[`${r.value}-${o.value}`]));z("color",n),z("data",l);function v(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=P,m=G,g=K,d=H,t=W,e=F,k=M,y=U,I=Y;return c(),T("div",null,[b(d,null,{default:x(()=>[b(u,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(X,{name:"fade-top",mode:"out-in"},{default:x(()=>[h(s)==="list"?(c(),f(e,{key:0},{icons:x(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(s)==="table"?(c(),f(k,{key:1,"has-starup":""})):h(s)==="chart"?(c(),f(y,{key:2})):(c(),f(I,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
