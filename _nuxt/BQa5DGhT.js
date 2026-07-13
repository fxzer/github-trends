import D from"./pon-bF1K.js";import B from"./DUEbVYxg.js";import F from"./Dv2JuTzR.js";import L from"./DhX-_a48.js";import P from"./K-lsro91.js";import O from"./IQb13Hr7.js";import q from"./K7A6_03v.js";import{d as _}from"./KQwPfV-1.js";import{s as E,a as V,b as z,u as J,i as K,c as I}from"./BxgL6pVo.js";import{i as T,p as G,a5 as A,D as h,f as C,w as R,S as Y,h as b,a6 as x,T as $,q as S,U as c,d as k,a as W,H as j}from"./uphLTH7k.js";import"./DuDDjivh.js";import"./p2-M2djV.js";import"./DEr5KePT.js";import"./C2c_kpyV.js";import"./Df0Smve2.js";const H=T({__name:"Chart",setup(f){const s=G("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(E),r=V("趋势仓库总指标排行榜",o);function u(i){const a=_(i);a.sort((t,e)=>{const w=t.starup+t.stars+t.forks,y=e.starup+e.stars+e.forks;return w-y});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);r.value.yAxis.data=d,r.value.series[0].data=n,r.value.series[1].data=g,r.value.series[2].data=m}const{domRef:l}=z(r,J);A(s,()=>{u(s.value)},{deep:!0,immediate:!0});const v=`${100+s.value.length*40}px`;return(i,a)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:R({height:v})},null,4))}}),N=Object.assign(H,{__name:"TrendChart"}),X=T({__name:"StarupChart",props:{data:{}},setup(f){const s=f,{data:o}=Y(s),u=V("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=z(u,J);function v(a){const n=_(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:K(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}A(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),C("div",{ref_key:"chartRef",ref:l,style:R({height:i})},null,4))}}),U=Object.assign(X,{__name:"TrendStarupChart"}),Q={"JavaScript-daily":[{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:113698,forks:36431,starup:41},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:118319,forks:36195,starup:85},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:141030,forks:31559,starup:179},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:229023,forks:35111,starup:401},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:30601,forks:5790,starup:36},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2443,forks:314,starup:48},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:246458,forks:51202,starup:103},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:46078,forks:2790,starup:271},{title:`Acode-Foundation /

      Acode`,owner:"Acode-Foundation",name:"Acode",avatar:"https://avatars.githubusercontent.com/u/71929976?s=40&v=4",path:"/Acode-Foundation/Acode",ourl:"https://github.com/Acode-Foundation",url:"https://github.com/Acode-Foundation/Acode",description:"",language:"JavaScript",stars:5975,forks:1275,starup:17},{title:`naptha /

      tesseract.js`,owner:"naptha",name:"tesseract.js",avatar:"https://avatars.githubusercontent.com/u/5723124?s=40&v=4",path:"/naptha/tesseract.js",ourl:"https://github.com/naptha",url:"https://github.com/naptha/tesseract.js",description:"",language:"JavaScript",stars:38433,forks:2370,starup:149},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:18003,forks:1067,starup:234},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/22141172?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:12202,forks:17609,starup:34},{title:`venera-app /

      venera-configs`,owner:"venera-app",name:"venera-configs",avatar:"https://avatars.githubusercontent.com/u/67669799?s=40&v=4",path:"/venera-app/venera-configs",ourl:"https://github.com/venera-app",url:"https://github.com/venera-app/venera-configs",description:"",language:"JavaScript",stars:708,forks:162,starup:2},{title:`4ian /

      GDevelop`,owner:"4ian",name:"GDevelop",avatar:"https://avatars.githubusercontent.com/u/1280130?s=40&v=4",path:"/4ian/GDevelop",ourl:"https://github.com/4ian",url:"https://github.com/4ian/GDevelop",description:"",language:"JavaScript",stars:24653,forks:1456,starup:70},{title:`johnfactotum /

      foliate`,owner:"johnfactotum",name:"foliate",avatar:"https://avatars.githubusercontent.com/u/50942278?s=40&v=4",path:"/johnfactotum/foliate",ourl:"https://github.com/johnfactotum",url:"https://github.com/johnfactotum/foliate",description:"",language:"JavaScript",stars:8546,forks:406,starup:8},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:10298,forks:3744,starup:20}],"JavaScript-weekly":[{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:28162,forks:1843,starup:2803},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:56858,forks:9402,starup:7155},{title:`tt-a1i /

      archify`,owner:"tt-a1i",name:"archify",avatar:"https://avatars.githubusercontent.com/u/53142663?s=40&v=4",path:"/tt-a1i/archify",ourl:"https://github.com/tt-a1i",url:"https://github.com/tt-a1i/archify",description:"",language:"JavaScript",stars:4001,forks:379,starup:1180},{title:`JuliusBrussee /

      caveman`,owner:"JuliusBrussee",name:"caveman",avatar:"https://avatars.githubusercontent.com/u/104168679?s=40&v=4",path:"/JuliusBrussee/caveman",ourl:"https://github.com/JuliusBrussee",url:"https://github.com/JuliusBrussee/caveman",description:"",language:"JavaScript",stars:88682,forks:5093,starup:3992},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:46078,forks:2790,starup:2272},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:77663,forks:8343,starup:8072},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:62607,forks:4427,starup:5195},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:21953,forks:3703,starup:1972},{title:`webtorrent /

      webtorrent`,owner:"webtorrent",name:"webtorrent",avatar:"https://avatars.githubusercontent.com/u/121766?s=40&v=4",path:"/webtorrent/webtorrent",ourl:"https://github.com/webtorrent",url:"https://github.com/webtorrent/webtorrent",description:"",language:"JavaScript",stars:31390,forks:2979,starup:359},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:141030,forks:31559,starup:910},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27507,forks:5190,starup:123},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52232,forks:4921,starup:147},{title:`fbsamples /

      whatsapp-business-jaspers-market`,owner:"fbsamples",name:"whatsapp-business-jaspers-market",avatar:"https://avatars.githubusercontent.com/u/6422482?s=40&v=4",path:"/fbsamples/whatsapp-business-jaspers-market",ourl:"https://github.com/fbsamples",url:"https://github.com/fbsamples/whatsapp-business-jaspers-market",description:"",language:"JavaScript",stars:591,forks:543,starup:96},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36796,forks:2935,starup:198},{title:`GargantuaX /

      gemini-watermark-remover`,owner:"GargantuaX",name:"gemini-watermark-remover",avatar:"https://avatars.githubusercontent.com/u/14013111?s=40&v=4",path:"/GargantuaX/gemini-watermark-remover",ourl:"https://github.com/GargantuaX",url:"https://github.com/GargantuaX/gemini-watermark-remover",description:"",language:"JavaScript",stars:4901,forks:740,starup:216},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:118319,forks:36195,starup:518},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2443,forks:314,starup:327},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/3676859?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:28993,forks:2597,starup:300},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65946,forks:9508,starup:132}],"JavaScript-monthly":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:56858,forks:9402,starup:14973},{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:4517,forks:662,starup:1648},{title:`openai /

      codex-plugin-cc`,owner:"openai",name:"codex-plugin-cc",avatar:"https://avatars.githubusercontent.com/u/200841172?s=40&v=4",path:"/openai/codex-plugin-cc",ourl:"https://github.com/openai",url:"https://github.com/openai/codex-plugin-cc",description:"",language:"JavaScript",stars:28162,forks:1843,starup:7365},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:62607,forks:4427,starup:20518},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:46078,forks:2790,starup:8299},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69366,forks:24273,starup:606},{title:`worldwonderer /

      oh-story-claudecode`,owner:"worldwonderer",name:"oh-story-claudecode",avatar:"https://avatars.githubusercontent.com/u/49583093?s=40&v=4",path:"/worldwonderer/oh-story-claudecode",ourl:"https://github.com/worldwonderer",url:"https://github.com/worldwonderer/oh-story-claudecode",description:"",language:"JavaScript",stars:4017,forks:632,starup:1688},{title:`fbsamples /

      whatsapp-business-jaspers-market`,owner:"fbsamples",name:"whatsapp-business-jaspers-market",avatar:"https://avatars.githubusercontent.com/u/6422482?s=40&v=4",path:"/fbsamples/whatsapp-business-jaspers-market",ourl:"https://github.com/fbsamples",url:"https://github.com/fbsamples/whatsapp-business-jaspers-market",description:"",language:"JavaScript",stars:591,forks:543,starup:152},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52232,forks:4921,starup:392},{title:`ilysenko /

      codex-desktop-linux`,owner:"ilysenko",name:"codex-desktop-linux",avatar:"https://avatars.githubusercontent.com/u/2592112?s=40&v=4",path:"/ilysenko/codex-desktop-linux",ourl:"https://github.com/ilysenko",url:"https://github.com/ilysenko/codex-desktop-linux",description:"",language:"JavaScript",stars:2443,forks:314,starup:911},{title:`drawdb-io /

      drawdb`,owner:"drawdb-io",name:"drawdb",avatar:"https://avatars.githubusercontent.com/u/96800776?s=40&v=4",path:"/drawdb-io/drawdb",ourl:"https://github.com/drawdb-io",url:"https://github.com/drawdb-io/drawdb",description:"",language:"JavaScript",stars:38053,forks:3082,starup:742},{title:`FB208 /

      OpenBidKit_Yibiao`,owner:"FB208",name:"OpenBidKit_Yibiao",avatar:"https://avatars.githubusercontent.com/u/8197476?s=40&v=4",path:"/FB208/OpenBidKit_Yibiao",ourl:"https://github.com/FB208",url:"https://github.com/FB208/OpenBidKit_Yibiao",description:"",language:"JavaScript",stars:1315,forks:356,starup:521},{title:`iptv-org /

      database`,owner:"iptv-org",name:"database",avatar:"https://avatars.githubusercontent.com/u/5572928?s=40&v=4",path:"/iptv-org/database",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/database",description:"",language:"JavaScript",stars:1542,forks:586,starup:141},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:52455,forks:10587,starup:658},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36796,forks:2935,starup:638}],"TypeScript-daily":[{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8059,forks:992,starup:210},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:33921,forks:3401,starup:125},{title:`ColeMurray /

      background-agents`,owner:"ColeMurray",name:"background-agents",avatar:"https://avatars.githubusercontent.com/u/2492022?s=40&v=4",path:"/ColeMurray/background-agents",ourl:"https://github.com/ColeMurray",url:"https://github.com/ColeMurray/background-agents",description:"",language:"TypeScript",stars:2328,forks:345,starup:16},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:13813,forks:2898,starup:75},{title:`toeverything /

      AFFiNE`,owner:"toeverything",name:"AFFiNE",avatar:"https://avatars.githubusercontent.com/u/14026360?s=40&v=4",path:"/toeverything/AFFiNE",ourl:"https://github.com/toeverything",url:"https://github.com/toeverything/AFFiNE",description:"",language:"TypeScript",stars:70382,forks:5050,starup:39},{title:`nexmoe /

      VidBee`,owner:"nexmoe",name:"VidBee",avatar:"https://avatars.githubusercontent.com/u/16796652?s=40&v=4",path:"/nexmoe/VidBee",ourl:"https://github.com/nexmoe",url:"https://github.com/nexmoe/VidBee",description:"",language:"TypeScript",stars:9901,forks:764,starup:85},{title:`dreamhunter2333 /

      cloudflare_temp_email`,owner:"dreamhunter2333",name:"cloudflare_temp_email",avatar:"https://avatars.githubusercontent.com/u/32295532?s=40&v=4",path:"/dreamhunter2333/cloudflare_temp_email",ourl:"https://github.com/dreamhunter2333",url:"https://github.com/dreamhunter2333/cloudflare_temp_email",description:"",language:"TypeScript",stars:10356,forks:6879,starup:32},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:64214,forks:7605,starup:142},{title:`gitroomhq /

      postiz-app`,owner:"gitroomhq",name:"postiz-app",avatar:"https://avatars.githubusercontent.com/u/100117126?s=40&v=4",path:"/gitroomhq/postiz-app",ourl:"https://github.com/gitroomhq",url:"https://github.com/gitroomhq/postiz-app",description:"",language:"TypeScript",stars:33165,forks:6188,starup:127},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:34561,forks:3247,starup:164},{title:`louislam /

      dockge`,owner:"louislam",name:"dockge",avatar:"https://avatars.githubusercontent.com/u/1336778?s=40&v=4",path:"/louislam/dockge",ourl:"https://github.com/louislam",url:"https://github.com/louislam/dockge",description:"",language:"TypeScript",stars:23780,forks:784,starup:17},{title:`InsForge /

      InsForge`,owner:"InsForge",name:"InsForge",avatar:"https://avatars.githubusercontent.com/u/32749865?s=40&v=4",path:"/InsForge/InsForge",ourl:"https://github.com/InsForge",url:"https://github.com/InsForge/InsForge",description:"",language:"TypeScript",stars:12237,forks:1060,starup:32},{title:`angular /

      angular`,owner:"angular",name:"angular",avatar:"https://avatars.githubusercontent.com/u/8604205?s=40&v=4",path:"/angular/angular",ourl:"https://github.com/angular",url:"https://github.com/angular/angular",description:"",language:"TypeScript",stars:100623,forks:27503,starup:36},{title:`Infisical /

      infisical`,owner:"Infisical",name:"infisical",avatar:"https://avatars.githubusercontent.com/u/62331820?s=40&v=4",path:"/Infisical/infisical",ourl:"https://github.com/Infisical",url:"https://github.com/Infisical/infisical",description:"",language:"TypeScript",stars:27907,forks:2089,starup:61},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:132670,forks:7569,starup:270},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",ourl:"https://github.com/cypress-io",url:"https://github.com/cypress-io/cypress",description:"",language:"TypeScript",stars:50676,forks:3595,starup:109},{title:`RocketChat /

      Rocket.Chat`,owner:"RocketChat",name:"Rocket.Chat",avatar:"https://avatars.githubusercontent.com/u/1000217?s=40&v=4",path:"/RocketChat/Rocket.Chat",ourl:"https://github.com/RocketChat",url:"https://github.com/RocketChat/Rocket.Chat",description:"",language:"TypeScript",stars:45780,forks:13724,starup:11},{title:`cloudflare /

      skills`,owner:"cloudflare",name:"skills",avatar:"https://avatars.githubusercontent.com/u/18544?s=40&v=4",path:"/cloudflare/skills",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/skills",description:"",language:"TypeScript",stars:2126,forks:193,starup:6},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxt",description:"",language:"TypeScript",stars:60767,forks:5844,starup:67},{title:`google-gemini /

      gemini-cli`,owner:"google-gemini",name:"gemini-cli",avatar:"https://avatars.githubusercontent.com/u/13950003?s=40&v=4",path:"/google-gemini/gemini-cli",ourl:"https://github.com/google-gemini",url:"https://github.com/google-gemini/gemini-cli",description:"",language:"TypeScript",stars:105943,forks:14248,starup:34}],"TypeScript-weekly":[{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8059,forks:992,starup:1678},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:16368,forks:2492,starup:4506},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:17407,forks:1370,starup:4481},{title:`facebook /

      astryx`,owner:"facebook",name:"astryx",avatar:"https://avatars.githubusercontent.com/u/2781099?s=40&v=4",path:"/facebook/astryx",ourl:"https://github.com/facebook",url:"https://github.com/facebook/astryx",description:"",language:"TypeScript",stars:8310,forks:697,starup:2397},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:26289,forks:2417,starup:2666},{title:`ChromeDevTools /

      chrome-devtools-mcp`,owner:"ChromeDevTools",name:"chrome-devtools-mcp",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/ChromeDevTools/chrome-devtools-mcp",ourl:"https://github.com/ChromeDevTools",url:"https://github.com/ChromeDevTools/chrome-devtools-mcp",description:"",language:"TypeScript",stars:46796,forks:3203,starup:872},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:8710,forks:798,starup:2230},{title:`actions /

      checkout`,owner:"actions",name:"checkout",avatar:"https://avatars.githubusercontent.com/u/12102068?s=40&v=4",path:"/actions/checkout",ourl:"https://github.com/actions",url:"https://github.com/actions/checkout",description:"",language:"TypeScript",stars:8489,forks:2719,starup:186},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:40909,forks:4938,starup:2945},{title:`mauriceboe /

      TREK`,owner:"mauriceboe",name:"TREK",avatar:"https://avatars.githubusercontent.com/u/61554723?s=40&v=4",path:"/mauriceboe/TREK",ourl:"https://github.com/mauriceboe",url:"https://github.com/mauriceboe/TREK",description:"",language:"TypeScript",stars:10229,forks:971,starup:981},{title:`prisma /

      prisma`,owner:"prisma",name:"prisma",avatar:"https://avatars.githubusercontent.com/u/1094804?s=40&v=4",path:"/prisma/prisma",ourl:"https://github.com/prisma",url:"https://github.com/prisma/prisma",description:"",language:"TypeScript",stars:47333,forks:2478,starup:1040},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:27995,forks:4105,starup:2204},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:7294,forks:960,starup:877},{title:`ArnasDon /

      wacrm`,owner:"ArnasDon",name:"wacrm",avatar:"https://avatars.githubusercontent.com/u/61235555?s=40&v=4",path:"/ArnasDon/wacrm",ourl:"https://github.com/ArnasDon",url:"https://github.com/ArnasDon/wacrm",description:"",language:"TypeScript",stars:1512,forks:3882,starup:171},{title:`microsoft /

      TypeScript`,owner:"microsoft",name:"TypeScript",avatar:"https://avatars.githubusercontent.com/u/4226954?s=40&v=4",path:"/microsoft/TypeScript",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/TypeScript",description:"",language:"TypeScript",stars:109881,forks:13648,starup:521},{title:`microsoft /

      flint-chart`,owner:"microsoft",name:"flint-chart",avatar:"https://avatars.githubusercontent.com/u/93549116?s=40&v=4",path:"/microsoft/flint-chart",ourl:"https://github.com/microsoft",url:"https://github.com/microsoft/flint-chart",description:"",language:"TypeScript",stars:1440,forks:62,starup:1061},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/8104246?s=40&v=4",path:"/nrwl/nx",ourl:"https://github.com/nrwl",url:"https://github.com/nrwl/nx",description:"",language:"TypeScript",stars:29167,forks:2929,starup:139},{title:`shadcn-ui /

      ui`,owner:"shadcn-ui",name:"ui",avatar:"https://avatars.githubusercontent.com/u/124599?s=40&v=4",path:"/shadcn-ui/ui",ourl:"https://github.com/shadcn-ui",url:"https://github.com/shadcn-ui/ui",description:"",language:"TypeScript",stars:118955,forks:9487,starup:830},{title:`nestjs /

      nest`,owner:"nestjs",name:"nest",avatar:"https://avatars.githubusercontent.com/u/23244943?s=40&v=4",path:"/nestjs/nest",ourl:"https://github.com/nestjs",url:"https://github.com/nestjs/nest",description:"",language:"TypeScript",stars:76244,forks:8450,starup:235}],"TypeScript-monthly":[{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:17407,forks:1370,starup:12079},{title:`diegosouzapw /

      OmniRoute`,owner:"diegosouzapw",name:"OmniRoute",avatar:"https://avatars.githubusercontent.com/u/8016841?s=40&v=4",path:"/diegosouzapw/OmniRoute",ourl:"https://github.com/diegosouzapw",url:"https://github.com/diegosouzapw/OmniRoute",description:"",language:"TypeScript",stars:16368,forks:2492,starup:10055},{title:`alibaba /

      page-agent`,owner:"alibaba",name:"page-agent",avatar:"https://avatars.githubusercontent.com/u/10131203?s=40&v=4",path:"/alibaba/page-agent",ourl:"https://github.com/alibaba",url:"https://github.com/alibaba/page-agent",description:"",language:"TypeScript",stars:26289,forks:2417,starup:7797},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:132670,forks:7569,starup:15178},{title:`mauriceboe /

      TREK`,owner:"mauriceboe",name:"TREK",avatar:"https://avatars.githubusercontent.com/u/61554723?s=40&v=4",path:"/mauriceboe/TREK",ourl:"https://github.com/mauriceboe",url:"https://github.com/mauriceboe/TREK",description:"",language:"TypeScript",stars:10229,forks:971,starup:4546},{title:`JCodesMore /

      ai-website-cloner-template`,owner:"JCodesMore",name:"ai-website-cloner-template",avatar:"https://avatars.githubusercontent.com/u/182581310?s=40&v=4",path:"/JCodesMore/ai-website-cloner-template",ourl:"https://github.com/JCodesMore",url:"https://github.com/JCodesMore/ai-website-cloner-template",description:"",language:"TypeScript",stars:27995,forks:4105,starup:11250},{title:`wonderwhy-er /

      DesktopCommanderMCP`,owner:"wonderwhy-er",name:"DesktopCommanderMCP",avatar:"https://avatars.githubusercontent.com/u/1150639?s=40&v=4",path:"/wonderwhy-er/DesktopCommanderMCP",ourl:"https://github.com/wonderwhy-er",url:"https://github.com/wonderwhy-er/DesktopCommanderMCP",description:"",language:"TypeScript",stars:8059,forks:992,starup:1814},{title:`jamiepine /

      voicebox`,owner:"jamiepine",name:"voicebox",avatar:"https://avatars.githubusercontent.com/u/32987599?s=40&v=4",path:"/jamiepine/voicebox",ourl:"https://github.com/jamiepine",url:"https://github.com/jamiepine/voicebox",description:"",language:"TypeScript",stars:40909,forks:4938,starup:11200},{title:`ArnasDon /

      wacrm`,owner:"ArnasDon",name:"wacrm",avatar:"https://avatars.githubusercontent.com/u/61235555?s=40&v=4",path:"/ArnasDon/wacrm",ourl:"https://github.com/ArnasDon",url:"https://github.com/ArnasDon/wacrm",description:"",language:"TypeScript",stars:1512,forks:3882,starup:669},{title:`kunchenguid /

      gnhf`,owner:"kunchenguid",name:"gnhf",avatar:"https://avatars.githubusercontent.com/u/3233006?s=40&v=4",path:"/kunchenguid/gnhf",ourl:"https://github.com/kunchenguid",url:"https://github.com/kunchenguid/gnhf",description:"",language:"TypeScript",stars:3180,forks:229,starup:1155},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:14121,forks:1103,starup:1993},{title:`OpenCut-app /

      OpenCut`,owner:"OpenCut-app",name:"OpenCut",avatar:"https://avatars.githubusercontent.com/u/167211895?s=40&v=4",path:"/OpenCut-app/OpenCut",ourl:"https://github.com/OpenCut-app",url:"https://github.com/OpenCut-app/OpenCut",description:"",language:"TypeScript",stars:63934,forks:6854,starup:8238},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:35546,forks:4113,starup:6237},{title:`google-labs-code /

      stitch-skills`,owner:"google-labs-code",name:"stitch-skills",avatar:"https://avatars.githubusercontent.com/u/43076783?s=40&v=4",path:"/google-labs-code/stitch-skills",ourl:"https://github.com/google-labs-code",url:"https://github.com/google-labs-code/stitch-skills",description:"",language:"TypeScript",stars:7294,forks:960,starup:1289},{title:`Kong /

      insomnia`,owner:"Kong",name:"insomnia",avatar:"https://avatars.githubusercontent.com/u/587576?s=40&v=4",path:"/Kong/insomnia",ourl:"https://github.com/Kong",url:"https://github.com/Kong/insomnia",description:"",language:"TypeScript",stars:39890,forks:2353,starup:1490},{title:`makeplane /

      plane`,owner:"makeplane",name:"plane",avatar:"https://avatars.githubusercontent.com/u/121005188?s=40&v=4",path:"/makeplane/plane",ourl:"https://github.com/makeplane",url:"https://github.com/makeplane/plane",description:"",language:"TypeScript",stars:54366,forks:4964,starup:3777},{title:`every-app /

      open-seo`,owner:"every-app",name:"open-seo",avatar:"https://avatars.githubusercontent.com/u/44480372?s=40&v=4",path:"/every-app/open-seo",ourl:"https://github.com/every-app",url:"https://github.com/every-app/open-seo",description:"",language:"TypeScript",stars:4274,forks:487,starup:2112},{title:`Chocobozzz /

      PeerTube`,owner:"Chocobozzz",name:"PeerTube",avatar:"https://avatars.githubusercontent.com/u/5180488?s=40&v=4",path:"/Chocobozzz/PeerTube",ourl:"https://github.com/Chocobozzz",url:"https://github.com/Chocobozzz/PeerTube",description:"",language:"TypeScript",stars:15235,forks:1920,starup:493},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:150036,forks:8580,starup:18602}],"Vue-daily":[{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3744,forks:764,starup:6},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:1879,forks:116,starup:9},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21816,forks:1032,starup:21},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:413,forks:51759,starup:0},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:16092,forks:1318,starup:17},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39769,forks:5177,starup:13},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3408,forks:506,starup:2},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2954,forks:1214,starup:5},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3233,forks:868,starup:3},{title:`laoshuikaixue /

      VoiceHub`,owner:"laoshuikaixue",name:"VoiceHub",avatar:"https://avatars.githubusercontent.com/u/79132480?s=40&v=4",path:"/laoshuikaixue/VoiceHub",ourl:"https://github.com/laoshuikaixue",url:"https://github.com/laoshuikaixue/VoiceHub",description:"",language:"Vue",stars:153,forks:88,starup:0},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3228,forks:5036,starup:2},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:680,forks:90,starup:7},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3684,forks:96,starup:10},{title:`OpenListTeam /

      OpenList-Desktop`,owner:"OpenListTeam",name:"OpenList-Desktop",avatar:"https://avatars.githubusercontent.com/u/96409857?s=40&v=4",path:"/OpenListTeam/OpenList-Desktop",ourl:"https://github.com/OpenListTeam",url:"https://github.com/OpenListTeam/OpenList-Desktop",description:"",language:"Vue",stars:1294,forks:63,starup:2},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2583,forks:385,starup:2},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2139,forks:475,starup:35},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1227,forks:245,starup:1},{title:`fjykTec /

      ModernWMS`,owner:"fjykTec",name:"ModernWMS",avatar:"https://avatars.githubusercontent.com/u/58218510?s=40&v=4",path:"/fjykTec/ModernWMS",ourl:"https://github.com/fjykTec",url:"https://github.com/fjykTec/ModernWMS",description:"",language:"Vue",stars:1602,forks:439,starup:1},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1456,forks:114,starup:3},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6626,forks:527,starup:0},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32895,forks:8868,starup:7}],"Vue-weekly":[{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25828,forks:1892,starup:129},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3744,forks:764,starup:76},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:413,forks:51759,starup:3},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1596,forks:431,starup:42},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2583,forks:385,starup:15},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21816,forks:1032,starup:115},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11475,forks:920,starup:25},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32895,forks:8868,starup:72},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39769,forks:5177,starup:116},{title:`TeamPiped /

      Piped`,owner:"TeamPiped",name:"Piped",avatar:"https://avatars.githubusercontent.com/u/20838718?s=40&v=4",path:"/TeamPiped/Piped",ourl:"https://github.com/TeamPiped",url:"https://github.com/TeamPiped/Piped",description:"",language:"Vue",stars:10106,forks:871,starup:27},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21473,forks:2335,starup:28},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:3684,forks:96,starup:51},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3233,forks:868,starup:13},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2310,forks:317,starup:70},{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:680,forks:90,starup:28},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6658,forks:2490,starup:11},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90252,forks:30409,starup:21},{title:`ys-ll /

      uniterm`,owner:"ys-ll",name:"uniterm",avatar:"https://avatars.githubusercontent.com/u/114486081?s=40&v=4",path:"/ys-ll/uniterm",ourl:"https://github.com/ys-ll",url:"https://github.com/ys-ll/uniterm",description:"",language:"Vue",stars:142,forks:12,starup:70},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33031,forks:4695,starup:39},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6626,forks:527,starup:20},{title:`inovector /

      mixpost`,owner:"inovector",name:"mixpost",avatar:"https://avatars.githubusercontent.com/u/3392129?s=40&v=4",path:"/inovector/mixpost",ourl:"https://github.com/inovector",url:"https://github.com/inovector/mixpost",description:"",language:"Vue",stars:3408,forks:506,starup:25},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:1879,forks:116,starup:127},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:273,forks:351,starup:2}],"Vue-monthly":[{title:`FoggedLens /

      deflock`,owner:"FoggedLens",name:"deflock",avatar:"https://avatars.githubusercontent.com/u/17725066?s=40&v=4",path:"/FoggedLens/deflock",ourl:"https://github.com/FoggedLens",url:"https://github.com/FoggedLens/deflock",description:"",language:"Vue",stars:680,forks:90,starup:91},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6626,forks:527,starup:89},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25828,forks:1892,starup:497},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2954,forks:1214,starup:131},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3744,forks:764,starup:212},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:1879,forks:116,starup:241},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:3051,forks:1392,starup:75},{title:`tiny-craft /

      tiny-rdm`,owner:"tiny-craft",name:"tiny-rdm",avatar:"https://avatars.githubusercontent.com/u/137850705?s=40&v=4",path:"/tiny-craft/tiny-rdm",ourl:"https://github.com/tiny-craft",url:"https://github.com/tiny-craft/tiny-rdm",description:"",language:"Vue",stars:12943,forks:655,starup:116},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:1596,forks:431,starup:131},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32895,forks:8868,starup:320},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14483,forks:1746,starup:71},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2185,forks:174,starup:184},{title:`frappe /

      builder`,owner:"frappe",name:"builder",avatar:"https://avatars.githubusercontent.com/u/13928957?s=40&v=4",path:"/frappe/builder",ourl:"https://github.com/frappe",url:"https://github.com/frappe/builder",description:"",language:"Vue",stars:2139,forks:475,starup:93},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:413,forks:51759,starup:26},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11475,forks:920,starup:98},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39769,forks:5177,starup:526},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28586,forks:3268,starup:176},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2310,forks:317,starup:240}]},mt=T({__name:"index",setup(f){const{view:s,dateRange:o,language:r,color:u}=I(),l=W(()=>v(Q[`${r.value}-${o.value}`]));j("color",u),j("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=D,g=B,m=F,d=L,t=P,e=O,w=q,y=N,M=U;return h(),C("div",null,[b(d,null,{default:x(()=>[b(n,{modelValue:c(o),"onUpdate:modelValue":a[0]||(a[0]=p=>S(o)?o.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:c(r),"onUpdate:modelValue":a[1]||(a[1]=p=>S(r)?r.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:c(s),"onUpdate:modelValue":a[2]||(a[2]=p=>S(s)?s.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:x(()=>[c(s)==="list"?(h(),k(e,{key:0},{icons:x(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):c(s)==="table"?(h(),k(w,{key:1,"has-starup":""})):c(s)==="chart"?(h(),k(y,{key:2})):(h(),k(M,{key:3,data:c(l)},null,8,["data"]))]),_:1})])}}});export{mt as default};
