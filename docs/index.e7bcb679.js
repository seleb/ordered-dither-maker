!function(){function e(e,n,t,o){Object.defineProperty(e,n,{get:t,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire0bde;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire0bde=r),r.register("gTwGg",(function(n,t){var o,r;e(n.exports,"register",(function(){return o}),(function(e){return o=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},r=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r.register("53Owe",(function(n,t){e(n.exports,"options",(function(){return r})),e(n.exports,"createElement",(function(){return d})),e(n.exports,"createRef",(function(){return y})),e(n.exports,"Fragment",(function(){return v})),e(n.exports,"Component",(function(){return m})),e(n.exports,"toChildArray",(function(){return S})),e(n.exports,"render",(function(){return D})),e(n.exports,"hydrate",(function(){return j})),e(n.exports,"cloneElement",(function(){return L})),e(n.exports,"createContext",(function(){return M}));var o,r,i,l,_,a,u={},s=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function d(e,n,t){var r,i,l,_={};for(l in n)"key"==l?r=n[l]:"ref"==l?i=n[l]:_[l]=n[l];if(arguments.length>2&&(_.children=arguments.length>3?o.call(arguments,2):t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===_[l]&&(_[l]=e.defaultProps[l]);return h(e,_,r,i,null)}function h(e,n,t,o,l){var _={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++i:l};return null==l&&null!=r.vnode&&r.vnode(_),_}function y(){return{current:null}}function v(e){return e.children}function m(e,n){this.props=e,this.context=n}function g(e,n){if(null==n)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?g(e):null}function b(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return b(e)}}function w(e){(!e.__d&&(e.__d=!0)&&l.push(e)&&!k.__r++||_!==r.debounceRendering)&&((_=r.debounceRendering)||setTimeout)(k)}function k(){for(var e;k.__r=l.length;)e=l.sort((function(e,n){return e.__v.__b-n.__v.__b})),l=[],e.some((function(e){var n,t,o,r,i,l;e.__d&&(i=(r=(n=e).__v).__e,(l=n.__P)&&(t=[],(o=p({},r)).__v=r.__v+1,F(l,r,o,n.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,t,null==i?g(r):i,r.__h),P(t,r),r.__e!=i&&b(r)))}))}function E(e,n,t,o,r,i,l,_,a,c){var p,f,d,y,m,b,w,k=o&&o.__k||s,E=k.length;for(t.__k=[],p=0;p<n.length;p++)if(null!=(y=t.__k[p]=null==(y=n[p])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?h(null,y,null,null,y):Array.isArray(y)?h(v,{children:y},null,null,null):y.__b>0?h(y.type,y.props,y.key,null,y.__v):y)){if(y.__=t,y.__b=t.__b+1,null===(d=k[p])||d&&y.key==d.key&&y.type===d.type)k[p]=void 0;else for(f=0;f<E;f++){if((d=k[f])&&y.key==d.key&&y.type===d.type){k[f]=void 0;break}d=null}F(e,y,d=d||u,r,i,l,_,a,c),m=y.__e,(f=y.ref)&&d.ref!=f&&(w||(w=[]),d.ref&&w.push(d.ref,null,y),w.push(f,y.__c||m,y)),null!=m?(null==b&&(b=m),"function"==typeof y.type&&y.__k===d.__k?y.__d=a=x(y,a,e):a=C(e,y,d,k,m,a),"function"==typeof t.type&&(t.__d=a)):a&&d.__e==a&&a.parentNode!=e&&(a=g(d))}for(t.__e=b,p=E;p--;)null!=k[p]&&("function"==typeof t.type&&null!=k[p].__e&&k[p].__e==t.__d&&(t.__d=g(o,p+1)),U(k[p],k[p]));if(w)for(p=0;p<w.length;p++)R(w[p],w[++p],w[++p])}function x(e,n,t){for(var o,r=e.__k,i=0;r&&i<r.length;i++)(o=r[i])&&(o.__=e,n="function"==typeof o.type?x(o,n,t):C(t,o,o,r,o.__e,n));return n}function S(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){S(e,n)})):n.push(e)),n}function C(e,n,t,o,r,i){var l,_,a;if(void 0!==n.__d)l=n.__d,n.__d=void 0;else if(null==t||r!=i||null==r.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(r),l=null;else{for(_=i,a=0;(_=_.nextSibling)&&a<o.length;a+=2)if(_==r)break e;e.insertBefore(r,i),l=i}return void 0!==l?l:r.nextSibling}function T(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||c.test(n)?t:t+"px"}function O(e,n,t,o,r){var i;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||T(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||T(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])i=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o||e.addEventListener(n,i?A:H,i):e.removeEventListener(n,i?A:H,i);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function H(e){this.l[e.type+!1](r.event?r.event(e):e)}function A(e){this.l[e.type+!0](r.event?r.event(e):e)}function F(e,n,t,i,l,_,a,s,c){var d,h,y,b,w,k,x,S,C,T,H,A,F,P=n.type;if(void 0!==n.constructor)return null;null!=t.__h&&(c=t.__h,s=n.__e=t.__e,n.__h=null,_=[s]),(d=r.__b)&&d(n);try{e:if("function"==typeof P){if(S=n.props,C=(d=P.contextType)&&i[d.__c],T=d?C?C.props.value:d.__:i,t.__c?x=(h=n.__c=t.__c).__=h.__E:("prototype"in P&&P.prototype.render?n.__c=h=new P(S,T):(n.__c=h=new m(S,T),h.constructor=P,h.render=N),C&&C.sub(h),h.props=S,h.state||(h.state={}),h.context=T,h.__n=i,y=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=p({},h.__s)),p(h.__s,P.getDerivedStateFromProps(S,h.__s))),b=h.props,w=h.state,y)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&S!==b&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(S,T),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(S,h.__s,T)||n.__v===t.__v){h.props=S,h.state=h.__s,n.__v!==t.__v&&(h.__d=!1),h.__v=n,n.__e=t.__e,n.__k=t.__k,n.__k.forEach((function(e){e&&(e.__=n)})),h.__h.length&&a.push(h);break e}null!=h.componentWillUpdate&&h.componentWillUpdate(S,h.__s,T),null!=h.componentDidUpdate&&h.__h.push((function(){h.componentDidUpdate(b,w,k)}))}if(h.context=T,h.props=S,h.__v=n,h.__P=e,H=r.__r,A=0,"prototype"in P&&P.prototype.render)h.state=h.__s,h.__d=!1,H&&H(n),d=h.render(h.props,h.state,h.context);else do{h.__d=!1,H&&H(n),d=h.render(h.props,h.state,h.context),h.state=h.__s}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=p(p({},i),h.getChildContext())),y||null==h.getSnapshotBeforeUpdate||(k=h.getSnapshotBeforeUpdate(b,w)),F=null!=d&&d.type===v&&null==d.key?d.props.children:d,E(e,Array.isArray(F)?F:[F],n,t,i,l,_,a,s,c),h.base=n.__e,n.__h=null,h.__h.length&&a.push(h),x&&(h.__E=h.__=null),h.__e=!1}else null==_&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=function(e,n,t,r,i,l,_,a){var s,c,p,d=t.props,h=n.props,y=n.type,v=0;if("svg"===y&&(i=!0),null!=l)for(;v<l.length;v++)if((s=l[v])&&"setAttribute"in s==!!y&&(y?s.localName===y:3===s.nodeType)){e=s,l[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),l=null,a=!1}if(null===y)d===h||a&&e.data===h||(e.data=h);else{if(l=l&&o.call(e.childNodes),c=(d=t.props||u).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!a){if(null!=l)for(d={},v=0;v<e.attributes.length;v++)d[e.attributes[v].name]=e.attributes[v].value;(p||c)&&(p&&(c&&p.__html==c.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,n,t,o,r){var i;for(i in t)"children"===i||"key"===i||i in n||O(e,i,null,t[i],o);for(i in n)r&&"function"!=typeof n[i]||"children"===i||"key"===i||"value"===i||"checked"===i||t[i]===n[i]||O(e,i,n[i],t[i],o)}(e,h,d,i,a),p)n.__k=[];else if(v=n.props.children,E(e,Array.isArray(v)?v:[v],n,t,r,i&&"foreignObject"!==y,l,_,l?l[0]:t.__k&&g(t,0),a),null!=l)for(v=l.length;v--;)null!=l[v]&&f(l[v]);a||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===y&&!v||"option"===y&&v!==d.value)&&O(e,"value",v,d.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&O(e,"checked",v,d.checked,!1))}return e}(t.__e,n,t,i,l,_,a,c);(d=r.diffed)&&d(n)}catch(e){n.__v=null,(c||null!=_)&&(n.__e=s,n.__h=!!c,_[_.indexOf(s)]=null),r.__e(e,n,t)}}function P(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function R(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function U(e,n,t){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||R(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&U(o[i],n,"function"!=typeof e.type);t||null==e.__e||f(e.__e),e.__e=e.__d=void 0}function N(e,n,t){return this.constructor(e,t)}function D(e,n,t){var i,l,_;r.__&&r.__(e,n),l=(i="function"==typeof t)?null:t&&t.__k||n.__k,_=[],F(n,e=(!i&&t||n).__k=d(v,null,[e]),l||u,u,void 0!==n.ownerSVGElement,!i&&t?[t]:l?null:n.firstChild?o.call(n.childNodes):null,_,!i&&t?t:l?l.__e:n.firstChild,i),P(_,e)}function j(e,n){D(e,n,j)}function L(e,n,t){var r,i,l,_=p({},e.props);for(l in n)"key"==l?r=n[l]:"ref"==l?i=n[l]:_[l]=n[l];return arguments.length>2&&(_.children=arguments.length>3?o.call(arguments,2):t),h(e.type,_,r||e.key,i||e.ref,null)}function M(e,n){var t={__c:n="__cC"+a++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(w)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}o=s.slice,r={__e:function(e,n,t,o){for(var r,i,l;n=n.__;)if((r=n.__c)&&!r.__)try{if((i=r.constructor)&&null!=i.getDerivedStateFromError&&(r.setState(i.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,o||{}),l=r.__d),l)return r.__E=r}catch(n){e=n}throw e}},i=0,m.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},t),this.props)),e&&p(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),w(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),w(this))},m.prototype.render=v,l=[],k.__r=0,a=0})),r.register("cffqS",(function(e,n){e.exports=r("aO51g")(r("ai42B").getBundleURL("d3Hd2")+r("gTwGg").resolve("1Aptr")).then((()=>r("dzXN3")))})),r.register("aO51g",(function(e,n){"use strict";var t=r("b5e3t");e.exports=t((function(e){return new Promise((function(n,t){var o=document.getElementsByTagName("script");if([].concat(o).some((function(n){return n.src===e})))n();else{var r=document.createElement("link");r.href=e,r.rel="preload",r.as="script",document.head.appendChild(r);var i=document.createElement("script");i.async=!0,i.type="text/javascript",i.src=e,i.onerror=function(n){var o=new TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(n.message));i.onerror=i.onload=null,i.remove(),t(o)},i.onload=function(){i.onerror=i.onload=null,n()},document.getElementsByTagName("head")[0].appendChild(i)}}))}))})),r.register("b5e3t",(function(e,n){"use strict";var t={},o={},r={};function i(e){switch(e){case"preload":return o;case"prefetch":return r;default:return t}}e.exports=function(e,n){return function(t){var o=i(n);return o[t]?o[t]:o[t]=e.apply(null,arguments).catch((function(e){throw delete o[t],e}))}}})),r.register("ai42B",(function(n,t){var o;e(n.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var n=r[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=n),n}})),r("gTwGg").register(JSON.parse('{"d3Hd2":"index.e7bcb679.js","1Aptr":"app.3bab1789.js","jVxDu":"image-decode.c36f087c.js","gWVwI":"506px-1665_Girl_with_a_Pearl_Earring.c7325ce3.jpg","7QIhG":"bayer16.8fa82888.png","9fYsd":"bayer2.f59bcd4b.png","g0DZ7":"bayer4.bae2e2a4.png","5kSpn":"bayer8.0b9c6e85.png","6Dnb7":"checker2.33dbb019.png","jBsp4":"diagonals4.ef91deab.png","6Xk58":"index.bd45d3a3.css"}'));var i=r("53Owe");i=r("53Owe");"undefined"!=typeof window&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.10.6",i.options,{Fragment:i.Fragment,Component:i.Component});var l={};function _(e){return e.type===i.Fragment?"Fragment":"function"==typeof e.type?e.type.displayName||e.type.name:"string"==typeof e.type?e.type:"#text"}var a=[],u=[];function s(){return a.length>0?a[a.length-1]:null}var c=!1;function p(e){return"function"==typeof e.type&&e.type!=i.Fragment}function f(e){for(var n=[e],t=e;null!=t.__o;)n.push(t.__o),t=t.__o;return n.reduce((function(e,n){e+="  in "+_(n);var t=n.__source;return t?e+=" (at "+t.fileName+":"+t.lineNumber+")":c||(c=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),e+"\n"}),"")}var d="function"==typeof WeakMap,h=i.Component.prototype.setState;i.Component.prototype.setState=function(e,n){return null==this.__v&&null==this.state&&console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n'+f(s())),h.call(this,e,n)};var y=i.Component.prototype.forceUpdate;function v(e){var n=e.props,t=_(e),o="";for(var r in n)if(n.hasOwnProperty(r)&&"children"!==r){var i=n[r];"function"==typeof i&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),o+=" "+r+"="+JSON.stringify(i)}var l=n.children;return"<"+t+o+(l&&l.length?">..</"+t+">":" />")}i.Component.prototype.forceUpdate=function(e){return null==this.__v?console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n'+f(s())):null==this.__P&&console.warn('Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n'+f(this.__v)),y.call(this,e)},function(){!function(){var e=i.options.__b,n=i.options.diffed,t=i.options.__,o=i.options.vnode,r=i.options.__r;i.options.diffed=function(e){p(e)&&u.pop(),a.pop(),n&&n(e)},i.options.__b=function(n){p(n)&&a.push(n),e&&e(n)},i.options.__=function(e,n){u=[],t&&t(e,n)},i.options.vnode=function(e){e.__o=u.length>0?u[u.length-1]:null,o&&o(e)},i.options.__r=function(e){p(e)&&u.push(e),r&&r(e)}}();var e=!1,n=i.options.__b,t=i.options.diffed,o=i.options.vnode,r=i.options.__e,s=i.options.__,c=i.options.__h,h=d?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,y=[];i.options.__e=function(e,n,t,o){if(n&&n.__c&&"function"==typeof e.then){var i=e;e=new Error("Missing Suspense. The throwing component was: "+_(n));for(var l=n;l;l=l.__)if(l.__c&&l.__c.__c){e=i;break}if(e instanceof Error)throw e}try{(o=o||{}).componentStack=f(n),r(e,n,t,o),"function"!=typeof e.then&&setTimeout((function(){throw e}))}catch(e){throw e}},i.options.__=function(e,n){if(!n)throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");var t;switch(n.nodeType){case 1:case 11:case 9:t=!0;break;default:t=!1}if(!t){var o=_(e);throw new Error("Expected a valid HTML node as a second argument to render.\tReceived "+n+" instead: render(<"+o+" />, "+n+");")}s&&s(e,n)},i.options.__b=function(t){var o=t.type,r=function e(n){return n?"function"==typeof n.type?e(n.__):n:{}}(t.__);if(e=!0,void 0===o)throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports"+v(t)+"\n\n"+f(t));if(null!=o&&"object"==typeof o){if(void 0!==o.__k&&void 0!==o.__e)throw new Error("Invalid type passed to createElement(): "+o+"\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My"+_(t)+" = "+v(o)+";\n  let vnode = <My"+_(t)+" />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n"+f(t));throw new Error("Invalid type passed to createElement(): "+(Array.isArray(o)?"array":o))}if("thead"!==o&&"tfoot"!==o&&"tbody"!==o||"table"===r.type?"tr"===o&&"thead"!==r.type&&"tfoot"!==r.type&&"tbody"!==r.type&&"table"!==r.type?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+v(t)+"\n\n"+f(t)):"td"===o&&"tr"!==r.type?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+v(t)+"\n\n"+f(t)):"th"===o&&"tr"!==r.type&&console.error("Improper nesting of table. Your <th> should have a <tr>."+v(t)+"\n\n"+f(t)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+v(t)+"\n\n"+f(t)),void 0!==t.ref&&"function"!=typeof t.ref&&"object"!=typeof t.ref&&!("$$typeof"in t))throw new Error('Component\'s "ref" property should be a function, or an object created by createRef(), but got ['+typeof t.ref+"] instead\n"+v(t)+"\n\n"+f(t));if("string"==typeof t.type)for(var i in t.props)if("o"===i[0]&&"n"===i[1]&&"function"!=typeof t.props[i]&&null!=t.props[i])throw new Error("Component's \""+i+'" property should be a function, but got ['+typeof t.props[i]+"] instead\n"+v(t)+"\n\n"+f(t));if("function"==typeof t.type&&t.type.propTypes){if("Lazy"===t.type.displayName&&h&&!h.lazyPropTypes.has(t.type)){var a="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var u=t.type();h.lazyPropTypes.set(t.type,!0),console.warn(a+"Component wrapped in lazy() is "+_(u))}catch(e){console.warn(a+"We will log the wrapped component's name once it is loaded.")}}var s=t.props;t.type.__f&&delete(s=function(e,n){for(var t in n)e[t]=n[t];return e}({},s)).ref,function(e,n,t,o,r){Object.keys(e).forEach((function(t){var i;try{i=e[t](n,t,o,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i.message in l||(l[i.message]=!0,console.error("Failed prop type: "+i.message+(r&&"\n"+r()||"")))}))}(t.type.propTypes,s,0,_(t),(function(){return f(t)}))}n&&n(t)},i.options.__h=function(n,t,o){if(!n||!e)throw new Error("Hook can only be invoked from render methods.");c&&c(n,t,o)};var m=function(e,n){return{get:function(){var t="get"+e+n;y&&y.indexOf(t)<0&&(y.push(t),console.warn("getting vnode."+e+" is deprecated, "+n))},set:function(){var t="set"+e+n;y&&y.indexOf(t)<0&&(y.push(t),console.warn("setting vnode."+e+" is not allowed, "+n))}}},g={nodeName:m("nodeName","use vnode.type"),attributes:m("attributes","use vnode.props"),children:m("children","use vnode.props.children")},b=Object.create({},g);i.options.vnode=function(e){var n=e.props;if(null!==e.type&&null!=n&&("__source"in n||"__self"in n)){var t=e.props={};for(var r in n){var i=n[r];"__source"===r?e.__source=i:"__self"===r?e.__self=i:t[r]=i}}e.__proto__=b,o&&o(e)},i.options.diffed=function(n){if(n.__k&&n.__k.forEach((function(e){if(e&&void 0===e.type){delete e.__,delete e.__b;var t=Object.keys(e).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+t+"}.\n\n"+f(n))}})),e=!1,t&&t(n),null!=n.__k)for(var o=[],r=0;r<n.__k.length;r++){var i=n.__k[r];if(i&&null!=i.key){var l=i.key;if(-1!==o.indexOf(l)){console.error('Following component has two or more children with the same key attribute: "'+l+'". This may cause glitches and misbehavior in rendering process. Component: \n\n'+v(n)+"\n\n"+f(n));break}o.push(l)}}}}();const m=document.createElement("p");m.innerText="Loading...",document.body.appendChild(m),requestAnimationFrame((async()=>{try{await r("cffqS"),m.remove()}catch(e){document.body.innerHTML="<p>Something went wrong. Sorry :(</p>",console.error(e)}}))}();