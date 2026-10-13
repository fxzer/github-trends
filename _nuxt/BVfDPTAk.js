import D from"./DwqeEXKu.js";import I from"./DhpX7gVy.js";import q from"./Bla49Ly9.js";import F from"./CN9ncyC6.js";import L from"./DPe3kLM6.js";import W from"./lSm9t3T8.js";import P from"./tBlyfDpL.js";import{d as M}from"./KQwPfV-1.js";import{s as B,a as z,b as A,u as O,i as R,c as G}from"./CSWd_Z0X.js";import{i as x,p as K,a5 as C,D as h,f as _,w as j,S as E,h as b,a6 as S,T as Y,q as T,U as c,d as k,a as U,H as V}from"./ClNGcoz8.js";import"./BuWBUCc_.js";import"./p2-M2djV.js";import"./BuZPvChW.js";import"./DuHWHrP5.js";import"./DLum8TFE.js";const $=x({__name:"Chart",setup(f){const r=K("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(B),s=z("趋势仓库总指标排行榜",o);function u(i){const a=M(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=A(s,O);C(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:j({height:v})},null,4))}}),N=Object.assign($,{__name:"TrendChart"}),H=x({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=E(r),u=z("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=A(u,O);function v(a){const n=M(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:R(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}C(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:l,style:j({height:i})},null,4))}}),Q=Object.assign(H,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/845989?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:54497,forks:10717,starup:1961},{title:`Javis603 /

      token-monitor`,owner:"Javis603",name:"token-monitor",avatar:"https://avatars.githubusercontent.com/u/81982673?s=40&v=4",path:"/Javis603/token-monitor",ourl:"https://github.com/Javis603",url:"https://github.com/Javis603/token-monitor",description:"",language:"JavaScript",stars:3024,forks:284,starup:125},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:17257,forks:928,starup:82},{title:`poloclub /

      transformer-explainer`,owner:"poloclub",name:"transformer-explainer",avatar:"https://avatars.githubusercontent.com/u/29801123?s=40&v=4",path:"/poloclub/transformer-explainer",ourl:"https://github.com/poloclub",url:"https://github.com/poloclub/transformer-explainer",description:"",language:"JavaScript",stars:8946,forks:1021,starup:26},{title:`truelockmc /

      streambert`,owner:"truelockmc",name:"streambert",avatar:"https://avatars.githubusercontent.com/u/168660625?s=40&v=4",path:"/truelockmc/streambert",ourl:"https://github.com/truelockmc",url:"https://github.com/truelockmc/streambert",description:"",language:"JavaScript",stars:6253,forks:588,starup:33},{title:`chaolucky18 /

      xuexitongScript`,owner:"chaolucky18",name:"xuexitongScript",avatar:"https://avatars.githubusercontent.com/u/30858091?s=40&v=4",path:"/chaolucky18/xuexitongScript",ourl:"https://github.com/chaolucky18",url:"https://github.com/chaolucky18/xuexitongScript",description:"",language:"JavaScript",stars:2866,forks:374,starup:38}],"JavaScript-weekly":[{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:10827,forks:1314,starup:6621},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:105919,forks:11047,starup:4175},{title:`poteto /

      hiring-without-whiteboards`,owner:"poteto",name:"hiring-without-whiteboards",avatar:"https://avatars.githubusercontent.com/u/1390709?s=40&v=4",path:"/poteto/hiring-without-whiteboards",ourl:"https://github.com/poteto",url:"https://github.com/poteto/hiring-without-whiteboards",description:"",language:"JavaScript",stars:52649,forks:3965,starup:265},{title:`MiaAI-Lab /

      sparkDash`,owner:"MiaAI-Lab",name:"sparkDash",avatar:"https://avatars.githubusercontent.com/u/83042094?s=40&v=4",path:"/MiaAI-Lab/sparkDash",ourl:"https://github.com/MiaAI-Lab",url:"https://github.com/MiaAI-Lab/sparkDash",description:"",language:"JavaScript",stars:677,forks:137,starup:152},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:10040,forks:1077,starup:740},{title:`MagicMirrorOrg /

      MagicMirror`,owner:"MagicMirrorOrg",name:"MagicMirror",avatar:"https://avatars.githubusercontent.com/u/210954?s=40&v=4",path:"/MagicMirrorOrg/MagicMirror",ourl:"https://github.com/MagicMirrorOrg",url:"https://github.com/MagicMirrorOrg/MagicMirror",description:"",language:"JavaScript",stars:24112,forks:4576,starup:201},{title:`greensock /

      GSAP`,owner:"greensock",name:"GSAP",avatar:"https://avatars.githubusercontent.com/u/2389714?s=40&v=4",path:"/greensock/GSAP",ourl:"https://github.com/greensock",url:"https://github.com/greensock/GSAP",description:"",language:"JavaScript",stars:29154,forks:2255,starup:328},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:80516,forks:4810,starup:3378},{title:`kanoqwq /

      UFI-TOOLS`,owner:"kanoqwq",name:"UFI-TOOLS",avatar:"https://avatars.githubusercontent.com/u/33284465?s=40&v=4",path:"/kanoqwq/UFI-TOOLS",ourl:"https://github.com/kanoqwq",url:"https://github.com/kanoqwq/UFI-TOOLS",description:"",language:"JavaScript",stars:2742,forks:304,starup:476}],"JavaScript-monthly":[{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:278200,forks:41450,starup:22583},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:105919,forks:11047,starup:12396},{title:`bilawalsidhu /

      gods-eye-view`,owner:"bilawalsidhu",name:"gods-eye-view",avatar:"https://avatars.githubusercontent.com/u/845989?s=40&v=4",path:"/bilawalsidhu/gods-eye-view",ourl:"https://github.com/bilawalsidhu",url:"https://github.com/bilawalsidhu/gods-eye-view",description:"",language:"JavaScript",stars:54497,forks:10717,starup:24627},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:162234,forks:8762,starup:26382},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:143153,forks:34719,starup:1876},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:29063,forks:1765,starup:25873},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:32329,forks:2824,starup:1262},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:10040,forks:1077,starup:2479},{title:`hughhowey /

      neo`,owner:"hughhowey",name:"neo",avatar:"https://avatars.githubusercontent.com/u/30789359?s=40&v=4",path:"/hughhowey/neo",ourl:"https://github.com/hughhowey",url:"https://github.com/hughhowey/neo",description:"",language:"JavaScript",stars:1432,forks:184,starup:991},{title:`fleetbase /

      fleetbase`,owner:"fleetbase",name:"fleetbase",avatar:"https://avatars.githubusercontent.com/u/816371?s=40&v=4",path:"/fleetbase/fleetbase",ourl:"https://github.com/fleetbase",url:"https://github.com/fleetbase/fleetbase",description:"",language:"JavaScript",stars:4315,forks:1128,starup:1945},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:80516,forks:4810,starup:13047},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:68552,forks:6811,starup:6141},{title:`laoma528 /

      awesome-zhuiju-free`,owner:"laoma528",name:"awesome-zhuiju-free",avatar:"https://avatars.githubusercontent.com/u/169715751?s=40&v=4",path:"/laoma528/awesome-zhuiju-free",ourl:"https://github.com/laoma528",url:"https://github.com/laoma528/awesome-zhuiju-free",description:"",language:"JavaScript",stars:11886,forks:819,starup:3687},{title:`WebKit /

      WebKit`,owner:"WebKit",name:"WebKit",avatar:"https://avatars.githubusercontent.com/u/995975?s=40&v=4",path:"/WebKit/WebKit",ourl:"https://github.com/WebKit",url:"https://github.com/WebKit/WebKit",description:"",language:"JavaScript",stars:10229,forks:2253,starup:155},{title:`WorldFlowAI /

      everything-claude-code`,owner:"WorldFlowAI",name:"everything-claude-code",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/WorldFlowAI/everything-claude-code",ourl:"https://github.com/WorldFlowAI",url:"https://github.com/WorldFlowAI/everything-claude-code",description:"",language:"JavaScript",stars:4581,forks:688,starup:1712},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:24965,forks:971,starup:582},{title:`JoeanAmier /

      TikTokDownloader`,owner:"JoeanAmier",name:"TikTokDownloader",avatar:"https://avatars.githubusercontent.com/u/49263334?s=40&v=4",path:"/JoeanAmier/TikTokDownloader",ourl:"https://github.com/JoeanAmier",url:"https://github.com/JoeanAmier/TikTokDownloader",description:"",language:"JavaScript",stars:16781,forks:2824,starup:1006},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:11932,forks:4217,starup:751}],"TypeScript-daily":[{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:184592,forks:44699,starup:54706},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:27739,forks:1968,starup:246},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:34111,forks:2928,starup:187},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:23398,forks:3084,starup:203},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:39770,forks:3991,starup:213},{title:`krillinai /

      OpenCreator`,owner:"krillinai",name:"OpenCreator",avatar:"https://avatars.githubusercontent.com/u/114557800?s=40&v=4",path:"/krillinai/OpenCreator",ourl:"https://github.com/krillinai",url:"https://github.com/krillinai/OpenCreator",description:"",language:"TypeScript",stars:12866,forks:1361,starup:134},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:62179,forks:5567,starup:831},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:34382,forks:4696,starup:548},{title:`nab138 /

      iloader`,owner:"nab138",name:"iloader",avatar:"https://avatars.githubusercontent.com/u/56705177?s=40&v=4",path:"/nab138/iloader",ourl:"https://github.com/nab138",url:"https://github.com/nab138/iloader",description:"",language:"TypeScript",stars:3900,forks:279,starup:42},{title:`apify /

      apify-mcp-server`,owner:"apify",name:"apify-mcp-server",avatar:"https://avatars.githubusercontent.com/u/19406805?s=40&v=4",path:"/apify/apify-mcp-server",ourl:"https://github.com/apify",url:"https://github.com/apify/apify-mcp-server",description:"",language:"TypeScript",stars:10908,forks:326,starup:207},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:1127,forks:95,starup:216},{title:`Tencent /

      teamai-cli`,owner:"Tencent",name:"teamai-cli",avatar:"https://avatars.githubusercontent.com/u/279665174?s=40&v=4",path:"/Tencent/teamai-cli",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/teamai-cli",description:"",language:"TypeScript",stars:5413,forks:421,starup:36},{title:`rmyndharis /

      OpenWA`,owner:"rmyndharis",name:"OpenWA",avatar:"https://avatars.githubusercontent.com/u/2390382?s=40&v=4",path:"/rmyndharis/OpenWA",ourl:"https://github.com/rmyndharis",url:"https://github.com/rmyndharis/OpenWA",description:"",language:"TypeScript",stars:15409,forks:3609,starup:168},{title:`supabase /

      agent-skills`,owner:"supabase",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/44656907?s=40&v=4",path:"/supabase/agent-skills",ourl:"https://github.com/supabase",url:"https://github.com/supabase/agent-skills",description:"",language:"TypeScript",stars:2800,forks:233,starup:26},{title:`CopilotKit /

      OpenIntelligentUI`,owner:"CopilotKit",name:"OpenIntelligentUI",avatar:"https://avatars.githubusercontent.com/u/85066839?s=40&v=4",path:"/CopilotKit/OpenIntelligentUI",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/OpenIntelligentUI",description:"",language:"TypeScript",stars:2964,forks:337,starup:250},{title:`Twigpine /

      openclaude`,owner:"Twigpine",name:"openclaude",avatar:"https://avatars.githubusercontent.com/u/268502447?s=40&v=4",path:"/Twigpine/openclaude",ourl:"https://github.com/Twigpine",url:"https://github.com/Twigpine/openclaude",description:"",language:"TypeScript",stars:33812,forks:9115,starup:64},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:29377,forks:2586,starup:49}],"TypeScript-weekly":[{title:`tester-army /

      e2e`,owner:"tester-army",name:"e2e",avatar:"https://avatars.githubusercontent.com/u/52801365?s=40&v=4",path:"/tester-army/e2e",ourl:"https://github.com/tester-army",url:"https://github.com/tester-army/e2e",description:"",language:"TypeScript",stars:9858,forks:476,starup:5582},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:62179,forks:5567,starup:4482},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:100254,forks:8787,starup:3762},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:11145,forks:1084,starup:1144},{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:184592,forks:44699,starup:130471},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:34382,forks:4696,starup:3029},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:1127,forks:95,starup:502},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:27296,forks:7214,starup:1716},{title:`mvschwarz /

      openrig`,owner:"mvschwarz",name:"openrig",avatar:"https://avatars.githubusercontent.com/u/171890339?s=40&v=4",path:"/mvschwarz/openrig",ourl:"https://github.com/mvschwarz",url:"https://github.com/mvschwarz/openrig",description:"",language:"TypeScript",stars:7358,forks:557,starup:2056},{title:`DmNote-App /

      DmNote`,owner:"DmNote-App",name:"DmNote",avatar:"https://avatars.githubusercontent.com/u/111095268?s=40&v=4",path:"/DmNote-App/DmNote",ourl:"https://github.com/DmNote-App",url:"https://github.com/DmNote-App/DmNote",description:"",language:"TypeScript",stars:3602,forks:218,starup:1338},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:63755,forks:5024,starup:1686},{title:`invoke-ai /

      InvokeAI`,owner:"invoke-ai",name:"InvokeAI",avatar:"https://avatars.githubusercontent.com/u/4822129?s=40&v=4",path:"/invoke-ai/InvokeAI",ourl:"https://github.com/invoke-ai",url:"https://github.com/invoke-ai/InvokeAI",description:"",language:"TypeScript",stars:28601,forks:3037,starup:246},{title:`breferrari /

      obsidian-mind`,owner:"breferrari",name:"obsidian-mind",avatar:"https://avatars.githubusercontent.com/u/1744013?s=40&v=4",path:"/breferrari/obsidian-mind",ourl:"https://github.com/breferrari",url:"https://github.com/breferrari/obsidian-mind",description:"",language:"TypeScript",stars:5281,forks:598,starup:351},{title:`AtomicBot-ai /

      atomic-agent`,owner:"AtomicBot-ai",name:"atomic-agent",avatar:"https://avatars.githubusercontent.com/u/19537764?s=40&v=4",path:"/AtomicBot-ai/atomic-agent",ourl:"https://github.com/AtomicBot-ai",url:"https://github.com/AtomicBot-ai/atomic-agent",description:"",language:"TypeScript",stars:3291,forks:268,starup:542},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:11639,forks:1039,starup:1125}],"TypeScript-monthly":[{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:101247,forks:17006,starup:20601},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:62179,forks:5567,starup:12662},{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:150541,forks:26362,starup:6422},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:34382,forks:4696,starup:8213},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:27739,forks:1968,starup:4706},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:11145,forks:1084,starup:3707},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:111445,forks:16623,starup:2706},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:100254,forks:8787,starup:6792},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:27296,forks:7214,starup:4877},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/24249610?s=40&v=4",path:"/Effect-TS/effect",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect",description:"",language:"TypeScript",stars:17265,forks:856,starup:1291},{title:`LibreChat-AI /

      LibreChat`,owner:"LibreChat-AI",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/LibreChat-AI/LibreChat",ourl:"https://github.com/LibreChat-AI",url:"https://github.com/LibreChat-AI/LibreChat",description:"",language:"TypeScript",stars:45618,forks:9378,starup:2924},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:63755,forks:5024,starup:4769},{title:`anthropics /

      claude-code-action`,owner:"anthropics",name:"claude-code-action",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code-action",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code-action",description:"",language:"TypeScript",stars:9493,forks:2209,starup:658},{title:`FxEmbed /

      FxEmbed`,owner:"FxEmbed",name:"FxEmbed",avatar:"https://avatars.githubusercontent.com/u/2636265?s=40&v=4",path:"/FxEmbed/FxEmbed",ourl:"https://github.com/FxEmbed",url:"https://github.com/FxEmbed/FxEmbed",description:"",language:"TypeScript",stars:5708,forks:273,starup:710},{title:`cline /

      cline`,owner:"cline",name:"cline",avatar:"https://avatars.githubusercontent.com/u/7799382?s=40&v=4",path:"/cline/cline",ourl:"https://github.com/cline",url:"https://github.com/cline/cline",description:"",language:"TypeScript",stars:70267,forks:7649,starup:2762},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:22585,forks:1888,starup:8365},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:20154,forks:2471,starup:5974},{title:`pablostanley /

      yoinks`,owner:"pablostanley",name:"yoinks",avatar:"https://avatars.githubusercontent.com/u/7430988?s=40&v=4",path:"/pablostanley/yoinks",ourl:"https://github.com/pablostanley",url:"https://github.com/pablostanley/yoinks",description:"",language:"TypeScript",stars:5837,forks:489,starup:4105},{title:`Tencent /

      BrowserSkill`,owner:"Tencent",name:"BrowserSkill",avatar:"https://avatars.githubusercontent.com/u/87162611?s=40&v=4",path:"/Tencent/BrowserSkill",ourl:"https://github.com/Tencent",url:"https://github.com/Tencent/BrowserSkill",description:"",language:"TypeScript",stars:8780,forks:627,starup:6858},{title:`BuilderIO /

      agent-native`,owner:"BuilderIO",name:"agent-native",avatar:"https://avatars.githubusercontent.com/u/844291?s=40&v=4",path:"/BuilderIO/agent-native",ourl:"https://github.com/BuilderIO",url:"https://github.com/BuilderIO/agent-native",description:"",language:"TypeScript",stars:7136,forks:648,starup:2443},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:91117,forks:5820,starup:24252},{title:`mobile-next /

      mobile-mcp`,owner:"mobile-next",name:"mobile-mcp",avatar:"https://avatars.githubusercontent.com/u/2457607?s=40&v=4",path:"/mobile-next/mobile-mcp",ourl:"https://github.com/mobile-next",url:"https://github.com/mobile-next/mobile-mcp",description:"",language:"TypeScript",stars:9076,forks:817,starup:2445},{title:`miuuyy /

      codex-chatgpt-web`,owner:"miuuyy",name:"codex-chatgpt-web",avatar:"https://avatars.githubusercontent.com/u/147659719?s=40&v=4",path:"/miuuyy/codex-chatgpt-web",ourl:"https://github.com/miuuyy",url:"https://github.com/miuuyy/codex-chatgpt-web",description:"",language:"TypeScript",stars:14152,forks:1114,starup:7645}],"Vue-daily":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:3841,forks:225,starup:19},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33376,forks:4658,starup:10},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3711,forks:428,starup:18},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2719,forks:206,starup:7},{title:`pipipi-pikachu /

      PPTist`,owner:"pipipi-pikachu",name:"PPTist",avatar:"https://avatars.githubusercontent.com/u/22936489?s=40&v=4",path:"/pipipi-pikachu/PPTist",ourl:"https://github.com/pipipi-pikachu",url:"https://github.com/pipipi-pikachu/PPTist",description:"",language:"Vue",stars:9385,forks:1771,starup:3},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26703,forks:1953,starup:17},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10470,forks:1266,starup:10},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21678,forks:3891,starup:2},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11659,forks:929,starup:4},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1736,forks:674,starup:2},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22046,forks:1534,starup:9},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2769,forks:464,starup:2},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6780,forks:2506,starup:6},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1749,forks:135,starup:7},{title:`chaitin /

      xray`,owner:"chaitin",name:"xray",avatar:"https://avatars.githubusercontent.com/u/4939404?s=40&v=4",path:"/chaitin/xray",ourl:"https://github.com/chaitin",url:"https://github.com/chaitin/xray",description:"",language:"Vue",stars:11760,forks:1872,starup:4}],"Vue-weekly":[{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33376,forks:4658,starup:58},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24467,forks:3005,starup:143},{title:`Tools-cx-app /

      meta-magic_mount-rs`,owner:"Tools-cx-app",name:"meta-magic_mount-rs",avatar:"https://avatars.githubusercontent.com/u/127004703?s=40&v=4",path:"/Tools-cx-app/meta-magic_mount-rs",ourl:"https://github.com/Tools-cx-app",url:"https://github.com/Tools-cx-app/meta-magic_mount-rs",description:"",language:"Vue",stars:555,forks:31,starup:21},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26703,forks:1953,starup:86},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2769,forks:464,starup:16},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:3841,forks:225,starup:173},{title:`unovue /

      inspira-ui`,owner:"unovue",name:"inspira-ui",avatar:"https://avatars.githubusercontent.com/u/25490173?s=40&v=4",path:"/unovue/inspira-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/inspira-ui",description:"",language:"Vue",stars:5049,forks:346,starup:38},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6780,forks:2506,starup:12},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1736,forks:674,starup:25},{title:`bluerobotics /

      BlueOS`,owner:"bluerobotics",name:"BlueOS",avatar:"https://avatars.githubusercontent.com/u/1215497?s=40&v=4",path:"/bluerobotics/BlueOS",ourl:"https://github.com/bluerobotics",url:"https://github.com/bluerobotics/BlueOS",description:"",language:"Vue",stars:467,forks:153,starup:4},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:29035,forks:3321,starup:38},{title:`crmeb /

      crmeb_java`,owner:"crmeb",name:"crmeb_java",avatar:"https://avatars.githubusercontent.com/u/4971899?s=40&v=4",path:"/crmeb/crmeb_java",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/crmeb_java",description:"",language:"Vue",stars:3070,forks:812,starup:8},{title:`aniyomiorg /

      aniyomi-website`,owner:"aniyomiorg",name:"aniyomi-website",avatar:"https://avatars.githubusercontent.com/u/10836780?s=40&v=4",path:"/aniyomiorg/aniyomi-website",ourl:"https://github.com/aniyomiorg",url:"https://github.com/aniyomiorg/aniyomi-website",description:"",language:"Vue",stars:232,forks:1205,starup:1},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1988,forks:113,starup:25},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Vue",stars:255,forks:31,starup:1},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22046,forks:1534,starup:51},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1518,forks:71,starup:23}],"Vue-monthly":[{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:3841,forks:225,starup:1593},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1749,forks:135,starup:151},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2769,forks:464,starup:80},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24467,forks:3005,starup:482},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2474,forks:288,starup:235},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:3711,forks:428,starup:465},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16979,forks:1378,starup:342},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1785,forks:477,starup:102},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10470,forks:1266,starup:574},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3430,forks:976,starup:64},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:29035,forks:3321,starup:176},{title:`Tools-cx-app /

      meta-magic_mount-rs`,owner:"Tools-cx-app",name:"meta-magic_mount-rs",avatar:"https://avatars.githubusercontent.com/u/127004703?s=40&v=4",path:"/Tools-cx-app/meta-magic_mount-rs",ourl:"https://github.com/Tools-cx-app",url:"https://github.com/Tools-cx-app/meta-magic_mount-rs",description:"",language:"Vue",stars:555,forks:31,starup:73},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1992,forks:518,starup:128},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26703,forks:1953,starup:318},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33376,forks:4658,starup:181},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2719,forks:206,starup:335},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:687,forks:358,starup:1},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6455,forks:403,starup:185},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3784,forks:1519,starup:277}]},gt=x({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=G(),l=U(()=>v(X[`${s.value}-${o.value}`]));V("color",u),V("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=D,m=I,g=q,d=F,t=L,e=W,y=P,w=N,J=Q;return h(),_("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b(Y,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(y,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(w,{key:2})):(h(),k(J,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
