"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _createForOfIteratorHelper(t,e){var n,r,o,i,a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(a)return o=!(r=!0),{s:function(){a=a.call(t)},n:function(){var t=a.next();return r=t.done,t},e:function(t){o=!0,n=t},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw n}}};if(Array.isArray(t)||(a=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length)return a&&(t=a),i=0,{s:e=function(){},n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:e};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){var n;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(n="Object"===(n={}.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:n)||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var s,a={},t=Object.prototype,l=t.hasOwnProperty,u=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(s){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,i,a,c,e=e&&e.prototype instanceof y?e:y,e=Object.create(e.prototype),r=new _(r||[]);return u(e,"_invoke",{value:(o=t,i=n,a=r,c=f,function(t,e){if(c===m)throw Error("Generator is already running");if(c===g){if("throw"===t)throw e;return{value:s,done:!0}}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){n=function t(e,n){var r=n.method,o=e.iterator[r];if(o===s)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=s,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;r=d(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,p;o=r.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}(n,a);if(n){if(n===p)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===f)throw c=g,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=m;n=d(o,i,a);if("normal"===n.type){if(c=a.done?g:h,n.arg===p)continue;return{value:n.arg,done:a.done}}"throw"===n.type&&(c=g,a.method="throw",a.arg=n.arg)}})}),e}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f="suspendedStart",h="suspendedYield",m="executing",g="completed",p={};function y(){}function v(){}function b(){}var e={},L=(i(e,r,function(){return this}),Object.getPrototypeOf),L=L&&L(L(A([]))),w=(L&&L!==t&&l.call(L,r)&&(e=L),b.prototype=y.prototype=Object.create(e));function E(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function O(a,c){var e;u(this,"_invoke",{value:function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){var i,t=d(a[t],a,n);if("throw"!==t.type)return(n=(i=t.arg).value)&&"object"==_typeof(n)&&l.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function A(e){if(e||""===e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(l.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=s,t.done=!0,t}).next=t}throw new TypeError(_typeof(e)+" is not iterable")}return u(w,"constructor",{value:v.prototype=b,configurable:!0}),u(b,"constructor",{value:v,configurable:!0}),v.displayName=i(b,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,i(t,o,"GeneratorFunction")),t.prototype=Object.create(w),t},a.awrap=function(t){return{__await:t}},E(O.prototype),i(O.prototype,n,function(){return this}),a.AsyncIterator=O,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new O(c(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(w),i(w,o,"Generator"),i(w,r,function(){return this}),i(w,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=l.call(o,"catchLoc"),c=l.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&l.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,x(o)),r}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:A(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=s),p}},a}function asyncGeneratorStep(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,n){var r=c.apply(t,a);function o(t){asyncGeneratorStep(r,e,n,o,i,"next",t)}function i(t){asyncGeneratorStep(r,e,n,o,i,"throw",t)}o(void 0)})}}document.addEventListener("DOMContentLoaded",function(){function u(t){function e(t){return Array.from(t).reduce(function(t,e){return t+e.offsetWidth},0)}t&&(t=e(document.querySelector("#blog-info > a").children),n=e(document.getElementById("menus").children),r=t+n,p=document.getElementById("nav"));var n,t=window.innerWidth<=768||r>p.offsetWidth-120;p.classList.toggle("hide-menu",t)}function d(){var t,n,i,e,a,r,o,c,s,l,u,d,f,h,m,g,p=GLOBAL_CONFIG.highlight;p&&(t=p.highlightCopy,n=p.highlightLang,i=p.highlightHeightLimit,p=p.plugin,e=GLOBAL_CONFIG_SITE.isHighlightShrink,a=t||n||void 0!==e,r="highlight.js"===p?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]'),a||i)&&r.length&&(c=!0===e?"closed":"",s=void 0!==e?'<i class="fas fa-angle-down expand"></i>':"",l=t?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",u=function(t,e){var n;void 0!==GLOBAL_CONFIG.Snackbar?btf.snackbarShow(e):((n=t.previousElementSibling).textContent=e,n.style.opacity=1,setTimeout(function(){n.style.opacity=0},800))},d=function(t){var e=t.parentNode,n=(e.classList.add("copy-true"),window.getSelection()),r=document.createRange();r.selectNodeContents(e.querySelectorAll("".concat(o?"pre code":"table .code pre"))[0]),n.removeAllRanges(),n.addRange(r),r=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),u(r,GLOBAL_CONFIG.copy.success)):u(r,GLOBAL_CONFIG.copy.noSupport),n.removeAllRanges(),e.classList.remove("copy-true")},f=function(t){t.classList.toggle("closed")},h=function(t){t=t.target.classList;t.contains("expand")?f(this):t.contains("copy-button")&&d(this)},m=function(){this.classList.toggle("expand-done")},g=function(t,e,n){var r,o=document.createDocumentFragment();a&&((r=document.createElement("div")).className="highlight-tools ".concat(c),r.innerHTML=s+t+l,btf.addEventListenerPjax(r,"click",h),o.appendChild(r)),i&&e.offsetHeight>i+30&&((t=document.createElement("div")).className="code-expand-btn",t.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(t,"click",m),o.appendChild(t)),"hl"===n?e.insertBefore(o,e.firstChild):e.parentNode.insertBefore(o,e)},(o="prismjs"===p)?r.forEach(function(t){var e;n?(e=t.getAttribute("data-language")||"Code",e='<div class="code-lang">'.concat(e,"</div>"),btf.wrap(t,"figure",{class:"highlight"}),g(e,t)):(btf.wrap(t,"figure",{class:"highlight"}),g("",t))}):r.forEach(function(t){var e;n?(e=t.getAttribute("class").split(" ")[1],e='<div class="code-lang">'.concat(e="plain"!==e&&void 0!==e?e:"Code","</div>"),g(e,t,"hl")):g("",t,"hl")}))}function l(r,s){function o(e){function n(t){t.target.removeEventListener("click",n),t.target.remove(),btf.setLoading.add(e),f(c.getGroups().length+1,10)}var t=document.createElement("button");t.textContent=d,t.addEventListener("click",n),e.insertAdjacentElement("afterend",t)}function i(t){var e=t.updated,n=t.isResize,t=t.mounted;e.length&&t.length&&!n&&(btf.loadLightbox(r.querySelectorAll("img:not(.medium-zoom-image)")),c.getGroups().length===h?(btf.setLoading.remove(r),c.off("renderComplete",i)):a&&(btf.setLoading.remove(r),o(r)))}var a=2<arguments.length&&void 0!==arguments[2]&&arguments[2],t=3<arguments.length?arguments[3]:void 0,l=s.length,c=new InfiniteGrid.JustifiedInfiniteGrid(r,{gap:5,isConstantSize:!0,sizeRange:[150,600],useResizeObserver:!0,observeChildren:!0,useTransform:!0}),u=(t&&btf.addGlobalFn("igOfTabs",function(){c.destroy()},!1,t),function(t){return t.replace(/"/g,"&quot;")}),d=GLOBAL_CONFIG.infinitegrid.buttonText,f=function(t,e){c.append(function(t,e){for(var n=[],r=(t-1)*e,o=0;o<e;++o){var i=r+o;if(l<=i)break;var i=s[i],a=i.alt?'alt="'.concat(u(i.alt),'"'):"",c=i.title?'title="'.concat(u(i.title),'"'):"";n.push('<div class="item ">\n            <img src="'.concat(i.url,'" data-grid-maintained-target="true" ').concat(a+c," />\n          </div>"))}return n}(t,e),t)},h=Math.ceil(l/10),e=btf.debounce(function(t){t=(+t.groupKey||0)+1;f(t,10),t===h&&c.off("requestAppend",e)},300);btf.setLoading.add(r),c.on("renderComplete",i),a?f(1,10):(c.on("requestAppend",e),c.renderItems()),btf.addGlobalFn("justifiedGallery",function(){c.destroy()})}function f(){var n,t,r=document.getElementById("rightside"),o=window.innerHeight+56,i=0,a=document.getElementById("page-header"),c="undefined"!=typeof chatBtn,s=GLOBAL_CONFIG.percent.rightside;document.body.scrollHeight<=o?r.classList.add("rightside-show"):(n="",t=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,e=i<t;56<(i=t)?(""===n&&(a.classList.add("nav-fixed"),r.classList.add("rightside-show")),e?"down"!==n&&(a.classList.remove("nav-visible"),c&&window.chatBtn.hide(),n="down"):"up"!==n&&(a.classList.add("nav-visible"),c&&window.chatBtn.show(),n="up")):(n="",0===t&&a.classList.remove("nav-fixed","nav-visible"),r.classList.remove("rightside-show")),s&&(e=t,e=btf.getScrollPercent(e,document.body),t=document.getElementById("go-up"),e<95?(t.classList.add("show-percent"),t.querySelector(".scroll-percent").textContent=e):t.classList.remove("show-percent")),document.body.scrollHeight<=o&&r.classList.add("rightside-show")},300),btf.addEventListenerPjax(window,"scroll",t,{passive:!0}))}function h(){var a,n,c,s,l,u,d,f,t,h=GLOBAL_CONFIG_SITE.isToc,m=GLOBAL_CONFIG.isAnchor,g=document.getElementById("article-container");g&&(h||m)&&(h&&(n=document.getElementById("card-toc"),s=(c=n.querySelector(".toc-content")).querySelectorAll(".toc-link"),l=n.querySelector(".toc-percentage"),u=c.classList.contains("is-expand"),btf.addEventListenerPjax(c,"click",function(t){var e=t.target.closest(".toc-link");e&&(t.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900)&&n.classList.remove("open")}),a=function(t){var t=t.getBoundingClientRect().top,e=c.scrollTop;t>document.documentElement.clientHeight-100&&(c.scrollTop=e+150),t<100&&(c.scrollTop=e-150)}),d=g.querySelectorAll("h1,h2,h3,h4,h5,h6"),f="",t=btf.throttle(function(){var t=window.scrollY||document.documentElement.scrollTop,n=(h&&GLOBAL_CONFIG.percent.toc&&(l.textContent=btf.getScrollPercent(t,g)),t);if(0!==n){var r="",o="";if(d.forEach(function(t,e){n>btf.getEleTop(t)-80&&(t=t.id,r=t?"#"+encodeURI(t):"",o=e)}),f!==o&&(m&&btf.updateAnchor(r),f=o,h)&&(c.querySelectorAll(".active").forEach(function(t){t.classList.remove("active")}),""!==r)){var e=s[o];if(e.classList.add("active"),setTimeout(function(){a(e)},0),!u)for(var i=e.parentNode;!i.matches(".toc");i=i.parentNode)i.matches("li")&&i.classList.add("active")}}},100),btf.addEventListenerPjax(window,"scroll",t,{passive:!0}))}function e(n){var r=(window.globalFn||{}).themeChange||{};r&&Object.keys(r).forEach(function(t){var e=r[t];["disqus","disqusjs"].includes(t)?setTimeout(function(){return e(n)},300):e(n)})}function m(){var o,t=document.querySelectorAll("#article-container .tabs");t.length&&(o=function(t,e){Array.from(t).forEach(function(t){t.classList.remove("active"),t!==e&&t.id!==e||t.classList.add("active")})},t.forEach(function(t){var n,e,r=!!t.querySelectorAll(".gallery-container");n=r,btf.addEventListenerPjax(t.firstElementChild,"click",function(t){var e,t=t.target.closest("button");t.classList.contains("active")||(o(this.children,t),this.classList.remove("no-default"),t=t.getAttribute("data-href"),e=this.nextElementSibling,o(e.children,t),n&&(btf.removeGlobalFnEvent("igOfTabs",this),(e=e.querySelectorAll(":scope > #".concat(t," .gallery-container"))).length)&&b(e,this))}),e=t,btf.addEventListenerPjax(e.lastElementChild,"click",function(t){t.target.closest("button")&&btf.scrollToDest(btf.getEleTop(e),300)})}))}function g(t){t.forEach(function(t){var e=t.getAttribute("datetime");t.textContent=btf.diffDate(e,!0),t.style.display="inline"})}var r,p,t,o,i,n=!1,y=function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},a=function(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},v=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var n;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=_asyncToGenerator(_regeneratorRuntime().mark(function t(c){var s,e,n=arguments;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:s=1<n.length&&void 0!==n[1]&&n[1],e=function(){var t=_asyncToGenerator(_regeneratorRuntime().mark(function t(){var e,n,r,o,i,a;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=_createForOfIteratorHelper(c),t.prev=1,e.s();case 3:if((r=e.n()).done)t.next=22;else{if(n=r.value,btf.isHidden(n))return t.abrupt("continue",20);t.next=7}break;case 7:if(s&&n.classList.contains("loaded")&&(n.querySelector(".gallery-items").innerHTML="",r=n.querySelector(":scope > button"),o=n.querySelector(":scope > .loading-container"),r&&r.remove(),o)&&o.remove(),o="true"===n.getAttribute("data-button"),i=n.firstElementChild.textContent,n.classList.add("loaded"),"url"===n.getAttribute("data-type"))return t.next=14,v(i);t.next=17;break;case 14:t.t0=t.sent,t.next=18;break;case 17:t.t0=JSON.parse(i);case 18:a=t.t0,l(n.lastElementChild,a,o,s);case 20:t.next=3;break;case 22:t.next=27;break;case 24:t.prev=24,t.t1=t.catch(1),e.e(t.t1);case 27:return t.prev=27,e.f(),t.finish(27);case 30:case"end":return t.stop()}},t,null,[[1,24,27,30]])}));return function(){return t.apply(this,arguments)}}(),"function"!=typeof InfiniteGrid?t.next=6:(e(),t.next=9);break;case 6:return t.next=8,getScript("".concat(GLOBAL_CONFIG.infinitegrid.js));case 8:e();case 9:case"end":return t.stop()}},t)}));return function(t){return e.apply(this,arguments)}}(),c={readmode:function(){function t(){e.classList.remove("read-mode"),n.remove(),n.removeEventListener("click",t)}var e=document.body,n=(e.classList.add("read-mode"),document.createElement("button"));n.type="button",n.className="fas fa-sign-out-alt exit-readmode",e.appendChild(n);n.addEventListener("click",t)},darkmode:function(){var t="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"==t?(activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),saveToLocal.set("theme",t,2),e(t)},"rightside-config":function(t){var e=t.firstElementChild;e.classList.contains("show")&&(e.classList.add("status"),setTimeout(function(){e.classList.remove("status")},300)),e.classList.toggle("show")},"go-up":function(){btf.scrollToDest(0,500)},"hide-aside-btn":function(){var t=document.documentElement.classList,e=t.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",e,2),t.toggle("hide-aside")},"mobile-toc-button":function(t){var e=document.getElementById("card-toc");e.style.transition="transform 0.3s ease-in-out",e.classList.toggle("open"),e.addEventListener("transitionend",function(){e.style.transition=""},{once:!0})},"chat-btn":function(){window.chatBtnFn()},translateLink:function(){window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",function(t){t=t.target.closest("[id]");t&&c[t.id]&&c[t.id](this)});window.refreshFn=function(){u(!0),p.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&(t=GLOBAL_CONFIG.noticeOutdate,e=t.limitDay,n=t.messagePrev,r=t.messageNext,t=t.position,o=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate),e<=o)&&((e=document.createElement("div")).className="post-outdate-notice",e.textContent="".concat(n," ").concat(o," ").concat(r),n=document.getElementById("article-container"),"top"===t?n.insertBefore(e,n.firstChild):n.appendChild(e)),GLOBAL_CONFIG.relativeDate.post&&g(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&g(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&(o=document.getElementById("runtimeshow"))&&(r=o.getAttribute("data-publishDate"),o.textContent="".concat(btf.diffDate(r)," ").concat(GLOBAL_CONFIG.runtime)),(t=document.getElementById("last-push-date"))&&(n=t.getAttribute("data-lastPushDate"),t.textContent=btf.diffDate(n,!0)),(e=document.querySelector("#aside-cat-list.expandBtn"))&&btf.addEventListenerPjax(e,"click",function(t){var e=t.target;"I"===e.nodeName&&(t.preventDefault(),e.parentNode.classList.toggle("expand"))},!0)),h(),GLOBAL_CONFIG_SITE.isHome&&(l=document.getElementById("scroll-down"))&&btf.addEventListenerPjax(l,"click",function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}),d(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach(function(t){var e,n=t.title||t.alt;n&&((e=document.createElement("div")).className="img-alt is-center",e.textContent=n,t.insertAdjacentElement("afterend",e))}),f(),btf.removeGlobalFnEvent("justifiedGallery");var t,e,n,r,o,i,a,c,s,l=document.querySelectorAll("#article-container .gallery-container");l.length&&b(l),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(s=document.querySelectorAll("#article-container table")).length&&s.forEach(function(t){t.closest(".highlight")||btf.wrap(t,"div",{class:"table-wrap"})}),(s=document.querySelectorAll("#article-container .hide-button")).length&&(i=function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".gallery-container");e.length&&b(e)},s.forEach(function(t){t.addEventListener("click",i,{once:!0})})),m(),(s=document.getElementById("switch-btn"))&&(a=!1,c=document.getElementById("post-comment"),btf.addEventListenerPjax(s,"click",function(){c.classList.toggle("move"),a||"function"!=typeof loadOtherComment||(a=!0,loadOtherComment())})),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",function(){y()})},refreshFn(),window.addEventListener("resize",function(){u(!1),n&&btf.isHidden(document.getElementById("toggle-menu"))&&a()}),document.getElementById("menu-mask").addEventListener("click",function(t){a()}),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",function(t){t=t.target.closest(".site-page.group");t&&t.classList.toggle("hide")}),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(t=GLOBAL_CONFIG.copyright,o=t.limitCount,i=t.languages,document.body.addEventListener("copy",function(t){t.preventDefault();var e=window.getSelection(0).toString(),n=e;return e.length>o&&(n="".concat(e,"\n\n\n").concat(i.author,"\n").concat(i.link).concat(window.location.href,"\n").concat(i.source,"\n").concat(i.info)),(t.clipboardData?t:window).clipboardData.setData("text",n)})),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(t){void 0===saveToLocal.get("theme")&&(t.matches?e("dark"):e("light"))})});