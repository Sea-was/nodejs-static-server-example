(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{3082:function(e,r,n){"use strict";n.r(r),n.d(r,{Model:function(){return C}});var t=n(7568),u=n(1799),a=n(9396),c=n(9534),i=n(828),s=n(9815),o=n(4051),v=n.n(o),f=n(5893),l=n(6240),d=n(7378),p=n(2064),m=n(4529),y=n(5223),x=n(7294),h=n(9477);const w={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:"\n      varying vec2 vUv;\n\n      void main() {\n\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n      }\n  ",fragmentShader:"\n    uniform sampler2D tDiffuse;\n    uniform float h;\n\n    varying vec2 vUv;\n\n    void main() {\n\n    \tvec4 sum = vec4( 0.0 );\n\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;\n    \tsum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;\n\n    \tgl_FragColor = sum;\n\n    }\n  "},g={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:"\n    varying vec2 vUv;\n\n    void main() {\n\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n    }\n  ",fragmentShader:"\n\n  uniform sampler2D tDiffuse;\n  uniform float v;\n\n  varying vec2 vUv;\n\n  void main() {\n\n    vec4 sum = vec4( 0.0 );\n\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;\n    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;\n\n    gl_FragColor = sum;\n\n  }\n  "};var D=n(5622),U=n(2362),R=n(3142),k=n(4209),M=n.n(k),b=n(6521),P="Frame",S="Screen",j={stiffness:40,damping:20,mass:1.4,restSpeed:.001},C=function(e){var r=e.models,n=e.show,t=void 0===n||n,i=e.showDelay,s=void 0===i?0:i,o=e.cameraPosition,v=void 0===o?{x:0,y:0,z:8}:o,p=e.style,D=e.className,k=e.alt,b=(0,c.Z)(e,["models","show","showDelay","cameraPosition","style","className","alt"]),P=(0,x.useState)(!1),S=P[0],C=P[1],E=(0,x.useRef)(),F=(0,x.useRef)(),_=(0,x.useRef)(),A=(0,x.useRef)(),L=(0,x.useRef)(),z=(0,x.useRef)(),T=(0,x.useRef)(),N=(0,x.useRef)(),I=(0,x.useRef)(),J=(0,x.useRef)(),B=(0,x.useRef)(),K=(0,x.useRef)(),O=(0,x.useRef)(),G=(0,x.useRef)(),W=(0,x.useRef)(),X=(0,x.useRef)(),H=(0,x.useRef)(),q=(0,m.NM)(E,!1,{threshold:.2}),V=(0,l.J)(),Y=(0,d.q)(0,j),Q=(0,d.q)(0,j),$=(0,y.s)(q),ee=$.measureFps,re=$.isLowFps;(0,x.useEffect)((function(){var e=E.current,r=e.clientWidth,n=e.clientHeight;z.current=new h.CP7({canvas:F.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),z.current.setPixelRatio(2),z.current.setSize(r,n),z.current.outputEncoding=h.knz,z.current.physicallyCorrectLights=!0,_.current=new h.cPb(36,r/n,.1,100),_.current.position.set(v.x,v.y,v.z),L.current=new h.xsS,A.current=new h.ZAu,L.current.add(A.current);var t=new h.Mig(16777215,1.2),u=new h.Ox3(16777215,1.1),a=new h.Ox3(16777215,.8);a.position.set(-6,2,2),u.position.set(.5,0,.866),W.current=[t,u,a],W.current.forEach((function(e){return L.current.add(e)})),T.current=new h.ZAu,L.current.add(T.current),T.current.position.set(0,0,-.8),T.current.rotateX(Math.PI/2);var c=512;N.current=new h.dd2(c,c),N.current.texture.generateMipmaps=!1,I.current=new h.dd2(c,c),I.current.texture.generateMipmaps=!1;var i=new h.BKK(8,8).rotateX(Math.PI/2),s=new h.vBJ({map:N.current.texture,opacity:.8,transparent:!0});G.current=new h.Kj0(i,s),G.current.scale.y=-1,T.current.add(G.current),X.current=new h.Kj0(i),X.current.visible=!1,T.current.add(X.current);var o=new h.vBJ({color:16777215,opacity:0,transparent:!0});H.current=new h.Kj0(i,o),H.current.rotateX(Math.PI),H.current.position.y-=1e-5,T.current.add(H.current),J.current=new h.iKG(-4,4,4,-4,0,1.5),J.current.rotation.x=Math.PI/2,T.current.add(J.current),B.current=new h.lRF,B.current.userData.darkness={value:3},B.current.onBeforeCompile=function(e){e.uniforms.darkness=B.current.userData.darkness,e.fragmentShader="\n        uniform float darkness;\n        ".concat(e.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"),"\n      ")},B.current.depthTest=!1,B.current.depthWrite=!1,K.current=new h.jyz(w),K.current.depthTest=!1,O.current=new h.jyz(g),O.current.depthTest=!1;var f=Y.onChange(te),l=Q.onChange(te);return function(){N.current.dispose(),I.current.dispose(),(0,R.Ji)(W.current),(0,R.in)(L.current),(0,R.e8)(z.current),f(),l()}}),[]);var ne=(0,x.useCallback)((function(e){X.current.visible=!0,X.current.material=K.current,X.current.material.uniforms.tDiffuse.value=N.current.texture,K.current.uniforms.h.value=e*(1/256),z.current.setRenderTarget(I.current),z.current.render(X.current,J.current),X.current.material=O.current,X.current.material.uniforms.tDiffuse.value=I.current.texture,O.current.uniforms.v.value=e*(1/256),z.current.setRenderTarget(N.current),z.current.render(X.current,J.current),X.current.visible=!1}),[]),te=(0,x.useCallback)((function(){var e=L.current.background;L.current.background=null,L.current.overrideMaterial=B.current,z.current.setRenderTarget(N.current),z.current.render(L.current,J.current),L.current.overrideMaterial=null,ne(5),ne(2),z.current.setRenderTarget(null),L.current.background=e,A.current.rotation.x=Y.get(),A.current.rotation.y=Q.get(),z.current.render(L.current,_.current),ee(),re.current?z.current.setPixelRatio(1):z.current.setPixelRatio(2)}),[ne,re,ee,Y,Q]);return(0,x.useEffect)((function(){var e=function(e){var r=window.innerWidth,n=window.innerHeight,t=(e.clientX-r/2)/r,u=(e.clientY-n/2)/n;Q.set(t/2),Y.set(u/2)};return q&&!V&&window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[q,V,Y,Q]),(0,x.useEffect)((function(){var e=function(){if(E.current){var e=E.current,r=e.clientWidth,n=e.clientHeight;z.current.setSize(r,n),_.current.aspect=r/n,_.current.updateProjectionMatrix(),te()}};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[te]),(0,f.jsxs)("div",(0,a.Z)((0,u.Z)({className:(0,U.Sh)(M().model,D),"data-loaded":S,style:(0,U.Fh)({delay:(0,U.aU)(s)},p),ref:E,role:"img","aria-label":k},b),{children:[(0,f.jsx)("canvas",{className:M().canvas,ref:F}),r.map((function(e,r){return(0,f.jsx)(Z,{renderer:z,modelGroup:A,show:t,showDelay:s,renderFrame:te,index:r,setLoaded:C,model:e},JSON.stringify(e.position))}))]}))},Z=function(e){var r=e.renderer,n=e.model,u=e.modelGroup,a=e.renderFrame,c=e.index,o=e.showDelay,f=e.setLoaded,d=e.show,m=(0,x.useState)(),y=m[0],w=m[1],g=(0,l.J)(),U=(0,x.createRef)();(0,x.useEffect)((function(){var e=function(){var e=(0,t.Z)(v().mark((function e(n,t){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.encoding=h.knz,n.flipY=!1,n.anisotropy=r.current.capabilities.getMaxAnisotropy(),n.generateMipmaps=!1,e.next=6,r.current.initTexture(n);case 6:t.material.color=new h.Ilk(16777215),t.material.transparent=!0,t.material.map=n;case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(v().mark((function r(){var f,l,d,m,y,x,w,k,M,j;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return f=n.texture,l=n.position,d=n.url,r.t0=i.Z,r.t1=Promise,r.next=7,R.Et.loadAsync(f.placeholder.src);case 7:return r.t2=r.sent,r.next=10,R.Zf.loadAsync(d);case 10:return r.t3=r.sent,r.t4=[r.t2,r.t3],r.next=14,r.t1.all.call(r.t1,r.t4);case 14:return r.t5=r.sent,x=(0,r.t0)(r.t5,2),w=x[0],k=x[1],u.current.add(k.scene),k.scene.traverse(function(){var r=(0,t.Z)(v().mark((function r(n){return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n.material&&(n.material.color=new h.Ilk(2039845),n.material.color.convertSRGBToLinear()),n.name===S&&(U.current=n.clone(),U.current.material=n.material.clone(),n.parent.add(U.current),U.current.material.opacity=1,U.current.position.z+=.001,e(w,U.current),m=(0,t.Z)(v().mark((function r(){var t,u;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,D.Ro)(f);case 2:return t=r.sent,r.next=5,R.Et.loadAsync(t);case 5:return u=r.sent,r.next=8,e(u,n);case 8:(0,p.j)(1,0,{onUpdate:function(e){U.current.material.opacity=e,a()}});case 9:case"end":return r.stop()}}),r)}))));case 2:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()),M=new h.Pa4(l.x,l.y,l.z),g&&(j=k.scene.position).set.apply(j,(0,s.Z)(M.toArray())),n.animation===b.u.SpringUp&&(y=function(){var e,r=new h.Pa4(M.x,M.y-1,M.z);(e=k.scene.position).set.apply(e,(0,s.Z)(r.toArray())),(0,p.j)(r.y,M.y,{type:"spring",delay:(300*c+o)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){k.scene.position.y=e,a()}})}),n.animation===b.u.LaptopOpen&&(y=function(){var e,r,n=k.scene.children.find((function(e){return e.name===P})),t=new h.Pa4(h.M8C.degToRad(90),0,0),u=new h.Pa4(0,0,0);return(e=k.scene.position).set.apply(e,(0,s.Z)(M.toArray())),(r=n.rotation).set.apply(r,(0,s.Z)(t.toArray())),(0,p.j)(t.x,u.x,{type:"spring",delay:(300*c+o+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:function(e){n.rotation.x=e,a()}})}),r.abrupt("return",{loadFullResTexture:m,playAnimation:y});case 25:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();w({start:f})}),[]),(0,x.useEffect)((function(){if(y&&d){var e,r=function(){var r=(0,t.Z)(v().mark((function r(){var n,t,u;return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.start();case 2:return n=r.sent,t=n.loadFullResTexture,u=n.playAnimation,f(!0),g||(e=u()),r.next=9,t();case 9:g&&a();case 10:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return(0,x.startTransition)((function(){r()})),function(){null===e||void 0===e||e.stop()}}}),[y,d])}},5223:function(e,r,n){"use strict";n.d(r,{s:function(){return u}});var t=n(7294);function u(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],r=(0,t.useRef)(0),n=(0,t.useRef)(0),u=(0,t.useRef)(0),a=(0,t.useRef)([]),c=(0,t.useRef)(!1);(0,t.useEffect)((function(){n.current=performance.now(),u.current=0,a.current=[]}),[e]);var i=(0,t.useCallback)((function(){var e=performance.now();u.current=u.current+1,e>=n.current+100&&(r.current=100*u.current/(e-n.current)*10,a.current.push(r.current),n.current=e,u.current=0),a.current.length<=9||(a.current=a.current.slice(-9),a.current.every((function(e){return e<60}))&&(c.current=!0),a.current.every((function(e){return e>70}))&&(c.current=!1))}),[]);return{measureFps:i,fps:r,isLowFps:c}}},3142:function(e,r,n){"use strict";n.d(r,{Et:function(){return o},Ji:function(){return d},Zf:function(){return s},e8:function(){return l},in:function(){return v},x2:function(){return p}});var t=n(9477),u=n(4976),a=n(7607);t.CtF.enabled=!0;var c=new u._,i=new a.E;c.setDecoderPath("/draco/"),i.setDRACOLoader(c);var s=i,o=new t.dpR,v=function(e){null===e||void 0===e||e.traverse((function(e){if(e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)f(e.material);else{var r=!0,n=!1,t=void 0;try{for(var u,a=e.material[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;f(c)}}catch(i){n=!0,t=i}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}}}))},f=function(e){e.dispose();var r=!0,n=!1,t=void 0;try{for(var u,a=Object.keys(e)[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c,i,s,o=e[u.value];if(o&&"object"===typeof o&&"minFilter"in o)o.dispose(),null===(c=o.source)||void 0===c||null===(i=c.data)||void 0===i||null===(s=i.close)||void 0===s||s.call(i)}}catch(v){n=!0,t=v}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}},l=function(e){e.dispose(),e=null},d=function(e){var r=!0,n=!1,t=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done);r=!0){var c=u.value;c.parent.remove(c)}}catch(i){n=!0,t=i}finally{try{r||null==a.return||a.return()}finally{if(n)throw t}}},p=function(e,r){var n;return r.traverse((function(r){r.name===e&&(n=r)})),n}},4209:function(e){e.exports={model:"Model_model__228ej",canvas:"Model_canvas__kaLjL"}},2064:function(e,r,n){"use strict";n.d(r,{j:function(){return c}});var t=n(3234),u=n(406),a=n(8899);function c(e,r,n){void 0===n&&(n={});var c=(0,u.i)(e)?e:(0,t.B)(e);return(0,a.b8)("",c,r,n),{stop:function(){return c.stop()},isAnimating:function(){return c.isAnimating()}}}}}]);