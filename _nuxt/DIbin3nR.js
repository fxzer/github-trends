import A from"./CF2IvgEr.js";import D from"./C0natcI_.js";import E from"./DhdktORi.js";import P from"./DrzYJpdg.js";import G from"./K6wpWctQ.js";import q from"./DYl3VuAC.js";import N from"./B8lQq4tX.js";import{d as j}from"./KQwPfV-1.js";import{s as F,a as M,b as z,u as C,i as B,c as K}from"./DR58hreu.js";import{i as T,p as O,a5 as J,D as h,f as _,w as R,S as Y,h as v,a6 as S,T as $,q as x,U as l,d as f,a as H,H as V}from"./5-JfXwpV.js";import"./KZpuIKDw.js";import"./p2-M2djV.js";import"./DbZQQx2f.js";import"./c3i6q4W5.js";import"./rIBVIE0Y.js";const Q=T({__name:"Chart",setup(k){const r=O("data"),o=[{name:"stars",color:"rgb(159 ,224 ,128"},{name:"forks",color:"rgb(249 ,200 ,88"},{name:"starup",color:"rgb(238 ,102 ,102"}].map(F),s=M("趋势仓库总指标排行榜",o);function u(i){const a=j(i);a.sort((t,e)=>{const y=t.starup+t.stars+t.forks,w=e.starup+e.stars+e.forks;return y-w});const[n,g,m,d]=a.reduce((t,e)=>(t[0].push(e.stars),t[1].push(e.forks),t[2].push(e.starup),t[3].push(`${e.owner}/${e.name}`),t),[[],[],[],[]]);s.value.yAxis.data=d,s.value.series[0].data=n,s.value.series[1].data=g,s.value.series[2].data=m}const{domRef:c}=z(s,C);J(r,()=>{u(r.value)},{deep:!0,immediate:!0});const b=`${100+r.value.length*40}px`;return(i,a)=>(h(),_("div",{ref_key:"chartRef",ref:c,style:R({height:b})},null,4))}}),U=Object.assign(Q,{__name:"TrendChart"}),I=T({__name:"StarupChart",props:{data:{}},setup(k){const r=k,{data:o}=Y(r),u=M("Star飙升榜",[{name:"starup",type:"bar",showBackground:!0,barWidth:20,label:{color:"#fff",show:!0},emphasis:{focus:"series"}}]),{domRef:c}=z(u,C);function b(a){const n=j(a);n.sort((t,e)=>t.starup-e.starup);const g=["rgb(159 ,224 ,128","rgb(249 ,200 ,88","rgb(238 ,102 ,102","rgb(129 ,140 ,248","rgba(156,107,211","rgba(248,195,248","rgba(100,255,249","rgba(244 ,114 ,182","rgba(255, 70 ,21","rgba(72 ,144 ,255"],m=[],d=n.map((t,e)=>(m.push(`${t.owner}/${t.name}`),{value:t.starup,name:`${t.owner}/${t.name}`,itemStyle:B(g[e%g.length])}));u.value.series[0].data=d,u.value.yAxis.data=m}J(o,()=>{b(o.value)},{deep:!0,immediate:!0});const i=`${100+o.value.length*40}px`;return(a,n)=>(h(),_("div",{ref_key:"chartRef",ref:c,style:R({height:i})},null,4))}}),W=Object.assign(I,{__name:"TrendStarupChart"}),X={"JavaScript-daily":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:42701,forks:2664,starup:2716},{title:`nodejs /

      node`,owner:"nodejs",name:"node",avatar:"https://avatars.githubusercontent.com/u/718899?s=40&v=4",path:"/nodejs/node",ourl:"https://github.com/nodejs",url:"https://github.com/nodejs/node",description:"",language:"JavaScript",stars:122991,forks:39841,starup:66},{title:`projectdiscovery /

      nuclei-templates`,owner:"projectdiscovery",name:"nuclei-templates",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/projectdiscovery/nuclei-templates",ourl:"https://github.com/projectdiscovery",url:"https://github.com/projectdiscovery/nuclei-templates",description:"",language:"JavaScript",stars:13204,forks:3708,starup:24},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:175031,forks:9541,starup:1575},{title:`mailcow /

      mailcow-dockerized`,owner:"mailcow",name:"mailcow-dockerized",avatar:"https://avatars.githubusercontent.com/u/2972950?s=40&v=4",path:"/mailcow/mailcow-dockerized",ourl:"https://github.com/mailcow",url:"https://github.com/mailcow/mailcow-dockerized",description:"",language:"JavaScript",stars:13677,forks:1848,starup:9},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:19090,forks:1060,starup:234},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:143215,forks:34751,starup:39}],"JavaScript-weekly":[{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:3354,forks:312,starup:732},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:27449,forks:1820,starup:4025},{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:42701,forks:2664,starup:11223},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:175031,forks:9541,starup:9858},{title:`plugin87 /

      ux-ui-agent-skills`,owner:"plugin87",name:"ux-ui-agent-skills",avatar:"https://avatars.githubusercontent.com/u/5790381?s=40&v=4",path:"/plugin87/ux-ui-agent-skills",ourl:"https://github.com/plugin87",url:"https://github.com/plugin87/ux-ui-agent-skills",description:"",language:"JavaScript",stars:2928,forks:281,starup:896},{title:`citrolabs /

      ego-lite`,owner:"citrolabs",name:"ego-lite",avatar:"https://avatars.githubusercontent.com/u/22140958?s=40&v=4",path:"/citrolabs/ego-lite",ourl:"https://github.com/citrolabs",url:"https://github.com/citrolabs/ego-lite",description:"",language:"JavaScript",stars:19090,forks:1060,starup:1524},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:101738,forks:6869,starup:3764},{title:`datawhalechina /

      easy-vibe`,owner:"datawhalechina",name:"easy-vibe",avatar:"https://avatars.githubusercontent.com/u/96160062?s=40&v=4",path:"/datawhalechina/easy-vibe",ourl:"https://github.com/datawhalechina",url:"https://github.com/datawhalechina/easy-vibe",description:"",language:"JavaScript",stars:20135,forks:1948,starup:401},{title:`react /

      react`,owner:"react",name:"react",avatar:"https://avatars.githubusercontent.com/u/63648?s=40&v=4",path:"/react/react",ourl:"https://github.com/react",url:"https://github.com/react/react",description:"",language:"JavaScript",stars:251741,forks:51568,starup:810},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:287523,forks:42635,starup:6418},{title:`Minglink /

      dsh-infinite-gen-5`,owner:"Minglink",name:"dsh-infinite-gen-5",avatar:"https://avatars.githubusercontent.com/u/108618469?s=40&v=4",path:"/Minglink/dsh-infinite-gen-5",ourl:"https://github.com/Minglink",url:"https://github.com/Minglink/dsh-infinite-gen-5",description:"",language:"JavaScript",stars:3411,forks:395,starup:479}],"JavaScript-monthly":[{title:`cloudflare /

      security-audit-skill`,owner:"cloudflare",name:"security-audit-skill",avatar:"https://avatars.githubusercontent.com/u/9935415?s=40&v=4",path:"/cloudflare/security-audit-skill",ourl:"https://github.com/cloudflare",url:"https://github.com/cloudflare/security-audit-skill",description:"",language:"JavaScript",stars:42701,forks:2664,starup:20554},{title:`affaan-m /

      ECC`,owner:"affaan-m",name:"ECC",avatar:"https://avatars.githubusercontent.com/u/124439313?s=40&v=4",path:"/affaan-m/ECC",ourl:"https://github.com/affaan-m",url:"https://github.com/affaan-m/ECC",description:"",language:"JavaScript",stars:287523,forks:42635,starup:22804},{title:`Leonxlnx /

      taste-skill`,owner:"Leonxlnx",name:"taste-skill",avatar:"https://avatars.githubusercontent.com/u/219127460?s=40&v=4",path:"/Leonxlnx/taste-skill",ourl:"https://github.com/Leonxlnx",url:"https://github.com/Leonxlnx/taste-skill",description:"",language:"JavaScript",stars:101738,forks:6869,starup:12478},{title:`addyosmani /

      agent-skills`,owner:"addyosmani",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/110953?s=40&v=4",path:"/addyosmani/agent-skills",ourl:"https://github.com/addyosmani",url:"https://github.com/addyosmani/agent-skills",description:"",language:"JavaScript",stars:110048,forks:11485,starup:11689},{title:`DuarteSantos8 /

      openGym`,owner:"DuarteSantos8",name:"openGym",avatar:"https://avatars.githubusercontent.com/u/171949022?s=40&v=4",path:"/DuarteSantos8/openGym",ourl:"https://github.com/DuarteSantos8",url:"https://github.com/DuarteSantos8/openGym",description:"",language:"JavaScript",stars:15331,forks:2013,starup:13954},{title:`michael-denyer /

      pstack-claude`,owner:"michael-denyer",name:"pstack-claude",avatar:"https://avatars.githubusercontent.com/u/97485362?s=40&v=4",path:"/michael-denyer/pstack-claude",ourl:"https://github.com/michael-denyer",url:"https://github.com/michael-denyer/pstack-claude",description:"",language:"JavaScript",stars:3354,forks:312,starup:2792},{title:`androoAGI /

      starnet`,owner:"androoAGI",name:"starnet",avatar:"https://avatars.githubusercontent.com/u/224686490?s=40&v=4",path:"/androoAGI/starnet",ourl:"https://github.com/androoAGI",url:"https://github.com/androoAGI/starnet",description:"",language:"JavaScript",stars:1591,forks:321,starup:1491},{title:`hmjz100 /

      LinkSwift`,owner:"hmjz100",name:"LinkSwift",avatar:"https://avatars.githubusercontent.com/u/98228280?s=40&v=4",path:"/hmjz100/LinkSwift",ourl:"https://github.com/hmjz100",url:"https://github.com/hmjz100/LinkSwift",description:"",language:"JavaScript",stars:27449,forks:1820,starup:6772},{title:`withmarbleapp /

      os-taxonomy`,owner:"withmarbleapp",name:"os-taxonomy",avatar:"https://avatars.githubusercontent.com/u/2501329?s=40&v=4",path:"/withmarbleapp/os-taxonomy",ourl:"https://github.com/withmarbleapp",url:"https://github.com/withmarbleapp/os-taxonomy",description:"",language:"JavaScript",stars:7307,forks:1183,starup:2777},{title:`mnfst /

      awesome-free-llm-apis`,owner:"mnfst",name:"awesome-free-llm-apis",avatar:"https://avatars.githubusercontent.com/u/11723962?s=40&v=4",path:"/mnfst/awesome-free-llm-apis",ourl:"https://github.com/mnfst",url:"https://github.com/mnfst/awesome-free-llm-apis",description:"",language:"JavaScript",stars:11125,forks:1245,starup:2968},{title:`mrdoob /

      three.js`,owner:"mrdoob",name:"three.js",avatar:"https://avatars.githubusercontent.com/u/97088?s=40&v=4",path:"/mrdoob/three.js",ourl:"https://github.com/mrdoob",url:"https://github.com/mrdoob/three.js",description:"",language:"JavaScript",stars:116851,forks:36709,starup:1355},{title:`hughhowey /

      neo`,owner:"hughhowey",name:"neo",avatar:"https://avatars.githubusercontent.com/u/30789359?s=40&v=4",path:"/hughhowey/neo",ourl:"https://github.com/hughhowey",url:"https://github.com/hughhowey/neo",description:"",language:"JavaScript",stars:1558,forks:211,starup:1115},{title:`DietrichGebert /

      ponytail`,owner:"DietrichGebert",name:"ponytail",avatar:"https://avatars.githubusercontent.com/u/137048761?s=40&v=4",path:"/DietrichGebert/ponytail",ourl:"https://github.com/DietrichGebert",url:"https://github.com/DietrichGebert/ponytail",description:"",language:"JavaScript",stars:175031,forks:9541,starup:30888},{title:`byoungd /

      up`,owner:"byoungd",name:"up",avatar:"https://avatars.githubusercontent.com/u/16145783?s=40&v=4",path:"/byoungd/up",ourl:"https://github.com/byoungd",url:"https://github.com/byoungd/up",description:"",language:"JavaScript",stars:69287,forks:6878,starup:5919},{title:`vercel-labs /

      agent-skills`,owner:"vercel-labs",name:"agent-skills",avatar:"https://avatars.githubusercontent.com/u/66901228?s=40&v=4",path:"/vercel-labs/agent-skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/agent-skills",description:"",language:"JavaScript",stars:32920,forks:2879,starup:1494},{title:`plugin87 /

      ux-ui-agent-skills`,owner:"plugin87",name:"ux-ui-agent-skills",avatar:"https://avatars.githubusercontent.com/u/5790381?s=40&v=4",path:"/plugin87/ux-ui-agent-skills",ourl:"https://github.com/plugin87",url:"https://github.com/plugin87/ux-ui-agent-skills",description:"",language:"JavaScript",stars:2928,forks:281,starup:1456},{title:`qist /

      tvbox`,owner:"qist",name:"tvbox",avatar:"https://avatars.githubusercontent.com/u/58679624?s=40&v=4",path:"/qist/tvbox",ourl:"https://github.com/qist",url:"https://github.com/qist/tvbox",description:"",language:"JavaScript",stars:12258,forks:4312,starup:849},{title:`vercel /

      next.js`,owner:"vercel",name:"next.js",avatar:"https://avatars.githubusercontent.com/u/22380829?s=40&v=4",path:"/vercel/next.js",ourl:"https://github.com/vercel",url:"https://github.com/vercel/next.js",description:"",language:"JavaScript",stars:143215,forks:34751,starup:1678},{title:`spicetify /

      cli`,owner:"spicetify",name:"cli",avatar:"https://avatars.githubusercontent.com/u/26436809?s=40&v=4",path:"/spicetify/cli",ourl:"https://github.com/spicetify",url:"https://github.com/spicetify/cli",description:"",language:"JavaScript",stars:25190,forks:993,starup:657},{title:`Neet-Nestor /

      Telegram-Media-Downloader`,owner:"Neet-Nestor",name:"Telegram-Media-Downloader",avatar:"https://avatars.githubusercontent.com/u/23090573?s=40&v=4",path:"/Neet-Nestor/Telegram-Media-Downloader",ourl:"https://github.com/Neet-Nestor",url:"https://github.com/Neet-Nestor/Telegram-Media-Downloader",description:"",language:"JavaScript",stars:6278,forks:619,starup:740}],"TypeScript-daily":[{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7095,forks:1443,starup:546},{title:`SehajveerSingh2005 /

      bloom`,owner:"SehajveerSingh2005",name:"bloom",avatar:"https://avatars.githubusercontent.com/u/156107192?s=40&v=4",path:"/SehajveerSingh2005/bloom",ourl:"https://github.com/SehajveerSingh2005",url:"https://github.com/SehajveerSingh2005/bloom",description:"",language:"TypeScript",stars:345,forks:39,starup:23},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:104234,forks:6583,starup:1081},{title:`Vincentwei1021 /

      video-shotcraft`,owner:"Vincentwei1021",name:"video-shotcraft",avatar:"https://avatars.githubusercontent.com/u/81847?s=40&v=4",path:"/Vincentwei1021/video-shotcraft",ourl:"https://github.com/Vincentwei1021",url:"https://github.com/Vincentwei1021/video-shotcraft",description:"",language:"TypeScript",stars:13298,forks:1205,starup:259},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:113841,forks:16938,starup:428},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83498,forks:8874,starup:42},{title:`logto-io /

      logto`,owner:"logto-io",name:"logto",avatar:"https://avatars.githubusercontent.com/u/14722250?s=40&v=4",path:"/logto-io/logto",ourl:"https://github.com/logto-io",url:"https://github.com/logto-io/logto",description:"",language:"TypeScript",stars:14771,forks:1204,starup:12},{title:`expo /

      expo`,owner:"expo",name:"expo",avatar:"https://avatars.githubusercontent.com/u/90494?s=40&v=4",path:"/expo/expo",ourl:"https://github.com/expo",url:"https://github.com/expo/expo",description:"",language:"TypeScript",stars:53043,forks:14742,starup:32},{title:`promptfoo /

      promptfoo`,owner:"promptfoo",name:"promptfoo",avatar:"https://avatars.githubusercontent.com/u/7235481?s=40&v=4",path:"/promptfoo/promptfoo",ourl:"https://github.com/promptfoo",url:"https://github.com/promptfoo/promptfoo",description:"",language:"TypeScript",stars:26361,forks:2565,starup:56},{title:`twentyhq /

      twenty`,owner:"twentyhq",name:"twenty",avatar:"https://avatars.githubusercontent.com/u/12035771?s=40&v=4",path:"/twentyhq/twenty",ourl:"https://github.com/twentyhq",url:"https://github.com/twentyhq/twenty",description:"",language:"TypeScript",stars:59620,forks:9717,starup:79},{title:`genspark-ai /

      genoffice`,owner:"genspark-ai",name:"genoffice",avatar:"https://avatars.githubusercontent.com/u/127435065?s=40&v=4",path:"/genspark-ai/genoffice",ourl:"https://github.com/genspark-ai",url:"https://github.com/genspark-ai/genoffice",description:"",language:"TypeScript",stars:10688,forks:1432,starup:152},{title:`liguobao /

      ds-harness-remote`,owner:"liguobao",name:"ds-harness-remote",avatar:"https://avatars.githubusercontent.com/u/10910802?s=40&v=4",path:"/liguobao/ds-harness-remote",ourl:"https://github.com/liguobao",url:"https://github.com/liguobao/ds-harness-remote",description:"",language:"TypeScript",stars:811,forks:74,starup:331},{title:`OpenHands /

      OpenHands`,owner:"OpenHands",name:"OpenHands",avatar:"https://avatars.githubusercontent.com/u/175740463?s=40&v=4",path:"/OpenHands/OpenHands",ourl:"https://github.com/OpenHands",url:"https://github.com/OpenHands/OpenHands",description:"",language:"TypeScript",stars:91700,forks:12166,starup:97},{title:`genlayerlabs /

      genlayer-project-boilerplate`,owner:"genlayerlabs",name:"genlayer-project-boilerplate",avatar:"https://avatars.githubusercontent.com/u/4550355?s=40&v=4",path:"/genlayerlabs/genlayer-project-boilerplate",ourl:"https://github.com/genlayerlabs",url:"https://github.com/genlayerlabs/genlayer-project-boilerplate",description:"",language:"TypeScript",stars:19169,forks:918,starup:57},{title:`Dokploy /

      dokploy`,owner:"Dokploy",name:"dokploy",avatar:"https://avatars.githubusercontent.com/u/47042324?s=40&v=4",path:"/Dokploy/dokploy",ourl:"https://github.com/Dokploy",url:"https://github.com/Dokploy/dokploy",description:"",language:"TypeScript",stars:37991,forks:3120,starup:30},{title:`firecrawl /

      firecrawl`,owner:"firecrawl",name:"firecrawl",avatar:"https://avatars.githubusercontent.com/u/20311743?s=40&v=4",path:"/firecrawl/firecrawl",ourl:"https://github.com/firecrawl",url:"https://github.com/firecrawl/firecrawl",description:"",language:"TypeScript",stars:194773,forks:10276,starup:430}],"TypeScript-weekly":[{title:`morluto /

      rea`,owner:"morluto",name:"rea",avatar:"https://avatars.githubusercontent.com/u/76467478?s=40&v=4",path:"/morluto/rea",ourl:"https://github.com/morluto",url:"https://github.com/morluto/rea",description:"",language:"TypeScript",stars:374811,forks:93736,starup:88243},{title:`ruvnet /

      ruflo`,owner:"ruvnet",name:"ruflo",avatar:"https://avatars.githubusercontent.com/u/2934394?s=40&v=4",path:"/ruvnet/ruflo",ourl:"https://github.com/ruvnet",url:"https://github.com/ruvnet/ruflo",description:"",language:"TypeScript",stars:78859,forks:9258,starup:3349},{title:`anomalyco /

      opencode`,owner:"anomalyco",name:"opencode",avatar:"https://avatars.githubusercontent.com/u/826656?s=40&v=4",path:"/anomalyco/opencode",ourl:"https://github.com/anomalyco",url:"https://github.com/anomalyco/opencode",description:"",language:"TypeScript",stars:220851,forks:29518,starup:6765},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:104234,forks:6583,starup:9545},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:13832,forks:1367,starup:1946},{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:71012,forks:6415,starup:5553},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:5509,forks:969,starup:1094},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:29716,forks:7990,starup:1733},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:40454,forks:5459,starup:4077},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7095,forks:1443,starup:2100},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:13510,forks:893,starup:2099},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:21475,forks:29942,starup:2679},{title:`iptv-org /

      iptv`,owner:"iptv-org",name:"iptv",avatar:"https://avatars.githubusercontent.com/u/7253922?s=40&v=4",path:"/iptv-org/iptv",ourl:"https://github.com/iptv-org",url:"https://github.com/iptv-org/iptv",description:"",language:"TypeScript",stars:142153,forks:8361,starup:1077},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:32035,forks:2207,starup:1926},{title:`chthollyphile /

      folia-major`,owner:"chthollyphile",name:"folia-major",avatar:"https://avatars.githubusercontent.com/u/30263107?s=40&v=4",path:"/chthollyphile/folia-major",ourl:"https://github.com/chthollyphile",url:"https://github.com/chthollyphile/folia-major",description:"",language:"TypeScript",stars:9106,forks:961,starup:2051},{title:`NapNeko /

      NapCatQQ`,owner:"NapNeko",name:"NapCatQQ",avatar:"https://avatars.githubusercontent.com/u/61873808?s=40&v=4",path:"/NapNeko/NapCatQQ",ourl:"https://github.com/NapNeko",url:"https://github.com/NapNeko/NapCatQQ",description:"",language:"TypeScript",stars:11388,forks:835,starup:366}],"TypeScript-monthly":[{title:`heygen-com /

      hyperframes`,owner:"heygen-com",name:"hyperframes",avatar:"https://avatars.githubusercontent.com/u/229591595?s=40&v=4",path:"/heygen-com/hyperframes",ourl:"https://github.com/heygen-com",url:"https://github.com/heygen-com/hyperframes",description:"",language:"TypeScript",stars:71012,forks:6415,starup:18268},{title:`paperclipai /

      paperclip`,owner:"paperclipai",name:"paperclip",avatar:"https://avatars.githubusercontent.com/u/34892728?s=40&v=4",path:"/paperclipai/paperclip",ourl:"https://github.com/paperclipai",url:"https://github.com/paperclipai/paperclip",description:"",language:"TypeScript",stars:106697,forks:17728,starup:25543},{title:`mksglu /

      context-mode`,owner:"mksglu",name:"context-mode",avatar:"https://avatars.githubusercontent.com/u/6067714?s=40&v=4",path:"/mksglu/context-mode",ourl:"https://github.com/mksglu",url:"https://github.com/mksglu/context-mode",description:"",language:"TypeScript",stars:32035,forks:2207,starup:8135},{title:`cursor /

      plugins`,owner:"cursor",name:"plugins",avatar:"https://avatars.githubusercontent.com/u/199161495?s=40&v=4",path:"/cursor/plugins",ourl:"https://github.com/cursor",url:"https://github.com/cursor/plugins",description:"",language:"TypeScript",stars:13832,forks:1367,starup:5333},{title:`tashfeenahmed /

      freellmapi`,owner:"tashfeenahmed",name:"freellmapi",avatar:"https://avatars.githubusercontent.com/u/9307356?s=40&v=4",path:"/tashfeenahmed/freellmapi",ourl:"https://github.com/tashfeenahmed",url:"https://github.com/tashfeenahmed/freellmapi",description:"",language:"TypeScript",stars:40454,forks:5459,starup:12006},{title:`pingdotgg /

      t3code`,owner:"pingdotgg",name:"t3code",avatar:"https://avatars.githubusercontent.com/u/51714798?s=40&v=4",path:"/pingdotgg/t3code",ourl:"https://github.com/pingdotgg",url:"https://github.com/pingdotgg/t3code",description:"",language:"TypeScript",stars:29716,forks:7990,starup:6387},{title:`thedotmack /

      claude-mem`,owner:"thedotmack",name:"claude-mem",avatar:"https://avatars.githubusercontent.com/u/683968?s=40&v=4",path:"/thedotmack/claude-mem",ourl:"https://github.com/thedotmack",url:"https://github.com/thedotmack/claude-mem",description:"",language:"TypeScript",stars:102638,forks:9068,starup:8445},{title:`supabase /

      supabase`,owner:"supabase",name:"supabase",avatar:"https://avatars.githubusercontent.com/u/19742402?s=40&v=4",path:"/supabase/supabase",ourl:"https://github.com/supabase",url:"https://github.com/supabase/supabase",description:"",language:"TypeScript",stars:113841,forks:16938,starup:3317},{title:`vercel-labs /

      skills`,owner:"vercel-labs",name:"skills",avatar:"https://avatars.githubusercontent.com/u/32676955?s=40&v=4",path:"/vercel-labs/skills",ourl:"https://github.com/vercel-labs",url:"https://github.com/vercel-labs/skills",description:"",language:"TypeScript",stars:36328,forks:3122,starup:4084},{title:`remotion-dev /

      remotion`,owner:"remotion-dev",name:"remotion",avatar:"https://avatars.githubusercontent.com/u/1629785?s=40&v=4",path:"/remotion-dev/remotion",ourl:"https://github.com/remotion-dev",url:"https://github.com/remotion-dev/remotion",description:"",language:"TypeScript",stars:66845,forks:5379,starup:6681},{title:`Effect-TS /

      effect`,owner:"Effect-TS",name:"effect",avatar:"https://avatars.githubusercontent.com/u/40680?s=40&v=4",path:"/Effect-TS/effect",ourl:"https://github.com/Effect-TS",url:"https://github.com/Effect-TS/effect",description:"",language:"TypeScript",stars:17371,forks:876,starup:1237},{title:`elie222 /

      rakazo`,owner:"elie222",name:"rakazo",avatar:"https://avatars.githubusercontent.com/u/3090527?s=40&v=4",path:"/elie222/rakazo",ourl:"https://github.com/elie222",url:"https://github.com/elie222/rakazo",description:"",language:"TypeScript",stars:5509,forks:969,starup:2518},{title:`stablyai /

      orca`,owner:"stablyai",name:"orca",avatar:"https://avatars.githubusercontent.com/u/4138956?s=40&v=4",path:"/stablyai/orca",ourl:"https://github.com/stablyai",url:"https://github.com/stablyai/orca",description:"",language:"TypeScript",stars:104234,forks:6583,starup:27848},{title:`LibreSpark /

      LibreTV`,owner:"LibreSpark",name:"LibreTV",avatar:"https://avatars.githubusercontent.com/u/110226580?s=40&v=4",path:"/LibreSpark/LibreTV",ourl:"https://github.com/LibreSpark",url:"https://github.com/LibreSpark/LibreTV",description:"",language:"TypeScript",stars:21475,forks:29942,starup:7573},{title:`dream-num /

      univer`,owner:"dream-num",name:"univer",avatar:"https://avatars.githubusercontent.com/u/14025786?s=40&v=4",path:"/dream-num/univer",ourl:"https://github.com/dream-num",url:"https://github.com/dream-num/univer",description:"",language:"TypeScript",stars:22738,forks:1916,starup:6799},{title:`mobile-next /

      mobile-mcp`,owner:"mobile-next",name:"mobile-mcp",avatar:"https://avatars.githubusercontent.com/u/2457607?s=40&v=4",path:"/mobile-next/mobile-mcp",ourl:"https://github.com/mobile-next",url:"https://github.com/mobile-next/mobile-mcp",description:"",language:"TypeScript",stars:9942,forks:883,starup:3155},{title:`vitejs /

      vite`,owner:"vitejs",name:"vite",avatar:"https://avatars.githubusercontent.com/u/49056869?s=40&v=4",path:"/vitejs/vite",ourl:"https://github.com/vitejs",url:"https://github.com/vitejs/vite",description:"",language:"TypeScript",stars:83498,forks:8874,starup:822},{title:`Renhuai123 /

      ziwei-doushu`,owner:"Renhuai123",name:"ziwei-doushu",avatar:"https://avatars.githubusercontent.com/u/91890238?s=40&v=4",path:"/Renhuai123/ziwei-doushu",ourl:"https://github.com/Renhuai123",url:"https://github.com/Renhuai123/ziwei-doushu",description:"",language:"TypeScript",stars:7095,forks:1443,starup:2556},{title:`thesysdev /

      openui`,owner:"thesysdev",name:"openui",avatar:"https://avatars.githubusercontent.com/u/173032156?s=40&v=4",path:"/thesysdev/openui",ourl:"https://github.com/thesysdev",url:"https://github.com/thesysdev/openui",description:"",language:"TypeScript",stars:13510,forks:893,starup:3597},{title:`anthropics /

      claude-code`,owner:"anthropics",name:"claude-code",avatar:"https://avatars.githubusercontent.com/u/65916846?s=40&v=4",path:"/anthropics/claude-code",ourl:"https://github.com/anthropics",url:"https://github.com/anthropics/claude-code",description:"",language:"TypeScript",stars:153213,forks:26655,starup:6349}],"Vue-daily":[{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40955,forks:5517,starup:17},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24673,forks:3020,starup:24},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17071,forks:1384,starup:13},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:686,forks:357,starup:0},{title:`zwave-js /

      zwave-js-ui`,owner:"zwave-js",name:"zwave-js-ui",avatar:"https://avatars.githubusercontent.com/u/11502495?s=40&v=4",path:"/zwave-js/zwave-js-ui",ourl:"https://github.com/zwave-js",url:"https://github.com/zwave-js/zwave-js-ui",description:"",language:"Vue",stars:1247,forks:252,starup:0},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2039,forks:525,starup:4},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4473,forks:160,starup:8},{title:`Daymychen /

      art-design-pro`,owner:"Daymychen",name:"art-design-pro",avatar:"https://avatars.githubusercontent.com/u/29684587?s=40&v=4",path:"/Daymychen/art-design-pro",ourl:"https://github.com/Daymychen",url:"https://github.com/Daymychen/art-design-pro",description:"",language:"Vue",stars:5946,forks:1122,starup:3},{title:`markterence /

      discord-quest-completer`,owner:"markterence",name:"discord-quest-completer",avatar:"https://avatars.githubusercontent.com/u/2003215?s=40&v=4",path:"/markterence/discord-quest-completer",ourl:"https://github.com/markterence",url:"https://github.com/markterence/discord-quest-completer",description:"",language:"Vue",stars:948,forks:92,starup:4},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54009,forks:14376,starup:2},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:469,forks:71704,starup:0},{title:`frappe /

      crm`,owner:"frappe",name:"crm",avatar:"https://avatars.githubusercontent.com/u/30859809?s=40&v=4",path:"/frappe/crm",ourl:"https://github.com/frappe",url:"https://github.com/frappe/crm",description:"",language:"Vue",stars:3846,forks:1535,starup:2},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Lua",stars:260,forks:32,starup:1},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90129,forks:30238,starup:0},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26796,forks:1966,starup:9},{title:`bastienwirtz /

      homer`,owner:"bastienwirtz",name:"homer",avatar:"https://avatars.githubusercontent.com/u/345559?s=40&v=4",path:"/bastienwirtz/homer",ourl:"https://github.com/bastienwirtz",url:"https://github.com/bastienwirtz/homer",description:"",language:"Vue",stars:11682,forks:927,starup:3},{title:`Jelosus2 /

      BD2-L2D-Viewer`,owner:"Jelosus2",name:"BD2-L2D-Viewer",avatar:"https://avatars.githubusercontent.com/u/75176441?s=40&v=4",path:"/Jelosus2/BD2-L2D-Viewer",ourl:"https://github.com/Jelosus2",url:"https://github.com/Jelosus2/BD2-L2D-Viewer",description:"",language:"Vue",stars:554,forks:101,starup:1},{title:`yangzongzhuan /

      RuoYi-Vue3`,owner:"yangzongzhuan",name:"RuoYi-Vue3",avatar:"https://avatars.githubusercontent.com/u/19240310?s=40&v=4",path:"/yangzongzhuan/RuoYi-Vue3",ourl:"https://github.com/yangzongzhuan",url:"https://github.com/yangzongzhuan/RuoYi-Vue3",description:"",language:"Vue",stars:6790,forks:2511,starup:1}],"Vue-weekly":[{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6933,forks:433,starup:206},{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3332,forks:254,starup:502},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33434,forks:4661,starup:64},{title:`vueComponent /

      ant-design-vue`,owner:"vueComponent",name:"ant-design-vue",avatar:"https://avatars.githubusercontent.com/u/6937879?s=40&v=4",path:"/vueComponent/ant-design-vue",ourl:"https://github.com/vueComponent",url:"https://github.com/vueComponent/ant-design-vue",description:"",language:"Vue",stars:21687,forks:3888,starup:7},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17071,forks:1384,starup:79},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24673,forks:3020,starup:152},{title:`keleus /

      BewlyCat`,owner:"keleus",name:"BewlyCat",avatar:"https://avatars.githubusercontent.com/u/33394391?s=40&v=4",path:"/keleus/BewlyCat",ourl:"https://github.com/keleus",url:"https://github.com/keleus/BewlyCat",description:"",language:"Vue",stars:4473,forks:160,starup:52},{title:`RikkaApps /

      websites`,owner:"RikkaApps",name:"websites",avatar:"https://avatars.githubusercontent.com/u/12999176?s=40&v=4",path:"/RikkaApps/websites",ourl:"https://github.com/RikkaApps",url:"https://github.com/RikkaApps/websites",description:"",language:"Vue",stars:469,forks:71704,starup:7},{title:`PanJiaChen /

      vue-element-admin`,owner:"PanJiaChen",name:"vue-element-admin",avatar:"https://avatars.githubusercontent.com/u/8121621?s=40&v=4",path:"/PanJiaChen/vue-element-admin",ourl:"https://github.com/PanJiaChen",url:"https://github.com/PanJiaChen/vue-element-admin",description:"",language:"Vue",stars:90129,forks:30238,starup:13},{title:`CorentinTh /

      it-tools`,owner:"CorentinTh",name:"it-tools",avatar:"https://avatars.githubusercontent.com/u/25065347?s=40&v=4",path:"/CorentinTh/it-tools",ourl:"https://github.com/CorentinTh",url:"https://github.com/CorentinTh/it-tools",description:"",language:"Vue",stars:40955,forks:5517,starup:105},{title:`RLS-Modding /

      rls_career_overhaul`,owner:"RLS-Modding",name:"rls_career_overhaul",avatar:"https://avatars.githubusercontent.com/u/123184923?s=40&v=4",path:"/RLS-Modding/rls_career_overhaul",ourl:"https://github.com/RLS-Modding",url:"https://github.com/RLS-Modding/rls_career_overhaul",description:"",language:"Lua",stars:260,forks:32,starup:5},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54009,forks:14376,starup:10},{title:`wux1an /

      wxapkg`,owner:"wux1an",name:"wxapkg",avatar:"https://avatars.githubusercontent.com/u/87492350?s=40&v=4",path:"/wux1an/wxapkg",ourl:"https://github.com/wux1an",url:"https://github.com/wux1an/wxapkg",description:"",language:"Vue",stars:4301,forks:880,starup:32},{title:`Rule-34 /

      App`,owner:"Rule-34",name:"App",avatar:"https://avatars.githubusercontent.com/u/37181533?s=40&v=4",path:"/Rule-34/App",ourl:"https://github.com/Rule-34",url:"https://github.com/Rule-34/App",description:"",language:"Vue",stars:385,forks:49,starup:1},{title:`AutomaApp /

      automa`,owner:"AutomaApp",name:"automa",avatar:"https://avatars.githubusercontent.com/u/22908993?s=40&v=4",path:"/AutomaApp/automa",ourl:"https://github.com/AutomaApp",url:"https://github.com/AutomaApp/automa",description:"",language:"Vue",stars:21676,forks:2334,starup:26}],"Vue-monthly":[{title:`Smaug6739 /

      Alexandrie`,owner:"Smaug6739",name:"Alexandrie",avatar:"https://avatars.githubusercontent.com/u/59796136?s=40&v=4",path:"/Smaug6739/Alexandrie",ourl:"https://github.com/Smaug6739",url:"https://github.com/Smaug6739/Alexandrie",description:"",language:"Vue",stars:3332,forks:254,starup:581},{title:`julyx10 /

      lap`,owner:"julyx10",name:"lap",avatar:"https://avatars.githubusercontent.com/u/36072047?s=40&v=4",path:"/julyx10/lap",ourl:"https://github.com/julyx10",url:"https://github.com/julyx10/lap",description:"",language:"Vue",stars:4042,forks:234,starup:1414},{title:`advplyr /

      audiobookshelf-app`,owner:"advplyr",name:"audiobookshelf-app",avatar:"https://avatars.githubusercontent.com/u/67830747?s=40&v=4",path:"/advplyr/audiobookshelf-app",ourl:"https://github.com/advplyr",url:"https://github.com/advplyr/audiobookshelf-app",description:"",language:"Vue",stars:2793,forks:475,starup:74},{title:`MoeKoeMusic /

      MoeKoeMusic`,owner:"MoeKoeMusic",name:"MoeKoeMusic",avatar:"https://avatars.githubusercontent.com/u/32321958?s=40&v=4",path:"/MoeKoeMusic/MoeKoeMusic",ourl:"https://github.com/MoeKoeMusic",url:"https://github.com/MoeKoeMusic/MoeKoeMusic",description:"",language:"Vue",stars:6933,forks:433,starup:613},{title:`Gzh0821 /

      pvzg_site`,owner:"Gzh0821",name:"pvzg_site",avatar:"https://avatars.githubusercontent.com/u/87368454?s=40&v=4",path:"/Gzh0821/pvzg_site",ourl:"https://github.com/Gzh0821",url:"https://github.com/Gzh0821/pvzg_site",description:"",language:"Vue",stars:1790,forks:139,starup:135},{title:`algerkong /

      AlgerMusicPlayer`,owner:"algerkong",name:"AlgerMusicPlayer",avatar:"https://avatars.githubusercontent.com/u/45055748?s=40&v=4",path:"/algerkong/AlgerMusicPlayer",ourl:"https://github.com/algerkong",url:"https://github.com/algerkong/AlgerMusicPlayer",description:"",language:"Vue",stars:17071,forks:1384,starup:355},{title:`qier222 /

      YesPlayMusic`,owner:"qier222",name:"YesPlayMusic",avatar:"https://avatars.githubusercontent.com/u/68148142?s=40&v=4",path:"/qier222/YesPlayMusic",ourl:"https://github.com/qier222",url:"https://github.com/qier222/YesPlayMusic",description:"",language:"Vue",stars:33434,forks:4661,starup:218},{title:`docmirror /

      dev-sidecar`,owner:"docmirror",name:"dev-sidecar",avatar:"https://avatars.githubusercontent.com/u/1527893?s=40&v=4",path:"/docmirror/dev-sidecar",ourl:"https://github.com/docmirror",url:"https://github.com/docmirror/dev-sidecar",description:"",language:"Vue",stars:24673,forks:3020,starup:543},{title:`geekgeekrun /

      geekgeekrun`,owner:"geekgeekrun",name:"geekgeekrun",avatar:"https://avatars.githubusercontent.com/u/166113191?s=40&v=4",path:"/geekgeekrun/geekgeekrun",ourl:"https://github.com/geekgeekrun",url:"https://github.com/geekgeekrun/geekgeekrun",description:"",language:"Vue",stars:2828,forks:213,starup:266},{title:`yuhonas /

      free-exercise-db`,owner:"yuhonas",name:"free-exercise-db",avatar:"https://avatars.githubusercontent.com/u/4928?s=40&v=4",path:"/yuhonas/free-exercise-db",ourl:"https://github.com/yuhonas",url:"https://github.com/yuhonas/free-exercise-db",description:"",language:"Vue",stars:2039,forks:525,starup:142},{title:`lissy93 /

      dashy`,owner:"lissy93",name:"dashy",avatar:"https://avatars.githubusercontent.com/u/1862727?s=40&v=4",path:"/lissy93/dashy",ourl:"https://github.com/lissy93",url:"https://github.com/lissy93/dashy",description:"",language:"Vue",stars:26796,forks:1966,starup:300},{title:`kodadot /

      nft-gallery`,owner:"kodadot",name:"nft-gallery",avatar:"https://avatars.githubusercontent.com/u/22471030?s=40&v=4",path:"/kodadot/nft-gallery",ourl:"https://github.com/kodadot",url:"https://github.com/kodadot/nft-gallery",description:"",language:"Vue",stars:686,forks:357,starup:1},{title:`1sdv /

      TripStar`,owner:"1sdv",name:"TripStar",avatar:"https://avatars.githubusercontent.com/u/89129330?s=40&v=4",path:"/1sdv/TripStar",ourl:"https://github.com/1sdv",url:"https://github.com/1sdv/TripStar",description:"",language:"Vue",stars:2504,forks:291,starup:226},{title:`ElemeFE /

      element`,owner:"ElemeFE",name:"element",avatar:"https://avatars.githubusercontent.com/u/10095631?s=40&v=4",path:"/ElemeFE/element",ourl:"https://github.com/ElemeFE",url:"https://github.com/ElemeFE/element",description:"",language:"Vue",stars:54009,forks:14376,starup:21},{title:`zs1083339604 /

      FaceWinUnlock-Tauri`,owner:"zs1083339604",name:"FaceWinUnlock-Tauri",avatar:"https://avatars.githubusercontent.com/u/41194731?s=40&v=4",path:"/zs1083339604/FaceWinUnlock-Tauri",ourl:"https://github.com/zs1083339604",url:"https://github.com/zs1083339604/FaceWinUnlock-Tauri",description:"",language:"Vue",stars:1996,forks:110,starup:80},{title:`vuejs /

      docs`,owner:"vuejs",name:"docs",avatar:"https://avatars.githubusercontent.com/u/499550?s=40&v=4",path:"/vuejs/docs",ourl:"https://github.com/vuejs",url:"https://github.com/vuejs/docs",description:"",language:"Vue",stars:3240,forks:5048,starup:8},{title:`VueTorrent /

      VueTorrent`,owner:"VueTorrent",name:"VueTorrent",avatar:"https://avatars.githubusercontent.com/u/22910497?s=40&v=4",path:"/VueTorrent/VueTorrent",ourl:"https://github.com/VueTorrent",url:"https://github.com/VueTorrent/VueTorrent",description:"",language:"Vue",stars:7003,forks:348,starup:53},{title:`wrapper-offline /

      wrapper-offline`,owner:"wrapper-offline",name:"wrapper-offline",avatar:"https://avatars.githubusercontent.com/u/94416681?s=40&v=4",path:"/wrapper-offline/wrapper-offline",ourl:"https://github.com/wrapper-offline",url:"https://github.com/wrapper-offline/wrapper-offline",description:"",language:"Vue",stars:308,forks:366,starup:11}]},mt=T({__name:"index",setup(k){const{view:r,dateRange:o,language:s,color:u}=K(),c=H(()=>b(X[`${s.value}-${o.value}`]));V("color",u),V("data",c);function b(i){return i.sort((a,n)=>n.starup-a.starup)}return(i,a)=>{const n=A,g=D,m=E,d=P,t=G,e=q,y=N,w=U,L=W;return h(),_("div",null,[v(d,null,{default:S(()=>[v(n,{modelValue:l(o),"onUpdate:modelValue":a[0]||(a[0]=p=>x(o)?o.value=p:null)},null,8,["modelValue"]),v(g,{modelValue:l(s),"onUpdate:modelValue":a[1]||(a[1]=p=>x(s)?s.value=p:null)},null,8,["modelValue"]),v(m,{modelValue:l(r),"onUpdate:modelValue":a[2]||(a[2]=p=>x(r)?r.value=p:null),"show-starup":!0},null,8,["modelValue"])]),_:1}),v($,{name:"fade-top",mode:"out-in"},{default:S(()=>[l(r)==="list"?(h(),f(e,{key:0},{icons:S(({repo:p})=>[v(t,{title:"starup",icon:"i-ph:star-half-bold",text:p.starup,"text-red":""},null,8,["text"])]),_:1})):l(r)==="table"?(h(),f(y,{key:1,"has-starup":""})):l(r)==="chart"?(h(),f(w,{key:2})):(h(),f(L,{key:3,data:l(c)},null,8,["data"]))]),_:1})])}}});export{mt as default};
