import{n,O as u,P as i,o as l,c as o,F as c,y as v,Q as p,C as f,R as m,a as t,t as h}from"./CROBNvsH.js";const _={class:"flex-center overflow-hidden border-1 rounded-1 bg-white text-gray-600 divide-x-1 dark:border-none"},x=["id","value"],y=["for"],V=n({__name:"RadioGroup",props:u(["list"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=i(s,"modelValue");return(b,r)=>(l(),o("div",_,[(l(!0),o(c,null,v(s.list,e=>(l(),o("div",{key:e.value,class:p(["h-full",{"bg-primary text-white":a.value===e.value}])},[f(t("input",{id:e.value,"onUpdate:modelValue":r[0]||(r[0]=d=>a.value=d),type:"radio",value:e.value,class:"hidden"},null,8,x),[[m,a.value]]),t("label",{for:e.value,class:"h-full flex-center cursor-pointer px-4 py-1"},h(e.label),9,y)],2))),128))]))}});export{V as _};
