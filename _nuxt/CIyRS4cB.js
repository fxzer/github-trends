import M from"./_68ZvPa8.js";import O from"./re0EbH5m.js";import K from"./Cz67_M8j.js";import D from"./Bxg7It5Q.js";import B from"./Bne0hLFi.js";import R from"./C6SC0-Dn.js";import E from"./1z-ALdfI.js";import{d as A}from"./KQwPfV-1.js";import{s as I,a as j,b as V,u as J,i as W,c as q}from"./ByHrBa5m.js";import{i as T,p as P,a5 as z,D as c,f as _,w as F,S as H,h as b,a6 as S,T as $,q as x,U as h,d as f,a as L,H as C}from"./NVgPOHRi.js";import"./DDwofcuJ.js";import"./p2-M2djV.js";import"./B0czZmmB.js";import"./k5kXIchl.js";import"./BITi0b2V.js";const Z=T({__name:"Chart",setup(k){const r=P("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(I),s=j("趋势仓库总指标排行榜",o);function u(i){const a=A(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,m,g,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=m,s.value.series[2].data=g}const{domRef:l}=V(s,J);z(r,()=>{u(r.value)},{deep:!0,immediate:!0});const v=`${100+r.value.length*40}px`;return(i,a)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:F({height:v})},null,4))}}),U=Object.assign(Z,{__name:"TrendChart"}),N=T({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=H(r),u=j("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:l}=V(u,J);function v(a){const n=A(a);n.sort((t,e)=>t.starup-e.starup);const m=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],g=[],d=n.map((t,e)=>(g.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:W(m[e%m.length])}));u.value.series[0].data=d,u.value.yAxis.data=g}z(o,()=>{v(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(c(),_("div",{ref_key:"chartRef",ref:l,style:F({height:i})},null,4))}}),X=Object.assign(N,{__name:"TrendStarupChart"}),Y={"JavaScript-daily":[{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:42133,forks:6996,starup:130},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:117769,forks:35684,starup:27},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52018,forks:4742,starup:16},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65815,forks:9352,starup:21},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27326,forks:5023,starup:9},{title:`sigalor /

      whatsapp-web-reveng`,owner:"sigalor",name:"whatsapp-web-reveng",avatar:"https://avatars.githubusercontent.com/u/12279340?s=40&v=4",path:"/sigalor/whatsapp-web-reveng",ourl:"https://github.com/sigalor",url:"https://github.com/sigalor/whatsapp-web-reveng",description:"",language:"JavaScript",stars:6475,forks:844,starup:22},{title:`technomancer702 /

      nodecast-tv`,owner:"technomancer702",name:"nodecast-tv",avatar:"https://avatars.githubusercontent.com/u/20826180?s=40&v=4",path:"/technomancer702/nodecast-tv",ourl:"https://github.com/technomancer702",url:"https://github.com/technomancer702/nodecast-tv",description:"",language:"JavaScript",stars:1337,forks:182,starup:49},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:27510,forks:2580,starup:60},{title:`NARKOZ /

      hacker-scripts`,owner:"NARKOZ",name:"hacker-scripts",avatar:"https://avatars.githubusercontent.com/u/253398?s=40&v=4",path:"/NARKOZ/hacker-scripts",ourl:"https://github.com/NARKOZ",url:"https://github.com/NARKOZ/hacker-scripts",description:"",language:"JavaScript",stars:49722,forks:6662,starup:62},{title:`gorhill /

      uBlock`,owner:"gorhill",name:"uBlock",avatar:"https://avatars.githubusercontent.com/u/585534?s=40&v=4",path:"/gorhill/uBlock",ourl:"https://github.com/gorhill",url:"https://github.com/gorhill/uBlock",description:"",language:"JavaScript",stars:65473,forks:4167,starup:32},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:53933,forks:11710,starup:19},{title:`handsontable /

      handsontable`,owner:"handsontable",name:"handsontable",avatar:"https://avatars.githubusercontent.com/u/566463?s=40&v=4",path:"/handsontable/handsontable",ourl:"https://github.com/handsontable",url:"https://github.com/handsontable/handsontable",description:"",language:"JavaScript",stars:21932,forks:3190,starup:3},{title:`Anil-matcha /

      Open-Generative-AI`,owner:"Anil-matcha",name:"Open-Generative-AI",avatar:"https://avatars.githubusercontent.com/u/4326215?s=40&v=4",path:"/Anil-matcha/Open-Generative-AI",ourl:"https://github.com/Anil-matcha",url:"https://github.com/Anil-matcha/Open-Generative-AI",description:"",language:"JavaScript",stars:19298,forks:3291,starup:116},{title:`fanmingming /

      live`,owner:"fanmingming",name:"live",avatar:"https://avatars.githubusercontent.com/u/4993993?s=40&v=4",path:"/fanmingming/live",ourl:"https://github.com/fanmingming",url:"https://github.com/fanmingming/live",description:"",language:"JavaScript",stars:28135,forks:4205,starup:14},{title:`sohzm /

      cheating-daddy`,owner:"sohzm",name:"cheating-daddy",avatar:"https://avatars.githubusercontent.com/u/68921363?s=40&v=4",path:"/sohzm/cheating-daddy",ourl:"https://github.com/sohzm",url:"https://github.com/sohzm/cheating-daddy",description:"",language:"JavaScript",stars:5361,forks:920,starup:4},{title:`aandrew-me /

      ytDownloader`,owner:"aandrew-me",name:"ytDownloader",avatar:"https://avatars.githubusercontent.com/u/66430340?s=40&v=4",path:"/aandrew-me/ytDownloader",ourl:"https://github.com/aandrew-me",url:"https://github.com/aandrew-me/ytDownloader",description:"",language:"JavaScript",stars:9759,forks:880,starup:34}],"JavaScript-weekly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:3009,forks:352,starup:1298},{title:`santifer /

      career-ops`,owner:"santifer",name:"career-ops",avatar:"https://avatars.githubusercontent.com/u/256850418?s=40&v=4",path:"/santifer/career-ops",ourl:"https://github.com/santifer",url:"https://github.com/santifer/career-ops",description:"",language:"JavaScript",stars:53676,forks:10684,starup:4499},{title:`asgeirtj /

      system_prompts_leaks`,owner:"asgeirtj",name:"system_prompts_leaks",avatar:"https://avatars.githubusercontent.com/u/27446620?s=40&v=4",path:"/asgeirtj/system_prompts_leaks",ourl:"https://github.com/asgeirtj",url:"https://github.com/asgeirtj/system_prompts_leaks",description:"",language:"JavaScript",stars:42133,forks:6996,starup:664},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52018,forks:4742,starup:98},{title:`fastify /

      fastify`,owner:"fastify",name:"fastify",avatar:"https://avatars.githubusercontent.com/u/4865608?s=40&v=4",path:"/fastify/fastify",ourl:"https://github.com/fastify",url:"https://github.com/fastify/fastify",description:"",language:"JavaScript",stars:36488,forks:2729,starup:94},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42835,forks:1571,starup:273},{title:`webpack /

      webpack`,owner:"webpack",name:"webpack",avatar:"https://avatars.githubusercontent.com/u/1365881?s=40&v=4",path:"/webpack/webpack",ourl:"https://github.com/webpack",url:"https://github.com/webpack/webpack",description:"",language:"JavaScript",stars:65815,forks:9352,starup:61},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:38272,forks:2108,starup:2994},{title:`expressjs /

      express`,owner:"expressjs",name:"express",avatar:"https://avatars.githubusercontent.com/u/25254?s=40&v=4",path:"/expressjs/express",ourl:"https://github.com/expressjs",url:"https://github.com/expressjs/express",description:"",language:"JavaScript",stars:69175,forks:23682,starup:103},{title:`blackmatrix7 /

      ios_rule_script`,owner:"blackmatrix7",name:"ios_rule_script",avatar:"https://avatars.githubusercontent.com/u/27717518?s=40&v=4",path:"/blackmatrix7/ios_rule_script",ourl:"https://github.com/blackmatrix7",url:"https://github.com/blackmatrix7/ios_rule_script",description:"",language:"JavaScript",stars:26762,forks:3988,starup:332},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:245843,forks:51055,starup:310},{title:`eslint /

      eslint`,owner:"eslint",name:"eslint",avatar:"https://avatars.githubusercontent.com/u/38546?s=40&v=4",path:"/eslint/eslint",ourl:"https://github.com/eslint",url:"https://github.com/eslint/eslint",description:"",language:"JavaScript",stars:27326,forks:5023,starup:45},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:113044,forks:36382,starup:184},{title:`CodeWithHarry /

      Sigma-Web-Dev-Course`,owner:"CodeWithHarry",name:"Sigma-Web-Dev-Course",avatar:"https://avatars.githubusercontent.com/u/48705673?s=40&v=4",path:"/CodeWithHarry/Sigma-Web-Dev-Course",ourl:"https://github.com/CodeWithHarry",url:"https://github.com/CodeWithHarry/Sigma-Web-Dev-Course",description:"",language:"JavaScript",stars:11485,forks:3061,starup:69},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87237,forks:4945,starup:372},{title:`FortAwesome /

      Font-Awesome`,owner:"FortAwesome",name:"Font-Awesome",avatar:"https://avatars.githubusercontent.com/u/529604?s=40&v=4",path:"/FortAwesome/Font-Awesome",ourl:"https://github.com/FortAwesome",url:"https://github.com/FortAwesome/Font-Awesome",description:"",language:"JavaScript",stars:76666,forks:12206,starup:46},{title:`googleapis /

      google-cloud-node`,owner:"googleapis",name:"google-cloud-node",avatar:"https://avatars.githubusercontent.com/u/44816363?s=40&v=4",path:"/googleapis/google-cloud-node",ourl:"https://github.com/googleapis",url:"https://github.com/googleapis/google-cloud-node",description:"",language:"JavaScript",stars:3174,forks:682,starup:2},{title:`npm /

      cli`,owner:"npm",name:"cli",avatar:"https://avatars.githubusercontent.com/u/9287?s=40&v=4",path:"/npm/cli",ourl:"https://github.com/npm",url:"https://github.com/npm/cli",description:"",language:"JavaScript",stars:9836,forks:4416,starup:26},{title:`eyaltoledano /

      claude-task-master`,owner:"eyaltoledano",name:"claude-task-master",avatar:"https://avatars.githubusercontent.com/u/35776126?s=40&v=4",path:"/eyaltoledano/claude-task-master",ourl:"https://github.com/eyaltoledano",url:"https://github.com/eyaltoledano/claude-task-master",description:"",language:"JavaScript",stars:27510,forks:2580,starup:175}],"JavaScript-monthly":[{title:`openai /

      plugins`,owner:"openai",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/239646192?s=40&v=4",path:"/openai/plugins",ourl:"https://github.com/openai",url:"https://github.com/openai/plugins",description:"",language:"JavaScript",stars:3009,forks:352,starup:1861},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:16899,forks:1590,starup:6468},{title:`a5c-ai /

      babysitter`,owner:"a5c-ai",name:"babysitter",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/a5c-ai/babysitter",ourl:"https://github.com/a5c-ai",url:"https://github.com/a5c-ai/babysitter",description:"",language:"JavaScript",stars:1329,forks:76,starup:551},{title:`decolua /

      9router`,owner:"decolua",name:"9router",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/decolua/9router",ourl:"https://github.com/decolua",url:"https://github.com/decolua/9router",description:"",language:"JavaScript",stars:17484,forks:2689,starup:7815},{title:`maillab /

      cloud-mail`,owner:"maillab",name:"cloud-mail",avatar:"https://avatars.githubusercontent.com/u/34203076?s=40&v=4",path:"/maillab/cloud-mail",ourl:"https://github.com/maillab",url:"https://github.com/maillab/cloud-mail",description:"",language:"JavaScript",stars:11159,forks:15347,starup:2210},{title:`prettier /

      prettier`,owner:"prettier",name:"prettier",avatar:"https://avatars.githubusercontent.com/u/172584?s=40&v=4",path:"/prettier/prettier",ourl:"https://github.com/prettier",url:"https://github.com/prettier/prettier",description:"",language:"JavaScript",stars:52018,forks:4742,starup:241},{title:`zen-browser /

      desktop`,owner:"zen-browser",name:"desktop",avatar:"https://avatars.githubusercontent.com/u/91018726?s=40&v=4",path:"/zen-browser/desktop",ourl:"https://github.com/zen-browser",url:"https://github.com/zen-browser/desktop",description:"",language:"JavaScript",stars:42835,forks:1571,starup:989},{title:`SillyTavern /

      SillyTavern`,owner:"SillyTavern",name:"SillyTavern",avatar:"https://avatars.githubusercontent.com/u/18619528?s=40&v=4",path:"/SillyTavern/SillyTavern",ourl:"https://github.com/SillyTavern",url:"https://github.com/SillyTavern/SillyTavern",description:"",language:"JavaScript",stars:29359,forks:5551,starup:1885},{title:`TryGhost /

      Ghost`,owner:"TryGhost",name:"Ghost",avatar:"https://avatars.githubusercontent.com/u/101513?s=40&v=4",path:"/TryGhost/Ghost",ourl:"https://github.com/TryGhost",url:"https://github.com/TryGhost/Ghost",description:"",language:"JavaScript",stars:53933,forks:11710,starup:1224},{title:`truelockmc /

      streambert`,owner:"truelockmc",name:"streambert",avatar:"https://avatars.githubusercontent.com/u/168660625?s=40&v=4",path:"/truelockmc/streambert",ourl:"https://github.com/truelockmc",url:"https://github.com/truelockmc/streambert",description:"",language:"JavaScript",stars:5222,forks:457,starup:5121},{title:`Axorax /

      awesome-free-apps`,owner:"Axorax",name:"awesome-free-apps",avatar:"https://avatars.githubusercontent.com/u/78349410?s=40&v=4",path:"/Axorax/awesome-free-apps",ourl:"https://github.com/Axorax",url:"https://github.com/Axorax/awesome-free-apps",description:"",language:"JavaScript",stars:6561,forks:340,starup:2756},{title:`Stremio /

      stremio-web`,owner:"Stremio",name:"stremio-web",avatar:"https://avatars.githubusercontent.com/u/117831817?s=40&v=4",path:"/Stremio/stremio-web",ourl:"https://github.com/Stremio",url:"https://github.com/Stremio/stremio-web",description:"",language:"JavaScript",stars:12093,forks:1352,starup:1386},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:245843,forks:51055,starup:1406},{title:`sveltejs /

      svelte`,owner:"sveltejs",name:"svelte",avatar:"https://avatars.githubusercontent.com/u/1162160?s=40&v=4",path:"/sveltejs/svelte",ourl:"https://github.com/sveltejs",url:"https://github.com/sveltejs/svelte",description:"",language:"JavaScript",stars:87237,forks:4945,starup:864},{title:`pbakaus /

      impeccable`,owner:"pbakaus",name:"impeccable",avatar:"https://avatars.githubusercontent.com/u/43004?s=40&v=4",path:"/pbakaus/impeccable",ourl:"https://github.com/pbakaus",url:"https://github.com/pbakaus/impeccable",description:"",language:"JavaScript",stars:38272,forks:2108,starup:10725},{title:`WhiskeySockets /

      Baileys`,owner:"WhiskeySockets",name:"Baileys",avatar:"https://avatars.githubusercontent.com/u/8328864?s=40&v=4",path:"/WhiskeySockets/Baileys",ourl:"https://github.com/WhiskeySockets",url:"https://github.com/WhiskeySockets/Baileys",description:"",language:"JavaScript",stars:9769,forks:3085,starup:470},{title:`chinese-poetry /

      chinese-poetry`,owner:"chinese-poetry",name:"chinese-poetry",avatar:"https://avatars.githubusercontent.com/u/2869650?s=40&v=4",path:"/chinese-poetry/chinese-poetry",ourl:"https://github.com/chinese-poetry",url:"https://github.com/chinese-poetry/chinese-poetry",description:"",language:"JavaScript",stars:51865,forks:10440,starup:482}],"TypeScript-daily":[{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:120248,forks:6439,starup:1531},{title:`freeCodeCamp /

      freeCodeCamp`,owner:"freeCodeCamp",name:"freeCodeCamp",avatar:"https://avatars.githubusercontent.com/u/15801806?s=40&v=4",path:"/freeCodeCamp/freeCodeCamp",ourl:"https://github.com/freeCodeCamp",url:"https://github.com/freeCodeCamp/freeCodeCamp",description:"",language:"TypeScript",stars:447023,forks:44939,starup:114},{title:`meshery /

      meshery`,owner:"meshery",name:"meshery",avatar:"https://avatars.githubusercontent.com/u/7570704?s=40&v=4",path:"/meshery/meshery",ourl:"https://github.com/meshery",url:"https://github.com/meshery/meshery",description:"",language:"TypeScript",stars:10333,forks:3418,starup:45},{title:`cypress-io /

      cypress`,owner:"cypress-io",name:"cypress",avatar:"https://avatars.githubusercontent.com/u/1268976?s=40&v=4",path:"/cypress-io/cypress",ourl:"https://github.com/cypress-io",url:"https://github.com/cypress-io/cypress",description:"",language:"TypeScript",stars:49845,forks:3413,starup:7},{title:`puppeteer /

      puppeteer`,owner:"puppeteer",name:"puppeteer",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/puppeteer/puppeteer",ourl:"https://github.com/puppeteer",url:"https://github.com/puppeteer/puppeteer",description:"",language:"TypeScript",stars:94597,forks:9437,starup:13},{title:`ghostfolio /

      ghostfolio`,owner:"ghostfolio",name:"ghostfolio",avatar:"https://avatars.githubusercontent.com/u/4159106?s=40&v=4",path:"/ghostfolio/ghostfolio",ourl:"https://github.com/ghostfolio",url:"https://github.com/ghostfolio/ghostfolio",description:"",language:"TypeScript",stars:8703,forks:1185,starup:19},{title:`hydralauncher /

      hydra`,owner:"hydralauncher",name:"hydra",avatar:"https://avatars.githubusercontent.com/u/167933696?s=40&v=4",path:"/hydralauncher/hydra",ourl:"https://github.com/hydralauncher",url:"https://github.com/hydralauncher/hydra",description:"",language:"TypeScript",stars:15934,forks:3903,starup:32},{title:`babel /

      babel`,owner:"babel",name:"babel",avatar:"https://avatars.githubusercontent.com/u/853712?s=40&v=4",path:"/babel/babel",ourl:"https://github.com/babel",url:"https://github.com/babel/babel",description:"",language:"TypeScript",stars:43984,forks:5827,starup:7},{title:`sindresorhus /

      type-fest`,owner:"sindresorhus",name:"type-fest",avatar:"https://avatars.githubusercontent.com/u/170270?s=40&v=4",path:"/sindresorhus/type-fest",ourl:"https://github.com/sindresorhus",url:"https://github.com/sindresorhus/type-fest",description:"",language:"TypeScript",stars:17200,forks:710,starup:4},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37791,forks:8729,starup:207},{title:`fosrl /

      pangolin`,owner:"fosrl",name:"pangolin",avatar:"https://avatars.githubusercontent.com/u/4999704?s=40&v=4",path:"/fosrl/pangolin",ourl:"https://github.com/fosrl",url:"https://github.com/fosrl/pangolin",description:"",language:"TypeScript",stars:21218,forks:701,starup:72},{title:`nrwl /

      nx`,owner:"nrwl",name:"nx",avatar:"https://avatars.githubusercontent.com/u/8104246?s=40&v=4",path:"/nrwl/nx",ourl:"https://github.com/nrwl",url:"https://github.com/nrwl/nx",description:"",language:"TypeScript",stars:28918,forks:2741,starup:13},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:30389,forks:3452,starup:488},{title:`rmyndharis /

      OpenWA`,owner:"rmyndharis",name:"OpenWA",avatar:"https://avatars.githubusercontent.com/u/2390382?s=40&v=4",path:"/rmyndharis/OpenWA",ourl:"https://github.com/rmyndharis",url:"https://github.com/rmyndharis/OpenWA",description:"",language:"TypeScript",stars:8476,forks:1866,starup:96},{title:`prisma /

      prisma`,owner:"prisma",name:"prisma",avatar:"https://avatars.githubusercontent.com/u/1094804?s=40&v=4",path:"/prisma/prisma",ourl:"https://github.com/prisma",url:"https://github.com/prisma/prisma",description:"",language:"TypeScript",stars:46275,forks:2242,starup:17},{title:`jestjs /

      jest`,owner:"jestjs",name:"jest",avatar:"https://avatars.githubusercontent.com/u/1404810?s=40&v=4",path:"/jestjs/jest",ourl:"https://github.com/jestjs",url:"https://github.com/jestjs/jest",description:"",language:"TypeScript",stars:45444,forks:6661,starup:10},{title:`zhukunpenglinyutong /

      desktop-cc-gui`,owner:"zhukunpenglinyutong",name:"desktop-cc-gui",avatar:"https://avatars.githubusercontent.com/u/19299585?s=40&v=4",path:"/zhukunpenglinyutong/desktop-cc-gui",ourl:"https://github.com/zhukunpenglinyutong",url:"https://github.com/zhukunpenglinyutong/desktop-cc-gui",description:"",language:"TypeScript",stars:3097,forks:261,starup:101}],"TypeScript-weekly":[{title:`refactoringhq /

      tolaria`,owner:"refactoringhq",name:"tolaria",avatar:"https://avatars.githubusercontent.com/u/695274?s=40&v=4",path:"/refactoringhq/tolaria",ourl:"https://github.com/refactoringhq",url:"https://github.com/refactoringhq/tolaria",description:"",language:"TypeScript",stars:16180,forks:1106,starup:3708},{title:`mattermost /

      mattermost`,owner:"mattermost",name:"mattermost",avatar:"https://avatars.githubusercontent.com/u/2672098?s=40&v=4",path:"/mattermost/mattermost",ourl:"https://github.com/mattermost",url:"https://github.com/mattermost/mattermost",description:"",language:"TypeScript",stars:37791,forks:8729,starup:754},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:30389,forks:3452,starup:3570},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:35069,forks:4363,starup:2034},{title:`nuxt /

      nuxt`,owner:"nuxt",name:"nuxt",avatar:"https://avatars.githubusercontent.com/u/28706372?s=40&v=4",path:"/nuxt/nuxt",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/nuxt",description:"",language:"TypeScript",stars:60441,forks:5671,starup:106},{title:`withastro /

      astro`,owner:"withastro",name:"astro",avatar:"https://avatars.githubusercontent.com/u/361671?s=40&v=4",path:"/withastro/astro",ourl:"https://github.com/withastro",url:"https://github.com/withastro/astro",description:"",language:"TypeScript",stars:60150,forks:3542,starup:265},{title:`grafana /

      grafana`,owner:"grafana",name:"grafana",avatar:"https://avatars.githubusercontent.com/u/10999?s=40&v=4",path:"/grafana/grafana",ourl:"https://github.com/grafana",url:"https://github.com/grafana/grafana",description:"",language:"TypeScript",stars:74418,forks:14066,starup:215},{title:`danny-avila /

      LibreChat`,owner:"danny-avila",name:"LibreChat",avatar:"https://avatars.githubusercontent.com/u/110412045?s=40&v=4",path:"/danny-avila/LibreChat",ourl:"https://github.com/danny-avila",url:"https://github.com/danny-avila/LibreChat",description:"",language:"TypeScript",stars:39117,forks:8036,starup:792},{title:`Crosstalk-Solutions /

      project-nomad`,owner:"Crosstalk-Solutions",name:"project-nomad",avatar:"https://avatars.githubusercontent.com/u/52841588?s=40&v=4",path:"/Crosstalk-Solutions/project-nomad",ourl:"https://github.com/Crosstalk-Solutions",url:"https://github.com/Crosstalk-Solutions/project-nomad",description:"",language:"TypeScript",stars:30777,forks:3061,starup:1560},{title:`Stirling-Tools /

      Stirling-PDF`,owner:"Stirling-Tools",name:"Stirling-PDF",avatar:"https://avatars.githubusercontent.com/u/77850077?s=40&v=4",path:"/Stirling-Tools/Stirling-PDF",ourl:"https://github.com/Stirling-Tools",url:"https://github.com/Stirling-Tools/Stirling-PDF",description:"",language:"TypeScript",stars:80888,forks:7096,starup:480},{title:`puppeteer /

      puppeteer`,owner:"puppeteer",name:"puppeteer",avatar:"https://avatars.githubusercontent.com/u/399150?s=40&v=4",path:"/puppeteer/puppeteer",ourl:"https://github.com/puppeteer",url:"https://github.com/puppeteer/puppeteer",description:"",language:"TypeScript",stars:94597,forks:9437,starup:98},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:120248,forks:6439,starup:1655},{title:`EveryInc /

      compound-engineering-plugin`,owner:"EveryInc",name:"compound-engineering-plugin",avatar:"https://avatars.githubusercontent.com/u/517103?s=40&v=4",path:"/EveryInc/compound-engineering-plugin",ourl:"https://github.com/EveryInc",url:"https://github.com/EveryInc/compound-engineering-plugin",description:"",language:"TypeScript",stars:21243,forks:1561,starup:1184},{title:`fluxerapp /

      fluxer`,owner:"fluxerapp",name:"fluxer",avatar:"https://avatars.githubusercontent.com/u/241303489?s=40&v=4",path:"/fluxerapp/fluxer",ourl:"https://github.com/fluxerapp",url:"https://github.com/fluxerapp/fluxer",description:"",language:"TypeScript",stars:9011,forks:521,starup:275},{title:`babel /

      babel`,owner:"babel",name:"babel",avatar:"https://avatars.githubusercontent.com/u/853712?s=40&v=4",path:"/babel/babel",ourl:"https://github.com/babel",url:"https://github.com/babel/babel",description:"",language:"TypeScript",stars:43984,forks:5827,starup:55},{title:`bluewave-labs /

      Checkmate`,owner:"bluewave-labs",name:"Checkmate",avatar:"https://avatars.githubusercontent.com/u/8007637?s=40&v=4",path:"/bluewave-labs/Checkmate",ourl:"https://github.com/bluewave-labs",url:"https://github.com/bluewave-labs/Checkmate",description:"",language:"TypeScript",stars:10032,forks:1124,starup:133},{title:`aleksey-hoffman /

      sigma-file-manager`,owner:"aleksey-hoffman",name:"sigma-file-manager",avatar:"https://avatars.githubusercontent.com/u/61761672?s=40&v=4",path:"/aleksey-hoffman/sigma-file-manager",ourl:"https://github.com/aleksey-hoffman",url:"https://github.com/aleksey-hoffman/sigma-file-manager",description:"",language:"TypeScript",stars:6195,forks:252,starup:338},{title:`reconurge /

      flowsint`,owner:"reconurge",name:"flowsint",avatar:"https://avatars.githubusercontent.com/u/64375473?s=40&v=4",path:"/reconurge/flowsint",ourl:"https://github.com/reconurge",url:"https://github.com/reconurge/flowsint",description:"",language:"TypeScript",stars:6635,forks:811,starup:966}],"TypeScript-monthly":[{title:`colbymchenry /

      codegraph`,owner:"colbymchenry",name:"codegraph",avatar:"https://avatars.githubusercontent.com/u/18431132?s=40&v=4",path:"/colbymchenry/codegraph",ourl:"https://github.com/colbymchenry",url:"https://github.com/colbymchenry/codegraph",description:"",language:"TypeScript",stars:48891,forks:2993,starup:47258},{title:`Egonex-AI /

      Understand-Anything`,owner:"Egonex-AI",name:"Understand-Anything",avatar:"https://avatars.githubusercontent.com/u/87774050?s=40&v=4",path:"/Egonex-AI/Understand-Anything",ourl:"https://github.com/Egonex-AI",url:"https://github.com/Egonex-AI/Understand-Anything",description:"",language:"TypeScript",stars:59060,forks:4906,starup:44198},{title:`can1357 /

      oh-my-pi`,owner:"can1357",name:"oh-my-pi",avatar:"https://avatars.githubusercontent.com/u/11807264?s=40&v=4",path:"/can1357/oh-my-pi",ourl:"https://github.com/can1357",url:"https://github.com/can1357/oh-my-pi",description:"",language:"TypeScript",stars:12370,forks:1048,starup:7896},{title:`rohitg00 /

      agentmemory`,owner:"rohitg00",name:"agentmemory",avatar:"https://avatars.githubusercontent.com/u/48523873?s=40&v=4",path:"/rohitg00/agentmemory",ourl:"https://github.com/rohitg00",url:"https://github.com/rohitg00/agentmemory",description:"",language:"TypeScript",stars:22779,forks:1874,starup:16136},{title:`fathah /

      hermes-desktop`,owner:"fathah",name:"hermes-desktop",avatar:"https://avatars.githubusercontent.com/u/48355244?s=40&v=4",path:"/fathah/hermes-desktop",ourl:"https://github.com/fathah",url:"https://github.com/fathah/hermes-desktop",description:"",language:"TypeScript",stars:12118,forks:1368,starup:7670},{title:`TencentCloud /

      TencentDB-Agent-Memory`,owner:"TencentCloud",name:"TencentDB-Agent-Memory",avatar:"https://avatars.githubusercontent.com/u/277734672?s=40&v=4",path:"/TencentCloud/TencentDB-Agent-Memory",ourl:"https://github.com/TencentCloud",url:"https://github.com/TencentCloud/TencentDB-Agent-Memory",description:"",language:"TypeScript",stars:5641,forks:485,starup:5388},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/25622412?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:1961,forks:152,starup:1577},{title:`yikart /

      AiToEarn`,owner:"yikart",name:"AiToEarn",avatar:"https://avatars.githubusercontent.com/u/30893307?s=40&v=4",path:"/yikart/AiToEarn",ourl:"https://github.com/yikart",url:"https://github.com/yikart/AiToEarn",description:"",language:"TypeScript",stars:21091,forks:3160,starup:8472},{title:`humanlayer /

      12-factor-agents`,owner:"humanlayer",name:"12-factor-agents",avatar:"https://avatars.githubusercontent.com/u/3730605?s=40&v=4",path:"/humanlayer/12-factor-agents",ourl:"https://github.com/humanlayer",url:"https://github.com/humanlayer/12-factor-agents",description:"",language:"TypeScript",stars:23288,forks:1783,starup:3543},{title:`presenton /

      presenton`,owner:"presenton",name:"presenton",avatar:"https://avatars.githubusercontent.com/u/52109383?s=40&v=4",path:"/presenton/presenton",ourl:"https://github.com/presenton",url:"https://github.com/presenton/presenton",description:"",language:"TypeScript",stars:8204,forks:1283,starup:3225},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:4786,forks:327,starup:2535},{title:`CopilotKit /

      CopilotKit`,owner:"CopilotKit",name:"CopilotKit",avatar:"https://avatars.githubusercontent.com/u/86957?s=40&v=4",path:"/CopilotKit/CopilotKit",ourl:"https://github.com/CopilotKit",url:"https://github.com/CopilotKit/CopilotKit",description:"",language:"TypeScript",stars:35069,forks:4363,starup:3766},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:27567,forks:2589,starup:9648},{title:`MHSanaei /

      3x-ui`,owner:"MHSanaei",name:"3x-ui",avatar:"https://avatars.githubusercontent.com/u/33454419?s=40&v=4",path:"/MHSanaei/3x-ui",ourl:"https://github.com/MHSanaei",url:"https://github.com/MHSanaei/3x-ui",description:"",language:"TypeScript",stars:40632,forks:7620,starup:3807},{title:`millionco /

      react-doctor`,owner:"millionco",name:"react-doctor",avatar:"https://avatars.githubusercontent.com/u/38025074?s=40&v=4",path:"/millionco/react-doctor",ourl:"https://github.com/millionco",url:"https://github.com/millionco/react-doctor",description:"",language:"TypeScript",stars:12670,forks:403,starup:3574},{title:`EKKOLearnAI /

      hermes-studio`,owner:"EKKOLearnAI",name:"hermes-studio",avatar:"https://avatars.githubusercontent.com/u/152005280?s=40&v=4",path:"/EKKOLearnAI/hermes-studio",ourl:"https://github.com/EKKOLearnAI",url:"https://github.com/EKKOLearnAI/hermes-studio",description:"",language:"TypeScript",stars:7902,forks:968,starup:3272},{title:`Open-Dev-Society /

      OpenStock`,owner:"Open-Dev-Society",name:"OpenStock",avatar:"https://avatars.githubusercontent.com/u/148683640?s=40&v=4",path:"/Open-Dev-Society/OpenStock",ourl:"https://github.com/Open-Dev-Society",url:"https://github.com/Open-Dev-Society/OpenStock",description:"",language:"TypeScript",stars:13226,forks:1752,starup:1945},{title:`marktext /

      marktext`,owner:"marktext",name:"marktext",avatar:"https://avatars.githubusercontent.com/u/9712830?s=40&v=4",path:"/marktext/marktext",ourl:"https://github.com/marktext",url:"https://github.com/marktext/marktext",description:"",language:"TypeScript",stars:57350,forks:4294,starup:1499},{title:`supermemoryai /

      supermemory`,owner:"supermemoryai",name:"supermemory",avatar:"https://avatars.githubusercontent.com/u/63950637?s=40&v=4",path:"/supermemoryai/supermemory",ourl:"https://github.com/supermemoryai",url:"https://github.com/supermemoryai/supermemory",description:"",language:"TypeScript",stars:26977,forks:2344,starup:4524},{title:`lfnovo /

      open-notebook`,owner:"lfnovo",name:"open-notebook",avatar:"https://avatars.githubusercontent.com/u/579178?s=40&v=4",path:"/lfnovo/open-notebook",ourl:"https://github.com/lfnovo",url:"https://github.com/lfnovo/open-notebook",description:"",language:"TypeScript",stars:30389,forks:3452,starup:7019}],"Vue-daily":[{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2158,forks:477,starup:6},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:25416,forks:1859,starup:19},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:387,forks:47062,starup:0},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21242,forks:1439,starup:9},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2988,forks:1342,starup:3},{title:`unovue /

      reka-ui`,owner:"unovue",name:"reka-ui",avatar:"https://avatars.githubusercontent.com/u/59365435?s=40&v=4",path:"/unovue/reka-ui",ourl:"https://github.com/unovue",url:"https://github.com/unovue/reka-ui",description:"",language:"Vue",stars:6554,forks:515,starup:4},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6649,forks:1076,starup:3},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21375,forks:1005,starup:17},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20317,forks:3750,starup:12},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1217,forks:239,starup:1},{title:`timeshiftsauce /

      CeruMusic`,owner:"timeshiftsauce",name:"CeruMusic",avatar:"https://avatars.githubusercontent.com/u/104637375?s=40&v=4",path:"/timeshiftsauce/CeruMusic",ourl:"https://github.com/timeshiftsauce",url:"https://github.com/timeshiftsauce/CeruMusic",description:"",language:"Vue",stars:1899,forks:87,starup:5},{title:`isxcode /

      spark-yun`,owner:"isxcode",name:"spark-yun",avatar:"https://avatars.githubusercontent.com/u/34756621?s=40&v=4",path:"/isxcode/spark-yun",ourl:"https://github.com/isxcode",url:"https://github.com/isxcode/spark-yun",description:"",language:"Vue",stars:250,forks:71,starup:0},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2834,forks:1137,starup:3},{title:`frappe /

      insights`,owner:"frappe",name:"insights",avatar:"https://avatars.githubusercontent.com/u/25369014?s=40&v=4",path:"/frappe/insights",ourl:"https://github.com/frappe",url:"https://github.com/frappe/insights",description:"",language:"Vue",stars:951,forks:464,starup:1},{title:`OpenCSGs /

      csghub`,owner:"OpenCSGs",name:"csghub",avatar:"https://avatars.githubusercontent.com/u/3827780?s=40&v=4",path:"/OpenCSGs/csghub",ourl:"https://github.com/OpenCSGs",url:"https://github.com/OpenCSGs/csghub",description:"",language:"Vue",stars:4173,forks:519,starup:0},{title:`laoshuikaixue /

      VoiceHub`,owner:"laoshuikaixue",name:"VoiceHub",avatar:"https://avatars.githubusercontent.com/u/79132480?s=40&v=4",path:"/laoshuikaixue/VoiceHub",ourl:"https://github.com/laoshuikaixue",url:"https://github.com/laoshuikaixue/VoiceHub",description:"",language:"Vue",stars:147,forks:81,starup:0},{title:`cgwire /

      kitsu`,owner:"cgwire",name:"kitsu",avatar:"https://avatars.githubusercontent.com/u/1336623?s=40&v=4",path:"/cgwire/kitsu",ourl:"https://github.com/cgwire",url:"https://github.com/cgwire/kitsu",description:"",language:"Vue",stars:642,forks:171,starup:0},{title:`slntopp /

      nocloud`,owner:"slntopp",name:"nocloud",avatar:"https://avatars.githubusercontent.com/u/97695224?s=40&v=4",path:"/slntopp/nocloud",ourl:"https://github.com/slntopp",url:"https://github.com/slntopp/nocloud",description:"",language:"Vue",stars:31,forks:8,starup:0},{title:`requarks /

      wiki`,owner:"requarks",name:"wiki",avatar:"https://avatars.githubusercontent.com/u/15522395?s=40&v=4",path:"/requarks/wiki",ourl:"https://github.com/requarks",url:"https://github.com/requarks/wiki",description:"",language:"Vue",stars:28444,forks:3249,starup:5},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3225,forks:5034,starup:0}],"Vue-weekly":[{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32641,forks:8830,starup:91},{title:`doocs /

      md`,owner:"doocs",name:"md",avatar:"https://avatars.githubusercontent.com/u/21008209?s=40&v=4",path:"/doocs/md",ourl:"https://github.com/doocs",url:"https://github.com/doocs/md",description:"",language:"Vue",stars:12829,forks:2169,starup:90},{title:`pure-admin /

      vue-pure-admin`,owner:"pure-admin",name:"vue-pure-admin",avatar:"https://avatars.githubusercontent.com/u/44761321?s=40&v=4",path:"/pure-admin/vue-pure-admin",ourl:"https://github.com/pure-admin",url:"https://github.com/pure-admin/vue-pure-admin",description:"",language:"Vue",stars:20317,forks:3750,starup:53},{title:`14790897 /

      handwriting-web`,owner:"14790897",name:"handwriting-web",avatar:"https://avatars.githubusercontent.com/u/121866954?s=40&v=4",path:"/14790897/handwriting-web",ourl:"https://github.com/14790897",url:"https://github.com/14790897/handwriting-web",description:"",language:"Vue",stars:1253,forks:117,starup:284},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15790,forks:1279,starup:130},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2158,forks:477,starup:15},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:32945,forks:4698,starup:45},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21242,forks:1439,starup:91},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1375,forks:110,starup:30},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14449,forks:1688,starup:28},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2834,forks:1137,starup:24},{title:`hefengxian /

      my-ielts`,owner:"hefengxian",name:"my-ielts",avatar:"https://avatars.githubusercontent.com/u/4338497?s=40&v=4",path:"/hefengxian/my-ielts",ourl:"https://github.com/hefengxian",url:"https://github.com/hefengxian/my-ielts",description:"",language:"Vue",stars:2072,forks:304,starup:49},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3546,forks:722,starup:38},{title:`ayangweb /

      BongoCat`,owner:"ayangweb",name:"BongoCat",avatar:"https://avatars.githubusercontent.com/u/75017711?s=40&v=4",path:"/ayangweb/BongoCat",ourl:"https://github.com/ayangweb",url:"https://github.com/ayangweb/BongoCat",description:"",language:"Vue",stars:21375,forks:1005,starup:141},{title:`Zephyruso /

      zashboard`,owner:"Zephyruso",name:"zashboard",avatar:"https://avatars.githubusercontent.com/u/176294927?s=40&v=4",path:"/Zephyruso/zashboard",ourl:"https://github.com/Zephyruso",url:"https://github.com/Zephyruso/zashboard",description:"",language:"Vue",stars:2903,forks:319,starup:40}],"Vue-monthly":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:39308,forks:5030,starup:851},{title:`FreeTubeApp /

      FreeTube`,owner:"FreeTubeApp",name:"FreeTube",avatar:"https://avatars.githubusercontent.com/u/48293849?s=40&v=4",path:"/FreeTubeApp/FreeTube",ourl:"https://github.com/FreeTubeApp",url:"https://github.com/FreeTubeApp/FreeTube",description:"",language:"Vue",stars:21242,forks:1439,starup:458},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:1153,forks:42,starup:473},{title:`nuxt /

      ui`,owner:"nuxt",name:"ui",avatar:"https://avatars.githubusercontent.com/u/739984?s=40&v=4",path:"/nuxt/ui",ourl:"https://github.com/nuxt",url:"https://github.com/nuxt/ui",description:"",language:"Vue",stars:6649,forks:1076,starup:91},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:387,forks:47062,starup:25},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21407,forks:2330,starup:186},{title:`MetaCubeX /

      metacubexd`,owner:"MetaCubeX",name:"metacubexd",avatar:"https://avatars.githubusercontent.com/u/17328586?s=40&v=4",path:"/MetaCubeX/metacubexd",ourl:"https://github.com/MetaCubeX",url:"https://github.com/MetaCubeX/metacubexd",description:"",language:"Vue",stars:3775,forks:482,starup:212},{title:`vbenjs /

      vue-vben-admin`,owner:"vbenjs",name:"vue-vben-admin",avatar:"https://avatars.githubusercontent.com/u/28132598?s=40&v=4",path:"/vbenjs/vue-vben-admin",ourl:"https://github.com/vbenjs",url:"https://github.com/vbenjs/vue-vben-admin",description:"",language:"Vue",stars:32641,forks:8830,starup:366},{title:`frappe /

      helpdesk`,owner:"frappe",name:"helpdesk",avatar:"https://avatars.githubusercontent.com/u/65544983?s=40&v=4",path:"/frappe/helpdesk",ourl:"https://github.com/frappe",url:"https://github.com/frappe/helpdesk",description:"",language:"Vue",stars:3186,forks:838,starup:60},{title:`miantiao-me /

      Sink`,owner:"miantiao-me",name:"Sink",avatar:"https://avatars.githubusercontent.com/u/2959393?s=40&v=4",path:"/miantiao-me/Sink",ourl:"https://github.com/miantiao-me",url:"https://github.com/miantiao-me/Sink",description:"",language:"Vue",stars:6809,forks:4742,starup:199},{title:`frappe /

      lms`,owner:"frappe",name:"lms",avatar:"https://avatars.githubusercontent.com/u/31363128?s=40&v=4",path:"/frappe/lms",ourl:"https://github.com/frappe",url:"https://github.com/frappe/lms",description:"",language:"Vue",stars:2988,forks:1342,starup:91},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:2834,forks:1137,starup:129},{title:`primefaces /

      primevue`,owner:"primefaces",name:"primevue",avatar:"https://avatars.githubusercontent.com/u/32294991?s=40&v=4",path:"/primefaces/primevue",ourl:"https://github.com/primefaces",url:"https://github.com/primefaces/primevue",description:"",language:"Vue",stars:14449,forks:1688,starup:142},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:3546,forks:722,starup:174},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1375,forks:110,starup:119},{title:`crmeb /

      CRMEB`,owner:"crmeb",name:"CRMEB",avatar:"https://avatars.githubusercontent.com/u/28684103?s=40&v=4",path:"/crmeb/CRMEB",ourl:"https://github.com/crmeb",url:"https://github.com/crmeb/CRMEB",description:"",language:"Vue",stars:8920,forks:2034,starup:289},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:15790,forks:1279,starup:553},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5499,forks:1054,starup:217},{title:`modrinth /

      code`,owner:"modrinth",name:"code",avatar:"https://avatars.githubusercontent.com/u/18202329?s=40&v=4",path:"/modrinth/code",ourl:"https://github.com/modrinth",url:"https://github.com/modrinth/code",description:"",language:"Vue",stars:2158,forks:477,starup:91}]},gt=T({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:u}=q(),l=L(()=>v(Y[`${s.value}-${o.value}`]));C("color",u),C("data",l);function v(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=M,m=O,g=K,d=D,t=B,e=R,y=E,w=U,G=X;return c(),_("div",null,[b(d,null,{default:S(()=>[b(n,{modelValue:h(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),b(m,{modelValue:h(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),b(g,{modelValue:h(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),b($,{name:"fade-top",mode:"out-in"},{default:S(()=>[h(r)==="list"?(c(),f(e,{key:0},{icons:S(({repo:p})=>[b(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):h(r)==="table"?(c(),f(y,{key:1,"has-starup":""})):h(r)==="chart"?(c(),f(w,{key:2})):(c(),f(G,{key:3,data:h(l)},null,8,["data"]))]),_:1})])}}});export{gt as default};
