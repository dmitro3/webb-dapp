"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[4068],{"./libs/webb-ui-components/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B71:()=>_components__WEBPACK_IMPORTED_MODULE_0__.B71,OoM:()=>_components__WEBPACK_IMPORTED_MODULE_0__.OoM,_E_:()=>_components__WEBPACK_IMPORTED_MODULE_0__._E_,bZj:()=>_components__WEBPACK_IMPORTED_MODULE_0__.bZj,jL0:()=>_components__WEBPACK_IMPORTED_MODULE_0__.jL0});var _components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/webb-ui-components/src/components/index.ts");__webpack_require__("./libs/webb-ui-components/src/containers/index.ts"),__webpack_require__("./libs/webb-ui-components/src/typography/index.ts"),__webpack_require__("./libs/webb-ui-components/src/provider/index.tsx"),__webpack_require__("./libs/webb-ui-components/src/utils/index.ts"),__webpack_require__("./libs/webb-ui-components/src/hooks/index.ts")},"./libs/webb-ui-components/src/stories/molecules/Breadcrumbs.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomSeparator:()=>CustomSeparator,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,_CustomSeparator$para,_CustomSeparator$para2,_CustomSeparator$para3,_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/defineProperty.js"),_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10__),_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./libs/webb-ui-components/src/index.ts")),_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./libs/icons/src/index.ts"),React=__webpack_require__("./node_modules/react/index.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_home_runner_work_webb_dapp_webb_dapp_node_modules_nx_js_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_10___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Breadcrumbs",component:_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__.OoM};var Template=function Template(args){return React.createElement(_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__.OoM,args,React.createElement(_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__.B71,args.itemOneProps,args.itemOneChildren),React.createElement(_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__.B71,args.itemTwoProps,args.itemTwoChildren),React.createElement(_webb_tools_webb_ui_components__WEBPACK_IMPORTED_MODULE_12__.B71,args.itemThreeProps,args.itemThreeChildren))};Template.displayName="Template";var Default=Template.bind({});Default.args={itemOneProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__.rN,null)},itemOneChildren:"Tangle Explorer",itemTwoProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__._m,null)},itemTwoChildren:"Keys Overview",itemThreeProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__.ShieldKeyholeIcon,null),isLast:!0},itemThreeChildren:"Keygen details"};var CustomSeparator=Template.bind({});CustomSeparator.args={itemOneProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__.rN,null)},itemOneChildren:"Tangle Explorer",itemTwoProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__._m,null)},itemTwoChildren:"Keys Overview",itemThreeProps:{icon:React.createElement(_webb_tools_icons__WEBPACK_IMPORTED_MODULE_13__.ShieldKeyholeIcon,null),isLast:!0},itemThreeChildren:"Keygen details",separator:">"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <Breadcrumbs {...args}>\n    <BreadcrumbsItem {...args.itemOneProps}>\n      {args.itemOneChildren}\n    </BreadcrumbsItem>\n    <BreadcrumbsItem {...args.itemTwoProps}>\n      {args.itemTwoChildren}\n    </BreadcrumbsItem>\n    <BreadcrumbsItem {...args.itemThreeProps}>\n      {args.itemThreeChildren}\n    </BreadcrumbsItem>\n  </Breadcrumbs>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),CustomSeparator.parameters=_objectSpread(_objectSpread({},CustomSeparator.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomSeparator$para=CustomSeparator.parameters)||void 0===_CustomSeparator$para?void 0:_CustomSeparator$para.docs),{},{source:_objectSpread({originalSource:"args => <Breadcrumbs {...args}>\n    <BreadcrumbsItem {...args.itemOneProps}>\n      {args.itemOneChildren}\n    </BreadcrumbsItem>\n    <BreadcrumbsItem {...args.itemTwoProps}>\n      {args.itemTwoChildren}\n    </BreadcrumbsItem>\n    <BreadcrumbsItem {...args.itemThreeProps}>\n      {args.itemThreeChildren}\n    </BreadcrumbsItem>\n  </Breadcrumbs>"},null===(_CustomSeparator$para2=CustomSeparator.parameters)||void 0===_CustomSeparator$para2||null===(_CustomSeparator$para3=_CustomSeparator$para2.docs)||void 0===_CustomSeparator$para3?void 0:_CustomSeparator$para3.source)})});var __namedExportsOrder=["Default","CustomSeparator"]}}]);