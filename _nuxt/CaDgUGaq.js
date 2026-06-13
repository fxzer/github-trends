import E from"./CcnxTney.js";import P from"./iH9ncAAV.js";import K from"./BQb-2Onk.js";import F from"./Cdo6gQti.js";import q from"./Dv_ohC9L.js";import I from"./D4yRp0ze.js";import R from"./s9XQ-A1e.js";import{d as A}from"./KQwPfV-1.js";import{s as G,a as V,b as z,u as j,i as L,c as B}from"./BteWSyXG.js";import{i as T,p as O,a5 as J,D as h,f as _,w as D,S as H,h as v,a6 as S,T as W,q as x,U as c,d as f,a as $,H as C}from"./Cc4F0F_3.js";import"./CPAU_JMS.js";import"./p2-M2djV.js";import"./CKQmwnAC.js";import"./sDd5bi8T.js";import"./CuHFg0kI.js";const X=T({__name:"Chart",setup(k){const r=O("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(G),s=V("趋势仓库总指标排行榜",o);function u(i){const a=A(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,l,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=l,s.value.series[2].data=g}const{domRef:m}=z(s,j);J(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:m,style:D({height:b})},null,4))}}),U=Object.assign(X,{__name:"TrendChart"}),Y=T({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=H(r),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:m}=z(u,j);function b(a){const n=A(a);n.sort((t,e)=>t.starup-e.starup);const l=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:L(l[e%l.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}J(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:m,style:D({height:i})},null,4))}}),N=Object.assign(Y,{__name:"TrendStarupChart"}),Z={"JavaScript-daily":[{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"JavaScript",stars:13699,forks:27385,starup:9},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:41890,forks:6937,starup:166},{title:`rabbitmq /

      rabbitmq-server`,owner:"rabbitmq",name:"rabbitmq-server",avatar:"https://avatars.githubusercontent.com/u/1090?s=40&v=4",path:"/rabbitmq/rabbitmq-server",ourl:"https://github.com/rabbitmq",url:"https://github.com/rabbitmq/rabbitmq-server",description:"",language:"JavaScript",stars:13710,forks:4008,starup:5},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:71982,forks:4056,starup:443},{title:`CesiumGS /

      cesium`,owner:"CesiumGS",name:"cesium",avatar:"https://avatars.githubusercontent.com/u/1494815?s=40&v=4",path:"/CesiumGS/cesium",ourl:"https://github.com/CesiumGS",url:"https://github.com/CesiumGS/cesium",description:"",language:"JavaScript",stars:15369,forks:3819,starup:4},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:21436,forks:1754,starup:140},{title:`Wei-Shaw /

      claude-relay-service`,owner:"Wei-Shaw",name:"claude-relay-service",avatar:"https://avatars.githubusercontent.com/u/26101719?s=40&v=4",path:"/Wei-Shaw/claude-relay-service",ourl:"https://github.com/Wei-Shaw",url:"https://github.com/Wei-Shaw/claude-relay-service",description:"",language:"JavaScript",stars:12074,forks:1818,starup:16},{title:`DataDog /

      dd-trace-js`,owner:"DataDog",name:"dd-trace-js",avatar:"https://avatars.githubusercontent.com/u/1596303?s=40&v=4",path:"/DataDog/dd-trace-js",ourl:"https://github.com/DataDog",url:"https://github.com/DataDog/dd-trace-js",description:"",language:"JavaScript",stars:815,forks:395,starup:0},{title:`prebid /

      Prebid.js`,owner:"prebid",name:"Prebid.js",avatar:"https://avatars.githubusercontent.com/u/1683175?s=40&v=4",path:"/prebid/Prebid.js",ourl:"https://github.com/prebid",url:"https://github.com/prebid/Prebid.js",description:"",language:"JavaScript",stars:1583,forks:2367,starup:0},{title:`fanmingming /

      live`,owner:"fanmingming",name:"live",avatar:"https://avatars.githubusercontent.com/u/4993993?s=40&v=4",path:"/fanmingming/live",ourl:"https://github.com/fanmingming",url:"https://github.com/fanmingming/live",description:"",language:"JavaScript",stars:28126,forks:4204,starup:6},{title:`gsd-build /

      get-shit-done`,owner:"gsd-build",name:"get-shit-done",avatar:"https://avatars.githubusercontent.com/u/4738965?s=40&v=4",path:"/gsd-build/get-shit-done",ourl:"https://github.com/gsd-build",url:"https://github.com/gsd-build/get-shit-done",description:"",language:"JavaScript",stars:64181,forks:5462,starup:48},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:82031,forks:7081,starup:197},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12506,forks:3525,starup:7}],"JavaScript-weekly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:2908,forks:339,starup:1435},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:53309,forks:10638,starup:4319},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87203,forks:4946,starup:380},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:37891,forks:2083,starup:3087},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:51997,forks:4741,starup:91},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69157,forks:23674,starup:95},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:245808,forks:51054,starup:314},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",ourl:"https://github.com/blackmatrix7",url:"https://github.com/blackmatrix7/ios_rule_script",description:"",language:"JavaScript",stars:26720,forks:3988,starup:312},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:41890,forks:6937,starup:566},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42802,forks:1565,starup:278},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:214408,forks:32945,starup:6404},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11474,forks:3063,starup:74},{title:`badges /

      shields`,owner:"badges",name:"shields",avatar:"https://avatars.githubusercontent.com/u/6025893?s=40&v=4",path:"/badges/shields",ourl:"https://github.com/badges",url:"https://github.com/badges/shields",description:"",language:"JavaScript",stars:26780,forks:5615,starup:49},{title:`FortAwesome /

      Font-Awesome`,owner:"FortAwesome",name:"Font-Awesome",avatar:"https://avatars.githubusercontent.com/u/529604?s=40&v=4",path:"/FortAwesome/Font-Awesome",ourl:"https://github.com/FortAwesome",url:"https://github.com/FortAwesome/Font-Awesome",description:"",language:"JavaScript",stars:76658,forks:12208,starup:45},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:1523,forks:209,starup:174},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:51838,forks:10439,starup:278},{title:`npm /

      cli`,owner:"npm",name:"cli",avatar:"https://avatars.githubusercontent.com/u/9287?s=40&v=4",path:"/npm/cli",ourl:"https://github.com/npm",url:"https://github.com/npm/cli",description:"",language:"JavaScript",stars:9831,forks:4411,starup:29},{title:`Pavelevich /

      llm-checker`,owner:"Pavelevich",name:"llm-checker",avatar:"https://avatars.githubusercontent.com/u/109688848?s=40&v=4",path:"/Pavelevich/llm-checker",ourl:"https://github.com/Pavelevich",url:"https://github.com/Pavelevich/llm-checker",description:"",language:"JavaScript",stars:2623,forks:171,starup:170}],"JavaScript-monthly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:2908,forks:339,starup:1797},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12078,forks:1351,starup:1380},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:16836,forks:1584,starup:6552},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:17378,forks:2661,starup:8327},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:1317,forks:75,starup:545},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:1523,forks:209,starup:832},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/34203076?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:11095,forks:15198,starup:2203},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:53903,forks:11706,starup:1214},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6547,forks:340,starup:2759},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42802,forks:1565,starup:977},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87203,forks:4946,starup:825},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:29288,forks:5540,starup:1914},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:37891,forks:2083,starup:10762},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:245808,forks:51054,starup:1397},{title:`Haleclipse /

      CodexDesktop-Rebuild`,owner:"Haleclipse",name:"CodexDesktop-Rebuild",avatar:"https://avatars.githubusercontent.com/u/15519695?s=40&v=4",path:"/Haleclipse/CodexDesktop-Rebuild",ourl:"https://github.com/Haleclipse",url:"https://github.com/Haleclipse/CodexDesktop-Rebuild",description:"",language:"JavaScript",stars:2315,forks:179,starup:630},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69157,forks:23674,starup:268},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:51997,forks:4741,starup:231}],"TypeScript-daily":[{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37672,forks:8718,starup:388},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:118120,forks:6309,starup:179},{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:15878,forks:1083,starup:369},{title:`activeloopai /

      hivemind`,owner:"activeloopai",name:"hivemind",avatar:"https://avatars.githubusercontent.com/u/32709108?s=40&v=4",path:"/activeloopai/hivemind",ourl:"https://github.com/activeloopai",url:"https://github.com/activeloopai/hivemind",description:"",language:"TypeScript",stars:1092,forks:65,starup:34},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:16717,forks:2238,starup:50},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:173789,forks:20942,starup:525},{title:`elie222 /

      inbox-zero`,owner:"elie222",name:"inbox-zero",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/inbox-zero",ourl:"https://github.com/elie222",url:"https://github.com/elie222/inbox-zero",description:"",language:"TypeScript",stars:11221,forks:1381,starup:27},{title:`MemTensor /

      MemOS`,owner:"MemTensor",name:"MemOS",avatar:"https://avatars.githubusercontent.com/u/27054213?s=40&v=4",path:"/MemTensor/MemOS",ourl:"https://github.com/MemTensor",url:"https://github.com/MemTensor/MemOS",description:"",language:"TypeScript",stars:9845,forks:900,starup:41},{title:`SigNoz /

      signoz`,owner:"SigNoz",name:"signoz",avatar:"https://avatars.githubusercontent.com/u/22846633?s=40&v=4",path:"/SigNoz/signoz",ourl:"https://github.com/SigNoz",url:"https://github.com/SigNoz/signoz",description:"",language:"TypeScript",stars:27317,forks:2218,starup:17},{title:`Kong /

      insomnia`,owner:"Kong",name:"insomnia",avatar:"https://avatars.githubusercontent.com/u/587576?s=40&v=4",path:"/Kong/insomnia",ourl:"https://github.com/Kong",url:"https://github.com/Kong/insomnia",description:"",language:"TypeScript",stars:38491,forks:2279,starup:7},{title:`novuhq /

      novu`,owner:"novuhq",name:"novu",avatar:"https://avatars.githubusercontent.com/u/8872447?s=40&v=4",path:"/novuhq/novu",ourl:"https://github.com/novuhq",url:"https://github.com/novuhq/novu",description:"",language:"TypeScript",stars:39110,forks:4320,starup:4},{title:`colinhacks /

      zod`,owner:"colinhacks",name:"zod",avatar:"https://avatars.githubusercontent.com/u/3084745?s=40&v=4",path:"/colinhacks/zod",ourl:"https://github.com/colinhacks",url:"https://github.com/colinhacks/zod",description:"",language:"TypeScript",stars:42953,forks:2016,starup:14},{title:`elastic /

      kibana`,owner:"elastic",name:"kibana",avatar:"https://avatars.githubusercontent.com/u/42973632?s=40&v=4",path:"/elastic/kibana",ourl:"https://github.com/elastic",url:"https://github.com/elastic/kibana",description:"",language:"TypeScript",stars:21138,forks:8596,starup:1},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:13212,forks:1185,starup:10},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:17300,forks:1231,starup:138},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:26907,forks:2339,starup:124},{title:`adobe /

      react-spectrum`,owner:"adobe",name:"react-spectrum",avatar:"https://avatars.githubusercontent.com/u/19409?s=40&v=4",path:"/adobe/react-spectrum",ourl:"https://github.com/adobe",url:"https://github.com/adobe/react-spectrum",description:"",language:"TypeScript",stars:15498,forks:1464,starup:21},{title:`react-hook-form /

      react-hook-form`,owner:"react-hook-form",name:"react-hook-form",avatar:"https://avatars.githubusercontent.com/u/10513364?s=40&v=4",path:"/react-hook-form/react-hook-form",ourl:"https://github.com/react-hook-form",url:"https://github.com/react-hook-form/react-hook-form",description:"",language:"TypeScript",stars:44761,forks:2419,starup:2},{title:`Effect-TS /

      effect-smol`,owner:"Effect-TS",name:"effect-smol",avatar:"https://avatars.githubusercontent.com/u/40680?s=40&v=4",path:"/Effect-TS/effect-smol",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect-smol",description:"",language:"TypeScript",stars:702,forks:159,starup:1}],"TypeScript-weekly":[{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:29651,forks:3366,starup:3848},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:34906,forks:4349,starup:2473},{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:15878,forks:1083,starup:3471},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:21139,forks:1554,starup:1255},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:30646,forks:3047,starup:1729},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",ourl:"https://github.com/danny-avila",url:"https://github.com/danny-avila/LibreChat",description:"",language:"TypeScript",stars:39e3,forks:8016,starup:793},{title:`danielmiessler /

      Personal_AI_Infrastructure`,owner:"danielmiessler",name:"Personal_AI_Infrastructure",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/Personal_AI_Infrastructure",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/Personal_AI_Infrastructure",description:"",language:"TypeScript",stars:15873,forks:2195,starup:1124},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxt",description:"",language:"TypeScript",stars:60426,forks:5668,starup:110},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",ourl:"https://github.com/angular",url:"https://github.com/angular/angular",description:"",language:"TypeScript",stars:100317,forks:27176,starup:100},{title:`grafana /

      grafana`,owner:"grafana",name:"grafana",avatar:"https://avatars.githubusercontent.com/u/10999?s=40&v=4",path:"/grafana/grafana",ourl:"https://github.com/grafana",url:"https://github.com/grafana/grafana",description:"",language:"TypeScript",stars:74385,forks:14062,starup:218},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:26907,forks:2339,starup:1240},{title:`activeloopai /

      hivemind`,owner:"activeloopai",name:"hivemind",avatar:"https://avatars.githubusercontent.com/u/32709108?s=40&v=4",path:"/activeloopai/hivemind",ourl:"https://github.com/activeloopai",url:"https://github.com/activeloopai/hivemind",description:"",language:"TypeScript",stars:1092,forks:65,starup:707},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:6530,forks:795,starup:1023},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37672,forks:8718,starup:585},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:118120,forks:6309,starup:1124},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:116436,forks:9051,starup:690}],"TypeScript-monthly":[{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:48303,forks:2951,starup:46941},{title:`Egonex-AI /

      Understand-Anything`,owner:"Egonex-AI",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Egonex-AI/Understand-Anything",ourl:"https://github.com/Egonex-AI",url:"https://github.com/Egonex-AI/Understand-Anything",description:"",language:"TypeScript",stars:58187,forks:4845,starup:43988},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:12136,forks:1026,starup:7805},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:22578,forks:1855,starup:17244},{title:`fathah /

      hermes-desktop`,owner:"fathah",name:"hermes-desktop",avatar:"https://avatars.githubusercontent.com/u/48355244?s=40&v=4",path:"/fathah/hermes-desktop",ourl:"https://github.com/fathah",url:"https://github.com/fathah/hermes-desktop",description:"",language:"TypeScript",stars:12019,forks:1352,starup:8565},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:1950,forks:152,starup:1576},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:20951,forks:3143,starup:9450},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:23225,forks:1777,starup:3531},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:8142,forks:1280,starup:3213},{title:`wechat-article /

      wechat-article-exporter`,owner:"wechat-article",name:"wechat-article-exporter",avatar:"https://avatars.githubusercontent.com/u/156505552?s=40&v=4",path:"/wechat-article/wechat-article-exporter",ourl:"https://github.com/wechat-article",url:"https://github.com/wechat-article/wechat-article-exporter",description:"",language:"TypeScript",stars:11402,forks:2003,starup:2383},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:4709,forks:316,starup:2525},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:27165,forks:2547,starup:9682},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:34906,forks:4349,starup:3684},{title:`EKKOLearnAI /

      hermes-web-ui`,owner:"EKKOLearnAI",name:"hermes-web-ui",avatar:"https://avatars.githubusercontent.com/u/152005280?s=40&v=4",path:"/EKKOLearnAI/hermes-web-ui",ourl:"https://github.com/EKKOLearnAI",url:"https://github.com/EKKOLearnAI/hermes-web-ui",description:"",language:"TypeScript",stars:7834,forks:959,starup:3366},{title:`CodebuffAI /

      codebuff`,owner:"CodebuffAI",name:"codebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/codebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/codebuff",description:"",language:"TypeScript",stars:6411,forks:782,starup:1567},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:22496,forks:3233,starup:7440},{title:`millionco /

      react-doctor`,owner:"millionco",name:"react-doctor",avatar:"https://avatars.githubusercontent.com/u/38025074?s=40&v=4",path:"/millionco/react-doctor",ourl:"https://github.com/millionco",url:"https://github.com/millionco/react-doctor",description:"",language:"TypeScript",stars:12639,forks:398,starup:4073},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",ourl:"https://github.com/MHSanaei",url:"https://github.com/MHSanaei/3x-ui",description:"",language:"TypeScript",stars:40481,forks:7585,starup:3853},{title:`nashsu /

      llm_wiki`,owner:"nashsu",name:"llm_wiki",avatar:"https://avatars.githubusercontent.com/u/2127280?s=40&v=4",path:"/nashsu/llm_wiki",ourl:"https://github.com/nashsu",url:"https://github.com/nashsu/llm_wiki",description:"",language:"TypeScript",stars:11298,forks:1384,starup:4322},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"TypeScript",stars:57298,forks:4293,starup:1500},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:13204,forks:1749,starup:1952}],"Vue-daily":[{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2829,forks:1135,starup:1},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21402,forks:2332,starup:3},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14450,forks:1688,starup:8},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32634,forks:8829,starup:14},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5485,forks:1051,starup:8},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2152,forks:473,starup:2},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20302,forks:3747,starup:7},{title:`Tencent /

      tdesign-miniprogram`,owner:"Tencent",name:"tdesign-miniprogram",avatar:"https://avatars.githubusercontent.com/u/7017290?s=40&v=4",path:"/Tencent/tdesign-miniprogram",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign-miniprogram",description:"",language:"Vue",stars:1680,forks:324,starup:2},{title:`fastapiadmin /

      FastapiAdmin`,owner:"fastapiadmin",name:"FastapiAdmin",avatar:"https://avatars.githubusercontent.com/u/73034508?s=40&v=4",path:"/fastapiadmin/FastapiAdmin",ourl:"https://github.com/fastapiadmin",url:"https://github.com/fastapiadmin/FastapiAdmin",description:"",language:"Vue",stars:856,forks:237,starup:1},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3187,forks:836,starup:0},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3329,forks:498,starup:2},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3540,forks:721,starup:9},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11392,forks:914,starup:3},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6548,forks:515,starup:3},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10036,forks:858,starup:4},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2534,forks:374,starup:2}],"Vue-weekly":[{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15771,forks:1277,starup:142},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3769,forks:480,starup:53},{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1239,forks:116,starup:463},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12817,forks:2170,starup:98},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2898,forks:318,starup:43},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32937,forks:4697,starup:47},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2069,forks:302,starup:54},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32634,forks:8829,starup:94},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1374,forks:109,starup:31},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21225,forks:1438,starup:77},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6647,forks:1076,starup:12},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:271,forks:52,starup:14},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2829,forks:1135,starup:25},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6626,forks:2484,starup:13},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21551,forks:3910,starup:21},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21355,forks:1004,starup:141},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5485,forks:1051,starup:59}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39290,forks:5027,starup:850},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21225,forks:1438,starup:476},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1146,forks:42,starup:476},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:387,forks:46824,starup:25},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21402,forks:2332,starup:188},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3769,forks:480,starup:213},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32634,forks:8829,starup:372},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8911,forks:2032,starup:299},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6802,forks:4739,starup:206},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3187,forks:836,starup:63},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15771,forks:1277,starup:561},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2984,forks:1335,starup:92},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2829,forks:1135,starup:126},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1374,forks:109,starup:118},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6647,forks:1076,starup:88},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:2771,forks:101,starup:135},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3540,forks:721,starup:172},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20302,forks:3747,starup:189}]},gt=T({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:u}=B(),m=$(()=>b(Z[`${s.value}-${o.value}`]));C("color",u),C("data",m);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=E,l=P,g=K,d=F,t=q,e=I,y=R,w=U,M=N;return h(),_("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),v(l,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(W,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),f(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),f(y,{key:1,"has-starup":""})):c(r)==="chart"?(h(),f(w,{key:2})):(h(),f(M,{key:3,data:c(m)},null,8,["data"]))]),_:1})])}}});export{gt as default};
