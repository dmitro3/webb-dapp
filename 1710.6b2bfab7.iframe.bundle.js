"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[1710],{"./node_modules/@radix-ui/react-icons/dist/react-icons.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aoh:()=>Half2Icon,h0n:()=>ExternalLinkIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var _excluded$23=["color"],ExternalLinkIcon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,forwardedRef){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,props=_objectWithoutPropertiesLoose(_ref,_excluded$23);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z",fill:color,fillRule:"evenodd",clipRule:"evenodd"}))})),_excluded$2r=["color"],Half2Icon=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref,forwardedRef){var _ref$color=_ref.color,color=void 0===_ref$color?"currentColor":_ref$color,props=_objectWithoutPropertiesLoose(_ref,_excluded$2r);return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg",Object.assign({width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},props,{ref:forwardedRef}),(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path",{d:"M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM7.49988 1.82689C4.36688 1.8269 1.82707 4.36672 1.82707 7.49972C1.82707 10.6327 4.36688 13.1725 7.49988 13.1726V1.82689Z",fill:color,fillRule:"evenodd",clipRule:"evenodd"}))}))},"./node_modules/core-js/internals/function-bind.js":(module,__unused_webpack_exports,__webpack_require__)=>{var uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),isObject=__webpack_require__("./node_modules/core-js/internals/is-object.js"),hasOwn=__webpack_require__("./node_modules/core-js/internals/has-own-property.js"),arraySlice=__webpack_require__("./node_modules/core-js/internals/array-slice.js"),NATIVE_BIND=__webpack_require__("./node_modules/core-js/internals/function-bind-native.js"),$Function=Function,concat=uncurryThis([].concat),join=uncurryThis([].join),factories={};module.exports=NATIVE_BIND?$Function.bind:function bind(that){var F=aCallable(this),Prototype=F.prototype,partArgs=arraySlice(arguments,1),boundFunction=function bound(){var args=concat(partArgs,arraySlice(arguments));return this instanceof boundFunction?function(C,argsLength,args){if(!hasOwn(factories,argsLength)){for(var list=[],i=0;i<argsLength;i++)list[i]="a["+i+"]";factories[argsLength]=$Function("C,a","return new C("+join(list,",")+")")}return factories[argsLength](C,args)}(F,args.length,args):F.apply(that,args)};return isObject(Prototype)&&(boundFunction.prototype=Prototype),boundFunction}},"./node_modules/core-js/modules/es.function.bind.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),bind=__webpack_require__("./node_modules/core-js/internals/function-bind.js");$({target:"Function",proto:!0,forced:Function.bind!==bind},{bind})}}]);