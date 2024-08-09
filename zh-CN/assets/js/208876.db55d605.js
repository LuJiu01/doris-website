"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[208876],{726653:(e,n,t)=>{t.d(n,{A:()=>T});var o=t(58168),r=t(480641),a=t(364467),i=t(180045),s=t(296540),c=t(246942),l=t.n(c),u=t(842742),d=t(461053),m=t(489379),f=t(282284),p=t(334731),y=t(172633),g=t(968210);function v(e){return"object"===(0,f.A)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===(0,f.A)(e.icon)||"function"==typeof e.icon)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var o,r=e[t];if("class"===t)n.className=r,delete n.class;else delete n[t],n[(o=t,o.replace(/-(.)/g,(function(e,n){return n.toUpperCase()})))]=r;return n}),{})}function C(e,n,t){return t?s.createElement(e.tag,(0,m.A)((0,m.A)({key:n},h(e.attrs)),t),(e.children||[]).map((function(t,o){return C(t,"".concat(n,"-").concat(e.tag,"-").concat(o))}))):s.createElement(e.tag,(0,m.A)({key:n},h(e.attrs)),(e.children||[]).map((function(t,o){return C(t,"".concat(n,"-").concat(e.tag,"-").concat(o))})))}function A(e){return(0,u.cM)(e)[0]}function b(e){return e?Array.isArray(e)?e:[e]:[]}var w=["icon","className","onClick","style","primaryColor","secondaryColor"],E={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var x=function(e){var n,t,o,r,a,c,l,u=e.icon,f=e.className,h=e.onClick,b=e.style,x=e.primaryColor,k=e.secondaryColor,M=(0,i.A)(e,w),S=s.useRef(),N=E;if(x&&(N={primaryColor:x,secondaryColor:k||A(x)}),n=S,t=(0,s.useContext)(d.A),o=t.csp,r=t.prefixCls,a="\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",r&&(a=a.replace(/anticon/g,r)),(0,s.useEffect)((function(){var e=n.current,t=(0,y.j)(e);(0,p.BD)(a,"@ant-design-icons",{prepend:!0,csp:o,attachTo:t})}),[]),c=v(u),l="icon should be icon definiton, but got ".concat(u),(0,g.Ay)(c,"[@ant-design/icons] ".concat(l)),!v(u))return null;var T=u;return T&&"function"==typeof T.icon&&(T=(0,m.A)((0,m.A)({},T),{},{icon:T.icon(N.primaryColor,N.secondaryColor)})),C(T.icon,"svg-".concat(T.name),(0,m.A)((0,m.A)({className:f,onClick:h,style:b,"data-icon":T.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},M),{},{ref:S}))};x.displayName="IconReact",x.getTwoToneColors=function(){return(0,m.A)({},E)},x.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;E.primaryColor=n,E.secondaryColor=t||A(n),E.calculated=!!t};const k=x;function M(e){var n=b(e),t=(0,r.A)(n,2),o=t[0],a=t[1];return k.setTwoToneColors({primaryColor:o,secondaryColor:a})}var S=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];M(u.z1.primary);var N=s.forwardRef((function(e,n){var t=e.className,c=e.icon,u=e.spin,m=e.rotate,f=e.tabIndex,p=e.onClick,y=e.twoToneColor,g=(0,i.A)(e,S),v=s.useContext(d.A),h=v.prefixCls,C=void 0===h?"anticon":h,A=v.rootClassName,w=l()(A,C,(0,a.A)((0,a.A)({},"".concat(C,"-").concat(c.name),!!c.name),"".concat(C,"-spin"),!!u||"loading"===c.name),t),E=f;void 0===E&&p&&(E=-1);var x=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,M=b(y),N=(0,r.A)(M,2),T=N[0],O=N[1];return s.createElement("span",(0,o.A)({role:"img","aria-label":c.name},g,{ref:n,tabIndex:E,onClick:p,className:w}),s.createElement(k,{icon:c,primaryColor:T,secondaryColor:O,style:x}))}));N.displayName="AntdIcon",N.getTwoToneColor=function(){var e=k.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},N.setTwoToneColor=M;const T=N},461053:(e,n,t)=>{t.d(n,{A:()=>o});const o=(0,t(296540).createContext)({})},346467:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(58168),r=t(296540);const a={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var i=t(726653),s=function(e,n){return r.createElement(i.A,(0,o.A)({},e,{ref:n,icon:a}))};const c=r.forwardRef(s)},510363:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(58168),r=t(296540);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"};var i=t(726653),s=function(e,n){return r.createElement(i.A,(0,o.A)({},e,{ref:n,icon:a}))};const c=r.forwardRef(s)},848224:(e,n,t)=>{t.d(n,{A:()=>i,c:()=>a});var o=t(296540);const r=o.createContext(void 0),a=e=>{let{children:n,size:t}=e;const a=o.useContext(r);return o.createElement(r.Provider,{value:t||a},n)},i=r},120934:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(533534);const r=e=>{const[,,,,n]=(0,o.Ay)();return n?`${e}-css-var`:""}},900829:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(296540),r=t(848224);const a=e=>{const n=o.useContext(r.A);return o.useMemo((()=>e?"string"==typeof e?null!=e?e:n:e instanceof Function?e(n):n:n),[e,n])}},553561:(e,n,t)=>{t.d(n,{YU:()=>c,_j:()=>p,nP:()=>s,ox:()=>a,vR:()=>i});var o=t(257689),r=t(214980);const a=new o.Mo("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),i=new o.Mo("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),s=new o.Mo("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),c=new o.Mo("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),l=new o.Mo("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),u=new o.Mo("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),d=new o.Mo("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),m=new o.Mo("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),f={"slide-up":{inKeyframes:a,outKeyframes:i},"slide-down":{inKeyframes:s,outKeyframes:c},"slide-left":{inKeyframes:l,outKeyframes:u},"slide-right":{inKeyframes:d,outKeyframes:m}},p=(e,n)=>{const{antCls:t}=e,o=`${t}-${n}`,{inKeyframes:a,outKeyframes:i}=f[n];return[(0,r.b)(o,a,i,e.motionDurationMid),{[`\n      ${o}-enter,\n      ${o}-appear\n    `]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},[`${o}-leave`]:{animationTimingFunction:e.motionEaseInQuint}}]}},376799:(e,n,t)=>{t.d(n,{A:()=>L});var o=t(58168),r=t(489379),a=t(480641),i=t(180045),s=t(296540),c=t(246942),l=t.n(c),u=t(630584),d=t(530981),m=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],f=void 0;function p(e,n){var t=e.prefixCls,a=e.invalidate,c=e.item,d=e.renderItem,p=e.responsive,y=e.responsiveDisabled,g=e.registerSize,v=e.itemKey,h=e.className,C=e.style,A=e.children,b=e.display,w=e.order,E=e.component,x=void 0===E?"div":E,k=(0,i.A)(e,m),M=p&&!b;function S(e){g(v,e)}s.useEffect((function(){return function(){S(null)}}),[]);var N,T=d&&c!==f?d(c):A;a||(N={opacity:M?0:1,height:M?0:f,overflowY:M?"hidden":f,order:p?w:f,pointerEvents:M?"none":f,position:M?"absolute":f});var O={};M&&(O["aria-hidden"]=!0);var I=s.createElement(x,(0,o.A)({className:l()(!a&&t,h),style:(0,r.A)((0,r.A)({},N),C)},O,k,{ref:n}),T);return p&&(I=s.createElement(u.A,{onResize:function(e){S(e.offsetWidth)},disabled:y},I)),I}var y=s.forwardRef(p);y.displayName="Item";const g=y;var v=t(126956),h=t(440961),C=t(25371);function A(){var e=s.useRef(null);return function(n){e.current||(e.current=[],function(e){if("undefined"==typeof MessageChannel)(0,C.A)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}((function(){(0,h.unstable_batchedUpdates)((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(n)}}function b(e,n){var t=s.useState(n),o=(0,a.A)(t,2),r=o[0],i=o[1];return[r,(0,v.A)((function(n){e((function(){i(n)}))}))]}var w=s.createContext(null),E=["component"],x=["className"],k=["className"],M=function(e,n){var t=s.useContext(w);if(!t){var r=e.component,a=void 0===r?"div":r,c=(0,i.A)(e,E);return s.createElement(a,(0,o.A)({},c,{ref:n}))}var u=t.className,d=(0,i.A)(t,x),m=e.className,f=(0,i.A)(e,k);return s.createElement(w.Provider,{value:null},s.createElement(g,(0,o.A)({ref:n,className:l()(u,m)},d,f)))},S=s.forwardRef(M);S.displayName="RawItem";const N=S;var T=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],O="responsive",I="invalidate";function R(e){return"+ ".concat(e.length," ...")}function D(e,n){var t=e.prefixCls,c=void 0===t?"rc-overflow":t,m=e.data,f=void 0===m?[]:m,p=e.renderItem,y=e.renderRawItem,v=e.itemKey,h=e.itemWidth,C=void 0===h?10:h,E=e.ssr,x=e.style,k=e.className,M=e.maxCount,S=e.renderRest,N=e.renderRawRest,D=e.suffix,K=e.component,L=void 0===K?"div":K,P=e.itemComponent,z=e.onVisibleChange,X=(0,i.A)(e,T),Y="full"===E,F=A(),U=b(F,null),V=(0,a.A)(U,2),_=V[0],W=V[1],j=_||0,$=b(F,new Map),B=(0,a.A)($,2),G=B[0],q=B[1],Q=b(F,0),H=(0,a.A)(Q,2),J=H[0],Z=H[1],ee=b(F,0),ne=(0,a.A)(ee,2),te=ne[0],oe=ne[1],re=b(F,0),ae=(0,a.A)(re,2),ie=ae[0],se=ae[1],ce=(0,s.useState)(null),le=(0,a.A)(ce,2),ue=le[0],de=le[1],me=(0,s.useState)(null),fe=(0,a.A)(me,2),pe=fe[0],ye=fe[1],ge=s.useMemo((function(){return null===pe&&Y?Number.MAX_SAFE_INTEGER:pe||0}),[pe,_]),ve=(0,s.useState)(!1),he=(0,a.A)(ve,2),Ce=he[0],Ae=he[1],be="".concat(c,"-item"),we=Math.max(J,te),Ee=M===O,xe=f.length&&Ee,ke=M===I,Me=xe||"number"==typeof M&&f.length>M,Se=(0,s.useMemo)((function(){var e=f;return xe?e=null===_&&Y?f:f.slice(0,Math.min(f.length,j/C)):"number"==typeof M&&(e=f.slice(0,M)),e}),[f,C,_,M,xe]),Ne=(0,s.useMemo)((function(){return xe?f.slice(ge+1):f.slice(Se.length)}),[f,Se,xe,ge]),Te=(0,s.useCallback)((function(e,n){var t;return"function"==typeof v?v(e):null!==(t=v&&(null==e?void 0:e[v]))&&void 0!==t?t:n}),[v]),Oe=(0,s.useCallback)(p||function(e){return e},[p]);function Ie(e,n,t){(pe!==e||void 0!==n&&n!==ue)&&(ye(e),t||(Ae(e<f.length-1),null==z||z(e)),void 0!==n&&de(n))}function Re(e,n){q((function(t){var o=new Map(t);return null===n?o.delete(e):o.set(e,n),o}))}function De(e){return G.get(Te(Se[e],e))}(0,d.A)((function(){if(j&&"number"==typeof we&&Se){var e=ie,n=Se.length,t=n-1;if(!n)return void Ie(0,null);for(var o=0;o<n;o+=1){var r=De(o);if(Y&&(r=r||0),void 0===r){Ie(o-1,void 0,!0);break}if(e+=r,0===t&&e<=j||o===t-1&&e+De(t)<=j){Ie(t,null);break}if(e+we>j){Ie(o-1,e-r-ie+te);break}}D&&De(0)+ie>j&&de(null)}}),[j,G,te,ie,Te,Se]);var Ke=Ce&&!!Ne.length,Le={};null!==ue&&xe&&(Le={position:"absolute",left:ue,top:0});var Pe,ze={prefixCls:be,responsive:xe,component:P,invalidate:ke},Xe=y?function(e,n){var t=Te(e,n);return s.createElement(w.Provider,{key:t,value:(0,r.A)((0,r.A)({},ze),{},{order:n,item:e,itemKey:t,registerSize:Re,display:n<=ge})},y(e,n))}:function(e,n){var t=Te(e,n);return s.createElement(g,(0,o.A)({},ze,{order:n,key:t,item:e,renderItem:Oe,itemKey:t,registerSize:Re,display:n<=ge}))},Ye={order:Ke?ge:Number.MAX_SAFE_INTEGER,className:"".concat(be,"-rest"),registerSize:function(e,n){oe(n),Z(te)},display:Ke};if(N)N&&(Pe=s.createElement(w.Provider,{value:(0,r.A)((0,r.A)({},ze),Ye)},N(Ne)));else{var Fe=S||R;Pe=s.createElement(g,(0,o.A)({},ze,Ye),"function"==typeof Fe?Fe(Ne):Fe)}var Ue=s.createElement(L,(0,o.A)({className:l()(!ke&&c,k),style:x,ref:n},X),Se.map(Xe),Me?Pe:null,D&&s.createElement(g,(0,o.A)({},ze,{responsive:Ee,responsiveDisabled:!xe,order:ge,className:"".concat(be,"-suffix"),registerSize:function(e,n){se(n)},display:!0,style:Le}),D));return Ee&&(Ue=s.createElement(u.A,{onResize:function(e,n){W(n.clientWidth)},disabled:!xe},Ue)),Ue}var K=s.forwardRef(D);K.displayName="Overflow",K.Item=N,K.RESPONSIVE=O,K.INVALIDATE=I;const L=K},272065:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(489379),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),a="aria-",i="data-";function s(e,n){return 0===e.indexOf(n)}function c(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.A)({},t);var c={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||s(t,a))||n.data&&s(t,i)||n.attr&&r.includes(t))&&(c[t]=e[t])})),c}}}]);