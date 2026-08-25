import j from"./HzzXHe9Q.js";import O from"./BxmkHM3H.js";import q from"./DtCQ9fXJ.js";import G from"./SqCGglNs.js";import I from"./C4RqOeN1.js";import z from"./B6ohQHIR.js";import R from"./CQOqSu4b.js";import{d as C}from"./KQwPfV-1.js";import{s as H,a as J,b as V,u as F,i as M,c as W}from"./um_NfyB5.js";import{i as x,p as N,a5 as B,D as c,f as _,w as D,S as Y,h as b,a6 as S,T as $,q as T,U as h,d as k,a as E,H as A}from"./CyWrm5qt.js";import"./CvX0UOeF.js";import"./p2-M2djV.js";import"./Bi5vSL0z.js";import"./CfmGy5Jx.js";import"./BJvjUKZN.js";const Q=x({__name:"Chart",setup(f){const r=N("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(H),s=J("趋势仓库总指标排行榜",o);function u(i){const a=C(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=V(s,F);B(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:D({height:v})},null,4))}}),K=Object.assign(Q,{__name:"TrendChart"}),P=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=Y(r),u=J("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,F);function v(a){const n=C(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:M(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}B(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:D({height:i})},null,4))}}),U=Object.assign(P,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:17154,forks:1778,starup:1698},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:110592,forks:6082,starup:944},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:91800,forks:8058,starup:142},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:243101,forks:36783,starup:317},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:26298,forks:4754,starup:94},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:61486,forks:6229,starup:204},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:2536,forks:678,starup:22},{title:`fmhy /

      edit`,owner:"fmhy",name:"edit",avatar:"https://avatars.githubusercontent.com/u/44333466?s=40&v=4",path:"/fmhy/edit",ourl:"https://github.com/fmhy",url:"https://github.com/fmhy/edit",description:"",language:"JavaScript",stars:11353,forks:2945,starup:20},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",ourl:"https://github.com/WhiskeySockets",url:"https://github.com/WhiskeySockets/Baileys",description:"",language:"JavaScript",stars:10841,forks:3325,starup:17},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:80424,forks:5511,starup:441},{title:`alam00000 /

      bentopdf`,owner:"alam00000",name:"bentopdf",avatar:"https://avatars.githubusercontent.com/u/50314772?s=40&v=4",path:"/alam00000/bentopdf",ourl:"https://github.com/alam00000",url:"https://github.com/alam00000/bentopdf",description:"",language:"JavaScript",stars:14815,forks:1267,starup:32},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:27097,forks:4792,starup:75},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:32344,forks:2231,starup:90},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:89681,forks:9603,starup:253}],"JavaScript-weekly":[{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:17154,forks:1778,starup:4341},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:68332,forks:12954,starup:3794},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/415?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:55057,forks:11921,starup:278},{title:`chaitanyagiri /

      munder-difflin`,owner:"chaitanyagiri",name:"munder-difflin",avatar:"https://avatars.githubusercontent.com/u/26071627?s=40&v=4",path:"/chaitanyagiri/munder-difflin",ourl:"https://github.com/chaitanyagiri",url:"https://github.com/chaitanyagiri/munder-difflin",description:"",language:"JavaScript",stars:4325,forks:525,starup:2627},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:2609,forks:726,starup:448},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"JavaScript",stars:91800,forks:8058,starup:794},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:61486,forks:6229,starup:2294},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90600,forks:8294,starup:356},{title:`OpenSenseNova /

      SenseNova-Skills`,owner:"OpenSenseNova",name:"SenseNova-Skills",avatar:"https://avatars.githubusercontent.com/u/28984159?s=40&v=4",path:"/OpenSenseNova/SenseNova-Skills",ourl:"https://github.com/OpenSenseNova",url:"https://github.com/OpenSenseNova/SenseNova-Skills",description:"",language:"JavaScript",stars:5031,forks:374,starup:134},{title:`dbgate /

      dbgate`,owner:"dbgate",name:"dbgate",avatar:"https://avatars.githubusercontent.com/u/2543891?s=40&v=4",path:"/dbgate/dbgate",ourl:"https://github.com/dbgate",url:"https://github.com/dbgate/dbgate",description:"",language:"JavaScript",stars:7277,forks:468,starup:54},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1699,forks:295,starup:344},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:51617,forks:3918,starup:127},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:1703,forks:156,starup:265},{title:`simple-icons /

      simple-icons`,owner:"simple-icons",name:"simple-icons",avatar:"https://avatars.githubusercontent.com/u/15157491?s=40&v=4",path:"/simple-icons/simple-icons",ourl:"https://github.com/simple-icons",url:"https://github.com/simple-icons/simple-icons",description:"",language:"JavaScript",stars:25720,forks:3153,starup:87}],"JavaScript-monthly":[{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:13439,forks:698,starup:11039},{title:`freestylefly /

      awesome-gpt-image-2`,owner:"freestylefly",name:"awesome-gpt-image-2",avatar:"https://avatars.githubusercontent.com/u/43960064?s=40&v=4",path:"/freestylefly/awesome-gpt-image-2",ourl:"https://github.com/freestylefly",url:"https://github.com/freestylefly/awesome-gpt-image-2",description:"",language:"JavaScript",stars:17154,forks:1778,starup:6841},{title:`ToolJet /

      ToolJet`,owner:"ToolJet",name:"ToolJet",avatar:"https://avatars.githubusercontent.com/u/57667706?s=40&v=4",path:"/ToolJet/ToolJet",ourl:"https://github.com/ToolJet",url:"https://github.com/ToolJet/ToolJet",description:"",language:"JavaScript",stars:40758,forks:5413,starup:2585},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:1699,forks:295,starup:1078},{title:`mui /

      material-ui`,owner:"mui",name:"material-ui",avatar:"https://avatars.githubusercontent.com/u/3165635?s=40&v=4",path:"/mui/material-ui",ourl:"https://github.com/mui",url:"https://github.com/mui/material-ui",description:"",language:"JavaScript",stars:98920,forks:32558,starup:419},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:39253,forks:3200,starup:1118},{title:`microsoft /

      power-platform-skills`,owner:"microsoft",name:"power-platform-skills",avatar:"https://avatars.githubusercontent.com/u/7589718?s=40&v=4",path:"/microsoft/power-platform-skills",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/power-platform-skills",description:"",language:"JavaScript",stars:765,forks:159,starup:206},{title:`plankanban /

      planka`,owner:"plankanban",name:"planka",avatar:"https://avatars.githubusercontent.com/u/5564188?s=40&v=4",path:"/plankanban/planka",ourl:"https://github.com/plankanban",url:"https://github.com/plankanban/planka",description:"",language:"JavaScript",stars:12447,forks:1367,starup:241},{title:`NomaDamas /

      k-skill`,owner:"NomaDamas",name:"k-skill",avatar:"https://avatars.githubusercontent.com/u/28955029?s=40&v=4",path:"/NomaDamas/k-skill",ourl:"https://github.com/NomaDamas",url:"https://github.com/NomaDamas/k-skill",description:"",language:"JavaScript",stars:7317,forks:891,starup:917},{title:`advplyr /

      audiobookshelf`,owner:"advplyr",name:"audiobookshelf",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf",description:"",language:"JavaScript",stars:14116,forks:1135,starup:452},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:67268,forks:4303,starup:944},{title:`electerm /

      electerm`,owner:"electerm",name:"electerm",avatar:"https://avatars.githubusercontent.com/u/1641949?s=40&v=4",path:"/electerm/electerm",ourl:"https://github.com/electerm",url:"https://github.com/electerm/electerm",description:"",language:"JavaScript",stars:14918,forks:1201,starup:385},{title:`darkzOGx /

      youtube-automation-agent`,owner:"darkzOGx",name:"youtube-automation-agent",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/darkzOGx/youtube-automation-agent",ourl:"https://github.com/darkzOGx",url:"https://github.com/darkzOGx/youtube-automation-agent",description:"",language:"JavaScript",stars:2609,forks:726,starup:943},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:62489,forks:3826,starup:12859},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:114773,forks:36502,starup:946},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:61486,forks:6229,starup:5533},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:1703,forks:156,starup:718},{title:`pdone /

      lx-music-source`,owner:"pdone",name:"lx-music-source",avatar:"https://avatars.githubusercontent.com/u/34151215?s=40&v=4",path:"/pdone/lx-music-source",ourl:"https://github.com/pdone",url:"https://github.com/pdone/lx-music-source",description:"",language:"JavaScript",stars:8214,forks:682,starup:862},{title:`louislam /

      uptime-kuma`,owner:"louislam",name:"uptime-kuma",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/uptime-kuma",ourl:"https://github.com/louislam",url:"https://github.com/louislam/uptime-kuma",description:"",language:"JavaScript",stars:90600,forks:8294,starup:1262},{title:`calesthio /

      Crucix`,owner:"calesthio",name:"Crucix",avatar:"https://avatars.githubusercontent.com/u/213189893?s=40&v=4",path:"/calesthio/Crucix",ourl:"https://github.com/calesthio",url:"https://github.com/calesthio/Crucix",description:"",language:"JavaScript",stars:11555,forks:1819,starup:1076},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",ourl:"https://github.com/WhiskeySockets",url:"https://github.com/WhiskeySockets/Baileys",description:"",language:"JavaScript",stars:10841,forks:3325,starup:606}],"TypeScript-daily":[{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:3207,forks:322,starup:538},{title:`cloudflare /

      cloudflare-os`,owner:"cloudflare",name:"cloudflare-os",avatar:"https://avatars.githubusercontent.com/u/4001805?s=40&v=4",path:"/cloudflare/cloudflare-os",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/cloudflare-os",description:"",language:"TypeScript",stars:9175,forks:1055,starup:111},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:20168,forks:2911,starup:516},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:24530,forks:2018,starup:32},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/121005188?s=40&v=4",path:"/makeplane/plane",ourl:"https://github.com/makeplane",url:"https://github.com/makeplane/plane",description:"",language:"TypeScript",stars:58217,forks:5511,starup:546},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:48405,forks:4790,starup:69},{title:`evolution-foundation /

      evolution-api`,owner:"evolution-foundation",name:"evolution-api",avatar:"https://avatars.githubusercontent.com/u/24706726?s=40&v=4",path:"/evolution-foundation/evolution-api",ourl:"https://github.com/evolution-foundation",url:"https://github.com/evolution-foundation/evolution-api",description:"",language:"TypeScript",stars:9408,forks:7161,starup:16},{title:`mastra-ai /

      mastra`,owner:"mastra-ai",name:"mastra",avatar:"https://avatars.githubusercontent.com/u/2359375?s=40&v=4",path:"/mastra-ai/mastra",ourl:"https://github.com/mastra-ai",url:"https://github.com/mastra-ai/mastra",description:"",language:"TypeScript",stars:27456,forks:2688,starup:33},{title:`stripe /

      link-cli`,owner:"stripe",name:"link-cli",avatar:"https://avatars.githubusercontent.com/u/178216135?s=40&v=4",path:"/stripe/link-cli",ourl:"https://github.com/stripe",url:"https://github.com/stripe/link-cli",description:"",language:"TypeScript",stars:709,forks:103,starup:25},{title:`openclaw /

      openclaw`,owner:"openclaw",name:"openclaw",avatar:"https://avatars.githubusercontent.com/u/58493?s=40&v=4",path:"/openclaw/openclaw",ourl:"https://github.com/openclaw",url:"https://github.com/openclaw/openclaw",description:"",language:"TypeScript",stars:387576,forks:81362,starup:356},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:27378,forks:2684,starup:304},{title:`traycerai /

      traycer`,owner:"traycerai",name:"traycer",avatar:"https://avatars.githubusercontent.com/u/34568645?s=40&v=4",path:"/traycerai/traycer",ourl:"https://github.com/traycerai",url:"https://github.com/traycerai/traycer",description:"",language:"TypeScript",stars:1322,forks:180,starup:28},{title:`midday-ai /

      midday`,owner:"midday-ai",name:"midday",avatar:"https://avatars.githubusercontent.com/u/655158?s=40&v=4",path:"/midday-ai/midday",ourl:"https://github.com/midday-ai",url:"https://github.com/midday-ai/midday",description:"",language:"TypeScript",stars:14902,forks:1845,starup:16},{title:`DefinitelyTyped /

      DefinitelyTyped`,owner:"DefinitelyTyped",name:"DefinitelyTyped",avatar:"https://avatars.githubusercontent.com/u/125332?s=40&v=4",path:"/DefinitelyTyped/DefinitelyTyped",ourl:"https://github.com/DefinitelyTyped",url:"https://github.com/DefinitelyTyped/DefinitelyTyped",description:"",language:"TypeScript",stars:51395,forks:30390,starup:5},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:53446,forks:3691,starup:866},{title:`oblien /

      openship`,owner:"oblien",name:"openship",avatar:"https://avatars.githubusercontent.com/u/162022179?s=40&v=4",path:"/oblien/openship",ourl:"https://github.com/oblien",url:"https://github.com/oblien/openship",description:"",language:"TypeScript",stars:11675,forks:1027,starup:77}],"TypeScript-weekly":[{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:3207,forks:322,starup:1313},{title:`eneskirca /

      nodeterm`,owner:"eneskirca",name:"nodeterm",avatar:"https://avatars.githubusercontent.com/u/39504888?s=40&v=4",path:"/eneskirca/nodeterm",ourl:"https://github.com/eneskirca",url:"https://github.com/eneskirca/nodeterm",description:"",language:"TypeScript",stars:1229,forks:126,starup:529},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:5132,forks:419,starup:1832},{title:`bookorbit /

      bookorbit`,owner:"bookorbit",name:"bookorbit",avatar:"https://avatars.githubusercontent.com/u/18559658?s=40&v=4",path:"/bookorbit/bookorbit",ourl:"https://github.com/bookorbit",url:"https://github.com/bookorbit/bookorbit",description:"",language:"TypeScript",stars:3161,forks:200,starup:843},{title:`cordiverse /

      cordis`,owner:"cordiverse",name:"cordis",avatar:"https://avatars.githubusercontent.com/u/33423008?s=40&v=4",path:"/cordiverse/cordis",ourl:"https://github.com/cordiverse",url:"https://github.com/cordiverse/cordis",description:"",language:"TypeScript",stars:7513,forks:441,starup:1972},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:20168,forks:2911,starup:1368},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:10772,forks:1172,starup:971},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:37618,forks:4338,starup:588},{title:`apify /

      apify-mcp-server`,owner:"apify",name:"apify-mcp-server",avatar:"https://avatars.githubusercontent.com/u/19406805?s=40&v=4",path:"/apify/apify-mcp-server",ourl:"https://github.com/apify",url:"https://github.com/apify/apify-mcp-server",description:"",language:"TypeScript",stars:4891,forks:237,starup:823},{title:`agalwood /

      Motrix`,owner:"agalwood",name:"Motrix",avatar:"https://avatars.githubusercontent.com/u/1032175?s=40&v=4",path:"/agalwood/Motrix",ourl:"https://github.com/agalwood",url:"https://github.com/agalwood/Motrix",description:"",language:"TypeScript",stars:54544,forks:4996,starup:1619},{title:`honojs /

      hono`,owner:"honojs",name:"hono",avatar:"https://avatars.githubusercontent.com/u/10682?s=40&v=4",path:"/honojs/hono",ourl:"https://github.com/honojs",url:"https://github.com/honojs/hono",description:"",language:"TypeScript",stars:31956,forks:1252,starup:256}],"TypeScript-monthly":[{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:24406,forks:2252,starup:15093},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:20446,forks:4834,starup:5873},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:54924,forks:7536,starup:26484},{title:`earendil-works /

      pi`,owner:"earendil-works",name:"pi",avatar:"https://avatars.githubusercontent.com/u/514052?s=40&v=4",path:"/earendil-works/pi",ourl:"https://github.com/earendil-works",url:"https://github.com/earendil-works/pi",description:"",language:"TypeScript",stars:97139,forks:12007,starup:19957},{title:`apache /

      maka`,owner:"apache",name:"maka",avatar:"https://avatars.githubusercontent.com/u/30525741?s=40&v=4",path:"/apache/maka",ourl:"https://github.com/apache",url:"https://github.com/apache/maka",description:"",language:"TypeScript",stars:3207,forks:322,starup:1904},{title:`different-ai /

      openwork`,owner:"different-ai",name:"openwork",avatar:"https://avatars.githubusercontent.com/u/11430621?s=40&v=4",path:"/different-ai/openwork",ourl:"https://github.com/different-ai",url:"https://github.com/different-ai/openwork",description:"",language:"TypeScript",stars:23029,forks:2283,starup:6105},{title:`opengeos /

      GeoLibre`,owner:"opengeos",name:"GeoLibre",avatar:"https://avatars.githubusercontent.com/u/5016453?s=40&v=4",path:"/opengeos/GeoLibre",ourl:"https://github.com/opengeos",url:"https://github.com/opengeos/GeoLibre",description:"",language:"TypeScript",stars:6717,forks:671,starup:4853},{title:`CodebuffAI /

      freebuff`,owner:"CodebuffAI",name:"freebuff",avatar:"https://avatars.githubusercontent.com/u/1593821?s=40&v=4",path:"/CodebuffAI/freebuff",ourl:"https://github.com/CodebuffAI",url:"https://github.com/CodebuffAI/freebuff",description:"",language:"TypeScript",stars:10772,forks:1172,starup:2823},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:53446,forks:3691,starup:24890},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:48405,forks:4790,starup:5556},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:27378,forks:2684,starup:7747},{title:`elizaOS /

      eliza`,owner:"elizaOS",name:"eliza",avatar:"https://avatars.githubusercontent.com/u/18633264?s=40&v=4",path:"/elizaOS/eliza",ourl:"https://github.com/elizaOS",url:"https://github.com/elizaOS/eliza",description:"",language:"TypeScript",stars:19163,forks:5694,starup:415},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:13432,forks:1579,starup:5697},{title:`CherryHQ /

      cherry-studio`,owner:"CherryHQ",name:"cherry-studio",avatar:"https://avatars.githubusercontent.com/u/8253512?s=40&v=4",path:"/CherryHQ/cherry-studio",ourl:"https://github.com/CherryHQ",url:"https://github.com/CherryHQ/cherry-studio",description:"",language:"TypeScript",stars:51057,forks:4869,starup:2363},{title:`amruthpillai /

      reactive-resume`,owner:"amruthpillai",name:"reactive-resume",avatar:"https://avatars.githubusercontent.com/u/1134738?s=40&v=4",path:"/amruthpillai/reactive-resume",ourl:"https://github.com/amruthpillai",url:"https://github.com/amruthpillai/reactive-resume",description:"",language:"TypeScript",stars:41719,forks:4664,starup:1945},{title:`QwenLM /

      qwen-code`,owner:"QwenLM",name:"qwen-code",avatar:"https://avatars.githubusercontent.com/u/1166785?s=40&v=4",path:"/QwenLM/qwen-code",ourl:"https://github.com/QwenLM",url:"https://github.com/QwenLM/qwen-code",description:"",language:"TypeScript",stars:27362,forks:2934,starup:1225},{title:`bookorbit /

      bookorbit`,owner:"bookorbit",name:"bookorbit",avatar:"https://avatars.githubusercontent.com/u/18559658?s=40&v=4",path:"/bookorbit/bookorbit",ourl:"https://github.com/bookorbit",url:"https://github.com/bookorbit/bookorbit",description:"",language:"TypeScript",stars:3161,forks:200,starup:1432},{title:`openobserve /

      openobserve`,owner:"openobserve",name:"openobserve",avatar:"https://avatars.githubusercontent.com/u/1628250?s=40&v=4",path:"/openobserve/openobserve",ourl:"https://github.com/openobserve",url:"https://github.com/openobserve/openobserve",description:"",language:"TypeScript",stars:21463,forks:1053,starup:1104},{title:`pascalorg /

      editor`,owner:"pascalorg",name:"editor",avatar:"https://avatars.githubusercontent.com/u/6551176?s=40&v=4",path:"/pascalorg/editor",ourl:"https://github.com/pascalorg",url:"https://github.com/pascalorg/editor",description:"",language:"TypeScript",stars:21700,forks:2785,starup:4227},{title:`modelcontextprotocol /

      typescript-sdk`,owner:"modelcontextprotocol",name:"typescript-sdk",avatar:"https://avatars.githubusercontent.com/u/432536?s=40&v=4",path:"/modelcontextprotocol/typescript-sdk",ourl:"https://github.com/modelcontextprotocol",url:"https://github.com/modelcontextprotocol/typescript-sdk",description:"",language:"TypeScript",stars:13245,forks:2116,starup:328}],"Vue-daily":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33228,forks:8939,starup:16},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1999,forks:124,starup:23},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4064,forks:122,starup:15},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2662,forks:419,starup:6},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28799,forks:3295,starup:11},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26290,forks:1933,starup:11},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2373,forks:161,starup:8},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1802,forks:469,starup:6},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21741,forks:1488,starup:13},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:335,forks:38,starup:8},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40354,forks:5366,starup:22},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21581,forks:2334,starup:4},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22776,forks:1098,starup:21},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3540,forks:530,starup:1},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14455,forks:1781,starup:0},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:226,forks:1107,starup:1}],"Vue-weekly":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33228,forks:8939,starup:83},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3026,forks:381,starup:139},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7687,forks:1041,starup:119},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5797,forks:1099,starup:49},{title:`imsyy /

      yt-dlp-gui`,owner:"imsyy",name:"yt-dlp-gui",avatar:"https://avatars.githubusercontent.com/u/42232682?s=40&v=4",path:"/imsyy/yt-dlp-gui",ourl:"https://github.com/imsyy",url:"https://github.com/imsyy/yt-dlp-gui",description:"",language:"Vue",stars:252,forks:29,starup:33},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21741,forks:1488,starup:74},{title:`fastapiadmin /

      FastapiAdmin`,owner:"fastapiadmin",name:"FastapiAdmin",avatar:"https://avatars.githubusercontent.com/u/73034508?s=40&v=4",path:"/fastapiadmin/FastapiAdmin",ourl:"https://github.com/fastapiadmin",url:"https://github.com/fastapiadmin/FastapiAdmin",description:"",language:"Vue",stars:1055,forks:286,starup:27},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6741,forks:548,starup:15},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2662,forks:419,starup:18},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33202,forks:4674,starup:49},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:335,forks:38,starup:41},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28799,forks:3295,starup:31},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4064,forks:122,starup:75},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:432,forks:60272,starup:4},{title:`Tools-cx-app /

      meta-magic_mount-rs`,owner:"Tools-cx-app",name:"meta-magic_mount-rs",avatar:"https://avatars.githubusercontent.com/u/127004703?s=40&v=4",path:"/Tools-cx-app/meta-magic_mount-rs",ourl:"https://github.com/Tools-cx-app",url:"https://github.com/Tools-cx-app/meta-magic_mount-rs",description:"",language:"Vue",stars:475,forks:28,starup:21},{title:`Kong /

      kongponents`,owner:"Kong",name:"kongponents",avatar:"https://avatars.githubusercontent.com/u/32174276?s=40&v=4",path:"/Kong/kongponents",ourl:"https://github.com/Kong",url:"https://github.com/Kong/kongponents",description:"",language:"Vue",stars:165,forks:28,starup:1}],"Vue-monthly":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1999,forks:124,starup:648},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/182907634?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:22776,forks:1098,starup:731},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4064,forks:122,starup:330},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:965,forks:116,starup:220},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3388,forks:1383,starup:375},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21741,forks:1488,starup:280},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:432,forks:60272,starup:13},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3026,forks:381,starup:447},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33202,forks:4674,starup:201},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28799,forks:3295,starup:178},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6741,forks:548,starup:91},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1802,forks:469,starup:142},{title:`HuLaSpark /

      HuLa`,owner:"HuLaSpark",name:"HuLa",avatar:"https://avatars.githubusercontent.com/u/87641407?s=40&v=4",path:"/HuLaSpark/HuLa",ourl:"https://github.com/HuLaSpark",url:"https://github.com/HuLaSpark/HuLa",description:"",language:"Vue",stars:7687,forks:1041,starup:247},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:33228,forks:8939,starup:312},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5797,forks:1099,starup:176},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:2373,forks:161,starup:372},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2662,forks:419,starup:65},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:226,forks:1107,starup:6},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:826,forks:76,starup:77},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40354,forks:5366,starup:502},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11718,forks:1876,starup:65},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21632,forks:3896,starup:62}]},gt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=W(),l=E(()=>v(X[`${s.value}-${o.value}`]));A("color",u),A("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=j,m=O,g=q,d=G,t=I,e=z,y=R,w=K,L=U;return c(),_("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),k(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),k(w,{key:2})):(c(),k(L,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
