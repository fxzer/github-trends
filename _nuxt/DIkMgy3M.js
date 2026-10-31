import P from"./DmBaDw7f.js";import D from"./2CdBD1SJ.js";import R from"./DPK1x25y.js";import L from"./CNfbgGxe.js";import F from"./B5QCM8On.js";import G from"./BnP3iO4j.js";import B from"./BBRtWVc0.js";import{d as _}from"./KQwPfV-1.js";import{s as q,a as V,b as A,u as J,i as E,c as W}from"./DCE5-s-v.js";import{i as x,p as I,a5 as M,D as l,f as C,w as O,S as Y,h as v,a6 as S,T as K,q as T,U as h,d as k,a as H,H as z}from"./1Vtemi1Q.js";import"./Dw1DHUwG.js";import"./p2-M2djV.js";import"./DOahwN7Y.js";import"./BPdsotUU.js";import"./BFo0mG_4.js";const $=x({__name:"Chart",setup(f){const r=I("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(q),s=V("趋势仓库总指标排行榜",o);function i(u){const a=_(u);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:c}=A(s,J);M(r,()=>{i(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(u,a)=>(l(),C("div",{ref_key:"chartRef",ref:c,style:O({height:b})},null,4))}}),U=Object.assign($,{__name:"TrendChart"}),Z=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=Y(r),i=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:c}=A(i,J);function b(a){const n=_(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:E(m[e%m.length])}));i.value.series[0].data=d,i.value.yAxis.data=g}M(o,()=>{b(o.value)},{deep:!0,immediate:!0});const u=`${100+o.value.length*40}px`;return(a,n)=>(l(),C("div",{ref_key:"chartRef",ref:c,style:O({height:u})},null,4))}}),N=Object.assign(Z,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`Orkas-AI /

      Orkas`,owner:"Orkas-AI",name:"Orkas",avatar:"https://avatars.githubusercontent.com/u/3339127?s=40&v=4",path:"/Orkas-AI/Orkas",ourl:"https://github.com/Orkas-AI",url:"https://github.com/Orkas-AI/Orkas",description:"",language:"JavaScript",stars:6042,forks:365,starup:1118},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:181433,forks:9980,starup:621},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:1094,forks:222,starup:9},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:112180,forks:11746,starup:224},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:106905,forks:7234,starup:700},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:117298,forks:36842,starup:61},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/225811079?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:15189,forks:22977,starup:60},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:18248,forks:2401,starup:631},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/845989?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:61779,forks:12055,starup:373},{title:`vernesong /

      OpenClash`,owner:"vernesong",name:"OpenClash",avatar:"https://avatars.githubusercontent.com/u/42875168?s=40&v=4",path:"/vernesong/OpenClash",ourl:"https://github.com/vernesong",url:"https://github.com/vernesong/OpenClash",description:"",language:"JavaScript",stars:28023,forks:4059,starup:21}],"JavaScript-weekly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:55098,forks:3590,starup:12838},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:106905,forks:7234,starup:4712},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:293913,forks:43505,starup:6506},{title:`YuJunZhiXue /

      dsh-purge`,owner:"YuJunZhiXue",name:"dsh-purge",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/YuJunZhiXue/dsh-purge",ourl:"https://github.com/YuJunZhiXue",url:"https://github.com/YuJunZhiXue/dsh-purge",description:"",language:"JavaScript",stars:14522,forks:3356,starup:6665},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:36922,forks:2633,starup:9480},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:20986,forks:1174,starup:1867},{title:`zarazhangrui /

      frontend-slides`,owner:"zarazhangrui",name:"frontend-slides",avatar:"https://avatars.githubusercontent.com/u/153693696?s=40&v=4",path:"/zarazhangrui/frontend-slides",ourl:"https://github.com/zarazhangrui",url:"https://github.com/zarazhangrui/frontend-slides",description:"",language:"JavaScript",stars:31648,forks:2426,starup:476},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:8224,forks:995,starup:158},{title:`OpenWhispr /

      openwhispr`,owner:"OpenWhispr",name:"openwhispr",avatar:"https://avatars.githubusercontent.com/u/11309189?s=40&v=4",path:"/OpenWhispr/openwhispr",ourl:"https://github.com/OpenWhispr",url:"https://github.com/OpenWhispr/openwhispr",description:"",language:"JavaScript",stars:10450,forks:1355,starup:563},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:57660,forks:8492,starup:1330},{title:`ulsklyc /

      yuvomi`,owner:"ulsklyc",name:"yuvomi",avatar:"https://avatars.githubusercontent.com/u/108589275?s=40&v=4",path:"/ulsklyc/yuvomi",ourl:"https://github.com/ulsklyc",url:"https://github.com/ulsklyc/yuvomi",description:"",language:"JavaScript",stars:2170,forks:202,starup:415}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:55098,forks:3590,starup:30721},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:106905,forks:7234,starup:15496},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:293913,forks:43505,starup:25494},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:112180,forks:11746,starup:12596},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:18248,forks:2401,starup:16258},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:36922,forks:2633,starup:15970},{title:`withmarbleapp /

      os-taxonomy`,owner:"withmarbleapp",name:"os-taxonomy",avatar:"https://avatars.githubusercontent.com/u/2501329?s=40&v=4",path:"/withmarbleapp/os-taxonomy",ourl:"https://github.com/withmarbleapp",url:"https://github.com/withmarbleapp/os-taxonomy",description:"",language:"JavaScript",stars:7481,forks:1212,starup:2947},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:57660,forks:8492,starup:5825},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:117298,forks:36842,starup:1513},{title:`algorithm-visualizer /

      algorithm-visualizer`,owner:"algorithm-visualizer",name:"algorithm-visualizer",avatar:"https://avatars.githubusercontent.com/u/1618732?s=40&v=4",path:"/algorithm-visualizer/algorithm-visualizer",ourl:"https://github.com/algorithm-visualizer",url:"https://github.com/algorithm-visualizer/algorithm-visualizer",description:"",language:"JavaScript",stars:49353,forks:7648,starup:538},{title:`androoAGI /

      starnet`,owner:"androoAGI",name:"starnet",avatar:"https://avatars.githubusercontent.com/u/224686490?s=40&v=4",path:"/androoAGI/starnet",ourl:"https://github.com/androoAGI",url:"https://github.com/androoAGI/starnet",description:"",language:"JavaScript",stars:1670,forks:344,starup:933},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:181433,forks:9980,starup:34045},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:88505,forks:7468,starup:709},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:12493,forks:4366,starup:951}],"TypeScript-daily":[{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:107590,forks:9450,starup:1723},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:34919,forks:8756,starup:1148},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:12223,forks:2401,starup:1093},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:9457,forks:1313,starup:1304},{title:`THU-MAIC /

      OpenMAIC`,owner:"THU-MAIC",name:"OpenMAIC",avatar:"https://avatars.githubusercontent.com/u/18752201?s=40&v=4",path:"/THU-MAIC/OpenMAIC",ourl:"https://github.com/THU-MAIC",url:"https://github.com/THU-MAIC/OpenMAIC",description:"",language:"TypeScript",stars:42127,forks:6511,starup:115},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:9111,forks:1140,starup:610},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:45124,forks:6148,starup:641},{title:`a2ui-project /

      a2ui`,owner:"a2ui-project",name:"a2ui",avatar:"https://avatars.githubusercontent.com/u/8867023?s=40&v=4",path:"/a2ui-project/a2ui",ourl:"https://github.com/a2ui-project",url:"https://github.com/a2ui-project/a2ui",description:"",language:"TypeScript",stars:16914,forks:1356,starup:14},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:41459,forks:4211,starup:98},{title:`Yeachan-Heo /

      oh-my-claudecode`,owner:"Yeachan-Heo",name:"oh-my-claudecode",avatar:"https://avatars.githubusercontent.com/u/54757707?s=40&v=4",path:"/Yeachan-Heo/oh-my-claudecode",ourl:"https://github.com/Yeachan-Heo",url:"https://github.com/Yeachan-Heo/oh-my-claudecode",description:"",language:"TypeScript",stars:40457,forks:3619,starup:29},{title:`OpenCTI-Platform /

      opencti`,owner:"OpenCTI-Platform",name:"opencti",avatar:"https://avatars.githubusercontent.com/u/1334279?s=40&v=4",path:"/OpenCTI-Platform/opencti",ourl:"https://github.com/OpenCTI-Platform",url:"https://github.com/OpenCTI-Platform/opencti",description:"",language:"TypeScript",stars:10233,forks:1495,starup:10},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:111636,forks:7055,starup:792},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:109377,forks:18114,starup:311},{title:`CodeWithCJ /

      SparkyFitness`,owner:"CodeWithCJ",name:"SparkyFitness",avatar:"https://avatars.githubusercontent.com/u/151883488?s=40&v=4",path:"/CodeWithCJ/SparkyFitness",ourl:"https://github.com/CodeWithCJ",url:"https://github.com/CodeWithCJ/SparkyFitness",description:"",language:"TypeScript",stars:6629,forks:451,starup:54},{title:`melgarafael /

      DeskcommCRM`,owner:"melgarafael",name:"DeskcommCRM",avatar:"https://avatars.githubusercontent.com/u/119944436?s=40&v=4",path:"/melgarafael/DeskcommCRM",ourl:"https://github.com/melgarafael",url:"https://github.com/melgarafael/DeskcommCRM",description:"",language:"TypeScript",stars:5004,forks:1412,starup:44}],"TypeScript-weekly":[{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:34919,forks:8756,starup:2775},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:107590,forks:9450,starup:3518},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:76502,forks:6991,starup:5469},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:40336,forks:7669,starup:2615},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108650,forks:14898,starup:1204},{title:`CopilotKit /

      OpenBot`,owner:"CopilotKit",name:"OpenBot",avatar:"https://avatars.githubusercontent.com/u/1574202?s=40&v=4",path:"/CopilotKit/OpenBot",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenBot",description:"",language:"TypeScript",stars:9111,forks:1140,starup:1653},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:6897,forks:614,starup:1093},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:80403,forks:9423,starup:1723},{title:`JetBrains /

      thinkrail`,owner:"JetBrains",name:"thinkrail",avatar:"https://avatars.githubusercontent.com/u/177517595?s=40&v=4",path:"/JetBrains/thinkrail",ourl:"https://github.com/JetBrains",url:"https://github.com/JetBrains/thinkrail",description:"",language:"TypeScript",stars:6798,forks:373,starup:5495},{title:`makecindy /

      cindy`,owner:"makecindy",name:"cindy",avatar:"https://avatars.githubusercontent.com/u/125997726?s=40&v=4",path:"/makecindy/cindy",ourl:"https://github.com/makecindy",url:"https://github.com/makecindy/cindy",description:"",language:"TypeScript",stars:8821,forks:1049,starup:5366},{title:`nightly-labs /

      openbot`,owner:"nightly-labs",name:"openbot",avatar:"https://avatars.githubusercontent.com/u/38857779?s=40&v=4",path:"/nightly-labs/openbot",ourl:"https://github.com/nightly-labs",url:"https://github.com/nightly-labs/openbot",description:"",language:"TypeScript",stars:4369,forks:431,starup:3410},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:12223,forks:2401,starup:4382},{title:`microsoft /

      skill-recorder`,owner:"microsoft",name:"skill-recorder",avatar:"https://avatars.githubusercontent.com/u/23707134?s=40&v=4",path:"/microsoft/skill-recorder",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/skill-recorder",description:"",language:"TypeScript",stars:5598,forks:638,starup:1320},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:69395,forks:5690,starup:2507},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:45124,forks:6148,starup:4531},{title:`milind-soni /

      OpenMausBot`,owner:"milind-soni",name:"OpenMausBot",avatar:"https://avatars.githubusercontent.com/u/46266943?s=40&v=4",path:"/milind-soni/OpenMausBot",ourl:"https://github.com/milind-soni",url:"https://github.com/milind-soni/OpenMausBot",description:"",language:"TypeScript",stars:9457,forks:1313,starup:2863},{title:`langfuse /

      langfuse`,owner:"langfuse",name:"langfuse",avatar:"https://avatars.githubusercontent.com/u/2834609?s=40&v=4",path:"/langfuse/langfuse",ourl:"https://github.com/langfuse",url:"https://github.com/langfuse/langfuse",description:"",language:"TypeScript",stars:36802,forks:4132,starup:509},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:223547,forks:30021,starup:3106},{title:`google /

      brotli`,owner:"google",name:"brotli",avatar:"https://avatars.githubusercontent.com/u/203457?s=40&v=4",path:"/google/brotli",ourl:"https://github.com/google",url:"https://github.com/google/brotli",description:"",language:"TypeScript",stars:15070,forks:1395,starup:100}],"TypeScript-monthly":[{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:76502,forks:6991,starup:22149},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:34919,forks:8756,starup:8676},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:107590,forks:9450,starup:11124},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:33025,forks:2278,starup:8913},{title:`mvschwarz /

      openrig`,owner:"mvschwarz",name:"openrig",avatar:"https://avatars.githubusercontent.com/u/171890339?s=40&v=4",path:"/mvschwarz/openrig",ourl:"https://github.com/mvschwarz",url:"https://github.com/mvschwarz/openrig",description:"",language:"TypeScript",stars:8468,forks:694,starup:6245},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:14851,forks:1529,starup:5817},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:37414,forks:3231,starup:4626},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:114379,forks:16333,starup:3788},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:45124,forks:6148,starup:15157},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:6897,forks:614,starup:1502},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:80403,forks:9423,starup:7195},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:69395,forks:5690,starup:8223},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:109377,forks:18114,starup:15332},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:40336,forks:7669,starup:3863},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:111636,forks:7055,starup:30132},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:23020,forks:30513,starup:9035},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:12223,forks:2401,starup:6664},{title:`chthollyphile /

      folia-major`,owner:"chthollyphile",name:"folia-major",avatar:"https://avatars.githubusercontent.com/u/30263107?s=40&v=4",path:"/chthollyphile/folia-major",ourl:"https://github.com/chthollyphile",url:"https://github.com/chthollyphile/folia-major",description:"",language:"TypeScript",stars:10664,forks:1183,starup:7261},{title:`makecindy /

      cindy`,owner:"makecindy",name:"cindy",avatar:"https://avatars.githubusercontent.com/u/125997726?s=40&v=4",path:"/makecindy/cindy",ourl:"https://github.com/makecindy",url:"https://github.com/makecindy/cindy",description:"",language:"TypeScript",stars:8821,forks:1049,starup:5919},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:3505,forks:295,starup:3081},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"TypeScript",stars:3689,forks:339,starup:2987},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:14558,forks:953,starup:4621}],"Vue-daily":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10727,forks:1297,starup:64},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3986,forks:451,starup:20},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3593,forks:276,starup:122},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2984,forks:226,starup:34},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:474,forks:72942,starup:0},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26880,forks:1964,starup:6},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4520,forks:165,starup:5},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33503,forks:4664,starup:12},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3465,forks:993,starup:6},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3311,forks:126,starup:6},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22277,forks:1564,starup:20},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1554,forks:75,starup:4},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21693,forks:2342,starup:3},{title:`Hunlongyu /

      ZY-Player`,owner:"Hunlongyu",name:"ZY-Player",avatar:"https://avatars.githubusercontent.com/u/5760235?s=40&v=4",path:"/Hunlongyu/ZY-Player",ourl:"https://github.com/Hunlongyu",url:"https://github.com/Hunlongyu/ZY-Player",description:"",language:"Vue",stars:14524,forks:2229,starup:5},{title:`Rule-34 /

      App`,owner:"Rule-34",name:"App",avatar:"https://avatars.githubusercontent.com/u/37181533?s=40&v=4",path:"/Rule-34/App",ourl:"https://github.com/Rule-34",url:"https://github.com/Rule-34/App",description:"",language:"Vue",stars:389,forks:49,starup:1},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24843,forks:3035,starup:21},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2072,forks:530,starup:5},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3896,forks:1566,starup:5}],"Vue-weekly":[{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10727,forks:1297,starup:176},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22277,forks:1564,starup:164},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3593,forks:276,starup:228},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2984,forks:226,starup:136},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24843,forks:3035,starup:189},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:474,forks:72942,starup:5},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:41080,forks:5546,starup:141},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3465,forks:993,starup:21},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33503,forks:4664,starup:92},{title:`WGDashboard /

      WGDashboard`,owner:"WGDashboard",name:"WGDashboard",avatar:"https://avatars.githubusercontent.com/u/25237201?s=40&v=4",path:"/WGDashboard/WGDashboard",ourl:"https://github.com/WGDashboard",url:"https://github.com/WGDashboard/WGDashboard",description:"",language:"Vue",stars:3764,forks:483,starup:12},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90123,forks:30230,starup:15},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1839,forks:141,starup:48},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3896,forks:1566,starup:47},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3893,forks:586,starup:40},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3986,forks:451,starup:115},{title:`Virtual-Browser /

      VirtualBrowser`,owner:"Virtual-Browser",name:"VirtualBrowser",avatar:"https://avatars.githubusercontent.com/u/129611409?s=40&v=4",path:"/Virtual-Browser/VirtualBrowser",ourl:"https://github.com/Virtual-Browser",url:"https://github.com/Virtual-Browser/VirtualBrowser",description:"",language:"Vue",stars:3236,forks:520,starup:29},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9450,forks:1780,starup:35},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14448,forks:1784,starup:7},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6918,forks:577,starup:21},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:53997,forks:14369,starup:3}],"Vue-monthly":[{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:7037,forks:439,starup:703},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3593,forks:276,starup:734},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33503,forks:4664,starup:271},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24843,forks:3035,starup:638},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22277,forks:1564,starup:353},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1839,forks:141,starup:152},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:311,forks:366,starup:12},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26880,forks:1964,starup:343},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90123,forks:30230,starup:62},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2984,forks:226,starup:317},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17152,forks:1391,starup:373},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9450,forks:1780,starup:97},{title:`mainsail-crew /

      mainsail`,owner:"mainsail-crew",name:"mainsail",avatar:"https://avatars.githubusercontent.com/u/8167632?s=40&v=4",path:"/mainsail-crew/mainsail",ourl:"https://github.com/mainsail-crew",url:"https://github.com/mainsail-crew/mainsail",description:"",language:"Vue",stars:2239,forks:613,starup:22},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:53997,forks:14369,starup:22},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2811,forks:479,starup:73},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14448,forks:1784,starup:27},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1248,forks:255,starup:11},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3244,forks:5048,starup:7},{title:`dicebear /

      dicebear`,owner:"dicebear",name:"dicebear",avatar:"https://avatars.githubusercontent.com/u/647303?s=40&v=4",path:"/dicebear/dicebear",ourl:"https://github.com/dicebear",url:"https://github.com/dicebear/dicebear",description:"",language:"Vue",stars:9977,forks:438,starup:245},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3465,forks:993,starup:74}]},gt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:i}=W(),c=H(()=>b(X[`${s.value}-${o.value}`]));z("color",i),z("data",c);function b(u){return u.sort((a,n)=>n.starup-a.starup)}return(u,a)=>{const n=P,m=D,g=R,d=L,t=F,e=G,y=B,w=U,j=N;return l(),C("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(K,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(l(),k(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(l(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(l(),k(w,{key:2})):(l(),k(j,{key:3,data:h(c)},null,8,["data"]))]),_:1})])}}});export{gt as default};
