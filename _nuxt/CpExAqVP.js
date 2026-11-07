import L from"./B3TvYOj2.js";import R from"./C84JBt3c.js";import F from"./Dg-BldpW.js";import D from"./BbsvQL1I.js";import K from"./Beae-JML.js";import O from"./CX5IwP_K.js";import Y from"./Drt_2qe4.js";import{d as _}from"./KQwPfV-1.js";import{s as q,a as P,b as C,u as z,i as B,c as G}from"./l2NUHwPT.js";import{i as x,p as E,a5 as A,D as c,f as V,w as j,S as W,h as b,a6 as S,T as I,q as T,U as h,d as k,a as $,H as M}from"./D3VKHJ0x.js";import"./CVUA0W7q.js";import"./p2-M2djV.js";import"./BzcrL2-q.js";import"./DzVFdQi8.js";import"./yFM5C6Ga.js";const H=x({__name:"Chart",setup(f){const r=E("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),s=P("趋势仓库总指标排行榜",o);function i(u){const a=_(u);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=C(s,z);A(r,()=>{i(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(u,a)=>(c(),V("div",{ref_key:"chartRef",ref:l,style:j({height:v})},null,4))}}),U=Object.assign(H,{__name:"TrendChart"}),N=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=W(r),i=P("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=C(i,z);function v(a){const n=_(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:B(g[e%g.length])}));i.value.series[0].data=d,i.value.yAxis.data=m}A(o,()=>{v(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(c(),V("div",{ref_key:"chartRef",ref:l,style:j({height:u})},null,4))}}),Q=Object.assign(N,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:64676,forks:4201,starup:2548},{title:`Yu9191 /

      wloc`,owner:"Yu9191",name:"wloc",avatar:"https://avatars.githubusercontent.com/u/132221547?s=40&v=4",path:"/Yu9191/wloc",ourl:"https://github.com/Yu9191",url:"https://github.com/Yu9191/wloc",description:"",language:"JavaScript",stars:10651,forks:2630,starup:112},{title:`HunYiSage /

      dsh-purge`,owner:"HunYiSage",name:"dsh-purge",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/HunYiSage/dsh-purge",ourl:"https://github.com/HunYiSage",url:"https://github.com/HunYiSage/dsh-purge",description:"",language:"JavaScript",stars:20433,forks:4810,starup:774},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:70233,forks:6981,starup:95},{title:`ConardLi /

      garden-skills`,owner:"ConardLi",name:"garden-skills",avatar:"https://avatars.githubusercontent.com/u/30708545?s=40&v=4",path:"/ConardLi/garden-skills",ourl:"https://github.com/ConardLi",url:"https://github.com/ConardLi/garden-skills",description:"",language:"JavaScript",stars:14569,forks:1681,starup:518},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:88657,forks:6796,starup:152},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:32880,forks:6244,starup:398},{title:`babygoton /

      WorkDaddy`,owner:"babygoton",name:"WorkDaddy",avatar:"https://avatars.githubusercontent.com/u/29622572?s=40&v=4",path:"/babygoton/WorkDaddy",ourl:"https://github.com/babygoton",url:"https://github.com/babygoton/WorkDaddy",description:"",language:"JavaScript",stars:2782,forks:306,starup:30},{title:`cobusgreyling /

      grok-bot-templates`,owner:"cobusgreyling",name:"grok-bot-templates",avatar:"https://avatars.githubusercontent.com/u/7868717?s=40&v=4",path:"/cobusgreyling/grok-bot-templates",ourl:"https://github.com/cobusgreyling",url:"https://github.com/cobusgreyling/grok-bot-templates",description:"",language:"JavaScript",stars:102,forks:23,starup:5},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:252341,forks:51864,starup:248}],"JavaScript-weekly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:64676,forks:4201,starup:9990},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:111383,forks:7489,starup:5064},{title:`HunYiSage /

      dsh-purge`,owner:"HunYiSage",name:"dsh-purge",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/HunYiSage/dsh-purge",ourl:"https://github.com/HunYiSage",url:"https://github.com/HunYiSage/dsh-purge",description:"",language:"JavaScript",stars:20433,forks:4810,starup:6363},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:298812,forks:44156,starup:5498},{title:`github /

      awesome-copilot`,owner:"github",name:"awesome-copilot",avatar:"https://avatars.githubusercontent.com/u/434140?s=40&v=4",path:"/github/awesome-copilot",ourl:"https://github.com/github",url:"https://github.com/github/awesome-copilot",description:"",language:"JavaScript",stars:40894,forks:5306,starup:320},{title:`techjarves /

      Portable-Local-Studio`,owner:"techjarves",name:"Portable-Local-Studio",avatar:"https://avatars.githubusercontent.com/u/54399984?s=40&v=4",path:"/techjarves/Portable-Local-Studio",ourl:"https://github.com/techjarves",url:"https://github.com/techjarves/Portable-Local-Studio",description:"",language:"JavaScript",stars:1947,forks:476,starup:372},{title:`DeanChensj /

      jiangshan-map`,owner:"DeanChensj",name:"jiangshan-map",avatar:"https://avatars.githubusercontent.com/u/9414763?s=40&v=4",path:"/DeanChensj/jiangshan-map",ourl:"https://github.com/DeanChensj",url:"https://github.com/DeanChensj/jiangshan-map",description:"",language:"JavaScript",stars:4532,forks:518,starup:2651},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:58985,forks:8620,starup:1456},{title:`Leaflet /

      Leaflet`,owner:"Leaflet",name:"Leaflet",avatar:"https://avatars.githubusercontent.com/u/25395?s=40&v=4",path:"/Leaflet/Leaflet",ourl:"https://github.com/Leaflet",url:"https://github.com/Leaflet/Leaflet",description:"",language:"JavaScript",stars:45874,forks:6211,starup:84},{title:`ConardLi /

      garden-skills`,owner:"ConardLi",name:"garden-skills",avatar:"https://avatars.githubusercontent.com/u/30708545?s=40&v=4",path:"/ConardLi/garden-skills",ourl:"https://github.com/ConardLi",url:"https://github.com/ConardLi/garden-skills",description:"",language:"JavaScript",stars:14569,forks:1681,starup:1124},{title:`ericrisco /

      rsc-harness`,owner:"ericrisco",name:"rsc-harness",avatar:"https://avatars.githubusercontent.com/u/20164590?s=40&v=4",path:"/ericrisco/rsc-harness",ourl:"https://github.com/ericrisco",url:"https://github.com/ericrisco/rsc-harness",description:"",language:"JavaScript",stars:529,forks:74,starup:123},{title:`remoteintech /

      remote-jobs`,owner:"remoteintech",name:"remote-jobs",avatar:"https://avatars.githubusercontent.com/u/52214?s=40&v=4",path:"/remoteintech/remote-jobs",ourl:"https://github.com/remoteintech",url:"https://github.com/remoteintech/remote-jobs",description:"",language:"JavaScript",stars:41087,forks:3964,starup:125}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:64676,forks:4201,starup:38004},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"JavaScript",stars:33634,forks:2306,starup:8288},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:111383,forks:7489,starup:18668},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:4118,forks:372,starup:2581},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:21953,forks:1243,starup:5119},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:117768,forks:36890,starup:1755},{title:`Minglink /

      dsh-infinite-gen-5`,owner:"Minglink",name:"dsh-infinite-gen-5",avatar:"https://avatars.githubusercontent.com/u/108618469?s=40&v=4",path:"/Minglink/dsh-infinite-gen-5",ourl:"https://github.com/Minglink",url:"https://github.com/Minglink/dsh-infinite-gen-5",description:"",language:"JavaScript",stars:3990,forks:517,starup:1683},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:38420,forks:2769,starup:17302},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:20042,forks:2675,starup:14860},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:298812,forks:44156,starup:25975},{title:`algorithm-visualizer /

      algorithm-visualizer`,owner:"algorithm-visualizer",name:"algorithm-visualizer",avatar:"https://avatars.githubusercontent.com/u/1618732?s=40&v=4",path:"/algorithm-visualizer/algorithm-visualizer",ourl:"https://github.com/algorithm-visualizer",url:"https://github.com/algorithm-visualizer/algorithm-visualizer",description:"",language:"JavaScript",stars:49397,forks:7647,starup:601},{title:`plugin87 /

      ux-ui-agent-skills`,owner:"plugin87",name:"ux-ui-agent-skills",avatar:"https://avatars.githubusercontent.com/u/5790381?s=40&v=4",path:"/plugin87/ux-ui-agent-skills",ourl:"https://github.com/plugin87",url:"https://github.com/plugin87/ux-ui-agent-skills",description:"",language:"JavaScript",stars:3126,forks:301,starup:1601}],"TypeScript-daily":[{title:`meta /

      astryx`,owner:"meta",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/meta/astryx",ourl:"https://github.com/meta",url:"https://github.com/meta/astryx",description:"",language:"TypeScript",stars:14096,forks:1171,starup:198},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:16117,forks:2282,starup:1986},{title:`tailwindlabs /

      tailwindcss`,owner:"tailwindlabs",name:"tailwindcss",avatar:"https://avatars.githubusercontent.com/u/4323180?s=40&v=4",path:"/tailwindlabs/tailwindcss",ourl:"https://github.com/tailwindlabs",url:"https://github.com/tailwindlabs/tailwindcss",description:"",language:"TypeScript",stars:98172,forks:7088,starup:152},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:4369,forks:357,starup:185},{title:`chaitin /

      MonkeyCode`,owner:"chaitin",name:"MonkeyCode",avatar:"https://avatars.githubusercontent.com/u/170864681?s=40&v=4",path:"/chaitin/MonkeyCode",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/MonkeyCode",description:"",language:"TypeScript",stars:5084,forks:768,starup:22},{title:`awslabs /

      aidlc-workflows`,owner:"awslabs",name:"aidlc-workflows",avatar:"https://avatars.githubusercontent.com/u/2102737?s=40&v=4",path:"/awslabs/aidlc-workflows",ourl:"https://github.com/awslabs",url:"https://github.com/awslabs/aidlc-workflows",description:"",language:"TypeScript",stars:5912,forks:1051,starup:99},{title:`Unleash /

      unleash`,owner:"Unleash",name:"unleash",avatar:"https://avatars.githubusercontent.com/u/17786332?s=40&v=4",path:"/Unleash/unleash",ourl:"https://github.com/Unleash",url:"https://github.com/Unleash/unleash",description:"",language:"TypeScript",stars:14142,forks:930,starup:180},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:118127,forks:7493,starup:1155},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:140554,forks:20746,starup:719},{title:`elder-plinius /

      T3MP3ST`,owner:"elder-plinius",name:"T3MP3ST",avatar:"https://avatars.githubusercontent.com/u/1159087?s=40&v=4",path:"/elder-plinius/T3MP3ST",ourl:"https://github.com/elder-plinius",url:"https://github.com/elder-plinius/T3MP3ST",description:"",language:"TypeScript",stars:6966,forks:1447,starup:242},{title:`lobehub /

      lobehub`,owner:"lobehub",name:"lobehub",avatar:"https://avatars.githubusercontent.com/u/28616219?s=40&v=4",path:"/lobehub/lobehub",ourl:"https://github.com/lobehub",url:"https://github.com/lobehub/lobehub",description:"",language:"TypeScript",stars:84288,forks:16122,starup:209},{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:154850,forks:25593,starup:122},{title:`cheaper-inference /

      OmniRoute`,owner:"cheaper-inference",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/cheaper-inference/OmniRoute",ourl:"https://github.com/cheaper-inference",url:"https://github.com/cheaper-inference/OmniRoute",description:"",language:"TypeScript",stars:85279,forks:12876,starup:325},{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:439257,forks:108801,starup:3308},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",ourl:"https://github.com/angular",url:"https://github.com/angular/angular",description:"",language:"TypeScript",stars:101464,forks:28919,starup:135},{title:`Marker-Inc-Korea /

      AutoRAG`,owner:"Marker-Inc-Korea",name:"AutoRAG",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/Marker-Inc-Korea/AutoRAG",ourl:"https://github.com/Marker-Inc-Korea",url:"https://github.com/Marker-Inc-Korea/AutoRAG",description:"",language:"TypeScript",stars:5397,forks:485,starup:40},{title:`microsoft /

      vscode`,owner:"microsoft",name:"vscode",avatar:"https://avatars.githubusercontent.com/u/900690?s=40&v=4",path:"/microsoft/vscode",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/vscode",description:"",language:"TypeScript",stars:195125,forks:44439,starup:301},{title:`actions /

      checkout`,owner:"actions",name:"checkout",avatar:"https://avatars.githubusercontent.com/u/12102068?s=40&v=4",path:"/actions/checkout",ourl:"https://github.com/actions",url:"https://github.com/actions/checkout",description:"",language:"TypeScript",stars:9005,forks:2746,starup:6},{title:`Fission-AI /

      OpenSpec`,owner:"Fission-AI",name:"OpenSpec",avatar:"https://avatars.githubusercontent.com/u/30385142?s=40&v=4",path:"/Fission-AI/OpenSpec",ourl:"https://github.com/Fission-AI",url:"https://github.com/Fission-AI/OpenSpec",description:"",language:"TypeScript",stars:74204,forks:5092,starup:92}],"TypeScript-weekly":[{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:114200,forks:9911,starup:8726},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:16613,forks:3226,starup:5476},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:50381,forks:9804,starup:16782},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:16117,forks:2282,starup:6395},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:140554,forks:20746,starup:2230},{title:`nightly-labs /

      openbot`,owner:"nightly-labs",name:"openbot",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/nightly-labs/openbot",ourl:"https://github.com/nightly-labs",url:"https://github.com/nightly-labs/openbot",description:"",language:"TypeScript",stars:6152,forks:625,starup:1808},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:17545,forks:1670,starup:2389},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:10353,forks:1289,starup:1666},{title:`tldraw /

      tldraw`,owner:"tldraw",name:"tldraw",avatar:"https://avatars.githubusercontent.com/u/23072548?s=40&v=4",path:"/tldraw/tldraw",ourl:"https://github.com/tldraw",url:"https://github.com/tldraw/tldraw",description:"",language:"TypeScript",stars:51395,forks:3622,starup:351},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83851,forks:9289,starup:308},{title:`liguobao /

      ds-harness-remote`,owner:"liguobao",name:"ds-harness-remote",avatar:"https://avatars.githubusercontent.com/u/10910802?s=40&v=4",path:"/liguobao/ds-harness-remote",ourl:"https://github.com/liguobao",url:"https://github.com/liguobao/ds-harness-remote",description:"",language:"TypeScript",stars:2123,forks:171,starup:1044},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:38437,forks:3354,starup:1096},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:38090,forks:4301,starup:877},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:48596,forks:6691,starup:3915},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:42460,forks:4351,starup:1074},{title:`github /

      docs`,owner:"github",name:"docs",avatar:"https://avatars.githubusercontent.com/u/63058869?s=40&v=4",path:"/github/docs",ourl:"https://github.com/github",url:"https://github.com/github/docs",description:"",language:"TypeScript",stars:21344,forks:69425,starup:429},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:41716,forks:4793,starup:735}],"TypeScript-monthly":[{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:439257,forks:108801,starup:431436},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:80278,forks:7406,starup:22718},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:50381,forks:9804,starup:23406},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:114200,forks:9911,starup:17612},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:48596,forks:6691,starup:17510},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:17545,forks:1670,starup:7124},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:71393,forks:5909,starup:9292},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:38437,forks:3354,starup:5244},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:7016,forks:625,starup:1583},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:41049,forks:7826,starup:4422},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:118127,forks:7493,starup:31885},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:15620,forks:1631,starup:5609},{title:`chthollyphile /

      folia-major`,owner:"chthollyphile",name:"folia-major",avatar:"https://avatars.githubusercontent.com/u/30263107?s=40&v=4",path:"/chthollyphile/folia-major",ourl:"https://github.com/chthollyphile",url:"https://github.com/chthollyphile/folia-major",description:"",language:"TypeScript",stars:11906,forks:1327,starup:8292},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:225147,forks:30384,starup:14710},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83851,forks:9289,starup:1022},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:111857,forks:18522,starup:14174},{title:`microsoft /

      playwright`,owner:"microsoft",name:"playwright",avatar:"https://avatars.githubusercontent.com/u/883973?s=40&v=4",path:"/microsoft/playwright",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/playwright",description:"",language:"TypeScript",stars:99502,forks:6809,starup:2468},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:16613,forks:3226,starup:12266},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:23778,forks:30838,starup:9890},{title:`google /

      brotli`,owner:"google",name:"brotli",avatar:"https://avatars.githubusercontent.com/u/203457?s=40&v=4",path:"/google/brotli",ourl:"https://github.com/google",url:"https://github.com/google/brotli",description:"",language:"TypeScript",stars:15090,forks:1395,starup:190},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108758,forks:14931,starup:2023},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:81114,forks:9543,starup:7483}],"Vue-daily":[{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33592,forks:4677,starup:20},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17302,forks:1410,starup:23},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:7101,forks:444,starup:19},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1868,forks:143,starup:11},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:477,forks:74142,starup:0},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3926,forks:1585,starup:8},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9468,forks:1784,starup:3},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41148,forks:5559,starup:13},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10317,forks:901,starup:4},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:986,forks:95,starup:3},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3075,forks:230,starup:18},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2102,forks:537,starup:5},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6937,forks:581,starup:4},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:11544,forks:1396,starup:106},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:569,forks:105,starup:2},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4073,forks:458,starup:13},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:2042,forks:113,starup:7},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24973,forks:3041,starup:18}],"Vue-weekly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:11544,forks:1396,starup:853},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33592,forks:4677,starup:125},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3075,forks:230,starup:126},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17302,forks:1410,starup:149},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3877,forks:291,starup:388},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22341,forks:1574,starup:82},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24973,forks:3041,starup:160},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3485,forks:1006,starup:25},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10317,forks:901,starup:25},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:477,forks:74142,starup:4},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2102,forks:537,starup:30},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9468,forks:1784,starup:25},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2824,forks:491,starup:17},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3333,forks:127,starup:27},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90115,forks:30215,starup:26},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:4073,forks:458,starup:100},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6937,forks:581,starup:26},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11706,forks:928,starup:26},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:778,forks:256,starup:0}],"Vue-monthly":[{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3877,forks:291,starup:1111},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:7101,forks:444,starup:747},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:11544,forks:1396,starup:1215},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33592,forks:4677,starup:359},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22341,forks:1574,starup:389},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24973,forks:3041,starup:707},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17302,forks:1410,starup:445},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:3075,forks:230,starup:412},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9468,forks:1784,starup:113},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1868,forks:143,starup:147},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90115,forks:30215,starup:77},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7036,forks:353,starup:80},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2824,forks:491,starup:78},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14451,forks:1787,starup:30},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:53975,forks:14358,starup:24},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:311,forks:367,starup:11},{title:`mainsail-crew /

      mainsail`,owner:"mainsail-crew",name:"mainsail",avatar:"https://avatars.githubusercontent.com/u/8167632?s=40&v=4",path:"/mainsail-crew/mainsail",ourl:"https://github.com/mainsail-crew",url:"https://github.com/mainsail-crew/mainsail",description:"",language:"Vue",stars:2244,forks:616,starup:29},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1251,forks:255,starup:11}]},mt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=G(),l=$(()=>v(X[`${s.value}-${o.value}`]));M("color",i),M("data",l);function v(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=L,g=R,m=F,d=D,t=K,e=O,w=Y,y=U,J=Q;return c(),V("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(I,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),k(w,{key:1,"has-starup":""})):h(r)==="chart"?(c(),k(y,{key:2})):(c(),k(J,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
