import D from"./CxtriY2q.js";import R from"./k4xK7Jl9.js";import q from"./BQmyJJrJ.js";import E from"./QkFP1KK4.js";import F from"./Def9IZls.js";import L from"./QNRwRfV9.js";import K from"./6zc9YF22.js";import{d as z}from"./B_9KuB4R.js";import{s as G,u as A,a as C,b as J,i as N,c as P}from"./CwnY8yCI.js";import{g as T,i as $,j as B,o as c,c as x,n as j,A as U,b,w as S,T as H,k as _,l as h,m as w,r as M,s as V}from"./DahEE79-.js";import"./gLsB2WRs.js";import"./p2-M2djV.js";import"./Cisp64vn.js";import"./B9Yrmjcu.js";import"./psHWM6YO.js";const Y=T({__name:"Chart",setup(f){const r=$("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(G),s=A("趋势仓库总指标排行榜",o);function u(i){const a=z(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,k=e.starup+e.stars+e.forks;return y-k});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=C(s,J);B(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),x("div",{ref_key:"chartRef",ref:l,style:j({height:v})},null,4))}}),X=Object.assign(Y,{__name:"TrendChart"}),Q=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=U(r),u=A("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(u,J);function v(a){const n=z(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:N(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}B(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),x("div",{ref_key:"chartRef",ref:l,style:j({height:i})},null,4))}}),O=Object.assign(Q,{__name:"TrendStarupChart"}),W={"JavaScript-daily":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:3769,forks:142,starup:939},{title:`facebook /

      react`,owner:"facebook",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/facebook/react",ourl:"https://github.com/facebook",url:"https://github.com/facebook/react",description:"",language:"JavaScript",stars:243880,forks:50719,starup:118},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:9935,forks:18932,starup:11},{title:`xinnan-tech /

      xiaozhi-esp32-server`,owner:"xinnan-tech",name:"xiaozhi-esp32-server",avatar:"https://avatars.githubusercontent.com/u/32005838?s=40&v=4",path:"/xinnan-tech/xiaozhi-esp32-server",ourl:"https://github.com/xinnan-tech",url:"https://github.com/xinnan-tech/xiaozhi-esp32-server",description:"",language:"JavaScript",stars:8838,forks:3008,starup:18},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",ourl:"https://github.com/trekhleb",url:"https://github.com/trekhleb/javascript-algorithms",description:"",language:"JavaScript",stars:195821,forks:31110,starup:84},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10417,forks:1111,starup:25},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:806,forks:226,starup:58},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:27738,forks:2345,starup:605}],"JavaScript-weekly":[{title:`apify /

      agent-skills`,owner:"apify",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/apify/agent-skills",ourl:"https://github.com/apify",url:"https://github.com/apify/agent-skills",description:"",language:"JavaScript",stars:1521,forks:162,starup:809},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4013,forks:703,starup:159},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22517,forks:2675,starup:1253},{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:8767,forks:752,starup:450},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30333,forks:5791,starup:329},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:3623,forks:320,starup:378},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:9935,forks:18932,starup:309},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20258,forks:1341,starup:88},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:4299,forks:203,starup:358},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41656,forks:2183,starup:334},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:3769,forks:142,starup:3241},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:116246,forks:34987,starup:262},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:21412,forks:1181,starup:303},{title:`wangrongding /

      wechat-bot`,owner:"wangrongding",name:"wechat-bot",avatar:"https://avatars.githubusercontent.com/u/42437658?s=40&v=4",path:"/wangrongding/wechat-bot",ourl:"https://github.com/wangrongding",url:"https://github.com/wangrongding/wechat-bot",description:"",language:"JavaScript",stars:9919,forks:1169,starup:76}],"JavaScript-monthly":[{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:27738,forks:2345,starup:14728},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1397,forks:128,starup:632},{title:`qeeqbox /

      social-analyzer`,owner:"qeeqbox",name:"social-analyzer",avatar:"https://avatars.githubusercontent.com/u/52905881?s=40&v=4",path:"/qeeqbox/social-analyzer",ourl:"https://github.com/qeeqbox",url:"https://github.com/qeeqbox/social-analyzer",description:"",language:"JavaScript",stars:22045,forks:2068,starup:1154},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10417,forks:1111,starup:1487},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4013,forks:703,starup:469},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:9935,forks:18932,starup:440},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41656,forks:2183,starup:931},{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:8767,forks:752,starup:844},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1405,forks:63,starup:463},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:774,forks:82,starup:363},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30333,forks:5791,starup:799},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22378,forks:841,starup:322},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22517,forks:2675,starup:4604},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:36857,forks:2942,starup:784},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:24194,forks:4888,starup:1292},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27247,forks:4936,starup:436},{title:`firecrawl /

      firecrawl-mcp-server`,owner:"firecrawl",name:"firecrawl-mcp-server",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl-mcp-server",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl-mcp-server",description:"",language:"JavaScript",stars:5727,forks:642,starup:279}],"TypeScript-daily":[{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:12084,forks:1121,starup:661},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:3880,forks:305,starup:891},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:299987,forks:56699,starup:9080},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:109199,forks:8115,starup:169},{title:`czlonkowski /

      n8n-mcp`,owner:"czlonkowski",name:"n8n-mcp",avatar:"https://avatars.githubusercontent.com/u/56956555?s=40&v=4",path:"/czlonkowski/n8n-mcp",ourl:"https://github.com/czlonkowski",url:"https://github.com/czlonkowski/n8n-mcp",description:"",language:"TypeScript",stars:14849,forks:2606,starup:131},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:11296,forks:2398,starup:171},{title:`apify /

      crawlee`,owner:"apify",name:"crawlee",avatar:"https://avatars.githubusercontent.com/u/23726914?s=40&v=4",path:"/apify/crawlee",ourl:"https://github.com/apify",url:"https://github.com/apify/crawlee",description:"",language:"TypeScript",stars:22211,forks:1249,starup:31},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:5322,forks:842,starup:238},{title:`afkarxyz /

      SpotiFLAC`,owner:"afkarxyz",name:"SpotiFLAC",avatar:"https://avatars.githubusercontent.com/u/173781715?s=40&v=4",path:"/afkarxyz/SpotiFLAC",ourl:"https://github.com/afkarxyz",url:"https://github.com/afkarxyz/SpotiFLAC",description:"",language:"TypeScript",stars:5632,forks:316,starup:253}],"TypeScript-weekly":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:32283,forks:3170,starup:10249},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:32660,forks:3508,starup:3187},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:24986,forks:4523,starup:4137},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:35424,forks:5947,starup:9275},{title:`CodebuffAI /

      codebuff`,owner:"CodebuffAI",name:"codebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/codebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/codebuff",description:"",language:"TypeScript",stars:4185,forks:478,starup:1040},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:6531,forks:430,starup:2589},{title:`aidenybai /

      react-grab`,owner:"aidenybai",name:"react-grab",avatar:"https://avatars.githubusercontent.com/u/38025074?s=40&v=4",path:"/aidenybai/react-grab",ourl:"https://github.com/aidenybai",url:"https://github.com/aidenybai/react-grab",description:"",language:"TypeScript",stars:6408,forks:292,starup:1142},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:11658,forks:1388,starup:2698},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",ourl:"https://github.com/toeverything",url:"https://github.com/toeverything/AFFiNE",description:"",language:"TypeScript",stars:65732,forks:4581,starup:2286},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:109199,forks:8115,starup:1617},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:20464,forks:2263,starup:1957},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:11296,forks:2398,starup:689},{title:`tiann /

      hapi`,owner:"tiann",name:"hapi",avatar:"https://avatars.githubusercontent.com/u/4233744?s=40&v=4",path:"/tiann/hapi",ourl:"https://github.com/tiann",url:"https://github.com/tiann/hapi",description:"",language:"TypeScript",stars:2539,forks:241,starup:480},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:299988,forks:56699,starup:45321}],"TypeScript-monthly":[{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:32283,forks:3170,starup:14824},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:299988,forks:56699,starup:117792},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:22163,forks:2347,starup:12353},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:6531,forks:430,starup:5012},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:24986,forks:4523,starup:8053},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:33103,forks:3294,starup:13928},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:14102,forks:819,starup:6281},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:5322,forks:842,starup:3592},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:8208,forks:1046,starup:2107},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:4850,forks:306,starup:3235},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:32660,forks:3508,starup:3899},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:10179,forks:679,starup:1717},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:28400,forks:1665,starup:4758},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4478,forks:449,starup:1356},{title:`grafana /

      grafana`,owner:"grafana",name:"grafana",avatar:"https://avatars.githubusercontent.com/u/10999?s=40&v=4",path:"/grafana/grafana",ourl:"https://github.com/grafana",url:"https://github.com/grafana/grafana",description:"",language:"TypeScript",stars:72650,forks:13528,starup:691},{title:`steipete /

      mcporter`,owner:"steipete",name:"mcporter",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/mcporter",ourl:"https://github.com/steipete",url:"https://github.com/steipete/mcporter",description:"",language:"TypeScript",stars:2693,forks:175,starup:1010},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:3617,forks:215,starup:1426}],"Vue-daily":[{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6471,forks:3328,starup:24},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37511,forks:4679,starup:30},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6411,forks:4329,starup:5},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24199,forks:1775,starup:12},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2738,forks:1182,starup:3},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:922,forks:268,starup:2},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14140,forks:1654,starup:3},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4961,forks:960,starup:2},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8672,forks:1695,starup:8},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8298,forks:1892,starup:3},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4522,forks:3026,starup:1},{title:`Tencent /

      tdesign`,owner:"Tencent",name:"tdesign",avatar:"https://avatars.githubusercontent.com/u/26377630?s=40&v=4",path:"/Tencent/tdesign",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign",description:"",language:"Vue",stars:3779,forks:312,starup:3},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31716,forks:8632,starup:14},{title:`Tencent /

      tdesign-miniprogram`,owner:"Tencent",name:"tdesign-miniprogram",avatar:"https://avatars.githubusercontent.com/u/7017290?s=40&v=4",path:"/Tencent/tdesign-miniprogram",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign-miniprogram",description:"",language:"Vue",stars:1593,forks:325,starup:1},{title:`NyaomiDEV /

      Ampersand`,owner:"NyaomiDEV",name:"Ampersand",avatar:"https://avatars.githubusercontent.com/u/13177694?s=40&v=4",path:"/NyaomiDEV/Ampersand",ourl:"https://github.com/NyaomiDEV",url:"https://github.com/NyaomiDEV/Ampersand",description:"",language:"Vue",stars:47,forks:11,starup:0}],"Vue-weekly":[{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"Vue",stars:6471,forks:3328,starup:184},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6276,forks:491,starup:45},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:2909,forks:56,starup:123},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21125,forks:2302,starup:46},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90285,forks:30586,starup:31},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1044,forks:80,starup:74},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6450,forks:2429,starup:22},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",ourl:"https://github.com/BewlyBewly",url:"https://github.com/BewlyBewly/BewlyBewly",description:"",language:"Vue",stars:8682,forks:382,starup:34},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31716,forks:8632,starup:72},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11941,forks:2033,starup:66},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37511,forks:4679,starup:184},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4961,forks:960,starup:34},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12595,forks:619,starup:30},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:155,forks:332,starup:5},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",ourl:"https://github.com/kailong321200875",url:"https://github.com/kailong321200875/vue-element-plus-admin",description:"",language:"Vue",stars:3556,forks:852,starup:10},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8298,forks:1892,starup:17},{title:`frappe /

      frappe-ui`,owner:"frappe",name:"frappe-ui",avatar:"https://avatars.githubusercontent.com/u/9355208?s=40&v=4",path:"/frappe/frappe-ui",ourl:"https://github.com/frappe",url:"https://github.com/frappe/frappe-ui",description:"",language:"Vue",stars:862,forks:281,starup:2}],"Vue-monthly":[{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:155,forks:332,starup:21},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3038,forks:445,starup:139},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:922,forks:268,starup:32},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2358,forks:323,starup:57},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1170,forks:318,starup:63},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28003,forks:3159,starup:182},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1044,forks:80,starup:158},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",ourl:"https://github.com/kailong321200875",url:"https://github.com/kailong321200875/vue-element-plus-admin",description:"",language:"Vue",stars:3556,forks:852,starup:22},{title:`imsyy /

      home`,owner:"imsyy",name:"home",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/home",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/home",description:"",language:"Vue",stars:4522,forks:3026,starup:47},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3710,forks:140,starup:29},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3321,forks:274,starup:120},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:205,forks:713,starup:4},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6276,forks:491,starup:122},{title:`frappe /

      drive`,owner:"frappe",name:"drive",avatar:"https://avatars.githubusercontent.com/u/54000944?s=40&v=4",path:"/frappe/drive",ourl:"https://github.com/frappe",url:"https://github.com/frappe/drive",description:"",language:"Vue",stars:668,forks:262,starup:42}]},gt=T({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=P(),l=M(()=>v(W[`${s.value}-${o.value}`]));V("color",u),V("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=D,m=R,g=q,d=E,t=F,e=L,y=K,k=X,I=O;return c(),x("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>_(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>_(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>_(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(H,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),w(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),w(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),w(k,{key:2})):(c(),w(I,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
