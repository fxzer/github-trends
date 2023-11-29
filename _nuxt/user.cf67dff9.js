import{bn as vt,bo as wt,bp as yt,fb as ct,g as Mt,f8 as $t,E as jt}from"./chartBehaver.d70bf0d3.js";import Tt from"./Icon.731f5ae0.js";import{x as ot,o as S,c as U,a as m,t as C,b as Q,d as it,u as J,N as st,W as kt,g as mt,r as rt,w as ht,A as pt,O as gt,Q as dt,J as at}from"./entry.0d5c33ec.js";import"./index.7e602c3b.js";import"./index.df58e121.js";var ut=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _t={exports:{}};(function(n,N){(function(_,l){n.exports=l()})(ut,function(){var _=1e3,l=6e4,$=36e5,d="millisecond",w="second",b="minute",y="hour",h="day",M="week",u="month",D="quarter",O="year",Z="date",A="Invalid Date",Y=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(a){var e=["th","st","nd","rd"],t=a%100;return"["+a+(e[(t-20)%10]||e[t]||e[0])+"]"}},B=function(a,e,t){var r=String(a);return!r||r.length>=e?a:""+Array(e+1-r.length).join(t)+a},W={s:B,z:function(a){var e=-a.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),s=t%60;return(e<=0?"+":"-")+B(r,2,"0")+":"+B(s,2,"0")},m:function a(e,t){if(e.date()<t.date())return-a(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(r,u),i=t-s<0,o=e.clone().add(r+(i?-1:1),u);return+(-(r+(t-s)/(i?s-o:o-s))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return{M:u,y:O,w:M,d:h,D:Z,h:y,m:b,s:w,ms:d,Q:D}[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return a===void 0}},T="en",k={};k[T]=I;var F="$isDayjsObject",E=function(a){return a instanceof K||!(!a||!a[F])},q=function a(e,t,r){var s;if(!e)return T;if(typeof e=="string"){var i=e.toLowerCase();k[i]&&(s=i),t&&(k[i]=t,s=i);var o=e.split("-");if(!s&&o.length>1)return a(o[0])}else{var p=e.name;k[p]=e,s=p}return!r&&s&&(T=s),s||!r&&T},f=function(a,e){if(E(a))return a.clone();var t=typeof e=="object"?e:{};return t.date=a,t.args=arguments,new K(t)},c=W;c.l=q,c.i=E,c.w=function(a,e){return f(a,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var K=function(){function a(t){this.$L=q(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[F]=!0}var e=a.prototype;return e.parse=function(t){this.$d=function(r){var s=r.date,i=r.utc;if(s===null)return new Date(NaN);if(c.u(s))return new Date;if(s instanceof Date)return new Date(s);if(typeof s=="string"&&!/Z$/i.test(s)){var o=s.match(Y);if(o){var p=o[2]-1||0,g=(o[7]||"0").substring(0,3);return i?new Date(Date.UTC(o[1],p,o[3]||1,o[4]||0,o[5]||0,o[6]||0,g)):new Date(o[1],p,o[3]||1,o[4]||0,o[5]||0,o[6]||0,g)}}return new Date(s)}(t),this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return c},e.isValid=function(){return this.$d.toString()!==A},e.isSame=function(t,r){var s=f(t);return this.startOf(r)<=s&&s<=this.endOf(r)},e.isAfter=function(t,r){return f(t)<this.startOf(r)},e.isBefore=function(t,r){return this.endOf(r)<f(t)},e.$g=function(t,r,s){return c.u(t)?this[r]:this.set(s,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,r){var s=this,i=!!c.u(r)||r,o=c.p(t),p=function(X,x){var V=c.w(s.$u?Date.UTC(s.$y,x,X):new Date(s.$y,x,X),s);return i?V:V.endOf(h)},g=function(X,x){return c.w(s.toDate()[X].apply(s.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(x)),s)},v=this.$W,j=this.$M,z=this.$D,H="set"+(this.$u?"UTC":"");switch(o){case O:return i?p(1,0):p(31,11);case u:return i?p(1,j):p(0,j+1);case M:var L=this.$locale().weekStart||0,P=(v<L?v+7:v)-L;return p(i?z-P:z+(6-P),j);case h:case Z:return g(H+"Hours",0);case y:return g(H+"Minutes",1);case b:return g(H+"Seconds",2);case w:return g(H+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,r){var s,i=c.p(t),o="set"+(this.$u?"UTC":""),p=(s={},s[h]=o+"Date",s[Z]=o+"Date",s[u]=o+"Month",s[O]=o+"FullYear",s[y]=o+"Hours",s[b]=o+"Minutes",s[w]=o+"Seconds",s[d]=o+"Milliseconds",s)[i],g=i===h?this.$D+(r-this.$W):r;if(i===u||i===O){var v=this.clone().set(Z,1);v.$d[p](g),v.init(),this.$d=v.set(Z,Math.min(this.$D,v.daysInMonth())).$d}else p&&this.$d[p](g);return this.init(),this},e.set=function(t,r){return this.clone().$set(t,r)},e.get=function(t){return this[c.p(t)]()},e.add=function(t,r){var s,i=this;t=Number(t);var o=c.p(r),p=function(j){var z=f(i);return c.w(z.date(z.date()+Math.round(j*t)),i)};if(o===u)return this.set(u,this.$M+t);if(o===O)return this.set(O,this.$y+t);if(o===h)return p(1);if(o===M)return p(7);var g=(s={},s[b]=l,s[y]=$,s[w]=_,s)[o]||1,v=this.$d.getTime()+t*g;return c.w(v,this)},e.subtract=function(t,r){return this.add(-1*t,r)},e.format=function(t){var r=this,s=this.$locale();if(!this.isValid())return s.invalidDate||A;var i=t||"YYYY-MM-DDTHH:mm:ssZ",o=c.z(this),p=this.$H,g=this.$m,v=this.$M,j=s.weekdays,z=s.months,H=s.meridiem,L=function(x,V,G,tt){return x&&(x[V]||x(r,i))||G[V].slice(0,tt)},P=function(x){return c.s(p%12||12,x,"0")},X=H||function(x,V,G){var tt=x<12?"AM":"PM";return G?tt.toLowerCase():tt};return i.replace(R,function(x,V){return V||function(G){switch(G){case"YY":return String(r.$y).slice(-2);case"YYYY":return c.s(r.$y,4,"0");case"M":return v+1;case"MM":return c.s(v+1,2,"0");case"MMM":return L(s.monthsShort,v,z,3);case"MMMM":return L(z,v);case"D":return r.$D;case"DD":return c.s(r.$D,2,"0");case"d":return String(r.$W);case"dd":return L(s.weekdaysMin,r.$W,j,2);case"ddd":return L(s.weekdaysShort,r.$W,j,3);case"dddd":return j[r.$W];case"H":return String(p);case"HH":return c.s(p,2,"0");case"h":return P(1);case"hh":return P(2);case"a":return X(p,g,!0);case"A":return X(p,g,!1);case"m":return String(g);case"mm":return c.s(g,2,"0");case"s":return String(r.$s);case"ss":return c.s(r.$s,2,"0");case"SSS":return c.s(r.$ms,3,"0");case"Z":return o}return null}(x)||o.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,r,s){var i,o=this,p=c.p(r),g=f(t),v=(g.utcOffset()-this.utcOffset())*l,j=this-g,z=function(){return c.m(o,g)};switch(p){case O:i=z()/12;break;case u:i=z();break;case D:i=z()/3;break;case M:i=(j-v)/6048e5;break;case h:i=(j-v)/864e5;break;case y:i=j/$;break;case b:i=j/l;break;case w:i=j/_;break;default:i=j}return s?i:c.a(i)},e.daysInMonth=function(){return this.endOf(u).$D},e.$locale=function(){return k[this.$L]},e.locale=function(t,r){if(!t)return this.$L;var s=this.clone(),i=q(t,r,!0);return i&&(s.$L=i),s},e.clone=function(){return c.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},a}(),lt=K.prototype;return f.prototype=lt,[["$ms",d],["$s",w],["$m",b],["$H",y],["$W",h],["$M",u],["$y",O],["$D",Z]].forEach(function(a){lt[a[1]]=function(e){return this.$g(e,a[0],a[1])}}),f.extend=function(a,e){return a.$i||(a(e,K,f),a.$i=!0),f},f.locale=q,f.isDayjs=E,f.unix=function(a){return f(1e3*a)},f.en=k[T],f.Ls=k,f.p={},f})})(_t);var xt=_t.exports;const et=nt(xt);var bt={exports:{}};(function(n,N){(function(_,l){n.exports=l()})(ut,function(){return function(_,l,$){_=_||{};var d=l.prototype,w={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(h,M,u,D){return d.fromToBase(h,M,u,D)}$.en.relativeTime=w,d.fromToBase=function(h,M,u,D,O){for(var Z,A,Y,R=u.$locale().relativeTime||w,I=_.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],B=I.length,W=0;W<B;W+=1){var T=I[W];T.d&&(Z=D?$(h).diff(u,T.d,!0):u.diff(h,T.d,!0));var k=(_.rounding||Math.round)(Math.abs(Z));if(Y=Z>0,k<=T.r||!T.r){k<=1&&W>0&&(T=I[W-1]);var F=R[T.l];O&&(k=O(""+k)),A=typeof F=="string"?F.replace("%d",k):F(k,M,T.l,Y);break}}if(M)return A;var E=Y?R.future:R.past;return typeof E=="function"?E(A):E.replace("%s",A)},d.to=function(h,M){return b(h,M,this,!0)},d.from=function(h,M){return b(h,M,this)};var y=function(h){return h.$u?$.utc():$()};d.toNow=function(h){return this.to(y(this),h)},d.fromNow=function(h){return this.from(y(this),h)}}})})(bt);var Dt=bt.exports;const zt=nt(Dt);var ft={exports:{}};(function(n,N){(function(_,l){n.exports=l()})(ut,function(){return function(_,l,$){$.updateLocale=function(d,w){var b=$.Ls[d];if(b)return(w?Object.keys(w):[]).forEach(function(y){b[y]=w[y]}),b}}})})(ft);var St=ft.exports;const Nt=nt(St);et.extend(zt);et.extend(Nt);et.updateLocale("en",{relativeTime:{past:"%s前",s:"几秒",m:"几分钟",mm:"%d 分钟",h:"an 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 月",MM:"%d 月",y:"1 年",yy:"%d 年"}});const Ot={class:"flex items-center border rounded-md p2 dark:border-gray-600/80 hover:border-blue"},Zt=["src"],Ct={class:"space-y-1"},Ut=["href"],Vt={class:"mr-2 font-semibold text-blue-500"},Jt={class:"text-slate-400 dark:text-slate-500/90"},Qt={class:"flex space-x-3"},At={class:"flex-center gap-1",title:"粉丝数量"},Wt={class:"text-pink-500"},Et={class:"flex-center gap-1",title:"仓库数量"},Lt={class:"text-violet-500"},Xt={class:"flex-center gap-1",title:"最近更新"},Ft={class:"text-green-500"},Ht={class:"flex text-slate-500 space-x-3"},Yt={key:0,class:"flex-center gap-1",title:"公司"},Rt={key:1,class:"flex-center gap-1",title:"位置"},It={key:2,class:"flex-center gap-1",title:"邮箱"},Bt={class:"text-blue-600"},Pt=["href"],Gt=ot({__name:"index",props:["user"],setup(n){return(N,_)=>{const l=Tt;return S(),U("div",Ot,[m("img",{src:n.user.avatar_url,class:"mr-2 wh-15 rounded-full"},null,8,Zt),m("div",Ct,[m("a",{href:n.user.html_url,target:"_blank",class:"text-lg"},[m("span",Vt,C(n.user.name),1),m("span",Jt,C(n.user.login),1)],8,Ut),m("div",Qt,[m("span",At,[Q(l,{name:"ph:users-four",color:"#9ca3af"}),m("span",Wt,C(n.user.followers),1)]),m("span",Et,[Q(l,{name:"teenyicons:git-outline",color:"#9ca3af"}),it(),m("span",Lt,C(n.user.public_repos),1)]),m("span",Xt,[Q(l,{name:"ic:outline-update",color:"#9ca3af"}),m("span",Ft,C(J(et)(n.user.updated_at).fromNow()),1)])]),m("div",Ht,[n.user.company?(S(),U("span",Yt,[Q(l,{name:"ph:buildings-bold",color:"#9ca3af"}),m("span",null,C(n.user.company),1)])):st("",!0),n.user.location?(S(),U("span",Rt,[Q(l,{name:"ph:map-pin-line-bold",color:"#9ca3af"}),it(),m("span",null,C(n.user.location),1)])):st("",!0),n.user.email?(S(),U("span",It,[Q(l,{name:"material-symbols:attach-email-outline",color:"#9ca3af"}),m("span",null,C(n.user.email),1)])):st("",!0)]),m("p",Bt,[m("a",{href:n.user.blog,target:"_blank"},C(n.user.blog),9,Pt)])])])}}}),qt=ot({__name:"Chart",props:{data:{}},setup(n){const N=n,_=[{name:"粉丝",type:"bar",stack:"total",itemStyle:{color:"#f472b6"},label:{show:!0,color:"#fff"},emphasis:{focus:"series"}},{name:"仓库",type:"bar",stack:"total",label:{show:!0},itemStyle:{color:"#F9C858"},emphasis:{focus:"series"}}],{data:l}=kt(N),$=vt("仓库排行榜",_),{domRef:d}=wt($,yt);function w(b){const[y,h,M]=b.reduce((u,D)=>(u[0].unshift(D.followers),u[1].unshift(D.public_repos),u[2].unshift(`${D.name} (${D.login})`),u),[[],[],[]]);$.value.yAxis.data=M,$.value.series[0].data=y,$.value.series[1].data=h}return mt(l,()=>{w(l.value)},{deep:!0,immediate:!0}),(b,y)=>(S(),U("div",{ref_key:"chartRef",ref:d,class:"h-300 w-330"},null,512))}}),Kt={Global:[{login:"torvalds",id:1024025,node_id:"MDQ6VXNlcjEwMjQwMjU=",avatar_url:"https://avatars.githubusercontent.com/u/1024025?v=4",gravatar_id:"",url:"https://api.github.com/users/torvalds",html_url:"https://github.com/torvalds",followers_url:"https://api.github.com/users/torvalds/followers",following_url:"https://api.github.com/users/torvalds/following{/other_user}",gists_url:"https://api.github.com/users/torvalds/gists{/gist_id}",starred_url:"https://api.github.com/users/torvalds/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/torvalds/subscriptions",organizations_url:"https://api.github.com/users/torvalds/orgs",repos_url:"https://api.github.com/users/torvalds/repos",events_url:"https://api.github.com/users/torvalds/events{/privacy}",received_events_url:"https://api.github.com/users/torvalds/received_events",type:"User",site_admin:!1,score:1,name:"Linus Torvalds",company:"Linux Foundation",blog:"",location:"Portland, OR",email:null,hireable:null,bio:null,twitter_username:null,public_repos:7,public_gists:0,followers:195109,following:0,created_at:"2011-09-03T15:26:22Z",updated_at:"2023-11-12T20:08:30Z"},{login:"yyx990803",id:499550,node_id:"MDQ6VXNlcjQ5OTU1MA==",avatar_url:"https://avatars.githubusercontent.com/u/499550?v=4",gravatar_id:"",url:"https://api.github.com/users/yyx990803",html_url:"https://github.com/yyx990803",followers_url:"https://api.github.com/users/yyx990803/followers",following_url:"https://api.github.com/users/yyx990803/following{/other_user}",gists_url:"https://api.github.com/users/yyx990803/gists{/gist_id}",starred_url:"https://api.github.com/users/yyx990803/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/yyx990803/subscriptions",organizations_url:"https://api.github.com/users/yyx990803/orgs",repos_url:"https://api.github.com/users/yyx990803/repos",events_url:"https://api.github.com/users/yyx990803/events{/privacy}",received_events_url:"https://api.github.com/users/yyx990803/received_events",type:"User",site_admin:!1,score:1,name:"Evan You",company:"vuejs",blog:"http://evanyou.me",location:"Singapore",email:null,hireable:null,bio:null,twitter_username:null,public_repos:186,public_gists:72,followers:96520,following:95,created_at:"2010-11-28T01:05:40Z",updated_at:"2023-11-04T02:09:39Z"},{login:"gaearon",id:810438,node_id:"MDQ6VXNlcjgxMDQzOA==",avatar_url:"https://avatars.githubusercontent.com/u/810438?v=4",gravatar_id:"",url:"https://api.github.com/users/gaearon",html_url:"https://github.com/gaearon",followers_url:"https://api.github.com/users/gaearon/followers",following_url:"https://api.github.com/users/gaearon/following{/other_user}",gists_url:"https://api.github.com/users/gaearon/gists{/gist_id}",starred_url:"https://api.github.com/users/gaearon/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/gaearon/subscriptions",organizations_url:"https://api.github.com/users/gaearon/orgs",repos_url:"https://api.github.com/users/gaearon/repos",events_url:"https://api.github.com/users/gaearon/events{/privacy}",received_events_url:"https://api.github.com/users/gaearon/received_events",type:"User",site_admin:!1,score:1,name:"dan",company:"@bluesky-social ",blog:"",location:null,email:"dan.abramov@gmail.com",hireable:null,bio:null,twitter_username:"dan_abramov",public_repos:268,public_gists:78,followers:85206,following:172,created_at:"2011-05-25T18:18:31Z",updated_at:"2023-08-28T19:01:10Z"},{login:"ruanyf",id:905434,node_id:"MDQ6VXNlcjkwNTQzNA==",avatar_url:"https://avatars.githubusercontent.com/u/905434?v=4",gravatar_id:"",url:"https://api.github.com/users/ruanyf",html_url:"https://github.com/ruanyf",followers_url:"https://api.github.com/users/ruanyf/followers",following_url:"https://api.github.com/users/ruanyf/following{/other_user}",gists_url:"https://api.github.com/users/ruanyf/gists{/gist_id}",starred_url:"https://api.github.com/users/ruanyf/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ruanyf/subscriptions",organizations_url:"https://api.github.com/users/ruanyf/orgs",repos_url:"https://api.github.com/users/ruanyf/repos",events_url:"https://api.github.com/users/ruanyf/events{/privacy}",received_events_url:"https://api.github.com/users/ruanyf/received_events",type:"User",site_admin:!1,score:1,name:"Ruan YiFeng",company:null,blog:"https://twitter.com/ruanyf",location:"Shanghai, China",email:"yifeng.ruan@gmail.com",hireable:null,bio:null,twitter_username:null,public_repos:70,public_gists:27,followers:76868,following:0,created_at:"2011-07-10T01:07:17Z",updated_at:"2023-11-23T03:50:15Z"},{login:"gustavoguanabara",id:8683378,node_id:"MDQ6VXNlcjg2ODMzNzg=",avatar_url:"https://avatars.githubusercontent.com/u/8683378?v=4",gravatar_id:"",url:"https://api.github.com/users/gustavoguanabara",html_url:"https://github.com/gustavoguanabara",followers_url:"https://api.github.com/users/gustavoguanabara/followers",following_url:"https://api.github.com/users/gustavoguanabara/following{/other_user}",gists_url:"https://api.github.com/users/gustavoguanabara/gists{/gist_id}",starred_url:"https://api.github.com/users/gustavoguanabara/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/gustavoguanabara/subscriptions",organizations_url:"https://api.github.com/users/gustavoguanabara/orgs",repos_url:"https://api.github.com/users/gustavoguanabara/repos",events_url:"https://api.github.com/users/gustavoguanabara/events{/privacy}",received_events_url:"https://api.github.com/users/gustavoguanabara/received_events",type:"User",site_admin:!1,score:1,name:"Gustavo Guanabara",company:"Curso em Vídeo",blog:"http://www.cursoemvideo.com",location:"Rio de Janeiro, Brazil",email:null,hireable:null,bio:"Nerd por natureza. Professor por vocação. Estou aqui para compartilhar conteúdos para iniciantes em Tecnologia.",twitter_username:null,public_repos:6,public_gists:0,followers:75568,following:3,created_at:"2014-09-07T03:56:50Z",updated_at:"2023-01-30T15:36:15Z"},{login:"peng-zhihui",id:12994887,node_id:"MDQ6VXNlcjEyOTk0ODg3",avatar_url:"https://avatars.githubusercontent.com/u/12994887?v=4",gravatar_id:"",url:"https://api.github.com/users/peng-zhihui",html_url:"https://github.com/peng-zhihui",followers_url:"https://api.github.com/users/peng-zhihui/followers",following_url:"https://api.github.com/users/peng-zhihui/following{/other_user}",gists_url:"https://api.github.com/users/peng-zhihui/gists{/gist_id}",starred_url:"https://api.github.com/users/peng-zhihui/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/peng-zhihui/subscriptions",organizations_url:"https://api.github.com/users/peng-zhihui/orgs",repos_url:"https://api.github.com/users/peng-zhihui/repos",events_url:"https://api.github.com/users/peng-zhihui/events{/privacy}",received_events_url:"https://api.github.com/users/peng-zhihui/received_events",type:"User",site_admin:!1,score:1,name:"稚晖",company:"HUAWEI Research",blog:"http://www.pengzhihui.xyz",location:"Shanghai",email:"peng-zhihui@foxmail.com",hireable:null,bio:"野生钢铁侠本侠。",twitter_username:null,public_repos:56,public_gists:0,followers:74961,following:9,created_at:"2015-06-22T04:59:39Z",updated_at:"2023-10-04T03:24:07Z"},{login:"openai",id:14957082,node_id:"MDEyOk9yZ2FuaXphdGlvbjE0OTU3MDgy",avatar_url:"https://avatars.githubusercontent.com/u/14957082?v=4",gravatar_id:"",url:"https://api.github.com/users/openai",html_url:"https://github.com/openai",followers_url:"https://api.github.com/users/openai/followers",following_url:"https://api.github.com/users/openai/following{/other_user}",gists_url:"https://api.github.com/users/openai/gists{/gist_id}",starred_url:"https://api.github.com/users/openai/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/openai/subscriptions",organizations_url:"https://api.github.com/users/openai/orgs",repos_url:"https://api.github.com/users/openai/repos",events_url:"https://api.github.com/users/openai/events{/privacy}",received_events_url:"https://api.github.com/users/openai/received_events",type:"Organization",site_admin:!1,score:1,name:"OpenAI",company:null,blog:"https://openai.com/",location:null,email:null,hireable:null,bio:null,twitter_username:null,public_repos:161,public_gists:0,followers:68040,following:0,created_at:"2015-10-03T19:34:05Z",updated_at:"2023-11-21T16:10:50Z"},{login:"bradtraversy",id:5550850,node_id:"MDQ6VXNlcjU1NTA4NTA=",avatar_url:"https://avatars.githubusercontent.com/u/5550850?v=4",gravatar_id:"",url:"https://api.github.com/users/bradtraversy",html_url:"https://github.com/bradtraversy",followers_url:"https://api.github.com/users/bradtraversy/followers",following_url:"https://api.github.com/users/bradtraversy/following{/other_user}",gists_url:"https://api.github.com/users/bradtraversy/gists{/gist_id}",starred_url:"https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/bradtraversy/subscriptions",organizations_url:"https://api.github.com/users/bradtraversy/orgs",repos_url:"https://api.github.com/users/bradtraversy/repos",events_url:"https://api.github.com/users/bradtraversy/events{/privacy}",received_events_url:"https://api.github.com/users/bradtraversy/received_events",type:"User",site_admin:!1,score:1,name:"Brad Traversy",company:"Traversy Media",blog:"traversymedia.com",location:"Massachusetts",email:"traversymedia@gmail.com",hireable:!0,bio:"Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.",twitter_username:"traversymedia",public_repos:271,public_gists:47,followers:67929,following:6,created_at:"2013-09-26T15:36:02Z",updated_at:"2023-11-27T13:27:53Z"},{login:"JakeWharton",id:66577,node_id:"MDQ6VXNlcjY2NTc3",avatar_url:"https://avatars.githubusercontent.com/u/66577?v=4",gravatar_id:"",url:"https://api.github.com/users/JakeWharton",html_url:"https://github.com/JakeWharton",followers_url:"https://api.github.com/users/JakeWharton/followers",following_url:"https://api.github.com/users/JakeWharton/following{/other_user}",gists_url:"https://api.github.com/users/JakeWharton/gists{/gist_id}",starred_url:"https://api.github.com/users/JakeWharton/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/JakeWharton/subscriptions",organizations_url:"https://api.github.com/users/JakeWharton/orgs",repos_url:"https://api.github.com/users/JakeWharton/repos",events_url:"https://api.github.com/users/JakeWharton/events{/privacy}",received_events_url:"https://api.github.com/users/JakeWharton/received_events",type:"User",site_admin:!1,score:1,name:"Jake Wharton",company:"@cashapp / @square",blog:"jakewharton.com",location:"Pittsburgh, PA, USA",email:"j@ke.fyi",hireable:null,bio:null,twitter_username:null,public_repos:136,public_gists:54,followers:66418,following:9,created_at:"2009-03-24T16:09:53Z",updated_at:"2023-09-22T20:34:57Z"},{login:"sindresorhus",id:170270,node_id:"MDQ6VXNlcjE3MDI3MA==",avatar_url:"https://avatars.githubusercontent.com/u/170270?v=4",gravatar_id:"",url:"https://api.github.com/users/sindresorhus",html_url:"https://github.com/sindresorhus",followers_url:"https://api.github.com/users/sindresorhus/followers",following_url:"https://api.github.com/users/sindresorhus/following{/other_user}",gists_url:"https://api.github.com/users/sindresorhus/gists{/gist_id}",starred_url:"https://api.github.com/users/sindresorhus/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/sindresorhus/subscriptions",organizations_url:"https://api.github.com/users/sindresorhus/orgs",repos_url:"https://api.github.com/users/sindresorhus/repos",events_url:"https://api.github.com/users/sindresorhus/events{/privacy}",received_events_url:"https://api.github.com/users/sindresorhus/received_events",type:"User",site_admin:!1,score:1,name:"Sindre Sorhus",company:null,blog:"https://sindresorhus.com/apps",location:null,email:"sindresorhus@gmail.com",hireable:null,bio:"Full-Time Open-Sourcerer. Focuses on Swift & JavaScript. Makes macOS apps, CLI tools, npm packages. Likes unicorns.",twitter_username:"sindresorhus",public_repos:1098,public_gists:97,followers:59243,following:35,created_at:"2009-12-20T22:57:02Z",updated_at:"2023-11-24T23:43:40Z"}],China:[{login:"ruanyf",id:905434,node_id:"MDQ6VXNlcjkwNTQzNA==",avatar_url:"https://avatars.githubusercontent.com/u/905434?v=4",gravatar_id:"",url:"https://api.github.com/users/ruanyf",html_url:"https://github.com/ruanyf",followers_url:"https://api.github.com/users/ruanyf/followers",following_url:"https://api.github.com/users/ruanyf/following{/other_user}",gists_url:"https://api.github.com/users/ruanyf/gists{/gist_id}",starred_url:"https://api.github.com/users/ruanyf/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/ruanyf/subscriptions",organizations_url:"https://api.github.com/users/ruanyf/orgs",repos_url:"https://api.github.com/users/ruanyf/repos",events_url:"https://api.github.com/users/ruanyf/events{/privacy}",received_events_url:"https://api.github.com/users/ruanyf/received_events",type:"User",site_admin:!1,score:1,name:"Ruan YiFeng",company:null,blog:"https://twitter.com/ruanyf",location:"Shanghai, China",email:"yifeng.ruan@gmail.com",hireable:null,bio:null,twitter_username:null,public_repos:70,public_gists:27,followers:76868,following:0,created_at:"2011-07-10T01:07:17Z",updated_at:"2023-11-23T03:50:15Z"},{login:"michaelliao",id:470058,node_id:"MDQ6VXNlcjQ3MDA1OA==",avatar_url:"https://avatars.githubusercontent.com/u/470058?v=4",gravatar_id:"",url:"https://api.github.com/users/michaelliao",html_url:"https://github.com/michaelliao",followers_url:"https://api.github.com/users/michaelliao/followers",following_url:"https://api.github.com/users/michaelliao/following{/other_user}",gists_url:"https://api.github.com/users/michaelliao/gists{/gist_id}",starred_url:"https://api.github.com/users/michaelliao/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/michaelliao/subscriptions",organizations_url:"https://api.github.com/users/michaelliao/orgs",repos_url:"https://api.github.com/users/michaelliao/repos",events_url:"https://api.github.com/users/michaelliao/events{/privacy}",received_events_url:"https://api.github.com/users/michaelliao/received_events",type:"User",site_admin:!1,score:1,name:"Crypto Michael",company:null,blog:"https://www.liaoxuefeng.com",location:"Beijing, China",email:"askxuefeng@gmail.com",hireable:null,bio:"Crypto developer.",twitter_username:"liaoxuefeng",public_repos:86,public_gists:0,followers:36475,following:3,created_at:"2010-11-06T12:21:35Z",updated_at:"2023-10-04T02:03:12Z"},{login:"daimajia",id:2503423,node_id:"MDQ6VXNlcjI1MDM0MjM=",avatar_url:"https://avatars.githubusercontent.com/u/2503423?v=4",gravatar_id:"",url:"https://api.github.com/users/daimajia",html_url:"https://github.com/daimajia",followers_url:"https://api.github.com/users/daimajia/followers",following_url:"https://api.github.com/users/daimajia/following{/other_user}",gists_url:"https://api.github.com/users/daimajia/gists{/gist_id}",starred_url:"https://api.github.com/users/daimajia/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/daimajia/subscriptions",organizations_url:"https://api.github.com/users/daimajia/orgs",repos_url:"https://api.github.com/users/daimajia/repos",events_url:"https://api.github.com/users/daimajia/events{/privacy}",received_events_url:"https://api.github.com/users/daimajia/received_events",type:"User",site_admin:!1,score:1,name:"代码家",company:"ZhenFund Beijing",blog:"daimajia.com",location:"Beijing, China",email:"daimajia@gmail.com",hireable:null,bio:"Zhenfund VP, bp huiwen@zhenfund.com",twitter_username:"daimajia",public_repos:81,public_gists:8,followers:24459,following:266,created_at:"2012-10-07T02:40:06Z",updated_at:"2023-11-27T08:14:36Z"},{login:"JacksonTian",id:327019,node_id:"MDQ6VXNlcjMyNzAxOQ==",avatar_url:"https://avatars.githubusercontent.com/u/327019?v=4",gravatar_id:"",url:"https://api.github.com/users/JacksonTian",html_url:"https://github.com/JacksonTian",followers_url:"https://api.github.com/users/JacksonTian/followers",following_url:"https://api.github.com/users/JacksonTian/following{/other_user}",gists_url:"https://api.github.com/users/JacksonTian/gists{/gist_id}",starred_url:"https://api.github.com/users/JacksonTian/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/JacksonTian/subscriptions",organizations_url:"https://api.github.com/users/JacksonTian/orgs",repos_url:"https://api.github.com/users/JacksonTian/repos",events_url:"https://api.github.com/users/JacksonTian/events{/privacy}",received_events_url:"https://api.github.com/users/JacksonTian/received_events",type:"User",site_admin:!1,score:1,name:"Jackson Tian",company:"Alibaba Cloud",blog:"http://jacksontian.org/",location:"Hangzhou, China",email:"shyvo1987@gmail.com",hireable:null,bio:null,twitter_username:null,public_repos:260,public_gists:77,followers:21070,following:196,created_at:"2010-07-09T02:46:57Z",updated_at:"2023-10-19T01:20:19Z"},{login:"programthink",id:4027957,node_id:"MDQ6VXNlcjQwMjc5NTc=",avatar_url:"https://avatars.githubusercontent.com/u/4027957?v=4",gravatar_id:"",url:"https://api.github.com/users/programthink",html_url:"https://github.com/programthink",followers_url:"https://api.github.com/users/programthink/followers",following_url:"https://api.github.com/users/programthink/following{/other_user}",gists_url:"https://api.github.com/users/programthink/gists{/gist_id}",starred_url:"https://api.github.com/users/programthink/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/programthink/subscriptions",organizations_url:"https://api.github.com/users/programthink/orgs",repos_url:"https://api.github.com/users/programthink/repos",events_url:"https://api.github.com/users/programthink/events{/privacy}",received_events_url:"https://api.github.com/users/programthink/received_events",type:"User",site_admin:!1,score:1,name:"编程随想",company:null,blog:"https://program-think.blogspot.com/",location:"China",email:null,hireable:null,bio:null,twitter_username:null,public_repos:5,public_gists:0,followers:20173,following:0,created_at:"2013-04-01T15:34:44Z",updated_at:"2018-04-24T08:56:24Z"},{login:"cloudwu",id:729648,node_id:"MDQ6VXNlcjcyOTY0OA==",avatar_url:"https://avatars.githubusercontent.com/u/729648?v=4",gravatar_id:"",url:"https://api.github.com/users/cloudwu",html_url:"https://github.com/cloudwu",followers_url:"https://api.github.com/users/cloudwu/followers",following_url:"https://api.github.com/users/cloudwu/following{/other_user}",gists_url:"https://api.github.com/users/cloudwu/gists{/gist_id}",starred_url:"https://api.github.com/users/cloudwu/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/cloudwu/subscriptions",organizations_url:"https://api.github.com/users/cloudwu/orgs",repos_url:"https://api.github.com/users/cloudwu/repos",events_url:"https://api.github.com/users/cloudwu/events{/privacy}",received_events_url:"https://api.github.com/users/cloudwu/received_events",type:"User",site_admin:!1,score:1,name:"云风",company:"ejoy.com",blog:"http://blog.codingnow.com",location:"China",email:"cloudwu@gmail.com",hireable:null,bio:"coder ( c , lua , open source )",twitter_username:null,public_repos:129,public_gists:57,followers:19900,following:2,created_at:"2011-04-14T15:57:13Z",updated_at:"2023-10-24T22:23:32Z"},{login:"phodal",id:472311,node_id:"MDQ6VXNlcjQ3MjMxMQ==",avatar_url:"https://avatars.githubusercontent.com/u/472311?v=4",gravatar_id:"",url:"https://api.github.com/users/phodal",html_url:"https://github.com/phodal",followers_url:"https://api.github.com/users/phodal/followers",following_url:"https://api.github.com/users/phodal/following{/other_user}",gists_url:"https://api.github.com/users/phodal/gists{/gist_id}",starred_url:"https://api.github.com/users/phodal/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/phodal/subscriptions",organizations_url:"https://api.github.com/users/phodal/orgs",repos_url:"https://api.github.com/users/phodal/repos",events_url:"https://api.github.com/users/phodal/events{/privacy}",received_events_url:"https://api.github.com/users/phodal/received_events",type:"User",site_admin:!1,score:1,name:"Fengda Huang",company:"@thoughtworks",blog:"https://www.phodal.com/",location:"Shanghai / Hangzhou, China",email:"h@phodal.com",hireable:!0,bio:"I dig holes.",twitter_username:"phodal_huang",public_repos:361,public_gists:14,followers:19583,following:7,created_at:"2010-11-08T11:46:51Z",updated_at:"2023-10-31T01:17:24Z"},{login:"justjavac",id:359395,node_id:"MDQ6VXNlcjM1OTM5NQ==",avatar_url:"https://avatars.githubusercontent.com/u/359395?v=4",gravatar_id:"",url:"https://api.github.com/users/justjavac",html_url:"https://github.com/justjavac",followers_url:"https://api.github.com/users/justjavac/followers",following_url:"https://api.github.com/users/justjavac/following{/other_user}",gists_url:"https://api.github.com/users/justjavac/gists{/gist_id}",starred_url:"https://api.github.com/users/justjavac/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/justjavac/subscriptions",organizations_url:"https://api.github.com/users/justjavac/orgs",repos_url:"https://api.github.com/users/justjavac/repos",events_url:"https://api.github.com/users/justjavac/events{/privacy}",received_events_url:"https://api.github.com/users/justjavac/received_events",type:"User",site_admin:!1,score:1,name:"迷渡",company:null,blog:"https://twitter.com/justjavac",location:"Tianjin, China",email:"justjavac@gmail.com",hireable:null,bio:"Creator of vscode-deno. Currently a contributor to Deno.",twitter_username:"justjavac",public_repos:368,public_gists:15,followers:16621,following:86,created_at:"2010-08-10T05:24:31Z",updated_at:"2023-11-24T12:17:47Z"},{login:"halfrost",id:10825609,node_id:"MDQ6VXNlcjEwODI1NjA5",avatar_url:"https://avatars.githubusercontent.com/u/10825609?v=4",gravatar_id:"",url:"https://api.github.com/users/halfrost",html_url:"https://github.com/halfrost",followers_url:"https://api.github.com/users/halfrost/followers",following_url:"https://api.github.com/users/halfrost/following{/other_user}",gists_url:"https://api.github.com/users/halfrost/gists{/gist_id}",starred_url:"https://api.github.com/users/halfrost/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/halfrost/subscriptions",organizations_url:"https://api.github.com/users/halfrost/orgs",repos_url:"https://api.github.com/users/halfrost/repos",events_url:"https://api.github.com/users/halfrost/events{/privacy}",received_events_url:"https://api.github.com/users/halfrost/received_events",type:"User",site_admin:!1,score:1,name:"halfrost",company:"@Apple @CNCF",blog:"https://halfrost.com",location:"[California, Singapore, China]",email:"i@halfrost.com",hireable:null,bio:"mscs @ Stanford 💪 天道酬勤，勤能补拙。博观而约取，厚积而薄发。Gopher / Rustacean / Kubernetes / Cloud Native / DeFi Smart Contract / iOS Dev. / Retired acmer / Math / Writer.",twitter_username:"halffrost",public_repos:30,public_gists:0,followers:16426,following:357,created_at:"2015-02-03T07:01:48Z",updated_at:"2023-09-09T19:57:02Z"},{login:"stormzhang",id:2267900,node_id:"MDQ6VXNlcjIyNjc5MDA=",avatar_url:"https://avatars.githubusercontent.com/u/2267900?v=4",gravatar_id:"",url:"https://api.github.com/users/stormzhang",html_url:"https://github.com/stormzhang",followers_url:"https://api.github.com/users/stormzhang/followers",following_url:"https://api.github.com/users/stormzhang/following{/other_user}",gists_url:"https://api.github.com/users/stormzhang/gists{/gist_id}",starred_url:"https://api.github.com/users/stormzhang/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/stormzhang/subscriptions",organizations_url:"https://api.github.com/users/stormzhang/orgs",repos_url:"https://api.github.com/users/stormzhang/repos",events_url:"https://api.github.com/users/stormzhang/events{/privacy}",received_events_url:"https://api.github.com/users/stormzhang/received_events",type:"User",site_admin:!1,score:1,name:"stormzhang",company:"Boohee, Inc.",blog:"http://stormzhang.com",location:"Shanghai, China",email:"stormzhang.dev@gmail.com",hireable:null,bio:"微信公众号：stormzhang",twitter_username:null,public_repos:5,public_gists:9,followers:15887,following:91,created_at:"2012-09-03T02:58:11Z",updated_at:"2021-02-03T09:45:31Z"}]},ts={class:"w-full flex-around-center"},ss={key:0,class:"grid grid-cols-2 my-2 gap-2"},us=ot({__name:"user",setup(n){const N=rt(ct[0].value),_=rt([]);mt(N,()=>{_.value=Kt[`${N.value}`]},{immediate:!0});const l=rt("list");return($,d)=>{const w=jt,b=Mt,y=$t,h=Gt,M=qt;return S(),U("div",null,[m("div",ts,[Q(b,{modelValue:J(N),"onUpdate:modelValue":d[0]||(d[0]=u=>pt(N)?N.value=u:null)},{default:ht(()=>[(S(!0),U(gt,null,dt(J(ct),u=>(S(),at(w,{key:u.value,label:u.value},{default:ht(()=>[it(C(u.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"]),Q(y,{modelValue:J(l),"onUpdate:modelValue":d[1]||(d[1]=u=>pt(l)?l.value=u:null)},null,8,["modelValue"])]),J(l)==="list"?(S(),U("div",ss,[(S(!0),U(gt,null,dt(J(_),(u,D)=>(S(),at(h,{key:D,user:u},null,8,["user"]))),128))])):J(l)==="chart"?(S(),at(M,{key:1,data:J(_)},null,8,["data"])):st("",!0)])}}});export{us as default};
