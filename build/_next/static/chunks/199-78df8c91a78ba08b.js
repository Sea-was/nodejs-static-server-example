(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[199],{5192:function(e,t,r){"use strict";r.d(t,{$:function(){return o}});var n=r(5893),a=(r(270),r(7346)),s=r(2362),i=r(1883),c=r.n(i),o=function(e){var t=e.className;return(0,n.jsx)("footer",{className:(0,s.Sh)(c().footer,t),children:(0,n.jsx)(a.x,{size:"s",align:"center",children:(0,n.jsx)("span",{className:c().date,children:"\xa9 ".concat((new Date).getFullYear()," Oscar Peterson.")})})})}},2221:function(e,t,r){"use strict";r.d(t,{X:function(){return d}});var n=r(1799),a=r(9396),s=r(9534),i=r(5893),c=r(7294),o=r(2362),u=r(361),l=r.n(u),d=function(e){var t=e.children,r=e.level,u=void 0===r?1:r,d=e.as,f=e.align,p=void 0===f?"auto":f,h=e.weight,v=void 0===h?"medium":h,m=e.className,g=(0,s.Z)(e,["children","level","as","align","weight","className"]),x=Math.min(Math.max(u,0),5),y=d||"h".concat(Math.max(x,1));return(0,i.jsx)(c.Fragment,{children:(0,i.jsx)(y,(0,a.Z)((0,n.Z)({className:(0,o.Sh)(l().heading,m),"data-align":p,"data-weight":v,"data-level":x},g),{children:t}))})}},1424:function(e,t,r){"use strict";r.d(t,{E:function(){return y}});var n=r(7568),a=r(1799),s=r(9534),i=r(4051),c=r.n(i),o=r(5893),u=r(8526),l=r(5095),d=r(8718),f=r(6240),p=r(4529),h=r(7294),v=r(5622),m=r(2362),g=r(2288),x=r.n(g),y=function(e){var t=e.className,r=e.style,n=e.reveal,i=e.delay,c=void 0===i?0:i,u=e.raised,l=e.src,f=e.srcSet,v=e.placeholder,g=(0,s.Z)(e,["className","style","reveal","delay","raised","src","srcSet","placeholder"]),y=(0,h.useState)(!1),j=y[0],S=y[1],N=(0,d.Fg)().themeId,Z=(0,h.useRef)(),b=l||(null===f||void 0===f?void 0:f[0]),k=(0,p.NM)(Z,!w(b)),E=(0,h.useCallback)((function(){S(!0)}),[]);return(0,o.jsx)("div",{className:(0,m.Sh)(x().image,t),"data-visible":k||j,"data-reveal":n,"data-raised":u,"data-theme":N,style:(0,m.Fh)({delay:(0,m.aU)(c)},r),ref:Z,children:(0,o.jsx)(_,(0,a.Z)({delay:c,onLoad:E,loaded:j,inViewport:k,reveal:n,src:b,srcSet:f,placeholder:v},g))})},_=function(e){var t=e.onLoad,r=e.loaded,i=e.inViewport,d=e.srcSet,g=e.placeholder,y=e.delay,_=e.src,j=e.alt,S=e.play,N=void 0===S||S,Z=e.restartOnPause,b=e.reveal,k=e.sizes,E=e.noPauseButton,P=(0,s.Z)(e,["onLoad","loaded","inViewport","srcSet","placeholder","delay","src","alt","play","restartOnPause","reveal","sizes","noPauseButton"]),F=(0,f.J)(),R=(0,h.useState)(!0),I=R[0],L=R[1],z=(0,h.useState)(!F),C=z[0],B=z[1],M=(0,h.useState)(),O=M[0],U=M[1],V=(0,h.useState)(!1),W=V[0],D=V[1],H=(0,h.useRef)(),J=(0,h.useRef)(),K=w(_),X=i,Y=(0,v.A2)(d),A=(0,p.f3)();(0,h.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Ro)({srcSet:d,sizes:k});case 2:t=e.sent,U(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();K&&d?e():K&&U(_.src)}),[K,k,_,d]),(0,h.useEffect)((function(){if(J.current&&O){var e=function(){B(!1),J.current.pause()};N||(e(),Z&&(J.current.currentTime=0)),W||(i?i&&!F&&N&&(B(!0),J.current.play()):e())}}),[i,N,F,Z,W,O]);return(0,o.jsxs)("div",{className:x().elementWrapper,"data-reveal":b,"data-visible":i||r,style:(0,m.Fh)({delay:(0,m.aU)(y+1e3)}),children:[K&&A&&(0,o.jsxs)(h.Fragment,{children:[(0,o.jsx)("video",(0,a.Z)({muted:!0,loop:!0,playsInline:!0,className:x().element,"data-loaded":r,autoPlay:!F,role:"img",onLoadStart:t,src:O,"aria-label":j,ref:J},P)),!E&&(0,o.jsxs)(u.z,{className:x().button,onClick:function(e){e.preventDefault(),D(!0),J.current.paused?(B(!0),J.current.play()):(B(!1),J.current.pause())},children:[(0,o.jsx)(l.J,{icon:C?"pause":"play"}),C?"Pause":"Play"]})]}),!K&&(0,o.jsx)("img",(0,a.Z)({className:x().element,"data-loaded":r,onLoad:t,decoding:"async",src:X?_.src:void 0,srcSet:X?Y:void 0,width:_.width,height:_.height,alt:j,sizes:k},P)),I&&(0,o.jsx)("img",{"aria-hidden":!0,className:x().placeholder,"data-loaded":r,style:(0,m.Fh)({delay:(0,m.aU)(y)}),ref:H,src:g.src,width:g.width,height:g.height,onTransitionEnd:function(){return L(!1)},decoding:"async",alt:"",role:"presentation"})]})};function w(e){return"string"===typeof e.src&&e.src.endsWith(".mp4")}},270:function(e,t,r){"use strict";r.d(t,{r:function(){return h}});var n=r(1799),a=r(9396),s=r(9534),i=r(5893),c=r(1664),o=r.n(c),u=r(7294),l=r(2362),d=r(8469),f=r.n(d),p=["txt","png","jpg"];var h=(0,u.forwardRef)((function(e,t){var r=e.href,a=(0,s.Z)(e,["href"]);return function(e){var t=p.includes(null===e||void 0===e?void 0:e.split(".").pop());return(null===e||void 0===e?void 0:e.includes("://"))||"#"===(null===e||void 0===e?void 0:e[0])||t}(r)?(0,i.jsx)(v,(0,n.Z)({href:r,ref:t},a)):(0,i.jsx)(o(),{passHref:!0,href:r,scroll:!1,children:(0,i.jsx)(v,(0,n.Z)({ref:t},a))})})),v=(0,u.forwardRef)((function(e,t){var r=e.rel,c=e.target,o=e.children,u=e.secondary,d=e.className,p=e.href,h=(0,s.Z)(e,["rel","target","children","secondary","className","href"]),v=null===p||void 0===p?void 0:p.includes("://"),m=r||(v?"noreferrer noopener":void 0),g=c||(v?"_blank":void 0);return(0,i.jsx)("a",(0,a.Z)((0,n.Z)({className:(0,l.Sh)(f().link,d),"data-secondary":u,rel:m,href:p,target:g,ref:t},h),{children:o}))}))},5633:function(e,t,r){"use strict";r.d(t,{h:function(){return o}});var n=r(5893),a=r(9008),s=r.n(a),i="https://hamishw.com",c="Oscar Peterson",o=("".concat(i,"/social-image.png"),function(e){var t=e.title,r=e.description,a=e.prefix,o=[void 0===a?c:a,t].filter(Boolean).join(" | ");return(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:o},"title"),(0,n.jsx)("meta",{name:"description",content:r},"description"),(0,n.jsx)("meta",{property:"og:title",content:o}),(0,n.jsx)("meta",{property:"og:site_name",content:c}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:i}),(0,n.jsx)("meta",{property:"og:description",content:r})]})})},6602:function(e,t,r){"use strict";r.d(t,{$:function(){return d}});var n=r(1799),a=r(9396),s=r(9534),i=r(5893),c=r(7294),o=r(2362),u=r(4828),l=r.n(u),d=(0,c.forwardRef)((function(e,t){var r=e.as,c=void 0===r?"div":r,u=e.children,d=e.className,f=(0,s.Z)(e,["as","children","className"]);return(0,i.jsx)(c,(0,a.Z)((0,n.Z)({className:(0,o.Sh)(l().section,d),ref:t},f),{children:u}))}))},5622:function(e,t,r){"use strict";r.d(t,{A2:function(){return u},Ro:function(){return f}});var n=r(7568),a=r(828),s=r(4051),i=r.n(s);function c(e){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.src,n=t.srcSet,a=t.sizes,e.abrupt("return",new Promise((function(e,t){var s=u(n);try{if(!r&&!n)throw new Error("No image src or srcSet provided");var i=new Image;r&&(i.src=r),s&&(i.srcset=s),a&&(i.sizes=a);var c=function(){i.removeEventListener("load",c);var t=i.currentSrc;i=null,e(t)};i.addEventListener("load",c)}catch(o){t("Error loading ".concat(s,": ").concat(o))}})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"string"===typeof e?e:e.map((function(e){return"".concat(e.src," ").concat(e.width,"w")})).join(", ")}function l(){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(i().mark((function e(){var t,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,r=a.length>1&&void 0!==a[1]?a[1]:1,e.abrupt("return",new Promise((function(e){var a=document.createElement("canvas"),s=a.getContext("2d");a.width=t,a.height=r,s.fillStyle="rgba(0, 0, 0, 0)",s.fillRect(0,0,t,r),a.toBlob(function(){var t=(0,n.Z)(i().mark((function t(r){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}throw new Error("Video thumbnail failed to load");case 2:n=URL.createObjectURL(r),a.remove(),e(n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())})));case 2:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return p=(0,n.Z)(i().mark((function e(t){var r,s,o,d,f,p,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.srcSet,s=t.sizes,o=u(r),e.next=4,Promise.all(o.split(", ").map(function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,s,c,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,a.Z)(t.split(" "),2),n=r[0],s=r[1],c=Number(s.replace("w","")),e.next=4,l(c);case 4:return o=e.sent,e.abrupt("return",{src:n,image:o,width:s});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:return d=e.sent,f=d.map((function(e){var t=e.image,r=e.width;return"".concat(t," ").concat(r)})).join(", "),e.next=8,c({srcSet:f,sizes:s});case 8:return p=e.sent,h=d.find((function(e){return e.image===p})),e.abrupt("return",h.src);case 11:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},1883:function(e){e.exports={footer:"Footer_footer__nKPS_",link:"Footer_link__2Y2qR",date:"Footer_date__d0nD9"}},361:function(e){e.exports={heading:"Heading_heading__209rB"}},2288:function(e){e.exports={image:"Image_image__fhfXL",container:"Image_container__9ry6H",elementWrapper:"Image_elementWrapper__dY5KC",placeholder:"Image_placeholder__rZeKX",element:"Image_element__EpM9I",button:"Image_button__S1k_J"}},8469:function(e){e.exports={link:"Link_link__1F_mp"}},4828:function(e){e.exports={section:"Section_section__FuI7l"}}}]);