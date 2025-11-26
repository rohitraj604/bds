function e0(s,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in s)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function t0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vc={exports:{}},Wo={},Gc={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function n0(){if(hm)return vt;hm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(b){return b===null||typeof b!="object"?null:(b=_&&b[_]||b["@@iterator"],typeof b=="function"?b:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,w={};function y(b,K,ve){this.props=b,this.context=K,this.refs=w,this.updater=ve||S}y.prototype.isReactComponent={},y.prototype.setState=function(b,K){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,K,"setState")},y.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function v(){}v.prototype=y.prototype;function U(b,K,ve){this.props=b,this.context=K,this.refs=w,this.updater=ve||S}var N=U.prototype=new v;N.constructor=U,T(N,y.prototype),N.isPureReactComponent=!0;var P=Array.isArray,z=Object.prototype.hasOwnProperty,k={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function X(b,K,ve){var Ge,ke={},Ke=null,ee=null;if(K!=null)for(Ge in K.ref!==void 0&&(ee=K.ref),K.key!==void 0&&(Ke=""+K.key),K)z.call(K,Ge)&&!I.hasOwnProperty(Ge)&&(ke[Ge]=K[Ge]);var se=arguments.length-2;if(se===1)ke.children=ve;else if(1<se){for(var xe=Array(se),Xe=0;Xe<se;Xe++)xe[Xe]=arguments[Xe+2];ke.children=xe}if(b&&b.defaultProps)for(Ge in se=b.defaultProps,se)ke[Ge]===void 0&&(ke[Ge]=se[Ge]);return{$$typeof:s,type:b,key:Ke,ref:ee,props:ke,_owner:k.current}}function C(b,K){return{$$typeof:s,type:b.type,key:K,ref:b.ref,props:b.props,_owner:b._owner}}function R(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function B(b){var K={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(ve){return K[ve]})}var J=/\/+/g;function ie(b,K){return typeof b=="object"&&b!==null&&b.key!=null?B(""+b.key):K.toString(36)}function fe(b,K,ve,Ge,ke){var Ke=typeof b;(Ke==="undefined"||Ke==="boolean")&&(b=null);var ee=!1;if(b===null)ee=!0;else switch(Ke){case"string":case"number":ee=!0;break;case"object":switch(b.$$typeof){case s:case e:ee=!0}}if(ee)return ee=b,ke=ke(ee),b=Ge===""?"."+ie(ee,0):Ge,P(ke)?(ve="",b!=null&&(ve=b.replace(J,"$&/")+"/"),fe(ke,K,ve,"",function(Xe){return Xe})):ke!=null&&(R(ke)&&(ke=C(ke,ve+(!ke.key||ee&&ee.key===ke.key?"":(""+ke.key).replace(J,"$&/")+"/")+b)),K.push(ke)),1;if(ee=0,Ge=Ge===""?".":Ge+":",P(b))for(var se=0;se<b.length;se++){Ke=b[se];var xe=Ge+ie(Ke,se);ee+=fe(Ke,K,ve,xe,ke)}else if(xe=x(b),typeof xe=="function")for(b=xe.call(b),se=0;!(Ke=b.next()).done;)Ke=Ke.value,xe=Ge+ie(Ke,se++),ee+=fe(Ke,K,ve,xe,ke);else if(Ke==="object")throw K=String(b),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ee}function le(b,K,ve){if(b==null)return b;var Ge=[],ke=0;return fe(b,Ge,"","",function(Ke){return K.call(ve,Ke,ke++)}),Ge}function ae(b){if(b._status===-1){var K=b._result;K=K(),K.then(function(ve){(b._status===0||b._status===-1)&&(b._status=1,b._result=ve)},function(ve){(b._status===0||b._status===-1)&&(b._status=2,b._result=ve)}),b._status===-1&&(b._status=0,b._result=K)}if(b._status===1)return b._result.default;throw b._result}var ce={current:null},H={transition:null},oe={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:H,ReactCurrentOwner:k};return vt.Children={map:le,forEach:function(b,K,ve){le(b,function(){K.apply(this,arguments)},ve)},count:function(b){var K=0;return le(b,function(){K++}),K},toArray:function(b){return le(b,function(K){return K})||[]},only:function(b){if(!R(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},vt.Component=y,vt.Fragment=t,vt.Profiler=o,vt.PureComponent=U,vt.StrictMode=r,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,vt.cloneElement=function(b,K,ve){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var Ge=T({},b.props),ke=b.key,Ke=b.ref,ee=b._owner;if(K!=null){if(K.ref!==void 0&&(Ke=K.ref,ee=k.current),K.key!==void 0&&(ke=""+K.key),b.type&&b.type.defaultProps)var se=b.type.defaultProps;for(xe in K)z.call(K,xe)&&!I.hasOwnProperty(xe)&&(Ge[xe]=K[xe]===void 0&&se!==void 0?se[xe]:K[xe])}var xe=arguments.length-2;if(xe===1)Ge.children=ve;else if(1<xe){se=Array(xe);for(var Xe=0;Xe<xe;Xe++)se[Xe]=arguments[Xe+2];Ge.children=se}return{$$typeof:s,type:b.type,key:ke,ref:Ke,props:Ge,_owner:ee}},vt.createContext=function(b){return b={$$typeof:c,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},vt.createElement=X,vt.createFactory=function(b){var K=X.bind(null,b);return K.type=b,K},vt.createRef=function(){return{current:null}},vt.forwardRef=function(b){return{$$typeof:f,render:b}},vt.isValidElement=R,vt.lazy=function(b){return{$$typeof:g,_payload:{_status:-1,_result:b},_init:ae}},vt.memo=function(b,K){return{$$typeof:p,type:b,compare:K===void 0?null:K}},vt.startTransition=function(b){var K=H.transition;H.transition={};try{b()}finally{H.transition=K}},vt.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},vt.useCallback=function(b,K){return ce.current.useCallback(b,K)},vt.useContext=function(b){return ce.current.useContext(b)},vt.useDebugValue=function(){},vt.useDeferredValue=function(b){return ce.current.useDeferredValue(b)},vt.useEffect=function(b,K){return ce.current.useEffect(b,K)},vt.useId=function(){return ce.current.useId()},vt.useImperativeHandle=function(b,K,ve){return ce.current.useImperativeHandle(b,K,ve)},vt.useInsertionEffect=function(b,K){return ce.current.useInsertionEffect(b,K)},vt.useLayoutEffect=function(b,K){return ce.current.useLayoutEffect(b,K)},vt.useMemo=function(b,K){return ce.current.useMemo(b,K)},vt.useReducer=function(b,K,ve){return ce.current.useReducer(b,K,ve)},vt.useRef=function(b){return ce.current.useRef(b)},vt.useState=function(b){return ce.current.useState(b)},vt.useSyncExternalStore=function(b,K,ve){return ce.current.useSyncExternalStore(b,K,ve)},vt.useTransition=function(){return ce.current.useTransition()},vt.version="18.2.0",vt}var dm;function Ah(){return dm||(dm=1,Gc.exports=n0()),Gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function i0(){if(pm)return Wo;pm=1;var s=Ah(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,p){var g,_={},x=null,S=null;p!==void 0&&(x=""+p),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:o.current}}return Wo.Fragment=t,Wo.jsx=c,Wo.jsxs=c,Wo}var mm;function r0(){return mm||(mm=1,Vc.exports=i0()),Vc.exports}var Je=r0(),Oe=Ah();const to=t0(Oe),s0=e0({__proto__:null,default:to},[Oe]);var _l={},Wc={exports:{}},Nn={},Xc={exports:{}},jc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function o0(){return gm||(gm=1,(function(s){function e(H,oe){var b=H.length;H.push(oe);e:for(;0<b;){var K=b-1>>>1,ve=H[K];if(0<o(ve,oe))H[K]=oe,H[b]=ve,b=K;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var oe=H[0],b=H.pop();if(b!==oe){H[0]=b;e:for(var K=0,ve=H.length,Ge=ve>>>1;K<Ge;){var ke=2*(K+1)-1,Ke=H[ke],ee=ke+1,se=H[ee];if(0>o(Ke,b))ee<ve&&0>o(se,Ke)?(H[K]=se,H[ee]=b,K=ee):(H[K]=Ke,H[ke]=b,K=ke);else if(ee<ve&&0>o(se,b))H[K]=se,H[ee]=b,K=ee;else break e}}return oe}function o(H,oe){var b=H.sortIndex-oe.sortIndex;return b!==0?b:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],p=[],g=1,_=null,x=3,S=!1,T=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=H)r(p),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(p)}}function P(H){if(w=!1,N(H),!T)if(t(d)!==null)T=!0,ae(z);else{var oe=t(p);oe!==null&&ce(P,oe.startTime-H)}}function z(H,oe){T=!1,w&&(w=!1,v(X),X=-1),S=!0;var b=x;try{for(N(oe),_=t(d);_!==null&&(!(_.expirationTime>oe)||H&&!B());){var K=_.callback;if(typeof K=="function"){_.callback=null,x=_.priorityLevel;var ve=K(_.expirationTime<=oe);oe=s.unstable_now(),typeof ve=="function"?_.callback=ve:_===t(d)&&r(d),N(oe)}else r(d);_=t(d)}if(_!==null)var Ge=!0;else{var ke=t(p);ke!==null&&ce(P,ke.startTime-oe),Ge=!1}return Ge}finally{_=null,x=b,S=!1}}var k=!1,I=null,X=-1,C=5,R=-1;function B(){return!(s.unstable_now()-R<C)}function J(){if(I!==null){var H=s.unstable_now();R=H;var oe=!0;try{oe=I(!0,H)}finally{oe?ie():(k=!1,I=null)}}else k=!1}var ie;if(typeof U=="function")ie=function(){U(J)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,le=fe.port2;fe.port1.onmessage=J,ie=function(){le.postMessage(null)}}else ie=function(){y(J,0)};function ae(H){I=H,k||(k=!0,ie())}function ce(H,oe){X=y(function(){H(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(z))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var b=x;x=oe;try{return H()}finally{x=b}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var b=x;x=H;try{return oe()}finally{x=b}},s.unstable_scheduleCallback=function(H,oe,b){var K=s.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?K+b:K):b=K,H){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=b+ve,H={id:g++,callback:oe,priorityLevel:H,startTime:b,expirationTime:ve,sortIndex:-1},b>K?(H.sortIndex=b,e(p,H),t(d)===null&&H===t(p)&&(w?(v(X),X=-1):w=!0,ce(P,b-K))):(H.sortIndex=ve,e(d,H),T||S||(T=!0,ae(z))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var oe=x;return function(){var b=x;x=oe;try{return H.apply(this,arguments)}finally{x=b}}}})(jc)),jc}var _m;function a0(){return _m||(_m=1,Xc.exports=o0()),Xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function l0(){if(vm)return Nn;vm=1;var s=Ah(),e=a0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return d.call(_,n)?!0:d.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,h,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,U);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,u){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,u)&&(a=null),u||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),B=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var b=Object.assign,K;function ve(n){if(K===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);K=i&&i[1]||""}return`
`+K+n}var Ge=!1;function ke(n,i){if(!n||Ge)return"";Ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var u=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){u=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){u=Q}n()}}catch(Q){if(Q&&u&&typeof Q.stack=="string"){for(var h=Q.stack.split(`
`),m=u.stack.split(`
`),E=h.length-1,L=m.length-1;1<=E&&0<=L&&h[E]!==m[L];)L--;for(;1<=E&&0<=L;E--,L--)if(h[E]!==m[L]){if(E!==1||L!==1)do if(E--,L--,0>L||h[E]!==m[L]){var O=`
`+h[E].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=E&&0<=L);break}}}finally{Ge=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ve(n):""}function Ke(n){switch(n.tag){case 5:return ve(n.type);case 16:return ve("Lazy");case 13:return ve("Suspense");case 19:return ve("SuspenseList");case 0:case 2:case 15:return n=ke(n.type,!1),n;case 11:return n=ke(n.type.render,!1),n;case 1:return n=ke(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case k:return"Portal";case C:return"Profiler";case X:return"StrictMode";case ie:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return ee(n(i))}catch{}}return null}function se(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Xe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(n){var i=Xe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function mt(n){n._valueTracker||(n._valueTracker=Ze(n))}function Qt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Xe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function F(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pt(n,i){var a=i.checked;return b({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ft(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function it(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Be(n,i){it(n,i);var a=xe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ze(n,i.type,a):i.hasOwnProperty("defaultValue")&&ze(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ze(n,i,a){(i!=="number"||F(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function kt(n,i,a,u){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&u&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Bt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return b({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function M(n,i){var a=xe(i.value),u=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function q(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,Ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(Ue).forEach(function(n){qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ue[i]=Ue[n]})});function Ee(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ue.hasOwnProperty(n)&&Ue[n]?(""+i).trim():i+"px"}function Pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=Ee(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,h):n[a]=h}}var rt=b({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if(rt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ae(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ye=null,we=null,be=null;function _e(n){if(n=Po(n)){if(typeof ye!="function")throw Error(t(280));var i=n.stateNode;i&&(i=La(i),ye(n.stateNode,n.type,i))}}function he(n){we?be?be.push(n):be=[n]:we=n}function He(){if(we){var n=we,i=be;if(be=we=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function ut(n,i){return n(i)}function Rt(){}var yt=!1;function jn(n,i,a){if(yt)return n(i,a);yt=!0;try{return ut(n,i,a)}finally{yt=!1,(we!==null||be!==null)&&(Rt(),He())}}function dn(n,i){var a=n.stateNode;if(a===null)return null;var u=La(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var os=!1;if(f)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){os=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{os=!1}function fo(n,i,a,u,h,m,E,L,O){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(me){this.onError(me)}}var Yi=!1,Cr=null,wi=!1,as=null,ls={onError:function(n){Yi=!0,Cr=n}};function fa(n,i,a,u,h,m,E,L,O){Yi=!1,Cr=null,fo.apply(ls,arguments)}function ha(n,i,a,u,h,m,E,L,O){if(fa.apply(this,arguments),Yi){if(Yi){var Q=Cr;Yi=!1,Cr=null}else throw Error(t(198));wi||(wi=!0,as=Q)}}function Ai(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function da(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function pa(n){if(Ai(n)!==n)throw Error(t(188))}function fu(n){var i=n.alternate;if(!i){if(i=Ai(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return pa(h),n;if(m===u)return pa(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=h,u=m;else{for(var E=!1,L=h.child;L;){if(L===a){E=!0,a=h,u=m;break}if(L===u){E=!0,u=h,a=m;break}L=L.sibling}if(!E){for(L=m.child;L;){if(L===a){E=!0,a=m,u=h;break}if(L===u){E=!0,u=m,a=h;break}L=L.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ma(n){return n=fu(n),n!==null?ga(n):null}function ga(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ga(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Re=e.unstable_ImmediatePriority,Ne=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,nt=e.unstable_LowPriority,st=e.unstable_IdlePriority,$e=null,ot=null;function At(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Qe,Nt=Math.log,Ct=Math.LN2;function Qe(n){return n>>>=0,n===0?32:31-(Nt(n)/Ct|0)|0}var bt=64,gt=4194304;function Jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ri(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,h=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var L=E&~h;L!==0?u=Jt(L):(m&=E,m!==0&&(u=Jt(m)))}else E=a&~h,E!==0?u=Jt(E):m!==0&&(u=Jt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-St(i),h=1<<a,u|=n[a],i&=~h;return u}function Tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pr(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-St(m),L=1<<E,O=h[E];O===-1?((L&a)===0||(L&u)!==0)&&(h[E]=Tn(L,i)):O<=i&&(n.expiredLanes|=L),m&=~L}}function Ft(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function jt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-St(i),n[i]=a}function mn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-St(a),m=1<<h;i[h]=0,u[h]=-1,n[h]=-1,a&=~m}}function br(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-St(a),h=1<<u;h&i|n[u]&i&&(n[u]|=i),a&=~h}}var _t=0;function Gh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wh,hu,Xh,jh,Yh,du=!1,_a=[],qi=null,$i=null,Ki=null,ho=new Map,po=new Map,Zi=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ho.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(i.pointerId)}}function mo(n,i,a,u,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Po(i),i!==null&&hu(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function M_(n,i,a,u,h){switch(i){case"focusin":return qi=mo(qi,n,i,a,u,h),!0;case"dragenter":return $i=mo($i,n,i,a,u,h),!0;case"mouseover":return Ki=mo(Ki,n,i,a,u,h),!0;case"pointerover":var m=h.pointerId;return ho.set(m,mo(ho.get(m)||null,n,i,a,u,h)),!0;case"gotpointercapture":return m=h.pointerId,po.set(m,mo(po.get(m)||null,n,i,a,u,h)),!0}return!1}function $h(n){var i=Dr(n.target);if(i!==null){var a=Ai(i);if(a!==null){if(i=a.tag,i===13){if(i=da(a),i!==null){n.blockedOn=i,Yh(n.priority,function(){Xh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function va(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=mu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ht=u,a.target.dispatchEvent(u),ht=null}else return i=Po(a),i!==null&&hu(i),n.blockedOn=a,!1;i.shift()}return!0}function Kh(n,i,a){va(n)&&a.delete(i)}function T_(){du=!1,qi!==null&&va(qi)&&(qi=null),$i!==null&&va($i)&&($i=null),Ki!==null&&va(Ki)&&(Ki=null),ho.forEach(Kh),po.forEach(Kh)}function go(n,i){n.blockedOn===i&&(n.blockedOn=null,du||(du=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T_)))}function _o(n){function i(h){return go(h,n)}if(0<_a.length){go(_a[0],n);for(var a=1;a<_a.length;a++){var u=_a[a];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&go(qi,n),$i!==null&&go($i,n),Ki!==null&&go(Ki,n),ho.forEach(i),po.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)$h(a),a.blockedOn===null&&Zi.shift()}var us=P.ReactCurrentBatchConfig,xa=!0;function w_(n,i,a,u){var h=_t,m=us.transition;us.transition=null;try{_t=1,pu(n,i,a,u)}finally{_t=h,us.transition=m}}function A_(n,i,a,u){var h=_t,m=us.transition;us.transition=null;try{_t=4,pu(n,i,a,u)}finally{_t=h,us.transition=m}}function pu(n,i,a,u){if(xa){var h=mu(n,i,a,u);if(h===null)Lu(n,i,u,ya,a),qh(n,u);else if(M_(h,n,i,a,u))u.stopPropagation();else if(qh(n,u),i&4&&-1<E_.indexOf(n)){for(;h!==null;){var m=Po(h);if(m!==null&&Wh(m),m=mu(n,i,a,u),m===null&&Lu(n,i,u,ya,a),m===h)break;h=m}h!==null&&u.stopPropagation()}else Lu(n,i,u,null,a)}}var ya=null;function mu(n,i,a,u){if(ya=null,n=V(u),n=Dr(n),n!==null)if(i=Ai(n),i===null)n=null;else if(a=i.tag,a===13){if(n=da(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ya=n,null}function Zh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Re:return 1;case Ne:return 4;case De:case nt:return 16;case st:return 536870912;default:return 16}default:return 16}}var Qi=null,gu=null,Sa=null;function Qh(){if(Sa)return Sa;var n,i=gu,a=i.length,u,h="value"in Qi?Qi.value:Qi.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(u=1;u<=E&&i[a-u]===h[m-u];u++);return Sa=h.slice(n,1<u?1-u:void 0)}function Ea(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ma(){return!0}function Jh(){return!1}function Bn(n){function i(a,u,h,m,E){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ma:Jh,this.isPropagationStopped=Jh,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ma)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ma)},persist:function(){},isPersistent:Ma}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Bn(cs),vo=b({},cs,{view:0,detail:0}),R_=Bn(vo),vu,xu,xo,Ta=b({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xo&&(xo&&n.type==="mousemove"?(vu=n.screenX-xo.screenX,xu=n.screenY-xo.screenY):xu=vu=0,xo=n),vu)},movementY:function(n){return"movementY"in n?n.movementY:xu}}),ed=Bn(Ta),C_=b({},Ta,{dataTransfer:0}),P_=Bn(C_),b_=b({},vo,{relatedTarget:0}),yu=Bn(b_),D_=b({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Bn(D_),I_=b({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),U_=Bn(I_),N_=b({},cs,{data:0}),td=Bn(N_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=k_[n])?!!i[n]:!1}function Su(){return B_}var z_=b({},vo,{key:function(n){if(n.key){var i=F_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Su,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),H_=Bn(z_),V_=b({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=Bn(V_),G_=b({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Su}),W_=Bn(G_),X_=b({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Bn(X_),Y_=b({},Ta,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=Bn(Y_),$_=[9,13,27,32],Eu=f&&"CompositionEvent"in window,yo=null;f&&"documentMode"in document&&(yo=document.documentMode);var K_=f&&"TextEvent"in window&&!yo,id=f&&(!Eu||yo&&8<yo&&11>=yo),rd=" ",sd=!1;function od(n,i){switch(n){case"keyup":return $_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var fs=!1;function Z_(n,i){switch(n){case"compositionend":return ad(i);case"keypress":return i.which!==32?null:(sd=!0,rd);case"textInput":return n=i.data,n===rd&&sd?null:n;default:return null}}function Q_(n,i){if(fs)return n==="compositionend"||!Eu&&od(n,i)?(n=Qh(),Sa=gu=Qi=null,fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return id&&i.locale!=="ko"?null:i.data;default:return null}}var J_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!J_[n.type]:i==="textarea"}function ud(n,i,a,u){he(u),i=Pa(i,"onChange"),0<i.length&&(a=new _u("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var So=null,Eo=null;function ev(n){Rd(n,0)}function wa(n){var i=gs(n);if(Qt(i))return n}function tv(n,i){if(n==="change")return i}var cd=!1;if(f){var Mu;if(f){var Tu="oninput"in document;if(!Tu){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Tu=typeof fd.oninput=="function"}Mu=Tu}else Mu=!1;cd=Mu&&(!document.documentMode||9<document.documentMode)}function hd(){So&&(So.detachEvent("onpropertychange",dd),Eo=So=null)}function dd(n){if(n.propertyName==="value"&&wa(Eo)){var i=[];ud(i,Eo,n,V(n)),jn(ev,i)}}function nv(n,i,a){n==="focusin"?(hd(),So=i,Eo=a,So.attachEvent("onpropertychange",dd)):n==="focusout"&&hd()}function iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wa(Eo)}function rv(n,i){if(n==="click")return wa(i)}function sv(n,i){if(n==="input"||n==="change")return wa(i)}function ov(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:ov;function Mo(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!d.call(i,h)||!si(n[h],i[h]))return!1}return!0}function pd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function md(n,i){var a=pd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=pd(a)}}function gd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?gd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function _d(){for(var n=window,i=F();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=F(n.document)}return i}function wu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function av(n){var i=_d(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&gd(a.ownerDocument.documentElement,a)){if(u!==null&&wu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!n.extend&&m>u&&(h=u,u=m,m=h),h=md(a,m);var E=md(a,u);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lv=f&&"documentMode"in document&&11>=document.documentMode,hs=null,Au=null,To=null,Ru=!1;function vd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ru||hs==null||hs!==F(u)||(u=hs,"selectionStart"in u&&wu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),To&&Mo(To,u)||(To=u,u=Pa(Au,"onSelect"),0<u.length&&(i=new _u("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=hs)))}function Aa(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ds={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},Cu={},xd={};f&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ra(n){if(Cu[n])return Cu[n];if(!ds[n])return n;var i=ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xd)return Cu[n]=i[a];return n}var yd=Ra("animationend"),Sd=Ra("animationiteration"),Ed=Ra("animationstart"),Md=Ra("transitionend"),Td=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){Td.set(n,i),l(i,[n])}for(var Pu=0;Pu<wd.length;Pu++){var bu=wd[Pu],uv=bu.toLowerCase(),cv=bu[0].toUpperCase()+bu.slice(1);Ji(uv,"on"+cv)}Ji(yd,"onAnimationEnd"),Ji(Sd,"onAnimationIteration"),Ji(Ed,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(Md,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Ad(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ha(u,i,void 0,n),n.currentTarget=null}function Rd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var L=u[E],O=L.instance,Q=L.currentTarget;if(L=L.listener,O!==m&&h.isPropagationStopped())break e;Ad(h,L,Q),m=O}else for(E=0;E<u.length;E++){if(L=u[E],O=L.instance,Q=L.currentTarget,L=L.listener,O!==m&&h.isPropagationStopped())break e;Ad(h,L,Q),m=O}}}if(wi)throw n=as,wi=!1,as=null,n}function zt(n,i){var a=i[ku];a===void 0&&(a=i[ku]=new Set);var u=n+"__bubble";a.has(u)||(Cd(i,n,2,!1),a.add(u))}function Du(n,i,a){var u=0;i&&(u|=4),Cd(a,n,u,i)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function Ao(n){if(!n[Ca]){n[Ca]=!0,r.forEach(function(a){a!=="selectionchange"&&(fv.has(a)||Du(a,!1,n),Du(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ca]||(i[Ca]=!0,Du("selectionchange",!1,i))}}function Cd(n,i,a,u){switch(Zh(i)){case 1:var h=w_;break;case 4:h=A_;break;default:h=pu}a=h.bind(null,i,a,n),h=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Lu(n,i,a,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var L=u.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;E=E.return}for(;L!==null;){if(E=Dr(L),E===null)return;if(O=E.tag,O===5||O===6){u=m=E;continue e}L=L.parentNode}}u=u.return}jn(function(){var Q=m,me=V(a),ge=[];e:{var de=Td.get(n);if(de!==void 0){var Le=_u,Fe=n;switch(n){case"keypress":if(Ea(a)===0)break e;case"keydown":case"keyup":Le=H_;break;case"focusin":Fe="focus",Le=yu;break;case"focusout":Fe="blur",Le=yu;break;case"beforeblur":case"afterblur":Le=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=W_;break;case yd:case Sd:case Ed:Le=L_;break;case Md:Le=j_;break;case"scroll":Le=R_;break;case"wheel":Le=q_;break;case"copy":case"cut":case"paste":Le=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=nd}var Ve=(i&4)!==0,Yt=!Ve&&n==="scroll",Y=Ve?de!==null?de+"Capture":null:de;Ve=[];for(var G=Q,Z;G!==null;){Z=G;var Me=Z.stateNode;if(Z.tag===5&&Me!==null&&(Z=Me,Y!==null&&(Me=dn(G,Y),Me!=null&&Ve.push(Ro(G,Me,Z)))),Yt)break;G=G.return}0<Ve.length&&(de=new Le(de,Fe,null,a,me),ge.push({event:de,listeners:Ve}))}}if((i&7)===0){e:{if(de=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",de&&a!==ht&&(Fe=a.relatedTarget||a.fromElement)&&(Dr(Fe)||Fe[Ri]))break e;if((Le||de)&&(de=me.window===me?me:(de=me.ownerDocument)?de.defaultView||de.parentWindow:window,Le?(Fe=a.relatedTarget||a.toElement,Le=Q,Fe=Fe?Dr(Fe):null,Fe!==null&&(Yt=Ai(Fe),Fe!==Yt||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(Le=null,Fe=Q),Le!==Fe)){if(Ve=ed,Me="onMouseLeave",Y="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=nd,Me="onPointerLeave",Y="onPointerEnter",G="pointer"),Yt=Le==null?de:gs(Le),Z=Fe==null?de:gs(Fe),de=new Ve(Me,G+"leave",Le,a,me),de.target=Yt,de.relatedTarget=Z,Me=null,Dr(me)===Q&&(Ve=new Ve(Y,G+"enter",Fe,a,me),Ve.target=Z,Ve.relatedTarget=Yt,Me=Ve),Yt=Me,Le&&Fe)t:{for(Ve=Le,Y=Fe,G=0,Z=Ve;Z;Z=ps(Z))G++;for(Z=0,Me=Y;Me;Me=ps(Me))Z++;for(;0<G-Z;)Ve=ps(Ve),G--;for(;0<Z-G;)Y=ps(Y),Z--;for(;G--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=ps(Ve),Y=ps(Y)}Ve=null}else Ve=null;Le!==null&&Pd(ge,de,Le,Ve,!1),Fe!==null&&Yt!==null&&Pd(ge,Yt,Fe,Ve,!0)}}e:{if(de=Q?gs(Q):window,Le=de.nodeName&&de.nodeName.toLowerCase(),Le==="select"||Le==="input"&&de.type==="file")var je=tv;else if(ld(de))if(cd)je=sv;else{je=iv;var et=nv}else(Le=de.nodeName)&&Le.toLowerCase()==="input"&&(de.type==="checkbox"||de.type==="radio")&&(je=rv);if(je&&(je=je(n,Q))){ud(ge,je,a,me);break e}et&&et(n,de,Q),n==="focusout"&&(et=de._wrapperState)&&et.controlled&&de.type==="number"&&ze(de,"number",de.value)}switch(et=Q?gs(Q):window,n){case"focusin":(ld(et)||et.contentEditable==="true")&&(hs=et,Au=Q,To=null);break;case"focusout":To=Au=hs=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,vd(ge,a,me);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":vd(ge,a,me)}var tt;if(Eu)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else fs?od(n,a)&&(at="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(id&&a.locale!=="ko"&&(fs||at!=="onCompositionStart"?at==="onCompositionEnd"&&fs&&(tt=Qh()):(Qi=me,gu="value"in Qi?Qi.value:Qi.textContent,fs=!0)),et=Pa(Q,at),0<et.length&&(at=new td(at,n,null,a,me),ge.push({event:at,listeners:et}),tt?at.data=tt:(tt=ad(a),tt!==null&&(at.data=tt)))),(tt=K_?Z_(n,a):Q_(n,a))&&(Q=Pa(Q,"onBeforeInput"),0<Q.length&&(me=new td("onBeforeInput","beforeinput",null,a,me),ge.push({event:me,listeners:Q}),me.data=tt))}Rd(ge,i)})}function Ro(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Pa(n,i){for(var a=i+"Capture",u=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=dn(n,a),m!=null&&u.unshift(Ro(n,m,h)),m=dn(n,i),m!=null&&u.push(Ro(n,m,h))),n=n.return}return u}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Pd(n,i,a,u,h){for(var m=i._reactName,E=[];a!==null&&a!==u;){var L=a,O=L.alternate,Q=L.stateNode;if(O!==null&&O===u)break;L.tag===5&&Q!==null&&(L=Q,h?(O=dn(a,m),O!=null&&E.unshift(Ro(a,O,L))):h||(O=dn(a,m),O!=null&&E.push(Ro(a,O,L)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var hv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function bd(n){return(typeof n=="string"?n:""+n).replace(hv,`
`).replace(dv,"")}function ba(n,i,a){if(i=bd(i),bd(n)!==i&&a)throw Error(t(425))}function Da(){}var Iu=null,Uu=null;function Nu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fu=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(n){return Dd.resolve(null).then(n).catch(gv)}:Fu;function gv(n){setTimeout(function(){throw n})}function Ou(n,i){var a=i,u=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){n.removeChild(h),_o(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);_o(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ld(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),gi="__reactFiber$"+ms,Co="__reactProps$"+ms,Ri="__reactContainer$"+ms,ku="__reactEvents$"+ms,_v="__reactListeners$"+ms,vv="__reactHandles$"+ms;function Dr(n){var i=n[gi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ld(n);n!==null;){if(a=n[gi])return a;n=Ld(n)}return i}n=a,a=n.parentNode}return null}function Po(n){return n=n[gi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function La(n){return n[Co]||null}var Bu=[],_s=-1;function tr(n){return{current:n}}function Ht(n){0>_s||(n.current=Bu[_s],Bu[_s]=null,_s--)}function Ot(n,i){_s++,Bu[_s]=n.current,n.current=i}var nr={},gn=tr(nr),bn=tr(!1),Lr=nr;function vs(n,i){var a=n.type.contextTypes;if(!a)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Dn(n){return n=n.childContextTypes,n!=null}function Ia(){Ht(bn),Ht(gn)}function Id(n,i,a){if(gn.current!==nr)throw Error(t(168));Ot(gn,i),Ot(bn,a)}function Ud(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,se(n)||"Unknown",h));return b({},a,u)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Lr=gn.current,Ot(gn,n),Ot(bn,bn.current),!0}function Nd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Ud(n,i,Lr),u.__reactInternalMemoizedMergedChildContext=n,Ht(bn),Ht(gn),Ot(gn,n)):Ht(bn),Ot(bn,a)}var Ci=null,Na=!1,zu=!1;function Fd(n){Ci===null?Ci=[n]:Ci.push(n)}function xv(n){Na=!0,Fd(n)}function ir(){if(!zu&&Ci!==null){zu=!0;var n=0,i=_t;try{var a=Ci;for(_t=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ci=null,Na=!1}catch(h){throw Ci!==null&&(Ci=Ci.slice(n+1)),A(Re,ir),h}finally{_t=i,zu=!1}}return null}var xs=[],ys=0,Fa=null,Oa=0,Yn=[],qn=0,Ir=null,Pi=1,bi="";function Ur(n,i){xs[ys++]=Oa,xs[ys++]=Fa,Fa=n,Oa=i}function Od(n,i,a){Yn[qn++]=Pi,Yn[qn++]=bi,Yn[qn++]=Ir,Ir=n;var u=Pi;n=bi;var h=32-St(u)-1;u&=~(1<<h),a+=1;var m=32-St(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Pi=1<<32-St(i)+h|a<<h|u,bi=m+n}else Pi=1<<m|a<<h|u,bi=n}function Hu(n){n.return!==null&&(Ur(n,1),Od(n,1,0))}function Vu(n){for(;n===Fa;)Fa=xs[--ys],xs[ys]=null,Oa=xs[--ys],xs[ys]=null;for(;n===Ir;)Ir=Yn[--qn],Yn[qn]=null,bi=Yn[--qn],Yn[qn]=null,Pi=Yn[--qn],Yn[qn]=null}var zn=null,Hn=null,Vt=!1,oi=null;function kd(n,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Bd(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Hn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Pi,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Hn=null,!0):!1;default:return!1}}function Gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wu(n){if(Vt){var i=Hn;if(i){var a=i;if(!Bd(n,i)){if(Gu(n))throw Error(t(418));i=er(a.nextSibling);var u=zn;i&&Bd(n,i)?kd(u,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(Gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function zd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function ka(n){if(n!==zn)return!1;if(!Vt)return zd(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Nu(n.type,n.memoizedProps)),i&&(i=Hn)){if(Gu(n))throw Hd(),Error(t(418));for(;i;)kd(n,i),i=er(i.nextSibling)}if(zd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Hn=er(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Hn=null}}else Hn=zn?er(n.stateNode.nextSibling):null;return!0}function Hd(){for(var n=Hn;n;)n=er(n.nextSibling)}function Ss(){Hn=zn=null,Vt=!1}function Xu(n){oi===null?oi=[n]:oi.push(n)}var yv=P.ReactCurrentBatchConfig;function ai(n,i){if(n&&n.defaultProps){i=b({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}var Ba=tr(null),za=null,Es=null,ju=null;function Yu(){ju=Es=za=null}function qu(n){var i=Ba.current;Ht(Ba),n._currentValue=i}function $u(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Ms(n,i){za=n,ju=Es=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(ju!==n)if(n={context:n,memoizedValue:i,next:null},Es===null){if(za===null)throw Error(t(308));Es=n,za.dependencies={lanes:0,firstContext:n}}else Es=Es.next=n;return i}var Nr=null;function Ku(n){Nr===null?Nr=[n]:Nr.push(n)}function Vd(n,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Ku(i)):(a.next=h.next,h.next=a),i.interleaved=a,Di(n,u)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var rr=!1;function Zu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Et&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Di(n,a)}return h=u.interleaved,h===null?(i.next=i,Ku(u)):(i.next=h.next,h.next=i),u.interleaved=i,Di(n,a)}function Ha(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,br(n,a)}}function Wd(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Va(n,i,a,u){var h=n.updateQueue;rr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var O=L,Q=O.next;O.next=null,E===null?m=Q:E.next=Q,E=O;var me=n.alternate;me!==null&&(me=me.updateQueue,L=me.lastBaseUpdate,L!==E&&(L===null?me.firstBaseUpdate=Q:L.next=Q,me.lastBaseUpdate=O))}if(m!==null){var ge=h.baseState;E=0,me=Q=O=null,L=m;do{var de=L.lane,Le=L.eventTime;if((u&de)===de){me!==null&&(me=me.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Fe=n,Ve=L;switch(de=i,Le=a,Ve.tag){case 1:if(Fe=Ve.payload,typeof Fe=="function"){ge=Fe.call(Le,ge,de);break e}ge=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Ve.payload,de=typeof Fe=="function"?Fe.call(Le,ge,de):Fe,de==null)break e;ge=b({},ge,de);break e;case 2:rr=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,de=h.effects,de===null?h.effects=[L]:de.push(L))}else Le={eventTime:Le,lane:de,tag:L.tag,payload:L.payload,callback:L.callback,next:null},me===null?(Q=me=Le,O=ge):me=me.next=Le,E|=de;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;de=L,L=de.next,de.next=null,h.lastBaseUpdate=de,h.shared.pending=null}}while(!0);if(me===null&&(O=ge),h.baseState=O,h.firstBaseUpdate=Q,h.lastBaseUpdate=me,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);kr|=E,n.lanes=E,n.memoizedState=ge}}function Xd(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var jd=new s.Component().refs;function Qu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:b({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ga={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Rn(),h=ur(n),m=Li(u,h);m.payload=i,a!=null&&(m.callback=a),i=sr(n,m,h),i!==null&&(ci(i,n,h,u),Ha(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Rn(),h=ur(n),m=Li(u,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=sr(n,m,h),i!==null&&(ci(i,n,h,u),Ha(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Rn(),u=ur(n),h=Li(a,u);h.tag=2,i!=null&&(h.callback=i),i=sr(n,h,u),i!==null&&(ci(i,n,u,a),Ha(i,n,u))}};function Yd(n,i,a,u,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!Mo(a,u)||!Mo(h,m):!0}function qd(n,i,a){var u=!1,h=nr,m=i.contextType;return typeof m=="object"&&m!==null?m=$n(m):(h=Dn(i)?Lr:gn.current,u=i.contextTypes,m=(u=u!=null)?vs(n,h):nr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ga,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function $d(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Ga.enqueueReplaceState(i,i.state,null)}function Ju(n,i,a,u){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs=jd,Zu(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=$n(m):(m=Dn(i)?Lr:gn.current,h.context=vs(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Qu(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ga.enqueueReplaceState(h,h.state,null),Va(n,a,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var h=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var L=h.refs;L===jd&&(L=h.refs={}),E===null?delete L[m]:L[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Kd(n){var i=n._init;return i(n._payload)}function Zd(n){function i(Y,G){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[G],Y.flags|=16):Z.push(G)}}function a(Y,G){if(!n)return null;for(;G!==null;)i(Y,G),G=G.sibling;return null}function u(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function h(Y,G){return Y=fr(Y,G),Y.index=0,Y.sibling=null,Y}function m(Y,G,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<G?(Y.flags|=2,G):Z):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,G,Z,Me){return G===null||G.tag!==6?(G=Fc(Z,Y.mode,Me),G.return=Y,G):(G=h(G,Z),G.return=Y,G)}function O(Y,G,Z,Me){var je=Z.type;return je===I?me(Y,G,Z.props.children,Me,Z.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Kd(je)===G.type)?(Me=h(G,Z.props),Me.ref=bo(Y,G,Z),Me.return=Y,Me):(Me=ul(Z.type,Z.key,Z.props,null,Y.mode,Me),Me.ref=bo(Y,G,Z),Me.return=Y,Me)}function Q(Y,G,Z,Me){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=Oc(Z,Y.mode,Me),G.return=Y,G):(G=h(G,Z.children||[]),G.return=Y,G)}function me(Y,G,Z,Me,je){return G===null||G.tag!==7?(G=Vr(Z,Y.mode,Me,je),G.return=Y,G):(G=h(G,Z),G.return=Y,G)}function ge(Y,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=Fc(""+G,Y.mode,Z),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case z:return Z=ul(G.type,G.key,G.props,null,Y.mode,Z),Z.ref=bo(Y,null,G),Z.return=Y,Z;case k:return G=Oc(G,Y.mode,Z),G.return=Y,G;case ae:var Me=G._init;return ge(Y,Me(G._payload),Z)}if(lt(G)||oe(G))return G=Vr(G,Y.mode,Z,null),G.return=Y,G;Wa(Y,G)}return null}function de(Y,G,Z,Me){var je=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:L(Y,G,""+Z,Me);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:return Z.key===je?O(Y,G,Z,Me):null;case k:return Z.key===je?Q(Y,G,Z,Me):null;case ae:return je=Z._init,de(Y,G,je(Z._payload),Me)}if(lt(Z)||oe(Z))return je!==null?null:me(Y,G,Z,Me,null);Wa(Y,Z)}return null}function Le(Y,G,Z,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Y=Y.get(Z)||null,L(G,Y,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case z:return Y=Y.get(Me.key===null?Z:Me.key)||null,O(G,Y,Me,je);case k:return Y=Y.get(Me.key===null?Z:Me.key)||null,Q(G,Y,Me,je);case ae:var et=Me._init;return Le(Y,G,Z,et(Me._payload),je)}if(lt(Me)||oe(Me))return Y=Y.get(Z)||null,me(G,Y,Me,je,null);Wa(G,Me)}return null}function Fe(Y,G,Z,Me){for(var je=null,et=null,tt=G,at=G=0,un=null;tt!==null&&at<Z.length;at++){tt.index>at?(un=tt,tt=null):un=tt.sibling;var Mt=de(Y,tt,Z[at],Me);if(Mt===null){tt===null&&(tt=un);break}n&&tt&&Mt.alternate===null&&i(Y,tt),G=m(Mt,G,at),et===null?je=Mt:et.sibling=Mt,et=Mt,tt=un}if(at===Z.length)return a(Y,tt),Vt&&Ur(Y,at),je;if(tt===null){for(;at<Z.length;at++)tt=ge(Y,Z[at],Me),tt!==null&&(G=m(tt,G,at),et===null?je=tt:et.sibling=tt,et=tt);return Vt&&Ur(Y,at),je}for(tt=u(Y,tt);at<Z.length;at++)un=Le(tt,Y,at,Z[at],Me),un!==null&&(n&&un.alternate!==null&&tt.delete(un.key===null?at:un.key),G=m(un,G,at),et===null?je=un:et.sibling=un,et=un);return n&&tt.forEach(function(hr){return i(Y,hr)}),Vt&&Ur(Y,at),je}function Ve(Y,G,Z,Me){var je=oe(Z);if(typeof je!="function")throw Error(t(150));if(Z=je.call(Z),Z==null)throw Error(t(151));for(var et=je=null,tt=G,at=G=0,un=null,Mt=Z.next();tt!==null&&!Mt.done;at++,Mt=Z.next()){tt.index>at?(un=tt,tt=null):un=tt.sibling;var hr=de(Y,tt,Mt.value,Me);if(hr===null){tt===null&&(tt=un);break}n&&tt&&hr.alternate===null&&i(Y,tt),G=m(hr,G,at),et===null?je=hr:et.sibling=hr,et=hr,tt=un}if(Mt.done)return a(Y,tt),Vt&&Ur(Y,at),je;if(tt===null){for(;!Mt.done;at++,Mt=Z.next())Mt=ge(Y,Mt.value,Me),Mt!==null&&(G=m(Mt,G,at),et===null?je=Mt:et.sibling=Mt,et=Mt);return Vt&&Ur(Y,at),je}for(tt=u(Y,tt);!Mt.done;at++,Mt=Z.next())Mt=Le(tt,Y,at,Mt.value,Me),Mt!==null&&(n&&Mt.alternate!==null&&tt.delete(Mt.key===null?at:Mt.key),G=m(Mt,G,at),et===null?je=Mt:et.sibling=Mt,et=Mt);return n&&tt.forEach(function(Jv){return i(Y,Jv)}),Vt&&Ur(Y,at),je}function Yt(Y,G,Z,Me){if(typeof Z=="object"&&Z!==null&&Z.type===I&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case z:e:{for(var je=Z.key,et=G;et!==null;){if(et.key===je){if(je=Z.type,je===I){if(et.tag===7){a(Y,et.sibling),G=h(et,Z.props.children),G.return=Y,Y=G;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&Kd(je)===et.type){a(Y,et.sibling),G=h(et,Z.props),G.ref=bo(Y,et,Z),G.return=Y,Y=G;break e}a(Y,et);break}else i(Y,et);et=et.sibling}Z.type===I?(G=Vr(Z.props.children,Y.mode,Me,Z.key),G.return=Y,Y=G):(Me=ul(Z.type,Z.key,Z.props,null,Y.mode,Me),Me.ref=bo(Y,G,Z),Me.return=Y,Y=Me)}return E(Y);case k:e:{for(et=Z.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(Y,G.sibling),G=h(G,Z.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else i(Y,G);G=G.sibling}G=Oc(Z,Y.mode,Me),G.return=Y,Y=G}return E(Y);case ae:return et=Z._init,Yt(Y,G,et(Z._payload),Me)}if(lt(Z))return Fe(Y,G,Z,Me);if(oe(Z))return Ve(Y,G,Z,Me);Wa(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(a(Y,G.sibling),G=h(G,Z),G.return=Y,Y=G):(a(Y,G),G=Fc(Z,Y.mode,Me),G.return=Y,Y=G),E(Y)):a(Y,G)}return Yt}var Ts=Zd(!0),Qd=Zd(!1),Do={},_i=tr(Do),Lo=tr(Do),Io=tr(Do);function Fr(n){if(n===Do)throw Error(t(174));return n}function ec(n,i){switch(Ot(Io,i),Ot(Lo,n),Ot(_i,Do),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}Ht(_i),Ot(_i,i)}function ws(){Ht(_i),Ht(Lo),Ht(Io)}function Jd(n){Fr(Io.current);var i=Fr(_i.current),a=pe(i,n.type);i!==a&&(Ot(Lo,n),Ot(_i,a))}function tc(n){Lo.current===n&&(Ht(_i),Ht(Lo))}var Gt=tr(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nc=[];function ic(){for(var n=0;n<nc.length;n++)nc[n]._workInProgressVersionPrimary=null;nc.length=0}var ja=P.ReactCurrentDispatcher,rc=P.ReactCurrentBatchConfig,Or=0,Wt=null,en=null,an=null,Ya=!1,Uo=!1,No=0,Sv=0;function _n(){throw Error(t(321))}function sc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function oc(n,i,a,u,h,m){if(Or=m,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ja.current=n===null||n.memoizedState===null?wv:Av,n=a(u,h),Uo){m=0;do{if(Uo=!1,No=0,25<=m)throw Error(t(301));m+=1,an=en=null,i.updateQueue=null,ja.current=Rv,n=a(u,h)}while(Uo)}if(ja.current=Ka,i=en!==null&&en.next!==null,Or=0,an=en=Wt=null,Ya=!1,i)throw Error(t(300));return n}function ac(){var n=No!==0;return No=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?Wt.memoizedState=an=n:an=an.next=n,an}function Kn(){if(en===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=an===null?Wt.memoizedState:an.next;if(i!==null)an=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},an===null?Wt.memoizedState=an=n:an=an.next=n}return an}function Fo(n,i){return typeof i=="function"?i(n):i}function lc(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=en,h=u.baseQueue,m=a.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}u.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,u=u.baseState;var L=E=null,O=null,Q=m;do{var me=Q.lane;if((Or&me)===me)O!==null&&(O=O.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),u=Q.hasEagerState?Q.eagerState:n(u,Q.action);else{var ge={lane:me,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};O===null?(L=O=ge,E=u):O=O.next=ge,Wt.lanes|=me,kr|=me}Q=Q.next}while(Q!==null&&Q!==m);O===null?E=u:O.next=L,si(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=E,i.baseQueue=O,a.lastRenderedState=u}if(n=a.interleaved,n!==null){h=n;do m=h.lane,Wt.lanes|=m,kr|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function uc(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);si(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function ep(){}function tp(n,i){var a=Wt,u=Kn(),h=i(),m=!si(u.memoizedState,h);if(m&&(u.memoizedState=h,Ln=!0),u=u.queue,cc(rp.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Oo(9,ip.bind(null,a,u,h,i),void 0,null),ln===null)throw Error(t(349));(Or&30)!==0||np(a,i,h)}return h}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,u){i.value=a,i.getSnapshot=u,sp(i)&&op(n)}function rp(n,i,a){return a(function(){sp(i)&&op(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function op(n){var i=Di(n,1);i!==null&&ci(i,n,1,-1)}function ap(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:n},i.queue=n,n=n.dispatch=Tv.bind(null,Wt,n),[i.memoizedState,n]}function Oo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function lp(){return Kn().memoizedState}function qa(n,i,a,u){var h=vi();Wt.flags|=n,h.memoizedState=Oo(1|i,a,void 0,u===void 0?null:u)}function $a(n,i,a,u){var h=Kn();u=u===void 0?null:u;var m=void 0;if(en!==null){var E=en.memoizedState;if(m=E.destroy,u!==null&&sc(u,E.deps)){h.memoizedState=Oo(i,a,m,u);return}}Wt.flags|=n,h.memoizedState=Oo(1|i,a,m,u)}function up(n,i){return qa(8390656,8,n,i)}function cc(n,i){return $a(2048,8,n,i)}function cp(n,i){return $a(4,2,n,i)}function fp(n,i){return $a(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,a){return a=a!=null?a.concat([n]):null,$a(4,4,hp.bind(null,i,n),a)}function fc(){}function pp(n,i){var a=Kn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&sc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=Kn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&sc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=a):(si(a,i)||(a=wn(),Wt.lanes|=a,kr|=a,n.baseState=!0),i)}function Ev(n,i){var a=_t;_t=a!==0&&4>a?a:4,n(!0);var u=rc.transition;rc.transition={};try{n(!1),i()}finally{_t=a,rc.transition=u}}function _p(){return Kn().memoizedState}function Mv(n,i,a){var u=ur(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))xp(i,a);else if(a=Vd(n,i,a,u),a!==null){var h=Rn();ci(a,n,u,h),yp(a,i,u)}}function Tv(n,i,a){var u=ur(n),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))xp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,L=m(E,a);if(h.hasEagerState=!0,h.eagerState=L,si(L,E)){var O=i.interleaved;O===null?(h.next=h,Ku(i)):(h.next=O.next,O.next=h),i.interleaved=h;return}}catch{}finally{}a=Vd(n,i,h,u),a!==null&&(h=Rn(),ci(a,n,u,h),yp(a,i,u))}}function vp(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function xp(n,i){Uo=Ya=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,br(n,a)}}var Ka={readContext:$n,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},wv={readContext:$n,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qa(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return qa(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Mv.bind(null,Wt,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:ap,useDebugValue:fc,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=ap(!1),i=n[0];return n=Ev.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Wt,h=vi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(Or&30)!==0||np(u,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,up(rp.bind(null,u,m,n),[n]),u.flags|=2048,Oo(9,ip.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=vi(),i=ln.identifierPrefix;if(Vt){var a=bi,u=Pi;a=(u&~(1<<32-St(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=No++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Av={readContext:$n,useCallback:pp,useContext:$n,useEffect:cc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:lc,useRef:lp,useState:function(){return lc(Fo)},useDebugValue:fc,useDeferredValue:function(n){var i=Kn();return gp(i,en.memoizedState,n)},useTransition:function(){var n=lc(Fo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1},Rv={readContext:$n,useCallback:pp,useContext:$n,useEffect:cc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:uc,useRef:lp,useState:function(){return uc(Fo)},useDebugValue:fc,useDeferredValue:function(n){var i=Kn();return en===null?i.memoizedState=n:gp(i,en.memoizedState,n)},useTransition:function(){var n=uc(Fo)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:_p,unstable_isNewReconciler:!1};function As(n,i){try{var a="",u=i;do a+=Ke(u),u=u.return;while(u);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function hc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function dc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){il||(il=!0,Cc=u),dc(n,i)},a}function Ep(n,i,a){a=Li(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){dc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){dc(n,i),typeof u!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Mp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Cv;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),n=Vv.bind(null,n,i,a),i.then(n,n))}function Tp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function wp(n,i,a,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Pv=P.ReactCurrentOwner,Ln=!1;function An(n,i,a,u){i.child=n===null?Qd(i,null,a,u):Ts(i,n.child,a,u)}function Ap(n,i,a,u,h){a=a.render;var m=i.ref;return Ms(i,h),u=oc(n,i,a,u,m,h),a=ac(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(Vt&&a&&Hu(i),i.flags|=1,An(n,i,u,h),i.child)}function Rp(n,i,a,u,h){if(n===null){var m=a.type;return typeof m=="function"&&!Nc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Cp(n,i,m,u,h)):(n=ul(a.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(E,u)&&n.ref===i.ref)return Ii(n,i,h)}return i.flags|=1,n=fr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Cp(n,i,a,u,h){if(n!==null){var m=n.memoizedProps;if(Mo(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Ii(n,i,h)}return pc(n,i,a,u,h)}function Pp(n,i,a){var u=i.pendingProps,h=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(Cs,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ot(Cs,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Ot(Cs,Vn),Vn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Ot(Cs,Vn),Vn|=u;return An(n,i,h,a),i.child}function bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function pc(n,i,a,u,h){var m=Dn(a)?Lr:gn.current;return m=vs(i,m),Ms(i,h),a=oc(n,i,a,u,m,h),u=ac(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(Vt&&u&&Hu(i),i.flags|=1,An(n,i,a,h),i.child)}function Dp(n,i,a,u,h){if(Dn(a)){var m=!0;Ua(i)}else m=!1;if(Ms(i,h),i.stateNode===null)Qa(n,i),qd(i,a,u),Ju(i,a,u,h),u=!0;else if(n===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var O=E.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=$n(Q):(Q=Dn(a)?Lr:gn.current,Q=vs(i,Q));var me=a.getDerivedStateFromProps,ge=typeof me=="function"||typeof E.getSnapshotBeforeUpdate=="function";ge||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==u||O!==Q)&&$d(i,E,u,Q),rr=!1;var de=i.memoizedState;E.state=de,Va(i,u,E,h),O=i.memoizedState,L!==u||de!==O||bn.current||rr?(typeof me=="function"&&(Qu(i,a,me,u),O=i.memoizedState),(L=rr||Yd(i,a,L,u,de,O,Q))?(ge||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),E.props=u,E.state=O,E.context=Q,u=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{E=i.stateNode,Gd(n,i),L=i.memoizedProps,Q=i.type===i.elementType?L:ai(i.type,L),E.props=Q,ge=i.pendingProps,de=E.context,O=a.contextType,typeof O=="object"&&O!==null?O=$n(O):(O=Dn(a)?Lr:gn.current,O=vs(i,O));var Le=a.getDerivedStateFromProps;(me=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==ge||de!==O)&&$d(i,E,u,O),rr=!1,de=i.memoizedState,E.state=de,Va(i,u,E,h);var Fe=i.memoizedState;L!==ge||de!==Fe||bn.current||rr?(typeof Le=="function"&&(Qu(i,a,Le,u),Fe=i.memoizedState),(Q=rr||Yd(i,a,Q,u,de,Fe,O)||!1)?(me||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(u,Fe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(u,Fe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Fe),E.props=u,E.state=Fe,E.context=O,u=Q):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&de===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&de===n.memoizedState||(i.flags|=1024),u=!1)}return mc(n,i,a,u,m,h)}function mc(n,i,a,u,h,m){bp(n,i);var E=(i.flags&128)!==0;if(!u&&!E)return h&&Nd(i,a,!1),Ii(n,i,m);u=i.stateNode,Pv.current=i;var L=E&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&E?(i.child=Ts(i,n.child,null,m),i.child=Ts(i,null,L,m)):An(n,i,L,m),i.memoizedState=u.state,h&&Nd(i,a,!0),i.child}function Lp(n){var i=n.stateNode;i.pendingContext?Id(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Id(n,i.context,!1),ec(n,i.containerInfo)}function Ip(n,i,a,u,h){return Ss(),Xu(h),i.flags|=256,An(n,i,a,u),i.child}var gc={dehydrated:null,treeContext:null,retryLane:0};function _c(n){return{baseLanes:n,cachePool:null,transitions:null}}function Up(n,i,a){var u=i.pendingProps,h=Gt.current,m=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=n!==null&&n.memoizedState===null?!1:(h&2)!==0),L?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ot(Gt,h&1),n===null)return Wu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=u.children,n=u.fallback,m?(u=i.mode,m=i.child,E={mode:"hidden",children:E},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=cl(E,u,0,null),n=Vr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=_c(a),i.memoizedState=gc,n):vc(i,E));if(h=n.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return bv(n,i,E,u,L,h,a);if(m){m=u.fallback,E=i.mode,h=n.child,L=h.sibling;var O={mode:"hidden",children:u.children};return(E&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=fr(h,O),u.subtreeFlags=h.subtreeFlags&14680064),L!==null?m=fr(L,m):(m=Vr(m,E,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,E=n.child.memoizedState,E=E===null?_c(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=gc,u}return m=n.child,n=m.sibling,u=fr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function vc(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Za(n,i,a,u){return u!==null&&Xu(u),Ts(i,n.child,null,a),n=vc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function bv(n,i,a,u,h,m,E){if(a)return i.flags&256?(i.flags&=-257,u=hc(Error(t(422))),Za(n,i,E,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,h=i.mode,u=cl({mode:"visible",children:u.children},h,0,null),m=Vr(m,h,E,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Ts(i,n.child,null,E),i.child.memoizedState=_c(E),i.memoizedState=gc,m);if((i.mode&1)===0)return Za(n,i,E,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var L=u.dgst;return u=L,m=Error(t(419)),u=hc(m,u,void 0),Za(n,i,E,u)}if(L=(E&n.childLanes)!==0,Ln||L){if(u=ln,u!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Di(n,h),ci(u,n,h,-1))}return Uc(),u=hc(Error(t(421))),Za(n,i,E,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Gv.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Hn=er(h.nextSibling),zn=i,Vt=!0,oi=null,n!==null&&(Yn[qn++]=Pi,Yn[qn++]=bi,Yn[qn++]=Ir,Pi=n.id,bi=n.overflow,Ir=i),i=vc(i,u.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),$u(n.return,i,a)}function xc(n,i,a,u,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=h)}function Fp(n,i,a){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(An(n,i,u.children,a),u=Gt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Ot(Gt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Xa(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),xc(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Xa(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}xc(i,!0,a,null,m);break;case"together":xc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Dv(n,i,a){switch(i.tag){case 3:Lp(i),Ss();break;case 5:Jd(i);break;case 1:Dn(i.type)&&Ua(i);break;case 4:ec(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Ot(Ba,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Ot(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Up(n,i,a):(Ot(Gt,Gt.current&1),n=Ii(n,i,a),n!==null?n.sibling:null);Ot(Gt,Gt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Fp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ot(Gt,Gt.current),u)break;return null;case 22:case 23:return i.lanes=0,Pp(n,i,a)}return Ii(n,i,a)}var Op,yc,kp,Bp;Op=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yc=function(){},kp=function(n,i,a,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,Fr(_i.current);var m=null;switch(a){case"input":h=Pt(n,h),u=Pt(n,u),m=[];break;case"select":h=b({},h,{value:void 0}),u=b({},u,{value:void 0}),m=[];break;case"textarea":h=Bt(n,h),u=Bt(n,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Da)}We(a,u);var E;a=null;for(Q in h)if(!u.hasOwnProperty(Q)&&h.hasOwnProperty(Q)&&h[Q]!=null)if(Q==="style"){var L=h[Q];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?m||(m=[]):(m=m||[]).push(Q,null));for(Q in u){var O=u[Q];if(L=h?.[Q],u.hasOwnProperty(Q)&&O!==L&&(O!=null||L!=null))if(Q==="style")if(L){for(E in L)!L.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in O)O.hasOwnProperty(E)&&L[E]!==O[E]&&(a||(a={}),a[E]=O[E])}else a||(m||(m=[]),m.push(Q,a)),a=O;else Q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(m=m||[]).push(Q,O)):Q==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(Q,""+O):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(O!=null&&Q==="onScroll"&&zt("scroll",n),m||L===O||(m=[])):(m=m||[]).push(Q,O))}a&&(m=m||[]).push("style",a);var Q=m;(i.updateQueue=Q)&&(i.flags|=4)}},Bp=function(n,i,a,u){a!==u&&(i.flags|=4)};function ko(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Lv(n,i,a){var u=i.pendingProps;switch(Vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Dn(i.type)&&Ia(),vn(i),null;case 3:return u=i.stateNode,ws(),Ht(bn),Ht(gn),ic(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,oi!==null&&(Dc(oi),oi=null))),yc(n,i),vn(i),null;case 5:tc(i);var h=Fr(Io.current);if(a=i.type,n!==null&&i.stateNode!=null)kp(n,i,a,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Fr(_i.current),ka(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[Co]=m,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(h=0;h<wo.length;h++)zt(wo[h],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":ft(u,m),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},zt("invalid",u);break;case"textarea":D(u,m),zt("invalid",u)}We(a,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var L=m[E];E==="children"?typeof L=="string"?u.textContent!==L&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,L,n),h=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,L,n),h=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&zt("scroll",u)}switch(a){case"input":mt(u),Ut(u,m,!0);break;case"textarea":mt(u),q(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Da)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=E.createElement(a,{is:u.is}):(n=E.createElement(a),a==="select"&&(E=n,u.multiple?E.multiple=!0:u.size&&(E.size=u.size))):n=E.createElementNS(n,a),n[gi]=i,n[Co]=u,Op(n,i,!1,!1),i.stateNode=n;e:{switch(E=Ae(a,u),a){case"dialog":zt("cancel",n),zt("close",n),h=u;break;case"iframe":case"object":case"embed":zt("load",n),h=u;break;case"video":case"audio":for(h=0;h<wo.length;h++)zt(wo[h],n);h=u;break;case"source":zt("error",n),h=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),h=u;break;case"details":zt("toggle",n),h=u;break;case"input":ft(n,u),h=Pt(n,u),zt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=b({},u,{value:void 0}),zt("invalid",n);break;case"textarea":D(n,u),h=Bt(n,u),zt("invalid",n);break;default:h=u}We(a,h),L=h;for(m in L)if(L.hasOwnProperty(m)){var O=L[m];m==="style"?Pe(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ye(n,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&Te(n,O):typeof O=="number"&&Te(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&zt("scroll",n):O!=null&&N(n,m,O,E))}switch(a){case"input":mt(n),Ut(n,u,!1);break;case"textarea":mt(n),q(n);break;case"option":u.value!=null&&n.setAttribute("value",""+xe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?kt(n,!!u.multiple,m,!1):u.defaultValue!=null&&kt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Da)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Io.current),Fr(_i.current),ka(i)){if(u=i.stateNode,a=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:ba(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ht(Gt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hd(),Ss(),i.flags|=98560,m=!1;else if(m=ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else oi!==null&&(Dc(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?tn===0&&(tn=3):Uc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return ws(),yc(n,i),n===null&&Ao(i.stateNode.containerInfo),vn(i),null;case 10:return qu(i.type._context),vn(i),null;case 17:return Dn(i.type)&&Ia(),vn(i),null;case 19:if(Ht(Gt),m=i.memoizedState,m===null)return vn(i),null;if(u=(i.flags&128)!==0,E=m.rendering,E===null)if(u)ko(m,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Xa(n),E!==null){for(i.flags|=128,ko(m,!1),u=E.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ot(Gt,Gt.current&1|2),i.child}n=n.sibling}m.tail!==null&&W()>Ps&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304)}else{if(!u)if(n=Xa(E),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ko(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Vt)return vn(i),null}else 2*W()-m.renderingStartTime>Ps&&a!==1073741824&&(i.flags|=128,u=!0,ko(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=W(),i.sibling=null,a=Gt.current,Ot(Gt,u?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Ic(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Iv(n,i){switch(Vu(i),i.tag){case 1:return Dn(i.type)&&Ia(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ws(),Ht(bn),Ht(gn),ic(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return tc(i),null;case 13:if(Ht(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ht(Gt),null;case 4:return ws(),null;case 10:return qu(i.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Ja=!1,xn=!1,Uv=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function Sc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var zp=!1;function Nv(n,i){if(Iu=xa,n=_d(),wu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,L=-1,O=-1,Q=0,me=0,ge=n,de=null;t:for(;;){for(var Le;ge!==a||h!==0&&ge.nodeType!==3||(L=E+h),ge!==m||u!==0&&ge.nodeType!==3||(O=E+u),ge.nodeType===3&&(E+=ge.nodeValue.length),(Le=ge.firstChild)!==null;)de=ge,ge=Le;for(;;){if(ge===n)break t;if(de===a&&++Q===h&&(L=E),de===m&&++me===u&&(O=E),(Le=ge.nextSibling)!==null)break;ge=de,de=ge.parentNode}ge=Le}a=L===-1||O===-1?null:{start:L,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uu={focusedElem:n,selectionRange:a},xa=!1,Ie=i;Ie!==null;)if(i=Ie,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ie=n;else for(;Ie!==null;){i=Ie;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var Ve=Fe.memoizedProps,Yt=Fe.memoizedState,Y=i.stateNode,G=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ai(i.type,Ve),Yt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Xt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Ie=n;break}Ie=i.return}return Fe=zp,zp=!1,Fe}function Bo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&Sc(i,a,m)}h=h.next}while(h!==u)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Ec(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[Co],delete i[ku],delete i[_v],delete i[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Vp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Vp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Da));else if(u!==4&&(n=n.child,n!==null))for(Mc(n,i,a),n=n.sibling;n!==null;)Mc(n,i,a),n=n.sibling}function Tc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Tc(n,i,a),n=n.sibling;n!==null;)Tc(n,i,a),n=n.sibling}var fn=null,li=!1;function or(n,i,a){for(a=a.child;a!==null;)Wp(n,i,a),a=a.sibling}function Wp(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 5:xn||Rs(a,i);case 6:var u=fn,h=li;fn=null,or(n,i,a),fn=u,li=h,fn!==null&&(li?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(li?(n=fn,a=a.stateNode,n.nodeType===8?Ou(n.parentNode,a):n.nodeType===1&&Ou(n,a),_o(n)):Ou(fn,a.stateNode));break;case 4:u=fn,h=li,fn=a.stateNode.containerInfo,li=!0,or(n,i,a),fn=u,li=h;break;case 0:case 11:case 14:case 15:if(!xn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Sc(a,i,E),h=h.next}while(h!==u)}or(n,i,a);break;case 1:if(!xn&&(Rs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(L){Xt(a,i,L)}or(n,i,a);break;case 21:or(n,i,a);break;case 22:a.mode&1?(xn=(u=xn)||a.memoizedState!==null,or(n,i,a),xn=u):or(n,i,a);break;default:or(n,i,a)}}function Xp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Uv),i.forEach(function(u){var h=Wv.bind(null,n,u);a.has(u)||(a.add(u),u.then(h,h))})}}function ui(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var m=n,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:fn=L.stateNode,li=!1;break e;case 3:fn=L.stateNode.containerInfo,li=!0;break e;case 4:fn=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(fn===null)throw Error(t(160));Wp(m,E,h),fn=null,li=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(Q){Xt(h,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jp(i,n),i=i.sibling}function jp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ui(i,n),xi(n),u&4){try{Bo(3,n,n.return),el(3,n)}catch(Ve){Xt(n,n.return,Ve)}try{Bo(5,n,n.return)}catch(Ve){Xt(n,n.return,Ve)}}break;case 1:ui(i,n),xi(n),u&512&&a!==null&&Rs(a,a.return);break;case 5:if(ui(i,n),xi(n),u&512&&a!==null&&Rs(a,a.return),n.flags&32){var h=n.stateNode;try{Te(h,"")}catch(Ve){Xt(n,n.return,Ve)}}if(u&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,L=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&it(h,m),Ae(L,E);var Q=Ae(L,m);for(E=0;E<O.length;E+=2){var me=O[E],ge=O[E+1];me==="style"?Pe(h,ge):me==="dangerouslySetInnerHTML"?Ye(h,ge):me==="children"?Te(h,ge):N(h,me,ge,Q)}switch(L){case"input":Be(h,m);break;case"textarea":M(h,m);break;case"select":var de=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Le=m.value;Le!=null?kt(h,!!m.multiple,Le,!1):de!==!!m.multiple&&(m.defaultValue!=null?kt(h,!!m.multiple,m.defaultValue,!0):kt(h,!!m.multiple,m.multiple?[]:"",!1))}h[Co]=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 6:if(ui(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ve){Xt(n,n.return,Ve)}}break;case 3:if(ui(i,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(i.containerInfo)}catch(Ve){Xt(n,n.return,Ve)}break;case 4:ui(i,n),xi(n);break;case 13:ui(i,n),xi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Rc=W())),u&4&&Xp(n);break;case 22:if(me=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(Q=xn)||me,ui(i,n),xn=Q):ui(i,n),xi(n),u&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!me&&(n.mode&1)!==0)for(Ie=n,me=n.child;me!==null;){for(ge=Ie=me;Ie!==null;){switch(de=Ie,Le=de.child,de.tag){case 0:case 11:case 14:case 15:Bo(4,de,de.return);break;case 1:Rs(de,de.return);var Fe=de.stateNode;if(typeof Fe.componentWillUnmount=="function"){u=de,a=de.return;try{i=u,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(Ve){Xt(u,a,Ve)}}break;case 5:Rs(de,de.return);break;case 22:if(de.memoizedState!==null){$p(ge);continue}}Le!==null?(Le.return=de,Ie=Le):$p(ge)}me=me.sibling}e:for(me=null,ge=n;;){if(ge.tag===5){if(me===null){me=ge;try{h=ge.stateNode,Q?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=ge.stateNode,O=ge.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=Ee("display",E))}catch(Ve){Xt(n,n.return,Ve)}}}else if(ge.tag===6){if(me===null)try{ge.stateNode.nodeValue=Q?"":ge.memoizedProps}catch(Ve){Xt(n,n.return,Ve)}}else if((ge.tag!==22&&ge.tag!==23||ge.memoizedState===null||ge===n)&&ge.child!==null){ge.child.return=ge,ge=ge.child;continue}if(ge===n)break e;for(;ge.sibling===null;){if(ge.return===null||ge.return===n)break e;me===ge&&(me=null),ge=ge.return}me===ge&&(me=null),ge.sibling.return=ge.return,ge=ge.sibling}}break;case 19:ui(i,n),xi(n),u&4&&Xp(n);break;case 21:break;default:ui(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Vp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(Te(h,""),u.flags&=-33);var m=Gp(n);Tc(n,m,h);break;case 3:case 4:var E=u.stateNode.containerInfo,L=Gp(n);Mc(n,L,E);break;default:throw Error(t(161))}}catch(O){Xt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fv(n,i,a){Ie=n,Yp(n)}function Yp(n,i,a){for(var u=(n.mode&1)!==0;Ie!==null;){var h=Ie,m=h.child;if(h.tag===22&&u){var E=h.memoizedState!==null||Ja;if(!E){var L=h.alternate,O=L!==null&&L.memoizedState!==null||xn;L=Ja;var Q=xn;if(Ja=E,(xn=O)&&!Q)for(Ie=h;Ie!==null;)E=Ie,O=E.child,E.tag===22&&E.memoizedState!==null?Kp(h):O!==null?(O.return=E,Ie=O):Kp(h);for(;m!==null;)Ie=m,Yp(m),m=m.sibling;Ie=h,Ja=L,xn=Q}qp(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Ie=m):qp(n)}}function qp(n){for(;Ie!==null;){var i=Ie;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||el(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!xn)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xd(i,m,u);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xd(i,E,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var me=Q.memoizedState;if(me!==null){var ge=me.dehydrated;ge!==null&&_o(ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&Ec(i)}catch(de){Xt(i,i.return,de)}}if(i===n){Ie=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ie=a;break}Ie=i.return}}function $p(n){for(;Ie!==null;){var i=Ie;if(i===n){Ie=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ie=a;break}Ie=i.return}}function Kp(n){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{el(4,i)}catch(O){Xt(i,a,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(O){Xt(i,h,O)}}var m=i.return;try{Ec(i)}catch(O){Xt(i,m,O)}break;case 5:var E=i.return;try{Ec(i)}catch(O){Xt(i,E,O)}}}catch(O){Xt(i,i.return,O)}if(i===n){Ie=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Ie=L;break}Ie=i.return}}var Ov=Math.ceil,tl=P.ReactCurrentDispatcher,wc=P.ReactCurrentOwner,Zn=P.ReactCurrentBatchConfig,Et=0,ln=null,Kt=null,hn=0,Vn=0,Cs=tr(0),tn=0,zo=null,kr=0,nl=0,Ac=0,Ho=null,In=null,Rc=0,Ps=1/0,Ui=null,il=!1,Cc=null,ar=null,rl=!1,lr=null,sl=0,Vo=0,Pc=null,ol=-1,al=0;function Rn(){return(Et&6)!==0?W():ol!==-1?ol:ol=W()}function ur(n){return(n.mode&1)===0?1:(Et&2)!==0&&hn!==0?hn&-hn:yv.transition!==null?(al===0&&(al=wn()),al):(n=_t,n!==0||(n=window.event,n=n===void 0?16:Zh(n.type)),n)}function ci(n,i,a,u){if(50<Vo)throw Vo=0,Pc=null,Error(t(185));jt(n,a,u),((Et&2)===0||n!==ln)&&(n===ln&&((Et&2)===0&&(nl|=a),tn===4&&cr(n,hn)),Un(n,u),a===1&&Et===0&&(i.mode&1)===0&&(Ps=W()+500,Na&&ir()))}function Un(n,i){var a=n.callbackNode;Pr(n,i);var u=ri(n,n===ln?hn:0);if(u===0)a!==null&&j(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&j(a),i===1)n.tag===0?xv(Qp.bind(null,n)):Fd(Qp.bind(null,n)),mv(function(){(Et&6)===0&&ir()}),a=null;else{switch(Gh(u)){case 1:a=Re;break;case 4:a=Ne;break;case 16:a=De;break;case 536870912:a=st;break;default:a=De}a=om(a,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zp(n,i){if(ol=-1,al=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(bs()&&n.callbackNode!==a)return null;var u=ri(n,n===ln?hn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ll(n,u);else{i=u;var h=Et;Et|=2;var m=em();(ln!==n||hn!==i)&&(Ui=null,Ps=W()+500,zr(n,i));do try{zv();break}catch(L){Jp(n,L)}while(!0);Yu(),tl.current=m,Et=h,Kt!==null?i=0:(ln=null,hn=0,i=tn)}if(i!==0){if(i===2&&(h=Ft(n),h!==0&&(u=h,i=bc(n,h))),i===1)throw a=zo,zr(n,0),cr(n,u),Un(n,W()),a;if(i===6)cr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!kv(h)&&(i=ll(n,u),i===2&&(m=Ft(n),m!==0&&(u=m,i=bc(n,m))),i===1))throw a=zo,zr(n,0),cr(n,u),Un(n,W()),a;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,In,Ui);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=Rc+500-W(),10<i)){if(ri(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){Rn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Fu(Hr.bind(null,n,In,Ui),i);break}Hr(n,In,Ui);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var E=31-St(u);m=1<<E,E=i[E],E>h&&(h=E),u&=~m}if(u=h,u=W()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Ov(u/1960))-u,10<u){n.timeoutHandle=Fu(Hr.bind(null,n,In,Ui),u);break}Hr(n,In,Ui);break;case 5:Hr(n,In,Ui);break;default:throw Error(t(329))}}}return Un(n,W()),n.callbackNode===a?Zp.bind(null,n):null}function bc(n,i){var a=Ho;return n.current.memoizedState.isDehydrated&&(zr(n,i).flags|=256),n=ll(n,i),n!==2&&(i=In,In=a,i!==null&&Dc(i)),n}function Dc(n){In===null?In=n:In.push.apply(In,n)}function kv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~Ac,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-St(i),u=1<<a;n[a]=-1,i&=~u}}function Qp(n){if((Et&6)!==0)throw Error(t(327));bs();var i=ri(n,0);if((i&1)===0)return Un(n,W()),null;var a=ll(n,i);if(n.tag!==0&&a===2){var u=Ft(n);u!==0&&(i=u,a=bc(n,u))}if(a===1)throw a=zo,zr(n,0),cr(n,i),Un(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,In,Ui),Un(n,W()),null}function Lc(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Ps=W()+500,Na&&ir())}}function Br(n){lr!==null&&lr.tag===0&&(Et&6)===0&&bs();var i=Et;Et|=1;var a=Zn.transition,u=_t;try{if(Zn.transition=null,_t=1,n)return n()}finally{_t=u,Zn.transition=a,Et=i,(Et&6)===0&&ir()}}function Ic(){Vn=Cs.current,Ht(Cs)}function zr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,pv(a)),Kt!==null)for(a=Kt.return;a!==null;){var u=a;switch(Vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ia();break;case 3:ws(),Ht(bn),Ht(gn),ic();break;case 5:tc(u);break;case 4:ws();break;case 13:Ht(Gt);break;case 19:Ht(Gt);break;case 10:qu(u.type._context);break;case 22:case 23:Ic()}a=a.return}if(ln=n,Kt=n=fr(n.current,null),hn=Vn=i,tn=0,zo=null,Ac=nl=kr=0,In=Ho=null,Nr!==null){for(i=0;i<Nr.length;i++)if(a=Nr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,m=a.pending;if(m!==null){var E=m.next;m.next=h,u.next=E}a.pending=u}Nr=null}return n}function Jp(n,i){do{var a=Kt;try{if(Yu(),ja.current=Ka,Ya){for(var u=Wt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}Ya=!1}if(Or=0,an=en=Wt=null,Uo=!1,No=0,wc.current=null,a===null||a.return===null){tn=1,zo=i,Kt=null;break}e:{var m=n,E=a.return,L=a,O=i;if(i=hn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var Q=O,me=L,ge=me.tag;if((me.mode&1)===0&&(ge===0||ge===11||ge===15)){var de=me.alternate;de?(me.updateQueue=de.updateQueue,me.memoizedState=de.memoizedState,me.lanes=de.lanes):(me.updateQueue=null,me.memoizedState=null)}var Le=Tp(E);if(Le!==null){Le.flags&=-257,wp(Le,E,L,m,i),Le.mode&1&&Mp(m,Q,i),i=Le,O=Q;var Fe=i.updateQueue;if(Fe===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else Fe.add(O);break e}else{if((i&1)===0){Mp(m,Q,i),Uc();break e}O=Error(t(426))}}else if(Vt&&L.mode&1){var Yt=Tp(E);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),wp(Yt,E,L,m,i),Xu(As(O,L));break e}}m=O=As(O,L),tn!==4&&(tn=2),Ho===null?Ho=[m]:Ho.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=Sp(m,O,i);Wd(m,Y);break e;case 1:L=O;var G=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ar===null||!ar.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Me=Ep(m,L,i);Wd(m,Me);break e}}m=m.return}while(m!==null)}nm(a)}catch(je){i=je,Kt===a&&a!==null&&(Kt=a=a.return);continue}break}while(!0)}function em(){var n=tl.current;return tl.current=Ka,n===null?Ka:n}function Uc(){(tn===0||tn===3||tn===2)&&(tn=4),ln===null||(kr&268435455)===0&&(nl&268435455)===0||cr(ln,hn)}function ll(n,i){var a=Et;Et|=2;var u=em();(ln!==n||hn!==i)&&(Ui=null,zr(n,i));do try{Bv();break}catch(h){Jp(n,h)}while(!0);if(Yu(),Et=a,tl.current=u,Kt!==null)throw Error(t(261));return ln=null,hn=0,tn}function Bv(){for(;Kt!==null;)tm(Kt)}function zv(){for(;Kt!==null&&!te();)tm(Kt)}function tm(n){var i=sm(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?nm(n):Kt=i,wc.current=null}function nm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Lv(a,i,Vn),a!==null){Kt=a;return}}else{if(a=Iv(a,i),a!==null){a.flags&=32767,Kt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);tn===0&&(tn=5)}function Hr(n,i,a){var u=_t,h=Zn.transition;try{Zn.transition=null,_t=1,Hv(n,i,a,u)}finally{Zn.transition=h,_t=u}return null}function Hv(n,i,a,u){do bs();while(lr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mn(n,m),n===ln&&(Kt=ln=null,hn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||rl||(rl=!0,om(De,function(){return bs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Zn.transition,Zn.transition=null;var E=_t;_t=1;var L=Et;Et|=4,wc.current=null,Nv(n,a),jp(a,n),av(Uu),xa=!!Iu,Uu=Iu=null,n.current=a,Fv(a),ne(),Et=L,_t=E,Zn.transition=m}else n.current=a;if(rl&&(rl=!1,lr=n,sl=h),m=n.pendingLanes,m===0&&(ar=null),At(a.stateNode),Un(n,W()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(il)throw il=!1,n=Cc,Cc=null,n;return(sl&1)!==0&&n.tag!==0&&bs(),m=n.pendingLanes,(m&1)!==0?n===Pc?Vo++:(Vo=0,Pc=n):Vo=0,ir(),null}function bs(){if(lr!==null){var n=Gh(sl),i=Zn.transition,a=_t;try{if(Zn.transition=null,_t=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,sl=0,(Et&6)!==0)throw Error(t(331));var h=Et;for(Et|=4,Ie=n.current;Ie!==null;){var m=Ie,E=m.child;if((Ie.flags&16)!==0){var L=m.deletions;if(L!==null){for(var O=0;O<L.length;O++){var Q=L[O];for(Ie=Q;Ie!==null;){var me=Ie;switch(me.tag){case 0:case 11:case 15:Bo(8,me,m)}var ge=me.child;if(ge!==null)ge.return=me,Ie=ge;else for(;Ie!==null;){me=Ie;var de=me.sibling,Le=me.return;if(Hp(me),me===Q){Ie=null;break}if(de!==null){de.return=Le,Ie=de;break}Ie=Le}}}var Fe=m.alternate;if(Fe!==null){var Ve=Fe.child;if(Ve!==null){Fe.child=null;do{var Yt=Ve.sibling;Ve.sibling=null,Ve=Yt}while(Ve!==null)}}Ie=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Ie=E;else e:for(;Ie!==null;){if(m=Ie,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Bo(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Ie=Y;break e}Ie=m.return}}var G=n.current;for(Ie=G;Ie!==null;){E=Ie;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,Ie=Z;else e:for(E=G;Ie!==null;){if(L=Ie,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:el(9,L)}}catch(je){Xt(L,L.return,je)}if(L===E){Ie=null;break e}var Me=L.sibling;if(Me!==null){Me.return=L.return,Ie=Me;break e}Ie=L.return}}if(Et=h,ir(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot($e,n)}catch{}u=!0}return u}finally{_t=a,Zn.transition=i}}return!1}function im(n,i,a){i=As(a,i),i=Sp(n,i,1),n=sr(n,i,1),i=Rn(),n!==null&&(jt(n,1,i),Un(n,i))}function Xt(n,i,a){if(n.tag===3)im(n,n,a);else for(;i!==null;){if(i.tag===3){im(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ar===null||!ar.has(u))){n=As(a,n),n=Ep(i,n,1),i=sr(i,n,1),n=Rn(),i!==null&&(jt(i,1,n),Un(i,n));break}}i=i.return}}function Vv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Rn(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(hn&a)===a&&(tn===4||tn===3&&(hn&130023424)===hn&&500>W()-Rc?zr(n,0):Ac|=a),Un(n,i)}function rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var a=Rn();n=Di(n,i),n!==null&&(jt(n,i,a),Un(n,a))}function Gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(n,a)}function Wv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),rm(n,a)}var sm;sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Ln=!1,Dv(n,i,a);Ln=(n.flags&131072)!==0}else Ln=!1,Vt&&(i.flags&1048576)!==0&&Od(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Qa(n,i),n=i.pendingProps;var h=vs(i,gn.current);Ms(i,a),h=oc(null,i,u,n,h,a);var m=ac();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(u)?(m=!0,Ua(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Zu(i),h.updater=Ga,i.stateNode=h,h._reactInternals=i,Ju(i,u,n,a),i=mc(null,i,u,!0,m,a)):(i.tag=0,Vt&&m&&Hu(i),An(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Qa(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=jv(u),n=ai(u,n),h){case 0:i=pc(null,i,u,n,a);break e;case 1:i=Dp(null,i,u,n,a);break e;case 11:i=Ap(null,i,u,n,a);break e;case 14:i=Rp(null,i,u,ai(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ai(u,h),pc(n,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ai(u,h),Dp(n,i,u,h,a);case 3:e:{if(Lp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,h=m.element,Gd(n,i),Va(i,u,null,a);var E=i.memoizedState;if(u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=As(Error(t(423)),i),i=Ip(n,i,u,a,h);break e}else if(u!==h){h=As(Error(t(424)),i),i=Ip(n,i,u,a,h);break e}else for(Hn=er(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,oi=null,a=Qd(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),u===h){i=Ii(n,i,a);break e}An(n,i,u,a)}i=i.child}return i;case 5:return Jd(i),n===null&&Wu(i),u=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,E=h.children,Nu(u,h)?E=null:m!==null&&Nu(u,m)&&(i.flags|=32),bp(n,i),An(n,i,E,a),i.child;case 6:return n===null&&Wu(i),null;case 13:return Up(n,i,a);case 4:return ec(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Ts(i,null,u,a):An(n,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ai(u,h),Ap(n,i,u,h,a);case 7:return An(n,i,i.pendingProps,a),i.child;case 8:return An(n,i,i.pendingProps.children,a),i.child;case 12:return An(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,m=i.memoizedProps,E=h.value,Ot(Ba,u._currentValue),u._currentValue=E,m!==null)if(si(m.value,E)){if(m.children===h.children&&!bn.current){i=Ii(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var L=m.dependencies;if(L!==null){E=m.child;for(var O=L.firstContext;O!==null;){if(O.context===u){if(m.tag===1){O=Li(-1,a&-a),O.tag=2;var Q=m.updateQueue;if(Q!==null){Q=Q.shared;var me=Q.pending;me===null?O.next=O:(O.next=me.next,me.next=O),Q.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),$u(m.return,a,i),L.lanes|=a;break}O=O.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),$u(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}An(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Ms(i,a),h=$n(h),u=u(h),i.flags|=1,An(n,i,u,a),i.child;case 14:return u=i.type,h=ai(u,i.pendingProps),h=ai(u.type,h),Rp(n,i,u,h,a);case 15:return Cp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:ai(u,h),Qa(n,i),i.tag=1,Dn(u)?(n=!0,Ua(i)):n=!1,Ms(i,a),qd(i,u,h),Ju(i,u,h,a),mc(null,i,u,!0,n,a);case 19:return Fp(n,i,a);case 22:return Pp(n,i,a)}throw Error(t(156,i.tag))};function om(n,i){return A(n,i)}function Xv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,a,u){return new Xv(n,i,a,u)}function Nc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jv(n){if(typeof n=="function")return Nc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===le)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=Qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,u,h,m){var E=2;if(u=n,typeof n=="function")Nc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case I:return Vr(a.children,h,m,i);case X:E=8,h|=8;break;case C:return n=Qn(12,a,i,h|2),n.elementType=C,n.lanes=m,n;case ie:return n=Qn(13,a,i,h),n.elementType=ie,n.lanes=m,n;case fe:return n=Qn(19,a,i,h),n.elementType=fe,n.lanes=m,n;case ce:return cl(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:E=10;break e;case B:E=9;break e;case J:E=11;break e;case le:E=14;break e;case ae:E=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(E,a,i,h),i.elementType=n,i.type=u,i.lanes=m,i}function Vr(n,i,a,u){return n=Qn(7,n,u,i),n.lanes=a,n}function cl(n,i,a,u){return n=Qn(22,n,u,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Fc(n,i,a){return n=Qn(6,n,null,i),n.lanes=a,n}function Oc(n,i,a){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yv(n,i,a,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function kc(n,i,a,u,h,m,E,L,O){return n=new Yv(n,i,a,L,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(m),n}function qv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function am(n){if(!n)return nr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Dn(a))return Ud(n,a,i)}return i}function lm(n,i,a,u,h,m,E,L,O){return n=kc(a,u,!0,n,h,m,E,L,O),n.context=am(null),a=n.current,u=Rn(),h=ur(a),m=Li(u,h),m.callback=i??null,sr(a,m,h),n.current.lanes=h,jt(n,h,u),Un(n,u),n}function fl(n,i,a,u){var h=i.current,m=Rn(),E=ur(h);return a=am(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(m,E),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(h,i,E),n!==null&&(ci(n,h,E,m),Ha(n,h,E)),E}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function um(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Bc(n,i){um(n,i),(n=n.alternate)&&um(n,i)}function $v(){return null}var cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zc(n){this._internalRoot=n}dl.prototype.render=zc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},dl.prototype.unmount=zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){fl(null,n,null,null)}),i[Ri]=null}};function dl(n){this._internalRoot=n}dl.prototype.unstable_scheduleHydration=function(n){if(n){var i=jh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&$h(n)}};function Hc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function Kv(n,i,a,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var Q=hl(E);m.call(Q)}}var E=lm(i,u,n,0,null,!1,!1,"",fm);return n._reactRootContainer=E,n[Ri]=E.current,Ao(n.nodeType===8?n.parentNode:n),Br(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var L=u;u=function(){var Q=hl(O);L.call(Q)}}var O=kc(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=O,n[Ri]=O.current,Ao(n.nodeType===8?n.parentNode:n),Br(function(){fl(i,O,a,u)}),O}function ml(n,i,a,u,h){var m=a._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var L=h;h=function(){var O=hl(E);L.call(O)}}fl(i,E,n,h)}else E=Kv(a,i,n,h,u);return hl(E)}Wh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Jt(i.pendingLanes);a!==0&&(br(i,a|1),Un(i,W()),(Et&6)===0&&(Ps=W()+500,ir()))}break;case 13:Br(function(){var u=Di(n,1);if(u!==null){var h=Rn();ci(u,n,1,h)}}),Bc(n,1)}},hu=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=Rn();ci(i,n,134217728,a)}Bc(n,134217728)}},Xh=function(n){if(n.tag===13){var i=ur(n),a=Di(n,i);if(a!==null){var u=Rn();ci(a,n,i,u)}Bc(n,i)}},jh=function(){return _t},Yh=function(n,i){var a=_t;try{return _t=n,i()}finally{_t=a}},ye=function(n,i,a){switch(i){case"input":if(Be(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var h=La(u);if(!h)throw Error(t(90));Qt(u),Be(u,h)}}}break;case"textarea":M(n,a);break;case"select":i=a.value,i!=null&&kt(n,!!a.multiple,i,!1)}},ut=Lc,Rt=Br;var Zv={usingClientEntryPoint:!1,Events:[Po,gs,La,he,He,Lc]},Go={findFiberByHostInstance:Dr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Qv={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ma(n),n===null?null:n.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||$v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{$e=gl.inject(Qv),ot=gl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hc(i))throw Error(t(200));return qv(n,i,null,a)},Nn.createRoot=function(n,i){if(!Hc(n))throw Error(t(299));var a=!1,u="",h=cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=kc(n,1,!1,null,null,a,!1,u,h),n[Ri]=i.current,Ao(n.nodeType===8?n.parentNode:n),new zc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ma(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Br(n)},Nn.hydrate=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!Hc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,h=!1,m="",E=cm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=lm(i,null,n,1,a??null,h,!1,m,E),n[Ri]=i.current,Ao(n),u)for(n=0;n<u.length;n++)a=u[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new dl(i)},Nn.render=function(n,i,a){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Nn.unstable_batchedUpdates=Lc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!pl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,a,!1,u)},Nn.version="18.2.0-next-9e3b772b8-20220608",Nn}var xm;function u0(){if(xm)return Wc.exports;xm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wc.exports=l0(),Wc.exports}var ym;function c0(){if(ym)return _l;ym=1;var s=u0();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var f0=c0();/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},ea.apply(this,arguments)}var Er;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Er||(Er={}));const Sm="popstate";function h0(s){s===void 0&&(s={});function e(r,o){let{pathname:l,search:c,hash:f}=r.location;return Lf("",{pathname:l,search:c,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(r,o){return typeof o=="string"?o:Ig(o)}return p0(e,t,null,s)}function rn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Rh(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function d0(){return Math.random().toString(36).substr(2,8)}function Em(s,e){return{usr:s.state,key:s.key,idx:e}}function Lf(s,e,t,r){return t===void 0&&(t=null),ea({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof e=="string"?ao(e):e,{state:t,key:e&&e.key||r||d0()})}function Ig(s){let{pathname:e="/",search:t="",hash:r=""}=s;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ao(s){let e={};if(s){let t=s.indexOf("#");t>=0&&(e.hash=s.substr(t),s=s.substr(0,t));let r=s.indexOf("?");r>=0&&(e.search=s.substr(r),s=s.substr(0,r)),s&&(e.pathname=s)}return e}function p0(s,e,t,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,c=o.history,f=Er.Pop,d=null,p=g();p==null&&(p=0,c.replaceState(ea({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function _(){f=Er.Pop;let y=g(),v=y==null?null:y-p;p=y,d&&d({action:f,location:w.location,delta:v})}function x(y,v){f=Er.Push;let U=Lf(w.location,y,v);p=g()+1;let N=Em(U,p),P=w.createHref(U);try{c.pushState(N,"",P)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;o.location.assign(P)}l&&d&&d({action:f,location:w.location,delta:1})}function S(y,v){f=Er.Replace;let U=Lf(w.location,y,v);p=g();let N=Em(U,p),P=w.createHref(U);c.replaceState(N,"",P),l&&d&&d({action:f,location:w.location,delta:0})}function T(y){let v=o.location.origin!=="null"?o.location.origin:o.location.href,U=typeof y=="string"?y:Ig(y);return rn(v,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,v)}let w={get action(){return f},get location(){return s(o,c)},listen(y){if(d)throw new Error("A history only accepts one active listener");return o.addEventListener(Sm,_),d=y,()=>{o.removeEventListener(Sm,_),d=null}},createHref(y){return e(o,y)},createURL:T,encodeLocation(y){let v=T(y);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:x,replace:S,go(y){return c.go(y)}};return w}var Mm;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Mm||(Mm={}));function m0(s,e,t){t===void 0&&(t="/");let r=typeof e=="string"?ao(e):e,o=Fg(r.pathname||"/",t);if(o==null)return null;let l=Ug(s);g0(l);let c=null;for(let f=0;c==null&&f<l.length;++f)c=w0(l[f],C0(o));return c}function Ug(s,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let o=(l,c,f)=>{let d={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};d.relativePath.startsWith("/")&&(rn(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let p=es([r,d.relativePath]),g=t.concat(d);l.children&&l.children.length>0&&(rn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Ug(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:M0(p,l.index),routesMeta:g})};return s.forEach((l,c)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,c);else for(let d of Ng(l.path))o(l,c,d)}),e}function Ng(s){let e=s.split("/");if(e.length===0)return[];let[t,...r]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let c=Ng(r.join("/")),f=[];return f.push(...c.map(d=>d===""?l:[l,d].join("/"))),o&&f.push(...c),f.map(d=>s.startsWith("/")&&d===""?"/":d)}function g0(s){s.sort((e,t)=>e.score!==t.score?t.score-e.score:T0(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const _0=/^:\w+$/,v0=3,x0=2,y0=1,S0=10,E0=-2,Tm=s=>s==="*";function M0(s,e){let t=s.split("/"),r=t.length;return t.some(Tm)&&(r+=E0),e&&(r+=x0),t.filter(o=>!Tm(o)).reduce((o,l)=>o+(_0.test(l)?v0:l===""?y0:S0),r)}function T0(s,e){return s.length===e.length&&s.slice(0,-1).every((r,o)=>r===e[o])?s[s.length-1]-e[e.length-1]:0}function w0(s,e){let{routesMeta:t}=s,r={},o="/",l=[];for(let c=0;c<t.length;++c){let f=t[c],d=c===t.length-1,p=o==="/"?e:e.slice(o.length)||"/",g=A0({path:f.relativePath,caseSensitive:f.caseSensitive,end:d},p);if(!g)return null;Object.assign(r,g.params);let _=f.route;l.push({params:r,pathname:es([o,g.pathname]),pathnameBase:U0(es([o,g.pathnameBase])),route:_}),g.pathnameBase!=="/"&&(o=es([o,g.pathnameBase]))}return l}function A0(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[t,r]=R0(s.path,s.caseSensitive,s.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:r.reduce((p,g,_)=>{if(g==="*"){let x=f[_]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}return p[g]=P0(f[_]||"",g),p},{}),pathname:l,pathnameBase:c,pattern:s}}function R0(s,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Rh(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let r=[],o="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(c,f)=>(r.push(f),"/([^\\/]+)"));return s.endsWith("*")?(r.push("*"),o+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":s!==""&&s!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function C0(s){try{return decodeURI(s)}catch(e){return Rh(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),s}}function P0(s,e){try{return decodeURIComponent(s)}catch(t){return Rh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+s+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),s}}function Fg(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=s.charAt(t);return r&&r!=="/"?null:s.slice(t)||"/"}function b0(s,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:o=""}=typeof s=="string"?ao(s):s;return{pathname:t?t.startsWith("/")?t:D0(t,e):e,search:N0(r),hash:F0(o)}}function D0(s,e){let t=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Yc(s,e,t,r){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L0(s){return s.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function I0(s,e,t,r){r===void 0&&(r=!1);let o;typeof s=="string"?o=ao(s):(o=ea({},s),rn(!o.pathname||!o.pathname.includes("?"),Yc("?","pathname","search",o)),rn(!o.pathname||!o.pathname.includes("#"),Yc("#","pathname","hash",o)),rn(!o.search||!o.search.includes("#"),Yc("#","search","hash",o)));let l=s===""||o.pathname==="",c=l?"/":o.pathname,f;if(r||c==null)f=t;else{let _=e.length-1;if(c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),_-=1;o.pathname=x.join("/")}f=_>=0?e[_]:"/"}let d=b0(o,f),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(p||g)&&(d.pathname+="/"),d}const es=s=>s.join("/").replace(/\/\/+/g,"/"),U0=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),N0=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,F0=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function O0(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Og=["post","put","patch","delete"];new Set(Og);const k0=["get",...Og];new Set(k0);/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eu(){return eu=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=t[r])}return s},eu.apply(this,arguments)}const Ch=Oe.createContext(null),B0=Oe.createContext(null),ru=Oe.createContext(null),su=Oe.createContext(null),lo=Oe.createContext({outlet:null,matches:[],isDataRoute:!1}),kg=Oe.createContext(null);function ou(){return Oe.useContext(su)!=null}function Bg(){return ou()||rn(!1),Oe.useContext(su).location}function zg(s){Oe.useContext(ru).static||Oe.useLayoutEffect(s)}function z0(){let{isDataRoute:s}=Oe.useContext(lo);return s?J0():H0()}function H0(){ou()||rn(!1);let s=Oe.useContext(Ch),{basename:e,navigator:t}=Oe.useContext(ru),{matches:r}=Oe.useContext(lo),{pathname:o}=Bg(),l=JSON.stringify(L0(r).map(d=>d.pathnameBase)),c=Oe.useRef(!1);return zg(()=>{c.current=!0}),Oe.useCallback(function(d,p){if(p===void 0&&(p={}),!c.current)return;if(typeof d=="number"){t.go(d);return}let g=I0(d,JSON.parse(l),o,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:es([e,g.pathname])),(p.replace?t.replace:t.push)(g,p.state,p)},[e,t,l,o,s])}function V0(s,e){return G0(s,e)}function G0(s,e,t){ou()||rn(!1);let{navigator:r}=Oe.useContext(ru),{matches:o}=Oe.useContext(lo),l=o[o.length-1],c=l?l.params:{};l&&l.pathname;let f=l?l.pathnameBase:"/";l&&l.route;let d=Bg(),p;if(e){var g;let w=typeof e=="string"?ao(e):e;f==="/"||(g=w.pathname)!=null&&g.startsWith(f)||rn(!1),p=w}else p=d;let _=p.pathname||"/",x=f==="/"?_:_.slice(f.length)||"/",S=m0(s,{pathname:x}),T=q0(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},c,w.params),pathname:es([f,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?f:es([f,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,t);return e&&T?Oe.createElement(su.Provider,{value:{location:eu({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Er.Pop}},T):T}function W0(){let s=Q0(),e=O0(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),t=s instanceof Error?s.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Oe.createElement(Oe.Fragment,null,Oe.createElement("h2",null,"Unexpected Application Error!"),Oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?Oe.createElement("pre",{style:o},t):null,null)}const X0=Oe.createElement(W0,null);class j0 extends Oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?Oe.createElement(lo.Provider,{value:this.props.routeContext},Oe.createElement(kg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y0(s){let{routeContext:e,match:t,children:r}=s,o=Oe.useContext(Ch);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Oe.createElement(lo.Provider,{value:e},r)}function q0(s,e,t){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),s==null){var o;if((o=t)!=null&&o.errors)s=t.matches;else return null}let l=s,c=(r=t)==null?void 0:r.errors;if(c!=null){let f=l.findIndex(d=>d.route.id&&c?.[d.route.id]);f>=0||rn(!1),l=l.slice(0,Math.min(l.length,f+1))}return l.reduceRight((f,d,p)=>{let g=d.route.id?c?.[d.route.id]:null,_=null;t&&(_=d.route.errorElement||X0);let x=e.concat(l.slice(0,p+1)),S=()=>{let T;return g?T=_:d.route.Component?T=Oe.createElement(d.route.Component,null):d.route.element?T=d.route.element:T=f,Oe.createElement(Y0,{match:d,routeContext:{outlet:f,matches:x,isDataRoute:t!=null},children:T})};return t&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?Oe.createElement(j0,{location:t.location,revalidation:t.revalidation,component:_,error:g,children:S(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):S()},null)}var If;(function(s){s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate"})(If||(If={}));var ta;(function(s){s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId"})(ta||(ta={}));function $0(s){let e=Oe.useContext(Ch);return e||rn(!1),e}function K0(s){let e=Oe.useContext(B0);return e||rn(!1),e}function Z0(s){let e=Oe.useContext(lo);return e||rn(!1),e}function Hg(s){let e=Z0(),t=e.matches[e.matches.length-1];return t.route.id||rn(!1),t.route.id}function Q0(){var s;let e=Oe.useContext(kg),t=K0(ta.UseRouteError),r=Hg(ta.UseRouteError);return e||((s=t.errors)==null?void 0:s[r])}function J0(){let{router:s}=$0(If.UseNavigateStable),e=Hg(ta.UseNavigateStable),t=Oe.useRef(!1);return zg(()=>{t.current=!0}),Oe.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?s.navigate(o):s.navigate(o,eu({fromRouteId:e},l)))},[s,e])}function jl(s){rn(!1)}function ex(s){let{basename:e="/",children:t=null,location:r,navigationType:o=Er.Pop,navigator:l,static:c=!1}=s;ou()&&rn(!1);let f=e.replace(/^\/*/,"/"),d=Oe.useMemo(()=>({basename:f,navigator:l,static:c}),[f,l,c]);typeof r=="string"&&(r=ao(r));let{pathname:p="/",search:g="",hash:_="",state:x=null,key:S="default"}=r,T=Oe.useMemo(()=>{let w=Fg(p,f);return w==null?null:{location:{pathname:w,search:g,hash:_,state:x,key:S},navigationType:o}},[f,p,g,_,x,S,o]);return T==null?null:Oe.createElement(ru.Provider,{value:d},Oe.createElement(su.Provider,{children:t,value:T}))}function tx(s){let{children:e,location:t}=s;return V0(Uf(e),t)}var wm;(function(s){s[s.pending=0]="pending",s[s.success=1]="success",s[s.error=2]="error"})(wm||(wm={}));new Promise(()=>{});function Uf(s,e){e===void 0&&(e=[]);let t=[];return Oe.Children.forEach(s,(r,o)=>{if(!Oe.isValidElement(r))return;let l=[...e,o];if(r.type===Oe.Fragment){t.push.apply(t,Uf(r.props.children,l));return}r.type!==jl&&rn(!1),!r.props.index||!r.props.children||rn(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Uf(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const nx="startTransition",Am=s0[nx];function ix(s){let{basename:e,children:t,future:r,window:o}=s,l=Oe.useRef();l.current==null&&(l.current=h0({window:o,v5Compat:!0}));let c=l.current,[f,d]=Oe.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},g=Oe.useCallback(_=>{p&&Am?Am(()=>d(_)):d(_)},[d,p]);return Oe.useLayoutEffect(()=>c.listen(g),[c,g]),Oe.createElement(ex,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:c})}var Rm;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher"})(Rm||(Rm={}));var Cm;(function(s){s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Cm||(Cm={}));const rx="/assets/dbg-RKWSLyy0.jpg",Vg="/assets/lheart-ClClFpY2.png",Pm="/assets/hello-TR7ufCjR.gif",sx=`
  /* Load Pacifico Font from Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

  /* Global background and layout - Full page uses a bluish shade */
  .birthday-background {
    background-color: #e0f2fe; /* Light blueish shade */
    font-family: 'Pacifico', cursive;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-sizing: border-box; 
  }


  /* Hover effect for the card */
  .wish-card:hover {
    transform: scale(1.02); 
  }

  /* Card Title */
  .card-title {
    font-size: 2.25rem;
    text-align: center;
    margin-bottom: 1.5rem;
    color: #4f46e5;
  }

  /* Wish Display Area */
  .wish-text-box {
    padding: 1.5rem;
   background-color: #676afcff;
    border-radius: 0.75rem; 
    color: rgba(255, 255, 255, 1); /* White text for contrast over the image */
    text-align: center;
    line-height: 1.6;
    overflow: hidden; /* Ensures borders look clean */
  }
  
  /* Text Style inside the textbox */
  .wish-paragraph {
    font-size: 1.25rem; 
    /* Strong shadow for readability over background image */
    text-shadow: 1px 1px 3px #000000, 0 0 5px rgba(0,0,0,0.8);
  }
  @media (min-width: 768px) {
    .wish-paragraph {
      font-size: 1.5rem;
    }
  }

  /* Button Container */
  .button-container {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }

  /* Base Button Styling */
  .base-button {
    padding: 0.75rem 1.5rem;
    color: white;
    font-weight: 700;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    outline: none;
  }
  .base-button:hover {
    transform: scale(1.05);
  }
  .base-button:focus {
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
  }

  /* Next Button specific styles */
  .next-button {
    background-color: #6366f1; 
    font-size: 1.25rem; 
  }
  .next-button:hover {
    background-color: #4f46e5; 
  }
  .next-button:focus {
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5); 
  }

  /* Surprise Button specific styles */
  .surprise-button {
    background-color: #ef4444; 
    font-size: 1.5rem; 
    padding: 0.75rem 2rem; 
  }
  .surprise-button:hover {
    background-color: #dc2626; 
  }
  .surprise-button:focus {
    box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.5); 
  }

  /* Fade transition for the wishes */
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
`,qc=[{text:"Hey Chhoti Bachchi, See I've made a surprise website for you. Let's explore it. Hope you like it. Happy Birthday! ❤",step:0},{text:"Happy Birthday! Don't worry about getting older; you're just leveling up. Wishing you less adulting and more cake this year. Go celebrate, you legend! ❤",step:1},{text:"You're awesome! Wishing you a day that’s as incredible as you are. May your phone battery stay charged and your Wi-Fi be strong! Have a spectacular birthday! ❤",step:2}],ox=()=>{const[s,e]=Oe.useState(0),t=()=>{s<qc.length-1&&e(s+1)},r=()=>{console.log("Navigating to /surprise page..."),window.location.href="/surprise"},o=qc[s],l=s===qc.length-1;return Je.jsxs(Je.Fragment,{children:[Je.jsx("style",{children:sx}),Je.jsx("div",{className:"birthday-background",children:Je.jsxs("div",{className:"wish-card",style:{backgroundImage:`url(${rx})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:[Je.jsx("h1",{className:"card-title",children:"A Birthday Message Just For You"}),Je.jsx("div",{style:{backgroundImage:`url(${Pm})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"120px",height:"90px",filter:"drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",position:"absolute",right:"10px",top:"55px"}}),Je.jsx("div",{style:{backgroundImage:`url(${Pm})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"120px",height:"90px",filter:"drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.8))",position:"absolute",left:"10px",top:"55px"}}),Je.jsx("div",{className:"wish-text-box fade-enter-active",children:Je.jsx("p",{className:"wish-paragraph",children:o.text})},s),Je.jsx("div",{className:"button-container",children:l?Je.jsx("button",{onClick:r,className:"base-button surprise-button",children:"Reveal Your Surprise!"}):Je.jsxs("button",{onClick:t,className:"base-button next-button",children:[" ","Next >>>"]})}),Je.jsx("div",{style:{backgroundImage:`url(${Vg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"245px",height:"105px",position:"absolute",bottom:"5px",right:"5px"}})]})})]})};var $c,bm;function ax(){if(bm)return $c;bm=1;var s={linear:function(e,t,r,o){var l=r-t;return l*e/o+t},easeInQuad:function(e,t,r,o){var l=r-t;return l*(e/=o)*e+t},easeOutQuad:function(e,t,r,o){var l=r-t;return-l*(e/=o)*(e-2)+t},easeInOutQuad:function(e,t,r,o){var l=r-t;return(e/=o/2)<1?l/2*e*e+t:-l/2*(--e*(e-2)-1)+t},easeInCubic:function(e,t,r,o){var l=r-t;return l*(e/=o)*e*e+t},easeOutCubic:function(e,t,r,o){var l=r-t;return l*((e=e/o-1)*e*e+1)+t},easeInOutCubic:function(e,t,r,o){var l=r-t;return(e/=o/2)<1?l/2*e*e*e+t:l/2*((e-=2)*e*e+2)+t},easeInQuart:function(e,t,r,o){var l=r-t;return l*(e/=o)*e*e*e+t},easeOutQuart:function(e,t,r,o){var l=r-t;return-l*((e=e/o-1)*e*e*e-1)+t},easeInOutQuart:function(e,t,r,o){var l=r-t;return(e/=o/2)<1?l/2*e*e*e*e+t:-l/2*((e-=2)*e*e*e-2)+t},easeInQuint:function(e,t,r,o){var l=r-t;return l*(e/=o)*e*e*e*e+t},easeOutQuint:function(e,t,r,o){var l=r-t;return l*((e=e/o-1)*e*e*e*e+1)+t},easeInOutQuint:function(e,t,r,o){var l=r-t;return(e/=o/2)<1?l/2*e*e*e*e*e+t:l/2*((e-=2)*e*e*e*e+2)+t},easeInSine:function(e,t,r,o){var l=r-t;return-l*Math.cos(e/o*(Math.PI/2))+l+t},easeOutSine:function(e,t,r,o){var l=r-t;return l*Math.sin(e/o*(Math.PI/2))+t},easeInOutSine:function(e,t,r,o){var l=r-t;return-l/2*(Math.cos(Math.PI*e/o)-1)+t},easeInExpo:function(e,t,r,o){var l=r-t;return e==0?t:l*Math.pow(2,10*(e/o-1))+t},easeOutExpo:function(e,t,r,o){var l=r-t;return e==o?t+l:l*(-Math.pow(2,-10*e/o)+1)+t},easeInOutExpo:function(e,t,r,o){var l=r-t;return e===0?t:e===o?t+l:(e/=o/2)<1?l/2*Math.pow(2,10*(e-1))+t:l/2*(-Math.pow(2,-10*--e)+2)+t},easeInCirc:function(e,t,r,o){var l=r-t;return-l*(Math.sqrt(1-(e/=o)*e)-1)+t},easeOutCirc:function(e,t,r,o){var l=r-t;return l*Math.sqrt(1-(e=e/o-1)*e)+t},easeInOutCirc:function(e,t,r,o){var l=r-t;return(e/=o/2)<1?-l/2*(Math.sqrt(1-e*e)-1)+t:l/2*(Math.sqrt(1-(e-=2)*e)+1)+t},easeInElastic:function(e,t,r,o){var l=r-t,c,f,d;return d=1.70158,f=0,c=l,e===0?t:(e/=o)===1?t+l:(f||(f=o*.3),c<Math.abs(l)?(c=l,d=f/4):d=f/(2*Math.PI)*Math.asin(l/c),-(c*Math.pow(2,10*(e-=1))*Math.sin((e*o-d)*(2*Math.PI)/f))+t)},easeOutElastic:function(e,t,r,o){var l=r-t,c,f,d;return d=1.70158,f=0,c=l,e===0?t:(e/=o)===1?t+l:(f||(f=o*.3),c<Math.abs(l)?(c=l,d=f/4):d=f/(2*Math.PI)*Math.asin(l/c),c*Math.pow(2,-10*e)*Math.sin((e*o-d)*(2*Math.PI)/f)+l+t)},easeInOutElastic:function(e,t,r,o){var l=r-t,c,f,d;return d=1.70158,f=0,c=l,e===0?t:(e/=o/2)===2?t+l:(f||(f=o*(.3*1.5)),c<Math.abs(l)?(c=l,d=f/4):d=f/(2*Math.PI)*Math.asin(l/c),e<1?-.5*(c*Math.pow(2,10*(e-=1))*Math.sin((e*o-d)*(2*Math.PI)/f))+t:c*Math.pow(2,-10*(e-=1))*Math.sin((e*o-d)*(2*Math.PI)/f)*.5+l+t)},easeInBack:function(e,t,r,o,l){var c=r-t;return l===void 0&&(l=1.70158),c*(e/=o)*e*((l+1)*e-l)+t},easeOutBack:function(e,t,r,o,l){var c=r-t;return l===void 0&&(l=1.70158),c*((e=e/o-1)*e*((l+1)*e+l)+1)+t},easeInOutBack:function(e,t,r,o,l){var c=r-t;return l===void 0&&(l=1.70158),(e/=o/2)<1?c/2*(e*e*(((l*=1.525)+1)*e-l))+t:c/2*((e-=2)*e*(((l*=1.525)+1)*e+l)+2)+t},easeInBounce:function(e,t,r,o){var l=r-t,c;return c=s.easeOutBounce(o-e,0,l,o),l-c+t},easeOutBounce:function(e,t,r,o){var l=r-t;return(e/=o)<1/2.75?l*(7.5625*e*e)+t:e<2/2.75?l*(7.5625*(e-=1.5/2.75)*e+.75)+t:e<2.5/2.75?l*(7.5625*(e-=2.25/2.75)*e+.9375)+t:l*(7.5625*(e-=2.625/2.75)*e+.984375)+t},easeInOutBounce:function(e,t,r,o){var l=r-t,c;return e<o/2?(c=s.easeInBounce(e*2,0,l,o),c*.5+t):(c=s.easeOutBounce(e*2-o,0,l,o),c*.5+l*.5+t)}};return $c=s,$c}var lx=ax();function ux(s){return s*Math.PI/180}function Xn(s,e){return s+Math.random()*(e-s)}function cx(s,e){return Math.floor(s+Math.random()*(e-s+1))}var Jo;(function(s){s[s.Circle=0]="Circle",s[s.Square=1]="Square",s[s.Strip=2]="Strip"})(Jo||(Jo={}));var xr;(function(s){s[s.Positive=1]="Positive",s[s.Negative=-1]="Negative"})(xr||(xr={}));const fx=1e3/60;class hx{constructor(e,t,r,o){this.getOptions=t;const{colors:l,initialVelocityX:c,initialVelocityY:f}=this.getOptions();this.context=e,this.x=r,this.y=o,this.w=Xn(5,20),this.h=Xn(5,20),this.radius=Xn(5,10),this.vx=typeof c=="number"?Xn(-c,c):Xn(c.min,c.max),this.vy=typeof f=="number"?Xn(-f,0):Xn(f.min,f.max),this.shape=cx(0,2),this.angle=ux(Xn(0,360)),this.angularSpin=Xn(-.2,.2),this.color=l[Math.floor(Math.random()*l.length)],this.rotateY=Xn(0,1),this.rotationDirection=Xn(0,1)?xr.Positive:xr.Negative}update(e){const{gravity:t,wind:r,friction:o,opacity:l,drawShape:c}=this.getOptions(),f=e/fx;this.x+=this.vx*f,this.y+=this.vy*f,this.vy+=t*f,this.vx+=r*f,this.vx*=o**f,this.vy*=o**f,this.rotateY>=1&&this.rotationDirection===xr.Positive?this.rotationDirection=xr.Negative:this.rotateY<=-1&&this.rotationDirection===xr.Negative&&(this.rotationDirection=xr.Positive);const d=.1*this.rotationDirection*f;if(this.rotateY+=d,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=l,this.context.lineCap="round",this.context.lineWidth=2,c&&typeof c=="function")c.call(this,this.context);else switch(this.shape){case Jo.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case Jo.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case Jo.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class dx{constructor(e,t){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=o=>{this.particles.splice(o,1)},this.getParticle=()=>{const o=Xn(this.x,this.w+this.x),l=Xn(this.y,this.h+this.y);return new hx(this.context,this.getOptions,o,l)},this.animate=o=>{const{canvas:l,context:c,particlesGenerated:f,lastNumberOfPieces:d}=this,{run:p,recycle:g,numberOfPieces:_,debug:x,tweenFunction:S,tweenDuration:T}=this.getOptions();if(!p)return!1;const w=this.particles.length,y=g?w:f;if(y<_){d!==_&&(this.tweenProgress=0,this.tweenFrom=y,this.lastNumberOfPieces=_),this.tweenProgress=Math.min(T,Math.max(0,this.tweenProgress+o));const v=S(this.tweenProgress,this.tweenFrom,_,T),U=Math.round(v-y);for(let N=0;N<U;N++)this.particles.push(this.getParticle());this.particlesGenerated+=U}x&&(c.font="12px sans-serif",c.fillStyle="#333",c.textAlign="right",c.fillText(`Particles: ${w}`,l.width-10,l.height-20));for(let v=this.particles.length-1;v>=0;v--){const U=this.particles[v];U.update(o),(U.y>l.height||U.y<-100||U.x>l.width+100||U.x<-100)&&(g&&y<=_?this.particles[v]=this.getParticle():this.removeParticleAt(v))}return w>0||y<_},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.getOptions=t}}const Ph={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:lx.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class px{constructor(e,t){this.lastFrameTime=0,this.setOptionsWithDefaults=o=>{const l={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...l,...Ph,...o},Object.assign(this,o.confettiSource)},this.update=(o=0)=>{const{options:{run:l,onConfettiComplete:c,frameRate:f},canvas:d,context:p}=this,g=Math.min(o-this.lastFrameTime,50);if(f&&g<1e3/f){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=o-(f?g%f:0),l&&(p.fillStyle="white",p.clearRect(0,0,d.width,d.height)),this.generator.animate(g)?this.rafId=requestAnimationFrame(this.update):(c&&typeof c=="function"&&this.generator.particlesGenerated>0&&c.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=e;const r=this.canvas.getContext("2d");if(!r)throw new Error("Could not get canvas context");this.context=r,this.generator=new dx(this.canvas,()=>this.options),this.options=t,this.update()}get options(){return this._options}set options(e){const t=this._options?.run,r=this._options?.recycle;this.setOptionsWithDefaults(e),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof e.recycle=="boolean"&&e.recycle&&r===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof e.run=="boolean"&&e.run&&t===!1&&this.update()}}const mx=to.createRef();class bh extends to.Component{constructor(e){super(e),this.canvas=to.createRef(),this.canvas=e.canvasRef||mx}componentDidMount(){if(this.canvas.current){const e=Kc(this.props)[0];this.confetti=new px(this.canvas.current,e)}}componentDidUpdate(){const e=Kc(this.props)[0];this.confetti&&(this.confetti.options=e)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[e,t]=Kc(this.props),r={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...t.style};return Je.jsx("canvas",{width:e.width,height:e.height,ref:this.canvas,...t,style:r})}}bh.defaultProps={...Ph};bh.displayName="ReactConfetti";function Kc(s){const e={},t={},r={},o=[...Object.keys(Ph),"confettiSource","drawShape","onConfettiComplete","frameRate"],l=["canvasRef"];for(const c in s){const f=s[c];o.includes(c)?e[c]=f:l.includes(c)?l[c]=f:r[c]=f}return[e,r,t]}const gx=to.forwardRef((s,e)=>Je.jsx(bh,{canvasRef:e,...s})),_x="/assets/decor-CpaPnlSd.png",Dm="/assets/hkitty-mOW3DmQZ.gif",vx="/assets/hbds-CvIWPSl-.mp3",xx="/assets/chipchip-NjwS3rSf.gif";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="180",Qs={ROTATE:0,DOLLY:1,PAN:2},Ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yx=0,Lm=1,Sx=2,Gg=1,Ex=2,zi=3,Ar=0,On=1,Hi=2,Mr=0,Js=1,Im=2,Um=3,Nm=4,Mx=5,Kr=100,Tx=101,wx=102,Ax=103,Rx=104,Cx=200,Px=201,bx=202,Dx=203,Nf=204,Ff=205,Lx=206,Ix=207,Ux=208,Nx=209,Fx=210,Ox=211,kx=212,Bx=213,zx=214,Of=0,kf=1,Bf=2,no=3,zf=4,Hf=5,Vf=6,Gf=7,Wg=0,Hx=1,Vx=2,Tr=0,Gx=1,Wx=2,Xx=3,jx=4,Yx=5,qx=6,$x=7,Xg=300,io=301,ro=302,Wf=303,Xf=304,au=306,jf=1e3,Qr=1001,Yf=1002,mi=1003,Kx=1004,vl=1005,Ei=1006,Zc=1007,Jr=1008,Xi=1009,jg=1010,Yg=1011,na=1012,Lh=1013,ns=1014,Vi=1015,la=1016,Ih=1017,Uh=1018,ia=1020,qg=35902,$g=35899,Kg=1021,Zg=1022,pi=1023,ra=1026,sa=1027,Qg=1028,Nh=1029,Jg=1030,Fh=1031,Oh=1033,Yl=33776,ql=33777,$l=33778,Kl=33779,qf=35840,$f=35841,Kf=35842,Zf=35843,Qf=36196,Jf=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,uh=37816,ch=37817,fh=37818,hh=37819,dh=37820,ph=37821,mh=36492,gh=36494,_h=36495,vh=36283,xh=36284,yh=36285,Sh=36286,Zx=3200,Qx=3201,Jx=0,ey=1,Sr="",ei="srgb",so="srgb-linear",tu="linear",Dt="srgb",Ds=7680,Fm=519,ty=512,ny=513,iy=514,e_=515,ry=516,sy=517,oy=518,ay=519,Eh=35044,Om="300 es",Mi=2e3,nu=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,Mh=180/Math.PI;function wr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function ly(s,e){return(s%e+e)%e}function Qc(s,e,t){return(1-t)*s+t*e}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const uy={DEG2RAD:Zl};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class is{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];const x=l[c+0],S=l[c+1],T=l[c+2],w=l[c+3];if(f===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f===1){e[t+0]=x,e[t+1]=S,e[t+2]=T,e[t+3]=w;return}if(_!==w||d!==x||p!==S||g!==T){let y=1-f;const v=d*x+p*S+g*T+_*w,U=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const z=Math.sqrt(N),k=Math.atan2(z,v*U);y=Math.sin(y*k)/z,f=Math.sin(f*k)/z}const P=f*U;if(d=d*y+x*P,p=p*y+S*P,g=g*y+T*P,_=_*y+w*P,y===1-f){const z=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=z,p*=z,g*=z,_*=z}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],p=r[o+2],g=r[o+3],_=l[c],x=l[c+1],S=l[c+2],T=l[c+3];return e[t]=f*T+g*_+d*S-p*x,e[t+1]=d*T+g*x+p*_-f*S,e[t+2]=p*T+g*S+f*x-d*_,e[t+3]=g*T-f*_-d*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,p=f(r/2),g=f(o/2),_=f(l/2),x=d(r/2),S=d(o/2),T=d(l/2);switch(c){case"XYZ":this._x=x*g*_+p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_-x*S*T;break;case"YXZ":this._x=x*g*_+p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_+x*S*T;break;case"ZXY":this._x=x*g*_-p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_-x*S*T;break;case"ZYX":this._x=x*g*_-p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_+x*S*T;break;case"YZX":this._x=x*g*_+p*S*T,this._y=p*S*_+x*g*T,this._z=p*g*T-x*S*_,this._w=p*g*_-x*S*T;break;case"XZY":this._x=x*g*_-p*S*T,this._y=p*S*_-x*g*T,this._z=p*g*T+x*S*_,this._w=p*g*_+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],p=t[2],g=t[6],_=t[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(g-d)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+c*f+o*p-l*d,this._y=o*g+c*d+l*f-r*p,this._z=l*g+c*p+r*d-o*f,this._w=c*g-r*f-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let f=c*e._w+r*e._x+o*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=c*_+this._w*x,this._x=r*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,p=2*(c*o-f*r),g=2*(f*t-l*o),_=2*(l*r-c*t);return this.x=t+d*p+c*_-f*g,this.y=r+d*g+f*p-l*_,this.z=o+d*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new $,km=new is;class dt{constructor(e,t,r,o,l,c,f,d,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,p)}set(e,t,r,o,l,c,f,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],p=r[1],g=r[4],_=r[7],x=r[2],S=r[5],T=r[8],w=o[0],y=o[3],v=o[6],U=o[1],N=o[4],P=o[7],z=o[2],k=o[5],I=o[8];return l[0]=c*w+f*U+d*z,l[3]=c*y+f*N+d*k,l[6]=c*v+f*P+d*I,l[1]=p*w+g*U+_*z,l[4]=p*y+g*N+_*k,l[7]=p*v+g*P+_*I,l[2]=x*w+S*U+T*z,l[5]=x*y+S*N+T*k,l[8]=x*v+S*P+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8];return t*c*g-t*f*p-r*l*g+r*f*d+o*l*p-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=g*c-f*p,x=f*d-g*l,S=p*l-c*d,T=t*_+r*x+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=_*w,e[1]=(o*p-g*r)*w,e[2]=(f*r-o*c)*w,e[3]=x*w,e[4]=(g*t-o*d)*w,e[5]=(o*l-f*t)*w,e[6]=S*w,e[7]=(r*d-p*t)*w,e[8]=(c*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*c+p*f)+c+e,-o*p,o*d,-o*(-p*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(ef.makeScale(e,t)),this}rotate(e){return this.premultiply(ef.makeRotation(-e)),this}translate(e,t){return this.premultiply(ef.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ef=new dt;function t_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cy(){const s=oa("canvas");return s.style.display="block",s}const Bm={};function aa(s){s in Bm||(Bm[s]=!0,console.warn(s))}function fy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const zm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const s={enabled:!0,workingColorSpace:so,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Dt&&(o.r=Wi(o.r),o.g=Wi(o.g),o.b=Wi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=eo(o.r),o.g=eo(o.g),o.b=eo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?tu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return aa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return aa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[so]:{primaries:e,whitePoint:r,transfer:tu,toXYZ:zm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:zm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Tt=hy();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class dy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=oa("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Wi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wi(t[r]/255)*255):t[r]=Wi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(tf(o[c].image)):l.push(tf(o[c]))}else l=tf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function tf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;const nf=new $;class En extends ss{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,r=Qr,o=Qr,l=Ei,c=Jr,f=pi,d=Xi,p=En.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=wr(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nf).x}get height(){return this.source.getSize(nf).y}get depth(){return this.source.getSize(nf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Xg;En.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],g=d[4],_=d[8],x=d[1],S=d[5],T=d[9],w=d[2],y=d[6],v=d[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(T+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,P=(S+1)/2,z=(v+1)/2,k=(g+x)/4,I=(_+w)/4,X=(T+y)/4;return N>P&&N>z?N<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(N),o=k/r,l=I/r):P>z?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=k/o,l=X/o):z<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(z),r=I/l,o=X/l),this.set(r,o,l,t),this}let U=Math.sqrt((y-T)*(y-T)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(_-w)/U,this.z=(x-g)/U,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=xt(this.x,e.x,t.x),this.y=xt(this.y,e.y,t.y),this.z=xt(this.z,e.z,t.z),this.w=xt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=xt(this.x,e,t),this.y=xt(this.y,e,t),this.z=xt(this.z,e,t),this.w=xt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new En(o);this.textures=[];const c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isArrayTexture=this.textures[o].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new kh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends gy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class n_ extends En{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends En{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ua{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,fi):fi.fromBufferAttribute(l,c),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xl.copy(r.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),yl.subVectors(this.max,Xo),Is.subVectors(e.a,Xo),Us.subVectors(e.b,Xo),Ns.subVectors(e.c,Xo),dr.subVectors(Us,Is),pr.subVectors(Ns,Us),Gr.subVectors(Is,Ns);let t=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Gr.z,Gr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Gr.z,0,-Gr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Gr.y,Gr.x,0];return!rf(t,Is,Us,Ns,yl)||(t=[1,0,0,0,1,0,0,0,1],!rf(t,Is,Us,Ns,yl))?!1:(Sl.crossVectors(dr,pr),t=[Sl.x,Sl.y,Sl.z],rf(t,Is,Us,Ns,yl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new $,new $,new $,new $,new $,new $,new $,new $],fi=new $,xl=new ua,Is=new $,Us=new $,Ns=new $,dr=new $,pr=new $,Gr=new $,Xo=new $,yl=new $,Sl=new $,Wr=new $;function rf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Wr.fromArray(s,l);const f=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),d=e.dot(Wr),p=t.dot(Wr),g=r.dot(Wr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const vy=new ua,jo=new $,sf=new $;class lu{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):vy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const t=jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(jo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(sf)),this.expandByPoint(jo.copy(e.center).sub(sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Fi=new $,of=new $,El=new $,mr=new $,af=new $,Ml=new $,lf=new $;class Bh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){of.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(of);const l=e.distanceTo(t)*.5,c=-this.direction.dot(El),f=mr.dot(this.direction),d=-mr.dot(El),p=mr.lengthSq(),g=Math.abs(1-c*c);let _,x,S,T;if(g>0)if(_=c*d-f,x=c*f-d,T=l*g,_>=0)if(x>=-T)if(x<=T){const w=1/g;_*=w,x*=w,S=_*(_+c*x+2*f)+x*(c*_+x+2*d)+p}else x=l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*d)+p;else x=-l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*d)+p;else x<=-T?(_=Math.max(0,-(-c*l+f)),x=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+x*(x+2*d)+p):x<=T?(_=0,x=Math.min(Math.max(-l,-d),l),S=x*(x+2*d)+p):(_=Math.max(0,-(c*l+f)),x=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+x*(x+2*d)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+f)),S=-_*_+x*(x+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(of).addScaledVector(El,x),S}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-x.z)*_,d=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,d=(e.min.z-x.z)*_),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,l){af.subVectors(t,e),Ml.subVectors(r,e),lf.crossVectors(af,Ml);let c=this.direction.dot(lf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;mr.subVectors(this.origin,e);const d=f*this.direction.dot(Ml.crossVectors(mr,Ml));if(d<0)return null;const p=f*this.direction.dot(af.cross(mr));if(p<0||d+p>c)return null;const g=-f*mr.dot(lf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,r,o,l,c,f,d,p,g,_,x,S,T,w,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,p,g,_,x,S,T,w,y)}set(e,t,r,o,l,c,f,d,p,g,_,x,S,T,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=f,v[13]=d,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=T,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),l=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,S=c*_,T=f*g,w=f*_;t[0]=d*g,t[4]=-d*_,t[8]=p,t[1]=S+T*p,t[5]=x-w*p,t[9]=-f*d,t[2]=w-x*p,t[6]=T+S*p,t[10]=c*d}else if(e.order==="YXZ"){const x=d*g,S=d*_,T=p*g,w=p*_;t[0]=x+w*f,t[4]=T*f-S,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=S*f-T,t[6]=w+x*f,t[10]=c*d}else if(e.order==="ZXY"){const x=d*g,S=d*_,T=p*g,w=p*_;t[0]=x-w*f,t[4]=-c*_,t[8]=T+S*f,t[1]=S+T*f,t[5]=c*g,t[9]=w-x*f,t[2]=-c*p,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const x=c*g,S=c*_,T=f*g,w=f*_;t[0]=d*g,t[4]=T*p-S,t[8]=x*p+w,t[1]=d*_,t[5]=w*p+x,t[9]=S*p-T,t[2]=-p,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const x=c*d,S=c*p,T=f*d,w=f*p;t[0]=d*g,t[4]=w-x*_,t[8]=T*_+S,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-p*g,t[6]=S*_+T,t[10]=x-w*_}else if(e.order==="XZY"){const x=c*d,S=c*p,T=f*d,w=f*p;t[0]=d*g,t[4]=-_,t[8]=p*g,t[1]=x*_+w,t[5]=c*g,t[9]=S*_-T,t[2]=T*_-S,t[6]=f*g,t[10]=w*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,yy)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),gr.crossVectors(r,Gn),gr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),gr.crossVectors(r,Gn)),gr.normalize(),Tl.crossVectors(Gn,gr),o[0]=gr.x,o[4]=Tl.x,o[8]=Gn.x,o[1]=gr.y,o[5]=Tl.y,o[9]=Gn.y,o[2]=gr.z,o[6]=Tl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],p=r[12],g=r[1],_=r[5],x=r[9],S=r[13],T=r[2],w=r[6],y=r[10],v=r[14],U=r[3],N=r[7],P=r[11],z=r[15],k=o[0],I=o[4],X=o[8],C=o[12],R=o[1],B=o[5],J=o[9],ie=o[13],fe=o[2],le=o[6],ae=o[10],ce=o[14],H=o[3],oe=o[7],b=o[11],K=o[15];return l[0]=c*k+f*R+d*fe+p*H,l[4]=c*I+f*B+d*le+p*oe,l[8]=c*X+f*J+d*ae+p*b,l[12]=c*C+f*ie+d*ce+p*K,l[1]=g*k+_*R+x*fe+S*H,l[5]=g*I+_*B+x*le+S*oe,l[9]=g*X+_*J+x*ae+S*b,l[13]=g*C+_*ie+x*ce+S*K,l[2]=T*k+w*R+y*fe+v*H,l[6]=T*I+w*B+y*le+v*oe,l[10]=T*X+w*J+y*ae+v*b,l[14]=T*C+w*ie+y*ce+v*K,l[3]=U*k+N*R+P*fe+z*H,l[7]=U*I+N*B+P*le+z*oe,l[11]=U*X+N*J+P*ae+z*b,l[15]=U*C+N*ie+P*ce+z*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],T=e[3],w=e[7],y=e[11],v=e[15];return T*(+l*d*_-o*p*_-l*f*x+r*p*x+o*f*S-r*d*S)+w*(+t*d*S-t*p*x+l*c*x-o*c*S+o*p*g-l*d*g)+y*(+t*p*_-t*f*S-l*c*_+r*c*S+l*f*g-r*p*g)+v*(-o*f*g-t*d*_+t*f*x+o*c*_-r*c*x+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],T=e[12],w=e[13],y=e[14],v=e[15],U=_*y*p-w*x*p+w*d*S-f*y*S-_*d*v+f*x*v,N=T*x*p-g*y*p-T*d*S+c*y*S+g*d*v-c*x*v,P=g*w*p-T*_*p+T*f*S-c*w*S-g*f*v+c*_*v,z=T*_*d-g*w*d-T*f*x+c*w*x+g*f*y-c*_*y,k=t*U+r*N+o*P+l*z;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/k;return e[0]=U*I,e[1]=(w*x*l-_*y*l-w*o*S+r*y*S+_*o*v-r*x*v)*I,e[2]=(f*y*l-w*d*l+w*o*p-r*y*p-f*o*v+r*d*v)*I,e[3]=(_*d*l-f*x*l-_*o*p+r*x*p+f*o*S-r*d*S)*I,e[4]=N*I,e[5]=(g*y*l-T*x*l+T*o*S-t*y*S-g*o*v+t*x*v)*I,e[6]=(T*d*l-c*y*l-T*o*p+t*y*p+c*o*v-t*d*v)*I,e[7]=(c*x*l-g*d*l+g*o*p-t*x*p-c*o*S+t*d*S)*I,e[8]=P*I,e[9]=(T*_*l-g*w*l-T*r*S+t*w*S+g*r*v-t*_*v)*I,e[10]=(c*w*l-T*f*l+T*r*p-t*w*p-c*r*v+t*f*v)*I,e[11]=(g*f*l-c*_*l-g*r*p+t*_*p+c*r*S-t*f*S)*I,e[12]=z*I,e[13]=(g*w*o-T*_*o+T*r*x-t*w*x-g*r*y+t*_*y)*I,e[14]=(T*f*o-c*w*o-T*r*d+t*w*d+c*r*y-t*f*y)*I,e[15]=(c*_*o-g*f*o+g*r*d-t*_*d-c*r*x+t*f*x)*I,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,p=l*c,g=l*f;return this.set(p*c+r,p*f-o*d,p*d+o*f,0,p*f+o*d,g*f+r,g*d-o*c,0,p*d-o*f,g*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,p=l+l,g=c+c,_=f+f,x=l*p,S=l*g,T=l*_,w=c*g,y=c*_,v=f*_,U=d*p,N=d*g,P=d*_,z=r.x,k=r.y,I=r.z;return o[0]=(1-(w+v))*z,o[1]=(S+P)*z,o[2]=(T-N)*z,o[3]=0,o[4]=(S-P)*k,o[5]=(1-(x+v))*k,o[6]=(y+U)*k,o[7]=0,o[8]=(T+N)*I,o[9]=(y-U)*I,o[10]=(1-(x+w))*I,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Fs.set(o[0],o[1],o[2]).length();const c=Fs.set(o[4],o[5],o[6]).length(),f=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const p=1/l,g=1/c,_=1/f;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),r.x=l,r.y=c,r.z=f,this}makePerspective(e,t,r,o,l,c,f=Mi,d=!1){const p=this.elements,g=2*l/(t-e),_=2*l/(r-o),x=(t+e)/(t-e),S=(r+o)/(r-o);let T,w;if(d)T=l/(c-l),w=c*l/(c-l);else if(f===Mi)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(f===nu)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Mi,d=!1){const p=this.elements,g=2/(t-e),_=2/(r-o),x=-(t+e)/(t-e),S=-(r+o)/(r-o);let T,w;if(d)T=1/(c-l),w=c/(c-l);else if(f===Mi)T=-2/(c-l),w=-(c+l)/(c-l);else if(f===nu)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Fs=new $,hi=new $t,xy=new $(0,0,0),yy=new $(1,1,1),gr=new $,Tl=new $,Gn=new $,Vm=new $t,Gm=new is;class ji{constructor(e=0,t=0,r=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],p=o[5],g=o[9],_=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-xt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Vm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gm.setFromEuler(this),this.setFromQuaternion(Gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const Wm=new $,Os=new is,Oi=new $t,wl=new $,Yo=new $,Ey=new $,My=new is,Xm=new $(1,0,0),jm=new $(0,1,0),Ym=new $(0,0,1),qm={type:"added"},Ty={type:"removed"},ks={type:"childadded",child:null},uf={type:"childremoved",child:null};class Mn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new $,t=new ji,r=new is,o=new $(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new dt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wl.copy(e):wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Yo,wl,this.up):Oi.lookAt(wl,Yo,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Oi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ty),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,Ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),S=c(e.animations),T=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function c(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mn.DEFAULT_UP=new $(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new $,ki=new $,cf=new $,Bi=new $,Bs=new $,zs=new $,$m=new $,ff=new $,hf=new $,df=new $,pf=new qt,mf=new qt,gf=new qt;class ni{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){di.subVectors(o,t),ki.subVectors(r,t),cf.subVectors(e,t);const c=di.dot(di),f=di.dot(ki),d=di.dot(cf),p=ki.dot(ki),g=ki.dot(cf),_=c*p-f*f;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*d-f*g)*x,T=(c*g-f*d)*x;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,Bi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Bi.x),d.addScaledVector(c,Bi.y),d.addScaledVector(f,Bi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return pf.setScalar(0),mf.setScalar(0),gf.setScalar(0),pf.fromBufferAttribute(e,t),mf.fromBufferAttribute(e,r),gf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(pf,l.x),c.addScaledVector(mf,l.y),c.addScaledVector(gf,l.z),c}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),ki.subVectors(e,t),di.cross(ki).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),di.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Bs.subVectors(o,r),zs.subVectors(l,r),ff.subVectors(e,r);const d=Bs.dot(ff),p=zs.dot(ff);if(d<=0&&p<=0)return t.copy(r);hf.subVectors(e,o);const g=Bs.dot(hf),_=zs.dot(hf);if(g>=0&&_<=g)return t.copy(o);const x=d*_-g*p;if(x<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(r).addScaledVector(Bs,c);df.subVectors(e,l);const S=Bs.dot(df),T=zs.dot(df);if(T>=0&&S<=T)return t.copy(l);const w=S*p-d*T;if(w<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(zs,f);const y=g*T-S*_;if(y<=0&&_-g>=0&&S-T>=0)return $m.subVectors(l,o),f=(_-g)/(_-g+(S-T)),t.copy(o).addScaledVector($m,f);const v=1/(y+w+x);return c=w*v,f=x*v,t.copy(r).addScaledVector(Bs,c).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Al={h:0,s:0,l:0};function _f(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=ly(e,1),t=xt(t,0,1),r=xt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=_f(c,l,e+1/3),this.g=_f(c,l,e),this.b=_f(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=r_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Tt.workingToColorSpace(Sn.copy(this),e),Math.round(xt(Sn.r*255,0,255))*65536+Math.round(xt(Sn.g*255,0,255))*256+Math.round(xt(Sn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,p;const g=(f+c)/2;if(f===c)d=0,p=0;else{const _=c-f;switch(p=g<=.5?_/(c+f):_/(2-c-f),c){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ei){Tt.workingToColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Al);const r=Qc(_r.h,Al.h,t),o=Qc(_r.s,Al.s,t),l=Qc(_r.l,Al.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new wt;wt.NAMES=r_;let wy=0;class uo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=wr(),this.name="",this.type="Material",this.blending=Js,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Ff,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nf&&(r.blendSrc=this.blendSrc),this.blendDst!==Ff&&(r.blendDst=this.blendDst),this.blendEquation!==Kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class s_ extends uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=Wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new $,Rl=new ct;let Ay=0;class ii{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ay++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Eh,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Si(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Eh&&(e.usage=this.usage),e}}class o_ extends ii{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class a_ extends ii{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ts extends ii{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Ry=0;const Jn=new $t,vf=new Mn,Hs=new $,Wn=new ua,qo=new ua,cn=new $;class Ti extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?a_:o_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return vf.lookAt(e),vf.updateMatrix(),this.applyMatrix4(vf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ts(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];qo.setFromBufferAttribute(f),this.morphTargetsRelative?(cn.addVectors(Wn.min,qo.min),Wn.expandByPoint(cn),cn.addVectors(Wn.max,qo.max),Wn.expandByPoint(cn)):(Wn.expandByPoint(qo.min),Wn.expandByPoint(qo.max))}Wn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)cn.fromBufferAttribute(f,p),d&&(Hs.fromBufferAttribute(e,p),cn.add(Hs)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let X=0;X<r.count;X++)f[X]=new $,d[X]=new $;const p=new $,g=new $,_=new $,x=new ct,S=new ct,T=new ct,w=new $,y=new $;function v(X,C,R){p.fromBufferAttribute(r,X),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,R),x.fromBufferAttribute(l,X),S.fromBufferAttribute(l,C),T.fromBufferAttribute(l,R),g.sub(p),_.sub(p),S.sub(x),T.sub(x);const B=1/(S.x*T.y-T.x*S.y);isFinite(B)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(B),f[X].add(w),f[C].add(w),f[R].add(w),d[X].add(y),d[C].add(y),d[R].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,C=U.length;X<C;++X){const R=U[X],B=R.start,J=R.count;for(let ie=B,fe=B+J;ie<fe;ie+=3)v(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const N=new $,P=new $,z=new $,k=new $;function I(X){z.fromBufferAttribute(o,X),k.copy(z);const C=f[X];N.copy(C),N.sub(z.multiplyScalar(z.dot(C))).normalize(),P.crossVectors(k,C);const B=P.dot(d[X])<0?-1:1;c.setXYZW(X,N.x,N.y,N.z,B)}for(let X=0,C=U.length;X<C;++X){const R=U[X],B=R.start,J=R.count;for(let ie=B,fe=B+J;ie<fe;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ii(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new $,l=new $,c=new $,f=new $,d=new $,p=new $,g=new $,_=new $;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,y),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),f.fromBufferAttribute(r,T),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),f.add(g),d.add(g),p.add(g),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(f,d){const p=f.array,g=f.itemSize,_=f.normalized,x=new p.constructor(d.length*g);let S=0,T=0;for(let w=0,y=d.length;w<y;w++){f.isInterleavedBufferAttribute?S=d[w]*f.data.stride+f.offset:S=d[w]*g;for(let v=0;v<g;v++)x[T++]=p[S++]}return new ii(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ti,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],p=e(d,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,r);d.push(S)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Km=new $t,Xr=new Bh,Cl=new lu,Zm=new $,Pl=new $,bl=new $,Dl=new $,xf=new $,Ll=new $,Qm=new $,Il=new $;class Gi extends Mn{constructor(e=new Ti,t=new s_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ll.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],_=l[d];g!==0&&(xf.fromBufferAttribute(_,e),c?Ll.addScaledVector(xf,g):Ll.addScaledVector(xf.sub(t),g))}t.add(Ll)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Cl.copy(r.boundingSphere),Cl.applyMatrix4(l),Xr.copy(e.ray).recast(e.near),!(Cl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Cl,Zm)===null||Xr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Km.copy(l).invert(),Xr.copy(e.ray).applyMatrix4(Km),!(r.boundingBox!==null&&Xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=c[y.materialIndex],U=Math.max(y.start,S.start),N=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,z=N;P<z;P+=3){const k=f.getX(P),I=f.getX(P+1),X=f.getX(P+2);o=Ul(this,v,e,r,p,g,_,k,I,X),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const U=f.getX(y),N=f.getX(y+1),P=f.getX(y+2);o=Ul(this,c,e,r,p,g,_,U,N,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,w=x.length;T<w;T++){const y=x[T],v=c[y.materialIndex],U=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,z=N;P<z;P+=3){const k=P,I=P+1,X=P+2;o=Ul(this,v,e,r,p,g,_,k,I,X),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=T,v=w;y<v;y+=3){const U=y,N=y+1,P=y+2;o=Ul(this,c,e,r,p,g,_,U,N,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Cy(s,e,t,r,o,l,c,f){let d;if(e.side===On?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===Ar,f),d===null)return null;Il.copy(f),Il.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Il);return p<t.near||p>t.far?null:{distance:p,point:Il.clone(),object:s}}function Ul(s,e,t,r,o,l,c,f,d,p){s.getVertexPosition(f,Pl),s.getVertexPosition(d,bl),s.getVertexPosition(p,Dl);const g=Cy(s,e,t,r,Pl,bl,Dl,Qm);if(g){const _=new $;ni.getBarycoord(Qm,Pl,bl,Dl,_),o&&(g.uv=ni.getInterpolatedAttribute(o,f,d,p,_,new ct)),l&&(g.uv1=ni.getInterpolatedAttribute(l,f,d,p,_,new ct)),c&&(g.normal=ni.getInterpolatedAttribute(c,f,d,p,_,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:f,b:d,c:p,normal:new $,materialIndex:0};ni.getNormal(Pl,bl,Dl,x.normal),g.face=x,g.barycoord=_}return g}class ca extends Ti{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],p=[],g=[],_=[];let x=0,S=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,o,c,2),T("x","z","y",1,-1,e,r,-t,o,c,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new ts(p,3)),this.setAttribute("normal",new ts(g,3)),this.setAttribute("uv",new ts(_,2));function T(w,y,v,U,N,P,z,k,I,X,C){const R=P/I,B=z/X,J=P/2,ie=z/2,fe=k/2,le=I+1,ae=X+1;let ce=0,H=0;const oe=new $;for(let b=0;b<ae;b++){const K=b*B-ie;for(let ve=0;ve<le;ve++){const Ge=ve*R-J;oe[w]=Ge*U,oe[y]=K*N,oe[v]=fe,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[y]=0,oe[v]=k>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(ve/I),_.push(1-b/X),ce+=1}}for(let b=0;b<X;b++)for(let K=0;K<I;K++){const ve=x+K+le*b,Ge=x+K+le*(b+1),ke=x+(K+1)+le*(b+1),Ke=x+(K+1)+le*b;d.push(ve,Ge,Ke),d.push(Ge,ke,Ke),H+=6}f.addGroup(S,H,C),S+=H,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=oo(s[t]);for(const o in r)e[o]=r[o]}return e}function Py(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function l_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const by={clone:oo,merge:Pn};var Dy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ly=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dy,this.fragmentShader=Ly,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class u_ extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new $,Jm=new ct,eg=new ct;class ti extends u_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,eg),t.subVectors(eg,Jm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/p,o*=c.width/d,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class Iy extends Mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const l=new ti(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const c=new ti(Vs,Gs,e,t);c.layers=this.layers,this.add(c);const f=new ti(Vs,Gs,e,t);f.layers=this.layers,this.add(f);const d=new ti(Vs,Gs,e,t);d.layers=this.layers,this.add(d);const p=new ti(Vs,Gs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const p of t)this.remove(p);if(e===Mi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===nu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class c_ extends En{constructor(e=[],t=io,r,o,l,c,f,d,p,g){super(e,t,r,o,l,c,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uy extends rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new c_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ca(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:oo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Mr});l.uniforms.tEquirect.value=t;const c=new Gi(o,l),f=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Ei),new Iy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Nl extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class yf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&x>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Nl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Fy extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Oy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Eh,this.updateRanges=[],this.version=0,this.uuid=wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Cn=new $;class iu{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Si(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Lt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),o=Lt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),r=Lt(r,this.array),o=Lt(o,this.array),l=Lt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new ii(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ql extends uo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ws;const $o=new $,Xs=new $,js=new $,Ys=new ct,Ko=new ct,f_=new $t,Fl=new $,Zo=new $,Ol=new $,tg=new ct,Sf=new ct,ng=new ct;class Ef extends Mn{constructor(e=new Ql){if(super(),this.isSprite=!0,this.type="Sprite",Ws===void 0){Ws=new Ti;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Oy(t,5);Ws.setIndex([0,1,2,0,2,3]),Ws.setAttribute("position",new iu(r,3,0,!1)),Ws.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Ws,this.material=e,this.center=new ct(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Xs.setFromMatrixScale(this.matrixWorld),f_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Xs.multiplyScalar(-js.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const c=this.center;kl(Fl.set(-.5,-.5,0),js,c,Xs,o,l),kl(Zo.set(.5,-.5,0),js,c,Xs,o,l),kl(Ol.set(.5,.5,0),js,c,Xs,o,l),tg.set(0,0),Sf.set(1,0),ng.set(1,1);let f=e.ray.intersectTriangle(Fl,Zo,Ol,!1,$o);if(f===null&&(kl(Zo.set(-.5,.5,0),js,c,Xs,o,l),Sf.set(0,1),f=e.ray.intersectTriangle(Fl,Ol,Zo,!1,$o),f===null))return;const d=e.ray.origin.distanceTo($o);d<e.near||d>e.far||t.push({distance:d,point:$o.clone(),uv:ni.getInterpolation($o,Fl,Zo,Ol,tg,Sf,ng,new ct),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kl(s,e,t,r,o,l){Ys.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Ko.x=l*Ys.x-o*Ys.y,Ko.y=o*Ys.x+l*Ys.y):Ko.copy(Ys),s.copy(e),s.x+=Ko.x,s.y+=Ko.y,s.applyMatrix4(f_)}const Mf=new $,ky=new $,By=new dt;class yr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Mf.subVectors(r,t).cross(ky.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Mf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||By.getNormalMatrix(e),o=this.coplanarPoint(Mf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new lu,zy=new ct(.5,.5),Bl=new $;class h_{constructor(e=new yr,t=new yr,r=new yr,o=new yr,l=new yr,c=new yr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Mi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],p=l[3],g=l[4],_=l[5],x=l[6],S=l[7],T=l[8],w=l[9],y=l[10],v=l[11],U=l[12],N=l[13],P=l[14],z=l[15];if(o[0].setComponents(p-c,S-g,v-T,z-U).normalize(),o[1].setComponents(p+c,S+g,v+T,z+U).normalize(),o[2].setComponents(p+f,S+_,v+w,z+N).normalize(),o[3].setComponents(p-f,S-_,v-w,z-N).normalize(),r)o[4].setComponents(d,x,y,P).normalize(),o[5].setComponents(p-d,S-x,v-y,z-P).normalize();else if(o[4].setComponents(p-d,S-x,v-y,z-P).normalize(),t===Mi)o[5].setComponents(p+d,S+x,v+y,z+P).normalize();else if(t===nu)o[5].setComponents(d,x,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){jr.center.set(0,0,0);const t=zy.distanceTo(e.center);return jr.radius=.7071067811865476+t,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d_ extends uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ig=new $t,Th=new Bh,zl=new lu,Hl=new $;class Hy extends Mn{constructor(e=new Ti,t=new d_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;ig.copy(o).invert(),Th.copy(e.ray).applyMatrix4(ig);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,p=r.index,_=r.attributes.position;if(p!==null){const x=Math.max(0,c.start),S=Math.min(p.count,c.start+c.count);for(let T=x,w=S;T<w;T++){const y=p.getX(T);Hl.fromBufferAttribute(_,y),rg(Hl,y,d,o,e,t,this)}}else{const x=Math.max(0,c.start),S=Math.min(_.count,c.start+c.count);for(let T=x,w=S;T<w;T++)Hl.fromBufferAttribute(_,T),rg(Hl,T,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function rg(s,e,t,r,o,l,c){const f=Th.distanceSqToPoint(s);if(f<t){const d=new $;Th.closestPointToPoint(s,d),d.applyMatrix4(r);const p=o.ray.origin.distanceTo(d);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Vy extends En{constructor(e,t,r,o,l,c,f,d,p){super(e,t,r,o,l,c,f,d,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class p_ extends En{constructor(e,t,r=ns,o,l,c,f=mi,d=mi,p,g=ra,_=1){if(g!==ra&&g!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,o,l,c,f,d,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class m_ extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uu extends Ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),p=f+1,g=d+1,_=e/f,x=t/d,S=[],T=[],w=[],y=[];for(let v=0;v<g;v++){const U=v*x-c;for(let N=0;N<p;N++){const P=N*_-l;T.push(P,-U,0),w.push(0,0,1),y.push(N/f),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let U=0;U<f;U++){const N=U+p*v,P=U+p*(v+1),z=U+1+p*(v+1),k=U+1+p*v;S.push(N,P,k),S.push(P,z,k)}this.setIndex(S),this.setAttribute("position",new ts(T,3)),this.setAttribute("normal",new ts(w,3)),this.setAttribute("uv",new ts(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gy extends uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wy extends uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tf={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Xy{constructor(e,t,r){const o=this;let l=!1,c=0,f=0,d;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.abortController=new AbortController,this.itemStart=function(g){f++,l===!1&&o.onStart!==void 0&&o.onStart(g,c,f),l=!0},this.itemEnd=function(g){c++,o.onProgress!==void 0&&o.onProgress(g,c,f),c===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],T=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return T}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const jy=new Xy;class zh{constructor(e){this.manager=e!==void 0?e:jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}zh.DEFAULT_MATERIAL_NAME="__DEFAULT";const qs=new WeakMap;class Yy extends zh{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,c=Tf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(c),l.manager.itemEnd(e)},0);else{let _=qs.get(c);_===void 0&&(_=[],qs.set(c,_)),_.push({onLoad:t,onError:o})}return c}const f=oa("img");function d(){g(),t&&t(this);const _=qs.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onLoad&&S.onLoad(this)}qs.delete(this),l.manager.itemEnd(e)}function p(_){g(),o&&o(_),Tf.remove(`image:${e}`);const x=qs.get(this)||[];for(let S=0;S<x.length;S++){const T=x[S];T.onError&&T.onError(_)}qs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Tf.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class qy extends zh{constructor(e){super(e)}load(e,t,r,o){const l=new En,c=new Yy(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class $y extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ky extends u_{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zy extends $y{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qy extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class sg{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jy extends ss{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function og(s,e,t,r){const o=eS(r);switch(t){case Kg:return s*e;case Qg:return s*e/o.components*o.byteLength;case Nh:return s*e/o.components*o.byteLength;case Jg:return s*e*2/o.components*o.byteLength;case Fh:return s*e*2/o.components*o.byteLength;case Zg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case Oh:return s*e*4/o.components*o.byteLength;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $f:case Zf:return Math.max(s,16)*Math.max(e,8)/4;case qf:case Kf:return Math.max(s,8)*Math.max(e,8)/2;case Qf:case Jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ch:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case vh:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yh:case Sh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eS(s){switch(s){case Xi:case jg:return{byteLength:1,components:1};case na:case Yg:case la:return{byteLength:2,components:1};case Ih:case Uh:return{byteLength:2,components:4};case ns:case Lh:case Vi:return{byteLength:4,components:1};case qg:case $g:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g_(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function tS(s){const e=new WeakMap;function t(f,d){const p=f.array,g=f.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,d,p){const g=d.array,_=d.updateRanges;if(s.bindBuffer(p,f),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<_.length;S++){const T=_[x],w=_[S];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,_[x]=w)}_.length=x+1;for(let S=0,T=_.length;S<T;S++){const w=_[S];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,d),p.version=f.version}}return{get:o,remove:l,update:c}}var nS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iS=`#ifdef USE_ALPHAHASH
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
#endif`,rS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cS=`#ifdef USE_BATCHING
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
#endif`,fS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mS=`#ifdef USE_IRIDESCENCE
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
#endif`,gS=`#ifdef USE_BUMPMAP
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
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wS=`#define PI 3.141592653589793
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
} // validated`,AS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RS=`vec3 transformedNormal = objectNormal;
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
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",IS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,US=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FS=`#ifdef USE_ENVMAP
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
#endif`,OS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,BS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GS=`#ifdef USE_GRADIENTMAP
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
}`,WS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YS=`uniform bool receiveShadow;
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
#endif`,qS=`#ifdef USE_ENVMAP
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
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JS=`PhysicalMaterial material;
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
#endif`,eE=`struct PhysicalMaterial {
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
}`,tE=`
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
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
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fE=`#if defined( USE_POINTS_UV )
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
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
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
#endif`,vE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
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
#endif`,wE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,CE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,GE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,KE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
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
}`,lM=`#if DEPTH_PACKING == 3200
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
}`,uM=`#define DISTANCE
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
}`,cM=`#define DISTANCE
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
}`,fM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#include <common>
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
}`,gM=`uniform vec3 diffuse;
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
}`,_M=`#define LAMBERT
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
}`,vM=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,yM=`#define MATCAP
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
}`,SM=`#define NORMAL
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
}`,EM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,TM=`#define PHONG
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
}`,wM=`#define STANDARD
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
}`,AM=`#define STANDARD
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
}`,RM=`#define TOON
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
}`,CM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,LM=`uniform vec3 color;
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
}`,IM=`uniform float rotation;
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
}`,UM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:nS,alphahash_pars_fragment:iS,alphamap_fragment:rS,alphamap_pars_fragment:sS,alphatest_fragment:oS,alphatest_pars_fragment:aS,aomap_fragment:lS,aomap_pars_fragment:uS,batching_pars_vertex:cS,batching_vertex:fS,begin_vertex:hS,beginnormal_vertex:dS,bsdfs:pS,iridescence_fragment:mS,bumpmap_pars_fragment:gS,clipping_planes_fragment:_S,clipping_planes_pars_fragment:vS,clipping_planes_pars_vertex:xS,clipping_planes_vertex:yS,color_fragment:SS,color_pars_fragment:ES,color_pars_vertex:MS,color_vertex:TS,common:wS,cube_uv_reflection_fragment:AS,defaultnormal_vertex:RS,displacementmap_pars_vertex:CS,displacementmap_vertex:PS,emissivemap_fragment:bS,emissivemap_pars_fragment:DS,colorspace_fragment:LS,colorspace_pars_fragment:IS,envmap_fragment:US,envmap_common_pars_fragment:NS,envmap_pars_fragment:FS,envmap_pars_vertex:OS,envmap_physical_pars_fragment:qS,envmap_vertex:kS,fog_vertex:BS,fog_pars_vertex:zS,fog_fragment:HS,fog_pars_fragment:VS,gradientmap_pars_fragment:GS,lightmap_pars_fragment:WS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:jS,lights_pars_begin:YS,lights_toon_fragment:$S,lights_toon_pars_fragment:KS,lights_phong_fragment:ZS,lights_phong_pars_fragment:QS,lights_physical_fragment:JS,lights_physical_pars_fragment:eE,lights_fragment_begin:tE,lights_fragment_maps:nE,lights_fragment_end:iE,logdepthbuf_fragment:rE,logdepthbuf_pars_fragment:sE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:aE,map_fragment:lE,map_pars_fragment:uE,map_particle_fragment:cE,map_particle_pars_fragment:fE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:dE,morphinstance_vertex:pE,morphcolor_vertex:mE,morphnormal_vertex:gE,morphtarget_pars_vertex:_E,morphtarget_vertex:vE,normal_fragment_begin:xE,normal_fragment_maps:yE,normal_pars_fragment:SE,normal_pars_vertex:EE,normal_vertex:ME,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:wE,clearcoat_normal_fragment_maps:AE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:CE,opaque_fragment:PE,packing:bE,premultiplied_alpha_fragment:DE,project_vertex:LE,dithering_fragment:IE,dithering_pars_fragment:UE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:kE,shadowmap_vertex:BE,shadowmask_pars_fragment:zE,skinbase_vertex:HE,skinning_pars_vertex:VE,skinning_vertex:GE,skinnormal_vertex:WE,specularmap_fragment:XE,specularmap_pars_fragment:jE,tonemapping_fragment:YE,tonemapping_pars_fragment:qE,transmission_fragment:$E,transmission_pars_fragment:KE,uv_pars_fragment:ZE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:eM,background_vert:tM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distanceRGBA_vert:uM,distanceRGBA_frag:cM,equirect_vert:fM,equirect_frag:hM,linedashed_vert:dM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:vM,meshmatcap_vert:xM,meshmatcap_frag:yM,meshnormal_vert:SM,meshnormal_frag:EM,meshphong_vert:MM,meshphong_frag:TM,meshphysical_vert:wM,meshphysical_frag:AM,meshtoon_vert:RM,meshtoon_frag:CM,points_vert:PM,points_frag:bM,shadow_vert:DM,shadow_frag:LM,sprite_vert:IM,sprite_frag:UM},Ce={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},yi={basic:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Pn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Pn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Pn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new wt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Pn([Ce.points,Ce.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Pn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Pn([Ce.common,Ce.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Pn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Pn([Ce.sprite,Ce.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Pn([Ce.common,Ce.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Pn([Ce.lights,Ce.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};yi.physical={uniforms:Pn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Vl={r:0,b:0,g:0},Yr=new ji,NM=new $t;function FM(s,e,t,r,o,l,c){const f=new wt(0);let d=l===!0?0:1,p,g,_=null,x=0,S=null;function T(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?t:e).get(P)),P}function w(N){let P=!1;const z=T(N);z===null?v(f,d):z&&z.isColor&&(v(z,1),P=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,P){const z=T(P);z&&(z.isCubeTexture||z.mapping===au)?(g===void 0&&(g=new Gi(new ca(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:oo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,I,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Yr.copy(P.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=z,g.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(Yr)),g.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Dt,(_!==z||x!==z.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=z,x=z.version,S=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Gi(new uu(2,2),new Rr({name:"BackgroundMaterial",uniforms:oo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(z.colorSpace)!==Dt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(_!==z||x!==z.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=z,x=z.version,S=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,P){N.getRGB(Vl,l_(s)),r.buffers.color.setClear(Vl.r,Vl.g,Vl.b,P,c)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return f},setClearColor:function(N,P=1){f.set(N),d=P,v(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,v(f,d)},render:w,addToRenderList:y,dispose:U}}function OM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,c=!1;function f(R,B,J,ie,fe){let le=!1;const ae=_(ie,J,B);l!==ae&&(l=ae,p(l.object)),le=S(R,ie,J,fe),le&&T(R,ie,J,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(le||c)&&(c=!1,P(R,B,J,ie),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function d(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,B,J){const ie=J.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let le=fe[B.id];le===void 0&&(le={},fe[B.id]=le);let ae=le[ie];return ae===void 0&&(ae=x(d()),le[ie]=ae),ae}function x(R){const B=[],J=[],ie=[];for(let fe=0;fe<t;fe++)B[fe]=0,J[fe]=0,ie[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:ie,object:R,attributes:{},index:null}}function S(R,B,J,ie){const fe=l.attributes,le=B.attributes;let ae=0;const ce=J.getAttributes();for(const H in ce)if(ce[H].location>=0){const b=fe[H];let K=le[H];if(K===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),b===void 0||b.attribute!==K||K&&b.data!==K.data)return!0;ae++}return l.attributesNum!==ae||l.index!==ie}function T(R,B,J,ie){const fe={},le=B.attributes;let ae=0;const ce=J.getAttributes();for(const H in ce)if(ce[H].location>=0){let b=le[H];b===void 0&&(H==="instanceMatrix"&&R.instanceMatrix&&(b=R.instanceMatrix),H==="instanceColor"&&R.instanceColor&&(b=R.instanceColor));const K={};K.attribute=b,b&&b.data&&(K.data=b.data),fe[H]=K,ae++}l.attributes=fe,l.attributesNum=ae,l.index=ie}function w(){const R=l.newAttributes;for(let B=0,J=R.length;B<J;B++)R[B]=0}function y(R){v(R,0)}function v(R,B){const J=l.newAttributes,ie=l.enabledAttributes,fe=l.attributeDivisors;J[R]=1,ie[R]===0&&(s.enableVertexAttribArray(R),ie[R]=1),fe[R]!==B&&(s.vertexAttribDivisor(R,B),fe[R]=B)}function U(){const R=l.newAttributes,B=l.enabledAttributes;for(let J=0,ie=B.length;J<ie;J++)B[J]!==R[J]&&(s.disableVertexAttribArray(J),B[J]=0)}function N(R,B,J,ie,fe,le,ae){ae===!0?s.vertexAttribIPointer(R,B,J,fe,le):s.vertexAttribPointer(R,B,J,ie,fe,le)}function P(R,B,J,ie){w();const fe=ie.attributes,le=J.getAttributes(),ae=B.defaultAttributeValues;for(const ce in le){const H=le[ce];if(H.location>=0){let oe=fe[ce];if(oe===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const b=oe.normalized,K=oe.itemSize,ve=e.get(oe);if(ve===void 0)continue;const Ge=ve.buffer,ke=ve.type,Ke=ve.bytesPerElement,ee=ke===s.INT||ke===s.UNSIGNED_INT||oe.gpuType===Lh;if(oe.isInterleavedBufferAttribute){const se=oe.data,xe=se.stride,Xe=oe.offset;if(se.isInstancedInterleavedBuffer){for(let Ze=0;Ze<H.locationSize;Ze++)v(H.location+Ze,se.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ze=0;Ze<H.locationSize;Ze++)y(H.location+Ze);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Ze=0;Ze<H.locationSize;Ze++)N(H.location+Ze,K/H.locationSize,ke,b,xe*Ke,(Xe+K/H.locationSize*Ze)*Ke,ee)}else{if(oe.isInstancedBufferAttribute){for(let se=0;se<H.locationSize;se++)v(H.location+se,oe.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let se=0;se<H.locationSize;se++)y(H.location+se);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let se=0;se<H.locationSize;se++)N(H.location+se,K/H.locationSize,ke,b,K*Ke,K/H.locationSize*se*Ke,ee)}}else if(ae!==void 0){const b=ae[ce];if(b!==void 0)switch(b.length){case 2:s.vertexAttrib2fv(H.location,b);break;case 3:s.vertexAttrib3fv(H.location,b);break;case 4:s.vertexAttrib4fv(H.location,b);break;default:s.vertexAttrib1fv(H.location,b)}}}}U()}function z(){X();for(const R in r){const B=r[R];for(const J in B){const ie=B[J];for(const fe in ie)g(ie[fe].object),delete ie[fe];delete B[J]}delete r[R]}}function k(R){if(r[R.id]===void 0)return;const B=r[R.id];for(const J in B){const ie=B[J];for(const fe in ie)g(ie[fe].object),delete ie[fe];delete B[J]}delete r[R.id]}function I(R){for(const B in r){const J=r[B];if(J[R.id]===void 0)continue;const ie=J[R.id];for(const fe in ie)g(ie[fe].object),delete ie[fe];delete J[R.id]}}function X(){C(),c=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:X,resetDefaultState:C,dispose:z,releaseStatesOfGeometry:k,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:y,disableUnusedAttributes:U}}function kM(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function c(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function f(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=g[T];t.update(S,r,1)}function d(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)c(p[T],g[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let T=0;for(let w=0;w<_;w++)T+=g[w]*x[w];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function BM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(I){return!(I!==pi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const X=I===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Xi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Vi&&!X)}function d(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),U=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),z=T>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:z,maxSamples:k}}function zM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new yr,f=new dt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||o;return o=x,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const T=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!o||T===null||T.length===0||l&&!y)l?g(null):p();else{const U=l?0:r,N=U*4;let P=v.clippingState||null;d.value=P,P=g(T,x,N,S);for(let z=0;z!==N;++z)P[z]=t[z];v.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,T){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=d.value,T!==!0||y===null){const v=S+w*4,U=x.matrixWorldInverse;f.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let N=0,P=S;N!==w;++N,P+=4)c.copy(_[N]).applyMatrix4(U,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function HM(s){let e=new WeakMap;function t(c,f){return f===Wf?c.mapping=io:f===Xf&&(c.mapping=ro),c}function r(c){if(c&&c.isTexture){const f=c.mapping;if(f===Wf||f===Xf)if(e.has(c)){const d=e.get(c).texture;return t(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const p=new Uy(d.height);return p.fromEquirectangularTexture(s,c),e.set(c,p),c.addEventListener("dispose",o),t(p.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Zs=4,ag=[.125,.215,.35,.446,.526,.582],Zr=20,wf=new Ky,lg=new wt;let Af=null,Rf=0,Cf=0,Pf=!1;const $r=(1+Math.sqrt(5))/2,$s=1/$r,ug=[new $(-$r,$s,0),new $($r,$s,0),new $(-$s,0,$r),new $($s,0,$r),new $(0,$r,-$s),new $(0,$r,$s),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],VM=new $;class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=VM}=l;Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Af,Rf,Cf),this._renderer.xr.enabled=Pf,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===io||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Af=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Cf=this._renderer.getActiveMipmapLevel(),Pf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:la,format:pi,colorSpace:so,depthBuffer:!1},o=fg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GM(l)),this._blurMaterial=WM(l,e,t)}return o}_compileMaterial(e){const t=new Gi(this._lodPlanes[0],e);this._renderer.compile(t,wf)}_sceneToCubeUV(e,t,r,o,l){const d=new ti(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(lg),_.toneMapping=Tr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null));const w=new s_({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),y=new Gi(new ca,w);let v=!1;const U=e.background;U?U.isColor&&(w.color.copy(U),e.background=null,v=!0):(w.color.copy(lg),v=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[N],l.y,l.z)):P===1?(d.up.set(0,0,p[N]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[N],l.z)):(d.up.set(0,p[N],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[N]));const z=this._cubeSize;Gl(o,P*z,N>2?z:0,z,z),_.setRenderTarget(o),v&&_.render(y,d),_.render(e,d)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=U}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===io||e.mapping===ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Gi(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Gl(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,wf)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=ug[(o-l-1)%ug.length];this._blur(e,l-1,l,c,f)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Gi(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Zr-1),w=l/T,y=isFinite(l)?1+Math.floor(g*w):Zr;y>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const v=[];let U=0;for(let I=0;I<Zr;++I){const X=I/w,C=Math.exp(-X*X/2);v.push(C),I===0?U+=C:I<y&&(U+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/U;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=T,x.mipInt.value=N-r;const P=this._sizeLods[o],z=3*P*(o>N-Zs?o-N+Zs:0),k=4*(this._cubeSize-P);Gl(t,z,k,3*P,2*P),d.setRenderTarget(t),d.render(_,wf)}}function GM(s){const e=[],t=[],r=[];let o=s;const l=s-Zs+1+ag.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let d=1/f;c>s-Zs?d=ag[c-s+Zs-1]:c===0&&(d=0),r.push(d);const p=1/(f-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,T=6,w=3,y=2,v=1,U=new Float32Array(w*T*S),N=new Float32Array(y*T*S),P=new Float32Array(v*T*S);for(let k=0;k<S;k++){const I=k%3*2/3-1,X=k>2?0:-1,C=[I,X,0,I+2/3,X,0,I+2/3,X+1,0,I,X,0,I+2/3,X+1,0,I,X+1,0];U.set(C,w*T*k),N.set(x,y*T*k);const R=[k,k,k,k,k,k];P.set(R,v*T*k)}const z=new Ti;z.setAttribute("position",new ii(U,w)),z.setAttribute("uv",new ii(N,y)),z.setAttribute("faceIndex",new ii(P,v)),e.push(z),o>Zs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function fg(s,e,t){const r=new rs(s,e,t);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function WM(s,e,t){const r=new Float32Array(Zr),o=new $(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function hg(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function dg(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function XM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const d=f.mapping,p=d===Wf||d===Xf,g=d===io||d===ro;if(p||g){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return t===null&&(t=new cg(s)),_=p?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new cg(s)),_=p?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function jM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&aa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function YM(s,e,t,r){const o={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",c),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function d(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,T=_.attributes.position;let w=0;if(S!==null){const U=S.array;w=S.version;for(let N=0,P=U.length;N<P;N+=3){const z=U[N+0],k=U[N+1],I=U[N+2];x.push(z,k,k,I,I,z)}}else if(T!==void 0){const U=T.array;w=T.version;for(let N=0,P=U.length/3-1;N<P;N+=3){const z=N+0,k=N+1,I=N+2;x.push(z,k,k,I,I,z)}}else return;const y=new(t_(x)?a_:o_)(x,1);y.version=w;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function qM(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,S){s.drawElements(r,S,l,x*c),t.update(S,r,1)}function p(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,x*c,T),t.update(S,r,T))}function g(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,T);let y=0;for(let v=0;v<T;v++)y+=S[v];t.update(y,r,1)}function _(x,S,T,w){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/c,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,T);let v=0;for(let U=0;U<T;U++)v+=S[U]*w[U];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function $M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function KM(s,e,t){const r=new WeakMap,o=new qt;function l(c,f,d){const p=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let R=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const T=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],U=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),w===!0&&(P=2),y===!0&&(P=3);let z=f.attributes.position.count*P,k=1;z>e.maxTextureSize&&(k=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*k*4*_),X=new n_(I,z,k,_);X.type=Vi,X.needsUpdate=!0;const C=P*4;for(let B=0;B<_;B++){const J=v[B],ie=U[B],fe=N[B],le=z*k*4*B;for(let ae=0;ae<J.count;ae++){const ce=ae*C;T===!0&&(o.fromBufferAttribute(J,ae),I[le+ce+0]=o.x,I[le+ce+1]=o.y,I[le+ce+2]=o.z,I[le+ce+3]=0),w===!0&&(o.fromBufferAttribute(ie,ae),I[le+ce+4]=o.x,I[le+ce+5]=o.y,I[le+ce+6]=o.z,I[le+ce+7]=0),y===!0&&(o.fromBufferAttribute(fe,ae),I[le+ce+8]=o.x,I[le+ce+9]=o.y,I[le+ce+10]=o.z,I[le+ce+11]=fe.itemSize===4?o.w:1)}}x={count:_,texture:X,size:new ct(z,k)},r.set(f,x),f.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const w=f.morphTargetsRelative?1:1-T;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function ZM(s,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,_=e.get(d,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function c(){o=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:c}}const __=new En,pg=new p_(1,1),v_=new n_,x_=new _y,y_=new c_,mg=[],gg=[],_g=new Float32Array(16),vg=new Float32Array(9),xg=new Float32Array(4);function co(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=mg[o];if(l===void 0&&(l=new Float32Array(o),mg[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function on(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cu(s,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2fv(this.addr,e),on(t,e)}}function eT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;s.uniform3fv(this.addr,e),on(t,e)}}function tT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4fv(this.addr,e),on(t,e)}}function nT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;xg.set(r),s.uniformMatrix2fv(this.addr,!1,xg),on(t,r)}}function iT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;vg.set(r),s.uniformMatrix3fv(this.addr,!1,vg),on(t,r)}}function rT(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;_g.set(r),s.uniformMatrix4fv(this.addr,!1,_g),on(t,r)}}function sT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function oT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2iv(this.addr,e),on(t,e)}}function aT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3iv(this.addr,e),on(t,e)}}function lT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4iv(this.addr,e),on(t,e)}}function uT(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function cT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;s.uniform2uiv(this.addr,e),on(t,e)}}function fT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;s.uniform3uiv(this.addr,e),on(t,e)}}function hT(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;s.uniform4uiv(this.addr,e),on(t,e)}}function dT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(pg.compareFunction=e_,l=pg):l=__,t.setTexture2D(e||l,o)}function pT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||x_,o)}function mT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||y_,o)}function gT(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||v_,o)}function _T(s){switch(s){case 5126:return QM;case 35664:return JM;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return uT;case 36294:return cT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function vT(s,e){s.uniform1fv(this.addr,e)}function xT(s,e){const t=co(e,this.size,2);s.uniform2fv(this.addr,t)}function yT(s,e){const t=co(e,this.size,3);s.uniform3fv(this.addr,t)}function ST(s,e){const t=co(e,this.size,4);s.uniform4fv(this.addr,t)}function ET(s,e){const t=co(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function MT(s,e){const t=co(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function TT(s,e){const t=co(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function wT(s,e){s.uniform1iv(this.addr,e)}function AT(s,e){s.uniform2iv(this.addr,e)}function RT(s,e){s.uniform3iv(this.addr,e)}function CT(s,e){s.uniform4iv(this.addr,e)}function PT(s,e){s.uniform1uiv(this.addr,e)}function bT(s,e){s.uniform2uiv(this.addr,e)}function DT(s,e){s.uniform3uiv(this.addr,e)}function LT(s,e){s.uniform4uiv(this.addr,e)}function IT(s,e,t){const r=this.cache,o=e.length,l=cu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||__,l[c])}function UT(s,e,t){const r=this.cache,o=e.length,l=cu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||x_,l[c])}function NT(s,e,t){const r=this.cache,o=e.length,l=cu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||y_,l[c])}function FT(s,e,t){const r=this.cache,o=e.length,l=cu(t,o);sn(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||v_,l[c])}function OT(s){switch(s){case 5126:return vT;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return ET;case 35675:return MT;case 35676:return TT;case 5124:case 35670:return wT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return PT;case 36294:return bT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return FT}}class kT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_T(t.type)}}class BT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=OT(t.type)}}class zT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function yg(s,e){s.seq.push(e),s.map[e.id]=e}function HT(s,e,t){const r=s.name,o=r.length;for(bf.lastIndex=0;;){const l=bf.exec(r),c=bf.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&c+2===o){yg(t,p===void 0?new kT(f,s,e):new BT(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new zT(f),yg(t,_)),t=_}}}class Jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);HT(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Sg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const VT=37297;let GT=0;function WT(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Eg=new dt;function XT(s){Tt._getMatrix(Eg,Tt.workingColorSpace,s);const e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case tu:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+WT(s.getShaderSource(e),f)}else return l}function jT(s,e){const t=XT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function YT(s,e){let t;switch(e){case Gx:t="Linear";break;case Wx:t="Reinhard";break;case Xx:t="Cineon";break;case jx:t="ACESFilmic";break;case qx:t="AgX";break;case $x:t="Neutral";break;case Yx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new $;function qT(){Tt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $T(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function KT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ZT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Qo(s){return s!==""}function Tg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(s){return s.replace(QT,ew)}const JT=new Map;function ew(s,e){let t=pt[e];if(t===void 0){const r=JT.get(e);if(r!==void 0)t=pt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wh(t)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ag(s){return s.replace(tw,nw)}function nw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Rg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function rw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case io:case ro:e="ENVMAP_TYPE_CUBE";break;case au:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function ow(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wg:e="ENVMAP_BLENDING_MULTIPLY";break;case Hx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function aw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function lw(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=iw(t),p=rw(t),g=sw(t),_=ow(t),x=aw(t),S=$T(t),T=KT(l),w=o.createProgram();let y,v,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(y=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[Rg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?pt.tonemapping_pars_fragment:"",t.toneMapping!==Tr?YT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),qT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),c=wh(c),c=Tg(c,t),c=wg(c,t),f=wh(f),f=Tg(f,t),f=wg(f,t),c=Ag(c),f=Ag(f),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Om?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Om?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=U+y+c,P=U+v+f,z=Sg(o,o.VERTEX_SHADER,N),k=Sg(o,o.FRAGMENT_SHADER,P);o.attachShader(w,z),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function I(B){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(w)||"",ie=o.getShaderInfoLog(z)||"",fe=o.getShaderInfoLog(k)||"",le=J.trim(),ae=ie.trim(),ce=fe.trim();let H=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,z,k);else{const b=Mg(o,z,"vertex"),K=Mg(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+b+`
`+K)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(ae===""||ce==="")&&(oe=!1);oe&&(B.diagnostics={runnable:H,programLog:le,vertexShader:{log:ae,prefix:y},fragmentShader:{log:ce,prefix:v}})}o.deleteShader(z),o.deleteShader(k),X=new Jl(o,w),C=ZT(o,w)}let X;this.getUniforms=function(){return X===void 0&&I(this),X};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,VT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=k,this}let uw=0;class cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new fw(e),t.set(e,r)),r}}class fw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function hw(s,e,t,r,o,l,c){const f=new i_,d=new cw,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,R,B,J,ie){const fe=J.fog,le=ie.geometry,ae=C.isMeshStandardMaterial?J.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),H=ce&&ce.mapping===au?ce.image.height:null,oe=T[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const b=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,K=b!==void 0?b.length:0;let ve=0;le.morphAttributes.position!==void 0&&(ve=1),le.morphAttributes.normal!==void 0&&(ve=2),le.morphAttributes.color!==void 0&&(ve=3);let Ge,ke,Ke,ee;if(oe){const yt=yi[oe];Ge=yt.vertexShader,ke=yt.fragmentShader}else Ge=C.vertexShader,ke=C.fragmentShader,d.update(C),Ke=d.getVertexShaderID(C),ee=d.getFragmentShaderID(C);const se=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Xe=ie.isInstancedMesh===!0,Ze=ie.isBatchedMesh===!0,mt=!!C.map,Qt=!!C.matcap,F=!!ce,Pt=!!C.aoMap,ft=!!C.lightMap,it=!!C.bumpMap,Be=!!C.normalMap,Ut=!!C.displacementMap,ze=!!C.emissiveMap,lt=!!C.metalnessMap,kt=!!C.roughnessMap,Bt=C.anisotropy>0,D=C.clearcoat>0,M=C.dispersion>0,q=C.iridescence>0,ue=C.sheen>0,pe=C.transmission>0,re=Bt&&!!C.anisotropyMap,Ye=D&&!!C.clearcoatMap,Te=D&&!!C.clearcoatNormalMap,Ue=D&&!!C.clearcoatRoughnessMap,qe=q&&!!C.iridescenceMap,Ee=q&&!!C.iridescenceThicknessMap,Pe=ue&&!!C.sheenColorMap,rt=ue&&!!C.sheenRoughnessMap,We=!!C.specularMap,Ae=!!C.specularColorMap,ht=!!C.specularIntensityMap,V=pe&&!!C.transmissionMap,ye=pe&&!!C.thicknessMap,we=!!C.gradientMap,be=!!C.alphaMap,_e=C.alphaTest>0,he=!!C.alphaHash,He=!!C.extensions;let ut=Tr;C.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Rt={shaderID:oe,shaderType:C.type,shaderName:C.name,vertexShader:Ge,fragmentShader:ke,defines:C.defines,customVertexShaderID:Ke,customFragmentShaderID:ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ze,batchingColor:Ze&&ie._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ie.instanceColor!==null,instancingMorph:Xe&&ie.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:so,alphaToCoverage:!!C.alphaToCoverage,map:mt,matcap:Qt,envMap:F,envMapMode:F&&ce.mapping,envMapCubeUVHeight:H,aoMap:Pt,lightMap:ft,bumpMap:it,normalMap:Be,displacementMap:x&&Ut,emissiveMap:ze,normalMapObjectSpace:Be&&C.normalMapType===ey,normalMapTangentSpace:Be&&C.normalMapType===Jx,metalnessMap:lt,roughnessMap:kt,anisotropy:Bt,anisotropyMap:re,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ue,dispersion:M,iridescence:q,iridescenceMap:qe,iridescenceThicknessMap:Ee,sheen:ue,sheenColorMap:Pe,sheenRoughnessMap:rt,specularMap:We,specularColorMap:Ae,specularIntensityMap:ht,transmission:pe,transmissionMap:V,thicknessMap:ye,gradientMap:we,opaque:C.transparent===!1&&C.blending===Js&&C.alphaToCoverage===!1,alphaMap:be,alphaTest:_e,alphaHash:he,combine:C.combine,mapUv:mt&&w(C.map.channel),aoMapUv:Pt&&w(C.aoMap.channel),lightMapUv:ft&&w(C.lightMap.channel),bumpMapUv:it&&w(C.bumpMap.channel),normalMapUv:Be&&w(C.normalMap.channel),displacementMapUv:Ut&&w(C.displacementMap.channel),emissiveMapUv:ze&&w(C.emissiveMap.channel),metalnessMapUv:lt&&w(C.metalnessMap.channel),roughnessMapUv:kt&&w(C.roughnessMap.channel),anisotropyMapUv:re&&w(C.anisotropyMap.channel),clearcoatMapUv:Ye&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:Te&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:rt&&w(C.sheenRoughnessMap.channel),specularMapUv:We&&w(C.specularMap.channel),specularColorMapUv:Ae&&w(C.specularColorMap.channel),specularIntensityMapUv:ht&&w(C.specularIntensityMap.channel),transmissionMapUv:V&&w(C.transmissionMap.channel),thicknessMapUv:ye&&w(C.thicknessMap.channel),alphaMapUv:be&&w(C.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Be||Bt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!le.attributes.uv&&(mt||be),fog:!!fe,useFog:C.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:xe,skinning:ie.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ve,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:mt&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Dt,decodeVideoTextureEmissive:ze&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Dt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:He&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&C.extensions.multiDraw===!0||Ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Rt.vertexUv1s=p.has(1),Rt.vertexUv2s=p.has(2),Rt.vertexUv3s=p.has(3),p.clear(),Rt}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(U(R,C),N(R,C),R.push(s.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function U(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function N(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function P(C){const R=T[C.type];let B;if(R){const J=yi[R];B=by.clone(J.uniforms)}else B=C.uniforms;return B}function z(C,R){let B;for(let J=0,ie=g.length;J<ie;J++){const fe=g[J];if(fe.cacheKey===R){B=fe,++B.usedTimes;break}}return B===void 0&&(B=new lw(s,R,C,l),g.push(B)),B}function k(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function I(C){d.remove(C)}function X(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:z,releaseProgram:k,releaseShaderCache:I,programs:g,dispose:X}}function dw(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function pw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(_,x,S,T,w,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:T,renderOrder:_.renderOrder,z:w,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=w,v.group=y),e++,v}function f(_,x,S,T,w,y){const v=c(_,x,S,T,w,y);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):t.push(v)}function d(_,x,S,T,w,y){const v=c(_,x,S,T,w,y);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||pw),r.length>1&&r.sort(x||Cg),o.length>1&&o.sort(x||Cg)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:d,finish:g,sort:p}}function mw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Pg,s.set(r,[c])):o>=l.length?(c=new Pg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function gw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new wt};break;case"SpotLight":t={position:new $,direction:new $,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new $,halfWidth:new $,halfHeight:new $};break}return s[e.id]=t,t}}}function _w(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vw=0;function xw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yw(s){const e=new gw,t=_w(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const o=new $,l=new $t,c=new $t;function f(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,w=0,y=0,v=0,U=0,N=0,P=0,z=0,k=0,I=0;p.sort(xw);for(let C=0,R=p.length;C<R;C++){const B=p[C],J=B.color,ie=B.intensity,fe=B.distance,le=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=J.r*ie,_+=J.g*ie,x+=J.b*ie;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(B.sh.coefficients[ae],ie);I++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=le,r.directionalShadowMatrix[S]=B.shadow.matrix,U++}r.directional[S]=ae,S++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(J).multiplyScalar(ie),ae.distance=fe,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,r.spot[w]=ae;const ce=B.shadow;if(B.map&&(r.spotLightMap[z]=B.map,z++,ce.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[w]=ce.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=le,P++}w++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(J).multiplyScalar(ie),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ae,y++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const ce=B.shadow,H=t.get(B);H.shadowIntensity=ce.intensity,H.shadowBias=ce.bias,H.shadowNormalBias=ce.normalBias,H.shadowRadius=ce.radius,H.shadowMapSize=ce.mapSize,H.shadowCameraNear=ce.camera.near,H.shadowCameraFar=ce.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=B.shadow.matrix,N++}r.point[T]=ae,T++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(ie),ae.groundColor.copy(B.groundColor).multiplyScalar(ie),r.hemi[v]=ae,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==y||X.hemiLength!==v||X.numDirectionalShadows!==U||X.numPointShadows!==N||X.numSpotShadows!==P||X.numSpotMaps!==z||X.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+z-k,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=I,X.directionalLength=S,X.pointLength=T,X.spotLength=w,X.rectAreaLength=y,X.hemiLength=v,X.numDirectionalShadows=U,X.numPointShadows=N,X.numSpotShadows=P,X.numSpotMaps=z,X.numLightProbes=I,r.version=vw++)}function d(p,g){let _=0,x=0,S=0,T=0,w=0;const y=g.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const N=p[v];if(N.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(N.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(N.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),T++}else if(N.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:f,setupView:d,state:r}}function bg(s){const e=new yw(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function f(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:c}}function Sw(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new bg(s),e.set(o,[f])):l>=c.length?(f=new bg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mw=`uniform sampler2D shadow_pass;
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
}`;function Tw(s,e,t){let r=new h_;const o=new ct,l=new ct,c=new qt,f=new Gy({depthPacking:Qx}),d=new Wy,p={},g=t.maxTextureSize,_={[Ar]:On,[On]:Ar,[Hi]:Hi},x=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Ew,fragmentShader:Mw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Ti;T.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Gi(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gg;let v=this.type;this.render=function(k,I,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;const C=s.getRenderTarget(),R=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Mr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ie=v!==zi&&this.type===zi,fe=v===zi&&this.type!==zi;for(let le=0,ae=k.length;le<ae;le++){const ce=k[le],H=ce.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const oe=H.getFrameExtents();if(o.multiply(oe),l.copy(H.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/oe.x),o.x=l.x*oe.x,H.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/oe.y),o.y=l.y*oe.y,H.mapSize.y=l.y)),H.map===null||ie===!0||fe===!0){const K=this.type!==zi?{minFilter:mi,magFilter:mi}:{};H.map!==null&&H.map.dispose(),H.map=new rs(o.x,o.y,K),H.map.texture.name=ce.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const b=H.getViewportCount();for(let K=0;K<b;K++){const ve=H.getViewport(K);c.set(l.x*ve.x,l.y*ve.y,l.x*ve.z,l.y*ve.w),J.viewport(c),H.updateMatrices(ce,K),r=H.getFrustum(),P(I,X,H.camera,ce,this.type)}H.isPointLightShadow!==!0&&this.type===zi&&U(H,X),H.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(C,R,B)};function U(k,I){const X=e.update(w);x.defines.VSM_SAMPLES!==k.blurSamples&&(x.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new rs(o.x,o.y)),x.uniforms.shadow_pass.value=k.map.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(I,null,X,x,w,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value=k.mapSize,S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(I,null,X,S,w,null)}function N(k,I,X,C){let R=null;const B=X.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)R=B;else if(R=X.isPointLight===!0?d:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const J=R.uuid,ie=I.uuid;let fe=p[J];fe===void 0&&(fe={},p[J]=fe);let le=fe[ie];le===void 0&&(le=R.clone(),fe[ie]=le,I.addEventListener("dispose",z)),R=le}if(R.visible=I.visible,R.wireframe=I.wireframe,C===zi?R.side=I.shadowSide!==null?I.shadowSide:I.side:R.side=I.shadowSide!==null?I.shadowSide:_[I.side],R.alphaMap=I.alphaMap,R.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,R.map=I.map,R.clipShadows=I.clipShadows,R.clippingPlanes=I.clippingPlanes,R.clipIntersection=I.clipIntersection,R.displacementMap=I.displacementMap,R.displacementScale=I.displacementScale,R.displacementBias=I.displacementBias,R.wireframeLinewidth=I.wireframeLinewidth,R.linewidth=I.linewidth,X.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=X}return R}function P(k,I,X,C,R){if(k.visible===!1)return;if(k.layers.test(I.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&R===zi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,k.matrixWorld);const ie=e.update(k),fe=k.material;if(Array.isArray(fe)){const le=ie.groups;for(let ae=0,ce=le.length;ae<ce;ae++){const H=le[ae],oe=fe[H.materialIndex];if(oe&&oe.visible){const b=N(k,oe,C,R);k.onBeforeShadow(s,k,I,X,ie,b,H),s.renderBufferDirect(X,null,ie,b,k,H),k.onAfterShadow(s,k,I,X,ie,b,H)}}}else if(fe.visible){const le=N(k,fe,C,R);k.onBeforeShadow(s,k,I,X,ie,le,null),s.renderBufferDirect(X,null,ie,le,k,null),k.onAfterShadow(s,k,I,X,ie,le,null)}}const J=k.children;for(let ie=0,fe=J.length;ie<fe;ie++)P(J[ie],I,X,C,R)}function z(k){k.target.removeEventListener("dispose",z);for(const X in p){const C=p[X],R=k.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const ww={[Of]:kf,[Bf]:Vf,[zf]:Gf,[no]:Hf,[kf]:Of,[Vf]:Bf,[Gf]:zf,[Hf]:no};function Aw(s,e){function t(){let V=!1;const ye=new qt;let we=null;const be=new qt(0,0,0,0);return{setMask:function(_e){we!==_e&&!V&&(s.colorMask(_e,_e,_e,_e),we=_e)},setLocked:function(_e){V=_e},setClear:function(_e,he,He,ut,Rt){Rt===!0&&(_e*=ut,he*=ut,He*=ut),ye.set(_e,he,He,ut),be.equals(ye)===!1&&(s.clearColor(_e,he,He,ut),be.copy(ye))},reset:function(){V=!1,we=null,be.set(-1,0,0,0)}}}function r(){let V=!1,ye=!1,we=null,be=null,_e=null;return{setReversed:function(he){if(ye!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),ye=he;const ut=_e;_e=null,this.setClear(ut)}},getReversed:function(){return ye},setTest:function(he){he?se(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(he){we!==he&&!V&&(s.depthMask(he),we=he)},setFunc:function(he){if(ye&&(he=ww[he]),be!==he){switch(he){case Of:s.depthFunc(s.NEVER);break;case kf:s.depthFunc(s.ALWAYS);break;case Bf:s.depthFunc(s.LESS);break;case no:s.depthFunc(s.LEQUAL);break;case zf:s.depthFunc(s.EQUAL);break;case Hf:s.depthFunc(s.GEQUAL);break;case Vf:s.depthFunc(s.GREATER);break;case Gf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=he}},setLocked:function(he){V=he},setClear:function(he){_e!==he&&(ye&&(he=1-he),s.clearDepth(he),_e=he)},reset:function(){V=!1,we=null,be=null,_e=null,ye=!1}}}function o(){let V=!1,ye=null,we=null,be=null,_e=null,he=null,He=null,ut=null,Rt=null;return{setTest:function(yt){V||(yt?se(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(yt){ye!==yt&&!V&&(s.stencilMask(yt),ye=yt)},setFunc:function(yt,jn,dn){(we!==yt||be!==jn||_e!==dn)&&(s.stencilFunc(yt,jn,dn),we=yt,be=jn,_e=dn)},setOp:function(yt,jn,dn){(he!==yt||He!==jn||ut!==dn)&&(s.stencilOp(yt,jn,dn),he=yt,He=jn,ut=dn)},setLocked:function(yt){V=yt},setClear:function(yt){Rt!==yt&&(s.clearStencil(yt),Rt=yt)},reset:function(){V=!1,ye=null,we=null,be=null,_e=null,he=null,He=null,ut=null,Rt=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,U=null,N=null,P=null,z=null,k=null,I=new wt(0,0,0),X=0,C=!1,R=null,B=null,J=null,ie=null,fe=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(H)[1]),ae=ce>=1):H.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),ae=ce>=2);let oe=null,b={};const K=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Ge=new qt().fromArray(K),ke=new qt().fromArray(ve);function Ke(V,ye,we,be){const _e=new Uint8Array(4),he=s.createTexture();s.bindTexture(V,he),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<we;He++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ye,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ye+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return he}const ee={};ee[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(no),it(!1),Be(Lm),se(s.CULL_FACE),Pt(Mr);function se(V){g[V]!==!0&&(s.enable(V),g[V]=!0)}function xe(V){g[V]!==!1&&(s.disable(V),g[V]=!1)}function Xe(V,ye){return _[V]!==ye?(s.bindFramebuffer(V,ye),_[V]=ye,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ye),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ze(V,ye){let we=S,be=!1;if(V){we=x.get(ye),we===void 0&&(we=[],x.set(ye,we));const _e=V.textures;if(we.length!==_e.length||we[0]!==s.COLOR_ATTACHMENT0){for(let he=0,He=_e.length;he<He;he++)we[he]=s.COLOR_ATTACHMENT0+he;we.length=_e.length,be=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,be=!0);be&&s.drawBuffers(we)}function mt(V){return T!==V?(s.useProgram(V),T=V,!0):!1}const Qt={[Kr]:s.FUNC_ADD,[Tx]:s.FUNC_SUBTRACT,[wx]:s.FUNC_REVERSE_SUBTRACT};Qt[Ax]=s.MIN,Qt[Rx]=s.MAX;const F={[Cx]:s.ZERO,[Px]:s.ONE,[bx]:s.SRC_COLOR,[Nf]:s.SRC_ALPHA,[Fx]:s.SRC_ALPHA_SATURATE,[Ux]:s.DST_COLOR,[Lx]:s.DST_ALPHA,[Dx]:s.ONE_MINUS_SRC_COLOR,[Ff]:s.ONE_MINUS_SRC_ALPHA,[Nx]:s.ONE_MINUS_DST_COLOR,[Ix]:s.ONE_MINUS_DST_ALPHA,[Ox]:s.CONSTANT_COLOR,[kx]:s.ONE_MINUS_CONSTANT_COLOR,[Bx]:s.CONSTANT_ALPHA,[zx]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(V,ye,we,be,_e,he,He,ut,Rt,yt){if(V===Mr){w===!0&&(xe(s.BLEND),w=!1);return}if(w===!1&&(se(s.BLEND),w=!0),V!==Mx){if(V!==y||yt!==C){if((v!==Kr||P!==Kr)&&(s.blendEquation(s.FUNC_ADD),v=Kr,P=Kr),yt)switch(V){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Nm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,N=null,z=null,k=null,I.set(0,0,0),X=0,y=V,C=yt}return}_e=_e||ye,he=he||we,He=He||be,(ye!==v||_e!==P)&&(s.blendEquationSeparate(Qt[ye],Qt[_e]),v=ye,P=_e),(we!==U||be!==N||he!==z||He!==k)&&(s.blendFuncSeparate(F[we],F[be],F[he],F[He]),U=we,N=be,z=he,k=He),(ut.equals(I)===!1||Rt!==X)&&(s.blendColor(ut.r,ut.g,ut.b,Rt),I.copy(ut),X=Rt),y=V,C=!1}function ft(V,ye){V.side===Hi?xe(s.CULL_FACE):se(s.CULL_FACE);let we=V.side===On;ye&&(we=!we),it(we),V.blending===Js&&V.transparent===!1?Pt(Mr):Pt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const be=V.stencilWrite;f.setTest(be),be&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ze(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(V){R!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),R=V)}function Be(V){V!==yx?(se(s.CULL_FACE),V!==B&&(V===Lm?s.cullFace(s.BACK):V===Sx?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),B=V}function Ut(V){V!==J&&(ae&&s.lineWidth(V),J=V)}function ze(V,ye,we){V?(se(s.POLYGON_OFFSET_FILL),(ie!==ye||fe!==we)&&(s.polygonOffset(ye,we),ie=ye,fe=we)):xe(s.POLYGON_OFFSET_FILL)}function lt(V){V?se(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function kt(V){V===void 0&&(V=s.TEXTURE0+le-1),oe!==V&&(s.activeTexture(V),oe=V)}function Bt(V,ye,we){we===void 0&&(oe===null?we=s.TEXTURE0+le-1:we=oe);let be=b[we];be===void 0&&(be={type:void 0,texture:void 0},b[we]=be),(be.type!==V||be.texture!==ye)&&(oe!==we&&(s.activeTexture(we),oe=we),s.bindTexture(V,ye||ee[V]),be.type=V,be.texture=ye)}function D(){const V=b[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{s.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{s.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(){try{s.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{s.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{s.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pe(V){Ge.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function rt(V){ke.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function We(V,ye){let we=p.get(ye);we===void 0&&(we=new WeakMap,p.set(ye,we));let be=we.get(V);be===void 0&&(be=s.getUniformBlockIndex(ye,V.name),we.set(V,be))}function Ae(V,ye){const be=p.get(ye).get(V);d.get(ye)!==be&&(s.uniformBlockBinding(ye,be,V.__bindingPointIndex),d.set(ye,be))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},oe=null,b={},_={},x=new WeakMap,S=[],T=null,w=!1,y=null,v=null,U=null,N=null,P=null,z=null,k=null,I=new wt(0,0,0),X=0,C=!1,R=null,B=null,J=null,ie=null,fe=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:se,disable:xe,bindFramebuffer:Xe,drawBuffers:Ze,useProgram:mt,setBlending:Pt,setMaterial:ft,setFlipSided:it,setCullFace:Be,setLineWidth:Ut,setPolygonOffset:ze,setScissorTest:lt,activeTexture:kt,bindTexture:Bt,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:qe,texImage3D:Ee,updateUBOMapping:We,uniformBlockBinding:Ae,texStorage2D:Te,texStorage3D:Ue,texSubImage2D:ue,texSubImage3D:pe,compressedTexSubImage2D:re,compressedTexSubImage3D:Ye,scissor:Pe,viewport:rt,reset:ht}}function Rw(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,M){return S?new OffscreenCanvas(D,M):oa("canvas")}function w(D,M,q){let ue=1;const pe=Bt(D);if((pe.width>q||pe.height>q)&&(ue=q/Math.max(pe.width,pe.height)),ue<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const re=Math.floor(ue*pe.width),Ye=Math.floor(ue*pe.height);_===void 0&&(_=T(re,Ye));const Te=M?T(re,Ye):_;return Te.width=re,Te.height=Ye,Te.getContext("2d").drawImage(D,0,0,re,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+re+"x"+Ye+")."),Te}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function U(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(D,M,q,ue,pe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let re=M;if(M===s.RED&&(q===s.FLOAT&&(re=s.R32F),q===s.HALF_FLOAT&&(re=s.R16F),q===s.UNSIGNED_BYTE&&(re=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.R8UI),q===s.UNSIGNED_SHORT&&(re=s.R16UI),q===s.UNSIGNED_INT&&(re=s.R32UI),q===s.BYTE&&(re=s.R8I),q===s.SHORT&&(re=s.R16I),q===s.INT&&(re=s.R32I)),M===s.RG&&(q===s.FLOAT&&(re=s.RG32F),q===s.HALF_FLOAT&&(re=s.RG16F),q===s.UNSIGNED_BYTE&&(re=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RG8UI),q===s.UNSIGNED_SHORT&&(re=s.RG16UI),q===s.UNSIGNED_INT&&(re=s.RG32UI),q===s.BYTE&&(re=s.RG8I),q===s.SHORT&&(re=s.RG16I),q===s.INT&&(re=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGB8UI),q===s.UNSIGNED_SHORT&&(re=s.RGB16UI),q===s.UNSIGNED_INT&&(re=s.RGB32UI),q===s.BYTE&&(re=s.RGB8I),q===s.SHORT&&(re=s.RGB16I),q===s.INT&&(re=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(re=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(re=s.RGBA16UI),q===s.UNSIGNED_INT&&(re=s.RGBA32UI),q===s.BYTE&&(re=s.RGBA8I),q===s.SHORT&&(re=s.RGBA16I),q===s.INT&&(re=s.RGBA32I)),M===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(re=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(re=s.R11F_G11F_B10F)),M===s.RGBA){const Ye=pe?tu:Tt.getTransfer(ue);q===s.FLOAT&&(re=s.RGBA32F),q===s.HALF_FLOAT&&(re=s.RGBA16F),q===s.UNSIGNED_BYTE&&(re=Ye===Dt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(re=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(re=s.RGB5_A1)}return(re===s.R16F||re===s.R32F||re===s.RG16F||re===s.RG32F||re===s.RGBA16F||re===s.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function P(D,M){let q;return D?M===null||M===ns||M===ia?q=s.DEPTH24_STENCIL8:M===Vi?q=s.DEPTH32F_STENCIL8:M===na&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ns||M===ia?q=s.DEPTH_COMPONENT24:M===Vi?q=s.DEPTH_COMPONENT32F:M===na&&(q=s.DEPTH_COMPONENT16),q}function z(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==Ei?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function k(D){const M=D.target;M.removeEventListener("dispose",k),X(M),M.isVideoTexture&&g.delete(M)}function I(D){const M=D.target;M.removeEventListener("dispose",I),R(M)}function X(D){const M=r.get(D);if(M.__webglInit===void 0)return;const q=D.source,ue=x.get(q);if(ue){const pe=ue[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&C(D),Object.keys(ue).length===0&&x.delete(q)}r.remove(D)}function C(D){const M=r.get(D);s.deleteTexture(M.__webglTexture);const q=D.source,ue=x.get(q);delete ue[M.__cacheKey],c.memory.textures--}function R(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(M.__webglFramebuffer[ue]))for(let pe=0;pe<M.__webglFramebuffer[ue].length;pe++)s.deleteFramebuffer(M.__webglFramebuffer[ue][pe]);else s.deleteFramebuffer(M.__webglFramebuffer[ue]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[ue])}else{if(Array.isArray(M.__webglFramebuffer))for(let ue=0;ue<M.__webglFramebuffer.length;ue++)s.deleteFramebuffer(M.__webglFramebuffer[ue]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ue=0;ue<M.__webglColorRenderbuffer.length;ue++)M.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[ue]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=D.textures;for(let ue=0,pe=q.length;ue<pe;ue++){const re=r.get(q[ue]);re.__webglTexture&&(s.deleteTexture(re.__webglTexture),c.memory.textures--),r.remove(q[ue])}r.remove(D)}let B=0;function J(){B=0}function ie(){const D=B;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),B+=1,D}function fe(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function le(D,M){const q=r.get(D);if(D.isVideoTexture&&lt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const ue=D.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(q,D,M);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function ae(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ee(q,D,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function ce(D,M){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){ee(q,D,M);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function H(D,M){const q=r.get(D);if(D.version>0&&q.__version!==D.version){se(q,D,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const oe={[jf]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[Yf]:s.MIRRORED_REPEAT},b={[mi]:s.NEAREST,[Kx]:s.NEAREST_MIPMAP_NEAREST,[vl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Zc]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},K={[ty]:s.NEVER,[ay]:s.ALWAYS,[ny]:s.LESS,[e_]:s.LEQUAL,[iy]:s.EQUAL,[oy]:s.GEQUAL,[ry]:s.GREATER,[sy]:s.NOTEQUAL};function ve(D,M){if(M.type===Vi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ei||M.magFilter===Zc||M.magFilter===vl||M.magFilter===Jr||M.minFilter===Ei||M.minFilter===Zc||M.minFilter===vl||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[M.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[M.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[M.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,b[M.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,b[M.minFilter]),M.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===mi||M.minFilter!==vl&&M.minFilter!==Jr||M.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ge(D,M){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",k));const ue=M.source;let pe=x.get(ue);pe===void 0&&(pe={},x.set(ue,pe));const re=fe(M);if(re!==D.__cacheKey){pe[re]===void 0&&(pe[re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),pe[re].usedTimes++;const Ye=pe[D.__cacheKey];Ye!==void 0&&(pe[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&C(M)),D.__cacheKey=re,D.__webglTexture=pe[re].texture}return q}function ke(D,M,q){return Math.floor(Math.floor(D/q)/M)}function Ke(D,M,q,ue){const re=D.updateRanges;if(re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,q,ue,M.data);else{re.sort((Ee,Pe)=>Ee.start-Pe.start);let Ye=0;for(let Ee=1;Ee<re.length;Ee++){const Pe=re[Ye],rt=re[Ee],We=Pe.start+Pe.count,Ae=ke(rt.start,M.width,4),ht=ke(Pe.start,M.width,4);rt.start<=We+1&&Ae===ht&&ke(rt.start+rt.count-1,M.width,4)===Ae?Pe.count=Math.max(Pe.count,rt.start+rt.count-Pe.start):(++Ye,re[Ye]=rt)}re.length=Ye+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),Ue=s.getParameter(s.UNPACK_SKIP_PIXELS),qe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Ee=0,Pe=re.length;Ee<Pe;Ee++){const rt=re[Ee],We=Math.floor(rt.start/4),Ae=Math.ceil(rt.count/4),ht=We%M.width,V=Math.floor(We/M.width),ye=Ae,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ht,V,ye,we,q,ue,M.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,qe)}}function ee(D,M,q){let ue=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ue=s.TEXTURE_3D);const pe=Ge(D,M),re=M.source;t.bindTexture(ue,D.__webglTexture,s.TEXTURE0+q);const Ye=r.get(re);if(re.version!==Ye.__version||pe===!0){t.activeTexture(s.TEXTURE0+q);const Te=Tt.getPrimaries(Tt.workingColorSpace),Ue=M.colorSpace===Sr?null:Tt.getPrimaries(M.colorSpace),qe=M.colorSpace===Sr||Te===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let Ee=w(M.image,!1,o.maxTextureSize);Ee=kt(M,Ee);const Pe=l.convert(M.format,M.colorSpace),rt=l.convert(M.type);let We=N(M.internalFormat,Pe,rt,M.colorSpace,M.isVideoTexture);ve(ue,M);let Ae;const ht=M.mipmaps,V=M.isVideoTexture!==!0,ye=Ye.__version===void 0||pe===!0,we=re.dataReady,be=z(M,Ee);if(M.isDepthTexture)We=P(M.format===sa,M.type),ye&&(V?t.texStorage2D(s.TEXTURE_2D,1,We,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Pe,rt,null));else if(M.isDataTexture)if(ht.length>0){V&&ye&&t.texStorage2D(s.TEXTURE_2D,be,We,ht[0].width,ht[0].height);for(let _e=0,he=ht.length;_e<he;_e++)Ae=ht[_e],V?we&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,rt,Ae.data):t.texImage2D(s.TEXTURE_2D,_e,We,Ae.width,Ae.height,0,Pe,rt,Ae.data);M.generateMipmaps=!1}else V?(ye&&t.texStorage2D(s.TEXTURE_2D,be,We,Ee.width,Ee.height),we&&Ke(M,Ee,Pe,rt)):t.texImage2D(s.TEXTURE_2D,0,We,Ee.width,Ee.height,0,Pe,rt,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){V&&ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,We,ht[0].width,ht[0].height,Ee.depth);for(let _e=0,he=ht.length;_e<he;_e++)if(Ae=ht[_e],M.format!==pi)if(Pe!==null)if(V){if(we)if(M.layerUpdates.size>0){const He=og(Ae.width,Ae.height,M.format,M.type);for(const ut of M.layerUpdates){const Rt=Ae.data.subarray(ut*He/Ae.data.BYTES_PER_ELEMENT,(ut+1)*He/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,ut,Ae.width,Ae.height,1,Pe,Rt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Ee.depth,Pe,Ae.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,We,Ae.width,Ae.height,Ee.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Ee.depth,Pe,rt,Ae.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,We,Ae.width,Ae.height,Ee.depth,0,Pe,rt,Ae.data)}else{V&&ye&&t.texStorage2D(s.TEXTURE_2D,be,We,ht[0].width,ht[0].height);for(let _e=0,he=ht.length;_e<he;_e++)Ae=ht[_e],M.format!==pi?Pe!==null?V?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,We,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?we&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,Pe,rt,Ae.data):t.texImage2D(s.TEXTURE_2D,_e,We,Ae.width,Ae.height,0,Pe,rt,Ae.data)}else if(M.isDataArrayTexture)if(V){if(ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,We,Ee.width,Ee.height,Ee.depth),we)if(M.layerUpdates.size>0){const _e=og(Ee.width,Ee.height,M.format,M.type);for(const he of M.layerUpdates){const He=Ee.data.subarray(he*_e/Ee.data.BYTES_PER_ELEMENT,(he+1)*_e/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Pe,rt,He)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,rt,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,Ee.width,Ee.height,Ee.depth,0,Pe,rt,Ee.data);else if(M.isData3DTexture)V?(ye&&t.texStorage3D(s.TEXTURE_3D,be,We,Ee.width,Ee.height,Ee.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Pe,rt,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,We,Ee.width,Ee.height,Ee.depth,0,Pe,rt,Ee.data);else if(M.isFramebufferTexture){if(ye)if(V)t.texStorage2D(s.TEXTURE_2D,be,We,Ee.width,Ee.height);else{let _e=Ee.width,he=Ee.height;for(let He=0;He<be;He++)t.texImage2D(s.TEXTURE_2D,He,We,_e,he,0,Pe,rt,null),_e>>=1,he>>=1}}else if(ht.length>0){if(V&&ye){const _e=Bt(ht[0]);t.texStorage2D(s.TEXTURE_2D,be,We,_e.width,_e.height)}for(let _e=0,he=ht.length;_e<he;_e++)Ae=ht[_e],V?we&&t.texSubImage2D(s.TEXTURE_2D,_e,0,0,Pe,rt,Ae):t.texImage2D(s.TEXTURE_2D,_e,We,Pe,rt,Ae);M.generateMipmaps=!1}else if(V){if(ye){const _e=Bt(Ee);t.texStorage2D(s.TEXTURE_2D,be,We,_e.width,_e.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,rt,Ee)}else t.texImage2D(s.TEXTURE_2D,0,We,Pe,rt,Ee);y(M)&&v(ue),Ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function se(D,M,q){if(M.image.length!==6)return;const ue=Ge(D,M),pe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const re=r.get(pe);if(pe.version!==re.__version||ue===!0){t.activeTexture(s.TEXTURE0+q);const Ye=Tt.getPrimaries(Tt.workingColorSpace),Te=M.colorSpace===Sr?null:Tt.getPrimaries(M.colorSpace),Ue=M.colorSpace===Sr||Ye===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const qe=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,Pe=[];for(let he=0;he<6;he++)!qe&&!Ee?Pe[he]=w(M.image[he],!0,o.maxCubemapSize):Pe[he]=Ee?M.image[he].image:M.image[he],Pe[he]=kt(M,Pe[he]);const rt=Pe[0],We=l.convert(M.format,M.colorSpace),Ae=l.convert(M.type),ht=N(M.internalFormat,We,Ae,M.colorSpace),V=M.isVideoTexture!==!0,ye=re.__version===void 0||ue===!0,we=pe.dataReady;let be=z(M,rt);ve(s.TEXTURE_CUBE_MAP,M);let _e;if(qe){V&&ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,rt.width,rt.height);for(let he=0;he<6;he++){_e=Pe[he].mipmaps;for(let He=0;He<_e.length;He++){const ut=_e[He];M.format!==pi?We!==null?V?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,ut.width,ut.height,We,ut.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ht,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,ut.width,ut.height,We,Ae,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,ht,ut.width,ut.height,0,We,Ae,ut.data)}}}else{if(_e=M.mipmaps,V&&ye){_e.length>0&&be++;const he=Bt(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){V?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Pe[he].width,Pe[he].height,We,Ae,Pe[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Pe[he].width,Pe[he].height,0,We,Ae,Pe[he].data);for(let He=0;He<_e.length;He++){const Rt=_e[He].image[he].image;V?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Rt.width,Rt.height,We,Ae,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ht,Rt.width,Rt.height,0,We,Ae,Rt.data)}}else{V?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ae,Pe[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,We,Ae,Pe[he]);for(let He=0;He<_e.length;He++){const ut=_e[He];V?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,We,Ae,ut.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,ht,We,Ae,ut.image[he])}}}y(M)&&v(s.TEXTURE_CUBE_MAP),re.__version=pe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function xe(D,M,q,ue,pe,re){const Ye=l.convert(q.format,q.colorSpace),Te=l.convert(q.type),Ue=N(q.internalFormat,Ye,Te,q.colorSpace),qe=r.get(M),Ee=r.get(q);if(Ee.__renderTarget=M,!qe.__hasExternalTextures){const Pe=Math.max(1,M.width>>re),rt=Math.max(1,M.height>>re);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,re,Ue,Pe,rt,M.depth,0,Ye,Te,null):t.texImage2D(pe,re,Ue,Pe,rt,0,Ye,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),ze(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,pe,Ee.__webglTexture,0,Ut(M)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,pe,Ee.__webglTexture,re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(D,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),M.depthBuffer){const ue=M.depthTexture,pe=ue&&ue.isDepthTexture?ue.type:null,re=P(M.stencilBuffer,pe),Ye=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=Ut(M);ze(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,re,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,re,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,re,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,D)}else{const ue=M.textures;for(let pe=0;pe<ue.length;pe++){const re=ue[pe],Ye=l.convert(re.format,re.colorSpace),Te=l.convert(re.type),Ue=N(re.internalFormat,Ye,Te,re.colorSpace),qe=Ut(M);q&&ze(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Ue,M.width,M.height):ze(M)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,Ue,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Ue,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ze(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=r.get(M.depthTexture);ue.__renderTarget=M,(!ue.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),le(M.depthTexture,0);const pe=ue.__webglTexture,re=Ut(M);if(M.depthTexture.format===ra)ze(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pe,0);else if(M.depthTexture.format===sa)ze(M)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0,re):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function mt(D){const M=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ue=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ue){const pe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ue.removeEventListener("dispose",pe)};ue.addEventListener("dispose",pe),M.__depthDisposeCallback=pe}M.__boundDepthTexture=ue}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const ue=D.texture.mipmaps;ue&&ue.length>0?Ze(M.__webglFramebuffer[0],D):Ze(M.__webglFramebuffer,D)}else if(q){M.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ue]),M.__webglDepthbuffer[ue]===void 0)M.__webglDepthbuffer[ue]=s.createRenderbuffer(),Xe(M.__webglDepthbuffer[ue],D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,re)}}else{const ue=D.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),Xe(M.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,re),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qt(D,M,q){const ue=r.get(D);M!==void 0&&xe(ue.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&mt(D)}function F(D){const M=D.texture,q=r.get(D),ue=r.get(M);D.addEventListener("dispose",I);const pe=D.textures,re=D.isWebGLCubeRenderTarget===!0,Ye=pe.length>1;if(Ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=M.version,c.memory.textures++),re){q.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Te]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)q.__webglFramebuffer[Te][Ue]=s.createFramebuffer()}else q.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Te=0;Te<M.mipmaps.length;Te++)q.__webglFramebuffer[Te]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Te=0,Ue=pe.length;Te<Ue;Te++){const qe=r.get(pe[Te]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&ze(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Te=0;Te<pe.length;Te++){const Ue=pe[Te];q.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Te]);const qe=l.convert(Ue.format,Ue.colorSpace),Ee=l.convert(Ue.type),Pe=N(Ue.internalFormat,qe,Ee,Ue.colorSpace,D.isXRRenderTarget===!0),rt=Ut(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Pe,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,q.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(re){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),ve(s.TEXTURE_CUBE_MAP,M);for(let Te=0;Te<6;Te++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)xe(q.__webglFramebuffer[Te][Ue],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ue);else xe(q.__webglFramebuffer[Te],D,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);y(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Te=0,Ue=pe.length;Te<Ue;Te++){const qe=pe[Te],Ee=r.get(qe);let Pe=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pe=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,Ee.__webglTexture),ve(Pe,qe),xe(q.__webglFramebuffer,D,qe,s.COLOR_ATTACHMENT0+Te,Pe,0),y(qe)&&v(Pe)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,ue.__webglTexture),ve(Te,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)xe(q.__webglFramebuffer[Ue],D,M,s.COLOR_ATTACHMENT0,Te,Ue);else xe(q.__webglFramebuffer,D,M,s.COLOR_ATTACHMENT0,Te,0);y(M)&&v(Te),t.unbindTexture()}D.depthBuffer&&mt(D)}function Pt(D){const M=D.textures;for(let q=0,ue=M.length;q<ue;q++){const pe=M[q];if(y(pe)){const re=U(D),Ye=r.get(pe).__webglTexture;t.bindTexture(re,Ye),v(re),t.unbindTexture()}}}const ft=[],it=[];function Be(D){if(D.samples>0){if(ze(D)===!1){const M=D.textures,q=D.width,ue=D.height;let pe=s.COLOR_BUFFER_BIT;const re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(D),Te=M.length>1;if(Te)for(let qe=0;qe<M.length;qe++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Ue=D.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let qe=0;qe<M.length;qe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ee=r.get(M[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,q,ue,0,0,q,ue,pe,s.NEAREST),d===!0&&(ft.length=0,it.length=0,ft.push(s.COLOR_ATTACHMENT0+qe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ft.push(re),it.push(re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let qe=0;qe<M.length;qe++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[qe]);const Ee=r.get(M[qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,Ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const M=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ut(D){return Math.min(o.maxSamples,D.samples)}function ze(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function lt(D){const M=c.render.frame;g.get(D)!==M&&(g.set(D,M),D.update())}function kt(D,M){const q=D.colorSpace,ue=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==so&&q!==Sr&&(Tt.getTransfer(q)===Dt?(ue!==pi||pe!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function Bt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=J,this.setTexture2D=le,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=H,this.rebindTextures=Qt,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ze}function Cw(s,e){function t(r,o=Sr){let l;const c=Tt.getTransfer(o);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Ih)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===$g)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===jg)return s.BYTE;if(r===Yg)return s.SHORT;if(r===na)return s.UNSIGNED_SHORT;if(r===Lh)return s.INT;if(r===ns)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===la)return s.HALF_FLOAT;if(r===Kg)return s.ALPHA;if(r===Zg)return s.RGB;if(r===pi)return s.RGBA;if(r===ra)return s.DEPTH_COMPONENT;if(r===sa)return s.DEPTH_STENCIL;if(r===Qg)return s.RED;if(r===Nh)return s.RED_INTEGER;if(r===Jg)return s.RG;if(r===Fh)return s.RG_INTEGER;if(r===Oh)return s.RGBA_INTEGER;if(r===Yl||r===ql||r===$l||r===Kl)if(c===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qf||r===$f||r===Kf||r===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$f)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qf||r===Jf||r===eh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Qf||r===Jf)return c===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===eh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===uh||r===ch||r===fh||r===hh||r===dh||r===ph)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===th)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===nh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ih)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===sh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ah)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ch)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dh)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ph)return c===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===mh||r===gh||r===_h)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===mh)return c===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vh||r===xh||r===yh||r===Sh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===vh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===xh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ia?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Pw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bw=`
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

}`;class Dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new m_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:Pw,fragmentShader:bw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gi(new uu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lw extends ss{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,p=null,g=null,_=null,x=null,S=null,T=null;const w=typeof XRWebGLBinding<"u",y=new Dw,v={},U=t.getContextAttributes();let N=null,P=null;const z=[],k=[],I=new ct;let X=null;const C=new ti;C.viewport=new qt;const R=new ti;R.viewport=new qt;const B=[C,R],J=new Qy;let ie=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let se=z[ee];return se===void 0&&(se=new yf,z[ee]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ee){let se=z[ee];return se===void 0&&(se=new yf,z[ee]=se),se.getGripSpace()},this.getHand=function(ee){let se=z[ee];return se===void 0&&(se=new yf,z[ee]=se),se.getHandSpace()};function le(ee){const se=k.indexOf(ee.inputSource);if(se===-1)return;const xe=z[se];xe!==void 0&&(xe.update(ee.inputSource,ee.frame,p||c),xe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ae(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<z.length;ee++){const se=k[ee];se!==null&&(k[ee]=null,z[ee].disconnect(se))}ie=null,fe=null,y.reset();for(const ee in v)delete v[ee];e.setRenderTarget(N),S=null,x=null,_=null,o=null,P=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(X),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",ce),U.xrCompatible!==!0&&await t.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Xe=null,Ze=null;U.depth&&(Ze=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=U.stencil?sa:ra,Xe=U.stencil?ia:ns);const mt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(mt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new rs(x.textureWidth,x.textureHeight,{format:pi,type:Xi,depthTexture:new p_(x.textureWidth,x.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,xe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new rs(S.framebufferWidth,S.framebufferHeight,{format:pi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),p=null,c=await o.requestReferenceSpace(f),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function ce(ee){for(let se=0;se<ee.removed.length;se++){const xe=ee.removed[se],Xe=k.indexOf(xe);Xe>=0&&(k[Xe]=null,z[Xe].disconnect(xe))}for(let se=0;se<ee.added.length;se++){const xe=ee.added[se];let Xe=k.indexOf(xe);if(Xe===-1){for(let mt=0;mt<z.length;mt++)if(mt>=k.length){k.push(xe),Xe=mt;break}else if(k[mt]===null){k[mt]=xe,Xe=mt;break}if(Xe===-1)break}const Ze=z[Xe];Ze&&Ze.connect(xe)}}const H=new $,oe=new $;function b(ee,se,xe){H.setFromMatrixPosition(se.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);const Xe=H.distanceTo(oe),Ze=se.projectionMatrix.elements,mt=xe.projectionMatrix.elements,Qt=Ze[14]/(Ze[10]-1),F=Ze[14]/(Ze[10]+1),Pt=(Ze[9]+1)/Ze[5],ft=(Ze[9]-1)/Ze[5],it=(Ze[8]-1)/Ze[0],Be=(mt[8]+1)/mt[0],Ut=Qt*it,ze=Qt*Be,lt=Xe/(-it+Be),kt=lt*-it;if(se.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(kt),ee.translateZ(lt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Ze[10]===-1)ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const Bt=Qt+lt,D=F+lt,M=Ut-kt,q=ze+(Xe-kt),ue=Pt*F/D*Bt,pe=ft*F/D*Bt;ee.projectionMatrix.makePerspective(M,q,ue,pe,Bt,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function K(ee,se){se===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(se.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let se=ee.near,xe=ee.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),J.near=R.near=C.near=se,J.far=R.far=C.far=xe,(ie!==J.near||fe!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ie=J.near,fe=J.far),J.layers.mask=ee.layers.mask|6,C.layers.mask=J.layers.mask&3,R.layers.mask=J.layers.mask&5;const Xe=ee.parent,Ze=J.cameras;K(J,Xe);for(let mt=0;mt<Ze.length;mt++)K(Ze[mt],Xe);Ze.length===2?b(J,C,R):J.projectionMatrix.copy(C.projectionMatrix),ve(ee,J,Xe)};function ve(ee,se,xe){xe===null?ee.matrix.copy(se.matrixWorld):(ee.matrix.copy(xe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(se.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(se.projectionMatrix),ee.projectionMatrixInverse.copy(se.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Mh*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&S===null))return d},this.setFoveation=function(ee){d=ee,x!==null&&(x.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(ee){return v[ee]};let Ge=null;function ke(ee,se){if(g=se.getViewerPose(p||c),T=se,g!==null){const xe=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Xe=!1;xe.length!==J.cameras.length&&(J.cameras.length=0,Xe=!0);for(let F=0;F<xe.length;F++){const Pt=xe[F];let ft=null;if(S!==null)ft=S.getViewport(Pt);else{const Be=_.getViewSubImage(x,Pt);ft=Be.viewport,F===0&&(e.setRenderTargetTextures(P,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(P))}let it=B[F];it===void 0&&(it=new ti,it.layers.enable(F),it.viewport=new qt,B[F]=it),it.matrix.fromArray(Pt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Pt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(ft.x,ft.y,ft.width,ft.height),F===0&&(J.matrix.copy(it.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Xe===!0&&J.cameras.push(it)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const F=_.getDepthInformation(xe[0]);F&&F.isValid&&F.texture&&y.init(F,o.renderState)}if(Ze&&Ze.includes("camera-access")&&w){e.state.unbindTexture(),_=r.getBinding();for(let F=0;F<xe.length;F++){const Pt=xe[F].camera;if(Pt){let ft=v[Pt];ft||(ft=new m_,v[Pt]=ft);const it=_.getCameraImage(Pt);ft.sourceTexture=it}}}}for(let xe=0;xe<z.length;xe++){const Xe=k[xe],Ze=z[xe];Xe!==null&&Ze!==void 0&&Ze.update(Xe,se,p||c)}Ge&&Ge(ee,se),se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:se}),T=null}const Ke=new g_;Ke.setAnimationLoop(ke),this.setAnimationLoop=function(ee){Ge=ee},this.dispose=function(){}}}const qr=new ji,Iw=new $t;function Uw(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,l_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,U,N,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,P)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(c(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?d(y,v,U,N):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===On&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===On&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),N=U.envMap,P=U.envMapRotation;N&&(y.envMap.value=N,qr.copy(P),qr.x*=-1,qr.y*=-1,qr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(qr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function c(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,U,N){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=N*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===On&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Nw(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(U,N){const P=N.program;r.uniformBlockBinding(U,P)}function p(U,N){let P=o[U.id];P===void 0&&(T(U),P=g(U),o[U.id]=P,U.addEventListener("dispose",y));const z=N.program;r.updateUBOMapping(U,z);const k=e.render.frame;l[U.id]!==k&&(x(U),l[U.id]=k)}function g(U){const N=_();U.__bindingPointIndex=N;const P=s.createBuffer(),z=U.__size,k=U.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,z,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function _(){for(let U=0;U<f;U++)if(c.indexOf(U)===-1)return c.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(U){const N=o[U.id],P=U.uniforms,z=U.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let k=0,I=P.length;k<I;k++){const X=Array.isArray(P[k])?P[k]:[P[k]];for(let C=0,R=X.length;C<R;C++){const B=X[C];if(S(B,k,C,z)===!0){const J=B.__offset,ie=Array.isArray(B.value)?B.value:[B.value];let fe=0;for(let le=0;le<ie.length;le++){const ae=ie[le],ce=w(ae);typeof ae=="number"||typeof ae=="boolean"?(B.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+fe,B.__data)):ae.isMatrix3?(B.__data[0]=ae.elements[0],B.__data[1]=ae.elements[1],B.__data[2]=ae.elements[2],B.__data[3]=0,B.__data[4]=ae.elements[3],B.__data[5]=ae.elements[4],B.__data[6]=ae.elements[5],B.__data[7]=0,B.__data[8]=ae.elements[6],B.__data[9]=ae.elements[7],B.__data[10]=ae.elements[8],B.__data[11]=0):(ae.toArray(B.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(U,N,P,z){const k=U.value,I=N+"_"+P;if(z[I]===void 0)return typeof k=="number"||typeof k=="boolean"?z[I]=k:z[I]=k.clone(),!0;{const X=z[I];if(typeof k=="number"||typeof k=="boolean"){if(X!==k)return z[I]=k,!0}else if(X.equals(k)===!1)return X.copy(k),!0}return!1}function T(U){const N=U.uniforms;let P=0;const z=16;for(let I=0,X=N.length;I<X;I++){const C=Array.isArray(N[I])?N[I]:[N[I]];for(let R=0,B=C.length;R<B;R++){const J=C[R],ie=Array.isArray(J.value)?J.value:[J.value];for(let fe=0,le=ie.length;fe<le;fe++){const ae=ie[fe],ce=w(ae),H=P%z,oe=H%ce.boundary,b=H+oe;P+=oe,b!==0&&z-b<ce.storage&&(P+=z-b),J.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=ce.storage}}}const k=P%z;return k>0&&(P+=z-k),U.__size=P,U.__cache={},this}function w(U){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=48,N.storage=48):U.isMatrix4?(N.boundary=64,N.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),N}function y(U){const N=U.target;N.removeEventListener("dispose",y);const P=c.indexOf(N.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function v(){for(const U in o)s.deleteBuffer(o[U]);c=[],o={},l={}}return{bind:d,update:p,dispose:v}}class Fw{constructor(e={}){const{canvas:t=cy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const U=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let z=!1;this._outputColorSpace=ei;let k=0,I=0,X=null,C=-1,R=null;const B=new qt,J=new qt;let ie=null;const fe=new wt(0);let le=0,ae=t.width,ce=t.height,H=1,oe=null,b=null;const K=new qt(0,0,ae,ce),ve=new qt(0,0,ae,ce);let Ge=!1;const ke=new h_;let Ke=!1,ee=!1;const se=new $t,xe=new $,Xe=new qt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Qt(){return X===null?H:1}let F=r;function Pt(A,j){return t.getContext(A,j)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const j="webgl2";if(F=Pt(j,A),F===null)throw Pt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,it,Be,Ut,ze,lt,kt,Bt,D,M,q,ue,pe,re,Ye,Te,Ue,qe,Ee,Pe,rt,We,Ae,ht;function V(){ft=new jM(F),ft.init(),We=new Cw(F,ft),it=new BM(F,ft,e,We),Be=new Aw(F,ft),it.reversedDepthBuffer&&x&&Be.buffers.depth.setReversed(!0),Ut=new $M(F),ze=new dw,lt=new Rw(F,ft,Be,ze,it,We,Ut),kt=new HM(P),Bt=new XM(P),D=new tS(F),Ae=new OM(F,D),M=new YM(F,D,Ut,Ae),q=new ZM(F,M,D,Ut),Ee=new KM(F,it,lt),Te=new zM(ze),ue=new hw(P,kt,Bt,ft,it,Ae,Te),pe=new Uw(P,ze),re=new mw,Ye=new Sw(ft),qe=new FM(P,kt,Bt,Be,q,S,d),Ue=new Tw(P,q,it),ht=new Nw(F,Ut,it,Be),Pe=new kM(F,ft,Ut),rt=new qM(F,ft,Ut),Ut.programs=ue.programs,P.capabilities=it,P.extensions=ft,P.properties=ze,P.renderLists=re,P.shadowMap=Ue,P.state=Be,P.info=Ut}V();const ye=new Lw(P,F);this.xr=ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(ae,ce,!1))},this.getSize=function(A){return A.set(ae,ce)},this.setSize=function(A,j,te=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,ce=j,t.width=Math.floor(A*H),t.height=Math.floor(j*H),te===!0&&(t.style.width=A+"px",t.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(ae*H,ce*H).floor()},this.setDrawingBufferSize=function(A,j,te){ae=A,ce=j,H=te,t.width=Math.floor(A*te),t.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,j,te,ne){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,j,te,ne),Be.viewport(B.copy(K).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,j,te,ne){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,j,te,ne),Be.scissor(J.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(A){Be.setScissorTest(Ge=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){b=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,te=!0){let ne=0;if(A){let W=!1;if(X!==null){const Se=X.texture.format;W=Se===Oh||Se===Fh||Se===Nh}if(W){const Se=X.texture.type,Re=Se===Xi||Se===ns||Se===na||Se===ia||Se===Ih||Se===Uh,Ne=qe.getClearColor(),De=qe.getClearAlpha(),nt=Ne.r,st=Ne.g,$e=Ne.b;Re?(T[0]=nt,T[1]=st,T[2]=$e,T[3]=De,F.clearBufferuiv(F.COLOR,0,T)):(w[0]=nt,w[1]=st,w[2]=$e,w[3]=De,F.clearBufferiv(F.COLOR,0,w))}else ne|=F.COLOR_BUFFER_BIT}j&&(ne|=F.DEPTH_BUFFER_BIT),te&&(ne|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),qe.dispose(),re.dispose(),Ye.dispose(),ze.dispose(),kt.dispose(),Bt.dispose(),q.dispose(),Ae.dispose(),ht.dispose(),ue.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",dn),ye.removeEventListener("sessionend",os),kn.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const A=Ut.autoReset,j=Ue.enabled,te=Ue.autoUpdate,ne=Ue.needsUpdate,W=Ue.type;V(),Ut.autoReset=A,Ue.enabled=j,Ue.autoUpdate=te,Ue.needsUpdate=ne,Ue.type=W}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const j=A.target;j.removeEventListener("dispose",he),He(j)}function He(A){ut(A),ze.remove(A)}function ut(A){const j=ze.get(A).programs;j!==void 0&&(j.forEach(function(te){ue.releaseProgram(te)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,ne,W,Se){j===null&&(j=Ze);const Re=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Ai(A,j,te,ne,W);Be.setMaterial(ne,Re);let De=te.index,nt=1;if(ne.wireframe===!0){if(De=M.getWireframeAttribute(te),De===void 0)return;nt=2}const st=te.drawRange,$e=te.attributes.position;let ot=st.start*nt,At=(st.start+st.count)*nt;Se!==null&&(ot=Math.max(ot,Se.start*nt),At=Math.min(At,(Se.start+Se.count)*nt)),De!==null?(ot=Math.max(ot,0),At=Math.min(At,De.count)):$e!=null&&(ot=Math.max(ot,0),At=Math.min(At,$e.count));const St=At-ot;if(St<0||St===1/0)return;Ae.setup(W,ne,Ne,te,De);let Nt,Ct=Pe;if(De!==null&&(Nt=D.get(De),Ct=rt,Ct.setIndex(Nt)),W.isMesh)ne.wireframe===!0?(Be.setLineWidth(ne.wireframeLinewidth*Qt()),Ct.setMode(F.LINES)):Ct.setMode(F.TRIANGLES);else if(W.isLine){let Qe=ne.linewidth;Qe===void 0&&(Qe=1),Be.setLineWidth(Qe*Qt()),W.isLineSegments?Ct.setMode(F.LINES):W.isLineLoop?Ct.setMode(F.LINE_LOOP):Ct.setMode(F.LINE_STRIP)}else W.isPoints?Ct.setMode(F.POINTS):W.isSprite&&Ct.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)aa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))Ct.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qe=W._multiDrawStarts,bt=W._multiDrawCounts,gt=W._multiDrawCount,Jt=De?D.get(De).bytesPerElement:1,ri=ze.get(ne).currentProgram.getUniforms();for(let Tn=0;Tn<gt;Tn++)ri.setValue(F,"_gl_DrawID",Tn),Ct.render(Qe[Tn]/Jt,bt[Tn])}else if(W.isInstancedMesh)Ct.renderInstances(ot,St,W.count);else if(te.isInstancedBufferGeometry){const Qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,bt=Math.min(te.instanceCount,Qe);Ct.renderInstances(ot,St,bt)}else Ct.render(ot,St)};function Rt(A,j,te){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,ls(A,j,te),A.side=Ar,A.needsUpdate=!0,ls(A,j,te),A.side=Hi):ls(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),v=Ye.get(te),v.init(j),N.push(v),te.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),A!==te&&A.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights();const ne=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Re=0;Re<Se.length;Re++){const Ne=Se[Re];Rt(Ne,te,W),ne.add(Ne)}else Rt(Se,te,W),ne.add(Se)}),v=N.pop(),ne},this.compileAsync=function(A,j,te=null){const ne=this.compile(A,j,te);return new Promise(W=>{function Se(){if(ne.forEach(function(Re){ze.get(Re).currentProgram.isReady()&&ne.delete(Re)}),ne.size===0){W(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let yt=null;function jn(A){yt&&yt(A)}function dn(){kn.stop()}function os(){kn.start()}const kn=new g_;kn.setAnimationLoop(jn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(A){yt=A,ye.setAnimationLoop(A),A===null?kn.stop():kn.start()},ye.addEventListener("sessionstart",dn),ye.addEventListener("sessionend",os),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(j),j=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,j,X),v=Ye.get(A,N.length),v.init(j),N.push(v),se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ke.setFromProjectionMatrix(se,Mi,j.reversedDepth),ee=this.localClippingEnabled,Ke=Te.init(this.clippingPlanes,ee),y=re.get(A,U.length),y.init(),U.push(y),ye.enabled===!0&&ye.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&fo(Se,j,-1/0,P.sortObjects)}fo(A,j,0,P.sortObjects),y.finish(),P.sortObjects===!0&&y.sort(oe,b),mt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,mt&&qe.addToRenderList(y,A),this.info.render.frame++,Ke===!0&&Te.beginShadows();const te=v.state.shadowsArray;Ue.render(te,A,j),Ke===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,W=y.transmissive;if(v.setupLights(),j.isArrayCamera){const Se=j.cameras;if(W.length>0)for(let Re=0,Ne=Se.length;Re<Ne;Re++){const De=Se[Re];Cr(ne,W,A,De)}mt&&qe.render(A);for(let Re=0,Ne=Se.length;Re<Ne;Re++){const De=Se[Re];Yi(y,A,De,De.viewport)}}else W.length>0&&Cr(ne,W,A,j),mt&&qe.render(A),Yi(y,A,j);X!==null&&I===0&&(lt.updateMultisampleRenderTarget(X),lt.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(P,A,j),Ae.resetDefaultState(),C=-1,R=null,N.pop(),N.length>0?(v=N[N.length-1],Ke===!0&&Te.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function fo(A,j,te,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ne&&Xe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Re=q.update(A),Ne=A.material;Ne.visible&&y.push(A,Re,Ne,te,Xe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Re=q.update(A),Ne=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Xe.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Xe.copy(Re.boundingSphere.center)),Xe.applyMatrix4(A.matrixWorld).applyMatrix4(se)),Array.isArray(Ne)){const De=Re.groups;for(let nt=0,st=De.length;nt<st;nt++){const $e=De[nt],ot=Ne[$e.materialIndex];ot&&ot.visible&&y.push(A,Re,ot,te,Xe.z,$e)}}else Ne.visible&&y.push(A,Re,Ne,te,Xe.z,null)}}const Se=A.children;for(let Re=0,Ne=Se.length;Re<Ne;Re++)fo(Se[Re],j,te,ne)}function Yi(A,j,te,ne){const W=A.opaque,Se=A.transmissive,Re=A.transparent;v.setupLightsView(te),Ke===!0&&Te.setGlobalState(P.clippingPlanes,te),ne&&Be.viewport(B.copy(ne)),W.length>0&&wi(W,j,te),Se.length>0&&wi(Se,j,te),Re.length>0&&wi(Re,j,te),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Cr(A,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new rs(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?la:Xi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Se=v.state.transmissionRenderTarget[ne.id],Re=ne.viewport||B;Se.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const Ne=P.getRenderTarget(),De=P.getActiveCubeFace(),nt=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(fe),le=P.getClearAlpha(),le<1&&P.setClearColor(16777215,.5),P.clear(),mt&&qe.render(te);const st=P.toneMapping;P.toneMapping=Tr;const $e=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),Ke===!0&&Te.setGlobalState(P.clippingPlanes,ne),wi(A,te,ne),lt.updateMultisampleRenderTarget(Se),lt.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let At=0,St=j.length;At<St;At++){const Nt=j[At],Ct=Nt.object,Qe=Nt.geometry,bt=Nt.material,gt=Nt.group;if(bt.side===Hi&&Ct.layers.test(ne.layers)){const Jt=bt.side;bt.side=On,bt.needsUpdate=!0,as(Ct,te,ne,Qe,bt,gt),bt.side=Jt,bt.needsUpdate=!0,ot=!0}}ot===!0&&(lt.updateMultisampleRenderTarget(Se),lt.updateRenderTargetMipmap(Se))}P.setRenderTarget(Ne,De,nt),P.setClearColor(fe,le),$e!==void 0&&(ne.viewport=$e),P.toneMapping=st}function wi(A,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){const Re=A[W],Ne=Re.object,De=Re.geometry,nt=Re.group;let st=Re.material;st.allowOverride===!0&&ne!==null&&(st=ne),Ne.layers.test(te.layers)&&as(Ne,j,te,De,st,nt)}}function as(A,j,te,ne,W,Se){A.onBeforeRender(P,j,te,ne,W,Se),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(P,j,te,ne,A,Se),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,P.renderBufferDirect(te,j,ne,W,A,Se),W.side=Ar,W.needsUpdate=!0,P.renderBufferDirect(te,j,ne,W,A,Se),W.side=Hi):P.renderBufferDirect(te,j,ne,W,A,Se),A.onAfterRender(P,j,te,ne,W,Se)}function ls(A,j,te){j.isScene!==!0&&(j=Ze);const ne=ze.get(A),W=v.state.lights,Se=v.state.shadowsArray,Re=W.state.version,Ne=ue.getParameters(A,W.state,Se,j,te),De=ue.getProgramCacheKey(Ne);let nt=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?Bt:kt).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",he),nt=new Map,ne.programs=nt);let st=nt.get(De);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===Re)return ha(A,Ne),st}else Ne.uniforms=ue.getUniforms(A),A.onBeforeCompile(Ne,P),st=ue.acquireProgram(Ne,De),nt.set(De,st),ne.uniforms=Ne.uniforms;const $e=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Te.uniform),ha(A,Ne),ne.needsLights=pa(A),ne.lightsStateVersion=Re,ne.needsLights&&($e.ambientLightColor.value=W.state.ambient,$e.lightProbe.value=W.state.probe,$e.directionalLights.value=W.state.directional,$e.directionalLightShadows.value=W.state.directionalShadow,$e.spotLights.value=W.state.spot,$e.spotLightShadows.value=W.state.spotShadow,$e.rectAreaLights.value=W.state.rectArea,$e.ltc_1.value=W.state.rectAreaLTC1,$e.ltc_2.value=W.state.rectAreaLTC2,$e.pointLights.value=W.state.point,$e.pointLightShadows.value=W.state.pointShadow,$e.hemisphereLights.value=W.state.hemi,$e.directionalShadowMap.value=W.state.directionalShadowMap,$e.directionalShadowMatrix.value=W.state.directionalShadowMatrix,$e.spotShadowMap.value=W.state.spotShadowMap,$e.spotLightMatrix.value=W.state.spotLightMatrix,$e.spotLightMap.value=W.state.spotLightMap,$e.pointShadowMap.value=W.state.pointShadowMap,$e.pointShadowMatrix.value=W.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function fa(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Jl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ha(A,j){const te=ze.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Ai(A,j,te,ne,W){j.isScene!==!0&&(j=Ze),lt.resetTextureUnits();const Se=j.fog,Re=ne.isMeshStandardMaterial?j.environment:null,Ne=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:so,De=(ne.isMeshStandardMaterial?Bt:kt).get(ne.envMap||Re),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),$e=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,At=!!te.morphAttributes.color;let St=Tr;ne.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(St=P.toneMapping);const Nt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ct=Nt!==void 0?Nt.length:0,Qe=ze.get(ne),bt=v.state.lights;if(Ke===!0&&(ee===!0||A!==R)){const jt=A===R&&ne.id===C;Te.setState(ne,A,jt)}let gt=!1;ne.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==bt.state.version||Qe.outputColorSpace!==Ne||W.isBatchedMesh&&Qe.batching===!1||!W.isBatchedMesh&&Qe.batching===!0||W.isBatchedMesh&&Qe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Qe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Qe.instancing===!1||!W.isInstancedMesh&&Qe.instancing===!0||W.isSkinnedMesh&&Qe.skinning===!1||!W.isSkinnedMesh&&Qe.skinning===!0||W.isInstancedMesh&&Qe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Qe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Qe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Qe.instancingMorph===!1&&W.morphTexture!==null||Qe.envMap!==De||ne.fog===!0&&Qe.fog!==Se||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Te.numPlanes||Qe.numIntersection!==Te.numIntersection)||Qe.vertexAlphas!==nt||Qe.vertexTangents!==st||Qe.morphTargets!==$e||Qe.morphNormals!==ot||Qe.morphColors!==At||Qe.toneMapping!==St||Qe.morphTargetsCount!==Ct)&&(gt=!0):(gt=!0,Qe.__version=ne.version);let Jt=Qe.currentProgram;gt===!0&&(Jt=ls(ne,j,W));let ri=!1,Tn=!1,Pr=!1;const Ft=Jt.getUniforms(),wn=Qe.uniforms;if(Be.useProgram(Jt.program)&&(ri=!0,Tn=!0,Pr=!0),ne.id!==C&&(C=ne.id,Tn=!0),ri||R!==A){Be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(F,"projectionMatrix",A.projectionMatrix),Ft.setValue(F,"viewMatrix",A.matrixWorldInverse);const mn=Ft.map.cameraPosition;mn!==void 0&&mn.setValue(F,xe.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&Ft.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Tn=!0,Pr=!0)}if(W.isSkinnedMesh){Ft.setOptional(F,W,"bindMatrix"),Ft.setOptional(F,W,"bindMatrixInverse");const jt=W.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Ft.setValue(F,"boneTexture",jt.boneTexture,lt))}W.isBatchedMesh&&(Ft.setOptional(F,W,"batchingTexture"),Ft.setValue(F,"batchingTexture",W._matricesTexture,lt),Ft.setOptional(F,W,"batchingIdTexture"),Ft.setValue(F,"batchingIdTexture",W._indirectTexture,lt),Ft.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Ft.setValue(F,"batchingColorTexture",W._colorsTexture,lt));const pn=te.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ee.update(W,te,Jt),(Tn||Qe.receiveShadow!==W.receiveShadow)&&(Qe.receiveShadow=W.receiveShadow,Ft.setValue(F,"receiveShadow",W.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(wn.envMap.value=De,wn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),Tn&&(Ft.setValue(F,"toneMappingExposure",P.toneMappingExposure),Qe.needsLights&&da(wn,Pr),Se&&ne.fog===!0&&pe.refreshFogUniforms(wn,Se),pe.refreshMaterialUniforms(wn,ne,H,ce,v.state.transmissionRenderTarget[A.id]),Jl.upload(F,fa(Qe),wn,lt)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Jl.upload(F,fa(Qe),wn,lt),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(F,"center",W.center),Ft.setValue(F,"modelViewMatrix",W.modelViewMatrix),Ft.setValue(F,"normalMatrix",W.normalMatrix),Ft.setValue(F,"modelMatrix",W.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const jt=ne.uniformsGroups;for(let mn=0,br=jt.length;mn<br;mn++){const _t=jt[mn];ht.update(_t,Jt),ht.bind(_t,Jt)}}return Jt}function da(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function pa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,j,te){const ne=ze.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ze.get(A.texture).__webglTexture=j,ze.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const te=ze.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0};const fu=F.createFramebuffer();this.setRenderTarget=function(A,j=0,te=0){X=A,k=j,I=te;let ne=!0,W=null,Se=!1,Re=!1;if(A){const De=ze.get(A);if(De.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(F.FRAMEBUFFER,null),ne=!1;else if(De.__webglFramebuffer===void 0)lt.setupRenderTarget(A);else if(De.__hasExternalTextures)lt.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(De.__boundDepthTexture!==$e){if($e!==null&&ze.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const st=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[j])?W=st[j][te]:W=st[j],Se=!0):A.samples>0&&lt.useMultisampledRTT(A)===!1?W=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?W=st[te]:W=st,B.copy(A.viewport),J.copy(A.scissor),ie=A.scissorTest}else B.copy(K).multiplyScalar(H).floor(),J.copy(ve).multiplyScalar(H).floor(),ie=Ge;if(te!==0&&(W=fu),Be.bindFramebuffer(F.FRAMEBUFFER,W)&&ne&&Be.drawBuffers(A,W),Be.viewport(B),Be.scissor(J),Be.setScissorTest(ie),Se){const De=ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,De.__webglTexture,te)}else if(Re){const De=j;for(let nt=0;nt<A.textures.length;nt++){const st=ze.get(A.textures[nt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+nt,st.__webglTexture,te,De)}}else if(A!==null&&te!==0){const De=ze.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,De.__webglTexture,te)}C=-1},this.readRenderTargetPixels=function(A,j,te,ne,W,Se,Re,Ne=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Be.bindFramebuffer(F.FRAMEBUFFER,De);try{const nt=A.textures[Ne],st=nt.format,$e=nt.type;if(!it.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&te>=0&&te<=A.height-W&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne),F.readPixels(j,te,ne,W,We.convert(st),We.convert($e),Se))}finally{const nt=X!==null?ze.get(X).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,ne,W,Se,Re,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(j>=0&&j<=A.width-ne&&te>=0&&te<=A.height-W){Be.bindFramebuffer(F.FRAMEBUFFER,De);const nt=A.textures[Ne],st=nt.format,$e=nt.type;if(!it.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.bufferData(F.PIXEL_PACK_BUFFER,Se.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne),F.readPixels(j,te,ne,W,We.convert(st),We.convert($e),0);const At=X!==null?ze.get(X).__webglFramebuffer:null;Be.bindFramebuffer(F.FRAMEBUFFER,At);const St=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fy(F,St,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ot),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Se),F.deleteBuffer(ot),F.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,te=0){const ne=Math.pow(2,-te),W=Math.floor(A.image.width*ne),Se=Math.floor(A.image.height*ne),Re=j!==null?j.x:0,Ne=j!==null?j.y:0;lt.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,Re,Ne,W,Se),Be.unbindTexture()};const ma=F.createFramebuffer(),ga=F.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,ne=null,W=0,Se=null){Se===null&&(W!==0?(aa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Re,Ne,De,nt,st,$e,ot,At,St;const Nt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(te!==null)Re=te.max.x-te.min.x,Ne=te.max.y-te.min.y,De=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,st=te.min.y,$e=te.isBox3?te.min.z:0;else{const pn=Math.pow(2,-W);Re=Math.floor(Nt.width*pn),Ne=Math.floor(Nt.height*pn),A.isDataArrayTexture?De=Nt.depth:A.isData3DTexture?De=Math.floor(Nt.depth*pn):De=1,nt=0,st=0,$e=0}ne!==null?(ot=ne.x,At=ne.y,St=ne.z):(ot=0,At=0,St=0);const Ct=We.convert(j.format),Qe=We.convert(j.type);let bt;j.isData3DTexture?(lt.setTexture3D(j,0),bt=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(lt.setTexture2DArray(j,0),bt=F.TEXTURE_2D_ARRAY):(lt.setTexture2D(j,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const gt=F.getParameter(F.UNPACK_ROW_LENGTH),Jt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ri=F.getParameter(F.UNPACK_SKIP_PIXELS),Tn=F.getParameter(F.UNPACK_SKIP_ROWS),Pr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,st),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$e);const Ft=A.isDataArrayTexture||A.isData3DTexture,wn=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const pn=ze.get(A),jt=ze.get(j),mn=ze.get(pn.__renderTarget),br=ze.get(jt.__renderTarget);Be.bindFramebuffer(F.READ_FRAMEBUFFER,mn.__webglFramebuffer),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let _t=0;_t<De;_t++)Ft&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(A).__webglTexture,W,$e+_t),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.get(j).__webglTexture,Se,St+_t)),F.blitFramebuffer(nt,st,Re,Ne,ot,At,Re,Ne,F.DEPTH_BUFFER_BIT,F.NEAREST);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||ze.has(A)){const pn=ze.get(A),jt=ze.get(j);Be.bindFramebuffer(F.READ_FRAMEBUFFER,ma),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,ga);for(let mn=0;mn<De;mn++)Ft?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,W,$e+mn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,W),wn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,Se,St+mn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,Se),W!==0?F.blitFramebuffer(nt,st,Re,Ne,ot,At,Re,Ne,F.COLOR_BUFFER_BIT,F.NEAREST):wn?F.copyTexSubImage3D(bt,Se,ot,At,St+mn,nt,st,Re,Ne):F.copyTexSubImage2D(bt,Se,ot,At,nt,st,Re,Ne);Be.bindFramebuffer(F.READ_FRAMEBUFFER,null),Be.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else wn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(bt,Se,ot,At,St,Re,Ne,De,Ct,Qe,Nt.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,Se,ot,At,St,Re,Ne,De,Ct,Nt.data):F.texSubImage3D(bt,Se,ot,At,St,Re,Ne,De,Ct,Qe,Nt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Se,ot,At,Re,Ne,Ct,Qe,Nt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Se,ot,At,Nt.width,Nt.height,Ct,Nt.data):F.texSubImage2D(F.TEXTURE_2D,Se,ot,At,Re,Ne,Ct,Qe,Nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ri),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Pr),Se===0&&j.generateMipmaps&&F.generateMipmap(bt),Be.unbindTexture()},this.initRenderTarget=function(A){ze.get(A).__webglFramebuffer===void 0&&lt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?lt.setTextureCube(A,0):A.isData3DTexture?lt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?lt.setTexture2DArray(A,0):lt.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){k=0,I=0,X=null,Be.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}const Dg={type:"change"},Vh={type:"start"},S_={type:"end"},Xl=new Bh,Lg=new yr,Ow=Math.cos(70*uy.DEG2RAD),nn=new $,Fn=2*Math.PI,It={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Df=1e-6;class kw extends Jy{constructor(e,t=null){super(e,t),this.state=It.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qs.ROTATE,MIDDLE:Qs.DOLLY,RIGHT:Qs.PAN},this.touches={ONE:Ks.ROTATE,TWO:Ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new is,this._lastTargetPosition=new $,this._quat=new is().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new sg,this._sphericalDelta=new sg,this._scale=1,this._panOffset=new $,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new $,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zw.bind(this),this._onPointerDown=Bw.bind(this),this._onPointerUp=Hw.bind(this),this._onContextMenu=qw.bind(this),this._onMouseWheel=Ww.bind(this),this._onKeyDown=Xw.bind(this),this._onTouchStart=jw.bind(this),this._onTouchMove=Yw.bind(this),this._onMouseDown=Vw.bind(this),this._onMouseMove=Gw.bind(this),this._interceptControlDown=$w.bind(this),this._interceptControlUp=Kw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Dg),this.update(),this.state=It.NONE}update(e=null){const t=this.object.position;nn.copy(t).sub(this.target),nn.applyQuaternion(this._quat),this._spherical.setFromVector3(nn),this.autoRotate&&this.state===It.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),o<-Math.PI?o+=Fn:o>Math.PI&&(o-=Fn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=c!=this._spherical.radius}if(nn.setFromSpherical(this._spherical),nn.applyQuaternion(this._quatInverse),t.copy(this.target).add(nn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=nn.length();c=this._clampDistance(f*this._scale);const d=f-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const f=new $(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(f),this.object.updateMatrixWorld(),c=nn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<Ow?this.object.lookAt(this.target):(Lg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(Lg,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Df||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Df||this._lastTargetPosition.distanceToSquared(this.target)>Df?(this.dispatchEvent(Dg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){nn.setFromMatrixColumn(t,0),nn.multiplyScalar(-e),this._panOffset.add(nn)}_panUp(e,t){this.screenSpacePanning===!0?nn.setFromMatrixColumn(t,1):(nn.setFromMatrixColumn(t,0),nn.crossVectors(this.object.up,nn)),nn.multiplyScalar(e),this._panOffset.add(nn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;nn.copy(o).sub(this.target);let l=nn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,c=r.width,f=r.height;this._mouse.x=o/c*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Bw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function zw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Hw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(S_),this.state=It.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Vw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=It.DOLLY;break;case Qs.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}break;case Qs.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=It.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=It.PAN}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Vh)}function Gw(s){switch(this.state){case It.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case It.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case It.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ww(s){this.enabled===!1||this.enableZoom===!1||this.state!==It.NONE||(s.preventDefault(),this.dispatchEvent(Vh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(S_))}function Xw(s){this.enabled!==!1&&this._handleKeyDown(s)}function jw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=It.TOUCH_ROTATE;break;case Ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=It.TOUCH_PAN;break;default:this.state=It.NONE}break;case 2:switch(this.touches.TWO){case Ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=It.TOUCH_DOLLY_PAN;break;case Ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=It.TOUCH_DOLLY_ROTATE;break;default:this.state=It.NONE}break;default:this.state=It.NONE}this.state!==It.NONE&&this.dispatchEvent(Vh)}function Yw(s){switch(this._trackPointer(s),this.state){case It.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case It.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case It.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case It.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=It.NONE}}function qw(s){this.enabled!==!1&&s.preventDefault()}function $w(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Kw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zw(){const[s,e]=Oe.useState(!1),[t,r]=Oe.useState(!1),[o,l]=Oe.useState(!1),[c,f]=Oe.useState(!1),[d,p]=Oe.useState(!1),[g,_]=Oe.useState(!1),[x,S]=Oe.useState(!1),[T,w]=Oe.useState(!1);z0();const y=()=>{_(!0),setTimeout(()=>{_(!1),S(!0),w(!0)},2500)};return Je.jsxs("div",{className:`surprise-page ${s?"pink-bg":"black-bg"}`,children:[!s&&Je.jsx("button",{className:"btn",onClick:()=>e(!0),children:"Lights on"}),s&&!t&&Je.jsx("button",{className:"btn",onClick:()=>{r(!0),new Audio(vx).play()},children:"Play Music"}),t&&!o&&Je.jsx("button",{className:"btn",onClick:()=>l(!0),children:"Decorate"}),o&&Je.jsxs(Je.Fragment,{children:[Je.jsx("img",{src:_x,alt:"Decoration",className:"decoration-img"}),Je.jsx("div",{className:"bouncy",style:{left:"0%",rotate:"x 180deg"}}),Je.jsx("div",{className:"bouncy",style:{right:"0%",rotate:" 180deg"}}),!c&&Je.jsx("button",{className:"btn",onClick:()=>f(!0),children:"Fly the balloons"}),Je.jsx("img",{src:Dm,className:"hkitty",style:{left:"10%"}}),Je.jsx("img",{src:Dm,className:"hkitty",style:{right:"10%"}})]}),c&&!d&&Je.jsx("button",{className:"btn",onClick:()=>p(!0),children:"Show the cake"}),o&&Je.jsx(gx,{recycle:!1,numberOfPieces:800}),c&&Je.jsx("div",{className:"balloons",children:Array.from({length:10}).map((v,U)=>Je.jsx("div",{className:"balloon"},U))}),d&&!T&&Je.jsxs("div",{className:`split-image-container ${g?"cut":""}`,children:[Je.jsx("span",{className:"split-image"}),Je.jsx("span",{className:"split-image"}),!g&&Je.jsx("button",{className:"btn cut-btn",onClick:y,children:"Cut the Cake 🎂"}),Je.jsx("div",{className:"knife"})]}),T&&Je.jsxs("div",{className:"flbox",style:{width:"80vw",height:"500px",color:"#000",borderRadius:"50px",zIndex:"999",boxShadow:"5px 5px 20px #585858ff",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative",overflow:"hidden"},children:[Je.jsx("p",{children:"Hope you liked it. Now, let's see the Next Surprise!!!"}),Je.jsx("div",{style:{backgroundImage:`url(${xx})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"160px",height:"147.3px"}}),Je.jsx("button",{className:"btn",style:{marginTop:"5px",width:"150px"},onClick:()=>{window.location.href="/happybday-main/"},children:"Next >>>"}),Je.jsx("div",{style:{backgroundImage:`url(${Vg})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"294px",height:"126px",position:"absolute",bottom:"10px",right:"10px"}})]})]})}const Qw="/assets/img2-B9--N_hX.jpg",Jw=()=>{const s=Oe.useRef(null);return Oe.useEffect(()=>{const e=s.current,t=new Fy,r=new ti(60,window.innerWidth/window.innerHeight,1,5e3);r.position.set(0,0,800);const o=new Fw({antialias:!0});o.setSize(window.innerWidth,window.innerHeight),e.appendChild(o.domElement);const l=new kw(r,o.domElement);l.enableDamping=!0;const c=new qy,f=[],d=[],p=Qw;c.load(p,I=>{const X=new Ql({map:I,transparent:!0});for(let C=0;C<100;C++){const R=new Ef(X.clone());R.scale.set(200,200,1),R.position.set((Math.random()-.5)*3e3,(Math.random()-.5)*3e3,(Math.random()-.5)*3e3),t.add(R),f.push(R)}});const g=(I,X)=>{const C=document.createElement("canvas");C.width=512,C.height=128;const R=C.getContext("2d");return R.clearRect(0,0,C.width,C.height),R.font="bold 64px Arial",R.fillStyle=X,R.textAlign="center",R.textBaseline="middle",R.shadowColor=X,R.shadowBlur=20,R.fillText(I,C.width/2,C.height/2),new Vy(C)},_=["#ff66ff","#66ccff","#ffff66","#66ff99","#ff9966"];for(let I=0;I<200;I++){const X=_[I%_.length],C=g("HBD Trapti",X),R=new Ql({map:C,transparent:!0}),B=new Ef(R);B.scale.set(250,80,1),B.position.set((Math.random()-.5)*3500,(Math.random()-.5)*3500,(Math.random()-.5)*3500),t.add(B),f.push(B),d.push({sprite:B,baseColor:X})}const x=g(" ","red"),S=new Ql({map:x,transparent:!0,opacity:.6});for(let I=0;I<40;I++){const X=new Ef(S.clone()),C=100+Math.random()*150;X.scale.set(C,C,1),X.position.set((Math.random()-.5)*3e3,(Math.random()-.5)*3e3,(Math.random()-.5)*3e3),t.add(X),f.push(X)}const T=4e3,w=new Float32Array(T*3);for(let I=0;I<T*3;I++)w[I]=(Math.random()-.5)*6e3;const y=new Ti;y.setAttribute("position",new ii(w,3));const v=new d_({color:16777215,size:2}),U=new Hy(y,v);t.add(U);const N=new Zy(16777215,.7);t.add(N);let P;const z=()=>{l.update();const I=Date.now()*.001;f.forEach((X,C)=>{X.rotation.z+=.002,X.position.x+=Math.sin(I+C)*.1,X.position.y+=Math.cos(I+C*.5)*.1}),d.forEach((X,C)=>{if(C%10===0){const B=`hsl(${(I*40+C*10)%360}, 100%, 60%)`;X.sprite.material.map=g("HBD Trapti",B),X.sprite.material.needsUpdate=!0}}),o.render(t,r),P=requestAnimationFrame(z)};z();const k=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k),cancelAnimationFrame(P),e.removeChild(o.domElement),t.traverse(I=>{I.geometry&&I.geometry.dispose(),I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.dispose()):I.material.dispose()),I.texture&&I.texture.dispose()}),o.dispose()}},[]),Je.jsx("div",{ref:s,style:{margin:0,height:"100%",background:"#000",overflow:"hidden"}})};function e1(){return Je.jsxs(tx,{children:[Je.jsx(jl,{path:"/",element:Je.jsx(ox,{})}),Je.jsx(jl,{path:"/surprise",element:Je.jsx(Zw,{})}),Je.jsx(jl,{path:"/galaxy",element:Je.jsx(Jw,{})})]})}f0.createRoot(document.getElementById("root")).render(Je.jsx(to.StrictMode,{children:Je.jsx(ix,{children:Je.jsx(e1,{})})}));
