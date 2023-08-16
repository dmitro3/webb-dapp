/*! For license information please see stories-templates-WithdrawConfirm-stories.2ea0d84b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[1271],{"./libs/webb-ui-components/src/stories/templates/WithdrawConfirm.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),react__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js")),_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./libs/webb-ui-components/src/containers/index.ts"),storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/storybook-addon-react-router-v6/dist/index.mjs");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Templates/WithdrawConfirm",component:_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__.S,decorators:[storybook_addon_react_router_v6__WEBPACK_IMPORTED_MODULE_14__.EN]};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_12__.createElement("div",{className:"flex justify-center"},react__WEBPACK_IMPORTED_MODULE_12__.createElement(_webb_tools_webb_ui_components_containers__WEBPACK_IMPORTED_MODULE_13__.S,args))};Template.displayName="Template";var Default=Template.bind({});Default.args={title:"Withdraw In-Progress",activeChains:["Optimism"],note:"webb://v2:vanchor/1099511627780:109951123431284u182p347130287412083741289341238412472389741382974",amount:1.01,changeAmount:2.02,fee:.001,progress:25,recipientAddress:"0xb507EcE3132875277d05045Bb1C914088A506443",fungibleTokenSymbol:"eth",wrappableTokenSymbol:"weth",relayerAddress:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY",relayerExternalUrl:"https://webb.tools",unshieldedAddress:"0xb507EcE3132875277d05045Bb1C914088A506443",destChain:"Optimism"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => <div className="flex justify-center">\n    <WithdrawConfirm {...args} />\n  </div>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./node_modules/storybook-addon-react-router-v6/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EN:()=>ke});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),react=__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/react-router/dist/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),m="storybook/react-router-v6",l={CLEAR:`${m}/clear`,NAVIGATION:`${m}/navigation`,STORY_LOADED:`${m}/story-loaded`,ROUTE_MATCHES:`${m}/route-matches`,ACTION_INVOKED:`${m}/action_invoked`,ACTION_SETTLED:`${m}/action_settled`,LOADER_INVOKED:`${m}/loader_invoked`,LOADER_SETTLED:`${m}/loader_settled`};var w=react.createContext([]);async function A(e){let r,t=e.clone(),n=t.headers.get("content-type")||"";switch(!0){case n.startsWith("text"):r=await t.text();break;case n.startsWith("application/json"):r=await t.json();break;case n.startsWith("multipart/form-data"):case n.startsWith("application/x-www-form-urlencoded"):r=function F(e){let t={};return e.forEach(((n,r)=>{n instanceof File?t[r]={filename:n.name,filesize:n.size,filetype:n.type}:t[r]=n})),t}(await t.formData())}return r}var V,e,$,x=()=>{let e=(0,react.useRef)(0);return(0,react.useCallback)((async(t,n)=>{e.current++;let r=`${t}_${e.current}`;switch(t){case l.ACTION_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await A(o)},context:a}}}case l.ACTION_SETTLED:return{key:r,type:t,data:n};case l.LOADER_INVOKED:{let{request:o,params:i,context:a}=n;return{key:r,type:t,data:{params:i,request:{url:o.url,method:o.method,body:await A(o)},context:a}}}case l.LOADER_SETTLED:return{key:r,type:t,data:n}}}),[])};function H(){let e=function U(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=x();return(0,react.useCallback)((n=>async function(r){if(void 0===n)return;e.emit(l.ACTION_INVOKED,await t(l.ACTION_INVOKED,r));let o=await n(r);return e.emit(l.ACTION_SETTLED,await t(l.ACTION_SETTLED,o)),o}),[e,t])}(),t=function k(){let e=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),t=x();return(0,react.useCallback)((n=>async function(r){if(void 0===n)return;e.emit(l.LOADER_INVOKED,await t(l.LOADER_INVOKED,r));let o=await n(r);return e.emit(l.LOADER_SETTLED,await t(l.LOADER_SETTLED,o)),o}),[e,t])}(),n=(0,react.useCallback)((r=>r.map((o=>{let{action:i,loader:a,children:s}=o,c={...o};return i&&(c.action=e(i)),a&&(c.loader=t(a)),s&&(c.children=n(s)),c}))),[e,t]);return n}function O(e,t){if(1===e.length&&(void 0===e[0].children||0===e[0].children.length))return[{...e[0],element:t}];let n=e.findIndex((r=>r.useStoryElement));if(-1!==n){let r=Array.from(e);return r.splice(n,1,{...e[n],element:t}),r}return e.map((r=>r.children?{...r,children:O(r.children,t)}:r))}function K(e,t){if(!1===e||null===e||typeof e>"u")throw new Error(t)}function L(e,t){void 0===t&&(t={});let n=e;return n.endsWith("*")&&"*"!==n&&!n.endsWith("/*")&&(function be(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}(!1,'Route path "'+n+'" will be treated as if it were "'+n.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+n.replace(/\*$/,"/*")+'".'),n=n.replace(/\*$/,"/*")),n.replace(/^:(\w+)(\??)/g,((r,o,i)=>{let a=t[o];return"?"===i?a??"":(null==a&&K(!1,'Missing ":'+o+'" param'),a)})).replace(/\/:(\w+)(\??)/g,((r,o,i)=>{let a=t[o];return"?"===i?null==a?"":"/"+a:(null==a&&K(!1,'Missing ":'+o+'" param'),"/"+a)})).replace(/\?/g,"").replace(/(\/?)\*/,((r,o,i,a)=>null==t["*"]?"/*"===a?"/":"":""+o+t["*"]))}(e=V||(V={})).Pop="POP",e.Push="PUSH",e.Replace="REPLACE",function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}($||($={}));var B=["post","put","patch","delete"];new Set(B);var ve=["get",...B];function T(e=[],t="/"){if(1!==e.length)return t;let n=e[0],r=function we(e,t=""){let n=["","/"],r=e.split("/").filter((a=>!n.includes(a))),o=t.split("/").filter((a=>!n.includes(a)));return"/"+[...r,...o].join("/")}(t,n.path);return void 0===n.children||0===n.children.length?r:T(n.children,r)}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function E(e){return 0===arguments.length?[]:Array.isArray(e)?e:[e]}new Set(ve);var P=()=>react.useContext(w);var J=()=>{let e=(0,react.useRef)(0),t=(0,dist.TH)(),n=(0,dist.UO)(),[r]=(0,react_router_dom_dist.lr)(),o=(0,dist.ur)(),i=P(),a=function Y(e){let t={};return e.forEach(((n,r)=>{let o=t[r];"string"!=typeof o?Array.isArray(o)?t[r]=[...o,n]:t[r]=n:t[r]=[o,n]})),t}(r),s=(()=>{let e=(0,dist.TH)();return`${e.pathname}${e.search}${e.hash}`})(),c=i.map((d=>{let f={path:d.route.path};return Object.keys(d.params).length>0&&(f.params=d.params),f})),h={url:s,path:t.pathname,routeParams:n,searchParams:a,hash:t.hash,routeState:t.state,routeMatches:c};return d=>{e.current++;let f=`${d}_${e.current}`;switch(d){case l.STORY_LOADED:return{key:f,type:d,data:h};case l.NAVIGATION:return{key:f,type:d,data:{...h,navigationType:o}};case l.ROUTE_MATCHES:return{key:f,type:d,data:{matches:c}}}}},Q=({children:e})=>{let t=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),n=(0,dist.TH)(),r=P(),o=J(),i=(0,react.useRef)(),a=(0,react.useRef)(),s=(0,react.useRef)(),c=void 0!==i.current,h=c&&n.key!==i.current;return h&&a.current!==n.key&&(t.emit(l.NAVIGATION,o(l.NAVIGATION)),a.current=n.key),h&&r.length>0&&r!==s.current&&t.emit(l.ROUTE_MATCHES,o(l.ROUTE_MATCHES)),!c&&r.length>0&&(t.emit(l.STORY_LOADED,o(l.STORY_LOADED)),i.current=n.key,s.current=r),s.current=r,react.createElement(react.Fragment,null,e)};function X(e){let{renderStory:t,storyContext:n,storyParameters:r={}}=e,{hydrationData:o,routing:i,navigationHistory:a,location:s}=r,c=H(),h=(0,react.useCallback)((({storyContext:f})=>t(f)),[t]),d=(0,react.useMemo)((()=>{let f=function W(e){var t;return void 0===e?[{path:"/"}]:"string"==typeof e?[{path:e}]:(1===(e=E(e)).length&&((t=e[0]).path??(t.path="/")),e)}(i),y=O(c(f),react.createElement(Q,null,react.createElement(h,{storyContext:n}))),{initialEntries:g,initialIndex:b}=function z({navigationHistory:e,location:t,routes:n}){if(void 0!==e){let g,y=[],b=Object.values(e);for(let v=0;v<b.length;v++){let{path:S,pathParams:C,searchParams:oe,hash:ae,state:ie,isInitialLocation:se}=b[v];se&&(g=v);let I=T(n),le=("function"==typeof S?S(I,C??{}):S)??I;y.push({pathname:L(le??"/",C),search:new URLSearchParams(oe).toString(),hash:ae,state:ie})}return g??(g=y.length-1),{initialEntries:y,initialIndex:g}}let{path:r,pathParams:o,searchParams:i,hash:a,state:s}=t??{},c=T(n);return{initialEntries:[{pathname:L(("function"==typeof r?r(c,o??{}):r)??c,o),search:new URLSearchParams(i).toString(),hash:a,state:s}],initialIndex:0}}({navigationHistory:a,location:s,routes:y});return(0,dist.bi)(y,{initialEntries:g,initialIndex:b,hydrationData:o})}),[h,c,o,s,a,i,n]);return react.createElement(dist.pG,{router:d,fallbackElement:react.createElement(_e,null)})}function _e(){return react.createElement("p",null,"Performing initial data load")}var ee=({renderStory:e,storyContext:t,parameters:n})=>{let r=function _(){let[e,t]=(0,react.useState)([]),n=dist.pW;return n.Provider._context=new Proxy(n.Provider._context??{},{set:(r,o,i)=>("_currentValue"===o&&void 0!==i&&t((a=>i.matches.length>a.length?i.matches:a)),Reflect.set(r,o,i))}),e}();return react.createElement(w.Provider,{value:r},react.createElement(X,{renderStory:e,storyContext:t,storyParameters:n}))};function p(e){return function re(e){if(react.isValidElement(e))return!0;switch(!0){case react.isValidElement(e):case"string"==typeof e:case"number"==typeof e:case"boolean"==typeof e:case null===e:case void 0===e:case e instanceof Object&&u(e,Symbol.iterator):return!0}return!1}(e)?{element:e}:e}var ke=(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withRouter",parameterName:"reactRouter",wrapper:(e,t,{parameters:n})=>{let r=function ne(e={}){let t=["location","navigationHistory","routing"];if(Object.keys(e??{}).some((o=>t.includes(o))))return e;let r={routing:{},location:{},hydrationData:void 0};if(u(e,"routePath")&&(r.location.path=e.routePath,r.routing.path=e.routePath),u(e,"routeParams")&&(r.location.pathParams=e.routeParams),u(e,"routeState")&&(r.location.state=e.routeState),u(e,"routeHandle")&&(r.routing.handle=e.routeHandle),u(e,"searchParams")&&(r.location.searchParams=e.searchParams),u(e,"browserPath")&&(r.location.path=e.browserPath),u(e,"loader")&&(r.routing.loader=e.loader),u(e,"action")&&(r.routing.action=e.action),u(e,"errorElement")&&(r.routing.errorElement=e.errorElement),u(e,"hydrationData")&&(r.hydrationData=e.hydrationData),u(e,"shouldRevalidate")&&(r.routing.shouldRevalidate=e.shouldRevalidate),u(e,"routeId")&&(r.routing.id=e.routeId),u(e,"outlet")){let o=p(e.outlet);o.path??(o.path=""),r.routing.children=[o]}return r.routing.useStoryElement=!0,r}(n);return react.createElement(ee,{renderStory:e,storyContext:t,parameters:r})}})}}]);