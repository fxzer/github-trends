import{y as q,r as _,R as H,O as k,al as X,N as Y,u as Z,T as ee,am as P,an as te,m as j,g as F,E,ao as ne,f as re}from"./entry.CrwZAf8D.js";function z(e){return X()?(Y(e),!0):!1}function R(e){return typeof e=="function"?e():Z(e)}const oe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const se=e=>typeof e<"u",ie=Object.prototype.toString,ae=e=>ie.call(e)==="[object Object]",G=()=>{};function ue(e,t){function n(...s){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,s),{fn:t,thisArg:this,args:s})).then(r).catch(i)})}return n}const I=e=>e();function le(e=I){const t=_(!0);function n(){t.value=!1}function s(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:P(t),pause:n,resume:s,eventFilter:r}}function ce(e){return e||j()}function fe(...e){if(e.length!==1)return ee(...e);const t=e[0];return typeof t=="function"?P(te(()=>({get:t,set:G}))):_(t)}function de(e,t,n={}){const{eventFilter:s=I,...r}=n;return F(e,ue(s,t),r)}function pe(e,t,n={}){const{eventFilter:s,...r}=n,{eventFilter:i,pause:l,resume:u,isActive:f}=le(s);return{stop:de(e,t,{...r,eventFilter:i}),pause:l,resume:u,isActive:f}}function J(e,t=!0,n){ce()?H(e,n):t?e():k(e)}function Ee(e=!1,t={}){const{truthyValue:n=!0,falsyValue:s=!1}=t,r=q(e),i=_(e);function l(u){if(arguments.length)return i.value=u,i.value;{const f=R(n);return i.value=i.value===f?R(s):f,i.value}}return r?l:[i,l]}function x(e){var t;const n=R(e);return(t=n==null?void 0:n.$el)!=null?t:n}const D=oe?window:void 0;function B(...e){let t,n,s,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,s,r]=e,t=D):[t,n,s,r]=e,!t)return G;Array.isArray(n)||(n=[n]),Array.isArray(s)||(s=[s]);const i=[],l=()=>{i.forEach(v=>v()),i.length=0},u=(v,o,d,c)=>(v.addEventListener(o,d,c),()=>v.removeEventListener(o,d,c)),f=F(()=>[x(t),R(r)],([v,o])=>{if(l(),!v)return;const d=ae(o)?{...o}:o;i.push(...n.flatMap(c=>s.map(m=>u(v,c,m,d))))},{immediate:!0,flush:"post"}),h=()=>{f(),l()};return z(h),h}function he(){const e=_(!1),t=j();return t&&H(()=>{e.value=!0},t),e}function K(e){const t=he();return E(()=>(t.value,!!e()))}function ve(e,t={}){const{window:n=D}=t,s=K(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=_(!1),l=h=>{i.value=h.matches},u=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",l):r.removeListener(l))},f=re(()=>{s.value&&(u(),r=n.matchMedia(R(e)),"addEventListener"in r?r.addEventListener("change",l):r.addListener(l),i.value=r.matches)});return z(()=>{f(),u(),r=void 0}),i}function me(e){return JSON.parse(JSON.stringify(e))}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",ge=we();function we(){return W in V||(V[W]=V[W]||{}),V[W]}function Q(e,t){return ge[e]||t}function ye(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const be={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},$="vueuse-storage";function Se(e,t,n,s={}){var r;const{flush:i="pre",deep:l=!0,listenToStorageChanges:u=!0,writeDefaults:f=!0,mergeDefaults:h=!1,shallow:v,window:o=D,eventFilter:d,onError:c=a=>{console.error(a)},initOnMounted:m}=s,p=(v?ne:_)(typeof t=="function"?t():t);if(!n)try{n=Q("getDefaultStorage",()=>{var a;return(a=D)==null?void 0:a.localStorage})()}catch(a){c(a)}if(!n)return p;const S=R(t),N=ye(S),O=(r=s.serializer)!=null?r:be[N],{pause:w,resume:g}=pe(p,()=>C(p.value),{flush:i,deep:l,eventFilter:d});o&&u&&J(()=>{B(o,"storage",A),B(o,$,T),m&&A()}),m||A();function b(a,y){o&&o.dispatchEvent(new CustomEvent($,{detail:{key:e,oldValue:a,newValue:y,storageArea:n}}))}function C(a){try{const y=n.getItem(e);if(a==null)b(y,null),n.removeItem(e);else{const M=O.write(a);y!==M&&(n.setItem(e,M),b(y,M))}}catch(y){c(y)}}function L(a){const y=a?a.newValue:n.getItem(e);if(y==null)return f&&S!=null&&n.setItem(e,O.write(S)),S;if(!a&&h){const M=O.read(y);return typeof h=="function"?h(M,S):N==="object"&&!Array.isArray(M)?{...S,...M}:M}else return typeof y!="string"?y:O.read(y)}function A(a){if(!(a&&a.storageArea!==n)){if(a&&a.key==null){p.value=S;return}if(!(a&&a.key!==e)){w();try{(a==null?void 0:a.newValue)!==O.write(p.value)&&(p.value=L(a))}catch(y){c(y)}finally{a?k(g):g()}}}}function T(a){A(a.detail)}return p}function U(e){return ve("(prefers-color-scheme: dark)",e)}function Oe(e={}){const{selector:t="html",attribute:n="class",initialValue:s="auto",window:r=D,storage:i,storageKey:l="vueuse-color-scheme",listenToStorageChanges:u=!0,storageRef:f,emitAuto:h,disableTransition:v=!0}=e,o={auto:"",light:"light",dark:"dark",...e.modes||{}},d=U({window:r}),c=E(()=>d.value?"dark":"light"),m=f||(l==null?fe(s):Se(l,s,i,{window:r,listenToStorageChanges:u})),p=E(()=>m.value==="auto"?c.value:m.value),S=Q("updateHTMLAttrs",(g,b,C)=>{const L=typeof g=="string"?r==null?void 0:r.document.querySelector(g):x(g);if(!L)return;let A;if(v&&(A=r.document.createElement("style"),A.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),r.document.head.appendChild(A)),b==="class"){const T=C.split(/\s/g);Object.values(o).flatMap(a=>(a||"").split(/\s/g)).filter(Boolean).forEach(a=>{T.includes(a)?L.classList.add(a):L.classList.remove(a)})}else L.setAttribute(b,C);v&&(r.getComputedStyle(A).opacity,document.head.removeChild(A))});function N(g){var b;S(t,n,(b=o[g])!=null?b:g)}function O(g){e.onChanged?e.onChanged(g,N):N(g)}F(p,O,{flush:"post",immediate:!0}),J(()=>O(p.value));const w=E({get(){return h?m.value:p.value},set(g){m.value=g}});try{return Object.assign(w,{store:m,system:c,state:p})}catch{return w}}function _e(e={}){const{valueDark:t="dark",valueLight:n="",window:s=D}=e,r=Oe({...e,onChanged:(u,f)=>{var h;e.onChanged?(h=e.onChanged)==null||h.call(e,u==="dark",f,u):f(u)},modes:{dark:t,light:n}}),i=E(()=>r.system?r.system.value:U({window:s}).value?"dark":"light");return E({get(){return r.value==="dark"},set(u){const f=u?"dark":"light";i.value===f?r.value="auto":r.value=f}})}function Ae(e,t,n={}){const{window:s=D,...r}=n;let i;const l=K(()=>s&&"ResizeObserver"in s),u=()=>{i&&(i.disconnect(),i=void 0)},f=E(()=>Array.isArray(e)?e.map(o=>x(o)):[x(e)]),h=F(f,o=>{if(u(),l.value&&s){i=new ResizeObserver(t);for(const d of o)d&&i.observe(d,r)}},{immediate:!0,flush:"post"}),v=()=>{u(),h()};return z(v),{isSupported:l,stop:v}}function Ne(e,t={width:0,height:0},n={}){const{window:s=D,box:r="content-box"}=n,i=E(()=>{var o,d;return(d=(o=x(e))==null?void 0:o.namespaceURI)==null?void 0:d.includes("svg")}),l=_(t.width),u=_(t.height),{stop:f}=Ae(e,([o])=>{const d=r==="border-box"?o.borderBoxSize:r==="content-box"?o.contentBoxSize:o.devicePixelContentBoxSize;if(s&&i.value){const c=x(e);if(c){const m=s.getComputedStyle(c);l.value=Number.parseFloat(m.width),u.value=Number.parseFloat(m.height)}}else if(d){const c=Array.isArray(d)?d:[d];l.value=c.reduce((m,{inlineSize:p})=>m+p,0),u.value=c.reduce((m,{blockSize:p})=>m+p,0)}else l.value=o.contentRect.width,u.value=o.contentRect.height},n);J(()=>{const o=x(e);o&&(l.value="offsetWidth"in o?o.offsetWidth:t.width,u.value="offsetHeight"in o?o.offsetHeight:t.height)});const h=F(()=>x(e),o=>{l.value=o?t.width:0,u.value=o?t.height:0});function v(){f(),h()}return{width:l,height:u,stop:v}}function Me(e,t,n,s={}){var r,i,l;const{clone:u=!1,passive:f=!1,eventName:h,deep:v=!1,defaultValue:o,shouldEmit:d}=s,c=j(),m=n||(c==null?void 0:c.emit)||((r=c==null?void 0:c.$emit)==null?void 0:r.bind(c))||((l=(i=c==null?void 0:c.proxy)==null?void 0:i.$emit)==null?void 0:l.bind(c==null?void 0:c.proxy));let p=h;t||(t="modelValue"),p=p||`update:${t.toString()}`;const S=w=>u?typeof u=="function"?u(w):me(w):w,N=()=>se(e[t])?S(e[t]):o,O=w=>{d?d(w)&&m(p,w):m(p,w)};if(f){const w=N(),g=_(w);let b=!1;return F(()=>e[t],C=>{b||(b=!0,g.value=S(C),k(()=>b=!1))}),F(g,C=>{!b&&(C!==e[t]||v)&&O(C)},{deep:v}),g}else return E({get(){return N()},set(w){O(w)}})}export{Ne as a,Me as b,Ee as c,_e as u};
