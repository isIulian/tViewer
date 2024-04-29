import{$ as R,r as t,j as E,_ as d,A as D,T as H,i as x,W as U,Y,Z,f as _,U as K,V as q,d as B,e as A,S as J,a3 as Q,a4 as X,k as f,l as u,u as N}from"./index-PsDayEUa.js";const C="Dialog",[O,y]=R(C),[ee,$]=O(C),te=e=>{const{__scopeDialog:a,children:o,open:c,defaultOpen:n,onOpenChange:r,modal:s=!0}=e,l=t.useRef(null),p=t.useRef(null),[i=!1,g]=B({prop:c,defaultProp:n,onChange:r});return t.createElement(ee,{scope:a,triggerRef:l,contentRef:p,contentId:A(),titleId:A(),descriptionId:A(),open:i,onOpenChange:g,onOpenToggle:t.useCallback(()=>g(G=>!G),[g]),modal:s},o)},P="DialogPortal",[ae,w]=O(P,{forceMount:void 0}),oe=e=>{const{__scopeDialog:a,forceMount:o,children:c,container:n}=e,r=$(P,a);return t.createElement(ae,{scope:a,forceMount:o},t.Children.map(c,s=>t.createElement(E,{present:o||r.open},t.createElement(J,{asChild:!0,container:n},s))))},v="DialogOverlay",ce=t.forwardRef((e,a)=>{const o=w(v,e.__scopeDialog),{forceMount:c=o.forceMount,...n}=e,r=$(v,e.__scopeDialog);return r.modal?t.createElement(E,{present:c||r.open},t.createElement(ne,d({},n,{ref:a}))):null}),ne=t.forwardRef((e,a)=>{const{__scopeDialog:o,...c}=e,n=$(v,o);return t.createElement(K,{as:q,allowPinchZoom:!0,shards:[n.contentRef]},t.createElement(_.div,d({"data-state":I(n.open)},c,{ref:a,style:{pointerEvents:"auto",...c.style}})))}),m="DialogContent",re=t.forwardRef((e,a)=>{const o=w(m,e.__scopeDialog),{forceMount:c=o.forceMount,...n}=e,r=$(m,e.__scopeDialog);return t.createElement(E,{present:c||r.open},r.modal?t.createElement(se,d({},n,{ref:a})):t.createElement(le,d({},n,{ref:a})))}),se=t.forwardRef((e,a)=>{const o=$(m,e.__scopeDialog),c=t.useRef(null),n=D(a,o.contentRef,c);return t.useEffect(()=>{const r=c.current;if(r)return H(r)},[]),t.createElement(h,d({},e,{ref:n,trapFocus:o.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:x(e.onCloseAutoFocus,r=>{var s;r.preventDefault(),(s=o.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:x(e.onPointerDownOutside,r=>{const s=r.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&r.preventDefault()}),onFocusOutside:x(e.onFocusOutside,r=>r.preventDefault())}))}),le=t.forwardRef((e,a)=>{const o=$(m,e.__scopeDialog),c=t.useRef(!1),n=t.useRef(!1);return t.createElement(h,d({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:r=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,r),!r.defaultPrevented){var l;c.current||(l=o.triggerRef.current)===null||l===void 0||l.focus(),r.preventDefault()}c.current=!1,n.current=!1},onInteractOutside:r=>{var s,l;(s=e.onInteractOutside)===null||s===void 0||s.call(e,r),r.defaultPrevented||(c.current=!0,r.detail.originalEvent.type==="pointerdown"&&(n.current=!0));const p=r.target;((l=o.triggerRef.current)===null||l===void 0?void 0:l.contains(p))&&r.preventDefault(),r.detail.originalEvent.type==="focusin"&&n.current&&r.preventDefault()}}))}),h=t.forwardRef((e,a)=>{const{__scopeDialog:o,trapFocus:c,onOpenAutoFocus:n,onCloseAutoFocus:r,...s}=e,l=$(m,o),p=t.useRef(null),i=D(a,p);return U(),t.createElement(t.Fragment,null,t.createElement(Y,{asChild:!0,loop:!0,trapped:c,onMountAutoFocus:n,onUnmountAutoFocus:r},t.createElement(Z,d({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":I(l.open)},s,{ref:i,onDismiss:()=>l.onOpenChange(!1)}))),!1)}),M="DialogTitle",de=t.forwardRef((e,a)=>{const{__scopeDialog:o,...c}=e,n=$(M,o);return t.createElement(_.h2,d({id:n.titleId},c,{ref:a}))}),ie="DialogDescription",fe=t.forwardRef((e,a)=>{const{__scopeDialog:o,...c}=e,n=$(ie,o);return t.createElement(_.p,d({id:n.descriptionId},c,{ref:a}))}),$e="DialogClose",pe=t.forwardRef((e,a)=>{const{__scopeDialog:o,...c}=e,n=$($e,o);return t.createElement(_.button,d({type:"button"},c,{ref:a,onClick:x(e.onClick,()=>n.onOpenChange(!1))}))});function I(e){return e?"open":"closed"}const ue="DialogTitleWarning",[be,Ze]=Q(ue,{contentName:m,titleName:M,docsSlug:"dialog"}),ge=te,me=oe,xe=ce,De=re,_e=de,Ae=fe,F=pe,ve="AlertDialog",[Ee,Ke]=R(ve,[y]),b=y(),Re=e=>{const{__scopeAlertDialog:a,...o}=e,c=b(a);return t.createElement(ge,d({},c,o,{modal:!0}))},Ne=e=>{const{__scopeAlertDialog:a,...o}=e,c=b(a);return t.createElement(me,d({},c,o))},Ce=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...c}=e,n=b(o);return t.createElement(xe,d({},n,c,{ref:a}))}),T="AlertDialogContent",[Oe,ye]=Ee(T),Pe=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,children:c,...n}=e,r=b(o),s=t.useRef(null),l=D(a,s),p=t.useRef(null);return t.createElement(be,{contentName:T,titleName:we,docsSlug:"alert-dialog"},t.createElement(Oe,{scope:o,cancelRef:p},t.createElement(De,d({role:"alertdialog"},r,n,{ref:l,onOpenAutoFocus:x(n.onOpenAutoFocus,i=>{var g;i.preventDefault(),(g=p.current)===null||g===void 0||g.focus({preventScroll:!0})}),onPointerDownOutside:i=>i.preventDefault(),onInteractOutside:i=>i.preventDefault()}),t.createElement(X,null,c),!1)))}),we="AlertDialogTitle",he=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...c}=e,n=b(o);return t.createElement(_e,d({},n,c,{ref:a}))}),Me=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...c}=e,n=b(o);return t.createElement(Ae,d({},n,c,{ref:a}))}),Ie=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...c}=e,n=b(o);return t.createElement(F,d({},n,c,{ref:a}))}),Fe="AlertDialogCancel",Te=t.forwardRef((e,a)=>{const{__scopeAlertDialog:o,...c}=e,{cancelRef:n}=ye(Fe,o),r=b(o),s=D(a,n);return t.createElement(F,d({},r,c,{ref:s}))}),je=Re,Se=Ne,j=Ce,S=Pe,k=Ie,L=Te,z=he,W=Me,qe=je,ke=Se,V=t.forwardRef(({className:e,...a},o)=>f.jsx(j,{className:u("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...a,ref:o}));V.displayName=j.displayName;const Le=t.forwardRef(({className:e,...a},o)=>f.jsxs(ke,{children:[f.jsx(V,{}),f.jsx(S,{ref:o,className:u("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a})]}));Le.displayName=S.displayName;const ze=({className:e,...a})=>f.jsx("div",{className:u("flex flex-col space-y-2 text-center sm:text-left",e),...a});ze.displayName="AlertDialogHeader";const We=({className:e,...a})=>f.jsx("div",{className:u("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...a});We.displayName="AlertDialogFooter";const Ve=t.forwardRef(({className:e,...a},o)=>f.jsx(z,{ref:o,className:u("text-lg font-semibold",e),...a}));Ve.displayName=z.displayName;const Ge=t.forwardRef(({className:e,...a},o)=>f.jsx(W,{ref:o,className:u("text-sm text-muted-foreground",e),...a}));Ge.displayName=W.displayName;const He=t.forwardRef(({className:e,...a},o)=>f.jsx(k,{ref:o,className:u(N(),e),...a}));He.displayName=k.displayName;const Ue=t.forwardRef(({className:e,...a},o)=>f.jsx(L,{ref:o,className:u(N({variant:"outline"}),"mt-2 sm:mt-0",e),...a}));Ue.displayName=L.displayName;export{ge as $,qe as A,Le as a,ze as b,Ve as c,Ge as d,We as e,Ue as f,He as g,me as h,xe as i,De as j,F as k,_e as l,Ae as m};
