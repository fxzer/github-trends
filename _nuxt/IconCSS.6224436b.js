import{n as m,Y as _,Z as f,E as r,o as d,c as I,s as v,_ as x}from"./entry.020cff64.js";import{r as S}from"./index.df58e121.js";const y=m({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(u){_(e=>({"0868645c":p.value}));const t=f(),s=u,l=r(()=>{var e,n;return(n=(e=t.nuxtIcon)==null?void 0:e.aliases)!=null&&n[s.name]?t.nuxtIcon.aliases[s.name]:s.name}),a=r(()=>S(l.value)),p=r(()=>{var o,c;const e=(c=(o=t.nuxtIcon)==null?void 0:o.iconifyApiOptions)==null?void 0:c.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${a.value.prefix}/${a.value.name}.svg')`}),i=r(()=>{var n,o,c;if(!s.size&&typeof((n=t.nuxtIcon)==null?void 0:n.size)=="boolean"&&!((o=t.nuxtIcon)!=null&&o.size))return;const e=s.size||((c=t.nuxtIcon)==null?void 0:c.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,n)=>(d(),I("span",{style:v({width:i.value,height:i.value})},null,4))}});const b=x(y,[["__scopeId","data-v-cb10840d"]]);export{b as default};
