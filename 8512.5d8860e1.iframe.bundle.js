(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[8512],{"./node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{XB:()=>$5cb92bef7577960e$export$177fb62ff3ec1f22});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs");let $5cb92bef7577960e$var$originalBodyPointerEvents;const $5cb92bef7577960e$var$DismissableLayerContext=(0,react.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),$5cb92bef7577960e$export$177fb62ff3ec1f22=(0,react.forwardRef)(((props,forwardedRef)=>{var _node$ownerDocument;const{disableOutsidePointerEvents=!1,onEscapeKeyDown,onPointerDownOutside,onFocusOutside,onInteractOutside,onDismiss,...layerProps}=props,context=(0,react.useContext)($5cb92bef7577960e$var$DismissableLayerContext),[node1,setNode]=(0,react.useState)(null),ownerDocument=null!==(_node$ownerDocument=null==node1?void 0:node1.ownerDocument)&&void 0!==_node$ownerDocument?_node$ownerDocument:null===globalThis||void 0===globalThis?void 0:globalThis.document,[,force]=(0,react.useState)({}),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setNode(node))),layers=Array.from(context.layers),[highestLayerWithOutsidePointerEventsDisabled]=[...context.layersWithOutsidePointerEventsDisabled].slice(-1),highestLayerWithOutsidePointerEventsDisabledIndex=layers.indexOf(highestLayerWithOutsidePointerEventsDisabled),index=node1?layers.indexOf(node1):-1,isBodyPointerEventsDisabled=context.layersWithOutsidePointerEventsDisabled.size>0,isPointerEventsEnabled=index>=highestLayerWithOutsidePointerEventsDisabledIndex,pointerDownOutside=function $5cb92bef7577960e$var$usePointerDownOutside(onPointerDownOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handlePointerDownOutside=(0,react_use_callback_ref_dist.W)(onPointerDownOutside),isPointerInsideReactTreeRef=(0,react.useRef)(!1),handleClickRef=(0,react.useRef)((()=>{}));return(0,react.useEffect)((()=>{const handlePointerDown=event=>{if(event.target&&!isPointerInsideReactTreeRef.current){const eventDetail={originalEvent:event};function handleAndDispatchPointerDownOutsideEvent(){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.pointerDownOutside",handlePointerDownOutside,eventDetail,{discrete:!0})}"touch"===event.pointerType?(ownerDocument.removeEventListener("click",handleClickRef.current),handleClickRef.current=handleAndDispatchPointerDownOutsideEvent,ownerDocument.addEventListener("click",handleClickRef.current,{once:!0})):handleAndDispatchPointerDownOutsideEvent()}isPointerInsideReactTreeRef.current=!1},timerId=window.setTimeout((()=>{ownerDocument.addEventListener("pointerdown",handlePointerDown)}),0);return()=>{window.clearTimeout(timerId),ownerDocument.removeEventListener("pointerdown",handlePointerDown),ownerDocument.removeEventListener("click",handleClickRef.current)}}),[ownerDocument,handlePointerDownOutside]),{onPointerDownCapture:()=>isPointerInsideReactTreeRef.current=!0}}((event=>{const target=event.target,isPointerDownOnBranch=[...context.branches].some((branch=>branch.contains(target)));isPointerEventsEnabled&&!isPointerDownOnBranch&&(null==onPointerDownOutside||onPointerDownOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument),focusOutside=function $5cb92bef7577960e$var$useFocusOutside(onFocusOutside,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const handleFocusOutside=(0,react_use_callback_ref_dist.W)(onFocusOutside),isFocusInsideReactTreeRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleFocus=event=>{if(event.target&&!isFocusInsideReactTreeRef.current){$5cb92bef7577960e$var$handleAndDispatchCustomEvent("dismissableLayer.focusOutside",handleFocusOutside,{originalEvent:event},{discrete:!1})}};return ownerDocument.addEventListener("focusin",handleFocus),()=>ownerDocument.removeEventListener("focusin",handleFocus)}),[ownerDocument,handleFocusOutside]),{onFocusCapture:()=>isFocusInsideReactTreeRef.current=!0,onBlurCapture:()=>isFocusInsideReactTreeRef.current=!1}}((event=>{const target=event.target;[...context.branches].some((branch=>branch.contains(target)))||(null==onFocusOutside||onFocusOutside(event),null==onInteractOutside||onInteractOutside(event),event.defaultPrevented||null==onDismiss||onDismiss())}),ownerDocument);return function $addc16e1bbe58fd0$export$3a72a57244d6e765(onEscapeKeyDownProp,ownerDocument=(null===globalThis||void 0===globalThis?void 0:globalThis.document)){const onEscapeKeyDown=(0,react_use_callback_ref_dist.W)(onEscapeKeyDownProp);(0,react.useEffect)((()=>{const handleKeyDown=event=>{"Escape"===event.key&&onEscapeKeyDown(event)};return ownerDocument.addEventListener("keydown",handleKeyDown),()=>ownerDocument.removeEventListener("keydown",handleKeyDown)}),[onEscapeKeyDown,ownerDocument])}((event=>{index===context.layers.size-1&&(null==onEscapeKeyDown||onEscapeKeyDown(event),!event.defaultPrevented&&onDismiss&&(event.preventDefault(),onDismiss()))}),ownerDocument),(0,react.useEffect)((()=>{if(node1)return disableOutsidePointerEvents&&(0===context.layersWithOutsidePointerEventsDisabled.size&&($5cb92bef7577960e$var$originalBodyPointerEvents=ownerDocument.body.style.pointerEvents,ownerDocument.body.style.pointerEvents="none"),context.layersWithOutsidePointerEventsDisabled.add(node1)),context.layers.add(node1),$5cb92bef7577960e$var$dispatchUpdate(),()=>{disableOutsidePointerEvents&&1===context.layersWithOutsidePointerEventsDisabled.size&&(ownerDocument.body.style.pointerEvents=$5cb92bef7577960e$var$originalBodyPointerEvents)}}),[node1,ownerDocument,disableOutsidePointerEvents,context]),(0,react.useEffect)((()=>()=>{node1&&(context.layers.delete(node1),context.layersWithOutsidePointerEventsDisabled.delete(node1),$5cb92bef7577960e$var$dispatchUpdate())}),[node1,context]),(0,react.useEffect)((()=>{const handleUpdate=()=>force({});return document.addEventListener("dismissableLayer.update",handleUpdate),()=>document.removeEventListener("dismissableLayer.update",handleUpdate)}),[]),(0,react.createElement)(react_primitive_dist.WV.div,_extends({},layerProps,{ref:composedRefs,style:{pointerEvents:isBodyPointerEventsDisabled?isPointerEventsEnabled?"auto":"none":void 0,...props.style},onFocusCapture:(0,dist.M)(props.onFocusCapture,focusOutside.onFocusCapture),onBlurCapture:(0,dist.M)(props.onBlurCapture,focusOutside.onBlurCapture),onPointerDownCapture:(0,dist.M)(props.onPointerDownCapture,pointerDownOutside.onPointerDownCapture)}))}));function $5cb92bef7577960e$var$dispatchUpdate(){const event=new CustomEvent("dismissableLayer.update");document.dispatchEvent(event)}function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(name,handler,detail,{discrete}){const target=detail.originalEvent.target,event=new CustomEvent(name,{bubbles:!1,cancelable:!0,detail});handler&&target.addEventListener(name,handler,{once:!0}),discrete?(0,react_primitive_dist.jH)(target,event):target.dispatchEvent(event)}},"./node_modules/@radix-ui/react-portal/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{h:()=>$f1701beae083dbae$export$602eac185826482c});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const $f1701beae083dbae$export$602eac185826482c=(0,react.forwardRef)(((props,forwardedRef)=>{var _globalThis$document;const{container=null===globalThis||void 0===globalThis||null===(_globalThis$document=globalThis.document)||void 0===_globalThis$document?void 0:_globalThis$document.body,...portalProps}=props;return container?react_dom.createPortal((0,react.createElement)(dist.WV.div,_extends({},portalProps,{ref:forwardedRef})),container):null}))},"./node_modules/core-js/internals/function-bind.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),NATIVE_BIND=__webpack_require__("./node_modules/core-js/internals/function-bind-native.js"),$Function=Function,concat=uncurryThis([].concat),join=uncurryThis([].join),factories={};module.exports=NATIVE_BIND?$Function.bind:function bind(that){var F=aCallable(this),Prototype=F.prototype,partArgs=arraySlice(arguments,1),boundFunction=function bound(){var args=concat(partArgs,arraySlice(arguments));return this instanceof boundFunction?function(C,argsLength,args){if(!hasOwn(factories,argsLength)){for(var list=[],i=0;i<argsLength;i++)list[i]="a["+i+"]";factories[argsLength]=$Function("C,a","return new C("+join(list,",")+")")}return factories[argsLength](C,args)}(F,args.length,args):F.apply(that,args)};return isObject(Prototype)&&(boundFunction.prototype=Prototype),boundFunction}},"./node_modules/core-js/modules/es.array.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$map=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").map;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js")("map")},{map:function map(callbackfn){return $map(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),bind=__webpack_require__("./node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Dt});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),react_router_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@remix-run/router/dist/router.js"),_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-events"),h="storybook/react-router-v6",o={CLEAR:`${h}/clear`,NAVIGATION:`${h}/navigation`,STORY_LOADED:`${h}/story-loaded`,ROUTE_MATCHES:`${h}/route-matches`,ACTION_INVOKED:`${h}/action_invoked`,ACTION_SETTLED:`${h}/action_settled`,LOADER_INVOKED:`${h}/loader_invoked`,LOADER_SETTLED:`${h}/loader_settled`},P=react__WEBPACK_IMPORTED_MODULE_0__.createContext([]),A=()=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(P),F=()=>{let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),e=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)(),t=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.UO)(),[a]=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.lr)(),n=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.ur)(),s=A(),p={};a.forEach(((u,i)=>{p[i]=u}));let c=(()=>{let r=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)();return`${r.pathname}${r.search}${r.hash}`})(),m=s.map((u=>[u.route.path,u.params]));return u=>{switch(u){case o.STORY_LOADED:{let i={url:c,path:e.pathname,routeParams:t,searchParams:p,routeMatches:m,hash:e.hash,routeState:e.state};return{key:`${o.STORY_LOADED}_${r.current++}`,type:o.STORY_LOADED,data:i}}case o.NAVIGATION:{let i={url:c,path:e.pathname,routeParams:t,searchParams:p,hash:e.hash,routeState:e.state,routeMatches:m,navigationType:n};return{key:`${o.NAVIGATION}_${r.current++}`,type:o.NAVIGATION,data:i}}case o.ROUTE_MATCHES:return{key:`${o.ROUTE_MATCHES}_${r.current++}`,type:o.ROUTE_MATCHES,data:{matches:m}}}}};async function v(r){let a,e=r.clone(),t=e.headers.get("content-type")||"";switch(!0){case t.startsWith("text"):a=await e.text();break;case t.startsWith("application/json"):a=await e.json();break;case t.startsWith("multipart/form-data"):case t.startsWith("application/x-www-form-urlencoded"):a=function tt(r){let e={};return r.forEach(((t,a)=>{t instanceof File?e[a]={filename:t.name,filesize:t.size,filetype:t.type}:e[a]=t})),e}(await e.formData());break;default:await e.arrayBuffer().then((s=>s.byteLength))}return a}var $=({children:r})=>{let e=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),t=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.TH)(),[a,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[s,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[c,m]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),u=F(),i=A(),E=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(function k(){let r={};return r.promise=new Promise(((e,t)=>{r.resolve=e,r.reject=t})),r}());return(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{n(t)})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{s&&E.current.resolve()}),[s]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{m(i);let l=setTimeout((()=>{s||(p(!0),e.emit(o.STORY_LOADED,u(o.STORY_LOADED)))}),0);return()=>clearTimeout(l)}),[s,i]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{void 0!==a&&a.key!==t.key&&E.current.promise.then((()=>{e.emit(o.NAVIGATION,u(o.NAVIGATION))}))}),[t]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{s&&i.length>c.length&&(m(i),e.emit(o.ROUTE_MATCHES,u(o.ROUTE_MATCHES)))}),[i]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r)},H=({children:r,routePath:e,routeParams:t,searchParams:a,routeState:n,browserPath:s,hydrationData:p})=>{let c=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),[m,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),[i,E]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return c.on(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.STORY_ARGS_UPDATED,(()=>{E((R=>R+1))})),(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{let R=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Gn)(e||"",t),f=new URLSearchParams(a).toString(),y={search:f.length>0?`?${f}`:"",state:n};void 0!==s&&(y.pathname=s),void 0===s&&""!==R&&(y.pathname=R),void 0!==l.current&&Object.assign(y,l.current);let d=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.i7)(r),T=(0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.bi)(d,{initialEntries:[y],hydrationData:p});T.subscribe((N=>{l.current=N.location})),u(T)}),[i]),void 0===m?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pG,{router:m,fallbackElement:react__WEBPACK_IMPORTED_MODULE_0__.createElement(lt,null)})};function lt(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Performing initial data load")}var _=()=>async(r,e)=>{switch(r){case o.ACTION_INVOKED:{let{request:t,params:a,context:n}=e,s={url:t.url,method:t.method,body:await v(t)};return{type:o.ACTION_INVOKED,data:{params:a,request:s,context:n}}}case o.ACTION_SETTLED:return{type:o.ACTION_SETTLED,data:e};case o.LOADER_INVOKED:{let{request:t,params:a,context:n}=e,s={url:t.url,method:t.method,body:v(t)};return{type:o.LOADER_INVOKED,data:{params:a,request:s,context:n}}}case o.LOADER_SETTLED:return{type:o.LOADER_SETTLED,data:e}}},Y=({children:r,browserPath:e,routePath:t="*",routeParams:a,routeHandle:n,searchParams:s,routeState:p,outlet:c,hydrationData:m,action:u,loader:i,errorElement:E,shouldRevalidate:l,routeId:R})=>{let f=_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel(),[g,y]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pW.Provider._context=new Proxy(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.pW.Provider._context??{},{set:(N,w,S)=>("_currentValue"===w&&y((I=>void 0!==S&&S.matches.length>I.length?S.matches:I)),Reflect.set(N,w,S))});let d=function Et(r){return null!==r&&"object"==typeof r&&Object.prototype.hasOwnProperty.call(r,"element")}(c)?c:{element:c},T={element:d.element,handle:d.handle,errorElement:d.errorElement,action:void 0!==d.action?K(f,d.action):void 0,loader:void 0!==d.loader?q(f,d.loader):void 0};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(P.Provider,{value:g},react__WEBPACK_IMPORTED_MODULE_0__.createElement(H,{routePath:t,routeParams:a,routeState:p,searchParams:s,browserPath:e,hydrationData:m},react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{id:R,path:t,handle:n,action:void 0!==u?K(f,u):void 0,loader:void 0!==i?q(f,i):void 0,shouldRevalidate:l,errorElement:E,element:react__WEBPACK_IMPORTED_MODULE_0__.createElement($,null,r)},void 0!==d.element&&void 0===d.path&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{index:!0,...T}),void 0!==d.element&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.AW,{path:d.path,...T}))))};function K(r,e){let t=_();return async function(a){if(void 0===e)return;r.emit(o.ACTION_INVOKED,await t(o.ACTION_INVOKED,a));let n=await e(a);return r.emit(o.ACTION_SETTLED,await t(o.ACTION_SETTLED,n)),n}}function q(r,e){let t=_();return async function(a){if(void 0===e)return;r.emit(o.LOADER_INVOKED,await t(o.LOADER_INVOKED,a));let n=await e(a);return r.emit(o.LOADER_SETTLED,await t(o.LOADER_SETTLED,n)),n}}var Dt=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(r,e,{parameters:t={}})=>{let{routePath:a="*",routeParams:n,routeState:s,routeHandle:p,searchParams:c,outlet:m,browserPath:u,loader:i,action:E,errorElement:l,hydrationData:R,shouldRevalidate:f,routeId:g}=t;if("string"!=typeof a)throw new Error("React Router decorator : `path` must be a string");if(void 0!==n&&"object"!=typeof n)throw new Error("React Router decorator : `params` must be an object with strings as values");if(void 0!==c&&"object"!=typeof c)throw new Error("React Router decorator : `search` must be an object with strings as values");return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Y,{browserPath:u,routePath:a,routeParams:n,searchParams:c,routeState:s,routeHandle:p,outlet:m,loader:i,action:E,errorElement:l,hydrationData:R,shouldRevalidate:f,routeId:g},r(e))}})}}]);