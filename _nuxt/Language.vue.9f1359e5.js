import{fa as p,E as i,g as c}from"./chartBehaver.d70bf0d3.js";import{u as f}from"./index.7e602c3b.js";import{x as _,o as a,J as n,w as l,c as g,Q as V,d as x,t as B,u as s,O as N,A as b}from"./entry.0d5c33ec.js";function A(e){return Number(e.replace(",",""))}function C(e){return JSON.parse(JSON.stringify(e))}function F(e){return e<1024?`${e}KB`:e<1024*1024?`${(e/1024).toFixed(2)}MB`:`${(e/1024/1024).toFixed(2)}GB`}const J=_({__name:"Language",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:u}){const o=f(e,"modelValue",u);return(k,r)=>{const m=i,d=c;return a(),n(d,{modelValue:s(o),"onUpdate:modelValue":r[0]||(r[0]=t=>b(o)?o.value=t:null)},{default:l(()=>[(a(!0),g(N,null,V(s(p),t=>(a(),n(m,{key:t,label:t},{default:l(()=>[x(B(t),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])}}});export{J as _,C as d,F as f,A as s};
