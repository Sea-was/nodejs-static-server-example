(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[408],{8454:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/smart-sparrow",function(){return t(9213)}])},864:function(A,e){"use strict";e.Z={src:"/_next/static/media/spr-lesson-builder-dark-large.5a27a379.jpg",height:1600,width:2560,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAggkR/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDEQATIv/aAAgBAQABPwB5QarpOfW0iPSsdbRz/8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABAxIxQf/aAAgBAgEBPwCMBpnXX//EABsRAAIBBQAAAAAAAAAAAAAAAAECAwASITGR/9oACAEDAQE/AJZHuXO0U9Ff/9k="}},2598:function(A,e){"use strict";e.Z={src:"/_next/static/media/spr-lesson-builder-dark-placeholder.444f4000.jpg",height:20,width:32,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAJkEl//EABoQAQABBQAAAAAAAAAAAAAAAAEhAAIDI3H/2gAIAQEAAT8Az3bUCQJ7X//EABcRAAMBAAAAAAAAAAAAAAAAAAABEQL/2gAIAQIBAT8AWU7T/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/AHW//9k="}},8083:function(A,e){"use strict";e.Z={src:"/_next/static/media/spr-lesson-builder-dark.574abadc.jpg",height:800,width:1198,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAggkR/8QAGxAAAgEFAAAAAAAAAAAAAAAAAgMBABETISL/2gAIAQEAAT8AJaDcwFqxkqY6EpuWq//EABoRAAEFAQAAAAAAAAAAAAAAAAIAAQMSMUH/2gAIAQIBAT8AjAa511//xAAbEQACAQUAAAAAAAAAAAAAAAABAgMAEiExkf/aAAgBAwEBPwCWR7lztFPRX//Z"}},638:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(6856).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(A,e){var t=s.default,n={loading:function(A){A.error,A.isLoading;return A.pastDelay,null}};a(A,Promise)?n.loader=function(){return A}:"function"===typeof A?n.loader=A:"object"===typeof A&&(n=r({},n,A));!1;(n=r({},n,e)).loadableGenerated&&delete(n=r({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr&&!n.suspense){if(!n.ssr)return delete n.ssr,i(t,n);delete n.ssr}return t(n)},e.noSSR=i;var r=t(6495).Z,n=t(2648).Z,s=(n(t(7294)),n(t(4302)));function i(A,e){return delete e.webpack,delete e.modules,A(e)}("function"===typeof e.default||"object"===typeof e.default&&null!==e.default)&&"undefined"===typeof e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),A.exports=e.default)},6319:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LoadableContext=void 0;var a=(0,t(2648).Z)(t(7294)).default.createContext(null);e.LoadableContext=a},4302:function(A,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(9658).Z,r=t(7222).Z;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t(6495).Z,s=(0,t(2648).Z)(t(7294)),i=t(6319),o=t(7294).useSyncExternalStore,l=[],c=[],d=!1;function u(A){var e=A(),t={loading:!0,loaded:null,error:null};return t.promise=e.then((function(A){return t.loading=!1,t.loaded=A,A})).catch((function(A){throw t.loading=!1,t.error=A,A})),t}var g=function(){function A(e,t){a(this,A),this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return r(A,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var A=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var e=this._res,t=this._opts;e.loading&&("number"===typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){A._update({pastDelay:!0})}),t.delay)),"number"===typeof t.timeout&&(this._timeout=setTimeout((function(){A._update({timedOut:!0})}),t.timeout))),this._res.promise.then((function(){A._update({}),A._clearTimeouts()})).catch((function(e){A._update({}),A._clearTimeouts()})),this._update({})}},{key:"_update",value:function(A){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},A),this._callbacks.forEach((function(A){return A()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(A){var e=this;return this._callbacks.add(A),function(){e._callbacks.delete(A)}}}]),A}();function h(A){return function(A,e){var t=function(){if(!l){var e=new g(A,r);l={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return l.promise()},a=function(){t();var A=s.default.useContext(i.LoadableContext);A&&Array.isArray(r.modules)&&r.modules.forEach((function(e){A(e)}))},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},e);r.suspense&&(r.lazy=s.default.lazy(r.loader));var l=null;if(!d){var u=r.webpack?r.webpack():r.modules;u&&c.push((function(A){var e=!0,a=!1,r=void 0;try{for(var n,s=u[Symbol.iterator]();!(e=(n=s.next()).done);e=!0){var i=n.value;if(-1!==A.indexOf(i))return t()}}catch(o){a=!0,r=o}finally{try{e||null==s.return||s.return()}finally{if(a)throw r}}}))}var h=r.suspense?function(A,e){return a(),s.default.createElement(r.lazy,n({},A,{ref:e}))}:function(A,e){a();var t=o(l.subscribe,l.getCurrentValue,l.getCurrentValue);return s.default.useImperativeHandle(e,(function(){return{retry:l.retry}}),[]),s.default.useMemo((function(){return t.loading||t.error?s.default.createElement(r.loading,{isLoading:t.loading,pastDelay:t.pastDelay,timedOut:t.timedOut,error:t.error,retry:l.retry}):t.loaded?s.default.createElement((e=t.loaded)&&e.__esModule?e.default:e,A):null;var e}),[A,t])};return h.preload=function(){return t()},h.displayName="LoadableComponent",s.default.forwardRef(h)}(u,A)}function E(A,e){for(var t=[];A.length;){var a=A.pop();t.push(a(e))}return Promise.all(t).then((function(){if(A.length)return E(A,e)}))}h.preloadAll=function(){return new Promise((function(A,e){E(l).then(A,e)}))},h.preloadReady=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(e){var t=function(){return d=!0,e()};E(c,A).then(t,t)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var p=h;e.default=p},2045:function(A,e,t){"use strict";t.d(e,{FV:function(){return B},XR:function(){return x},T4:function(){return C},KZ:function(){return I},II:function(){return f},nU:function(){return v},IG:function(){return w},d:function(){return j},Hr:function(){return b},ee:function(){return D}});var a=t(1799),r=t(9396),n=t(9534),s=t(5893),i=t(8526),o=t(2221),l=t(1424),c=t(6602),d=t(7346),u=t(3994),g=t(7260),h=t(4529),E=t(7294),p=t(2362),m=t(5903),Q=t.n(m);function C(A){var e=A.title,t=A.description,a=A.linkLabel,r=void 0===a?"Visit website":a,n=A.url,l=A.roles,u=A.className;return(0,s.jsx)(c.$,{className:(0,p.Sh)(Q().header,u),as:"section",children:(0,s.jsxs)("div",{className:Q().headerContent,style:(0,p.Fh)({initDelay:(0,p.aU)(300)}),children:[(0,s.jsxs)("div",{className:Q().details,children:[(0,s.jsx)(o.X,{className:Q().title,level:2,as:"h1",children:e}),(0,s.jsx)(d.x,{className:Q().description,size:"xl",as:"p",children:t}),!!n&&(0,s.jsx)(i.z,{secondary:!0,iconHoverShift:!0,className:Q().linkButton,icon:"chevronRight",href:n,children:r})]}),!!(null===l||void 0===l?void 0:l.length)&&(0,s.jsx)("ul",{className:Q().meta,children:null===l||void 0===l?void 0:l.map((function(A,e){return(0,s.jsx)("li",{className:Q().metaItem,style:(0,p.Fh)({delay:(0,p.aU)(600+140*e)}),children:(0,s.jsx)(d.x,{secondary:!0,children:A})},A)}))})]})})}var x=function(A){var e=A.className,t=(0,n.Z)(A,["className"]);return(0,s.jsx)("article",(0,a.Z)({className:(0,p.Sh)(Q().project,e)},t))},f=(0,E.forwardRef)((function(A,e){var t=A.className,i=A.light,o=A.padding,l=void 0===o?"both":o,d=A.fullHeight,u=A.backgroundOverlayOpacity,g=void 0===u?.9:u,h=A.backgroundElement,E=A.children,m=(0,n.Z)(A,["className","light","padding","fullHeight","backgroundOverlayOpacity","backgroundElement","children"]);return(0,s.jsxs)("section",(0,r.Z)((0,a.Z)({className:(0,p.Sh)(Q().section,t),"data-light":i,"data-full-height":d,ref:e},m),{children:[!!h&&(0,s.jsx)("div",{className:Q().sectionBackground,style:(0,p.Fh)({opacity:g}),children:h}),(0,s.jsx)(c.$,{className:Q().sectionInner,"data-padding":l,children:E})]}))})),B=function(A){var e=A.opacity,t=void 0===e?.7:e,r=A.className,i=(0,n.Z)(A,["opacity","className"]),o=(0,E.useRef)();return(0,h.YT)(.6,(function(A){o.current&&o.current.style.setProperty("--offset","".concat(A,"px"))})),(0,s.jsx)(g.u,{in:!0,timeout:(0,p.zG)(u.T.base.durationM),children:function(A){return(0,s.jsxs)("div",{className:(0,p.Sh)(Q().backgroundImage,r),"data-visible":A,children:[(0,s.jsx)("div",{className:Q().backgroundImageElement,ref:o,children:(0,s.jsx)(l.E,(0,a.Z)({alt:"",role:"presentation"},i))}),(0,s.jsx)("div",{className:Q().backgroundScrim,style:(0,p.Fh)({opacity:t})})]})}})},I=function(A){var e=A.className,t=A.alt,r=(0,n.Z)(A,["className","alt"]);return(0,s.jsx)("div",{className:(0,p.Sh)(Q().image,e),children:(0,s.jsx)(l.E,(0,a.Z)({reveal:!0,alt:t,delay:300},r))})},w=function(A){var e=A.className,t=A.width,r=void 0===t?"l":t,i=(0,n.Z)(A,["className","width"]);return(0,s.jsx)("div",(0,a.Z)({className:(0,p.Sh)(Q().sectionContent,e),"data-width":r},i))},j=function(A){var e=A.className,t=A.level,r=void 0===t?3:t,i=A.as,l=void 0===i?"h2":i,c=(0,n.Z)(A,["className","level","as"]);return(0,s.jsx)(o.X,(0,a.Z)({className:(0,p.Sh)(Q().sectionHeading,e),as:l,level:r,align:"auto"},c))},b=function(A){var e=A.className,t=(0,n.Z)(A,["className"]);return(0,s.jsx)(d.x,(0,a.Z)({className:(0,p.Sh)(Q().sectionText,e),size:"l",as:"p"},t))},D=function(A){var e=A.center,t=A.stretch,r=A.justify,i=void 0===r?"center":r,o=A.width,l=void 0===o?"m":o,c=A.noMargin,d=A.className,u=A.centerMobile,g=(0,n.Z)(A,["center","stretch","justify","width","noMargin","className","centerMobile"]);return(0,s.jsx)("div",(0,a.Z)({className:(0,p.Sh)(Q().textRow,d),"data-center":e,"data-stretch":t,"data-center-mobile":u,"data-no-margin":c,"data-width":l,"data-justify":i},g))},v=function(A){var e=A.className,t=A.centered,r=(0,n.Z)(A,["className","centered"]);return(0,s.jsx)(w,(0,a.Z)({className:(0,p.Sh)(Q().sectionColumns,e),"data-centered":t},r))}},9213:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Z}});var a=t(5893),r="/_next/static/media/spr-background-large.415f9d03.jpg",n={src:"/_next/static/media/spr-background-placeholder.f6a92843.jpg",height:16,width:24,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJIFH//EABgQAAIDAAAAAAAAAAAAAAAAAAESAAIR/9oACAEBAAE/ADcLiCf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQMBAT8ADL//2Q=="},s={src:"/_next/static/media/spr-background-volcanism-large.6e0e4038.jpg",height:1800,width:2560,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJuLP//EABoQAQABBQAAAAAAAAAAAAAAAAERAAMEIjH/2gAIAQEAAT8Axi3sA8hmv//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwDBv//EABcRAAMBAAAAAAAAAAAAAAAAAAACEQH/2gAIAQMBAT8AVtWw/9k="},i={src:"/_next/static/media/spr-background-volcanism-placeholder.4157319e.jpg",height:45,width:64,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAmwZ//8QAGRABAAIDAAAAAAAAAAAAAAAAAQACBCJh/9oACAEBAAE/AMcpsA9n/8QAFREBAQAAAAAAAAAAAAAAAAAAAQD/2gAIAQIBAT8AS//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ABS//9k="},o={src:"/_next/static/media/spr-background-volcanism.ccb8e527.jpg",height:900,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJuLP//EABoQAQABBQAAAAAAAAAAAAAAAAERAAMEIjH/2gAIAQEAAT8Axi3sA8hmv//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAECAQE/AEG//8QAFxEBAAMAAAAAAAAAAAAAAAAAAgABMf/aAAgBAwEBPwAqzk//2Q=="},l={src:"/_next/static/media/spr-background.c7e71d27.jpg",height:720,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJIHL//EABoQAAICAwAAAAAAAAAAAAAAAAECAAMSE3H/2gAIAQEAAT8ANqlcdS9n/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAx/9oACAEDAQE/AADL/9k="},c=t(864),d=t(2598),u=t(8083),g={src:"/_next/static/media/spr-lesson-builder-light-large.5a27a379.jpg",height:1600,width:2560,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAggkR/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDEQATIv/aAAgBAQABPwB5QarpOfW0iPSsdbRz/8QAGhEAAQUBAAAAAAAAAAAAAAAAAgABAxIxQf/aAAgBAgEBPwCMBpnXX//EABsRAAIBBQAAAAAAAAAAAAAAAAECAwASITGR/9oACAEDAQE/AJZHuXO0U9Ff/9k="},h={src:"/_next/static/media/spr-lesson-builder-light-placeholder.fe1b952e.jpg",height:20,width:32,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAJ4Of//EABsQAAEEAwAAAAAAAAAAAAAAAAIBAwQGABMy/9oACAEBAAE/ALpKfCyTwB50UHXyZJn/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEA/9oACAECAQE/AEUNaN//xAAWEQEBAQAAAAAAAAAAAAAAAAABAgD/2gAIAQMBAT8ApSnf/9k="},E={src:"/_next/static/media/spr-lesson-builder-light.574abadc.jpg",height:800,width:1198,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABf/aAAwDAQACEAMQAAAAggkR/8QAGxAAAgEFAAAAAAAAAAAAAAAAAgMBABETISL/2gAIAQEAAT8AJaDcwFqxkqY6EpuWq//EABoRAAEFAQAAAAAAAAAAAAAAAAIAAQMSMUH/2gAIAQIBAT8AjAa511//xAAbEQACAQUAAAAAAAAAAAAAAAABAgMAEiExkf/aAAgBAwEBPwCWR7lztFPRX//Z"},p=t.p+"static/media/spr-motion-large.44c9249b.mp4",m={src:"/_next/static/media/spr-motion-placeholder.10dae946.jpg",height:20,width:32,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAnYcv/8QAFxABAQEBAAAAAAAAAAAAAAAAAQIAMf/aAAgBAQABPwCrVDgb/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/AMhf/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQACIf/aAAgBAwEBPwCy5P/Z"},Q=t.p+"static/media/spr-motion.44c9249b.mp4",C={src:"/_next/static/media/spr-storyboarder-dark-large.7c543d5f.png",height:1600,width:2560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhUlEQVR42mMwyG43K53k0zzfp295SOdCv6rJOqkN6lElDKoRhZpxlW65LWEVvQHlPS7ZDToRBTJeSQxSDmHaHrEMDmFZaRk9JaWRYbHyvlFChp4MDEpWYbaOVZ6mKTa687OT6mPCzZwcOBTNGBjkTfTUDF2MzcPDYoqSs2xsPZT1LHiUTQFvTSYzSsMPxQAAAABJRU5ErkJggg=="},x={src:"/_next/static/media/spr-storyboarder-dark-placeholder.cace7ced.png",height:20,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhUlEQVR42mOQM3BiENXkl9URkNVhFFXnldJU1jE3tHZnsHHySssuCI9NCY9NS80q9AlLNHUK1DZxYAiOiJw0tae1s6u8pqW4oj6vrD4xs1hR25xB09DC3Na2uq68vLpM29RRz9TewNxBWkWfQUJRl0VU08HVxd3HU0nLVFxBV0BaQ1xBBwDdDx/Z0Fd1FQAAAABJRU5ErkJggg=="},f={src:"/_next/static/media/spr-storyboarder-dark.6e2cd846.png",height:858,width:1570,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mPQSa4zyOv2rp/l27XYv3WuR0mvelylclA2g4JPikpIrmBUcUxxU2pJs3V8oaxPsoRdKAODloORpWe8s2O6t8Pc3NTMsGAZa2cWBXMGBgVjeWWjaAujKL/AyqQ0DwdXeR1TRnkTAGbiHT+SVVgLAAAAAElFTkSuQmCC"},B={src:"/_next/static/media/spr-storyboarder-light-large.7c543d5f.png",height:1600,width:2560,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAhUlEQVR42mMwyG43K53k0zzfp295SOdCv6rJOqkN6lElDKoRhZpxlW65LWEVvQHlPS7ZDToRBTJeSQxSDmHaHrEMDmFZaRk9JaWRYbHyvlFChp4MDEpWYbaOVZ6mKTa687OT6mPCzZwcOBTNGBjkTfTUDF2MzcPDYoqSs2xsPZT1LHiUTQFvTSYzSsMPxQAAAABJRU5ErkJggg=="},I={src:"/_next/static/media/spr-storyboarder-light-placeholder.02a8f014.png",height:20,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAZUlEQVR42iWJyw4CIRAE+f8/9GJYcHV4SIbpHtajGDt9qFSFoxGg/W8/zqfEdIY5p6rKXmngKgNJRu0jEN00yiun9BCpx7Pe7qkPDdflzjdReos557admoE7fMhFdqcARrr7AvgFIvZvfs2UZnoAAAAASUVORK5CYII="},w={src:"/_next/static/media/spr-storyboarder-light.6e2cd846.png",height:858,width:1570,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mPQSa4zyOv2rp/l27XYv3WuR0mvelylclA2g4JPikpIrmBUcUxxU2pJs3V8oaxPsoRdKAODloORpWe8s2O6t8Pc3NTMsGAZa2cWBXMGBgVjeWWjaAujKL/AyqQ0DwdXeR1TRnkTAGbiHT+SVVgLAAAAAElFTkSuQmCC"},j=t(5192),b=t(1424),D=(t(270),t(5633)),v=(t(2323),t(7294)),_=t(2362),M=t(8718),P=t(4529),y=t(2045),U=t(5152),S=t.n(U),k=t(3790),F=t.n(k),R=S()((function(){return Promise.all([t.e(737),t.e(559),t.e(571),t.e(93)]).then(t.bind(t,9556)).then((function(A){return A.Earth}))}),{loadableGenerated:{webpack:function(){return[9556]}}}),T=S()((function(){return Promise.all([t.e(737),t.e(559),t.e(571),t.e(93)]).then(t.bind(t,9556)).then((function(A){return A.EarthSection}))}),{loadableGenerated:{webpack:function(){return[9556]}}}),G="Developing next-generation Metaverse",N="I worked as the Frontend and Smart Contract developer for Metareverse produce. We developed this platform, focusing on providing great user experience.",K=["Frontend Development","Web3 Development","Smart Contract Development"],Z=function(){var A=(0,M.Fg)().themeId,e=((0,P.bp)().dispatch,"dark"===A);return(0,a.jsxs)(v.Fragment,{children:[(0,a.jsxs)(y.XR,{className:"spr",children:[(0,a.jsx)(D.h,{title:G,prefix:"Projects",description:N}),(0,a.jsx)(y.FV,{opacity:e?.5:.8,src:l,srcSet:"".concat(l.src," 1080w, ").concat(r," 2160w"),placeholder:n}),(0,a.jsx)(y.T4,{title:G,description:N,url:"https://metareserve.finance/",roles:K}),(0,a.jsx)(y.II,{padding:"top",children:(0,a.jsx)(y.IG,{children:(0,a.jsx)(y.KZ,{raised:!0,srcSet:e?[u.Z,c.Z]:[E,g],placeholder:e?d.Z:h,sizes:"(max-width: ".concat(_.BC.mobile,"px) 100vw, (max-width: ").concat(_.BC.tablet,"px) 800px, 1000px"),alt:"The aero lesson builder app dragging an audio component into a screen about plant cells."},A)})}),(0,a.jsx)(y.II,{children:(0,a.jsxs)(y.ee,{children:[(0,a.jsx)(y.d,{children:"The problem"}),(0,a.jsx)(y.Hr,{children:"In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users."})]})}),(0,a.jsx)(M.f6,{themeId:"dark","data-invert":!0,children:(0,a.jsx)(y.II,{backgroundOverlayOpacity:.5,backgroundElement:(0,a.jsx)(b.E,{srcSet:[o,s],placeholder:i,alt:"A dramatic ocean scene with lava forming a new land mass.",sizes:"100vw"}),children:(0,a.jsxs)(y.nU,{width:"full",children:[(0,a.jsx)(y.IG,{width:"full",children:(0,a.jsxs)(y.ee,{width:"s",children:[(0,a.jsx)(y.d,{children:"Frontend"}),(0,a.jsx)(y.Hr,{children:"Frontend was very important for the user experience. It is well developed with Full Responsive."})]})}),(0,a.jsx)(b.E,{raised:!0,className:F().video,srcSet:[{src:Q,width:1280},{src:p,width:2560}],placeholder:m,alt:"A learning designer building and deploying an interactive lesson on volcanism using the app.",sizes:"(max-width: ".concat(_.BC.mobile,"px) 100vw, 50vw")})]})})}),(0,a.jsx)(y.II,{children:(0,a.jsxs)(y.IG,{children:[(0,a.jsxs)(y.ee,{children:[(0,a.jsx)(y.d,{children:"Most Extensible"}),(0,a.jsx)(y.Hr,{children:"This app is design to be most extensible for future updates. Actually It is updating adding more functions to the app and it becomes more and more popular for users by regular updates"})]}),(0,a.jsx)(b.E,{raised:!0,srcSet:e?[f,C]:[w,B],placeholder:e?x:I,alt:"A drag and drop storyboard style editor for creating an adaptive lesson.",sizes:"(max-width: ".concat(_.BC.mobile,"px) 100vw, 80vw")},A)]})}),(0,a.jsx)(M.f6,{themeId:"dark","data-invert":!0,children:(0,a.jsxs)(R,{className:F().earth,hideMeshes:(0,v.useMemo)((function(){return["Atmosphere","EarthPartial","Chunk","EarthFull"]}),[]),position:(0,v.useMemo)((function(){return[0,0,0]}),[]),labels:(0,v.useMemo)((function(){return[{position:[.54,.19,.18],text:"Pacific ring of fire",hidden:!0},{position:[.47,-.38,.04],text:"Ruapehu",hidden:!0},{position:[.22,.44,-.35],text:"St. Helens",hidden:!0},{position:[.16,-.06,.58],text:"Krakatoa",hidden:!0},{position:[.11,.2,-.56],text:"Par\xedcutin",hidden:!0},{position:[.52,.2,-.23],text:"K\u012blauea",hidden:!0},{position:[-.24,.75,.24],text:"Mantle",delay:800,hidden:!0},{position:[-.24,.55,.24],text:"Outer core",delay:800,hidden:!0},{position:[-.24,.35,.24],text:"Inner core",delay:800,hidden:!0}]}),[]),scale:.6,children:[(0,a.jsx)(T,{scrim:!0,animations:["0:loop"],camera:[0,0,1.5],meshes:["Atmosphere","EarthFull"],children:(0,a.jsx)(y.II,{children:(0,a.jsx)(y.IG,{children:(0,a.jsxs)(y.ee,{center:!0,children:[(0,a.jsx)(y.d,{children:"Next-generation Metaverse experiences"}),(0,a.jsx)(y.Hr,{children:"The design of the product allowed for users to get interactive experiences to Metaverse."})]})})})}),(0,a.jsx)(T,{animations:["0:loop"],camera:[0,0,2.4],meshes:["Atmosphere","EarthFull"]}),(0,a.jsx)(T,{animations:["0:loop"],camera:[1.14,-1.39,.94],meshes:["Atmosphere","EarthFull"],children:(0,a.jsx)(y.II,{children:(0,a.jsx)(y.IG,{width:"xl",children:(0,a.jsxs)(y.ee,{justify:"end",width:"s",children:[(0,a.jsx)(y.d,{level:4,as:"h3",children:"Bringing Life into Metaverse"}),(0,a.jsx)(y.Hr,{children:"One really cool example is the Metaverse race in Metareverse race."})]})})})}),(0,a.jsx)(T,{animations:["0:loop"],camera:[1.17,.69,-1.47],meshes:["Atmosphere","EarthFull"],labels:["Pacific ring of fire","Ruapehu","St. Helens","Krakatoa","Par\xedcutin","K\u012blauea"],children:(0,a.jsx)(y.II,{children:(0,a.jsx)(y.IG,{width:"xl",children:(0,a.jsxs)(y.ee,{justify:"start",width:"s",children:[(0,a.jsx)(y.d,{level:4,as:"h3",children:"Profit"}),(0,a.jsx)(y.Hr,{children:"Users can get Profit to do Staking and enjoy life in the Metaverse."})]})})})}),(0,a.jsx)(T,{animations:["0:loop"],camera:[1.81,.51,.43],meshes:["Atmosphere","EarthFull"],labels:["Pacific ring of fire","Ruapehu","St. Helens","Krakatoa","Par\xedcutin","K\u012blauea"]}),(0,a.jsx)(T,{animations:["0:loop"],camera:[.37,1.02,1.84],meshes:["EarthPartial","Chunk"],labels:["Mantle","Outer core","Inner core"],children:(0,a.jsx)(y.II,{children:(0,a.jsx)(y.IG,{width:"xl",children:(0,a.jsxs)(y.ee,{justify:"end",width:"s",children:[(0,a.jsx)(y.d,{level:4,as:"h3",children:"Character"}),(0,a.jsx)(y.Hr,{children:"Users can pick an excellent character in the NFT to play or earn money."})]})})})}),(0,a.jsx)(T,{scrimReverse:!0,animations:["0:loop"],camera:[.37,1.02,1.84],meshes:["Atmosphere","EarthFull"]})]})}),(0,a.jsx)(y.II,{children:(0,a.jsx)(y.IG,{children:(0,a.jsxs)(y.ee,{center:!0,centerMobile:!0,noMargin:!0,children:[(0,a.jsx)(y.d,{children:"Project outcomes"}),(0,a.jsx)(y.Hr,{children:"Ultimately the project was successful platform were to become a foundation for their next generation MetaVerse."})]})})})]}),(0,a.jsx)(j.$,{})]})}},5903:function(A){A.exports={project:"Project_project__JsLZW",section:"Project_section__J6GYi",sectionInner:"Project_sectionInner__BbL68",sectionBackground:"Project_sectionBackground__c9_MI",backgroundImage:"Project_backgroundImage___m2co",backgroundImageElement:"Project_backgroundImageElement__YUY7W",backgroundScrim:"Project_backgroundScrim__kwaD6",header:"Project_header__wfcEM",headerContent:"Project_headerContent__vZAy7",details:"Project_details__7Wyft",title:"Project_title__gFlr3",projectFadeSlide:"Project_projectFadeSlide__G5Z1R",description:"Project_description__xM50C",linkButton:"Project_linkButton__Aa9Ww",meta:"Project_meta__i27_j",metaItem:"Project_metaItem__wSCNh",image:"Project_image__mqYQv",sectionContent:"Project_sectionContent__uitMB",sectionHeading:"Project_sectionHeading__smXXM",sectionText:"Project_sectionText__wfpeH",textRow:"Project_textRow__tVxUD",sectionColumns:"Project_sectionColumns__uNmfU"}},3790:function(A){A.exports={video:"SmartSparrow_video__oV5eD",sidebarImages:"SmartSparrow_sidebarImages__BuHB5",sidebarImage:"SmartSparrow_sidebarImage__HlKmN"}},5152:function(A,e,t){A.exports=t(638)},7568:function(A,e,t){"use strict";function a(A,e,t,a,r,n,s){try{var i=A[n](s),o=i.value}catch(l){return void t(l)}i.done?e(o):Promise.resolve(o).then(a,r)}function r(A){return function(){var e=this,t=arguments;return new Promise((function(r,n){var s=A.apply(e,t);function i(A){a(s,r,n,i,o,"next",A)}function o(A){a(s,r,n,i,o,"throw",A)}i(void 0)}))}}t.d(e,{Z:function(){return r}})}},function(A){A.O(0,[199,774,888,179],(function(){return e=8454,A(A.s=e);var e}));var e=A.O();_N_E=e}]);