_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"9ucp":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t("BdxU")}])},BLcL:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("ERkP"),c=function(e){Object(r.useEffect)((function(){document.title=e}),[])}},BdxU:function(e,n,t){"use strict";t.r(n);var r=t("jg1C"),c=(t("ERkP"),t("jvFD")),i=t.n(c),o=t("QYpW"),a=t("wepW"),s=t.n(a),l=t("IByY"),u=t.n(l),d=t("1CHd"),f=t.n(d),j=t("u7m8"),h=t.n(j),v=t("SFqS"),p=t.n(v),b=t("BLcL");n.default=function(){Object(b.a)("Page not found - Airbnb");return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(o.a,{variant:"homes"})}),Object(r.jsx)("div",{style:{height:"calc(100vh - 80px)"},className:[s.a.flex,s.a["items-center"]].join(" "),children:Object(r.jsx)("div",{className:[s.a.container].join(" "),children:Object(r.jsxs)("div",{className:[s.a.flex].join(" "),children:[Object(r.jsxs)("div",{className:[p.a["w50p_to_100--sm"]].join(" "),style:{width:"50%"},children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{className:[u.a["size--100"]].join(" "),children:"Ooops!"})}),Object(r.jsx)("div",{children:Object(r.jsx)("h4",{className:[u.a["size--30"]].join(" "),children:"We can't seem to find the page you're looking for."})}),Object(r.jsx)("div",{className:[h.a["m-t--16"]].join(" "),children:Object(r.jsx)("h3",{className:[u.a["size--14"]].join(" "),children:"Error code: 404"})}),Object(r.jsxs)("div",{className:[h.a["m-v--16"]].join(" "),children:[Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"Here are some helpful links instead:"})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{children:[{name:"Home",url:"/"},{name:"Hosting on Airbnb",url:"/d/onlinehost"}].map((function(e,n){var t=e.name,c=e.url;return Object(r.jsx)("div",{className:[h.a["m-v--8"]].join(" "),children:Object(r.jsx)(i.a,{href:c,children:Object(r.jsx)("a",{className:[u.a["size--14"],u.a["weight--100"],f.a["c--darkgreen__3"]].join(" "),children:t})})},n)}))})})]})]}),Object(r.jsx)("div",{className:[h.a["p-l--16"],p.a["n_to_b--sm"]].join(" "),children:Object(r.jsx)("div",{style:{width:350},children:Object(r.jsx)("img",{src:"https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"})})})]})})})]})}},HOTy:function(e,n,t){"use strict";var r=t("ddV6"),c=t("IGGJ");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=(0,i.useRef)(),l=(0,i.useState)(!1),u=r(l,2),d=u[0],f=u[1],j=(0,i.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),t||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:c,elements:r}),t}(t),c=r.id,i=r.observer,o=r.elements;return o.set(e,n),i.observe(e),function(){i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(c))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,i.useEffect)((function(){a||d||(0,o.default)((function(){return f(!0)}))}),[d]),[j,d]};var i=t("ERkP"),o=c(t("ZeW2")),a="undefined"!==typeof IntersectionObserver;var s=new Map},KeDb:function(e,n,t){"use strict";var r=t("ddV6"),c=t("yWCo");n.__esModule=!0,n.default=void 0;var i=c(t("ERkP")),o=t("L9lV"),a=t("7xIC"),s=t("HOTy"),l={};function u(e,n,t,r){if((0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(c?"%"+c:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),c=t&&t.pathname||"/",d=i.default.useMemo((function(){var n=(0,o.resolveHref)(c,e.href,!0),t=r(n,2),i=t[0],a=t[1];return{href:i,as:e.as?(0,o.resolveHref)(c,e.as):a||i}}),[c,e.href,e.as]),f=d.href,j=d.as,h=e.children,v=e.replace,p=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var x=i.Children.only(h),O=x&&"object"===typeof x&&x.ref,y=(0,s.useIntersection)({rootMargin:"200px"}),_=r(y,2),g=_[0],w=_[1],E=i.default.useCallback((function(e){g(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,g]);(0,i.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(f),r="undefined"!==typeof m?m:t&&t.locale,c=l[f+"%"+j+(r?"%"+r:"")];e&&!c&&u(t,f,j,{locale:r})}),[j,f,w,m,n,t]);var N={ref:E,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,n,t,r,c,i,a,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[c?"replace":"push"](t,r,{shallow:i,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,f,j,v,p,b,m)},onMouseEnter:function(e){(0,o.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(t,f,j,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(N.href=(0,o.addBasePath)((0,o.addLocale)(j,"undefined"!==typeof m?m:t&&t.locale,t&&t.defaultLocale))),i.default.cloneElement(x,N)};n.default=d},jvFD:function(e,n,t){e.exports=t("KeDb")}},[["9ucp",0,1,3,4,2,5,6]]]);