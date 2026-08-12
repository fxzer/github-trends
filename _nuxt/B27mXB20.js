import O from"./CJRCXAZa.js";import R from"./DAbRCzqN.js";import I from"./DG_SMu4G.js";import M from"./B-Fhzuhj.js";import z from"./Che9dfWk.js";import W from"./B5-U9uZs.js";import H from"./UwfIZvee.js";import{d as _}from"./KQwPfV-1.js";import{s as L,a as J,b as D,u as V,i as G,c as q}from"./7okRuCgO.js";import{i as C,p as E,a5 as B,D as h,f as x,w as F,S as K,h as b,a6 as S,T as P,q as T,U as c,d as k,a as Y,H as A}from"./BlqIr0Fl.js";import"./BLRvBBAt.js";import"./p2-M2djV.js";import"./SV3xjDIe.js";import"./Dyhav9Wi.js";import"./D9l6Ns3J.js";const $=C({__name:"Chart",setup(f){const r=E("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(L),s=J("趋势仓库总指标排行榜",o);function u(i){const a=_(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=D(s,V);B(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:F({height:v})},null,4))}}),N=Object.assign($,{__name:"TrendChart"}),Q=C({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=K(r),u=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=D(u,V);function v(a){const n=_(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:G(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}B(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:F({height:i})},null,4))}}),Z=Object.assign(Q,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:7142,forks:867,starup:58},{title:`airbnb /

      javascript`,owner:"airbnb",name:"javascript",avatar:"https://avatars.githubusercontent.com/u/45469?s=40&v=4",path:"/airbnb/javascript",ourl:"https://github.com/airbnb",url:"https://github.com/airbnb/javascript",description:"",language:"JavaScript",stars:148130,forks:26612,starup:15},{title:`cobusgreyling /

      loop-engineering`,owner:"cobusgreyling",name:"loop-engineering",avatar:"https://avatars.githubusercontent.com/u/7868717?s=40&v=4",path:"/cobusgreyling/loop-engineering",ourl:"https://github.com/cobusgreyling",url:"https://github.com/cobusgreyling/loop-engineering",description:"",language:"JavaScript",stars:10276,forks:1397,starup:97},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5647,forks:2460,starup:31},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:38546,forks:5221,starup:187},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:12333,forks:1344,starup:12},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:27988,forks:2626,starup:25},{title:`Snailclimb /

      JavaGuide`,owner:"Snailclimb",name:"JavaGuide",avatar:"https://avatars.githubusercontent.com/u/29880145?s=40&v=4",path:"/Snailclimb/JavaGuide",ourl:"https://github.com/Snailclimb",url:"https://github.com/Snailclimb/JavaGuide",description:"",language:"JavaScript",stars:157727,forks:46179,starup:31},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61320,forks:7209,starup:10},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:27383,forks:2218,starup:73},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:680,forks:139,starup:13},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:101385,forks:5580,starup:717},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:90530,forks:7891,starup:129},{title:`rohitg00 /

      awesome-claude-code-toolkit`,owner:"rohitg00",name:"awesome-claude-code-toolkit",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/awesome-claude-code-toolkit",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/awesome-claude-code-toolkit",description:"",language:"JavaScript",stars:2492,forks:884,starup:11}],"JavaScript-weekly":[{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38919,forks:3173,starup:597},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:86510,forks:9290,starup:4671},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1192,forks:220,starup:221},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:10166,forks:1227,starup:1052},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98748,forks:32550,starup:79},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:58475,forks:5992,starup:1189},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:96332,forks:15768,starup:238},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:101385,forks:5580,starup:5134},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:90530,forks:7891,starup:983},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:12333,forks:1344,starup:44},{title:`DavidHDev /

      react-bits`,owner:"DavidHDev",name:"react-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/react-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/react-bits",description:"",language:"JavaScript",stars:45375,forks:2167,starup:557},{title:`Snailclimb /

      JavaGuide`,owner:"Snailclimb",name:"JavaGuide",avatar:"https://avatars.githubusercontent.com/u/29880145?s=40&v=4",path:"/Snailclimb/JavaGuide",ourl:"https://github.com/Snailclimb",url:"https://github.com/Snailclimb/JavaGuide",description:"",language:"JavaScript",stars:157727,forks:46179,starup:223},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90109,forks:8235,starup:301},{title:`airbnb /

      javascript`,owner:"airbnb",name:"javascript",avatar:"https://avatars.githubusercontent.com/u/45469?s=40&v=4",path:"/airbnb/javascript",ourl:"https://github.com/airbnb",url:"https://github.com/airbnb/javascript",description:"",language:"JavaScript",stars:148130,forks:26612,starup:72},{title:`trekhleb /

      javascript-algorithms`,owner:"trekhleb",name:"javascript-algorithms",avatar:"https://avatars.githubusercontent.com/u/3000285?s=40&v=4",path:"/trekhleb/javascript-algorithms",ourl:"https://github.com/trekhleb",url:"https://github.com/trekhleb/javascript-algorithms",description:"",language:"JavaScript",stars:196446,forks:31040,starup:109}],"JavaScript-monthly":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:58508,forks:3571,starup:12910},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:680,forks:139,starup:237},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5647,forks:2460,starup:1340},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38919,forks:3173,starup:875},{title:`DavidHDev /

      react-bits`,owner:"DavidHDev",name:"react-bits",avatar:"https://avatars.githubusercontent.com/u/48634587?s=40&v=4",path:"/DavidHDev/react-bits",ourl:"https://github.com/DavidHDev",url:"https://github.com/DavidHDev/react-bits",description:"",language:"JavaScript",stars:45375,forks:2167,starup:2214},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:7142,forks:867,starup:1018},{title:`chuspeeism /

      dashi-ppt-skill`,owner:"chuspeeism",name:"dashi-ppt-skill",avatar:"https://avatars.githubusercontent.com/u/22310591?s=40&v=4",path:"/chuspeeism/dashi-ppt-skill",ourl:"https://github.com/chuspeeism",url:"https://github.com/chuspeeism/dashi-ppt-skill",description:"",language:"JavaScript",stars:5062,forks:480,starup:2629},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:5397,forks:755,starup:940},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:5652,forks:302,starup:4481},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1192,forks:220,starup:749},{title:`saadeghi /

      daisyui`,owner:"saadeghi",name:"daisyui",avatar:"https://avatars.githubusercontent.com/u/7342023?s=40&v=4",path:"/saadeghi/daisyui",ourl:"https://github.com/saadeghi",url:"https://github.com/saadeghi/daisyui",description:"",language:"JavaScript",stars:42050,forks:1671,starup:516},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61320,forks:7209,starup:124},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12792,forks:3621,starup:183},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11296,forks:1790,starup:873},{title:`kunchenguid /

      lavish-axi`,owner:"kunchenguid",name:"lavish-axi",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/lavish-axi",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/lavish-axi",description:"",language:"JavaScript",stars:2737,forks:244,starup:917},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90109,forks:8235,starup:1221},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:1321,forks:116,starup:672},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2332,forks:628,starup:1024},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10953,forks:26713,starup:311},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:6485,forks:1427,starup:560},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:13951,forks:1115,starup:490},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:2954,forks:272,starup:648}],"TypeScript-daily":[{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:43611,forks:3041,starup:1215},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:77579,forks:14291,starup:573},{title:`ZuodaoTech /

      everyone-can-use-english`,owner:"ZuodaoTech",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/ZuodaoTech/everyone-can-use-english",ourl:"https://github.com/ZuodaoTech",url:"https://github.com/ZuodaoTech/everyone-can-use-english",description:"",language:"TypeScript",stars:36010,forks:5025,starup:53},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:386059,forks:81140,starup:203},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:88452,forks:10987,starup:952},{title:`code-yeongyu /

      oh-my-openagent`,owner:"code-yeongyu",name:"oh-my-openagent",avatar:"https://avatars.githubusercontent.com/u/11153873?s=40&v=4",path:"/code-yeongyu/oh-my-openagent",ourl:"https://github.com/code-yeongyu",url:"https://github.com/code-yeongyu/oh-my-openagent",description:"",language:"TypeScript",stars:67757,forks:5540,starup:79},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:2636,forks:211,starup:25},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:82511,forks:8152,starup:228},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:54807,forks:8501,starup:71},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",ourl:"https://github.com/coder",url:"https://github.com/coder/code-server",description:"",language:"TypeScript",stars:78775,forks:6795,starup:56},{title:`yamadashy /

      repomix`,owner:"yamadashy",name:"repomix",avatar:"https://avatars.githubusercontent.com/u/5019072?s=40&v=4",path:"/yamadashy/repomix",ourl:"https://github.com/yamadashy",url:"https://github.com/yamadashy/repomix",description:"",language:"TypeScript",stars:27796,forks:1485,starup:28},{title:`web-infra-dev /

      midscene`,owner:"web-infra-dev",name:"midscene",avatar:"https://avatars.githubusercontent.com/u/11739753?s=40&v=4",path:"/web-infra-dev/midscene",ourl:"https://github.com/web-infra-dev",url:"https://github.com/web-infra-dev/midscene",description:"",language:"TypeScript",stars:14553,forks:1118,starup:10},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:166315,forks:9345,starup:646},{title:`danielmiessler /

      LifeOS`,owner:"danielmiessler",name:"LifeOS",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/LifeOS",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/LifeOS",description:"",language:"TypeScript",stars:18388,forks:2395,starup:144},{title:`holaboss-ai /

      holaOS`,owner:"holaboss-ai",name:"holaOS",avatar:"https://avatars.githubusercontent.com/u/180554771?s=40&v=4",path:"/holaboss-ai/holaOS",ourl:"https://github.com/holaboss-ai",url:"https://github.com/holaboss-ai/holaOS",description:"",language:"TypeScript",stars:5979,forks:484,starup:248},{title:`antvis /

      Infographic`,owner:"antvis",name:"Infographic",avatar:"https://avatars.githubusercontent.com/u/25787943?s=40&v=4",path:"/antvis/Infographic",ourl:"https://github.com/antvis",url:"https://github.com/antvis/Infographic",description:"",language:"TypeScript",stars:6236,forks:488,starup:82},{title:`lightningpixel /

      modly`,owner:"lightningpixel",name:"modly",avatar:"https://avatars.githubusercontent.com/u/63157773?s=40&v=4",path:"/lightningpixel/modly",ourl:"https://github.com/lightningpixel",url:"https://github.com/lightningpixel/modly",description:"",language:"TypeScript",stars:5041,forks:556,starup:75}],"TypeScript-weekly":[{title:`cloudflare /

      computer`,owner:"cloudflare",name:"computer",avatar:"https://avatars.githubusercontent.com/u/263346377?s=40&v=4",path:"/cloudflare/computer",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/computer",description:"",language:"TypeScript",stars:7749,forks:423,starup:6775},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:20440,forks:1846,starup:7017},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18378,forks:4187,starup:1650},{title:`danielmiessler /

      LifeOS`,owner:"danielmiessler",name:"LifeOS",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/LifeOS",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/LifeOS",description:"",language:"TypeScript",stars:18388,forks:2395,starup:1138},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:9020,forks:1047,starup:639},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:497,forks:232,starup:172},{title:`ant-design /

      ant-design`,owner:"ant-design",name:"ant-design",avatar:"https://avatars.githubusercontent.com/u/507615?s=40&v=4",path:"/ant-design/ant-design",ourl:"https://github.com/ant-design",url:"https://github.com/ant-design/ant-design",description:"",language:"TypeScript",stars:99048,forks:54689,starup:128},{title:`coder /

      code-server`,owner:"coder",name:"code-server",avatar:"https://avatars.githubusercontent.com/u/45609798?s=40&v=4",path:"/coder/code-server",ourl:"https://github.com/coder",url:"https://github.com/coder/code-server",description:"",language:"TypeScript",stars:78775,forks:6795,starup:159},{title:`EKKOLearnAI /

      hermes-studio`,owner:"EKKOLearnAI",name:"hermes-studio",avatar:"https://avatars.githubusercontent.com/u/152005280?s=40&v=4",path:"/EKKOLearnAI/hermes-studio",ourl:"https://github.com/EKKOLearnAI",url:"https://github.com/EKKOLearnAI/hermes-studio",description:"",language:"TypeScript",stars:10143,forks:1241,starup:321},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:24170,forks:2297,starup:2133},{title:`open-mercato /

      open-mercato`,owner:"open-mercato",name:"open-mercato",avatar:"https://avatars.githubusercontent.com/u/211899?s=40&v=4",path:"/open-mercato/open-mercato",ourl:"https://github.com/open-mercato",url:"https://github.com/open-mercato/open-mercato",description:"",language:"TypeScript",stars:1622,forks:359,starup:71},{title:`KunAgent /

      Kun`,owner:"KunAgent",name:"Kun",avatar:"https://avatars.githubusercontent.com/u/42194301?s=40&v=4",path:"/KunAgent/Kun",ourl:"https://github.com/KunAgent",url:"https://github.com/KunAgent/Kun",description:"",language:"TypeScript",stars:6086,forks:575,starup:417},{title:`FlowiseAI /

      Flowise`,owner:"FlowiseAI",name:"Flowise",avatar:"https://avatars.githubusercontent.com/u/26460777?s=40&v=4",path:"/FlowiseAI/Flowise",ourl:"https://github.com/FlowiseAI",url:"https://github.com/FlowiseAI/Flowise",description:"",language:"TypeScript",stars:55347,forks:24883,starup:213}],"TypeScript-monthly":[{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:46404,forks:6257,starup:30582},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:81176,forks:12136,starup:19348},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:20440,forks:1846,starup:11445},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18378,forks:4187,starup:4753},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:43611,forks:3041,starup:26440},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:11438,forks:1319,starup:7123},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:88452,forks:10987,starup:18096},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:4083,forks:569,starup:2913},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:6439,forks:1024,starup:3345},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:21921,forks:2164,starup:5293},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:7173,forks:313,starup:3548},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:50164,forks:6216,starup:9679},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:47791,forks:4726,starup:6375},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:82511,forks:8152,starup:20621},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5410,forks:357,starup:1647},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:24170,forks:2297,starup:6774},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:26945,forks:2845,starup:1148},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:6676,forks:409,starup:1517},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:50348,forks:4769,starup:2102},{title:`modelcontextprotocol /

      typescript-sdk`,owner:"modelcontextprotocol",name:"typescript-sdk",avatar:"https://avatars.githubusercontent.com/u/432536?s=40&v=4",path:"/modelcontextprotocol/typescript-sdk",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/typescript-sdk",description:"",language:"TypeScript",stars:13150,forks:2072,starup:333},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:196495,forks:25253,starup:12431},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:21334,forks:2733,starup:4004}],"Vue-daily":[{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21632,forks:1476,starup:14},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2260,forks:507,starup:16},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33123,forks:8923,starup:16},{title:`chenjigang4167 /

      testhub_platform`,owner:"chenjigang4167",name:"testhub_platform",avatar:"https://avatars.githubusercontent.com/u/39072129?s=40&v=4",path:"/chenjigang4167/testhub_platform",ourl:"https://github.com/chenjigang4167",url:"https://github.com/chenjigang4167/testhub_platform",description:"",language:"Vue",stars:736,forks:328,starup:3},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3505,forks:525,starup:3},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6709,forks:2490,starup:0},{title:`BansheeTech /

      HomeDockOS`,owner:"BansheeTech",name:"HomeDockOS",avatar:"https://avatars.githubusercontent.com/u/1565956?s=40&v=4",path:"/BansheeTech/HomeDockOS",ourl:"https://github.com/BansheeTech",url:"https://github.com/BansheeTech/HomeDockOS",description:"",language:"Vue",stars:894,forks:53,starup:6},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3125,forks:1443,starup:2},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3961,forks:116,starup:15},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40208,forks:5325,starup:24},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21561,forks:2330,starup:3},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9227,forks:2091,starup:2},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1755,forks:457,starup:4},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26166,forks:1923,starup:9},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5727,forks:1083,starup:9},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11700,forks:1876,starup:3},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2633,forks:409,starup:0},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54071,forks:14418,starup:0},{title:`BewlyBewly /

      BewlyBewly`,owner:"BewlyBewly",name:"BewlyBewly",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/BewlyBewly/BewlyBewly",ourl:"https://github.com/BewlyBewly",url:"https://github.com/BewlyBewly/BewlyBewly",description:"",language:"Vue",stars:8844,forks:397,starup:0}],"Vue-weekly":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1867,forks:107,starup:403},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3318,forks:1331,starup:191},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21632,forks:1476,starup:55},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33123,forks:8923,starup:94},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3961,forks:116,starup:82},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40208,forks:5325,starup:120},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7564,forks:1024,starup:100},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1755,forks:457,starup:41},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:427,forks:57695,starup:2},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21621,forks:3898,starup:21},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28746,forks:3285,starup:40},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5727,forks:1083,starup:58},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6720,forks:543,starup:21},{title:`WGDashboard /

      WGDashboard`,owner:"WGDashboard",name:"WGDashboard",avatar:"https://avatars.githubusercontent.com/u/25237201?s=40&v=4",path:"/WGDashboard/WGDashboard",ourl:"https://github.com/WGDashboard",url:"https://github.com/WGDashboard/WGDashboard",description:"",language:"Vue",stars:3694,forks:442,starup:17},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3125,forks:1443,starup:20},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33142,forks:4679,starup:48},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90219,forks:30364,starup:16}],"Vue-monthly":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22528,forks:1086,starup:790},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1867,forks:107,starup:538},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26166,forks:1923,starup:426},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2837,forks:360,starup:557},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3318,forks:1331,starup:380},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1755,forks:457,starup:173},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3961,forks:116,starup:296},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21632,forks:1476,starup:302},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28746,forks:3285,starup:194},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:427,forks:57695,starup:14},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3006,forks:112,starup:146},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2318,forks:149,starup:453},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:3011,forks:803,starup:180},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33123,forks:8923,starup:298},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3303,forks:910,starup:80},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6720,forks:543,starup:103},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3966,forks:814,starup:237},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2260,forks:507,starup:156},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9227,forks:2091,starup:211},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2633,forks:409,starup:56},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40208,forks:5325,starup:505},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90219,forks:30364,starup:99},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:749,forks:205,starup:10}]},gt=C({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=q(),l=Y(()=>v(U[`${s.value}-${o.value}`]));A("color",u),A("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=O,m=R,g=I,d=M,t=z,e=W,w=H,y=N,j=Z;return h(),x("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(P,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(y,{key:2})):(h(),k(j,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
