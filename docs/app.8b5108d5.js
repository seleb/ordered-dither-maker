function t(t){return t&&t.__esModule?t.default:t}function e(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n=r.parcelRequire0bde;n.register("k5Y7S",function(e,r){var o=n("9BXUG"),i=n("10mKg");n("iyWOw");var s=n("AMKEl"),a=n("iUhIu"),u=n("4AnSY"),l=n("36nq7"),i=n("10mKg"),c=n("4RLZr"),p=n("eFTSY"),h=n("ijwcO"),f=n("kTiDX"),d=n("66iJJ"),y=n("hRRxs"),g=n("d6gG7"),m=n("jKmnw"),b=n("laTDe"),_=n("jPTrc"),v=n("6Ikiy"),w=n("fLtg9"),E=n("jd3e4"),T=n("dD7OB"),x=n("aXXGx"),O=n("97Yww");let S=new/*@__PURE__*/(t(u))("306bf363cfbce3604dbbf827bd5f7398"),A=document.createElement("canvas"),P=A.getContext("2d"),k=document.createElement("canvas"),D=(0,f.default)(k),I=new f.Shader(O.vertex,h.fragment),C=new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),N=D.createBuffer();D.bindBuffer(D.ARRAY_BUFFER,N),D.bufferData(D.ARRAY_BUFFER,C,D.STATIC_DRAW);// cache GL attribute/uniform locations
let R={position:D.getAttribLocation(I.program,"position"),texPreview:D.getUniformLocation(I.program,"texPreview"),texDither:D.getUniformLocation(I.program,"texDither"),resolution:D.getUniformLocation(I.program,"resolution"),ditherSize:D.getUniformLocation(I.program,"ditherSize"),scale:D.getUniformLocation(I.program,"scale"),posterize:D.getUniformLocation(I.program,"posterize"),grayscale:D.getUniformLocation(I.program,"grayscale"),contrast:D.getUniformLocation(I.program,"contrast"),brightness:D.getUniformLocation(I.program,"brightness")};// misc. GL setup
D.enableVertexAttribArray(R.position),I.useProgram(),D.vertexAttribPointer(R.position,2,D.FLOAT,!1,0,0),D.clearColor(0,0,0,0),D.uniform1i(R.texPreview,0),D.uniform1i(R.texDither,1);let L=new f.Texture(new Image,0,!1),j=new f.Texture(new Image,1,!0);function M(){D.drawArrays(D.TRIANGLES,0,C.length/2)}function F(){A.toBlob(a.saveAs)}function B(){M(),k.toBlob(a.saveAs)}(0,i.render)(/*#__PURE__*/(0,o.jsx)(function(){let[e,r]=(0,c.useState)(/*@__PURE__*/t(b)),[n,a]=(0,c.useState)(/*@__PURE__*/t(y)),[u,h]=(0,c.useState)(/*@__PURE__*/t(y)),[f,O]=(0,c.useState)(!1),[I,C]=(0,c.useState)(4),[N,U]=(0,c.useState)(4),[G,V]=(0,c.useState)(4),[q,H]=(0,c.useReducer)((t,e)=>{switch(e.type){case"set":return e.payload;case"set-layer":{let[r,n]=e.payload,o=JSON.parse(JSON.stringify(t));return o[r]=n,o}case"set-pixel":{let[r,n,o,i]=e.payload,s=JSON.parse(JSON.stringify(t));return s[r][o][n]=i,s}}},Array(I).fill(0).map(()=>Array(G).fill(0).map(()=>Array(N).fill(!1)))),[z,X]=(0,c.useState)(0),[W,Y]=(0,c.useState)(1),[K,$]=(0,c.useState)(!0),[Q,Z]=(0,c.useState)(1),[J,tt]=(0,c.useState)(1),[te,tr]=(0,c.useState)(2),[tn,to]=(0,c.useState)(!1),ti=(0,c.useCallback)(t=>H({type:"set",payload:t}),[H]),ts=(0,c.useCallback)(t=>H({type:"set-layer",payload:[z,t]}),[H,z]),ta=(0,c.useCallback)((t,e,r)=>H({type:"set-pixel",payload:[z,t,e,r]}),[H,z]),tu=(0,c.useCallback)(()=>to(!1),[]),tl=(0,c.useCallback)(()=>to(!0),[]),tc=(0,c.useCallback)(t=>{if(!t.currentTarget?.files?.[0])return;let e=new FileReader;e.onload=function(){r(e.result?.toString()??"")},e.readAsDataURL(t.currentTarget.files[0])},[]),tp=(0,c.useCallback)(t=>{if(!t.currentTarget?.files?.[0])return;O(!0),a(""),h("");let e=new FileReader;e.onload=function(){a(e.result?.toString()??""),tt(1),Z(1),O(!1)},e.readAsDataURL(t.currentTarget.files[0])},[]),th=(0,c.useCallback)(async()=>{a(""),h(""),O(!0);try{let{body:{photoset:{count_photos:t}}}=await S.photosets.getInfo({photoset_id:"72157641858423503",user_id:"12403504@N02"}),{body:{photoset:{photo:[{id:e}]}}}=await S.photosets.getPhotos({photoset_id:"72157641858423503",user_id:"12403504@N02",per_page:1,page:Math.floor(Math.random()*t),media:"photos"}),{body:r}=await S.photos.getSizes({photo_id:e});a(r.sizes.size.filter((t,e)=>0===e||t.width<k.parentElement?.clientWidth).pop().source),tt(1),Z(2),h(`https://flickr.com/photos/britishlibrary/${e}`)}catch(t){console.error(t),window.alert("Failed to load random image; see console for details")}finally{O(!1)}},[]),tf=(0,c.useCallback)(t=>{r(t.currentTarget.value)},[]);(0,c.useEffect)(()=>{e&&async function(){let{width:n,height:o,data:i}=await (0,l.getPixels)(e);if(n*o>512){let t=window.confirm('This image is larger than recommended, and may slow down your browser if you continue.\n\nAre you sure this is a dither texture and not a preview image? Preview images should be uploaded in the second "import" field below.');if(!t)return}let a=Array(o).fill(0).map(()=>Array(n).fill(0));for(let t=0;t<o;++t)for(let e=0;e<n;++e)a[t][e]=i[(e+t*n)*4],a[t][e]&&(a[t][e]=a[t][e]+1);let u=/*@__PURE__*/t(s)([...new Set(a.flat()),256])||1;a=a.map(t=>t.map(t=>t/u));let c=256/u;X(0),U(n),V(o),C(c),ti(Array(c).fill(0).map((t,e)=>Array(o).fill(0).map((t,r)=>Array(n).fill(0).map((t,n)=>a[r][n]===e+1)))),r("")}()},[e]);let td=(0,c.useCallback)(()=>{ti(Array(q.length).fill(0).map(()=>Array(q[0].length).fill(0).map(()=>Array(q[0][0].length).fill(!1))))},[q]);(0,c.useLayoutEffect)(()=>{// restrict layer to available layers
X(Math.min(I-1,z));// update dither state to reflect dimensions
let t=Array(I).fill(0).map((t,e)=>Array(G).fill(0).map((t,r)=>Array(N).fill(0).map((t,n)=>q[e]?.[r]?.[n]||!1)));ti(t)},[N,G,I]);// make a map of which spaces are required due to state of layers underneath
let ty=(0,c.useMemo)(()=>Array(q[0].length).fill(0).map((t,e)=>Array(q[0][0].length).fill(0).map((t,r)=>q.slice(0,z).some(t=>t[e][r]))),[q,z]);// convert dither state to texture
(0,c.useEffect)(()=>{let t=q.length,e=q[0].length,r=q[0][0].length;A.width=r,A.height=e,P.fillStyle="rgb(0,0,0)",P.fillRect(0,0,r,e);for(let n=0;n<e;++n)for(let e=0;e<r;++e){let r=Math.max(0,(q.findIndex(t=>t[n][e])+1)/t*256-1);P.fillStyle=`rgb(${r}, ${r}, ${r})`,P.fillRect(e,n,1,1)}j.source=A,j.update(),j.bind(),D.uniform2f(R.ditherSize,r,e),M()},[q]),// update preview texture
(0,c.useEffect)(()=>{let t=L.source;t.crossOrigin="anonymous",t.onerror=t.onload=()=>{L.source=t,L.update(),L.bind(),k.width=t.naturalWidth,k.height=t.naturalHeight,D.viewport(0,0,k.width,k.height),D.uniform2f(R.resolution,k.width,k.height),M()},t.src=n||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="},[n]),// put preview and output canvas in document
(0,c.useEffect)(()=>{document.querySelector("#preview-container")?.appendChild(k),document.querySelector("#output-container")?.appendChild(A)},[]),// update posterization level
(0,c.useEffect)(()=>{D.uniform1f(R.posterize,W),M()},[W]),// update grayscale
(0,c.useEffect)(()=>{D.uniform1f(R.grayscale,K?1:0),M()},[K]),// update scale
(0,c.useEffect)(()=>{D.uniform1f(R.scale,te),M()},[te]),// update contrast
(0,c.useEffect)(()=>{D.uniform1f(R.contrast,Q),M()},[Q]),// update brightness
(0,c.useEffect)(()=>{D.uniform1f(R.brightness,J),M()},[J]);let[tg,tm]=(0,c.useState)(.5),tb=(0,c.useCallback)(t=>{let e=t.currentTarget.parentElement;function r(t){e&&tm((t.clientY-20)/(e.clientHeight-40))}window.addEventListener("pointermove",r),window.addEventListener("pointerup",function t(){window.removeEventListener("pointermove",r),window.removeEventListener("pointerup",t),document.body.style.cursor=""}),document.body.style.cursor="ns-resize"},[]);// change layer with right/left arrow keys
(0,c.useEffect)(()=>{function t(t){(document.activeElement===document.body||document.querySelector(".grid")?.contains(document.activeElement))&&("ArrowRight"===t.key&&z<I-1?X(z+1):"ArrowLeft"===t.key&&z>0&&X(z-1))}return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[z,I]);let t_=(0,c.useCallback)(()=>{let t=document.documentElement.dataset.theme||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme="dark"===t?"light":"dark"},[]);return/*#__PURE__*/(0,o.jsxs)(i.Fragment,{children:[/*#__PURE__*/(0,o.jsxs)("main",{children:[/*#__PURE__*/(0,o.jsxs)("section",{id:"controls",children:[/*#__PURE__*/(0,o.jsx)("h1",{className:"fill",children:/*@__PURE__*/t(p).name}),/*#__PURE__*/(0,o.jsx)("hr",{}),/*#__PURE__*/(0,o.jsx)("h2",{children:"threshold map options"}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"source-file",title:"import a previously-generated threshold map",children:"import:"}),/*#__PURE__*/(0,o.jsx)("input",{id:"source-file",type:"file",accept:"image/*",onChange:tc}),/*#__PURE__*/(0,o.jsxs)("details",{className:"fill",children:[/*#__PURE__*/(0,o.jsx)("summary",{children:"presets"}),/*#__PURE__*/(0,o.jsxs)("ul",{children:[/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(v),onClick:tf,children:"checker"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(w),onClick:tf,children:"diagonals"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(m),onClick:tf,children:"bayer2"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(b),onClick:tf,children:"bayer4"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(_),onClick:tf,children:"bayer8"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",value:/*@__PURE__*/t(g),onClick:tf,children:"bayer16"})}),/*#__PURE__*/(0,o.jsx)("li",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",onClick:td,children:"clear"})})]})]}),/*#__PURE__*/(0,o.jsx)("hr",{}),/*#__PURE__*/(0,o.jsxs)("label",{htmlFor:"layers",title:"layers in generated texture (non-powers of 2 will expand to 256 on reimport)",children:[Math.log2(I)%1!=0&&"(!) "," layers:"]}),/*#__PURE__*/(0,o.jsx)("input",{id:"layers",type:"number",min:1,max:256,step:1,value:I,onChange:(0,x.useInt)(C)}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"width",title:"width of generated texture",children:"width:"}),/*#__PURE__*/(0,o.jsx)("input",{id:"width",type:"number",min:1,step:1,value:N,onChange:(0,x.useInt)(U)}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"height",title:"height of generated texture",children:"height:"}),/*#__PURE__*/(0,o.jsx)("input",{id:"height",type:"number",min:1,step:1,value:G,onChange:(0,x.useInt)(V)}),/*#__PURE__*/(0,o.jsx)("hr",{}),/*#__PURE__*/(0,o.jsx)(d.Grid,{immediate:N*G<1024,value:q[z],locked:ty,setAll:ts,setOne:ta}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"layer",title:"layer to draw on (pixels filled due to layers underneath are shown grayed out)",children:"layer:"}),/*#__PURE__*/(0,o.jsx)(T.Range,{id:"layer",min:0,max:I-1,step:1,value:z,setValue:X}),/*#__PURE__*/(0,o.jsx)("hr",{}),/*#__PURE__*/(0,o.jsx)("h2",{children:"preview options"}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"preview-file",title:"import a custom preview image",children:"import:"}),/*#__PURE__*/(0,o.jsx)("input",{disabled:f,id:"preview-file",type:"file",accept:"image/*",onChange:tp}),/*#__PURE__*/(0,o.jsx)("button",{type:"button",title:"load a random preview image",disabled:f,className:"fill",onClick:th,children:"random"}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"grayscale",title:"whether to convert to grayscale before applying dither",children:"grayscale:"}),/*#__PURE__*/(0,o.jsx)("input",{id:"grayscale",type:"checkbox",checked:K,onChange:(0,x.useCheckbox)($)}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"posterize",title:"level of posterization to apply before dither; higher values mean more colours in the final image",children:"steps:"}),/*#__PURE__*/(0,o.jsx)(T.Range,{id:"posterize",min:1,max:32,step:1,value:W,setValue:Y}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"scale",title:"size of pixels in preview",children:"pixel scale:"}),/*#__PURE__*/(0,o.jsx)(T.Range,{id:"scale",min:1,max:8,step:1,value:te,setValue:tr}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"brightness",title:"brightness to apply before dither",children:"brightness:"}),/*#__PURE__*/(0,o.jsx)(T.Range,{id:"brightness",min:0,max:2,step:.01,value:J,setValue:tt}),/*#__PURE__*/(0,o.jsx)("label",{htmlFor:"contrast",title:"contrast to apply before dither",children:"contrast:"}),/*#__PURE__*/(0,o.jsx)(T.Range,{id:"contrast",min:1,max:9.99,step:.01,value:Q,setValue:Z})]}),/*#__PURE__*/(0,o.jsxs)("section",{id:"preview",children:[/*#__PURE__*/(0,o.jsxs)("figure",{style:{flex:tg},children:[/*#__PURE__*/(0,o.jsxs)("figcaption",{children:["output"," ",/*#__PURE__*/(0,o.jsx)("button",{type:"button",title:"save generated threshold map",onClick:F,children:"save"})]}),/*#__PURE__*/(0,o.jsx)("div",{id:"output-container"})]}),/*#__PURE__*/(0,o.jsx)("hr",{onPointerDown:tb}),/*#__PURE__*/(0,o.jsxs)("figure",{style:{flex:1-tg},id:"preview-figure",children:[/*#__PURE__*/(0,o.jsxs)("figcaption",{children:["preview"," ",/*#__PURE__*/(0,o.jsx)("button",{type:"button",title:"save current preview image with dither applied",onClick:B,children:"save"})," ",u&&/*#__PURE__*/(0,o.jsx)("a",{href:u,target:"_blank",rel:"noopener noreferrer",title:"Original","aria-label":"Original",children:"\uD83D\uDD0D"})]}),/*#__PURE__*/(0,o.jsx)("div",{id:"preview-container"})]})]})]}),/*#__PURE__*/(0,o.jsxs)("footer",{children:[/*#__PURE__*/(0,o.jsx)("button",{type:"button",id:"toggle-theme",onClick:t_,title:"Toggle theme",children:"Toggle theme"}),/*#__PURE__*/(0,o.jsx)("button",{type:"button",onClick:tl,children:"about"})]}),tn&&/*#__PURE__*/(0,o.jsxs)(E.Modal,{close:tu,children:[/*#__PURE__*/(0,o.jsxs)("h2",{children:[/*@__PURE__*/t(p).name," v",/*@__PURE__*/t(p).version]}),/*#__PURE__*/(0,o.jsxs)("p",{children:["This tool allows you to create textures that can be used as threshold maps for"," ",/*#__PURE__*/(0,o.jsx)("a",{href:"https://en.wikipedia.org/wiki/Ordered_dithering",target:"_blank",rel:"noopener noreferrer",children:"ordered dithering"}),", a technique usually implemented using programmatically generated Bayer matrices."]}),/*#__PURE__*/(0,o.jsxs)("p",{children:['The drawing grid allows you to visualize each "layer" of the threshold map, and to build up the final texture additively. The preview area applies a basic posterize + dither through post-processing using the generated texture (source available'," ",/*#__PURE__*/(0,o.jsx)("a",{href:"https://github.com/seleb/ordered-dither-maker/blob/main/src/app/fragment.ts",target:"_blank",rel:"noopener noreferrer",children:"here"}),")."]}),/*#__PURE__*/(0,o.jsx)("p",{children:"Tips:"}),/*#__PURE__*/(0,o.jsxs)("ul",{children:[/*#__PURE__*/(0,o.jsx)("li",{children:"Drag the bar between the output and preview sections to resize"}),/*#__PURE__*/(0,o.jsxs)("li",{children:["Use ",/*#__PURE__*/(0,o.jsx)("kbd",{children:"ArrowLeft"})," and ",/*#__PURE__*/(0,o.jsx)("kbd",{children:"ArrowRight"})," to change the current layer while drawing"]})]}),/*#__PURE__*/(0,o.jsxs)("p",{children:["Randomized preview images sourced from a"," ",/*#__PURE__*/(0,o.jsx)("a",{href:"https://www.flickr.com/photos/britishlibrary/albums/72157641858423503",target:"_blank",rel:"noopener noreferrer",children:"British Library collection"})," ","of public domain works."]}),/*#__PURE__*/(0,o.jsx)("nav",{children:/*#__PURE__*/(0,o.jsx)("button",{type:"button",onClick:tu,children:"close"})})]})]})},{}),document.body)}),n.register("9BXUG",function(t,r){e(t.exports,"jsx",function(){return s}),e(t.exports,"jsxs",function(){return s}),e(t.exports,"Fragment",function(){return n("10mKg").Fragment});var o=n("10mKg"),i=0;function s(t,e,r,n,s,a){var u,l,c={};for(l in e)"ref"==l?u=e[l]:c[l]=e[l];var p={type:t,props:c,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--i,__source:s,__self:a};if("function"==typeof t&&(u=t.defaultProps))for(l in u)void 0===c[l]&&(c[l]=u[l]);return o.options.vnode&&(0,o.options).vnode(p),p}}),n.register("iyWOw",function(t,e){var r,n,o,i,s,a,u,l;o=(r="undefined"!=typeof self&&self||"undefined"!=typeof window&&window||t.exports.content||t.exports).Uint8Array,s=(i=r.HTMLCanvasElement)&&i.prototype,a=/\s*;\s*base64\s*(?:;|$)/i,u="toDataURL",l=function(t){for(var e,r,i,s=t.length,a=new o(s/4*3|0),u=0,l=0,c=[0,0],p=0,h=0;s--;)255!==(e=n[(r=t.charCodeAt(u++))-43])&&e!==i&&(c[1]=c[0],c[0]=r,h=h<<6|e,4==++p&&(a[l++]=h>>>16,61/* padding character */!==c[1]&&(a[l++]=h>>>8),61/* padding character */!==c[0]&&(a[l++]=h),p=0));// 2/3 chance there's going to be some null bytes at the end, but that
// doesn't really matter with most image formats.
// If it somehow matters for you, truncate the buffer up outptr.
return a},o&&(n=new o([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),!i||s.toBlob&&s.toBlobHD||(s.toBlob||(s.toBlob=function(t,e/*, ...args*/){if(e||(e="image/png"),this.mozGetAsFile){t(this.mozGetAsFile("canvas",e));return}if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(e)){t(this.msToBlob());return}var r,n=Array.prototype.slice.call(arguments,1),i=this[u].apply(this,n),s=i.indexOf(","),c=i.substring(s+1),p=a.test(i.substring(0,s));Blob.fake?(// no reason to decode a data: URI that's just going to become a data URI again
r=new Blob,p?r.encoding="base64":r.encoding="URI",r.data=c,r.size=c.length):o&&(r=p?new Blob([l(c)],{type:e}):new Blob([decodeURIComponent(c)],{type:e})),t(r)}),!s.toBlobHD&&s.toDataURLHD?s.toBlobHD=function(){u="toDataURLHD";var t=this.toBlob();return u="toDataURL",t}:s.toBlobHD=s.toBlob)}),n.register("AMKEl",function(t,e){var r=n("9t6ag"),o=n("49Fjk"),i=n("4eLiM");// FUNCTIONS //
/**
* FUNCTION: gcd( a, b )
*	Computes the greatest common divisor of two integers `a` and `b`, using the binary GCD algorithm.
*
* @param {Number} a - integer
* @param {Number} b - integer
* @returns {Number} greatest common divisor
*/function s(t,e){var r,n=1;// Simple cases:
if(0===t)return e;if(0===e)return t;// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
for(;t%2==0&&e%2==0;)t/=2,e/=2,n*=2;// Reduce `a` to an odd number...
for(;t%2==0;)t/=2;// right shift
// Henceforth, `a` is always odd...
for(;e;){// Remove all factors of 2 in `b`, as they are not common...
for(;e%2==0;)e/=2;// right shift
t>e&&(r=e,e=t,t=r),e-=t}// Restore common factors of 2...
return n*t}// end FUNCTION gcd()
/**
* FUNCTION: bitwise( a, b )
*	Computes the greatest common divisor of two integers `a` and `b`, using the binary GCD algorithm and bitwise operations.
*
* @param {Number} a - safe integer
* @param {Number} b - safe integer
* @returns {Number} greatest common divisor
*/function a(t,e){var r,n=0;// Simple cases:
if(0===t)return e;if(0===e)return t;// Reduce `a` and/or `b` to odd numbers and keep track of the greatest power of 2 dividing both `a` and `b`...
for(;(1&t)==0&&(1&e)==0;)t>>>=1,e>>>=1,n++;// Reduce `a` to an odd number...
for(;(1&t)==0;)t>>>=1;// right shift
// Henceforth, `a` is always odd...
for(;e;){// Remove all factors of 2 in `b`, as they are not common...
for(;(1&e)==0;)e>>>=1;// right shift
t>e&&(r=e,e=t,t=r),e-=t}// Restore common factors of 2...
return t<<n}// end FUNCTION bitwise()
// EXPORTS //
t.exports=// GREATEST COMMON DIVISOR //
/**
* FUNCTION: compute( arr[, clbk] )
*	Computes the greatest common divisor.
*
* @param {Number[]|Number} arr - input array of integers
* @param {Function|Number} [clbk] - accessor function for accessing array values
* @returns {Number|Null} greatest common divisor or null
*/function(){var t,e,n,u,l,c,p,h=arguments.length;for(p=0,// Copy the input arguments to an array...
t=Array(h);p<h;p++)t[p]=arguments[p];// Have we been provided with integer arguments?
if(o(t)){if(2===h)return(l=t[0],c=t[1],l<0&&(l=-l),c<0&&(c=-c),l<=2147483647&&c<=2147483647)?a(l,c):s(l,c);n=t}else if(r(t[0])){if(h>1){if(n=t[0],!i(e=t[1]))throw TypeError("gcd()::invalid input argument. Accessor must be a function. Value: `"+e+"`.")}else n=t[0]}else throw TypeError("gcd()::invalid input argument. Must provide an array of integers. Value: `"+t[0]+"`.");// Check if a sufficient number of values have been provided...
if((u=n.length)<2)return null;// If an accessor is provided, extract the array values...
if(e){for(p=0,l=Array(u);p<u;p++)l[p]=e(n[p],p);n=l}// Given an input array, ensure all array values are integers...
if(h<3&&!o(n))throw TypeError("gcd()::invalid input argument. Accessed array values must be integers. Value: `"+n+"`.");// Convert any negative integers to positive integers...
for(p=0;p<u;p++)(l=n[p])<0&&(n[p]=-l);for(p=1,// Exploit the fact that the gcd is an associative function...
l=n[0];p<u;p++)l=(c=n[p])<=2147483647&&l<=2147483647?a(l,c):s(l,c);return l}// end FUNCTION compute()
}),n.register("9t6ag",function(t,e){// EXPORTS //
t.exports=Array.isArray||/**
* FUNCTION: isArray( value )
*	Validates if a value is an array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is an array
*/function(t){return"[object Array]"===Object.prototype.toString.call(t)}// end FUNCTION isArray()
}),n.register("49Fjk",function(t,e){var r=n("9t6ag"),o=n("dmqvb");// EXPORTS //
t.exports=// IS INTEGER ARRAY //
/**
* FUNCTION: isIntegerArray( value )
*	Validates if a value is an integer array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating if a value is an integer array
*/function(t){var e;if(!r(t)||!(e=t.length))return!1;for(var n=0;n<e;n++)if(!o(t[n]))return!1;return!0}// end FUNCTION isIntegerArray()
}),n.register("dmqvb",function(t,e){var r=n("4B7d3");// EXPORTS //
t.exports=// ISINTEGER //
/**
* FUNCTION: isInteger( value )
*	Validates if a value is an integer.
*
* @param {Number} value - value to be validated
* @returns {Boolean} boolean indicating whether value is an integer
*/function(t){return r(t)&&t%1==0}// end FUNCTION isInteger()
}),n.register("4B7d3",function(t,e){// EXPORTS //
t.exports=/**
* FUNCTION: isNumber( value )
*	Validates if a value is a number.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a number
*/function(t){return("number"==typeof t||"[object Number]"===Object.prototype.toString.call(t))&&t.valueOf()===t.valueOf()}// end FUNCTION isNumber()
}),n.register("4eLiM",function(t,e){// EXPORTS //
t.exports=/**
* FUNCTION: isFunction( value )
*	Validates if a value is a function.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a function
*/function(t){return"function"==typeof t}// end FUNCTION isFunction()
}),n.register("iUhIu",function(t,e){var n;t.exports,n=function(){function e(t,e,r){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){a(n.response,e,r)},n.onerror=function(){console.error("could not download file")},n.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function o(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r&&r.global===r?r:void 0,s=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(t,r,s){var a=i.URL||i.webkitURL,u=document.createElement("a");r=r||t.name||"download",u.download=r,u.rel="noopener","string"==typeof t?(u.href=t,u.origin===location.origin?o(u):n(u.href)?e(t,r,s):o(u,u.target="_blank")):(u.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(u.href)},4e4),setTimeout(function(){o(u)},0))}:"msSaveOrOpenBlob"in navigator?function(t,r,i){if(r=r||t.name||"download","string"!=typeof t){var s;navigator.msSaveOrOpenBlob((void 0===(s=i)?s={autoBom:!1}:"object"!=typeof s&&(console.warn("Deprecated: Expected third argument to be a object"),s={autoBom:!s}),s.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t),r)}else if(n(t))e(t,r,i);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){o(a)})}}:function(t,r,n,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof t)return e(t,r,n);var a="application/octet-stream"===t.type,u=/constructor/i.test(i.HTMLElement)||i.safari,l=/CriOS\/[\d]+/.test(navigator.userAgent);if((l||a&&u||s)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var t=c.result;t=l?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=t:location=t,o=null},c.readAsDataURL(t)}else{var p=i.URL||i.webkitURL,h=p.createObjectURL(t);o?o.location=h:location.href=h,o=null,setTimeout(function(){p.revokeObjectURL(h)},4e4)}});i.saveAs=a.saveAs=a,t.exports=a},"function"==typeof define&&define.amd?define([],n):n()}),n.register("4AnSY",function(t,e){// Services
/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */(e=t.exports=n("khuGa")).OAuth=n("cgVal"),e.Feeds=n("hPBjW"),e.Upload=n("hUOpE"),e.Replace=n("43e3n")}),n.register("khuGa",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */var r=n("rDKgn"),o=n("9ZOKB"),i=n("9Yp9c");/**
 * Creates a new Flickr REST API client.
 *
 * You **must** pass a superagent plugin or your API key as the first
 * parameter. For methods that don't require authentication, you can simply
 * provide your API key. For methods that do require authentication,
 * use the [OAuth plugin]{@link Flickr.OAuth.createPlugin}.
 *
 * @constructor
 * @param {Function|String} auth An authentication plugin function or an API key
 *
 * @example <caption>Get info about a public photo with your API key</caption>
 *
 * var flickr = new Flickr(process.env.FLICKR_API_KEY);
 *
 * flickr.photos.getInfo({
 *   photo_id: 25825763 // sorry, @dokas
 * }).then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @example <caption>Searching for public photos with your API key</caption>
 *
 * var flickr = new Flickr(process.env.FLICKR_API_KEY);
 *
 * flickr.photos.search({
 *   text: 'doggo'
 * }).then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @example <caption>Authenticate as a user with the OAuth plugin</caption>
 *
 * var flickr = new Flickr(Flickr.OAuth.createPlugin(
 *   process.env.FLICKR_CONSUMER_KEY,
 *   process.env.FLICKR_CONSUMER_SECRET,
 *   process.env.FLICKR_OAUTH_TOKEN,
 *   process.env.FLICKR_OAUTH_TOKEN_SECRET
 * ));
 *
 * flickr.test.login().then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @classdesc
 *
 * All of the [REST API][services/api] methods are available on the
 * [Flickr]{@link Flickr} prototype. Each method accepts a single parameter
 * which is an optional hash of arguments. Refer to the [REST API][services/api]
 * docs for the full list of methods and their supported arguments.
 *
 * | Method | Permissions | Required Arguments |
 * | --- | --- | --- |
 * | [flickr.activity.userComments](https://www.flickr.com/services/api/flickr.activity.userComments.html) | `read` :eyes: |  |
 * | [flickr.activity.userPhotos](https://www.flickr.com/services/api/flickr.activity.userPhotos.html) | `read` :eyes: |  |
 * | [flickr.auth.checkToken](https://www.flickr.com/services/api/flickr.auth.checkToken.html) | `none`  | `auth_token` |
 * | [flickr.auth.getFrob](https://www.flickr.com/services/api/flickr.auth.getFrob.html) | `none`  |  |
 * | [flickr.auth.getFullToken](https://www.flickr.com/services/api/flickr.auth.getFullToken.html) | `none`  | `mini_token` |
 * | [flickr.auth.getToken](https://www.flickr.com/services/api/flickr.auth.getToken.html) | `none`  | `frob` |
 * | [flickr.auth.oauth.checkToken](https://www.flickr.com/services/api/flickr.auth.oauth.checkToken.html) | `none`  | `oauth_token` |
 * | [flickr.auth.oauth.getAccessToken](https://www.flickr.com/services/api/flickr.auth.oauth.getAccessToken.html) | `none`  |  |
 * | [flickr.blogs.getList](https://www.flickr.com/services/api/flickr.blogs.getList.html) | `read` :eyes: |  |
 * | [flickr.blogs.getServices](https://www.flickr.com/services/api/flickr.blogs.getServices.html) | `none`  |  |
 * | [flickr.blogs.postPhoto](https://www.flickr.com/services/api/flickr.blogs.postPhoto.html) | `write` :pencil2: | `photo_id`, `title`, `description` |
 * | [flickr.cameras.getBrandModels](https://www.flickr.com/services/api/flickr.cameras.getBrandModels.html) | `none`  | `brand` |
 * | [flickr.cameras.getBrands](https://www.flickr.com/services/api/flickr.cameras.getBrands.html) | `none`  |  |
 * | [flickr.collections.getInfo](https://www.flickr.com/services/api/flickr.collections.getInfo.html) | `read` :eyes: | `collection_id` |
 * | [flickr.collections.getTree](https://www.flickr.com/services/api/flickr.collections.getTree.html) | `none`  |  |
 * | [flickr.commons.getInstitutions](https://www.flickr.com/services/api/flickr.commons.getInstitutions.html) | `none`  |  |
 * | [flickr.contacts.getList](https://www.flickr.com/services/api/flickr.contacts.getList.html) | `read` :eyes: |  |
 * | [flickr.contacts.getListRecentlyUploaded](https://www.flickr.com/services/api/flickr.contacts.getListRecentlyUploaded.html) | `read` :eyes: |  |
 * | [flickr.contacts.getPublicList](https://www.flickr.com/services/api/flickr.contacts.getPublicList.html) | `none`  | `user_id` |
 * | [flickr.contacts.getTaggingSuggestions](https://www.flickr.com/services/api/flickr.contacts.getTaggingSuggestions.html) | `read` :eyes: |  |
 * | [flickr.favorites.add](https://www.flickr.com/services/api/flickr.favorites.add.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.favorites.getContext](https://www.flickr.com/services/api/flickr.favorites.getContext.html) | `none`  | `photo_id`, `user_id` |
 * | [flickr.favorites.getList](https://www.flickr.com/services/api/flickr.favorites.getList.html) | `none`  |  |
 * | [flickr.favorites.getPublicList](https://www.flickr.com/services/api/flickr.favorites.getPublicList.html) | `none`  | `user_id` |
 * | [flickr.favorites.remove](https://www.flickr.com/services/api/flickr.favorites.remove.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.galleries.addPhoto](https://www.flickr.com/services/api/flickr.galleries.addPhoto.html) | `write` :pencil2: | `gallery_id`, `photo_id` |
 * | [flickr.galleries.create](https://www.flickr.com/services/api/flickr.galleries.create.html) | `write` :pencil2: | `title`, `description` |
 * | [flickr.galleries.editMeta](https://www.flickr.com/services/api/flickr.galleries.editMeta.html) | `write` :pencil2: | `gallery_id`, `title` |
 * | [flickr.galleries.editPhoto](https://www.flickr.com/services/api/flickr.galleries.editPhoto.html) | `write` :pencil2: | `gallery_id`, `photo_id`, `comment` |
 * | [flickr.galleries.editPhotos](https://www.flickr.com/services/api/flickr.galleries.editPhotos.html) | `write` :pencil2: | `gallery_id`, `primary_photo_id`, `photo_ids` |
 * | [flickr.galleries.getInfo](https://www.flickr.com/services/api/flickr.galleries.getInfo.html) | `none`  | `gallery_id` |
 * | [flickr.galleries.getList](https://www.flickr.com/services/api/flickr.galleries.getList.html) | `none`  | `user_id` |
 * | [flickr.galleries.getListForPhoto](https://www.flickr.com/services/api/flickr.galleries.getListForPhoto.html) | `none`  | `photo_id` |
 * | [flickr.galleries.getPhotos](https://www.flickr.com/services/api/flickr.galleries.getPhotos.html) | `none`  | `gallery_id` |
 * | [flickr.groups.browse](https://www.flickr.com/services/api/flickr.groups.browse.html) | `read` :eyes: |  |
 * | [flickr.groups.getInfo](https://www.flickr.com/services/api/flickr.groups.getInfo.html) | `none`  | `group_id` |
 * | [flickr.groups.join](https://www.flickr.com/services/api/flickr.groups.join.html) | `write` :pencil2: | `group_id` |
 * | [flickr.groups.joinRequest](https://www.flickr.com/services/api/flickr.groups.joinRequest.html) | `write` :pencil2: | `group_id`, `message`, `accept_rules` |
 * | [flickr.groups.leave](https://www.flickr.com/services/api/flickr.groups.leave.html) | `delete` :boom: | `group_id` |
 * | [flickr.groups.search](https://www.flickr.com/services/api/flickr.groups.search.html) | `none`  | `text` |
 * | [flickr.groups.discuss.replies.add](https://www.flickr.com/services/api/flickr.groups.discuss.replies.add.html) | `write` :pencil2: | `group_id`, `topic_id`, `message` |
 * | [flickr.groups.discuss.replies.delete](https://www.flickr.com/services/api/flickr.groups.discuss.replies.delete.html) | `delete` :boom: | `group_id`, `topic_id`, `reply_id` |
 * | [flickr.groups.discuss.replies.edit](https://www.flickr.com/services/api/flickr.groups.discuss.replies.edit.html) | `write` :pencil2: | `group_id`, `topic_id`, `reply_id`, `message` |
 * | [flickr.groups.discuss.replies.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getInfo.html) | `none`  | `group_id`, `topic_id`, `reply_id` |
 * | [flickr.groups.discuss.replies.getList](https://www.flickr.com/services/api/flickr.groups.discuss.replies.getList.html) | `none`  | `group_id`, `topic_id`, `per_page` |
 * | [flickr.groups.discuss.topics.add](https://www.flickr.com/services/api/flickr.groups.discuss.topics.add.html) | `write` :pencil2: | `group_id`, `subject`, `message` |
 * | [flickr.groups.discuss.topics.getInfo](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getInfo.html) | `none`  | `group_id`, `topic_id` |
 * | [flickr.groups.discuss.topics.getList](https://www.flickr.com/services/api/flickr.groups.discuss.topics.getList.html) | `none`  | `group_id` |
 * | [flickr.groups.members.getList](https://www.flickr.com/services/api/flickr.groups.members.getList.html) | `read` :eyes: | `group_id` |
 * | [flickr.groups.pools.add](https://www.flickr.com/services/api/flickr.groups.pools.add.html) | `write` :pencil2: | `photo_id`, `group_id` |
 * | [flickr.groups.pools.getContext](https://www.flickr.com/services/api/flickr.groups.pools.getContext.html) | `none`  | `photo_id`, `group_id` |
 * | [flickr.groups.pools.getGroups](https://www.flickr.com/services/api/flickr.groups.pools.getGroups.html) | `read` :eyes: |  |
 * | [flickr.groups.pools.getPhotos](https://www.flickr.com/services/api/flickr.groups.pools.getPhotos.html) | `none`  | `group_id` |
 * | [flickr.groups.pools.remove](https://www.flickr.com/services/api/flickr.groups.pools.remove.html) | `write` :pencil2: | `photo_id`, `group_id` |
 * | [flickr.interestingness.getList](https://www.flickr.com/services/api/flickr.interestingness.getList.html) | `none`  |  |
 * | [flickr.machinetags.getNamespaces](https://www.flickr.com/services/api/flickr.machinetags.getNamespaces.html) | `none`  |  |
 * | [flickr.machinetags.getPairs](https://www.flickr.com/services/api/flickr.machinetags.getPairs.html) | `none`  |  |
 * | [flickr.machinetags.getPredicates](https://www.flickr.com/services/api/flickr.machinetags.getPredicates.html) | `none`  |  |
 * | [flickr.machinetags.getRecentValues](https://www.flickr.com/services/api/flickr.machinetags.getRecentValues.html) | `none`  |  |
 * | [flickr.machinetags.getValues](https://www.flickr.com/services/api/flickr.machinetags.getValues.html) | `none`  | `namespace`, `predicate` |
 * | [flickr.panda.getList](https://www.flickr.com/services/api/flickr.panda.getList.html) | `none`  |  |
 * | [flickr.panda.getPhotos](https://www.flickr.com/services/api/flickr.panda.getPhotos.html) | `none`  | `panda_name` |
 * | [flickr.people.findByEmail](https://www.flickr.com/services/api/flickr.people.findByEmail.html) | `none`  | `find_email` |
 * | [flickr.people.findByUsername](https://www.flickr.com/services/api/flickr.people.findByUsername.html) | `none`  | `username` |
 * | [flickr.people.getGroups](https://www.flickr.com/services/api/flickr.people.getGroups.html) | `read` :eyes: | `user_id` |
 * | [flickr.people.getInfo](https://www.flickr.com/services/api/flickr.people.getInfo.html) | `none`  | `user_id` |
 * | [flickr.people.getLimits](https://www.flickr.com/services/api/flickr.people.getLimits.html) | `read` :eyes: |  |
 * | [flickr.people.getPhotos](https://www.flickr.com/services/api/flickr.people.getPhotos.html) | `none`  | `user_id` |
 * | [flickr.people.getPhotosOf](https://www.flickr.com/services/api/flickr.people.getPhotosOf.html) | `none`  | `user_id` |
 * | [flickr.people.getPublicGroups](https://www.flickr.com/services/api/flickr.people.getPublicGroups.html) | `none`  | `user_id` |
 * | [flickr.people.getPublicPhotos](https://www.flickr.com/services/api/flickr.people.getPublicPhotos.html) | `none`  | `user_id` |
 * | [flickr.people.getUploadStatus](https://www.flickr.com/services/api/flickr.people.getUploadStatus.html) | `read` :eyes: |  |
 * | [flickr.photos.addTags](https://www.flickr.com/services/api/flickr.photos.addTags.html) | `write` :pencil2: | `photo_id`, `tags` |
 * | [flickr.photos.delete](https://www.flickr.com/services/api/flickr.photos.delete.html) | `delete` :boom: | `photo_id` |
 * | [flickr.photos.getAllContexts](https://www.flickr.com/services/api/flickr.photos.getAllContexts.html) | `none`  | `photo_id` |
 * | [flickr.photos.getContactsPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPhotos.html) | `read` :eyes: |  |
 * | [flickr.photos.getContactsPublicPhotos](https://www.flickr.com/services/api/flickr.photos.getContactsPublicPhotos.html) | `none`  | `user_id` |
 * | [flickr.photos.getContext](https://www.flickr.com/services/api/flickr.photos.getContext.html) | `none`  | `photo_id` |
 * | [flickr.photos.getCounts](https://www.flickr.com/services/api/flickr.photos.getCounts.html) | `read` :eyes: |  |
 * | [flickr.photos.getExif](https://www.flickr.com/services/api/flickr.photos.getExif.html) | `none`  | `photo_id` |
 * | [flickr.photos.getFavorites](https://www.flickr.com/services/api/flickr.photos.getFavorites.html) | `none`  | `photo_id` |
 * | [flickr.photos.getInfo](https://www.flickr.com/services/api/flickr.photos.getInfo.html) | `none`  | `photo_id` |
 * | [flickr.photos.getNotInSet](https://www.flickr.com/services/api/flickr.photos.getNotInSet.html) | `read` :eyes: |  |
 * | [flickr.photos.getPerms](https://www.flickr.com/services/api/flickr.photos.getPerms.html) | `read` :eyes: | `photo_id` |
 * | [flickr.photos.getPopular](https://www.flickr.com/services/api/flickr.photos.getPopular.html) | `none`  |  |
 * | [flickr.photos.getRecent](https://www.flickr.com/services/api/flickr.photos.getRecent.html) | `none`  |  |
 * | [flickr.photos.getSizes](https://www.flickr.com/services/api/flickr.photos.getSizes.html) | `none`  | `photo_id` |
 * | [flickr.photos.getUntagged](https://www.flickr.com/services/api/flickr.photos.getUntagged.html) | `read` :eyes: |  |
 * | [flickr.photos.getWithGeoData](https://www.flickr.com/services/api/flickr.photos.getWithGeoData.html) | `read` :eyes: |  |
 * | [flickr.photos.getWithoutGeoData](https://www.flickr.com/services/api/flickr.photos.getWithoutGeoData.html) | `read` :eyes: |  |
 * | [flickr.photos.recentlyUpdated](https://www.flickr.com/services/api/flickr.photos.recentlyUpdated.html) | `read` :eyes: | `min_date` |
 * | [flickr.photos.removeTag](https://www.flickr.com/services/api/flickr.photos.removeTag.html) | `write` :pencil2: | `tag_id` |
 * | [flickr.photos.search](https://www.flickr.com/services/api/flickr.photos.search.html) | `none`  |  |
 * | [flickr.photos.setContentType](https://www.flickr.com/services/api/flickr.photos.setContentType.html) | `write` :pencil2: | `photo_id`, `content_type` |
 * | [flickr.photos.setDates](https://www.flickr.com/services/api/flickr.photos.setDates.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.photos.setMeta](https://www.flickr.com/services/api/flickr.photos.setMeta.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.photos.setPerms](https://www.flickr.com/services/api/flickr.photos.setPerms.html) | `write` :pencil2: | `photo_id`, `is_public`, `is_friend`, `is_family` |
 * | [flickr.photos.setSafetyLevel](https://www.flickr.com/services/api/flickr.photos.setSafetyLevel.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.photos.setTags](https://www.flickr.com/services/api/flickr.photos.setTags.html) | `write` :pencil2: | `photo_id`, `tags` |
 * | [flickr.photos.comments.addComment](https://www.flickr.com/services/api/flickr.photos.comments.addComment.html) | `write` :pencil2: | `photo_id`, `comment_text` |
 * | [flickr.photos.comments.deleteComment](https://www.flickr.com/services/api/flickr.photos.comments.deleteComment.html) | `write` :pencil2: | `comment_id` |
 * | [flickr.photos.comments.editComment](https://www.flickr.com/services/api/flickr.photos.comments.editComment.html) | `write` :pencil2: | `comment_id`, `comment_text` |
 * | [flickr.photos.comments.getList](https://www.flickr.com/services/api/flickr.photos.comments.getList.html) | `none`  | `photo_id` |
 * | [flickr.photos.comments.getRecentForContacts](https://www.flickr.com/services/api/flickr.photos.comments.getRecentForContacts.html) | `read` :eyes: |  |
 * | [flickr.photos.geo.batchCorrectLocation](https://www.flickr.com/services/api/flickr.photos.geo.batchCorrectLocation.html) | `write` :pencil2: | `lat`, `lon`, `accuracy` |
 * | [flickr.photos.geo.correctLocation](https://www.flickr.com/services/api/flickr.photos.geo.correctLocation.html) | `write` :pencil2: | `photo_id`, `foursquare_id` |
 * | [flickr.photos.geo.getLocation](https://www.flickr.com/services/api/flickr.photos.geo.getLocation.html) | `none`  | `photo_id` |
 * | [flickr.photos.geo.getPerms](https://www.flickr.com/services/api/flickr.photos.geo.getPerms.html) | `read` :eyes: | `photo_id` |
 * | [flickr.photos.geo.photosForLocation](https://www.flickr.com/services/api/flickr.photos.geo.photosForLocation.html) | `read` :eyes: | `lat`, `lon` |
 * | [flickr.photos.geo.removeLocation](https://www.flickr.com/services/api/flickr.photos.geo.removeLocation.html) | `write` :pencil2: | `photo_id` |
 * | [flickr.photos.geo.setContext](https://www.flickr.com/services/api/flickr.photos.geo.setContext.html) | `write` :pencil2: | `photo_id`, `context` |
 * | [flickr.photos.geo.setLocation](https://www.flickr.com/services/api/flickr.photos.geo.setLocation.html) | `write` :pencil2: | `photo_id`, `lat`, `lon` |
 * | [flickr.photos.geo.setPerms](https://www.flickr.com/services/api/flickr.photos.geo.setPerms.html) | `write` :pencil2: | `is_public`, `is_contact`, `is_friend`, `is_family`, `photo_id` |
 * | [flickr.photos.licenses.getInfo](https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html) | `none`  |  |
 * | [flickr.photos.licenses.setLicense](https://www.flickr.com/services/api/flickr.photos.licenses.setLicense.html) | `write` :pencil2: | `photo_id`, `license_id` |
 * | [flickr.photos.notes.add](https://www.flickr.com/services/api/flickr.photos.notes.add.html) | `write` :pencil2: | `photo_id`, `note_x`, `note_y`, `note_w`, `note_h`, `note_text` |
 * | [flickr.photos.notes.delete](https://www.flickr.com/services/api/flickr.photos.notes.delete.html) | `write` :pencil2: | `note_id` |
 * | [flickr.photos.notes.edit](https://www.flickr.com/services/api/flickr.photos.notes.edit.html) | `write` :pencil2: | `note_id`, `note_x`, `note_y`, `note_w`, `note_h`, `note_text` |
 * | [flickr.photos.people.add](https://www.flickr.com/services/api/flickr.photos.people.add.html) | `write` :pencil2: | `photo_id`, `user_id` |
 * | [flickr.photos.people.delete](https://www.flickr.com/services/api/flickr.photos.people.delete.html) | `write` :pencil2: | `photo_id`, `user_id` |
 * | [flickr.photos.people.deleteCoords](https://www.flickr.com/services/api/flickr.photos.people.deleteCoords.html) | `write` :pencil2: | `photo_id`, `user_id` |
 * | [flickr.photos.people.editCoords](https://www.flickr.com/services/api/flickr.photos.people.editCoords.html) | `write` :pencil2: | `photo_id`, `user_id`, `person_x`, `person_y`, `person_w`, `person_h` |
 * | [flickr.photos.people.getList](https://www.flickr.com/services/api/flickr.photos.people.getList.html) | `none`  | `photo_id` |
 * | [flickr.photos.suggestions.approveSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.approveSuggestion.html) | `write` :pencil2: | `suggestion_id` |
 * | [flickr.photos.suggestions.getList](https://www.flickr.com/services/api/flickr.photos.suggestions.getList.html) | `read` :eyes: |  |
 * | [flickr.photos.suggestions.rejectSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.rejectSuggestion.html) | `write` :pencil2: | `suggestion_id` |
 * | [flickr.photos.suggestions.removeSuggestion](https://www.flickr.com/services/api/flickr.photos.suggestions.removeSuggestion.html) | `write` :pencil2: | `suggestion_id` |
 * | [flickr.photos.suggestions.suggestLocation](https://www.flickr.com/services/api/flickr.photos.suggestions.suggestLocation.html) | `write` :pencil2: | `photo_id`, `lat`, `lon` |
 * | [flickr.photos.transform.rotate](https://www.flickr.com/services/api/flickr.photos.transform.rotate.html) | `write` :pencil2: | `photo_id`, `degrees` |
 * | [flickr.photos.upload.checkTickets](https://www.flickr.com/services/api/flickr.photos.upload.checkTickets.html) | `none`  | `tickets` |
 * | [flickr.photosets.addPhoto](https://www.flickr.com/services/api/flickr.photosets.addPhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
 * | [flickr.photosets.create](https://www.flickr.com/services/api/flickr.photosets.create.html) | `write` :pencil2: | `title`, `primary_photo_id` |
 * | [flickr.photosets.delete](https://www.flickr.com/services/api/flickr.photosets.delete.html) | `write` :pencil2: | `photoset_id` |
 * | [flickr.photosets.editMeta](https://www.flickr.com/services/api/flickr.photosets.editMeta.html) | `write` :pencil2: | `photoset_id`, `title` |
 * | [flickr.photosets.editPhotos](https://www.flickr.com/services/api/flickr.photosets.editPhotos.html) | `write` :pencil2: | `photoset_id`, `primary_photo_id`, `photo_ids` |
 * | [flickr.photosets.getContext](https://www.flickr.com/services/api/flickr.photosets.getContext.html) | `none`  | `photo_id`, `photoset_id` |
 * | [flickr.photosets.getInfo](https://www.flickr.com/services/api/flickr.photosets.getInfo.html) | `none`  | `photoset_id`, `user_id` |
 * | [flickr.photosets.getList](https://www.flickr.com/services/api/flickr.photosets.getList.html) | `none`  |  |
 * | [flickr.photosets.getPhotos](https://www.flickr.com/services/api/flickr.photosets.getPhotos.html) | `none`  | `photoset_id`, `user_id` |
 * | [flickr.photosets.orderSets](https://www.flickr.com/services/api/flickr.photosets.orderSets.html) | `write` :pencil2: | `photoset_ids` |
 * | [flickr.photosets.removePhoto](https://www.flickr.com/services/api/flickr.photosets.removePhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
 * | [flickr.photosets.removePhotos](https://www.flickr.com/services/api/flickr.photosets.removePhotos.html) | `write` :pencil2: | `photoset_id`, `photo_ids` |
 * | [flickr.photosets.reorderPhotos](https://www.flickr.com/services/api/flickr.photosets.reorderPhotos.html) | `write` :pencil2: | `photoset_id`, `photo_ids` |
 * | [flickr.photosets.setPrimaryPhoto](https://www.flickr.com/services/api/flickr.photosets.setPrimaryPhoto.html) | `write` :pencil2: | `photoset_id`, `photo_id` |
 * | [flickr.photosets.comments.addComment](https://www.flickr.com/services/api/flickr.photosets.comments.addComment.html) | `write` :pencil2: | `photoset_id`, `comment_text` |
 * | [flickr.photosets.comments.deleteComment](https://www.flickr.com/services/api/flickr.photosets.comments.deleteComment.html) | `write` :pencil2: | `comment_id` |
 * | [flickr.photosets.comments.editComment](https://www.flickr.com/services/api/flickr.photosets.comments.editComment.html) | `write` :pencil2: | `comment_id`, `comment_text` |
 * | [flickr.photosets.comments.getList](https://www.flickr.com/services/api/flickr.photosets.comments.getList.html) | `none`  | `photoset_id` |
 * | [flickr.places.find](https://www.flickr.com/services/api/flickr.places.find.html) | `none`  | `query` |
 * | [flickr.places.findByLatLon](https://www.flickr.com/services/api/flickr.places.findByLatLon.html) | `none`  | `lat`, `lon` |
 * | [flickr.places.getChildrenWithPhotosPublic](https://www.flickr.com/services/api/flickr.places.getChildrenWithPhotosPublic.html) | `none`  |  |
 * | [flickr.places.getInfo](https://www.flickr.com/services/api/flickr.places.getInfo.html) | `none`  |  |
 * | [flickr.places.getInfoByUrl](https://www.flickr.com/services/api/flickr.places.getInfoByUrl.html) | `none`  | `url` |
 * | [flickr.places.getPlaceTypes](https://www.flickr.com/services/api/flickr.places.getPlaceTypes.html) | `none`  |  |
 * | [flickr.places.getShapeHistory](https://www.flickr.com/services/api/flickr.places.getShapeHistory.html) | `none`  |  |
 * | [flickr.places.getTopPlacesList](https://www.flickr.com/services/api/flickr.places.getTopPlacesList.html) | `none`  | `place_type_id` |
 * | [flickr.places.placesForBoundingBox](https://www.flickr.com/services/api/flickr.places.placesForBoundingBox.html) | `none`  | `bbox` |
 * | [flickr.places.placesForContacts](https://www.flickr.com/services/api/flickr.places.placesForContacts.html) | `read` :eyes: |  |
 * | [flickr.places.placesForTags](https://www.flickr.com/services/api/flickr.places.placesForTags.html) | `none`  | `place_type_id` |
 * | [flickr.places.placesForUser](https://www.flickr.com/services/api/flickr.places.placesForUser.html) | `read` :eyes: |  |
 * | [flickr.places.resolvePlaceId](https://www.flickr.com/services/api/flickr.places.resolvePlaceId.html) | `none`  | `place_id` |
 * | [flickr.places.resolvePlaceURL](https://www.flickr.com/services/api/flickr.places.resolvePlaceURL.html) | `none`  | `url` |
 * | [flickr.places.tagsForPlace](https://www.flickr.com/services/api/flickr.places.tagsForPlace.html) | `none`  |  |
 * | [flickr.prefs.getContentType](https://www.flickr.com/services/api/flickr.prefs.getContentType.html) | `read` :eyes: |  |
 * | [flickr.prefs.getGeoPerms](https://www.flickr.com/services/api/flickr.prefs.getGeoPerms.html) | `read` :eyes: |  |
 * | [flickr.prefs.getHidden](https://www.flickr.com/services/api/flickr.prefs.getHidden.html) | `read` :eyes: |  |
 * | [flickr.prefs.getPrivacy](https://www.flickr.com/services/api/flickr.prefs.getPrivacy.html) | `read` :eyes: |  |
 * | [flickr.prefs.getSafetyLevel](https://www.flickr.com/services/api/flickr.prefs.getSafetyLevel.html) | `read` :eyes: |  |
 * | [flickr.profile.getProfile](https://www.flickr.com/services/api/flickr.profile.getProfile.html) | `none`  | `user_id` |
 * | [flickr.push.getSubscriptions](https://www.flickr.com/services/api/flickr.push.getSubscriptions.html) | `read` :eyes: |  |
 * | [flickr.push.getTopics](https://www.flickr.com/services/api/flickr.push.getTopics.html) | `none`  |  |
 * | [flickr.push.subscribe](https://www.flickr.com/services/api/flickr.push.subscribe.html) | `read` :eyes: | `topic`, `callback`, `verify` |
 * | [flickr.push.unsubscribe](https://www.flickr.com/services/api/flickr.push.unsubscribe.html) | `read` :eyes: | `topic`, `callback`, `verify` |
 * | [flickr.reflection.getMethodInfo](https://www.flickr.com/services/api/flickr.reflection.getMethodInfo.html) | `none`  | `method_name` |
 * | [flickr.reflection.getMethods](https://www.flickr.com/services/api/flickr.reflection.getMethods.html) | `none`  |  |
 * | [flickr.stats.getCSVFiles](https://www.flickr.com/services/api/flickr.stats.getCSVFiles.html) | `read` :eyes: |  |
 * | [flickr.stats.getCollectionDomains](https://www.flickr.com/services/api/flickr.stats.getCollectionDomains.html) | `read` :eyes: | `date` |
 * | [flickr.stats.getCollectionReferrers](https://www.flickr.com/services/api/flickr.stats.getCollectionReferrers.html) | `read` :eyes: | `date`, `domain` |
 * | [flickr.stats.getCollectionStats](https://www.flickr.com/services/api/flickr.stats.getCollectionStats.html) | `read` :eyes: | `date`, `collection_id` |
 * | [flickr.stats.getPhotoDomains](https://www.flickr.com/services/api/flickr.stats.getPhotoDomains.html) | `read` :eyes: | `date` |
 * | [flickr.stats.getPhotoReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotoReferrers.html) | `read` :eyes: | `date`, `domain` |
 * | [flickr.stats.getPhotoStats](https://www.flickr.com/services/api/flickr.stats.getPhotoStats.html) | `read` :eyes: | `date`, `photo_id` |
 * | [flickr.stats.getPhotosetDomains](https://www.flickr.com/services/api/flickr.stats.getPhotosetDomains.html) | `read` :eyes: | `date` |
 * | [flickr.stats.getPhotosetReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotosetReferrers.html) | `read` :eyes: | `date`, `domain` |
 * | [flickr.stats.getPhotosetStats](https://www.flickr.com/services/api/flickr.stats.getPhotosetStats.html) | `read` :eyes: | `date`, `photoset_id` |
 * | [flickr.stats.getPhotostreamDomains](https://www.flickr.com/services/api/flickr.stats.getPhotostreamDomains.html) | `read` :eyes: | `date` |
 * | [flickr.stats.getPhotostreamReferrers](https://www.flickr.com/services/api/flickr.stats.getPhotostreamReferrers.html) | `read` :eyes: | `date`, `domain` |
 * | [flickr.stats.getPhotostreamStats](https://www.flickr.com/services/api/flickr.stats.getPhotostreamStats.html) | `read` :eyes: | `date` |
 * | [flickr.stats.getPopularPhotos](https://www.flickr.com/services/api/flickr.stats.getPopularPhotos.html) | `read` :eyes: |  |
 * | [flickr.stats.getTotalViews](https://www.flickr.com/services/api/flickr.stats.getTotalViews.html) | `read` :eyes: |  |
 * | [flickr.tags.getClusterPhotos](https://www.flickr.com/services/api/flickr.tags.getClusterPhotos.html) | `none`  | `tag`, `cluster_id` |
 * | [flickr.tags.getClusters](https://www.flickr.com/services/api/flickr.tags.getClusters.html) | `none`  | `tag` |
 * | [flickr.tags.getHotList](https://www.flickr.com/services/api/flickr.tags.getHotList.html) | `none`  |  |
 * | [flickr.tags.getListPhoto](https://www.flickr.com/services/api/flickr.tags.getListPhoto.html) | `none`  | `photo_id` |
 * | [flickr.tags.getListUser](https://www.flickr.com/services/api/flickr.tags.getListUser.html) | `none`  |  |
 * | [flickr.tags.getListUserPopular](https://www.flickr.com/services/api/flickr.tags.getListUserPopular.html) | `none`  |  |
 * | [flickr.tags.getListUserRaw](https://www.flickr.com/services/api/flickr.tags.getListUserRaw.html) | `none`  |  |
 * | [flickr.tags.getMostFrequentlyUsed](https://www.flickr.com/services/api/flickr.tags.getMostFrequentlyUsed.html) | `read` :eyes: |  |
 * | [flickr.tags.getRelated](https://www.flickr.com/services/api/flickr.tags.getRelated.html) | `none`  | `tag` |
 * | [flickr.test.echo](https://www.flickr.com/services/api/flickr.test.echo.html) | `none`  |  |
 * | [flickr.test.login](https://www.flickr.com/services/api/flickr.test.login.html) | `read` :eyes: |  |
 * | [flickr.test.null](https://www.flickr.com/services/api/flickr.test.null.html) | `read` :eyes: |  |
 * | [flickr.testimonials.addTestimonial](https://www.flickr.com/services/api/flickr.testimonials.addTestimonial.html) | `write` :pencil2: | `user_id`, `testimonial_text` |
 * | [flickr.testimonials.approveTestimonial](https://www.flickr.com/services/api/flickr.testimonials.approveTestimonial.html) | `write` :pencil2: | `testimonial_id` |
 * | [flickr.testimonials.deleteTestimonial](https://www.flickr.com/services/api/flickr.testimonials.deleteTestimonial.html) | `write` :pencil2: | `testimonial_id` |
 * | [flickr.testimonials.editTestimonial](https://www.flickr.com/services/api/flickr.testimonials.editTestimonial.html) | `write` :pencil2: | `user_id`, `testimonial_id`, `testimonial_text` |
 * | [flickr.testimonials.getAllTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAbout.html) | `read` :eyes: |  |
 * | [flickr.testimonials.getAllTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
 * | [flickr.testimonials.getAllTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsBy.html) | `read` :eyes: |  |
 * | [flickr.testimonials.getPendingTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAbout.html) | `read` :eyes: |  |
 * | [flickr.testimonials.getPendingTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
 * | [flickr.testimonials.getPendingTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsBy.html) | `read` :eyes: |  |
 * | [flickr.testimonials.getTestimonialsAbout](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAbout.html) | `none`  | `user_id` |
 * | [flickr.testimonials.getTestimonialsAboutBy](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAboutBy.html) | `read` :eyes: | `user_id` |
 * | [flickr.testimonials.getTestimonialsBy](https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsBy.html) | `none`  | `user_id` |
 * | [flickr.urls.getGroup](https://www.flickr.com/services/api/flickr.urls.getGroup.html) | `none`  | `group_id` |
 * | [flickr.urls.getUserPhotos](https://www.flickr.com/services/api/flickr.urls.getUserPhotos.html) | `none`  |  |
 * | [flickr.urls.getUserProfile](https://www.flickr.com/services/api/flickr.urls.getUserProfile.html) | `none`  |  |
 * | [flickr.urls.lookupGallery](https://www.flickr.com/services/api/flickr.urls.lookupGallery.html) | `none`  | `url` |
 * | [flickr.urls.lookupGroup](https://www.flickr.com/services/api/flickr.urls.lookupGroup.html) | `none`  | `url` |
 * | [flickr.urls.lookupUser](https://www.flickr.com/services/api/flickr.urls.lookupUser.html) | `none`  | `url` |
 */function s(t,e){// allow creating a client without `new`
if(!(this instanceof s))return new s(t);// create a new client and assign it to all of our namespaces
this.activity._=this.auth._=this.auth.oauth._=this.blogs._=this.cameras._=this.collections._=this.commons._=this.contacts._=this.favorites._=this.galleries._=this.groups._=this.groups.discuss._=this.groups.discuss.replies._=this.groups.discuss.topics._=this.groups.members._=this.groups.pools._=this.interestingness._=this.machinetags._=this.panda._=this.people._=this.photos._=this.photos.comments._=this.photos.geo._=this.photos.licenses._=this.photos.notes._=this.photos.people._=this.photos.suggestions._=this.photos.transform._=this.photos.upload._=this.photosets._=this.photosets.comments._=this.places._=this.prefs._=this.profile._=this.push._=this.reflection._=this.stats._=this.tags._=this.test._=this.testimonials._=this.urls._=this._=/**
 * Creates a new Flickr API client. This "client" is a factory
 * method that creates a new superagent request pre-configured
 * for talking to the Flickr API. You must pass an "auth"
 * supergent plugin.
 * @param {Function} auth
 * @returns {Function}
 * @private
 * @see https://github.com/visionmedia/superagent
 */function(t,e){var n,o;if("string"==typeof t&&(o=t,t=function(t){return t.query({api_key:o})}),"function"!=typeof t)throw Error('Missing required argument "auth"');return n=// options
(e=e||{}).host||"api.flickr.com",e.port&&(n+=":"+e.port),function(e,o,s){return void 0===s&&(s={}),s.extras&&(s.extras=/**
 * Dedupes an array, set, or string of extras and returns
 * a comma separated version of it
 * @param {String|Array|Set} extras
 * @returns {Function}
 * @private
 */function(t){if("string"!=typeof t&&!Array.isArray(t)&&!(t instanceof Set))throw Error('Invalid type for argument "extras"');if("string"==typeof t&&(t=t.split(",")),Array.isArray(t)&&(t=new Set(t)),t instanceof Set)return Array.from(t).join(",")}(s.extras)),r(e,"https://"+n+"/services/rest").param({method:o}).param(s).use(i).use(t)}}(t,e)}/**
 * @type {Object}
 * @ignore
 */s.prototype.activity={},/**
 * flickr.activity.userComments
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.activity.userComments.html
 */s.prototype.activity.userComments=function(t){return this._("GET","flickr.activity.userComments",t)},/**
 * flickr.activity.userPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.activity.userPhotos.html
 */s.prototype.activity.userPhotos=function(t){return this._("GET","flickr.activity.userPhotos",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.auth={},/**
 * flickr.auth.checkToken
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.checkToken.html
 */s.prototype.auth.checkToken=function(t){return o(t,"auth_token"),this._("GET","flickr.auth.checkToken",t)},/**
 * flickr.auth.getFrob
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.getFrob.html
 */s.prototype.auth.getFrob=function(t){return this._("GET","flickr.auth.getFrob",t)},/**
 * flickr.auth.getFullToken
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.getFullToken.html
 */s.prototype.auth.getFullToken=function(t){return o(t,"mini_token"),this._("GET","flickr.auth.getFullToken",t)},/**
 * flickr.auth.getToken
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.getToken.html
 */s.prototype.auth.getToken=function(t){return o(t,"frob"),this._("GET","flickr.auth.getToken",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.auth.oauth={},/**
 * flickr.auth.oauth.checkToken
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.oauth.checkToken.html
 */s.prototype.auth.oauth.checkToken=function(t){return o(t,"oauth_token"),this._("GET","flickr.auth.oauth.checkToken",t)},/**
 * flickr.auth.oauth.getAccessToken
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.auth.oauth.getAccessToken.html
 */s.prototype.auth.oauth.getAccessToken=function(t){return this._("GET","flickr.auth.oauth.getAccessToken",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.blogs={},/**
 * flickr.blogs.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.blogs.getList.html
 */s.prototype.blogs.getList=function(t){return this._("GET","flickr.blogs.getList",t)},/**
 * flickr.blogs.getServices
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.blogs.getServices.html
 */s.prototype.blogs.getServices=function(t){return this._("GET","flickr.blogs.getServices",t)},/**
 * flickr.blogs.postPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.blogs.postPhoto.html
 */s.prototype.blogs.postPhoto=function(t){return o(t,"photo_id"),o(t,"title"),o(t,"description"),this._("POST","flickr.blogs.postPhoto",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.cameras={},/**
 * flickr.cameras.getBrandModels
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.cameras.getBrandModels.html
 */s.prototype.cameras.getBrandModels=function(t){return o(t,"brand"),this._("GET","flickr.cameras.getBrandModels",t)},/**
 * flickr.cameras.getBrands
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.cameras.getBrands.html
 */s.prototype.cameras.getBrands=function(t){return this._("GET","flickr.cameras.getBrands",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.collections={},/**
 * flickr.collections.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.collections.getInfo.html
 */s.prototype.collections.getInfo=function(t){return o(t,"collection_id"),this._("GET","flickr.collections.getInfo",t)},/**
 * flickr.collections.getTree
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.collections.getTree.html
 */s.prototype.collections.getTree=function(t){return this._("GET","flickr.collections.getTree",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.commons={},/**
 * flickr.commons.getInstitutions
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.commons.getInstitutions.html
 */s.prototype.commons.getInstitutions=function(t){return this._("GET","flickr.commons.getInstitutions",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.contacts={},/**
 * flickr.contacts.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.contacts.getList.html
 */s.prototype.contacts.getList=function(t){return this._("GET","flickr.contacts.getList",t)},/**
 * flickr.contacts.getListRecentlyUploaded
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.contacts.getListRecentlyUploaded.html
 */s.prototype.contacts.getListRecentlyUploaded=function(t){return this._("GET","flickr.contacts.getListRecentlyUploaded",t)},/**
 * flickr.contacts.getPublicList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.contacts.getPublicList.html
 */s.prototype.contacts.getPublicList=function(t){return o(t,"user_id"),this._("GET","flickr.contacts.getPublicList",t)},/**
 * flickr.contacts.getTaggingSuggestions
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.contacts.getTaggingSuggestions.html
 */s.prototype.contacts.getTaggingSuggestions=function(t){return this._("GET","flickr.contacts.getTaggingSuggestions",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.favorites={},/**
 * flickr.favorites.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.favorites.add.html
 */s.prototype.favorites.add=function(t){return o(t,"photo_id"),this._("POST","flickr.favorites.add",t)},/**
 * flickr.favorites.getContext
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.favorites.getContext.html
 */s.prototype.favorites.getContext=function(t){return o(t,"photo_id"),o(t,"user_id"),this._("GET","flickr.favorites.getContext",t)},/**
 * flickr.favorites.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.favorites.getList.html
 */s.prototype.favorites.getList=function(t){return this._("GET","flickr.favorites.getList",t)},/**
 * flickr.favorites.getPublicList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.favorites.getPublicList.html
 */s.prototype.favorites.getPublicList=function(t){return o(t,"user_id"),this._("GET","flickr.favorites.getPublicList",t)},/**
 * flickr.favorites.remove
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.favorites.remove.html
 */s.prototype.favorites.remove=function(t){return o(t,"photo_id"),this._("POST","flickr.favorites.remove",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.galleries={},/**
 * flickr.galleries.addPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.addPhoto.html
 */s.prototype.galleries.addPhoto=function(t){return o(t,"gallery_id"),o(t,"photo_id"),this._("POST","flickr.galleries.addPhoto",t)},/**
 * flickr.galleries.create
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.create.html
 */s.prototype.galleries.create=function(t){return o(t,"title"),o(t,"description"),this._("POST","flickr.galleries.create",t)},/**
 * flickr.galleries.editMeta
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.editMeta.html
 */s.prototype.galleries.editMeta=function(t){return o(t,"gallery_id"),o(t,"title"),this._("POST","flickr.galleries.editMeta",t)},/**
 * flickr.galleries.editPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.editPhoto.html
 */s.prototype.galleries.editPhoto=function(t){return o(t,"gallery_id"),o(t,"photo_id"),o(t,"comment"),this._("POST","flickr.galleries.editPhoto",t)},/**
 * flickr.galleries.editPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.editPhotos.html
 */s.prototype.galleries.editPhotos=function(t){return o(t,"gallery_id"),o(t,"primary_photo_id"),o(t,"photo_ids"),this._("POST","flickr.galleries.editPhotos",t)},/**
 * flickr.galleries.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.getInfo.html
 */s.prototype.galleries.getInfo=function(t){return o(t,"gallery_id"),this._("GET","flickr.galleries.getInfo",t)},/**
 * flickr.galleries.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.getList.html
 */s.prototype.galleries.getList=function(t){return o(t,"user_id"),this._("GET","flickr.galleries.getList",t)},/**
 * flickr.galleries.getListForPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.getListForPhoto.html
 */s.prototype.galleries.getListForPhoto=function(t){return o(t,"photo_id"),this._("GET","flickr.galleries.getListForPhoto",t)},/**
 * flickr.galleries.getPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.galleries.getPhotos.html
 */s.prototype.galleries.getPhotos=function(t){return o(t,"gallery_id"),this._("GET","flickr.galleries.getPhotos",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups={},/**
 * flickr.groups.browse
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.browse.html
 */s.prototype.groups.browse=function(t){return this._("GET","flickr.groups.browse",t)},/**
 * flickr.groups.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.getInfo.html
 */s.prototype.groups.getInfo=function(t){return o(t,"group_id"),this._("GET","flickr.groups.getInfo",t)},/**
 * flickr.groups.join
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.join.html
 */s.prototype.groups.join=function(t){return o(t,"group_id"),this._("POST","flickr.groups.join",t)},/**
 * flickr.groups.joinRequest
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.joinRequest.html
 */s.prototype.groups.joinRequest=function(t){return o(t,"group_id"),o(t,"message"),o(t,"accept_rules"),this._("POST","flickr.groups.joinRequest",t)},/**
 * flickr.groups.leave
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.leave.html
 */s.prototype.groups.leave=function(t){return o(t,"group_id"),this._("POST","flickr.groups.leave",t)},/**
 * flickr.groups.search
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.search.html
 */s.prototype.groups.search=function(t){return o(t,"text"),this._("GET","flickr.groups.search",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups.discuss={},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups.discuss.replies={},/**
 * flickr.groups.discuss.replies.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.replies.add.html
 */s.prototype.groups.discuss.replies.add=function(t){return o(t,"group_id"),o(t,"topic_id"),o(t,"message"),this._("POST","flickr.groups.discuss.replies.add",t)},/**
 * flickr.groups.discuss.replies.delete
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.replies.delete.html
 */s.prototype.groups.discuss.replies.delete=function(t){return o(t,"group_id"),o(t,"topic_id"),o(t,"reply_id"),this._("POST","flickr.groups.discuss.replies.delete",t)},/**
 * flickr.groups.discuss.replies.edit
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.replies.edit.html
 */s.prototype.groups.discuss.replies.edit=function(t){return o(t,"group_id"),o(t,"topic_id"),o(t,"reply_id"),o(t,"message"),this._("POST","flickr.groups.discuss.replies.edit",t)},/**
 * flickr.groups.discuss.replies.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.replies.getInfo.html
 */s.prototype.groups.discuss.replies.getInfo=function(t){return o(t,"group_id"),o(t,"topic_id"),o(t,"reply_id"),this._("GET","flickr.groups.discuss.replies.getInfo",t)},/**
 * flickr.groups.discuss.replies.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.replies.getList.html
 */s.prototype.groups.discuss.replies.getList=function(t){return o(t,"group_id"),o(t,"topic_id"),o(t,"per_page"),this._("GET","flickr.groups.discuss.replies.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups.discuss.topics={},/**
 * flickr.groups.discuss.topics.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.topics.add.html
 */s.prototype.groups.discuss.topics.add=function(t){return o(t,"group_id"),o(t,"subject"),o(t,"message"),this._("POST","flickr.groups.discuss.topics.add",t)},/**
 * flickr.groups.discuss.topics.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.topics.getInfo.html
 */s.prototype.groups.discuss.topics.getInfo=function(t){return o(t,"group_id"),o(t,"topic_id"),this._("GET","flickr.groups.discuss.topics.getInfo",t)},/**
 * flickr.groups.discuss.topics.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.discuss.topics.getList.html
 */s.prototype.groups.discuss.topics.getList=function(t){return o(t,"group_id"),this._("GET","flickr.groups.discuss.topics.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups.members={},/**
 * flickr.groups.members.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.members.getList.html
 */s.prototype.groups.members.getList=function(t){return o(t,"group_id"),this._("GET","flickr.groups.members.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.groups.pools={},/**
 * flickr.groups.pools.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.pools.add.html
 */s.prototype.groups.pools.add=function(t){return o(t,"photo_id"),o(t,"group_id"),this._("POST","flickr.groups.pools.add",t)},/**
 * flickr.groups.pools.getContext
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.pools.getContext.html
 */s.prototype.groups.pools.getContext=function(t){return o(t,"photo_id"),o(t,"group_id"),this._("GET","flickr.groups.pools.getContext",t)},/**
 * flickr.groups.pools.getGroups
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.pools.getGroups.html
 */s.prototype.groups.pools.getGroups=function(t){return this._("GET","flickr.groups.pools.getGroups",t)},/**
 * flickr.groups.pools.getPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.pools.getPhotos.html
 */s.prototype.groups.pools.getPhotos=function(t){return o(t,"group_id"),this._("GET","flickr.groups.pools.getPhotos",t)},/**
 * flickr.groups.pools.remove
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.groups.pools.remove.html
 */s.prototype.groups.pools.remove=function(t){return o(t,"photo_id"),o(t,"group_id"),this._("POST","flickr.groups.pools.remove",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.interestingness={},/**
 * flickr.interestingness.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.interestingness.getList.html
 */s.prototype.interestingness.getList=function(t){return this._("GET","flickr.interestingness.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.machinetags={},/**
 * flickr.machinetags.getNamespaces
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.machinetags.getNamespaces.html
 */s.prototype.machinetags.getNamespaces=function(t){return this._("GET","flickr.machinetags.getNamespaces",t)},/**
 * flickr.machinetags.getPairs
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.machinetags.getPairs.html
 */s.prototype.machinetags.getPairs=function(t){return this._("GET","flickr.machinetags.getPairs",t)},/**
 * flickr.machinetags.getPredicates
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.machinetags.getPredicates.html
 */s.prototype.machinetags.getPredicates=function(t){return this._("GET","flickr.machinetags.getPredicates",t)},/**
 * flickr.machinetags.getRecentValues
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.machinetags.getRecentValues.html
 */s.prototype.machinetags.getRecentValues=function(t){return this._("GET","flickr.machinetags.getRecentValues",t)},/**
 * flickr.machinetags.getValues
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.machinetags.getValues.html
 */s.prototype.machinetags.getValues=function(t){return o(t,"namespace"),o(t,"predicate"),this._("GET","flickr.machinetags.getValues",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.panda={},/**
 * flickr.panda.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.panda.getList.html
 */s.prototype.panda.getList=function(t){return this._("GET","flickr.panda.getList",t)},/**
 * flickr.panda.getPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.panda.getPhotos.html
 */s.prototype.panda.getPhotos=function(t){return o(t,"panda_name"),this._("GET","flickr.panda.getPhotos",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.people={},/**
 * flickr.people.findByEmail
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.findByEmail.html
 */s.prototype.people.findByEmail=function(t){return o(t,"find_email"),this._("GET","flickr.people.findByEmail",t)},/**
 * flickr.people.findByUsername
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.findByUsername.html
 */s.prototype.people.findByUsername=function(t){return o(t,"username"),this._("GET","flickr.people.findByUsername",t)},/**
 * flickr.people.getGroups
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getGroups.html
 */s.prototype.people.getGroups=function(t){return o(t,"user_id"),this._("GET","flickr.people.getGroups",t)},/**
 * flickr.people.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getInfo.html
 */s.prototype.people.getInfo=function(t){return o(t,"user_id"),this._("GET","flickr.people.getInfo",t)},/**
 * flickr.people.getLimits
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getLimits.html
 */s.prototype.people.getLimits=function(t){return this._("GET","flickr.people.getLimits",t)},/**
 * flickr.people.getPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getPhotos.html
 */s.prototype.people.getPhotos=function(t){return o(t,"user_id"),this._("GET","flickr.people.getPhotos",t)},/**
 * flickr.people.getPhotosOf
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getPhotosOf.html
 */s.prototype.people.getPhotosOf=function(t){return o(t,"user_id"),this._("GET","flickr.people.getPhotosOf",t)},/**
 * flickr.people.getPublicGroups
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getPublicGroups.html
 */s.prototype.people.getPublicGroups=function(t){return o(t,"user_id"),this._("GET","flickr.people.getPublicGroups",t)},/**
 * flickr.people.getPublicPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getPublicPhotos.html
 */s.prototype.people.getPublicPhotos=function(t){return o(t,"user_id"),this._("GET","flickr.people.getPublicPhotos",t)},/**
 * flickr.people.getUploadStatus
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.people.getUploadStatus.html
 */s.prototype.people.getUploadStatus=function(t){return this._("GET","flickr.people.getUploadStatus",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos={},/**
 * flickr.photos.addTags
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.addTags.html
 */s.prototype.photos.addTags=function(t){return o(t,"photo_id"),o(t,"tags"),this._("POST","flickr.photos.addTags",t)},/**
 * flickr.photos.delete
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.delete.html
 */s.prototype.photos.delete=function(t){return o(t,"photo_id"),this._("POST","flickr.photos.delete",t)},/**
 * flickr.photos.getAllContexts
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getAllContexts.html
 */s.prototype.photos.getAllContexts=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getAllContexts",t)},/**
 * flickr.photos.getContactsPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getContactsPhotos.html
 */s.prototype.photos.getContactsPhotos=function(t){return this._("GET","flickr.photos.getContactsPhotos",t)},/**
 * flickr.photos.getContactsPublicPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getContactsPublicPhotos.html
 */s.prototype.photos.getContactsPublicPhotos=function(t){return o(t,"user_id"),this._("GET","flickr.photos.getContactsPublicPhotos",t)},/**
 * flickr.photos.getContext
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getContext.html
 */s.prototype.photos.getContext=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getContext",t)},/**
 * flickr.photos.getCounts
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getCounts.html
 */s.prototype.photos.getCounts=function(t){return this._("GET","flickr.photos.getCounts",t)},/**
 * flickr.photos.getExif
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getExif.html
 */s.prototype.photos.getExif=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getExif",t)},/**
 * flickr.photos.getFavorites
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getFavorites.html
 */s.prototype.photos.getFavorites=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getFavorites",t)},/**
 * flickr.photos.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getInfo.html
 */s.prototype.photos.getInfo=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getInfo",t)},/**
 * flickr.photos.getNotInSet
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getNotInSet.html
 */s.prototype.photos.getNotInSet=function(t){return this._("GET","flickr.photos.getNotInSet",t)},/**
 * flickr.photos.getPerms
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getPerms.html
 */s.prototype.photos.getPerms=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getPerms",t)},/**
 * flickr.photos.getPopular
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getPopular.html
 */s.prototype.photos.getPopular=function(t){return this._("GET","flickr.photos.getPopular",t)},/**
 * flickr.photos.getRecent
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getRecent.html
 */s.prototype.photos.getRecent=function(t){return this._("GET","flickr.photos.getRecent",t)},/**
 * flickr.photos.getSizes
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getSizes.html
 */s.prototype.photos.getSizes=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.getSizes",t)},/**
 * flickr.photos.getUntagged
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getUntagged.html
 */s.prototype.photos.getUntagged=function(t){return this._("GET","flickr.photos.getUntagged",t)},/**
 * flickr.photos.getWithGeoData
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getWithGeoData.html
 */s.prototype.photos.getWithGeoData=function(t){return this._("GET","flickr.photos.getWithGeoData",t)},/**
 * flickr.photos.getWithoutGeoData
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.getWithoutGeoData.html
 */s.prototype.photos.getWithoutGeoData=function(t){return this._("GET","flickr.photos.getWithoutGeoData",t)},/**
 * flickr.photos.recentlyUpdated
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.recentlyUpdated.html
 */s.prototype.photos.recentlyUpdated=function(t){return o(t,"min_date"),this._("GET","flickr.photos.recentlyUpdated",t)},/**
 * flickr.photos.removeTag
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.removeTag.html
 */s.prototype.photos.removeTag=function(t){return o(t,"tag_id"),this._("POST","flickr.photos.removeTag",t)},/**
 * flickr.photos.search
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.search.html
 */s.prototype.photos.search=function(t){return this._("GET","flickr.photos.search",t)},/**
 * flickr.photos.setContentType
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setContentType.html
 */s.prototype.photos.setContentType=function(t){return o(t,"photo_id"),o(t,"content_type"),this._("POST","flickr.photos.setContentType",t)},/**
 * flickr.photos.setDates
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setDates.html
 */s.prototype.photos.setDates=function(t){return o(t,"photo_id"),this._("POST","flickr.photos.setDates",t)},/**
 * flickr.photos.setMeta
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setMeta.html
 */s.prototype.photos.setMeta=function(t){return o(t,"photo_id"),this._("POST","flickr.photos.setMeta",t)},/**
 * flickr.photos.setPerms
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setPerms.html
 */s.prototype.photos.setPerms=function(t){return o(t,"photo_id"),o(t,"is_public"),o(t,"is_friend"),o(t,"is_family"),this._("POST","flickr.photos.setPerms",t)},/**
 * flickr.photos.setSafetyLevel
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setSafetyLevel.html
 */s.prototype.photos.setSafetyLevel=function(t){return o(t,"photo_id"),this._("POST","flickr.photos.setSafetyLevel",t)},/**
 * flickr.photos.setTags
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.setTags.html
 */s.prototype.photos.setTags=function(t){return o(t,"photo_id"),o(t,"tags"),this._("POST","flickr.photos.setTags",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.comments={},/**
 * flickr.photos.comments.addComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.comments.addComment.html
 */s.prototype.photos.comments.addComment=function(t){return o(t,"photo_id"),o(t,"comment_text"),this._("POST","flickr.photos.comments.addComment",t)},/**
 * flickr.photos.comments.deleteComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.comments.deleteComment.html
 */s.prototype.photos.comments.deleteComment=function(t){return o(t,"comment_id"),this._("POST","flickr.photos.comments.deleteComment",t)},/**
 * flickr.photos.comments.editComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.comments.editComment.html
 */s.prototype.photos.comments.editComment=function(t){return o(t,"comment_id"),o(t,"comment_text"),this._("POST","flickr.photos.comments.editComment",t)},/**
 * flickr.photos.comments.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.comments.getList.html
 */s.prototype.photos.comments.getList=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.comments.getList",t)},/**
 * flickr.photos.comments.getRecentForContacts
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.comments.getRecentForContacts.html
 */s.prototype.photos.comments.getRecentForContacts=function(t){return this._("GET","flickr.photos.comments.getRecentForContacts",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.geo={},/**
 * flickr.photos.geo.batchCorrectLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.batchCorrectLocation.html
 */s.prototype.photos.geo.batchCorrectLocation=function(t){return o(t,"lat"),o(t,"lon"),o(t,"accuracy"),this._("POST","flickr.photos.geo.batchCorrectLocation",t)},/**
 * flickr.photos.geo.correctLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.correctLocation.html
 */s.prototype.photos.geo.correctLocation=function(t){return o(t,"photo_id"),o(t,"foursquare_id"),this._("POST","flickr.photos.geo.correctLocation",t)},/**
 * flickr.photos.geo.getLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.getLocation.html
 */s.prototype.photos.geo.getLocation=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.geo.getLocation",t)},/**
 * flickr.photos.geo.getPerms
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.getPerms.html
 */s.prototype.photos.geo.getPerms=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.geo.getPerms",t)},/**
 * flickr.photos.geo.photosForLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.photosForLocation.html
 */s.prototype.photos.geo.photosForLocation=function(t){return o(t,"lat"),o(t,"lon"),this._("GET","flickr.photos.geo.photosForLocation",t)},/**
 * flickr.photos.geo.removeLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.removeLocation.html
 */s.prototype.photos.geo.removeLocation=function(t){return o(t,"photo_id"),this._("POST","flickr.photos.geo.removeLocation",t)},/**
 * flickr.photos.geo.setContext
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.setContext.html
 */s.prototype.photos.geo.setContext=function(t){return o(t,"photo_id"),o(t,"context"),this._("POST","flickr.photos.geo.setContext",t)},/**
 * flickr.photos.geo.setLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.setLocation.html
 */s.prototype.photos.geo.setLocation=function(t){return o(t,"photo_id"),o(t,"lat"),o(t,"lon"),this._("POST","flickr.photos.geo.setLocation",t)},/**
 * flickr.photos.geo.setPerms
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.geo.setPerms.html
 */s.prototype.photos.geo.setPerms=function(t){return o(t,"is_public"),o(t,"is_contact"),o(t,"is_friend"),o(t,"is_family"),o(t,"photo_id"),this._("POST","flickr.photos.geo.setPerms",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.licenses={},/**
 * flickr.photos.licenses.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.licenses.getInfo.html
 */s.prototype.photos.licenses.getInfo=function(t){return this._("GET","flickr.photos.licenses.getInfo",t)},/**
 * flickr.photos.licenses.setLicense
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.licenses.setLicense.html
 */s.prototype.photos.licenses.setLicense=function(t){return o(t,"photo_id"),o(t,"license_id"),this._("POST","flickr.photos.licenses.setLicense",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.notes={},/**
 * flickr.photos.notes.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.notes.add.html
 */s.prototype.photos.notes.add=function(t){return o(t,"photo_id"),o(t,"note_x"),o(t,"note_y"),o(t,"note_w"),o(t,"note_h"),o(t,"note_text"),this._("POST","flickr.photos.notes.add",t)},/**
 * flickr.photos.notes.delete
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.notes.delete.html
 */s.prototype.photos.notes.delete=function(t){return o(t,"note_id"),this._("POST","flickr.photos.notes.delete",t)},/**
 * flickr.photos.notes.edit
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.notes.edit.html
 */s.prototype.photos.notes.edit=function(t){return o(t,"note_id"),o(t,"note_x"),o(t,"note_y"),o(t,"note_w"),o(t,"note_h"),o(t,"note_text"),this._("POST","flickr.photos.notes.edit",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.people={},/**
 * flickr.photos.people.add
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.people.add.html
 */s.prototype.photos.people.add=function(t){return o(t,"photo_id"),o(t,"user_id"),this._("POST","flickr.photos.people.add",t)},/**
 * flickr.photos.people.delete
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.people.delete.html
 */s.prototype.photos.people.delete=function(t){return o(t,"photo_id"),o(t,"user_id"),this._("POST","flickr.photos.people.delete",t)},/**
 * flickr.photos.people.deleteCoords
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.people.deleteCoords.html
 */s.prototype.photos.people.deleteCoords=function(t){return o(t,"photo_id"),o(t,"user_id"),this._("POST","flickr.photos.people.deleteCoords",t)},/**
 * flickr.photos.people.editCoords
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.people.editCoords.html
 */s.prototype.photos.people.editCoords=function(t){return o(t,"photo_id"),o(t,"user_id"),o(t,"person_x"),o(t,"person_y"),o(t,"person_w"),o(t,"person_h"),this._("POST","flickr.photos.people.editCoords",t)},/**
 * flickr.photos.people.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.people.getList.html
 */s.prototype.photos.people.getList=function(t){return o(t,"photo_id"),this._("GET","flickr.photos.people.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.suggestions={},/**
 * flickr.photos.suggestions.approveSuggestion
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.suggestions.approveSuggestion.html
 */s.prototype.photos.suggestions.approveSuggestion=function(t){return o(t,"suggestion_id"),this._("POST","flickr.photos.suggestions.approveSuggestion",t)},/**
 * flickr.photos.suggestions.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.suggestions.getList.html
 */s.prototype.photos.suggestions.getList=function(t){return this._("GET","flickr.photos.suggestions.getList",t)},/**
 * flickr.photos.suggestions.rejectSuggestion
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.suggestions.rejectSuggestion.html
 */s.prototype.photos.suggestions.rejectSuggestion=function(t){return o(t,"suggestion_id"),this._("POST","flickr.photos.suggestions.rejectSuggestion",t)},/**
 * flickr.photos.suggestions.removeSuggestion
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.suggestions.removeSuggestion.html
 */s.prototype.photos.suggestions.removeSuggestion=function(t){return o(t,"suggestion_id"),this._("POST","flickr.photos.suggestions.removeSuggestion",t)},/**
 * flickr.photos.suggestions.suggestLocation
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.suggestions.suggestLocation.html
 */s.prototype.photos.suggestions.suggestLocation=function(t){return o(t,"photo_id"),o(t,"lat"),o(t,"lon"),this._("POST","flickr.photos.suggestions.suggestLocation",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.transform={},/**
 * flickr.photos.transform.rotate
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.transform.rotate.html
 */s.prototype.photos.transform.rotate=function(t){return o(t,"photo_id"),o(t,"degrees"),this._("POST","flickr.photos.transform.rotate",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photos.upload={},/**
 * flickr.photos.upload.checkTickets
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photos.upload.checkTickets.html
 */s.prototype.photos.upload.checkTickets=function(t){return o(t,"tickets"),this._("GET","flickr.photos.upload.checkTickets",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photosets={},/**
 * flickr.photosets.addPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.addPhoto.html
 */s.prototype.photosets.addPhoto=function(t){return o(t,"photoset_id"),o(t,"photo_id"),this._("POST","flickr.photosets.addPhoto",t)},/**
 * flickr.photosets.create
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.create.html
 */s.prototype.photosets.create=function(t){return o(t,"title"),o(t,"primary_photo_id"),this._("POST","flickr.photosets.create",t)},/**
 * flickr.photosets.delete
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.delete.html
 */s.prototype.photosets.delete=function(t){return o(t,"photoset_id"),this._("POST","flickr.photosets.delete",t)},/**
 * flickr.photosets.editMeta
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.editMeta.html
 */s.prototype.photosets.editMeta=function(t){return o(t,"photoset_id"),o(t,"title"),this._("POST","flickr.photosets.editMeta",t)},/**
 * flickr.photosets.editPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.editPhotos.html
 */s.prototype.photosets.editPhotos=function(t){return o(t,"photoset_id"),o(t,"primary_photo_id"),o(t,"photo_ids"),this._("POST","flickr.photosets.editPhotos",t)},/**
 * flickr.photosets.getContext
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.getContext.html
 */s.prototype.photosets.getContext=function(t){return o(t,"photo_id"),o(t,"photoset_id"),this._("GET","flickr.photosets.getContext",t)},/**
 * flickr.photosets.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.getInfo.html
 */s.prototype.photosets.getInfo=function(t){return o(t,"photoset_id"),o(t,"user_id"),this._("GET","flickr.photosets.getInfo",t)},/**
 * flickr.photosets.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.getList.html
 */s.prototype.photosets.getList=function(t){return this._("GET","flickr.photosets.getList",t)},/**
 * flickr.photosets.getPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.getPhotos.html
 */s.prototype.photosets.getPhotos=function(t){return o(t,"photoset_id"),o(t,"user_id"),this._("GET","flickr.photosets.getPhotos",t)},/**
 * flickr.photosets.orderSets
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.orderSets.html
 */s.prototype.photosets.orderSets=function(t){return o(t,"photoset_ids"),this._("POST","flickr.photosets.orderSets",t)},/**
 * flickr.photosets.removePhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.removePhoto.html
 */s.prototype.photosets.removePhoto=function(t){return o(t,"photoset_id"),o(t,"photo_id"),this._("POST","flickr.photosets.removePhoto",t)},/**
 * flickr.photosets.removePhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.removePhotos.html
 */s.prototype.photosets.removePhotos=function(t){return o(t,"photoset_id"),o(t,"photo_ids"),this._("POST","flickr.photosets.removePhotos",t)},/**
 * flickr.photosets.reorderPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.reorderPhotos.html
 */s.prototype.photosets.reorderPhotos=function(t){return o(t,"photoset_id"),o(t,"photo_ids"),this._("POST","flickr.photosets.reorderPhotos",t)},/**
 * flickr.photosets.setPrimaryPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.setPrimaryPhoto.html
 */s.prototype.photosets.setPrimaryPhoto=function(t){return o(t,"photoset_id"),o(t,"photo_id"),this._("POST","flickr.photosets.setPrimaryPhoto",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.photosets.comments={},/**
 * flickr.photosets.comments.addComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.comments.addComment.html
 */s.prototype.photosets.comments.addComment=function(t){return o(t,"photoset_id"),o(t,"comment_text"),this._("POST","flickr.photosets.comments.addComment",t)},/**
 * flickr.photosets.comments.deleteComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.comments.deleteComment.html
 */s.prototype.photosets.comments.deleteComment=function(t){return o(t,"comment_id"),this._("POST","flickr.photosets.comments.deleteComment",t)},/**
 * flickr.photosets.comments.editComment
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.comments.editComment.html
 */s.prototype.photosets.comments.editComment=function(t){return o(t,"comment_id"),o(t,"comment_text"),this._("POST","flickr.photosets.comments.editComment",t)},/**
 * flickr.photosets.comments.getList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.photosets.comments.getList.html
 */s.prototype.photosets.comments.getList=function(t){return o(t,"photoset_id"),this._("GET","flickr.photosets.comments.getList",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.places={},/**
 * flickr.places.find
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.find.html
 */s.prototype.places.find=function(t){return o(t,"query"),this._("GET","flickr.places.find",t)},/**
 * flickr.places.findByLatLon
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.findByLatLon.html
 */s.prototype.places.findByLatLon=function(t){return o(t,"lat"),o(t,"lon"),this._("GET","flickr.places.findByLatLon",t)},/**
 * flickr.places.getChildrenWithPhotosPublic
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getChildrenWithPhotosPublic.html
 */s.prototype.places.getChildrenWithPhotosPublic=function(t){return this._("GET","flickr.places.getChildrenWithPhotosPublic",t)},/**
 * flickr.places.getInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getInfo.html
 */s.prototype.places.getInfo=function(t){return this._("GET","flickr.places.getInfo",t)},/**
 * flickr.places.getInfoByUrl
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getInfoByUrl.html
 */s.prototype.places.getInfoByUrl=function(t){return o(t,"url"),this._("GET","flickr.places.getInfoByUrl",t)},/**
 * flickr.places.getPlaceTypes
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getPlaceTypes.html
 */s.prototype.places.getPlaceTypes=function(t){return this._("GET","flickr.places.getPlaceTypes",t)},/**
 * flickr.places.getShapeHistory
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getShapeHistory.html
 */s.prototype.places.getShapeHistory=function(t){return this._("GET","flickr.places.getShapeHistory",t)},/**
 * flickr.places.getTopPlacesList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.getTopPlacesList.html
 */s.prototype.places.getTopPlacesList=function(t){return o(t,"place_type_id"),this._("GET","flickr.places.getTopPlacesList",t)},/**
 * flickr.places.placesForBoundingBox
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.placesForBoundingBox.html
 */s.prototype.places.placesForBoundingBox=function(t){return o(t,"bbox"),this._("GET","flickr.places.placesForBoundingBox",t)},/**
 * flickr.places.placesForContacts
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.placesForContacts.html
 */s.prototype.places.placesForContacts=function(t){return this._("GET","flickr.places.placesForContacts",t)},/**
 * flickr.places.placesForTags
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.placesForTags.html
 */s.prototype.places.placesForTags=function(t){return o(t,"place_type_id"),this._("GET","flickr.places.placesForTags",t)},/**
 * flickr.places.placesForUser
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.placesForUser.html
 */s.prototype.places.placesForUser=function(t){return this._("GET","flickr.places.placesForUser",t)},/**
 * flickr.places.resolvePlaceId
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.resolvePlaceId.html
 */s.prototype.places.resolvePlaceId=function(t){return o(t,"place_id"),this._("GET","flickr.places.resolvePlaceId",t)},/**
 * flickr.places.resolvePlaceURL
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.resolvePlaceURL.html
 */s.prototype.places.resolvePlaceURL=function(t){return o(t,"url"),this._("GET","flickr.places.resolvePlaceURL",t)},/**
 * flickr.places.tagsForPlace
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.places.tagsForPlace.html
 */s.prototype.places.tagsForPlace=function(t){return this._("GET","flickr.places.tagsForPlace",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.prefs={},/**
 * flickr.prefs.getContentType
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.prefs.getContentType.html
 */s.prototype.prefs.getContentType=function(t){return this._("GET","flickr.prefs.getContentType",t)},/**
 * flickr.prefs.getGeoPerms
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.prefs.getGeoPerms.html
 */s.prototype.prefs.getGeoPerms=function(t){return this._("GET","flickr.prefs.getGeoPerms",t)},/**
 * flickr.prefs.getHidden
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.prefs.getHidden.html
 */s.prototype.prefs.getHidden=function(t){return this._("GET","flickr.prefs.getHidden",t)},/**
 * flickr.prefs.getPrivacy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.prefs.getPrivacy.html
 */s.prototype.prefs.getPrivacy=function(t){return this._("GET","flickr.prefs.getPrivacy",t)},/**
 * flickr.prefs.getSafetyLevel
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.prefs.getSafetyLevel.html
 */s.prototype.prefs.getSafetyLevel=function(t){return this._("GET","flickr.prefs.getSafetyLevel",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.profile={},/**
 * flickr.profile.getProfile
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.profile.getProfile.html
 */s.prototype.profile.getProfile=function(t){return o(t,"user_id"),this._("GET","flickr.profile.getProfile",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.push={},/**
 * flickr.push.getSubscriptions
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.push.getSubscriptions.html
 */s.prototype.push.getSubscriptions=function(t){return this._("GET","flickr.push.getSubscriptions",t)},/**
 * flickr.push.getTopics
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.push.getTopics.html
 */s.prototype.push.getTopics=function(t){return this._("GET","flickr.push.getTopics",t)},/**
 * flickr.push.subscribe
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.push.subscribe.html
 */s.prototype.push.subscribe=function(t){return o(t,"topic"),o(t,"callback"),o(t,"verify"),this._("GET","flickr.push.subscribe",t)},/**
 * flickr.push.unsubscribe
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.push.unsubscribe.html
 */s.prototype.push.unsubscribe=function(t){return o(t,"topic"),o(t,"callback"),o(t,"verify"),this._("GET","flickr.push.unsubscribe",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.reflection={},/**
 * flickr.reflection.getMethodInfo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.reflection.getMethodInfo.html
 */s.prototype.reflection.getMethodInfo=function(t){return o(t,"method_name"),this._("GET","flickr.reflection.getMethodInfo",t)},/**
 * flickr.reflection.getMethods
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.reflection.getMethods.html
 */s.prototype.reflection.getMethods=function(t){return this._("GET","flickr.reflection.getMethods",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.stats={},/**
 * flickr.stats.getCSVFiles
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getCSVFiles.html
 */s.prototype.stats.getCSVFiles=function(t){return this._("GET","flickr.stats.getCSVFiles",t)},/**
 * flickr.stats.getCollectionDomains
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getCollectionDomains.html
 */s.prototype.stats.getCollectionDomains=function(t){return o(t,"date"),this._("GET","flickr.stats.getCollectionDomains",t)},/**
 * flickr.stats.getCollectionReferrers
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getCollectionReferrers.html
 */s.prototype.stats.getCollectionReferrers=function(t){return o(t,"date"),o(t,"domain"),this._("GET","flickr.stats.getCollectionReferrers",t)},/**
 * flickr.stats.getCollectionStats
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getCollectionStats.html
 */s.prototype.stats.getCollectionStats=function(t){return o(t,"date"),o(t,"collection_id"),this._("GET","flickr.stats.getCollectionStats",t)},/**
 * flickr.stats.getPhotoDomains
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotoDomains.html
 */s.prototype.stats.getPhotoDomains=function(t){return o(t,"date"),this._("GET","flickr.stats.getPhotoDomains",t)},/**
 * flickr.stats.getPhotoReferrers
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotoReferrers.html
 */s.prototype.stats.getPhotoReferrers=function(t){return o(t,"date"),o(t,"domain"),this._("GET","flickr.stats.getPhotoReferrers",t)},/**
 * flickr.stats.getPhotoStats
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotoStats.html
 */s.prototype.stats.getPhotoStats=function(t){return o(t,"date"),o(t,"photo_id"),this._("GET","flickr.stats.getPhotoStats",t)},/**
 * flickr.stats.getPhotosetDomains
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotosetDomains.html
 */s.prototype.stats.getPhotosetDomains=function(t){return o(t,"date"),this._("GET","flickr.stats.getPhotosetDomains",t)},/**
 * flickr.stats.getPhotosetReferrers
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotosetReferrers.html
 */s.prototype.stats.getPhotosetReferrers=function(t){return o(t,"date"),o(t,"domain"),this._("GET","flickr.stats.getPhotosetReferrers",t)},/**
 * flickr.stats.getPhotosetStats
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotosetStats.html
 */s.prototype.stats.getPhotosetStats=function(t){return o(t,"date"),o(t,"photoset_id"),this._("GET","flickr.stats.getPhotosetStats",t)},/**
 * flickr.stats.getPhotostreamDomains
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotostreamDomains.html
 */s.prototype.stats.getPhotostreamDomains=function(t){return o(t,"date"),this._("GET","flickr.stats.getPhotostreamDomains",t)},/**
 * flickr.stats.getPhotostreamReferrers
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotostreamReferrers.html
 */s.prototype.stats.getPhotostreamReferrers=function(t){return o(t,"date"),o(t,"domain"),this._("GET","flickr.stats.getPhotostreamReferrers",t)},/**
 * flickr.stats.getPhotostreamStats
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPhotostreamStats.html
 */s.prototype.stats.getPhotostreamStats=function(t){return o(t,"date"),this._("GET","flickr.stats.getPhotostreamStats",t)},/**
 * flickr.stats.getPopularPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getPopularPhotos.html
 */s.prototype.stats.getPopularPhotos=function(t){return this._("GET","flickr.stats.getPopularPhotos",t)},/**
 * flickr.stats.getTotalViews
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.stats.getTotalViews.html
 */s.prototype.stats.getTotalViews=function(t){return this._("GET","flickr.stats.getTotalViews",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.tags={},/**
 * flickr.tags.getClusterPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getClusterPhotos.html
 */s.prototype.tags.getClusterPhotos=function(t){return o(t,"tag"),o(t,"cluster_id"),this._("GET","flickr.tags.getClusterPhotos",t)},/**
 * flickr.tags.getClusters
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getClusters.html
 */s.prototype.tags.getClusters=function(t){return o(t,"tag"),this._("GET","flickr.tags.getClusters",t)},/**
 * flickr.tags.getHotList
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getHotList.html
 */s.prototype.tags.getHotList=function(t){return this._("GET","flickr.tags.getHotList",t)},/**
 * flickr.tags.getListPhoto
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getListPhoto.html
 */s.prototype.tags.getListPhoto=function(t){return o(t,"photo_id"),this._("GET","flickr.tags.getListPhoto",t)},/**
 * flickr.tags.getListUser
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getListUser.html
 */s.prototype.tags.getListUser=function(t){return this._("GET","flickr.tags.getListUser",t)},/**
 * flickr.tags.getListUserPopular
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getListUserPopular.html
 */s.prototype.tags.getListUserPopular=function(t){return this._("GET","flickr.tags.getListUserPopular",t)},/**
 * flickr.tags.getListUserRaw
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getListUserRaw.html
 */s.prototype.tags.getListUserRaw=function(t){return this._("GET","flickr.tags.getListUserRaw",t)},/**
 * flickr.tags.getMostFrequentlyUsed
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getMostFrequentlyUsed.html
 */s.prototype.tags.getMostFrequentlyUsed=function(t){return this._("GET","flickr.tags.getMostFrequentlyUsed",t)},/**
 * flickr.tags.getRelated
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.tags.getRelated.html
 */s.prototype.tags.getRelated=function(t){return o(t,"tag"),this._("GET","flickr.tags.getRelated",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.test={},/**
 * flickr.test.echo
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.test.echo.html
 */s.prototype.test.echo=function(t){return this._("GET","flickr.test.echo",t)},/**
 * flickr.test.login
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.test.login.html
 */s.prototype.test.login=function(t){return this._("GET","flickr.test.login",t)},/**
 * flickr.test.null
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.test.null.html
 */s.prototype.test.null=function(t){return this._("GET","flickr.test.null",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.testimonials={},/**
 * flickr.testimonials.addTestimonial
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.addTestimonial.html
 */s.prototype.testimonials.addTestimonial=function(t){return o(t,"user_id"),o(t,"testimonial_text"),this._("POST","flickr.testimonials.addTestimonial",t)},/**
 * flickr.testimonials.approveTestimonial
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.approveTestimonial.html
 */s.prototype.testimonials.approveTestimonial=function(t){return o(t,"testimonial_id"),this._("POST","flickr.testimonials.approveTestimonial",t)},/**
 * flickr.testimonials.deleteTestimonial
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.deleteTestimonial.html
 */s.prototype.testimonials.deleteTestimonial=function(t){return o(t,"testimonial_id"),this._("POST","flickr.testimonials.deleteTestimonial",t)},/**
 * flickr.testimonials.editTestimonial
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.editTestimonial.html
 */s.prototype.testimonials.editTestimonial=function(t){return o(t,"user_id"),o(t,"testimonial_id"),o(t,"testimonial_text"),this._("POST","flickr.testimonials.editTestimonial",t)},/**
 * flickr.testimonials.getAllTestimonialsAbout
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAbout.html
 */s.prototype.testimonials.getAllTestimonialsAbout=function(t){return this._("GET","flickr.testimonials.getAllTestimonialsAbout",t)},/**
 * flickr.testimonials.getAllTestimonialsAboutBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsAboutBy.html
 */s.prototype.testimonials.getAllTestimonialsAboutBy=function(t){return o(t,"user_id"),this._("GET","flickr.testimonials.getAllTestimonialsAboutBy",t)},/**
 * flickr.testimonials.getAllTestimonialsBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getAllTestimonialsBy.html
 */s.prototype.testimonials.getAllTestimonialsBy=function(t){return this._("GET","flickr.testimonials.getAllTestimonialsBy",t)},/**
 * flickr.testimonials.getPendingTestimonialsAbout
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAbout.html
 */s.prototype.testimonials.getPendingTestimonialsAbout=function(t){return this._("GET","flickr.testimonials.getPendingTestimonialsAbout",t)},/**
 * flickr.testimonials.getPendingTestimonialsAboutBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsAboutBy.html
 */s.prototype.testimonials.getPendingTestimonialsAboutBy=function(t){return o(t,"user_id"),this._("GET","flickr.testimonials.getPendingTestimonialsAboutBy",t)},/**
 * flickr.testimonials.getPendingTestimonialsBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getPendingTestimonialsBy.html
 */s.prototype.testimonials.getPendingTestimonialsBy=function(t){return this._("GET","flickr.testimonials.getPendingTestimonialsBy",t)},/**
 * flickr.testimonials.getTestimonialsAbout
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAbout.html
 */s.prototype.testimonials.getTestimonialsAbout=function(t){return o(t,"user_id"),this._("GET","flickr.testimonials.getTestimonialsAbout",t)},/**
 * flickr.testimonials.getTestimonialsAboutBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsAboutBy.html
 */s.prototype.testimonials.getTestimonialsAboutBy=function(t){return o(t,"user_id"),this._("GET","flickr.testimonials.getTestimonialsAboutBy",t)},/**
 * flickr.testimonials.getTestimonialsBy
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.testimonials.getTestimonialsBy.html
 */s.prototype.testimonials.getTestimonialsBy=function(t){return o(t,"user_id"),this._("GET","flickr.testimonials.getTestimonialsBy",t)},/**
 * @type {Object}
 * @ignore
 */s.prototype.urls={},/**
 * flickr.urls.getGroup
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.getGroup.html
 */s.prototype.urls.getGroup=function(t){return o(t,"group_id"),this._("GET","flickr.urls.getGroup",t)},/**
 * flickr.urls.getUserPhotos
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.getUserPhotos.html
 */s.prototype.urls.getUserPhotos=function(t){return this._("GET","flickr.urls.getUserPhotos",t)},/**
 * flickr.urls.getUserProfile
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.getUserProfile.html
 */s.prototype.urls.getUserProfile=function(t){return this._("GET","flickr.urls.getUserProfile",t)},/**
 * flickr.urls.lookupGallery
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.lookupGallery.html
 */s.prototype.urls.lookupGallery=function(t){return o(t,"url"),this._("GET","flickr.urls.lookupGallery",t)},/**
 * flickr.urls.lookupGroup
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.lookupGroup.html
 */s.prototype.urls.lookupGroup=function(t){return o(t,"url"),this._("GET","flickr.urls.lookupGroup",t)},/**
 * flickr.urls.lookupUser
 * @param {Object} [args]
 * @returns {Request}
 * @ignore
 * @see https://www.flickr.com/services/api/flickr.urls.lookupUser.html
 */s.prototype.urls.lookupUser=function(t){return o(t,"url"),this._("GET","flickr.urls.lookupUser",t)},t.exports=s}),n.register("rDKgn",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */var r=n("fIEtj"),o=n("3EzIb").parse;/**
 * Subclass superagent's Request class so that we can add
 * our own functionality to it.
 * @param {String} method
 * @param {String} url
 * @constructor
 */function i(t,e){r.Request.call(this,t,e),// keep track of all request params for oauth signing
this.params={};// superagent no longer sets a default user agent header
}n("1Sy3E").version,i.prototype=Object.create(r.Request.prototype),/**
 * Override .query() to also add query string params to our params hash.
 * @param {String|Object} val
 * @returns {this}
 */i.prototype.query=function(t){// super
return"string"==typeof t?Object.assign(this.params,o(t)):Object.assign(this.params,t),r.Request.prototype.query.call(this,t)},/**
 * Override .field() to also add fields to our params hash.
 * @param {String|Object} key
 * @param {String} val
 * @returns {this}
 */i.prototype.field=function(t,e){// super
return"string"==typeof t?this.params[t]=e:Object.assign(this.params,t),r.Request.prototype.field.call(this,t,e)},/**
 * Convenience method to either call .query() or .field()
 * based on this request's method.
 * @param {Object} obj
 * @returns {this}
 */i.prototype.param=function(t){return"POST"===this.method?this.field.call(this,t):this.query.call(this,t)},/**
 * Re-export all of the things superagent exports.
 */Object.assign(/**
 * Mimic the request factory method that superagent exports.
 * @param {String} method
 * @param {String} url
 * @returns {Request}
 */e=t.exports=function(t,r){return(// callback
"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r))},r),/**
 * @module Request
 */e.Request=i}),n.register("fIEtj",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}"undefined"!=typeof window?o=window:"undefined"==typeof self?(// Other environments
console.warn("Using browser-only version of superagent in non-browser environment"),o=void 0):o=self;var o,i=n("2gbVO"),s=n("hNj5O"),a=n("7O6yJ"),u=n("hukoe"),l=n("kA8Ik"),c=n("4vlGk"),p=n("j5XVX");/**
 * Noop.
 */function h(){}/**
 * Expose `request`.
 */t.exports=function(t,r){return(// callback
"function"==typeof r?new e.Request("GET",t).end(r):1==arguments.length?new e.Request("GET",t):new e.Request(t,r))};var f=e=t.exports;e.Request=_,/**
 * Determine XHR.
 */f.getXHR=function(){if(o.XMLHttpRequest&&(!o.location||"file:"!==o.location.protocol||!o.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */var d="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */function y(t){if(!l(t))return t;var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */function t(e,r,n){if(void 0!==n){if(null===n){e.push(encodeURI(r));return}if(Array.isArray(n))n.forEach(function(n){t(e,r,n)});else if(l(n))for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t(e,"".concat(r,"[").concat(o,"]"),n[o]);else e.push(encodeURI(r)+"="+encodeURIComponent(n))}}(e,r,t[r]);return e.join("&")}/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */function g(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)-1===(r=(e=o[i]).indexOf("="))?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */function m(t){// should match /json or +json
// but not /json-seq
return/[/+]json($|[^-\w])/i.test(t)}/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */function b(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!==this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;// handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
1223===e&&(e=204),this._setStatusProperties(e),this.headers=/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */function(t){for(var e,r,n,o,i=t.split(/\r?\n/),s={},a=0,u=i.length;a<u;++a)-1!==(e=(r=i[a]).indexOf(":"))&&(n=r.slice(0,e).toLowerCase(),o=d(r.slice(e+1)),s[n]=o);return s}(this.xhr.getAllResponseHeaders()),this.header=this.headers,// getResponseHeader still works. so we get content-type even if getting
// other headers fails.
this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"===this.req.method?null:this._parseBody(this.text?this.text:this.xhr.response)}// eslint-disable-next-line new-cap
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */function _(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t,e=null,n=null;try{n=new b(r)}catch(t){return(e=Error("Parser is unable to parse the response")).parse=!0,e.original=t,r.xhr?(// ie9 doesn't have 'response' property
e.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,e.status=r.xhr.status?r.xhr.status:null,e.statusCode=e.status):(e.rawResponse=null,e.status=null),r.callback(e)}r.emit("response",n);try{r._isResponseOK(n)||(t=Error(n.statusText||n.text||"Unsuccessful HTTP response"))}catch(e){t=e;// ok() callback can throw
}// #1000 don't catch errors from the callback to avoid double calling it
t?(t.original=e,t.response=n,t.status=n.status,r.callback(t,n)):r.callback(null,n)})}/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */function v(t,e,r){var n=f("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}/**
 * Expose serialization method.
 */f.serializeObject=y,/**
 * Expose parser.
 */f.parseString=g,/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */f.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */f.serialize={"application/x-www-form-urlencoded":a.stringify,"application/json":s},/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */f.parse={"application/x-www-form-urlencoded":g,"application/json":JSON.parse},c(b.prototype),/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */b.prototype._parseBody=function(t){var e=f.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&m(this.type)&&(e=f.parse["application/json"]),e&&t&&(t.length>0||t instanceof Object)?e(t):null)},/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */b.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n=Error("cannot ".concat(e," ").concat(r," (").concat(this.status,")"));return n.status=this.status,n.method=e,n.url=r,n},/**
 * Expose `Response`.
 */f.Response=b,/**
 * Mixin `Emitter` and `RequestBase`.
 */// eslint-disable-next-line new-cap
i(_.prototype),u(_.prototype),/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */_.prototype.type=function(t){return this.set("Content-Type",f.types[t]||t),this},/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */_.prototype.accept=function(t){return this.set("Accept",f.types[t]||t),this},/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */_.prototype.auth=function(t,e,n){return 1==arguments.length&&(e=""),"object"===r(e)&&null!==e&&(// pass is optional and can be replaced with options
n=e,e=""),n||(n={type:"function"==typeof btoa?"basic":"auto"}),this._auth(t,e,n,function(t){if("function"==typeof btoa)return btoa(t);throw Error("Cannot use basic auth, btoa is not a function")})},/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */_.prototype.query=function(t){return"string"!=typeof t&&(t=y(t)),t&&this._query.push(t),this},/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */_.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},_.prototype._getFormData=function(){return this._formData||(this._formData=new o.FormData),this._formData},/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */_.prototype.callback=function(t,e){if(this._shouldRetry(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */_.prototype.crossDomainError=function(){var t=Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},_.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},_.prototype.ca=_.prototype.agent,_.prototype.buffer=_.prototype.ca,_.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},_.prototype.pipe=_.prototype.write,/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */_.prototype._isHost=function(t){// Native objects stringify to [object File], [object Blob], [object FormData], etc.
return t&&"object"===r(t)&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */_.prototype.end=function(t){this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||h,this._finalizeQueryString(),this._end()},_.prototype._setUploadTimeout=function(){var t=this;// upload timeout it's wokrs only if deadline timeout is off
this._uploadTimeout&&!this._uploadTimeoutTimer&&(this._uploadTimeoutTimer=setTimeout(function(){t._timeoutError("Upload timeout of ",t._uploadTimeout,"ETIMEDOUT")},this._uploadTimeout))},_.prototype._end=function(){if(this._aborted)return this.callback(Error("The request has been aborted even before .end() was called"));var t=this;this.xhr=f.getXHR();var e=this.xhr,r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r,n=e.readyState;if(n>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4===n){try{r=e.status}catch(t){r=0}if(!r){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var n=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100,100===r.percent&&clearTimeout(t._uploadTimeoutTimer)),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.addEventListener("progress",n.bind(null,"download")),e.upload&&e.upload.addEventListener("progress",n.bind(null,"upload"))}catch(t){// Reported here:
// https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
}e.upload&&this._setUploadTimeout();// initiate request
try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){// see #1149
return this.callback(t)}// CORS
if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!==this.method&&"HEAD"!==this.method&&"string"!=typeof r&&!this._isHost(r)){// serialize stuff
var o=this._header["content-type"],i=this._serializer||f.serialize[o?o.split(";")[0]:""];!i&&m(o)&&(i=f.serialize["application/json"]),i&&(r=i(r))}// set header fields
for(var s in this.header)null!==this.header[s]&&Object.prototype.hasOwnProperty.call(this.header,s)&&e.setRequestHeader(s,this.header[s]);this._responseType&&(e.responseType=this._responseType),// send stuff
this.emit("request",this),// We need null here if data is undefined
e.send(void 0===r?null:r)},f.agent=function(){return new p},["GET","POST","OPTIONS","PATCH","PUT","DELETE"].forEach(function(t){p.prototype[t.toLowerCase()]=function(e,r){var n=new f.Request(t,e);return this._setDefaults(n),r&&n.end(r),n}}),p.prototype.del=p.prototype.delete,/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.get=function(t,e,r){var n=f("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.head=function(t,e,r){var n=f("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.options=function(t,e,r){var n=f("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},f.del=v,f.delete=v,/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.patch=function(t,e,r){var n=f("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.post=function(t,e,r){var n=f("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */f.put=function(t,e,r){var n=f("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}}),n.register("2gbVO",function(t,e){/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */function r(t){if(t)return(/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}(t))}/**
 * Expose `Emitter`.
 */t.exports=r,/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){// all
if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;// specific event
var r,n=this._callbacks["$"+t];if(!n)return this;// remove all handlers
if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var o=0;o<n.length;o++)if((r=n[o])===e||r.fn===e){n.splice(o,1);break}return 0===n.length&&delete this._callbacks["$"+t],this},/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */r.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=Array(arguments.length-1),r=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */r.prototype.hasListeners=function(t){return!!this.listeners(t).length}}),n.register("hNj5O",function(t,e){t.exports=a,a.default=a,a.stable=c,a.stableStringify=c;var r="[...]",n="[Circular]",o=[],i=[];function s(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}// Regular stringify
function a(t,e,a,l){void 0===l&&(l=s()),function t(e,o,i,s,a,l,c){if(l+=1,"object"==typeof e&&null!==e){for(p=0;p<s.length;p++)if(s[p]===e){u(n,e,o,a);return}if(void 0!==c.depthLimit&&l>c.depthLimit||void 0!==c.edgesLimit&&i+1>c.edgesLimit){u(r,e,o,a);return}// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(s.push(e),Array.isArray(e))for(p=0;p<e.length;p++)t(e[p],p,p,s,e,l,c);else{var p,h=Object.keys(e);for(p=0;p<h.length;p++){var f=h[p];t(e[f],f,p,s,e,l,c)}}s.pop()}}(t,"",0,[],void 0,0,l);try{c=0===i.length?JSON.stringify(t,e,a):JSON.stringify(t,p(e),a)}catch(t){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;0!==o.length;){var c,h=o.pop();4===h.length?Object.defineProperty(h[0],h[1],h[3]):h[0][h[1]]=h[2]}}return c}function u(t,e,r,n){var s=Object.getOwnPropertyDescriptor(n,r);void 0!==s.get?s.configurable?(Object.defineProperty(n,r,{value:t}),o.push([n,r,e,s])):i.push([e,r,t]):(n[r]=t,o.push([n,r,e]))}// Stable-stringify
function l(t,e){return t<e?-1:t>e?1:0}function c(t,e,a,c){void 0===c&&(c=s());var h,f=function t(e,i,s,a,c,p,h){if(p+=1,"object"==typeof e&&null!==e){for(f=0;f<a.length;f++)if(a[f]===e){u(n,e,i,c);return}try{if("function"==typeof e.toJSON)return}catch(t){return}if(void 0!==h.depthLimit&&p>h.depthLimit||void 0!==h.edgesLimit&&s+1>h.edgesLimit){u(r,e,i,c);return}// Optimize for Arrays. Big arrays could kill the performance otherwise!
if(a.push(e),Array.isArray(e))for(f=0;f<e.length;f++)t(e[f],f,f,a,e,p,h);else{// Create a temporary object in the required way
var f,d={},y=Object.keys(e).sort(l);for(f=0;f<y.length;f++){var g=y[f];t(e[g],g,f,a,e,p,h),d[g]=e[g]}if(void 0===c)return d;o.push([c,i,e]),c[i]=d}a.pop()}}(t,"",0,[],void 0,0,c)||t;try{h=0===i.length?JSON.stringify(f,e,a):JSON.stringify(f,p(e),a)}catch(t){return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{// Ensure that we restore the object as it was.
for(;0!==o.length;){var d=o.pop();4===d.length?Object.defineProperty(d[0],d[1],d[3]):d[0][d[1]]=d[2]}}return h}// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function p(t){return t=void 0!==t?t:function(t,e){return e},function(e,r){if(i.length>0)for(var n=0;n<i.length;n++){var o=i[n];if(o[1]===e&&o[0]===r){r=o[2],i.splice(n,1);break}}return t.call(this,e,r)}}}),n.register("7O6yJ",function(t,e){var r=n("28rA7"),o=n("66Ely"),i=n("dzbNN");t.exports={formats:i,parse:o,stringify:r}}),n.register("28rA7",function(t,e){var r=n("1Me3I"),o=n("82eDC"),i=n("dzbNN"),s=Object.prototype.hasOwnProperty,a={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},u=Array.isArray,l=String.prototype.split,c=Array.prototype.push,p=function(t,e){c.apply(t,u(e)?e:[e])},h=Date.prototype.toISOString,f=i.default,d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,format:f,formatter:i.formatters[f],// deprecated
indices:!1,serializeDate:function(t){return h.call(t)},skipNulls:!1,strictNullHandling:!1},y={},g=function t(e,n,i,s,a,c,h,f,g,m,b,_,v,w,E,T){for(var x,O,S=e,A=T,P=0,k=!1;void 0!==(A=A.get(y))&&!k;){// Where object last appeared in the ref tree
var D=A.get(e);if(P+=1,void 0!==D){if(D===P)throw RangeError("Cyclic object value");// Break while
k=!0}void 0===A.get(y)&&(P=0)}if("function"==typeof f?S=f(n,S):S instanceof Date?S=b(S):"comma"===i&&u(S)&&(S=o.maybeMap(S,function(t){return t instanceof Date?b(t):t})),null===S){if(a)return h&&!w?h(n,d.encoder,E,"key",_):n;S=""}if("string"==typeof(x=S)||"number"==typeof x||"boolean"==typeof x||"symbol"==typeof x||"bigint"==typeof x||o.isBuffer(S)){if(h){var I=w?n:h(n,d.encoder,E,"key",_);if("comma"===i&&w){for(var C=l.call(String(S),","),N="",R=0;R<C.length;++R)N+=(0===R?"":",")+v(h(C[R],d.encoder,E,"value",_));return[v(I)+(s&&u(S)&&1===C.length?"[]":"")+"="+N]}return[v(I)+"="+v(h(S,d.encoder,E,"value",_))]}return[v(n)+"="+v(String(S))]}var L=[];if(void 0===S)return L;if("comma"===i&&u(S))O=[{value:S.length>0?S.join(",")||null:void 0}];else if(u(f))O=f;else{var j=Object.keys(S);O=g?j.sort(g):j}for(var M=s&&u(S)&&1===S.length?n+"[]":n,F=0;F<O.length;++F){var B=O[F],U="object"==typeof B&&void 0!==B.value?B.value:S[B];if(!c||null!==U){var G=u(S)?"function"==typeof i?i(M,B):M:M+(m?"."+B:"["+B+"]");T.set(e,P);var V=r();V.set(y,T),p(L,t(U,G,i,s,a,c,h,f,g,m,b,_,v,w,E,V))}}return L},m=function(t){if(!t)return d;if(null!==t.encoder&&void 0!==t.encoder&&"function"!=typeof t.encoder)throw TypeError("Encoder has to be a function.");var e=t.charset||d.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==t.format){if(!s.call(i.formatters,t.format))throw TypeError("Unknown format option provided.");r=t.format}var n=i.formatters[r],o=d.filter;return("function"==typeof t.filter||u(t.filter))&&(o=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:d.addQueryPrefix,allowDots:void 0===t.allowDots?d.allowDots:!!t.allowDots,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:d.charsetSentinel,delimiter:void 0===t.delimiter?d.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:d.encode,encoder:"function"==typeof t.encoder?t.encoder:d.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:d.encodeValuesOnly,filter:o,format:r,formatter:n,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:d.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:d.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:d.strictNullHandling}};t.exports=function(t,e){var n,o,i=t,s=m(e);"function"==typeof s.filter?i=(0,s.filter)("",i):u(s.filter)&&(n=s.filter);var l=[];if("object"!=typeof i||null===i)return"";o=e&&e.arrayFormat in a?e.arrayFormat:e&&"indices"in e?e.indices?"indices":"repeat":"indices";var c=a[o];if(e&&"commaRoundTrip"in e&&"boolean"!=typeof e.commaRoundTrip)throw TypeError("`commaRoundTrip` must be a boolean, or absent");var h="comma"===c&&e&&e.commaRoundTrip;n||(n=Object.keys(i)),s.sort&&n.sort(s.sort);for(var f=r(),d=0;d<n.length;++d){var y=n[d];s.skipNulls&&null===i[y]||p(l,g(i[y],y,c,h,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset,f))}var b=l.join(s.delimiter),_=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),b.length>0?_+b:""}}),n.register("1Me3I",function(t,e){var r=n("1ZpYW"),o=n("hzzg1"),i=n("4VXBZ"),s=r("%TypeError%"),a=r("%WeakMap%",!0),u=r("%Map%",!0),l=o("WeakMap.prototype.get",!0),c=o("WeakMap.prototype.set",!0),p=o("WeakMap.prototype.has",!0),h=o("Map.prototype.get",!0),f=o("Map.prototype.set",!0),d=o("Map.prototype.has",!0),y=function(t,e){for(var r,n=t;null!==(r=n.next);n=r)if(r.key===e)return n.next=r.next,r.next=t.next,t.next=r,r},g=function(t,e){var r=y(t,e);return r&&r.value},m=function(t,e,r){var n=y(t,e);n?n.value=r:t.next={key:e,next:t.next,value:r}};t.exports=function(){var t,e,r,n={assert:function(t){if(!n.has(t))throw new s("Side channel does not contain "+i(t))},get:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(t)return l(t,n)}else if(u){if(e)return h(e,n)}else if(r)return g(r,n)},has:function(n){if(a&&n&&("object"==typeof n||"function"==typeof n)){if(t)return p(t,n)}else if(u){if(e)return d(e,n)}else if(r)return!!y(r,n);return!1},set:function(n,o){a&&n&&("object"==typeof n||"function"==typeof n)?(t||(t=new a),c(t,n,o)):u?(e||(e=new u),f(e,n,o)):(r||/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */(r={key:{},next:null}),m(r,n,o))}};return n}}),n.register("1ZpYW",function(t,e){var r,o=SyntaxError,i=Function,s=TypeError,a=function(t){try{return i('"use strict"; return ('+t+").constructor;")()}catch(t){}},u=Object.getOwnPropertyDescriptor;if(u)try{u({},"")}catch(t){u=null;// this is IE 8, which has a broken gOPD
}var l=function(){throw new s},c=u?function(){try{return(// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
arguments.callee,l)}catch(t){try{// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
return u(arguments,"callee").get}catch(t){return l}}}():l,p=n("5pQnv")(),h=n("h4GII")(),f=Object.getPrototypeOf||(h?function(t){return t.__proto__}// eslint-disable-line no-proto
:null),d={},y="undefined"!=typeof Uint8Array&&f?f(Uint8Array):r,g={"%AggregateError%":"undefined"==typeof AggregateError?r:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?r:ArrayBuffer,"%ArrayIteratorPrototype%":p&&f?f([][Symbol.iterator]()):r,"%AsyncFromSyncIteratorPrototype%":r,"%AsyncFunction%":d,"%AsyncGenerator%":d,"%AsyncGeneratorFunction%":d,"%AsyncIteratorPrototype%":d,"%Atomics%":"undefined"==typeof Atomics?r:Atomics,"%BigInt%":"undefined"==typeof BigInt?r:BigInt,"%BigInt64Array%":"undefined"==typeof BigInt64Array?r:BigInt64Array,"%BigUint64Array%":"undefined"==typeof BigUint64Array?r:BigUint64Array,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?r:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?r:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?r:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?r:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":d,"%Int8Array%":"undefined"==typeof Int8Array?r:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?r:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?r:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":p&&f?f(f([][Symbol.iterator]())):r,"%JSON%":"object"==typeof JSON?JSON:r,"%Map%":"undefined"==typeof Map?r:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&p&&f?f(new Map()[Symbol.iterator]()):r,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?r:Promise,"%Proxy%":"undefined"==typeof Proxy?r:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?r:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?r:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&p&&f?f(new Set()[Symbol.iterator]()):r,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?r:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":p&&f?f(""[Symbol.iterator]()):r,"%Symbol%":p?Symbol:r,"%SyntaxError%":o,"%ThrowTypeError%":c,"%TypedArray%":y,"%TypeError%":s,"%Uint8Array%":"undefined"==typeof Uint8Array?r:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?r:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?r:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?r:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?r:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?r:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?r:WeakSet};if(f)try{null.error;// eslint-disable-line no-unused-expressions
}catch(t){// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
var m=f(f(t));g["%Error.prototype%"]=m}var b=function t(e){var r;if("%AsyncFunction%"===e)r=a("async function () {}");else if("%GeneratorFunction%"===e)r=a("function* () {}");else if("%AsyncGeneratorFunction%"===e)r=a("async function* () {}");else if("%AsyncGenerator%"===e){var n=t("%AsyncGeneratorFunction%");n&&(r=n.prototype)}else if("%AsyncIteratorPrototype%"===e){var o=t("%AsyncGenerator%");o&&f&&(r=f(o.prototype))}return g[e]=r,r},_={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},v=n("btcmu"),w=n("KCgw9"),E=v.call(Function.call,Array.prototype.concat),T=v.call(Function.apply,Array.prototype.splice),x=v.call(Function.call,String.prototype.replace),O=v.call(Function.call,String.prototype.slice),S=v.call(Function.call,RegExp.prototype.exec),A=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,P=/\\(\\)?/g,k=function(t){var e=O(t,0,1),r=O(t,-1);if("%"===e&&"%"!==r)throw new o("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==e)throw new o("invalid intrinsic syntax, expected opening `%`");var n=[];return x(t,A,function(t,e,r,o){n[n.length]=r?x(o,P,"$1"):e||t}),n},D=function(t,e){var r,n=t;if(w(_,n)&&(n="%"+(r=_[n])[0]+"%"),w(g,n)){var i=g[n];if(i===d&&(i=b(n)),void 0===i&&!e)throw new s("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:r,name:n,value:i}}throw new o("intrinsic "+t+" does not exist!")};t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new s("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new s('"allowMissing" argument must be a boolean');if(null===S(/^%?[^%]*%?$/,t))throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=k(t),n=r.length>0?r[0]:"",i=D("%"+n+"%",e),a=i.name,l=i.value,c=!1,p=i.alias;p&&(n=p[0],T(r,E([0,1],p)));for(var h=1,f=!0;h<r.length;h+=1){var d=r[h],y=O(d,0,1),m=O(d,-1);if(('"'===y||"'"===y||"`"===y||'"'===m||"'"===m||"`"===m)&&y!==m)throw new o("property names with quotes must have matching quotes");if("constructor"!==d&&f||(c=!0),n+="."+d,w(g,a="%"+n+"%"))l=g[a];else if(null!=l){if(!(d in l)){if(!e)throw new s("base intrinsic for "+t+" exists, but the property is not available.");return}if(u&&h+1>=r.length){var b=u(l,d);// By convention, when a data property is converted to an accessor
// property to emulate a data property that does not suffer from
// the override mistake, that accessor's getter is marked with
// an `originalValue` property. Here, when we detect this, we
// uphold the illusion by pretending to see that original data
// property, i.e., returning the value rather than the getter
// itself.
l=(f=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:l[d]}else f=w(l,d),l=l[d];f&&!c&&(g[a]=l)}}return l}}),n.register("5pQnv",function(t,e){var r="undefined"!=typeof Symbol&&Symbol,o=n("7DgHs");t.exports=function(){return"function"==typeof r&&"function"==typeof Symbol&&"symbol"==typeof r("foo")&&"symbol"==typeof Symbol("bar")&&o()}}),n.register("7DgHs",function(t,e){/* eslint complexity: [2, 18], max-statements: [2, 33] */t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e||"[object Symbol]"!==Object.prototype.toString.call(e)||"[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;// eslint-disable-line no-restricted-syntax, no-unreachable-loop
if("function"==typeof Object.keys&&0!==Object.keys(t).length||"function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var n=Object.getOwnPropertySymbols(t);if(1!==n.length||n[0]!==e||!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var o=Object.getOwnPropertyDescriptor(t,e);if(42!==o.value||!0!==o.enumerable)return!1}return!0}}),n.register("h4GII",function(t,e){var r={foo:{}},n=Object;t.exports=function(){return({__proto__:r}).foo===r.foo&&!(({__proto__:null})instanceof n)}}),n.register("btcmu",function(t,e){var r=n("i1aNj");t.exports=Function.prototype.bind||r}),n.register("i1aNj",function(t,e){var r=Array.prototype.slice,n=Object.prototype.toString;t.exports=function(t){var e,o=this;if("function"!=typeof o||"[object Function]"!==n.call(o))throw TypeError("Function.prototype.bind called on incompatible "+o);for(var i=r.call(arguments,1),s=Math.max(0,o.length-i.length),a=[],u=0;u<s;u++)a.push("$"+u);if(e=Function("binder","return function ("+a.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(!(this instanceof e))return o.apply(t,i.concat(r.call(arguments)));var n=o.apply(this,i.concat(r.call(arguments)));return Object(n)===n?n:this}),o.prototype){var l=function(){};l.prototype=o.prototype,e.prototype=new l,l.prototype=null}return e}}),n.register("KCgw9",function(t,e){var r=n("btcmu");t.exports=r.call(Function.call,Object.prototype.hasOwnProperty)}),n.register("hzzg1",function(t,e){var r=n("1ZpYW"),o=n("a7rAf"),i=o(r("String.prototype.indexOf"));t.exports=function(t,e){var n=r(t,!!e);return"function"==typeof n&&i(t,".prototype.")>-1?o(n):n}}),n.register("a7rAf",function(t,e){var r=n("btcmu"),o=n("1ZpYW"),i=o("%Function.prototype.apply%"),s=o("%Function.prototype.call%"),a=o("%Reflect.apply%",!0)||r.call(s,i),u=o("%Object.getOwnPropertyDescriptor%",!0),l=o("%Object.defineProperty%",!0),c=o("%Math.max%");if(l)try{l({},"a",{value:1})}catch(t){// IE 8 has a broken defineProperty
l=null}t.exports=function(t){var e=a(r,s,arguments);return u&&l&&u(e,"length").configurable&&l(e,"length",{value:1+c(0,t.length-(arguments.length-1))}),e};var p=function(){return a(r,i,arguments)};l?l(t.exports,"apply",{value:p}):t.exports.apply=p}),n.register("4VXBZ",function(t,e){var r="function"==typeof Map&&Map.prototype,o=Object.getOwnPropertyDescriptor&&r?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=r&&o&&"function"==typeof o.get?o.get:null,s=r&&Map.prototype.forEach,a="function"==typeof Set&&Set.prototype,u=Object.getOwnPropertyDescriptor&&a?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,l=a&&u&&"function"==typeof u.get?u.get:null,c=a&&Set.prototype.forEach,p="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,h="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,f="function"==typeof WeakRef&&WeakRef.prototype?WeakRef.prototype.deref:null,d=Boolean.prototype.valueOf,y=Object.prototype.toString,g=Function.prototype.toString,m=String.prototype.match,b=String.prototype.slice,_=String.prototype.replace,v=String.prototype.toUpperCase,w=String.prototype.toLowerCase,E=RegExp.prototype.test,T=Array.prototype.concat,x=Array.prototype.join,O=Array.prototype.slice,S=Math.floor,A="function"==typeof BigInt?BigInt.prototype.valueOf:null,P=Object.getOwnPropertySymbols,k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?Symbol.prototype.toString:null,D="function"==typeof Symbol&&"object"==typeof Symbol.iterator,I="function"==typeof Symbol&&Symbol.toStringTag&&(typeof Symbol.toStringTag===D?"object":"symbol")?Symbol.toStringTag:null,C=Object.prototype.propertyIsEnumerable,N=("function"==typeof Reflect?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype// eslint-disable-line no-proto
?function(t){return t.__proto__;// eslint-disable-line no-proto
}:null);function R(t,e){if(t===1/0||t===-1/0||t!=t||t&&t>-1e3&&t<1e3||E.call(/e/,e))return e;var r=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if("number"==typeof t){var n=t<0?-S(-t):S(t);// trunc(num)
if(n!==t){var o=String(n),i=b.call(e,o.length+1);return _.call(o,r,"$&_")+"."+_.call(_.call(i,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(e,r,"$&_")}var L=n("i5MnH"),j=L.custom,M=G(j)?j:null;function F(t,e,r){var n="double"===(r.quoteStyle||e)?'"':"'";return n+t+n}function B(t){return"[object Array]"===H(t)&&(!I||!("object"==typeof t&&I in t))}function U(t){return"[object RegExp]"===H(t)&&(!I||!("object"==typeof t&&I in t))}// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function G(t){if(D)return t&&"object"==typeof t&&t instanceof Symbol;if("symbol"==typeof t)return!0;if(!t||"object"!=typeof t||!k)return!1;try{return k.call(t),!0}catch(t){}return!1}t.exports=function t(e,r,n,o){var a=r||{};if(q(a,"quoteStyle")&&"single"!==a.quoteStyle&&"double"!==a.quoteStyle)throw TypeError('option "quoteStyle" must be "single" or "double"');if(q(a,"maxStringLength")&&("number"==typeof a.maxStringLength?a.maxStringLength<0&&a.maxStringLength!==1/0:null!==a.maxStringLength))throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var u=!q(a,"customInspect")||a.customInspect;if("boolean"!=typeof u&&"symbol"!==u)throw TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(q(a,"indent")&&null!==a.indent&&"	"!==a.indent&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(q(a,"numericSeparator")&&"boolean"!=typeof a.numericSeparator)throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');var y=a.numericSeparator;if(void 0===e)return"undefined";if(null===e)return"null";if("boolean"==typeof e)return e?"true":"false";if("string"==typeof e)return function t(e,r){if(e.length>r.maxStringLength){var n=e.length-r.maxStringLength;return t(b.call(e,0,r.maxStringLength),r)+"... "+n+" more character"+(n>1?"s":"")}return F(_.call(_.call(e,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,X),"single",r)}(e,a);if("number"==typeof e){if(0===e)return 1/0/e>0?"0":"-0";var v=String(e);return y?R(e,v):v}if("bigint"==typeof e){var E=String(e)+"n";return y?R(e,E):E}var S=void 0===a.depth?5:a.depth;if(void 0===n&&(n=0),n>=S&&S>0&&"object"==typeof e)return B(e)?"[Array]":"[Object]";var P=function(t,e){var r;if("	"===t.indent)r="	";else{if("number"!=typeof t.indent||!(t.indent>0))return null;r=x.call(Array(t.indent+1)," ")}return{base:r,prev:x.call(Array(e+1),r)}}(a,n);if(void 0===o)o=[];else if(z(o,e)>=0)return"[Circular]";function j(e,r,i){if(r&&(o=O.call(o)).push(r),i){var s={depth:a.depth};return q(a,"quoteStyle")&&(s.quoteStyle=a.quoteStyle),t(e,s,n+1,o)}return t(e,a,n+1,o)}if("function"==typeof e&&!U(e)){var V=function(t){if(t.name)return t.name;var e=m.call(g.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}(e),Z=Q(e,j);return"[Function"+(V?": "+V:" (anonymous)")+"]"+(Z.length>0?" { "+x.call(Z,", ")+" }":"")}if(G(e)){var J=D?_.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):k.call(e);return"object"!=typeof e||D?J:W(J)}if(e&&"object"==typeof e&&("undefined"!=typeof HTMLElement&&e instanceof HTMLElement||"string"==typeof e.nodeName&&"function"==typeof e.getAttribute)){for(var tt,te="<"+w.call(String(e.nodeName)),tr=e.attributes||[],tn=0;tn<tr.length;tn++)te+=" "+tr[tn].name+"="+F((tt=tr[tn].value,_.call(String(tt),/"/g,"&quot;")),"double",a);return te+=">",e.childNodes&&e.childNodes.length&&(te+="..."),te+="</"+w.call(String(e.nodeName))+">"}if(B(e)){if(0===e.length)return"[]";var to=Q(e,j);return P&&!function(t){for(var e=0;e<t.length;e++)if(z(t[e],"\n")>=0)return!1;return!0}(to)?"["+$(to,P)+"]":"[ "+x.call(to,", ")+" ]"}if("[object Error]"===H(e)&&(!I||!("object"==typeof e&&I in e))){var ti=Q(e,j);return"cause"in Error.prototype||!("cause"in e)||C.call(e,"cause")?0===ti.length?"["+String(e)+"]":"{ ["+String(e)+"] "+x.call(ti,", ")+" }":"{ ["+String(e)+"] "+x.call(T.call("[cause]: "+j(e.cause),ti),", ")+" }"}if("object"==typeof e&&u){if(M&&"function"==typeof e[M]&&L)return L(e,{depth:S-n});if("symbol"!==u&&"function"==typeof e.inspect)return e.inspect()}if(function(t){if(!i||!t||"object"!=typeof t)return!1;try{i.call(t);try{l.call(t)}catch(t){return!0}return t instanceof Map;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e)){var ts=[];return s&&s.call(e,function(t,r){ts.push(j(r,e,!0)+" => "+j(t,e))}),K("Map",i.call(e),ts,P)}if(function(t){if(!l||!t||"object"!=typeof t)return!1;try{l.call(t);try{i.call(t)}catch(t){return!0}return t instanceof Set;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e)){var ta=[];return c&&c.call(e,function(t){ta.push(j(t,e))}),K("Set",l.call(e),ta,P)}if(function(t){if(!p||!t||"object"!=typeof t)return!1;try{p.call(t,p);try{h.call(t,h)}catch(t){return!0}return t instanceof WeakMap;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e))return Y("WeakMap");if(function(t){if(!h||!t||"object"!=typeof t)return!1;try{h.call(t,h);try{p.call(t,p)}catch(t){return!0}return t instanceof WeakSet;// core-js workaround, pre-v2.5.0
}catch(t){}return!1}(e))return Y("WeakSet");if(function(t){if(!f||!t||"object"!=typeof t)return!1;try{return f.call(t),!0}catch(t){}return!1}(e))return Y("WeakRef");if("[object Number]"===H(e)&&(!I||!("object"==typeof e&&I in e)))return W(j(Number(e)));if(function(t){if(!t||"object"!=typeof t||!A)return!1;try{return A.call(t),!0}catch(t){}return!1}(e))return W(j(A.call(e)));if("[object Boolean]"===H(e)&&(!I||!("object"==typeof e&&I in e)))return W(d.call(e));if("[object String]"===H(e)&&(!I||!("object"==typeof e&&I in e)))return W(j(String(e)));if(!("[object Date]"===H(e)&&(!I||!("object"==typeof e&&I in e)))&&!U(e)){var tu=Q(e,j),tl=N?N(e)===Object.prototype:e instanceof Object||e.constructor===Object,tc=e instanceof Object?"":"null prototype",tp=!tl&&I&&Object(e)===e&&I in e?b.call(H(e),8,-1):tc?"Object":"",th=(tl||"function"!=typeof e.constructor?"":e.constructor.name?e.constructor.name+" ":"")+(tp||tc?"["+x.call(T.call([],tp||[],tc||[]),": ")+"] ":"");return 0===tu.length?th+"{}":P?th+"{"+$(tu,P)+"}":th+"{ "+x.call(tu,", ")+" }"}return String(e)};var V=Object.prototype.hasOwnProperty||function(t){return t in this};function q(t,e){return V.call(t,e)}function H(t){return y.call(t)}function z(t,e){if(t.indexOf)return t.indexOf(e);for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return -1}function X(t){var e=t.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return r?"\\"+r:"\\x"+(e<16?"0":"")+v.call(e.toString(16))}function W(t){return"Object("+t+")"}function Y(t){return t+" { ? }"}function K(t,e,r,n){return t+" ("+e+") {"+(n?$(r,n):x.call(r,", "))+"}"}function $(t,e){if(0===t.length)return"";var r="\n"+e.prev+e.base;return r+x.call(t,","+r)+"\n"+e.prev}function Q(t,e){var r,n=B(t),o=[];if(n){o.length=t.length;for(var i=0;i<t.length;i++)o[i]=q(t,i)?e(t[i],t):""}var s="function"==typeof P?P(t):[];if(D){r={};for(var a=0;a<s.length;a++)r["$"+s[a]]=s[a]}for(var u in t)if(q(t,u)&&(!n||String(Number(u))!==u||!(u<t.length))){// eslint-disable-line no-restricted-syntax, no-continue
if(D&&r["$"+u]instanceof Symbol)continue;// eslint-disable-line no-restricted-syntax, no-continue
E.call(/[^\w$]/,u)?o.push(e(u,t)+": "+e(t[u],t)):o.push(u+": "+e(t[u],t))}if("function"==typeof P)for(var l=0;l<s.length;l++)C.call(t,s[l])&&o.push("["+e(s[l])+"]: "+e(t[s[l]],t));return o}}),n.register("i5MnH",function(t,e){}),n.register("82eDC",function(t,e){var r=n("dzbNN"),o=Object.prototype.hasOwnProperty,i=Array.isArray,s=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t){for(;t.length>1;){var e=t.pop(),r=e.obj[e.prop];if(i(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);e.obj[e.prop]=n}}},u=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r};t.exports={arrayToObject:u,assign:function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},combine:function(t,e){return[].concat(t,e)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var o=e[n],i=o.obj[o.prop],s=Object.keys(i),u=0;u<s.length;++u){var l=s[u],c=i[l];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:i,prop:l}),r.push(c))}return a(e),t},decode:function(t,e,r){var n=t.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);// utf-8
try{return decodeURIComponent(n)}catch(t){return n}},encode:function(t,e,n,o,i){// This code was originally written by Brian White (mscdex) for the io.js core querystring library.
// It has been adapted here for stricter adherence to RFC 3986
if(0===t.length)return t;var a=t;if("symbol"==typeof t?a=Symbol.prototype.toString.call(t):"string"!=typeof t&&(a=String(t)),"iso-8859-1"===n)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var u="",l=0;l<a.length;++l){var c=a.charCodeAt(l);if(45// -
===c||46// .
===c||95// _
===c||126// ~
===c||c>=48&&c<=57// 0-9
||c>=65&&c<=90// a-z
||c>=97&&c<=122// A-Z
||i===r.RFC1738&&(40===c||41// ( )
===c)){u+=a.charAt(l);continue}if(c<128){u+=s[c];continue}if(c<2048){u+=s[192|c>>6]+s[128|63&c];continue}if(c<55296||c>=57344){u+=s[224|c>>12]+s[128|c>>6&63]+s[128|63&c];continue}l+=1,/* eslint operator-linebreak: [2, "before"] */u+=s[240|(c=65536+((1023&c)<<10|1023&a.charCodeAt(l)))>>18]+s[128|c>>12&63]+s[128|c>>6&63]+s[128|63&c]}return u},isBuffer:function(t){return!!t&&"object"==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,e){if(i(t)){for(var r=[],n=0;n<t.length;n+=1)r.push(e(t[n]));return r}return e(t)},merge:function t(e,r,n){/* eslint no-param-reassign: 0 */if(!r)return e;if("object"!=typeof r){if(i(e))e.push(r);else{if(!e||"object"!=typeof e)return[e,r];(n&&(n.plainObjects||n.allowPrototypes)||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if(!e||"object"!=typeof e)return[e].concat(r);var s=e;return(i(e)&&!i(r)&&(s=u(e,n)),i(e)&&i(r))?(r.forEach(function(r,i){if(o.call(e,i)){var s=e[i];s&&"object"==typeof s&&r&&"object"==typeof r?e[i]=t(s,r,n):e.push(r)}else e[i]=r}),e):Object.keys(r).reduce(function(e,i){var s=r[i];return o.call(e,i)?e[i]=t(e[i],s,n):e[i]=s,e},s)}}}),n.register("dzbNN",function(t,e){var r=String.prototype.replace,n=/%20/g,o={RFC1738:"RFC1738",RFC3986:"RFC3986"};t.exports={default:o.RFC3986,formatters:{RFC1738:function(t){return r.call(t,n,"+")},RFC3986:function(t){return String(t)}},RFC1738:o.RFC1738,RFC3986:o.RFC3986}}),n.register("66Ely",function(t,e){var r=n("82eDC"),o=Object.prototype.hasOwnProperty,i=Array.isArray,s={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:r.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},a=function(t,e){return t&&"string"==typeof t&&e.comma&&t.indexOf(",")>-1?t.split(","):t},u=function(t,e){var n={},u=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,l=e.parameterLimit===1/0?void 0:e.parameterLimit,c=u.split(e.delimiter,l),p=-1,h=e.charset;if(e.charsetSentinel)for(f=0;f<c.length;++f)0===c[f].indexOf("utf8=")&&("utf8=%E2%9C%93"===c[f]?h="utf-8":"utf8=%26%2310003%3B"===c[f]&&(h="iso-8859-1"),p=f,f=c.length);for(f=0;f<c.length;++f)if(f!==p){var f,d,y,g=c[f],m=g.indexOf("]="),b=-1===m?g.indexOf("="):m+1;-1===b?(d=e.decoder(g,s.decoder,h,"key"),y=e.strictNullHandling?null:""):(d=e.decoder(g.slice(0,b),s.decoder,h,"key"),y=r.maybeMap(a(g.slice(b+1),e),function(t){return e.decoder(t,s.decoder,h,"value")})),y&&e.interpretNumericEntities&&"iso-8859-1"===h&&(y=y.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(parseInt(e,10))})),g.indexOf("[]=")>-1&&(y=i(y)?[y]:y),o.call(n,d)?n[d]=r.combine(n[d],y):n[d]=y}return n},l=function(t,e,r,n){for(var o=n?e:a(e,r),i=t.length-1;i>=0;--i){var s,u=t[i];if("[]"===u&&r.parseArrays)s=[].concat(o);else{s=r.plainObjects?Object.create(null):{};var l="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,c=parseInt(l,10);r.parseArrays||""!==l?!isNaN(c)&&u!==l&&String(c)===l&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(s=[])[c]=o:"__proto__"!==l&&(s[l]=o):s={0:o}}o=s}return o},c=function(t,e,r,n){if(t){// Transform dot notation to bracket notation
var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,s=/(\[[^[\]]*])/g,a=r.depth>0&&/(\[[^[\]]*])/.exec(i),u=a?i.slice(0,a.index):i,c=[];if(u){// If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;c.push(u)}for(// Loop through children appending to the array until we hit depth
var p=0;r.depth>0&&null!==(a=s.exec(i))&&p<r.depth;){if(p+=1,!r.plainObjects&&o.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(a[1])}return a&&c.push("["+i.slice(a.index)+"]"),l(c,e,r,n)}},p=function(t){if(!t)return s;if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw TypeError("Decoder has to be a function.");if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=void 0===t.charset?s.charset:t.charset;return{allowDots:void 0===t.allowDots?s.allowDots:!!t.allowDots,allowPrototypes:"boolean"==typeof t.allowPrototypes?t.allowPrototypes:s.allowPrototypes,allowSparse:"boolean"==typeof t.allowSparse?t.allowSparse:s.allowSparse,arrayLimit:"number"==typeof t.arrayLimit?t.arrayLimit:s.arrayLimit,charset:e,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:s.charsetSentinel,comma:"boolean"==typeof t.comma?t.comma:s.comma,decoder:"function"==typeof t.decoder?t.decoder:s.decoder,delimiter:"string"==typeof t.delimiter||r.isRegExp(t.delimiter)?t.delimiter:s.delimiter,// eslint-disable-next-line no-implicit-coercion, no-extra-parens
depth:"number"==typeof t.depth||!1===t.depth?+t.depth:s.depth,ignoreQueryPrefix:!0===t.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof t.interpretNumericEntities?t.interpretNumericEntities:s.interpretNumericEntities,parameterLimit:"number"==typeof t.parameterLimit?t.parameterLimit:s.parameterLimit,parseArrays:!1!==t.parseArrays,plainObjects:"boolean"==typeof t.plainObjects?t.plainObjects:s.plainObjects,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:s.strictNullHandling}};t.exports=function(t,e){var n=p(e);if(""===t||null==t)return n.plainObjects?Object.create(null):{};for(var o="string"==typeof t?u(t,n):t,i=n.plainObjects?Object.create(null):{},s=Object.keys(o),a=0;a<s.length;++a){var l=s[a],h=c(l,o[l],n,"string"==typeof t);i=r.merge(i,h,n)}return!0===n.allowSparse?i:r.compact(i)}}),n.register("hukoe",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n("kA8Ik");/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */function i(t){if(t)return(/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function(t){for(var e in i.prototype)Object.prototype.hasOwnProperty.call(i.prototype,e)&&(t[e]=i.prototype[e]);return t}(t))}/**
 * Expose `RequestBase`.
 */t.exports=i,/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */i.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),clearTimeout(this._uploadTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,delete this._uploadTimeoutTimer,this},/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */i.prototype.parse=function(t){return this._parser=t,this},/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */i.prototype.responseType=function(t){return this._responseType=t,this},/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */i.prototype.serialize=function(t){return this._serializer=t,this},/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */i.prototype.timeout=function(t){if(!t||"object"!==r(t))return this._timeout=t,this._responseTimeout=0,this._uploadTimeout=0,this;for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;case"upload":this._uploadTimeout=t.upload;break;default:console.warn("Unknown timeout option",e)}return this},/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */i.prototype.retry=function(t,e){return(0==arguments.length||!0===t)&&(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this._retryCallback=e,this};// NOTE: we do not include ESOCKETTIMEDOUT because that is from `request` package
//       <https://github.com/sindresorhus/got/pull/537>
//
// NOTE: we do not include EADDRINFO because it was removed from libuv in 2014
//       <https://github.com/libuv/libuv/commit/02e1ebd40b807be5af46343ea873331b2ee4e9c1>
//       <https://github.com/request/request/search?q=ESOCKETTIMEDOUT&unscoped_q=ESOCKETTIMEDOUT>
//
//
// TODO: expose these as configurable defaults
//
var s=new Set(["ETIMEDOUT","ECONNRESET","EADDRINUSE","ECONNREFUSED","EPIPE","ENOTFOUND","ENETUNREACH","EAI_AGAIN"]),a=new Set([408,413,429,500,502,503,504,521,522,524]);// const METHODS = new Set(['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE']);
/**
 * Determine if a request should be retried.
 * (Inspired by https://github.com/sindresorhus/got#retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */i.prototype._shouldRetry=function(t,e){if(!this._maxRetries||this._retries++>=this._maxRetries)return!1;if(this._retryCallback)try{var r=this._retryCallback(t,e);if(!0===r)return!0;if(!1===r)return!1;// undefined falls back to defaults
}catch(t){console.error(t)}return!!(e&&e.status&&a.has(e.status)||t&&(t.code&&s.has(t.code)||t.timeout&&"ECONNABORTED"===t.code||t.crossDomain))},/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */i.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this.timedoutError=null,this._end()},/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */i.prototype.then=function(t,e){var r=this;if(!this._fullfilledPromise){var n=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){n.on("abort",function(){if(!r._maxRetries||!(r._maxRetries>r._retries)){if(r.timedout&&r.timedoutError){e(r.timedoutError);return}var t=Error("Aborted");t.code="ABORTED",t.status=r.status,t.method=r.method,t.url=r.url,e(t)}}),n.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},i.prototype.catch=function(t){return this.then(void 0,t)},/**
 * Allow for extension
 */i.prototype.use=function(t){return t(this),this},i.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},i.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */i.prototype.get=function(t){return this._header[t.toLowerCase()]},/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */i.prototype.getHeader=i.prototype.get,/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */i.prototype.set=function(t,e){if(o(t)){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */i.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */i.prototype.field=function(t,e){// name should be either a string or an object.
if(null==t)throw Error(".field(name, val) name can not be empty");if(this._data)throw Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");if(o(t)){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&this.field(t,e[n]);return this}// val should be defined now
if(null==e)throw Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=String(e)),this._getFormData().append(t,e),this},/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */i.prototype.abort=function(){return this._aborted||(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort")),this},i.prototype._auth=function(t,e,r,n){switch(r.type){case"basic":this.set("Authorization","Basic ".concat(n("".concat(t,":").concat(e))));break;case"auto":this.username=t,this.password=e;break;case"bearer":// usage would be .auth(accessToken, { type: 'bearer' })
this.set("Authorization","Bearer ".concat(t))}return this},/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */i.prototype.withCredentials=function(t){return void 0===t&&(t=!0),this._withCredentials=t,this},/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */i.prototype.redirects=function(t){return this._maxRedirects=t,this},/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */i.prototype.maxResponseSize=function(t){if("number"!=typeof t)throw TypeError("Invalid argument");return this._maxResponseSize=t,this},/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */i.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */// eslint-disable-next-line complexity
i.prototype.send=function(t){var e=o(t),r=this._header["content-type"];if(this._formData)throw Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");if(e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");// merge
if(e&&o(this._data))for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this._data[n]=t[n]);else"string"==typeof t?(r||this.type("form"),(r=this._header["content-type"])&&(r=r.toLowerCase().trim()),"application/x-www-form-urlencoded"===r?this._data=this._data?"".concat(this._data,"&").concat(t):t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)||r||this.type("json"),this},/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */i.prototype.sortQuery=function(t){return(// _sort default to true but otherwise can be a function or boolean
this._sort=void 0===t||t,this)},/**
 * Compose querystring to append to req.url
 *
 * @api private
 */i.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.includes("?")?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.slice(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.slice(0,e)+"?"+r.join("&")}}},i.prototype._appendQueryString=function(){console.warn("Unsupported")},/**
 * Invoke callback with timeout error.
 *
 * @api private
 */i.prototype._timeoutError=function(t,e,r){if(!this._aborted){var n=Error("".concat(t+e,"ms exceeded"));n.timeout=e,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.timedoutError=n,this.abort(),this.callback(n)}},i.prototype._setTimeouts=function(){var t=this;// deadline
this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}}),n.register("kA8Ik",function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */function(t){return null!==t&&"object"===r(t)}}),n.register("4vlGk",function(t,e){var r=n("igANJ");/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */function o(t){if(t)return(/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */function(t){for(var e in o.prototype)Object.prototype.hasOwnProperty.call(o.prototype,e)&&(t[e]=o.prototype[e]);return t}(t))}/**
 * Expose `ResponseBase`.
 */t.exports=o,/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */o.prototype.get=function(t){return this.header[t.toLowerCase()]},/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */o.prototype._setHeaderProperties=function(t){// TODO: moar!
// TODO: make this a util
// content-type
var e=t["content-type"]||"";this.type=r.type(e);// params
var n=r.params(e);for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(this[o]=n[o]);this.links={};// links
try{t.link&&(this.links=r.parseLinks(t.link))}catch(t){}},/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */o.prototype._setStatusProperties=function(t){var e=t/100|0;// status / class
this.statusCode=t,this.status=this.statusCode,this.statusType=e,this.info=1===e,this.ok=2===e,this.redirect=3===e,this.clientError=4===e,this.serverError=5===e,this.error=(4===e||5===e)&&this.toError(),this.created=201===t,this.accepted=202===t,this.noContent=204===t,this.badRequest=400===t,this.unauthorized=401===t,this.notAcceptable=406===t,this.forbidden=403===t,this.notFound=404===t,this.unprocessableEntity=422===t}}),n.register("igANJ",function(t,r){var n,o,i;function s(t,e){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,s=!0,u=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return s=t.done,t},e:function(t){u=!0,i=t},f:function(){try{s||null==o.return||o.return()}finally{if(u)throw i}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}e(t.exports,"type",function(){return n},function(t){return n=t}),e(t.exports,"params",function(){return o},function(t){return o=t}),e(t.exports,"parseLinks",function(){return i},function(t){return i=t}),n=function(t){return t.split(/ *; */).shift()},o=function(t){var e,r={},n=s(t.split(/ *; */));try{for(n.s();!(e=n.n()).done;){var o=e.value.split(/ *= */),i=o.shift(),a=o.shift();i&&a&&(r[i]=a)}}catch(t){n.e(t)}finally{n.f()}return r},i=function(t){var e,r={},n=s(t.split(/ *, */));try{for(n.s();!(e=n.n()).done;){var o=e.value.split(/ *; */),i=o[0].slice(1,-1);r[o[1].split(/ *= */)[1].slice(1,-1)]=i}}catch(t){n.e(t)}finally{n.f()}return r}}),n.register("j5XVX",function(t,e){function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function n(){this._defaults=[]}["use","on","once","set","query","type","accept","auth","withCredentials","sortQuery","retry","ok","redirects","timeout","buffer","serialize","parse","ca","key","pfx","cert","disableTLSCerts"].forEach(function(t){// Default setting for all requests from this agent
n.prototype[t]=function(){for(var e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return this._defaults.push({fn:t,args:r}),this}}),n.prototype._setDefaults=function(t){this._defaults.forEach(function(e){var n;t[e.fn].apply(t,function(t){if(Array.isArray(t))return r(t)}(n=e.args)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})},t.exports=n}),n.register("3EzIb",function(t,r){var o;e(t.exports,"parse",function(){return o},function(t){return o=t}),o=n("9TQyN"),n("bMc2e")}),n.register("9TQyN",function(t,e){t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var i={};if("string"!=typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var u=t.length;a>0&&u>a&&(u=a);for(var l=0;l<u;++l){var c,p,h,f,d=t[l].replace(s,"%20"),y=d.indexOf(n);(y>=0?(c=d.substr(0,y),p=d.substr(y+1)):(c=d,p=""),h=decodeURIComponent(c),f=decodeURIComponent(p),Object.prototype.hasOwnProperty.call(i,h))?r(i[h])?i[h].push(f):i[h]=[i[h],f]:i[h]=f}return i};var r=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}),n.register("bMc2e",function(t,e){var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,s,a){return(e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t)?o(i(t),function(i){var a=encodeURIComponent(r(i))+s;return n(t[i])?o(t[i],function(t){return a+encodeURIComponent(r(t))}).join(e):a+encodeURIComponent(r(t[i]))}).join(e):a?encodeURIComponent(r(a))+s+encodeURIComponent(r(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}}),n.register("1Sy3E",function(t,e){t.exports=JSON.parse('{"name":"flickr-sdk","version":"6.2.1","description":"Almost certainly the best Flickr API client in the world for node and the browser","keywords":["flickr","api","sdk","photos","search"],"main":"index.js","types":"flickr-sdk.d.ts","files":["index.js","flickr-sdk.d.ts","flickr-sdk.js","lib","plugins","services","CHANGELOG.md","LICENSE","README.md"],"browser":{"./plugins/oauth.js":"./plugins/oauth-browser.js","./services/oauth.js":"./services/oauth-browser.js"},"scripts":{"reflect":"node script/reflect","build-rest":"node script/build-rest > services/rest.js","build-tests":"node script/build-tests","build-docs":"node script/build-docs > README.md","build-types":"node script/build-types > flickr-sdk.d.ts && npm run tsc","build-client":"browserify -s Flickr $npm_package_main > flickr-sdk.js","build":"npm run build-rest && npm run build-docs && npm run build-types && npm run build-client","tsc":"npx tsc","lint":"eslint .","test":"mocha","coverage":"nyc mocha","prepublish":"npm run build"},"repository":{"type":"git","url":"git+ssh://git@github.com/flickr/flickr-sdk.git"},"author":["Jeremy Ruppel","Alex Seville","Phil Dokas"],"license":"MIT","engines":{"node":">= 4"},"publishConfig":{"registry":"https://registry.npmjs.org"},"devDependencies":{"browserify":"^17.0.0","chalk":"^5.0.0","dotprune":"^0.1.0","ejs":"^3.1.6","eslint":"^8.2.0","eslint-config-flickr":"~1.3.1","eslint-plugin-header":"^3.1.1","indent-string":"^5.0.0","jsdoc-to-markdown":"^7.1.1","mocha":"^9.1.3","nock":"^13.2.0","nyc":"^15.1.0","ora":"^1.3.0","p-limit":"^1.1.0","require-dir":"~0.3.1","sinon":"^12.0.1","stringify-object":"^4.0.0"},"dependencies":{"superagent":"^6.1.0","xml2js":"^0.5.0"},"bugs":{"url":"https://github.com/flickr/flickr-sdk/issues"},"homepage":"https://github.com/flickr/flickr-sdk#readme"}')}),n.register("9ZOKB",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 *//**
 * Asserts that any of the N keys passed in
 * are found in the obj
 * @param {Object} obj
 * @param {(String|String[])} keys
 * @throws {Error}
 */t.exports=function(t,e){if(e){if(t=t||{},"string"==typeof e){if(!Object.prototype.hasOwnProperty.call(t,e))throw Error('Missing required argument "'+e+'"')}else if(0===e.filter(function(e){return Object.prototype.hasOwnProperty.call(t,e)}).length)throw Error('Missing required argument, you must provide one of the following: "'+e.join('", "')+'"')}}}),n.register("9Yp9c",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 *//**
 * Custom response parser routine to handle Flickr API-style
 * error responses. The Flickr API has a whole bunch of client
 * error codes, but they all come back as HTTP 200 responses.
 * Here, we add in additional logic to accommodate this and check
 * for a Flickr API error. If we find one, craft a new error
 * out of that and throw it.
 * @param {Response} res
 * @returns {Boolean}
 * @throws {Error}
 */function r(t){var e,r=t.body;if(r&&"fail"===r.stat)throw(e=Error(r.message)).stat=r.stat,e.code=r.code,e;return t.status>=200&&t.status<300}/**
 * Superagent plugin-style function to request and parse
 * JSON responses from the Flickr REST API. We need to
 * specify content-type: text/plain here to appease CORS
 * since the API does not accept application/json.
 * @param {Request} req
 * @returns {undefined}
 */t.exports=function(t){t.query({format:"json"}),t.query({nojsoncallback:1}),t.type("text/plain"),t.ok(r)}}),n.register("cgVal",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 *//**
 * OAuth 1.0 requires your consumer secret to sign calls,
 * and you should never expose secrets to the browser.
 * @constructor
 * @throws {Error}
 */function r(){throw Error("OAuth 1.0 is not supported in the browser")}// also throw for static methods
r.createPlugin=r,t.exports=r}),n.register("hPBjW",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */var r=n("rDKgn"),o=n("9ZOKB");/**
 * Creates a new Feeds service instance. You can use this instance
 * to explore and retrieve public Flickr API data.
 *
 * @constructor
 * @param {Object} [args] Arguments that will be passed along with every feed request
 * @param {String} [args.format=json] The feed response format
 * @param {String} [args.lang=en-us] The language to request for the feed
 * @memberof Flickr
 *
 * @example
 *
 * var feeds = new Flickr.Feeds();
 */function i(t){// allow creating a client without `new`
if(!(this instanceof i))return new i(t);// default arguments
this._args=Object.assign({format:"json",nojsoncallback:1},t)}/**
 * Factory method to create a new request for a feed.
 * @param {String} feed
 * @param {Object} [args]
 * @returns {Request}
 * @private
 */i.prototype._=function(t,e){return r("GET","https://www.flickr.com/services/feeds/"+t+".gne").query(this._args).query(e)},/**
 * Returns a list of public content matching some criteria.
 *
 * @param {Object} [args]
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_public/
 */i.prototype.publicPhotos=function(t){return this._("photos_public",t)},/**
 * Returns a list of public content from the contacts, friends & family of a given person.
 *
 * @param {Object} args
 * @param {Number|String} args.user_id The user ID of the user to fetch friends' photos and videos for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_friends/
 */i.prototype.friendsPhotos=function(t){return o(t,"user_id"),this._("photos_friends",t)},/**
 * Returns a list of public favorites for a given user.
 *
 * @param {Object} args
 * @param {Number|String} args.id A single user ID. This specifies a user to fetch for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_faves/
 */i.prototype.favePhotos=function(t){return(// This feed launched with support for id, but was
// later changed to support `nsid`. This allows us to
// check both, and fail if neither is specified
o(t,["id","nsid"]),this._("photos_faves",t))},/**
 * Returns a list of recent discussions in a given group.
 *
 * @param {Object} args
 * @param {Number} args.id The ID of the group to fetch discussions for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_discuss/
 */i.prototype.groupDiscussions=function(t){return o(t,"id"),this._("groups_discuss",t)},/**
 * Returns a list of things recently added to the pool of a given group.
 *
 * @param {Object} args
 * @param {Number} args.id The ID of the group to fetch for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/groups_pool/
 */i.prototype.groupPool=function(t){return o(t,"id"),this._("groups_pool",t)},/**
 * Returns a list of recent topics from the forum.
 *
 * @param {Object} [args]
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/forums/
 */i.prototype.forum=function(t){return this._("forums",t)},/**
 * Returns a list of recent comments that have been commented on by a given person.
 *
 * @param {Object} args
 * @param {Number|String} args.user_id The user ID to fetch recent comments for.
 * @returns {Request}
 * @see https://www.flickr.com/services/feeds/docs/photos_comments/
 */i.prototype.recentComments=function(t){return o(t,"user_id"),this._("photos_comments",t)},t.exports=i}),n.register("hUOpE",function(t,e){var r=n("igx3v").Buffer,o=n("rDKgn").Request,i=n("2NQDr");/**
 * Creates a new Upload service instance. Since the Upload API only
 * does one thing (upload files), an Upload instance is simply
 * a Request subclass.
 *
 * The Upload endpoint requires authentication. You should pass a configured
 * instance of the [OAuth plugin]{@link Flickr.OAuth.createPlugin} to upload
 * photos on behalf of another user.
 *
 * @param {Function} auth
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} [args]
 * @constructor
 * @extends Request
 * @memberof Flickr
 *
 * @example
 *
 * var upload = new Flickr.Upload(auth, 'upload.png', {
 *   title: 'Works on MY machine!'
 * });
 *
 * upload.then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @see https://www.flickr.com/services/api/upload.api.html
 */function s(t,e,n){// allow creating a client without `new`
if(!(this instanceof s))return new s(t,e,n);if(o.call(this,"POST","https://up.flickr.com/services/upload"),"function"!=typeof t)throw Error('Missing required argument "auth"');void 0===n&&(n={});// superagent and form-data try to assume the filename from the file value
// given, but expect it to be passed explicitly if given a Buffer, so we'll
// just make one up. Leave it falsy so that that we don't change
// superagent's default behavior
let a=r.isBuffer(e)?"flickr-sdk.jpg":void 0;this.attach("photo",e,a),this.field(n),this.use(i),this.use(t)}s.prototype=Object.create(o.prototype),t.exports=s}),n.register("igx3v",function(t,r){e(t.exports,"Buffer",function(){return o},function(t){return o=t}),e(t.exports,"SlowBuffer",function(){return i},function(t){return i=t}),e(t.exports,"INSPECT_MAX_BYTES",function(){return s},function(t){return s=t}),e(t.exports,"kMaxLength",function(){return a},function(t){return a=t});var o,i,s,a,u=n("8Mc6G"),l=n("4Zqxx");let c="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function p(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function h(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return y(t)}return f(t,e,r)}function f(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!h.isEncoding(e))throw TypeError("Unknown encoding: "+e);let r=0|_(t,e),n=p(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(V(t,Uint8Array)){let e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return g(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(V(t,ArrayBuffer)||t&&V(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(V(t,SharedArrayBuffer)||t&&V(t.buffer,SharedArrayBuffer)))return m(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return h.from(n,e,r);let o=function(t){var e;if(h.isBuffer(t)){let e=0|b(t.length),r=p(e);return 0===r.length||t.copy(r,0,0,e),r}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?p(0):g(t):"Buffer"===t.type&&Array.isArray(t.data)?g(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function d(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function y(t){return d(t),p(t<0?0:0|b(t))}function g(t){let e=t.length<0?0:0|b(t.length),r=p(e);for(let n=0;n<e;n+=1)r[n]=255&t[n];return r}function m(t,e,r){let n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),h.prototype),n)}function b(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function _(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||V(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;// Use a for loop to avoid recursion
let o=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return B(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return U(t).length;default:if(o)return n?-1:B(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function v(t,e,r){let n=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);let o="";for(let n=e;n<r;++n)o+=q[t[n]];return o}(this,e,r);case"utf8":case"utf-8":return x(this,e,r);case"ascii":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){let n="";r=Math.min(t.length,r);for(let o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":var o,i;return o=e,i=r,0===o&&i===this.length?u.fromByteArray(this):u.fromByteArray(this.slice(o,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){let n=t.slice(e,r),o="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let t=0;t<n.length-1;t+=2)o+=String.fromCharCode(n[t]+256*n[t+1]);return o}(this,e,r);default:if(n)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function w(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function E(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=h.from(e,n)),h.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:T(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):T(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function T(t,e,r,n,o){let i,s=1,a=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;s=2,a/=2,u/=2,r/=2}function l(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(o){let n=-1;for(i=r;i<a;i++)if(l(t,i)===l(e,-1===n?0:i-n)){if(-1===n&&(n=i),i-n+1===u)return n*s}else -1!==n&&(i-=i-n),n=-1}else for(r+u>a&&(r=a-u),i=r;i>=0;i--){let r=!0;for(let n=0;n<u;n++)if(l(t,i+n)!==l(e,n)){r=!1;break}if(r)return i}return -1}function x(t,e,r){r=Math.min(t.length,r);let n=[],o=e;for(;o<r;){let e=t[o],i=null,s=e>239?4:e>223?3:e>191?2:1;if(o+s<=r){let r,n,a,u;switch(s){case 1:e<128&&(i=e);break;case 2:(192&(r=t[o+1]))==128&&(u=(31&e)<<6|63&r)>127&&(i=u);break;case 3:r=t[o+1],n=t[o+2],(192&r)==128&&(192&n)==128&&(u=(15&e)<<12|(63&r)<<6|63&n)>2047&&(u<55296||u>57343)&&(i=u);break;case 4:r=t[o+1],n=t[o+2],a=t[o+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(u=(15&e)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&u<1114112&&(i=u)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,s=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,n.push(i>>>10&1023|55296),i=56320|1023&i),n.push(i),o+=s}return function(t){let e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let r="",n=0;for(;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function O(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function S(t,e,r,n,o,i){if(!h.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function A(t,e,r,n,o){L(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,s>>=8,t[r++]=s,r}function P(t,e,r,n,o){L(e,n,o,t,r,7);let i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;let s=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=s,s>>=8,t[r+2]=s,s>>=8,t[r+1]=s,s>>=8,t[r]=s,r+8}function k(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function D(t,e,r,n,o){return e=+e,r>>>=0,o||k(t,e,r,4,34028234663852886e22,-34028234663852886e22),l.write(t,e,r,n,23,4),r+4}function I(t,e,r,n,o){return e=+e,r>>>=0,o||k(t,e,r,8,17976931348623157e292,-17976931348623157e292),l.write(t,e,r,n,52,8),r+8}o=h,i=function(t){return+t!=t&&(t=0),h.alloc(+t)},s=50,a=2147483647,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */h.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/h.from=function(t,e,r){return f(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/h.alloc=function(t,e,r){return(d(t),t<=0)?p(t):void 0!==e?"string"==typeof r?p(t).fill(e,r):p(t).fill(e):p(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */h.allocUnsafe=function(t){return y(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */h.allocUnsafeSlow=function(t){return y(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},h.compare=function(t,e){if(V(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),V(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let r=t.length,n=e.length;for(let o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){let r;if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;let n=h.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){let e=t[r];if(V(e,Uint8Array))o+e.length>n.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(n,o)):Uint8Array.prototype.set.call(n,e,o);else if(h.isBuffer(e))e.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=e.length}return n},h.byteLength=_,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
h.prototype._isBuffer=!0,h.prototype.swap16=function(){let t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)w(this,e,e+1);return this},h.prototype.swap32=function(){let t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},h.prototype.swap64=function(){let t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},h.prototype.toString=function(){let t=this.length;return 0===t?"":0==arguments.length?x(this,0,t):v.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="",e=s;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(t,e,r,n,o){if(V(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;let i=o-n,s=r-e,a=Math.min(i,s),u=this.slice(n,o),l=t.slice(e,r);for(let t=0;t<a;++t)if(u[t]!==l[t]){i=u[t],s=l[t];break}return i<s?-1:s<i?1:0},h.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},h.prototype.indexOf=function(t,e,r){return E(this,t,e,r,!0)},h.prototype.lastIndexOf=function(t,e,r){return E(this,t,e,r,!1)},h.prototype.write=function(t,e,r,n){var o,i,s,a,u,l,c,p;// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let f=!1;for(;;)switch(n){case"hex":return function(t,e,r,n){let o;r=Number(r)||0;let i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;let s=e.length;for(n>s/2&&(n=s/2),o=0;o<n;++o){let n=parseInt(e.substr(2*o,2),16);if(n!=n)break;t[r+o]=n}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,G(B(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return s=e,a=r,G(function(t){let e=[];for(let r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,s,a);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,l=r,G(U(t),this,u,l);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,p=r,G(function(t,e){let r,n;let o=[];for(let i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-c),this,c,p);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},h.prototype.slice=function(t,e){let r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);let n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,h.prototype),n)},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t+--e],o=1;for(;e>0&&(o*=256);)n+=this[t+--e]*o;return n},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||O(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||O(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=H(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&M(t,this.length-8);let n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),h.prototype.readBigUInt64BE=H(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&M(t,this.length-8);let n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),h.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=this[t],o=1,i=0;for(;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},h.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||O(t,e,this.length);let n=e,o=1,i=this[t+--n];for(;n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},h.prototype.readInt8=function(t,e){return(t>>>=0,e||O(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt16BE=function(t,e){t>>>=0,e||O(t,2,this.length);let r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=H(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&M(t,this.length-8);let n=this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
);return(BigInt(n)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),h.prototype.readBigInt64BE=H(function(t){j(t>>>=0,"offset");let e=this[t],r=this[t+7];(void 0===e||void 0===r)&&M(t,this.length-8);let n=(e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||O(t,4,this.length),l.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||O(t,4,this.length),l.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||O(t,8,this.length),l.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||O(t,8,this.length),l.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;S(this,t,e,r,n,0)}let o=1,i=0;for(this[e]=255&t;++i<r&&(o*=256);)this[e+i]=t/o&255;return e+r},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;S(this,t,e,r,n,0)}let o=r-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+r},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=H(function(t,e=0){return A(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeBigUInt64BE=H(function(t,e=0){return P(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),h.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let o=0,i=1,s=0;for(this[e]=255&t;++o<r&&(i*=256);)t<0&&0===s&&0!==this[e+o-1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},h.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){let n=Math.pow(2,8*r-1);S(this,t,e,r,n-1,-n)}let o=r-1,i=1,s=0;for(this[e+o]=255&t;--o>=0&&(i*=256);)t<0&&0===s&&0!==this[e+o+1]&&(s=1),this[e+o]=(t/i>>0)-s&255;return e+r},h.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||S(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=H(function(t,e=0){return A(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeBigInt64BE=H(function(t,e=0){return P(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),h.prototype.writeFloatLE=function(t,e,r){return D(this,t,e,!0,r)},h.prototype.writeFloatBE=function(t,e,r){return D(this,t,e,!1,r)},h.prototype.writeDoubleLE=function(t,e,r){return I(this,t,e,!0,r)},h.prototype.writeDoubleBE=function(t,e,r){return I(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
h.prototype.copy=function(t,e,r,n){if(!h.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);let o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
h.prototype.fill=function(t,e,r,n){let o;// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!h.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){let e=t.charCodeAt(0);("utf8"===n&&e<128||"latin1"===n)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{let i=h.isBuffer(t)?t:h.from(t,n),s=i.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=i[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let C={};function N(t,e,r){C[t]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${t}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function R(t){let e="",r=t.length,n="-"===t[0]?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.slice(0,r)}${e}`}function L(t,e,r,n,o,i){if(t>r||t<e){let n;let o="bigint"==typeof e?"n":"";throw n=i>3?0===e||e===BigInt(0)?`>= 0${o} and < 2${o} ** ${(i+1)*8}${o}`:`>= -(2${o} ** ${(i+1)*8-1}${o}) and < 2 ** ${(i+1)*8-1}${o}`:`>= ${e}${o} and <= ${r}${o}`,new C.ERR_OUT_OF_RANGE("value",n,t)}j(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&M(o,n.length-(i+1))}function j(t,e){if("number"!=typeof t)throw new C.ERR_INVALID_ARG_TYPE(e,"number",t)}function M(t,e,r){if(Math.floor(t)!==t)throw j(t,r),new C.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new C.ERR_BUFFER_OUT_OF_BOUNDS;throw new C.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}N("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),N("ERR_INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},TypeError),N("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=R(String(r)):"bigint"==typeof r&&(o=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(o=R(o)),o+="n"),n+=` It must be ${e}. Received ${o}`},RangeError);// HELPER FUNCTIONS
// ================
let F=/[^+/0-9A-Za-z-_]/g;function B(t,e){let r;e=e||1/0;let n=t.length,o=null,i=[];for(let s=0;s<n;++s){// is surrogate component
if((r=t.charCodeAt(s))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||s+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function U(t){return u.toByteArray(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(F,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function G(t,e,r,n){let o;for(o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function V(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let q=function(){let t="0123456789abcdef",e=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let o=0;o<16;++o)e[n+o]=t[r]+t[o]}return e}();// Return not function with Error if BigInt not supported
function H(t){return"undefined"==typeof BigInt?z:t}function z(){throw Error("BigInt not supported")}}),n.register("8Mc6G",function(t,r){e(t.exports,"toByteArray",function(){return n},function(t){return n=t}),e(t.exports,"fromByteArray",function(){return o},function(t){return o=t}),n=function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],u=new a((o+i)*3/4-i),l=0,c=i>0?o-4:o;for(r=0;r<c;r+=4)e=s[t.charCodeAt(r)]<<18|s[t.charCodeAt(r+1)]<<12|s[t.charCodeAt(r+2)]<<6|s[t.charCodeAt(r+3)],u[l++]=e>>16&255,u[l++]=e>>8&255,u[l++]=255&e;return 2===i&&(e=s[t.charCodeAt(r)]<<2|s[t.charCodeAt(r+1)]>>4,u[l++]=255&e),1===i&&(e=s[t.charCodeAt(r)]<<10|s[t.charCodeAt(r+1)]<<4|s[t.charCodeAt(r+2)]>>2,u[l++]=e>>8&255,u[l++]=255&e),u},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],s=0,a=r-n;s<a;s+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],s=e;s<r;s+=3)o.push(i[(n=(t[s]<<16&16711680)+(t[s+1]<<8&65280)+(255&t[s+2]))>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return o.join("")}(t,s,s+16383>a?a:s+16383));return 1===n?o.push(i[(e=t[r-1])>>2]+i[e<<4&63]+"=="):2===n&&o.push(i[(e=(t[r-2]<<8)+t[r-1])>>10]+i[e>>4&63]+i[e<<2&63]+"="),o.join("")};for(var n,o,i=[],s=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,c=u.length;l<c;++l)i[l]=u[l],s[u.charCodeAt(l)]=l;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63}),n.register("4Zqxx",function(t,r){var n,o;e(t.exports,"read",function(){return n},function(t){return n=t}),e(t.exports,"write",function(){return o},function(t){return o=t}),n=function(t,e,r,n,o){var i,s,a=8*o-n-1,u=(1<<a)-1,l=u>>1,c=-7,p=r?o-1:0,h=r?-1:1,f=t[e+p];for(p+=h,i=f&(1<<-c)-1,f>>=-c,c+=a;c>0;i=256*i+t[e+p],p+=h,c-=8);for(s=i&(1<<-c)-1,i>>=-c,c+=n;c>0;s=256*s+t[e+p],p+=h,c-=8);if(0===i)i=1-l;else{if(i===u)return s?NaN:(f?-1:1)*(1/0);s+=Math.pow(2,n),i-=l}return(f?-1:1)*s*Math.pow(2,i-n)},o=function(t,e,r,n,o,i){var s,a,u,l=8*i-o-1,c=(1<<l)-1,p=c>>1,h=23===o?5960464477539062e-23:0,f=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(a=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),s+p>=1?e+=h/u:e+=h*Math.pow(2,1-p),e*u>=2&&(s++,u/=2),s+p>=c?(a=0,s=c):s+p>=1?(a=(e*u-1)*Math.pow(2,o),s+=p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;t[r+f]=255&a,f+=d,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[r+f]=255&s,f+=d,s/=256,l-=8);t[r+f-d]|=128*y}}),n.register("2NQDr",function(t,e){/*!
 * Copyright 2019 SmugMug, Inc.
 * Licensed under the terms of the MIT license. Please see LICENSE file in the project root for terms.
 */var r=n("8bZPR");/**
 * Custom response parse for parsing XML responses from Flickr.
 * Currently, the Upload and Replace APIs don't support JSON
 * as a response format. Until we fix this on the API side,
 * we need to parse the XML response so that the end user
 * can at least do something with it.
 * @param {Response} res
 * @param {Function} fn
 * @returns {null}
 */function o(t,e){// palmtree pray box this approach from superagent's JSON parser
t.text="",t.setEncoding("utf8"),// collect all the response text
t.on("data",function(e){t.text+=e}),t.on("end",function(){r.parseString(t.text,{mergeAttrs:!0,explicitArray:!1,explicitRoot:!1,explicitCharkey:!0,charkey:"_content"},function(t,r){if(t)return e(SyntaxError(t.message),r);"fail"===r.stat&&r.err&&((t=Error(r.err.msg)).stat=r.stat,t.code=r.err.code),e(t,r)})})}/**
 * Superagent plugin-style function to request and parse
 * XML responses from the Flickr Upload and Replace APIs.
 * @param {Request} req
 * @returns {undefined}
 */t.exports=function(t){t.buffer(!0),t.parse(o)}}),n.register("8bZPR",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s=function(t,e){for(var r in e)a.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},a={}.hasOwnProperty;r=n("8CCbl"),e=n("huLh4"),o=n("e1wMb"),i=n("bufhm"),t.exports.defaults=r.defaults,t.exports.processors=i,t.exports.ValidationError=function(t){function e(t){this.message=t}return s(e,t),e}(Error),t.exports.Builder=e.Builder,t.exports.Parser=o.Parser,t.exports.parseString=o.parseString,t.exports.parseStringPromise=o.parseStringPromise}).call(t.exports)}),n.register("8CCbl",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports.defaults={"0.1":{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},"0.2":{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(t.exports)}),n.register("huLh4",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a={}.hasOwnProperty;e=n("eSCFo"),r=n("8CCbl").defaults,i=function(t){return"string"==typeof t&&(t.indexOf("&")>=0||t.indexOf(">")>=0||t.indexOf("<")>=0)},s=function(t){return"<![CDATA["+o(t)+"]]>"},o=function(t){return t.replace("]]>","]]]]><![CDATA[>")},t.exports.Builder=function(){function t(t){var e,n,o;for(e in this.options={},n=r["0.2"])a.call(n,e)&&(o=n[e],this.options[e]=o);for(e in t)a.call(t,e)&&(o=t[e],this.options[e]=o)}return t.prototype.buildObject=function(t){var n,o,u,l,c;return n=this.options.attrkey,o=this.options.charkey,1===Object.keys(t).length&&this.options.rootName===r["0.2"].rootName?(l=Object.keys(t)[0],t=t[l]):l=this.options.rootName,c=this,(u=function(t,e){var r,l,p,h,f,d;if("object"!=typeof e)c.options.cdata&&i(e)?t.raw(s(e)):t.txt(e);else if(Array.isArray(e)){for(h in e)if(a.call(e,h))for(f in l=e[h])p=l[f],t=u(t.ele(f),p).up()}else for(f in e)if(a.call(e,f)){if(l=e[f],f===n){if("object"==typeof l)for(r in l)d=l[r],t=t.att(r,d)}else if(f===o)t=c.options.cdata&&i(l)?t.raw(s(l)):t.txt(l);else if(Array.isArray(l))for(h in l)a.call(l,h)&&(t="string"==typeof(p=l[h])?c.options.cdata&&i(p)?t.ele(f).raw(s(p)).up():t.ele(f,p).up():u(t.ele(f),p).up());else"object"==typeof l?t=u(t.ele(f),l).up():"string"==typeof l&&c.options.cdata&&i(l)?t=t.ele(f).raw(s(l)).up():(null==l&&(l=""),t=t.ele(f,l.toString()).up())}return t})(e.create(l,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),t).end(this.options.renderOpts)},t}()}).call(t.exports)}),n.register("eSCFo",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l,c,p;l=(p=n("5dmYp")).assign,c=p.isFunction,o=n("6oFRk"),i=n("2nn19"),s=n("6OQXF"),u=n("5Qw50"),a=n("3wosh"),e=n("1mPXV"),r=n("bCif0"),t.exports.create=function(t,e,r,n){var o,s;if(null==t)throw Error("Root element needs a name.");return n=l({},e,r,n),s=(o=new i(n)).element(t),n.headless||(o.declaration(n),(null!=n.pubID||null!=n.sysID)&&o.dtd(n)),s},t.exports.begin=function(t,e,r){var n;return(c(t)&&(e=(n=[t,e])[0],r=n[1],t={}),e)?new s(t,e,r):new i(t)},t.exports.stringWriter=function(t){return new u(t)},t.exports.streamWriter=function(t,e){return new a(t,e)},t.exports.implementation=new o,t.exports.nodeType=e,t.exports.writerState=r}).call(t.exports)}),n.register("5dmYp",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,n,o=[].slice,i={}.hasOwnProperty;r=function(t){return!!t&&"[object Function]"===Object.prototype.toString.call(t)},n=function(t){var e;return!!t&&("function"==(e=typeof t)||"object"===e)},e=function(t){return r(Array.isArray)?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},t.exports.assign=function(){var t,e,n,s,a,u;if(u=arguments[0],a=2<=arguments.length?o.call(arguments,1):[],r(Object.assign))Object.assign.apply(null,arguments);else for(t=0,n=a.length;t<n;t++)if(null!=(s=a[t]))for(e in s)i.call(s,e)&&(u[e]=s[e]);return u},t.exports.isFunction=r,t.exports.isObject=n,t.exports.isArray=e,t.exports.isEmpty=function(t){var r;if(e(t))return!t.length;for(r in t)if(i.call(t,r))return!1;return!0},t.exports.isPlainObject=function(t){var e,r;return n(t)&&(r=Object.getPrototypeOf(t))&&(e=r.constructor)&&"function"==typeof e&&e instanceof e&&Function.prototype.toString.call(e)===Function.prototype.toString.call(Object)},t.exports.getValue=function(t){return r(t.valueOf)?t.valueOf():t}}).call(t.exports)}),n.register("6oFRk",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports=function(){function t(){}return t.prototype.hasFeature=function(t,e){return!0},t.prototype.createDocumentType=function(t,e,r){throw Error("This DOM method is not implemented.")},t.prototype.createDocument=function(t,e,r){throw Error("This DOM method is not implemented.")},t.prototype.createHTMLDocument=function(t){throw Error("This DOM method is not implemented.")},t.prototype.getFeature=function(t,e){throw Error("This DOM method is not implemented.")},t}()}).call(t.exports)}),n.register("2nn19",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l=function(t,e){for(var r in e)c.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},c={}.hasOwnProperty;u=n("5dmYp").isPlainObject,o=n("6oFRk"),r=n("7mnJg"),i=n("alxF6"),e=n("1mPXV"),a=n("3Xk9q"),s=n("5Qw50"),t.exports=function(t){function n(t){n.__super__.constructor.call(this,null),this.name="#document",this.type=e.Document,this.documentURI=null,this.domConfig=new r,t||(t={}),t.writer||(t.writer=new s),this.options=t,this.stringify=new a(t)}return l(n,t),Object.defineProperty(n.prototype,"implementation",{value:new o}),Object.defineProperty(n.prototype,"doctype",{get:function(){var t,r,n,o;for(r=0,n=(o=this.children).length;r<n;r++)if((t=o[r]).type===e.DocType)return t;return null}}),Object.defineProperty(n.prototype,"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(n.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(n.prototype,"strictErrorChecking",{get:function(){return!1}}),Object.defineProperty(n.prototype,"xmlEncoding",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration?this.children[0].encoding:null}}),Object.defineProperty(n.prototype,"xmlStandalone",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration&&"yes"===this.children[0].standalone}}),Object.defineProperty(n.prototype,"xmlVersion",{get:function(){return 0!==this.children.length&&this.children[0].type===e.Declaration?this.children[0].version:"1.0"}}),Object.defineProperty(n.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(n.prototype,"origin",{get:function(){return null}}),Object.defineProperty(n.prototype,"compatMode",{get:function(){return null}}),Object.defineProperty(n.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(n.prototype,"contentType",{get:function(){return null}}),n.prototype.end=function(t){var e;return e={},t?u(t)&&(e=t,t=this.options.writer):t=this.options.writer,t.document(this,t.filterOptions(e))},n.prototype.toString=function(t){return this.options.writer.document(this,this.options.writer.filterOptions(t))},n.prototype.createElement=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createDocumentFragment=function(){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createTextNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createComment=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createCDATASection=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createProcessingInstruction=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createAttribute=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createEntityReference=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagName=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.importNode=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createElementNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createAttributeNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagNameNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementById=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.adoptNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.normalizeDocument=function(){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.renameNode=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByClassName=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createEvent=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createRange=function(){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createNodeIterator=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.createTreeWalker=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},n}(i)}).call(t.exports)}),n.register("7mnJg",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r;e=n("1wu8m"),r=n("4AJiB"),t.exports=function(){function t(){this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,"element-content-whitespace":!0,entities:!0,"error-handler":new e,infoset:!0,"validate-if-schema":!1,namespaces:!0,"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,validate:!1,"well-formed":!0},this.params=Object.create(this.defaultParams)}return Object.defineProperty(t.prototype,"parameterNames",{get:function(){return new r(Object.keys(this.defaultParams))}}),t.prototype.getParameter=function(t){return this.params.hasOwnProperty(t)?this.params[t]:null},t.prototype.canSetParameter=function(t,e){return!0},t.prototype.setParameter=function(t,e){return null!=e?this.params[t]=e:delete this.params[t]},t}()}).call(t.exports)}),n.register("1wu8m",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports=function(){function t(){}return t.prototype.handleError=function(t){throw Error(t)},t}()}).call(t.exports)}),n.register("4AJiB",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports=function(){function t(t){this.arr=t||[]}return Object.defineProperty(t.prototype,"length",{get:function(){return this.arr.length}}),t.prototype.item=function(t){return this.arr[t]||null},t.prototype.contains=function(t){return -1!==this.arr.indexOf(t)},t}()}).call(t.exports)}),n.register("alxF6",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l,c,p,h,f,d,y,g,m,b,_={}.hasOwnProperty;m=(b=n("5dmYp")).isObject,g=b.isFunction,y=b.isEmpty,d=b.getValue,l=null,o=null,i=null,s=null,a=null,h=null,f=null,p=null,u=null,r=null,c=null,e=null,t.exports=function(){function t(t){this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,l||(l=n("5qyyf"),o=n("bJUcM"),i=n("e6oCh"),s=n("eTZGu"),a=n("3kVfO"),h=n("7icUk"),f=n("bnuQY"),p=n("hVRXY"),u=n("1qgXJ"),r=n("1mPXV"),c=n("bCeZD"),n("gg8He"),e=n("3gsO4"))}return Object.defineProperty(t.prototype,"nodeName",{get:function(){return this.name}}),Object.defineProperty(t.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(t.prototype,"parentNode",{get:function(){return this.parent}}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.childNodeList&&this.childNodeList.nodes||(this.childNodeList=new c(this.children)),this.childNodeList}}),Object.defineProperty(t.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(t.prototype,"previousSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t-1]||null}}),Object.defineProperty(t.prototype,"nextSibling",{get:function(){var t;return t=this.parent.children.indexOf(this),this.parent.children[t+1]||null}}),Object.defineProperty(t.prototype,"ownerDocument",{get:function(){return this.document()||null}}),Object.defineProperty(t.prototype,"textContent",{get:function(){var t,e,n,o,i;if(this.nodeType!==r.Element&&this.nodeType!==r.DocumentFragment)return null;for(e=0,i="",n=(o=this.children).length;e<n;e++)(t=o[e]).textContent&&(i+=t.textContent);return i},set:function(t){throw Error("This DOM method is not implemented."+this.debugInfo())}}),t.prototype.setParent=function(t){var e,r,n,o,i;for(this.parent=t,t&&(this.options=t.options,this.stringify=t.stringify),o=this.children,i=[],r=0,n=o.length;r<n;r++)e=o[r],i.push(e.setParent(this));return i},t.prototype.element=function(t,e,r){var n,o,i,s,a,u,l,c,p,h,f;if(u=null,null===e&&null==r&&(e=(p=[{},null])[0],r=p[1]),null==e&&(e={}),m(e=d(e))||(r=(h=[e,r])[0],e=h[1]),null!=t&&(t=d(t)),Array.isArray(t))for(i=0,l=t.length;i<l;i++)o=t[i],u=this.element(o);else if(g(t))u=this.element(t.apply());else if(m(t)){for(a in t)if(_.call(t,a)){if(g(f=t[a])&&(f=f.apply()),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===a.indexOf(this.stringify.convertAttKey))u=this.attribute(a.substr(this.stringify.convertAttKey.length),f);else if(!this.options.separateArrayItems&&Array.isArray(f)&&y(f))u=this.dummy();else if(m(f)&&y(f))u=this.element(a);else if(this.options.keepNullNodes||null!=f){if(!this.options.separateArrayItems&&Array.isArray(f))for(s=0,c=f.length;s<c;s++)o=f[s],(n={})[a]=o,u=this.element(n);else m(f)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===a.indexOf(this.stringify.convertTextKey)?u=this.element(f):(u=this.element(a)).element(f):u=this.element(a,f)}else u=this.dummy()}}else u=this.options.keepNullNodes||null!==r?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===t.indexOf(this.stringify.convertTextKey)?this.text(r):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===t.indexOf(this.stringify.convertCDataKey)?this.cdata(r):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===t.indexOf(this.stringify.convertCommentKey)?this.comment(r):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===t.indexOf(this.stringify.convertRawKey)?this.raw(r):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===t.indexOf(this.stringify.convertPIKey)?this.instruction(t.substr(this.stringify.convertPIKey.length),r):this.node(t,e,r):this.dummy();if(null==u)throw Error("Could not create any elements with: "+t+". "+this.debugInfo());return u},t.prototype.insertBefore=function(t,e,r){var n,o,i;if(null!=t?t.type:void 0)return t.setParent(this),e?(o=children.indexOf(e),i=children.splice(o),children.push(t),Array.prototype.push.apply(children,i)):children.push(t),t;if(this.isRoot)throw Error("Cannot insert elements at root level. "+this.debugInfo(t));return o=this.parent.children.indexOf(this),i=this.parent.children.splice(o),n=this.parent.element(t,e,r),Array.prototype.push.apply(this.parent.children,i),n},t.prototype.insertAfter=function(t,e,r){var n,o,i;if(this.isRoot)throw Error("Cannot insert elements at root level. "+this.debugInfo(t));return o=this.parent.children.indexOf(this),i=this.parent.children.splice(o+1),n=this.parent.element(t,e,r),Array.prototype.push.apply(this.parent.children,i),n},t.prototype.remove=function(){var t;if(this.isRoot)throw Error("Cannot remove the root element. "+this.debugInfo());return t=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[t,t-t+1].concat([])),this.parent},t.prototype.node=function(t,e,r){var n,o;return null!=t&&(t=d(t)),e||(e={}),m(e=d(e))||(r=(o=[e,r])[0],e=o[1]),n=new l(this,t,e),null!=r&&n.text(r),this.children.push(n),n},t.prototype.text=function(t){var e;return m(t)&&this.element(t),e=new f(this,t),this.children.push(e),this},t.prototype.cdata=function(t){var e;return e=new o(this,t),this.children.push(e),this},t.prototype.comment=function(t){var e;return e=new i(this,t),this.children.push(e),this},t.prototype.commentBefore=function(t){var e,r;return e=this.parent.children.indexOf(this),r=this.parent.children.splice(e),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.commentAfter=function(t){var e,r;return e=this.parent.children.indexOf(this),r=this.parent.children.splice(e+1),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.raw=function(t){var e;return e=new h(this,t),this.children.push(e),this},t.prototype.dummy=function(){return new u(this)},t.prototype.instruction=function(t,e){var r,n,o,i,s;if(null!=t&&(t=d(t)),null!=e&&(e=d(e)),Array.isArray(t))for(i=0,s=t.length;i<s;i++)r=t[i],this.instruction(r);else if(m(t))for(r in t)_.call(t,r)&&(n=t[r],this.instruction(r,n));else g(e)&&(e=e.apply()),o=new p(this,t,e),this.children.push(o);return this},t.prototype.instructionBefore=function(t,e){var r,n;return r=this.parent.children.indexOf(this),n=this.parent.children.splice(r),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.instructionAfter=function(t,e){var r,n;return r=this.parent.children.indexOf(this),n=this.parent.children.splice(r+1),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.declaration=function(t,e,n){var o,i;return o=this.document(),i=new s(o,t,e,n),0===o.children.length?o.children.unshift(i):o.children[0].type===r.Declaration?o.children[0]=i:o.children.unshift(i),o.root()||o},t.prototype.dtd=function(t,e){var n,o,i,s,u,l,c,p,h;for(n=this.document(),o=new a(n,t,e),p=n.children,i=s=0,l=p.length;s<l;i=++s)if(p[i].type===r.DocType)return n.children[i]=o,o;for(h=n.children,i=u=0,c=h.length;u<c;i=++u)if(h[i].isRoot)return n.children.splice(i,0,o),o;return n.children.push(o),o},t.prototype.up=function(){if(this.isRoot)throw Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},t.prototype.root=function(){var t;for(t=this;t;){if(t.type===r.Document)return t.rootObject;if(t.isRoot)return t;t=t.parent}},t.prototype.document=function(){var t;for(t=this;t;){if(t.type===r.Document)return t;t=t.parent}},t.prototype.end=function(t){return this.document().end(t)},t.prototype.prev=function(){var t;if((t=this.parent.children.indexOf(this))<1)throw Error("Already at the first node. "+this.debugInfo());return this.parent.children[t-1]},t.prototype.next=function(){var t;if(-1===(t=this.parent.children.indexOf(this))||t===this.parent.children.length-1)throw Error("Already at the last node. "+this.debugInfo());return this.parent.children[t+1]},t.prototype.importDocument=function(t){var e;return(e=t.root().clone()).parent=this,e.isRoot=!1,this.children.push(e),this},t.prototype.debugInfo=function(t){var e,r;return null!=(t=t||this.name)||(null!=(e=this.parent)?e.name:void 0)?null==t?"parent: <"+this.parent.name+">":(null!=(r=this.parent)?r.name:void 0)?"node: <"+t+">, parent: <"+this.parent.name+">":"node: <"+t+">":""},t.prototype.ele=function(t,e,r){return this.element(t,e,r)},t.prototype.nod=function(t,e,r){return this.node(t,e,r)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.doc=function(){return this.document()},t.prototype.dec=function(t,e,r){return this.declaration(t,e,r)},t.prototype.e=function(t,e,r){return this.element(t,e,r)},t.prototype.n=function(t,e,r){return this.node(t,e,r)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.u=function(){return this.up()},t.prototype.importXMLBuilder=function(t){return this.importDocument(t)},t.prototype.replaceChild=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.removeChild=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.appendChild=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.hasChildNodes=function(){return 0!==this.children.length},t.prototype.cloneNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.normalize=function(){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isSupported=function(t,e){return!0},t.prototype.hasAttributes=function(){return 0!==this.attribs.length},t.prototype.compareDocumentPosition=function(t){var r;return this===t?0:this.document()!==t.document()?(r=e.Disconnected|e.ImplementationSpecific,.5>Math.random()?r|=e.Preceding:r|=e.Following,r):this.isAncestor(t)?e.Contains|e.Preceding:this.isDescendant(t)?e.Contains|e.Following:this.isPreceding(t)?e.Preceding:e.Following},t.prototype.isSameNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.lookupPrefix=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isDefaultNamespace=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.lookupNamespaceURI=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isEqualNode=function(t){var e,r,n;if(t.nodeType!==this.nodeType||t.children.length!==this.children.length)return!1;for(e=r=0,n=this.children.length-1;0<=n?r<=n:r>=n;e=0<=n?++r:--r)if(!this.children[e].isEqualNode(t.children[e]))return!1;return!0},t.prototype.getFeature=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.setUserData=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.getUserData=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.contains=function(t){return!!t&&(t===this||this.isDescendant(t))},t.prototype.isDescendant=function(t){var e,r,n,o;for(r=0,n=(o=this.children).length;r<n;r++)if(t===(e=o[r])||e.isDescendant(t))return!0;return!1},t.prototype.isAncestor=function(t){return t.isDescendant(this)},t.prototype.isPreceding=function(t){var e,r;return e=this.treePosition(t),r=this.treePosition(this),-1!==e&&-1!==r&&e<r},t.prototype.isFollowing=function(t){var e,r;return e=this.treePosition(t),r=this.treePosition(this),-1!==e&&-1!==r&&e>r},t.prototype.treePosition=function(t){var e,r;return(r=0,e=!1,this.foreachTreeNode(this.document(),function(n){if(r++,!e&&n===t)return e=!0}),e)?r:-1},t.prototype.foreachTreeNode=function(t,e){var r,n,o,i,s;for(t||(t=this.document()),n=0,o=(i=t.children).length;n<o;n++)if((s=e(r=i[n]))||(s=this.foreachTreeNode(r,e)))return s},t}()}).call(t.exports)}),n.register("5qyyf",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l,c=function(t,e){for(var r in e)p.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;u=(l=n("5dmYp")).isObject,a=l.isFunction,s=l.getValue,i=n("alxF6"),e=n("1mPXV"),r=n("6zhGw"),o=n("gg8He"),t.exports=function(t){function n(t,r,o){var i,s,a,u;if(n.__super__.constructor.call(this,t),null==r)throw Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(r),this.type=e.Element,this.attribs={},this.schemaTypeInfo=null,null!=o&&this.attribute(o),t.type===e.Document&&(this.isRoot=!0,this.documentObject=t,t.rootObject=this,t.children)){for(s=0,a=(u=t.children).length;s<a;s++)if((i=u[s]).type===e.DocType){i.name=this.name;break}}}return c(n,t),Object.defineProperty(n.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(n.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(n.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(n.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(n.prototype,"id",{get:function(){throw Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"className",{get:function(){throw Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"classList",{get:function(){throw Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"attributes",{get:function(){return this.attributeMap&&this.attributeMap.nodes||(this.attributeMap=new o(this.attribs)),this.attributeMap}}),n.prototype.clone=function(){var t,e,r,n;for(e in(r=Object.create(this)).isRoot&&(r.documentObject=null),r.attribs={},n=this.attribs)p.call(n,e)&&(t=n[e],r.attribs[e]=t.clone());return r.children=[],this.children.forEach(function(t){var e;return(e=t.clone()).parent=r,r.children.push(e)}),r},n.prototype.attribute=function(t,e){var n,o;if(null!=t&&(t=s(t)),u(t))for(n in t)p.call(t,n)&&(o=t[n],this.attribute(n,o));else a(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.attribs[t]=new r(this,t,""):null!=e&&(this.attribs[t]=new r(this,t,e));return this},n.prototype.removeAttribute=function(t){var e,r,n;if(null==t)throw Error("Missing attribute name. "+this.debugInfo());if(Array.isArray(t=s(t)))for(r=0,n=t.length;r<n;r++)e=t[r],delete this.attribs[e];else delete this.attribs[t];return this},n.prototype.toString=function(t){return this.options.writer.element(this,this.options.writer.filterOptions(t))},n.prototype.att=function(t,e){return this.attribute(t,e)},n.prototype.a=function(t,e){return this.attribute(t,e)},n.prototype.getAttribute=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t].value:null},n.prototype.setAttribute=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNode=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t]:null},n.prototype.setAttributeNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.removeAttributeNode=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagName=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setAttributeNS=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.removeAttributeNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNodeNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setAttributeNodeNS=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagNameNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.hasAttribute=function(t){return this.attribs.hasOwnProperty(t)},n.prototype.hasAttributeNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setIdAttribute=function(t,e){return this.attribs.hasOwnProperty(t)?this.attribs[t].isId:e},n.prototype.setIdAttributeNS=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setIdAttributeNode=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagName=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagNameNS=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByClassName=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isEqualNode=function(t){var e,r,o;if(!n.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)||t.namespaceURI!==this.namespaceURI||t.prefix!==this.prefix||t.localName!==this.localName||t.attribs.length!==this.attribs.length)return!1;for(e=r=0,o=this.attribs.length-1;0<=o?r<=o:r>=o;e=0<=o?++r:--r)if(!this.attribs[e].isEqualNode(t.attribs[e]))return!1;return!0},n}(i)}).call(t.exports)}),n.register("1mPXV",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports={Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,ElementDeclaration:204,Dummy:205}}).call(t.exports)}),n.register("6zhGw",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e;e=n("1mPXV"),n("alxF6"),t.exports=function(){function t(t,r,n){if(this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),null==r)throw Error("Missing attribute name. "+this.debugInfo(r));this.name=this.stringify.name(r),this.value=this.stringify.attValue(n),this.type=e.Attribute,this.isId=!1,this.schemaTypeInfo=null}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(t.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(t.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(t.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(t.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(t.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(t.prototype,"specified",{get:function(){return!0}}),t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(t){return this.options.writer.attribute(this,this.options.writer.filterOptions(t))},t.prototype.debugInfo=function(t){return null==(t=t||this.name)?"parent: <"+this.parent.name+">":"attribute: {"+t+"}, parent: <"+this.parent.name+">"},t.prototype.isEqualNode=function(t){return t.namespaceURI===this.namespaceURI&&t.prefix===this.prefix&&t.localName===this.localName&&t.value===this.value},t}()}).call(t.exports)}),n.register("gg8He",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports=function(){function t(t){this.nodes=t}return Object.defineProperty(t.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.getNamedItem=function(t){return this.nodes[t]},t.prototype.setNamedItem=function(t){var e;return e=this.nodes[t.nodeName],this.nodes[t.nodeName]=t,e||null},t.prototype.removeNamedItem=function(t){var e;return e=this.nodes[t],delete this.nodes[t],e||null},t.prototype.item=function(t){return this.nodes[Object.keys(this.nodes)[t]]||null},t.prototype.getNamedItemNS=function(t,e){throw Error("This DOM method is not implemented.")},t.prototype.setNamedItemNS=function(t){throw Error("This DOM method is not implemented.")},t.prototype.removeNamedItemNS=function(t,e){throw Error("This DOM method is not implemented.")},t}()}).call(t.exports)}),n.register("bJUcM",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=n("1mPXV"),r=n("1GwgQ"),t.exports=function(t){function r(t,n){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing CDATA text. "+this.debugInfo());this.name="#cdata-section",this.type=e.CData,this.value=this.stringify.cdata(n)}return o(r,t),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return this.options.writer.cdata(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("1GwgQ",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r=function(t,e){for(var r in e)o.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;e=n("alxF6"),t.exports=function(t){function e(t){e.__super__.constructor.call(this,t),this.value=""}return r(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this.value},set:function(t){return this.value=t||""}}),Object.defineProperty(e.prototype,"length",{get:function(){return this.value.length}}),Object.defineProperty(e.prototype,"textContent",{get:function(){return this.value},set:function(t){return this.value=t||""}}),e.prototype.clone=function(){return Object.create(this)},e.prototype.substringData=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.appendData=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.insertData=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.deleteData=function(t,e){throw Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.replaceData=function(t,e,r){throw Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.isEqualNode=function(t){return!!e.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.data===this.data},e}(e)}).call(t.exports)}),n.register("e6oCh",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=n("1mPXV"),r=n("1GwgQ"),t.exports=function(t){function r(t,n){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing comment text. "+this.debugInfo());this.name="#comment",this.type=e.Comment,this.value=this.stringify.comment(n)}return o(r,t),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return this.options.writer.comment(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("eTZGu",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i=function(t,e){for(var r in e)s.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;o=n("5dmYp").isObject,r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t,n,i,s){var a;r.__super__.constructor.call(this,t),o(n)&&(n=(a=n).version,i=a.encoding,s=a.standalone),n||(n="1.0"),this.type=e.Declaration,this.version=this.stringify.xmlVersion(n),null!=i&&(this.encoding=this.stringify.xmlEncoding(i)),null!=s&&(this.standalone=this.stringify.xmlStandalone(s))}return i(r,t),r.prototype.toString=function(t){return this.options.writer.declaration(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("3kVfO",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l,c=function(t,e){for(var r in e)p.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;l=n("5dmYp").isObject,u=n("alxF6"),e=n("1mPXV"),r=n("95dYv"),i=n("7CzgM"),o=n("fFr8m"),s=n("gfQCu"),a=n("gg8He"),t.exports=function(t){function n(t,r,o){var i,s,a,u,c,p;if(n.__super__.constructor.call(this,t),this.type=e.DocType,t.children){for(s=0,a=(u=t.children).length;s<a;s++)if((i=u[s]).type===e.Element){this.name=i.name;break}}this.documentObject=t,l(r)&&(r=(c=r).pubID,o=c.sysID),null==o&&(o=(p=[r,o])[0],r=p[1]),null!=r&&(this.pubID=this.stringify.dtdPubID(r)),null!=o&&(this.sysID=this.stringify.dtdSysID(o))}return c(n,t),Object.defineProperty(n.prototype,"entities",{get:function(){var t,r,n,o,i;for(r=0,o={},n=(i=this.children).length;r<n;r++)(t=i[r]).type!==e.EntityDeclaration||t.pe||(o[t.name]=t);return new a(o)}}),Object.defineProperty(n.prototype,"notations",{get:function(){var t,r,n,o,i;for(r=0,o={},n=(i=this.children).length;r<n;r++)(t=i[r]).type===e.NotationDeclaration&&(o[t.name]=t);return new a(o)}}),Object.defineProperty(n.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(n.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(n.prototype,"internalSubset",{get:function(){throw Error("This DOM method is not implemented."+this.debugInfo())}}),n.prototype.element=function(t,e){var r;return r=new o(this,t,e),this.children.push(r),this},n.prototype.attList=function(t,e,n,o,i){var s;return s=new r(this,t,e,n,o,i),this.children.push(s),this},n.prototype.entity=function(t,e){var r;return r=new i(this,!1,t,e),this.children.push(r),this},n.prototype.pEntity=function(t,e){var r;return r=new i(this,!0,t,e),this.children.push(r),this},n.prototype.notation=function(t,e){var r;return r=new s(this,t,e),this.children.push(r),this},n.prototype.toString=function(t){return this.options.writer.docType(this,this.options.writer.filterOptions(t))},n.prototype.ele=function(t,e){return this.element(t,e)},n.prototype.att=function(t,e,r,n,o){return this.attList(t,e,r,n,o)},n.prototype.ent=function(t,e){return this.entity(t,e)},n.prototype.pent=function(t,e){return this.pEntity(t,e)},n.prototype.not=function(t,e){return this.notation(t,e)},n.prototype.up=function(){return this.root()||this.documentObject},n.prototype.isEqualNode=function(t){return!!n.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.name===this.name&&t.publicId===this.publicId&&t.systemId===this.systemId},n}(u)}).call(t.exports)}),n.register("95dYv",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t,n,o,i,s,a){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing DTD element name. "+this.debugInfo());if(null==o)throw Error("Missing DTD attribute name. "+this.debugInfo(n));if(!i)throw Error("Missing DTD attribute type. "+this.debugInfo(n));if(!s)throw Error("Missing DTD attribute default. "+this.debugInfo(n));if(0!==s.indexOf("#")&&(s="#"+s),!s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(n));if(a&&!s.match(/^(#FIXED|#DEFAULT)$/))throw Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(n));this.elementName=this.stringify.name(n),this.type=e.AttributeDeclaration,this.attributeName=this.stringify.name(o),this.attributeType=this.stringify.dtdAttType(i),a&&(this.defaultValue=this.stringify.dtdAttDefault(a)),this.defaultValueType=s}return o(r,t),r.prototype.toString=function(t){return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("7CzgM",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i=function(t,e){for(var r in e)s.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;o=n("5dmYp").isObject,r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t,n,i,s){if(r.__super__.constructor.call(this,t),null==i)throw Error("Missing DTD entity name. "+this.debugInfo(i));if(null==s)throw Error("Missing DTD entity value. "+this.debugInfo(i));if(this.pe=!!n,this.name=this.stringify.name(i),this.type=e.EntityDeclaration,o(s)){if(!s.pubID&&!s.sysID)throw Error("Public and/or system identifiers are required for an external entity. "+this.debugInfo(i));if(s.pubID&&!s.sysID)throw Error("System identifier is required for a public external entity. "+this.debugInfo(i));if(this.internal=!1,null!=s.pubID&&(this.pubID=this.stringify.dtdPubID(s.pubID)),null!=s.sysID&&(this.sysID=this.stringify.dtdSysID(s.sysID)),null!=s.nData&&(this.nData=this.stringify.dtdNData(s.nData)),this.pe&&this.nData)throw Error("Notation declaration is not allowed in a parameter entity. "+this.debugInfo(i))}else this.value=this.stringify.dtdEntityValue(s),this.internal=!0}return i(r,t),Object.defineProperty(r.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(r.prototype,"systemId",{get:function(){return this.sysID}}),Object.defineProperty(r.prototype,"notationName",{get:function(){return this.nData||null}}),Object.defineProperty(r.prototype,"inputEncoding",{get:function(){return null}}),Object.defineProperty(r.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(r.prototype,"xmlVersion",{get:function(){return null}}),r.prototype.toString=function(t){return this.options.writer.dtdEntity(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("fFr8m",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t,n,o){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing DTD element name. "+this.debugInfo());o||(o="(#PCDATA)"),Array.isArray(o)&&(o="("+o.join(",")+")"),this.name=this.stringify.name(n),this.type=e.ElementDeclaration,this.value=this.stringify.dtdElementValue(o)}return o(r,t),r.prototype.toString=function(t){return this.options.writer.dtdElement(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("gfQCu",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t,n,o){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing DTD notation name. "+this.debugInfo(n));if(!o.pubID&&!o.sysID)throw Error("Public or system identifiers are required for an external entity. "+this.debugInfo(n));this.name=this.stringify.name(n),this.type=e.NotationDeclaration,null!=o.pubID&&(this.pubID=this.stringify.dtdPubID(o.pubID)),null!=o.sysID&&(this.sysID=this.stringify.dtdSysID(o.sysID))}return o(r,t),Object.defineProperty(r.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(r.prototype,"systemId",{get:function(){return this.sysID}}),r.prototype.toString=function(t){return this.options.writer.dtdNotation(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("7icUk",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=n("1mPXV"),r=n("alxF6"),t.exports=function(t){function r(t,n){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing raw text. "+this.debugInfo());this.type=e.Raw,this.value=this.stringify.raw(n)}return o(r,t),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return this.options.writer.raw(this,this.options.writer.filterOptions(t))},r}(r)}).call(t.exports)}),n.register("bnuQY",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=n("1mPXV"),r=n("1GwgQ"),t.exports=function(t){function r(t,n){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=e.Text,this.value=this.stringify.text(n)}return o(r,t),Object.defineProperty(r.prototype,"isElementContentWhitespace",{get:function(){throw Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(r.prototype,"wholeText",{get:function(){var t,e,r;for(r="",e=this.previousSibling;e;)r=e.data+r,e=e.previousSibling;for(r+=this.data,t=this.nextSibling;t;)r+=t.data,t=t.nextSibling;return r}}),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return this.options.writer.text(this,this.options.writer.filterOptions(t))},r.prototype.splitText=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.replaceWholeText=function(t){throw Error("This DOM method is not implemented."+this.debugInfo())},r}(r)}).call(t.exports)}),n.register("hVRXY",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;e=n("1mPXV"),r=n("1GwgQ"),t.exports=function(t){function r(t,n,o){if(r.__super__.constructor.call(this,t),null==n)throw Error("Missing instruction target. "+this.debugInfo());this.type=e.ProcessingInstruction,this.target=this.stringify.insTarget(n),this.name=this.target,o&&(this.value=this.stringify.insValue(o))}return o(r,t),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return this.options.writer.processingInstruction(this,this.options.writer.filterOptions(t))},r.prototype.isEqualNode=function(t){return!!r.__super__.isEqualNode.apply(this,arguments).isEqualNode(t)&&t.target===this.target},r}(r)}).call(t.exports)}),n.register("1qgXJ",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o=function(t,e){for(var r in e)i.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},i={}.hasOwnProperty;r=n("alxF6"),e=n("1mPXV"),t.exports=function(t){function r(t){r.__super__.constructor.call(this,t),this.type=e.Dummy}return o(r,t),r.prototype.clone=function(){return Object.create(this)},r.prototype.toString=function(t){return""},r}(r)}).call(t.exports)}),n.register("bCeZD",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports=function(){function t(t){this.nodes=t}return Object.defineProperty(t.prototype,"length",{get:function(){return this.nodes.length||0}}),t.prototype.clone=function(){return this.nodes=null},t.prototype.item=function(t){return this.nodes[t]||null},t}()}).call(t.exports)}),n.register("3gsO4",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}}).call(t.exports)}),n.register("3Xk9q",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e=function(t,e){return function(){return t.apply(e,arguments)}},r={}.hasOwnProperty;t.exports=function(){function t(t){var n,o,i;for(n in this.assertLegalName=e(this.assertLegalName,this),this.assertLegalChar=e(this.assertLegalChar,this),t||(t={}),this.options=t,this.options.version||(this.options.version="1.0"),o=t.stringify||{})r.call(o,n)&&(i=o[n],this[n]=i)}return t.prototype.name=function(t){return this.options.noValidation?t:this.assertLegalName(""+t||"")},t.prototype.text=function(t){return this.options.noValidation?t:this.assertLegalChar(this.textEscape(""+t||""))},t.prototype.cdata=function(t){return this.options.noValidation?t:(t=(t=""+t||"").replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(t))},t.prototype.comment=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/--/))throw Error("Comment text cannot contain double-hypen: "+t);return this.assertLegalChar(t)},t.prototype.raw=function(t){return this.options.noValidation?t:""+t||""},t.prototype.attValue=function(t){return this.options.noValidation?t:this.assertLegalChar(this.attEscape(t=""+t||""))},t.prototype.insTarget=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.insValue=function(t){if(this.options.noValidation)return t;if((t=""+t||"").match(/\?>/))throw Error("Invalid processing instruction value: "+t);return this.assertLegalChar(t)},t.prototype.xmlVersion=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/1\.[0-9]+/))throw Error("Invalid version number: "+t);return t},t.prototype.xmlEncoding=function(t){if(this.options.noValidation)return t;if(!(t=""+t||"").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw Error("Invalid encoding: "+t);return this.assertLegalChar(t)},t.prototype.xmlStandalone=function(t){return this.options.noValidation?t:t?"yes":"no"},t.prototype.dtdPubID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdSysID=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdElementValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdAttType=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdAttDefault=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdEntityValue=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.dtdNData=function(t){return this.options.noValidation?t:this.assertLegalChar(""+t||"")},t.prototype.convertAttKey="@",t.prototype.convertPIKey="?",t.prototype.convertTextKey="#text",t.prototype.convertCDataKey="#cdata",t.prototype.convertCommentKey="#comment",t.prototype.convertRawKey="#raw",t.prototype.assertLegalChar=function(t){var e,r;if(this.options.noValidation)return t;if(e="","1.0"===this.options.version){if(e=/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,r=t.match(e))throw Error("Invalid character in string: "+t+" at index "+r.index)}else if("1.1"===this.options.version&&(e=/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,r=t.match(e)))throw Error("Invalid character in string: "+t+" at index "+r.index);return t},t.prototype.assertLegalName=function(t){if(this.options.noValidation)return t;if(this.assertLegalChar(t),!t.match(/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/))throw Error("Invalid character in name");return t},t.prototype.textEscape=function(t){var e;return this.options.noValidation?t:(e=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},t.prototype.attEscape=function(t){var e;return this.options.noValidation?t:(e=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},t}()}).call(t.exports)}),n.register("5Qw50",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r=function(t,e){for(var r in e)o.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},o={}.hasOwnProperty;e=n("5xzdZ"),t.exports=function(t){function e(t){e.__super__.constructor.call(this,t)}return r(e,t),e.prototype.document=function(t,e){var r,n,o,i,s;for(n=0,e=this.filterOptions(e),i="",o=(s=t.children).length;n<o;n++)r=s[n],i+=this.writeChildNode(r,e,0);return e.pretty&&i.slice(-e.newline.length)===e.newline&&(i=i.slice(0,-e.newline.length)),i},e}(e)}).call(t.exports)}),n.register("5xzdZ",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i={}.hasOwnProperty;o=n("5dmYp").assign,e=n("1mPXV"),n("eTZGu"),n("3kVfO"),n("bJUcM"),n("e6oCh"),n("5qyyf"),n("7icUk"),n("bnuQY"),n("hVRXY"),n("1qgXJ"),n("95dYv"),n("fFr8m"),n("7CzgM"),n("gfQCu"),r=n("bCif0"),t.exports=function(){function t(t){var e,r,n;for(e in t||(t={}),this.options=t,r=t.writer||{})i.call(r,e)&&(n=r[e],this["_"+e]=this[e],this[e]=n)}return t.prototype.filterOptions=function(t){var e,n,i,s,a,u,l,c;return t||(t={}),t=o({},this.options,t),(e={writer:this}).pretty=t.pretty||!1,e.allowEmpty=t.allowEmpty||!1,e.indent=null!=(n=t.indent)?n:"  ",e.newline=null!=(i=t.newline)?i:"\n",e.offset=null!=(s=t.offset)?s:0,e.dontPrettyTextNodes=null!=(a=null!=(u=t.dontPrettyTextNodes)?u:t.dontprettytextnodes)?a:0,e.spaceBeforeSlash=null!=(l=null!=(c=t.spaceBeforeSlash)?c:t.spacebeforeslash)?l:"",!0===e.spaceBeforeSlash&&(e.spaceBeforeSlash=" "),e.suppressPrettyCount=0,e.user={},e.state=r.None,e},t.prototype.indent=function(t,e,r){var n;if(!e.pretty||e.suppressPrettyCount);else if(e.pretty&&(n=(r||0)+e.offset+1)>0)return Array(n).join(e.indent);return""},t.prototype.endline=function(t,e,r){return!e.pretty||e.suppressPrettyCount?"":e.newline},t.prototype.attribute=function(t,e,r){var n;return this.openAttribute(t,e,r),n=" "+t.name+'="'+t.value+'"',this.closeAttribute(t,e,r),n},t.prototype.cdata=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<![CDATA[",e.state=r.InsideTag,o+=t.value,e.state=r.CloseTag,o+="]]>"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.comment=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<!-- ",e.state=r.InsideTag,o+=t.value,e.state=r.CloseTag,o+=" -->"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.declaration=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<?xml",e.state=r.InsideTag,o+=' version="'+t.version+'"',null!=t.encoding&&(o+=' encoding="'+t.encoding+'"'),null!=t.standalone&&(o+=' standalone="'+t.standalone+'"'),e.state=r.CloseTag,o+=e.spaceBeforeSlash+"?>"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.docType=function(t,e,n){var o,i,s,a,u;if(n||(n=0),this.openNode(t,e,n),e.state=r.OpenTag,a=this.indent(t,e,n)+"<!DOCTYPE "+t.root().name,t.pubID&&t.sysID?a+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(a+=' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(a+=" ["+this.endline(t,e,n),e.state=r.InsideTag,i=0,s=(u=t.children).length;i<s;i++)o=u[i],a+=this.writeChildNode(o,e,n+1);e.state=r.CloseTag,a+="]"}return e.state=r.CloseTag,a+=e.spaceBeforeSlash+">"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),a},t.prototype.element=function(t,n,o){var s,a,u,l,c,p,h,f,d,y,g,m,b,_;for(d in o||(o=0),y=!1,g="",this.openNode(t,n,o),n.state=r.OpenTag,g+=this.indent(t,n,o)+"<"+t.name,m=t.attribs)i.call(m,d)&&(s=m[d],g+=this.attribute(s,n,o));if(l=0===(u=t.children.length)?null:t.children[0],0===u||t.children.every(function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value}))n.allowEmpty?(g+=">",n.state=r.CloseTag,g+="</"+t.name+">"+this.endline(t,n,o)):(n.state=r.CloseTag,g+=n.spaceBeforeSlash+"/>"+this.endline(t,n,o));else if(n.pretty&&1===u&&(l.type===e.Text||l.type===e.Raw)&&null!=l.value)g+=">",n.state=r.InsideTag,n.suppressPrettyCount++,y=!0,g+=this.writeChildNode(l,n,o+1),n.suppressPrettyCount--,y=!1,n.state=r.CloseTag,g+="</"+t.name+">"+this.endline(t,n,o);else{if(n.dontPrettyTextNodes){for(c=0,h=(b=t.children).length;c<h;c++)if(((a=b[c]).type===e.Text||a.type===e.Raw)&&null!=a.value){n.suppressPrettyCount++,y=!0;break}}for(g+=">"+this.endline(t,n,o),n.state=r.InsideTag,p=0,f=(_=t.children).length;p<f;p++)a=_[p],g+=this.writeChildNode(a,n,o+1);n.state=r.CloseTag,g+=this.indent(t,n,o)+"</"+t.name+">",y&&n.suppressPrettyCount--,g+=this.endline(t,n,o),n.state=r.None}return this.closeNode(t,n,o),g},t.prototype.writeChildNode=function(t,r,n){switch(t.type){case e.CData:return this.cdata(t,r,n);case e.Comment:return this.comment(t,r,n);case e.Element:return this.element(t,r,n);case e.Raw:return this.raw(t,r,n);case e.Text:return this.text(t,r,n);case e.ProcessingInstruction:return this.processingInstruction(t,r,n);case e.Dummy:return"";case e.Declaration:return this.declaration(t,r,n);case e.DocType:return this.docType(t,r,n);case e.AttributeDeclaration:return this.dtdAttList(t,r,n);case e.ElementDeclaration:return this.dtdElement(t,r,n);case e.EntityDeclaration:return this.dtdEntity(t,r,n);case e.NotationDeclaration:return this.dtdNotation(t,r,n);default:throw Error("Unknown XML node type: "+t.constructor.name)}},t.prototype.processingInstruction=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<?",e.state=r.InsideTag,o+=t.target,t.value&&(o+=" "+t.value),e.state=r.CloseTag,o+=e.spaceBeforeSlash+"?>"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.raw=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n),e.state=r.InsideTag,o+=t.value,e.state=r.CloseTag,o+=this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.text=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n),e.state=r.InsideTag,o+=t.value,e.state=r.CloseTag,o+=this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.dtdAttList=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<!ATTLIST",e.state=r.InsideTag,o+=" "+t.elementName+" "+t.attributeName+" "+t.attributeType,"#DEFAULT"!==t.defaultValueType&&(o+=" "+t.defaultValueType),t.defaultValue&&(o+=' "'+t.defaultValue+'"'),e.state=r.CloseTag,o+=e.spaceBeforeSlash+">"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.dtdElement=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<!ELEMENT",e.state=r.InsideTag,o+=" "+t.name+" "+t.value,e.state=r.CloseTag,o+=e.spaceBeforeSlash+">"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.dtdEntity=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<!ENTITY",e.state=r.InsideTag,t.pe&&(o+=" %"),o+=" "+t.name,t.value?o+=' "'+t.value+'"':(t.pubID&&t.sysID?o+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(o+=' SYSTEM "'+t.sysID+'"'),t.nData&&(o+=" NDATA "+t.nData)),e.state=r.CloseTag,o+=e.spaceBeforeSlash+">"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.dtdNotation=function(t,e,n){var o;return this.openNode(t,e,n),e.state=r.OpenTag,o=this.indent(t,e,n)+"<!NOTATION",e.state=r.InsideTag,o+=" "+t.name,t.pubID&&t.sysID?o+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.pubID?o+=' PUBLIC "'+t.pubID+'"':t.sysID&&(o+=' SYSTEM "'+t.sysID+'"'),e.state=r.CloseTag,o+=e.spaceBeforeSlash+">"+this.endline(t,e,n),e.state=r.None,this.closeNode(t,e,n),o},t.prototype.openNode=function(t,e,r){},t.prototype.closeNode=function(t,e,r){},t.prototype.openAttribute=function(t,e,r){},t.prototype.closeAttribute=function(t,e,r){},t}()}).call(t.exports)}),n.register("bCif0",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}).call(t.exports)}),n.register("6OQXF",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l,c,p,h,f,d,y,g,m,b,_,v,w,E,T,x,O={}.hasOwnProperty;E=(x=n("5dmYp")).isObject,w=x.isFunction,T=x.isPlainObject,v=x.getValue,e=n("1mPXV"),f=n("2nn19"),d=n("5qyyf"),i=n("bJUcM"),s=n("e6oCh"),g=n("7icUk"),_=n("bnuQY"),y=n("hVRXY"),p=n("eTZGu"),h=n("3kVfO"),a=n("95dYv"),l=n("7CzgM"),u=n("fFr8m"),c=n("gfQCu"),o=n("6zhGw"),b=n("3Xk9q"),m=n("5Qw50"),r=n("bCif0"),t.exports=function(){function t(t,r,n){var o;this.name="?xml",this.type=e.Document,t||(t={}),o={},t.writer?T(t.writer)&&(o=t.writer,t.writer=new m):t.writer=new m,this.options=t,this.writer=t.writer,this.writerOptions=this.writer.filterOptions(o),this.stringify=new b(t),this.onDataCallback=r||function(){},this.onEndCallback=n||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return t.prototype.createChildNode=function(t){var r,n,o,i,s,a,u,l;switch(t.type){case e.CData:this.cdata(t.value);break;case e.Comment:this.comment(t.value);break;case e.Element:for(n in o={},u=t.attribs)O.call(u,n)&&(r=u[n],o[n]=r.value);this.node(t.name,o);break;case e.Dummy:this.dummy();break;case e.Raw:this.raw(t.value);break;case e.Text:this.text(t.value);break;case e.ProcessingInstruction:this.instruction(t.target,t.value);break;default:throw Error("This XML node type is not supported in a JS object: "+t.constructor.name)}for(s=0,a=(l=t.children).length;s<a;s++)i=l[s],this.createChildNode(i),i.type===e.Element&&this.up();return this},t.prototype.dummy=function(){return this},t.prototype.node=function(t,e,r){var n;if(null==t)throw Error("Missing node name.");if(this.root&&-1===this.currentLevel)throw Error("Document can only have one root node. "+this.debugInfo(t));return this.openCurrent(),t=v(t),null==e&&(e={}),E(e=v(e))||(r=(n=[e,r])[0],e=n[1]),this.currentNode=new d(this,t,e),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,null!=r&&this.text(r),this},t.prototype.element=function(t,r,n){var o,i,s,a,u,l;if(this.currentNode&&this.currentNode.type===e.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(t)||E(t)||w(t))for(a=this.options.noValidation,this.options.noValidation=!0,(l=new f(this.options).element("TEMP_ROOT")).element(t),this.options.noValidation=a,i=0,s=(u=l.children).length;i<s;i++)o=u[i],this.createChildNode(o),o.type===e.Element&&this.up();else this.node(t,r,n);return this},t.prototype.attribute=function(t,e){var r,n;if(!this.currentNode||this.currentNode.children)throw Error("att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(t));if(null!=t&&(t=v(t)),E(t))for(r in t)O.call(t,r)&&(n=t[r],this.attribute(r,n));else w(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.currentNode.attribs[t]=new o(this,t,""):null!=e&&(this.currentNode.attribs[t]=new o(this,t,e));return this},t.prototype.text=function(t){var e;return this.openCurrent(),e=new _(this,t),this.onData(this.writer.text(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.cdata=function(t){var e;return this.openCurrent(),e=new i(this,t),this.onData(this.writer.cdata(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.comment=function(t){var e;return this.openCurrent(),e=new s(this,t),this.onData(this.writer.comment(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.raw=function(t){var e;return this.openCurrent(),e=new g(this,t),this.onData(this.writer.raw(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.instruction=function(t,e){var r,n,o,i,s;if(this.openCurrent(),null!=t&&(t=v(t)),null!=e&&(e=v(e)),Array.isArray(t))for(r=0,i=t.length;r<i;r++)n=t[r],this.instruction(n);else if(E(t))for(n in t)O.call(t,n)&&(o=t[n],this.instruction(n,o));else w(e)&&(e=e.apply()),s=new y(this,t,e),this.onData(this.writer.processingInstruction(s,this.writerOptions,this.currentLevel+1),this.currentLevel+1);return this},t.prototype.declaration=function(t,e,r){var n;if(this.openCurrent(),this.documentStarted)throw Error("declaration() must be the first node.");return n=new p(this,t,e,r),this.onData(this.writer.declaration(n,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.doctype=function(t,e,r){if(this.openCurrent(),null==t)throw Error("Missing root node name.");if(this.root)throw Error("dtd() must come before the root node.");return this.currentNode=new h(this,e,r),this.currentNode.rootNodeName=t,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},t.prototype.dtdElement=function(t,e){var r;return this.openCurrent(),r=new u(this,t,e),this.onData(this.writer.dtdElement(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.attList=function(t,e,r,n,o){var i;return this.openCurrent(),i=new a(this,t,e,r,n,o),this.onData(this.writer.dtdAttList(i,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.entity=function(t,e){var r;return this.openCurrent(),r=new l(this,!1,t,e),this.onData(this.writer.dtdEntity(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.pEntity=function(t,e){var r;return this.openCurrent(),r=new l(this,!0,t,e),this.onData(this.writer.dtdEntity(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.notation=function(t,e){var r;return this.openCurrent(),r=new c(this,t,e),this.onData(this.writer.dtdNotation(r,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},t.prototype.up=function(){if(this.currentLevel<0)throw Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},t.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},t.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},t.prototype.openNode=function(t){var n,o,i,s;if(!t.isOpen){if(this.root||0!==this.currentLevel||t.type!==e.Element||(this.root=t),o="",t.type===e.Element){for(i in this.writerOptions.state=r.OpenTag,o=this.writer.indent(t,this.writerOptions,this.currentLevel)+"<"+t.name,s=t.attribs)O.call(s,i)&&(n=s[i],o+=this.writer.attribute(n,this.writerOptions,this.currentLevel));o+=(t.children?">":"/>")+this.writer.endline(t,this.writerOptions,this.currentLevel),this.writerOptions.state=r.InsideTag}else this.writerOptions.state=r.OpenTag,o=this.writer.indent(t,this.writerOptions,this.currentLevel)+"<!DOCTYPE "+t.rootNodeName,t.pubID&&t.sysID?o+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(o+=' SYSTEM "'+t.sysID+'"'),t.children?(o+=" [",this.writerOptions.state=r.InsideTag):(this.writerOptions.state=r.CloseTag,o+=">"),o+=this.writer.endline(t,this.writerOptions,this.currentLevel);return this.onData(o,this.currentLevel),t.isOpen=!0}},t.prototype.closeNode=function(t){var n;if(!t.isClosed)return n="",this.writerOptions.state=r.CloseTag,n=t.type===e.Element?this.writer.indent(t,this.writerOptions,this.currentLevel)+"</"+t.name+">"+this.writer.endline(t,this.writerOptions,this.currentLevel):this.writer.indent(t,this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(t,this.writerOptions,this.currentLevel),this.writerOptions.state=r.None,this.onData(n,this.currentLevel),t.isClosed=!0},t.prototype.onData=function(t,e){return this.documentStarted=!0,this.onDataCallback(t,e+1)},t.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},t.prototype.debugInfo=function(t){return null==t?"":"node: <"+t+">"},t.prototype.ele=function(){return this.element.apply(this,arguments)},t.prototype.nod=function(t,e,r){return this.node(t,e,r)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.dec=function(t,e,r){return this.declaration(t,e,r)},t.prototype.dtd=function(t,e,r){return this.doctype(t,e,r)},t.prototype.e=function(t,e,r){return this.element(t,e,r)},t.prototype.n=function(t,e,r){return this.node(t,e,r)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.att=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.a=function(){return this.currentNode&&this.currentNode.type===e.DocType?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.ent=function(t,e){return this.entity(t,e)},t.prototype.pent=function(t,e){return this.pEntity(t,e)},t.prototype.not=function(t,e){return this.notation(t,e)},t}()}).call(t.exports)}),n.register("3wosh",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i=function(t,e){for(var r in e)s.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},s={}.hasOwnProperty;e=n("1mPXV"),o=n("5xzdZ"),r=n("bCif0"),t.exports=function(t){function n(t,e){this.stream=t,n.__super__.constructor.call(this,e)}return i(n,t),n.prototype.endline=function(t,e,o){return t.isLastRootNode&&e.state===r.CloseTag?"":n.__super__.endline.call(this,t,e,o)},n.prototype.document=function(t,e){var r,n,o,i,s,a,u,l,c;for(u=t.children,n=o=0,s=u.length;o<s;n=++o)(r=u[n]).isLastRootNode=n===t.children.length-1;for(i=0,e=this.filterOptions(e),l=t.children,c=[],a=l.length;i<a;i++)r=l[i],c.push(this.writeChildNode(r,e,0));return c},n.prototype.attribute=function(t,e,r){return this.stream.write(n.__super__.attribute.call(this,t,e,r))},n.prototype.cdata=function(t,e,r){return this.stream.write(n.__super__.cdata.call(this,t,e,r))},n.prototype.comment=function(t,e,r){return this.stream.write(n.__super__.comment.call(this,t,e,r))},n.prototype.declaration=function(t,e,r){return this.stream.write(n.__super__.declaration.call(this,t,e,r))},n.prototype.docType=function(t,e,n){var o,i,s,a;if(n||(n=0),this.openNode(t,e,n),e.state=r.OpenTag,this.stream.write(this.indent(t,e,n)),this.stream.write("<!DOCTYPE "+t.root().name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(t,e,n)),e.state=r.InsideTag,i=0,s=(a=t.children).length;i<s;i++)o=a[i],this.writeChildNode(o,e,n+1);e.state=r.CloseTag,this.stream.write("]")}return e.state=r.CloseTag,this.stream.write(e.spaceBeforeSlash+">"),this.stream.write(this.endline(t,e,n)),e.state=r.None,this.closeNode(t,e,n)},n.prototype.element=function(t,n,o){var i,a,u,l,c,p,h,f,d;for(h in o||(o=0),this.openNode(t,n,o),n.state=r.OpenTag,this.stream.write(this.indent(t,n,o)+"<"+t.name),f=t.attribs)s.call(f,h)&&(i=f[h],this.attribute(i,n,o));if(l=0===(u=t.children.length)?null:t.children[0],0===u||t.children.every(function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value}))n.allowEmpty?(this.stream.write(">"),n.state=r.CloseTag,this.stream.write("</"+t.name+">")):(n.state=r.CloseTag,this.stream.write(n.spaceBeforeSlash+"/>"));else if(n.pretty&&1===u&&(l.type===e.Text||l.type===e.Raw)&&null!=l.value)this.stream.write(">"),n.state=r.InsideTag,n.suppressPrettyCount++,this.writeChildNode(l,n,o+1),n.suppressPrettyCount--,n.state=r.CloseTag,this.stream.write("</"+t.name+">");else{for(this.stream.write(">"+this.endline(t,n,o)),n.state=r.InsideTag,c=0,p=(d=t.children).length;c<p;c++)a=d[c],this.writeChildNode(a,n,o+1);n.state=r.CloseTag,this.stream.write(this.indent(t,n,o)+"</"+t.name+">")}return this.stream.write(this.endline(t,n,o)),n.state=r.None,this.closeNode(t,n,o)},n.prototype.processingInstruction=function(t,e,r){return this.stream.write(n.__super__.processingInstruction.call(this,t,e,r))},n.prototype.raw=function(t,e,r){return this.stream.write(n.__super__.raw.call(this,t,e,r))},n.prototype.text=function(t,e,r){return this.stream.write(n.__super__.text.call(this,t,e,r))},n.prototype.dtdAttList=function(t,e,r){return this.stream.write(n.__super__.dtdAttList.call(this,t,e,r))},n.prototype.dtdElement=function(t,e,r){return this.stream.write(n.__super__.dtdElement.call(this,t,e,r))},n.prototype.dtdEntity=function(t,e,r){return this.stream.write(n.__super__.dtdEntity.call(this,t,e,r))},n.prototype.dtdNotation=function(t,e,r){return this.stream.write(n.__super__.dtdNotation.call(this,t,e,r))},n}(o)}).call(t.exports)}),n.register("e1wMb",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e,r,o,i,s,a,u,l=function(t,e){return function(){return t.apply(e,arguments)}},c=function(t,e){for(var r in e)p.call(e,r)&&(t[r]=e[r]);function n(){this.constructor=t}return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},p={}.hasOwnProperty;a=n("lbY0m"),o=n("arbX7"),e=n("3Q2Qd"),s=n("bufhm"),u=n("3U7o1").setImmediate,r=n("8CCbl").defaults,i=function(t,e,r){var n,o;for(n=0,o=t.length;n<o;n++)e=(0,t[n])(e,r);return e},t.exports.Parser=function(n){function o(e){var n,o,i;if(this.parseStringPromise=l(this.parseStringPromise,this),this.parseString=l(this.parseString,this),this.reset=l(this.reset,this),this.assignOrPush=l(this.assignOrPush,this),this.processAsync=l(this.processAsync,this),!(this instanceof t.exports.Parser))return new t.exports.Parser(e);for(n in this.options={},o=r["0.2"])p.call(o,n)&&(i=o[n],this.options[n]=i);for(n in e)p.call(e,n)&&(i=e[n],this.options[n]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(s.normalize)),this.reset()}return c(o,n),o.prototype.processAsync=function(){var t;try{if(this.remaining.length<=this.options.chunkSize)return t=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close();return t=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(t),u(this.processAsync)}catch(t){if(!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(t)}},o.prototype.assignOrPush=function(t,e,r){return e in t?(t[e]instanceof Array||(t[e]=[t[e]]),t[e].push(r)):this.options.explicitArray?t[e]=[r]:t[e]=r},o.prototype.reset=function(){var t,e,r,n,o,s,u,l,c;return this.removeAllListeners(),this.saxParser=a.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(o=this,function(t){if(o.saxParser.resume(),!o.saxParser.errThrown)return o.saxParser.errThrown=!0,o.emit("error",t)}),this.saxParser.onend=(s=this,function(){if(!s.saxParser.ended)return s.saxParser.ended=!0,s.emit("end",s.resultObject)}),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,n=[],t=this.options.attrkey,e=this.options.charkey,this.saxParser.onopentag=(u=this,function(r){var o,s,a,l,c;if((a=Object.create(null))[e]="",!u.options.ignoreAttrs)for(o in c=r.attributes)p.call(c,o)&&(t in a||u.options.mergeAttrs||(a[t]=Object.create(null)),s=u.options.attrValueProcessors?i(u.options.attrValueProcessors,r.attributes[o],o):r.attributes[o],l=u.options.attrNameProcessors?i(u.options.attrNameProcessors,o):o,u.options.mergeAttrs?u.assignOrPush(a,l,s):a[t][l]=s);return a["#name"]=u.options.tagNameProcessors?i(u.options.tagNameProcessors,r.name):r.name,u.options.xmlns&&(a[u.options.xmlnskey]={uri:r.uri,local:r.local}),n.push(a)}),this.saxParser.onclosetag=(l=this,function(){var t,r,o,s,a,u,c,h,f,d,y;if(a=(u=n.pop())["#name"],l.options.explicitChildren&&l.options.preserveChildrenOrder||delete u["#name"],!0===u.cdata&&(t=u.cdata,delete u.cdata),f=n[n.length-1],u[e].match(/^\s*$/)&&!t?(r=u[e],delete u[e]):(l.options.trim&&(u[e]=u[e].trim()),l.options.normalize&&(u[e]=u[e].replace(/\s{2,}/g," ").trim()),u[e]=l.options.valueProcessors?i(l.options.valueProcessors,u[e],a):u[e],1===Object.keys(u).length&&e in u&&!l.EXPLICIT_CHARKEY&&(u=u[e])),"object"==typeof(y=u)&&null!=y&&0===Object.keys(y).length&&(u="function"==typeof l.options.emptyTag?l.options.emptyTag():""!==l.options.emptyTag?l.options.emptyTag:r),null!=l.options.validator&&(d="/"+(function(){var t,e,r;for(t=0,r=[],e=n.length;t<e;t++)s=n[t],r.push(s["#name"]);return r})().concat(a).join("/"),function(){try{u=l.options.validator(d,f&&f[a],u)}catch(t){return l.emit("error",t)}}()),l.options.explicitChildren&&!l.options.mergeAttrs&&"object"==typeof u){if(l.options.preserveChildrenOrder){if(f){for(o in f[l.options.childkey]=f[l.options.childkey]||[],c=Object.create(null),u)p.call(u,o)&&(c[o]=u[o]);f[l.options.childkey].push(c),delete u["#name"],1===Object.keys(u).length&&e in u&&!l.EXPLICIT_CHARKEY&&(u=u[e])}}else s=Object.create(null),l.options.attrkey in u&&(s[l.options.attrkey]=u[l.options.attrkey],delete u[l.options.attrkey]),!l.options.charsAsChildren&&l.options.charkey in u&&(s[l.options.charkey]=u[l.options.charkey],delete u[l.options.charkey]),Object.getOwnPropertyNames(u).length>0&&(s[l.options.childkey]=u),u=s}return n.length>0?l.assignOrPush(f,a,u):(l.options.explicitRoot&&(h=u,(u=Object.create(null))[a]=h),l.resultObject=u,l.saxParser.ended=!0,l.emit("end",l.resultObject))}),c=this,r=function(t){var r,o;if(o=n[n.length-1])return o[e]+=t,c.options.explicitChildren&&c.options.preserveChildrenOrder&&c.options.charsAsChildren&&(c.options.includeWhiteChars||""!==t.replace(/\\n/g,"").trim())&&(o[c.options.childkey]=o[c.options.childkey]||[],(r={"#name":"__text__"})[e]=t,c.options.normalize&&(r[e]=r[e].replace(/\s{2,}/g," ").trim()),o[c.options.childkey].push(r)),o},this.saxParser.ontext=r,this.saxParser.oncdata=function(t){var e;if(e=r(t))return e.cdata=!0}},o.prototype.parseString=function(t,r){null!=r&&"function"==typeof r&&(this.on("end",function(t){return this.reset(),r(null,t)}),this.on("error",function(t){return this.reset(),r(t)}));try{if(t=t.toString(),""===t.trim())return this.emit("end",null),!0;if(t=e.stripBOM(t),this.options.async)return this.remaining=t,u(this.processAsync),this.saxParser;return this.saxParser.write(t).close()}catch(t){if(!(this.saxParser.errThrown||this.saxParser.ended))return this.emit("error",t),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw t}},o.prototype.parseStringPromise=function(t){var e;return new Promise((e=this,function(r,n){return e.parseString(t,function(t,e){return t?n(t):r(e)})}))},o}(o),t.exports.parseString=function(e,r,n){var o,i;return null!=n?("function"==typeof n&&(o=n),"object"==typeof r&&(i=r)):("function"==typeof r&&(o=r),i={}),new t.exports.Parser(i).parseString(e,o)},t.exports.parseStringPromise=function(e,r){var n;return"object"==typeof r&&(n=r),new t.exports.Parser(n).parseStringPromise(e)}}).call(t.exports)}),n.register("lbY0m",function(t,e){var r=n("igx3v").Buffer;!function(t){t.parser=function(t,e){return new u(t,e)},t.SAXParser=u,t.SAXStream=c,t.createStream=function(t,e){return new c(t,e)},// When we pass the MAX_BUFFER_LENGTH position, start checking for buffer overruns.
// When we check, schedule the next check for MAX_BUFFER_LENGTH - (max(buffer lengths)),
// since that's the earliest that a buffer overrun could occur.  This way, checks are
// as rare as required, but as often as necessary to ensure never crossing this bound.
// Furthermore, buffers are only tested at most once per write(), so passing a very
// large string into write() might have undesirable effects, but this is manageable by
// the caller, so it is assumed to be safe.  Thus, a call to write() may, in the extreme
// edge case, result in creating at most one complete copy of the string passed in.
// Set to Infinity to have unlimited buffers.
t.MAX_BUFFER_LENGTH=65536;var e,o,i,s,a=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function u(e,r){if(!(this instanceof u))return new u(e,r);(function(t){for(var e=0,r=a.length;e<r;e++)t[a[e]]=""})(this),this.q=this.c="",this.bufferCheckPosition=t.MAX_BUFFER_LENGTH,this.opt=r||{},this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags,this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase",this.tags=[],this.closed=this.closedRoot=this.sawRoot=!1,this.tag=this.error=null,this.strict=!!e,this.noscript=!!(e||this.opt.noscript),this.state=w.BEGIN,this.strictEntities=this.opt.strictEntities,this.ENTITIES=this.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),this.attribList=[],this.opt.xmlns&&(this.ns=Object.create(f)),// mostly just for error reporting
this.trackPosition=!1!==this.opt.position,this.trackPosition&&(this.position=this.line=this.column=0),T(this,"onready")}t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}return e.prototype=t,new e}),Object.keys||(Object.keys=function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e}),u.prototype={end:function(){P(this)},write:function(e){if(this.error)throw this.error;if(this.closed)return A(this,"Cannot write after close. Assign an onready handler.");if(null===e)return P(this);"object"==typeof e&&(e=e.toString());for(var r=0,n="";n=L(e,r++),this.c=n,n;)switch(this.trackPosition&&(this.position++,"\n"===n?(this.line++,this.column=0):this.column++),this.state){case w.BEGIN:if(this.state=w.BEGIN_WHITESPACE,"\uFEFF"===n)continue;R(this,n);continue;case w.BEGIN_WHITESPACE:R(this,n);continue;case w.TEXT:if(this.sawRoot&&!this.closedRoot){for(var o,i,s,u=r-1;n&&"<"!==n&&"&"!==n;)(n=L(e,r++))&&this.trackPosition&&(this.position++,"\n"===n?(this.line++,this.column=0):this.column++);this.textNode+=e.substring(u,r-1)}"<"!==n||this.sawRoot&&this.closedRoot&&!this.strict?(b(n)||this.sawRoot&&!this.closedRoot||k(this,"Text data outside of root node."),"&"===n?this.state=w.TEXT_ENTITY:this.textNode+=n):(this.state=w.OPEN_WAKA,this.startTagPosition=this.position);continue;case w.SCRIPT:// only non-strict
"<"===n?this.state=w.SCRIPT_ENDING:this.script+=n;continue;case w.SCRIPT_ENDING:"/"===n?this.state=w.CLOSE_TAG:(this.script+="<"+n,this.state=w.SCRIPT);continue;case w.OPEN_WAKA:// either a /, ?, !, or text is coming next.
"!"===n?(this.state=w.SGML_DECL,this.sgmlDecl=""):b(n)||(v(d,n)?(this.state=w.OPEN_TAG,this.tagName=n):"/"===n?(this.state=w.CLOSE_TAG,this.tagName=""):"?"===n?(this.state=w.PROC_INST,this.procInstName=this.procInstBody=""):(k(this,"Unencoded <"),this.startTagPosition+1<this.position&&(n=Array(this.position-this.startTagPosition).join(" ")+n),this.textNode+="<"+n,this.state=w.TEXT));continue;case w.SGML_DECL:"[CDATA["===(this.sgmlDecl+n).toUpperCase()?(x(this,"onopencdata"),this.state=w.CDATA,this.sgmlDecl="",this.cdata=""):this.sgmlDecl+n==="--"?(this.state=w.COMMENT,this.comment="",this.sgmlDecl=""):"DOCTYPE"===(this.sgmlDecl+n).toUpperCase()?(this.state=w.DOCTYPE,(this.doctype||this.sawRoot)&&k(this,"Inappropriately located doctype declaration"),this.doctype="",this.sgmlDecl=""):">"===n?(x(this,"onsgmldeclaration",this.sgmlDecl),this.sgmlDecl="",this.state=w.TEXT):(_(n)&&(this.state=w.SGML_DECL_QUOTED),this.sgmlDecl+=n);continue;case w.SGML_DECL_QUOTED:n===this.q&&(this.state=w.SGML_DECL,this.q=""),this.sgmlDecl+=n;continue;case w.DOCTYPE:">"===n?(this.state=w.TEXT,x(this,"ondoctype",this.doctype),this.doctype=!0// just remember that we saw it.
):(this.doctype+=n,"["===n?this.state=w.DOCTYPE_DTD:_(n)&&(this.state=w.DOCTYPE_QUOTED,this.q=n));continue;case w.DOCTYPE_QUOTED:this.doctype+=n,n===this.q&&(this.q="",this.state=w.DOCTYPE);continue;case w.DOCTYPE_DTD:this.doctype+=n,"]"===n?this.state=w.DOCTYPE:_(n)&&(this.state=w.DOCTYPE_DTD_QUOTED,this.q=n);continue;case w.DOCTYPE_DTD_QUOTED:this.doctype+=n,n===this.q&&(this.state=w.DOCTYPE_DTD,this.q="");continue;case w.COMMENT:"-"===n?this.state=w.COMMENT_ENDING:this.comment+=n;continue;case w.COMMENT_ENDING:"-"===n?(this.state=w.COMMENT_ENDED,this.comment=S(this.opt,this.comment),this.comment&&x(this,"oncomment",this.comment),this.comment=""):(this.comment+="-"+n,this.state=w.COMMENT);continue;case w.COMMENT_ENDED:">"!==n?(k(this,"Malformed comment"),// allow <!-- blah -- bloo --> in non-strict mode,
// which is a comment of " blah -- bloo "
this.comment+="--"+n,this.state=w.COMMENT):this.state=w.TEXT;continue;case w.CDATA:"]"===n?this.state=w.CDATA_ENDING:this.cdata+=n;continue;case w.CDATA_ENDING:"]"===n?this.state=w.CDATA_ENDING_2:(this.cdata+="]"+n,this.state=w.CDATA);continue;case w.CDATA_ENDING_2:">"===n?(this.cdata&&x(this,"oncdata",this.cdata),x(this,"onclosecdata"),this.cdata="",this.state=w.TEXT):"]"===n?this.cdata+="]":(this.cdata+="]]"+n,this.state=w.CDATA);continue;case w.PROC_INST:"?"===n?this.state=w.PROC_INST_ENDING:b(n)?this.state=w.PROC_INST_BODY:this.procInstName+=n;continue;case w.PROC_INST_BODY:!this.procInstBody&&b(n)||("?"===n?this.state=w.PROC_INST_ENDING:this.procInstBody+=n);continue;case w.PROC_INST_ENDING:">"===n?(x(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody}),this.procInstName=this.procInstBody="",this.state=w.TEXT):(this.procInstBody+="?"+n,this.state=w.PROC_INST_BODY);continue;case w.OPEN_TAG:v(y,n)?this.tagName+=n:(function(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,r=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(r.ns=e.ns),t.attribList.length=0,x(t,"onopentagstart",r)}(this),">"===n?C(this):"/"===n?this.state=w.OPEN_TAG_SLASH:(b(n)||k(this,"Invalid character in tag name"),this.state=w.ATTRIB));continue;case w.OPEN_TAG_SLASH:">"===n?(C(this,!0),N(this)):(k(this,"Forward-slash in opening tag not followed by >"),this.state=w.ATTRIB);continue;case w.ATTRIB:// haven't read the attribute name yet.
b(n)||(">"===n?C(this):"/"===n?this.state=w.OPEN_TAG_SLASH:v(d,n)?(this.attribName=n,this.attribValue="",this.state=w.ATTRIB_NAME):k(this,"Invalid attribute name"));continue;case w.ATTRIB_NAME:"="===n?this.state=w.ATTRIB_VALUE:">"===n?(k(this,"Attribute without value"),this.attribValue=this.attribName,I(this),C(this)):b(n)?this.state=w.ATTRIB_NAME_SAW_WHITE:v(y,n)?this.attribName+=n:k(this,"Invalid attribute name");continue;case w.ATTRIB_NAME_SAW_WHITE:if("="===n)this.state=w.ATTRIB_VALUE;else{if(b(n))continue;k(this,"Attribute without value"),this.tag.attributes[this.attribName]="",this.attribValue="",x(this,"onattribute",{name:this.attribName,value:""}),this.attribName="",">"===n?C(this):v(d,n)?(this.attribName=n,this.state=w.ATTRIB_NAME):(k(this,"Invalid attribute name"),this.state=w.ATTRIB)}continue;case w.ATTRIB_VALUE:b(n)||(_(n)?(this.q=n,this.state=w.ATTRIB_VALUE_QUOTED):(k(this,"Unquoted attribute value"),this.state=w.ATTRIB_VALUE_UNQUOTED,this.attribValue=n));continue;case w.ATTRIB_VALUE_QUOTED:if(n!==this.q){"&"===n?this.state=w.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=n;continue}I(this),this.q="",this.state=w.ATTRIB_VALUE_CLOSED;continue;case w.ATTRIB_VALUE_CLOSED:b(n)?this.state=w.ATTRIB:">"===n?C(this):"/"===n?this.state=w.OPEN_TAG_SLASH:v(d,n)?(k(this,"No whitespace between attributes"),this.attribName=n,this.attribValue="",this.state=w.ATTRIB_NAME):k(this,"Invalid attribute name");continue;case w.ATTRIB_VALUE_UNQUOTED:if(!(">"===(o=n)||b(o))){"&"===n?this.state=w.ATTRIB_VALUE_ENTITY_U:this.attribValue+=n;continue}I(this),">"===n?C(this):this.state=w.ATTRIB;continue;case w.CLOSE_TAG:this.tagName?">"===n?N(this):v(y,n)?this.tagName+=n:this.script?(this.script+="</"+this.tagName,this.tagName="",this.state=w.SCRIPT):(b(n)||k(this,"Invalid tagname in closing tag"),this.state=w.CLOSE_TAG_SAW_WHITE):b(n)||(v(d,n)?this.tagName=n:this.script?(this.script+="</"+n,this.state=w.SCRIPT):k(this,"Invalid tagname in closing tag."));continue;case w.CLOSE_TAG_SAW_WHITE:if(b(n))continue;">"===n?N(this):k(this,"Invalid characters in closing tag");continue;case w.TEXT_ENTITY:case w.ATTRIB_VALUE_ENTITY_Q:case w.ATTRIB_VALUE_ENTITY_U:switch(this.state){case w.TEXT_ENTITY:i=w.TEXT,s="textNode";break;case w.ATTRIB_VALUE_ENTITY_Q:i=w.ATTRIB_VALUE_QUOTED,s="attribValue";break;case w.ATTRIB_VALUE_ENTITY_U:i=w.ATTRIB_VALUE_UNQUOTED,s="attribValue"}";"===n?(this[s]+=function(t){var e,r=t.entity,n=r.toLowerCase(),o="";return t.ENTITIES[r]?t.ENTITIES[r]:t.ENTITIES[n]?t.ENTITIES[n]:("#"===(r=n).charAt(0)&&(o="x"===r.charAt(1)?(e=parseInt(r=r.slice(2),16)).toString(16):(e=parseInt(r=r.slice(1),10)).toString(10)),r=r.replace(/^0+/,""),isNaN(e)||o.toLowerCase()!==r)?(k(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e)}(this),this.entity="",this.state=i):v(this.entity.length?m:g,n)?this.entity+=n:(k(this,"Invalid character in entity name"),this[s]+="&"+this.entity+n,this.entity="",this.state=i);continue;default:throw Error(this,"Unknown state: "+this.state)}// while
return this.position>=this.bufferCheckPosition&&function(e){for(var r=Math.max(t.MAX_BUFFER_LENGTH,10),n=0,o=0,i=a.length;o<i;o++){var s=e[a[o]].length;if(s>r)// we can get here under normal conditions.
// Avoid issues by emitting the text node now,
// so at least it won't get any bigger.
switch(a[o]){case"textNode":O(e);break;case"cdata":x(e,"oncdata",e.cdata),e.cdata="";break;case"script":x(e,"onscript",e.script),e.script="";break;default:A(e,"Max buffer length exceeded: "+a[o])}n=Math.max(n,s)}var u=t.MAX_BUFFER_LENGTH-n;e.bufferCheckPosition=u+e.position}(this),this},resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){O(this),""!==this.cdata&&(x(this,"oncdata",this.cdata),this.cdata=""),""!==this.script&&(x(this,"onscript",this.script),this.script="")}};try{s=n("bBGGK").Stream}catch(t){s=function(){}}var l=t.EVENTS.filter(function(t){return"error"!==t&&"end"!==t});function c(t,e){if(!(this instanceof c))return new c(t,e);s.apply(this),this._parser=new u(t,e),this.writable=!0,this.readable=!0;var r=this;this._parser.onend=function(){r.emit("end")},this._parser.onerror=function(t){r.emit("error",t),// if didn't throw, then means error was handled.
// go ahead and clear error, so we can write again.
r._parser.error=null},this._decoder=null,l.forEach(function(t){Object.defineProperty(r,"on"+t,{get:function(){return r._parser["on"+t]},set:function(e){if(!e)return r.removeAllListeners(t),r._parser["on"+t]=e,e;r.on(t,e)},enumerable:!0,configurable:!1})})}c.prototype=Object.create(s.prototype,{constructor:{value:c}}),c.prototype.write=function(t){if("function"==typeof r&&"function"==typeof r.isBuffer&&r.isBuffer(t)){if(!this._decoder){var e=n("log3T").StringDecoder;this._decoder=new e("utf8")}t=this._decoder.write(t)}return this._parser.write(t.toString()),this.emit("data",t),!0},c.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},c.prototype.on=function(t,e){var r=this;return r._parser["on"+t]||-1===l.indexOf(t)||(r._parser["on"+t]=function(){var e=1==arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),r.emit.apply(r,e)}),s.prototype.on.call(r,t,e)};var p="http://www.w3.org/XML/1998/namespace",h="http://www.w3.org/2000/xmlns/",f={xml:p,xmlns:h},d=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,g=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,m=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function b(t){return" "===t||"\n"===t||"\r"===t||"	"===t}function _(t){return'"'===t||"'"===t}function v(t,e){return t.test(e)}var w=0;for(var E in t.STATE={BEGIN:w++,BEGIN_WHITESPACE:w++,TEXT:w++,TEXT_ENTITY:w++,OPEN_WAKA:w++,SGML_DECL:w++,SGML_DECL_QUOTED:w++,DOCTYPE:w++,DOCTYPE_QUOTED:w++,DOCTYPE_DTD:w++,DOCTYPE_DTD_QUOTED:w++,COMMENT_STARTING:w++,COMMENT:w++,COMMENT_ENDING:w++,COMMENT_ENDED:w++,CDATA:w++,CDATA_ENDING:w++,CDATA_ENDING_2:w++,PROC_INST:w++,PROC_INST_BODY:w++,PROC_INST_ENDING:w++,OPEN_TAG:w++,OPEN_TAG_SLASH:w++,ATTRIB:w++,ATTRIB_NAME:w++,ATTRIB_NAME_SAW_WHITE:w++,ATTRIB_VALUE:w++,ATTRIB_VALUE_QUOTED:w++,ATTRIB_VALUE_CLOSED:w++,ATTRIB_VALUE_UNQUOTED:w++,ATTRIB_VALUE_ENTITY_Q:w++,ATTRIB_VALUE_ENTITY_U:w++,CLOSE_TAG:w++,CLOSE_TAG_SAW_WHITE:w++,SCRIPT:w++,SCRIPT_ENDING:w++// <script> ... <
},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(e){var r=t.ENTITIES[e],n="number"==typeof r?String.fromCharCode(r):r;t.ENTITIES[e]=n}),t.STATE)t.STATE[t.STATE[E]]=E;function T(t,e,r){t[e]&&t[e](r)}function x(t,e,r){t.textNode&&O(t),T(t,e,r)}function O(t){t.textNode=S(t.opt,t.textNode),t.textNode&&T(t,"ontext",t.textNode),t.textNode=""}function S(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function A(t,e){return O(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=Error(e),t.error=e,T(t,"onerror",e),t}function P(t){return t.sawRoot&&!t.closedRoot&&k(t,"Unclosed root tag"),t.state!==w.BEGIN&&t.state!==w.BEGIN_WHITESPACE&&t.state!==w.TEXT&&A(t,"Unexpected end"),O(t),t.c="",t.closed=!0,T(t,"onend"),u.call(t,t.strict,t.opt),t}function k(t,e){if("object"!=typeof t||!(t instanceof u))throw Error("bad call to strictFail");t.strict&&A(t,e)}function D(t,e){var r=0>t.indexOf(":")?["",t]:t.split(":"),n=r[0],o=r[1];return e&&"xmlns"===t&&(n="xmlns",o=""),{prefix:n,local:o}}function I(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName)){t.attribName=t.attribValue="";return}if(t.opt.xmlns){var e=D(t.attribName,!0),r=e.prefix,n=e.local;if("xmlns"===r){// namespace binding attribute. push the binding into scope
if("xml"===n&&t.attribValue!==p)k(t,"xml: prefix must be bound to "+p+"\nActual: "+t.attribValue);else if("xmlns"===n&&t.attribValue!==h)k(t,"xmlns: prefix must be bound to "+h+"\nActual: "+t.attribValue);else{var o=t.tag,i=t.tags[t.tags.length-1]||t;o.ns===i.ns&&(o.ns=Object.create(i.ns)),o.ns[n]=t.attribValue}}// defer onattribute events until all attributes have been seen
// so any new bindings can take effect. preserve attribute order
// so deferred events can be emitted in document order
t.attribList.push([t.attribName,t.attribValue])}else // in non-xmlns mode, we can emit the event right away
t.tag.attributes[t.attribName]=t.attribValue,x(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}function C(t,e){if(t.opt.xmlns){// emit namespace binding events
var r=t.tag,n=D(t.tagName);r.prefix=n.prefix,r.local=n.local,r.uri=r.ns[n.prefix]||"",r.prefix&&!r.uri&&(k(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),r.uri=n.prefix);var o=t.tags[t.tags.length-1]||t;r.ns&&o.ns!==r.ns&&Object.keys(r.ns).forEach(function(e){x(t,"onopennamespace",{prefix:e,uri:r.ns[e]})});// handle deferred onattribute events
// Note: do not apply default ns to attributes:
//   http://www.w3.org/TR/REC-xml-names/#defaulting
for(var i=0,s=t.attribList.length;i<s;i++){var a=t.attribList[i],u=a[0],l=a[1],c=D(u,!0),p=c.prefix,h=c.local,f=""===p?"":r.ns[p]||"",d={name:u,value:l,prefix:p,local:h,uri:f};p&&"xmlns"!==p&&!f&&(k(t,"Unbound namespace prefix: "+JSON.stringify(p)),d.uri=p),t.tag.attributes[u]=d,x(t,"onattribute",d)}t.attribList.length=0}t.tag.isSelfClosing=!!e,// process the tag
t.sawRoot=!0,t.tags.push(t.tag),x(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=w.TEXT:t.state=w.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function N(t){if(!t.tagName){k(t,"Weird empty close tag."),t.textNode+="</>",t.state=w.TEXT;return}if(t.script){if("script"!==t.tagName){t.script+="</"+t.tagName+">",t.tagName="",t.state=w.SCRIPT;return}x(t,"onscript",t.script),t.script=""}// first make sure that the closing tag actually exists.
// <a><b></c></b></a> will close everything, otherwise.
var e=t.tags.length,r=t.tagName;t.strict||(r=r[t.looseCase]());for(var n=r;e--;)if(t.tags[e].name!==n)k(t,"Unexpected close tag");else break;// didn't find it.  we already failed for strict, so just abort.
if(e<0){k(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",t.state=w.TEXT;return}t.tagName=r;for(var o=t.tags.length;o-- >e;){var i=t.tag=t.tags.pop();t.tagName=t.tag.name,x(t,"onclosetag",t.tagName);var s={};for(var a in i.ns)s[a]=i.ns[a];var u=t.tags[t.tags.length-1]||t;t.opt.xmlns&&i.ns!==u.ns&&Object.keys(i.ns).forEach(function(e){var r=i.ns[e];x(t,"onclosenamespace",{prefix:e,uri:r})})}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=w.TEXT}function R(t,e){"<"===e?(t.state=w.OPEN_WAKA,t.startTagPosition=t.position):b(e)||(// have to process this as a text node.
// weird, but happens.
k(t,"Non-whitespace before first tag."),t.textNode=e,t.state=w.TEXT)}function L(t,e){var r="";return e<t.length&&(r=t.charAt(e)),r}// shorthand
w=t.STATE,String.fromCodePoint||(e=String.fromCharCode,o=Math.floor,i=function(){var t,r,n=[],i=-1,s=arguments.length;if(!s)return"";for(var a="";++i<s;){var u=Number(arguments[i]);if(!isFinite(u)||// `NaN`, `+Infinity`, or `-Infinity`
u<0||// not a valid Unicode code point
u>1114111||// not a valid Unicode code point
o(u)!==u// not an integer
)throw RangeError("Invalid code point: "+u);u<=65535?n.push(u):(// http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
u-=65536,t=(u>>10)+55296,r=u%1024+56320,n.push(t,r)),(i+1===s||n.length>16384)&&(a+=e.apply(null,n),n.length=0)}return a},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:i,configurable:!0,writable:!0}):String.fromCodePoint=i)}(t.exports)}),n.register("bBGGK",function(t,e){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
t.exports=o;var r=n("arbX7").EventEmitter;// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.
function o(){r.call(this)}n("2q8Xi")(o,r),o.Readable=n("iK8ba"),o.Writable=n("dJLvx"),o.Duplex=n("jl1SC"),o.Transform=n("gFmPQ"),o.PassThrough=n("f8Ujl"),o.finished=n("1Q2LB"),o.pipeline=n("4qPGM"),// Backwards-compat with node 0.4.x
o.Stream=o,o.prototype.pipe=function(t,e){var n=this;function o(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function i(){n.readable&&n.resume&&n.resume()}n.on("data",o),t.on("drain",i),t._isStdio||e&&!1===e.end||(n.on("end",a),n.on("close",u));var s=!1;function a(){s||(s=!0,t.end())}function u(){s||(s=!0,"function"==typeof t.destroy&&t.destroy())}// don't leave dangling pipes when there are errors.
function l(t){if(c(),0===r.listenerCount(this,"error"))throw t;// Unhandled stream error in pipe.
}// remove all the event listeners that were added.
function c(){n.removeListener("data",o),t.removeListener("drain",i),n.removeListener("end",a),n.removeListener("close",u),n.removeListener("error",l),t.removeListener("error",l),n.removeListener("end",c),n.removeListener("close",c),t.removeListener("close",c)}// Allow for unix-like usage: A.pipe(B).pipe(C)
return n.on("error",l),t.on("error",l),n.on("end",c),n.on("close",c),t.on("close",c),t.emit("pipe",n),t}}),n.register("arbX7",function(t,e){var r,n="object"==typeof Reflect?Reflect:null,o=n&&"function"==typeof n.apply?n.apply:function(t,e,r){return Function.prototype.apply.call(t,e,r)};r=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.getOwnPropertyNames(t)};var i=Number.isNaN||function(t){return t!=t};function s(){s.init.call(this)}t.exports=s,t.exports.once=function(t,e){return new Promise(function(r,n){function o(r){t.removeListener(e,i),n(r)}function i(){"function"==typeof t.removeListener&&t.removeListener("error",o),r([].slice.call(arguments))}g(t,e,i,{once:!0}),"error"!==e&&"function"==typeof t.on&&g(t,"error",o,{once:!0})})},// Backwards-compat with node 0.10.x
s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var a=10;function u(t){if("function"!=typeof t)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}function l(t){return void 0===t._maxListeners?s.defaultMaxListeners:t._maxListeners}function c(t,e,r,n){if(u(r),void 0===(i=t._events)?(i=t._events=Object.create(null),t._eventsCount=0):(void 0!==i.newListener&&(t.emit("newListener",e,r.listener?r.listener:r),// Re-assign `events` because a newListener handler could have caused the
// this._events to be assigned to a new object
i=t._events),s=i[e]),void 0===s)// Optimize the case of one listener. Don't need the extra array object.
s=i[e]=r,++t._eventsCount;else if("function"==typeof s?s=i[e]=n?[r,s]:[s,r]:n?s.unshift(r):s.push(r),// Check for listener leak
(o=l(t))>0&&s.length>o&&!s.warned){s.warned=!0;// No error code for this since it is a Warning
// eslint-disable-next-line no-restricted-syntax
var o,i,s,a=Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=t,a.type=e,a.count=s.length,console&&console.warn&&console.warn(a)}return t}function p(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},o=p.bind(n);return o.listener=r,n.wrapFn=o,o}function f(t,e,r){var n=t._events;if(void 0===n)return[];var o=n[e];return void 0===o?[]:"function"==typeof o?r?[o.listener||o]:[o]:r?function(t){for(var e=Array(t.length),r=0;r<e.length;++r)e[r]=t[r].listener||t[r];return e}(o):y(o,o.length)}function d(t){var e=this._events;if(void 0!==e){var r=e[t];if("function"==typeof r)return 1;if(void 0!==r)return r.length}return 0}function y(t,e){for(var r=Array(e),n=0;n<e;++n)r[n]=t[n];return r}function g(t,e,r,n){if("function"==typeof t.on)n.once?t.once(e,r):t.on(e,r);else if("function"==typeof t.addEventListener)// EventEmitters, we do not listen for `error` events here.
t.addEventListener(e,function o(i){n.once&&t.removeEventListener(e,o),r(i)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof t)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+t+".");a=t}}),s.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
s.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||i(t))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(t){for(var e=[],r=1;r<arguments.length;r++)e.push(arguments[r]);var n="error"===t,i=this._events;if(void 0!==i)n=n&&void 0===i.error;else if(!n)return!1;// If there is no 'error' event listener then throw.
if(n){if(e.length>0&&(s=e[0]),s instanceof Error)// up in Node's output if this results in an unhandled exception.
throw s;// Unhandled 'error' event
// At least give some kind of context to the user
var s,a=Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a;// Unhandled 'error' event
}var u=i[t];if(void 0===u)return!1;if("function"==typeof u)o(u,this,e);else for(var l=u.length,c=y(u,l),r=0;r<l;++r)o(c[r],this,e);return!0},s.prototype.addListener=function(t,e){return c(this,t,e,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(t,e){return c(this,t,e,!0)},s.prototype.once=function(t,e){return u(e),this.on(t,h(this,t,e)),this},s.prototype.prependOnceListener=function(t,e){return u(e),this.prependListener(t,h(this,t,e)),this},// Emits a 'removeListener' event if and only if the listener was removed.
s.prototype.removeListener=function(t,e){var r,n,o,i,s;if(u(e),void 0===(n=this._events)||void 0===(r=n[t]))return this;if(r===e||r.listener===e)0==--this._eventsCount?this._events=Object.create(null):(delete n[t],n.removeListener&&this.emit("removeListener",t,r.listener||e));else if("function"!=typeof r){for(o=-1,i=r.length-1;i>=0;i--)if(r[i]===e||r[i].listener===e){s=r[i].listener,o=i;break}if(o<0)return this;0===o?r.shift():function(t,e){for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}(r,o),1===r.length&&(n[t]=r[0]),void 0!==n.removeListener&&this.emit("removeListener",t,s||e)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(t){var e,r,n;if(void 0===(r=this._events))return this;// not listening for removeListener, no need to emit
if(void 0===r.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==r[t]&&(0==--this._eventsCount?this._events=Object.create(null):delete r[t]),this;// emit removeListener for all listeners on all events
if(0==arguments.length){var o,i=Object.keys(r);for(n=0;n<i.length;++n)"removeListener"!==(o=i[n])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(e=r[t]))this.removeListener(t,e);else if(void 0!==e)for(n=e.length-1;n>=0;n--)this.removeListener(t,e[n]);return this},s.prototype.listeners=function(t){return f(this,t,!0)},s.prototype.rawListeners=function(t){return f(this,t,!1)},s.listenerCount=function(t,e){return"function"==typeof t.listenerCount?t.listenerCount(e):d.call(t,e)},s.prototype.listenerCount=d,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}}),n.register("2q8Xi",function(t,e){"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}}}),n.register("iK8ba",function(t,e){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var o,i,s,a,u,l=n("4Dxou");t.exports=S,/*</replacement>*/S.ReadableState=O,n("arbX7").EventEmitter;var c=function(t,e){return t.listeners(e).length},p=n("hRK8l"),h=n("igx3v").Buffer,f=r.Uint8Array||function(){},d=n("i5MnH");i=d&&d.debuglog?d.debuglog("stream"):function(){};var y=n("fOpEG"),g=n("fG0ao"),m=n("bZ8dH").getHighWaterMark,b=n("57fqR").codes,_=b.ERR_INVALID_ARG_TYPE,v=b.ERR_STREAM_PUSH_AFTER_EOF,w=b.ERR_METHOD_NOT_IMPLEMENTED,E=b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;n("2q8Xi")(S,p);var T=g.errorOrDestroy,x=["error","close","destroy","pause","resume"];function O(t,e,r){o=o||n("jl1SC"),t=t||{},"boolean"!=typeof r&&(r=e instanceof o),// make all the buffer merging and length checks go away
this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode),// Note: 0 is a valid value, means "don't call _read preemptively ever"
this.highWaterMark=m(this,t,"readableHighWaterMark",r),// linked list can remove elements from the beginning faster than
// array.shift()
this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,// immediately, or on a later tick.  We set this to true at first, because
// any actions that shouldn't happen until "later" should generally also
// not happen before the first read call.
this.sync=!0,// that we're awaiting a 'readable' event emission.
this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.paused=!0,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(s||(s=n("log3T").StringDecoder),this.decoder=new s(t.encoding),this.encoding=t.encoding)}function S(t){if(o=o||n("jl1SC"),!(this instanceof S))return new S(t);// Checking for a Stream.Duplex instance is faster here instead of inside
// the ReadableState constructor, at least with V8 6.5
var e=this instanceof o;this._readableState=new O(t,this,e),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),p.call(this)}function A(t,e,r,n,o){i("readableAddChunk",e);var s,a,u,l,c,p=t._readableState;if(null===e)p.reading=!1,function(t,e){if(i("onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.sync?// Otherwise we risk emitting data in the flow()
// the readable code triggers during a read() call
D(t):(// emit 'readable' now to make sure it gets picked up.
e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,I(t)))}}// Don't emit readable right away in sync mode, because this can trigger
(t,p);else{if(o||(s=p,a=e,h.isBuffer(a)||a instanceof f||"string"==typeof a||void 0===a||s.objectMode||(u=new _("chunk",["string","Buffer","Uint8Array"],a)),c=u),c)T(t,c);else if(p.objectMode||e&&e.length>0){if("string"==typeof e||p.objectMode||Object.getPrototypeOf(e)===h.prototype||(l=e,e=h.from(l)),n)p.endEmitted?T(t,new E):P(t,p,e,!0);else if(p.ended)T(t,new v);else{if(p.destroyed)return!1;p.reading=!1,p.decoder&&!r?(e=p.decoder.write(e),p.objectMode||0!==e.length?P(t,p,e,!1):C(t,p)):P(t,p,e,!1)}}else n||(p.reading=!1,C(t,p))}// We can push more data if we are below the highWaterMark.
// Also, if we have no data yet, we can stand some more bytes.
// This is to work around cases where hwm=0, such as the repl.
return!p.ended&&(p.length<p.highWaterMark||0===p.length)}function P(t,e,r,n){e.flowing&&0===e.length&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(// update the buffer info.
e.length+=e.objectMode?1:r.length,n?e.buffer.unshift(r):e.buffer.push(r),e.needReadable&&D(t)),C(t,e)}// changes to the function body.
function k(t,e){if(t<=0||0===e.length&&e.ended)return 0;if(e.objectMode)return 1;if(t!=t)return(// Only flow one buffer at a time
e.flowing&&e.length?e.buffer.head.data.length:e.length);// If we're asking for more than the current hwm, then raise the hwm.
if(t>e.highWaterMark){var r;e.highWaterMark=((r=t)>=1073741824?r=1073741824:(// Get the next highest power of 2 to prevent increasing hwm excessively in
// tiny amounts
r--,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r++),r)}return t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0)// Don't have enough
}// you can override either this method, or the async _read(n) below.
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function D(t){var e=t._readableState;i("emitReadable",e.needReadable,e.emittedReadable),e.needReadable=!1,e.emittedReadable||(i("emitReadable",e.flowing),e.emittedReadable=!0,l.nextTick(I,t))}function I(t){var e=t._readableState;i("emitReadable_",e.destroyed,e.length,e.ended),!e.destroyed&&(e.length||e.ended)&&(t.emit("readable"),e.emittedReadable=!1),// 1. It is not flowing, as the flow mechanism will take
//    care of it.
// 2. It is not ended.
// 3. It is below the highWaterMark, so we can schedule
//    another readable later.
e.needReadable=!e.flowing&&!e.ended&&e.length<=e.highWaterMark,M(t)}// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function C(t,e){e.readingMore||(e.readingMore=!0,l.nextTick(N,t,e))}function N(t,e){// Attempt to read more data if we should.
//
// The conditions for reading more data are (one of):
// - Not enough data buffered (state.length < state.highWaterMark). The loop
//   is responsible for filling the buffer with enough data if such data
//   is available. If highWaterMark is 0 and we are not in the flowing mode
//   we should _not_ attempt to buffer any extra data. We'll get more data
//   when the stream consumer calls read() instead.
// - No data in the buffer, and the stream is in flowing mode. In this mode
//   the loop below is responsible for ensuring read() is called. Failing to
//   call read here would abort the flow and there's no other mechanism for
//   continuing the flow if the stream consumer has just subscribed to the
//   'data' event.
//
// In addition to the above conditions to keep reading data, the following
// conditions prevent the data from being read:
// - The stream has ended (state.ended).
// - There is already a pending 'read' operation (state.reading). This is a
//   case where the the stream has called the implementation defined _read()
//   method, but they are processing the call asynchronously and have _not_
//   called push() with new data. In this case we skip performing more
//   read()s. The execution ends in this method again after the _read() ends
//   up calling push() with more data.
for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&0===e.length);){var r=e.length;if(i("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}// abstract method.  to be overridden in specific implementation classes.
function R(t){var e=t._readableState;e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?// the upcoming resume will not flow.
e.flowing=!0:t.listenerCount("data")>0&&t.resume()}function L(t){i("readable nexttick read 0"),t.read(0)}// pause() and resume() are remnants of the legacy readable stream API
function j(t,e){i("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),M(t),e.flowing&&!e.reading&&t.read(0)}function M(t){var e=t._readableState;for(i("flow",e.flowing);e.flowing&&null!==t.read(););}// wrap an old-style stream as the async data source.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function F(t,e){var r;return(// nothing buffered
0===e.length?null:(e.objectMode?r=e.buffer.shift():!t||t>=e.length?(r=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.first():e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r))}function B(t){var e=t._readableState;i("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,l.nextTick(U,e,t))}function U(t,e){if(i("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&0===t.length&&(t.endEmitted=!0,e.readable=!1,e.emit("end"),t.autoDestroy)){// In case of duplex streams we need a way to detect
// if the writable side is ready for autoDestroy as well
var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}function G(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return -1}Object.defineProperty(S.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){// we ignore the value if the stream
// has not been initialized yet
this._readableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._readableState.destroyed=t)}}),S.prototype.destroy=g.destroy,S.prototype._undestroy=g.undestroy,S.prototype._destroy=function(t,e){e(t)},// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
S.prototype.push=function(t,e){var r,n=this._readableState;return n.objectMode?r=!0:"string"==typeof t&&((e=e||n.defaultEncoding)!==n.encoding&&(t=h.from(t,e),e=""),r=!0),A(this,t,e,!1,r)},S.prototype.unshift=function(t){return A(this,t,null,!0,!1)},S.prototype.isPaused=function(){return!1===this._readableState.flowing},S.prototype.setEncoding=function(t){s||(s=n("log3T").StringDecoder);var e=new s(t);this._readableState.decoder=e,this._readableState.encoding=this._readableState.decoder.encoding;for(var r=this._readableState.buffer.head,o="";null!==r;)o+=e.write(r.data),r=r.next;return this._readableState.buffer.clear(),""!==o&&this._readableState.buffer.push(o),this._readableState.length=o.length,this},S.prototype.read=function(t){i("read",t),t=parseInt(t,10);var e,r=this._readableState,n=t;// already have a bunch of data in the buffer, then just trigger
// the 'readable' event and move on.
if(0!==t&&(r.emittedReadable=!1),0===t&&r.needReadable&&((0!==r.highWaterMark?r.length>=r.highWaterMark:r.length>0)||r.ended))return i("read: emitReadable",r.length,r.ended),0===r.length&&r.ended?B(this):D(this),null;if(0===(t=k(t,r))&&r.ended)return 0===r.length&&B(this),null;// All the actual chunk generation logic needs to be
// *below* the call to _read.  The reason is that in certain
// synthetic stream cases, such as passthrough streams, _read
// may be a completely synchronous operation which may change
// the state of the read buffer, providing enough data when
// before there was *not* enough.
//
// So, the steps are:
// 1. Figure out what the state of things will be after we do
// a read from the buffer.
//
// 2. If that resulting state will trigger a _read, then call _read.
// Note that this may be asynchronous, or synchronous.  Yes, it is
// deeply ugly to write APIs this way, but that still doesn't mean
// that the Readable class should behave improperly, as streams are
// designed to be sync/async agnostic.
// Take note if the _read call is sync or async (ie, if the read call
// has returned yet), so that we know whether or not it's safe to emit
// 'readable' etc.
//
// 3. Actually pull the requested chunks out of the buffer and return.
// if we need a readable event, then we need to do some reading.
var o=r.needReadable;return i("need readable",o),(0===r.length||r.length-t<r.highWaterMark)&&i("length less than watermark",o=!0),r.ended||r.reading?i("reading or ended",o=!1):o&&(i("do read"),r.reading=!0,r.sync=!0,0===r.length&&(r.needReadable=!0),this._read(r.highWaterMark),r.sync=!1,r.reading||(t=k(n,r))),null===(e=t>0?F(t,r):null)?(r.needReadable=r.length<=r.highWaterMark,t=0):(r.length-=t,r.awaitDrain=0),0===r.length&&(r.ended||(r.needReadable=!0),n!==t&&r.ended&&B(this)),null!==e&&this.emit("data",e),e},// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
S.prototype._read=function(t){T(this,new w("_read()"))},S.prototype.pipe=function(t,e){var r=this,n=this._readableState;switch(n.pipesCount){case 0:n.pipes=t;break;case 1:n.pipes=[n.pipes,t];break;default:n.pipes.push(t)}n.pipesCount+=1,i("pipe count=%d opts=%j",n.pipesCount,e);var o=e&&!1===e.end||t===l.stdout||t===l.stderr?y:s;function s(){i("onend"),t.end()}// when the dest drains, it reduces the awaitDrain counter
n.endEmitted?l.nextTick(o):r.once("end",o),t.on("unpipe",function e(o,l){i("onunpipe"),o===r&&l&&!1===l.hasUnpiped&&(l.hasUnpiped=!0,i("cleanup"),t.removeListener("close",f),t.removeListener("finish",d),t.removeListener("drain",a),t.removeListener("error",h),t.removeListener("unpipe",e),r.removeListener("end",s),r.removeListener("end",y),r.removeListener("data",p),u=!0,n.awaitDrain&&(!t._writableState||t._writableState.needDrain)&&a())});// on the source.  This would be more elegant with a .once()
// handler in flow(), but adding and removing repeatedly is
// too slow.
var a=function(){var t=r._readableState;i("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,0===t.awaitDrain&&c(r,"data")&&(t.flowing=!0,M(r))};t.on("drain",a);var u=!1;function p(e){i("ondata");var o=t.write(e);i("dest.write",o),!1===o&&((1===n.pipesCount&&n.pipes===t||n.pipesCount>1&&-1!==G(n.pipes,t))&&!u&&(i("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}// if the dest has an error, then stop piping into it.
// however, don't suppress the throwing behavior for this.
function h(e){i("onerror",e),y(),t.removeListener("error",h),0===c(t,"error")&&T(t,e)}// Make sure our error handler is attached before userland ones.
function f(){t.removeListener("finish",d),y()}function d(){i("onfinish"),t.removeListener("close",f),y()}function y(){i("unpipe"),r.unpipe(t)}// tell the dest that it's being piped to
return r.on("data",p),function(t,e,r){// Sadly this is not cacheable as some libraries bundle their own
// event emitter implementation with them.
if("function"==typeof t.prependListener)return t.prependListener(e,r);// This is a hack to make sure that our error handler is attached before any
// userland ones.  NEVER DO THIS. This is here only because this code needs
// to continue to work with older versions of Node.js that do not include
// the prependListener() method. The goal is to eventually remove this hack.
t._events&&t._events[e]?Array.isArray(t._events[e])?t._events[e].unshift(r):t._events[e]=[r,t._events[e]]:t.on(e,r)}(t,"error",h),t.once("close",f),t.once("finish",d),t.emit("pipe",r),n.flowing||(i("pipe resume"),r.resume()),t},S.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1};if(0===e.pipesCount)return this;// just one destination.  most common case.
if(1===e.pipesCount)return t&&t!==e.pipes||(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,r)),this;// slow case. multiple pipe destinations.
if(!t){// remove all.
var n=e.pipes,o=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var i=0;i<o;i++)n[i].emit("unpipe",this,{hasUnpiped:!1});return this}// try to find the right one.
var s=G(e.pipes,t);return -1===s||(e.pipes.splice(s,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,r)),this},// Ensure readable listeners eventually get something
S.prototype.on=function(t,e){var r=p.prototype.on.call(this,t,e),n=this._readableState;return"data"===t?(// update readableListening so that resume() may be a no-op
// a few lines down. This is needed to support once('readable').
n.readableListening=this.listenerCount("readable")>0,!1!==n.flowing&&this.resume()):"readable"!==t||n.endEmitted||n.readableListening||(n.readableListening=n.needReadable=!0,n.flowing=!1,n.emittedReadable=!1,i("on readable",n.length,n.reading),n.length?D(this):n.reading||l.nextTick(L,this)),r},S.prototype.addListener=S.prototype.on,S.prototype.removeListener=function(t,e){var r=p.prototype.removeListener.call(this,t,e);return"readable"===t&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
l.nextTick(R,this),r},S.prototype.removeAllListeners=function(t){var e=p.prototype.removeAllListeners.apply(this,arguments);return("readable"===t||void 0===t)&&// readable and reset the state. However this needs to happen
// after readable has been emitted but before I/O (nextTick) to
// support once('readable', fn) cycles. This means that calling
// resume within the same tick will have no
// effect.
l.nextTick(R,this),e},// If the user uses them, then switch into old mode.
S.prototype.resume=function(){var t=this._readableState;return t.flowing||(i("resume"),// for readable, but we still have to call
// resume()
t.flowing=!t.readableListening,t.resumeScheduled||(t.resumeScheduled=!0,l.nextTick(j,this,t))),t.paused=!1,this},S.prototype.pause=function(){return i("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(i("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState.paused=!0,this},// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
S.prototype.wrap=function(t){var e=this,r=this._readableState,n=!1;// important when wrapping filters and duplexes.
for(var o in t.on("end",function(){if(i("wrapped end"),r.decoder&&!r.ended){var t=r.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(o){i("wrapped data"),r.decoder&&(o=r.decoder.write(o)),(!r.objectMode||null!=o)&&(r.objectMode||o&&o.length)&&(e.push(o)||(n=!0,t.pause()))}),t)void 0===this[o]&&"function"==typeof t[o]&&(this[o]=function(e){return function(){return t[e].apply(t,arguments)}}(o));// proxy certain important events.
for(var s=0;s<x.length;s++)t.on(x[s],this.emit.bind(this,x[s]));return(// when we try to consume some more bytes, simply unpause the
// underlying stream.
this._read=function(e){i("wrapped _read",e),n&&(n=!1,t.resume())},this)},"function"==typeof Symbol&&(S.prototype[Symbol.asyncIterator]=function(){return void 0===a&&(a=n("lp5xw")),a(this)}),Object.defineProperty(S.prototype,"readableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.highWaterMark}}),Object.defineProperty(S.prototype,"readableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}}),Object.defineProperty(S.prototype,"readableFlowing",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.flowing},set:function(t){this._readableState&&(this._readableState.flowing=t)}}),S._fromList=F,Object.defineProperty(S.prototype,"readableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._readableState.length}}),"function"==typeof Symbol&&(S.from=function(t,e){return void 0===u&&(u=n("1dMqI")),u(S,t,e)})}),n.register("4Dxou",function(t,e){// shim for using process in browser
var r,n,o,i=t.exports={};function s(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);// if setTimeout wasn't available but was latter defined
if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return r(t,0)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return r.call(null,t,0)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var l=[],c=!1,p=-1;function h(){c&&o&&(c=!1,o.length?l=o.concat(l):p=-1,l.length&&f())}function f(){if(!c){var t=u(h);c=!0;for(var e=l.length;e;){for(o=l,l=[];++p<e;)o&&o[p].run();p=-1,e=l.length}o=null,c=!1,function(t){if(n===clearTimeout)return clearTimeout(t);// if clearTimeout wasn't available but was latter defined
if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{// when when somebody has screwed with setTimeout but no I.E. maddness
n(t)}catch(e){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return n.call(null,t)}catch(e){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return n.call(this,t)}}}(t)}}// v8 likes predictible objects
function d(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];l.push(new d(t,e)),1!==l.length||c||u(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),n.register("hRK8l",function(t,e){t.exports=n("arbX7").EventEmitter}),n.register("fOpEG",function(t,e){function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var i=n("igx3v").Buffer,s=n("i5MnH").inspect,a=s&&s.custom||"inspect";t.exports=/*#__PURE__*/function(){var t,e;function n(){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,n),this.head=null,this.tail=null,this.length=0}return t=[{key:"push",value:function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length}},{key:"unshift",value:function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length}},{key:"shift",value:function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}}},{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(t){if(0===this.length)return"";for(var e=this.head,r=""+e.data;e=e.next;)r+=t+e.data;return r}},{key:"concat",value:function(t){if(0===this.length)return i.alloc(0);for(var e,r,n=i.allocUnsafe(t>>>0),o=this.head,s=0;o;)e=o.data,r=s,i.prototype.copy.call(e,n,r),s+=o.data.length,o=o.next;return n}// Consumes a specified amount of bytes or characters from the buffered data.
},{key:"consume",value:function(t,e){var r;return t<this.head.data.length?(// `slice` is the same for buffers and strings.
r=this.head.data.slice(0,t),this.head.data=this.head.data.slice(t)):r=t===this.head.data.length?this.shift():e?this._getString(t):this._getBuffer(t),r}},{key:"first",value:function(){return this.head.data}// Consumes a specified amount of characters from the buffered data.
},{key:"_getString",value:function(t){var e=this.head,r=1,n=e.data;for(t-=n.length;e=e.next;){var o=e.data,i=t>o.length?o.length:t;if(i===o.length?n+=o:n+=o.slice(0,t),0==(t-=i)){i===o.length?(++r,e.next?this.head=e.next:this.head=this.tail=null):(this.head=e,e.data=o.slice(i));break}++r}return this.length-=r,n}// Consumes a specified amount of bytes from the buffered data.
},{key:"_getBuffer",value:function(t){var e=i.allocUnsafe(t),r=this.head,n=1;for(r.data.copy(e),t-=r.data.length;r=r.next;){var o=r.data,s=t>o.length?o.length:t;if(o.copy(e,e.length-t,0,s),0==(t-=s)){s===o.length?(++n,r.next?this.head=r.next:this.head=this.tail=null):(this.head=r,r.data=o.slice(s));break}++n}return this.length-=n,e}// Make sure the linked list only shows the minimal necessary information.
},{key:a,value:function(t,e){return s(this,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){var r;r=n[e],e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},e,{// Only inspect one level.
depth:0,// It should not recurse.
customInspect:!1}))}}],o(n.prototype,t),e&&o(n,e),n}()}),n.register("fG0ao",function(t,e){var r=n("4Dxou");function o(t,e){s(t,e),i(t)}function i(t){(!t._writableState||t._writableState.emitClose)&&(!t._readableState||t._readableState.emitClose)&&t.emit("close")}function s(t,e){t.emit("error",e)}t.exports={destroy:function(t,e){var n=this,a=this._readableState&&this._readableState.destroyed,u=this._writableState&&this._writableState.destroyed;return a||u?e?e(t):t&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,r.nextTick(s,this,t)):r.nextTick(s,this,t)):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?n._writableState?n._writableState.errorEmitted?r.nextTick(i,n):(n._writableState.errorEmitted=!0,r.nextTick(o,n,t)):r.nextTick(o,n,t):e?(r.nextTick(i,n),e(t)):r.nextTick(i,n)})),this},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)},errorOrDestroy:function(t,e){// We have tests that rely on errors being emitted
// in the same tick, so changing this is semver major.
// For now when you opt-in to autoDestroy we allow
// the error to be emitted nextTick. In a future
// semver major update we should change the default to this.
var r=t._readableState,n=t._writableState;r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}}}),n.register("bZ8dH",function(t,e){var r=n("57fqR").codes.ERR_INVALID_OPT_VALUE;t.exports={getHighWaterMark:function(t,e,n,o){var i=null!=e.highWaterMark?e.highWaterMark:o?e[n]:null;if(null!=i){if(!(isFinite(i)&&Math.floor(i)===i)||i<0){var s=o?n:"highWaterMark";throw new r(s,i)}return Math.floor(i)}// Default value
return t.objectMode?16:16384}}}),n.register("57fqR",function(t,r){e(t.exports,"codes",function(){return n},function(t){return n=t});var n,o={};function i(t,e,r){r||(r=Error);var n=/*#__PURE__*/function(t){function r(r,n,o){return t.call(this,"string"==typeof e?e:e(r,n,o))||this}return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t,r}(r);n.prototype.name=r.name,n.prototype.code=t,o[t]=n}// https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js
function s(t,e){if(!Array.isArray(t))return"of ".concat(e," ").concat(String(t));var r=t.length;return(t=t.map(function(t){return String(t)}),r>2)?"one of ".concat(e," ").concat(t.slice(0,r-1).join(", "),", or ")+t[r-1]:2===r?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(e," ").concat(t[0])}// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
i("ERR_INVALID_OPT_VALUE",function(t,e){return'The value "'+e+'" is invalid for option "'+t+'"'},TypeError),i("ERR_INVALID_ARG_TYPE",function(t,e,r){if("string"==typeof e&&(n="not ",e.substr(!o||o<0?0:+o,n.length)===n)?(l="must not be",e=e.replace(/^not /,"")):l="must be",i=" argument",(void 0===a||a>t.length)&&(a=t.length),t.substring(a-i.length,a)===i)c="The ".concat(t," ").concat(l," ").concat(s(e,"type"));else{var n,o,i,a,u,l,c,p=("number"!=typeof u&&(u=0),u+1>t.length||-1===t.indexOf(".",u))?"argument":"property";c='The "'.concat(t,'" ').concat(p," ").concat(l," ").concat(s(e,"type"))}return c+". Received type ".concat(typeof r)},TypeError),i("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF"),i("ERR_METHOD_NOT_IMPLEMENTED",function(t){return"The "+t+" method is not implemented"}),i("ERR_STREAM_PREMATURE_CLOSE","Premature close"),i("ERR_STREAM_DESTROYED",function(t){return"Cannot call "+t+" after a stream was destroyed"}),i("ERR_MULTIPLE_CALLBACK","Callback called multiple times"),i("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable"),i("ERR_STREAM_WRITE_AFTER_END","write after end"),i("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),i("ERR_UNKNOWN_ENCODING",function(t){return"Unknown encoding: "+t},TypeError),i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event"),n=o}),n.register("jl1SC",function(t,e){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
var r=n("4Dxou"),o=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};/*</replacement>*/t.exports=c;var i=n("iK8ba"),s=n("dJLvx");n("2q8Xi")(c,i);for(var a=o(s.prototype),u=0;u<a.length;u++){var l=a[u];c.prototype[l]||(c.prototype[l]=s.prototype[l])}function c(t){if(!(this instanceof c))return new c(t);i.call(this,t),s.call(this,t),this.allowHalfOpen=!0,t&&(!1===t.readable&&(this.readable=!1),!1===t.writable&&(this.writable=!1),!1===t.allowHalfOpen&&(this.allowHalfOpen=!1,this.once("end",p)))}function p(){// If the writable side ended, then we're ok.
this._writableState.ended||// But allow more writes to happen in this tick.
r.nextTick(h,this);// no more data can be written.
}function h(t){t.end()}Object.defineProperty(c.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(c.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(c.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(c.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&this._readableState.destroyed&&this._writableState.destroyed},set:function(t){// we ignore the value if the stream
// has not been initialized yet
void 0!==this._readableState&&void 0!==this._writableState&&(// backward compatibility, the user is explicitly
// managing destroyed
this._readableState.destroyed=t,this._writableState.destroyed=t)}})}),n.register("dJLvx",function(t,e){// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
var o,i,s=n("4Dxou");// there will be only 2 of these for each stream
function a(t){var e=this;this.next=null,this.entry=null,this.finish=function(){(function(t,e,r){var n=t.entry;for(t.entry=null;n;){var o=n.callback;e.pendingcb--,o(void 0),n=n.next}// reuse the free corkReq.
e.corkedRequestsFree.next=t})(e,t)}}t.exports=S,/*</replacement>*/S.WritableState=O;/*<replacement>*/var u={deprecate:n("JexQw")},l=n("hRK8l"),c=n("igx3v").Buffer,p=r.Uint8Array||function(){},h=n("fG0ao"),f=n("bZ8dH").getHighWaterMark,d=n("57fqR").codes,y=d.ERR_INVALID_ARG_TYPE,g=d.ERR_METHOD_NOT_IMPLEMENTED,m=d.ERR_MULTIPLE_CALLBACK,b=d.ERR_STREAM_CANNOT_PIPE,_=d.ERR_STREAM_DESTROYED,v=d.ERR_STREAM_NULL_VALUES,w=d.ERR_STREAM_WRITE_AFTER_END,E=d.ERR_UNKNOWN_ENCODING,T=h.errorOrDestroy;function x(){}function O(t,e,r){o=o||n("jl1SC"),t=t||{},"boolean"!=typeof r&&(r=e instanceof o),// contains buffers or objects.
this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode),// Note: 0 is a valid value, means that we always return false if
// the entire buffer is not flushed immediately on write()
this.highWaterMark=f(this,t,"writableHighWaterMark",r),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;// this is here so that some node-core streams can optimize string
// handling at a lower level.
var i=!1===t.decodeStrings;this.decodeStrings=!i,// encoding is 'binary' so we have to make this configurable.
// Everything else in the universe uses 'utf8', though.
this.defaultEncoding=t.defaultEncoding||"utf8",// of how much we're waiting to get pushed to some underlying
// socket or file.
this.length=0,this.writing=!1,this.corked=0,// or on a later tick.  We set this to true at first, because any
// actions that shouldn't happen until "later" should generally also
// not happen before the first write call.
this.sync=!0,// may call the _write() callback in the same tick, so that we don't
// end up in an overlapped onwrite situation.
this.bufferProcessing=!1,this.onwrite=function(t){(function(t,e){var r=t._writableState,n=r.sync,o=r.writecb;if("function"!=typeof o)throw new m;if(r.writing=!1,r.writecb=null,r.length-=r.writelen,r.writelen=0,e)--r.pendingcb,n?(// defer the callback if we are being called synchronously
// to avoid piling up things on the stack
s.nextTick(o,e),// after error
s.nextTick(C,t,r),t._writableState.errorEmitted=!0,T(t,e)):(// the caller expect this to happen before if
// it is async
o(e),t._writableState.errorEmitted=!0,T(t,e),// always follow error
C(t,r));else{// Check if we're actually ready to finish, but don't emit yet
var i=D(r)||t.destroyed;i||r.corked||r.bufferProcessing||!r.bufferedRequest||k(t,r),n?s.nextTick(P,t,r,i,o):P(t,r,i,o)}})(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,// this must be 0 before 'finish' can be emitted
this.pendingcb=0,// This is relevant for synchronous Transform streams
this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!1!==t.emitClose,this.autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,// one allocated and free to use, and we maintain at most two
this.corkedRequestsFree=new a(this)}function S(t){// `realHasInstance` is necessary because using plain `instanceof`
// would return false, as no `_writableState` property is attached.
// Trying to use the custom `instanceof` for Writable here will also break the
// Node.js LazyTransform implementation, which has a non-trivial getter for
// `_writableState` that would lead to infinite recursion.
// Checking for a Stream.Duplex instance is faster here instead of inside
// the WritableState constructor, at least with V8 6.5
var e=this instanceof(o=o||n("jl1SC"));if(!e&&!i.call(S,this))return new S(t);this._writableState=new O(t,this,e),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),l.call(this)}// Otherwise people can pipe Writable streams, which is just wrong.
function A(t,e,r,n,o,i,s){e.writelen=n,e.writecb=s,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new _("write")):r?t._writev(o,e.onwrite):t._write(o,i,e.onwrite),e.sync=!1}function P(t,e,r,n){r||0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain")),e.pendingcb--,n(),C(t,e)}// Must force callback to be called on nextTick, so that we don't
function k(t,e){e.bufferProcessing=!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var n=Array(e.bufferedRequestCount),o=e.corkedRequestsFree;o.entry=r;for(var i=0,s=!0;r;)n[i]=r,r.isBuf||(s=!1),r=r.next,i+=1;n.allBuffers=s,A(t,e,!0,e.length,n,"",o.finish),// as the hot path ends with doWrite
e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new a(e),e.bufferedRequestCount=0}else{// Slow case, write chunks one-by-one
for(;r;){var u=r.chunk,l=r.encoding,c=r.callback,p=e.objectMode?1:u.length;// it means that we need to wait until it does.
// also, that means that the chunk and cb are currently
// being processed, so move the buffer counter past them.
if(A(t,e,!1,p,u,l,c),r=r.next,e.bufferedRequestCount--,e.writing)break}null===r&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}function D(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function I(t,e){t._final(function(r){e.pendingcb--,r&&T(t,r),e.prefinished=!0,t.emit("prefinish"),C(t,e)})}function C(t,e){var r=D(e);if(r&&(e.prefinished||e.finalCalled||("function"!=typeof t._final||e.destroyed?(e.prefinished=!0,t.emit("prefinish")):(e.pendingcb++,e.finalCalled=!0,s.nextTick(I,t,e))),0===e.pendingcb&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){// In case of duplex streams we need a way to detect
// if the readable side is ready for autoDestroy as well
var n=t._readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}n("2q8Xi")(S,l),O.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(O.prototype,"buffer",{get:u.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(i=Function.prototype[Symbol.hasInstance],Object.defineProperty(S,Symbol.hasInstance,{value:function(t){return!!i.call(this,t)||this===S&&t&&t._writableState instanceof O}})):i=function(t){return t instanceof this},S.prototype.pipe=function(){T(this,new b)},S.prototype.write=function(t,e,r){var n,o,i,a,u,l,h,f=this._writableState,d=!1,g=!f.objectMode&&(n=t,c.isBuffer(n)||n instanceof p);return g&&!c.isBuffer(t)&&(o=t,t=c.from(o)),("function"==typeof e&&(r=e,e=null),g?e="buffer":e||(e=f.defaultEncoding),"function"!=typeof r&&(r=x),f.ending)?(i=r,T(this,a=new w),s.nextTick(i,a)):(g||(u=t,l=r,null===u?h=new v:"string"==typeof u||f.objectMode||(h=new y("chunk",["string","Buffer"],u)),!h||(T(this,h),s.nextTick(l,h),0)))&&(f.pendingcb++,d=// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function(t,e,r,n,o,i){if(!r){var s,a,u=(s=n,a=o,e.objectMode||!1===e.decodeStrings||"string"!=typeof s||(s=c.from(s,a)),s);n!==u&&(r=!0,o="buffer",n=u)}var l=e.objectMode?1:n.length;e.length+=l;var p=e.length<e.highWaterMark;// we must ensure that previous needDrain will not be reset to false.
if(p||(e.needDrain=!0),e.writing||e.corked){var h=e.lastBufferedRequest;e.lastBufferedRequest={chunk:n,encoding:o,isBuf:r,callback:i,next:null},h?h.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else A(t,e,!1,l,n,o,i);return p}(this,f,g,t,e,r)),d},S.prototype.cork=function(){this._writableState.corked++},S.prototype.uncork=function(){var t=this._writableState;!t.corked||(t.corked--,t.writing||t.corked||t.bufferProcessing||!t.bufferedRequest||k(this,t))},S.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new E(t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(S.prototype,"writableBuffer",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState&&this._writableState.getBuffer()}}),Object.defineProperty(S.prototype,"writableHighWaterMark",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.highWaterMark}}),S.prototype._write=function(t,e,r){r(new g("_write()"))},S.prototype._writev=null,S.prototype.end=function(t,e,r){var n,o=this._writableState;return"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),null!=t&&this.write(t,e),o.corked&&(o.corked=1,this.uncork()),o.ending||(n=r,o.ending=!0,C(this,o),n&&(o.finished?s.nextTick(n):this.once("finish",n)),o.ended=!0,this.writable=!1),this},Object.defineProperty(S.prototype,"writableLength",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return this._writableState.length}}),Object.defineProperty(S.prototype,"destroyed",{// making it explicit this property is not enumerable
// because otherwise some prototype manipulation in
// userland will fail
enumerable:!1,get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){// we ignore the value if the stream
// has not been initialized yet
this._writableState&&// backward compatibility, the user is explicitly
// managing destroyed
(this._writableState.destroyed=t)}}),S.prototype.destroy=h.destroy,S.prototype._undestroy=h.undestroy,S.prototype._destroy=function(t,e){e(t)}}),n.register("JexQw",function(t,e){/**
 * Module exports.
 */t.exports=/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */function(t,e){if(n("noDeprecation"))return t;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw Error(e);n("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}};/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */function n(t){// accessing global.localStorage can trigger a DOMException in sandboxed iframes
try{if(!r.localStorage)return!1}catch(t){return!1}var e=r.localStorage[t];return null!=e&&"true"===String(e).toLowerCase()}}),n.register("log3T",function(t,r){e(t.exports,"StringDecoder",function(){return o},function(t){return o=t});var o,i=n("bNGY6").Buffer,s=i.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function a(t){var e;switch(this.encoding=// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function(t){var e=function(t){var e;if(!t)return"utf8";for(;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;// undefined
t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(i.isEncoding===s||!s(t)))throw Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=c,this.end=p,e=4;break;case"utf8":this.fillLast=l,e=4;break;case"base64":this.text=h,this.end=f,e=3;break;default:this.write=d,this.end=y;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=i.allocUnsafe(e)}// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function u(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function l(t){var e=this.lastTotal-this.lastNeed,r=// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function(t,e,r){if((192&e[0])!=128)return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if((192&e[1])!=128)return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&(192&e[2])!=128)return t.lastNeed=2,"�"}}(this,t,0);return void 0!==r?r:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):void(t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length)}// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function c(t,e){if((t.length-e)%2==0){var r=t.toString("utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function p(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,r)}return e}function h(t,e){var r=(t.length-e)%3;return 0===r?t.toString("base64",e):(this.lastNeed=3-r,this.lastTotal=3,1===r?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function f(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function d(t){return t.toString(this.encoding)}function y(t){return t&&t.length?this.write(t):""}o=a,a.prototype.write=function(t){var e,r;if(0===t.length)return"";if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""},a.prototype.end=// For UTF-8, a replacement character is added when ending on a partial
// character.
function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},// Returns only complete characters in a Buffer
a.prototype.text=// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function(t,e){var r=// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function(t,e,r){var n=e.length-1;if(n<r)return 0;var o=u(e[n]);return o>=0?(o>0&&(t.lastNeed=o-1),o):--n<r||-2===o?0:(o=u(e[n]))>=0?(o>0&&(t.lastNeed=o-2),o):--n<r||-2===o?0:(o=u(e[n]))>=0?(o>0&&(2===o?o=0:t.lastNeed=o-3),o):0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)},// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
a.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}}),n.register("bNGY6",function(t,e){/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *//* eslint-disable node/no-deprecated-api */var r=n("igx3v"),o=r.Buffer;// alternative to using Object.keys for old browsers
function i(t,e){for(var r in t)e[r]=t[r]}function s(t,e,r){return o(t,e,r)}o.from&&o.alloc&&o.allocUnsafe&&o.allocUnsafeSlow?t.exports=r:(// Copy properties from require('buffer')
i(r,t.exports),t.exports.Buffer=s),s.prototype=Object.create(o.prototype),// Copy static methods from Buffer
i(o,s),s.from=function(t,e,r){if("number"==typeof t)throw TypeError("Argument must not be a number");return o(t,e,r)},s.alloc=function(t,e,r){if("number"!=typeof t)throw TypeError("Argument must be a number");var n=o(t);return void 0!==e?"string"==typeof r?n.fill(e,r):n.fill(e):n.fill(0),n},s.allocUnsafe=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return o(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw TypeError("Argument must be a number");return r.SlowBuffer(t)}}),n.register("lp5xw",function(t,e){var r,o=n("4Dxou");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=n("1Q2LB"),a=Symbol("lastResolve"),u=Symbol("lastReject"),l=Symbol("error"),c=Symbol("ended"),p=Symbol("lastPromise"),h=Symbol("handlePromise"),f=Symbol("stream");function d(t,e){return{value:t,done:e}}function y(t){var e=t[a];if(null!==e){var r=t[f].read();// we defer if data is null
// we can be expecting either 'end' or
// 'error'
null!==r&&(t[p]=null,t[a]=null,t[u]=null,e(d(r,!1)))}}function g(t){// we wait for the next tick, because it might
// emit an error with process.nextTick
o.nextTick(y,t)}var m=Object.getPrototypeOf(function(){}),b=Object.setPrototypeOf((i(r={get stream(){return this[f]},next:function(){var t,e,r=this,n=this[l];if(null!==n)return Promise.reject(n);if(this[c])return Promise.resolve(d(void 0,!0));if(this[f].destroyed)// called, the error will be emitted via nextTick, and
// we cannot guarantee that there is no error lingering around
// waiting to be emitted.
return new Promise(function(t,e){o.nextTick(function(){r[l]?e(r[l]):t(d(void 0,!0))})});// if we have multiple next() calls
// we will wait for the previous Promise to finish
// this logic is optimized to support for await loops,
// where next() is only called once at a time
var i=this[p];if(i)e=new Promise((t=this,function(e,r){i.then(function(){if(t[c]){e(d(void 0,!0));return}t[h](e,r)},r)}));else{// fast path needed to support multiple this.push()
// without triggering the next() queue
var s=this[f].read();if(null!==s)return Promise.resolve(d(s,!1));e=new Promise(this[h])}return this[p]=e,e}},Symbol.asyncIterator,function(){return this}),i(r,"return",function(){var t=this;// destroy(err, cb) is a private API
// we can guarantee we have that here, because we control the
// Readable class this is attached to
return new Promise(function(e,r){t[f].destroy(null,function(t){if(t){r(t);return}e(d(void 0,!0))})})}),r),m);t.exports=function(t){var e,r=Object.create(b,(i(e={},f,{value:t,writable:!0}),i(e,a,{value:null,writable:!0}),i(e,u,{value:null,writable:!0}),i(e,l,{value:null,writable:!0}),i(e,c,{value:t._readableState.endEmitted,writable:!0}),i(e,h,{value:function(t,e){var n=r[f].read();n?(r[p]=null,r[a]=null,r[u]=null,t(d(n,!1))):(r[a]=t,r[u]=e)},writable:!0}),e));return r[p]=null,s(t,function(t){if(t&&"ERR_STREAM_PREMATURE_CLOSE"!==t.code){var e=r[u];// reject if we are waiting for data in the Promise
null!==e&&(r[p]=null,r[a]=null,r[u]=null,e(t)),r[l]=t;return}var n=r[a];null!==n&&(r[p]=null,r[a]=null,r[u]=null,n(d(void 0,!0))),r[c]=!0}),t.on("readable",g.bind(null,r)),r}}),n.register("1Q2LB",function(t,e){var r=n("57fqR").codes.ERR_STREAM_PREMATURE_CLOSE;function o(){}t.exports=function t(e,n,i){if("function"==typeof n)return t(e,null,n);n||(n={}),s=i||o,a=!1,i=function(){if(!a){a=!0;for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];s.apply(this,e)}};var s,a,u=n.readable||!1!==n.readable&&e.readable,l=n.writable||!1!==n.writable&&e.writable,c=function(){e.writable||h()},p=e._writableState&&e._writableState.finished,h=function(){l=!1,p=!0,u||i.call(e)},f=e._readableState&&e._readableState.endEmitted,d=function(){u=!1,f=!0,l||i.call(e)},y=function(t){i.call(e,t)},g=function(){var t;return u&&!f?(e._readableState&&e._readableState.ended||(t=new r),i.call(e,t)):l&&!p?(e._writableState&&e._writableState.ended||(t=new r),i.call(e,t)):void 0},m=function(){e.req.on("finish",h)};return e.setHeader&&"function"==typeof e.abort?(e.on("complete",h),e.on("abort",g),e.req?m():e.on("request",m)):l&&!e._writableState&&(// legacy streams
e.on("end",c),e.on("close",c)),e.on("end",d),e.on("finish",h),!1!==n.error&&e.on("error",y),e.on("close",g),function(){e.removeListener("complete",h),e.removeListener("abort",g),e.removeListener("request",m),e.req&&e.req.removeListener("finish",h),e.removeListener("end",c),e.removeListener("close",c),e.removeListener("finish",h),e.removeListener("end",d),e.removeListener("error",y),e.removeListener("close",g)}}}),n.register("1dMqI",function(t,e){t.exports=function(){throw Error("Readable.from is not available in the browser")}}),n.register("gFmPQ",function(t,e){t.exports=c;var r=n("57fqR").codes,o=r.ERR_METHOD_NOT_IMPLEMENTED,i=r.ERR_MULTIPLE_CALLBACK,s=r.ERR_TRANSFORM_ALREADY_TRANSFORMING,a=r.ERR_TRANSFORM_WITH_LENGTH_0,u=n("jl1SC");function l(t,e){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(null===n)return this.emit("error",new i);r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t);var o=this._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}function c(t){if(!(this instanceof c))return new c(t);u.call(this,t),this._transformState={afterTransform:l.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,// that Readable wants before the first _read call, so unset the
// sync guard flag.
this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",p)}function p(){var t=this;"function"!=typeof this._flush||this._readableState.destroyed?h(this,null,null):this._flush(function(e,r){h(t,e,r)})}function h(t,e,r){if(e)return t.emit("error",e);// if there's nothing in the write buffer, then that means
// that nothing more will ever be provided
if(null!=r&&t.push(r),t._writableState.length)throw new a;if(t._transformState.transforming)throw new s;return t.push(null)}n("2q8Xi")(c,u),c.prototype.push=function(t,e){return this._transformState.needTransform=!1,u.prototype.push.call(this,t,e)},// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
c.prototype._transform=function(t,e,r){r(new o("_transform()"))},c.prototype._write=function(t,e,r){var n=this._transformState;if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var o=this._readableState;(n.needTransform||o.needReadable||o.length<o.highWaterMark)&&this._read(o.highWaterMark)}},// _transform does all the work.
// That we got here means that the readable side wants more data.
c.prototype._read=function(t){var e=this._transformState;null===e.writechunk||e.transforming?// will get processed, now that we've asked for it.
e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))},c.prototype._destroy=function(t,e){u.prototype._destroy.call(this,t,function(t){e(t)})}}),n.register("f8Ujl",function(t,e){t.exports=o;var r=n("gFmPQ");function o(t){if(!(this instanceof o))return new o(t);r.call(this,t)}n("2q8Xi")(o,r),o.prototype._transform=function(t,e,r){r(null,t)}}),n.register("4qPGM",function(t,e){var r,o=n("57fqR").codes,i=o.ERR_MISSING_ARGS,s=o.ERR_STREAM_DESTROYED;function a(t){// Rethrow the error if it exists to avoid swallowing it
if(t)throw t}function u(t){t()}function l(t,e){return t.pipe(e)}t.exports=function(){for(var t,e,o=arguments.length,c=Array(o),p=0;p<o;p++)c[p]=arguments[p];var h=(t=c).length&&"function"==typeof t[t.length-1]?t.pop():a;if(Array.isArray(c[0])&&(c=c[0]),c.length<2)throw new i("streams");var f=c.map(function(t,o){var i,a,l,p,d,y=o<c.length-1;return a=i=function(t){e||(e=t),t&&f.forEach(u),y||(f.forEach(u),h(e))},l=!1,i=function(){l||(l=!0,a.apply(void 0,arguments))},p=!1,t.on("close",function(){p=!0}),void 0===r&&(r=n("1Q2LB")),r(t,{readable:y,writable:o>0},function(t){if(t)return i(t);p=!0,i()}),d=!1,function(e){if(!p&&!d){if(d=!0,t.setHeader&&"function"==typeof t.abort)return t.abort();if("function"==typeof t.destroy)return t.destroy();i(e||new s("pipe"))}}});return c.reduce(l)}}),n.register("3Q2Qd",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){t.exports.stripBOM=function(t){return"\uFEFF"===t[0]?t.substring(1):t}}).call(t.exports)}),n.register("bufhm",function(t,e){// Generated by CoffeeScript 1.12.7
(function(){var e;e=new RegExp(/(?!xmlns)^.*:/),t.exports.normalize=function(t){return t.toLowerCase()},t.exports.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},t.exports.stripPrefix=function(t){return t.replace(e,"")},t.exports.parseNumbers=function(t){return isNaN(t)||(t=t%1==0?parseInt(t,10):parseFloat(t)),t},t.exports.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t="true"===t.toLowerCase()),t}}).call(t.exports)}),n.register("3U7o1",function(t,e){var o=void 0!==r&&r||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function s(t,e){this._id=t,this._clearFn=e}// DOM APIs, for completeness
t.exports.setTimeout=function(){return new s(i.call(setTimeout,o,arguments),clearTimeout)},t.exports.setInterval=function(){return new s(i.call(setInterval,o,arguments),clearInterval)},t.exports.clearTimeout=t.exports.clearInterval=function(t){t&&t.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(o,this._id)},// Does not start the time, just sets up the members needed.
t.exports.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},t.exports.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},t.exports._unrefActive=t.exports.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n("2zdyq"),// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
t.exports.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==r&&r.setImmediate||t.exports&&t.exports.setImmediate,t.exports.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==r&&r.clearImmediate||t.exports&&t.exports.clearImmediate}),n.register("2zdyq",function(t,e){var o=n("4Dxou");!function(t,e){if(!t.setImmediate){var r,n,i,s,a,u=1,l={},c=!1,p=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);// Spec says greater than zero
h=h&&h.setTimeout?h:t,"[object process]"===({}).toString.call(t.process)?a=function(t){o.nextTick(function(){d(t)})}:function(){// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?(r="setImmediate$"+Math.random()+"$",n=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(r)&&d(+e.data.slice(r.length))},t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),a=function(e){t.postMessage(r+e,"*")}):t.MessageChannel?((i=new MessageChannel).port1.onmessage=function(t){d(t.data)},a=function(t){i.port2.postMessage(t)}):p&&"onreadystatechange"in p.createElement("script")?(s=p.documentElement,a=function(t){// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var e=p.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,s.removeChild(e),e=null},s.appendChild(e)}):a=function(t){setTimeout(d,0,t)},h.setImmediate=function(t){"function"!=typeof t&&(t=Function(""+t));for(var e=Array(arguments.length-1),r=0;r<e.length;r++)e[r]=arguments[r+1];// Copy function arguments
var n={callback:t,args:e};return l[u]=n,a(u),u++},h.clearImmediate=f}function f(t){delete l[t]}function d(t){// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if(c)// "too much recursion" error.
setTimeout(d,0,t);else{var e=l[t];if(e){c=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(void 0,r)}}(e)}finally{f(t),c=!1}}}}}("undefined"==typeof self?void 0===r?t.exports:r:self)}),n.register("43e3n",function(t,e){var r=n("rDKgn").Request,o=n("2NQDr");/**
 * Creates a new Replace service instance. Since the Replace API only
 * does one thing (replace files), an Replace instance is simply
 * a Request subclass.
 *
 * The Replace endpoint requires authentication. You should pass a configured
 * instance of the [OAuth plugin]{@link Flickr.OAuth.createPlugin} to replace
 * photos on behalf of another user.
 *
 * @param {Function} auth
 * @param {Number|String} photoID The ID of the photo to replace
 * @param {String|fs.ReadStream|Buffer} file
 * @param {Object} [args]
 * @constructor
 * @extends Request
 * @memberof Flickr
 *
 * @example
 *
 * var replace = new Flickr.Replace(auth, 41234567890, 'replace.png', {
 *   title: 'Now in pink!'
 * });
 *
 * replace.then(function (res) {
 *   console.log('yay!', res.body);
 * }).catch(function (err) {
 *   console.error('bonk', err);
 * });
 *
 * @see https://www.flickr.com/services/api/replace.api.html
 */function i(t,e,n,s){// allow creating a client without `new`
if(!(this instanceof i))return new i(t,e,n,s);if(r.call(this,"POST","https://up.flickr.com/services/replace"),"function"!=typeof t)throw Error('Missing required argument "auth"');if(void 0===e)throw Error('Missing required argument "photoID"');void 0===s&&(s={}),this.attach("photo",n),this.field("photo_id",e),this.field(s),this.use(o),this.use(t)}i.prototype=Object.create(r.prototype),t.exports=i}),n.register("36nq7",function(t,r){e(t.exports,"getPixels",function(){return a});var o=n("7IuTb"),i=n("acR5n"),s=n("gL7ZM");function a(t){return(0,o.getPixelsViaImageBitmap)(t).catch(()=>(0,s.getPixelsViaImageDecode)(t)).catch(()=>(0,i.getPixelsViaImageData)(t))}}),n.register("7IuTb",function(t,r){e(t.exports,"getPixelsViaImageBitmap",function(){return i});var o=n("6OwJ2");async function i(t){let e=document.createElement("canvas"),r=e.getContext("webgl")||e.getContext("experimental-webgl");if(!r)throw Error("No WebGL support");let n=await (0,o.getImage)(t),i=await createImageBitmap(n,{colorSpaceConversion:"none"}),s=i.width,a=i.height;e.width=s,e.height=a;let u=r.createTexture();r.bindTexture(r.TEXTURE_2D,null),r.activeTexture(r.TEXTURE0),r.bindTexture(r.TEXTURE_2D,u),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,i),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.viewport(0,0,s,a);let l=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,l),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,u,0);let c=new Uint8Array(s*a*4);return r.readPixels(0,0,s,a,r.RGBA,r.UNSIGNED_BYTE,c),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindTexture(r.TEXTURE_2D,null),r.deleteFramebuffer(l),r.deleteTexture(u),e.width=e.height=1,{width:s,height:a,data:c}}}),n.register("6OwJ2",function(t,r){e(t.exports,"getImage",function(){return n});async function n(t){let e=new Image;return await new Promise((r,n)=>{e.onload=r,e.onerror=n,e.src=t}),e}}),n.register("acR5n",function(t,r){e(t.exports,"getPixelsViaImageData",function(){return i});var o=n("6OwJ2");async function i(t){let e=document.createElement("canvas"),r=e.getContext("2d");if(!r)throw Error("Could not get 2D canvas context");let n=await (0,o.getImage)(t),i=n.naturalWidth,s=n.naturalHeight;e.width=i,e.height=s,r.drawImage(n,0,0);let{data:a}=r.getImageData(0,0,i,s);return{width:i,height:s,data:a}}}),n.register("gL7ZM",function(t,r){e(t.exports,"getPixelsViaImageDecode",function(){return o});async function o(t){let e=await n("5vM4g"),r=await fetch(t);if(!r.ok)throw Error("Issue loading image");let o=await r.arrayBuffer(),{width:i,height:s,data:a}=await e(o);return{width:i,height:s,data:a}}}),n.register("5vM4g",function(t,e){t.exports=import("./"+n("gC69E").resolve("cLt5s")).then(()=>n("iyI0k"))}),n.register("4RLZr",function(t,r){e(t.exports,"useState",function(){return b}),e(t.exports,"useReducer",function(){return _}),e(t.exports,"useEffect",function(){return v}),e(t.exports,"useLayoutEffect",function(){return w}),e(t.exports,"useRef",function(){return E}),e(t.exports,"useMemo",function(){return x}),e(t.exports,"useImperativeHandle",function(){return T}),e(t.exports,"useCallback",function(){return O}),e(t.exports,"useContext",function(){return S}),e(t.exports,"useDebugValue",function(){return A}),e(t.exports,"useId",function(){return P});var o,i,s,a,u=n("10mKg"),l=0,c=[],p=[],h=u.options.__b,f=u.options.__r,d=u.options.diffed,y=u.options.__c,g=u.options.unmount;function m(t,e){u.options.__h&&(0,u.options).__h(i,t,l||e),l=0;var r=i.__H||(i.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({__V:p}),r.__[t]}function b(t){return l=1,_(R,t)}function _(t,e,r){var n=m(o++,2);if(n.t=t,!n.__c&&(n.__=[r?r(e):R(void 0,e),function(t){var e=n.__N?n.__N[0]:n.__[0],r=n.t(e,t);e!==r&&(n.__N=[r,n.__[1]],n.__c.setState({}))}],n.__c=i,!i.u)){var s=function(t,e,r){if(!n.__c.__H)return!0;var o=n.__c.__H.__.filter(function(t){return t.__c});if(o.every(function(t){return!t.__N}))return!a||a.call(this,t,e,r);var i=!1;return o.forEach(function(t){if(t.__N){var e=t.__[0];t.__=t.__N,t.__N=void 0,e!==t.__[0]&&(i=!0)}}),!(!i&&n.__c.props===t)&&(!a||a.call(this,t,e,r))};i.u=!0;var a=i.shouldComponentUpdate,u=i.componentWillUpdate;i.componentWillUpdate=function(t,e,r){if(this.__e){var n=a;a=void 0,s(t,e,r),a=n}u&&u.call(this,t,e,r)},i.shouldComponentUpdate=s}return n.__N||n.__}function v(t,e){var r=m(o++,3);!u.options.__s&&N(r.__H,e)&&(r.__=t,r.i=e,i.__H.__h.push(r))}function w(t,e){var r=m(o++,4);!u.options.__s&&N(r.__H,e)&&(r.__=t,r.i=e,i.__h.push(r))}function E(t){return l=5,x(function(){return{current:t}},[])}function T(t,e,r){l=6,w(function(){return"function"==typeof t?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},null==r?r:r.concat(t))}function x(t,e){var r=m(o++,7);return N(r.__H,e)?(r.__V=t(),r.i=e,r.__h=t,r.__V):r.__}function O(t,e){return l=8,x(function(){return t},e)}function S(t){var e=i.context[t.__c],r=m(o++,9);return r.c=t,e?(null==r.__&&(r.__=!0,e.sub(i)),e.props.value):t.__}function A(t,e){u.options.useDebugValue&&(0,u.options).useDebugValue(e?e(t):t)}function P(){var t=m(o++,11);if(!t.__){for(var e=i.__v;null!==e&&!e.__m&&null!==e.__;)e=e.__;var r=e.__m||(e.__m=[0,0]);t.__="P"+r[0]+"-"+r[1]++}return t.__}function k(){for(var t;t=c.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(I),t.__H.__h.forEach(C),t.__H.__h=[]}catch(e){t.__H.__h=[],(0,u.options).__e(e,t.__v)}}u.options.__b=function(t){i=null,h&&h(t)},u.options.__r=function(t){f&&f(t),o=0;var e=(i=t.__c).__H;e&&(s===i?(e.__h=[],i.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=p,t.__N=t.i=void 0})):(e.__h.forEach(I),e.__h.forEach(C),e.__h=[],o=0)),s=i},u.options.diffed=function(t){d&&d(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==c.push(e)&&a===u.options.requestAnimationFrame||((a=(0,u.options).requestAnimationFrame)||function(t){var e,r=function(){clearTimeout(n),D&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(r,100);D&&(e=requestAnimationFrame(r))})(k)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==p&&(t.__=t.__V),t.i=void 0,t.__V=p})),s=i=null},u.options.__c=function(t,e){e.some(function(t){try{t.__h.forEach(I),t.__h=t.__h.filter(function(t){return!t.__||C(t)})}catch(r){e.some(function(t){t.__h&&(t.__h=[])}),e=[],(0,u.options).__e(r,t.__v)}}),y&&y(t,e)},u.options.unmount=function(t){g&&g(t);var e,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(t){try{I(t)}catch(t){e=t}}),r.__H=void 0,e&&(0,u.options).__e(e,r.__v))};var D="function"==typeof requestAnimationFrame;function I(t){var e=i,r=t.__c;"function"==typeof r&&(t.__c=void 0,r()),i=e}function C(t){var e=i;t.__c=t.__(),i=e}function N(t,e){return!t||t.length!==e.length||e.some(function(e,r){return e!==t[r]})}function R(t,e){return"function"==typeof e?e(t):e}}),n.register("eFTSY",function(t,e){t.exports=JSON.parse('{"name":"ordered-dither-maker","version":"1.13.2","description":"tool for creating ordered dither threshold textures","scripts":{"start":"parcel index.html","build":"npm run build:cleanup && npm run build:parcel && npm run build:sw","build:cleanup":"rm -rf .parcel-cache && rm -rf docs","build:parcel":"parcel build index.html --dist-dir docs --no-source-maps --public-url ./","build:sw":"workbox generateSW","postversion":"npm run build","postinstall":"sed -i \'/user-agent/d\' node_modules/flickr-sdk/lib/request.js"},"author":"Sean S. LeBlanc <sean.s.leblanc@gmail.com>","license":"MIT","repository":"github:seleb/ordered-dither-maker","browserslist":"> 0.5%, last 2 versions, not dead","alias":{"react":"preact/compat","react-dom":"preact/compat","react-dom/test-utils":"preact/test-utils","react/jsx-runtime":"preact/jsx-runtime"},"devDependencies":{"@parcel/packager-raw-url":"^2.9.3","@parcel/transformer-jsonld":"^2.9.3","@parcel/transformer-webmanifest":"^2.9.3","@types/compute-gcd":"^1.2.0","@types/file-saver":"^2.0.5","assert":"^2.1.0","browserify-zlib":"^0.2.0","buffer":"^6.0.3","events":"^3.3.0","parcel":"^2.9.3","process":"^0.11.10","querystring-es3":"^0.2.1","stream-browserify":"^3.0.0","string_decoder":"^1.3.0","timers-browserify":"^2.0.12","typescript":"^5.2.2","util":"^0.12.5","workbox-cli":"^7.0.0"},"dependencies":{"canvas-toBlob":"^1.0.0","compute-gcd":"^1.2.1","dialog-polyfill":"^0.5.6","draw-1-bit":"^1.1.1","file-saver":"^2.0.5","flickr-sdk":"^6.2.1","just-give-me-the-pixels":"^1.0.3","preact":"^10.18.1","reset-css":"^5.0.2"},"release":{"branches":["+([0-9])?(.{+([0-9]),x}).x","main"],"plugins":["@semantic-release/commit-analyzer","@semantic-release/release-notes-generator","@semantic-release/changelog",["@semantic-release/npm",{"npmPublish":false}],"@semantic-release/github",["@semantic-release/git",{"assets":["docs/*","README.md","CHANGELOG.md","package.json","package-lock.json"]}]]}}')}),n.register("ijwcO",function(t,r){e(t.exports,"fragment",function(){return n});let n=`
precision mediump float;
uniform sampler2D texPreview;
uniform sampler2D texDither;
uniform vec2 resolution;
uniform vec2 ditherSize;
uniform float scale;
uniform float posterize;
uniform float grayscale;
uniform float contrast;
uniform float brightness;
void main() {
	vec2 coord = gl_FragCoord.xy;
	coord -= mod(coord, scale);
	vec2 uvDither = fract((coord + vec2(0.5)) / (ditherSize.xy * scale));
	vec2 uvPreview = coord.xy / resolution;
	vec3 col = (texture2D(texPreview, uvPreview).rgb - 0.5 + (brightness - 1.0)) * contrast + 0.5;
	vec3 limit = texture2D(texDither, uvDither).rgb;

	// posterization
	vec3 raw = grayscale < 0.5 ? col : vec3(dot(col.rgb, vec3(0.299, 0.587, 0.114)));
	vec3 posterized = raw - mod(raw, 1.0/posterize);

	// dithering
	vec3 dither = step(limit, (raw-posterized)*posterize)/posterize;

	// output
	gl_FragColor = vec4(posterized + dither, 1.0);
}
`}),n.register("kTiDX",function(t,r){// returns the gl context
// if one doesn't exist,
// creates it then returns it
function n(t,e){if(!n.context&&(n.context=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),!n.context))throw"No WebGL support";return n.context}e(t.exports,"default",function(){return n}),e(t.exports,"Shader",function(){return o}),e(t.exports,"Texture",function(){return i});class o{constructor(t,e){this.gl=new n,this.vertSource=t.trim(),this.fragSource=e.trim(),this.program=this.gl.createProgram();try{this.vertShader=this.compileShader(this.vertSource,this.gl.VERTEX_SHADER),this.fragShader=this.compileShader(this.fragSource,this.gl.FRAGMENT_SHADER)}catch(t){throw this.gl.deleteProgram(this.program),delete this.program,console.error("Couldn't create shader: ",t),t}this.gl.attachShader(this.program,this.vertShader),this.gl.deleteShader(this.vertShader),delete this.vertShader,this.gl.attachShader(this.program,this.fragShader),this.gl.deleteShader(this.fragShader),delete this.fragShader,this.gl.linkProgram(this.program)}/**
	 * Compiles shader source code into bytecode
	 *
	 * @param  {string} source Shader source code in plain text format
	 * @param  {enum} type     Shader type (e.g. gl.VERTEX_SHADER)
	 * @return {object}          Compiled shader
	 */compileShader(t,e){try{var r=this.gl.createShader(e);if(this.gl.shaderSource(r,t),this.gl.compileShader(r),!this.gl.getShaderParameter(r,this.gl.COMPILE_STATUS))throw this.gl.getShaderInfoLog(r);return r}catch(r){throw console.error(`Couldn't compile shader (${e}):
${t.split("\n").map((t,e)=>`${e+1}: ${t}`).join("\n")}
`,r),r}}/**
	 * Tells GL to use this shader as the current program
	 */useProgram(){this.gl.useProgram(this.program)}}class i{constructor(t,e,r){this.gl=new n,this.source=t,this.texture=this.gl.createTexture(),this.bind(e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,r?this.gl.NEAREST:this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,r?this.gl.NEAREST:this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}/**
	 * Updates the texture from its source
	 */update(){this.bind(),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,this.source),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}/**
	 * Tells GL to use this texture
	 * @param {int} id The texture bound is `gl.TEXTURE0 + id`; default: 0
	 */bind(t){var e=t||this.lastBoundId||0;this.gl.activeTexture(this.gl.TEXTURE0+e),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.lastBoundId=e}}}),n.register("66iJJ",function(t,r){e(t.exports,"Grid",function(){return a});var o=n("9BXUG"),i=n("7KycA"),s=n("4RLZr");function a({value:t,locked:e,immediate:r,setAll:n,setOne:a,...u}){let[l,c]=(0,s.useMemo)(()=>[t[0].length,t.length],[t]),p=(0,s.useRef)();(0,s.useLayoutEffect)(()=>{p.current=new i.default({width:0,height:0})},[p]);let h=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(r){function t(t){a(t.detail.x,t.detail.y,t.detail.value)}return p.current.addEventListener("draw",t),()=>{p.current.removeEventListener("draw",t)}}function e(){n(Array(c).fill(0).map((t,e)=>Array(l).fill(0).map((t,r)=>p.current.fill(r,e))))}return p.current.addEventListener("drawend",e),()=>{p.current.removeEventListener("drawend",e)}},[l,c,r,a,n]),(0,s.useLayoutEffect)(()=>{let t=h.current;t&&t.appendChild(p.current.canvas)},[h]),(0,s.useLayoutEffect)(()=>{p.current.resize(l,c),p.current.render()},[l,c]),(0,s.useLayoutEffect)(()=>{t.forEach((t,e)=>{t.forEach((t,r)=>{p.current.fill(r,e,t)})}),p.current.render()},[t]),(0,s.useLayoutEffect)(()=>{e.forEach((t,e)=>{t.forEach((t,r)=>{p.current.lock(r,e,t)})}),p.current.render()},[e]),/*#__PURE__*/(0,o.jsx)("div",{...u,className:"grid",ref:h})}}),n.register("7KycA",function(r,o){e(r.exports,"default",function(){return a});var i=n("5rTbo");function s(t,e){return[t,e].join(",")}class a{constructor({width:t,height:e,gridSize:r=1,gridLimit:n=16,colorBg:o="#000",colorFill:i="#FFF",colorGrid:a="#333",colorHover:u="#333",filled:l={},locked:c={}}){this.x=-1,this.y=-1,this.px=-1,this.py=-1,this.hovered=!1,this.onCanvasMove=t=>{this.move(t)},this.onWindowMove=t=>{this.move(t)},this.onDown=t=>{if(0!==t.button||this.locked[s(this.x,this.y)])return;this.canvas.removeEventListener("mousemove",this.onCanvasMove),this.canvas.removeEventListener("mouseout",this.onMouseOut),window.addEventListener("mousemove",this.onWindowMove),window.addEventListener("mouseup",this.onUp);let e=!this.filled[s(this.x,this.y)];this.filling=e,this.canvas.dispatchEvent(new CustomEvent("drawstart",{detail:{x:this.x,y:this.y}})),this.move(t)},this.onMouseOut=()=>{this.hovered=!1,this.render()},this.onUp=()=>{this.filling=void 0,window.removeEventListener("mousemove",this.onWindowMove),window.removeEventListener("mouseup",this.onUp),this.canvas.addEventListener("mousemove",this.onCanvasMove),this.canvas.addEventListener("mouseout",this.onMouseOut),this.canvas.dispatchEvent(new CustomEvent("drawend",{detail:{x:this.x,y:this.y}}))},this.canvas=document.createElement("canvas"),this.canvas.style.imageRendering="pixelated",this.canvas.addEventListener("mousemove",this.onCanvasMove),this.canvas.addEventListener("mousedown",this.onDown),this.canvas.addEventListener("mouseout",this.onMouseOut);try{new ResizeObserver(()=>{this.resizeCanvas()}).observe(this.canvas)}catch{console.warn("ResizeObserver not supported: draw-1-bit will not automatically render on resize")}let p=this.canvas.getContext("2d");if(!p)throw Error("Couldn't create 2D canvas context");this.context=p,this.context.imageSmoothingEnabled=!1,this.width=t,this.height=e,this.gridSize=r,this.gridLimit=n,this.colorBg=o,this.colorFill=i,this.colorGrid=a,this.colorHover=u,this.filled=l,this.locked=c,this.render()}resizeCanvas(){let t=this.canvas.clientWidth,e=this.canvas.clientHeight;this.canvas.width=t*window.devicePixelRatio,this.canvas.height=e*window.devicePixelRatio,this.render()}getPos(t){let e=this.canvas.getBoundingClientRect(),r=this.canvas.width/this.width,n=this.canvas.height/this.height,o=Math.min(r,n),i=(t.clientX-e.left)/e.width,s=(t.clientY-e.top)/e.height;return i-=.5,s-=.5,i*=r/o,s*=n/o,i+=.5,s+=.5,i*=this.width,s*=this.height,[i=Math.floor(i),s=Math.floor(s)]}move(e){let[r,n]=this.getPos(e);this.x=r,this.y=n;let o=this.hovered;if(this.hovered=r>=0&&n>=0&&r<this.width&&n<this.height,r===this.px&&n===this.py&&this.filling===this.pfilling){o!==this.hovered&&this.render();return}void 0!==this.filling&&/*@__PURE__*/t(i)(r,n,this.px,this.py,(t,e)=>{t>=0&&e>=0&&t<this.width&&e<this.height&&!this.locked[s(t,e)]&&this.filled[s(t,e)]!==this.filling&&(this.filled[s(t,e)]=this.filling,this.canvas.dispatchEvent(new CustomEvent("draw",{detail:{x:t,y:e,value:this.filling}})))}),this.px=r,this.py=n,this.pfilling=this.filling,this.render()}/** updates canvas */render(){this.context.save(),this.context.clearRect(0,0,this.canvas.width,this.canvas.height);let t=this.canvas.width/this.width,e=this.canvas.height/this.height,r=Math.min(t,e);this.context.translate((this.canvas.width-this.width*r)/2,(this.canvas.height-this.height*r)/2),this.context.fillStyle=this.colorBg,this.context.fillRect(0,0,this.width*r,this.height*r),this.context.fillStyle=this.colorFill;// fill
for(let t=0;t<this.height;++t)for(let e=0;e<this.width;++e)this.locked[s(e,t)]?(this.context.globalAlpha=.5,this.context.fillRect(Math.floor(e*r),Math.floor(t*r),Math.ceil(1*r),Math.ceil(1*r)),this.context.globalAlpha=1):this.filled[s(e,t)]&&this.context.fillRect(Math.floor(e*r),Math.floor(t*r),Math.ceil(1*r),Math.ceil(1*r));if(// hover
this.context.globalCompositeOperation="difference",this.hovered&&this.x>=0&&this.y>=0&&this.x<this.width&&this.y<this.height&&!this.locked[s(this.x,this.y)]&&(this.context.fillStyle=this.colorHover,this.context.fillRect(this.x*r,this.y*r,1*r,1*r)),// gridlines
this.context.fillStyle=this.colorGrid,r>this.gridLimit){for(let t=0;t<this.height;++t)this.context.fillRect(this.gridSize,Math.floor(t*r),this.width*r-2*this.gridSize,this.gridSize);for(let t=0;t<this.width;++t)this.context.fillRect(Math.floor(t*r),this.gridSize,this.gridSize,this.height*r-2*this.gridSize)}this.context.fillRect(0,0,this.gridSize,this.gridSize),this.context.fillRect(this.width*r-this.gridSize,0,this.gridSize,this.height*r),this.context.fillRect(0,this.height*r-this.gridSize,this.width*r-this.gridSize,this.gridSize),this.context.restore()}/**
     * Sets drawing dimensions
     * @param width
     * @param height
     */resize(t,e){(this.width!==t||this.height!==e)&&(this.width=t,this.height=e,this.resizeCanvas())}lock(t,e,r){if(void 0===r)return this.locked[s(t,e)];this.locked[s(t,e)]=r}fill(t,e,r){if(void 0===r)return this.filled[s(t,e)];this.filled[s(t,e)]=r}/**
     * @param type `'drawstart' | 'draw' | 'drawend'`
     * @param listener
     */addEventListener(...[t,e]){this.canvas.addEventListener(t,e)}/**
     * @param type `'drawstart' | 'draw' | 'drawend'`
     * @param listener
     */removeEventListener(...[t,e]){this.canvas.removeEventListener(t,e)}}}),n.register("5rTbo",function(t,e){t.exports=function(t,e,r,n,o){if(!o){var i=[];o=function(t,e){i.push({x:t,y:e})}}var s=r-t,a=n-e,u=Math.abs(s),l=Math.abs(a),c=0,p=s>0?1:-1,h=a>0?1:-1;if(u>l)for(var f=t,d=e;p<0?f>=r:f<=r;f+=p)o(f,d),(c+=l)<<1>=u&&(d+=h,c-=u);else for(var f=t,d=e;h<0?d>=n:d<=n;d+=h)o(f,d),(c+=u)<<1>=l&&(f+=p,c-=l);return i}}),n.register("hRRxs",function(t,e){t.exports=new URL(n("gC69E").resolve("ca7tc"),import.meta.url).toString()}),n.register("d6gG7",function(t,e){t.exports=new URL(n("gC69E").resolve("bkWOs"),import.meta.url).toString()}),n.register("jKmnw",function(t,e){t.exports=new URL(n("gC69E").resolve("iVRL9"),import.meta.url).toString()}),n.register("laTDe",function(t,e){t.exports=new URL(n("gC69E").resolve("ec478"),import.meta.url).toString()}),n.register("jPTrc",function(t,e){t.exports=new URL(n("gC69E").resolve("72R2y"),import.meta.url).toString()}),n.register("6Ikiy",function(t,e){t.exports=new URL(n("gC69E").resolve("fwrIZ"),import.meta.url).toString()}),n.register("fLtg9",function(t,e){t.exports=new URL(n("gC69E").resolve("2T849"),import.meta.url).toString()}),n.register("jd3e4",function(t,r){e(t.exports,"Modal",function(){return u});var o=n("9BXUG"),i=n("ha2lB"),s=n("8G7zL"),a=n("4RLZr");function u({children:t,close:e,...r}){let n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=n.current;t&&((0,i.default).registerDialog(t),t.showModal(),t.addEventListener("close",e))},[e]),(0,s.createPortal)(/*#__PURE__*/(0,o.jsx)("dialog",{ref:n,"aria-modal":!0,...r,children:t}),document.body)}}),n.register("ha2lB",function(t,r){e(t.exports,"default",function(){return b});// nb. This is for IE10 and lower _only_.
var n=window.CustomEvent;/**
 * Dispatches the passed event to both an "on<type>" handler as well as via the
 * normal dispatch operation. Does not bubble.
 *
 * @param {!EventTarget} target
 * @param {!Event} event
 * @return {boolean}
 */function o(t,e){var r="on"+e.type.toLowerCase();return"function"==typeof t[r]&&t[r](e),t.dispatchEvent(e)}/**
 * Finds the nearest <dialog> from the passed element.
 *
 * @param {Element} el to search from
 * @return {HTMLDialogElement} dialog found
 */function i(t){for(;t;){if("dialog"===t.localName)return /** @type {HTMLDialogElement} */t;t=t.parentElement?t.parentElement:t.parentNode?t.parentNode.host:null}return null}/**
 * Blur the specified element, as long as it's not the HTML body element.
 * This works around an IE9/10 bug - blurring the body causes Windows to
 * blur the whole application.
 *
 * @param {Element} el to blur
 */function s(t){// Find the actual focused element when the active element is inside a shadow root
for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}/**
 * @param {HTMLFormElement} el to check
 * @return {boolean} whether this form has method="dialog"
 */function a(t){return!!(t&&t.hasAttribute("method"))&&"dialog"===t.getAttribute("method").toLowerCase()}/**
 * Determines if an element is attached to the DOM.
 * @param {Element} element to check
 * @return {boolean} whether the element is in DOM
 */function u(t){return t.isConnected||document.body.contains(t)}/**
 * @param {!Event} event
 * @return {?Element}
 */function l(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var r=h.formSubmitter;if(!r){var n=t.target;r=("getRootNode"in n&&n.getRootNode()||document).activeElement}return r&&r.form===e?r:null}/**
 * @param {!Event} event
 */function c(t){if(!t.defaultPrevented){var e=/** @type {!HTMLFormElement} */t.target,r=h.imagemapUseValue,n=l(t);null===r&&n&&(r=n.value);// There should always be a dialog as this handler is added specifically on them, but check just
// in case.
var o=i(e);o&&"dialog"===(n&&n.getAttribute("formmethod")||e.getAttribute("method"))&&(t.preventDefault(),null!=r?o.close(r):o.close())}}/**
 * @param {!HTMLDialogElement} dialog to upgrade
 * @constructor
 */function p(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",c,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(t,{attributes:!0,attributeFilter:["open"]});else{// IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
// seem to fire even if the element was removed as part of a parent removal. Use the removed
// events to force downgrade (useful if removed/immediately added).
var e,r=!1,n=(function(){r?this.downgradeModal():this.maybeHideModal(),r=!1}).bind(this),o=function(o){if(o.target===t){// not for a child element
var i="DOMNodeRemoved";r|=o.type.substr(0,i.length)===i,window.clearTimeout(e),e=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(e){t.addEventListener(e,o)})}// Note that the DOM is observed inside DialogManager while any dialog
// is being displayed as a modal, to catch modal removal from the DOM.
Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}n&&"object"!=typeof n||((n=function(t,e){e=e||{};var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),r}).prototype=window.Event.prototype),p.prototype=/** @type {HTMLDialogElement.prototype} */{get dialog(){return this.dialog_},/**
   * Maybe remove this dialog from the modal top layer. This is called when
   * a modal dialog may no longer be tenable, e.g., when the dialog is no
   * longer open or is no longer part of the DOM.
   */maybeHideModal:function(){this.dialog_.hasAttribute("open")&&u(this.dialog_)||this.downgradeModal()},/**
   * Remove this dialog from the modal top layer, leaving it as a non-modal.
   */downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),// Clear the backdrop and remove from the manager.
this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),h.dm.removeDialog(this))},/**
   * @param {boolean} value whether to open or close this dialog
   */setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},/**
   * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
   * they were on the dialog itself.
   *
   * @param {!Event} e to redirect
   */backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{// Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
// focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
// would not be needed - clicks would move the implicit cursor there.
var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var r=document.createEvent("MouseEvents");r.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(r),t.stopPropagation()},/**
   * Focuses on the first focusable element within the dialog. This will always blur the current
   * focus, even if nothing within the dialog is found.
   */focus_:function(){// Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=/**
 * @param {!DocumentFragment|!Element} hostElement
 * @return {?Element}
 */function t(e){var r=["button","input","keygen","select","textarea"].map(function(t){return t+":not([disabled])"});// TODO(samthor): tabindex values that are not numeric are not focusable.
r.push('[tabindex]:not([disabled]):not([tabindex=""])');// tabindex != "", not disabled
var n=e.querySelector(r.join(", "));if(!n&&"attachShadow"in Element.prototype)for(var o=e.querySelectorAll("*"),i=0;i<o.length&&!(o[i].tagName&&o[i].shadowRoot&&(n=t(o[i].shadowRoot)));i++);return n}(this.dialog_)),s(document.activeElement),t&&t.focus()},/**
   * Sets the zIndex for the backdrop and dialog.
   *
   * @param {number} dialogZ
   * @param {number} backdropZ
   */updateZIndex:function(t,e){if(t<e)throw Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},/**
   * Shows the dialog. If the dialog is already open, this does nothing.
   */show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},/**
   * Show this dialog modally.
   */showModal:function(){if(this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!u(this.dialog_))throw Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!h.dm.pushDialog(this))throw Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");/**
 * @param {Element} el to check for stacking context
 * @return {boolean} whether this el or its parents creates a stacking context
 */(function(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),r=function(t,r){return!(void 0===e[t]||e[t]===r)};if(e.opacity<1||r("zIndex","auto")||r("transform","none")||r("mixBlendMode","normal")||r("filter","none")||r("perspective","none")||"isolate"===e.isolation||"fixed"===e.position||"touch"===e.webkitOverflowScrolling)return!0;t=t.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,h.needsCentering(this.dialog_)?(h.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,// Insert backdrop.
this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),// Focus on whatever inside the dialog.
this.focus_()},/**
   * Closes this HTMLDialogElement. This is optional vs clearing the open
   * attribute, however this fires a 'close' event.
   *
   * @param {string=} opt_returnValue to use as the returnValue
   */close:function(t){if(!this.dialog_.hasAttribute("open"))throw Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);// Triggering "close" event for any attached listeners on the <dialog>.
var e=new n("close",{bubbles:!1,cancelable:!1});o(this.dialog_,e)}};var h={};/**
 * Installs global handlers, such as click listers and native method overrides. These are needed
 * even if a no dialog is registered, as they deal with <form method="dialog">.
 */if(h.reposition=function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,r=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,r)+"px"},h.isInlinePositionSetByStylesheet=function(t){for(var e=0;e<document.styleSheets.length;++e){var r=document.styleSheets[e],n=null;// Some browsers throw on cssRules.
try{n=r.cssRules}catch(t){}if(n)for(var o=0;o<n.length;++o){var i=n[o],s=null;// Ignore errors on invalid selector texts.
try{s=document.querySelectorAll(i.selectorText)}catch(t){}if(s&&/**
 * @param {!NodeList} nodeList to search
 * @param {Node} node to find
 * @return {boolean} whether node is inside nodeList
 */function(t,e){for(var r=0;r<t.length;++r)if(t[r]===e)return!0;return!1}(s,t)){var a=i.style.getPropertyValue("top"),u=i.style.getPropertyValue("bottom");if(a&&"auto"!==a||u&&"auto"!==u)return!0}}}return!1},h.needsCentering=function(t){return"absolute"===window.getComputedStyle(t).position&&("auto"===t.style.top||""===t.style.top)&&("auto"===t.style.bottom||""===t.style.bottom)&&!h.isInlinePositionSetByStylesheet(t)},/**
 * @param {!Element} element to force upgrade
 */h.forceRegisterDialog=function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),"dialog"!==t.localName)throw Error("Failed to register dialog: The element is not a dialog.");new p(/** @type {!HTMLDialogElement} */t)},/**
 * @param {!Element} element to upgrade, if necessary
 */h.registerDialog=function(t){t.showModal||h.forceRegisterDialog(t)},/**
 * @constructor
 */h.DialogManager=function(){/** @type {!Array<!dialogPolyfillInfo>} */this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);// The overlay is used to simulate how a modal dialog blocks the document.
// The blocking dialog is positioned on top of the overlay, and the rest of
// the dialogs on the pending dialog stack are positioned below it. In the
// actual implementation, the modal dialog stacking is controlled by the
// top layer, where z-index has no effect.
this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",(function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}).bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(e){var r=[];e.forEach(function(t){for(var e,n=0;e=t.removedNodes[n];++n)e instanceof Element&&("dialog"===e.localName&&r.push(e),r=r.concat(e.querySelectorAll("dialog")))}),r.length&&t(r)}))},/**
 * Called on the first modal dialog being shown. Adds the overlay and related
 * handlers.
 */h.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},/**
 * Called on the first modal dialog being removed, i.e., when no more modal
 * dialogs are visible.
 */h.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},/**
 * Updates the stacking of all known dialogs.
 */h.DialogManager.prototype.updateStacking=function(){for(var t,e=this.zIndexHigh_,r=0;t=this.pendingDialogStack[r];++r)t.updateZIndex(--e,--e),0===r&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},/**
 * @param {Element} candidate to check if contained or is the top-most modal dialog
 * @return {boolean} whether candidate is contained in top dialog
 */h.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=i(t);){for(var e,r=0;e=this.pendingDialogStack[r];++r)if(e.dialog===t)return 0===r;// only valid if top-most
t=t.parentElement}return!1},h.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),s(/** @type {Element} */e),void 0!==this.forwardTab_)){// move focus only from a tab key
var r=this.pendingDialogStack[0];return r.dialog.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?r.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}},h.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var e=new n("cancel",{bubbles:!1,cancelable:!0}),r=this.pendingDialogStack[0];r&&o(r.dialog,e)&&r.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},/**
 * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
 * removed and immediately readded don't stay modal, they become normal.
 *
 * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
 */h.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach(function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()})},/**
 * @param {!dialogPolyfillInfo} dpi
 * @return {boolean} whether the dialog was allowed
 */h.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=e)&&(1===this.pendingDialogStack.unshift(t)&&this.blockDocument(),this.updateStacking(),!0)},/**
 * @param {!dialogPolyfillInfo} dpi
 */h.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);-1!==e&&(this.pendingDialogStack.splice(e,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},h.dm=new h.DialogManager,h.formSubmitter=null,h.imagemapUseValue=null,void 0===window.HTMLDialogElement){/**
   * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
   * one that returns the correct value.
   */var f=document.createElement("form");if(f.setAttribute("method","dialog"),"dialog"!==f.method){var d=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(d){// nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
// and don't bother to update the element.
var y=d.get;d.get=function(){return a(this)?"dialog":y.call(this)};var g=d.set;/** @this {HTMLElement} */d.set=function(t){return"string"==typeof t&&"dialog"===t.toLowerCase()?this.setAttribute("method",t):g.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",d)}}/**
   * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
   * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
   * document.activeElement.
   */document.addEventListener("click",function(t){if(h.formSubmitter=null,h.imagemapUseValue=null,!t.defaultPrevented){// e.g. a submit which prevents default submission
var e=/** @type {Element} */t.target;if("composedPath"in t&&(e=t.composedPath().shift()||e),e&&a(e.form)){if(!("submit"===e.type&&["button","input"].indexOf(e.localName)>-1)){if(!("input"===e.localName&&"image"===e.type))return;// this is a <input type="image">, which can submit forms
h.imagemapUseValue=t.offsetX+","+t.offsetY}i(e)&&(h.formSubmitter=e)}}},!1),/**
   * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
   * outside a dialog. They get prevented.
   */document.addEventListener("submit",function(t){var e=t.target;if(!i(e)){var r=l(t);"dialog"===(r&&r.getAttribute("formmethod")||e.getAttribute("method"))&&t.preventDefault()}// ignore, handle there
});/**
   * Replace the native HTMLFormElement.submit() method, as it won't fire the
   * submit event and give us a chance to respond.
   */var m=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!a(this))return m.call(this);var t=i(this);t&&t.close()}}var b=h}),n.register("8G7zL",function(t,r){e(t.exports,"useCallback",function(){return n("4RLZr").useCallback}),e(t.exports,"useContext",function(){return n("4RLZr").useContext}),e(t.exports,"useDebugValue",function(){return n("4RLZr").useDebugValue}),e(t.exports,"useEffect",function(){return n("4RLZr").useEffect}),e(t.exports,"useId",function(){return n("4RLZr").useId}),e(t.exports,"useImperativeHandle",function(){return n("4RLZr").useImperativeHandle}),e(t.exports,"useLayoutEffect",function(){return n("4RLZr").useLayoutEffect}),e(t.exports,"useMemo",function(){return n("4RLZr").useMemo}),e(t.exports,"useReducer",function(){return n("4RLZr").useReducer}),e(t.exports,"useRef",function(){return n("4RLZr").useRef}),e(t.exports,"useState",function(){return n("4RLZr").useState}),e(t.exports,"createPortal",function(){return m});var o=n("10mKg"),i=n("4RLZr");function s(t,e){for(var r in t)if("__source"!==r&&!(r in e))return!0;for(var n in e)if("__source"!==n&&t[n]!==e[n])return!0;return!1}function a(t){this.props=t}(a.prototype=new o.Component).isPureReactComponent=!0,a.prototype.shouldComponentUpdate=function(t,e){return s(this.props,t)||s(this.state,e)};var u=o.options.__b;o.options.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),u&&u(t)},"undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref");var l=(o.toChildArray,o.options.__e);o.options.__e=function(t,e,r,n){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return null==e.__e&&(e.__e=r.__e,e.__k=r.__k),o.__c(t,e)}l(t,e,r,n)};var c=o.options.unmount;function p(){this.__u=0,this.t=null,this.__b=null}function h(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function f(){this.u=null,this.o=null}o.options.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&!0===t.__h&&(t.type=null),c&&c(t)},(p.prototype=new o.Component).__c=function(t,e){var r=e.__c,n=this;null==n.t&&(n.t=[]),n.t.push(r);var o=h(n.__v),i=!1,s=function(){i||(i=!0,r.__R=null,o?o(a):a())};r.__R=s;var a=function(){if(!--n.__u){if(n.state.__a){var t,e=n.state.__a;n.__v.__k[0]=function t(e,r,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return t(e,r,n)}),e.__c&&e.__c.__P===r&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}(e,e.__c.__P,e.__c.__O)}for(n.setState({__a:n.__b=null});t=n.t.pop();)t.forceUpdate()}},u=!0===e.__h;n.__u++||u||n.setState({__a:n.__b=n.__v.__k[0]}),t.then(s,s)},p.prototype.componentWillUnmount=function(){this.t=[]},p.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=function t(e,r,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(t){"function"==typeof t.__c&&t.__c()}),e.__c.__H=null),null!=(e=function(t,e){for(var r in e)t[r]=e[r];return t}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=r),e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return t(e,r,n)})),e}(this.__b,r,n.__O=n.__P)}this.__b=null}var i=e.__a&&(0,o.createElement)(o.Fragment,null,t.fallback);return i&&(i.__h=null),[(0,o.createElement)(o.Fragment,null,e.__a?null:t.children),i]};var d=function(t,e,r){if(++r[1]===r[0]&&t.o.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.o.size))for(r=t.u;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;t.u=r=r[2]}};function y(t){return this.getChildContext=function(){return t.context},t.children}function g(t){var e=this,r=t.i;e.componentWillUnmount=function(){(0,o.render)(null,e.l),e.l=null,e.i=null},e.i&&e.i!==r&&e.componentWillUnmount(),e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],appendChild:function(t){this.childNodes.push(t),e.i.appendChild(t)},insertBefore:function(t,r){this.childNodes.push(t),e.i.appendChild(t)},removeChild:function(t){this.childNodes.splice(this.childNodes.indexOf(t)>>>1,1),e.i.removeChild(t)}}),(0,o.render)((0,o.createElement)(y,{context:e.context},t.__v),e.l)}function m(t,e){var r=(0,o.createElement)(g,{__v:t,i:e});return r.containerInfo=e,r}(f.prototype=new o.Component).__a=function(t){var e=this,r=h(e.__v),n=e.o.get(t);return n[0]++,function(o){var i=function(){e.props.revealOrder?(n.push(o),d(e,t,n)):o()};r?r(i):i()}},f.prototype.render=function(t){this.u=null,this.o=new Map;var e=(0,o.toChildArray)(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var r=e.length;r--;)this.o.set(e[r],this.u=[1,0,this.u]);return t.children},f.prototype.componentDidUpdate=f.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,r){d(t,r,e)})};var b="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,v=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,w=/[A-Z0-9]/g,E="undefined"!=typeof document;o.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(o.Component.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var T=o.options.event;function x(){}function O(){return this.cancelBubble}function S(){return this.defaultPrevented}o.options.event=function(t){return T&&(t=T(t)),t.persist=x,t.isPropagationStopped=O,t.isDefaultPrevented=S,t.nativeEvent=t};var A={enumerable:!1,configurable:!0,get:function(){return this.class}},P=o.options.vnode;o.options.vnode=function(t){"string"==typeof t.type&&function(t){var e=t.props,r=t.type,n={};for(var i in e){var s=e[i];if(!("value"===i&&"defaultValue"in e&&null==s||E&&"children"===i&&"noscript"===r||"class"===i||"className"===i)){var a,u=i.toLowerCase();"defaultValue"===i&&"value"in e&&null==e.value?i="value":"download"===i&&!0===s?s="":"ondoubleclick"===u?i="ondblclick":"onchange"!==u||"input"!==r&&"textarea"!==r||(a=e.type,("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(a))?"onfocus"===u?i="onfocusin":"onblur"===u?i="onfocusout":v.test(i)?i=u:-1===r.indexOf("-")&&_.test(i)?i=i.replace(w,"-$&").toLowerCase():null===s&&(s=void 0):u=i="oninput","oninput"===u&&n[i=u]&&(i="oninputCapture"),n[i]=s}}"select"==r&&n.multiple&&Array.isArray(n.value)&&(n.value=(0,o.toChildArray)(e.children).forEach(function(t){t.props.selected=-1!=n.value.indexOf(t.props.value)})),"select"==r&&null!=n.defaultValue&&(n.value=(0,o.toChildArray)(e.children).forEach(function(t){t.props.selected=n.multiple?-1!=n.defaultValue.indexOf(t.props.value):n.defaultValue==t.props.value})),e.class&&!e.className?(n.class=e.class,Object.defineProperty(n,"className",A)):(e.className&&!e.class||e.class&&e.className)&&(n.class=n.className=e.className),t.props=n}(t),t.$$typeof=b,P&&P(t)};var k=o.options.__r;o.options.__r=function(t){k&&k(t),t.__c};var D=o.options.diffed;o.options.diffed=function(t){D&&D(t);var e=t.props,r=t.__e;null!=r&&"textarea"===t.type&&"value"in e&&e.value!==r.value&&(r.value=null==e.value?"":e.value)},o.Fragment,i.useLayoutEffect,i.useState,i.useId,i.useReducer,i.useEffect,i.useLayoutEffect,i.useRef,i.useImperativeHandle,i.useMemo,i.useCallback,i.useContext,i.useDebugValue,o.createElement,o.createContext,o.createRef,o.Fragment,o.Component}),n.register("dD7OB",function(t,r){e(t.exports,"Range",function(){return s});var o=n("9BXUG"),i=n("aXXGx");function s({id:t,setValue:e,...r}){let n=(0,i.useRange)(e);return/*#__PURE__*/(0,o.jsxs)("div",{className:"range",children:[/*#__PURE__*/(0,o.jsx)("input",{...r,id:`${t}-range`,type:"range",onInput:n}),/*#__PURE__*/(0,o.jsx)("input",{...r,id:t,type:"number",onInput:n})]})}}),n.register("aXXGx",function(t,r){e(t.exports,"useCheckbox",function(){return i}),e(t.exports,"useRange",function(){return a}),e(t.exports,"useInt",function(){return u});var o=n("4RLZr");function i(t){return(0,o.useCallback)(e=>{t(e.currentTarget.checked)},[t])}function s({value:t,min:e,max:r,step:n}){if(""===t)return;let o=parseFloat(t);return""!==e&&(o=Math.max(parseFloat(e),o)),""!==r&&(o=Math.min(parseFloat(r),o)),""!==n&&(o-=o%parseFloat(n)),o}function a(t){return(0,o.useCallback)(e=>{let r=parseFloat(e.currentTarget.value),n=s(e.currentTarget);void 0!==n&&(n!==r&&(e.currentTarget.value=n.toString(10)),t(n))},[t])}function u(t){return(0,o.useCallback)(e=>{let r=parseFloat(e.currentTarget.value),n=s(e.currentTarget);void 0!==n&&(n!==r&&(e.currentTarget.value=n.toString(10)),t(n))},[t])}}),n.register("97Yww",function(t,r){e(t.exports,"vertex",function(){return n});let n=`
attribute vec4 position;
void main() {
	gl_Position = position;
}
`});