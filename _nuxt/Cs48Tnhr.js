import D from"./D079M8mc.js";import B from"./D0_zIuMT.js";import E from"./K4MenpfA.js";import M from"./BZkgU7k3.js";import q from"./6Avkj52S.js";import I from"./D0aP1mF8.js";import L from"./CQ8wLsk8.js";import{d as J}from"./KQwPfV-1.js";import{s as W,a as j,b as V,u as A,i as G,c as K}from"./CuSPsVy_.js";import{i as C,p as P,a5 as z,D as h,f as T,w as R,S as U,h as v,a6 as x,T as $,q as S,U as c,d as k,a as F,H as _}from"./BReNgqSY.js";import"./C8ocu_n9.js";import"./p2-M2djV.js";import"./CCdCBooq.js";import"./DD0BaIoQ.js";import"./BGQ796z0.js";const N=C({__name:"Chart",setup(f){const r=P("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(W),s=j("趋势仓库总指标排行榜",o);function u(i){const a=J(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=V(s,A);z(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:R({height:b})},null,4))}}),H=Object.assign(N,{__name:"TrendChart"}),Y=C({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=U(r),u=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,A);function b(a){const n=J(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:G(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}z(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),T("div",{ref_key:"chartRef",ref:l,style:R({height:i})},null,4))}}),Q=Object.assign(Y,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:80254,forks:4505,starup:866},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:57585,forks:11359,starup:322},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:225020,forks:34442,starup:508},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:22456,forks:1367,starup:448},{title:`ryanmcdermott /

      clean-code-javascript`,owner:"ryanmcdermott",name:"clean-code-javascript",avatar:"https://avatars.githubusercontent.com/u/5114666?s=40&v=4",path:"/ryanmcdermott/clean-code-javascript",ourl:"https://github.com/ryanmcdermott",url:"https://github.com/ryanmcdermott/clean-code-javascript",description:"",language:"JavaScript",stars:94519,forks:12469,starup:11},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:246170,forks:51135,starup:42},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:140252,forks:31298,starup:37},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",ourl:"https://github.com/trekhleb",url:"https://github.com/trekhleb/javascript-algorithms",description:"",language:"JavaScript",stars:196168,forks:31047,starup:22},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:95949,forks:15648,starup:14},{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:2210,forks:140,starup:487},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98520,forks:32597,starup:18},{title:`rohitg00 /

      pro-workflow`,owner:"rohitg00",name:"pro-workflow",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/pro-workflow",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/pro-workflow",description:"",language:"JavaScript",stars:2568,forks:247,starup:23},{title:`elder-plinius /

      P4RS3LT0NGV3`,owner:"elder-plinius",name:"P4RS3LT0NGV3",avatar:"https://avatars.githubusercontent.com/u/133052465?s=40&v=4",path:"/elder-plinius/P4RS3LT0NGV3",ourl:"https://github.com/elder-plinius",url:"https://github.com/elder-plinius/P4RS3LT0NGV3",description:"",language:"JavaScript",stars:787,forks:223,starup:22},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:19482,forks:3153,starup:262}],"JavaScript-weekly":[{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:38122,forks:5154,starup:81},{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:2210,forks:140,starup:694},{title:`4ian /

      GDevelop`,owner:"4ian",name:"GDevelop",avatar:"https://avatars.githubusercontent.com/u/1280130?s=40&v=4",path:"/4ian/GDevelop",ourl:"https://github.com/4ian",url:"https://github.com/4ian/GDevelop",description:"",language:"JavaScript",stars:24328,forks:1426,starup:229},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:47822,forks:7792,starup:1988},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:24348,forks:1985,starup:1394},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:22169,forks:3766,starup:1452},{title:`worldwonderer /

      oh-story-claudecode`,owner:"worldwonderer",name:"oh-story-claudecode",avatar:"https://avatars.githubusercontent.com/u/49583093?s=40&v=4",path:"/worldwonderer/oh-story-claudecode",ourl:"https://github.com/worldwonderer",url:"https://github.com/worldwonderer/oh-story-claudecode",description:"",language:"JavaScript",stars:3571,forks:575,starup:515},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98520,forks:32597,starup:69},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:85514,forks:7393,starup:1361},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:37932,forks:3072,starup:494},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:823,forks:104,starup:23},{title:`simple-icons /

      simple-icons`,owner:"simple-icons",name:"simple-icons",avatar:"https://avatars.githubusercontent.com/u/15157491?s=40&v=4",path:"/simple-icons/simple-icons",ourl:"https://github.com/simple-icons",url:"https://github.com/simple-icons/simple-icons",description:"",language:"JavaScript",stars:25336,forks:3125,starup:74},{title:`qeeqbox /

      social-analyzer`,owner:"qeeqbox",name:"social-analyzer",avatar:"https://avatars.githubusercontent.com/u/52905881?s=40&v=4",path:"/qeeqbox/social-analyzer",ourl:"https://github.com/qeeqbox",url:"https://github.com/qeeqbox/social-analyzer",description:"",language:"JavaScript",stars:23350,forks:2249,starup:221},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12582,forks:3550,starup:38}],"JavaScript-monthly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:47822,forks:7792,starup:6665},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:3922,forks:458,starup:2564},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:54908,forks:3766,starup:23990},{title:`worldwonderer /

      oh-story-claudecode`,owner:"worldwonderer",name:"oh-story-claudecode",avatar:"https://avatars.githubusercontent.com/u/49583093?s=40&v=4",path:"/worldwonderer/oh-story-claudecode",ourl:"https://github.com/worldwonderer",url:"https://github.com/worldwonderer/oh-story-claudecode",description:"",language:"JavaScript",stars:3571,forks:575,starup:1701},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69211,forks:23955,starup:514},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:52162,forks:10536,starup:646},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2042,forks:260,starup:792},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87395,forks:4964,starup:1332},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:43159,forks:1597,starup:915},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52060,forks:4761,starup:324},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:42994,forks:2415,starup:10370},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/kit",description:"",language:"JavaScript",stars:20636,forks:2273,starup:122},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:17455,forks:1029,starup:2010},{title:`npm /

      cli`,owner:"npm",name:"cli",avatar:"https://avatars.githubusercontent.com/u/9287?s=40&v=4",path:"/npm/cli",ourl:"https://github.com/npm",url:"https://github.com/npm/cli",description:"",language:"JavaScript",stars:9906,forks:4456,starup:125},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117984,forks:35860,starup:1483},{title:`iptv-org /

      database`,owner:"iptv-org",name:"database",avatar:"https://avatars.githubusercontent.com/u/5572928?s=40&v=4",path:"/iptv-org/database",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/database",description:"",language:"JavaScript",stars:1506,forks:576,starup:123},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:37932,forks:3072,starup:668},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5826,forks:1227,starup:396},{title:`WhatDreamsCost /

      WhatDreamsCost-ComfyUI`,owner:"WhatDreamsCost",name:"WhatDreamsCost-ComfyUI",avatar:"https://avatars.githubusercontent.com/u/216600439?s=40&v=4",path:"/WhatDreamsCost/WhatDreamsCost-ComfyUI",ourl:"https://github.com/WhatDreamsCost",url:"https://github.com/WhatDreamsCost/WhatDreamsCost-ComfyUI",description:"",language:"JavaScript",stars:1608,forks:194,starup:487},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65805,forks:9345,starup:196},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11602,forks:3059,starup:280}],"TypeScript-daily":[{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:45023,forks:2928,starup:141},{title:`actions /

      checkout`,owner:"actions",name:"checkout",avatar:"https://avatars.githubusercontent.com/u/12102068?s=40&v=4",path:"/actions/checkout",ourl:"https://github.com/actions",url:"https://github.com/actions/checkout",description:"",language:"TypeScript",stars:8121,forks:2524,starup:5},{title:`yangshun /

      tech-interview-handbook`,owner:"yangshun",name:"tech-interview-handbook",avatar:"https://avatars.githubusercontent.com/u/1315101?s=40&v=4",path:"/yangshun/tech-interview-handbook",ourl:"https://github.com/yangshun",url:"https://github.com/yangshun/tech-interview-handbook",description:"",language:"TypeScript",stars:140585,forks:16652,starup:35},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:22871,forks:3425,starup:498},{title:`facebook /

      astryx`,owner:"facebook",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/facebook/astryx",ourl:"https://github.com/facebook",url:"https://github.com/facebook/astryx",description:"",language:"TypeScript",stars:3389,forks:180,starup:1105},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:381458,forks:79948,starup:240},{title:`clash-verge-rev /

      clash-verge-rev`,owner:"clash-verge-rev",name:"clash-verge-rev",avatar:"https://avatars.githubusercontent.com/u/27361820?s=40&v=4",path:"/clash-verge-rev/clash-verge-rev",ourl:"https://github.com/clash-verge-rev",url:"https://github.com/clash-verge-rev/clash-verge-rev",description:"",language:"TypeScript",stars:129221,forks:9376,starup:200},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:61302,forks:6608,starup:348},{title:`excalidraw /

      excalidraw`,owner:"excalidraw",name:"excalidraw",avatar:"https://avatars.githubusercontent.com/u/5153846?s=40&v=4",path:"/excalidraw/excalidraw",ourl:"https://github.com/excalidraw",url:"https://github.com/excalidraw/excalidraw",description:"",language:"TypeScript",stars:126639,forks:14238,starup:84},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:10143,forks:1517,starup:915},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:450878,forks:45339,starup:97},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:143149,forks:8247,starup:522},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/1794099?s=40&v=4",path:"/microsoft/vscode",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/vscode",description:"",language:"TypeScript",stars:186932,forks:40805,starup:73},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:13489,forks:923,starup:378},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:62609,forks:7356,starup:233},{title:`ant-design /

      ant-design`,owner:"ant-design",name:"ant-design",avatar:"https://avatars.githubusercontent.com/u/507615?s=40&v=4",path:"/ant-design/ant-design",ourl:"https://github.com/ant-design",url:"https://github.com/ant-design/ant-design",description:"",language:"TypeScript",stars:98536,forks:54647,starup:11},{title:`microsoft /

      skills`,owner:"microsoft",name:"skills",avatar:"https://avatars.githubusercontent.com/u/18152044?s=40&v=4",path:"/microsoft/skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/skills",description:"",language:"TypeScript",stars:2657,forks:303,starup:6},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:22477,forks:1668,starup:73},{title:`modelcontextprotocol /

      ext-apps`,owner:"modelcontextprotocol",name:"ext-apps",avatar:"https://avatars.githubusercontent.com/u/273860?s=40&v=4",path:"/modelcontextprotocol/ext-apps",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/ext-apps",description:"",language:"TypeScript",stars:2520,forks:325,starup:6},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:24778,forks:2055,starup:164},{title:`NateBJones-Projects /

      OB1`,owner:"NateBJones-Projects",name:"OB1",avatar:"https://avatars.githubusercontent.com/u/191722084?s=40&v=4",path:"/NateBJones-Projects/OB1",ourl:"https://github.com/NateBJones-Projects",url:"https://github.com/NateBJones-Projects/OB1",description:"",language:"TypeScript",stars:4038,forks:778,starup:38},{title:`Gitlawb /

      openclaude`,owner:"Gitlawb",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Gitlawb/openclaude",ourl:"https://github.com/Gitlawb",url:"https://github.com/Gitlawb/openclaude",description:"",language:"TypeScript",stars:29689,forks:8848,starup:60}],"TypeScript-weekly":[{title:`google-labs-code /

      design.md`,owner:"google-labs-code",name:"design.md",avatar:"https://avatars.githubusercontent.com/u/4570265?s=40&v=4",path:"/google-labs-code/design.md",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/design.md",description:"",language:"TypeScript",stars:24322,forks:1895,starup:7186},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:24804,forks:3514,starup:5359},{title:`mauriceboe /

      TREK`,owner:"mauriceboe",name:"TREK",avatar:"https://avatars.githubusercontent.com/u/61554723?s=40&v=4",path:"/mauriceboe/TREK",ourl:"https://github.com/mauriceboe",url:"https://github.com/mauriceboe/TREK",description:"",language:"TypeScript",stars:8859,forks:734,starup:2739},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:10904,forks:722,starup:3537},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:21083,forks:1795,starup:1450},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:10143,forks:1517,starup:2497},{title:`craft-ai-agents /

      craft-agents-oss`,owner:"craft-ai-agents",name:"craft-agents-oss",avatar:"https://avatars.githubusercontent.com/u/2445418?s=40&v=4",path:"/craft-ai-agents/craft-agents-oss",ourl:"https://github.com/craft-ai-agents",url:"https://github.com/craft-ai-agents/craft-agents-oss",description:"",language:"TypeScript",stars:6629,forks:914,starup:314},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:3965,forks:444,starup:1630},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:37003,forks:4448,starup:2960},{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:3351,forks:318,starup:1277},{title:`kunchenguid /

      gnhf`,owner:"kunchenguid",name:"gnhf",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/gnhf",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/gnhf",description:"",language:"TypeScript",stars:2794,forks:201,starup:385},{title:`elastic /

      kibana`,owner:"elastic",name:"kibana",avatar:"https://avatars.githubusercontent.com/u/42973632?s=40&v=4",path:"/elastic/kibana",ourl:"https://github.com/elastic",url:"https://github.com/elastic/kibana",description:"",language:"TypeScript",stars:21169,forks:8598,starup:18},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:13489,forks:923,starup:951},{title:`hoangsonww /

      Claude-Code-Agent-Monitor`,owner:"hoangsonww",name:"Claude-Code-Agent-Monitor",avatar:"https://avatars.githubusercontent.com/u/124531104?s=40&v=4",path:"/hoangsonww/Claude-Code-Agent-Monitor",ourl:"https://github.com/hoangsonww",url:"https://github.com/hoangsonww/Claude-Code-Agent-Monitor",description:"",language:"TypeScript",stars:737,forks:162,starup:149},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:118915,forks:17699,starup:4039},{title:`vernu /

      textbee`,owner:"vernu",name:"textbee",avatar:"https://avatars.githubusercontent.com/u/7479824?s=40&v=4",path:"/vernu/textbee",ourl:"https://github.com/vernu",url:"https://github.com/vernu/textbee",description:"",language:"TypeScript",stars:2829,forks:383,starup:194},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:24778,forks:2055,starup:1278},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:61199,forks:9528,starup:1695},{title:`refinedev /

      refine`,owner:"refinedev",name:"refine",avatar:"https://avatars.githubusercontent.com/u/1110414?s=40&v=4",path:"/refinedev/refine",ourl:"https://github.com/refinedev",url:"https://github.com/refinedev/refine",description:"",language:"TypeScript",stars:35093,forks:3128,starup:110},{title:`desktop /

      desktop`,owner:"desktop",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/634063?s=40&v=4",path:"/desktop/desktop",ourl:"https://github.com/desktop",url:"https://github.com/desktop/desktop",description:"",language:"TypeScript",stars:21650,forks:10420,starup:34}],"TypeScript-monthly":[{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:129958,forks:7204,starup:13422},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:34485,forks:3840,starup:10482},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:10904,forks:722,starup:6221},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:61302,forks:6608,starup:8963},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:14780,forks:2151,starup:7637},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:15654,forks:1383,starup:6273},{title:`activeloopai /

      hivemind`,owner:"activeloopai",name:"hivemind",avatar:"https://avatars.githubusercontent.com/u/32709108?s=40&v=4",path:"/activeloopai/hivemind",ourl:"https://github.com/activeloopai",url:"https://github.com/activeloopai/hivemind",description:"",language:"TypeScript",stars:1425,forks:89,starup:1065},{title:`mauriceboe /

      TREK`,owner:"mauriceboe",name:"TREK",avatar:"https://avatars.githubusercontent.com/u/61554723?s=40&v=4",path:"/mauriceboe/TREK",ourl:"https://github.com/mauriceboe",url:"https://github.com/mauriceboe/TREK",description:"",language:"TypeScript",stars:8859,forks:734,starup:3477},{title:`withastro /

      flue`,owner:"withastro",name:"flue",avatar:"https://avatars.githubusercontent.com/u/622227?s=40&v=4",path:"/withastro/flue",ourl:"https://github.com/withastro",url:"https://github.com/withastro/flue",description:"",language:"TypeScript",stars:7033,forks:403,starup:3199},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:3965,forks:444,starup:1826},{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:57008,forks:3506,starup:20582},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:35718,forks:4422,starup:3932},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:24804,forks:3514,starup:8552},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:450878,forks:45339,starup:5661},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",ourl:"https://github.com/meshery",url:"https://github.com/meshery/meshery",description:"",language:"TypeScript",stars:11331,forks:3515,starup:1112},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:28112,forks:2427,starup:4357},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/121005188?s=40&v=4",path:"/makeplane/plane",ourl:"https://github.com/makeplane",url:"https://github.com/makeplane/plane",description:"",language:"TypeScript",stars:53694,forks:4836,starup:3751},{title:`Egonex-AI /

      Understand-Anything`,owner:"Egonex-AI",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Egonex-AI/Understand-Anything",ourl:"https://github.com/Egonex-AI",url:"https://github.com/Egonex-AI/Understand-Anything",description:"",language:"TypeScript",stars:70360,forks:5828,starup:22038},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:21083,forks:1795,starup:2782},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:10143,forks:1517,starup:4464}],"Vue-daily":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39612,forks:5102,starup:16},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6647,forks:2485,starup:5},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:2819,forks:766,starup:2},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3028,forks:1379,starup:7},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6701,forks:1088,starup:5},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28533,forks:3260,starup:14},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:406,forks:49774,starup:1},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9001,forks:2052,starup:8},{title:`Tencent /

      tdesign`,owner:"Tencent",name:"tdesign",avatar:"https://avatars.githubusercontent.com/u/26377630?s=40&v=4",path:"/Tencent/tdesign",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/tdesign",description:"",language:"Vue",stars:3923,forks:332,starup:2},{title:`nuxt-ui-templates /

      dashboard`,owner:"nuxt-ui-templates",name:"dashboard",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt-ui-templates/dashboard",ourl:"https://github.com/nuxt-ui-templates",url:"https://github.com/nuxt-ui-templates/dashboard",description:"",language:"Vue",stars:1044,forks:330,starup:1},{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1325,forks:125,starup:5},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14490,forks:1727,starup:1},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6879,forks:4823,starup:9},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1262,forks:63,starup:6},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1531,forks:418,starup:8},{title:`hslr-s /

      sun-panel`,owner:"hslr-s",name:"sun-panel",avatar:"https://avatars.githubusercontent.com/u/38825747?s=40&v=4",path:"/hslr-s/sun-panel",ourl:"https://github.com/hslr-s",url:"https://github.com/hslr-s/sun-panel",description:"",language:"Vue",stars:5208,forks:613,starup:5}],"Vue-weekly":[{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14490,forks:1727,starup:19},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6701,forks:1088,starup:27},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3028,forks:1379,starup:19},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28533,forks:3260,starup:48},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:406,forks:49774,starup:9},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2909,forks:1191,starup:36},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6594,forks:526,starup:22},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3645,forks:743,starup:49},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3219,forks:859,starup:17},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90253,forks:30416,starup:24},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15990,forks:1306,starup:74},{title:`elk-zone /

      elk`,owner:"elk-zone",name:"elk",avatar:"https://avatars.githubusercontent.com/u/6481596?s=40&v=4",path:"/elk-zone/elk",ourl:"https://github.com/elk-zone",url:"https://github.com/elk-zone/elk",description:"",language:"Vue",stars:6025,forks:620,starup:2},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1531,forks:418,starup:32},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2212,forks:312,starup:61},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6879,forks:4823,starup:41},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21455,forks:2336,starup:33},{title:`Kong /

      kongponents`,owner:"Kong",name:"kongponents",avatar:"https://avatars.githubusercontent.com/u/32174276?s=40&v=4",path:"/Kong/kongponents",ourl:"https://github.com/Kong",url:"https://github.com/Kong/kongponents",description:"",language:"Vue",stars:163,forks:26,starup:0},{title:`nuxt /

      devtools`,owner:"nuxt",name:"devtools",avatar:"https://avatars.githubusercontent.com/u/11247099?s=40&v=4",path:"/nuxt/devtools",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/devtools",description:"",language:"Vue",stars:3284,forks:207,starup:3}],"Vue-monthly":[{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2909,forks:1191,starup:123},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15990,forks:1306,starup:458},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32819,forks:8849,starup:350},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6701,forks:1088,starup:94},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3028,forks:1379,starup:78},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2212,forks:312,starup:219},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28533,forks:3260,starup:184},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6879,forks:4823,starup:153},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3645,forks:743,starup:180},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12932,forks:651,starup:129},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14490,forks:1727,starup:106},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:406,forks:49774,starup:30},{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1325,forks:125,starup:553},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1437,forks:112,starup:111}]},gt=C({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=K(),l=F(()=>b(X[`${s.value}-${o.value}`]));_("color",u),_("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=D,m=B,g=E,d=M,t=q,e=I,w=L,y=H,O=Q;return h(),T("div",null,[v(d,null,{default:x(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>S(s)?s.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>S(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v($,{name:"fade-top",mode:"out-in"},{default:x(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:x(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(y,{key:2})):(h(),k(O,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
