function s(r){return Number(r.replace(",",""))}function c(r){return JSON.parse(JSON.stringify(r))}function l(r){return r<1024?`${r}KB`:r<1024*1024?`${(r/1024).toFixed(2)}MB`:`${(r/1024/1024).toFixed(2)}GB`}function m(r){const i=new Date().getTime()-r.getTime(),t=Math.floor(i/1e3),e=Math.floor(t/60),o=Math.floor(e/60),n=Math.floor(o/24),f=Math.floor(n/30),u=Math.floor(f/12);return u>0?`${u} 年前`:f>0?`${f} 月前`:n>0?`${n} 天前`:o>0?`${o} 小时前`:e>0?`${e} 分钟前`:t>0?`${t} 秒前`:"刚刚"}function $(r){if(typeof r=="string"){if(Number.isNaN(Number.parseInt(r)))return r;r=s(r)}return r<1e3?r:`${(r/1e3).toFixed(1)}k`}export{$ as a,c as d,l as f,m as t};