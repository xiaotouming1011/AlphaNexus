(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Yf={exports:{}},Do={};var m0;function rS(){if(m0)return Do;m0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var g0;function sS(){return g0||(g0=1,Yf.exports=rS()),Yf.exports}var pn=sS(),Zf={exports:{}},se={};var _0;function oS(){if(_0)return se;_0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function v(O,Y,mt){this.props=O,this.context=Y,this.refs=M,this.updater=mt||T}v.prototype.isReactComponent={},v.prototype.setState=function(O,Y){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Y,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function D(){}D.prototype=v.prototype;function P(O,Y,mt){this.props=O,this.context=Y,this.refs=M,this.updater=mt||T}var N=P.prototype=new D;N.constructor=P,C(N,v.prototype),N.isPureReactComponent=!0;var V=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function U(O,Y,mt){var bt=mt.ref;return{$$typeof:o,type:O,key:Y,ref:bt!==void 0?bt:null,props:mt}}function ht(O,Y){return U(O.type,Y,O.props)}function H(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function J(O){var Y={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(mt){return Y[mt]})}var it=/\/+/g;function st(O,Y){return typeof O=="object"&&O!==null&&O.key!=null?J(""+O.key):Y.toString(36)}function j(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(I,I):(O.status="pending",O.then(function(Y){O.status==="pending"&&(O.status="fulfilled",O.value=Y)},function(Y){O.status==="pending"&&(O.status="rejected",O.reason=Y)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function w(O,Y,mt,bt,Ot){var tt=typeof O;(tt==="undefined"||tt==="boolean")&&(O=null);var _t=!1;if(O===null)_t=!0;else switch(tt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(O.$$typeof){case o:case e:_t=!0;break;case x:return _t=O._init,w(_t(O._payload),Y,mt,bt,Ot)}}if(_t)return Ot=Ot(O),_t=bt===""?"."+st(O,0):bt,V(Ot)?(mt="",_t!=null&&(mt=_t.replace(it,"$&/")+"/"),w(Ot,Y,mt,"",function(Wt){return Wt})):Ot!=null&&(H(Ot)&&(Ot=ht(Ot,mt+(Ot.key==null||O&&O.key===Ot.key?"":(""+Ot.key).replace(it,"$&/")+"/")+_t)),Y.push(Ot)),1;_t=0;var St=bt===""?".":bt+":";if(V(O))for(var Ut=0;Ut<O.length;Ut++)bt=O[Ut],tt=St+st(bt,Ut),_t+=w(bt,Y,mt,tt,Ot);else if(Ut=E(O),typeof Ut=="function")for(O=Ut.call(O),Ut=0;!(bt=O.next()).done;)bt=bt.value,tt=St+st(bt,Ut++),_t+=w(bt,Y,mt,tt,Ot);else if(tt==="object"){if(typeof O.then=="function")return w(j(O),Y,mt,bt,Ot);throw Y=String(O),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return _t}function F(O,Y,mt){if(O==null)return O;var bt=[],Ot=0;return w(O,bt,"","",function(tt){return Y.call(mt,tt,Ot++)}),bt}function lt(O){if(O._status===-1){var Y=O._result;Y=Y(),Y.then(function(mt){(O._status===0||O._status===-1)&&(O._status=1,O._result=mt)},function(mt){(O._status===0||O._status===-1)&&(O._status=2,O._result=mt)}),O._status===-1&&(O._status=0,O._result=Y)}if(O._status===1)return O._result.default;throw O._result}var dt=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},Et={map:F,forEach:function(O,Y,mt){F(O,function(){Y.apply(this,arguments)},mt)},count:function(O){var Y=0;return F(O,function(){Y++}),Y},toArray:function(O){return F(O,function(Y){return Y})||[]},only:function(O){if(!H(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return se.Activity=S,se.Children=Et,se.Component=v,se.Fragment=i,se.Profiler=l,se.PureComponent=P,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,se.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},se.cache=function(O){return function(){return O.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(O,Y,mt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var bt=C({},O.props),Ot=O.key;if(Y!=null)for(tt in Y.key!==void 0&&(Ot=""+Y.key),Y)!b.call(Y,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&Y.ref===void 0||(bt[tt]=Y[tt]);var tt=arguments.length-2;if(tt===1)bt.children=mt;else if(1<tt){for(var _t=Array(tt),St=0;St<tt;St++)_t[St]=arguments[St+2];bt.children=_t}return U(O.type,Ot,bt)},se.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},se.createElement=function(O,Y,mt){var bt,Ot={},tt=null;if(Y!=null)for(bt in Y.key!==void 0&&(tt=""+Y.key),Y)b.call(Y,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Ot[bt]=Y[bt]);var _t=arguments.length-2;if(_t===1)Ot.children=mt;else if(1<_t){for(var St=Array(_t),Ut=0;Ut<_t;Ut++)St[Ut]=arguments[Ut+2];Ot.children=St}if(O&&O.defaultProps)for(bt in _t=O.defaultProps,_t)Ot[bt]===void 0&&(Ot[bt]=_t[bt]);return U(O,tt,Ot)},se.createRef=function(){return{current:null}},se.forwardRef=function(O){return{$$typeof:p,render:O}},se.isValidElement=H,se.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:lt}},se.memo=function(O,Y){return{$$typeof:h,type:O,compare:Y===void 0?null:Y}},se.startTransition=function(O){var Y=B.T,mt={};B.T=mt;try{var bt=O(),Ot=B.S;Ot!==null&&Ot(mt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(I,dt)}catch(tt){dt(tt)}finally{Y!==null&&mt.types!==null&&(Y.types=mt.types),B.T=Y}},se.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},se.use=function(O){return B.H.use(O)},se.useActionState=function(O,Y,mt){return B.H.useActionState(O,Y,mt)},se.useCallback=function(O,Y){return B.H.useCallback(O,Y)},se.useContext=function(O){return B.H.useContext(O)},se.useDebugValue=function(){},se.useDeferredValue=function(O,Y){return B.H.useDeferredValue(O,Y)},se.useEffect=function(O,Y){return B.H.useEffect(O,Y)},se.useEffectEvent=function(O){return B.H.useEffectEvent(O)},se.useId=function(){return B.H.useId()},se.useImperativeHandle=function(O,Y,mt){return B.H.useImperativeHandle(O,Y,mt)},se.useInsertionEffect=function(O,Y){return B.H.useInsertionEffect(O,Y)},se.useLayoutEffect=function(O,Y){return B.H.useLayoutEffect(O,Y)},se.useMemo=function(O,Y){return B.H.useMemo(O,Y)},se.useOptimistic=function(O,Y){return B.H.useOptimistic(O,Y)},se.useReducer=function(O,Y,mt){return B.H.useReducer(O,Y,mt)},se.useRef=function(O){return B.H.useRef(O)},se.useState=function(O){return B.H.useState(O)},se.useSyncExternalStore=function(O,Y,mt){return B.H.useSyncExternalStore(O,Y,mt)},se.useTransition=function(){return B.H.useTransition()},se.version="19.2.4",se}var v0;function Th(){return v0||(v0=1,Zf.exports=oS()),Zf.exports}var da=Th(),jf={exports:{}},wo={},Kf={exports:{}},Qf={};var x0;function lS(){return x0||(x0=1,(function(o){function e(w,F){var lt=w.length;w.push(F);t:for(;0<lt;){var dt=lt-1>>>1,Et=w[dt];if(0<l(Et,F))w[dt]=F,w[lt]=Et,lt=dt;else break t}}function i(w){return w.length===0?null:w[0]}function r(w){if(w.length===0)return null;var F=w[0],lt=w.pop();if(lt!==F){w[0]=lt;t:for(var dt=0,Et=w.length,O=Et>>>1;dt<O;){var Y=2*(dt+1)-1,mt=w[Y],bt=Y+1,Ot=w[bt];if(0>l(mt,lt))bt<Et&&0>l(Ot,mt)?(w[dt]=Ot,w[bt]=lt,dt=bt):(w[dt]=mt,w[Y]=lt,dt=Y);else if(bt<Et&&0>l(Ot,lt))w[dt]=Ot,w[bt]=lt,dt=bt;else break t}}return F}function l(w,F){var lt=w.sortIndex-F.sortIndex;return lt!==0?lt:w.id-F.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,_=3,E=!1,T=!1,C=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(w){for(var F=i(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=w)r(h),F.sortIndex=F.expirationTime,e(m,F);else break;F=i(h)}}function V(w){if(C=!1,N(w),!T)if(i(m)!==null)T=!0,I||(I=!0,J());else{var F=i(h);F!==null&&j(V,F.startTime-w)}}var I=!1,B=-1,b=5,U=-1;function ht(){return M?!0:!(o.unstable_now()-U<b)}function H(){if(M=!1,I){var w=o.unstable_now();U=w;var F=!0;try{t:{T=!1,C&&(C=!1,D(B),B=-1),E=!0;var lt=_;try{e:{for(N(w),S=i(m);S!==null&&!(S.expirationTime>w&&ht());){var dt=S.callback;if(typeof dt=="function"){S.callback=null,_=S.priorityLevel;var Et=dt(S.expirationTime<=w);if(w=o.unstable_now(),typeof Et=="function"){S.callback=Et,N(w),F=!0;break e}S===i(m)&&r(m),N(w)}else r(m);S=i(m)}if(S!==null)F=!0;else{var O=i(h);O!==null&&j(V,O.startTime-w),F=!1}}break t}finally{S=null,_=lt,E=!1}F=void 0}}finally{F?J():I=!1}}}var J;if(typeof P=="function")J=function(){P(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,st=it.port2;it.port1.onmessage=H,J=function(){st.postMessage(null)}}else J=function(){v(H,0)};function j(w,F){B=v(function(){w(o.unstable_now())},F)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(w){w.callback=null},o.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<w?Math.floor(1e3/w):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(w){switch(_){case 1:case 2:case 3:var F=3;break;default:F=_}var lt=_;_=F;try{return w()}finally{_=lt}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(w,F){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var lt=_;_=w;try{return F()}finally{_=lt}},o.unstable_scheduleCallback=function(w,F,lt){var dt=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?dt+lt:dt):lt=dt,w){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=lt+Et,w={id:x++,callback:F,priorityLevel:w,startTime:lt,expirationTime:Et,sortIndex:-1},lt>dt?(w.sortIndex=lt,e(h,w),i(m)===null&&w===i(h)&&(C?(D(B),B=-1):C=!0,j(V,lt-dt))):(w.sortIndex=Et,e(m,w),T||E||(T=!0,I||(I=!0,J()))),w},o.unstable_shouldYield=ht,o.unstable_wrapCallback=function(w){var F=_;return function(){var lt=_;_=F;try{return w.apply(this,arguments)}finally{_=lt}}}})(Qf)),Qf}var S0;function uS(){return S0||(S0=1,Kf.exports=lS()),Kf.exports}var Jf={exports:{}},Tn={};var M0;function cS(){if(M0)return Tn;M0=1;var o=Th();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},Tn.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Tn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Tn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Tn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):x==="script"&&r.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Tn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Tn.requestFormReset=function(m){r.d.r(m)},Tn.unstable_batchedUpdates=function(m,h){return m(h)},Tn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var y0;function fS(){if(y0)return Jf.exports;y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Jf.exports=cS(),Jf.exports}var E0;function dS(){if(E0)return wo;E0=1;var o=uS(),e=Th(),i=fS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,A=u.child;A;){if(A===a){g=!0,a=u,s=f;break}if(A===s){g=!0,s=u,a=f;break}A=A.sibling}if(!g){for(A=f.child;A;){if(A===a){g=!0,a=f,s=u;break}if(A===s){g=!0,s=f,a=u;break}A=A.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),ht=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var it=Symbol.for("react.client.reference");function st(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===it?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case I:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:st(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return st(t(n))}catch{}}return null}var j=Array.isArray,w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},dt=[],Et=-1;function O(t){return{current:t}}function Y(t){0>Et||(t.current=dt[Et],dt[Et]=null,Et--)}function mt(t,n){Et++,dt[Et]=t.current,t.current=n}var bt=O(null),Ot=O(null),tt=O(null),_t=O(null);function St(t,n){switch(mt(tt,n),mt(Ot,t),mt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=zg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(bt),mt(bt,t)}function Ut(){Y(bt),Y(Ot),Y(tt)}function Wt(t){t.memoizedState!==null&&mt(_t,t);var n=bt.current,a=Ig(n,t.type);n!==a&&(mt(Ot,t),mt(bt,a))}function jt(t){Ot.current===t&&(Y(bt),Y(Ot)),_t.current===t&&(Y(_t),bo._currentValue=lt)}var Ve,pe;function he(t){if(Ve===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ve=n&&n[1]||"",pe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ve+t+pe}var Ee=!1;function ne(t,n){if(!t||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ot){var nt=ot}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ot){nt=ot}t.call(vt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],A=f[1];if(g&&A){var z=g.split(`
`),$=A.split(`
`);for(u=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===z.length||u===$.length)for(s=z.length-1,u=$.length-1;1<=s&&0<=u&&z[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(z[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||z[s]!==$[u]){var ft=`
`+z[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?he(a):""}function je(t,n){switch(t.tag){case 26:case 27:case 5:return he(t.type);case 16:return he("Lazy");case 13:return t.child!==n&&n!==null?he("Suspense Fallback"):he("Suspense");case 19:return he("SuspenseList");case 0:case 15:return ne(t.type,!1);case 11:return ne(t.type.render,!1);case 1:return ne(t.type,!0);case 31:return he("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=je(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var We=Object.prototype.hasOwnProperty,Me=o.unstable_scheduleCallback,Ue=o.unstable_cancelCallback,qt=o.unstable_shouldYield,L=o.unstable_requestPaint,y=o.unstable_now,q=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Kt=o.log,$t=o.unstable_setDisableYieldValue,Tt=null,Mt=null;function Pt(t){if(typeof Kt=="function"&&$t(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Tt,t)}catch{}}var Nt=Math.clz32?Math.clz32:W,Ft=Math.log,le=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ft(t)/le|0)|0}var Rt=256,At=262144,Bt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ut(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=yt(s):(g&=A,g!==0?u=yt(g):a||(a=A&~t,a!==0&&(u=yt(a))))):(A=s&~f,A!==0?u=yt(A):g!==0?u=yt(g):a||(a=s&~t,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ee(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function di(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,z=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Nt(a),vt=1<<ft;A[ft]=0,z[ft]=-1;var nt=$[ft];if(nt!==null)for($[ft]=null,ft=0;ft<nt.length;ft++){var ot=nt[ft];ot!==null&&(ot.lane&=-536870913)}a&=~vt}s!==0&&Is(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Is(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Nt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Nr(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Nt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Yo(t,n){var a=n&-n;return a=(a&42)!==0?1:Or(a),(a&(t.suspendedLanes|n))!==0?0:a}function Or(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ai(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:l0(t.type))}function Fr(t,n){var a=F.p;try{return F.p=t,n()}finally{F.p=a}}var hi=Math.random().toString(36).slice(2),en="__reactFiber$"+hi,fn="__reactProps$"+hi,Gi="__reactContainer$"+hi,ya="__reactEvents$"+hi,Zo="__reactListeners$"+hi,jo="__reactHandles$"+hi,Ko="__reactResources$"+hi,ir="__reactMarker$"+hi;function Hs(t){delete t[en],delete t[fn],delete t[ya],delete t[Zo],delete t[jo]}function Ea(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Gi]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qg(t);t!==null;){if(a=t[en])return a;t=qg(t)}return n}t=a,a=t.parentNode}return null}function Ta(t){if(t=t[en]||t[Gi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function R(t){var n=t[Ko];return n||(n=t[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(t){t[ir]=!0}var rt=new Set,et={};function K(t,n){Dt(t,n),Dt(t+"Capture",n)}function Dt(t,n){for(et[t]=n,t=0;t<n.length;t++)rt.add(n[t])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wt={},kt={};function Zt(t){return We.call(kt,t)?!0:We.call(wt,t)?!1:zt.test(t)?kt[t]=!0:(wt[t]=!0,!1)}function te(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function re(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ht(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function ue(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ye(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ae(t){if(!t._valueTracker){var n=qe(t)?"checked":"value";t._valueTracker=Ye(t,n,""+t[n])}}function dn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=qe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Vt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function ie(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(t,n,a,s,u,f,g,A){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ue(n)):t.value!==""+ue(n)&&(t.value=""+ue(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?pi(t,g,ue(n)):a!=null?pi(t,g,ue(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+ue(A):t.removeAttribute("name")}function Xn(t,n,a,s,u,f,g,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ae(t);return}a=a!=null?""+ue(a):"",n=n!=null?""+ue(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Ae(t)}function pi(t,n,a){n==="number"&&Vt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function kn(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ue(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Le(t,n,a){if(n!=null&&(n=""+ue(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ue(a):""}function nn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(j(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ue(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ae(t)}function Un(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var an=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mi(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||an.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vi(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&mi(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&mi(t,f,n[f])}function Br(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ev=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(t){return nv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var Xu=null;function ku(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zr=null,Ir=null;function Bh(t){var n=Ta(t);if(n&&(t=n.stateNode)){var a=t[fn]||null;t:switch(t=n.stateNode,n.type){case"input":if(wn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ie(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[fn]||null;if(!u)throw Error(r(90));wn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&dn(s)}break t;case"textarea":Le(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&kn(t,!!a.multiple,n,!1)}}}var Wu=!1;function zh(t,n,a){if(Wu)return t(n,a);Wu=!0;try{var s=t(n);return s}finally{if(Wu=!1,(zr!==null||Ir!==null)&&(zl(),zr&&(n=zr,t=Ir,Ir=zr=null,Bh(n),t)))for(n=0;n<t.length;n++)Bh(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[fn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=!1;if(ki)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){qu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{qu=!1}var ba=null,Yu=null,Jo=null;function Ih(){if(Jo)return Jo;var t,n=Yu,a=n.length,s,u="value"in ba?ba.value:ba.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Jo=u.slice(t,1<s?1-s:void 0)}function $o(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function tl(){return!0}function Hh(){return!1}function Pn(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:Hh,this.isPropagationStopped=Hh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Pn(rr),Xs=S({},rr,{view:0,detail:0}),iv=Pn(Xs),Zu,ju,ks,nl=S({},Xs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ks&&(ks&&t.type==="mousemove"?(Zu=t.screenX-ks.screenX,ju=t.screenY-ks.screenY):ju=Zu=0,ks=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:ju}}),Gh=Pn(nl),av=S({},nl,{dataTransfer:0}),rv=Pn(av),sv=S({},Xs,{relatedTarget:0}),Ku=Pn(sv),ov=S({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Pn(ov),uv=S({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cv=Pn(uv),fv=S({},rr,{data:0}),Vh=Pn(fv),dv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=pv[t])?!!n[t]:!1}function Qu(){return mv}var gv=S({},Xs,{key:function(t){if(t.key){var n=dv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?hv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_v=Pn(gv),vv=S({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Pn(vv),xv=S({},Xs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),Sv=Pn(xv),Mv=S({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=Pn(Mv),Ev=S({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=Pn(Ev),bv=S({},rr,{newState:0,oldState:0}),Av=Pn(bv),Rv=[9,13,27,32],Ju=ki&&"CompositionEvent"in window,Ws=null;ki&&"documentMode"in document&&(Ws=document.documentMode);var Cv=ki&&"TextEvent"in window&&!Ws,kh=ki&&(!Ju||Ws&&8<Ws&&11>=Ws),Wh=" ",qh=!1;function Yh(t,n){switch(t){case"keyup":return Rv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Dv(t,n){switch(t){case"compositionend":return Zh(n);case"keypress":return n.which!==32?null:(qh=!0,Wh);case"textInput":return t=n.data,t===Wh&&qh?null:t;default:return null}}function wv(t,n){if(Hr)return t==="compositionend"||!Ju&&Yh(t,n)?(t=Ih(),Jo=Yu=ba=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kh&&n.locale!=="ko"?null:n.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Uv[t.type]:n==="textarea"}function Kh(t,n,a,s){zr?Ir?Ir.push(s):Ir=[s]:zr=s,n=Wl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var qs=null,Ys=null;function Lv(t){Lg(t,0)}function il(t){var n=ar(t);if(dn(n))return t}function Qh(t,n){if(t==="change")return n}var Jh=!1;if(ki){var $u;if(ki){var tc="oninput"in document;if(!tc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),tc=typeof $h.oninput=="function"}$u=tc}else $u=!1;Jh=$u&&(!document.documentMode||9<document.documentMode)}function tp(){qs&&(qs.detachEvent("onpropertychange",ep),Ys=qs=null)}function ep(t){if(t.propertyName==="value"&&il(Ys)){var n=[];Kh(n,Ys,t,ku(t)),zh(Lv,n)}}function Nv(t,n,a){t==="focusin"?(tp(),qs=n,Ys=a,qs.attachEvent("onpropertychange",ep)):t==="focusout"&&tp()}function Ov(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(Ys)}function Pv(t,n){if(t==="click")return il(n)}function Fv(t,n){if(t==="input"||t==="change")return il(n)}function Bv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:Bv;function Zs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!We.call(n,u)||!Wn(t[u],n[u]))return!1}return!0}function np(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ip(t,n){var a=np(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=np(a)}}function ap(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ap(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function rp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Vt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Vt(t.document)}return n}function ec(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var zv=ki&&"documentMode"in document&&11>=document.documentMode,Gr=null,nc=null,js=null,ic=!1;function sp(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ic||Gr==null||Gr!==Vt(s)||(s=Gr,"selectionStart"in s&&ec(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),js&&Zs(js,s)||(js=s,s=Wl(nc,"onSelect"),0<s.length&&(n=new el("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ac={},op={};ki&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(ac[t])return ac[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in op)return ac[t]=n[a];return t}var lp=or("animationend"),up=or("animationiteration"),cp=or("animationstart"),Iv=or("transitionrun"),Hv=or("transitionstart"),Gv=or("transitioncancel"),fp=or("transitionend"),dp=new Map,rc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rc.push("scrollEnd");function gi(t,n){dp.set(t,n),K(n,[t])}var al=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Xr=0,sc=0;function rl(){for(var t=Xr,n=sc=Xr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var u=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&hp(a,u,f)}}function sl(t,n,a,s){ei[Xr++]=t,ei[Xr++]=n,ei[Xr++]=a,ei[Xr++]=s,sc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function oc(t,n,a,s){return sl(t,n,a,s),ol(t)}function lr(t,n){return sl(t,null,null,n),ol(t)}function hp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Nt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function ol(t){if(50<vo)throw vo=0,_f=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var kr={};function Vv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new Vv(t,n,a,s)}function lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ll(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")lc(t)&&(g=1);else if(typeof t=="string")g=Yx(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case U:return t=qn(31,a,n,u),t.elementType=U,t.lanes=f,t;case C:return ur(a.children,u,f,n);case M:g=8,u|=24;break;case v:return t=qn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case V:return t=qn(13,a,n,u),t.elementType=V,t.lanes=f,t;case I:return t=qn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:g=10;break t;case D:g=9;break t;case N:g=11;break t;case B:g=14;break t;case b:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function ur(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function uc(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function mp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function cc(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var gp=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=gp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},gp.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Wr=[],qr=0,ul=null,Ks=0,ii=[],ai=0,Aa=null,Ri=1,Ci="";function qi(t,n){Wr[qr++]=Ks,Wr[qr++]=ul,ul=t,Ks=n}function _p(t,n,a){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=Aa,Aa=t;var s=Ri;t=Ci;var u=32-Nt(s)-1;s&=~(1<<u),a+=1;var f=32-Nt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Ri=1<<32-Nt(n)+u|a<<u|s,Ci=f+t}else Ri=1<<f|a<<u|s,Ci=t}function fc(t){t.return!==null&&(qi(t,1),_p(t,1,0))}function dc(t){for(;t===ul;)ul=Wr[--qr],Wr[qr]=null,Ks=Wr[--qr],Wr[qr]=null;for(;t===Aa;)Aa=ii[--ai],ii[ai]=null,Ci=ii[--ai],ii[ai]=null,Ri=ii[--ai],ii[ai]=null}function vp(t,n){ii[ai++]=Ri,ii[ai++]=Ci,ii[ai++]=Aa,Ri=n.id,Ci=n.overflow,Aa=t}var xn=null,Xe=null,xe=!1,Ra=null,ri=!1,hc=Error(r(519));function Ca(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ni(n,t)),hc}function xp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[fn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Xn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),nn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Fg(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ca(t,!0)}function Sp(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:xn=xn.return}}function Yr(t){if(t!==xn)return!1;if(!xe)return Sp(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lf(t.type,t.memoizedProps)),a=!a),a&&Xe&&Ca(t),Sp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Xe=Wg(t)}else n===27?(n=Xe,Va(t.type)?(t=Bf,Bf=null,Xe=t):Xe=n):Xe=xn?oi(t.stateNode.nextSibling):null;return!0}function cr(){Xe=xn=null,xe=!1}function pc(){var t=Ra;return t!==null&&(In===null?In=t:In.push.apply(In,t),Ra=null),t}function Qs(t){Ra===null?Ra=[t]:Ra.push(t)}var mc=O(null),fr=null,Yi=null;function Da(t,n,a){mt(mc,n._currentValue),n._currentValue=a}function Zi(t){t._currentValue=mc.current,Y(mc)}function gc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function _c(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),gc(f.return,a,t),s||(g=null);break t}f=A.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),gc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Zr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var A=u.type;Wn(u.pendingProps.value,g.value)||(t!==null?t.push(A):t=[A])}}else if(u===_t.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}u=u.return}t!==null&&_c(n,t,a,s),n.flags|=262144}function cl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){fr=t,Yi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Mp(fr,t)}function fl(t,n){return fr===null&&dr(t),Mp(t,n)}function Mp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Yi===null){if(t===null)throw Error(r(308));Yi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Yi=Yi.next=n;return a}var Xv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},kv=o.unstable_scheduleCallback,Wv=o.unstable_NormalPriority,rn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vc(){return{controller:new Xv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&kv(Wv,function(){t.controller.abort()})}var $s=null,xc=0,jr=0,Kr=null;function qv(t,n){if($s===null){var a=$s=[];xc=0,jr=Ef(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return xc++,n.then(yp,yp),n}function yp(){if(--xc===0&&$s!==null){Kr!==null&&(Kr.status="fulfilled");var t=$s;$s=null,jr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Yv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ep=w.S;w.S=function(t,n){sg=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&qv(t,n),Ep!==null&&Ep(t,n)};var hr=O(null);function Sc(){var t=hr.current;return t!==null?t:Ge.pooledCache}function dl(t,n){n===null?mt(hr,hr.current):mt(hr,n.pool)}function Tp(){var t=Sc();return t===null?null:{parent:rn._currentValue,pool:t}}var Qr=Error(r(460)),Mc=Error(r(474)),hl=Error(r(542)),pl={then:function(){}};function bp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ap(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Xi,Xi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Ge,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Cp(t),t}throw mr=n,Qr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function Rp(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function Cp(t){if(t===Qr||t===hl)throw Error(r(483))}var Jr=null,to=0;function ml(t){var n=to;return to+=1,Jr===null&&(Jr=[]),Ap(Jr,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function gl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Dp(t){function n(Z,X){if(t){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!t)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function s(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Wi(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,Q){return Z.index=Q,t?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function g(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,X,Q,gt){return X===null||X.tag!==6?(X=uc(Q,Z.mode,gt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function z(Z,X,Q,gt){var Qt=Q.type;return Qt===C?ft(Z,X,Q.props.children,gt,Q.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&pr(Qt)===X.type)?(X=u(X,Q.props),eo(X,Q),X.return=Z,X):(X=ll(Q.type,Q.key,Q.props,null,Z.mode,gt),eo(X,Q),X.return=Z,X)}function $(Z,X,Q,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=cc(Q,Z.mode,gt),X.return=Z,X):(X=u(X,Q.children||[]),X.return=Z,X)}function ft(Z,X,Q,gt,Qt){return X===null||X.tag!==7?(X=ur(Q,Z.mode,gt,Qt),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function vt(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=uc(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return Q=ll(X.type,X.key,X.props,null,Z.mode,Q),eo(Q,X),Q.return=Z,Q;case T:return X=cc(X,Z.mode,Q),X.return=Z,X;case b:return X=pr(X),vt(Z,X,Q)}if(j(X)||J(X))return X=ur(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return vt(Z,ml(X),Q);if(X.$$typeof===P)return vt(Z,fl(Z,X),Q);gl(Z,X)}return null}function nt(Z,X,Q,gt){var Qt=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Qt!==null?null:A(Z,X,""+Q,gt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===Qt?z(Z,X,Q,gt):null;case T:return Q.key===Qt?$(Z,X,Q,gt):null;case b:return Q=pr(Q),nt(Z,X,Q,gt)}if(j(Q)||J(Q))return Qt!==null?null:ft(Z,X,Q,gt,null);if(typeof Q.then=="function")return nt(Z,X,ml(Q),gt);if(Q.$$typeof===P)return nt(Z,X,fl(Z,Q),gt);gl(Z,Q)}return null}function ot(Z,X,Q,gt,Qt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get(Q)||null,A(X,Z,""+gt,Qt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case E:return Z=Z.get(gt.key===null?Q:gt.key)||null,z(X,Z,gt,Qt);case T:return Z=Z.get(gt.key===null?Q:gt.key)||null,$(X,Z,gt,Qt);case b:return gt=pr(gt),ot(Z,X,Q,gt,Qt)}if(j(gt)||J(gt))return Z=Z.get(Q)||null,ft(X,Z,gt,Qt,null);if(typeof gt.then=="function")return ot(Z,X,Q,ml(gt),Qt);if(gt.$$typeof===P)return ot(Z,X,Q,fl(X,gt),Qt);gl(X,gt)}return null}function Gt(Z,X,Q,gt){for(var Qt=null,Re=null,Yt=X,ce=X=0,ve=null;Yt!==null&&ce<Q.length;ce++){Yt.index>ce?(ve=Yt,Yt=null):ve=Yt.sibling;var Ce=nt(Z,Yt,Q[ce],gt);if(Ce===null){Yt===null&&(Yt=ve);break}t&&Yt&&Ce.alternate===null&&n(Z,Yt),X=f(Ce,X,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce,Yt=ve}if(ce===Q.length)return a(Z,Yt),xe&&qi(Z,ce),Qt;if(Yt===null){for(;ce<Q.length;ce++)Yt=vt(Z,Q[ce],gt),Yt!==null&&(X=f(Yt,X,ce),Re===null?Qt=Yt:Re.sibling=Yt,Re=Yt);return xe&&qi(Z,ce),Qt}for(Yt=s(Yt);ce<Q.length;ce++)ve=ot(Yt,Z,ce,Q[ce],gt),ve!==null&&(t&&ve.alternate!==null&&Yt.delete(ve.key===null?ce:ve.key),X=f(ve,X,ce),Re===null?Qt=ve:Re.sibling=ve,Re=ve);return t&&Yt.forEach(function(Ya){return n(Z,Ya)}),xe&&qi(Z,ce),Qt}function Jt(Z,X,Q,gt){if(Q==null)throw Error(r(151));for(var Qt=null,Re=null,Yt=X,ce=X=0,ve=null,Ce=Q.next();Yt!==null&&!Ce.done;ce++,Ce=Q.next()){Yt.index>ce?(ve=Yt,Yt=null):ve=Yt.sibling;var Ya=nt(Z,Yt,Ce.value,gt);if(Ya===null){Yt===null&&(Yt=ve);break}t&&Yt&&Ya.alternate===null&&n(Z,Yt),X=f(Ya,X,ce),Re===null?Qt=Ya:Re.sibling=Ya,Re=Ya,Yt=ve}if(Ce.done)return a(Z,Yt),xe&&qi(Z,ce),Qt;if(Yt===null){for(;!Ce.done;ce++,Ce=Q.next())Ce=vt(Z,Ce.value,gt),Ce!==null&&(X=f(Ce,X,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return xe&&qi(Z,ce),Qt}for(Yt=s(Yt);!Ce.done;ce++,Ce=Q.next())Ce=ot(Yt,Z,ce,Ce.value,gt),Ce!==null&&(t&&Ce.alternate!==null&&Yt.delete(Ce.key===null?ce:Ce.key),X=f(Ce,X,ce),Re===null?Qt=Ce:Re.sibling=Ce,Re=Ce);return t&&Yt.forEach(function(aS){return n(Z,aS)}),xe&&qi(Z,ce),Qt}function Ie(Z,X,Q,gt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:t:{for(var Qt=Q.key;X!==null;){if(X.key===Qt){if(Qt=Q.type,Qt===C){if(X.tag===7){a(Z,X.sibling),gt=u(X,Q.props.children),gt.return=Z,Z=gt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===b&&pr(Qt)===X.type){a(Z,X.sibling),gt=u(X,Q.props),eo(gt,Q),gt.return=Z,Z=gt;break t}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===C?(gt=ur(Q.props.children,Z.mode,gt,Q.key),gt.return=Z,Z=gt):(gt=ll(Q.type,Q.key,Q.props,null,Z.mode,gt),eo(gt,Q),gt.return=Z,Z=gt)}return g(Z);case T:t:{for(Qt=Q.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),gt=u(X,Q.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,X);break}else n(Z,X);X=X.sibling}gt=cc(Q,Z.mode,gt),gt.return=Z,Z=gt}return g(Z);case b:return Q=pr(Q),Ie(Z,X,Q,gt)}if(j(Q))return Gt(Z,X,Q,gt);if(J(Q)){if(Qt=J(Q),typeof Qt!="function")throw Error(r(150));return Q=Qt.call(Q),Jt(Z,X,Q,gt)}if(typeof Q.then=="function")return Ie(Z,X,ml(Q),gt);if(Q.$$typeof===P)return Ie(Z,X,fl(Z,Q),gt);gl(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),gt=u(X,Q),gt.return=Z,Z=gt):(a(Z,X),gt=uc(Q,Z.mode,gt),gt.return=Z,Z=gt),g(Z)):a(Z,X)}return function(Z,X,Q,gt){try{to=0;var Qt=Ie(Z,X,Q,gt);return Jr=null,Qt}catch(Yt){if(Yt===Qr||Yt===hl)throw Yt;var Re=qn(29,Yt,null,Z.mode);return Re.lanes=gt,Re.return=Z,Re}}}var gr=Dp(!0),wp=Dp(!1),wa=!1;function yc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ec(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function La(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=ol(t),hp(t,null,a),n}return sl(t,s,n,a),ol(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Nr(t,a)}}function Tc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bc=!1;function io(){if(bc){var t=Kr;if(t!==null)throw t}}function ao(t,n,a,s){bc=!1;var u=t.updateQueue;wa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,$=z.next;z.next=null,g===null?f=$:g.next=$,g=z;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==g&&(A===null?ft.firstBaseUpdate=$:A.next=$,ft.lastBaseUpdate=z))}if(f!==null){var vt=u.baseState;g=0,ft=$=z=null,A=f;do{var nt=A.lane&-536870913,ot=nt!==A.lane;if(ot?(_e&nt)===nt:(s&nt)===nt){nt!==0&&nt===jr&&(bc=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=t,Jt=A;nt=n;var Ie=a;switch(Jt.tag){case 1:if(Gt=Jt.payload,typeof Gt=="function"){vt=Gt.call(Ie,vt,nt);break t}vt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=Jt.payload,nt=typeof Gt=="function"?Gt.call(Ie,vt,nt):Gt,nt==null)break t;vt=S({},vt,nt);break t;case 2:wa=!0}}nt=A.callback,nt!==null&&(t.flags|=64,ot&&(t.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?($=ft=ot,z=vt):ft=ft.next=ot,g|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ft===null&&(z=vt),u.baseState=z,u.firstBaseUpdate=$,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ba|=g,t.lanes=g,t.memoizedState=vt}}function Up(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Lp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Up(a[t],n)}var $r=O(null),_l=O(0);function Np(t,n){t=ia,mt(_l,t),mt($r,n),ia=t|n.baseLanes}function Ac(){mt(_l,ia),mt($r,$r.current)}function Rc(){ia=_l.current,Y($r),Y(_l)}var Yn=O(null),si=null;function Na(t){var n=t.alternate;mt(Je,Je.current&1),mt(Yn,t),si===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(si=t)}function Cc(t){mt(Je,Je.current),mt(Yn,t),si===null&&(si=t)}function Op(t){t.tag===22?(mt(Je,Je.current),mt(Yn,t),si===null&&(si=t)):Oa()}function Oa(){mt(Je,Je.current),mt(Yn,Yn.current)}function Zn(t){Y(Yn),si===t&&(si=null),Y(Je)}var Je=O(0);function vl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,oe=null,Be=null,sn=null,xl=!1,ts=!1,_r=!1,Sl=0,ro=0,es=null,Zv=0;function Ke(){throw Error(r(321))}function Dc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function wc(t,n,a,s,u,f){return ji=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=t===null||t.memoizedState===null?_m:Wc,_r=!1,f=a(s,u),_r=!1,ts&&(f=Fp(n,a,s,u)),Pp(t),f}function Pp(t){w.H=lo;var n=Be!==null&&Be.next!==null;if(ji=0,sn=Be=oe=null,xl=!1,ro=0,es=null,n)throw Error(r(300));t===null||on||(t=t.dependencies,t!==null&&cl(t)&&(on=!0))}function Fp(t,n,a,s){oe=t;var u=0;do{if(ts&&(es=null),ro=0,ts=!1,25<=u)throw Error(r(301));if(u+=1,sn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=vm,f=n(a,s)}while(ts);return f}function jv(){var t=w.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(oe.flags|=1024),n}function Uc(){var t=Sl!==0;return Sl=0,t}function Lc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Nc(t){if(xl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}xl=!1}ji=0,sn=Be=oe=null,ts=!1,ro=Sl=0,es=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?oe.memoizedState=sn=t:sn=sn.next=t,sn}function $e(){if(Be===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=sn===null?oe.memoizedState:sn.next;if(n!==null)sn=n,Be=t;else{if(t===null)throw oe.alternate===null?Error(r(467)):Error(r(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},sn===null?oe.memoizedState=sn=t:sn=sn.next=t}return sn}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,es===null&&(es=[]),t=Ap(es,t,n),n=oe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?_m:Wc),t}function yl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===P)return Sn(t)}throw Error(r(438,String(t)))}function Oc(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=ht;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function El(t){var n=$e();return Pc(n,Be,t)}function Pc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=g=null,z=null,$=n,ft=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(_e&vt)===vt:(ji&vt)===vt){var nt=$.revertLane;if(nt===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===jr&&(ft=!0);else if((ji&nt)===nt){$=$.next,nt===jr&&(ft=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=vt,g=f):z=z.next=vt,oe.lanes|=nt,Ba|=nt;vt=$.action,_r&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else nt={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(A=z=nt,g=f):z=z.next=nt,oe.lanes|=vt,Ba|=vt;$=$.next}while($!==null&&$!==n);if(z===null?g=f:z.next=A,!Wn(f,t.memoizedState)&&(on=!0,ft&&(a=Kr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Fc(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Wn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Bp(t,n,a){var s=oe,u=$e(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Be||u).memoizedState,a);if(g&&(u.memoizedState=a,on=!0),u=u.queue,Ic(Hp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||sn!==null&&sn.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},Ip.bind(null,s,u,a,n),null),Ge===null)throw Error(r(349));f||(ji&127)!==0||zp(s,n,a)}return a}function zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Ml(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ip(t,n,a,s){n.value=a,n.getSnapshot=s,Gp(n)&&Vp(t)}function Hp(t,n,a){return a(function(){Gp(n)&&Vp(t)})}function Gp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Vp(t){var n=lr(t,2);n!==null&&Hn(n,t,2)}function Bc(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),_r){Pt(!0);try{a()}finally{Pt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function Xp(t,n,a,s){return t.baseState=a,Pc(t,Be,typeof s=="function"?s:Ki)}function Kv(t,n,a,s,u){if(Al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};w.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kp(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=w.T,g={};w.T=g;try{var A=a(u,s),z=w.S;z!==null&&z(g,A),Wp(t,n,A)}catch($){zc(t,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),w.T=f}}else try{f=a(u,s),Wp(t,n,f)}catch($){zc(t,n,$)}}function Wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){qp(t,n,s)},function(s){return zc(t,n,s)}):qp(t,n,a)}function qp(t,n,a){n.status="fulfilled",n.value=a,Yp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kp(t,a)))}function zc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Yp(n),n=n.next;while(n!==s)}t.action=null}function Yp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Zp(t,n){return n}function jp(t,n){if(xe){var a=Ge.formState;if(a!==null){t:{var s=oe;if(xe){if(Xe){e:{for(var u=Xe,f=ri;u.nodeType!==8;){if(!f){u=null;break e}if(u=oi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xe=oi(u.nextSibling),s=u.data==="F!";break t}}Ca(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:n},a.queue=s,a=pm.bind(null,oe,s),s.dispatch=a,s=Bc(!1),f=kc.bind(null,oe,!1,s.queue),s=Ln(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Kv.bind(null,oe,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Kp(t){var n=$e();return Qp(n,Be,t)}function Qp(t,n,a){if(n=Pc(t,n,Zp)[0],t=El(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=so(n)}catch(g){throw g===Qr?hl:g}else s=n;n=$e();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ns(9,{destroy:void 0},Qv.bind(null,u,a),null)),[s,f,t]}function Qv(t,n){t.action=n}function Jp(t){var n=$e(),a=Be;if(a!==null)return Qp(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Ml(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function $p(){return $e().memoizedState}function Tl(t,n,a,s){var u=Ln();oe.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function bl(t,n,a,s){var u=$e();s=s===void 0?null:s;var f=u.memoizedState.inst;Be!==null&&s!==null&&Dc(s,Be.memoizedState.deps)?u.memoizedState=ns(n,f,a,s):(oe.flags|=t,u.memoizedState=ns(1|n,f,a,s))}function tm(t,n){Tl(8390656,8,t,n)}function Ic(t,n){bl(2048,8,t,n)}function Jv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Ml(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function em(t){var n=$e().memoizedState;return Jv({ref:n,nextImpl:t}),function(){if((we&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function nm(t,n){return bl(4,2,t,n)}function im(t,n){return bl(4,4,t,n)}function am(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function rm(t,n,a){a=a!=null?a.concat([t]):null,bl(4,4,am.bind(null,n,t),a)}function Hc(){}function sm(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Dc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function om(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Dc(n,s[1]))return s[0];if(s=t(),_r){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s}function Gc(t,n,a){return a===void 0||(ji&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=lg(),oe.lanes|=t,Ba|=t,a)}function lm(t,n,a,s){return Wn(a,n)?a:$r.current!==null?(t=Gc(t,a,s),Wn(t,n)||(on=!0),t):(ji&42)===0||(ji&1073741824)!==0&&(_e&261930)===0?(on=!0,t.memoizedState=a):(t=lg(),oe.lanes|=t,Ba|=t,n)}function um(t,n,a,s,u){var f=F.p;F.p=f!==0&&8>f?f:8;var g=w.T,A={};w.T=A,kc(t,!1,n,a);try{var z=u(),$=w.S;if($!==null&&$(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ft=Yv(z,s);oo(t,n,ft,Qn(t))}else oo(t,n,s,Qn(t))}catch(vt){oo(t,n,{then:function(){},status:"rejected",reason:vt},Qn())}finally{F.p=f,g!==null&&A.types!==null&&(g.types=A.types),w.T=g}}function $v(){}function Vc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=cm(t).queue;um(t,u,n,lt,a===null?$v:function(){return fm(t),a(s)})}function cm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function fm(t){var n=cm(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Qn())}function Xc(){return Sn(bo)}function dm(){return $e().memoizedState}function hm(){return $e().memoizedState}function tx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=Ua(a);var s=La(n,t,a);s!==null&&(Hn(s,n,a),no(s,n,a)),n={cache:vc()},t.payload=n;return}n=n.return}}function ex(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(t)?mm(n,a):(a=oc(t,n,a,s),a!==null&&(Hn(a,t,s),gm(a,n,s)))}function pm(t,n,a){var s=Qn();oo(t,n,a,s)}function oo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(t))mm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,A=f(g,a);if(u.hasEagerState=!0,u.eagerState=A,Wn(A,g))return sl(t,n,u,0),Ge===null&&rl(),!1}catch{}if(a=oc(t,n,u,s),a!==null)return Hn(a,t,s),gm(a,n,s),!0}return!1}function kc(t,n,a,s){if(s={lane:2,revertLane:Ef(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Al(t)){if(n)throw Error(r(479))}else n=oc(t,a,s,2),n!==null&&Hn(n,t,2)}function Al(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function mm(t,n){ts=xl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function gm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Nr(t,a)}}var lo={readContext:Sn,use:yl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke};lo.useEffectEvent=Ke;var _m={readContext:Sn,use:yl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:tm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Tl(4194308,4,am.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Tl(4194308,4,t,n)},useInsertionEffect:function(t,n){Tl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(_r){Pt(!0);try{t()}finally{Pt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var u=a(n);if(_r){Pt(!0);try{a(n)}finally{Pt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=ex.bind(null,oe,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Bc(t);var n=t.queue,a=pm.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Hc,useDeferredValue:function(t,n){var a=Ln();return Gc(a,t,n)},useTransition:function(){var t=Bc(!1);return t=um.bind(null,oe,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=oe,u=Ln();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ge===null)throw Error(r(349));(_e&127)!==0||zp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,tm(Hp.bind(null,s,f,t),[t]),s.flags|=2048,ns(9,{destroy:void 0},Ip.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ge.identifierPrefix;if(xe){var a=Ci,s=Ri;a=(s&~(1<<32-Nt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Zv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Xc,useFormState:jp,useActionState:jp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=kc.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Oc,useCacheRefresh:function(){return Ln().memoizedState=tx.bind(null,oe)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((we&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Wc={readContext:Sn,use:yl,useCallback:sm,useContext:Sn,useEffect:Ic,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:El,useRef:$p,useState:function(){return El(Ki)},useDebugValue:Hc,useDeferredValue:function(t,n){var a=$e();return lm(a,Be.memoizedState,t,n)},useTransition:function(){var t=El(Ki)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:Xc,useFormState:Kp,useActionState:Kp,useOptimistic:function(t,n){var a=$e();return Xp(a,Be,t,n)},useMemoCache:Oc,useCacheRefresh:hm};Wc.useEffectEvent=em;var vm={readContext:Sn,use:yl,useCallback:sm,useContext:Sn,useEffect:Ic,useImperativeHandle:rm,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Fc,useRef:$p,useState:function(){return Fc(Ki)},useDebugValue:Hc,useDeferredValue:function(t,n){var a=$e();return Be===null?Gc(a,t,n):lm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Fc(Ki)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:Bp,useId:dm,useHostTransitionStatus:Xc,useFormState:Jp,useActionState:Jp,useOptimistic:function(t,n){var a=$e();return Be!==null?Xp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Oc,useCacheRefresh:hm};vm.useEffectEvent=em;function qc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=La(t,u,s),n!==null&&(Hn(n,t,s),no(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(t,u,s),n!==null&&(Hn(n,t,s),no(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=La(t,s,a),n!==null&&(Hn(n,t,a),no(n,t,a))}};function xm(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Zs(a,s)||!Zs(u,f):!0}function Sm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Yc.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Mm(t){al(t)}function ym(t){console.error(t)}function Em(t){al(t)}function Rl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Tm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Zc(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(t,n)},a}function bm(t){return t=Ua(t),t.tag=3,t}function Am(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Tm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Tm(n,a,s),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function nx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Zr(n,a,u,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Il():a.alternate===null&&Qe===0&&(Qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Sf(t,s,u)),!1;case 22:return a.flags|=65536,s===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Sf(t,s,u)),!1}throw Error(r(435,a.tag))}return Sf(t,s,u),Il(),!1}if(xe)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==hc&&(t=Error(r(422),{cause:s}),Qs(ni(t,a)))):(s!==hc&&(n=Error(r(423),{cause:s}),Qs(ni(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=ni(s,a),u=Zc(t.stateNode,s,u),Tc(t,u),Qe!==4&&(Qe=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),_o===null?_o=[f]:_o.push(f),Qe!==4&&(Qe=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Zc(a.stateNode,s,t),Tc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=bm(u),Am(u,t,a,s),Tc(a,u),!1}a=a.return}while(a!==null);return!1}var jc=Error(r(461)),on=!1;function Mn(t,n,a,s){n.child=t===null?wp(n,null,a,s):gr(n,t.child,a,s)}function Rm(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var A in s)A!=="ref"&&(g[A]=s[A])}else g=s;return dr(n),s=wc(t,n,a,g,f,u),A=Uc(),t!==null&&!on?(Lc(t,n,u),Qi(t,n,u)):(xe&&A&&fc(n),n.flags|=1,Mn(t,n,s,u),n.child)}function Cm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!lc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Dm(t,n,f,s,u)):(t=ll(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!af(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zs,a(g,s)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Dm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Zs(f,s)&&t.ref===n.ref)if(on=!1,n.pendingProps=s=f,af(t,u))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return Kc(t,n,a,s,u)}function wm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Um(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Np(n,f):Ac(),Op(n);else return s=n.lanes=536870912,Um(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(dl(n,f.cachePool),Np(n,f),Oa(),n.memoizedState=null):(t!==null&&dl(n,null),Ac(),Oa());return Mn(t,n,u,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Um(t,n,a,s,u){var f=Sc();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Ac(),Op(n),t!==null&&Zr(t,n,s,!0),n.childLanes=u,null}function Cl(t,n){return n=wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Lm(t,n,a){return gr(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,Zn(n),n.memoizedState=null,t}function ix(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=Cl(n,s),n.lanes=536870912,uo(null,t);if(Cc(n),(t=Xe)?(t=kg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Ca(n);return n.lanes=536870912,null}return Cl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Cc(n),u)if(n.flags&256)n.flags&=-257,n=Lm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Zr(t,n,a,!1),u=(a&t.childLanes)!==0,on||u){if(s=Ge,s!==null&&(g=Yo(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,lr(t,g),Hn(s,t,g),jc;Il(),n=Lm(t,n,a)}else t=f.treeContext,Xe=oi(g.nextSibling),xn=n,xe=!0,Ra=null,ri=!1,t!==null&&vp(n,t),n=Cl(n,s),n.flags|=4096;return n}return t=Wi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Kc(t,n,a,s,u){return dr(n),a=wc(t,n,a,s,void 0,u),s=Uc(),t!==null&&!on?(Lc(t,n,u),Qi(t,n,u)):(xe&&s&&fc(n),n.flags|=1,Mn(t,n,a,u),n.child)}function Nm(t,n,a,s,u,f){return dr(n),n.updateQueue=null,a=Fp(n,s,a,u),Pp(t),s=Uc(),t!==null&&!on?(Lc(t,n,f),Qi(t,n,f)):(xe&&s&&fc(n),n.flags|=1,Mn(t,n,a,f),n.child)}function Om(t,n,a,s,u){if(dr(n),n.stateNode===null){var f=kr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Yc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},yc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):kr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(qc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Yc.enqueueReplaceState(f,f.state,null),ao(n,s,f,u),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,z=vr(a,A);f.props=z;var $=f.context,ft=a.contextType;g=kr,typeof ft=="object"&&ft!==null&&(g=Sn(ft));var vt=a.getDerivedStateFromProps;ft=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==g)&&Sm(n,f,s,g),wa=!1;var nt=n.memoizedState;f.state=nt,ao(n,s,f,u),io(),$=n.memoizedState,A||nt!==$||wa?(typeof vt=="function"&&(qc(n,a,vt,s),$=n.memoizedState),(z=wa||xm(n,a,z,s,nt,$,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Ec(t,n),g=n.memoizedProps,ft=vr(a,g),f.props=ft,vt=n.pendingProps,nt=f.context,$=a.contextType,z=kr,typeof $=="object"&&$!==null&&(z=Sn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==vt||nt!==z)&&Sm(n,f,s,z),wa=!1,nt=n.memoizedState,f.state=nt,ao(n,s,f,u),io();var ot=n.memoizedState;g!==vt||nt!==ot||wa||t!==null&&t.dependencies!==null&&cl(t.dependencies)?(typeof A=="function"&&(qc(n,a,A,s),ot=n.memoizedState),(ft=wa||xm(n,a,ft,s,nt,ot,z)||t!==null&&t.dependencies!==null&&cl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ot,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ot,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ot),f.props=s,f.state=ot,f.context=z,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&nt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Qi(t,n,u),t}function Pm(t,n,a,s){return cr(),n.flags|=256,Mn(t,n,a,s),n.child}var Qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(t){return{baseLanes:t,cachePool:Tp()}}function $c(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function Fm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(u?Na(n):Oa(),(t=Xe)?(t=kg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=mp(t),a.return=n,n.child=a,xn=n,Xe=null)):t=null,t===null)throw Ca(n);return Ff(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(Oa(),u=n.mode,A=wl({mode:"hidden",children:A},u),s=ur(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=Jc(a),s.childLanes=$c(t,g,a),n.memoizedState=Qc,uo(null,s)):(Na(n),tf(n,A))}var z=t.memoizedState;if(z!==null&&(A=z.dehydrated,A!==null)){if(f)n.flags&256?(Na(n),n.flags&=-257,n=ef(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),A=s.fallback,u=n.mode,s=wl({mode:"visible",children:s.children},u),A=ur(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,gr(n,t.child,null,a),s=n.child,s.memoizedState=Jc(a),s.childLanes=$c(t,g,a),n.memoizedState=Qc,n=uo(null,s));else if(Na(n),Ff(A)){if(g=A.nextSibling&&A.nextSibling.dataset,g)var $=g.dgst;g=$,s=Error(r(419)),s.stack="",s.digest=g,Qs({value:s,source:null,stack:null}),n=ef(t,n,a)}else if(on||Zr(t,n,a,!1),g=(a&t.childLanes)!==0,on||g){if(g=Ge,g!==null&&(s=Yo(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,lr(t,s),Hn(g,t,s),jc;Pf(A)||Il(),n=ef(t,n,a)}else Pf(A)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Xe=oi(A.nextSibling),xn=n,xe=!0,Ra=null,ri=!1,t!==null&&vp(n,t),n=tf(n,s.children),n.flags|=4096);return n}return u?(Oa(),A=s.fallback,u=n.mode,z=t.child,$=z.sibling,s=Wi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,$!==null?A=Wi($,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,uo(null,s),s=n.child,A=t.child.memoizedState,A===null?A=Jc(a):(u=A.cachePool,u!==null?(z=rn._currentValue,u=u.parent!==z?{parent:z,pool:z}:u):u=Tp(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=$c(t,g,a),n.memoizedState=Qc,uo(t.child,s)):(Na(n),a=t.child,t=a.sibling,a=Wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function tf(t,n){return n=wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function wl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function ef(t,n,a){return gr(n,t.child,null,a),t=tf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Bm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),gc(t.return,n,a)}function nf(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function zm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Je.current,A=(g&2)!==0;if(A?(g=g&1|2,n.flags|=128):g&=1,mt(Je,g),Mn(t,n,s,a),s=xe?Ks:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bm(t,a,n);else if(t.tag===19)Bm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&vl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),nf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&vl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}nf(n,!0,a,null,f,s);break;case"together":nf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Zr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function af(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&cl(t)))}function ax(t,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),Da(n,rn,t.memoizedState.cache),cr();break;case 27:case 5:Wt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Cc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fm(t,n,a):(Na(n),t=Qi(t,n,a),t!==null?t.sibling:null);Na(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Zr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return zm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(Je,Je.current),s)break;return null;case 22:return n.lanes=0,wm(t,n,a,n.pendingProps);case 24:Da(n,rn,t.memoizedState.cache)}return Qi(t,n,a)}function Im(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!af(t,a)&&(n.flags&128)===0)return on=!1,ax(t,n,a);on=(t.flags&131072)!==0}else on=!1,xe&&(n.flags&1048576)!==0&&_p(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")lc(t)?(s=vr(t,s),n.tag=1,n=Om(null,n,t,s,a)):(n.tag=0,n=Kc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=Rm(null,n,t,s,a);break t}else if(u===B){n.tag=14,n=Cm(null,n,t,s,a);break t}}throw n=st(t)||t,Error(r(306,n,""))}}return n;case 0:return Kc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),Om(t,n,s,u,a);case 3:t:{if(St(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Ec(t,n),ao(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Da(n,rn,s),s!==f.cache&&_c(n,[rn],a,!0),io(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Pm(t,n,s,a);break t}else if(s!==u){u=ni(Error(r(424)),n),Qs(u),n=Pm(t,n,s,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xe=oi(t.firstChild),xn=n,xe=!0,Ra=null,ri=!0,a=wp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(cr(),s===u){n=Qi(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=Kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=ql(tt.current).createElement(a),s[en]=n,s[fn]=t,yn(s,a,t),k(s),n.stateNode=s):n.memoizedState=Kg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Wt(n),t===null&&xe&&(s=n.stateNode=Yg(n.type,n.pendingProps,tt.current),xn=n,ri=!0,u=Xe,Va(n.type)?(Bf=u,Xe=oi(s.firstChild)):Xe=u),Mn(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((u=s=Xe)&&(s=Ox(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,xn=n,Xe=oi(s.firstChild),ri=!1,u=!0):u=!1),u||Ca(n)),Wt(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Lf(u,f)?s=null:g!==null&&Lf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=wc(t,n,jv,null,null,a),bo._currentValue=u),Dl(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=Xe)&&(a=Px(a,n.pendingProps,ri),a!==null?(n.stateNode=a,xn=n,Xe=null,t=!0):t=!1),t||Ca(n)),null;case 13:return Fm(t,n,a);case 4:return St(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=gr(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return Rm(t,n,n.type,n.pendingProps,a);case 7:return Mn(t,n,n.pendingProps,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Da(n,n.type,s.value),Mn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,dr(n),u=Sn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return Cm(t,n,n.type,n.pendingProps,a);case 15:return Dm(t,n,n.type,n.pendingProps,a);case 19:return zm(t,n,a);case 31:return ix(t,n,a);case 22:return wm(t,n,a,n.pendingProps);case 24:return dr(n),s=Sn(rn),t===null?(u=Sc(),u===null&&(u=Ge,f=vc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},yc(n),Da(n,rn,u)):((t.lanes&a)!==0&&(Ec(t,n),ao(n,null,null,a),io()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,rn,s)):(s=f.cache,Da(n,rn,s),s!==u.cache&&_c(n,[rn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function rf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(dg())t.flags|=8192;else throw mr=pl,Mc}else t.flags&=-16777217}function Hm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!e0(n))if(dg())t.flags|=8192;else throw mr=pl,Mc}function Ul(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,ss|=n)}function co(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function rx(t,n,a){var s=n.pendingProps;switch(dc(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Zi(rn),Ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,pc())),ke(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ji(n),f!==null?(ke(n),Hm(n,f)):(ke(n),rf(n,u,null,s,a))):f?f!==t.memoizedState?(Ji(n),ke(n),Hm(n,f)):(ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ji(n),ke(n),rf(n,u,t,s,a)),null;case 27:if(jt(n),a=tt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=bt.current,Yr(n)?xp(n):(t=Yg(u,s,a),n.stateNode=t,Ji(n))}return ke(n),null;case 5:if(jt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(f=bt.current,Yr(n))xp(n);else{var g=ql(tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[en]=n,f[fn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(yn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ji(n)}}return ke(n),rf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=tt.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=xn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Fg(t.nodeValue,a)),t||Ca(n,!0)}else t=ql(t).createTextNode(s),t[en]=n,n.stateNode=t}return ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Yr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[en]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),t=!1}else a=pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Zn(n),n):(Zn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),u=!1}else u=pc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zn(n),n):(Zn(n),null)}return Zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),ke(n),null);case 4:return Ut(),t===null&&Rf(n.stateNode.containerInfo),ke(n),null;case 10:return Zi(n.type),ke(n),null;case 19:if(Y(Je),s=n.memoizedState,s===null)return ke(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)co(s,!1);else{if(Qe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=vl(t),f!==null){for(n.flags|=128,co(s,!1),t=f.updateQueue,n.updateQueue=t,Ul(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)pp(a,t),a=a.sibling;return mt(Je,Je.current&1|2),xe&&qi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&y()>Fl&&(n.flags|=128,u=!0,co(s,!1),n.lanes=4194304)}else{if(!u)if(t=vl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ul(n,t),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return ke(n),null}else 2*y()-s.renderingStartTime>Fl&&a!==536870912&&(n.flags|=128,u=!0,co(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=y(),t.sibling=null,a=Je.current,mt(Je,u?a&1|2:a&1),xe&&qi(n,s.treeForkCount),t):(ke(n),null);case 22:case 23:return Zn(n),Rc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Y(hr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zi(rn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function sx(t,n){switch(dc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Zi(rn),Ut(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return jt(n),null;case 31:if(n.memoizedState!==null){if(Zn(n),n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Zn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(Je),null;case 4:return Ut(),null;case 10:return Zi(n.type),null;case 22:case 23:return Zn(n),Rc(),t!==null&&Y(hr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Zi(rn),null;case 25:return null;default:return null}}function Gm(t,n){switch(dc(n),n.tag){case 3:Zi(rn),Ut();break;case 26:case 27:case 5:jt(n);break;case 4:Ut();break;case 31:n.memoizedState!==null&&Zn(n);break;case 13:Zn(n);break;case 19:Y(Je);break;case 10:Zi(n.type);break;case 22:case 23:Zn(n),Rc(),t!==null&&Y(hr);break;case 24:Zi(rn)}}function fo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(A){Pe(n,n.return,A)}}function Pa(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,A=g.destroy;if(A!==void 0){g.destroy=void 0,u=n;var z=a,$=A;try{$()}catch(ft){Pe(u,z,ft)}}}s=s.next}while(s!==f)}}catch(ft){Pe(n,n.return,ft)}}function Vm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Lp(n,a)}catch(s){Pe(t,t.return,s)}}}function Xm(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Pe(t,n,u)}}function Di(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Pe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(t,n,u)}else a.current=null}function km(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Pe(t,t.return,u)}}function sf(t,n,a){try{var s=t.stateNode;Cx(s,t.type,a,n),s[fn]=n}catch(u){Pe(t,t.return,u)}}function Wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function of(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Xi));else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(lf(t,n,a),t=t.sibling;t!==null;)lf(t,n,a),t=t.sibling}function Ll(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Ll(t,n,a),t=t.sibling;t!==null;)Ll(t,n,a),t=t.sibling}function qm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);yn(n,s,a),n[en]=t,n[fn]=a}catch(f){Pe(t,t.return,f)}}var $i=!1,ln=!1,uf=!1,Ym=typeof WeakSet=="function"?WeakSet:Set,_n=null;function ox(t,n){if(t=t.containerInfo,wf=$l,t=rp(t),ec(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,A=-1,z=-1,$=0,ft=0,vt=t,nt=null;e:for(;;){for(var ot;vt!==a||u!==0&&vt.nodeType!==3||(A=g+u),vt!==f||s!==0&&vt.nodeType!==3||(z=g+s),vt.nodeType===3&&(g+=vt.nodeValue.length),(ot=vt.firstChild)!==null;)nt=vt,vt=ot;for(;;){if(vt===t)break e;if(nt===a&&++$===u&&(A=g),nt===f&&++ft===s&&(z=g),(ot=vt.nextSibling)!==null)break;vt=nt,nt=vt.parentNode}vt=ot}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uf={focusedElem:t,selectionRange:a},$l=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=vr(a.type,u);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){Pe(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Of(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Of(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function Zm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ea(t,a),s&4&&fo(5,a);break;case 1:if(ea(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Pe(a,a.return,g)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(a,a.return,g)}}s&64&&Vm(a),s&512&&ho(a,a.return);break;case 3:if(ea(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lp(t,n)}catch(g){Pe(a,a.return,g)}}break;case 27:n===null&&s&4&&qm(a);case 26:case 5:ea(t,a),n===null&&s&4&&km(a),s&512&&ho(a,a.return);break;case 12:ea(t,a);break;case 31:ea(t,a),s&4&&Qm(t,a);break;case 13:ea(t,a),s&4&&Jm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=gx.bind(null,a),Fx(t,a))));break;case 22:if(s=a.memoizedState!==null||$i,!s){n=n!==null&&n.memoizedState!==null||ln,u=$i;var f=ln;$i=s,(ln=n)&&!f?na(t,a,(a.subtreeFlags&8772)!==0):ea(t,a),$i=u,ln=f}break;case 30:break;default:ea(t,a)}}function jm(t){var n=t.alternate;n!==null&&(t.alternate=null,jm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Hs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,Fn=!1;function ta(t,n,a){for(a=a.child;a!==null;)Km(t,n,a),a=a.sibling}function Km(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:ln||Di(a,n),ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Di(a,n);var s=Ze,u=Fn;Va(a.type)&&(Ze=a.stateNode,Fn=!1),ta(t,n,a),yo(a.stateNode),Ze=s,Fn=u;break;case 5:ln||Di(a,n);case 6:if(s=Ze,u=Fn,Ze=null,ta(t,n,a),Ze=s,Fn=u,Ze!==null)if(Fn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ze!==null&&(Fn?(t=Ze,Vg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):Vg(Ze,a.stateNode));break;case 4:s=Ze,u=Fn,Ze=a.stateNode.containerInfo,Fn=!0,ta(t,n,a),Ze=s,Fn=u;break;case 0:case 11:case 14:case 15:Pa(2,a,n),ln||Pa(4,a,n),ta(t,n,a);break;case 1:ln||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Xm(a,n,s)),ta(t,n,a);break;case 21:ta(t,n,a);break;case 22:ln=(s=ln)||a.memoizedState!==null,ta(t,n,a),ln=s;break;default:ta(t,n,a)}}function Qm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Pe(n,n.return,a)}}}function Jm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Pe(n,n.return,a)}}function lx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ym),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ym),n;default:throw Error(r(435,t.tag))}}function Nl(t,n){var a=lx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=_x.bind(null,t,s);s.then(u,u)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,A=g;t:for(;A!==null;){switch(A.tag){case 27:if(Va(A.type)){Ze=A.stateNode,Fn=!1;break t}break;case 5:Ze=A.stateNode,Fn=!1;break t;case 3:case 4:Ze=A.stateNode.containerInfo,Fn=!0;break t}A=A.return}if(Ze===null)throw Error(r(160));Km(f,g,u),Ze=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)$m(n,t),n=n.sibling}var _i=null;function $m(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),zn(t),s&4&&(Pa(3,t,t.return),fo(3,t),Pa(5,t,t.return));break;case 1:Bn(n,t),zn(t),s&512&&(ln||a===null||Di(a,a.return)),s&64&&$i&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=_i;if(Bn(n,t),zn(t),s&512&&(ln||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),yn(f,s,a),f[en]=t,k(f),s=f;break t;case"link":var g=$g("link","href",u).get(s+(a.href||""));if(g){for(var A=0;A<g.length;A++)if(f=g[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(A,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=$g("meta","content",u).get(s+(a.content||""))){for(A=0;A<g.length;A++)if(f=g[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(A,1);break e}}f=u.createElement(s),yn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,k(f),s=f}t.stateNode=s}else t0(u,t.type,t.stateNode);else t.stateNode=Jg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?t0(u,t.type,t.stateNode):Jg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&sf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),zn(t),s&512&&(ln||a===null||Di(a,a.return)),a!==null&&s&4&&sf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),zn(t),s&512&&(ln||a===null||Di(a,a.return)),t.flags&32){u=t.stateNode;try{Un(u,"")}catch(Gt){Pe(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,sf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(uf=!0);break;case 6:if(Bn(n,t),zn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Pe(t,t.return,Gt)}}break;case 3:if(jl=null,u=_i,_i=Yl(n.containerInfo),Bn(n,t),_i=u,zn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(Gt){Pe(t,t.return,Gt)}uf&&(uf=!1,tg(t));break;case 4:s=_i,_i=Yl(t.stateNode.containerInfo),Bn(n,t),zn(t),_i=s;break;case 12:Bn(n,t),zn(t);break;case 31:Bn(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 13:Bn(n,t),zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=y()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 22:u=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,$=$i,ft=ln;if($i=$||u,ln=ft||z,Bn(n,t),ln=ft,$i=$,zn(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||$i||ln||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{A=z.stateNode;var vt=z.memoizedProps.style,nt=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Pe(z,z.return,Gt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(Gt){Pe(z,z.return,Gt)}}}else if(n.tag===18){if(a===null){z=n;try{var ot=z.stateNode;u?Xg(ot,!0):Xg(z.stateNode,!1)}catch(Gt){Pe(z,z.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Nl(t,a))));break;case 19:Bn(n,t),zn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Nl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),zn(t)}}function zn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=of(t);Ll(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(Un(g,""),a.flags&=-33);var A=of(t);Ll(t,A,g);break;case 3:case 4:var z=a.stateNode.containerInfo,$=of(t);lf(t,$,z);break;default:throw Error(r(161))}}catch(ft){Pe(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function tg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;tg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ea(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Zm(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Pa(4,n,n.return),xr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Xm(n,n.return,a),xr(n);break;case 27:yo(n.stateNode);case 26:case 5:Di(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:na(u,f,a),fo(4,f);break;case 1:if(na(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Pe(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Up(z[u],A)}catch($){Pe(s,s.return,$)}}a&&g&64&&Vm(f),ho(f,f.return);break;case 27:qm(f);case 26:case 5:na(u,f,a),a&&s===null&&g&4&&km(f),ho(f,f.return);break;case 12:na(u,f,a);break;case 31:na(u,f,a),a&&g&4&&Qm(u,f);break;case 13:na(u,f,a),a&&g&4&&Jm(u,f);break;case 22:f.memoizedState===null&&na(u,f,a),ho(f,f.return);break;case 30:break;default:na(u,f,a)}n=n.sibling}}function cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function ff(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)eg(t,n,a,s),n=n.sibling}function eg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),u&2048&&fo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(u&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,A=f.onPostCommit;typeof A=="function"&&A(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Pe(n,n.return,z)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):po(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&cf(g,n);break;case 24:vi(t,n,a,s),u&2048&&ff(n.alternate,n);break;default:vi(t,n,a,s)}}function is(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,A=a,z=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:is(f,g,A,z,u),fo(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?is(f,g,A,z,u):po(f,g):(ft._visibility|=2,is(f,g,A,z,u)),u&&$&2048&&cf(g.alternate,g);break;case 24:is(f,g,A,z,u),u&&$&2048&&ff(g.alternate,g);break;default:is(f,g,A,z,u)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:po(a,s),u&2048&&cf(s.alternate,s);break;case 24:po(a,s),u&2048&&ff(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function as(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)ng(t,n,a),t=t.sibling}function ng(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&mo&&t.memoizedState!==null&&Zx(a,_i,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var s=_i;_i=Yl(t.stateNode.containerInfo),as(t,n,a),_i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=mo,mo=16777216,as(t,n,a),mo=s):as(t,n,a));break;default:as(t,n,a)}}function ig(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,t)}ig(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(t),t=t.sibling}function ag(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&Pa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ol(t)):go(t);break;default:go(t)}}function Ol(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];_n=s,rg(s,t)}ig(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Pa(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}t=t.sibling}}function rg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Pa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,_n=s;else t:for(a=t;_n!==null;){s=_n;var u=s.sibling,f=s.return;if(jm(s),s===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var ux={getCacheForType:function(t){var n=Sn(rn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(rn).controller.signal}},cx=typeof WeakMap=="function"?WeakMap:Map,we=0,Ge=null,me=null,_e=0,Oe=0,jn=null,Fa=!1,rs=!1,df=!1,ia=0,Qe=0,Ba=0,Sr=0,hf=0,Kn=0,ss=0,_o=null,In=null,pf=!1,Pl=0,sg=0,Fl=1/0,Bl=null,za=null,hn=0,Ia=null,os=null,aa=0,mf=0,gf=null,og=null,vo=0,_f=null;function Qn(){return(we&2)!==0&&_e!==0?_e&-_e:w.T!==null?Ef():Ai()}function lg(){if(Kn===0)if((_e&536870912)===0||xe){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===Ge&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ha(t,_e,Kn,!1)),Cn(t,a),((we&2)===0||t!==Ge)&&(t===Ge&&((we&2)===0&&(Sr|=a),Qe===4&&Ha(t,_e,Kn,!1)),wi(t))}function ug(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||It(t,n),u=s?hx(t,n):xf(t,n,!0),f=s;do{if(u===0){rs&&!s&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!fx(a)){u=xf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var A=t;u=_o;var z=A.current.memoizedState.isDehydrated;if(z&&(ls(A,g).flags|=256),g=xf(A,g,!1),g!==2){if(df&&!z){A.errorRecoveryDisabledLanes|=f,Sr|=f,u=4;break t}f=In,In=u,f!==null&&(In===null?In=f:In.push.apply(In,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ha(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,Kn,!Fa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Pl+300-y(),10<u)){if(Ha(s,n,Kn,!Fa),ut(s,0,!0)!==0)break t;aa=n,s.timeoutHandle=Hg(cg.bind(null,s,a,In,Bl,pf,n,Kn,Sr,ss,Fa,f,"Throttled",-0,0),u);break t}cg(s,a,In,Bl,pf,n,Kn,Sr,ss,Fa,f,null,-0,0)}}break}while(!0);wi(t)}function cg(t,n,a,s,u,f,g,A,z,$,ft,vt,nt,ot){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},ng(n,f,vt);var Gt=(f&62914560)===f?Pl-y():(f&4194048)===f?sg-y():0;if(Gt=jx(vt,Gt),Gt!==null){aa=f,t.cancelPendingCommit=Gt(vg.bind(null,t,n,f,a,s,u,g,A,z,ft,vt,null,nt,ot)),Ha(t,f,g,!$);return}}vg(t,n,f,a,s,u,g,A,z)}function fx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,s){n&=~hf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Nt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Is(t,a,n)}function zl(){return(we&6)===0?(xo(0),!1):!0}function vf(){if(me!==null){if(Oe===0)var t=me.return;else t=me,Yi=fr=null,Nc(t),Jr=null,to=0,t=me;for(;t!==null;)Gm(t.alternate,t),t=t.return;me=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Ux(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,vf(),Ge=t,me=a=Wi(t.current,null),_e=n,Oe=0,jn=null,Fa=!1,rs=It(t,n),df=!1,ss=Kn=hf=Sr=Ba=Qe=0,In=_o=null,pf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Nt(s),f=1<<u;n|=t[u],s&=~f}return ia=n,rl(),a}function fg(t,n){oe=null,w.H=lo,n===Qr||n===hl?(n=Rp(),Oe=3):n===Mc?(n=Rp(),Oe=4):Oe=n===jc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,jn=n,me===null&&(Qe=1,Rl(t,ni(n,t.current)))}function dg(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?si===null:(_e&62914560)===_e||(_e&536870912)!==0?t===si:!1}function hg(){var t=w.H;return w.H=lo,t===null?lo:t}function pg(){var t=w.A;return w.A=ux,t}function Il(){Qe=4,Fa||(_e&4194048)!==_e&&Yn.current!==null||(rs=!0),(Ba&134217727)===0&&(Sr&134217727)===0||Ge===null||Ha(Ge,_e,Kn,!1)}function xf(t,n,a){var s=we;we|=2;var u=hg(),f=pg();(Ge!==t||_e!==n)&&(Bl=null,ls(t,n)),n=!1;var g=Qe;t:do try{if(Oe!==0&&me!==null){var A=me,z=jn;switch(Oe){case 8:vf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var $=Oe;if(Oe=0,jn=null,us(t,A,z,$),a&&rs){g=0;break t}break;default:$=Oe,Oe=0,jn=null,us(t,A,z,$)}}dx(),g=Qe;break}catch(ft){fg(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Yi=fr=null,we=s,w.H=u,w.A=f,me===null&&(Ge=null,_e=0,rl()),g}function dx(){for(;me!==null;)mg(me)}function hx(t,n){var a=we;we|=2;var s=hg(),u=pg();Ge!==t||_e!==n?(Bl=null,Fl=y()+500,ls(t,n)):rs=It(t,n);t:do try{if(Oe!==0&&me!==null){n=me;var f=jn;e:switch(Oe){case 1:Oe=0,jn=null,us(t,n,f,1);break;case 2:case 9:if(bp(f)){Oe=0,jn=null,gg(n);break}n=function(){Oe!==2&&Oe!==9||Ge!==t||(Oe=7),wi(t)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:bp(f)?(Oe=0,jn=null,gg(n)):(Oe=0,jn=null,us(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var A=me;if(g?e0(g):A.stateNode.complete){Oe=0,jn=null;var z=A.sibling;if(z!==null)me=z;else{var $=A.return;$!==null?(me=$,Hl($)):me=null}break e}}Oe=0,jn=null,us(t,n,f,5);break;case 6:Oe=0,jn=null,us(t,n,f,6);break;case 8:vf(),Qe=6;break t;default:throw Error(r(462))}}px();break}catch(ft){fg(t,ft)}while(!0);return Yi=fr=null,w.H=s,w.A=u,we=a,me!==null?0:(Ge=null,_e=0,rl(),Qe)}function px(){for(;me!==null&&!qt();)mg(me)}function mg(t){var n=Im(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?Hl(t):me=n}function gg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Nm(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Nm(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Nc(n);default:Gm(a,n),n=me=pp(n,ia),n=Im(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?Hl(t):me=n}function us(t,n,a,s){Yi=fr=null,Nc(n),Jr=null,to=0;var u=n.return;try{if(nx(t,u,n,a,_e)){Qe=1,Rl(t,ni(a,t.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;Qe=1,Rl(t,ni(a,t.current)),me=null;return}n.flags&32768?(xe||s===1?t=!0:rs||(_e&536870912)!==0?t=!1:(Fa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),_g(n,t)):Hl(n)}function Hl(t){var n=t;do{if((n.flags&32768)!==0){_g(n,Fa);return}t=n.return;var a=rx(n.alternate,n,ia);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Qe===0&&(Qe=5)}function _g(t,n){do{var a=sx(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Qe=6,me=null}function vg(t,n,a,s,u,f,g,A,z){t.cancelPendingCommit=null;do Gl();while(hn!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=sc,di(t,a,f,g,A,z),t===Ge&&(me=Ge=null,_e=0),os=n,Ia=t,aa=a,mf=f,gf=u,og=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,vx(ct,function(){return Eg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=w.T,w.T=null,u=F.p,F.p=2,g=we,we|=4;try{ox(t,n,a)}finally{we=g,F.p=u,w.T=s}}hn=1,xg(),Sg(),Mg()}}function xg(){if(hn===1){hn=0;var t=Ia,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var s=F.p;F.p=2;var u=we;we|=4;try{$m(n,t);var f=Uf,g=rp(t.containerInfo),A=f.focusedElem,z=f.selectionRange;if(g!==A&&A&&A.ownerDocument&&ap(A.ownerDocument.documentElement,A)){if(z!==null&&ec(A)){var $=z.start,ft=z.end;if(ft===void 0&&(ft=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(ft,A.value.length);else{var vt=A.ownerDocument||document,nt=vt&&vt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Gt=A.textContent.length,Jt=Math.min(z.start,Gt),Ie=z.end===void 0?Jt:Math.min(z.end,Gt);!ot.extend&&Jt>Ie&&(g=Ie,Ie=Jt,Jt=g);var Z=ip(A,Jt),X=ip(A,Ie);if(Z&&X&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==X.node||ot.focusOffset!==X.offset)){var Q=vt.createRange();Q.setStart(Z.node,Z.offset),ot.removeAllRanges(),Jt>Ie?(ot.addRange(Q),ot.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),ot.addRange(Q))}}}}for(vt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&vt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var gt=vt[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}$l=!!wf,Uf=wf=null}finally{we=u,F.p=s,w.T=a}}t.current=n,hn=2}}function Sg(){if(hn===2){hn=0;var t=Ia,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var s=F.p;F.p=2;var u=we;we|=4;try{Zm(t,n.alternate,n)}finally{we=u,F.p=s,w.T=a}}hn=3}}function Mg(){if(hn===4||hn===3){hn=0,L();var t=Ia,n=os,a=aa,s=og;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,os=Ia=null,yg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(za=null),Pr(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=w.T,u=F.p,F.p=2,w.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var A=s[g];f(A.value,{componentStack:A.stack})}}finally{w.T=n,F.p=u}}(aa&3)!==0&&Gl(),wi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===_f?vo++:(vo=0,_f=t):vo=0,xo(0)}}function yg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Gl(){return xg(),Sg(),Mg(),Eg()}function Eg(){if(hn!==5)return!1;var t=Ia,n=mf;mf=0;var a=Pr(aa),s=w.T,u=F.p;try{F.p=32>a?32:a,w.T=null,a=gf,gf=null;var f=Ia,g=aa;if(hn=0,os=Ia=null,aa=0,(we&6)!==0)throw Error(r(331));var A=we;if(we|=4,ag(f.current),eg(f,f.current,g,a),we=A,xo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{F.p=u,w.T=s,yg(t,n)}}function Tg(t,n,a){n=ni(a,n),n=Zc(t.stateNode,n,2),t=La(t,n,2),t!==null&&(Cn(t,2),wi(t))}function Pe(t,n,a){if(t.tag===3)Tg(t,t,a);else for(;n!==null;){if(n.tag===3){Tg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){t=ni(a,t),a=bm(2),s=La(n,a,2),s!==null&&(Am(a,s,n,t),Cn(s,2),wi(s));break}}n=n.return}}function Sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new cx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(df=!0,u.add(a),t=mx.bind(null,t,n,a),n.then(t,t))}function mx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ge===t&&(_e&a)===a&&(Qe===4||Qe===3&&(_e&62914560)===_e&&300>y()-Pl?(we&2)===0&&ls(t,0):hf|=a,ss===_e&&(ss=0)),wi(t)}function bg(t,n){n===0&&(n=Ne()),t=lr(t,n),t!==null&&(Cn(t,n),wi(t))}function gx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bg(t,a)}function _x(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bg(t,a)}function vx(t,n){return Me(t,n)}var Vl=null,cs=null,Mf=!1,Xl=!1,yf=!1,Ga=0;function wi(t){t!==cs&&t.next===null&&(cs===null?Vl=cs=t:cs=cs.next=t),Xl=!0,Mf||(Mf=!0,Sx())}function xo(t,n){if(!yf&&Xl){yf=!0;do for(var a=!1,s=Vl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Nt(42|t)+1)-1,f&=u&~(g&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(s,f))}else f=_e,f=ut(s,s===Ge?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Dg(s,f));s=s.next}while(a);yf=!1}}function xx(){Ag()}function Ag(){Xl=Mf=!1;var t=0;Ga!==0&&wx()&&(t=Ga);for(var n=y(),a=null,s=Vl;s!==null;){var u=s.next,f=Rg(s,n);f===0?(s.next=null,a===null?Vl=u:a.next=u,u===null&&(cs=a)):(a=s,(t!==0||(f&3)!==0)&&(Xl=!0)),s=u}hn!==0&&hn!==5||xo(t),Ga!==0&&(Ga=0)}function Rg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Nt(f),A=1<<g,z=u[g];z===-1?((A&a)===0||(A&s)!==0)&&(u[g]=ee(A,n)):z<=n&&(t.expiredLanes|=A),f&=~A}if(n=Ge,a=_e,a=ut(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Oe===2||Oe===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ue(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||It(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ue(s),Pr(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return s=Cg.bind(null,t),a=Me(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ue(s),t.callbackPriority=2,t.callbackNode=null,2}function Cg(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Gl()&&t.callbackNode!==a)return null;var s=_e;return s=ut(t,t===Ge?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(ug(t,s,n),Rg(t,y()),t.callbackNode!=null&&t.callbackNode===a?Cg.bind(null,t):null)}function Dg(t,n){if(Gl())return null;ug(t,n,!0)}function Sx(){Lx(function(){(we&6)!==0?Me(pt,xx):Ag()})}function Ef(){if(Ga===0){var t=jr;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ga=t}return Ga}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Qo(""+t)}function Ug(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Mx(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=wg((u[fn]||null).action),g=s.submitter;g&&(n=(n=g[fn]||null)?wg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var A=new el("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var z=g?Ug(u,g):new FormData(u);Vc(a,{pending:!0,data:z,method:u.method,action:f},null,z)}}else typeof f=="function"&&(A.preventDefault(),z=g?Ug(u,g):new FormData(u),Vc(a,{pending:!0,data:z,method:u.method,action:f},f,z))},currentTarget:u}]})}}for(var Tf=0;Tf<rc.length;Tf++){var bf=rc[Tf],yx=bf.toLowerCase(),Ex=bf[0].toUpperCase()+bf.slice(1);gi(yx,"on"+Ex)}gi(lp,"onAnimationEnd"),gi(up,"onAnimationIteration"),gi(cp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(Iv,"onTransitionRun"),gi(Hv,"onTransitionStart"),gi(Gv,"onTransitionCancel"),gi(fp,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Lg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var A=s[g],z=A.instance,$=A.currentTarget;if(A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ft){al(ft)}u.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(A=s[g],z=A.instance,$=A.currentTarget,A=A.listener,z!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(ft){al(ft)}u.currentTarget=null,f=z}}}}function ge(t,n){var a=n[ya];a===void 0&&(a=n[ya]=new Set);var s=t+"__bubble";a.has(s)||(Ng(n,t,2,!1),a.add(s))}function Af(t,n,a){var s=0;n&&(s|=4),Ng(a,t,s,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Rf(t){if(!t[kl]){t[kl]=!0,rt.forEach(function(a){a!=="selectionchange"&&(Tx.has(a)||Af(a,!1,t),Af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kl]||(n[kl]=!0,Af("selectionchange",!1,n))}}function Ng(t,n,a,s){switch(l0(n)){case 2:var u=Jx;break;case 8:u=$x;break;default:u=Vf}a=u.bind(null,n,a,t),u=void 0,!qu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Cf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var A=s.stateNode.containerInfo;if(A===u)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;A!==null;){if(g=Ea(A),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}A=A.parentNode}}s=s.return}zh(function(){var $=f,ft=ku(a),vt=[];t:{var nt=dp.get(t);if(nt!==void 0){var ot=el,Gt=t;switch(t){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":ot=_v;break;case"focusin":Gt="focus",ot=Ku;break;case"focusout":Gt="blur",ot=Ku;break;case"beforeblur":case"afterblur":ot=Ku;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Sv;break;case lp:case up:case cp:ot=lv;break;case fp:ot=yv;break;case"scroll":case"scrollend":ot=iv;break;case"wheel":ot=Tv;break;case"copy":case"cut":case"paste":ot=cv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Xh;break;case"toggle":case"beforetoggle":ot=Av}var Jt=(n&4)!==0,Ie=!Jt&&(t==="scroll"||t==="scrollend"),Z=Jt?nt!==null?nt+"Capture":null:nt;Jt=[];for(var X=$,Q;X!==null;){var gt=X;if(Q=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||Q===null||Z===null||(gt=Gs(X,Z),gt!=null&&Jt.push(Mo(X,gt,Q))),Ie)break;X=X.return}0<Jt.length&&(nt=new ot(nt,Gt,null,a,ft),vt.push({event:nt,listeners:Jt}))}}if((n&7)===0){t:{if(nt=t==="mouseover"||t==="pointerover",ot=t==="mouseout"||t==="pointerout",nt&&a!==Xu&&(Gt=a.relatedTarget||a.fromElement)&&(Ea(Gt)||Gt[Gi]))break t;if((ot||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=$,Gt=Gt?Ea(Gt):null,Gt!==null&&(Ie=c(Gt),Jt=Gt.tag,Gt!==Ie||Jt!==5&&Jt!==27&&Jt!==6)&&(Gt=null)):(ot=null,Gt=$),ot!==Gt)){if(Jt=Gh,gt="onMouseLeave",Z="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Xh,gt="onPointerLeave",Z="onPointerEnter",X="pointer"),Ie=ot==null?nt:ar(ot),Q=Gt==null?nt:ar(Gt),nt=new Jt(gt,X+"leave",ot,a,ft),nt.target=Ie,nt.relatedTarget=Q,gt=null,Ea(ft)===$&&(Jt=new Jt(Z,X+"enter",Gt,a,ft),Jt.target=Q,Jt.relatedTarget=Ie,gt=Jt),Ie=gt,ot&&Gt)e:{for(Jt=bx,Z=ot,X=Gt,Q=0,gt=Z;gt;gt=Jt(gt))Q++;gt=0;for(var Qt=X;Qt;Qt=Jt(Qt))gt++;for(;0<Q-gt;)Z=Jt(Z),Q--;for(;0<gt-Q;)X=Jt(X),gt--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){Jt=Z;break e}Z=Jt(Z),X=Jt(X)}Jt=null}else Jt=null;ot!==null&&Og(vt,nt,ot,Jt,!1),Gt!==null&&Ie!==null&&Og(vt,Ie,Gt,Jt,!0)}}t:{if(nt=$?ar($):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Re=Qh;else if(jh(nt))if(Jh)Re=Fv;else{Re=Ov;var Yt=Nv}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?$&&Br($.elementType)&&(Re=Qh):Re=Pv;if(Re&&(Re=Re(t,$))){Kh(vt,Re,a,ft);break t}Yt&&Yt(t,nt,$),t==="focusout"&&$&&nt.type==="number"&&$.memoizedProps.value!=null&&pi(nt,"number",nt.value)}switch(Yt=$?ar($):window,t){case"focusin":(jh(Yt)||Yt.contentEditable==="true")&&(Gr=Yt,nc=$,js=null);break;case"focusout":js=nc=Gr=null;break;case"mousedown":ic=!0;break;case"contextmenu":case"mouseup":case"dragend":ic=!1,sp(vt,a,ft);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":sp(vt,a,ft)}var ce;if(Ju)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Hr?Yh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(kh&&a.locale!=="ko"&&(Hr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hr&&(ce=Ih()):(ba=ft,Yu="value"in ba?ba.value:ba.textContent,Hr=!0)),Yt=Wl($,ve),0<Yt.length&&(ve=new Vh(ve,t,null,a,ft),vt.push({event:ve,listeners:Yt}),ce?ve.data=ce:(ce=Zh(a),ce!==null&&(ve.data=ce)))),(ce=Cv?Dv(t,a):wv(t,a))&&(ve=Wl($,"onBeforeInput"),0<ve.length&&(Yt=new Vh("onBeforeInput","beforeinput",null,a,ft),vt.push({event:Yt,listeners:ve}),Yt.data=ce)),Mx(vt,t,$,a,ft)}Lg(vt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gs(t,a),u!=null&&s.unshift(Mo(t,u,f)),u=Gs(t,n),u!=null&&s.push(Mo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function bx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Og(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var A=a,z=A.alternate,$=A.stateNode;if(A=A.tag,z!==null&&z===s)break;A!==5&&A!==26&&A!==27||$===null||(z=$,u?($=Gs(a,f),$!=null&&g.unshift(Mo(a,$,z))):u||($=Gs(a,f),$!=null&&g.push(Mo(a,$,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Ax=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(Ax,`
`).replace(Rx,"")}function Fg(t,n){return n=Pg(n),Pg(t)===n}function ze(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Un(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Un(t,""+s);break;case"className":re(t,"class",s);break;case"tabIndex":re(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":re(t,a,s);break;case"style":Vi(t,s,f);break;case"data":if(n!=="object"){re(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",u.name,u,null),ze(t,n,"formEncType",u.formEncType,u,null),ze(t,n,"formMethod",u.formMethod,u,null),ze(t,n,"formTarget",u.formTarget,u,null)):(ze(t,n,"encType",u.encType,u,null),ze(t,n,"method",u.method,u,null),ze(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Qo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Qo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),te(t,"popover",s);break;case"xlinkActuate":Ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ht(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ht(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ht(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ht(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":te(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ev.get(a)||a,te(t,a,s))}}function Df(t,n,a,s,u,f){switch(a){case"style":Vi(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Un(t,s):(typeof s=="number"||typeof s=="bigint")&&Un(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!et.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):te(t,a,s)}}}function yn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,f,g,a,null)}}u&&ze(t,n,"srcSet",a.srcSet,a,null),s&&ze(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var A=f=g=u=null,z=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":g=ft;break;case"checked":z=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:ze(t,n,s,ft,a,null)}}Xn(t,f,A,z,$,g,u,!1);return;case"select":ge("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":g=A;break;case"multiple":s=A;default:ze(t,n,u,A,a,null)}n=f,a=g,t.multiple=!!s,n!=null?kn(t,!!s,n,!1):a!=null&&kn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(A=a[g],A!=null))switch(g){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ze(t,n,g,A,a,null)}nn(t,s,u,f);return;case"option":for(z in a)a.hasOwnProperty(z)&&(s=a[z],s!=null)&&(z==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":ze(t,n,z,s,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<So.length;s++)ge(So[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ze(t,n,$,s,a,null)}return;default:if(Br(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&Df(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&ze(t,n,A,s,a,null))}function Cx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,A=null,z=null,$=null,ft=null;for(ot in a){var vt=a[ot];if(a.hasOwnProperty(ot)&&vt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":z=vt;default:s.hasOwnProperty(ot)||ze(t,n,ot,null,s,vt)}}for(var nt in s){var ot=s[nt];if(vt=a[nt],s.hasOwnProperty(nt)&&(ot!=null||vt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":$=ot;break;case"defaultChecked":ft=ot;break;case"value":g=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==vt&&ze(t,n,nt,ot,s,vt)}}wn(t,g,A,z,$,ft,f,u);return;case"select":ot=g=A=nt=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":ot=z;default:s.hasOwnProperty(f)||ze(t,n,f,null,s,z)}for(u in s)if(f=s[u],z=a[u],s.hasOwnProperty(u)&&(f!=null||z!=null))switch(u){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":g=f;default:f!==z&&ze(t,n,u,f,s,z)}n=A,a=g,s=ot,nt!=null?kn(t,!!a,nt,!1):!!s!=!!a&&(n!=null?kn(t,!!a,n,!0):kn(t,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ze(t,n,A,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ze(t,n,g,u,s,f)}Le(t,nt,ot);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!s.hasOwnProperty(Gt)&&(Gt==="selected"?t.selected=!1:ze(t,n,Gt,null,s,nt));for(z in s)nt=s[z],ot=a[z],s.hasOwnProperty(z)&&nt!==ot&&(nt!=null||ot!=null)&&(z==="selected"?t.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":ze(t,n,z,nt,s,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)nt=a[Jt],a.hasOwnProperty(Jt)&&nt!=null&&!s.hasOwnProperty(Jt)&&ze(t,n,Jt,null,s,nt);for($ in s)if(nt=s[$],ot=a[$],s.hasOwnProperty($)&&nt!==ot&&(nt!=null||ot!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:ze(t,n,$,nt,s,ot)}return;default:if(Br(n)){for(var Ie in a)nt=a[Ie],a.hasOwnProperty(Ie)&&nt!==void 0&&!s.hasOwnProperty(Ie)&&Df(t,n,Ie,void 0,s,nt);for(ft in s)nt=s[ft],ot=a[ft],!s.hasOwnProperty(ft)||nt===ot||nt===void 0&&ot===void 0||Df(t,n,ft,nt,s,ot);return}}for(var Z in a)nt=a[Z],a.hasOwnProperty(Z)&&nt!=null&&!s.hasOwnProperty(Z)&&ze(t,n,Z,null,s,nt);for(vt in s)nt=s[vt],ot=a[vt],!s.hasOwnProperty(vt)||nt===ot||nt==null&&ot==null||ze(t,n,vt,nt,s,ot)}function Bg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,A=u.duration;if(f&&A&&Bg(g)){for(g=0,A=u.responseEnd,s+=1;s<a.length;s++){var z=a[s],$=z.startTime;if($>A)break;var ft=z.transferSize,vt=z.initiatorType;ft&&Bg(vt)&&(z=z.responseEnd,g+=ft*(z<A?1:(A-$)/(z-$)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wf=null,Uf=null;function ql(t){return t.nodeType===9?t:t.ownerDocument}function zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Lf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Nf=null;function wx(){var t=window.event;return t&&t.type==="popstate"?t===Nf?!1:(Nf=t,!0):(Nf=null,!1)}var Hg=typeof setTimeout=="function"?setTimeout:void 0,Ux=typeof clearTimeout=="function"?clearTimeout:void 0,Gg=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof Gg<"u"?function(t){return Gg.resolve(null).then(t).catch(Nx)}:Hg;function Nx(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function Vg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")yo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,A=f.nodeName;f[ir]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&yo(t.ownerDocument.body);a=u}while(a);ps(n)}function Xg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Of(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Of(a),Hs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Ox(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Px(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Pf(t){return t.data==="$?"||t.data==="$~"}function Ff(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Bf=null;function Wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function qg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Yg(t,n,a){switch(n=ql(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function yo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Hs(t)}var li=new Map,Zg=new Set;function Yl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=F.d;F.d={f:Bx,r:zx,D:Ix,C:Hx,L:Gx,m:Vx,X:kx,S:Xx,M:Wx};function Bx(){var t=ra.f(),n=zl();return t||n}function zx(t){var n=Ta(t);n!==null&&n.tag===5&&n.type==="form"?fm(n):ra.r(t)}var fs=typeof document>"u"?null:document;function jg(t,n,a){var s=fs;if(s&&typeof n=="string"&&n){var u=ie(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zg.has(u)||(Zg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function Ix(t){ra.D(t),jg("dns-prefetch",t,null)}function Hx(t,n){ra.C(t,n),jg("preconnect",t,n)}function Gx(t,n,a){ra.L(t,n,a);var s=fs;if(s&&t&&n){var u='link[rel="preload"][as="'+ie(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ie(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ie(a.imageSizes)+'"]')):u+='[href="'+ie(t)+'"]';var f=u;switch(n){case"style":f=ds(t);break;case"script":f=hs(t)}li.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Eo(f))||n==="script"&&s.querySelector(To(f))||(n=s.createElement("link"),yn(n,"link",t),k(n),s.head.appendChild(n)))}}function Vx(t,n){ra.m(t,n);var a=fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ie(s)+'"][href="'+ie(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hs(t)}if(!li.has(f)&&(t=S({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}s=a.createElement("link"),yn(s,"link",t),k(s),a.head.appendChild(s)}}}function Xx(t,n,a){ra.S(t,n,a);var s=fs;if(s&&t){var u=R(s).hoistableStyles,f=ds(t);n=n||"default";var g=u.get(f);if(!g){var A={loading:0,preload:null};if(g=s.querySelector(Eo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&zf(t,a);var z=g=s.createElement("link");k(z),yn(z,"link",t),z._p=new Promise(function($,ft){z.onload=$,z.onerror=ft}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:A},u.set(f,g)}}}function kx(t,n){ra.X(t,n);var a=fs;if(a&&t){var s=R(a).hoistableScripts,u=hs(t),f=s.get(u);f||(f=a.querySelector(To(u)),f||(t=S({src:t,async:!0},n),(n=li.get(u))&&If(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Wx(t,n){ra.M(t,n);var a=fs;if(a&&t){var s=R(a).hoistableScripts,u=hs(t),f=s.get(u);f||(f=a.querySelector(To(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=li.get(u))&&If(t,n),f=a.createElement("script"),k(f),yn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Kg(t,n,a,s){var u=(u=tt.current)?Yl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ds(a.href),a=R(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ds(a.href);var f=R(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||qx(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=R(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ds(t){return'href="'+ie(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function Qg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function qx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),yn(n,"link",a),k(n),t.head.appendChild(n))}function hs(t){return'[src="'+ie(t)+'"]'}function To(t){return"script[async]"+t}function Jg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ie(a.href)+'"]');if(s)return n.instance=s,k(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),k(s),yn(s,"style",u),Zl(s,a.precedence,t),n.instance=s;case"stylesheet":u=ds(a.href);var f=t.querySelector(Eo(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;s=Qg(a),(u=li.get(u))&&zf(s,u),f=(t.ownerDocument||t).createElement("link"),k(f);var g=f;return g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),yn(f,"link",s),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=hs(a.src),(u=t.querySelector(To(f)))?(n.instance=u,k(u),u):(s=a,(u=li.get(f))&&(s=S({},a),If(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),k(u),yn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zl(s,a.precedence,t));return n.instance}function Zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var A=s[g];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function zf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function If(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jl=null;function $g(t,n,a){if(jl===null){var s=new Map,u=jl=new Map;u.set(a,s)}else u=jl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var A=s.get(g);A?A.push(f):s.set(g,[f])}}return s}function t0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Yx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function e0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ds(s.href),f=n.querySelector(Eo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,s=Qg(s),(u=li.get(u))&&zf(s,u),f=f.createElement("link"),k(f);var g=f;g._p=new Promise(function(A,z){g.onload=A,g.onerror=z}),yn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Hf=0;function jx(t,n){return t.stylesheets&&t.count===0&&Jl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Hf===0&&(Hf=62500*Dx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Jl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Hf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ql=null;function Jl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ql=new Map,n.forEach(Kx,t),Ql=null,Kl.call(t))}function Kx(t,n){if(!(n.state.loading&4)){var a=Ql.get(t);if(a)var s=a.get(null);else{a=new Map,Ql.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Kl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:P,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function Qx(t,n,a,s,u,f,g,A,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function n0(t,n,a,s,u,f,g,A,z,$,ft,vt){return t=new Qx(t,n,a,g,z,$,ft,vt,A),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=vc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},yc(f),t}function i0(t){return t?(t=kr,t):kr}function a0(t,n,a,s,u,f){u=i0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=La(t,s,n),a!==null&&(Hn(a,t,n),no(a,t,n))}function r0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Gf(t,n){r0(t,n),(t=t.alternate)&&r0(t,n)}function s0(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Hn(n,t,67108864),Gf(t,67108864)}}function o0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Or(n);var a=lr(t,n);a!==null&&Hn(a,t,n),Gf(t,n)}}var $l=!0;function Jx(t,n,a,s){var u=w.T;w.T=null;var f=F.p;try{F.p=2,Vf(t,n,a,s)}finally{F.p=f,w.T=u}}function $x(t,n,a,s){var u=w.T;w.T=null;var f=F.p;try{F.p=8,Vf(t,n,a,s)}finally{F.p=f,w.T=u}}function Vf(t,n,a,s){if($l){var u=Xf(s);if(u===null)Cf(t,n,s,tu,a),u0(t,s);else if(eS(u,t,n,a,s))s.stopPropagation();else if(u0(t,s),n&4&&-1<tS.indexOf(t)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;g;){var z=1<<31-Nt(g);A.entanglements[1]|=z,g&=~z}wi(f),(we&6)===0&&(Fl=y()+500,xo(0))}}break;case 31:case 13:A=lr(f,2),A!==null&&Hn(A,f,2),zl(),Gf(f,2)}if(f=Xf(s),f===null&&Cf(t,n,s,tu,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Cf(t,n,s,null,a)}}function Xf(t){return t=ku(t),kf(t)}var tu=null;function kf(t){if(tu=null,t=Ea(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tu=t,null}function l0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case xt:return 8;case ct:case Xt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Wf=!1,Xa=null,ka=null,Wa=null,Ao=new Map,Ro=new Map,qa=[],tS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u0(t,n){switch(t){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&s0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function eS(t,n,a,s,u){switch(n){case"focusin":return Xa=Co(Xa,t,n,a,s,u),!0;case"dragenter":return ka=Co(ka,t,n,a,s,u),!0;case"mouseover":return Wa=Co(Wa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,s,u)),!0}return!1}function c0(t){var n=Ea(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){o0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Fr(t.priority,function(){o0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Xf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Xu=s,a.target.dispatchEvent(s),Xu=null}else return n=Ta(a),n!==null&&s0(n),t.blockedOn=a,!1;n.shift()}return!0}function f0(t,n,a){eu(t)&&a.delete(n)}function nS(){Wf=!1,Xa!==null&&eu(Xa)&&(Xa=null),ka!==null&&eu(ka)&&(ka=null),Wa!==null&&eu(Wa)&&(Wa=null),Ao.forEach(f0),Ro.forEach(f0)}function nu(t,n){t.blockedOn===n&&(t.blockedOn=null,Wf||(Wf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,nS)))}var iu=null;function d0(t){iu!==t&&(iu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){iu===t&&(iu=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(kf(s||a)===null)continue;break}var f=Ta(a);f!==null&&(t.splice(n,3),n-=3,Vc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ps(t){function n(z){return nu(z,t)}Xa!==null&&nu(Xa,t),ka!==null&&nu(ka,t),Wa!==null&&nu(Wa,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)c0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[fn]||null;if(typeof f=="function")g||d0(a);else if(g){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[fn]||null)A=g.formAction;else if(kf(u)!==null)continue}else A=g.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),d0(a)}}}function h0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function qf(t){this._internalRoot=t}au.prototype.render=qf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();a0(a,s,t,n,null,null)},au.prototype.unmount=qf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;a0(t.current,2,null,t,null,null),zl(),n[Gi]=null}};function au(t){this._internalRoot=t}au.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ai();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&c0(t)}};var p0=e.version;if(p0!=="19.2.4")throw Error(r(527,p0,"19.2.4"));F.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var iS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ru.isDisabled&&ru.supportsFiber)try{Tt=ru.inject(iS),Mt=ru}catch{}}return wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Mm,f=ym,g=Em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=n0(t,1,!1,null,null,a,s,null,u,f,g,h0),t[Gi]=n.current,Rf(t),new qf(n)},wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Mm,g=ym,A=Em,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=n0(t,1,!0,n,a??null,s,u,z,f,g,A,h0),n.context=i0(null),a=n.current,s=Qn(),s=Or(s),u=Ua(s),u.callback=null,La(a,u,s),a=s,n.current.lanes=a,Cn(n,a),wi(n),t[Gi]=n.current,Rf(t),new au(n)},wo.version="19.2.4",wo}var T0;function hS(){if(T0)return jf.exports;T0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=dS(),jf.exports}var pS=hS();const bh="183",mS=0,b0=1,gS=2,Du=1,_S=2,zo=3,nr=0,Vn=1,ha=2,ma=0,Ds=1,A0=2,R0=3,C0=4,vS=5,Cr=100,xS=101,SS=102,MS=103,yS=104,ES=200,TS=201,bS=202,AS=203,Ld=204,Nd=205,RS=206,CS=207,DS=208,wS=209,US=210,LS=211,NS=212,OS=213,PS=214,Od=0,Pd=1,Fd=2,Us=3,Bd=4,zd=5,Id=6,Hd=7,M_=0,FS=1,BS=2,Fi=0,y_=1,E_=2,T_=3,b_=4,A_=5,R_=6,C_=7,D_=300,Lr=301,Ls=302,$f=303,td=304,Iu=306,Gd=1e3,pa=1001,Vd=1002,En=1003,zS=1004,su=1005,Rn=1006,ed=1007,wr=1008,fi=1009,w_=1010,U_=1011,Ho=1012,Ah=1013,Ii=1014,Oi=1015,va=1016,Rh=1017,Ch=1018,Go=1020,L_=35902,N_=35899,O_=1021,P_=1022,Ti=1023,xa=1026,Ur=1027,F_=1028,Dh=1029,Ns=1030,wh=1031,Uh=1033,wu=33776,Uu=33777,Lu=33778,Nu=33779,Xd=35840,kd=35841,Wd=35842,qd=35843,Yd=36196,Zd=37492,jd=37496,Kd=37488,Qd=37489,Jd=37490,$d=37491,th=37808,eh=37809,nh=37810,ih=37811,ah=37812,rh=37813,sh=37814,oh=37815,lh=37816,uh=37817,ch=37818,fh=37819,dh=37820,hh=37821,ph=36492,mh=36494,gh=36495,_h=36283,vh=36284,xh=36285,Sh=36286,IS=3200,HS=0,GS=1,tr="",ci="srgb",Os="srgb-linear",Pu="linear",Fe="srgb",ms=7680,D0=519,VS=512,XS=513,kS=514,Lh=515,WS=516,qS=517,Nh=518,YS=519,w0=35044,U0="300 es",Pi=2e3,Fu=2001;function ZS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jS(){const o=Bu("canvas");return o.style.display="block",o}const L0={};function N0(...o){const e="THREE."+o.shift();console.log(e,...o)}function B_(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ae(...o){o=B_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function De(...o){o=B_(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function zu(...o){const e=o.join(" ");e in L0||(L0[e]=!0,ae(...o))}function KS(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const QS={[Od]:Pd,[Fd]:Id,[Bd]:Hd,[Us]:zd,[Pd]:Od,[Id]:Fd,[Hd]:Bd,[zd]:Us};class Fs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nd=Math.PI/180,Mh=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[o&255]+bn[o>>8&255]+bn[o>>16&255]+bn[o>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[i&63|128]+bn[i>>8&255]+"-"+bn[i>>16&255]+bn[i>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function JS(o,e){return(o%e+e)%e}function id(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class ye{constructor(e=0,i=0){ye.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],S=r[l+3],_=c[d+0],E=c[d+1],T=c[d+2],C=c[d+3];if(S!==C||m!==_||h!==E||x!==T){let M=m*_+h*E+x*T+S*C;M<0&&(_=-_,E=-E,T=-T,C=-C,M=-M);let v=1-p;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);v=Math.sin(v*D)/P,p=Math.sin(p*D)/P,m=m*v+_*p,h=h*v+E*p,x=x*v+T*p,S=S*v+C*p}else{m=m*v+_*p,h=h*v+E*p,x=x*v+T*p,S=S*v+C*p;const D=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=D,h*=D,x*=D,S*=D}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],S=c[d],_=c[d+1],E=c[d+2],T=c[d+3];return e[i]=p*T+x*S+m*E-h*_,e[i+1]=m*T+x*_+h*S-p*E,e[i+2]=h*T+x*E+p*_-m*S,e[i+3]=x*T-p*S-m*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),S=p(c/2),_=m(r/2),E=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=_*x*S+h*E*T,this._y=h*E*S-_*x*T,this._z=h*x*T+_*E*S,this._w=h*x*S-_*E*T;break;case"YXZ":this._x=_*x*S+h*E*T,this._y=h*E*S-_*x*T,this._z=h*x*T-_*E*S,this._w=h*x*S+_*E*T;break;case"ZXY":this._x=_*x*S-h*E*T,this._y=h*E*S+_*x*T,this._z=h*x*T+_*E*S,this._w=h*x*S-_*E*T;break;case"ZYX":this._x=_*x*S-h*E*T,this._y=h*E*S+_*x*T,this._z=h*x*T-_*E*S,this._w=h*x*S+_*E*T;break;case"YZX":this._x=_*x*S+h*E*T,this._y=h*E*S+_*x*T,this._z=h*x*T-_*E*S,this._w=h*x*S-_*E*T;break;case"XZY":this._x=_*x*S-h*E*T,this._y=h*E*S-_*x*T,this._z=h*x*T+_*E*S,this._w=h*x*S+_*E*T;break;default:ae("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],_=r+p+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-m)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(r>p&&r>S){const E=2*Math.sqrt(1+r-p-S);this._w=(x-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(p>S){const E=2*Math.sqrt(1+p-r-S);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+x)/E}else{const E=2*Math.sqrt(1+S-r-p);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(m+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let r=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(e=0,i=0,r=0){at.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(O0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*r),x=2*(p*i-c*l),S=2*(c*r-d*i);return this.x=i+m*h+d*S-p*x,this.y=r+m*x+p*h-c*S,this.z=l+m*S+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new at,O0=new Bs;class fe{constructor(e,i,r,l,c,d,p,m,h){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h)}set(e,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],S=r[7],_=r[2],E=r[5],T=r[8],C=l[0],M=l[3],v=l[6],D=l[1],P=l[4],N=l[7],V=l[2],I=l[5],B=l[8];return c[0]=d*C+p*D+m*V,c[3]=d*M+p*P+m*I,c[6]=d*v+p*N+m*B,c[1]=h*C+x*D+S*V,c[4]=h*M+x*P+S*I,c[7]=h*v+x*N+S*B,c[2]=_*C+E*D+T*V,c[5]=_*M+E*P+T*I,c[8]=_*v+E*N+T*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=x*d-p*h,_=p*m-x*c,E=h*c-d*m,T=i*S+r*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(l*h-x*r)*C,e[2]=(p*r-l*d)*C,e[3]=_*C,e[4]=(x*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=E*C,e[7]=(r*m-h*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(rd.makeScale(e,i)),this}rotate(e){return this.premultiply(rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new fe,P0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const o={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Fe&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Fe&&(l.r=ws(l.r),l.g=ws(l.g),l.b=ws(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===tr?Pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return zu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return zu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Os]:{primaries:e,whitePoint:r,transfer:Pu,toXYZ:P0,fromXYZ:F0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:e,whitePoint:r,transfer:Fe,toXYZ:P0,fromXYZ:F0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),o}const be=$S();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class tM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=Bu("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Bu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:e.width,height:e.height}}else return ae("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(sd(l[d].image)):c.push(sd(l[d]))}else c=sd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ae("Texture: Unable to serialize Texture."),{})}let nM=0;const od=new at;class On extends Fs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=pa,l=pa,c=Rn,d=wr,p=Ti,m=fi,h=On.DEFAULT_ANISOTROPY,x=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Xo(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ae(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gd:e.x=e.x-Math.floor(e.x);break;case pa:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gd:e.y=e.y-Math.floor(e.y);break;case pa:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=D_;On.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,h=m[0],x=m[4],S=m[8],_=m[1],E=m[5],T=m[9],C=m[2],M=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(S-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+C)<.1&&Math.abs(T+M)<.1&&Math.abs(h+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,N=(E+1)/2,V=(v+1)/2,I=(x+_)/4,B=(S+C)/4,b=(T+M)/4;return P>N&&P>V?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=I/r,c=B/r):N>V?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=I/l,c=b/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=B/c,l=b/c),this.set(r,l,c,i),this}let D=Math.sqrt((M-T)*(M-T)+(S-C)*(S-C)+(_-x)*(_-x));return Math.abs(D)<.001&&(D=1),this.x=(M-T)/D,this.y=(S-C)/D,this.z=(_-x)/D,this.w=Math.acos((h+E+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends Fs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:r.depth},c=new On(l),d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Oh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends iM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class z_ extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aM extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=En,this.minFilter=En,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e,i,r,l,c,d,p,m,h,x,S,_,E,T,C,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,p,m,h,x,S,_,E,T,C,M)}set(e,i,r,l,c,d,p,m,h,x,S,_,E,T,C,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=S,v[14]=_,v[3]=E,v[7]=T,v[11]=C,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/_s.setFromMatrixColumn(e,0).length(),c=1/_s.setFromMatrixColumn(e,1).length(),d=1/_s.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=d*x,E=d*S,T=p*x,C=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=E+T*h,i[5]=_-C*h,i[9]=-p*m,i[2]=C-_*h,i[6]=T+E*h,i[10]=d*m}else if(e.order==="YXZ"){const _=m*x,E=m*S,T=h*x,C=h*S;i[0]=_+C*p,i[4]=T*p-E,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=E*p-T,i[6]=C+_*p,i[10]=d*m}else if(e.order==="ZXY"){const _=m*x,E=m*S,T=h*x,C=h*S;i[0]=_-C*p,i[4]=-d*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=d*x,i[9]=C-_*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const _=d*x,E=d*S,T=p*x,C=p*S;i[0]=m*x,i[4]=T*h-E,i[8]=_*h+C,i[1]=m*S,i[5]=C*h+_,i[9]=E*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*h,T=p*m,C=p*h;i[0]=m*x,i[4]=C-_*S,i[8]=T*S+E,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=E*S+T,i[10]=_-C*S}else if(e.order==="XZY"){const _=d*m,E=d*h,T=p*m,C=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=_*S+C,i[5]=d*x,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*x,i[10]=C*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Za.crossVectors(r,Jn),Za.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Za.crossVectors(r,Jn)),Za.normalize(),ou.crossVectors(Jn,Za),l[0]=Za.x,l[4]=ou.x,l[8]=Jn.x,l[1]=Za.y,l[5]=ou.y,l[9]=Jn.y,l[2]=Za.z,l[6]=ou.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],S=r[5],_=r[9],E=r[13],T=r[2],C=r[6],M=r[10],v=r[14],D=r[3],P=r[7],N=r[11],V=r[15],I=l[0],B=l[4],b=l[8],U=l[12],ht=l[1],H=l[5],J=l[9],it=l[13],st=l[2],j=l[6],w=l[10],F=l[14],lt=l[3],dt=l[7],Et=l[11],O=l[15];return c[0]=d*I+p*ht+m*st+h*lt,c[4]=d*B+p*H+m*j+h*dt,c[8]=d*b+p*J+m*w+h*Et,c[12]=d*U+p*it+m*F+h*O,c[1]=x*I+S*ht+_*st+E*lt,c[5]=x*B+S*H+_*j+E*dt,c[9]=x*b+S*J+_*w+E*Et,c[13]=x*U+S*it+_*F+E*O,c[2]=T*I+C*ht+M*st+v*lt,c[6]=T*B+C*H+M*j+v*dt,c[10]=T*b+C*J+M*w+v*Et,c[14]=T*U+C*it+M*F+v*O,c[3]=D*I+P*ht+N*st+V*lt,c[7]=D*B+P*H+N*j+V*dt,c[11]=D*b+P*J+N*w+V*Et,c[15]=D*U+P*it+N*F+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],S=e[6],_=e[10],E=e[14],T=e[3],C=e[7],M=e[11],v=e[15],D=m*E-h*_,P=p*E-h*S,N=p*_-m*S,V=d*E-h*x,I=d*_-m*x,B=d*S-p*x;return i*(C*D-M*P+v*N)-r*(T*D-M*V+v*I)+l*(T*P-C*V+v*B)-c*(T*N-C*I+M*B)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],S=e[9],_=e[10],E=e[11],T=e[12],C=e[13],M=e[14],v=e[15],D=i*p-r*d,P=i*m-l*d,N=i*h-c*d,V=r*m-l*p,I=r*h-c*p,B=l*h-c*m,b=x*C-S*T,U=x*M-_*T,ht=x*v-E*T,H=S*M-_*C,J=S*v-E*C,it=_*v-E*M,st=D*it-P*J+N*H+V*ht-I*U+B*b;if(st===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/st;return e[0]=(p*it-m*J+h*H)*j,e[1]=(l*J-r*it-c*H)*j,e[2]=(C*B-M*I+v*V)*j,e[3]=(_*I-S*B-E*V)*j,e[4]=(m*ht-d*it-h*U)*j,e[5]=(i*it-l*ht+c*U)*j,e[6]=(M*N-T*B-v*P)*j,e[7]=(x*B-_*N+E*P)*j,e[8]=(d*J-p*ht+h*b)*j,e[9]=(r*ht-i*J-c*b)*j,e[10]=(T*I-C*N+v*D)*j,e[11]=(S*N-x*I-E*D)*j,e[12]=(p*U-d*H-m*b)*j,e[13]=(i*H-r*U+l*b)*j,e[14]=(C*P-T*V-M*D)*j,e[15]=(x*V-S*P+_*D)*j,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,S=p+p,_=c*h,E=c*x,T=c*S,C=d*x,M=d*S,v=p*S,D=m*h,P=m*x,N=m*S,V=r.x,I=r.y,B=r.z;return l[0]=(1-(C+v))*V,l[1]=(E+N)*V,l[2]=(T-P)*V,l[3]=0,l[4]=(E-N)*I,l[5]=(1-(_+v))*I,l[6]=(M+D)*I,l[7]=0,l[8]=(T+P)*B,l[9]=(M-D)*B,l[10]=(1-(_+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return r.set(1,1,1),i.identity(),this;let d=_s.set(l[0],l[1],l[2]).length();const p=_s.set(l[4],l[5],l[6]).length(),m=_s.set(l[8],l[9],l[10]).length();c<0&&(d=-d),xi.copy(this);const h=1/d,x=1/p,S=1/m;return xi.elements[0]*=h,xi.elements[1]*=h,xi.elements[2]*=h,xi.elements[4]*=x,xi.elements[5]*=x,xi.elements[6]*=x,xi.elements[8]*=S,xi.elements[9]*=S,xi.elements[10]*=S,i.setFromRotationMatrix(xi),r.x=d,r.y=p,r.z=m,this}makePerspective(e,i,r,l,c,d,p=Pi,m=!1){const h=this.elements,x=2*c/(i-e),S=2*c/(r-l),_=(i+e)/(i-e),E=(r+l)/(r-l);let T,C;if(m)T=c/(d-c),C=d*c/(d-c);else if(p===Pi)T=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===Fu)T=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=S,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,l,c,d,p=Pi,m=!1){const h=this.elements,x=2/(i-e),S=2/(r-l),_=-(i+e)/(i-e),E=-(r+l)/(r-l);let T,C;if(m)T=1/(d-c),C=d/(d-c);else if(p===Pi)T=-2/(d-c),C=-(d+c)/(d-c);else if(p===Fu)T=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=S,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const _s=new at,xi=new cn,rM=new at(0,0,0),sM=new at(1,1,1),Za=new at,ou=new at,Jn=new at,B0=new cn,z0=new Bs;class Sa{constructor(e=0,i=0,r=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:ae("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return B0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(B0,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return z0.setFromEuler(this),this.setFromQuaternion(z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oM=0;const I0=new at,vs=new Bs,sa=new cn,lu=new at,Lo=new at,lM=new at,uM=new Bs,H0=new at(1,0,0),G0=new at(0,1,0),V0=new at(0,0,1),X0={type:"added"},cM={type:"removed"},xs={type:"childadded",child:null},ld={type:"childremoved",child:null};class ti extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new at,i=new Sa,r=new Bs,l=new at(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new fe}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,i){return vs.setFromAxisAngle(e,i),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(H0,e)}rotateY(e){return this.rotateOnAxis(G0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,i){return I0.copy(e).applyQuaternion(this.quaternion),this.position.add(I0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(H0,e)}translateY(e){return this.translateOnAxis(G0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?lu.copy(e):lu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Lo,lu,this.up):sa.lookAt(lu,Lo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(sa),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(De("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(X0),xs.child=e,this.dispatchEvent(xs),xs.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cM),ld.child=e,this.dispatchEvent(ld),ld.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(X0),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,uM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*r-c[8]*l,c[13]+=r-c[1]*i-c[5]*r-c[9]*l,c[14]+=l-c[2]*i-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),S=d(e.shapes),_=d(e.skeletons),E=d(e.animations),T=d(e.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new at(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class uu extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),v=this._getHandJoint(h,C);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],_=x.position.distanceTo(S.position),E=.02,T=.005;h.inputState.pinching&&_>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new uu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},cu={h:0,s:0,l:0};function cd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class He{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=be.workingColorSpace){return this.r=e,this.g=i,this.b=r,be.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=be.workingColorSpace){if(e=JS(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=cd(d,c,e+1/3),this.g=cd(d,c,e),this.b=cd(d,c,e-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(e,i=ci){function r(c){c!==void 0&&parseFloat(c)<1&&ae("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ae("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ae("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ci){const r=H_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ae("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return be.workingToColorSpace(An.copy(this),e),Math.round(Se(An.r*255,0,255))*65536+Math.round(Se(An.g*255,0,255))*256+Math.round(Se(An.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=be.workingColorSpace){be.workingToColorSpace(An.copy(this),i);const r=An.r,l=An.g,c=An.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=be.workingColorSpace){return be.workingToColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=ci){be.workingToColorSpace(An.copy(this),e);const i=An.r,r=An.g,l=An.b;return e!==ci?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ja),this.setHSL(ja.h+e,ja.s+i,ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ja),e.getHSL(cu);const r=id(ja.h,cu.h,i),l=id(ja.s,cu.s,i),c=id(ja.l,cu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new He;He.NAMES=H_;class dM extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Si=new at,oa=new at,fd=new at,la=new at,Ss=new at,Ms=new at,k0=new at,dd=new at,hd=new at,pd=new at,md=new tn,gd=new tn,_d=new tn;class Ei{constructor(e=new at,i=new at,r=new at){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Si.subVectors(e,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Si.subVectors(l,i),oa.subVectors(r,i),fd.subVectors(e,i);const d=Si.dot(Si),p=Si.dot(oa),m=Si.dot(fd),h=oa.dot(oa),x=oa.dot(fd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const _=1/S,E=(h*m-p*x)*_,T=(d*x-p*m)*_;return c.set(1-E-T,T,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(e,i,r,l,c,d,p,m){return this.getBarycoord(e,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(d,la.y),m.addScaledVector(p,la.z),m)}static getInterpolatedAttribute(e,i,r,l,c,d){return md.setScalar(0),gd.setScalar(0),_d.setScalar(0),md.fromBufferAttribute(e,i),gd.fromBufferAttribute(e,r),_d.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(md,c.x),d.addScaledVector(gd,c.y),d.addScaledVector(_d,c.z),d}static isFrontFacing(e,i,r,l){return Si.subVectors(r,i),oa.subVectors(e,i),Si.cross(oa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Si.cross(oa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,p;Ss.subVectors(l,r),Ms.subVectors(c,r),dd.subVectors(e,r);const m=Ss.dot(dd),h=Ms.dot(dd);if(m<=0&&h<=0)return i.copy(r);hd.subVectors(e,l);const x=Ss.dot(hd),S=Ms.dot(hd);if(x>=0&&S<=x)return i.copy(l);const _=m*S-x*h;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ss,d);pd.subVectors(e,c);const E=Ss.dot(pd),T=Ms.dot(pd);if(T>=0&&E<=T)return i.copy(c);const C=E*h-m*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(r).addScaledVector(Ms,p);const M=x*T-E*S;if(M<=0&&S-x>=0&&E-T>=0)return k0.subVectors(c,l),p=(S-x)/(S-x+(E-T)),i.copy(l).addScaledVector(k0,p);const v=1/(M+C+_);return d=C*v,p=_*v,i.copy(r).addScaledVector(Ss,d).addScaledVector(Ms,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ko{constructor(e=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Mi):Mi.fromBufferAttribute(c,d),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(e.matrixWorld),this.union(fu)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),du.subVectors(this.max,No),ys.subVectors(e.a,No),Es.subVectors(e.b,No),Ts.subVectors(e.c,No),Ka.subVectors(Es,ys),Qa.subVectors(Ts,Es),Mr.subVectors(ys,Ts);let i=[0,-Ka.z,Ka.y,0,-Qa.z,Qa.y,0,-Mr.z,Mr.y,Ka.z,0,-Ka.x,Qa.z,0,-Qa.x,Mr.z,0,-Mr.x,-Ka.y,Ka.x,0,-Qa.y,Qa.x,0,-Mr.y,Mr.x,0];return!vd(i,ys,Es,Ts,du)||(i=[1,0,0,0,1,0,0,0,1],!vd(i,ys,Es,Ts,du))?!1:(hu.crossVectors(Ka,Qa),i=[hu.x,hu.y,hu.z],vd(i,ys,Es,Ts,du))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new at,new at,new at,new at,new at,new at,new at,new at],Mi=new at,fu=new ko,ys=new at,Es=new at,Ts=new at,Ka=new at,Qa=new at,Mr=new at,No=new at,du=new at,hu=new at,yr=new at;function vd(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){yr.fromArray(o,c);const p=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=e.dot(yr),h=i.dot(yr),x=r.dot(yr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const un=new at,pu=new ye;let hM=0;class zi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=w0,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)pu.fromBufferAttribute(this,i),pu.applyMatrix3(e),this.setXY(i,pu.x,pu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w0&&(e.usage=this.usage),e}}class G_ extends zi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class V_ extends zi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _a extends zi{constructor(e,i,r){super(new Float32Array(e),i,r)}}const pM=new ko,Oo=new at,xd=new at;class Ph{constructor(e=new at,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):pM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Oo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(xd)),this.expandByPoint(Oo.copy(e.center).sub(xd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let mM=0;const ui=new cn,Sd=new ti,bs=new at,$n=new ko,Po=new ko,vn=new at;class Ma extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ZS(e)?V_:G_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return Sd.lookAt(e),Sd.updateMatrix(),this.applyMatrix4(Sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _a(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ae("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ph);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Po.setFromBufferAttribute(p),this.morphTargetsRelative?(vn.addVectors($n.min,Po.min),$n.expandByPoint(vn),vn.addVectors($n.max,Po.max),$n.expandByPoint(vn)):($n.expandByPoint(Po.min),$n.expandByPoint(Po.max))}$n.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)vn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)vn.fromBufferAttribute(p,h),m&&(bs.fromBufferAttribute(e,h),vn.add(bs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let b=0;b<r.count;b++)p[b]=new at,m[b]=new at;const h=new at,x=new at,S=new at,_=new ye,E=new ye,T=new ye,C=new at,M=new at;function v(b,U,ht){h.fromBufferAttribute(r,b),x.fromBufferAttribute(r,U),S.fromBufferAttribute(r,ht),_.fromBufferAttribute(c,b),E.fromBufferAttribute(c,U),T.fromBufferAttribute(c,ht),x.sub(h),S.sub(h),E.sub(_),T.sub(_);const H=1/(E.x*T.y-T.x*E.y);isFinite(H)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(H),M.copy(S).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(H),p[b].add(C),p[U].add(C),p[ht].add(C),m[b].add(M),m[U].add(M),m[ht].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let b=0,U=D.length;b<U;++b){const ht=D[b],H=ht.start,J=ht.count;for(let it=H,st=H+J;it<st;it+=3)v(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const P=new at,N=new at,V=new at,I=new at;function B(b){V.fromBufferAttribute(l,b),I.copy(V);const U=p[b];P.copy(U),P.sub(V.multiplyScalar(V.dot(U))).normalize(),N.crossVectors(I,U);const H=N.dot(m[b])<0?-1:1;d.setXYZW(b,P.x,P.y,P.z,H)}for(let b=0,U=D.length;b<U;++b){const ht=D[b],H=ht.start,J=ht.count;for(let it=H,st=H+J;it<st;it+=3)B(e.getX(it+0)),B(e.getX(it+1)),B(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new at,c=new at,d=new at,p=new at,m=new at,h=new at,x=new at,S=new at;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),h.fromBufferAttribute(r,M),p.add(x),m.add(x),h.add(x),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,S=p.normalized,_=new h.constructor(m.length*x);let E=0,T=0;for(let C=0,M=m.length;C<M;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*x;for(let v=0;v<x;v++)_[T++]=h[E++]}return new zi(_,x,S)}if(this.index===null)return ae("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ma,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,S=h.length;x<S;x++){const _=h[x],E=e(_,r);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,_=h.length;S<_;S++){const E=h[S];x.push(E.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],S=c[h];for(let _=0,E=S.length;_<E;_++)x.push(S[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gM=0;class Hu extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Ds,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Nd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ae(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ae(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ld&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==Cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ca=new at,Md=new at,mu=new at,Ja=new at,yd=new at,gu=new at,Ed=new at;class _M{constructor(e=new at,i=new at(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Md.copy(e).add(i).multiplyScalar(.5),mu.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(Md);const c=e.distanceTo(i)*.5,d=-this.direction.dot(mu),p=Ja.dot(this.direction),m=-Ja.dot(mu),h=Ja.lengthSq(),x=Math.abs(1-d*d);let S,_,E,T;if(x>0)if(S=d*m-p,_=d*p-m,T=c*x,S>=0)if(_>=-T)if(_<=T){const C=1/x;S*=C,_*=C,E=S*(S+d*_+2*p)+_*(d*S+_+2*m)+h}else _=c,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;else _=-c,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;else _<=-T?(S=Math.max(0,-(-d*c+p)),_=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+_*(_+2*m)+h):_<=T?(S=0,_=Math.min(Math.max(-c,-m),c),E=_*(_+2*m)+h):(S=Math.max(0,-(d*c+p)),_=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+_*(_+2*m)+h);else _=d>0?-c:c,S=Math.max(0,-(d*_+p)),E=-S*S+_*(_+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Md).addScaledVector(mu,_),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const r=ca.dot(this.direction),l=ca.dot(ca)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,d=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,d=(e.min.y-_.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(p=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,r,l,c){yd.subVectors(i,e),gu.subVectors(r,e),Ed.crossVectors(yd,gu);let d=this.direction.dot(Ed),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ja.subVectors(this.origin,e);const m=p*this.direction.dot(gu.crossVectors(Ja,gu));if(m<0)return null;const h=p*this.direction.dot(yd.cross(Ja));if(h<0||m+h>d)return null;const x=-p*Ja.dot(Ed);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class X_ extends Hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=M_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const W0=new cn,Er=new _M,_u=new Ph,q0=new at,vu=new at,xu=new at,Su=new at,Td=new at,Mu=new at,Y0=new at,yu=new at;class Hi extends ti{constructor(e=new Ma,i=new X_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Mu.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],S=c[m];x!==0&&(Td.fromBufferAttribute(S,e),d?Mu.addScaledVector(Td,x):Mu.addScaledVector(Td.sub(i),x))}i.add(Mu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(c),Er.copy(e.ray).recast(e.near),!(_u.containsPoint(Er.origin)===!1&&(Er.intersectSphere(_u,q0)===null||Er.origin.distanceToSquared(q0)>(e.far-e.near)**2))&&(W0.copy(c).invert(),Er.copy(e.ray).applyMatrix4(W0),!(r.boundingBox!==null&&Er.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Er)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,C=_.length;T<C;T++){const M=_[T],v=d[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,V=P;N<V;N+=3){const I=p.getX(N),B=p.getX(N+1),b=p.getX(N+2);l=Eu(this,v,e,r,h,x,S,I,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=T,v=C;M<v;M+=3){const D=p.getX(M),P=p.getX(M+1),N=p.getX(M+2);l=Eu(this,d,e,r,h,x,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=_.length;T<C;T++){const M=_[T],v=d[M.materialIndex],D=Math.max(M.start,E.start),P=Math.min(m.count,Math.min(M.start+M.count,E.start+E.count));for(let N=D,V=P;N<V;N+=3){const I=N,B=N+1,b=N+2;l=Eu(this,v,e,r,h,x,S,I,B,b),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let M=T,v=C;M<v;M+=3){const D=M,P=M+1,N=M+2;l=Eu(this,d,e,r,h,x,S,D,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vM(o,e,i,r,l,c,d,p){let m;if(e.side===Vn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,e.side===nr,p),m===null)return null;yu.copy(p),yu.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(yu);return h<i.near||h>i.far?null:{distance:h,point:yu.clone(),object:o}}function Eu(o,e,i,r,l,c,d,p,m,h){o.getVertexPosition(p,vu),o.getVertexPosition(m,xu),o.getVertexPosition(h,Su);const x=vM(o,e,i,r,vu,xu,Su,Y0);if(x){const S=new at;Ei.getBarycoord(Y0,vu,xu,Su,S),l&&(x.uv=Ei.getInterpolatedAttribute(l,p,m,h,S,new ye)),c&&(x.uv1=Ei.getInterpolatedAttribute(c,p,m,h,S,new ye)),d&&(x.normal=Ei.getInterpolatedAttribute(d,p,m,h,S,new at),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:h,normal:new at,materialIndex:0};Ei.getNormal(vu,xu,Su,_.normal),x.face=_,x.barycoord=S}return x}class xM extends On{constructor(e=null,i=1,r=1,l,c,d,p,m,h=En,x=En,S,_){super(null,d,p,m,h,x,l,c,S,_),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bd=new at,SM=new at,MM=new fe;class Rr{constructor(e=new at(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=bd.subVectors(r,i).cross(SM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(bd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||MM.getNormalMatrix(e),l=this.coplanarPoint(bd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Ph,yM=new ye(.5,.5),Tu=new at;class k_{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,d=new Rr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Pi,r=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],S=c[5],_=c[6],E=c[7],T=c[8],C=c[9],M=c[10],v=c[11],D=c[12],P=c[13],N=c[14],V=c[15];if(l[0].setComponents(h-d,E-x,v-T,V-D).normalize(),l[1].setComponents(h+d,E+x,v+T,V+D).normalize(),l[2].setComponents(h+p,E+S,v+C,V+P).normalize(),l[3].setComponents(h-p,E-S,v-C,V-P).normalize(),r)l[4].setComponents(m,_,M,N).normalize(),l[5].setComponents(h-m,E-_,v-M,V-N).normalize();else if(l[4].setComponents(h-m,E-_,v-M,V-N).normalize(),i===Pi)l[5].setComponents(h+m,E+_,v+M,V+N).normalize();else if(i===Fu)l[5].setComponents(m,_,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=yM.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tu.x=l.normal.x>0?e.max.x:e.min.x,Tu.y=l.normal.y>0?e.max.y:e.min.y,Tu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class W_ extends On{constructor(e=[],i=Lr,r,l,c,d,p,m,h,x){super(e,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vo extends On{constructor(e,i,r=Ii,l,c,d,p=En,m=En,h,x=xa,S=1){if(x!==xa&&x!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:S};super(_,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class EM extends Vo{constructor(e,i=Ii,r=Lr,l,c,d=En,p=En,m,h=xa){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,i,r,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class q_ extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wo extends Ma{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],S=[];let _=0,E=0;T("z","y","x",-1,-1,r,i,e,d,c,0),T("z","y","x",1,-1,r,i,-e,d,c,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,c,4),T("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _a(h,3)),this.setAttribute("normal",new _a(x,3)),this.setAttribute("uv",new _a(S,2));function T(C,M,v,D,P,N,V,I,B,b,U){const ht=N/B,H=V/b,J=N/2,it=V/2,st=I/2,j=B+1,w=b+1;let F=0,lt=0;const dt=new at;for(let Et=0;Et<w;Et++){const O=Et*H-it;for(let Y=0;Y<j;Y++){const mt=Y*ht-J;dt[C]=mt*D,dt[M]=O*P,dt[v]=st,h.push(dt.x,dt.y,dt.z),dt[C]=0,dt[M]=0,dt[v]=I>0?1:-1,x.push(dt.x,dt.y,dt.z),S.push(Y/B),S.push(1-Et/b),F+=1}}for(let Et=0;Et<b;Et++)for(let O=0;O<B;O++){const Y=_+O+j*Et,mt=_+O+j*(Et+1),bt=_+(O+1)+j*(Et+1),Ot=_+(O+1)+j*Et;m.push(Y,mt,Ot),m.push(mt,bt,Ot),lt+=6}p.addGroup(E,lt,U),E+=lt,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qo extends Ma{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,S=e/p,_=i/m,E=[],T=[],C=[],M=[];for(let v=0;v<x;v++){const D=v*_-d;for(let P=0;P<h;P++){const N=P*S-c;T.push(N,-D,0),C.push(0,0,1),M.push(P/p),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let D=0;D<p;D++){const P=D+h*v,N=D+h*(v+1),V=D+1+h*(v+1),I=D+1+h*v;E.push(P,N,I),E.push(N,V,I)}this.setIndex(E),this.setAttribute("position",new _a(T,3)),this.setAttribute("normal",new _a(C,3)),this.setAttribute("uv",new _a(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ps(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ae("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Ps(o[i]);for(const l in r)e[l]=r[l]}return e}function TM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Y_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:be.workingColorSpace}const bM={clone:Ps,merge:Nn};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=TM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class CM extends bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class DM extends Hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wM extends Hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bu=new at,Au=new Bs,Ui=new at;class Z_ extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bu,Au,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Au,Ui.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(bu,Au,Ui),Ui.x===1&&Ui.y===1&&Ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bu,Au,Ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $a=new at,Z0=new ye,j0=new ye;class yi extends Z_{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Mh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(nd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mh*2*Math.atan(Math.tan(nd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,Z0,j0),i.subVectors(j0,Z0)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(nd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Fh extends Z_{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const As=-90,Rs=1;class UM extends ti{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new yi(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new yi(As,Rs,e,i);c.layers=this.layers,this.add(c);const d=new yi(As,Rs,e,i);d.layers=this.layers,this.add(d);const p=new yi(As,Rs,e,i);p.layers=this.layers,this.add(p);const m=new yi(As,Rs,e,i);m.layers=this.layers,this.add(m);const h=new yi(As,Rs,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Fu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(r,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(r,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(r,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(r,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(S,_,E),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class LM extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class NM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ae("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function K0(o,e,i,r){const l=OM(r);switch(i){case O_:return o*e;case F_:return o*e/l.components*l.byteLength;case Dh:return o*e/l.components*l.byteLength;case Ns:return o*e*2/l.components*l.byteLength;case wh:return o*e*2/l.components*l.byteLength;case P_:return o*e*3/l.components*l.byteLength;case Ti:return o*e*4/l.components*l.byteLength;case Uh:return o*e*4/l.components*l.byteLength;case wu:case Uu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Nu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:case qd:return Math.max(o,16)*Math.max(e,8)/4;case Xd:case Wd:return Math.max(o,8)*Math.max(e,8)/2;case Yd:case Zd:case Kd:case Qd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case jd:case Jd:case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case eh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case nh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ih:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case sh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case oh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ch:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case hh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ph:case mh:case gh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _h:case vh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xh:case Sh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OM(o){switch(o){case fi:case w_:return{byteLength:1,components:1};case Ho:case U_:case va:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case Ii:case Ah:case Oi:return{byteLength:4,components:1};case L_:case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?ae("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);function j_(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function PM(o){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,h,x),p.onUploadCallback();let E;if(h instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=o.SHORT;else if(h instanceof Uint32Array)E=o.UNSIGNED_INT;else if(h instanceof Int32Array)E=o.INT;else if(h instanceof Int8Array)E=o.BYTE;else if(h instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function r(p,m,h){const x=m.array,S=m.updateRanges;if(o.bindBuffer(h,p),S.length===0)o.bufferSubData(h,0,x);else{S.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<S.length;E++){const T=S[_],C=S[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,S[_]=C)}S.length=_+1;for(let E=0,T=S.length;E<T;E++){const C=S[E];o.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kM=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ay=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ry=`#define PI 3.141592653589793
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
} // validated`,sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oy=`vec3 transformedNormal = objectNormal;
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
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,py=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,_y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,My=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,Ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,by=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ry=`uniform bool receiveShadow;
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
#endif`,Cy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ny=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Oy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Py=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,Fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,By=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wy=`#if defined( USE_POINTS_UV )
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
#endif`,qy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
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
#endif`,Jy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$y=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,bE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,XE=`#define DISTANCE
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
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,jE=`#include <common>
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,$E=`#define MATCAP
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
}`,tT=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,nT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iT=`#define PHONG
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
}`,aT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,rT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,oT=`#define TOON
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
}`,lT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,uT=`uniform float size;
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
}`,cT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,hT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,de={alphahash_fragment:FM,alphahash_pars_fragment:BM,alphamap_fragment:zM,alphamap_pars_fragment:IM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:XM,batching_pars_vertex:kM,batching_vertex:WM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:ZM,iridescence_fragment:jM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:ty,color_fragment:ey,color_pars_fragment:ny,color_pars_vertex:iy,color_vertex:ay,common:ry,cube_uv_reflection_fragment:sy,defaultnormal_vertex:oy,displacementmap_pars_vertex:ly,displacementmap_vertex:uy,emissivemap_fragment:cy,emissivemap_pars_fragment:fy,colorspace_fragment:dy,colorspace_pars_fragment:hy,envmap_fragment:py,envmap_common_pars_fragment:my,envmap_pars_fragment:gy,envmap_pars_vertex:_y,envmap_physical_pars_fragment:Cy,envmap_vertex:vy,fog_vertex:xy,fog_pars_vertex:Sy,fog_fragment:My,fog_pars_fragment:yy,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:Ty,lights_lambert_fragment:by,lights_lambert_pars_fragment:Ay,lights_pars_begin:Ry,lights_toon_fragment:Dy,lights_toon_pars_fragment:wy,lights_phong_fragment:Uy,lights_phong_pars_fragment:Ly,lights_physical_fragment:Ny,lights_physical_pars_fragment:Oy,lights_fragment_begin:Py,lights_fragment_maps:Fy,lights_fragment_end:By,logdepthbuf_fragment:zy,logdepthbuf_pars_fragment:Iy,logdepthbuf_pars_vertex:Hy,logdepthbuf_vertex:Gy,map_fragment:Vy,map_pars_fragment:Xy,map_particle_fragment:ky,map_particle_pars_fragment:Wy,metalnessmap_fragment:qy,metalnessmap_pars_fragment:Yy,morphinstance_vertex:Zy,morphcolor_vertex:jy,morphnormal_vertex:Ky,morphtarget_pars_vertex:Qy,morphtarget_vertex:Jy,normal_fragment_begin:$y,normal_fragment_maps:tE,normal_pars_fragment:eE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:lE,opaque_fragment:uE,packing:cE,premultiplied_alpha_fragment:fE,project_vertex:dE,dithering_fragment:hE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:vE,shadowmap_vertex:xE,shadowmask_pars_fragment:SE,skinbase_vertex:ME,skinning_pars_vertex:yE,skinning_vertex:EE,skinnormal_vertex:TE,specularmap_fragment:bE,specularmap_pars_fragment:AE,tonemapping_fragment:RE,tonemapping_pars_fragment:CE,transmission_fragment:DE,transmission_pars_fragment:wE,uv_pars_fragment:UE,uv_pars_vertex:LE,uv_vertex:NE,worldpos_vertex:OE,background_vert:PE,background_frag:FE,backgroundCube_vert:BE,backgroundCube_frag:zE,cube_vert:IE,cube_frag:HE,depth_vert:GE,depth_frag:VE,distance_vert:XE,distance_frag:kE,equirect_vert:WE,equirect_frag:qE,linedashed_vert:YE,linedashed_frag:ZE,meshbasic_vert:jE,meshbasic_frag:KE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:$E,meshmatcap_frag:tT,meshnormal_vert:eT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:aT,meshphysical_vert:rT,meshphysical_frag:sT,meshtoon_vert:oT,meshtoon_frag:lT,points_vert:uT,points_frag:cT,shadow_vert:fT,shadow_frag:dT,sprite_vert:hT,sprite_frag:pT},Lt={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ni={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new He(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new He(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Ni.physical={uniforms:Nn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Ru={r:0,b:0,g:0},br=new Sa,mT=new cn;function gT(o,e,i,r,l,c){const d=new He(0);let p=l===!0?0:1,m,h,x=null,S=0,_=null;function E(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const N=D.backgroundBlurriness>0;P=e.get(P,N)}return P}function T(D){let P=!1;const N=E(D);N===null?M(d,p):N&&N.isColor&&(M(N,1),P=!0);const V=o.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,c):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(D,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Iu)?(h===void 0&&(h=new Hi(new Wo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ps(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),br.copy(P.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(br)),h.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,(x!==N||S!==N.version||_!==o.toneMapping)&&(h.material.needsUpdate=!0,x=N,S=N.version,_=o.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Hi(new qo(2,2),new bi({name:"BackgroundMaterial",uniforms:Ps(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=be.getTransfer(N.colorSpace)!==Fe,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||S!==N.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=N,S=N.version,_=o.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(Ru,Y_(o)),i.buffers.color.setClear(Ru.r,Ru.g,Ru.b,P,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,P=1){d.set(D),p=P,M(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,M(d,p)},render:T,addToRenderList:C,dispose:v}}function _T(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function p(H,J,it,st,j){let w=!1;const F=S(H,st,it,J);c!==F&&(c=F,h(c.object)),w=E(H,st,it,j),w&&T(H,st,it,j),j!==null&&e.update(j,o.ELEMENT_ARRAY_BUFFER),(w||d)&&(d=!1,N(H,J,it,st),j!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function S(H,J,it,st){const j=st.wireframe===!0;let w=r[J.id];w===void 0&&(w={},r[J.id]=w);const F=H.isInstancedMesh===!0?H.id:0;let lt=w[F];lt===void 0&&(lt={},w[F]=lt);let dt=lt[it.id];dt===void 0&&(dt={},lt[it.id]=dt);let Et=dt[j];return Et===void 0&&(Et=_(m()),dt[j]=Et),Et}function _(H){const J=[],it=[],st=[];for(let j=0;j<i;j++)J[j]=0,it[j]=0,st[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:it,attributeDivisors:st,object:H,attributes:{},index:null}}function E(H,J,it,st){const j=c.attributes,w=J.attributes;let F=0;const lt=it.getAttributes();for(const dt in lt)if(lt[dt].location>=0){const O=j[dt];let Y=w[dt];if(Y===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),O===void 0||O.attribute!==Y||Y&&O.data!==Y.data)return!0;F++}return c.attributesNum!==F||c.index!==st}function T(H,J,it,st){const j={},w=J.attributes;let F=0;const lt=it.getAttributes();for(const dt in lt)if(lt[dt].location>=0){let O=w[dt];O===void 0&&(dt==="instanceMatrix"&&H.instanceMatrix&&(O=H.instanceMatrix),dt==="instanceColor"&&H.instanceColor&&(O=H.instanceColor));const Y={};Y.attribute=O,O&&O.data&&(Y.data=O.data),j[dt]=Y,F++}c.attributes=j,c.attributesNum=F,c.index=st}function C(){const H=c.newAttributes;for(let J=0,it=H.length;J<it;J++)H[J]=0}function M(H){v(H,0)}function v(H,J){const it=c.newAttributes,st=c.enabledAttributes,j=c.attributeDivisors;it[H]=1,st[H]===0&&(o.enableVertexAttribArray(H),st[H]=1),j[H]!==J&&(o.vertexAttribDivisor(H,J),j[H]=J)}function D(){const H=c.newAttributes,J=c.enabledAttributes;for(let it=0,st=J.length;it<st;it++)J[it]!==H[it]&&(o.disableVertexAttribArray(it),J[it]=0)}function P(H,J,it,st,j,w,F){F===!0?o.vertexAttribIPointer(H,J,it,j,w):o.vertexAttribPointer(H,J,it,st,j,w)}function N(H,J,it,st){C();const j=st.attributes,w=it.getAttributes(),F=J.defaultAttributeValues;for(const lt in w){const dt=w[lt];if(dt.location>=0){let Et=j[lt];if(Et===void 0&&(lt==="instanceMatrix"&&H.instanceMatrix&&(Et=H.instanceMatrix),lt==="instanceColor"&&H.instanceColor&&(Et=H.instanceColor)),Et!==void 0){const O=Et.normalized,Y=Et.itemSize,mt=e.get(Et);if(mt===void 0)continue;const bt=mt.buffer,Ot=mt.type,tt=mt.bytesPerElement,_t=Ot===o.INT||Ot===o.UNSIGNED_INT||Et.gpuType===Ah;if(Et.isInterleavedBufferAttribute){const St=Et.data,Ut=St.stride,Wt=Et.offset;if(St.isInstancedInterleavedBuffer){for(let jt=0;jt<dt.locationSize;jt++)v(dt.location+jt,St.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let jt=0;jt<dt.locationSize;jt++)M(dt.location+jt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let jt=0;jt<dt.locationSize;jt++)P(dt.location+jt,Y/dt.locationSize,Ot,O,Ut*tt,(Wt+Y/dt.locationSize*jt)*tt,_t)}else{if(Et.isInstancedBufferAttribute){for(let St=0;St<dt.locationSize;St++)v(dt.location+St,Et.meshPerAttribute);H.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let St=0;St<dt.locationSize;St++)M(dt.location+St);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let St=0;St<dt.locationSize;St++)P(dt.location+St,Y/dt.locationSize,Ot,O,Y*tt,Y/dt.locationSize*St*tt,_t)}}else if(F!==void 0){const O=F[lt];if(O!==void 0)switch(O.length){case 2:o.vertexAttrib2fv(dt.location,O);break;case 3:o.vertexAttrib3fv(dt.location,O);break;case 4:o.vertexAttrib4fv(dt.location,O);break;default:o.vertexAttrib1fv(dt.location,O)}}}}D()}function V(){U();for(const H in r){const J=r[H];for(const it in J){const st=J[it];for(const j in st){const w=st[j];for(const F in w)x(w[F].object),delete w[F];delete st[j]}}delete r[H]}}function I(H){if(r[H.id]===void 0)return;const J=r[H.id];for(const it in J){const st=J[it];for(const j in st){const w=st[j];for(const F in w)x(w[F].object),delete w[F];delete st[j]}}delete r[H.id]}function B(H){for(const J in r){const it=r[J];for(const st in it){const j=it[st];if(j[H.id]===void 0)continue;const w=j[H.id];for(const F in w)x(w[F].object),delete w[F];delete j[H.id]}}}function b(H){for(const J in r){const it=r[J],st=H.isInstancedMesh===!0?H.id:0,j=it[st];if(j!==void 0){for(const w in j){const F=j[w];for(const lt in F)x(F[lt].object),delete F[lt];delete j[w]}delete it[st],Object.keys(it).length===0&&delete r[J]}}}function U(){ht(),d=!0,c!==l&&(c=l,h(c.object))}function ht(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:U,resetDefaultState:ht,dispose:V,releaseStatesOfGeometry:I,releaseStatesOfObject:b,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:D}}function vT(o,e,i){let r;function l(h){r=h}function c(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,S){S!==0&&(o.drawArraysInstanced(r,h,x,S),i.update(x,r,S))}function p(h,x,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,S);let E=0;for(let T=0;T<S;T++)E+=x[T];i.update(E,r,1)}function m(h,x,S,_){if(S===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<h.length;T++)d(h[T],x[T],_[T]);else{E.multiDrawArraysInstancedWEBGL(r,h,0,x,0,_,0,S);let T=0;for(let C=0;C<S;C++)T+=x[C]*_[C];i.update(T,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function xT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ti&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(B){const b=B===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==fi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Oi&&!b)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(ae("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=o.getParameter(o.MAX_SAMPLES),I=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:N,maxSamples:V,samples:I}}function ST(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Rr,p=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||l;return l=_,r=S.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){i=x(S,_,0)},this.setState=function(S,_,E){const T=S.clippingPlanes,C=S.clipIntersection,M=S.clipShadows,v=o.get(S);if(!l||T===null||T.length===0||c&&!M)c?x(null):h();else{const D=c?0:r,P=D*4;let N=v.clippingState||null;m.value=N,N=x(T,_,P,E);for(let V=0;V!==P;++V)N[V]=i[V];v.clippingState=N,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,_,E,T){const C=S!==null?S.length:0;let M=null;if(C!==0){if(M=m.value,T!==!0||M===null){const v=E+C*4,D=_.matrixWorldInverse;p.getNormalMatrix(D),(M===null||M.length<v)&&(M=new Float32Array(v));for(let P=0,N=E;P!==C;++P,N+=4)d.copy(S[P]).applyMatrix4(D,p),d.normal.toArray(M,N),M[N+3]=d.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const er=4,Q0=[.125,.215,.35,.446,.526,.582],Dr=20,MT=256,Fo=new Fh,J0=new He;let Ad=null,Rd=0,Cd=0,Dd=!1;const yT=new at;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=yT}=c;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=Dd,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Lr||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:va,format:Ti,colorSpace:Os,depthBuffer:!1},l=t_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=t_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ET(c)),this._blurMaterial=bT(c,e,i),this._ggxMaterial=TT(c,e,i)}return l}_compileMaterial(e){const i=new Hi(new Ma,e);this._renderer.compile(i,Fo)}_sceneToCubeUV(e,i,r,l,c){const m=new yi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,E=S.toneMapping;S.getClearColor(J0),S.toneMapping=Fi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hi(new Wo,new X_({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let v=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,v=!0):(M.color.copy(J0),v=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[P],c.y,c.z)):N===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[P]));const V=this._cubeSize;Cs(l,N*V,P>2?V:0,V,V),S.setRenderTarget(l),v&&S.render(C,m),S.render(e,m)}S.toneMapping=E,S.autoClear=_,e.background=D}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Lr||e.mapping===Ls;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Cs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Fo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),_=0+h*1.25,E=S*_,{_lodMax:T}=this,C=this._sizeLods[r],M=3*C*(r>T-er?r-T+er:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Cs(c,M,v,3*C,2*C),l.setRenderTarget(c),l.render(p,Fo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-r,Cs(e,M,v,3*C,2*C),l.setRenderTarget(e),l.render(p,Fo)}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const _=h.uniforms,E=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Dr-1),C=c/T,M=isFinite(c)?1+Math.floor(x*C):Dr;M>Dr&&ae(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Dr}`);const v=[];let D=0;for(let B=0;B<Dr;++B){const b=B/C,U=Math.exp(-b*b/2);v.push(U),B===0?D+=U:B<M&&(D+=2*U)}for(let B=0;B<v.length;B++)v[B]=v[B]/D;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=d==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:P}=this;_.dTheta.value=T,_.mipInt.value=P-r;const N=this._sizeLods[l],V=3*N*(l>P-er?l-P+er:0),I=4*(this._cubeSize-N);Cs(i,V,I,3*N,2*N),m.setRenderTarget(i),m.render(S,Fo)}}function ET(o){const e=[],i=[],r=[];let l=o;const c=o-er+1+Q0.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-er?m=Q0[d-o+er-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,_=[x,x,S,x,S,S,x,x,S,S,x,S],E=6,T=6,C=3,M=2,v=1,D=new Float32Array(C*T*E),P=new Float32Array(M*T*E),N=new Float32Array(v*T*E);for(let I=0;I<E;I++){const B=I%3*2/3-1,b=I>2?0:-1,U=[B,b,0,B+2/3,b,0,B+2/3,b+1,0,B,b,0,B+2/3,b+1,0,B,b+1,0];D.set(U,C*T*I),P.set(_,M*T*I);const ht=[I,I,I,I,I,I];N.set(ht,v*T*I)}const V=new Ma;V.setAttribute("position",new zi(D,C)),V.setAttribute("uv",new zi(P,M)),V.setAttribute("faceIndex",new zi(N,v)),r.push(new Hi(V,null)),l>er&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function t_(o,e,i){const r=new Bi(o,e,i);return r.texture.mapping=Iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function TT(o,e,i){return new bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function bT(o,e,i){const r=new Float32Array(Dr),l=new at(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function e_(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gu(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function n_(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Gu(){return`

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
	`}class K_ extends Bi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new W_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Wo(5,5,5),c=new bi({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ma});c.uniforms.tEquirect.value=i;const d=new Hi(l,c),p=i.minFilter;return i.minFilter===wr&&(i.minFilter=Rn),new UM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}function AT(o){let e=new WeakMap,i=new WeakMap,r=null;function l(_,E=!1){return _==null?null:E?d(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===$f||E===td)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new K_(T.height);return C.fromEquirectangularTexture(o,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture){const E=_.mapping,T=E===$f||E===td,C=E===Lr||E===Ls;if(T||C){let M=i.get(_);const v=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new $0(o)),M=T?r.fromEquirectangular(_,M):r.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const D=_.image;return T&&D&&D.height>0||C&&D&&m(D)?(r===null&&(r=new $0(o)),M=T?r.fromEquirectangular(_):r.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function p(_,E){return E===$f?_.mapping=Lr:E===td&&(_.mapping=Ls),_}function m(_){let E=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&E++;return E===T}function h(_){const E=_.target;E.removeEventListener("dispose",h);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function RT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zu("WebGLRenderer: "+r+" extension not supported."),l}}}function CT(o,e,i,r){const l={},c=new WeakMap;function d(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",d),delete l[_.id];const E=c.get(_);E&&(e.remove(E),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const E in _)e.update(_[E],o.ARRAY_BUFFER)}function h(S){const _=[],E=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const D=E.array;C=E.version;for(let P=0,N=D.length;P<N;P+=3){const V=D[P+0],I=D[P+1],B=D[P+2];_.push(V,I,I,B,B,V)}}else{const D=T.array;C=T.version;for(let P=0,N=D.length/3-1;P<N;P+=3){const V=P+0,I=P+1,B=P+2;_.push(V,I,I,B,B,V)}}const M=new(T.count>=65535?V_:G_)(_,1);M.version=C;const v=c.get(S);v&&e.remove(v),c.set(S,M)}function x(S){const _=c.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function DT(o,e,i){let r;function l(_){r=_}let c,d;function p(_){c=_.type,d=_.bytesPerElement}function m(_,E){o.drawElements(r,E,c,_*d),i.update(E,r,1)}function h(_,E,T){T!==0&&(o.drawElementsInstanced(r,E,c,_*d,T),i.update(E,r,T))}function x(_,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,E,0,c,_,0,T);let M=0;for(let v=0;v<T;v++)M+=E[v];i.update(M,r,1)}function S(_,E,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)h(_[v]/d,E[v],C[v]);else{M.multiDrawElementsInstancedWEBGL(r,E,0,c,_,0,C,0,T);let v=0;for(let D=0;D<T;D++)v+=E[D]*C[D];i.update(v,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function wT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:De("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function UT(o,e,i){const r=new WeakMap,l=new tn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let _=r.get(p);if(_===void 0||_.count!==S){let ht=function(){b.dispose(),r.delete(p),p.removeEventListener("dispose",ht)};var E=ht;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),C===!0&&(N=2),M===!0&&(N=3);let V=p.attributes.position.count*N,I=1;V>e.maxTextureSize&&(I=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const B=new Float32Array(V*I*4*S),b=new z_(B,V,I,S);b.type=Oi,b.needsUpdate=!0;const U=N*4;for(let H=0;H<S;H++){const J=v[H],it=D[H],st=P[H],j=V*I*4*H;for(let w=0;w<J.count;w++){const F=w*U;T===!0&&(l.fromBufferAttribute(J,w),B[j+F+0]=l.x,B[j+F+1]=l.y,B[j+F+2]=l.z,B[j+F+3]=0),C===!0&&(l.fromBufferAttribute(it,w),B[j+F+4]=l.x,B[j+F+5]=l.y,B[j+F+6]=l.z,B[j+F+7]=0),M===!0&&(l.fromBufferAttribute(st,w),B[j+F+8]=l.x,B[j+F+9]=l.y,B[j+F+10]=l.z,B[j+F+11]=st.itemSize===4?l.w:1)}}_={count:S,texture:b,size:new ye(V,I)},r.set(p,_),p.addEventListener("dispose",ht)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function LT(o,e,i,r,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,_=e.get(h,S);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),r.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const NT={[y_]:"LINEAR_TONE_MAPPING",[E_]:"REINHARD_TONE_MAPPING",[T_]:"CINEON_TONE_MAPPING",[b_]:"ACES_FILMIC_TONE_MAPPING",[R_]:"AGX_TONE_MAPPING",[C_]:"NEUTRAL_TONE_MAPPING",[A_]:"CUSTOM_TONE_MAPPING"};function OT(o,e,i,r,l){const c=new Bi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),d=new Bi(e,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),p=new Ma;p.setAttribute("position",new _a([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new _a([0,2,0,0,2,0],2));const m=new CM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Hi(p,m),x=new Fh(-1,1,1,-1,0,1);let S=null,_=null,E=!1,T,C=null,M=[],v=!1;this.setSize=function(D,P){c.setSize(D,P),d.setSize(D,P);for(let N=0;N<M.length;N++){const V=M[N];V.setSize&&V.setSize(D,P)}},this.setEffects=function(D){M=D,v=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let V=0;V<M.length;V++){const I=M[V];I.setSize&&I.setSize(P,N)}},this.begin=function(D,P){if(E||D.toneMapping===Fi&&M.length===0)return!1;if(C=P,P!==null){const N=P.width,V=P.height;(c.width!==N||c.height!==V)&&this.setSize(N,V)}return v===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=Fi,!0},this.hasRenderPass=function(){return v},this.end=function(D,P){D.toneMapping=T,E=!0;let N=c,V=d;for(let I=0;I<M.length;I++){const B=M[I];if(B.enabled!==!1&&(B.render(D,V,N,P),B.needsSwap!==!1)){const b=N;N=V,V=b}}if(S!==D.outputColorSpace||_!==D.toneMapping){S=D.outputColorSpace,_=D.toneMapping,m.defines={},be.getTransfer(S)===Fe&&(m.defines.SRGB_TRANSFER="");const I=NT[_];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,D.setRenderTarget(C),D.render(h,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Q_=new On,yh=new Vo(1,1),J_=new z_,$_=new aM,tv=new W_,i_=[],a_=[],r_=new Float32Array(16),s_=new Float32Array(9),o_=new Float32Array(4);function zs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=i_[l];if(c===void 0&&(c=new Float32Array(l),i_[l]=c),e!==0){r.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Vu(o,e){let i=a_[e];i===void 0&&(i=new Int32Array(e),a_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function IT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;o_.set(r),o.uniformMatrix2fv(this.addr,!1,o_),gn(i,r)}}function HT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;s_.set(r),o.uniformMatrix3fv(this.addr,!1,s_),gn(i,r)}}function GT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(mn(i,r))return;r_.set(r),o.uniformMatrix4fv(this.addr,!1,r_),gn(i,r)}}function VT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function qT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function YT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function ZT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function jT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function KT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(yh.compareFunction=i.isReversedDepthBuffer()?Nh:Lh,c=yh):c=Q_,i.setTexture2D(e||c,l)}function QT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||$_,l)}function JT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||tv,l)}function $T(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||J_,l)}function tb(o){switch(o){case 5126:return PT;case 35664:return FT;case 35665:return BT;case 35666:return zT;case 35674:return IT;case 35675:return HT;case 35676:return GT;case 5124:case 35670:return VT;case 35667:case 35671:return XT;case 35668:case 35672:return kT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return ZT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return $T}}function eb(o,e){o.uniform1fv(this.addr,e)}function nb(o,e){const i=zs(e,this.size,2);o.uniform2fv(this.addr,i)}function ib(o,e){const i=zs(e,this.size,3);o.uniform3fv(this.addr,i)}function ab(o,e){const i=zs(e,this.size,4);o.uniform4fv(this.addr,i)}function rb(o,e){const i=zs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function sb(o,e){const i=zs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ob(o,e){const i=zs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function lb(o,e){o.uniform1iv(this.addr,e)}function ub(o,e){o.uniform2iv(this.addr,e)}function cb(o,e){o.uniform3iv(this.addr,e)}function fb(o,e){o.uniform4iv(this.addr,e)}function db(o,e){o.uniform1uiv(this.addr,e)}function hb(o,e){o.uniform2uiv(this.addr,e)}function pb(o,e){o.uniform3uiv(this.addr,e)}function mb(o,e){o.uniform4uiv(this.addr,e)}function gb(o,e,i){const r=this.cache,l=e.length,c=Vu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=yh:d=Q_;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function _b(o,e,i){const r=this.cache,l=e.length,c=Vu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||$_,c[d])}function vb(o,e,i){const r=this.cache,l=e.length,c=Vu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||tv,c[d])}function xb(o,e,i){const r=this.cache,l=e.length,c=Vu(i,l);mn(r,c)||(o.uniform1iv(this.addr,c),gn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||J_,c[d])}function Sb(o){switch(o){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return ab;case 35674:return rb;case 35675:return sb;case 35676:return ob;case 5124:case 35670:return lb;case 35667:case 35671:return ub;case 35668:case 35672:return cb;case 35669:case 35673:return fb;case 5125:return db;case 36294:return hb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}class Mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=tb(i.type)}}class yb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Sb(i.type)}}class Eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function l_(o,e){o.seq.push(e),o.map[e.id]=e}function Tb(o,e,i){const r=o.name,l=r.length;for(wd.lastIndex=0;;){const c=wd.exec(r),d=wd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){l_(i,h===void 0?new Mb(p,o,e):new yb(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new Eb(p),l_(i,S)),i=S}}}class Ou{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);Tb(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function u_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const bb=37297;let Ab=0;function Rb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const c_=new fe;function Cb(o){be._getMatrix(c_,be.workingColorSpace,o);const e=`mat3( ${c_.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(o)){case Pu:return[e,"LinearTransferOETF"];case Fe:return[e,"sRGBTransferOETF"];default:return ae("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function f_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+Rb(o.getShaderSource(e),p)}else return c}function Db(o,e){const i=Cb(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const wb={[y_]:"Linear",[E_]:"Reinhard",[T_]:"Cineon",[b_]:"ACESFilmic",[R_]:"AgX",[C_]:"Neutral",[A_]:"Custom"};function Ub(o,e){const i=wb[e];return i===void 0?(ae("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cu=new at;function Lb(){be.getLuminanceCoefficients(Cu);const o=Cu.x.toFixed(4),e=Cu.y.toFixed(4),i=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function Ob(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Pb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function Io(o){return o!==""}function d_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function h_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eh(o){return o.replace(Fb,zb)}const Bb=new Map;function zb(o,e){let i=de[e];if(i===void 0){const r=Bb.get(e);if(r!==void 0)i=de[r],ae('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Eh(i)}const Ib=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(o){return o.replace(Ib,Hb)}function Hb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function m_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Gb={[Du]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function Vb(o){return Gb[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xb={[Lr]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function kb(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Xb[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Wb={[Ls]:"ENVMAP_MODE_REFRACTION"};function qb(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Wb[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Yb={[M_]:"ENVMAP_BLENDING_MULTIPLY",[FS]:"ENVMAP_BLENDING_MIX",[BS]:"ENVMAP_BLENDING_ADD"};function Zb(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Yb[o.combine]||"ENVMAP_BLENDING_NONE"}function jb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Kb(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=Vb(i),h=kb(i),x=qb(i),S=Zb(i),_=jb(i),E=Nb(i),T=Ob(c),C=l.createProgram();let M,v,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Io).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Io).join(`
`),v.length>0&&(v+=`
`)):(M=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),v=[m_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?de.tonemapping_pars_fragment:"",i.toneMapping!==Fi?Ub("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,Db("linearToOutputTexel",i.outputColorSpace),Lb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),d=Eh(d),d=d_(d,i),d=h_(d,i),p=Eh(p),p=d_(p,i),p=h_(p,i),d=p_(d),p=p_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===U0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===U0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=D+M+d,N=D+v+p,V=u_(l,l.VERTEX_SHADER,P),I=u_(l,l.FRAGMENT_SHADER,N);l.attachShader(C,V),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(H){if(o.debug.checkShaderErrors){const J=l.getProgramInfoLog(C)||"",it=l.getShaderInfoLog(V)||"",st=l.getShaderInfoLog(I)||"",j=J.trim(),w=it.trim(),F=st.trim();let lt=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,I);else{const Et=f_(l,V,"vertex"),O=f_(l,I,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+Et+`
`+O)}else j!==""?ae("WebGLProgram: Program Info Log:",j):(w===""||F==="")&&(dt=!1);dt&&(H.diagnostics={runnable:lt,programLog:j,vertexShader:{log:w,prefix:M},fragmentShader:{log:F,prefix:v}})}l.deleteShader(V),l.deleteShader(I),b=new Ou(l,C),U=Pb(l,C)}let b;this.getUniforms=function(){return b===void 0&&B(this),b};let U;this.getAttributes=function(){return U===void 0&&B(this),U};let ht=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ht===!1&&(ht=l.getProgramParameter(C,bb)),ht},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ab++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=I,this}let Qb=0;class Jb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new $b(e),i.set(e,r)),r}}class $b{constructor(e){this.id=Qb++,this.code=e,this.usedTimes=0}}function tA(o,e,i,r,l,c){const d=new I_,p=new Jb,m=new Set,h=[],x=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,U,ht,H,J){const it=H.fog,st=J.geometry,j=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,w=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,F=e.get(b.envMap||j,w),lt=F&&F.mapping===Iu?F.image.height:null,dt=E[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&ae("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const Et=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,O=Et!==void 0?Et.length:0;let Y=0;st.morphAttributes.position!==void 0&&(Y=1),st.morphAttributes.normal!==void 0&&(Y=2),st.morphAttributes.color!==void 0&&(Y=3);let mt,bt,Ot,tt;if(dt){const Te=Ni[dt];mt=Te.vertexShader,bt=Te.fragmentShader}else mt=b.vertexShader,bt=b.fragmentShader,p.update(b),Ot=p.getVertexShaderID(b),tt=p.getFragmentShaderID(b);const _t=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Ut=J.isInstancedMesh===!0,Wt=J.isBatchedMesh===!0,jt=!!b.map,Ve=!!b.matcap,pe=!!F,he=!!b.aoMap,Ee=!!b.lightMap,ne=!!b.bumpMap,je=!!b.normalMap,G=!!b.displacementMap,We=!!b.emissiveMap,Me=!!b.metalnessMap,Ue=!!b.roughnessMap,qt=b.anisotropy>0,L=b.clearcoat>0,y=b.dispersion>0,q=b.iridescence>0,pt=b.sheen>0,xt=b.transmission>0,ct=qt&&!!b.anisotropyMap,Xt=L&&!!b.clearcoatMap,Ct=L&&!!b.clearcoatNormalMap,Kt=L&&!!b.clearcoatRoughnessMap,$t=q&&!!b.iridescenceMap,Tt=q&&!!b.iridescenceThicknessMap,Mt=pt&&!!b.sheenColorMap,Pt=pt&&!!b.sheenRoughnessMap,Nt=!!b.specularMap,Ft=!!b.specularColorMap,le=!!b.specularIntensityMap,W=xt&&!!b.transmissionMap,Rt=xt&&!!b.thicknessMap,At=!!b.gradientMap,Bt=!!b.alphaMap,yt=b.alphaTest>0,ut=!!b.alphaHash,It=!!b.extensions;let ee=Fi;b.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ee=o.toneMapping);const Ne={shaderID:dt,shaderType:b.type,shaderName:b.name,vertexShader:mt,fragmentShader:bt,defines:b.defines,customVertexShaderID:Ot,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Wt,batchingColor:Wt&&J._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&J.instanceColor!==null,instancingMorph:Ut&&J.morphTexture!==null,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Os,alphaToCoverage:!!b.alphaToCoverage,map:jt,matcap:Ve,envMap:pe,envMapMode:pe&&F.mapping,envMapCubeUVHeight:lt,aoMap:he,lightMap:Ee,bumpMap:ne,normalMap:je,displacementMap:G,emissiveMap:We,normalMapObjectSpace:je&&b.normalMapType===GS,normalMapTangentSpace:je&&b.normalMapType===HS,metalnessMap:Me,roughnessMap:Ue,anisotropy:qt,anisotropyMap:ct,clearcoat:L,clearcoatMap:Xt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Kt,dispersion:y,iridescence:q,iridescenceMap:$t,iridescenceThicknessMap:Tt,sheen:pt,sheenColorMap:Mt,sheenRoughnessMap:Pt,specularMap:Nt,specularColorMap:Ft,specularIntensityMap:le,transmission:xt,transmissionMap:W,thicknessMap:Rt,gradientMap:At,opaque:b.transparent===!1&&b.blending===Ds&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:yt,alphaHash:ut,combine:b.combine,mapUv:jt&&T(b.map.channel),aoMapUv:he&&T(b.aoMap.channel),lightMapUv:Ee&&T(b.lightMap.channel),bumpMapUv:ne&&T(b.bumpMap.channel),normalMapUv:je&&T(b.normalMap.channel),displacementMapUv:G&&T(b.displacementMap.channel),emissiveMapUv:We&&T(b.emissiveMap.channel),metalnessMapUv:Me&&T(b.metalnessMap.channel),roughnessMapUv:Ue&&T(b.roughnessMap.channel),anisotropyMapUv:ct&&T(b.anisotropyMap.channel),clearcoatMapUv:Xt&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&T(b.sheenRoughnessMap.channel),specularMapUv:Nt&&T(b.specularMap.channel),specularColorMapUv:Ft&&T(b.specularColorMap.channel),specularIntensityMapUv:le&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:Rt&&T(b.thicknessMap.channel),alphaMapUv:Bt&&T(b.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(je||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!st.attributes.uv&&(jt||Bt),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||st.attributes.normal===void 0&&je===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:St,skinning:J.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Y,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&ht.length>0,shadowMapType:o.shadowMap.type,toneMapping:ee,decodeVideoTexture:jt&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===Fe,decodeVideoTextureEmissive:We&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===Fe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ha,flipSided:b.side===Vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ne.vertexUv1s=m.has(1),Ne.vertexUv2s=m.has(2),Ne.vertexUv3s=m.has(3),m.clear(),Ne}function M(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const ht in b.defines)U.push(ht),U.push(b.defines[ht]);return b.isRawShaderMaterial===!1&&(v(U,b),D(U,b),U.push(o.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function v(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.numLightProbes),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function D(b,U){d.disableAll(),U.instancing&&d.enable(0),U.instancingColor&&d.enable(1),U.instancingMorph&&d.enable(2),U.matcap&&d.enable(3),U.envMap&&d.enable(4),U.normalMapObjectSpace&&d.enable(5),U.normalMapTangentSpace&&d.enable(6),U.clearcoat&&d.enable(7),U.iridescence&&d.enable(8),U.alphaTest&&d.enable(9),U.vertexColors&&d.enable(10),U.vertexAlphas&&d.enable(11),U.vertexUv1s&&d.enable(12),U.vertexUv2s&&d.enable(13),U.vertexUv3s&&d.enable(14),U.vertexTangents&&d.enable(15),U.anisotropy&&d.enable(16),U.alphaHash&&d.enable(17),U.batching&&d.enable(18),U.dispersion&&d.enable(19),U.batchingColor&&d.enable(20),U.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),U.fog&&d.enable(0),U.useFog&&d.enable(1),U.flatShading&&d.enable(2),U.logarithmicDepthBuffer&&d.enable(3),U.reversedDepthBuffer&&d.enable(4),U.skinning&&d.enable(5),U.morphTargets&&d.enable(6),U.morphNormals&&d.enable(7),U.morphColors&&d.enable(8),U.premultipliedAlpha&&d.enable(9),U.shadowMapEnabled&&d.enable(10),U.doubleSided&&d.enable(11),U.flipSided&&d.enable(12),U.useDepthPacking&&d.enable(13),U.dithering&&d.enable(14),U.transmission&&d.enable(15),U.sheen&&d.enable(16),U.opaque&&d.enable(17),U.pointsUvs&&d.enable(18),U.decodeVideoTexture&&d.enable(19),U.decodeVideoTextureEmissive&&d.enable(20),U.alphaToCoverage&&d.enable(21),b.push(d.mask)}function P(b){const U=E[b.type];let ht;if(U){const H=Ni[U];ht=bM.clone(H.uniforms)}else ht=b.uniforms;return ht}function N(b,U){let ht=x.get(U);return ht!==void 0?++ht.usedTimes:(ht=new Kb(o,U,b,l),h.push(ht),x.set(U,ht)),ht}function V(b){if(--b.usedTimes===0){const U=h.indexOf(b);h[U]=h[h.length-1],h.pop(),x.delete(b.cacheKey),b.destroy()}}function I(b){p.remove(b)}function B(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:P,acquireProgram:N,releaseProgram:V,releaseShaderCache:I,programs:h,dispose:B}}function eA(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function nA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function g_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function __(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,C,M,v){let D=o[e];return D===void 0?(D={id:_.id,object:_,geometry:E,material:T,materialVariant:d(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:v},o[e]=D):(D.id=_.id,D.object=_,D.geometry=E,D.material=T,D.materialVariant=d(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=M,D.group=v),e++,D}function m(_,E,T,C,M,v){const D=p(_,E,T,C,M,v);T.transmission>0?r.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(_,E,T,C,M,v){const D=p(_,E,T,C,M,v);T.transmission>0?r.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function x(_,E){i.length>1&&i.sort(_||nA),r.length>1&&r.sort(E||g_),l.length>1&&l.sort(E||g_)}function S(){for(let _=e,E=o.length;_<E;_++){const T=o[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:m,unshift:h,finish:S,sort:x}}function iA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new __,o.set(r,[d])):l>=c.length?(d=new __,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function aA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new at,color:new He};break;case"SpotLight":i={position:new at,direction:new at,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new He,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new He,groundColor:new He};break;case"RectAreaLight":i={color:new He,position:new at,halfWidth:new at,halfHeight:new at};break}return o[e.id]=i,i}}}function rA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let sA=0;function oA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function lA(o){const e=new aA,i=rA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new at);const l=new at,c=new cn,d=new cn;function p(h){let x=0,S=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let E=0,T=0,C=0,M=0,v=0,D=0,P=0,N=0,V=0,I=0,B=0;h.sort(oA);for(let U=0,ht=h.length;U<ht;U++){const H=h[U],J=H.color,it=H.intensity,st=H.distance;let j=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ns?j=H.shadow.map.texture:j=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=J.r*it,S+=J.g*it,_+=J.b*it;else if(H.isLightProbe){for(let w=0;w<9;w++)r.probe[w].addScaledVector(H.sh.coefficients[w],it);B++}else if(H.isDirectionalLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const F=H.shadow,lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,r.directionalShadow[E]=lt,r.directionalShadowMap[E]=j,r.directionalShadowMatrix[E]=H.shadow.matrix,D++}r.directional[E]=w,E++}else if(H.isSpotLight){const w=e.get(H);w.position.setFromMatrixPosition(H.matrixWorld),w.color.copy(J).multiplyScalar(it),w.distance=st,w.coneCos=Math.cos(H.angle),w.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),w.decay=H.decay,r.spot[C]=w;const F=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,F.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[C]=F.matrix,H.castShadow){const lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,r.spotShadow[C]=lt,r.spotShadowMap[C]=j,N++}C++}else if(H.isRectAreaLight){const w=e.get(H);w.color.copy(J).multiplyScalar(it),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=w,M++}else if(H.isPointLight){const w=e.get(H);if(w.color.copy(H.color).multiplyScalar(H.intensity),w.distance=H.distance,w.decay=H.decay,H.castShadow){const F=H.shadow,lt=i.get(H);lt.shadowIntensity=F.intensity,lt.shadowBias=F.bias,lt.shadowNormalBias=F.normalBias,lt.shadowRadius=F.radius,lt.shadowMapSize=F.mapSize,lt.shadowCameraNear=F.camera.near,lt.shadowCameraFar=F.camera.far,r.pointShadow[T]=lt,r.pointShadowMap[T]=j,r.pointShadowMatrix[T]=H.shadow.matrix,P++}r.point[T]=w,T++}else if(H.isHemisphereLight){const w=e.get(H);w.skyColor.copy(H.color).multiplyScalar(it),w.groundColor.copy(H.groundColor).multiplyScalar(it),r.hemi[v]=w,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=_;const b=r.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==M||b.hemiLength!==v||b.numDirectionalShadows!==D||b.numPointShadows!==P||b.numSpotShadows!==N||b.numSpotMaps!==V||b.numLightProbes!==B)&&(r.directional.length=E,r.spot.length=C,r.rectArea.length=M,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+V-I,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,b.directionalLength=E,b.pointLength=T,b.spotLength=C,b.rectAreaLength=M,b.hemiLength=v,b.numDirectionalShadows=D,b.numPointShadows=P,b.numSpotShadows=N,b.numSpotMaps=V,b.numLightProbes=B,r.version=sA++)}function m(h,x){let S=0,_=0,E=0,T=0,C=0;const M=x.matrixWorldInverse;for(let v=0,D=h.length;v<D;v++){const P=h[v];if(P.isDirectionalLight){const N=r.directional[S];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isSpotLight){const N=r.spot[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),E++}else if(P.isRectAreaLight){const N=r.rectArea[T];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),d.identity(),c.copy(P.matrixWorld),c.premultiply(M),d.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),T++}else if(P.isPointLight){const N=r.point[_];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),_++}else if(P.isHemisphereLight){const N=r.hemi[C];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),C++}}}return{setup:p,setupView:m,state:r}}function v_(o){const e=new lA(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function p(){e.setup(i)}function m(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function uA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new v_(o),e.set(l,[p])):c>=d.length?(p=new v_(o),d.push(p)):p=d[c],p}function r(){e=new WeakMap}return{get:i,dispose:r}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dA=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],hA=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],x_=new cn,Bo=new at,Ud=new at;function pA(o,e,i){let r=new k_;const l=new ye,c=new ye,d=new tn,p=new DM,m=new wM,h={},x=i.maxTextureSize,S={[nr]:Vn,[Vn]:nr,[ha]:ha},_=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:cA,fragmentShader:fA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new Ma;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hi(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Du;let v=this.type;this.render=function(I,B,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||I.length===0)return;this.type===_S&&(ae("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Du);const U=o.getRenderTarget(),ht=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),J=o.state;J.setBlending(ma),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const it=v!==this.type;it&&B.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(j=>j.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,j=I.length;st<j;st++){const w=I[st],F=w.shadow;if(F===void 0){ae("WebGLShadowMap:",w,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const lt=F.getFrameExtents();l.multiply(lt),c.copy(F.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/lt.x),l.x=c.x*lt.x,F.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/lt.y),l.y=c.y*lt.y,F.mapSize.y=c.y));const dt=o.state.buffers.depth.getReversed();if(F.camera._reversedDepth=dt,F.map===null||it===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===zo){if(w.isPointLight){ae("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Bi(l.x,l.y,{format:Ns,type:va,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=w.name+".shadowMap",F.map.depthTexture=new Vo(l.x,l.y,Oi),F.map.depthTexture.name=w.name+".shadowMapDepth",F.map.depthTexture.format=xa,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En}else w.isPointLight?(F.map=new K_(l.x),F.map.depthTexture=new EM(l.x,Ii)):(F.map=new Bi(l.x,l.y),F.map.depthTexture=new Vo(l.x,l.y,Ii)),F.map.depthTexture.name=w.name+".shadowMap",F.map.depthTexture.format=xa,this.type===Du?(F.map.depthTexture.compareFunction=dt?Nh:Lh,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=En,F.map.depthTexture.magFilter=En);F.camera.updateProjectionMatrix()}const Et=F.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Et;O++){if(F.map.isWebGLCubeRenderTarget)o.setRenderTarget(F.map,O),o.clear();else{O===0&&(o.setRenderTarget(F.map),o.clear());const Y=F.getViewport(O);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),J.viewport(d)}if(w.isPointLight){const Y=F.camera,mt=F.matrix,bt=w.distance||Y.far;bt!==Y.far&&(Y.far=bt,Y.updateProjectionMatrix()),Bo.setFromMatrixPosition(w.matrixWorld),Y.position.copy(Bo),Ud.copy(Y.position),Ud.add(dA[O]),Y.up.copy(hA[O]),Y.lookAt(Ud),Y.updateMatrixWorld(),mt.makeTranslation(-Bo.x,-Bo.y,-Bo.z),x_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),F._frustum.setFromProjectionMatrix(x_,Y.coordinateSystem,Y.reversedDepth)}else F.updateMatrices(w);r=F.getFrustum(),N(B,b,F.camera,w,this.type)}F.isPointLightShadow!==!0&&this.type===zo&&D(F,b),F.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,ht,H)};function D(I,B){const b=e.update(C);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,E.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Bi(l.x,l.y,{format:Ns,type:va})),_.uniforms.shadow_pass.value=I.map.depthTexture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,b,_,C,null),E.uniforms.shadow_pass.value=I.mapPass.texture,E.uniforms.resolution.value=I.mapSize,E.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,b,E,C,null)}function P(I,B,b,U){let ht=null;const H=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)ht=H;else if(ht=b.isPointLight===!0?m:p,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const J=ht.uuid,it=B.uuid;let st=h[J];st===void 0&&(st={},h[J]=st);let j=st[it];j===void 0&&(j=ht.clone(),st[it]=j,B.addEventListener("dispose",V)),ht=j}if(ht.visible=B.visible,ht.wireframe=B.wireframe,U===zo?ht.side=B.shadowSide!==null?B.shadowSide:B.side:ht.side=B.shadowSide!==null?B.shadowSide:S[B.side],ht.alphaMap=B.alphaMap,ht.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ht.map=B.map,ht.clipShadows=B.clipShadows,ht.clippingPlanes=B.clippingPlanes,ht.clipIntersection=B.clipIntersection,ht.displacementMap=B.displacementMap,ht.displacementScale=B.displacementScale,ht.displacementBias=B.displacementBias,ht.wireframeLinewidth=B.wireframeLinewidth,ht.linewidth=B.linewidth,b.isPointLight===!0&&ht.isMeshDistanceMaterial===!0){const J=o.properties.get(ht);J.light=b}return ht}function N(I,B,b,U,ht){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ht===zo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const it=e.update(I),st=I.material;if(Array.isArray(st)){const j=it.groups;for(let w=0,F=j.length;w<F;w++){const lt=j[w],dt=st[lt.materialIndex];if(dt&&dt.visible){const Et=P(I,dt,U,ht);I.onBeforeShadow(o,I,B,b,it,Et,lt),o.renderBufferDirect(b,null,it,Et,I,lt),I.onAfterShadow(o,I,B,b,it,Et,lt)}}}else if(st.visible){const j=P(I,st,U,ht);I.onBeforeShadow(o,I,B,b,it,j,null),o.renderBufferDirect(b,null,it,j,I,null),I.onAfterShadow(o,I,B,b,it,j,null)}}const J=I.children;for(let it=0,st=J.length;it<st;it++)N(J[it],B,b,U,ht)}function V(I){I.target.removeEventListener("dispose",V);for(const b in h){const U=h[b],ht=I.target.uuid;ht in U&&(U[ht].dispose(),delete U[ht])}}}function mA(o,e){function i(){let W=!1;const Rt=new tn;let At=null;const Bt=new tn(0,0,0,0);return{setMask:function(yt){At!==yt&&!W&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){W=yt},setClear:function(yt,ut,It,ee,Ne){Ne===!0&&(yt*=ee,ut*=ee,It*=ee),Rt.set(yt,ut,It,ee),Bt.equals(Rt)===!1&&(o.clearColor(yt,ut,It,ee),Bt.copy(Rt))},reset:function(){W=!1,At=null,Bt.set(-1,0,0,0)}}}function r(){let W=!1,Rt=!1,At=null,Bt=null,yt=null;return{setReversed:function(ut){if(Rt!==ut){const It=e.get("EXT_clip_control");ut?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),Rt=ut;const ee=yt;yt=null,this.setClear(ee)}},getReversed:function(){return Rt},setTest:function(ut){ut?_t(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(ut){At!==ut&&!W&&(o.depthMask(ut),At=ut)},setFunc:function(ut){if(Rt&&(ut=QS[ut]),Bt!==ut){switch(ut){case Od:o.depthFunc(o.NEVER);break;case Pd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case Us:o.depthFunc(o.LEQUAL);break;case Bd:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Id:o.depthFunc(o.GREATER);break;case Hd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Bt=ut}},setLocked:function(ut){W=ut},setClear:function(ut){yt!==ut&&(yt=ut,Rt&&(ut=1-ut),o.clearDepth(ut))},reset:function(){W=!1,At=null,Bt=null,yt=null,Rt=!1}}}function l(){let W=!1,Rt=null,At=null,Bt=null,yt=null,ut=null,It=null,ee=null,Ne=null;return{setTest:function(Te){W||(Te?_t(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Te){Rt!==Te&&!W&&(o.stencilMask(Te),Rt=Te)},setFunc:function(Te,Cn,di){(At!==Te||Bt!==Cn||yt!==di)&&(o.stencilFunc(Te,Cn,di),At=Te,Bt=Cn,yt=di)},setOp:function(Te,Cn,di){(ut!==Te||It!==Cn||ee!==di)&&(o.stencilOp(Te,Cn,di),ut=Te,It=Cn,ee=di)},setLocked:function(Te){W=Te},setClear:function(Te){Ne!==Te&&(o.clearStencil(Te),Ne=Te)},reset:function(){W=!1,Rt=null,At=null,Bt=null,yt=null,ut=null,It=null,ee=null,Ne=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},_=new WeakMap,E=[],T=null,C=!1,M=null,v=null,D=null,P=null,N=null,V=null,I=null,B=new He(0,0,0),b=0,U=!1,ht=null,H=null,J=null,it=null,st=null;const j=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let w=!1,F=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(lt)[1]),w=F>=1):lt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),w=F>=2);let dt=null,Et={};const O=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),mt=new tn().fromArray(O),bt=new tn().fromArray(Y);function Ot(W,Rt,At,Bt){const yt=new Uint8Array(4),ut=o.createTexture();o.bindTexture(W,ut),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<At;It++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Bt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Rt+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return ut}const tt={};tt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_t(o.DEPTH_TEST),d.setFunc(Us),ne(!1),je(b0),_t(o.CULL_FACE),he(ma);function _t(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function St(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ut(W,Rt){return S[W]!==Rt?(o.bindFramebuffer(W,Rt),S[W]=Rt,W===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Rt),W===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Wt(W,Rt){let At=E,Bt=!1;if(W){At=_.get(Rt),At===void 0&&(At=[],_.set(Rt,At));const yt=W.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let ut=0,It=yt.length;ut<It;ut++)At[ut]=o.COLOR_ATTACHMENT0+ut;At.length=yt.length,Bt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Bt=!0);Bt&&o.drawBuffers(At)}function jt(W){return T!==W?(o.useProgram(W),T=W,!0):!1}const Ve={[Cr]:o.FUNC_ADD,[xS]:o.FUNC_SUBTRACT,[SS]:o.FUNC_REVERSE_SUBTRACT};Ve[MS]=o.MIN,Ve[yS]=o.MAX;const pe={[ES]:o.ZERO,[TS]:o.ONE,[bS]:o.SRC_COLOR,[Ld]:o.SRC_ALPHA,[US]:o.SRC_ALPHA_SATURATE,[DS]:o.DST_COLOR,[RS]:o.DST_ALPHA,[AS]:o.ONE_MINUS_SRC_COLOR,[Nd]:o.ONE_MINUS_SRC_ALPHA,[wS]:o.ONE_MINUS_DST_COLOR,[CS]:o.ONE_MINUS_DST_ALPHA,[LS]:o.CONSTANT_COLOR,[NS]:o.ONE_MINUS_CONSTANT_COLOR,[OS]:o.CONSTANT_ALPHA,[PS]:o.ONE_MINUS_CONSTANT_ALPHA};function he(W,Rt,At,Bt,yt,ut,It,ee,Ne,Te){if(W===ma){C===!0&&(St(o.BLEND),C=!1);return}if(C===!1&&(_t(o.BLEND),C=!0),W!==vS){if(W!==M||Te!==U){if((v!==Cr||N!==Cr)&&(o.blendEquation(o.FUNC_ADD),v=Cr,N=Cr),Te)switch(W){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFunc(o.ONE,o.ONE);break;case R0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case C0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",W);break}else switch(W){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case A0:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case R0:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case C0:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",W);break}D=null,P=null,V=null,I=null,B.set(0,0,0),b=0,M=W,U=Te}return}yt=yt||Rt,ut=ut||At,It=It||Bt,(Rt!==v||yt!==N)&&(o.blendEquationSeparate(Ve[Rt],Ve[yt]),v=Rt,N=yt),(At!==D||Bt!==P||ut!==V||It!==I)&&(o.blendFuncSeparate(pe[At],pe[Bt],pe[ut],pe[It]),D=At,P=Bt,V=ut,I=It),(ee.equals(B)===!1||Ne!==b)&&(o.blendColor(ee.r,ee.g,ee.b,Ne),B.copy(ee),b=Ne),M=W,U=!1}function Ee(W,Rt){W.side===ha?St(o.CULL_FACE):_t(o.CULL_FACE);let At=W.side===Vn;Rt&&(At=!At),ne(At),W.blending===Ds&&W.transparent===!1?he(ma):he(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Bt=W.stencilWrite;p.setTest(Bt),Bt&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),We(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function ne(W){ht!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),ht=W)}function je(W){W!==mS?(_t(o.CULL_FACE),W!==H&&(W===b0?o.cullFace(o.BACK):W===gS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),H=W}function G(W){W!==J&&(w&&o.lineWidth(W),J=W)}function We(W,Rt,At){W?(_t(o.POLYGON_OFFSET_FILL),(it!==Rt||st!==At)&&(it=Rt,st=At,d.getReversed()&&(Rt=-Rt),o.polygonOffset(Rt,At))):St(o.POLYGON_OFFSET_FILL)}function Me(W){W?_t(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function Ue(W){W===void 0&&(W=o.TEXTURE0+j-1),dt!==W&&(o.activeTexture(W),dt=W)}function qt(W,Rt,At){At===void 0&&(dt===null?At=o.TEXTURE0+j-1:At=dt);let Bt=Et[At];Bt===void 0&&(Bt={type:void 0,texture:void 0},Et[At]=Bt),(Bt.type!==W||Bt.texture!==Rt)&&(dt!==At&&(o.activeTexture(At),dt=At),o.bindTexture(W,Rt||tt[W]),Bt.type=W,Bt.texture=Rt)}function L(){const W=Et[dt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function q(){try{o.compressedTexImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function pt(){try{o.texSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function xt(){try{o.texSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Ct(){try{o.texStorage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Kt(){try{o.texStorage3D(...arguments)}catch(W){De("WebGLState:",W)}}function $t(){try{o.texImage2D(...arguments)}catch(W){De("WebGLState:",W)}}function Tt(){try{o.texImage3D(...arguments)}catch(W){De("WebGLState:",W)}}function Mt(W){mt.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),mt.copy(W))}function Pt(W){bt.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),bt.copy(W))}function Nt(W,Rt){let At=h.get(Rt);At===void 0&&(At=new WeakMap,h.set(Rt,At));let Bt=At.get(W);Bt===void 0&&(Bt=o.getUniformBlockIndex(Rt,W.name),At.set(W,Bt))}function Ft(W,Rt){const Bt=h.get(Rt).get(W);m.get(Rt)!==Bt&&(o.uniformBlockBinding(Rt,Bt,W.__bindingPointIndex),m.set(Rt,Bt))}function le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},dt=null,Et={},S={},_=new WeakMap,E=[],T=null,C=!1,M=null,v=null,D=null,P=null,N=null,V=null,I=null,B=new He(0,0,0),b=0,U=!1,ht=null,H=null,J=null,it=null,st=null,mt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:_t,disable:St,bindFramebuffer:Ut,drawBuffers:Wt,useProgram:jt,setBlending:he,setMaterial:Ee,setFlipSided:ne,setCullFace:je,setLineWidth:G,setPolygonOffset:We,setScissorTest:Me,activeTexture:Ue,bindTexture:qt,unbindTexture:L,compressedTexImage2D:y,compressedTexImage3D:q,texImage2D:$t,texImage3D:Tt,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Xt,scissor:Mt,viewport:Pt,reset:le}}function gA(o,e,i,r,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ye,x=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,y){return E?new OffscreenCanvas(L,y):Bu("canvas")}function C(L,y,q){let pt=1;const xt=qt(L);if((xt.width>q||xt.height>q)&&(pt=q/Math.max(xt.width,xt.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(pt*xt.width),Xt=Math.floor(pt*xt.height);S===void 0&&(S=T(ct,Xt));const Ct=y?T(ct,Xt):S;return Ct.width=ct,Ct.height=Xt,Ct.getContext("2d").drawImage(L,0,0,ct,Xt),ae("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Xt+")."),Ct}else return"data"in L&&ae("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(L,y,q,pt,xt=!1){if(L!==null){if(o[L]!==void 0)return o[L];ae("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=y;if(y===o.RED&&(q===o.FLOAT&&(ct=o.R32F),q===o.HALF_FLOAT&&(ct=o.R16F),q===o.UNSIGNED_BYTE&&(ct=o.R8)),y===o.RED_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.R8UI),q===o.UNSIGNED_SHORT&&(ct=o.R16UI),q===o.UNSIGNED_INT&&(ct=o.R32UI),q===o.BYTE&&(ct=o.R8I),q===o.SHORT&&(ct=o.R16I),q===o.INT&&(ct=o.R32I)),y===o.RG&&(q===o.FLOAT&&(ct=o.RG32F),q===o.HALF_FLOAT&&(ct=o.RG16F),q===o.UNSIGNED_BYTE&&(ct=o.RG8)),y===o.RG_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RG8UI),q===o.UNSIGNED_SHORT&&(ct=o.RG16UI),q===o.UNSIGNED_INT&&(ct=o.RG32UI),q===o.BYTE&&(ct=o.RG8I),q===o.SHORT&&(ct=o.RG16I),q===o.INT&&(ct=o.RG32I)),y===o.RGB_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),q===o.UNSIGNED_INT&&(ct=o.RGB32UI),q===o.BYTE&&(ct=o.RGB8I),q===o.SHORT&&(ct=o.RGB16I),q===o.INT&&(ct=o.RGB32I)),y===o.RGBA_INTEGER&&(q===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),q===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),q===o.UNSIGNED_INT&&(ct=o.RGBA32UI),q===o.BYTE&&(ct=o.RGBA8I),q===o.SHORT&&(ct=o.RGBA16I),q===o.INT&&(ct=o.RGBA32I)),y===o.RGB&&(q===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),y===o.RGBA){const Xt=xt?Pu:be.getTransfer(pt);q===o.FLOAT&&(ct=o.RGBA32F),q===o.HALF_FLOAT&&(ct=o.RGBA16F),q===o.UNSIGNED_BYTE&&(ct=Xt===Fe?o.SRGB8_ALPHA8:o.RGBA8),q===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),q===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ct}function N(L,y){let q;return L?y===null||y===Ii||y===Go?q=o.DEPTH24_STENCIL8:y===Oi?q=o.DEPTH32F_STENCIL8:y===Ho&&(q=o.DEPTH24_STENCIL8,ae("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ii||y===Go?q=o.DEPTH_COMPONENT24:y===Oi?q=o.DEPTH_COMPONENT32F:y===Ho&&(q=o.DEPTH_COMPONENT16),q}function V(L,y){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==En&&L.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?y.mipmaps.length:1}function I(L){const y=L.target;y.removeEventListener("dispose",I),b(y),y.isVideoTexture&&x.delete(y)}function B(L){const y=L.target;y.removeEventListener("dispose",B),ht(y)}function b(L){const y=r.get(L);if(y.__webglInit===void 0)return;const q=L.source,pt=_.get(q);if(pt){const xt=pt[y.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&U(L),Object.keys(pt).length===0&&_.delete(q)}r.remove(L)}function U(L){const y=r.get(L);o.deleteTexture(y.__webglTexture);const q=L.source,pt=_.get(q);delete pt[y.__cacheKey],d.memory.textures--}function ht(L){const y=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(y.__webglFramebuffer[pt]))for(let xt=0;xt<y.__webglFramebuffer[pt].length;xt++)o.deleteFramebuffer(y.__webglFramebuffer[pt][xt]);else o.deleteFramebuffer(y.__webglFramebuffer[pt]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pt])}else{if(Array.isArray(y.__webglFramebuffer))for(let pt=0;pt<y.__webglFramebuffer.length;pt++)o.deleteFramebuffer(y.__webglFramebuffer[pt]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pt=0;pt<y.__webglColorRenderbuffer.length;pt++)y.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pt]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=L.textures;for(let pt=0,xt=q.length;pt<xt;pt++){const ct=r.get(q[pt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(q[pt])}r.remove(L)}let H=0;function J(){H=0}function it(){const L=H;return L>=l.maxTextures&&ae("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function st(L){const y=[];return y.push(L.wrapS),y.push(L.wrapT),y.push(L.wrapR||0),y.push(L.magFilter),y.push(L.minFilter),y.push(L.anisotropy),y.push(L.internalFormat),y.push(L.format),y.push(L.type),y.push(L.generateMipmaps),y.push(L.premultiplyAlpha),y.push(L.flipY),y.push(L.unpackAlignment),y.push(L.colorSpace),y.join()}function j(L,y){const q=r.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){const pt=L.image;if(pt===null)ae("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ae("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(q,L,y);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,q.__webglTexture,o.TEXTURE0+y)}function w(L,y){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){tt(q,L,y);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,q.__webglTexture,o.TEXTURE0+y)}function F(L,y){const q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){tt(q,L,y);return}i.bindTexture(o.TEXTURE_3D,q.__webglTexture,o.TEXTURE0+y)}function lt(L,y){const q=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){_t(q,L,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,q.__webglTexture,o.TEXTURE0+y)}const dt={[Gd]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},Et={[En]:o.NEAREST,[zS]:o.NEAREST_MIPMAP_NEAREST,[su]:o.NEAREST_MIPMAP_LINEAR,[Rn]:o.LINEAR,[ed]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},O={[VS]:o.NEVER,[YS]:o.ALWAYS,[XS]:o.LESS,[Lh]:o.LEQUAL,[kS]:o.EQUAL,[Nh]:o.GEQUAL,[WS]:o.GREATER,[qS]:o.NOTEQUAL};function Y(L,y){if(y.type===Oi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===ed||y.magFilter===su||y.magFilter===wr||y.minFilter===Rn||y.minFilter===ed||y.minFilter===su||y.minFilter===wr)&&ae("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,dt[y.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,dt[y.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,dt[y.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[y.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,O[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===En||y.minFilter!==su&&y.minFilter!==wr||y.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function mt(L,y){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,y.addEventListener("dispose",I));const pt=y.source;let xt=_.get(pt);xt===void 0&&(xt={},_.set(pt,xt));const ct=st(y);if(ct!==L.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,q=!0),xt[ct].usedTimes++;const Xt=xt[L.__cacheKey];Xt!==void 0&&(xt[L.__cacheKey].usedTimes--,Xt.usedTimes===0&&U(y)),L.__cacheKey=ct,L.__webglTexture=xt[ct].texture}return q}function bt(L,y,q){return Math.floor(Math.floor(L/q)/y)}function Ot(L,y,q,pt){const ct=L.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,q,pt,y.data);else{ct.sort((Tt,Mt)=>Tt.start-Mt.start);let Xt=0;for(let Tt=1;Tt<ct.length;Tt++){const Mt=ct[Xt],Pt=ct[Tt],Nt=Mt.start+Mt.count,Ft=bt(Pt.start,y.width,4),le=bt(Mt.start,y.width,4);Pt.start<=Nt+1&&Ft===le&&bt(Pt.start+Pt.count-1,y.width,4)===Ft?Mt.count=Math.max(Mt.count,Pt.start+Pt.count-Mt.start):(++Xt,ct[Xt]=Pt)}ct.length=Xt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),$t=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Tt=0,Mt=ct.length;Tt<Mt;Tt++){const Pt=ct[Tt],Nt=Math.floor(Pt.start/4),Ft=Math.ceil(Pt.count/4),le=Nt%y.width,W=Math.floor(Nt/y.width),Rt=Ft,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,le),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,le,W,Rt,At,q,pt,y.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,$t)}}function tt(L,y,q){let pt=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pt=o.TEXTURE_3D);const xt=mt(L,y),ct=y.source;i.bindTexture(pt,L.__webglTexture,o.TEXTURE0+q);const Xt=r.get(ct);if(ct.version!==Xt.__version||xt===!0){i.activeTexture(o.TEXTURE0+q);const Ct=be.getPrimaries(be.workingColorSpace),Kt=y.colorSpace===tr?null:be.getPrimaries(y.colorSpace),$t=y.colorSpace===tr||Ct===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Tt=C(y.image,!1,l.maxTextureSize);Tt=Ue(y,Tt);const Mt=c.convert(y.format,y.colorSpace),Pt=c.convert(y.type);let Nt=P(y.internalFormat,Mt,Pt,y.colorSpace,y.isVideoTexture);Y(pt,y);let Ft;const le=y.mipmaps,W=y.isVideoTexture!==!0,Rt=Xt.__version===void 0||xt===!0,At=ct.dataReady,Bt=V(y,Tt);if(y.isDepthTexture)Nt=N(y.format===Ur,y.type),Rt&&(W?i.texStorage2D(o.TEXTURE_2D,1,Nt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,Mt,Pt,null));else if(y.isDataTexture)if(le.length>0){W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Nt,le[0].width,le[0].height);for(let yt=0,ut=le.length;yt<ut;yt++)Ft=le[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ft.width,Ft.height,Mt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,yt,Nt,Ft.width,Ft.height,0,Mt,Pt,Ft.data);y.generateMipmaps=!1}else W?(Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Nt,Tt.width,Tt.height),At&&Ot(y,Tt,Mt,Pt)):i.texImage2D(o.TEXTURE_2D,0,Nt,Tt.width,Tt.height,0,Mt,Pt,Tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){W&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Nt,le[0].width,le[0].height,Tt.depth);for(let yt=0,ut=le.length;yt<ut;yt++)if(Ft=le[yt],y.format!==Ti)if(Mt!==null)if(W){if(At)if(y.layerUpdates.size>0){const It=K0(Ft.width,Ft.height,y.format,y.type);for(const ee of y.layerUpdates){const Ne=Ft.data.subarray(ee*It/Ft.data.BYTES_PER_ELEMENT,(ee+1)*It/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ee,Ft.width,Ft.height,1,Mt,Ne)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ft.width,Ft.height,Tt.depth,Mt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Nt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Ft.width,Ft.height,Tt.depth,Mt,Pt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Nt,Ft.width,Ft.height,Tt.depth,0,Mt,Pt,Ft.data)}else{W&&Rt&&i.texStorage2D(o.TEXTURE_2D,Bt,Nt,le[0].width,le[0].height);for(let yt=0,ut=le.length;yt<ut;yt++)Ft=le[yt],y.format!==Ti?Mt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Ft.width,Ft.height,Mt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Nt,Ft.width,Ft.height,0,Ft.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ft.width,Ft.height,Mt,Pt,Ft.data):i.texImage2D(o.TEXTURE_2D,yt,Nt,Ft.width,Ft.height,0,Mt,Pt,Ft.data)}else if(y.isDataArrayTexture)if(W){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Bt,Nt,Tt.width,Tt.height,Tt.depth),At)if(y.layerUpdates.size>0){const yt=K0(Tt.width,Tt.height,y.format,y.type);for(const ut of y.layerUpdates){const It=Tt.data.subarray(ut*yt/Tt.data.BYTES_PER_ELEMENT,(ut+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ut,Tt.width,Tt.height,1,Mt,Pt,It)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Mt,Pt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,Tt.width,Tt.height,Tt.depth,0,Mt,Pt,Tt.data);else if(y.isData3DTexture)W?(Rt&&i.texStorage3D(o.TEXTURE_3D,Bt,Nt,Tt.width,Tt.height,Tt.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Mt,Pt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,Tt.width,Tt.height,Tt.depth,0,Mt,Pt,Tt.data);else if(y.isFramebufferTexture){if(Rt)if(W)i.texStorage2D(o.TEXTURE_2D,Bt,Nt,Tt.width,Tt.height);else{let yt=Tt.width,ut=Tt.height;for(let It=0;It<Bt;It++)i.texImage2D(o.TEXTURE_2D,It,Nt,yt,ut,0,Mt,Pt,null),yt>>=1,ut>>=1}}else if(le.length>0){if(W&&Rt){const yt=qt(le[0]);i.texStorage2D(o.TEXTURE_2D,Bt,Nt,yt.width,yt.height)}for(let yt=0,ut=le.length;yt<ut;yt++)Ft=le[yt],W?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Mt,Pt,Ft):i.texImage2D(o.TEXTURE_2D,yt,Nt,Mt,Pt,Ft);y.generateMipmaps=!1}else if(W){if(Rt){const yt=qt(Tt);i.texStorage2D(o.TEXTURE_2D,Bt,Nt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Pt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Nt,Mt,Pt,Tt);M(y)&&v(pt),Xt.__version=ct.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function _t(L,y,q){if(y.image.length!==6)return;const pt=mt(L,y),xt=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+q);const ct=r.get(xt);if(xt.version!==ct.__version||pt===!0){i.activeTexture(o.TEXTURE0+q);const Xt=be.getPrimaries(be.workingColorSpace),Ct=y.colorSpace===tr?null:be.getPrimaries(y.colorSpace),Kt=y.colorSpace===tr||Xt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const $t=y.isCompressedTexture||y.image[0].isCompressedTexture,Tt=y.image[0]&&y.image[0].isDataTexture,Mt=[];for(let ut=0;ut<6;ut++)!$t&&!Tt?Mt[ut]=C(y.image[ut],!0,l.maxCubemapSize):Mt[ut]=Tt?y.image[ut].image:y.image[ut],Mt[ut]=Ue(y,Mt[ut]);const Pt=Mt[0],Nt=c.convert(y.format,y.colorSpace),Ft=c.convert(y.type),le=P(y.internalFormat,Nt,Ft,y.colorSpace),W=y.isVideoTexture!==!0,Rt=ct.__version===void 0||pt===!0,At=xt.dataReady;let Bt=V(y,Pt);Y(o.TEXTURE_CUBE_MAP,y);let yt;if($t){W&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,le,Pt.width,Pt.height);for(let ut=0;ut<6;ut++){yt=Mt[ut].mipmaps;for(let It=0;It<yt.length;It++){const ee=yt[It];y.format!==Ti?Nt!==null?W?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ee.width,ee.height,Nt,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,le,ee.width,ee.height,0,ee.data):ae("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,ee.width,ee.height,Nt,Ft,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,le,ee.width,ee.height,0,Nt,Ft,ee.data)}}}else{if(yt=y.mipmaps,W&&Rt){yt.length>0&&Bt++;const ut=qt(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Bt,le,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(Tt){W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Mt[ut].width,Mt[ut].height,Nt,Ft,Mt[ut].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,le,Mt[ut].width,Mt[ut].height,0,Nt,Ft,Mt[ut].data);for(let It=0;It<yt.length;It++){const Ne=yt[It].image[ut].image;W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Ne.width,Ne.height,Nt,Ft,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,le,Ne.width,Ne.height,0,Nt,Ft,Ne.data)}}else{W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Nt,Ft,Mt[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,le,Nt,Ft,Mt[ut]);for(let It=0;It<yt.length;It++){const ee=yt[It];W?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Nt,Ft,ee.image[ut]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,le,Nt,Ft,ee.image[ut])}}}M(y)&&v(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,y.onUpdate&&y.onUpdate(y)}L.__version=y.version}function St(L,y,q,pt,xt,ct){const Xt=c.convert(q.format,q.colorSpace),Ct=c.convert(q.type),Kt=P(q.internalFormat,Xt,Ct,q.colorSpace),$t=r.get(y),Tt=r.get(q);if(Tt.__renderTarget=y,!$t.__hasExternalTextures){const Mt=Math.max(1,y.width>>ct),Pt=Math.max(1,y.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Kt,Mt,Pt,y.depth,0,Xt,Ct,null):i.texImage2D(xt,ct,Kt,Mt,Pt,0,Xt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,0,G(y)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,xt,Tt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(L,y,q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),y.depthBuffer){const pt=y.depthTexture,xt=pt&&pt.isDepthTexture?pt.type:null,ct=N(y.stencilBuffer,xt),Xt=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),ct,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),ct,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,ct,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,L)}else{const pt=y.textures;for(let xt=0;xt<pt.length;xt++){const ct=pt[xt],Xt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Kt=P(ct.internalFormat,Xt,Ct,ct.colorSpace);We(y)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,G(y),Kt,y.width,y.height):q?o.renderbufferStorageMultisample(o.RENDERBUFFER,G(y),Kt,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Wt(L,y,q){const pt=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=r.get(y.depthTexture);if(xt.__renderTarget=y,(!xt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,y.depthTexture.addEventListener("dispose",I)),xt.__webglTexture===void 0){xt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y.depthTexture);const $t=c.convert(y.depthTexture.format),Tt=c.convert(y.depthTexture.type);let Mt;y.depthTexture.format===xa?Mt=o.DEPTH_COMPONENT24:y.depthTexture.format===Ur&&(Mt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Mt,y.width,y.height,0,$t,Tt,null)}}else j(y.depthTexture,0);const ct=xt.__webglTexture,Xt=G(y),Ct=pt?o.TEXTURE_CUBE_MAP_POSITIVE_X+q:o.TEXTURE_2D,Kt=y.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(y.depthTexture.format===xa)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,Ct,ct,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,Ct,ct,0);else if(y.depthTexture.format===Ur)We(y)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,Ct,ct,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,Ct,ct,0);else throw new Error("Unknown depthTexture format")}function jt(L){const y=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pt){const xt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pt.removeEventListener("dispose",xt)};pt.addEventListener("dispose",xt),y.__depthDisposeCallback=xt}y.__boundDepthTexture=pt}if(L.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Wt(y.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Wt(y.__webglFramebuffer[0],L,0):Wt(y.__webglFramebuffer,L,0)}else if(q){y.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pt]),y.__webglDepthbuffer[pt]===void 0)y.__webglDepthbuffer[pt]=o.createRenderbuffer(),Ut(y.__webglDepthbuffer[pt],L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ut(y.__webglDepthbuffer,L,!1);else{const xt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(L,y,q){const pt=r.get(L);y!==void 0&&St(pt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),q!==void 0&&jt(L)}function pe(L){const y=L.texture,q=r.get(L),pt=r.get(y);L.addEventListener("dispose",B);const xt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Xt=xt.length>1;if(Xt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=y.version,d.memory.textures++),ct){q.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[Ct]=[];for(let Kt=0;Kt<y.mipmaps.length;Kt++)q.__webglFramebuffer[Ct][Kt]=o.createFramebuffer()}else q.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ct=0;Ct<y.mipmaps.length;Ct++)q.__webglFramebuffer[Ct]=o.createFramebuffer()}else q.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let Ct=0,Kt=xt.length;Ct<Kt;Ct++){const $t=r.get(xt[Ct]);$t.__webglTexture===void 0&&($t.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&We(L)===!1){q.__webglMultisampledFramebuffer=o.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Kt=xt[Ct];q.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct]);const $t=c.convert(Kt.format,Kt.colorSpace),Tt=c.convert(Kt.type),Mt=P(Kt.internalFormat,$t,Tt,Kt.colorSpace,L.isXRRenderTarget===!0),Pt=G(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Mt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,q.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=o.createRenderbuffer(),Ut(q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,y);for(let Ct=0;Ct<6;Ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let Kt=0;Kt<y.mipmaps.length;Kt++)St(q.__webglFramebuffer[Ct][Kt],L,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Kt);else St(q.__webglFramebuffer[Ct],L,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);M(y)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let Ct=0,Kt=xt.length;Ct<Kt;Ct++){const $t=xt[Ct],Tt=r.get($t);let Mt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,Tt.__webglTexture),Y(Mt,$t),St(q.__webglFramebuffer,L,$t,o.COLOR_ATTACHMENT0+Ct,Mt,0),M($t)&&v(Mt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,pt.__webglTexture),Y(Ct,y),y.mipmaps&&y.mipmaps.length>0)for(let Kt=0;Kt<y.mipmaps.length;Kt++)St(q.__webglFramebuffer[Kt],L,y,o.COLOR_ATTACHMENT0,Ct,Kt);else St(q.__webglFramebuffer,L,y,o.COLOR_ATTACHMENT0,Ct,0);M(y)&&v(Ct),i.unbindTexture()}L.depthBuffer&&jt(L)}function he(L){const y=L.textures;for(let q=0,pt=y.length;q<pt;q++){const xt=y[q];if(M(xt)){const ct=D(L),Xt=r.get(xt).__webglTexture;i.bindTexture(ct,Xt),v(ct),i.unbindTexture()}}}const Ee=[],ne=[];function je(L){if(L.samples>0){if(We(L)===!1){const y=L.textures,q=L.width,pt=L.height;let xt=o.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(L),Ct=y.length>1;if(Ct)for(let $t=0;$t<y.length;$t++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Kt=L.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let $t=0;$t<y.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const Tt=r.get(y[$t]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,q,pt,0,0,q,pt,xt,o.NEAREST),m===!0&&(Ee.length=0,ne.length=0,Ee.push(o.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ee.push(ct),ne.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ne)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ee))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let $t=0;$t<y.length;$t++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[$t]);const Tt=r.get(y[$t]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+$t,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const y=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function We(L){const y=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(L){const y=d.render.frame;x.get(L)!==y&&(x.set(L,y),L.update())}function Ue(L,y){const q=L.colorSpace,pt=L.format,xt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Os&&q!==tr&&(be.getTransfer(q)===Fe?(pt!==Ti||xt!==fi)&&ae("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",q)),y}function qt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=it,this.resetTextureUnits=J,this.setTexture2D=j,this.setTexture2DArray=w,this.setTexture3D=F,this.setTextureCube=lt,this.rebindTextures=Ve,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=jt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function _A(o,e){function i(r,l=tr){let c;const d=be.getTransfer(l);if(r===fi)return o.UNSIGNED_BYTE;if(r===Rh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ch)return o.UNSIGNED_SHORT_5_5_5_1;if(r===L_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===N_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===w_)return o.BYTE;if(r===U_)return o.SHORT;if(r===Ho)return o.UNSIGNED_SHORT;if(r===Ah)return o.INT;if(r===Ii)return o.UNSIGNED_INT;if(r===Oi)return o.FLOAT;if(r===va)return o.HALF_FLOAT;if(r===O_)return o.ALPHA;if(r===P_)return o.RGB;if(r===Ti)return o.RGBA;if(r===xa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===F_)return o.RED;if(r===Dh)return o.RED_INTEGER;if(r===Ns)return o.RG;if(r===wh)return o.RG_INTEGER;if(r===Uh)return o.RGBA_INTEGER;if(r===wu||r===Uu||r===Lu||r===Nu)if(d===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===wu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===wu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Uu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===kd||r===Wd||r===qd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd||r===Zd||r===jd||r===Kd||r===Qd||r===Jd||r===$d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Yd||r===Zd)return d===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===jd)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Kd)return c.COMPRESSED_R11_EAC;if(r===Qd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Jd)return c.COMPRESSED_RG11_EAC;if(r===$d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===th||r===eh||r===nh||r===ih||r===ah||r===rh||r===sh||r===oh||r===lh||r===uh||r===ch||r===fh||r===dh||r===hh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===th)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ih)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ah)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===rh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===sh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===uh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===dh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===hh)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ph||r===mh||r===gh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===ph)return d===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_h||r===vh||r===xh||r===Sh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===_h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===vh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Sh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
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

}`;class SA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new q_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new bi({vertexShader:vA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Hi(new qo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends Fs{constructor(e,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,_=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",M=new SA,v={},D=i.getContextAttributes();let P=null,N=null;const V=[],I=[],B=new ye;let b=null;const U=new yi;U.viewport=new tn;const ht=new yi;ht.viewport=new tn;const H=[U,ht],J=new LM;let it=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let _t=V[tt];return _t===void 0&&(_t=new ud,V[tt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(tt){let _t=V[tt];return _t===void 0&&(_t=new ud,V[tt]=_t),_t.getGripSpace()},this.getHand=function(tt){let _t=V[tt];return _t===void 0&&(_t=new ud,V[tt]=_t),_t.getHandSpace()};function j(tt){const _t=I.indexOf(tt.inputSource);if(_t===-1)return;const St=V[_t];St!==void 0&&(St.update(tt.inputSource,tt.frame,h||d),St.dispatchEvent({type:tt.type,data:tt.inputSource}))}function w(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",w),l.removeEventListener("inputsourceschange",F);for(let tt=0;tt<V.length;tt++){const _t=I[tt];_t!==null&&(I[tt]=null,V[tt].disconnect(_t))}it=null,st=null,M.reset();for(const tt in v)delete v[tt];e.setRenderTarget(P),E=null,_=null,S=null,l=null,N=null,Ot.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&ae("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,r.isPresenting===!0&&ae("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",w),l.addEventListener("inputsourceschange",F),D.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ut=null,Wt=null;D.depth&&(Wt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=D.stencil?Ur:xa,Ut=D.stencil?Go:Ii);const jt={colorFormat:i.RGBA8,depthFormat:Wt,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer(jt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Bi(_.textureWidth,_.textureHeight,{format:Ti,type:fi,depthTexture:new Vo(_.textureWidth,_.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const St={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),N=new Bi(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Ot.setContext(l),Ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function F(tt){for(let _t=0;_t<tt.removed.length;_t++){const St=tt.removed[_t],Ut=I.indexOf(St);Ut>=0&&(I[Ut]=null,V[Ut].disconnect(St))}for(let _t=0;_t<tt.added.length;_t++){const St=tt.added[_t];let Ut=I.indexOf(St);if(Ut===-1){for(let jt=0;jt<V.length;jt++)if(jt>=I.length){I.push(St),Ut=jt;break}else if(I[jt]===null){I[jt]=St,Ut=jt;break}if(Ut===-1)break}const Wt=V[Ut];Wt&&Wt.connect(St)}}const lt=new at,dt=new at;function Et(tt,_t,St){lt.setFromMatrixPosition(_t.matrixWorld),dt.setFromMatrixPosition(St.matrixWorld);const Ut=lt.distanceTo(dt),Wt=_t.projectionMatrix.elements,jt=St.projectionMatrix.elements,Ve=Wt[14]/(Wt[10]-1),pe=Wt[14]/(Wt[10]+1),he=(Wt[9]+1)/Wt[5],Ee=(Wt[9]-1)/Wt[5],ne=(Wt[8]-1)/Wt[0],je=(jt[8]+1)/jt[0],G=Ve*ne,We=Ve*je,Me=Ut/(-ne+je),Ue=Me*-ne;if(_t.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ue),tt.translateZ(Me),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse);else{const qt=Ve+Me,L=pe+Me,y=G-Ue,q=We+(Ut-Ue),pt=he*pe/L*qt,xt=Ee*pe/L*qt;tt.projectionMatrix.makePerspective(y,q,pt,xt,qt,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function O(tt,_t){_t===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(_t.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let _t=tt.near,St=tt.far;M.texture!==null&&(M.depthNear>0&&(_t=M.depthNear),M.depthFar>0&&(St=M.depthFar)),J.near=ht.near=U.near=_t,J.far=ht.far=U.far=St,(it!==J.near||st!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),it=J.near,st=J.far),J.layers.mask=tt.layers.mask|6,U.layers.mask=J.layers.mask&-5,ht.layers.mask=J.layers.mask&-3;const Ut=tt.parent,Wt=J.cameras;O(J,Ut);for(let jt=0;jt<Wt.length;jt++)O(Wt[jt],Ut);Wt.length===2?Et(J,U,ht):J.projectionMatrix.copy(U.projectionMatrix),Y(tt,J,Ut)};function Y(tt,_t,St){St===null?tt.matrix.copy(_t.matrixWorld):(tt.matrix.copy(St.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(_t.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Mh*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(tt){m=tt,_!==null&&(_.fixedFoveation=tt),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(tt){return v[tt]};let mt=null;function bt(tt,_t){if(x=_t.getViewerPose(h||d),T=_t,x!==null){const St=x.views;E!==null&&(e.setRenderTargetFramebuffer(N,E.framebuffer),e.setRenderTarget(N));let Ut=!1;St.length!==J.cameras.length&&(J.cameras.length=0,Ut=!0);for(let pe=0;pe<St.length;pe++){const he=St[pe];let Ee=null;if(E!==null)Ee=E.getViewport(he);else{const je=S.getViewSubImage(_,he);Ee=je.viewport,pe===0&&(e.setRenderTargetTextures(N,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(N))}let ne=H[pe];ne===void 0&&(ne=new yi,ne.layers.enable(pe),ne.viewport=new tn,H[pe]=ne),ne.matrix.fromArray(he.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(he.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(J.matrix.copy(ne.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ut===!0&&J.cameras.push(ne)}const Wt=l.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const pe=S.getDepthInformation(St[0]);pe&&pe.isValid&&pe.texture&&M.init(pe,l.renderState)}if(Wt&&Wt.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let pe=0;pe<St.length;pe++){const he=St[pe].camera;if(he){let Ee=v[he];Ee||(Ee=new q_,v[he]=Ee);const ne=S.getCameraImage(he);Ee.sourceTexture=ne}}}}for(let St=0;St<V.length;St++){const Ut=I[St],Wt=V[St];Ut!==null&&Wt!==void 0&&Wt.update(Ut,_t,h||d)}mt&&mt(tt,_t),_t.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_t}),T=null}const Ot=new j_;Ot.setAnimationLoop(bt),this.setAnimationLoop=function(tt){mt=tt},this.dispose=function(){}}}const Ar=new Sa,yA=new cn;function EA(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Y_(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,D,P,N){v.isMeshBasicMaterial?c(M,v):v.isMeshLambertMaterial?(c(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(M,v),S(M,v)):v.isMeshPhongMaterial?(c(M,v),x(M,v),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&E(M,v,N)):v.isMeshMatcapMaterial?(c(M,v),T(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),C(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&p(M,v)):v.isPointsMaterial?m(M,v,D,P):v.isSpriteMaterial?h(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Vn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Vn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const D=e.get(v),P=D.envMap,N=D.envMapRotation;P&&(M.envMap.value=P,Ar.copy(N),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4(yA.makeRotationFromEuler(Ar)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function p(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,D,P){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*D,M.scale.value=P*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function S(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function E(M,v,D){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function C(M,v){const D=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function TA(o,e,i,r){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,P){const N=P.program;r.uniformBlockBinding(D,N)}function h(D,P){let N=l[D.id];N===void 0&&(T(D),N=x(D),l[D.id]=N,D.addEventListener("dispose",M));const V=P.program;r.updateUBOMapping(D,V);const I=e.render.frame;c[D.id]!==I&&(_(D),c[D.id]=I)}function x(D){const P=S();D.__bindingPointIndex=P;const N=o.createBuffer(),V=D.__size,I=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,V,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function S(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const P=l[D.id],N=D.uniforms,V=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let I=0,B=N.length;I<B;I++){const b=Array.isArray(N[I])?N[I]:[N[I]];for(let U=0,ht=b.length;U<ht;U++){const H=b[U];if(E(H,I,U,V)===!0){const J=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let st=0;for(let j=0;j<it.length;j++){const w=it[j],F=C(w);typeof w=="number"||typeof w=="boolean"?(H.__data[0]=w,o.bufferSubData(o.UNIFORM_BUFFER,J+st,H.__data)):w.isMatrix3?(H.__data[0]=w.elements[0],H.__data[1]=w.elements[1],H.__data[2]=w.elements[2],H.__data[3]=0,H.__data[4]=w.elements[3],H.__data[5]=w.elements[4],H.__data[6]=w.elements[5],H.__data[7]=0,H.__data[8]=w.elements[6],H.__data[9]=w.elements[7],H.__data[10]=w.elements[8],H.__data[11]=0):(w.toArray(H.__data,st),st+=F.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(D,P,N,V){const I=D.value,B=P+"_"+N;if(V[B]===void 0)return typeof I=="number"||typeof I=="boolean"?V[B]=I:V[B]=I.clone(),!0;{const b=V[B];if(typeof I=="number"||typeof I=="boolean"){if(b!==I)return V[B]=I,!0}else if(b.equals(I)===!1)return b.copy(I),!0}return!1}function T(D){const P=D.uniforms;let N=0;const V=16;for(let B=0,b=P.length;B<b;B++){const U=Array.isArray(P[B])?P[B]:[P[B]];for(let ht=0,H=U.length;ht<H;ht++){const J=U[ht],it=Array.isArray(J.value)?J.value:[J.value];for(let st=0,j=it.length;st<j;st++){const w=it[st],F=C(w),lt=N%V,dt=lt%F.boundary,Et=lt+dt;N+=dt,Et!==0&&V-Et<F.storage&&(N+=V-Et),J.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=F.storage}}}const I=N%V;return I>0&&(N+=V-I),D.__size=N,D.__cache={},this}function C(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?ae("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ae("WebGLRenderer: Unsupported uniform value type.",D),P}function M(D){const P=D.target;P.removeEventListener("dispose",M);const N=d.indexOf(P.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function v(){for(const D in l)o.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const bA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function AA(){return Li===null&&(Li=new xM(bA,16,16,Ns,va),Li.name="DFG_LUT",Li.minFilter=Rn,Li.magFilter=Rn,Li.wrapS=pa,Li.wrapT=pa,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class RA{constructor(e={}){const{canvas:i=jS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:E=fi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=E,M=new Set([Uh,wh,Dh]),v=new Set([fi,Ii,Ho,Go,Rh,Ch]),D=new Uint32Array(4),P=new Int32Array(4);let N=null,V=null;const I=[],B=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let ht=!1;this._outputColorSpace=ci;let H=0,J=0,it=null,st=-1,j=null;const w=new tn,F=new tn;let lt=null;const dt=new He(0);let Et=0,O=i.width,Y=i.height,mt=1,bt=null,Ot=null;const tt=new tn(0,0,O,Y),_t=new tn(0,0,O,Y);let St=!1;const Ut=new k_;let Wt=!1,jt=!1;const Ve=new cn,pe=new at,he=new tn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function je(){return it===null?mt:1}let G=r;function We(R,k){return i.getContext(R,k)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${bh}`),i.addEventListener("webglcontextlost",It,!1),i.addEventListener("webglcontextrestored",ee,!1),i.addEventListener("webglcontextcreationerror",Ne,!1),G===null){const k="webgl2";if(G=We(k,R),G===null)throw We(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw De("WebGLRenderer: "+R.message),R}let Me,Ue,qt,L,y,q,pt,xt,ct,Xt,Ct,Kt,$t,Tt,Mt,Pt,Nt,Ft,le,W,Rt,At,Bt;function yt(){Me=new RT(G),Me.init(),Rt=new _A(G,Me),Ue=new xT(G,Me,e,Rt),qt=new mA(G,Me),Ue.reversedDepthBuffer&&_&&qt.buffers.depth.setReversed(!0),L=new wT(G),y=new eA,q=new gA(G,Me,qt,y,Ue,Rt,L),pt=new AT(U),xt=new PM(G),At=new _T(G,xt),ct=new CT(G,xt,L,At),Xt=new LT(G,ct,xt,At,L),Ft=new UT(G,Ue,q),Mt=new ST(y),Ct=new tA(U,pt,Me,Ue,At,Mt),Kt=new EA(U,y),$t=new iA,Tt=new uA(Me),Nt=new gT(U,pt,qt,Xt,T,m),Pt=new pA(U,Xt,Ue),Bt=new TA(G,L,Ue,qt),le=new vT(G,Me,L),W=new DT(G,Me,L),L.programs=Ct.programs,U.capabilities=Ue,U.extensions=Me,U.properties=y,U.renderLists=$t,U.shadowMap=Pt,U.state=qt,U.info=L}yt(),C!==fi&&(b=new OT(C,i.width,i.height,l,c));const ut=new MA(U,G);this.xr=ut,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Me.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Me.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(R){R!==void 0&&(mt=R,this.setSize(O,Y,!1))},this.getSize=function(R){return R.set(O,Y)},this.setSize=function(R,k,rt=!0){if(ut.isPresenting){ae("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Y=k,i.width=Math.floor(R*mt),i.height=Math.floor(k*mt),rt===!0&&(i.style.width=R+"px",i.style.height=k+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(O*mt,Y*mt).floor()},this.setDrawingBufferSize=function(R,k,rt){O=R,Y=k,mt=rt,i.width=Math.floor(R*rt),i.height=Math.floor(k*rt),this.setViewport(0,0,R,k)},this.setEffects=function(R){if(C===fi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let k=0;k<R.length;k++)if(R[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(tt)},this.setViewport=function(R,k,rt,et){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,k,rt,et),qt.viewport(w.copy(tt).multiplyScalar(mt).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,k,rt,et){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,k,rt,et),qt.scissor(F.copy(_t).multiplyScalar(mt).round())},this.getScissorTest=function(){return St},this.setScissorTest=function(R){qt.setScissorTest(St=R)},this.setOpaqueSort=function(R){bt=R},this.setTransparentSort=function(R){Ot=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,rt=!0){let et=0;if(R){let K=!1;if(it!==null){const Dt=it.texture.format;K=M.has(Dt)}if(K){const Dt=it.texture.type,zt=v.has(Dt),wt=Nt.getClearColor(),kt=Nt.getClearAlpha(),Zt=wt.r,te=wt.g,re=wt.b;zt?(D[0]=Zt,D[1]=te,D[2]=re,D[3]=kt,G.clearBufferuiv(G.COLOR,0,D)):(P[0]=Zt,P[1]=te,P[2]=re,P[3]=kt,G.clearBufferiv(G.COLOR,0,P))}else et|=G.COLOR_BUFFER_BIT}k&&(et|=G.DEPTH_BUFFER_BIT),rt&&(et|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&G.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",It,!1),i.removeEventListener("webglcontextrestored",ee,!1),i.removeEventListener("webglcontextcreationerror",Ne,!1),Nt.dispose(),$t.dispose(),Tt.dispose(),y.dispose(),pt.dispose(),Xt.dispose(),At.dispose(),Bt.dispose(),Ct.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Or),ut.removeEventListener("sessionend",Pr),Ai.stop()};function It(R){R.preventDefault(),N0("WebGLRenderer: Context Lost."),ht=!0}function ee(){N0("WebGLRenderer: Context Restored."),ht=!1;const R=L.autoReset,k=Pt.enabled,rt=Pt.autoUpdate,et=Pt.needsUpdate,K=Pt.type;yt(),L.autoReset=R,Pt.enabled=k,Pt.autoUpdate=rt,Pt.needsUpdate=et,Pt.type=K}function Ne(R){De("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const k=R.target;k.removeEventListener("dispose",Te),Cn(k)}function Cn(R){di(R),y.remove(R)}function di(R){const k=y.get(R).programs;k!==void 0&&(k.forEach(function(rt){Ct.releaseProgram(rt)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,rt,et,K,Dt){k===null&&(k=Ee);const zt=K.isMesh&&K.matrixWorld.determinant()<0,wt=Ko(R,k,rt,et,K);qt.setMaterial(et,zt);let kt=rt.index,Zt=1;if(et.wireframe===!0){if(kt=ct.getWireframeAttribute(rt),kt===void 0)return;Zt=2}const te=rt.drawRange,re=rt.attributes.position;let Ht=te.start*Zt,ue=(te.start+te.count)*Zt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Zt),ue=Math.min(ue,(Dt.start+Dt.count)*Zt)),kt!==null?(Ht=Math.max(Ht,0),ue=Math.min(ue,kt.count)):re!=null&&(Ht=Math.max(Ht,0),ue=Math.min(ue,re.count));const qe=ue-Ht;if(qe<0||qe===1/0)return;At.setup(K,et,wt,rt,kt);let Ye,Ae=le;if(kt!==null&&(Ye=xt.get(kt),Ae=W,Ae.setIndex(Ye)),K.isMesh)et.wireframe===!0?(qt.setLineWidth(et.wireframeLinewidth*je()),Ae.setMode(G.LINES)):Ae.setMode(G.TRIANGLES);else if(K.isLine){let dn=et.linewidth;dn===void 0&&(dn=1),qt.setLineWidth(dn*je()),K.isLineSegments?Ae.setMode(G.LINES):K.isLineLoop?Ae.setMode(G.LINE_LOOP):Ae.setMode(G.LINE_STRIP)}else K.isPoints?Ae.setMode(G.POINTS):K.isSprite&&Ae.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)zu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ae.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const dn=K._multiDrawStarts,Vt=K._multiDrawCounts,Dn=K._multiDrawCount,ie=kt?xt.get(kt).bytesPerElement:1,wn=y.get(et).currentProgram.getUniforms();for(let Xn=0;Xn<Dn;Xn++)wn.setValue(G,"_gl_DrawID",Xn),Ae.render(dn[Xn]/ie,Vt[Xn])}else if(K.isInstancedMesh)Ae.renderInstances(Ht,qe,K.count);else if(rt.isInstancedBufferGeometry){const dn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vt=Math.min(rt.instanceCount,dn);Ae.renderInstances(Ht,qe,Vt)}else Ae.render(Ht,qe)};function Is(R,k,rt){R.transparent===!0&&R.side===ha&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,ya(R,k,rt),R.side=nr,R.needsUpdate=!0,ya(R,k,rt),R.side=ha):ya(R,k,rt)}this.compile=function(R,k,rt=null){rt===null&&(rt=R),V=Tt.get(rt),V.init(k),B.push(V),rt.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(V.pushLight(K),K.castShadow&&V.pushShadow(K))}),R!==rt&&R.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(V.pushLight(K),K.castShadow&&V.pushShadow(K))}),V.setupLights();const et=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Dt=K.material;if(Dt)if(Array.isArray(Dt))for(let zt=0;zt<Dt.length;zt++){const wt=Dt[zt];Is(wt,rt,K),et.add(wt)}else Is(Dt,rt,K),et.add(Dt)}),V=B.pop(),et},this.compileAsync=function(R,k,rt=null){const et=this.compile(R,k,rt);return new Promise(K=>{function Dt(){if(et.forEach(function(zt){y.get(zt).currentProgram.isReady()&&et.delete(zt)}),et.size===0){K(R);return}setTimeout(Dt,10)}Me.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Nr=null;function Yo(R){Nr&&Nr(R)}function Or(){Ai.stop()}function Pr(){Ai.start()}const Ai=new j_;Ai.setAnimationLoop(Yo),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(R){Nr=R,ut.setAnimationLoop(R),R===null?Ai.stop():Ai.start()},ut.addEventListener("sessionstart",Or),ut.addEventListener("sessionend",Pr),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ht===!0)return;const rt=ut.enabled===!0&&ut.isPresenting===!0,et=b!==null&&(it===null||rt)&&b.begin(U,it);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(k),k=ut.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,k,it),V=Tt.get(R,B.length),V.init(k),B.push(V),Ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ut.setFromProjectionMatrix(Ve,Pi,k.reversedDepth),jt=this.localClippingEnabled,Wt=Mt.init(this.clippingPlanes,jt),N=$t.get(R,I.length),N.init(),I.push(N),ut.enabled===!0&&ut.isPresenting===!0){const zt=U.xr.getDepthSensingMesh();zt!==null&&Fr(zt,k,-1/0,U.sortObjects)}Fr(R,k,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(bt,Ot),ne=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ne&&Nt.addToRenderList(N,R),this.info.render.frame++,Wt===!0&&Mt.beginShadows();const K=V.state.shadowsArray;if(Pt.render(K,R,k),Wt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&b.hasRenderPass())===!1){const zt=N.opaque,wt=N.transmissive;if(V.setupLights(),k.isArrayCamera){const kt=k.cameras;if(wt.length>0)for(let Zt=0,te=kt.length;Zt<te;Zt++){const re=kt[Zt];en(zt,wt,R,re)}ne&&Nt.render(R);for(let Zt=0,te=kt.length;Zt<te;Zt++){const re=kt[Zt];hi(N,R,re,re.viewport)}}else wt.length>0&&en(zt,wt,R,k),ne&&Nt.render(R),hi(N,R,k)}it!==null&&J===0&&(q.updateMultisampleRenderTarget(it),q.updateRenderTargetMipmap(it)),et&&b.end(U),R.isScene===!0&&R.onAfterRender(U,R,k),At.resetDefaultState(),st=-1,j=null,B.pop(),B.length>0?(V=B[B.length-1],Wt===!0&&Mt.setGlobalState(U.clippingPlanes,V.state.camera)):V=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function Fr(R,k,rt,et){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)V.pushLight(R),R.castShadow&&V.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ut.intersectsSprite(R)){et&&he.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const zt=Xt.update(R),wt=R.material;wt.visible&&N.push(R,zt,wt,rt,he.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ut.intersectsObject(R))){const zt=Xt.update(R),wt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),he.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),he.copy(zt.boundingSphere.center)),he.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(wt)){const kt=zt.groups;for(let Zt=0,te=kt.length;Zt<te;Zt++){const re=kt[Zt],Ht=wt[re.materialIndex];Ht&&Ht.visible&&N.push(R,zt,Ht,rt,he.z,re)}}else wt.visible&&N.push(R,zt,wt,rt,he.z,null)}}const Dt=R.children;for(let zt=0,wt=Dt.length;zt<wt;zt++)Fr(Dt[zt],k,rt,et)}function hi(R,k,rt,et){const{opaque:K,transmissive:Dt,transparent:zt}=R;V.setupLightsView(rt),Wt===!0&&Mt.setGlobalState(U.clippingPlanes,rt),et&&qt.viewport(w.copy(et)),K.length>0&&fn(K,k,rt),Dt.length>0&&fn(Dt,k,rt),zt.length>0&&fn(zt,k,rt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function en(R,k,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[et.id]===void 0){const Ht=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[et.id]=new Bi(1,1,{generateMipmaps:!0,type:Ht?va:fi,minFilter:wr,samples:Ue.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Dt=V.state.transmissionRenderTarget[et.id],zt=et.viewport||w;Dt.setSize(zt.z*U.transmissionResolutionScale,zt.w*U.transmissionResolutionScale);const wt=U.getRenderTarget(),kt=U.getActiveCubeFace(),Zt=U.getActiveMipmapLevel();U.setRenderTarget(Dt),U.getClearColor(dt),Et=U.getClearAlpha(),Et<1&&U.setClearColor(16777215,.5),U.clear(),ne&&Nt.render(rt);const te=U.toneMapping;U.toneMapping=Fi;const re=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),V.setupLightsView(et),Wt===!0&&Mt.setGlobalState(U.clippingPlanes,et),fn(R,rt,et),q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ue=0,qe=k.length;ue<qe;ue++){const Ye=k[ue],{object:Ae,geometry:dn,material:Vt,group:Dn}=Ye;if(Vt.side===ha&&Ae.layers.test(et.layers)){const ie=Vt.side;Vt.side=Vn,Vt.needsUpdate=!0,Gi(Ae,rt,et,dn,Vt,Dn),Vt.side=ie,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(q.updateMultisampleRenderTarget(Dt),q.updateRenderTargetMipmap(Dt))}U.setRenderTarget(wt,kt,Zt),U.setClearColor(dt,Et),re!==void 0&&(et.viewport=re),U.toneMapping=te}function fn(R,k,rt){const et=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Dt=R.length;K<Dt;K++){const zt=R[K],{object:wt,geometry:kt,group:Zt}=zt;let te=zt.material;te.allowOverride===!0&&et!==null&&(te=et),wt.layers.test(rt.layers)&&Gi(wt,k,rt,kt,te,Zt)}}function Gi(R,k,rt,et,K,Dt){R.onBeforeRender(U,k,rt,et,K,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(U,k,rt,et,R,Dt),K.transparent===!0&&K.side===ha&&K.forceSinglePass===!1?(K.side=Vn,K.needsUpdate=!0,U.renderBufferDirect(rt,k,et,K,R,Dt),K.side=nr,K.needsUpdate=!0,U.renderBufferDirect(rt,k,et,K,R,Dt),K.side=ha):U.renderBufferDirect(rt,k,et,K,R,Dt),R.onAfterRender(U,k,rt,et,K,Dt)}function ya(R,k,rt){k.isScene!==!0&&(k=Ee);const et=y.get(R),K=V.state.lights,Dt=V.state.shadowsArray,zt=K.state.version,wt=Ct.getParameters(R,K.state,Dt,k,rt),kt=Ct.getProgramCacheKey(wt);let Zt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?k.environment:null,et.fog=k.fog;const te=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=pt.get(R.envMap||et.environment,te),et.envMapRotation=et.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",Te),Zt=new Map,et.programs=Zt);let re=Zt.get(kt);if(re!==void 0){if(et.currentProgram===re&&et.lightsStateVersion===zt)return jo(R,wt),re}else wt.uniforms=Ct.getUniforms(R),R.onBeforeCompile(wt,U),re=Ct.acquireProgram(wt,kt),Zt.set(kt,re),et.uniforms=wt.uniforms;const Ht=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),jo(R,wt),et.needsLights=Hs(R),et.lightsStateVersion=zt,et.needsLights&&(Ht.ambientLightColor.value=K.state.ambient,Ht.lightProbe.value=K.state.probe,Ht.directionalLights.value=K.state.directional,Ht.directionalLightShadows.value=K.state.directionalShadow,Ht.spotLights.value=K.state.spot,Ht.spotLightShadows.value=K.state.spotShadow,Ht.rectAreaLights.value=K.state.rectArea,Ht.ltc_1.value=K.state.rectAreaLTC1,Ht.ltc_2.value=K.state.rectAreaLTC2,Ht.pointLights.value=K.state.point,Ht.pointLightShadows.value=K.state.pointShadow,Ht.hemisphereLights.value=K.state.hemi,Ht.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ht.spotLightMatrix.value=K.state.spotLightMatrix,Ht.spotLightMap.value=K.state.spotLightMap,Ht.pointShadowMatrix.value=K.state.pointShadowMatrix),et.currentProgram=re,et.uniformsList=null,re}function Zo(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=Ou.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function jo(R,k){const rt=y.get(R);rt.outputColorSpace=k.outputColorSpace,rt.batching=k.batching,rt.batchingColor=k.batchingColor,rt.instancing=k.instancing,rt.instancingColor=k.instancingColor,rt.instancingMorph=k.instancingMorph,rt.skinning=k.skinning,rt.morphTargets=k.morphTargets,rt.morphNormals=k.morphNormals,rt.morphColors=k.morphColors,rt.morphTargetsCount=k.morphTargetsCount,rt.numClippingPlanes=k.numClippingPlanes,rt.numIntersection=k.numClipIntersection,rt.vertexAlphas=k.vertexAlphas,rt.vertexTangents=k.vertexTangents,rt.toneMapping=k.toneMapping}function Ko(R,k,rt,et,K){k.isScene!==!0&&(k=Ee),q.resetTextureUnits();const Dt=k.fog,zt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?k.environment:null,wt=it===null?U.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Os,kt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Zt=pt.get(et.envMap||zt,kt),te=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ht=!!rt.morphAttributes.position,ue=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color;let Ye=Fi;et.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const Ae=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,dn=Ae!==void 0?Ae.length:0,Vt=y.get(et),Dn=V.state.lights;if(Wt===!0&&(jt===!0||R!==j)){const an=R===j&&et.id===st;Mt.setState(et,R,an)}let ie=!1;et.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Dn.state.version||Vt.outputColorSpace!==wt||K.isBatchedMesh&&Vt.batching===!1||!K.isBatchedMesh&&Vt.batching===!0||K.isBatchedMesh&&Vt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Vt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Vt.instancing===!1||!K.isInstancedMesh&&Vt.instancing===!0||K.isSkinnedMesh&&Vt.skinning===!1||!K.isSkinnedMesh&&Vt.skinning===!0||K.isInstancedMesh&&Vt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Vt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Vt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Vt.instancingMorph===!1&&K.morphTexture!==null||Vt.envMap!==Zt||et.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==te||Vt.vertexTangents!==re||Vt.morphTargets!==Ht||Vt.morphNormals!==ue||Vt.morphColors!==qe||Vt.toneMapping!==Ye||Vt.morphTargetsCount!==dn)&&(ie=!0):(ie=!0,Vt.__version=et.version);let wn=Vt.currentProgram;ie===!0&&(wn=ya(et,k,K));let Xn=!1,pi=!1,kn=!1;const Le=wn.getUniforms(),nn=Vt.uniforms;if(qt.useProgram(wn.program)&&(Xn=!0,pi=!0,kn=!0),et.id!==st&&(st=et.id,pi=!0),Xn||j!==R){qt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Le.setValue(G,"projectionMatrix",R.projectionMatrix),Le.setValue(G,"viewMatrix",R.matrixWorldInverse);const mi=Le.map.cameraPosition;mi!==void 0&&mi.setValue(G,pe.setFromMatrixPosition(R.matrixWorld)),Ue.logarithmicDepthBuffer&&Le.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Le.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),j!==R&&(j=R,pi=!0,kn=!0)}if(Vt.needsLights&&(Dn.state.directionalShadowMap.length>0&&Le.setValue(G,"directionalShadowMap",Dn.state.directionalShadowMap,q),Dn.state.spotShadowMap.length>0&&Le.setValue(G,"spotShadowMap",Dn.state.spotShadowMap,q),Dn.state.pointShadowMap.length>0&&Le.setValue(G,"pointShadowMap",Dn.state.pointShadowMap,q)),K.isSkinnedMesh){Le.setOptional(G,K,"bindMatrix"),Le.setOptional(G,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Le.setValue(G,"boneTexture",an.boneTexture,q))}K.isBatchedMesh&&(Le.setOptional(G,K,"batchingTexture"),Le.setValue(G,"batchingTexture",K._matricesTexture,q),Le.setOptional(G,K,"batchingIdTexture"),Le.setValue(G,"batchingIdTexture",K._indirectTexture,q),Le.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&Le.setValue(G,"batchingColorTexture",K._colorsTexture,q));const Un=rt.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ft.update(K,rt,wn),(pi||Vt.receiveShadow!==K.receiveShadow)&&(Vt.receiveShadow=K.receiveShadow,Le.setValue(G,"receiveShadow",K.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=AA()),pi&&(Le.setValue(G,"toneMappingExposure",U.toneMappingExposure),Vt.needsLights&&ir(nn,kn),Dt&&et.fog===!0&&Kt.refreshFogUniforms(nn,Dt),Kt.refreshMaterialUniforms(nn,et,mt,Y,V.state.transmissionRenderTarget[R.id]),Ou.upload(G,Zo(Vt),nn,q)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ou.upload(G,Zo(Vt),nn,q),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Le.setValue(G,"center",K.center),Le.setValue(G,"modelViewMatrix",K.modelViewMatrix),Le.setValue(G,"normalMatrix",K.normalMatrix),Le.setValue(G,"modelMatrix",K.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const an=et.uniformsGroups;for(let mi=0,Vi=an.length;mi<Vi;mi++){const Br=an[mi];Bt.update(Br,wn),Bt.bind(Br,wn)}}return wn}function ir(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Hs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(R,k,rt){const et=y.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=k,y.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const rt=y.get(R);rt.__webglFramebuffer=k,rt.__useDefaultFramebuffer=k===void 0};const Ea=G.createFramebuffer();this.setRenderTarget=function(R,k=0,rt=0){it=R,H=k,J=rt;let et=null,K=!1,Dt=!1;if(R){const wt=y.get(R);if(wt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(G.FRAMEBUFFER,wt.__webglFramebuffer),w.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest,qt.viewport(w),qt.scissor(F),qt.setScissorTest(lt),st=-1;return}else if(wt.__webglFramebuffer===void 0)q.setupRenderTarget(R);else if(wt.__hasExternalTextures)q.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(wt.__boundDepthTexture!==te){if(te!==null&&y.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(R)}}const kt=R.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);const Zt=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?et=Zt[k][rt]:et=Zt[k],K=!0):R.samples>0&&q.useMultisampledRTT(R)===!1?et=y.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?et=Zt[rt]:et=Zt,w.copy(R.viewport),F.copy(R.scissor),lt=R.scissorTest}else w.copy(tt).multiplyScalar(mt).floor(),F.copy(_t).multiplyScalar(mt).floor(),lt=St;if(rt!==0&&(et=Ea),qt.bindFramebuffer(G.FRAMEBUFFER,et)&&qt.drawBuffers(R,et),qt.viewport(w),qt.scissor(F),qt.setScissorTest(lt),K){const wt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+k,wt.__webglTexture,rt)}else if(Dt){const wt=k;for(let kt=0;kt<R.textures.length;kt++){const Zt=y.get(R.textures[kt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+kt,Zt.__webglTexture,rt,wt)}}else if(R!==null&&rt!==0){const wt=y.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,wt.__webglTexture,rt)}st=-1},this.readRenderTargetPixels=function(R,k,rt,et,K,Dt,zt,wt=0){if(!(R&&R.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt){qt.bindFramebuffer(G.FRAMEBUFFER,kt);try{const Zt=R.textures[wt],te=Zt.format,re=Zt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-et&&rt>=0&&rt<=R.height-K&&G.readPixels(k,rt,et,K,Rt.convert(te),Rt.convert(re),Dt)}finally{const Zt=it!==null?y.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(R,k,rt,et,K,Dt,zt,wt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt)if(k>=0&&k<=R.width-et&&rt>=0&&rt<=R.height-K){qt.bindFramebuffer(G.FRAMEBUFFER,kt);const Zt=R.textures[wt],te=Zt.format,re=Zt.type;if(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+wt),!Ue.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.bufferData(G.PIXEL_PACK_BUFFER,Dt.byteLength,G.STREAM_READ),G.readPixels(k,rt,et,K,Rt.convert(te),Rt.convert(re),0);const ue=it!==null?y.get(it).__webglFramebuffer:null;qt.bindFramebuffer(G.FRAMEBUFFER,ue);const qe=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await KS(G,qe,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Ht),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Dt),G.deleteBuffer(Ht),G.deleteSync(qe),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,rt=0){const et=Math.pow(2,-rt),K=Math.floor(R.image.width*et),Dt=Math.floor(R.image.height*et),zt=k!==null?k.x:0,wt=k!==null?k.y:0;q.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,zt,wt,K,Dt),qt.unbindTexture()};const Ta=G.createFramebuffer(),ar=G.createFramebuffer();this.copyTextureToTexture=function(R,k,rt=null,et=null,K=0,Dt=0){let zt,wt,kt,Zt,te,re,Ht,ue,qe;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,wt=rt.max.y-rt.min.y,kt=rt.isBox3?rt.max.z-rt.min.z:1,Zt=rt.min.x,te=rt.min.y,re=rt.isBox3?rt.min.z:0;else{const nn=Math.pow(2,-K);zt=Math.floor(Ye.width*nn),wt=Math.floor(Ye.height*nn),R.isDataArrayTexture?kt=Ye.depth:R.isData3DTexture?kt=Math.floor(Ye.depth*nn):kt=1,Zt=0,te=0,re=0}et!==null?(Ht=et.x,ue=et.y,qe=et.z):(Ht=0,ue=0,qe=0);const Ae=Rt.convert(k.format),dn=Rt.convert(k.type);let Vt;k.isData3DTexture?(q.setTexture3D(k,0),Vt=G.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),Vt=G.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),Vt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment);const Dn=G.getParameter(G.UNPACK_ROW_LENGTH),ie=G.getParameter(G.UNPACK_IMAGE_HEIGHT),wn=G.getParameter(G.UNPACK_SKIP_PIXELS),Xn=G.getParameter(G.UNPACK_SKIP_ROWS),pi=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ye.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ye.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zt),G.pixelStorei(G.UNPACK_SKIP_ROWS,te),G.pixelStorei(G.UNPACK_SKIP_IMAGES,re);const kn=R.isDataArrayTexture||R.isData3DTexture,Le=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const nn=y.get(R),Un=y.get(k),an=y.get(nn.__renderTarget),mi=y.get(Un.__renderTarget);qt.bindFramebuffer(G.READ_FRAMEBUFFER,an.__webglFramebuffer),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,mi.__webglFramebuffer);for(let Vi=0;Vi<kt;Vi++)kn&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(R).__webglTexture,K,re+Vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,y.get(k).__webglTexture,Dt,qe+Vi)),G.blitFramebuffer(Zt,te,zt,wt,Ht,ue,zt,wt,G.DEPTH_BUFFER_BIT,G.NEAREST);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||y.has(R)){const nn=y.get(R),Un=y.get(k);qt.bindFramebuffer(G.READ_FRAMEBUFFER,Ta),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,ar);for(let an=0;an<kt;an++)kn?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,nn.__webglTexture,K,re+an):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,nn.__webglTexture,K),Le?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,Dt,qe+an):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,Dt),K!==0?G.blitFramebuffer(Zt,te,zt,wt,Ht,ue,zt,wt,G.COLOR_BUFFER_BIT,G.NEAREST):Le?G.copyTexSubImage3D(Vt,Dt,Ht,ue,qe+an,Zt,te,zt,wt):G.copyTexSubImage2D(Vt,Dt,Ht,ue,Zt,te,zt,wt);qt.bindFramebuffer(G.READ_FRAMEBUFFER,null),qt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Le?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(Vt,Dt,Ht,ue,qe,zt,wt,kt,Ae,dn,Ye.data):k.isCompressedArrayTexture?G.compressedTexSubImage3D(Vt,Dt,Ht,ue,qe,zt,wt,kt,Ae,Ye.data):G.texSubImage3D(Vt,Dt,Ht,ue,qe,zt,wt,kt,Ae,dn,Ye):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,zt,wt,Ae,dn,Ye.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,Ye.width,Ye.height,Ae,Ye.data):G.texSubImage2D(G.TEXTURE_2D,Dt,Ht,ue,zt,wt,Ae,dn,Ye);G.pixelStorei(G.UNPACK_ROW_LENGTH,Dn),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ie),G.pixelStorei(G.UNPACK_SKIP_PIXELS,wn),G.pixelStorei(G.UNPACK_SKIP_ROWS,Xn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,pi),Dt===0&&k.generateMipmaps&&G.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&q.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?q.setTextureCube(R,0):R.isData3DTexture?q.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?q.setTexture2DArray(R,0):q.setTexture2D(R,0),qt.unbindTexture()},this.resetState=function(){H=0,J=0,it=null,qt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(e),i.unpackColorSpace=be._getUnpackColorSpace()}}const S_=8,CA=`
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,DA=`
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE = vec3(47.0, 75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);

  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;

  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) {
    return baseColor;
  }

  vec3 gradientColor;

  if (lineGradientCount == 1) {
    gradientColor = lineGradient[0];
  } else {
    float clampedT = clamp(t, 0.0, 0.9999);
    float scaled = clampedT * float(lineGradientCount - 1);
    int idx = int(floor(scaled));
    float f = fract(scaled);
    int idx2 = min(idx + 1, lineGradientCount - 1);

    vec3 c1 = lineGradient[idx];
    vec3 c2 = lineGradient[idx2];

    gradientColor = mix(c1, c2, f);
  }

  return gradientColor * 0.3;
}

float wave(vec2 uv, float offset, vec2 screenUv, vec2 mouseUv, bool shouldBend) {
  float time = iTime * animationSpeed;

  float xOffset = offset;
  float xMovement = time * 0.1;
  float amp = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + xOffset + xMovement) * amp;

  if (shouldBend) {
    vec2 d = screenUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    float bendOffset = (mouseUv.y - screenUv.y) * influence * bendStrength * bendInfluence;
    y += bendOffset;
  }

  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);
  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  if (enableBottom) {
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = bottomWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = middleWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      col += lineCol * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        baseUv,
        mouseUv,
        interactive
      );
    }
  }

  if (enableTop) {
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      vec3 lineCol = getLineColor(t, b);

      float angle = topWavePosition.z * log(length(baseUv) + 1.0);
      vec2 ruv = baseUv * rotate(angle);
      ruv.x *= -1.0;
      col += lineCol * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        baseUv,
        mouseUv,
        interactive
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;function wA(o){let e=(o||"").trim();e.startsWith("#")&&(e=e.slice(1));let i=255,r=255,l=255;return e.length===3?(i=parseInt(e[0]+e[0],16),r=parseInt(e[1]+e[1],16),l=parseInt(e[2]+e[2],16)):e.length===6&&(i=parseInt(e.slice(0,2),16),r=parseInt(e.slice(2,4),16),l=parseInt(e.slice(4,6),16)),new at(i/255,r/255,l/255)}function fa(o,e){return o??e}function UA({linesGradient:o=["#E945F5","#0C31C6","#E945F5"],enabledWaves:e=["top","middle","bottom"],lineCount:i=[6,6,6],lineDistance:r=[5,5,5],topWavePosition:l={x:10,y:.5,rotate:-.4},middleWavePosition:c={x:5,y:0,rotate:.2},bottomWavePosition:d={x:2,y:-.7,rotate:-1},animationSpeed:p=2.7,interactive:m=!0,bendRadius:h=5,bendStrength:x=-.5,mouseDamping:S=.05,parallax:_=!0,parallaxStrength:E=.2,mixBlendMode:T="screen"}){const C=da.useRef(null),M=da.useRef(new ye(-1e3,-1e3)),v=da.useRef(new ye(-1e3,-1e3)),D=da.useRef(0),P=da.useRef(0),N=da.useRef(new ye(0,0)),V=da.useRef(new ye(0,0)),I=st=>{if(typeof i=="number")return i;if(!e.includes(st))return 0;const j=e.indexOf(st);return i[j]??6},B=st=>{if(typeof r=="number")return r;if(!e.includes(st))return .1;const j=e.indexOf(st);return r[j]??.1},b=e.includes("top")?I("top"):0,U=e.includes("middle")?I("middle"):0,ht=e.includes("bottom")?I("bottom"):0,H=e.includes("top")?B("top")*.01:.01,J=e.includes("middle")?B("middle")*.01:.01,it=e.includes("bottom")?B("bottom")*.01:.01;return da.useEffect(()=>{if(!C.current)return;const st=new dM,j=new Fh(-1,1,1,-1,0,1);j.position.z=1;const w=new RA({antialias:!0,alpha:!1});w.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),w.domElement.style.width="100%",w.domElement.style.height="100%",C.current.appendChild(w.domElement);const F={iTime:{value:0},iResolution:{value:new at(1,1,1)},animationSpeed:{value:p},enableTop:{value:e.includes("top")},enableMiddle:{value:e.includes("middle")},enableBottom:{value:e.includes("bottom")},topLineCount:{value:b},middleLineCount:{value:U},bottomLineCount:{value:ht},topLineDistance:{value:H},middleLineDistance:{value:J},bottomLineDistance:{value:it},topWavePosition:{value:new at(fa(l?.x,10),fa(l?.y,.5),fa(l?.rotate,-.4))},middleWavePosition:{value:new at(fa(c?.x,5),fa(c?.y,0),fa(c?.rotate,.2))},bottomWavePosition:{value:new at(fa(d?.x,2),fa(d?.y,-.7),fa(d?.rotate,-1))},iMouse:{value:new ye(-1e3,-1e3)},interactive:{value:m},bendRadius:{value:h},bendStrength:{value:x},bendInfluence:{value:0},parallax:{value:_},parallaxStrength:{value:E},parallaxOffset:{value:new ye(0,0)},lineGradient:{value:Array.from({length:S_},()=>new at(1,1,1))},lineGradientCount:{value:0}};if(o&&o.length>0){const St=o.slice(0,S_);F.lineGradientCount.value=St.length,St.forEach((Ut,Wt)=>{const jt=wA(Ut);F.lineGradient.value[Wt].set(jt.x,jt.y,jt.z)})}const lt=new bi({uniforms:F,vertexShader:CA,fragmentShader:DA}),dt=new qo(2,2),Et=new Hi(dt,lt);st.add(Et);const O=new NM,Y=()=>{const St=C.current,Ut=St?.clientWidth||1,Wt=St?.clientHeight||1;w.setSize(Ut,Wt,!1),F.iResolution.value.set(w.domElement.width,w.domElement.height,1)};Y();const mt=typeof ResizeObserver<"u"?new ResizeObserver(Y):null;mt&&C.current&&mt.observe(C.current);const bt=St=>{const Ut=w.domElement.getBoundingClientRect(),Wt=St.clientX-Ut.left,jt=St.clientY-Ut.top,Ve=w.getPixelRatio();if(M.current.set(Wt*Ve,(Ut.height-jt)*Ve),D.current=1,_){const pe=Ut.width/2,he=Ut.height/2,Ee=(Wt-pe)/Ut.width,ne=-(jt-he)/Ut.height;N.current.set(Ee*E,ne*E)}},Ot=()=>{D.current=0};m&&(w.domElement.addEventListener("pointermove",bt),w.domElement.addEventListener("pointerleave",Ot));let tt=0;const _t=()=>{F.iTime.value=O.getElapsedTime(),m&&(v.current.lerp(M.current,S),F.iMouse.value.copy(v.current),P.current+=(D.current-P.current)*S,F.bendInfluence.value=P.current),_&&(V.current.lerp(N.current,S),F.parallaxOffset.value.copy(V.current)),w.render(st,j),tt=window.requestAnimationFrame(_t)};return _t(),()=>{window.cancelAnimationFrame(tt),mt&&mt.disconnect(),m&&(w.domElement.removeEventListener("pointermove",bt),w.domElement.removeEventListener("pointerleave",Ot)),dt.dispose(),lt.dispose(),w.dispose(),w.domElement.parentElement&&w.domElement.parentElement.removeChild(w.domElement)}},[p,h,x,ht,it,d,e,m,r,i,o,U,J,c,S,_,E,b,H,l]),pn.jsx("div",{ref:C,className:"floating-lines-container",style:{mixBlendMode:T}})}function LA(){return pn.jsxs("div",{className:"landing-v2",children:[pn.jsx("div",{className:"lines-bg","aria-hidden":"true",children:pn.jsx(UA,{linesGradient:["#88B3FF","#5D63FF","#BA7BFF"],animationSpeed:1.35,interactive:!0,bendRadius:5,bendStrength:-.5,mouseDamping:.05,parallax:!0,parallaxStrength:.2,lineCount:[8,9,8],lineDistance:[4.2,4,4.5],mixBlendMode:"screen"})}),pn.jsx("div",{className:"ambient ambient-a","aria-hidden":"true"}),pn.jsx("div",{className:"ambient ambient-b","aria-hidden":"true"}),pn.jsxs("header",{className:"nav-shell",children:[pn.jsxs("a",{className:"brand",href:"#",children:[pn.jsx("span",{className:"mark","aria-hidden":"true",children:"◌"}),pn.jsx("span",{children:"AlphaNexus"})]}),pn.jsxs("nav",{className:"nav-links",children:[pn.jsx("a",{href:"/",children:"Home"}),pn.jsx("a",{href:"/console",children:"Console"})]})]}),pn.jsxs("main",{className:"hero-shell",children:[pn.jsx("h1",{children:"Multi-Agent Research Engine"}),pn.jsx("div",{className:"cta-row",children:pn.jsx("a",{className:"btn btn-primary",href:"/console",children:"Get Started"})})]})]})}pS.createRoot(document.getElementById("root")).render(pn.jsx(da.StrictMode,{children:pn.jsx(LA,{})}));
