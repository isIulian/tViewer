import{c as n,ad as m,r as c,k as t,ae as r}from"./index-BqNX3fUW.js";/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var h=n("outline","moon","IconMoon",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}]]);/**
 * @license @tabler/icons-react v3.2.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var l=n("outline","sun","IconSun",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7",key:"svg-1"}]]);function u(){const{theme:e,setTheme:a}=m();return c.useEffect(()=>{const s=e==="dark"?"#020817":"#fff",o=document.querySelector("meta[name='theme-color']");o&&o.setAttribute("content",s)},[e]),t.jsx(r,{size:"icon",variant:"ghost",className:"rounded-full",onClick:()=>a(e==="light"?"dark":"light"),children:e==="light"?t.jsx(h,{size:20}):t.jsx(l,{size:20})})}export{u as T};
