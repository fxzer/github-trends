import{r as d,S as f,U as p}from"./C6sxNZEP.js";function y(){const s=d(0),e=4;function r(l){const o=l.target,i=o.offsetLeft-e,c=o.offsetTop-e,{width:a,height:u}=o.getBoundingClientRect(),t=document.querySelector(".pointer");t.style.transform=`translate(${i}px, ${c}px)`,t.style.width=`${a+e*2}px`,t.style.height=`${u+e*2}px`,t.style.opacity="1",t.style.transition="all 0.3s  ease-in-out"}function n(){s.value=window.scrollY}return f(()=>{window==null||window.addEventListener("scroll",n)}),p(()=>{window==null||window.removeEventListener("scroll",n)}),{onMouseEnter:r}}export{y as u};
