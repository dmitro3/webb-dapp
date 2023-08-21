"use strict";(self.webpackChunkwebb_monorepo=self.webpackChunkwebb_monorepo||[]).push([[1071],{"./node_modules/@radix-ui/number/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function $ae6933e535247d3d$export$7d15b64cf5a3a4c4(value,[min,max]){return Math.min(max,Math.max(min,value))}__webpack_require__.d(__webpack_exports__,{u:()=>$ae6933e535247d3d$export$7d15b64cf5a3a4c4})},"./node_modules/@radix-ui/react-radio-group/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{z$:()=>$f99a8c78507165f7$export$adb584737d712b70,ck:()=>$f99a8c78507165f7$export$6d08773d2e66f8f2,fC:()=>$f99a8c78507165f7$export$be92b6f5f03c0fe9});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("./node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs");const[$ce77a8961b41be9e$var$createRadioContext,$ce77a8961b41be9e$export$67d2296460f1b002]=(0,react_context_dist.b)("Radio"),[$ce77a8961b41be9e$var$RadioProvider,$ce77a8961b41be9e$var$useRadioContext]=$ce77a8961b41be9e$var$createRadioContext("Radio"),$ce77a8961b41be9e$export$d7b12c4107be0d61=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRadio,name,checked=!1,required,disabled,value="on",onCheck,...radioProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form"));return(0,react.createElement)($ce77a8961b41be9e$var$RadioProvider,{scope:__scopeRadio,checked,disabled},(0,react.createElement)(react_primitive_dist.WV.button,_extends({type:"button",role:"radio","aria-checked":checked,"data-state":$ce77a8961b41be9e$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},radioProps,{ref:composedRefs,onClick:(0,dist.M)(props.onClick,(event=>{checked||null==onCheck||onCheck(),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($ce77a8961b41be9e$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$ce77a8961b41be9e$export$d35a9ffa9a04f9e7=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRadio,forceMount,...indicatorProps}=props,context=$ce77a8961b41be9e$var$useRadioContext("RadioIndicator",__scopeRadio);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||context.checked},(0,react.createElement)(react_primitive_dist.WV.span,_extends({"data-state":$ce77a8961b41be9e$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},indicatorProps,{ref:forwardedRef})))})),$ce77a8961b41be9e$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist.D)(checked),controlSize=(0,react_use_size_dist.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",_extends({type:"radio","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $ce77a8961b41be9e$var$getState(checked){return checked?"checked":"unchecked"}const $f99a8c78507165f7$var$ARROW_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],[$f99a8c78507165f7$var$createRadioGroupContext,$f99a8c78507165f7$export$c547093f11b76da2]=(0,react_context_dist.b)("RadioGroup",[react_roving_focus_dist.Pc,$ce77a8961b41be9e$export$67d2296460f1b002]),$f99a8c78507165f7$var$useRovingFocusGroupScope=(0,react_roving_focus_dist.Pc)(),$f99a8c78507165f7$var$useRadioScope=$ce77a8961b41be9e$export$67d2296460f1b002(),[$f99a8c78507165f7$var$RadioGroupProvider,$f99a8c78507165f7$var$useRadioGroupContext]=$f99a8c78507165f7$var$createRadioGroupContext("RadioGroup"),$f99a8c78507165f7$export$a98f0dcb43a68a25=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRadioGroup,name,defaultValue,value:valueProp,required=!1,disabled=!1,orientation,dir,loop=!0,onValueChange,...groupProps}=props,rovingFocusGroupScope=$f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup),direction=(0,react_direction_dist.gm)(dir),[value,setValue]=(0,react_use_controllable_state_dist.T)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return(0,react.createElement)($f99a8c78507165f7$var$RadioGroupProvider,{scope:__scopeRadioGroup,name,required,disabled,value,onValueChange:setValue},(0,react.createElement)(react_roving_focus_dist.fC,_extends({asChild:!0},rovingFocusGroupScope,{orientation,dir:direction,loop}),(0,react.createElement)(react_primitive_dist.WV.div,_extends({role:"radiogroup","aria-required":required,"aria-orientation":orientation,"data-disabled":disabled?"":void 0,dir:direction},groupProps,{ref:forwardedRef}))))})),$f99a8c78507165f7$export$9f866c100ef519e4=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRadioGroup,disabled,...itemProps}=props,context=$f99a8c78507165f7$var$useRadioGroupContext("RadioGroupItem",__scopeRadioGroup),isDisabled=context.disabled||disabled,rovingFocusGroupScope=$f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup),radioScope=$f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),checked=context.value===itemProps.value,isArrowKeyPressedRef=(0,react.useRef)(!1);return(0,react.useEffect)((()=>{const handleKeyDown=event=>{$f99a8c78507165f7$var$ARROW_KEYS.includes(event.key)&&(isArrowKeyPressedRef.current=!0)},handleKeyUp=()=>isArrowKeyPressedRef.current=!1;return document.addEventListener("keydown",handleKeyDown),document.addEventListener("keyup",handleKeyUp),()=>{document.removeEventListener("keydown",handleKeyDown),document.removeEventListener("keyup",handleKeyUp)}}),[]),(0,react.createElement)(react_roving_focus_dist.ck,_extends({asChild:!0},rovingFocusGroupScope,{focusable:!isDisabled,active:checked}),(0,react.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61,_extends({disabled:isDisabled,required:context.required,checked},radioScope,itemProps,{name:context.name,ref:composedRefs,onCheck:()=>context.onValueChange(itemProps.value),onKeyDown:(0,dist.M)((event=>{"Enter"===event.key&&event.preventDefault()})),onFocus:(0,dist.M)(itemProps.onFocus,(()=>{var _ref$current;isArrowKeyPressedRef.current&&(null===(_ref$current=ref.current)||void 0===_ref$current||_ref$current.click())}))})))})),$f99a8c78507165f7$export$5fb54c671a65c88=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRadioGroup,...indicatorProps}=props,radioScope=$f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);return(0,react.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7,_extends({},radioScope,indicatorProps,{ref:forwardedRef}))})),$f99a8c78507165f7$export$be92b6f5f03c0fe9=$f99a8c78507165f7$export$a98f0dcb43a68a25,$f99a8c78507165f7$export$6d08773d2e66f8f2=$f99a8c78507165f7$export$9f866c100ef519e4,$f99a8c78507165f7$export$adb584737d712b70=$f99a8c78507165f7$export$5fb54c671a65c88},"./node_modules/@radix-ui/react-scroll-area/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Ns:()=>$57acba87d6e25586$export$ac61190d9fc311a9,fC:()=>$57acba87d6e25586$export$be92b6f5f03c0fe9,LW:()=>$57acba87d6e25586$export$9a4e88b92edfce6b,bU:()=>$57acba87d6e25586$export$6521433ed15a34db,l_:()=>$57acba87d6e25586$export$d5c6c08dc2d3ca7});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),number_dist=__webpack_require__("./node_modules/@radix-ui/number/dist/index.mjs"),primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs");const[$57acba87d6e25586$var$createScrollAreaContext,$57acba87d6e25586$export$488468afe3a6f2b1]=(0,react_context_dist.b)("ScrollArea"),[$57acba87d6e25586$var$ScrollAreaProvider,$57acba87d6e25586$var$useScrollAreaContext]=$57acba87d6e25586$var$createScrollAreaContext("ScrollArea"),$57acba87d6e25586$export$ccf8d8d7bbf3c2cc=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeScrollArea,type="hover",dir,scrollHideDelay=600,...scrollAreaProps}=props,[scrollArea,setScrollArea]=(0,react.useState)(null),[viewport,setViewport]=(0,react.useState)(null),[content,setContent]=(0,react.useState)(null),[scrollbarX,setScrollbarX]=(0,react.useState)(null),[scrollbarY,setScrollbarY]=(0,react.useState)(null),[cornerWidth,setCornerWidth]=(0,react.useState)(0),[cornerHeight,setCornerHeight]=(0,react.useState)(0),[scrollbarXEnabled,setScrollbarXEnabled]=(0,react.useState)(!1),[scrollbarYEnabled,setScrollbarYEnabled]=(0,react.useState)(!1),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setScrollArea(node))),direction=(0,react_direction_dist.gm)(dir);return(0,react.createElement)($57acba87d6e25586$var$ScrollAreaProvider,{scope:__scopeScrollArea,type,dir:direction,scrollHideDelay,scrollArea,viewport,onViewportChange:setViewport,content,onContentChange:setContent,scrollbarX,onScrollbarXChange:setScrollbarX,scrollbarXEnabled,onScrollbarXEnabledChange:setScrollbarXEnabled,scrollbarY,onScrollbarYChange:setScrollbarY,scrollbarYEnabled,onScrollbarYEnabledChange:setScrollbarYEnabled,onCornerWidthChange:setCornerWidth,onCornerHeightChange:setCornerHeight},(0,react.createElement)(dist.WV.div,_extends({dir:direction},scrollAreaProps,{ref:composedRefs,style:{position:"relative","--radix-scroll-area-corner-width":cornerWidth+"px","--radix-scroll-area-corner-height":cornerHeight+"px",...props.style}})))})),$57acba87d6e25586$export$a21cbf9f11fca853=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeScrollArea,children,...viewportProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaViewport",__scopeScrollArea),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref,context.onViewportChange);return(0,react.createElement)(react.Fragment,null,(0,react.createElement)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),(0,react.createElement)(dist.WV.div,_extends({"data-radix-scroll-area-viewport":""},viewportProps,{ref:composedRefs,style:{overflowX:context.scrollbarXEnabled?"scroll":"hidden",overflowY:context.scrollbarYEnabled?"scroll":"hidden",...props.style}}),(0,react.createElement)("div",{ref:context.onContentChange,style:{minWidth:"100%",display:"table"}},children)))})),$57acba87d6e25586$export$2fabd85d0eba3c57=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),{onScrollbarXEnabledChange,onScrollbarYEnabledChange}=context,isHorizontal="horizontal"===props.orientation;return(0,react.useEffect)((()=>(isHorizontal?onScrollbarXEnabledChange(!0):onScrollbarYEnabledChange(!0),()=>{isHorizontal?onScrollbarXEnabledChange(!1):onScrollbarYEnabledChange(!1)})),[isHorizontal,onScrollbarXEnabledChange,onScrollbarYEnabledChange]),"hover"===context.type?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarHover,_extends({},scrollbarProps,{ref:forwardedRef,forceMount})):"scroll"===context.type?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarScroll,_extends({},scrollbarProps,{ref:forwardedRef,forceMount})):"auto"===context.type?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto,_extends({},scrollbarProps,{ref:forwardedRef,forceMount})):"always"===context.type?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible,_extends({},scrollbarProps,{ref:forwardedRef})):null})),$57acba87d6e25586$var$ScrollAreaScrollbarHover=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),[visible,setVisible]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const scrollArea=context.scrollArea;let hideTimer=0;if(scrollArea){const handlePointerEnter=()=>{window.clearTimeout(hideTimer),setVisible(!0)},handlePointerLeave=()=>{hideTimer=window.setTimeout((()=>setVisible(!1)),context.scrollHideDelay)};return scrollArea.addEventListener("pointerenter",handlePointerEnter),scrollArea.addEventListener("pointerleave",handlePointerLeave),()=>{window.clearTimeout(hideTimer),scrollArea.removeEventListener("pointerenter",handlePointerEnter),scrollArea.removeEventListener("pointerleave",handlePointerLeave)}}}),[context.scrollArea,context.scrollHideDelay]),(0,react.createElement)(react_presence_dist.z,{present:forceMount||visible},(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarAuto,_extends({"data-state":visible?"visible":"hidden"},scrollbarProps,{ref:forwardedRef})))})),$57acba87d6e25586$var$ScrollAreaScrollbarScroll=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),isHorizontal="horizontal"===props.orientation,debounceScrollEnd=$57acba87d6e25586$var$useDebounceCallback((()=>send("SCROLL_END")),100),[state,send]=function $6c2e24571c90391f$export$3e6543de14f8614f(initialState,machine){return(0,react.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return(0,react.useEffect)((()=>{if("idle"===state){const hideTimer=window.setTimeout((()=>send("HIDE")),context.scrollHideDelay);return()=>window.clearTimeout(hideTimer)}}),[state,context.scrollHideDelay,send]),(0,react.useEffect)((()=>{const viewport=context.viewport,scrollDirection=isHorizontal?"scrollLeft":"scrollTop";if(viewport){let prevScrollPos=viewport[scrollDirection];const handleScroll=()=>{const scrollPos=viewport[scrollDirection];prevScrollPos!==scrollPos&&(send("SCROLL"),debounceScrollEnd()),prevScrollPos=scrollPos};return viewport.addEventListener("scroll",handleScroll),()=>viewport.removeEventListener("scroll",handleScroll)}}),[context.viewport,isHorizontal,send,debounceScrollEnd]),(0,react.createElement)(react_presence_dist.z,{present:forceMount||"hidden"!==state},(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible,_extends({"data-state":"hidden"===state?"hidden":"visible"},scrollbarProps,{ref:forwardedRef,onPointerEnter:(0,primitive_dist.M)(props.onPointerEnter,(()=>send("POINTER_ENTER"))),onPointerLeave:(0,primitive_dist.M)(props.onPointerLeave,(()=>send("POINTER_LEAVE")))})))})),$57acba87d6e25586$var$ScrollAreaScrollbarAuto=(0,react.forwardRef)(((props,forwardedRef)=>{const context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),{forceMount,...scrollbarProps}=props,[visible,setVisible]=(0,react.useState)(!1),isHorizontal="horizontal"===props.orientation,handleResize=$57acba87d6e25586$var$useDebounceCallback((()=>{if(context.viewport){const isOverflowX=context.viewport.offsetWidth<context.viewport.scrollWidth,isOverflowY=context.viewport.offsetHeight<context.viewport.scrollHeight;setVisible(isHorizontal?isOverflowX:isOverflowY)}}),10);return $57acba87d6e25586$var$useResizeObserver(context.viewport,handleResize),$57acba87d6e25586$var$useResizeObserver(context.content,handleResize),(0,react.createElement)(react_presence_dist.z,{present:forceMount||visible},(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarVisible,_extends({"data-state":visible?"visible":"hidden"},scrollbarProps,{ref:forwardedRef})))})),$57acba87d6e25586$var$ScrollAreaScrollbarVisible=(0,react.forwardRef)(((props,forwardedRef)=>{const{orientation="vertical",...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),thumbRef=(0,react.useRef)(null),pointerOffsetRef=(0,react.useRef)(0),[sizes,setSizes]=(0,react.useState)({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),thumbRatio=$57acba87d6e25586$var$getThumbRatio(sizes.viewport,sizes.content),commonProps={...scrollbarProps,sizes,onSizesChange:setSizes,hasThumb:Boolean(thumbRatio>0&&thumbRatio<1),onThumbChange:thumb=>thumbRef.current=thumb,onThumbPointerUp:()=>pointerOffsetRef.current=0,onThumbPointerDown:pointerPos=>pointerOffsetRef.current=pointerPos};function getScrollPosition(pointerPos,dir){return function $57acba87d6e25586$var$getScrollPositionFromPointer(pointerPos,pointerOffset,sizes,dir="ltr"){const thumbSizePx=$57acba87d6e25586$var$getThumbSize(sizes),thumbCenter=thumbSizePx/2,offset=pointerOffset||thumbCenter,thumbOffsetFromEnd=thumbSizePx-offset,minPointerPos=sizes.scrollbar.paddingStart+offset,maxPointerPos=sizes.scrollbar.size-sizes.scrollbar.paddingEnd-thumbOffsetFromEnd,maxScrollPos=sizes.content-sizes.viewport,scrollRange="ltr"===dir?[0,maxScrollPos]:[-1*maxScrollPos,0];return $57acba87d6e25586$var$linearScale([minPointerPos,maxPointerPos],scrollRange)(pointerPos)}(pointerPos,pointerOffsetRef.current,sizes,dir)}return"horizontal"===orientation?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarX,_extends({},commonProps,{ref:forwardedRef,onThumbPositionChange:()=>{if(context.viewport&&thumbRef.current){const offset=$57acba87d6e25586$var$getThumbOffsetFromScroll(context.viewport.scrollLeft,sizes,context.dir);thumbRef.current.style.transform=`translate3d(${offset}px, 0, 0)`}},onWheelScroll:scrollPos=>{context.viewport&&(context.viewport.scrollLeft=scrollPos)},onDragScroll:pointerPos=>{context.viewport&&(context.viewport.scrollLeft=getScrollPosition(pointerPos,context.dir))}})):"vertical"===orientation?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarY,_extends({},commonProps,{ref:forwardedRef,onThumbPositionChange:()=>{if(context.viewport&&thumbRef.current){const offset=$57acba87d6e25586$var$getThumbOffsetFromScroll(context.viewport.scrollTop,sizes);thumbRef.current.style.transform=`translate3d(0, ${offset}px, 0)`}},onWheelScroll:scrollPos=>{context.viewport&&(context.viewport.scrollTop=scrollPos)},onDragScroll:pointerPos=>{context.viewport&&(context.viewport.scrollTop=getScrollPosition(pointerPos))}})):null})),$57acba87d6e25586$var$ScrollAreaScrollbarX=(0,react.forwardRef)(((props,forwardedRef)=>{const{sizes,onSizesChange,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),[computedStyle,setComputedStyle]=(0,react.useState)(),ref=(0,react.useRef)(null),composeRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref,context.onScrollbarXChange);return(0,react.useEffect)((()=>{ref.current&&setComputedStyle(getComputedStyle(ref.current))}),[ref]),(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl,_extends({"data-orientation":"horizontal"},scrollbarProps,{ref:composeRefs,sizes,style:{bottom:0,left:"rtl"===context.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===context.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$57acba87d6e25586$var$getThumbSize(sizes)+"px",...props.style},onThumbPointerDown:pointerPos=>props.onThumbPointerDown(pointerPos.x),onDragScroll:pointerPos=>props.onDragScroll(pointerPos.x),onWheelScroll:(event,maxScrollPos)=>{if(context.viewport){const scrollPos=context.viewport.scrollLeft+event.deltaX;props.onWheelScroll(scrollPos),$57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos,maxScrollPos)&&event.preventDefault()}},onResize:()=>{ref.current&&context.viewport&&computedStyle&&onSizesChange({content:context.viewport.scrollWidth,viewport:context.viewport.offsetWidth,scrollbar:{size:ref.current.clientWidth,paddingStart:$57acba87d6e25586$var$toInt(computedStyle.paddingLeft),paddingEnd:$57acba87d6e25586$var$toInt(computedStyle.paddingRight)}})}}))})),$57acba87d6e25586$var$ScrollAreaScrollbarY=(0,react.forwardRef)(((props,forwardedRef)=>{const{sizes,onSizesChange,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",props.__scopeScrollArea),[computedStyle,setComputedStyle]=(0,react.useState)(),ref=(0,react.useRef)(null),composeRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref,context.onScrollbarYChange);return(0,react.useEffect)((()=>{ref.current&&setComputedStyle(getComputedStyle(ref.current))}),[ref]),(0,react.createElement)($57acba87d6e25586$var$ScrollAreaScrollbarImpl,_extends({"data-orientation":"vertical"},scrollbarProps,{ref:composeRefs,sizes,style:{top:0,right:"ltr"===context.dir?0:void 0,left:"rtl"===context.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$57acba87d6e25586$var$getThumbSize(sizes)+"px",...props.style},onThumbPointerDown:pointerPos=>props.onThumbPointerDown(pointerPos.y),onDragScroll:pointerPos=>props.onDragScroll(pointerPos.y),onWheelScroll:(event,maxScrollPos)=>{if(context.viewport){const scrollPos=context.viewport.scrollTop+event.deltaY;props.onWheelScroll(scrollPos),$57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos,maxScrollPos)&&event.preventDefault()}},onResize:()=>{ref.current&&context.viewport&&computedStyle&&onSizesChange({content:context.viewport.scrollHeight,viewport:context.viewport.offsetHeight,scrollbar:{size:ref.current.clientHeight,paddingStart:$57acba87d6e25586$var$toInt(computedStyle.paddingTop),paddingEnd:$57acba87d6e25586$var$toInt(computedStyle.paddingBottom)}})}}))})),[$57acba87d6e25586$var$ScrollbarProvider,$57acba87d6e25586$var$useScrollbarContext]=$57acba87d6e25586$var$createScrollAreaContext("ScrollAreaScrollbar"),$57acba87d6e25586$var$ScrollAreaScrollbarImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeScrollArea,sizes,hasThumb,onThumbChange,onThumbPointerUp,onThumbPointerDown,onThumbPositionChange,onDragScroll,onWheelScroll,onResize,...scrollbarProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaScrollbar",__scopeScrollArea),[scrollbar,setScrollbar]=(0,react.useState)(null),composeRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setScrollbar(node))),rectRef=(0,react.useRef)(null),prevWebkitUserSelectRef=(0,react.useRef)(""),viewport=context.viewport,maxScrollPos=sizes.content-sizes.viewport,handleWheelScroll=(0,react_use_callback_ref_dist.W)(onWheelScroll),handleThumbPositionChange=(0,react_use_callback_ref_dist.W)(onThumbPositionChange),handleResize=$57acba87d6e25586$var$useDebounceCallback(onResize,10);function handleDragScroll(event){if(rectRef.current){const x=event.clientX-rectRef.current.left,y=event.clientY-rectRef.current.top;onDragScroll({x,y})}}return(0,react.useEffect)((()=>{const handleWheel=event=>{const element=event.target;(null==scrollbar?void 0:scrollbar.contains(element))&&handleWheelScroll(event,maxScrollPos)};return document.addEventListener("wheel",handleWheel,{passive:!1}),()=>document.removeEventListener("wheel",handleWheel,{passive:!1})}),[viewport,scrollbar,maxScrollPos,handleWheelScroll]),(0,react.useEffect)(handleThumbPositionChange,[sizes,handleThumbPositionChange]),$57acba87d6e25586$var$useResizeObserver(scrollbar,handleResize),$57acba87d6e25586$var$useResizeObserver(context.content,handleResize),(0,react.createElement)($57acba87d6e25586$var$ScrollbarProvider,{scope:__scopeScrollArea,scrollbar,hasThumb,onThumbChange:(0,react_use_callback_ref_dist.W)(onThumbChange),onThumbPointerUp:(0,react_use_callback_ref_dist.W)(onThumbPointerUp),onThumbPositionChange:handleThumbPositionChange,onThumbPointerDown:(0,react_use_callback_ref_dist.W)(onThumbPointerDown)},(0,react.createElement)(dist.WV.div,_extends({},scrollbarProps,{ref:composeRefs,style:{position:"absolute",...scrollbarProps.style},onPointerDown:(0,primitive_dist.M)(props.onPointerDown,(event=>{if(0===event.button){event.target.setPointerCapture(event.pointerId),rectRef.current=scrollbar.getBoundingClientRect(),prevWebkitUserSelectRef.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",handleDragScroll(event)}})),onPointerMove:(0,primitive_dist.M)(props.onPointerMove,handleDragScroll),onPointerUp:(0,primitive_dist.M)(props.onPointerUp,(event=>{const element=event.target;element.hasPointerCapture(event.pointerId)&&element.releasePointerCapture(event.pointerId),document.body.style.webkitUserSelect=prevWebkitUserSelectRef.current,rectRef.current=null}))})))})),$57acba87d6e25586$export$9fba1154677d7cd2=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...thumbProps}=props,scrollbarContext=$57acba87d6e25586$var$useScrollbarContext("ScrollAreaThumb",props.__scopeScrollArea);return(0,react.createElement)(react_presence_dist.z,{present:forceMount||scrollbarContext.hasThumb},(0,react.createElement)($57acba87d6e25586$var$ScrollAreaThumbImpl,_extends({ref:forwardedRef},thumbProps)))})),$57acba87d6e25586$var$ScrollAreaThumbImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeScrollArea,style,...thumbProps}=props,scrollAreaContext=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaThumb",__scopeScrollArea),scrollbarContext=$57acba87d6e25586$var$useScrollbarContext("ScrollAreaThumb",__scopeScrollArea),{onThumbPositionChange}=scrollbarContext,composedRef=(0,react_compose_refs_dist.e)(forwardedRef,(node=>scrollbarContext.onThumbChange(node))),removeUnlinkedScrollListenerRef=(0,react.useRef)(),debounceScrollEnd=$57acba87d6e25586$var$useDebounceCallback((()=>{removeUnlinkedScrollListenerRef.current&&(removeUnlinkedScrollListenerRef.current(),removeUnlinkedScrollListenerRef.current=void 0)}),100);return(0,react.useEffect)((()=>{const viewport=scrollAreaContext.viewport;if(viewport){const handleScroll=()=>{if(debounceScrollEnd(),!removeUnlinkedScrollListenerRef.current){const listener=$57acba87d6e25586$var$addUnlinkedScrollListener(viewport,onThumbPositionChange);removeUnlinkedScrollListenerRef.current=listener,onThumbPositionChange()}};return onThumbPositionChange(),viewport.addEventListener("scroll",handleScroll),()=>viewport.removeEventListener("scroll",handleScroll)}}),[scrollAreaContext.viewport,debounceScrollEnd,onThumbPositionChange]),(0,react.createElement)(dist.WV.div,_extends({"data-state":scrollbarContext.hasThumb?"visible":"hidden"},thumbProps,{ref:composedRef,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...style},onPointerDownCapture:(0,primitive_dist.M)(props.onPointerDownCapture,(event=>{const thumbRect=event.target.getBoundingClientRect(),x=event.clientX-thumbRect.left,y=event.clientY-thumbRect.top;scrollbarContext.onThumbPointerDown({x,y})})),onPointerUp:(0,primitive_dist.M)(props.onPointerUp,scrollbarContext.onThumbPointerUp)}))})),$57acba87d6e25586$export$56969d565df7cc4b=(0,react.forwardRef)(((props,forwardedRef)=>{const context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaCorner",props.__scopeScrollArea),hasBothScrollbarsVisible=Boolean(context.scrollbarX&&context.scrollbarY);return"scroll"!==context.type&&hasBothScrollbarsVisible?(0,react.createElement)($57acba87d6e25586$var$ScrollAreaCornerImpl,_extends({},props,{ref:forwardedRef})):null})),$57acba87d6e25586$var$ScrollAreaCornerImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeScrollArea,...cornerProps}=props,context=$57acba87d6e25586$var$useScrollAreaContext("ScrollAreaCorner",__scopeScrollArea),[width1,setWidth]=(0,react.useState)(0),[height1,setHeight]=(0,react.useState)(0),hasSize=Boolean(width1&&height1);return $57acba87d6e25586$var$useResizeObserver(context.scrollbarX,(()=>{var _context$scrollbarX;const height=(null===(_context$scrollbarX=context.scrollbarX)||void 0===_context$scrollbarX?void 0:_context$scrollbarX.offsetHeight)||0;context.onCornerHeightChange(height),setHeight(height)})),$57acba87d6e25586$var$useResizeObserver(context.scrollbarY,(()=>{var _context$scrollbarY;const width=(null===(_context$scrollbarY=context.scrollbarY)||void 0===_context$scrollbarY?void 0:_context$scrollbarY.offsetWidth)||0;context.onCornerWidthChange(width),setWidth(width)})),hasSize?(0,react.createElement)(dist.WV.div,_extends({},cornerProps,{ref:forwardedRef,style:{width:width1,height:height1,position:"absolute",right:"ltr"===context.dir?0:void 0,left:"rtl"===context.dir?0:void 0,bottom:0,...props.style}})):null}));function $57acba87d6e25586$var$toInt(value){return value?parseInt(value,10):0}function $57acba87d6e25586$var$getThumbRatio(viewportSize,contentSize){const ratio=viewportSize/contentSize;return isNaN(ratio)?0:ratio}function $57acba87d6e25586$var$getThumbSize(sizes){const ratio=$57acba87d6e25586$var$getThumbRatio(sizes.viewport,sizes.content),scrollbarPadding=sizes.scrollbar.paddingStart+sizes.scrollbar.paddingEnd,thumbSize=(sizes.scrollbar.size-scrollbarPadding)*ratio;return Math.max(thumbSize,18)}function $57acba87d6e25586$var$getThumbOffsetFromScroll(scrollPos,sizes,dir="ltr"){const thumbSizePx=$57acba87d6e25586$var$getThumbSize(sizes),scrollbarPadding=sizes.scrollbar.paddingStart+sizes.scrollbar.paddingEnd,scrollbar=sizes.scrollbar.size-scrollbarPadding,maxScrollPos=sizes.content-sizes.viewport,maxThumbPos=scrollbar-thumbSizePx,scrollClampRange="ltr"===dir?[0,maxScrollPos]:[-1*maxScrollPos,0],scrollWithoutMomentum=(0,number_dist.u)(scrollPos,scrollClampRange);return $57acba87d6e25586$var$linearScale([0,maxScrollPos],[0,maxThumbPos])(scrollWithoutMomentum)}function $57acba87d6e25586$var$linearScale(input,output){return value=>{if(input[0]===input[1]||output[0]===output[1])return output[0];const ratio=(output[1]-output[0])/(input[1]-input[0]);return output[0]+ratio*(value-input[0])}}function $57acba87d6e25586$var$isScrollingWithinScrollbarBounds(scrollPos,maxScrollPos){return scrollPos>0&&scrollPos<maxScrollPos}const $57acba87d6e25586$var$addUnlinkedScrollListener=(node,handler=(()=>{}))=>{let prevPosition={left:node.scrollLeft,top:node.scrollTop},rAF=0;return function loop(){const position={left:node.scrollLeft,top:node.scrollTop},isHorizontalScroll=prevPosition.left!==position.left,isVerticalScroll=prevPosition.top!==position.top;(isHorizontalScroll||isVerticalScroll)&&handler(),prevPosition=position,rAF=window.requestAnimationFrame(loop)}(),()=>window.cancelAnimationFrame(rAF)};function $57acba87d6e25586$var$useDebounceCallback(callback,delay){const handleCallback=(0,react_use_callback_ref_dist.W)(callback),debounceTimerRef=(0,react.useRef)(0);return(0,react.useEffect)((()=>()=>window.clearTimeout(debounceTimerRef.current)),[]),(0,react.useCallback)((()=>{window.clearTimeout(debounceTimerRef.current),debounceTimerRef.current=window.setTimeout(handleCallback,delay)}),[handleCallback,delay])}function $57acba87d6e25586$var$useResizeObserver(element,onResize){const handleResize=(0,react_use_callback_ref_dist.W)(onResize);(0,react_use_layout_effect_dist.b)((()=>{let rAF=0;if(element){const resizeObserver=new ResizeObserver((()=>{cancelAnimationFrame(rAF),rAF=window.requestAnimationFrame(handleResize)}));return resizeObserver.observe(element),()=>{window.cancelAnimationFrame(rAF),resizeObserver.unobserve(element)}}}),[element,handleResize])}const $57acba87d6e25586$export$be92b6f5f03c0fe9=$57acba87d6e25586$export$ccf8d8d7bbf3c2cc,$57acba87d6e25586$export$d5c6c08dc2d3ca7=$57acba87d6e25586$export$a21cbf9f11fca853,$57acba87d6e25586$export$9a4e88b92edfce6b=$57acba87d6e25586$export$2fabd85d0eba3c57,$57acba87d6e25586$export$6521433ed15a34db=$57acba87d6e25586$export$9fba1154677d7cd2,$57acba87d6e25586$export$ac61190d9fc311a9=$57acba87d6e25586$export$56969d565df7cc4b}}]);