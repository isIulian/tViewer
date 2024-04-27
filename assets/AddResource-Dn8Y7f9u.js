import{r as y,k as e,l as p,B as m,I as f,y as L,L as V,p as _,q as D}from"./index-BqNX3fUW.js";import{z as t,u as B,a as g,F as E,b as l,c as n,d as c,e as i,f as d,g as x,t as $}from"./form-YsUovLLL.js";import{S as b,a as N,b as S,c as T,d as C}from"./select-Ck-MZYYx.js";import{I as h}from"./input-B7CXuEv-.js";import{T as G,s as H}from"./data-BCQUUqfZ.js";import{r as J}from"./resourcesService-BFqxfeSL.js";import{r as M}from"./resourceTypeService-DeumqlJe.js";import{T as O}from"./theme-switch-Dv3xt-Vd.js";const U=t.object({title:t.string({required_error:"Please set a resource title."}),resourceType:t.string({required_error:"Please specify the resource type."}),description:t.string({required_error:"Please wirte a short description."}),status:t.string({required_error:"Please set status."}),covers:t.array(t.object({value:t.string().url({message:"Please enter a valid URL."})})).optional(),parts:t.array(t.object({value:t.string({required_error:"Please enter a part name."})})).nonempty("At least on part is required")}),X={parts:[{value:"only part"}]};function Y(){const[j,F]=y.useState([]);y.useEffect(()=>{(async()=>{let r=await M.getTypes();F(r)})()},[]);const a=B({resolver:$(U),defaultValues:X,mode:"onChange"}),{fields:A,append:P,remove:w}=g({name:"covers",control:a.control}),{fields:z,append:R,remove:k}=g({name:"parts",control:a.control});function q(s){var v;let r=parseInt(s.resourceType,10),o=(v=j.find(u=>u.id===r))==null?void 0:v.name,I={type:r,title:s.title,description:s.description,status:s.status,covers:s.covers.map(u=>u.value),parts:s.parts.map(u=>u.value)};J.createResource(I).then(function(){window.location.href=`/resources/${o}`}),L({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(E,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(q),className:"space-y-8",children:[e.jsx(l,{control:a.control,name:"resourceType",render:({field:s})=>e.jsxs(n,{children:[e.jsx(c,{children:"Type"}),e.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(S,{placeholder:"Select a type"})})}),e.jsx(T,{children:j.map((r,o)=>e.jsx(C,{value:String(r.id),children:r.name},o))})]}),e.jsx(d,{})]})}),e.jsx(l,{control:a.control,name:"title",render:({field:s})=>e.jsxs(n,{children:[e.jsx(c,{children:"Title"}),e.jsx(i,{children:e.jsx(h,{placeholder:"resource title/name",...s})}),e.jsx(d,{})]})}),e.jsx(l,{control:a.control,name:"description",render:({field:s})=>e.jsxs(n,{children:[e.jsx(c,{children:"Description"}),e.jsx(i,{children:e.jsx(G,{placeholder:"Tell us about the resource",className:"resize-none",...s})}),e.jsx(x,{children:"Give a short description of what the resource is talking about."}),e.jsx(d,{})]})}),e.jsx(l,{control:a.control,name:"status",render:({field:s})=>e.jsxs(n,{children:[e.jsx(c,{children:"Status"}),e.jsxs(b,{onValueChange:s.onChange,defaultValue:s.value,children:[e.jsx(i,{children:e.jsx(N,{children:e.jsx(S,{placeholder:"Select status"})})}),e.jsx(T,{children:H.map((r,o)=>e.jsx(C,{value:r.value,children:r.label},o))})]}),e.jsx(d,{})]})}),e.jsxs("div",{children:[A.map((s,r)=>e.jsx(l,{control:a.control,name:`covers.${r}.value`,render:({field:o})=>e.jsxs(n,{children:[e.jsx(c,{className:p(r!==0&&"sr-only"),children:"Covers"}),e.jsx(x,{className:p(r!==0&&"sr-only"),children:"Add urls of cover to the resource."}),e.jsx(i,{children:e.jsxs("div",{className:"flex",children:[e.jsx(h,{...o}),e.jsx(m,{type:"button",variant:"ghost",className:"ml-1",size:"sm",onClick:()=>w(r),children:e.jsx(f,{size:14})})]})}),e.jsx(d,{})]})},s.id)),e.jsx(m,{type:"button",variant:"outline",size:"sm",className:"mt-2",onClick:()=>P({value:""}),children:"Add Cover"})]}),e.jsxs("div",{children:[z.map((s,r)=>e.jsx(l,{control:a.control,name:`parts.${r}.value`,render:({field:o})=>e.jsxs(n,{children:[e.jsx(c,{className:p(r!==0&&"sr-only"),children:"Parts"}),e.jsx(x,{className:p(r!==0&&"sr-only"),children:"Add part or parts of the resource."}),e.jsx(i,{children:e.jsxs("div",{className:"flex",children:[e.jsx(h,{...o}),e.jsx(m,{type:"button",variant:"ghost",className:"ml-1",size:"sm",onClick:()=>k(r),children:e.jsx(f,{size:14})})]})}),e.jsx(d,{})]})},s.id)),e.jsx(m,{type:"button",variant:"outline",size:"sm",className:"mt-2",onClick:()=>R({value:""}),children:"Add Part"})]}),e.jsx(m,{type:"submit",children:"Add"})]})})}function ae(){return e.jsxs(V,{children:[e.jsxs(_,{className:"border-b",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight md:text-3xl",children:"Add resource"}),e.jsx("div",{className:"ml-auto flex items-center space-x-4",children:e.jsx(O,{})})]}),e.jsx(D,{className:"space-y-4",children:e.jsx(Y,{})})]})}export{ae as default};
