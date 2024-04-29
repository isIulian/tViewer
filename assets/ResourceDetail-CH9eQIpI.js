import{c as d,r as l,w as x,k as e,L as p,p as f,s as j,B as n,q as v}from"./index-PsDayEUa.js";import{r as i}from"./resourcesService-Dcwbatao.js";import{t as g}from"./trackService-BQ9qWjjn.js";import{T as y}from"./theme-switch-DuQNpLzg.js";import{A as k,a as D,b as N,c as w,d as A,e as T,f as b,g as R}from"./alert-dialog-B_qgyiI6.js";/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var C=d("outline","edit","IconEdit",[["path",{d:"M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1",key:"svg-0"}],["path",{d:"M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z",key:"svg-1"}],["path",{d:"M16 5l3 3",key:"svg-2"}]]);/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var I=d("outline","trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]]);const z=()=>{const[s,h]=l.useState(null),[m,c]=l.useState(!1),{id:a}=x();l.useEffect(()=>{(async()=>{let r=parseInt(a,10);if(!isNaN(r)){let t=await i.getResource(r);h(t)}})()},[a]);function u(o){(async t=>{i.deleteResource(t).then(function(){g.deleteTracksByResource(t).then(function(){window.location.href=`/tViewer/resources/${s.resourceType.name}`})})})(parseInt(o,10))}return s===null?e.jsx(e.Fragment,{children:e.jsx("p",{children:"No details"})}):e.jsx(e.Fragment,{children:e.jsxs(p,{children:[e.jsx(f,{className:"border-b",children:e.jsxs("div",{className:"ml-auto flex items-center space-x-4",children:[e.jsx(j,{to:"/resource-edit/"+a,className:"flex ml-2",children:e.jsxs(n,{size:"sm",className:"ml-auto flex h-8",children:[e.jsx(C,{className:"mr-2 h-4 w-4"}),"Edit"]})}),e.jsxs(n,{size:"sm",variant:"outline",className:"ml-auto flex h-8",onClick:()=>c(!0),children:[e.jsx(I,{className:"mr-2 h-4 w-4"}),"Delete"]}),e.jsx(y,{})]})}),e.jsxs(v,{className:"space-y-4",children:[e.jsxs("div",{className:"md:flex px-4",children:[e.jsx("div",{className:"flex justify-center md:flex-none",children:e.jsx("img",{src:s.covers[0],alt:s.title,className:"h-72 w-56 rounded-md shadow-lg transform border-4 border-gray-300"})}),e.jsxs("div",{className:"flex-column md:pl-4 md:pr-56",children:[e.jsx("p",{className:"pt-4 text-2xl font-bold",children:s.title}),e.jsx("hr",{}),e.jsx("p",{className:"my-4 text-sm text-left",children:s.description})]})]}),e.jsx(k,{open:m,onOpenChange:c,children:e.jsxs(D,{children:[e.jsxs(N,{children:[e.jsx(w,{children:"Are you absolutely sure?"}),e.jsx(A,{children:"This action cannot be undone. This will permanently delete the resource and linked tracks."})]}),e.jsxs(T,{children:[e.jsx(b,{children:"Cancel"}),e.jsx(R,{className:"bg-destructive text-destructive-foreground hover:bg-destructive/90",onClick:()=>u(a),children:"Delete"})]})]})})]})]})})};export{z as default};
