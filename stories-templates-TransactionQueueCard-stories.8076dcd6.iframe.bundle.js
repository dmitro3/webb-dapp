"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[3713],{"./libs/webb-ui-components/src/components/Chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Chip});var helpers_extends=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),classNames={blue:{active:"text-blue-90 bg-blue-10 dark:text-blue-30 dark:bg-blue-120",disabled:"bg-blue-10 text-blue-40 dark:bg-blue-120 dark:text-blue-90",selected:"border-solid border-2 border-blue-90 dark:border-blue-30"},green:{active:"bg-green-10 text-green-90 dark:bg-green-120 dark:text-green-50",disabled:"bg-green-10 text-green-40 dark:bg-green-120 dark:text-green-90",selected:"border-solid border-2 border-green-90 dark:border-green-50"},purple:{active:"bg-purple-10 text-purple-90 dark:bg-purple-120 dark:text-purple-50",disabled:"bg-purple-10 text-purple-40 dark:bg-purple-120 dark:text-purple-90",selected:"border-solid border-2 border-purple-90 dark:border-purple-50"},red:{active:"bg-red-10 text-red-90 dark:bg-red-120 dark:text-red-50",disabled:"bg-red-10 text-red-40 dark:bg-red-120 dark:text-red-90",selected:"border-solid border-2 border-red-90 dark:border-red-50"},yellow:{active:"bg-yellow-10 text-yellow-90 dark:bg-yellow-120 dark:text-yellow-50",disabled:"bg-yellow-10 text-yellow-40 dark:bg-yellow-120 dark:text-yellow-90",selected:"border-solid border-2 border-yellow-90 dark:border-yellow-30"},grey:{active:"bg-inherit text-mono-120 dark:inherit dark:text-mono-80",disabled:"bg-mono-200/[5%] text-mono-160 dark:bg-mono-0/[5%] dark:text-mono-0",selected:"border-solid border-2 border-mono-120 dark:border-mono-80"}};var _excluded=["children","className","color","isDisabled","isSelected"],Chip=react.forwardRef((function(props,ref){var children=props.children,classNameProp=props.className,_props$color=props.color,color=void 0===_props$color?"green":_props$color,isDisabled=props.isDisabled,isSelected=props.isSelected,restProps=objectWithoutProperties_default()(props,_excluded),baseClsx=(0,react.useMemo)((function(){return"box-border inline-flex items-center gap-2 px-3 py-1.5 rounded-full uppercase text-[12px] leading-[15px] font-bold"}),[]),className=(0,react.useMemo)((function(){var _getChipClassName=function getChipClassName(color,isDisabled,isSelected){var _classNames$color=classNames[color],active=_classNames$color.active,disabled=_classNames$color.disabled,selected=_classNames$color.selected;return{activeOrDisable:isDisabled?disabled:active,selected:isSelected?selected:""}}(color,isDisabled,isSelected),activeOrDisable=_getChipClassName.activeOrDisable,selected=_getChipClassName.selected;return(0,tw_merge.m)(baseClsx,activeOrDisable,selected,classNameProp)}),[baseClsx,color,isDisabled,isSelected,classNameProp]);return react.createElement("span",extends_default()({className},restProps,{ref}),children)}));try{Chip.displayName="Chip",Chip.__docgenInfo={description:'The `Chip` component\n\nProps:\n\n- `color`: The visual style of the badge (default: "green")\n- `isDisabled`: If `true`, the chip will display as disabled state',displayName:"Chip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/webb-ui-components/src/components/Chip/Chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"libs/webb-ui-components/src/components/Chip/Chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}},"./libs/webb-ui-components/src/components/Disclaimer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Disclaimer});var helpers_extends=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),src=__webpack_require__("./libs/icons/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),typography=__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),React=__webpack_require__("./node_modules/react/index.js"),_excluded=["message","variant","className"];var Disclaimer=(0,react.forwardRef)((function(_ref,ref){var message=_ref.message,variant=_ref.variant,className=_ref.className,props=objectWithoutProperties_default()(_ref,_excluded),_useMemo=(0,react.useMemo)((function(){return function getColors(variant){switch(variant){case"info":return{main:"border border-blue-70 bg-blue-10 text-blue-70 dark:bg-blue-120 dark:border-blue-120",text:"text-blue-70 dark:text-blue-50"};case"error":return{main:"border border-red-70 bg-red-10 text-red-70 dark:bg-red-120 dark:border-red-120",text:"text-red-70 dark:text-red-50"};case"warning":return{main:"border border-yellow-70 bg-yellow-10 text-yellow-70 dark:bg-yellow-120 dark:border-yellow-120",text:"text-yellow-70 dark:text-yellow-50"};case"success":return{main:"border border-green-70 bg-green-10 text-green-70 dark:bg-green-120 dark:border-green-120",text:"text-green-70 dark:text-green-50"}}}(variant)}),[variant]),main=_useMemo.main,text=_useMemo.text,disclaimerWrapperClasses=(0,react.useMemo)((function(){return(0,tw_merge.m)(main,"rounded-xl px-3 py-2  flex items-stretch")}),[main]);return React.createElement("div",extends_default()({className:(0,tw_merge.m)(disclaimerWrapperClasses,className)},props,{ref}),React.createElement("div",{className:text},React.createElement(src.xf,{className:"!fill-current pointer-events-none"})),React.createElement("div",{className:"px-2"},React.createElement(typography.Z,{variant:"body4",fw:"semibold",className:text},message)))}));try{Disclaimer.displayName="Disclaimer",Disclaimer.__docgenInfo={description:"",displayName:"Disclaimer",props:{variant:{defaultValue:null,description:"Disclaimer variant will show the fitting colors and icon",name:"variant",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"error"'},{value:'"warning"'},{value:'"success"'}]}},message:{defaultValue:null,description:"Disclaimer text message",name:"message",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/webb-ui-components/src/components/Disclaimer/Disclaimer.tsx#Disclaimer"]={docgenInfo:Disclaimer.__docgenInfo,name:"Disclaimer",path:"libs/webb-ui-components/src/components/Disclaimer/Disclaimer.tsx#Disclaimer"})}catch(__react_docgen_typescript_loader_error){}},"./libs/webb-ui-components/src/components/TokenPairIcons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TokenPairIcons});var helpers_extends=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/extends.js"),extends_default=__webpack_require__.n(helpers_extends),objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),src=__webpack_require__("./libs/icons/src/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),tw_merge=__webpack_require__("./node_modules/tailwind-merge/dist/lib/tw-merge.mjs"),IconWithTooltip=__webpack_require__("./libs/webb-ui-components/src/components/IconWithTooltip/index.ts"),React=__webpack_require__("./node_modules/react/index.js"),_excluded=["token1Symbol","token2Symbol","chainName","className"],TokenPairIcons=(0,react.forwardRef)((function(_ref,ref){var token1Symbol=_ref.token1Symbol,token2Symbol=_ref.token2Symbol,chainName=_ref.chainName,className=_ref.className,props=objectWithoutProperties_default()(_ref,_excluded);return React.createElement("div",extends_default()({},props,{className:(0,tw_merge.m)("flex items-center group/token relative",chainName?"mr-1":"",className),ref}),React.createElement(IconWithTooltip.L,{icon:React.createElement(src.T1,{size:"lg",name:token1Symbol.toLowerCase()}),content:token1Symbol}),React.createElement(IconWithTooltip.L,{icon:React.createElement(src.T1,{size:"lg",name:token2Symbol.toLowerCase()}),content:token2Symbol,overrideTooltipTriggerProps:{className:"-ml-2 transition-all group-hover/token:ml-1"}}),chainName&&React.createElement(src.fq,{name:chainName,className:"absolute top-0 -right-1",width:"12",height:"12"}))}));try{TokenPairIcons.displayName="TokenPairIcons",TokenPairIcons.__docgenInfo={description:"",displayName:"TokenPairIcons",props:{token1Symbol:{defaultValue:null,description:"The first token symbol to display",name:"token1Symbol",required:!0,type:{name:"string"}},token2Symbol:{defaultValue:null,description:"The second token symbol to display",name:"token2Symbol",required:!0,type:{name:"string"}},chainName:{defaultValue:null,description:"The chain name to display",name:"chainName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/webb-ui-components/src/components/TokenPairIcons/TokenPairIcons.tsx#TokenPairIcons"]={docgenInfo:TokenPairIcons.__docgenInfo,name:"TokenPairIcons",path:"libs/webb-ui-components/src/components/TokenPairIcons/TokenPairIcons.tsx#TokenPairIcons"})}catch(__react_docgen_typescript_loader_error){}},"./libs/webb-ui-components/src/stories/templates/TransactionQueueCard.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithFailedTransaction:()=>WithFailedTransaction,WithInAllTransaction:()=>WithInAllTransaction,WithInProgressTransaction:()=>WithInProgressTransaction,WithSuccessTransaction:()=>WithSuccessTransaction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithInProgressTransa,_WithInProgressTransa2,_WithInProgressTransa3,_WithSuccessTransacti,_WithSuccessTransacti2,_WithSuccessTransacti3,_WithFailedTransactio,_WithFailedTransactio2,_WithFailedTransactio3,_WithInAllTransaction,_WithInAllTransaction2,_WithInAllTransaction3,_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_14__=(__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.now.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/react/index.js")),_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./libs/webb-ui-components/src/containers/TransactionProgressCard/index.ts"),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./libs/icons/src/index.ts");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/templates/TransactionQueueCard",component:_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__.$};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_webb_ui_components_containers_TransactionProgressCard__WEBPACK_IMPORTED_MODULE_15__.$,args)};Template.displayName="Template";var Default=Template.bind({});Default.args={transactions:[]};var WithInProgressTransaction=Template.bind({});WithInProgressTransaction.args={transactions:[{method:"Transfer",txStatus:{status:"in-progress",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["USDC","ETH"],token:"ETH",amount:"0.999",id:"123f2",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date,getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){}}]};var WithSuccessTransaction=Template.bind({});WithSuccessTransaction.args={transactions:[{method:"Withdraw",txStatus:{status:"completed",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["USDT","ETH"],token:"ETH",amount:"0.9995",id:"sdfjwo",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date,getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){},onSyncNote:function onSyncNote(){}}]};var WithFailedTransaction=Template.bind({});WithFailedTransaction.args={transactions:[{method:"Withdraw",txStatus:{status:"warning",message:"Generating ZK  proofs..",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["ETH"],token:"ETH",amount:"0.999",id:"123f2",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date,getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){}}]};var WithInAllTransaction=Template.bind({});WithInAllTransaction.args={transactions:[{method:"Withdraw",txStatus:{status:"in-progress",message:"Generating ZK  proofs..",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["USDC","ETH"],token:"ETH",amount:"0.999",id:"123f",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date,getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230SZ",onDetails:function onDetails(){},onDismiss:function onDismiss(){},onSyncNote:function onSyncNote(){}},{method:"Withdraw",txStatus:{status:"completed",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["USDT","ETH"],token:"ETH",amount:"0.9995",id:"123f23dA",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date(Date.now()-36e5),getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){},onSyncNote:function onSyncNote(){}},{method:"Withdraw",txStatus:{status:"warning",message:"Generating ZK  proofs..",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["ETH"],token:"ETH",amount:"0.999",id:"123f2lo",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date(Date.now()-6e4),getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){}},{method:"Transfer",txStatus:{status:"in-progress",recipient:"0xasdfj2r3092430u",txHash:"0xasdfj2r3092430u"},tokens:["USDC","ETH"],token:"ETH",amount:"0.999",id:"123f2op0",wallets:{src:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"}),dist:react__WEBPACK_IMPORTED_MODULE_14__.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_16__.T1,{name:"ETH"})},timestamp:new Date,getExplorerURI:function getExplorerURI(addOrTxHash,variant){return"#"},nativeValue:"1230",onDetails:function onDetails(){},onDismiss:function onDismiss(){}}]},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <TransactionQueueCard {...args} />"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithInProgressTransaction.parameters=_objectSpread(_objectSpread({},WithInProgressTransaction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithInProgressTransa=WithInProgressTransaction.parameters)||void 0===_WithInProgressTransa?void 0:_WithInProgressTransa.docs),{},{source:_objectSpread({originalSource:"args => <TransactionQueueCard {...args} />"},null===(_WithInProgressTransa2=WithInProgressTransaction.parameters)||void 0===_WithInProgressTransa2||null===(_WithInProgressTransa3=_WithInProgressTransa2.docs)||void 0===_WithInProgressTransa3?void 0:_WithInProgressTransa3.source)})}),WithSuccessTransaction.parameters=_objectSpread(_objectSpread({},WithSuccessTransaction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithSuccessTransacti=WithSuccessTransaction.parameters)||void 0===_WithSuccessTransacti?void 0:_WithSuccessTransacti.docs),{},{source:_objectSpread({originalSource:"args => <TransactionQueueCard {...args} />"},null===(_WithSuccessTransacti2=WithSuccessTransaction.parameters)||void 0===_WithSuccessTransacti2||null===(_WithSuccessTransacti3=_WithSuccessTransacti2.docs)||void 0===_WithSuccessTransacti3?void 0:_WithSuccessTransacti3.source)})}),WithFailedTransaction.parameters=_objectSpread(_objectSpread({},WithFailedTransaction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithFailedTransactio=WithFailedTransaction.parameters)||void 0===_WithFailedTransactio?void 0:_WithFailedTransactio.docs),{},{source:_objectSpread({originalSource:"args => <TransactionQueueCard {...args} />"},null===(_WithFailedTransactio2=WithFailedTransaction.parameters)||void 0===_WithFailedTransactio2||null===(_WithFailedTransactio3=_WithFailedTransactio2.docs)||void 0===_WithFailedTransactio3?void 0:_WithFailedTransactio3.source)})}),WithInAllTransaction.parameters=_objectSpread(_objectSpread({},WithInAllTransaction.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithInAllTransaction=WithInAllTransaction.parameters)||void 0===_WithInAllTransaction?void 0:_WithInAllTransaction.docs),{},{source:_objectSpread({originalSource:"args => <TransactionQueueCard {...args} />"},null===(_WithInAllTransaction2=WithInAllTransaction.parameters)||void 0===_WithInAllTransaction2||null===(_WithInAllTransaction3=_WithInAllTransaction2.docs)||void 0===_WithInAllTransaction3?void 0:_WithInAllTransaction3.source)})});var __namedExportsOrder=["Default","WithInProgressTransaction","WithSuccessTransaction","WithFailedTransaction","WithInAllTransaction"]}}]);