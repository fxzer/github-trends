import O from"./DdcLBdXH.js";import L from"./BbL7kBg-.js";import I from"./DcIj-lZB.js";import M from"./ChnuUaO6.js";import z from"./Dp07XBwV.js";import W from"./Dkk2vKb9.js";import H from"./1hiZ8VTe.js";import{d as A}from"./KQwPfV-1.js";import{s as R,a as D,b as V,u as j,i as E,c as G}from"./4siiysr-.js";import{i as x,p as q,a5 as F,D as h,f as C,w as B,S as K,h as b,a6 as S,T as $,q as T,U as c,d as k,a as Q,H as _}from"./Ds_FlhU_.js";import"./DMX6Xabw.js";import"./p2-M2djV.js";import"./CMurmrEy.js";import"./DiluzYwx.js";import"./C6Sl2CUp.js";const U=x({__name:"Chart",setup(f){const r=q("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(R),s=D("趋势仓库总指标排行榜",o);function u(i){const a=A(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=V(s,j);F(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:B({height:v})},null,4))}}),N=Object.assign(U,{__name:"TrendChart"}),P=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=K(r),u=D("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,j);function v(a){const n=A(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}F(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:B({height:i})},null,4))}}),Y=Object.assign(P,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:86323,forks:9271,starup:578},{title:`chr0nzz /

      traefik-manager`,owner:"chr0nzz",name:"traefik-manager",avatar:"https://avatars.githubusercontent.com/u/187675356?s=40&v=4",path:"/chr0nzz/traefik-manager",ourl:"https://github.com/chr0nzz",url:"https://github.com/chr0nzz/traefik-manager",description:"",language:"JavaScript",stars:1216,forks:53,starup:25},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:63554,forks:12532,starup:110},{title:`techjarves /

      Uncensored-Local-Studio`,owner:"techjarves",name:"Uncensored-Local-Studio",avatar:"https://avatars.githubusercontent.com/u/54399984?s=40&v=4",path:"/techjarves/Uncensored-Local-Studio",ourl:"https://github.com/techjarves",url:"https://github.com/techjarves/Uncensored-Local-Studio",description:"",language:"JavaScript",stars:908,forks:250,starup:15},{title:`bmad-code-org /

      BMAD-METHOD`,owner:"bmad-code-org",name:"BMAD-METHOD",avatar:"https://avatars.githubusercontent.com/u/20280?s=40&v=4",path:"/bmad-code-org/BMAD-METHOD",ourl:"https://github.com/bmad-code-org",url:"https://github.com/bmad-code-org/BMAD-METHOD",description:"",language:"JavaScript",stars:51782,forks:5924,starup:45},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:43972,forks:6912,starup:152},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11285,forks:1787,starup:39},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:27985,forks:2626,starup:25},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:100985,forks:5562,starup:717},{title:`polius /

      FileSync`,owner:"polius",name:"FileSync",avatar:"https://avatars.githubusercontent.com/u/691095?s=40&v=4",path:"/polius/FileSync",ourl:"https://github.com/polius",url:"https://github.com/polius/FileSync",description:"",language:"JavaScript",stars:1474,forks:139,starup:21},{title:`cobusgreyling /

      loop-engineering`,owner:"cobusgreyling",name:"loop-engineering",avatar:"https://avatars.githubusercontent.com/u/7868717?s=40&v=4",path:"/cobusgreyling/loop-engineering",ourl:"https://github.com/cobusgreyling",url:"https://github.com/cobusgreyling/loop-engineering",description:"",language:"JavaScript",stars:10242,forks:1391,starup:97},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:12326,forks:1342,starup:10},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61314,forks:7208,starup:10},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:239528,forks:36365,starup:276}],"JavaScript-weekly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38874,forks:3169,starup:597},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1179,forks:219,starup:221},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:10123,forks:1221,starup:1052},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:86323,forks:9271,starup:4671},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:58422,forks:5988,starup:1189},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:96329,forks:15768,starup:238},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98742,forks:32548,starup:79},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:100985,forks:5562,starup:5134},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:114446,forks:36471,starup:224},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:7336,forks:424,starup:140},{title:`DavidHDev /

      react-bits`,owner:"DavidHDev",name:"react-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/react-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/react-bits",description:"",language:"JavaScript",stars:45351,forks:2167,starup:557},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90089,forks:8233,starup:301},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:90470,forks:7882,starup:983},{title:`vrgamegirl19 /

      comfyui-vrgamedevgirl`,owner:"vrgamegirl19",name:"comfyui-vrgamedevgirl",avatar:"https://avatars.githubusercontent.com/u/133295930?s=40&v=4",path:"/vrgamegirl19/comfyui-vrgamedevgirl",ourl:"https://github.com/vrgamegirl19",url:"https://github.com/vrgamegirl19/comfyui-vrgamedevgirl",description:"",language:"JavaScript",stars:637,forks:91,starup:60},{title:`fishjar /

      kiss-translator`,owner:"fishjar",name:"kiss-translator",avatar:"https://avatars.githubusercontent.com/u/1157624?s=40&v=4",path:"/fishjar/kiss-translator",ourl:"https://github.com/fishjar",url:"https://github.com/fishjar/kiss-translator",description:"",language:"JavaScript",stars:11954,forks:561,starup:178}],"JavaScript-monthly":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:58339,forks:3560,starup:12910},{title:`earthtojake /

      text-to-cad`,owner:"earthtojake",name:"text-to-cad",avatar:"https://avatars.githubusercontent.com/u/10742417?s=40&v=4",path:"/earthtojake/text-to-cad",ourl:"https://github.com/earthtojake",url:"https://github.com/earthtojake/text-to-cad",description:"",language:"Python",stars:13287,forks:1401,starup:5334},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:675,forks:136,starup:237},{title:`chuspeeism /

      dashi-ppt-skill`,owner:"chuspeeism",name:"dashi-ppt-skill",avatar:"https://avatars.githubusercontent.com/u/22310591?s=40&v=4",path:"/chuspeeism/dashi-ppt-skill",ourl:"https://github.com/chuspeeism",url:"https://github.com/chuspeeism/dashi-ppt-skill",description:"",language:"JavaScript",stars:5035,forks:476,starup:2629},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5641,forks:2456,starup:1340},{title:`DavidHDev /

      react-bits`,owner:"DavidHDev",name:"react-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/react-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/react-bits",description:"",language:"JavaScript",stars:45351,forks:2167,starup:2214},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38874,forks:3169,starup:875},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:5377,forks:754,starup:940},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:7131,forks:864,starup:1018},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61314,forks:7208,starup:124},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:5616,forks:298,starup:4481},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1179,forks:219,starup:749},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12788,forks:3618,starup:183},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2322,forks:625,starup:1024},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:2723,forks:243,starup:917},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11285,forks:1787,starup:873},{title:`saadeghi /

      daisyui`,owner:"saadeghi",name:"daisyui",avatar:"https://avatars.githubusercontent.com/u/7342023?s=40&v=4",path:"/saadeghi/daisyui",ourl:"https://github.com/saadeghi",url:"https://github.com/saadeghi/daisyui",description:"",language:"JavaScript",stars:42048,forks:1672,starup:516},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:43972,forks:6912,starup:6431},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90089,forks:8233,starup:1221},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10950,forks:26664,starup:311},{title:`xifangczy /

      cat-catch`,owner:"xifangczy",name:"cat-catch",avatar:"https://avatars.githubusercontent.com/u/1239904?s=40&v=4",path:"/xifangczy/cat-catch",ourl:"https://github.com/xifangczy",url:"https://github.com/xifangczy/cat-catch",description:"",language:"JavaScript",stars:21292,forks:1868,starup:825}],"TypeScript-daily":[{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:43005,forks:3001,starup:875},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:77284,forks:14265,starup:748},{title:`PrimeIntellect-ai /

      prime-agent`,owner:"PrimeIntellect-ai",name:"prime-agent",avatar:"https://avatars.githubusercontent.com/u/46242684?s=40&v=4",path:"/PrimeIntellect-ai/prime-agent",ourl:"https://github.com/PrimeIntellect-ai",url:"https://github.com/PrimeIntellect-ai/prime-agent",description:"",language:"TypeScript",stars:14348,forks:1479,starup:1138},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18306,forks:4160,starup:306},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:87860,forks:10918,starup:990},{title:`anthropics /

      cwc-workshops`,owner:"anthropics",name:"cwc-workshops",avatar:"https://avatars.githubusercontent.com/u/293203?s=40&v=4",path:"/anthropics/cwc-workshops",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/cwc-workshops",description:"",language:"TypeScript",stars:1976,forks:553,starup:20},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:36715,forks:4211,starup:69},{title:`danielmiessler /

      LifeOS`,owner:"danielmiessler",name:"LifeOS",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/LifeOS",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/LifeOS",description:"",language:"TypeScript",stars:18321,forks:2391,starup:506},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:165993,forks:9328,starup:934},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:127613,forks:19219,starup:233},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:28237,forks:4149,starup:78},{title:`sourcebot-dev /

      sourcebot`,owner:"sourcebot-dev",name:"sourcebot",avatar:"https://avatars.githubusercontent.com/u/10233483?s=40&v=4",path:"/sourcebot-dev/sourcebot",ourl:"https://github.com/sourcebot-dev",url:"https://github.com/sourcebot-dev/sourcebot",description:"",language:"TypeScript",stars:3833,forks:352,starup:34},{title:`JimLiu /

      baoyu-skills`,owner:"JimLiu",name:"baoyu-skills",avatar:"https://avatars.githubusercontent.com/u/648674?s=40&v=4",path:"/JimLiu/baoyu-skills",ourl:"https://github.com/JimLiu",url:"https://github.com/JimLiu/baoyu-skills",description:"",language:"TypeScript",stars:24884,forks:2781,starup:44},{title:`modelcontextprotocol /

      typescript-sdk`,owner:"modelcontextprotocol",name:"typescript-sdk",avatar:"https://avatars.githubusercontent.com/u/432536?s=40&v=4",path:"/modelcontextprotocol/typescript-sdk",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/typescript-sdk",description:"",language:"TypeScript",stars:13139,forks:2068,starup:16},{title:`TanStack /

      router`,owner:"TanStack",name:"router",avatar:"https://avatars.githubusercontent.com/u/5580297?s=40&v=4",path:"/TanStack/router",ourl:"https://github.com/TanStack",url:"https://github.com/TanStack/router",description:"",language:"TypeScript",stars:14922,forks:1792,starup:6},{title:`eigent-ai /

      eigent`,owner:"eigent-ai",name:"eigent",avatar:"https://avatars.githubusercontent.com/u/133094783?s=40&v=4",path:"/eigent-ai/eigent",ourl:"https://github.com/eigent-ai",url:"https://github.com/eigent-ai/eigent",description:"",language:"TypeScript",stars:14951,forks:1774,starup:33},{title:`n8n-io /

      n8n`,owner:"n8n-io",name:"n8n",avatar:"https://avatars.githubusercontent.com/u/6249596?s=40&v=4",path:"/n8n-io/n8n",ourl:"https://github.com/n8n-io",url:"https://github.com/n8n-io/n8n",description:"",language:"TypeScript",stars:200295,forks:60084,starup:160},{title:`code-yeongyu /

      oh-my-openagent`,owner:"code-yeongyu",name:"oh-my-openagent",avatar:"https://avatars.githubusercontent.com/u/11153873?s=40&v=4",path:"/code-yeongyu/oh-my-openagent",ourl:"https://github.com/code-yeongyu",url:"https://github.com/code-yeongyu/oh-my-openagent",description:"",language:"TypeScript",stars:67723,forks:5535,starup:98},{title:`corsairdev /

      corsair`,owner:"corsairdev",name:"corsair",avatar:"https://avatars.githubusercontent.com/u/50637008?s=40&v=4",path:"/corsairdev/corsair",ourl:"https://github.com/corsairdev",url:"https://github.com/corsairdev/corsair",description:"",language:"TypeScript",stars:9009,forks:261,starup:683},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:19807,forks:1422,starup:40}],"TypeScript-weekly":[{title:`cloudflare /

      computer`,owner:"cloudflare",name:"computer",avatar:"https://avatars.githubusercontent.com/u/263346377?s=40&v=4",path:"/cloudflare/computer",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/computer",description:"",language:"TypeScript",stars:7637,forks:413,starup:6775},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:20012,forks:1809,starup:7017},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18306,forks:4160,starup:1650},{title:`usekaneo /

      kaneo`,owner:"usekaneo",name:"kaneo",avatar:"https://avatars.githubusercontent.com/u/44305048?s=40&v=4",path:"/usekaneo/kaneo",ourl:"https://github.com/usekaneo",url:"https://github.com/usekaneo/kaneo",description:"",language:"TypeScript",stars:8122,forks:650,starup:956},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:8972,forks:1042,starup:639},{title:`danielmiessler /

      LifeOS`,owner:"danielmiessler",name:"LifeOS",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/LifeOS",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/LifeOS",description:"",language:"TypeScript",stars:18321,forks:2391,starup:1138},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:23994,forks:2283,starup:2133},{title:`ant-design /

      ant-design`,owner:"ant-design",name:"ant-design",avatar:"https://avatars.githubusercontent.com/u/507615?s=40&v=4",path:"/ant-design/ant-design",ourl:"https://github.com/ant-design",url:"https://github.com/ant-design/ant-design",description:"",language:"TypeScript",stars:99036,forks:54696,starup:128},{title:`open-mercato /

      open-mercato`,owner:"open-mercato",name:"open-mercato",avatar:"https://avatars.githubusercontent.com/u/211899?s=40&v=4",path:"/open-mercato/open-mercato",ourl:"https://github.com/open-mercato",url:"https://github.com/open-mercato/open-mercato",description:"",language:"TypeScript",stars:1620,forks:357,starup:71},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",ourl:"https://github.com/FlowiseAI",url:"https://github.com/FlowiseAI/Flowise",description:"",language:"TypeScript",stars:55331,forks:24882,starup:213},{title:`EKKOLearnAI /

      hermes-studio`,owner:"EKKOLearnAI",name:"hermes-studio",avatar:"https://avatars.githubusercontent.com/u/152005280?s=40&v=4",path:"/EKKOLearnAI/hermes-studio",ourl:"https://github.com/EKKOLearnAI",url:"https://github.com/EKKOLearnAI/hermes-studio",description:"",language:"TypeScript",stars:10056,forks:1232,starup:321}],"TypeScript-monthly":[{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:46045,forks:6195,starup:30582},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:80916,forks:12094,starup:19348},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:43005,forks:3001,starup:26440},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18306,forks:4160,starup:4753},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:20012,forks:1809,starup:11445},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:11384,forks:1315,starup:7123},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:87860,forks:10918,starup:18096},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:4032,forks:561,starup:2913},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:82435,forks:8144,starup:20621},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:6399,forks:1016,starup:3345},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:21875,forks:2157,starup:5293},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:7161,forks:311,starup:3548},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:50114,forks:6212,starup:9679},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:47738,forks:4709,starup:6375},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5404,forks:357,starup:1647},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:23994,forks:2283,starup:6774},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:26936,forks:2841,starup:1148},{title:`modelcontextprotocol /

      typescript-sdk`,owner:"modelcontextprotocol",name:"typescript-sdk",avatar:"https://avatars.githubusercontent.com/u/432536?s=40&v=4",path:"/modelcontextprotocol/typescript-sdk",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/typescript-sdk",description:"",language:"TypeScript",stars:13139,forks:2068,starup:333},{title:`openobserve /

      openobserve`,owner:"openobserve",name:"openobserve",avatar:"https://avatars.githubusercontent.com/u/1628250?s=40&v=4",path:"/openobserve/openobserve",ourl:"https://github.com/openobserve",url:"https://github.com/openobserve/openobserve",description:"",language:"TypeScript",stars:20927,forks:1009,starup:1135},{title:`netease-youdao /

      LobsterAI`,owner:"netease-youdao",name:"LobsterAI",avatar:"https://avatars.githubusercontent.com/u/91402026?s=40&v=4",path:"/netease-youdao/LobsterAI",ourl:"https://github.com/netease-youdao",url:"https://github.com/netease-youdao/LobsterAI",description:"",language:"TypeScript",stars:5861,forks:926,starup:388},{title:`browseros-ai /

      BrowserOS`,owner:"browseros-ai",name:"BrowserOS",avatar:"https://avatars.githubusercontent.com/u/1223275?s=40&v=4",path:"/browseros-ai/BrowserOS",ourl:"https://github.com/browseros-ai",url:"https://github.com/browseros-ai/BrowserOS",description:"",language:"TypeScript",stars:13167,forks:1378,starup:1425},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:6669,forks:407,starup:1517},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:50317,forks:4765,starup:2102}],"Vue-daily":[{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5723,forks:1082,starup:9},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33122,forks:8923,starup:16},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6717,forks:542,starup:3},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40194,forks:5321,starup:24},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11545,forks:922,starup:1},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3123,forks:1441,starup:2},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21622,forks:3899,starup:1},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21630,forks:1476,starup:14},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2251,forks:506,starup:16},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3955,forks:116,starup:15},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22516,forks:1085,starup:19},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:278,forks:26,starup:5},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3316,forks:1330,starup:16}],"Vue-weekly":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1856,forks:104,starup:403},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3316,forks:1330,starup:191},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7564,forks:1024,starup:100},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3955,forks:116,starup:82},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33122,forks:8923,starup:94},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6717,forks:542,starup:21},{title:`WGDashboard /

      WGDashboard`,owner:"WGDashboard",name:"WGDashboard",avatar:"https://avatars.githubusercontent.com/u/25237201?s=40&v=4",path:"/WGDashboard/WGDashboard",ourl:"https://github.com/WGDashboard",url:"https://github.com/WGDashboard/WGDashboard",description:"",language:"Vue",stars:3694,forks:442,starup:17},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40194,forks:5321,starup:120},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21630,forks:1476,starup:55},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21622,forks:3899,starup:21},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:427,forks:57569,starup:2},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28743,forks:3284,starup:40},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1754,forks:458,starup:41},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3303,forks:909,starup:19},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:190,forks:26,starup:16},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5723,forks:1082,starup:58}],"Vue-monthly":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22516,forks:1085,starup:790},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26164,forks:1921,starup:426},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1856,forks:104,starup:538},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3316,forks:1330,starup:380},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2831,forks:359,starup:557},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3955,forks:116,starup:296},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21630,forks:1476,starup:302},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28743,forks:3284,starup:194},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1754,forks:458,starup:173},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:427,forks:57569,starup:14},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2317,forks:149,starup:453},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:3008,forks:803,starup:180},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3961,forks:814,starup:237},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6717,forks:542,starup:103},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3303,forks:909,starup:80},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40194,forks:5321,starup:505},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2251,forks:506,starup:156},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2633,forks:409,starup:56},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9226,forks:2090,starup:211},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3002,forks:112,starup:146},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:6919,forks:335,starup:60},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:749,forks:204,starup:10}]},mt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=G(),l=Q(()=>v(X[`${s.value}-${o.value}`]));_("color",u),_("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=O,g=L,m=I,d=M,t=z,e=W,w=H,y=N,J=Y;return h(),C("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(y,{key:2})):(h(),k(J,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
