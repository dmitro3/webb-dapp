"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[2612],{"./libs/webb-ui-components/src/components/Disclaimer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Disclaimer});var helpers_extends=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),src=__webpack_require__("./libs/icons/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),typography=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),React=__webpack_require__("./node_modules/react/index.js"),_excluded=["message","variant","className"];var Disclaimer=(0,react.forwardRef)((function(_ref,ref){var message=_ref.message,variant=_ref.variant,className=_ref.className,props=objectWithoutProperties_default()(_ref,_excluded),_useMemo=(0,react.useMemo)((function(){return function getColors(variant){switch(variant){case"info":return{main:"border border-blue-70 bg-blue-10 text-blue-70 dark:bg-blue-120 dark:border-blue-120",text:"text-blue-70 dark:text-blue-50"};case"error":return{main:"border border-red-70 bg-red-10 text-red-70 dark:bg-red-120 dark:border-red-120",text:"text-red-70 dark:text-red-50"};case"warning":return{main:"border border-yellow-70 bg-yellow-10 text-yellow-70 dark:bg-yellow-120 dark:border-yellow-120",text:"text-yellow-70 dark:text-yellow-50"};case"success":return{main:"border border-green-70 bg-green-10 text-green-70 dark:bg-green-120 dark:border-green-120",text:"text-green-70 dark:text-green-50"}}}(variant)}),[variant]),main=_useMemo.main,text=_useMemo.text,disclaimerWrapperClasses=(0,react.useMemo)((function(){return(0,tw_merge.m)(main,"rounded-xl px-3 py-2  flex items-stretch")}),[main]);return React.createElement("div",extends_default()({className:(0,tw_merge.m)(disclaimerWrapperClasses,className)},props,{ref}),React.createElement("div",{className:text},React.createElement(src.xf,{className:"!fill-current pointer-events-none"})),React.createElement("div",{className:"px-2"},React.createElement(typography.Z,{variant:"body4",fw:"semibold",className:text},message)))}));try{Disclaimer.displayName="Disclaimer",Disclaimer.__docgenInfo={description:"",displayName:"Disclaimer",props:{variant:{defaultValue:null,description:"Disclaimer variant will show the fitting colors and icon",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'}]}},message:{defaultValue:null,description:"Disclaimer text message",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/webb-ui-components/src/components/Disclaimer/Disclaimer.tsx#Disclaimer"]={docgenInfo:Disclaimer.__docgenInfo,name:"Disclaimer",path:"libs/webb-ui-components/src/components/Disclaimer/Disclaimer.tsx#Disclaimer"})}catch(__react_docgen_typescript_loader_error){}},"./libs/webb-ui-components/src/stories/templates/TransactionProccessingCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/react/index.js")),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./libs/icons/src/index.ts"),_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./libs/webb-ui-components/src/containers/TransactionProgressCard/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/templates/TransactionProgressCard",component:_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__.K};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_13__.createElement(_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__.K,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={method:"Deposit",firedAt:new Date,status:"in-progress",tokens:[react__WEBPACK_IMPORTED_MODULE_13__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_14__.T1,{size:"lg",name:"WEBB"}),react__WEBPACK_IMPORTED_MODULE_13__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_14__.T1,{size:"lg",name:"ETH"})],wallets:{src:react__WEBPACK_IMPORTED_MODULE_13__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_14__.T1,{name:"matic"}),dist:react__WEBPACK_IMPORTED_MODULE_13__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_14__.T1,{name:"ETH"})},label:{tokenURI:"https://polygon.technology/",amount:"0.999",token:"ETH/WEBB"},onDismiss:function onDismiss(){},footer:{isLoading:!1,hasWarning:!0,link:{uri:"#",text:react__WEBPACK_IMPORTED_MODULE_13__.createElement(react__WEBPACK_IMPORTED_MODULE_13__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_13__.createElement("span",{className:"inline-block pr-2",style:{fontSize:18}},"⚠️"),"Deposit Failed")}}},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TransactionProgressCard {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./node_modules/core-js/internals/engine-is-bun.js":module=>{module.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},"./node_modules/core-js/internals/schedulers-fix.js":(module,__unused_webpack_exports,__webpack_require__)=>{var version,global=__webpack_require__("./node_modules/core-js/internals/global.js"),apply=__webpack_require__("./node_modules/core-js/internals/function-apply.js"),isCallable=__webpack_require__("./node_modules/core-js/internals/is-callable.js"),ENGINE_IS_BUN=__webpack_require__("./node_modules/core-js/internals/engine-is-bun.js"),USER_AGENT=__webpack_require__("./node_modules/core-js/internals/engine-user-agent.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),validateArgumentsLength=__webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js"),Function=global.Function,WRAP=/MSIE .\./.test(USER_AGENT)||ENGINE_IS_BUN&&((version=global.Bun.version.split(".")).length<3||0==version[0]&&(version[1]<3||3==version[1]&&0==version[2]));module.exports=function(scheduler,hasTimeArg){var firstParamIndex=hasTimeArg?2:1;return WRAP?function(handler,timeout){var boundArgs=validateArgumentsLength(arguments.length,1)>firstParamIndex,fn=isCallable(handler)?handler:Function(handler),params=boundArgs?arraySlice(arguments,firstParamIndex):[],callback=boundArgs?function(){apply(fn,this,params)}:fn;return hasTimeArg?scheduler(callback,timeout):scheduler(callback)}:scheduler}},"./node_modules/core-js/modules/es.array.map.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$map=__webpack_require__("./node_modules/core-js/internals/array-iteration.js").map;$({target:"Array",proto:!0,forced:!__webpack_require__("./node_modules/core-js/internals/array-method-has-species-support.js")("map")},{map:function map(callbackfn){return $map(this,callbackfn,arguments.length>1?arguments[1]:void 0)}})},"./node_modules/core-js/modules/web.set-interval.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setInterval=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setInterval,!0);$({global:!0,bind:!0,forced:global.setInterval!==setInterval},{setInterval})},"./node_modules/core-js/modules/web.set-timeout.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),global=__webpack_require__("./node_modules/core-js/internals/global.js"),setTimeout=__webpack_require__("./node_modules/core-js/internals/schedulers-fix.js")(global.setTimeout,!0);$({global:!0,bind:!0,forced:global.setTimeout!==setTimeout},{setTimeout})},"./node_modules/core-js/modules/web.timers.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__("./node_modules/core-js/modules/web.set-interval.js"),__webpack_require__("./node_modules/core-js/modules/web.set-timeout.js")}}]);