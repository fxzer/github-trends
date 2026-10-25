import F from"./EDQvZuBe.js";import G from"./CmeRRTEj.js";import R from"./Edb-2VAV.js";import q from"./4zPRQ610.js";import P from"./C49EiSmL.js";import L from"./Dcz2_j8E.js";import K from"./DAA_DLHJ.js";import{d as V}from"./KQwPfV-1.js";import{s as D,a as C,b as M,u as j,i as W,c as B}from"./CN5jPgsK.js";import{i as z,p as N,a5 as A,D as h,f as x,w as J,S as I,h as v,a6 as S,T as Y,q as T,U as c,d as k,a as $,H as _}from"./asLMA2W0.js";import"./QsE2emE5.js";import"./p2-M2djV.js";import"./C9NK2LHq.js";import"./CKDguz6e.js";import"./CSp9aMOX.js";const Q=z({__name:"Chart",setup(f){const r=N("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(D),s=C("趋势仓库总指标排行榜",o);function u(i){const a=V(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:l}=M(s,j);A(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:J({height:b})},null,4))}}),U=Object.assign(Q,{__name:"TrendChart"}),O=z({__name:"StarupChart",props:{data:{}},setup(f){const r=f,{data:o}=I(r),u=C("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=M(u,j);function b(a){const n=V(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}A(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),x("div",{ref_key:"chartRef",ref:l,style:J({height:i})},null,4))}}),H=Object.assign(O,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:46447,forks:2889,starup:2874},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:288671,forks:42799,starup:819},{title:`is-a-dev /

      register`,owner:"is-a-dev",name:"register",avatar:"https://avatars.githubusercontent.com/u/76603072?s=40&v=4",path:"/is-a-dev/register",ourl:"https://github.com/is-a-dev",url:"https://github.com/is-a-dev/register",description:"",language:"JavaScript",stars:11639,forks:33489,starup:30},{title:`maboloshi /

      github-chinese`,owner:"maboloshi",name:"github-chinese",avatar:"https://avatars.githubusercontent.com/u/7850715?s=40&v=4",path:"/maboloshi/github-chinese",ourl:"https://github.com/maboloshi",url:"https://github.com/maboloshi/github-chinese",description:"",language:"JavaScript",stars:36642,forks:2039,starup:124},{title:`ulsklyc /

      yuvomi`,owner:"ulsklyc",name:"yuvomi",avatar:"https://avatars.githubusercontent.com/u/108589275?s=40&v=4",path:"/ulsklyc/yuvomi",ourl:"https://github.com/ulsklyc",url:"https://github.com/ulsklyc/yuvomi",description:"",language:"JavaScript",stars:1992,forks:186,starup:208},{title:`WebKit /

      WebKit`,owner:"WebKit",name:"WebKit",avatar:"https://avatars.githubusercontent.com/u/995975?s=40&v=4",path:"/WebKit/WebKit",ourl:"https://github.com/WebKit",url:"https://github.com/WebKit/WebKit",description:"",language:"JavaScript",stars:10275,forks:2285,starup:8},{title:`tradesdontlie /

      tradingview-mcp`,owner:"tradesdontlie",name:"tradingview-mcp",avatar:"https://avatars.githubusercontent.com/u/196674484?s=40&v=4",path:"/tradesdontlie/tradingview-mcp",ourl:"https://github.com/tradesdontlie",url:"https://github.com/tradesdontlie/tradingview-mcp",description:"",language:"JavaScript",stars:6941,forks:2854,starup:16}],"JavaScript-weekly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:46447,forks:2889,starup:12680},{title:`withmarbleapp /

      os-taxonomy`,owner:"withmarbleapp",name:"os-taxonomy",avatar:"https://avatars.githubusercontent.com/u/2501329?s=40&v=4",path:"/withmarbleapp/os-taxonomy",ourl:"https://github.com/withmarbleapp",url:"https://github.com/withmarbleapp/os-taxonomy",description:"",language:"JavaScript",stars:7354,forks:1190,starup:1809},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:19442,forks:1081,starup:1784},{title:`plugin87 /

      ux-ui-agent-skills`,owner:"plugin87",name:"ux-ui-agent-skills",avatar:"https://avatars.githubusercontent.com/u/5790381?s=40&v=4",path:"/plugin87/ux-ui-agent-skills",ourl:"https://github.com/plugin87",url:"https://github.com/plugin87/ux-ui-agent-skills",description:"",language:"JavaScript",stars:2999,forks:286,starup:945},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:176044,forks:9613,starup:9747},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:20166,forks:1952,starup:399},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:251830,forks:51566,starup:791},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:27841,forks:1848,starup:3355},{title:`xmanrui /

      dsh-im`,owner:"xmanrui",name:"dsh-im",avatar:"https://avatars.githubusercontent.com/u/4094054?s=40&v=4",path:"/xmanrui/dsh-im",ourl:"https://github.com/xmanrui",url:"https://github.com/xmanrui/dsh-im",description:"",language:"JavaScript",stars:2509,forks:256,starup:357}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:46447,forks:2889,starup:22219},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:288671,forks:42799,starup:22855},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:176044,forks:9613,starup:31175},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:110444,forks:11530,starup:11794},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:15717,forks:2078,starup:14161},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:3419,forks:317,starup:2818},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:27841,forks:1848,starup:7013},{title:`withmarbleapp /

      os-taxonomy`,owner:"withmarbleapp",name:"os-taxonomy",avatar:"https://avatars.githubusercontent.com/u/2501329?s=40&v=4",path:"/withmarbleapp/os-taxonomy",ourl:"https://github.com/withmarbleapp",url:"https://github.com/withmarbleapp/os-taxonomy",description:"",language:"JavaScript",stars:7354,forks:1190,starup:2817},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:11254,forks:1270,starup:2974},{title:`androoAGI /

      starnet`,owner:"androoAGI",name:"starnet",avatar:"https://avatars.githubusercontent.com/u/224686490?s=40&v=4",path:"/androoAGI/starnet",ourl:"https://github.com/androoAGI",url:"https://github.com/androoAGI/starnet",description:"",language:"JavaScript",stars:1610,forks:325,starup:1382},{title:`hughhowey /

      neo`,owner:"hughhowey",name:"neo",avatar:"https://avatars.githubusercontent.com/u/30789359?s=40&v=4",path:"/hughhowey/neo",ourl:"https://github.com/hughhowey",url:"https://github.com/hughhowey/neo",description:"",language:"JavaScript",stars:1566,forks:212,starup:1122},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:33e3,forks:2886,starup:1536},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:69352,forks:6886,starup:5923},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:116916,forks:36723,starup:1369},{title:`plugin87 /

      ux-ui-agent-skills`,owner:"plugin87",name:"ux-ui-agent-skills",avatar:"https://avatars.githubusercontent.com/u/5790381?s=40&v=4",path:"/plugin87/ux-ui-agent-skills",ourl:"https://github.com/plugin87",url:"https://github.com/plugin87/ux-ui-agent-skills",description:"",language:"JavaScript",stars:2999,forks:286,starup:1552},{title:`coreyhaines31 /

      marketingskills`,owner:"coreyhaines31",name:"marketingskills",avatar:"https://avatars.githubusercontent.com/u/34802794?s=40&v=4",path:"/coreyhaines31/marketingskills",ourl:"https://github.com/coreyhaines31",url:"https://github.com/coreyhaines31/marketingskills",description:"",language:"JavaScript",stars:56492,forks:8359,starup:5162},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:12311,forks:4325,starup:871},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:25227,forks:994,starup:660}],"TypeScript-daily":[{title:`makecindy /

      cindy`,owner:"makecindy",name:"cindy",avatar:"https://avatars.githubusercontent.com/u/125997726?s=40&v=4",path:"/makecindy/cindy",ourl:"https://github.com/makecindy",url:"https://github.com/makecindy/cindy",description:"",language:"TypeScript",stars:4704,forks:650,starup:677},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7499,forks:1535,starup:255},{title:`JetBrains /

      thinkrail`,owner:"JetBrains",name:"thinkrail",avatar:"https://avatars.githubusercontent.com/u/177517595?s=40&v=4",path:"/JetBrains/thinkrail",ourl:"https://github.com/JetBrains",url:"https://github.com/JetBrains/thinkrail",description:"",language:"TypeScript",stars:1291,forks:89,starup:52},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108380,forks:14835,starup:825},{title:`anthropics /

      sandbox-runtime`,owner:"anthropics",name:"sandbox-runtime",avatar:"https://avatars.githubusercontent.com/u/278458262?s=40&v=4",path:"/anthropics/sandbox-runtime",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/sandbox-runtime",description:"",language:"TypeScript",stars:6590,forks:582,starup:199},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:8589,forks:1052,starup:21},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:103049,forks:9105,starup:302},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:41460,forks:5588,starup:670},{title:`mantrakp04 /

      ardia`,owner:"mantrakp04",name:"ardia",avatar:"https://avatars.githubusercontent.com/u/87142457?s=40&v=4",path:"/mantrakp04/ardia",ourl:"https://github.com/mantrakp04",url:"https://github.com/mantrakp04/ardia",description:"",language:"TypeScript",stars:805,forks:82,starup:102},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:67376,forks:5438,starup:357},{title:`MoonshotAI /

      kimi-code`,owner:"MoonshotAI",name:"kimi-code",avatar:"https://avatars.githubusercontent.com/u/25167721?s=40&v=4",path:"/MoonshotAI/kimi-code",ourl:"https://github.com/MoonshotAI",url:"https://github.com/MoonshotAI/kimi-code",description:"",language:"TypeScript",stars:8014,forks:1313,starup:18},{title:`nightly-labs /

      openbot`,owner:"nightly-labs",name:"openbot",avatar:"https://avatars.githubusercontent.com/u/38857779?s=40&v=4",path:"/nightly-labs/openbot",ourl:"https://github.com/nightly-labs",url:"https://github.com/nightly-labs/openbot",description:"",language:"TypeScript",stars:945,forks:150,starup:81},{title:`google /

      brotli`,owner:"google",name:"brotli",avatar:"https://avatars.githubusercontent.com/u/203457?s=40&v=4",path:"/google/brotli",ourl:"https://github.com/google",url:"https://github.com/google/brotli",description:"",language:"TypeScript",stars:15009,forks:1381,starup:20},{title:`moeru-ai /

      airi`,owner:"moeru-ai",name:"airi",avatar:"https://avatars.githubusercontent.com/u/11081491?s=40&v=4",path:"/moeru-ai/airi",ourl:"https://github.com/moeru-ai",url:"https://github.com/moeru-ai/airi",description:"",language:"TypeScript",stars:50709,forks:5107,starup:59},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:9117,forks:2131,starup:148},{title:`garrytan /

      gstack`,owner:"garrytan",name:"gstack",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gstack",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gstack",description:"",language:"TypeScript",stars:137673,forks:20409,starup:177},{title:`ever-co /

      ever-gauzy`,owner:"ever-co",name:"ever-gauzy",avatar:"https://avatars.githubusercontent.com/u/118497?s=40&v=4",path:"/ever-co/ever-gauzy",ourl:"https://github.com/ever-co",url:"https://github.com/ever-co/ever-gauzy",description:"",language:"TypeScript",stars:8590,forks:1297,starup:34},{title:`garrytan /

      gbrain`,owner:"garrytan",name:"gbrain",avatar:"https://avatars.githubusercontent.com/u/19957?s=40&v=4",path:"/garrytan/gbrain",ourl:"https://github.com/garrytan",url:"https://github.com/garrytan/gbrain",description:"",language:"TypeScript",stars:31199,forks:4663,starup:38},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:195270,forks:10304,starup:383},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:24927,forks:3397,starup:142}],"TypeScript-weekly":[{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:79234,forks:9299,starup:3241},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:221437,forks:29630,starup:6857},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:105601,forks:6679,starup:9828},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:72014,forks:6512,starup:5633},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:30038,forks:8065,starup:1778},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:5750,forks:1014,starup:1166},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:41460,forks:5588,starup:4402},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7499,forks:1535,starup:2209},{title:`makecindy /

      cindy`,owner:"makecindy",name:"cindy",avatar:"https://avatars.githubusercontent.com/u/125997726?s=40&v=4",path:"/makecindy/cindy",ourl:"https://github.com/makecindy",url:"https://github.com/makecindy/cindy",description:"",language:"TypeScript",stars:4704,forks:650,starup:756},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:13870,forks:911,starup:2131},{title:`PC2005-cloud /

      dsh-pet`,owner:"PC2005-cloud",name:"dsh-pet",avatar:"https://avatars.githubusercontent.com/u/246970914?s=40&v=4",path:"/PC2005-cloud/dsh-pet",ourl:"https://github.com/PC2005-cloud",url:"https://github.com/PC2005-cloud/dsh-pet",description:"",language:"TypeScript",stars:4097,forks:309,starup:2268},{title:`basketikun /

      infinite-canvas`,owner:"basketikun",name:"infinite-canvas",avatar:"https://avatars.githubusercontent.com/u/114481029?s=40&v=4",path:"/basketikun/infinite-canvas",ourl:"https://github.com/basketikun",url:"https://github.com/basketikun/infinite-canvas",description:"",language:"TypeScript",stars:9117,forks:2131,starup:1362},{title:`microsoft /

      skill-recorder`,owner:"microsoft",name:"skill-recorder",avatar:"https://avatars.githubusercontent.com/u/23707134?s=40&v=4",path:"/microsoft/skill-recorder",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/skill-recorder",description:"",language:"TypeScript",stars:5027,forks:553,starup:650},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:21811,forks:30075,starup:2469},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:36512,forks:3147,starup:1077},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:14010,forks:1399,starup:1729},{title:`NapNeko /

      NapCatQQ`,owner:"NapNeko",name:"NapCatQQ",avatar:"https://avatars.githubusercontent.com/u/61873808?s=40&v=4",path:"/NapNeko/NapCatQQ",ourl:"https://github.com/NapNeko",url:"https://github.com/NapNeko/NapCatQQ",description:"",language:"TypeScript",stars:11515,forks:838,starup:479},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:108380,forks:14835,starup:1078},{title:`ranxianglei /

      billion-context`,owner:"ranxianglei",name:"billion-context",avatar:"https://avatars.githubusercontent.com/u/12445698?s=40&v=4",path:"/ranxianglei/billion-context",ourl:"https://github.com/ranxianglei",url:"https://github.com/ranxianglei/billion-context",description:"",language:"TypeScript",stars:2796,forks:228,starup:919},{title:`humanlayer /

      humanlayer`,owner:"humanlayer",name:"humanlayer",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/humanlayer",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/humanlayer",description:"",language:"TypeScript",stars:12473,forks:1015,starup:758}],"TypeScript-monthly":[{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:72014,forks:6512,starup:18759},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:107223,forks:17815,starup:25709},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:32210,forks:2231,starup:8261},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:14010,forks:1399,starup:5402},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:41460,forks:5588,starup:12538},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:103049,forks:9105,starup:8637},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:30038,forks:8065,starup:6492},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:113916,forks:16395,starup:3457},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:36512,forks:3147,starup:4136},{title:`devdotfast /

      whiteboard`,owner:"devdotfast",name:"whiteboard",avatar:"https://avatars.githubusercontent.com/u/15637532?s=40&v=4",path:"/devdotfast/whiteboard",ourl:"https://github.com/devdotfast",url:"https://github.com/devdotfast/whiteboard",description:"",language:"TypeScript",stars:3348,forks:174,starup:2476},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:67376,forks:5438,starup:6955},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:105601,forks:6679,starup:28069},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/40680?s=40&v=4",path:"/Effect-TS/effect",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect",description:"",language:"TypeScript",stars:17384,forks:875,starup:1225},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:5750,forks:1014,starup:2701},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:21811,forks:30075,starup:7948},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:79234,forks:9299,starup:6302},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7499,forks:1535,starup:3084},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:221437,forks:29630,starup:12613},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:13576,forks:1240,starup:4087},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:13870,forks:911,starup:3809}],"Vue-daily":[{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24715,forks:3023,starup:32},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1799,forks:140,starup:10},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6902,forks:574,starup:2},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3854,forks:1541,starup:7},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22141,forks:1548,starup:17},{title:`ginnnnnncc /

      GinsMooc`,owner:"ginnnnnncc",name:"GinsMooc",avatar:"https://avatars.githubusercontent.com/u/98101754?s=40&v=4",path:"/ginnnnnncc/GinsMooc",ourl:"https://github.com/ginnnnnncc",url:"https://github.com/ginnnnnncc/GinsMooc",description:"",language:"Vue",stars:736,forks:43,starup:6},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:4066,forks:236,starup:19},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:471,forks:71941,starup:1},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40966,forks:5519,starup:15},{title:`tranxuanthang /

      lrcget`,owner:"tranxuanthang",name:"lrcget",avatar:"https://avatars.githubusercontent.com/u/15942946?s=40&v=4",path:"/tranxuanthang/lrcget",ourl:"https://github.com/tranxuanthang",url:"https://github.com/tranxuanthang/lrcget",description:"",language:"Vue",stars:3294,forks:124,starup:7},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33449,forks:4664,starup:14},{title:`zyronon /

      TypeWords`,owner:"zyronon",name:"TypeWords",avatar:"https://avatars.githubusercontent.com/u/19986642?s=40&v=4",path:"/zyronon/TypeWords",ourl:"https://github.com/zyronon",url:"https://github.com/zyronon/TypeWords",description:"",language:"Vue",stars:10537,forks:1277,starup:5},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1247,forks:253,starup:0},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:955,forks:93,starup:3},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17097,forks:1386,starup:25},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90127,forks:30239,starup:2},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54010,forks:14376,starup:1},{title:`wu529778790 /

      panhub.shenzjd.com`,owner:"wu529778790",name:"panhub.shenzjd.com",avatar:"https://avatars.githubusercontent.com/u/11481938?s=40&v=4",path:"/wu529778790/panhub.shenzjd.com",ourl:"https://github.com/wu529778790",url:"https://github.com/wu529778790/panhub.shenzjd.com",description:"",language:"Vue",stars:1770,forks:709,starup:3},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4304,forks:880,starup:3}],"Vue-weekly":[{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6954,forks:433,starup:178},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3339,forks:254,starup:484},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33449,forks:4664,starup:72},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21691,forks:3889,starup:8},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24715,forks:3023,starup:155},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4486,forks:162,starup:50},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6902,forks:574,starup:24},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:22141,forks:1548,starup:73},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1799,forks:140,starup:32},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:471,forks:71941,starup:4},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:955,forks:93,starup:29},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40966,forks:5519,starup:103},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1247,forks:253,starup:3},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54010,forks:14376,starup:9}],"Vue-monthly":[{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3339,forks:254,starup:579},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1799,forks:140,starup:136},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6954,forks:433,starup:624},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33449,forks:4664,starup:230},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:4066,forks:236,starup:1216},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2798,forks:474,starup:77},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17097,forks:1386,starup:364},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24715,forks:3023,starup:564},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26807,forks:1965,starup:300},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2046,forks:527,starup:142},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54010,forks:14376,starup:21},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:686,forks:358,starup:1},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6902,forks:574,starup:87},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2504,forks:291,starup:199},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1247,forks:253,starup:10},{title:`zs1083339604 /

      FaceWinUnlock-Tauri`,owner:"zs1083339604",name:"FaceWinUnlock-Tauri",avatar:"https://avatars.githubusercontent.com/u/41194731?s=40&v=4",path:"/zs1083339604/FaceWinUnlock-Tauri",ourl:"https://github.com/zs1083339604",url:"https://github.com/zs1083339604/FaceWinUnlock-Tauri",description:"",language:"Vue",stars:1997,forks:110,starup:82},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:955,forks:93,starup:72},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3242,forks:5047,starup:10},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40966,forks:5519,starup:379},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7004,forks:349,starup:53}]},mt=z({__name:"index",setup(f){const{view:r,dateRange:o,language:s,color:u}=B(),l=$(()=>b(X[`${s.value}-${o.value}`]));_("color",u),_("data",l);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=F,g=G,m=R,d=q,t=P,e=L,y=K,w=U,E=H;return h(),x("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>T(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:c(s),"onUpdate:modelValue":a[1]||(a[1]=p=>T(s)?s.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:c(r),"onUpdate:modelValue":a[2]||(a[2]=p=>T(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v(Y,{name:"fade-top",mode:"out-in"},{default:S(()=>[c(r)==="list"?(h(),k(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(r)==="table"?(h(),k(y,{key:1,"has-starup":""})):c(r)==="chart"?(h(),k(w,{key:2})):(h(),k(E,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
