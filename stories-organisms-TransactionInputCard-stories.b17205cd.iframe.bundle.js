"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[4187],{"./libs/webb-ui-components/src/stories/organisms/TransactionInputCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Filled:()=>Filled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Filled$parameters,_Filled$parameters2,_Filled$parameters2$d,_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/slicedToArray.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11__),_webb_tools_dapp_types_ChainId__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./libs/dapp-types/src/ChainId.ts"),react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/react/index.js"),_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./libs/webb-ui-components/src/components/TransactionInputCard/index.ts"),React=__webpack_require__("./node_modules/react/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/V2 (WIP)/Organisms/TransactionInputCard"};var Default={render:function render(){return React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Root,null,React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Header,null,React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.ChainSelector,null),React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.MaxAmountButton,null)),React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Body,null))}},FilledComponent=function FilledComponent(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(),_useState2=_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11___default()(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),_useState4=_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_11___default()(_useState3,2),isFixedAmount=_useState4[0],setIsFixedAmount=_useState4[1];return React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Root,{typedChainId:_webb_tools_dapp_types_ChainId__WEBPACK_IMPORTED_MODULE_12__.Th.PolygonTestnet,amount:value,onAmountChange:setValue,maxAmount:3.2,tokenSymbol:"webbETH",isFixedAmount,onIsFixedAmountChange:setIsFixedAmount},React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Header,null,React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.ChainSelector,null),React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.MaxAmountButton,null)),React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Body,null),React.createElement(_components_TransactionInputCard__WEBPACK_IMPORTED_MODULE_14__.ZP.Footer,{labelWithTooltipProps:{info:isFixedAmount?"Fixed amount":"Custom amount"}}))};FilledComponent.displayName="FilledComponent";var Filled={render:function render(){return React.createElement(FilledComponent,null)}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <TransactionInputCard.Root>\n      <TransactionInputCard.Header>\n        <TransactionInputCard.ChainSelector />\n        <TransactionInputCard.MaxAmountButton />\n      </TransactionInputCard.Header>\n\n      <TransactionInputCard.Body />\n    </TransactionInputCard.Root>\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Filled.parameters=_objectSpread(_objectSpread({},Filled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Filled$parameters=Filled.parameters)||void 0===_Filled$parameters?void 0:_Filled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <FilledComponent />\n}"},null===(_Filled$parameters2=Filled.parameters)||void 0===_Filled$parameters2||null===(_Filled$parameters2$d=_Filled$parameters2.docs)||void 0===_Filled$parameters2$d?void 0:_Filled$parameters2$d.source)})});var __namedExportsOrder=["Default","Filled"]}}]);