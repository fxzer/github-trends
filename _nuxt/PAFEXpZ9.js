import B from"./BuCzE6Wz.js";import H from"./XKzlCabn.js";import M from"./C1Siains.js";import q from"./9e42vSoR.js";import R from"./DUHdyoCb.js";import L from"./DI2cW9m6.js";import P from"./YNopnP8M.js";import{d as A}from"./B_9KuB4R.js";import{s as X,u as j,a as C,b as z,i as K,c as U}from"./Y7EOrEfK.js";import{g as x,i as D,j as I,o as c,c as T,n as J,A as E,b,w as S,T as $,k as _,l as h,m as f,r as O,s as V}from"./D5bhF-4-.js";import"./DgLYHg66.js";import"./p2-M2djV.js";import"./Dj_VVWFg.js";import"./4T-iastc.js";import"./C3Q0SpBb.js";const G=x({__name:"Chart",setup(k){const r=D("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(X),s=j("趋势仓库总指标排行榜",o);function n(i){const a=A(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[u,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=u,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=C(s,z);I(r,()=>{n(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:J({height:v})},null,4))}}),N=Object.assign(G,{__name:"TrendChart"}),Q=x({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=E(r),n=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(n,z);function v(a){const u=A(a);u.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=u.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:K(m[e%m.length])}));n.value.series[0].data=d,n.value.yAxis.data=g}I(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(c(),T("div",{ref_key:"chartRef",ref:l,style:J({height:i})},null,4))}}),W=Object.assign(Q,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:111360,forks:36306,starup:21},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"JavaScript",stars:20348,forks:1354,starup:42},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:8501,forks:3116,starup:15},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30152,forks:2530,starup:597},{title:`SheepChef /

      Abracadabra`,owner:"SheepChef",name:"Abracadabra",avatar:"https://avatars.githubusercontent.com/u/50871867?s=40&v=4",path:"/SheepChef/Abracadabra",ourl:"https://github.com/SheepChef",url:"https://github.com/SheepChef/Abracadabra",description:"",language:"JavaScript",stars:2299,forks:216,starup:3},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",ourl:"https://github.com/jaywcjlove",url:"https://github.com/jaywcjlove/awesome-mac",description:"",language:"JavaScript",stars:100190,forks:7496,starup:56},{title:`sub-store-org /

      Sub-Store`,owner:"sub-store-org",name:"Sub-Store",avatar:"https://avatars.githubusercontent.com/u/1210282?s=40&v=4",path:"/sub-store-org/Sub-Store",ourl:"https://github.com/sub-store-org",url:"https://github.com/sub-store-org/Sub-Store",description:"",language:"JavaScript",stars:8912,forks:1043,starup:12},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98006,forks:32715,starup:15},{title:`alam00000 /

      bentopdf`,owner:"alam00000",name:"bentopdf",avatar:"https://avatars.githubusercontent.com/u/50314772?s=40&v=4",path:"/alam00000/bentopdf",ourl:"https://github.com/alam00000",url:"https://github.com/alam00000/bentopdf",description:"",language:"JavaScript",stars:12049,forks:962,starup:23},{title:`SynkraAI /

      aiox-core`,owner:"SynkraAI",name:"aiox-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aiox-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aiox-core",description:"",language:"JavaScript",stars:2288,forks:758,starup:20}],"JavaScript-weekly":[{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:8819,forks:754,starup:382},{title:`apify /

      agent-skills`,owner:"apify",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/apify/agent-skills",ourl:"https://github.com/apify",url:"https://github.com/apify/agent-skills",description:"",language:"JavaScript",stars:1627,forks:175,starup:584},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:9972,forks:19092,starup:332},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30152,forks:2530,starup:4368},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4133,forks:718,starup:177},{title:`jaywcjlove /

      awesome-mac`,owner:"jaywcjlove",name:"awesome-mac",avatar:"https://avatars.githubusercontent.com/u/1680273?s=40&v=4",path:"/jaywcjlove/awesome-mac",ourl:"https://github.com/jaywcjlove",url:"https://github.com/jaywcjlove/awesome-mac",description:"",language:"JavaScript",stars:100190,forks:7496,starup:557},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:3864,forks:354,starup:456},{title:`zhaoolee /

      ChromeAppHeroes`,owner:"zhaoolee",name:"ChromeAppHeroes",avatar:"https://avatars.githubusercontent.com/u/15868458?s=40&v=4",path:"/zhaoolee/ChromeAppHeroes",ourl:"https://github.com/zhaoolee",url:"https://github.com/zhaoolee/ChromeAppHeroes",description:"",language:"JavaScript",stars:25330,forks:2614,starup:778},{title:`libaxuan /

      cursor2api-go`,owner:"libaxuan",name:"cursor2api-go",avatar:"https://avatars.githubusercontent.com/u/33255877?s=40&v=4",path:"/libaxuan/cursor2api-go",ourl:"https://github.com/libaxuan",url:"https://github.com/libaxuan/cursor2api-go",description:"",language:"JavaScript",stars:846,forks:263,starup:304},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30534,forks:5824,starup:369},{title:`lockfale /

      OSINT-Framework`,owner:"lockfale",name:"OSINT-Framework",avatar:"https://avatars.githubusercontent.com/u/16158727?s=40&v=4",path:"/lockfale/OSINT-Framework",ourl:"https://github.com/lockfale",url:"https://github.com/lockfale/OSINT-Framework",description:"",language:"JavaScript",stars:11005,forks:1788,starup:79},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:437,forks:44,starup:40}],"JavaScript-monthly":[{title:`SynkraAI /

      aiox-core`,owner:"SynkraAI",name:"aiox-core",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/SynkraAI/aiox-core",ourl:"https://github.com/SynkraAI",url:"https://github.com/SynkraAI/aiox-core",description:"",language:"JavaScript",stars:2288,forks:758,starup:1788},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:30152,forks:2530,starup:16164},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4133,forks:718,starup:567},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:41795,forks:2199,starup:1017},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10459,forks:1118,starup:1514},{title:`yctimlin /

      mcp_excalidraw`,owner:"yctimlin",name:"mcp_excalidraw",avatar:"https://avatars.githubusercontent.com/u/37396655?s=40&v=4",path:"/yctimlin/mcp_excalidraw",ourl:"https://github.com/yctimlin",url:"https://github.com/yctimlin/mcp_excalidraw",description:"",language:"JavaScript",stars:1437,forks:133,starup:548},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:930,forks:261,starup:599},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:30534,forks:5824,starup:945},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22419,forks:842,starup:328},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27176,forks:4937,starup:438},{title:`expo /

      skills`,owner:"expo",name:"skills",avatar:"https://avatars.githubusercontent.com/u/9664363?s=40&v=4",path:"/expo/skills",ourl:"https://github.com/expo",url:"https://github.com/expo/skills",description:"",language:"JavaScript",stars:1457,forks:67,starup:448},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:24348,forks:4910,starup:1323},{title:`harvard-edge /

      cs249r_book`,owner:"harvard-edge",name:"cs249r_book",avatar:"https://avatars.githubusercontent.com/u/6807956?s=40&v=4",path:"/harvard-edge/cs249r_book",ourl:"https://github.com/harvard-edge",url:"https://github.com/harvard-edge/cs249r_book",description:"",language:"JavaScript",stars:22681,forks:2707,starup:4581},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:56223,forks:6080,starup:1777}],"TypeScript-daily":[{title:`InsForge /

      InsForge`,owner:"InsForge",name:"InsForge",avatar:"https://avatars.githubusercontent.com/u/26497075?s=40&v=4",path:"/InsForge/InsForge",ourl:"https://github.com/InsForge",url:"https://github.com/InsForge/InsForge",description:"",language:"TypeScript",stars:4266,forks:434,starup:482},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:630,forks:81,starup:230},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:8448,forks:660,starup:1163},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:16017,forks:1399,starup:1047},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:6671,forks:3464,starup:48},{title:`google /

      A2UI`,owner:"google",name:"A2UI",avatar:"https://avatars.githubusercontent.com/u/6869388?s=40&v=4",path:"/google/A2UI",ourl:"https://github.com/google",url:"https://github.com/google/A2UI",description:"",language:"TypeScript",stars:13192,forks:989,starup:256},{title:`getnao /

      nao`,owner:"getnao",name:"nao",avatar:"https://avatars.githubusercontent.com/u/2658211?s=40&v=4",path:"/getnao/nao",ourl:"https://github.com/getnao",url:"https://github.com/getnao/nao",description:"",language:"TypeScript",stars:726,forks:91,starup:15},{title:`zhukunpenglinyutong /

      idea-claude-code-gui`,owner:"zhukunpenglinyutong",name:"idea-claude-code-gui",avatar:"https://avatars.githubusercontent.com/u/31264015?s=40&v=4",path:"/zhukunpenglinyutong/idea-claude-code-gui",ourl:"https://github.com/zhukunpenglinyutong",url:"https://github.com/zhukunpenglinyutong/idea-claude-code-gui",description:"",language:"TypeScript",stars:1733,forks:206,starup:45},{title:`vudovn /

      antigravity-kit`,owner:"vudovn",name:"antigravity-kit",avatar:"https://avatars.githubusercontent.com/u/116963762?s=40&v=4",path:"/vudovn/antigravity-kit",ourl:"https://github.com/vudovn",url:"https://github.com/vudovn/antigravity-kit",description:"",language:"TypeScript",stars:6061,forks:1198,starup:88},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:8923,forks:1675,starup:10},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:78950,forks:7912,starup:104},{title:`ericc-ch /

      copilot-api`,owner:"ericc-ch",name:"copilot-api",avatar:"https://avatars.githubusercontent.com/u/54889298?s=40&v=4",path:"/ericc-ch/copilot-api",ourl:"https://github.com/ericc-ch",url:"https://github.com/ericc-ch/copilot-api",description:"",language:"TypeScript",stars:2983,forks:514,starup:27},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:23851,forks:2516,starup:385}],"TypeScript-weekly":[{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:16017,forks:1399,starup:4825},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:27186,forks:4795,starup:3782},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:109534,forks:8181,starup:1622},{title:`FlorianBruniaux /

      claude-code-ultimate-guide`,owner:"FlorianBruniaux",name:"claude-code-ultimate-guide",avatar:"https://avatars.githubusercontent.com/u/3902606?s=40&v=4",path:"/FlorianBruniaux/claude-code-ultimate-guide",ourl:"https://github.com/FlorianBruniaux",url:"https://github.com/FlorianBruniaux/claude-code-ultimate-guide",description:"",language:"TypeScript",stars:1521,forks:253,starup:987},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:11472,forks:2438,starup:676},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:5919,forks:933,starup:1348},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:32976,forks:3551,starup:1058},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",ourl:"https://github.com/toeverything",url:"https://github.com/toeverything/AFFiNE",description:"",language:"TypeScript",stars:65959,forks:4603,starup:1590},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:33625,forks:3330,starup:3230},{title:`web-infra-dev /

      midscene`,owner:"web-infra-dev",name:"midscene",avatar:"https://avatars.githubusercontent.com/u/11739753?s=40&v=4",path:"/web-infra-dev/midscene",ourl:"https://github.com/web-infra-dev",url:"https://github.com/web-infra-dev/midscene",description:"",language:"TypeScript",stars:12160,forks:894,starup:189},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"TypeScript",stars:25190,forks:2885,starup:1139},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:6671,forks:3464,starup:279}],"TypeScript-monthly":[{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:38063,forks:6333,starup:33388},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:33625,forks:3330,starup:16209},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:313441,forks:59798,starup:122130},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:23851,forks:2516,starup:11806},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:27186,forks:4795,starup:9655},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:7008,forks:486,starup:5452},{title:`tobi /

      qmd`,owner:"tobi",name:"qmd",avatar:"https://avatars.githubusercontent.com/u/347?s=40&v=4",path:"/tobi/qmd",ourl:"https://github.com/tobi",url:"https://github.com/tobi/qmd",description:"",language:"TypeScript",stars:15369,forks:899,starup:6948},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:16017,forks:1399,starup:5355},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:5919,forks:933,starup:3975},{title:`southleft /

      figma-console-mcp`,owner:"southleft",name:"figma-console-mcp",avatar:"https://avatars.githubusercontent.com/u/645765?s=40&v=4",path:"/southleft/figma-console-mcp",ourl:"https://github.com/southleft",url:"https://github.com/southleft/figma-console-mcp",description:"",language:"TypeScript",stars:1015,forks:104,starup:683},{title:`rowboatlabs /

      rowboat`,owner:"rowboatlabs",name:"rowboat",avatar:"https://avatars.githubusercontent.com/u/30795890?s=40&v=4",path:"/rowboatlabs/rowboat",ourl:"https://github.com/rowboatlabs",url:"https://github.com/rowboatlabs/rowboat",description:"",language:"TypeScript",stars:9244,forks:791,starup:3528},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:32976,forks:3551,starup:4165},{title:`seerr-team /

      seerr`,owner:"seerr-team",name:"seerr",avatar:"https://avatars.githubusercontent.com/u/98979876?s=40&v=4",path:"/seerr-team/seerr",ourl:"https://github.com/seerr-team",url:"https://github.com/seerr-team/seerr",description:"",language:"TypeScript",stars:10258,forks:688,starup:1740},{title:`siteboon /

      claudecodeui`,owner:"siteboon",name:"claudecodeui",avatar:"https://avatars.githubusercontent.com/u/7479045?s=40&v=4",path:"/siteboon/claudecodeui",ourl:"https://github.com/siteboon",url:"https://github.com/siteboon/claudecodeui",description:"",language:"TypeScript",stars:8427,forks:1081,starup:2222},{title:`steipete /

      summarize`,owner:"steipete",name:"summarize",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/summarize",ourl:"https://github.com/steipete",url:"https://github.com/steipete/summarize",description:"",language:"TypeScript",stars:5031,forks:320,starup:3055},{title:`cloudflare /

      agents`,owner:"cloudflare",name:"agents",avatar:"https://avatars.githubusercontent.com/u/18808?s=40&v=4",path:"/cloudflare/agents",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/agents",description:"",language:"TypeScript",stars:4511,forks:452,starup:1334},{title:`KeygraphHQ /

      shannon`,owner:"KeygraphHQ",name:"shannon",avatar:"https://avatars.githubusercontent.com/u/178829317?s=40&v=4",path:"/KeygraphHQ/shannon",ourl:"https://github.com/KeygraphHQ",url:"https://github.com/KeygraphHQ/shannon",description:"",language:"TypeScript",stars:33539,forks:3364,starup:11828},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:10252,forks:836,starup:4317}],"Vue-daily":[{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:19917,forks:3698,starup:4},{title:`laoshuikaixue /

      VoiceHub`,owner:"laoshuikaixue",name:"VoiceHub",avatar:"https://avatars.githubusercontent.com/u/79132480?s=40&v=4",path:"/laoshuikaixue/VoiceHub",ourl:"https://github.com/laoshuikaixue",url:"https://github.com/laoshuikaixue/VoiceHub",description:"",language:"Vue",stars:101,forks:43,starup:2},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24231,forks:1777,starup:9},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31773,forks:8643,starup:10},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14154,forks:1655,starup:1},{title:`HoshinoSuzumi /

      chronoframe`,owner:"HoshinoSuzumi",name:"chronoframe",avatar:"https://avatars.githubusercontent.com/u/26276464?s=40&v=4",path:"/HoshinoSuzumi/chronoframe",ourl:"https://github.com/HoshinoSuzumi",url:"https://github.com/HoshinoSuzumi/chronoframe",description:"",language:"Vue",stars:1686,forks:111,starup:2},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6434,forks:4351,starup:6},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3236,forks:429,starup:8},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6295,forks:490,starup:6},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11981,forks:2033,starup:8},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3191,forks:5004,starup:0},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2741,forks:1188,starup:0},{title:`aleksey-hoffman /

      sigma-file-manager`,owner:"aleksey-hoffman",name:"sigma-file-manager",avatar:"https://avatars.githubusercontent.com/u/61761672?s=40&v=4",path:"/aleksey-hoffman/sigma-file-manager",ourl:"https://github.com/aleksey-hoffman",url:"https://github.com/aleksey-hoffman/sigma-file-manager",description:"",language:"Vue",stars:5269,forks:213,starup:4},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90287,forks:30578,starup:2},{title:`frappe /

      insights`,owner:"frappe",name:"insights",avatar:"https://avatars.githubusercontent.com/u/25369014?s=40&v=4",path:"/frappe/insights",ourl:"https://github.com/frappe",url:"https://github.com/frappe/insights",description:"",language:"Vue",stars:874,forks:425,starup:0},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:2591,forks:456,starup:1}],"Vue-weekly":[{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:19917,forks:3698,starup:56},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21143,forks:2302,starup:41},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31773,forks:8643,starup:108},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:158,forks:342,starup:4},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8686,forks:1696,starup:34},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1064,forks:80,starup:44},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8313,forks:1897,starup:25},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:11981,forks:2033,starup:78},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37567,forks:4691,starup:161},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12616,forks:622,starup:35},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3236,forks:429,starup:57},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28020,forks:3163,starup:43},{title:`zxwk1998 /

      vue-admin-better`,owner:"zxwk1998",name:"vue-admin-better",avatar:"https://avatars.githubusercontent.com/u/26647258?s=40&v=4",path:"/zxwk1998/vue-admin-better",ourl:"https://github.com/zxwk1998",url:"https://github.com/zxwk1998/vue-admin-better",description:"",language:"Vue",stars:18728,forks:3930,starup:19},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90287,forks:30578,starup:28},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:748,forks:75,starup:12},{title:`frappe /

      frappe-ui`,owner:"frappe",name:"frappe-ui",avatar:"https://avatars.githubusercontent.com/u/9355208?s=40&v=4",path:"/frappe/frappe-ui",ourl:"https://github.com/frappe",url:"https://github.com/frappe/frappe-ui",description:"",language:"Vue",stars:862,forks:281,starup:3},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:4977,forks:960,starup:31},{title:`laoshuikaixue /

      VoiceHub`,owner:"laoshuikaixue",name:"VoiceHub",avatar:"https://avatars.githubusercontent.com/u/79132480?s=40&v=4",path:"/laoshuikaixue/VoiceHub",ourl:"https://github.com/laoshuikaixue",url:"https://github.com/laoshuikaixue/VoiceHub",description:"",language:"Vue",stars:101,forks:43,starup:23}],"Vue-monthly":[{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:932,forks:274,starup:35},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3041,forks:446,starup:134},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:158,forks:342,starup:19},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2370,forks:325,starup:60},{title:`Adamant-im /

      adamant-im`,owner:"Adamant-im",name:"adamant-im",avatar:"https://avatars.githubusercontent.com/u/25831507?s=40&v=4",path:"/Adamant-im/adamant-im",ourl:"https://github.com/Adamant-im",url:"https://github.com/Adamant-im/adamant-im",description:"",language:"Vue",stars:748,forks:75,starup:16},{title:`Hacker233 /

      resume-design`,owner:"Hacker233",name:"resume-design",avatar:"https://avatars.githubusercontent.com/u/28037169?s=40&v=4",path:"/Hacker233/resume-design",ourl:"https://github.com/Hacker233",url:"https://github.com/Hacker233/resume-design",description:"",language:"Vue",stars:3349,forks:275,starup:145},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1064,forks:80,starup:165},{title:`kailong321200875 /

      vue-element-plus-admin`,owner:"kailong321200875",name:"vue-element-plus-admin",avatar:"https://avatars.githubusercontent.com/u/32283845?s=40&v=4",path:"/kailong321200875/vue-element-plus-admin",ourl:"https://github.com/kailong321200875",url:"https://github.com/kailong321200875/vue-element-plus-admin",description:"",language:"Vue",stars:3561,forks:852,starup:27},{title:`pulsejet /

      memories`,owner:"pulsejet",name:"memories",avatar:"https://avatars.githubusercontent.com/u/10709794?s=40&v=4",path:"/pulsejet/memories",ourl:"https://github.com/pulsejet",url:"https://github.com/pulsejet/memories",description:"",language:"Vue",stars:3712,forks:142,starup:27},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6295,forks:490,starup:129},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:205,forks:730,starup:3},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1178,forks:320,starup:64},{title:`Tresjs /

      tres`,owner:"Tresjs",name:"tres",avatar:"https://avatars.githubusercontent.com/u/4699008?s=40&v=4",path:"/Tresjs/tres",ourl:"https://github.com/Tresjs",url:"https://github.com/Tresjs/tres",description:"",language:"Vue",stars:3523,forks:178,starup:40}]},gt=x({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:n}=U(),l=O(()=>v(Y[`${s.value}-${o.value}`]));V("color",n),V("data",l);function v(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=B,m=H,g=M,d=q,t=R,e=L,w=P,y=N,F=W;return c(),T("div",null,[b(d,null,{default:S(()=>[b(u,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>_(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>_(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>_(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),f(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),f(w,{key:1,"has-starup":""})):h(r)==="chart"?(c(),f(y,{key:2})):(c(),f(F,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
