import{n,R as u,S as i,o as l,c as o,G as c,H as v,B as p,F as f,U as m,a as t,t as h}from"./Ce4URhuM.js";const x={class:"flex-center overflow-hidden border-1 rounded-1 bg-white text-gray-600 divide-x-1 dark:border-none"},_=["id","value"],g=["for"],V=n({__name:"RadioGroup",props:u(["list"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const a=i(s,"modelValue");return(y,r)=>(l(),o("div",x,[(l(!0),o(c,null,v(s.list,e=>(l(),o("div",{key:e.value,class:p(["h-full text-gray-600",{"!text-white bg-primary":a.value===e.value}])},[f(t("input",{id:e.value,"onUpdate:modelValue":r[0]||(r[0]=d=>a.value=d),type:"radio",value:e.value,class:"hidden"},null,8,_),[[m,a.value]]),t("label",{for:e.value,class:"h-full flex-center cursor-pointer px-4 py-1"},h(e.label),9,g)],2))),128))]))}});export{V as _};