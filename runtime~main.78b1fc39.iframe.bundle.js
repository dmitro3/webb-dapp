(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdD=function(){throw new Error("define cannot be used indirect")},__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({64:"stories-molecules-RelayerInput-stories",84:"stories-molecules-MenuItem-stories",154:"stories-molecules-CheckBoxMenu-stories",182:"stories-molecules-TokenInput-stories",329:"stories-molecules-Disclaimer-stories",412:"stories-molecules-Divider-stories",448:"stories-molecules-Accordion-stories",530:"stories-molecules-Chip-stories",694:"stories-molecules-Socials-stories",1162:"stories-molecules-ChainChip-stories",1247:"stories-organisms-NetworkThresholdCard-stories",1271:"stories-templates-WithdrawConfirm-stories",1581:"stories-molecules-Button-stories",1726:"stories-molecules-AmountMenu-stories",1759:"stories-molecules-ShieldedAssetInput-stories",1779:"stories-templates-DepositCard-stories",1960:"stories-molecules-Stats-stories",2612:"stories-templates-TransactionProccessingCard-stories",2676:"stories-molecules-TokenRing-stories",2876:"stories-atoms-Typography-stories",2952:"stories-molecules-Timeline-stories",3040:"stories-molecules-Tooltip-stories",3147:"stories-templates-TransferConfirm-stories",3541:"stories-templates-WithdrawCard-stories",3713:"stories-templates-TransactionQueueCard-stories",3865:"stories-molecules-DropdownMenu-stories",4068:"stories-molecules-Breadcrumbs-stories",4161:"stories-molecules-BottomDialog-stories",4339:"stories-molecules-LabelWithValue-stories",4378:"stories-molecules-AmountInput-stories",4390:"stories-molecules-RecipientInput-stories",4408:"stories-organisms-Modal-stories",4531:"stories-molecules-ConnectWalletMobileButton-stories",4583:"stories-organisms-KeyCard-stories",4807:"stories-molecules-Switcher-stories",4830:"stories-molecules-Checkbox-stories",5142:"stories-molecules-ThemeSwitcher-stories",5195:"stories-molecules-ChainIcon-stories",5310:"stories-molecules-TopNavigationMenu-stories",5347:"stories-templates-WalletConnectionCard-stories",5354:"stories-molecules-Tabs-stories",5671:"stories-molecules-Slider-stories",5679:"stories-molecules-InfoItem-stories",6019:"stories-molecules-TitleWithInfo-stories",6084:"stories-atoms-TangleLogo-stories",6213:"stories-molecules-Alert-stories",6384:"stories-molecules-CopyWithToolTip-stories",6393:"stories-molecules-BridgeInputGroup-stories",6399:"stories-organisms-Sidebar-stories",6543:"stories-molecules-TokenSelector-stories",6552:"stories-molecules-Pagination-stories",6607:"stories-molecules-KeyValueWithButton-stories",6873:"stories-molecules-Input-stories",6991:"stories-Introduction-stories-mdx",7061:"stories-molecules-ThemeToggle-stories",7269:"stories-atoms-Logo-stories",7336:"stories-molecules-FixedAmount-stories",7337:"stories-molecules-TimeProgress-stories",7339:"stories-molecules-ChainInput-stories",7620:"stories-molecules-ErrorFallback-stories",7953:"stories-molecules-Label-stories",7985:"stories-molecules-Avatar-stories",8048:"stories-templates-DepositConfirm-stories",8251:"stories-molecules-Banner-stories",8253:"stories-molecules-AvatarGroup-stories",8687:"stories-templates-TransferCard-stories",8743:"stories-molecules-Progress-stories",8760:"stories-molecules-Collapsible-stories",9299:"stories-molecules-TokenPair-stories",9323:"stories-molecules-IconsGroup-stories",9336:"stories-molecules-Card-stories",9338:"stories-molecules-Footer-stories",9455:"stories-molecules-BreadcrumbsItem-stories",9507:"stories-organisms-KeyStatusCard-stories",9596:"stories-molecules-CardTable-stories",9921:"stories-molecules-TableAndChartTabs-stories"}[chunkId]||chunkId)+"."+{64:"bba59db6",84:"8cb97154",154:"aa3c17db",182:"81175163",268:"e7aa63b2",329:"5e1b1688",358:"f516b4e6",370:"b207ea51",412:"73a30bc8",448:"9faf5cf2",473:"7ca1bb96",530:"990a2444",573:"02b7dc65",609:"298a2d06",694:"9d01c445",710:"f3e54ad0",715:"30d5df1c",842:"e62a14f4",905:"4681edd3",935:"0aa8efbc",937:"9dcc9db0",954:"0079ab02",1004:"c50c135f",1162:"d50afad0",1247:"2849393b",1271:"9bf62dab",1471:"f8bbb526",1489:"f0bb5da8",1581:"ace81bf3",1726:"1fdd3a18",1759:"8e329075",1779:"6e8d7b7d",1841:"27be631a",1919:"9414839c",1960:"3907382f",2027:"f09e11df",2133:"5da24634",2446:"5c485267",2510:"e8704c5b",2598:"dca13c05",2612:"7ad6bca7",2676:"a1911c86",2748:"d3235f43",2871:"4c3c35e1",2876:"0e0c5b44",2886:"bcdbb15f",2916:"b7999c04",2952:"183e3c87",2966:"99a62fd7",3019:"dcbb06f4",3040:"beee82fd",3147:"338708ba",3167:"2b1a4ffb",3335:"500017e0",3467:"55a26d03",3480:"638ad9fd",3541:"d0c6d8c3",3592:"ad5c29f6",3635:"91b3f462",3713:"70cbc349",3838:"af5025fb",3865:"4c3a8562",4068:"8ffa3cb3",4076:"f6e522ea",4107:"2e3c9d51",4161:"609eb267",4339:"d039b09f",4378:"41665603",4390:"8d5fdbf5",4408:"7a72c424",4531:"c27975a7",4583:"00613f0b",4712:"6231d29f",4764:"87bb99ce",4799:"76eb1a87",4807:"b1d6ec87",4830:"51089808",4857:"d43d027c",5039:"fff94f0d",5142:"7f850fe4",5195:"5be75b11",5211:"fe804f91",5310:"3416830b",5347:"a54b5bd2",5354:"ef6fecdf",5406:"2bf8897b",5658:"80c56016",5671:"5af4582e",5674:"7aaed775",5679:"4184473c",5944:"6968cb25",5947:"c0d5b9d2",5978:"25f8f85d",5992:"62dfa5b0",6019:"0787e350",6025:"01792ba1",6061:"570391c3",6078:"36a747a9",6084:"439e282c",6213:"8aaa7b40",6380:"b68a017d",6384:"865156f2",6393:"2b1487eb",6399:"e2af83f4",6410:"0e66733b",6543:"111bc92c",6552:"8df955fd",6607:"fdcd3c31",6726:"e91272ae",6873:"82c87b56",6880:"016d2054",6962:"9ba83a33",6991:"e543d69f",7061:"128c8ff1",7083:"a6b57cdb",7098:"76159e36",7176:"ea6aed3d",7239:"8efda018",7269:"6e107ca9",7285:"ea1a9528",7336:"68cfee61",7337:"9d505708",7339:"5877399f",7560:"0dce1825",7620:"94e76e39",7665:"54c780ba",7862:"9773ef0d",7881:"465fd820",7953:"0ec0315f",7985:"fd25141f",8020:"ef775fef",8048:"7bf9f8aa",8123:"527cd4dc",8174:"8fb36619",8217:"0d10a8ee",8251:"fead451e",8253:"0389f494",8268:"72d14237",8448:"27d73e20",8532:"470f9110",8615:"29b4c4a5",8669:"ced0bb3b",8684:"2d9dd9a2",8687:"72145796",8704:"87048eaf",8743:"5dd9d017",8760:"936a36ba",8795:"ba1cbfa0",8800:"5b4e7df2",8825:"4646ba2d",8984:"ad45be7e",9047:"f044e1af",9066:"4538d2ab",9226:"fb49ba49",9286:"9f1a571b",9297:"7ea2c12b",9299:"d7a5eded",9323:"056a4d06",9336:"3f216cb0",9338:"f32cb137",9455:"a0121752",9485:"d9111cef",9507:"3ac8d437",9596:"718d5341",9601:"16899fa9",9617:"c1cf7a4e",9742:"404504f4",9851:"7e9ee700",9921:"953f8a3b"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="webb-monorepo:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","webb-monorepo:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();