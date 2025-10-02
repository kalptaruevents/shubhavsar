(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function h_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wf={exports:{}},la={},Af={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function rM(){if(Yg)return gt;Yg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(F,ie,Fe){this.props=F,this.context=ie,this.refs=T,this.updater=Fe||x}S.prototype.isReactComponent={},S.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},S.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(F,ie,Fe){this.props=F,this.context=ie,this.refs=T,this.updater=Fe||x}var b=D.prototype=new y;b.constructor=D,M(b,S.prototype),b.isPureReactComponent=!0;var C=Array.isArray,U=Object.prototype.hasOwnProperty,N={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function z(F,ie,Fe){var Xe,ze={},J=null,ce=null;if(ie!=null)for(Xe in ie.ref!==void 0&&(ce=ie.ref),ie.key!==void 0&&(J=""+ie.key),ie)U.call(ie,Xe)&&!B.hasOwnProperty(Xe)&&(ze[Xe]=ie[Xe]);var Se=arguments.length-2;if(Se===1)ze.children=Fe;else if(1<Se){for(var De=Array(Se),Ne=0;Ne<Se;Ne++)De[Ne]=arguments[Ne+2];ze.children=De}if(F&&F.defaultProps)for(Xe in Se=F.defaultProps,Se)ze[Xe]===void 0&&(ze[Xe]=Se[Xe]);return{$$typeof:n,type:F,key:J,ref:ce,props:ze,_owner:N.current}}function P(F,ie){return{$$typeof:n,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function H(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Fe){return ie[Fe]})}var $=/\/+/g;function se(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?H(""+F.key):ie.toString(36)}function de(F,ie,Fe,Xe,ze){var J=typeof F;(J==="undefined"||J==="boolean")&&(F=null);var ce=!1;if(F===null)ce=!0;else switch(J){case"string":case"number":ce=!0;break;case"object":switch(F.$$typeof){case n:case e:ce=!0}}if(ce)return ce=F,ze=ze(ce),F=Xe===""?"."+se(ce,0):Xe,C(ze)?(Fe="",F!=null&&(Fe=F.replace($,"$&/")+"/"),de(ze,ie,Fe,"",function(Ne){return Ne})):ze!=null&&(R(ze)&&(ze=P(ze,Fe+(!ze.key||ce&&ce.key===ze.key?"":(""+ze.key).replace($,"$&/")+"/")+F)),ie.push(ze)),1;if(ce=0,Xe=Xe===""?".":Xe+":",C(F))for(var Se=0;Se<F.length;Se++){J=F[Se];var De=Xe+se(J,Se);ce+=de(J,ie,Fe,De,ze)}else if(De=v(F),typeof De=="function")for(F=De.call(F),Se=0;!(J=F.next()).done;)J=J.value,De=Xe+se(J,Se++),ce+=de(J,ie,Fe,De,ze);else if(J==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ce}function le(F,ie,Fe){if(F==null)return F;var Xe=[],ze=0;return de(F,Xe,"","",function(J){return ie.call(Fe,J,ze++)}),Xe}function ue(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Fe){(F._status===0||F._status===-1)&&(F._status=1,F._result=Fe)},function(Fe){(F._status===0||F._status===-1)&&(F._status=2,F._result=Fe)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var re={current:null},k={transition:null},oe={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:k,ReactCurrentOwner:N};function ne(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:le,forEach:function(F,ie,Fe){le(F,function(){ie.apply(this,arguments)},Fe)},count:function(F){var ie=0;return le(F,function(){ie++}),ie},toArray:function(F){return le(F,function(ie){return ie})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,gt.act=ne,gt.cloneElement=function(F,ie,Fe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=M({},F.props),ze=F.key,J=F.ref,ce=F._owner;if(ie!=null){if(ie.ref!==void 0&&(J=ie.ref,ce=N.current),ie.key!==void 0&&(ze=""+ie.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(De in ie)U.call(ie,De)&&!B.hasOwnProperty(De)&&(Xe[De]=ie[De]===void 0&&Se!==void 0?Se[De]:ie[De])}var De=arguments.length-2;if(De===1)Xe.children=Fe;else if(1<De){Se=Array(De);for(var Ne=0;Ne<De;Ne++)Se[Ne]=arguments[Ne+2];Xe.children=Se}return{$$typeof:n,type:F.type,key:ze,ref:J,props:Xe,_owner:ce}},gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=z,gt.createFactory=function(F){var ie=z.bind(null,F);return ie.type=F,ie},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:f,render:F}},gt.isValidElement=R,gt.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:ue}},gt.memo=function(F,ie){return{$$typeof:h,type:F,compare:ie===void 0?null:ie}},gt.startTransition=function(F){var ie=k.transition;k.transition={};try{F()}finally{k.transition=ie}},gt.unstable_act=ne,gt.useCallback=function(F,ie){return re.current.useCallback(F,ie)},gt.useContext=function(F){return re.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return re.current.useDeferredValue(F)},gt.useEffect=function(F,ie){return re.current.useEffect(F,ie)},gt.useId=function(){return re.current.useId()},gt.useImperativeHandle=function(F,ie,Fe){return re.current.useImperativeHandle(F,ie,Fe)},gt.useInsertionEffect=function(F,ie){return re.current.useInsertionEffect(F,ie)},gt.useLayoutEffect=function(F,ie){return re.current.useLayoutEffect(F,ie)},gt.useMemo=function(F,ie){return re.current.useMemo(F,ie)},gt.useReducer=function(F,ie,Fe){return re.current.useReducer(F,ie,Fe)},gt.useRef=function(F){return re.current.useRef(F)},gt.useState=function(F){return re.current.useState(F)},gt.useSyncExternalStore=function(F,ie,Fe){return re.current.useSyncExternalStore(F,ie,Fe)},gt.useTransition=function(){return re.current.useTransition()},gt.version="18.3.1",gt}var qg;function Uh(){return qg||(qg=1,Af.exports=rM()),Af.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function sM(){if(Kg)return la;Kg=1;var n=Uh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var m,g={},v=null,x=null;h!==void 0&&(v=""+h),d.key!==void 0&&(v=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:f,key:v,ref:x,props:g,_owner:o.current}}return la.Fragment=t,la.jsx=u,la.jsxs=u,la}var $g;function oM(){return $g||($g=1,wf.exports=sM()),wf.exports}var be=oM(),dt=Uh();const Ur=h_(dt);var $l={},Cf={exports:{}},Bn={},Rf={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function aM(){return Zg||(Zg=1,(function(n){function e(k,oe){var ne=k.length;k.push(oe);e:for(;0<ne;){var F=ne-1>>>1,ie=k[F];if(0<o(ie,oe))k[F]=oe,k[ne]=ie,ne=F;else break e}}function t(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var oe=k[0],ne=k.pop();if(ne!==oe){k[0]=ne;e:for(var F=0,ie=k.length,Fe=ie>>>1;F<Fe;){var Xe=2*(F+1)-1,ze=k[Xe],J=Xe+1,ce=k[J];if(0>o(ze,ne))J<ie&&0>o(ce,ze)?(k[F]=ce,k[J]=ne,F=J):(k[F]=ze,k[Xe]=ne,F=Xe);else if(J<ie&&0>o(ce,ne))k[F]=ce,k[J]=ne,F=J;else break e}}return oe}function o(k,oe){var ne=k.sortIndex-oe.sortIndex;return ne!==0?ne:k.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,g=null,v=3,x=!1,M=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(k){for(var oe=t(h);oe!==null;){if(oe.callback===null)r(h);else if(oe.startTime<=k)r(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function C(k){if(T=!1,b(k),!M)if(t(d)!==null)M=!0,ue(U);else{var oe=t(h);oe!==null&&re(C,oe.startTime-k)}}function U(k,oe){M=!1,T&&(T=!1,y(z),z=-1),x=!0;var ne=v;try{for(b(oe),g=t(d);g!==null&&(!(g.expirationTime>oe)||k&&!H());){var F=g.callback;if(typeof F=="function"){g.callback=null,v=g.priorityLevel;var ie=F(g.expirationTime<=oe);oe=n.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(d)&&r(d),b(oe)}else r(d);g=t(d)}if(g!==null)var Fe=!0;else{var Xe=t(h);Xe!==null&&re(C,Xe.startTime-oe),Fe=!1}return Fe}finally{g=null,v=ne,x=!1}}var N=!1,B=null,z=-1,P=5,R=-1;function H(){return!(n.unstable_now()-R<P)}function $(){if(B!==null){var k=n.unstable_now();R=k;var oe=!0;try{oe=B(!0,k)}finally{oe?se():(N=!1,B=null)}}else N=!1}var se;if(typeof D=="function")se=function(){D($)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,le=de.port2;de.port1.onmessage=$,se=function(){le.postMessage(null)}}else se=function(){S($,0)};function ue(k){B=k,N||(N=!0,se())}function re(k,oe){z=S(function(){k(n.unstable_now())},oe)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(k){k.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,ue(U))},n.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(k){switch(v){case 1:case 2:case 3:var oe=3;break;default:oe=v}var ne=v;v=oe;try{return k()}finally{v=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(k,oe){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ne=v;v=k;try{return oe()}finally{v=ne}},n.unstable_scheduleCallback=function(k,oe,ne){var F=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?F+ne:F):ne=F,k){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ne+ie,k={id:m++,callback:oe,priorityLevel:k,startTime:ne,expirationTime:ie,sortIndex:-1},ne>F?(k.sortIndex=ne,e(h,k),t(d)===null&&k===t(h)&&(T?(y(z),z=-1):T=!0,re(C,ne-F))):(k.sortIndex=ie,e(d,k),M||x||(M=!0,ue(U))),k},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(k){var oe=v;return function(){var ne=v;v=oe;try{return k.apply(this,arguments)}finally{v=ne}}}})(Pf)),Pf}var Qg;function lM(){return Qg||(Qg=1,Rf.exports=aM()),Rf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function uM(){if(Jg)return Bn;Jg=1;var n=Uh(),e=lM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function v(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,c){if(s===null||typeof s>"u"||x(i,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,a,c,p,_,E){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,D);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,c)&&(a=null),c||p===null?v(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,c=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,c?i.setAttributeNS(c,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),N=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),k=Symbol.iterator;function oe(i){return i===null||typeof i!="object"?null:(i=k&&i[k]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,F;function ie(i){if(F===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var Fe=!1;function Xe(i,s){if(!i||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Z){var c=Z}Reflect.construct(i,[],s)}else{try{s.call()}catch(Z){c=Z}i.call(s.prototype)}else{try{throw Error()}catch(Z){c=Z}i()}}catch(Z){if(Z&&c&&typeof Z.stack=="string"){for(var p=Z.stack.split(`
`),_=c.stack.split(`
`),E=p.length-1,I=_.length-1;1<=E&&0<=I&&p[E]!==_[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==_[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==_[I]){var V=`
`+p[E].replace(" at new "," at ");return i.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",i.displayName)),V}while(1<=E&&0<=I);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ie(i):""}function ze(i){switch(i.tag){case 5:return ie(i.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return i=Xe(i.type,!1),i;case 11:return i=Xe(i.type.render,!1),i;case 1:return i=Xe(i.type,!0),i;default:return""}}function J(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case B:return"Fragment";case N:return"Portal";case P:return"Profiler";case z:return"StrictMode";case se:return"Suspense";case de:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case le:return s=i.displayName||null,s!==null?s:J(i.type)||"Memo";case ue:s=i._payload,i=i._init;try{return J(i(s))}catch{}}return null}function ce(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return J(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Se(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function De(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(i){var s=De(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,_=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(E){c=""+E,_.call(this,E)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function mt(i){i._valueTracker||(i._valueTracker=Ne(i))}function nn(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return i&&(c=De(i)?i.checked?"true":"false":i.value),i=c,i!==a?(s.setValue(i),!0):!1}function O(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function bt(i,s){var a=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function ct(i,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Se(s.value!=null?s.value:a),i._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function nt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function He(i,s){nt(i,s);var a=Se(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ge(i,s.type,a):s.hasOwnProperty("defaultValue")&&Ge(i,s.type,Se(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function It(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Ge(i,s,a){(s!=="number"||O(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var lt=Array.isArray;function Ot(i,s,a,c){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&c&&(i[a].defaultSelected=!0)}else{for(a=""+Se(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Bt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Se(a)}}function w(i,s){var a=Se(s.value),c=Se(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),c!=null&&(i.defaultValue=""+c)}function q(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function fe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?fe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var ae,Ke=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=ae.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Te(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$e=["Webkit","ms","Moz","O"];Object.keys(Be).forEach(function(i){$e.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Be[s]=Be[i]})});function Me(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Be.hasOwnProperty(i)&&Be[i]?(""+s).trim():s+"px"}function Pe(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,p=Me(a,s[a],c);a==="float"&&(a="cssFloat"),c?i.setProperty(a,p):i[a]=p}}var it=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(i,s){if(s){if(it[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ae(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ye=null,we=null,Le=null;function _e(i){if(i=Yo(i)){if(typeof ye!="function")throw Error(t(280));var s=i.stateNode;s&&(s=fl(s),ye(i.stateNode,i.type,s))}}function he(i){we?Le?Le.push(i):Le=[i]:we=i}function We(){if(we){var i=we,s=Le;if(Le=we=null,_e(i),s)for(i=0;i<s.length;i++)_e(s[i])}}function ut(i,s){return i(s)}function Rt(){}var xt=!1;function Zn(i,s,a){if(xt)return i(s,a);xt=!0;try{return ut(i,s,a)}finally{xt=!1,(we!==null||Le!==null)&&(Rt(),We())}}function gn(i,s){var a=i.stateNode;if(a===null)return null;var c=fl(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Es=!1;if(f)try{var Gn={};Object.defineProperty(Gn,"passive",{get:function(){Es=!0}}),window.addEventListener("test",Gn,Gn),window.removeEventListener("test",Gn,Gn)}catch{Es=!1}function bo(i,s,a,c,p,_,E,I,V){var Z=Array.prototype.slice.call(arguments,3);try{s.apply(a,Z)}catch(ge){this.onError(ge)}}var or=!1,Hr=null,Bi=!1,Ts=null,ws={onError:function(i){or=!0,Hr=i}};function Wa(i,s,a,c,p,_,E,I,V){or=!1,Hr=null,bo.apply(ws,arguments)}function Xa(i,s,a,c,p,_,E,I,V){if(Wa.apply(this,arguments),or){if(or){var Z=Hr;or=!1,Hr=null}else throw Error(t(198));Bi||(Bi=!0,Ts=Z)}}function ki(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function ja(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ya(i){if(ki(i)!==i)throw Error(t(188))}function Yu(i){var s=i.alternate;if(!s){if(s=ki(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,c=s;;){var p=a.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){a=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===a)return Ya(p),i;if(_===c)return Ya(p),s;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=p,c=_;else{for(var E=!1,I=p.child;I;){if(I===a){E=!0,a=p,c=_;break}if(I===c){E=!0,c=p,a=_;break}I=I.sibling}if(!E){for(I=_.child;I;){if(I===a){E=!0,a=_,c=p;break}if(I===c){E=!0,c=_,a=p;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function qa(i){return i=Yu(i),i!==null?Ka(i):null}function Ka(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ka(i);if(s!==null)return s;i=i.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,ee=e.unstable_shouldYield,te=e.unstable_requestPaint,X=e.unstable_now,xe=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,ke=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,tt=e.unstable_LowPriority,rt=e.unstable_IdlePriority,Ze=null,ot=null;function Ct(i){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Ze,i,void 0,(i.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Qe,Ut=Math.log,Pt=Math.LN2;function Qe(i){return i>>>=0,i===0?32:31-(Ut(i)/Pt|0)|0}var Dt=64,vt=4194304;function rn(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function di(i,s){var a=i.pendingLanes;if(a===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,E=a&268435455;if(E!==0){var I=E&~p;I!==0?c=rn(I):(_&=E,_!==0&&(c=rn(_)))}else E=a&~p,E!==0?c=rn(E):_!==0&&(c=rn(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)a=31-St(s),p=1<<a,c|=i[a],s&=~p;return c}function Cn(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gr(i,s){for(var a=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var E=31-St(_),I=1<<E,V=p[E];V===-1?((I&a)===0||(I&c)!==0)&&(p[E]=Cn(I,s)):V<=s&&(i.expiredLanes|=I),_&=~I}}function Nt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Rn(){var i=Dt;return Dt<<=1,(Dt&4194240)===0&&(Dt=64),i}function vn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function Kt(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-St(s),i[s]=a}function _n(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-St(a),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,a&=~_}}function Wr(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var c=31-St(a),p=1<<c;p&s|i[c]&s&&(i[c]|=s),a&=~p}}var _t=0;function wp(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ap,qu,Cp,Rp,Pp,Ku=!1,$a=[],ar=null,lr=null,ur=null,Do=new Map,Lo=new Map,cr=[],Ax="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bp(i,s){switch(i){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Do.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(s.pointerId)}}function Io(i,s,a,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=Yo(s),s!==null&&qu(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Cx(i,s,a,c,p){switch(s){case"focusin":return ar=Io(ar,i,s,a,c,p),!0;case"dragenter":return lr=Io(lr,i,s,a,c,p),!0;case"mouseover":return ur=Io(ur,i,s,a,c,p),!0;case"pointerover":var _=p.pointerId;return Do.set(_,Io(Do.get(_)||null,i,s,a,c,p)),!0;case"gotpointercapture":return _=p.pointerId,Lo.set(_,Io(Lo.get(_)||null,i,s,a,c,p)),!0}return!1}function Dp(i){var s=Xr(i.target);if(s!==null){var a=ki(s);if(a!==null){if(s=a.tag,s===13){if(s=ja(a),s!==null){i.blockedOn=s,Pp(i.priority,function(){Cp(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Za(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=Zu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var c=new a.constructor(a.type,a);ft=c,a.target.dispatchEvent(c),ft=null}else return s=Yo(a),s!==null&&qu(s),i.blockedOn=a,!1;s.shift()}return!0}function Lp(i,s,a){Za(i)&&a.delete(s)}function Rx(){Ku=!1,ar!==null&&Za(ar)&&(ar=null),lr!==null&&Za(lr)&&(lr=null),ur!==null&&Za(ur)&&(ur=null),Do.forEach(Lp),Lo.forEach(Lp)}function Uo(i,s){i.blockedOn===s&&(i.blockedOn=null,Ku||(Ku=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Rx)))}function No(i){function s(p){return Uo(p,i)}if(0<$a.length){Uo($a[0],i);for(var a=1;a<$a.length;a++){var c=$a[a];c.blockedOn===i&&(c.blockedOn=null)}}for(ar!==null&&Uo(ar,i),lr!==null&&Uo(lr,i),ur!==null&&Uo(ur,i),Do.forEach(s),Lo.forEach(s),a=0;a<cr.length;a++)c=cr[a],c.blockedOn===i&&(c.blockedOn=null);for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)Dp(a),a.blockedOn===null&&cr.shift()}var As=C.ReactCurrentBatchConfig,Qa=!0;function Px(i,s,a,c){var p=_t,_=As.transition;As.transition=null;try{_t=1,$u(i,s,a,c)}finally{_t=p,As.transition=_}}function bx(i,s,a,c){var p=_t,_=As.transition;As.transition=null;try{_t=4,$u(i,s,a,c)}finally{_t=p,As.transition=_}}function $u(i,s,a,c){if(Qa){var p=Zu(i,s,a,c);if(p===null)pc(i,s,c,Ja,a),bp(i,c);else if(Cx(p,i,s,a,c))c.stopPropagation();else if(bp(i,c),s&4&&-1<Ax.indexOf(i)){for(;p!==null;){var _=Yo(p);if(_!==null&&Ap(_),_=Zu(i,s,a,c),_===null&&pc(i,s,c,Ja,a),_===p)break;p=_}p!==null&&c.stopPropagation()}else pc(i,s,c,null,a)}}var Ja=null;function Zu(i,s,a,c){if(Ja=null,i=G(c),i=Xr(i),i!==null)if(s=ki(i),s===null)i=null;else if(a=s.tag,a===13){if(i=ja(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ja=i,null}function Ip(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xe()){case Ce:return 1;case ke:return 4;case Ie:case tt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var fr=null,Qu=null,el=null;function Up(){if(el)return el;var i,s=Qu,a=s.length,c,p="value"in fr?fr.value:fr.textContent,_=p.length;for(i=0;i<a&&s[i]===p[i];i++);var E=a-i;for(c=1;c<=E&&s[a-c]===p[_-c];c++);return el=p.slice(i,1<c?1-c:void 0)}function tl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function nl(){return!0}function Np(){return!1}function Wn(i){function s(a,c,p,_,E){this._reactName=a,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(_):_[I]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?nl:Np,this.isPropagationStopped=Np,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),s}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ju=Wn(Cs),Fo=ne({},Cs,{view:0,detail:0}),Dx=Wn(Fo),ec,tc,Oo,il=ne({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Oo&&(Oo&&i.type==="mousemove"?(ec=i.screenX-Oo.screenX,tc=i.screenY-Oo.screenY):tc=ec=0,Oo=i),ec)},movementY:function(i){return"movementY"in i?i.movementY:tc}}),Fp=Wn(il),Lx=ne({},il,{dataTransfer:0}),Ix=Wn(Lx),Ux=ne({},Fo,{relatedTarget:0}),nc=Wn(Ux),Nx=ne({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=Wn(Nx),Ox=ne({},Cs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Bx=Wn(Ox),kx=ne({},Cs,{data:0}),Op=Wn(kx),Vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Hx[i])?!!s[i]:!1}function ic(){return Gx}var Wx=ne({},Fo,{key:function(i){if(i.key){var s=Vx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=tl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?zx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(i){return i.type==="keypress"?tl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?tl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Xx=Wn(Wx),jx=ne({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=Wn(jx),Yx=ne({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),qx=Wn(Yx),Kx=ne({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=Wn(Kx),Zx=ne({},il,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=Wn(Zx),Jx=[9,13,27,32],rc=f&&"CompositionEvent"in window,Bo=null;f&&"documentMode"in document&&(Bo=document.documentMode);var eS=f&&"TextEvent"in window&&!Bo,kp=f&&(!rc||Bo&&8<Bo&&11>=Bo),Vp=" ",zp=!1;function Hp(i,s){switch(i){case"keyup":return Jx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Rs=!1;function tS(i,s){switch(i){case"compositionend":return Gp(s);case"keypress":return s.which!==32?null:(zp=!0,Vp);case"textInput":return i=s.data,i===Vp&&zp?null:i;default:return null}}function nS(i,s){if(Rs)return i==="compositionend"||!rc&&Hp(i,s)?(i=Up(),el=Qu=fr=null,Rs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return kp&&s.locale!=="ko"?null:s.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!iS[i.type]:s==="textarea"}function Xp(i,s,a,c){he(c),s=ll(s,"onChange"),0<s.length&&(a=new Ju("onChange","change",null,a,c),i.push({event:a,listeners:s}))}var ko=null,Vo=null;function rS(i){um(i,0)}function rl(i){var s=Is(i);if(nn(s))return i}function sS(i,s){if(i==="change")return s}var jp=!1;if(f){var sc;if(f){var oc="oninput"in document;if(!oc){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),oc=typeof Yp.oninput=="function"}sc=oc}else sc=!1;jp=sc&&(!document.documentMode||9<document.documentMode)}function qp(){ko&&(ko.detachEvent("onpropertychange",Kp),Vo=ko=null)}function Kp(i){if(i.propertyName==="value"&&rl(Vo)){var s=[];Xp(s,Vo,i,G(i)),Zn(rS,s)}}function oS(i,s,a){i==="focusin"?(qp(),ko=s,Vo=a,ko.attachEvent("onpropertychange",Kp)):i==="focusout"&&qp()}function aS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return rl(Vo)}function lS(i,s){if(i==="click")return rl(s)}function uS(i,s){if(i==="input"||i==="change")return rl(s)}function cS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var hi=typeof Object.is=="function"?Object.is:cS;function zo(i,s){if(hi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var p=a[c];if(!d.call(s,p)||!hi(i[p],s[p]))return!1}return!0}function $p(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Zp(i,s){var a=$p(i);i=0;for(var c;a;){if(a.nodeType===3){if(c=i+a.textContent.length,i<=s&&c>=s)return{node:a,offset:s-i};i=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$p(a)}}function Qp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Qp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Jp(){for(var i=window,s=O();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=O(i.document)}return s}function ac(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function fS(i){var s=Jp(),a=i.focusedElem,c=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&Qp(a.ownerDocument.documentElement,a)){if(c!==null&&ac(a)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=Zp(a,_);var E=Zp(a,c);p&&E&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==E.node||i.focusOffset!==E.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(E.node,E.offset)):(s.setEnd(E.node,E.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var dS=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,lc=null,Ho=null,uc=!1;function em(i,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uc||Ps==null||Ps!==O(c)||(c=Ps,"selectionStart"in c&&ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ho&&zo(Ho,c)||(Ho=c,c=ll(lc,"onSelect"),0<c.length&&(s=new Ju("onSelect","select",null,s,a),i.push({event:s,listeners:c}),s.target=Ps)))}function sl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var bs={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},cc={},tm={};f&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function ol(i){if(cc[i])return cc[i];if(!bs[i])return i;var s=bs[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in tm)return cc[i]=s[a];return i}var nm=ol("animationend"),im=ol("animationiteration"),rm=ol("animationstart"),sm=ol("transitionend"),om=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(i,s){om.set(i,s),l(s,[i])}for(var fc=0;fc<am.length;fc++){var dc=am[fc],hS=dc.toLowerCase(),pS=dc[0].toUpperCase()+dc.slice(1);dr(hS,"on"+pS)}dr(nm,"onAnimationEnd"),dr(im,"onAnimationIteration"),dr(rm,"onAnimationStart"),dr("dblclick","onDoubleClick"),dr("focusin","onFocus"),dr("focusout","onBlur"),dr(sm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function lm(i,s,a){var c=i.type||"unknown-event";i.currentTarget=a,Xa(c,s,void 0,i),i.currentTarget=null}function um(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var c=i[a],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var E=c.length-1;0<=E;E--){var I=c[E],V=I.instance,Z=I.currentTarget;if(I=I.listener,V!==_&&p.isPropagationStopped())break e;lm(p,I,Z),_=V}else for(E=0;E<c.length;E++){if(I=c[E],V=I.instance,Z=I.currentTarget,I=I.listener,V!==_&&p.isPropagationStopped())break e;lm(p,I,Z),_=V}}}if(Bi)throw i=Ts,Bi=!1,Ts=null,i}function kt(i,s){var a=s[xc];a===void 0&&(a=s[xc]=new Set);var c=i+"__bubble";a.has(c)||(cm(s,i,2,!1),a.add(c))}function hc(i,s,a){var c=0;s&&(c|=4),cm(a,i,c,s)}var al="_reactListening"+Math.random().toString(36).slice(2);function Wo(i){if(!i[al]){i[al]=!0,r.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||hc(a,!1,i),hc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[al]||(s[al]=!0,hc("selectionchange",!1,s))}}function cm(i,s,a,c){switch(Ip(s)){case 1:var p=Px;break;case 4:p=bx;break;default:p=$u}a=p.bind(null,s,a,i),p=void 0,!Es||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function pc(i,s,a,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;E=E.return}for(;I!==null;){if(E=Xr(I),E===null)return;if(V=E.tag,V===5||V===6){c=_=E;continue e}I=I.parentNode}}c=c.return}Zn(function(){var Z=_,ge=G(a),ve=[];e:{var pe=om.get(i);if(pe!==void 0){var Ue=Ju,Ve=i;switch(i){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":Ue=Xx;break;case"focusin":Ve="focus",Ue=nc;break;case"focusout":Ve="blur",Ue=nc;break;case"beforeblur":case"afterblur":Ue=nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Ix;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=qx;break;case nm:case im:case rm:Ue=Fx;break;case sm:Ue=$x;break;case"scroll":Ue=Dx;break;case"wheel":Ue=Qx;break;case"copy":case"cut":case"paste":Ue=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=Bp}var je=(s&4)!==0,$t=!je&&i==="scroll",Y=je?pe!==null?pe+"Capture":null:pe;je=[];for(var W=Z,K;W!==null;){K=W;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=gn(W,Y),Ee!=null&&je.push(Xo(W,Ee,K)))),$t)break;W=W.return}0<je.length&&(pe=new Ue(pe,Ve,null,a,ge),ve.push({event:pe,listeners:je}))}}if((s&7)===0){e:{if(pe=i==="mouseover"||i==="pointerover",Ue=i==="mouseout"||i==="pointerout",pe&&a!==ft&&(Ve=a.relatedTarget||a.fromElement)&&(Xr(Ve)||Ve[Vi]))break e;if((Ue||pe)&&(pe=ge.window===ge?ge:(pe=ge.ownerDocument)?pe.defaultView||pe.parentWindow:window,Ue?(Ve=a.relatedTarget||a.toElement,Ue=Z,Ve=Ve?Xr(Ve):null,Ve!==null&&($t=ki(Ve),Ve!==$t||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ue=null,Ve=Z),Ue!==Ve)){if(je=Fp,Ee="onMouseLeave",Y="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(je=Bp,Ee="onPointerLeave",Y="onPointerEnter",W="pointer"),$t=Ue==null?pe:Is(Ue),K=Ve==null?pe:Is(Ve),pe=new je(Ee,W+"leave",Ue,a,ge),pe.target=$t,pe.relatedTarget=K,Ee=null,Xr(ge)===Z&&(je=new je(Y,W+"enter",Ve,a,ge),je.target=K,je.relatedTarget=$t,Ee=je),$t=Ee,Ue&&Ve)t:{for(je=Ue,Y=Ve,W=0,K=je;K;K=Ds(K))W++;for(K=0,Ee=Y;Ee;Ee=Ds(Ee))K++;for(;0<W-K;)je=Ds(je),W--;for(;0<K-W;)Y=Ds(Y),K--;for(;W--;){if(je===Y||Y!==null&&je===Y.alternate)break t;je=Ds(je),Y=Ds(Y)}je=null}else je=null;Ue!==null&&fm(ve,pe,Ue,je,!1),Ve!==null&&$t!==null&&fm(ve,$t,Ve,je,!0)}}e:{if(pe=Z?Is(Z):window,Ue=pe.nodeName&&pe.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&pe.type==="file")var qe=sS;else if(Wp(pe))if(jp)qe=uS;else{qe=aS;var Je=oS}else(Ue=pe.nodeName)&&Ue.toLowerCase()==="input"&&(pe.type==="checkbox"||pe.type==="radio")&&(qe=lS);if(qe&&(qe=qe(i,Z))){Xp(ve,qe,a,ge);break e}Je&&Je(i,pe,Z),i==="focusout"&&(Je=pe._wrapperState)&&Je.controlled&&pe.type==="number"&&Ge(pe,"number",pe.value)}switch(Je=Z?Is(Z):window,i){case"focusin":(Wp(Je)||Je.contentEditable==="true")&&(Ps=Je,lc=Z,Ho=null);break;case"focusout":Ho=lc=Ps=null;break;case"mousedown":uc=!0;break;case"contextmenu":case"mouseup":case"dragend":uc=!1,em(ve,a,ge);break;case"selectionchange":if(dS)break;case"keydown":case"keyup":em(ve,a,ge)}var et;if(rc)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Rs?Hp(i,a)&&(at="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(kp&&a.locale!=="ko"&&(Rs||at!=="onCompositionStart"?at==="onCompositionEnd"&&Rs&&(et=Up()):(fr=ge,Qu="value"in fr?fr.value:fr.textContent,Rs=!0)),Je=ll(Z,at),0<Je.length&&(at=new Op(at,i,null,a,ge),ve.push({event:at,listeners:Je}),et?at.data=et:(et=Gp(a),et!==null&&(at.data=et)))),(et=eS?tS(i,a):nS(i,a))&&(Z=ll(Z,"onBeforeInput"),0<Z.length&&(ge=new Op("onBeforeInput","beforeinput",null,a,ge),ve.push({event:ge,listeners:Z}),ge.data=et))}um(ve,s)})}function Xo(i,s,a){return{instance:i,listener:s,currentTarget:a}}function ll(i,s){for(var a=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=gn(i,a),_!=null&&c.unshift(Xo(i,_,p)),_=gn(i,s),_!=null&&c.push(Xo(i,_,p))),i=i.return}return c}function Ds(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function fm(i,s,a,c,p){for(var _=s._reactName,E=[];a!==null&&a!==c;){var I=a,V=I.alternate,Z=I.stateNode;if(V!==null&&V===c)break;I.tag===5&&Z!==null&&(I=Z,p?(V=gn(a,_),V!=null&&E.unshift(Xo(a,V,I))):p||(V=gn(a,_),V!=null&&E.push(Xo(a,V,I)))),a=a.return}E.length!==0&&i.push({event:s,listeners:E})}var gS=/\r\n?/g,vS=/\u0000|\uFFFD/g;function dm(i){return(typeof i=="string"?i:""+i).replace(gS,`
`).replace(vS,"")}function ul(i,s,a){if(s=dm(s),dm(i)!==s&&a)throw Error(t(425))}function cl(){}var mc=null,gc=null;function vc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _c=typeof setTimeout=="function"?setTimeout:void 0,_S=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(i){return hm.resolve(null).then(i).catch(xS)}:_c;function xS(i){setTimeout(function(){throw i})}function yc(i,s){var a=s,c=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(c===0){i.removeChild(p),No(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=p}while(a);No(s)}function hr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function pm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Ls,jo="__reactProps$"+Ls,Vi="__reactContainer$"+Ls,xc="__reactEvents$"+Ls,SS="__reactListeners$"+Ls,MS="__reactHandles$"+Ls;function Xr(i){var s=i[Ai];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Vi]||a[Ai]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=pm(i);i!==null;){if(a=i[Ai])return a;i=pm(i)}return s}i=a,a=i.parentNode}return null}function Yo(i){return i=i[Ai]||i[Vi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Is(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function fl(i){return i[jo]||null}var Sc=[],Us=-1;function pr(i){return{current:i}}function Vt(i){0>Us||(i.current=Sc[Us],Sc[Us]=null,Us--)}function Ft(i,s){Us++,Sc[Us]=i.current,i.current=s}var mr={},yn=pr(mr),In=pr(!1),jr=mr;function Ns(i,s){var a=i.type.contextTypes;if(!a)return mr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in a)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Un(i){return i=i.childContextTypes,i!=null}function dl(){Vt(In),Vt(yn)}function mm(i,s,a){if(yn.current!==mr)throw Error(t(168));Ft(yn,s),Ft(In,a)}function gm(i,s,a){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,ce(i)||"Unknown",p));return ne({},a,c)}function hl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||mr,jr=yn.current,Ft(yn,i),Ft(In,In.current),!0}function vm(i,s,a){var c=i.stateNode;if(!c)throw Error(t(169));a?(i=gm(i,s,jr),c.__reactInternalMemoizedMergedChildContext=i,Vt(In),Vt(yn),Ft(yn,i)):Vt(In),Ft(In,a)}var zi=null,pl=!1,Mc=!1;function _m(i){zi===null?zi=[i]:zi.push(i)}function ES(i){pl=!0,_m(i)}function gr(){if(!Mc&&zi!==null){Mc=!0;var i=0,s=_t;try{var a=zi;for(_t=1;i<a.length;i++){var c=a[i];do c=c(!0);while(c!==null)}zi=null,pl=!1}catch(p){throw zi!==null&&(zi=zi.slice(i+1)),A(Ce,gr),p}finally{_t=s,Mc=!1}}return null}var Fs=[],Os=0,ml=null,gl=0,Qn=[],Jn=0,Yr=null,Hi=1,Gi="";function qr(i,s){Fs[Os++]=gl,Fs[Os++]=ml,ml=i,gl=s}function ym(i,s,a){Qn[Jn++]=Hi,Qn[Jn++]=Gi,Qn[Jn++]=Yr,Yr=i;var c=Hi;i=Gi;var p=32-St(c)-1;c&=~(1<<p),a+=1;var _=32-St(s)+p;if(30<_){var E=p-p%5;_=(c&(1<<E)-1).toString(32),c>>=E,p-=E,Hi=1<<32-St(s)+p|a<<p|c,Gi=_+i}else Hi=1<<_|a<<p|c,Gi=i}function Ec(i){i.return!==null&&(qr(i,1),ym(i,1,0))}function Tc(i){for(;i===ml;)ml=Fs[--Os],Fs[Os]=null,gl=Fs[--Os],Fs[Os]=null;for(;i===Yr;)Yr=Qn[--Jn],Qn[Jn]=null,Gi=Qn[--Jn],Qn[Jn]=null,Hi=Qn[--Jn],Qn[Jn]=null}var Xn=null,jn=null,zt=!1,pi=null;function xm(i,s){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function Sm(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Xn=i,jn=hr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Xn=i,jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yr!==null?{id:Hi,overflow:Gi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,Xn=i,jn=null,!0):!1;default:return!1}}function wc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Ac(i){if(zt){var s=jn;if(s){var a=s;if(!Sm(i,s)){if(wc(i))throw Error(t(418));s=hr(a.nextSibling);var c=Xn;s&&Sm(i,s)?xm(c,a):(i.flags=i.flags&-4097|2,zt=!1,Xn=i)}}else{if(wc(i))throw Error(t(418));i.flags=i.flags&-4097|2,zt=!1,Xn=i}}}function Mm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Xn=i}function vl(i){if(i!==Xn)return!1;if(!zt)return Mm(i),zt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!vc(i.type,i.memoizedProps)),s&&(s=jn)){if(wc(i))throw Em(),Error(t(418));for(;s;)xm(i,s),s=hr(s.nextSibling)}if(Mm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){jn=hr(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}jn=null}}else jn=Xn?hr(i.stateNode.nextSibling):null;return!0}function Em(){for(var i=jn;i;)i=hr(i.nextSibling)}function Bs(){jn=Xn=null,zt=!1}function Cc(i){pi===null?pi=[i]:pi.push(i)}var TS=C.ReactCurrentBatchConfig;function qo(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(E){var I=p.refs;E===null?delete I[_]:I[_]=E},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function _l(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Tm(i){var s=i._init;return s(i._payload)}function wm(i){function s(Y,W){if(i){var K=Y.deletions;K===null?(Y.deletions=[W],Y.flags|=16):K.push(W)}}function a(Y,W){if(!i)return null;for(;W!==null;)s(Y,W),W=W.sibling;return null}function c(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function p(Y,W){return Y=Tr(Y,W),Y.index=0,Y.sibling=null,Y}function _(Y,W,K){return Y.index=K,i?(K=Y.alternate,K!==null?(K=K.index,K<W?(Y.flags|=2,W):K):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function E(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,W,K,Ee){return W===null||W.tag!==6?(W=yf(K,Y.mode,Ee),W.return=Y,W):(W=p(W,K),W.return=Y,W)}function V(Y,W,K,Ee){var qe=K.type;return qe===B?ge(Y,W,K.props.children,Ee,K.key):W!==null&&(W.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&Tm(qe)===W.type)?(Ee=p(W,K.props),Ee.ref=qo(Y,W,K),Ee.return=Y,Ee):(Ee=Hl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=qo(Y,W,K),Ee.return=Y,Ee)}function Z(Y,W,K,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==K.containerInfo||W.stateNode.implementation!==K.implementation?(W=xf(K,Y.mode,Ee),W.return=Y,W):(W=p(W,K.children||[]),W.return=Y,W)}function ge(Y,W,K,Ee,qe){return W===null||W.tag!==7?(W=ns(K,Y.mode,Ee,qe),W.return=Y,W):(W=p(W,K),W.return=Y,W)}function ve(Y,W,K){if(typeof W=="string"&&W!==""||typeof W=="number")return W=yf(""+W,Y.mode,K),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return K=Hl(W.type,W.key,W.props,null,Y.mode,K),K.ref=qo(Y,null,W),K.return=Y,K;case N:return W=xf(W,Y.mode,K),W.return=Y,W;case ue:var Ee=W._init;return ve(Y,Ee(W._payload),K)}if(lt(W)||oe(W))return W=ns(W,Y.mode,K,null),W.return=Y,W;_l(Y,W)}return null}function pe(Y,W,K,Ee){var qe=W!==null?W.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return qe!==null?null:I(Y,W,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case U:return K.key===qe?V(Y,W,K,Ee):null;case N:return K.key===qe?Z(Y,W,K,Ee):null;case ue:return qe=K._init,pe(Y,W,qe(K._payload),Ee)}if(lt(K)||oe(K))return qe!==null?null:ge(Y,W,K,Ee,null);_l(Y,K)}return null}function Ue(Y,W,K,Ee,qe){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,I(W,Y,""+Ee,qe);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return Y=Y.get(Ee.key===null?K:Ee.key)||null,V(W,Y,Ee,qe);case N:return Y=Y.get(Ee.key===null?K:Ee.key)||null,Z(W,Y,Ee,qe);case ue:var Je=Ee._init;return Ue(Y,W,K,Je(Ee._payload),qe)}if(lt(Ee)||oe(Ee))return Y=Y.get(K)||null,ge(W,Y,Ee,qe,null);_l(W,Ee)}return null}function Ve(Y,W,K,Ee){for(var qe=null,Je=null,et=W,at=W=0,fn=null;et!==null&&at<K.length;at++){et.index>at?(fn=et,et=null):fn=et.sibling;var Et=pe(Y,et,K[at],Ee);if(Et===null){et===null&&(et=fn);break}i&&et&&Et.alternate===null&&s(Y,et),W=_(Et,W,at),Je===null?qe=Et:Je.sibling=Et,Je=Et,et=fn}if(at===K.length)return a(Y,et),zt&&qr(Y,at),qe;if(et===null){for(;at<K.length;at++)et=ve(Y,K[at],Ee),et!==null&&(W=_(et,W,at),Je===null?qe=et:Je.sibling=et,Je=et);return zt&&qr(Y,at),qe}for(et=c(Y,et);at<K.length;at++)fn=Ue(et,Y,at,K[at],Ee),fn!==null&&(i&&fn.alternate!==null&&et.delete(fn.key===null?at:fn.key),W=_(fn,W,at),Je===null?qe=fn:Je.sibling=fn,Je=fn);return i&&et.forEach(function(wr){return s(Y,wr)}),zt&&qr(Y,at),qe}function je(Y,W,K,Ee){var qe=oe(K);if(typeof qe!="function")throw Error(t(150));if(K=qe.call(K),K==null)throw Error(t(151));for(var Je=qe=null,et=W,at=W=0,fn=null,Et=K.next();et!==null&&!Et.done;at++,Et=K.next()){et.index>at?(fn=et,et=null):fn=et.sibling;var wr=pe(Y,et,Et.value,Ee);if(wr===null){et===null&&(et=fn);break}i&&et&&wr.alternate===null&&s(Y,et),W=_(wr,W,at),Je===null?qe=wr:Je.sibling=wr,Je=wr,et=fn}if(Et.done)return a(Y,et),zt&&qr(Y,at),qe;if(et===null){for(;!Et.done;at++,Et=K.next())Et=ve(Y,Et.value,Ee),Et!==null&&(W=_(Et,W,at),Je===null?qe=Et:Je.sibling=Et,Je=Et);return zt&&qr(Y,at),qe}for(et=c(Y,et);!Et.done;at++,Et=K.next())Et=Ue(et,Y,at,Et.value,Ee),Et!==null&&(i&&Et.alternate!==null&&et.delete(Et.key===null?at:Et.key),W=_(Et,W,at),Je===null?qe=Et:Je.sibling=Et,Je=Et);return i&&et.forEach(function(iM){return s(Y,iM)}),zt&&qr(Y,at),qe}function $t(Y,W,K,Ee){if(typeof K=="object"&&K!==null&&K.type===B&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case U:e:{for(var qe=K.key,Je=W;Je!==null;){if(Je.key===qe){if(qe=K.type,qe===B){if(Je.tag===7){a(Y,Je.sibling),W=p(Je,K.props.children),W.return=Y,Y=W;break e}}else if(Je.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ue&&Tm(qe)===Je.type){a(Y,Je.sibling),W=p(Je,K.props),W.ref=qo(Y,Je,K),W.return=Y,Y=W;break e}a(Y,Je);break}else s(Y,Je);Je=Je.sibling}K.type===B?(W=ns(K.props.children,Y.mode,Ee,K.key),W.return=Y,Y=W):(Ee=Hl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=qo(Y,W,K),Ee.return=Y,Y=Ee)}return E(Y);case N:e:{for(Je=K.key;W!==null;){if(W.key===Je)if(W.tag===4&&W.stateNode.containerInfo===K.containerInfo&&W.stateNode.implementation===K.implementation){a(Y,W.sibling),W=p(W,K.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else s(Y,W);W=W.sibling}W=xf(K,Y.mode,Ee),W.return=Y,Y=W}return E(Y);case ue:return Je=K._init,$t(Y,W,Je(K._payload),Ee)}if(lt(K))return Ve(Y,W,K,Ee);if(oe(K))return je(Y,W,K,Ee);_l(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,W!==null&&W.tag===6?(a(Y,W.sibling),W=p(W,K),W.return=Y,Y=W):(a(Y,W),W=yf(K,Y.mode,Ee),W.return=Y,Y=W),E(Y)):a(Y,W)}return $t}var ks=wm(!0),Am=wm(!1),yl=pr(null),xl=null,Vs=null,Rc=null;function Pc(){Rc=Vs=xl=null}function bc(i){var s=yl.current;Vt(yl),i._currentValue=s}function Dc(i,s,a){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===a)break;i=i.return}}function zs(i,s){xl=i,Rc=Vs=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Nn=!0),i.firstContext=null)}function ei(i){var s=i._currentValue;if(Rc!==i)if(i={context:i,memoizedValue:s,next:null},Vs===null){if(xl===null)throw Error(t(308));Vs=i,xl.dependencies={lanes:0,firstContext:i}}else Vs=Vs.next=i;return s}var Kr=null;function Lc(i){Kr===null?Kr=[i]:Kr.push(i)}function Cm(i,s,a,c){var p=s.interleaved;return p===null?(a.next=a,Lc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Wi(i,c)}function Wi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var vr=!1;function Ic(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Xi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function _r(i,s,a){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,Wi(i,a)}return p=c.interleaved,p===null?(s.next=s,Lc(c)):(s.next=p.next,p.next=s),c.interleaved=s,Wi(i,a)}function Sl(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Wr(i,a)}}function Pm(i,s){var a=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var p=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?p=_=E:_=_.next=E,a=a.next}while(a!==null);_===null?p=_=s:_=_.next=s}else p=_=s;a={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Ml(i,s,a,c){var p=i.updateQueue;vr=!1;var _=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var V=I,Z=V.next;V.next=null,E===null?_=Z:E.next=Z,E=V;var ge=i.alternate;ge!==null&&(ge=ge.updateQueue,I=ge.lastBaseUpdate,I!==E&&(I===null?ge.firstBaseUpdate=Z:I.next=Z,ge.lastBaseUpdate=V))}if(_!==null){var ve=p.baseState;E=0,ge=Z=V=null,I=_;do{var pe=I.lane,Ue=I.eventTime;if((c&pe)===pe){ge!==null&&(ge=ge.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=i,je=I;switch(pe=s,Ue=a,je.tag){case 1:if(Ve=je.payload,typeof Ve=="function"){ve=Ve.call(Ue,ve,pe);break e}ve=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=je.payload,pe=typeof Ve=="function"?Ve.call(Ue,ve,pe):Ve,pe==null)break e;ve=ne({},ve,pe);break e;case 2:vr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,pe=p.effects,pe===null?p.effects=[I]:pe.push(I))}else Ue={eventTime:Ue,lane:pe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ge===null?(Z=ge=Ue,V=ve):ge=ge.next=Ue,E|=pe;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;pe=I,I=pe.next,pe.next=null,p.lastBaseUpdate=pe,p.shared.pending=null}}while(!0);if(ge===null&&(V=ve),p.baseState=V,p.firstBaseUpdate=Z,p.lastBaseUpdate=ge,s=p.shared.interleaved,s!==null){p=s;do E|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);Qr|=E,i.lanes=E,i.memoizedState=ve}}function bm(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=a,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ko={},Ci=pr(Ko),$o=pr(Ko),Zo=pr(Ko);function $r(i){if(i===Ko)throw Error(t(174));return i}function Uc(i,s){switch(Ft(Zo,s),Ft($o,i),Ft(Ci,Ko),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:me(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=me(s,i)}Vt(Ci),Ft(Ci,s)}function Hs(){Vt(Ci),Vt($o),Vt(Zo)}function Dm(i){$r(Zo.current);var s=$r(Ci.current),a=me(s,i.type);s!==a&&(Ft($o,i),Ft(Ci,a))}function Nc(i){$o.current===i&&(Vt(Ci),Vt($o))}var Gt=pr(0);function El(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fc=[];function Oc(){for(var i=0;i<Fc.length;i++)Fc[i]._workInProgressVersionPrimary=null;Fc.length=0}var Tl=C.ReactCurrentDispatcher,Bc=C.ReactCurrentBatchConfig,Zr=0,Wt=null,sn=null,un=null,wl=!1,Qo=!1,Jo=0,wS=0;function xn(){throw Error(t(321))}function kc(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!hi(i[a],s[a]))return!1;return!0}function Vc(i,s,a,c,p,_){if(Zr=_,Wt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Tl.current=i===null||i.memoizedState===null?PS:bS,i=a(c,p),Qo){_=0;do{if(Qo=!1,Jo=0,25<=_)throw Error(t(301));_+=1,un=sn=null,s.updateQueue=null,Tl.current=DS,i=a(c,p)}while(Qo)}if(Tl.current=Rl,s=sn!==null&&sn.next!==null,Zr=0,un=sn=Wt=null,wl=!1,s)throw Error(t(300));return i}function zc(){var i=Jo!==0;return Jo=0,i}function Ri(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Wt.memoizedState=un=i:un=un.next=i,un}function ti(){if(sn===null){var i=Wt.alternate;i=i!==null?i.memoizedState:null}else i=sn.next;var s=un===null?Wt.memoizedState:un.next;if(s!==null)un=s,sn=i;else{if(i===null)throw Error(t(310));sn=i,i={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},un===null?Wt.memoizedState=un=i:un=un.next=i}return un}function ea(i,s){return typeof s=="function"?s(i):s}function Hc(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=sn,p=c.baseQueue,_=a.pending;if(_!==null){if(p!==null){var E=p.next;p.next=_.next,_.next=E}c.baseQueue=p=_,a.pending=null}if(p!==null){_=p.next,c=c.baseState;var I=E=null,V=null,Z=_;do{var ge=Z.lane;if((Zr&ge)===ge)V!==null&&(V=V.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),c=Z.hasEagerState?Z.eagerState:i(c,Z.action);else{var ve={lane:ge,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};V===null?(I=V=ve,E=c):V=V.next=ve,Wt.lanes|=ge,Qr|=ge}Z=Z.next}while(Z!==null&&Z!==_);V===null?E=c:V.next=I,hi(c,s.memoizedState)||(Nn=!0),s.memoizedState=c,s.baseState=E,s.baseQueue=V,a.lastRenderedState=c}if(i=a.interleaved,i!==null){p=i;do _=p.lane,Wt.lanes|=_,Qr|=_,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Gc(i){var s=ti(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var c=a.dispatch,p=a.pending,_=s.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do _=i(_,E.action),E=E.next;while(E!==p);hi(_,s.memoizedState)||(Nn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),a.lastRenderedState=_}return[_,c]}function Lm(){}function Im(i,s){var a=Wt,c=ti(),p=s(),_=!hi(c.memoizedState,p);if(_&&(c.memoizedState=p,Nn=!0),c=c.queue,Wc(Fm.bind(null,a,c,i),[i]),c.getSnapshot!==s||_||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,ta(9,Nm.bind(null,a,c,p,s),void 0,null),cn===null)throw Error(t(349));(Zr&30)!==0||Um(a,s,p)}return p}function Um(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Nm(i,s,a,c){s.value=a,s.getSnapshot=c,Om(s)&&Bm(i)}function Fm(i,s,a){return a(function(){Om(s)&&Bm(i)})}function Om(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!hi(i,a)}catch{return!0}}function Bm(i){var s=Wi(i,1);s!==null&&_i(s,i,1,-1)}function km(i){var s=Ri();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:i},s.queue=i,i=i.dispatch=RS.bind(null,Wt,i),[s.memoizedState,i]}function ta(i,s,a,c){return i={tag:i,create:s,destroy:a,deps:c,next:null},s=Wt.updateQueue,s===null?(s={lastEffect:null,stores:null},Wt.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(c=a.next,a.next=i,i.next=c,s.lastEffect=i)),i}function Vm(){return ti().memoizedState}function Al(i,s,a,c){var p=Ri();Wt.flags|=i,p.memoizedState=ta(1|s,a,void 0,c===void 0?null:c)}function Cl(i,s,a,c){var p=ti();c=c===void 0?null:c;var _=void 0;if(sn!==null){var E=sn.memoizedState;if(_=E.destroy,c!==null&&kc(c,E.deps)){p.memoizedState=ta(s,a,_,c);return}}Wt.flags|=i,p.memoizedState=ta(1|s,a,_,c)}function zm(i,s){return Al(8390656,8,i,s)}function Wc(i,s){return Cl(2048,8,i,s)}function Hm(i,s){return Cl(4,2,i,s)}function Gm(i,s){return Cl(4,4,i,s)}function Wm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Xm(i,s,a){return a=a!=null?a.concat([i]):null,Cl(4,4,Wm.bind(null,s,i),a)}function Xc(){}function jm(i,s){var a=ti();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&kc(s,c[1])?c[0]:(a.memoizedState=[i,s],i)}function Ym(i,s){var a=ti();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&kc(s,c[1])?c[0]:(i=i(),a.memoizedState=[i,s],i)}function qm(i,s,a){return(Zr&21)===0?(i.baseState&&(i.baseState=!1,Nn=!0),i.memoizedState=a):(hi(a,s)||(a=Rn(),Wt.lanes|=a,Qr|=a,i.baseState=!0),s)}function AS(i,s){var a=_t;_t=a!==0&&4>a?a:4,i(!0);var c=Bc.transition;Bc.transition={};try{i(!1),s()}finally{_t=a,Bc.transition=c}}function Km(){return ti().memoizedState}function CS(i,s,a){var c=Mr(i);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},$m(i))Zm(s,a);else if(a=Cm(i,s,a,c),a!==null){var p=bn();_i(a,i,c,p),Qm(a,s,c)}}function RS(i,s,a){var c=Mr(i),p={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if($m(i))Zm(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var E=s.lastRenderedState,I=_(E,a);if(p.hasEagerState=!0,p.eagerState=I,hi(I,E)){var V=s.interleaved;V===null?(p.next=p,Lc(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}finally{}a=Cm(i,s,p,c),a!==null&&(p=bn(),_i(a,i,c,p),Qm(a,s,c))}}function $m(i){var s=i.alternate;return i===Wt||s!==null&&s===Wt}function Zm(i,s){Qo=wl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function Qm(i,s,a){if((a&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,a|=c,s.lanes=a,Wr(i,a)}}var Rl={readContext:ei,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},PS={readContext:ei,useCallback:function(i,s){return Ri().memoizedState=[i,s===void 0?null:s],i},useContext:ei,useEffect:zm,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Al(4194308,4,Wm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Al(4194308,4,i,s)},useInsertionEffect:function(i,s){return Al(4,2,i,s)},useMemo:function(i,s){var a=Ri();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var c=Ri();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=CS.bind(null,Wt,i),[c.memoizedState,i]},useRef:function(i){var s=Ri();return i={current:i},s.memoizedState=i},useState:km,useDebugValue:Xc,useDeferredValue:function(i){return Ri().memoizedState=i},useTransition:function(){var i=km(!1),s=i[0];return i=AS.bind(null,i[1]),Ri().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var c=Wt,p=Ri();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),cn===null)throw Error(t(349));(Zr&30)!==0||Um(c,s,a)}p.memoizedState=a;var _={value:a,getSnapshot:s};return p.queue=_,zm(Fm.bind(null,c,_,i),[i]),c.flags|=2048,ta(9,Nm.bind(null,c,_,a,s),void 0,null),a},useId:function(){var i=Ri(),s=cn.identifierPrefix;if(zt){var a=Gi,c=Hi;a=(c&~(1<<32-St(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Jo++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=wS++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},bS={readContext:ei,useCallback:jm,useContext:ei,useEffect:Wc,useImperativeHandle:Xm,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Ym,useReducer:Hc,useRef:Vm,useState:function(){return Hc(ea)},useDebugValue:Xc,useDeferredValue:function(i){var s=ti();return qm(s,sn.memoizedState,i)},useTransition:function(){var i=Hc(ea)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Lm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1},DS={readContext:ei,useCallback:jm,useContext:ei,useEffect:Wc,useImperativeHandle:Xm,useInsertionEffect:Hm,useLayoutEffect:Gm,useMemo:Ym,useReducer:Gc,useRef:Vm,useState:function(){return Gc(ea)},useDebugValue:Xc,useDeferredValue:function(i){var s=ti();return sn===null?s.memoizedState=i:qm(s,sn.memoizedState,i)},useTransition:function(){var i=Gc(ea)[0],s=ti().memoizedState;return[i,s]},useMutableSource:Lm,useSyncExternalStore:Im,useId:Km,unstable_isNewReconciler:!1};function mi(i,s){if(i&&i.defaultProps){s=ne({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function jc(i,s,a,c){s=i.memoizedState,a=a(c,s),a=a==null?s:ne({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Pl={isMounted:function(i){return(i=i._reactInternals)?ki(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var c=bn(),p=Mr(i),_=Xi(c,p);_.payload=s,a!=null&&(_.callback=a),s=_r(i,_,p),s!==null&&(_i(s,i,p,c),Sl(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var c=bn(),p=Mr(i),_=Xi(c,p);_.tag=1,_.payload=s,a!=null&&(_.callback=a),s=_r(i,_,p),s!==null&&(_i(s,i,p,c),Sl(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=bn(),c=Mr(i),p=Xi(a,c);p.tag=2,s!=null&&(p.callback=s),s=_r(i,p,c),s!==null&&(_i(s,i,c,a),Sl(s,i,c))}};function Jm(i,s,a,c,p,_,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,E):s.prototype&&s.prototype.isPureReactComponent?!zo(a,c)||!zo(p,_):!0}function eg(i,s,a){var c=!1,p=mr,_=s.contextType;return typeof _=="object"&&_!==null?_=ei(_):(p=Un(s)?jr:yn.current,c=s.contextTypes,_=(c=c!=null)?Ns(i,p):mr),s=new s(a,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Pl,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function tg(i,s,a,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==i&&Pl.enqueueReplaceState(s,s.state,null)}function Yc(i,s,a,c){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Ic(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=ei(_):(_=Un(s)?jr:yn.current,p.context=Ns(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(jc(i,s,_,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Pl.enqueueReplaceState(p,p.state,null),Ml(i,a,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Gs(i,s){try{var a="",c=s;do a+=ze(c),c=c.return;while(c);var p=a}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function qc(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function Kc(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var LS=typeof WeakMap=="function"?WeakMap:Map;function ng(i,s,a){a=Xi(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Fl||(Fl=!0,ff=c),Kc(i,s)},a}function ig(i,s,a){a=Xi(-1,a),a.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;a.payload=function(){return c(p)},a.callback=function(){Kc(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Kc(i,s),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})}),a}function rg(i,s,a){var c=i.pingCache;if(c===null){c=i.pingCache=new LS;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(a)||(p.add(a),i=jS.bind(null,i,s,a),s.then(i,i))}function sg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function og(i,s,a,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Xi(-1,1),s.tag=2,_r(a,s,1))),a.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var IS=C.ReactCurrentOwner,Nn=!1;function Pn(i,s,a,c){s.child=i===null?Am(s,null,a,c):ks(s,i.child,a,c)}function ag(i,s,a,c,p){a=a.render;var _=s.ref;return zs(s,p),c=Vc(i,s,a,c,_,p),a=zc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ji(i,s,p)):(zt&&a&&Ec(s),s.flags|=1,Pn(i,s,c,p),s.child)}function lg(i,s,a,c,p){if(i===null){var _=a.type;return typeof _=="function"&&!_f(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=_,ug(i,s,_,c,p)):(i=Hl(a.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var E=_.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(E,c)&&i.ref===s.ref)return ji(i,s,p)}return s.flags|=1,i=Tr(_,c),i.ref=s.ref,i.return=s,s.child=i}function ug(i,s,a,c,p){if(i!==null){var _=i.memoizedProps;if(zo(_,c)&&i.ref===s.ref)if(Nn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Nn=!0);else return s.lanes=i.lanes,ji(i,s,p)}return $c(i,s,a,c,p)}function cg(i,s,a){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Xs,Yn),Yn|=a;else{if((a&1073741824)===0)return i=_!==null?_.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ft(Xs,Yn),Yn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Ft(Xs,Yn),Yn|=c}else _!==null?(c=_.baseLanes|a,s.memoizedState=null):c=a,Ft(Xs,Yn),Yn|=c;return Pn(i,s,p,a),s.child}function fg(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function $c(i,s,a,c,p){var _=Un(a)?jr:yn.current;return _=Ns(s,_),zs(s,p),a=Vc(i,s,a,c,_,p),c=zc(),i!==null&&!Nn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ji(i,s,p)):(zt&&c&&Ec(s),s.flags|=1,Pn(i,s,a,p),s.child)}function dg(i,s,a,c,p){if(Un(a)){var _=!0;hl(s)}else _=!1;if(zs(s,p),s.stateNode===null)Dl(i,s),eg(s,a,c),Yc(s,a,c,p),c=!0;else if(i===null){var E=s.stateNode,I=s.memoizedProps;E.props=I;var V=E.context,Z=a.contextType;typeof Z=="object"&&Z!==null?Z=ei(Z):(Z=Un(a)?jr:yn.current,Z=Ns(s,Z));var ge=a.getDerivedStateFromProps,ve=typeof ge=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||V!==Z)&&tg(s,E,c,Z),vr=!1;var pe=s.memoizedState;E.state=pe,Ml(s,c,E,p),V=s.memoizedState,I!==c||pe!==V||In.current||vr?(typeof ge=="function"&&(jc(s,a,ge,c),V=s.memoizedState),(I=vr||Jm(s,a,I,c,pe,V,Z))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(s.flags|=4194308)):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=V),E.props=c,E.state=V,E.context=Z,c=I):(typeof E.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{E=s.stateNode,Rm(i,s),I=s.memoizedProps,Z=s.type===s.elementType?I:mi(s.type,I),E.props=Z,ve=s.pendingProps,pe=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=ei(V):(V=Un(a)?jr:yn.current,V=Ns(s,V));var Ue=a.getDerivedStateFromProps;(ge=typeof Ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ve||pe!==V)&&tg(s,E,c,V),vr=!1,pe=s.memoizedState,E.state=pe,Ml(s,c,E,p);var Ve=s.memoizedState;I!==ve||pe!==Ve||In.current||vr?(typeof Ue=="function"&&(jc(s,a,Ue,c),Ve=s.memoizedState),(Z=vr||Jm(s,a,Z,c,pe,Ve,V)||!1)?(ge||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ve,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ve,V)),typeof E.componentDidUpdate=="function"&&(s.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&pe===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&pe===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Ve),E.props=c,E.state=Ve,E.context=V,c=Z):(typeof E.componentDidUpdate!="function"||I===i.memoizedProps&&pe===i.memoizedState||(s.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&pe===i.memoizedState||(s.flags|=1024),c=!1)}return Zc(i,s,a,c,_,p)}function Zc(i,s,a,c,p,_){fg(i,s);var E=(s.flags&128)!==0;if(!c&&!E)return p&&vm(s,a,!1),ji(i,s,_);c=s.stateNode,IS.current=s;var I=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&E?(s.child=ks(s,i.child,null,_),s.child=ks(s,null,I,_)):Pn(i,s,I,_),s.memoizedState=c.state,p&&vm(s,a,!0),s.child}function hg(i){var s=i.stateNode;s.pendingContext?mm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&mm(i,s.context,!1),Uc(i,s.containerInfo)}function pg(i,s,a,c,p){return Bs(),Cc(p),s.flags|=256,Pn(i,s,a,c),s.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function Jc(i){return{baseLanes:i,cachePool:null,transitions:null}}function mg(i,s,a){var c=s.pendingProps,p=Gt.current,_=!1,E=(s.flags&128)!==0,I;if((I=E)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ft(Gt,p&1),i===null)return Ac(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(E=c.children,i=c.fallback,_?(c=s.mode,_=s.child,E={mode:"hidden",children:E},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=E):_=Gl(E,c,0,null),i=ns(i,c,a,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Jc(a),s.memoizedState=Qc,i):ef(s,E));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return US(i,s,E,c,I,p,a);if(_){_=c.fallback,E=s.mode,p=i.child,I=p.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=V,s.deletions=null):(c=Tr(p,V),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?_=Tr(I,_):(_=ns(_,E,a,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,E=i.child.memoizedState,E=E===null?Jc(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=i.childLanes&~a,s.memoizedState=Qc,c}return _=i.child,i=_.sibling,c=Tr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=c,s.memoizedState=null,c}function ef(i,s){return s=Gl({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function bl(i,s,a,c){return c!==null&&Cc(c),ks(s,i.child,null,a),i=ef(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function US(i,s,a,c,p,_,E){if(a)return s.flags&256?(s.flags&=-257,c=qc(Error(t(422))),bl(i,s,E,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=Gl({mode:"visible",children:c.children},p,0,null),_=ns(_,p,E,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&ks(s,i.child,null,E),s.child.memoizedState=Jc(E),s.memoizedState=Qc,_);if((s.mode&1)===0)return bl(i,s,E,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,_=Error(t(419)),c=qc(_,c,void 0),bl(i,s,E,c)}if(I=(E&i.childLanes)!==0,Nn||I){if(c=cn,c!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|E))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,Wi(i,p),_i(c,i,p,-1))}return vf(),c=qc(Error(t(421))),bl(i,s,E,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=YS.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,jn=hr(p.nextSibling),Xn=s,zt=!0,pi=null,i!==null&&(Qn[Jn++]=Hi,Qn[Jn++]=Gi,Qn[Jn++]=Yr,Hi=i.id,Gi=i.overflow,Yr=s),s=ef(s,c.children),s.flags|=4096,s)}function gg(i,s,a){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Dc(i.return,s,a)}function tf(i,s,a,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=p)}function vg(i,s,a){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Pn(i,s,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&gg(i,a,s);else if(i.tag===19)gg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Ft(Gt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&El(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),tf(s,!1,p,a,_);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&El(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}tf(s,!0,a,null,_);break;case"together":tf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Dl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ji(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),Qr|=s.lanes,(a&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Tr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Tr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function NS(i,s,a){switch(s.tag){case 3:hg(s),Bs();break;case 5:Dm(s);break;case 1:Un(s.type)&&hl(s);break;case 4:Uc(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Ft(yl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Gt,Gt.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?mg(i,s,a):(Ft(Gt,Gt.current&1),i=ji(i,s,a),i!==null?i.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(i.flags&128)!==0){if(c)return vg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ft(Gt,Gt.current),c)break;return null;case 22:case 23:return s.lanes=0,cg(i,s,a)}return ji(i,s,a)}var _g,nf,yg,xg;_g=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},nf=function(){},yg=function(i,s,a,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,$r(Ci.current);var _=null;switch(a){case"input":p=bt(i,p),c=bt(i,c),_=[];break;case"select":p=ne({},p,{value:void 0}),c=ne({},c,{value:void 0}),_=[];break;case"textarea":p=Bt(i,p),c=Bt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=cl)}Ye(a,c);var E;a=null;for(Z in p)if(!c.hasOwnProperty(Z)&&p.hasOwnProperty(Z)&&p[Z]!=null)if(Z==="style"){var I=p[Z];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?_||(_=[]):(_=_||[]).push(Z,null));for(Z in c){var V=c[Z];if(I=p?.[Z],c.hasOwnProperty(Z)&&V!==I&&(V!=null||I!=null))if(Z==="style")if(I){for(E in I)!I.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&I[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(_||(_=[]),_.push(Z,a)),a=V;else Z==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,I=I?I.__html:void 0,V!=null&&I!==V&&(_=_||[]).push(Z,V)):Z==="children"?typeof V!="string"&&typeof V!="number"||(_=_||[]).push(Z,""+V):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(V!=null&&Z==="onScroll"&&kt("scroll",i),_||I===V||(_=[])):(_=_||[]).push(Z,V))}a&&(_=_||[]).push("style",a);var Z=_;(s.updateQueue=Z)&&(s.flags|=4)}},xg=function(i,s,a,c){a!==c&&(s.flags|=4)};function na(i,s){if(!zt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,c=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=a,s}function FS(i,s,a){var c=s.pendingProps;switch(Tc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return Un(s.type)&&dl(),Sn(s),null;case 3:return c=s.stateNode,Hs(),Vt(In),Vt(yn),Oc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(vl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,pi!==null&&(pf(pi),pi=null))),nf(i,s),Sn(s),null;case 5:Nc(s);var p=$r(Zo.current);if(a=s.type,i!==null&&s.stateNode!=null)yg(i,s,a,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=$r(Ci.current),vl(s)){c=s.stateNode,a=s.type;var _=s.memoizedProps;switch(c[Ai]=s,c[jo]=_,i=(s.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(p=0;p<Go.length;p++)kt(Go[p],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":ct(c,_),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},kt("invalid",c);break;case"textarea":L(c,_),kt("invalid",c)}Ye(a,_),p=null;for(var E in _)if(_.hasOwnProperty(E)){var I=_[E];E==="children"?typeof I=="string"?c.textContent!==I&&(_.suppressHydrationWarning!==!0&&ul(c.textContent,I,i),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(_.suppressHydrationWarning!==!0&&ul(c.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&kt("scroll",c)}switch(a){case"input":mt(c),It(c,_,!0);break;case"textarea":mt(c),q(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=cl)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=fe(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=E.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=E.createElement(a,{is:c.is}):(i=E.createElement(a),a==="select"&&(E=i,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):i=E.createElementNS(i,a),i[Ai]=s,i[jo]=c,_g(i,s,!1,!1),s.stateNode=i;e:{switch(E=Ae(a,c),a){case"dialog":kt("cancel",i),kt("close",i),p=c;break;case"iframe":case"object":case"embed":kt("load",i),p=c;break;case"video":case"audio":for(p=0;p<Go.length;p++)kt(Go[p],i);p=c;break;case"source":kt("error",i),p=c;break;case"img":case"image":case"link":kt("error",i),kt("load",i),p=c;break;case"details":kt("toggle",i),p=c;break;case"input":ct(i,c),p=bt(i,c),kt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=ne({},c,{value:void 0}),kt("invalid",i);break;case"textarea":L(i,c),p=Bt(i,c),kt("invalid",i);break;default:p=c}Ye(a,p),I=p;for(_ in I)if(I.hasOwnProperty(_)){var V=I[_];_==="style"?Pe(i,V):_==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ke(i,V)):_==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Te(i,V):typeof V=="number"&&Te(i,""+V):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?V!=null&&_==="onScroll"&&kt("scroll",i):V!=null&&b(i,_,V,E))}switch(a){case"input":mt(i),It(i,c,!1);break;case"textarea":mt(i),q(i);break;case"option":c.value!=null&&i.setAttribute("value",""+Se(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Ot(i,!!c.multiple,_,!1):c.defaultValue!=null&&Ot(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=cl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)xg(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=$r(Zo.current),$r(Ci.current),vl(s)){if(c=s.stateNode,a=s.memoizedProps,c[Ai]=s,(_=c.nodeValue!==a)&&(i=Xn,i!==null))switch(i.tag){case 3:ul(c.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ul(c.nodeValue,a,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=s,s.stateNode=c}return Sn(s),null;case 13:if(Vt(Gt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(zt&&jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Em(),Bs(),s.flags|=98560,_=!1;else if(_=vl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Ai]=s}else Bs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Sn(s),_=!1}else pi!==null&&(pf(pi),pi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Gt.current&1)!==0?on===0&&(on=3):vf())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return Hs(),nf(i,s),i===null&&Wo(s.stateNode.containerInfo),Sn(s),null;case 10:return bc(s.type._context),Sn(s),null;case 17:return Un(s.type)&&dl(),Sn(s),null;case 19:if(Vt(Gt),_=s.memoizedState,_===null)return Sn(s),null;if(c=(s.flags&128)!==0,E=_.rendering,E===null)if(c)na(_,!1);else{if(on!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(E=El(i),E!==null){for(s.flags|=128,na(_,!1),c=E.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)_=a,i=c,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,i=E.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),s.child}i=i.sibling}_.tail!==null&&X()>js&&(s.flags|=128,c=!0,na(_,!1),s.lanes=4194304)}else{if(!c)if(i=El(E),i!==null){if(s.flags|=128,c=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),na(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!zt)return Sn(s),null}else 2*X()-_.renderingStartTime>js&&a!==1073741824&&(s.flags|=128,c=!0,na(_,!1),s.lanes=4194304);_.isBackwards?(E.sibling=s.child,s.child=E):(a=_.last,a!==null?a.sibling=E:s.child=E,_.last=E)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=X(),s.sibling=null,a=Gt.current,Ft(Gt,c?a&1|2:a&1),s):(Sn(s),null);case 22:case 23:return gf(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(Yn&1073741824)!==0&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function OS(i,s){switch(Tc(s),s.tag){case 1:return Un(s.type)&&dl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Hs(),Vt(In),Vt(yn),Oc(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Nc(s),null;case 13:if(Vt(Gt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Bs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Vt(Gt),null;case 4:return Hs(),null;case 10:return bc(s.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Ll=!1,Mn=!1,BS=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ws(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){jt(i,s,c)}else a.current=null}function rf(i,s,a){try{a()}catch(c){jt(i,s,c)}}var Sg=!1;function kS(i,s){if(mc=Qa,i=Jp(),ac(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var E=0,I=-1,V=-1,Z=0,ge=0,ve=i,pe=null;t:for(;;){for(var Ue;ve!==a||p!==0&&ve.nodeType!==3||(I=E+p),ve!==_||c!==0&&ve.nodeType!==3||(V=E+c),ve.nodeType===3&&(E+=ve.nodeValue.length),(Ue=ve.firstChild)!==null;)pe=ve,ve=Ue;for(;;){if(ve===i)break t;if(pe===a&&++Z===p&&(I=E),pe===_&&++ge===c&&(V=E),(Ue=ve.nextSibling)!==null)break;ve=pe,pe=ve.parentNode}ve=Ue}a=I===-1||V===-1?null:{start:I,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(gc={focusedElem:i,selectionRange:a},Qa=!1,Oe=s;Oe!==null;)if(s=Oe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Oe=i;else for(;Oe!==null;){s=Oe;try{var Ve=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var je=Ve.memoizedProps,$t=Ve.memoizedState,Y=s.stateNode,W=Y.getSnapshotBeforeUpdate(s.elementType===s.type?je:mi(s.type,je),$t);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){jt(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Oe=i;break}Oe=s.return}return Ve=Sg,Sg=!1,Ve}function ia(i,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&rf(s,a,_)}p=p.next}while(p!==c)}}function Il(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function sf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function Mg(i){var s=i.alternate;s!==null&&(i.alternate=null,Mg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ai],delete s[jo],delete s[xc],delete s[SS],delete s[MS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Eg(i){return i.tag===5||i.tag===3||i.tag===4}function Tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Eg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function of(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=cl));else if(c!==4&&(i=i.child,i!==null))for(of(i,s,a),i=i.sibling;i!==null;)of(i,s,a),i=i.sibling}function af(i,s,a){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(af(i,s,a),i=i.sibling;i!==null;)af(i,s,a),i=i.sibling}var hn=null,gi=!1;function yr(i,s,a){for(a=a.child;a!==null;)wg(i,s,a),a=a.sibling}function wg(i,s,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Ze,a)}catch{}switch(a.tag){case 5:Mn||Ws(a,s);case 6:var c=hn,p=gi;hn=null,yr(i,s,a),hn=c,gi=p,hn!==null&&(gi?(i=hn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(gi?(i=hn,a=a.stateNode,i.nodeType===8?yc(i.parentNode,a):i.nodeType===1&&yc(i,a),No(i)):yc(hn,a.stateNode));break;case 4:c=hn,p=gi,hn=a.stateNode.containerInfo,gi=!0,yr(i,s,a),hn=c,gi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,E=_.destroy;_=_.tag,E!==void 0&&((_&2)!==0||(_&4)!==0)&&rf(a,s,E),p=p.next}while(p!==c)}yr(i,s,a);break;case 1:if(!Mn&&(Ws(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){jt(a,s,I)}yr(i,s,a);break;case 21:yr(i,s,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,yr(i,s,a),Mn=c):yr(i,s,a);break;default:yr(i,s,a)}}function Ag(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new BS),s.forEach(function(c){var p=qS.bind(null,i,c);a.has(c)||(a.add(c),c.then(p,p))})}}function vi(i,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var p=a[c];try{var _=i,E=s,I=E;e:for(;I!==null;){switch(I.tag){case 5:hn=I.stateNode,gi=!1;break e;case 3:hn=I.stateNode.containerInfo,gi=!0;break e;case 4:hn=I.stateNode.containerInfo,gi=!0;break e}I=I.return}if(hn===null)throw Error(t(160));wg(_,E,p),hn=null,gi=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(Z){jt(p,s,Z)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Cg(s,i),s=s.sibling}function Cg(i,s){var a=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(vi(s,i),Pi(i),c&4){try{ia(3,i,i.return),Il(3,i)}catch(je){jt(i,i.return,je)}try{ia(5,i,i.return)}catch(je){jt(i,i.return,je)}}break;case 1:vi(s,i),Pi(i),c&512&&a!==null&&Ws(a,a.return);break;case 5:if(vi(s,i),Pi(i),c&512&&a!==null&&Ws(a,a.return),i.flags&32){var p=i.stateNode;try{Te(p,"")}catch(je){jt(i,i.return,je)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,E=a!==null?a.memoizedProps:_,I=i.type,V=i.updateQueue;if(i.updateQueue=null,V!==null)try{I==="input"&&_.type==="radio"&&_.name!=null&&nt(p,_),Ae(I,E);var Z=Ae(I,_);for(E=0;E<V.length;E+=2){var ge=V[E],ve=V[E+1];ge==="style"?Pe(p,ve):ge==="dangerouslySetInnerHTML"?Ke(p,ve):ge==="children"?Te(p,ve):b(p,ge,ve,Z)}switch(I){case"input":He(p,_);break;case"textarea":w(p,_);break;case"select":var pe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var Ue=_.value;Ue!=null?Ot(p,!!_.multiple,Ue,!1):pe!==!!_.multiple&&(_.defaultValue!=null?Ot(p,!!_.multiple,_.defaultValue,!0):Ot(p,!!_.multiple,_.multiple?[]:"",!1))}p[jo]=_}catch(je){jt(i,i.return,je)}}break;case 6:if(vi(s,i),Pi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(je){jt(i,i.return,je)}}break;case 3:if(vi(s,i),Pi(i),c&4&&a!==null&&a.memoizedState.isDehydrated)try{No(s.containerInfo)}catch(je){jt(i,i.return,je)}break;case 4:vi(s,i),Pi(i);break;case 13:vi(s,i),Pi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(cf=X())),c&4&&Ag(i);break;case 22:if(ge=a!==null&&a.memoizedState!==null,i.mode&1?(Mn=(Z=Mn)||ge,vi(s,i),Mn=Z):vi(s,i),Pi(i),c&8192){if(Z=i.memoizedState!==null,(i.stateNode.isHidden=Z)&&!ge&&(i.mode&1)!==0)for(Oe=i,ge=i.child;ge!==null;){for(ve=Oe=ge;Oe!==null;){switch(pe=Oe,Ue=pe.child,pe.tag){case 0:case 11:case 14:case 15:ia(4,pe,pe.return);break;case 1:Ws(pe,pe.return);var Ve=pe.stateNode;if(typeof Ve.componentWillUnmount=="function"){c=pe,a=pe.return;try{s=c,Ve.props=s.memoizedProps,Ve.state=s.memoizedState,Ve.componentWillUnmount()}catch(je){jt(c,a,je)}}break;case 5:Ws(pe,pe.return);break;case 22:if(pe.memoizedState!==null){bg(ve);continue}}Ue!==null?(Ue.return=pe,Oe=Ue):bg(ve)}ge=ge.sibling}e:for(ge=null,ve=i;;){if(ve.tag===5){if(ge===null){ge=ve;try{p=ve.stateNode,Z?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(I=ve.stateNode,V=ve.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,I.style.display=Me("display",E))}catch(je){jt(i,i.return,je)}}}else if(ve.tag===6){if(ge===null)try{ve.stateNode.nodeValue=Z?"":ve.memoizedProps}catch(je){jt(i,i.return,je)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===i)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===i)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===i)break e;ge===ve&&(ge=null),ve=ve.return}ge===ve&&(ge=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:vi(s,i),Pi(i),c&4&&Ag(i);break;case 21:break;default:vi(s,i),Pi(i)}}function Pi(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(Eg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(Te(p,""),c.flags&=-33);var _=Tg(i);af(i,_,p);break;case 3:case 4:var E=c.stateNode.containerInfo,I=Tg(i);of(i,I,E);break;default:throw Error(t(161))}}catch(V){jt(i,i.return,V)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function VS(i,s,a){Oe=i,Rg(i)}function Rg(i,s,a){for(var c=(i.mode&1)!==0;Oe!==null;){var p=Oe,_=p.child;if(p.tag===22&&c){var E=p.memoizedState!==null||Ll;if(!E){var I=p.alternate,V=I!==null&&I.memoizedState!==null||Mn;I=Ll;var Z=Mn;if(Ll=E,(Mn=V)&&!Z)for(Oe=p;Oe!==null;)E=Oe,V=E.child,E.tag===22&&E.memoizedState!==null?Dg(p):V!==null?(V.return=E,Oe=V):Dg(p);for(;_!==null;)Oe=_,Rg(_),_=_.sibling;Oe=p,Ll=I,Mn=Z}Pg(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,Oe=_):Pg(i)}}function Pg(i){for(;Oe!==null;){var s=Oe;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Mn||Il(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:mi(s.type,a.memoizedProps);c.componentDidUpdate(p,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&bm(s,_,c);break;case 3:var E=s.updateQueue;if(E!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}bm(s,E,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Z=s.alternate;if(Z!==null){var ge=Z.memoizedState;if(ge!==null){var ve=ge.dehydrated;ve!==null&&No(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&sf(s)}catch(pe){jt(s,s.return,pe)}}if(s===i){Oe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function bg(i){for(;Oe!==null;){var s=Oe;if(s===i){Oe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Oe=a;break}Oe=s.return}}function Dg(i){for(;Oe!==null;){var s=Oe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Il(4,s)}catch(V){jt(s,a,V)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(V){jt(s,p,V)}}var _=s.return;try{sf(s)}catch(V){jt(s,_,V)}break;case 5:var E=s.return;try{sf(s)}catch(V){jt(s,E,V)}}}catch(V){jt(s,s.return,V)}if(s===i){Oe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Oe=I;break}Oe=s.return}}var zS=Math.ceil,Ul=C.ReactCurrentDispatcher,lf=C.ReactCurrentOwner,ni=C.ReactCurrentBatchConfig,Mt=0,cn=null,Jt=null,pn=0,Yn=0,Xs=pr(0),on=0,ra=null,Qr=0,Nl=0,uf=0,sa=null,Fn=null,cf=0,js=1/0,Yi=null,Fl=!1,ff=null,xr=null,Ol=!1,Sr=null,Bl=0,oa=0,df=null,kl=-1,Vl=0;function bn(){return(Mt&6)!==0?X():kl!==-1?kl:kl=X()}function Mr(i){return(i.mode&1)===0?1:(Mt&2)!==0&&pn!==0?pn&-pn:TS.transition!==null?(Vl===0&&(Vl=Rn()),Vl):(i=_t,i!==0||(i=window.event,i=i===void 0?16:Ip(i.type)),i)}function _i(i,s,a,c){if(50<oa)throw oa=0,df=null,Error(t(185));Kt(i,a,c),((Mt&2)===0||i!==cn)&&(i===cn&&((Mt&2)===0&&(Nl|=a),on===4&&Er(i,pn)),On(i,c),a===1&&Mt===0&&(s.mode&1)===0&&(js=X()+500,pl&&gr()))}function On(i,s){var a=i.callbackNode;Gr(i,s);var c=di(i,i===cn?pn:0);if(c===0)a!==null&&j(a),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(a!=null&&j(a),s===1)i.tag===0?ES(Ig.bind(null,i)):_m(Ig.bind(null,i)),yS(function(){(Mt&6)===0&&gr()}),a=null;else{switch(wp(c)){case 1:a=Ce;break;case 4:a=ke;break;case 16:a=Ie;break;case 536870912:a=rt;break;default:a=Ie}a=zg(a,Lg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Lg(i,s){if(kl=-1,Vl=0,(Mt&6)!==0)throw Error(t(327));var a=i.callbackNode;if(Ys()&&i.callbackNode!==a)return null;var c=di(i,i===cn?pn:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=zl(i,c);else{s=c;var p=Mt;Mt|=2;var _=Ng();(cn!==i||pn!==s)&&(Yi=null,js=X()+500,es(i,s));do try{WS();break}catch(I){Ug(i,I)}while(!0);Pc(),Ul.current=_,Mt=p,Jt!==null?s=0:(cn=null,pn=0,s=on)}if(s!==0){if(s===2&&(p=Nt(i),p!==0&&(c=p,s=hf(i,p))),s===1)throw a=ra,es(i,0),Er(i,c),On(i,X()),a;if(s===6)Er(i,c);else{if(p=i.current.alternate,(c&30)===0&&!HS(p)&&(s=zl(i,c),s===2&&(_=Nt(i),_!==0&&(c=_,s=hf(i,_))),s===1))throw a=ra,es(i,0),Er(i,c),On(i,X()),a;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ts(i,Fn,Yi);break;case 3:if(Er(i,c),(c&130023424)===c&&(s=cf+500-X(),10<s)){if(di(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){bn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=_c(ts.bind(null,i,Fn,Yi),s);break}ts(i,Fn,Yi);break;case 4:if(Er(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var E=31-St(c);_=1<<E,E=s[E],E>p&&(p=E),c&=~_}if(c=p,c=X()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zS(c/1960))-c,10<c){i.timeoutHandle=_c(ts.bind(null,i,Fn,Yi),c);break}ts(i,Fn,Yi);break;case 5:ts(i,Fn,Yi);break;default:throw Error(t(329))}}}return On(i,X()),i.callbackNode===a?Lg.bind(null,i):null}function hf(i,s){var a=sa;return i.current.memoizedState.isDehydrated&&(es(i,s).flags|=256),i=zl(i,s),i!==2&&(s=Fn,Fn=a,s!==null&&pf(s)),i}function pf(i){Fn===null?Fn=i:Fn.push.apply(Fn,i)}function HS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var p=a[c],_=p.getSnapshot;p=p.value;try{if(!hi(_(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Er(i,s){for(s&=~uf,s&=~Nl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-St(s),c=1<<a;i[a]=-1,s&=~c}}function Ig(i){if((Mt&6)!==0)throw Error(t(327));Ys();var s=di(i,0);if((s&1)===0)return On(i,X()),null;var a=zl(i,s);if(i.tag!==0&&a===2){var c=Nt(i);c!==0&&(s=c,a=hf(i,c))}if(a===1)throw a=ra,es(i,0),Er(i,s),On(i,X()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ts(i,Fn,Yi),On(i,X()),null}function mf(i,s){var a=Mt;Mt|=1;try{return i(s)}finally{Mt=a,Mt===0&&(js=X()+500,pl&&gr())}}function Jr(i){Sr!==null&&Sr.tag===0&&(Mt&6)===0&&Ys();var s=Mt;Mt|=1;var a=ni.transition,c=_t;try{if(ni.transition=null,_t=1,i)return i()}finally{_t=c,ni.transition=a,Mt=s,(Mt&6)===0&&gr()}}function gf(){Yn=Xs.current,Vt(Xs)}function es(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,_S(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(Tc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&dl();break;case 3:Hs(),Vt(In),Vt(yn),Oc();break;case 5:Nc(c);break;case 4:Hs();break;case 13:Vt(Gt);break;case 19:Vt(Gt);break;case 10:bc(c.type._context);break;case 22:case 23:gf()}a=a.return}if(cn=i,Jt=i=Tr(i.current,null),pn=Yn=s,on=0,ra=null,uf=Nl=Qr=0,Fn=sa=null,Kr!==null){for(s=0;s<Kr.length;s++)if(a=Kr[s],c=a.interleaved,c!==null){a.interleaved=null;var p=c.next,_=a.pending;if(_!==null){var E=_.next;_.next=p,c.next=E}a.pending=c}Kr=null}return i}function Ug(i,s){do{var a=Jt;try{if(Pc(),Tl.current=Rl,wl){for(var c=Wt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}wl=!1}if(Zr=0,un=sn=Wt=null,Qo=!1,Jo=0,lf.current=null,a===null||a.return===null){on=1,ra=s,Jt=null;break}e:{var _=i,E=a.return,I=a,V=s;if(s=pn,I.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var Z=V,ge=I,ve=ge.tag;if((ge.mode&1)===0&&(ve===0||ve===11||ve===15)){var pe=ge.alternate;pe?(ge.updateQueue=pe.updateQueue,ge.memoizedState=pe.memoizedState,ge.lanes=pe.lanes):(ge.updateQueue=null,ge.memoizedState=null)}var Ue=sg(E);if(Ue!==null){Ue.flags&=-257,og(Ue,E,I,_,s),Ue.mode&1&&rg(_,Z,s),s=Ue,V=Z;var Ve=s.updateQueue;if(Ve===null){var je=new Set;je.add(V),s.updateQueue=je}else Ve.add(V);break e}else{if((s&1)===0){rg(_,Z,s),vf();break e}V=Error(t(426))}}else if(zt&&I.mode&1){var $t=sg(E);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),og($t,E,I,_,s),Cc(Gs(V,I));break e}}_=V=Gs(V,I),on!==4&&(on=2),sa===null?sa=[_]:sa.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Y=ng(_,V,s);Pm(_,Y);break e;case 1:I=V;var W=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(xr===null||!xr.has(K)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ee=ig(_,I,s);Pm(_,Ee);break e}}_=_.return}while(_!==null)}Og(a)}catch(qe){s=qe,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Ng(){var i=Ul.current;return Ul.current=Rl,i===null?Rl:i}function vf(){(on===0||on===3||on===2)&&(on=4),cn===null||(Qr&268435455)===0&&(Nl&268435455)===0||Er(cn,pn)}function zl(i,s){var a=Mt;Mt|=2;var c=Ng();(cn!==i||pn!==s)&&(Yi=null,es(i,s));do try{GS();break}catch(p){Ug(i,p)}while(!0);if(Pc(),Mt=a,Ul.current=c,Jt!==null)throw Error(t(261));return cn=null,pn=0,on}function GS(){for(;Jt!==null;)Fg(Jt)}function WS(){for(;Jt!==null&&!ee();)Fg(Jt)}function Fg(i){var s=Vg(i.alternate,i,Yn);i.memoizedProps=i.pendingProps,s===null?Og(i):Jt=s,lf.current=null}function Og(i){var s=i;do{var a=s.alternate;if(i=s.return,(s.flags&32768)===0){if(a=FS(a,s,Yn),a!==null){Jt=a;return}}else{if(a=OS(a,s),a!==null){a.flags&=32767,Jt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{on=6,Jt=null;return}}if(s=s.sibling,s!==null){Jt=s;return}Jt=s=i}while(s!==null);on===0&&(on=5)}function ts(i,s,a){var c=_t,p=ni.transition;try{ni.transition=null,_t=1,XS(i,s,a,c)}finally{ni.transition=p,_t=c}return null}function XS(i,s,a,c){do Ys();while(Sr!==null);if((Mt&6)!==0)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=a.lanes|a.childLanes;if(_n(i,_),i===cn&&(Jt=cn=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ol||(Ol=!0,zg(Ie,function(){return Ys(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=ni.transition,ni.transition=null;var E=_t;_t=1;var I=Mt;Mt|=4,lf.current=null,kS(i,a),Cg(a,i),fS(gc),Qa=!!mc,gc=mc=null,i.current=a,VS(a),te(),Mt=I,_t=E,ni.transition=_}else i.current=a;if(Ol&&(Ol=!1,Sr=i,Bl=p),_=i.pendingLanes,_===0&&(xr=null),Ct(a.stateNode),On(i,X()),s!==null)for(c=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],c(p.value,{componentStack:p.stack,digest:p.digest});if(Fl)throw Fl=!1,i=ff,ff=null,i;return(Bl&1)!==0&&i.tag!==0&&Ys(),_=i.pendingLanes,(_&1)!==0?i===df?oa++:(oa=0,df=i):oa=0,gr(),null}function Ys(){if(Sr!==null){var i=wp(Bl),s=ni.transition,a=_t;try{if(ni.transition=null,_t=16>i?16:i,Sr===null)var c=!1;else{if(i=Sr,Sr=null,Bl=0,(Mt&6)!==0)throw Error(t(331));var p=Mt;for(Mt|=4,Oe=i.current;Oe!==null;){var _=Oe,E=_.child;if((Oe.flags&16)!==0){var I=_.deletions;if(I!==null){for(var V=0;V<I.length;V++){var Z=I[V];for(Oe=Z;Oe!==null;){var ge=Oe;switch(ge.tag){case 0:case 11:case 15:ia(8,ge,_)}var ve=ge.child;if(ve!==null)ve.return=ge,Oe=ve;else for(;Oe!==null;){ge=Oe;var pe=ge.sibling,Ue=ge.return;if(Mg(ge),ge===Z){Oe=null;break}if(pe!==null){pe.return=Ue,Oe=pe;break}Oe=Ue}}}var Ve=_.alternate;if(Ve!==null){var je=Ve.child;if(je!==null){Ve.child=null;do{var $t=je.sibling;je.sibling=null,je=$t}while(je!==null)}}Oe=_}}if((_.subtreeFlags&2064)!==0&&E!==null)E.return=_,Oe=E;else e:for(;Oe!==null;){if(_=Oe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:ia(9,_,_.return)}var Y=_.sibling;if(Y!==null){Y.return=_.return,Oe=Y;break e}Oe=_.return}}var W=i.current;for(Oe=W;Oe!==null;){E=Oe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Oe=K;else e:for(E=W;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Il(9,I)}}catch(qe){jt(I,I.return,qe)}if(I===E){Oe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Oe=Ee;break e}Oe=I.return}}if(Mt=p,gr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Ze,i)}catch{}c=!0}return c}finally{_t=a,ni.transition=s}}return!1}function Bg(i,s,a){s=Gs(a,s),s=ng(i,s,1),i=_r(i,s,1),s=bn(),i!==null&&(Kt(i,1,s),On(i,s))}function jt(i,s,a){if(i.tag===3)Bg(i,i,a);else for(;s!==null;){if(s.tag===3){Bg(s,i,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){i=Gs(a,i),i=ig(s,i,1),s=_r(s,i,1),i=bn(),s!==null&&(Kt(s,1,i),On(s,i));break}}s=s.return}}function jS(i,s,a){var c=i.pingCache;c!==null&&c.delete(s),s=bn(),i.pingedLanes|=i.suspendedLanes&a,cn===i&&(pn&a)===a&&(on===4||on===3&&(pn&130023424)===pn&&500>X()-cf?es(i,0):uf|=a),On(i,s)}function kg(i,s){s===0&&((i.mode&1)===0?s=1:(s=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var a=bn();i=Wi(i,s),i!==null&&(Kt(i,s,a),On(i,a))}function YS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),kg(i,a)}function qS(i,s){var a=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),kg(i,a)}var Vg;Vg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||In.current)Nn=!0;else{if((i.lanes&a)===0&&(s.flags&128)===0)return Nn=!1,NS(i,s,a);Nn=(i.flags&131072)!==0}else Nn=!1,zt&&(s.flags&1048576)!==0&&ym(s,gl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Dl(i,s),i=s.pendingProps;var p=Ns(s,yn.current);zs(s,a),p=Vc(null,s,c,i,p,a);var _=zc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Un(c)?(_=!0,hl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Ic(s),p.updater=Pl,s.stateNode=p,p._reactInternals=s,Yc(s,c,i,a),s=Zc(null,s,c,!0,_,a)):(s.tag=0,zt&&_&&Ec(s),Pn(null,s,p,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Dl(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=$S(c),i=mi(c,i),p){case 0:s=$c(null,s,c,i,a);break e;case 1:s=dg(null,s,c,i,a);break e;case 11:s=ag(null,s,c,i,a);break e;case 14:s=lg(null,s,c,mi(c.type,i),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),$c(i,s,c,p,a);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),dg(i,s,c,p,a);case 3:e:{if(hg(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Rm(i,s),Ml(s,c,null,a);var E=s.memoizedState;if(c=E.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=Gs(Error(t(423)),s),s=pg(i,s,c,a,p);break e}else if(c!==p){p=Gs(Error(t(424)),s),s=pg(i,s,c,a,p);break e}else for(jn=hr(s.stateNode.containerInfo.firstChild),Xn=s,zt=!0,pi=null,a=Am(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===p){s=ji(i,s,a);break e}Pn(i,s,c,a)}s=s.child}return s;case 5:return Dm(s),i===null&&Ac(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,E=p.children,vc(c,p)?E=null:_!==null&&vc(c,_)&&(s.flags|=32),fg(i,s),Pn(i,s,E,a),s.child;case 6:return i===null&&Ac(s),null;case 13:return mg(i,s,a);case 4:return Uc(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ks(s,null,c,a):Pn(i,s,c,a),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),ag(i,s,c,p,a);case 7:return Pn(i,s,s.pendingProps,a),s.child;case 8:return Pn(i,s,s.pendingProps.children,a),s.child;case 12:return Pn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,E=p.value,Ft(yl,c._currentValue),c._currentValue=E,_!==null)if(hi(_.value,E)){if(_.children===p.children&&!In.current){s=ji(i,s,a);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var I=_.dependencies;if(I!==null){E=_.child;for(var V=I.firstContext;V!==null;){if(V.context===c){if(_.tag===1){V=Xi(-1,a&-a),V.tag=2;var Z=_.updateQueue;if(Z!==null){Z=Z.shared;var ge=Z.pending;ge===null?V.next=V:(V.next=ge.next,ge.next=V),Z.pending=V}}_.lanes|=a,V=_.alternate,V!==null&&(V.lanes|=a),Dc(_.return,a,s),I.lanes|=a;break}V=V.next}}else if(_.tag===10)E=_.type===s.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),Dc(E,a,s),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===s){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Pn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,zs(s,a),p=ei(p),c=c(p),s.flags|=1,Pn(i,s,c,a),s.child;case 14:return c=s.type,p=mi(c,s.pendingProps),p=mi(c.type,p),lg(i,s,c,p,a);case 15:return ug(i,s,s.type,s.pendingProps,a);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:mi(c,p),Dl(i,s),s.tag=1,Un(c)?(i=!0,hl(s)):i=!1,zs(s,a),eg(s,c,p),Yc(s,c,p,a),Zc(null,s,c,!0,i,a);case 19:return vg(i,s,a);case 22:return cg(i,s,a)}throw Error(t(156,s.tag))};function zg(i,s){return A(i,s)}function KS(i,s,a,c){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(i,s,a,c){return new KS(i,s,a,c)}function _f(i){return i=i.prototype,!(!i||!i.isReactComponent)}function $S(i){if(typeof i=="function")return _f(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===le)return 14}return 2}function Tr(i,s){var a=i.alternate;return a===null?(a=ii(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Hl(i,s,a,c,p,_){var E=2;if(c=i,typeof i=="function")_f(i)&&(E=1);else if(typeof i=="string")E=5;else e:switch(i){case B:return ns(a.children,p,_,s);case z:E=8,p|=8;break;case P:return i=ii(12,a,s,p|2),i.elementType=P,i.lanes=_,i;case se:return i=ii(13,a,s,p),i.elementType=se,i.lanes=_,i;case de:return i=ii(19,a,s,p),i.elementType=de,i.lanes=_,i;case re:return Gl(a,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:E=10;break e;case H:E=9;break e;case $:E=11;break e;case le:E=14;break e;case ue:E=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ii(E,a,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function ns(i,s,a,c){return i=ii(7,i,c,s),i.lanes=a,i}function Gl(i,s,a,c){return i=ii(22,i,c,s),i.elementType=re,i.lanes=a,i.stateNode={isHidden:!1},i}function yf(i,s,a){return i=ii(6,i,null,s),i.lanes=a,i}function xf(i,s,a){return s=ii(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function ZS(i,s,a,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Sf(i,s,a,c,p,_,E,I,V){return i=new ZS(i,s,a,I,V),s===1?(s=1,_===!0&&(s|=8)):s=0,_=ii(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ic(_),i}function QS(i,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:i,containerInfo:s,implementation:a}}function Hg(i){if(!i)return mr;i=i._reactInternals;e:{if(ki(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Un(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Un(a))return gm(i,a,s)}return s}function Gg(i,s,a,c,p,_,E,I,V){return i=Sf(a,c,!0,i,p,_,E,I,V),i.context=Hg(null),a=i.current,c=bn(),p=Mr(a),_=Xi(c,p),_.callback=s??null,_r(a,_,p),i.current.lanes=p,Kt(i,p,c),On(i,c),i}function Wl(i,s,a,c){var p=s.current,_=bn(),E=Mr(p);return a=Hg(a),s.context===null?s.context=a:s.pendingContext=a,s=Xi(_,E),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=_r(p,s,E),i!==null&&(_i(i,p,E,_),Sl(i,p,E)),E}function Xl(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Wg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function Mf(i,s){Wg(i,s),(i=i.alternate)&&Wg(i,s)}function JS(){return null}var Xg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Ef(i){this._internalRoot=i}jl.prototype.render=Ef.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Wl(i,s,null,null)},jl.prototype.unmount=Ef.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Jr(function(){Wl(null,i,null,null)}),s[Vi]=null}};function jl(i){this._internalRoot=i}jl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Rp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<cr.length&&s!==0&&s<cr[a].priority;a++);cr.splice(a,0,i),a===0&&Dp(i)}};function Tf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Yl(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function jg(){}function eM(i,s,a,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var Z=Xl(E);_.call(Z)}}var E=Gg(s,c,i,0,null,!1,!1,"",jg);return i._reactRootContainer=E,i[Vi]=E.current,Wo(i.nodeType===8?i.parentNode:i),Jr(),E}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var Z=Xl(V);I.call(Z)}}var V=Sf(i,0,!1,null,null,!1,!1,"",jg);return i._reactRootContainer=V,i[Vi]=V.current,Wo(i.nodeType===8?i.parentNode:i),Jr(function(){Wl(s,V,a,c)}),V}function ql(i,s,a,c,p){var _=a._reactRootContainer;if(_){var E=_;if(typeof p=="function"){var I=p;p=function(){var V=Xl(E);I.call(V)}}Wl(s,E,i,p)}else E=eM(a,s,i,p,c);return Xl(E)}Ap=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=rn(s.pendingLanes);a!==0&&(Wr(s,a|1),On(s,X()),(Mt&6)===0&&(js=X()+500,gr()))}break;case 13:Jr(function(){var c=Wi(i,1);if(c!==null){var p=bn();_i(c,i,1,p)}}),Mf(i,1)}},qu=function(i){if(i.tag===13){var s=Wi(i,134217728);if(s!==null){var a=bn();_i(s,i,134217728,a)}Mf(i,134217728)}},Cp=function(i){if(i.tag===13){var s=Mr(i),a=Wi(i,s);if(a!==null){var c=bn();_i(a,i,s,c)}Mf(i,s)}},Rp=function(){return _t},Pp=function(i,s){var a=_t;try{return _t=i,s()}finally{_t=a}},ye=function(i,s,a){switch(s){case"input":if(He(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==i&&c.form===i.form){var p=fl(c);if(!p)throw Error(t(90));nn(c),He(c,p)}}}break;case"textarea":w(i,a);break;case"select":s=a.value,s!=null&&Ot(i,!!a.multiple,s,!1)}},ut=mf,Rt=Jr;var tM={usingClientEntryPoint:!1,Events:[Yo,Is,fl,he,We,mf]},aa={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nM={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=qa(i),i===null?null:i.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Ze=Kl.inject(nM),ot=Kl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tM,Bn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(s))throw Error(t(200));return QS(i,s,null,a)},Bn.createRoot=function(i,s){if(!Tf(i))throw Error(t(299));var a=!1,c="",p=Xg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Sf(i,1,!1,null,null,a,!1,c,p),i[Vi]=s.current,Wo(i.nodeType===8?i.parentNode:i),new Ef(s)},Bn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=qa(s),i=i===null?null:i.stateNode,i},Bn.flushSync=function(i){return Jr(i)},Bn.hydrate=function(i,s,a){if(!Yl(s))throw Error(t(200));return ql(null,i,s,!0,a)},Bn.hydrateRoot=function(i,s,a){if(!Tf(i))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,p=!1,_="",E=Xg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),s=Gg(s,null,i,1,a??null,p,!1,_,E),i[Vi]=s.current,Wo(i),c)for(i=0;i<c.length;i++)a=c[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new jl(s)},Bn.render=function(i,s,a){if(!Yl(s))throw Error(t(200));return ql(null,i,s,!1,a)},Bn.unmountComponentAtNode=function(i){if(!Yl(i))throw Error(t(40));return i._reactRootContainer?(Jr(function(){ql(null,null,i,!1,function(){i._reactRootContainer=null,i[Vi]=null})}),!0):!1},Bn.unstable_batchedUpdates=mf,Bn.unstable_renderSubtreeIntoContainer=function(i,s,a,c){if(!Yl(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return ql(i,s,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var ev;function cM(){if(ev)return Cf.exports;ev=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Cf.exports=uM(),Cf.exports}var tv;function fM(){if(tv)return $l;tv=1;var n=cM();return $l.createRoot=n.createRoot,$l.hydrateRoot=n.hydrateRoot,$l}var dM=fM();const hM=h_(dM),p_="/shubhavsar/assets/shubh-avsar-logo-BLz1foKD.png";function pM(){return be.jsxs("nav",{className:"w-full flex items-center justify-between p-4 md:p-6 bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 shadow-md fixed top-0 z-50",children:[be.jsxs("div",{className:"flex items-center",children:[be.jsx("img",{src:p_,alt:"Shubh Avsar Logo",className:"w-12 md:w-16 mr-3"}),be.jsx("span",{className:"text-white font-bold text-xl md:text-2xl",children:"Shubh Avsar"})]}),be.jsxs("ul",{className:"hidden md:flex space-x-6 text-white font-medium",children:[be.jsx("li",{children:be.jsx("a",{href:"#home",className:"hover:underline",children:"Home"})}),be.jsx("li",{children:be.jsx("a",{href:"#services",className:"hover:underline",children:"Services"})}),be.jsx("li",{children:be.jsx("a",{href:"#portfolio",className:"hover:underline",children:"Portfolio"})}),be.jsx("li",{children:be.jsx("a",{href:"#testimonials",className:"hover:underline",children:"Testimonials"})}),be.jsx("li",{children:be.jsx("a",{href:"#contact",className:"hover:underline",children:"Contact"})})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nh="180",mM=0,nv=1,gM=2,m_=1,vM=2,Ji=3,Or=0,zn=1,er=2,Nr=0,mo=1,iv=2,rv=3,sv=4,_M=5,hs=100,yM=101,xM=102,SM=103,MM=104,EM=200,TM=201,wM=202,AM=203,Td=204,wd=205,CM=206,RM=207,PM=208,bM=209,DM=210,LM=211,IM=212,UM=213,NM=214,Ad=0,Cd=1,Rd=2,_o=3,Pd=4,bd=5,Dd=6,Ld=7,g_=0,FM=1,OM=2,Fr=0,BM=1,kM=2,VM=3,zM=4,HM=5,GM=6,WM=7,v_=300,yo=301,xo=302,Id=303,Ud=304,zu=306,Nd=1e3,ms=1001,Fd=1002,wi=1003,XM=1004,Zl=1005,Di=1006,bf=1007,gs=1008,Fi=1009,__=1010,y_=1011,Ea=1012,Fh=1013,Ss=1014,tr=1015,Ua=1016,Oh=1017,Bh=1018,Ta=1020,x_=35902,S_=35899,M_=1021,E_=1022,Ti=1023,wa=1026,Aa=1027,T_=1028,kh=1029,w_=1030,Vh=1031,zh=1033,Su=33776,Mu=33777,Eu=33778,Tu=33779,Od=35840,Bd=35841,kd=35842,Vd=35843,zd=36196,Hd=37492,Gd=37496,Wd=37808,Xd=37809,jd=37810,Yd=37811,qd=37812,Kd=37813,$d=37814,Zd=37815,Qd=37816,Jd=37817,eh=37818,th=37819,nh=37820,ih=37821,rh=36492,sh=36494,oh=36495,ah=36283,lh=36284,uh=36285,ch=36286,jM=3200,YM=3201,A_=0,qM=1,Ir="",ai="srgb",So="srgb-linear",bu="linear",Lt="srgb",qs=7680,ov=519,KM=512,$M=513,ZM=514,C_=515,QM=516,JM=517,eE=518,tE=519,av=35044,lv="300 es",Li=2e3,Du=2001;class wo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=Math.PI/180,fh=180/Math.PI;function Na(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function yt(n,e,t){return Math.max(e,Math.min(t,n))}function nE(n,e){return(n%e+e)%e}function Lf(n,e,t){return(1-t)*n+t*e}function ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,t=0){At.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(f===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(g!==T||d!==v||h!==x||m!==M){let S=1-f;const y=d*v+h*x+m*M+g*T,D=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const U=Math.sqrt(b),N=Math.atan2(U,y*D);S=Math.sin(S*N)/U,f=Math.sin(f*N)/U}const C=f*D;if(d=d*S+v*C,h=h*S+x*C,m=m*S+M*C,g=g*S+T*C,S===1-f){const U=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=U,h*=U,m*=U,g*=U}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+m*g+d*x-h*v,e[t+1]=d*M+m*v+h*g-f*x,e[t+2]=h*M+m*x+f*v-d*g,e[t+3]=m*M-f*g-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),g=f(l/2),v=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"YXZ":this._x=v*m*g+h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"ZXY":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g-v*x*M;break;case"ZYX":this._x=v*m*g-h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g+v*x*M;break;case"YZX":this._x=v*m*g+h*x*M,this._y=h*x*g+v*m*M,this._z=h*m*M-v*x*g,this._w=h*m*g-v*x*M;break;case"XZY":this._x=v*m*g-h*x*M,this._y=h*x*g-v*m*M,this._z=h*m*M+v*x*g,this._w=h*m*g+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],g=t[10],v=r+f+g;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>f&&r>g){const x=2*Math.sqrt(1+r-f-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(f>g){const x=2*Math.sqrt(1+f-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-f);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*f+o*h-l*d,this._y=o*m+u*d+l*f-r*h,this._z=l*m+u*h+r*d-o*f,this._w=u*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let f=u*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),g=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*g+this._w*v,this._x=r*g+this._x*v,this._y=o*g+this._y*v,this._z=l*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(uv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(uv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),m=2*(f*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-f*m,this.y=r+d*m+f*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const If=new Q,uv=new Fa;class ht{constructor(e,t,r,o,l,u,f,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h)}set(e,t,r,o,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],m=r[4],g=r[7],v=r[2],x=r[5],M=r[8],T=o[0],S=o[3],y=o[6],D=o[1],b=o[4],C=o[7],U=o[2],N=o[5],B=o[8];return l[0]=u*T+f*D+d*U,l[3]=u*S+f*b+d*N,l[6]=u*y+f*C+d*B,l[1]=h*T+m*D+g*U,l[4]=h*S+m*b+g*N,l[7]=h*y+m*C+g*B,l[2]=v*T+x*D+M*U,l[5]=v*S+x*b+M*N,l[8]=v*y+x*C+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-r*l*m+r*f*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=m*u-f*h,v=f*d-m*l,x=h*l-u*d,M=t*g+r*v+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=g*T,e[1]=(o*h-m*r)*T,e[2]=(f*r-o*u)*T,e[3]=v*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(u*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Uf.makeScale(e,t)),this}rotate(e){return this.premultiply(Uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uf=new ht;function R_(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Lu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function iE(){const n=Lu("canvas");return n.style.display="block",n}const cv={};function Ca(n){n in cv||(cv[n]=!0,console.warn(n))}function rE(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const fv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sE(){const n={enabled:!0,workingColorSpace:So,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(o.r=nr(o.r),o.g=nr(o.g),o.b=nr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(o.r=go(o.r),o.g=go(o.g),o.b=go(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?bu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Ca("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Ca("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[So]:{primaries:e,whitePoint:r,transfer:bu,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),n}const Tt=sE();function nr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function go(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ks;class oE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=Lu("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Lu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=nr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(nr(t[r]/255)*255):t[r]=nr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aE=0;class Hh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Nf(o[u].image)):l.push(Nf(o[u]))}else l=Nf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lE=0;const Ff=new Q;class Hn extends wo{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,r=ms,o=ms,l=Di,u=gs,f=Ti,d=Fi,h=Hn.DEFAULT_ANISOTROPY,m=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lE++}),this.uuid=Na(),this.name="",this.source=new Hh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ff).x}get height(){return this.source.getSize(Ff).y}get depth(){return this.source.getSize(Ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=v_;Hn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],v=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(x+1)/2,U=(y+1)/2,N=(m+v)/4,B=(g+T)/4,z=(M+S)/4;return b>C&&b>U?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=N/r,l=B/r):C>U?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=N/o,l=z/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=B/l,o=z/l),this.set(r,o,l,t),this}let D=Math.sqrt((S-M)*(S-M)+(g-T)*(g-T)+(v-m)*(v-m));return Math.abs(D)<.001&&(D=1),this.x=(S-M)/D,this.y=(g-T)/D,this.z=(v-m)/D,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uE extends wo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Hn(o);this.textures=[];const u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Hh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends uE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class P_ extends Hn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cE extends Hn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wi,this.minFilter=wi,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(yi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(yi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,yi):yi.fromBufferAttribute(l,u),yi.applyMatrix4(e.matrixWorld),this.expandByPoint(yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yi),yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Jl.subVectors(this.max,ca),$s.subVectors(e.a,ca),Zs.subVectors(e.b,ca),Qs.subVectors(e.c,ca),Ar.subVectors(Zs,$s),Cr.subVectors(Qs,Zs),is.subVectors($s,Qs);let t=[0,-Ar.z,Ar.y,0,-Cr.z,Cr.y,0,-is.z,is.y,Ar.z,0,-Ar.x,Cr.z,0,-Cr.x,is.z,0,-is.x,-Ar.y,Ar.x,0,-Cr.y,Cr.x,0,-is.y,is.x,0];return!Of(t,$s,Zs,Qs,Jl)||(t=[1,0,0,0,1,0,0,0,1],!Of(t,$s,Zs,Qs,Jl))?!1:(eu.crossVectors(Ar,Cr),t=[eu.x,eu.y,eu.z],Of(t,$s,Zs,Qs,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],yi=new Q,Ql=new Oa,$s=new Q,Zs=new Q,Qs=new Q,Ar=new Q,Cr=new Q,is=new Q,ca=new Q,Jl=new Q,eu=new Q,rs=new Q;function Of(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){rs.fromArray(n,l);const f=o.x*Math.abs(rs.x)+o.y*Math.abs(rs.y)+o.z*Math.abs(rs.z),d=e.dot(rs),h=t.dot(rs),m=r.dot(rs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const fE=new Oa,fa=new Q,Bf=new Q;class Gh{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):fE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const t=fa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(Bf)),this.expandByPoint(fa.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ki=new Q,kf=new Q,tu=new Q,Rr=new Q,Vf=new Q,nu=new Q,zf=new Q;class dE{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){kf.copy(e).add(t).multiplyScalar(.5),tu.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(kf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(tu),f=Rr.dot(this.direction),d=-Rr.dot(tu),h=Rr.lengthSq(),m=Math.abs(1-u*u);let g,v,x,M;if(m>0)if(g=u*d-f,v=u*f-d,M=l*m,g>=0)if(v>=-M)if(v<=M){const T=1/m;g*=T,v*=T,x=g*(g+u*v+2*f)+v*(u*g+v+2*d)+h}else v=l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;else v=-l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;else v<=-M?(g=Math.max(0,-(-u*l+f)),v=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h):v<=M?(g=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(g=Math.max(0,-(u*l+f)),v=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+v*(v+2*d)+h);else v=u>0?-l:l,g=Math.max(0,-(u*v+f)),x=-g*g+v*(v+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(kf).addScaledVector(tu,v),x}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),o=Ki.dot(Ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(f=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(f=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,r,o,l){Vf.subVectors(t,e),nu.subVectors(r,e),zf.crossVectors(Vf,nu);let u=this.direction.dot(zf),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Rr.subVectors(this.origin,e);const d=f*this.direction.dot(nu.crossVectors(Rr,nu));if(d<0)return null;const h=f*this.direction.dot(Vf.cross(Rr));if(h<0||d+h>u)return null;const m=-f*Rr.dot(zf);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,t,r,o,l,u,f,d,h,m,g,v,x,M,T,S){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,d,h,m,g,v,x,M,T,S)}set(e,t,r,o,l,u,f,d,h,m,g,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),l=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*g,M=f*m,T=f*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=v-T*h,t[9]=-f*d,t[2]=T-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*g,M=h*m,T=h*g;t[0]=v+T*f,t[4]=M*f-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-f,t[2]=x*f-M,t[6]=T+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*g,M=h*m,T=h*g;t[0]=v-T*f,t[4]=-u*g,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*m,t[9]=T-v*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*g,M=f*m,T=f*g;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+T,t[1]=d*g,t[5]=T*h+v,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=T-v*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*g+M,t[10]=v-T*g}else if(e.order==="XZY"){const v=u*d,x=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=v*g+T,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=f*m,t[10]=T*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hE,e,pE)}lookAt(e,t,r){const o=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Pr.crossVectors(r,qn),Pr.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Pr.crossVectors(r,qn)),Pr.normalize(),iu.crossVectors(qn,Pr),o[0]=Pr.x,o[4]=iu.x,o[8]=qn.x,o[1]=Pr.y,o[5]=iu.y,o[9]=qn.y,o[2]=Pr.z,o[6]=iu.z,o[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],m=r[1],g=r[5],v=r[9],x=r[13],M=r[2],T=r[6],S=r[10],y=r[14],D=r[3],b=r[7],C=r[11],U=r[15],N=o[0],B=o[4],z=o[8],P=o[12],R=o[1],H=o[5],$=o[9],se=o[13],de=o[2],le=o[6],ue=o[10],re=o[14],k=o[3],oe=o[7],ne=o[11],F=o[15];return l[0]=u*N+f*R+d*de+h*k,l[4]=u*B+f*H+d*le+h*oe,l[8]=u*z+f*$+d*ue+h*ne,l[12]=u*P+f*se+d*re+h*F,l[1]=m*N+g*R+v*de+x*k,l[5]=m*B+g*H+v*le+x*oe,l[9]=m*z+g*$+v*ue+x*ne,l[13]=m*P+g*se+v*re+x*F,l[2]=M*N+T*R+S*de+y*k,l[6]=M*B+T*H+S*le+y*oe,l[10]=M*z+T*$+S*ue+y*ne,l[14]=M*P+T*se+S*re+y*F,l[3]=D*N+b*R+C*de+U*k,l[7]=D*B+b*H+C*le+U*oe,l[11]=D*z+b*$+C*ue+U*ne,l[15]=D*P+b*se+C*re+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],g=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*f*v+r*h*v+o*f*x-r*d*x)+T*(+t*d*x-t*h*v+l*u*v-o*u*x+o*h*m-l*d*m)+S*(+t*h*g-t*f*x-l*u*g+r*u*x+l*f*m-r*h*m)+y*(-o*f*m-t*d*g+t*f*v+o*u*g-r*u*v+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],g=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],D=g*S*h-T*v*h+T*d*x-f*S*x-g*d*y+f*v*y,b=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,C=m*T*h-M*g*h+M*f*x-u*T*x-m*f*y+u*g*y,U=M*g*d-m*T*d-M*f*v+u*T*v+m*f*S-u*g*S,N=t*D+r*b+o*C+l*U;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=D*B,e[1]=(T*v*l-g*S*l-T*o*x+r*S*x+g*o*y-r*v*y)*B,e[2]=(f*S*l-T*d*l+T*o*h-r*S*h-f*o*y+r*d*y)*B,e[3]=(g*d*l-f*v*l-g*o*h+r*v*h+f*o*x-r*d*x)*B,e[4]=b*B,e[5]=(m*S*l-M*v*l+M*o*x-t*S*x-m*o*y+t*v*y)*B,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*B,e[7]=(u*v*l-m*d*l+m*o*h-t*v*h-u*o*x+t*d*x)*B,e[8]=C*B,e[9]=(M*g*l-m*T*l-M*r*x+t*T*x+m*r*y-t*g*y)*B,e[10]=(u*T*l-M*f*l+M*r*h-t*T*h-u*r*y+t*f*y)*B,e[11]=(m*f*l-u*g*l-m*r*h+t*g*h+u*r*x-t*f*x)*B,e[12]=U*B,e[13]=(m*T*o-M*g*o+M*r*v-t*T*v-m*r*S+t*g*S)*B,e[14]=(M*f*o-u*T*o-M*r*d+t*T*d+u*r*S-t*f*S)*B,e[15]=(u*g*o-m*f*o+m*r*d-t*g*d-u*r*v+t*f*v)*B,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*u,0,h*d-o*f,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,g=f+f,v=l*h,x=l*m,M=l*g,T=u*m,S=u*g,y=f*g,D=d*h,b=d*m,C=d*g,U=r.x,N=r.y,B=r.z;return o[0]=(1-(T+y))*U,o[1]=(x+C)*U,o[2]=(M-b)*U,o[3]=0,o[4]=(x-C)*N,o[5]=(1-(v+y))*N,o[6]=(S+D)*N,o[7]=0,o[8]=(M+b)*B,o[9]=(S-D)*B,o[10]=(1-(v+T))*B,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Js.set(o[0],o[1],o[2]).length();const u=Js.set(o[4],o[5],o[6]).length(),f=Js.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],xi.copy(this);const h=1/l,m=1/u,g=1/f;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=m,xi.elements[5]*=m,xi.elements[6]*=m,xi.elements[8]*=g,xi.elements[9]*=g,xi.elements[10]*=g,t.setFromRotationMatrix(xi),r.x=l,r.y=u,r.z=f,this}makePerspective(e,t,r,o,l,u,f=Li,d=!1){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),v=(t+e)/(t-e),x=(r+o)/(r-o);let M,T;if(d)M=l/(u-l),T=u*l/(u-l);else if(f===Li)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(f===Du)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Li,d=!1){const h=this.elements,m=2/(t-e),g=2/(r-o),v=-(t+e)/(t-e),x=-(r+o)/(r-o);let M,T;if(d)M=1/(u-l),T=u/(u-l);else if(f===Li)M=-2/(u-l),T=-(u+l)/(u-l);else if(f===Du)M=-1/(u-l),T=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Js=new Q,xi=new Qt,hE=new Q(0,0,0),pE=new Q(1,1,1),Pr=new Q,iu=new Q,qn=new Q,hv=new Qt,pv=new Fa;class Oi{constructor(e=0,t=0,r=0,o=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],d=o[1],h=o[5],m=o[9],g=o[2],v=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class b_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mE=0;const mv=new Q,eo=new Fa,$i=new Qt,ru=new Q,da=new Q,gE=new Q,vE=new Fa,gv=new Q(1,0,0),vv=new Q(0,1,0),_v=new Q(0,0,1),yv={type:"added"},_E={type:"removed"},to={type:"childadded",child:null},Hf={type:"childremoved",child:null};class An extends wo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Q,t=new Oi,r=new Fa,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,t){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ru.copy(e):ru.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(da,ru,this.up):$i.lookAt(ru,da,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),eo.setFromRotationMatrix($i),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),to.child=e,this.dispatchEvent(to),to.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_E),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,gE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,vE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new Q,Zi=new Q,Gf=new Q,Qi=new Q,no=new Q,io=new Q,xv=new Q,Wf=new Q,Xf=new Q,jf=new Q,Yf=new qt,qf=new qt,Kf=new qt;class Ei{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Si.subVectors(e,t),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Si.subVectors(o,t),Zi.subVectors(r,t),Gf.subVectors(e,t);const u=Si.dot(Si),f=Si.dot(Zi),d=Si.dot(Gf),h=Zi.dot(Zi),m=Zi.dot(Gf),g=u*h-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,x=(h*d-f*m)*v,M=(u*m-f*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,r,o,l,u,f,d){return this.getBarycoord(e,t,r,o,Qi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Qi.x),d.addScaledVector(u,Qi.y),d.addScaledVector(f,Qi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return Yf.setScalar(0),qf.setScalar(0),Kf.setScalar(0),Yf.fromBufferAttribute(e,t),qf.fromBufferAttribute(e,r),Kf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Yf,l.x),u.addScaledVector(qf,l.y),u.addScaledVector(Kf,l.z),u}static isFrontFacing(e,t,r,o){return Si.subVectors(r,t),Zi.subVectors(e,t),Si.cross(Zi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),Si.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;no.subVectors(o,r),io.subVectors(l,r),Wf.subVectors(e,r);const d=no.dot(Wf),h=io.dot(Wf);if(d<=0&&h<=0)return t.copy(r);Xf.subVectors(e,o);const m=no.dot(Xf),g=io.dot(Xf);if(m>=0&&g<=m)return t.copy(o);const v=d*g-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(no,u);jf.subVectors(e,l);const x=no.dot(jf),M=io.dot(jf);if(M>=0&&x<=M)return t.copy(l);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(io,f);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return xv.subVectors(l,o),f=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(xv,f);const y=1/(S+T+v);return u=T*y,f=v*y,t.copy(r).addScaledVector(no,u).addScaledVector(io,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},su={h:0,s:0,l:0};function $f(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=nE(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=$f(u,l,e+1/3),this.g=$f(u,l,e),this.b=$f(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ai){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const r=D_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=go(e.r),this.g=go(e.g),this.b=go(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const g=u-f;switch(h=m<=.5?g/(u+f):g/(2-u-f),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ai){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+t,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(br),e.getHSL(su);const r=Lf(br.h,su.h,t),o=Lf(br.s,su.s,t),l=Lf(br.l,su.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new wt;wt.NAMES=D_;let yE=0;class Ba extends wo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yE++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=mo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=wd,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==mo&&(r.blending=this.blending),this.side!==Or&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Td&&(r.blendSrc=this.blendSrc),this.blendDst!==wd&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class L_ extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=g_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Q,ou=new At;let xE=0;class Ii{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=av,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ou.fromBufferAttribute(this,t),ou.applyMatrix3(e),this.setXY(t,ou.x,ou.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=kn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=kn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=kn(t,this.array),r=kn(r,this.array),o=kn(o,this.array),l=kn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==av&&(e.usage=this.usage),e}}class I_ extends Ii{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class U_ extends Ii{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class $n extends Ii{constructor(e,t,r){super(new Float32Array(e),t,r)}}let SE=0;const ri=new Qt,Zf=new An,ro=new Q,Kn=new Oa,ha=new Oa,dn=new Q;class sr extends wo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?U_:I_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,t,r){return ri.makeTranslation(e,t,r),this.applyMatrix4(ri),this}scale(e,t,r){return ri.makeScale(e,t,r),this.applyMatrix4(ri),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new $n(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ha.setFromBufferAttribute(f),this.morphTargetsRelative?(dn.addVectors(Kn.min,ha.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,ha.max),Kn.expandByPoint(dn)):(Kn.expandByPoint(ha.min),Kn.expandByPoint(ha.max))}Kn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(dn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)dn.fromBufferAttribute(f,h),d&&(ro.fromBufferAttribute(e,h),dn.add(ro)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let z=0;z<r.count;z++)f[z]=new Q,d[z]=new Q;const h=new Q,m=new Q,g=new Q,v=new At,x=new At,M=new At,T=new Q,S=new Q;function y(z,P,R){h.fromBufferAttribute(r,z),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),v.fromBufferAttribute(l,z),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),x.sub(v),M.sub(v);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(H),f[z].add(T),f[P].add(T),f[R].add(T),d[z].add(S),d[P].add(S),d[R].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let z=0,P=D.length;z<P;++z){const R=D[z],H=R.start,$=R.count;for(let se=H,de=H+$;se<de;se+=3)y(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const b=new Q,C=new Q,U=new Q,N=new Q;function B(z){U.fromBufferAttribute(o,z),N.copy(U);const P=f[z];b.copy(P),b.sub(U.multiplyScalar(U.dot(P))).normalize(),C.crossVectors(N,P);const H=C.dot(d[z])<0?-1:1;u.setXYZW(z,b.x,b.y,b.z,H)}for(let z=0,P=D.length;z<P;++z){const R=D[z],H=R.start,$=R.count;for(let se=H,de=H+$;se<de;se+=3)B(e.getX(se+0)),B(e.getX(se+1)),B(e.getX(se+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const o=new Q,l=new Q,u=new Q,f=new Q,d=new Q,h=new Q,m=new Q,g=new Q;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),f.add(m),d.add(m),h.add(m),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(v+0,m.x,m.y,m.z),r.setXYZ(v+1,m.x,m.y,m.z),r.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,g=f.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){f.isInterleavedBufferAttribute?x=d[T]*f.data.stride+f.offset:x=d[T]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new Ii(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,g=h.length;m<g;m++){const v=h[m],x=e(v,r);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,v=h.length;g<v;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let v=0,x=g.length;v<x;v++)m.push(g[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sv=new Qt,ss=new dE,au=new Gh,Mv=new Q,lu=new Q,uu=new Q,cu=new Q,Qf=new Q,fu=new Q,Ev=new Q,du=new Q;class ui extends An{constructor(e=new sr,t=new L_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){fu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],g=l[d];m!==0&&(Qf.fromBufferAttribute(g,e),u?fu.addScaledVector(Qf,m):fu.addScaledVector(Qf.sub(t),m))}t.add(fu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),au.copy(r.boundingSphere),au.applyMatrix4(l),ss.copy(e.ray).recast(e.near),!(au.containsPoint(ss.origin)===!1&&(ss.intersectSphere(au,Mv)===null||ss.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(Sv.copy(l).invert(),ss.copy(e.ray).applyMatrix4(Sv),!(r.boundingBox!==null&&ss.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,U=b;C<U;C+=3){const N=f.getX(C),B=f.getX(C+1),z=f.getX(C+2);o=hu(this,y,e,r,h,m,g,N,B,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=f.getX(S),b=f.getX(S+1),C=f.getX(S+2);o=hu(this,u,e,r,h,m,g,D,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],D=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=D,U=b;C<U;C+=3){const N=C,B=C+1,z=C+2;o=hu(this,y,e,r,h,m,g,N,B,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const D=S,b=S+1,C=S+2;o=hu(this,u,e,r,h,m,g,D,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function ME(n,e,t,r,o,l,u,f){let d;if(e.side===zn?d=r.intersectTriangle(u,l,o,!0,f):d=r.intersectTriangle(o,l,u,e.side===Or,f),d===null)return null;du.copy(f),du.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(du);return h<t.near||h>t.far?null:{distance:h,point:du.clone(),object:n}}function hu(n,e,t,r,o,l,u,f,d,h){n.getVertexPosition(f,lu),n.getVertexPosition(d,uu),n.getVertexPosition(h,cu);const m=ME(n,e,t,r,lu,uu,cu,Ev);if(m){const g=new Q;Ei.getBarycoord(Ev,lu,uu,cu,g),o&&(m.uv=Ei.getInterpolatedAttribute(o,f,d,h,g,new At)),l&&(m.uv1=Ei.getInterpolatedAttribute(l,f,d,h,g,new At)),u&&(m.normal=Ei.getInterpolatedAttribute(u,f,d,h,g,new Q),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new Q,materialIndex:0};Ei.getNormal(lu,uu,cu,v.normal),m.face=v,m.barycoord=g}return m}class ka extends sr{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let v=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new $n(h,3)),this.setAttribute("normal",new $n(m,3)),this.setAttribute("uv",new $n(g,2));function M(T,S,y,D,b,C,U,N,B,z,P){const R=C/B,H=U/z,$=C/2,se=U/2,de=N/2,le=B+1,ue=z+1;let re=0,k=0;const oe=new Q;for(let ne=0;ne<ue;ne++){const F=ne*H-se;for(let ie=0;ie<le;ie++){const Fe=ie*R-$;oe[T]=Fe*D,oe[S]=F*b,oe[y]=de,h.push(oe.x,oe.y,oe.z),oe[T]=0,oe[S]=0,oe[y]=N>0?1:-1,m.push(oe.x,oe.y,oe.z),g.push(ie/B),g.push(1-ne/z),re+=1}}for(let ne=0;ne<z;ne++)for(let F=0;F<B;F++){const ie=v+F+le*ne,Fe=v+F+le*(ne+1),Xe=v+(F+1)+le*(ne+1),ze=v+(F+1)+le*ne;d.push(ie,Fe,ze),d.push(Fe,Xe,ze),k+=6}f.addGroup(x,k,P),x+=k,v+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Dn(n){const e={};for(let t=0;t<n.length;t++){const r=Mo(n[t]);for(const o in r)e[o]=r[o]}return e}function EE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function N_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const TE={clone:Mo,merge:Dn};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=AE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=EE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class F_ extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new Q,Tv=new At,wv=new At;class li extends F_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Df*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fh*2*Math.atan(Math.tan(Df*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Tv,wv),t.subVectors(wv,Tv)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Df*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const so=-90,oo=1;class CE extends An{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new li(so,oo,e,t);o.layers=this.layers,this.add(o);const l=new li(so,oo,e,t);l.layers=this.layers,this.add(l);const u=new li(so,oo,e,t);u.layers=this.layers,this.add(u);const f=new li(so,oo,e,t);f.layers=this.layers,this.add(f);const d=new li(so,oo,e,t);d.layers=this.layers,this.add(d);const h=new li(so,oo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Du)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,v,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class O_ extends Hn{constructor(e=[],t=yo,r,o,l,u,f,d,h,m){super(e,t,r,o,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RE extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new O_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new ka(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:Mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Nr});l.uniforms.tEquirect.value=t;const u=new ui(o,l),f=t.minFilter;return t.minFilter===gs&&(t.minFilter=Di),new CE(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class ma extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PE={type:"move"};class Jf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=m.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(PE)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ma;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class bE extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ed=new Q,DE=new Q,LE=new ht;class cs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ed.subVectors(r,t).cross(DE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||LE.getNormalMatrix(e),o=this.coplanarPoint(ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const os=new Gh,IE=new At(.5,.5),pu=new Q;class Wh{constructor(e=new cs,t=new cs,r=new cs,o=new cs,l=new cs,u=new cs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Li,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],g=l[5],v=l[6],x=l[7],M=l[8],T=l[9],S=l[10],y=l[11],D=l[12],b=l[13],C=l[14],U=l[15];if(o[0].setComponents(h-u,x-m,y-M,U-D).normalize(),o[1].setComponents(h+u,x+m,y+M,U+D).normalize(),o[2].setComponents(h+f,x+g,y+T,U+b).normalize(),o[3].setComponents(h-f,x-g,y-T,U-b).normalize(),r)o[4].setComponents(d,v,S,C).normalize(),o[5].setComponents(h-d,x-v,y-S,U-C).normalize();else if(o[4].setComponents(h-d,x-v,y-S,U-C).normalize(),t===Li)o[5].setComponents(h+d,x+v,y+S,U+C).normalize();else if(t===Du)o[5].setComponents(d,v,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);const t=IE.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(pu.x=o.normal.x>0?e.max.x:e.min.x,pu.y=o.normal.y>0?e.max.y:e.min.y,pu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class B_ extends Hn{constructor(e,t,r=Ss,o,l,u,f=wi,d=wi,h,m=wa,g=1){if(m!==wa&&m!==Aa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:g};super(v,o,l,u,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class k_ extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hu extends sr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,g=e/f,v=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<m;y++){const D=y*v-u;for(let b=0;b<h;b++){const C=b*g-l;M.push(C,-D,0),T.push(0,0,1),S.push(b/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let D=0;D<f;D++){const b=D+h*y,C=D+h*(y+1),U=D+1+h*(y+1),N=D+1+h*y;x.push(b,C,N),x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new $n(M,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Iu extends sr{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(u+f,Math.PI);let h=0;const m=[],g=new Q,v=new Q,x=[],M=[],T=[],S=[];for(let y=0;y<=r;y++){const D=[],b=y/r;let C=0;y===0&&u===0?C=.5/t:y===r&&d===Math.PI&&(C=-.5/t);for(let U=0;U<=t;U++){const N=U/t;g.x=-e*Math.cos(o+N*l)*Math.sin(u+b*f),g.y=e*Math.cos(u+b*f),g.z=e*Math.sin(o+N*l)*Math.sin(u+b*f),M.push(g.x,g.y,g.z),v.copy(g).normalize(),T.push(v.x,v.y,v.z),S.push(N+C,1-b),D.push(h++)}m.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const b=m[y][D+1],C=m[y][D],U=m[y+1][D],N=m[y+1][D+1];(y!==0||u>0)&&x.push(b,C,N),(y!==r-1||d<Math.PI)&&x.push(C,U,N)}this.setIndex(x),this.setAttribute("position",new $n(M,3)),this.setAttribute("normal",new $n(T,3)),this.setAttribute("uv",new $n(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Iu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xh extends sr{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],f=[],d=[],h=[],m=new Q,g=new Q,v=new Q;for(let x=0;x<=r;x++)for(let M=0;M<=o;M++){const T=M/o*l,S=x/r*Math.PI*2;g.x=(e+t*Math.cos(S))*Math.cos(T),g.y=(e+t*Math.cos(S))*Math.sin(T),g.z=t*Math.sin(S),f.push(g.x,g.y,g.z),m.x=e*Math.cos(T),m.y=e*Math.sin(T),v.subVectors(g,m).normalize(),d.push(v.x,v.y,v.z),h.push(M/o),h.push(x/r)}for(let x=1;x<=r;x++)for(let M=1;M<=o;M++){const T=(o+1)*x+M-1,S=(o+1)*(x-1)+M-1,y=(o+1)*(x-1)+M,D=(o+1)*x+M;u.push(T,S,D),u.push(S,y,D)}this.setIndex(u),this.setAttribute("position",new $n(f,3)),this.setAttribute("normal",new $n(d,3)),this.setAttribute("uv",new $n(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class td extends Ba{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A_,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UE extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NE extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class V_ extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const nd=new Qt,Av=new Q,Cv=new Q;class FE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Av.setFromMatrixPosition(e.matrixWorld),t.position.copy(Av),Cv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cv),t.updateMatrixWorld(),nd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class z_ extends F_{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class OE extends FE{constructor(){super(new z_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BE extends V_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new OE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kE extends V_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class VE extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Rv(n,e,t,r){const o=zE(r);switch(t){case M_:return n*e;case T_:return n*e/o.components*o.byteLength;case kh:return n*e/o.components*o.byteLength;case w_:return n*e*2/o.components*o.byteLength;case Vh:return n*e*2/o.components*o.byteLength;case E_:return n*e*3/o.components*o.byteLength;case Ti:return n*e*4/o.components*o.byteLength;case zh:return n*e*4/o.components*o.byteLength;case Su:case Mu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eu:case Tu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Vd:return Math.max(n,16)*Math.max(e,8)/4;case Od:case kd:return Math.max(n,8)*Math.max(e,8)/2;case zd:case Hd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case jd:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rh:case sh:case oh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ah:case lh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case uh:case ch:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zE(n){switch(n){case Fi:case __:return{byteLength:1,components:1};case Ea:case y_:case Ua:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case Ss:case Fh:case tr:return{byteLength:4,components:1};case x_:case S_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H_(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function HE(n){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,g=h.byteLength,v=n.createBuffer();n.bindBuffer(d,v),n.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:g}}function r(f,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,f),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<g.length;x++){const M=g[v],T=g[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,g[v]=T)}g.length=v+1;for(let x=0,M=g.length;x<M;x++){const T=g[x];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:u}}var GE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$E=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,QE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_T=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yT="gl_FragColor = linearToOutputTexel( gl_FragColor );",xT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ST=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ET=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,TT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,AT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,DT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,FT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$T=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,QT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,aw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ow=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$w=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,h1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:GE,alphahash_pars_fragment:WE,alphamap_fragment:XE,alphamap_pars_fragment:jE,alphatest_fragment:YE,alphatest_pars_fragment:qE,aomap_fragment:KE,aomap_pars_fragment:$E,batching_pars_vertex:ZE,batching_vertex:QE,begin_vertex:JE,beginnormal_vertex:eT,bsdfs:tT,iridescence_fragment:nT,bumpmap_pars_fragment:iT,clipping_planes_fragment:rT,clipping_planes_pars_fragment:sT,clipping_planes_pars_vertex:oT,clipping_planes_vertex:aT,color_fragment:lT,color_pars_fragment:uT,color_pars_vertex:cT,color_vertex:fT,common:dT,cube_uv_reflection_fragment:hT,defaultnormal_vertex:pT,displacementmap_pars_vertex:mT,displacementmap_vertex:gT,emissivemap_fragment:vT,emissivemap_pars_fragment:_T,colorspace_fragment:yT,colorspace_pars_fragment:xT,envmap_fragment:ST,envmap_common_pars_fragment:MT,envmap_pars_fragment:ET,envmap_pars_vertex:TT,envmap_physical_pars_fragment:NT,envmap_vertex:wT,fog_vertex:AT,fog_pars_vertex:CT,fog_fragment:RT,fog_pars_fragment:PT,gradientmap_pars_fragment:bT,lightmap_pars_fragment:DT,lights_lambert_fragment:LT,lights_lambert_pars_fragment:IT,lights_pars_begin:UT,lights_toon_fragment:FT,lights_toon_pars_fragment:OT,lights_phong_fragment:BT,lights_phong_pars_fragment:kT,lights_physical_fragment:VT,lights_physical_pars_fragment:zT,lights_fragment_begin:HT,lights_fragment_maps:GT,lights_fragment_end:WT,logdepthbuf_fragment:XT,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:YT,logdepthbuf_vertex:qT,map_fragment:KT,map_pars_fragment:$T,map_particle_fragment:ZT,map_particle_pars_fragment:QT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:ew,morphinstance_vertex:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:rw,morphtarget_vertex:sw,normal_fragment_begin:ow,normal_fragment_maps:aw,normal_pars_fragment:lw,normal_pars_vertex:uw,normal_vertex:cw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:dw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:vw,premultiplied_alpha_fragment:_w,project_vertex:yw,dithering_fragment:xw,dithering_pars_fragment:Sw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:ww,shadowmap_vertex:Aw,shadowmask_pars_fragment:Cw,skinbase_vertex:Rw,skinning_pars_vertex:Pw,skinning_vertex:bw,skinnormal_vertex:Dw,specularmap_fragment:Lw,specularmap_pars_fragment:Iw,tonemapping_fragment:Uw,tonemapping_pars_fragment:Nw,transmission_fragment:Fw,transmission_pars_fragment:Ow,uv_pars_fragment:Bw,uv_pars_vertex:kw,uv_vertex:Vw,worldpos_vertex:zw,background_vert:Hw,background_frag:Gw,backgroundCube_vert:Ww,backgroundCube_frag:Xw,cube_vert:jw,cube_frag:Yw,depth_vert:qw,depth_frag:Kw,distanceRGBA_vert:$w,distanceRGBA_frag:Zw,equirect_vert:Qw,equirect_frag:Jw,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:u1,meshphong_vert:c1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:v1,shadow_vert:_1,shadow_frag:y1,sprite_vert:x1,sprite_frag:S1},Re={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Dn([Re.points,Re.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Dn([Re.common,Re.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Dn([Re.sprite,Re.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Dn([Re.common,Re.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Dn([Re.lights,Re.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const mu={r:0,b:0,g:0},as=new Oi,M1=new Qt;function E1(n,e,t,r,o,l,u){const f=new wt(0);let d=l===!0?0:1,h,m,g=null,v=0,x=null;function M(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function T(b){let C=!1;const U=M(b);U===null?y(f,d):U&&U.isColor&&(y(U,1),C=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const U=M(C);U&&(U.isCubeTexture||U.mapping===zu)?(m===void 0&&(m=new ui(new ka(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:Mo(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),as.copy(C.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.material.uniforms.envMap.value=U,m.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(as)),m.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Lt,(g!==U||v!==U.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):U&&U.isTexture&&(h===void 0&&(h=new ui(new Hu(2,2),new Br({name:"BackgroundMaterial",uniforms:Mo(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=U,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==Lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),h.material.uniforms.uvTransform.value.copy(U.matrix),(g!==U||v!==U.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=U,v=U.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,C){b.getRGB(mu,N_(n)),r.buffers.color.setClear(mu.r,mu.g,mu.b,C,u)}function D(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(b,C=1){f.set(b),d=C,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(f,d)},render:T,addToRenderList:S,dispose:D}}function T1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,u=!1;function f(R,H,$,se,de){let le=!1;const ue=g(se,$,H);l!==ue&&(l=ue,h(l.object)),le=x(R,se,$,de),le&&M(R,se,$,de),de!==null&&e.update(de,n.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,C(R,H,$,se),de!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,H,$){const se=$.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let le=de[H.id];le===void 0&&(le={},de[H.id]=le);let ue=le[se];return ue===void 0&&(ue=v(d()),le[se]=ue),ue}function v(R){const H=[],$=[],se=[];for(let de=0;de<t;de++)H[de]=0,$[de]=0,se[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:se,object:R,attributes:{},index:null}}function x(R,H,$,se){const de=l.attributes,le=H.attributes;let ue=0;const re=$.getAttributes();for(const k in re)if(re[k].location>=0){const ne=de[k];let F=le[k];if(F===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),ne===void 0||ne.attribute!==F||F&&ne.data!==F.data)return!0;ue++}return l.attributesNum!==ue||l.index!==se}function M(R,H,$,se){const de={},le=H.attributes;let ue=0;const re=$.getAttributes();for(const k in re)if(re[k].location>=0){let ne=le[k];ne===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(ne=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(ne=R.instanceColor));const F={};F.attribute=ne,ne&&ne.data&&(F.data=ne.data),de[k]=F,ue++}l.attributes=de,l.attributesNum=ue,l.index=se}function T(){const R=l.newAttributes;for(let H=0,$=R.length;H<$;H++)R[H]=0}function S(R){y(R,0)}function y(R,H){const $=l.newAttributes,se=l.enabledAttributes,de=l.attributeDivisors;$[R]=1,se[R]===0&&(n.enableVertexAttribArray(R),se[R]=1),de[R]!==H&&(n.vertexAttribDivisor(R,H),de[R]=H)}function D(){const R=l.newAttributes,H=l.enabledAttributes;for(let $=0,se=H.length;$<se;$++)H[$]!==R[$]&&(n.disableVertexAttribArray($),H[$]=0)}function b(R,H,$,se,de,le,ue){ue===!0?n.vertexAttribIPointer(R,H,$,de,le):n.vertexAttribPointer(R,H,$,se,de,le)}function C(R,H,$,se){T();const de=se.attributes,le=$.getAttributes(),ue=H.defaultAttributeValues;for(const re in le){const k=le[re];if(k.location>=0){let oe=de[re];if(oe===void 0&&(re==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),re==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const ne=oe.normalized,F=oe.itemSize,ie=e.get(oe);if(ie===void 0)continue;const Fe=ie.buffer,Xe=ie.type,ze=ie.bytesPerElement,J=Xe===n.INT||Xe===n.UNSIGNED_INT||oe.gpuType===Fh;if(oe.isInterleavedBufferAttribute){const ce=oe.data,Se=ce.stride,De=oe.offset;if(ce.isInstancedInterleavedBuffer){for(let Ne=0;Ne<k.locationSize;Ne++)y(k.location+Ne,ce.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ne=0;Ne<k.locationSize;Ne++)S(k.location+Ne);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Ne=0;Ne<k.locationSize;Ne++)b(k.location+Ne,F/k.locationSize,Xe,ne,Se*ze,(De+F/k.locationSize*Ne)*ze,J)}else{if(oe.isInstancedBufferAttribute){for(let ce=0;ce<k.locationSize;ce++)y(k.location+ce,oe.meshPerAttribute);R.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<k.locationSize;ce++)S(k.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let ce=0;ce<k.locationSize;ce++)b(k.location+ce,F/k.locationSize,Xe,ne,F*ze,F/k.locationSize*ce*ze,J)}}else if(ue!==void 0){const ne=ue[re];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(k.location,ne);break;case 3:n.vertexAttrib3fv(k.location,ne);break;case 4:n.vertexAttrib4fv(k.location,ne);break;default:n.vertexAttrib1fv(k.location,ne)}}}}D()}function U(){z();for(const R in r){const H=r[R];for(const $ in H){const se=H[$];for(const de in se)m(se[de].object),delete se[de];delete H[$]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const $ in H){const se=H[$];for(const de in se)m(se[de].object),delete se[de];delete H[$]}delete r[R.id]}function B(R){for(const H in r){const $=r[H];if($[R.id]===void 0)continue;const se=$[R.id];for(const de in se)m(se[de].object),delete se[de];delete $[R.id]}}function z(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:D}}function w1(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function f(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function d(h,m,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,v,0,g);let M=0;for(let T=0;T<g;T++)M+=m[T]*v[T];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function A1(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(B){return!(B!==Ti&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const z=B===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Fi&&r.convert(B)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==tr&&!z)}function d(B){if(B==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:U,maxSamples:N}}function C1(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new cs,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const x=g.length!==0||v||r!==0||o;return o=v,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,x){const M=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const D=l?0:r,b=D*4;let C=y.clippingState||null;d.value=C,C=m(M,v,b,x);for(let U=0;U!==b;++U)C[U]=t[U];y.clippingState=C,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,v,x,M){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,C=x;b!==T;++b,C+=4)u.copy(g[b]).applyMatrix4(D,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function R1(n){let e=new WeakMap;function t(u,f){return f===Id?u.mapping=yo:f===Ud&&(u.mapping=xo),u}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Id||f===Ud)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new RE(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const f=u.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const lo=4,Pv=[.125,.215,.35,.446,.526,.582],ps=20,id=new z_,bv=new wt;let rd=null,sd=0,od=0,ad=!1;const fs=(1+Math.sqrt(5))/2,ao=1/fs,Dv=[new Q(-fs,ao,0),new Q(fs,ao,0),new Q(-ao,0,fs),new Q(ao,0,fs),new Q(0,fs,-ao),new Q(0,fs,ao),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)],P1=new Q;class Lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=P1}=l;rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rd,sd,od),this._renderer.xr.enabled=ad,e.scissorTest=!1,gu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yo||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rd=this._renderer.getRenderTarget(),sd=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Ua,format:Ti,colorSpace:So,depthBuffer:!1},o=Iv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(l)),this._blurMaterial=D1(l,e,t)}return o}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,id)}_sceneToCubeUV(e,t,r,o,l){const d=new li(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,x=g.toneMapping;g.getClearColor(bv),g.toneMapping=Fr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null));const T=new L_({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new ui(new ka,T);let y=!1;const D=e.background;D?D.isColor&&(T.color.copy(D),e.background=null,y=!0):(T.color.copy(bv),y=!0);for(let b=0;b<6;b++){const C=b%3;C===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):C===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const U=this._cubeSize;gu(o,C*U,b>2?U:0,U,U),g.setRenderTarget(o),y&&g.render(S,d),g.render(e,d)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=v,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===yo||e.mapping===xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new ui(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;gu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,id)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Dv[(o-l-1)%Dv.length];this._blur(e,l-1,l,u,f)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new ui(this._lodPlanes[o],h),v=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*ps-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):ps;S>ps&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ps}`);const y=[];let D=0;for(let B=0;B<ps;++B){const z=B/T,P=Math.exp(-z*z/2);y.push(P),B===0?D+=P:B<S&&(D+=2*P)}for(let B=0;B<y.length;B++)y[B]=y[B]/D;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:b}=this;v.dTheta.value=M,v.mipInt.value=b-r;const C=this._sizeLods[o],U=3*C*(o>b-lo?o-b+lo:0),N=4*(this._cubeSize-C);gu(t,U,N,3*C,2*C),d.setRenderTarget(t),d.render(g,id)}}function b1(n){const e=[],t=[],r=[];let o=n;const l=n-lo+1+Pv.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);t.push(f);let d=1/f;u>n-lo?d=Pv[u-n+lo-1]:u===0&&(d=0),r.push(d);const h=1/(f-2),m=-h,g=1+h,v=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,T=3,S=2,y=1,D=new Float32Array(T*M*x),b=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let N=0;N<x;N++){const B=N%3*2/3-1,z=N>2?0:-1,P=[B,z,0,B+2/3,z,0,B+2/3,z+1,0,B,z,0,B+2/3,z+1,0,B,z+1,0];D.set(P,T*M*N),b.set(v,S*M*N);const R=[N,N,N,N,N,N];C.set(R,y*M*N)}const U=new sr;U.setAttribute("position",new Ii(D,T)),U.setAttribute("uv",new Ii(b,S)),U.setAttribute("faceIndex",new Ii(C,y)),e.push(U),o>lo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Iv(n,e,t){const r=new Ms(n,e,t);return r.texture.mapping=zu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function D1(n,e,t){const r=new Float32Array(ps),o=new Q(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Uv(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function Nv(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nr,depthTest:!1,depthWrite:!1})}function jh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L1(n){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,h=d===Id||d===Ud,m=d===yo||d===xo;if(h||m){let g=e.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new Lv(n)),g=h?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new Lv(n)),g=h?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function I1(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ca("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function U1(n,e,t,r){const o={},l=new WeakMap;function u(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete o[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const x in v)e.update(v[x],n.ARRAY_BUFFER)}function h(g){const v=[],x=g.index,M=g.attributes.position;let T=0;if(x!==null){const D=x.array;T=x.version;for(let b=0,C=D.length;b<C;b+=3){const U=D[b+0],N=D[b+1],B=D[b+2];v.push(U,N,N,B,B,U)}}else if(M!==void 0){const D=M.array;T=M.version;for(let b=0,C=D.length/3-1;b<C;b+=3){const U=b+0,N=b+1,B=b+2;v.push(U,N,N,B,B,U)}}else return;const S=new(R_(v)?U_:I_)(v,1);S.version=T;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const v=l.get(g);if(v){const x=g.index;x!==null&&v.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:f,update:d,getWireframeAttribute:m}}function N1(n,e,t){let r;function o(v){r=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,x){n.drawElements(r,x,l,v*u),t.update(x,r,1)}function h(v,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,v*u,M),t.update(x,r,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,v,0,T,0,M);let y=0;for(let D=0;D<M;D++)y+=x[D]*T[D];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function F1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(l/3);break;case n.LINES:t.lines+=f*(l/2);break;case n.LINE_STRIP:t.lines+=f*(l-1);break;case n.LINE_LOOP:t.lines+=f*l;break;case n.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function O1(n,e,t){const r=new WeakMap,o=new qt;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=m!==void 0?m.length:0;let v=r.get(f);if(v===void 0||v.count!==g){let R=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),T===!0&&(C=2),S===!0&&(C=3);let U=f.attributes.position.count*C,N=1;U>e.maxTextureSize&&(N=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const B=new Float32Array(U*N*4*g),z=new P_(B,U,N,g);z.type=tr,z.needsUpdate=!0;const P=C*4;for(let H=0;H<g;H++){const $=y[H],se=D[H],de=b[H],le=U*N*4*H;for(let ue=0;ue<$.count;ue++){const re=ue*P;M===!0&&(o.fromBufferAttribute($,ue),B[le+re+0]=o.x,B[le+re+1]=o.y,B[le+re+2]=o.z,B[le+re+3]=0),T===!0&&(o.fromBufferAttribute(se,ue),B[le+re+4]=o.x,B[le+re+5]=o.y,B[le+re+6]=o.z,B[le+re+7]=0),S===!0&&(o.fromBufferAttribute(de,ue),B[le+re+8]=o.x,B[le+re+9]=o.y,B[le+re+10]=o.z,B[le+re+11]=de.itemSize===4?o.w:1)}}v={count:g,texture:z,size:new At(U,N)},r.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}return{update:l}}function B1(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return g}function u(){o=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const G_=new Hn,Fv=new B_(1,1),W_=new P_,X_=new cE,j_=new O_,Ov=[],Bv=[],kv=new Float32Array(16),Vv=new Float32Array(9),zv=new Float32Array(4);function Ao(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=Ov[o];if(l===void 0&&(l=new Float32Array(o),Ov[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(l,f)}return l}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function ln(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Gu(n,e){let t=Bv[e];t===void 0&&(t=new Int32Array(e),Bv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function k1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function V1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),ln(t,e)}}function z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),ln(t,e)}}function H1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),ln(t,e)}}function G1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;zv.set(r),n.uniformMatrix2fv(this.addr,!1,zv),ln(t,r)}}function W1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;Vv.set(r),n.uniformMatrix3fv(this.addr,!1,Vv),ln(t,r)}}function X1(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;kv.set(r),n.uniformMatrix4fv(this.addr,!1,kv),ln(t,r)}}function j1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),ln(t,e)}}function q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),ln(t,e)}}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),ln(t,e)}}function $1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),ln(t,e)}}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),ln(t,e)}}function J1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),ln(t,e)}}function eA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(Fv.compareFunction=C_,l=Fv):l=G_,t.setTexture2D(e||l,o)}function tA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||X_,o)}function nA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||j_,o)}function iA(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||W_,o)}function rA(n){switch(n){case 5126:return k1;case 35664:return V1;case 35665:return z1;case 35666:return H1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return j1;case 35667:case 35671:return Y1;case 35668:case 35672:return q1;case 35669:case 35673:return K1;case 5125:return $1;case 36294:return Z1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}function sA(n,e){n.uniform1fv(this.addr,e)}function oA(n,e){const t=Ao(e,this.size,2);n.uniform2fv(this.addr,t)}function aA(n,e){const t=Ao(e,this.size,3);n.uniform3fv(this.addr,t)}function lA(n,e){const t=Ao(e,this.size,4);n.uniform4fv(this.addr,t)}function uA(n,e){const t=Ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cA(n,e){const t=Ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fA(n,e){const t=Ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dA(n,e){n.uniform1iv(this.addr,e)}function hA(n,e){n.uniform2iv(this.addr,e)}function pA(n,e){n.uniform3iv(this.addr,e)}function mA(n,e){n.uniform4iv(this.addr,e)}function gA(n,e){n.uniform1uiv(this.addr,e)}function vA(n,e){n.uniform2uiv(this.addr,e)}function _A(n,e){n.uniform3uiv(this.addr,e)}function yA(n,e){n.uniform4uiv(this.addr,e)}function xA(n,e,t){const r=this.cache,o=e.length,l=Gu(t,o);an(r,l)||(n.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||G_,l[u])}function SA(n,e,t){const r=this.cache,o=e.length,l=Gu(t,o);an(r,l)||(n.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||X_,l[u])}function MA(n,e,t){const r=this.cache,o=e.length,l=Gu(t,o);an(r,l)||(n.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||j_,l[u])}function EA(n,e,t){const r=this.cache,o=e.length,l=Gu(t,o);an(r,l)||(n.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||W_,l[u])}function TA(n){switch(n){case 5126:return sA;case 35664:return oA;case 35665:return aA;case 35666:return lA;case 35674:return uA;case 35675:return cA;case 35676:return fA;case 5124:case 35670:return dA;case 35667:case 35671:return hA;case 35668:case 35672:return pA;case 35669:case 35673:return mA;case 5125:return gA;case 36294:return vA;case 36295:return _A;case 36296:return yA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return SA;case 35680:case 36300:case 36308:case 36293:return MA;case 36289:case 36303:case 36311:case 36292:return EA}}class wA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=rA(t.type)}}class AA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TA(t.type)}}class CA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function Hv(n,e){n.seq.push(e),n.map[e.id]=e}function RA(n,e,t){const r=n.name,o=r.length;for(ld.lastIndex=0;;){const l=ld.exec(r),u=ld.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){Hv(t,h===void 0?new wA(f,n,e):new AA(f,n,e));break}else{let g=t.map[f];g===void 0&&(g=new CA(f),Hv(t,g)),t=g}}}class wu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);RA(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Gv(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const PA=37297;let bA=0;function DA(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Wv=new ht;function LA(n){Tt._getMatrix(Wv,Tt.workingColorSpace,n);const e=`mat3( ${Wv.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(n)){case bu:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Xv(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),l=(n.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+DA(n.getShaderSource(e),f)}else return l}function IA(n,e){const t=LA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function UA(n,e){let t;switch(e){case BM:t="Linear";break;case kM:t="Reinhard";break;case VM:t="Cineon";break;case zM:t="ACESFilmic";break;case GM:t="AgX";break;case WM:t="Neutral";break;case HM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vu=new Q;function NA(){Tt.getLuminanceCoefficients(vu);const n=vu.x.toFixed(4),e=vu.y.toFixed(4),t=vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function OA(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function BA(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let f=1;l.type===n.FLOAT_MAT2&&(f=2),l.type===n.FLOAT_MAT3&&(f=3),l.type===n.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function ga(n){return n!==""}function jv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kA=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(n){return n.replace(kA,zA)}const VA=new Map;function zA(n,e){let t=pt[e];if(t===void 0){const r=VA.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const HA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(n){return n.replace(HA,GA)}function GA(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Kv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WA(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===m_?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function XA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yo:case xo:e="ENVMAP_TYPE_CUBE";break;case zu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function YA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case g_:e="ENVMAP_BLENDING_MULTIPLY";break;case FM:e="ENVMAP_BLENDING_MIX";break;case OM:e="ENVMAP_BLENDING_ADD";break}return e}function qA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function KA(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=WA(t),h=XA(t),m=jA(t),g=YA(t),v=qA(t),x=FA(t),M=OA(l),T=o.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ga).join(`
`),y.length>0&&(y+=`
`)):(S=[Kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),y=[Kv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fr?"#define TONE_MAPPING":"",t.toneMapping!==Fr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Fr?UA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,IA("linearToOutputTexel",t.outputColorSpace),NA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),u=dh(u),u=jv(u,t),u=Yv(u,t),f=dh(f),f=jv(f,t),f=Yv(f,t),u=qv(u),f=qv(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=D+S+u,C=D+y+f,U=Gv(o,o.VERTEX_SHADER,b),N=Gv(o,o.FRAGMENT_SHADER,C);o.attachShader(T,U),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function B(H){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",se=o.getShaderInfoLog(U)||"",de=o.getShaderInfoLog(N)||"",le=$.trim(),ue=se.trim(),re=de.trim();let k=!0,oe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,U,N);else{const ne=Xv(o,U,"vertex"),F=Xv(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+le+`
`+ne+`
`+F)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ue===""||re==="")&&(oe=!1);oe&&(H.diagnostics={runnable:k,programLog:le,vertexShader:{log:ue,prefix:S},fragmentShader:{log:re,prefix:y}})}o.deleteShader(U),o.deleteShader(N),z=new wu(o,T),P=BA(o,T)}let z;this.getUniforms=function(){return z===void 0&&B(this),z};let P;this.getAttributes=function(){return P===void 0&&B(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,PA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=U,this.fragmentShader=N,this}let $A=0;class ZA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new QA(e),t.set(e,r)),r}}class QA{constructor(e){this.id=$A++,this.code=e,this.usedTimes=0}}function JA(n,e,t,r,o,l,u){const f=new b_,d=new ZA,h=new Set,m=[],g=o.logarithmicDepthBuffer,v=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,R,H,$,se){const de=$.fog,le=se.geometry,ue=P.isMeshStandardMaterial?$.environment:null,re=(P.isMeshStandardMaterial?t:e).get(P.envMap||ue),k=re&&re.mapping===zu?re.image.height:null,oe=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const ne=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,F=ne!==void 0?ne.length:0;let ie=0;le.morphAttributes.position!==void 0&&(ie=1),le.morphAttributes.normal!==void 0&&(ie=2),le.morphAttributes.color!==void 0&&(ie=3);let Fe,Xe,ze,J;if(oe){const xt=bi[oe];Fe=xt.vertexShader,Xe=xt.fragmentShader}else Fe=P.vertexShader,Xe=P.fragmentShader,d.update(P),ze=d.getVertexShaderID(P),J=d.getFragmentShaderID(P);const ce=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),De=se.isInstancedMesh===!0,Ne=se.isBatchedMesh===!0,mt=!!P.map,nn=!!P.matcap,O=!!re,bt=!!P.aoMap,ct=!!P.lightMap,nt=!!P.bumpMap,He=!!P.normalMap,It=!!P.displacementMap,Ge=!!P.emissiveMap,lt=!!P.metalnessMap,Ot=!!P.roughnessMap,Bt=P.anisotropy>0,L=P.clearcoat>0,w=P.dispersion>0,q=P.iridescence>0,fe=P.sheen>0,me=P.transmission>0,ae=Bt&&!!P.anisotropyMap,Ke=L&&!!P.clearcoatMap,Te=L&&!!P.clearcoatNormalMap,Be=L&&!!P.clearcoatRoughnessMap,$e=q&&!!P.iridescenceMap,Me=q&&!!P.iridescenceThicknessMap,Pe=fe&&!!P.sheenColorMap,it=fe&&!!P.sheenRoughnessMap,Ye=!!P.specularMap,Ae=!!P.specularColorMap,ft=!!P.specularIntensityMap,G=me&&!!P.transmissionMap,ye=me&&!!P.thicknessMap,we=!!P.gradientMap,Le=!!P.alphaMap,_e=P.alphaTest>0,he=!!P.alphaHash,We=!!P.extensions;let ut=Fr;P.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ut=n.toneMapping);const Rt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:Fe,fragmentShader:Xe,defines:P.defines,customVertexShaderID:ze,customFragmentShaderID:J,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Ne,batchingColor:Ne&&se._colorsTexture!==null,instancing:De,instancingColor:De&&se.instanceColor!==null,instancingMorph:De&&se.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ce===null?n.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:So,alphaToCoverage:!!P.alphaToCoverage,map:mt,matcap:nn,envMap:O,envMapMode:O&&re.mapping,envMapCubeUVHeight:k,aoMap:bt,lightMap:ct,bumpMap:nt,normalMap:He,displacementMap:v&&It,emissiveMap:Ge,normalMapObjectSpace:He&&P.normalMapType===qM,normalMapTangentSpace:He&&P.normalMapType===A_,metalnessMap:lt,roughnessMap:Ot,anisotropy:Bt,anisotropyMap:ae,clearcoat:L,clearcoatMap:Ke,clearcoatNormalMap:Te,clearcoatRoughnessMap:Be,dispersion:w,iridescence:q,iridescenceMap:$e,iridescenceThicknessMap:Me,sheen:fe,sheenColorMap:Pe,sheenRoughnessMap:it,specularMap:Ye,specularColorMap:Ae,specularIntensityMap:ft,transmission:me,transmissionMap:G,thicknessMap:ye,gradientMap:we,opaque:P.transparent===!1&&P.blending===mo&&P.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:he,combine:P.combine,mapUv:mt&&T(P.map.channel),aoMapUv:bt&&T(P.aoMap.channel),lightMapUv:ct&&T(P.lightMap.channel),bumpMapUv:nt&&T(P.bumpMap.channel),normalMapUv:He&&T(P.normalMap.channel),displacementMapUv:It&&T(P.displacementMap.channel),emissiveMapUv:Ge&&T(P.emissiveMap.channel),metalnessMapUv:lt&&T(P.metalnessMap.channel),roughnessMapUv:Ot&&T(P.roughnessMap.channel),anisotropyMapUv:ae&&T(P.anisotropyMap.channel),clearcoatMapUv:Ke&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:it&&T(P.sheenRoughnessMap.channel),specularMapUv:Ye&&T(P.specularMap.channel),specularColorMapUv:Ae&&T(P.specularColorMap.channel),specularIntensityMapUv:ft&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:ye&&T(P.thicknessMap.channel),alphaMapUv:Le&&T(P.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(He||Bt),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!le.attributes.uv&&(mt||Le),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0&&P.wireframe===!1,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Se,skinning:se.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:ut,decodeVideoTexture:mt&&P.map.isVideoTexture===!0&&Tt.getTransfer(P.map.colorSpace)===Lt,decodeVideoTextureEmissive:Ge&&P.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(P.emissiveMap.colorSpace)===Lt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===er,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:We&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&P.extensions.multiDraw===!0||Ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Rt.vertexUv1s=h.has(1),Rt.vertexUv2s=h.has(2),Rt.vertexUv3s=h.has(3),h.clear(),Rt}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)R.push(H),R.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(D(R,P),b(R,P),R.push(n.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),P.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),P.push(f.mask)}function C(P){const R=M[P.type];let H;if(R){const $=bi[R];H=TE.clone($.uniforms)}else H=P.uniforms;return H}function U(P,R){let H;for(let $=0,se=m.length;$<se;$++){const de=m[$];if(de.cacheKey===R){H=de,++H.usedTimes;break}}return H===void 0&&(H=new KA(n,R,P,l),m.push(H)),H}function N(P){if(--P.usedTimes===0){const R=m.indexOf(P);m[R]=m[m.length-1],m.pop(),P.destroy()}}function B(P){d.remove(P)}function z(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:U,releaseProgram:N,releaseShaderCache:B,programs:m,dispose:z}}function eC(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function tC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $v(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zv(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,v,x,M,T,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:v,material:x,groupOrder:M,renderOrder:g.renderOrder,z:T,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=T,y.group=S),e++,y}function f(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,v,x,M,T,S){const y=u(g,v,x,M,T,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,v){t.length>1&&t.sort(g||tC),r.length>1&&r.sort(v||$v),o.length>1&&o.sort(v||$v)}function m(){for(let g=e,v=n.length;g<v;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:m,sort:h}}function nC(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new Zv,n.set(r,[u])):o>=l.length?(u=new Zv,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function iC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new wt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function rC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let sC=0;function oC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aC(n){const e=new iC,t=rC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const o=new Q,l=new Qt,u=new Qt;function f(h){let m=0,g=0,v=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,D=0,b=0,C=0,U=0,N=0,B=0;h.sort(oC);for(let P=0,R=h.length;P<R;P++){const H=h[P],$=H.color,se=H.intensity,de=H.distance,le=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=$.r*se,g+=$.g*se,v+=$.b*se;else if(H.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(H.sh.coefficients[ue],se);B++}else if(H.isDirectionalLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const re=H.shadow,k=t.get(H);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.directionalShadow[x]=k,r.directionalShadowMap[x]=le,r.directionalShadowMatrix[x]=H.shadow.matrix,D++}r.directional[x]=ue,x++}else if(H.isSpotLight){const ue=e.get(H);ue.position.setFromMatrixPosition(H.matrixWorld),ue.color.copy($).multiplyScalar(se),ue.distance=de,ue.coneCos=Math.cos(H.angle),ue.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ue.decay=H.decay,r.spot[T]=ue;const re=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,re.updateMatrices(H),H.castShadow&&N++),r.spotLightMatrix[T]=re.matrix,H.castShadow){const k=t.get(H);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=le,C++}T++}else if(H.isRectAreaLight){const ue=e.get(H);ue.color.copy($).multiplyScalar(se),ue.halfWidth.set(H.width*.5,0,0),ue.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=ue,S++}else if(H.isPointLight){const ue=e.get(H);if(ue.color.copy(H.color).multiplyScalar(H.intensity),ue.distance=H.distance,ue.decay=H.decay,H.castShadow){const re=H.shadow,k=t.get(H);k.shadowIntensity=re.intensity,k.shadowBias=re.bias,k.shadowNormalBias=re.normalBias,k.shadowRadius=re.radius,k.shadowMapSize=re.mapSize,k.shadowCameraNear=re.camera.near,k.shadowCameraFar=re.camera.far,r.pointShadow[M]=k,r.pointShadowMap[M]=le,r.pointShadowMatrix[M]=H.shadow.matrix,b++}r.point[M]=ue,M++}else if(H.isHemisphereLight){const ue=e.get(H);ue.skyColor.copy(H.color).multiplyScalar(se),ue.groundColor.copy(H.groundColor).multiplyScalar(se),r.hemi[y]=ue,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==x||z.pointLength!==M||z.spotLength!==T||z.rectAreaLength!==S||z.hemiLength!==y||z.numDirectionalShadows!==D||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==U||z.numLightProbes!==B)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+U-N,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,z.directionalLength=x,z.pointLength=M,z.spotLength=T,z.rectAreaLength=S,z.hemiLength=y,z.numDirectionalShadows=D,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=U,z.numLightProbes=B,r.version=sC++)}function d(h,m){let g=0,v=0,x=0,M=0,T=0;const S=m.matrixWorldInverse;for(let y=0,D=h.length;y<D;y++){const b=h[y];if(b.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),g++}else if(b.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),v++}else if(b.isHemisphereLight){const C=r.hemi[T];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),T++}}}return{setup:f,setupView:d,state:r}}function Qv(n){const e=new aC(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function lC(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new Qv(n),e.set(o,[f])):l>=u.length?(f=new Qv(n),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const uC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fC(n,e,t){let r=new Wh;const o=new At,l=new At,u=new qt,f=new UE({depthPacking:YM}),d=new NE,h={},m=t.maxTextureSize,g={[Or]:zn,[zn]:Or,[er]:er},v=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:uC,fragmentShader:cC}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new sr;M.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ui(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=m_;let y=this.type;this.render=function(N,B,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const P=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Nr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const se=y!==Ji&&this.type===Ji,de=y===Ji&&this.type!==Ji;for(let le=0,ue=N.length;le<ue;le++){const re=N[le],k=re.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const oe=k.getFrameExtents();if(o.multiply(oe),l.copy(k.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/oe.x),o.x=l.x*oe.x,k.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/oe.y),o.y=l.y*oe.y,k.mapSize.y=l.y)),k.map===null||se===!0||de===!0){const F=this.type!==Ji?{minFilter:wi,magFilter:wi}:{};k.map!==null&&k.map.dispose(),k.map=new Ms(o.x,o.y,F),k.map.texture.name=re.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ne=k.getViewportCount();for(let F=0;F<ne;F++){const ie=k.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),$.viewport(u),k.updateMatrices(re,F),r=k.getFrustum(),C(B,z,k.camera,re,this.type)}k.isPointLightShadow!==!0&&this.type===Ji&&D(k,z),k.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,R,H)};function D(N,B){const z=e.update(T);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ms(o.x,o.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(B,null,z,v,T,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(B,null,z,x,T,null)}function b(N,B,z,P){let R=null;const H=z.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(H!==void 0)R=H;else if(R=z.isPointLight===!0?d:f,n.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=R.uuid,se=B.uuid;let de=h[$];de===void 0&&(de={},h[$]=de);let le=de[se];le===void 0&&(le=R.clone(),de[se]=le,B.addEventListener("dispose",U)),R=le}if(R.visible=B.visible,R.wireframe=B.wireframe,P===Ji?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:g[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=n.properties.get(R);$.light=z}return R}function C(N,B,z,P,R){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===Ji)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,N.matrixWorld);const se=e.update(N),de=N.material;if(Array.isArray(de)){const le=se.groups;for(let ue=0,re=le.length;ue<re;ue++){const k=le[ue],oe=de[k.materialIndex];if(oe&&oe.visible){const ne=b(N,oe,P,R);N.onBeforeShadow(n,N,B,z,se,ne,k),n.renderBufferDirect(z,null,se,ne,N,k),N.onAfterShadow(n,N,B,z,se,ne,k)}}}else if(de.visible){const le=b(N,de,P,R);N.onBeforeShadow(n,N,B,z,se,le,null),n.renderBufferDirect(z,null,se,le,N,null),N.onAfterShadow(n,N,B,z,se,le,null)}}const $=N.children;for(let se=0,de=$.length;se<de;se++)C($[se],B,z,P,R)}function U(N){N.target.removeEventListener("dispose",U);for(const z in h){const P=h[z],R=N.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const dC={[Ad]:Cd,[Rd]:Dd,[Pd]:Ld,[_o]:bd,[Cd]:Ad,[Dd]:Rd,[Ld]:Pd,[bd]:_o};function hC(n,e){function t(){let G=!1;const ye=new qt;let we=null;const Le=new qt(0,0,0,0);return{setMask:function(_e){we!==_e&&!G&&(n.colorMask(_e,_e,_e,_e),we=_e)},setLocked:function(_e){G=_e},setClear:function(_e,he,We,ut,Rt){Rt===!0&&(_e*=ut,he*=ut,We*=ut),ye.set(_e,he,We,ut),Le.equals(ye)===!1&&(n.clearColor(_e,he,We,ut),Le.copy(ye))},reset:function(){G=!1,we=null,Le.set(-1,0,0,0)}}}function r(){let G=!1,ye=!1,we=null,Le=null,_e=null;return{setReversed:function(he){if(ye!==he){const We=e.get("EXT_clip_control");he?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const ut=_e;_e=null,this.setClear(ut)}},getReversed:function(){return ye},setTest:function(he){he?ce(n.DEPTH_TEST):Se(n.DEPTH_TEST)},setMask:function(he){we!==he&&!G&&(n.depthMask(he),we=he)},setFunc:function(he){if(ye&&(he=dC[he]),Le!==he){switch(he){case Ad:n.depthFunc(n.NEVER);break;case Cd:n.depthFunc(n.ALWAYS);break;case Rd:n.depthFunc(n.LESS);break;case _o:n.depthFunc(n.LEQUAL);break;case Pd:n.depthFunc(n.EQUAL);break;case bd:n.depthFunc(n.GEQUAL);break;case Dd:n.depthFunc(n.GREATER);break;case Ld:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Le=he}},setLocked:function(he){G=he},setClear:function(he){_e!==he&&(ye&&(he=1-he),n.clearDepth(he),_e=he)},reset:function(){G=!1,we=null,Le=null,_e=null,ye=!1}}}function o(){let G=!1,ye=null,we=null,Le=null,_e=null,he=null,We=null,ut=null,Rt=null;return{setTest:function(xt){G||(xt?ce(n.STENCIL_TEST):Se(n.STENCIL_TEST))},setMask:function(xt){ye!==xt&&!G&&(n.stencilMask(xt),ye=xt)},setFunc:function(xt,Zn,gn){(we!==xt||Le!==Zn||_e!==gn)&&(n.stencilFunc(xt,Zn,gn),we=xt,Le=Zn,_e=gn)},setOp:function(xt,Zn,gn){(he!==xt||We!==Zn||ut!==gn)&&(n.stencilOp(xt,Zn,gn),he=xt,We=Zn,ut=gn)},setLocked:function(xt){G=xt},setClear:function(xt){Rt!==xt&&(n.clearStencil(xt),Rt=xt)},reset:function(){G=!1,ye=null,we=null,Le=null,_e=null,he=null,We=null,ut=null,Rt=null}}}const l=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,C=null,U=null,N=null,B=new wt(0,0,0),z=0,P=!1,R=null,H=null,$=null,se=null,de=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,re=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(k)[1]),ue=re>=1):k.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ue=re>=2);let oe=null,ne={};const F=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Fe=new qt().fromArray(F),Xe=new qt().fromArray(ie);function ze(G,ye,we,Le){const _e=new Uint8Array(4),he=n.createTexture();n.bindTexture(G,he),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<we;We++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Le,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ye+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return he}const J={};J[n.TEXTURE_2D]=ze(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ce(n.DEPTH_TEST),u.setFunc(_o),nt(!1),He(nv),ce(n.CULL_FACE),bt(Nr);function ce(G){m[G]!==!0&&(n.enable(G),m[G]=!0)}function Se(G){m[G]!==!1&&(n.disable(G),m[G]=!1)}function De(G,ye){return g[G]!==ye?(n.bindFramebuffer(G,ye),g[G]=ye,G===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=ye),G===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ne(G,ye){let we=x,Le=!1;if(G){we=v.get(ye),we===void 0&&(we=[],v.set(ye,we));const _e=G.textures;if(we.length!==_e.length||we[0]!==n.COLOR_ATTACHMENT0){for(let he=0,We=_e.length;he<We;he++)we[he]=n.COLOR_ATTACHMENT0+he;we.length=_e.length,Le=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Le=!0);Le&&n.drawBuffers(we)}function mt(G){return M!==G?(n.useProgram(G),M=G,!0):!1}const nn={[hs]:n.FUNC_ADD,[yM]:n.FUNC_SUBTRACT,[xM]:n.FUNC_REVERSE_SUBTRACT};nn[SM]=n.MIN,nn[MM]=n.MAX;const O={[EM]:n.ZERO,[TM]:n.ONE,[wM]:n.SRC_COLOR,[Td]:n.SRC_ALPHA,[DM]:n.SRC_ALPHA_SATURATE,[PM]:n.DST_COLOR,[CM]:n.DST_ALPHA,[AM]:n.ONE_MINUS_SRC_COLOR,[wd]:n.ONE_MINUS_SRC_ALPHA,[bM]:n.ONE_MINUS_DST_COLOR,[RM]:n.ONE_MINUS_DST_ALPHA,[LM]:n.CONSTANT_COLOR,[IM]:n.ONE_MINUS_CONSTANT_COLOR,[UM]:n.CONSTANT_ALPHA,[NM]:n.ONE_MINUS_CONSTANT_ALPHA};function bt(G,ye,we,Le,_e,he,We,ut,Rt,xt){if(G===Nr){T===!0&&(Se(n.BLEND),T=!1);return}if(T===!1&&(ce(n.BLEND),T=!0),G!==_M){if(G!==S||xt!==P){if((y!==hs||C!==hs)&&(n.blendEquation(n.FUNC_ADD),y=hs,C=hs),xt)switch(G){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iv:n.blendFunc(n.ONE,n.ONE);break;case rv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sv:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case iv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case rv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,b=null,U=null,N=null,B.set(0,0,0),z=0,S=G,P=xt}return}_e=_e||ye,he=he||we,We=We||Le,(ye!==y||_e!==C)&&(n.blendEquationSeparate(nn[ye],nn[_e]),y=ye,C=_e),(we!==D||Le!==b||he!==U||We!==N)&&(n.blendFuncSeparate(O[we],O[Le],O[he],O[We]),D=we,b=Le,U=he,N=We),(ut.equals(B)===!1||Rt!==z)&&(n.blendColor(ut.r,ut.g,ut.b,Rt),B.copy(ut),z=Rt),S=G,P=!1}function ct(G,ye){G.side===er?Se(n.CULL_FACE):ce(n.CULL_FACE);let we=G.side===zn;ye&&(we=!we),nt(we),G.blending===mo&&G.transparent===!1?bt(Nr):bt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Le=G.stencilWrite;f.setTest(Le),Le&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ge(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ce(n.SAMPLE_ALPHA_TO_COVERAGE):Se(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){R!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),R=G)}function He(G){G!==mM?(ce(n.CULL_FACE),G!==H&&(G===nv?n.cullFace(n.BACK):G===gM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Se(n.CULL_FACE),H=G}function It(G){G!==$&&(ue&&n.lineWidth(G),$=G)}function Ge(G,ye,we){G?(ce(n.POLYGON_OFFSET_FILL),(se!==ye||de!==we)&&(n.polygonOffset(ye,we),se=ye,de=we)):Se(n.POLYGON_OFFSET_FILL)}function lt(G){G?ce(n.SCISSOR_TEST):Se(n.SCISSOR_TEST)}function Ot(G){G===void 0&&(G=n.TEXTURE0+le-1),oe!==G&&(n.activeTexture(G),oe=G)}function Bt(G,ye,we){we===void 0&&(oe===null?we=n.TEXTURE0+le-1:we=oe);let Le=ne[we];Le===void 0&&(Le={type:void 0,texture:void 0},ne[we]=Le),(Le.type!==G||Le.texture!==ye)&&(oe!==we&&(n.activeTexture(we),oe=we),n.bindTexture(G,ye||J[G]),Le.type=G,Le.texture=ye)}function L(){const G=ne[oe];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function q(){try{n.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{n.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{n.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Be(){try{n.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{n.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{n.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){Fe.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Fe.copy(G))}function it(G){Xe.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Xe.copy(G))}function Ye(G,ye){let we=h.get(ye);we===void 0&&(we=new WeakMap,h.set(ye,we));let Le=we.get(G);Le===void 0&&(Le=n.getUniformBlockIndex(ye,G.name),we.set(G,Le))}function Ae(G,ye){const Le=h.get(ye).get(G);d.get(ye)!==Le&&(n.uniformBlockBinding(ye,Le,G.__bindingPointIndex),d.set(ye,Le))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},oe=null,ne={},g={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,D=null,b=null,C=null,U=null,N=null,B=new wt(0,0,0),z=0,P=!1,R=null,H=null,$=null,se=null,de=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Xe.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ce,disable:Se,bindFramebuffer:De,drawBuffers:Ne,useProgram:mt,setBlending:bt,setMaterial:ct,setFlipSided:nt,setCullFace:He,setLineWidth:It,setPolygonOffset:Ge,setScissorTest:lt,activeTexture:Ot,bindTexture:Bt,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:q,texImage2D:$e,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:Be,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ke,scissor:Pe,viewport:it,reset:ft}}function pC(n,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new At,m=new WeakMap;let g;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return x?new OffscreenCanvas(L,w):Lu("canvas")}function T(L,w,q){let fe=1;const me=Bt(L);if((me.width>q||me.height>q)&&(fe=q/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ae=Math.floor(fe*me.width),Ke=Math.floor(fe*me.height);g===void 0&&(g=M(ae,Ke));const Te=w?M(ae,Ke):g;return Te.width=ae,Te.height=Ke,Te.getContext("2d").drawImage(L,0,0,ae,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ae+"x"+Ke+")."),Te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,w,q,fe,me=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ae=w;if(w===n.RED&&(q===n.FLOAT&&(ae=n.R32F),q===n.HALF_FLOAT&&(ae=n.R16F),q===n.UNSIGNED_BYTE&&(ae=n.R8)),w===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.R8UI),q===n.UNSIGNED_SHORT&&(ae=n.R16UI),q===n.UNSIGNED_INT&&(ae=n.R32UI),q===n.BYTE&&(ae=n.R8I),q===n.SHORT&&(ae=n.R16I),q===n.INT&&(ae=n.R32I)),w===n.RG&&(q===n.FLOAT&&(ae=n.RG32F),q===n.HALF_FLOAT&&(ae=n.RG16F),q===n.UNSIGNED_BYTE&&(ae=n.RG8)),w===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.RG8UI),q===n.UNSIGNED_SHORT&&(ae=n.RG16UI),q===n.UNSIGNED_INT&&(ae=n.RG32UI),q===n.BYTE&&(ae=n.RG8I),q===n.SHORT&&(ae=n.RG16I),q===n.INT&&(ae=n.RG32I)),w===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),q===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),q===n.UNSIGNED_INT&&(ae=n.RGB32UI),q===n.BYTE&&(ae=n.RGB8I),q===n.SHORT&&(ae=n.RGB16I),q===n.INT&&(ae=n.RGB32I)),w===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),q===n.UNSIGNED_INT&&(ae=n.RGBA32UI),q===n.BYTE&&(ae=n.RGBA8I),q===n.SHORT&&(ae=n.RGBA16I),q===n.INT&&(ae=n.RGBA32I)),w===n.RGB&&(q===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(ae=n.R11F_G11F_B10F)),w===n.RGBA){const Ke=me?bu:Tt.getTransfer(fe);q===n.FLOAT&&(ae=n.RGBA32F),q===n.HALF_FLOAT&&(ae=n.RGBA16F),q===n.UNSIGNED_BYTE&&(ae=Ke===Lt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function C(L,w){let q;return L?w===null||w===Ss||w===Ta?q=n.DEPTH24_STENCIL8:w===tr?q=n.DEPTH32F_STENCIL8:w===Ea&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ss||w===Ta?q=n.DEPTH_COMPONENT24:w===tr?q=n.DEPTH_COMPONENT32F:w===Ea&&(q=n.DEPTH_COMPONENT16),q}function U(L,w){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==wi&&L.minFilter!==Di?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=L.target;w.removeEventListener("dispose",N),z(w),w.isVideoTexture&&m.delete(w)}function B(L){const w=L.target;w.removeEventListener("dispose",B),R(w)}function z(L){const w=r.get(L);if(w.__webglInit===void 0)return;const q=L.source,fe=v.get(q);if(fe){const me=fe[w.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(L),Object.keys(fe).length===0&&v.delete(q)}r.remove(L)}function P(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const q=L.source,fe=v.get(q);delete fe[w.__cacheKey],u.memory.textures--}function R(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(w.__webglFramebuffer[fe]))for(let me=0;me<w.__webglFramebuffer[fe].length;me++)n.deleteFramebuffer(w.__webglFramebuffer[fe][me]);else n.deleteFramebuffer(w.__webglFramebuffer[fe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[fe])}else{if(Array.isArray(w.__webglFramebuffer))for(let fe=0;fe<w.__webglFramebuffer.length;fe++)n.deleteFramebuffer(w.__webglFramebuffer[fe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let fe=0;fe<w.__webglColorRenderbuffer.length;fe++)w.__webglColorRenderbuffer[fe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[fe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const q=L.textures;for(let fe=0,me=q.length;fe<me;fe++){const ae=r.get(q[fe]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),u.memory.textures--),r.remove(q[fe])}r.remove(L)}let H=0;function $(){H=0}function se(){const L=H;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),H+=1,L}function de(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function le(L,w){const q=r.get(L);if(L.isVideoTexture&&lt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const fe=L.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(q,L,w);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+w)}function ue(L,w){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){J(q,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+w)}function re(L,w){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){J(q,L,w);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+w)}function k(L,w){const q=r.get(L);if(L.version>0&&q.__version!==L.version){ce(q,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+w)}const oe={[Nd]:n.REPEAT,[ms]:n.CLAMP_TO_EDGE,[Fd]:n.MIRRORED_REPEAT},ne={[wi]:n.NEAREST,[XM]:n.NEAREST_MIPMAP_NEAREST,[Zl]:n.NEAREST_MIPMAP_LINEAR,[Di]:n.LINEAR,[bf]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},F={[KM]:n.NEVER,[tE]:n.ALWAYS,[$M]:n.LESS,[C_]:n.LEQUAL,[ZM]:n.EQUAL,[eE]:n.GEQUAL,[QM]:n.GREATER,[JM]:n.NOTEQUAL};function ie(L,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Di||w.magFilter===bf||w.magFilter===Zl||w.magFilter===gs||w.minFilter===Di||w.minFilter===bf||w.minFilter===Zl||w.minFilter===gs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,oe[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,oe[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,oe[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ne[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ne[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wi||w.minFilter!==Zl&&w.minFilter!==gs||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Fe(L,w){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const fe=w.source;let me=v.get(fe);me===void 0&&(me={},v.set(fe,me));const ae=de(w);if(ae!==L.__cacheKey){me[ae]===void 0&&(me[ae]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,q=!0),me[ae].usedTimes++;const Ke=me[L.__cacheKey];Ke!==void 0&&(me[L.__cacheKey].usedTimes--,Ke.usedTimes===0&&P(w)),L.__cacheKey=ae,L.__webglTexture=me[ae].texture}return q}function Xe(L,w,q){return Math.floor(Math.floor(L/q)/w)}function ze(L,w,q,fe){const ae=L.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,q,fe,w.data);else{ae.sort((Me,Pe)=>Me.start-Pe.start);let Ke=0;for(let Me=1;Me<ae.length;Me++){const Pe=ae[Ke],it=ae[Me],Ye=Pe.start+Pe.count,Ae=Xe(it.start,w.width,4),ft=Xe(Pe.start,w.width,4);it.start<=Ye+1&&Ae===ft&&Xe(it.start+it.count-1,w.width,4)===Ae?Pe.count=Math.max(Pe.count,it.start+it.count-Pe.start):(++Ke,ae[Ke]=it)}ae.length=Ke+1;const Te=n.getParameter(n.UNPACK_ROW_LENGTH),Be=n.getParameter(n.UNPACK_SKIP_PIXELS),$e=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Me=0,Pe=ae.length;Me<Pe;Me++){const it=ae[Me],Ye=Math.floor(it.start/4),Ae=Math.ceil(it.count/4),ft=Ye%w.width,G=Math.floor(Ye/w.width),ye=Ae,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,ft,G,ye,we,q,fe,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Te),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(n.UNPACK_SKIP_ROWS,$e)}}function J(L,w,q){let fe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(fe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(fe=n.TEXTURE_3D);const me=Fe(L,w),ae=w.source;t.bindTexture(fe,L.__webglTexture,n.TEXTURE0+q);const Ke=r.get(ae);if(ae.version!==Ke.__version||me===!0){t.activeTexture(n.TEXTURE0+q);const Te=Tt.getPrimaries(Tt.workingColorSpace),Be=w.colorSpace===Ir?null:Tt.getPrimaries(w.colorSpace),$e=w.colorSpace===Ir||Te===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Me=T(w.image,!1,o.maxTextureSize);Me=Ot(w,Me);const Pe=l.convert(w.format,w.colorSpace),it=l.convert(w.type);let Ye=b(w.internalFormat,Pe,it,w.colorSpace,w.isVideoTexture);ie(fe,w);let Ae;const ft=w.mipmaps,G=w.isVideoTexture!==!0,ye=Ke.__version===void 0||me===!0,we=ae.dataReady,Le=U(w,Me);if(w.isDepthTexture)Ye=C(w.format===Aa,w.type),ye&&(G?t.texStorage2D(n.TEXTURE_2D,1,Ye,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Pe,it,null));else if(w.isDataTexture)if(ft.length>0){G&&ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ye,ft[0].width,ft[0].height);for(let _e=0,he=ft.length;_e<he;_e++)Ae=ft[_e],G?we&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,it,Ae.data):t.texImage2D(n.TEXTURE_2D,_e,Ye,Ae.width,Ae.height,0,Pe,it,Ae.data);w.generateMipmaps=!1}else G?(ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ye,Me.width,Me.height),we&&ze(w,Me,Pe,it)):t.texImage2D(n.TEXTURE_2D,0,Ye,Me.width,Me.height,0,Pe,it,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ye,ft[0].width,ft[0].height,Me.depth);for(let _e=0,he=ft.length;_e<he;_e++)if(Ae=ft[_e],w.format!==Ti)if(Pe!==null)if(G){if(we)if(w.layerUpdates.size>0){const We=Rv(Ae.width,Ae.height,w.format,w.type);for(const ut of w.layerUpdates){const Rt=Ae.data.subarray(ut*We/Ae.data.BYTES_PER_ELEMENT,(ut+1)*We/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,ut,Ae.width,Ae.height,1,Pe,Rt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Me.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Ye,Ae.width,Ae.height,Me.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Me.depth,Pe,it,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Ye,Ae.width,Ae.height,Me.depth,0,Pe,it,Ae.data)}else{G&&ye&&t.texStorage2D(n.TEXTURE_2D,Le,Ye,ft[0].width,ft[0].height);for(let _e=0,he=ft.length;_e<he;_e++)Ae=ft[_e],w.format!==Ti?Pe!==null?G?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Ye,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?we&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,it,Ae.data):t.texImage2D(n.TEXTURE_2D,_e,Ye,Ae.width,Ae.height,0,Pe,it,Ae.data)}else if(w.isDataArrayTexture)if(G){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ye,Me.width,Me.height,Me.depth),we)if(w.layerUpdates.size>0){const _e=Rv(Me.width,Me.height,w.format,w.type);for(const he of w.layerUpdates){const We=Me.data.subarray(he*_e/Me.data.BYTES_PER_ELEMENT,(he+1)*_e/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Pe,it,We)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Pe,it,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ye,Me.width,Me.height,Me.depth,0,Pe,it,Me.data);else if(w.isData3DTexture)G?(ye&&t.texStorage3D(n.TEXTURE_3D,Le,Ye,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Pe,it,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ye,Me.width,Me.height,Me.depth,0,Pe,it,Me.data);else if(w.isFramebufferTexture){if(ye)if(G)t.texStorage2D(n.TEXTURE_2D,Le,Ye,Me.width,Me.height);else{let _e=Me.width,he=Me.height;for(let We=0;We<Le;We++)t.texImage2D(n.TEXTURE_2D,We,Ye,_e,he,0,Pe,it,null),_e>>=1,he>>=1}}else if(ft.length>0){if(G&&ye){const _e=Bt(ft[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ye,_e.width,_e.height)}for(let _e=0,he=ft.length;_e<he;_e++)Ae=ft[_e],G?we&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Pe,it,Ae):t.texImage2D(n.TEXTURE_2D,_e,Ye,Pe,it,Ae);w.generateMipmaps=!1}else if(G){if(ye){const _e=Bt(Me);t.texStorage2D(n.TEXTURE_2D,Le,Ye,_e.width,_e.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,it,Me)}else t.texImage2D(n.TEXTURE_2D,0,Ye,Pe,it,Me);S(w)&&y(fe),Ke.__version=ae.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ce(L,w,q){if(w.image.length!==6)return;const fe=Fe(L,w),me=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+q);const ae=r.get(me);if(me.version!==ae.__version||fe===!0){t.activeTexture(n.TEXTURE0+q);const Ke=Tt.getPrimaries(Tt.workingColorSpace),Te=w.colorSpace===Ir?null:Tt.getPrimaries(w.colorSpace),Be=w.colorSpace===Ir||Ke===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const $e=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!$e&&!Me?Pe[he]=T(w.image[he],!0,o.maxCubemapSize):Pe[he]=Me?w.image[he].image:w.image[he],Pe[he]=Ot(w,Pe[he]);const it=Pe[0],Ye=l.convert(w.format,w.colorSpace),Ae=l.convert(w.type),ft=b(w.internalFormat,Ye,Ae,w.colorSpace),G=w.isVideoTexture!==!0,ye=ae.__version===void 0||fe===!0,we=me.dataReady;let Le=U(w,it);ie(n.TEXTURE_CUBE_MAP,w);let _e;if($e){G&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ft,it.width,it.height);for(let he=0;he<6;he++){_e=Pe[he].mipmaps;for(let We=0;We<_e.length;We++){const ut=_e[We];w.format!==Ti?Ye!==null?G?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,ut.width,ut.height,Ye,ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ft,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,0,0,ut.width,ut.height,Ye,Ae,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We,ft,ut.width,ut.height,0,Ye,Ae,ut.data)}}}else{if(_e=w.mipmaps,G&&ye){_e.length>0&&Le++;const he=Bt(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Le,ft,he.width,he.height)}for(let he=0;he<6;he++)if(Me){G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,Ye,Ae,Pe[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Pe[he].width,Pe[he].height,0,Ye,Ae,Pe[he].data);for(let We=0;We<_e.length;We++){const Rt=_e[We].image[he].image;G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Rt.width,Rt.height,Ye,Ae,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ft,Rt.width,Rt.height,0,Ye,Ae,Rt.data)}}else{G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ye,Ae,Pe[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ft,Ye,Ae,Pe[he]);for(let We=0;We<_e.length;We++){const ut=_e[We];G?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,0,0,Ye,Ae,ut.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,We+1,ft,Ye,Ae,ut.image[he])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),ae.__version=me.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Se(L,w,q,fe,me,ae){const Ke=l.convert(q.format,q.colorSpace),Te=l.convert(q.type),Be=b(q.internalFormat,Ke,Te,q.colorSpace),$e=r.get(w),Me=r.get(q);if(Me.__renderTarget=w,!$e.__hasExternalTextures){const Pe=Math.max(1,w.width>>ae),it=Math.max(1,w.height>>ae);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,ae,Be,Pe,it,w.depth,0,Ke,Te,null):t.texImage2D(me,ae,Be,Pe,it,0,Ke,Te,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Ge(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,fe,me,Me.__webglTexture,0,It(w)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,fe,me,Me.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(L,w,q){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const fe=w.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,ae=C(w.stencilBuffer,me),Ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=It(w);Ge(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,ae,w.width,w.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,ae,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ae,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ke,n.RENDERBUFFER,L)}else{const fe=w.textures;for(let me=0;me<fe.length;me++){const ae=fe[me],Ke=l.convert(ae.format,ae.colorSpace),Te=l.convert(ae.type),Be=b(ae.internalFormat,Ke,Te,ae.colorSpace),$e=It(w);q&&Ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Be,w.width,w.height):Ge(w)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,Be,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Be,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(w.depthTexture);fe.__renderTarget=w,(!fe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le(w.depthTexture,0);const me=fe.__webglTexture,ae=It(w);if(w.depthTexture.format===wa)Ge(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(w.depthTexture.format===Aa)Ge(w)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function mt(L){const w=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const fe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),fe){const me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),w.__depthDisposeCallback=me}w.__boundDepthTexture=fe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const fe=L.texture.mipmaps;fe&&fe.length>0?Ne(w.__webglFramebuffer[0],L):Ne(w.__webglFramebuffer,L)}else if(q){w.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[fe]),w.__webglDepthbuffer[fe]===void 0)w.__webglDepthbuffer[fe]=n.createRenderbuffer(),De(w.__webglDepthbuffer[fe],L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[fe];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ae)}}else{const fe=L.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),De(w.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nn(L,w,q){const fe=r.get(L);w!==void 0&&Se(fe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&mt(L)}function O(L){const w=L.texture,q=r.get(L),fe=r.get(w);L.addEventListener("dispose",B);const me=L.textures,ae=L.isWebGLCubeRenderTarget===!0,Ke=me.length>1;if(Ke||(fe.__webglTexture===void 0&&(fe.__webglTexture=n.createTexture()),fe.__version=w.version,u.memory.textures++),ae){q.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Te]=[];for(let Be=0;Be<w.mipmaps.length;Be++)q.__webglFramebuffer[Te][Be]=n.createFramebuffer()}else q.__webglFramebuffer[Te]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)q.__webglFramebuffer[Te]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Ke)for(let Te=0,Be=me.length;Te<Be;Te++){const $e=r.get(me[Te]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),u.memory.textures++)}if(L.samples>0&&Ge(L)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Be=me[Te];q.__webglColorRenderbuffer[Te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Te]);const $e=l.convert(Be.format,Be.colorSpace),Me=l.convert(Be.type),Pe=b(Be.internalFormat,$e,Me,Be.colorSpace,L.isXRRenderTarget===!0),it=It(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Pe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,q.__webglColorRenderbuffer[Te])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),De(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),ie(n.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Se(q.__webglFramebuffer[Te][Be],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Be);else Se(q.__webglFramebuffer[Te],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Te=0,Be=me.length;Te<Be;Te++){const $e=me[Te],Me=r.get($e);let Pe=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Me.__webglTexture),ie(Pe,$e),Se(q.__webglFramebuffer,L,$e,n.COLOR_ATTACHMENT0+Te,Pe,0),S($e)&&y(Pe)}t.unbindTexture()}else{let Te=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Te,fe.__webglTexture),ie(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Be=0;Be<w.mipmaps.length;Be++)Se(q.__webglFramebuffer[Be],L,w,n.COLOR_ATTACHMENT0,Te,Be);else Se(q.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Te,0);S(w)&&y(Te),t.unbindTexture()}L.depthBuffer&&mt(L)}function bt(L){const w=L.textures;for(let q=0,fe=w.length;q<fe;q++){const me=w[q];if(S(me)){const ae=D(L),Ke=r.get(me).__webglTexture;t.bindTexture(ae,Ke),y(ae),t.unbindTexture()}}}const ct=[],nt=[];function He(L){if(L.samples>0){if(Ge(L)===!1){const w=L.textures,q=L.width,fe=L.height;let me=n.COLOR_BUFFER_BIT;const ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ke=r.get(L),Te=w.length>1;if(Te)for(let $e=0;$e<w.length;$e++)t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Be=L.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let $e=0;$e<w.length;$e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),Te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[$e]);const Me=r.get(w[$e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,q,fe,0,0,q,fe,me,n.NEAREST),d===!0&&(ct.length=0,nt.length=0,ct.push(n.COLOR_ATTACHMENT0+$e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(ae),nt.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,nt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Te)for(let $e=0;$e<w.length;$e++){t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.RENDERBUFFER,Ke.__webglColorRenderbuffer[$e]);const Me=r.get(w[$e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$e,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(L){return Math.min(o.maxSamples,L.samples)}function Ge(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function lt(L){const w=u.render.frame;m.get(L)!==w&&(m.set(L,w),L.update())}function Ot(L,w){const q=L.colorSpace,fe=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==So&&q!==Ir&&(Tt.getTransfer(q)===Lt?(fe!==Ti||me!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}function Bt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=$,this.setTexture2D=le,this.setTexture2DArray=ue,this.setTexture3D=re,this.setTextureCube=k,this.rebindTextures=nn,this.setupRenderTarget=O,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ge}function mC(n,e){function t(r,o=Ir){let l;const u=Tt.getTransfer(o);if(r===Fi)return n.UNSIGNED_BYTE;if(r===Oh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Bh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===x_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===S_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===__)return n.BYTE;if(r===y_)return n.SHORT;if(r===Ea)return n.UNSIGNED_SHORT;if(r===Fh)return n.INT;if(r===Ss)return n.UNSIGNED_INT;if(r===tr)return n.FLOAT;if(r===Ua)return n.HALF_FLOAT;if(r===M_)return n.ALPHA;if(r===E_)return n.RGB;if(r===Ti)return n.RGBA;if(r===wa)return n.DEPTH_COMPONENT;if(r===Aa)return n.DEPTH_STENCIL;if(r===T_)return n.RED;if(r===kh)return n.RED_INTEGER;if(r===w_)return n.RG;if(r===Vh)return n.RG_INTEGER;if(r===zh)return n.RGBA_INTEGER;if(r===Su||r===Mu||r===Eu||r===Tu)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Su)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Eu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Su)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Eu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===Bd||r===kd||r===Vd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===zd||r===Hd)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Gd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===Kd||r===$d||r===Zd||r===Qd||r===Jd||r===eh||r===th||r===nh||r===ih)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===th)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rh||r===sh||r===oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===rh)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ah||r===lh||r===uh||r===ch)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ah)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ta?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const gC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _C{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new k_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Br({vertexShader:gC,fragmentShader:vC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ui(new Hu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yC extends wo{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,g=null,v=null,x=null,M=null;const T=typeof XRWebGLBinding<"u",S=new _C,y={},D=t.getContextAttributes();let b=null,C=null;const U=[],N=[],B=new At;let z=null;const P=new li;P.viewport=new qt;const R=new li;R.viewport=new qt;const H=[P,R],$=new VE;let se=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=U[J];return ce===void 0&&(ce=new Jf,U[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=U[J];return ce===void 0&&(ce=new Jf,U[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=U[J];return ce===void 0&&(ce=new Jf,U[J]=ce),ce.getHandSpace()};function le(J){const ce=N.indexOf(J.inputSource);if(ce===-1)return;const Se=U[ce];Se!==void 0&&(Se.update(J.inputSource,J.frame,h||u),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function ue(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",re);for(let J=0;J<U.length;J++){const ce=N[J];ce!==null&&(N[J]=null,U[J].disconnect(ce))}se=null,de=null,S.reset();for(const J in y)delete y[J];e.setRenderTarget(b),x=null,v=null,g=null,o=null,C=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",re),D.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(B),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,De=null,Ne=null;D.depth&&(Ne=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=D.stencil?Aa:wa,De=D.stencil?Ta:Ss);const mt={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(mt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Ms(v.textureWidth,v.textureHeight,{format:Ti,type:Fi,depthTexture:new B_(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Ms(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function re(J){for(let ce=0;ce<J.removed.length;ce++){const Se=J.removed[ce],De=N.indexOf(Se);De>=0&&(N[De]=null,U[De].disconnect(Se))}for(let ce=0;ce<J.added.length;ce++){const Se=J.added[ce];let De=N.indexOf(Se);if(De===-1){for(let mt=0;mt<U.length;mt++)if(mt>=N.length){N.push(Se),De=mt;break}else if(N[mt]===null){N[mt]=Se,De=mt;break}if(De===-1)break}const Ne=U[De];Ne&&Ne.connect(Se)}}const k=new Q,oe=new Q;function ne(J,ce,Se){k.setFromMatrixPosition(ce.matrixWorld),oe.setFromMatrixPosition(Se.matrixWorld);const De=k.distanceTo(oe),Ne=ce.projectionMatrix.elements,mt=Se.projectionMatrix.elements,nn=Ne[14]/(Ne[10]-1),O=Ne[14]/(Ne[10]+1),bt=(Ne[9]+1)/Ne[5],ct=(Ne[9]-1)/Ne[5],nt=(Ne[8]-1)/Ne[0],He=(mt[8]+1)/mt[0],It=nn*nt,Ge=nn*He,lt=De/(-nt+He),Ot=lt*-nt;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(lt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ne[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Bt=nn+lt,L=O+lt,w=It-Ot,q=Ge+(De-Ot),fe=bt*O/L*Bt,me=ct*O/L*Bt;J.projectionMatrix.makePerspective(w,q,fe,me,Bt,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function F(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ce=J.near,Se=J.far;S.texture!==null&&(S.depthNear>0&&(ce=S.depthNear),S.depthFar>0&&(Se=S.depthFar)),$.near=R.near=P.near=ce,$.far=R.far=P.far=Se,(se!==$.near||de!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),se=$.near,de=$.far),$.layers.mask=J.layers.mask|6,P.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const De=J.parent,Ne=$.cameras;F($,De);for(let mt=0;mt<Ne.length;mt++)F(Ne[mt],De);Ne.length===2?ne($,P,R):$.projectionMatrix.copy(P.projectionMatrix),ie(J,$,De)};function ie(J,ce,Se){Se===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=fh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(J){return y[J]};let Fe=null;function Xe(J,ce){if(m=ce.getViewerPose(h||u),M=ce,m!==null){const Se=m.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let De=!1;Se.length!==$.cameras.length&&($.cameras.length=0,De=!0);for(let O=0;O<Se.length;O++){const bt=Se[O];let ct=null;if(x!==null)ct=x.getViewport(bt);else{const He=g.getViewSubImage(v,bt);ct=He.viewport,O===0&&(e.setRenderTargetTextures(C,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(C))}let nt=H[O];nt===void 0&&(nt=new li,nt.layers.enable(O),nt.viewport=new qt,H[O]=nt),nt.matrix.fromArray(bt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(bt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(ct.x,ct.y,ct.width,ct.height),O===0&&($.matrix.copy(nt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),De===!0&&$.cameras.push(nt)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const O=g.getDepthInformation(Se[0]);O&&O.isValid&&O.texture&&S.init(O,o.renderState)}if(Ne&&Ne.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let O=0;O<Se.length;O++){const bt=Se[O].camera;if(bt){let ct=y[bt];ct||(ct=new k_,y[bt]=ct);const nt=g.getCameraImage(bt);ct.sourceTexture=nt}}}}for(let Se=0;Se<U.length;Se++){const De=N[Se],Ne=U[Se];De!==null&&Ne!==void 0&&Ne.update(De,ce,h||u)}Fe&&Fe(J,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),M=null}const ze=new H_;ze.setAnimationLoop(Xe),this.setAnimationLoop=function(J){Fe=J},this.dispose=function(){}}}const ls=new Oi,xC=new Qt;function SC(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,N_(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,D,b,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,D,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===zn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===zn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),b=D.envMap,C=D.envMapRotation;b&&(S.envMap.value=b,ls.copy(C),ls.x*=-1,ls.y*=-1,ls.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),S.envMapRotation.value.setFromMatrix4(xC.makeRotationFromEuler(ls)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,D,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===zn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function MC(n,e,t,r){let o={},l={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const C=b.program;r.uniformBlockBinding(D,C)}function h(D,b){let C=o[D.id];C===void 0&&(M(D),C=m(D),o[D.id]=C,D.addEventListener("dispose",S));const U=b.program;r.updateUBOMapping(D,U);const N=e.render.frame;l[D.id]!==N&&(v(D),l[D.id]=N)}function m(D){const b=g();D.__bindingPointIndex=b;const C=n.createBuffer(),U=D.__size,N=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,U,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,C),C}function g(){for(let D=0;D<f;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const b=o[D.id],C=D.uniforms,U=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,B=C.length;N<B;N++){const z=Array.isArray(C[N])?C[N]:[C[N]];for(let P=0,R=z.length;P<R;P++){const H=z[P];if(x(H,N,P,U)===!0){const $=H.__offset,se=Array.isArray(H.value)?H.value:[H.value];let de=0;for(let le=0;le<se.length;le++){const ue=se[le],re=T(ue);typeof ue=="number"||typeof ue=="boolean"?(H.__data[0]=ue,n.bufferSubData(n.UNIFORM_BUFFER,$+de,H.__data)):ue.isMatrix3?(H.__data[0]=ue.elements[0],H.__data[1]=ue.elements[1],H.__data[2]=ue.elements[2],H.__data[3]=0,H.__data[4]=ue.elements[3],H.__data[5]=ue.elements[4],H.__data[6]=ue.elements[5],H.__data[7]=0,H.__data[8]=ue.elements[6],H.__data[9]=ue.elements[7],H.__data[10]=ue.elements[8],H.__data[11]=0):(ue.toArray(H.__data,de),de+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(D,b,C,U){const N=D.value,B=b+"_"+C;if(U[B]===void 0)return typeof N=="number"||typeof N=="boolean"?U[B]=N:U[B]=N.clone(),!0;{const z=U[B];if(typeof N=="number"||typeof N=="boolean"){if(z!==N)return U[B]=N,!0}else if(z.equals(N)===!1)return z.copy(N),!0}return!1}function M(D){const b=D.uniforms;let C=0;const U=16;for(let B=0,z=b.length;B<z;B++){const P=Array.isArray(b[B])?b[B]:[b[B]];for(let R=0,H=P.length;R<H;R++){const $=P[R],se=Array.isArray($.value)?$.value:[$.value];for(let de=0,le=se.length;de<le;de++){const ue=se[de],re=T(ue),k=C%U,oe=k%re.boundary,ne=k+oe;C+=oe,ne!==0&&U-ne<re.storage&&(C+=U-ne),$.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=re.storage}}}const N=C%U;return N>0&&(C+=U-N),D.__size=C,D.__cache={},this}function T(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function S(D){const b=D.target;b.removeEventListener("dispose",S);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const D in o)n.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class EC{constructor(e={}){const{canvas:t=iE(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let U=!1;this._outputColorSpace=ai;let N=0,B=0,z=null,P=-1,R=null;const H=new qt,$=new qt;let se=null;const de=new wt(0);let le=0,ue=t.width,re=t.height,k=1,oe=null,ne=null;const F=new qt(0,0,ue,re),ie=new qt(0,0,ue,re);let Fe=!1;const Xe=new Wh;let ze=!1,J=!1;const ce=new Qt,Se=new Q,De=new qt,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function nn(){return z===null?k:1}let O=r;function bt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",_e,!1),O===null){const j="webgl2";if(O=bt(j,A),O===null)throw bt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ct,nt,He,It,Ge,lt,Ot,Bt,L,w,q,fe,me,ae,Ke,Te,Be,$e,Me,Pe,it,Ye,Ae,ft;function G(){ct=new I1(O),ct.init(),Ye=new mC(O,ct),nt=new A1(O,ct,e,Ye),He=new hC(O,ct),nt.reversedDepthBuffer&&v&&He.buffers.depth.setReversed(!0),It=new F1(O),Ge=new eC,lt=new pC(O,ct,He,Ge,nt,Ye,It),Ot=new R1(C),Bt=new L1(C),L=new HE(O),Ae=new T1(O,L),w=new U1(O,L,It,Ae),q=new B1(O,w,L,It),Me=new O1(O,nt,lt),Te=new C1(Ge),fe=new JA(C,Ot,Bt,ct,nt,Ae,Te),me=new SC(C,Ge),ae=new nC,Ke=new lC(ct),$e=new E1(C,Ot,Bt,He,q,x,d),Be=new fC(C,q,nt),ft=new MC(O,It,nt,He),Pe=new w1(O,ct,It),it=new N1(O,ct,It),It.programs=fe.programs,C.capabilities=nt,C.extensions=ct,C.properties=Ge,C.renderLists=ae,C.shadowMap=Be,C.state=He,C.info=It}G();const ye=new yC(C,O);this.xr=ye,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ct.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ct.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(A){A!==void 0&&(k=A,this.setSize(ue,re,!1))},this.getSize=function(A){return A.set(ue,re)},this.setSize=function(A,j,ee=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=A,re=j,t.width=Math.floor(A*k),t.height=Math.floor(j*k),ee===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ue*k,re*k).floor()},this.setDrawingBufferSize=function(A,j,ee){ue=A,re=j,k=ee,t.width=Math.floor(A*ee),t.height=Math.floor(j*ee),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,j,ee,te){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,j,ee,te),He.viewport(H.copy(F).multiplyScalar(k).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,j,ee,te){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,j,ee,te),He.scissor($.copy(ie).multiplyScalar(k).round())},this.getScissorTest=function(){return Fe},this.setScissorTest=function(A){He.setScissorTest(Fe=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,ee=!0){let te=0;if(A){let X=!1;if(z!==null){const xe=z.texture.format;X=xe===zh||xe===Vh||xe===kh}if(X){const xe=z.texture.type,Ce=xe===Fi||xe===Ss||xe===Ea||xe===Ta||xe===Oh||xe===Bh,ke=$e.getClearColor(),Ie=$e.getClearAlpha(),tt=ke.r,rt=ke.g,Ze=ke.b;Ce?(M[0]=tt,M[1]=rt,M[2]=Ze,M[3]=Ie,O.clearBufferuiv(O.COLOR,0,M)):(T[0]=tt,T[1]=rt,T[2]=Ze,T[3]=Ie,O.clearBufferiv(O.COLOR,0,T))}else te|=O.COLOR_BUFFER_BIT}j&&(te|=O.DEPTH_BUFFER_BIT),ee&&(te|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),$e.dispose(),ae.dispose(),Ke.dispose(),Ge.dispose(),Ot.dispose(),Bt.dispose(),q.dispose(),Ae.dispose(),ft.dispose(),fe.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",gn),ye.removeEventListener("sessionend",Es),Gn.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const A=It.autoReset,j=Be.enabled,ee=Be.autoUpdate,te=Be.needsUpdate,X=Be.type;G(),It.autoReset=A,Be.enabled=j,Be.autoUpdate=ee,Be.needsUpdate=te,Be.type=X}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const j=A.target;j.removeEventListener("dispose",he),We(j)}function We(A){ut(A),Ge.remove(A)}function ut(A){const j=Ge.get(A).programs;j!==void 0&&(j.forEach(function(ee){fe.releaseProgram(ee)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ee,te,X,xe){j===null&&(j=Ne);const Ce=X.isMesh&&X.matrixWorld.determinant()<0,ke=ki(A,j,ee,te,X);He.setMaterial(te,Ce);let Ie=ee.index,tt=1;if(te.wireframe===!0){if(Ie=w.getWireframeAttribute(ee),Ie===void 0)return;tt=2}const rt=ee.drawRange,Ze=ee.attributes.position;let ot=rt.start*tt,Ct=(rt.start+rt.count)*tt;xe!==null&&(ot=Math.max(ot,xe.start*tt),Ct=Math.min(Ct,(xe.start+xe.count)*tt)),Ie!==null?(ot=Math.max(ot,0),Ct=Math.min(Ct,Ie.count)):Ze!=null&&(ot=Math.max(ot,0),Ct=Math.min(Ct,Ze.count));const St=Ct-ot;if(St<0||St===1/0)return;Ae.setup(X,te,ke,ee,Ie);let Ut,Pt=Pe;if(Ie!==null&&(Ut=L.get(Ie),Pt=it,Pt.setIndex(Ut)),X.isMesh)te.wireframe===!0?(He.setLineWidth(te.wireframeLinewidth*nn()),Pt.setMode(O.LINES)):Pt.setMode(O.TRIANGLES);else if(X.isLine){let Qe=te.linewidth;Qe===void 0&&(Qe=1),He.setLineWidth(Qe*nn()),X.isLineSegments?Pt.setMode(O.LINES):X.isLineLoop?Pt.setMode(O.LINE_LOOP):Pt.setMode(O.LINE_STRIP)}else X.isPoints?Pt.setMode(O.POINTS):X.isSprite&&Pt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ca("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Qe=X._multiDrawStarts,Dt=X._multiDrawCounts,vt=X._multiDrawCount,rn=Ie?L.get(Ie).bytesPerElement:1,di=Ge.get(te).currentProgram.getUniforms();for(let Cn=0;Cn<vt;Cn++)di.setValue(O,"_gl_DrawID",Cn),Pt.render(Qe[Cn]/rn,Dt[Cn])}else if(X.isInstancedMesh)Pt.renderInstances(ot,St,X.count);else if(ee.isInstancedBufferGeometry){const Qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Dt=Math.min(ee.instanceCount,Qe);Pt.renderInstances(ot,St,Dt)}else Pt.render(ot,St)};function Rt(A,j,ee){A.transparent===!0&&A.side===er&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,ws(A,j,ee),A.side=Or,A.needsUpdate=!0,ws(A,j,ee),A.side=er):ws(A,j,ee)}this.compile=function(A,j,ee=null){ee===null&&(ee=A),y=Ke.get(ee),y.init(j),b.push(y),ee.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),A!==ee&&A.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(y.pushLight(X),X.castShadow&&y.pushShadow(X))}),y.setupLights();const te=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){const ke=xe[Ce];Rt(ke,ee,X),te.add(ke)}else Rt(xe,ee,X),te.add(xe)}),y=b.pop(),te},this.compileAsync=function(A,j,ee=null){const te=this.compile(A,j,ee);return new Promise(X=>{function xe(){if(te.forEach(function(Ce){Ge.get(Ce).currentProgram.isReady()&&te.delete(Ce)}),te.size===0){X(A);return}setTimeout(xe,10)}ct.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let xt=null;function Zn(A){xt&&xt(A)}function gn(){Gn.stop()}function Es(){Gn.start()}const Gn=new H_;Gn.setAnimationLoop(Zn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(A){xt=A,ye.setAnimationLoop(A),A===null?Gn.stop():Gn.start()},ye.addEventListener("sessionstart",gn),ye.addEventListener("sessionend",Es),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(j),j=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,j,z),y=Ke.get(A,b.length),y.init(j),b.push(y),ce.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Xe.setFromProjectionMatrix(ce,Li,j.reversedDepth),J=this.localClippingEnabled,ze=Te.init(this.clippingPlanes,J),S=ae.get(A,D.length),S.init(),D.push(S),ye.enabled===!0&&ye.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&bo(xe,j,-1/0,C.sortObjects)}bo(A,j,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(oe,ne),mt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,mt&&$e.addToRenderList(S,A),this.info.render.frame++,ze===!0&&Te.beginShadows();const ee=y.state.shadowsArray;Be.render(ee,A,j),ze===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=S.opaque,X=S.transmissive;if(y.setupLights(),j.isArrayCamera){const xe=j.cameras;if(X.length>0)for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const Ie=xe[Ce];Hr(te,X,A,Ie)}mt&&$e.render(A);for(let Ce=0,ke=xe.length;Ce<ke;Ce++){const Ie=xe[Ce];or(S,A,Ie,Ie.viewport)}}else X.length>0&&Hr(te,X,A,j),mt&&$e.render(A),or(S,A,j);z!==null&&B===0&&(lt.updateMultisampleRenderTarget(z),lt.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(C,A,j),Ae.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(y=b[b.length-1],ze===!0&&Te.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,D.pop(),D.length>0?S=D[D.length-1]:S=null};function bo(A,j,ee,te){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){te&&De.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Ce=q.update(A),ke=A.material;ke.visible&&S.push(A,Ce,ke,ee,De.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const Ce=q.update(A),ke=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),De.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),De.copy(Ce.boundingSphere.center)),De.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(ke)){const Ie=Ce.groups;for(let tt=0,rt=Ie.length;tt<rt;tt++){const Ze=Ie[tt],ot=ke[Ze.materialIndex];ot&&ot.visible&&S.push(A,Ce,ot,ee,De.z,Ze)}}else ke.visible&&S.push(A,Ce,ke,ee,De.z,null)}}const xe=A.children;for(let Ce=0,ke=xe.length;Ce<ke;Ce++)bo(xe[Ce],j,ee,te)}function or(A,j,ee,te){const X=A.opaque,xe=A.transmissive,Ce=A.transparent;y.setupLightsView(ee),ze===!0&&Te.setGlobalState(C.clippingPlanes,ee),te&&He.viewport(H.copy(te)),X.length>0&&Bi(X,j,ee),xe.length>0&&Bi(xe,j,ee),Ce.length>0&&Bi(Ce,j,ee),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Hr(A,j,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[te.id]===void 0&&(y.state.transmissionRenderTarget[te.id]=new Ms(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Ua:Fi,minFilter:gs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const xe=y.state.transmissionRenderTarget[te.id],Ce=te.viewport||H;xe.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const ke=C.getRenderTarget(),Ie=C.getActiveCubeFace(),tt=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(de),le=C.getClearAlpha(),le<1&&C.setClearColor(16777215,.5),C.clear(),mt&&$e.render(ee);const rt=C.toneMapping;C.toneMapping=Fr;const Ze=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),y.setupLightsView(te),ze===!0&&Te.setGlobalState(C.clippingPlanes,te),Bi(A,ee,te),lt.updateMultisampleRenderTarget(xe),lt.updateRenderTargetMipmap(xe),ct.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Ct=0,St=j.length;Ct<St;Ct++){const Ut=j[Ct],Pt=Ut.object,Qe=Ut.geometry,Dt=Ut.material,vt=Ut.group;if(Dt.side===er&&Pt.layers.test(te.layers)){const rn=Dt.side;Dt.side=zn,Dt.needsUpdate=!0,Ts(Pt,ee,te,Qe,Dt,vt),Dt.side=rn,Dt.needsUpdate=!0,ot=!0}}ot===!0&&(lt.updateMultisampleRenderTarget(xe),lt.updateRenderTargetMipmap(xe))}C.setRenderTarget(ke,Ie,tt),C.setClearColor(de,le),Ze!==void 0&&(te.viewport=Ze),C.toneMapping=rt}function Bi(A,j,ee){const te=j.isScene===!0?j.overrideMaterial:null;for(let X=0,xe=A.length;X<xe;X++){const Ce=A[X],ke=Ce.object,Ie=Ce.geometry,tt=Ce.group;let rt=Ce.material;rt.allowOverride===!0&&te!==null&&(rt=te),ke.layers.test(ee.layers)&&Ts(ke,j,ee,Ie,rt,tt)}}function Ts(A,j,ee,te,X,xe){A.onBeforeRender(C,j,ee,te,X,xe),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(C,j,ee,te,A,xe),X.transparent===!0&&X.side===er&&X.forceSinglePass===!1?(X.side=zn,X.needsUpdate=!0,C.renderBufferDirect(ee,j,te,X,A,xe),X.side=Or,X.needsUpdate=!0,C.renderBufferDirect(ee,j,te,X,A,xe),X.side=er):C.renderBufferDirect(ee,j,te,X,A,xe),A.onAfterRender(C,j,ee,te,X,xe)}function ws(A,j,ee){j.isScene!==!0&&(j=Ne);const te=Ge.get(A),X=y.state.lights,xe=y.state.shadowsArray,Ce=X.state.version,ke=fe.getParameters(A,X.state,xe,j,ee),Ie=fe.getProgramCacheKey(ke);let tt=te.programs;te.environment=A.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(A.isMeshStandardMaterial?Bt:Ot).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",he),tt=new Map,te.programs=tt);let rt=tt.get(Ie);if(rt!==void 0){if(te.currentProgram===rt&&te.lightsStateVersion===Ce)return Xa(A,ke),rt}else ke.uniforms=fe.getUniforms(A),A.onBeforeCompile(ke,C),rt=fe.acquireProgram(ke,Ie),tt.set(Ie,rt),te.uniforms=ke.uniforms;const Ze=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Te.uniform),Xa(A,ke),te.needsLights=Ya(A),te.lightsStateVersion=Ce,te.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=rt,te.uniformsList=null,rt}function Wa(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=wu.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Xa(A,j){const ee=Ge.get(A);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function ki(A,j,ee,te,X){j.isScene!==!0&&(j=Ne),lt.resetTextureUnits();const xe=j.fog,Ce=te.isMeshStandardMaterial?j.environment:null,ke=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:So,Ie=(te.isMeshStandardMaterial?Bt:Ot).get(te.envMap||Ce),tt=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!ee.morphAttributes.position,ot=!!ee.morphAttributes.normal,Ct=!!ee.morphAttributes.color;let St=Fr;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(St=C.toneMapping);const Ut=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Pt=Ut!==void 0?Ut.length:0,Qe=Ge.get(te),Dt=y.state.lights;if(ze===!0&&(J===!0||A!==R)){const Kt=A===R&&te.id===P;Te.setState(te,A,Kt)}let vt=!1;te.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dt.state.version||Qe.outputColorSpace!==ke||X.isBatchedMesh&&Qe.batching===!1||!X.isBatchedMesh&&Qe.batching===!0||X.isBatchedMesh&&Qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||X.isInstancedMesh&&Qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Qe.instancingMorph===!1&&X.morphTexture!==null||Qe.envMap!==Ie||te.fog===!0&&Qe.fog!==xe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Te.numPlanes||Qe.numIntersection!==Te.numIntersection)||Qe.vertexAlphas!==tt||Qe.vertexTangents!==rt||Qe.morphTargets!==Ze||Qe.morphNormals!==ot||Qe.morphColors!==Ct||Qe.toneMapping!==St||Qe.morphTargetsCount!==Pt)&&(vt=!0):(vt=!0,Qe.__version=te.version);let rn=Qe.currentProgram;vt===!0&&(rn=ws(te,j,X));let di=!1,Cn=!1,Gr=!1;const Nt=rn.getUniforms(),Rn=Qe.uniforms;if(He.useProgram(rn.program)&&(di=!0,Cn=!0,Gr=!0),te.id!==P&&(P=te.id,Cn=!0),di||R!==A){He.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Nt.setValue(O,"projectionMatrix",A.projectionMatrix),Nt.setValue(O,"viewMatrix",A.matrixWorldInverse);const _n=Nt.map.cameraPosition;_n!==void 0&&_n.setValue(O,Se.setFromMatrixPosition(A.matrixWorld)),nt.logarithmicDepthBuffer&&Nt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Nt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Cn=!0,Gr=!0)}if(X.isSkinnedMesh){Nt.setOptional(O,X,"bindMatrix"),Nt.setOptional(O,X,"bindMatrixInverse");const Kt=X.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Nt.setValue(O,"boneTexture",Kt.boneTexture,lt))}X.isBatchedMesh&&(Nt.setOptional(O,X,"batchingTexture"),Nt.setValue(O,"batchingTexture",X._matricesTexture,lt),Nt.setOptional(O,X,"batchingIdTexture"),Nt.setValue(O,"batchingIdTexture",X._indirectTexture,lt),Nt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Nt.setValue(O,"batchingColorTexture",X._colorsTexture,lt));const vn=ee.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Me.update(X,ee,rn),(Cn||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,Nt.setValue(O,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Rn.envMap.value=Ie,Rn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(Rn.envMapIntensity.value=j.environmentIntensity),Cn&&(Nt.setValue(O,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&ja(Rn,Gr),xe&&te.fog===!0&&me.refreshFogUniforms(Rn,xe),me.refreshMaterialUniforms(Rn,te,k,re,y.state.transmissionRenderTarget[A.id]),wu.upload(O,Wa(Qe),Rn,lt)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(wu.upload(O,Wa(Qe),Rn,lt),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Nt.setValue(O,"center",X.center),Nt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Nt.setValue(O,"normalMatrix",X.normalMatrix),Nt.setValue(O,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Kt=te.uniformsGroups;for(let _n=0,Wr=Kt.length;_n<Wr;_n++){const _t=Kt[_n];ft.update(_t,rn),ft.bind(_t,rn)}}return rn}function ja(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ya(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,j,ee){const te=Ge.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Ge.get(A.texture).__webglTexture=j,Ge.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const ee=Ge.get(A);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0};const Yu=O.createFramebuffer();this.setRenderTarget=function(A,j=0,ee=0){z=A,N=j,B=ee;let te=!0,X=null,xe=!1,Ce=!1;if(A){const Ie=Ge.get(A);if(Ie.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(O.FRAMEBUFFER,null),te=!1;else if(Ie.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(Ie.__hasExternalTextures)lt.rebindTextures(A,Ge.get(A.texture).__webglTexture,Ge.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ze=A.depthTexture;if(Ie.__boundDepthTexture!==Ze){if(Ze!==null&&Ge.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Ce=!0);const rt=Ge.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[j])?X=rt[j][ee]:X=rt[j],xe=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?X=Ge.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?X=rt[ee]:X=rt,H.copy(A.viewport),$.copy(A.scissor),se=A.scissorTest}else H.copy(F).multiplyScalar(k).floor(),$.copy(ie).multiplyScalar(k).floor(),se=Fe;if(ee!==0&&(X=Yu),He.bindFramebuffer(O.FRAMEBUFFER,X)&&te&&He.drawBuffers(A,X),He.viewport(H),He.scissor($),He.setScissorTest(se),xe){const Ie=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ee)}else if(Ce){const Ie=j;for(let tt=0;tt<A.textures.length;tt++){const rt=Ge.get(A.textures[tt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+tt,rt.__webglTexture,ee,Ie)}}else if(A!==null&&ee!==0){const Ie=Ge.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,ee)}P=-1},this.readRenderTargetPixels=function(A,j,ee,te,X,xe,Ce,ke=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){He.bindFramebuffer(O.FRAMEBUFFER,Ie);try{const tt=A.textures[ke],rt=tt.format,Ze=tt.type;if(!nt.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-te&&ee>=0&&ee<=A.height-X&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke),O.readPixels(j,ee,te,X,Ye.convert(rt),Ye.convert(Ze),xe))}finally{const tt=z!==null?Ge.get(z).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,j,ee,te,X,xe,Ce,ke=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Ge.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(j>=0&&j<=A.width-te&&ee>=0&&ee<=A.height-X){He.bindFramebuffer(O.FRAMEBUFFER,Ie);const tt=A.textures[ke],rt=tt.format,Ze=tt.type;if(!nt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.bufferData(O.PIXEL_PACK_BUFFER,xe.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke),O.readPixels(j,ee,te,X,Ye.convert(rt),Ye.convert(Ze),0);const Ct=z!==null?Ge.get(z).__webglFramebuffer:null;He.bindFramebuffer(O.FRAMEBUFFER,Ct);const St=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await rE(O,St,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ot),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,xe),O.deleteBuffer(ot),O.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,ee=0){const te=Math.pow(2,-ee),X=Math.floor(A.image.width*te),xe=Math.floor(A.image.height*te),Ce=j!==null?j.x:0,ke=j!==null?j.y:0;lt.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ee,0,0,Ce,ke,X,xe),He.unbindTexture()};const qa=O.createFramebuffer(),Ka=O.createFramebuffer();this.copyTextureToTexture=function(A,j,ee=null,te=null,X=0,xe=null){xe===null&&(X!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=X,X=0):xe=0);let Ce,ke,Ie,tt,rt,Ze,ot,Ct,St;const Ut=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(ee!==null)Ce=ee.max.x-ee.min.x,ke=ee.max.y-ee.min.y,Ie=ee.isBox3?ee.max.z-ee.min.z:1,tt=ee.min.x,rt=ee.min.y,Ze=ee.isBox3?ee.min.z:0;else{const vn=Math.pow(2,-X);Ce=Math.floor(Ut.width*vn),ke=Math.floor(Ut.height*vn),A.isDataArrayTexture?Ie=Ut.depth:A.isData3DTexture?Ie=Math.floor(Ut.depth*vn):Ie=1,tt=0,rt=0,Ze=0}te!==null?(ot=te.x,Ct=te.y,St=te.z):(ot=0,Ct=0,St=0);const Pt=Ye.convert(j.format),Qe=Ye.convert(j.type);let Dt;j.isData3DTexture?(lt.setTexture3D(j,0),Dt=O.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(lt.setTexture2DArray(j,0),Dt=O.TEXTURE_2D_ARRAY):(lt.setTexture2D(j,0),Dt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,j.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,j.unpackAlignment);const vt=O.getParameter(O.UNPACK_ROW_LENGTH),rn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),di=O.getParameter(O.UNPACK_SKIP_PIXELS),Cn=O.getParameter(O.UNPACK_SKIP_ROWS),Gr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,tt),O.pixelStorei(O.UNPACK_SKIP_ROWS,rt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ze);const Nt=A.isDataArrayTexture||A.isData3DTexture,Rn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const vn=Ge.get(A),Kt=Ge.get(j),_n=Ge.get(vn.__renderTarget),Wr=Ge.get(Kt.__renderTarget);He.bindFramebuffer(O.READ_FRAMEBUFFER,_n.__webglFramebuffer),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wr.__webglFramebuffer);for(let _t=0;_t<Ie;_t++)Nt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(A).__webglTexture,X,Ze+_t),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ge.get(j).__webglTexture,xe,St+_t)),O.blitFramebuffer(tt,rt,Ce,ke,ot,Ct,Ce,ke,O.DEPTH_BUFFER_BIT,O.NEAREST);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||Ge.has(A)){const vn=Ge.get(A),Kt=Ge.get(j);He.bindFramebuffer(O.READ_FRAMEBUFFER,qa),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ka);for(let _n=0;_n<Ie;_n++)Nt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vn.__webglTexture,X,Ze+_n):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vn.__webglTexture,X),Rn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Kt.__webglTexture,xe,St+_n):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Kt.__webglTexture,xe),X!==0?O.blitFramebuffer(tt,rt,Ce,ke,ot,Ct,Ce,ke,O.COLOR_BUFFER_BIT,O.NEAREST):Rn?O.copyTexSubImage3D(Dt,xe,ot,Ct,St+_n,tt,rt,Ce,ke):O.copyTexSubImage2D(Dt,xe,ot,Ct,tt,rt,Ce,ke);He.bindFramebuffer(O.READ_FRAMEBUFFER,null),He.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Rn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Dt,xe,ot,Ct,St,Ce,ke,Ie,Pt,Qe,Ut.data):j.isCompressedArrayTexture?O.compressedTexSubImage3D(Dt,xe,ot,Ct,St,Ce,ke,Ie,Pt,Ut.data):O.texSubImage3D(Dt,xe,ot,Ct,St,Ce,ke,Ie,Pt,Qe,Ut):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,xe,ot,Ct,Ce,ke,Pt,Qe,Ut.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,xe,ot,Ct,Ut.width,Ut.height,Pt,Ut.data):O.texSubImage2D(O.TEXTURE_2D,xe,ot,Ct,Ce,ke,Pt,Qe,Ut);O.pixelStorei(O.UNPACK_ROW_LENGTH,vt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,di),O.pixelStorei(O.UNPACK_SKIP_ROWS,Cn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Gr),xe===0&&j.generateMipmaps&&O.generateMipmap(Dt),He.unbindTexture()},this.initRenderTarget=function(A){Ge.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),He.unbindTexture()},this.resetState=function(){N=0,B=0,z=null,He.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function TC(){const n=dt.useRef(null);return dt.useEffect(()=>{const e=n.current;if(!e)return;const t=e.clientWidth||window.innerWidth,r=520,o=new bE,l=new li(45,t/r,.1,1e3);l.position.z=10;const u=new EC({antialias:!0,alpha:!0});u.setSize(t,r),e.appendChild(u.domElement);const f=new BE(16777215,1);f.position.set(5,5,5),o.add(f);const d=new kE(16777215,.3);o.add(d);const h=new ma;for(let y=0;y<25;y++){const D=new ui(new Iu(Math.random()*.25+.08,16,16),new td({color:new wt(`hsl(${Math.random()*40+20}, 80%, 65%)`),transparent:!0,opacity:.9}));D.position.set((Math.random()-.5)*12,(Math.random()-.5)*4,(Math.random()-.5)*6),h.add(D)}o.add(h);const m=new ui(new Xh(2.2,.06,16,100),new td({color:"#FFD166"}));m.rotation.x=Math.PI/2,m.position.y=-.5,o.add(m);const g=[];for(let y=0;y<50;y++){const D=new ui(new Iu(.02,8,8),new td({color:16777215,transparent:!0,opacity:.3}));D.position.set((Math.random()-.5)*20,(Math.random()-.5)*10,(Math.random()-.5)*15),o.add(D),g.push(D)}let v=0,x=0;const M=y=>{v=(y.clientX/window.innerWidth-.5)*2,x=(y.clientY/window.innerHeight-.5)*2};document.addEventListener("mousemove",M);const T=()=>{h.children.forEach((y,D)=>{y.position.y+=Math.sin(Date.now()*3e-4+D)*.001,y.rotation.y+=.002}),m.rotation.z+=.002,h.rotation.y+=.002+v*.01,h.rotation.x+=x*.01,g.forEach((y,D)=>{y.position.y+=Math.sin(Date.now()*1e-4+D)*5e-4}),u.render(o,l),requestAnimationFrame(T)};T();const S=()=>{const y=e.clientWidth||window.innerWidth;u.setSize(y,r),l.aspect=y/r,l.updateProjectionMatrix()};return window.addEventListener("resize",S),()=>{window.removeEventListener("resize",S),document.removeEventListener("mousemove",M),e.removeChild(u.domElement)}},[]),be.jsxs("header",{id:"home",className:"relative w-full overflow-hidden",children:[be.jsx("div",{ref:n,className:"w-full h-[520px]",style:{background:"linear-gradient(135deg, #FFD166 0%, #FF8AB3 100%)"}}),be.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:[be.jsx("img",{src:p_,alt:"Shubh Avsar Logo",className:"w-32 md:w-40 mb-4"}),be.jsx("h1",{className:"text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-yellow-400 text-center",children:"Shubh Avsar Events"}),be.jsx("p",{className:"mt-2 md:mt-3 text-lg md:text-xl text-white/90 text-center",children:"Where moments become lifetime memories"})]})]})}function wC(){return be.jsxs("section",{id:"services",className:"w-full py-20 px-6 md:px-20 bg-gradient-to-r from-pink-100 via-yellow-50 to-yellow-200 text-center",children:[be.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6 text-pink-600",children:"Our Services"}),be.jsx("p",{className:"text-lg md:text-xl mb-8 text-gray-700",children:"We create lifetime memories with premium event planning."}),be.jsx("button",{className:"px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-pink-600 transition-all duration-500",children:"Book Now"})]})}function AC(){return be.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-12",id:"portfolio",children:[be.jsx("h2",{className:"text-3xl font-bold text-center mb-6",children:"Our Portfolio"}),be.jsx("p",{className:"text-center text-gray-600 mb-10",children:"A glimpse of our past events, designs, and celebrations."}),be.jsxs("div",{className:"grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10",children:[be.jsx("img",{src:"/images/portfolio1.jpg",alt:"Event 1",className:"rounded-lg shadow hover:scale-105 transition"}),be.jsx("img",{src:"/images/portfolio2.jpg",alt:"Event 2",className:"rounded-lg shadow hover:scale-105 transition"}),be.jsx("img",{src:"/images/portfolio3.jpg",alt:"Event 3",className:"rounded-lg shadow hover:scale-105 transition"}),be.jsx("img",{src:"/images/portfolio4.jpg",alt:"Event 4",className:"rounded-lg shadow hover:scale-105 transition"}),be.jsx("img",{src:"/images/portfolio5.jpg",alt:"Event 5",className:"rounded-lg shadow hover:scale-105 transition"}),be.jsx("img",{src:"/images/portfolio6.jpg",alt:"Event 6",className:"rounded-lg shadow hover:scale-105 transition"})]}),be.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[be.jsx("div",{className:"aspect-video rounded-lg shadow overflow-hidden",children:be.jsx("iframe",{src:"https://www.instagram.com/reel/DOk_eoCjQKo/embed?autoplay=1&mute=1",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",allowTransparency:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",title:"Portfolio Reel 1"})}),be.jsx("div",{className:"aspect-video rounded-lg shadow overflow-hidden",children:be.jsx("iframe",{src:"https://www.instagram.com/reel/DKemkAvz7zF/embed?autoplay=1&mute=1",width:"100%",height:"100%",frameBorder:"0",scrolling:"no",allowTransparency:!0,allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",title:"Portfolio Reel 2"})})]})]})}function CC(){return be.jsxs("section",{id:"contact",className:"w-full py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 via-yellow-100 to-yellow-200 text-center",children:[be.jsx("h2",{className:"text-3xl md:text-5xl font-bold mb-6 text-pink-600",children:"Contact Us"}),be.jsx("p",{className:"text-lg md:text-xl mb-8 text-gray-700",children:"Reach out to plan your dream event with us."}),be.jsx("button",{className:"px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-pink-600 transition-all duration-500",children:"Get In Touch"})]})}function RC(){return be.jsx("footer",{className:"w-full py-6 mt-10 bg-gradient-to-r from-pink-600 via-yellow-400 to-yellow-300 text-white text-center",children:"© 2025 Shubh Avsar Events. All Rights Reserved."})}var Y_={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jv=Ur.createContext&&Ur.createContext(Y_),PC=["attr","size","title"];function bC(n,e){if(n==null)return{};var t=DC(n,e),r,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)r=l[o],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function DC(n,e){if(n==null)return{};var t={};for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r)){if(e.indexOf(r)>=0)continue;t[r]=n[r]}return t}function Uu(){return Uu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Uu.apply(this,arguments)}function e0(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Nu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?e0(Object(t),!0).forEach(function(r){LC(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):e0(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function LC(n,e,t){return e=IC(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function IC(n){var e=UC(n,"string");return typeof e=="symbol"?e:e+""}function UC(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function q_(n){return n&&n.map((e,t)=>Ur.createElement(e.tag,Nu({key:t},e.attr),q_(e.child)))}function NC(n){return e=>Ur.createElement(FC,Uu({attr:Nu({},n.attr)},e),q_(n.child))}function FC(n){var e=t=>{var{attr:r,size:o,title:l}=n,u=bC(n,PC),f=o||t.size||"1em",d;return t.className&&(d=t.className),n.className&&(d=(d?d+" ":"")+n.className),Ur.createElement("svg",Uu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,u,{className:d,style:Nu(Nu({color:n.color||t.color},t.style),n.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Ur.createElement("title",null,l),n.children)};return Jv!==void 0?Ur.createElement(Jv.Consumer,null,t=>e(t)):e(Y_)}function OC(n){return NC({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(n)}function BC(){return be.jsx("a",{href:"https://wa.me/6352332437",className:`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg \r
                 animate-bounce hover:bg-green-600 transition duration-300`,target:"_blank",rel:"noopener noreferrer",children:be.jsx(OC,{size:36})})}const K_=dt.createContext({});function kC(n){const e=dt.useRef(null);return e.current===null&&(e.current=n()),e.current}const Yh=typeof window<"u",VC=Yh?dt.useLayoutEffect:dt.useEffect,qh=dt.createContext(null);function Kh(n,e){n.indexOf(e)===-1&&n.push(e)}function $h(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const ir=(n,e,t)=>t>e?e:t<n?n:t;let Zh=()=>{};const rr={},$_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Z_(n){return typeof n=="object"&&n!==null}const Q_=n=>/^0[^.\s]+$/u.test(n);function Qh(n){let e;return()=>(e===void 0&&(e=n()),e)}const fi=n=>n,zC=(n,e)=>t=>e(n(t)),Va=(...n)=>n.reduce(zC),Ra=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Jh{constructor(){this.subscriptions=[]}add(e){return Kh(this.subscriptions,e),()=>$h(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ui=n=>n*1e3,ci=n=>n/1e3;function J_(n,e){return e?n*(1e3/e):0}const ey=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,HC=1e-7,GC=12;function WC(n,e,t,r,o){let l,u,f=0;do u=e+(t-e)/2,l=ey(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>HC&&++f<GC);return u}function za(n,e,t,r){if(n===e&&t===r)return fi;const o=l=>WC(l,0,1,n,t);return l=>l===0||l===1?l:ey(o(l),e,r)}const ty=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,ny=n=>e=>1-n(1-e),iy=za(.33,1.53,.69,.99),ep=ny(iy),ry=ty(ep),sy=n=>(n*=2)<1?.5*ep(n):.5*(2-Math.pow(2,-10*(n-1))),tp=n=>1-Math.sin(Math.acos(n)),oy=ny(tp),ay=ty(tp),XC=za(.42,0,1,1),jC=za(0,0,.58,1),ly=za(.42,0,.58,1),YC=n=>Array.isArray(n)&&typeof n[0]!="number",uy=n=>Array.isArray(n)&&typeof n[0]=="number",qC={linear:fi,easeIn:XC,easeInOut:ly,easeOut:jC,circIn:tp,circInOut:ay,circOut:oy,backIn:ep,backInOut:ry,backOut:iy,anticipate:sy},KC=n=>typeof n=="string",t0=n=>{if(uy(n)){Zh(n.length===4);const[e,t,r,o]=n;return za(e,t,r,o)}else if(KC(n))return qC[n];return n},_u=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function $C(n,e){let t=new Set,r=new Set,o=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(m){u.has(m)&&(h.schedule(m),n()),m(f)}const h={schedule:(m,g=!1,v=!1)=>{const M=v&&o?t:r;return g&&u.add(m),M.has(m)||M.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(f=m,o){l=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,l&&(l=!1,h.process(m))}};return h}const ZC=40;function cy(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=_u.reduce((b,C)=>(b[C]=$C(l),b),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:m,update:g,preRender:v,render:x,postRender:M}=u,T=()=>{const b=rr.useManualTiming?o.timestamp:performance.now();t=!1,rr.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(b-o.timestamp,ZC),1)),o.timestamp=b,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),m.process(o),g.process(o),v.process(o),x.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},S=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:_u.reduce((b,C)=>{const U=u[C];return b[C]=(N,B=!1,z=!1)=>(t||S(),U.schedule(N,B,z)),b},{}),cancel:b=>{for(let C=0;C<_u.length;C++)u[_u[C]].cancel(b)},state:o,steps:u}}const{schedule:Ht,cancel:kr,state:mn,steps:ud}=cy(typeof requestAnimationFrame<"u"?requestAnimationFrame:fi,!0);let Au;function QC(){Au=void 0}const Vn={now:()=>(Au===void 0&&Vn.set(mn.isProcessing||rr.useManualTiming?mn.timestamp:performance.now()),Au),set:n=>{Au=n,queueMicrotask(QC)}},fy=n=>e=>typeof e=="string"&&e.startsWith(n),np=fy("--"),JC=fy("var(--"),ip=n=>JC(n)?eR.test(n.split("/*")[0].trim()):!1,eR=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Co={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Pa={...Co,transform:n=>ir(0,1,n)},yu={...Co,default:1},_a=n=>Math.round(n*1e5)/1e5,rp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function tR(n){return n==null}const nR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,sp=(n,e)=>t=>!!(typeof t=="string"&&nR.test(t)&&t.startsWith(n)||e&&!tR(t)&&Object.prototype.hasOwnProperty.call(t,e)),dy=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,f]=r.match(rp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},iR=n=>ir(0,255,n),cd={...Co,transform:n=>Math.round(iR(n))},vs={test:sp("rgb","red"),parse:dy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+cd.transform(n)+", "+cd.transform(e)+", "+cd.transform(t)+", "+_a(Pa.transform(r))+")"};function rR(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const hh={test:sp("#"),parse:rR,transform:vs.transform},Ha=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Lr=Ha("deg"),Ni=Ha("%"),st=Ha("px"),sR=Ha("vh"),oR=Ha("vw"),n0={...Ni,parse:n=>Ni.parse(n)/100,transform:n=>Ni.transform(n*100)},uo={test:sp("hsl","hue"),parse:dy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ni.transform(_a(e))+", "+Ni.transform(_a(t))+", "+_a(Pa.transform(r))+")"},tn={test:n=>vs.test(n)||hh.test(n)||uo.test(n),parse:n=>vs.test(n)?vs.parse(n):uo.test(n)?uo.parse(n):hh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?vs.transform(n):uo.transform(n),getAnimatableNone:n=>{const e=tn.parse(n);return e.alpha=0,tn.transform(e)}},aR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function lR(n){return isNaN(n)&&typeof n=="string"&&(n.match(rp)?.length||0)+(n.match(aR)?.length||0)>0}const hy="number",py="color",uR="var",cR="var(",i0="${}",fR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ba(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const f=e.replace(fR,d=>(tn.test(d)?(r.color.push(l),o.push(py),t.push(tn.parse(d))):d.startsWith(cR)?(r.var.push(l),o.push(uR),t.push(d)):(r.number.push(l),o.push(hy),t.push(parseFloat(d))),++l,i0)).split(i0);return{values:t,split:f,indexes:r,types:o}}function my(n){return ba(n).values}function gy(n){const{split:e,types:t}=ba(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const f=t[u];f===hy?l+=_a(o[u]):f===py?l+=tn.transform(o[u]):l+=o[u]}return l}}const dR=n=>typeof n=="number"?0:tn.test(n)?tn.getAnimatableNone(n):n;function hR(n){const e=my(n);return gy(n)(e.map(dR))}const Vr={test:lR,parse:my,createTransformer:gy,getAnimatableNone:hR};function fd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function pR({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=fd(d,f,n+1/3),l=fd(d,f,n),u=fd(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Fu(n,e){return t=>t>0?e:n}const Xt=(n,e,t)=>n+(e-n)*t,dd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},mR=[hh,vs,uo],gR=n=>mR.find(e=>e.test(n));function r0(n){const e=gR(n);if(!e)return!1;let t=e.parse(n);return e===uo&&(t=pR(t)),t}const s0=(n,e)=>{const t=r0(n),r=r0(e);if(!t||!r)return Fu(n,e);const o={...t};return l=>(o.red=dd(t.red,r.red,l),o.green=dd(t.green,r.green,l),o.blue=dd(t.blue,r.blue,l),o.alpha=Xt(t.alpha,r.alpha,l),vs.transform(o))},ph=new Set(["none","hidden"]);function vR(n,e){return ph.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function _R(n,e){return t=>Xt(n,e,t)}function op(n){return typeof n=="number"?_R:typeof n=="string"?ip(n)?Fu:tn.test(n)?s0:SR:Array.isArray(n)?vy:typeof n=="object"?tn.test(n)?s0:yR:Fu}function vy(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>op(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function yR(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=op(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function xR(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const l=e.types[o],u=n.indexes[l][r[l]],f=n.values[u]??0;t[o]=f,r[l]++}return t}const SR=(n,e)=>{const t=Vr.createTransformer(e),r=ba(n),o=ba(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?ph.has(n)&&!o.values.length||ph.has(e)&&!r.values.length?vR(n,e):Va(vy(xR(r,o),o.values),t):Fu(n,e)};function _y(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Xt(n,e,t):op(n)(n,e)}const MR=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ht.update(e,t),stop:()=>kr(e),now:()=>mn.isProcessing?mn.timestamp:Vn.now()}},yy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=Math.round(n(l/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Ou=2e4;function ap(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Ou;)e+=t,r=n.next(e);return e>=Ou?1/0:e}function ER(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(ap(r),Ou);return{type:"keyframes",ease:l=>r.next(o*l).value/e,duration:ci(o)}}const TR=5;function xy(n,e,t){const r=Math.max(e-TR,0);return J_(t-n(r),e-r)}const Yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},hd=.001;function wR({duration:n=Yt.duration,bounce:e=Yt.bounce,velocity:t=Yt.velocity,mass:r=Yt.mass}){let o,l,u=1-e;u=ir(Yt.minDamping,Yt.maxDamping,u),n=ir(Yt.minDuration,Yt.maxDuration,ci(n)),u<1?(o=h=>{const m=h*u,g=m*n,v=m-t,x=mh(h,u),M=Math.exp(-g);return hd-v/x*M},l=h=>{const g=h*u*n,v=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),T=mh(Math.pow(h,2),u);return(-o(h)+hd>0?-1:1)*((v-x)*M)/T}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-hd+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const f=5/n,d=CR(o,l,f);if(n=Ui(n),isNaN(d))return{stiffness:Yt.stiffness,damping:Yt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const AR=12;function CR(n,e,t){let r=t;for(let o=1;o<AR;o++)r=r-n(r)/e(r);return r}function mh(n,e){return n*Math.sqrt(1-e*e)}const RR=["duration","bounce"],PR=["stiffness","damping","mass"];function o0(n,e){return e.some(t=>n[t]!==void 0)}function bR(n){let e={velocity:Yt.velocity,stiffness:Yt.stiffness,damping:Yt.damping,mass:Yt.mass,isResolvedFromDuration:!1,...n};if(!o0(n,PR)&&o0(n,RR))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*ir(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Yt.mass,stiffness:o,damping:l}}else{const t=wR(n);e={...e,...t,mass:Yt.mass},e.isResolvedFromDuration=!0}return e}function Bu(n=Yt.visualDuration,e=Yt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:v,isResolvedFromDuration:x}=bR({...t,velocity:-ci(t.velocity||0)}),M=v||0,T=h/(2*Math.sqrt(d*m)),S=u-l,y=ci(Math.sqrt(d/m)),D=Math.abs(S)<5;r||(r=D?Yt.restSpeed.granular:Yt.restSpeed.default),o||(o=D?Yt.restDelta.granular:Yt.restDelta.default);let b;if(T<1){const U=mh(y,T);b=N=>{const B=Math.exp(-T*y*N);return u-B*((M+T*y*S)/U*Math.sin(U*N)+S*Math.cos(U*N))}}else if(T===1)b=U=>u-Math.exp(-y*U)*(S+(M+y*S)*U);else{const U=y*Math.sqrt(T*T-1);b=N=>{const B=Math.exp(-T*y*N),z=Math.min(U*N,300);return u-B*((M+T*y*S)*Math.sinh(z)+U*S*Math.cosh(z))/U}}const C={calculatedDuration:x&&g||null,next:U=>{const N=b(U);if(x)f.done=U>=g;else{let B=U===0?M:0;T<1&&(B=U===0?Ui(M):xy(b,U,N));const z=Math.abs(B)<=r,P=Math.abs(u-N)<=o;f.done=z&&P}return f.value=f.done?u:N,f},toString:()=>{const U=Math.min(ap(C),Ou),N=yy(B=>C.next(U*B).value,U,30);return U+"ms "+N},toTransition:()=>{}};return C}Bu.applyToOptions=n=>{const e=ER(n,100,Bu);return n.ease=e.ease,n.duration=Ui(e.duration),n.type="keyframes",n};function gh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],v={done:!1,value:g},x=z=>f!==void 0&&z<f||d!==void 0&&z>d,M=z=>f===void 0?d:d===void 0||Math.abs(f-z)<Math.abs(d-z)?f:d;let T=t*e;const S=g+T,y=u===void 0?S:u(S);y!==S&&(T=y-g);const D=z=>-T*Math.exp(-z/r),b=z=>y+D(z),C=z=>{const P=D(z),R=b(z);v.done=Math.abs(P)<=h,v.value=v.done?y:R};let U,N;const B=z=>{x(v.value)&&(U=z,N=Bu({keyframes:[v.value,M(v.value)],velocity:xy(b,z,v.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return B(0),{calculatedDuration:null,next:z=>{let P=!1;return!N&&U===void 0&&(P=!0,C(z),B(z)),U!==void 0&&z>=U?N.next(z-U):(!P&&C(z),v)}}}function DR(n,e,t){const r=[],o=t||rr.mix||_y,l=n.length-1;for(let u=0;u<l;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||fi:e;f=Va(d,f)}r.push(f)}return r}function LR(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(Zh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=DR(e,r,o),d=f.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const v=Ra(n[g],n[g+1],m);return f[g](v)};return t?m=>h(ir(n[0],n[l-1],m)):h}function IR(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ra(0,e,r);n.push(Xt(t,1,o))}}function UR(n){const e=[0];return IR(e,n.length-1),e}function NR(n,e){return n.map(t=>t*e)}function FR(n,e){return n.map(()=>e||ly).splice(0,n.length-1)}function ya({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=YC(r)?r.map(t0):t0(r),l={done:!1,value:e[0]},u=NR(t&&t.length===e.length?t:UR(e),n),f=LR(u,e,{ease:Array.isArray(o)?o:FR(e,o)});return{calculatedDuration:n,next:d=>(l.value=f(d),l.done=d>=n,l)}}const OR=n=>n!==null;function lp(n,{repeat:e,repeatType:t="loop"},r,o=1){const l=n.filter(OR),f=o<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!f||r===void 0?l[f]:r}const BR={decay:gh,inertia:gh,tween:ya,keyframes:ya,spring:Bu};function Sy(n){typeof n.type=="string"&&(n.type=BR[n.type])}class up{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const kR=n=>n/100;class cp extends up{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Vn.now()&&this.tick(Vn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Sy(e);const{type:t=ya,repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=e;let{keyframes:f}=e;const d=t||ya;d!==ya&&typeof f[0]!="number"&&(this.mixKeyframes=Va(kR,_y(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-u})),h.calculatedDuration===null&&(h.calculatedDuration=ap(h));const{calculatedDuration:m}=h;this.calculatedDuration=m,this.resolvedDuration=m+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:l,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:m,repeat:g,repeatType:v,repeatDelay:x,type:M,onUpdate:T,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,C=r;if(g){const z=Math.min(this.currentTime,o)/f;let P=Math.floor(z),R=z%1;!R&&z>=1&&(R=1),R===1&&P--,P=Math.min(P,g+1),!!(P%2)&&(v==="reverse"?(R=1-R,x&&(R-=x/f)):v==="mirror"&&(C=u)),b=ir(0,1,R)*f}const U=D?{done:!1,value:m[0]}:C.next(b);l&&(U.value=l(U.value));let{done:N}=U;!D&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const B=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return B&&M!==gh&&(U.value=lp(m,this.options,S,this.speed)),T&&T(U.value),B&&this.finish(),U}then(e,t){return this.finished.then(e,t)}get duration(){return ci(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ci(e)}get time(){return ci(this.currentTime)}set time(e){e=Ui(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Vn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ci(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=MR,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function VR(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const _s=n=>n*180/Math.PI,vh=n=>{const e=_s(Math.atan2(n[1],n[0]));return _h(e)},zR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:vh,rotateZ:vh,skewX:n=>_s(Math.atan(n[1])),skewY:n=>_s(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},_h=n=>(n=n%360,n<0&&(n+=360),n),a0=vh,l0=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),u0=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),HR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:l0,scaleY:u0,scale:n=>(l0(n)+u0(n))/2,rotateX:n=>_h(_s(Math.atan2(n[6],n[5]))),rotateY:n=>_h(_s(Math.atan2(-n[2],n[0]))),rotateZ:a0,rotate:a0,skewX:n=>_s(Math.atan(n[4])),skewY:n=>_s(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function yh(n){return n.includes("scale")?1:0}function xh(n,e){if(!n||n==="none")return yh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=HR,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=zR,o=f}if(!o)return yh(e);const l=r[e],u=o[1].split(",").map(WR);return typeof l=="function"?l(u):u[l]}const GR=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return xh(t,e)};function WR(n){return parseFloat(n.trim())}const Ro=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Po=new Set(Ro),c0=n=>n===Co||n===st,XR=new Set(["x","y","z"]),jR=Ro.filter(n=>!XR.has(n));function YR(n){const e=[];return jR.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const ys={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>xh(e,"x"),y:(n,{transform:e})=>xh(e,"y")};ys.translateX=ys.x;ys.translateY=ys.y;const xs=new Set;let Sh=!1,Mh=!1,Eh=!1;function My(){if(Mh){const n=Array.from(xs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=YR(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{r.getValue(l)?.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Mh=!1,Sh=!1,xs.forEach(n=>n.complete(Eh)),xs.clear()}function Ey(){xs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Mh=!0)})}function qR(){Eh=!0,Ey(),My(),Eh=!1}class fp{constructor(e,t,r,o,l,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(xs.add(this),Sh||(Sh=!0,Ht.read(Ey),Ht.resolveKeyframes(My))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const l=o?.get(),u=e[e.length-1];if(l!==void 0)e[0]=l;else if(r&&t){const f=r.readValue(t,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&l===void 0&&o.set(e[0])}VR(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),xs.delete(this)}cancel(){this.state==="scheduled"&&(xs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const KR=n=>n.startsWith("--");function $R(n,e,t){KR(e)?n.style.setProperty(e,t):n.style[e]=t}const ZR=Qh(()=>window.ScrollTimeline!==void 0),QR={};function JR(n,e){const t=Qh(n);return()=>QR[e]??t()}const Ty=JR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),va=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,f0={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:va([0,.65,.55,1]),circOut:va([.55,0,1,.45]),backIn:va([.31,.01,.66,-.59]),backOut:va([.33,1.53,.69,.99])};function wy(n,e){if(n)return typeof n=="function"?Ty()?yy(n,e):"ease-out":uy(n)?va(n):Array.isArray(n)?n.map(t=>wy(t,e)||f0.easeOut):f0[n]}function eP(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:f="easeOut",times:d}={},h=void 0){const m={[e]:t};d&&(m.offset=d);const g=wy(f,o);Array.isArray(g)&&(m.easing=g);const v={delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"};return h&&(v.pseudoElement=h),n.animate(m,v)}function Ay(n){return typeof n=="function"&&"applyToOptions"in n}function tP({type:n,...e}){return Ay(n)&&Ty()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class nP extends up{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:l,allowFlatten:u=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!l,this.allowFlatten=u,this.options=e,Zh(typeof e.type!="string");const h=tP(e);this.animation=eP(t,r,o,h,l),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!l){const m=lp(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(m):$R(t,r,m),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return ci(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+ci(e)}get time(){return ci(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Ui(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&ZR()?(this.animation.timeline=e,fi):t(this)}}const Cy={anticipate:sy,backInOut:ry,circInOut:ay};function iP(n){return n in Cy}function rP(n){typeof n.ease=="string"&&iP(n.ease)&&(n.ease=Cy[n.ease])}const d0=10;class sP extends nP{constructor(e){rP(e),Sy(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:l,...u}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new cp({...u,autoplay:!1}),d=Ui(this.finishedTime??this.time);t.setWithVelocity(f.sample(d-d0).value,f.sample(d).value,d0),f.stop()}}const h0=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Vr.test(n)||n==="0")&&!n.startsWith("url("));function oP(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function aP(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=h0(o,e),f=h0(l,e);return!u||!f?!1:oP(n)||(t==="spring"||Ay(t))&&r}function Th(n){n.duration=0,n.type="keyframes"}const lP=new Set(["opacity","clipPath","filter","transform"]),uP=Qh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function cP(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:l,type:u}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return uP()&&t&&lP.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&l!==0&&u!=="inertia"}const fP=40;class dP extends up{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",keyframes:f,name:d,motionValue:h,element:m,...g}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Vn.now();const v={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,name:d,motionValue:h,element:m,...g},x=m?.KeyframeResolver||fp;this.keyframeResolver=new x(f,(M,T,S)=>this.onKeyframesResolved(M,T,v,!S),d,h,m),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:l,type:u,velocity:f,delay:d,isHandoff:h,onUpdate:m}=r;this.resolvedAt=Vn.now(),aP(e,l,u,f)||((rr.instantAnimations||!d)&&m?.(lp(e,r,t)),e[0]=e[e.length-1],Th(r),r.repeat=0);const v={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>fP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},x=!h&&cP(v)?new sP({...v,element:v.motionValue.owner.current}):new cp(v);x.finished.then(()=>this.notifyFinished()).catch(fi),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),qR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}const hP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pP(n){const e=hP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Ry(n,e,t=1){const[r,o]=pP(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return $_(u)?parseFloat(u):u}return ip(o)?Ry(o,e,t+1):o}function dp(n,e){return n?.[e]??n?.default??n}const Py=new Set(["width","height","top","left","right","bottom",...Ro]),mP={test:n=>n==="auto",parse:n=>n},by=n=>e=>e.test(n),Dy=[Co,st,Ni,Lr,oR,sR,mP],p0=n=>Dy.find(by(n));function gP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Q_(n):!0}const vP=new Set(["brightness","contrast","saturate","opacity"]);function _P(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(rp)||[];if(!r)return n;const o=t.replace(r,"");let l=vP.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const yP=/\b([a-z-]*)\(.*?\)/gu,wh={...Vr,getAnimatableNone:n=>{const e=n.match(yP);return e?e.map(_P).join(" "):n}},m0={...Co,transform:Math.round},xP={rotate:Lr,rotateX:Lr,rotateY:Lr,rotateZ:Lr,scale:yu,scaleX:yu,scaleY:yu,scaleZ:yu,skew:Lr,skewX:Lr,skewY:Lr,distance:st,translateX:st,translateY:st,translateZ:st,x:st,y:st,z:st,perspective:st,transformPerspective:st,opacity:Pa,originX:n0,originY:n0,originZ:st},hp={borderWidth:st,borderTopWidth:st,borderRightWidth:st,borderBottomWidth:st,borderLeftWidth:st,borderRadius:st,radius:st,borderTopLeftRadius:st,borderTopRightRadius:st,borderBottomRightRadius:st,borderBottomLeftRadius:st,width:st,maxWidth:st,height:st,maxHeight:st,top:st,right:st,bottom:st,left:st,padding:st,paddingTop:st,paddingRight:st,paddingBottom:st,paddingLeft:st,margin:st,marginTop:st,marginRight:st,marginBottom:st,marginLeft:st,backgroundPositionX:st,backgroundPositionY:st,...xP,zIndex:m0,fillOpacity:Pa,strokeOpacity:Pa,numOctaves:m0},SP={...hp,color:tn,backgroundColor:tn,outlineColor:tn,fill:tn,stroke:tn,borderColor:tn,borderTopColor:tn,borderRightColor:tn,borderBottomColor:tn,borderLeftColor:tn,filter:wh,WebkitFilter:wh},Ly=n=>SP[n];function Iy(n,e){let t=Ly(n);return t!==wh&&(t=Vr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const MP=new Set(["auto","none","0"]);function EP(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!MP.has(l)&&ba(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Iy(t,o)}class TP extends fp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),ip(h))){const m=Ry(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Py.has(r)||e.length!==2)return;const[o,l]=e,u=p0(o),f=p0(l);if(u!==f)if(c0(u)&&c0(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else ys[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||gP(e[o]))&&r.push(o);r.length&&EP(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ys[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const l=r.length-1,u=r[l];r[l]=ys[t](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),this.removedTransforms?.length&&this.removedTransforms.forEach(([f,d])=>{e.getValue(f).set(d)}),this.resolveNoneKeyframes()}}function wP(n,e,t){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=t?.[n]??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const Uy=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function AP(n){return Z_(n)&&"offsetHeight"in n}const g0=30,CP=n=>!isNaN(parseFloat(n));class RP{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Vn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Vn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=CP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Jh);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ht.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Vn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>g0)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,g0);return J_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(n,e){return new RP(n,e)}const{schedule:pp}=cy(queueMicrotask,!1),Mi={x:!1,y:!1};function Ny(){return Mi.x||Mi.y}function PP(n){return n==="x"||n==="y"?Mi[n]?null:(Mi[n]=!0,()=>{Mi[n]=!1}):Mi.x||Mi.y?null:(Mi.x=Mi.y=!0,()=>{Mi.x=Mi.y=!1})}function Fy(n,e){const t=wP(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function v0(n){return!(n.pointerType==="touch"||Ny())}function bP(n,e,t={}){const[r,o,l]=Fy(n,t),u=f=>{if(!v0(f))return;const{target:d}=f,h=e(d,f);if(typeof h!="function"||!d)return;const m=g=>{v0(g)&&(h(g),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),l}const Oy=(n,e)=>e?n===e?!0:Oy(n,e.parentElement):!1,mp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,DP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function LP(n){return DP.has(n.tagName)||n.tabIndex!==-1}const Cu=new WeakSet;function _0(n){return e=>{e.key==="Enter"&&n(e)}}function pd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const IP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=_0(()=>{if(Cu.has(t))return;pd(t,"down");const o=_0(()=>{pd(t,"up")}),l=()=>pd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function y0(n){return mp(n)&&!Ny()}function UP(n,e,t={}){const[r,o,l]=Fy(n,t),u=f=>{const d=f.currentTarget;if(!y0(f))return;Cu.add(d);const h=e(d,f),m=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",v),Cu.has(d)&&Cu.delete(d),y0(x)&&typeof h=="function"&&h(x,{success:M})},g=x=>{m(x,d===window||d===document||t.useGlobalTarget||Oy(d,x.target))},v=x=>{m(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",v,o)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),AP(f)&&(f.addEventListener("focus",h=>IP(h,o)),!LP(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),l}function By(n){return Z_(n)&&"ownerSVGElement"in n}function NP(n){return By(n)&&n.tagName==="svg"}const wn=n=>!!(n&&n.getVelocity),FP=[...Dy,tn,Vr],OP=n=>FP.find(by(n)),ky=dt.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function BP(n=!0){const e=dt.useContext(qh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=dt.useId();dt.useEffect(()=>{if(n)return o(l)},[n]);const u=dt.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Vy=dt.createContext({strict:!1}),x0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},To={};for(const n in x0)To[n]={isEnabled:e=>x0[n].some(t=>!!e[t])};function kP(n){for(const e in n)To[e]={...To[e],...n[e]}}const VP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ku(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||VP.has(n)}let zy=n=>!ku(n);function zP(n){typeof n=="function"&&(zy=e=>e.startsWith("on")?!ku(e):n(e))}try{zP(require("@emotion/is-prop-valid").default)}catch{}function HP(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(zy(o)||t===!0&&ku(o)||!e&&!ku(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Wu=dt.createContext({});function Xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Da(n){return typeof n=="string"||Array.isArray(n)}const gp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],vp=["initial",...gp];function ju(n){return Xu(n.animate)||vp.some(e=>Da(n[e]))}function Hy(n){return!!(ju(n)||n.variants)}function GP(n,e){if(ju(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Da(t)?t:void 0,animate:Da(r)?r:void 0}}return n.inherit!==!1?e:{}}function WP(n){const{initial:e,animate:t}=GP(n,dt.useContext(Wu));return dt.useMemo(()=>({initial:e,animate:t}),[S0(e),S0(t)])}function S0(n){return Array.isArray(n)?n.join(" "):n}const La={};function XP(n){for(const e in n)La[e]=n[e],np(e)&&(La[e].isCSSVariable=!0)}function Gy(n,{layout:e,layoutId:t}){return Po.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!La[n]||n==="opacity")}const jP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},YP=Ro.length;function qP(n,e,t){let r="",o=!0;for(let l=0;l<YP;l++){const u=Ro[l],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=Uy(f,hp[u]);if(!d){o=!1;const m=jP[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function _p(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(Po.has(d)){u=!0;continue}else if(np(d)){o[d]=h;continue}else{const m=Uy(h,hp[d]);d.startsWith("origin")?(f=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=qP(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const yp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Wy(n,e,t){for(const r in e)!wn(e[r])&&!Gy(r,t)&&(n[r]=e[r])}function KP({transformTemplate:n},e){return dt.useMemo(()=>{const t=yp();return _p(t,e,n),Object.assign({},t.vars,t.style)},[e])}function $P(n,e){const t=n.style||{},r={};return Wy(r,t,n),Object.assign(r,KP(n,e)),r}function ZP(n,e){const t={},r=$P(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const QP={offset:"stroke-dashoffset",array:"stroke-dasharray"},JP={offset:"strokeDashoffset",array:"strokeDasharray"};function eb(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?QP:JP;n[l.offset]=st.transform(-r);const u=st.transform(e),f=st.transform(t);n[l.array]=`${u} ${f}`}function Xy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:l=1,pathOffset:u=0,...f},d,h,m){if(_p(n,f,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:g,style:v}=n;g.transform&&(v.transform=g.transform,delete g.transform),(v.transform||g.transformOrigin)&&(v.transformOrigin=g.transformOrigin??"50% 50%",delete g.transformOrigin),v.transform&&(v.transformBox=m?.transformBox??"fill-box",delete g.transformBox),e!==void 0&&(g.x=e),t!==void 0&&(g.y=t),r!==void 0&&(g.scale=r),o!==void 0&&eb(g,o,l,u,!1)}const jy=()=>({...yp(),attrs:{}}),Yy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function tb(n,e,t,r){const o=dt.useMemo(()=>{const l=jy();return Xy(l,e,Yy(r),n.transformTemplate,n.style),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};Wy(l,n.style,n),o.style={...l,...o.style}}return o}const nb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xp(n){return typeof n!="string"||n.includes("-")?!1:!!(nb.indexOf(n)>-1||/[A-Z]/u.test(n))}function ib(n,e,t,{latestValues:r},o,l=!1){const f=(xp(n)?tb:ZP)(e,r,o,n),d=HP(e,typeof n=="string",l),h=n!==dt.Fragment?{...d,...f,ref:t}:{},{children:m}=e,g=dt.useMemo(()=>wn(m)?m.get():m,[m]);return dt.createElement(n,{...h,children:g})}function M0(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Sp(n,e,t,r){if(typeof e=="function"){const[o,l]=M0(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=M0(r);e=e(t!==void 0?t:n.custom,o,l)}return e}function Ru(n){return wn(n)?n.get():n}function rb({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:sb(t,r,o,n),renderState:e()}}function sb(n,e,t,r){const o={},l=r(n,{});for(const v in l)o[v]=Ru(l[v]);let{initial:u,animate:f}=n;const d=ju(n),h=Hy(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?f:u;if(g&&typeof g!="boolean"&&!Xu(g)){const v=Array.isArray(g)?g:[g];for(let x=0;x<v.length;x++){const M=Sp(n,v[x]);if(M){const{transitionEnd:T,transition:S,...y}=M;for(const D in y){let b=y[D];if(Array.isArray(b)){const C=m?b.length-1:0;b=b[C]}b!==null&&(o[D]=b)}for(const D in T)o[D]=T[D]}}}return o}const qy=n=>(e,t)=>{const r=dt.useContext(Wu),o=dt.useContext(qh),l=()=>rb(n,e,r,o);return t?l():kC(l)};function Mp(n,e,t){const{style:r}=n,o={};for(const l in r)(wn(r[l])||e.style&&wn(e.style[l])||Gy(l,n)||t?.getValue(l)?.liveStyle!==void 0)&&(o[l]=r[l]);return o}const ob=qy({scrapeMotionValuesFromProps:Mp,createRenderState:yp});function Ky(n,e,t){const r=Mp(n,e,t);for(const o in n)if(wn(n[o])||wn(e[o])){const l=Ro.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}const ab=qy({scrapeMotionValuesFromProps:Ky,createRenderState:jy}),lb=Symbol.for("motionComponentSymbol");function co(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function ub(n,e,t){return dt.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):co(t)&&(t.current=r))},[e])}const Ep=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),cb="framerAppearId",$y="data-"+Ep(cb),Zy=dt.createContext({});function fb(n,e,t,r,o){const{visualElement:l}=dt.useContext(Wu),u=dt.useContext(Vy),f=dt.useContext(qh),d=dt.useContext(ky).reducedMotion,h=dt.useRef(null);r=r||u.renderer,!h.current&&r&&(h.current=r(n,{visualState:e,parent:l,props:t,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:d}));const m=h.current,g=dt.useContext(Zy);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&db(h.current,t,o,g);const v=dt.useRef(!1);dt.useInsertionEffect(()=>{m&&v.current&&m.update(t,f)});const x=t[$y],M=dt.useRef(!!x&&!window.MotionHandoffIsComplete?.(x)&&window.MotionHasOptimisedAnimation?.(x));return VC(()=>{m&&(v.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),M.current&&m.animationState&&m.animationState.animateChanges())}),dt.useEffect(()=>{m&&(!M.current&&m.animationState&&m.animationState.animateChanges(),M.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(x)}),M.current=!1),m.enteringChildren=void 0)}),m}function db(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutCrossfade:m}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Qy(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||f&&co(f),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,crossfade:m,layoutScroll:d,layoutRoot:h})}function Qy(n){if(n)return n.options.allowProjection!==!1?n.projection:Qy(n.parent)}function md(n,{forwardMotionProps:e=!1}={},t,r){t&&kP(t);const o=xp(n)?ab:ob;function l(f,d){let h;const m={...dt.useContext(ky),...f,layoutId:hb(f)},{isStatic:g}=m,v=WP(f),x=o(f,g);if(!g&&Yh){pb();const M=mb(m);h=M.MeasureLayout,v.visualElement=fb(n,x,m,r,M.ProjectionNode)}return be.jsxs(Wu.Provider,{value:v,children:[h&&v.visualElement?be.jsx(h,{visualElement:v.visualElement,...m}):null,ib(n,f,ub(x,v.visualElement,d),x,g,e)]})}l.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const u=dt.forwardRef(l);return u[lb]=n,u}function hb({layoutId:n}){const e=dt.useContext(K_).id;return e&&n!==void 0?e+"-"+n:n}function pb(n,e){dt.useContext(Vy).strict}function mb(n){const{drag:e,layout:t}=To;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e?.isEnabled(n)||t?.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function gb(n,e){if(typeof Proxy>"u")return md;const t=new Map,r=(l,u)=>md(l,u,n,e),o=(l,u)=>r(l,u);return new Proxy(o,{get:(l,u)=>u==="create"?r:(t.has(u)||t.set(u,md(u,void 0,n,e)),t.get(u))})}function Jy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function vb({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function _b(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function gd(n){return n===void 0||n===1}function Ah({scale:n,scaleX:e,scaleY:t}){return!gd(n)||!gd(e)||!gd(t)}function ds(n){return Ah(n)||ex(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ex(n){return E0(n.x)||E0(n.y)}function E0(n){return n&&n!=="0%"}function Vu(n,e,t){const r=n-t,o=e*r;return t+o}function T0(n,e,t,r,o){return o!==void 0&&(n=Vu(n,o,r)),Vu(n,t,r)+e}function Ch(n,e=0,t=1,r,o){n.min=T0(n.min,e,t,r,o),n.max=T0(n.max,e,t,r,o)}function tx(n,{x:e,y:t}){Ch(n.x,e.translate,e.scale,e.originPoint),Ch(n.y,t.translate,t.scale,t.originPoint)}const w0=.999999999999,A0=1.0000000000001;function yb(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let f=0;f<o;f++){l=t[f],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&ho(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,tx(n,u)),r&&ds(l.latestValues)&&ho(n,l.latestValues))}e.x<A0&&e.x>w0&&(e.x=1),e.y<A0&&e.y>w0&&(e.y=1)}function fo(n,e){n.min=n.min+e,n.max=n.max+e}function C0(n,e,t,r,o=.5){const l=Xt(n.min,n.max,o);Ch(n,e,t,l,r)}function ho(n,e){C0(n.x,e.x,e.scaleX,e.scale,e.originX),C0(n.y,e.y,e.scaleY,e.scale,e.originY)}function nx(n,e){return Jy(_b(n.getBoundingClientRect(),e))}function xb(n,e,t){const r=nx(n,t),{scroll:o}=e;return o&&(fo(r.x,o.offset.x),fo(r.y,o.offset.y)),r}const R0=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:R0(),y:R0()}),P0=()=>({min:0,max:0}),Zt=()=>({x:P0(),y:P0()}),Rh={current:null},ix={current:!1};function Sb(){if(ix.current=!0,!!Yh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Rh.current=n.matches;n.addEventListener("change",e),e()}else Rh.current=!1}const Mb=new WeakMap;function Eb(n,e,t){for(const r in e){const o=e[r],l=t[r];if(wn(o))n.addValue(r,o);else if(wn(l))n.addValue(r,Eo(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Eo(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const b0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Tb{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=fp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=Vn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,Ht.render(this.render,!1,!0))};const{latestValues:d,renderState:h}=u;this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=ju(t),this.isVariantNode=Hy(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:m,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const v in g){const x=g[v];d[v]!==void 0&&wn(x)&&x.set(d[v])}}mount(e){this.current=e,Mb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),ix.current||Sb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rh.current,this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),kr(this.notifyUpdate),kr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Po.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",u=>{this.latestValues[e]=u,this.props.onUpdate&&Ht.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let l;window.MotionCheckAppearSync&&(l=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l&&l(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in To){const t=To[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Zt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<b0.length;r++){const o=b0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=Eb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Eo(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&($_(r)||Q_(r))?r=parseFloat(r):!OP(r)&&Vr.test(t)&&(r=Iy(e,t)),this.setBaseTarget(e,wn(r)?r.get():r)),wn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const l=Sp(this.props,t,this.presenceContext?.custom);l&&(r=l[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!wn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Jh),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){pp.render(this.render)}}class rx extends Tb{constructor(){super(...arguments),this.KeyframeResolver=TP}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;wn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function sx(n,{style:e,vars:t},r,o){const l=n.style;let u;for(u in e)l[u]=e[u];o?.applyProjectionStyles(l,r);for(u in t)l.setProperty(u,t[u])}function wb(n){return window.getComputedStyle(n)}class Ab extends rx{constructor(){super(...arguments),this.type="html",this.renderInstance=sx}readValueFromInstance(e,t){if(Po.has(t))return this.projection?.isProjecting?yh(t):GR(e,t);{const r=wb(e),o=(np(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return nx(e,t)}build(e,t,r){_p(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Mp(e,t,r)}}const ox=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Cb(n,e,t,r){sx(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(ox.has(o)?o:Ep(o),e.attrs[o])}class Rb extends rx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Zt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Po.has(t)){const r=Ly(t);return r&&r.default||0}return t=ox.has(t)?t:Ep(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Ky(e,t,r)}build(e,t,r){Xy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Cb(e,t,r,o)}mount(e){this.isSVGTag=Yy(e.tagName),super.mount(e)}}const Pb=(n,e)=>xp(n)?new Rb(e):new Ab(e,{allowProjection:n!==dt.Fragment});function vo(n,e,t){const r=n.getProps();return Sp(r,e,t!==void 0?t:r.custom,n)}const Ph=n=>Array.isArray(n);function bb(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Eo(t))}function Db(n){return Ph(n)?n[n.length-1]||0:n}function Lb(n,e){const t=vo(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const f=Db(l[u]);bb(n,u,f)}}function Ib(n){return!!(wn(n)&&n.add)}function bh(n,e){const t=n.getValue("willChange");if(Ib(t))return t.add(e);if(!t&&rr.WillChange){const r=new rr.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function ax(n){return n.props[$y]}const Ub=n=>n!==null;function Nb(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(Ub),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[l]}const Fb={type:"spring",stiffness:500,damping:25,restSpeed:10},Ob=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Bb={type:"keyframes",duration:.8},kb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Vb=(n,{keyframes:e})=>e.length>2?Bb:Po.has(n)?n.startsWith("scale")?Ob(e[1]):Fb:kb;function zb({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:f,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Tp=(n,e,t,r={},o,l)=>u=>{const f=dp(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Ui(d);const m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:v=>{e.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:l?void 0:o};zb(f)||Object.assign(m,Vb(n,m)),m.duration&&(m.duration=Ui(m.duration)),m.repeatDelay&&(m.repeatDelay=Ui(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Th(m),m.delay===0&&(g=!0)),(rr.instantAnimations||rr.skipAnimations)&&(g=!0,Th(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,g&&!l&&e.get()!==void 0){const v=Nb(m.keyframes,f);if(v!==void 0){Ht.update(()=>{m.onUpdate(v),m.onComplete()});return}}return f.isSync?new cp(m):new dP(m)};function Hb({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function lx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:l=n.getDefaultTransition(),transitionEnd:u,...f}=e;r&&(l=r);const d=[],h=o&&n.animationState&&n.animationState.getState()[o];for(const m in f){const g=n.getValue(m,n.latestValues[m]??null),v=f[m];if(v===void 0||h&&Hb(h,m))continue;const x={delay:t,...dp(l||{},m)},M=g.get();if(M!==void 0&&!g.isAnimating&&!Array.isArray(v)&&v===M&&!x.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const y=ax(n);if(y){const D=window.MotionHandoffAnimation(y,m,Ht);D!==null&&(x.startTime=D,T=!0)}}bh(n,m),g.start(Tp(m,g,v,n.shouldReduceMotion&&Py.has(m)?{type:!1}:x,n,T));const S=g.animation;S&&d.push(S)}return u&&Promise.all(d).then(()=>{Ht.update(()=>{u&&Lb(n,u)})}),d}function ux(n,e,t,r=0,o=1){const l=Array.from(n).sort((h,m)=>h.sortNodePosition(m)).indexOf(e),u=n.size,f=(u-1)*r;return typeof t=="function"?t(l,u):o===1?l*r:f-l*r}function Dh(n,e,t={}){const r=vo(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const l=r?()=>Promise.all(lx(n,r,t)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:m,staggerDirection:g}=o;return Gb(n,e,d,h,m,g,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[d,h]=f==="beforeChildren"?[l,u]:[u,l];return d().then(()=>h())}else return Promise.all([l(),u(t.delay)])}function Gb(n,e,t=0,r=0,o=0,l=1,u){const f=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),f.push(Dh(d,e,{...u,delay:t+(typeof r=="function"?0:r)+ux(n.variantChildren,d,r,o,l)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function Wb(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Dh(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Dh(n,e,t);else{const o=typeof e=="function"?vo(n,e,t.custom):e;r=Promise.all(lx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}function cx(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const Xb=vp.length;function fx(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?fx(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Xb;t++){const r=vp[t],o=n.props[r];(Da(o)||o===!1)&&(e[r]=o)}return e}const jb=[...gp].reverse(),Yb=gp.length;function qb(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Wb(n,t,r)))}function Kb(n){let e=qb(n),t=D0(),r=!0;const o=d=>(h,m)=>{const g=vo(n,m,d==="exit"?n.presenceContext?.custom:void 0);if(g){const{transition:v,transitionEnd:x,...M}=g;h={...h,...M,...x}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=fx(n.parent)||{},g=[],v=new Set;let x={},M=1/0;for(let S=0;S<Yb;S++){const y=jb[S],D=t[y],b=h[y]!==void 0?h[y]:m[y],C=Da(b),U=y===d?D.isActive:null;U===!1&&(M=S);let N=b===m[y]&&b!==h[y]&&C;if(N&&r&&n.manuallyAnimateOnMount&&(N=!1),D.protectedKeys={...x},!D.isActive&&U===null||!b&&!D.prevProp||Xu(b)||typeof b=="boolean")continue;const B=$b(D.prevProp,b);let z=B||y===d&&D.isActive&&!N&&C||S>M&&C,P=!1;const R=Array.isArray(b)?b:[b];let H=R.reduce(o(y),{});U===!1&&(H={});const{prevResolvedValues:$={}}=D,se={...$,...H},de=re=>{z=!0,v.has(re)&&(P=!0,v.delete(re)),D.needsAnimating[re]=!0;const k=n.getValue(re);k&&(k.liveStyle=!1)};for(const re in se){const k=H[re],oe=$[re];if(x.hasOwnProperty(re))continue;let ne=!1;Ph(k)&&Ph(oe)?ne=!cx(k,oe):ne=k!==oe,ne?k!=null?de(re):v.add(re):k!==void 0&&v.has(re)?de(re):D.protectedKeys[re]=!0}D.prevProp=b,D.prevResolvedValues=H,D.isActive&&(x={...x,...H}),r&&n.blockInitialAnimation&&(z=!1);const le=N&&B;z&&(!le||P)&&g.push(...R.map(re=>{const k={type:y};if(typeof re=="string"&&r&&!le&&n.manuallyAnimateOnMount&&n.parent){const{parent:oe}=n,ne=vo(oe,re);if(oe.enteringChildren&&ne){const{delayChildren:F}=ne.transition||{};k.delay=ux(oe.enteringChildren,n,F)}}return{animation:re,options:k}}))}if(v.size){const S={};if(typeof h.initial!="boolean"){const y=vo(n,Array.isArray(h.initial)?h.initial[0]:h.initial);y&&y.transition&&(S.transition=y.transition)}v.forEach(y=>{const D=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=D??null}),g.push({animation:S})}let T=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(T=!1),r=!1,T?e(g):Promise.resolve()}function f(d,h){if(t[d].isActive===h)return Promise.resolve();n.variantChildren?.forEach(g=>g.animationState?.setActive(d,h)),t[d].isActive=h;const m=u(d);for(const g in t)t[g].protectedKeys={};return m}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>t,reset:()=>{t=D0(),r=!0}}}function $b(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!cx(e,n):!1}function us(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function D0(){return{animate:us(!0),whileInView:us(),whileHover:us(),whileTap:us(),whileDrag:us(),whileFocus:us(),exit:us()}}class zr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Zb extends zr{constructor(e){super(e),e.animationState||(e.animationState=Kb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Qb=0;class Jb extends zr{constructor(){super(...arguments),this.id=Qb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const eD={animation:{Feature:Zb},exit:{Feature:Jb}};function Ia(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Ga(n){return{point:{x:n.pageX,y:n.pageY}}}const tD=n=>e=>mp(e)&&n(e,Ga(e));function xa(n,e,t,r){return Ia(n,e,tD(t),r)}const dx=1e-4,nD=1-dx,iD=1+dx,hx=.01,rD=0-hx,sD=0+hx;function Ln(n){return n.max-n.min}function oD(n,e,t){return Math.abs(n-e)<=t}function L0(n,e,t,r=.5){n.origin=r,n.originPoint=Xt(e.min,e.max,n.origin),n.scale=Ln(t)/Ln(e),n.translate=Xt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=nD&&n.scale<=iD||isNaN(n.scale))&&(n.scale=1),(n.translate>=rD&&n.translate<=sD||isNaN(n.translate))&&(n.translate=0)}function Sa(n,e,t,r){L0(n.x,e.x,t.x,r?r.originX:void 0),L0(n.y,e.y,t.y,r?r.originY:void 0)}function I0(n,e,t){n.min=t.min+e.min,n.max=n.min+Ln(e)}function aD(n,e,t){I0(n.x,e.x,t.x),I0(n.y,e.y,t.y)}function U0(n,e,t){n.min=e.min-t.min,n.max=n.min+Ln(e)}function Ma(n,e,t){U0(n.x,e.x,t.x),U0(n.y,e.y,t.y)}function oi(n){return[n("x"),n("y")]}const px=({current:n})=>n?n.ownerDocument.defaultView:null,N0=(n,e)=>Math.abs(n-e);function lD(n,e){const t=N0(n.x,e.x),r=N0(n.y,e.y);return Math.sqrt(t**2+r**2)}class mx{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:l=!1,distanceThreshold:u=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=_d(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,M=lD(v.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!M)return;const{point:T}=v,{timestamp:S}=mn;this.history.push({...T,timestamp:S});const{onStart:y,onMove:D}=this.handlers;x||(y&&y(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),D&&D(this.lastMoveEvent,v)},this.handlePointerMove=(v,x)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=vd(x,this.transformPagePoint),Ht.update(this.updatePoint,!0)},this.handlePointerUp=(v,x)=>{this.end();const{onEnd:M,onSessionEnd:T,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=_d(v.type==="pointercancel"?this.lastMoveEventInfo:vd(x,this.transformPagePoint),this.history);this.startEvent&&M&&M(v,y),T&&T(v,y)},!mp(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=u,this.contextWindow=o||window;const f=Ga(e),d=vd(f,this.transformPagePoint),{point:h}=d,{timestamp:m}=mn;this.history=[{...h,timestamp:m}];const{onSessionStart:g}=t;g&&g(e,_d(d,this.history)),this.removeListeners=Va(xa(this.contextWindow,"pointermove",this.handlePointerMove),xa(this.contextWindow,"pointerup",this.handlePointerUp),xa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),kr(this.updatePoint)}}function vd(n,e){return e?{point:e(n.point)}:n}function F0(n,e){return{x:n.x-e.x,y:n.y-e.y}}function _d({point:n},e){return{point:n,delta:F0(n,gx(e)),offset:F0(n,uD(e)),velocity:cD(e,.1)}}function uD(n){return n[0]}function gx(n){return n[n.length-1]}function cD(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=gx(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Ui(e)));)t--;if(!r)return{x:0,y:0};const l=ci(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function fD(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Xt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Xt(t,n,r.max):Math.min(n,t)),n}function O0(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function dD(n,{top:e,left:t,bottom:r,right:o}){return{x:O0(n.x,t,o),y:O0(n.y,e,r)}}function B0(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function hD(n,e){return{x:B0(n.x,e.x),y:B0(n.y,e.y)}}function pD(n,e){let t=.5;const r=Ln(n),o=Ln(e);return o>r?t=Ra(e.min,e.max-r,n.min):r>o&&(t=Ra(n.min,n.max-o,e.min)),ir(0,1,t)}function mD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Lh=.35;function gD(n=Lh){return n===!1?n=0:n===!0&&(n=Lh),{x:k0(n,"left","right"),y:k0(n,"top","bottom")}}function k0(n,e,t){return{min:V0(n,e),max:V0(n,t)}}function V0(n,e){return typeof n=="number"?n:n[e]||0}const vD=new WeakMap;class _D{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Zt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const l=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ga(g).point)},u=(g,v)=>{const{drag:x,dragPropagation:M,onDragStart:T}=this.getProps();if(x&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=PP(x),!this.openDragLock))return;this.latestPointerEvent=g,this.latestPanInfo=v,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),oi(y=>{let D=this.getAxisMotionValue(y).get()||0;if(Ni.test(D)){const{projection:b}=this.visualElement;if(b&&b.layout){const C=b.layout.layoutBox[y];C&&(D=Ln(C)*(parseFloat(D)/100))}}this.originPoint[y]=D}),T&&Ht.postRender(()=>T(g,v)),bh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},f=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v;const{dragPropagation:x,dragDirectionLock:M,onDirectionLock:T,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:y}=v;if(M&&this.currentDirection===null){this.currentDirection=yD(y),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",v.point,y),this.updateAxis("y",v.point,y),this.visualElement.render(),S&&S(g,v)},d=(g,v)=>{this.latestPointerEvent=g,this.latestPanInfo=v,this.stop(g,v),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>oi(g=>this.getAnimationState(g)==="paused"&&this.getAxisMotionValue(g).animation?.play()),{dragSnapToOrigin:m}=this.getProps();this.panSession=new mx(e,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:px(this.visualElement)})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,l=this.isDragging;if(this.cancel(),!l||!o||!r)return;const{velocity:u}=o;this.startAnimation(u);const{onDragEnd:f}=this.getProps();f&&Ht.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!xu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=fD(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&co(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=dD(r.layoutBox,e):this.constraints=!1,this.elastic=gD(t),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&oi(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=mD(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!co(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=xb(r,o.root,this.visualElement.getTransformPagePoint());let u=hD(o.layout.layoutBox,l);if(t){const f=t(vb(u));this.hasMutatedConstraints=!!f,f&&(u=Jy(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=oi(m=>{if(!xu(m,t,this.currentDirection))return;let g=d&&d[m]||{};u&&(g={min:0,max:0});const v=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:v,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return bh(this.visualElement,e),r.start(Tp(e,r,0,t,this.visualElement,!1))}stopAnimation(){oi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){oi(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){oi(t=>{const{drag:r}=this.getProps();if(!xu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];l.set(e[t]-Xt(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!co(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};oi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=pD({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),oi(u=>{if(!xu(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(Xt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;vD.set(this.visualElement,this);const e=this.visualElement.current,t=xa(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();co(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Ht.read(r);const u=Ia(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(oi(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())}));return()=>{u(),t(),l(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Lh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function xu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function yD(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class xD extends zr{constructor(e){super(e),this.removeGroupControls=fi,this.removeListeners=fi,this.controls=new _D(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fi}unmount(){this.removeGroupControls(),this.removeListeners()}}const z0=n=>(e,t)=>{n&&Ht.postRender(()=>n(e,t))};class SD extends zr{constructor(){super(...arguments),this.removePointerDownListener=fi}onPointerDown(e){this.session=new mx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:px(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:z0(e),onStart:z0(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&Ht.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=xa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Pu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function H0(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(st.test(n))n=parseFloat(n);else return n;const t=H0(n,e.target.x),r=H0(n,e.target.y);return`${t}% ${r}%`}},MD={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Vr.parse(n);if(o.length>5)return r;const l=Vr.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=Xt(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};let yd=!1;class ED extends dt.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;XP(TD),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),yd&&l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),Pu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,{projection:u}=r;return u&&(u.isPresent=l,yd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==l?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||Ht.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),pp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;yd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function vx(n){const[e,t]=BP(),r=dt.useContext(K_);return be.jsx(ED,{...n,layoutGroup:r,switchLayoutGroup:dt.useContext(Zy),isPresent:e,safeToRemove:t})}const TD={borderRadius:{...pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:pa,borderTopRightRadius:pa,borderBottomLeftRadius:pa,borderBottomRightRadius:pa,boxShadow:MD};function wD(n,e,t){const r=wn(n)?n:Eo(n);return r.start(Tp("",r,e,t)),r.animation}const AD=(n,e)=>n.depth-e.depth;class CD{constructor(){this.children=[],this.isDirty=!1}add(e){Kh(this.children,e),this.isDirty=!0}remove(e){$h(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(AD),this.isDirty=!1,this.children.forEach(e)}}function RD(n,e){const t=Vn.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(kr(r),n(l-e))};return Ht.setup(r,!0),()=>kr(r)}const _x=["TopLeft","TopRight","BottomLeft","BottomRight"],PD=_x.length,G0=n=>typeof n=="string"?parseFloat(n):n,W0=n=>typeof n=="number"||st.test(n);function bD(n,e,t,r,o,l){o?(n.opacity=Xt(0,t.opacity??1,DD(r)),n.opacityExit=Xt(e.opacity??1,0,LD(r))):l&&(n.opacity=Xt(e.opacity??1,t.opacity??1,r));for(let u=0;u<PD;u++){const f=`border${_x[u]}Radius`;let d=X0(e,f),h=X0(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||W0(d)===W0(h)?(n[f]=Math.max(Xt(G0(d),G0(h),r),0),(Ni.test(h)||Ni.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Xt(e.rotate||0,t.rotate||0,r))}function X0(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const DD=yx(0,.5,oy),LD=yx(.5,.95,fi);function yx(n,e,t){return r=>r<n?0:r>e?1:t(Ra(n,e,r))}function j0(n,e){n.min=e.min,n.max=e.max}function si(n,e){j0(n.x,e.x),j0(n.y,e.y)}function Y0(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function q0(n,e,t,r,o){return n-=e,n=Vu(n,1/t,r),o!==void 0&&(n=Vu(n,1/o,r)),n}function ID(n,e=0,t=1,r=.5,o,l=n,u=n){if(Ni.test(e)&&(e=parseFloat(e),e=Xt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=Xt(l.min,l.max,r);n===l&&(f-=e),n.min=q0(n.min,e,t,f,o),n.max=q0(n.max,e,t,f,o)}function K0(n,e,[t,r,o],l,u){ID(n,e[t],e[r],e[o],e.scale,l,u)}const UD=["x","scaleX","originX"],ND=["y","scaleY","originY"];function $0(n,e,t,r){K0(n.x,e,UD,t?t.x:void 0,r?r.x:void 0),K0(n.y,e,ND,t?t.y:void 0,r?r.y:void 0)}function Z0(n){return n.translate===0&&n.scale===1}function xx(n){return Z0(n.x)&&Z0(n.y)}function Q0(n,e){return n.min===e.min&&n.max===e.max}function FD(n,e){return Q0(n.x,e.x)&&Q0(n.y,e.y)}function J0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Sx(n,e){return J0(n.x,e.x)&&J0(n.y,e.y)}function e_(n){return Ln(n.x)/Ln(n.y)}function t_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class OD{constructor(){this.members=[]}add(e){Kh(this.members,e),e.scheduleRender()}remove(e){if($h(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function BD(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=t?.z||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:v,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),v&&(r+=`rotateY(${v}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const xd=["","X","Y","Z"],kD=1e3;let VD=0;function Sd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Mx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=ax(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ht,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Mx(r)}function Ex({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e?.()){this.id=VD++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(GD),this.nodes.forEach(YD),this.nodes.forEach(qD),this.nodes.forEach(WD)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new CD)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Jh),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=By(u)&&!NP(u),this.instance=u;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),n){let m,g=0;const v=()=>this.root.updateBlockedByResize=!1;Ht.read(()=>{g=window.innerWidth}),n(u,()=>{const x=window.innerWidth;x!==g&&(g=x,this.root.updateBlockedByResize=!0,m&&m(),m=RD(v,250),Pu.hasAnimatedSinceResize&&(Pu.hasAnimatedSinceResize=!1,this.nodes.forEach(r_)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:g,hasRelativeLayoutChanged:v,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||JD,{onLayoutAnimationStart:T,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Sx(this.targetLayout,x),D=!g&&v;if(this.options.layoutRoot||this.resumeFrom||D||g&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...dp(M,"layout"),onPlay:T,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(m,D)}else g||r_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),kr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KD),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n_);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(i_);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(jD),this.nodes.forEach(zD),this.nodes.forEach(HD)):this.nodes.forEach(i_),this.clearAllSnapshots();const f=Vn.now();mn.delta=ir(0,1e3/60,f-mn.timestamp),mn.timestamp=f,mn.isProcessing=!0,ud.update.process(mn),ud.preRender.process(mn),ud.render.process(mn),mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,pp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XD),this.sharedNodes.forEach($D)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ln(this.snapshot.measuredBox.x)&&!Ln(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Zt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!xx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&this.instance&&(f||ds(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),e2(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:u}=this.options;if(!u)return Zt();const f=u.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(t2))){const{scroll:h}=this.root;h&&(fo(f.x,h.offset.x),fo(f.y,h.offset.y))}return f}removeElementScroll(u){const f=Zt();if(si(f,u),this.scroll?.wasRoot)return f;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:m,options:g}=h;h!==this.root&&m&&g.layoutScroll&&(m.wasRoot&&si(f,u),fo(f.x,m.offset.x),fo(f.y,m.offset.y))}return f}applyTransform(u,f=!1){const d=Zt();si(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!f&&m.options.layoutScroll&&m.scroll&&m!==m.root&&ho(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ds(m.latestValues)&&ho(d,m.latestValues)}return ds(this.latestValues)&&ho(d,this.latestValues),d}removeTransform(u){const f=Zt();si(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ds(h.latestValues))continue;Ah(h.latestValues)&&h.updateSnapshot();const m=Zt(),g=h.measurePageBox();si(m,g),$0(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return ds(this.latestValues)&&$0(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(u||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:g}=this.options;if(!(!this.layout||!(m||g))){if(this.resolvedRelativeTargetAt=mn.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Ma(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),si(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Zt(),this.targetWithTransforms=Zt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),aD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):si(this.target,this.layout.layoutBox),tx(this.target,this.targetDelta)):si(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Zt(),this.relativeTargetOrigin=Zt(),Ma(this.relativeTargetOrigin,this.target,v.target),si(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ah(this.parent.latestValues)||ex(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const u=this.getLead(),f=!!this.resumingFrom||this!==u;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===mn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||m))return;si(this.layoutCorrected,this.layout.layoutBox);const g=this.treeScale.x,v=this.treeScale.y;yb(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Zt());const{target:x}=u;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Y0(this.prevProjectionDelta.x,this.projectionDelta.x),Y0(this.prevProjectionDelta.y,this.projectionDelta.y)),Sa(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==g||this.treeScale.y!==v||!t_(this.projectionDelta.x,this.prevProjectionDelta.x)||!t_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){if(this.options.visualElement?.scheduleRender(),u){const f=this.getStack();f&&f.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=Zt(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=x!==M,S=this.getStack(),y=!S||S.members.length<=1,D=!!(T&&!y&&this.options.crossfade===!0&&!this.path.some(QD));this.animationProgress=0;let b;this.mixTargetDelta=C=>{const U=C/1e3;s_(g.x,u.x,U),s_(g.y,u.y,U),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ma(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZD(this.relativeTarget,this.relativeTargetOrigin,v,U),b&&FD(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Zt()),si(b,this.relativeTarget)),T&&(this.animationValues=m,bD(m,h,this.latestValues,U,D,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=U},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(kr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ht.update(()=>{Pu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Eo(0)),this.currentAnimation=wD(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(kD),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:m}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&Tx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Zt();const g=Ln(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const v=Ln(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+v}si(f,d),ho(f,m),Sa(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new OD),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){const{layoutId:u}=this.options;return u?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:u}=this.options;return u?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Sd("z",u,h,this.animationValues);for(let m=0;m<xd.length;m++)Sd(`rotate${xd[m]}`,u,h,this.animationValues),Sd(`skew${xd[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}applyProjectionStyles(u,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){u.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,u.visibility="",u.opacity="",u.pointerEvents=Ru(f?.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(u.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,u.pointerEvents=Ru(f?.pointerEvents)||""),this.hasProjected&&!ds(this.latestValues)&&(u.transform=d?d({},""):"none",this.hasProjected=!1);return}u.visibility="";const m=h.animationValues||h.latestValues;this.applyTransformsToTarget();let g=BD(this.projectionDeltaWithTransform,this.treeScale,m);d&&(g=d(m,g)),u.transform=g;const{x:v,y:x}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${x.origin*100}% 0`,h.animationValues?u.opacity=h===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:u.opacity=h===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const M in La){if(m[M]===void 0)continue;const{correct:T,applyTo:S,isCSSVariable:y}=La[M],D=g==="none"?m[M]:T(m[M],h);if(S){const b=S.length;for(let C=0;C<b;C++)u[S[C]]=D}else y?this.options.visualElement.renderState.vars[M]=D:u[M]=D}this.options.layoutId&&(u.pointerEvents=h===this?Ru(f?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>u.currentAnimation?.stop()),this.root.nodes.forEach(n_),this.root.sharedNodes.clear()}}}function zD(n){n.updateLayout()}function HD(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,l=e.source!==n.layout.source;o==="size"?oi(m=>{const g=l?e.measuredBox[m]:e.layoutBox[m],v=Ln(g);g.min=t[m].min,g.max=g.min+v}):Tx(o,e.layoutBox,t)&&oi(m=>{const g=l?e.measuredBox[m]:e.layoutBox[m],v=Ln(t[m]);g.max=g.min+v,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[m].max=n.relativeTarget[m].min+v)});const u=po();Sa(u,t,e.layoutBox);const f=po();l?Sa(f,n.applyTransform(r,!0),e.measuredBox):Sa(f,t,e.layoutBox);const d=!xx(u);let h=!1;if(!n.resumeFrom){const m=n.getClosestProjectingParent();if(m&&!m.resumeFrom){const{snapshot:g,layout:v}=m;if(g&&v){const x=Zt();Ma(x,e.layoutBox,g.layoutBox);const M=Zt();Ma(M,t,v.layoutBox),Sx(x,M)||(h=!0),m.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=x,n.relativeParent=m)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:f,layoutDelta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function GD(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function WD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function XD(n){n.clearSnapshot()}function n_(n){n.clearMeasurements()}function i_(n){n.isLayoutDirty=!1}function jD(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function r_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function YD(n){n.resolveTargetDelta()}function qD(n){n.calcProjection()}function KD(n){n.resetSkewAndRotation()}function $D(n){n.removeLeadSnapshot()}function s_(n,e,t){n.translate=Xt(e.translate,0,t),n.scale=Xt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function o_(n,e,t,r){n.min=Xt(e.min,t.min,r),n.max=Xt(e.max,t.max,r)}function ZD(n,e,t,r){o_(n.x,e.x,t.x,r),o_(n.y,e.y,t.y,r)}function QD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const JD={duration:.45,ease:[.4,0,.1,1]},a_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),l_=a_("applewebkit/")&&!a_("chrome/")?Math.round:fi;function u_(n){n.min=l_(n.min),n.max=l_(n.max)}function e2(n){u_(n.x),u_(n.y)}function Tx(n,e,t){return n==="position"||n==="preserve-aspect"&&!oD(e_(e),e_(t),.2)}function t2(n){return n!==n.root&&n.scroll?.wasRoot}const n2=Ex({attachResizeListener:(n,e)=>Ia(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Md={current:void 0},wx=Ex({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Md.current){const n=new n2({});n.mount(window),n.setOptions({layoutScroll:!0}),Md.current=n}return Md.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),i2={pan:{Feature:SD},drag:{Feature:xD,ProjectionNode:wx,MeasureLayout:vx}};function c_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&Ht.postRender(()=>l(e,Ga(e)))}class r2 extends zr{mount(){const{current:e}=this.node;e&&(this.unmount=bP(e,(t,r)=>(c_(this.node,r,"Start"),o=>c_(this.node,o,"End"))))}unmount(){}}class s2 extends zr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Va(Ia(this.node.current,"focus",()=>this.onFocus()),Ia(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function f_(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&Ht.postRender(()=>l(e,Ga(e)))}class o2 extends zr{mount(){const{current:e}=this.node;e&&(this.unmount=UP(e,(t,r)=>(f_(this.node,r,"Start"),(o,{success:l})=>f_(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ih=new WeakMap,Ed=new WeakMap,a2=n=>{const e=Ih.get(n.target);e&&e(n)},l2=n=>{n.forEach(a2)};function u2({root:n,...e}){const t=n||document;Ed.has(t)||Ed.set(t,{});const r=Ed.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(l2,{root:n,...e})),r[o]}function c2(n,e,t){const r=u2(e);return Ih.set(n,t),r.observe(n),()=>{Ih.delete(n),r.unobserve(n)}}const f2={some:0,all:1};class d2 extends zr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:f2[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),v=h?m:g;v&&v(d)};return c2(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(h2(e,t))&&this.startObserver()}unmount(){}}function h2({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const p2={inView:{Feature:d2},tap:{Feature:o2},focus:{Feature:s2},hover:{Feature:r2}},m2={layout:{ProjectionNode:wx,MeasureLayout:vx}},g2={...eD,...p2,...i2,...m2},d_=gb(g2,Pb),v2=[{name:"Riya Sharma",text:"Shubh Avsar Events made our wedding absolutely unforgettable! Highly recommended."},{name:"Ankit Patel",text:"Professional team, beautiful decorations, and perfect planning!"},{name:"Meera Joshi",text:"From start to finish, everything was flawless. Loved their creative ideas!"}];function _2(){return be.jsxs("section",{id:"testimonials",className:"w-full py-20 px-6 md:px-20 bg-gradient-to-r from-pink-50 via-yellow-100 to-yellow-200 text-center",children:[be.jsx(d_.h2,{className:"text-3xl md:text-5xl font-bold mb-12 text-pink-600",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},children:"What Clients Say"}),be.jsx("div",{className:"flex flex-col md:flex-row justify-center items-center gap-6",children:v2.map((n,e)=>be.jsxs(d_.div,{className:"bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-sm",initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:e*.2},children:[be.jsxs("p",{className:"text-gray-700 mb-4",children:['"',n.text,'"']}),be.jsx("p",{className:"font-bold text-pink-600",children:n.name})]},e))})]})}function y2(){return be.jsxs("div",{className:"w-full min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-100 via-yellow-50 to-yellow-200 font-poppins relative",children:[be.jsx(pM,{}),be.jsx("div",{id:"home",children:be.jsx(TC,{})}),be.jsx("section",{id:"services",children:be.jsx(wC,{})}),be.jsx("section",{id:"portfolio",children:be.jsx(AC,{})}),be.jsx("section",{id:"testimonials",children:be.jsx(_2,{})}),be.jsx("section",{id:"contact",children:be.jsx(CC,{})}),be.jsx(RC,{}),be.jsx(BC,{})]})}hM.createRoot(document.getElementById("root")).render(be.jsx(Ur.StrictMode,{children:be.jsx(y2,{})}));
