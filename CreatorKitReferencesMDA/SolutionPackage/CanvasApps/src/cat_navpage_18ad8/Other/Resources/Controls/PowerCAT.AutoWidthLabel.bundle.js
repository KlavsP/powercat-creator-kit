/*! For license information please see bundle.js.LICENSE.txt */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;(()=>{"use strict";var t={313:(t,e)=>{function n(t,e,n,i,o){return t.isDisabled&&n?n:t.isFocus&&i?i:t.isHover&&!t.isDisabled&&o?o:e}function i(t){var e;return(null!==(e=null==t?void 0:t.raw)&&void 0!==e?e:0)>0?"".concat(t.raw,"px"):""}function o(t){var e;return(null!==(e=null==t?void 0:t.raw)&&void 0!==e?e:0)>0?"".concat(t.raw,"pt"):""}Object.defineProperty(e,"__esModule",{value:!0}),e.getPointStyleFromParameter=e.getPixelStyleFromParameter=e.getPixelValueFromStyle=e.selectStateValue=e.setStateDepBorderAndFillStyles=e.setBorderStyles=e.setStateDepFontStyles=e.setFontStyles=void 0,e.setFontStyles=function(t,e){var n,r=null!==(n=e.FontName.raw)&&void 0!==n?n:"";t.style.fontFamily!==r&&(t.style.fontFamily=r);var s="0"===e.FontSizeUnits.raw?o(e.FontSize):i(e.FontSize);t.style.fontSize!==s&&(t.style.fontSize=s);var a=i(e.PaddingLeft);t.style.paddingLeft!==a&&(t.style.paddingLeft=a);var l=i(e.PaddingRight);t.style.paddingRight!==l&&(t.style.paddingRight=l);var c=i(e.PaddingTop);t.style.paddingTop!==c&&(t.style.paddingTop=c);var d=i(e.PaddingBottom);t.style.paddingBottom!==d&&(t.style.paddingBottom=d)},e.setStateDepFontStyles=function(t,e,i){var o,r,s,a,l,c,d,u,h,v,f=null!==(l=n(i,null===(o=e.FontColor)||void 0===o?void 0:o.raw,null===(r=e.DisabledFontColor)||void 0===r?void 0:r.raw,null===(s=e.FocusFontColor)||void 0===s?void 0:s.raw,null===(a=e.HoverFontColor)||void 0===a?void 0:a.raw))&&void 0!==l?l:"";f!==t.style.color&&(t.style.color=f);var p=null!==(v=n(i,null===(c=e.FontWeight)||void 0===c?void 0:c.raw,null===(d=e.DisabledFontWeight)||void 0===d?void 0:d.raw,null===(u=e.FocusFontWeight)||void 0===u?void 0:u.raw,null===(h=e.HoverFontWeight)||void 0===h?void 0:h.raw))&&void 0!==v?v:"";p!==t.style.fontWeight&&(t.style.fontWeight=p)},e.setBorderStyles=function(t,e){var n=i(e.BorderRadius);t.style.borderRadius!==n&&(t.style.borderRadius=n)},e.setStateDepBorderAndFillStyles=function(t,e,i){var o,r,s,a,l,c,d,u,h,v,f,p,b,y,m,_=null!==(l=n(i,null===(o=e.BorderThickness)||void 0===o?void 0:o.raw,null===(r=e.BorderThickness)||void 0===r?void 0:r.raw,null===(s=e.FocusBorderThickness)||void 0===s?void 0:s.raw,null===(a=e.HoverBorderThickness)||void 0===a?void 0:a.raw))&&void 0!==l?l:0,g="".concat(_,"px");g!==t.style.borderWidth&&(t.style.borderWidth=g);var w=null!==(v=n(i,null===(c=e.BorderColor)||void 0===c?void 0:c.raw,null===(d=e.DisabledBorderColor)||void 0===d?void 0:d.raw,null===(u=e.FocusBorderColor)||void 0===u?void 0:u.raw,null===(h=e.HoverBorderColor)||void 0===h?void 0:h.raw))&&void 0!==v?v:"";w!==t.style.borderColor&&(t.style.borderColor=w);var S=null!==(m=n(i,null===(f=e.FillColor)||void 0===f?void 0:f.raw,null===(p=e.DisabledFillColor)||void 0===p?void 0:p.raw,null===(b=e.FocusFillColor)||void 0===b?void 0:b.raw,null===(y=e.HoverFillColor)||void 0===y?void 0:y.raw))&&void 0!==m?m:"";S!==t.style.background&&(t.style.background=S)},e.selectStateValue=n,e.getPixelValueFromStyle=function(t){if(t){var e=Number.parseInt(t.replace("px",""));return NaN===e?0:e}return 0},e.getPixelStyleFromParameter=i,e.getPointStyleFromParameter=o},853:function(t,e,n){var i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.AutoWidthLabel=void 0;var o=n(502),r=n(313),s={isDisabled:!1,isFocus:!1,isHover:!1},a=function(){function t(){var t=this;this.state=i({},s),this.resizeHandler=function(e){var n=0;if(e.length>0){var i=e[0];n=i.contentBoxSize&&i.contentBoxSize.length>0?i.contentBoxSize[0].inlineSize:i.contentRect.width}t.state.width=n,t.notifyOutputChanged()},this.onClick=function(){},this.mouseEnter=function(){t.state.isHover=!0,t.setStateDependentStyles()},this.mouseLeave=function(){t.state.isHover=!1,t.setStateDependentStyles()},this.onFocus=function(){t.state.isFocus=!0,t.setStateDependentStyles()},this.onBlur=function(){t.state.isFocus=!1,t.setStateDependentStyles()}}return t.prototype.init=function(t,e,n,i){this.container=i,this.context=t,this.notifyOutputChanged=e,this.labelText=document.createElement("div"),this.labelText.className="cat-label-text",this.labelContainer=document.createElement("div"),this.labelContainer.className="cat-label-text-container",this.labelContainer.appendChild(this.labelText),this.container.appendChild(this.labelContainer),this.updateStateFromContext(),this.setStyles(),this.setText(),this.attachEventListeners()},t.prototype.updateView=function(t){this.context=t,this.updateStateFromContext(),this.setStyles(),this.setText()},t.prototype.getOutputs=function(){return{AutoWidth:this.state.width}},t.prototype.destroy=function(){this.detatchEventListeners()},t.prototype.setText=function(){var t,e=null!==(t=this.context.parameters.Text.raw)&&void 0!==t?t:"";this.labelText.innerText!==e&&(this.labelText.innerText=e)},t.prototype.setStyles=function(){var t,e,n,i,o=this.context,s=this.labelText,a=null!==(e=null===(t=o.accessibility)||void 0===t?void 0:t.assignedTabIndex)&&void 0!==e?e:0;a>0&&s.tabIndex!==a&&(s.tabIndex=a);var l=null!==(i=null===(n=o.accessibility)||void 0===n?void 0:n.assignedTooltip)&&void 0!==i?i:"";l!==s.title&&(s.title=l),(0,r.setFontStyles)(s,o.parameters),(0,r.setBorderStyles)(s,o.parameters),this.setStateDependentStyles()},t.prototype.setStateDependentStyles=function(){var t=this,e=t.labelText,n=t.context,i=t.state;(0,r.setStateDepFontStyles)(e,n.parameters,i),(0,r.setStateDepBorderAndFillStyles)(e,n.parameters,i)},t.prototype.updateStateFromContext=function(){this.state.isDisabled=this.context.mode.isControlDisabled},t.prototype.attachEventListeners=function(){var t=this.labelText;t.addEventListener("click",this.onClick),t.addEventListener("mouseenter",this.mouseEnter),t.addEventListener("mouseleave",this.mouseLeave),t.addEventListener("focus",this.onFocus),t.addEventListener("blur",this.onBlur),this.ro=new o.default(this.resizeHandler),this.ro.observe(this.labelContainer)},t.prototype.detatchEventListeners=function(){var t=this.labelText;t.removeEventListener("click",this.onClick),t.removeEventListener("mouseenter",this.mouseEnter),t.removeEventListener("mouseleave",this.mouseLeave),t.removeEventListener("focus",this.onFocus),t.removeEventListener("blur",this.onBlur),this.ro.disconnect()},t}();e.AutoWidthLabel=a},502:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,i){return t[0]===e&&(n=i,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(e,n){var i=t(this.__entries__,e);~i?this.__entries__[i][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,i=t(n,e);~i&&n.splice(i,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,i=this.__entries__;n<i.length;n++){var o=i[n];t.call(e,o[1],o[0])}},e}()}(),o="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,r=void 0!==n.g&&n.g.Math===Math?n.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(r):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},a=["top","right","bottom","left","width","height","size","weight"],l="undefined"!=typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,i=!1,o=0;function r(){n&&(n=!1,t()),i&&l()}function a(){s(r)}function l(){var t=Date.now();if(n){if(t-o<2)return;i=!0}else n=!0,i=!1,setTimeout(a,20);o=t}return l}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){o&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),l?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){o&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;a.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),d=function(t,e){for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];Object.defineProperty(t,o,{value:e[o],enumerable:!1,writable:!1,configurable:!0})}return t},u=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||r},h=y(0,0,0,0);function v(t){return parseFloat(t)||0}function f(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+v(t["border-"+n+"-width"])}),0)}var p="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof u(t).SVGGraphicsElement}:function(t){return t instanceof u(t).SVGElement&&"function"==typeof t.getBBox};function b(t){return o?p(t)?function(t){var e=t.getBBox();return y(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var i=u(t).getComputedStyle(t),o=function(t){for(var e={},n=0,i=["top","right","bottom","left"];n<i.length;n++){var o=i[n],r=t["padding-"+o];e[o]=v(r)}return e}(i),r=o.left+o.right,s=o.top+o.bottom,a=v(i.width),l=v(i.height);if("border-box"===i.boxSizing&&(Math.round(a+r)!==e&&(a-=f(i,"left","right")+r),Math.round(l+s)!==n&&(l-=f(i,"top","bottom")+s)),!function(t){return t===u(t).document.documentElement}(t)){var c=Math.round(a+r)-e,d=Math.round(l+s)-n;1!==Math.abs(c)&&(a-=c),1!==Math.abs(d)&&(l-=d)}return y(o.left,o.top,a,l)}(t):h}function y(t,e,n,i){return{x:t,y:e,width:n,height:i}}var m=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=y(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=b(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),_=function(t,e){var n,i,o,r,s,a,l,c=(i=(n=e).x,o=n.y,r=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),d(l,{x:i,y:o,width:r,height:s,top:o,right:i+r,bottom:s+o,left:i}),l);d(this,{target:t,contentRect:c})},g=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new i,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new m(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof u(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new _(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new i,S=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=c.getInstance(),i=new g(e,n,this);w.set(this,i)};["observe","unobserve","disconnect"].forEach((function(t){S.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));const E=void 0!==r.ResizeObserver?r.ResizeObserver:S}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i].call(r.exports,r,r.exports,n),r.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i=n(853);pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad=i})();
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('PowerCAT.AutoWidthLabel', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AutoWidthLabel);
} else {
	var PowerCAT = PowerCAT || {};
	PowerCAT.AutoWidthLabel = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AutoWidthLabel;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}