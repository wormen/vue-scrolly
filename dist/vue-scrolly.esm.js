function _populate(){if(!_populated){_populated=!0;var e=navigator.userAgent,t=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e),o=/(Mac OS X)|(Windows)|(Linux)/.exec(e);if(_iphone=/\b(iPhone|iP[ao]d)/.exec(e),_ipad=/\b(iP[ao]d)/.exec(e),_android=/Android/i.exec(e),_native=/FBAN\/\w+;/i.exec(e),_mobile=/Mobile/i.exec(e),_win64=!!/Win64/.exec(e),t){(_ie=t[1]?parseFloat(t[1]):t[5]?parseFloat(t[5]):NaN)&&document&&document.documentMode&&(_ie=document.documentMode);var n=/(?:Trident\/(\d+.\d+))/.exec(e);_ie_real_version=n?parseFloat(n[1])+4:_ie,_firefox=t[2]?parseFloat(t[2]):NaN,_opera=t[3]?parseFloat(t[3]):NaN,(_webkit=t[4]?parseFloat(t[4]):NaN)?(t=/(?:Chrome\/(\d+\.\d+))/.exec(e),_chrome=t&&t[1]?parseFloat(t[1]):NaN):_chrome=NaN}else _ie=_firefox=_opera=_chrome=_webkit=NaN;if(o){if(o[1]){var r=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);_osx=!r||parseFloat(r[1].replace("_","."))}else _osx=!1;_windows=!!o[2],_linux=!!o[3]}else _osx=_windows=_linux=!1}}function isEventSupported(e,t){if(!ExecutionEnvironment_1.canUseDOM||t&&!("addEventListener"in document))return!1;var o="on"+e,n=o in document;if(!n){var r=document.createElement("div");r.setAttribute(o,"return;"),n="function"==typeof r[o]}return!n&&useHasFeature&&"wheel"===e&&(n=document.implementation.hasFeature("Events.wheel","3.0")),n}function normalizeWheel$2(e){var t=0,o=0,n=0,r=0;return"detail"in e&&(o=e.detail),"wheelDelta"in e&&(o=-e.wheelDelta/120),"wheelDeltaY"in e&&(o=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=o,o=0),n=t*PIXEL_STEP,r=o*PIXEL_STEP,"deltaY"in e&&(r=e.deltaY),"deltaX"in e&&(n=e.deltaX),(n||r)&&e.deltaMode&&(1==e.deltaMode?(n*=LINE_HEIGHT,r*=LINE_HEIGHT):(n*=PAGE_HEIGHT,r*=PAGE_HEIGHT)),n&&!t&&(t=n<1?-1:1),r&&!o&&(o=r<1?-1:1),{spinX:t,spinY:o,pixelX:n,pixelY:r}}function throttle(e,t,o){t||(t=250);var n,r;return function(){var i=o||this,a=+new Date,l=arguments;n&&a<n+t?(clearTimeout(r),r=setTimeout(function(){n=a,e.apply(i,l)},t)):(n=a,e.apply(i,l))}}function toPercent(e){return 100*e+"%"}var _populated=!1,_ie,_firefox,_opera,_webkit,_chrome,_ie_real_version,_osx,_windows,_linux,_android,_win64,_iphone,_ipad,_native,_mobile,UserAgent_DEPRECATED={ie:function(){return _populate()||_ie},ieCompatibilityMode:function(){return _populate()||_ie_real_version>_ie},ie64:function(){return UserAgent_DEPRECATED.ie()&&_win64},firefox:function(){return _populate()||_firefox},opera:function(){return _populate()||_opera},webkit:function(){return _populate()||_webkit},safari:function(){return UserAgent_DEPRECATED.webkit()},chrome:function(){return _populate()||_chrome},windows:function(){return _populate()||_windows},osx:function(){return _populate()||_osx},linux:function(){return _populate()||_linux},iphone:function(){return _populate()||_iphone},mobile:function(){return _populate()||_iphone||_ipad||_android||_mobile},nativeApp:function(){return _populate()||_native},android:function(){return _populate()||_android},ipad:function(){return _populate()||_ipad}},UserAgent_DEPRECATED_1=UserAgent_DEPRECATED,canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:canUseDOM&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM},ExecutionEnvironment_1=ExecutionEnvironment,useHasFeature;ExecutionEnvironment_1.canUseDOM&&(useHasFeature=document.implementation&&document.implementation.hasFeature&&!0!==document.implementation.hasFeature("",""));var isEventSupported_1=isEventSupported,PIXEL_STEP=10,LINE_HEIGHT=40,PAGE_HEIGHT=800;normalizeWheel$2.getEventType=function(){return UserAgent_DEPRECATED_1.firefox()?"DOMMouseScroll":isEventSupported_1("wheel")?"wheel":"mousewheel"};var normalizeWheel_1=normalizeWheel$2,normalizeWheel=normalizeWheel_1,supportsPassiveEvents=!1;try{var opts=Object.defineProperty({},"passive",{get:function(){supportsPassiveEvents=!0}});window.addEventListener("test",null,opts)}catch(e){}var supportsMutationObserver="MutationObserver"in window,DOM_SUBTREE_MODIFIED_EVENT="DOMSubtreeModified",PROPERTY_CHANGE_EVENT="propertychange",MOUSE_WHEEL_EVENT="wheel",MOUSE_MOVE_EVENT="mousemove",MOUSE_UP_EVENT="mouseup",DOM_CHANGE_HANDLER_THROTTLING_RATE=250,PARENT_SCROLL_ACTIVATION_POINT=25,__vue_module__={name:"scrolly",props:{parentScroll:{type:Boolean,default:!0},passiveScroll:{type:Boolean,default:!1}},data:function(){return{container:null,viewport:null,barX:null,barY:null,onMouseWheelHandler:null,onDomChangeHandler:null,mutationObserver:null,isScrolling:!1}},computed:{classnames:function(){return["scrolly",this.isScrolling?"is-scrolling":""]}},mounted:function(){this.$nextTick(function(){for(var e,t,o,n,r=this.$el,i=r.childNodes,a=0;n=i[a++];){var l=n.className;l&&(l.match("scrolly-viewport")&&(e=n),l.match("axis-x")&&(t=n),l.match("axis-y")&&(o=n))}if(e&&(t||o)){var s=this.onMouseWheel.bind(this),c=!!this.parentScroll&&this.passiveScroll;r.addEventListener(MOUSE_WHEEL_EVENT,s,!!supportsPassiveEvents&&{passive:c});var u,d=this.onDomChange.bind(this);supportsMutationObserver?(u=new MutationObserver(d)).observe(e,{childList:!0,characterData:!0,subtree:!0,attributes:!0}):(e.addEventListener(DOM_SUBTREE_MODIFIED_EVENT,d),e.addEventListener(PROPERTY_CHANGE_EVENT,d)),Object.assign(this,{container:r,viewport:e,barX:t,barY:o,onMouseWheelHandler:s,onDomChangeHandler:d,mutationObserver:u})}})},methods:{onMouseEnter:function(){this.refreshScrollLayout()},onMouseDown:function(e){function t(e){e.preventDefault();var t=e.pageX,o=e.pageY;if(d){var a=s.scrollWidth,l=s.offsetWidth,c=l-n.offsetWidth,u=h+(t-r);u<0&&(u=0),u>c&&(u=c),n.style.left=toPercent(u/l),s.scrollLeft=u/c*(a-l)}if(_){var E=s.scrollHeight,v=s.offsetHeight,f=v-n.offsetHeight,m=p+(o-i);m<0&&(m=0),m>f&&(m=f),n.style.top=toPercent(m/v),s.scrollTop=m/f*(E-v)}}function o(){l.isScrolling=!1,u(MOUSE_UP_EVENT,o),u(MOUSE_MOVE_EVENT,t)}var n=e.target,r=e.pageX,i=e.pageY,a=n.className;if(a.match("scrolly-bar")){var l=this,s=this.viewport,c=window.addEventListener,u=window.removeEventListener,d=a.match("axis-x"),_=a.match("axis-y"),p=n.offsetTop,h=n.offsetLeft;l.isScrolling=!0,c("mousemove",t),c("mouseup",o)}},onMouseWheel:function(e){var t=normalizeWheel(e),o=t.pixelX,n=t.pixelY,r=this.refreshScrollLayout(o,n),i=r.x,a=r.y;if(!this.passiveScroll){var l=i&&i.canScrollParent,s=a&&a.canScrollParent;(!this.parentScroll||!(l||s))&&e.preventDefault()}},onMouseLeave:function(e){var t=this,o=t.barX,n=t.barY;o&&(o.scrollLayout=null),n&&(n.scrollLayout=null)},onDomChange:throttle(function(){this.refreshScrollLayout()},DOM_CHANGE_HANDLER_THROTTLING_RATE),refreshScrollLayout:function(e,t){void 0===e&&(e=0),void 0===t&&(t=0);var o={},n=this,r=n.viewport,i=n.barX,a=n.barY;if(i){var l=0!==e;r.scrollLeft+=e;var s=r.scrollLeft,c=r.scrollWidth,u=r.offsetWidth,d=i.style;d.visibility="hidden",d.display="block",d.width=toPercent(u/c);var _=i.offsetWidth,p=u-_,h=s/(c-u)*p,E=h<0,v=h>p,f=E||v;E&&(h=0),v&&(h=p),d.left=toPercent(h/u);var m=_<u;d.display=m?"block":"none",d.visibility="visible";var y=Math.abs(e)>PARENT_SCROLL_ACTIVATION_POINT,w=i.scrollLayout||{},b=w.onEdge,T=w.canUnlockParentScroll,x=w.canScrollParent||b&&T;o.x=i.scrollLayout={barX:i,scrollLeft:s,scrollWidth:c,viewportWidth:u,barWidth:_,barLeft:h,minBarLeft:0,maxBarLeft:p,visible:m,onLeftEdge:E,onRightEdge:v,onEdge:f,visible:m,canUnlockParentScroll:y,canScrollParent:x,scrolled:l}}if(a){var g=0!==t;r.scrollTop+=t;var S=r.scrollTop,N=r.scrollHeight,O=r.offsetHeight,M=a.style;M.visibility="hidden",M.display="block",M.height=toPercent(O/N);var L=a.offsetHeight,P=O-L,D=S/(N-O)*P,H=D<=0,A=D>=P,I=H||A;H&&(D=0),A&&(D=P),M.top=toPercent(D/O);var U=L<O;M.display=U?"block":"none",M.visibility="visible";var R=Math.abs(t)>PARENT_SCROLL_ACTIVATION_POINT,C=a.scrollLayout||{},W=C.onEdge,V=C.canUnlockParentScroll,F=C.canScrollParent,k=I&&(F||W&&V);o.y=a.scrollLayout={barY:a,scrollTop:S,scrollHeight:N,viewportHeight:O,barHeight:L,barTop:D,minBarTop:0,maxBarTop:P,onTopEdge:H,onBottomEdge:A,onEdge:I,visible:U,canUnlockParentScroll:R,canScrollParent:k,scrolled:g}}return o}},beforeDestroy:function(){var e=this,t=e.container,o=e.viewport,n=e.onMouseWheelHandler,r=e.onDomChangeHandler,i=e.mutationObserver;i&&i.disconnect(),supportsMutationObserver||(o.removeEventListener(DOM_SUBTREE_MODIFIED_EVENT,r),o.removeEventListener(PROPERTY_CHANGE_EVENT,r)),t.removeEventListener(MOUSE_WHEEL_EVENT,n)}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),o='.scrolly { position: relative; } .scrolly .scrolly-bar { opacity: 0; } .scrolly:hover .scrolly-bar, .scrolly.is-scrolling .scrolly-bar { opacity: 1; } .scrolly-viewport { position: absolute; overflow: hidden; width: 100%; height: 100%; z-index: 1; } .scrolly-bar { position: absolute; border: 7px solid transparent; cursor: pointer; z-index: 2; transition: opacity .1s ease; } .scrolly-bar:before { position: absolute; width: 100%; height: 100%; content: " "; background: rgba(0, 0, 0, 0.3); border-radius: 7px; transition: background .2s ease; } .scrolly-bar:hover:before { background: rgba(0, 0, 0, 0.6); } .scrolly-bar.axis-x { left: 0; bottom: 0; width: 100%; height: 21px; min-width: 20%; max-width: 100%; } .scrolly-bar.axis-y { top: 0; right: 0; width: 21px; height: 100%; min-height: 20%; max-height: 100%; } ';t.type="text/css",t.styleSheet?t.styleSheet.cssText=o:t.appendChild(document.createTextNode(o)),e.appendChild(t)}}();var __$__vue_module__=Object.assign(__vue_module__,{render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classnames,on:{mouseenter:e.onMouseEnter,mousedown:e.onMouseDown,mouseleave:e.onMouseLeave}},[e._t("default")],2)},staticRenderFns:[]});__$__vue_module__.prototype=__vue_module__.prototype,function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var ScrollyViewport={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classnames},[e._t("default")],2)},staticRenderFns:[],name:"scrolly-viewport",computed:{classnames:function(){return["scrolly-viewport"]}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var ScrollyBar={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classnames},[e._t("default")],2)},staticRenderFns:[],name:"scrolly-bar",props:{axis:{type:String,default:"y"}},computed:{classnames:function(){return["scrolly-bar","axis-"+this.axis]}}};"undefined"!=typeof window&&window.Vue&&(window.Vue.component("scrolly",__$__vue_module__),window.Vue.component("scrolly-viewport",ScrollyViewport),window.Vue.component("scrolly-bar",ScrollyBar));export{__$__vue_module__ as Scrolly,ScrollyViewport,ScrollyBar};
