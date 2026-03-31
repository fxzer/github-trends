import z from"./zVS8miDO.js";import L from"./DSJgwsvk.js";import P from"./CUgZkd1H.js";import B from"./BNXJ93aN.js";import D from"./Co5-IF5e.js";import q from"./B8si4fup.js";import F from"./DL1Dq4J2.js";import{d as A}from"./B_9KuB4R.js";import{s as G,u as V,a as J,b as R,i as E,c as Z}from"./dGW0ihsr.js";import{g as x,i as X,j as I,o as c,c as C,n as j,A as $,b,w as S,T as O,k as T,l as h,m as y,r as U,s as _}from"./Dv8EQnHR.js";import"./Dmhq17iR.js";import"./p2-M2djV.js";import"./D8cnzpiJ.js";import"./D_DvZLYS.js";import"./B5EzL2pK.js";const K=x({__name:"Chart",setup(f){const r=X("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(G),s=V("趋势仓库总指标排行榜",o);function n(i){const a=A(i);a.sort((t,e)=>{const k=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return k-w});const[u,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=u,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=J(s,R);I(r,()=>{n(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),C("div",{ref_key:"chartRef",ref:l,style:j({height:v})},null,4))}}),H=Object.assign(K,{__name:"TrendChart"}),Y=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=$(r),n=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=J(n,R);function v(a){const u=A(a);u.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=u.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(m[e%m.length])}));n.value.series[0].data=d,n.value.yAxis.data=g}I(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(c(),C("div",{ref_key:"chartRef",ref:l,style:j({height:i})},null,4))}}),N=Object.assign(Y,{__name:"TrendStarupChart"}),W={"JavaScript-daily":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/7828962?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:37692,forks:4986,starup:11},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:52262,forks:11408,starup:39},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:116475,forks:35223,starup:29},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:57200,forks:6188,starup:117},{title:`libaxuan /

      cursor2api-go`,owner:"libaxuan",name:"cursor2api-go",avatar:"https://avatars.githubusercontent.com/u/33255877?s=40&v=4",path:"/libaxuan/cursor2api-go",ourl:"https://github.com/libaxuan",url:"https://github.com/libaxuan/cursor2api-go",description:"",language:"JavaScript",stars:1063,forks:322,starup:7},{title:`rgthree /

      rgthree-comfy`,owner:"rgthree",name:"rgthree-comfy",avatar:"https://avatars.githubusercontent.com/u/476360?s=40&v=4",path:"/rgthree/rgthree-comfy",ourl:"https://github.com/rgthree",url:"https://github.com/rgthree/rgthree-comfy",description:"",language:"JavaScript",stars:2939,forks:211,starup:5},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/5950722?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:10545,forks:1135,starup:10},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1444,forks:388,starup:29},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:22086,forks:1214,starup:38},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10035,forks:19754,starup:4}],"JavaScript-weekly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:120922,forks:15726,starup:17901},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:15466,forks:644,starup:3555},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:45487,forks:3665,starup:5747},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:17708,forks:2674,starup:1802},{title:`ChristopherKahler /

      paul`,owner:"ChristopherKahler",name:"paul",avatar:"https://avatars.githubusercontent.com/u/188632505?s=40&v=4",path:"/ChristopherKahler/paul",ourl:"https://github.com/ChristopherKahler",url:"https://github.com/ChristopherKahler/paul",description:"",language:"JavaScript",stars:589,forks:63,starup:157},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:11762,forks:1218,starup:60},{title:`SharpAI /

      DeepCamera`,owner:"SharpAI",name:"DeepCamera",avatar:"https://avatars.githubusercontent.com/u/3085564?s=40&v=4",path:"/SharpAI/DeepCamera",ourl:"https://github.com/SharpAI",url:"https://github.com/SharpAI/DeepCamera",description:"",language:"JavaScript",stars:2616,forks:417,starup:73},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",ourl:"https://github.com/anuraghazra",url:"https://github.com/anuraghazra/github-readme-stats",description:"",language:"JavaScript",stars:78935,forks:31885,starup:129},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:4795,forks:446,starup:602},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1444,forks:388,starup:241},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:22645,forks:852,starup:138}],"JavaScript-monthly":[{title:`affaan-m /

      everything-claude-code`,owner:"affaan-m",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/everything-claude-code",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/everything-claude-code",description:"",language:"JavaScript",stars:120922,forks:15726,starup:65098},{title:`jarrodwatts /

      claude-hud`,owner:"jarrodwatts",name:"claude-hud",avatar:"https://avatars.githubusercontent.com/u/35651410?s=40&v=4",path:"/jarrodwatts/claude-hud",ourl:"https://github.com/jarrodwatts",url:"https://github.com/jarrodwatts/claude-hud",description:"",language:"JavaScript",stars:15466,forks:644,starup:11515},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/186001655?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:45487,forks:3665,starup:24011},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:17708,forks:2674,starup:7961},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:1444,forks:388,starup:865},{title:`jgraph /

      drawio`,owner:"jgraph",name:"drawio",avatar:"https://avatars.githubusercontent.com/u/1761087?s=40&v=4",path:"/jgraph/drawio",ourl:"https://github.com/jgraph",url:"https://github.com/jgraph/drawio",description:"",language:"JavaScript",stars:4470,forks:752,starup:704},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:31197,forks:5933,starup:1433},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:14937,forks:641,starup:14601},{title:`sgoudelis /

      ground-station`,owner:"sgoudelis",name:"ground-station",avatar:"https://avatars.githubusercontent.com/u/4840328?s=40&v=4",path:"/sgoudelis/ground-station",ourl:"https://github.com/sgoudelis",url:"https://github.com/sgoudelis/ground-station",description:"",language:"JavaScript",stars:3368,forks:592,starup:3148},{title:`1186258278 /

      OpenClawChineseTranslation`,owner:"1186258278",name:"OpenClawChineseTranslation",avatar:"https://avatars.githubusercontent.com/u/42165041?s=40&v=4",path:"/1186258278/OpenClawChineseTranslation",ourl:"https://github.com/1186258278",url:"https://github.com/1186258278/OpenClawChineseTranslation",description:"",language:"JavaScript",stars:3567,forks:439,starup:1958},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20509,forks:1372,starup:406},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:4795,forks:446,starup:1938},{title:`Mintplex-Labs /

      anything-llm`,owner:"Mintplex-Labs",name:"anything-llm",avatar:"https://avatars.githubusercontent.com/u/16845892?s=40&v=4",path:"/Mintplex-Labs/anything-llm",ourl:"https://github.com/Mintplex-Labs",url:"https://github.com/Mintplex-Labs/anything-llm",description:"",language:"JavaScript",stars:57200,forks:6188,starup:2222},{title:`usebruno /

      bruno`,owner:"usebruno",name:"bruno",avatar:"https://avatars.githubusercontent.com/u/9350733?s=40&v=4",path:"/usebruno/bruno",ourl:"https://github.com/usebruno",url:"https://github.com/usebruno/bruno",description:"",language:"JavaScript",stars:42413,forks:2257,starup:1325}],"TypeScript-daily":[{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:439871,forks:43910,starup:368},{title:`apache /

      superset`,owner:"apache",name:"superset",avatar:"https://avatars.githubusercontent.com/u/487433?s=40&v=4",path:"/apache/superset",ourl:"https://github.com/apache",url:"https://github.com/apache/superset",description:"",language:"TypeScript",stars:72017,forks:16946,starup:49},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:43304,forks:5728,starup:511},{title:`steipete /

      mcporter`,owner:"steipete",name:"mcporter",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/steipete/mcporter",ourl:"https://github.com/steipete",url:"https://github.com/steipete/mcporter",description:"",language:"TypeScript",stars:3551,forks:231,starup:105},{title:`vas3k /

      TaxHacker`,owner:"vas3k",name:"TaxHacker",avatar:"https://avatars.githubusercontent.com/u/176344?s=40&v=4",path:"/vas3k/TaxHacker",ourl:"https://github.com/vas3k",url:"https://github.com/vas3k/TaxHacker",description:"",language:"TypeScript",stars:3422,forks:549,starup:810},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:11825,forks:751,starup:14},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:36654,forks:3628,starup:372},{title:`humanlayer /

      humanlayer`,owner:"humanlayer",name:"humanlayer",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/humanlayer",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/humanlayer",description:"",language:"TypeScript",stars:10170,forks:873,starup:45},{title:`Dokploy /

      dokploy`,owner:"Dokploy",name:"dokploy",avatar:"https://avatars.githubusercontent.com/u/47042324?s=40&v=4",path:"/Dokploy/dokploy",ourl:"https://github.com/Dokploy",url:"https://github.com/Dokploy/dokploy",description:"",language:"TypeScript",stars:32507,forks:2284,starup:101},{title:`appwrite /

      appwrite`,owner:"appwrite",name:"appwrite",avatar:"https://avatars.githubusercontent.com/u/1297371?s=40&v=4",path:"/appwrite/appwrite",ourl:"https://github.com/appwrite",url:"https://github.com/appwrite/appwrite",description:"",language:"TypeScript",stars:55418,forks:5162,starup:70},{title:`calcom /

      cal.com`,owner:"calcom",name:"cal.com",avatar:"https://avatars.githubusercontent.com/u/3504472?s=40&v=4",path:"/calcom/cal.com",ourl:"https://github.com/calcom",url:"https://github.com/calcom/cal.com",description:"",language:"TypeScript",stars:40854,forks:12377,starup:82},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:7552,forks:409,starup:195}],"TypeScript-weekly":[{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:8580,forks:1102,starup:5612},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:20346,forks:1929,starup:8038},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:20633,forks:1889,starup:2617},{title:`letta-ai /

      claude-subconscious`,owner:"letta-ai",name:"claude-subconscious",avatar:"https://avatars.githubusercontent.com/u/422990?s=40&v=4",path:"/letta-ai/claude-subconscious",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/claude-subconscious",description:"",language:"TypeScript",stars:2370,forks:171,starup:1357},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:28733,forks:3146,starup:5259},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:20620,forks:2456,starup:2449},{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:44137,forks:6742,starup:6996},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:43304,forks:5728,starup:2663},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:12116,forks:934,starup:1057},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:32442,forks:1918,starup:1405},{title:`7836246 /

      cursor2api`,owner:"7836246",name:"cursor2api",avatar:"https://avatars.githubusercontent.com/u/65436665?s=40&v=4",path:"/7836246/cursor2api",ourl:"https://github.com/7836246",url:"https://github.com/7836246/cursor2api",description:"",language:"TypeScript",stars:1600,forks:467,starup:448},{title:`vas3k /

      TaxHacker`,owner:"vas3k",name:"TaxHacker",avatar:"https://avatars.githubusercontent.com/u/176344?s=40&v=4",path:"/vas3k/TaxHacker",ourl:"https://github.com/vas3k",url:"https://github.com/vas3k/TaxHacker",description:"",language:"TypeScript",stars:3422,forks:549,starup:947}],"TypeScript-monthly":[{title:`shareAI-lab /

      learn-claude-code`,owner:"shareAI-lab",name:"learn-claude-code",avatar:"https://avatars.githubusercontent.com/u/35400185?s=40&v=4",path:"/shareAI-lab/learn-claude-code",ourl:"https://github.com/shareAI-lab",url:"https://github.com/shareAI-lab/learn-claude-code",description:"",language:"TypeScript",stars:44137,forks:6742,starup:24982},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:36654,forks:3628,starup:18952},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:20867,forks:2384,starup:14894},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:45587,forks:7301,starup:29127},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/310310?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:18830,forks:1617,starup:8147},{title:`FlorianBruniaux /

      claude-code-ultimate-guide`,owner:"FlorianBruniaux",name:"claude-code-ultimate-guide",avatar:"https://avatars.githubusercontent.com/u/3902606?s=40&v=4",path:"/FlorianBruniaux/claude-code-ultimate-guide",ourl:"https://github.com/FlorianBruniaux",url:"https://github.com/FlorianBruniaux/claude-code-ultimate-guide",description:"",language:"TypeScript",stars:2581,forks:375,starup:2147},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:28733,forks:3146,starup:13443},{title:`superset-sh /

      superset`,owner:"superset-sh",name:"superset",avatar:"https://avatars.githubusercontent.com/u/31864905?s=40&v=4",path:"/superset-sh/superset",ourl:"https://github.com/superset-sh",url:"https://github.com/superset-sh/superset",description:"",language:"TypeScript",stars:8323,forks:627,starup:6248},{title:`letta-ai /

      claude-subconscious`,owner:"letta-ai",name:"claude-subconscious",avatar:"https://avatars.githubusercontent.com/u/422990?s=40&v=4",path:"/letta-ai/claude-subconscious",ourl:"https://github.com/letta-ai",url:"https://github.com/letta-ai/claude-subconscious",description:"",language:"TypeScript",stars:2370,forks:171,starup:1893},{title:`BytePioneer-AI /

      openclaw-china`,owner:"BytePioneer-AI",name:"openclaw-china",avatar:"https://avatars.githubusercontent.com/u/61337845?s=40&v=4",path:"/BytePioneer-AI/openclaw-china",ourl:"https://github.com/BytePioneer-AI",url:"https://github.com/BytePioneer-AI/openclaw-china",description:"",language:"TypeScript",stars:3646,forks:328,starup:2684},{title:`ItzCrazyKns /

      Vane`,owner:"ItzCrazyKns",name:"Vane",avatar:"https://avatars.githubusercontent.com/u/95534749?s=40&v=4",path:"/ItzCrazyKns/Vane",ourl:"https://github.com/ItzCrazyKns",url:"https://github.com/ItzCrazyKns/Vane",description:"",language:"TypeScript",stars:33503,forks:3632,starup:4556},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:20633,forks:1889,starup:3902},{title:`openclaw /

      clawhub`,owner:"openclaw",name:"clawhub",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/clawhub",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/clawhub",description:"",language:"TypeScript",stars:7210,forks:1139,starup:4129},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:111093,forks:8365,starup:4161},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:35773,forks:2369,starup:9580},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:32442,forks:1918,starup:5635}],"Vue-daily":[{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2411,forks:271,starup:11},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:335,forks:38627,starup:1},{title:`dromara /

      go-view`,owner:"dromara",name:"go-view",avatar:"https://avatars.githubusercontent.com/u/43026031?s=40&v=4",path:"/dromara/go-view",ourl:"https://github.com/dromara",url:"https://github.com/dromara/go-view",description:"",language:"Vue",stars:897,forks:185,starup:2},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32704,forks:4710,starup:8},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:37883,forks:4715,starup:28},{title:`betaflight /

      betaflight-configurator`,owner:"betaflight",name:"betaflight-configurator",avatar:"https://avatars.githubusercontent.com/u/4742747?s=40&v=4",path:"/betaflight/betaflight-configurator",ourl:"https://github.com/betaflight",url:"https://github.com/betaflight/betaflight-configurator",description:"",language:"Vue",stars:3115,forks:1048,starup:4},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:159,forks:373,starup:0},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24387,forks:1783,starup:15},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:952,forks:280,starup:1},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:182,forks:25,starup:0}],"Vue-weekly":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:14653,forks:1202,starup:101},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24387,forks:1783,starup:94},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21441,forks:3919,starup:27},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6428,forks:1037,starup:41},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2910,forks:170,starup:52},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32704,forks:4710,starup:52},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:335,forks:38627,starup:3},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5058,forks:982,starup:38},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90307,forks:30564,starup:35},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14211,forks:1660,starup:42},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31928,forks:8691,starup:84},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2411,forks:271,starup:61},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11483,forks:1878,starup:16},{title:`ikuaitu /

      vue-fabric-editor`,owner:"ikuaitu",name:"vue-fabric-editor",avatar:"https://avatars.githubusercontent.com/u/13534626?s=40&v=4",path:"/ikuaitu/vue-fabric-editor",ourl:"https://github.com/ikuaitu",url:"https://github.com/ikuaitu/vue-fabric-editor",description:"",language:"Vue",stars:7805,forks:1370,starup:20},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8363,forks:1904,starup:29}],"Vue-monthly":[{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2411,forks:271,starup:159},{title:`ruxailab /

      RUXAILAB`,owner:"ruxailab",name:"RUXAILAB",avatar:"https://avatars.githubusercontent.com/u/128351990?s=40&v=4",path:"/ruxailab/RUXAILAB",ourl:"https://github.com/ruxailab",url:"https://github.com/ruxailab/RUXAILAB",description:"",language:"Vue",stars:159,forks:373,starup:13},{title:`dullage /

      flatnotes`,owner:"dullage",name:"flatnotes",avatar:"https://avatars.githubusercontent.com/u/16575268?s=40&v=4",path:"/dullage/flatnotes",ourl:"https://github.com/dullage",url:"https://github.com/dullage/flatnotes",description:"",language:"Vue",stars:2910,forks:170,starup:148},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90307,forks:30564,starup:149},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3321,forks:434,starup:202},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21191,forks:2308,starup:174},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:335,forks:38627,starup:15},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8736,forks:1710,starup:127},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8363,forks:1904,starup:109},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:31928,forks:8691,starup:379},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12139,forks:2056,starup:323},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11483,forks:1878,starup:63},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3204,forks:5006,starup:22},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1141,forks:80,starup:216},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1226,forks:335,starup:82}]},gt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:n}=Z(),l=U(()=>v(W[`${s.value}-${o.value}`]));_("color",n),_("data",l);function v(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=z,m=L,g=P,d=B,t=D,e=q,k=F,w=H,M=N;return c(),C("div",null,[b(d,null,{default:S(()=>[b(u,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(O,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),y(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),y(k,{key:1,"has-starup":""})):h(r)==="chart"?(c(),y(w,{key:2})):(c(),y(M,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
