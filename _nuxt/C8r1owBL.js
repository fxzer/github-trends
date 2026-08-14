import M from"./D6FgNP2D.js";import B from"./GpC5v1w9.js";import F from"./BpurrccN.js";import R from"./BGOr_3yE.js";import z from"./DA1s0BfZ.js";import W from"./UGOGd7DX.js";import H from"./DqqUvdBq.js";import{d as C}from"./KQwPfV-1.js";import{s as I,a as A,b as O,u as D,i as G,c as E}from"./CMyD9Wa5.js";import{i as x,p as K,a5 as V,D as h,f as _,w as L,S as q,h as b,a6 as S,T as P,q as T,U as c,d as f,a as Q,H as J}from"./D_DaPVpX.js";import"./DFl09hZz.js";import"./p2-M2djV.js";import"./BChEmnVH.js";import"./_zy0Kr2_.js";import"./CbivAecP.js";const $=x({__name:"Chart",setup(k){const r=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(I),s=A("趋势仓库总指标排行榜",o);function u(i){const a=C(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=O(s,D);V(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:L({height:v})},null,4))}}),Y=Object.assign($,{__name:"TrendChart"}),N=x({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=q(r),u=A("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=O(u,D);function v(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:G(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}V(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:L({height:i})},null,4))}}),Z=Object.assign(N,{__name:"TrendStarupChart"}),U={"JavaScript-daily":[{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:10210,forks:522,starup:153},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:38903,forks:5249,starup:115},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:240115,forks:36441,starup:247},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:1967,forks:492,starup:118},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:6562,forks:631,starup:52},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:63814,forks:12581,starup:108},{title:`bmad-code-org /

      BMAD-METHOD`,owner:"bmad-code-org",name:"BMAD-METHOD",avatar:"https://avatars.githubusercontent.com/u/20280?s=40&v=4",path:"/bmad-code-org/BMAD-METHOD",ourl:"https://github.com/bmad-code-org",url:"https://github.com/bmad-code-org/BMAD-METHOD",description:"",language:"JavaScript",stars:51904,forks:5936,starup:50},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:5773,forks:308,starup:71},{title:`xuanyustudio /

      LocalMiniDrama`,owner:"xuanyustudio",name:"LocalMiniDrama",avatar:"https://avatars.githubusercontent.com/u/208556008?s=40&v=4",path:"/xuanyustudio/LocalMiniDrama",ourl:"https://github.com/xuanyustudio",url:"https://github.com/xuanyustudio/LocalMiniDrama",description:"",language:"JavaScript",stars:1281,forks:329,starup:19},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:27520,forks:2233,starup:65},{title:`dataease /

      SQLBot`,owner:"dataease",name:"SQLBot",avatar:"https://avatars.githubusercontent.com/u/106045316?s=40&v=4",path:"/dataease/SQLBot",ourl:"https://github.com/dataease",url:"https://github.com/dataease/SQLBot",description:"",language:"JavaScript",stars:6607,forks:829,starup:5},{title:`electerm /

      electerm`,owner:"electerm",name:"electerm",avatar:"https://avatars.githubusercontent.com/u/1641949?s=40&v=4",path:"/electerm/electerm",ourl:"https://github.com/electerm",url:"https://github.com/electerm/electerm",description:"",language:"JavaScript",stars:14798,forks:1196,starup:15},{title:`sveltejs /

      kit`,owner:"sveltejs",name:"kit",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/kit",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/kit",description:"",language:"JavaScript",stars:20739,forks:2304,starup:5},{title:`atlassian /

      atlassian-mcp-server`,owner:"atlassian",name:"atlassian-mcp-server",avatar:"https://avatars.githubusercontent.com/u/218678431?s=40&v=4",path:"/atlassian/atlassian-mcp-server",ourl:"https://github.com/atlassian",url:"https://github.com/atlassian/atlassian-mcp-server",description:"",language:"JavaScript",stars:962,forks:121,starup:6},{title:`WebKit /

      WebKit`,owner:"WebKit",name:"WebKit",avatar:"https://avatars.githubusercontent.com/u/995975?s=40&v=4",path:"/WebKit/WebKit",ourl:"https://github.com/WebKit",url:"https://github.com/WebKit/WebKit",description:"",language:"JavaScript",stars:10068,forks:2111,starup:5},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:102646,forks:5650,starup:672}],"JavaScript-weekly":[{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:87204,forks:9355,starup:4562},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:38903,forks:5249,starup:365},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:39088,forks:3187,starup:693},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:90740,forks:7922,starup:890},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1245,forks:226,starup:243},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:102646,forks:5650,starup:4902},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:12355,forks:1347,starup:58},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:58613,forks:6002,starup:912},{title:`microsoft /

      Web-Dev-For-Beginners`,owner:"microsoft",name:"Web-Dev-For-Beginners",avatar:"https://avatars.githubusercontent.com/u/1450004?s=40&v=4",path:"/microsoft/Web-Dev-For-Beginners",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/Web-Dev-For-Beginners",description:"",language:"JavaScript",stars:96366,forks:15773,starup:194},{title:`airbnb /

      javascript`,owner:"airbnb",name:"javascript",avatar:"https://avatars.githubusercontent.com/u/45469?s=40&v=4",path:"/airbnb/javascript",ourl:"https://github.com/airbnb",url:"https://github.com/airbnb/javascript",description:"",language:"JavaScript",stars:148152,forks:26614,starup:73},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98765,forks:32563,starup:79},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:10230,forks:1232,starup:565},{title:`vrgamegirl19 /

      comfyui-vrgamedevgirl`,owner:"vrgamegirl19",name:"comfyui-vrgamedevgirl",avatar:"https://avatars.githubusercontent.com/u/133295930?s=40&v=4",path:"/vrgamegirl19/comfyui-vrgamedevgirl",ourl:"https://github.com/vrgamegirl19",url:"https://github.com/vrgamegirl19/comfyui-vrgamedevgirl",description:"",language:"JavaScript",stars:650,forks:91,starup:40},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:1967,forks:492,starup:163},{title:`webbrain-one /

      webbrain`,owner:"webbrain-one",name:"webbrain",avatar:"https://avatars.githubusercontent.com/u/19166?s=40&v=4",path:"/webbrain-one/webbrain",ourl:"https://github.com/webbrain-one",url:"https://github.com/webbrain-one/webbrain",description:"",language:"JavaScript",stars:751,forks:91,starup:103}],"JavaScript-monthly":[{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:59091,forks:3616,starup:12912},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1245,forks:226,starup:783},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:697,forks:144,starup:242},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:5684,forks:2476,starup:1350},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:39088,forks:3187,starup:1016},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:38903,forks:5249,starup:520},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:7182,forks:875,starup:1084},{title:`laoma2053 /

      awesome-zhuiju-free`,owner:"laoma2053",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma2053/awesome-zhuiju-free",ourl:"https://github.com/laoma2053",url:"https://github.com/laoma2053/awesome-zhuiju-free",description:"",language:"JavaScript",stars:5773,forks:308,starup:4078},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2357,forks:633,starup:1042},{title:`ntfargo /

      CSSFontFace-Exploit`,owner:"ntfargo",name:"CSSFontFace-Exploit",avatar:"https://avatars.githubusercontent.com/u/220887183?s=40&v=4",path:"/ntfargo/CSSFontFace-Exploit",ourl:"https://github.com/ntfargo",url:"https://github.com/ntfargo/CSSFontFace-Exploit",description:"",language:"JavaScript",stars:294,forks:79,starup:192},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11324,forks:1788,starup:890},{title:`saadeghi /

      daisyui`,owner:"saadeghi",name:"daisyui",avatar:"https://avatars.githubusercontent.com/u/7342023?s=40&v=4",path:"/saadeghi/daisyui",ourl:"https://github.com/saadeghi",url:"https://github.com/saadeghi/daisyui",description:"",language:"JavaScript",stars:42080,forks:1673,starup:509},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:12799,forks:3620,starup:187},{title:`lodash /

      lodash`,owner:"lodash",name:"lodash",avatar:"https://avatars.githubusercontent.com/u/4303?s=40&v=4",path:"/lodash/lodash",ourl:"https://github.com/lodash",url:"https://github.com/lodash/lodash",description:"",language:"JavaScript",stars:61324,forks:7212,starup:164},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:5464,forks:763,starup:968},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:6511,forks:1437,starup:557},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:10967,forks:26861,starup:314},{title:`pdone /

      lx-music-source`,owner:"pdone",name:"lx-music-source",avatar:"https://avatars.githubusercontent.com/u/34151215?s=40&v=4",path:"/pdone/lx-music-source",ourl:"https://github.com/pdone",url:"https://github.com/pdone/lx-music-source",description:"",language:"JavaScript",stars:7954,forks:656,starup:735},{title:`conorbronsdon /

      avoid-ai-writing`,owner:"conorbronsdon",name:"avoid-ai-writing",avatar:"https://avatars.githubusercontent.com/u/120674402?s=40&v=4",path:"/conorbronsdon/avoid-ai-writing",ourl:"https://github.com/conorbronsdon",url:"https://github.com/conorbronsdon/avoid-ai-writing",description:"",language:"JavaScript",stars:3e3,forks:276,starup:665},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:13970,forks:1116,starup:492},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:1375,forks:123,starup:687}],"TypeScript-daily":[{title:`holaboss-ai /

      holaOS`,owner:"holaboss-ai",name:"holaOS",avatar:"https://avatars.githubusercontent.com/u/180554771?s=40&v=4",path:"/holaboss-ai/holaOS",ourl:"https://github.com/holaboss-ai",url:"https://github.com/holaboss-ai/holaOS",description:"",language:"TypeScript",stars:7061,forks:628,starup:769},{title:`lightningpixel /

      modly`,owner:"lightningpixel",name:"modly",avatar:"https://avatars.githubusercontent.com/u/63157773?s=40&v=4",path:"/lightningpixel/modly",ourl:"https://github.com/lightningpixel",url:"https://github.com/lightningpixel/modly",description:"",language:"TypeScript",stars:5822,forks:597,starup:580},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:2757,forks:222,starup:69},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:82982,forks:8222,starup:238},{title:`OpenHands /

      OpenHands`,owner:"OpenHands",name:"OpenHands",avatar:"https://avatars.githubusercontent.com/u/175740463?s=40&v=4",path:"/OpenHands/OpenHands",ourl:"https://github.com/OpenHands",url:"https://github.com/OpenHands/OpenHands",description:"",language:"TypeScript",stars:84027,forks:10892,starup:120},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:197446,forks:25403,starup:502},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:90335,forks:11206,starup:910},{title:`Jakubantalik /

      Libraries`,owner:"Jakubantalik",name:"Libraries",avatar:"https://avatars.githubusercontent.com/u/14873517?s=40&v=4",path:"/Jakubantalik/Libraries",ourl:"https://github.com/Jakubantalik",url:"https://github.com/Jakubantalik/Libraries",description:"",language:"TypeScript",stars:1933,forks:114,starup:54},{title:`ZuodaoTech /

      everyone-can-use-english`,owner:"ZuodaoTech",name:"everyone-can-use-english",avatar:"https://avatars.githubusercontent.com/u/22209056?s=40&v=4",path:"/ZuodaoTech/everyone-can-use-english",ourl:"https://github.com/ZuodaoTech",url:"https://github.com/ZuodaoTech/everyone-can-use-english",description:"",language:"TypeScript",stars:36431,forks:5048,starup:41},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:45494,forks:3170,starup:792},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:11887,forks:1363,starup:195},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:24776,forks:2369,starup:302},{title:`portainer /

      portainer`,owner:"portainer",name:"portainer",avatar:"https://avatars.githubusercontent.com/u/5485061?s=40&v=4",path:"/portainer/portainer",ourl:"https://github.com/portainer",url:"https://github.com/portainer/portainer",description:"",language:"TypeScript",stars:38243,forks:2877,starup:16},{title:`documenso /

      documenso`,owner:"documenso",name:"documenso",avatar:"https://avatars.githubusercontent.com/u/13398220?s=40&v=4",path:"/documenso/documenso",ourl:"https://github.com/documenso",url:"https://github.com/documenso/documenso",description:"",language:"TypeScript",stars:14438,forks:3049,starup:40},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:7533,forks:452,starup:783},{title:`upscayl /

      upscayl`,owner:"upscayl",name:"upscayl",avatar:"https://avatars.githubusercontent.com/u/25067102?s=40&v=4",path:"/upscayl/upscayl",ourl:"https://github.com/upscayl",url:"https://github.com/upscayl/upscayl",description:"",language:"TypeScript",stars:48252,forks:2420,starup:180},{title:`dubinc /

      dub`,owner:"dubinc",name:"dub",avatar:"https://avatars.githubusercontent.com/u/28986134?s=40&v=4",path:"/dubinc/dub",ourl:"https://github.com/dubinc",url:"https://github.com/dubinc/dub",description:"",language:"TypeScript",stars:24361,forks:3221,starup:28},{title:`pacifio /

      atlas`,owner:"pacifio",name:"atlas",avatar:"https://avatars.githubusercontent.com/u/32670628?s=40&v=4",path:"/pacifio/atlas",ourl:"https://github.com/pacifio",url:"https://github.com/pacifio/atlas",description:"",language:"TypeScript",stars:925,forks:177,starup:249}],"TypeScript-weekly":[{title:`PrimeIntellect-ai /

      prime-agent`,owner:"PrimeIntellect-ai",name:"prime-agent",avatar:"https://avatars.githubusercontent.com/u/46242684?s=40&v=4",path:"/PrimeIntellect-ai/prime-agent",ourl:"https://github.com/PrimeIntellect-ai",url:"https://github.com/PrimeIntellect-ai/prime-agent",description:"",language:"TypeScript",stars:15839,forks:1690,starup:12476},{title:`cloudflare /

      computer`,owner:"cloudflare",name:"computer",avatar:"https://avatars.githubusercontent.com/u/263346377?s=40&v=4",path:"/cloudflare/computer",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/computer",description:"",language:"TypeScript",stars:8086,forks:445,starup:3599},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:21631,forks:1978,starup:5388},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18705,forks:4318,starup:1665},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:78123,forks:14329,starup:2342},{title:`danielmiessler /

      LifeOS`,owner:"danielmiessler",name:"LifeOS",avatar:"https://avatars.githubusercontent.com/u/50654?s=40&v=4",path:"/danielmiessler/LifeOS",ourl:"https://github.com/danielmiessler",url:"https://github.com/danielmiessler/LifeOS",description:"",language:"TypeScript",stars:18494,forks:2410,starup:1305},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:24776,forks:2369,starup:2191},{title:`fastapi /

      full-stack-fastapi-template`,owner:"fastapi",name:"full-stack-fastapi-template",avatar:"https://avatars.githubusercontent.com/u/1326112?s=40&v=4",path:"/fastapi/full-stack-fastapi-template",ourl:"https://github.com/fastapi",url:"https://github.com/fastapi/full-stack-fastapi-template",description:"",language:"TypeScript",stars:44860,forks:8925,starup:227},{title:`KunAgent /

      Kun`,owner:"KunAgent",name:"Kun",avatar:"https://avatars.githubusercontent.com/u/42194301?s=40&v=4",path:"/KunAgent/Kun",ourl:"https://github.com/KunAgent",url:"https://github.com/KunAgent/Kun",description:"",language:"TypeScript",stars:6120,forks:580,starup:395},{title:`lightningpixel /

      modly`,owner:"lightningpixel",name:"modly",avatar:"https://avatars.githubusercontent.com/u/63157773?s=40&v=4",path:"/lightningpixel/modly",ourl:"https://github.com/lightningpixel",url:"https://github.com/lightningpixel/modly",description:"",language:"TypeScript",stars:5822,forks:597,starup:828},{title:`corsairdev /

      corsair`,owner:"corsairdev",name:"corsair",avatar:"https://avatars.githubusercontent.com/u/50637008?s=40&v=4",path:"/corsairdev/corsair",ourl:"https://github.com/corsairdev",url:"https://github.com/corsairdev/corsair",description:"",language:"TypeScript",stars:9884,forks:281,starup:2800},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:90335,forks:11206,starup:5195},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:9351,forks:1071,starup:681},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:167322,forks:9387,starup:4820}],"TypeScript-monthly":[{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:47799,forks:6472,starup:30875},{title:`koala73 /

      worldmonitor`,owner:"koala73",name:"worldmonitor",avatar:"https://avatars.githubusercontent.com/u/996596?s=40&v=4",path:"/koala73/worldmonitor",ourl:"https://github.com/koala73",url:"https://github.com/koala73/worldmonitor",description:"",language:"TypeScript",stars:81819,forks:12223,starup:20096},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:21631,forks:1978,starup:12445},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:18705,forks:4318,starup:4805},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:45494,forks:3170,starup:27243},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:90335,forks:11206,starup:19316},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:11887,forks:1363,starup:7456},{title:`agegr /

      pi-web`,owner:"agegr",name:"pi-web",avatar:"https://avatars.githubusercontent.com/u/12794925?s=40&v=4",path:"/agegr/pi-web",ourl:"https://github.com/agegr",url:"https://github.com/agegr/pi-web",description:"",language:"TypeScript",stars:4229,forks:603,starup:3016},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:6668,forks:1043,starup:3480},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:22168,forks:2190,starup:5413},{title:`opengeos /

      GeoLibre`,owner:"opengeos",name:"GeoLibre",avatar:"https://avatars.githubusercontent.com/u/5016453?s=40&v=4",path:"/opengeos/GeoLibre",ourl:"https://github.com/opengeos",url:"https://github.com/opengeos/GeoLibre",description:"",language:"TypeScript",stars:6005,forks:610,starup:4319},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:47895,forks:4745,starup:6352},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:50403,forks:6252,starup:9516},{title:`ibelick /

      ui-skills`,owner:"ibelick",name:"ui-skills",avatar:"https://avatars.githubusercontent.com/u/14288396?s=40&v=4",path:"/ibelick/ui-skills",ourl:"https://github.com/ibelick",url:"https://github.com/ibelick/ui-skills",description:"",language:"TypeScript",stars:7220,forks:319,starup:3574},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:24776,forks:2369,starup:7131},{title:`vercel-labs /

      deepsec`,owner:"vercel-labs",name:"deepsec",avatar:"https://avatars.githubusercontent.com/u/89679?s=40&v=4",path:"/vercel-labs/deepsec",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/deepsec",description:"",language:"TypeScript",stars:7533,forks:452,starup:1842},{title:`likec4 /

      likec4`,owner:"likec4",name:"likec4",avatar:"https://avatars.githubusercontent.com/u/824903?s=40&v=4",path:"/likec4/likec4",ourl:"https://github.com/likec4",url:"https://github.com/likec4/likec4",description:"",language:"TypeScript",stars:5424,forks:358,starup:1653},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/480123?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:27e3,forks:2858,starup:1152},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:50472,forks:4778,starup:2165},{title:`modelcontextprotocol /

      typescript-sdk`,owner:"modelcontextprotocol",name:"typescript-sdk",avatar:"https://avatars.githubusercontent.com/u/432536?s=40&v=4",path:"/modelcontextprotocol/typescript-sdk",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/typescript-sdk",description:"",language:"TypeScript",stars:13169,forks:2080,starup:347},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:5061,forks:1283,starup:1925}],"Vue-daily":[{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14469,forks:1776,starup:0},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3310,forks:910,starup:3},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3129,forks:1444,starup:5},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28759,forks:3286,starup:10},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33136,forks:8925,starup:12},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:3017,forks:805,starup:4},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:837,forks:101,starup:5},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21620,forks:3896,starup:4},{title:`bruhnn /

      BD2ModManager`,owner:"bruhnn",name:"BD2ModManager",avatar:"https://avatars.githubusercontent.com/u/71610574?s=40&v=4",path:"/bruhnn/BD2ModManager",ourl:"https://github.com/bruhnn",url:"https://github.com/bruhnn/BD2ModManager",description:"",language:"Vue",stars:345,forks:19,starup:3},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5737,forks:1085,starup:7},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9239,forks:2094,starup:4},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16406,forks:1332,starup:16},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1375,forks:66,starup:8}],"Vue-weekly":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1885,forks:111,starup:344},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3330,forks:1342,starup:132},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40225,forks:5331,starup:130},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2287,forks:517,starup:55},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21651,forks:1479,starup:59},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1761,forks:458,starup:36},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7566,forks:1023,starup:99},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5737,forks:1085,starup:62},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33136,forks:8925,starup:76},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:429,forks:58103,starup:1},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33146,forks:4678,starup:53},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3968,forks:117,starup:70},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3129,forks:1444,starup:17},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2637,forks:411,starup:12},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1375,forks:66,starup:28}],"Vue-monthly":[{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22565,forks:1092,starup:791},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26186,forks:1925,starup:413},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21651,forks:1479,starup:308},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2851,forks:362,starup:542},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3330,forks:1342,starup:377},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3968,forks:117,starup:289},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1761,forks:458,starup:166},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:429,forks:58103,starup:15},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1885,forks:111,starup:565},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28759,forks:3286,starup:198},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2325,forks:148,starup:440},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/25717354?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:3017,forks:805,starup:189},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6717,forks:544,starup:104},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33136,forks:8925,starup:300},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3310,forks:910,starup:77},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:9239,forks:2094,starup:213},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2287,forks:517,starup:129},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:249,forks:29,starup:9},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3017,forks:112,starup:151},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2637,forks:411,starup:56},{title:`cfw-guide /

      ios.cfw.guide`,owner:"cfw-guide",name:"ios.cfw.guide",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/cfw-guide/ios.cfw.guide",ourl:"https://github.com/cfw-guide",url:"https://github.com/cfw-guide/ios.cfw.guide",description:"",language:"Vue",stars:751,forks:207,starup:11},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90202,forks:30360,starup:99}]},mt=x({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:u}=E(),l=Q(()=>v(U[`${s.value}-${o.value}`]));J("color",u),J("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=M,g=B,m=F,d=R,t=z,e=W,w=H,y=Y,j=Z;return h(),_("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(P,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),f(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),f(w,{key:1,"has-starup":""})):c(r)==="chart"?(h(),f(y,{key:2})):(h(),f(j,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
