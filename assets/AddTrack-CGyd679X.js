import{r as o,k as e,B as w,L as P,p as C,q as N}from"./index-PsDayEUa.js";import{z as n,u as T,F as V,b as d,c as i,d as u,e as m,g as h,f as x,t as L}from"./form-BRuEqSF8.js";import{S as j,a as p,b as f,c as g,d as S}from"./select-8kfTUmTh.js";import{r as k}from"./resourcesService-Dcwbatao.js";import{t as I}from"./trackService-BQ9qWjjn.js";import{T as A}from"./theme-switch-DuQNpLzg.js";const E=n.object({resource:n.string({required_error:"Please select a resource to track."}),lastReadedPart:n.string({required_error:"Please select the last readed resource part."})});function q(){const[F,b]=o.useState([]),[l,v]=o.useState([]);o.useEffect(()=>{(async()=>{let s=await k.getUntrackedResources();b(s)})()},[]);const a=T({resolver:L(E),mode:"onChange"}),{watch:y}=a,t=y("resource");o.useEffect(()=>{console.log(t),(async()=>{if(!isNaN(t)){var s=parseInt(t,10);let c=await k.getResource(s);v(c.parts)}})()},[t]);function R(r){r.resourceId=parseInt(r.resource,10),I.createTrack(r).then(function(){window.location.href="/tViewer/tracks"})}return e.jsx(V,{...a,children:e.jsxs("form",{onSubmit:a.handleSubmit(R),className:"space-y-8",children:[e.jsx(d,{control:a.control,name:"resource",render:({field:r})=>e.jsxs(i,{children:[e.jsx(u,{children:"Resource"}),e.jsxs(j,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(m,{children:e.jsx(p,{children:e.jsx(f,{placeholder:"Select a resource"})})}),e.jsx(g,{children:F.map((s,c)=>e.jsx(S,{value:String(s.id),children:s.title},c))})]}),e.jsx(h,{children:"What you desire to track"}),e.jsx(x,{})]})}),t!==void 0&&l.length>0?e.jsx(d,{control:a.control,name:"lastReadedPart",render:({field:r})=>e.jsxs(i,{children:[e.jsx(u,{children:"Last readed"}),e.jsxs(j,{onValueChange:r.onChange,defaultValue:r.value,children:[e.jsx(m,{children:e.jsx(p,{children:e.jsx(f,{placeholder:"Select a resource"})})}),e.jsx(g,{children:l.map((s,c)=>e.jsx(S,{value:s,children:s},c))})]}),e.jsx(h,{children:"Select what was the last readed part"}),e.jsx(x,{})]})}):e.jsx(e.Fragment,{}),e.jsx(w,{type:"submit",children:"Add"})]})})}function M(){return e.jsxs(P,{children:[e.jsxs(C,{className:"border-b",children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight md:text-3xl",children:"Add track"}),e.jsx("div",{className:"ml-auto flex items-center space-x-4",children:e.jsx(A,{})})]}),e.jsx(N,{className:"space-y-4",children:e.jsx(q,{})})]})}export{M as default};