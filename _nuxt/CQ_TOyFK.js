import R from"./BiGHRYww.js";import C from"./CRyYgsMF.js";import H from"./Vmfa4q_d.js";import O from"./h1U_TjNn.js";import q from"./DFlr0LV7.js";import F from"./CK1SlQgg.js";import G from"./71VEQEgz.js";import{d as V}from"./B_9KuB4R.js";import{s as D,u as z,a as j,b as P,i as B,c as W}from"./BsFnHFBk.js";import{g as T,i as Y,j as M,o as h,c as _,n as L,A as I,b,w as S,T as X,k as x,l as c,m as k,r as $,s as A}from"./r3SX5uza.js";import"./BkS8uiw1.js";import"./p2-M2djV.js";import"./CIcJbDxc.js";import"./D-ZQbhL5.js";import"./BXpDcpmr.js";const U=T({__name:"Chart",setup(f){const r=Y("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(D),s=z("趋势仓库总指标排行榜",o);function n(i){const a=V(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[u,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=u,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=j(s,P);M(r,()=>{n(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:L({height:v})},null,4))}}),N=Object.assign(U,{__name:"TrendChart"}),E=T({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=I(r),n=z("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=j(n,P);function v(a){const u=V(a);u.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=u.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:B(g[e%g.length])}));n.value.series[0].data=d,n.value.yAxis.data=m}M(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,u)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:L({height:i})},null,4))}}),K=Object.assign(E,{__name:"TrendStarupChart"}),Z={"JavaScript-daily":[{title:`browserbase /

      skills`,owner:"browserbase",name:"skills",avatar:"https://avatars.githubusercontent.com/u/3813908?s=40&v=4",path:"/browserbase/skills",ourl:"https://github.com/browserbase",url:"https://github.com/browserbase/skills",description:"",language:"JavaScript",stars:1900,forks:126,starup:322},{title:`Anarios /

      return-youtube-dislike`,owner:"Anarios",name:"return-youtube-dislike",avatar:"https://avatars.githubusercontent.com/u/3018711?s=40&v=4",path:"/Anarios/return-youtube-dislike",ourl:"https://github.com/Anarios",url:"https://github.com/Anarios/return-youtube-dislike",description:"",language:"JavaScript",stars:13556,forks:608,starup:9},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:3684,forks:870,starup:69},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:4006,forks:423,starup:109},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/87287585?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10214,forks:20847,starup:3},{title:`badrisnarayanan /

      antigravity-claude-proxy`,owner:"badrisnarayanan",name:"antigravity-claude-proxy",avatar:"https://avatars.githubusercontent.com/u/59133612?s=40&v=4",path:"/badrisnarayanan/antigravity-claude-proxy",ourl:"https://github.com/badrisnarayanan",url:"https://github.com/badrisnarayanan/antigravity-claude-proxy",description:"",language:"JavaScript",stars:3581,forks:488,starup:20},{title:`anuraghazra /

      github-readme-stats`,owner:"anuraghazra",name:"github-readme-stats",avatar:"https://avatars.githubusercontent.com/u/53787217?s=40&v=4",path:"/anuraghazra/github-readme-stats",ourl:"https://github.com/anuraghazra",url:"https://github.com/anuraghazra/github-readme-stats",description:"",language:"JavaScript",stars:79247,forks:32824,starup:26},{title:`viarotel-org /

      escrcpy`,owner:"viarotel-org",name:"escrcpy",avatar:"https://avatars.githubusercontent.com/u/38282758?s=40&v=4",path:"/viarotel-org/escrcpy",ourl:"https://github.com/viarotel-org",url:"https://github.com/viarotel-org/escrcpy",description:"",language:"JavaScript",stars:9697,forks:691,starup:11},{title:`crocodilestick /

      Calibre-Web-Automated`,owner:"crocodilestick",name:"Calibre-Web-Automated",avatar:"https://avatars.githubusercontent.com/u/105450872?s=40&v=4",path:"/crocodilestick/Calibre-Web-Automated",ourl:"https://github.com/crocodilestick",url:"https://github.com/crocodilestick/Calibre-Web-Automated",description:"",language:"JavaScript",stars:5520,forks:417,starup:6},{title:`mozilla /

      pdf.js`,owner:"mozilla",name:"pdf.js",avatar:"https://avatars.githubusercontent.com/u/2692120?s=40&v=4",path:"/mozilla/pdf.js",ourl:"https://github.com/mozilla",url:"https://github.com/mozilla/pdf.js",description:"",language:"JavaScript",stars:53239,forks:10608,starup:12},{title:`rgthree /

      rgthree-comfy`,owner:"rgthree",name:"rgthree-comfy",avatar:"https://avatars.githubusercontent.com/u/476360?s=40&v=4",path:"/rgthree/rgthree-comfy",ourl:"https://github.com/rgthree",url:"https://github.com/rgthree/rgthree-comfy",description:"",language:"JavaScript",stars:3044,forks:223,starup:5}],"JavaScript-weekly":[{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:11147,forks:1975,starup:2345},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:64346,forks:4089,starup:1374},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:2498,forks:371,starup:1359},{title:`juliangarnier /

      anime`,owner:"juliangarnier",name:"anime",avatar:"https://avatars.githubusercontent.com/u/1268691?s=40&v=4",path:"/juliangarnier/anime",ourl:"https://github.com/juliangarnier",url:"https://github.com/juliangarnier/anime",description:"",language:"JavaScript",stars:67777,forks:4553,starup:336},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:24709,forks:1287,starup:2619},{title:`robinebers /

      openusage`,owner:"robinebers",name:"openusage",avatar:"https://avatars.githubusercontent.com/u/16515780?s=40&v=4",path:"/robinebers/openusage",ourl:"https://github.com/robinebers",url:"https://github.com/robinebers/openusage",description:"",language:"JavaScript",stars:2233,forks:197,starup:189},{title:`copy /

      v86`,owner:"copy",name:"v86",avatar:"https://avatars.githubusercontent.com/u/1816456?s=40&v=4",path:"/copy/v86",ourl:"https://github.com/copy",url:"https://github.com/copy/v86",description:"",language:"JavaScript",stars:22865,forks:1793,starup:296},{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:4006,forks:423,starup:770},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:7516,forks:782,starup:544},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:40874,forks:3712,starup:185},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:26888,forks:5226,starup:562},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:14691,forks:855,starup:363},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12279,forks:3464,starup:50},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:741,forks:45,starup:75}],"JavaScript-monthly":[{title:`jo-inc /

      camofox-browser`,owner:"jo-inc",name:"camofox-browser",avatar:"https://avatars.githubusercontent.com/u/998?s=40&v=4",path:"/jo-inc/camofox-browser",ourl:"https://github.com/jo-inc",url:"https://github.com/jo-inc/camofox-browser",description:"",language:"JavaScript",stars:4006,forks:423,starup:2821},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/17893081?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:3684,forks:870,starup:1986},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:26391,forks:4202,starup:7841},{title:`badlogic /

      pi-skills`,owner:"badlogic",name:"pi-skills",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-skills",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-skills",description:"",language:"JavaScript",stars:1536,forks:155,starup:503},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:11147,forks:1975,starup:8395},{title:`songquanpeng /

      one-api`,owner:"songquanpeng",name:"one-api",avatar:"https://avatars.githubusercontent.com/u/39998050?s=40&v=4",path:"/songquanpeng/one-api",ourl:"https://github.com/songquanpeng",url:"https://github.com/songquanpeng/one-api",description:"",language:"JavaScript",stars:32857,forks:6245,starup:1574},{title:`phaserjs /

      phaser`,owner:"phaserjs",name:"phaser",avatar:"https://avatars.githubusercontent.com/u/164476?s=40&v=4",path:"/phaserjs/phaser",ourl:"https://github.com/phaserjs",url:"https://github.com/phaserjs/phaser",description:"",language:"JavaScript",stars:39557,forks:7135,starup:332},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:24709,forks:1287,starup:9046},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:24551,forks:1405,starup:2274},{title:`sub-store-org /

      Sub-Store`,owner:"sub-store-org",name:"Sub-Store",avatar:"https://avatars.githubusercontent.com/u/1210282?s=40&v=4",path:"/sub-store-org/Sub-Store",ourl:"https://github.com/sub-store-org",url:"https://github.com/sub-store-org/Sub-Store",description:"",language:"JavaScript",stars:9444,forks:1113,starup:371},{title:`fspecii /

      ace-step-ui`,owner:"fspecii",name:"ace-step-ui",avatar:"https://avatars.githubusercontent.com/u/4722521?s=40&v=4",path:"/fspecii/ace-step-ui",ourl:"https://github.com/fspecii",url:"https://github.com/fspecii/ace-step-ui",description:"",language:"JavaScript",stars:2498,forks:371,starup:1545},{title:`HeyPuter /

      puter`,owner:"HeyPuter",name:"puter",avatar:"https://avatars.githubusercontent.com/u/7225168?s=40&v=4",path:"/HeyPuter/puter",ourl:"https://github.com/HeyPuter",url:"https://github.com/HeyPuter/puter",description:"",language:"JavaScript",stars:40874,forks:3712,starup:784},{title:`vava-nessa /

      free-coding-models`,owner:"vava-nessa",name:"free-coding-models",avatar:"https://avatars.githubusercontent.com/u/5466264?s=40&v=4",path:"/vava-nessa/free-coding-models",ourl:"https://github.com/vava-nessa",url:"https://github.com/vava-nessa/free-coding-models",description:"",language:"JavaScript",stars:1674,forks:192,starup:827},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:7516,forks:782,starup:2546},{title:`copy /

      v86`,owner:"copy",name:"v86",avatar:"https://avatars.githubusercontent.com/u/1816456?s=40&v=4",path:"/copy/v86",ourl:"https://github.com/copy",url:"https://github.com/copy/v86",description:"",language:"JavaScript",stars:22865,forks:1793,starup:562}],"TypeScript-daily":[{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:39524,forks:4481,starup:1840},{title:`czlonkowski /

      n8n-mcp`,owner:"czlonkowski",name:"n8n-mcp",avatar:"https://avatars.githubusercontent.com/u/56956555?s=40&v=4",path:"/czlonkowski/n8n-mcp",ourl:"https://github.com/czlonkowski",url:"https://github.com/czlonkowski/n8n-mcp",description:"",language:"TypeScript",stars:19629,forks:3249,starup:282},{title:`virattt /

      dexter`,owner:"virattt",name:"dexter",avatar:"https://avatars.githubusercontent.com/u/901795?s=40&v=4",path:"/virattt/dexter",ourl:"https://github.com/virattt",url:"https://github.com/virattt/dexter",description:"",language:"TypeScript",stars:22712,forks:2783,starup:418},{title:`vas3k /

      TaxHacker`,owner:"vas3k",name:"TaxHacker",avatar:"https://avatars.githubusercontent.com/u/176344?s=40&v=4",path:"/vas3k/TaxHacker",ourl:"https://github.com/vas3k",url:"https://github.com/vas3k/TaxHacker",description:"",language:"TypeScript",stars:5517,forks:877,starup:83},{title:`simstudioai /

      sim`,owner:"simstudioai",name:"sim",avatar:"https://avatars.githubusercontent.com/u/40672544?s=40&v=4",path:"/simstudioai/sim",ourl:"https://github.com/simstudioai",url:"https://github.com/simstudioai/sim",description:"",language:"TypeScript",stars:28335,forks:3573,starup:52},{title:`nexu-io /

      nexu`,owner:"nexu-io",name:"nexu",avatar:"https://avatars.githubusercontent.com/u/20859779?s=40&v=4",path:"/nexu-io/nexu",ourl:"https://github.com/nexu-io",url:"https://github.com/nexu-io/nexu",description:"",language:"TypeScript",stars:2833,forks:231,starup:21},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:11182,forks:1528,starup:84},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:34631,forks:2333,starup:245},{title:`iOfficeAI /

      AionUi`,owner:"iOfficeAI",name:"AionUi",avatar:"https://avatars.githubusercontent.com/u/54054995?s=40&v=4",path:"/iOfficeAI/AionUi",ourl:"https://github.com/iOfficeAI",url:"https://github.com/iOfficeAI/AionUi",description:"",language:"TypeScript",stars:23622,forks:2092,starup:141},{title:`BlackHatDevX /

      openspot-music-app`,owner:"BlackHatDevX",name:"openspot-music-app",avatar:"https://avatars.githubusercontent.com/u/91268029?s=40&v=4",path:"/BlackHatDevX/openspot-music-app",ourl:"https://github.com/BlackHatDevX",url:"https://github.com/BlackHatDevX/openspot-music-app",description:"",language:"TypeScript",stars:2098,forks:139,starup:38},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:114790,forks:7243,starup:462}],"TypeScript-weekly":[{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:9298,forks:668,starup:3337},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:39524,forks:4481,starup:4321},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:35326,forks:4016,starup:5423},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:5726,forks:763,starup:1198},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:12390,forks:856,starup:1935},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:44253,forks:5216,starup:3699},{title:`nilbuild /

      developer-roadmap`,owner:"nilbuild",name:"developer-roadmap",avatar:"https://avatars.githubusercontent.com/u/4921183?s=40&v=4",path:"/nilbuild/developer-roadmap",ourl:"https://github.com/nilbuild",url:"https://github.com/nilbuild/developer-roadmap",description:"",language:"TypeScript",stars:354123,forks:44004,starup:553},{title:`caamer20 /

      Telegram-Drive`,owner:"caamer20",name:"Telegram-Drive",avatar:"https://avatars.githubusercontent.com/u/9097300?s=40&v=4",path:"/caamer20/Telegram-Drive",ourl:"https://github.com/caamer20",url:"https://github.com/caamer20/Telegram-Drive",description:"",language:"TypeScript",stars:2178,forks:271,starup:1305}],"TypeScript-monthly":[{title:`multica-ai /

      multica`,owner:"multica-ai",name:"multica",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/multica-ai/multica",ourl:"https://github.com/multica-ai",url:"https://github.com/multica-ai/multica",description:"",language:"TypeScript",stars:24181,forks:2958,starup:22247},{title:`coleam00 /

      Archon`,owner:"coleam00",name:"Archon",avatar:"https://avatars.githubusercontent.com/u/152263317?s=40&v=4",path:"/coleam00/Archon",ourl:"https://github.com/coleam00",url:"https://github.com/coleam00/Archon",description:"",language:"TypeScript",stars:20691,forks:3161,starup:6874},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:71651,forks:6151,starup:27043},{title:`siddharthvaddem /

      openscreen`,owner:"siddharthvaddem",name:"openscreen",avatar:"https://avatars.githubusercontent.com/u/70214527?s=40&v=4",path:"/siddharthvaddem/openscreen",ourl:"https://github.com/siddharthvaddem",url:"https://github.com/siddharthvaddem/openscreen",description:"",language:"TypeScript",stars:34631,forks:2333,starup:16973},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:12390,forks:856,starup:5892},{title:`abhigyanpatwari /

      GitNexus`,owner:"abhigyanpatwari",name:"GitNexus",avatar:"https://avatars.githubusercontent.com/u/126312502?s=40&v=4",path:"/abhigyanpatwari/GitNexus",ourl:"https://github.com/abhigyanpatwari",url:"https://github.com/abhigyanpatwari/GitNexus",description:"",language:"TypeScript",stars:35326,forks:4016,starup:14004},{title:`lukilabs /

      craft-agents-oss`,owner:"lukilabs",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/lukilabs/craft-agents-oss",ourl:"https://github.com/lukilabs",url:"https://github.com/lukilabs/craft-agents-oss",description:"",language:"TypeScript",stars:5726,forks:763,starup:2293},{title:`open-metadata /

      OpenMetadata`,owner:"open-metadata",name:"OpenMetadata",avatar:"https://avatars.githubusercontent.com/u/35870520?s=40&v=4",path:"/open-metadata/OpenMetadata",ourl:"https://github.com/open-metadata",url:"https://github.com/open-metadata/OpenMetadata",description:"",language:"TypeScript",stars:13786,forks:2079,starup:4270},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:3889,forks:629,starup:2145},{title:`YishenTu /

      claudian`,owner:"YishenTu",name:"claudian",avatar:"https://avatars.githubusercontent.com/u/134207149?s=40&v=4",path:"/YishenTu/claudian",ourl:"https://github.com/YishenTu",url:"https://github.com/YishenTu/claudian",description:"",language:"TypeScript",stars:10047,forks:616,starup:4261},{title:`sparkjsdev /

      spark`,owner:"sparkjsdev",name:"spark",avatar:"https://avatars.githubusercontent.com/u/39342?s=40&v=4",path:"/sparkjsdev/spark",ourl:"https://github.com/sparkjsdev",url:"https://github.com/sparkjsdev/spark",description:"",language:"TypeScript",stars:2866,forks:303,starup:833},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:115527,forks:8433,starup:8404},{title:`badlogic /

      pi-mono`,owner:"badlogic",name:"pi-mono",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/badlogic/pi-mono",ourl:"https://github.com/badlogic",url:"https://github.com/badlogic/pi-mono",description:"",language:"TypeScript",stars:44253,forks:5216,starup:13323},{title:`hicccc77 /

      WeFlow`,owner:"hicccc77",name:"WeFlow",avatar:"https://avatars.githubusercontent.com/u/98377878?s=40&v=4",path:"/hicccc77/WeFlow",ourl:"https://github.com/hicccc77",url:"https://github.com/hicccc77/WeFlow",description:"",language:"TypeScript",stars:9100,forks:2230,starup:2883},{title:`mnfst /

      manifest`,owner:"mnfst",name:"manifest",avatar:"https://avatars.githubusercontent.com/u/6626184?s=40&v=4",path:"/mnfst/manifest",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/manifest",description:"",language:"TypeScript",stars:6031,forks:356,starup:1813}],"Vue-daily":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24959,forks:1828,starup:20},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2614,forks:1035,starup:5},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7273,forks:961,starup:60},{title:`gaozhangmin /

      aliyunpan`,owner:"gaozhangmin",name:"aliyunpan",avatar:"https://avatars.githubusercontent.com/u/9278488?s=40&v=4",path:"/gaozhangmin/aliyunpan",ourl:"https://github.com/gaozhangmin",url:"https://github.com/gaozhangmin/aliyunpan",description:"",language:"Vue",stars:6135,forks:330,starup:66},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:353,forks:41984,starup:0},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1240,forks:95,starup:3},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:550,forks:20,starup:2},{title:`frappe /

      insights`,owner:"frappe",name:"insights",avatar:"https://avatars.githubusercontent.com/u/25369014?s=40&v=4",path:"/frappe/insights",ourl:"https://github.com/frappe",url:"https://github.com/frappe/insights",description:"",language:"Vue",stars:926,forks:448,starup:2},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1343,forks:370,starup:3},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6584,forks:4522,starup:2},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20743,forks:1386,starup:11},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32834,forks:4709,starup:9},{title:`Kuingsmile /

      word-GPT-Plus`,owner:"Kuingsmile",name:"word-GPT-Plus",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/Kuingsmile/word-GPT-Plus",ourl:"https://github.com/Kuingsmile",url:"https://github.com/Kuingsmile/word-GPT-Plus",description:"",language:"Vue",stars:1208,forks:202,starup:2},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3217,forks:5013,starup:0},{title:`Rule-34 /

      App`,owner:"Rule-34",name:"App",avatar:"https://avatars.githubusercontent.com/u/37181533?s=40&v=4",path:"/Rule-34/App",ourl:"https://github.com/Rule-34",url:"https://github.com/Rule-34/App",description:"",language:"Vue",stars:338,forks:44,starup:1},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:206,forks:27,starup:3},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21269,forks:2310,starup:4}],"Vue-weekly":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15178,forks:1232,starup:169},{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24959,forks:1828,starup:151},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3113,forks:775,starup:25},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7273,forks:961,starup:168},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:9950,forks:843,starup:30},{title:`gaozhangmin /

      aliyunpan`,owner:"gaozhangmin",name:"aliyunpan",avatar:"https://avatars.githubusercontent.com/u/9278488?s=40&v=4",path:"/gaozhangmin/aliyunpan",ourl:"https://github.com/gaozhangmin",url:"https://github.com/gaozhangmin/aliyunpan",description:"",language:"Vue",stars:6135,forks:330,starup:139},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1490,forks:383,starup:46},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28266,forks:3210,starup:45},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:38358,forks:4810,starup:104},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3182,forks:474,starup:45},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:20743,forks:1386,starup:74},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6584,forks:4522,starup:31},{title:`zs1083339604 /

      FaceWinUnlock-Tauri`,owner:"zs1083339604",name:"FaceWinUnlock-Tauri",avatar:"https://avatars.githubusercontent.com/u/41194731?s=40&v=4",path:"/zs1083339604/FaceWinUnlock-Tauri",ourl:"https://github.com/zs1083339604",url:"https://github.com/zs1083339604/FaceWinUnlock-Tauri",description:"",language:"Vue",stars:1726,forks:100,starup:30},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:353,forks:41984,starup:2},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32834,forks:4709,starup:54},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2871,forks:1274,starup:22},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2609,forks:92,starup:33},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3527,forks:450,starup:44},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12759,forks:636,starup:30}],"Vue-monthly":[{title:`Lissy93 /

      dashy`,owner:"Lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/Lissy93/dashy",ourl:"https://github.com/Lissy93",url:"https://github.com/Lissy93/dashy",description:"",language:"Vue",stars:24959,forks:1828,starup:593},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:8893,forks:1731,starup:161},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28266,forks:3210,starup:207},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1343,forks:370,starup:105},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15178,forks:1232,starup:554},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5247,forks:1020,starup:185},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3527,forks:450,starup:191},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2614,forks:1035,starup:128},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6551,forks:2457,starup:77},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2871,forks:1274,starup:107},{title:`jihe520 /

      MathModelAgent`,owner:"jihe520",name:"MathModelAgent",avatar:"https://avatars.githubusercontent.com/u/36144612?s=40&v=4",path:"/jihe520/MathModelAgent",ourl:"https://github.com/jihe520",url:"https://github.com/jihe520/MathModelAgent",description:"",language:"Vue",stars:1852,forks:233,starup:194},{title:`ponysb /

      91Writing`,owner:"ponysb",name:"91Writing",avatar:"https://avatars.githubusercontent.com/u/37097190?s=40&v=4",path:"/ponysb/91Writing",ourl:"https://github.com/ponysb",url:"https://github.com/ponysb/91Writing",description:"",language:"Vue",stars:1490,forks:383,starup:139},{title:`asadahimeka /

      pixiv-viewer`,owner:"asadahimeka",name:"pixiv-viewer",avatar:"https://avatars.githubusercontent.com/u/31837214?s=40&v=4",path:"/asadahimeka/pixiv-viewer",ourl:"https://github.com/asadahimeka",url:"https://github.com/asadahimeka/pixiv-viewer",description:"",language:"Vue",stars:550,forks:20,starup:139},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8480,forks:1933,starup:117},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:610,forks:26,starup:283},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2682,forks:284,starup:255},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:20638,forks:961,starup:781}]},mt=T({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:n}=W(),l=$(()=>v(Z[`${s.value}-${o.value}`]));A("color",n),A("data",l);function v(i){return i.sort((a,u)=>u.starup-a.starup)}return(i,a)=>{const u=R,g=C,m=H,d=O,t=q,e=F,y=G,w=N,J=K;return h(),_("div",null,[b(d,null,{default:S(()=>[b(u,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(X,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(y,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(w,{key:2})):(h(),k(J,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
