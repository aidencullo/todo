import{r as c,o as n,c as o,w as d,v as g,a as t,b as h,F as s,d as f,n as k,t as i,e as w}from"./index-c6099b0b.js";const y={class:"text-left bg-green-700 mr-auto ml-auto p-4 w-1/2 break-all"},C=["onClick"],N={__name:"TodoList",setup(m){const e=c([]),a=c("");function p(){a.value.length!==0&&(e.value.push({id:e.value.length+1,item:a.value,expand:!0}),a.value="")}function b(){e.value=[]}function x(r){e.value[Number(r)-1].expand=!e.value[Number(r)-1].expand}return(r,u)=>(n(),o(s,null,[d(t("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>a.value=l),placeholder:"add new item",class:"border-2 border-black"},null,512),[[g,a.value,void 0,{trim:!0}]]),t("button",{onClick:p,class:"m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Add"),t("button",{onClick:b,class:"m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},"Clear"),d(t("div",y,[t("ul",null,[(n(!0),o(s,null,f(e.value,({id:l,item:v,expand:_})=>(n(),o("li",{key:l},[t("div",{onClick:B=>x(l),class:k([{truncate:_},"cursor-pointer"])},i(l)+" . "+i(v),11,C)]))),128))])],512),[[h,e.value.length]])],64))}},V=t("h1",{class:"mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"},[t("span",{class:"text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"}," Todo ")],-1),L={__name:"ListView",setup(m){return(e,a)=>(n(),o(s,null,[V,w(N)],64))}};export{L as default};
