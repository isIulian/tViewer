import{t as Te,r as e,a7 as qe,$ as Ge,S as Ie,D as B,a3 as Ye,_ as T,f as A,i as P,T as Ze,a8 as K,a9 as _e,U as Xe,Y as Je,V as Qe,W as et,Z as tt,a0 as ot,e as Pe,aa as nt,ab as ct,b as rt,d as we,a2 as at,a1 as st,k as E,l as z,F as lt}from"./index-BqNX3fUW.js";/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=Te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.372.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=Te("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function Se(o,[n,t]){return Math.min(t,Math.max(n,o))}function dt(o){const n=e.useRef({value:o,previous:o});return e.useMemo(()=>(n.current.value!==o&&(n.current.previous=n.current.value,n.current.value=o),n.current.previous),[o])}const ft=[" ","Enter","ArrowUp","ArrowDown"],ut=[" ","Enter"],le="Select",[ie,de,pt]=qe(le),[te,to]=Ge(le,[pt,Ie]),ge=Ie(),[mt,Y]=te(le),[$t,ht]=te(le),vt=o=>{const{__scopeSelect:n,children:t,open:r,defaultOpen:l,onOpenChange:f,value:a,defaultValue:c,onValueChange:s,dir:i,name:$,autoComplete:C,disabled:I,required:y}=o,p=ge(n),[h,w]=e.useState(null),[m,d]=e.useState(null),[v,oe]=e.useState(!1),D=rt(i),[ne=!1,R]=we({prop:r,defaultProp:l,onChange:f}),[O,q]=we({prop:a,defaultProp:c,onChange:s}),X=e.useRef(null),G=h?!!h.closest("form"):!0,[L,j]=e.useState(new Set),F=Array.from(L).map(_=>_.props.value).join(";");return e.createElement(at,p,e.createElement(mt,{required:y,scope:n,trigger:h,onTriggerChange:w,valueNode:m,onValueNodeChange:d,valueNodeHasChildren:v,onValueNodeHasChildrenChange:oe,contentId:Pe(),value:O,onValueChange:q,open:ne,onOpenChange:R,dir:D,triggerPointerDownPosRef:X,disabled:I},e.createElement(ie.Provider,{scope:n},e.createElement($t,{scope:o.__scopeSelect,onNativeOptionAdd:e.useCallback(_=>{j(V=>new Set(V).add(_))},[]),onNativeOptionRemove:e.useCallback(_=>{j(V=>{const H=new Set(V);return H.delete(_),H})},[])},t)),G?e.createElement(ke,{key:F,"aria-hidden":!0,required:y,tabIndex:-1,name:$,autoComplete:C,value:O,onChange:_=>q(_.target.value),disabled:I},O===void 0?e.createElement("option",{value:""}):null,Array.from(L)):null))},gt="SelectTrigger",xt=e.forwardRef((o,n)=>{const{__scopeSelect:t,disabled:r=!1,...l}=o,f=ge(t),a=Y(gt,t),c=a.disabled||r,s=B(n,a.onTriggerChange),i=de(t),[$,C,I]=Ae(p=>{const h=i().filter(d=>!d.disabled),w=h.find(d=>d.value===a.value),m=Le(h,p,w);m!==void 0&&a.onValueChange(m.value)}),y=()=>{c||(a.onOpenChange(!0),I())};return e.createElement(Ye,T({asChild:!0},f),e.createElement(A.button,T({type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:c,"data-disabled":c?"":void 0,"data-placeholder":Me(a.value)?"":void 0},l,{ref:s,onClick:P(l.onClick,p=>{p.currentTarget.focus()}),onPointerDown:P(l.onPointerDown,p=>{const h=p.target;h.hasPointerCapture(p.pointerId)&&h.releasePointerCapture(p.pointerId),p.button===0&&p.ctrlKey===!1&&(y(),a.triggerPointerDownPosRef.current={x:Math.round(p.pageX),y:Math.round(p.pageY)},p.preventDefault())}),onKeyDown:P(l.onKeyDown,p=>{const h=$.current!=="";!(p.ctrlKey||p.altKey||p.metaKey)&&p.key.length===1&&C(p.key),!(h&&p.key===" ")&&ft.includes(p.key)&&(y(),p.preventDefault())})})))}),wt="SelectValue",St=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,children:f,placeholder:a="",...c}=o,s=Y(wt,t),{onValueNodeHasChildrenChange:i}=s,$=f!==void 0,C=B(n,s.onValueNodeChange);return K(()=>{i($)},[i,$]),e.createElement(A.span,T({},c,{ref:C,style:{pointerEvents:"none"}}),Me(s.value)?e.createElement(e.Fragment,null,a):f)}),bt=e.forwardRef((o,n)=>{const{__scopeSelect:t,children:r,...l}=o;return e.createElement(A.span,T({"aria-hidden":!0},l,{ref:n}),r||"▼")}),Ct=o=>e.createElement(Ze,T({asChild:!0},o)),ee="SelectContent",yt=e.forwardRef((o,n)=>{const t=Y(ee,o.__scopeSelect),[r,l]=e.useState();if(K(()=>{l(new DocumentFragment)},[]),!t.open){const f=r;return f?_e.createPortal(e.createElement(Ne,{scope:o.__scopeSelect},e.createElement(ie.Slot,{scope:o.__scopeSelect},e.createElement("div",null,o.children))),f):null}return e.createElement(Et,T({},o,{ref:n}))}),W=10,[Ne,Z]=te(ee),Et=e.forwardRef((o,n)=>{const{__scopeSelect:t,position:r="item-aligned",onCloseAutoFocus:l,onEscapeKeyDown:f,onPointerDownOutside:a,side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:I,collisionPadding:y,sticky:p,hideWhenDetached:h,avoidCollisions:w,...m}=o,d=Y(ee,t),[v,oe]=e.useState(null),[D,ne]=e.useState(null),R=B(n,u=>oe(u)),[O,q]=e.useState(null),[X,G]=e.useState(null),L=de(t),[j,F]=e.useState(!1),_=e.useRef(!1);e.useEffect(()=>{if(v)return Xe(v)},[v]),Je();const V=e.useCallback(u=>{const[S,...N]=L().map(x=>x.ref.current),[b]=N.slice(-1),g=document.activeElement;for(const x of u)if(x===g||(x==null||x.scrollIntoView({block:"nearest"}),x===S&&D&&(D.scrollTop=0),x===b&&D&&(D.scrollTop=D.scrollHeight),x==null||x.focus(),document.activeElement!==g))return},[L,D]),H=e.useCallback(()=>V([O,v]),[V,O,v]);e.useEffect(()=>{j&&H()},[j,H]);const{onOpenChange:J,triggerPointerDownPosRef:U}=d;e.useEffect(()=>{if(v){let u={x:0,y:0};const S=b=>{var g,x,M,k;u={x:Math.abs(Math.round(b.pageX)-((g=(x=U.current)===null||x===void 0?void 0:x.x)!==null&&g!==void 0?g:0)),y:Math.abs(Math.round(b.pageY)-((M=(k=U.current)===null||k===void 0?void 0:k.y)!==null&&M!==void 0?M:0))}},N=b=>{u.x<=10&&u.y<=10?b.preventDefault():v.contains(b.target)||J(!1),document.removeEventListener("pointermove",S),U.current=null};return U.current!==null&&(document.addEventListener("pointermove",S),document.addEventListener("pointerup",N,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",N,{capture:!0})}}},[v,J,U]),e.useEffect(()=>{const u=()=>J(!1);return window.addEventListener("blur",u),window.addEventListener("resize",u),()=>{window.removeEventListener("blur",u),window.removeEventListener("resize",u)}},[J]);const[fe,re]=Ae(u=>{const S=L().filter(g=>!g.disabled),N=S.find(g=>g.ref.current===document.activeElement),b=Le(S,u,N);b&&setTimeout(()=>b.ref.current.focus())}),ue=e.useCallback((u,S,N)=>{const b=!_.current&&!N;(d.value!==void 0&&d.value===S||b)&&(q(u),b&&(_.current=!0))},[d.value]),pe=e.useCallback(()=>v==null?void 0:v.focus(),[v]),Q=e.useCallback((u,S,N)=>{const b=!_.current&&!N;(d.value!==void 0&&d.value===S||b)&&G(u)},[d.value]),ae=r==="popper"?be:Tt,ce=ae===be?{side:c,sideOffset:s,align:i,alignOffset:$,arrowPadding:C,collisionBoundary:I,collisionPadding:y,sticky:p,hideWhenDetached:h,avoidCollisions:w}:{};return e.createElement(Ne,{scope:t,content:v,viewport:D,onViewportChange:ne,itemRefCallback:ue,selectedItem:O,onItemLeave:pe,itemTextRefCallback:Q,focusSelectedItem:H,selectedItemText:X,position:r,isPositioned:j,searchRef:fe},e.createElement(Qe,{as:et,allowPinchZoom:!0},e.createElement(tt,{asChild:!0,trapped:d.open,onMountAutoFocus:u=>{u.preventDefault()},onUnmountAutoFocus:P(l,u=>{var S;(S=d.trigger)===null||S===void 0||S.focus({preventScroll:!0}),u.preventDefault()})},e.createElement(ot,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:f,onPointerDownOutside:a,onFocusOutside:u=>u.preventDefault(),onDismiss:()=>d.onOpenChange(!1)},e.createElement(ae,T({role:"listbox",id:d.contentId,"data-state":d.open?"open":"closed",dir:d.dir,onContextMenu:u=>u.preventDefault()},m,ce,{onPlaced:()=>F(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...m.style},onKeyDown:P(m.onKeyDown,u=>{const S=u.ctrlKey||u.altKey||u.metaKey;if(u.key==="Tab"&&u.preventDefault(),!S&&u.key.length===1&&re(u.key),["ArrowUp","ArrowDown","Home","End"].includes(u.key)){let b=L().filter(g=>!g.disabled).map(g=>g.ref.current);if(["ArrowUp","End"].includes(u.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(u.key)){const g=u.target,x=b.indexOf(g);b=b.slice(x+1)}setTimeout(()=>V(b)),u.preventDefault()}})}))))))}),Tt=e.forwardRef((o,n)=>{const{__scopeSelect:t,onPlaced:r,...l}=o,f=Y(ee,t),a=Z(ee,t),[c,s]=e.useState(null),[i,$]=e.useState(null),C=B(n,R=>$(R)),I=de(t),y=e.useRef(!1),p=e.useRef(!0),{viewport:h,selectedItem:w,selectedItemText:m,focusSelectedItem:d}=a,v=e.useCallback(()=>{if(f.trigger&&f.valueNode&&c&&i&&h&&w&&m){const R=f.trigger.getBoundingClientRect(),O=i.getBoundingClientRect(),q=f.valueNode.getBoundingClientRect(),X=m.getBoundingClientRect();if(f.dir!=="rtl"){const g=X.left-O.left,x=q.left-g,M=R.left-x,k=R.width+M,me=Math.max(k,O.width),$e=window.innerWidth-W,he=Se(x,[W,$e-me]);c.style.minWidth=k+"px",c.style.left=he+"px"}else{const g=O.right-X.right,x=window.innerWidth-q.right-g,M=window.innerWidth-R.right-x,k=R.width+M,me=Math.max(k,O.width),$e=window.innerWidth-W,he=Se(x,[W,$e-me]);c.style.minWidth=k+"px",c.style.right=he+"px"}const G=I(),L=window.innerHeight-W*2,j=h.scrollHeight,F=window.getComputedStyle(i),_=parseInt(F.borderTopWidth,10),V=parseInt(F.paddingTop,10),H=parseInt(F.borderBottomWidth,10),J=parseInt(F.paddingBottom,10),U=_+V+j+J+H,fe=Math.min(w.offsetHeight*5,U),re=window.getComputedStyle(h),ue=parseInt(re.paddingTop,10),pe=parseInt(re.paddingBottom,10),Q=R.top+R.height/2-W,ae=L-Q,ce=w.offsetHeight/2,u=w.offsetTop+ce,S=_+V+u,N=U-S;if(S<=Q){const g=w===G[G.length-1].ref.current;c.style.bottom="0px";const x=i.clientHeight-h.offsetTop-h.offsetHeight,M=Math.max(ae,ce+(g?pe:0)+x+H),k=S+M;c.style.height=k+"px"}else{const g=w===G[0].ref.current;c.style.top="0px";const M=Math.max(Q,_+h.offsetTop+(g?ue:0)+ce)+N;c.style.height=M+"px",h.scrollTop=S-Q+h.offsetTop}c.style.margin=`${W}px 0`,c.style.minHeight=fe+"px",c.style.maxHeight=L+"px",r==null||r(),requestAnimationFrame(()=>y.current=!0)}},[I,f.trigger,f.valueNode,c,i,h,w,m,f.dir,r]);K(()=>v(),[v]);const[oe,D]=e.useState();K(()=>{i&&D(window.getComputedStyle(i).zIndex)},[i]);const ne=e.useCallback(R=>{R&&p.current===!0&&(v(),d==null||d(),p.current=!1)},[v,d]);return e.createElement(It,{scope:t,contentWrapper:c,shouldExpandOnScrollRef:y,onScrollButtonChange:ne},e.createElement("div",{ref:s,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:oe}},e.createElement(A.div,T({},l,{ref:C,style:{boxSizing:"border-box",maxHeight:"100%",...l.style}}))))}),be=e.forwardRef((o,n)=>{const{__scopeSelect:t,align:r="start",collisionPadding:l=W,...f}=o,a=ge(t);return e.createElement(st,T({},a,f,{ref:n,align:r,collisionPadding:l,style:{boxSizing:"border-box",...f.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[It,xe]=te(ee,{}),Ce="SelectViewport",_t=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Z(Ce,t),f=xe(Ce,t),a=B(n,l.onViewportChange),c=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement(ie.Slot,{scope:t},e.createElement(A.div,T({"data-radix-select-viewport":"",role:"presentation"},r,{ref:a,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:P(r.onScroll,s=>{const i=s.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:C}=f;if(C!=null&&C.current&&$){const I=Math.abs(c.current-i.scrollTop);if(I>0){const y=window.innerHeight-W*2,p=parseFloat($.style.minHeight),h=parseFloat($.style.height),w=Math.max(p,h);if(w<y){const m=w+I,d=Math.min(y,m),v=m-d;$.style.height=d+"px",$.style.bottom==="0px"&&(i.scrollTop=v>0?v:0,$.style.justifyContent="flex-end")}}}c.current=i.scrollTop})}))))}),Pt="SelectGroup",[oo,Rt]=te(Pt),Nt="SelectLabel",Ot=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o,l=Rt(Nt,t);return e.createElement(A.div,T({id:l.id},r,{ref:n}))}),ve="SelectItem",[Dt,Oe]=te(ve),Mt=e.forwardRef((o,n)=>{const{__scopeSelect:t,value:r,disabled:l=!1,textValue:f,...a}=o,c=Y(ve,t),s=Z(ve,t),i=c.value===r,[$,C]=e.useState(f??""),[I,y]=e.useState(!1),p=B(n,m=>{var d;return(d=s.itemRefCallback)===null||d===void 0?void 0:d.call(s,m,r,l)}),h=Pe(),w=()=>{l||(c.onValueChange(r),c.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return e.createElement(Dt,{scope:t,value:r,disabled:l,textId:h,isSelected:i,onItemTextChange:e.useCallback(m=>{C(d=>{var v;return d||((v=m==null?void 0:m.textContent)!==null&&v!==void 0?v:"").trim()})},[])},e.createElement(ie.ItemSlot,{scope:t,value:r,disabled:l,textValue:$},e.createElement(A.div,T({role:"option","aria-labelledby":h,"data-highlighted":I?"":void 0,"aria-selected":i&&I,"data-state":i?"checked":"unchecked","aria-disabled":l||void 0,"data-disabled":l?"":void 0,tabIndex:l?void 0:-1},a,{ref:p,onFocus:P(a.onFocus,()=>y(!0)),onBlur:P(a.onBlur,()=>y(!1)),onPointerUp:P(a.onPointerUp,w),onPointerMove:P(a.onPointerMove,m=>{if(l){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}else m.currentTarget.focus({preventScroll:!0})}),onPointerLeave:P(a.onPointerLeave,m=>{if(m.currentTarget===document.activeElement){var d;(d=s.onItemLeave)===null||d===void 0||d.call(s)}}),onKeyDown:P(a.onKeyDown,m=>{var d;((d=s.searchRef)===null||d===void 0?void 0:d.current)!==""&&m.key===" "||(ut.includes(m.key)&&w(),m.key===" "&&m.preventDefault())})}))))}),se="SelectItemText",kt=e.forwardRef((o,n)=>{const{__scopeSelect:t,className:r,style:l,...f}=o,a=Y(se,t),c=Z(se,t),s=Oe(se,t),i=ht(se,t),[$,C]=e.useState(null),I=B(n,m=>C(m),s.onItemTextChange,m=>{var d;return(d=c.itemTextRefCallback)===null||d===void 0?void 0:d.call(c,m,s.value,s.disabled)}),y=$==null?void 0:$.textContent,p=e.useMemo(()=>e.createElement("option",{key:s.value,value:s.value,disabled:s.disabled},y),[s.disabled,s.value,y]),{onNativeOptionAdd:h,onNativeOptionRemove:w}=i;return K(()=>(h(p),()=>w(p)),[h,w,p]),e.createElement(e.Fragment,null,e.createElement(A.span,T({id:s.textId},f,{ref:I})),s.isSelected&&a.valueNode&&!a.valueNodeHasChildren?_e.createPortal(f.children,a.valueNode):null)}),At="SelectItemIndicator",Lt=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return Oe(At,t).isSelected?e.createElement(A.span,T({"aria-hidden":!0},r,{ref:n})):null}),ye="SelectScrollUpButton",Vt=e.forwardRef((o,n)=>{const t=Z(ye,o.__scopeSelect),r=xe(ye,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return K(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollTop>0;f(i)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(De,T({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop-s.offsetHeight)}})):null}),Ee="SelectScrollDownButton",Bt=e.forwardRef((o,n)=>{const t=Z(Ee,o.__scopeSelect),r=xe(Ee,o.__scopeSelect),[l,f]=e.useState(!1),a=B(n,r.onScrollButtonChange);return K(()=>{if(t.viewport&&t.isPositioned){let s=function(){const i=c.scrollHeight-c.clientHeight,$=Math.ceil(c.scrollTop)<i;f($)};const c=t.viewport;return s(),c.addEventListener("scroll",s),()=>c.removeEventListener("scroll",s)}},[t.viewport,t.isPositioned]),l?e.createElement(De,T({},o,{ref:a,onAutoScroll:()=>{const{viewport:c,selectedItem:s}=t;c&&s&&(c.scrollTop=c.scrollTop+s.offsetHeight)}})):null}),De=e.forwardRef((o,n)=>{const{__scopeSelect:t,onAutoScroll:r,...l}=o,f=Z("SelectScrollButton",t),a=e.useRef(null),c=de(t),s=e.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return e.useEffect(()=>()=>s(),[s]),K(()=>{var i;const $=c().find(C=>C.ref.current===document.activeElement);$==null||(i=$.ref.current)===null||i===void 0||i.scrollIntoView({block:"nearest"})},[c]),e.createElement(A.div,T({"aria-hidden":!0},l,{ref:n,style:{flexShrink:0,...l.style},onPointerDown:P(l.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:P(l.onPointerMove,()=>{var i;(i=f.onItemLeave)===null||i===void 0||i.call(f),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:P(l.onPointerLeave,()=>{s()})}))}),Ht=e.forwardRef((o,n)=>{const{__scopeSelect:t,...r}=o;return e.createElement(A.div,T({"aria-hidden":!0},r,{ref:n}))});function Me(o){return o===""||o===void 0}const ke=e.forwardRef((o,n)=>{const{value:t,...r}=o,l=e.useRef(null),f=B(n,l),a=dt(t);return e.useEffect(()=>{const c=l.current,s=window.HTMLSelectElement.prototype,$=Object.getOwnPropertyDescriptor(s,"value").set;if(a!==t&&$){const C=new Event("change",{bubbles:!0});$.call(c,t),c.dispatchEvent(C)}},[a,t]),e.createElement(nt,{asChild:!0},e.createElement("select",T({},r,{ref:f,defaultValue:t})))});ke.displayName="BubbleSelect";function Ae(o){const n=ct(o),t=e.useRef(""),r=e.useRef(0),l=e.useCallback(a=>{const c=t.current+a;n(c),function s(i){t.current=i,window.clearTimeout(r.current),i!==""&&(r.current=window.setTimeout(()=>s(""),1e3))}(c)},[n]),f=e.useCallback(()=>{t.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[t,l,f]}function Le(o,n,t){const l=n.length>1&&Array.from(n).every(i=>i===n[0])?n[0]:n,f=t?o.indexOf(t):-1;let a=Wt(o,Math.max(f,0));l.length===1&&(a=a.filter(i=>i!==t));const s=a.find(i=>i.textValue.toLowerCase().startsWith(l.toLowerCase()));return s!==t?s:void 0}function Wt(o,n){return o.map((t,r)=>o[(n+r)%o.length])}const jt=vt,Ve=xt,Ft=St,Ut=bt,Kt=Ct,Be=yt,zt=_t,He=Ot,We=Mt,qt=kt,Gt=Lt,je=Vt,Fe=Bt,Ue=Ht,no=jt,co=Ft,Yt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxs(Ve,{ref:r,className:z("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",o),...t,children:[n,E.jsx(Ut,{asChild:!0,children:E.jsx(Re,{className:"h-4 w-4 opacity-50"})})]}));Yt.displayName=Ve.displayName;const Ke=e.forwardRef(({className:o,...n},t)=>E.jsx(je,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsx(it,{className:"h-4 w-4"})}));Ke.displayName=je.displayName;const ze=e.forwardRef(({className:o,...n},t)=>E.jsx(Fe,{ref:t,className:z("flex cursor-default items-center justify-center py-1",o),...n,children:E.jsx(Re,{className:"h-4 w-4"})}));ze.displayName=Fe.displayName;const Zt=e.forwardRef(({className:o,children:n,position:t="popper",...r},l)=>E.jsx(Kt,{children:E.jsxs(Be,{ref:l,className:z("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",o),position:t,...r,children:[E.jsx(Ke,{}),E.jsx(zt,{className:z("p-1",t==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:n}),E.jsx(ze,{})]})}));Zt.displayName=Be.displayName;const Xt=e.forwardRef(({className:o,...n},t)=>E.jsx(He,{ref:t,className:z("py-1.5 pl-8 pr-2 text-sm font-semibold",o),...n}));Xt.displayName=He.displayName;const Jt=e.forwardRef(({className:o,children:n,...t},r)=>E.jsxs(We,{ref:r,className:z("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled='true']:pointer-events-none data-[disabled='true']:opacity-50",o),...t,children:[E.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:E.jsx(Gt,{children:E.jsx(lt,{className:"h-4 w-4"})})}),E.jsx(qt,{children:n})]}));Jt.displayName=We.displayName;const Qt=e.forwardRef(({className:o,...n},t)=>E.jsx(Ue,{ref:t,className:z("-mx-1 my-1 h-px bg-muted",o),...n}));Qt.displayName=Ue.displayName;export{dt as $,no as S,Yt as a,co as b,Zt as c,Jt as d};
