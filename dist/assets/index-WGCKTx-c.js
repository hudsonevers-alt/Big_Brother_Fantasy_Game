(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function W0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wv={exports:{}},Th={},$v={exports:{}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=Symbol.for("react.element"),$0=Symbol.for("react.portal"),H0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Q0=Symbol.for("react.context"),Y0=Symbol.for("react.forward_ref"),X0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),Og=Symbol.iterator;function eS(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qv=Object.assign,Gv={};function Jo(t,e,n){this.props=t,this.context=e,this.refs=Gv,this.updater=n||Hv}Jo.prototype.isReactComponent={};Jo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Jo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kv(){}Kv.prototype=Jo.prototype;function Fp(t,e,n){this.props=t,this.context=e,this.refs=Gv,this.updater=n||Hv}var Bp=Fp.prototype=new Kv;Bp.constructor=Fp;qv(Bp,Jo.prototype);Bp.isPureReactComponent=!0;var Lg=Array.isArray,Qv=Object.prototype.hasOwnProperty,zp={current:null},Yv={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Qv.call(e,r)&&!Yv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Kl,type:t,key:i,ref:o,props:s,_owner:zp.current}}function tS(t,e){return{$$typeof:Kl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kl}function nS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mg=/\/+/g;function Sd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nS(""+t.key):e.toString(36)}function cc(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Kl:case $0:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Sd(o,0):r,Lg(s)?(n="",t!=null&&(n=t.replace(Mg,"$&/")+"/"),cc(s,e,n,"",function(h){return h})):s!=null&&(Wp(s)&&(s=tS(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Mg,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Lg(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+Sd(i,l);o+=cc(i,e,n,u,s)}else if(u=eS(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+Sd(i,l++),o+=cc(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Uu(t,e,n){if(t==null)return t;var r=[],s=0;return cc(t,r,"","",function(i){return e.call(n,i,s++)}),r}function rS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},hc={transition:null},sS={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:hc,ReactCurrentOwner:zp};function Jv(){throw Error("act(...) is not supported in production builds of React.")}ue.Children={map:Uu,forEach:function(t,e,n){Uu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Uu(t,function(){e++}),e},toArray:function(t){return Uu(t,function(e){return e})||[]},only:function(t){if(!Wp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Jo;ue.Fragment=H0;ue.Profiler=G0;ue.PureComponent=Fp;ue.StrictMode=q0;ue.Suspense=X0;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;ue.act=Jv;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=qv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=zp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Qv.call(e,u)&&!Yv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Kl,type:t.type,key:s,ref:i,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:Q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:K0,_context:t},t.Consumer=t};ue.createElement=Xv;ue.createFactory=function(t){var e=Xv.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:Y0,render:t}};ue.isValidElement=Wp;ue.lazy=function(t){return{$$typeof:Z0,_payload:{_status:-1,_result:t},_init:rS}};ue.memo=function(t,e){return{$$typeof:J0,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=hc.transition;hc.transition={};try{t()}finally{hc.transition=e}};ue.unstable_act=Jv;ue.useCallback=function(t,e){return Zt.current.useCallback(t,e)};ue.useContext=function(t){return Zt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return Zt.current.useEffect(t,e)};ue.useId=function(){return Zt.current.useId()};ue.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return Zt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};ue.useRef=function(t){return Zt.current.useRef(t)};ue.useState=function(t){return Zt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return Zt.current.useTransition()};ue.version="18.3.1";$v.exports=ue;var B=$v.exports;const iS=W0(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oS=B,aS=Symbol.for("react.element"),lS=Symbol.for("react.fragment"),uS=Object.prototype.hasOwnProperty,cS=oS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hS={key:!0,ref:!0,__self:!0,__source:!0};function Zv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)uS.call(e,r)&&!hS.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:aS,type:t,key:i,ref:o,props:s,_owner:cS.current}}Th.Fragment=lS;Th.jsx=Zv;Th.jsxs=Zv;Wv.exports=Th;var f=Wv.exports,Ef={},ew={exports:{}},Tn={},tw={exports:{}},nw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(Q,te){var re=Q.length;Q.push(te);e:for(;0<re;){var Ae=re-1>>>1,Pe=Q[Ae];if(0<s(Pe,te))Q[Ae]=te,Q[re]=Pe,re=Ae;else break e}}function n(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var te=Q[0],re=Q.pop();if(re!==te){Q[0]=re;e:for(var Ae=0,Pe=Q.length,vt=Pe>>>1;Ae<vt;){var zt=2*(Ae+1)-1,wt=Q[zt],xt=zt+1,Wt=Q[xt];if(0>s(wt,re))xt<Pe&&0>s(Wt,wt)?(Q[Ae]=Wt,Q[xt]=re,Ae=xt):(Q[Ae]=wt,Q[zt]=re,Ae=zt);else if(xt<Pe&&0>s(Wt,re))Q[Ae]=Wt,Q[xt]=re,Ae=xt;else break e}}return te}function s(Q,te){var re=Q.sortIndex-te.sortIndex;return re!==0?re:Q.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],m=1,p=null,g=3,A=!1,D=!1,V=!1,M=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(Q){for(var te=n(h);te!==null;){if(te.callback===null)r(h);else if(te.startTime<=Q)r(h),te.sortIndex=te.expirationTime,e(u,te);else break;te=n(h)}}function j(Q){if(V=!1,C(Q),!D)if(n(u)!==null)D=!0,Ln(q);else{var te=n(h);te!==null&&Hs(j,te.startTime-Q)}}function q(Q,te){D=!1,V&&(V=!1,R(_),_=-1),A=!0;var re=g;try{for(C(te),p=n(u);p!==null&&(!(p.expirationTime>te)||Q&&!P());){var Ae=p.callback;if(typeof Ae=="function"){p.callback=null,g=p.priorityLevel;var Pe=Ae(p.expirationTime<=te);te=t.unstable_now(),typeof Pe=="function"?p.callback=Pe:p===n(u)&&r(u),C(te)}else r(u);p=n(u)}if(p!==null)var vt=!0;else{var zt=n(h);zt!==null&&Hs(j,zt.startTime-te),vt=!1}return vt}finally{p=null,g=re,A=!1}}var H=!1,E=null,_=-1,w=5,k=-1;function P(){return!(t.unstable_now()-k<w)}function x(){if(E!==null){var Q=t.unstable_now();k=Q;var te=!0;try{te=E(!0,Q)}finally{te?I():(H=!1,E=null)}}else H=!1}var I;if(typeof T=="function")I=function(){T(x)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Nt=Te.port2;Te.port1.onmessage=x,I=function(){Nt.postMessage(null)}}else I=function(){M(x,0)};function Ln(Q){E=Q,H||(H=!0,I())}function Hs(Q,te){_=M(function(){Q(t.unstable_now())},te)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(Q){Q.callback=null},t.unstable_continueExecution=function(){D||A||(D=!0,Ln(q))},t.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<Q?Math.floor(1e3/Q):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var re=g;g=te;try{return Q()}finally{g=re}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(Q,te){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var re=g;g=Q;try{return te()}finally{g=re}},t.unstable_scheduleCallback=function(Q,te,re){var Ae=t.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Ae+re:Ae):re=Ae,Q){case 1:var Pe=-1;break;case 2:Pe=250;break;case 5:Pe=1073741823;break;case 4:Pe=1e4;break;default:Pe=5e3}return Pe=re+Pe,Q={id:m++,callback:te,priorityLevel:Q,startTime:re,expirationTime:Pe,sortIndex:-1},re>Ae?(Q.sortIndex=re,e(h,Q),n(u)===null&&Q===n(h)&&(V?(R(_),_=-1):V=!0,Hs(j,re-Ae))):(Q.sortIndex=Pe,e(u,Q),D||A||(D=!0,Ln(q))),Q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(Q){var te=g;return function(){var re=g;g=te;try{return Q.apply(this,arguments)}finally{g=re}}}})(nw);tw.exports=nw;var dS=tw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=B,En=dS;function W(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rw=new Set,El={};function bi(t,e){Vo(t,e),Vo(t+"Capture",e)}function Vo(t,e){for(El[t]=e,t=0;t<e.length;t++)rw.add(e[t])}var Vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tf=Object.prototype.hasOwnProperty,pS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jg={},Ug={};function mS(t){return Tf.call(Ug,t)?!0:Tf.call(jg,t)?!1:pS.test(t)?Ug[t]=!0:(jg[t]=!0,!1)}function gS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function yS(t,e,n,r){if(e===null||typeof e>"u"||gS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var $p=/[\-:]([a-z])/g;function Hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($p,Hp);Rt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($p,Hp);Rt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($p,Hp);Rt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function qp(t,e,n,r){var s=Rt.hasOwnProperty(e)?Rt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(yS(e,n,s,r)&&(n=null),r||s===null?mS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hr=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fu=Symbol.for("react.element"),co=Symbol.for("react.portal"),ho=Symbol.for("react.fragment"),Gp=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),sw=Symbol.for("react.provider"),iw=Symbol.for("react.context"),Kp=Symbol.for("react.forward_ref"),Sf=Symbol.for("react.suspense"),kf=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),os=Symbol.for("react.lazy"),ow=Symbol.for("react.offscreen"),Fg=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=Fg&&t[Fg]||t["@@iterator"],typeof t=="function"?t:null)}var je=Object.assign,kd;function qa(t){if(kd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);kd=e&&e[1]||""}return`
`+kd+t}var Ad=!1;function Pd(t,e){if(!t||Ad)return"";Ad=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Ad=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qa(t):""}function _S(t){switch(t.tag){case 5:return qa(t.type);case 16:return qa("Lazy");case 13:return qa("Suspense");case 19:return qa("SuspenseList");case 0:case 2:case 15:return t=Pd(t.type,!1),t;case 11:return t=Pd(t.type.render,!1),t;case 1:return t=Pd(t.type,!0),t;default:return""}}function Af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ho:return"Fragment";case co:return"Portal";case If:return"Profiler";case Gp:return"StrictMode";case Sf:return"Suspense";case kf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iw:return(t.displayName||"Context")+".Consumer";case sw:return(t._context.displayName||"Context")+".Provider";case Kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qp:return e=t.displayName||null,e!==null?e:Af(t.type)||"Memo";case os:e=t._payload,t=t._init;try{return Af(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===Gp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bs(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function aw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wS(t){var e=aw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bu(t){t._valueTracker||(t._valueTracker=wS(t))}function lw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=aw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return je({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bs(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uw(t,e){e=e.checked,e!=null&&qp(t,"checked",e,!1)}function Rf(t,e){uw(t,e);var n=bs(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cf(t,e.type,bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cf(t,e,n){(e!=="number"||Dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ga=Array.isArray;function Io(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bs(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(W(91));return je({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(W(92));if(Ga(n)){if(1<n.length)throw Error(W(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bs(n)}}function cw(t,e){var n=bs(e.value),r=bs(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $g(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zu,dw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zu=zu||document.createElement("div"),zu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var rl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ES=["Webkit","ms","Moz","O"];Object.keys(rl).forEach(function(t){ES.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),rl[e]=rl[t]})});function fw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||rl.hasOwnProperty(t)&&rl[t]?(""+e).trim():e+"px"}function pw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=fw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var TS=je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bf(t,e){if(e){if(TS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(W(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(W(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(W(61))}if(e.style!=null&&typeof e.style!="object")throw Error(W(62))}}function Df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vf=null;function Yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,So=null,ko=null;function Hg(t){if(t=Xl(t)){if(typeof Of!="function")throw Error(W(280));var e=t.stateNode;e&&(e=Ph(e),Of(t.stateNode,t.type,e))}}function mw(t){So?ko?ko.push(t):ko=[t]:So=t}function gw(){if(So){var t=So,e=ko;if(ko=So=null,Hg(t),e)for(t=0;t<e.length;t++)Hg(e[t])}}function yw(t,e){return t(e)}function _w(){}var Rd=!1;function vw(t,e,n){if(Rd)return t(e,n);Rd=!0;try{return yw(t,e,n)}finally{Rd=!1,(So!==null||ko!==null)&&(_w(),gw())}}function Il(t,e){var n=t.stateNode;if(n===null)return null;var r=Ph(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(W(231,e,typeof n));return n}var Lf=!1;if(Vr)try{var La={};Object.defineProperty(La,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",La,La),window.removeEventListener("test",La,La)}catch{Lf=!1}function IS(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(m){this.onError(m)}}var sl=!1,Vc=null,Oc=!1,Mf=null,SS={onError:function(t){sl=!0,Vc=t}};function kS(t,e,n,r,s,i,o,l,u){sl=!1,Vc=null,IS.apply(SS,arguments)}function AS(t,e,n,r,s,i,o,l,u){if(kS.apply(this,arguments),sl){if(sl){var h=Vc;sl=!1,Vc=null}else throw Error(W(198));Oc||(Oc=!0,Mf=h)}}function Di(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ww(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qg(t){if(Di(t)!==t)throw Error(W(188))}function PS(t){var e=t.alternate;if(!e){if(e=Di(t),e===null)throw Error(W(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return qg(s),t;if(i===r)return qg(s),e;i=i.sibling}throw Error(W(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(W(189))}}if(n.alternate!==r)throw Error(W(190))}if(n.tag!==3)throw Error(W(188));return n.stateNode.current===n?t:e}function Ew(t){return t=PS(t),t!==null?Tw(t):null}function Tw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Tw(t);if(e!==null)return e;t=t.sibling}return null}var Iw=En.unstable_scheduleCallback,Gg=En.unstable_cancelCallback,RS=En.unstable_shouldYield,CS=En.unstable_requestPaint,Ge=En.unstable_now,NS=En.unstable_getCurrentPriorityLevel,Xp=En.unstable_ImmediatePriority,Sw=En.unstable_UserBlockingPriority,Lc=En.unstable_NormalPriority,xS=En.unstable_LowPriority,kw=En.unstable_IdlePriority,Ih=null,cr=null;function bS(t){if(cr&&typeof cr.onCommitFiberRoot=="function")try{cr.onCommitFiberRoot(Ih,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:OS,DS=Math.log,VS=Math.LN2;function OS(t){return t>>>=0,t===0?32:31-(DS(t)/VS|0)|0}var Wu=64,$u=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ka(l):(i&=o,i!==0&&(r=Ka(i)))}else o=n&~s,o!==0?r=Ka(o):i!==0&&(r=Ka(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qn(e),s=1<<n,r|=t[n],e&=~s;return r}function LS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-qn(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=LS(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function jf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Aw(){var t=Wu;return Wu<<=1,!(Wu&4194240)&&(Wu=64),t}function Cd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function jS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-qn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Jp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Ee=0;function Pw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rw,Zp,Cw,Nw,xw,Uf=!1,Hu=[],ys=null,_s=null,vs=null,Sl=new Map,kl=new Map,ls=[],US="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kg(t,e){switch(t){case"focusin":case"focusout":ys=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":Sl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Ma(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Xl(e),e!==null&&Zp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function FS(t,e,n,r,s){switch(e){case"focusin":return ys=Ma(ys,t,e,n,r,s),!0;case"dragenter":return _s=Ma(_s,t,e,n,r,s),!0;case"mouseover":return vs=Ma(vs,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Sl.set(i,Ma(Sl.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,kl.set(i,Ma(kl.get(i)||null,t,e,n,r,s)),!0}return!1}function bw(t){var e=mi(t.target);if(e!==null){var n=Di(e);if(n!==null){if(e=n.tag,e===13){if(e=ww(n),e!==null){t.blockedOn=e,xw(t.priority,function(){Cw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function dc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vf=r,n.target.dispatchEvent(r),Vf=null}else return e=Xl(n),e!==null&&Zp(e),t.blockedOn=n,!1;e.shift()}return!0}function Qg(t,e,n){dc(t)&&n.delete(e)}function BS(){Uf=!1,ys!==null&&dc(ys)&&(ys=null),_s!==null&&dc(_s)&&(_s=null),vs!==null&&dc(vs)&&(vs=null),Sl.forEach(Qg),kl.forEach(Qg)}function ja(t,e){t.blockedOn===e&&(t.blockedOn=null,Uf||(Uf=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,BS)))}function Al(t){function e(s){return ja(s,t)}if(0<Hu.length){ja(Hu[0],t);for(var n=1;n<Hu.length;n++){var r=Hu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ys!==null&&ja(ys,t),_s!==null&&ja(_s,t),vs!==null&&ja(vs,t),Sl.forEach(e),kl.forEach(e),n=0;n<ls.length;n++)r=ls[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ls.length&&(n=ls[0],n.blockedOn===null);)bw(n),n.blockedOn===null&&ls.shift()}var Ao=Hr.ReactCurrentBatchConfig,jc=!0;function zS(t,e,n,r){var s=Ee,i=Ao.transition;Ao.transition=null;try{Ee=1,em(t,e,n,r)}finally{Ee=s,Ao.transition=i}}function WS(t,e,n,r){var s=Ee,i=Ao.transition;Ao.transition=null;try{Ee=4,em(t,e,n,r)}finally{Ee=s,Ao.transition=i}}function em(t,e,n,r){if(jc){var s=Ff(t,e,n,r);if(s===null)Ud(t,e,r,Uc,n),Kg(t,r);else if(FS(s,t,e,n,r))r.stopPropagation();else if(Kg(t,r),e&4&&-1<US.indexOf(t)){for(;s!==null;){var i=Xl(s);if(i!==null&&Rw(i),i=Ff(t,e,n,r),i===null&&Ud(t,e,r,Uc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ud(t,e,r,null,n)}}var Uc=null;function Ff(t,e,n,r){if(Uc=null,t=Yp(r),t=mi(t),t!==null)if(e=Di(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ww(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uc=t,null}function Dw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NS()){case Xp:return 1;case Sw:return 4;case Lc:case xS:return 16;case kw:return 536870912;default:return 16}default:return 16}}var fs=null,tm=null,fc=null;function Vw(){if(fc)return fc;var t,e=tm,n=e.length,r,s="value"in fs?fs.value:fs.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return fc=s.slice(t,1<r?1-r:void 0)}function pc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qu(){return!0}function Yg(){return!1}function In(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qu:Yg,this.isPropagationStopped=Yg,this}return je(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nm=In(Zo),Yl=je({},Zo,{view:0,detail:0}),$S=In(Yl),Nd,xd,Ua,Sh=je({},Yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rm,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ua&&(Ua&&t.type==="mousemove"?(Nd=t.screenX-Ua.screenX,xd=t.screenY-Ua.screenY):xd=Nd=0,Ua=t),Nd)},movementY:function(t){return"movementY"in t?t.movementY:xd}}),Xg=In(Sh),HS=je({},Sh,{dataTransfer:0}),qS=In(HS),GS=je({},Yl,{relatedTarget:0}),bd=In(GS),KS=je({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),QS=In(KS),YS=je({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XS=In(YS),JS=je({},Zo,{data:0}),Jg=In(JS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tk[t])?!!e[t]:!1}function rm(){return nk}var rk=je({},Yl,{key:function(t){if(t.key){var e=ZS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ek[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rm,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sk=In(rk),ik=je({},Sh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=In(ik),ok=je({},Yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rm}),ak=In(ok),lk=je({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),uk=In(lk),ck=je({},Sh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hk=In(ck),dk=[9,13,27,32],sm=Vr&&"CompositionEvent"in window,il=null;Vr&&"documentMode"in document&&(il=document.documentMode);var fk=Vr&&"TextEvent"in window&&!il,Ow=Vr&&(!sm||il&&8<il&&11>=il),ey=" ",ty=!1;function Lw(t,e){switch(t){case"keyup":return dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fo=!1;function pk(t,e){switch(t){case"compositionend":return Mw(e);case"keypress":return e.which!==32?null:(ty=!0,ey);case"textInput":return t=e.data,t===ey&&ty?null:t;default:return null}}function mk(t,e){if(fo)return t==="compositionend"||!sm&&Lw(t,e)?(t=Vw(),fc=tm=fs=null,fo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ow&&e.locale!=="ko"?null:e.data;default:return null}}var gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ny(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gk[t.type]:e==="textarea"}function jw(t,e,n,r){mw(r),e=Fc(e,"onChange"),0<e.length&&(n=new nm("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ol=null,Pl=null;function yk(t){Qw(t,0)}function kh(t){var e=go(t);if(lw(e))return t}function _k(t,e){if(t==="change")return e}var Uw=!1;if(Vr){var Dd;if(Vr){var Vd="oninput"in document;if(!Vd){var ry=document.createElement("div");ry.setAttribute("oninput","return;"),Vd=typeof ry.oninput=="function"}Dd=Vd}else Dd=!1;Uw=Dd&&(!document.documentMode||9<document.documentMode)}function sy(){ol&&(ol.detachEvent("onpropertychange",Fw),Pl=ol=null)}function Fw(t){if(t.propertyName==="value"&&kh(Pl)){var e=[];jw(e,Pl,t,Yp(t)),vw(yk,e)}}function vk(t,e,n){t==="focusin"?(sy(),ol=e,Pl=n,ol.attachEvent("onpropertychange",Fw)):t==="focusout"&&sy()}function wk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kh(Pl)}function Ek(t,e){if(t==="click")return kh(e)}function Tk(t,e){if(t==="input"||t==="change")return kh(e)}function Ik(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Ik;function Rl(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Tf.call(e,s)||!Kn(t[s],e[s]))return!1}return!0}function iy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oy(t,e){var n=iy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iy(n)}}function Bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zw(){for(var t=window,e=Dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Dc(t.document)}return e}function im(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Sk(t){var e=zw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bw(n.ownerDocument.documentElement,n)){if(r!==null&&im(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=oy(n,i);var o=oy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kk=Vr&&"documentMode"in document&&11>=document.documentMode,po=null,Bf=null,al=null,zf=!1;function ay(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zf||po==null||po!==Dc(r)||(r=po,"selectionStart"in r&&im(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),al&&Rl(al,r)||(al=r,r=Fc(Bf,"onSelect"),0<r.length&&(e=new nm("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=po)))}function Gu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mo={animationend:Gu("Animation","AnimationEnd"),animationiteration:Gu("Animation","AnimationIteration"),animationstart:Gu("Animation","AnimationStart"),transitionend:Gu("Transition","TransitionEnd")},Od={},Ww={};Vr&&(Ww=document.createElement("div").style,"AnimationEvent"in window||(delete mo.animationend.animation,delete mo.animationiteration.animation,delete mo.animationstart.animation),"TransitionEvent"in window||delete mo.transitionend.transition);function Ah(t){if(Od[t])return Od[t];if(!mo[t])return t;var e=mo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ww)return Od[t]=e[n];return t}var $w=Ah("animationend"),Hw=Ah("animationiteration"),qw=Ah("animationstart"),Gw=Ah("transitionend"),Kw=new Map,ly="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(t,e){Kw.set(t,e),bi(e,[t])}for(var Ld=0;Ld<ly.length;Ld++){var Md=ly[Ld],Ak=Md.toLowerCase(),Pk=Md[0].toUpperCase()+Md.slice(1);Fs(Ak,"on"+Pk)}Fs($w,"onAnimationEnd");Fs(Hw,"onAnimationIteration");Fs(qw,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(Gw,"onTransitionEnd");Vo("onMouseEnter",["mouseout","mouseover"]);Vo("onMouseLeave",["mouseout","mouseover"]);Vo("onPointerEnter",["pointerout","pointerover"]);Vo("onPointerLeave",["pointerout","pointerover"]);bi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bi("onBeforeInput",["compositionend","keypress","textInput","paste"]);bi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function uy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,AS(r,e,void 0,t),t.currentTarget=null}function Qw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;uy(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;uy(s,l,h),i=u}}}if(Oc)throw t=Mf,Oc=!1,Mf=null,t}function Ne(t,e){var n=e[Gf];n===void 0&&(n=e[Gf]=new Set);var r=t+"__bubble";n.has(r)||(Yw(e,t,2,!1),n.add(r))}function jd(t,e,n){var r=0;e&&(r|=4),Yw(n,t,r,e)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function Cl(t){if(!t[Ku]){t[Ku]=!0,rw.forEach(function(n){n!=="selectionchange"&&(Rk.has(n)||jd(n,!1,t),jd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ku]||(e[Ku]=!0,jd("selectionchange",!1,e))}}function Yw(t,e,n,r){switch(Dw(e)){case 1:var s=zS;break;case 4:s=WS;break;default:s=em}n=s.bind(null,e,n,t),s=void 0,!Lf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ud(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=mi(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}vw(function(){var h=i,m=Yp(n),p=[];e:{var g=Kw.get(t);if(g!==void 0){var A=nm,D=t;switch(t){case"keypress":if(pc(n)===0)break e;case"keydown":case"keyup":A=sk;break;case"focusin":D="focus",A=bd;break;case"focusout":D="blur",A=bd;break;case"beforeblur":case"afterblur":A=bd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=ak;break;case $w:case Hw:case qw:A=QS;break;case Gw:A=uk;break;case"scroll":A=$S;break;case"wheel":A=hk;break;case"copy":case"cut":case"paste":A=XS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Zg}var V=(e&4)!==0,M=!V&&t==="scroll",R=V?g!==null?g+"Capture":null:g;V=[];for(var T=h,C;T!==null;){C=T;var j=C.stateNode;if(C.tag===5&&j!==null&&(C=j,R!==null&&(j=Il(T,R),j!=null&&V.push(Nl(T,j,C)))),M)break;T=T.return}0<V.length&&(g=new A(g,D,null,n,m),p.push({event:g,listeners:V}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",g&&n!==Vf&&(D=n.relatedTarget||n.fromElement)&&(mi(D)||D[Or]))break e;if((A||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,A?(D=n.relatedTarget||n.toElement,A=h,D=D?mi(D):null,D!==null&&(M=Di(D),D!==M||D.tag!==5&&D.tag!==6)&&(D=null)):(A=null,D=h),A!==D)){if(V=Xg,j="onMouseLeave",R="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(V=Zg,j="onPointerLeave",R="onPointerEnter",T="pointer"),M=A==null?g:go(A),C=D==null?g:go(D),g=new V(j,T+"leave",A,n,m),g.target=M,g.relatedTarget=C,j=null,mi(m)===h&&(V=new V(R,T+"enter",D,n,m),V.target=C,V.relatedTarget=M,j=V),M=j,A&&D)t:{for(V=A,R=D,T=0,C=V;C;C=so(C))T++;for(C=0,j=R;j;j=so(j))C++;for(;0<T-C;)V=so(V),T--;for(;0<C-T;)R=so(R),C--;for(;T--;){if(V===R||R!==null&&V===R.alternate)break t;V=so(V),R=so(R)}V=null}else V=null;A!==null&&cy(p,g,A,V,!1),D!==null&&M!==null&&cy(p,M,D,V,!0)}}e:{if(g=h?go(h):window,A=g.nodeName&&g.nodeName.toLowerCase(),A==="select"||A==="input"&&g.type==="file")var q=_k;else if(ny(g))if(Uw)q=Tk;else{q=wk;var H=vk}else(A=g.nodeName)&&A.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(q=Ek);if(q&&(q=q(t,h))){jw(p,q,n,m);break e}H&&H(t,g,h),t==="focusout"&&(H=g._wrapperState)&&H.controlled&&g.type==="number"&&Cf(g,"number",g.value)}switch(H=h?go(h):window,t){case"focusin":(ny(H)||H.contentEditable==="true")&&(po=H,Bf=h,al=null);break;case"focusout":al=Bf=po=null;break;case"mousedown":zf=!0;break;case"contextmenu":case"mouseup":case"dragend":zf=!1,ay(p,n,m);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":ay(p,n,m)}var E;if(sm)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else fo?Lw(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ow&&n.locale!=="ko"&&(fo||_!=="onCompositionStart"?_==="onCompositionEnd"&&fo&&(E=Vw()):(fs=m,tm="value"in fs?fs.value:fs.textContent,fo=!0)),H=Fc(h,_),0<H.length&&(_=new Jg(_,t,null,n,m),p.push({event:_,listeners:H}),E?_.data=E:(E=Mw(n),E!==null&&(_.data=E)))),(E=fk?pk(t,n):mk(t,n))&&(h=Fc(h,"onBeforeInput"),0<h.length&&(m=new Jg("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:h}),m.data=E))}Qw(p,e)})}function Nl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Il(t,n),i!=null&&r.unshift(Nl(t,i,s)),i=Il(t,e),i!=null&&r.push(Nl(t,i,s))),t=t.return}return r}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cy(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=Il(n,i),u!=null&&o.unshift(Nl(n,u,l))):s||(u=Il(n,i),u!=null&&o.push(Nl(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ck=/\r\n?/g,Nk=/\u0000|\uFFFD/g;function hy(t){return(typeof t=="string"?t:""+t).replace(Ck,`
`).replace(Nk,"")}function Qu(t,e,n){if(e=hy(e),hy(t)!==e&&n)throw Error(W(425))}function Bc(){}var Wf=null,$f=null;function Hf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qf=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,dy=typeof Promise=="function"?Promise:void 0,bk=typeof queueMicrotask=="function"?queueMicrotask:typeof dy<"u"?function(t){return dy.resolve(null).then(t).catch(Dk)}:qf;function Dk(t){setTimeout(function(){throw t})}function Fd(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Al(e)}function ws(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),lr="__reactFiber$"+ea,xl="__reactProps$"+ea,Or="__reactContainer$"+ea,Gf="__reactEvents$"+ea,Vk="__reactListeners$"+ea,Ok="__reactHandles$"+ea;function mi(t){var e=t[lr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Or]||n[lr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fy(t);t!==null;){if(n=t[lr])return n;t=fy(t)}return e}t=n,n=t.parentNode}return null}function Xl(t){return t=t[lr]||t[Or],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function go(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(W(33))}function Ph(t){return t[xl]||null}var Kf=[],yo=-1;function Bs(t){return{current:t}}function be(t){0>yo||(t.current=Kf[yo],Kf[yo]=null,yo--)}function Ce(t,e){yo++,Kf[yo]=t.current,t.current=e}var Ds={},Ft=Bs(Ds),cn=Bs(!1),Ii=Ds;function Oo(t,e){var n=t.type.contextTypes;if(!n)return Ds;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function hn(t){return t=t.childContextTypes,t!=null}function zc(){be(cn),be(Ft)}function py(t,e,n){if(Ft.current!==Ds)throw Error(W(168));Ce(Ft,e),Ce(cn,n)}function Xw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(W(108,vS(t)||"Unknown",s));return je({},n,r)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ds,Ii=Ft.current,Ce(Ft,t),Ce(cn,cn.current),!0}function my(t,e,n){var r=t.stateNode;if(!r)throw Error(W(169));n?(t=Xw(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,be(cn),be(Ft),Ce(Ft,t)):be(cn),Ce(cn,n)}var Rr=null,Rh=!1,Bd=!1;function Jw(t){Rr===null?Rr=[t]:Rr.push(t)}function Lk(t){Rh=!0,Jw(t)}function zs(){if(!Bd&&Rr!==null){Bd=!0;var t=0,e=Ee;try{var n=Rr;for(Ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rr=null,Rh=!1}catch(s){throw Rr!==null&&(Rr=Rr.slice(t+1)),Iw(Xp,zs),s}finally{Ee=e,Bd=!1}}return null}var _o=[],vo=0,$c=null,Hc=0,Rn=[],Cn=0,Si=null,Cr=1,Nr="";function di(t,e){_o[vo++]=Hc,_o[vo++]=$c,$c=t,Hc=e}function Zw(t,e,n){Rn[Cn++]=Cr,Rn[Cn++]=Nr,Rn[Cn++]=Si,Si=t;var r=Cr;t=Nr;var s=32-qn(r)-1;r&=~(1<<s),n+=1;var i=32-qn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cr=1<<32-qn(e)+s|n<<s|r,Nr=i+t}else Cr=1<<i|n<<s|r,Nr=t}function om(t){t.return!==null&&(di(t,1),Zw(t,1,0))}function am(t){for(;t===$c;)$c=_o[--vo],_o[vo]=null,Hc=_o[--vo],_o[vo]=null;for(;t===Si;)Si=Rn[--Cn],Rn[Cn]=null,Nr=Rn[--Cn],Rn[Cn]=null,Cr=Rn[--Cn],Rn[Cn]=null}var vn=null,yn=null,Oe=!1,$n=null;function eE(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,yn=ws(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:Cr,overflow:Nr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,yn=null,!0):!1;default:return!1}}function Qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yf(t){if(Oe){var e=yn;if(e){var n=e;if(!gy(t,e)){if(Qf(t))throw Error(W(418));e=ws(n.nextSibling);var r=vn;e&&gy(t,e)?eE(r,n):(t.flags=t.flags&-4097|2,Oe=!1,vn=t)}}else{if(Qf(t))throw Error(W(418));t.flags=t.flags&-4097|2,Oe=!1,vn=t}}}function yy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Yu(t){if(t!==vn)return!1;if(!Oe)return yy(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hf(t.type,t.memoizedProps)),e&&(e=yn)){if(Qf(t))throw tE(),Error(W(418));for(;e;)eE(t,e),e=ws(e.nextSibling)}if(yy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(W(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=ws(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=vn?ws(t.stateNode.nextSibling):null;return!0}function tE(){for(var t=yn;t;)t=ws(t.nextSibling)}function Lo(){yn=vn=null,Oe=!1}function lm(t){$n===null?$n=[t]:$n.push(t)}var Mk=Hr.ReactCurrentBatchConfig;function Fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(W(309));var r=n.stateNode}if(!r)throw Error(W(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(W(284));if(!n._owner)throw Error(W(290,t))}return t}function Xu(t,e){throw t=Object.prototype.toString.call(e),Error(W(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _y(t){var e=t._init;return e(t._payload)}function nE(t){function e(R,T){if(t){var C=R.deletions;C===null?(R.deletions=[T],R.flags|=16):C.push(T)}}function n(R,T){if(!t)return null;for(;T!==null;)e(R,T),T=T.sibling;return null}function r(R,T){for(R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function s(R,T){return R=Ss(R,T),R.index=0,R.sibling=null,R}function i(R,T,C){return R.index=C,t?(C=R.alternate,C!==null?(C=C.index,C<T?(R.flags|=2,T):C):(R.flags|=2,T)):(R.flags|=1048576,T)}function o(R){return t&&R.alternate===null&&(R.flags|=2),R}function l(R,T,C,j){return T===null||T.tag!==6?(T=Kd(C,R.mode,j),T.return=R,T):(T=s(T,C),T.return=R,T)}function u(R,T,C,j){var q=C.type;return q===ho?m(R,T,C.props.children,j,C.key):T!==null&&(T.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===os&&_y(q)===T.type)?(j=s(T,C.props),j.ref=Fa(R,T,C),j.return=R,j):(j=Ec(C.type,C.key,C.props,null,R.mode,j),j.ref=Fa(R,T,C),j.return=R,j)}function h(R,T,C,j){return T===null||T.tag!==4||T.stateNode.containerInfo!==C.containerInfo||T.stateNode.implementation!==C.implementation?(T=Qd(C,R.mode,j),T.return=R,T):(T=s(T,C.children||[]),T.return=R,T)}function m(R,T,C,j,q){return T===null||T.tag!==7?(T=wi(C,R.mode,j,q),T.return=R,T):(T=s(T,C),T.return=R,T)}function p(R,T,C){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Kd(""+T,R.mode,C),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Fu:return C=Ec(T.type,T.key,T.props,null,R.mode,C),C.ref=Fa(R,null,T),C.return=R,C;case co:return T=Qd(T,R.mode,C),T.return=R,T;case os:var j=T._init;return p(R,j(T._payload),C)}if(Ga(T)||Oa(T))return T=wi(T,R.mode,C,null),T.return=R,T;Xu(R,T)}return null}function g(R,T,C,j){var q=T!==null?T.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return q!==null?null:l(R,T,""+C,j);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fu:return C.key===q?u(R,T,C,j):null;case co:return C.key===q?h(R,T,C,j):null;case os:return q=C._init,g(R,T,q(C._payload),j)}if(Ga(C)||Oa(C))return q!==null?null:m(R,T,C,j,null);Xu(R,C)}return null}function A(R,T,C,j,q){if(typeof j=="string"&&j!==""||typeof j=="number")return R=R.get(C)||null,l(T,R,""+j,q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Fu:return R=R.get(j.key===null?C:j.key)||null,u(T,R,j,q);case co:return R=R.get(j.key===null?C:j.key)||null,h(T,R,j,q);case os:var H=j._init;return A(R,T,C,H(j._payload),q)}if(Ga(j)||Oa(j))return R=R.get(C)||null,m(T,R,j,q,null);Xu(T,j)}return null}function D(R,T,C,j){for(var q=null,H=null,E=T,_=T=0,w=null;E!==null&&_<C.length;_++){E.index>_?(w=E,E=null):w=E.sibling;var k=g(R,E,C[_],j);if(k===null){E===null&&(E=w);break}t&&E&&k.alternate===null&&e(R,E),T=i(k,T,_),H===null?q=k:H.sibling=k,H=k,E=w}if(_===C.length)return n(R,E),Oe&&di(R,_),q;if(E===null){for(;_<C.length;_++)E=p(R,C[_],j),E!==null&&(T=i(E,T,_),H===null?q=E:H.sibling=E,H=E);return Oe&&di(R,_),q}for(E=r(R,E);_<C.length;_++)w=A(E,R,_,C[_],j),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?_:w.key),T=i(w,T,_),H===null?q=w:H.sibling=w,H=w);return t&&E.forEach(function(P){return e(R,P)}),Oe&&di(R,_),q}function V(R,T,C,j){var q=Oa(C);if(typeof q!="function")throw Error(W(150));if(C=q.call(C),C==null)throw Error(W(151));for(var H=q=null,E=T,_=T=0,w=null,k=C.next();E!==null&&!k.done;_++,k=C.next()){E.index>_?(w=E,E=null):w=E.sibling;var P=g(R,E,k.value,j);if(P===null){E===null&&(E=w);break}t&&E&&P.alternate===null&&e(R,E),T=i(P,T,_),H===null?q=P:H.sibling=P,H=P,E=w}if(k.done)return n(R,E),Oe&&di(R,_),q;if(E===null){for(;!k.done;_++,k=C.next())k=p(R,k.value,j),k!==null&&(T=i(k,T,_),H===null?q=k:H.sibling=k,H=k);return Oe&&di(R,_),q}for(E=r(R,E);!k.done;_++,k=C.next())k=A(E,R,_,k.value,j),k!==null&&(t&&k.alternate!==null&&E.delete(k.key===null?_:k.key),T=i(k,T,_),H===null?q=k:H.sibling=k,H=k);return t&&E.forEach(function(x){return e(R,x)}),Oe&&di(R,_),q}function M(R,T,C,j){if(typeof C=="object"&&C!==null&&C.type===ho&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Fu:e:{for(var q=C.key,H=T;H!==null;){if(H.key===q){if(q=C.type,q===ho){if(H.tag===7){n(R,H.sibling),T=s(H,C.props.children),T.return=R,R=T;break e}}else if(H.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===os&&_y(q)===H.type){n(R,H.sibling),T=s(H,C.props),T.ref=Fa(R,H,C),T.return=R,R=T;break e}n(R,H);break}else e(R,H);H=H.sibling}C.type===ho?(T=wi(C.props.children,R.mode,j,C.key),T.return=R,R=T):(j=Ec(C.type,C.key,C.props,null,R.mode,j),j.ref=Fa(R,T,C),j.return=R,R=j)}return o(R);case co:e:{for(H=C.key;T!==null;){if(T.key===H)if(T.tag===4&&T.stateNode.containerInfo===C.containerInfo&&T.stateNode.implementation===C.implementation){n(R,T.sibling),T=s(T,C.children||[]),T.return=R,R=T;break e}else{n(R,T);break}else e(R,T);T=T.sibling}T=Qd(C,R.mode,j),T.return=R,R=T}return o(R);case os:return H=C._init,M(R,T,H(C._payload),j)}if(Ga(C))return D(R,T,C,j);if(Oa(C))return V(R,T,C,j);Xu(R,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,T!==null&&T.tag===6?(n(R,T.sibling),T=s(T,C),T.return=R,R=T):(n(R,T),T=Kd(C,R.mode,j),T.return=R,R=T),o(R)):n(R,T)}return M}var Mo=nE(!0),rE=nE(!1),qc=Bs(null),Gc=null,wo=null,um=null;function cm(){um=wo=Gc=null}function hm(t){var e=qc.current;be(qc),t._currentValue=e}function Xf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Po(t,e){Gc=t,um=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(um!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(Gc===null)throw Error(W(308));wo=t,Gc.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var gi=null;function dm(t){gi===null?gi=[t]:gi.push(t)}function sE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,dm(e)):(n.next=s.next,s.next=n),e.interleaved=n,Lr(t,r)}function Lr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var as=!1;function fm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Lr(t,n)}return s=r.interleaved,s===null?(e.next=e,dm(r)):(e.next=s.next,s.next=e),r.interleaved=e,Lr(t,n)}function mc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jp(t,n)}}function vy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kc(t,e,n,r){var s=t.updateQueue;as=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var m=t.alternate;m!==null&&(m=m.updateQueue,l=m.lastBaseUpdate,l!==o&&(l===null?m.firstBaseUpdate=h:l.next=h,m.lastBaseUpdate=u))}if(i!==null){var p=s.baseState;o=0,m=h=u=null,l=i;do{var g=l.lane,A=l.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var D=t,V=l;switch(g=e,A=n,V.tag){case 1:if(D=V.payload,typeof D=="function"){p=D.call(A,p,g);break e}p=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=V.payload,g=typeof D=="function"?D.call(A,p,g):D,g==null)break e;p=je({},p,g);break e;case 2:as=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else A={eventTime:A,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},m===null?(h=m=A,u=p):m=m.next=A,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(m===null&&(u=p),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=p}}function wy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(W(191,s));s.call(r)}}}var Jl={},hr=Bs(Jl),bl=Bs(Jl),Dl=Bs(Jl);function yi(t){if(t===Jl)throw Error(W(174));return t}function pm(t,e){switch(Ce(Dl,e),Ce(bl,t),Ce(hr,Jl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xf(e,t)}be(hr),Ce(hr,e)}function jo(){be(hr),be(bl),be(Dl)}function oE(t){yi(Dl.current);var e=yi(hr.current),n=xf(e,t.type);e!==n&&(Ce(bl,t),Ce(hr,n))}function mm(t){bl.current===t&&(be(hr),be(bl))}var Le=Bs(0);function Qc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zd=[];function gm(){for(var t=0;t<zd.length;t++)zd[t]._workInProgressVersionPrimary=null;zd.length=0}var gc=Hr.ReactCurrentDispatcher,Wd=Hr.ReactCurrentBatchConfig,ki=0,Me=null,ot=null,gt=null,Yc=!1,ll=!1,Vl=0,jk=0;function Dt(){throw Error(W(321))}function ym(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function _m(t,e,n,r,s,i){if(ki=i,Me=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,gc.current=t===null||t.memoizedState===null?zk:Wk,t=n(r,s),ll){i=0;do{if(ll=!1,Vl=0,25<=i)throw Error(W(301));i+=1,gt=ot=null,e.updateQueue=null,gc.current=$k,t=n(r,s)}while(ll)}if(gc.current=Xc,e=ot!==null&&ot.next!==null,ki=0,gt=ot=Me=null,Yc=!1,e)throw Error(W(300));return t}function vm(){var t=Vl!==0;return Vl=0,t}function or(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?Me.memoizedState=gt=t:gt=gt.next=t,gt}function Vn(){if(ot===null){var t=Me.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=gt===null?Me.memoizedState:gt.next;if(e!==null)gt=e,ot=t;else{if(t===null)throw Error(W(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},gt===null?Me.memoizedState=gt=t:gt=gt.next=t}return gt}function Ol(t,e){return typeof e=="function"?e(t):e}function $d(t){var e=Vn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=ot,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var m=h.lane;if((ki&m)===m)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:m,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Me.lanes|=m,Ai|=m}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,Kn(r,e.memoizedState)||(un=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Me.lanes|=i,Ai|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hd(t){var e=Vn(),n=e.queue;if(n===null)throw Error(W(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function aE(){}function lE(t,e){var n=Me,r=Vn(),s=e(),i=!Kn(r.memoizedState,s);if(i&&(r.memoizedState=s,un=!0),r=r.queue,wm(hE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||gt!==null&&gt.memoizedState.tag&1){if(n.flags|=2048,Ll(9,cE.bind(null,n,r,s,e),void 0,null),yt===null)throw Error(W(349));ki&30||uE(n,e,s)}return s}function uE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cE(t,e,n,r){e.value=n,e.getSnapshot=r,dE(e)&&fE(t)}function hE(t,e,n){return n(function(){dE(e)&&fE(t)})}function dE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function fE(t){var e=Lr(t,1);e!==null&&Gn(e,t,1,-1)}function Ey(t){var e=or();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ol,lastRenderedState:t},e.queue=t,t=t.dispatch=Bk.bind(null,Me,t),[e.memoizedState,t]}function Ll(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Me.updateQueue,e===null?(e={lastEffect:null,stores:null},Me.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pE(){return Vn().memoizedState}function yc(t,e,n,r){var s=or();Me.flags|=t,s.memoizedState=Ll(1|e,n,void 0,r===void 0?null:r)}function Ch(t,e,n,r){var s=Vn();r=r===void 0?null:r;var i=void 0;if(ot!==null){var o=ot.memoizedState;if(i=o.destroy,r!==null&&ym(r,o.deps)){s.memoizedState=Ll(e,n,i,r);return}}Me.flags|=t,s.memoizedState=Ll(1|e,n,i,r)}function Ty(t,e){return yc(8390656,8,t,e)}function wm(t,e){return Ch(2048,8,t,e)}function mE(t,e){return Ch(4,2,t,e)}function gE(t,e){return Ch(4,4,t,e)}function yE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function _E(t,e,n){return n=n!=null?n.concat([t]):null,Ch(4,4,yE.bind(null,e,t),n)}function Em(){}function vE(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function wE(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ym(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function EE(t,e,n){return ki&21?(Kn(n,e)||(n=Aw(),Me.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function Uk(t,e){var n=Ee;Ee=n!==0&&4>n?n:4,t(!0);var r=Wd.transition;Wd.transition={};try{t(!1),e()}finally{Ee=n,Wd.transition=r}}function TE(){return Vn().memoizedState}function Fk(t,e,n){var r=Is(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},IE(t))SE(e,n);else if(n=sE(t,e,n,r),n!==null){var s=Yt();Gn(n,t,r,s),kE(n,e,r)}}function Bk(t,e,n){var r=Is(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(IE(t))SE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Kn(l,o)){var u=e.interleaved;u===null?(s.next=s,dm(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=sE(t,e,s,r),n!==null&&(s=Yt(),Gn(n,t,r,s),kE(n,e,r))}}function IE(t){var e=t.alternate;return t===Me||e!==null&&e===Me}function SE(t,e){ll=Yc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jp(t,n)}}var Xc={readContext:Dn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},zk={readContext:Dn,useCallback:function(t,e){return or().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:Ty,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yc(4194308,4,yE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return yc(4,2,t,e)},useMemo:function(t,e){var n=or();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=or();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Fk.bind(null,Me,t),[r.memoizedState,t]},useRef:function(t){var e=or();return t={current:t},e.memoizedState=t},useState:Ey,useDebugValue:Em,useDeferredValue:function(t){return or().memoizedState=t},useTransition:function(){var t=Ey(!1),e=t[0];return t=Uk.bind(null,t[1]),or().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Me,s=or();if(Oe){if(n===void 0)throw Error(W(407));n=n()}else{if(n=e(),yt===null)throw Error(W(349));ki&30||uE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ty(hE.bind(null,r,i,t),[t]),r.flags|=2048,Ll(9,cE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=or(),e=yt.identifierPrefix;if(Oe){var n=Nr,r=Cr;n=(r&~(1<<32-qn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Wk={readContext:Dn,useCallback:vE,useContext:Dn,useEffect:wm,useImperativeHandle:_E,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:$d,useRef:pE,useState:function(){return $d(Ol)},useDebugValue:Em,useDeferredValue:function(t){var e=Vn();return EE(e,ot.memoizedState,t)},useTransition:function(){var t=$d(Ol)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1},$k={readContext:Dn,useCallback:vE,useContext:Dn,useEffect:wm,useImperativeHandle:_E,useInsertionEffect:mE,useLayoutEffect:gE,useMemo:wE,useReducer:Hd,useRef:pE,useState:function(){return Hd(Ol)},useDebugValue:Em,useDeferredValue:function(t){var e=Vn();return ot===null?e.memoizedState=t:EE(e,ot.memoizedState,t)},useTransition:function(){var t=Hd(Ol)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:aE,useSyncExternalStore:lE,useId:TE,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=je({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:je({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nh={isMounted:function(t){return(t=t._reactInternals)?Di(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=Is(t),i=Dr(r,s);i.payload=e,n!=null&&(i.callback=n),e=Es(t,i,s),e!==null&&(Gn(e,t,s,r),mc(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Yt(),s=Is(t),i=Dr(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Es(t,i,s),e!==null&&(Gn(e,t,s,r),mc(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),r=Is(t),s=Dr(n,r);s.tag=2,e!=null&&(s.callback=e),e=Es(t,s,r),e!==null&&(Gn(e,t,r,n),mc(e,t,r))}};function Iy(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Rl(n,r)||!Rl(s,i):!0}function AE(t,e,n){var r=!1,s=Ds,i=e.contextType;return typeof i=="object"&&i!==null?i=Dn(i):(s=hn(e)?Ii:Ft.current,r=e.contextTypes,i=(r=r!=null)?Oo(t,s):Ds),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Sy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Nh.enqueueReplaceState(e,e.state,null)}function Zf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},fm(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Dn(i):(i=hn(e)?Ii:Ft.current,s.context=Oo(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jf(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Nh.enqueueReplaceState(s,s.state,null),Kc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Uo(t,e){try{var n="",r=e;do n+=_S(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function qd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ep(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hk=typeof WeakMap=="function"?WeakMap:Map;function PE(t,e,n){n=Dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zc||(Zc=!0,cp=r),ep(t,e)},n}function RE(t,e,n){n=Dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ep(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ep(t,e),typeof r!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ky(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Hk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=iA.bind(null,t,e,n),e.then(t,t))}function Ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Py(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Dr(-1,1),e.tag=2,Es(n,e,1))),n.lanes|=1),t)}var qk=Hr.ReactCurrentOwner,un=!1;function Kt(t,e,n,r){e.child=t===null?rE(e,null,n,r):Mo(e,t.child,n,r)}function Ry(t,e,n,r,s){n=n.render;var i=e.ref;return Po(e,s),r=_m(t,e,n,r,i,s),n=vm(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mr(t,e,s)):(Oe&&n&&om(e),e.flags|=1,Kt(t,e,r,s),e.child)}function Cy(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,CE(t,e,i,r,s)):(t=Ec(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rl,n(o,r)&&t.ref===e.ref)return Mr(t,e,s)}return e.flags|=1,t=Ss(i,r),t.ref=e.ref,t.return=e,e.child=t}function CE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Rl(i,r)&&t.ref===e.ref)if(un=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Mr(t,e,s)}return tp(t,e,n,r,s)}function NE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(To,gn),gn|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(To,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ce(To,gn),gn|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Ce(To,gn),gn|=r;return Kt(t,e,s,n),e.child}function xE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tp(t,e,n,r,s){var i=hn(n)?Ii:Ft.current;return i=Oo(e,i),Po(e,s),n=_m(t,e,n,r,i,s),r=vm(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Mr(t,e,s)):(Oe&&r&&om(e),e.flags|=1,Kt(t,e,n,s),e.child)}function Ny(t,e,n,r,s){if(hn(n)){var i=!0;Wc(e)}else i=!1;if(Po(e,s),e.stateNode===null)_c(t,e),AE(e,n,r),Zf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Dn(h):(h=hn(n)?Ii:Ft.current,h=Oo(e,h));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Sy(e,o,r,h),as=!1;var g=e.memoizedState;o.state=g,Kc(e,r,o,s),u=e.memoizedState,l!==r||g!==u||cn.current||as?(typeof m=="function"&&(Jf(e,n,m,r),u=e.memoizedState),(l=as||Iy(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iE(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zn(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Dn(u):(u=hn(n)?Ii:Ft.current,u=Oo(e,u));var A=n.getDerivedStateFromProps;(m=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&Sy(e,o,r,u),as=!1,g=e.memoizedState,o.state=g,Kc(e,r,o,s);var D=e.memoizedState;l!==p||g!==D||cn.current||as?(typeof A=="function"&&(Jf(e,n,A,r),D=e.memoizedState),(h=as||Iy(e,n,h,r,g,D,u)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,D,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,D,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=D),o.props=r,o.state=D,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return np(t,e,n,r,i,s)}function np(t,e,n,r,s,i){xE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&my(e,n,!1),Mr(t,e,i);r=e.stateNode,qk.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Mo(e,t.child,null,i),e.child=Mo(e,null,l,i)):Kt(t,e,l,i),e.memoizedState=r.state,s&&my(e,n,!0),e.child}function bE(t){var e=t.stateNode;e.pendingContext?py(t,e.pendingContext,e.pendingContext!==e.context):e.context&&py(t,e.context,!1),pm(t,e.containerInfo)}function xy(t,e,n,r,s){return Lo(),lm(s),e.flags|=256,Kt(t,e,n,r),e.child}var rp={dehydrated:null,treeContext:null,retryLane:0};function sp(t){return{baseLanes:t,cachePool:null,transitions:null}}function DE(t,e,n){var r=e.pendingProps,s=Le.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Ce(Le,s&1),t===null)return Yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Dh(o,r,0,null),t=wi(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sp(n),e.memoizedState=rp,t):Tm(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return Gk(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Ss(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ss(l,i):(i=wi(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rp,r}return i=t.child,t=i.sibling,r=Ss(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tm(t,e){return e=Dh({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ju(t,e,n,r){return r!==null&&lm(r),Mo(e,t.child,null,n),t=Tm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=qd(Error(W(422))),Ju(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Dh({mode:"visible",children:r.children},s,0,null),i=wi(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Mo(e,t.child,null,o),e.child.memoizedState=sp(o),e.memoizedState=rp,i);if(!(e.mode&1))return Ju(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(W(419)),r=qd(i,r,void 0),Ju(t,e,o,r)}if(l=(o&t.childLanes)!==0,un||l){if(r=yt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Lr(t,s),Gn(r,t,s,-1))}return Rm(),r=qd(Error(W(421))),Ju(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=oA.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,yn=ws(s.nextSibling),vn=e,Oe=!0,$n=null,t!==null&&(Rn[Cn++]=Cr,Rn[Cn++]=Nr,Rn[Cn++]=Si,Cr=t.id,Nr=t.overflow,Si=e),e=Tm(e,r.children),e.flags|=4096,e)}function by(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xf(t.return,e,n)}function Gd(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function VE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Kt(t,e,r.children,n),r=Le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&by(t,n,e);else if(t.tag===19)by(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(Le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Qc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Gd(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Qc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Gd(e,!0,n,null,i);break;case"together":Gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _c(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(W(153));if(e.child!==null){for(t=e.child,n=Ss(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ss(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kk(t,e,n){switch(e.tag){case 3:bE(e),Lo();break;case 5:oE(e);break;case 1:hn(e.type)&&Wc(e);break;case 4:pm(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Ce(qc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(Le,Le.current&1),e.flags|=128,null):n&e.child.childLanes?DE(t,e,n):(Ce(Le,Le.current&1),t=Mr(t,e,n),t!==null?t.sibling:null);Ce(Le,Le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return VE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ce(Le,Le.current),r)break;return null;case 22:case 23:return e.lanes=0,NE(t,e,n)}return Mr(t,e,n)}var OE,ip,LE,ME;OE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ip=function(){};LE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,yi(hr.current);var i=null;switch(n){case"input":s=Pf(t,s),r=Pf(t,r),i=[];break;case"select":s=je({},s,{value:void 0}),r=je({},r,{value:void 0}),i=[];break;case"textarea":s=Nf(t,s),r=Nf(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bc)}bf(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(El.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(El.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&Ne("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};ME=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ba(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Qk(t,e,n){var r=e.pendingProps;switch(am(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return hn(e.type)&&zc(),Vt(e),null;case 3:return r=e.stateNode,jo(),be(cn),be(Ft),gm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Yu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(fp($n),$n=null))),ip(t,e),Vt(e),null;case 5:mm(e);var s=yi(Dl.current);if(n=e.type,t!==null&&e.stateNode!=null)LE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(W(166));return Vt(e),null}if(t=yi(hr.current),Yu(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[lr]=e,r[xl]=i,t=(e.mode&1)!==0,n){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<Qa.length;s++)Ne(Qa[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Bg(r,i),Ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ne("invalid",r);break;case"textarea":Wg(r,i),Ne("invalid",r)}bf(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Qu(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Qu(r.textContent,l,t),s=["children",""+l]):El.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ne("scroll",r)}switch(n){case"input":Bu(r),zg(r,i,!0);break;case"textarea":Bu(r),$g(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[lr]=e,t[xl]=r,OE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Df(n,r),n){case"dialog":Ne("cancel",t),Ne("close",t),s=r;break;case"iframe":case"object":case"embed":Ne("load",t),s=r;break;case"video":case"audio":for(s=0;s<Qa.length;s++)Ne(Qa[s],t);s=r;break;case"source":Ne("error",t),s=r;break;case"img":case"image":case"link":Ne("error",t),Ne("load",t),s=r;break;case"details":Ne("toggle",t),s=r;break;case"input":Bg(t,r),s=Pf(t,r),Ne("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=je({},r,{value:void 0}),Ne("invalid",t);break;case"textarea":Wg(t,r),s=Nf(t,r),Ne("invalid",t);break;default:s=r}bf(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?pw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tl(t,u):typeof u=="number"&&Tl(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(El.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Ne("scroll",t):u!=null&&qp(t,i,u,o))}switch(n){case"input":Bu(t),zg(t,r,!1);break;case"textarea":Bu(t),$g(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bs(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Io(t,!!r.multiple,i,!1):r.defaultValue!=null&&Io(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Bc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)ME(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(W(166));if(n=yi(Dl.current),yi(hr.current),Yu(e)){if(r=e.stateNode,n=e.memoizedProps,r[lr]=e,(i=r.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Qu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[lr]=e,e.stateNode=r}return Vt(e),null;case 13:if(be(Le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&yn!==null&&e.mode&1&&!(e.flags&128))tE(),Lo(),e.flags|=98560,i=!1;else if(i=Yu(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(W(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(W(317));i[lr]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),i=!1}else $n!==null&&(fp($n),$n=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Le.current&1?lt===0&&(lt=3):Rm())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return jo(),ip(t,e),t===null&&Cl(e.stateNode.containerInfo),Vt(e),null;case 10:return hm(e.type._context),Vt(e),null;case 17:return hn(e.type)&&zc(),Vt(e),null;case 19:if(be(Le),i=e.memoizedState,i===null)return Vt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ba(i,!1);else{if(lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qc(t),o!==null){for(e.flags|=128,Ba(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(Le,Le.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ge()>Fo&&(e.flags|=128,r=!0,Ba(i,!1),e.lanes=4194304)}else{if(!r)if(t=Qc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return Vt(e),null}else 2*Ge()-i.renderingStartTime>Fo&&n!==1073741824&&(e.flags|=128,r=!0,Ba(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ge(),e.sibling=null,n=Le.current,Ce(Le,r?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Pm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(W(156,e.tag))}function Yk(t,e){switch(am(e),e.tag){case 1:return hn(e.type)&&zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return jo(),be(cn),be(Ft),gm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mm(e),null;case 13:if(be(Le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(W(340));Lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Le),null;case 4:return jo(),null;case 10:return hm(e.type._context),null;case 22:case 23:return Pm(),null;case 24:return null;default:return null}}var Zu=!1,jt=!1,Xk=typeof WeakSet=="function"?WeakSet:Set,J=null;function Eo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function op(t,e,n){try{n()}catch(r){We(t,e,r)}}var Dy=!1;function Jk(t,e){if(Wf=jc,t=zw(),im(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,m=0,p=t,g=null;t:for(;;){for(var A;p!==n||s!==0&&p.nodeType!==3||(l=o+s),p!==i||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(A=p.firstChild)!==null;)g=p,p=A;for(;;){if(p===t)break t;if(g===n&&++h===s&&(l=o),g===i&&++m===r&&(u=o),(A=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($f={focusedElem:t,selectionRange:n},jc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var D=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(D!==null){var V=D.memoizedProps,M=D.memoizedState,R=e.stateNode,T=R.getSnapshotBeforeUpdate(e.elementType===e.type?V:zn(e.type,V),M);R.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(W(163))}}catch(j){We(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return D=Dy,Dy=!1,D}function ul(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&op(e,n,i)}s=s.next}while(s!==r)}}function xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ap(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jE(t){var e=t.alternate;e!==null&&(t.alternate=null,jE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[lr],delete e[xl],delete e[Gf],delete e[Vk],delete e[Ok])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function UE(t){return t.tag===5||t.tag===3||t.tag===4}function Vy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||UE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bc));else if(r!==4&&(t=t.child,t!==null))for(lp(t,e,n),t=t.sibling;t!==null;)lp(t,e,n),t=t.sibling}function up(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(up(t,e,n),t=t.sibling;t!==null;)up(t,e,n),t=t.sibling}var St=null,Wn=!1;function rs(t,e,n){for(n=n.child;n!==null;)FE(t,e,n),n=n.sibling}function FE(t,e,n){if(cr&&typeof cr.onCommitFiberUnmount=="function")try{cr.onCommitFiberUnmount(Ih,n)}catch{}switch(n.tag){case 5:jt||Eo(n,e);case 6:var r=St,s=Wn;St=null,rs(t,e,n),St=r,Wn=s,St!==null&&(Wn?(t=St,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):St.removeChild(n.stateNode));break;case 18:St!==null&&(Wn?(t=St,n=n.stateNode,t.nodeType===8?Fd(t.parentNode,n):t.nodeType===1&&Fd(t,n),Al(t)):Fd(St,n.stateNode));break;case 4:r=St,s=Wn,St=n.stateNode.containerInfo,Wn=!0,rs(t,e,n),St=r,Wn=s;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&op(n,e,o),s=s.next}while(s!==r)}rs(t,e,n);break;case 1:if(!jt&&(Eo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,e,l)}rs(t,e,n);break;case 21:rs(t,e,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,rs(t,e,n),jt=r):rs(t,e,n);break;default:rs(t,e,n)}}function Oy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xk),e.forEach(function(r){var s=aA.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:St=l.stateNode,Wn=!1;break e;case 3:St=l.stateNode.containerInfo,Wn=!0;break e;case 4:St=l.stateNode.containerInfo,Wn=!0;break e}l=l.return}if(St===null)throw Error(W(160));FE(i,o,s),St=null,Wn=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){We(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)BE(e,t),e=e.sibling}function BE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ir(t),r&4){try{ul(3,t,t.return),xh(3,t)}catch(V){We(t,t.return,V)}try{ul(5,t,t.return)}catch(V){We(t,t.return,V)}}break;case 1:Bn(e,t),ir(t),r&512&&n!==null&&Eo(n,n.return);break;case 5:if(Bn(e,t),ir(t),r&512&&n!==null&&Eo(n,n.return),t.flags&32){var s=t.stateNode;try{Tl(s,"")}catch(V){We(t,t.return,V)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&uw(s,i),Df(l,o);var h=Df(l,i);for(o=0;o<u.length;o+=2){var m=u[o],p=u[o+1];m==="style"?pw(s,p):m==="dangerouslySetInnerHTML"?dw(s,p):m==="children"?Tl(s,p):qp(s,m,p,h)}switch(l){case"input":Rf(s,i);break;case"textarea":cw(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var A=i.value;A!=null?Io(s,!!i.multiple,A,!1):g!==!!i.multiple&&(i.defaultValue!=null?Io(s,!!i.multiple,i.defaultValue,!0):Io(s,!!i.multiple,i.multiple?[]:"",!1))}s[xl]=i}catch(V){We(t,t.return,V)}}break;case 6:if(Bn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(W(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(V){We(t,t.return,V)}}break;case 3:if(Bn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(V){We(t,t.return,V)}break;case 4:Bn(e,t),ir(t);break;case 13:Bn(e,t),ir(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(km=Ge())),r&4&&Oy(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(h=jt)||m,Bn(e,t),jt=h):Bn(e,t),ir(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!m&&t.mode&1)for(J=t,m=t.child;m!==null;){for(p=J=m;J!==null;){switch(g=J,A=g.child,g.tag){case 0:case 11:case 14:case 15:ul(4,g,g.return);break;case 1:Eo(g,g.return);var D=g.stateNode;if(typeof D.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,D.props=e.memoizedProps,D.state=e.memoizedState,D.componentWillUnmount()}catch(V){We(r,n,V)}}break;case 5:Eo(g,g.return);break;case 22:if(g.memoizedState!==null){My(p);continue}}A!==null?(A.return=g,J=A):My(p)}m=m.sibling}e:for(m=null,p=t;;){if(p.tag===5){if(m===null){m=p;try{s=p.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=fw("display",o))}catch(V){We(t,t.return,V)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(V){We(t,t.return,V)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Bn(e,t),ir(t),r&4&&Oy(t);break;case 21:break;default:Bn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(UE(n)){var r=n;break e}n=n.return}throw Error(W(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Tl(s,""),r.flags&=-33);var i=Vy(t);up(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Vy(t);lp(t,l,o);break;default:throw Error(W(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Zk(t,e,n){J=t,zE(t)}function zE(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var s=J,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Zu;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||jt;l=Zu;var h=jt;if(Zu=o,(jt=u)&&!h)for(J=s;J!==null;)o=J,u=o.child,o.tag===22&&o.memoizedState!==null?jy(s):u!==null?(u.return=o,J=u):jy(s);for(;i!==null;)J=i,zE(i),i=i.sibling;J=s,Zu=l,jt=h}Ly(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,J=i):Ly(t)}}function Ly(t){for(;J!==null;){var e=J;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!jt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&wy(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var m=h.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&Al(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(W(163))}jt||e.flags&512&&ap(e)}catch(g){We(e,e.return,g)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function My(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function jy(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xh(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){We(e,s,u)}}var i=e.return;try{ap(e)}catch(u){We(e,i,u)}break;case 5:var o=e.return;try{ap(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var eA=Math.ceil,Jc=Hr.ReactCurrentDispatcher,Im=Hr.ReactCurrentOwner,bn=Hr.ReactCurrentBatchConfig,ge=0,yt=null,tt=null,Pt=0,gn=0,To=Bs(0),lt=0,Ml=null,Ai=0,bh=0,Sm=0,cl=null,an=null,km=0,Fo=1/0,Pr=null,Zc=!1,cp=null,Ts=null,ec=!1,ps=null,eh=0,hl=0,hp=null,vc=-1,wc=0;function Yt(){return ge&6?Ge():vc!==-1?vc:vc=Ge()}function Is(t){return t.mode&1?ge&2&&Pt!==0?Pt&-Pt:Mk.transition!==null?(wc===0&&(wc=Aw()),wc):(t=Ee,t!==0||(t=window.event,t=t===void 0?16:Dw(t.type)),t):1}function Gn(t,e,n,r){if(50<hl)throw hl=0,hp=null,Error(W(185));Ql(t,n,r),(!(ge&2)||t!==yt)&&(t===yt&&(!(ge&2)&&(bh|=n),lt===4&&us(t,Pt)),dn(t,r),n===1&&ge===0&&!(e.mode&1)&&(Fo=Ge()+500,Rh&&zs()))}function dn(t,e){var n=t.callbackNode;MS(t,e);var r=Mc(t,t===yt?Pt:0);if(r===0)n!==null&&Gg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gg(n),e===1)t.tag===0?Lk(Uy.bind(null,t)):Jw(Uy.bind(null,t)),bk(function(){!(ge&6)&&zs()}),n=null;else{switch(Pw(r)){case 1:n=Xp;break;case 4:n=Sw;break;case 16:n=Lc;break;case 536870912:n=kw;break;default:n=Lc}n=YE(n,WE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function WE(t,e){if(vc=-1,wc=0,ge&6)throw Error(W(327));var n=t.callbackNode;if(Ro()&&t.callbackNode!==n)return null;var r=Mc(t,t===yt?Pt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=th(t,r);else{e=r;var s=ge;ge|=2;var i=HE();(yt!==t||Pt!==e)&&(Pr=null,Fo=Ge()+500,vi(t,e));do try{rA();break}catch(l){$E(t,l)}while(!0);cm(),Jc.current=i,ge=s,tt!==null?e=0:(yt=null,Pt=0,e=lt)}if(e!==0){if(e===2&&(s=jf(t),s!==0&&(r=s,e=dp(t,s))),e===1)throw n=Ml,vi(t,0),us(t,r),dn(t,Ge()),n;if(e===6)us(t,r);else{if(s=t.current.alternate,!(r&30)&&!tA(s)&&(e=th(t,r),e===2&&(i=jf(t),i!==0&&(r=i,e=dp(t,i))),e===1))throw n=Ml,vi(t,0),us(t,r),dn(t,Ge()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(W(345));case 2:fi(t,an,Pr);break;case 3:if(us(t,r),(r&130023424)===r&&(e=km+500-Ge(),10<e)){if(Mc(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Yt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qf(fi.bind(null,t,an,Pr),e);break}fi(t,an,Pr);break;case 4:if(us(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-qn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*eA(r/1960))-r,10<r){t.timeoutHandle=qf(fi.bind(null,t,an,Pr),r);break}fi(t,an,Pr);break;case 5:fi(t,an,Pr);break;default:throw Error(W(329))}}}return dn(t,Ge()),t.callbackNode===n?WE.bind(null,t):null}function dp(t,e){var n=cl;return t.current.memoizedState.isDehydrated&&(vi(t,e).flags|=256),t=th(t,e),t!==2&&(e=an,an=n,e!==null&&fp(e)),t}function fp(t){an===null?an=t:an.push.apply(an,t)}function tA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Kn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function us(t,e){for(e&=~Sm,e&=~bh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),r=1<<n;t[n]=-1,e&=~r}}function Uy(t){if(ge&6)throw Error(W(327));Ro();var e=Mc(t,0);if(!(e&1))return dn(t,Ge()),null;var n=th(t,e);if(t.tag!==0&&n===2){var r=jf(t);r!==0&&(e=r,n=dp(t,r))}if(n===1)throw n=Ml,vi(t,0),us(t,e),dn(t,Ge()),n;if(n===6)throw Error(W(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fi(t,an,Pr),dn(t,Ge()),null}function Am(t,e){var n=ge;ge|=1;try{return t(e)}finally{ge=n,ge===0&&(Fo=Ge()+500,Rh&&zs())}}function Pi(t){ps!==null&&ps.tag===0&&!(ge&6)&&Ro();var e=ge;ge|=1;var n=bn.transition,r=Ee;try{if(bn.transition=null,Ee=1,t)return t()}finally{Ee=r,bn.transition=n,ge=e,!(ge&6)&&zs()}}function Pm(){gn=To.current,be(To)}function vi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xk(n)),tt!==null)for(n=tt.return;n!==null;){var r=n;switch(am(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zc();break;case 3:jo(),be(cn),be(Ft),gm();break;case 5:mm(r);break;case 4:jo();break;case 13:be(Le);break;case 19:be(Le);break;case 10:hm(r.type._context);break;case 22:case 23:Pm()}n=n.return}if(yt=t,tt=t=Ss(t.current,null),Pt=gn=e,lt=0,Ml=null,Sm=bh=Ai=0,an=cl=null,gi!==null){for(e=0;e<gi.length;e++)if(n=gi[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}gi=null}return t}function $E(t,e){do{var n=tt;try{if(cm(),gc.current=Xc,Yc){for(var r=Me.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Yc=!1}if(ki=0,gt=ot=Me=null,ll=!1,Vl=0,Im.current=null,n===null||n.return===null){lt=1,Ml=e,tt=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Pt,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,m=l,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var A=Ay(o);if(A!==null){A.flags&=-257,Py(A,o,l,i,e),A.mode&1&&ky(i,h,e),e=A,u=h;var D=e.updateQueue;if(D===null){var V=new Set;V.add(u),e.updateQueue=V}else D.add(u);break e}else{if(!(e&1)){ky(i,h,e),Rm();break e}u=Error(W(426))}}else if(Oe&&l.mode&1){var M=Ay(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Py(M,o,l,i,e),lm(Uo(u,l));break e}}i=u=Uo(u,l),lt!==4&&(lt=2),cl===null?cl=[i]:cl.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var R=PE(i,u,e);vy(i,R);break e;case 1:l=u;var T=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof T.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(Ts===null||!Ts.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=RE(i,l,e);vy(i,j);break e}}i=i.return}while(i!==null)}GE(n)}catch(q){e=q,tt===n&&n!==null&&(tt=n=n.return);continue}break}while(!0)}function HE(){var t=Jc.current;return Jc.current=Xc,t===null?Xc:t}function Rm(){(lt===0||lt===3||lt===2)&&(lt=4),yt===null||!(Ai&268435455)&&!(bh&268435455)||us(yt,Pt)}function th(t,e){var n=ge;ge|=2;var r=HE();(yt!==t||Pt!==e)&&(Pr=null,vi(t,e));do try{nA();break}catch(s){$E(t,s)}while(!0);if(cm(),ge=n,Jc.current=r,tt!==null)throw Error(W(261));return yt=null,Pt=0,lt}function nA(){for(;tt!==null;)qE(tt)}function rA(){for(;tt!==null&&!RS();)qE(tt)}function qE(t){var e=QE(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?GE(t):tt=e,Im.current=null}function GE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yk(n,e),n!==null){n.flags&=32767,tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{lt=6,tt=null;return}}else if(n=Qk(n,e,gn),n!==null){tt=n;return}if(e=e.sibling,e!==null){tt=e;return}tt=e=t}while(e!==null);lt===0&&(lt=5)}function fi(t,e,n){var r=Ee,s=bn.transition;try{bn.transition=null,Ee=1,sA(t,e,n,r)}finally{bn.transition=s,Ee=r}return null}function sA(t,e,n,r){do Ro();while(ps!==null);if(ge&6)throw Error(W(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(W(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(jS(t,i),t===yt&&(tt=yt=null,Pt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ec||(ec=!0,YE(Lc,function(){return Ro(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=bn.transition,bn.transition=null;var o=Ee;Ee=1;var l=ge;ge|=4,Im.current=null,Jk(t,n),BE(n,t),Sk($f),jc=!!Wf,$f=Wf=null,t.current=n,Zk(n),CS(),ge=l,Ee=o,bn.transition=i}else t.current=n;if(ec&&(ec=!1,ps=t,eh=s),i=t.pendingLanes,i===0&&(Ts=null),bS(n.stateNode),dn(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Zc)throw Zc=!1,t=cp,cp=null,t;return eh&1&&t.tag!==0&&Ro(),i=t.pendingLanes,i&1?t===hp?hl++:(hl=0,hp=t):hl=0,zs(),null}function Ro(){if(ps!==null){var t=Pw(eh),e=bn.transition,n=Ee;try{if(bn.transition=null,Ee=16>t?16:t,ps===null)var r=!1;else{if(t=ps,ps=null,eh=0,ge&6)throw Error(W(331));var s=ge;for(ge|=4,J=t.current;J!==null;){var i=J,o=i.child;if(J.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(J=h;J!==null;){var m=J;switch(m.tag){case 0:case 11:case 15:ul(8,m,i)}var p=m.child;if(p!==null)p.return=m,J=p;else for(;J!==null;){m=J;var g=m.sibling,A=m.return;if(jE(m),m===h){J=null;break}if(g!==null){g.return=A,J=g;break}J=A}}}var D=i.alternate;if(D!==null){var V=D.child;if(V!==null){D.child=null;do{var M=V.sibling;V.sibling=null,V=M}while(V!==null)}}J=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,J=o;else e:for(;J!==null;){if(i=J,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ul(9,i,i.return)}var R=i.sibling;if(R!==null){R.return=i.return,J=R;break e}J=i.return}}var T=t.current;for(J=T;J!==null;){o=J;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,J=C;else e:for(o=T;J!==null;){if(l=J,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xh(9,l)}}catch(q){We(l,l.return,q)}if(l===o){J=null;break e}var j=l.sibling;if(j!==null){j.return=l.return,J=j;break e}J=l.return}}if(ge=s,zs(),cr&&typeof cr.onPostCommitFiberRoot=="function")try{cr.onPostCommitFiberRoot(Ih,t)}catch{}r=!0}return r}finally{Ee=n,bn.transition=e}}return!1}function Fy(t,e,n){e=Uo(n,e),e=PE(t,e,1),t=Es(t,e,1),e=Yt(),t!==null&&(Ql(t,1,e),dn(t,e))}function We(t,e,n){if(t.tag===3)Fy(t,t,n);else for(;e!==null;){if(e.tag===3){Fy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ts===null||!Ts.has(r))){t=Uo(n,t),t=RE(e,t,1),e=Es(e,t,1),t=Yt(),e!==null&&(Ql(e,1,t),dn(e,t));break}}e=e.return}}function iA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,yt===t&&(Pt&n)===n&&(lt===4||lt===3&&(Pt&130023424)===Pt&&500>Ge()-km?vi(t,0):Sm|=n),dn(t,e)}function KE(t,e){e===0&&(t.mode&1?(e=$u,$u<<=1,!($u&130023424)&&($u=4194304)):e=1);var n=Yt();t=Lr(t,e),t!==null&&(Ql(t,e,n),dn(t,n))}function oA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),KE(t,n)}function aA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(W(314))}r!==null&&r.delete(e),KE(t,n)}var QE;QE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Kk(t,e,n);un=!!(t.flags&131072)}else un=!1,Oe&&e.flags&1048576&&Zw(e,Hc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_c(t,e),t=e.pendingProps;var s=Oo(e,Ft.current);Po(e,n),s=_m(null,e,r,t,s,n);var i=vm();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(r)?(i=!0,Wc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fm(e),s.updater=Nh,e.stateNode=s,s._reactInternals=e,Zf(e,r,t,n),e=np(null,e,r,!0,i,n)):(e.tag=0,Oe&&i&&om(e),Kt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_c(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=uA(r),t=zn(r,t),s){case 0:e=tp(null,e,r,t,n);break e;case 1:e=Ny(null,e,r,t,n);break e;case 11:e=Ry(null,e,r,t,n);break e;case 14:e=Cy(null,e,r,zn(r.type,t),n);break e}throw Error(W(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),tp(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),Ny(t,e,r,s,n);case 3:e:{if(bE(e),t===null)throw Error(W(387));r=e.pendingProps,i=e.memoizedState,s=i.element,iE(t,e),Kc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Uo(Error(W(423)),e),e=xy(t,e,r,n,s);break e}else if(r!==s){s=Uo(Error(W(424)),e),e=xy(t,e,r,n,s);break e}else for(yn=ws(e.stateNode.containerInfo.firstChild),vn=e,Oe=!0,$n=null,n=rE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Lo(),r===s){e=Mr(t,e,n);break e}Kt(t,e,r,n)}e=e.child}return e;case 5:return oE(e),t===null&&Yf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hf(r,s)?o=null:i!==null&&Hf(r,i)&&(e.flags|=32),xE(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Yf(e),null;case 13:return DE(t,e,n);case 4:return pm(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Mo(e,null,r,n):Kt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),Ry(t,e,r,s,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Ce(qc,r._currentValue),r._currentValue=o,i!==null)if(Kn(i.value,o)){if(i.children===s.children&&!cn.current){e=Mr(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Dr(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var m=h.pending;m===null?u.next=u:(u.next=m.next,m.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xf(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(W(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Kt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Po(e,n),s=Dn(s),r=r(s),e.flags|=1,Kt(t,e,r,n),e.child;case 14:return r=e.type,s=zn(r,e.pendingProps),s=zn(r.type,s),Cy(t,e,r,s,n);case 15:return CE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:zn(r,s),_c(t,e),e.tag=1,hn(r)?(t=!0,Wc(e)):t=!1,Po(e,n),AE(e,r,s),Zf(e,r,s,n),np(null,e,r,!0,t,n);case 19:return VE(t,e,n);case 22:return NE(t,e,n)}throw Error(W(156,e.tag))};function YE(t,e){return Iw(t,e)}function lA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new lA(t,e,n,r)}function Cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uA(t){if(typeof t=="function")return Cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kp)return 11;if(t===Qp)return 14}return 2}function Ss(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ec(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ho:return wi(n.children,s,i,e);case Gp:o=8,s|=8;break;case If:return t=xn(12,n,e,s|2),t.elementType=If,t.lanes=i,t;case Sf:return t=xn(13,n,e,s),t.elementType=Sf,t.lanes=i,t;case kf:return t=xn(19,n,e,s),t.elementType=kf,t.lanes=i,t;case ow:return Dh(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sw:o=10;break e;case iw:o=9;break e;case Kp:o=11;break e;case Qp:o=14;break e;case os:o=16,r=null;break e}throw Error(W(130,t==null?t:typeof t,""))}return e=xn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function wi(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Dh(t,e,n,r){return t=xn(22,t,r,e),t.elementType=ow,t.lanes=n,t.stateNode={isHidden:!1},t}function Kd(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Qd(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cA(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Nm(t,e,n,r,s,i,o,l,u){return t=new cA(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=xn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fm(i),t}function hA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:co,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function XE(t){if(!t)return Ds;t=t._reactInternals;e:{if(Di(t)!==t||t.tag!==1)throw Error(W(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(W(171))}if(t.tag===1){var n=t.type;if(hn(n))return Xw(t,n,e)}return e}function JE(t,e,n,r,s,i,o,l,u){return t=Nm(n,r,!0,t,s,i,o,l,u),t.context=XE(null),n=t.current,r=Yt(),s=Is(n),i=Dr(r,s),i.callback=e??null,Es(n,i,s),t.current.lanes=s,Ql(t,s,r),dn(t,r),t}function Vh(t,e,n,r){var s=e.current,i=Yt(),o=Is(s);return n=XE(n),e.context===null?e.context=n:e.pendingContext=n,e=Dr(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Es(s,e,o),t!==null&&(Gn(t,s,o,i),mc(t,s,o)),o}function nh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function By(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xm(t,e){By(t,e),(t=t.alternate)&&By(t,e)}function dA(){return null}var ZE=typeof reportError=="function"?reportError:function(t){console.error(t)};function bm(t){this._internalRoot=t}Oh.prototype.render=bm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(W(409));Vh(t,e,null,null)};Oh.prototype.unmount=bm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pi(function(){Vh(null,t,null,null)}),e[Or]=null}};function Oh(t){this._internalRoot=t}Oh.prototype.unstable_scheduleHydration=function(t){if(t){var e=Nw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ls.length&&e!==0&&e<ls[n].priority;n++);ls.splice(n,0,t),n===0&&bw(t)}};function Dm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zy(){}function fA(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=nh(o);i.call(h)}}var o=JE(e,r,t,0,null,!1,!1,"",zy);return t._reactRootContainer=o,t[Or]=o.current,Cl(t.nodeType===8?t.parentNode:t),Pi(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=nh(u);l.call(h)}}var u=Nm(t,0,!1,null,null,!1,!1,"",zy);return t._reactRootContainer=u,t[Or]=u.current,Cl(t.nodeType===8?t.parentNode:t),Pi(function(){Vh(e,u,n,r)}),u}function Mh(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=nh(o);l.call(u)}}Vh(e,o,t,s)}else o=fA(n,e,t,s,r);return nh(o)}Rw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(Jp(e,n|1),dn(e,Ge()),!(ge&6)&&(Fo=Ge()+500,zs()))}break;case 13:Pi(function(){var r=Lr(t,1);if(r!==null){var s=Yt();Gn(r,t,1,s)}}),xm(t,1)}};Zp=function(t){if(t.tag===13){var e=Lr(t,134217728);if(e!==null){var n=Yt();Gn(e,t,134217728,n)}xm(t,134217728)}};Cw=function(t){if(t.tag===13){var e=Is(t),n=Lr(t,e);if(n!==null){var r=Yt();Gn(n,t,e,r)}xm(t,e)}};Nw=function(){return Ee};xw=function(t,e){var n=Ee;try{return Ee=t,e()}finally{Ee=n}};Of=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ph(r);if(!s)throw Error(W(90));lw(r),Rf(r,s)}}}break;case"textarea":cw(t,n);break;case"select":e=n.value,e!=null&&Io(t,!!n.multiple,e,!1)}};yw=Am;_w=Pi;var pA={usingClientEntryPoint:!1,Events:[Xl,go,Ph,mw,gw,Am]},za={findFiberByHostInstance:mi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mA={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ew(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||dA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Ih=tc.inject(mA),cr=tc}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dm(e))throw Error(W(200));return hA(t,e,null,n)};Tn.createRoot=function(t,e){if(!Dm(t))throw Error(W(299));var n=!1,r="",s=ZE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Nm(t,1,!1,null,null,n,!1,r,s),t[Or]=e.current,Cl(t.nodeType===8?t.parentNode:t),new bm(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(W(188)):(t=Object.keys(t).join(","),Error(W(268,t)));return t=Ew(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Pi(t)};Tn.hydrate=function(t,e,n){if(!Lh(e))throw Error(W(200));return Mh(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Dm(t))throw Error(W(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=ZE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=JE(e,null,t,1,n??null,s,!1,i,o),t[Or]=e.current,Cl(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Oh(e)};Tn.render=function(t,e,n){if(!Lh(e))throw Error(W(200));return Mh(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Lh(t))throw Error(W(40));return t._reactRootContainer?(Pi(function(){Mh(null,null,t,!1,function(){t._reactRootContainer=null,t[Or]=null})}),!0):!1};Tn.unstable_batchedUpdates=Am;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Lh(n))throw Error(W(200));if(t==null||t._reactInternals===void 0)throw Error(W(38));return Mh(t,e,n,!1,r)};Tn.version="18.3.1-next-f1338f8080-20240426";function eT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eT)}catch(t){console.error(t)}}eT(),ew.exports=Tn;var gA=ew.exports,Wy=gA;Ef.createRoot=Wy.createRoot,Ef.hydrateRoot=Wy.hydrateRoot;/*! Capacitor: https://capacitorjs.com/ - MIT License */var Bo;(function(t){t.Unimplemented="UNIMPLEMENTED",t.Unavailable="UNAVAILABLE"})(Bo||(Bo={}));class Yd extends Error{constructor(e,n,r){super(e),this.message=e,this.code=n,this.data=r}}const yA=t=>{var e,n;return t!=null&&t.androidBridge?"android":!((n=(e=t==null?void 0:t.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},_A=t=>{const e=t.CapacitorCustomPlatform||null,n=t.Capacitor||{},r=n.Plugins=n.Plugins||{},s=()=>e!==null?e.name:yA(t),i=()=>s()!=="web",o=p=>{const g=h.get(p);return!!(g!=null&&g.platforms.has(s())||l(p))},l=p=>{var g;return(g=n.PluginHeaders)===null||g===void 0?void 0:g.find(A=>A.name===p)},u=p=>t.console.error(p),h=new Map,m=(p,g={})=>{const A=h.get(p);if(A)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),A.proxy;const D=s(),V=l(p);let M;const R=async()=>(!M&&D in g?M=typeof g[D]=="function"?M=await g[D]():M=g[D]:e!==null&&!M&&"web"in g&&(M=typeof g.web=="function"?M=await g.web():M=g.web),M),T=(_,w)=>{var k,P;if(V){const x=V==null?void 0:V.methods.find(I=>w===I.name);if(x)return x.rtype==="promise"?I=>n.nativePromise(p,w.toString(),I):(I,Te)=>n.nativeCallback(p,w.toString(),I,Te);if(_)return(k=_[w])===null||k===void 0?void 0:k.bind(_)}else{if(_)return(P=_[w])===null||P===void 0?void 0:P.bind(_);throw new Yd(`"${p}" plugin is not implemented on ${D}`,Bo.Unimplemented)}},C=_=>{let w;const k=(...P)=>{const x=R().then(I=>{const Te=T(I,_);if(Te){const Nt=Te(...P);return w=Nt==null?void 0:Nt.remove,Nt}else throw new Yd(`"${p}.${_}()" is not implemented on ${D}`,Bo.Unimplemented)});return _==="addListener"&&(x.remove=async()=>w()),x};return k.toString=()=>`${_.toString()}() { [capacitor code] }`,Object.defineProperty(k,"name",{value:_,writable:!1,configurable:!1}),k},j=C("addListener"),q=C("removeListener"),H=(_,w)=>{const k=j({eventName:_},w),P=async()=>{const I=await k;q({eventName:_,callbackId:I},w)},x=new Promise(I=>k.then(()=>I({remove:P})));return x.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await P()},x},E=new Proxy({},{get(_,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return V?H:j;case"removeListener":return q;default:return C(w)}}});return r[p]=E,h.set(p,{name:p,proxy:E,platforms:new Set([...Object.keys(g),...V?[D]:[]])}),E};return n.convertFileSrc||(n.convertFileSrc=p=>p),n.getPlatform=s,n.handleError=u,n.isNativePlatform=i,n.isPluginAvailable=o,n.registerPlugin=m,n.Exception=Yd,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},vA=t=>t.Capacitor=_A(t),zo=vA(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),Zl=zo.registerPlugin;class Vm{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(e,n){let r=!1;this.listeners[e]||(this.listeners[e]=[],r=!0),this.listeners[e].push(n);const i=this.windowListeners[e];i&&!i.registered&&this.addWindowListener(i),r&&this.sendRetainedArgumentsForEvent(e);const o=async()=>this.removeListener(e,n);return Promise.resolve({remove:o})}async removeAllListeners(){this.listeners={};for(const e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}}notifyListeners(e,n,r){const s=this.listeners[e];if(!s){if(r){let i=this.retainedEventArguments[e];i||(i=[]),i.push(n),this.retainedEventArguments[e]=i}return}s.forEach(i=>i(n))}hasListeners(e){var n;return!!(!((n=this.listeners[e])===null||n===void 0)&&n.length)}registerWindowListener(e,n){this.windowListeners[n]={registered:!1,windowEventName:e,pluginEventName:n,handler:r=>{this.notifyListeners(n,r)}}}unimplemented(e="not implemented"){return new zo.Exception(e,Bo.Unimplemented)}unavailable(e="not available"){return new zo.Exception(e,Bo.Unavailable)}async removeListener(e,n){const r=this.listeners[e];if(!r)return;const s=r.indexOf(n);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}sendRetainedArgumentsForEvent(e){const n=this.retainedEventArguments[e];n&&(delete this.retainedEventArguments[e],n.forEach(r=>{this.notifyListeners(e,r)}))}}const $y=t=>encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),Hy=t=>t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class wA extends Vm{async getCookies(){const e=document.cookie,n={};return e.split(";").forEach(r=>{if(r.length<=0)return;let[s,i]=r.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=Hy(s).trim(),i=Hy(i).trim(),n[s]=i}),n}async setCookie(e){try{const n=$y(e.key),r=$y(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,i=(e.path||"/").replace("path=",""),o=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${n}=${r||""}${s}; path=${i}; ${o};`}catch(n){return Promise.reject(n)}}async deleteCookie(e){try{document.cookie=`${e.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const e=document.cookie.split(";")||[];for(const n of e)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}}async clearAllCookies(){try{await this.clearCookies()}catch(e){return Promise.reject(e)}}}Zl("CapacitorCookies",{web:()=>new wA});const EA=async t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const s=r.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},r.onerror=s=>n(s),r.readAsDataURL(t)}),TA=(t={})=>{const e=Object.keys(t);return Object.keys(t).map(s=>s.toLocaleLowerCase()).reduce((s,i,o)=>(s[i]=t[e[o]],s),{})},IA=(t,e=!0)=>t?Object.entries(t).reduce((r,s)=>{const[i,o]=s;let l,u;return Array.isArray(o)?(u="",o.forEach(h=>{l=e?encodeURIComponent(h):h,u+=`${i}=${l}&`}),u.slice(0,-1)):(l=e?encodeURIComponent(o):o,u=`${i}=${l}`),`${r}&${u}`},"").substr(1):null,SA=(t,e={})=>{const n=Object.assign({method:t.method||"GET",headers:t.headers},e),s=TA(t.headers)["content-type"]||"";if(typeof t.data=="string")n.body=t.data;else if(s.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[o,l]of Object.entries(t.data||{}))i.set(o,l);n.body=i.toString()}else if(s.includes("multipart/form-data")||t.data instanceof FormData){const i=new FormData;if(t.data instanceof FormData)t.data.forEach((l,u)=>{i.append(u,l)});else for(const l of Object.keys(t.data))i.append(l,t.data[l]);n.body=i;const o=new Headers(n.headers);o.delete("content-type"),n.headers=o}else(s.includes("application/json")||typeof t.data=="object")&&(n.body=JSON.stringify(t.data));return n};class kA extends Vm{async request(e){const n=SA(e,e.webFetchExtra),r=IA(e.params,e.shouldEncodeUrlParams),s=r?`${e.url}?${r}`:e.url,i=await fetch(s,n),o=i.headers.get("content-type")||"";let{responseType:l="text"}=i.ok?e:{};o.includes("application/json")&&(l="json");let u,h;switch(l){case"arraybuffer":case"blob":h=await i.blob(),u=await EA(h);break;case"json":u=await i.json();break;case"document":case"text":default:u=await i.text()}const m={};return i.headers.forEach((p,g)=>{m[g]=p}),{data:u,headers:m,status:i.status,url:i.url}}async get(e){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))}async post(e){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))}async put(e){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))}async patch(e){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))}async delete(e){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))}}Zl("CapacitorHttp",{web:()=>new kA});var qy;(function(t){t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT"})(qy||(qy={}));var Gy;(function(t){t.StatusBar="StatusBar",t.NavigationBar="NavigationBar"})(Gy||(Gy={}));class AA extends Vm{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}Zl("SystemBars",{web:()=>new AA});const PA="modulepreload",RA=function(t){return"/"+t},Ky={},CA=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=RA(u),u in Ky)return;Ky[u]=!0;const h=u.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":PA,h||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,A)=>{p.addEventListener("load",g),p.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};var Qy;(function(t){t.IndexedDbLocal="INDEXED_DB_LOCAL",t.InMemory="IN_MEMORY",t.BrowserLocal="BROWSER_LOCAL",t.BrowserSession="BROWSER_SESSION"})(Qy||(Qy={}));var Yy;(function(t){t.APPLE="apple.com",t.FACEBOOK="facebook.com",t.GAME_CENTER="gc.apple.com",t.GITHUB="github.com",t.GOOGLE="google.com",t.MICROSOFT="microsoft.com",t.PLAY_GAMES="playgames.google.com",t.TWITTER="twitter.com",t.YAHOO="yahoo.com",t.PASSWORD="password",t.PHONE="phone"})(Yy||(Yy={}));const Xy=Zl("FirebaseAuthentication",{web:()=>CA(()=>import("./web-C2AbOabF.js"),[]).then(t=>new t.FirebaseAuthenticationWeb)}),NA=()=>{};var Jy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},nT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,m=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(g=64)),r.push(n[m],n[p],n[g],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new bA;const g=i<<2|l>>4;if(r.push(g),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const D=h<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DA=function(t){const e=tT(t);return nT.encodeByteArray(e,!0)},rh=function(t){return DA(t).replace(/\./g,"")},rT=function(t){try{return nT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=()=>VA().__FIREBASE_DEFAULTS__,LA=()=>{if(typeof process>"u"||typeof Jy>"u")return;const t=Jy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rT(t[1]);return e&&JSON.parse(e)},jh=()=>{try{return NA()||OA()||LA()||MA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sT=t=>{var e,n;return(n=(e=jh())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},jA=t=>{const e=sT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iT=()=>{var t;return(t=jh())==null?void 0:t.config},oT=t=>{var e;return(e=jh())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function aT(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rh(JSON.stringify(n)),rh(JSON.stringify(o)),""].join(".")}const dl={};function BA(){const t={prod:[],emulator:[]};for(const e of Object.keys(dl))dl[e]?t.emulator.push(e):t.prod.push(e);return t}function zA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Zy=!1;function lT(t,e){if(typeof window>"u"||typeof document>"u"||!ta(window.location.host)||dl[t]===e||dl[t]||Zy)return;dl[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=BA().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,A){g.setAttribute("width","24"),g.setAttribute("id",A),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Zy=!0,o()},g}function m(g,A){g.setAttribute("id",A),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=zA(r),A=n("text"),D=document.getElementById(A)||document.createElement("span"),V=n("learnmore"),M=document.getElementById(V)||document.createElement("a"),R=n("preprendIcon"),T=document.getElementById(R)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const C=g.element;l(C),m(M,V);const j=h();u(T,R),C.append(T,D,M,j),document.body.appendChild(C)}i?(D.innerText="Preview backend disconnected.",T.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(T.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bt())}function $A(){var e;const t=(e=jh())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function KA(){const t=Bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QA(){return!$A()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YA(){try{return typeof indexedDB=="object"}catch{return!1}}function XA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="FirebaseError";class qr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JA,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,eu.prototype.create)}}class eu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZA(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new qr(s,l,r)}}function ZA(t,e){return t.replace(eP,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eP=/\{\$([^}]+)}/g;function tP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function jr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(e_(i)&&e_(o)){if(!jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function e_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ya(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xa(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function nP(t,e){const n=new rP(t,e);return n.subscribe.bind(n)}class rP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sP(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xd),s.error===void 0&&(s.error=Xd),s.complete===void 0&&(s.complete=Xd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t){return t&&t._delegate?t._delegate:t}class Ri{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aP(e))try{this.getOrInitializeService({instanceIdentifier:pi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pi){return this.instances.has(e)}getOptions(e=pi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pi){return this.component?this.component.multipleInstances?e:pi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oP(t){return t===pi?void 0:t}function aP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const uP={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},cP=he.INFO,hP={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},dP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hP[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Om{constructor(e){this.name=e,this._logLevel=cP,this._logHandler=dP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const fP=(t,e)=>e.some(n=>t instanceof n);let t_,n_;function pP(){return t_||(t_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mP(){return n_||(n_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uT=new WeakMap,pp=new WeakMap,cT=new WeakMap,Jd=new WeakMap,Lm=new WeakMap;function gP(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ks(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uT.set(n,t)}).catch(()=>{}),Lm.set(e,t),e}function yP(t){if(pp.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});pp.set(t,e)}let mp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return pp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ks(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _P(t){mp=t(mp)}function vP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zd(this),e,...n);return cT.set(r,e.sort?e.sort():[e]),ks(r)}:mP().includes(t)?function(...e){return t.apply(Zd(this),e),ks(uT.get(this))}:function(...e){return ks(t.apply(Zd(this),e))}}function wP(t){return typeof t=="function"?vP(t):(t instanceof IDBTransaction&&yP(t),fP(t,pP())?new Proxy(t,mp):t)}function ks(t){if(t instanceof IDBRequest)return gP(t);if(Jd.has(t))return Jd.get(t);const e=wP(t);return e!==t&&(Jd.set(t,e),Lm.set(e,t)),e}const Zd=t=>Lm.get(t);function EP(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ks(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ks(o.result),u.oldVersion,u.newVersion,ks(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const TP=["get","getKey","getAll","getAllKeys","count"],IP=["put","add","delete","clear"],ef=new Map;function r_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ef.get(e))return ef.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TP.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return ef.set(e,i),i}_P(t=>({...t,get:(e,n,r)=>r_(e,n)||t.get(e,n,r),has:(e,n)=>!!r_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gp="@firebase/app",s_="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=new Om("@firebase/app"),AP="@firebase/app-compat",PP="@firebase/analytics-compat",RP="@firebase/analytics",CP="@firebase/app-check-compat",NP="@firebase/app-check",xP="@firebase/auth",bP="@firebase/auth-compat",DP="@firebase/database",VP="@firebase/data-connect",OP="@firebase/database-compat",LP="@firebase/functions",MP="@firebase/functions-compat",jP="@firebase/installations",UP="@firebase/installations-compat",FP="@firebase/messaging",BP="@firebase/messaging-compat",zP="@firebase/performance",WP="@firebase/performance-compat",$P="@firebase/remote-config",HP="@firebase/remote-config-compat",qP="@firebase/storage",GP="@firebase/storage-compat",KP="@firebase/firestore",QP="@firebase/ai",YP="@firebase/firestore-compat",XP="firebase",JP="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="[DEFAULT]",ZP={[gp]:"fire-core",[AP]:"fire-core-compat",[RP]:"fire-analytics",[PP]:"fire-analytics-compat",[NP]:"fire-app-check",[CP]:"fire-app-check-compat",[xP]:"fire-auth",[bP]:"fire-auth-compat",[DP]:"fire-rtdb",[VP]:"fire-data-connect",[OP]:"fire-rtdb-compat",[LP]:"fire-fn",[MP]:"fire-fn-compat",[jP]:"fire-iid",[UP]:"fire-iid-compat",[FP]:"fire-fcm",[BP]:"fire-fcm-compat",[zP]:"fire-perf",[WP]:"fire-perf-compat",[$P]:"fire-rc",[HP]:"fire-rc-compat",[qP]:"fire-gcs",[GP]:"fire-gcs-compat",[KP]:"fire-fst",[YP]:"fire-fst-compat",[QP]:"fire-vertex","fire-js":"fire-js",[XP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map,eR=new Map,_p=new Map;function i_(t,e){try{t.container.addComponent(e)}catch(n){Ur.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wo(t){const e=t.name;if(_p.has(e))return Ur.debug(`There were multiple attempts to register component ${e}.`),!1;_p.set(e,t);for(const n of sh.values())i_(n,t);for(const n of eR.values())i_(n,t);return!0}function Mm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},As=new eu("app","Firebase",tR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=JP;function hT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:yp,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw As.create("bad-app-name",{appName:String(s)});if(n||(n=iT()),!n)throw As.create("no-options");const i=sh.get(s);if(i){if(jr(n,i.options)&&jr(r,i.config))return i;throw As.create("duplicate-app",{appName:s})}const o=new lP(s);for(const u of _p.values())o.addComponent(u);const l=new nR(n,r,o);return sh.set(s,l),l}function dT(t=yp){const e=sh.get(t);if(!e&&t===yp&&iT())return hT();if(!e)throw As.create("no-app",{appName:t});return e}function Ps(t,e,n){let r=ZP[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ur.warn(o.join(" "));return}Wo(new Ri(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="firebase-heartbeat-database",sR=1,jl="firebase-heartbeat-store";let tf=null;function fT(){return tf||(tf=EP(rR,sR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jl)}catch(n){console.warn(n)}}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),tf}async function iR(t){try{const n=(await fT()).transaction(jl),r=await n.objectStore(jl).get(pT(t));return await n.done,r}catch(e){if(e instanceof qr)Ur.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ur.warn(n.message)}}}async function o_(t,e){try{const r=(await fT()).transaction(jl,"readwrite");await r.objectStore(jl).put(e,pT(t)),await r.done}catch(n){if(n instanceof qr)Ur.warn(n.message);else{const r=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ur.warn(r.message)}}}function pT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1024,aR=30;class lR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=a_();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aR){const o=hR(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ur.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=a_(),{heartbeatsToSend:r,unsentEntries:s}=uR(this._heartbeatsCache.heartbeats),i=rh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ur.warn(n),""}}}function a_(){return new Date().toISOString().substring(0,10)}function uR(t,e=oR){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),l_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YA()?XA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return o_(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function l_(t){return rh(JSON.stringify({version:2,heartbeats:t})).length}function hR(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){Wo(new Ri("platform-logger",e=>new SP(e),"PRIVATE")),Wo(new Ri("heartbeat",e=>new lR(e),"PRIVATE")),Ps(gp,s_,t),Ps(gp,s_,"esm2020"),Ps("fire-js","")}dR("");function mT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fR=mT,gT=new eu("auth","Firebase",mT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=new Om("@firebase/auth");function pR(t,...e){ih.logLevel<=he.WARN&&ih.warn(`Auth (${ra}): ${t}`,...e)}function Tc(t,...e){ih.logLevel<=he.ERROR&&ih.error(`Auth (${ra}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,...e){throw Um(t,...e)}function fn(t,...e){return Um(t,...e)}function jm(t,e,n){const r={...fR(),[e]:n};return new eu("auth","Firebase",r).create(e,{appName:t.name})}function Xt(t){return jm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uh(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&On(t,"argument-error"),jm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gT.create(t,...e)}function K(t,e,...n){if(!t)throw Um(e,...n)}function xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Tc(e),new Error(e)}function Fr(t,e){t||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Fm(){return u_()==="http:"||u_()==="https:"}function u_(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||qA()||"connection"in navigator)?navigator.onLine:!0}function gR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fr(n>e,"Short delay should be less than long delay!"),this.isMobile=WA()||GA()}get(){return mR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t,e){Fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vR=new tu(3e4,6e4);function ct(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ht(t,e,n,r,s={}){return _T(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=na({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...i};return HA()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ta(t.emulatorConfig.host)&&(h.credentials="include"),yT.fetch()(await vT(t,t.config.apiHost,n,l),h)})}async function _T(t,e,n){t._canInitEmulator=!1;const r={...yR,...e};try{const s=new ER(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ja(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ja(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ja(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ja(t,"user-disabled",o);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jm(t,m,h);On(t,m)}}catch(s){if(s instanceof qr)throw s;On(t,"network-request-failed",{message:String(s)})}}async function Gr(t,e,n,r,s={}){const i=await ht(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function vT(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Bm(t.config,s):`${t.config.apiScheme}://${s}`;return _R.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function wR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ER{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),vR.get())})}}function Ja(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){return t!==void 0&&t.getResponse!==void 0}function h_(t){return t!==void 0&&t.enterprise!==void 0}class wT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return wR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TR(t){return(await ht(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ET(t,e){return ht(t,"GET","/v2/recaptchaConfig",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IR(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function SR(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function oh(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kR(t,e=!1){const n=le(t),r=await n.getIdToken(e),s=Fh(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fl(nf(s.auth_time)),issuedAtTime:fl(nf(s.iat)),expirationTime:fl(nf(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nf(t){return Number(t)*1e3}function Fh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Tc("JWT malformed, contained fewer than 3 sections"),null;try{const s=rT(n);return s?JSON.parse(s):(Tc("Failed to decode base64 JWT payload"),null)}catch(s){return Tc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function d_(t){const e=Fh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof qr&&AR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fl(this.lastLoginAt),this.creationTime=fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ci(t,oh(e,{idToken:n}));K(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?TT(s.providerUserInfo):[],o=CR(t.providerData,i),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vp(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,m)}async function RR(t){const e=le(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CR(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function TT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NR(t,e){const n=await _T(t,{},async()=>{const r=na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await vT(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&ta(t.emulatorConfig.host)&&(u.credentials="include"),yT.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xR(t,e){return ht(t,"POST","/v2/accounts:revokeToken",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):d_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=d_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await NR(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Co;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Co,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Hn{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new PR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kR(this,e)}reload(){return RR(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Hn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await Ci(this,IR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:A,providerData:D,stsTokenManager:V}=n;K(p&&V,e,"internal-error");const M=Co.fromJSON(this.name,V);K(typeof p=="string",e,"internal-error"),ss(r,e.name),ss(s,e.name),K(typeof g=="boolean",e,"internal-error"),K(typeof A=="boolean",e,"internal-error"),ss(i,e.name),ss(o,e.name),ss(l,e.name),ss(u,e.name),ss(h,e.name),ss(m,e.name);const R=new Hn({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:A,photoURL:o,phoneNumber:i,tenantId:l,stsTokenManager:M,createdAt:h,lastLoginAt:m});return D&&Array.isArray(D)&&(R.providerData=D.map(T=>({...T}))),u&&(R._redirectEventId=u),R}static async _fromIdTokenResponse(e,n,r=!1){const s=new Co;s.updateFromServerResponse(n);const i=new Hn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];K(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?TT(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Co;l.updateFromIdToken(r);const u=new Hn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new Map;function br(t){Fr(t instanceof Function,"Expected a class definition");let e=f_.get(t);return e?(Fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,f_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IT.type="NONE";const p_=IT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t,e,n){return`firebase:${t}:${e}:${n}`}class No{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ic(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ic("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await oh(this.auth,{idToken:e}).catch(()=>{});return n?Hn._fromGetAccountInfoResponse(this.auth,n,e):null}return Hn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new No(br(p_),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||br(p_);const o=Ic(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const m=await h._get(o);if(m){let p;if(typeof m=="string"){const g=await oh(e,{idToken:m}).catch(()=>{});if(!g)break;p=await Hn._fromGetAccountInfoResponse(e,g,m)}else p=Hn._fromJSON(e,m);h!==i&&(l=p),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new No(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new No(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(PT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ST(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CT(e))return"Blackberry";if(NT(e))return"Webos";if(kT(e))return"Safari";if((e.includes("chrome/")||AT(e))&&!e.includes("edge/"))return"Chrome";if(RT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ST(t=Bt()){return/firefox\//i.test(t)}function kT(t=Bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function AT(t=Bt()){return/crios\//i.test(t)}function PT(t=Bt()){return/iemobile/i.test(t)}function RT(t=Bt()){return/android/i.test(t)}function CT(t=Bt()){return/blackberry/i.test(t)}function NT(t=Bt()){return/webos/i.test(t)}function zm(t=Bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bR(t=Bt()){var e;return zm(t)&&!!((e=window.navigator)!=null&&e.standalone)}function DR(){return KA()&&document.documentMode===10}function xT(t=Bt()){return zm(t)||RT(t)||NT(t)||CT(t)||/windows phone/i.test(t)||PT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bT(t,e=[]){let n;switch(t){case"Browser":n=m_(Bt());break;case"Worker":n=`${m_(Bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ra}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OR(t,e={}){return ht(t,"GET","/v2/passwordPolicy",ct(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=6;class MR{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??LR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new g_(this),this.idTokenSubscription=new g_(this),this.beforeStateQueue=new VR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=br(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oh(this,{idToken:e}),r=await Hn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(Xt(this));const n=e?le(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await OR(this),n=new MR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new eu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&br(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[br(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&pR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function _t(t){return le(t)}class g_{constructor(e){this.auth=e,this.observer=null,this.addObserver=nP(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function UR(t){nu=t}function Wm(t){return nu.loadJS(t)}function FR(){return nu.recaptchaV2Script}function BR(){return nu.recaptchaEnterpriseScript}function zR(){return nu.gapiScript}function DT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=500,$R=6e4,nc=1e12;class HR{constructor(e){this.auth=e,this.counter=nc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new KR(e,this.auth.name,n||{})),this.counter++,r}reset(e){var r;const n=e||nc;(r=this._widgets.get(n))==null||r.delete(),this._widgets.delete(n)}getResponse(e){var r;const n=e||nc;return((r=this._widgets.get(n))==null?void 0:r.getResponse())||""}async execute(e){var r;const n=e||nc;return(r=this._widgets.get(n))==null||r.execute(),""}}class qR{constructor(){this.enterprise=new GR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class GR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class KR{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;K(s,"argument-error",{appName:n}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=QR(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},$R)},WR))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function QR(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}const YR="recaptcha-enterprise",pl="NO_RECAPTCHA";class VT{constructor(e){this.type=YR,this.auth=_t(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{ET(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new wT(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;h_(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(pl)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new qR().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&h_(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=BR();u.length!==0&&(u+=l),Wm(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Wa(t,e,n,r=!1,s=!1){const i=new VT(t);let o;if(s)o=pl;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Rs(t,e,n,r,s){var i,o;if(s==="EMAIL_PASSWORD_PROVIDER")if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Wa(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Wa(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(s==="PHONE_PROVIDER")if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await Wa(t,e,n);return r(t,l).catch(async u=>{var h;if(((h=t._getRecaptchaConfig())==null?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const m=await Wa(t,e,n,!1,!0);return r(t,m)}return Promise.reject(u)})}else{const l=await Wa(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(s+" provider is not supported.")}async function XR(t){const e=_t(t),n=await ET(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new wT(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new VT(e).verify()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t,e){const n=Mm(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(jr(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function ZR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eC(t,e,n){const r=_t(t);K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=OT(e),{host:o,port:l}=tC(e),u=l===null?"":`:${l}`,h={url:`${i}//${o}${u}/`},m=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){K(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),K(jr(h,r.config.emulator)&&jr(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,ta(o)?(aT(`${i}//${o}${u}`),lT("Auth",!0)):nC()}function OT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tC(t){const e=OT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:y_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:y_(o)}}}function y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,n){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rC(t,e){return ht(t,"POST","/v1/accounts:resetPassword",ct(t,e))}async function sC(t,e){return ht(t,"POST","/v1/accounts:update",e)}async function iC(t,e){return ht(t,"POST","/v1/accounts:signUp",e)}async function oC(t,e){return ht(t,"POST","/v1/accounts:update",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(t,e){return Gr(t,"POST","/v1/accounts:signInWithPassword",ct(t,e))}async function zh(t,e){return ht(t,"POST","/v1/accounts:sendOobCode",ct(t,e))}async function lC(t,e){return zh(t,e)}async function uC(t,e){return zh(t,e)}async function cC(t,e){return zh(t,e)}async function hC(t,e){return zh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dC(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}async function fC(t,e){return Gr(t,"POST","/v1/accounts:signInWithEmailLink",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Bh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Bl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,n,"signInWithPassword",aC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dC(e,{email:this._email,oobCode:this._password});default:On(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,r,"signUpPassword",iC,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return fC(e,{idToken:n,email:this._email,oobCode:this._password});default:On(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t,e){return Gr(t,"POST","/v1/accounts:signInWithIdp",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC="http://localhost";class Br extends Bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xo(e,n)}buildRequest(){const e={requestUri:pC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=na(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(t,e){return ht(t,"POST","/v1/accounts:sendVerificationCode",ct(t,e))}async function mC(t,e){return Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,e))}async function gC(t,e){const n=await Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,e));if(n.temporaryProof)throw Ja(t,"account-exists-with-different-credential",n);return n}const yC={USER_NOT_FOUND:"user-not-found"};async function _C(t,e){const n={...e,operation:"REAUTH"};return Gr(t,"POST","/v1/accounts:signInWithPhoneNumber",ct(t,n),yC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Bh{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ml({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ml({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return mC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return gC(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return _C(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:s}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!n&&!s&&!i?null:new ml({verificationId:n,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wC(t){const e=Ya(Xa(t)).link,n=e?Ya(Xa(e)).deep_link_id:null,r=Ya(Xa(t)).deep_link_id;return(r?Ya(Xa(r)).link:null)||r||n||e||t}class Wh{constructor(e){const n=Ya(Xa(e)),r=n.apiKey??null,s=n.oobCode??null,i=vC(n.mode??null);K(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=wC(e);try{return new Wh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.providerId=Vi.PROVIDER_ID}static credential(e,n){return Bl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wh.parseLink(n);return K(r,"argument-error"),Bl._fromEmailAndCode(e,r.code,r.tenantId)}}Vi.PROVIDER_ID="password";Vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends sa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Sc extends ia{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return K("providerId"in n&&"signInMethod"in n,"argument-error"),Br._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return K(e.idToken||e.accessToken,"argument-error"),Br._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Sc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Sc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:l}=e;if(!r&&!s&&!n&&!i||!l)return null;try{return new Sc(l)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends ia{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:cs.PROVIDER_ID,signInMethod:cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cs.credentialFromTaggedObject(e)}static credentialFromError(e){return cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cs.credential(e.oauthAccessToken)}catch{return null}}}cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ia{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends ia{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:hs.PROVIDER_ID,signInMethod:hs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hs.credentialFromTaggedObject(e)}static credentialFromError(e){return hs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hs.credential(e.oauthAccessToken)}catch{return null}}}hs.GITHUB_SIGN_IN_METHOD="github.com";hs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends ia{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:ds.PROVIDER_ID,signInMethod:ds.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ds.credentialFromTaggedObject(e)}static credentialFromError(e){return ds.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ds.credential(n,r)}catch{return null}}}ds.TWITTER_SIGN_IN_METHOD="twitter.com";ds.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e){return Gr(t,"POST","/v1/accounts:signUp",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Hn._fromIdTokenResponse(e,r,s),o=v_(r);return new gr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=v_(r);return new gr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function v_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MD(t){var s;if(at(t.app))return Promise.reject(Xt(t));const e=_t(t);if(await e._initializationPromise,(s=e.currentUser)!=null&&s.isAnonymous)return new gr({user:e.currentUser,providerId:null,operationType:"signIn"});const n=await LT(e,{returnSecureToken:!0}),r=await gr._fromIdTokenResponse(e,"signIn",n,!0);return await e._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah extends qr{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ah.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ah(e,n,r,s)}}function MT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ah._fromErrorAndOperation(t,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jD(t,e){const n=le(t);await $h(!0,n,e);const{providerUserInfo:r}=await SR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=jT(r||[]);return n.providerData=n.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function UT(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gr._forOperation(t,"link",r)}async function $h(t,e,n){await Fl(e);const r=jT(e.providerData),s=t===!1?"provider-already-linked":"no-such-provider";K(r.has(n)===t,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EC(t,e,n=!1){const{auth:r}=t;if(at(r.app))return Promise.reject(Xt(r));const s="reauthenticate";try{const i=await Ci(t,MT(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Fh(i.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),gr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t,e,n=!1){if(at(t.app))return Promise.reject(Xt(t));const r="signIn",s=await MT(t,r,e),i=await gr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Hh(t,e){return FT(_t(t),e)}async function TC(t,e){const n=le(t);return await $h(!1,n,e.providerId),UT(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IC(t,e){return Gr(t,"POST","/v1/accounts:signInWithCustomToken",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UD(t,e){if(at(t.app))return Promise.reject(Xt(t));const n=_t(t),r=await IC(n,{token:e,returnSecureToken:!0}),s=await gr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(t,e,n){var r;K(((r=n.url)==null?void 0:r.length)>0,t,"invalid-continue-uri"),K(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),K(typeof n.linkDomain>"u"||n.linkDomain.length>0,t,"invalid-hosting-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.linkDomain=n.linkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(K(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(K(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(t){const e=_t(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function FD(t,e,n){const r=_t(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&qh(r,s,n),await Rs(r,s,"getOobCode",uC,"EMAIL_PASSWORD_PROVIDER")}async function BD(t,e,n){await rC(le(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(t),r})}async function zD(t,e){await oC(le(t),{oobCode:e})}async function WD(t,e,n){if(at(t.app))return Promise.reject(Xt(t));const r=_t(t),o=await Rs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",LT,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&$m(t),u}),l=await gr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function $D(t,e,n){return at(t.app)?Promise.reject(Xt(t)):Hh(le(t),Vi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$m(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e,n){const r=_t(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function i(o,l){K(l.handleCodeInApp,r,"argument-error"),l&&qh(r,o,l)}i(s,n),await Rs(r,s,"getOobCode",cC,"EMAIL_PASSWORD_PROVIDER")}function qD(t,e){const n=Wh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function GD(t,e,n){if(at(t.app))return Promise.reject(Xt(t));const r=le(t),s=Vi.credentialWithLink(e,n||Ul());return K(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hh(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(t,e){return ht(t,"POST","/v1/accounts:createAuthUri",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(t,e){const n=Fm()?Ul():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await SC(le(t),r);return s||[]}async function QD(t,e){const n=le(t),s={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&qh(n.auth,s,e);const{email:i}=await lC(n.auth,s);i!==t.email&&await t.reload()}async function YD(t,e,n){const r=le(t),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&qh(r.auth,i,n);const{email:o}=await hC(r.auth,i);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kC(t,e){return ht(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XD(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=le(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ci(r,kC(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function JD(t,e){const n=le(t);return at(n.auth.app)?Promise.reject(Xt(n.auth)):BT(n,e,null)}function ZD(t,e){return BT(le(t),null,e)}async function BT(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(i.email=e),n&&(i.password=n);const o=await Ci(t,sC(r,i));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){var s,i;if(!t)return null;const{providerId:e}=t,n=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},r=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!e&&(t!=null&&t.idToken)){const o=(i=(s=Fh(t.idToken))==null?void 0:s.firebase)==null?void 0:i.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new bo(r,l)}}if(!e)return null;switch(e){case"facebook.com":return new PC(r,n);case"github.com":return new RC(r,n);case"google.com":return new CC(r,n);case"twitter.com":return new NC(r,n,t.screenName||null);case"custom":case"anonymous":return new bo(r,null);default:return new bo(r,e,n)}}class bo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class zT extends bo{constructor(e,n,r,s){super(e,n,r),this.username=s}}class PC extends bo{constructor(e,n){super(e,"facebook.com",n)}}class RC extends zT{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class CC extends bo{constructor(e,n){super(e,"google.com",n)}}class NC extends zT{constructor(e,n,r){super(e,"twitter.com",n,r)}}function e2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:AC(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t,e){return le(t).setPersistence(e)}function xC(t,e,n,r){return le(t).onIdTokenChanged(e,n,r)}function bC(t,e,n){return le(t).beforeAuthStateChanged(e,n)}function DC(t,e,n,r){return le(t).onAuthStateChanged(e,n,r)}function VC(t){return le(t).signOut()}function n2(t,e){return _t(t).revokeAccessToken(e)}async function r2(t){return le(t).delete()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){return ht(t,"POST","/v2/accounts/mfaEnrollment:start",ct(t,e))}const lh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lh,"1"),this.storage.removeItem(lh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OC=1e3,LC=10;class $T extends WT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);DR()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LC):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$T.type="LOCAL";const MC=$T;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT extends WT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}HT.type="SESSION";const qT=HT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await jC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=Kh("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function FC(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function BC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function WC(){return Hm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebaseLocalStorageDb",$C=1,uh="firebaseLocalStorage",KT="fbase_key";class ru{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qh(t,e){return t.transaction([uh],e?"readwrite":"readonly").objectStore(uh)}function HC(){const t=indexedDB.deleteDatabase(GT);return new ru(t).toPromise()}function wp(){const t=indexedDB.open(GT,$C);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(uh,{keyPath:KT})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(uh)?e(r):(r.close(),await HC(),e(await wp()))})})}async function E_(t,e,n){const r=Qh(t,!0).put({[KT]:e,value:n});return new ru(r).toPromise()}async function qC(t,e){const n=Qh(t,!1).get(e),r=await new ru(n).toPromise();return r===void 0?null:r.value}function T_(t,e){const n=Qh(t,!0).delete(e);return new ru(n).toPromise()}const GC=800,KC=3;class QT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gh._getInstance(WC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await BC(),!this.activeServiceWorker)return;this.sender=new UC(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wp();return await E_(e,lh,"1"),await T_(e,lh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>E_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>T_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qh(s,!1).getAll();return new ru(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QT.type="LOCAL";const QC=QT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){return ht(t,"POST","/v2/accounts/mfaSignIn:start",ct(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=DT("rcb"),YC=new tu(3e4,6e4);class XC{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!((e=et().grecaptcha)!=null&&e.render)}load(e,n=""){return K(JC(n),e,"argument-error"),this.shouldResolveImmediately(n)&&c_(et().grecaptcha)?Promise.resolve(et().grecaptcha):new Promise((r,s)=>{const i=et().setTimeout(()=>{s(fn(e,"network-request-failed"))},YC.get());et()[rf]=()=>{et().clearTimeout(i),delete et()[rf];const l=et().grecaptcha;if(!l||!c_(l)){s(fn(e,"internal-error"));return}const u=l.render;l.render=(h,m)=>{const p=u(h,m);return this.counter++,p},this.hostLanguage=n,r(l)};const o=`${FR()}?${na({onload:rf,render:"explicit",hl:n})}`;Wm(o).catch(()=>{clearTimeout(i),s(fn(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!((n=et().grecaptcha)!=null&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function JC(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ZC{async load(e){return new HR(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="recaptcha",e1={theme:"light",type:"image"};class s2{constructor(e,n,r={...e1}){this.parameters=r,this.type=gl,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=_t(e),this.isInvisible=this.parameters.size==="invisible",K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof n=="string"?document.getElementById(n):n;K(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZC:new XC,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){K(!this.parameters.sitekey,this.auth,"argument-error"),K(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),K(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=et()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){K(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){K(Fm()&&!Hm(),this.auth,"internal-error"),await t1(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await TR(this.auth);K(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return K(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function t1(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ml._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function i2(t,e,n){if(at(t.app))return Promise.reject(Xt(t));const r=_t(t),s=await XT(r,e,le(n));return new YT(s,i=>Hh(r,i))}async function o2(t,e,n){const r=le(t);await $h(!1,r,"phone");const s=await XT(r.auth,e,le(n));return new YT(s,i=>TC(r,i))}async function XT(t,e,n){var r;if(!t._getRecaptchaConfig())try{await XR(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const i=s.session;if("phoneNumber"in s){K(i.type==="enroll",t,"internal-error");const o={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Rs(t,o,"mfaSmsEnrollment",async(m,p)=>{if(p.phoneEnrollmentInfo.captchaResponse===pl){K((n==null?void 0:n.type)===gl,m,"argument-error");const g=await sf(m,p,n);return w_(m,g)}return w_(m,p)},"PHONE_PROVIDER").catch(m=>Promise.reject(m))).phoneSessionInfo.sessionInfo}else{K(i.type==="signin",t,"internal-error");const o=((r=s.multiFactorHint)==null?void 0:r.uid)||s.multiFactorUid;K(o,t,"missing-multi-factor-info");const l={mfaPendingCredential:i.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Rs(t,l,"mfaSmsSignIn",async(p,g)=>{if(g.phoneSignInInfo.captchaResponse===pl){K((n==null?void 0:n.type)===gl,p,"argument-error");const A=await sf(p,g,n);return I_(p,A)}return I_(p,g)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).phoneResponseInfo.sessionInfo}}else{const i={phoneNumber:s.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Rs(t,i,"sendVerificationCode",async(h,m)=>{if(m.captchaResponse===pl){K((n==null?void 0:n.type)===gl,h,"argument-error");const p=await sf(h,m,n);return __(h,p)}return __(h,m)},"PHONE_PROVIDER").catch(h=>Promise.reject(h))).sessionInfo}}finally{n==null||n._reset()}}async function sf(t,e,n){K(n.type===gl,t,"argument-error");const r=await n.verify();K(typeof r=="string",t,"argument-error");const s={...e};if("phoneEnrollmentInfo"in s){const i=s.phoneEnrollmentInfo.phoneNumber,o=s.phoneEnrollmentInfo.captchaResponse,l=s.phoneEnrollmentInfo.clientType,u=s.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(s,{phoneEnrollmentInfo:{phoneNumber:i,recaptchaToken:r,captchaResponse:o,clientType:l,recaptchaVersion:u}}),s}else if("phoneSignInInfo"in s){const i=s.phoneSignInInfo.captchaResponse,o=s.phoneSignInInfo.clientType,l=s.phoneSignInInfo.recaptchaVersion;return Object.assign(s,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:i,clientType:o,recaptchaVersion:l}}),s}else return Object.assign(s,{recaptchaToken:r}),s}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){return e?br(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function n1(t){return FT(t.auth,new qm(t),t.bypassAuthState)}function r1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),EC(n,new qm(t),t.bypassAuthState)}async function s1(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),UT(n,new qm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return n1;case"linkViaPopup":case"linkViaRedirect":return s1;case"reauthViaPopup":case"reauthViaRedirect":return r1;default:On(this.auth,"internal-error")}}resolve(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=new tu(2e3,1e4);async function o1(t,e,n){if(at(t.app))return Promise.reject(fn(t,"operation-not-supported-in-this-environment"));const r=_t(t);Uh(t,e,sa);const s=su(r,n);return new ms(r,"signInViaPopup",e,s).executeNotNull()}async function a2(t,e,n){const r=le(t);Uh(r.auth,e,sa);const s=su(r.auth,n);return new ms(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class ms extends JT{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ms.currentPopupAction&&ms.currentPopupAction.cancel(),ms.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Fr(this.filter.length===1,"Popup operations only handle one event");const e=Kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ms.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,i1.get())};e()}}ms.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a1="pendingRedirect",kc=new Map;class l1 extends JT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=kc.get(this.auth._key());if(!e){try{const r=await u1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}kc.set(this.auth._key(),e)}return this.bypassAuthState||kc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function u1(t,e){const n=tI(e),r=eI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function ZT(t,e){return eI(t)._set(tI(e),"true")}function c1(t,e){kc.set(t._key(),e)}function eI(t){return br(t._redirectPersistence)}function tI(t){return Ic(a1,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t,e,n){return h1(t,e,n)}async function h1(t,e,n){if(at(t.app))return Promise.reject(Xt(t));const r=_t(t);Uh(t,e,sa),await r._initializationPromise;const s=su(r,n);return await ZT(s,r),s._openRedirect(r,e,"signInViaRedirect")}function u2(t,e,n){return d1(t,e,n)}async function d1(t,e,n){const r=le(t);Uh(r.auth,e,sa),await r.auth._initializationPromise;const s=su(r.auth,n);await $h(!1,r,e.providerId),await ZT(s,r.auth);const i=await f1(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function c2(t,e){return await _t(t)._initializationPromise,nI(t,e,!1)}async function nI(t,e,n=!1){if(at(t.app))return Promise.reject(Xt(t));const r=_t(t),s=su(r,e),o=await new l1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function f1(t){const e=Kh(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=10*60*1e3;class m1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rI(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p1&&this.cachedEventUids.clear(),this.cachedEventUids.has(S_(e))}saveEventToCache(e){this.cachedEventUids.add(S_(e)),this.lastProcessedEventTime=Date.now()}}function S_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v1=/^https?/;async function w1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y1(t);for(const n of e)try{if(E1(n))return}catch{}On(t,"unauthorized-domain")}function E1(t){const e=Ul(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!v1.test(n))return!1;if(_1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=new tu(3e4,6e4);function k_(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function I1(t){return new Promise((e,n)=>{var s,i,o;function r(){k_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{k_(),n(fn(t,"network-request-failed"))},timeout:T1.get()})}if((i=(s=et().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=et().gapi)!=null&&o.load)r();else{const l=DT("iframefcb");return et()[l]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},Wm(`${zR()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ac=null,e})}let Ac=null;function S1(t){return Ac=Ac||I1(t),Ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=new tu(5e3,15e3),A1="__/auth/iframe",P1="emulator/auth/iframe",R1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function N1(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bm(e,P1):`https://${t.config.authDomain}/${A1}`,r={apiKey:e.apiKey,appName:t.name,v:ra},s=C1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${na(r).slice(1)}`}async function x1(t){const e=await S1(t),n=et().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:N1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:R1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),l=et().setTimeout(()=>{i(o)},k1.get());function u(){et().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D1=500,V1=600,O1="_blank",L1="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M1(t,e,n,r=D1,s=V1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...b1,width:r.toString(),height:s.toString(),top:i,left:o},h=Bt().toLowerCase();n&&(l=AT(h)?O1:n),ST(h)&&(e=e||L1,u.scrollbars="yes");const m=Object.entries(u).reduce((g,[A,D])=>`${g}${A}=${D},`,"");if(bR(h)&&l!=="_self")return j1(e||"",l),new A_(null);const p=window.open(e||"",l,m);K(p,t,"popup-blocked");try{p.focus()}catch{}return new A_(p)}function j1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1="__/auth/handler",F1="emulator/auth/handler",B1=encodeURIComponent("fac");async function P_(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ra,eventId:s};if(e instanceof sa){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",tP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof ia){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const m of Object.keys(l))l[m]===void 0&&delete l[m];const u=await t._getAppCheckToken(),h=u?`#${B1}=${encodeURIComponent(u)}`:"";return`${z1(t)}?${na(l).slice(1)}${h}`}function z1({config:t}){return t.emulator?Bm(t,F1):`https://${t.authDomain}/${U1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="webStorageSupport";class W1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qT,this._completeRedirectFn=nI,this._overrideRedirectResult=c1}async _openPopup(e,n,r,s){var o;Fr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await P_(e,n,r,Ul(),s);return M1(e,i,Kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await P_(e,n,r,Ul(),s);return FC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Fr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await x1(e),r=new m1(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[of];i!==void 0&&n(!!i),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=w1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xT()||kT()||zm()}}const $1=W1;var R_="@firebase/auth",C_="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function G1(t){Wo(new Ri("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bT(t)},h=new jR(r,s,i,u);return ZR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wo(new Ri("auth-internal",e=>{const n=_t(e.getProvider("auth").getImmediate());return(r=>new H1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ps(R_,C_,q1(t)),Ps(R_,C_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=5*60,Q1=oT("authIdTokenMaxAge")||K1;let N_=null;const Y1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Q1)return;const s=n==null?void 0:n.token;N_!==s&&(N_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function X1(t=dT()){const e=Mm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JR(t,{popupRedirectResolver:$1,persistence:[QC,MC,qT]}),r=oT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Y1(i.toString());bC(n,o,()=>o(n.currentUser)),xC(n,l=>o(l))}}const s=sT("auth");return s&&eC(n,`http://${s}`),n}function J1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}UR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",J1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});G1("Browser");var x_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,sI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function w(){}w.prototype=_.prototype,E.F=_.prototype,E.prototype=new w,E.prototype.constructor=E,E.D=function(k,P,x){for(var I=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)I[Te-2]=arguments[Te];return _.prototype[P].apply(k,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,_,w){w||(w=0);const k=Array(16);if(typeof _=="string")for(var P=0;P<16;++P)k[P]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(P=0;P<16;++P)k[P]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=E.g[0],w=E.g[1],P=E.g[2];let x=E.g[3],I;I=_+(x^w&(P^x))+k[0]+3614090360&4294967295,_=w+(I<<7&4294967295|I>>>25),I=x+(P^_&(w^P))+k[1]+3905402710&4294967295,x=_+(I<<12&4294967295|I>>>20),I=P+(w^x&(_^w))+k[2]+606105819&4294967295,P=x+(I<<17&4294967295|I>>>15),I=w+(_^P&(x^_))+k[3]+3250441966&4294967295,w=P+(I<<22&4294967295|I>>>10),I=_+(x^w&(P^x))+k[4]+4118548399&4294967295,_=w+(I<<7&4294967295|I>>>25),I=x+(P^_&(w^P))+k[5]+1200080426&4294967295,x=_+(I<<12&4294967295|I>>>20),I=P+(w^x&(_^w))+k[6]+2821735955&4294967295,P=x+(I<<17&4294967295|I>>>15),I=w+(_^P&(x^_))+k[7]+4249261313&4294967295,w=P+(I<<22&4294967295|I>>>10),I=_+(x^w&(P^x))+k[8]+1770035416&4294967295,_=w+(I<<7&4294967295|I>>>25),I=x+(P^_&(w^P))+k[9]+2336552879&4294967295,x=_+(I<<12&4294967295|I>>>20),I=P+(w^x&(_^w))+k[10]+4294925233&4294967295,P=x+(I<<17&4294967295|I>>>15),I=w+(_^P&(x^_))+k[11]+2304563134&4294967295,w=P+(I<<22&4294967295|I>>>10),I=_+(x^w&(P^x))+k[12]+1804603682&4294967295,_=w+(I<<7&4294967295|I>>>25),I=x+(P^_&(w^P))+k[13]+4254626195&4294967295,x=_+(I<<12&4294967295|I>>>20),I=P+(w^x&(_^w))+k[14]+2792965006&4294967295,P=x+(I<<17&4294967295|I>>>15),I=w+(_^P&(x^_))+k[15]+1236535329&4294967295,w=P+(I<<22&4294967295|I>>>10),I=_+(P^x&(w^P))+k[1]+4129170786&4294967295,_=w+(I<<5&4294967295|I>>>27),I=x+(w^P&(_^w))+k[6]+3225465664&4294967295,x=_+(I<<9&4294967295|I>>>23),I=P+(_^w&(x^_))+k[11]+643717713&4294967295,P=x+(I<<14&4294967295|I>>>18),I=w+(x^_&(P^x))+k[0]+3921069994&4294967295,w=P+(I<<20&4294967295|I>>>12),I=_+(P^x&(w^P))+k[5]+3593408605&4294967295,_=w+(I<<5&4294967295|I>>>27),I=x+(w^P&(_^w))+k[10]+38016083&4294967295,x=_+(I<<9&4294967295|I>>>23),I=P+(_^w&(x^_))+k[15]+3634488961&4294967295,P=x+(I<<14&4294967295|I>>>18),I=w+(x^_&(P^x))+k[4]+3889429448&4294967295,w=P+(I<<20&4294967295|I>>>12),I=_+(P^x&(w^P))+k[9]+568446438&4294967295,_=w+(I<<5&4294967295|I>>>27),I=x+(w^P&(_^w))+k[14]+3275163606&4294967295,x=_+(I<<9&4294967295|I>>>23),I=P+(_^w&(x^_))+k[3]+4107603335&4294967295,P=x+(I<<14&4294967295|I>>>18),I=w+(x^_&(P^x))+k[8]+1163531501&4294967295,w=P+(I<<20&4294967295|I>>>12),I=_+(P^x&(w^P))+k[13]+2850285829&4294967295,_=w+(I<<5&4294967295|I>>>27),I=x+(w^P&(_^w))+k[2]+4243563512&4294967295,x=_+(I<<9&4294967295|I>>>23),I=P+(_^w&(x^_))+k[7]+1735328473&4294967295,P=x+(I<<14&4294967295|I>>>18),I=w+(x^_&(P^x))+k[12]+2368359562&4294967295,w=P+(I<<20&4294967295|I>>>12),I=_+(w^P^x)+k[5]+4294588738&4294967295,_=w+(I<<4&4294967295|I>>>28),I=x+(_^w^P)+k[8]+2272392833&4294967295,x=_+(I<<11&4294967295|I>>>21),I=P+(x^_^w)+k[11]+1839030562&4294967295,P=x+(I<<16&4294967295|I>>>16),I=w+(P^x^_)+k[14]+4259657740&4294967295,w=P+(I<<23&4294967295|I>>>9),I=_+(w^P^x)+k[1]+2763975236&4294967295,_=w+(I<<4&4294967295|I>>>28),I=x+(_^w^P)+k[4]+1272893353&4294967295,x=_+(I<<11&4294967295|I>>>21),I=P+(x^_^w)+k[7]+4139469664&4294967295,P=x+(I<<16&4294967295|I>>>16),I=w+(P^x^_)+k[10]+3200236656&4294967295,w=P+(I<<23&4294967295|I>>>9),I=_+(w^P^x)+k[13]+681279174&4294967295,_=w+(I<<4&4294967295|I>>>28),I=x+(_^w^P)+k[0]+3936430074&4294967295,x=_+(I<<11&4294967295|I>>>21),I=P+(x^_^w)+k[3]+3572445317&4294967295,P=x+(I<<16&4294967295|I>>>16),I=w+(P^x^_)+k[6]+76029189&4294967295,w=P+(I<<23&4294967295|I>>>9),I=_+(w^P^x)+k[9]+3654602809&4294967295,_=w+(I<<4&4294967295|I>>>28),I=x+(_^w^P)+k[12]+3873151461&4294967295,x=_+(I<<11&4294967295|I>>>21),I=P+(x^_^w)+k[15]+530742520&4294967295,P=x+(I<<16&4294967295|I>>>16),I=w+(P^x^_)+k[2]+3299628645&4294967295,w=P+(I<<23&4294967295|I>>>9),I=_+(P^(w|~x))+k[0]+4096336452&4294967295,_=w+(I<<6&4294967295|I>>>26),I=x+(w^(_|~P))+k[7]+1126891415&4294967295,x=_+(I<<10&4294967295|I>>>22),I=P+(_^(x|~w))+k[14]+2878612391&4294967295,P=x+(I<<15&4294967295|I>>>17),I=w+(x^(P|~_))+k[5]+4237533241&4294967295,w=P+(I<<21&4294967295|I>>>11),I=_+(P^(w|~x))+k[12]+1700485571&4294967295,_=w+(I<<6&4294967295|I>>>26),I=x+(w^(_|~P))+k[3]+2399980690&4294967295,x=_+(I<<10&4294967295|I>>>22),I=P+(_^(x|~w))+k[10]+4293915773&4294967295,P=x+(I<<15&4294967295|I>>>17),I=w+(x^(P|~_))+k[1]+2240044497&4294967295,w=P+(I<<21&4294967295|I>>>11),I=_+(P^(w|~x))+k[8]+1873313359&4294967295,_=w+(I<<6&4294967295|I>>>26),I=x+(w^(_|~P))+k[15]+4264355552&4294967295,x=_+(I<<10&4294967295|I>>>22),I=P+(_^(x|~w))+k[6]+2734768916&4294967295,P=x+(I<<15&4294967295|I>>>17),I=w+(x^(P|~_))+k[13]+1309151649&4294967295,w=P+(I<<21&4294967295|I>>>11),I=_+(P^(w|~x))+k[4]+4149444226&4294967295,_=w+(I<<6&4294967295|I>>>26),I=x+(w^(_|~P))+k[11]+3174756917&4294967295,x=_+(I<<10&4294967295|I>>>22),I=P+(_^(x|~w))+k[2]+718787259&4294967295,P=x+(I<<15&4294967295|I>>>17),I=w+(x^(P|~_))+k[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(P+(I<<21&4294967295|I>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.v=function(E,_){_===void 0&&(_=E.length);const w=_-this.blockSize,k=this.C;let P=this.h,x=0;for(;x<_;){if(P==0)for(;x<=w;)s(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<_;)if(k[P++]=E.charCodeAt(x++),P==this.blockSize){s(this,k),P=0;break}}else for(;x<_;)if(k[P++]=E[x++],P==this.blockSize){s(this,k),P=0;break}}this.h=P,this.o+=_},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;_=this.o*8;for(var w=E.length-8;w<E.length;++w)E[w]=_&255,_/=256;for(this.v(E),E=Array(16),_=0,w=0;w<4;++w)for(let k=0;k<32;k+=8)E[_++]=this.g[w]>>>k&255;return E};function i(E,_){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=_(E)}function o(E,_){this.h=_;const w=[];let k=!0;for(let P=E.length-1;P>=0;P--){const x=E[P]|0;k&&x==_||(w[P]=x,k=!1)}this.g=w}var l={};function u(E){return-128<=E&&E<128?i(E,function(_){return new o([_|0],_<0?-1:0)}):new o([E|0],E<0?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return p;if(E<0)return M(h(-E));const _=[];let w=1;for(let k=0;E>=w;k++)_[k]=E/w|0,w*=4294967296;return new o(_,0)}function m(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,_<2||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return M(m(E.substring(1),_));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(_,8));let k=p;for(let x=0;x<E.length;x+=8){var P=Math.min(8,E.length-x);const I=parseInt(E.substring(x,x+P),_);P<8?(P=h(Math.pow(_,P)),k=k.j(P).add(h(I))):(k=k.j(w),k=k.add(h(I)))}return k}var p=u(0),g=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(V(this))return-M(this).m();let E=0,_=1;for(let w=0;w<this.g.length;w++){const k=this.i(w);E+=(k>=0?k:4294967296+k)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(V(this))return"-"+M(this).toString(E);const _=h(Math.pow(E,6));var w=this;let k="";for(;;){const P=j(w,_).g;w=R(w,P.j(_));let x=((w.g.length>0?w.g[0]:w.h)>>>0).toString(E);if(w=P,D(w))return x+k;for(;x.length<6;)x="0"+x;k=x+k}},t.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function V(E){return E.h==-1}t.l=function(E){return E=R(this,E),V(E)?-1:D(E)?0:1};function M(E){const _=E.g.length,w=[];for(let k=0;k<_;k++)w[k]=~E.g[k];return new o(w,~E.h).add(g)}t.abs=function(){return V(this)?M(this):this},t.add=function(E){const _=Math.max(this.g.length,E.g.length),w=[];let k=0;for(let P=0;P<=_;P++){let x=k+(this.i(P)&65535)+(E.i(P)&65535),I=(x>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);k=I>>>16,x&=65535,I&=65535,w[P]=I<<16|x}return new o(w,w[w.length-1]&-2147483648?-1:0)};function R(E,_){return E.add(M(_))}t.j=function(E){if(D(this)||D(E))return p;if(V(this))return V(E)?M(this).j(M(E)):M(M(this).j(E));if(V(E))return M(this.j(M(E)));if(this.l(A)<0&&E.l(A)<0)return h(this.m()*E.m());const _=this.g.length+E.g.length,w=[];for(var k=0;k<2*_;k++)w[k]=0;for(k=0;k<this.g.length;k++)for(let P=0;P<E.g.length;P++){const x=this.i(k)>>>16,I=this.i(k)&65535,Te=E.i(P)>>>16,Nt=E.i(P)&65535;w[2*k+2*P]+=I*Nt,T(w,2*k+2*P),w[2*k+2*P+1]+=x*Nt,T(w,2*k+2*P+1),w[2*k+2*P+1]+=I*Te,T(w,2*k+2*P+1),w[2*k+2*P+2]+=x*Te,T(w,2*k+2*P+2)}for(E=0;E<_;E++)w[E]=w[2*E+1]<<16|w[2*E];for(E=_;E<2*_;E++)w[E]=0;return new o(w,0)};function T(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function C(E,_){this.g=E,this.h=_}function j(E,_){if(D(_))throw Error("division by zero");if(D(E))return new C(p,p);if(V(E))return _=j(M(E),_),new C(M(_.g),M(_.h));if(V(_))return _=j(E,M(_)),new C(M(_.g),_.h);if(E.g.length>30){if(V(E)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,k=_;k.l(E)<=0;)w=q(w),k=q(k);var P=H(w,1),x=H(k,1);for(k=H(k,2),w=H(w,2);!D(k);){var I=x.add(k);I.l(E)<=0&&(P=P.add(w),x=I),k=H(k,1),w=H(w,1)}return _=R(E,P.j(_)),new C(P,_)}for(P=p;E.l(_)>=0;){for(w=Math.max(1,Math.floor(E.m()/_.m())),k=Math.ceil(Math.log(w)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),x=h(w),I=x.j(_);V(I)||I.l(E)>0;)w-=k,x=h(w),I=x.j(_);D(x)&&(x=g),P=P.add(x),E=R(E,I)}return new C(P,E)}t.B=function(E){return j(this,E).h},t.and=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let k=0;k<_;k++)w[k]=this.i(k)&E.i(k);return new o(w,this.h&E.h)},t.or=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let k=0;k<_;k++)w[k]=this.i(k)|E.i(k);return new o(w,this.h|E.h)},t.xor=function(E){const _=Math.max(this.g.length,E.g.length),w=[];for(let k=0;k<_;k++)w[k]=this.i(k)^E.i(k);return new o(w,this.h^E.h)};function q(E){const _=E.g.length+1,w=[];for(let k=0;k<_;k++)w[k]=E.i(k)<<1|E.i(k-1)>>>31;return new o(w,E.h)}function H(E,_){const w=_>>5;_%=32;const k=E.g.length-w,P=[];for(let x=0;x<k;x++)P[x]=_>0?E.i(x+w)>>>_|E.i(x+w+1)<<32-_:E.i(x+w);return new o(P,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,sI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,Cs=o}).apply(typeof x_<"u"?x_:typeof self<"u"?self:typeof window<"u"?window:{});var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iI,Za,oI,Pc,Ep,aI,lI,uI;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof rc=="object"&&rc];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in d))break e;d=d[b]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(c){var d=[],y;for(y in c)Object.prototype.hasOwnProperty.call(c,y)&&d.push([y,c[y]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,d){return a.call.apply(a.bind,arguments)}function h(a,c,d){return h=u,h.apply(null,arguments)}function m(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,c){function d(){}d.prototype=c.prototype,a.Z=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(y,b,O){for(var G=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)G[oe-2]=arguments[oe];return c.prototype[b].apply(y,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function A(a){const c=a.length;if(c>0){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function D(a,c){for(let y=1;y<arguments.length;y++){const b=arguments[y];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const O=b.length||0;a.length=d+O;for(let G=0;G<O;G++)a[d+G]=b[G]}else a.push(b)}}class V{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function M(a){o.setTimeout(()=>{throw a},0)}function R(){var a=E;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class T{constructor(){this.h=this.g=null}add(c,d){const y=C.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var C=new V(()=>new j,a=>a.reset());class j{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let q,H=!1,E=new T,_=()=>{const a=Promise.resolve(void 0);q=()=>{a.then(w)}};function w(){for(var a;a=R();){try{a.h.call(a.g)}catch(d){M(d)}var c=C;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}H=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function P(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}P.prototype.h=function(){this.defaultPrevented=!0};var x=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,c),o.removeEventListener("test",d,c)}catch{}return a}();function I(a){return/^[\s\xa0]*$/.test(a)}function Te(a,c){P.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}p(Te,P),Te.prototype.init=function(a,c){const d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Te.Z.h.call(this)},Te.prototype.h=function(){Te.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Nt="closure_listenable_"+(Math.random()*1e6|0),Ln=0;function Hs(a,c,d,y,b){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=b,this.key=++Ln,this.da=this.fa=!1}function Q(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function te(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function re(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function Ae(a){const c={};for(const d in a)c[d]=a[d];return c}const Pe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vt(a,c){let d,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(d in y)a[d]=y[d];for(let O=0;O<Pe.length;O++)d=Pe[O],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function zt(a){this.src=a,this.g={},this.h=0}zt.prototype.add=function(a,c,d,y,b){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const G=xt(a,c,y,b);return G>-1?(c=a[G],d||(c.fa=!1)):(c=new Hs(c,this.src,O,!!y,b),c.fa=d,a.push(c)),c};function wt(a,c){const d=c.type;if(d in a.g){var y=a.g[d],b=Array.prototype.indexOf.call(y,c,void 0),O;(O=b>=0)&&Array.prototype.splice.call(y,b,1),O&&(Q(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xt(a,c,d,y){for(let b=0;b<a.length;++b){const O=a[b];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==y)return b}return-1}var Wt="closure_lm_"+(Math.random()*1e6|0),ji={};function Yn(a,c,d,y,b){if(Array.isArray(c)){for(let O=0;O<c.length;O++)Yn(a,c[O],d,y,b);return null}return d=Sn(d),a&&a[Nt]?a.J(c,d,l(y)?!!y.capture:!1,b):fu(a,c,d,!1,y,b)}function fu(a,c,d,y,b,O){if(!c)throw Error("Invalid event type");const G=l(b)?!!b.capture:!!b;let oe=Bi(a);if(oe||(a[Wt]=oe=new zt(a)),d=oe.add(c,d,y,G,O),d.proxy)return d;if(y=pu(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)x||(b=G),b===void 0&&(b=!1),a.addEventListener(c.toString(),y,b);else if(a.attachEvent)a.attachEvent(_r(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function pu(){function a(d){return c.call(a.src,a.listener,d)}const c=Fi;return a}function Ui(a,c,d,y,b){if(Array.isArray(c))for(var O=0;O<c.length;O++)Ui(a,c[O],d,y,b);else y=l(y)?!!y.capture:!!y,d=Sn(d),a&&a[Nt]?(a=a.i,O=String(c).toString(),O in a.g&&(c=a.g[O],d=xt(c,d,y,b),d>-1&&(Q(c[d]),Array.prototype.splice.call(c,d,1),c.length==0&&(delete a.g[O],a.h--)))):a&&(a=Bi(a))&&(c=a.g[c.toString()],a=-1,c&&(a=xt(c,d,y,b)),(d=a>-1?c[a]:null)&&pn(d))}function pn(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Nt])wt(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(_r(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Bi(c))?(wt(d,a),d.h==0&&(d.src=null,c[Wt]=null)):Q(a)}}}function _r(a){return a in ji?ji[a]:ji[a]="on"+a}function Fi(a,c){if(a.da)a=!0;else{c=new Te(c,this);const d=a.listener,y=a.ha||a.src;a.fa&&pn(a),a=d.call(y,c)}return a}function Bi(a){return a=a[Wt],a instanceof zt?a:null}var vr="__closure_events_fn_"+(Math.random()*1e9>>>0);function Sn(a){return typeof a=="function"?a:(a[vr]||(a[vr]=function(c){return a.handleEvent(c)}),a[vr])}function st(){k.call(this),this.i=new zt(this),this.M=this,this.G=null}p(st,k),st.prototype[Nt]=!0,st.prototype.removeEventListener=function(a,c,d,y){Ui(this,a,c,d,y)};function it(a,c){var d,y=a.G;if(y)for(d=[];y;y=y.G)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new P(c,a);else if(c instanceof P)c.target=c.target||a;else{var b=c;c=new P(y,a),vt(c,b)}b=!0;let O,G;if(d)for(G=d.length-1;G>=0;G--)O=c.g=d[G],b=qs(O,y,!0,c)&&b;if(O=c.g=a,b=qs(O,y,!0,c)&&b,b=qs(O,y,!1,c)&&b,d)for(G=0;G<d.length;G++)O=c.g=d[G],b=qs(O,y,!1,c)&&b}st.prototype.N=function(){if(st.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const d=a.g[c];for(let y=0;y<d.length;y++)Q(d[y]);delete a.g[c],a.h--}}this.G=null},st.prototype.J=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},st.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function qs(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let O=0;O<c.length;++O){const G=c[O];if(G&&!G.da&&G.capture==d){const oe=G.listener,He=G.ha||G.src;G.fa&&wt(a.i,G),b=oe.call(He,y)!==!1&&b}}return b&&!y.defaultPrevented}function da(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function fa(a){a.g=da(()=>{a.g=null,a.i&&(a.i=!1,fa(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class bt extends k{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:fa(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xn(a){k.call(this),this.h=a,this.g={}}p(Xn,k);var kn=[];function Et(a){te(a.g,function(c,d){this.g.hasOwnProperty(d)&&pn(c)},a),a.g={}}Xn.prototype.N=function(){Xn.Z.N.call(this),Et(this)},Xn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gs=o.JSON.stringify,zi=o.JSON.parse,Ks=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function pa(){}function Wi(){}var Tt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Qr(){P.call(this,"d")}p(Qr,P);function $i(){P.call(this,"c")}p($i,P);var $t={},ma=null;function Qs(){return ma=ma||new st}$t.Ia="serverreachability";function ae(a){P.call(this,$t.Ia,a)}p(ae,P);function wr(a){const c=Qs();it(c,new ae(c))}$t.STAT_EVENT="statevent";function ga(a,c){P.call(this,$t.STAT_EVENT,a),this.stat=c}p(ga,P);function Qe(a){const c=Qs();it(c,new ga(c,a))}$t.Ja="timingevent";function mu(a,c){P.call(this,$t.Ja,a),this.size=c}p(mu,P);function Yr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function Xr(){this.g=!0}Xr.prototype.ua=function(){this.g=!1};function md(a,c,d,y,b,O){a.info(function(){if(a.g)if(O){var G="",oe=O.split("&");for(let we=0;we<oe.length;we++){var He=oe[we].split("=");if(He.length>1){const Ye=He[0];He=He[1];const Pn=Ye.split("_");G=Pn.length>=2&&Pn[1]=="type"?G+(Ye+"="+He+"&"):G+(Ye+"=redacted&")}}}else G=null;else G=O;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+c+`
`+d+`
`+G})}function ya(a,c,d,y,b,O,G){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+c+`
`+d+`
`+O+" "+G})}function Er(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+_a(a,d)+(y?" "+y:"")})}function gd(a,c){a.info(function(){return"TIMEOUT: "+c})}Xr.prototype.info=function(){};function _a(a,c){if(!a.g)return c;if(!c)return null;try{const O=JSON.parse(c);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var d=O[a];if(!(d.length<2)){var y=d[1];if(Array.isArray(y)&&!(y.length<1)){var b=y[0];if(b!="noop"&&b!="stop"&&b!="close")for(let G=1;G<y.length;G++)y[G]=""}}}}return Gs(O)}catch{return c}}var Ys={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Hi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qi;function Xs(){}p(Xs,pa),Xs.prototype.g=function(){return new XMLHttpRequest},qi=new Xs;function Jr(a){return encodeURIComponent(String(a))}function va(a){var c=1;a=a.split(":");const d=[];for(;c>0&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function $(a,c,d,y){this.j=a,this.i=c,this.l=d,this.S=y||1,this.V=new Xn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new gu}function gu(){this.i=null,this.g="",this.h=!1}var wa={},Ea={};function Gi(a,c,d){a.M=1,a.A=Zs(ft(c)),a.u=d,a.R=!0,pe(a,null)}function pe(a,c){a.F=Date.now(),Jn(a),a.B=ft(a.A);var d=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),wu(d.i,"t",y),a.C=0,d=a.j.L,a.h=new gu,a.g=Vu(a.j,d?c:null,!a.u),a.P>0&&(a.O=new bt(h(a.Y,a,a.g),a.P)),c=a.V,d=a.g,y=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(kn[0]=b.toString()),b=kn);for(let O=0;O<b.length;O++){const G=Yn(d,b[O],y||c.handleEvent,!1,c.h||c);if(!G)break;c.g[G.key]=G}c=a.J?Ae(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),wr(),md(a.i,a.v,a.B,a.l,a.S,a.u)}$.prototype.ba=function(a){a=a.target;const c=this.O;c&&tr(a)==3?c.j():this.Y(a)},$.prototype.Y=function(a){try{if(a==this.g)e:{const oe=tr(this.g),He=this.g.ya(),we=this.g.ca();if(!(oe<3)&&(oe!=3||this.g&&(this.h.h||this.g.la()||si(this.g)))){this.K||oe!=4||He==7||(He==8||we<=0?wr(3):wr(2)),Zr(this);var c=this.g.ca();this.X=c;var d=Ta(this);if(this.o=c==200,ya(this.i,this.v,this.B,this.l,this.S,oe,c),this.o){if(this.U&&!this.L){t:{if(this.g){var y,b=this.g;if((y=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(y)){var O=y;break t}}O=null}if(a=O)Er(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,dt(this,a);else{this.o=!1,this.m=3,Qe(12),$e(this),Ht(this);break e}}if(this.R){a=!0;let Ye;for(;!this.K&&this.C<d.length;)if(Ye=Ki(this,d),Ye==Ea){oe==4&&(this.m=4,Qe(14),a=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==wa){this.m=4,Qe(15),Er(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Er(this.i,this.l,Ye,null),dt(this,Ye);if(yu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),oe!=4||d.length!=0||this.h.h||(this.m=1,Qe(16),a=!1),this.o=this.o&&a,!a)Er(this.i,this.l,d,"[Invalid Chunked Response]"),$e(this),Ht(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Da(G),G.P=!0,Qe(11))}}else Er(this.i,this.l,d,null),dt(this,d);oe==4&&$e(this),this.o&&!this.K&&(oe==4?Nu(this.j,this):(this.o=!1,Jn(this)))}else Na(this.g),c==400&&d.indexOf("Unknown SID")>0?(this.m=3,Qe(12)):(this.m=0,Qe(13)),$e(this),Ht(this)}}}catch{}finally{}};function Ta(a){if(!yu(a))return a.g.la();const c=si(a.g);if(c==="")return"";let d="";const y=c.length,b=tr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return $e(a),Ht(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<y;O++)a.h.h=!0,d+=a.h.i.decode(c[O],{stream:!(b&&O==y-1)});return c.length=0,a.h.g+=d,a.C=0,a.h.g}function yu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ki(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?Ea:(d=Number(c.substring(d,y)),isNaN(d)?wa:(y+=1,y+d>c.length?Ea:(c=c.slice(y,y+d),a.C=y+d,c)))}$.prototype.cancel=function(){this.K=!0,$e(this)};function Jn(a){a.T=Date.now()+a.H,tn(a,a.H)}function tn(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Yr(h(a.aa,a),c)}function Zr(a){a.D&&(o.clearTimeout(a.D),a.D=null)}$.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(gd(this.i,this.B),this.M!=2&&(wr(),Qe(17)),$e(this),this.m=2,Ht(this)):tn(this,this.T-a)};function Ht(a){a.j.I==0||a.K||Nu(a.j,a)}function $e(a){Zr(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Et(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function dt(a,c){try{var d=a.j;if(d.I!=0&&(d.g==a||An(d.h,a))){if(!a.L&&An(d.h,a)&&d.I==3){try{var y=d.Ba.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)to(d),Zi(d);else break e;ba(d),Qe(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Yr(h(d.Va,d),6e3));Ie(d.h)<=1&&d.ta&&(d.ta=void 0)}else kr(d,11)}else if((a.L||d.g==a)&&to(d),!I(c))for(b=d.Ba.g.parse(c),c=0;c<b.length;c++){let we=b[c];const Ye=we[0];if(!(Ye<=d.K))if(d.K=Ye,we=we[1],d.I==2)if(we[0]=="c"){d.M=we[1],d.ba=we[2];const Pn=we[3];Pn!=null&&(d.ka=Pn,d.j.info("VER="+d.ka));const Ar=we[4];Ar!=null&&(d.za=Ar,d.j.info("SVER="+d.za));const nr=we[5];nr!=null&&typeof nr=="number"&&nr>0&&(y=1.5*nr,d.O=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const rr=a.g;if(rr){const oi=rr.g?rr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(oi){var O=y.h;O.g||oi.indexOf("spdy")==-1&&oi.indexOf("quic")==-1&&oi.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(It(O,O.h),O.h=null))}if(y.G){const ro=rr.g?rr.g.getResponseHeader("X-HTTP-Session-Id"):null;ro&&(y.wa=ro,Se(y.J,y.G,ro))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),y=d;var G=a;if(y.na=Du(y,y.L?y.ba:null,y.W),G.L){Tr(y.h,G);var oe=G,He=y.O;He&&(oe.H=He),oe.D&&(Zr(oe),Jn(oe)),y.g=G}else Ru(y);d.i.length>0&&eo(d)}else we[0]!="stop"&&we[0]!="close"||kr(d,7);else d.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?kr(d,7):xa(d):we[0]!="noop"&&d.l&&d.l.qa(we),d.A=0)}}wr(4)}catch{}}var Fe=class{constructor(a,c){this.g=a,this.map=c}};function _u(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Js(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ie(a){return a.h?1:a.g?a.g.size:0}function An(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function It(a,c){a.g?a.g.add(c):a.h=c}function Tr(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}_u.prototype.cancel=function(){if(this.i=ye(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ye(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.G);return c}return A(a.i)}var ke=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qi(a,c){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const y=a[d].indexOf("=");let b,O=null;y>=0?(b=a[d].substring(0,y),O=a[d].substring(y+1)):b=a[d],c(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Be(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof Be?(this.l=a.l,Ir(this,a.j),this.o=a.o,this.g=a.g,nn(this,a.u),this.h=a.h,pt(this,ni(a.i)),this.m=a.m):a&&(c=String(a).match(ke))?(this.l=!1,Ir(this,c[1]||"",!0),this.o=Zn(c[2]||""),this.g=Zn(c[3]||"",!0),nn(this,c[4]),this.h=Zn(c[5]||"",!0),pt(this,c[6]||"",!0),this.m=Zn(c[7]||"")):(this.l=!1,this.i=new Mn(null,this.l))}Be.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(ei(c,vu,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ei(c,vu,!0),"@"),a.push(Jr(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ei(d,d.charAt(0)=="/"?_d:Ia,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ei(d,wd)),a.join("")},Be.prototype.resolve=function(a){const c=ft(this);let d=!!a.j;d?Ir(c,a.j):d=!!a.o,d?c.o=a.o:d=!!a.g,d?c.g=a.g:d=a.u!=null;var y=a.h;if(d)nn(c,a.u);else if(d=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var b=c.h.lastIndexOf("/");b!=-1&&(y=c.h.slice(0,b+1)+y)}if(b=y,b==".."||b==".")y="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){y=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let G=0;G<b.length;){const oe=b[G++];oe=="."?y&&G==b.length&&O.push(""):oe==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&G==b.length&&O.push("")):(O.push(oe),y=!0)}y=O.join("/")}else y=b}return d?c.h=y:d=a.i.toString()!=="",d?pt(c,ni(a.i)):d=!!a.m,d&&(c.m=a.m),c};function ft(a){return new Be(a)}function Ir(a,c,d){a.j=d?Zn(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function nn(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function pt(a,c,d){c instanceof Mn?(a.i=c,Aa(a.i,a.l)):(d||(c=ei(c,vd)),a.i=new Mn(c,a.l))}function Se(a,c,d){a.i.set(c,d)}function Zs(a){return Se(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Zn(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,yd),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function yd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vu=/[#\/\?@]/g,Ia=/[#\?:]/g,_d=/[#\?]/g,vd=/[#\?@]/g,wd=/#/g;function Mn(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&Qi(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Mn.prototype,t.add=function(a,c){jn(this),this.i=null,a=Sr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Sa(a,c){jn(a),c=Sr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ka(a,c){return jn(a),c=Sr(a,c),a.g.has(c)}t.forEach=function(a,c){jn(this),this.g.forEach(function(d,y){d.forEach(function(b){a.call(c,b,y,this)},this)},this)};function ti(a,c){jn(a);let d=[];if(typeof c=="string")ka(a,c)&&(d=d.concat(a.g.get(Sr(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)d=d.concat(a[c]);return d}t.set=function(a,c){return jn(this),this.i=null,a=Sr(this,a),ka(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=ti(this,a),a.length>0?String(a[0]):c):c};function wu(a,c,d){Sa(a,c),d.length>0&&(a.i=null,a.g.set(Sr(a,c),A(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let y=0;y<c.length;y++){var d=c[y];const b=Jr(d);d=ti(this,d);for(let O=0;O<d.length;O++){let G=b;d[O]!==""&&(G+="="+Jr(d[O])),a.push(G)}}return this.i=a.join("&")};function ni(a){const c=new Mn;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function Sr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Aa(a,c){c&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(d,y){const b=y.toLowerCase();y!=b&&(Sa(this,y),wu(this,b,d))},a)),a.j=c}function Pa(a,c){const d=new Xr;if(o.Image){const y=new Image;y.onload=m(Un,d,"TestLoadImage: loaded",!0,c,y),y.onerror=m(Un,d,"TestLoadImage: error",!1,c,y),y.onabort=m(Un,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=m(Un,d,"TestLoadImage: timeout",!1,c,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function Ed(a,c){const d=new Xr,y=new AbortController,b=setTimeout(()=>{y.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(b),O.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),Un(d,"TestPingServer: error",!1,c)})}function Un(a,c,d,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(d)}catch{}}function Td(){this.g=new Ks}function Yi(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Yi,pa),Yi.prototype.g=function(){return new es(this.i,this.h)};function es(a,c){st.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(es,st),t=es.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,De(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ra(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ra(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Xi(this):De(this),this.readyState==3&&Ra(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Xi(this))},t.Na=function(a){this.g&&(this.response=a,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,De(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function De(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Eu(a){let c="";return te(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function ri(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=Eu(d),typeof a=="string"?d!=null&&Jr(d):Se(a,c,d))}function Ve(a){st.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ve,st);var er=/^https?$/i,Tu=["POST","PUT"];t=Ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qi.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){Ca(this,O);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)d.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())d.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Tu,c,void 0)>=0)||y||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of d)this.g.setRequestHeader(O,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){Ca(this,O)}};function Ca(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,Ji(a),mn(a)}function Ji(a){a.A||(a.A=!0,it(a,"complete"),it(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,it(this,"complete"),it(this,"abort"),mn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),Ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},t.Xa=function(){Iu(this)};function Iu(a){if(a.h&&typeof i<"u"){if(a.v&&tr(a)==4)setTimeout(a.Ca.bind(a),0);else if(it(a,"readystatechange"),tr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=O===0){let G=String(a.D).match(ke)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),y=!er.test(G?G.toLowerCase():"")}d=y}if(d)it(a,"complete"),it(a,"success");else{a.o=6;try{var b=tr(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Ji(a)}}finally{mn(a)}}}}function mn(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,c||it(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return tr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),zi(c)}};function si(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Na(a){const c={};a=(a.g&&tr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(I(a[y]))continue;var d=va(a[y]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[b]||[];c[b]=O,O.push(d)}re(c,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Su(a){this.za=0,this.i=[],this.j=new Xr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ts("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ts("baseRetryDelayMs",5e3,a),this.Za=ts("retryDelaySeedMs",1e4,a),this.Ta=ts("forwardChannelMaxRetries",2,a),this.va=ts("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new _u(a&&a.concurrentRequestLimit),this.Ba=new Td,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Su.prototype,t.ka=8,t.I=1,t.connect=function(a,c,d,y){Qe(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.J=Du(this,null,this.W),eo(this)};function xa(a){if(ku(a),a.I==3){var c=a.V++,d=ft(a.J);if(Se(d,"SID",a.M),Se(d,"RID",c),Se(d,"TYPE","terminate"),ii(a,d),c=new $(a,a.j,c),c.M=2,c.A=Zs(ft(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=c.A,d=!0),d||(c.g=Vu(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Jn(c)}bu(a)}function Zi(a){a.g&&(Da(a),a.g.cancel(),a.g=null)}function ku(a){Zi(a),a.v&&(o.clearTimeout(a.v),a.v=null),to(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function eo(a){if(!Js(a.h)&&!a.m){a.m=!0;var c=a.Ea;q||_(),H||(q(),H=!0),E.add(c,a),a.D=0}}function Id(a,c){return Ie(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Yr(h(a.Ea,a,c),xu(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new $(this,this.j,a);let O=this.o;if(this.U&&(O?(O=Ae(O),vt(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,c>4096){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Pu(this,b,c),d=ft(this.J),Se(d,"RID",a),Se(d,"CVER",22),this.G&&Se(d,"X-HTTP-Session-Id",this.G),ii(this,d),O&&(this.R?c="headers="+Jr(Eu(O))+"&"+c:this.u&&ri(d,this.u,O)),It(this.h,b),this.Ra&&Se(d,"TYPE","init"),this.S?(Se(d,"$req",c),Se(d,"SID","null"),b.U=!0,Gi(b,d,null)):Gi(b,d,c),this.I=2}}else this.I==3&&(a?Au(this,a):this.i.length==0||Js(this.h)||Au(this))};function Au(a,c){var d;c?d=c.l:d=a.V++;const y=ft(a.J);Se(y,"SID",a.M),Se(y,"RID",d),Se(y,"AID",a.K),ii(a,y),a.u&&a.o&&ri(y,a.u,a.o),d=new $(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),c&&(a.i=c.G.concat(a.i)),c=Pu(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),It(a.h,d),Gi(d,y,c)}function ii(a,c){a.H&&te(a.H,function(d,y){Se(c,y,d)}),a.l&&te({},function(d,y){Se(c,y,d)})}function Pu(a,c,d){d=Math.min(a.i.length,d);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let oe=-1;for(;;){const He=["count="+d];oe==-1?d>0?(oe=b[0].g,He.push("ofs="+oe)):oe=0:He.push("ofs="+oe);let we=!0;for(let Ye=0;Ye<d;Ye++){var O=b[Ye].g;const Pn=b[Ye].map;if(O-=oe,O<0)oe=Math.max(0,b[Ye].g-100),we=!1;else try{O="req"+O+"_"||"";try{var G=Pn instanceof Map?Pn:Object.entries(Pn);for(const[Ar,nr]of G){let rr=nr;l(nr)&&(rr=Gs(nr)),He.push(O+Ar+"="+encodeURIComponent(rr))}}catch(Ar){throw He.push(O+"type="+encodeURIComponent("_badmap")),Ar}}catch{y&&y(Pn)}}if(we){G=He.join("&");break e}}G=void 0}return a=a.i.splice(0,d),c.G=a,G}function Ru(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;q||_(),H||(q(),H=!0),E.add(c,a),a.A=0}}function ba(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Yr(h(a.Da,a),xu(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Cu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Yr(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qe(10),Zi(this),Cu(this))};function Da(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Cu(a){a.g=new $(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=ft(a.na);Se(c,"RID","rpc"),Se(c,"SID",a.M),Se(c,"AID",a.K),Se(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&Se(c,"TO",a.ia),Se(c,"TYPE","xmlhttp"),ii(a,c),a.u&&a.o&&ri(c,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Zs(ft(c)),d.u=null,d.R=!0,pe(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Zi(this),ba(this),Qe(19))};function to(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Nu(a,c){var d=null;if(a.g==c){to(a),Da(a),a.g=null;var y=2}else if(An(a.h,c))d=c.G,Tr(a.h,c),y=1;else return;if(a.I!=0){if(c.o)if(y==1){d=c.u?c.u.length:0,c=Date.now()-c.F;var b=a.D;y=Qs(),it(y,new mu(y,d)),eo(a)}else Ru(a);else if(b=c.m,b==3||b==0&&c.X>0||!(y==1&&Id(a,c)||y==2&&ba(a)))switch(d&&d.length>0&&(c=a.h,c.i=c.i.concat(d)),b){case 1:kr(a,5);break;case 4:kr(a,10);break;case 3:kr(a,6);break;default:kr(a,2)}}}function xu(a,c){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*c}function kr(a,c){if(a.j.info("Error code "+c),c==2){var d=h(a.bb,a),y=a.Ua;const b=!y;y=new Be(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ir(y,"https"),Zs(y),b?Pa(y.toString(),d):Ed(y.toString(),d)}else Qe(2);a.I=0,a.l&&a.l.pa(c),bu(a),ku(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function bu(a){if(a.I=0,a.ja=[],a.l){const c=ye(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ja,c),D(a.ja,a.i),a.h.i.length=0,A(a.i),a.i.length=0),a.l.oa()}}function Du(a,c,d){var y=d instanceof Be?ft(d):new Be(d);if(y.g!="")c&&(y.g=c+"."+y.g),nn(y,y.u);else{var b=o.location;y=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const O=new Be(null);y&&Ir(O,y),c&&(O.g=c),b&&nn(O,b),d&&(O.h=d),y=O}return d=a.G,c=a.wa,d&&c&&Se(y,d,c),Se(y,"VER",a.ka),ii(a,y),y}function Vu(a,c,d){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new Ve(new Yi({ab:d})):new Ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ou(){}t=Ou.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function no(){}no.prototype.g=function(a,c){return new qt(a,c)};function qt(a,c){st.call(this),this.g=new Su(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!I(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ns(this)}p(qt,st),qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){xa(this.g)},qt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=Gs(a),a=d);c.i.push(new Fe(c.Ya++,a)),c.I==3&&eo(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,qt.Z.N.call(this)};function Lu(a){Qr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}p(Lu,Qr);function Mu(){$i.call(this),this.status=1}p(Mu,$i);function ns(a){this.g=a}p(ns,Ou),ns.prototype.ra=function(){it(this.g,"a")},ns.prototype.qa=function(a){it(this.g,new Lu(a))},ns.prototype.pa=function(a){it(this.g,new Mu)},ns.prototype.oa=function(){it(this.g,"b")},no.prototype.createWebChannel=no.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,uI=function(){return new no},lI=function(){return Qs()},aI=$t,Ep={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ys.NO_ERROR=0,Ys.TIMEOUT=8,Ys.HTTP_ERROR=6,Pc=Ys,Hi.COMPLETE="complete",oI=Hi,Wi.EventType=Tt,Tt.OPEN="a",Tt.CLOSE="b",Tt.ERROR="c",Tt.MESSAGE="d",st.prototype.listen=st.prototype.J,Za=Wi,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,iI=Ve}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});const b_="@firebase/firestore",D_="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oa="12.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Om("@firebase/firestore");function oo(){return Ni.logLevel}function X(t,...e){if(Ni.logLevel<=he.DEBUG){const n=e.map(Gm);Ni.debug(`Firestore (${oa}): ${t}`,...n)}}function zr(t,...e){if(Ni.logLevel<=he.ERROR){const n=e.map(Gm);Ni.error(`Firestore (${oa}): ${t}`,...n)}}function $o(t,...e){if(Ni.logLevel<=he.WARN){const n=e.map(Gm);Ni.warn(`Firestore (${oa}): ${t}`,...n)}}function Gm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,cI(t,r,n)}function cI(t,e,n){let r=`FIRESTORE (${oa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw zr(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||cI(e,s,r)}function ie(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends qr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class eN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tN{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Ns;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ns,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ns)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new hI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new Mt(e)}}class nN{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rN{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nN(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sN{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,at(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new V_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new V_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iN(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function Tp(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return af(s)===af(i)?de(s,i):af(s)?1:-1}return de(t.length,e.length)}const oN=55296,aN=57343;function af(t){const e=t.charCodeAt(0);return e>=oN&&e<=aN}function Ho(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_="__name__";class ar{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ne(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ar?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ar.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return de(e.length,n.length)}static compareSegments(e,n){const r=ar.isNumericId(e),s=ar.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ar.extractNumericId(e).compare(ar.extractNumericId(n)):Tp(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class Re extends ar{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const lN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class At extends ar{construct(e,n,r){return new At(e,n,r)}static isValidIdentifier(e){return lN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),At.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===O_}static keyField(){return new At([O_])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Y(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new Y(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new At(n)}static emptyPath(){return new At([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(Re.fromString(e))}static fromName(e){return new ee(Re.fromString(e).popFirst(5))}static empty(){return new ee(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new Re(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t,e,n){if(!n)throw new Y(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uN(t,e,n,r){if(e===!0&&r===!0)throw new Y(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function L_(t){if(!ee.isDocumentKey(t))throw new Y(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function M_(t){if(ee.isDocumentKey(t))throw new Y(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Yh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne(12329,{type:typeof t})}function wn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yh(t);throw new Y(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function cN(t,e){if(e<=0)throw new Y(U.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){const n={typeString:t};return e&&(n.value=e),n}function iu(t,e){if(!fI(t))throw new Y(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_=-62135596800,U_=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*U_);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<j_)throw new Y(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/U_}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(iu(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-j_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:rt("string",xe._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new xe(0,0))}static max(){return new se(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=-1;function hN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new Vs(s,ee.empty(),e)}function dN(t){return new Vs(t.readTime,t.key,zl)}class Vs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Vs(se.min(),ee.empty(),zl)}static max(){return new Vs(se.max(),ee.empty(),zl)}}function fN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ee.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class mN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==pN)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(s=>s?z.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new z((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(m=>{o[h]=m,++l,l===i&&r(o)},m=>s(m))}})}static doWhile(e,n){return new z((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function gN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function la(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm=-1;function Jh(t){return t==null}function ch(t){return t===0&&1/t==-1/0}function yN(t){return typeof t=="number"&&Number.isInteger(t)&&!ch(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI="";function _N(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=F_(e)),e=vN(t.get(n),e);return F_(e)}function vN(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case pI:n+="";break;default:n+=i}}return n}function F_(t){return t+pI+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||kt.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,kt.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sc(this.root,e,this.comparator,!1)}getReverseIterator(){return new sc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sc(this.root,e,this.comparator,!0)}}class sc{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class kt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??kt.RED,this.left=s??kt.EMPTY,this.right=i??kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new kt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ne(27949);return e+(this.isRed()?0:1)}}kt.EMPTY=null,kt.RED=!0,kt.BLACK=!1;kt.EMPTY=new class{constructor(){this.size=0}get key(){throw ne(57766)}get value(){throw ne(16141)}get color(){throw ne(16727)}get left(){throw ne(29726)}get right(){throw ne(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new kt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new z_(this.data.getIterator())}getIteratorFrom(e){return new z_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class z_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.fields=e,e.sort(At.comparator)}static empty(){return new _n([])}unionWith(e){let n=new ut(At.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _n(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ho(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gI("Invalid base64 string: "+i):i}}(e);return new Ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ct.EMPTY_BYTE_STRING=new Ct("");const wN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Os(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=wN.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ls(t){return typeof t=="string"?Ct.fromBase64String(t):Ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="server_timestamp",_I="__type__",vI="__previous_value__",wI="__local_write_time__";function Ym(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_I])==null?void 0:r.stringValue)===yI}function Zh(t){const e=t.mapValue.fields[vI];return Ym(e)?Zh(e):e}function Wl(t){const e=Os(t.mapValue.fields[wI].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e,n,r,s,i,o,l,u,h,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=m}}const hh="(default)";class $l{constructor(e,n){this.projectId=e,this.database=n||hh}static empty(){return new $l("","")}get isDefaultDatabase(){return this.database===hh}isEqual(e){return e instanceof $l&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="__type__",TN="__max__",ic={mapValue:{}},TI="__vector__",dh="value";function Ms(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ym(t)?4:SN(t)?9007199254740991:IN(t)?10:11:ne(28295,{value:t})}function yr(t,e){if(t===e)return!0;const n=Ms(t);if(n!==Ms(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wl(t).isEqual(Wl(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Os(s.timestampValue),l=Os(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ls(s.bytesValue).isEqual(Ls(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return qe(s.geoPointValue.latitude)===qe(i.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return qe(s.integerValue)===qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=qe(s.doubleValue),l=qe(i.doubleValue);return o===l?ch(o)===ch(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ho(t.arrayValue.values||[],e.arrayValue.values||[],yr);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(B_(o)!==B_(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!yr(o[u],l[u])))return!1;return!0}(t,e);default:return ne(52216,{left:t})}}function Hl(t,e){return(t.values||[]).find(n=>yr(n,e))!==void 0}function qo(t,e){if(t===e)return 0;const n=Ms(t),r=Ms(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=qe(i.integerValue||i.doubleValue),u=qe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return W_(t.timestampValue,e.timestampValue);case 4:return W_(Wl(t),Wl(e));case 5:return Tp(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Ls(i),u=Ls(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const m=de(l[h],u[h]);if(m!==0)return m}return de(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=de(qe(i.latitude),qe(o.latitude));return l!==0?l:de(qe(i.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,A,D,V;const l=i.fields||{},u=o.fields||{},h=(g=l[dh])==null?void 0:g.arrayValue,m=(A=u[dh])==null?void 0:A.arrayValue,p=de(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((V=m==null?void 0:m.values)==null?void 0:V.length)||0);return p!==0?p:$_(h,m)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ic.mapValue&&o===ic.mapValue)return 0;if(i===ic.mapValue)return 1;if(o===ic.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},m=Object.keys(h);u.sort(),m.sort();for(let p=0;p<u.length&&p<m.length;++p){const g=Tp(u[p],m[p]);if(g!==0)return g;const A=qo(l[u[p]],h[m[p]]);if(A!==0)return A}return de(u.length,m.length)}(t.mapValue,e.mapValue);default:throw ne(23264,{he:n})}}function W_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Os(t),r=Os(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function $_(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qo(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function Go(t){return Ip(t)}function Ip(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Os(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ls(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ee.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ip(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ip(n.fields[o])}`;return s+"}"}(t.mapValue):ne(61005,{value:t})}function Rc(t){switch(Ms(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zh(t);return e?16+Rc(e):16;case 5:return 2*t.stringValue.length;case 6:return Ls(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Rc(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ws(r.fields,(i,o)=>{s+=i.length+Rc(o)}),s}(t.mapValue);default:throw ne(13486,{value:t})}}function H_(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sp(t){return!!t&&"integerValue"in t}function Xm(t){return!!t&&"arrayValue"in t}function q_(t){return!!t&&"nullValue"in t}function G_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Cc(t){return!!t&&"mapValue"in t}function IN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[EI])==null?void 0:r.stringValue)===TI}function yl(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yl(t.arrayValue.values[n]);return e}return{...t}}function SN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Cc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yl(n)}setAll(e){let n=At.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=yl(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Cc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Cc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ln(yl(this.value))}}function II(t){const e=[];return Ws(t.fields,(n,r)=>{const s=new At([n]);if(Cc(r)){const i=II(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _n(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ut(e,0,se.min(),se.min(),se.min(),ln.empty(),0)}static newFoundDocument(e,n,r,s){return new Ut(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new Ut(e,2,n,se.min(),se.min(),ln.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,se.min(),se.min(),ln.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){this.position=e,this.inclusive=n}}function K_(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),n.key):r=qo(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Q_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n="asc"){this.field=e,this.dir=n}}function kN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{}class nt extends SI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PN(e,n,r):n==="array-contains"?new NN(e,r):n==="in"?new xN(e,r):n==="not-in"?new bN(e,r):n==="array-contains-any"?new DN(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RN(e,r):new CN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qo(n,this.value)):n!==null&&Ms(this.value)===Ms(n)&&this.matchesComparison(qo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qn extends SI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Qn(e,n)}matches(e){return kI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kI(t){return t.op==="and"}function AI(t){return AN(t)&&kI(t)}function AN(t){for(const e of t.filters)if(e instanceof Qn)return!1;return!0}function kp(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+Go(t.value);if(AI(t))return t.filters.map(e=>kp(e)).join(",");{const e=t.filters.map(n=>kp(n)).join(",");return`${t.op}(${e})`}}function PI(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&yr(r.value,s.value)}(t,e):t instanceof Qn?function(r,s){return s instanceof Qn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&PI(o,s.filters[l]),!0):!1}(t,e):void ne(19439)}function RI(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${Go(n.value)}`}(t):t instanceof Qn?function(n){return n.op.toString()+" {"+n.getFilters().map(RI).join(" ,")+"}"}(t):"Filter"}class PN extends nt{constructor(e,n,r){super(e,n,r),this.key=ee.fromName(r.referenceValue)}matches(e){const n=ee.comparator(e.key,this.key);return this.matchesComparison(n)}}class RN extends nt{constructor(e,n){super(e,"in",n),this.keys=CI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CN extends nt{constructor(e,n){super(e,"not-in",n),this.keys=CI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function CI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ee.fromName(r.referenceValue))}class NN extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xm(n)&&Hl(n.arrayValue,this.value)}}class xN extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Hl(this.value.arrayValue,n)}}class bN extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Hl(this.value.arrayValue,n)}}class DN extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.Te=null}}function Y_(t,e=null,n=[],r=[],s=null,i=null,o=null){return new VN(t,e,n,r,s,i,o)}function Jm(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>kp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Go(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Go(r)).join(",")),e.Te=n}return e.Te}function Zm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!PI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Q_(t.startAt,e.startAt)&&Q_(t.endAt,e.endAt)}function Ap(t){return ee.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function ON(t,e,n,r,s,i,o,l){return new ua(t,e,n,r,s,i,o,l)}function eg(t){return new ua(t)}function X_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NI(t){return t.collectionGroup!==null}function _l(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ut(At.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ql(i,r))}),n.has(At.keyField().canonicalString())||e.Ie.push(new ql(At.keyField(),r))}return e.Ie}function dr(t){const e=ie(t);return e.Ee||(e.Ee=LN(e,_l(t))),e.Ee}function LN(t,e){if(t.limitType==="F")return Y_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ql(s.field,i)});const n=t.endAt?new fh(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fh(t.startAt.position,t.startAt.inclusive):null;return Y_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Pp(t,e){const n=t.filters.concat([e]);return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ph(t,e,n){return new ua(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ed(t,e){return Zm(dr(t),dr(e))&&t.limitType===e.limitType}function xI(t){return`${Jm(dr(t))}|lt:${t.limitType}`}function ao(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>RI(s)).join(", ")}]`),Jh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Go(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Go(s)).join(",")),`Target(${r})`}(dr(t))}; limitType=${t.limitType})`}function td(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ee.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of _l(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=K_(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,_l(r),s)||r.endAt&&!function(o,l,u){const h=K_(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,_l(r),s))}(t,e)}function MN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function bI(t){return(e,n)=>{let r=!1;for(const s of _l(t)){const i=jN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function jN(t,e,n){const r=t.field.isKeyField()?ee.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?qo(u,h):ne(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new Ue(ee.comparator);function Wr(){return UN}const DI=new Ue(ee.comparator);function el(...t){let e=DI;for(const n of t)e=e.insert(n.key,n);return e}function VI(t){let e=DI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _i(){return vl()}function OI(){return vl()}function vl(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const FN=new Ue(ee.comparator),BN=new ut(ee.comparator);function fe(...t){let e=BN;for(const n of t)e=e.add(n);return e}const zN=new ut(de);function WN(){return zN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ch(e)?"-0":e}}function LI(t){return{integerValue:""+t}}function $N(t,e){return yN(e)?LI(e):tg(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this._=void 0}}function HN(t,e,n){return t instanceof Gl?function(s,i){const o={fields:{[_I]:{stringValue:yI},[wI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ym(i)&&(i=Zh(i)),i&&(o.fields[vI]=i),{mapValue:o}}(n,e):t instanceof Ko?jI(t,e):t instanceof Qo?UI(t,e):function(s,i){const o=MI(s,i),l=J_(o)+J_(s.Ae);return Sp(o)&&Sp(s.Ae)?LI(l):tg(s.serializer,l)}(t,e)}function qN(t,e,n){return t instanceof Ko?jI(t,e):t instanceof Qo?UI(t,e):n}function MI(t,e){return t instanceof mh?function(r){return Sp(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Gl extends nd{}class Ko extends nd{constructor(e){super(),this.elements=e}}function jI(t,e){const n=FI(e);for(const r of t.elements)n.some(s=>yr(s,r))||n.push(r);return{arrayValue:{values:n}}}class Qo extends nd{constructor(e){super(),this.elements=e}}function UI(t,e){let n=FI(e);for(const r of t.elements)n=n.filter(s=>!yr(s,r));return{arrayValue:{values:n}}}class mh extends nd{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function J_(t){return qe(t.integerValue||t.doubleValue)}function FI(t){return Xm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.field=e,this.transform=n}}function GN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ko&&s instanceof Ko||r instanceof Qo&&s instanceof Qo?Ho(r.elements,s.elements,yr):r instanceof mh&&s instanceof mh?yr(r.Ae,s.Ae):r instanceof Gl&&s instanceof Gl}(t.transform,e.transform)}class KN{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rd{}function BI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sd(t.key,Jt.none()):new ou(t.key,t.data,Jt.none());{const n=t.data,r=ln.empty();let s=new ut(At.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $s(t.key,r,new _n(s.toArray()),Jt.none())}}function QN(t,e,n){t instanceof ou?function(s,i,o){const l=s.value.clone(),u=ev(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof $s?function(s,i,o){if(!Nc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ev(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(zI(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wl(t,e,n,r){return t instanceof ou?function(i,o,l,u){if(!Nc(i.precondition,o))return l;const h=i.value.clone(),m=tv(i.fieldTransforms,u,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof $s?function(i,o,l,u){if(!Nc(i.precondition,o))return l;const h=tv(i.fieldTransforms,u,o),m=o.data;return m.setAll(zI(i)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return Nc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function YN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=MI(r.transform,s||null);i!=null&&(n===null&&(n=ln.empty()),n.set(r.field,i))}return n||null}function Z_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ho(r,s,(i,o)=>GN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends rd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $s extends rd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ev(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,qN(o,l,n[s]))}return r}function tv(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,HN(i,o,e))}return r}class sd extends rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class XN extends rd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OI();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=BI(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),fe())}isEqual(e){return this.batchId===e.batchId&&Ho(this.mutations,e.mutations,(n,r)=>Z_(n,r))&&Ho(this.baseMutations,e.baseMutations,(n,r)=>Z_(n,r))}}class rg{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return FN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rg(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,me;function tx(t){switch(t){case U.OK:return ne(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return ne(15467,{code:t})}}function WI(t){if(t===void 0)return zr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ze.OK:return U.OK;case Ze.CANCELLED:return U.CANCELLED;case Ze.UNKNOWN:return U.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return U.INTERNAL;case Ze.UNAVAILABLE:return U.UNAVAILABLE;case Ze.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ze.NOT_FOUND:return U.NOT_FOUND;case Ze.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ze.ABORTED:return U.ABORTED;case Ze.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ze.DATA_LOSS:return U.DATA_LOSS;default:return ne(39323,{code:t})}}(me=Ze||(Ze={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx=new Cs([4294967295,4294967295],0);function nv(t){const e=nx().encode(t),n=new sI;return n.update(e),new Uint8Array(n.digest())}function rv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([s,i],0)]}class sg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new tl(`Invalid padding: ${n}`);if(r<0)throw new tl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new tl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new tl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Cs.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Cs.fromNumber(r)));return s.compare(rx)===1&&(s=new Cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=nv(e),[r,s]=rv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sg(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=nv(e),[r,s]=rv(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class tl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,au.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new id(se.min(),s,new Ue(de),Wr(),fe())}}class au{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new au(r,n,fe(),fe(),fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class $I{constructor(e,n){this.targetId=e,this.Ce=n}}class HI{constructor(e,n,r=Ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class sv{constructor(){this.ve=0,this.Fe=iv(),this.Me=Ct.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ne(38017,{changeType:i})}}),new au(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=iv()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class sx{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wr(),this.Je=oc(),this.He=oc(),this.Ye=new Ue(de)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ne(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Ap(i))if(r===0){const o=new ee(i.path);this.et(n,o,Ut.newNoDocument(o,se.min()))}else ve(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Ls(r).toUint8Array()}catch(u){if(u instanceof gI)return $o("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sg(o,s,i)}catch(u){return $o(u instanceof tl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const l=this.ot(o);if(l){if(i.current&&Ap(l.target)){const u=new ee(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Ut.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=fe();this.He.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new id(e,n,this.Ye,this.je,r);return this.je=Wr(),this.Je=oc(),this.He=oc(),this.Ye=new Ue(de),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new sv,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new ut(de),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ut(de),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new sv),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function oc(){return new Ue(ee.comparator)}function iv(){return new Ue(ee.comparator)}const ix={asc:"ASCENDING",desc:"DESCENDING"},ox={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ax={and:"AND",or:"OR"};class lx{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rp(t,e){return t.useProto3Json||Jh(e)?e:{value:e}}function gh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ux(t,e){return gh(t,e.toTimestamp())}function fr(t){return ve(!!t,49232),se.fromTimestamp(function(n){const r=Os(n);return new xe(r.seconds,r.nanos)}(t))}function ig(t,e){return Cp(t,e).canonicalString()}function Cp(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function GI(t){const e=Re.fromString(t);return ve(JI(e),10190,{key:e.toString()}),e}function Np(t,e){return ig(t.databaseId,e.path)}function lf(t,e){const n=GI(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ee(QI(n))}function KI(t,e){return ig(t.databaseId,e)}function cx(t){const e=GI(t);return e.length===4?Re.emptyPath():QI(e)}function xp(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QI(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ov(t,e,n){return{name:Np(t,e),fields:n.value.mapValue.fields}}function hx(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ne(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(ve(m===void 0||typeof m=="string",58123),Ct.fromBase64String(m||"")):(ve(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ct.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const m=h.code===void 0?U.UNKNOWN:WI(h.code);return new Y(m,h.message||"")}(o);n=new HI(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=lf(t,r.document.name),i=fr(r.document.updateTime),o=r.document.createTime?fr(r.document.createTime):se.min(),l=new ln({mapValue:{fields:r.document.fields}}),u=Ut.newFoundDocument(s,i,o,l),h=r.targetIds||[],m=r.removedTargetIds||[];n=new xc(h,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=lf(t,r.document),i=r.readTime?fr(r.readTime):se.min(),o=Ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new xc([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=lf(t,r.document),i=r.removedTargetIds||[];n=new xc([],i,s,null)}else{if(!("filter"in e))return ne(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ex(s,i),l=r.targetId;n=new $I(l,o)}}return n}function dx(t,e){let n;if(e instanceof ou)n={update:ov(t,e.key,e.value)};else if(e instanceof sd)n={delete:Np(t,e.key)};else if(e instanceof $s)n={update:ov(t,e.key,e.data),updateMask:Ex(e.fieldMask)};else{if(!(e instanceof XN))return ne(16599,{Vt:e.type});n={verify:Np(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Gl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof mh)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw ne(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ux(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ne(27497)}(t,e.precondition)),n}function fx(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?fr(s.updateTime):fr(i);return o.isEqual(se.min())&&(o=fr(i)),new KN(o,s.transformResults||[])}(n,e))):[]}function px(t,e){return{documents:[KI(t,e.path)]}}function mx(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=KI(t,s);const i=function(h){if(h.length!==0)return XI(Qn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(m=>function(g){return{field:lo(g.field),direction:_x(g.dir)}}(m))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rp(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function gx(t){let e=cx(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const m=n.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];n.where&&(i=function(p){const g=YI(p);return g instanceof Qn&&AI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(D){return new ql(uo(D.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Jh(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,A=p.values||[];return new fh(A,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,A=p.values||[];return new fh(A,g)}(n.endAt)),ON(e,s,o,i,l,"F",u,h)}function yx(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function YI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=uo(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=uo(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=uo(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=uo(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ne(61313);default:return ne(60726)}}(t):t.fieldFilter!==void 0?function(n){return nt.create(uo(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ne(58110);default:return ne(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qn.create(n.compositeFilter.filters.map(r=>YI(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ne(1026)}}(n.compositeFilter.op))}(t):ne(30097,{filter:t})}function _x(t){return ix[t]}function vx(t){return ox[t]}function wx(t){return ax[t]}function lo(t){return{fieldPath:t.canonicalString()}}function uo(t){return At.fromServerFormat(t.fieldPath)}function XI(t){return t instanceof nt?function(n){if(n.op==="=="){if(G_(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NAN"}};if(q_(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(G_(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NOT_NAN"}};if(q_(n.value))return{unaryFilter:{field:lo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:lo(n.field),op:vx(n.op),value:n.value}}}(t):t instanceof Qn?function(n){const r=n.getFilters().map(s=>XI(s));return r.length===1?r[0]:{compositeFilter:{op:wx(n.op),filters:r}}}(t):ne(54877,{filter:t})}function Ex(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function JI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r,s,i=se.min(),o=se.min(),l=Ct.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new gs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.yt=e}}function Ix(t){const e=gx({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sx{constructor(){this.Cn=new kx}addToCollectionParentIndex(e,n){return this.Cn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Vs.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Vs.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class kx{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ZI=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(ZI,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Yo(0)}static cr(){return new Yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv="LruGarbageCollector",Ax=1048576;function uv([t,e],[n,r]){const s=de(t,n);return s===0?de(e,r):s}class Px{constructor(e){this.Ir=e,this.buffer=new ut(uv),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();uv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Rx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(lv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){la(n)?X(lv,"Ignoring IndexedDB error during garbage collection: ",n):await aa(n)}await this.Vr(3e5)})}}class Cx{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(Xh.ce);const r=new Px(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(av)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),av):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,l,u,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),oo()<=he.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(l-o)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-m}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Nx(t,e){return new Cx(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wl(r.mutation,s,_n.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,fe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=fe()){const s=_i();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=el();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=_i();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,fe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Wr();const o=vl(),l=function(){return vl()}();return n.forEach((u,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof $s)?i=i.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),wl(m.mutation,h,m.mutation.getFieldMask(),xe.now())):o.set(h.key,_n.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,m)=>o.set(h,m)),n.forEach((h,m)=>l.set(h,new bx(m,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=vl();let s=new Ue((o,l)=>o-l),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let m=r.get(u)||_n.empty();m=l.applyToLocalView(h,m),r.set(u,m);const p=(s.get(l.batchId)||fe()).add(u);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,m=u.value,p=OI();m.forEach(g=>{if(!i.has(g)){const A=BI(n.get(g),r.get(g));A!==null&&p.set(g,A),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):NI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):z.resolve(_i());let l=zl,u=i;return o.next(h=>z.forEach(h,(m,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(m)?z.resolve():this.remoteDocumentCache.getEntry(e,m).next(g=>{u=u.insert(m,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,fe())).next(m=>({batchId:l,changes:VI(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ee(n)).next(r=>{let s=el();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=el();return this.indexManager.getCollectionParents(e,i).next(l=>z.forEach(l,u=>{const h=function(p,g){return new ua(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,Ut.newInvalidDocument(m)))});let l=el();return o.forEach((u,h)=>{const m=i.get(u);m!==void 0&&wl(m.mutation,h,_n.empty(),xe.now()),td(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return z.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fr(s.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:Ix(s.bundledQuery),readTime:fr(s.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(){this.overlays=new Ue(ee.comparator),this.qr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_i();return z.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const s=_i(),i=n.length+1,o=new ee(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return z.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,m)=>h-m);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=_i(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const l=_i(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,m)=>l.set(h,m)),!(l.size()>=s)););return z.resolve(l)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ZN(n,r));let i=this.qr.get(n);i===void 0&&(i=fe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(){this.sessionToken=Ct.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.Qr=new ut(mt.$r),this.Ur=new ut(mt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new mt(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new mt(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ee(new Re([])),r=new mt(n,e),s=new mt(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ee(new Re([])),r=new mt(n,e),s=new mt(n,e+1);let i=fe();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new mt(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class mt{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ee.comparator(e.key,n.key)||de(e.Yr,n.Yr)}static Kr(e,n){return de(e.Yr,n.Yr)||ee.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new ut(mt.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new JN(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.Zr=this.Zr.add(new mt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return z.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Qm:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new mt(n,0),s=new mt(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const l=this.Xr(o.Yr);i.push(l)}),z.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(de);return n.forEach(s=>{const i=new mt(s,0),o=new mt(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],l=>{r=r.add(l.Yr)})}),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ee.isDocumentKey(i)||(i=i.child(""));const o=new mt(new ee(i),0);let l=new ut(de);return this.Zr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.Yr)),!0)},o),z.resolve(this.ti(l))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(n.mutations,s=>{const i=new mt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new mt(n,0),s=this.Zr.firstAfterOrEqual(r);return z.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jx{constructor(e){this.ri=e,this.docs=function(){return new Ue(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=Wr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ut.newInvalidDocument(s))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Wr();const o=n.path,l=new ee(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:m}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||fN(dN(m),r)<=0||(s.has(m.key)||td(n,m))&&(i=i.insert(m.key,m.mutableCopy()))}return z.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ne(9500)}ii(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ux(this)}getSize(e){return z.resolve(this.size)}}class Ux extends xx{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(e){this.persistence=e,this.si=new Oi(n=>Jm(n),Zm),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new og,this.targetCount=0,this.ai=Yo.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),z.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new Yo(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Pr(n),z.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),z.waitFor(i).next(()=>s)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),z.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n){this.ui={},this.overlays={},this.ci=new Xh(0),this.li=!1,this.li=!0,this.hi=new Lx,this.referenceDelegate=e(this),this.Pi=new Fx(this),this.indexManager=new Sx,this.remoteDocumentCache=function(s){return new jx(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Tx(n),this.Ii=new Vx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ox,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new Mx(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new Bx(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return z.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class Bx extends mN{constructor(e){super(),this.currentSequenceNumber=e}}class ag{constructor(e){this.persistence=e,this.Ri=new og,this.Vi=null}static mi(e){return new ag(e)}get fi(){if(this.Vi)return this.Vi;throw ne(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,r=>{const s=ee.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,se.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return z.or([()=>z.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class yh{constructor(e,n){this.persistence=e,this.pi=new Oi(r=>_N(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Nx(this,n)}static mi(e,n){return new yh(e,n)}Ei(){}di(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return z.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?z.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(l=>{l||(r++,i.removeEntry(o,se.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),z.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Rc(e.data.value)),n}br(e,n,r){return z.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return z.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new lg(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return QA()?8:gN(Bt())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zx;return this.Ss(e,n,o).next(l=>{if(i.result=l,this.Vs)return this.bs(e,n,o,l.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(oo()<=he.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",ao(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(oo()<=he.DEBUG&&X("QueryEngine","Query:",ao(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(oo()<=he.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",ao(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,dr(n))):z.resolve())}ys(e,n){if(X_(n))return z.resolve(null);let r=dr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=ph(n,null,"F"),r=dr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=fe(...i);return this.ps.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ds(n,l);return this.Cs(n,h,o,u.readTime)?this.ys(e,ph(n,null,"F")):this.vs(e,h,n,u)}))})))}ws(e,n,r,s){return X_(n)||s.isEqual(se.min())?z.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?z.resolve(null):(oo()<=he.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ao(n)),this.vs(e,o,n,hN(s,zl)).next(l=>l))})}Ds(e,n){let r=new ut(bI(e));return n.forEach((s,i)=>{td(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return oo()<=he.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",ao(n)),this.ps.getDocumentsMatchingQuery(e,n,Vs.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug="LocalStore",$x=3e8;class Hx{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new Ue(de),this.xs=new Oi(i=>Jm(i),Zm),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Dx(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function qx(t,e,n,r){return new Hx(t,e,n,r)}async function t0(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=fe();for(const h of s){o.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}for(const h of i){l.push(h.batchId);for(const m of h.mutations)u=u.add(m.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function Gx(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return function(l,u,h,m){const p=h.batch,g=p.keys();let A=z.resolve();return g.forEach(D=>{A=A.next(()=>m.getEntry(u,D)).next(V=>{const M=h.docVersions.get(D);ve(M!==null,48541),V.version.compareTo(M)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),m.addEntry(V)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=fe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function n0(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function Kx(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const l=[];e.targetChanges.forEach((m,p)=>{const g=s.get(p);if(!g)return;l.push(n.Pi.removeMatchingKeys(i,m.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,m.addedDocuments,p)));let A=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?A=A.withResumeToken(Ct.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):m.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(m.resumeToken,r)),s=s.insert(p,A),function(V,M,R){return V.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=$x?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(g,A,m)&&l.push(n.Pi.updateTargetData(i,A))});let u=Wr(),h=fe();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,m))}),l.push(Qx(i,o,e.documentUpdates).next(m=>{u=m.ks,h=m.qs})),!r.isEqual(se.min())){const m=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(m)}return z.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.Ms=s,i))}function Qx(t,e,n){let r=fe(),s=fe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Wr();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(se.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):X(ug,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{ks:o,qs:s}})}function Yx(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xx(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,z.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new gs(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function bp(t,e,n){const r=ie(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!la(o))throw o;X(ug,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function cv(t,e,n){const r=ie(t);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,m){const p=ie(u),g=p.xs.get(m);return g!==void 0?z.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,m)}(r,o,dr(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:se.min(),n?i:fe())).next(l=>(Jx(r,MN(e),l),{documents:l,Qs:i})))}function Jx(t,e,n){let r=t.Os.get(e)||se.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class hv{constructor(){this.activeTargetIds=WN()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zx{constructor(){this.Mo=new hv,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="ConnectivityMonitor";class fv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(dv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(dv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac=null;function Dp(){return ac===null?ac=function(){return 268435456+Math.round(2147483648*Math.random())}():ac++,"0x"+ac.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="RestConnection",tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class nb{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===hh?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=Dp(),l=this.zo(e,n.toUriEncodedString());X(uf,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:h}=new URL(l),m=ta(h);return this.Jo(e,l,u,r,m).then(p=>(X(uf,`Received RPC '${e}' ${o}: `,p),p),p=>{throw $o(uf,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=tb[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot="WebChannelConnection";class sb extends nb{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=Dp();return new Promise((l,u)=>{const h=new iI;h.setWithCredentials(!0),h.listenOnce(oI.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Pc.NO_ERROR:const p=h.getResponseJson();X(Ot,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Pc.TIMEOUT:X(Ot,`RPC '${e}' ${o} timed out`),u(new Y(U.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const g=h.getStatus();if(X(Ot,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const D=A==null?void 0:A.error;if(D&&D.status&&D.message){const V=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(T)>=0?T:U.UNKNOWN}(D.status);u(new Y(V,D.message))}else u(new Y(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new Y(U.UNAVAILABLE,"Connection failed."));break;default:ne(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(Ot,`RPC '${e}' ${o} completed.`)}});const m=JSON.stringify(s);X(Ot,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",m,r,15)})}T_(e,n,r){const s=Dp(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uI(),l=lI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const m=i.join("");X(Ot,`Creating RPC '${e}' stream ${s}: ${m}`,u);const p=o.createWebChannel(m,u);this.I_(p);let g=!1,A=!1;const D=new rb({Yo:M=>{A?X(Ot,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(X(Ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(Ot,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Zo:()=>p.close()}),V=(M,R,T)=>{M.listen(R,C=>{try{T(C)}catch(j){setTimeout(()=>{throw j},0)}})};return V(p,Za.EventType.OPEN,()=>{A||(X(Ot,`RPC '${e}' stream ${s} transport opened.`),D.o_())}),V(p,Za.EventType.CLOSE,()=>{A||(A=!0,X(Ot,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(p))}),V(p,Za.EventType.ERROR,M=>{A||(A=!0,$o(Ot,`RPC '${e}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),D.a_(new Y(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Za.EventType.MESSAGE,M=>{var R;if(!A){const T=M.data[0];ve(!!T,16349);const C=T,j=(C==null?void 0:C.error)||((R=C[0])==null?void 0:R.error);if(j){X(Ot,`RPC '${e}' stream ${s} received error:`,j);const q=j.status;let H=function(w){const k=Ze[w];if(k!==void 0)return WI(k)}(q),E=j.message;H===void 0&&(H=U.INTERNAL,E="Unknown error status: "+q+" with message "+j.message),A=!0,D.a_(new Y(H,E)),p.close()}else X(Ot,`RPC '${e}' stream ${s} received:`,T),D.u_(T)}}),V(l,aI.STAT_EVENT,M=>{M.stat===Ep.PROXY?X(Ot,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Ep.NOPROXY&&X(Ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.__()},0),D}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t){return new lx(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv="PersistentStream";class s0{constructor(e,n,r,s,i,o,l,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new r0(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(zr(n.toString()),zr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(pv,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(pv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ib extends s0{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=hx(this.serializer,e),r=function(i){if(!("targetChange"in i))return se.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?fr(o.readTime):se.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=xp(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ap(u)?{documents:px(i,u)}:{query:mx(i,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=qI(i,o.resumeToken);const h=Rp(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(se.min())>0){l.readTime=gh(i,o.snapshotVersion.toTimestamp());const h=Rp(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=yx(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=xp(this.serializer),n.removeTarget=e,this.q_(n)}}class ob extends s0{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=fx(e.writeResults,e.commitTime),r=fr(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=xp(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>dx(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{}class lb extends ab{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(U.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,Cp(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(U.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Ho(e,Cp(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class ub{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(zr(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RemoteStore";class cb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Li(this)&&(X(xi,"Restarting streams for network reachability change."),await async function(u){const h=ie(u);h.Ea.add(4),await lu(h),h.Ra.set("Unknown"),h.Ea.delete(4),await ad(h)}(this))})}),this.Ra=new ub(r,s)}}async function ad(t){if(Li(t))for(const e of t.da)await e(!0)}async function lu(t){for(const e of t.da)await e(!1)}function i0(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),fg(n)?dg(n):ca(n).O_()&&hg(n,e))}function cg(t,e){const n=ie(t),r=ca(n);n.Ia.delete(e),r.O_()&&o0(n,e),n.Ia.size===0&&(r.O_()?r.L_():Li(n)&&n.Ra.set("Unknown"))}function hg(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ca(t).Y_(e)}function o0(t,e){t.Va.Ue(e),ca(t).Z_(e)}function dg(t){t.Va=new sx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ca(t).start(),t.Ra.ua()}function fg(t){return Li(t)&&!ca(t).x_()&&t.Ia.size>0}function Li(t){return ie(t).Ea.size===0}function a0(t){t.Va=void 0}async function hb(t){t.Ra.set("Online")}async function db(t){t.Ia.forEach((e,n)=>{hg(t,e)})}async function fb(t,e){a0(t),fg(t)?(t.Ra.ha(e),dg(t)):t.Ra.set("Unknown")}async function pb(t,e,n){if(t.Ra.set("Online"),e instanceof HI&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.Ia.delete(l),s.Va.removeTarget(l))}(t,e)}catch(r){X(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _h(t,r)}else if(e instanceof xc?t.Va.Ze(e):e instanceof $I?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await n0(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Va.Tt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ia.get(h);m&&i.Ia.set(h,m.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const m=i.Ia.get(u);if(!m)return;i.Ia.set(u,m.withResumeToken(Ct.EMPTY_BYTE_STRING,m.snapshotVersion)),o0(i,u);const p=new gs(m.target,u,h,m.sequenceNumber);hg(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(xi,"Failed to raise snapshot:",r),await _h(t,r)}}async function _h(t,e,n){if(!la(e))throw e;t.Ea.add(1),await lu(t),t.Ra.set("Offline"),n||(n=()=>n0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(xi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await ad(t)})}function l0(t,e){return e().catch(n=>_h(t,n,e))}async function ld(t){const e=ie(t),n=js(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qm;for(;mb(e);)try{const s=await Yx(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,gb(e,s)}catch(s){await _h(e,s)}u0(e)&&c0(e)}function mb(t){return Li(t)&&t.Ta.length<10}function gb(t,e){t.Ta.push(e);const n=js(t);n.O_()&&n.X_&&n.ea(e.mutations)}function u0(t){return Li(t)&&!js(t).x_()&&t.Ta.length>0}function c0(t){js(t).start()}async function yb(t){js(t).ra()}async function _b(t){const e=js(t);for(const n of t.Ta)e.ea(n.mutations)}async function vb(t,e,n){const r=t.Ta.shift(),s=rg.from(r,e,n);await l0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ld(t)}async function wb(t,e){e&&js(t).X_&&await async function(r,s){if(function(o){return tx(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();js(r).B_(),await l0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ld(r)}}(t,e),u0(t)&&c0(t)}async function mv(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),X(xi,"RemoteStore received new credentials");const r=Li(n);n.Ea.add(3),await lu(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await ad(n)}async function Eb(t,e){const n=ie(t);e?(n.Ea.delete(2),await ad(n)):e||(n.Ea.add(2),await lu(n),n.Ra.set("Unknown"))}function ca(t){return t.ma||(t.ma=function(n,r,s){const i=ie(n);return i.sa(),new ib(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:hb.bind(null,t),t_:db.bind(null,t),r_:fb.bind(null,t),H_:pb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),fg(t)?dg(t):t.Ra.set("Unknown")):(await t.ma.stop(),a0(t))})),t.ma}function js(t){return t.fa||(t.fa=function(n,r,s){const i=ie(n);return i.sa(),new ob(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:yb.bind(null,t),r_:wb.bind(null,t),ta:_b.bind(null,t),na:vb.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await ld(t)):(await t.fa.stop(),t.Ta.length>0&&(X(xi,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pg(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mg(t,e){if(zr("AsyncQueue",`${e}: ${t}`),la(t))return new Y(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ee.comparator(n.key,r.key):(n,r)=>ee.comparator(n.key,r.key),this.keyedMap=el(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Do;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(){this.ga=new Ue(ee.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ne(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xo{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Xo(e,n,Do.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ed(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class Ib{constructor(){this.queries=yv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=yv(),i.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new Y(U.ABORTED,"Firestore shutting down"))}}function yv(){return new Oi(t=>xI(t),ed)}async function h0(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Tb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mg(o,`Initialization of query '${ao(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&gg(n)}async function d0(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Sb(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.Sa)l.Fa(s)&&(r=!0);o.wa=s}}r&&gg(n)}function kb(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function gg(t){t.Ca.forEach(e=>{e.next()})}var Vp,_v;(_v=Vp||(Vp={})).Ma="default",_v.Cache="cache";class f0{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Vp.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.key=e}}class m0{constructor(e){this.key=e}}class Ab{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=fe(),this.mutatedKeys=fe(),this.eu=bI(e),this.tu=new Do(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new gv,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const g=s.get(m),A=td(this.query,p)?p:null,D=!!g&&this.mutatedKeys.has(g.key),V=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;g&&A?g.data.isEqual(A.data)?D!==V&&(r.track({type:3,doc:A}),M=!0):this.su(g,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.eu(A,u)>0||h&&this.eu(A,h)<0)&&(l=!0)):!g&&A?(r.track({type:0,doc:A}),M=!0):g&&!A&&(r.track({type:1,doc:g}),M=!0,(u||h)&&(l=!0)),M&&(A?(o=o.add(A),i=V?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{tu:o,iu:r,Cs:l,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((m,p)=>function(A,D){const V=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne(20277,{Rt:M})}};return V(A)-V(D)}(m.type,p.type)||this.eu(m.doc,p.doc)),this.ou(r),s=s??!1;const l=n&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,h=u!==this.Za;return this.Za=u,o.length!==0||h?{snapshot:new Xo(this.query,e.tu,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new gv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=fe(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new m0(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new p0(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yg="SyncEngine";class Pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Rb{constructor(e){this.key=e,this.hu=!1}}class Cb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Oi(l=>xI(l),ed),this.Iu=new Map,this.Eu=new Set,this.du=new Ue(ee.comparator),this.Au=new Map,this.Ru=new og,this.Vu={},this.mu=new Map,this.fu=Yo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Nb(t,e,n=!0){const r=E0(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await g0(r,e,n,!0),s}async function xb(t,e){const n=E0(t);await g0(n,e,!0,!1)}async function g0(t,e,n,r){const s=await Xx(t.localStore,dr(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await bb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&i0(t.remoteStore,s),l}async function bb(t,e,n,r,s){t.pu=(p,g,A)=>async function(V,M,R,T){let C=M.view.ru(R);C.Cs&&(C=await cv(V.localStore,M.query,!1).then(({documents:E})=>M.view.ru(E,C)));const j=T&&T.targetChanges.get(M.targetId),q=T&&T.targetMismatches.get(M.targetId)!=null,H=M.view.applyChanges(C,V.isPrimaryClient,j,q);return wv(V,M.targetId,H.au),H.snapshot}(t,p,g,A);const i=await cv(t.localStore,e,!0),o=new Ab(e,i.Qs),l=o.ru(i.documents),u=au.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);wv(t,n,h.au);const m=new Pb(e,n,o);return t.Tu.set(e,m),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function Db(t,e,n){const r=ie(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ed(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await bp(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cg(r.remoteStore,s.targetId),Op(r,s.targetId)}).catch(aa)):(Op(r,s.targetId),await bp(r.localStore,s.targetId,!0))}async function Vb(t,e){const n=ie(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cg(n.remoteStore,r.targetId))}async function Ob(t,e,n){const r=zb(t);try{const s=await function(o,l){const u=ie(o),h=xe.now(),m=l.reduce((A,D)=>A.add(D.key),fe());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let D=Wr(),V=fe();return u.Ns.getEntries(A,m).next(M=>{D=M,D.forEach((R,T)=>{T.isValidDocument()||(V=V.add(R))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,D)).next(M=>{p=M;const R=[];for(const T of l){const C=YN(T,p.get(T.key).overlayedDocument);C!=null&&R.push(new $s(T.key,C,II(C.value.mapValue),Jt.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,R,l)}).next(M=>{g=M;const R=M.applyToLocalDocumentSet(p,V);return u.documentOverlayCache.saveOverlays(A,M.batchId,R)})}).then(()=>({batchId:g.batchId,changes:VI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Vu[o.currentUser.toKey()];h||(h=new Ue(de)),h=h.insert(l,u),o.Vu[o.currentUser.toKey()]=h}(r,s.batchId,n),await uu(r,s.changes),await ld(r.remoteStore)}catch(s){const i=mg(s,"Failed to persist write");n.reject(i)}}async function y0(t,e){const n=ie(t);try{const r=await Kx(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ve(o.hu,14607):s.removedDocuments.size>0&&(ve(o.hu,42227),o.hu=!1))}),await uu(n,r,e)}catch(r){await aa(r)}}function vv(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const l=o.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ie(o);u.onlineState=l;let h=!1;u.queries.forEach((m,p)=>{for(const g of p.Sa)g.va(l)&&(h=!0)}),h&&gg(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lb(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Ue(ee.comparator);o=o.insert(i,Ut.newNoDocument(i,se.min()));const l=fe().add(i),u=new id(se.min(),new Map,new Ue(de),o,l);await y0(r,u),r.du=r.du.remove(i),r.Au.delete(e),_g(r)}else await bp(r.localStore,e,!1).then(()=>Op(r,e,n)).catch(aa)}async function Mb(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await Gx(n.localStore,e);v0(n,r,null),_0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await uu(n,s)}catch(s){await aa(s)}}async function jb(t,e,n){const r=ie(t);try{const s=await function(o,l){const u=ie(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(ve(p!==null,37113),m=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,m,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>u.localDocuments.getDocuments(h,m))})}(r.localStore,e);v0(r,e,n),_0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await uu(r,s)}catch(s){await aa(s)}}function _0(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function v0(t,e,n){const r=ie(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Op(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||w0(t,r)})}function w0(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(cg(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),_g(t))}function wv(t,e,n){for(const r of n)r instanceof p0?(t.Ru.addReference(r.key,e),Ub(t,r)):r instanceof m0?(X(yg,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||w0(t,r.key)):ne(19791,{wu:r})}function Ub(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(yg,"New document in limbo: "+n),t.Eu.add(r),_g(t))}function _g(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ee(Re.fromString(e)),r=t.fu.next();t.Au.set(r,new Rb(n)),t.du=t.du.insert(n,r),i0(t.remoteStore,new gs(dr(eg(n.path)),r,"TargetPurposeLimboResolution",Xh.ce))}}async function uu(t,e,n){const r=ie(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{o.push(r.pu(u,e,n).then(h=>{var m;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(m=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){s.push(h);const p=lg.As(u.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,h){const m=ie(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>z.forEach(h,g=>z.forEach(g.Es,A=>m.persistence.referenceDelegate.addReference(p,g.targetId,A)).next(()=>z.forEach(g.ds,A=>m.persistence.referenceDelegate.removeReference(p,g.targetId,A)))))}catch(p){if(!la(p))throw p;X(ug,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const A=m.Ms.get(g),D=A.snapshotVersion,V=A.withLastLimboFreeSnapshotVersion(D);m.Ms=m.Ms.insert(g,V)}}}(r.localStore,i))}async function Fb(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){X(yg,"User change. New user:",e.toKey());const r=await t0(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new Y(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await uu(n,r.Ls)}}function Bb(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const l=n.Tu.get(o);s=s.unionWith(l.view.nu)}return s}}function E0(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=y0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lb.bind(null,e),e.Pu.H_=Sb.bind(null,e.eventManager),e.Pu.yu=kb.bind(null,e.eventManager),e}function zb(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jb.bind(null,e),e}class vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=od(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return qx(this.persistence,new Wx,e.initialUser,this.serializer)}Cu(e){return new e0(ag.mi,this.serializer)}Du(e){return new Zx}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vh.provider={build:()=>new vh};class Wb extends vh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof yh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Rx(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new e0(r=>yh.mi(r,n),this.serializer)}}class Lp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fb.bind(null,this.syncEngine),await Eb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ib}()}createDatastore(e){const n=od(e.databaseInfo.databaseId),r=function(i){return new sb(i)}(e.databaseInfo);return function(i,o,l,u){return new lb(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new cb(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vv(this.syncEngine,n,0),function(){return fv.v()?new fv:new eb}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,m){const p=new Cb(s,i,o,l,u,h);return m&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ie(s);X(xi,"RemoteStore shutting down."),i.Ea.add(5),await lu(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Lp.provider={build:()=>new Lp};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):zr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="FirestoreClient";class $b{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Mt.UNAUTHENTICATED,this.clientId=Km.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(Us,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(Us,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hf(t,e){t.asyncQueue.verifyOperationInProgress(),X(Us,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await t0(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hb(t);X(Us,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>mv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>mv(e.remoteStore,s)),t._onlineComponents=e}async function Hb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(Us,"Using user provided OfflineComponentProvider");try{await hf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;$o("Error using user provided cache. Falling back to memory cache: "+n),await hf(t,new vh)}}else X(Us,"Using default OfflineComponentProvider"),await hf(t,new Wb(void 0));return t._offlineComponents}async function I0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(Us,"Using user provided OnlineComponentProvider"),await Ev(t,t._uninitializedComponentsProvider._online)):(X(Us,"Using default OnlineComponentProvider"),await Ev(t,new Lp))),t._onlineComponents}function qb(t){return I0(t).then(e=>e.syncEngine)}async function Mp(t){const e=await I0(t),n=e.eventManager;return n.onListen=Nb.bind(null,e.syncEngine),n.onUnlisten=Db.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Vb.bind(null,e.syncEngine),n}function Gb(t,e,n={}){const r=new Ns;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const m=new T0({next:g=>{m.Nu(),o.enqueueAndForget(()=>d0(i,p)),g.fromCache&&u.source==="server"?h.reject(new Y(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new f0(l,m,{includeMetadataChanges:!0,qa:!0});return h0(i,p)}(await Mp(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0="firestore.googleapis.com",Iv=!0;class Sv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Y(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=k0,this.ssl=Iv}else this.host=e.host,this.ssl=e.ssl??Iv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ZI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ax)throw new Y(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=S0(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Y(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ud{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Z1;switch(r.type){case"firstParty":return new rN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Tv.get(n);r&&(X("ComponentProvider","Removing Datastore"),Tv.delete(n),r.terminate())}(this),Promise.resolve()}}function Kb(t,e,n,r={}){var h;t=wn(t,ud);const s=ta(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;s&&(aT(`https://${l}`),lT("Firestore",!0)),i.host!==k0&&i.host!==l&&$o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!jr(u,o)&&(t._setSettings(u),r.mockUserToken)){let m,p;if(typeof r.mockUserToken=="string")m=r.mockUserToken,p=Mt.MOCK_USER;else{m=FA(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Mt(g)}t._authCredentials=new eN(new hI(m,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kr(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(iu(n,Ke._jsonSchema))return new Ke(e,r||null,new ee(Re.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:rt("string",Ke._jsonSchemaVersion),referencePath:rt("string")};class xs extends Kr{constructor(e,n,r){super(e,n,eg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new ee(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function rn(t,e,...n){if(t=le(t),dI("collection","path",e),t instanceof ud){const r=Re.fromString(e,...n);return M_(r),new xs(t,null,r)}{if(!(t instanceof Ke||t instanceof xs))throw new Y(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return M_(r),new xs(t.firestore,null,r)}}function Lt(t,e,...n){if(t=le(t),arguments.length===1&&(e=Km.newId()),dI("doc","path",e),t instanceof ud){const r=Re.fromString(e,...n);return L_(r),new Ke(t,null,new ee(r))}{if(!(t instanceof Ke||t instanceof xs))throw new Y(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return L_(r),new Ke(t.firestore,t instanceof xs?t.converter:null,new ee(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="AsyncQueue";class Av{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new r0(this,"async_queue_retry"),this._c=()=>{const r=cf();r&&X(kv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=cf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=cf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ns;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!la(e))throw e;X(kv,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,zr("INTERNAL UNHANDLED ERROR: ",Pv(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=pg.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ne(47125,{Pc:Pv(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Pv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class $r extends ud{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Av,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Av(e),this._firestoreClient=void 0,await e}}}function Qb(t,e){const n=typeof t=="object"?t:dT(),r=typeof t=="string"?t:hh,s=Mm(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jA("firestore");i&&Kb(s,...i)}return s}function cd(t){if(t._terminated)throw new Y(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Yb(t),t._firestoreClient}function Yb(t){var r,s,i;const e=t._freezeSettings(),n=function(l,u,h,m){return new EN(l,u,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,S0(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new $b(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Ct.fromBase64String(e))}catch(n){throw new Y(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nn(Ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(iu(e,Nn._jsonSchema))return Nn.fromBase64String(e.bytes)}}Nn._jsonSchemaVersion="firestore/bytes/1.0",Nn._jsonSchema={type:rt("string",Nn._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:pr._jsonSchemaVersion}}static fromJSON(e){if(iu(e,pr._jsonSchema))return new pr(e.latitude,e.longitude)}}pr._jsonSchemaVersion="firestore/geoPoint/1.0",pr._jsonSchema={type:rt("string",pr._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:mr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(iu(e,mr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new mr(e.vectorValues);throw new Y(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}mr._jsonSchemaVersion="firestore/vectorValue/1.0",mr._jsonSchema={type:rt("string",mr._jsonSchemaVersion),vectorValues:rt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=/^__.*__$/;class Jb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $s(e,this.data,this.fieldMask,n,this.fieldTransforms):new ou(e,this.data,n,this.fieldTransforms)}}class A0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new $s(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function P0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne(40011,{Ac:t})}}class hd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new hd({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return wh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(P0(this.Ac)&&Xb.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Zb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||od(e)}Cc(e,n,r,s=!1){return new hd({Ac:e,methodName:n,Dc:r,path:At.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hu(t){const e=t._freezeSettings(),n=od(t._databaseId);return new Zb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vg(t,e,n,r,s,i={}){const o=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);Ig("Data must be an object, but it was:",o,r);const l=x0(r,o);let u,h;if(i.merge)u=new _n(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const g=jp(e,p,n);if(!o.contains(g))throw new Y(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);D0(m,g)||m.push(g)}u=new _n(m),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new Jb(new ln(l),u,h)}class dd extends ha{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dd}}function R0(t,e,n){return new hd({Ac:3,Dc:e.settings.Dc,methodName:t._methodName,fc:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wg extends ha{_toFieldTransform(e){return new ng(e.path,new Gl)}isEqual(e){return e instanceof wg}}class Eg extends ha{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=R0(this,e,!0),r=this.vc.map(i=>Mi(i,n)),s=new Ko(r);return new ng(e.path,s)}isEqual(e){return e instanceof Eg&&jr(this.vc,e.vc)}}class Tg extends ha{constructor(e,n){super(e),this.vc=n}_toFieldTransform(e){const n=R0(this,e,!0),r=this.vc.map(i=>Mi(i,n)),s=new Qo(r);return new ng(e.path,s)}isEqual(e){return e instanceof Tg&&jr(this.vc,e.vc)}}function C0(t,e,n,r){const s=t.Cc(1,e,n);Ig("Data must be an object, but it was:",s,r);const i=[],o=ln.empty();Ws(r,(u,h)=>{const m=Sg(e,u,n);h=le(h);const p=s.yc(m);if(h instanceof dd)i.push(m);else{const g=Mi(h,p);g!=null&&(i.push(m),o.set(m,g))}});const l=new _n(i);return new A0(o,l,s.fieldTransforms)}function N0(t,e,n,r,s,i){const o=t.Cc(1,e,n),l=[jp(e,r,n)],u=[s];if(i.length%2!=0)throw new Y(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(jp(e,i[g])),u.push(i[g+1]);const h=[],m=ln.empty();for(let g=l.length-1;g>=0;--g)if(!D0(h,l[g])){const A=l[g];let D=u[g];D=le(D);const V=o.yc(A);if(D instanceof dd)h.push(A);else{const M=Mi(D,V);M!=null&&(h.push(A),m.set(A,M))}}const p=new _n(h);return new A0(m,p,o.fieldTransforms)}function eD(t,e,n,r=!1){return Mi(n,t.Cc(r?4:3,e))}function Mi(t,e){if(b0(t=le(t)))return Ig("Unsupported field value:",e,t),x0(t,e);if(t instanceof ha)return function(r,s){if(!P0(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Mi(l,s.wc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return $N(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:gh(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gh(s.serializer,i)}}if(r instanceof pr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nn)return{bytesValue:qI(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ig(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof mr)return function(o,l){return{mapValue:{fields:{[EI]:{stringValue:TI},[dh]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Sc("VectorValues must only contain numeric values.");return tg(l.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Yh(r)}`)}(t,e)}function x0(t,e){const n={};return mI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(t,(r,s)=>{const i=Mi(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function b0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof pr||t instanceof Nn||t instanceof Ke||t instanceof ha||t instanceof mr)}function Ig(t,e,n){if(!b0(n)||!fI(n)){const r=Yh(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function jp(t,e,n){if((e=le(e))instanceof cu)return e._internalPath;if(typeof e=="string")return Sg(t,e);throw wh("Field path arguments must be of type string or ",t,!1,void 0,n)}const tD=new RegExp("[~\\*/\\[\\]]");function Sg(t,e,n){if(e.search(tD)>=0)throw wh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch{throw wh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wh(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Y(U.INVALID_ARGUMENT,l+t+u)}function D0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(fd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nD extends V0{data(){return super.data()}}function fd(t,e){return typeof e=="string"?Sg(t,e):e instanceof cu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O0(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kg{}class Ag extends kg{}function io(t,e,...n){let r=[];e instanceof kg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Pg).length,l=i.filter(u=>u instanceof pd).length;if(o>1||o>0&&l>0)throw new Y(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class pd extends Ag{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pd(e,n,r)}_apply(e){const n=this._parse(e);return L0(e._query,n),new Kr(e.firestore,e.converter,Pp(e._query,n))}_parse(e){const n=hu(e.firestore);return function(i,o,l,u,h,m,p){let g;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new Y(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Nv(p,m);const D=[];for(const V of p)D.push(Cv(u,i,V));g={arrayValue:{values:D}}}else g=Cv(u,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Nv(p,m),g=eD(l,o,p,m==="in"||m==="not-in");return nt.create(h,m,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function df(t,e,n){const r=e,s=fd("where",t);return pd._create(s,r,n)}class Pg extends kg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)L0(o,u),o=Pp(o,u)}(e._query,n),new Kr(e.firestore,e.converter,Pp(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Rg extends Ag{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rg(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ql(i,o)}(e._query,this._field,this._direction);return new Kr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ua(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ff(t,e="asc"){const n=e,r=fd("orderBy",t);return Rg._create(r,n)}class Cg extends Ag{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Cg(e,n,r)}_apply(e){return new Kr(e.firestore,e.converter,ph(e._query,this._limit,this._limitType))}}function lc(t){return cN("limit",t),Cg._create("limit",t,"F")}function Cv(t,e,n){if(typeof(n=le(n))=="string"){if(n==="")throw new Y(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!NI(e)&&n.indexOf("/")!==-1)throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!ee.isDocumentKey(r))throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return H_(t,new ee(r))}if(n instanceof Ke)return H_(t,n._key);throw new Y(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Yh(n)}.`)}function Nv(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L0(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rD{convertValue(e,n="none"){switch(Ms(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ls(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ne(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ws(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[dh].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>qe(o.doubleValue));return new mr(n)}convertGeoPoint(e){return new pr(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wl(e));default:return null}}convertTimestamp(e){const n=Os(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);ve(JI(r),9688,{name:e});const s=new $l(r.get(1),r.get(3)),i=new ee(r.popFirst(5));return s.isEqual(n)||zr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class nl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ei extends V0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(fd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ei._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ei._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ei._jsonSchema={type:rt("string",Ei._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class bc extends Ei{data(e={}){return super.data(e)}}class Ti{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new nl(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bc(this._firestore,this._userDataWriter,r.key,r,new nl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new bc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new bc(s._firestore,s._userDataWriter,l.doc.key,l.doc,new nl(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),m=o.indexOf(l.doc.key)),{type:sD(l.type),doc:u,oldIndex:h,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ti._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Km.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne(61501,{type:t})}}Ti._jsonSchemaVersion="firestore/querySnapshot/1.0",Ti._jsonSchema={type:rt("string",Ti._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};class xg extends rD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function $a(t){t=wn(t,Kr);const e=wn(t.firestore,$r),n=cd(e),r=new xg(e);return O0(t._query),Gb(n,t._query).then(s=>new Ti(e,r,t,s))}function li(t,e,n){t=wn(t,Ke);const r=wn(t.firestore,$r),s=Ng(t.converter,e,n);return du(r,[vg(hu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Jt.none())])}function Ha(t,e,n,...r){t=wn(t,Ke);const s=wn(t.firestore,$r),i=hu(s);let o;return o=typeof(e=le(e))=="string"||e instanceof cu?N0(i,"updateDoc",t._key,e,n,r):C0(i,"updateDoc",t._key,e),du(s,[o.toMutation(t._key,Jt.exists(!0))])}function pf(t){return du(wn(t.firestore,$r),[new sd(t._key,Jt.none())])}function iD(t,e){const n=wn(t.firestore,$r),r=Lt(t),s=Ng(t.converter,e);return du(n,[vg(hu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function ui(t,...e){var u,h,m;t=le(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Rv(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Rv(e[r])){const p=e[r];e[r]=(u=p.next)==null?void 0:u.bind(p),e[r+1]=(h=p.error)==null?void 0:h.bind(p),e[r+2]=(m=p.complete)==null?void 0:m.bind(p)}let i,o,l;if(t instanceof Ke)o=wn(t.firestore,$r),l=eg(t._key.path),i={next:p=>{e[r]&&e[r](oD(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=wn(t,Kr);o=wn(p.firestore,$r),l=p._query;const g=new xg(o);i={next:A=>{e[r]&&e[r](new Ti(o,g,p,A))},error:e[r+1],complete:e[r+2]},O0(t._query)}return function(g,A,D,V){const M=new T0(V),R=new f0(A,M,D);return g.asyncQueue.enqueueAndForget(async()=>h0(await Mp(g),R)),()=>{M.Nu(),g.asyncQueue.enqueueAndForget(async()=>d0(await Mp(g),R))}}(cd(o),l,s,i)}function du(t,e){return function(r,s){const i=new Ns;return r.asyncQueue.enqueueAndForget(async()=>Ob(await qb(r),s,i)),i.promise}(cd(t),e)}function oD(t,e,n){const r=n.docs.get(e._key),s=new xg(t);return new Ei(t,s,e._key,r,new nl(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=hu(e)}set(e,n,r){this._verifyNotCommitted();const s=mf(e,this._firestore),i=Ng(s.converter,n,r),o=vg(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Jt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=mf(e,this._firestore);let o;return o=typeof(n=le(n))=="string"||n instanceof cu?N0(this._dataReader,"WriteBatch.update",i._key,n,r,s):C0(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Jt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=mf(e,this._firestore);return this._mutations=this._mutations.concat(new sd(n._key,Jt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Y(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function mf(t,e){if((t=le(t)).firestore!==e)throw new Y(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Gt(){return new wg("serverTimestamp")}function lD(...t){return new Eg("arrayUnion",t)}function uD(...t){return new Tg("arrayRemove",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){return cd(t=wn(t,$r)),new aD(t,e=>du(t,e))}(function(e,n=!0){(function(s){oa=s})(ra),Wo(new Ri("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new $r(new tN(r.getProvider("auth-internal")),new sN(o,r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $l(h.options.projectId,m)}(o,s),o);return i={useFetchStreams:n,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Ps(b_,D_,e),Ps(b_,D_,"esm2020")})();var cD="firebase",hD="12.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps(cD,hD,"app");const dD={apiKey:"AIzaSyCU2PfQvYzgn9pYXBKQQbjLoc3CaFWce-Y",authDomain:"bigbrotherfantasy-35da2.firebaseapp.com",projectId:"bigbrotherfantasy-35da2",storageBucket:"bigbrotherfantasy-35da2.firebasestorage.app",messagingSenderId:"1041873339714",appId:"1:1041873339714:web:d4fd6328530fbbb98674db"},M0=hT(dD),uc=X1(M0),fD=new ur,_e=Qb(M0),ci=Zl("PushNotifications",{}),pD=async()=>{if(!zo.isNativePlatform())return;let t=await ci.checkPermissions();t.receive!=="granted"&&(t=await ci.requestPermissions()),t.receive==="granted"&&(await ci.register(),ci.addListener("registration",e=>{console.info("Push registration success",e.value)}),ci.addListener("registrationError",e=>{console.error("Push registration error",e)}),ci.addListener("pushNotificationReceived",e=>{console.info("Push notification received",e)}),ci.addListener("pushNotificationActionPerformed",e=>{console.info("Push notification action performed",e)}))},xv=2,is=0,mD="hudsonevers@gmail.com",bg="America/Los_Angeles",gD=300,yD=120,Qt=[{id:"hoh-1",group:"HOH Room",label:"HOH 1"},{id:"hoh-2",group:"HOH Room",label:"HOH 2"},{id:"hoh-3",group:"HOH Room",label:"HOH 3"},{id:"block-1",group:"The Block",label:"Block 1"},{id:"block-2",group:"The Block",label:"Block 2"}],yf=[{id:"hoh",title:"HOH Room",description:"Players you want to see succeed.",slots:Qt.filter(t=>t.group==="HOH Room")},{id:"block",title:"The Block",description:"Players you are praying to fail.",slots:Qt.filter(t=>t.group==="The Block")}],bv=[{id:"alyssa",name:"Alyssa Rivers",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"marcus",name:"Marcus Cole",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"janelle",name:"Janelle Cruz",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"tori",name:"Tori James",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"devon",name:"Devon Lee",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"camila",name:"Camila Ortiz",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"reese",name:"Reese Turner",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null},{id:"carmen",name:"Carmen Voss",photo:"",points:0,isEvicted:!1,evictedWeekIndex:null}],Dv=[{id:"chat",label:"Chat"},{id:"team",label:"My Team"},{id:"boards",label:"Boards"},{id:"admin",label:"Admin"}],_D=()=>Qt.reduce((t,e)=>(t[e.id]="",t),{}),_f=t=>Qt.every(e=>!!t[e.id]),Up=t=>Qt.some(e=>!!(t!=null&&t[e.id])),Vv=(t,e)=>Number.isFinite(e)?Object.keys(t||{}).map(n=>Number(n)).filter(n=>Number.isFinite(n)&&n<=e).filter(n=>Up(t==null?void 0:t[n])).sort((n,r)=>n-r):[],vD=t=>(Array.isArray(t)?t:[]).filter(e=>e&&e.id&&e.name).map(e=>({id:e.id,name:e.name,photo:e.photo||"",points:e.points??0,isEvicted:!!e.isEvicted,evictedWeekIndex:Number.isFinite(e.evictedWeekIndex)?e.evictedWeekIndex:null})),wD=t=>(Array.isArray(t)?t:[]).filter(e=>e&&e.id&&e.photo).map(e=>({id:e.id,photo:e.photo||""})),ED=t=>{if(!t||t<=0||Number.isNaN(t))return"00:00:00";const e=Math.floor(t/1e3),n=Math.floor(e/3600),r=Math.floor(e%3600/60),s=e%60,i=o=>String(o).padStart(2,"0");return`${i(n)}:${i(r)}:${i(s)}`},Ov=t=>`${t>0?"+":""}${t} pts`,j0=(t,e)=>{const r=new Intl.DateTimeFormat("en-US",{timeZone:e,hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).formatToParts(t).reduce((s,i)=>(i.type!=="literal"&&(s[i.type]=i.value),s),{});return{year:r.year,month:r.month,day:r.day,hour:r.hour,minute:r.minute,second:r.second}},TD=(t,e)=>{const n=j0(e,t);return Date.UTC(Number(n.year),Number(n.month)-1,Number(n.day),Number(n.hour),Number(n.minute),Number(n.second))-e.getTime()},Lv=t=>{if(!t)return"TBD";const e=new Date(t);return Number.isNaN(e.getTime())?"TBD":`${e.toLocaleString("en-US",{timeZone:bg,month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})} PT`},ID=t=>{if(!(t!=null&&t.toDate))return"";const e=t.toDate();return new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(e)},SD=t=>{if(!t)return"";const e=new Date(t);if(Number.isNaN(e.getTime()))return"";const n=j0(e,bg);return`${n.year}-${n.month}-${n.day}T${n.hour}:${n.minute}`},kD=t=>{if(!t)return"";const[e,n]=t.split("T");if(!e||!n)return"";const[r,s,i]=e.split("-").map(Number),[o,l]=n.split(":").map(Number);if(!Number.isFinite(r)||!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(o)||!Number.isFinite(l))return"";const u=new Date(Date.UTC(r,s-1,i,o,l,0)),h=TD(bg,u);return new Date(u.getTime()-h).toISOString()},AD=(t=5)=>{const e=new Date;return e.setDate(e.getDate()+2),Array.from({length:t},(n,r)=>{const s=new Date(e);return s.setDate(e.getDate()+r*7),{id:r+1,name:`Week ${r+1}`,deadline:s.toISOString()}})},Mv=t=>typeof crypto<"u"&&crypto.randomUUID?crypto.randomUUID():`${t.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")||"player"}-${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,jv=(t,e)=>Qt.reduce((n,r)=>t[r.id]!==e[r.id]?n+1:n,0),PD=(t,e)=>Qt.every(n=>((t==null?void 0:t[n.id])||"")===((e==null?void 0:e[n.id])||"")),RD=t=>t.trim(),CD=t=>/^[a-z0-9]+$/i.test(t)&&t.length<=20,Uv=t=>t.toLowerCase(),ND=t=>t.trim(),xD=t=>t.length>0&&t.length<=24,vf=t=>t.trim().toLowerCase(),Fv="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",Bv=()=>{let t="";for(let e=0;e<6;e+=1)t+=Fv[Math.floor(Math.random()*Fv.length)];return t},sn=t=>t?t.split(" ").filter(Boolean).slice(0,2).map(e=>e[0].toUpperCase()).join(""):"?",Dg=t=>Number.isFinite(t==null?void 0:t.evictedWeekIndex)?t.evictedWeekIndex:0,wf=(t,e)=>!!(t!=null&&t.isEvicted)&&e>=Dg(t),U0=(t,e)=>!!(t!=null&&t.isEvicted)&&e>Dg(t),bD=[{id:"hohWin",label:"HOH win"},{id:"vetoWin",label:"Veto win"},{id:"evicted",label:"Evicted"},{id:"touchedBlock",label:"Touched block"}],zv=(t={})=>({hohWin:!1,vetoWin:!1,evicted:!1,touchedBlock:!1,...t}),Eh=(t=[])=>[zv(t[0]),zv(t[1])],DD=(t,e)=>{const n=t.touchedBlock||t.evicted;return e==="HOH Room"?(t.hohWin?5:0)+(t.vetoWin?3:0)+(t.evicted?-3:0)+(n?0:2):(t.hohWin?-3:0)+(t.vetoWin?-2:0)+(t.evicted?3:0)+(n?2:0)},VD=(t,e,n,r)=>{var l,u;if(!n)return 0;const s=t[e];if(!s)return 0;const i=Eh((u=(l=s.players)==null?void 0:l[n])==null?void 0:u.rounds);return(s.doubleEviction?i:i.slice(0,1)).reduce((h,m)=>h+DD(m,r),0)},hi=(t,e,n,r)=>!n||U0(n,e)?0:VD(t,e,n.id,r),OD=(t,e,n,r)=>{var h,m;if(!n)return[];const s=t[e];if(!s)return[];const i=Eh((m=(h=s.players)==null?void 0:h[n])==null?void 0:m.rounds),o=s.doubleEviction?i:i.slice(0,1),l={hohWin:0,vetoWin:0,evicted:0,touchedBlock:0,safeWeek:0,touchedCount:0};o.forEach(p=>{const g=p.touchedBlock||p.evicted;if(g&&(l.touchedCount+=1),r==="HOH Room"){p.hohWin&&(l.hohWin+=5),p.vetoWin&&(l.vetoWin+=3),p.evicted&&(l.evicted+=-3),g||(l.safeWeek+=2);return}p.hohWin&&(l.hohWin+=-3),p.vetoWin&&(l.vetoWin+=-2),p.evicted&&(l.evicted+=3),g&&(l.touchedBlock+=2)});const u=[];return l.hohWin&&u.push({label:"HOH win",points:l.hohWin}),l.vetoWin&&u.push({label:"Veto win",points:l.vetoWin}),l.evicted&&u.push({label:"Evicted",points:l.evicted}),r==="HOH Room"?(l.safeWeek&&u.push({label:"Didn't touch block",points:l.safeWeek}),l.touchedCount&&u.push({label:"Touched block",points:0})):l.touchedBlock&&u.push({label:"Touched block",points:l.touchedBlock}),u};function LD(){var oi,ro;const t=B.useMemo(()=>_D(),[]),[e,n]=B.useState("team"),[r,s]=B.useState([]),[i,o]=B.useState([]),[l,u]=B.useState([]),[h,m]=B.useState({}),[p,g]=B.useState(null),[A,D]=B.useState(0),[V,M]=B.useState({}),[R,T]=B.useState({}),[C,j]=B.useState(is),[q,H]=B.useState(""),[E,_]=B.useState(!1),[w,k]=B.useState(""),[P,x]=B.useState(""),[I,Te]=B.useState(""),[Nt,Ln]=B.useState(!1),[Hs,Q]=B.useState(!1),[te,re]=B.useState(null),[Ae,Pe]=B.useState(null),[vt,zt]=B.useState("season"),[wt,xt]=B.useState(0),[Wt,ji]=B.useState("global"),[Yn,fu]=B.useState([]),[pu,Ui]=B.useState(null),[pn,_r]=B.useState(0),[Fi,Bi]=B.useState([]),[vr,Sn]=B.useState(null),[st,it]=B.useState(""),[qs,da]=B.useState(""),[fa,bt]=B.useState(""),[Xn,kn]=B.useState(!1),[Et,Gs]=B.useState("global"),[zi,Ks]=B.useState([]),[pa,Wi]=B.useState(""),[Tt,Qr]=B.useState(null),[$i,$t]=B.useState(""),[ma,Qs]=B.useState(!1),[ae,wr]=B.useState(null),[ga,Qe]=B.useState(!1),[mu,Yr]=B.useState(!0),[Xr,md]=B.useState(!1),[ya,Er]=B.useState(""),[gd,_a]=B.useState(""),[Ys,Hi]=B.useState(""),[qi,Xs]=B.useState(""),[Jr,va]=B.useState(""),[$,gu]=B.useState(null),[wa,Ea]=B.useState(!0),[Gi,pe]=B.useState(""),[Ta,yu]=B.useState(()=>new Date),Ki=B.useRef(!1),Jn=B.useRef(null),tn=B.useMemo(()=>new Map(r.map(v=>[v.id,v])),[r]),Zr=B.useMemo(()=>new Map(Yn.map(v=>[v.id,v])),[Yn]),Ht=pu?Zr.get(pu):null,$e=B.useMemo(()=>!Ht||!Number.isFinite(p)?[]:Vv(Ht.teams,p),[p,Ht]),dt=B.useMemo(()=>{if(!$)return[];const v=$.uid;return Fi.filter(S=>{const N=Array.isArray(S.memberIds)?S.memberIds:[];return S.ownerId===v||N.includes(v)})},[$,Fi]),Fe=B.useMemo(()=>Fi.find(v=>v.id===vr)||null,[Fi,vr]),_u=B.useMemo(()=>Fe?(Array.isArray(Fe.memberIds)?Fe.memberIds:[]).map(S=>Zr.get(S)||{id:S,displayName:"Unknown",avatarUrl:"",photoURL:""}):[],[Zr,Fe]),Js=B.useMemo(()=>{const v=[...r];return v.sort((S,N)=>{const L=Number(S.isEvicted)-Number(N.isEvicted);return L!==0?L:S.name.localeCompare(N.name)}),v},[r]),Ie=($==null?void 0:$.email)===mD,An=B.useMemo(()=>Lt(_e,"season","state"),[]),It=B.useCallback(async v=>{if(!$)return;const S=Lt(_e,"users",$.uid);await li(S,{...v,updatedAt:Gt()},{merge:!0})},[$]),Tr=B.useCallback(async v=>{Ie&&await li(An,{...v,updatedAt:Gt()},{merge:!0})},[Ie,An]);B.useEffect(()=>{pD()},[]),B.useEffect(()=>{const v=DC(uc,S=>{gu(S),Ea(!1)});return()=>v()},[]),B.useEffect(()=>{const v=ui(An,S=>{if(!S.exists()){Yr(!1),u([]),m({}),g(null);return}Yr(!0);const N=S.data()||{};u(Array.isArray(N.weeks)?N.weeks:[]),m(N.weekEvents||{}),g(Number.isFinite(N.currentWeekIndex)?N.currentWeekIndex:null)},()=>{});return()=>v()},[An]),B.useEffect(()=>{const v=rn(_e,"players"),S=io(v,ff("name")),N=ui(S,L=>{const F=L.docs.map(Z=>({id:Z.id,...Z.data()}));s(vD(F)),md(!0)});return()=>N()},[]),B.useEffect(()=>{const v=rn(_e,"avatars"),S=io(v,ff("createdAt")),N=ui(S,L=>{const F=L.docs.map(Z=>({id:Z.id,...Z.data()}));o(wD(F))});return()=>N()},[]),B.useEffect(()=>{if(!$){fu([]);return}const v=rn(_e,"users"),S=ui(v,N=>{const L=N.docs.map(F=>({id:F.id,...F.data()}));fu(L)});return()=>S()},[$]),B.useEffect(()=>{if(!$){Bi([]);return}const v=rn(_e,"leagues"),S=ui(v,N=>{const L=N.docs.map(F=>({id:F.id,...F.data()}));L.sort((F,Z)=>{var Je,Fn;const ce=(Je=F.createdAt)!=null&&Je.toMillis?F.createdAt.toMillis():0,Xe=(Fn=Z.createdAt)!=null&&Fn.toMillis?Z.createdAt.toMillis():0;return ce-Xe}),Bi(L)});return()=>S()},[$]),B.useEffect(()=>{if(!$){wr(null),Qe(!1),M({}),T({}),j(is),_(!1),Ln(!1),x(""),Q(!1),re(null),Ui(null),Sn(null),bt(""),kn(!1),it(""),da(""),Ks([]),Wi(""),$t(""),Qr(null),Gs("global");return}Qe(!1);const v=Lt(_e,"users",$.uid),S=ui(v,N=>{if(!N.exists()&&N.metadata.fromCache)return;if(!N.exists()){const F={displayName:"",displayNameLower:"",email:$.email||"",photoURL:$.photoURL||"",avatarUrl:"",profileComplete:!1,teams:{},transferBank:is,preseasonLocked:!1,hasCommittedTeam:!1,lastSeenWeekIndex:-1,createdAt:Gt(),updatedAt:Gt()};li(v,F,{merge:!0}).catch(()=>{pe("Unable to set up your profile. Please try again.")}),wr({id:$.uid,...F}),Qe(!0),M({}),j(is),_(!1);return}const L=N.data()||{};wr({id:$.uid,...L}),Qe(!N.metadata.fromCache||!!L.displayName),M(L.teams||{}),j(Number.isFinite(L.transferBank)?L.transferBank:is),_(!!L.preseasonLocked)});return()=>S()},[$]),B.useEffect(()=>{if(!$||!ae||!ga){k(""),Te(""),Ki.current=!1;return}if(!ae.displayName){Ki.current||(k(ae.displayName||$.displayName||""),Te(ae.avatarUrl||""),Ki.current=!0);const S=window.setTimeout(()=>{Ln(!0)},gD);return()=>window.clearTimeout(S)}Ki.current=!1},[$,ae,ga]),B.useEffect(()=>{$&&It({email:$.email||"",photoURL:$.photoURL||""}).catch(()=>{pe("Unable to sync your account details.")})},[$,It]),B.useEffect(()=>{!$||!(ae!=null&&ae.displayName)||(ae.displayNameLower||It({displayNameLower:Uv(ae.displayName)}).catch(()=>{pe("Unable to sync your display name.")}),ae.profileComplete||It({profileComplete:!0}).catch(()=>{pe("Unable to sync your profile status.")}))},[$,It,ae]),B.useEffect(()=>{const v=window.setInterval(()=>yu(new Date),1e3);return()=>window.clearInterval(v)},[]),B.useEffect(()=>{const v=S=>{S.target instanceof Element&&(S.target.closest(".player-select")||Pe(null))};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[]),B.useEffect(()=>{if(!$||!Xr)return;const v=new Set(r.map(N=>N.id)),S=N=>Qt.reduce((L,F)=>{const Z=N==null?void 0:N[F.id];return L[F.id]=v.has(Z)?Z:"",L},{});M(N=>{let L=!1;const F={};return Object.entries(N||{}).forEach(([Z,ce])=>{const Xe=S(ce);F[Z]=Xe,Qt.forEach(Je=>{((ce==null?void 0:ce[Je.id])||"")!==Xe[Je.id]&&(L=!0)})}),L?(It({teams:F}).catch(()=>{pe("Unable to sync your team updates.")}),F):N}),T(N=>{let L=!1;const F={};return Object.entries(N||{}).forEach(([Z,ce])=>{const Xe=S(ce);F[Z]=Xe,Qt.forEach(Je=>{((ce==null?void 0:ce[Je.id])||"")!==Xe[Je.id]&&(L=!0)})}),L?F:N})},[$,r,Xr,It]);const ye=p===null?0:p+1,ke=l[ye]||null,Qi=ke?ye:p??0,Be=p===null,ft=B.useMemo(()=>Be||p===null?t:V[p]||t,[p,t,Be,V]),Ir=B.useMemo(()=>Qt.some(v=>!!ft[v.id]),[ft]),nn=B.useMemo(()=>V[ye]||(Ir?ft:t),[ft,t,Ir,ye,V]),pt=B.useMemo(()=>R[ye]||nn,[R,ye,nn]),Se=B.useMemo(()=>Object.keys(V).map(v=>Number(v)).filter(v=>Number.isFinite(v)).sort((v,S)=>v-S),[V]),Zs=Se.length?Se[0]:null,Zn=Be?0:Number.isFinite(Zs)?Zs:ye;B.useEffect(()=>{D(v=>Math.min(Qi,Math.max(Zn,v)))},[Qi,Zn]),B.useEffect(()=>{!Ie&&e==="admin"&&n("team")},[e,Ie]),B.useEffect(()=>{Number.isFinite(p)&&xt(p)},[p]),B.useEffect(()=>{xt(v=>Math.min(v,Math.max(l.length-1,0)))},[l.length]),B.useEffect(()=>{if(!$){Sn(null);return}if(Wt==="leagues"){if(!dt.length){Sn(null);return}dt.some(v=>v.id===vr)||Sn(dt[0].id)}},[$,Wt,dt,vr]),B.useEffect(()=>{bt("")},[Wt]),B.useEffect(()=>{if(Et==="leagues"){if(!dt.length){Qr(null);return}dt.some(v=>v.id===Tt)||Qr(dt[0].id)}},[Et,dt,Tt]),B.useEffect(()=>{$t("")},[Et]),B.useEffect(()=>{if(!$||!ae)return;if(!Number.isFinite(p)){ae.lastSeenWeekIndex!==-1&&It({lastSeenWeekIndex:-1}).catch(()=>{pe("Unable to sync your season status.")});return}const v=Number.isFinite(ae.lastSeenWeekIndex)?ae.lastSeenWeekIndex:-1;if(p>v){const S=p-v,L={transferBank:Math.min(xv,(Number.isFinite(C)?C:is)+S),lastSeenWeekIndex:p};E&&(L.preseasonLocked=!1),It(L).catch(()=>{pe("Unable to sync your season status.")})}},[$,p,E,C,It,ae]),B.useEffect(()=>{if(e!=="chat"){Ks([]);return}if(!$){Ks([]);return}$t("");let v=null;if(Et==="global")v=rn(_e,"globalMessages");else if(Tt)v=rn(_e,"leagues",Tt,"messages");else{Ks([]);return}const S=io(v,ff("createdAt","asc"),lc(yD)),N=ui(S,L=>{const F=L.docs.map(Z=>({id:Z.id,...Z.data()}));Ks(F)},()=>{$t("Unable to load chat messages.")});return()=>N()},[e,$,Et,Tt]),B.useEffect(()=>{if(e==="chat"&&Jn.current){if(!zi.length){Jn.current.scrollTop=0;return}Jn.current.scrollTop=Jn.current.scrollHeight}},[e,zi,Et,Tt]);const ei=Be?"Preseason":`Week ${p+1}`,yd=ke?ED(new Date(ke.deadline).getTime()-Ta.getTime()):"--:--:--",vu=ke?Lv(ke.deadline):"Add a week",Ia=l[A]||null,_d=Ia?Ia.name:`Week ${A+1}`,vd=Ia?`Lineup for ${_d}`:"Add a new week to keep playing.",wd=!!(ae!=null&&ae.hasCommittedTeam),Mn=!!($&&!wd),jn=Be||Mn,Sa=Ir?ft:nn,ka=jn?0:jv(Sa,pt),ti=!PD(nn,pt),wu=$?jn?"Unlimited":Math.max(0,C-ka):"Sign in",ni=$?(ae==null?void 0:ae.displayName)||$.displayName||"Player":"Guest",Sr=!!($&&ae&&!ae.displayName),Aa=$&&((ae==null?void 0:ae.avatarUrl)||$.photoURL)||"",Pa=B.useMemo(()=>dt.find(v=>v.id===Tt)||null,[dt,Tt]),Ed=Et==="global"?"Global chat":Pa?`${Pa.name}`:"League chat",Un=!$||Et==="leagues"&&!Pa,Td=!!Nt,Yi=B.useMemo(()=>ti?Qt.reduce((v,S)=>{const N=nn[S.id]||"",L=pt[S.id]||"";return N===L||v.push({slotId:S.id,slotLabel:S.label,groupId:S.group==="HOH Room"?"hoh":"block",fromId:N,toId:L}),v},[]):[],[pt,ti,tn,nn]),es=!!($&&ke&&ti&&_f(pt)),Ra=B.useMemo(()=>Ie?Dv:Dv.filter(v=>v.id!=="admin"),[Ie]),De=A===ye&&!!ke&&!(!Be&&!!E)&&!!$,Eu=Be||Mn?"Create your team":De?"Pick your team":"Your team",ri=B.useMemo(()=>Be||De?pt:A===p?ft:V[A]||t,[ft,p,A,t,De,Be,pt,V]);B.useEffect(()=>{De||Pe(null)},[De]),B.useEffect(()=>{re(null)},[A]),B.useEffect(()=>{De||Q(!1)},[De]);const Ve=B.useMemo(()=>Qt.reduce((v,S)=>{const N=ri[S.id],L=tn.get(N);return v+hi(h,A,L,S.group)},0),[A,tn,ri,h]),er=B.useCallback((v,S)=>Qt.reduce((N,L)=>{const F=v==null?void 0:v[L.id],Z=tn.get(F);return N+hi(h,S,Z,L.group)},0),[tn,h]),Tu=B.useMemo(()=>Yn.length?Yn.filter(S=>S!=null&&S.hasCommittedTeam?!0:Object.keys((S==null?void 0:S.teams)||{}).length>0).map(S=>{const N=S.teams||{},L=l.reduce((ce,Xe,Je)=>ce+er(N[Je]||t,Je),0),F=er(N[wt]||t,wt),Z=vt==="season"?L:F;return{id:S.id,name:S.displayName||"Player",photoURL:S.avatarUrl||S.photoURL||"",points:Z,seasonTotal:L,weekPoints:F}}).sort((S,N)=>N.points-S.points):[],[t,er,vt,Yn,wt,l]),Ca=B.useMemo(()=>{if(!Fe)return[];const v=Array.isArray(Fe.memberIds)?Fe.memberIds:[];return Yn.filter(L=>v.includes(L.id)).filter(L=>L!=null&&L.hasCommittedTeam?!0:Object.keys((L==null?void 0:L.teams)||{}).length>0).map(L=>{const F=L.teams||{},Z=l.reduce((Je,Fn,sr)=>Je+er(F[sr]||t,sr),0),ce=er(F[wt]||t,wt),Xe=vt==="season"?Z:ce;return{id:L.id,name:L.displayName||"Player",photoURL:L.avatarUrl||L.photoURL||"",points:Xe}}).sort((L,F)=>F.points-L.points)},[t,er,vt,Yn,wt,Fe,l]),Ji=Ht&&((oi=Ht.teams)==null?void 0:oi[pn])||t,Iu=B.useMemo(()=>er(Ji,pn),[er,Ji,pn]),mn=$e.indexOf(pn),tr=$e.length?((ro=l[pn])==null?void 0:ro.name)||`Week ${pn+1}`:"No locked weeks",si=!!($&&Fe&&Fe.ownerId===$.uid);B.useEffect(()=>{if(Ht){if(!$e.length){_r(0);return}$e.includes(pn)||_r($e[$e.length-1])}},[Ht,pn,$e]);const Na=B.useCallback(async()=>{if(!(!ke||!Ie)){H(""),D(ye);try{const v=gf(_e);v.set(An,{currentWeekIndex:ye,updatedAt:Gt()},{merge:!0}),Number.isFinite(p)&&(await $a(rn(_e,"users"))).forEach(N=>{const F=(N.data()||{}).teams||{},Z=F[p],ce=F[ye];Up(Z)&&!Up(ce)&&v.set(Lt(_e,"users",N.id),{teams:{...F,[ye]:Z},updatedAt:Gt()},{merge:!0})}),await v.commit()}catch{pe("Unable to advance the week. Please try again.")}}},[p,Ie,ke,ye,An]);B.useEffect(()=>{if(!ke||!Ie)return;const v=new Date(ke.deadline);Number.isNaN(v.getTime())||Ta>=v&&p!==ye&&Na()},[Na,p,Ie,ke,ye,Ta]);const ts=(v,S)=>{!De||!ke||!$||(H(""),T(N=>{const F={...N[ye]||nn,[v]:S};return!jn&&jv(Sa,F)>C?(H("No transfers left. Undo a move to make another change."),N):{...N,[ye]:F}}))},Su=v=>{ts(v,"")},xa=()=>{H(""),T(v=>{if(!v[ye])return v;const S={...v};return delete S[ye],S})},Zi=()=>{!De||!$||!ke||Q(!0)},ku=async()=>{if(!$||!ke||!es)return;const v={...pt},S={...V,[ye]:v};try{await It({teams:S}),M(S),T(N=>{if(!N[ye])return N;const L={...N};return delete L[ye],L}),Q(!1),H("")}catch{pe("Unable to save your transfers. Please try again.")}},eo=()=>{if(!ke||!_f(pt)||!$)return;const v={...V,[ye]:pt};It({teams:v,hasCommittedTeam:!0,preseasonLocked:!1}).catch(()=>{pe("Unable to save your team.")}),M(v),_(!1),T(N=>{if(!N[ye])return N;const L={...N};return delete L[ye],L})},Id=async()=>{if(!$)return;const v=RD(w);if(!v){x("Enter a nickname to continue.");return}if(!CD(v)){x("Use only letters or numbers (max 20 characters).");return}const S=Uv(v);try{const N=rn(_e,"users"),L=io(N,df("displayNameLower","==",S),lc(1)),F=await $a(L);if(!F.empty&&F.docs[0].id!==$.uid){x("That nickname is already taken.");return}await It({displayName:v,displayNameLower:S,avatarUrl:I||"",profileComplete:!0}),x(""),Ln(!1)}catch{pe("Unable to save your profile.")}},Au=async()=>{pe("");try{if(zo.isNativePlatform()){const v=await Xy.signInWithGoogle(),S=(v==null?void 0:v.credential)||{};if(!S.idToken&&!S.accessToken)throw new Error("Missing Google auth credential.");const N=ur.credential(S.idToken,S.accessToken);await Hh(uc,N);return}await o1(uc,fD)}catch{pe("Google sign-in failed. Please try again.")}},ii=async()=>{pe("");try{zo.isNativePlatform()&&await Xy.signOut(),await VC(uc)}catch{pe("Sign out failed. Please try again.")}},Pu=()=>{$&&(k((ae==null?void 0:ae.displayName)||$.displayName||""),Te((ae==null?void 0:ae.avatarUrl)||""),x(""),Ln(!0))},Ru=async v=>{if(v.preventDefault(),!$||ma)return;const S=pa.trim();if(!S)return;let N=null;if(Et==="global")N=rn(_e,"globalMessages");else if(Tt)N=rn(_e,"leagues",Tt,"messages");else{$t("Select a league to start chatting.");return}Qs(!0);try{await iD(N,{text:S,userId:$.uid,userName:ni,avatarUrl:Aa,createdAt:Gt()}),Wi(""),$t("")}catch{$t("Unable to send message. Please try again.")}finally{Qs(!1)}},ba=async v=>{if(v.preventDefault(),!$)return;bt("");const S=ND(st);if(!xD(S)){bt("League name must be 1-24 characters.");return}kn(!0);try{let N=Bv();for(let F=0;F<3;F+=1){const Z=vf(N);if((await $a(io(rn(_e,"leagues"),df("codeLower","==",Z),lc(1)))).empty)break;N=Bv()}const L=Lt(rn(_e,"leagues"));await li(L,{name:S,code:N,codeLower:vf(N),ownerId:$.uid,ownerName:(ae==null?void 0:ae.displayName)||$.displayName||"Player",memberIds:[$.uid],createdAt:Gt(),updatedAt:Gt()}),it(""),Sn(L.id)}catch{bt("Unable to create the league. Please try again.")}finally{kn(!1)}},Da=async v=>{if(v.preventDefault(),!$)return;bt("");const S=vf(qs);if(!S){bt("Enter a league code.");return}kn(!0);try{const N=await $a(io(rn(_e,"leagues"),df("codeLower","==",S),lc(1)));if(N.empty){bt("League code not found.");return}const L=N.docs[0],F=L.data()||{};if((Array.isArray(F.memberIds)?F.memberIds:[]).includes($.uid)){Sn(L.id),bt("You are already in this league.");return}await Ha(L.ref,{memberIds:lD($.uid),updatedAt:Gt()}),da(""),Sn(L.id)}catch{bt("Unable to join the league. Please try again.")}finally{kn(!1)}},Cu=async v=>{if(!(!Fe||!si||!v)&&v!==Fe.ownerId){bt(""),kn(!0);try{await Ha(Lt(_e,"leagues",Fe.id),{memberIds:uD(v),updatedAt:Gt()})}catch{bt("Unable to remove that member.")}finally{kn(!1)}}},to=async()=>{if(!(!Fe||!si||!window.confirm("Delete this league? Members will lose access to this leaderboard."))){bt(""),kn(!0);try{await pf(Lt(_e,"leagues",Fe.id)),Sn(null)}catch{bt("Unable to delete the league.")}finally{kn(!1)}}},Nu=async()=>{if(!(!Ie||bv.length===0))try{const v=gf(_e);bv.forEach(S=>{const N=Lt(_e,"players",S.id);v.set(N,S)}),await v.commit()}catch{pe("Unable to seed players. Please try again.")}},xu=async()=>{if(Ie)try{await li(An,{weeks:AD(),weekEvents:{},currentWeekIndex:null,updatedAt:Gt()})}catch{pe("Unable to initialize the season.")}},kr=async()=>{if(!(!Ie||!window.confirm("Reset the season to preseason? This clears all user teams, transfers, and weekly events.")))try{const N=(await $a(rn(_e,"users"))).docs.map(F=>({id:F.id})),L=gf(_e);L.set(An,{currentWeekIndex:null,weekEvents:{},updatedAt:Gt()},{merge:!0}),N.forEach(F=>{if(!F.id)return;const Z=Lt(_e,"users",F.id);L.set(Z,{teams:{},transferBank:is,preseasonLocked:!1,hasCommittedTeam:!1,lastSeenWeekIndex:-1,updatedAt:Gt()},{merge:!0})}),await L.commit(),g(null),m({}),D(0),xt(0),H(""),M({}),T({}),j(is),_(!1)}catch{pe("Unable to reset the season.")}},bu=v=>{Ie&&m(S=>{const N=S[v]??{doubleEviction:!1,players:{}},L={...S,[v]:{...N,doubleEviction:!N.doubleEviction}};return Tr({weekEvents:L}).catch(()=>{pe("Unable to update week settings.")}),L})},Du=(v,S,N,L,F)=>{Ie&&m(Z=>{var Fn,sr;const ce=Z[v]??{doubleEviction:!1,players:{}},Xe=Eh((sr=(Fn=ce.players)==null?void 0:Fn[S])==null?void 0:sr.rounds);Xe[N]={...Xe[N],[L]:F};const Je={...Z,[v]:{...ce,players:{...ce.players,[S]:{rounds:Xe}}}};return Tr({weekEvents:Je}).catch(()=>{pe("Unable to update week events.")}),Je})},Vu=v=>{if(!Ie)return;const S=tn.get(v);if(!S)return;const N=Lt(_e,"players",v);if(S.isEvicted){Ha(N,{isEvicted:!1,evictedWeekIndex:null}).catch(()=>{pe("Unable to restore player. Please try again.")});return}Ha(N,{isEvicted:!0,evictedWeekIndex:p??ye}).catch(()=>{pe("Unable to evict player. Please try again.")})},Ou=(v,S)=>{if(!Ie||S==="")return;const N=Number(S);if(!Number.isFinite(N))return;const L=Math.max(l.length,1),F=Math.min(Math.max(Math.trunc(N),1),L);Ha(Lt(_e,"players",v),{evictedWeekIndex:F-1}).catch(()=>{pe("Unable to update eviction week.")})},no=v=>{const S=v.target.files&&v.target.files[0];if(!S){_a(""),Hi("");return}const N=new FileReader;N.onload=()=>{typeof N.result=="string"&&(_a(N.result),Hi(N.result))},N.readAsDataURL(S)},qt=v=>{const S=v.target.files&&v.target.files[0];if(!S){Xs(""),va("");return}const N=new FileReader;N.onload=()=>{typeof N.result=="string"&&(Xs(N.result),va(N.result))},N.readAsDataURL(S)},Lu=v=>{if(v.preventDefault(),!Ie)return;const S=ya.trim();if(!S)return;const N={id:Mv(S),name:S,photo:gd,points:0,isEvicted:!1,evictedWeekIndex:null};li(Lt(_e,"players",N.id),N).catch(()=>{pe("Unable to add player. Please try again.")}),Er(""),_a(""),Hi(""),v.currentTarget.reset()},Mu=v=>{if(v.preventDefault(),!Ie||!qi)return;const S={id:Mv("avatar"),photo:qi,createdAt:Gt()};li(Lt(_e,"avatars",S.id),S).catch(()=>{pe("Unable to add avatar. Please try again.")}),Xs(""),va(""),v.currentTarget.reset()},ns=v=>{Ie&&pf(Lt(_e,"avatars",v)).catch(()=>{pe("Unable to remove avatar. Please try again.")})},a=v=>{Ie&&(pf(Lt(_e,"players",v)).catch(()=>{pe("Unable to remove player. Please try again.")}),m(S=>{const N={};return Object.entries(S).forEach(([L,F])=>{if(!(F!=null&&F.players)){N[L]=F;return}const Z={...F.players};delete Z[v],N[L]={...F,players:Z}}),Tr({weekEvents:N}).catch(()=>{pe("Unable to update week events after removal.")}),N}))},c=(v,S)=>{if(!Ie||!S)return;const N=kD(S);if(!N)return;const L=l.map((F,Z)=>Z===v?{...F,deadline:N}:F);u(L),Tr({weeks:L}).catch(()=>{pe("Unable to update the deadline.")})},d=()=>{if(!Ie)return;const v=l.length,S=l.length?new Date(l[l.length-1].deadline):new Date,N=new Date(S);N.setDate(S.getDate()+7);const L=[...l,{id:v+1,name:`Week ${v+1}`,deadline:N.toISOString()}];u(L),Tr({weeks:L}).catch(()=>{pe("Unable to add the week.")})},y=v=>{if(!Ie||v!==l.length-1)return;const S=l.slice(0,-1),N={...h};delete N[v];const L=p===null?null:Math.min(p,Math.max(S.length-1,0));u(S),m(N),g(L),Tr({weeks:S,weekEvents:N,currentWeekIndex:L}).catch(()=>{pe("Unable to remove the week.")})},b=()=>{D(v=>Math.max(Zn,v-1))},O=()=>{D(v=>Math.min(Qi,v+1))},G=()=>{ke&&D(ye)},oe=v=>{const S=Zr.get(v);if(!S)return;Ui(v);const N=Vv(S.teams,p);if(N.length){_r(N[N.length-1]);return}_r(0)},He=()=>{Ui(null)},we=()=>{mn<=0||_r($e[mn-1])},Ye=()=>{mn===-1||mn>=$e.length-1||_r($e[mn+1])},Pn=(v,S,N)=>{const L=S==null?void 0:S[v.id],F=tn.get(L),Z=wf(F,N),ce=hi(h,N,F,v.group),Xe=ce>0?"positive":ce<0?"negative":"";return f.jsxs("article",{className:`slot-card ${Z?"evicted":""}`,children:[Z&&f.jsx("span",{className:"evicted-badge",title:"Player evicted, won't score future points","aria-label":"Evicted",children:"!"}),f.jsxs("div",{className:"slot-top",children:[f.jsx("span",{className:"slot-tag",children:v.label}),f.jsx("span",{className:"slot-group",children:v.group})]}),f.jsx("div",{className:"slot-avatar",children:F&&F.photo?f.jsx("img",{src:F.photo,alt:F.name}):f.jsx("span",{children:sn(F==null?void 0:F.name)})}),f.jsxs("div",{className:"slot-info",children:[f.jsx("p",{className:"slot-name",children:F?F.name:"Open slot"}),f.jsx("p",{className:`slot-score ${Xe}`,children:ce})]})]},v.id)},Ar=v=>{const S=ri[v.id],N=tn.get(S),L=v.group==="HOH Room"?"hoh":"block",F=wf(N,A),Z=De&&(pt[v.id]||"")!==(nn[v.id]||""),ce=hi(h,A,N,v.group),Xe=ce>0?"positive":ce<0?"negative":"",Je=De?new Set(Qt.filter(ze=>ze.id!==v.id).map(ze=>pt[ze.id]).filter(Boolean)):new Set,Fn=Ae===v.id,sr=()=>{Pe(ze=>ze===v.id?null:v.id)},ju=ze=>{ts(v.id,ze),Pe(null)};return f.jsxs("article",{className:`slot-card ${F?"evicted":""} ${Z?"pending-change":""}`,children:[F&&f.jsx("span",{className:"evicted-badge",title:"Player evicted, won't score future points","aria-label":"Evicted",children:"!"}),f.jsxs("div",{className:"slot-top",children:[f.jsx("span",{className:"slot-tag",children:v.label}),f.jsx("span",{className:"slot-group",children:v.group})]}),f.jsx("button",{type:"button",className:"slot-avatar-button",onClick:()=>{S&&re({playerId:S,groupId:L})},disabled:!S,children:f.jsx("div",{className:"slot-avatar",children:N&&N.photo?f.jsx("img",{src:N.photo,alt:N.name}):f.jsx("span",{children:sn(N==null?void 0:N.name)})})}),f.jsxs("div",{className:"slot-info",children:[f.jsx("p",{className:"slot-name",children:N?N.name:"Open slot"}),!De&&f.jsx("p",{className:`slot-score ${Xe}`,children:ce})]}),De&&f.jsx(f.Fragment,{children:f.jsxs("div",{className:"slot-actions",children:[f.jsxs("div",{className:"player-select",children:[f.jsx("button",{type:"button",className:"ghost change-button",onClick:sr,"aria-expanded":Fn,children:S?"Change":"Select"}),Fn&&f.jsxs("div",{className:"player-select-menu",children:[Js.length===0&&f.jsx("p",{className:"empty-note",children:"No players available."}),Js.map(ze=>{const ai=Je.has(ze.id)||ze.isEvicted;return f.jsxs("button",{type:"button",className:`player-option ${ai?"disabled":""}`,onClick:()=>ju(ze.id),disabled:ai,children:[f.jsx("span",{className:"avatar-small",children:ze.photo?f.jsx("img",{src:ze.photo,alt:ze.name}):f.jsx("span",{children:sn(ze.name)})}),f.jsx("span",{children:ze.name})]},ze.id)})]})]}),f.jsx("button",{type:"button",className:"ghost",onClick:()=>Su(v.id),disabled:!S,children:"Remove"})]})})]},v.id)},nr=()=>f.jsxs("section",{className:"chat-view",children:[f.jsx("header",{className:"page-header",children:f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Big Brother Fantasy"}),f.jsx("h1",{children:"Chat"}),f.jsx("p",{className:"page-subtitle",children:Et==="global"?"Talk with everyone playing the game.":"Chat with players in your private leagues."})]})}),!$&&f.jsx("p",{className:"notice",children:"Sign in to join the conversation."}),f.jsxs("div",{className:"chat-card",children:[f.jsxs("div",{className:"chat-tabs toggle-group",children:[f.jsx("button",{type:"button",className:Et==="global"?"accent":"ghost",onClick:()=>Gs("global"),children:"Global"}),f.jsx("button",{type:"button",className:Et==="leagues"?"accent":"ghost",onClick:()=>Gs("leagues"),children:"Leagues"})]}),Et==="leagues"&&f.jsx("div",{className:"chat-league-list",children:dt.length===0?f.jsx("p",{className:"empty-note",children:"Join a league to unlock league chat."}):f.jsx("div",{className:"league-pills",children:dt.map(v=>f.jsx("button",{type:"button",className:`league-pill ${v.id===Tt?"active":""}`,onClick:()=>Qr(v.id),children:v.name},v.id))})}),f.jsx("div",{className:"chat-header",children:f.jsx("h3",{children:Ed})}),$i&&f.jsx("p",{className:"notice",children:$i}),f.jsx("div",{className:"chat-thread",ref:Jn,children:zi.length===0?f.jsx("p",{className:"empty-note",children:"No messages yet."}):zi.map(v=>{const S=v.userName||"Player",N=v.userId===($==null?void 0:$.uid);return f.jsxs("div",{className:`chat-message ${N?"own":""}`,children:[f.jsx("div",{className:"avatar-small",children:v.avatarUrl?f.jsx("img",{src:v.avatarUrl,alt:S}):f.jsx("span",{children:sn(S)})}),f.jsxs("div",{className:"chat-message-body",children:[f.jsxs("div",{className:"chat-message-header",children:[f.jsx("span",{className:"chat-message-name",children:S}),f.jsx("span",{className:"chat-message-time",children:ID(v.createdAt)})]}),f.jsx("p",{children:v.text})]})]},v.id)})}),f.jsxs("form",{className:"chat-input",onSubmit:Ru,children:[f.jsx("input",{type:"text",placeholder:Et==="global"?"Send a message to everyone":"Send a message to your league",value:pa,onChange:v=>Wi(v.target.value),disabled:Un,maxLength:280}),f.jsx("button",{type:"submit",disabled:Un||ma,children:"Send"})]})]})]}),rr=()=>{const v=Wt==="leagues";return f.jsxs("section",{className:"leaderboard-view",children:[f.jsxs("header",{className:"page-header",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Big Brother Fantasy"}),f.jsx("h1",{children:v?"Private Leagues":"Global Leaderboard"}),f.jsx("p",{className:"page-subtitle",children:v?"Create or join leagues to compete with friends.":"Track season totals or drill into a specific week."})]}),f.jsxs("div",{className:"leaderboard-controls",children:[f.jsxs("div",{className:"toggle-group",children:[f.jsx("button",{type:"button",className:Wt==="global"?"accent":"ghost",onClick:()=>ji("global"),children:"Global"}),f.jsx("button",{type:"button",className:Wt==="leagues"?"accent":"ghost",onClick:()=>ji("leagues"),children:"Private leagues"})]}),f.jsxs("div",{className:"toggle-group",children:[f.jsx("button",{type:"button",className:vt==="season"?"accent":"ghost",onClick:()=>zt("season"),children:"Season total"}),f.jsx("button",{type:"button",className:vt==="week"?"accent":"ghost",onClick:()=>zt("week"),children:"Week view"})]}),vt==="week"&&f.jsx("select",{value:wt,onChange:S=>xt(Number(S.target.value)),disabled:l.length===0,children:l.map((S,N)=>f.jsx("option",{value:N,children:S.name||`Week ${N+1}`},S.id??N))})]})]}),v?f.jsx("div",{className:"leaderboard-card league-card",children:$?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"league-actions",children:[f.jsxs("form",{className:"league-form",onSubmit:ba,children:[f.jsxs("label",{children:["Create a league",f.jsx("input",{type:"text",value:st,onChange:S=>it(S.target.value),placeholder:"League name",maxLength:24})]}),f.jsx("button",{type:"submit",disabled:Xn,children:"Create"})]}),f.jsxs("form",{className:"league-form",onSubmit:Da,children:[f.jsxs("label",{children:["Join with code",f.jsx("input",{type:"text",value:qs,onChange:S=>da(S.target.value),placeholder:"Enter code"})]}),f.jsx("button",{type:"submit",disabled:Xn,children:"Join"})]})]}),fa&&f.jsx("p",{className:"notice",children:fa}),f.jsxs("div",{className:"league-list",children:[f.jsx("p",{className:"helper",children:"Your leagues"}),dt.length===0?f.jsx("p",{className:"empty-note",children:"No leagues yet."}):f.jsx("div",{className:"league-pills",children:dt.map(S=>f.jsx("button",{type:"button",className:`league-pill ${S.id===vr?"active":""}`,onClick:()=>Sn(S.id),children:S.name},S.id))})]}),Fe?f.jsxs("div",{className:"league-detail",children:[f.jsxs("div",{className:"league-detail-header",children:[f.jsxs("div",{children:[f.jsx("h3",{children:Fe.name}),f.jsxs("p",{className:"helper",children:["Code:"," ",Fe.code||(Fe.codeLower||"").toUpperCase()]})]}),si&&f.jsx("button",{type:"button",className:"ghost",onClick:to,disabled:Xn,children:"Delete league"})]}),f.jsx("div",{className:"league-leaderboard",children:Ca.length===0?f.jsx("p",{className:"empty-note",children:"No league data yet."}):f.jsx("ol",{className:"leaderboard-list",children:Ca.map((S,N)=>f.jsx("li",{children:f.jsxs("button",{type:"button",className:"leaderboard-row",onClick:()=>oe(S.id),"aria-label":`View ${S.name}'s team`,children:[f.jsxs("span",{className:"leaderboard-rank",children:["#",N+1]}),f.jsxs("div",{className:"leaderboard-user",children:[f.jsx("div",{className:"avatar-small",children:S.photoURL?f.jsx("img",{src:S.photoURL,alt:S.name}):f.jsx("span",{children:sn(S.name)})}),f.jsxs("div",{children:[f.jsx("p",{className:"player-name",children:S.name}),f.jsx("p",{className:"player-status",children:vt==="season"?"Season total":`Week ${wt+1}`})]})]}),f.jsxs("span",{className:"leaderboard-score",children:[S.points," pts"]})]})},S.id))})}),f.jsxs("div",{className:"league-members",children:[f.jsx("h3",{children:"Members"}),f.jsx("ul",{children:_u.map(S=>{const N=(S==null?void 0:S.displayName)||(S==null?void 0:S.email)||"Player",L=(S==null?void 0:S.avatarUrl)||(S==null?void 0:S.photoURL)||"";return f.jsxs("li",{children:[f.jsxs("div",{className:"leaderboard-user",children:[f.jsx("div",{className:"avatar-small",children:L?f.jsx("img",{src:L,alt:N}):f.jsx("span",{children:sn(N)})}),f.jsx("span",{children:N})]}),si&&S.id!==Fe.ownerId&&f.jsx("button",{type:"button",className:"ghost",onClick:()=>Cu(S.id),disabled:Xn,children:"Kick"})]},S.id)})})]})]}):f.jsx("p",{className:"empty-note",children:"Select a league to view standings."})]}):f.jsx("p",{className:"empty-note",children:"Sign in to create or join a private league."})}):f.jsx("div",{className:"leaderboard-card",children:Tu.length===0?f.jsx("p",{className:"empty-note",children:"No leaderboard data yet."}):f.jsx("ol",{className:"leaderboard-list",children:Tu.map((S,N)=>f.jsx("li",{children:f.jsxs("button",{type:"button",className:"leaderboard-row",onClick:()=>oe(S.id),"aria-label":`View ${S.name}'s team`,children:[f.jsxs("span",{className:"leaderboard-rank",children:["#",N+1]}),f.jsxs("div",{className:"leaderboard-user",children:[f.jsx("div",{className:"avatar-small",children:S.photoURL?f.jsx("img",{src:S.photoURL,alt:S.name}):f.jsx("span",{children:sn(S.name)})}),f.jsxs("div",{children:[f.jsx("p",{className:"player-name",children:S.name}),f.jsx("p",{className:"player-status",children:vt==="season"?"Season total":`Week ${wt+1}`})]})]}),f.jsxs("span",{className:"leaderboard-score",children:[S.points," pts"]})]})},S.id))})})]})};return f.jsxs("div",{className:"app-shell",children:[f.jsxs("main",{className:"app",children:[f.jsx("div",{className:"account-bar",children:f.jsxs("div",{className:"account-card",children:[f.jsxs("div",{className:"account-info",children:[f.jsx("button",{type:"button",className:"avatar-button",onClick:Pu,disabled:!$,children:f.jsx("span",{className:"avatar-small",children:Aa?f.jsx("img",{src:Aa,alt:ni}):f.jsx("span",{children:sn(ni)})})}),f.jsxs("div",{children:[f.jsx("p",{className:"account-name",children:$?ni:"Not signed in"}),f.jsx("p",{className:"account-status",children:$?$.email||"Google account":wa?"Checking session...":"Sign in to join the leaderboard."})]})]}),f.jsx("div",{className:"account-actions",children:$?f.jsx("button",{type:"button",className:"ghost",onClick:ii,children:"Sign out"}):f.jsx("button",{type:"button",onClick:Au,disabled:wa,children:"Sign in with Google"})})]})}),Gi&&f.jsx("p",{className:"notice",children:Gi}),Td&&f.jsx("div",{className:"modal-backdrop",children:f.jsxs("div",{className:"modal profile-modal",role:"dialog","aria-modal":"true",children:[f.jsxs("div",{className:"modal-header",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Player Profile"}),f.jsx("h2",{children:Sr?"Create your profile":"Edit profile"}),f.jsx("p",{className:"page-subtitle",children:"Choose a nickname and a profile photo for the leaderboard."})]}),!Sr&&f.jsx("button",{type:"button",className:"modal-close",onClick:()=>Ln(!1),"aria-label":"Close profile",children:"X"})]}),f.jsxs("div",{className:"modal-body",children:[f.jsxs("label",{children:["Nickname",f.jsx("input",{type:"text",placeholder:"Pick a nickname",maxLength:20,value:w,onChange:v=>{k(v.target.value),x("")}})]}),P&&f.jsx("p",{className:"form-error",children:P}),f.jsxs("div",{className:"avatar-picker",children:[f.jsx("p",{className:"picker-label",children:"Choose a profile photo"}),f.jsxs("div",{className:"avatar-grid",children:[f.jsx("button",{type:"button",className:`avatar-option ${I?"":"selected"}`,onClick:()=>Te(""),children:f.jsx("span",{children:"No photo"})}),i.map(v=>f.jsx("button",{type:"button",className:`avatar-option ${I===v.photo?"selected":""}`,onClick:()=>Te(v.photo),children:f.jsx("img",{src:v.photo,alt:"Avatar option"})},v.id)),i.length===0&&f.jsx("p",{className:"empty-note",children:"No avatar options yet."})]})]})]}),f.jsx("div",{className:"modal-actions",children:f.jsx("button",{type:"button",onClick:Id,children:"Save profile"})})]})}),Hs&&f.jsx("div",{className:"modal-backdrop",children:f.jsxs("div",{className:"modal confirm-modal",role:"dialog","aria-modal":"true",children:[f.jsxs("div",{className:"modal-header",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Confirm transfers"}),f.jsx("h2",{children:"Save changes"}),f.jsx("p",{className:"page-subtitle",children:"Review the updates before locking next week's team."})]}),f.jsx("button",{type:"button",className:"modal-close",onClick:()=>Q(!1),"aria-label":"Close transfer summary",children:"X"})]}),f.jsxs("div",{className:"modal-body",children:[Yi.length===0?f.jsx("p",{className:"empty-note",children:"No changes to save yet."}):f.jsx("div",{className:"transfer-groups",children:yf.map(v=>{const S=Yi.filter(N=>N.groupId===v.id);return f.jsxs("div",{className:"transfer-group",children:[f.jsxs("div",{className:"transfer-group-header",children:[f.jsx("h3",{children:v.title}),f.jsxs("span",{children:[S.length," change",S.length===1?"":"s"]})]}),S.length===0?f.jsx("p",{className:"empty-note",children:"No transfers made."}):f.jsx("div",{className:"transfer-cards",children:S.map(N=>{const L=N.fromId?tn.get(N.fromId):null,F=N.toId?tn.get(N.toId):null,Z=(L==null?void 0:L.name)||"Open slot",ce=(F==null?void 0:F.name)||"Open slot";return f.jsxs("div",{className:"transfer-card",children:[f.jsx("span",{className:"transfer-slot",children:N.slotLabel}),f.jsxs("div",{className:"transfer-swap",children:[f.jsxs("div",{className:"transfer-player",children:[f.jsx("div",{className:"avatar-small",children:L!=null&&L.photo?f.jsx("img",{src:L.photo,alt:Z}):f.jsx("span",{children:sn(Z)})}),f.jsx("span",{children:Z})]}),f.jsx("span",{className:"transfer-arrow","aria-hidden":"true",children:f.jsx("svg",{viewBox:"0 0 24 12",role:"presentation","aria-hidden":"true",children:f.jsx("path",{d:"M1 6H21M21 6L17 2M21 6L17 10",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})}),f.jsxs("div",{className:"transfer-player",children:[f.jsx("div",{className:"avatar-small",children:F!=null&&F.photo?f.jsx("img",{src:F.photo,alt:ce}):f.jsx("span",{children:sn(ce)})}),f.jsx("span",{children:ce})]})]})]},N.slotId)})})]},v.id)})}),f.jsxs("p",{className:"helper",children:["Transfers used: ",ka," / ",C]})]}),f.jsxs("div",{className:"modal-actions",children:[f.jsx("button",{type:"button",className:"ghost",onClick:()=>Q(!1),children:"Cancel"}),f.jsx("button",{type:"button",onClick:ku,disabled:!es,children:"Confirm save"})]})]})}),Ht&&f.jsx("div",{className:"modal-backdrop",children:f.jsxs("div",{className:"modal leaderboard-modal",role:"dialog","aria-modal":"true",children:[f.jsxs("div",{className:"modal-header",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Team View"}),f.jsxs("h2",{children:[Ht.displayName||"Player","'s lineup"]}),f.jsx("p",{className:"page-subtitle",children:"Locked weeks only."})]}),f.jsx("button",{type:"button",className:"modal-close",onClick:He,"aria-label":"Close team view",children:"X"})]}),f.jsxs("div",{className:"modal-body",children:[f.jsxs("div",{className:"leaderboard-week-header",children:[f.jsxs("div",{className:"week-nav leaderboard-team-nav",children:[f.jsx("button",{type:"button",onClick:we,disabled:mn<=0,"aria-label":"Previous week",children:f.jsx("span",{"aria-hidden":!0,children:"<"})}),f.jsx("span",{className:"week-label",children:tr}),f.jsx("button",{type:"button",onClick:Ye,disabled:mn===-1||mn>=$e.length-1,"aria-label":"Next week",children:f.jsx("span",{"aria-hidden":!0,children:">"})})]}),$e.length>0&&f.jsxs("span",{className:"group-metric leaderboard-week-points",children:["points: ",Iu]})]}),$e.length===0?f.jsx("p",{className:"empty-note",children:"No locked weeks yet."}):f.jsx("div",{className:"leaderboard-team-groups",children:yf.map(v=>f.jsxs("section",{className:"team-group",children:[f.jsx("div",{className:"group-header",children:f.jsxs("div",{className:"group-info",children:[f.jsx("h2",{children:v.title}),f.jsx("p",{children:v.description})]})}),f.jsx("div",{className:`slot-grid slot-grid--${v.id}`,children:v.slots.map(S=>Pn(S,Ji,pn))})]},`lb-${v.id}`))})]})]})}),e==="team"&&f.jsxs("section",{className:"team-view",children:[f.jsx("header",{className:"page-header team-header",children:f.jsxs("div",{className:"team-header-info",children:[f.jsxs("div",{className:"meta-card deadline-card",children:[f.jsx("span",{className:"meta-label",children:"Deadline in"}),f.jsx("span",{className:"meta-value",children:yd}),f.jsx("span",{className:"meta-helper",children:vu})]}),f.jsx("p",{className:"eyebrow",children:"Big Brother Fantasy"}),f.jsx("h1",{children:Eu}),f.jsx("p",{className:"page-subtitle",children:vd})]})}),q&&f.jsx("p",{className:"notice",children:q}),!$&&f.jsx("p",{className:"notice",children:"Sign in to save your team and appear on the leaderboard."}),$&&Mn&&!Be&&ke&&f.jsxs("p",{className:"notice",children:["You missed the start of the season. No worries, you can join for Week ",ye+1,"."]}),!ke&&f.jsx("div",{className:"empty-state",children:f.jsx("p",{children:"No upcoming week. Add one in Admin to keep drafting."})}),r.length===0&&f.jsx("div",{className:"empty-state",children:f.jsx("p",{children:"Add players in Admin to start building your team."})}),yf.map(v=>{const S=(te==null?void 0:te.groupId)===v.id?tn.get(te.playerId):null,N=S?OD(h,A,S.id,v.title):[],L=S?hi(h,A,S,v.title):0,F=S?U0(S,A):!1;return f.jsxs("section",{className:"team-group",children:[f.jsxs("div",{className:`group-header ${v.id==="hoh"?"has-controls":""}`,children:[f.jsxs("div",{className:"group-info",children:[f.jsx("h2",{children:v.title}),f.jsx("p",{children:v.description})]}),v.id==="hoh"&&f.jsxs("div",{className:"group-controls",children:[f.jsxs("div",{className:"week-nav",children:[f.jsx("button",{type:"button",onClick:b,disabled:A<=Zn,"aria-label":"Previous week",children:f.jsx("span",{"aria-hidden":!0,children:"<"})}),f.jsxs("span",{className:"week-label",children:["Week ",A+1]}),f.jsx("button",{type:"button",onClick:O,disabled:A>=Qi,"aria-label":"Next week",children:f.jsx("span",{"aria-hidden":!0,children:">"})})]}),f.jsxs("div",{className:"group-controls-right",children:[f.jsx("span",{className:`group-metric ${De?"transfer-metric":""}`,children:De?`transfers: ${wu}`:`points: ${Ve}`}),!Be&&!De&&f.jsx("button",{type:"button",className:"pick-button",onClick:G,disabled:!ke||!$,children:"Pick for next week"})]})]})]}),f.jsx("div",{className:`slot-grid slot-grid--${v.id}`,children:v.slots.map(Z=>Ar(Z))}),S&&f.jsx("div",{className:"breakdown-overlay",onClick:()=>re(null),children:f.jsxs("div",{className:"breakdown-card",onClick:Z=>Z.stopPropagation(),children:[f.jsx("button",{type:"button",className:"modal-close",onClick:()=>re(null),"aria-label":"Close breakdown",children:"X"}),f.jsxs("div",{className:"breakdown-header",children:[f.jsx("div",{className:"slot-avatar",children:S.photo?f.jsx("img",{src:S.photo,alt:S.name}):f.jsx("span",{children:sn(S.name)})}),f.jsxs("div",{children:[f.jsx("p",{className:"slot-name",children:S.name}),f.jsx("p",{className:"slot-points",children:Ov(L)})]})]}),f.jsx("div",{className:"breakdown-body",children:F?f.jsx("p",{className:"empty-note",children:"Player evicted, no points this week."}):N.length===0?f.jsx("p",{className:"empty-note",children:"No events recorded yet."}):f.jsx("ul",{className:"breakdown-list",children:N.map(Z=>f.jsxs("li",{children:[f.jsx("span",{children:Z.label}),f.jsx("span",{children:Ov(Z.points)})]},Z.label))})})]})})]},v.id)}),De&&!Be&&!Mn&&f.jsxs("div",{className:"transfer-actions",children:[f.jsx("button",{type:"button",className:"ghost",onClick:xa,disabled:!ti,children:"Reset"}),f.jsx("button",{type:"button",onClick:Zi,disabled:!es,children:"Save transfers"})]}),De&&(Be||Mn)&&f.jsx("div",{className:"preseason-actions",children:f.jsx("button",{type:"button",onClick:eo,disabled:!$||!ke||!_f(pt),children:"Save team"})})]}),e==="chat"&&nr(),e==="boards"&&rr(),e==="admin"&&Ie&&f.jsxs("section",{className:"admin-view",children:[f.jsxs("header",{className:"page-header",children:[f.jsxs("div",{children:[f.jsx("p",{className:"eyebrow",children:"Commissioner Tools"}),f.jsx("h1",{children:"Admin Panel"}),f.jsx("p",{className:"page-subtitle",children:"Add houseguests, manage weeks, and advance the season."})]}),f.jsxs("div",{className:"meta-row",children:[f.jsxs("div",{className:"meta-card",children:[f.jsx("span",{className:"meta-label",children:"Active week"}),f.jsx("span",{className:"meta-value",children:ei}),f.jsxs("span",{className:"meta-helper",children:["Next: ",ke?ke.name:"None"]})]}),f.jsxs("div",{className:"meta-card accent",children:[f.jsx("span",{className:"meta-label",children:"Transfer bank"}),f.jsx("span",{className:"meta-value",children:C}),f.jsxs("span",{className:"meta-helper",children:["Max ",xv," per week"]})]})]})]}),f.jsxs("div",{className:"admin-grid",children:[f.jsxs("div",{className:"admin-card",children:[f.jsxs("div",{className:"card-title",children:[f.jsx("h2",{children:"Add player"}),f.jsx("p",{children:"Upload a headshot and name."})]}),f.jsxs("form",{className:"admin-form",onSubmit:Lu,children:[f.jsxs("label",{children:["Player name",f.jsx("input",{type:"text",placeholder:"Houseguest name",value:ya,onChange:v=>Er(v.target.value)})]}),f.jsxs("label",{children:["Photo",f.jsx("input",{type:"file",accept:"image/*",onChange:no})]}),f.jsxs("div",{className:"photo-preview",children:[f.jsx("div",{className:"slot-avatar preview",children:Ys?f.jsx("img",{src:Ys,alt:"Preview"}):f.jsx("span",{children:sn(ya)})}),f.jsx("p",{children:"Preview"})]}),f.jsx("button",{type:"submit",children:"Add player"})]})]}),f.jsxs("div",{className:"admin-card",children:[f.jsxs("div",{className:"card-title",children:[f.jsx("h2",{children:"Players"}),f.jsx("p",{children:"Manage the current roster."})]}),f.jsxs("div",{className:"admin-list",children:[Js.map(v=>f.jsxs("div",{className:`admin-player ${v.isEvicted?"evicted":""}`,children:[f.jsxs("div",{className:"admin-player-info",children:[f.jsx("div",{className:"avatar-small",children:v.photo?f.jsx("img",{src:v.photo,alt:v.name}):f.jsx("span",{children:sn(v.name)})}),f.jsxs("div",{children:[f.jsx("p",{className:"player-name",children:v.name}),f.jsxs("p",{className:"player-status",children:["Points: ",v.points]})]})]}),f.jsxs("div",{className:"admin-actions",children:[f.jsx("button",{type:"button",className:"ghost",onClick:()=>a(v.id),children:"Remove"}),f.jsxs("div",{className:"evict-week",children:[f.jsx("span",{children:"Week"}),f.jsx("input",{type:"number",min:"1",max:Math.max(l.length,1),value:v.isEvicted?Dg(v)+1:"",onChange:S=>Ou(v.id,S.target.value),disabled:!v.isEvicted,"aria-label":"Eviction week"})]}),f.jsx("button",{type:"button",className:v.isEvicted?"ghost":"danger",onClick:()=>Vu(v.id),children:v.isEvicted?"Restore":"Evict"})]})]},v.id)),r.length===0&&f.jsxs(f.Fragment,{children:[f.jsx("p",{className:"empty-note",children:"No players added yet."}),f.jsx("button",{type:"button",className:"ghost",onClick:Nu,children:"Seed sample players"})]})]})]}),f.jsxs("div",{className:"admin-card",children:[f.jsxs("div",{className:"card-title",children:[f.jsx("h2",{children:"Profile avatars"}),f.jsx("p",{children:"Upload photos users can pick for their profile."})]}),f.jsxs("form",{className:"admin-form",onSubmit:Mu,children:[f.jsxs("label",{children:["Avatar photo",f.jsx("input",{type:"file",accept:"image/*",onChange:qt})]}),f.jsxs("div",{className:"photo-preview",children:[f.jsx("div",{className:"slot-avatar preview",children:Jr?f.jsx("img",{src:Jr,alt:"Avatar preview"}):f.jsx("span",{children:"?"})}),f.jsx("p",{children:"Preview"})]}),f.jsx("button",{type:"submit",disabled:!qi,children:"Add avatar"})]}),f.jsxs("div",{className:"avatar-list",children:[i.map(v=>f.jsxs("div",{className:"avatar-row",children:[f.jsx("div",{className:"avatar-small",children:f.jsx("img",{src:v.photo,alt:"Avatar option"})}),f.jsx("button",{type:"button",className:"ghost",onClick:()=>ns(v.id),children:"Remove"})]},v.id)),i.length===0&&f.jsx("p",{className:"empty-note",children:"No avatars uploaded yet."})]})]}),f.jsxs("div",{className:"admin-card admin-wide",children:[f.jsxs("div",{className:"card-title",children:[f.jsx("h2",{children:"Weeks and deadlines"}),f.jsx("p",{children:"Edit deadlines or add new weeks."})]}),(!mu||l.length===0)&&f.jsxs("div",{className:"empty-state",children:[f.jsx("p",{children:"No season data yet. Initialize weeks to get started."}),f.jsx("button",{type:"button",className:"ghost",onClick:xu,children:"Initialize season"})]}),f.jsx("div",{className:"week-list",children:l.map((v,S)=>{const N=h[S]??{doubleEviction:!1,players:{}},L=N.doubleEviction;return f.jsxs("div",{className:"week-panel",children:[f.jsxs("div",{className:"week-row",children:[f.jsxs("div",{children:[f.jsx("p",{className:"week-name",children:v.name}),f.jsxs("p",{className:"player-status",children:["Deadline: ",Lv(v.deadline)]})]}),f.jsx("input",{type:"datetime-local",value:SD(v.deadline),onChange:F=>c(S,F.target.value)}),l.length>1&&f.jsx("button",{type:"button",className:"ghost",onClick:()=>y(S),disabled:S!==l.length-1,children:"Remove"})]}),f.jsxs("details",{className:"week-events",children:[f.jsxs("summary",{children:["Week ",S+1," events"]}),f.jsxs("div",{className:"week-events-body",children:[f.jsxs("label",{className:"toggle",children:[f.jsx("input",{type:"checkbox",checked:L,onChange:()=>bu(S)}),"Double eviction week"]}),f.jsx("p",{className:"helper",children:"Evicted automatically counts as touching the block."}),r.length===0?f.jsx("p",{className:"empty-note",children:"Add players to start tracking events."}):f.jsx("div",{className:"event-grid",children:Js.map(F=>{var sr,ju;const Z=Eh((ju=(sr=N.players)==null?void 0:sr[F.id])==null?void 0:ju.rounds),ce=L?Z:Z.slice(0,1),Xe=wf(F,S),Je=hi(h,S,F,"HOH Room"),Fn=hi(h,S,F,"The Block");return f.jsxs("div",{className:`event-player ${Xe?"evicted":""}`,children:[f.jsxs("div",{className:"event-player-header",children:[f.jsx("div",{className:"avatar-small",children:F.photo?f.jsx("img",{src:F.photo,alt:F.name}):f.jsx("span",{children:sn(F.name)})}),f.jsxs("div",{children:[f.jsx("p",{className:"player-name",children:F.name}),f.jsxs("p",{className:"player-status",children:["HOH: ",Je," · Block: ",Fn]})]})]}),f.jsx("div",{className:`event-rounds ${L?"double":""}`,children:ce.map((ze,ai)=>f.jsxs("div",{className:"event-round",children:[L&&f.jsxs("p",{className:"event-round-title",children:["Round ",ai+1]}),f.jsx("div",{className:"event-checks",children:bD.map(Va=>{const Vg=Va.id==="touchedBlock",F0=Vg?ze.touchedBlock||ze.evicted:ze[Va.id],B0=Vg&&ze.evicted;return f.jsxs("label",{className:"event-check",children:[f.jsx("input",{type:"checkbox",checked:F0,disabled:B0,onChange:z0=>Du(S,F.id,ai,Va.id,z0.target.checked)}),f.jsx("span",{children:Va.label})]},`${F.id}-${Va.id}-${ai}`)})})]},`${F.id}-${ai}`))})]},F.id)})})]})]})]},v.id)})}),f.jsxs("div",{className:"week-actions",children:[f.jsx("button",{type:"button",onClick:d,children:"Add week"}),f.jsx("button",{type:"button",className:"danger",onClick:kr,disabled:l.length===0,children:"Reset to preseason"}),f.jsx("button",{type:"button",className:"accent",onClick:Na,disabled:!ke,children:"Go to next week"}),f.jsx("p",{className:"helper",children:"Advancing locks the current week and opens the next week for transfers."})]})]})]})]})]}),f.jsx("nav",{className:"tab-bar",style:{gridTemplateColumns:`repeat(${Ra.length}, minmax(0, 1fr))`},children:Ra.map(v=>f.jsx("button",{type:"button",className:`tab-button ${e===v.id?"active":""}`,onClick:()=>n(v.id),children:v.label},v.id))})]})}Ef.createRoot(document.getElementById("root")).render(f.jsx(iS.StrictMode,{children:f.jsx(LD,{})}));export{eC as A,YD as B,l2 as C,o1 as D,Vi as E,cs as F,hs as G,u2 as H,a2 as I,TC as J,Br as K,e2 as L,p_ as M,QC as N,Sc as O,Yy as P,qT as Q,s2 as R,MC as S,ds as T,Vm as W,zD as a,BD as b,WD as c,r2 as d,c2 as e,KD as f,X1 as g,ur as h,qD as i,n2 as j,FD as k,o2 as l,HD as m,Qy as n,t2 as o,MD as p,UD as q,RR as r,QD as s,$D as t,GD as u,i2 as v,jD as w,JD as x,ZD as y,XD as z};
