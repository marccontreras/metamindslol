"use strict";(self.webpackChunk_metamindslol_opensource=self.webpackChunk_metamindslol_opensource||[]).push([[2528],{70443:function(e,n,t){t.a(e,(async function(e,a){try{var r=t(74165),o=t(15861),s=(t(72791),t(24846)),i=t(35733),c=t(76285),l=t(66064),m=t(78983),u=t(26348),h=t(80184),d=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://metamindslol-backend-render.onrender.com/champions");case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch data");case 6:return e.next=8,n.json();case 8:return t=e.sent,e.abrupt("return",t);case 12:return e.prev=12,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:return n=e.sent,console.log(n),t=n.map((function(e){return{component:m.U6,name:e.name,to:"/champion/?champ=".concat(e.name),state:{itemName:e.name}}})),console.log(t),(0,u.b)(t)&&console.log("es array"),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=[{component:m.fd,name:"Navigation Menu"},{component:m.U6,name:"Home",to:"/dashboard",icon:(0,h.jsx)(s.Z,{icon:i.I,customClassName:"nav-icon"})},{component:m.U6,name:"Champions",to:"/champions",icon:(0,h.jsx)(s.Z,{icon:c.y,customClassName:"nav-icon"})},{component:m.dw,name:"Champion List",icon:(0,h.jsx)(s.Z,{icon:l.A,customClassName:"nav-icon"}),items:await f()}];n.Z=p,a()}catch(b){a(b)}}),1)},8040:function(e,n,t){t(72791),t(36249),t(78983),t(80184)},84053:function(e,n,t){var a=t(72791),r=t(57689),o=t(78983),s=t(36249),i=t(80184),c=function(){return(0,i.jsx)(o.KB,{lg:!0,children:(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(o.LQ,{color:"primary"}),children:(0,i.jsxs)(r.Z5,{children:[s.Z.map((function(e,n){return e.element&&(0,i.jsx)(r.AW,{path:e.path,exact:e.exact,name:e.name,element:(0,i.jsx)(e.element,{})},n)})),(0,i.jsx)(r.AW,{path:"/",element:(0,i.jsx)(r.Fg,{to:"dashboard",replace:!0})})]})})})};n.Z=a.memo(c)},40431:function(e,n,t){var a=t(72791),r=t(78983),o=t(80184),s=function(){return(0,o.jsxs)(r.pG,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer",children:"CoreUI"}),(0,o.jsx)("span",{className:"ms-1",children:"\xa9 2023 creativeLabs."})]}),(0,o.jsxs)("div",{className:"ms-auto",children:[(0,o.jsx)("span",{className:"me-1",children:"Powered by"}),(0,o.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"CoreUI React Admin & Dashboard Template"})]})]})};n.Z=a.memo(s)},78455:function(e,n,t){t.d(n,{Z:function(){return y}});var a=t(72791),r=t(59434),o=t(78983),s=t(24846),i=t(50612),c=t(29439),l=t(1413),m=t(44925),u=t(11087),h=t(80184),d=function(e){var n=e.summoners;return(0,h.jsx)(o.$H,{className:"pt-0 w-100",placement:"bottom-end",children:n&&n.map((function(e,n){return(0,h.jsx)(o.$f,{className:"w-100",children:(0,h.jsx)(u.rU,{className:"min-vw-100",to:"/summoner/?summonerName=".concat(e.name),state:{summoner:e},children:(0,h.jsxs)(o.KB,{className:"mx-0",children:[(0,h.jsx)("img",{style:{height:"50px"},className:"ms-2",src:"https://ddragon.leagueoflegends.com/cdn/14.20.1/img/profileicon/"+e.profileIconId+".png",alt:e.profileIconId}),e.name&&(0,h.jsx)(o.C_,{color:"danger",className:"ms-2",children:e.name})]})},"link".concat(e.name))},n)}))})},f=t(57689),p=["input","handleInputChange","handleKeyDown"];function b(e){var n=e.input,t=e.handleInputChange,r=e.handleKeyDown,o=(0,m.Z)(e,p),s=(0,a.useRef)(null);return(0,a.useEffect)((function(){s.current.focus()}),[]),(0,h.jsx)("div",(0,l.Z)((0,l.Z)({},o),{},{children:(0,h.jsx)("input",{ref:s,type:"text",placeholder:"Search...",value:n,onChange:function(e){return t(e)},onKeyDown:function(e){return r(e)},className:"min-vw-50 w-100"})}))}var x=function(){var e=(0,a.useState)(""),n=(0,c.Z)(e,2),t=n[0],s=n[1],i=(0,a.useState)([]),l=(0,c.Z)(i,2),m=l[0],u=l[1],p=(0,f.s0)(),x=(0,r.I0)();return(0,h.jsx)("div",{children:(0,h.jsxs)(o.w5,{variant:"nav-item",children:[(0,h.jsxs)(o.SQ,{className:"py-0 flex justify-content-between align-items-center",caret:!1,trigger:"click",children:[(0,h.jsx)(b,{handleInputChange:function(e){console.log(e);var n=e.target.value,t=encodeURIComponent(n);s(n),fetch("https://metamindslol-backend-render.onrender.com/summoners/search/".concat(t)).then((function(e){return e.json()})).then((function(e){Array.isArray(e)?(u(e),x({type:"set",summonerShow:!0})):u([])})).catch((function(e){return console.error("Error fetching search results:",e)}))},handleKeyDown:function(e){if("Enter"!==e.key&&"s"!==e.key||console.log("tecla; "+e.key),"Enter"===e.key&&t.length>0){var n=encodeURIComponent(t);console.log("HORA DENVIAR "+n),fetch("https://metamindslol-backend-render.onrender.com/summoners/EUW/".concat(n)).then((function(e){return e.json()})).then((function(e){p("/summoner/?summonerName=".concat(n),{state:{summoner:e}})})).catch((function(e){return console.error("Error fetching search results:",e)}))}},input:t},"temp"),(0,h.jsx)(d,{summoners:m})]})," "]})})},y=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.sidebarShow}));return(0,h.jsx)(o.PO,{position:"sticky",className:"mb-4",children:(0,h.jsxs)(o.KB,{fluid:!0,className:"d-flex justify-content-sm-start",children:[(0,h.jsx)(o.X4,{className:"ps-1",onClick:function(){return e({type:"set",sidebarShow:!n})},children:(0,h.jsx)(s.Z,{icon:i.N,size:"lg"})}),(0,h.jsx)(o.g3,{className:"w-75 mx-3 flex-fill",children:(0,h.jsx)(o.U6,{className:"w-100",children:(0,h.jsx)(x,{})})})]})})}},98236:function(e,n,t){t.a(e,(async function(e,a){try{var r=t(72791),o=t(59434),s=t(78983),i=t(23193),c=t(70443),l=t(80184),m=e([c]);c=(m.then?(await m)():m)[0];var u=function(){var e=(0,o.I0)(),n=(0,o.v9)((function(e){return e.sidebarUnfoldable})),t=(0,o.v9)((function(e){return e.sidebarShow}));return(0,l.jsxs)(s.z3,{position:"fixed",unfoldable:n,visible:t,onVisibleChange:function(n){e({type:"set",sidebarShow:n})},children:[(0,l.jsx)(s.Dl,{className:"d-none d-md-flex",to:"/",children:(0,l.jsx)(s.KB,{className:"justify-content-center w-50",children:(0,l.jsx)("img",{src:"/assets/images/brand/logo.png",height:50,alt:"metamindslol"})})}),(0,l.jsx)(s.Xk,{children:(0,l.jsx)(i.$,{items:c.Z})}),(0,l.jsx)(s.iv,{className:"d-none d-lg-flex",onClick:function(){return e({type:"set",sidebarShow:!t})}})]})};n.Z=r.memo(u),a()}catch(h){a(h)}}))},23193:function(e,n,t){t.d(n,{$:function(){return h}});var a=t(1413),r=t(44925),o=t(72791),s=t(57689),i=t(11087),c=t(78983),l=t(80184),m=["component","name","badge","icon"],u=["component","name","icon","to"],h=function(e){var n=e.items,t=(0,s.TH)(),h=function(e,n,t){return(0,l.jsxs)(l.Fragment,{children:[n&&n,e&&e,t&&(0,l.jsx)(c.C_,{color:t.color,className:"ms-auto",children:t.text})]})},d=function(e,n){var t=e.component,s=e.name,c=e.badge,l=e.icon,u=(0,r.Z)(e,m),d=t;return(0,o.createElement)(d,(0,a.Z)((0,a.Z)({},u.to&&!u.items&&{component:i.OL}),{},{key:n},u),h(s,l,c))},f=function e(n,o){var s,i=n.component,c=n.name,m=n.icon,f=n.to,p=(0,r.Z)(n,u),b=i;return(0,l.jsx)(b,(0,a.Z)((0,a.Z)({idx:String(o),toggler:h(c,m),visible:t.pathname.startsWith(f)},p),{},{children:null===(s=n.items)||void 0===s?void 0:s.map((function(n,t){return n.items?e(n,t):d(n,t)}))}),o)};return(0,l.jsx)(o.Fragment,{children:n&&n.map((function(e,n){return e.items?f(e,n):d(e,n)}))})}},78486:function(e,n,t){var a=t(72791),r=t(78983),o=t(80184),s=function(e){var n=e.content,t=e.href,a=e.name,s="s"===a.slice(-1),i="https://coreui.io/react/docs/".concat(t);return(0,o.jsxs)(r.e_,{color:"info",className:"bg-white",children:[n||"A React ".concat(a," component ").concat(s?"have":"has"," been created as a native React.js version\n      of Bootstrap ").concat(a,". ").concat(a," ").concat(s?"are":"is"," delivered with some new features,\n      variants, and unique design that matches CoreUI Design System requirements."),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"For more information please visit our official"," ",(0,o.jsx)(r.h7,{href:i,target:"_blank",children:"documentation of CoreUI Components Library for React.js"}),"."]})};n.Z=a.memo(s)},91174:function(e,n,t){var a=t(72791),r=t(78983),o=t(24846),s=t(46429),i=t(27817),c=t(80184),l=function(e){var n=e.children,t=e.href,a="https://coreui.io/react/docs/".concat(t);return(0,c.jsxs)("div",{className:"example",children:[(0,c.jsxs)(r.n2,{variant:"tabs",children:[(0,c.jsx)(r.U6,{children:(0,c.jsxs)(r.AQ,{href:"#",active:!0,children:[(0,c.jsx)(o.Z,{icon:s.B,className:"me-2"}),"Preview"]})}),(0,c.jsx)(r.U6,{children:(0,c.jsxs)(r.AQ,{href:a,target:"_blank",children:[(0,c.jsx)(o.Z,{icon:i.I,className:"me-2"}),"Code"]})})]}),(0,c.jsx)(r.gr,{className:"rounded-bottom",children:(0,c.jsx)(r.IA,{className:"p-3 preview",visible:!0,children:n})})]})};n.Z=a.memo(l)},69053:function(e,n,t){var a=t(1413),r=t(44925),o=t(72791),s=t(78983),i=t(80184),c=["href","name","text"],l=function(e){var n=e.href,t=e.name,o=e.text,l=(0,r.Z)(e,c),m=t?"https://coreui.io/react/docs/components/".concat(t):n;return(0,i.jsx)("div",{className:"float-end",children:(0,i.jsx)(s.h7,(0,a.Z)((0,a.Z)({},l),{},{href:m,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:(0,i.jsx)("small",{className:"text-medium-emphasis",children:o||"docs"})}))})};n.Z=o.memo(l)},71249:function(e,n,t){t(72791),t(78983),t(24846),t.p,t(80184)},59930:function(e,n,t){t.a(e,(async function(e,a){try{t.d(n,{Lk:function(){return r.Z},S8:function(){return i.Z},cG:function(){return l.Z},ns:function(){return c.Z},q3:function(){return m.Z},qh:function(){return o.Z},tf:function(){return s.Z}});t(8040);var r=t(84053),o=t(40431),s=t(78455),i=(t(71249),t(98236)),c=t(78486),l=t(69053),m=t(91174),u=e([i]);i=(u.then?(await u)():u)[0],a()}catch(h){a(h)}}))},66265:function(e,n,t){t.a(e,(async function(e,a){try{t.r(n);t(72791);var r=t(59930),o=t(80184),s=e([r]);r=(s.then?(await s)():s)[0];n.default=function(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(r.S8,{}),(0,o.jsxs)("div",{className:"wrapper d-flex flex-column min-vh-100 bg-light",children:[(0,o.jsx)(r.tf,{}),(0,o.jsx)("div",{className:"body flex-grow-1 px-3",children:(0,o.jsx)(r.Lk,{})}),(0,o.jsx)(r.qh,{})]})]})},a()}catch(i){a(i)}}))},36249:function(e,n,t){var a=t(72791),r=a.lazy((function(){return Promise.all([t.e(3035),t.e(1915)]).then(t.bind(t,61915))})),o=a.lazy((function(){return Promise.all([t.e(3540),t.e(9168)]).then(t.bind(t,89168))})),s=a.lazy((function(){return t.e(7361).then(t.bind(t,67361))})),i=a.lazy((function(){return Promise.all([t.e(3035),t.e(7683)]).then(t.bind(t,37683))})),c=a.lazy((function(){return Promise.all([t.e(3035),t.e(5218)]).then(t.bind(t,95218))})),l=a.lazy((function(){return t.e(6805).then(t.bind(t,6805))})),m=a.lazy((function(){return t.e(9557).then(t.bind(t,99557))})),u=a.lazy((function(){return t.e(5722).then(t.bind(t,15722))})),h=a.lazy((function(){return t.e(6692).then(t.bind(t,96692))})),d=a.lazy((function(){return t.e(6857).then(t.bind(t,76857))})),f=a.lazy((function(){return t.e(5310).then(t.bind(t,45310))})),p=a.lazy((function(){return t.e(7182).then(t.bind(t,47182))})),b=a.lazy((function(){return t.e(5735).then(t.bind(t,75735))})),x=a.lazy((function(){return t.e(1001).then(t.bind(t,61001))})),y=a.lazy((function(){return t.e(7494).then(t.bind(t,97494))})),j=a.lazy((function(){return t.e(1894).then(t.bind(t,11894))})),v=a.lazy((function(){return t.e(2422).then(t.bind(t,2422))})),g=a.lazy((function(){return t.e(4142).then(t.bind(t,54142))})),Z=a.lazy((function(){return t.e(44).then(t.bind(t,60044))})),w=a.lazy((function(){return t.e(1299).then(t.bind(t,1299))})),z=a.lazy((function(){return t.e(2670).then(t.bind(t,62670))})),N=a.lazy((function(){return t.e(6882).then(t.bind(t,16882))})),C=a.lazy((function(){return t.e(3866).then(t.bind(t,13866))})),k=a.lazy((function(){return t.e(644).then(t.bind(t,30644))})),I=a.lazy((function(){return t.e(3738).then(t.bind(t,83738))})),S=a.lazy((function(){return t.e(6027).then(t.bind(t,76027))})),P=a.lazy((function(){return t.e(3255).then(t.bind(t,63255))})),U=a.lazy((function(){return t.e(4085).then(t.bind(t,64085))})),A=a.lazy((function(){return t.e(3861).then(t.bind(t,53861))})),B=a.lazy((function(){return t.e(1883).then(t.bind(t,61883))})),D=a.lazy((function(){return t.e(1968).then(t.bind(t,91968))})),_=a.lazy((function(){return t.e(8386).then(t.bind(t,78386))})),R=a.lazy((function(){return Promise.all([t.e(3035),t.e(9958)]).then(t.bind(t,29958))})),L=a.lazy((function(){return Promise.all([t.e(4269),t.e(254),t.e(4017)]).then(t.bind(t,74017))})),E=a.lazy((function(){return Promise.all([t.e(4269),t.e(1053),t.e(327)]).then(t.bind(t,80327))})),F=a.lazy((function(){return Promise.all([t.e(4269),t.e(7096)]).then(t.bind(t,57096))})),K=a.lazy((function(){return t.e(3304).then(t.bind(t,23304))})),T=[{path:"/",exact:!0,name:"Home"},{path:"/champion",name:"Champion",element:o},{path:"/champions",name:"Champions",element:s},{path:"/summoner",name:"Summoner",element:i},{path:"/matchDetail",name:"MatchDetail",element:c},{path:"/dashboard",name:"Dashboard",element:r},{path:"/theme",name:"Theme",element:l,exact:!0},{path:"/theme/colors",name:"Colors",element:l},{path:"/theme/typography",name:"Typography",element:m},{path:"/base",name:"Base",element:d,exact:!0},{path:"/base/accordion",name:"Accordion",element:u},{path:"/base/breadcrumbs",name:"Breadcrumbs",element:h},{path:"/base/cards",name:"Cards",element:d},{path:"/base/carousels",name:"Carousel",element:f},{path:"/base/collapses",name:"Collapse",element:p},{path:"/base/list-groups",name:"List Groups",element:b},{path:"/base/navs",name:"Navs",element:x},{path:"/base/paginations",name:"Paginations",element:y},{path:"/base/placeholders",name:"Placeholders",element:j},{path:"/base/popovers",name:"Popovers",element:v},{path:"/base/progress",name:"Progress",element:g},{path:"/base/spinners",name:"Spinners",element:Z},{path:"/base/tables",name:"Tables",element:w},{path:"/base/tooltips",name:"Tooltips",element:z},{path:"/buttons",name:"Buttons",element:N,exact:!0},{path:"/buttons/buttons",name:"Buttons",element:N},{path:"/buttons/dropdowns",name:"Dropdowns",element:k},{path:"/buttons/button-groups",name:"Button Groups",element:C},{path:"/charts",name:"Charts",element:R},{path:"/forms",name:"Forms",element:P,exact:!0},{path:"/forms/form-control",name:"Form Control",element:P},{path:"/forms/select",name:"Select",element:D},{path:"/forms/checks-radios",name:"Checks & Radios",element:I},{path:"/forms/range",name:"Range",element:B},{path:"/forms/input-group",name:"Input Group",element:U},{path:"/forms/floating-labels",name:"Floating Labels",element:S},{path:"/forms/layout",name:"Layout",element:A},{path:"/forms/validation",name:"Validation",element:_},{path:"/icons",exact:!0,name:"Icons",element:L},{path:"/icons/coreui-icons",name:"CoreUI Icons",element:L},{path:"/icons/flags",name:"Flags",element:E},{path:"/icons/brands",name:"Brands",element:F},{path:"/notifications",name:"Notifications",element:K,exact:!0},{path:"/notifications/alerts",name:"Alerts",element:K},{path:"/notifications/badges",name:"Badges",element:a.lazy((function(){return t.e(1243).then(t.bind(t,21243))}))},{path:"/notifications/modals",name:"Modals",element:a.lazy((function(){return t.e(2066).then(t.bind(t,72066))}))},{path:"/notifications/toasts",name:"Toasts",element:a.lazy((function(){return t.e(5198).then(t.bind(t,75198))}))},{path:"/widgets",name:"Widgets",element:a.lazy((function(){return Promise.all([t.e(3035),t.e(9743)]).then(t.bind(t,49743))}))}];n.Z=T}}]);
//# sourceMappingURL=2528.d84cf208.chunk.js.map